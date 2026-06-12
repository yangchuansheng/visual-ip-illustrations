---
phase: 03-littlebox-vertical-slice
plan: 4
subsystem: documentation
tags: [codex-skill, littlebox, attribution, routing-docs, prompts]
requires:
  - phase: 03-littlebox-vertical-slice
    provides: Active Littlebox route metadata in references/routing.md
  - phase: 03-littlebox-vertical-slice
    provides: Littlebox selected-route runtime behavior in SKILL.md
provides:
  - Littlebox source attribution and MIT context in NOTICE.md
  - Minimal active Littlebox route wording in README.md
  - Compact Littlebox and mixed-IP smoke prompts in examples/prompts.md
affects: [phase-3-littlebox-verification, phase-4-validation, phase-5-public-docs]
tech-stack:
  added: []
  patterns:
    - Minimal public docs update for newly active visual IP route
    - Attribution markers in NOTICE.md for adapted source material
key-files:
  created:
    - .planning/phases/03-littlebox-vertical-slice/03-04-SUMMARY.md
  modified:
    - NOTICE.md
    - README.md
    - examples/prompts.md
key-decisions:
  - "Kept Phase 3 docs changes limited to attribution, active-route wording, output paths, and smoke prompts."
  - "Left broad README/examples redesign, agent metadata wording, release checklist, and rendered public example expansion for Phase 5."
patterns-established:
  - "README route wording lists active IPs, aliases, output paths, routing metadata, and canonical pack paths."
  - "examples/prompts.md includes copyable explicit Littlebox and mixed-IP smoke prompts while preserving Xiaohei prompts."
requirements-completed: [ROUT-03, ROUT-04, LBOX-01, LBOX-02, DOCS-04]
duration: 3min 56s
completed: 2026-06-12
---

# Phase 03 Plan 04: Littlebox Attribution and Public Route Docs Summary

**Littlebox attribution and minimal public route wording with aliases, output paths, mixed-IP variant prompts, and Phase 5 scope preserved.**

## Performance

- **Duration:** 3min 56s
- **Started:** 2026-06-12T06:56:49Z
- **Completed:** 2026-06-12T07:00:45Z
- **Tasks:** 3
- **Files modified:** 4

## Accomplishments

- Added Littlebox source attribution to `NOTICE.md` with source project, author, URL, MIT context, full inspected commit, short commit, copyright, adapted-source wording, and derived-documentation credit guidance.
- Updated `README.md` so the route section lists Xiaohei and Littlebox as active routes, keeps Xiaohei as default, lists Littlebox aliases, documents `assets/<article-slug>-littlebox/`, and points maintainers to `references/ips/littlebox/`.
- Updated `examples/prompts.md` with one explicit Littlebox route smoke prompt and one mixed-IP variant group prompt while preserving existing Xiaohei prompts and output path examples.
- Confirmed `agents/openai.yaml` and rendered example image directories stayed outside this plan.

## Task Commits

1. **Task 1: Add Littlebox attribution to NOTICE.md** - `4773815` (`docs(03-04): add Littlebox source attribution`)
2. **Task 2: Refresh only stale Littlebox route wording in README and examples** - `f884c7f` (`docs(03-04): add active Littlebox route prompts`)
3. **Task 3: Verify Phase 3 docs boundary and asset import boundary** - verification-only task; no production file changes after verification.

## Files Created/Modified

- `NOTICE.md` - Littlebox source attribution and MIT license context.
- `README.md` - Minimal active Littlebox route wording, aliases, output path, canonical pack path, and directory tree update.
- `examples/prompts.md` - Littlebox route smoke prompt and mixed-IP variant group prompt.
- `.planning/phases/03-littlebox-vertical-slice/03-04-SUMMARY.md` - execution evidence and closeout record.

## Decisions Made

- Kept README and examples edits focused on stale active-route wording and copyable smoke prompts.
- Preserved existing Xiaohei prompt examples and `assets/<article-slug>-illustrations/` references.
- Left broad public documentation refresh, agent metadata wording, release checklist, and public example expansion to Phase 5.

## Verification

All planned checks passed:

```bash
rg -n "5km Littlebox Illustrations|okooo5km|https://github.com/okooo5km/5km-littlebox-illustrations|MIT|37cd93ee516da0324577b7bbc8ca3146e5c8d8d7|37cd93e|Copyright \(c\) 2026 okooo5km|adapted|derived documentation|Ian Xiaohei Illustrations" NOTICE.md
```

