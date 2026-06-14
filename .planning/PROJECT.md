# Visual IP Illustrations

## What This Is

Visual IP Illustrations is a Codex Skill package for selectable visual-IP article illustrations. It turns article judgments, workflows, structures, states, and metaphors into 16:9 body illustrations while routing each image through the selected IP's character rules, prompt template, QA gates, output path, and source or brand boundary.

The shipped baseline supports Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal. The v1.4 milestone rebrands the project from the Xiaohei-centered `ian-xiaohei-illustrations` identity to `Visual IP Illustrations` while preserving the existing Xiaohei default route, explicit IP routes, output contracts, and legacy skill invocation.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.4 Project Rebrand to Visual IP Illustrations

**Goal:** Establish Visual IP Illustrations as the canonical project, repository, and skill identity while preserving the legacy `$ian-xiaohei-illustrations` compatibility surface.

**Target features:**

- Define the canonical naming contract: project name `Visual IP Illustrations`, repository slug `visual-ip-illustrations`, canonical skill id `$visual-ip-illustrations`, and legacy alias `$ian-xiaohei-illustrations`.
- Update skill metadata, agent metadata, README, examples, NOTICE, release checklist, and maintainer docs so the multi-IP product identity leads every public surface.
- Preserve the shipped Xiaohei default route, explicit Littlebox/Tom/Ferris/Sealos Seal routes, route ids, output path contracts, source records, brand records, and QA gates.
- Add validation and Node test coverage for canonical naming, legacy alias compatibility, route stability, install guidance, and stale old-name-only surfaces.
- Record migration guidance for local installs and release review so current users can adopt the new name smoothly.

## Requirements

### Validated

- Complete: Existing Xiaohei skill can plan and generate 16:9 Chinese article body illustrations from articles, posts, blogs, Notion content, screenshots, and single concepts - existing
- Complete: Existing Xiaohei workflow extracts cognitive anchors, produces shot lists, generates each image separately, checks outputs manually, and saves PNGs under `assets/<article-slug>-illustrations/` - existing
- Complete: Existing Xiaohei visual language is documented through modular references for style DNA, IP behavior, composition patterns, prompt templates, and QA - existing
- Complete: Existing package shape supports Codex skill installation through the `ian-xiaohei-illustrations/` subdirectory with `SKILL.md`, `agents/openai.yaml`, `references/`, and calibration assets - existing
- Complete: Existing repository includes public README usage examples, prompt examples, calibration images, MIT license, and NOTICE attribution - existing
- Complete: Xiaohei and Littlebox can be selected through deterministic routing metadata with Xiaohei as the default route - v1.0
- Complete: Littlebox ships as an isolated canonical IP pack with prompt, QA, language, background, attribution, and output path behavior - v1.0
- Complete: Maintainers can run a dependency-free validator that checks package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers - v1.0
- Complete: Public docs and prompt examples explain the two-IP Xiaohei/Littlebox package and release checklist - v1.0
- Complete: Tom can be selected as an explicit protected-character route with route-local rights, prompt, composition, QA, docs, metadata, release checklist, and validator coverage - v1.1
- Complete: Xiaohei remains the omitted-IP default while Littlebox and Tom remain explicit selectable routes - v1.1
- Complete: Protected-IP validation checks route metadata, docs markers, output paths, public sample gates, and route leakage locally through dependency-free Node scripts - v1.1
- Complete: Ferris can be selected as an explicit source-reviewed Rust-community mascot route with route-local source/trademark records, prompt, composition, QA, docs, metadata, release checklist, validator, and Node test coverage - v1.2
- Complete: Xiaohei remains the omitted-IP default while Littlebox, Tom, and Ferris remain explicit selectable routes - v1.2
- Complete: Mascot validation checks route metadata, docs markers, output paths, public sample gates, source/trademark boundaries, and route leakage locally through dependency-free Node scripts - v1.2
- Complete: Sealos Seal can be selected as an explicit brand-owned route with route-local source record, canonical pack, controller routing, docs, release checklist, validator coverage, and Node tests - v1.3
- Complete: Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes - v1.3
- Complete: The latest Sealos Seal route is logo-free across cap, hoodie chest, mascot body, props, and scene, with validator and Node test coverage at 78/78 and 40/40 after quick task 260614-k62 - v1.3 follow-up

### Active

- [ ] Establish `Visual IP Illustrations` as the canonical product name across planning docs, public docs, skill metadata, agent metadata, and release materials.
- [ ] Establish `visual-ip-illustrations` as the canonical repository and install slug while preserving migration guidance from `ian-xiaohei-illustrations`.
- [ ] Establish `$visual-ip-illustrations` as the canonical skill id while preserving `$ian-xiaohei-illustrations` as a documented legacy alias during the v1.4 transition.
- [ ] Preserve all shipped IP route behavior for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal during the rebrand.
- [ ] Update public examples and smoke prompts so users can request the canonical skill name and still understand legacy compatibility.
- [ ] Extend the validator and Node tests to check canonical naming, legacy alias compatibility, route stability, install guidance, and stale old-name-only surfaces.
- [ ] Record release evidence for validator output, Node tests, `git diff --check`, docs consistency, and compatibility smoke coverage.

