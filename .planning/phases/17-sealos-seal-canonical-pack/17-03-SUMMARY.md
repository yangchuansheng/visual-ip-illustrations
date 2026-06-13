---
phase: 17-sealos-seal-canonical-pack
plan: 03
subsystem: skill-pack
tags: [codex-skill, markdown, sealos, qa, validation-readiness]
requires:
  - phase: 17-sealos-seal-canonical-pack
    provides: Sealos Seal foundation, composition, and prompt files from Plans 17-01 and 17-02
provides:
  - Sealos Seal route-local QA checklist
  - Cross-file operational marker coherence for the Sealos pack
  - Final Phase 17 validation evidence
affects: [phase-18-controller-loading, phase-19-public-docs, phase-20-validator-hardening]
tech-stack:
  added: []
  patterns: [route-local QA authority, cross-file marker coherence, deterministic validation evidence]
key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md
  modified:
    - ian-xiaohei-illustrations/references/ips/sealos/index.md
key-decisions:
  - Sealos QA is the route-local authority for identity drift, style drift, passive mascot placement, excessive text, route leakage, and missing brand/path context.
  - The Sealos pack index lists full route-local reference paths so later validators can grep deterministic paths.
  - Phase 17 preserves the existing Phase 16 validator matrix while adding deterministic Sealos pack markers for Phase 20 hardening.
patterns-established:
  - Sealos QA pattern: pass criteria, uploaded-image identity checks, failure signals, iteration moves, and delivery judgment.
  - Sealos coherence pattern: six operational files repeat brand-owned, source.md, uploaded-image-canonical, uploaded-image-locked, route leakage, and assets/<article-slug>-sealos/.
requirements-completed: [SIP-01, SIP-05]
duration: 16min
completed: 2026-06-13
---

# Phase 17 Plan 03: Sealos QA and Coherence Summary

**Sealos Seal route-local QA authority plus cross-file marker coherence for the complete canonical pack**

## Performance

- **Duration:** 16min
- **Started:** 2026-06-13T16:24:00Z
- **Completed:** 2026-06-13T16:40:00Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Created `qa-checklist.md` with pass criteria, uploaded-image identity checks, failure signals, iteration moves, and delivery judgment.
- Refined `index.md` to list all seven route-local reference paths in full `references/ips/sealos/...` form.
- Verified all six operational Sealos files share stable route markers: `brand-owned`, `source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, `route leakage`, and `assets/<article-slug>-sealos/`.

## Task Commits

1. **Task 1: Create Sealos QA checklist** - `8f6ddb2` (feat)
2. **Task 2: Refine cross-file Sealos pack coherence** - `4129951` (fix)
3. **Task 3: Run package validation and whitespace checks** - verification-only, no production file changes

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` - Route-local QA authority for Sealos Seal generated outputs.
- `ian-xiaohei-illustrations/references/ips/sealos/index.md` - Full route-local reference paths for deterministic validation.

## Decisions Made

- Treated `qa-checklist.md` as the single route-local QA authority for Sealos Seal outputs.
- Kept public rendered Sealos sample approval behind `RELEASE_CHECKLIST.md` while allowing route-local prompt and QA references to define internal generation behavior.
- Left validator implementation unchanged in Phase 17 because Phase 20 owns validator hardening.

## Verification

- `test -f ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` - PASS
- Six-file marker loop for `Route status: \`brand-owned\``, `assets/<article-slug>-sealos/`, `source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, and `route leakage` - PASS
- `rg -n "references/ips/sealos/(index|source|style-dna|sealos-ip|composition-patterns|prompt-template|qa-checklist)\\.md" ian-xiaohei-illustrations/references/ips/sealos/index.md` - PASS
- `node scripts/validate-skill-package.mjs` - PASS, `Summary: total=66 passed=66 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` - PASS, `tests 34`, `pass 34`, `fail 0`
- `git diff --check` - PASS

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added full route-local paths to Sealos pack index**
- **Found during:** Task 2 (Refine cross-file Sealos pack coherence)
- **Issue:** The cross-file verification required `references/ips/sealos/...` paths in `index.md`, while the first index version listed short file names.
- **Fix:** Updated the seven reference bullets to use full route-local paths.
- **Files modified:** `ian-xiaohei-illustrations/references/ips/sealos/index.md`
- **Verification:** Re-ran the Task 2 marker and path grep successfully.
- **Committed in:** `4129951`

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** The fix made the index satisfy deterministic Phase 17 marker checks and supports Phase 20 validator hardening.

## Issues Encountered

None beyond the auto-fixed path marker gap documented above.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None.

## Next Phase Readiness

Phase 18 can wire controller loading to the completed Sealos route-local pack. Phase 20 can turn the stable Phase 17 text markers into validator checks.

## Self-Check: PASSED

- Created file exists on disk.
- Task commits `8f6ddb2` and `4129951` exist in git history.
- Verification commands passed after implementation.

---
*Phase: 17-sealos-seal-canonical-pack*
*Completed: 2026-06-13*
