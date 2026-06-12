# Roadmap: Multi-IP Article Illustration Skills

## Overview

v1.1 adds an authorized Tom route as the third selectable visual IP while preserving the shipped Xiaohei default and Littlebox explicit route. The milestone follows the protected-character dependency chain: rights and route contract, Tom canonical pack, skill controller integration, public docs and release surface, then validation hardening. The package stays a lightweight Markdown/YAML Codex Skill with dependency-free local validation and host-provided image generation.

**Current Milestone:** v1.1 Authorized Tom IP Integration
**Phase Range:** 6-10
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 6: Tom Rights and Route Contract** - Maintainers get Tom rights boundaries, route status, aliases, route metadata, and public-sample gates before broad release. (completed 2026-06-12)
- [x] **Phase 7: Tom Canonical Pack** - Maintainers get an isolated Tom reference pack for identity, planning, prompts, composition, QA, edits, and rights notes. (completed 2026-06-12)
- [x] **Phase 8: Skill Controller Integration** - Users can explicitly select Tom or request separate Xiaohei, Littlebox, and Tom variants while Xiaohei remains the only default route. (completed 2026-06-12)
- [x] **Phase 9: Docs, Examples, and Release Surface** - Users and maintainers get Tom-aware README guidance, copyable prompts, metadata, and release checks with consistent route status wording. (completed 2026-06-12)
- [ ] **Phase 10: Validation Hardening** - Maintainers can run local validation and tests that cover Tom route behavior, protected-IP boundaries, docs markers, paths, and leakage gates.

## Phase Details

### Phase 6: Tom Rights and Route Contract

**Goal**: Maintainers can audit Tom rights boundaries and route metadata before Tom is treated as a selectable protected-character route.
**Depends on**: Phase 5
**Requirements**: RGT-01, RGT-02, RGT-03, RGT-04, TOMR-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can read Tom source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner in Tom-specific documentation.
  2. Maintainer can distinguish Tom attribution from Tom permission in `NOTICE.md`.
  3. Maintainer can see explicit Tom route-status wording shared by routing docs, README, examples, and release checklist.
  4. Maintainer can block public rendered Tom example assets until the release checklist records explicit public-sample approval.
  5. Maintainer can inspect Tom route metadata, aliases, default flag, output suffix, required references, attribution context, and route status in `references/routing.md`.

**Plans:** 3/3 plans complete

Plans:

- [x] 06-01-PLAN.md — Create Tom rights record, route row, and NOTICE permission boundary.
- [x] 06-02-PLAN.md — Add public route-status wording, Tom path tokens, and release checklist sample gate.
- [x] 06-03-PLAN.md — Repair validator baseline and add minimal Phase 6 Tom contract checks.

### Phase 7: Tom Canonical Pack

**Goal**: Users and maintainers can rely on a route-isolated Tom pack that defines Tom identity, article action language, prompts, QA, edits, and rights-status behavior.
**Depends on**: Phase 6
**Requirements**: TOMP-01, TOMP-02, TOMP-03, TOMP-04, TOMP-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can find Tom canonical references under `ian-xiaohei-illustrations/references/ips/tom/`.
  2. User receives Tom planning fields for placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
  3. Tom prompt template produces one 16:9 article illustration where Tom performs the cognitive action.
  4. Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
  5. Tom edit prompts support stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.

**Plans:** 3/3 plans complete

Plans:

- [x] 07-01-PLAN.md — Create Tom pack index, style DNA, and identity/status foundations.
- [x] 07-02-PLAN.md — Create Tom composition patterns plus planning, generation, and edit prompt templates.
- [x] 07-03-PLAN.md — Create Tom QA checklist and refine cross-file Tom pack coherence.

### Phase 8: Skill Controller Integration

