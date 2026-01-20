import React from "react";
import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, LAB_URLS, DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { NonCertificationNotice } from "@/components/notices";
import { FlaskConical, ArrowRight, ExternalLink, GitBranch, Book, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Validation Lab — MPLP",
    description: "MPLP Validation Lab: Evidence-based conformance evaluation. Non-certifying, non-normative, no execution hosting, deterministic. Your evidence + versioned ruleset = reproducible verdict.",
    alternates: {
        canonical: `${siteConfig.url}/validation-lab`,
    },
    keywords: ["MPLP", "Validation Lab", "Evidence", "Lifecycle Guarantees", "Non-certifying", "Conformance", "Deterministic"],
};

export default function ValidationLabPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "MPLP Validation Lab",
        "description": "Evidence-based conformance evaluation tools for MPLP protocol. Non-certifying, non-normative, deterministic.",
        "url": `${siteConfig.url}/validation-lab`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/validation-lab`
        },
        "isPartOf": { "@id": `${siteConfig.url}#website` }
    };

    return (
        <Shell>
            <JsonLd data={webPageSchema} />

            <PageHeader
                title="Validation Lab"
                subtitle="Evidence Verdict Gateway for MPLP Lifecycle Guarantees"
                kicker="Evidence-Based Evaluation"
            />

            {/* Non-Certification Notice */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <NonCertificationNotice />
                </div>
            </ContentSection>

            {/* Lab is Live */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-mplp-emerald/10 mb-8">
                        <FlaskConical className="h-10 w-10 text-mplp-emerald" />
                    </div>

                    <h2 className="text-3xl font-bold text-mplp-text mb-4">
                        Validation Lab is Live
                    </h2>

                    <p className="text-lg text-mplp-text-muted mb-8 max-w-xl mx-auto">
                        The Lab evaluates <strong>your evidence</strong> under <strong>versioned rulesets</strong>
                        and outputs a <strong>reproducible verdict hash</strong> + downloadable proof.
                    </p>

                    {/* I/O Model */}
                    <div className="mplp-card p-8 text-left max-w-xl mx-auto mb-8">
                        <h3 className="text-lg font-bold text-mplp-text mb-4">How It Works</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-mplp-emerald font-bold">INPUT</span>
                                <span className="text-mplp-text-muted">Evidence Pack (generated in your environment)</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-mplp-blue-soft font-bold">EVAL</span>
                                <span className="text-mplp-text-muted">Versioned Ruleset (deterministic evaluation)</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-amber-400 font-bold">OUTPUT</span>
                                <span className="text-mplp-text-muted">Verdict Hash + Proof JSON + Curated Adjudication Links</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-mplp-text-muted font-medium">
                            <strong>Determinism Guarantee:</strong> Same evidence + same ruleset = same verdict hash.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href={LAB_URLS.home} variant="primary" external>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Validation Lab
                        </Button>
                        <Button href={LAB_URLS.contract} variant="secondary" className="border-mplp-border/50" external>
                            Evidence Pack Contract
                        </Button>
                        <Button href={LAB_URLS.strength} variant="secondary" className="border-mplp-border/50" external>
                            Ruleset Strength Policy
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Four Boundaries */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-8">
                        <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                            Four Boundaries (Non-Negotiable)
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Non-Certifying</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Verdicts are evidence-based outputs, not official marks or endorsements.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Non-Normative</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Lab does not define protocol semantics. See MPLP Docs for specifications.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">No Execution Hosting</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Lab does not accept uploads or run your code. You generate evidence locally.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Deterministic Ruleset</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Same evidence + same ruleset version = same verdict hash. Always reproducible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Inside the Lab - Discovery Preview */}
            <ContentSection background="surface">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-4 text-center">
                        Inside the Lab
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-8">
                        In the Lab you will find three primary views — <strong>coverage</strong>, <strong>runs</strong>, and <strong>adjudication</strong> — each designed for reproducible, evidence-based review.
                    </p>

                    {/* 4-Step Lifecycle Flow */}
                    <div className="grid gap-4 md:grid-cols-4 mb-10">
                        <div className="mplp-card p-4 text-center">
                            <div className="text-xs font-bold text-mplp-blue-soft mb-2">Step 1</div>
                            <p className="text-sm font-semibold text-mplp-text mb-1">Generate Evidence Pack</p>
                            <p className="text-xs text-mplp-text-muted">Run your agent locally and produce an MPLP-compatible evidence pack (via SDK or producer tooling).</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <div className="text-xs font-bold text-mplp-blue-soft mb-2">Step 2</div>
                            <p className="text-sm font-semibold text-mplp-text mb-1">Verify Pack Integrity</p>
                            <p className="text-xs text-mplp-text-muted">Validate manifest + hashes before sharing or archiving the pack.</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <div className="text-xs font-bold text-mplp-blue-soft mb-2">Step 3</div>
                            <p className="text-sm font-semibold text-mplp-text mb-1">Read Adjudications</p>
                            <p className="text-xs text-mplp-text-muted">Browse published runs and verdicts already curated in the Lab.</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <div className="text-xs font-bold text-mplp-blue-soft mb-2">Step 4</div>
                            <p className="text-sm font-semibold text-mplp-text mb-1">Recheck Deterministically</p>
                            <p className="text-xs text-mplp-text-muted">Use ruleset version + evidence pack to independently verify any <code className="text-mplp-blue-soft">verdict_hash</code>.</p>
                        </div>
                    </div>

                    {/* 3 Preview Cards */}
                    <div className="grid gap-4 md:grid-cols-3 mb-8">
                        {/* Coverage Card */}
                        <div className="mplp-card p-6 flex flex-col">
                            <h4 className="font-semibold text-mplp-text mb-2">Coverage</h4>
                            <p className="text-xs text-mplp-text-muted mb-4 flex-grow">
                                Framework coverage status by lifecycle guarantee. Coverage reflects <strong>evidence maturity</strong>, not framework quality.
                            </p>
                            <a
                                href={LAB_URLS.coverage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold text-mplp-blue-soft hover:underline mb-2"
                            >
                                Browse Coverage →
                            </a>
                            <p className="text-[10px] text-mplp-text-muted/60 italic">Live counts and verdict details are shown in the Lab.</p>
                        </div>

                        {/* Curated Runs Card */}
                        <div className="mplp-card p-6 flex flex-col">
                            <h4 className="font-semibold text-mplp-text mb-2">Curated Runs</h4>
                            <p className="text-xs text-mplp-text-muted mb-4 flex-grow">
                                Published adjudication runs with evidence references and deterministic <code className="text-mplp-blue-soft">verdict_hash</code> outputs.
                            </p>
                            <a
                                href={LAB_URLS.runs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold text-mplp-blue-soft hover:underline mb-2"
                            >
                                View Runs →
                            </a>
                            <p className="text-[10px] text-mplp-text-muted/60 italic">Live counts and verdict details are shown in the Lab.</p>
                        </div>

                        {/* Adjudication Card */}
                        <div className="mplp-card p-6 flex flex-col">
                            <h4 className="font-semibold text-mplp-text mb-2">Adjudication</h4>
                            <p className="text-xs text-mplp-text-muted mb-4 flex-grow">
                                Reviewable proof packages with verdict hash, ruleset version, and evidence pack references.
                            </p>
                            <a
                                href={LAB_URLS.adjudication}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold text-mplp-blue-soft hover:underline mb-2"
                            >
                                Open Adjudication →
                            </a>
                            <p className="text-[10px] text-mplp-text-muted/60 italic">Live counts and verdict details are shown in the Lab.</p>
                        </div>
                    </div>

                    {/* Coverage Disclaimer */}
                    <div className="text-center px-4 py-3 rounded-xl border border-mplp-border/40 bg-mplp-dark-soft/20">
                        <p className="text-xs text-mplp-text-muted">
                            <strong>Coverage indicates evidence maturity, not framework quality, endorsement, or ranking.</strong>
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* Version Taxonomy */}
            <ContentSection background="surface">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        Version Taxonomy
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-6">
                        Validation Lab uses four distinct version prefixes. Do not confuse them.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="mplp-card p-4 text-center">
                            <code className="text-mplp-blue-soft font-mono text-sm">site-v*</code>
                            <p className="text-xs text-mplp-text-muted mt-2">Site Freeze</p>
                            <p className="text-xs text-mplp-text-muted/70">Website IA & commitment</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <code className="text-mplp-emerald font-mono text-sm">pack-v*</code>
                            <p className="text-xs text-mplp-text-muted mt-2">Evidence Pack Format</p>
                            <p className="text-xs text-mplp-text-muted/70">Pack structure version</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <code className="text-amber-400 font-mono text-sm">ruleset-*</code>
                            <p className="text-xs text-mplp-text-muted mt-2">Ruleset Version</p>
                            <p className="text-xs text-mplp-text-muted/70">Adjudication rules</p>
                        </div>
                        <div className="mplp-card p-4 text-center">
                            <code className="text-purple-400 font-mono text-sm">rel-lab-*</code>
                            <p className="text-xs text-mplp-text-muted mt-2">Release Seal</p>
                            <p className="text-xs text-mplp-text-muted/70">Governance freeze tag</p>
                        </div>
                    </div>
                    <p className="text-xs text-mplp-text-muted text-center mt-4">
                        Authoritative definitions: <a href={LAB_URLS.home} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Validation Lab →</a>
                    </p>
                </div>
            </ContentSection>

            {/* Four Entry Points */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        Four Entry Points
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-6">
                        MPLP uses a four-entry model. Each surface has a strict, non-overlapping role.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <Globe className="h-6 w-6 text-mplp-blue-soft flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Website</p>
                                <p className="text-xs text-mplp-text-muted">Discovery & Positioning — what MPLP is and why</p>
                                <Link href="/" className="text-xs text-mplp-blue-soft hover:underline">mplp.io →</Link>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <Book className="h-6 w-6 text-mplp-emerald flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Documentation</p>
                                <p className="text-xs text-mplp-text-muted">Specification & Reference — how it works</p>
                                <a href={DOCS_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">docs.mplp.io →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <GitBranch className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Repository</p>
                                <p className="text-xs text-mplp-text-muted">Source of Truth — schemas, tests, code, governance</p>
                                <a href={REPO_URLS.root} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">GitHub →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4 border-amber-400/30">
                            <FlaskConical className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-amber-400">Validation Lab</p>
                                <p className="text-xs text-mplp-text-muted">Evidence Adjudication — verdicts & reviewable proofs</p>
                                <a href={LAB_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">lab.mplp.io →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Rulesets & Contracts (Pointers Only) */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        Rulesets & Contracts
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-6">
                        The Lab uses versioned rulesets and evidence pack contracts. Authoritative definitions are governed in the Validation Lab repository.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="mplp-card p-6">
                            <h4 className="font-semibold text-mplp-text mb-2">Versioned Rulesets</h4>
                            <p className="text-xs text-mplp-text-muted mb-4">
                                Deterministic evaluation rules (<code className="text-mplp-blue-soft">ruleset-*</code>). Same evidence + same ruleset = same verdict.
                            </p>
                            <a href={LAB_URLS.rulesets} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                View Rulesets in Lab →
                            </a>
                        </div>
                        <div className="mplp-card p-6">
                            <h4 className="font-semibold text-mplp-text mb-2">Evidence Pack Contract</h4>
                            <p className="text-xs text-mplp-text-muted mb-4">
                                Pack structure and format versioning (<code className="text-mplp-blue-soft">pack-v*</code>). Portable, recheckable, auditable.
                            </p>
                            <a href={LAB_URLS.contract} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                View Contract Policy →
                            </a>
                        </div>
                    </div>
                    <p className="text-xs text-mplp-text-muted text-center mt-4">
                        Reference documentation: <a href="https://docs.mplp.io/docs/evaluation/validation-lab" className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Validation Lab Reference (Docs) →</a>
                    </p>
                </div>
            </ContentSection>

            {/* Evaluation Entry Split */}
            <ContentSection background="surface">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        Evaluation Entry Points
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3 text-center">
                        <div className="mplp-card p-4">
                            <p className="font-semibold text-mplp-text mb-2">Protocol Scenarios</p>
                            <p className="text-xs text-mplp-text-muted mb-2">Golden Flows (Flow-01~05)</p>
                            <Link href="/golden-flows" className="text-xs text-mplp-blue-soft hover:underline">Website / Docs →</Link>
                        </div>
                        <div className="mplp-card p-4 border-amber-400/30">
                            <p className="font-semibold text-amber-400 mb-2">Evidence Adjudication</p>
                            <p className="text-xs text-mplp-text-muted mb-2">Lifecycle Guarantees (LG-01~05)</p>
                            <a href={LAB_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Validation Lab →</a>
                        </div>
                        <div className="mplp-card p-4">
                            <p className="font-semibold text-mplp-text mb-2">Contracts & Reference</p>
                            <p className="text-xs text-mplp-text-muted mb-2">Pack formats, rulesets, schemas</p>
                            <a href="https://docs.mplp.io/docs/evaluation/validation-lab" className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Documentation →</a>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Quick Links */}
            <ContentSection>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-mplp-text mb-4">
                        Related Resources
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/golden-flows" variant="secondary" className="border-mplp-border/50">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Protocol Golden Flows
                        </Button>
                        <Button href="/conformance" variant="secondary" className="border-mplp-border/50">
                            Conformance Model
                        </Button>
                        <Button href={LAB_URLS.guarantees} variant="secondary" className="border-mplp-border/50" external>
                            Lifecycle Guarantees (Lab)
                        </Button>
                    </div>
                </div>
            </ContentSection>
        </Shell>
    );
}

