import { FlowSteps } from "@/components/ui/flow-steps";
import { StandardPage } from "@/components/layout/standard-page";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
    flows,
    getCoreFlows,
    getMAPFlows,
    getSAFlows,
    type GoldenFlow,
} from "@/lib/content/flows";
import type { Metadata } from "next";
import { siteConfig, DOCS_URLS, LAB_URLS } from "@/lib/site-config";
import { CanonicalReferences } from "@/components/ui/canonical-references";
import { NextSteps } from "@/components/ui/next-steps";
import { Info } from "lucide-react";

function flowSlug(id: string) {
    return id.toLowerCase();
}

function FlowGroup({
    title,
    description,
    items,
}: {
    title: string;
    description: string;
    items: GoldenFlow[];
}) {
    return (
        <section className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-mplp-text">{title}</h2>
                <p className="text-sm text-mplp-text-muted max-w-3xl">{description}</p>
            </div>

            <div className="space-y-8">
                {items.map((flow) => (
                    <div key={flow.id} className="group relative rounded-3xl border border-mplp-border bg-slate-950/50 p-8 transition-all hover:border-mplp-blue-soft/30">
                        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm font-bold text-mplp-blue-soft uppercase tracking-wider">{flow.id}</span>
                                    <div className="h-px flex-1 bg-mplp-border" />
                                    <span className="rounded-full border border-mplp-border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mplp-text-muted">
                                        {flow.coreBoundary ? "Core Boundary" : "Profile Reference"}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-mplp-text mb-4 group-hover:text-mplp-blue-soft transition-colors">
                                    {flow.title}
                                </h3>
                                <p className="text-mplp-text-muted text-lg mb-6">
                                    {flow.desc}
                                </p>
                                <FlowSteps steps={flow.steps} className="mb-6" />
                                <p className="text-xs text-mplp-text-muted">
                                    <span className="font-semibold text-mplp-text-muted/70">Evaluated Scope:</span>{" "}
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
        </section>
    );
}

export const metadata: Metadata = {
    title: "Golden Flows | MPLP Protocol",
    description:
        "Website summary of 9 MPLP flow scenarios: 5 core published-boundary flows plus 4 profile-level reference flows.",
    alternates: {
        canonical: `${siteConfig.url}/golden-flows`,
    },
};

export default function GoldenFlowsPage() {
    const coreFlows = getCoreFlows();
    const saFlows = getSAFlows();
    const mapFlows = getMAPFlows();
    const flowRegistryUrl = flows[0]?.sourceModel.upstreamRegistryUrl;

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "MPLP Golden Flows",
        description:
            "Website summary of 9 MPLP flow scenarios: 5 core published-boundary flows plus 4 profile-level reference flows.",
        about:
            "Published MPLP flow scenarios spanning the core published boundary and profile-level reference flows.",
        url: `${siteConfig.url}/golden-flows`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/golden-flows`,
        },
        articleSection: "Golden Flows",
        isPartOf: { "@id": `${siteConfig.url}#website` },
        publisher: { "@id": `${siteConfig.url}#mpgc` },
        author: { "@id": `${siteConfig.url}#mpgc` },
        hasPart: flows.map((flow, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${flow.id.toUpperCase()}: ${flow.title}`,
            url: `${siteConfig.url}/golden-flows/${flow.id}`,
            "@id": `${siteConfig.url}/golden-flows/${flow.id}`,
        })),
    };

    return (
        <StandardPage
            title="Golden Flows"
            subtitle="Website summary of 9 published MPLP flow scenarios. FLOW-01~05 form the core v1.0 published boundary; SA-FLOW-01~02 and MAP-FLOW-01~02 are profile-level reference scenarios."
            kicker="Validation"
            breadcrumbs={[{ label: "Golden Flows", href: "/golden-flows" }]}
            jsonLd={collectionSchema}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-6">
                <div className="flex items-start gap-3 border border-amber-500/30 bg-amber-500/5 rounded-xl py-4 px-6">
                    <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                        <p className="font-semibold text-amber-400 mb-1">Terminology Note</p>
                        <ul className="text-mplp-text-muted space-y-1 text-xs">
                            <li><strong className="text-mplp-text">FLOW-01~05</strong> = Core published-boundary scenarios</li>
                            <li><strong className="text-mplp-text">SA-FLOW / MAP-FLOW</strong> = profile-level reference scenarios</li>
                            <li><strong className="text-mplp-text">LG-01~05</strong> = Validation Lab lifecycle guarantees</li>
                        </ul>
                        <p className="text-xs text-mplp-text-muted/80 mt-2">
                            These are distinct naming spaces and should not be conflated.{" "}
                            <a href={LAB_URLS.guarantees} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                See Lifecycle Guarantees (LG-01~05) in Validation Lab {"->"}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="border border-mplp-border bg-slate-950/50 rounded-xl py-4 px-6">
                    <p className="text-sm font-semibold text-mplp-text mb-2">Website Source Model</p>
                    <p className="text-sm text-mplp-text-muted mb-2">
                        This page renders the Website aggregate projection layer for Golden Flows. It is not a protocol-truth registry.
                    </p>
                    <p className="text-xs text-mplp-text-muted/80 leading-relaxed">
                        Upstream provenance: IDs, titles, and core-boundary classification are governed in{" "}
                        <a href={flowRegistryUrl} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                            tests/golden/flows/registry.ts
                        </a>
                        ; per-flow scenario detail is summarized from the upstream repo assets under{" "}
                        <code className="bg-slate-900 px-1 py-0.5 rounded">tests/golden/flows/*</code>. Docs remains the secondary reference projection at{" "}
                        <a href={DOCS_URLS.goldenFlowRegistry} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                            Golden Flow Registry
                        </a>
                        .
                    </p>
                </div>
            </div>

            <ContentSection>
                <div className="space-y-12">
                    <FlowGroup
                        title="Core Conformance Boundary"
                        description="FLOW-01~05 define the published v1.0 core boundary. These are the primary protocol-side scenarios implementations are expected to satisfy."
                        items={coreFlows}
                    />

                    <FlowGroup
                        title="SA Profile Reference Flows"
                        description="SA-FLOW-01~02 are profile-level reference scenarios. They inform Single-Agent profile evaluation, but they do not expand the core v1.0 published boundary."
                        items={saFlows}
                    />

                    <FlowGroup
                        title="MAP Profile Reference Flows"
                        description="MAP-FLOW-01~02 are profile-level reference scenarios for multi-agent coordination modes. They are reference flows, not additional core-boundary scenarios."
                        items={mapFlows}
                    />
                </div>
            </ContentSection>

            <ContentSection background="surface">
                <SectionHeader
                    eyebrow="Boundary"
                    title="How To Read This Page"
                    description="Website summarizes the published flow set, but it does not replace the upstream registry, per-flow repo assets, or Docs verification reference pages."
                    align="center"
                    className="mb-8"
                />
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-mplp-text font-medium">
                        Read FLOW-01~05 as the core published boundary. Read SA/MAP flows as profile-level reference scenarios that remain upstream-governed by the same verified asset chain.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <a
                            href={DOCS_URLS.goldenFlowRegistry}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mplp-text-muted hover:text-mplp-blue-light transition-colors"
                        >
                            Docs Flow Registry {"->"}
                        </a>
                        <a
                            href={flowRegistryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mplp-text-muted hover:text-mplp-blue-light transition-colors"
                        >
                            Repo Flow Registry {"->"}
                        </a>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <CanonicalReferences
                        docsKey="goldenFlowRegistry"
                        repoKey="tests"
                        variant="full"
                    />

                    <NextSteps
                        docsKey="goldenFlowRegistry"
                        repoKey="tests"
                        evidenceKey="conformance"
                    />
                </div>
            </ContentSection>
        </StandardPage>
    );
}
