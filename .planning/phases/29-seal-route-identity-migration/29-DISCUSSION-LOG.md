# Phase 29: Seal Route Identity Migration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-15T03:02:25Z
**Phase:** 29-Seal Route Identity Migration
**Areas discussed:** Route identity tokens, Seal alias boundary, Default route compatibility, Mixed-IP route grouping

---

## Route Identity Tokens

| Option | Description | Selected |
|--------|-------------|----------|
| Complete active-route migration | Active metadata becomes display name `Seal`, route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`. | ✓ |
| Display-only rename | Keep route id and suffix as `sealos` while showing `Seal` in prose. | |
| Compatibility dual-route | Add `seal` while keeping active `sealos` as a selectable route. | |

**User's choice:** Auto-selected complete active-route migration based on Phase 29 success criteria.
**Notes:** Phase 29 goal explicitly requires `Seal`, `seal`, `seal`, and `assets/<article-slug>-seal/`.

---

## Seal Alias Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Product-neutral seal aliases | Use seal-character aliases such as `Seal`, `hoodie seal`, `white seal`, and `blue hoodie seal`; avoid Sealos product and brand wording. | ✓ |
| Carry forward Sealos aliases | Keep `Sealos Seal`, `Sealos mascot`, and related brand aliases active. | |
| Broad mascot aliases | Let generic mascot wording select the Seal route. | |

**User's choice:** Auto-selected product-neutral seal aliases based on Phase 29 success criteria and v1.6 requirements.
**Notes:** Active route aliases should describe a seal character and avoid product, brand, mascot, cloud platform, and advertising wording.

---

## Default Route Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve Xiaohei-only default | Keep Xiaohei as omitted-IP default; keep Littlebox, Tom, Ferris, and Seal explicit. | ✓ |
| Let Seal inherit former route prominence | Make Seal available through broader fallback behavior. | |
| Ask on omitted-IP requests | Turn omitted visual-IP requests into a clarification flow. | |

**User's choice:** Auto-selected Xiaohei-only default based on `ROUTE-04` and existing compatibility constraints.
**Notes:** Phase 29 must preserve default route behavior while migrating the former Sealos Seal explicit route.

---

## Mixed-IP Route Grouping

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local five-group split | Mixed-IP requests create separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Seal with route-local references and output directories. | ✓ |
| Merged mascot grouping | Group Ferris and Seal together under a generic mascot route family. | |
| Legacy Sealos group naming | Keep mixed-IP route group name as Sealos Seal while migrating display copy elsewhere. | |

**User's choice:** Auto-selected route-local five-group split based on Phase 29 success criteria.
**Notes:** This keeps route isolation consistent with earlier Littlebox, Tom, Ferris, and Sealos Seal milestones.

---

## the agent's Discretion

- Choose exact concise Chinese seal-character aliases during implementation while keeping product-neutral route intent.
- Choose the route-local path rename timing in coordination with Phase 30, provided Phase 29 locks active route identity and controller-facing paths.
- Preserve historical Sealos mentions in GSD records, source-history notes, and prior milestone evidence.

## Deferred Ideas

- Phase 30: route-local Seal pack debranding, prompt metaphors, edit gates, QA gates, and source record cleanup.
- Phase 31: public documentation, examples, NOTICE, release checklist, skill instructions, and agent metadata migration.
- Phase 32: stale Sealos validation, Node regression fixtures, final release evidence, and UAT.
