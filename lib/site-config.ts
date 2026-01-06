// Site-wide configuration
export const siteConfig = {
    name: "MPLP",
    title: "MPLP — The Agent OS Protocol",
    description:
        "Multi-Agent Lifecycle Protocol: The vendor-neutral, observable, governed lifecycle protocol for AI agents.",
    url: "https://www.mplp.io",
    ogImage: "/images/og-image.png",
    links: {
        github: "https://github.com/Coregentis/MPLP-Protocol",
        docs: "https://docs.mplp.io",
        twitter: "https://x.com/mplpprotocol",
    },
    keywords: [
        "AgentOS Protocol",
        "Multi-Agent",
        "MPLP",
        "Observable",
        "Governed",
        "Vendor-neutral",
        "Artificial Intelligence",
        "Machine Learning",
        "AI Agent",
        "AI protocol",
        "AI framework",
    ],
};

// Centralized documentation URLs - single source of truth
// MUST match actual docs.mplp.io navigation structure (verified against /docs/docs/*)
export const DOCS_URLS = {
    // Entry points
    home: "https://docs.mplp.io",
    overview: "https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview",

    // Architecture - /docs/docs/specification/architecture/*
    architecture: "https://docs.mplp.io/docs/specification/architecture",
    l1ToL4: "https://docs.mplp.io/docs/specification/architecture/l1-l4-architecture-deep-dive",
    l1CoreProtocol: "https://docs.mplp.io/docs/specification/architecture/l1-core-protocol",
    l4IntegrationInfra: "https://docs.mplp.io/docs/specification/architecture/l4-integration-infra",
    kernelDuties: "https://docs.mplp.io/docs/specification/architecture/cross-cutting-kernel-duties",

    // Modules - /docs/docs/specification/modules/*
    modules: "https://docs.mplp.io/docs/specification/modules",
    moduleInteractions: "https://docs.mplp.io/docs/specification/modules/module-interactions",
    contextModule: "https://docs.mplp.io/docs/specification/modules/context-module",

    // Runtime - /docs/docs/guides/runtime/*
    runtimeOverview: "https://docs.mplp.io/docs/guides/runtime/runtime-glue-overview",
    ael: "https://docs.mplp.io/docs/guides/runtime/ael",
    vsl: "https://docs.mplp.io/docs/guides/runtime/vsl",
    psg: "https://docs.mplp.io/docs/guides/runtime/psg",

    // Golden Flows - /docs/docs/evaluation/golden-flows/*
    goldenFlows: "https://docs.mplp.io/docs/evaluation/golden-flows",

    // Profiles - /docs/docs/specification/profiles/*
    saProfile: "https://docs.mplp.io/docs/specification/profiles/sa-profile",
    mapProfile: "https://docs.mplp.io/docs/specification/profiles/map-profile",

    // Conformance & Tests - /docs/docs/evaluation/tests/*
    conformance: "https://docs.mplp.io/docs/evaluation/conformance",
    testsOverview: "https://docs.mplp.io/docs/evaluation/tests",

    // Guides - /docs/docs/guides/*
    guides: "https://docs.mplp.io/docs/guides",
    quickstart: "https://docs.mplp.io/docs/guides/examples",

    // SDK - /docs/docs/guides/sdk/*
    sdkDocs: "https://docs.mplp.io/docs/guides/sdk",

    // Governance - /docs/docs/evaluation/governance/*
    governance: "https://docs.mplp.io/docs/evaluation/governance",
    releasePolicy: "https://docs.mplp.io/docs/evaluation/governance/versioning-policy",
    contribution: "https://docs.mplp.io/docs/evaluation/governance/mip-process",

    // External
    github: "https://github.com/Coregentis/MPLP-Protocol",
    community: "https://github.com/Coregentis/MPLP-Protocol/issues",
} as const;

// Repository URLs - source of truth links
// MUST point to actual repo directories
export const REPO_URLS = {
    root: "https://github.com/Coregentis/MPLP-Protocol",
    schemas: "https://github.com/Coregentis/MPLP-Protocol/tree/main/schemas",
    governance: "https://github.com/Coregentis/MPLP-Protocol/tree/main/governance",
    tests: "https://github.com/Coregentis/MPLP-Protocol/tree/main/tests",
    packages: "https://github.com/Coregentis/MPLP-Protocol/tree/main/packages",
    docs: "https://github.com/Coregentis/MPLP-Protocol/tree/main/docs",
} as const;

// Type-safe key references for components
export type DocsKey = keyof typeof DOCS_URLS;
export type RepoKey = keyof typeof REPO_URLS;

// Helper for dynamic module URLs - uses DOCS_URLS.modules as base
// Prefer explicit DOCS_URLS keys when available (e.g., contextModule)
export function getModuleDocUrl(moduleId: string) {
    return `${DOCS_URLS.modules}/${moduleId}-module`;
}

// Navbar: Strict 7 Semantic Anchors ONLY (FROZEN)
// All other pages are reachable via these anchors
export const navItems = [
    { label: "Architecture", href: "/architecture" },       // Anchor #1
    { label: "Modules", href: "/modules" },                 // Anchor #2
    { label: "Kernel Duties", href: "/kernel-duties" },     // Anchor #3
    { label: "Golden Flows", href: "/golden-flows" },       // Anchor #4
    { label: "Governance", href: "/governance/overview" },  // Anchor #5
    { label: "References", href: "/references" },           // Anchor #6
    { label: "FAQ", href: "/faq" },                         // Anchor #7
];

export const footerLinks = {
    // Column 1: SPECIFICATION (Anchors #1-4)
    specification: [
        { label: "Definition", href: "/definition" },  // Canonical anchor
        { label: "Architecture", href: "/architecture" },
        { label: "Modules", href: "/modules" },
        { label: "Kernel Duties", href: "/kernel-duties" },
        { label: "Golden Flows", href: "/golden-flows" },
    ],
    // Column 2: GOVERNANCE & BOUNDARIES (Anchors #5-7)
    governance: [
        { label: "Governance", href: "/governance/overview" },
        { label: "References", href: "/references" },
        { label: "FAQ", href: "/faq" },
        { label: "Documentation", href: DOCS_URLS.home },
    ],
    // Column 3: EXTERNAL RESOURCES
    external: [
        { label: "GitHub Repository", href: DOCS_URLS.github },
        { label: "X (Twitter)", href: siteConfig.links.twitter },
    ],
};

