---
phase: 06-tom-rights-and-route-contract
plan: 02
subsystem: documentation
tags: [tom, rights, route-status, release-checklist, public-sample-gate]

requires:
  - phase: 06-01
    provides: Tom rights record, Tom route metadata row, and NOTICE permission boundary.
provides:
  - Public README route-status wording for Tom as a protected-character route.
  - Text-only Tom maintainer smoke prompt with locked aliases and path tokens.
  - Release checklist gate for Tom rights review and public rendered sample approval.
affects: [phase-07-tom-canonical-pack, phase-08-skill-controller-integration, phase-09-docs-examples-release-surface, phase-10-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Shared `gated-authorized` status token across public and release surfaces.
    - Public rendered Tom samples stay blocked behind an explicit release checklist marker.

key-files:
  created:
    - .planning/phases/06-tom-rights-and-route-contract/06-02-SUMMARY.md
  modified:
    - README.md
    - examples/prompts.md
    - RELEASE_CHECKLIST.md

key-decisions:
  - "Tom public docs expose route status and rights path without adding rendered Tom sample assets."
  - "Tom route audit prompts remain text-only until Phase 8 runtime integration and Phase 9 broad examples."
  - "Public rendered Tom samples remain gated by `PENDING / reviewer / date` release approval."

patterns-established:
  - "Protected-character public docs include raw and escaped output path markers together."
  - "Release checklist owns the public rendered sample approval marker for protected-character routes."

requirements-completed: [RGT-03, RGT-04]

duration: 2min 4s
completed: 2026-06-13
---

# Phase 6 Plan 2: Tom Public Route Status and Sample Gate Summary

**Tom route status is now visible in README, smoke prompts, and release gates with public rendered samples held behind explicit approval.**

## Performance

- **Duration:** 2min 4s
- **Started:** 2026-06-12T17:42:21Z
- **Completed:** 2026-06-12T17:44:25Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Added README wording for Tom as a protected-character route with status `gated-authorized`, locked aliases, rights record path, and raw plus escaped output path tokens.
- Added a text-only Tom maintainer smoke prompt in `examples/prompts.md` using `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- Added `Tom Rights and Public Sample Gate` to `RELEASE_CHECKLIST.md`, including rights review, route-status review, default-route confirmation, Tom path markers, and the required pending public-sample approval marker.

## Task Commits

Each task was committed atomically:

1. **Task 1: Add public route-status wording and Tom path tokens** - `e235524` (docs)
2. **Task 2: Add Tom release gates and public-sample approval marker** - `59bf11b` (docs)

## Files Created/Modified

- `README.md` - Public Tom route-status wording, aliases, rights record path, raw path token, escaped path token, and Xiaohei implicit default language.
- `examples/prompts.md` - Text-only Tom route smoke prompt for maintainer audit.
- `RELEASE_CHECKLIST.md` - Tom rights/status gate and pending public rendered sample approval marker.
- `.planning/phases/06-tom-rights-and-route-contract/06-02-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Kept Tom public guidance scoped to route audit language while downstream phases own runtime selection behavior and broad public examples.
- Left public rendered Tom sample approval as `PENDING / reviewer / date` to preserve the Phase 6 release gate.
- Preserved Xiaohei as the implicit default route while Tom remains explicit and protected.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Verification

- `rg -n "gated-authorized|Tom Cat|Tom and Jerry|汤姆猫|assets/<article-slug>-tom/|assets/&lt;article-slug&gt;-tom/|references/ips/tom/rights.md" README.md examples/prompts.md` - PASS
- `rg -n "默认视觉 IP|implicit default|Xiaohei" README.md examples/prompts.md` - PASS
- `rg -n "Tom Rights and Public Sample Gate|gated-authorized|default=false|assets/<article-slug>-tom/|assets/&lt;article-slug&gt;-tom/|Public rendered Tom samples approved.*PENDING / reviewer / date" RELEASE_CHECKLIST.md` - PASS
- `bash -lc '! find examples/images ian-xiaohei-illustrations/assets/examples -type f | rg -i "(tom|tom-cat|tom-and-jerry|汤姆|汤姆猫)"'` - PASS
- `git diff --check` - PASS
- `rg -n "gated-authorized|assets/<article-slug>-tom/|assets/&lt;article-slug&gt;-tom/|PENDING / reviewer / date" README.md examples/prompts.md RELEASE_CHECKLIST.md` - PASS

## Known Stubs

- `RELEASE_CHECKLIST.md:48` - `PENDING / reviewer / date` is an intentional public rendered Tom sample approval gate required by Phase 6. It blocks public rendered Tom examples until maintainer review records approval.

## Next Phase Readiness

Phase 6 Plan 3 can add minimal validator checks for the shared `gated-authorized` contract, Tom path tokens, release checklist marker, and public rendered sample directory scan. The public docs and release checklist now expose the markers Plan 3 needs.

---
*Phase: 06-tom-rights-and-route-contract*
*Completed: 2026-06-13*

## Self-Check: PASSED

- Files found: `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, `.planning/phases/06-tom-rights-and-route-contract/06-02-SUMMARY.md`.
- Commits found: `e235524`, `59bf11b`.
