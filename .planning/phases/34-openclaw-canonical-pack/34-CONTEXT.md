---
phase: 34
status: discussed
requirements: [PACK-01, PACK-02, PACK-03, PACK-04, PACK-05]
depends_on: [33]
subagents_used:
  - gsd-assumptions-analyzer
  - default
---

# Phase 34 Context: OpenClaw Canonical Pack

## Goal

Create the OpenClaw route-local canonical pack so users can plan, prompt, edit, and QA OpenClaw article illustrations while preserving the uploaded red logo-mascot identity and existing route isolation.

## Current Inputs

- Phase 33 completed the `openclaw` route row, output path `assets/<article-slug>-openclaw/`, `default=false`, source-reviewed status, and source record.
- `references/ips/openclaw/source.md` is the authority for official repository, inspected snapshot, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public sample policy, distribution boundary, and review owner.
- Existing seven-file source-reviewed/product-neutral packs provide the closest implementation pattern: `references/ips/ferris/` and `references/ips/seal/`.

## Decided File Set

Phase 34 should leave the existing source record in place and add the six operational OpenClaw files:

- `ian-xiaohei-illustrations/references/ips/openclaw/index.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/openclaw-ip.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md`

Phase 34 should also update `references/routing.md` so the OpenClaw route row lists all seven route-local references after they exist.

## Assumptions

- OpenClaw remains `source-reviewed` in Phase 34.
- OpenClaw stays explicit and keeps `default=false`.
- Xiaohei remains the omitted-IP default.
- Public OpenClaw rendered samples remain gated by `RELEASE_CHECKLIST.md`.
- The uploaded red OpenClaw logo is the visual authority; generated prompts should describe stable markers without redesigning the character.

## OpenClaw Identity Markers

The operational pack should repeat these markers consistently:

- red round body
- side claw-like arms
- two antennae
- black eyes
- cyan pupils
- short legs

The shared identity note should describe OpenClaw as a red logo-derived mascot that performs the central cognitive article action in sparse 16:9 hand-drawn article illustrations.

## Failure Categories

Every operational file should repeat the same route block names so validator hardening can target them later:

- generic red mascot drift
- missing claws
- missing antennae
- missing cyan pupils
- product-poster drift
- passive placement
- excessive text
- route leakage
- copied composition

## Closest Analogs

- Use `references/ips/seal/index.md` for operational coherence wording and uploaded-image marker repetition.
- Use `references/ips/ferris/index.md` for source-reviewed route status and public-sample boundary wording.
- Use existing `prompt-template.md` files for planning fields, one-image prompt shape, edit prompts, and output reminder.
- Use existing `qa-checklist.md` files for pass/fail gates, repair prompts, and delivery judgment.

## Risks

- Identity drift into a generic red robot or generic mascot.
- Logo-derived character becomes decorative instead of performing the central article action.
- OpenClaw references leak into Xiaohei, Littlebox, Tom, Ferris, or Seal packs.
- Product poster language replaces article-illustration language.
- Routing points to files before they exist or misses the pack files after creation.

## Verification Strategy

Run after implementation:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
rg -n "generic red mascot drift|missing claws|missing antennae|missing cyan pupils|product-poster drift|OpenClaw planning fields gate|OpenClaw one-image generation gate|OpenClaw QA" ian-xiaohei-illustrations/references/ips/openclaw
```

## Acceptance Expectations

- OpenClaw has a seven-file route-local pack.
- Planning fields include OpenClaw state, OpenClaw action, core article idea, structure type, suggested objects, visible labels, and output path.
- Generation prompts make OpenClaw the action subject.
- Edit prompts cover stronger participation, uploaded-logo identity repair, title removal, text reduction, and unaffected-content preservation.
- QA rejects all Phase 34 failure categories.
