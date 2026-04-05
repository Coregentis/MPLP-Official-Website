# MPLP Website ↔ Documentation Routing Table

> [!WARNING]
> **Historical Website Routing Residue**
>
> This table is retained for provenance only.
> It must not be treated as current authority law for the website/docs/repo
> split.
> Current authority boundaries are defined by the repository governance index
> and constitutional records.

**Version**: 2.0  
**Status**: Historical Archive  
**Date**: 2025-12-27  
**Authority**: Historical website-governance line only  
**Phase**: Post Semantic Anchor Alignment  

---

## 1. Current Boundary Note (Superseding This Historical Table)

| Surface | Role | Content Type |
|:--------|:-----|:-------------|
| **mplp.io** | Discovery / Positioning | Public discovery pages and the canonical website definition anchor at `/what-is-mplp` |
| **docs.mplp.io** | Documentation / Reference | Specification and reference projections |
| **repository** | Source Truth | Schemas, tests, governance records, source artifacts |
| **lab.mplp.io** | Adjudication Surface | Public adjudication views, rulesets, guarantees, and related contract surfaces |

> **Current rule**: the website is discovery-only; `/what-is-mplp` is the canonical website definition anchor.
> **Current rule**: Documentation and Repository provide the authoritative documentation chain.
> **Current rule**: Validation Lab does not define protocol semantics; it is the adjudication surface.

---

## 2. The 7 Semantic Anchors (Frozen)

| # | Website Anchor | Docs Target | Boundary |
|:--|:---------------|:------------|:---------|
| 1 | `/architecture` | `/docs/architecture/*` | Website: overview; Docs: normative spec |
| 2 | `/modules` | `/docs/modules/*` | Website: overview; Docs: schema details |
| 3 | `/kernel-duties` | `/docs/architecture/cross-cutting-kernel-duties` | Website: summary; Docs: normative |
| 4 | `/golden-flows` | `/docs/golden-flows/*` | Website: summary; Docs: verification |
| 5 | `/governance/overview` | `/docs/governance/*` | Website: principles; Docs: policy |
| 6 | `/references` | `/docs/standards/*` | Website: context; Docs: mappings |
| 7 | `/faq` | (Website-primary) | Website: definitions; Docs: HOW_TO_EVALUATE |

---

## 3. 301 Redirects (mplp.io)

These legacy URLs now redirect to semantic anchors:

| Legacy URL | Redirects To | Status |
|:-----------|:-------------|:-------|
| `/standards/positioning` | `/references` | 301 |
| `/standards/protocol-evaluation` | `/references` | 301 |
| `/standards/regulatory-positioning` | `/references` | 301 |
| `/standards/what-mplp-is-not` | `/faq` | 301 |
| `/enterprise` | `/references` | 301 |
| `/adoption` | `/references` | 301 |
| `/governance` | `/governance/overview` | 301 |

---

## 4. Website → Docs Link Matrix

### 4.1 Homepage

| Source | Target | Link Text |
|:-------|:-------|:----------|
| Hero CTA | `https://docs.mplp.io` | "Read Documentation" |
| Quickstart | `https://docs.mplp.io/docs/guides/examples/single-agent-flow` | "Single-Agent Flow Example" |

### 4.2 Anchor Pages

| Website Page | Docs Target | Link Text Type |
|:-------------|:------------|:---------------|
| `/architecture` | `/docs/architecture/*` | "Full Specification →" |
| `/modules` | `/docs/modules/*` | "Module Specifications" |
| `/kernel-duties` | `/docs/architecture/cross-cutting-kernel-duties` | "Read Full Specification →" |
| `/golden-flows` | `/docs/golden-flows/*` | "Verification Guide" |
| `/governance/overview` | `/docs/governance/*` | "Governance Policy" |
| `/references` | `/docs/standards/*` | "Standards Mappings (Docs)" |
| `/faq` | `/docs/reference/entrypoints` | "Read Documentation →" |

---

## 5. Historical Deferral Links (Superseded)

This section is retained as provenance only. It no longer defines the current website/docs/repo split.
Current boundary: website is discovery-only, `/what-is-mplp` is the canonical website definition anchor, Documentation and Repository provide the authoritative documentation chain, and Validation Lab is the adjudication surface.

| Docs Page | Website Target | Purpose |
|:----------|:---------------|:--------|
| `intro.mdx` | `https://www.mplp.io/what-is-mplp` | Historical website definition anchor |
| `/docs/standards/*` | `https://www.mplp.io/references` | Interpretation deferral |
| `/docs/governance/*` | `https://www.mplp.io/governance/overview` | Authority deferral |
| `/docs/enterprise/*` | `https://www.mplp.io/references` | Evaluation context |

### 5.1 Broken Links to Fix

| Docs File | Current Link | Should Be |
|:----------|:-------------|:----------|
| `15-standards/nist-mapping.md` | `/standards/positioning` | `/references` |
| `15-standards/iso-mapping.md` | `/standards/positioning` | `/references` |
| `14-runtime/drift-and-rollback.md` | `/standards/positioning` | `/references` |
| `04-observability/observability-overview.md` | `/standards/positioning` | `/references` |
| `03-profiles/sa-profile.md` | `/standards/positioning` | `/references` |
| `01-architecture/l2-coordination-governance.md` | `/standards/positioning` | `/references` |
| `17-enterprise/index.mdx` | `/enterprise` | `/references` |

---

## 6. Prohibited Routes

### 6.1 Website → Docs (Prohibited)

| Website Page | Cannot Link To | Reason |
|:-------------|:---------------|:-------|
| ANY | `/docs/99-internal/*` | Internal artifacts |
| `/why-mplp` | ANY `/docs/*` | Why narratives belong to website only |

### 6.2 Docs → Website (Prohibited)

| Docs Page | Cannot Link To | Reason |
|:----------|:---------------|:-------|
| ANY | Marketing pages | Docs must not endorse |
| Specification pages | Blog/News | No temporal references |

---

## 7. Anchor Text Rules

### Allowed
- Mapping, Alignment, Enablement, Compatibility, Reference, Overview, Specification

### Prohibited
- Compliance, Certification, Meets Requirements, Official, Endorsed, Approved

---

**MPLP Website Governance**  
**2025-12-27**
