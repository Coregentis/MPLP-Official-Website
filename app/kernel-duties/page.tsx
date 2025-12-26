import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Shell } from "@/components/layout/shell";

export const metadata: Metadata = {
    title: "Kernel Duties | MPLP — Multi-Agent Lifecycle Protocol",
    description: "The 11 kernel duties that describe lifecycle governance semantics in the MPLP protocol. Defines cross-cutting responsibilities across the protocol specification.",
};

export default function KernelDutiesPage() {
    return (
        <Shell>
            <section className="py-16 md:py-24">
                <Container>
                    {/* H1 - Page Topic */}
                    <h1 className="text-4xl md:text-5xl font-bold text-mplp-text mb-6">
                        Kernel Duties
                    </h1>

                    {/* Lead - Descriptive, T0-aligned */}
                    <p className="text-lg md:text-xl text-mplp-text-muted max-w-3xl mb-8 leading-relaxed">
                        The 11 kernel duties describe the cross-cutting lifecycle governance semantics
                        defined by MPLP. These duties represent responsibilities that span across
                        all protocol modules, ensuring consistent behavior throughout the agent lifecycle.
                    </p>

                    <p className="text-base text-mplp-text-muted max-w-3xl mb-10">
                        Kernel duties are <strong>descriptive specifications</strong>, not certification criteria.
                        They provide semantic boundaries for implementations to reference.
                    </p>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href="https://docs.mplp.io/docs/architecture/cross-cutting-kernel-duties"
                            className="inline-flex items-center px-6 py-3 bg-mplp-blue text-white font-semibold rounded-lg hover:bg-mplp-blue/90 transition-colors"
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
                            href="/governance"
                            className="inline-flex items-center px-6 py-3 border border-mplp-border text-mplp-text font-semibold rounded-lg hover:bg-mplp-bg transition-colors"
                        >
                            Governance
                        </Link>
                    </div>

                    {/* Brief Overview */}
                    <div className="border-t border-mplp-border pt-10">
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
                </Container>
            </section>
        </Shell>
    );
}
