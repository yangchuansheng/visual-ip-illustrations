---
phase: 11-ferris-source-and-route-contract
plan: "03"
subsystem: validation
tags: [node, validator, ferris, routing, release-gate]
requires:
  - phase: 11-01
    provides: Ferris source record, route metadata, and NOTICE boundary
  - phase: 11-02
    provides: Ferris public route wording, output path tokens, and release sample gate
provides:
  - Repaired live package-boundary validator baseline
  - Six minimal Phase 11 Ferris contract checks
  - Ferris validator regression tests for route, source, NOTICE, release, and public sample approval drift
affects: [phase-12-ferris-pack, phase-13-controller, phase-14-docs, phase-15-validation]
tech-stack:
  added: []
  patterns:
    - Dependency-free Node validator checks with stable ordered IDs
    - Route-specific public sample approval parser preserving allowed directory paths
key-files:
  created:
    - .planning/phases/11-ferris-source-and-route-contract/11-03-SUMMARY.md
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs
key-decisions:
  - "BOUNDARY-P5-001 validates live package boundaries and workspace output path tokens instead of historical planning files."
  - "Ferris Phase 11 validation stays limited to route, source, NOTICE, docs, release gate, and public sample approval surfaces."
  - "Public sample approval parsing is route-generic while preserving examples/images and ian-xiaohei-illustrations/assets/examples values."
patterns-established:
  - "Ferris contract checks use explicit IDs: ROUTE-FERRIS-001, SOURCE-FERRIS-001, NOTICE-FERRIS-001, DOC-FERRIS-001, RELEASE-FERRIS-001, and BOUNDARY-FERRIS-IMG-001."
  - "Full-pass validator output is locked at Summary: total=53 passed=53 failed=0 skipped=0."
requirements-completed: [FRGT-01, FRGT-02, FRGT-03, FRGT-04, FERR-05]
duration: 7min
completed: 2026-06-13
---

# Phase 11 Plan 03: Ferris Validator Contract Summary

**Dependency-free validator baseline repair with 53 ordered checks for the Phase 11 Ferris route/source/release contract**

## Performance

- **Duration:** 7min
- **Started:** 2026-06-13T06:59:01Z
- **Completed:** 2026-06-13T07:06:13Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Repaired `BOUNDARY-P5-001` so it validates current package references and workspace output path tokens without reading stale `.planning/phases/04-validation-hardening/` files.
- Added six Phase 11 Ferris validator checks for route metadata, source markers, NOTICE boundary, public docs, release checklist, and public rendered sample approval.
- Updated Node tests to lock the 53-check matrix and cover Ferris route/source/NOTICE/release drift plus pending and approved public sample approval parsing.

## Task Commits

Each task was committed atomically:

1. **Task 1: Repair stale validator baseline boundary check** - `4a7d7d6` (fix)
2. **Task 2: Add minimal Phase 11 Ferris validator checks** - `7c3e0d7` (feat)
3. **Task 3: Add Ferris validator regression tests** - `3bacb67` (test)

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Replaces historical planning-file boundary dependence, adds Ferris output tokens, generic route sample approval parsing, and six Ferris checks.
- `scripts/validate-skill-package.test.mjs` - Updates the ordered matrix to 53 checks and adds Ferris drift and public sample approval fixtures.
- `.planning/phases/11-ferris-source-and-route-contract/11-03-SUMMARY.md` - Execution record for Plan 11-03.

## Decisions Made

- Kept `BOUNDARY-P5-001` as the ordered boundary check ID and changed its implementation to validate live package references and workspace output path markers.
- Kept Ferris validation bounded to Phase 11 contract surfaces; Ferris pack, runtime controller, prompt, QA, leakage, and metadata hardening remain later-phase work.
- Generalized public sample approval parsing by route name so Tom and Ferris use the same directory-preserving parser logic.

## Verification

- `node scripts/validate-skill-package.mjs` - passed with `Summary: total=53 passed=53 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` - passed with `tests 20`, `pass 20`, `fail 0`.
- `git diff --check -- scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs` - passed.
- `grep -F '.planning/phases/04-validation-hardening/04-CONTEXT.md' scripts/validate-skill-package.mjs >/dev/null && exit 1 || true` - passed.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Accepted the live Ferris route in baseline reference checks**
- **Found during:** Task 1
- **Issue:** `ROUTE-REFS-001` still expected only Xiaohei, Littlebox, and Tom reference counts, so the already-created Ferris row failed with `expected ferris required_references count=undefined`.
- **Fix:** Added Ferris expected reference count and route-local reference boundary validation.
- **Files modified:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`
- **Verification:** `node scripts/validate-skill-package.mjs`; `node --test scripts/validate-skill-package.test.mjs`
- **Commit:** `4a7d7d6`

**2. [Rule 1 - Bug] Updated parser helper baseline for the existing Ferris route row**
- **Found during:** Task 1
- **Issue:** The helper test still asserted three route rows after Plans 11-01 and 11-02 had already added Ferris.
- **Fix:** Updated the helper test to expect Xiaohei, Littlebox, Tom, and Ferris route rows and Ferris required reference parsing.
- **Files modified:** `scripts/validate-skill-package.test.mjs`
- **Verification:** `node --test scripts/validate-skill-package.test.mjs`
- **Commit:** `4a7d7d6`

## Known Stubs

None. Stub scan only found validator text for prompt placeholder checks.

## Threat Flags

None.

## Issues Encountered

None beyond the auto-fixed baseline drift above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 11 has a passing local validator baseline for Ferris source, route, NOTICE, public docs, release gate, and public sample approval policy. Phase 12 can build the Ferris canonical pack on top of `ian-xiaohei-illustrations/references/ips/ferris/source.md`.

## Self-Check: PASSED

- Found `scripts/validate-skill-package.mjs`.
- Found `scripts/validate-skill-package.test.mjs`.
- Found `.planning/phases/11-ferris-source-and-route-contract/11-03-SUMMARY.md`.
- Found commits `4a7d7d6`, `7c3e0d7`, and `3bacb67`.

---
*Phase: 11-ferris-source-and-route-contract*
*Completed: 2026-06-13*
