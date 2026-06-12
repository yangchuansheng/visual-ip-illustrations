---
phase: 07-tom-canonical-pack
plan: 02
subsystem: documentation
tags: [tom, composition, prompt-template, gated-authorized, protected-character]

requires:
  - phase: 07-01
    provides: Tom pack index, style DNA, and identity/status foundations.
  - phase: 06
    provides: Tom rights record, route metadata, NOTICE boundary, and gated route contract.
provides:
  - Tom composition families, metaphor invention rules, support-object pool, and protected-route composition gates.
  - Tom shot-list planning fields, one-image generation prompt, output reminder, and targeted edit prompts.
  - Stable Phase 10 marker phrases for Tom composition and prompt-template validation.
affects: [phase-07-tom-canonical-pack, phase-08-skill-controller-integration, phase-10-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Route-local protected-character composition rules.
    - English image-generation prompts with user-language visible labels.
    - Rights-status notes repeated across planning, generation, and edit surfaces.

key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md
    - ian-xiaohei-illustrations/references/ips/tom/prompt-template.md
    - .planning/phases/07-tom-canonical-pack/07-02-SUMMARY.md
  modified: []

key-decisions:
  - "Tom compositions use original article metaphors with Tom as the central cognitive action subject."
  - "Tom prompt surfaces keep planning and delivery notes in the user's language while image-generation prompts stay English and visible labels are quoted exactly in the user's language."
  - "Tom planning, generation, and edit prompts repeat `gated-authorized`, `rights.md`, and `assets/<article-slug>-tom/` where required."

patterns-established:
  - "Tom support-object pool centers article metaphors on evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, and warning marks."
  - "Tom edit prompts preserve unaffected content while targeting participation, identity, title, and text-density failures."

requirements-completed: [TOMP-02, TOMP-03, TOMP-05]

duration: 4min18s
completed: 2026-06-12
---

# Phase 7 Plan 2: Tom Composition and Prompt Template Summary

**Tom now has route-local composition rules and prompt surfaces for planning, generating, and repairing one-image protected-character article illustrations.**

## Performance

- **Duration:** 4min18s
- **Started:** 2026-06-12T18:51:39Z
- **Completed:** 2026-06-12T18:55:57Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Created Tom composition families for Workflow, System Local View, Before/After, Character State, Concept Metaphor, Method Layers, Map Route, and Mini Comic.
- Added the Tom original-metaphor gate, support-object pool, active-composition gate, and route-leakage composition gate.
- Created the Tom prompt template with exact shot-list fields, one standalone 16:9 generation prompt, route status, `rights.md` references, `assets/<article-slug>-tom/`, and edit prompts for participation, identity, title, text, and preservation repairs.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Tom composition patterns and metaphor rules** - `7a7a013` (docs)
2. **Task 2: Create Tom planning, generation, and edit prompt template** - `6ede4c9` (docs)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - Tom composition families, metaphor invention rules, action vocabulary, support-object pool, visible-label guidance, and protected-route gates.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Tom shot-list format, one-image generation prompt, output reminder, protected-route constraints, and edit prompts.
- `.planning/phases/07-tom-canonical-pack/07-02-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Tom composition planning uses original article metaphors and makes Tom the central cognitive action subject.
- Tom generation prompt text stays English for model consistency while visible labels are quoted exactly in the user's language.
- Rights-status wording appears on planning, generation, and every edit prompt surface.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed.
**Impact on plan:** Planned scope stayed bounded to the two Tom reference files and the execution summary.

## Issues Encountered

- `gsd-tools` was unavailable on PATH. The local GSD core shim at `/Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` worked for init and state loading. No repository changes were required.
- This repository uses `branching_strategy: none` on `main`, so the worktree-only branch guard was not applicable. Commits were created directly as requested.

## User Setup Required

None - no external service configuration required.

## Verification

- `test -f ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - PASS
- `rg -n "gated-authorized|rights.md|Workflow|System Local View|Before/After|Character State|Concept Metaphor|Method Layers|Map Route|Mini Comic|evidence slips|traps|levers|doors|paths|tools|piles|bridges|stamps|broken machines|Tom composition original-metaphor gate|Tom support-object pool|Tom active-composition gate|Tom route leakage composition gate" ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - PASS
- `test -f ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - PASS
- `rg -n "Placement|Core idea|Structure type|Tom state|Tom action|Supporting objects|Visible labels|Output path|Rights-status note|assets/<article-slug>-tom/|gated-authorized|rights.md|Generate one standalone 16:9 horizontal article illustration|no logos|title cards|source-frame recreation|default Jerry|broad cast|generic-cat drift|Tom planning fields gate|Tom one-image generation gate|Tom edit participation repair gate|Tom off-model identity repair gate|Tom title removal edit gate|Tom text reduction edit gate|Tom unaffected-content preservation gate" ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - PASS
- `rg -n "Tom planning fields gate|Tom one-image generation gate|Tom edit participation repair gate|assets/<article-slug>-tom/|gated-authorized" ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - PASS
- `node scripts/validate-skill-package.mjs` - PASS; summary `total=40 passed=40 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` - PASS; 8 tests passed.
- `git diff --check` - PASS.

## Known Stubs

None.

## Threat Flags

None.

## Next Phase Readiness

Phase 7 Plan 03 can add Tom QA checks against these composition and prompt surfaces. Phase 8 can later wire explicit Tom route selection to the existing route metadata and Tom pack references.

---
*Phase: 07-tom-canonical-pack*
*Completed: 2026-06-12*

## Self-Check: PASSED

- Files found: `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md`, `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`, `.planning/phases/07-tom-canonical-pack/07-02-SUMMARY.md`.
- Commits found: `7a7a013`, `6ede4c9`.
