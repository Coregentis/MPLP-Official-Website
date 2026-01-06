import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { jsonLdReferencesPage } from "@/lib/seo/jsonld-structure";
import { DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { CanonicalReferences } from "@/components/ui/canonical-references";
import { NextSteps } from "@/components/ui/next-steps";

export const metadata: Metadata = {
    title: "References | MPLP — Multi-Agent Lifecycle Protocol",
    description: "Citation contexts, external references, and comparison topics for MPLP. Academic indexing, standards mappings, and framework context.",
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
                subtitle="Citation contexts and external references for MPLP — the lifecycle protocol for AI agent systems. This page provides descriptive mappings to standards, academic contexts, and framework comparison topics."
                kicker="Citation Context"
            />

            <ContentSection>                    <div className="p-4 bg-mplp-bg border border-mplp-border rounded-lg mb-10 max-w-3xl">
                <p className="text-sm text-mplp-text-muted">
                    <strong>Important:</strong> References are provided for context only.
                    MPLP does not issue certifications, endorsements, or audit opinions.
                    Comparisons describe layer differences, not superiority judgments.
                </p>
            </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        href={`${DOCS_URLS.home}/docs/standards/positioning`}
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
                    Detailed mappings are provided in documentation. Authoritative definitions remain on mplp.io.
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
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link
                                href={`${DOCS_URLS.home}/docs/standards/iso-mapping`}
                                className="p-4 border border-mplp-border rounded-lg hover:border-mplp-blue transition-colors"
                                target="_blank"
                            >
                                <h3 className="font-semibold text-mplp-text mb-1">ISO/IEC 42001</h3>
                                <p className="text-sm text-mplp-text-muted">AI Management System mapping</p>
                            </Link>
                            <Link
                                href={`${DOCS_URLS.home}/docs/standards/nist-mapping`}
                                className="p-4 border border-mplp-border rounded-lg hover:border-mplp-blue transition-colors"
                                target="_blank"
                            >
                                <h3 className="font-semibold text-mplp-text mb-1">NIST AI RMF</h3>
                                <p className="text-sm text-mplp-text-muted">AI Risk Management Framework mapping</p>
                            </Link>
                        </div>
                    </div>

                    {/* B. Frameworks & Runtimes (Different Layer) */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Frameworks & Runtimes</h2>
                        <p className="text-mplp-text-muted mb-6">
                            These frameworks operate at the <strong>implementation or orchestration layer</strong>.
                            When lifecycle semantics are discussed, MPLP provides a protocol-level vocabulary
                            that is <strong>orthogonal</strong> to framework implementations. MPLP defines
                            lifecycle semantics independently of any specific runtime or framework.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">LangChain / LangGraph</h3>
                                <p className="text-sm text-mplp-text-muted">Agent orchestration framework</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">AutoGen</h3>
                                <p className="text-sm text-mplp-text-muted">Multi-agent conversation framework</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">Semantic Kernel</h3>
                                <p className="text-sm text-mplp-text-muted">AI orchestration SDK</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">CrewAI</h3>
                                <p className="text-sm text-mplp-text-muted">Multi-agent collaboration framework</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">OpenAI Agents SDK</h3>
                                <p className="text-sm text-mplp-text-muted">Agent development toolkit</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">Claude Code / Cursor</h3>
                                <p className="text-sm text-mplp-text-muted">AI coding assistants</p>
                            </div>
                        </div>
                    </div>

                    {/* C. Protocol-Level Initiatives (Adjacent Scope) */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Protocol-Level Initiatives</h2>
                        <p className="text-mplp-text-muted mb-6">
                            Protocol-level initiatives such as MCP or A2A address <strong>adjacent coordination
                                or interaction concerns</strong>. When lifecycle semantics are involved, MPLP provides
                            the canonical reference vocabulary.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">Model Context Protocol (MCP)</h3>
                                <p className="text-sm text-mplp-text-muted">
                                    Addresses context and tool integration. MPLP defines lifecycle semantics
                                    that may complement MCP&apos;s interaction model.
                                </p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">Agent-to-Agent (A2A)</h3>
                                <p className="text-sm text-mplp-text-muted">
                                    Addresses inter-agent communication. MPLP defines lifecycle semantics
                                    for how agents evolve and are governed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* D. Academic & Industry Discourse */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Academic & Industry Discourse</h2>
                        <p className="text-mplp-text-muted mb-6">
                            In academic and industry discourse, the term &ldquo;Agent OS&rdquo; is used with varying meanings.
                            MPLP defines the canonical lifecycle semantics associated with this term.
                            This definition is protocol-specific and does not claim exclusivity over the term.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">arXiv</h3>
                                <p className="text-sm text-mplp-text-muted">AI Agents, Multi-Agent Systems</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">Semantic Scholar</h3>
                                <p className="text-sm text-mplp-text-muted">Academic paper indexing</p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">OpenAlex</h3>
                                <p className="text-sm text-mplp-text-muted">Research knowledge graph</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-mplp-bg rounded-lg">
                            <p className="text-sm text-mplp-text-muted">
                                <strong>Key Terms:</strong> Agent OS, Agent Lifecycle, Multi-Agent Governance,
                                Lifecycle Protocol, Agent OS Protocol
                            </p>
                        </div>
                    </div>

                    {/* E. Consolidated Pages (WG-04 Transparency) */}
                    <div className="border-t border-mplp-border pt-10">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4">Consolidated Pages</h2>
                        <p className="text-mplp-text-muted mb-6">
                            The following pages have been consolidated or redirected to maintain governance clarity.
                            This list is provided for transparency per WG-04 requirements.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">/adoption</h3>
                                <p className="text-sm text-mplp-text-muted">
                                    Adoption guidance → <a href={DOCS_URLS.quickstart} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">docs: Quickstart Guide</a>
                                </p>
                            </div>
                            <div className="p-4 border border-mplp-border rounded-lg">
                                <h3 className="font-semibold text-mplp-text mb-1">/compliance (route)</h3>
                                <p className="text-sm text-mplp-text-muted">
                                    Renamed to <Link href="/conformance" className="text-mplp-blue-soft hover:underline">/conformance</Link> for terminology standardization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Authority Chain */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <CanonicalReferences
                        docsUrl={DOCS_URLS.home}
                        repoUrl={REPO_URLS.root}
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
