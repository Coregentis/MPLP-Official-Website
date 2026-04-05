import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { PositioningNotice } from "@/components/notices";

export const metadata: Metadata = {
    title: "Definition Compatibility Page | MPLP",
    description: "Legacy supporting route for MPLP definition references. The canonical website definition anchor is /what-is-mplp.",
    alternates: {
        canonical: `${siteConfig.url}/what-is-mplp`,
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function DefinitionPage() {
    // Compatibility-only page. Canonical website definition anchor is /what-is-mplp.
    const definitionSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${siteConfig.url}/definition#webpage`,
        "url": `${siteConfig.url}/definition`,
        "name": "Definition Compatibility Page",
        "description": "Legacy website route retained for compatibility. The canonical website definition anchor for MPLP is /what-is-mplp.",
        "about": { "@id": `${siteConfig.url}/what-is-mplp#term` },
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` },
        "inLanguage": "en"
    };

    return (
        <StandardPage
            title="Definition Compatibility Page"
            subtitle="Legacy supporting route retained for historical links. The canonical website definition anchor is /what-is-mplp."
            kicker="Compatibility Route"
            breadcrumbs={[
                { label: "What is MPLP?", href: "/what-is-mplp" },
                { label: "Definition Compatibility", href: "/definition" },
            ]}
            jsonLd={definitionSchema}
        >
            <ContentSection>
                <PositioningNotice
                    variant="callout"
                    message="This legacy route remains available for compatibility only. Use /what-is-mplp as the canonical website definition anchor."
                    showLinks
                />

                {/* One-Sentence Definition */}
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 p-8 rounded-2xl border border-mplp-border bg-slate-950/50">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Compatibility Guidance</h2>
                        <p className="text-lg text-mplp-text-muted leading-relaxed">
                            <strong className="text-mplp-text">MPLP is a vendor-neutral lifecycle protocol for AI agent systems.</strong>{" "}
                            This route does not carry canonical website definition authority.
                        </p>
                        <p className="text-sm text-mplp-text-muted/70 mt-4">
                            If you arrived here from an older link, switch to{" "}
                            <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">
                                /what-is-mplp
                            </Link>
                            {" "}for the canonical website definition anchor.
                        </p>
                        <p className="text-sm text-mplp-text-muted/70 mt-4 italic">
                            Documentation and Repository provide the authoritative documentation chain; Validation Lab is the adjudication surface.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Link href="/what-is-mplp" className="p-6 rounded-xl border border-mplp-blue-soft/30 bg-mplp-blue-soft/5 hover:border-mplp-blue-soft/50 transition-colors">
                            <h3 className="text-lg font-bold text-mplp-text mb-3">Canonical Website Definition</h3>
                            <p className="text-sm text-mplp-text-muted">
                                Use <strong className="text-mplp-text">/what-is-mplp</strong> for the current website definition anchor.
                            </p>
                        </Link>
                        <a
                            href={DOCS_URLS.entrypoints}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-mplp-text mb-3">Documentation</h3>
                            <p className="text-sm text-mplp-text-muted">
                                Specification and reference projections for MPLP.
                            </p>
                        </a>
                        <a
                            href={REPO_URLS.root}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-mplp-text mb-3">Repository</h3>
                            <p className="text-sm text-mplp-text-muted">
                                Schemas, tests, and governance records that anchor source truth.
                            </p>
                        </a>
                    </div>

                    {/* POSIX-like Positioning Snippet */}
                    <div className="mb-12 p-8 rounded-2xl border border-mplp-indigo/30 bg-mplp-indigo/5 group hover:bg-mplp-indigo/10 transition-colors text-center">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4 text-center">Supporting Explanations</h2>
                        <p className="text-mplp-text-muted leading-relaxed mb-6">
                            Supporting phrases such as schema-first specification or POSIX-like lifecycle governance model may still appear in historical references.
                            They are explanatory only and do not replace the formal definition on /what-is-mplp.
                        </p>
                        <Link href="/posix-analogy" className="text-sm font-bold text-mplp-indigo uppercase tracking-widest hover:text-mplp-blue-light transition-colors flex items-center gap-2">
                            Explore Analogy <span>→</span>
                        </Link>
                    </div>

                    {/* Canonical References */}
                    <div className="p-8 rounded-2xl border border-mplp-border bg-gradient-to-br from-slate-950 to-slate-900 text-center">
                        <h2 className="text-2xl font-bold text-mplp-text mb-6">Continue From Here</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/what-is-mplp"
                                className="p-4 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors group"
                            >
                                <div className="text-xs font-bold text-mplp-text-muted uppercase tracking-wider mb-2">Website Definition</div>
                                <div className="text-mplp-text font-semibold group-hover:text-mplp-blue-soft transition-colors">What is MPLP?</div>
                                <p className="text-xs text-mplp-text-muted/70 mt-1">Canonical website definition anchor</p>
                            </Link>
                            <a
                                href={DOCS_URLS.entrypoints}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors group"
                            >
                                <div className="text-xs font-bold text-mplp-text-muted uppercase tracking-wider mb-2">Documentation</div>
                                <div className="text-mplp-text font-semibold group-hover:text-mplp-blue-soft transition-colors">docs.mplp.io</div>
                                <p className="text-xs text-mplp-text-muted/70 mt-1">Specification and reference projections</p>
                            </a>
                            <a
                                href={REPO_URLS.root}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors group"
                            >
                                <div className="text-xs font-bold text-mplp-text-muted uppercase tracking-wider mb-2">Repository</div>
                                <div className="text-mplp-text font-semibold group-hover:text-mplp-blue-soft transition-colors">GitHub Repository</div>
                                <p className="text-xs text-mplp-text-muted/70 mt-1">Schemas, tests, and governance records</p>
                            </a>
                            <Link
                                href="/validation-lab"
                                className="p-4 rounded-xl border border-mplp-border hover:border-mplp-blue-soft/50 transition-colors group"
                            >
                                <div className="text-xs font-bold text-mplp-text-muted uppercase tracking-wider mb-2">Validation Lab</div>
                                <div className="text-mplp-text font-semibold group-hover:text-mplp-blue-soft transition-colors">Adjudication Surface</div>
                                <p className="text-xs text-mplp-text-muted/70 mt-1">Discovery route to Lab-facing evaluation surfaces</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Footer Notice */}
            <ContentSection>
                <div className="max-w-4xl mx-auto text-center border-t border-mplp-border pt-8">
                    <p className="text-xs text-mplp-text-muted/60">
                        <strong>Compatibility Notice:</strong> This page is retained for historical links only.
                        Canonical website definition anchor:{" "}
                        <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">/what-is-mplp</Link>.
                        {" "}Documentation:{" "}
                        <a href={DOCS_URLS.entrypoints} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">docs.mplp.io</a>.
                        {" "}Repository:{" "}
                        <a href={REPO_URLS.root} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">GitHub Repository</a>.
                    </p>
                </div>
            </ContentSection>
        </StandardPage>
    );
}
