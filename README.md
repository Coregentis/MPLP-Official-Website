# MPLP Website

This repository contains the source code for **mplp.io**, MPLP's official
**discovery and positioning** surface.

🌐 **Live**: [https://www.mplp.io](https://www.mplp.io)

---

## Purpose

The MPLP website serves as a **discovery and positioning surface**, not as:
- a product website
- a marketing site
- a certification authority

It provides:
- discovery-oriented definition and positioning
- entry paths to the repository truth source and documentation reference surface
- public-facing explanation of MPLP boundaries and ecosystem context
- standards mapping and compatibility positioning

---

## Protocol Status

| Property | Value |
|----------|-------|
| `protocol_version` | `1.0.0` |
| `website_release_version` | `1.0.0` |
| Status | FROZEN (no breaking changes permitted) |
| Governance | MPLP Protocol Governance Committee (MPGC) |
| License | Apache-2.0 |

---

## Scope Boundaries

This website intentionally:
- Does **NOT** offer compliance certification
- Does **NOT** provide product comparisons or endorsements
- Does **NOT** include jurisdiction-specific regulatory claims

All standard references follow MPLP's **Mapping / Compatibility / Enablement** model.

For details, see [Standards Compatibility & Mapping Policy](https://www.mplp.io/standards/positioning).

---

## Website Governance

This website follows the repository-wide MPLP governance baseline.

Before making semantic changes, align with:

- `../governance/README.md`
- `../governance/01-constitutional/`
- `../governance/05-versioning/VERSION-TAXONOMY-MANIFEST.md`

Legacy `website-governance/` materials remain historical residue and must not be
treated as active authority.

---

## Relationship to Other Public Surfaces

| Surface | Purpose |
|---------|---------|
| [Coregentis/MPLP-Protocol](https://github.com/Coregentis/MPLP-Protocol) | Repository truth source |
| [docs.mplp.io](https://docs.mplp.io/docs/reference/entrypoints) | Specification/reference projection |
| [lab.mplp.io](https://lab.mplp.io) | Evidence adjudication surface |
| mplp.io (this repo) | Discovery & positioning surface |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX via `next-mdx-remote`
- **Deployment**: Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Deployment

The site auto-deploys to Vercel on push to `main`.

> ⚠️ Deployment does not imply feature iteration.
> All content changes must follow the repository governance baseline and the
> active `MPLP_website/governance/` policy surfaces.

---

## Semantic Identity Statement

> This README exists to define the **semantic identity** of this repository for platforms, crawlers, and AI systems.

This is a **discovery and positioning website** for MPLP, not a product or marketing site.
The formal definition of MPLP remains:

> **MPLP is a vendor-neutral lifecycle protocol for AI agent systems.**

This website may use supporting explanatory language and the slogan **"The Agent OS Protocol"** for positioning, but protocol authority remains with the repository and documentation surfaces.

---

## License

Apache 2.0. See the [MPLP Protocol](https://github.com/Coregentis/MPLP-Protocol) for details.
