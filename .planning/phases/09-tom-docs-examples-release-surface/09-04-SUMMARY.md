---
phase: 09-tom-docs-examples-release-surface
plan: "04"
subsystem: docs
tags: [release-checklist, tom, protected-character, release-gates, validation]
requires:
  - phase: 09-tom-docs-examples-release-surface
    provides: README, prompt examples, and agent metadata Tom public route wording from plans 09-01 through 09-03
  - phase: 08-skill-controller-integration
    provides: verified Tom explicit route selection, Xiaohei implicit default, mixed route groups, and Tom output path behavior
provides:
  - Final Tom maintainer release gate for authorization, route status, prompt leakage, public assets, generated samples, validator commands, and rights review
  - Release checklist fields for reviewer, date, approval status, directories, and release channels
  - Checklist confirmation that Tom remains `default=false` and Xiaohei remains the only implicit default route
affects: [phase-10-validation, release-review, tom-public-sample-policy]
tech-stack:
  added: []
  patterns:
    - Maintainer release gates in Markdown checklists
    - Protected-character release status tied to rights records and explicit approval fields
key-files:
  created:
    - .planning/phases/09-tom-docs-examples-release-surface/09-04-SUMMARY.md
  modified:
    - RELEASE_CHECKLIST.md
key-decisions:
  - "Release checklist keeps Tom release decisions tied to `ian-xiaohei-illustrations/references/ips/tom/rights.md`."
  - "Tom remains `gated-authorized` and `default=false`; Xiaohei remains the only implicit default route."
  - "Public rendered Tom samples and generated Tom samples require reviewer/date/status/channel records before release."
patterns-established:
  - "Tom release gates preserve validator-stable section markers while adding finer-grained maintainer review subsections."
  - "Prompt leakage review scans broad availability, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, route leakage, and sample claims."
requirements-completed: [TDOC-04, TDOC-05]
duration: 4min
completed: 2026-06-12T21:11:02Z
---

# Phase 09 Plan 04: Tom Release Gates Summary

**Release checklist now gates Tom release readiness through rights review, route status, leakage scans, sample policy, and validator commands.**

## Performance

- **Duration:** 4min
- **Started:** 2026-06-12T21:08:15Z
- **Completed:** 2026-06-12T21:11:02Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Expanded `RELEASE_CHECKLIST.md` from a compact Tom rights gate into the final maintainer release gate for Phase 9.
- Added Tom authorization, route status, prompt leakage, public asset, generated sample, and final rights review sections.
- Preserved the required validator commands: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.
- Added reviewer/date/status/directory/channel fields for public rendered Tom samples and generated Tom review samples.

## Task Commits

1. **Task 1 and Task 2: Add Tom authorization, route status, leakage, public asset, generated sample, validator, and final rights gates** - `c7bb735` (docs)

The two checklist tasks were committed together as one atomic release checklist change.

## Files Created/Modified

- `RELEASE_CHECKLIST.md` - Added Tom release gates, route smoke coverage, leakage scans, sample policies, approval fields, and final rights review.
- `.planning/phases/09-tom-docs-examples-release-surface/09-04-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Kept `## Tom Rights and Public Sample Gate` as the stable checklist heading required by the existing validator.
- Added narrower Tom release-gate subsections under that heading instead of changing validator behavior in Phase 9.
- Kept Tom availability wording tied to `gated-authorized`, `default=false`, explicit aliases, `rights.md`, and public-sample approval fields.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Preserved validator-stable Tom checklist heading**
- **Found during:** Task 2 validation
- **Issue:** Renaming the Tom checklist section made `RELEASE-TOM-001` fail because the existing validator expects `## Tom Rights and Public Sample Gate`.
- **Fix:** Restored the stable heading and placed the new detailed Tom release-gate subsections under it.
- **Files modified:** `RELEASE_CHECKLIST.md`
- **Verification:** `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` passed.
- **Committed in:** `c7bb735`

**Total deviations:** 1 auto-fixed (Rule 1 bug)
**Impact on plan:** The release gates were preserved and the existing Phase 9 validator contract stayed green.

