---
phase: 14-docs-examples-and-release-surface
plan: "01"
subsystem: docs
tags: [readme, ferris, rust-community-mascot, release-surface, source-reviewed]

requires:
  - phase: 13-skill-controller-integration
    provides: Ferris route controller wiring with full seven-file route-local pack loading and mixed-IP separation
provides:
  - README Ferris route contract with aliases, raw and escaped output paths, pack path, source/trademark authority, public-sample gate, and planning fields
  - README Ferris quick prompts, four-IP comparison prompt, workflow parity, directory map, and Phase 15 validator boundary note
affects: [14-02, 14-03, 14-04, 15-validator-hardening, public-docs, release-checklist]

tech-stack:
  added: []
  patterns:
    - Chinese-first public docs with exact English/code route tokens preserved
    - Route-local source/trademark authority pointers for public release surfaces

key-files:
  created:
    - .planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md
  modified:
    - README.md

key-decisions:
  - "README keeps Xiaohei as the omitted-IP default while presenting Ferris as an explicit source-reviewed Rust-community mascot route."
  - "README points Ferris users and maintainers to the full route-local pack and source/trademark authority instead of duplicating the full source record."
  - "Validator implementation and Node green evidence remain assigned to Phase 15."

patterns-established:
  - "Ferris public route docs preserve the exact route phrase, aliases, raw and escaped path tokens, source authority, and public-sample release gate."
  - "Mixed-IP README examples present Xiaohei, Littlebox, Tom, and Ferris as separate route groups with route-specific output paths."

requirements-completed: [FDOC-01, FDOC-05]

duration: 4min
completed: 2026-06-13
---

# Phase 14 Plan 01: README Ferris Public Route Summary

**README Ferris route guidance now exposes the source-reviewed route contract, route-local pack, source/trademark authority, quick prompts, workflow parity, and Phase 15 validator boundary.**

## Performance

- **Duration:** 4 min
- **Started:** 2026-06-13T10:48:05Z
- **Completed:** 2026-06-13T10:51:22Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Added README Ferris route-local pack guidance with `ian-xiaohei-illustrations/references/ips/ferris/`, `source.md` source/trademark authority, raw and escaped output paths, public-sample release gate, and the required planning fields.
- Added compact Ferris planning and generation prompts, expanded the same-core comparison prompt to Xiaohei, Littlebox, Tom, and Ferris, and updated workflow parity for Ferris source-reviewed routing.
- Updated the README directory map with the seven-file Ferris pack and added the Phase 15 validator/test hardening boundary with the existing validator commands.

## Task Commits

1. **Task 1: Upgrade README Ferris route contract and source authority** - `3919dd8` (docs)
2. **Task 2: Add README Ferris quick prompts, workflow parity, and maintainer validation note** - `246f506` (docs)
3. **Task 3: Verify README scope fence and record execution evidence** - completed in this summary and metadata commit

## Files Created/Modified

- `README.md` - Public Ferris route docs, quick prompts, workflow parity, directory map, and maintainer validation wording.
- `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` - Execution evidence and requirement closure for 14-01.

## Decisions Made

- README uses the exact public Ferris phrase: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- README keeps Xiaohei as the only omitted-IP default; Ferris remains explicit and `source-reviewed`.
- README names the full Ferris pack path and `source.md` as source/trademark authority while keeping full consistency validation assigned to 14-04.
- Phase 15 remains responsible for validator/test hardening and green Node evidence.

## Verification

- Task 1 grep loop: passed.
- Task 2 grep loop: passed.
- `git diff --check`: passed.
- Scope fence before summary/state artifacts: passed with no implementation diff outside README.
- Validator scripts/tests remained untouched: `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` were not modified.

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None - stub scan found no placeholder, TODO, FIXME, empty hardcoded UI-flow values, or unwired data-source markers in files touched by this plan.

## Issues Encountered

- `gsd-tools` was not available on PATH in the shell session. The executor used the documented local CLI entrypoint via `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` for GSD state operations.
- `state.update-progress` derived incorrect STATE frontmatter values from the project's free-form ROADMAP format. The executor used registered GSD `state.update`, `state.record-session`, and `frontmatter.merge` handlers to restore the correct v1.2 milestone name, executing status, and 8/14 plan progress while keeping the updated Current Position body.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- 14-02 can update `examples/prompts.md` using the README Ferris route wording and prompt shape from this plan.
- 14-04 remains responsible for final cross-document consistency across README, examples, metadata, NOTICE, release checklist, and routing docs.
- Phase 15 remains responsible for validator/test expectation updates and green Node evidence.

## Self-Check: PASSED

- Found expected files: `README.md`, `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md`.
- Found task commits: `3919dd8`, `246f506`.
- No missing self-check items.

---
*Phase: 14-docs-examples-and-release-surface*
*Completed: 2026-06-13*
