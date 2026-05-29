import { protocolIdentity, protocolUrls } from "@/lib/protocol-manifest";

// Site-wide configuration
export const MPLP_IDENTITY = {
    shortName: protocolIdentity.name,
    formalName: protocolIdentity.fullName,
    fullName: `${protocolIdentity.name} — ${protocolIdentity.fullName}`,
    formalDefinition: "MPLP is a vendor-neutral lifecycle protocol for AI agent systems.",
    websiteRole: "This website provides discovery and positioning only.",
} as const;

export const WEBSITE_CANONICAL_PATHS = {
    home: "/",
    definition: "/what-is-mplp",
    governance: "/governance/overview",
    search: "/search",
} as const;

export const WEBSITE_MACHINE_READABLE_DESCRIPTION = [
    MPLP_IDENTITY.formalDefinition,
    MPLP_IDENTITY.websiteRole,
    "Repository and documentation provide the authoritative documentation chain.",
    "Validation Lab provides the adjudication surface.",
].join(" ");

export const siteConfig = {
    name: MPLP_IDENTITY.shortName,
    title: MPLP_IDENTITY.fullName,
    description: `${MPLP_IDENTITY.formalDefinition} ${MPLP_IDENTITY.websiteRole}`,
    url: protocolUrls.website,
    ogImage: "/images/og-image.png",
    links: {
        github: protocolUrls.canonicalRepository,
        docs: protocolUrls.docs,
        twitter: "https://x.com/mplpprotocol",
    },
    keywords: [
        "Multi-Agent Lifecycle Protocol",
        "MPLP",
        "vendor-neutral",
        "lifecycle protocol",
        "AI agents",
        "protocol",
    ],
};

export const WEBSITE_CANONICAL_URLS = {
    home: siteConfig.url,
    definition: `${siteConfig.url}${WEBSITE_CANONICAL_PATHS.definition}`,
    governance: `${siteConfig.url}${WEBSITE_CANONICAL_PATHS.governance}`,
    search: `${siteConfig.url}${WEBSITE_CANONICAL_PATHS.search}`,
} as const;

// Centralized documentation URLs - single source of truth
// MUST match actual docs.mplp.io navigation structure (verified against /docs/docs/*)
export const DOCS_URLS = {
    // Entry points
    home: protocolUrls.docs,
    entrypoints: `${protocolUrls.docs}/docs/reference/entrypoints`,
    overview: `${protocolUrls.docs}/docs/introduction/mplp-v1.0-protocol-overview`,

    // Architecture - /docs/docs/specification/architecture/*
    architecture: `${protocolUrls.docs}/docs/specification/architecture`,
    l1ToL4: `${protocolUrls.docs}/docs/specification/architecture/l1-l4-architecture-deep-dive`,
    l1CoreProtocol: `${protocolUrls.docs}/docs/specification/architecture/l1-core-protocol`,
    l4IntegrationInfra: `${protocolUrls.docs}/docs/specification/architecture/l4-integration-infra`,
    kernelDuties: `${protocolUrls.docs}/docs/specification/architecture/cross-cutting-kernel-duties`,

    // Modules - /docs/docs/specification/modules/*
    // Entry point
    modules: `${protocolUrls.docs}/docs/specification/modules/module-interactions`,
    moduleInteractions: `${protocolUrls.docs}/docs/specification/modules/module-interactions`,
    // Individual module pages (explicit - no path concatenation)
    contextModulePage: `${protocolUrls.docs}/docs/specification/modules/context-module`,
    confirmModulePage: `${protocolUrls.docs}/docs/specification/modules/confirm-module`,
    collabModulePage: `${protocolUrls.docs}/docs/specification/modules/collab-module`,
    planModulePage: `${protocolUrls.docs}/docs/specification/modules/plan-module`,
    dialogModulePage: `${protocolUrls.docs}/docs/specification/modules/dialog-module`,
    traceModulePage: `${protocolUrls.docs}/docs/specification/modules/trace-module`,
    roleModulePage: `${protocolUrls.docs}/docs/specification/modules/role-module`,
    networkModulePage: `${protocolUrls.docs}/docs/specification/modules/network-module`,
    extensionModulePage: `${protocolUrls.docs}/docs/specification/modules/extension-module`,
    coreModulePage: `${protocolUrls.docs}/docs/specification/modules/core-module`,

    // Runtime - /docs/docs/guides/runtime/*
    runtimeOverview: `${protocolUrls.docs}/docs/guides/runtime/runtime-glue-overview`,
    ael: `${protocolUrls.docs}/docs/guides/runtime/ael`,
    vsl: `${protocolUrls.docs}/docs/guides/runtime/vsl`,
    psg: `${protocolUrls.docs}/docs/guides/runtime/psg`,

    // Golden Flows - /docs/docs/evaluation/golden-flows/*
    goldenFlows: `${protocolUrls.docs}/docs/evaluation/golden-flows`,
    goldenFlowRegistry: `${protocolUrls.docs}/docs/evaluation/tests/golden-flow-registry`,

    // Profiles - /docs/docs/specification/profiles/*
    saProfile: `${protocolUrls.docs}/docs/specification/profiles/sa-profile`,
    mapProfile: `${protocolUrls.docs}/docs/specification/profiles/map-profile`,

    // Conformance & Tests - /docs/docs/evaluation/tests/*
    conformance: `${protocolUrls.docs}/docs/evaluation/conformance`,
    testsOverview: `${protocolUrls.docs}/docs/evaluation/tests/test-architecture-overview`,

    // Standards - /docs/docs/evaluation/standards/*
    standardsPositioning: `${protocolUrls.docs}/docs/evaluation/standards/positioning`,
    standardsIsoMapping: `${protocolUrls.docs}/docs/evaluation/standards/iso-mapping`,
    standardsNistMapping: `${protocolUrls.docs}/docs/evaluation/standards/nist-mapping`,

    // Guides - /docs/docs/guides/*
    guides: `${protocolUrls.docs}/docs/guides`,
    quickstart: `${protocolUrls.docs}/docs/guides/examples/single-agent-flow`,

    // SDK - /docs/docs/guides/sdk/*
    sdkDocs: `${protocolUrls.docs}/docs/guides/sdk/ts-sdk-guide`,

    // Governance - /docs/docs/evaluation/governance/*
    governance: `${protocolUrls.docs}/docs/evaluation/governance`,
    releasePolicy: `${protocolUrls.docs}/docs/evaluation/governance/versioning-policy`,
    contribution: `${protocolUrls.docs}/docs/evaluation/governance/contributing`,

    // External
    github: protocolUrls.canonicalRepository,
    community: `${protocolUrls.canonicalRepository}/issues`,
} as const;

