# Phase 12: Ferris Canonical Pack - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-13T15:38:47+08:00
**Phase:** 12-Ferris Canonical Pack
**Areas discussed:** Ferris pack layout, source record reuse, Ferris identity, Rust-themed article action language, prompt and output fields, QA and edit taxonomy, downstream scope fences

---

## Ferris Pack Layout

| Option | Description | Selected |
|--------|-------------|----------|
| Tom-shaped route pack | Create `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` beside existing `source.md`. | yes |
| Littlebox-shaped route pack with language module | Add a separate `language-and-labels.md` for Ferris label rules. | |
| Minimal three-file pack | Create only identity, prompt, and QA files, leaving index/style/composition implicit. | |

**User's choice:** Auto-selected Tom-shaped route pack.
**Notes:** Tom is the strongest analog because it already carries route status, source/rights authority, prompt, QA, and scope-boundary behavior. Ferris needs the same operational separation with source-reviewed and trademark-safe wording.

---

## Source Record Reuse

| Option | Description | Selected |
|--------|-------------|----------|
| Compact source pointer | Keep full Phase 11 details in `source.md`; operational files carry short source/trademark notes and pointers. | yes |
| Duplicate source sections | Repeat the source, author, CC0, trademark, sample, and review sections across every Ferris file. | |
| Index-only pointer | Put the source/trademark note only in `index.md` and omit it from prompt/QA files. | |

**User's choice:** Auto-selected compact source pointer.
**Notes:** `source.md` remains the authority. Prompt and QA surfaces still need compact notes so generated planning, edit, and delivery outputs preserve the boundary.

---

## Ferris Identity

| Option | Description | Selected |
|--------|-------------|----------|
| Mascot crab identity with strict route gates | Define Ferris as the route-selected crab mascot with recognition cues, generic-crab rejection, route isolation, and source-asset tracing rejection. | yes |
| Generic Rust crab | Allow any crab-like Rust metaphor as long as Rust concepts are present. | |
| Source-asset likeness target | Use rustacean.net source poses and asset-sheet likeness as the primary visual target. | |

**User's choice:** Auto-selected mascot crab identity with strict route gates.
**Notes:** Ferris must stay recognizable and active while avoiding generic crab drift and source-asset tracing. The route remains isolated from Xiaohei, Littlebox, and Tom identities.

---

## Rust-Themed Article Action Language

| Option | Description | Selected |
|--------|-------------|----------|
| Rust-themed cognitive actions | Use ownership, borrow, lifetime, compiler, type-check, safety, crate, trait, dependency, release, and review metaphors as physical article actions. | yes |
| General mascot actions | Use generic carrying, guarding, sorting, and stamping without Rust-themed supporting objects. | |
| Code-tutorial visuals | Use code, IDE screenshots, Rust logos, and language teaching diagrams as the dominant visual language. | |

**User's choice:** Auto-selected Rust-themed cognitive actions.
**Notes:** Ferris should explain cognitive actions for articles with Rust-flavored systems metaphors while preserving trademark and endorsement boundaries.

---

## Prompt And Output Fields

| Option | Description | Selected |
|--------|-------------|----------|
| Full Ferris planning and prompt contract | Include Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note. | yes |
| Reuse Tom prompt fields verbatim | Keep Tom field names and replace character names only. | |
| Minimal prompt body | Define only one generation prompt and leave shot-list fields to controller integration. | |

**User's choice:** Auto-selected full Ferris planning and prompt contract.
**Notes:** FIP-02 requires the planning fields, and Ferris needs the additional source/trademark note field. Output path is locked to `assets/<article-slug>-ferris/`.

---

## QA And Edit Taxonomy

| Option | Description | Selected |
|--------|-------------|----------|
| Failure-specific QA and repairs | Define pass criteria, failure categories, iteration moves, and edit prompts for participation, identity, trademark, title, text, and unaffected content. | yes |
| Pass/fail checklist only | Define acceptance and rejection criteria, leaving edit prompts to future implementation. | |
| Generic shared QA | Reuse Xiaohei/Littlebox/Tom QA language with only route names changed. | |

**User's choice:** Auto-selected failure-specific QA and repairs.
**Notes:** FIP-04 and FIP-05 require both rejection categories and repair prompts. The taxonomy aligns with Phase 12 success criteria and Phase 15 validator markers.

---

## Downstream Scope Fences

| Option | Description | Selected |
|--------|-------------|----------|
| Strict Phase 12 pack-only fence | Create Ferris pack files only; defer route controller, public docs, metadata, release checklist, and validator hardening. | yes |
| Opportunistic integration | Update routing, SKILL, docs, metadata, release checklist, and validator while creating the pack. | |
| Planning-only source notes | Record Ferris pack decisions and leave file creation to Phase 13. | |

**User's choice:** Auto-selected strict Phase 12 pack-only fence.
**Notes:** ROADMAP maps controller work to Phase 13, docs/release surface to Phase 14, and validation hardening to Phase 15. Phase 12 should keep implementation focused on route-local canonical references.

---

## the agent's Discretion

- Auto mode selected all meaningful gray areas.
- Auto mode chose Tom-shaped pack structure as the recommended default.
- Auto mode chose compact source/trademark pointers to `source.md`.
- Auto mode chose strict Ferris crab mascot identity with route isolation, generic-crab rejection, and source-asset tracing rejection.
- Auto mode chose Rust-themed physical article action language with trademark-safe boundaries.
- Auto mode chose full planning/prompt/output fields, including `Source/trademark note`.
- Auto mode chose failure-specific QA and edit prompt taxonomy.
- Auto mode chose strict Phase 12 scope fences for Phases 13, 14, and 15.

## Deferred Ideas

- Skill controller integration belongs to Phase 13.
- Public docs, examples, metadata, NOTICE consistency, and release checklist expansion belong to Phase 14.
- Validator and Node test hardening belong to Phase 15.
- Machine-readable mascot manifests, asset manifests, visual regression, packaging scripts, route selectors, and English localization belong to v2.
