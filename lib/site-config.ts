// Site-wide configuration
export const siteConfig = {
    name: "MPLP",
    title: "MPLP 鈥?The Agent OS Protocol",
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
export const DOCS_URLS = {
    home: "https://docs.mplp.io",
    overview: "https://docs.mplp.io/docs/index/mplp-v1.0-protocol-overview",
    architecture: "https://docs.mplp.io/docs/architecture/architecture-overview",
    l1ToL4: "https://docs.mplp.io/docs/architecture/l1-l4-architecture-deep-dive",
    goldenFlows: "https://docs.mplp.io/docs/golden-flows",
    saProfile: "https://docs.mplp.io/docs/profiles/sa-profile",
    compliance: "https://docs.mplp.io/docs/compliance",
    sdkDocs: "https://docs.mplp.io/sdk",
    tsSdkGuide: "https://docs.mplp.io/sdk",
    pySdkGuide: "https://docs.mplp.io/sdk",
    contextModule: "https://docs.mplp.io/docs/modules/context-module",
    quickstart: "https://docs.mplp.io/guides/quickstart-5min",
    roadmap: "https://docs.mplp.io/meta/roadmap",
    releasePolicy: "https://docs.mplp.io/docs/governance/versioning-policy",
    governance: "https://docs.mplp.io/docs/category/governance",
    contribution: "https://docs.mplp.io/docs/governance/mip-process",
    community: "https://github.com/Coregentis/MPLP-Protocol/issues",
    github: "https://github.com/Coregentis/MPLP-Protocol",
};

export function getModuleDocUrl(moduleId: string) {
    return `${DOCS_URLS.home}/docs/modules/${moduleId}-module`;
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

