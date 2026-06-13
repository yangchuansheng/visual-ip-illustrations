---
phase: 19-docs-examples-and-release-surface
plan: 01
subsystem: docs
tags: [readme, sealos, public-docs, route-surface]
requires:
  - phase: 18-skill-controller-integration
    provides: Sealos Seal explicit controller route, aliases, output path, mixed-IP grouping, and delivery notes
provides:
  - README Sealos Seal public route guidance with brand-owned status, aliases, source authority, and output paths
  - README five-route workflow, mixed-IP example, package map, and maintainer validation wording
affects: [README, Phase 20 validator hardening, public release review]
tech-stack:
  added: []
  patterns: [Chinese-first public docs with English route/status/path tokens]
key-files:
  created: []
  modified: [README.md]
key-decisions:
  - "README presents Sealos Seal as an explicit brand-owned Sealos brand mascot route while preserving Xiaohei as the only omitted-IP default."
  - "Public rendered Sealos samples remain release-gated through RELEASE_CHECKLIST.md."
patterns-established:
  - "Sealos public docs use Sealos Seal, sealos, brand-owned, uploaded-image-canonical, uploaded-image-locked, and assets/<article-slug>-sealos/ consistently."
requirements-completed: [SDOC-01, SDOC-06]
duration: 5min
completed: 2026-06-13
---

# Phase 19 Plan 01: README Sealos Route Surface Summary

**README now exposes Sealos Seal as a brand-owned explicit route with uploaded-image authority, five-route examples, and release-gated public sample wording**

## Performance

- **Duration:** 5min
- **Started:** 2026-06-13T16:47:14Z
- **Completed:** 2026-06-13T16:51:50Z
- **Tasks:** 3
- **Files modified:** 1

## Accomplishments

- Updated README route overview and Sealos section with `brand-owned`, route id `sealos`, route-local directory, source authority, aliases, output suffix, raw path, and escaped path.
- Added README Sealos planning and generation examples plus five-route mixed-IP wording for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- Updated README workflow, package map, and maintainer validation commands to include Sealos Seal and current safety checks.

## Task Commits

Each task was committed atomically:

1. **Tasks 1-3: README Sealos route surface** - `4fe4465` (docs)

## Files Created/Modified

- `README.md` - Public Sealos Seal route documentation, five-route examples, package map, and validation command wording.

## Decisions Made

- README uses route-ready Sealos Seal wording from Phase 18 controller behavior and Phase 16-17 source authority.
- Public rendered Sealos samples stay behind release review and brand/logo wording review.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed.
**Impact on plan:** Scope stayed limited to README.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Verification

- `rg -n "Sealos Seal|brand-owned|Sealos brand mascot route|Sealos mascot|Sealos 吉祥物|Sealos 海豹|white Sealos seal|blue hoodie seal|assets/<article-slug>-sealos/|assets/&lt;article-slug&gt;-sealos/|output suffix|ian-xiaohei-illustrations/references/ips/sealos/|ian-xiaohei-illustrations/references/ips/sealos/source.md|uploaded mascot image|v1.3 canonical mascot reference|prior Sealos mascot exploration|Sealos logo marks on cap and chest|RELEASE_CHECKLIST.md" README.md` - passed
- `rg -n "Sealos Seal.*规划|Sealos Seal.*生成|Mascot state|Mascot action|Brand/canonical-image note|uploaded-image-canonical|uploaded-image-locked|Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal|Xiaohei.*Littlebox.*Tom.*Ferris.*Sealos Seal|public rendered Sealos samples" README.md` - passed
- `rg -n "references/ips/sealos|Sealos Seal|route id.*sealos|brand-owned|uploaded-image-canonical|uploaded-image-locked|node scripts/validate-skill-package.mjs|node --test scripts/validate-skill-package.test.mjs|git diff --check|RELEASE_CHECKLIST.md" README.md` - passed
- `node scripts/validate-skill-package.mjs` - passed, 66/66 checks
- `node --test scripts/validate-skill-package.test.mjs` - passed, 34/34 tests
- `git diff --check` - passed

## Known Stubs

None.

## Threat Flags

None.

## Next Phase Readiness

Ready for Plan 19-02 prompt example updates.

## Self-Check: PASSED

- `README.md` exists and contains the required Sealos route surface markers.
- Commit `4fe4465` exists in git history.

---
*Phase: 19-docs-examples-and-release-surface*
*Completed: 2026-06-13*
