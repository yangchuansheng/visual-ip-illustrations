---
phase: 06-tom-rights-and-route-contract
plan: 03
subsystem: validation
tags: [tom, rights, routing, validator, node-test]

requires:
  - phase: 06-01
    provides: Tom rights record, Tom route metadata row, and NOTICE permission boundary.
  - phase: 06-02
    provides: Public Tom route-status wording, path tokens, and public-sample release gate.
provides:
  - Historical Phase 4 boundary markers required by BOUNDARY-P5-001.
  - Phase 6 Tom contract validator checks for route, rights, docs, NOTICE, release gate, and public assets.
  - Node test coverage for three-route parser behavior and Tom failure reporting.
affects: [phase-07-tom-canonical-pack, phase-08-skill-controller-integration, phase-09-docs-examples-release-surface, phase-10-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Dependency-free Node marker validation for protected-character route contracts.
    - Phase 6 Tom validation requires only rights.md to exist while route metadata may list future pack references.
    - Public rendered Tom samples are gated by release checklist approval state.

key-files:
  created:
    - .planning/phases/04-validation-hardening/04-CONTEXT.md
    - .planning/phases/04-validation-hardening/04-RESEARCH.md
    - .planning/phases/06-tom-rights-and-route-contract/06-03-SUMMARY.md
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs

key-decisions:
  - "Phase 6 Tom validation checks future Tom pack reference markers while requiring only `rights.md` to exist."
  - "The validator treats `PENDING / reviewer / date` as the public rendered Tom sample gate."
  - "The validator matrix now has 40 checks covering the Phase 6 Tom contract."

patterns-established:
  - "Protected-character route checks include route metadata, rights markers, docs markers, NOTICE boundary markers, release approval markers, and public asset scans."
  - "Validator tests assert route parser primitives for Xiaohei, Littlebox, and Tom."

requirements-completed: [RGT-01, RGT-02, RGT-03, RGT-04, TOMR-05]

duration: 4min
completed: 2026-06-12
---

# Phase 6 Plan 3: Tom Contract Validation Summary

**The validator now deterministically verifies the Phase 6 Tom rights and route contract while preserving the Phase 4 boundary baseline.**

## Performance

- **Duration:** 4min
- **Started:** 2026-06-12T17:50:02Z
- **Completed:** 2026-06-12T17:54:00Z
- **Tasks:** 3
- **Files modified:** 5

## Accomplishments

- Repaired the historical Phase 4 planning artifacts consumed by `BOUNDARY-P5-001` with bounded marker files.
- Added Phase 6 Tom validator IDs: `RIGHTS-TOM-001`, `ROUTE-TOM-001`, `DOC-TOM-001`, `NOTICE-TOM-001`, `RELEASE-TOM-001`, and `BOUNDARY-TOM-IMG-001`.
- Updated validator tests for the 40-check matrix, three route parser expectations, Tom path tokens, and actionable Tom failure output.

## Task Commits

Each task was committed atomically:

1. **Task 1: Repair historical validator baseline dependency** - `aa29069` (docs)
2. **Task 2: Add minimal Phase 6 Tom validator checks** - `13b0d71` (feat)
3. **Task 3: Update validator tests for Tom contract checks** - `30762ed` (test)

## Files Created/Modified

- `.planning/phases/04-validation-hardening/04-CONTEXT.md` - Historical Phase 4 marker file for the Phase 5 boundary validator.
- `.planning/phases/04-validation-hardening/04-RESEARCH.md` - Historical Phase 4 research marker file for the Phase 5 boundary validator.
- `scripts/validate-skill-package.mjs` - Tom contract checks, Tom output path tokens, three-route metadata expectations, and public rendered sample gate.
- `scripts/validate-skill-package.test.mjs` - Stable 40-check matrix, three-route parser assertions, Tom path token assertions, and Tom marker failure fixture.
- `.planning/phases/06-tom-rights-and-route-contract/06-03-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Phase 6 validates all locked Tom route reference markers while requiring only `ian-xiaohei-illustrations/references/ips/tom/rights.md` to exist.
- Public rendered Tom samples fail validation while `RELEASE_CHECKLIST.md` contains `PENDING / reviewer / date`.
- The validator matrix now reports `total=40 passed=40 failed=0 skipped=0`.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed.
**Impact on plan:** Planned scope stayed bounded to historical marker repair, validator checks, and validator tests.

## Issues Encountered

- Initial baseline verification reproduced the expected failures: `ROUTE-REFS-001` expected the old Tom reference count and `BOUNDARY-P5-001` could not find Phase 4 historical files. Both were resolved by the planned tasks.

## User Setup Required

None - no external service configuration required.

## Verification

- `node scripts/validate-skill-package.mjs` - PASS; summary `total=40 passed=40 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` - PASS; 8 tests passed.
- `git diff --check` - PASS.
- `rg -n "RIGHTS-TOM-001|ROUTE-TOM-001|DOC-TOM-001|NOTICE-TOM-001|RELEASE-TOM-001|BOUNDARY-TOM-IMG-001" scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs` - PASS.

## Known Stubs

- `scripts/validate-skill-package.mjs` checks the `PENDING / reviewer / date` release marker intentionally. This is the Phase 6 public rendered Tom sample approval gate from Plan 06-02.

## Next Phase Readiness

Phase 6 is ready to close. Phase 7 can build the Tom canonical pack under `ian-xiaohei-illustrations/references/ips/tom/` using the route references now enforced by the validator.

---
*Phase: 06-tom-rights-and-route-contract*
*Completed: 2026-06-12*

## Self-Check: PASSED

- Files found: `.planning/phases/04-validation-hardening/04-CONTEXT.md`, `.planning/phases/04-validation-hardening/04-RESEARCH.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `.planning/phases/06-tom-rights-and-route-contract/06-03-SUMMARY.md`.
- Commits found: `aa29069`, `13b0d71`, `30762ed`.
