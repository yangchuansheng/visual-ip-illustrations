---
phase: 16-sealos-seal-brand-and-image-contract
plan: 03
subsystem: validation
tags: [sealos, validator, node-test, public-sample-gate, tdd]
requires:
  - phase: 16-01
    provides: Sealos source record and routing row
  - phase: 16-02
    provides: Sealos public docs and release gates
provides:
  - Six bounded Phase 16 Sealos validator checks
  - Five-route parser test coverage
  - Sealos public sample approval parser and fixtures
affects: [phase-20, validator, release-review]
tech-stack:
  added: []
  patterns: [dependency-free Node validator, route-specific public asset approval parser, planned-reference allowance]
key-files:
  created: []
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs
    - ian-xiaohei-illustrations/references/routing.md
    - ian-xiaohei-illustrations/references/ips/sealos/source.md
key-decisions:
  - "Phase 16 validator checks stay bounded to source, routing, public docs, NOTICE, release checklist, output tokens, and public sample policy."
  - "Sealos planned references are allowed in routing while only source.md must exist before Phase 17."
  - "The validator matrix now has 66 checks and the Node suite has 34 tests."
patterns-established:
  - "Brand-owned public asset approval tracks uploaded-image identity outcome and brand-logo outcome."
  - "Generated-sample parsers are scoped to their route section to avoid cross-route record collisions."
requirements-completed: [SBRD-01, SBRD-02, SBRD-03, SBRD-04, SBRD-05]
duration: 15min
completed: 2026-06-13
---

# Phase 16 Plan 03: Sealos Validator Contract Summary

**Dependency-free Sealos Phase 16 validator checks with five-route parser tests and public sample approval fixtures**

## Performance

- **Duration:** 15min
- **Started:** 2026-06-13T14:37:30Z
- **Completed:** 2026-06-13T14:52:38Z
- **Tasks:** 3
- **Files modified:** 4

## Accomplishments

- Added `ROUTE-SEALOS-001`, `SOURCE-SEALOS-001`, `DOC-SEALOS-P16-001`, `NOTICE-SEALOS-001`, `RELEASE-SEALOS-001`, and `BOUNDARY-SEALOS-IMG-001`.
- Updated output path tokens, route parser expectations, and planned-reference validation for the Sealos Phase 16 contract.
- Added Sealos public sample approval parsing and fixtures for pending and complete approval states.
- Preserved dependency-free Node validation with final `Summary: total=66 passed=66 failed=0 skipped=0`.

## Task Commits

1. **Task 1 RED: Add failing Sealos validator tests** - `4c4ceb9` (test)
2. **Task 1 GREEN + Task 2: Add Sealos validator contract checks and regression tests** - `64b0f06` (feat)
3. **Task 3: Record Phase 16 validation evidence** - evidence recorded in this summary

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Sealos checks, path tokens, public sample parser, and planned-reference handling.
- `scripts/validate-skill-package.test.mjs` - 66-check matrix, five-route parser expectations, Sealos drift fixtures, and approval parser tests.
- `ian-xiaohei-illustrations/references/routing.md` - Sealos raw and escaped output tokens in route output section.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` - Exact prior exploration marker used by deterministic validation.

## Decisions Made

- Full Sealos pack existence, prompt placeholders, QA gates, controller behavior, metadata, full docs examples, generated sample parser hardening, and route leakage checks stay in later phases.
- Phase 16 validates only the brand/source, routing, docs, NOTICE, release checklist, output token, and public sample policy surfaces.
- Sealos public sample approval requires uploaded-image identity outcome and brand-logo outcome.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added Sealos output path tokens to routing**
- **Found during:** Task 1 (validator implementation)
- **Issue:** Sealos routing metadata exposed `output_suffix=sealos`, but `routing.md` lacked Sealos output path bullets.
- **Fix:** Added raw and escaped Sealos output path tokens and mixed-IP Sealos output wording.
- **Files modified:** `ian-xiaohei-illustrations/references/routing.md`
- **Verification:** `node scripts/validate-skill-package.mjs`
- **Committed in:** `64b0f06`

**2. [Rule 2 - Missing Critical] Added deterministic source marker**
- **Found during:** Task 1 (validator implementation)
- **Issue:** Source record had the intended prior exploration boundary but lacked the exact lowercase marker required for stable automated checks.
- **Fix:** Added exact `prior Sealos mascot exploration` wording.
- **Files modified:** `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- **Verification:** `node scripts/validate-skill-package.mjs`
- **Committed in:** `64b0f06`

**Total deviations:** 2 auto-fixed (2 missing critical)
**Impact on plan:** Both fixes complete the validator-backed Phase 16 contract and keep scope bounded to planned files.

## Issues Encountered

- RED tests failed as expected before validator implementation.
- Initial GREEN pass exposed parser scoping and fixture specificity issues; fixed by scoping generated Ferris approval parsing to the Ferris section and using a unique Sealos fixture marker.

## Verification Evidence

- `node scripts/validate-skill-package.mjs` -> `Summary: total=66 passed=66 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` -> `tests 34`, `pass 34`, `fail 0`
- `git diff --check` -> exit 0

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 16 is complete and ready for Phase 17 Sealos Seal canonical pack work. Phase 17 can rely on `source.md`, route metadata, output tokens, release gate wording, and the 66-check validator baseline.

## Self-Check: PASSED

- Found `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`
- Found commits `4c4ceb9` and `64b0f06`
- Final validator evidence: `Summary: total=66 passed=66 failed=0 skipped=0`
- Final Node evidence: `tests 34`, `pass 34`, `fail 0`
- `git diff --check` passed

---
*Phase: 16-sealos-seal-brand-and-image-contract*
*Completed: 2026-06-13*
