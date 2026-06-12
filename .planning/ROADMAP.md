# Roadmap: Multi-IP Article Illustration Skills

## Overview

This MVP turns the existing Xiaohei-only Codex Skill into a reliable two-IP article illustration skill. The path starts with routing and shared workflow contracts, canonicalizes Xiaohei as the compatibility baseline, adds Littlebox as a complete vertical IP pack, makes the package shape executable through validation, then updates public documentation and release packaging around the working behavior.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Routing Foundation** - Users and maintainers get deterministic IP selection, Xiaohei defaulting, shared workflow boundaries, and route metadata. (completed 2026-06-12)
- [x] **Phase 2: Xiaohei Canonicalization** - Maintainers get a canonical Xiaohei IP pack while existing Xiaohei usage and paths keep working. (completed 2026-06-12)
- [x] **Phase 3: Littlebox Vertical Slice** - Users can request Littlebox and receive the correct identity, prompt, QA, output path, and attribution behavior. (completed 2026-06-12)
- [x] **Phase 4: Validation Hardening** - Maintainers can run one local command that catches package, routing, prompt, path, docs, and attribution drift. (completed 2026-06-12)
- [ ] **Phase 5: Documentation, Examples, and Release Packaging** - Users and maintainers get public docs, copyable examples, metadata, and release checks that match the two-IP package.

## Phase Details

### Phase 1: Routing Foundation

**Goal:** Users can omit or select the visual IP and the skill routes work through shared workflow rules with Xiaohei as the default.
**Mode:** mvp
**Depends on:** Nothing (first phase)
**Requirements:** ROUT-01, ROUT-02, ROUT-05, IPCK-03, IPCK-05
**Success Criteria** (what must be TRUE):

  1. User can omit an IP name and the skill follows the existing Xiaohei route by default.
  2. User can request Xiaohei through documented aliases and see the Xiaohei route selected.
  3. User-facing routing docs explain default IP behavior, explicit aliases, mixed-IP handling, and output paths.
  4. Maintainer can read shared workflow guidance that covers article understanding, cognitive-anchor selection, generation loop, QA handoff, asset preservation, and delivery reporting without IP-specific style rules.
  5. Maintainer can read each IP's aliases, output suffix, required references, and attribution context from one routing manifest or routing section.

**Plans:** 2/2 plans complete
**UI hint:** no

### Phase 2: Xiaohei Canonicalization

**Goal:** Maintainers can work from a canonical Xiaohei IP pack while users keep the current Xiaohei prompt, QA, and asset behavior.
**Mode:** mvp
**Depends on:** Phase 1
**Requirements:** IPCK-01, IPCK-04, XIAO-01, XIAO-02, XIAO-03, XIAO-04, XIAO-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can find Xiaohei visual language, IP contract, composition rules, prompt template, and quality gate under a canonical Xiaohei IP pack.
  2. Existing Xiaohei README and examples prompts still route to valid Xiaohei planning and generation instructions.
  3. Xiaohei outputs continue to use `assets/<article-slug>-illustrations/`.
  4. Xiaohei prompt and QA preserve the 16:9 white-background hand-drawn visual contract, solid-black character identity, labels, whitespace, and one-idea-per-image behavior.
  5. Legacy Xiaohei reference paths remain available and the anti-repeat guidance keeps prior examples as calibration material.

**Plans:** 3/3 plans complete
Plans:
**Wave 1**

- [x] 02-01-PLAN.md — Create canonical Xiaohei IP pack files with exact parity to current Xiaohei references.

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 02-02-PLAN.md — Preserve legacy root reference entry points and point routing metadata to canonical Xiaohei files.

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 02-03-PLAN.md — Wire canonical-first skill/docs pointers while preserving current Xiaohei prompts and output path.

**UI hint:** no

### Phase 3: Littlebox Vertical Slice

