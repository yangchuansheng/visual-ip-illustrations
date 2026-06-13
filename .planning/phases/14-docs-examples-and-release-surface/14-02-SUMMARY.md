---
phase: 14-docs-examples-and-release-surface
plan: "02"
subsystem: docs
tags: [examples, ferris, prompts, mixed-ip, source-reviewed]

requires:
  - phase: 13-skill-controller-integration
    provides: Ferris route controller wiring with full seven-file route-local pack loading and mixed-IP separation
  - phase: 14-docs-examples-and-release-surface
    provides: README Ferris route wording and public source/trademark guidance from 14-01
provides:
  - Copyable Ferris planning, generation, and text-only route smoke prompts
  - Four-IP mixed planning, generation, and maintainer smoke prompts across Xiaohei, Littlebox, Tom, and Ferris
  - Examples-level preservation of Ferris aliases, source-reviewed status, source authority, pack path, output path tokens, and public-sample release gate
affects: [14-03, 14-04, 15-validator-hardening, examples, prompt-fixtures]

tech-stack:
  added: []
  patterns:
    - Chinese-first copyable prompts with exact English/code route tokens preserved
    - Separate route groups for mixed-IP prompt fixtures

key-files:
  created:
    - .planning/phases/14-docs-examples-and-release-surface/14-02-SUMMARY.md
  modified:
    - examples/prompts.md

key-decisions:
  - "Ferris prompt examples use the full route-local pack and source.md source/trademark authority instead of a placeholder route marker."
  - "Mixed prompt examples now require Xiaohei, Littlebox, Tom, and Ferris as separate variant groups with route-specific fields and output directories."
  - "Validator implementation and Node green evidence remain assigned to Phase 15."

patterns-established:
  - "Ferris text smoke prompts assert aliases, source-reviewed status, full pack loading, raw and escaped output paths, planning fields, and public-sample release review."
  - "Mixed-IP examples keep Ferris route context isolated through references/ips/ferris/, source.md, source/trademark note, and assets/<article-slug>-ferris/."

requirements-completed: [FDOC-02, FDOC-05]

duration: 5min
completed: 2026-06-13
---

# Phase 14 Plan 02: Ferris Prompt Examples Summary

**Ferris prompt examples now provide copyable planning, generation, text-only smoke, and four-IP mixed route fixtures with source-reviewed routing and source/trademark boundaries.**

## Performance

- **Duration:** 5 min
- **Started:** 2026-06-13T10:58:15Z
- **Completed:** 2026-06-13T11:03:46Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Replaced the Ferris placeholder marker with copyable planning, generation, and route smoke prompts that preserve all six aliases, `source-reviewed`, full pack path, `source.md`, raw and escaped output paths, planning fields, and public-sample release-review wording.
- Updated mixed-IP planning, generation, and maintainer smoke prompts to require separate Xiaohei, Littlebox, Tom, and Ferris variant groups.
- Verified the prompt inventory with both plan grep loops, `git diff --check`, and the scope fence that keeps validator scripts and tests untouched.

## Task Commits

1. **Task 1: Replace Ferris placeholder with planning, generation, and smoke prompts** - `a57e55f` (docs)
2. **Task 2: Update mixed-IP prompts to four separate route groups** - `72b740a` (docs)
3. **Task 3: Verify prompt scope fence and record execution evidence** - completed in this summary and metadata commit

## Files Created/Modified

- `examples/prompts.md` - Ferris copyable prompts and four-IP mixed route prompt fixtures.
- `.planning/phases/14-docs-examples-and-release-surface/14-02-SUMMARY.md` - Execution evidence and requirement closure for 14-02.

## Decisions Made

- Ferris examples use `ian-xiaohei-illustrations/references/ips/ferris/` plus `ian-xiaohei-illustrations/references/ips/ferris/source.md` so users and maintainers copy the full route-local contract.
- Mixed prompts keep Xiaohei, Littlebox, Tom, and Ferris as separate route groups with route-local references, fields, QA gates, output directories, and public-sample gates.
- Phase 15 remains responsible for validator and Node test hardening; 14-02 verification uses grep and diff scope gates only.

## Verification

- Ferris prompt inventory grep loop: passed.
- Mixed-IP prompt grep loop: passed.
- Stale phrase scan for `route contract marker`, `Phase 14 负责 copyable Ferris prompt examples`, `同一观点生成三组`, and old three-IP mixed wording: passed.
- `git diff --check`: passed.
- Scope fence: passed, with no implementation diff outside `examples/prompts.md` before task commits and only GSD execution artifacts after summary creation.
- Validator scripts/tests remained untouched: `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` were not modified.

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None - stub scan found no placeholder, TODO, FIXME, empty hardcoded UI-flow values, or stale route marker text in files touched by this plan.

## Threat Flags

None - this plan changed copyable prompt documentation only and introduced no new network endpoints, auth paths, file access patterns, schema changes, or trust-boundary surfaces beyond the prompt examples covered by the plan threat model.

## Issues Encountered

- `gsd-tools` was not available on PATH in the shell session. The executor used the documented local CLI entrypoint via `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` for GSD state operations.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- 14-03 can update agent metadata using the same four-route wording and Ferris explicit `source-reviewed` boundary.
- 14-04 can use `examples/prompts.md` as the examples-side source for release checklist parity and final public docs consistency.
- Phase 15 remains responsible for validator/test expectation updates and green Node evidence.

## Self-Check: PASSED

- Found expected files: `examples/prompts.md`, `.planning/phases/14-docs-examples-and-release-surface/14-02-SUMMARY.md`.
- Found task commits: `a57e55f`, `72b740a`.
- No missing self-check items.

---
*Phase: 14-docs-examples-and-release-surface*
*Completed: 2026-06-13*
