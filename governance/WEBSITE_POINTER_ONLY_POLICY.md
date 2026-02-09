---
entry_surface: website
doc_type: governance
status: active
authority: protocol_governance
protocol_version: "1.0.0"
doc_id: "WEB-GOV-001"
---

# Website Pointer-Only Policy

> **Authority**: MPLP Protocol Governance  
> **Effective Date**: 2026-01-23

---

## 1. Core Principle

The official website (`mplp.io`) is a **projection pointer**, NOT a truth source or a data mirror for the Validation Lab. It must strictly adhere to the "Pointer-Only" boundary to prevent semantic drift and over-indexing of non-normative data.

---

## 2. Hard Rules

1. **No Data Mirroring**:
   - ❌ DO NOT list specific substrate names (e.g., LangGraph, AutoGen) except in the context of "supported by Lab".
   - ❌ DO NOT list coverage percentages or run counts.
   - ❌ DO NOT embed live results or matrices from the Lab.

2. **Forbidden Terms (Claims)**:
   - ❌ "Certified", "Compliant", "Endorsed", "Ranked".
   - ❌ "PASS", "FAIL" in the context of specific substrate status.

3. **Allowed Content**:
   - ✅ Direct links to `lab.mplp.io`.
   - ✅ Standard non-endorsement boundary statements.
   - ✅ High-level methodology overview (narrative only).

---

## 3. Enforcement

This policy is enforced via `gate:website-pointer-only` in the CI pipeline. Any PR containing forbidden data or terms will be blocked.
