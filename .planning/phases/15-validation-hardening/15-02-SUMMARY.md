---
phase: 15-validation-hardening
plan: "02"
subsystem: validation
tags: [node, validator-tests, ferris, release-gates, fixtures]

requires:
  - phase: 15-validation-hardening
    provides: Plan 15-01 validator implementation baseline with 60 passing checks
provides:
  - Phase 15 Node regression suite locked to the 60-check validator matrix
  - Ferris seven-file route parser coverage
  - Ferris public asset and generated sample approval parser coverage
  - Ferris pack drift, release drift, leakage, and failure-message fixtures
affects: [phase-15-verification, ferris-route, validator-tests, release-checklist]

tech-stack:
  added: []
  patterns:
    - Node built-in test runner regression coverage
    - Fixture-copy validator mutation tests
    - Ferris-specific release approval parser fixtures

key-files:
  created:
    - .planning/phases/15-validation-hardening/15-02-SUMMARY.md
  modified:
    - scripts/validate-skill-package.test.mjs

key-decisions:
  - "Phase 15 tests now treat requiredCheckIds as the ordered 60-check validator matrix."
  - "Ferris approval tests use Ferris-specific public asset and generated sample records while preserving Tom helper behavior."
  - "Generated Ferris review outputs under workspace assets are tested separately from public sample publication gates."

patterns-established:
  - "Ferris parser fixtures assert seven ordered route-local required_references."
  - "Ferris approval fixtures assert reviewer, ISO date, approval status, directories, release channels, and trademark outcome fields."
  - "Ferris drift fixtures mutate one contract marker at a time and assert actionable check IDs plus repo-relative paths."

requirements-completed: [FVAL-01, FVAL-02, FVAL-03, FVAL-04, FVAL-05, FVAL-06, FVAL-07]

duration: 9min
completed: 2026-06-13
---

# Phase 15 Plan 02: Node Test Hardening Summary

**Node validator regression suite now locks the 60-check Ferris matrix, parser behavior, release approval gates, drift fixtures, and full green output**

## Performance

- **Duration:** 9min
- **Started:** 2026-06-13T12:42:07Z
- **Completed:** 2026-06-13T12:51:36Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Updated `requiredCheckIds` and full-pass assertions from the stale 53-check baseline to the final 60-check Phase 15 matrix.
- Added Ferris seven-file route parser assertions for `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Added Ferris-specific public asset and generated sample approval parser helpers covering pending, complete, invalid-date, blank-date, directory, channel, and trademark outcome behavior.
- Added fixture tests for Ferris canonical pack drift, prompt drift, IP/trademark marker drift, QA marker drift, release record drift, route leakage, and generated sample/public sample separation.

## Task Commits

Each task was committed atomically:

1. **Task 1: Lock final Phase 15 check order, parser behavior, and full pass output** - `4bd3e91` (test)
2. **Task 2: Lock public Ferris asset and generated sample approval parser behavior** - `2bf3968` (test)
3. **Task 3: Add Ferris drift, leakage, failure-message, and full-suite fixtures** - `cb1ab0c` (test)

**Plan metadata:** pending final docs commit

## Files Created/Modified

- `scripts/validate-skill-package.test.mjs` - Updated matrix, parser assertions, approval helpers, approval parser tests, Ferris drift fixtures, leakage fixtures, and full-pass output assertions.
- `.planning/phases/15-validation-hardening/15-02-SUMMARY.md` - Execution evidence and closeout record.

## Verification

Final required checks:

```text
$ node --test scripts/validate-skill-package.test.mjs
tests 31
pass 31
fail 0
cancelled 0
skipped 0
todo 0
```

```text
$ node scripts/validate-skill-package.mjs
Summary: total=60 passed=60 failed=0 skipped=0
```

```text
$ git diff --check -- scripts/validate-skill-package.test.mjs .planning/phases/15-validation-hardening/15-02-SUMMARY.md
exit 0
```

## Decisions Made

- Kept Tom public sample helpers unchanged and added Ferris-specific helpers for the Phase 14 Ferris public asset policy line.
- Split generated Ferris sample review coverage from public rendered sample publication coverage so internal workspace outputs do not require public sample approval.
- Used the final Plan 15-01 validator output as the test matrix source of truth.

## Deviations from Plan

### Instruction-Driven Adjustments

**1. Used command-line option ordering compatible with the local Node runner**
- **Found during:** Task 1 verification
- **Issue:** The plan command placed `--test-name-pattern` after the test file; the local Node runner executed the full suite in that form.
- **Fix:** Ran the equivalent Node command with `--test-name-pattern` before `scripts/validate-skill-package.test.mjs` for task-scoped verification, then ran the full suite for plan verification.
- **Files modified:** None
- **Verification:** Task-scoped and full-suite verification passed.
- **Committed in:** Test commits `4bd3e91`, `2bf3968`, `cb1ab0c`

---

**Total deviations:** 0 auto-fixed; 1 instruction-driven verification adjustment.
**Impact on plan:** No product or validator scope change. All planned behavior is covered by tests.

## Issues Encountered

- The old combined parser helper test mixed route parser assertions with Ferris approval parser assertions. It was split so Task 1 could lock routing behavior and Task 2 could lock approval behavior cleanly.
- The generated sample fixture was adjusted to test workspace `assets/*-ferris/` outputs separately from public sample directories, matching the validator contract.

## Known Stubs

None. The stub scan only found intentional placeholder-date test fixtures used to verify invalid approval dates.

## Threat Flags

None. This plan changed local Node regression tests only and introduced no new network, auth, schema, file-write runtime, or service boundary.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Plan 15-03 can record final Phase 15 verification and UAT evidence using the green validator and Node test suite.

## Self-Check: PASSED

- Created files exist: `scripts/validate-skill-package.test.mjs`, `.planning/phases/15-validation-hardening/15-02-SUMMARY.md`.
- Task commits exist: `4bd3e91`, `2bf3968`, `cb1ab0c`.
- Final Node totals: `tests 31`, `pass 31`, `fail 0`, `cancelled 0`, `skipped 0`, `todo 0`.
- Final validator summary: `Summary: total=60 passed=60 failed=0 skipped=0`.
- Whitespace check passed for `scripts/validate-skill-package.test.mjs` and `15-02-SUMMARY.md`.

---
*Phase: 15-validation-hardening*
*Completed: 2026-06-13*
