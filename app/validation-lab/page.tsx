import { Shell } from "@/components/layout/shell";
import { PageHeader } from "@/components/layout/page-header";
import { ContentSection } from "@/components/ui/content-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, LAB_URLS, DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { NonCertificationNotice } from "@/components/notices";
import { FlaskConical, GitBranch, Book, Globe } from "lucide-react";

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
    description: "Website discovery guide to MPLP Validation Lab, a non-normative evidence adjudication lab for MPLP. This page is pointer-oriented and does not define protocol truth.",
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
                                    Repository-backed schemas, invariants, tests, and governance records anchor protocol truth within the authoritative documentation chain.
                                </p>
                                <a href={REPO_URLS.root} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    Open Repository Sources →
                                </a>
                            </div>
                            <div className="mplp-card p-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-mplp-emerald mb-2">Reference Layer</p>
                                <h3 className="font-semibold text-mplp-text mb-2">Documentation</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    Documentation carries authoritative specification and reference projections, including entry-model guidance and Validation Lab reference pages.
                                </p>
                                <a href={DOC_REFERENCE_URLS.validationLabOverview} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">
                                    Open Docs References →
                                </a>
                            </div>
                            <div className="mplp-card p-5 border-amber-400/30">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">Adjudication Surface</p>
                                <h3 className="font-semibold text-amber-400 mb-2">Validation Lab</h3>
                                <p className="text-xs text-mplp-text-muted mb-3">
                                    The Lab public surface hosts adjudication-facing public views, rulesets, guarantees, runs, and contract surfaces.
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

            <ContentSection background="surface">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-mplp-border bg-slate-950/50 p-8">
                        <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">Boundary Summary</h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Website Discovery Only</p>
                                <p className="text-xs text-mplp-text-muted">
                                    This route exists to point you to the right surface. It does not define Lab behavior or protocol semantics.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Docs + Repo Authority</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Documentation and Repository provide the authoritative documentation chain for MPLP.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">Lab Adjudication Surface</p>
                                <p className="text-xs text-mplp-text-muted">
                                    The Lab hosts adjudication-facing public views such as rulesets, guarantees, runs, and related contract surfaces.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-400 mb-2">No Certification Claims</p>
                                <p className="text-xs text-mplp-text-muted">
                                    Neither this page nor the Lab acts as a certification authority, endorsement surface, or protocol-definition surface.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-mplp-text mb-6">Open Current Public Surfaces</h3>
                    <p className="text-sm text-mplp-text-muted mb-6">
                        Use the stable public entry that matches your need. This website page does not attempt to restate rulesets, guarantees, or generated public tails in full.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href={LAB_URLS.home} variant="primary" external>
                            Open Validation Lab
                        </Button>
                        <Button href={LAB_URLS.rulesets} variant="secondary" className="border-mplp-border/50" external>
                            Rulesets
                        </Button>
                        <Button href={LAB_URLS.contract} variant="secondary" className="border-mplp-border/50" external>
                            Contract Surface
                        </Button>
                        <Button href={DOC_REFERENCE_URLS.validationLabOverview} variant="secondary" className="border-mplp-border/50" external>
                            Docs Reference
                        </Button>
                    </div>
                </div>
            </ContentSection>

            {/* Four Entry Points */}
            <ContentSection>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-mplp-text mb-6 text-center">
                        3+1 Entry Model
                    </h3>
                    <p className="text-sm text-mplp-text-muted text-center mb-6">
                        MPLP uses a 3+1 public split: Repository and Documentation provide the authoritative documentation chain, this Website remains discovery and public framing, and Validation Lab is the adjudication surface.
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
                                <p className="text-xs text-mplp-text-muted">Specification & Reference - authoritative documentation surface for evaluation guidance and reference projections</p>
                                <a href={DOCS_URLS.home} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">docs.mplp.io →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4">
                            <GitBranch className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-mplp-text">Repository</p>
                                <p className="text-xs text-mplp-text-muted">Protocol Truth - schemas, tests, code, and governance records that anchor source truth</p>
                                <a href={REPO_URLS.root} className="text-xs text-mplp-blue-soft hover:underline" target="_blank" rel="noopener noreferrer">GitHub →</a>
                            </div>
                        </div>
                        <div className="mplp-card p-6 flex items-start gap-4 border-amber-400/30">
                            <FlaskConical className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-amber-400">Validation Lab</p>
                                <p className="text-xs text-mplp-text-muted">Evidence Adjudication - public adjudication views, guarantees, rulesets, and contract surfaces</p>
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
                                Ruleset identifiers and public ruleset views live on the Lab surface. Supporting explanations live in Docs.
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
                                Contract and pack-format references are surfaced through the Lab contract page, with supporting explanation in Docs.
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

            <ContentSection>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-mplp-text mb-4">
                        Related Resources
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/conformance" variant="secondary" className="border-mplp-border/50">
                            Conformance Guide
                        </Button>
                        <Button href="/golden-flows" variant="secondary" className="border-mplp-border/50">
                            Protocol Golden Flows
                        </Button>
                        <Button href={LAB_URLS.guarantees} variant="secondary" className="border-mplp-border/50" external>
                            Lifecycle Guarantees (Lab)
                        </Button>
                    </div>
                    <p className="text-xs text-mplp-text-muted mt-4">
                        Use these routes as pointers only, then defer to the opened surface for current detail.
                    </p>
                </div>
            </ContentSection>
        </Shell>
    );
}
