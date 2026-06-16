# Visual IP Illustrations

## What This Is

Visual IP Illustrations is a Codex Skill package for selectable visual-IP article illustrations. It turns article judgments, workflows, structures, states, and metaphors into 16:9 body illustrations while routing each image through the selected IP's character rules, prompt template, QA gates, output path, and source or brand boundary.

The shipped baseline supports Xiaohei, Littlebox, Tom, Ferris, and the hoodie Seal route. The v1.7 milestone adds OpenClaw as an explicit source-reviewed logo-mascot route using the uploaded red OpenClaw logo as the visual authority.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.7 OpenClaw Logo IP Integration

**Goal:** Add OpenClaw as a selectable visual IP route whose source record, logo-derived identity, prompts, QA gates, docs, output path, and validation coverage preserve the uploaded red OpenClaw logo as the route authority.

**Target features:**

- Add the explicit `openclaw` route with display name `OpenClaw`, route-specific aliases, `default=false`, output suffix `openclaw`, and output directory `assets/<article-slug>-openclaw/`.
- Add an OpenClaw source record that cites the official OpenClaw repository, MIT license, OpenClaw Foundation copyright notice, and the uploaded logo as route visual authority.
- Create an isolated OpenClaw route pack for style, identity, composition, prompt, edit, QA, source, and public sample policy.
- Wire OpenClaw into the skill controller, agent metadata, public docs, prompt examples, NOTICE, release checklist, and mixed-IP route grouping.
- Extend validator and Node tests for OpenClaw route metadata, source/license markers, output paths, docs, smoke prompts, leakage checks, public sample gates, and release evidence.

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
- Complete: Visual IP Illustrations is established as the canonical product, repository, install, and skill identity while preserving `$ian-xiaohei-illustrations` as a legacy alias - v1.4
- Complete: Public docs, examples, skill metadata, agent metadata, release materials, validator checks, and Node tests lead with the Visual IP Illustrations identity - v1.4
- Complete: Existing Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route behavior, output paths, attribution/source/brand boundaries, and legacy invocation remain stable after the rebrand - v1.4
- Complete: Rebrand validation evidence records validator 89/89, Node tests 51/51, and `git diff --check` success - v1.4
- Complete: English is the default repository, skill, reference, examples, release, validation, and maintainer-facing language while documented multilingual compatibility exceptions remain covered by validator and Node tests - v1.5
- Complete: Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route-local references, public docs, examples, NOTICE, release checklist, and validation output use English-default prose with approved exceptions - v1.5
- Complete: English-default validation evidence records validator 98/98, Node tests 66/66, residual Chinese scan success, docs consistency, compatibility smoke coverage, and `git diff --check` success - v1.5
- Complete: The former Sealos Seal route is now the product-neutral Seal route across route id, display name, aliases, output suffix, output directory, route table, route-local references, skill routing, docs, examples, metadata, release surfaces, validator checks, and Node tests - v1.6
- Complete: Active Seal route behavior and user-facing docs remove Sealos product, brand, cloud platform, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, and advertising-adjacent wording - v1.6
- Complete: The hoodie seal visual identity is preserved while cloud-developer metaphors are replaced with product-neutral article metaphors that suit a seal character - v1.6
- Complete: NOTICE, source record, release checklist, and QA gates describe Seal as product-neutral, logo-free, route-local, and free of brand ownership claims - v1.6
- Complete: Migration validation covers stale `sealos` route references, route id/output suffix/path drift, prompt leakage, docs leakage, source/brand boundary cleanup, and old fixture names - v1.6
- Complete: Seal migration release evidence records validator 97/97, Node tests 66/66, `git diff --check`, stale Sealos scan, docs consistency, and route migration smoke success - v1.6

### Active

- OpenClaw can be selected as an explicit source-reviewed route without changing Xiaohei's omitted-IP default behavior.
- OpenClaw route references preserve the uploaded red logo identity: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- OpenClaw prompts and QA treat the mascot as the cognitive action subject in sparse 16:9 article illustrations.
- OpenClaw docs, NOTICE, release checklist, examples, and metadata expose the source/license boundary and `assets/<article-slug>-openclaw/` output path.
- OpenClaw validation covers route contract, source record, route-local pack, docs, smoke prompts, public asset gates, and route leakage.

### Out of Scope

- Making OpenClaw the default visual IP - Xiaohei remains the omitted-IP default.
- Generic custom-IP import or marketplace behavior - v1.7 adds one concrete OpenClaw route.
- Public generated OpenClaw sample gallery before release review - public assets require sample approval.
- Replacing the uploaded OpenClaw logo identity with a generic red mascot, crab, lobster, robot, or blob.
- Turning OpenClaw route outputs into OpenClaw product advertisements - images stay article illustrations.
- Changing Xiaohei default behavior - compatibility remains a core requirement.
- Changing Littlebox, Tom, Ferris, or Seal route behavior - v1.7 is OpenClaw-route scoped.
- Changing root package identity or legacy `$ian-xiaohei-illustrations` invocation - Visual IP Illustrations remains the product identity.
- Forcing user-visible labels into English - labels continue to follow the user's requested language.
- Creating a hosted app, UI, API, database, or build runtime - the package remains a lightweight Codex Skill.

## Context

