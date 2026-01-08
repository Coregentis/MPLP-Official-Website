import { Shell } from "@/components/layout/shell";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { DOCS_URLS } from "@/lib/site-config";

export const metadata = {
    title: "POSIX Analogy",
    description: "Understanding the Multi-Agent Lifecycle Protocol through the POSIX analogy. A non-normative conceptual explainer.",
};

export default function PosixAnalogyPage() {
    return (
        <Shell>
            <Container className="py-24 sm:py-32">
                <ScrollReveal animation="fade-in-up">
                    <SectionHeader
                        eyebrow="Conceptual Positioning"
                        title="The POSIX Analogy"
                        description="To understand what MPLP governs, it is helpful to view it through the lens of system-level interfaces rather than networking protocols."
                        align="center"
                        className="mb-16"
                    />

                    <div className="max-w-3xl mx-auto">
                        <div className="mplp-card p-8 sm:p-12 border-mplp-indigo/30 bg-mplp-indigo/5 relative overflow-hidden">
                            {/* Non-Normative Label */}
                            <div className="absolute top-0 right-0 p-6">
                                <Badge variant="outline" className="text-[10px] tracking-widest border-mplp-indigo/30 text-mplp-indigo uppercase bg-mplp-dark/50">Non-Normative</Badge>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-mplp-text-muted mb-8">
                                    The MPLP specification is analogous to <strong className="text-mplp-text font-bold">POSIX</strong> (Portable Operating System Interface), not TCP/IP.
                                </p>

                                <h3 className="text-xl font-bold text-mplp-text mb-4">Why POSIX?</h3>
                                <p className="text-mplp-text-muted mb-6">
                                    Just as POSIX defines the standard interface between applications and the operating system kernel,
                                    MPLP defines the standard lifecycle interface between an AI agent and its environment (the &quot;Agent OS&quot;).
                                </p>

                                <div className="grid gap-6 mt-12">
                                    <div className="flex items-start gap-4">
                                        <div className="h-8 w-8 rounded-full bg-mplp-indigo/20 flex items-center justify-center shrink-0 border border-mplp-indigo/30">
                                            <span className="text-mplp-indigo font-bold text-xs">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-mplp-text mb-2 tracking-tight uppercase text-xs">System-Level Interfaces</h4>
                                            <p className="text-sm text-mplp-text-muted">How components interact at critical lifecycle boundaries: Context, Planning, and Confirmation.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-8 w-8 rounded-full bg-mplp-indigo/20 flex items-center justify-center shrink-0 border border-mplp-indigo/30">
                                            <span className="text-mplp-indigo font-bold text-xs">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-mplp-text mb-2 tracking-tight uppercase text-xs">Semantic Contracts</h4>
                                            <p className="text-sm text-mplp-text-muted">What signals, states, and invariants are expected for a system to be considered &quot;governable&quot;.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-8 w-8 rounded-full bg-mplp-indigo/20 flex items-center justify-center shrink-0 border border-mplp-indigo/30">
                                            <span className="text-mplp-indigo font-bold text-xs">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-mplp-text mb-2 tracking-tight uppercase text-xs">Behavioral Expectations</h4>
                                            <p className="text-sm text-mplp-text-muted">How conforming implementations should behave under specific protocol conditions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-6 rounded-xl border border-mplp-border bg-mplp-dark/50 italic text-sm text-mplp-text-muted/80">
                                    <p>
                                        &quot;POSIX ensures that source code can be ported across operating systems. MPLP ensures that agent governance can be ported across models, frameworks, and vendors.&quot;
                                    </p>
                                </div>

                                <div className="mt-12 text-center">
                                    <p className="text-xs text-mplp-text-muted/60">
                                        Note: This analogy is informative and intended to help with conceptual positioning.<br />
                                        For the normative specification, see the <a href={DOCS_URLS.home} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">Official Documentation</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </Shell>
    );
}
