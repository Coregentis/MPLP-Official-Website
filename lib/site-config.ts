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
export const DOCS_URLS = {
    home: "https://docs.mplp.io",
    overview: "https://docs.mplp.io/docs/index/mplp-v1.0-protocol-overview",
    architecture: "https://docs.mplp.io/docs/architecture/architecture-overview",
    l1ToL4: "https://docs.mplp.io/docs/architecture/l1-l4-architecture-deep-dive",
    goldenFlows: "https://docs.mplp.io/docs/tests/golden-test-suite-overview",
    saProfile: "https://docs.mplp.io/docs/profiles/sa-profile",
    compliance: "https://docs.mplp.io/docs/guides/mplp-v1.0-compliance-checklist",
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

// Header IA principle:
// - Logo covers "Home"
// - Header right-side "Docs" CTA covers getting started
// - Governance is the primary conversion spine (Docs → Governance → Compliance)
export const navItems = [
    { label: "Why", href: "/why-mplp" },
    { label: "Architecture", href: "/architecture" },
    { label: "Modules", href: "/modules" },
    { label: "Golden Flows", href: "/golden-flows" },
    { label: "Governance", href: "/governance/overview" },
    { label: "Compliance", href: "/compliance" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Blog", href: "/blog" },
];

export const footerLinks = {
    // Column 1: PROTOCOL (T0 + Governance Root)
    // Only "semantic constitution" entry points
    protocol: [
        { label: "Home", href: "/" },
        { label: "Governance Overview", href: "/governance/overview" },
        { label: "Standards Positioning", href: "/standards/positioning" },
        { label: "What MPLP Is Not", href: "/standards/what-mplp-is-not" },
    ],
    // Column 2: SPECIFICATION (T1/T2)
    // Normative + evaluation entry points
    specification: [
        { label: "Architecture", href: "/architecture" },
        { label: "Modules", href: "/modules" },
        { label: "Golden Flows", href: "/golden-flows" },
        { label: "Documentation", href: DOCS_URLS.home },
    ],
    // Column 3: COMMUNITY (T3/T4)
    // Ecosystem and community entry points
    community: [
        { label: "Ecosystem", href: "/ecosystem" },
        { label: "Blog", href: "/blog" },
        { label: "GitHub", href: DOCS_URLS.github },
        { label: "X (Twitter)", href: siteConfig.links.twitter },
    ],
};

