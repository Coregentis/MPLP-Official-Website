import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, DOCS_URLS, REPO_URLS } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Governance Compatibility Root | MPLP",
    description: "Legacy governance root retained for compatibility. The canonical website governance anchor is /governance/overview.",
    alternates: {
        canonical: `${siteConfig.url}/governance/overview`,
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function GovernancePage() {
    const compatibilitySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Governance Compatibility Root",
        "description": "Legacy website route retained for compatibility. The canonical website governance anchor is /governance/overview.",
        "url": `${siteConfig.url}/governance`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/governance`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` }
    };

    return (
        <Shell>
            <JsonLd data={compatibilitySchema} />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[
                    { label: "Governance Overview", href: "/governance/overview" },
                    { label: "Governance Compatibility Root", href: "/governance" }
                ]} />
            </div>
            <PageHeader
                title="Governance Compatibility Root"
                subtitle="Legacy route retained for historical links. The canonical website governance anchor is /governance/overview."
                kicker="Compatibility Route"
            />

            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-8 text-center">
                        <p className="text-lg text-mplp-text-muted leading-relaxed">
                            This route no longer serves as the primary public governance page.
                            Use <strong className="text-mplp-text">/governance/overview</strong> for the canonical website governance anchor.
                        </p>
                        <p className="text-sm text-mplp-text-muted mt-4">
                            Documentation and Repository provide the authoritative documentation chain; this website remains discovery-only.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button href="/governance/overview" variant="primary" size="lg">
                                Governance Overview
                            </Button>
                            <Button href="/references" variant="secondary" size="lg">
                                References
                            </Button>
                            <Button href={DOCS_URLS.governance} variant="secondary" size="lg" external>
                                Governance Docs
                            </Button>
                        </div>
                        <p className="text-xs text-mplp-text-muted mt-6">
                            Repository governance records: <a href={REPO_URLS.governance} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">view source</a>.
                        </p>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
