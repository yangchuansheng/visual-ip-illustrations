---
phase: 14-docs-examples-and-release-surface
plan: "04"
subsystem: docs
tags: [release-checklist, notice, ferris, source-reviewed, phase-15-boundary]

requires:
  - phase: 13-skill-controller-integration
    provides: Ferris route controller wiring with full seven-file route-local pack loading and mixed-IP separation
  - phase: 14-docs-examples-and-release-surface
    provides: README, examples, and metadata Ferris public surface updates from 14-01, 14-02, and 14-03
provides:
  - Ferris release checklist gates for source review, Rust trademark wording, prompt leakage, public assets, generated samples, final release review, and Phase 15 evidence
  - Concise NOTICE Ferris source/trademark authority wording
  - Final FDOC-05 cross-document consistency evidence across README, examples, metadata, NOTICE, release checklist, and routing docs
affects: [15-validator-hardening, release-review, public-docs, ferris-route]

tech-stack:
  added: []
  patterns:
    - Release checklist gates record reviewer/date/status/channel outcomes for source and trademark-sensitive routes
    - Phase 15 validator/test boundaries stay documented in public docs while validator scripts remain untouched

key-files:
  created:
    - .planning/phases/14-docs-examples-and-release-surface/14-04-SUMMARY.md
  modified:
    - RELEASE_CHECKLIST.md
    - NOTICE.md
    - examples/prompts.md
    - ian-xiaohei-illustrations/references/routing.md
    - ian-xiaohei-illustrations/agents/openai.yaml

key-decisions:
  - "Ferris public release gates require source record review, Rust trademark wording review, prompt leakage scan, public asset approval, generated sample approval, and Phase 15 validator/test evidence before v1.2 release."
  - "NOTICE stays concise and points detailed Ferris allowed use, restricted use, distribution boundary, sample policy, and review owner details to source.md."
  - "A compact examples Phase 15 boundary sentence was added because the final FDOC-05 gate requires Phase 15 wording in README, examples, and release checklist."
  - "Agent metadata wording was reordered to keep default Xiaohei unambiguous for the Ferris default-route guard."

patterns-established:
  - "Final Ferris public-surface checks require exact route phrase, source-reviewed status, full pack path, source.md authority, raw and escaped output paths, public-sample gate, and Phase 15 boundary."
  - "Routing docs may carry full public path markers in addition to route-local relative references when release gates need cross-document parity."

requirements-completed: [FDOC-04, FDOC-05]

duration: 12min
completed: 2026-06-13
---

# Phase 14 Plan 04: Ferris Release Surface Summary

**Ferris release gates now cover source, trademark, leakage, public assets, generated samples, final review, and Phase 15 evidence boundaries.**

## Performance

- **Duration:** 12 min
- **Started:** 2026-06-13T11:18:09Z
- **Completed:** 2026-06-13T11:29:59Z
- **Tasks:** 4
- **Files modified:** 8

## Accomplishments

- Expanded `RELEASE_CHECKLIST.md` with Ferris source record review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, final release review, and Phase 15 validator/test evidence boundaries.
- Tightened `NOTICE.md` so the Ferris section remains concise while naming `source.md` as the operational source/trademark authority.
- Completed the final FDOC-05 gate across README, examples, metadata, NOTICE, release checklist, and routing docs, with compact parity syncs where the gate required them.

## Task Commits

1. **Task 1: Expand Ferris release checklist gates** - `c68dacd` (docs)
2. **Task 2: Tighten NOTICE Ferris source and trademark boundary consistency** - `81afecb` (docs)
3. **Task 4: Sync Ferris routing path markers** - `cc166c6` (docs)
4. **Task 3/4 continuation: Sync examples Phase 15 boundary and metadata wording** - `ae18cad` (docs)

## Files Created/Modified

- `RELEASE_CHECKLIST.md` - Ferris source, trademark, leakage, public asset, generated sample, final review, package boundary, public docs/path marker, and Phase 15 evidence gates.
- `NOTICE.md` - Concise Ferris source/trademark authority wording.
- `ian-xiaohei-illustrations/references/routing.md` - Full public Ferris pack and source authority markers for release parity.
- `examples/prompts.md` - Compact Phase 15 validator/test boundary sentence required by the final cross-document gate.
- `ian-xiaohei-illustrations/agents/openai.yaml` - Reordered metadata wording so default Xiaohei is unambiguous to the Ferris default-route guard.
- `.planning/phases/14-docs-examples-and-release-surface/14-04-SUMMARY.md` - Execution evidence and requirement closure for 14-04.

