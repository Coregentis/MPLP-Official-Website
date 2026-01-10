import React from "react";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, LAB_URLS } from "@/lib/site-config";
import { NonCertificationNotice } from "@/components/notices";
import { FlaskConical, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Validation Lab — MPLP",
    description: "MPLP Validation Lab: Evidence-based conformance evaluation. Non-certifying, non-normative, no execution hosting. Your evidence + versioned ruleset = reproducible verdict.",
    alternates: {
        canonical: `${siteConfig.url}/validation-lab`,
    },
    keywords: ["MPLP", "Validation Lab", "Evidence", "Golden Flows", "Non-certifying", "Conformance"],
};

export default function ValidationLabPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "MPLP Validation Lab",
        "description": "Evidence-based conformance evaluation tools for MPLP protocol. Non-certifying, non-normative.",
        "url": `${siteConfig.url}/validation-lab`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/validation-lab`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` }
    };

    return (
        <Shell>
            <JsonLd data={webPageSchema} />

            <PageHeader
                title="Validation Lab"
                subtitle="Evidence Verdict Gateway for MPLP Lifecycle Invariants"
                kicker="Evidence-Based Evaluation"
            />

            {/* Non-Certification Notice */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <NonCertificationNotice />
                </div>
            </ContentSection>

            {/* Lab is Live */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-mplp-emerald/10 mb-8">
                        <FlaskConical className="h-10 w-10 text-mplp-emerald" />
                    </div>

                    <h2 className="text-3xl font-bold text-mplp-text mb-4">
                        Validation Lab is Live
                    </h2>

                    <p className="text-lg text-mplp-text-muted mb-8 max-w-xl mx-auto">
                        The Lab evaluates <strong>your evidence</strong> under <strong>versioned rulesets</strong>
                        and outputs a <strong>reproducible verdict hash</strong> + downloadable proof.
                    </p>

                    {/* I/O Model */}
                    <div className="mplp-card p-8 text-left max-w-xl mx-auto mb-8">
                        <h3 className="text-lg font-bold text-mplp-text mb-4">How It Works</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-mplp-emerald font-bold">INPUT</span>
                                <span className="text-mplp-text-muted">Evidence Pack (generated in your environment)</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-mplp-blue-soft font-bold">EVAL</span>
                                <span className="text-mplp-text-muted">Versioned Ruleset (deterministic evaluation)</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-amber-400 font-bold">OUTPUT</span>
                                <span className="text-mplp-text-muted">Verdict Hash + Proof JSON + Evidence Exports</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href={LAB_URLS.home} variant="primary" external>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Validation Lab
                        </Button>
                        <Button href={LAB_URLS.contract} variant="secondary" className="border-mplp-border/50" external>
                            Evidence Pack Contract
                        </Button>
                        <Button href={LAB_URLS.strength} variant="secondary" className="border-mplp-border/50" external>
                            Ruleset Strength Policy
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Three Red Lines */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-8">
                        <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                            Three Boundaries
                        </h3>
                        <div className="grid gap-6 md:grid-cols-3 text-center">
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Non-Certifying</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Verdicts are evidence-based outputs, not official marks or endorsements.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Non-Normative</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Lab does not define protocol semantics. See MPLP Docs for specifications.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">No Execution Hosting</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Lab does not accept uploads or run your code. You generate evidence locally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Authority Map */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-mplp-text mb-4">
                        Authority Map
                    </h3>
                    <p className="text-sm text-mplp-text-muted mb-6">
                        <span className="text-mplp-text">Repo</span> is truth source →
                        <span className="text-mplp-text"> Docs</span> is specification →
                        <span className="text-mplp-text"> Website</span> is discovery →
                        <span className="text-amber-400"> Lab</span> is evidence verdict projection.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/golden-flows" variant="secondary" className="border-mplp-border/50">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            View Golden Flows
                        </Button>
                        <Button href="/conformance" variant="secondary" className="border-mplp-border/50">
                            Conformance Model
                        </Button>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
