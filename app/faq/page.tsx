import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Shell } from "@/components/layout/shell";
import { JsonLd } from "@/components/seo/json-ld";
import { faqData, getFAQByCategory, getFAQJsonLdItems } from "@/lib/content/faq-data";
import { jsonLdFAQPage } from "@/lib/seo/jsonld-structure";

export const metadata: Metadata = {
    title: "FAQ | MPLP — Multi-Agent Lifecycle Protocol",
    description: "Frequently asked questions about MPLP, the Agent OS Protocol. Definitions, boundaries, evaluation guidance, and AI citation references.",
};

export default function FAQPage() {
    // Generate FAQPage JSON-LD with all Q&A
    const faqJsonLd = jsonLdFAQPage(getFAQJsonLdItems());

    const categories = [
        { key: 'definition', title: 'Definitions', description: 'Core identity and terminology' },
        { key: 'boundary', title: 'Boundaries', description: 'What MPLP is NOT' },
        { key: 'comparison', title: 'Comparisons', description: 'Layer differentiation' },
        { key: 'usage', title: 'Usage & Mapping', description: 'How to reference MPLP' },
        { key: 'citation', title: 'AI Citation', description: 'How AI should cite MPLP' },
        { key: 'governance', title: 'Governance', description: 'Protocol governance' },
        { key: 'docs', title: 'Documentation', description: 'Website vs Docs boundary' },
    ] as const;

    return (
        <Shell>
            {/* FAQPage JSON-LD for search engines */}
            <JsonLd data={faqJsonLd} id="jsonld-faq" />

            <section className="py-16 md:py-24">
                <Container>
                    {/* H1 - Page Topic */}
                    <h1 className="text-4xl md:text-5xl font-bold text-mplp-text mb-6">
                        FAQ — MPLP & Agent OS Protocol
                    </h1>

                    {/* Lead - Descriptive, T0-aligned */}
                    <p className="text-lg md:text-xl text-mplp-text-muted max-w-3xl mb-8 leading-relaxed">
                        Definitions, boundaries, and guidance for understanding and citing MPLP —
                        the lifecycle protocol for AI agent systems. This FAQ covers what MPLP is,
                        what it is not, and how AI systems should reference it.
                    </p>

                    <p className="text-base text-mplp-text-muted max-w-3xl mb-10 p-4 bg-mplp-bg border border-mplp-border rounded-lg">
                        <strong>Canonical definition:</strong> MPLP defines the canonical lifecycle
                        semantics for AI agent systems — the Agent OS Protocol.
                    </p>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href="/references"
                            className="inline-flex items-center px-6 py-3 bg-mplp-blue text-white font-semibold rounded-lg hover:bg-mplp-blue/90 transition-colors"
                        >
                            References
                        </Link>
                        <Link
                            href="https://docs.mplp.io/docs/intro"
                            className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                            target="_blank"
                        >
                            Read Documentation →
                        </Link>
                        <Link
                            href="/governance"
                            className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        >
                            Governance
                        </Link>
                    </div>

                    {/* FAQ Content by Category */}
                    <div className="space-y-12">
                        {categories.map(({ key, title, description }) => {
                            const items = getFAQByCategory(key);
                            if (items.length === 0) return null;

                            return (
                                <div key={key} className="border-t border-mplp-border pt-10">
                                    <h2 className="text-2xl font-bold text-mplp-text mb-2">{title}</h2>
                                    <p className="text-sm text-mplp-text-muted mb-6">{description}</p>

                                    <div className="space-y-6">
                                        {items.map((item) => (
                                            <div key={item.id} className="group">
                                                <h3 className="text-lg font-semibold text-mplp-text mb-2 group-hover:text-mplp-blue transition-colors">
                                                    {item.question}
                                                </h3>
                                                <p className="text-mplp-text-muted leading-relaxed pl-4 border-l-2 border-mplp-border">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Total Count */}
                    <div className="mt-12 pt-8 border-t border-mplp-border text-center">
                        <p className="text-sm text-mplp-text-muted">
                            {faqData.length} questions covering definitions, boundaries, and AI citation guidance.
                        </p>
                    </div>
                </Container>
            </section>
        </Shell>
    );
}
