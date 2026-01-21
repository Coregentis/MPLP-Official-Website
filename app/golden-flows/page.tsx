import Link from "next/link";
import { FlowSteps } from "@/components/ui/flow-steps";
import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { flows } from "@/lib/content/flows";
import type { Metadata } from "next";
import { siteConfig, DOCS_URLS, REPO_URLS, LAB_URLS } from "@/lib/site-config";
import { CanonicalReferences } from "@/components/ui/canonical-references";
import { NextSteps } from "@/components/ui/next-steps";
import { Info } from "lucide-react";

function flowSlug(id: string) {
    // Keep routing consistent across site (Flow-01 -> flow-01)
    return id.toLowerCase();
}

export const metadata: Metadata = {
    title: "Golden Flows | MPLP Protocol",
    description: "The five normative integration flows that define protocol conformance for MPLP implementations.",
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
        "description": "The five normative integration flows that define protocol conformance for MPLP implementations.",
        "about": "Normative integration flows defining MPLP protocol conformance",
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
                "name": "FLOW-01: Single Agent – Happy Path",
                "url": `${siteConfig.url}/golden-flows/flow-01`,
                "@id": `${siteConfig.url}/golden-flows/flow-01`
            },
            {
                "@type": "ListItem",
                "name": "FLOW-02: Single Agent – Large Plan",
                "url": `${siteConfig.url}/golden-flows/flow-02`,
                "@id": `${siteConfig.url}/golden-flows/flow-02`
            },
            {
                "@type": "ListItem",
                "name": "FLOW-03: Single Agent – With Tools",
                "url": `${siteConfig.url}/golden-flows/flow-03`,
                "@id": `${siteConfig.url}/golden-flows/flow-03`
            },
            {
                "@type": "ListItem",
                "name": "FLOW-04: Single Agent with LLM Enrichment",
                "url": `${siteConfig.url}/golden-flows/flow-04`,
                "@id": `${siteConfig.url}/golden-flows/flow-04`
            },
            {
                "@type": "ListItem",
                "name": "FLOW-05: Single Agent with Confirm Required",
                "url": `${siteConfig.url}/golden-flows/flow-05`,
                "@id": `${siteConfig.url}/golden-flows/flow-05`
            }
        ]
    };

    return (
        <StandardPage
            title="Golden Flows"
            subtitle="The 5 normative integration scenarios that every MPLP-conformant runtime is expected to pass. These flows serve as the 'integration tests' for the protocol."
            kicker="Validation"
            breadcrumbs={[{ label: "Golden Flows", href: "/golden-flows" }]}
            jsonLd={collectionSchema}
        >
            {/* Terminology Note - Flow vs LG Distinction */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-6">
                <div className="flex items-start gap-3 border border-amber-500/30 bg-amber-500/5 rounded-xl py-4 px-6">
                    <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                        <p className="font-semibold text-amber-400 mb-1">Terminology Note</p>
                        <ul className="text-mplp-text-muted space-y-1 text-xs">
                            <li><strong className="text-mplp-text">Flow-01~05</strong> = Protocol Test Scenarios (defined in main repository)</li>
                            <li><strong className="text-mplp-text">LG-01~05</strong> = Lifecycle Guarantees (Lab adjudication targets)</li>
                        </ul>
                        <p className="text-xs text-mplp-text-muted/80 mt-2">
                            These are distinct naming spaces and should not be conflated.{" "}
                            <a href={LAB_URLS.guarantees} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                See Lifecycle Guarantees (LG-01~05) in Validation Lab →
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Normative Assertion */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
                                    <FlowSteps steps={flow.steps} className="mb-6" />
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

            {/* Protocol Conformance Boundary */}
            <ContentSection background="surface">
                <SectionHeader
                    eyebrow="Normative"
                    title="Protocol Conformance Boundary"
                    description="Golden Flows define the minimum executable scenarios required for MPLP conformance. They are not examples, tutorials, or best practices."
                    align="center"
                    className="mb-8"
                />
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-mplp-text font-medium">
                        Implementations may be evaluated against Golden Flows as described in the specification.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <Link
                            href="/conformance"
                            className="text-mplp-text-muted hover:text-mplp-blue-light transition-colors"
                        >
                            See Conformance Levels →
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

            {/* Authority Chain */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <CanonicalReferences
                        docsKey="goldenFlows"
                        repoKey="tests"
                        variant="full"
                    />

                    <NextSteps
                        docsKey="goldenFlows"
                        repoKey="tests"
                        evidenceKey="conformance"
                    />
                </div>
            </ContentSection>
        </StandardPage>
    );
}
