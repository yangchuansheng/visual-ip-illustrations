---
phase: 19-docs-examples-and-release-surface
plan: 02
subsystem: docs
tags: [examples, prompts, sealos, mixed-ip]
requires:
  - phase: 18-skill-controller-integration
    provides: Sealos Seal explicit route selection and five-IP mixed grouping
provides:
  - Copyable Sealos Seal planning, generation, and text-only route smoke prompts
  - Five-IP mixed planning, generation, and maintainer smoke prompt examples
affects: [examples/prompts.md, Phase 20 validator hardening, release checklist smoke inventory]
tech-stack:
  added: []
  patterns: [Copyable prompt examples with route-specific status, authority notes, QA gates, and output paths]
key-files:
  created: []
  modified: [examples/prompts.md]
key-decisions:
  - "Sealos prompt examples use completed route-local pack and controller wording instead of Phase 16 placeholder wording."
  - "Mixed-IP examples now require separate Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route groups."
patterns-established:
  - "Sealos prompt examples carry Mascot state, Mascot action, Brand/canonical-image note, uploaded-image-canonical, uploaded-image-locked, and assets/<article-slug>-sealos/."
requirements-completed: [SDOC-02]
duration: 4min
completed: 2026-06-13
---

# Phase 19 Plan 02: Sealos Prompt Examples Summary

**Copyable Sealos Seal standalone and five-IP mixed prompts with route-local authority, smoke checks, and release-gated sample wording**

## Performance

- **Duration:** 4min
- **Started:** 2026-06-13T16:52:32Z
- **Completed:** 2026-06-13T16:56:10Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments

- Replaced the old Sealos Phase 16 route-status prompt with current planning, generation, and text-only smoke prompts.
- Added required Sealos planning fields, authority markers, raw and escaped output paths, uploaded-image markers, and public sample gate wording.
- Expanded mixed planning, mixed generation, and maintainer smoke prompts to five route groups.

## Task Commits

Each task was committed atomically:

1. **Tasks 1-3: Sealos prompt examples and mixed-IP inventory** - `01db7cc` (docs)

## Files Created/Modified

- `examples/prompts.md` - Sealos standalone examples, text-only smoke prompt, and five-route mixed prompt examples.

## Decisions Made

- Prompt examples treat Sealos Seal as route-ready based on completed pack/controller work.
- Five-IP mixed examples keep route-local references, route-specific status, source/rights/brand notes, QA gates, and output directories separated.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Preserved Sealos validator compatibility marker**
- **Found during:** Task 3 verification
- **Issue:** Existing validator check `DOC-SEALOS-P16-001` still required the exact text `prior exploration variant` in public docs.
- **Fix:** Added that exact drift-boundary marker to the Sealos text-only smoke prompt while keeping Phase 19 route-ready wording.
- **Files modified:** `examples/prompts.md`
- **Verification:** `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` passed after the fix.
- **Committed in:** `01db7cc`

**Total deviations:** 1 auto-fixed (1 blocking).
**Impact on plan:** The fix preserves current validator compatibility and stays within Sealos prompt documentation scope.

## Issues Encountered

- Initial validator run failed on missing `prior exploration variant`; fixed inline and reran all plan checks.

## User Setup Required

None - no external service configuration required.

## Verification

- `rg -n "显式 Sealos Seal：只做规划|显式 Sealos Seal：直接生成|Placement|Core idea|Structure type|Mascot state|Mascot action|Supporting objects|Visible labels|Output path|Brand/canonical-image note|brand-owned|ian-xiaohei-illustrations/references/ips/sealos/source.md|uploaded-image-canonical|uploaded-image-locked|assets/<article-slug>-sealos/|assets/&lt;article-slug&gt;-sealos/" examples/prompts.md` - passed
- `rg -n '显式 Sealos Seal：route smoke check|Text-only maintainer route audit|selected IP 是 Sealos Seal|route status 是 `brand-owned`|route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/sealos/`|required references 包含 `index.md`、`source.md`、`style-dna.md`、`sealos-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`|uploaded-image identity markers|public sample gate|prior exploration variant' examples/prompts.md` - passed
- `rg -n "Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal|Sealos Seal variant group|Mascot state|Mascot action|brand-owned|Brand/canonical-image note|assets/<article-slug>-sealos/|assets/&lt;article-slug&gt;-sealos/|route-specific status|source/rights/brand note|route-local references|QA gates|输出目录" examples/prompts.md` - passed
- `node scripts/validate-skill-package.mjs` - passed, 66/66 checks
- `node --test scripts/validate-skill-package.test.mjs` - passed, 34/34 tests
- `git diff --check` - passed

## Known Stubs

None.

## Threat Flags

None.

## Next Phase Readiness

Ready for Plan 19-03 agent metadata updates.

## Self-Check: PASSED

- `examples/prompts.md` exists and contains the required Sealos standalone and five-IP mixed prompt markers.
- Commit `01db7cc` exists in git history.

---
*Phase: 19-docs-examples-and-release-surface*
*Completed: 2026-06-13*
