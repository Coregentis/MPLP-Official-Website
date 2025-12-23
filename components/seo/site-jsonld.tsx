import React from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

/**
 * Global JSON-LD schemas for Organization (MPGC) and WebSite (mplp.io).
 * Injected once via Shell to provide baseline structured data across all pages.
 */
export function SiteJsonLd() {
    const orgId = `${siteConfig.url}#mpgc`;
    const siteId = `${siteConfig.url}#website`;

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": orgId,
        "name": "MPLP Protocol Governance Committee",
        "alternateName": "MPGC",
        "url": siteConfig.url,
        "sameAs": [
            siteConfig.links.github,
            siteConfig.links.twitter,
            siteConfig.links.docs,
        ],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": siteId,
        "name": siteConfig.title,
        "url": siteConfig.url,
        "description": siteConfig.description,
        "publisher": { "@id": orgId },
        "inLanguage": "en",
    };

    return (
        <>
            <JsonLd data={organization} />
            <JsonLd data={website} />
        </>
    );
}
