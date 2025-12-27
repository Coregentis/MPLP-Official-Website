import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Kernel Duties | MPLP — Multi-Agent Lifecycle Protocol",
    description: "The 11 kernel duties that describe lifecycle governance semantics in the MPLP protocol. Defines cross-cutting responsibilities across the protocol specification.",
};

export default function KernelDutiesPage() {
    const techArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": `${siteConfig.url}/kernel-duties#article`,
        name: "Kernel Duties | MPLP",
        headline: "The 11 Kernel Duties — Lifecycle Governance Semantics",
        description: "The 11 kernel duties that describe lifecycle governance semantics in the MPLP protocol.",
        url: `${siteConfig.url}/kernel-duties`,
        isPartOf: { "@id": `${siteConfig.url}#website` },
        about: { "@id": `${siteConfig.url}#defined-terms` },
    };

    return (
        <Shell>
            {/* TechArticle JSON-LD */}
            <JsonLd data={techArticleSchema} />

            {/* Breadcrumb */}
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "Kernel Duties", href: "/kernel-duties" }]} />
            </div>

            {/* PageHeader - Consistent with other anchor pages */}
            <PageHeader
                title="Kernel Duties"
                subtitle="The 11 kernel duties describe the cross-cutting lifecycle governance semantics defined by MPLP. These duties represent responsibilities that span across all protocol modules, ensuring consistent behavior throughout the agent lifecycle."
                kicker="Cross-Cutting Semantics"
            />

            <ContentSection>
                <div className="p-4 bg-mplp-bg border border-mplp-border rounded-lg mb-10 max-w-3xl mx-auto">
                    <p className="text-sm text-mplp-text-muted">
                        Kernel duties are <strong>descriptive specifications</strong>, not certification criteria.
                        They provide semantic boundaries for implementations to reference.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Link
                        href="https://docs.mplp.io/docs/architecture/cross-cutting-kernel-duties"
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        target="_blank"
                    >
                        Read Full Specification →
                    </Link>
                    <Link
                        href="/golden-flows"
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                    >
                        Golden Flows
                    </Link>
                    <Link
                        href="/governance/overview"
                        className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                    >
                        Governance
                    </Link>
                </div>

                {/* Brief Overview */}
                <div className="border-t border-mplp-border pt-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-mplp-text mb-6">The 11 Kernel Duties</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-mplp-text-muted">
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">01</span>
                            <span>Error Handling & Recovery</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">02</span>
                            <span>Observability & Tracing</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">03</span>
                            <span>Coordination & Orchestration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">04</span>
                            <span>State Synchronization</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">05</span>
                            <span>Security & Access Control</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">06</span>
                            <span>Transaction Management</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">07</span>
                            <span>Event Bus Integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">08</span>
                            <span>Performance Optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">09</span>
                            <span>Protocol Versioning</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">10</span>
                            <span>Learning & Feedback</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-mplp-blue">11</span>
                            <span>Lifecycle Orchestration</span>
                        </li>
                    </ul>
                </div>
            </ContentSection>
        </Shell>
    );
}

