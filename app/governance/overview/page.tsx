import React from "react";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { GovernanceNav } from "@/components/governance/governance-nav";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Governance Overview | MPLP Protocol",
    description: "MPLP governance stance: what we govern, what we don&apos;t govern, and how the protocol evolves through the RFC process.",
    alternates: {
        canonical: `${siteConfig.url}/governance/overview`,
    },
};

export default function GovernanceOverviewPage() {
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "MPLP Protocol Governance Overview",
        "about": "Protocol governance stance and RFC process",
        "url": `${siteConfig.url}/governance/overview`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/governance/overview`
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
                    { label: "Overview", href: "/governance/overview" }
                ]} />
            </div>
            <PageHeader
                title="Governance Overview"
                subtitle="MPLP is an open standard. Its evolution is governed by a normative RFC process, transparent versioning rules, and a commitment to stability."
                kicker="Governance Stance"
            />

            {/* What We Govern */}
            <ContentSection>
                <SectionHeader
                    eyebrow="Scope"
                    title="What MPLP Governs"
                    description="MPLP defines lifecycle semantics that implementations can adopt to achieve interoperable, observable agent behavior."
                />
                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    <div className="mplp-card bg-slate-950/40 p-6">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-emerald">✓</span> Agent Lifecycle
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            Context initialization, plan creation, execution confirmation, and trace recording.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-emerald">✓</span> Governance Semantics
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            Permission boundaries, role definitions, and coordination rules.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-emerald">✓</span> Observability
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            Structured trace events, audit trails, and lifecycle state transitions.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-emerald">✓</span> Interoperability
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            Schema definitions that enable vendor-neutral agent coordination.
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* What We Don't Govern */}
            <ContentSection background="surface">
                <SectionHeader
                    eyebrow="Out of Scope"
                    title="What MPLP Does NOT Govern"
                    description="MPLP is a protocol, not a framework. It defines governance boundaries, not implementation details."
                />
                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    <div className="mplp-card bg-slate-950/40 p-6 border-mplp-error/20">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-error">✗</span> Model Training
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            How LLMs are trained, fine-tuned, or optimized is outside MPLP scope.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6 border-mplp-error/20">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-error">✗</span> Certification
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            MPLP does not certify implementations or issue compliance badges.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6 border-mplp-error/20">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-error">✗</span> Prompt Engineering
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            How prompts are crafted or optimized is implementation-specific.
                        </p>
                    </div>
                    <div className="mplp-card bg-slate-950/40 p-6 border-mplp-error/20">
                        <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-mplp-error">✗</span> Runtime Execution
                        </h3>
                        <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">
                            MPLP governs semantics; runtimes execute. &quot;Governs, not executes.&quot;
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* RFC Process */}
            <ContentSection>
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <SectionHeader
                            eyebrow="Process"
                            title="How We Evolve"
                            description="Changes to the protocol follow a strict Request for Comments (RFC) process. Anyone can propose a change, but it must pass through stages of review before adoption."
                        />
                        <div className="mt-8 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mplp-blue-soft/10 text-mplp-blue-soft border border-mplp-blue-soft/20 font-bold">1</div>
                                <div>
                                    <h4 className="font-semibold text-mplp-text">Draft</h4>
                                    <p className="text-sm text-mplp-text-muted">Initial proposal. Open for discussion and feedback.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mplp-warning/10 text-mplp-warning border border-mplp-warning/20 font-bold">2</div>
                                <div>
                                    <h4 className="font-semibold text-mplp-text">Review</h4>
                                    <p className="text-sm text-mplp-text-muted">Formal review by core maintainers. Normative changes are refined.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mplp-emerald/10 text-mplp-emerald border border-mplp-emerald/20 font-bold">3</div>
                                <div>
                                    <h4 className="font-semibold text-mplp-text">Frozen</h4>
                                    <p className="text-sm text-mplp-text-muted">Spec is locked. No breaking changes allowed without a major version bump.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button href="https://github.com/Coregentis/MPLP-Protocol/issues" external>View RFC Proposals</Button>
                        </div>
                    </div>

                    {/* Protocol Status & Evolution Policy */}
                    <div className="rounded-3xl border border-mplp-border bg-slate-950/50 p-8">
                        <h3 className="text-xl font-bold text-mplp-text mb-6">Protocol Status & Evolution</h3>

                        {/* Current Status */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-mplp-text-muted uppercase tracking-wider mb-3">Current Status</h4>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-mplp-emerald/30 bg-mplp-emerald/5">
                                <span className="h-2.5 w-2.5 rounded-full bg-mplp-emerald" />
                                <div>
                                    <p className="font-semibold text-mplp-text">v1.0.0 — Protocol Frozen</p>
                                    <p className="text-sm text-mplp-text-muted">Freeze date: 2025-12-03</p>
                                </div>
                            </div>
                        </div>

                        {/* Evolution Policy */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-mplp-text-muted uppercase tracking-wider mb-3">Evolution Policy</h4>
                            <ul className="space-y-2 text-sm text-mplp-text-muted">
                                <li className="flex items-start gap-2">
                                    <span className="text-mplp-emerald mt-0.5">→</span>
                                    <span>No breaking changes in v1.x series</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-mplp-blue-soft mt-0.5">→</span>
                                    <span>Additive changes via RFC process only</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-mplp-warning mt-0.5">→</span>
                                    <span>Breaking changes require major version</span>
                                </li>
                            </ul>
                        </div>

                        {/* Future Work */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-mplp-text-muted uppercase tracking-wider mb-3">Future Work (Informative)</h4>
                            <p className="text-sm text-mplp-text-muted">
                                Collaboration and learning capabilities may evolve in future versions. No timeline commitments are made. Reference implementations are published via official registries.
                            </p>
                        </div>

                        {/* Related Pages */}
                        <div className="pt-4 border-t border-mplp-border flex flex-wrap gap-4 text-sm text-mplp-text-muted">
                            <Link href="/governance/evidence-chain" className="hover:text-mplp-blue-soft transition-colors">Evidence Chain →</Link>
                            <Link href="/compliance" className="hover:text-mplp-blue-soft transition-colors">Compliance →</Link>
                            <Link href="/golden-flows" className="hover:text-mplp-blue-soft transition-colors">Golden Flows →</Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Navigation */}
            <ContentSection>
                <GovernanceNav current="/governance/overview" />
            </ContentSection>
        </Shell>
    );
}