## Decisions Made

- `routing.md` received a compact wording sync because the final cross-document gate requires the full Ferris route-local pack path and `source.md` authority marker in routing docs.
- `examples/prompts.md` received a compact Phase 15 boundary sentence because the final FDOC-05 gate requires Phase 15 wording in README, examples, and release checklist.
- `openai.yaml` metadata was reordered after the final gate surfaced a false positive where `Ferris` and `默认使用 Xiaohei` appeared on the same line; the wording still preserves Xiaohei as default and Ferris as explicit `source-reviewed`.
- Validator implementation and Node green evidence remain assigned to Phase 15.

## Verification

- Release checklist grep loop: passed.
- NOTICE grep loop and line-count guard: passed with Ferris section at 15 lines.
- Final cross-document consistency gate: passed across README, examples, release checklist, routing docs, and `agents/openai.yaml`.
- `git diff --check`: passed.
- Scope fence: passed with changes limited to release docs, compact routing/examples/metadata syncs, and GSD artifacts.
- Validator scripts/tests remained untouched: `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` were not modified.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added compact examples Phase 15 boundary marker**
- **Found during:** Task 4 (Run final cross-document Ferris consistency gate)
- **Issue:** The final FDOC-05 gate required `Phase 15` in `examples/prompts.md`, while the first 14-04 scope fence did not allow editing that file.
- **Fix:** After the plan-scope decision in commit `353931a`, added one compact sentence: `Phase 15 owns validator/test expectation updates and green Node evidence for Ferris route checks.`
- **Files modified:** `examples/prompts.md`
- **Verification:** Final cross-document consistency gate passed.
- **Committed in:** `ae18cad`

**2. [Rule 3 - Blocking] Reordered metadata wording to satisfy the default-route guard**
- **Found during:** Task 4 (Run final cross-document Ferris consistency gate)
- **Issue:** `openai.yaml` correctly said omitted visual IP defaults to Xiaohei, but the same line listed Ferris before the default wording and triggered the Ferris-default guard.
- **Fix:** Reordered `short_description` so default Xiaohei appears before explicit Littlebox, Tom, and Ferris selection.
- **Files modified:** `ian-xiaohei-illustrations/agents/openai.yaml`
- **Verification:** Final cross-document consistency gate passed.
- **Committed in:** `ae18cad`

---

**Total deviations:** 2 auto-fixed (2 blocking)
**Impact on plan:** Both fixes were required for the plan's final FDOC-05 gate and preserved the intended route semantics.

## Known Stubs

None - stub scan found no placeholder, TODO, FIXME, empty hardcoded UI-flow values, or stale route marker text in files touched by this plan.

## Threat Flags

None - this plan changed documentation, metadata wording, and release review gates only. No new network endpoints, auth paths, file access patterns, schema changes, or runtime trust boundaries were introduced.

## Issues Encountered

- The first cross-document gate failed because `examples/prompts.md` lacked `Phase 15`; the user committed plan-scope decision `353931a`, allowing the compact examples sync.
- The second cross-document gate failed on a metadata wording false positive; the metadata wording was reordered to keep the default-route guard aligned with the intended semantics.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 14 public docs and release surface are complete for FDOC-04 and FDOC-05.
- Phase 15 can now update validator expectations and Node tests for the full Ferris route pack, route leakage checks, public asset gates, generated sample gates, parser tests, and green evidence.

## Self-Check: PASSED

- Found expected files: `RELEASE_CHECKLIST.md`, `NOTICE.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `.planning/phases/14-docs-examples-and-release-surface/14-04-SUMMARY.md`, `.planning/STATE.md`, `.planning/ROADMAP.md`, and `.planning/REQUIREMENTS.md`.
- Found task commits: `c68dacd`, `81afecb`, `cc166c6`, and `ae18cad`.
- No missing self-check items.

---
*Phase: 14-docs-examples-and-release-surface*
*Completed: 2026-06-13*
