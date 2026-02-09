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
import { siteConfig } from "@/lib/site-config";
import { GovernanceNav } from "@/components/governance/governance-nav";

export const metadata: Metadata = {
    title: "ISO/IEC 42001 Alignment | MPLP Protocol",
    description: "Reference mapping between ISO/IEC 42001 AI management system objectives and MPLP protocol mechanisms. MPLP is not an auditing authority and does not issue attestations.",
    alternates: {
        canonical: `${siteConfig.url}/governance/iso-iec-42001`,
    },
};

export default function IsoIec42001Page() {
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "ISO/IEC 42001 Alignment Statement",
        "about": "MPLP protocol alignment with ISO/IEC 42001 AI management system objectives",
        "url": `${siteConfig.url}/governance/iso-iec-42001`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/governance/iso-iec-42001`
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
                    { label: "ISO/IEC 42001", href: "/governance/iso-iec-42001" }
                ]} />
            </div>
            <PageHeader
                title="ISO/IEC 42001 Alignment"
                subtitle="A reference mapping between ISO/IEC 42001 AI management system objectives and MPLP protocol mechanisms."
                kicker="Standards Alignment"
            />

            {/* Usage Boundary (Informative) - C4-1 */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-6">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-mplp-text-muted mb-3">
                            Usage Boundary
                        </h3>
                        <p className="text-sm text-mplp-text-muted leading-relaxed">
                            This page provides an <strong>informative reference mapping</strong> between selected
                            ISO/IEC 42001 objectives and MPLP protocol mechanisms.
                            It does <strong>not</strong> constitute an official attestation or normative conformity statement.
                        </p>
                        <p className="mt-3 text-sm text-mplp-text-muted leading-relaxed">
                            MPLP defines <strong>governance and lifecycle semantics</strong> that organizations
                            <em>may reference</em> when designing or documenting their own AI management systems.
                            Responsibility for ISO/IEC 42001 alignment remains solely with the adopting organization.
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
                                <strong className="text-mplp-text">This document is NOT an official attestation or normative conformity statement.</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>MPLP is not an accredited certification body.</li>
                                <li>This alignment mapping is provided for <strong>informational purposes only</strong>.</li>
                                <li>Organizations seeking ISO/IEC 42001 certification must undergo independent third-party assessment.</li>
                                <li>Use of MPLP does not guarantee or imply conformance with ISO/IEC 42001.</li>
                            </ul>
                            <p className="pt-4 border-t border-mplp-warning/30">
                                The mapping below illustrates how MPLP protocol mechanisms <strong>may support</strong> organizations in addressing certain ISO/IEC 42001 objectives.
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
                    description="This reference covers selected governance-relevant themes of ISO/IEC 42001 where MPLP protocol mechanisms may provide structural support. This is not an exhaustive mapping."
                    align="center"
                />
                <div className="mt-8 max-w-3xl mx-auto">
                    <div className="mplp-card p-6">
                        <h3 className="font-semibold text-mplp-text mb-3">What This Covers</h3>
                        <ul className="space-y-2 text-mplp-text-muted text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Governance controls related to AI system lifecycle management</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Traceability and structured audit trail requirements</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-mplp-emerald">✓</span>
                                <span>Risk management through governance boundaries</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* Pointer to Lab Registry */}
            <ContentSection>
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Adjudication Evidence"
                        title="Mapping & Evidence Pointers"
                        description="Authoritative mapping between ISO/IEC 42001 objectives and verifiable protocol evidence is maintained in the Validation Lab."
                        align="center"
                    />
                    <div className="mt-8">
                        <Button href="https://lab.mplp.io/rulesets" variant="primary" size="lg" external>
                            View Evidence Registry (Lab) ↗
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Final Note */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-mplp-text-muted">
                        For authoritative information on ISO/IEC 42001, refer to the official ISO publication.
                    </p>
                </div>
            </ContentSection>

            {/* Navigation */}
            <ContentSection>
                <GovernanceNav current="/governance/iso-iec-42001" />
            </ContentSection>

            {/* Enterprise Evaluation Path (C4-2) */}
            <ContentSection background="surface">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-mplp-text mb-3">Enterprise Evaluation Path</h2>
                    <p className="text-mplp-text-muted mb-8">
                        Use this standards mapping as an input to your internal review. MPLP provides reference mappings and
                        verifiable governance semantics—without official attestations or rankings.
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
