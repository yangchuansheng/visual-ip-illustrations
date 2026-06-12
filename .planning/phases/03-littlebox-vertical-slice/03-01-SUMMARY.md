---
phase: 03-littlebox-vertical-slice
plan: 1
subsystem: skill-references
tags: [codex-skill, littlebox, ip-pack, markdown, image-prompts]
requires:
  - phase: 01-routing-foundation
    provides: route metadata shape and route-first workflow contract
  - phase: 02-xiaohei-canonicalization
    provides: canonical IP pack pattern and Xiaohei compatibility baseline
provides:
  - Canonical Littlebox IP pack under references/ips/littlebox/
  - Littlebox source provenance and output path in pack index
  - Littlebox style, identity, composition, language, prompt, and QA contracts
affects: [phase-3-littlebox-route, skill-runtime, notice-attribution, validation]
tech-stack:
  added: []
  patterns:
    - Markdown-only IP reference pack
    - English image prompts with user-language visible labels
key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/littlebox/index.md
    - ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md
    - ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md
    - ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md
    - ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md
    - ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md
    - ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md
    - .planning/phases/03-littlebox-vertical-slice/03-01-SUMMARY.md
  modified: []
key-decisions:
  - "Adapted Littlebox source rules into concise local Markdown references while preserving hard identity, prompt, QA, language, background, output, and attribution markers."
  - "Kept rendered Littlebox images out of the repository for this plan."
patterns-established:
  - "Littlebox IP pack mirrors the canonical pack pattern with a dedicated language-and-labels reference."
  - "Littlebox prompts remain English while visible labels are quoted in the user's language."
requirements-completed: [IPCK-02, LBOX-01, LBOX-02, LBOX-03, LBOX-04, LBOX-05, LBOX-06, LBOX-07]
duration: 4min 19s
completed: 2026-06-12
---

# Phase 03 Plan 01: Littlebox Canonical Pack Summary

**Canonical Littlebox IP pack with source attribution, closed-box identity, balanced pale backgrounds, English prompt templates, user-language labels, and QA fail signals.**

## Performance

- **Duration:** 4min 19s
- **Started:** 2026-06-12T06:34:55Z
- **Completed:** 2026-06-12T06:39:15Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments

- Created the seven-file Littlebox pack under `ian-xiaohei-illustrations/references/ips/littlebox/`.
- Recorded source project, author, repository URL, MIT context, copyright, full inspected commit, short commit, and output path in `index.md`.
- Preserved Littlebox hard markers: `closed-only`, `front-left three-quarter`, dot eyes, tiny legs, side-seam twig arms, amber seam tape, jagged torn front tab, `#E3F2FD`, `#E6E6FA`, background balance, English prompt/user-language labels, `Littlebox state: closed`, output path, and QA fail signals.

## Task Commits

1. **Task 1: Create Littlebox navigation, style, and identity references** - `b9811da` (`feat(skill): add Littlebox canonical pack foundation`)
2. **Task 2: Create Littlebox composition, language, prompt, and QA references** - `cab3512` (`feat(skill): add Littlebox prompt and QA references`)

## Files Created

- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - pack navigation, output path, and source attribution.
- `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` - Littlebox visual language, palette, background balance, marker texture, label style, and visual vetoes.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` - closed paper-box identity, anatomy, action vocabulary, recognition rule, and failure modes.
- `ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md` - composition families, metaphor invention, spatial rules, flow marks, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` - English prompt and user-language visible-label contract.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` - Littlebox planning format, single-image prompt template, edit prompts, and output path reminder.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` - Littlebox QA pass criteria, fail signals, iteration moves, and delivery judgment.
- `.planning/phases/03-littlebox-vertical-slice/03-01-SUMMARY.md` - execution evidence and closeout record.

## Decisions Made

- Used concise adapted wording from `okooo5km/5km-littlebox-illustrations` at `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`).
- Preserved operational Littlebox constraints in local references instead of importing rendered example images.
- Added explicit `wrong tape` and `missing jagged` markers in QA to keep future grep validation stable.

## Verification

All planned checks passed:

