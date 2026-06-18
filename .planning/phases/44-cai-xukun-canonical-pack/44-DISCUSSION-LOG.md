# Phase 44: Cai Xukun Canonical Pack - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md. This log preserves the alternatives considered.

**Date:** 2026-06-18
**Phase:** 44-Cai Xukun Canonical Pack
**Areas discussed:** pack file set, route required references, public-figure and uploaded-image boundaries, deferred surfaces, verification architecture

---

## Pack File Set

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local canonical pack | Create `index.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` under `references/ips/caixukun/`, preserving `source.md` as authority. | yes |
| Source-only continuation | Keep only `source.md` and postpone operational references. | |
| Broad runtime integration | Create pack files and wire `SKILL.md` in the same phase. | |

**User's choice:** The user explicitly requested the Phase 44 scope to lock to route-local canonical pack files for Cai Xukun.
**Notes:** This phase follows Go Gopher's full pack shape and OpenClaw's uploaded-image authority wording.

---

## Route Required References

| Option | Description | Selected |
|--------|-------------|----------|
| Expand in Phase 44 | Update the Cai Xukun `routing.md` row after the full route-local pack exists. | yes |
| Leave source-only | Keep `required_references` limited to `source.md` until runtime integration. | |
| Defer to validator phase | Wait for Phase 47 to expand route metadata. | |

**User's choice:** The user asked to identify whether `routing.md` `required_references` should expand now.
**Notes:** Decision: expand now, because Phase 44 creates the referenced files and Phase 45 needs a complete reference list for progressive loading.

---

## Public-Figure And Uploaded-Image Boundaries

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve Phase 43 contract | Carry uploaded-image authority, stylized mascot framing, public-figure boundary, sample review policy, and green-background source context into every operational file. | yes |
| Treat as generic mascot | Use broad yellow mascot rules without public-figure or uploaded-image language. | |
| Add public release claims | Present public samples and endorsement-style copy now. | |

**User's choice:** The user explicitly requested preserving Phase 43 route/source contract and public-figure boundaries.
**Notes:** The pack must reject realistic-person output, endorsement claims, impersonation, fandom promotion, generic yellow duck drift, missing uploaded markers, green-background carryover, passive placement, and route leakage.

---

## Deferred Surfaces

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 44 narrow | Defer runtime integration, public docs/release surfaces, and validator/test hardening to Phases 45-47. | yes |
| Bundle runtime integration | Include `SKILL.md` selected-IP runtime work now. | |
| Bundle public docs and tests | Include README, NOTICE, examples, release checklist, validator, and Node tests now. | |

**User's choice:** The user explicitly deferred runtime integration to Phase 45, public docs/release surfaces to Phase 46, and validator/test hardening to Phase 47.
**Notes:** Phase 44 verification stays grep-based plus `git diff --check` and route leakage scans.

---

## Verification Architecture

| Option | Description | Selected |
|--------|-------------|----------|
| Manual deterministic checks | Grep each file/marker, verify `routing.md` expanded references, run `git diff --check`, and scan for route leakage. | yes |
| Full validator update | Extend `scripts/validate-skill-package.mjs` and Node tests now. | |
| Visual generation smoke | Generate Cai Xukun public sample images in this phase. | |

**User's choice:** The user requested verification architecture with grep, route row `required_references` expansion if chosen, `git diff --check`, and route leakage scan.
**Notes:** Phase 47 owns validator and public sample gates.

## the agent's Discretion

- Exact Markdown section ordering inside the new Cai Xukun route-local files.
- Exact text density of prompt/edit/QA templates, provided the PACK-01 through PACK-05 gates remain grep-friendly.
- Optional `source.md` wording updates for pack navigation and current-route-pack wording.

## Deferred Ideas

- Phase 45 runtime integration.
- Phase 46 public documentation and release surfaces.
- Phase 47 validator/test hardening and final release evidence.
