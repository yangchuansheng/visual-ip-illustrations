# Multi-IP Article Illustration Skills

## What This Is

This project evolves the current Ian Xiaohei article-illustration Codex Skill into a multi-visual-IP skill system. It keeps the existing Xiaohei experience working while adding selectable visual IPs. The current shipped baseline supports Xiaohei, Littlebox, and Tom, and the next milestone adds Ferris the Rustacean as a Rust-community mascot route.

The product is for writers, product thinkers, AI workflow authors, and Codex users who want article body illustrations that explain one cognitive action through a consistent visual language. The near-term outcome is a reliable skill package where users can choose Xiaohei, Littlebox, Tom, or Ferris and get the right planning, prompt, QA, asset path, documentation, and source-boundary behavior.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.2 Ferris Rust Mascot IP Integration

**Goal:** Add Ferris the Rustacean as a fourth selectable visual IP route while keeping the shipped Xiaohei, Littlebox, and Tom routes stable.

**Target features:**

- Add a Ferris source and trademark boundary record based on rustacean.net, Karen Rustad Tolva, CC0 public-domain dedication, and the Rust Foundation trademark policy.
- Add a canonical Ferris IP pack with character identity, visual rules, action library, composition patterns, prompt template, and QA checklist.
- Add Ferris routing metadata, aliases, output suffix, required references, attribution context, and mixed-IP variant behavior.
- Update skill runtime instructions, public examples, agent metadata, and release checks for Ferris.
- Extend the lightweight validator to cover Ferris route, references, prompt placeholders, docs markers, output path, source markers, trademark-boundary markers, and route leakage.

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
- ✓ Tom can be selected as an explicit protected-character route with route-local rights, prompt, composition, QA, docs, metadata, release checklist, and validator coverage — v1.1
- ✓ Xiaohei remains the omitted-IP default while Littlebox and Tom remain explicit selectable routes — v1.1
- ✓ Protected-IP validation checks route metadata, docs markers, output paths, public sample gates, and route leakage locally through dependency-free Node scripts — v1.1

### Active

- [ ] Add Ferris as a fourth selectable IP with canonical references under `ian-xiaohei-illustrations/references/ips/ferris/`.
- [ ] Preserve the shipped Xiaohei default route and existing Littlebox/Tom explicit routes while adding Ferris aliases and mixed-IP grouping.
- [ ] Define Ferris-specific visual identity, action rules, composition families, prompt template, and QA failures for article illustrations.
- [ ] Document Ferris source, author, CC0/public-domain dedication, Rust trademark policy context, attribution wording, and endorsement boundary before release.
- [ ] Update public docs, examples, agent metadata, and release checklist so users and maintainers can request and verify Ferris.
- [ ] Extend the validator and tests so Ferris route, references, output path, prompt placeholders, docs markers, source markers, trademark-boundary markers, and route leakage are checked locally.

### Out of Scope

- Merging multiple IP identities into one hybrid character — each IP needs a distinct visual contract.
- Building a hosted web app or UI — this remains a Codex Skill repository.
- Generating new final illustration images as part of milestone initialization — this planning project prepares the code/docs changes.
- Recreating rustacean.net assets or fan-art history inside this repository — source, attribution, and reference links are enough for the planned adaptation.
- Supporting arbitrary user-defined IP imports in v1.2 — this milestone focuses on one Ferris route.
- Shipping Rust-logo-forward public assets or official-affiliation language — Ferris usage should preserve Rust trademark and endorsement boundaries.
- Creating a generic open-source mascot marketplace — v1.2 focuses on one Rust-community mascot route.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit is `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, and assets support GitHub distribution.

The current Xiaohei package is centered on pure-white 16:9 hand-drawn Chinese article illustrations. Xiaohei is a solid-black, white-dot-eyed, thin-legged, deadpan character that must perform the conceptual action. Current references live in `ian-xiaohei-illustrations/references/ips/xiaohei/`, with legacy root reference paths kept for compatibility.

The Littlebox source repository was inspected from `https://github.com/okooo5km/5km-littlebox-illustrations` at short commit `37cd93e` on 2026-06-12. It is also an MIT-licensed Codex Skill. Littlebox uses a closed paper-box character, route-local references, and `assets/<article-slug>-littlebox/` outputs.

v1.0 completed the two-IP foundation: Xiaohei remains the default route, Littlebox is an explicit selectable route, and the validator covers package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers.

v1.1 completed the Tom route: Tom remains explicit, gated-authorized, route-local, rights-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.1 completion evidence recorded validator 47/47 and Node tests 15/15.

Ferris source context comes from rustacean.net, which describes Ferris as the unofficial mascot for Rust and provides original/flat/happy/gesturing assets. rustacean.net records that Karen Rustad Tolva waived copyright and related rights to Ferris the Rustacean to the extent possible under law, published from the United States. The Rust Foundation trademark policy governs Rust and Cargo word marks/logos and requires usage that avoids appearing official, affiliated, or endorsed without written permission.

The current codebase map calls out fragile areas that matter for this work: manual-only validation, repeated style instructions across files, no machine-readable asset inventory, implicit package boundary, no validation command beyond local scripts, no release/package workflow, and no prompt regression examples.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Compatibility**: Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working.
- **IP Isolation**: Xiaohei, Littlebox, Tom, and Ferris rules must remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km; add Ferris source attribution for Karen Rustad Tolva and rustacean.net.
- **Trademark Boundary**: Ferris references can record CC0/public-domain source context, while Rust word/logo usage follows the Rust Foundation trademark policy and avoids official-affiliation claims.
- **No Build Runtime**: The project should stay usable as a lightweight skill package; validation can be script-based but should not require a full app framework.
- **Image Generation Dependency**: Final generation still depends on the host agent's `image_gen` capability.
- **Documentation Language**: User-facing repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build a multi-IP skill system inside the existing repository | The current package already has a complete Xiaohei workflow and public distribution shape | ✓ Good |
| Add Littlebox as the first additional IP | The Littlebox repository follows the same skill pattern and provides a strong contrasting IP contract | ✓ Good |
| Keep IP-specific rules in separate reference modules | The IPs have incompatible visual constraints, character anatomy, output paths, rights boundaries, and QA | ✓ Good |
| Add validation before broad refactoring | Current risks come from drift across prose docs, reference files, examples, and package boundaries | ✓ Good |
| Add Tom through an explicit authorized-IP milestone | Tom is a recognizable commercial character, so the route needs rights-boundary docs in addition to normal IP pack, prompt, QA, and validation work | ✓ Good |
| Add Ferris through a source-and-trademark-aware mascot milestone | Ferris has permissive copyright source context and Rust-related trademark boundaries, so the route needs attribution, source clarity, and endorsement-safe wording | -- Pending |

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
*Last updated: 2026-06-13 after starting v1.2 Ferris Rust Mascot IP Integration*
