# Multi-IP Article Illustration Skills

## What This Is

This project evolves the current Ian Xiaohei article-illustration Codex Skill into a multi-visual-IP skill system. It keeps the existing Xiaohei experience working while adding selectable visual IPs. The current shipped baseline supports Xiaohei, Littlebox, Tom, and Ferris, and the next milestone adds the uploaded Sealos white seal mascot as a brand-owned mascot route.

The product is for writers, product thinkers, AI workflow authors, and Codex users who want article body illustrations that explain one cognitive action through a consistent visual language. The near-term outcome is a reliable skill package where users can choose Xiaohei, Littlebox, Tom, Ferris, or Sealos Seal and get the right planning, prompt, QA, asset path, documentation, and source or brand-boundary behavior.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.3 Sealos Seal Mascot IP Integration

**Goal:** Add the uploaded Sealos white seal mascot as a fifth selectable visual IP route while keeping the shipped Xiaohei, Littlebox, Tom, and Ferris routes stable.

**Target features:**

- Add a Sealos Seal brand/source record that treats the uploaded image as the canonical mascot reference.
- Add a canonical Sealos Seal IP pack with fixed character identity, visual rules, action library, composition patterns, prompt template, and QA checklist.
- Add Sealos Seal routing metadata, aliases, output suffix, required references, brand context, and mixed-IP variant behavior.
- Update skill runtime instructions, public examples, agent metadata, and release checks for Sealos Seal.
- Extend the lightweight validator and Node tests to cover Sealos Seal route, references, prompt placeholders, docs markers, output path, uploaded-image identity markers, brand-boundary markers, and route leakage.

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
- ✓ Ferris can be selected as an explicit source-reviewed Rust-community mascot route with route-local source/trademark records, prompt, composition, QA, docs, metadata, release checklist, validator, and Node test coverage — v1.2
- ✓ Xiaohei remains the omitted-IP default while Littlebox, Tom, and Ferris remain explicit selectable routes — v1.2
- ✓ Mascot validation checks route metadata, docs markers, output paths, public sample gates, source/trademark boundaries, and route leakage locally through dependency-free Node scripts — v1.2

### Active

- [ ] Add Sealos Seal as a fifth selectable IP with canonical references under `ian-xiaohei-illustrations/references/ips/sealos/`.
- [ ] Preserve the shipped Xiaohei default route and existing Littlebox/Tom/Ferris explicit routes while adding Sealos Seal aliases and mixed-IP grouping.
- [ ] Define Sealos Seal visual identity from the uploaded image: white rounded seal, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- [ ] Define Sealos Seal action rules, composition families, prompt template, edit prompts, and QA failures for article illustrations.
- [ ] Document Sealos brand/source context, uploaded-image authority, logo usage boundary, public sample policy, and drift prevention before release.
- [ ] Update public docs, examples, agent metadata, and release checklist so users and maintainers can request and verify Sealos Seal.
- [ ] Extend the validator and tests so Sealos Seal route, references, output path, prompt placeholders, docs markers, uploaded-image markers, brand-boundary markers, and route leakage are checked locally.

### Out of Scope

- Merging multiple IP identities into one hybrid character — each IP needs a distinct visual contract.
- Building a hosted web app or UI — this remains a Codex Skill repository.
- Generating new final illustration images as part of milestone initialization — this planning project prepares the code/docs changes.
- Redesigning the Sealos mascot away from the uploaded image — v1.3 locks the uploaded white seal in cap and hoodie as the canonical shape.
- Supporting arbitrary user-defined IP imports in v1.3 — this milestone focuses on one Sealos Seal route.
- Treating generic seal mascots, abstract logo-creature variants, or prior exploration variants as the primary Sealos route — the uploaded image is the route authority.
- Creating a generic brand mascot marketplace — v1.3 focuses on one Sealos brand route.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit is `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, and assets support GitHub distribution.

The current Xiaohei package is centered on pure-white 16:9 hand-drawn Chinese article illustrations. Xiaohei is a solid-black, white-dot-eyed, thin-legged, deadpan character that must perform the conceptual action. Current references live in `ian-xiaohei-illustrations/references/ips/xiaohei/`, with legacy root reference paths kept for compatibility.

The Littlebox source repository was inspected from `https://github.com/okooo5km/5km-littlebox-illustrations` at short commit `37cd93e` on 2026-06-12. It is also an MIT-licensed Codex Skill. Littlebox uses a closed paper-box character, route-local references, and `assets/<article-slug>-littlebox/` outputs.

v1.0 completed the two-IP foundation: Xiaohei remains the default route, Littlebox is an explicit selectable route, and the validator covers package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers.

v1.1 completed the Tom route: Tom remains explicit, gated-authorized, route-local, rights-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.1 completion evidence recorded validator 47/47 and Node tests 15/15.

v1.2 completed the Ferris route: Ferris remains explicit, source-reviewed, Rust-trademark-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.2 completion evidence recorded validator 60/60, Node tests 31/31, and `git diff --check` success.

Sealos Seal context comes from the user's uploaded mascot image and the prior Sealos mascot thread `019ec004-7c7c-7632-abe9-ac7b84cdf22e`. The route authority is the uploaded white seal wearing a navy cap and deep-blue hoodie, with Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, a small smile, short rounded flippers, compact legs, and a side-rear white tail. Prior Sealos mascot exploration established the brand personality as a reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes context.

The current codebase map calls out fragile areas that matter for this work: manual-only validation, repeated style instructions across files, no machine-readable asset inventory, implicit package boundary, no validation command beyond local scripts, no release/package workflow, and no prompt regression examples.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Compatibility**: Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working.
- **IP Isolation**: Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal rules must remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km; add Ferris source attribution for Karen Rustad Tolva and rustacean.net.
- **Trademark Boundary**: Ferris references can record CC0/public-domain source context, while Rust word/logo usage follows the Rust Foundation trademark policy and avoids official-affiliation claims.
- **Brand Boundary**: Sealos Seal references must preserve Sealos logo usage, brand lineage, and uploaded-image identity markers while avoiding generic seal mascot drift.
- **Visual Reference**: The uploaded image is the canonical Sealos Seal shape reference for v1.3.
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
| Add Ferris through a source-and-trademark-aware mascot milestone | Ferris has permissive copyright source context and Rust-related trademark boundaries, so the route needs attribution, source clarity, and endorsement-safe wording | ✓ Good |
| Add Sealos Seal through an uploaded-image-locked brand mascot milestone | The user selected the uploaded white seal in cap and hoodie as the Sealos mascot authority, so the route needs fixed visual markers, brand lineage, logo usage guidance, and drift checks | -- Pending |

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
*Last updated: 2026-06-13 after starting v1.3 Sealos Seal Mascot IP Integration*
