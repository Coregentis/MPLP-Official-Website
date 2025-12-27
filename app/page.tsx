import React from "react";
import { Shell } from "@/components/layout/shell";
import { ContentSection } from "@/components/ui/content-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, generateProtocolSchema } from "@/components/seo/json-ld";


export const metadata: Metadata = {
    title: "MPLP — Multi-Agent Lifecycle Protocol | The Agent OS Protocol",
    description: "MPLP defines the canonical lifecycle semantics for AI agent systems — the Agent OS Protocol. Explore Architecture, Modules, Kernel Duties, Golden Flows, Governance, FAQ, and References. Not a framework, not a runtime, not a platform. — the Agent OS Protocol. It defines how agents are created, operated, audited, and decommissioned. Not a framework. Not a runtime. Not a platform.",
    alternates: {
        canonical: `${siteConfig.url}`,
    },
};

export default function Home() {
    const protocolSchema = generateProtocolSchema();

    return (
        <Shell>
            <JsonLd data={protocolSchema} />
            <HeroSection />
            <ProtocolStatusSection />

            <ContentSection>
                <ProblemSection />
            </ContentSection>

            <ContentSection background="surface">
                <ArchitectureSection />
            </ContentSection>

            <ContentSection>
                <ModulesSection />
            </ContentSection>

            <ContentSection background="surface">
                <QuickstartSection />
            </ContentSection>

            <ContentSection>
                <GoldenFlowsSection />
            </ContentSection>

            <ContentSection background="surface">
                <EcosystemSection />
            </ContentSection>

            <ContentSection>
                <FinalCtaSection />
            </ContentSection>
        </Shell>
    );
}

