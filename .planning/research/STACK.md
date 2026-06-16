# Stack Research: OpenClaw Logo IP Integration

**Research type:** Project Research - Stack dimension
**Project:** Visual IP Illustrations
**Milestone:** v1.7 OpenClaw Logo IP Integration
**Researched:** 2026-06-16
**Scope:** Add OpenClaw as a selectable visual IP route using the uploaded red OpenClaw logo as the visual authority.

## Recommendation

Keep the stack unchanged: Markdown route references, YAML agent metadata, static assets, host-provided `image_gen`, and dependency-free Node validation. OpenClaw should be added as another isolated route under `ian-xiaohei-illustrations/references/ips/openclaw/`, with metadata in `references/routing.md`, public documentation, NOTICE attribution, release gates, validator checks, and Node regression tests.

The new stack concern is source-image handling. The user-provided logo is the route visual authority, while the official OpenClaw repository and MIT license provide source and attribution context. The implementation phase should store a repo-visible source asset or source record so future prompts and validators can reference the exact red round mascot logo.

## OpenClaw Facts

| Fact | Evidence |
|------|----------|
| OpenClaw is a personal AI assistant. | Official README: `OpenClaw is a personal AI assistant you run on your own devices.` |
| The official repository uses MIT license. | Official `LICENSE`: MIT License, Copyright (c) 2026 OpenClaw Foundation. |
| The official repository contains OpenClaw logo assets. | Official README references `docs/assets/openclaw-logo-text.svg`; the SVG contains red OpenClaw mascot/logotype paths. |
| The requested route authority is the uploaded logo. | User request provides `openclaw-color.png`, showing a red round mascot/logo with side claws, antennae, black eyes, cyan pupils, and short legs. |

## Stack Additions

| Layer | Addition | Rationale |
|-------|----------|-----------|
| Source record | `references/ips/openclaw/source.md` | Records official source links, MIT license, uploaded-logo authority, sample policy, and review owner. |
| IP pack | `references/ips/openclaw/` | Keeps OpenClaw identity, style, composition, prompt, QA, and source boundaries route-local. |
| Routing | `references/routing.md` row for `openclaw` | Adds deterministic aliases, output suffix, required references, attribution context, and status. |
| Skill runtime | `SKILL.md` route selection and dispatch updates | Lets users select OpenClaw without affecting Xiaohei default behavior. |
| Public docs | README, prompt examples, NOTICE, release checklist, agent metadata | Exposes the route, output path, source/license context, and public sample gates. |
| Validation | `scripts/validate-skill-package.mjs` and tests | Makes route, source, docs, output path, leakage, and release gates deterministic. |

## Recommended Pack Shape

```text
ian-xiaohei-illustrations/references/ips/openclaw/
├── index.md
├── source.md
├── style-dna.md
├── openclaw-ip.md
├── composition-patterns.md
├── prompt-template.md
└── qa-checklist.md
```

Use the Ferris and Seal pack shape because OpenClaw needs both source/license records and uploaded-image visual authority. Keep route files in English and keep visible labels in the user's requested language.

## Routing Contract

| Field | Recommended value |
|-------|-------------------|
| `id` | `openclaw` |
| `display_name` | `OpenClaw` |
| `aliases` | `OpenClaw`, `openclaw`, `OpenClaw mascot`, `OpenClaw logo`, `OpenClaw crab`, `OpenClaw red mascot` |
| `default` | `false` |
| `output_suffix` | `openclaw` |
| `required_references` | all seven OpenClaw route-local files |
| `attribution_context` | OpenClaw official repository, MIT license, uploaded logo authority, source record |
| `status` | `source-reviewed` during implementation; `active` after route, docs, validator, release evidence, and sample policy pass |

Output path:

```text
assets/<article-slug>-openclaw/
assets/&lt;article-slug&gt;-openclaw/
```

## What Not To Add

| Avoid | Reason |
|-------|--------|
| New app runtime, build system, package manager, database, or service | The project remains a lightweight Codex Skill package. |
| Generic custom-IP importer | The milestone target is one OpenClaw route with a concrete source image. |
| Prompt-only logo matching without a source record | The uploaded logo is the visual authority and needs durable provenance. |
| Blended OpenClaw and Seal mascot rules | Route isolation keeps each IP testable and visually stable. |
| Public generated OpenClaw gallery before release review | Public sample assets need source/license and visual-identity approval. |

## Validation Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

## Sources

- OpenClaw official repository README: https://github.com/openclaw/openclaw
- OpenClaw MIT license: https://github.com/openclaw/openclaw/blob/main/LICENSE
- OpenClaw official logo asset reference: https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.svg
- User-provided uploaded logo: `openclaw-color.png` attached in the request.
