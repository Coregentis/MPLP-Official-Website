import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Shell } from "@/components/layout/shell";
import { JsonLd } from "@/components/seo/json-ld";
import { jsonLdReferencesPage } from "@/lib/seo/jsonld-structure";

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

            <section className="py-16 md:py-24">
                <Container>
                    {/* H1 - Page Topic */}
                    <h1 className="text-4xl md:text-5xl font-bold text-mplp-text mb-6">
                        References
                    </h1>

                    {/* Lead - Descriptive, non-endorsement */}
                    <p className="text-lg md:text-xl text-mplp-text-muted max-w-3xl mb-8 leading-relaxed">
                        Citation contexts and external references for MPLP — the lifecycle protocol
                        for AI agent systems. This page provides descriptive mappings to standards,
                        academic contexts, and framework comparison topics.
                    </p>

                    <div className="p-4 bg-mplp-bg border border-mplp-border rounded-lg mb-10 max-w-3xl">
                        <p className="text-sm text-mplp-text-muted">
                            <strong>Important:</strong> References are provided for context only.
                            MPLP does not issue certifications, endorsements, or audit opinions.
                            Comparisons describe layer differences, not superiority judgments.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href="https://docs.mplp.io/docs/standards/positioning"
                            className="inline-flex items-center px-6 py-3 bg-mplp-blue text-white font-semibold rounded-lg hover:bg-mplp-blue/90 transition-colors"
                            target="_blank"
                        >
                            Standards Positioning →
                        </Link>
                        <Link
                            href="/faq"
                            className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/governance"
                            className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        >
                            Governance
                        </Link>
                    </div>

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
                                    href="https://docs.mplp.io/docs/standards/iso-mapping"
                                    className="p-4 border border-mplp-border rounded-lg hover:border-mplp-blue transition-colors"
                                    target="_blank"
                                >
                                    <h3 className="font-semibold text-mplp-text mb-1">ISO/IEC 42001</h3>
                                    <p className="text-sm text-mplp-text-muted">AI Management System mapping</p>
                                </Link>
                                <Link
                                    href="https://docs.mplp.io/docs/standards/nist-mapping"
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
                                When discussing lifecycle semantics, they are often mapped to or compared against
                                MPLP&apos;s definitional model. MPLP operates at the protocol level, defining lifecycle
                                semantics independently of any framework.
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
                    </div>
                </Container>
            </section>
        </Shell>
    );
}
