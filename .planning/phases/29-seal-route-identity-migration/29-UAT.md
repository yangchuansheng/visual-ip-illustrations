---
status: complete
phase: 29-seal-route-identity-migration
source:
  - .planning/phases/29-seal-route-identity-migration/29-01-SUMMARY.md
started: 2026-06-15T03:48:30Z
updated: 2026-06-15T03:48:30Z
---

## Current Test

[testing complete]

## Tests

### 1. Select Product-Neutral Seal Route
expected: User requests for `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, or `蓝色连帽衫海豹` select route id `seal`, display name `Seal`, route status `active`, and route-local references under `references/ips/seal/`.
result: pass
evidence: `routing.md` row ``| `seal` | Seal | ... | `false` | `seal` | ... | `active` |``; `SKILL.md` route-selection aliases; manual Node row/reference check passed.

### 2. Save New Seal Outputs Under Seal Path
expected: New Seal outputs use output suffix `seal` and save under `assets/<article-slug>-seal/`, including mixed-IP delivery blocks.
result: pass
evidence: `routing.md` raw and escaped output markers; `SKILL.md` shot-list, generation, save, and mixed-IP delivery sections; `node scripts/validate-skill-package.mjs` passed 98/98.

### 3. Preserve Default and Explicit Route Isolation
expected: Omitted visual IP selects only Xiaohei, while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes with separate route-local references and output directories.
result: pass
evidence: Manual Node check found exactly one `default=true` row and it belongs to `xiaohei`; `routing.md` and `SKILL.md` mixed-IP wording lists Xiaohei, Littlebox, Tom, Ferris, and Seal groups separately.

### 4. Reject Stale Active Sealos Route Drift
expected: Deterministic validation fails when active route metadata regresses from `seal` back to stale `sealos` id, suffix, or output path.
result: pass
evidence: Temporary fixture mutated `routing.md` to stale `sealos` id/suffix/path; `node scripts/validate-skill-package.mjs` exited 1 and reported `ROUTE-SEALOS-001`, `ROUTE-SEALOS-002`, `REBRAND-CANON-004`, `REBRAND-ROUTE-001`, and `VAL-COMPAT-001` failures.

## Summary

total: 4
passed: 4
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

[none]
