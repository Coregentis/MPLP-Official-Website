---
wrapperClassName: governance-page
---

# Website Semantic Governance Charter

**Version:** 1.0  
**Status:** ACTIVE GOVERNANCE  
**Authority:** MPLP Protocol Governance Committee (MPGC)  
**Scope:** mplp.io / docs.mplp.io / GitHub README  
**Effective Date:** 2025-12-23

---

## 1. Purpose

This charter governs **how semantic meaning is created, propagated, and constrained** across MPLP public surfaces.

The website is NOT a marketing asset.  
The website IS the project's **Public Semantic Interface**.

---

## 2. Binding Authority

This charter is subordinate to:

1. **MPLP Protocol Specification v1.0.0** (Frozen)
2. **MPLP Positioning & Semantic Charter v1.0** (Frozen)
3. **Semantic Positioning Anchors v1.0** (SSOT)

No page, component, or AI-generated content may contradict these authorities.

---

## 3. Core Semantic Verdict

> **"Lifecycle Protocol" is the PRIMARY identity.**  
> **"Governance Layer" is a CORE ATTRIBUTE, not the identity.**

This verdict is **immutable** without MPGC approval.

---

## 4. Tier Hierarchy

| Tier | Name | Purpose | Modification Authority |
|------|------|---------|------------------------|
| **T0** | Semantic Constitution | What MPLP can/cannot say | MPGC only |
| **T1** | Canonical Protocol Surface | Protocol facts | Frozen with spec |
| **T2** | Evaluation Surface | How to assess MPLP | Content team |
| **T3** | Evidence Surface | Proof and signals | Content team |
| **T4** | Positioning/Policy | External relationships | Content + review |

---

## 5. Governance Rules

### 5.1 Identity Governance

- No page may define MPLP identity independently
- All identity language MUST reference T0 anchors
- T4 pages MAY explain, but MUST NOT redefine

### 5.2 Lens Governance

- **Protocol Lens**: T0 surfaces only (primary identity)
- **Enterprise Lens**: T2/T4 surfaces (evaluation path)
- **Builder Lens**: T1/Docs (compatibility narrative)

### 5.3 Forbidden Actions

- Mixing Protocol Lens with Enterprise/Builder language on T0
- Using "governance layer" as primary identity
- Implying certification, endorsement, or compliance guarantee
- Creating new identity claims without MPGC approval

---

## 6. AI Content Rules

All AI-assisted content generation MUST:

1. Be linted against `semantic-positioning-anchors.yaml`
2. Not introduce new identity statements
3. Not rephrase T0 invariant claims
4. Fail generation if T0 constraints are violated

AI violating T0 constraints is considered **defective output**.

---

## 7. SEO & JSON-LD Governance

All structured data is governed by `seo-jsonld-contract.md`.

Key rules:
- JSON-LD `about` and `description` must derive from T0
- Forbidden schema.org types: Product, Service, Certification
- Forbidden terms trigger generation failure

---

## 8. Cross-Surface Consistency

The following MUST be consistent across:
- mplp.io
- docs.mplp.io
- GitHub README

### Required Anchors (Semantic Consistency)

1. "Lifecycle protocol" or "protocol specification"
2. "Agent OS Protocol"
3. "Not a framework/runtime/platform"
4. "Golden Flows are verification scenarios"
5. "MPGC does not certify/endorse/audit"

---

## 9. Change Control

### 9.1 What Requires MPGC Approval

- Any change to T0 identity
- Any change to invariant claims (INV-01 through INV-05)
- Any change to lens definitions
- Adding new T0 surfaces

### 9.2 What Content Team May Change

- T2/T3/T4 page content (within lens rules)
- Educational content (T2)
- Evidence and adoption signals (T3)

### 9.3 Change Process

1. Identify tier and lens of affected content
2. If T0: Submit to MPGC for review
3. If T1-T4: Verify against Semantic Anchors
4. Run lint checks
5. Document in change log

---

## 10. Enforcement

### 10.1 Pre-Merge Checks

- Semantic lint against anchors YAML
- Forbidden term scan
- JSON-LD validation
- Link direction validation

### 10.2 Violation Consequences

| Violation | Consequence |
|-----------|-------------|
| T0 redefinition | PR blocked |
| Forbidden terms | Build fails |
| Lens violation | Page marked invalid |
| AI drift | Output rejected |

---

## 11. Version History

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2025-12-23 | Initial charter (derived from Implementation Plan v1.0) |

---

## Appendix: Quick Reference Card

### ✅ Always Use (T0 Identity)

```
MPLP is the lifecycle protocol for AI agent systems —
the Agent OS Protocol.
```

### ❌ Never Use as Primary Identity

```
MPLP is a governance layer
MPLP is a compliance framework
MPLP is an agent platform
```

### 📋 Mandatory Disclaimer (T2/T4)

```
MPLP and MPGC do not certify products, endorse vendors,
or provide audit opinions.
```