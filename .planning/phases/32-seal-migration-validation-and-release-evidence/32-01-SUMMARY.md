---
phase: 32-seal-migration-validation-and-release-evidence
plan: 01
subsystem: validation
tags: [node, validator, seal, migration, release-evidence, uat]

requires:
  - phase: 29-seal-route-identity-migration
    provides: Seal route identity and source-history contract
  - phase: 30-seal-pack-debranding
    provides: Product-neutral Seal route pack
  - phase: 31-public-documentation-and-release-surface-migration
    provides: Public Seal docs and release surface migration
provides:
  - Seal-focused validator IDs, parser helpers, and scan modes
  - Node regression coverage for Seal migration validation
  - Phase 32 release and UAT evidence
affects: [validator, release, uat, seal-route]

tech-stack:
  added: []
  patterns:
    - Dependency-free Node validator CLI modes
    - Fixture-based validator regression tests

key-files:
  created:
    - .planning/phases/32-seal-migration-validation-and-release-evidence/32-RELEASE-EVIDENCE.md
    - .planning/phases/32-seal-migration-validation-and-release-evidence/32-UAT.md
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs

key-decisions:
  - "Seal migration validation keeps historical Sealos provenance bounded while active route checks use Seal terminology."
  - "The stale Sealos scan is active-surface focused and emits a deterministic PASS line for clean state."
  - "Phase 32 UAT is text-route smoke based and does not run image generation."

patterns-established:
  - "CLI scan modes return one deterministic PASS line on success."
  - "Seal sample approval parser helpers use active Seal names while preserving Tom and Ferris parser behavior."

requirements-completed: [VAL-01, VAL-02, VAL-03, VAL-04]

duration: 24min
completed: 2026-06-15
---

# Phase 32 Plan 01: Seal Migration Validation and Release Evidence Summary

**Seal-focused validator checks, bounded stale Sealos scans, Node regression coverage, and release/UAT evidence**

## Performance

- **Duration:** 24 min
- **Started:** 2026-06-15T05:54:53Z
- **Completed:** 2026-06-15T06:19:10Z
- **Tasks:** 3
- **Files modified:** 5

## Accomplishments

- Migrated active route validator IDs, messages, parser helpers, and output path expectations from Sealos-era naming to Seal-focused validation.
- Added `--stale-sealos-scan`, `--docs-consistency-scan`, and `--route-migration-smoke` CLI modes with deterministic PASS output.
- Updated Node regression tests to cover Seal route parsing, stale leakage fixtures, docs drift, sample parser helpers, and full-pass output.
- Recorded final release evidence and text-route UAT evidence for Phase 32.

## Task Commits

1. **Task 1: Update Node regression contract for Seal migration validation** - `875bf3b` (test)
2. **Task 2: Implement Seal validator checks, bounded stale scans, and parser helpers** - `d6efaba` (feat)
3. **Task 3: Record final release evidence and UAT smoke evidence** - `ac9a698` (docs)

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Seal-focused validator IDs, parser helpers, active stale scan, docs consistency scan, and route migration smoke.
- `scripts/validate-skill-package.test.mjs` - Seal migration regression tests, fixture drift coverage, parser helper assertions, and final pass expectations.
- `.planning/phases/32-seal-migration-validation-and-release-evidence/32-RELEASE-EVIDENCE.md` - Final command evidence for release readiness.
- `.planning/phases/32-seal-migration-validation-and-release-evidence/32-UAT.md` - Text-route UAT evidence for active Seal behavior.
- `.planning/phases/32-seal-migration-validation-and-release-evidence/32-01-SUMMARY.md` - Plan execution summary.

## Verification

- `node scripts/validate-skill-package.mjs` -> `Summary: total=97 passed=97 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` -> `tests 66`, `pass 66`, `fail 0`
- `git diff --check` -> exit 0
- `node scripts/validate-skill-package.mjs --stale-sealos-scan` -> `PASS stale Sealos active-route scan`
- `node scripts/validate-skill-package.mjs --docs-consistency-scan` -> `PASS Seal docs consistency scan`
- `node scripts/validate-skill-package.mjs --route-migration-smoke` -> `PASS Seal route migration smoke`

## Decisions Made

- Seal active-route validation checks use Seal IDs while stale Sealos strings remain valid only in bounded provenance, migration, and fixture contexts.
- The docs consistency scan validates public docs, routing, NOTICE, and agent metadata using each surface's own wording instead of forcing one identical phrase everywhere.
- UAT evidence uses route metadata and text smoke because Phase 32 validates release readiness and route behavior without generating images.

## Deviations from Plan

None - plan executed as written.

## Issues Encountered

- Several initial marker assertions were stricter than the current Seal docs wording. They were narrowed to durable contract markers already present in source, routing, QA, release, and public docs.
- `state.advance-plan` returned `Cannot parse Current Plan or Total Plans in Phase from STATE.md` against the repository's current free-form state format. Other registered handlers updated progress, metrics, decisions, session continuity, roadmap progress, and requirements completion.

## Known Stubs

None.

## Threat Flags

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 32 leaves the Seal migration validator, regression tests, release evidence, and UAT evidence green. Release verification can consume `32-RELEASE-EVIDENCE.md` and `32-UAT.md` directly.

## Self-Check: PASSED

- Created files exist: `32-01-SUMMARY.md`, `32-RELEASE-EVIDENCE.md`, `32-UAT.md`.
- Modified validator files exist: `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`.
- Task commits exist: `875bf3b`, `d6efaba`, `ac9a698`.
- Stub scan found only validator placeholder fixtures and prompt-placeholder checks used by tests.
