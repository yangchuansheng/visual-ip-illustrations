---
phase: 35
name: OpenClaw Skill Controller Integration
status: discussed
created: 2026-06-16T11:42:00Z
requirements:
  - DOC-04
  - DOC-05
depends_on:
  - Phase 34
---

# Phase 35 Context

## Original Need

Wire OpenClaw into the runtime skill controller so users can invoke the explicit `openclaw` route through `SKILL.md` while mixed-IP route isolation remains intact.

## Locked Inputs

- Phase 34 provides the seven-file OpenClaw pack:
  - `references/ips/openclaw/index.md`
  - `references/ips/openclaw/source.md`
  - `references/ips/openclaw/style-dna.md`
  - `references/ips/openclaw/openclaw-ip.md`
  - `references/ips/openclaw/composition-patterns.md`
  - `references/ips/openclaw/prompt-template.md`
  - `references/ips/openclaw/qa-checklist.md`
- Route id: `openclaw`.
- Display name: `OpenClaw`.
- Default: `false`.
- Route status: `source-reviewed`.
- Source/license authority: `references/ips/openclaw/source.md`.
- Output suffix: `openclaw`.
- Output directory: `assets/<article-slug>-openclaw/`.
- Uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Xiaohei remains the omitted-IP default.

## Decisions

1. Update only `ian-xiaohei-illustrations/SKILL.md` during Phase 35.
2. Keep the existing route-controller pattern and add OpenClaw wherever Seal, Ferris, and Tom already have route-specific runtime surface.
3. Load only `references/ips/openclaw/` files for the OpenClaw route.
4. Mixed-IP workflows split OpenClaw into its own route group with its own prompt template, QA, edit repairs, output suffix, route note, and output directory.
5. Generation and repair behavior must carry the source-reviewed note, source/license pointer, uploaded-logo identity note, and output path.
6. Delivery reports include an OpenClaw block with selected IP, shared core idea, image purposes, saved path, route status, source/license note, uploaded-logo identity status, route isolation status, and stability notes.

## Scope

In scope:

- `SKILL.md` frontmatter description.
- Visual IP route summary.
- Reference Loading list.
- Route Selection rules.
- Shot-list planning fields.
- Mixed-IP group text.
- Generation prompt routing.
- QA and repair routing.
- Save paths.
- Output contract and route-leakage delivery guard.

Out of scope:

- README, examples, NOTICE, release checklist, and `agents/openai.yaml`; Phase 36 owns those surfaces.
- Validator parity hardening; Phase 37 owns those checks.
- New image assets or public rendered samples.
- Changes to Xiaohei, Littlebox, Tom, Ferris, or Seal behavior beyond adding OpenClaw to existing mixed-route lists.

## Risks

- Route parity drift if OpenClaw is added to routing but missed in one `SKILL.md` surface.
- Route leakage if OpenClaw delivery mentions other IP identities or if other route blocks inherit OpenClaw wording.
- Output path drift between routing and controller text.
- Prompt drift into product poster or generic mascot behavior if the generation section omits the action-subject rule.

## Verification Targets

- `rg` confirms OpenClaw appears in every expected `SKILL.md` controller surface.
- Existing validator passes: `node scripts/validate-skill-package.mjs`.
- Existing Node tests pass: `node --test scripts/validate-skill-package.test.mjs`.
- `git diff --check` passes.