### Out of Scope

- Visual behavior redesign - v1.4 is a naming and compatibility milestone.
- Adding a new visual IP route - route expansion resumes after the rebrand lands.
- Changing Xiaohei default behavior - compatibility remains a core requirement.
- Changing existing output directories for shipped routes - current user assets keep their path contracts.
- Creating a hosted app, UI, API, database, or build runtime - the package remains a lightweight Codex Skill.
- Removing the legacy `$ian-xiaohei-illustrations` invocation during v1.4 - migration guidance ships first.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit currently lives at `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, release checklist, scripts, and assets support GitHub distribution.

The current product has outgrown the original Xiaohei-only name. Xiaohei remains the compatibility baseline and omitted-IP default, while Littlebox, Tom, Ferris, and Sealos Seal now have isolated route-local packs, route metadata, output suffixes, docs, rights/source/brand boundaries, release gates, and local validation coverage.

v1.0 completed the two-IP foundation: Xiaohei remains the default route, Littlebox is an explicit selectable route, and the validator covers package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers.

v1.1 completed the Tom route: Tom remains explicit, gated-authorized, route-local, rights-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.1 completion evidence recorded validator 47/47 and Node tests 15/15.

v1.2 completed the Ferris route: Ferris remains explicit, source-reviewed, Rust-trademark-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.2 completion evidence recorded validator 60/60, Node tests 31/31, and `git diff --check` success.

v1.3 completed the Sealos Seal route: Sealos Seal remains explicit, brand-owned, route-local, uploaded-image-derived, logo-free after quick task 260614-k62, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The latest validation evidence recorded validator 78/78 and Node tests 40/40.

The current codebase map calls out fragile areas that matter for this work: repeated naming instructions across docs, route metadata, examples, validator strings, install commands, skill frontmatter, and agent metadata. v1.4 treats the naming contract as a first-class compatibility surface, with validator coverage to prevent drift.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Naming Compatibility**: Canonical identity becomes `Visual IP Illustrations` / `visual-ip-illustrations` / `$visual-ip-illustrations`, with `$ian-xiaohei-illustrations` preserved as a documented legacy alias during v1.4.
- **Route Compatibility**: Existing Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routing behavior, route ids, required references, output suffixes, and output directories remain stable.
- **IP Isolation**: Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal rules remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km; preserve Ferris source attribution for Karen Rustad Tolva and rustacean.net.
- **Trademark Boundary**: Ferris references record CC0/public-domain source context, while Rust word/logo usage follows the Rust Foundation trademark policy and avoids official-affiliation claims.
- **Brand Boundary**: Sealos Seal references preserve brand lineage, uploaded-image identity markers, logo-free route constraints, and generic mascot drift checks.
- **No Build Runtime**: The project stays usable as a lightweight skill package; validation can be script-based and dependency-free.
- **Image Generation Dependency**: Final generation still depends on the host agent's `image_gen` capability.
- **Documentation Language**: User-facing repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Build a multi-IP skill system inside the existing repository | The current package already has a complete Xiaohei workflow and public distribution shape | Good |
| Add Littlebox as the first additional IP | The Littlebox repository follows the same skill pattern and provides a strong contrasting IP contract | Good |
| Keep IP-specific rules in separate reference modules | The IPs have incompatible visual constraints, character anatomy, output paths, rights boundaries, and QA | Good |
| Add validation before broad refactoring | Current risks come from drift across prose docs, reference files, examples, and package boundaries | Good |
| Add Tom through an explicit authorized-IP milestone | Tom is a recognizable commercial character, so the route needs rights-boundary docs in addition to normal IP pack, prompt, QA, and validation work | Good |
| Add Ferris through a source-and-trademark-aware mascot milestone | Ferris has permissive copyright source context and Rust-related trademark boundaries, so the route needs attribution, source clarity, and endorsement-safe wording | Good |
| Add Sealos Seal through an uploaded-image-locked brand mascot milestone | The user selected the uploaded white seal in cap and hoodie as the Sealos mascot authority, so the route needs fixed visual markers, brand lineage, and drift checks | Good |
| Rebrand the product to Visual IP Illustrations | The current capability is a routeable multi-IP illustration system, and the Xiaohei-centered repository name now undersells the product | Pending |
| Preserve `$ian-xiaohei-illustrations` as a legacy alias during v1.4 | Existing user prompts and local installs should continue working while canonical naming rolls out | Pending |

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
*Last updated: 2026-06-14 after starting v1.4 Project Rebrand to Visual IP Illustrations*