The existing repository is a documentation-first Codex Skill package. It has no application runtime, package manager, database, CI, or automated test runner. The installable unit currently lives at `ian-xiaohei-illustrations/`; root-level README, examples, license, notice, release checklist, scripts, and assets support GitHub distribution.

The current product has outgrown the original Xiaohei-only name. Xiaohei remains the compatibility baseline and omitted-IP default, while Littlebox, Tom, Ferris, and Sealos Seal now have isolated route-local packs, route metadata, output suffixes, docs, rights/source/brand boundaries, release gates, and local validation coverage.

v1.0 completed the two-IP foundation: Xiaohei remains the default route, Littlebox is an explicit selectable route, and the validator covers package shape, routes, references, prompt placeholders, docs links, output paths, and attribution markers.

v1.1 completed the Tom route: Tom remains explicit, gated-authorized, route-local, rights-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.1 completion evidence recorded validator 47/47 and Node tests 15/15.

v1.2 completed the Ferris route: Ferris remains explicit, source-reviewed, Rust-trademark-boundary aware, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The v1.2 completion evidence recorded validator 60/60, Node tests 31/31, and `git diff --check` success.

v1.3 completed the Sealos Seal route: Sealos Seal remained explicit, brand-owned, route-local, uploaded-image-derived, logo-free after quick task 260614-k62, and covered by docs, examples, metadata, release checklist, validator, and Node tests. The latest validation evidence recorded validator 78/78 and Node tests 40/40.

v1.4 completed the Visual IP Illustrations rebrand: the canonical product, repository, install, and skill identity now lead the public and runtime surfaces while the legacy `$ian-xiaohei-illustrations` alias remains documented and tested. The latest validation evidence recorded validator 89/89, Node tests 51/51, and `git diff --check` success.

v1.5 completed the English-default migration: public docs, skill instructions, route references, IP packs, examples, NOTICE, release checklist, validation output, and maintainer-facing content now use English-default prose with approved multilingual exceptions. The latest validation evidence recorded validator 98/98, Node tests 66/66, residual Chinese scan success, docs consistency, compatibility smoke coverage, and `git diff --check` success.

The current codebase map calls out fragile areas that matter for this work: repeated naming instructions across docs, route metadata, examples, validator strings, install commands, skill frontmatter, and agent metadata. v1.6 treats route debranding as a compatibility-sensitive migration: active route surfaces move to Seal, while historical planning records and prior milestone evidence can still mention Sealos as source history.

v1.7 starts the OpenClaw route milestone. Research confirmed OpenClaw is described by its official repository as a personal AI assistant, the official repository carries an MIT license with OpenClaw Foundation copyright, and the user-provided `openclaw-color.png` logo is the route visual authority for the new red logo-mascot IP.

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Naming Compatibility**: Canonical identity becomes `Visual IP Illustrations` / `visual-ip-illustrations` / `$visual-ip-illustrations`, with `$ian-xiaohei-illustrations` preserved as a documented legacy alias during v1.4.
- **Route Migration**: The former Sealos Seal active route becomes Seal, with route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
- **Historical Evidence**: Prior planning, quick-task history, and commit history can retain Sealos wording as historical source evidence.
- **IP Isolation**: Xiaohei, Littlebox, Tom, Ferris, and Seal rules remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km; preserve Ferris source attribution for Karen Rustad Tolva and rustacean.net.
- **Trademark Boundary**: Ferris references record CC0/public-domain source context, while Rust word/logo usage follows the Rust Foundation trademark policy and avoids official-affiliation claims.
- **Seal Identity**: Seal references preserve the existing hoodie seal markers, logo-free route constraints, and generic mascot drift checks while removing product and brand claims from active route behavior.
- **OpenClaw Source**: OpenClaw route references preserve the official repository, MIT license, and uploaded-logo authority through a route-local source record.
- **OpenClaw Identity**: OpenClaw route outputs preserve the uploaded red logo markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- **No Build Runtime**: The project stays usable as a lightweight skill package; validation can be script-based and dependency-free.
- **Image Generation Dependency**: Final generation still depends on the host agent's `image_gen` capability.
- **Documentation Language**: English is the default language for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy.
- **Multilingual Compatibility**: Chinese aliases, user-language visible labels, prompt placeholders, exact attribution/source names, and compatibility smoke fixtures remain allowed through documented exceptions.

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
| Rebrand the product to Visual IP Illustrations | The current capability is a routeable multi-IP illustration system, and the Xiaohei-centered repository name now undersells the product | Good |
| Preserve `$ian-xiaohei-illustrations` as a legacy alias during v1.4 | Existing user prompts and local installs should continue working while canonical naming rolls out | Good |
| Make English the default repository and skill language | The project is now a multi-IP skill package with public distribution and validator coverage, so English-default docs reduce ambiguity for broader users while compatibility exceptions preserve shipped behavior | Good |
| Debrand the Sealos Seal route into Seal | Sealos is a product name and can make a character route feel promotional; the useful IP is the seal character itself | Good |
| Add OpenClaw as a source-reviewed logo-mascot route | The user selected the uploaded red OpenClaw logo as a new IP authority, and the official OpenClaw repository provides MIT source context | Pending |

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
*Last updated: 2026-06-16 after starting v1.7 OpenClaw Logo IP Integration*
