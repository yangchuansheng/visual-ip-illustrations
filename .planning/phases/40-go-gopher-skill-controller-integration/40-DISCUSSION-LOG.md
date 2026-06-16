# Phase 40: Go Gopher Skill Controller Integration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-06-16
**Phase:** 40-Go Gopher Skill Controller Integration
**Areas discussed:** Controller route activation, Progressive loading truth, Mixed-IP isolation, Save and delivery contract, Acceptance proof

---

## First-Principles Starting Point

Original need: make the already-defined Go Gopher route usable through the runtime skill controller. Phase 38 locked route/source truth. Phase 39 locked the route-local operational pack. Phase 40 must connect those decisions to actual user invocation behavior inside the skill entrypoint.

Core constraints:

- Xiaohei remains the omitted visual-IP default.
- Go Gopher remains explicit with `default=false`.
- Existing Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw runtime behavior stays stable.
- Go Gopher route behavior uses root `gopher.png` as local visual authority.
- Go Gopher output path stays `assets/<article-slug>-gopher/`.
- Public documentation, release surfaces, and validation hardening belong to later phases.
- Root `gopher.png` stays untracked.

Autonomous interaction choice: selected all meaningful gray areas because the orchestrator asked for autonomous decisions during this GSD subagent flow.

---

## Controller Route Activation

| Option | Description | Selected |
|--------|-------------|----------|
| Mirror OpenClaw controller parity | Add Go Gopher everywhere OpenClaw/Seal/Ferris/Tom already have route-specific runtime surface in `SKILL.md`. | yes |
| Minimal route mention only | Add a compact route overview entry while relying on `routing.md` for detailed behavior. |  |
| Broad public-surface update | Update README, examples, NOTICE, release checklist, and metadata together. |  |

**User's choice:** Agent selected OpenClaw controller parity.
**Notes:** Phase 35 is the strongest controller precedent. Phase 41 owns public docs and broad discovery surfaces. The route controller needs enough `SKILL.md` text to make selection, planning, generation, QA, repair, save, and delivery true at runtime.

---

## Progressive Loading Truth

| Option | Description | Selected |
|--------|-------------|----------|
| Expand Go Gopher `required_references` to the full pack | Update `references/routing.md` so selected Go Gopher loads all Phase 39 references. | yes |
| Keep source-only routing until Phase 42 | Preserve Phase 38 source-only route row and let `SKILL.md` list the pack separately. |  |
| Move route references to a new manifest | Create a new machine-readable manifest for route references. |  |

**User's choice:** Agent selected full-pack `required_references` expansion.
**Notes:** Runtime behavior says the controller loads selected route `required_references`. After Phase 39, a source-only Go Gopher row would under-load style, identity, composition, prompt, edit, and QA references. Manifest generation is a future requirement.

---

## Mixed-IP Isolation

| Option | Description | Selected |
|--------|-------------|----------|
| Separate Go Gopher route group | Add Go Gopher as its own mixed-IP group with `references/ips/gopher/`, output suffix `gopher`, QA, edit gates, and delivery block. | yes |
| Shared source-reviewed mascot group | Treat Go Gopher and OpenClaw as a shared source-reviewed mascot family during mixed-IP generation. |  |
| Solo-only integration first | Enable solo Go Gopher while deferring mixed-IP groups. |  |

**User's choice:** Agent selected separate Go Gopher route group.
**Notes:** Existing architecture uses route-local isolation. Go Gopher has distinct `gopher.png` markers, source/license boundary, Go logo boundary, and official endorsement boundary, so it needs its own route group in mixed-IP planning and generation.

---

## Save and Delivery Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Full delivery parity | Add active path, suffix mapping, escaped marker, mixed-IP path, delivery block, and leakage guard for Go Gopher. | yes |
| Path-only update | Add `assets/<article-slug>-gopher/` to save paths and rely on route references for the rest. |  |
| Delivery-only update | Add report fields while leaving save-path tables for Phase 41. |  |

**User's choice:** Agent selected full delivery parity.
**Notes:** Phase 40 success criteria require delivery reports with selected visual IP, image count, purpose per image, saved path, and route stability notes. The delivery guard also needs Go Gopher source/license and route-isolation status.

---

## Acceptance Proof

| Option | Description | Selected |
|--------|-------------|----------|
| Targeted controller proof | Use `rg` checks over `SKILL.md`/`routing.md`, route-table inspection, and `git diff --check`. | yes |
| Full validator and Node green gate | Require `node scripts/validate-skill-package.mjs` and Node tests to pass during Phase 40. |  |
| Manual read-through only | Review changed text manually and defer all commands. |  |

**User's choice:** Agent selected targeted controller proof.
**Notes:** Phase 38 and Phase 39 verification already record current validator and Node failures as Phase 42 ownership for seventh-route baseline expansion. Phase 40 should run local checks that prove controller behavior while preserving Phase 42 validation ownership.

---

## Locked Decisions

- Phase 40 implementation should touch `SKILL.md` and `references/routing.md`.
- `references/routing.md` should list the full Go Gopher pack in `required_references`.
- Go Gopher must appear in `SKILL.md` route overview, reference loading, selection, shot-list planning, mixed-IP groups, generation, QA, repair, save, delivery, and route-leakage guard surfaces.
- `agents/openai.yaml`, README variants, prompt examples, NOTICE, release checklist, validator, and Node tests stay under later phase ownership.
- Local checks should prove controller text and route-reference parity; full validator/Node parity is Phase 42 work.

## Agent Discretion

- Exact `SKILL.md` paragraph placement can follow the existing OpenClaw/Seal route order.
- Go Gopher wording can stay compact if all runtime surfaces are covered.
- Running current validator/Node commands is useful as deferred-baseline evidence, with expected failures recorded for Phase 42.

## Deferred Ideas

- Machine-readable route manifest generation.
- Source image hashing or relocation for root `gopher.png`.
- Public Go Gopher generated sample gallery after release review.
- Automated visual regression checks for route identity markers.
