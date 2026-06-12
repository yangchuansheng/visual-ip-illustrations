---
phase: 10-validation-hardening
plan: "02"
subsystem: validation
tags: [node, tests, validator, tom, protected-ip, gsd]
requires:
  - phase: 10-validation-hardening
    plan: "01"
    provides: Phase 10 validator matrix, seven new Tom check IDs, and public sample approval parser.
provides:
  - Phase 10 Node validator test suite with 15 passing tests.
  - Fixture coverage for Tom route, pack, prompt, QA, docs, metadata, leakage, public assets, and approval parser behavior.
  - Full-pass assertions for the 47-check validator matrix.
affects: [10-03, TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06, TVAL-07]
tech-stack:
  added: []
  patterns: [node:test, spawnSync validator fixtures, temporary copied repositories, exact output assertions]
key-files:
  created:
    - .planning/phases/10-validation-hardening/10-02-SUMMARY.md
  modified:
    - scripts/validate-skill-package.test.mjs
    - scripts/validate-skill-package.mjs
key-decisions:
  - "Node regression tests now assert the 47-check Phase 10 validator order and summary."
  - "Tom failure coverage uses deterministic temporary fixture repositories and one-surface mutations."
  - "Public rendered Tom sample approval parsing treats path slashes as data inside approved records."
metrics:
  duration: 1min
  completed: 2026-06-12
  tasks: 2
  files: 3
requirements-completed: [TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06, TVAL-07]
---

# Phase 10 Plan 02: Validator Regression Tests Summary

**Node validator regression coverage now locks the 47-check Phase 10 matrix and 15 passing tests.**

## Performance

- **Duration:** 1 min active commit window after implementation and verification
- **Completed:** 2026-06-12T22:28:24Z
- **Tasks:** 2
- **Files modified:** 2 code files, 1 summary file

## Accomplishments

- Updated `requiredCheckIds` and the full-pass test to assert all 47 ordered Phase 10 checks.
- Extended parser/helper coverage for the three route rows, Tom route reference splitting, raw and escaped output tokens, and public Tom sample approval parsing.
- Added seven targeted Tom fixture tests with the exact plan-required names.
- Covered Tom route metadata drift, canonical pack file failure, prompt marker drift, QA marker drift, docs and agent metadata drift, leakage into non-Tom packs, and public asset approval gate behavior.
- Fixed the approval parser delimiter so approved records can include repo-relative directories such as `examples/images`.

## Task Commits

1. **Task 1 and Task 2: Update Phase 10 matrix assertions and add Tom fixture coverage** - `2289670` (`test`)

## Files Created/Modified

- `scripts/validate-skill-package.test.mjs` - Adds the 47-check expected order, parser/helper assertions, seven fixture tests, and final 15/15 coverage.
- `scripts/validate-skill-package.mjs` - Fixes public Tom sample approval field splitting so path slashes inside allowed directories remain intact.
- `.planning/phases/10-validation-hardening/10-02-SUMMARY.md` - Records Plan 10-02 execution, verification, and deviation.

## Decisions Made

- Kept fixture tests local-only with Node built-ins, temporary copied repositories, and `spawnSync`.
- Preserved the validator implementation scope except for the compatibility fix required by the public sample approval parser test.
- Asserted actionable diagnostics through check IDs, repo-relative paths, and missing or forbidden marker wording.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed public Tom sample approval parser field splitting**
- **Found during:** Task 2
- **Issue:** `parsePublicTomSampleApproval()` split approval fields on every `/`, which misparsed `examples/images` and `ian-xiaohei-illustrations/assets/examples` inside complete approved records.
- **Fix:** Changed the delimiter to split only on space-padded separators, preserving path slashes inside field values.
- **Files modified:** `scripts/validate-skill-package.mjs`
- **Commit:** `2289670`

## Issues Encountered

- `gsd-tools` was unavailable on the shell `PATH`; state operations used `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs`.

## Known Stubs

None. Stub scan hits were intentional validator fixture strings and public release placeholder markers used as parser test inputs.

## Threat Flags

None. Changes add no network endpoint, auth path, schema, file write surface beyond temporary test fixtures, or external runtime dependency.

## Verification

- `node scripts/validate-skill-package.mjs | tee /tmp/phase10-02-validator-task2.out && rg -n 'Summary: total=47 passed=47 failed=0 skipped=0' /tmp/phase10-02-validator-task2.out` - passed.
- `node --test scripts/validate-skill-package.test.mjs | tee /tmp/phase10-02-tests-task2.out && rg -n 'tests 15' /tmp/phase10-02-tests-task2.out && rg -n 'pass 15' /tmp/phase10-02-tests-task2.out && rg -n 'fail 0' /tmp/phase10-02-tests-task2.out` - passed.
- Seven targeted `node --test --test-name-pattern=...` commands from the plan - passed.
- `git diff --check` - passed.

## Next Phase Readiness

Plan 10-03 can record final validation evidence and close Phase 10 using the 47/47 validator output and 15/15 Node test output.

## Self-Check: PASSED

- Found summary file: `.planning/phases/10-validation-hardening/10-02-SUMMARY.md`
- Found test coverage commit: `2289670`
- Found modified test file: `scripts/validate-skill-package.test.mjs`
- Found compatibility parser fix file: `scripts/validate-skill-package.mjs`
- Verified final validator output: `Summary: total=47 passed=47 failed=0 skipped=0`
- Verified final Node test output: `tests 15`, `pass 15`, `fail 0`

---
*Phase: 10-validation-hardening*
*Completed: 2026-06-12*
