# Project Research Summary

**Project:** Visual IP Illustrations
**Milestone:** v1.7 OpenClaw Logo IP Integration
**Domain:** Codex Skill package for route-isolated article illustration IPs
**Researched:** 2026-06-16
**Confidence:** HIGH for repository integration; MEDIUM-HIGH for source-image handling until the uploaded logo is copied into a repo-visible asset path.

## Executive Summary

OpenClaw should be added as an explicit source-reviewed logo-mascot route. The project stack should remain unchanged: Markdown reference packs, `SKILL.md` route dispatch, YAML agent metadata, static examples, host-provided `image_gen`, and dependency-free Node validation.

The route authority has two parts. The official OpenClaw repository and MIT license provide source and attribution context. The uploaded `openclaw-color.png` logo provides the visual identity authority for the route: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.

The recommended implementation is a vertical route slice: add `references/ips/openclaw/`, register `openclaw` in `references/routing.md`, update skill controller behavior, update public docs and release surfaces, then extend validator and Node tests. OpenClaw-specific identity, prompt, QA, source, and sample-policy rules should stay route-local.

## Stack Additions

- `references/ips/openclaw/` canonical pack with `index.md`, `source.md`, `style-dna.md`, `openclaw-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- `references/routing.md` OpenClaw row with aliases, `default=false`, `output_suffix=openclaw`, required references, source context, and status.
- `SKILL.md` route selection, reference loading, planning, generation, edit, QA, mixed-IP, and delivery updates.
- README, examples, NOTICE, release checklist, and agent metadata updates.
- Validator and Node test extensions for OpenClaw route, source, docs, paths, smoke, leakage, public assets, and release evidence.

## Feature Table Stakes

- Explicit OpenClaw route selection.
- Xiaohei remains the sole omitted-IP default.
- OpenClaw output path is `assets/<article-slug>-openclaw/`.
- The uploaded logo is the visual authority.
- Source record includes official repository, MIT license, uploaded-logo authority, sample policy, and review owner.
- OpenClaw prompts make the mascot perform the central cognitive article action.
- QA rejects generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, and copied composition.
- Mixed-IP requests create separate route groups.
- Public OpenClaw samples require release review.
- Local validation covers the full route contract.

## Roadmap Recommendation

### Phase 33: OpenClaw Source and Route Contract

Add source/license authority, route metadata, aliases, output suffix, output path, and route-selection boundaries.

### Phase 34: OpenClaw Canonical Pack

Create the OpenClaw route-local reference pack with identity, style, composition, prompt, edit, QA, source, and sample-policy rules.

### Phase 35: OpenClaw Skill Controller Integration

Wire OpenClaw into `SKILL.md`, route selection, progressive reference loading, planning fields, generation dispatch, edit routing, QA dispatch, mixed-IP grouping, and delivery reports.

### Phase 36: Public Documentation and Release Surface

Update README, examples, NOTICE, release checklist, agent metadata, and public route descriptions with OpenClaw source and output path behavior.

### Phase 37: OpenClaw Validation and Release Evidence

Extend validator and Node tests, add leakage and public asset gates, record final evidence, and verify existing routes remain stable.

## Watch Out For

- Logo identity drift into a generic red mascot.
- OpenClaw prompt wording turning into product advertising.
- Missing MIT/source attribution.
- OpenClaw becoming default through generic aliases.
- OpenClaw visual markers leaking into Seal, Ferris, or shared prompts.
- Public generated OpenClaw assets shipping before release review.
- Output path drift away from `assets/<article-slug>-openclaw/`.

## Sources

- OpenClaw official repository README: https://github.com/openclaw/openclaw
- OpenClaw MIT license: https://github.com/openclaw/openclaw/blob/main/LICENSE
- OpenClaw official logo asset reference: https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.svg
- User-provided uploaded logo: `openclaw-color.png` attached in the request.

---
*Research completed: 2026-06-16*
*Ready for roadmap: yes*