```bash
test -f ian-xiaohei-illustrations/references/ips/littlebox/index.md && test -f ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md && test -f ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md && rg -n "style-dna\\.md|littlebox-ip\\.md|composition-patterns\\.md|language-and-labels\\.md|prompt-template\\.md|qa-checklist\\.md|assets/<article-slug>-littlebox|5km Littlebox Illustrations|okooo5km|37cd93ee516da0324577b7bbc8ca3146e5c8d8d7|37cd93e|MIT|Copyright \\(c\\) 2026 okooo5km" ian-xiaohei-illustrations/references/ips/littlebox/index.md && rg -n "#E3F2FD|#E6E6FA|background balance|thick rough black marker|dry-brush|near-white|amber|coral|generous whitespace" ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md && rg -n "closed-only|front-left three-quarter|dot eyes|tiny legs|side-seam twig arms|at most two|amber seam tape|jagged torn front tab|near-white body|closed lid" ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md
```

```bash
for f in composition-patterns language-and-labels prompt-template qa-checklist; do test -f "ian-xiaohei-illustrations/references/ips/littlebox/$f.md" || exit 1; done && rg -n "intake|packaging|before/after|handoff|hidden interior|pressure|overflow|evidence|mini comic|anti-repeat" ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md && rg -n "English.*prompt|user.?s language|visible labels|3-6|rough handwritten marker|quoted" ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md && rg -n "Littlebox state: closed|Visual metaphor|Background|#E3F2FD|#E6E6FA|Labels|English|user.?s language|assets/<article-slug>-littlebox" ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md && rg -n "open|half-open|raised flaps|cutaway|visible interior|extra arms|wrong arm|wrong tape|missing jagged|tan|beige|vector|passive|background.*balance|clean digital" ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md
```

```bash
for f in index style-dna littlebox-ip composition-patterns language-and-labels prompt-template qa-checklist; do test -f "ian-xiaohei-illustrations/references/ips/littlebox/$f.md" || exit 1; done && rg -n "assets/<article-slug>-littlebox|37cd93e|closed-only|front-left three-quarter|#E3F2FD|#E6E6FA|Littlebox state: closed|English.*prompt|user.?s language|open|raised flaps|cutaway|visible interior|extra arms|wrong tape|background.*balance" ian-xiaohei-illustrations/references/ips/littlebox/*.md && git diff --check -- ian-xiaohei-illustrations/references/ips/littlebox
```

```bash
git diff --check -- ian-xiaohei-illustrations/references/ips/littlebox
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Verification Hardening] Added explicit QA marker wording**
- **Found during:** Task 2
- **Issue:** QA semantics covered tape placement and jagged-tab failure, while later grep-based validation benefits from exact `wrong tape` and `missing jagged` markers.
- **Fix:** Added one fail-signal line to `qa-checklist.md`.
- **Files modified:** `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md`
- **Verification:** Task 2 and plan-level grep commands passed.
- **Committed in:** `cab3512`

---

**Total deviations:** 1 auto-fixed (Rule 2)
**Impact on plan:** Verification stability improved within the planned QA scope.

## Issues Encountered

- Direct `gsd-tools` was unavailable on PATH in this shell; the SDK fallback `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` loaded init and state successfully.
- User write scope covered the seven Littlebox files and this SUMMARY file. GSD state, roadmap, and requirements files were left unchanged and should be advanced by the orchestrator or a later writer with those scopes.

## Known Stubs

None.

## Threat Flags

None.

## User Setup Required

None.

## Next Phase Readiness

Plan 03-02 can activate the Littlebox route against real pack files:

- `style-dna.md`
- `littlebox-ip.md`
- `composition-patterns.md`
- `language-and-labels.md`
- `prompt-template.md`
- `qa-checklist.md`

Route activation should point Littlebox `required_references` at these files and use `assets/<article-slug>-littlebox/` as the output path.

## Self-Check: PASSED

- Found all seven Littlebox pack files on disk.
- Found task commits `b9811da` and `cab3512` in git log.
- Re-ran task and plan verification commands successfully.
- Stub scan returned no matches for placeholder patterns in the created Littlebox pack.

---
*Phase: 03-littlebox-vertical-slice*
*Completed: 2026-06-12*
