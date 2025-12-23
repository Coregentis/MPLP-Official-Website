import { siteConfig } from "@/lib/site-config";

type JsonLdProps = {
    data: Record<string, unknown>;
    id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            {...(id ? { id } : {})}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function generateProtocolSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}#website`,
                "url": siteConfig.url,
                "name": "MPLP Protocol",
                "description": "MPLP is the lifecycle protocol for AI agent systems — the Agent OS Protocol.",
                "publisher": { "@id": `${siteConfig.url}#mpgc` }
            },
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}#mpgc`,
                "name": "MPLP Protocol Governance Committee",
                "url": `${siteConfig.url}/governance`,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${siteConfig.url}/brand/mplp-icon-only-transparent.png`
                }
            },
            {
                "@type": ["Specification", "TechArticle"],
                "@id": `${siteConfig.url}#protocol`,
                "name": "Multi-Agent Lifecycle Protocol",
                "alternateName": "MPLP",
                "headline": "MPLP — The Agent OS Protocol",
                "description": "MPLP is the lifecycle protocol for AI agent systems — the Agent OS Protocol that defines how agents are created, operated, audited, and decommissioned.",
                "about": [
                    { "@type": "DefinedTerm", "name": "Lifecycle Protocol" },
                    { "@type": "DefinedTerm", "name": "Agent OS Protocol" }
                ],
                "version": "1.0.0",
                "url": siteConfig.url,
                "mainEntityOfPage": { "@type": "WebPage", "@id": siteConfig.url },
                "license": "https://www.apache.org/licenses/LICENSE-2.0",
                "isPartOf": { "@id": `${siteConfig.url}#website` },
                "publisher": { "@id": `${siteConfig.url}#mpgc` },
                "author": { "@id": `${siteConfig.url}#mpgc` },
                "inLanguage": "en",
                "isAccessibleForFree": true
            }
        ]
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: {
                "@type": "WebPage",
                "@id": item.item,
            },
        })),
    };
}
