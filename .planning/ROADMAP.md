# Roadmap: Visual IP Illustrations

## Overview

v1.5 makes English the default language for Visual IP Illustrations across public documentation, skill instructions, shared references, route-local IP packs, examples, release materials, validation output, and maintainer-facing repository content. The milestone preserves shipped multilingual compatibility surfaces: Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, canonical and legacy invocations, route ids, output paths, source/rights/brand records, and QA gates.

**Current Milestone:** v1.5 English Default Language Migration
**Phase Range:** 25-28
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 25: Language Policy and Residual Scan Contract** - Maintainers get a single English-default language policy, an explicit multilingual exception allowlist, and a scan contract for detecting stale Chinese prose. (completed 2026-06-14)
- [x] **Phase 26: Skill and Reference Content Migration** - Users can read skill instructions, routing, shared references, and all route-local IP packs in English-default prose while existing route behavior stays stable. (completed 2026-06-14)
- [x] **Phase 27: Public Documentation and Example Migration** - Users and maintainers can install, invoke, inspect, and release the package through English-default README, examples, NOTICE, and release checklist content. (completed 2026-06-14)
- [ ] **Phase 28: English-Default Validation and Release Evidence** - Maintainers can verify English-default coverage, exception handling, route stability, docs consistency, and release readiness locally.

## Phase Details

### Phase 25: Language Policy and Residual Scan Contract

**Goal**: Maintainers can identify the default language, allowed multilingual exceptions, and scan rules before broad docs migration begins.
**Depends on**: Phase 24
**Requirements**: LANG-01, LANG-02, LANG-03
**Success Criteria** (what must be TRUE):

  1. Maintainer can read that English is the default for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy.
  2. Maintainer can read the approved exception categories for Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
  3. Maintainer can run a residual Chinese scan or validator command that reports stale prose separately from approved multilingual tokens.
  4. The policy identifies the core compatibility surfaces that future phases must preserve.

**Plans:** 1/1 plans complete
Plans:

- [x] 25-01-PLAN.md — Create the root language policy, LANG-* validator checks, residual scan contract, and fixture tests.

### Phase 26: Skill and Reference Content Migration

**Goal**: Users can rely on English-default runtime instructions and route references while all shipped IP behavior remains stable.
**Depends on**: Phase 25
**Requirements**: SKILL-01, SKILL-02, SKILL-03, SKILL-04
**Success Criteria** (what must be TRUE):

  1. `ian-xiaohei-illustrations/SKILL.md` uses English-default prose and still documents canonical `$visual-ip-illustrations` plus legacy `$ian-xiaohei-illustrations`.
  2. `ian-xiaohei-illustrations/references/routing.md` and shared references use English-default prose while route ids, aliases, statuses, required references, output suffixes, and output paths stay stable.
  3. Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route-local references use English-default prose while preserving prompt fields, QA gates, source records, rights records, brand records, and visible-label behavior.
  4. `ian-xiaohei-illustrations/agents/openai.yaml` presents the skill in English-default prose and preserves Xiaohei as the omitted-IP default.
  5. No route-local migration collapses IP isolation or mixes source/rights/brand authority between routes.

**Plans:** 4/4 plans complete
Plans:

- [x] 26-01-PLAN.md — Migrate the runtime controller, route registry, and agent metadata.
- [x] 26-02-PLAN.md — Migrate shared Xiaohei compatibility references and the canonical Xiaohei pack.
- [x] 26-03-PLAN.md — Migrate Littlebox and Tom route-local packs.
- [x] 26-04-PLAN.md — Migrate Ferris and Sealos Seal route-local packs and run targeted Phase 26 language diagnostics.

### Phase 27: Public Documentation and Example Migration

**Goal**: Users and maintainers can learn, install, invoke, and release Visual IP Illustrations through English-default public docs and examples.
**Depends on**: Phase 26
**Requirements**: DOC-01, DOC-02, DOC-03, DOC-04
**Success Criteria** (what must be TRUE):

  1. README installation, route selection, workflow, validation, related project, and author sections use English-default prose.
  2. `examples/prompts.md` provides English-default copyable prompts for planning, generation, mixed-IP comparisons, legacy smoke tests, and route-specific prompts.
  3. NOTICE and RELEASE_CHECKLIST use English-default prose while preserving attribution/source/brand boundaries for Ian, Littlebox, Tom, Ferris, and Sealos Seal.
  4. Public docs preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, install path guidance, route status markers, and output path contracts.
  5. Public example captions and alt text follow the English-default policy while retaining exact required Chinese sample labels where they are intentional fixtures.

**Plans:** 1/1 plans complete

### Phase 28: English-Default Validation and Release Evidence

**Goal**: Maintainers can verify the English-default migration locally and release it with deterministic evidence.
**Depends on**: Phase 27
**Requirements**: VAL-01, VAL-02, VAL-03, VAL-04
**Success Criteria** (what must be TRUE):

  1. Validator checks English-default coverage for README, examples, `SKILL.md`, agent metadata, NOTICE, release checklist, routing, and route-local references.
  2. Validator checks the multilingual exception allowlist and fails on stale Chinese prose outside approved surfaces.
  3. Node tests cover English-default checks, allowed exception fixtures, route stability, invocation stability, and output path stability.
  4. Final evidence records validator output, Node test output, `git diff --check`, residual Chinese scan, docs consistency, and compatibility smoke coverage.
  5. UAT confirms users can migrate to English-default docs without losing Chinese article illustration workflows, route aliases, or visible-label behavior.

**Plans:** 0/1 plans complete

## Progress

**Execution Order:**
Phases execute in numeric order: 25 -> 26 -> 27 -> 28

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 25. Language Policy and Residual Scan Contract | 1/1 | Complete    | 2026-06-14 |
| 26. Skill and Reference Content Migration | 4/4 | Complete    | 2026-06-14 |
| 27. Public Documentation and Example Migration | 1/1 | Complete   | 2026-06-14 |
| 28. English-Default Validation and Release Evidence | 0/1 | Pending | — |
