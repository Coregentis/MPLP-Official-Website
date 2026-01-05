import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BackToAnchor } from "@/components/ui/back-to-anchor";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Protocol Compliance | MPLP Standard",
    description: "MPLP compliance defines schema-valid artifacts, governed execution semantics, and verifiable lifecycle behavior validated by Golden Flows.",
    alternates: {
        canonical: `${siteConfig.url}/compliance`,
    },
};

export default function CompliancePage() {
    // TechArticle JSON-LD for Compliance page
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Protocol Compliance | MPLP Standard",
        "about": "MPLP compliance levels and verification requirements",
        "url": `${siteConfig.url}/compliance`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/compliance`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` },
        "author": { "@id": `${siteConfig.url}#mpgc` }
    };

    return (
        <Shell>
            <JsonLd data={techArticleSchema} />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <BackToAnchor href="/governance/overview" label="Governance" />
                <Breadcrumb items={[
                    { label: "Compliance", href: "/compliance" }
                ]} />
            </div>
            <PageHeader
                title="Protocol Compliance"
                subtitle="As defined in the MPLP Conformance Model (Governance Artifact), compliance requires verifiable interoperability at the Schema (L1), Governance (L2), and Behavioral (L3) levels."
                kicker="Standards"
            />

            <ContentSection>
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Level 1 */}
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mplp-blue-soft/5 text-mplp-blue-soft font-bold text-xl border border-mplp-blue-soft/10">L1</div>
                            <div>
                                <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider">Schema</h3>
                                <p className="text-[10px] font-bold text-mplp-text-muted uppercase tracking-[0.2em] mt-1">Data Interoperability</p>
                            </div>
                        </div>
                        <ul className="space-y-4 text-xs text-mplp-text-muted/90 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Validates against canonical JSON Schemas.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Supports the 10 normative modules as schema-defined.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Enforces canonical identifiers and protocol invariants.
                            </li>
                        </ul>
                    </div>

                    {/* Level 2 */}
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mplp-indigo/5 text-mplp-indigo font-bold text-xl border border-mplp-indigo/10">L2</div>
                            <div>
                                <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider">Governance</h3>
                                <p className="text-[10px] font-bold text-mplp-text-muted uppercase tracking-[0.2em] mt-1">Policy Interoperability</p>
                            </div>
                        </div>
                        <ul className="space-y-4 text-xs text-mplp-text-muted/90 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Implements Confirm semantics for gated actions.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Enforces Role & permission boundaries (RBAC).
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Emits normative governance signals as events.
                            </li>
                        </ul>
                    </div>

                    {/* Level 3 */}
                    <div className="mplp-card bg-slate-950/40 p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mplp-emerald/5 text-mplp-emerald font-bold text-xl border border-mplp-emerald/10">L3</div>
                            <div>
                                <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider">Behavioral</h3>
                                <p className="text-[10px] font-bold text-mplp-text-muted uppercase tracking-[0.2em] mt-1">Runtime Interoperability</p>
                            </div>
                        </div>
                        <ul className="space-y-4 text-xs text-mplp-text-muted/90 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Passes Golden Flows 01–05 as normative scenarios.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Produces structured, replayable execution traces.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-mplp-emerald mt-0.5">✓</span>
                                Supports <Link href="/governance/positioning/semantic-drift-control" className="text-mplp-text hover:text-mplp-blue-soft underline decoration-mplp-border hover:decoration-mplp-blue-soft underline-offset-2 transition-all">drift detection</Link> and recovery behavior.
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="rounded-3xl border border-mplp-border bg-slate-950 p-8 lg:p-12 text-center">
                    <h2 className="text-3xl font-bold text-mplp-text mb-4">Ready to Verify?</h2>
                    <p className="text-mplp-text-muted text-lg max-w-2xl mx-auto mb-8">
                        Run the MPLP Golden Test Suite to generate a compliance report that is reproducible, auditable, evidence-grade, and comparable across runtimes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="https://docs.mplp.io/docs/tests/golden-test-suite-overview" variant="primary" size="lg" external>
                            Run Test Suite
                        </Button>
                        <Button href="/golden-flows" variant="secondary" size="lg">
                            View Golden Flows
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Related Positioning */}
            <ContentSection>
                <div className="max-w-3xl mx-auto text-center border-t border-mplp-border pt-8">
                    <p className="text-sm text-mplp-text-muted">
                        Related Positioning:{" "}
                        <a className="text-mplp-blue-soft hover:underline" href="/governance/positioning/agentic-state-sovereignty">
                            Agentic State Sovereignty
                        </a>{" "}
                        ·{" "}
                        <a className="text-mplp-blue-soft hover:underline" href="/governance/positioning/semantic-drift-control">
                            Semantic Drift Control
                        </a>
                    </p>
                </div>
            </ContentSection>

            {/* Quick Links */}
            <ContentSection>
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                    <Link href="https://docs.mplp.io/docs/guides/mplp-v1.0-compliance-checklist" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Compliance Checklist (v1.0)
                    </Link>
                    <Link href="/golden-flows" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Golden Flows
                    </Link>
                    <Link href="/enterprise" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Enterprise Evaluation
                    </Link>
                    <Link href="/modules" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Schemas Registry
                    </Link>
                    <Link href="/governance/agentos-protocol" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        AgentOS Protocol
                    </Link>
                    <Link href="/governance/governed-stack" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Governed Stack
                    </Link>
                    <Link href="/governance/evidence-chain" className="flex items-center gap-2 text-mplp-text-muted hover:text-mplp-blue-light transition-colors">
                        <IconArrowRight className="h-4 w-4 text-mplp-blue-soft" />
                        Evidence Chain
                    </Link>
                </div>
            </ContentSection>
        </Shell >
    );
}
