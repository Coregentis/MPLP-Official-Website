import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import Link from 'next/link';
import { siteConfig, DOCS_URLS } from '@/lib/site-config';

export const metadata = {
    title: 'What is MPLP? | Multi-Agent Lifecycle Protocol',
    description: 'MPLP is the Multi-Agent Lifecycle Protocol - a lifecycle governance interface for AI agents. Not a software license.',
};

export default function WhatIsMPLP() {
    return (
        <StandardPage
            title="What is MPLP?"
            subtitle="Understanding the Multi-Agent Lifecycle Protocol — a lifecycle governance interface for AI agents."
            kicker="Definition"
            breadcrumbs={[{ label: "What is MPLP?", href: "/what-is-mplp" }]}
        >
            <ContentSection>
                {/* Definition - Block 1 */}
                <section className="mb-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r">
                    <h2 className="text-2xl font-bold text-blue-900 mb-3">Definition</h2>
                    <p className="text-lg text-blue-800">
                        <strong>MPLP</strong> stands for <strong>Multi-Agent Lifecycle Protocol</strong>.
                    </p>
                </section>

                {/* Not-a-License - Block 2 */}
                <section className="mb-10 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r">
                    <h2 className="text-2xl font-bold text-yellow-900 mb-3">Important Clarification</h2>
                    <p className="text-lg text-yellow-800 font-semibold">
                        MPLP is not a software license and does not define licensing terms.
                    </p>
                </section>

                {/* 3+1 Entry Model */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-mplp-text mb-6">3+1 Entry Model</h2>
                    <p className="text-mplp-text-muted mb-6">
                        MPLP information is organized across four entry surfaces (3 Primary + 1 Auxiliary). <strong>The Repository is the sole source of truth.</strong>
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-blue-500 mb-2">Website</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Discovery & Positioning</p>
                            <p className="text-sm text-mplp-text-muted">Conceptual positioning and ecosystem overview.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-emerald-500 mb-2">Docs</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Specification & Reference</p>
                            <p className="text-sm text-mplp-text-muted">Normative requirements and implementation guidance.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-amber-500 mb-2">Lab</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Evidence & Adjudication</p>
                            <p className="text-sm text-mplp-text-muted">Evidence-based verdict generation for lifecycle guarantees.</p>
                        </div>

                        <div className="mplp-card p-6">
                            <h3 className="text-xl font-bold text-purple-500 mb-2">Repository</h3>
                            <p className="text-sm font-semibold text-mplp-text-muted mb-2">Source of Truth</p>
                            <p className="text-sm text-mplp-text-muted">Schemas, tests, and governance records.</p>
                        </div>
                    </div>
                </section>

                {/* Where to Verify */}
                <section className="mb-10 bg-slate-950/40 border border-mplp-border rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-mplp-text mb-4">Where to Verify</h2>
                    <ul className="space-y-3">
                        <li>
                            <strong className="text-mplp-text">Specification:</strong>{' '}
                            <Link href={`${DOCS_URLS.home}/docs/reference/entrypoints`} className="text-mplp-blue-soft hover:underline">
                                docs.mplp.io/docs/reference/entrypoints
                            </Link>
                        </li>
                        <li>
                            <strong className="text-mplp-text">Source of Truth:</strong>{' '}
                            <Link href={siteConfig.links.github} className="text-mplp-blue-soft hover:underline">
                                github.com/Coregentis/MPLP-Protocol
                            </Link>
                        </li>
                        <li>
                            <strong className="text-mplp-text">Entity Card:</strong>{' '}
                            <Link href="/assets/geo/mplp-entity.json" className="text-mplp-blue-soft hover:underline">
                                /assets/geo/mplp-entity.json
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
                                <li>A lifecycle governance interface for AI agents</li>
                                <li>A protocol specification with schemas and tests</li>
                                <li>An open standard for agent interoperability</li>
                            </ul>
                        </div>
                        <div className="mplp-card p-6">
                            <h3 className="text-lg font-semibold text-mplp-text mb-3">What MPLP Is Not</h3>
                            <ul className="list-disc list-inside space-y-1 text-mplp-text-muted text-sm">
                                <li>Not a software license</li>
                                <li>Not a certification program</li>
                                <li>POSIX is the canonical analogy (vendor-neutral interface standard), not an operating system</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ContentSection>
        </StandardPage>
    );
}
