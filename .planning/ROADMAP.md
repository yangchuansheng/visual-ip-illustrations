# Roadmap: Visual IP Illustrations

## Overview

v1.7 adds OpenClaw as an explicit source-reviewed logo-mascot route. The milestone preserves all existing route behavior while adding the `openclaw` route, output suffix `openclaw`, output path `assets/<article-slug>-openclaw/`, source/license record, uploaded-logo visual authority, route-local references, public docs, release gates, validator checks, Node tests, and final release evidence.

**Current Milestone:** v1.7 OpenClaw Logo IP Integration
**Phase Range:** 33-37
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 33: OpenClaw Source and Route Contract** - Users can select OpenClaw through an explicit source-reviewed route with stable aliases, `default=false`, route id `openclaw`, output suffix `openclaw`, output path `assets/<article-slug>-openclaw/`, source/license authority, and uploaded-logo visual authority. (completed 2026-06-16)
- [x] **Phase 34: OpenClaw Canonical Pack** - Users can plan, prompt, edit, and QA OpenClaw article illustrations through route-local references that preserve the uploaded red logo-mascot identity. (completed 2026-06-16)
- [x] **Phase 35: OpenClaw Skill Controller Integration** - Users can invoke OpenClaw through the skill controller, mixed-IP workflows, generation/edit dispatch, QA routing, and delivery reports while all existing routes remain stable. (completed 2026-06-16)
- [x] **Phase 36: Public Documentation and Release Surface** - Users and maintainers can learn, invoke, review, and release OpenClaw through README, examples, NOTICE, release checklist, skill instructions, and agent metadata. (completed 2026-06-16)
- [x] **Phase 37: OpenClaw Validation and Release Evidence** - Maintainers can verify OpenClaw route metadata, source/license markers, output paths, docs, smoke prompts, leakage checks, public sample gates, and release readiness locally. (completed 2026-06-16)

## Phase Details

### Phase 33: OpenClaw Source and Route Contract

**Goal**: Users can select OpenClaw through an explicit route with source/license and uploaded-logo authority.
**Depends on**: Phase 32
**Requirements**: ROUTE-01, ROUTE-02, ROUTE-03, SRC-01, SRC-02
**Success Criteria** (what must be TRUE):

  1. `references/routing.md` includes route id `openclaw`, display name `OpenClaw`, `default=false`, output suffix `openclaw`, and output path `assets/<article-slug>-openclaw/`.
  2. OpenClaw aliases are explicit and avoid generic aliases such as `assistant`, `red mascot`, `crab`, or `logo`.
  3. `references/ips/openclaw/source.md` records the official OpenClaw repository, MIT license, OpenClaw Foundation copyright notice, uploaded-logo authority, public sample policy, review owner, and route status.
  4. Source and route metadata name the stable uploaded-logo markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
  5. Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, Seal, and OpenClaw remain explicit selectable routes.

**Plans:** 1/1 plans complete
Plans:

- [x] 33-01-PLAN.md - Add OpenClaw source record, route metadata, aliases, output suffix, output path, and source/license authority.

### Phase 34: OpenClaw Canonical Pack

**Goal**: Users can generate OpenClaw article illustrations through route-local references that preserve the uploaded logo identity.
**Depends on**: Phase 33
**Requirements**: PACK-01, PACK-02, PACK-03, PACK-04, PACK-05
**Success Criteria** (what must be TRUE):

  1. OpenClaw route-local files exist for index, source, style DNA, identity, composition patterns, prompt template, and QA checklist.
  2. Planning fields include OpenClaw state, OpenClaw action, core article idea, structure type, suggested objects, visible labels, and output path.
  3. Generation prompts make the red OpenClaw mascot perform the central cognitive article action in a sparse 16:9 illustration.
  4. Edit prompts cover stronger participation, uploaded-logo identity repair, title removal, text reduction, and unaffected-content preservation.
  5. QA rejects generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, route leakage, excessive text, and copied composition.

