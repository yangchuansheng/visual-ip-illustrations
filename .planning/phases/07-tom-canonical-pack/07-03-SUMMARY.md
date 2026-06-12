---
phase: 07-tom-canonical-pack
plan: 03
subsystem: documentation
tags: [tom, qa-checklist, gated-authorized, protected-character, prompt-repair]

requires:
  - phase: 07-01
    provides: Tom pack index, style DNA, and identity/status foundations.
  - phase: 07-02
    provides: Tom composition patterns plus planning, generation, and edit prompt templates.
  - phase: 06
    provides: Tom rights record, route metadata, NOTICE boundary, and gated route contract.
provides:
  - Tom QA checklist with protected-route pass/fail criteria, repair moves, rights-status checks, and delivery judgment.
  - Cross-file Tom pack coherence for route status, rights pointers, output path, prompt markers, QA markers, and protected-route failures.
  - Stable Phase 10 marker phrases for Tom QA and protected-route validation.
affects: [phase-08-skill-controller-integration, phase-09-docs-examples-release-surface, phase-10-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Route-local protected-character QA gate.
    - Shared protected-route failure category wording across Tom operational references.
    - Targeted edit repair language aligned between prompt-template and QA.

key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md
    - .planning/phases/07-tom-canonical-pack/07-03-SUMMARY.md
  modified:
    - ian-xiaohei-illustrations/references/ips/tom/index.md
    - ian-xiaohei-illustrations/references/ips/tom/style-dna.md
    - ian-xiaohei-illustrations/references/ips/tom/tom-ip.md
    - ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md
    - ian-xiaohei-illustrations/references/ips/tom/prompt-template.md

key-decisions:
  - "Tom QA accepts only original solo Tom article metaphors where Tom performs the central cognitive action."
  - "Tom protected-route failures use shared wording across operational references: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage."
  - "Tom QA delivery requires `gated-authorized`, `rights.md`, and `assets/<article-slug>-tom/` to remain visible in the route context."

patterns-established:
  - "Tom QA repair categories map directly to prompt-template edit gates for participation, identity, title removal, text reduction, rights-status repair, route leakage repair, and unaffected-content preservation."
  - "Phase 10-ready Tom QA markers live in the route-local QA checklist while validator hardening remains deferred."

requirements-completed: [TOMP-01, TOMP-02, TOMP-03, TOMP-04, TOMP-05]

duration: 5min
completed: 2026-06-12
---

# Phase 7 Plan 3: Tom QA Checklist and Pack Coherence Summary

**Tom now has a route-local QA gate and consistent protected-route failure language across the canonical Tom pack.**

## Performance

- **Duration:** 5min
- **Started:** 2026-06-12T18:58:45Z
- **Completed:** 2026-06-12T19:03:26Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments

- Created `qa-checklist.md` with Tom pass criteria, protected-route failure signals, repair moves, rights-status handling, output path reminder, and delivery judgment.
- Added stable QA markers for protected-route validation, rights-status note validation, generic-cat failure, passive-placement failure, source-frame recreation failure, route-leakage failure, and unaffected-content preservation.
- Normalized shared protected-route failure categories across `index.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.

## Task Commits

Task work is committed atomically with the plan summary:

1. **Task 1: Create Tom QA checklist and protected-route repair guidance** - included in `docs(07-03): add Tom QA gate and pack coherence`.
2. **Task 2: Refine Tom pack coherence and Phase 10 markers** - included in `docs(07-03): add Tom QA gate and pack coherence`.

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - Tom protected-route QA checklist, pass/fail criteria, repair moves, rights-status gate, output path reminder, and delivery judgment.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Shared protected-route failure category list for pack navigation.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` - Protected-route visual vetoes now include excessive text and route leakage.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` - Tom failure modes now use the locked protected-route category names.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - Composition gates now include generic-cat drift, excessive text, and the shared protected-route block.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Generation and preservation edit prompts now include the shared protected-route block.
- `.planning/phases/07-tom-canonical-pack/07-03-SUMMARY.md` - Execution summary and verification record.

## Decisions Made

- Tom QA uses `gated-authorized` and `rights.md` as required route context for protected-character delivery.
- Accepted Tom images must keep Tom as the action subject and report `assets/<article-slug>-tom/`.
- Later surfaces remain scoped to later phases: SKILL.md controller wiring, public docs/examples, release checklist expansion, agent metadata, validator hardening, and public rendered examples.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed.
**Impact on plan:** Planned scope stayed bounded to Tom operational references and the execution summary.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Verification

- `find ian-xiaohei-illustrations/references/ips/tom -maxdepth 1 -type f -name '*.md' -print | sort` - PASS; seven Tom Markdown files are present, including `qa-checklist.md` and `rights.md`.
- `rg -n "Tom QA protected-route gate|Tom QA rights-status note gate|Tom planning fields gate|Tom one-image generation gate|assets/<article-slug>-tom/|gated-authorized" ian-xiaohei-illustrations/references/ips/tom` - PASS.
- `test -f ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - PASS.
- `rg -n "gated-authorized|rights.md|assets/<article-slug>-tom/|generic cats|passive Tom placement|source-frame recreation|show logos|title cards|default Jerry|broad cast expansion|excessive text|route leakage|16:9|one core idea|readable short labels|Tom identity recognizability|original article metaphor|Tom QA protected-route gate|Tom QA rights-status note gate|Tom QA generic-cat failure|Tom QA passive-placement failure|Tom QA source-frame recreation failure|Tom QA route-leakage failure|Tom QA unaffected-content preservation gate" ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - PASS.
- `bash -lc 'for f in ian-xiaohei-illustrations/references/ips/tom/index.md ian-xiaohei-illustrations/references/ips/tom/style-dna.md ian-xiaohei-illustrations/references/ips/tom/tom-ip.md ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md ian-xiaohei-illustrations/references/ips/tom/prompt-template.md ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md; do rg -n "gated-authorized|rights.md" "$f" >/dev/null || exit 1; done'` - PASS.
- `rg -n "Placement|Core idea|Structure type|Tom state|Tom action|Supporting objects|Visible labels|Output path|Rights-status note|Generate one standalone 16:9 horizontal article illustration" ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - PASS.
- `rg -n "assets/<article-slug>-tom/" ian-xiaohei-illustrations/references/ips/tom/index.md ian-xiaohei-illustrations/references/ips/tom/prompt-template.md ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - PASS.
- `rg -n "source-frame recreation|show logos|title cards|default Jerry|broad cast|generic-cat|route leakage|excessive text" ian-xiaohei-illustrations/references/ips/tom/style-dna.md ian-xiaohei-illustrations/references/ips/tom/tom-ip.md ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md ian-xiaohei-illustrations/references/ips/tom/prompt-template.md ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - PASS.
- `node scripts/validate-skill-package.mjs` - PASS; summary `total=40 passed=40 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` - PASS; 8 tests passed.
- `git diff --check` - PASS.
- `git diff --name-only` - PASS; only Tom pack files and this summary were modified.

## Known Stubs

None.

## Threat Flags

None.

## Next Phase Readiness

Phase 7 Tom canonical pack is internally coherent and ready for Phase 8 controller integration. Phase 10 can later harden validation against the stable Tom QA marker phrases and shared protected-route failure categories added here.

---
*Phase: 07-tom-canonical-pack*
*Completed: 2026-06-12*

## Self-Check: PASSED

- Files found: `ian-xiaohei-illustrations/references/ips/tom/index.md`, `ian-xiaohei-illustrations/references/ips/tom/style-dna.md`, `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md`, `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md`, `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`, `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`, `.planning/phases/07-tom-canonical-pack/07-03-SUMMARY.md`.
- Commit found: `docs(07-03): add Tom QA gate and pack coherence` in git history.
