---
phase: 35
status: complete
created: 2026-06-16T11:55:00Z
research_subagent: attempted
research_subagent_result: timed_out_without_artifact
---

# Phase 35 Research

## Research Question

How should OpenClaw be wired into `ian-xiaohei-illustrations/SKILL.md` so runtime behavior matches the Phase 34 route-local pack and preserves mixed-IP isolation?

## Current Runtime Pattern

`SKILL.md` is the runtime controller. It:

- Presents the route catalog in frontmatter and `## Visual IP Routes`.
- Lists all route-local references in `## Reference Loading`.
- Selects a route in `### 1. Select the Visual IP Route`.
- Defines route-specific shot-list fields in `### 3. Plan the Shot List First`.
- Defines route-specific generation prompt requirements in `### 4. Generate One Image at a Time`.
- Defines route-specific QA and repair behavior in `### 5. QA and Iteration`.
- Defines active route paths and delivery blocks in `### 6. Save and Deliver` and `## Output Contract`.

Seal is the closest pattern for Phase 35 because it has route-specific identity, source pointer, QA, repair prompts, output path, and mixed-IP delivery text.

## Required OpenClaw Insertions

Update `SKILL.md` in these surfaces:

1. Frontmatter description: add OpenClaw to explicit selectable routes.
2. `## Visual IP Routes`: add OpenClaw route summary and uploaded-logo identity note.
3. `## Reference Loading`: list all seven OpenClaw pack files.
4. `### 1. Select the Visual IP Route`: add aliases, output path, source/license pointer, required references, mixed-IP route lists, and route-isolated group behavior.
5. `### 3. Plan the Shot List First`: add OpenClaw shot-list fields and mixed-IP variant group.
6. `### 4. Generate One Image at a Time`: add OpenClaw generation routing, prompt markers, repair behavior, and mixed-IP generation.
7. `### 5. QA and Iteration`: add OpenClaw QA reference, high-risk failures, and repair routing.
8. `### 6. Save and Deliver`: add OpenClaw active route path, suffix mapping, validation marker, mixed-IP save path, and output filename note.
9. `## Output Contract`: add OpenClaw mixed-IP delivery block and delivery guard.

## Route Contract to Preserve

- Route id: `openclaw`.
- Display name: `OpenClaw`.
- Default: `false`.
- Output suffix: `openclaw`.
- Route status: `source-reviewed`.
- Source/license authority: `references/ips/openclaw/source.md`.
- Output directory: `assets/<article-slug>-openclaw/`.
- Required references:
  - `references/ips/openclaw/index.md`
  - `references/ips/openclaw/source.md`
  - `references/ips/openclaw/style-dna.md`
  - `references/ips/openclaw/openclaw-ip.md`
  - `references/ips/openclaw/composition-patterns.md`
  - `references/ips/openclaw/prompt-template.md`
  - `references/ips/openclaw/qa-checklist.md`
- Uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.

## Verification Commands

```bash
rg -n 'OpenClaw|openclaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw|references/ips/openclaw' ian-xiaohei-illustrations/SKILL.md
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

## Risks

- Adding OpenClaw to mixed-route lists can accidentally omit it from delivery or QA even when selection is present.
- `SKILL.md` can claim OpenClaw route availability while public docs and metadata lag until Phase 36; plan language should keep Phase 35 scoped to runtime behavior.
- Validator parity for new runtime surfaces is still Phase 37, so Phase 35 needs explicit `rg` smoke evidence.
