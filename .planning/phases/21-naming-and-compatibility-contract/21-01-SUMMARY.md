---
phase: 21-naming-and-compatibility-contract
plan: 01
subsystem: planning
tags: [rebrand, naming, compatibility, routes, validation]

requires:
  - phase: 20
    provides: Sealos Seal baseline with stable five-route validator and Node test coverage
provides:
  - Maintainer-readable naming contract for Visual IP Illustrations
  - Stable legacy alias, route, output path, package path, and downstream ownership boundaries
affects: [phase-22-runtime-metadata, phase-23-public-docs, phase-24-validation]

tech-stack:
  added: []
  patterns: [Markdown naming contract, dependency-free validation evidence]

key-files:
  created:
    - .planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md
    - .planning/phases/21-naming-and-compatibility-contract/21-01-SUMMARY.md
  modified: []

key-decisions:
  - "Visual IP Illustrations is the canonical v1.4 product name."
  - "visual-ip-illustrations is the canonical repository slug and install slug."
  - "$visual-ip-illustrations is the canonical skill id for later runtime metadata work."
  - "$ian-xiaohei-illustrations remains the documented v1.4 legacy alias and smoke surface."
  - "Phase 22 owns runtime metadata and package path behavior; Phase 23 owns public docs and release copy; Phase 24 owns validator, Node tests, smoke coverage, stale old-name-only scans, and final evidence."

patterns-established:
  - "Contract-first rebrand: Phase 21 records exact strings and boundaries before metadata, docs, and validator changes."
  - "Stable route contract: Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes."

requirements-completed: [RBRD-01, RBRD-02, RBRD-03, RBRD-04]

duration: 8min
completed: 2026-06-14
---

# Phase 21 Plan 01: Naming and Compatibility Contract Summary

**Maintainer-readable v1.4 naming contract for Visual IP Illustrations with legacy alias, route, output path, package path, and downstream ownership boundaries**

## Performance

- **Duration:** 8min
- **Started:** 2026-06-14T07:50:00Z
- **Completed:** 2026-06-14T07:57:52Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Created `NAMING-CONTRACT.md` with canonical values: `Visual IP Illustrations`, `visual-ip-illustrations`, `$visual-ip-illustrations`, and `$ian-xiaohei-illustrations`.
- Recorded route ids and statuses for `xiaohei`/`active`, `littlebox`/`active`, `tom`/`gated-authorized`, `ferris`/`source-reviewed`, and `sealos`/`brand-owned`.
- Recorded raw output paths and escaped documentation tokens for all five shipped routes.
- Preserved the exact Phase 21 guard text: `Phase 21 must not modify runtime metadata/public docs/validators.`
- Assigned downstream ownership to Phase 22, Phase 23, and Phase 24.

## Task Commits

No task commit was created in this executor run. The user specified that the orchestrator owns final tracking commits in this sequential main working tree run.

## Files Created/Modified

- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` - v1.4 naming and compatibility contract.
- `.planning/phases/21-naming-and-compatibility-contract/21-01-SUMMARY.md` - execution summary and verification evidence.

## Decisions Made

- Followed the plan's conservative boundary: Phase 21 records the contract and leaves runtime metadata, public docs, route docs, validators, tests, package directories, and assets unchanged.
- Kept route and output path behavior stable while defining canonical naming values for later phases.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None.

## Threat Flags

None.

## Verification Evidence

| Check | Result | Evidence |
|-------|--------|----------|
| Task 1 naming grep | PASS | Found canonical product, slug, skill id, legacy alias, section names, and Phase 21 guard text in `NAMING-CONTRACT.md`. |
| Task 1 diff check | PASS | `git diff --check -- .planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` exited 0. |
| Task 2 route/path grep | PASS | Found all route ids, statuses, raw paths, escaped path tokens, package path boundary, and Phase 22/23/24 ownership in `NAMING-CONTRACT.md`. |
| Package validator | PASS | `node scripts/validate-skill-package.mjs` reported `Summary: total=78 passed=78 failed=0 skipped=0`. |
| Node tests | PASS | `node --test scripts/validate-skill-package.test.mjs` reported `tests 40`, `pass 40`, `fail 0`. |
| Whitespace check | PASS | `git diff --check` exited 0. |

## Next Phase Readiness

Phase 22 can consume `NAMING-CONTRACT.md` for `SKILL.md`, `agents/openai.yaml`, and package path behavior. Phase 23 can consume the same contract for README, examples, NOTICE, install guidance, migration guidance, and release checklist copy. Phase 24 can encode the contract in validator checks, Node tests, compatibility smoke coverage, stale old-name-only scans, and final evidence.

## Self-Check: PASSED

- `NAMING-CONTRACT.md` exists.
- `21-01-SUMMARY.md` exists.
- Required exact strings are present in `NAMING-CONTRACT.md`.
- Verification commands passed.

---
*Phase: 21-naming-and-compatibility-contract*
*Completed: 2026-06-14*
