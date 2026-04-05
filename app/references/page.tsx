import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { jsonLdReferencesPage } from "@/lib/seo/jsonld-structure";
import { DOCS_URLS } from "@/lib/site-config";
import { CanonicalReferences } from "@/components/ui/canonical-references";
import { NextSteps } from "@/components/ui/next-steps";
import { Callout } from "@/components/ui/callout";

export const metadata: Metadata = {
    title: "References | MPLP — Multi-Agent Lifecycle Protocol",
    description: "Discovery-only citation contexts and external references for MPLP. Detailed mappings and governed references live in Documentation and Repository surfaces.",
};

export default function ReferencesPage() {
    // Generate CollectionPage JSON-LD
    const referencesJsonLd = jsonLdReferencesPage([
        { "@type": "ListItem", position: 1, name: "Standards & Governance Context" },
        { "@type": "ListItem", position: 2, name: "Frameworks & Runtimes" },
        { "@type": "ListItem", position: 3, name: "Protocol-Level Initiatives" },
        { "@type": "ListItem", position: 4, name: "Academic & Industry Discourse" },
    ]);

    return (
        <Shell>
            {/* CollectionPage JSON-LD */}
            <JsonLd data={referencesJsonLd} id="jsonld-references" />

            {/* Breadcrumb */}
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "References", href: "/references" }]} />
            </div>

            {/* PageHeader - Consistent with other anchor pages */}
            <PageHeader
                title="References"
                subtitle="Discovery-only citation contexts and external references for MPLP. Use this page for orientation, then defer to Documentation and Repository surfaces for governed detail."
                kicker="Citation Context"
            />

            <ContentSection>
                <div className="max-w-3xl mx-auto">
                    <Callout title="Citation Policy">
                        References are provided for context only. MPLP does not issue certifications, endorsements, or audit opinions. Comparisons describe layer differences, not superiority judgments.
                    </Callout>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        href={DOCS_URLS.standardsPositioning}
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        target="_blank"
                    >
                        View detailed standards mappings (Docs) →
                    </Link>
                    <Link
                        href="/faq"
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/governance/overview"
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                    >
                        Governance
                    </Link>
                </div>
                <p className="text-xs text-mplp-text-muted mb-12">
                    Canonical website definition anchor: <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">/what-is-mplp</Link>. Detailed mappings live in Documentation; Repository and Documentation provide the authoritative documentation chain.
                </p>

                {/* Reference Categories */}
                <div className="space-y-12">

                    {/* A. Standards & Governance Context */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Standards & Governance Context</h2>
                        <p className="text-mplp-text-muted mb-6">
                            Informative mappings between MPLP lifecycle semantics and external standards.
                            These mappings are descriptive, not assertions of conformity.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                href={DOCS_URLS.standardsIsoMapping}
                                className="p-5 sm:p-6 border border-mplp-border rounded-xl hover:border-mplp-blue-soft/30 hover:bg-white/5 transition-all"
                                target="_blank"
                            >
                                <h3 className="font-bold text-mplp-text mb-2 line-clamp-1">ISO/IEC 42001</h3>
                                <p className="text-sm text-mplp-text-muted line-clamp-2">AI Management System mapping</p>
                            </Link>
                            <Link
                                href={DOCS_URLS.standardsNistMapping}
                                className="p-5 sm:p-6 border border-mplp-border rounded-xl hover:border-mplp-blue-soft/30 hover:bg-white/5 transition-all"
                                target="_blank"
                            >
                                <h3 className="font-bold text-mplp-text mb-2 line-clamp-1">NIST AI RMF</h3>
                                <p className="text-sm text-mplp-text-muted line-clamp-2">AI Risk Management Framework mapping</p>
                            </Link>
                        </div>
                    </div>

                    {/* B. Frameworks & Runtimes (Different Layer) */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Frameworks & Runtimes</h2>
                        <p className="text-mplp-text-muted mb-6">
                            Agent frameworks and orchestration runtimes operate at the <strong>implementation layer</strong>.
                            MPLP provides protocol-level lifecycle semantics that can be compared against those implementation-layer systems.
                            Use Documentation and Repository references for authoritative MPLP semantics rather than this summary page.
                        </p>
                        <div className="p-6 border border-mplp-border rounded-xl bg-mplp-dark-soft/20">
                            <h3 className="font-bold text-mplp-text mb-3">Framework Categories</h3>
                            <ul className="space-y-2 text-sm text-mplp-text-muted">
                                <li>• <strong>Agent orchestration frameworks</strong> — Multi-agent coordination and workflow execution</li>
                                <li>• <strong>Conversation frameworks</strong> — Multi-agent dialogue and collaboration patterns</li>
                                <li>• <strong>AI orchestration SDKs</strong> — Model integration and task orchestration</li>
                                <li>• <strong>AI coding assistants</strong> — Development-focused agent tooling</li>
                            </ul>
                            <p className="text-xs text-mplp-text-muted mt-4 pt-4 border-t border-mplp-border/30">
                                <strong>For published adjudication views</strong>, see the{' '}
                                <a
                                    href="https://lab.mplp.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-mplp-blue-soft hover:underline"
                                >
                                    Validation Lab
                                </a>
                                {' '}for current public runs, guarantees, and related adjudication-facing views.
                            </p>
                        </div>
                    </div>

                    {/* C. Protocol-Level Initiatives (Adjacent Scope) */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Protocol-Level Initiatives</h2>
                        <p className="text-mplp-text-muted mb-6">
                            Protocol-level initiatives such as MCP or A2A address <strong>adjacent coordination
                                or interaction concerns</strong>. MPLP contributes a protocol-specific lifecycle vocabulary when lifecycle governance and evidence structure are the topic.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 border border-mplp-border rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-mplp-text mb-2 line-clamp-1">Model Context Protocol (MCP)</h3>
                                <p className="text-xs text-mplp-text-muted line-clamp-3">
                                    Addresses context and tool integration. MPLP is adjacent when lifecycle semantics and governance boundaries are the focus.
                                </p>
                            </div>
                            <div className="p-5 border border-mplp-border rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-mplp-text mb-2 line-clamp-1">Agent-to-Agent (A2A)</h3>
                                <p className="text-xs text-mplp-text-muted line-clamp-3">
                                    Addresses inter-agent communication. MPLP is adjacent when lifecycle evidence, governance, and traceability are the focus.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* D. Academic & Industry Discourse */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Academic & Industry Discourse</h2>
                        <p className="text-mplp-text-muted mb-6">
                            In academic and industry discourse, the term &ldquo;Agent OS&rdquo; is used with varying meanings.
                            On this website, &ldquo;The Agent OS Protocol&rdquo; is positioning language for MPLP, not its formal definition.
                            The canonical website definition anchor for MPLP is <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">/what-is-mplp</Link>, and external uses of the term may differ.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: "arXiv", desc: "AI Agents, Multi-Agent Systems" },
                                { name: "Semantic Scholar", desc: "Academic paper indexing" },
                                { name: "OpenAlex", desc: "Research knowledge graph" },
                            ].map((ref) => (
                                <div key={ref.name} className="p-5 border border-mplp-border rounded-xl hover:bg-white/5 transition-colors">
                                    <h3 className="font-bold text-mplp-text mb-2 line-clamp-1">{ref.name}</h3>
                                    <p className="text-xs text-mplp-text-muted">{ref.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-mplp-bg rounded-lg">
                            <p className="text-sm text-mplp-text-muted">
                                <strong>Key Terms:</strong> Agent OS, Agent Lifecycle, Multi-Agent Governance,
                                Lifecycle Protocol, Agent OS Protocol
                            </p>
                        </div>
                    </div>

                </div>
            </ContentSection>

            {/* Authority Chain */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <CanonicalReferences
                        docsKey="home"
                        repoKey="root"
                        variant="full"
                    />

                    <NextSteps
                        docsKey="home"
                        repoKey="root"
                        evidenceKey="goldenFlows"
                    />
                </div>
            </ContentSection>
        </Shell>
    );
}
