# Multi-IP Article Illustration Skills

## What This Is

This project evolves the current Ian Xiaohei article-illustration Codex Skill into a multi-visual-IP skill system. It keeps the existing Xiaohei experience working while adding selectable visual IPs. The current shipped baseline supports Xiaohei and Littlebox, and the next milestone adds an authorized Tom route based on Tom from Tom and Jerry.

The product is for writers, product thinkers, AI workflow authors, and Codex users who want article body illustrations that explain one cognitive action through a consistent visual language. The near-term outcome is a reliable skill package where users can choose Xiaohei, Littlebox, or Tom and get the right planning, prompt, QA, asset path, documentation, and rights-boundary behavior.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.1 Authorized Tom IP Integration

**Goal:** Add Tom from Tom and Jerry as a third selectable visual IP route while keeping the existing Xiaohei and Littlebox routes stable.

**Target features:**
- Add a canonical Tom IP pack with character identity, visual rules, action library, composition patterns, prompt template, and QA checklist.
- Add Tom routing metadata, aliases, output suffix, required references, and mixed-IP variant behavior.
- Update skill runtime instructions, public examples, agent metadata, and release checks for Tom.
- Extend the lightweight validator to cover Tom route, references, prompt placeholders, docs markers, output path, and rights-boundary markers.
- Record Tom source, rights holder, allowed use assumptions, attribution language, and distribution boundaries in documentation.

## Requirements

### Validated

- ✓ Existing Xiaohei skill can plan and generate 16:9 Chinese article body illustrations from articles, posts, blogs, Notion content, screenshots, and single concepts — existing
- ✓ Existing Xiaohei workflow extracts cognitive anchors, produces shot lists, generates each image separately, checks outputs manually, and saves PNGs under `assets/<article-slug>-illustrations/` — existing
- ✓ Existing Xiaohei visual language is documented through modular references for style DNA, IP behavior, composition patterns, prompt templates, and QA — existing
- ✓ Existing package shape supports Codex skill installation through the `ian-xiaohei-illustrations/` subdirectory with `SKILL.md`, `agents/openai.yaml`, `references/`, and calibration assets — existing
- ✓ Existing repository includes public README usage examples, prompt examples, calibration images, MIT license, and NOTICE attribution — existing
- ✓ Xiaohei and Littlebox can be selected through deterministic routing metadata with Xiaohei as the default route — v1.0
- ✓ Littlebox ships as an isolated canonical IP pack with prompt, QA, language, background, attribution, and output path behavior — v1.0
- ✓ Maintainers can run a dependency-free validator that checks package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers — v1.0
- ✓ Public docs and prompt examples explain the two-IP Xiaohei/Littlebox package and release checklist — v1.0

### Active

- [ ] Add Tom as a third selectable IP with canonical references under `ian-xiaohei-illustrations/references/ips/tom/`.
- [ ] Preserve the shipped Xiaohei default route and Littlebox explicit route while adding Tom aliases and mixed-IP grouping.
- [ ] Define Tom-specific visual identity, action rules, composition families, prompt template, and QA failures for article illustrations.
- [ ] Update public docs, examples, agent metadata, and release checklist so users and maintainers can request and verify Tom.
- [ ] Extend the validator and tests so Tom route, references, output path, prompt placeholders, docs markers, and rights-boundary markers are checked locally.
- [ ] Document Tom source, rights holder, allowed-use assumption, attribution wording, and distribution boundaries before broad release.

### Out of Scope

- Merging the two IP identities into one hybrid character — each IP needs a distinct visual contract.
- Building a hosted web app or UI — this remains a Codex Skill repository.
- Generating new final illustration images as part of project initialization — this planning project prepares the code/docs changes.
- Recreating the Littlebox Git history inside this repository — attribution and source references are enough for the planned adaptation.
- Supporting arbitrary user-defined IP imports in v1 — the first milestone focuses on a durable two-IP foundation.
- Shipping Tom-derived generated examples in public release materials before rights-boundary review is complete — the milestone starts with route, prompt, QA, and validation artifacts.
- Creating a generic third-party IP marketplace or custom import schema — v1.1 focuses on one Tom route.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit is `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, and assets support GitHub distribution.

The current Xiaohei package is centered on pure-white 16:9 hand-drawn Chinese article illustrations. Xiaohei is a solid-black, white-dot-eyed, thin-legged, deadpan character that must perform the conceptual action. Current references live in `ian-xiaohei-illustrations/references/style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.

The Littlebox source repository was inspected from `https://github.com/okooo5km/5km-littlebox-illustrations` at short commit `37cd93e` on 2026-06-12. It is also an MIT-licensed Codex Skill. Its installable package is `5km-littlebox-illustrations/`, and its core references are `visual-language.md`, `littlebox-ip.md`, `composition-methods.md`, `language-and-labels.md`, `prompt-template.md`, `quality-gate.md`, and `examples.md`.

Littlebox differs from Xiaohei in ways that affect architecture. It uses pale sky blue `#E3F2FD` or pale lavender `#E6E6FA` backgrounds instead of Xiaohei's pure white background. It uses thick rough marker strokes instead of thin black linework. It has a closed-only paper-box body, exactly one amber identity tape strip with a jagged front tab, and strict arm-count and lid-state rules. It saves generated assets under `assets/<article-slug>-littlebox/`.

The existing codebase map calls out fragile areas that matter for this work: manual-only validation, repeated style instructions across files, no machine-readable asset inventory, implicit package boundary, no validation command, no release/package workflow, and no prompt regression examples.

v1.0 completed the two-IP foundation: Xiaohei remains the default route, Littlebox is an explicit selectable route, and the validator now covers package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers. v1.1 builds on that foundation by adding Tom as a third route and by making rights-boundary documentation part of the implementation contract.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Compatibility**: Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working.
- **IP Isolation**: Xiaohei and Littlebox rules must remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km.
- **Rights Boundary**: Tom is a protected character from Tom and Jerry. v1.1 must record source, rights holder, allowed-use assumption, attribution wording, and release boundary before public distribution guidance treats Tom as a normal bundled IP.
- **No Build Runtime**: The project should stay usable as a lightweight skill package; validation can be script-based but should not require a full app framework.
- **Image Generation Dependency**: Final generation still depends on the host agent's `image_gen` capability.
- **Documentation Language**: User-facing repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build a multi-IP skill system inside the existing repository | The current package already has a complete Xiaohei workflow and public distribution shape | -- Pending |
| Add Littlebox as the first additional IP | The Littlebox repository follows the same skill pattern and provides a strong contrasting IP contract | -- Pending |
| Keep IP-specific rules in separate reference modules | The two IPs have incompatible visual constraints, especially background, line weight, character anatomy, output path, and QA | -- Pending |
| Add validation before broad refactoring | Current risks come from drift across prose docs, reference files, examples, and package boundaries | -- Pending |
| Use vertical MVP phase structure | A working two-IP route is more valuable than a broad rewrite of all repository docs at once | -- Pending |
| Add Tom through an explicit authorized-IP milestone | Tom is a recognizable commercial character, so the route needs rights-boundary docs in addition to normal IP pack, prompt, QA, and validation work | -- Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-13 after starting v1.1 Authorized Tom IP Integration*
