---
phase: 30-seal-pack-debranding
plan: 02
subsystem: skill-references
tags: [codex-skill, seal-route, debranding, prompt-template, qa]

requires:
  - phase: phase-30-plan-01
    provides: Product-neutral Seal source, identity, style, and composition references
provides:
  - Product-neutral Seal prompt planning and generation gates
  - Product-neutral Seal edit prompt families
  - Hoodie Seal QA identity gate
  - Logo-free Seal QA gate
  - Product-neutral route isolation and article-metaphor QA gates
affects: [phase-31-public-docs-migration, phase-32-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Route-local Markdown prompt and QA files repeat deterministic route markers.
    - Prompt and QA wording use product-neutral article metaphors and Seal action verbs.

key-files:
  created:
    - .planning/phases/30-seal-pack-debranding/30-02-SUMMARY.md
  modified:
    - ian-xiaohei-illustrations/references/ips/seal/prompt-template.md
    - ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md
    - .planning/phases/30-seal-pack-debranding/deferred-items.md

key-decisions:
  - "Use source-history authority, hoodie seal identity note, and logo-free note across Seal prompt and QA references."
  - "Use product-neutral article metaphors and visible-label language copying in Seal generation prompts."
  - "Preserve Phase 32 ownership of stale validator and fixture cleanup."

patterns-established:
  - "Seal prompt templates expose planning, one-image generation, and edit gates around active Seal participation."
  - "Seal QA gates verify hoodie identity, logo-free output, route isolation, active cognitive participation, sparse labels, article-metaphor quality, and assets/<article-slug>-seal/ delivery."

requirements-completed: [PACK-02, PACK-03]

duration: 8min
completed: 2026-06-15
---

# Phase 30 Plan 02: Seal Prompt and QA Summary

**Product-neutral Seal prompt and QA rules with hoodie identity, logo-free output, active participation, and article-metaphor delivery gates**

## Performance

- **Duration:** 8 min
- **Started:** 2026-06-15T04:24:19Z
- **Completed:** 2026-06-15T04:32:15Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Rewrote `prompt-template.md` around active Seal planning fields, one-image generation gates, product-neutral supporting objects, exact hoodie identity markers, logo-free output, and `assets/<article-slug>-seal/` save reminders.
- Replaced old edit prompt families with Seal-specific repairs for stronger participation, hoodie identity, logo-free output, title removal, text reduction, route leakage, and unaffected-content preservation.
- Rewrote `qa-checklist.md` to require hoodie Seal identity, logo-free output, product-neutral route isolation, active cognitive participation, sparse labels, original article metaphor quality, and Seal delivery path reporting.

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite Seal prompt planning, generation, and edit templates** - `8bcc14a` (feat)
2. **Task 2: Rewrite Seal QA gates and delivery judgment** - `fc3be67` (feat)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` - Product-neutral Seal planning fields, generation template, edit prompt families, route markers, hoodie identity note, and logo-free note.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` - Hoodie identity gate, logo-free gate, product-neutral route isolation gate, article-metaphor gate, failure taxonomy, iteration moves, and delivery judgment.
- `.planning/phases/30-seal-pack-debranding/deferred-items.md` - Updated Phase 32 validator boundary with 30-02 prompt and QA impact.

## Decisions Made

- Prompt and QA files use `Seal`, `active`, `source-history authority`, `hoodie seal identity note`, `logo-free note`, and `assets/<article-slug>-seal/` as active route markers.
- Product-neutral article metaphors replace product/platform props in the Seal route-local prompt and QA guidance.
- Generated prompt language stays English while visible labels are copied exactly in the user's requested language.
- Phase 30 leaves public docs, NOTICE, release checklist, agent metadata, validator check IDs, and stale fixture hardening to Phase 31 and Phase 32.

## Deviations from Plan

None - plan scope and phase boundaries were executed as written.

## Issues Encountered

- `node scripts/validate-skill-package.mjs` currently reports 92/98 because Phase 32 has not updated stale Sealos/brand-owned route-local validator expectations for source, index, prompt, QA, IP, and no-logo checks.
- `node --test scripts/validate-skill-package.test.mjs` currently reports 51/66 for the same stale fixture boundary plus dependent zero-failure expectations.
- `git diff --check` passed.
- Focused 30-02 active leakage scan passed for `prompt-template.md` and `qa-checklist.md`.

## Deferred Issues

- Phase 32 owns validator check-id cleanup and stale leakage fixture hardening. Details are recorded in `.planning/phases/30-seal-pack-debranding/deferred-items.md`.

## Verification

- `node scripts/validate-skill-package.mjs` - Expected Phase 32 boundary failure: 92/98.
- `node --test scripts/validate-skill-package.test.mjs` - Expected Phase 32 boundary failure: 51/66.
- `git diff --check` - PASS.
- Focused Seal prompt and QA leakage scan - PASS.
- Task acceptance checks - PASS.

## Known Stubs

None.

## Threat Flags

None - this plan only modified static Markdown skill references and planning artifacts.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 31 can migrate public docs and release surfaces using the debranded Seal route-local prompt and QA contract. Phase 32 can then update validator check IDs and stale fixtures against the final public/runtime wording.

## Self-Check: PASSED

- Summary file exists at `.planning/phases/30-seal-pack-debranding/30-02-SUMMARY.md`.
- Task commits exist: `8bcc14a`, `fc3be67`.
- Key files exist: `prompt-template.md` and `qa-checklist.md` under `ian-xiaohei-illustrations/references/ips/seal/`.
- Focused route-local acceptance and leakage checks passed.

---
*Phase: 30-seal-pack-debranding*
*Completed: 2026-06-15*
