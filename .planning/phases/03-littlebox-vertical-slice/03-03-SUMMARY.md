---
phase: 03-littlebox-vertical-slice
plan: 3
subsystem: skill-runtime
tags: [codex-skill, littlebox, routing, mixed-ip, markdown, image-prompts]
requires:
  - phase: 03-littlebox-vertical-slice
    provides: Canonical Littlebox IP pack under references/ips/littlebox/
  - phase: 03-littlebox-vertical-slice
    provides: Active Littlebox route metadata in references/routing.md
provides:
  - Littlebox selected-route runtime behavior in SKILL.md
  - Littlebox planning fields, language split, QA handoff, and output path rules
  - Mixed-IP variant group behavior with isolated references and paths
affects: [phase-3-littlebox-runtime, skill-runtime, validation, documentation]
tech-stack:
  added: []
  patterns:
    - Route-first Markdown skill runtime
    - Per-IP variant groups with route-owned references and output suffixes
key-files:
  created:
    - .planning/phases/03-littlebox-vertical-slice/03-03-SUMMARY.md
  modified:
    - ian-xiaohei-illustrations/SKILL.md
key-decisions:
  - "Kept route selection through references/routing.md before loading IP references."
  - "Made Littlebox runtime rules explicit in SKILL.md while keeping style, prompt, language, composition, and QA details in the Littlebox pack."
  - "Mixed-IP requests now share one core idea and split into isolated Xiaohei and Littlebox variant groups."
patterns-established:
  - "SKILL.md lists active IP packs in progressive references and loads selected required_references at runtime."
  - "Littlebox generation prompts stay English while visible labels, planning notes, and delivery notes follow the user's language."
requirements-completed: [ROUT-03, ROUT-04, IPCK-02, LBOX-02, LBOX-03, LBOX-04, LBOX-05, LBOX-06, LBOX-07]
duration: 5min
completed: 2026-06-12
---

# Phase 03 Plan 03: Littlebox Runtime Summary

**Littlebox route runtime in `SKILL.md` with aliases, selected references, planning fields, background balancing, language rules, QA handoff, mixed-IP groups, and output paths.**

## Performance

- **Duration:** 5min
- **Started:** 2026-06-12T06:49:42Z
- **Completed:** 2026-06-12T06:54:42Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Added Littlebox progressive references for the pack index and all six operational reference files.
- Added Littlebox alias selection for `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton` while preserving Xiaohei as the omitted-IP default route.
- Added Littlebox shot-list fields: placement, core idea, `Littlebox state: closed`, visual metaphor, assigned background, suggested objects, and short visible labels.
- Added Littlebox multi-image background balancing for `#E3F2FD` and `#E6E6FA`.
- Added Littlebox language split: English generation prompts with visible labels, planning notes, and delivery notes in the user's language.
- Added Littlebox QA handoff markers for closed lid, arm origin/count, tape placement, jagged tab, body color, linework, label style, background balance, and active placement.
- Added mixed-IP behavior where Xiaohei and Littlebox produce separate variant groups from one shared core idea, each with isolated references, QA, and output paths.
- Preserved Xiaohei output path `assets/<article-slug>-illustrations/` and Littlebox output path `assets/<article-slug>-littlebox/`.

## Task Commits

1. **Task 1: Add Littlebox selected-route references and planning fields** - `1110387` (`feat(skill): wire Littlebox runtime behavior`)
2. **Task 2: Wire Littlebox generation, mixed-IP groups, QA, and output path** - `1110387` (`feat(skill): wire Littlebox runtime behavior`)

## Files Created/Modified

- `ian-xiaohei-illustrations/SKILL.md` - Selected-route runtime behavior for Littlebox and mixed-IP requests.
- `.planning/phases/03-littlebox-vertical-slice/03-03-SUMMARY.md` - Execution evidence and closeout record.

## Decisions Made

- Kept `references/routing.md` as the first runtime reference so route metadata remains the source of aliases, required references, output suffixes, and attribution context.
- Kept Littlebox operational specifics in `references/ips/littlebox/` and used `SKILL.md` for route-level orchestration.
- Used one shared core idea for mixed-IP requests, then split output into separate Xiaohei and Littlebox variant groups.

## Verification

All planned checks passed:

```bash
rg -n "references/ips/littlebox/index\.md|references/ips/littlebox/style-dna\.md|references/ips/littlebox/littlebox-ip\.md|references/ips/littlebox/composition-patterns\.md|references/ips/littlebox/language-and-labels\.md|references/ips/littlebox/prompt-template\.md|references/ips/littlebox/qa-checklist\.md|小盒|Littlebox|纸盒|paper-box|carton|默认选择小黑|Littlebox state: closed|visual metaphor|assigned background|#E3F2FD|#E6E6FA|English.*prompt|user.?s language|visible labels|required_references" ian-xiaohei-illustrations/SKILL.md
```

```bash
rg -n "variant group|shared core idea|Xiaohei.*assets/&lt;article-slug&gt;-illustrations|Littlebox.*assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox|output_suffix|ordered English slug|selected IP|one block per IP|qa-checklist|open|half-open|raised flaps|cutaways|visible interiors|extra arms|wrong arm origin|missing jagged|wrong surface|tan|beige|vector|clean digital|background imbalance|passive" ian-xiaohei-illustrations/SKILL.md && rg -n "assets/&lt;article-slug&gt;-illustrations|references/ips/xiaohei|小黑|Xiaohei|Ian|ian-xiaohei" ian-xiaohei-illustrations/SKILL.md
```

```bash
rg -n "Littlebox|小盒|纸盒|paper-box|carton|references/ips/littlebox|Littlebox state: closed|visual metaphor|assigned background|#E3F2FD|#E6E6FA|English.*prompt|user.?s language|variant group|shared core idea|assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox|open|raised flaps|cutaways|visible interiors|extra arms|wrong tape|background imbalance" ian-xiaohei-illustrations/SKILL.md && rg -n "默认选择小黑|小黑|Xiaohei|Ian|ian-xiaohei|references/ips/xiaohei|assets/&lt;article-slug&gt;-illustrations|assets/<article-slug>-illustrations" ian-xiaohei-illustrations/SKILL.md && git diff --check -- ian-xiaohei-illustrations/SKILL.md
```

```bash
git diff --check -- ian-xiaohei-illustrations/SKILL.md
```

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- `gsd-tools` was unavailable on PATH in this shell, so execution used the checked-in plan files and local git state.
- User write scope covered only `ian-xiaohei-illustrations/SKILL.md` and this SUMMARY file. GSD state, roadmap, and requirements files were left unchanged for the orchestrator or a later writer with those scopes.

## Known Stubs

None.

## Threat Flags

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Plan 03-04 can update Littlebox attribution and minimal active-route public docs against an executable route:

- `SKILL.md` selects Littlebox aliases through the route-first workflow.
- Littlebox runtime behavior points to the canonical `references/ips/littlebox/` pack.
- Mixed-IP requests split Xiaohei and Littlebox variant groups with separate output paths.
- Littlebox saves to `assets/<article-slug>-littlebox/` and Xiaohei remains on `assets/<article-slug>-illustrations/`.

## Self-Check: PASSED

- Found `ian-xiaohei-illustrations/SKILL.md` on disk.
- Found `.planning/phases/03-littlebox-vertical-slice/03-03-SUMMARY.md` on disk.
- Found task commit `1110387` in git log.
- Re-ran plan verification and `git diff --check` successfully.
- Stub scan returned no matches in `SKILL.md`.

---
*Phase: 03-littlebox-vertical-slice*
*Completed: 2026-06-12*
