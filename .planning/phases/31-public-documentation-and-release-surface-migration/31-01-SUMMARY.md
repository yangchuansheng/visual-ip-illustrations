---
phase: 31-public-documentation-and-release-surface-migration
plan: 01
subsystem: public-docs
tags: [codex-skill, visual-ip, seal-route, release-surface, markdown]

requires:
  - phase: phase-30
    provides: Product-neutral Seal route-local prompt, edit, QA, source-history, and hoodie identity rules
provides:
  - Public README and prompt examples for active product-neutral Seal route
  - Seal source-history NOTICE boundary
  - Seal release checklist gates for hoodie identity, logo-free output, public samples, and Phase 32 evidence boundary
  - Runtime-facing SKILL.md and OpenAI metadata for explicit active Seal route
affects: [phase-32-seal-migration-validation-and-release-evidence]

tech-stack:
  added: []
  patterns:
    - Public docs expose active Seal route markers while historical Sealos wording stays bounded to provenance and Phase 32 validation context.
    - Phase 31 focused scans prove public/runtime surfaces while full validator and Node restoration remain a Phase 32 boundary.

key-files:
  created:
    - .planning/phases/31-public-documentation-and-release-surface-migration/31-01-SUMMARY.md
  modified:
    - README.md
    - examples/prompts.md
    - NOTICE.md
    - RELEASE_CHECKLIST.md
    - ian-xiaohei-illustrations/SKILL.md
    - ian-xiaohei-illustrations/agents/openai.yaml

key-decisions:
  - "Public and runtime-facing active route surfaces now present `Seal`, route id `seal`, status `active`, output suffix `seal`, and `assets/<article-slug>-seal/`."
  - "Seal public copy uses product-neutral hoodie seal, source-history authority, hoodie seal identity note, and logo-free note."
  - "Full validator check-id cleanup, stale Sealos fixtures, Node restoration, final evidence, and UAT remain Phase 32 scope."

patterns-established:
  - "Seal release surfaces use source-history review, hoodie identity review, logo-free wording review, prompt leakage scan, public asset policy, generated sample policy, and final Seal release review."
  - "Canonical `$visual-ip-illustrations` and legacy `$ian-xiaohei-illustrations` prompt surfaces both cover Seal route selection."

requirements-completed: [DOC-01, DOC-02, DOC-03, DOC-04]

duration: 34min
completed: 2026-06-15
---

# Phase 31 Plan 01: Public Documentation and Release Surface Migration Summary

**Active product-neutral Seal public docs, prompt examples, release gates, runtime instructions, and agent metadata with Phase 32 validation boundary preserved**

## Performance

- **Duration:** 34 min
- **Started:** 2026-06-15T04:42:00Z
- **Completed:** 2026-06-15T05:16:33Z
- **Tasks:** 3
- **Files modified:** 6

## Accomplishments

- Migrated `README.md` route inventory, output path list, route section, route references, workflow, directory tree, quick examples, and maintainer validation wording to active `Seal` route markers.
- Added canonical and legacy Seal prompt examples with product-neutral actions, route-local references, mixed-IP separation, and `assets/<article-slug>-seal/` path markers.
- Replaced NOTICE and release checklist active behavior with Seal source-history, hoodie identity, logo-free output, public sample review, and Phase 32 evidence boundary wording.
- Updated runtime skill instructions and OpenAI metadata so Seal is selectable as an explicit active product-neutral hoodie seal route while Visual IP Illustrations and `$ian-xiaohei-illustrations` compatibility remain stable.

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate README and prompt examples to active Seal route wording** - `5e27020` (docs)
2. **Task 2: Migrate NOTICE and release checklist to Seal source-history gates** - `67b6eeb` (docs)
3. **Task 3: Polish runtime-facing Seal wording and agent metadata, then run phase scans** - `4f0da41` (docs)

## Files Created/Modified

- `README.md` - Public route inventory, Seal route details, route references, workflow, output paths, directory tree, and validation boundary wording.
- `examples/prompts.md` - Canonical Seal prompts, legacy Seal smoke prompts, mixed-IP Seal groups, route smoke checks, action vocabulary, and path markers.
- `NOTICE.md` - Seal source-history boundary with product-neutral active behavior, hoodie identity, logo-free route behavior, bounded historical provenance, and public sample review fields.
- `RELEASE_CHECKLIST.md` - Seal release gates, smoke prompts, attribution review, public/generated sample policies, final review, path markers, and Phase 32 boundary.
- `ian-xiaohei-illustrations/SKILL.md` - Runtime-facing Seal selection, route-local reference wording, planning/generation/QA/delivery notes, and product-neutral repair wording.
- `ian-xiaohei-illustrations/agents/openai.yaml` - Agent discovery metadata for Visual IP Illustrations with explicit active product-neutral Seal route and legacy alias.

## Decisions Made

- Public and runtime active route surfaces now use `Seal`, route id `seal`, status `active`, output suffix `seal`, and `assets/<article-slug>-seal/`.
- Seal public copy uses source-history authority instead of brand ownership and uses product-neutral article metaphors instead of product/platform language.
- Phase 32 remains responsible for validator check IDs, stale Sealos leakage fixtures, Node test restoration, final release evidence, and UAT.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- The full global validator remains in the expected Phase 32 boundary state after public/runtime documentation migration: `Summary: total=98 passed=80 failed=18 skipped=0`.
- The Node validation suite remains in the expected Phase 32 boundary state after public/runtime documentation migration: `tests 66`, `pass 47`, `fail 19`.

## Verification

- `git diff --check` - PASS.
- Focused public docs active Seal scan - PASS.
- Route path marker scan - PASS.
- Agent metadata scan - PASS.
- `node scripts/validate-skill-package.mjs || ...Phase 31 note...` - Expected Phase 32 boundary note emitted.
- `node --test scripts/validate-skill-package.test.mjs || ...Phase 31 note...` - Expected Phase 32 boundary note emitted.

## Known Stubs

None. Stub scan only found release checklist wording about residual Han classification; it is documentation, not a placeholder or runtime stub.

## Threat Flags

None. This plan changed static Markdown and YAML documentation surfaces only.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 32 can now harden validator check IDs, stale Sealos leakage fixtures, Node regression tests, final evidence, stale scans, docs consistency, route migration smoke coverage, and UAT against the final Phase 31 public/runtime wording.

## Self-Check: PASSED

- Summary file exists at `.planning/phases/31-public-documentation-and-release-surface-migration/31-01-SUMMARY.md`.
- Task commits exist: `5e27020`, `67b6eeb`, `4f0da41`.
- Key modified files exist: `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, and `ian-xiaohei-illustrations/agents/openai.yaml`.
- Plan verification commands ran and produced the expected focused PASS results plus Phase 32 boundary notes for full validator and Node restoration.

---
*Phase: 31-public-documentation-and-release-surface-migration*
*Completed: 2026-06-15*
