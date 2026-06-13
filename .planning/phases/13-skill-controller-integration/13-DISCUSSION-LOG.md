# Phase 13: Skill Controller Integration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-13T16:57:31+08:00
**Phase:** 13-Skill Controller Integration
**Areas discussed:** route selection and defaults, Ferris required references, planning/generation/QA/edit routing, mixed-IP behavior, output paths and escaped tokens, downstream scope fences

---

## Route Selection and Defaults

| Option | Description | Selected |
|--------|-------------|----------|
| Explicit Ferris route with Xiaohei default preserved | Add Ferris aliases to the controller while keeping omitted-IP requests on Xiaohei only. | yes |
| Broaden implicit Ferris selection | Let generic Rust article wording select Ferris without an explicit alias. | |
| Rotate default based on topic | Choose Ferris for Rust content and Xiaohei for other content. | |

**User's choice:** Auto-selected explicit Ferris route with Xiaohei default preserved.
**Notes:** ROADMAP Phase 13 success criteria require explicit Ferris aliases and preserve Xiaohei as the only default route. `references/routing.md` already sets Ferris `default=false`.

---

## Ferris Required References

| Option | Description | Selected |
|--------|-------------|----------|
| Expand to full Phase 12 pack | Update Ferris `required_references` to include index, source, style, identity, composition, prompt, and QA files. | yes |
| Keep source-only reference | Leave Ferris route row pointing only to `source.md`. | |
| Load all IP packs for Ferris | Load Xiaohei, Littlebox, Tom, and Ferris references together for Ferris requests. | |

**User's choice:** Auto-selected full Phase 12 pack expansion.
**Notes:** Phase 12 completed all Ferris operational files. Runtime controller behavior needs those files for route-isolated planning, generation, QA, and edits.

---

## Planning Generation QA Edit Routing

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local Ferris controller wiring | Use Ferris prompt-template and QA checklist fields directly in SKILL.md controller instructions. | yes |
| Reuse Tom instructions with renamed character | Copy the Tom controller path and replace names only. | |
| Minimal route selection only | Add aliases and output path, leaving planning/QA behavior implicit. | |

**User's choice:** Auto-selected route-local Ferris controller wiring.
**Notes:** FERR-01 through FERR-04 require route selection and output behavior, while Phase 12 files provide exact Ferris planning fields, prompt gates, QA categories, and edit gates.

---

## Mixed-IP Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Separate four-IP variant groups | Shared core idea, then independent Xiaohei, Littlebox, Tom, and Ferris groups with route-local references and paths. | yes |
| Combined multi-character image | Put all selected IPs into one generated image. | |
| Sequential route overwrite | Generate one route at a time into one shared output folder. | |

**User's choice:** Auto-selected separate four-IP variant groups.
**Notes:** Existing controller wording already uses separate route groups for Xiaohei/Littlebox/Tom. ROADMAP Phase 13 extends this to Ferris.

---

## Output Paths and Escaped Tokens

| Option | Description | Selected |
|--------|-------------|----------|
| Ferris suffix path | Use `assets/<article-slug>-ferris/` and escaped token `assets/&lt;article-slug&gt;-ferris/`. | yes |
| Shared illustrations folder | Save Ferris into Xiaohei's `assets/<article-slug>-illustrations/`. | |
| Status-prefixed folder | Save Ferris into a path that includes `source-reviewed`. | |

**User's choice:** Auto-selected Ferris suffix path.
**Notes:** FERR-04 and Phase 11/12 route contracts lock `assets/<article-slug>-ferris/` and the escaped token.

---

## Downstream Scope Fences

| Option | Description | Selected |
|--------|-------------|----------|
| Controller-only Phase 13 | Update `SKILL.md` and `references/routing.md`; defer docs/release and validation to Phases 14 and 15. | yes |
| Opportunistic docs update | Include README, examples, metadata, NOTICE, and release checklist while editing the controller. | |
| Opportunistic validator update | Include validator and Node tests while editing the controller. | |

**User's choice:** Auto-selected controller-only Phase 13.
**Notes:** ROADMAP assigns public docs/release surface to Phase 14 and validation hardening to Phase 15. The current phase has one plan: integrate Ferris into skill controller route, planning, generation, QA, output, and delivery paths.

---

## the agent's Discretion

- The user requested this Phase 13 discussion as an artifact-producing workflow and asked for autonomous resolution of open questions.
- The agent selected the controller-only scope because it matches ROADMAP Phase 13 and keeps Phase 14/15 responsibilities clean.
- The agent selected exact Ferris aliases, output suffix, path, source-reviewed status, and source/trademark note from existing Phase 11/12 artifacts.

## Deferred Ideas

- Phase 14 owns README, examples, agent metadata, NOTICE consistency, release checklist, and public copyable Ferris prompts.
- Phase 15 owns validator and Node test hardening.
- v2 owns reusable mascot manifests, asset manifests, visual regression, packaging scripts, route selectors, and English localization.
