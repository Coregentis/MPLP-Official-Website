import { Container } from "@/components/layout/container";
import Link from "next/link";
import { SectionTitle } from "@/components/common/section-title";
import { Button } from "@/components/common/button";

/**
 * Golden Flows Section — SSOT Aligned
 * 
 * TRUTH SOURCE: tests/golden/flows/registry.ts
 * Names MUST match the registry exactly. Any deviation is a bug.
 * 
 * DO NOT use conceptual names (Intent → Plan, Multi-Agent Coordination, etc.)
 * Those belong in the Protocol Capabilities section, not here.
 */

// Core v1.0 Conformance Boundary Flows (from registry.ts)
const goldenFlows = [
    {
        id: "01",
        title: "Single Agent – Happy Path",
        description: "Baseline single-agent workflow: context creation, 2-step plan generation, execution with trace recording.",
        modules: ["Context", "Plan"],
        href: "/golden-flows/flow-01",
    },
    {
        id: "02",
        title: "Single Agent – Large Plan",
        description: "Volumetric validation with 25 steps. Tests protocol handling of large execution plans.",
        modules: ["Context", "Plan"],
        href: "/golden-flows/flow-02",
    },
    {
        id: "03",
        title: "Single Agent – With Tools",
        description: "Tool integration via agent_role field. Validates curl_executor, jq_processor semantics.",
        modules: ["Context", "Plan", "Extension"],
        href: "/golden-flows/flow-03",
    },
    {
        id: "04",
        title: "Single Agent with LLM Enrichment",
        description: "AEL integration. Validates LLM-enriched plan generation with llm_claude, llm_gpt roles.",
        modules: ["Context", "Plan", "Core"],
        href: "/golden-flows/flow-04",
    },
    {
        id: "05",
        title: "Single Agent with Confirm Required",
        description: "Multi-round approval workflow. Validates Confirm module with decisions[] array.",
        modules: ["Context", "Plan", "Confirm", "Trace"],
        href: "/golden-flows/flow-05",
    },
];

export function GoldenFlowsSection() {
    return (
        <section className="py-24 bg-slate-950">
            <Container>
                <SectionTitle
                    badge="Normative Validation"
                    title="Golden Flows"
                    subtitle="Golden Flows are evaluation scenarios from tests/golden/flows/. Each flow validates specific L2 protocol modules."
                />

                {/* Truth Source Notice */}
                <div className="text-center mb-8">
                    <p className="text-xs text-mplp-text-muted/60 font-mono">
                        Truth Source: <code className="bg-slate-900 px-1 py-0.5 rounded">tests/golden/flows/*</code>
                    </p>
                </div>

                {/* Flows Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {goldenFlows.map((flow) => (
                        <Link
                            key={flow.id}
                            href={flow.href}
                            className="bg-glass border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all group block"
                        >
                            {/* Flow Number + Title */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                                    {flow.id}
                                </span>
                                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm">
                                    {flow.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-slate-400 mb-4">{flow.description}</p>

                            {/* Modules Tested */}
                            <div className="flex flex-wrap gap-2">
                                {flow.modules.map((module) => (
                                    <span
                                        key={module}
                                        className="text-xs px-2 py-1 bg-blue-900/30 border border-blue-500/20 text-blue-300 rounded-full"
                                    >
                                        {module}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button href="/golden-flows" variant="primary" size="lg" className="shadow-glow hover:shadow-glow-hover">
                        Explore All Golden Flows →
                    </Button>
                </div>
            </Container>
        </section>
    );
}
