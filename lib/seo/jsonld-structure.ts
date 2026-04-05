/**
 * JSON-LD Structure Tree
 * Discovery-oriented structured data only.
 * 
 * This file generates website-side structured data for discovery and routing.
 * Repository truth and documentation reference remain the authoritative
 * documentation chain for MPLP.
 * 
 * Governance Constraints (DGP-00 aligned):
 * - NO Product/Service/Certification schema types
 * - NO pass/fail/endorsement language
 * - T0 SSOT as single source
 */

import {
    DOCS_URLS,
    LAB_URLS,
    MPLP_IDENTITY,
    REPO_URLS,
    siteConfig,
    WEBSITE_CANONICAL_PATHS,
    WEBSITE_CANONICAL_URLS,
    WEBSITE_MACHINE_READABLE_DESCRIPTION,
} from "@/lib/site-config";

type JsonLdData = Record<string, unknown>;

const DEFINITION_TERM_ID = `${WEBSITE_CANONICAL_URLS.definition}#term`;
const DEFINITION_PAGE_ID = `${WEBSITE_CANONICAL_URLS.definition}#page`;
const DEFINED_TERM_SET_ID = `${siteConfig.url}#defined-terms`;

// 7 Sitelinks Anchor Pages (stable URLs)
export const ANCHOR_PAGES = [
    { path: "/architecture", name: "Architecture", description: "Architecture overview for MPLP as a lifecycle protocol." },
    { path: "/modules", name: "Modules", description: "Core modules of MPLP as a lifecycle protocol." },
    { path: "/kernel-duties", name: "Kernel Duties", description: "The 11 kernel duties describing lifecycle governance semantics." },
    { path: "/golden-flows", name: "Golden Flows", description: "Verification scenarios illustrating lifecycle semantics (non-adjudicative)." },
    { path: WEBSITE_CANONICAL_PATHS.governance, name: "Governance Overview", description: "Governance principles, boundaries, and RFC process overview (no certification)." },
    { path: "/faq", name: "FAQ", description: "FAQ including AI citation guidance and definitional boundaries." },
    { path: "/references", name: "References", description: "Citation contexts and external references (non-endorsement)." },
] as const;

function absUrl(path: string): string {
    return `${siteConfig.url}${path}`;
}

/**
 * DefinedTermSet - website-side discovery vocabulary only
 */
export function jsonLdDefinedTermSet(): JsonLdData {
    return {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": DEFINED_TERM_SET_ID,
        name: "MPLP Defined Terms",
        url: WEBSITE_CANONICAL_URLS.definition,
        description: "Discovery-oriented terminology for MPLP. Repository and Documentation remain the authoritative documentation chain.",
        hasDefinedTerm: [
            {
                "@type": "DefinedTerm",
                "@id": DEFINITION_TERM_ID,
                name: MPLP_IDENTITY.formalName,
                alternateName: MPLP_IDENTITY.shortName,
                description: MPLP_IDENTITY.formalDefinition,
                url: WEBSITE_CANONICAL_URLS.definition,
                subjectOf: [
                    WEBSITE_CANONICAL_URLS.definition,
                    DOCS_URLS.entrypoints,
                    REPO_URLS.root,
                ],
                isDefinedBy: { "@id": DEFINITION_PAGE_ID },
                inDefinedTermSet: { "@id": DEFINED_TERM_SET_ID },
            },
            {
                "@type": "DefinedTerm",
                "@id": `${siteConfig.url}#term-lifecycle-protocol`,
                name: "Lifecycle Protocol",
                description: "A protocol specification defining how AI agents are created, operated, audited, and decommissioned.",
                inDefinedTermSet: { "@id": DEFINED_TERM_SET_ID },
            },
        ],
    };
}

/**
 * WebSite with hasPart → stable anchor pages
 */
export function jsonLdWebSiteWithAnchors(): JsonLdData {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: MPLP_IDENTITY.fullName,
        url: siteConfig.url,
        description: WEBSITE_MACHINE_READABLE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}#mpgc` },
        about: { "@id": DEFINITION_TERM_ID },
        hasPart: ANCHOR_PAGES.map((anchor) => ({
            "@type": "WebPage",
            "@id": `${siteConfig.url}${anchor.path}#page`,
            name: `${anchor.name} | ${MPLP_IDENTITY.fullName}`,
            url: absUrl(anchor.path),
            description: anchor.description,
            isPartOf: { "@id": `${siteConfig.url}#website` },
        })),
    };
}

/**
 * Home WebPage - discovery surface only
 */
export function jsonLdHomeWebPage(): JsonLdData {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${siteConfig.url}#home`,
        url: siteConfig.url,
        name: MPLP_IDENTITY.fullName,
        description: WEBSITE_MACHINE_READABLE_DESCRIPTION,
        isPartOf: { "@id": `${siteConfig.url}#website` },
        about: { "@id": DEFINITION_TERM_ID },
        hasPart: ANCHOR_PAGES.map((anchor) => ({
            "@type": "WebPage",
            "@id": `${siteConfig.url}${anchor.path}#page`,
            name: anchor.name,
            url: absUrl(anchor.path),
        })),
        mainEntity: { "@id": DEFINITION_TERM_ID },
        significantLink: [
            WEBSITE_CANONICAL_URLS.definition,
            DOCS_URLS.entrypoints,
            REPO_URLS.root,
            LAB_URLS.home,
        ],
    };
}

/**
 * FAQPage generator - Structure ready, content populated in PR-05
 */
export function jsonLdFAQPage(mainEntity: JsonLdData[] = []): JsonLdData {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/faq#faqpage`,
        url: absUrl("/faq"),
        name: `FAQ | ${MPLP_IDENTITY.fullName}`,
        description: "Frequently asked questions about MPLP, including boundaries and routing guidance.",
        isPartOf: { "@id": `${siteConfig.url}#website` },
        about: { "@id": DEFINITION_TERM_ID },
        mainEntity,
    };
}

/**
 * References page as CollectionPage (non-endorsement)
 */
export function jsonLdReferencesPage(itemListElements: JsonLdData[] = []): JsonLdData {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/references#collection`,
        url: absUrl("/references"),
        name: `References | ${MPLP_IDENTITY.fullName}`,
        description: "Citation contexts and external references for MPLP (non-endorsement).",
        isPartOf: { "@id": `${siteConfig.url}#website` },
        about: { "@id": DEFINITION_TERM_ID },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: itemListElements,
        },
    };
}

/**
 * Generate the complete homepage structured data bundle
 */
export function generateHomepageJsonLd(): JsonLdData[] {
    return [
        jsonLdDefinedTermSet(),
        jsonLdWebSiteWithAnchors(),
        jsonLdHomeWebPage(),
    ];
}

/**
 * Stringify helper for script injection
 */
export function toJsonLdScript(ld: JsonLdData): string {
    return JSON.stringify(ld, null, 0);
}
