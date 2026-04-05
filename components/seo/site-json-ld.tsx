import { JsonLd } from "@/components/seo/json-ld";
import {
    DOCS_URLS,
    MPLP_IDENTITY,
    REPO_URLS,
    siteConfig,
    WEBSITE_CANONICAL_URLS,
    WEBSITE_MACHINE_READABLE_DESCRIPTION,
} from "@/lib/site-config";

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
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: MPLP_IDENTITY.fullName,
        url: siteConfig.url,
        description: WEBSITE_MACHINE_READABLE_DESCRIPTION,
        publisher: { "@id": `${siteConfig.url}#mpgc` },
        about: { "@id": `${WEBSITE_CANONICAL_URLS.definition}#term` },
        potentialAction: {
            "@type": "SearchAction",
            target: `${WEBSITE_CANONICAL_URLS.search}?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    const organization = {
        "@type": "Organization",
        "@id": `${siteConfig.url}#mpgc`,
        name: "MPLP Protocol Governance Committee (MPGC)",
        url: WEBSITE_CANONICAL_URLS.governance,
        description: "Governance body for the MPLP protocol specification. Does not certify, endorse, or audit implementations. Not a certification authority.",
        sameAs: [siteConfig.links.twitter],
    };

    const specSeries = {
        "@type": "CreativeWorkSeries",
        "@id": `${siteConfig.url}#specification`,
        name: "MPLP Protocol Specification",
        description: "Authoritative documentation surface for MPLP. Documentation and repository provide the authoritative documentation chain.",
        version: "1.0.0",
        publisher: { "@id": `${siteConfig.url}#mpgc` },
        url: DOCS_URLS.entrypoints,
        mainEntityOfPage: DOCS_URLS.entrypoints,
        isBasedOn: REPO_URLS.root,
        citation: [{ "@id": `${siteConfig.url}#website` }]
    };

    const sourceCode = {
        "@type": "SoftwareSourceCode",
        "@id": `${siteConfig.url}#repo`,
        name: "MPLP Protocol Repository",
        description: "Source code repository containing MPLP schemas, validator source, and governance constitution.",
        codeRepository: REPO_URLS.root,
        programmingLanguage: ["TypeScript", "Python", "JSON Schema"],
        license: "https://www.apache.org/licenses/LICENSE-2.0",
        publisher: { "@id": `${siteConfig.url}#mpgc` },
        mainEntityOfPage: REPO_URLS.root,
    };

    const definedTerm = {
        "@type": "DefinedTerm",
        "@id": `${WEBSITE_CANONICAL_URLS.definition}#term`,
        name: MPLP_IDENTITY.formalName,
        alternateName: MPLP_IDENTITY.shortName,
        description: MPLP_IDENTITY.formalDefinition,
        disambiguatingDescription: "MPLP is not a software license and does not define licensing terms.",
        url: WEBSITE_CANONICAL_URLS.definition,
        subjectOf: [
            WEBSITE_CANONICAL_URLS.definition,
            DOCS_URLS.entrypoints,
            REPO_URLS.root,
        ],
        inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "MPLP Glossary",
            url: `${siteConfig.url}/assets/geo/mplp-entity.json`,
        },
    };

    const graphContent = {
        "@context": "https://schema.org",
        "@graph": [
            website,
            organization,
            specSeries,
            sourceCode,
            definedTerm,
        ],
    };

    return (
        <JsonLd data={graphContent} id="jsonld-site-graph" />
    );
}