**Plans:** 1/1 plans complete
Plans:

- [x] 34-01-PLAN.md - Create OpenClaw route-local identity, style, composition, prompt, edit, QA, and sample-policy references.

### Phase 35: OpenClaw Skill Controller Integration

**Goal**: Users can invoke OpenClaw through runtime skill behavior while mixed-IP route isolation stays intact.
**Depends on**: Phase 34
**Requirements**: DOC-04, DOC-05
**Success Criteria** (what must be TRUE):

  1. `SKILL.md` includes OpenClaw route selection, progressive reference loading, planning fields, generation dispatch, edit routing, QA dispatch, and delivery report behavior.
  2. Mixed-IP requests create separate route groups for Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw.
  3. OpenClaw route behavior loads only OpenClaw required references.
  4. Existing omitted-IP Xiaohei behavior and explicit Littlebox, Tom, Ferris, and Seal behavior remain stable.

**Plans:** 1/1 plans complete
Plans:

- [x] 35-01-PLAN.md - Wire OpenClaw into skill runtime routing, reference loading, mixed-IP grouping, generation/edit/QA dispatch, and delivery reporting.

### Phase 36: Public Documentation and Release Surface

**Goal**: Users and maintainers can use OpenClaw through public and runtime-facing docs with source/license and sample-policy clarity.
**Depends on**: Phase 35
**Requirements**: DOC-01, DOC-02, DOC-03, DOC-04
**Success Criteria** (what must be TRUE):

  1. README route selection, workflow, output path, and route descriptions present OpenClaw as an explicit source-reviewed route.
  2. `examples/prompts.md` includes OpenClaw planning, generation, editing, and mixed-IP examples with `assets/<article-slug>-openclaw/` output paths.
  3. NOTICE records OpenClaw source and MIT attribution.
  4. RELEASE_CHECKLIST records source/license review, uploaded-logo visual authority, public sample policy, validator evidence, Node test evidence, and final release gates.
  5. `agents/openai.yaml` and broad skill metadata mention OpenClaw while preserving Visual IP Illustrations and the legacy skill alias.

**Plans:** 1/1 plans complete
Plans:

- [x] 36-01-PLAN.md - Update public docs, prompt examples, NOTICE, release checklist, skill instructions, and agent metadata for OpenClaw.

### Phase 37: OpenClaw Validation and Release Evidence

**Goal**: Maintainers can verify the OpenClaw route locally and release it with deterministic evidence.
**Depends on**: Phase 36
**Requirements**: VAL-01, VAL-02, VAL-03, VAL-04, VAL-05
**Success Criteria** (what must be TRUE):

  1. Validator fails on OpenClaw route metadata, source record, route-local pack, output path, docs, examples, NOTICE, release checklist, or agent metadata drift.
  2. Validator fails when OpenClaw identity markers leak into non-OpenClaw route packs.
  3. Validator fails when public generated OpenClaw samples appear without release checklist approval.
  4. Node tests cover OpenClaw route parsing, route ordering, default preservation, output path markers, source/license markers, smoke prompts, leakage fixtures, public asset gates, and full-pass output.
  5. Final evidence records validator output, Node test output, `git diff --check`, OpenClaw route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.

**Plans:** 1/1 plans complete
Plans:

- [x] 37-01-PLAN.md - Harden OpenClaw validation, Node regression tests, leakage scans, public sample gates, and release evidence.

## Progress

**Execution Order:**
Phases execute in numeric order: 33 -> 34 -> 35 -> 36 -> 37

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 33. OpenClaw Source and Route Contract | 1/1 | Complete    | 2026-06-16 |
| 34. OpenClaw Canonical Pack | 1/1 | Complete    | 2026-06-16 |
| 35. OpenClaw Skill Controller Integration | 1/1 | Complete    | 2026-06-16 |
| 36. Public Documentation and Release Surface | 1/1 | Complete    | 2026-06-16 |
| 37. OpenClaw Validation and Release Evidence | 1/1 | Complete    | 2026-06-16 |
