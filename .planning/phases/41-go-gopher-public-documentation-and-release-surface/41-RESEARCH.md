# Phase 41 Research: Go Gopher Public Documentation and Release Surface

**Phase:** 41 - Go Gopher Public Documentation and Release Surface  
**Date:** 2026-06-17  
**Mode:** planning research  
**Scope:** public docs, examples, NOTICE, release checklist, and OpenAI agent metadata

## Research Question

What does the executor need to know to update the public and runtime-facing Go Gopher release surface without drifting from the Phase 38-40 route/source/controller truth?

## Executive Findings

- Phase 41 is documentation-first. The implementation target is root public docs plus agent discovery metadata, not route-local pack or controller behavior.
- All root README variants are in scope. The repo has 13 `README*.md` files, and the prior OpenClaw follow-up established README variant parity as validator-relevant.
- Go Gopher facts already exist in `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/SKILL.md`, and `ian-xiaohei-illustrations/references/ips/gopher/`.
- The closest precedent is Phase 36 OpenClaw public documentation, with one important update: Phase 41 must include every root README variant.
- Validator and Node hardening remain Phase 42. Phase 41 acceptance should rely on targeted `rg` checks and `git diff --check`; validator/Node output is diagnostic only when it matches the known seventh-route baseline recorded in Phases 38-40.
- Root `gopher.png` remains untracked and acts as local visual authority only.

## Source Truths

### Route Contract

`ian-xiaohei-illustrations/references/routing.md` defines:

- route id: `gopher`
- display name: `Go Gopher`
- default marker: `default=false`
- output suffix: `gopher`
- output path: `assets/<article-slug>-gopher/`
- escaped docs marker: `assets/&lt;article-slug&gt;-gopher/`
- route status: `source-reviewed`
- aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`
- source authority: `ian-xiaohei-illustrations/references/ips/gopher/source.md`
- local visual authority: root `gopher.png`
- source context: official Go blog source `https://go.dev/blog/gopher`
- attribution: Renee French
- license boundary: Creative Commons Attribution 4.0
- public sample boundary: public generated Go Gopher samples require release review
- route boundary: Go logo identity and official Go project affiliation, approval, sponsorship, and endorsement claims stay outside positive route identity

### Pack Contract

`ian-xiaohei-illustrations/references/ips/gopher/` contains the seven-file route-local pack:

- `index.md`
- `source.md`
- `style-dna.md`
- `gopher-ip.md`
- `composition-patterns.md`
- `prompt-template.md`
- `qa-checklist.md`

Public docs should expose the route directory and the `source.md` authority without duplicating the full pack.

### Controller Contract

`ian-xiaohei-illustrations/SKILL.md` already documents Go Gopher route selection, progressive loading, planning fields, mixed-IP grouping, generation dispatch, edit repair, QA routing, save path, and delivery reporting.

Phase 41 should mirror these runtime truths into public surfaces. It should not rewrite controller behavior.

## Target Files

### README Variants

Update all root README variants:

- `README.md`
- `README.ar.md`
- `README.de.md`
- `README.es.md`
- `README.fr.md`
- `README.ja.md`
- `README.ko.md`
- `README.pt.md`
- `README.ru.md`
- `README.tr.md`
- `README.uk.md`
- `README.zh-Hant.md`
- `README.zh.md`

Recommended README coverage:

- first-view route inventory mentions Go Gopher as an explicit `source-reviewed` route
- route selection list includes Go Gopher aliases
- output path section includes raw and escaped Go Gopher path markers
- Visual IP Routes section includes Go Gopher description
- Route Reference includes `ian-xiaohei-illustrations/references/ips/gopher/` and `ian-xiaohei-illustrations/references/ips/gopher/source.md`
- mixed-IP wording expands to seven route groups
- operational route facts include Go Gopher status, source/license authority, output suffix, output path, escaped marker, local visual authority, source/license boundary, Go logo boundary, official endorsement boundary, and public sample gate
- Example Gallery wording keeps Go Gopher public rendered samples release-gated
- Quick Examples and Workflow mention Go Gopher as an explicit route
- Directory Structure and Maintainer Validation mention Go Gopher route-local pack and Phase 42 validator ownership

Localized variants can use compact localized wording, but the required tokens should remain literal and grepable.

### Prompt Examples

Update `examples/prompts.md` with:

