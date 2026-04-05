import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";
import { siteConfig, DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { NonCertificationNotice } from "@/components/notices";
import { CanonicalReferences } from "@/components/ui/canonical-references";
import { NextSteps } from "@/components/ui/next-steps";

export const metadata: Metadata = {
    title: "Conformance (Informative) | MPLP",
    description: "Discovery page for MPLP conformance-related materials. Formal conformance definitions live in Documentation; adjudication surfaces live in Validation Lab.",
    alternates: {
        canonical: `${siteConfig.url}/conformance`,
    },
};

export default function ConformancePage() {
    // TechArticle JSON-LD for Conformance page
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Conformance (Informative) | MPLP",
        "about": "Discovery guide to MPLP conformance-related materials",
        "url": `${siteConfig.url}/conformance`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/conformance`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` },
        "author": { "@id": `${siteConfig.url}#mpgc` }
    };

    return (
        <StandardPage
            title="Conformance (Informative)"
            subtitle="Discovery page for MPLP conformance-related materials. Formal requirements live in Documentation; published evaluation and adjudication surfaces live in Validation Lab."
            kicker="Discovery / Evaluation Entry"
            breadcrumbs={[{ label: "Conformance", href: "/conformance" }]}
            jsonLd={techArticleSchema}
            backTo={{ href: "/governance/overview", label: "Governance" }}
            beforeHeader={<NonCertificationNotice />}
        >
            <ContentSection>
                <p className="text-xs text-mplp-text-muted mb-8 text-center italic">
                    This page is a discovery guide only. It does not define conformance doctrine, rulesets, or verdicts.
                </p>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4">Documentation</h3>
                        <p className="text-sm text-mplp-text-muted mb-4">
                            Documentation carries the current conformance reference material, evaluation guidance, and formal entry routing.
                        </p>
                        <div className="space-y-2 text-xs">
                            <a href={DOCS_URLS.conformance} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline block">
                                Conformance Reference →
                            </a>
                            <a href={DOCS_URLS.testsOverview} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline block">
                                Golden Test Suite Overview →
                            </a>
                        </div>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4">Repository</h3>
                        <p className="text-sm text-mplp-text-muted mb-4">
                            Repository assets anchor schemas, tests, invariants, and versioned protocol material behind conformance-related references.
                        </p>
                        <div className="space-y-2 text-xs">
                            <a href={REPO_URLS.tests} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline block">
                                Test Assets →
                            </a>
                            <a href={REPO_URLS.schemas} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline block">
                                Schemas →
                            </a>
                        </div>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4">Validation Lab</h3>
                        <p className="text-sm text-mplp-text-muted mb-4">
                            Validation Lab is the adjudication surface for published runs, guarantees, rulesets, and related public evaluation views.
                        </p>
                        <div className="space-y-2 text-xs">
                            <Link href="/validation-lab" className="text-mplp-blue-soft hover:underline block">
                                Validation Lab Guide →
                            </Link>
                            <a href="https://lab.mplp.io" target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline block">
                                Open Lab →
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <SectionHeader
                    eyebrow="Continue"
                    title="Open Current Conformance Surfaces"
                    description="Use the current surface that matches the task: Documentation for definitions, Repository for source assets, and Validation Lab for adjudication-facing public views."
                    className="mb-8"
                />
                <div className="max-w-4xl mx-auto text-center mt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href={DOCS_URLS.conformance} variant="primary" size="lg" external>
                            Open Documentation
                        </Button>
                        <Button href="/validation-lab" variant="secondary" size="lg">
                            Validation Lab Guide
                        </Button>
                        <Button href="/golden-flows" variant="secondary" size="lg">
                            View Golden Flows
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Quick Links */}
            <ContentSection>
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                    <Link href={DOCS_URLS.conformance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Conformance Reference
                    </Link>
                    <Link href={DOCS_URLS.testsOverview} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Golden Test Suite Overview
                    </Link>
                    <Link href="/golden-flows" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Golden Flows
                    </Link>
                    <Link href="/validation-lab" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Validation Lab Guide
                    </Link>
                    <Link href="/modules" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Schemas Registry
                    </Link>
                    <Link href="/references" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        References
                    </Link>
                </div>
            </ContentSection>

            {/* Authority Chain */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <CanonicalReferences
                        docsKey="conformance"
                        repoKey="tests"
                        variant="full"
                    />

                    <NextSteps
                        docsKey="conformance"
                        repoKey="tests"
                        evidenceKey="goldenFlows"
                    />
                </div>
            </ContentSection>
        </StandardPage>
    );
}
