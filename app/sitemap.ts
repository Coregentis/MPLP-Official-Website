import { MetadataRoute } from "next";
import { siteConfig, WEBSITE_CANONICAL_PATHS } from "@/lib/site-config";
import { modules } from "@/lib/content/modules";
import { flows } from "@/lib/content/flows";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static pages
    const staticPages = [
        "",
        WEBSITE_CANONICAL_PATHS.definition,
        "/why-mplp",
        "/architecture",
        "/modules",

        // NEW: canonical pages (must be in sitemap if 200 + indexable)
        "/posix-analogy",
        "/specification",
        "/validation-lab",

        "/kernel-duties",  // PR-04: Added for sitelinks
        "/golden-flows",
        "/faq",            // PR-04: Added for sitelinks
        "/references",     // PR-04: Added for sitelinks
        "/ecosystem",
        WEBSITE_CANONICAL_PATHS.governance,
        "/governance/agentos-protocol",
        "/governance/evidence-chain",
        "/governance/governed-stack",
        "/governance/iso-iec-42001",
        "/governance/nist-ai-rmf",
        "/governance/eu-ai-act",
        "/conformance",
        // Removed redirect-source URLs (P1-1 GSC fix):
        // /standards/positioning, /standards/regulatory-positioning,
        // /standards/protocol-evaluation, /standards/what-mplp-is-not
        // These redirect to /references or /faq and should NOT be in sitemap
        "/governance/positioning/agentic-state-sovereignty",
        "/governance/positioning/semantic-drift-control",
        // "/blog", -> NOINDEX
        // "/blog/[slug]", -> NOINDEX
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date("2026-01-08"),  // Freeze date for consistent crawling
        changeFrequency: "weekly" as const,
        priority:
            route === ""
                ? 1
                : route === WEBSITE_CANONICAL_PATHS.definition
                    ? 0.95
                    : route === "/specification"
                        ? 0.92
                        : route === "/posix-analogy"
                            ? 0.88
                            : route === "/validation-lab"
                                ? 0.88
                                : 0.8,
    }));

    // Module Detail Pages
    const modulePages = modules.map((module) => ({
        url: `${baseUrl}/modules/${module.id}`,
        lastModified: new Date("2026-01-08"),
        changeFrequency: "weekly" as const,
        priority: 0.9, // Higher priority for core specs
    }));

    // Golden Flow Detail Pages (use lowercase for route consistency)
    const flowPages = flows.map((flow) => ({
        url: `${baseUrl}/golden-flows/${flow.id.toLowerCase()}`,
        lastModified: new Date("2026-01-08"),
        changeFrequency: "weekly" as const,
        priority: 0.9, // Higher priority for normative flows
    }));

    // Blog posts and dynamic routes are excluded from sitemap per P0-3 (Conflict resolution)
    return [...staticPages, ...modulePages, ...flowPages];
}
