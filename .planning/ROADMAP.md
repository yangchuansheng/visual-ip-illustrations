# Roadmap: Visual IP Illustrations

## Overview

v1.6 fully migrates the former Sealos Seal route into a product-neutral Seal visual IP. The milestone removes Sealos product, brand, cloud platform, cloud OS, DevBox, Kubernetes, and advertising-adjacent wording from active route behavior while preserving the existing hoodie seal character: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.

**Current Milestone:** v1.6 Seal Route Debranding
**Phase Range:** 29-32
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 29: Seal Route Identity Migration** - Users can select the active route as product-neutral Seal with route id `seal`, output suffix `seal`, output path `assets/<article-slug>-seal/`, and stable explicit routing. (pending) (completed 2026-06-15)
- [ ] **Phase 30: Seal Pack Debranding** - Users can plan, prompt, edit, and QA hoodie Seal illustrations through product-neutral route-local references while the existing visual identity stays stable. (pending)
- [ ] **Phase 31: Public Documentation and Release Surface Migration** - Users and maintainers can learn, invoke, review, and release the Seal route through product-neutral README, examples, NOTICE, release checklist, skill instructions, and agent metadata. (pending)
- [ ] **Phase 32: Seal Migration Validation and Release Evidence** - Maintainers can verify stale Sealos cleanup, route migration, output path stability, prompt leakage, docs consistency, and release readiness locally. (pending)

## Phase Details

### Phase 29: Seal Route Identity Migration

**Goal**: Users can select the former Sealos Seal route through a product-neutral Seal route identity.
**Depends on**: Phase 28
**Requirements**: ROUTE-01, ROUTE-02, ROUTE-03, ROUTE-04
**Success Criteria** (what must be TRUE):

  1. Route metadata uses display name `Seal`, route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
  2. Seal aliases describe a seal character and avoid Sealos product, brand, mascot, cloud platform, and advertising wording.
  3. Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes.
  4. Mixed-IP routing creates separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Seal with route-local references and output directories.

**Plans:** 1/1 plans complete
Plans:

- [x] 29-01-PLAN.md - Migrate route metadata, route id, aliases, output suffix, output path, and skill routing from Sealos Seal to Seal.

### Phase 30: Seal Pack Debranding

**Goal**: Users can generate hoodie Seal article illustrations without product or brand context leaking into route-local behavior.
**Depends on**: Phase 29
**Requirements**: PACK-01, PACK-02, PACK-03, PACK-04
**Success Criteria** (what must be TRUE):

  1. Seal route-local references preserve the hoodie seal identity markers without active Sealos product or brand context.
  2. Prompt and composition guidance use product-neutral article metaphors instead of cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, or Sealos platform props.
  3. QA gates check hoodie seal identity, logo-free output, product-neutral route isolation, active cognitive participation, sparse labels, and article-metaphor quality.
  4. The Seal source record contains product-neutral character authority, visual markers, sample policy, and historical source notes without active brand-owned claims.

**Plans:** 1/2 plans executed
Plans:

- [x] 30-01-PLAN.md - Rename and debrand route-local Seal source, identity, style, and composition references.
- [ ] 30-02-PLAN.md - Rewrite Seal prompt, edit, QA, and delivery rules around product-neutral article metaphors and hoodie seal identity.

### Phase 31: Public Documentation and Release Surface Migration

**Goal**: Users and maintainers can use the Seal route through public and runtime-facing docs that avoid Sealos product promotion.
**Depends on**: Phase 30
**Requirements**: DOC-01, DOC-02, DOC-03, DOC-04
**Success Criteria** (what must be TRUE):

  1. README route selection, workflow, output path, and route descriptions present Seal as the active route name.
  2. `examples/prompts.md` includes product-neutral Seal prompts and new `assets/<article-slug>-seal/` output path examples.
  3. NOTICE and RELEASE_CHECKLIST describe Seal as product-neutral, logo-free, and free of Sealos brand wording for active route behavior.
  4. `SKILL.md` and `agents/openai.yaml` present Seal as the selectable route while Visual IP Illustrations and the legacy skill alias remain stable.

**Plans:** 0/1 plans complete
Plans:

- [ ] 31-01-PLAN.md - Migrate README, examples, NOTICE, release checklist, skill instructions, and agent metadata to Seal route wording.

### Phase 32: Seal Migration Validation and Release Evidence

**Goal**: Maintainers can verify the Seal migration locally and release it with deterministic evidence.
**Depends on**: Phase 31
**Requirements**: VAL-01, VAL-02, VAL-03, VAL-04
**Success Criteria** (what must be TRUE):

  1. Validator fails on stale Sealos route identity in active route metadata, docs, prompts, QA, examples, release surfaces, or tests.
  2. Validator allows historical Sealos mentions only in prior milestone evidence, source-history notes, commit references, and explicit migration context.
  3. Node tests cover Seal route parsing, route ordering, output path migration, stale Sealos leakage fixtures, prompt leakage fixtures, docs leakage fixtures, and full-pass output.
  4. Final evidence records validator output, Node test output, `git diff --check`, stale Sealos scan, docs consistency, and route migration smoke coverage.
  5. UAT confirms Seal outputs keep the hoodie seal identity while product, brand, and cloud-platform cues are absent from active route behavior.

**Plans:** 0/1 plans complete
Plans:

- [ ] 32-01-PLAN.md - Harden Seal migration validation, Node regression tests, stale Sealos scans, and release evidence.

## Progress

**Execution Order:**
Phases execute in numeric order: 29 -> 30 -> 31 -> 32

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 29. Seal Route Identity Migration | 1/1 | Complete   | 2026-06-15 |
| 30. Seal Pack Debranding | 1/2 | In Progress|  |
| 31. Public Documentation and Release Surface Migration | 0/1 | Pending | - |
| 32. Seal Migration Validation and Release Evidence | 0/1 | Pending | - |
