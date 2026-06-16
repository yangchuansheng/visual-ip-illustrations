# Architecture Research: OpenClaw Logo IP Integration

**Project:** Visual IP Illustrations
**Milestone:** v1.7 OpenClaw Logo IP Integration
**Researched:** 2026-06-16
**Scope:** Add OpenClaw as a new explicit route while preserving all existing route behavior.

## Recommendation

Integrate OpenClaw as a vertical route slice:

```text
SKILL.md
  -> references/routing.md
    -> references/ips/xiaohei/*
    -> references/ips/littlebox/*
    -> references/ips/tom/*
    -> references/ips/ferris/*
    -> references/ips/seal/*
    -> references/ips/openclaw/*
  -> image_gen runtime
  -> assets/<article-slug>-<route-suffix>/
```

`SKILL.md` should only select the route, load OpenClaw references, dispatch planning/generation/QA/editing, and report output paths. The logo identity, source/license record, composition rules, prompt wording, QA failures, and sample policy belong inside `references/ips/openclaw/`.

## New Components

| File | Responsibility |
|------|----------------|
| `references/ips/openclaw/index.md` | Pack navigation, route status, source authority, output path, shared failure categories. |
| `references/ips/openclaw/source.md` | Official OpenClaw source links, MIT license, uploaded-logo authority, public sample policy, review owner. |
| `references/ips/openclaw/style-dna.md` | Sparse article-illustration style, red/cyan identity, white background, visual vetoes. |
| `references/ips/openclaw/openclaw-ip.md` | Mascot identity, visual markers, action responsibility, recognition gates, failure modes. |
| `references/ips/openclaw/composition-patterns.md` | Composition families and OpenClaw-appropriate article metaphors. |
| `references/ips/openclaw/prompt-template.md` | Shot-list fields, one-image generation prompt, edit prompts, output reminder. |
| `references/ips/openclaw/qa-checklist.md` | Pass/fail criteria, uploaded-logo identity gates, source isolation, iteration moves, delivery judgment. |

## Modified Components

| File | Change |
|------|--------|
| `references/routing.md` | Add OpenClaw route row, selection rules, metadata block, output paths, mixed-IP wording. |
| `SKILL.md` | Add OpenClaw route selection, reference loading, planning fields, generation prompt dispatch, QA dispatch, edit routing, delivery report. |
| `agents/openai.yaml` | Mention OpenClaw as an explicit source-reviewed route while preserving Xiaohei default. |
| `README.md` and localized docs policy surface | Add OpenClaw route summary, output path, source/license note, sample policy. |
| `examples/prompts.md` | Add explicit OpenClaw planning, generation, edit, and mixed-IP prompts. |
| `NOTICE.md` | Add OpenClaw source attribution and MIT license note. |
| `RELEASE_CHECKLIST.md` | Add OpenClaw route, source-image, public sample, validation, and release evidence gates. |
| `scripts/validate-skill-package.mjs` | Add OpenClaw route/pack/docs/source/path/smoke/leakage/release checks. |
| `scripts/validate-skill-package.test.mjs` | Add OpenClaw check IDs, parser expectations, failure fixtures, and summary counts. |

## Data Flow

### Explicit OpenClaw Request

```text
User asks for OpenClaw article illustration
  -> SKILL.md reads references/routing.md
  -> routing.md selects route id openclaw
  -> agent loads only references/ips/openclaw/ required references
  -> shared workflow extracts article anchors
  -> OpenClaw shot list maps one core idea to mascot action
  -> OpenClaw prompt-template.md creates one prompt per image
  -> host image_gen generates one image per prompt
  -> OpenClaw QA decides pass, edit, or regenerate
  -> accepted PNGs save under assets/<article-slug>-openclaw/
  -> delivery report states selected IP, count, purpose, path, and stability notes
```

### Mixed-IP Request

```text
User asks for variants across OpenClaw and other routes
  -> SKILL.md extracts one shared core idea
  -> routing.md resolves route groups
  -> each route group loads only its required references
  -> each route group produces an independent shot list, prompt, QA result, and output directory
```

## Build Order

1. **Source and route contract**
   - Add source record, route metadata, output suffix, aliases, and uploaded-logo visual authority.

2. **OpenClaw canonical pack**
   - Add identity, style, composition, prompt, QA, and edit references.

3. **Skill controller integration**
   - Add OpenClaw to route selection, reference loading, shot-list fields, generation/editing/QA dispatch, and mixed-IP delivery.

4. **Docs and release surface**
   - Add README, prompt examples, NOTICE, release checklist, and agent metadata.

5. **Validation hardening**
   - Extend validator and tests, add source/path/smoke/leakage/public asset gates, and record final evidence.

## Architecture Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Logo identity lives only in prompts | Future edits drift into generic red mascot output. | Store identity markers in `source.md`, `openclaw-ip.md`, prompt, and QA. |
| OpenClaw product copy dominates prompts | Images become advertising rather than article illustrations. | Route pack requires one cognitive action and sparse article-metaphor scenes. |
| Source/license omitted from public docs | Maintainers cannot audit redistribution context. | NOTICE, source record, and validator require official repo and MIT markers. |
| Mixed-IP requests load all references | Route leakage becomes likely. | Keep one route group per selected IP with independent references and paths. |
| Validator remains five-route specific | Partial OpenClaw integration can pass. | Add OpenClaw route checks and update parser expectations. |

## Sources

- OpenClaw official repository README: https://github.com/openclaw/openclaw
- OpenClaw MIT license: https://github.com/openclaw/openclaw/blob/main/LICENSE
- OpenClaw official logo asset reference: https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.svg
- User-provided uploaded logo: `openclaw-color.png` attached in the request.
