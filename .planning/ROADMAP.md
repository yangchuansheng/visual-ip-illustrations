# Roadmap: Visual IP Illustrations

## v1.8 Go Gopher Visual IP Integration

v1.8 adds Go Gopher as an explicit source-reviewed mascot route. The milestone preserves all existing route behavior while adding the `gopher` route, output suffix `gopher`, output path `assets/<article-slug>-gopher/`, source/license record, Renee French attribution, Creative Commons Attribution 4.0 boundary, local `gopher.png` visual authority, route-local references, public docs, release gates, validator checks, Node tests, and final release evidence.

**Current Milestone:** v1.8 Go Gopher Visual IP Integration
**Phase Range:** 38-42
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 38: Go Gopher Source and Route Contract** - Users can select Go Gopher through an explicit source-reviewed route with stable aliases, `default=false`, route id `gopher`, output suffix `gopher`, output path `assets/<article-slug>-gopher/`, source/license authority, and local `gopher.png` visual authority. (completed 2026-06-16)
- [x] **Phase 39: Go Gopher Canonical Pack** - Users can plan, prompt, edit, and QA Go Gopher article illustrations through route-local references that preserve the local `gopher.png` mascot identity. (completed 2026-06-16)
- [ ] **Phase 40: Go Gopher Skill Controller Integration** - Users can invoke Go Gopher through the skill controller, mixed-IP workflows, generation/edit dispatch, QA routing, and delivery reports while all existing routes remain stable.
- [ ] **Phase 41: Public Documentation and Release Surface** - Users and maintainers can learn, invoke, review, and release Go Gopher through README, examples, NOTICE, release checklist, skill instructions, and agent metadata.
- [ ] **Phase 42: Go Gopher Validation and Release Evidence** - Maintainers can verify Go Gopher route metadata, source/license markers, output paths, docs, smoke prompts, leakage checks, public sample gates, and release readiness locally.

## Phase Details

### Phase 38: Go Gopher Source and Route Contract

**Goal**: Users can select Go Gopher through an explicit route with source/license and local `gopher.png` authority.
**Depends on**: Phase 37
**Requirements**: ROUTE-01, ROUTE-02, ROUTE-03, SRC-01, SRC-02
**Success Criteria** (what must be TRUE):

  1. User can select Go Gopher with explicit Go Gopher aliases while omitted visual-IP requests still select Xiaohei.
  2. User sees route id `gopher`, display name `Go Gopher`, `default=false`, output suffix `gopher`, and output path `assets/<article-slug>-gopher/` in routing metadata.
  3. Maintainer can inspect the Go Gopher source record and see Go project page context, Renee French attribution, Creative Commons Attribution 4.0 boundary, local `gopher.png` authority, sample policy, review owner, and route status.
  4. User and maintainer can identify the route as `source-reviewed` and can see local `gopher.png` treated as the visual reference for Go Gopher identity.
  5. Maintainer can confirm Xiaohei remains the only omitted-IP default while Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher remain explicit selectable routes.

**Plans**: 1 plan

Plans:

- [x] 38-01-PLAN.md — Go Gopher source and route contract

### Phase 39: Go Gopher Canonical Pack

**Goal**: Users can generate Go Gopher article illustrations through route-local references that preserve the `gopher.png` identity.
**Depends on**: Phase 38
**Requirements**: PACK-01, PACK-02, PACK-03, PACK-04, PACK-05
**Success Criteria** (what must be TRUE):

  1. User can read a Go Gopher route-local pack with index, source, style DNA, identity, composition patterns, prompt template, and QA checklist.
  2. User can plan Go Gopher shots with route-specific fields for Gopher state, Gopher action, core article idea, structure type, suggested objects, visible labels, and output path.
  3. User can generate prompts where Go Gopher performs the central cognitive article action in a sparse 16:9 illustration.
  4. User can apply Go Gopher edit prompts for stronger mascot participation, `gopher.png` identity repair, title removal, text reduction, and unaffected-content preservation.
  5. User can apply QA gates that catch generic blue mascot drift, realistic animal drift, missing Gopher markers, Go logo confusion, official-endorsement claims, passive placement, route leakage, excessive text, and copied composition.

