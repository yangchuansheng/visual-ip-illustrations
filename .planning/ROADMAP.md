# Roadmap: Visual IP Illustrations

## Overview

v1.4 rebrands the project from the Xiaohei-centered `ian-xiaohei-illustrations` identity to `Visual IP Illustrations`. The milestone establishes the canonical product, repository, install, and skill names while preserving legacy `$ian-xiaohei-illustrations` compatibility, existing route behavior, output path contracts, attribution/source/brand boundaries, and local validator confidence.

**Current Milestone:** v1.4 Project Rebrand to Visual IP Illustrations
**Phase Range:** 21-24
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 21: Naming and Compatibility Contract** - Maintainers get a single source of truth for canonical name, repository slug, install slug, canonical skill id, legacy alias, and compatibility boundaries. (completed 2026-06-14)
- [x] **Phase 22: Skill Package and Runtime Metadata Rebrand** - Users can discover and invoke the canonical skill identity while all shipped route behavior remains stable. (completed 2026-06-14)
- [x] **Phase 23: Public Documentation and Examples Rebrand** - Users and maintainers get README, examples, NOTICE, install, migration, and release guidance that leads with Visual IP Illustrations. (completed 2026-06-14)
- [ ] **Phase 24: Validation and Release Evidence** - Maintainers can verify canonical naming, legacy alias compatibility, route stability, docs consistency, and final release readiness locally.

## Phase Details

### Phase 21: Naming and Compatibility Contract

**Goal**: Maintainers can rely on one explicit naming contract before package metadata and public docs change.
**Depends on**: Phase 20
**Requirements**: RBRD-01, RBRD-02, RBRD-03, RBRD-04
**Success Criteria** (what must be TRUE):

  1. Maintainer can read the canonical product name `Visual IP Illustrations`.
  2. Maintainer can read the canonical repository and install slug `visual-ip-illustrations`.
  3. Maintainer can read the canonical skill id `$visual-ip-illustrations`.
  4. Maintainer can read the legacy alias policy for `$ian-xiaohei-illustrations`.
  5. Maintainer can see the route behavior and output path contracts that must stay stable during the rebrand.

**Plans:** 1/1 plans complete

### Phase 22: Skill Package and Runtime Metadata Rebrand

**Goal**: Users can discover the canonical skill identity and keep using existing IP routes with stable routing, outputs, and compatibility behavior.
**Depends on**: Phase 21
**Requirements**: PKG-01, PKG-02, PKG-03, PKG-04
**Success Criteria** (what must be TRUE):

  1. Installed skill metadata exposes Visual IP Illustrations as the canonical identity.
  2. Agent metadata presents the skill as a multi-IP article illustration package.
  3. Xiaohei remains the omitted-IP default route.
  4. Littlebox, Tom, Ferris, and Sealos Seal remain explicit routes with stable route ids, aliases, statuses, required references, and output suffixes.
  5. Maintainer can follow local migration guidance from the legacy package path to the canonical package path.

**Plans:** 1/1 plans complete

Plans:

- [x] 22-01-PLAN.md — Rebrand runtime/package metadata and sync directly affected validation checks.

### Phase 23: Public Documentation and Examples Rebrand

**Goal**: Users and maintainers can install, invoke, inspect, and release Visual IP Illustrations using canonical docs and compatibility examples.
**Depends on**: Phase 22
**Requirements**: DOC-01, DOC-02, DOC-03, DOC-04
**Success Criteria** (what must be TRUE):

  1. README starts with Visual IP Illustrations and explains the multi-IP product identity.
  2. README install commands include canonical clone/install guidance and legacy compatibility guidance.
  3. `examples/prompts.md` includes canonical `$visual-ip-illustrations` prompts and legacy `$ian-xiaohei-illustrations` smoke prompts.
  4. NOTICE and release checklist preserve Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries.
  5. Public docs avoid stale old-name-only framing on primary surfaces.

**Plans:** 1/1 plans complete

Plans:

- [x] 23-01-PLAN.md — Rebrand README, examples, NOTICE, and release checklist public docs while preserving route markers and validation baselines.

### Phase 24: Validation and Release Evidence

**Goal**: Maintainers can verify the rebrand locally and release it with deterministic evidence.
**Depends on**: Phase 23
**Requirements**: VAL-01, VAL-02, VAL-03, VAL-04
**Success Criteria** (what must be TRUE):

  1. Validator checks canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs.
  2. Validator checks legacy alias compatibility markers and install migration guidance.
  3. Node tests cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures.
  4. Final release evidence records validator output, Node test output, `git diff --check`, docs consistency, and compatibility smoke coverage.
  5. UAT confirms current users can migrate naming without losing route behavior.

**Plans:** 0/0 plans complete

## Progress

**Execution Order:**
Phases execute in numeric order: 21 -> 22 -> 23 -> 24

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 21. Naming and Compatibility Contract | 1/1 | Complete    | 2026-06-14 |
| 22. Skill Package and Runtime Metadata Rebrand | 1/1 | Complete    | 2026-06-14 |
| 23. Public Documentation and Examples Rebrand | 1/1 | Complete   | 2026-06-14 |
| 24. Validation and Release Evidence | 0/0 | Pending | - |
