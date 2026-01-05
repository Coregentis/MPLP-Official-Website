import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { flows } from "@/lib/content/flows";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

function flowSlug(id: string) {
    // Keep routing consistent across site (Flow-01 -> flow-01)
    return id.toLowerCase();
}

export const metadata: Metadata = {
    title: "Golden Flows | MPLP Protocol",
    description: "The five normative integration flows that define protocol compliance for MPLP implementations.",
    alternates: {
        canonical: `${siteConfig.url}/golden-flows`,
    },
};

export default function GoldenFlowsPage() {
    // CollectionPage with DefinedTerm entries for each flow
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "MPLP Golden Flows",
        "description": "The five normative integration flows that define protocol compliance for MPLP implementations.",
        "about": "Normative integration flows defining MPLP protocol compliance",
        "url": `${siteConfig.url}/golden-flows`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/golden-flows`
        },
        "articleSection": "Golden Flows",
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` },
        "author": { "@id": `${siteConfig.url}#mpgc` },
        "hasPart": [
            {
                "@type": "ListItem",
                "name": "Flow-01: Intent to Plan Transition",
                "url": `${siteConfig.url}/golden-flows/flow-01`,
                "@id": `${siteConfig.url}/golden-flows/flow-01`
            },
            {
                "@type": "ListItem",
                "name": "Flow-02: Governed Execution",
                "url": `${siteConfig.url}/golden-flows/flow-02`,
                "@id": `${siteConfig.url}/golden-flows/flow-02`
            },
            {
                "@type": "ListItem",
                "name": "Flow-03: Multi-Agent Coordination Loop",
                "url": `${siteConfig.url}/golden-flows/flow-03`,
                "@id": `${siteConfig.url}/golden-flows/flow-03`
            },
            {
                "@type": "ListItem",
                "name": "Flow-04: Drift Detection & Recovery",
                "url": `${siteConfig.url}/golden-flows/flow-04`,
                "@id": `${siteConfig.url}/golden-flows/flow-04`
            },
            {
                "@type": "ListItem",
                "name": "Flow-05: Runtime Integration & External I/O",
                "url": `${siteConfig.url}/golden-flows/flow-05`,
                "@id": `${siteConfig.url}/golden-flows/flow-05`
            }
        ]
    };

    return (
        <Shell>
            <JsonLd data={collectionSchema} />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "Golden Flows", href: "/golden-flows" }]} />
            </div>
            <PageHeader
                title="Golden Flows"
                subtitle="The 5 normative integration scenarios that every MPLP-conformant runtime is expected to pass. These flows serve as the 'integration tests' for the protocol."
                kicker="Validation"
            />

            {/* Normative Assertion */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
                <div className="text-center text-mplp-text-muted font-medium text-sm border border-mplp-border bg-slate-950/50 rounded-xl py-4 px-6">
                    <p className="mb-2">
                        Golden Flows are formally defined in the <strong>MPLP Protocol Specification</strong>.
                    </p>
                    <p className="text-xs text-mplp-text-muted/70">
                        See: <code className="bg-slate-900 px-1 py-0.5 rounded">governance/CONFORMANCE_MODEL.md</code> for normative requirements.
                    </p>
                </div>
            </div>

            <ContentSection>
                <div className="space-y-8">
                    {flows.map((flow) => (
                        <div key={flow.id} className="group relative rounded-3xl border border-mplp-border bg-slate-950/50 p-8 transition-all hover:border-mplp-blue-soft/30">
                            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-bold text-mplp-blue-soft uppercase tracking-wider">{flow.id}</span>
                                        <div className="h-px flex-1 bg-mplp-border" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-mplp-text mb-4 group-hover:text-mplp-blue-soft transition-colors">
                                        {flow.title}
                                    </h3>
                                    <p className="text-mplp-text-muted text-lg mb-6">
                                        {flow.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {flow.steps.map((step, i) => (
                                            <div key={i} className="flex items-center text-sm text-mplp-text-muted">
                                                <span className="font-medium text-mplp-text">{step.name}</span>
                                                {i < flow.steps.length - 1 && (
                                                    <span className="mx-2 text-mplp-border">→</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Normative Scope */}
                                    <p className="text-xs text-mplp-text-muted">
                                        <span className="font-semibold text-mplp-text-muted/70">Normative Scope:</span>{" "}
                                        {flow.keyModules.join(" · ")}
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <Button href={`/golden-flows/${flowSlug(flow.id)}`} variant="secondary" size="lg">
                                        View Flow Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            {/* Protocol Compliance Boundary */}
            <ContentSection background="surface">
                <SectionHeader
                    eyebrow="Normative"
                    title="Protocol Compliance Boundary"
                    className="mb-8"
                />
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-mplp-text-muted">
                        Golden Flows define the minimum executable scenarios required for MPLP compliance.
                    </p>
                    <p className="text-mplp-text-muted">
                        They are not examples, tutorials, or best practices.
                    </p>
                    <p className="text-mplp-text font-medium">
                        Runtimes claiming MPLP compatibility are expected to satisfy all Golden Flows as defined in the specification.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <Link
                            href="/compliance"
                            className="text-mplp-text-muted hover:text-mplp-blue-light transition-colors"
                        >
                            See Compliance Levels →
                        </Link>
                        <Link
                            href="/governance/overview"
                            className="text-mplp-text-muted hover:text-mplp-blue-light transition-colors"
                        >
                            See Governance Overview →
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