// Repository URLs - source of truth links
// MUST point to actual repo directories
export const REPO_URLS = {
    root: protocolUrls.canonicalRepository,
    schemas: `${protocolUrls.canonicalRepository}/tree/main/schemas`,
    governance: `${protocolUrls.canonicalRepository}/tree/main/governance`,
    tests: `${protocolUrls.canonicalRepository}/tree/main/tests`,
    packages: `${protocolUrls.canonicalRepository}/tree/main/packages`,
    docs: `${protocolUrls.canonicalRepository}/tree/main/docs`,
} as const;

// Lab URLs - Evidence Verdict Gateway (4th entry point)
// Canonical host for Validation Lab
// SSOT: routes verified against Validation_Lab/components/Nav.tsx
// Website must only link stable first-level entries (no sub-routes unless frozen)
export const LAB_URLS = {
    home: protocolUrls.validationLab,
    contract: `${protocolUrls.validationLab}/policies/contract`,
    strength: `${protocolUrls.validationLab}/policies/strength`,
    guarantees: `${protocolUrls.validationLab}/guarantees`,
    runs: `${protocolUrls.validationLab}/runs`,
    rulesets: `${protocolUrls.validationLab}/rulesets`,
    // Verified stable first-level entry points for Website preview cards
    coverage: `${protocolUrls.validationLab}/coverage`,
    adjudication: `${protocolUrls.validationLab}/adjudication`,
} as const;

// Type-safe key references for components
export type DocsKey = keyof typeof DOCS_URLS;
export type RepoKey = keyof typeof REPO_URLS;

// Module URL lookup map - maps module ID to explicit DOCS_URLS key
const MODULE_DOC_KEYS: Record<string, keyof typeof DOCS_URLS> = {
    context: "contextModulePage",
    confirm: "confirmModulePage",
    collab: "collabModulePage",
    plan: "planModulePage",
    dialog: "dialogModulePage",
    trace: "traceModulePage",
    role: "roleModulePage",
    network: "networkModulePage",
    extension: "extensionModulePage",
    core: "coreModulePage",
};

// Helper for dynamic module URLs - uses explicit lookup (no path concatenation)
export function getModuleDocUrl(moduleId: string): string {
    const key = MODULE_DOC_KEYS[moduleId];
    if (key) {
        return DOCS_URLS[key];
    }
    // Fallback for unknown modules (should not happen in practice)
    console.warn(`Unknown module ID: ${moduleId}`);
    return DOCS_URLS.modules;
}

// Navbar: Strict 7 Semantic Anchors ONLY (FROZEN)
// All other pages are reachable via these anchors
export const navItems = [
    { label: "Architecture", href: "/architecture" },       // Anchor #1
    { label: "Modules", href: "/modules" },                 // Anchor #2
    { label: "Kernel Duties", href: "/kernel-duties" },     // Anchor #3
    { label: "Golden Flows", href: "/golden-flows" },       // Anchor #4
    { label: "Governance", href: WEBSITE_CANONICAL_PATHS.governance },  // Anchor #5
    { label: "References", href: "/references" },           // Anchor #6
    { label: "FAQ", href: "/faq" },                         // Anchor #7
];

export const footerLinks = {
    // Column 1: SPECIFICATION (Anchors #1-4)
    specification: [
        { label: "Definition", href: WEBSITE_CANONICAL_PATHS.definition },  // Canonical anchor
        { label: "Specification Entry", href: "/specification" },  // Three-entry navigation
        { label: "Architecture", href: "/architecture" },
        { label: "Modules", href: "/modules" },
        { label: "Kernel Duties", href: "/kernel-duties" },
        { label: "Golden Flows", href: "/golden-flows" },
    ],
    // Column 2: GOVERNANCE & BOUNDARIES (Anchors #5-7)
    governance: [
        { label: "Governance", href: WEBSITE_CANONICAL_PATHS.governance },
        { label: "POSIX Analogy", href: "/posix-analogy" },  // Non-normative explainer
        { label: "Validation Lab", href: "/validation-lab" },  // Evaluation entry
        { label: "References", href: "/references" },
        { label: "FAQ", href: "/faq" },
        { label: "Documentation", href: DOCS_URLS.entrypoints },
    ],
    // Column 3: EXTERNAL RESOURCES
    external: [
        { label: "GitHub Repository", href: DOCS_URLS.github },
        { label: "X (Twitter)", href: siteConfig.links.twitter },
    ],
};