## Issues Encountered

- `gsd-tools` was not on `PATH`; used `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` for SDK queries.
- The repository uses branching strategy `none` on `main` with `.git` as a directory; worktree-agent branch guards do not apply in this checkout mode.

## Verification

Commands passed:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
- `rg -n 'node scripts/validate-skill-package.mjs' RELEASE_CHECKLIST.md`
- `rg -n 'node --test scripts/validate-skill-package.test.mjs' RELEASE_CHECKLIST.md`
- `rg -n 'git diff --check' RELEASE_CHECKLIST.md`
- `rg -n 'authorization review|Authorization Review|授权.*review|授权.*审核' RELEASE_CHECKLIST.md`
- `rg -n 'route status|Route Status|路由状态' RELEASE_CHECKLIST.md`
- `rg -n 'default=false' RELEASE_CHECKLIST.md`
- `rg -n 'only implicit default|唯一.*implicit default|唯一.*默认|only.*default' RELEASE_CHECKLIST.md`
- `rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' RELEASE_CHECKLIST.md`
- `rg -n 'prompt leakage|Prompt Leakage|leakage scan|泄漏扫描|泄露扫描' RELEASE_CHECKLIST.md`
- `rg -n 'broad availability|广泛可用|公开可用' RELEASE_CHECKLIST.md`
- `rg -n 'source-frame recreation' RELEASE_CHECKLIST.md`
- `rg -n 'show logos' RELEASE_CHECKLIST.md`
- `rg -n 'title cards' RELEASE_CHECKLIST.md`
- `rg -n 'default Jerry' RELEASE_CHECKLIST.md`
- `rg -n 'broad cast expansion' RELEASE_CHECKLIST.md`
- `rg -n 'Public rendered Tom samples approved' RELEASE_CHECKLIST.md`
- `rg -n 'PENDING / reviewer / date|reviewer.*date|approval.*reviewer' RELEASE_CHECKLIST.md`
- `rg -n 'examples/images/' RELEASE_CHECKLIST.md`
- `rg -n 'ian-xiaohei-illustrations/assets/examples/' RELEASE_CHECKLIST.md`
- `rg -n 'Final Tom Rights Review|final rights review|最终.*rights|最终.*权利' RELEASE_CHECKLIST.md`
- `rg -n 'gated-authorized' RELEASE_CHECKLIST.md`
- `rg -n 'assets/<article-slug>-tom/' RELEASE_CHECKLIST.md`
- `rg -n 'assets/&lt;article-slug&gt;-tom/' RELEASE_CHECKLIST.md`
- `rg -n 'public sample|Public rendered Tom samples|generated sample|Public asset' RELEASE_CHECKLIST.md`
- `rg -n 'Tom Authorization Review' RELEASE_CHECKLIST.md`
- `rg -n 'Tom Route Status Review' RELEASE_CHECKLIST.md`
- `rg -n 'Prompt Leakage Scan' RELEASE_CHECKLIST.md`
- `rg -n 'Public Asset Policy' RELEASE_CHECKLIST.md`
- `rg -n 'Generated Sample Policy' RELEASE_CHECKLIST.md`
- `rg -n 'Final Tom Rights Review' RELEASE_CHECKLIST.md`
- `rg -n 'Tom Rights and Public Sample Gate' RELEASE_CHECKLIST.md`

## Known Stubs

None found in files modified by this plan.

## Threat Flags

None. The checklist change adds maintainer process gates and no new runtime endpoint, auth path, file access pattern, or schema boundary.

## Self-Check: PASSED

- Found `RELEASE_CHECKLIST.md`.
- Found `.planning/phases/09-tom-docs-examples-release-surface/09-04-SUMMARY.md`.
- Found task commit `c7bb735`.
- No tracked file deletions were introduced by the release checklist commit.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 10 can harden validators using the release-gate markers now present in `RELEASE_CHECKLIST.md`.

---
*Phase: 09-tom-docs-examples-release-surface*
*Completed: 2026-06-12T21:11:02Z*
