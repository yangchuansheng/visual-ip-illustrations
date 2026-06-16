# Feature Landscape: OpenClaw Logo IP Integration

**Domain:** Visual IP Illustrations Codex Skill
**Milestone:** v1.7 OpenClaw Logo IP Integration
**Researched:** 2026-06-16
**Scope:** OpenClaw route only; Xiaohei, Littlebox, Tom, Ferris, and Seal behavior are baseline dependencies.

## Recommendation

Add OpenClaw as an explicit source-reviewed logo-mascot route. Users should be able to request OpenClaw and receive 16:9 article illustrations where the red round OpenClaw mascot performs the cognitive action. Maintainers should be able to audit source, license, uploaded-logo authority, output path, route isolation, public sample policy, and validator evidence.

OpenClaw should behave like other explicit routes structurally: route aliases, isolated references, route-specific output suffix, prompt template, QA checklist, docs, examples, NOTICE, release checklist, validator checks, and Node tests. It should differ by treating a logo-derived mascot as the visual authority, so the pack must define how to preserve the logo identity while turning it into sparse article-illustration actions.

## Table Stakes

| Feature | Expected User Behavior | Expected Maintainer Behavior | Complexity |
|---------|------------------------|------------------------------|------------|
| Explicit OpenClaw route selection | User can write `OpenClaw` or `OpenClaw logo` and get `selected IP: OpenClaw`. | Add `openclaw` route metadata with aliases, `default=false`, output suffix, required references, attribution context, and status. | Medium |
| Xiaohei default preservation | User omits IP and still gets Xiaohei. | Validator confirms Xiaohei is the sole default route. | Low |
| Source and license record | User and redistributor can inspect where OpenClaw route authority comes from. | Add `source.md` with official repo, MIT license, uploaded-logo authority, sample policy, and review owner. | Medium |
| Canonical OpenClaw pack | User receives OpenClaw-consistent planning, prompt, edits, and QA. | Create route-local files under `references/ips/openclaw/`. | High |
| Logo-derived character identity | User sees the red round OpenClaw mascot as the action subject. | Define stable visual markers: red spherical body, side claw-like arms, two antennae, black eyes with cyan pupils, short legs, simple mascot proportions. | High |
| Article-illustration fit | Output explains one cognitive action rather than becoming a brand poster. | Prompt and QA require one idea, sparse layout, white background, sparse labels, and active OpenClaw participation. | Medium |
| Route-specific output path | OpenClaw outputs save under `assets/<article-slug>-openclaw/`. | Docs and validator include raw and escaped path markers. | Low |
| Mixed-IP grouping | User can request OpenClaw alongside existing routes for the same idea. | Mixed requests create separate route groups with independent references, prompts, QA, and output directories. | Medium |
| Public docs and examples | User can copy OpenClaw prompts and understand route scope. | README, examples, metadata, NOTICE, and release checklist include OpenClaw wording and sample policy. | Medium |
| Local validation | Maintainer gets deterministic failures for route drift. | Extend validator and tests with OpenClaw route, pack, source, docs, path, smoke, leakage, and release checks. | Medium |

## Differentiators

| Feature | Value Proposition | Implementation Note |
|---------|-------------------|---------------------|
| Logo-mascot authority | The uploaded logo gives a strong fixed identity. | Preserve the red round body, claws, antennae, eyes, cyan pupils, and short legs together. |
| AI-assistant association | OpenClaw's product context supports assistant, channel, gateway, inbox, and tool metaphors. | Use these as optional article metaphors while keeping the image a general article illustration. |
| Strong red/cyan palette | The route can be visually distinctive across mixed-IP variants. | Use red as the mascot color and cyan as eye highlights; keep supporting labels sparse. |
| Source-reviewed open-source context | MIT source record can be audited locally. | Keep official repo/license links in `source.md`, NOTICE, and validator markers. |

## Anti-Features

| Anti-Feature | Recommended Behavior |
|--------------|----------------------|
| Making OpenClaw the default IP | Keep OpenClaw explicit-only. |
| Replacing the mascot with a generic crab, lobster, robot, or red blob | QA requires all uploaded-logo identity markers together. |
| Turning illustrations into OpenClaw product ads | Use article-metaphor scenes, with product context only when the user's article needs it. |
| Copying official logotype text into visible artwork by default | Use the mascot shape as the character; avoid visible brand text unless the user explicitly requests it. |
| Mixing OpenClaw identity into Seal or Ferris packs | Keep OpenClaw constraints route-local. |
| Public generated sample assets before release review | Gate public examples through release checklist approval. |

## Required User Flows

1. **Planning only**
   - User asks for OpenClaw route planning.
   - Skill returns selected IP, route references, output path, shot list, OpenClaw state, OpenClaw action, objects, labels, and stability notes.

2. **Direct generation**
   - User explicitly requests OpenClaw image generation.
   - Skill loads only OpenClaw references, generates one image per prompt, applies OpenClaw QA, saves to `assets/<article-slug>-openclaw/`, and reports delivery details.

3. **Mixed-IP variants**
   - User requests OpenClaw with Xiaohei, Littlebox, Tom, Ferris, or Seal variants.
   - Skill creates separate route groups and avoids blended visual rules.

4. **Editing**
   - User asks to strengthen OpenClaw participation, repair off-model identity, remove titles, reduce labels, or preserve unaffected content.
   - Skill uses OpenClaw edit prompts and retains output path and source-image authority.

## Requirements Implications

- OpenClaw route acceptance requires source/license evidence and uploaded-logo visual authority.
- Visual markers should be testable through text prompts and QA rules.
- Source and public sample policy should appear before public generated OpenClaw examples.
- Existing Xiaohei default, existing explicit routes, and legacy skill aliases stay stable.
- Validation should cover route metadata, pack files, output path, docs, source record, NOTICE, release checklist, public asset gate, and non-OpenClaw leakage.

## Sources

- OpenClaw official repository README: https://github.com/openclaw/openclaw
- OpenClaw MIT license: https://github.com/openclaw/openclaw/blob/main/LICENSE
- OpenClaw official logo asset reference: https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.svg
- User-provided uploaded logo: `openclaw-color.png` attached in the request.
