import {
    DOCS_URLS,
    MPLP_IDENTITY,
    REPO_URLS,
    siteConfig,
    WEBSITE_CANONICAL_URLS,
    WEBSITE_MACHINE_READABLE_DESCRIPTION,
} from "@/lib/site-config";

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
    const definitionTermId = `${WEBSITE_CANONICAL_URLS.definition}#term`;
    const definitionPageId = `${WEBSITE_CANONICAL_URLS.definition}#page`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteConfig.url}#website`,
                "url": siteConfig.url,
                "name": MPLP_IDENTITY.fullName,
                "description": WEBSITE_MACHINE_READABLE_DESCRIPTION,
                "publisher": { "@id": `${siteConfig.url}#mpgc` },
                "about": { "@id": definitionTermId },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${WEBSITE_CANONICAL_URLS.search}?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}#mpgc`,
                "name": "MPLP Protocol Governance Committee (MPGC)",
                "url": WEBSITE_CANONICAL_URLS.governance,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${siteConfig.url}/brand/mplp-icon-only-transparent.png`
                },
                "sameAs": [siteConfig.links.twitter]
            },
            {
                "@type": "WebPage",
                "@id": definitionPageId,
                "name": `What is MPLP? | ${MPLP_IDENTITY.formalName}`,
                "description": `${MPLP_IDENTITY.formalDefinition} ${MPLP_IDENTITY.websiteRole}`,
                "url": WEBSITE_CANONICAL_URLS.definition,
                "mainEntity": { "@id": definitionTermId },
                "isPartOf": { "@id": `${siteConfig.url}#website` },
                "publisher": { "@id": `${siteConfig.url}#mpgc` },
                "inLanguage": "en",
            },
            {
                "@type": "DefinedTerm",
                "@id": definitionTermId,
                "name": MPLP_IDENTITY.formalName,
                "alternateName": MPLP_IDENTITY.shortName,
                "description": MPLP_IDENTITY.formalDefinition,
                "url": WEBSITE_CANONICAL_URLS.definition,
                "subjectOf": [
                    WEBSITE_CANONICAL_URLS.definition,
                    DOCS_URLS.entrypoints,
                    REPO_URLS.root
                ],
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