**Goal:** Users can request Littlebox as a distinct visual IP and receive Littlebox-specific planning, prompts, QA, saved outputs, and attribution.
**Mode:** mvp
**Depends on:** Phase 2
**Requirements:** ROUT-03, ROUT-04, IPCK-02, LBOX-01, LBOX-02, LBOX-03, LBOX-04, LBOX-05, LBOX-06, LBOX-07, DOCS-04
**Success Criteria** (what must be TRUE):

  1. User can request Littlebox through documented aliases and see Littlebox-specific planning, prompt, QA, and output path behavior.
  2. User can ask for both Xiaohei and Littlebox and receive separate variant groups for the same idea.
  3. Littlebox planning includes closed state, visual metaphor, pale sky-blue or pale lavender background choice, supporting objects, and short visible labels.
  4. Littlebox prompt and QA enforce closed paper-box identity, front-left three-quarter view, front-panel dot eyes, tiny legs, side-seam arm limits, amber jagged seam tape, near-white body, rough marker linework, accent colors, background balancing, and active character placement.
  5. Maintainer can verify Littlebox source attribution in `NOTICE.md`, including author, source repository, MIT context, and inspected commit.

**Plans:** 5/5 plans complete
Plans:
**Wave 1**

- [x] 03-01-PLAN.md — Create the canonical Littlebox IP pack under `references/ips/littlebox/`.

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 03-02-PLAN.md — Activate the Littlebox route in `references/routing.md` while preserving Xiaohei as default.

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 03-03-PLAN.md — Wire `SKILL.md` selected-route runtime behavior for Littlebox and mixed-IP variants.

**Wave 4** *(blocked on Wave 3 completion)*

- [x] 03-04-PLAN.md — Update Littlebox attribution and minimal active-route public docs.

**Wave 5** *(blocked on Wave 4 completion)*

- [x] 03-05-PLAN.md — Run and record package verification for the Littlebox vertical slice.

**UI hint:** no

### Phase 4: Validation Hardening

**Goal:** Maintainers can validate the installable skill package with a lightweight local command before release or broad documentation edits.
**Mode:** mvp
**Depends on:** Phase 3
**Requirements:** VALD-01, VALD-02, VALD-03, VALD-04, VALD-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can run one local validation command for the installable skill package without external services or an application framework.
  2. Validation reports required package shape, metadata, routing aliases, reference files, legacy paths, prompt placeholders, output suffixes, docs links, and NOTICE attribution status.
  3. Validation exits nonzero when a required reference path, output path rule, alias group, prompt placeholder, or attribution marker is missing.
  4. Maintainer can use manual smoke prompts to verify default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant behavior.

**Plans:** 3/3 plans complete
Plans:
**Wave 1**

- [x] 04-01-PLAN.md — Create the dependency-free validator harness and parser foundation.

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 04-02-PLAN.md — Implement the full skill package contract check matrix.

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 04-03-PLAN.md — Prove positive and negative validation behavior and close Phase 4.

**UI hint:** no

### Phase 5: Documentation, Examples, and Release Packaging

**Goal:** Users and maintainers can understand, use, verify, and package the two-IP skill from public docs and release materials.
**Mode:** mvp
**Depends on:** Phase 4
**Requirements:** DOCS-01, DOCS-02, DOCS-03, DOCS-05, DOCS-06
**Success Criteria** (what must be TRUE):

  1. README explains multi-IP support, Xiaohei default behavior, and concise planning/generation examples for Xiaohei, Littlebox, and same-idea IP contrast.
  2. `examples/prompts.md` gives copyable prompts for Xiaohei, Littlebox, and mixed-IP variants.
  3. `agents/openai.yaml` metadata reflects selectable IP support while preserving Xiaohei as the default behavior.
  4. Maintainer can follow a release checklist that requires validation, both-IP smoke tests, attribution review, and installable package boundary checks.

**Plans:** TBD
**UI hint:** no

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Routing Foundation | 2/2 | Complete    | 2026-06-12 |
| 2. Xiaohei Canonicalization | 3/3 | Complete    | 2026-06-12 |
| 3. Littlebox Vertical Slice | 5/5 | Complete    | 2026-06-12 |
| 4. Validation Hardening | 3/3 | Complete   | 2026-06-12 |
| 5. Documentation, Examples, and Release Packaging | 0/TBD | Not started | - |
