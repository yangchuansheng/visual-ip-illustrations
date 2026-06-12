---
phase: 03-littlebox-vertical-slice
plan: 2
subsystem: skill-routing
tags: [codex-skill, littlebox, routing, markdown, attribution]
requires:
  - phase: 03-littlebox-vertical-slice
    provides: Canonical Littlebox IP pack under references/ips/littlebox/
provides:
  - Active Littlebox route metadata in references/routing.md
  - Littlebox alias, reference, output suffix, and attribution routing contract
  - Mixed-IP output directory separation guidance
affects: [phase-3-littlebox-runtime, skill-runtime, validation, documentation]
tech-stack:
  added: []
  patterns:
    - Markdown route table as the IP manifest
    - Route-owned output suffix and attribution metadata
key-files:
  created:
    - .planning/phases/03-littlebox-vertical-slice/03-02-SUMMARY.md
  modified:
    - ian-xiaohei-illustrations/references/routing.md
key-decisions:
  - "Activated Littlebox with exact aliases, six operational references, output suffix, attribution context, and active status."
  - "Kept Xiaohei as the default active route and preserved the Xiaohei route row exactly."
patterns-established:
  - "Active IP route rows list aliases, output suffix, required references, attribution context, and status in one table row."
  - "Mixed-IP requests use separate route groups and separate output directories."
requirements-completed: [ROUT-03, IPCK-02, LBOX-01, LBOX-02]
duration: 2min 42s
completed: 2026-06-12
---

# Phase 03 Plan 02: Littlebox Routing Summary

**Active Littlebox route with exact aliases, six canonical references, output suffix, source attribution, and mixed-IP output separation.**

## Performance

- **Duration:** 2min 42s
- **Started:** 2026-06-12T06:42:16Z
- **Completed:** 2026-06-12T06:44:58Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Replaced the inactive Littlebox route row with an active `littlebox` route.
- Added exact Littlebox aliases: `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton`.
- Pointed `required_references` to the six operational Littlebox pack files from Plan 03-01.
- Added route-level attribution context for `5km Littlebox Illustrations`, `okooo5km`, source URL, MIT, and inspected commit `37cd93e`.
- Added Littlebox output path guidance for `assets/<article-slug>-littlebox/` and mixed-IP separate route groups.

## Task Commits

1. **Task 1 and Task 2: Activate Littlebox route and output rules** - `a2267ac` (`feat(skill): activate Littlebox route`)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/routing.md` - Littlebox active route row, output path rules, and mixed-IP directory separation.
- `.planning/phases/03-littlebox-vertical-slice/03-02-SUMMARY.md` - execution evidence and closeout record.

## Decisions Made

- Used the exact active Littlebox row specified by the plan, including all six operational references.
- Preserved the Xiaohei row exactly by comparing the row before and after the edit.
- Kept broad runtime behavior and public docs for later Phase 3 plans because this plan owns only route metadata.

## Verification

All planned checks passed:

```bash
rg -n '`littlebox` \| Littlebox \| `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` \| `false` \| `littlebox` .* `active`|references/ips/littlebox/style-dna\.md|references/ips/littlebox/littlebox-ip\.md|references/ips/littlebox/composition-patterns\.md|references/ips/littlebox/language-and-labels\.md|references/ips/littlebox/prompt-template\.md|references/ips/littlebox/qa-checklist\.md|5km Littlebox Illustrations|okooo5km|37cd93e|MIT' ian-xiaohei-illustrations/references/routing.md && rg -n '`xiaohei` \| Xiaohei \| `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` \| `true` \| `illustrations` .* `active`|references/ips/xiaohei/style-dna\.md|references/ips/xiaohei/xiaohei-ip\.md|references/ips/xiaohei/composition-patterns\.md|references/ips/xiaohei/prompt-template\.md|references/ips/xiaohei/qa-checklist\.md' ian-xiaohei-illustrations/references/routing.md
```

```bash
rg -n "小盒|Littlebox|纸盒|paper-box|carton|assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox|variant group|separate route groups|output_suffix|required_references|selected IP|xiaohei.*default|小黑" ian-xiaohei-illustrations/references/routing.md
```

```bash
! rg -n "<stale Littlebox route markers from the prior inactive row>" ian-xiaohei-illustrations/references/routing.md
```

```bash
rg -n '`littlebox` \| Littlebox \| `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` \| `false` \| `littlebox`|references/ips/littlebox/(style-dna|littlebox-ip|composition-patterns|language-and-labels|prompt-template|qa-checklist)\.md|`active`|5km Littlebox Illustrations|37cd93e|assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox' ian-xiaohei-illustrations/references/routing.md && rg -n '`xiaohei` \| Xiaohei \| `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` \| `true` \| `illustrations`|references/ips/xiaohei/(style-dna|xiaohei-ip|composition-patterns|prompt-template|qa-checklist)\.md|assets/&lt;article-slug&gt;-illustrations|assets/<article-slug>-illustrations' ian-xiaohei-illustrations/references/routing.md && git diff --check -- ian-xiaohei-illustrations/references/routing.md
```

```bash
git diff --check -- ian-xiaohei-illustrations/references/routing.md
```

Additional checks:

```bash
git show HEAD:ian-xiaohei-illustrations/references/routing.md | sed -n '/| `xiaohei` /p' && sed -n '/| `xiaohei` /p' ian-xiaohei-illustrations/references/routing.md
```

```bash
rg -n "<stub and stale-route marker scan>" ian-xiaohei-illustrations/references/routing.md || true
```

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- `gsd-tools` was unavailable on PATH in this shell, so the plan was executed from the checked-in plan files and local git state.
- User write scope covered only `ian-xiaohei-illustrations/references/routing.md` and this SUMMARY file. GSD state, roadmap, and requirements files were left unchanged for the orchestrator or a later writer with those scopes.

## Known Stubs

None.

## Threat Flags

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Plan 03-03 can wire `SKILL.md` runtime behavior against the active Littlebox route:

- `littlebox` route aliases are active.
- `required_references` points to the six Littlebox operational pack files.
- Output suffix `littlebox` maps to `assets/<article-slug>-littlebox/`.
- Xiaohei remains the default active route.

## Self-Check: PASSED

- Found `ian-xiaohei-illustrations/references/routing.md` on disk.
- Found `.planning/phases/03-littlebox-vertical-slice/03-02-SUMMARY.md` on disk.
- Found commit `a2267ac` in git log.
- Re-ran task and plan verification commands successfully.
- Stub scan returned no matches in `routing.md`.

---
*Phase: 03-littlebox-vertical-slice*
*Completed: 2026-06-12*
