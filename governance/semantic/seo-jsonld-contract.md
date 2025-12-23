# MPLP SEO & JSON-LD Contract

**Version:** 1.0  
**Status:** GOVERNED  
**Authority:** MPGC  
**Derived From:** Semantic Positioning Anchors v1.0

---

## 1. Purpose

This document defines **how MPLP may be represented in structured data (JSON-LD)**.

SEO is treated as **semantic propagation**, not marketing.

All structured data MUST derive from `semantic-positioning-anchors.yaml`.

---

## 2. Facts vs Claims

| Type | Definition | Governance |
|------|------------|------------|
| **FACT** | Verifiable protocol truth | Immutable, sourced from spec |
| **CLAIM** | Identity or positioning statement | Must derive from Anchors YAML |

### 2.1 FACTS (Hard Facts)

Facts are **verifiable, governed statements** that must remain stable:

- Protocol name, version, license
- Governance model (MPGC), freeze status
- Canonical module list (10 modules)
- Golden Flows (5)
- Official URLs and repositories

**Rules:**
- Must be sourced only from controlled content
- No subjective adjectives
- Never imply compliance guarantees

### 2.2 CLAIMS (Positioning Claims)

Claims are **interpretive public semantics**:

- "Lifecycle protocol" (PRIMARY)
- "Agent OS Protocol" (PRIMARY)
- "Vendor-neutral"
- "Observable"
- "Maps to / aligns with" (relationships only)

**Rules:**
- Must be phrased with permitted relationship verbs
- Must include disclaimers where relevant
- Never imply certification or endorsement

---

## 3. Allowed schema.org Types

### Primary (Recommended)

- `Organization`
- `SoftwareSourceCode`
- `TechArticle`
- `Specification`
- `FAQPage`
- `WebSite`
- `WebPage`

### Forbidden

- `Product`
- `Service`
- `Certification`
- `Offer`
- `Review`
- `Rating`

**Violation = JSON-LD invalid.**

---

## 4. Lens-Aware JSON-LD Rules

### 4.1 T0 Surfaces (`/`, README)

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "MPLP — The Agent OS Protocol",
  "description": "MPLP is the lifecycle protocol for AI agent systems — the Agent OS Protocol that defines how agents are created, operated, audited, and decommissioned.",
  "about": [
    { "@type": "DefinedTerm", "name": "Lifecycle Protocol" },
    { "@type": "DefinedTerm", "name": "Agent OS Protocol" }
  ]
}
```

**Rules:**
- `about`, `description` MUST use **Protocol Lens**
- MUST quote INV-02 verbatim or semantically equivalent
- MUST NOT include governance-only language as primary identity

### 4.2 T2/T4 Surfaces

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How MPLP Is Evaluated",
  "description": "MPLP provides verification scenarios (Golden Flows) for evaluating runtime behavior against protocol expectations.",
  "disambiguatingDescription": "MPLP and MPGC do not certify products, endorse vendors, or provide audit opinions."
}
```

**Rules:**
- MAY include Enterprise Lens
- MUST include disclaimer in `disambiguatingDescription`

---

## 5. Mandatory Disclaimers

Required when mentioning:
- Compliance
- Regulation
- Standards
- Certification

### Standard Disclaimer Text

```text
MPLP is a protocol specification. It does not certify,
endorse, or audit implementations.
```

### Placement

- In JSON-LD: `disambiguatingDescription`
- In page copy: Visible disclaimer block

---

## 6. Forbidden Patterns

The following patterns are **prohibited** in any JSON-LD or SEO metadata:

- "MPLP is a governance framework"
- "MPLP provides compliance"
- "MPLP runtime"
- "MPLP platform"
- "MPLP certified"
- "MPLP-compliant"
- "Approved by MPGC"
- "Endorsed by"
- "Guarantees compliance"

**Violation = JSON-LD generation MUST fail.**

---

## 7. Relationship Verbs

### Allowed

- "maps to"
- "aligns with"
- "supports"
- "enables"
- "is compatible with"
- "can be evaluated via"
- "provides primitives for"
- "is informed by"

### Forbidden

- "certified by"
- "compliant with"
- "meets all requirements of"
- "approved by"
- "endorsed by"
- "regulator-approved"

---

## 8. Page-Level JSON-LD Profiles

### 8.1 Home (`/`)

**Required:**
- Type: `TechArticle` or `WebPage` with strong `about`
- Must use Protocol Lens only
- Must include INV-02 in description

### 8.2 Why MPLP (`/why-mplp`)

**Required:**
- Type: `TechArticle`
- May include differentiators as `mentions`

### 8.3 Architecture (`/architecture`)

**Required:**
- Type: `TechArticle`
- Must mention "four-layer architecture (L1–L4)"

### 8.4 Modules (`/modules`)

**Required:**
- Type: `DefinedTermSet`
- `hasPart`: List of 10 modules as `DefinedTerm`

### 8.5 Golden Flows (`/golden-flows`)

**Required:**
- Type: `TechArticle` or `DefinedTermSet`
- Must state "verification scenarios", NOT "certification"

### 8.6 Enterprise (`/enterprise`)

**Required:**
- Enterprise Lens allowed
- Must include DISC-01 disclaimer
- Must reference Protocol Lens as parent identity

### 8.7 Standards Positioning (`/standards/positioning`)

**Required:**
- Type: `TechArticle`
- Must include DISC-01

### 8.8 Protocol Evaluation (`/standards/protocol-evaluation`)

**Required:**
- Type: `TechArticle`
- Must include "evaluation framework" language
- Must include "no certification" disclaimer

### 8.9 Regulatory Positioning (`/standards/regulatory-positioning`)

**Required:**
- Type: `TechArticle`
- Must include DISC-01 and DISC-02
- Regulatory references: high-level mapping only

### 8.10 What MPLP Is NOT (`/standards/what-mplp-is-not`)

**Required:**
- Type: `TechArticle`
- Must contain INV-03 verbatim

---

## 9. Cross-Surface Consistency Rules

The following statements MUST appear across:
- mplp.io Home Hero
- docs.mplp.io introduction
- GitHub README above-the-fold

### Required Anchors

1. "protocol specification" OR "lifecycle protocol"
2. "Agent OS Protocol"
3. "not a framework/runtime/platform"
4. "Golden Flows are verification scenarios"
5. "MPGC does not certify/endorse/audit"

---

## 10. Validation Rules

JSON-LD generation MUST fail if:

1. T0 identity is altered
2. Forbidden schema types are used
3. Lens rules are violated
4. Forbidden terms are present
5. Required disclaimers are missing

---

## 11. Change Control

Any change to this contract must include:

1. Rationale (what semantic risk it mitigates)
2. Diff summary (pages affected)
3. Lint check pass evidence
4. Confirmation: no protocol obligations altered

---

## Appendix: Quick Reference

### T0 Identity (Use This)

```
MPLP is the lifecycle protocol for AI agent systems — 
the Agent OS Protocol that defines how agents are created, 
operated, audited, and decommissioned.
```

### Forbidden Identity Patterns

```
❌ "MPLP is a governance layer"
❌ "MPLP is a compliance framework"
❌ "MPLP is an agent platform"
❌ "MPLP runtime"
```