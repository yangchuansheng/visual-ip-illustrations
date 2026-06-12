# Multi-IP Article Illustration Skills

## What This Is

This project evolves the current Ian Xiaohei article-illustration Codex Skill into a multi-visual-IP skill system. It keeps the existing Xiaohei experience working while adding selectable visual IPs, starting with the Littlebox paper-box character from `okooo5km/5km-littlebox-illustrations`.

The product is for writers, product thinkers, AI workflow authors, and Codex users who want article body illustrations that explain one cognitive action through a consistent visual language. The near-term outcome is a reliable skill package where users can choose Xiaohei or Littlebox and get the right planning, prompt, QA, asset path, documentation, and attribution behavior.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Requirements

### Validated

- ✓ Existing Xiaohei skill can plan and generate 16:9 Chinese article body illustrations from articles, posts, blogs, Notion content, screenshots, and single concepts — existing
- ✓ Existing Xiaohei workflow extracts cognitive anchors, produces shot lists, generates each image separately, checks outputs manually, and saves PNGs under `assets/<article-slug>-illustrations/` — existing
- ✓ Existing Xiaohei visual language is documented through modular references for style DNA, IP behavior, composition patterns, prompt templates, and QA — existing
- ✓ Existing package shape supports Codex skill installation through the `ian-xiaohei-illustrations/` subdirectory with `SKILL.md`, `agents/openai.yaml`, `references/`, and calibration assets — existing
- ✓ Existing repository includes public README usage examples, prompt examples, calibration images, MIT license, and NOTICE attribution — existing

### Active

- [ ] Add a multi-IP architecture that lets the skill route requests to a selected visual IP without weakening the existing Xiaohei behavior.
- [ ] Add Littlebox as the first additional visual IP using the current `okooo5km/5km-littlebox-illustrations` repository as source material.
- [ ] Preserve Littlebox's hard identity rules: closed-only paper box, front-left three-quarter view, dot eyes on front panel, tiny legs, at most two side-seam twig arms, one amber jagged seam tape, pale sky-blue or pale lavender background, chunky rough black marker linework, and sparse coral/amber accents.
- [ ] Keep each IP's style, character, composition, prompt, QA, language, examples, output paths, and anti-repeat rules isolated enough that one IP's rules do not leak into another IP.
- [ ] Update public and installable documentation so users know how to request a specific IP and what assets are produced.
- [ ] Preserve license and notice obligations for Ian Xiaohei and Littlebox-derived material when incorporating or adapting files from the Littlebox repository.
- [ ] Add a lightweight validation path for package shape, required reference files, prompt-template placeholders, documentation links, and cross-IP routing rules.

### Out of Scope

- Merging the two IP identities into one hybrid character — each IP needs a distinct visual contract.
- Building a hosted web app or UI — this remains a Codex Skill repository.
- Generating new final illustration images as part of project initialization — this planning project prepares the code/docs changes.
- Recreating the Littlebox Git history inside this repository — attribution and source references are enough for the planned adaptation.
- Supporting arbitrary user-defined IP imports in v1 — the first milestone focuses on a durable two-IP foundation.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit is `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, and assets support GitHub distribution.

The current Xiaohei package is centered on pure-white 16:9 hand-drawn Chinese article illustrations. Xiaohei is a solid-black, white-dot-eyed, thin-legged, deadpan character that must perform the conceptual action. Current references live in `ian-xiaohei-illustrations/references/style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.

The Littlebox source repository was inspected from `https://github.com/okooo5km/5km-littlebox-illustrations` at short commit `37cd93e` on 2026-06-12. It is also an MIT-licensed Codex Skill. Its installable package is `5km-littlebox-illustrations/`, and its core references are `visual-language.md`, `littlebox-ip.md`, `composition-methods.md`, `language-and-labels.md`, `prompt-template.md`, `quality-gate.md`, and `examples.md`.

Littlebox differs from Xiaohei in ways that affect architecture. It uses pale sky blue `#E3F2FD` or pale lavender `#E6E6FA` backgrounds instead of Xiaohei's pure white background. It uses thick rough marker strokes instead of thin black linework. It has a closed-only paper-box body, exactly one amber identity tape strip with a jagged front tab, and strict arm-count and lid-state rules. It saves generated assets under `assets/<article-slug>-littlebox/`.

The existing codebase map calls out fragile areas that matter for this work: manual-only validation, repeated style instructions across files, no machine-readable asset inventory, implicit package boundary, no validation command, no release/package workflow, and no prompt regression examples.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Compatibility**: Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working.
- **IP Isolation**: Xiaohei and Littlebox rules must remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km.
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
*Last updated: 2026-06-12 after initialization*
