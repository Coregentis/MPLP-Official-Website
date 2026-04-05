#!/usr/bin/env node
/**
 * generate-seo-manifest.mjs
 * Generates website-seo-manifest.json for SEO/GEO auditing
 * 
 * Output includes per-page:
 * - path, profile, title, description
 * - canonical, robots directive
 * - disclaimer_present, jsonld_types
 * 
 * Usage:
 *   npm run generate:seo-manifest
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const APP_DIR = path.join(PROJECT_ROOT, 'app');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'public', 'website-seo-manifest.json');
const MODULE_SOURCE_PATH = path.join(PROJECT_ROOT, 'lib', 'content', 'modules.ts');
const FLOW_SOURCE_PATH = path.join(PROJECT_ROOT, 'lib', 'content', 'flows.ts');

console.log('\n[SEO-MANIFEST] Generating website SEO manifest...\n');

// This manifest is grounded in the current website route inventory and
// website-owned content projections only. It intentionally does not depend on
// WEBSITE_PAGE_PROFILE.yaml, which is not a current supported generation input
// for this repo surface.
const POLICY = {
    version: "1.0.0",
    profiles: {
        positioning: { enforcement: "strict", robots: "index,follow", title_suffix: "— MPLP", requires_disclaimer: true, jsonld_page_type: "WebPage" },
        evaluation_entry: { enforcement: "standard", robots: "index,follow", title_suffix: "— MPLP", requires_disclaimer: true, jsonld_page_type: "CollectionPage" },
        explainer_non_normative: { enforcement: "standard", robots: "index,follow", title_suffix: "— MPLP", requires_disclaimer: true, jsonld_page_type: "TechArticle" },
        governance: { enforcement: "standard", robots: "index,follow", title_suffix: "— MPLP", requires_disclaimer: true, jsonld_page_type: "AboutPage" },
        formative: { enforcement: "relaxed", robots: "noindex,nofollow", title_suffix: "— MPLP", requires_disclaimer: true, jsonld_page_type: "WebPage" },
    },
};

const EXCLUDED_ROUTES = new Set([
    "/definition",
    "/adoption",
    "/enterprise",
    "/governance",
    "/search",
    "/blog/[slug]",
]);

const ROUTE_OVERRIDES = {
    "/": {
        profileName: "positioning",
        title: "MPLP — Multi-Agent Lifecycle Protocol",
        description: "MPLP is a vendor-neutral lifecycle protocol for AI agent systems. This website provides discovery and positioning only. Repository and documentation provide the authoritative documentation chain. Validation Lab provides the adjudication surface.",
        canonical: "https://www.mplp.io",
    },
    "/what-is-mplp": {
        profileName: "explainer_non_normative",
        title: "What is MPLP? | Multi-Agent Lifecycle Protocol",
        description: "MPLP is a vendor-neutral lifecycle protocol for AI agent systems. This is the canonical website definition anchor.",
        canonical: "https://www.mplp.io/what-is-mplp",
    },
    "/architecture": {
        profileName: "positioning",
        description: "High-level architecture overview for MPLP. Formal protocol requirements live in the documentation and repository.",
    },
    "/conformance": {
        profileName: "evaluation_entry",
        description: "Discovery page for MPLP conformance-related materials. Formal conformance references live in documentation and Validation Lab surfaces.",
    },
    "/golden-flows": {
        profileName: "evaluation_entry",
        description: "Discovery page for protocol-side Golden Flow scenarios. Formal definitions live in the documentation and repository tests.",
    },
    "/validation-lab": {
        profileName: "evaluation_entry",
        description: "Discovery guide to MPLP Validation Lab. This website page is pointer-oriented; current Lab references and adjudication outputs live in the documentation and Lab surfaces.",
    },
    "/governance/overview": {
        profileName: "governance",
        description: "Discovery overview of MPLP governance. Repository governance records and documentation references provide current authoritative detail.",
    },
    "/references": {
        profileName: "explainer_non_normative",
        description: "Citation contexts and external references for MPLP. Repository and documentation remain the authoritative documentation chain.",
    },
};

const DYNAMIC_ROUTE_RESOLVERS = {
    "/modules/[slug]": () => extractModules().map((module) => ({
        path: `/modules/${module.id}`,
        title: module.seoTier === "C"
            ? `${module.name} | MPLP Protocol`
            : `${module.name} | MPLP Protocol Specification`,
        description: module.metaDescription || module.desc,
        canonical: `https://www.mplp.io/modules/${module.id}`,
    })),
    "/golden-flows/[slug]": () => extractFlows().map((flow) => ({
        path: `/golden-flows/${flow.id.toLowerCase()}`,
        title: `${flow.title} | MPLP Golden Flows`,
        description: flow.coreBoundary
            ? `Website summary of MPLP core published-boundary scenario: ${flow.desc}`
            : `Website summary of MPLP profile-level flow scenario: ${flow.desc}`,
        canonical: `https://www.mplp.io/golden-flows/${flow.id.toLowerCase()}`,
    })),
};

// Find page files
function findPageFiles(dir, files = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findPageFiles(fullPath, files);
        } else if (entry.name === 'page.tsx') {
            files.push(fullPath);
        }
    }
    return files;
}

// Derive route from file path
function deriveRoute(filePath) {
    let route = filePath
        .replace(APP_DIR, '')
        .replace('/page.tsx', '')
        .replace(/\/\([^)]+\)/g, '');
    if (route === '') route = '/';
    return route;
}

function extractModules() {
    const source = fs.readFileSync(MODULE_SOURCE_PATH, 'utf-8');
    const modules = [];
    const modulePattern = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*desc:\s*"([^"]+)",[\s\S]*?seoTier:\s*"([^"]+)",[\s\S]*?metaDescription:\s*"([^"]+)"/g;

    for (const match of source.matchAll(modulePattern)) {
        modules.push({
            id: match[1],
            name: match[2],
            desc: match[3],
            seoTier: match[4],
            metaDescription: match[5],
        });
    }

    return modules;
}

function extractFlows() {
    const source = fs.readFileSync(FLOW_SOURCE_PATH, 'utf-8');
    const flows = [];
    const flowPattern = /defineFlow\(\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?coreBoundary:\s*(true|false),\s*desc:\s*"([^"]+)"/g;

    for (const match of source.matchAll(flowPattern)) {
        flows.push({
            id: match[1],
            title: match[2],
            coreBoundary: match[3] === 'true',
            desc: match[4],
        });
    }

    return flows;
}

// Get page config
function getPageConfig(route) {
    if (route === "/blog" || route.startsWith("/blog/")) {
        return { ...POLICY.profiles.formative, profileName: "formative" };
    }

    if (route.startsWith("/governance")) {
        return { ...POLICY.profiles.governance, profileName: "governance" };
    }

    if (route === "/conformance" || route === "/validation-lab" || route === "/golden-flows" || route.startsWith("/golden-flows/") || route === "/enterprise" || route === "/adoption") {
        return { ...POLICY.profiles.evaluation_entry, profileName: "evaluation_entry" };
    }

    if (route === "/what-is-mplp" || route === "/faq" || route === "/references" || route === "/posix-analogy") {
        return { ...POLICY.profiles.explainer_non_normative, profileName: "explainer_non_normative" };
    }

    return {
        ...POLICY.profiles.positioning,
        profileName: 'positioning'
    };
}

// Extract metadata from page content
function extractMetadata(content) {
    const result = {
        title: null,
        description: null,
        canonical: null,
        disclaimer_present: false,
        jsonld_types: []
    };

    // Extract title
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) {
        result.title = titleMatch[1];
    }

    // Extract description
    const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
    if (descMatch) {
        result.description = descMatch[1];
    }

    // Extract canonical
    const canonicalMatch = content.match(/canonical:\s*`([^`]+)`/);
    if (canonicalMatch) {
        result.canonical = canonicalMatch[1].replace(/\$\{siteConfig\.url\}/g, 'https://www.mplp.io');
    }

    // Check for disclaimer
    result.disclaimer_present =
        content.includes('NonCertificationNotice') ||
        content.includes('PositioningNotice') ||
        content.includes('Usage Boundary') ||
        content.includes('Important Disclaimer') ||
        content.includes('non-normative');

    // Extract JSON-LD types
    const jsonldMatches = content.matchAll(/"@type":\s*["']([^"']+)["']/g);
    for (const match of jsonldMatches) {
        if (!result.jsonld_types.includes(match[1])) {
            result.jsonld_types.push(match[1]);
        }
    }

    return result;
}

// Generate manifest
const pageFiles = findPageFiles(APP_DIR);
console.log(`Scanning ${pageFiles.length} page.tsx files...\n`);

const pages = [];
const seenPaths = new Set();

for (const filePath of pageFiles) {
    const route = deriveRoute(filePath);
    if (EXCLUDED_ROUTES.has(route)) continue;
    const content = fs.readFileSync(filePath, 'utf-8');
    const metadata = extractMetadata(content);
    const routeEntries = DYNAMIC_ROUTE_RESOLVERS[route]?.() || [{ path: route }];

    for (const routeEntry of routeEntries) {
        if (seenPaths.has(routeEntry.path)) continue;

        const config = getPageConfig(routeEntry.path);
        const override = ROUTE_OVERRIDES[routeEntry.path];
        const profileName = override?.profileName || config.profileName;

        pages.push({
            path: routeEntry.path,
            profile: profileName,
            enforcement: config.enforcement || 'standard',
            title: routeEntry.title || override?.title || metadata.title,
            description: routeEntry.description || override?.description || metadata.description,
            canonical: routeEntry.canonical || override?.canonical || metadata.canonical || `https://www.mplp.io${routeEntry.path === "/" ? "" : routeEntry.path}`,
            robots: config.robots || 'index,follow',
            title_suffix: config.title_suffix || '— MPLP',
            jsonld_page_type: config.jsonld_page_type || 'WebPage',
            jsonld_types_found: metadata.jsonld_types,
            requires_disclaimer: config.requires_disclaimer || false,
            disclaimer_present: metadata.disclaimer_present
        });

        seenPaths.add(routeEntry.path);
    }
}

// Sort by path
pages.sort((a, b) => a.path.localeCompare(b.path));

const manifest = {
    version: POLICY.version,
    generatedAt: new Date().toISOString(),
    website_release_version: "1.0.0",
    totalPages: pages.length,
    summary: {
        by_profile: {},
        by_enforcement: {},
        disclaimer_coverage: {
            required: 0,
            present: 0
        }
    },
    pages
};

// Calculate summary
for (const page of pages) {
    manifest.summary.by_profile[page.profile] = (manifest.summary.by_profile[page.profile] || 0) + 1;
    manifest.summary.by_enforcement[page.enforcement] = (manifest.summary.by_enforcement[page.enforcement] || 0) + 1;

    if (page.requires_disclaimer) {
        manifest.summary.disclaimer_coverage.required++;
        if (page.disclaimer_present) {
            manifest.summary.disclaimer_coverage.present++;
        }
    }
}

// Write manifest
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
console.log(`✅ Manifest written to: ${OUTPUT_PATH}`);
console.log(`   Total pages: ${manifest.totalPages}`);
console.log(`   By profile: ${JSON.stringify(manifest.summary.by_profile)}`);
console.log(`   By enforcement: ${JSON.stringify(manifest.summary.by_enforcement)}`);
console.log(`   Disclaimer coverage: ${manifest.summary.disclaimer_coverage.present}/${manifest.summary.disclaimer_coverage.required}`);
