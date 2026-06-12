---
phase: 10-validation-hardening
plan: "01"
subsystem: validation
tags: [node, validator, tom, protected-ip, gsd]
requires:
  - phase: 06-tom-rights-and-route-contract
    provides: Tom rights record, route status, release gate, and Phase 6 validator anchors.
  - phase: 07-tom-canonical-pack
    provides: Tom canonical pack files and protected-route marker vocabulary.
  - phase: 08-skill-controller-integration
    provides: Tom routing, route-local references, and output path contract.
  - phase: 09-tom-docs-examples-release-surface
    provides: Public docs, metadata, NOTICE, and release checklist Tom markers.
provides:
  - Phase 10 validator matrix with 47 ordered local checks.
  - Helper-backed Tom pack, docs, metadata, smoke, leakage, and public asset gate validation.
  - Structured public rendered Tom sample approval parsing.
affects: [10-02, 10-03, TVAL-01, TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06]
tech-stack:
  added: []
  patterns: [dependency-free Node validator helpers, stable check IDs, exact marker arrays]
key-files:
  created:
    - .planning/phases/10-validation-hardening/10-01-SUMMARY.md
  modified:
    - scripts/validate-skill-package.mjs
key-decisions:
  - "Tom validation remains dependency-free and local-only, using existing Node filesystem helpers."
  - "Public rendered Tom sample approval is parsed from the release checklist line into explicit status, reviewer, date, directory, and channel fields."
  - "Node test expected-count updates remain scoped to Plan 10-02."
patterns-established:
  - "Tom canonical pack checks use route-local file lists and file-specific marker arrays."
  - "Protected-IP leakage checks use explicit forbidden marker diagnostics with repo-relative paths."
requirements-completed: [TVAL-01, TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06]
duration: 35min
completed: 2026-06-12
---

# Phase 10 Plan 01: Validator Tom Hardening Summary

**Dependency-free Node validator hardened to 47 ordered checks for Tom route, pack, docs, leakage, and public sample approval gates**

## Performance

- **Duration:** 35 min
- **Started:** 2026-06-12T21:42:00Z
- **Completed:** 2026-06-12T22:16:34Z
- **Tasks:** 2
- **Files modified:** 1 implementation file, 1 summary file

## Accomplishments

- Added Tom helper coverage for canonical pack files and required package shape.
- Added seven ordered Phase 10 check IDs: `AGENT-TOM-001`, `REFS-TOM-001`, `PROMPT-TOM-001`, `IP-TOM-001`, `QA-TOM-001`, `SMOKE-TOM-001`, and `BOUNDARY-TOM-LEAK-001`.
- Hardened `BOUNDARY-TOM-IMG-001` with structured public rendered Tom sample approval parsing.
- Preserved deterministic local-only validator behavior and actionable repo-relative failure messages.

## Task Commits

1. **Task 1 and Task 2: Add reusable Tom helpers and ordered Phase 10 check IDs** - `c25beaa` (`test`)

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Adds Tom operational reference helper, no-marker leakage assertion, public sample approval parser, seven Tom check IDs, and hardened public Tom asset gate.
- `.planning/phases/10-validation-hardening/10-01-SUMMARY.md` - Records Plan 10-01 execution, verification, and downstream test-count work.

## Decisions Made

- Kept all validation in the existing dependency-free Node script.
- Kept the public asset gate conservative: rendered Tom assets pass only when the release checklist approval record is complete.
- Left test suite expected-count and fixture updates to Plan 10-02 because this plan's write scope excludes `scripts/validate-skill-package.test.mjs`.

## Deviations from Plan

None - plan executed within the requested validator implementation scope.

## Issues Encountered

- `gsd-tools` was not on the shell `PATH`; the SDK was invoked through `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs`.
- `node --test scripts/validate-skill-package.test.mjs` now fails one existing expected-count assertion because the validator correctly emits 47 checks while the current test still expects 40. This is expected downstream work for Plan 10-02.

## Known Stubs

None. Stub scan found only intentional validator marker text for prompt placeholder coverage.

## Threat Flags

None. The implementation reads existing repository files and directories only; it adds no network endpoint, auth path, schema, generated asset, or external runtime dependency.

## Verification

- `node scripts/validate-skill-package.mjs | tee /tmp/phase10-01-final.out && rg -n 'Summary: total=47 passed=47 failed=0 skipped=0' /tmp/phase10-01-final.out` - passed.
- Targeted check ID scan for all seven new checks - passed.
- Helper import check for `splitRouteCell`, `outputPathTokens`, and `parsePublicTomSampleApproval` - passed.
- Public sample approval parser manual check against `RELEASE_CHECKLIST.md` - found pending approval with `complete=false`.
- `node --test scripts/validate-skill-package.test.mjs` - expected downstream failure: 7 pass, 1 fail, failing assertion is `47 !== 40`.
- `git diff --check` - passed.

## Next Phase Readiness

Plan 10-02 can update the Node test suite to assert the 47-check matrix, fixture failures, parser helper behavior, and structured public sample approval parsing.

## Self-Check: PASSED

- Found summary file: `.planning/phases/10-validation-hardening/10-01-SUMMARY.md`
- Found implementation commit: `c25beaa`
- Verified validator target output: `Summary: total=47 passed=47 failed=0 skipped=0`

---
*Phase: 10-validation-hardening*
*Completed: 2026-06-12*
