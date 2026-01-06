import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, DOCS_URLS, REPO_URLS } from "@/lib/site-config";

/**
 * Site-Level JSON-LD
 * 
 * Provides global structured data for search engines and AI systems:
 * - WebSite schema with SearchAction
 * - Organization schema for MPGC
 * 
 * Zero normative language - pure metadata.
 */
export function SiteJsonLd() {
    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: "Discovery and positioning for the MPLP protocol. Normative definitions live at docs.mplp.io.",
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.url}#mpgc`,
        name: "MPLP Protocol Governance Committee (MPGC)",
        url: `${siteConfig.url}/governance/overview`,
        description: "Governance body for the MPLP protocol specification. Does not certify, endorse, or audit implementations.",
        sameAs: [
            DOCS_URLS.home,
            REPO_URLS.root,
        ],
    };

    return (
        <>
            <JsonLd data={website} id="jsonld-website" />
            <JsonLd data={organization} id="jsonld-mpgc" />
        </>
    );
}
