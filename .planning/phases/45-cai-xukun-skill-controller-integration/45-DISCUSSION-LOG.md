# Phase 45: Cai Xukun Skill Controller Integration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md.

**Date:** 2026-06-18
**Phase:** 45-Cai Xukun Skill Controller Integration
**Areas discussed:** Scope boundary, runtime controller surfaces, RUN-01, RUN-02, RUN-03, RUN-04, deferred phases, verification

---

## Scope Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| SKILL.md runtime controller | Limit Phase 45 to runtime skill-controller integration, likely only `skills/visual-ip-illustrations/SKILL.md`. | yes |
| Public release surfaces | Update README, examples, NOTICE, release checklist, and public docs now. | |
| Validator and tests | Add validator and Node test coverage now. | |

**User's choice:** Lock Phase 45 to runtime skill-controller integration, likely only `skills/visual-ip-illustrations/SKILL.md` unless evidence shows `agents/openai.yaml` belongs here.
**Notes:** ROADMAP places public documentation and release surfaces in Phase 46 and validation/test hardening in Phase 47.

---

## Runtime Controller Surfaces

| Option | Description | Selected |
|--------|-------------|----------|
| Full controller integration | Add Cai Xukun to every `SKILL.md` controller surface used by other explicit routes. | yes |
| Route-only mention | Add only alias and output path wording. | |
| Pack-only dependency | Depend on the route-local pack without updating runtime controller instructions. | |

**User's choice:** Add Cai Xukun to frontmatter description, Visual IP Routes, Reference Loading, Select the Visual IP Route, shot-list entries, mixed-IP groups, generation context, mixed-IP generation, QA and iteration, output save paths, Output Contract / delivery report fields, and route-leakage delivery guard.
**Notes:** Current `SKILL.md` already has these controller surfaces for Tom, Ferris, Seal, OpenClaw, and Go Gopher.

---

## RUN-01

| Option | Description | Selected |
|--------|-------------|----------|
| Runtime invocation path | Cover route selection, reference loading, planning fields, generation dispatch, edit routing, QA dispatch, and delivery reports. | yes |
| Generation-only path | Cover image prompts while leaving planning/edit/QA delivery implicit. | |

**User's choice:** Define RUN-01 as complete only when Cai Xukun is reachable through the full runtime controller path.
**Notes:** Cai Xukun route details must include aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk`; id `caixukun`; status `gated-public-figure`; output `assets/<article-slug>-caixukun/`; source/prompt/QA/pack references; uploaded-image identity; public-figure label sanitization; source-image context; and public sample review boundary.

---

## RUN-02

| Option | Description | Selected |
|--------|-------------|----------|
| Separate mixed-IP group | Add Cai Xukun as its own mixed-IP route group with route-local references, prompts, QA, and output path. | yes |
| Shared route group | Reuse another route's mixed-IP group wording. | |

**User's choice:** Mixed-IP output must create separate route groups for Cai Xukun and all existing routes.
**Notes:** Existing route stability is part of the acceptance surface.

---

## RUN-03

| Option | Description | Selected |
|--------|-------------|----------|
| Cai Xukun delivery fields | Include selected visual IP, count, purpose, saved path, likeness-boundary note, route stability, uploaded-image identity, source-image context, route isolation, and public sample review status. | yes |
| Generic delivery fields | Use the existing general output contract without Cai Xukun-specific guard fields. | |

**User's choice:** Cai Xukun delivery report must carry route-specific status and boundary fields.
**Notes:** The route-leakage delivery guard should protect the final report from cross-route wording.

---

## RUN-04

| Option | Description | Selected |
|--------|-------------|----------|
| Split by phase ownership | Phase 45 updates `SKILL.md` instruction text; Phase 46 updates `agents/openai.yaml`. | yes |
| Update all metadata now | Edit `agents/openai.yaml` in Phase 45. | |

**User's choice:** Phase 45 covers skill instructions; Phase 46 covers public/release metadata unless planning finds direct evidence that agent metadata is required in Phase 45.
**Notes:** ROADMAP Phase 46 explicitly owns public docs and release surfaces. Phase 45 still preserves Visual IP Illustrations identity and legacy `$ian-xiaohei-illustrations` alias in `SKILL.md`.

---

## Deferred Ideas

- README variants, prompt examples, NOTICE, release checklist, public docs, and agent metadata: Phase 46.
- Validator, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final evidence: Phase 47.

## the agent's Discretion

- The planner may choose the smallest safe `SKILL.md` edit sequence.
- The planner may split verification grep commands by controller surface.
