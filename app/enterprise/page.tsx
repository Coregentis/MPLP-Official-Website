import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, DOCS_URLS } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Enterprise Compatibility Page | MPLP",
    description: "Legacy enterprise evaluation route retained for compatibility. The current website discovery route for evaluation context is /references.",
    alternates: {
        canonical: `${siteConfig.url}/references`,
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function EnterprisePage() {
    const compatibilitySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Enterprise Compatibility Page",
        "description": "Legacy website route retained for compatibility. The current website discovery route for evaluation context is /references.",
        "url": `${siteConfig.url}/enterprise`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/enterprise`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` }
    };

    return (
        <Shell>
            <JsonLd data={compatibilitySchema} />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[
                    { label: "References", href: "/references" },
                    { label: "Enterprise Compatibility", href: "/enterprise" }
                ]} />
            </div>
            <PageHeader
                title="Enterprise Compatibility Page"
                subtitle="Legacy route retained for historical links. Use /references for current evaluation context on the website."
                kicker="Compatibility Route"
            />

            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-8 text-center">
                        <p className="text-lg text-mplp-text-muted leading-relaxed">
                            This route no longer serves as the current public enterprise-evaluation page.
                            Use <strong className="text-mplp-text">/references</strong> for website discovery context, then continue to the relevant documentation and governance surfaces.
                        </p>
                        <p className="text-sm text-mplp-text-muted mt-4">
                            This website remains discovery-only. Documentation and Repository provide the authoritative documentation chain, and Validation Lab is the adjudication surface.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button href="/references" variant="primary" size="lg">
                                References
                            </Button>
                            <Button href="/governance/overview" variant="secondary" size="lg">
                                Governance Overview
                            </Button>
                            <Button href="/conformance" variant="secondary" size="lg">
                                Conformance
                            </Button>
                            <Button href={DOCS_URLS.entrypoints} variant="secondary" size="lg" external>
                                Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
