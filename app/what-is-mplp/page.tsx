import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import type { Metadata } from "next";
import Link from 'next/link';
import { siteConfig, DOCS_URLS, LAB_URLS, REPO_URLS } from '@/lib/site-config';

export const metadata: Metadata = {
    title: 'What is MPLP? | Multi-Agent Lifecycle Protocol',
    description: 'MPLP is a vendor-neutral lifecycle protocol for AI agent systems. This route is the canonical website definition anchor.',
    alternates: {
        canonical: `${siteConfig.url}/what-is-mplp`,
    },
};

export default function WhatIsMPLP() {
    return (
        <StandardPage
            title="What is MPLP?"
            subtitle="Canonical website definition anchor for the Multi-Agent Lifecycle Protocol."
            kicker="Definition"
            breadcrumbs={[{ label: "What is MPLP?", href: "/what-is-mplp" }]}
        >
            <ContentSection>
                {/* Definition - Block 1 */}
                <section className="mb-10 rounded-2xl border border-mplp-blue-soft/30 bg-mplp-blue-soft/5 p-6">
                    <h2 className="text-2xl font-bold text-mplp-text mb-3">Definition</h2>
                    <p className="text-lg text-mplp-text-muted">
                        <strong className="text-mplp-text">MPLP</strong> stands for <strong className="text-mplp-text">Multi-Agent Lifecycle Protocol</strong>. MPLP is a <strong className="text-mplp-text">vendor-neutral lifecycle protocol for AI agent systems</strong>.
                    </p>
                    <p className="text-sm text-mplp-text-muted mt-3">
                        The slogan <strong className="text-mplp-blue-soft">&ldquo;The Agent OS Protocol&rdquo;</strong> may be used as positioning language, but it is not the formal definition of MPLP.
                    </p>
                </section>

                {/* Not-a-License - Block 2 */}
                <section className="mb-10 rounded-2xl border border-mplp-warning/30 bg-mplp-warning/5 p-6">
                    <h2 className="text-2xl font-bold text-mplp-text mb-3">Important Clarification</h2>
                    <p className="text-lg text-mplp-text-muted font-semibold">
                        MPLP is not a software license and does not define licensing terms.
                    </p>
                </section>

                {/* 3+1 Entry Model */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-mplp-text mb-6">3+1 Entry Model</h2>
                    <p className="text-mplp-text-muted mb-6">
                        MPLP information is organized across four surfaces. <strong>Repository and Documentation provide the authoritative documentation chain</strong>, this website is the discovery and positioning layer, and Validation Lab is the adjudication surface.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-blue-500 mb-2">Website</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Discovery & Positioning</p>
                            <p className="text-sm text-mplp-text-muted">Public discovery guidance, including this canonical website definition anchor.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-emerald-500 mb-2">Docs</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Specification & Reference</p>
                            <p className="text-sm text-mplp-text-muted">Authoritative documentation surface for protocol requirements and reference projections.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-amber-500 mb-2">Lab</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Evidence & Adjudication</p>
                            <p className="text-sm text-mplp-text-muted">Adjudication-facing public surfaces for published evaluation views, rulesets, and guarantees.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-purple-500 mb-2">Repository</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Source of Truth</p>
                            <p className="text-sm text-mplp-text-muted">Schemas, tests, and governance records that anchor the documentation chain.</p>
                        </div>
                    </div>
                </section>

                {/* Where to Verify */}
                <section className="mb-10 bg-slate-950/40 border border-mplp-border rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-mplp-text mb-4">Authority Chain</h2>
                    <ul className="space-y-3">
                        <li>
                            <strong className="text-mplp-text">Canonical Website Definition Anchor:</strong>{' '}
                            <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">
                                /what-is-mplp
                            </Link>
                        </li>
                        <li>
                            <strong className="text-mplp-text">Specification:</strong>{' '}
                            <Link href={DOCS_URLS.entrypoints} className="text-mplp-blue-soft hover:underline">
                                docs.mplp.io/docs/reference/entrypoints
                            </Link>
                        </li>
                        <li>
                            <strong className="text-mplp-text">Source of Truth:</strong>{' '}
                            <Link href={REPO_URLS.root} className="text-mplp-blue-soft hover:underline">
                                github.com/Coregentis/MPLP-Protocol
                            </Link>
                        </li>
                        <li>
                            <strong className="text-mplp-text">Adjudication Surface:</strong>{' '}
                            <Link href={LAB_URLS.home} className="text-mplp-blue-soft hover:underline">
                                lab.mplp.io
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Quick Facts */}
                <section>
                    <h2 className="text-3xl font-bold text-mplp-text mb-6">Quick Facts</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="mplp-card p-6">
                            <h3 className="text-lg font-semibold text-mplp-text mb-3">What MPLP Is</h3>
                            <ul className="list-disc list-inside space-y-1 text-mplp-text-muted text-sm">
                                <li>A vendor-neutral lifecycle protocol for AI agent systems</li>
                                <li>A protocol with schemas, tests, and governance records anchored in the documentation chain</li>
                                <li>A protocol designed to support interoperable agent implementations</li>
                            </ul>
                        </div>
                        <div className="mplp-card p-6">
                            <h3 className="text-lg font-semibold text-mplp-text mb-3">What MPLP Is Not</h3>
                            <ul className="list-disc list-inside space-y-1 text-mplp-text-muted text-sm">
                                <li>Not a software license</li>
                                <li>Not a certification program</li>
                                <li>Not a framework, runtime, or platform</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ContentSection>
        </StandardPage>
    );
}
