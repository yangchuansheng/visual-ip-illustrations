# Roadmap: Multi-IP Article Illustration Skills

## Overview

v1.2 adds Ferris the Rustacean as the fourth selectable visual IP while preserving the shipped Xiaohei default, Littlebox explicit route, and Tom protected-character route. The milestone follows the source-aware mascot dependency chain: Ferris source and trademark boundary, Ferris canonical pack, skill controller integration, public docs and release surface, then validation hardening. The package stays a lightweight Markdown/YAML Codex Skill with dependency-free local validation and host-provided image generation.

**Current Milestone:** v1.2 Ferris Rust Mascot IP Integration
**Phase Range:** 11-15
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 11: Ferris Source and Route Contract** - Maintainers get Ferris source, CC0/public-domain context, Rust trademark boundary, aliases, route metadata, and public-sample gates before broad release. (completed 2026-06-13)
- [ ] **Phase 12: Ferris Canonical Pack** - Maintainers get an isolated Ferris reference pack for identity, planning, prompts, composition, QA, edits, source notes, and trademark-boundary behavior.
- [ ] **Phase 13: Skill Controller Integration** - Users can explicitly select Ferris or request separate Xiaohei, Littlebox, Tom, and Ferris variants while Xiaohei remains the only default route.
- [ ] **Phase 14: Docs, Examples, and Release Surface** - Users and maintainers get Ferris-aware README guidance, copyable prompts, metadata, NOTICE wording, and release checks with consistent source/trademark wording.
- [ ] **Phase 15: Validation Hardening** - Maintainers can run local validation and tests that cover Ferris route behavior, source/trademark boundaries, docs markers, paths, and route leakage gates.

## Phase Details

### Phase 11: Ferris Source and Route Contract

**Goal**: Maintainers can audit Ferris source, copyright waiver, Rust trademark boundary, route metadata, and public-sample policy before Ferris is treated as a selectable mascot route.
**Depends on**: Phase 10
**Requirements**: FRGT-01, FRGT-02, FRGT-03, FRGT-04, FERR-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can read Ferris source, author, copyright waiver, reference URLs, Rust trademark policy context, endorsement boundary, allowed use, restricted use, distribution boundary, sample policy, and review owner in Ferris-specific documentation.
  2. Maintainer can distinguish Ferris source attribution from Rust trademark or official-affiliation permission in `NOTICE.md`.
  3. Maintainer can see explicit Ferris route-status wording shared by routing docs, README, examples, and release checklist.
  4. Maintainer can block Rust-logo-forward or official-affiliation public samples until release review records explicit approval.
  5. Maintainer can inspect Ferris route metadata, aliases, default flag, output suffix, required references, attribution context, source status, and trademark boundary in `references/routing.md`.

**Plans:** 3/3 plans complete

Plans:

- [x] 11-01-PLAN.md — Create Ferris source record, route row, and NOTICE source/trademark boundary.
- [x] 11-02-PLAN.md — Add public route-status wording, Ferris path tokens, and release checklist sample gate.
- [x] 11-03-PLAN.md — Repair validator baseline and add minimal Phase 11 Ferris contract checks.

### Phase 12: Ferris Canonical Pack

**Goal**: Users and maintainers can rely on a route-isolated Ferris pack that defines Ferris identity, Rust-themed article action language, prompts, QA, edits, source notes, and trademark-safe behavior.
**Depends on**: Phase 11
**Requirements**: FIP-01, FIP-02, FIP-03, FIP-04, FIP-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can find Ferris canonical references under `ian-xiaohei-illustrations/references/ips/ferris/`.
  2. User receives Ferris planning fields for placement, core idea, structure type, Ferris state, Ferris action, supporting objects, visible labels, output path, and source/trademark note.
  3. Ferris prompt template produces one 16:9 article illustration where Ferris performs the cognitive action.
  4. Ferris QA rejects generic crabs, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
  5. Ferris edit prompts support stronger Ferris participation, off-model identity repair, trademark-boundary repair, title removal, text reduction, and preservation of unaffected content.

**Plans:** 0/3 plans complete

Plans:

- [ ] 12-01-PLAN.md — Create Ferris pack index, source/trademark notes, style DNA, and identity foundations.
- [ ] 12-02-PLAN.md — Create Ferris composition patterns plus planning, generation, and edit prompt templates.
- [ ] 12-03-PLAN.md — Create Ferris QA checklist and refine cross-file Ferris pack coherence.

### Phase 13: Skill Controller Integration

