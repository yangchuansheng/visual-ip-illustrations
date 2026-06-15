# Visual IP Illustrations

## What This Is

Visual IP Illustrations is a Codex Skill package for selectable visual-IP article illustrations. It turns article judgments, workflows, structures, states, and metaphors into 16:9 body illustrations while routing each image through the selected IP's character rules, prompt template, QA gates, output path, and source or brand boundary.

The shipped baseline supports Xiaohei, Littlebox, Tom, Ferris, and the hoodie Seal route. The v1.6 milestone debrands the former Sealos Seal route into a product-neutral Seal visual IP while preserving the existing white seal, navy cap, deep-blue hoodie, face, flippers, compact legs, and tail identity.

## Core Value

Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## Current Milestone: v1.6 Seal Route Debranding

**Goal:** Fully migrate the former Sealos Seal route to a product-neutral Seal route, removing Sealos product, brand, cloud platform, cloud OS, DevBox, Kubernetes, and advertising-adjacent wording while preserving the current hoodie seal visual identity.

**Target features:**

- Rename the route identity from Sealos Seal to Seal across route metadata, display copy, aliases, docs, examples, prompts, QA, release gates, validator checks, and Node tests.
- Migrate route id, output suffix, output directory, required-reference wording, and route-local file expectations from `sealos` to `seal`.
- Remove product and brand context from the Seal route, including Sealos product name, brand-owned status, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, and advertising-adjacent wording.
- Preserve the existing hoodie seal visual markers: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Update public docs, NOTICE, release checklist, skill metadata, examples, route-local references, validator fixtures, Node tests, and final release evidence for the Seal route migration.

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

### Active

- [ ] Rename the former Sealos Seal route to Seal across route id, display name, aliases, output suffix, output directory, route table, route-local references, skill routing, docs, examples, metadata, release surfaces, validator checks, and Node tests.
- [ ] Remove Sealos product, brand, cloud platform, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, and advertising-adjacent wording from active Seal route behavior and user-facing docs.
- [ ] Preserve the hoodie seal visual identity while replacing cloud-developer metaphors with product-neutral article metaphors that suit a seal character.
- [ ] Update NOTICE, source record, release checklist, and QA gates so the Seal route is product-neutral, logo-free, route-local, and free of brand ownership claims.
- [ ] Add migration validation for stale `sealos` route references, route id/output suffix/path drift, prompt leakage, docs leakage, source/brand boundary cleanup, and old fixture names.
- [ ] Record release evidence for validator output, Node tests, `git diff --check`, stale Sealos scan, docs consistency, and route migration smoke coverage.

### Out of Scope

- Visual character redesign - v1.6 preserves the existing hoodie seal identity.
- Adding a new visual IP route - v1.6 migrates an existing route.
- Changing Xiaohei default behavior - compatibility remains a core requirement.
- Changing Littlebox, Tom, or Ferris route behavior - v1.6 is Seal-route scoped.
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

## Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Naming Compatibility**: Canonical identity becomes `Visual IP Illustrations` / `visual-ip-illustrations` / `$visual-ip-illustrations`, with `$ian-xiaohei-illustrations` preserved as a documented legacy alias during v1.4.
- **Route Migration**: The former Sealos Seal active route becomes Seal, with route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
- **Historical Evidence**: Prior planning, quick-task history, and commit history can retain Sealos wording as historical source evidence.
- **IP Isolation**: Xiaohei, Littlebox, Tom, Ferris, and Seal rules remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km; preserve Ferris source attribution for Karen Rustad Tolva and rustacean.net.
- **Trademark Boundary**: Ferris references record CC0/public-domain source context, while Rust word/logo usage follows the Rust Foundation trademark policy and avoids official-affiliation claims.
- **Seal Identity**: Seal references preserve the existing hoodie seal markers, logo-free route constraints, and generic mascot drift checks while removing product and brand claims from active route behavior.
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
| Debrand the Sealos Seal route into Seal | Sealos is a product name and can make a character route feel promotional; the useful IP is the seal character itself | Pending |

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
*Last updated: 2026-06-15 after starting v1.6 Seal Route Debranding*
