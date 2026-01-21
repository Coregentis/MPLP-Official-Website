import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/common/section-title";

/**
 * Protocol Capabilities Section (Conceptual)
 * 
 * These are POSITIONING vocabulary items, NOT Golden Flows.
 * They describe the conceptual guarantees of the MPLP protocol.
 * 
 * IMPORTANT: These names must NOT be used as Golden Flow names.
 * Golden Flows are defined in tests/golden/flows/registry.ts
 */

const capabilities = [
    {
        name: "Intent → Plan Transition",
        description: "Transform user intent into structured context and generate an executable plan.",
        icon: "📝",
    },
    {
        name: "Governed Execution",
        description: "Execute plans while respecting constraints and emitting trace events.",
        icon: "🛡️",
    },
    {
        name: "Multi-Agent Coordination",
        description: "Coordinate multiple agents with role assignment and atomic task handoffs.",
        icon: "🤝",
    },
    {
        name: "Drift Detection & Recovery",
        description: "Detect state divergence and trigger recovery or replanning sequences.",
        icon: "🔄",
    },
    {
        name: "Runtime Integration & External I/O",
        description: "Connect to external systems via the L4 Integration Layer with tracked side-effects.",
        icon: "🔌",
    },
];

export function ProtocolCapabilitiesSection() {
    return (
        <section className="py-16 bg-slate-900/50">
            <Container>
                <SectionTitle
                    badge="Conceptual"
                    title="Protocol Capabilities"
                    subtitle="High-level guarantees the MPLP protocol provides. These are positioning vocabulary, not evaluation scenarios."
                />

                {/* Non-normative Notice */}
                <div className="text-center mb-8">
                    <p className="text-xs text-amber-500/80 font-mono">
                        ⚠️ Not Golden Flows. Non-normative positioning layer.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {capabilities.map((cap) => (
                        <div
                            key={cap.name}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center"
                        >
                            <span className="text-2xl mb-2 block">{cap.icon}</span>
                            <h4 className="font-semibold text-white text-sm mb-2">{cap.name}</h4>
                            <p className="text-xs text-slate-400">{cap.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
