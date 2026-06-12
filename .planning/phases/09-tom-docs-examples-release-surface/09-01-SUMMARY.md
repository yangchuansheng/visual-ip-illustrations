---
phase: 09-tom-docs-examples-release-surface
plan: "01"
subsystem: docs
tags: [readme, tom, routes, protected-character, codex-skill]
requires:
  - phase: 08-skill-controller-integration
    provides: verified Tom explicit route selection, Xiaohei implicit default, mixed route groups, and Tom output path behavior
provides:
  - README public Tom route contract with status, aliases, output path, suffix, rights boundary, and sample gate wording
  - README route hierarchy preserving Xiaohei implicit default and Littlebox explicit active routing
  - README maintainer visibility for Tom pack files and validation commands
affects: [09-02, 09-03, 09-04, phase-10-validation]
tech-stack:
  added: []
  patterns:
    - Chinese-first Markdown public documentation
    - Explicit protected-character route wording tied to rights records and release gates
key-files:
  created:
    - .planning/phases/09-tom-docs-examples-release-surface/09-01-SUMMARY.md
  modified:
    - README.md
key-decisions:
  - "README documents Xiaohei as the implicit default, Littlebox as an explicit active route, and Tom as an explicit protected-character route."
  - "Tom public wording stays tied to `gated-authorized`, `rights.md`, output suffix `tom`, and `RELEASE_CHECKLIST.md` public-sample gate."
patterns-established:
  - "Public docs mirror verified controller behavior instead of stale future-runtime wording."
  - "Protected-character route docs expose route metadata without broad availability or rendered sample claims."
requirements-completed: [TDOC-01, TDOC-05]
duration: 24min
completed: 2026-06-12T20:44:32Z
---

# Phase 09 Plan 01: README Tom Route Surface Summary

**README route docs now expose Tom as an explicit `gated-authorized` protected-character route while preserving Xiaohei as the implicit default.**

## Performance

- **Duration:** 24min
- **Started:** 2026-06-12T20:20:00Z
- **Completed:** 2026-06-12T20:44:32Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Updated README route hierarchy so Xiaohei is the implicit default, Littlebox is explicit active, and Tom is explicit protected-character with status `gated-authorized`.
- Replaced stale Phase 6 wording that deferred Tom runtime selection with Phase 8 verified runtime behavior.
- Added Tom aliases, output suffix `tom`, raw and escaped output paths, rights boundary, mixed-IP route group behavior, and public-sample gate wording.
- Added README visibility for Tom pack files under `ian-xiaohei-illustrations/references/ips/tom/` and maintainer validation via `RELEASE_CHECKLIST.md`.

## Task Commits

1. **Task 1 and Task 2: Update README route hierarchy, Tom public contract, and release-surface guardrails** - `6f0ad2c` (docs)

## Files Created/Modified

- `README.md` - Public Tom route documentation, route hierarchy, aliases, output path, rights boundary, workflow, directory map, and validation wording.
- `.planning/phases/09-tom-docs-examples-release-surface/09-01-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Kept Tom wording as explicit and gated, with no broad availability claim.
- Tied public rendered Tom samples to `RELEASE_CHECKLIST.md` public-sample gate and `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- Kept public docs Chinese-first while preserving paths and route tokens in English.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Initial `gsd-tools` lookup failed because the shim was not on `PATH`. Located `/Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` and used `node` to invoke the SDK.
- The checkout is on `main` with `.git` as a directory and branching strategy `none`; the worktree-specific `worktree-agent-*` guard does not apply to this repository mode.

## Verification

Commands passed:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
- `rg -n 'gated-authorized' README.md`
- `rg -n 'Tom Cat' README.md`
- `rg -n 'Tom and Jerry' README.md`
- `rg -n '汤姆猫' README.md`
- `rg -n 'assets/<article-slug>-tom/' README.md`
- `rg -n 'assets/&lt;article-slug&gt;-tom/' README.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' README.md`
- `bash -lc '! rg -n "运行时选择行为由后续阶段接入" README.md'`
- `rg -n 'examples/prompts.md' README.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/tom/' README.md`
- `rg -n 'index.md' README.md`
- `rg -n 'rights.md' README.md`
- `rg -n 'prompt-template.md' README.md`
- `rg -n 'qa-checklist.md' README.md`
- `rg -n 'RELEASE_CHECKLIST.md' README.md`
- `rg -n 'node scripts/validate-skill-package.mjs' README.md`
- `rg -n 'Xiaohei.*implicit default|implicit default.*Xiaohei|默认.*Xiaohei|Xiaohei.*默认' README.md`
- `rg -n 'Littlebox.*explicit|explicit.*Littlebox|Littlebox.*显式|显式.*Littlebox' README.md`
- `rg -n 'Tom.*explicit|explicit.*Tom|Tom.*显式|显式.*Tom' README.md`
- `rg -n 'public-sample gate|public sample|Public rendered Tom samples|公开.*Tom.*样例|公共.*Tom.*样例' README.md`

## Known Stubs

None found in files modified by this plan.

## Threat Flags

None. README now mirrors the existing Phase 8 Tom protected route surface and adds no new runtime endpoint, auth path, file access pattern, or schema boundary.

## Self-Check: PASSED

- Found `README.md`.
- Found `.planning/phases/09-tom-docs-examples-release-surface/09-01-SUMMARY.md`.
- Found task commit `6f0ad2c`.
- No tracked file deletions were introduced by the README commit.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 09 Plan 02 can update `examples/prompts.md` using the README route hierarchy and Tom public-sample boundary established here.

---
*Phase: 09-tom-docs-examples-release-surface*
*Completed: 2026-06-12T20:44:32Z*
