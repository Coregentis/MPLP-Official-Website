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

/**
 * Website Validation Lab page source model:
 * - actual source: this Website page implementation plus stable outbound link constants
 * - upstream provenance: constitutional entry-model sources, verified Docs references,
 *   and verified Validation Lab public surfaces
 * - role: discovery / pointer-oriented aggregate page only
 *
 * This page must not present itself as protocol truth, Docs reference truth,
 * or Validation Lab adjudication authority.
 */

export const metadata: Metadata = {
    title: "Validation Lab — MPLP",
    description: "Website discovery guide to MPLP Validation Lab surfaces, Docs references, and repository truth boundaries. Non-certifying, non-normative, and pointer-oriented.",
    alternates: {
        canonical: `${siteConfig.url}/validation-lab`,
    },
    keywords: ["MPLP", "Validation Lab", "Evidence", "Lifecycle Guarantees", "Non-certifying", "Conformance", "Deterministic"],
};

const CONSTITUTIONAL_URLS = {
    entryModel: `${REPO_URLS.root}/blob/main/governance/01-constitutional/CONST-001_ENTRY_MODEL_SPEC.md`,
    documentFormat: `${REPO_URLS.root}/blob/main/governance/01-constitutional/CONST-002_DOCUMENT_FORMAT_SPEC.md`,
} as const;

const DOC_REFERENCE_URLS = {
    validationLabOverview: `${DOCS_URLS.home}/docs/evaluation/validation-lab`,
    validationLabRulesets: `${DOCS_URLS.home}/docs/evaluation/validation-lab/rulesets`,
    validationLabContract: `${DOCS_URLS.home}/docs/evaluation/validation-lab/evidence-pack-contract`,
    entrypoints: `${DOCS_URLS.home}/docs/reference/entrypoints`,
    evaluationGuide: `${DOCS_URLS.home}/docs/guides/evaluation-guide`,
} as const;

