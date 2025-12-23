import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPostSlugs } from "@/lib/blog";
import { modules } from "@/lib/content/modules";
import { flows } from "@/lib/content/flows";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static pages
    const staticPages = [
        "",
        "/why-mplp",
        "/architecture",
        "/modules",
        "/golden-flows",
        "/ecosystem",
        "/governance",
        "/governance/overview",
        "/governance/agentos-protocol",
        "/governance/evidence-chain",
        "/governance/governed-stack",
        "/governance/iso-iec-42001",
        "/governance/nist-ai-rmf",
        "/compliance",
        "/adoption",
        "/enterprise",
        "/standards/positioning",
        "/standards/regulatory-positioning",
        "/standards/protocol-evaluation",
        "/standards/what-mplp-is-not",
        "/governance/positioning/agentic-state-sovereignty",
        "/governance/positioning/semantic-drift-control",
        "/search",
        "/blog",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Module Detail Pages
    const modulePages = modules.map((module) => ({
        url: `${baseUrl}/modules/${module.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9, // Higher priority for core specs
    }));

    // Golden Flow Detail Pages (use lowercase for route consistency)
    const flowPages = flows.map((flow) => ({
        url: `${baseUrl}/golden-flows/${flow.id.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9, // Higher priority for normative flows
    }));

    // Blog posts
    const blogPosts = getAllPostSlugs().map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...modulePages, ...flowPages, ...blogPosts];
}