**Goal**: Users can select Tom through the skill controller and receive route-isolated planning, generation, QA, mixed-IP grouping, and Tom output paths.
**Depends on**: Phase 7
**Requirements**: TOMR-01, TOMR-02, TOMR-03, TOMR-04
**Success Criteria** (what must be TRUE):

  1. User can explicitly request Tom through clear aliases such as `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
  2. User who omits a visual IP still gets Xiaohei as the only default route.
  3. User can request Xiaohei, Littlebox, and Tom for the same core idea and receive separate variant groups.
  4. Tom outputs use `assets/<article-slug>-tom/`, and docs include the escaped token `assets/&lt;article-slug&gt;-tom/`.

**Plans:** 1/1 plans complete

Plans:

- [x] 08-01-PLAN.md — Integrate Tom into the skill controller route, planning, generation, QA, output, and delivery paths.

### Phase 9: Docs, Examples, and Release Surface

**Goal**: Users and maintainers can request, inspect, and release Tom behavior through public docs and release materials that match the route-status contract.
**Depends on**: Phase 8
**Requirements**: TDOC-01, TDOC-02, TDOC-03, TDOC-04, TDOC-05
**Success Criteria** (what must be TRUE):

  1. README explains Tom as an explicit protected-character route with its status, aliases, output path, and rights boundary.
  2. `examples/prompts.md` includes copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
  3. `agents/openai.yaml` names Xiaohei, Littlebox, and Tom while preserving Xiaohei as the implicit default.
  4. `RELEASE_CHECKLIST.md` includes Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review.
  5. Public docs avoid broad Tom availability claims when Tom route status is gated.

**Plans:** 4/4 plans complete

Plans:

- [x] 09-01-PLAN.md — Update README public Tom route docs, stale wording, output path, and rights boundary.
- [x] 09-02-PLAN.md — Add copyable Tom planning, generation, smoke, and three-IP mixed prompts.
- [x] 09-03-PLAN.md — Update agent metadata for Xiaohei, Littlebox, and explicit gated Tom.
- [x] 09-04-PLAN.md — Expand release checklist Tom authorization, leakage, sample, validator, and final rights gates.

### Phase 10: Validation Hardening

**Goal**: Maintainers can verify the three-route protected-IP package locally with deterministic validator checks and Node tests.
**Depends on**: Phase 9
**Requirements**: TVAL-01, TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06, TVAL-07
**Success Criteria** (what must be TRUE):

  1. Maintainer can run the local validator successfully after v1.1 roadmap initialization clears prior phase working directories.
  2. Validator checks Tom route row, aliases, default false, output suffix, required references, route status, and attribution context.
  3. Validator checks Tom canonical pack files, prompt placeholders, QA markers, rights-boundary markers, docs markers, metadata, NOTICE, release checklist, raw and escaped output path tokens, and Tom smoke prompts.
  4. Validator checks Tom leakage boundaries so Xiaohei and Littlebox packs stay free of Tom identity rules and Warner rights text.
  5. Validator checks public example asset directories for Tom-rendered assets unless the release checklist has explicit public-sample approval, and Node tests cover three-route parser behavior, stable check ordering, Tom failure messages, and full pass output.

**Plans:** 3 plans

Plans:

- [ ] 10-01-PLAN.md — Harden validator implementation for Tom route, pack, docs, leakage, and public asset gates.
- [ ] 10-02-PLAN.md — Harden Node test coverage for Phase 10 check ordering, fixtures, failure messages, and full-pass output.
- [ ] 10-03-PLAN.md — Record final validation evidence and close Phase 10 planning state.

## Progress

**Execution Order:**
Phases execute in numeric order: 6 -> 7 -> 8 -> 9 -> 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 6. Tom Rights and Route Contract | 3/3 | Complete    | 2026-06-12 |
| 7. Tom Canonical Pack | 3/3 | Complete    | 2026-06-12 |
| 8. Skill Controller Integration | 1/1 | Complete   | 2026-06-12 |
| 9. Docs, Examples, and Release Surface | 4/4 | Complete    | 2026-06-12 |
| 10. Validation Hardening | 0/3 | Not started | - |