```bash
rg -n "Littlebox|小盒|纸盒|paper-box|carton|assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox|references/ips/littlebox|variant group|Xiaohei|小黑|assets/&lt;article-slug&gt;-illustrations|assets/<article-slug>-illustrations" README.md examples/prompts.md && ! rg -n "Littlebox 的执行规则、提示词、QA 和完整输出行为由 Phase 3 交付|Phase 1 只记录多 IP 路由意图|Littlebox 组由 Phase 3 交付" README.md examples/prompts.md
```

```bash
rg -n "5km Littlebox Illustrations|okooo5km|https://github.com/okooo5km/5km-littlebox-illustrations|MIT|37cd93ee516da0324577b7bbc8ca3146e5c8d8d7|37cd93e|Copyright \(c\) 2026 okooo5km" NOTICE.md && rg -n "Littlebox|小盒|纸盒|paper-box|carton|assets/&lt;article-slug&gt;-littlebox|assets/<article-slug>-littlebox|references/ips/littlebox|variant group" README.md examples/prompts.md && rg -n "Xiaohei|小黑|Ian|ian-xiaohei|assets/&lt;article-slug&gt;-illustrations|assets/<article-slug>-illustrations" README.md examples/prompts.md && test -z "$(git diff --name-only -- ian-xiaohei-illustrations/agents/openai.yaml)" && (find examples/images ian-xiaohei-illustrations/assets/examples -type f | rg -i 'littlebox|小盒|carton' && exit 1 || true) && git diff --check -- NOTICE.md README.md examples/prompts.md
```

```bash
git diff --name-only 4773815^..f884c7f -- README.md examples/prompts.md NOTICE.md ian-xiaohei-illustrations/agents/openai.yaml examples/images ian-xiaohei-illustrations/assets/examples && git diff 4773815^..f884c7f -- README.md examples/prompts.md NOTICE.md | rg -n "Littlebox|littlebox|小盒|纸盒|paper-box|carton|37cd93|okooo5km|MIT|variant group|references/ips/littlebox|assets.*littlebox" && test -z "$(git diff --name-only 4773815^..f884c7f -- ian-xiaohei-illustrations/agents/openai.yaml)" && (find examples/images ian-xiaohei-illustrations/assets/examples -type f | rg -i 'littlebox|小盒|carton' && exit 1 || true) && git diff --check 4773815^..f884c7f -- NOTICE.md README.md examples/prompts.md
```

```bash
git diff --check
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Verification Timing] Re-ran boundary check against the committed plan range**
- **Found during:** Task 3
- **Issue:** The task-level boundary command used working-tree diff. After Task 1 and Task 2 were already committed, the working tree had no docs diff for `rg` to inspect.
- **Fix:** Re-ran the same boundary check against `4773815^..f884c7f`, the exact commit range produced by this plan.
- **Files modified:** None.
- **Verification:** Commit-range boundary check passed and confirmed only `NOTICE.md`, `README.md`, and `examples/prompts.md` changed.
- **Committed in:** N/A, verification-only adjustment.

---

**Total deviations:** 1 auto-fixed (Rule 3)
**Impact on plan:** Verification evidence now matches the committed execution order.

## Issues Encountered

- Direct `gsd-tools` was unavailable on PATH in this shell; the SDK fallback `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` loaded init and state successfully.
- User write scope covered only `NOTICE.md`, `README.md`, `examples/prompts.md`, and this SUMMARY file. GSD state, roadmap, and requirements files were left unchanged for the orchestrator or a later writer with those scopes.

## Known Stubs

None.

## Threat Flags

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Plan 03-05 can verify the Littlebox vertical slice against active route docs and attribution:

- `NOTICE.md` contains complete Littlebox source, license, commit, copyright, adapted-source, and derived-documentation markers.
- README and examples expose Littlebox aliases and `assets/<article-slug>-littlebox/`.
- Mixed-IP prompts and docs describe separate variant groups and separate output directories.
- Agent metadata wording, release checklist, broad examples, and public rendered image expansion remain Phase 5 work.

## Self-Check: PASSED

- Found `NOTICE.md`, `README.md`, `examples/prompts.md`, and `.planning/phases/03-littlebox-vertical-slice/03-04-SUMMARY.md` on disk.
- Found task commits `4773815` and `f884c7f` in git log.
- Re-ran task and plan verification commands successfully.
- Stub scan returned no matches in `NOTICE.md`, `README.md`, or `examples/prompts.md`.

---
*Phase: 03-littlebox-vertical-slice*
*Completed: 2026-06-12*
