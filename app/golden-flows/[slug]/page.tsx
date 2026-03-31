import { Shell } from "@/components/layout/shell";
import { FlowSteps } from "@/components/ui/flow-steps";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { getFlowById, flows } from "@/lib/content/flows";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
    return flows.map((flow) => ({
        slug: flow.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const flow = getFlowById(slug);

    if (!flow) {
        return {};
    }

    return {
        title: `${flow.title} | MPLP Golden Flows`,
        description: flow.complianceBoundary
            ? `Website summary of MPLP core conformance scenario: ${flow.desc}`
            : `Website summary of MPLP profile-level flow scenario: ${flow.desc}`,
        alternates: {
            canonical: `${siteConfig.url}/golden-flows/${slug}`,
        },
    };
}

export default async function FlowDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const flow = getFlowById(slug);

    if (!flow) {
        notFound();
    }

    const scopeTitle = flow.complianceBoundary ? "Normative Scope" : "Profile Scope";
    const scopeDescription = flow.complianceBoundary
        ? "This core flow aggregates and enforces existing constraints from the following MPLP modules."
        : "This Website summary reflects the evaluated scope of a profile-level reference scenario. It is not part of the v1.0 core compliance boundary.";
    const failureDescription = flow.complianceBoundary
        ? "Execution of this core flow MUST be considered non-conformant if any of the following conditions occur."
        : "This profile-level reference flow should be treated as failed if any of the following conditions occur during evaluation.";

    const flowArticleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        name: `${flow.id.toUpperCase()}: ${flow.title}`,
        headline: `MPLP Golden Flow: ${flow.title}`,
        description: flow.complianceBoundary
            ? `Website summary of the ${flow.title.toLowerCase()} core conformance flow in MPLP.`
            : `Website summary of the ${flow.title.toLowerCase()} profile-level flow in MPLP.`,
        url: `${siteConfig.url}/golden-flows/${flow.id}`,
        isBasedOn: [
            flow.sourceModel.upstreamRegistryUrl,
            flow.sourceModel.upstreamReadmeUrl,
            flow.sourceModel.docsReferenceUrl,
        ],
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/golden-flows/${flow.id}`,
        },
        articleSection: "Golden Flows",
        isPartOf: { "@id": `${siteConfig.url}#website` },
        author: { "@id": `${siteConfig.url}#mpgc` },
        publisher: { "@id": `${siteConfig.url}#mpgc` },
    };

    return (
        <Shell>
            <JsonLd data={flowArticleSchema} />
            <ScrollReveal animation="fade-in">
                <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Golden Flows", href: "/golden-flows" },
                        { label: flow.title, href: `/golden-flows/${flow.id}` },
                    ]} />
                </div>
                <PageHeader
                    title={flow.title}
                    subtitle={flow.desc}
                    kicker={flow.complianceBoundary ? `Core Flow: ${flow.id.toUpperCase()}` : `Profile Flow: ${flow.id.toUpperCase()}`}
                />
            </ScrollReveal>

            <ContentSection className="pt-6 sm:pt-8">
                <div className="max-w-5xl mx-auto rounded-2xl border border-mplp-border bg-slate-950/40 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-mplp-text-muted/70 mb-2">
                        Website Source Model
                    </p>
                    <p className="text-sm text-mplp-text-muted mb-2">
                        Actual page source: Website aggregate projection layer in <code className="bg-slate-900 px-1 py-0.5 rounded">{flow.sourceModel.actualSourcePath}</code>.
                    </p>
                    <p className="text-xs text-mplp-text-muted/80 leading-relaxed">
                        Upstream provenance: IDs, titles, and boundary classification come from{" "}
                        <a href={flow.sourceModel.upstreamRegistryUrl} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                            tests/golden/flows/registry.ts
                        </a>
                        ; per-flow scenario detail is summarized from the upstream asset{" "}
                        <a href={flow.sourceModel.upstreamReadmeUrl} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                            {flow.sourceModel.upstreamReadmePath}
                        </a>
                        . The Docs page is a secondary reference at{" "}
                        <a href={flow.sourceModel.docsReferenceUrl} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                            verified flow reference
                        </a>
                        .
                    </p>
                </div>
            </ContentSection>

            <ContentSection className="pt-8 sm:pt-12">
                <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-12">
                        <ScrollReveal delay={100} className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 rounded-xl border border-mplp-border bg-slate-950/50">
                                <h3 className="font-semibold text-mplp-text mb-2">Goal</h3>
                                <p className="text-sm text-mplp-text-muted">{flow.goal}</p>
                            </div>
                            <div className="p-6 rounded-xl border border-mplp-border bg-slate-950/50">
                                <h3 className="font-semibold text-mplp-text mb-2">Success Criteria</h3>
                                <p className="text-sm text-mplp-text-muted">{flow.successCriteria}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <SectionHeader
                                eyebrow="Sequence"
                                title="Execution Steps"
                                description="Website summary of the scenario sequence represented by this flow."
                            />
                            <div className="mt-8">
                                <FlowSteps steps={flow.steps} variant="detailed" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <SectionHeader
                                eyebrow={flow.complianceBoundary ? "Normative" : "Profile"}
                                title={scopeTitle}
                                description={scopeDescription}
                            />
                            <div className="mt-8 space-y-4">
                                {flow.normativeScope.map((scope, index) => (
                                    <div key={index} className="p-4 rounded-xl border border-mplp-border bg-slate-950/50">
                                        <h4 className="font-semibold text-mplp-blue-soft text-sm mb-1">{scope.module} Module</h4>
                                        <p className="text-sm text-mplp-text-muted">{scope.constraint}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <SectionHeader
                                eyebrow="Validation"
                                title="Failure Conditions"
                                description={failureDescription}
                            />
                            <div className="mt-8 space-y-3">
                                {flow.failureConditions.map((condition, index) => (
                                    <div key={index} className="flex items-start gap-3 text-sm">
                                        <span className="text-mplp-warning font-bold">x</span>
                                        <p className="text-mplp-text-muted">{condition}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={500}>
                            {flow.complianceBoundary ? (
                                <div className="p-6 rounded-xl border border-mplp-warning/30 bg-mplp-warning/5">
                                    <h3 className="font-semibold text-mplp-warning mb-3">Core Conformance Boundary</h3>
                                    <p className="text-sm text-mplp-text-muted mb-2">
                                        FLOW-01~05 form the published v1.0 core conformance boundary. Implementations are expected to satisfy this flow without violating the upstream constraints summarized above.
                                    </p>
                                    <p className="text-sm text-mplp-text font-medium">
                                        Failure to satisfy this core flow indicates a non-conformant result against the published core boundary.
                                    </p>
                                </div>
                            ) : (
                                <div className="p-6 rounded-xl border border-mplp-border bg-slate-950/50">
                                    <h3 className="font-semibold text-mplp-text mb-3">Profile-Level Reference Boundary</h3>
                                    <p className="text-sm text-mplp-text-muted mb-2">
                                        This scenario is published as a profile-level reference flow. It informs SA or MAP profile evaluation, but it does not expand the core v1.0 compliance boundary.
                                    </p>
                                    <p className="text-sm text-mplp-text font-medium">
                                        Read this page as a Website summary of a profile reference scenario, then defer to the upstream repo asset and Docs reference for the governed detail.
                                    </p>
                                </div>
                            )}
                        </ScrollReveal>
                    </div>

                    <div className="space-y-8">
                        <ScrollReveal delay={300} className="rounded-2xl border border-mplp-border bg-slate-950/50 p-6">
                            <h3 className="font-semibold text-mplp-text mb-4">Key Modules</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {flow.keyModules.map((mod) => (
                                    <span key={mod} className="px-2 py-1 rounded bg-slate-900 border border-mplp-border text-xs text-mplp-text-muted font-mono">
                                        {mod}
                                    </span>
                                ))}
                            </div>
                            <div className="space-y-3">
                                <Button variant="secondary" className="w-full justify-start" href={flow.sourceModel.docsReferenceUrl} external>
                                    View Docs Reference
                                </Button>
                                <Button variant="secondary" className="w-full justify-start" href={flow.sourceModel.upstreamReadmeUrl} external>
                                    View Upstream Source
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" href="/golden-flows">
                                    {"<-"} Back to Flows
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
