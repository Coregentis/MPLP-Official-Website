import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { flows } from "@/lib/content/flows";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
    return flows.map((flow) => ({
        slug: flow.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const flow = flows.find((f) => f.id === slug);

    if (!flow) {
        return {};
    }

    return {
        title: `${flow.title} | MPLP Golden Flows`,
        description: `Normative execution flow: ${flow.desc}`,
        alternates: {
            canonical: `${siteConfig.url}/golden-flows/${slug}`,
        },
    };
}

export default async function FlowDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const flow = flows.find((f) => f.id === slug);

    if (!flow) {
        notFound();
    }

    // DefinedTerm JSON-LD for normative flow
    const definedTermSchema = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": `${flow.id.toUpperCase()}: ${flow.title}`,
        "inDefinedTermSet": "MPLP Golden Flows",
        "description": `Normative execution flow defining ${flow.title.toLowerCase()} in MPLP-conformant runtimes.`,
        "url": `${siteConfig.url}/golden-flows/${flow.id}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/golden-flows/${flow.id}`
        },
        "articleSection": "Golden Flows",
        "isPartOf": { "@id": `${siteConfig.url}#website` },
        "author": { "@id": `${siteConfig.url}#mpgc` },
        "publisher": { "@id": `${siteConfig.url}#mpgc` }
    };

    return (
        <Shell>
            <JsonLd data={definedTermSchema} />
            <ScrollReveal animation="fade-in">
                <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Golden Flows", href: "/golden-flows" },
                        { label: flow.title, href: `/golden-flows/${flow.id}` }
                    ]} />
                </div>
                <PageHeader
                    title={flow.title}
                    subtitle={flow.desc}
                    kicker={`Golden Flow: ${flow.id.toUpperCase()}`}
                />
            </ScrollReveal>

            <ContentSection className="pt-8 sm:pt-12">
                <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Goal & Criteria */}
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

                        {/* Steps */}
                        <ScrollReveal delay={200}>
                            <SectionHeader
                                eyebrow="Sequence"
                                title="Execution Steps"
                                description="The normative sequence of operations for this flow."
                            />
                            <div className="mt-8 space-y-6">
                                {flow.steps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-none flex flex-col items-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mplp-blue-soft/10 text-mplp-blue-soft border border-mplp-blue-soft/20 font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            {index < flow.steps.length - 1 && (
                                                <div className="w-px h-full bg-mplp-border my-2" />
                                            )}
                                        </div>
                                        <div className="pb-6">
                                            <h4 className="font-semibold text-mplp-text">{step.name}</h4>
                                            <p className="text-sm text-mplp-text-muted mt-1">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Normative Scope */}
                        <ScrollReveal delay={300}>
                            <SectionHeader
                                eyebrow="Normative"
                                title="Normative Scope"
                                description="This flow normatively aggregates and enforces existing constraints from the following MPLP modules."
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

                        {/* Failure Conditions */}
                        <ScrollReveal delay={400}>
                            <SectionHeader
                                eyebrow="Validation"
                                title="Failure Conditions"
                                description="Execution of this flow MUST be considered non-compliant if any of the following conditions occur."
                            />
                            <div className="mt-8 space-y-3">
                                {flow.failureConditions.map((condition, index) => (
                                    <div key={index} className="flex items-start gap-3 text-sm">
                                        <span className="text-mplp-warning font-bold">✗</span>
                                        <p className="text-mplp-text-muted">{condition}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Protocol Compliance Requirement */}
                        <ScrollReveal delay={500}>
                            <div className="p-6 rounded-xl border border-mplp-warning/30 bg-mplp-warning/5">
                                <h3 className="font-semibold text-mplp-warning mb-3">Protocol Compliance Requirement</h3>
                                <p className="text-sm text-mplp-text-muted mb-2">
                                    Any MPLP-conformant runtime is expected to pass this flow without violating any of the normative constraints defined above.
                                </p>
                                <p className="text-sm text-mplp-text font-medium">
                                    Failure to satisfy this flow results in a non-conformant MPLP implementation.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Sidebar */}
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
                                <Button variant="secondary" className="w-full justify-start" href="https://docs.mplp.io/docs/tests/golden-flow-registry" external>
                                    View in Registry
                                </Button>
                                <Button variant="ghost" className="w-full justify-start" href="/golden-flows">
                                    ← Back to Flows
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}
