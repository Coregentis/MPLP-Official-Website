import React from "react";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, DOCS_URLS } from "@/lib/site-config";
import { GovernanceNav } from "@/components/governance/governance-nav";

export const metadata: Metadata = {
    title: "EU AI Act Alignment | MPLP Protocol",
    description: "Reference mapping between EU AI Act high-risk AI system requirements (Articles 9–15) and MPLP protocol mechanisms. MPLP is not an auditing authority and does not issue attestations.",
    alternates: {
        canonical: `${siteConfig.url}/governance/eu-ai-act`,
    },
};

export default function EuAiActPage() {
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "EU AI Act Alignment Reference",
        "about": "MPLP protocol alignment with EU AI Act high-risk AI system requirements",
        "url": `${siteConfig.url}/governance/eu-ai-act`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/governance/eu-ai-act`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` },
        "author": { "@id": `${siteConfig.url}#mpgc` }
    };

    return (
        <Shell>
            <JsonLd data={techArticleSchema} />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[
                    { label: "Governance", href: "/governance" },
                    { label: "EU AI Act", href: "/governance/eu-ai-act" }
                ]} />
            </div>
            <PageHeader
                title="EU AI Act Alignment"
                subtitle="A reference mapping between EU AI Act high-risk AI system requirements (Articles 9–15) and MPLP protocol mechanisms."
                kicker="Standards Alignment"
            />

            {/* Usage Boundary (Informative) */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-mplp-text-muted mb-3">
                            Usage Boundary
                        </h3>
                        <p className="text-sm text-mplp-text-muted leading-relaxed">
                            This page presents an <strong>informative reference mapping</strong> between MPLP protocol
                            modules and the EU AI Act requirements for high-risk AI systems (Chapter III, Section 2).
                            {/* TERM-WAIVER: External regulation context - regulatory compliance */}
                            It does <strong>not</strong> assert conformity, certification, or regulatory compliance.
                        </p>
                        <p className="mt-3 text-sm text-mplp-text-muted leading-relaxed">
                            MPLP provides <strong>lifecycle evidence artifacts</strong> (Plan, Confirm, Trace) that organizations
                            may use as part of their internal documentation and governance practices.
                            {/* TERM-WAIVER: External regulation context - compliance is adopter's responsibility */}
                            All regulatory determinations remain the responsibility of the adopting organization
                            and qualified legal/regulatory professionals.
                        </p>
                        <p className="mt-3 text-sm text-mplp-text-muted leading-relaxed">
                            This reference follows the <Link href="/references" className="text-mplp-blue-soft hover:text-mplp-blue-light transition-colors">MPLP Standards Compatibility & Mapping Policy</Link>.
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* Disclaimer - CRITICAL */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border-2 border-mplp-warning/50 bg-mplp-warning/5 p-8">
                        <h2 className="text-xl font-bold text-mplp-warning mb-4">Important Disclaimer</h2>
                        <div className="space-y-4 text-mplp-text-muted">
                            <p>
                                {/* TERM-WAIVER: Negation context - explicitly stating what this is NOT */}
                                <strong className="text-mplp-text">This document is NOT a certification, endorsement, or conformity statement.</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                {/* TERM-WAIVER: Negation context - explicitly stating non-regulatory status */}
                                <li>MPLP is not reviewed, endorsed, or validated by any EU regulatory authority.</li>
                                <li>This alignment mapping is provided for <strong>informational purposes only</strong>.</li>
                                {/* TERM-WAIVER: External regulation context - conformity assessment */}
                                <li>Organizations seeking EU AI Act conformity must conduct their own assessment with qualified professionals.</li>
                                {/* TERM-WAIVER: Negation context - MPLP does not guarantee compliance */}
                                <li>Use of MPLP does not guarantee or imply alignment with the EU AI Act.</li>
                            </ul>
                            <p className="pt-4 border-t border-mplp-warning/30">
                                The mapping below illustrates how MPLP protocol mechanisms <strong>may support</strong> organizations in addressing certain EU AI Act requirements.
                                It is the responsibility of each organization to assess applicability to their specific context.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Scope Statement */}
            <ContentSection background="surface">
                <SectionHeader
                    eyebrow="Scope"
                    title="Alignment Scope"
                    description="This reference covers EU AI Act Chapter III, Section 2: Requirements for High-Risk AI Systems (Articles 9–15)."
                    align="center"
                />
                <div className="mt-8 max-w-3xl mx-auto">
                    <div className="mplp-card p-6">
                        <h3 className="font-semibold text-mplp-text mb-3">What This Covers</h3>
                        <ul className="space-y-2 text-mplp-text-muted text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Risk management system (Article 9)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Technical documentation and record-keeping (Articles 11–12)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Transparency and human oversight (Articles 13–14)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Accuracy, robustness and cybersecurity (Article 15)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* Coverage Snapshot */}
            <ContentSection>
                <SectionHeader
                    eyebrow="Coverage Snapshot"
                    title="EU AI Act → MPLP Alignment"
                    description="High-level mapping between Article requirements and protocol mechanisms. This is not an exhaustive mapping."
                    align="center"
                />
                <div className="mt-12 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-mplp-border bg-slate-900/50">
                                <th className="text-left p-4 text-sm font-semibold text-mplp-text">EU AI Act Article</th>
                                <th className="text-left p-4 text-sm font-semibold text-mplp-text">Coverage</th>
                                <th className="text-left p-4 text-sm font-semibold text-mplp-text">Primary MPLP Artifacts</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mplp-border text-sm">
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 9 Risk Management</td>
                                <td className="p-4"><span className="text-mplp-emerald font-semibold">Strong</span></td>
                                <td className="p-4 text-mplp-text-muted">Context, Plan, Confirm, Trace</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 10 Data Governance</td>
                                <td className="p-4"><span className="text-mplp-warning font-semibold">Partial</span></td>
                                <td className="p-4 text-mplp-text-muted">Trace events, Context constraints</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 11 Technical Documentation</td>
                                <td className="p-4"><span className="text-mplp-emerald font-semibold">Strong</span></td>
                                <td className="p-4 text-mplp-text-muted">Plan, Context, Trace, Confirm</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 12 Record-keeping</td>
                                <td className="p-4"><span className="text-mplp-blue-soft font-semibold">Very Strong</span></td>
                                <td className="p-4 text-mplp-text-muted">Trace (events + segments)</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 13 Transparency</td>
                                <td className="p-4"><span className="text-mplp-emerald font-semibold">Strong</span></td>
                                <td className="p-4 text-mplp-text-muted">Role, Context/Plan, Trace</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 14 Human Oversight</td>
                                <td className="p-4"><span className="text-mplp-blue-soft font-semibold">Very Strong</span></td>
                                <td className="p-4 text-mplp-text-muted">Confirm, Plan status, Trace</td>
                            </tr>
                            <tr className="hover:bg-slate-900/30 transition-colors">
                                <td className="p-4 font-medium text-mplp-text">Art. 15 Accuracy/Robustness</td>
                                <td className="p-4"><span className="text-mplp-warning font-semibold">Partial</span></td>
                                <td className="p-4 text-mplp-text-muted">Trace, Confirm, Role</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            {/* Link to Docs */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-mplp-text mb-4">Detailed Clause Mapping</h3>
                    <p className="text-mplp-text-muted mb-6">
                        For article-by-article mapping with evidence pointers to MPLP schemas, see the full mapping document in the Documentation.
                    </p>
                    <Button
                        href={`${DOCS_URLS.home}/docs/evaluation/standards/eu-ai-act-mapping`}
                        variant="primary"
                        size="lg"
                        external
                    >
                        View Full Mapping (Docs) ↗
                    </Button>
                </div>
            </ContentSection>

            {/* Final Note */}
            <ContentSection>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-mplp-text-muted">
                        For authoritative information on the EU AI Act, refer to the official EUR-Lex publication (Regulation (EU) 2024/1689).
                    </p>
                </div>
            </ContentSection>

            {/* Navigation */}
            <ContentSection>
                <GovernanceNav current="/governance/eu-ai-act" />
            </ContentSection>

            {/* Enterprise Evaluation Path */}
            <ContentSection background="surface">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-mplp-text mb-3">Enterprise Evaluation Path</h2>
                    <p className="text-mplp-text-muted mb-8">
                        Use this standards mapping as an input to your internal review. MPLP provides reference mappings and
                        verifiable governance semantics—without certifications or endorsements.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/enterprise" variant="primary" size="lg">
                            Enterprise Evaluation Guide
                        </Button>
                        <Button href="/governance/overview" variant="secondary" size="lg">
                            Governance Overview
                        </Button>
                        <Button href="/conformance" variant="secondary" size="lg">
                            Conformance Framework
                        </Button>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/golden-flows" className="text-mplp-text-muted hover:text-mplp-blue-soft transition-colors">
                            Golden Flows →
                        </Link>
                        <Link href="/adoption" className="text-mplp-text-muted hover:text-mplp-blue-soft transition-colors">
                            Adoption Signals →
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