**Plans**: 1 plan

Plans:

- [x] 39-01-PLAN.md — Go Gopher canonical pack

### Phase 40: Go Gopher Skill Controller Integration

**Goal**: Users can invoke Go Gopher through runtime skill behavior while mixed-IP route isolation stays intact.
**Depends on**: Phase 39
**Requirements**: RUN-01, RUN-02, RUN-03, RUN-04
**Success Criteria** (what must be TRUE):

  1. User can invoke Go Gopher through route selection, progressive reference loading, planning fields, generation dispatch, edit routing, QA dispatch, and delivery reporting.
  2. User can request mixed-IP output and receive separate route groups for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
  3. User receives Go Gopher delivery reports that include selected visual IP, image count, purpose per image, saved path under `assets/<article-slug>-gopher/`, and route stability notes.
  4. User can still use existing omitted-IP Xiaohei behavior plus explicit Littlebox, Tom, Ferris, Seal, and OpenClaw behavior after Go Gopher is wired in.
  5. Agent metadata and skill instructions present Go Gopher as a selectable route while Visual IP Illustrations and legacy `$ian-xiaohei-illustrations` invocation remain available.

**Plans**: TBD

### Phase 41: Public Documentation and Release Surface

**Goal**: Users and maintainers can use Go Gopher through public and runtime-facing docs with source/license and sample-policy clarity.
**Depends on**: Phase 40
**Requirements**: DOC-01, DOC-02, DOC-03, DOC-04, DOC-05
**Success Criteria** (what must be TRUE):

  1. User can read README route selection, workflow, output path, and route descriptions with Go Gopher as an explicit source-reviewed route.
  2. User can copy Go Gopher planning, generation, editing, and mixed-IP examples with `assets/<article-slug>-gopher/` output paths.
  3. Maintainer can read NOTICE and release checklist entries for Renee French attribution, Creative Commons Attribution 4.0 boundary, `gopher.png` visual authority, public sample policy, and release review gates.
  4. User and maintainer can see Go Gopher docs preserve default-route behavior, route isolation, source-reviewed status, and official-endorsement boundaries.
  5. Public release surfaces stay consistent across README variants, prompt examples, agent metadata, NOTICE, and release checklist.

**Plans**: TBD

### Phase 42: Go Gopher Validation and Release Evidence

**Goal**: Maintainers can verify the Go Gopher route locally and release it with deterministic evidence.
**Depends on**: Phase 41
**Requirements**: VAL-01, VAL-02, VAL-03, VAL-04, VAL-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can run validation that fails on Go Gopher route metadata, source record, route-local pack, output path, docs, examples, NOTICE, release checklist, or agent metadata drift.
  2. Maintainer can run validation that fails when Go Gopher identity markers leak into non-Gopher route packs.
  3. Maintainer can run validation that fails when public generated Go Gopher samples appear without release checklist approval.
  4. Maintainer can run Node tests that cover Go Gopher route parsing, route ordering, default preservation, output path markers, source/license markers, smoke prompts, leakage fixtures, public asset gates, and full-pass output.
  5. Maintainer can inspect final evidence for validator output, Node test output, `git diff --check`, Go Gopher route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.

**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 38 -> 39 -> 40 -> 41 -> 42

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 38. Go Gopher Source and Route Contract | 1/1 | Complete   | 2026-06-16 |
| 39. Go Gopher Canonical Pack | 1/1 | Complete   | 2026-06-16 |
| 40. Go Gopher Skill Controller Integration | 0/1 | Not started | - |
| 41. Public Documentation and Release Surface | 0/1 | Not started | - |
| 42. Go Gopher Validation and Release Evidence | 0/1 | Not started | - |