**Goal**: Users can select Ferris through the skill controller and receive route-isolated planning, generation, QA, mixed-IP grouping, and Ferris output paths.
**Depends on**: Phase 12
**Requirements**: FERR-01, FERR-02, FERR-03, FERR-04
**Success Criteria** (what must be TRUE):

  1. User can explicitly request Ferris through clear aliases such as `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
  2. User who omits a visual IP still gets Xiaohei as the only default route.
  3. User can request Xiaohei, Littlebox, Tom, and Ferris for the same core idea and receive separate variant groups.
  4. Ferris outputs use `assets/<article-slug>-ferris/`, and docs include the escaped token `assets/&lt;article-slug&gt;-ferris/`.

**Plans:** 0/1 plans complete

Plans:

- [ ] 13-01-PLAN.md — Integrate Ferris into the skill controller route, planning, generation, QA, output, and delivery paths.

### Phase 14: Docs, Examples, and Release Surface

**Goal**: Users and maintainers can request, inspect, and release Ferris behavior through public docs and release materials that match the source/trademark boundary contract.
**Depends on**: Phase 13
**Requirements**: FDOC-01, FDOC-02, FDOC-03, FDOC-04, FDOC-05
**Success Criteria** (what must be TRUE):

  1. README explains Ferris as an explicit Rust-community mascot route with aliases, output path, source context, and trademark/endorsement boundary.
  2. `examples/prompts.md` includes copyable Ferris planning, Ferris generation, Ferris smoke, and four-IP mixed variant prompts.
  3. `agents/openai.yaml` names Xiaohei, Littlebox, Tom, and Ferris while preserving Xiaohei as the implicit default.
  4. `RELEASE_CHECKLIST.md` includes Ferris source review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
  5. Public docs use Ferris source attribution and Rust trademark boundary wording consistently across README, examples, NOTICE, routing docs, and release checklist.

**Plans:** 0/4 plans complete

Plans:

- [ ] 14-01-PLAN.md — Update README public Ferris route docs, output path, source context, and trademark boundary.
- [ ] 14-02-PLAN.md — Add copyable Ferris planning, generation, smoke, and four-IP mixed prompts.
- [ ] 14-03-PLAN.md — Update agent metadata for Xiaohei, Littlebox, Tom, and explicit Ferris.
- [ ] 14-04-PLAN.md — Expand release checklist Ferris source, trademark, leakage, sample, validator, and final review gates.

### Phase 15: Validation Hardening

**Goal**: Maintainers can verify the four-route mascot-aware package locally with deterministic validator checks and Node tests.
**Depends on**: Phase 14
**Requirements**: FVAL-01, FVAL-02, FVAL-03, FVAL-04, FVAL-05, FVAL-06, FVAL-07
**Success Criteria** (what must be TRUE):

  1. Maintainer can run the local validator successfully after v1.2 roadmap initialization clears prior phase working directories.
  2. Validator checks Ferris route row, aliases, default false, output suffix, required references, route status, source attribution context, and trademark boundary markers.
  3. Validator checks Ferris canonical pack files, prompt placeholders, QA markers, source markers, trademark-boundary markers, docs markers, metadata, NOTICE, release checklist, raw and escaped output path tokens, and Ferris smoke prompts.
  4. Validator checks Ferris leakage boundaries so Xiaohei, Littlebox, and Tom packs stay free of Ferris identity rules and Rust trademark boundary text.
  5. Validator checks public example asset directories for Ferris-rendered assets against the release checklist public-sample approval policy, and Node tests cover four-route parser behavior, stable check ordering, Ferris failure messages, source/trademark fixtures, and full pass output.

**Plans:** 0/3 plans complete

Plans:

- [ ] 15-01-PLAN.md — Harden validator implementation for Ferris route, pack, docs, leakage, source/trademark, and public asset gates.
- [ ] 15-02-PLAN.md — Harden Node test coverage for Phase 15 check ordering, fixtures, failure messages, and full-pass output.
- [ ] 15-03-PLAN.md — Record final validation evidence and close Phase 15 planning state.

## Progress

**Execution Order:**
Phases execute in numeric order: 11 -> 12 -> 13 -> 14 -> 15

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 11. Ferris Source and Route Contract | 3/3 | Complete   | 2026-06-13 |
| 12. Ferris Canonical Pack | 0/3 | Pending | |
| 13. Skill Controller Integration | 0/1 | Pending | |
| 14. Docs, Examples, and Release Surface | 0/4 | Pending | |
| 15. Validation Hardening | 0/3 | Pending | |
