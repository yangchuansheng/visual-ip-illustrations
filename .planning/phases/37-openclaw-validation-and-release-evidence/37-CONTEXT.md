---
phase: 37
name: OpenClaw Validation and Release Evidence
status: discussed
created: 2026-06-16T12:15:18Z
requirements:
  - VAL-01
  - VAL-02
  - VAL-03
  - VAL-04
  - VAL-05
depends_on:
  - Phase 36
---

# Phase 37 Context

## Original Need

Harden OpenClaw validation and release evidence so maintainers can verify the full route contract locally with deterministic validator output, Node regression tests, and final release evidence.

## Locked Inputs

- OpenClaw route id: `openclaw`.
- Display name: `OpenClaw`.
- Route status: `source-reviewed`.
- Default: `false`.
- Output suffix: `openclaw`.
- Output directory: `assets/<article-slug>-openclaw/`.
- Escaped docs marker: `assets/&lt;article-slug&gt;-openclaw/`.
- Source/license authority: `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- Canonical pack directory: `ian-xiaohei-illustrations/references/ips/openclaw/`.
- Uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Public rendered samples remain gated by `RELEASE_CHECKLIST.md`.
- Phase 36 intentionally left a compatibility marker for the historical five-route Seal mixed-IP validator anchor. Phase 37 owns converting the validation contract to first-class six-route OpenClaw parity.

## Decisions

1. Add explicit validator checks for OpenClaw public docs, runtime metadata, NOTICE attribution, prompt smoke, mixed-IP six-route behavior, release gates, and final evidence.
2. Preserve existing Xiaohei, Littlebox, Tom, Ferris, and Seal checks while adding OpenClaw-specific parity checks instead of weakening legacy coverage.
3. Replace the historical mixed-IP Seal compatibility anchor with a six-route mixed-IP check that requires OpenClaw route-local pack, source/license authority, output path, and public sample gate markers.
4. Keep public sample gate checks strict: rendered OpenClaw assets stay blocked unless release checklist approval fields are complete; generated workspace sample approval remains distinct from public rendered sample approval.
5. Add Node regression coverage for every new validator expectation and for drift fixtures covering docs, metadata, NOTICE, smoke prompts, release gates, leakage, public sample gates, and final evidence.
6. Create a final Phase 37 evidence artifact that records validator output, Node test output, `git diff --check`, OpenClaw route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.

## Scope

In scope:

- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`
- `examples/prompts.md` only if needed to remove the Phase 36 compatibility marker after validator parity lands
- `RELEASE_CHECKLIST.md` only if evidence wording or release gates need a stricter marker
- Phase 37 planning and evidence artifacts under `.planning/phases/37-openclaw-validation-and-release-evidence/`
- `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`, and `.planning/STATE.md` when closing Phase 37

Out of scope:

- New OpenClaw public rendered image assets.
- Changing OpenClaw route-local pack behavior except marker additions required for validation evidence.
- Changing existing route semantics, aliases, output paths, or default-route behavior.
- Localized README translation updates.

## Risks

- Adding OpenClaw checks by broad shared markers can create false positives across non-OpenClaw route packs.
- Replacing the historical five-route mixed-IP validator anchor can break older Seal tests unless Node fixtures are updated at the same time.
- Public sample gate parsing needs to keep pending approvals passing when no public assets exist and failing when public assets appear without complete approval.
- Final evidence can become stale if command outputs are summarized without exact pass counts.

## Verification Targets

- `node scripts/validate-skill-package.mjs` passes with an increased all-pass count after new OpenClaw checks land.
- `node --test scripts/validate-skill-package.test.mjs` passes with new fixture coverage.
- `git diff --check` passes.
- A Phase 37 evidence artifact records exact validator, Node, diff-check, smoke, docs consistency, leakage, and public-sample gate results.
- Requirements VAL-01 through VAL-05 are marked complete only after evidence exists.
