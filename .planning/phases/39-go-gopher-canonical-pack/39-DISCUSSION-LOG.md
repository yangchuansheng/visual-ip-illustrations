# Phase 39: Go Gopher Canonical Pack - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-17
**Phase:** 39-Go Gopher Canonical Pack
**Areas discussed:** Pack shape, Gopher identity, Article style, Prompt and edit contract, QA gates, Source boundary

---

## Pack Shape

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local operational pack | Create `index.md`, `style-dna.md`, `gopher-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` beside existing `source.md`, following OpenClaw/Ferris/Seal patterns. | ✓ |
| Source-only extension | Expand `source.md` with operational behavior and delay the full pack. | |
| Broad runtime integration | Change `SKILL.md` and controller behavior while creating the pack. | |

**User's choice:** Auto-selected route-local operational pack.
**Notes:** The roadmap and requirements define Phase 39 as pack-only. Runtime integration belongs to Phase 40. The existing source record remains the source/license authority.

---

## Gopher Identity

| Option | Description | Selected |
|--------|-------------|----------|
| `gopher.png` visual authority | Preserve root `gopher.png` markers: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border. | ✓ |
| Generic Go mascot | Treat Go Gopher as a flexible blue mascot with looser shape requirements. | |
| Go logo route | Use Go logo or Go-language identity as the route anchor. | |

**User's choice:** Auto-selected `gopher.png` visual authority.
**Notes:** Phase 38 locked root `gopher.png` as local visual authority. Go logo identity and official endorsement claims stay outside the route.

---

## Article Style

| Option | Description | Selected |
|--------|-------------|----------|
| Sparse 16:9 article illustration | Preserve white or very light background, black hand-drawn outlines, generous whitespace, one core idea, limited accents, and short labels in the user's requested language. | ✓ |
| Brand-poster style | Make Gopher visuals more promotional or Go-language-forward. | |
| Dense diagram style | Favor formal diagrams, charts, and annotation-heavy layouts. | |

**User's choice:** Auto-selected sparse 16:9 article illustration.
**Notes:** This follows the established route style and the Phase 39 success criteria. Prompts should remain English while visible labels are copied exactly in the user's requested language.

---

## Prompt and Edit Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Full planning and edit gates | Planning fields include Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, and Source/license note; edit prompts cover participation, identity repair, title removal, text reduction, route leakage, and unaffected-content preservation. | ✓ |
| Generation-only prompt | Create only a one-image prompt and leave planning/edit behavior to Phase 40. | |
| Minimal placeholders | Add short examples without route-specific repair prompts. | |

**User's choice:** Auto-selected full planning and edit gates.
**Notes:** Requirements PACK-02, PACK-03, and PACK-04 require planning fields, generation prompts, and edit prompts in Phase 39.

---

## QA Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local strict QA | Reject generic blue mascot drift, realistic animal drift, missing markers, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, and copied composition. | ✓ |
| Visual-only QA | Check only whether the mascot looks roughly like a Gopher. | |
| Later validation only | Delay QA details to Phase 42 validator work. | |

**User's choice:** Auto-selected route-local strict QA.
**Notes:** Phase 39 owns the QA checklist as a human/agent-facing reference. Phase 42 owns deterministic validator and Node regression expansion.

---

## Source Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Source-reviewed with explicit boundary | Every operational file points to `source.md` for Go blog source context, Renee French attribution, Creative Commons Attribution 4.0, root `gopher.png` authority, sample policy, and route status. | ✓ |
| Loose attribution | Mention Go Gopher attribution in a few files without a shared source boundary. | |
| Public sample ready | Treat generated Go Gopher samples as publishable once the pack exists. | |

**User's choice:** Auto-selected source-reviewed with explicit boundary.
**Notes:** Public generated samples remain gated by release review. Operational files should keep source/license wording route-local and grep-friendly.

---

## Agent's Discretion

- Exact Markdown section order inside the new pack files.
- Whether `source.md` receives navigation links now or stays untouched.
- Additional deterministic marker phrases for Phase 42 validation, if they remain route-local and English-default.

## Deferred Ideas

- Phase 40 controller integration and mixed-IP runtime dispatch.
- Phase 41 public docs, examples, NOTICE, release checklist, broad skill docs, and agent metadata.
- Phase 42 validator/test expansion and final release evidence.
