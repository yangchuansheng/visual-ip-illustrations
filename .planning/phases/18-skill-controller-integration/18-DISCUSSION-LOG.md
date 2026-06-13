# Phase 18: Skill Controller Integration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md -- this log preserves the alternatives considered.

**Date:** 2026-06-13T16:05:00Z
**Phase:** 18-skill-controller-integration
**Areas discussed:** Route selection and default behavior, Sealos planning output, generation QA and edit behavior, mixed-IP variant grouping, output path and delivery contract, phase boundary

---

## Route Selection and Default Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Consume existing routing.md | Use the Phase 16 `sealos` row as controller authority and add Sealos wording to `SKILL.md`. | yes |
| Rework route metadata | Redesign route-table shape before controller integration. | |
| Inline route rules only in SKILL.md | Add Sealos matching in the controller without relying on `routing.md`. | |

**User's choice:** Autonomous default authorized in the invocation; selected existing route metadata as the authority.
**Notes:** Phase 16 already verified aliases, `default=false`, output suffix, required references, brand context, canonical image status, and drift boundary in `references/routing.md`.

---

## Sealos Planning Output

| Option | Description | Selected |
|--------|-------------|----------|
| Use Phase 17 prompt-template fields | Surface `Mascot state`, `Mascot action`, output path, and brand/canonical-image note from `references/ips/sealos/prompt-template.md`. | yes |
| Create a generic character field | Use a route-neutral field shape shared by all IPs. | |
| Duplicate full source record text | Copy the source record into the controller planning section. | |

**User's choice:** Autonomous default authorized in the invocation; selected Phase 17 planning fields and compact brand/canonical-image note.
**Notes:** The controller should point to `source.md` for uploaded-image authority and keep detailed Sealos rules in route-local references.

---

## Generation QA and Edit Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Load Sealos route-local references | Use Sealos prompt, composition, QA, and edit references only for the Sealos route. | yes |
| Share Ferris mascot rules | Adapt Ferris controller behavior without route-local Sealos QA boundaries. | |
| Add broad shared mascot rules | Create generic mascot controller behavior for all future mascot routes. | |

**User's choice:** Autonomous default authorized in the invocation; selected route-local Sealos behavior.
**Notes:** Sealos generation must carry `brand-owned`, `source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, and `assets/<article-slug>-sealos/`.

---

## Mixed-IP Variant Grouping

| Option | Description | Selected |
|--------|-------------|----------|
| Five separate variant groups | Build Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal as separate groups from one shared core idea. | yes |
| One combined route group | Merge selected IPs into one cross-IP prompt group. | |
| Sealos-only mixed extension | Add Sealos only to Sealos-specific mixed prompts. | |

**User's choice:** Autonomous default authorized in the invocation; selected five separate variant groups.
**Notes:** This follows the existing mixed-IP pattern and satisfies SEAL-03.

---

## Output Path and Delivery Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Add raw and escaped Sealos path tokens | Add `assets/<article-slug>-sealos/` and `assets/&lt;article-slug&gt;-sealos/` to controller-facing save instructions. | yes |
| Raw token only | Use the runtime save path without escaped documentation marker. | |
| Route table only | Rely on `routing.md` path tokens and leave `SKILL.md` path rules unchanged. | |

**User's choice:** Autonomous default authorized in the invocation; selected raw plus escaped Sealos path tokens.
**Notes:** The escaped token is a Phase 18 success criterion and should appear in controller-facing docs.

---

## Phase Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Controller-focused Phase 18 | Integrate Sealos into `SKILL.md`, run current regression commands, and leave public docs/validator hardening to later phases. | yes |
| Expand public docs now | Update README, examples, metadata, NOTICE, and release checklist during controller integration. | |
| Harden validator now | Add full Sealos controller validator checks during Phase 18. | |

**User's choice:** Autonomous default authorized in the invocation; selected controller-focused Phase 18.
**Notes:** Phase 19 owns public docs and release surfaces. Phase 20 owns validator and Node test hardening.

---

## the agent's Discretion

- The user authorized autonomous choices, so the discussion selected the established route-local, phase-bounded defaults.
- The controller integration should preserve current behavior for Xiaohei, Littlebox, Tom, and Ferris while adding Sealos as the fifth explicit route.

## Deferred Ideas

None.