export default function ValidationLabPage() {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "MPLP Validation Lab",
        "description": "Website discovery guide to MPLP Validation Lab entry points, Docs references, and repository truth boundaries.",
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
                subtitle="Website discovery guide to MPLP's evidence adjudication surface"
                kicker="Discovery / Pointer Surface"
            />

            {/* Non-Certification Notice */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <NonCertificationNotice />
                </div>
            </ContentSection>

            {/* Website Source Model */}
            <ContentSection>
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-mplp-dark-soft/30 p-8">
                        <h2 className="text-2xl font-bold text-mplp-text mb-4 text-center">
                            How to Read This Page
                        </h2>
                        <p className="text-sm text-mplp-text-muted text-center max-w-3xl mx-auto mb-8">
                            This Website route is a discovery and pointer page. Its actual runtime source is this page implementation plus stable outbound links.
                            It helps you navigate the right MPLP surface; it does not replace repository protocol truth, Documentation references, or Validation Lab adjudication outputs.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-8">
                            <div className="mplp-card p-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mplp-blue-soft mb-2">Actual Source</p>
                                <h3 className="font-semibold text-mplp-text mb-2">Website Page Implementation</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    The content you see here is maintained in this Website page and linked through stable Website config pointers.
                                </p>
                                <p className="text-[11px] text-mplp-text-muted/80">
                                    Role: discovery, orientation, and outbound navigation only.
                                </p>
                            </div>
                            <div className="mplp-card p-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400 mb-2">Protocol Truth</p>
                                <h3 className="font-semibold text-mplp-text mb-2">Repository</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    Repository-backed schemas, invariants, tests, and governance records remain authoritative for protocol truth.
                                </p>
                                <a href={REPO_URLS.root} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    Open Repository Sources →
                                </a>
                            </div>
                            <div className="mplp-card p-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mplp-emerald mb-2">Reference Layer</p>
                                <h3 className="font-semibold text-mplp-text mb-2">Documentation</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    Documentation carries specification and reference projections, including constitutional entry-model guidance and Validation Lab reference pages.
                                </p>
                                <a href={DOC_REFERENCE_URLS.validationLabOverview} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    Open Docs References →
                                </a>
                            </div>
                            <div className="mplp-card p-5 border-amber-400/30">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">Adjudication Surface</p>
                                <h3 className="font-semibold text-amber-400 mb-2">Validation Lab</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    The Lab public surface hosts evidence adjudication views, ruleset-governed outputs, runs, guarantees, and public contract surfaces.
                                </p>
                                <a href={LAB_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    Open Validation Lab →
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-xl border border-mplp-border/40 bg-black/20 p-5">
                                <p className="text-xs font-semibold text-mplp-text mb-3">Constitutional / Governance Anchors</p>
                                <ul className="space-y-2 text-xs text-mplp-text-muted">
                                    <li>
                                        <a href={CONSTITUTIONAL_URLS.entryModel} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            CONST-001 Entry Model Spec
                                        </a>
                                    </li>
                                    <li>
                                        <a href={CONSTITUTIONAL_URLS.documentFormat} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            CONST-002 Document Format Spec
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-mplp-border/40 bg-black/20 p-5">
                                <p className="text-xs font-semibold text-mplp-text mb-3">Verified Docs References</p>
                                <ul className="space-y-2 text-xs text-mplp-text-muted">
                                    <li>
                                        <a href={DOC_REFERENCE_URLS.entrypoints} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Entry Points
                                        </a>
                                    </li>
                                    <li>
                                        <a href={DOC_REFERENCE_URLS.evaluationGuide} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Evaluation Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a href={DOC_REFERENCE_URLS.validationLabOverview} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Validation Lab Overview
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-mplp-border/40 bg-black/20 p-5">
                                <p className="text-xs font-semibold text-mplp-text mb-3">Verified Lab Public Surfaces</p>
                                <ul className="space-y-2 text-xs text-mplp-text-muted">
                                    <li>
                                        <a href={LAB_URLS.home} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Lab Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.runs} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Runs
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.adjudication} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Adjudication
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.guarantees} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Guarantees
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.rulesets} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Rulesets
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.contract} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Export Contract
                                        </a>
                                    </li>
                                    <li>
                                        <a href={LAB_URLS.strength} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                            Strength Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-[11px] text-mplp-text-muted text-center mt-6">
                            If this discovery page and an upstream surface disagree, follow the upstream surface within its valid authority scope.
                        </p>
                    </div>
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
                            <p className="text-xs text-mplp-text-muted mt-2">Site Seal</p>
                            <p className="text-xs text-mplp-text-muted/70">Validation Lab website release line</p>
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
                            <p className="text-xs text-mplp-text-muted/70">Governance seal tag</p>
                        </div>
                    </div>
                    <p className="text-xs text-mplp-text-muted text-center mt-4">
                        This Website section is a summary only: repository-backed assets govern protocol truth, Docs explain the model, and the Lab surfaces the adjudication-facing versions and outputs. <a href={LAB_URLS.home} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">View Lab →</a>
                    </p>
                </div>
            </ContentSection>

            {/* Four Entry Points */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        3+1 Entry Model
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-6">
                        MPLP uses a 3+1 constitutional entry model: Repository, Documentation, and Website are primary surfaces; Validation Lab is the auxiliary public adjudication surface. Repository is the source of protocol truth, Documentation is the reference layer, the Lab is the evidence adjudication layer, and this Website remains discovery and public framing.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <Globe className="h-6 w-6 text-mplp-blue-soft flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Website</p>
                                <p className="text-xs text-mplp-text-muted">Discovery & Positioning - what MPLP is, where to start, and which surface to open next</p>
                                <Link href="/" className="text-xs text-mplp-blue-soft hover:underline">mplp.io →</Link>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <Book className="h-6 w-6 text-mplp-emerald flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Documentation</p>
                                <p className="text-xs text-mplp-text-muted">Specification & Reference - constitutional entry model, evaluation guidance, and reference projections</p>
                                <a href={DOCS_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">docs.mplp.io →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <GitBranch className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Repository</p>
                                <p className="text-xs text-mplp-text-muted">Protocol Truth - schemas, tests, code, and governance records</p>
                                <a href={REPO_URLS.root} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">GitHub →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4 border-amber-400/30">
                            <FlaskConical className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-amber-400">Validation Lab</p>
                                <p className="text-xs text-mplp-text-muted">Evidence Adjudication - ruleset-governed runs, reviewable proofs, guarantees, and public contract surfaces</p>
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
                        This Website page does not define rulesets or pack contracts. It points you to the Lab public surfaces where those objects are exposed and to Docs reference pages that explain their roles.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="mplp-card p-6">
                            <h4 className="font-semibold text-mplp-text mb-2">Versioned Rulesets</h4>
                            <p className="text-xs text-mplp-text-muted mb-4">
                                Deterministic evaluation rules (<code className="text-mplp-blue-soft">ruleset-*</code>) live on the Lab surface. Reference explanations live in Docs.
                            </p>
                            <p className="text-xs text-mplp-text-muted mb-2">
                                Same evidence plus the same ruleset version should produce the same verdict hash. Website only summarizes that model.
                            </p>
                            <div className="flex flex-col gap-2 text-xs">
                                <a href={LAB_URLS.rulesets} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    View Rulesets in Lab →
                                </a>
                                <a href={DOC_REFERENCE_URLS.validationLabRulesets} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    View Ruleset Reference in Docs →
                                </a>
                            </div>
                        </div>
                        <div className="mplp-card p-6">
                            <h4 className="font-semibold text-mplp-text mb-2">Evidence Pack Contract</h4>
                            <p className="text-xs text-mplp-text-muted mb-4">
                                Pack structure and format versioning (<code className="text-mplp-blue-soft">pack-v*</code>) are surfaced through the Lab contract page, with supporting reference explanation in Docs.
                            </p>
                            <div className="flex flex-col gap-2 text-xs">
                                <a href={LAB_URLS.contract} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    View Contract Policy in Lab →
                                </a>
                                <a href={DOC_REFERENCE_URLS.validationLabContract} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    View Contract Reference in Docs →
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-mplp-text-muted text-center mt-4">
                        Reference documentation: <a href={DOC_REFERENCE_URLS.validationLabOverview} className="text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Validation Lab Reference (Docs) →</a>
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
                            <a href={`${DOCS_URLS.home}/docs/evaluation/validation-lab`} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">Documentation →</a>
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
