---
phase: 09-tom-docs-examples-release-surface
plan: "02"
subsystem: docs
tags: [examples, prompts, tom, routes, protected-character, smoke-fixtures]
requires:
  - phase: 08-skill-controller-integration
    provides: verified Tom explicit route selection, Xiaohei implicit default, mixed route groups, and Tom output path behavior
  - phase: 09-tom-docs-examples-release-surface
    provides: README Tom public route contract from plan 09-01
provides:
  - Copyable Tom-only planning, generation, and smoke prompt examples
  - Three-IP mixed variant prompts with separate Xiaohei, Littlebox, and Tom route groups
  - Prompt smoke fixtures preserving Tom gated status, rights record, aliases, route-local references, and output paths
affects: [09-03, 09-04, phase-10-validation]
tech-stack:
  added: []
  patterns:
    - Chinese-first Markdown prompt examples
    - Text-only protected-character prompt fixtures tied to route status and rights records
key-files:
  created:
    - .planning/phases/09-tom-docs-examples-release-surface/09-02-SUMMARY.md
  modified:
    - examples/prompts.md
key-decisions:
  - "Tom-only prompts stay separate from mixed-IP prompts so solo Tom requests are inspectable."
  - "Mixed-IP prompts require separate Xiaohei, Littlebox, and Tom variant groups with route-local references and route-specific output paths."
  - "Public rendered Tom sample wording stays tied to RELEASE_CHECKLIST.md public-sample gate."
patterns-established:
  - "Prompt examples double as manual route smoke fixtures with exact marker strings."
  - "Tom prompt examples preserve `gated-authorized`, rights record, aliases, raw path, escaped path, and route-local reference directory."
requirements-completed: [TDOC-02, TDOC-05]
duration: 4min
completed: 2026-06-12T20:54:49Z
---

# Phase 09 Plan 02: Tom Prompt Examples Summary

**Tom prompt examples now cover solo planning, solo generation, route smoke checks, and three-IP mixed variants with gated rights markers.**

## Performance

- **Duration:** 4min
- **Started:** 2026-06-12T20:51:49Z
- **Completed:** 2026-06-12T20:54:49Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Added a Tom-only prompt section after Littlebox with copyable planning, generation, and smoke-check prompts.
- Upgraded mixed-IP examples so Xiaohei, Littlebox, and Tom each have separate route groups, route-local references, and output directories.
- Updated maintainer smoke wording so Phase 8 runtime route selection is described as verified behavior while public rendered Tom samples remain behind the release checklist gate.

## Task Commits

1. **Task 1 and Task 2: Add Tom-only and three-IP mixed prompt examples** - `da05e16` (docs)

The two prompt-example tasks were committed together as the requested atomic examples change.

## Files Created/Modified

- `examples/prompts.md` - Added Tom planning, generation, smoke, and three-IP mixed prompt examples with route markers and rights boundaries.
- `.planning/phases/09-tom-docs-examples-release-surface/09-02-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Kept Tom-only prompts separate from mixed-IP prompts.
- Used the exact Tom alias set: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- Preserved Tom status as `gated-authorized` and pointed all Tom examples to `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- Kept Tom output markers in both raw and escaped forms: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Initial `gsd-tools` lookup failed because the shim was not on `PATH`. Used `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` for SDK queries.
- The repository uses branching strategy `none` on `main` with `.git` as a directory; worktree-agent branch guards do not apply in this checkout mode.

## Verification

Commands passed:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
- `rg -n 'Tom state' examples/prompts.md`
- `rg -n 'Tom action' examples/prompts.md`
- `rg -n 'Supporting objects' examples/prompts.md`
- `rg -n 'Rights-status note' examples/prompts.md`
- `rg -n 'gated-authorized' examples/prompts.md`
- `rg -n 'Tom Cat' examples/prompts.md`
- `rg -n 'Tom and Jerry' examples/prompts.md`
- `rg -n '汤姆猫' examples/prompts.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' examples/prompts.md`
- `rg -n 'assets/<article-slug>-tom/' examples/prompts.md`
- `rg -n 'assets/&lt;article-slug&gt;-tom/' examples/prompts.md`
- `rg -n 'Xiaohei variant group' examples/prompts.md`
- `rg -n 'Littlebox variant group' examples/prompts.md`
- `rg -n 'Tom variant group' examples/prompts.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/xiaohei/' examples/prompts.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/littlebox/' examples/prompts.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/tom/' examples/prompts.md`
- `rg -n 'assets/<article-slug>-illustrations/' examples/prompts.md`
- `rg -n 'assets/<article-slug>-littlebox/' examples/prompts.md`
- `bash -lc '! rg -n "Phase 8 owns runtime selection behavior" examples/prompts.md'`
- `rg -n 'public-sample gate|public sample|Public rendered Tom samples|公开.*Tom.*样例|公共.*Tom.*样例|RELEASE_CHECKLIST.md' examples/prompts.md`
- `rg -n 'Tom.*explicit|explicit.*Tom|Tom.*显式|显式.*Tom|使用 Tom' examples/prompts.md`

## Known Stubs

None found in files modified by this plan.

## Threat Flags

None. Prompt examples document the existing protected Tom route and add no new runtime endpoint, auth path, file access pattern, or schema boundary.

## Self-Check: PASSED

- Found `examples/prompts.md`.
- Found `.planning/phases/09-tom-docs-examples-release-surface/09-02-SUMMARY.md`.
- Found task commit `da05e16`.
- No tracked file deletions were introduced by the examples commit.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 09 Plan 03 can update agent metadata using the same route hierarchy and Tom gated-route wording established by README and prompt examples.

---
*Phase: 09-tom-docs-examples-release-surface*
*Completed: 2026-06-12T20:54:49Z*