// 1. Hero Section
function HeroSection() {
    return (
        <section className="relative overflow-hidden flex flex-col">
            {/* Structural Background */}
            <div className="absolute inset-0 -z-10 bg-mplp-dark" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

            {/* Subtle Blueprint Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mplp-blue-soft/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 pb-6 md:pt-20 md:pb-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    {/* Copy - Statement of Purpose */}
                    <ScrollReveal animation="fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mplp-blue-soft/20 bg-mplp-blue-soft/5 text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-blue-soft mb-4">
                            <span className="h-1 w-1 rounded-full bg-mplp-blue-soft" />
                            Protocol Specification v1.0.0
                        </div>

                        <div className="mb-4">
                            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-mplp-text-muted mb-2">Multi-Agent Lifecycle Protocol</p>
                            <h1 className="font-bold text-mplp-text mb-2 leading-[1.15] tracking-tight whitespace-nowrap">
                                <span className="block text-3xl sm:text-5xl lg:text-6xl text-gradient pb-3">
                                    The Agent OS Protocol
                                </span>
                            </h1>
                            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-mplp-blue-soft/80">The Lifecycle Protocol of AI Agents</p>
                        </div>

                        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-mplp-text-muted/90 mb-4">
                            The lifecycle protocol for AI agent systems.<br />
                            MPLP defines how agents are created, operated, audited, and decommissioned across their full lifecycle.
                        </p>

                        <p className="text-sm font-semibold text-mplp-blue-soft/70 tracking-wide mb-5">
                            Not a framework. Not a runtime. Not a platform.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Button href="https://docs.mplp.io" external variant="primary" size="lg" className="px-8 h-12 text-sm">
                                Read Specification
                            </Button>
                            <Button href="/governance/overview" variant="secondary" size="lg" className="px-8 h-12 text-sm border-mplp-border/50">
                                Governance Entry
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-5 border-t border-mplp-border/20 max-w-lg">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-1">Status</p>
                                <p className="text-xs font-semibold text-mplp-text">Frozen / Stable</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-1">License</p>
                                <p className="text-xs font-semibold text-mplp-text">Apache 2.0</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-1">Governance</p>
                                <p className="text-xs font-semibold text-mplp-text">MPGC Managed</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Architecture Blueprint - De-emphasized */}
                    <div className="relative hidden lg:block opacity-80 hover:opacity-100 transition-opacity">
                        <div className="mplp-card relative border-mplp-border/30 bg-slate-950/40 backdrop-blur-sm overflow-hidden">
                            {/* Blueprint Grid Overlay */}
                            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

                            <div className="relative z-10 p-1">
                                <div className="flex items-center justify-between mb-5 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-mplp-blue-soft/50" />
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted">
                                            Protocol Hierarchy
                                        </p>
                                    </div>
                                    <Badge variant="outline" className="text-[9px] border-mplp-border/30 text-mplp-text-muted">REF: SPEC-01</Badge>
                                </div>

                                <div className="space-y-2">
                                    <LayerRow label="L1 · Core Protocol" desc="Lifecycle primitives and semantic invariants." />
                                    <LayerRow label="L2 · Coordination" desc="Governance primitives: Context, Plan, Confirm." />
                                    <LayerRow label="L3 · Runtime" desc="AEL loops and VSL state/value logic." />
                                    <LayerRow label="L4 · Integration" desc="Models, tools, and adapters." isLast />
                                </div>

                                <div className="mt-6 pt-4 border-t border-mplp-border/20 px-2 flex justify-between items-center">
                                    <p className="text-[9px] text-mplp-text-muted/50 font-mono">HASH: 2b60cf2...7abf80c</p>
                                    <Link href="/architecture" className="text-[10px] font-bold uppercase tracking-wider text-mplp-blue-soft/70 hover:text-mplp-blue-soft transition-colors flex items-center gap-1">
                                        Full Architecture <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 1.5 Protocol Status Section
function ProtocolStatusSection() {
    return (
        <div className="bg-slate-950/30 border-b border-mplp-border/30 py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href="/governance/overview" className="flex items-center gap-2 hover:text-mplp-blue-soft transition-colors">
                            <span className="status-dot status-dot-frozen" />
                            Protocol Status: Frozen
                        </Link>
                        <div className="h-3 w-px bg-mplp-border/50" />
                        <span className="text-mplp-text">v1.0.0-stable</span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2">
                        <Link href="/governance/evidence-chain" className="hover:text-mplp-blue-soft transition-colors">
                            Evidence Chain
                        </Link>
                        <Link href="/compliance" className="hover:text-mplp-blue-soft transition-colors">
                            Compliance Audit
                        </Link>
                        <div className="hidden md:block h-3 w-px bg-mplp-border/50" />
                        <span className="text-mplp-text/60">Auditable Specification</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LayerRow({ label, desc, isLast }: { label: string; desc: string; isLast?: boolean }) {
    return (
        <div className={`flex gap-4 rounded-xl border border-mplp-border/50 bg-slate-950/40 px-4 py-3 transition-colors hover:border-mplp-blue-soft/30 ${!isLast && "mb-2"}`}>
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mplp-blue-soft/60" />
            <div>
                <p className="text-xs font-bold text-mplp-text uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-[11px] leading-relaxed text-mplp-text-muted/80">{desc}</p>
            </div>
        </div>
    );
}

// 2. Problem Section
function ProblemSection() {
    return (
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ScrollReveal>
                <SectionHeader
                    eyebrow="The Governance Gap"
                    title="The bottleneck is not intelligence. It is lifecycle governance."
                    description="Multi-agent systems fail not because agents are weak, but because lifecycle semantics are undefined. These failures are structural outcomes of missing protocol-level invariants."
                />
                <div className="mt-10 pt-8 border-t border-mplp-border/30">
                    <p className="text-lg font-bold text-mplp-text mb-6">
                        Frameworks scale features.<br />
                        Protocols scale ecosystems.
                    </p>
                    <Button href="/why-mplp" variant="secondary" className="border-mplp-border/50">
                        Read the Analysis →
                    </Button>
                </div>
            </ScrollReveal>
            <div className="grid gap-4 grid-cols-2">
                <ScrollReveal delay={100} className="h-full"><ProblemCard title="State Drift" desc="Agents lose intent and constraints as state transitions occur without formal invariants." /></ScrollReveal>
                <ScrollReveal delay={200} className="h-full"><ProblemCard title="Hallucination Accumulation" desc="Errors compound across agent boundaries due to missing semantic validation frames." /></ScrollReveal>
                <ScrollReveal delay={300} className="h-full"><ProblemCard title="Orchestration Collapse" desc="Coordination complexity grows exponentially without a unified lifecycle protocol." /></ScrollReveal>
                <ScrollReveal delay={400} className="h-full"><ProblemCard title="Audit Black Holes" desc="Traceability is lost when lifecycle events are not governed by a canonical standard." /></ScrollReveal>
            </div>
        </div>
    );
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    return (
        <article className="mplp-card hover:border-mplp-error/20 group bg-slate-950/40" aria-labelledby={id}>
            <h3 id={id} className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-3 group-hover:text-mplp-error transition-colors">{title}</h3>
            <p className="text-xs leading-relaxed text-mplp-text-muted/80">{desc}</p>
        </article>
    );
}

// 3. Architecture Section
function ArchitectureSection() {
    return (
        <div>
            <SectionHeader
                eyebrow="Protocol Topology"
                title="A Protocol Stack, Not a Framework Stack"
                description="MPLP sits above agent frameworks and below applications, defining the normative lifecycle semantics that every conformant system must respect."
                align="center"
                className="mx-auto mb-12"
            />
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                <ArchCard
                    layer="L1"
                    title="Core Protocol"
                    desc="Lifecycle primitives and semantic invariants."
                    color="text-mplp-blue-soft"
                    bg="bg-mplp-blue-soft/5"
                />
                <ArchCard
                    layer="L2"
                    title="Coordination"
                    desc="Governance primitives: Context, Plan, Confirm, Trace."
                    color="text-mplp-indigo"
                    bg="bg-mplp-indigo/5"
                />
                <ArchCard
                    layer="L3"
                    title="Execution"
                    desc="AEL loops, VSL logic, and Project Semantic Graph."
                    color="text-mplp-emerald"
                    bg="bg-mplp-emerald/5"
                />
                <ArchCard
                    layer="L4"
                    title="Integration"
                    desc="Models, tools, and external system adapters."
                    color="text-mplp-warning"
                    bg="bg-mplp-warning/5"
                />
            </div>
            <div className="mt-16 text-center">
                <Button href="/architecture" variant="primary" className="px-10">
                    Explore Architecture →
                </Button>
            </div>
        </div>
    );
}

function ArchCard({ layer, title, desc, color, bg }: { layer: string; title: string; desc: string; color: string; bg: string }) {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    return (
        <article className="mplp-card text-center hover:border-mplp-blue-soft/30 transition-all bg-slate-950/40 p-4 sm:p-6" aria-labelledby={id}>
            <div className={`mx-auto mb-4 sm:mb-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${bg} ${color} font-bold text-lg sm:text-xl border border-current/10`} aria-hidden="true">
                {layer}
            </div>
            <h3 id={id} className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-3">{title}</h3>
            <p className="text-xs leading-relaxed text-mplp-text-muted/80">{desc}</p>
        </article>
    );
}

import {
    IconArrowRight,
    IconBrain,
    IconCheck,
    IconCpu,
    IconMap,
    IconMask,
    IconMessage,
    IconNetwork,
    IconPlug,
    IconScroll,
    IconUsers
} from "@/components/ui/icons";

// 4. Modules Section (Reframed as Adoption)
function ModulesSection() {
    const modules = [
        { id: "context", name: "Context", gradient: "grad-cyan", icon: IconBrain, desc: "Initialize lifecycle constraints & objectives." },
        { id: "plan", name: "Plan", gradient: "grad-blue", icon: IconMap, desc: "Deterministic reasoning & orchestration intent." },
        { id: "confirm", name: "Confirm", gradient: "grad-emerald", icon: IconCheck, desc: "Governance, permissions, risk scoring." },
        { id: "trace", name: "Trace", gradient: "grad-amber", icon: IconScroll, desc: "Replayable reasoning & action audit." },
        { id: "role", name: "Role", gradient: "grad-indigo", icon: IconMask, desc: "Persona & capability definitions." },
        { id: "dialog", name: "Dialog", gradient: "grad-blue", icon: IconMessage, desc: "Structured reasoning boundaries." },
        { id: "collab", name: "Collab", gradient: "grad-cyan", icon: IconUsers, desc: "Multi-agent workflow semantics." },
        { id: "extension", name: "Extension", gradient: "grad-indigo", icon: IconPlug, desc: "Safe extensibility model." },
        { id: "core", name: "Core", gradient: "grad-slate", icon: IconCpu, desc: "Identity, invariants, protocol constants." },
        { id: "network", name: "Network", gradient: "grad-amber", icon: IconNetwork, desc: "Distributed agent communication." },
    ];

    return (
        <div>
            <ScrollReveal>
                <SectionHeader
                    eyebrow="Adopt MPLP Incrementally"
                    title="Modules are not features. They are lifecycle constraints."
                    description="MPLP is designed for gradual, low-risk adoption. Each module is not a capability — it is a lifecycle constraint. Partial adoption is safe by design."
                    align="center"
                    className="mx-auto mb-12"
                />
            </ScrollReveal>

            {/* Adoption Steps */}
            <div className="grid gap-4 sm:gap-8 grid-cols-2 md:grid-cols-3 mb-16">
                <ScrollReveal delay={100} className="h-full">
                    <AdoptionStep
                        step="1"
                        title="Start with Trace"
                        desc="Capture structured lifecycle events and decision history."
                        icon={IconScroll}
                        gradient="grad-amber"
                    />
                </ScrollReveal>
                <ScrollReveal delay={200} className="h-full">
                    <AdoptionStep
                        step="2"
                        title="Add Confirm"
                        desc="Gate critical actions with explicit confirmation and auditability."
                        icon={IconCheck}
                        gradient="grad-emerald"
                    />
                </ScrollReveal>
                <ScrollReveal delay={300} className="h-full col-span-2 md:col-span-1">
                    <AdoptionStep
                        step="3"
                        title="Introduce Plan & Context"
                        desc="Enforce structured intent, plans, and lifecycle consistency."
                        icon={IconMap}
                        gradient="grad-blue"
                    />
                </ScrollReveal>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modules.map((module, i) => (
                    <ScrollReveal key={module.id} delay={i * 50} className="h-full">
                        <Link href={`/modules/${module.id}`} className="mplp-card group relative overflow-hidden p-4 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-glow-hover block h-full">
                            <div className="mb-3 sm:mb-4 flex items-center justify-between">
                                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-mplp-dark-soft border border-mplp-border group-hover:border-mplp-blue-soft/30 transition-colors">
                                    <module.icon className="h-6 w-6 sm:h-8 sm:w-8 transition-transform group-hover:scale-110" style={{ stroke: `url(#${module.gradient})`, filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))' }} />
                                </div>
                                <Badge variant="outline" className="text-xs font-mono text-mplp-text-muted">
                                    Frozen
                                </Badge>
                            </div>
                            <h3 className="text-base sm:text-xl font-bold text-mplp-text mb-1 sm:mb-2 group-hover:text-mplp-blue-light transition-colors">
                                {module.name} Module
                            </h3>
                            <p className="text-sm text-mplp-text-muted leading-relaxed">
                                {module.desc}
                            </p>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}

function AdoptionStep({ step, title, desc, icon: Icon, gradient }: { step: string; title: string; desc: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; gradient: string }) {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    return (
        <article className="relative p-4 sm:p-6 rounded-2xl border border-mplp-border bg-slate-950/30" aria-labelledby={id}>
            <div className="absolute -top-3 -left-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-mplp-dark border border-mplp-border text-xs sm:text-sm font-bold text-mplp-text-muted" aria-hidden="true">
                {step}
            </div>
            <div className="mb-3 sm:mb-4 p-1.5 sm:p-2 w-fit rounded-lg sm:rounded-xl bg-mplp-dark-soft border border-mplp-border" aria-hidden="true">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ stroke: `url(#${gradient})` }} />
            </div>
            <h3 id={id} className="text-base sm:text-lg font-bold text-mplp-text mb-1 sm:mb-2">{title}</h3>
            <p className="text-xs sm:text-sm text-mplp-text-muted">{desc}</p>
        </article>
    );
}

// 5. Quickstart Section
// 5. Quickstart Section
function QuickstartSection() {
    return (
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
                <SectionHeader
                    eyebrow="Implementation"
                    title="Governing an agent takes minutes, not months."
                    description="MPLP is model-agnostic and framework-neutral. You can start by governing a single agent state and expand as your system grows."
                />

                <div className="mt-10 space-y-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-mplp-blue-soft/40 font-mono">01</span>
                            <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider">Install Protocol SDK</h3>
                        </div>
                        <div className="rounded-xl border border-mplp-border/50 bg-slate-950/60 p-4 font-mono text-[11px] text-mplp-text-muted">
                            npm install @mplp/sdk-ts
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-mplp-blue-soft/40 font-mono">02</span>
                            <h3 className="text-xs font-bold text-mplp-text uppercase tracking-wider">Record Lifecycle Event</h3>
                        </div>
                        <div className="rounded-xl border border-mplp-border/50 bg-slate-950/60 p-4 font-mono text-[11px] text-mplp-text-muted overflow-x-auto">
                            <pre>{`import { Trace } from "@mplp/sdk-ts";

Trace.record({
  event: "intent.created",
  detail: { description: "Generate report" }
});`}</pre>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-6">
                    <Button href="https://docs.mplp.io/docs/guides/quickstart-5min" external variant="primary">
                        5-Min Quickstart →
                    </Button>
                    <Link href="/modules" className="text-xs font-bold text-mplp-text-muted hover:text-mplp-blue-soft transition-colors uppercase tracking-widest">
                        Explore Schemas
                    </Link>
                </div>
            </ScrollReveal>

            <div className="relative">
                <div className="absolute inset-0 bg-mplp-blue-soft/5 blur-3xl -z-10" />
                <div className="mplp-card bg-slate-950/60 border-mplp-border/50 p-8">
                    <h3 className="text-sm font-bold text-mplp-text uppercase tracking-widest mb-8 border-b border-mplp-border/30 pb-4">Next Steps</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-mplp-blue-soft/40 group-hover:bg-mplp-blue-soft transition-colors" />
                            <Link href="https://docs.mplp.io/docs/guides/quickstart-5min" target="_blank" rel="noopener noreferrer" className="text-xs text-mplp-text-muted hover:text-mplp-text transition-colors leading-relaxed">
                                Read the <strong>Normative Quickstart Guide</strong> for implementation details.
                            </Link>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-mplp-blue-soft/40 group-hover:bg-mplp-blue-soft transition-colors" />
                            <Link href="/modules" className="text-xs text-mplp-text-muted hover:text-mplp-text transition-colors leading-relaxed">
                                Explore <strong>Module Schemas</strong> and semantic invariants.
                            </Link>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-mplp-blue-soft/40 group-hover:bg-mplp-blue-soft transition-colors" />
                            <Link href="/golden-flows" className="text-xs text-mplp-text-muted hover:text-mplp-text transition-colors leading-relaxed">
                                Run <strong>Golden Flows</strong> to verify protocol conformance.
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// 6. Golden Flows Section
function GoldenFlowsSection() {
    return (
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3">
                <ScrollReveal delay={100}><FlowRow id="Flow-01" title="Intent to Plan Transition" /></ScrollReveal>
                <ScrollReveal delay={200}><FlowRow id="Flow-02" title="Governed Execution" /></ScrollReveal>
                <ScrollReveal delay={300}><FlowRow id="Flow-03" title="Multi-Agent Coordination Loop" /></ScrollReveal>
                <ScrollReveal delay={400}><FlowRow id="Flow-04" title="Drift Detection & Recovery" /></ScrollReveal>
                <ScrollReveal delay={500}><FlowRow id="Flow-05" title="Runtime Integration & External I/O" /></ScrollReveal>
            </div>
            <ScrollReveal>
                <SectionHeader
                    eyebrow="Protocol Conformance"
                    title="Golden Flows: The Interoperability Standard"
                    description="Golden Flows are not examples — they are the normative conformance tests of the MPLP protocol. They ensure cross-vendor interoperability and semantic consistency."
                />
                <div className="mt-10">
                    <Button href="/golden-flows" variant="secondary" className="border-mplp-border/50">
                        View Conformance Suite →
                    </Button>
                </div>
            </ScrollReveal>
        </div>
    );
}

function FlowRow({ id, title }: { id: string; title: string }) {
    return (
        <Link href={`/golden-flows/${id.toLowerCase()}`} className="mplp-card flex items-center gap-6 py-4 transition-all hover:border-mplp-blue-soft/30 bg-slate-950/40 group">
            <span className="text-[10px] font-bold text-mplp-blue-soft uppercase tracking-widest">{id}</span>
            <div className="h-4 w-px bg-mplp-border/50" />
            <span className="text-sm font-bold text-mplp-text group-hover:text-mplp-blue-soft transition-colors">{title}</span>
        </Link>
    );
}

// 7. Ecosystem Section
function EcosystemSection() {
    return (
        <div className="text-center">
            <SectionHeader
                eyebrow="Ecosystem Topology"
                title="Built for Architects, Developers, and Auditors"
                description="MPLP provides the structural foundation for building observable and auditable agent systems. Canonical SDKs and schemas ensure rapid, safe integration."
                align="center"
                className="mx-auto mb-16"
            />

            <div className="mx-auto max-w-6xl">
                <div className="grid gap-6 md:grid-cols-3 text-left">
                    <Link
                        href="/governance/overview"
                        className="mplp-card group block p-8 hover:border-mplp-blue-soft/30 transition-all bg-slate-950/40"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-4">
                            Governance
                        </p>
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4 group-hover:text-mplp-blue-soft transition-colors">
                            Evidence Chain
                        </h3>
                        <p className="text-xs text-mplp-text-muted/80 leading-relaxed mb-6">
                            Plan → Confirm → Trace: audit-ready evidence for agent systems, aligned with ISO/IEC 42001 and NIST AI RMF.
                        </p>
                        <div className="text-[10px] font-bold text-mplp-blue-soft uppercase tracking-widest flex items-center gap-2">
                            Explore Governance <IconArrowRight className="h-3 w-3" />
                        </div>
                    </Link>

                    <Link
                        href="/ecosystem"
                        className="mplp-card group block p-8 hover:border-mplp-blue-soft/30 transition-all bg-slate-950/40"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-4">
                            Resources
                        </p>
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4 group-hover:text-mplp-blue-soft transition-colors">
                            SDKs & Schemas
                        </h3>
                        <p className="text-xs text-mplp-text-muted/80 leading-relaxed mb-6">
                            Canonical SDKs and module schemas to implement MPLP incrementally without vendor lock-in.
                        </p>
                        <div className="text-[10px] font-bold text-mplp-blue-soft uppercase tracking-widest flex items-center gap-2">
                            Explore Ecosystem <IconArrowRight className="h-3 w-3" />
                        </div>
                    </Link>

                    <Link
                        href="/governance/overview"
                        className="mplp-card group block p-8 hover:border-mplp-blue-soft/30 transition-all bg-slate-950/40"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted mb-4">
                            Evolution
                        </p>
                        <h3 className="text-sm font-bold text-mplp-text uppercase tracking-wider mb-4 group-hover:text-mplp-blue-soft transition-colors">
                            Versioning Policy
                        </h3>
                        <p className="text-xs text-mplp-text-muted/80 leading-relaxed mb-6">
                            Transparent evolution policy for the frozen v1.0.0 specification and forward-compatible extensions.
                        </p>
                        <div className="text-[10px] font-bold text-mplp-blue-soft uppercase tracking-widest flex items-center gap-2">
                            View Governance <IconArrowRight className="h-3 w-3" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6">
                <Button href="/ecosystem" variant="secondary" className="border-mplp-border/50">
                    Ecosystem Registry
                </Button>
                <Button href="/governance/overview" variant="secondary" className="border-mplp-border/50">
                    Governance Framework
                </Button>
            </div>
        </div>
    );
}



// 9. Final CTA Section
function FinalCtaSection() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-mplp-border/50 bg-slate-950/60 px-6 py-20 text-center sm:px-12">
            {/* Structural Pattern */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-mplp-text mb-6 tracking-tight">
                    Implement the Standard.
                </h2>
                <p className="text-mplp-text-muted mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                    Build agent systems that remain reliable, observable, and governable — even as models, frameworks, and vendors change.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Button href="https://docs.mplp.io" external variant="primary" size="lg" className="px-10">
                        Read Specification
                    </Button>
                    <Button href="https://github.com/Coregentis/MPLP-Protocol" external variant="secondary" size="lg" className="px-10 border-mplp-border/50">
                        GitHub Repository
                    </Button>
                </div>
                <div className="mt-12 pt-8 border-t border-mplp-border/30 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-mplp-text-muted/60">
                    <span>Protocol v1.0.0</span>
                    <span>→</span>
                    <span>Apache 2.0</span>
                    <span>→</span>
                    <span>MPGC Governed</span>
                </div>
            </div>
        </div>
    );
}