- canonical Go Gopher planning example
- canonical Go Gopher generation example
- explicit Go Gopher planning-only example under route smoke prompts
- explicit Go Gopher direct generation example
- explicit Go Gopher edit example
- explicit Go Gopher route smoke check
- mixed-IP planning expanded from six groups to seven groups
- mixed-IP generation expanded from six groups to seven groups
- maintainer smoke coverage for Go Gopher

Required prompt markers:

- `ian-xiaohei-illustrations/references/ips/gopher/`
- `ian-xiaohei-illustrations/references/ips/gopher/source.md`
- `source-reviewed`
- root `gopher.png`
- `assets/<article-slug>-gopher/`
- `assets/&lt;article-slug&gt;-gopher/`
- Renee French
- Creative Commons Attribution 4.0
- public sample gate controlled by `RELEASE_CHECKLIST.md`
- planning fields: Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, Source/license note
- action vocabulary: inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, route

### NOTICE

Update `NOTICE.md` with a Go Gopher source attribution and public sample gate section.

Required markers:

- route id `gopher`
- display name `Go Gopher`
- route status `source-reviewed`
- official Go blog source `https://go.dev/blog/gopher`
- Renee French
- Creative Commons Attribution 4.0
- `ian-xiaohei-illustrations/references/ips/gopher/source.md`
- root `gopher.png`
- public rendered Go Gopher samples remain gated until reviewer, date, approval status, allowed directories, release channels, source/license outcomes, local visual marker outcome, route-isolation outcome, Go logo boundary outcome, official endorsement boundary outcome, article-metaphor quality outcome, and public-sample decision are recorded
- no official Go project affiliation, approval, sponsorship, or endorsement claims

### Release Checklist

Update `RELEASE_CHECKLIST.md` with:

- Go Gopher automated gate ownership notes
- Go Gopher route smoke prompt entry
- Go Gopher attribution review entry
- dedicated Go Gopher source/license and public sample gate section
- Go Gopher installable package boundary entry
- Go Gopher public docs/path marker entry
- Go Gopher final release review entry
- Phase 42 ownership for validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation

Dedicated gate should cover:

- source/license review
- local `gopher.png` identity review
- prompt leakage scan
- public asset policy
- generated sample policy
- final Go Gopher release review

Public asset policy remains `PENDING`.

### Agent Metadata

Update `ian-xiaohei-illustrations/agents/openai.yaml`:

- `display_name` includes Go Gopher
- `short_description` includes Go Gopher as an explicit `source-reviewed` article-illustration mascot route
- `default_prompt` includes Go Gopher as an explicit selectable route

Preserve:

- Visual IP Illustrations identity
- `$visual-ip-illustrations` canonical invocation
- `$ian-xiaohei-illustrations` compatibility alias
- Xiaohei omitted-IP default
- existing Littlebox, Tom, Ferris, Seal, and OpenClaw route descriptions

## Validation Architecture

Hard Phase 41 checks:

```bash
rg -n 'Go Gopher|gopher|source-reviewed|assets/<article-slug>-gopher|assets/&lt;article-slug&gt;-gopher|references/ips/gopher|RELEASE_CHECKLIST.md' README*.md
rg -n 'Go Gopher|gopher\.png|Renee French|Creative Commons Attribution 4\.0|references/ips/gopher/source\.md|assets/<article-slug>-gopher|assets/&lt;article-slug&gt;-gopher|public sample gate|Gopher state|Gopher action' examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/agents/openai.yaml
git diff --check -- README*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/agents/openai.yaml
```

Diagnostic Phase 42-deferred checks:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
```

Treat diagnostic failures as Phase 42-deferred only when they match the known seventh-route baseline from Phases 38-40: route-count drift, Go Gopher route reference expectations, Go Gopher alias language allowlist, docs parity checks, public sample gates, and Node fixtures that still encode the pre-Go-Gopher baseline.

## Risk Notes

- README variants can drift from the English README if the executor updates only `README.md`. Plan must require all root variants.
- Public sample wording can accidentally imply approval. Keep Go Gopher public samples gated and `PENDING`.
- Agent metadata can accidentally present Go Gopher as a default or official route. Keep it explicit and source-reviewed.
- Validator and Node failures can distract from Phase 41 docs work. Record known baseline ownership and keep Phase 42 responsible for hardening.

## Recommended Plan Shape

Use one autonomous execute plan with three tasks:

1. README parity across all root README variants.
2. Copyable Go Gopher examples and mixed-IP prompt expansion.
3. NOTICE, release checklist, agent metadata, and final targeted verification.

No package installation, app runtime, database, UI, or external service setup is required.
