# Roadmap: Multi-IP Article Illustration Skills

## Overview

v1.3 adds the uploaded Sealos white seal mascot as the fifth selectable visual IP while preserving the shipped Xiaohei default, Littlebox explicit route, Tom protected-character route, and Ferris source-reviewed mascot route. The milestone follows the brand-owned mascot dependency chain: Sealos Seal brand and uploaded-image contract, canonical Sealos Seal pack, skill controller integration, public docs and release surface, then validation hardening. The package stays a lightweight Markdown/YAML Codex Skill with dependency-free local validation and host-provided image generation.

**Current Milestone:** v1.3 Sealos Seal Mascot IP Integration
**Phase Range:** 16-20
**Granularity:** coarse

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 16: Sealos Seal Brand and Image Contract** - Maintainers get Sealos Seal brand context, uploaded-image authority, fixed visual markers, route metadata, and public-sample gates before broad route expansion. (completed 2026-06-13)
- [ ] **Phase 17: Sealos Seal Canonical Pack** - Maintainers get an isolated Sealos Seal reference pack for identity, planning, prompts, composition, QA, edits, brand notes, and uploaded-image drift prevention.
- [ ] **Phase 18: Skill Controller Integration** - Users can explicitly select Sealos Seal or request separate Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal variants while Xiaohei remains the only default route.
- [ ] **Phase 19: Docs, Examples, and Release Surface** - Users and maintainers get Sealos Seal-aware README guidance, copyable prompts, metadata, NOTICE wording, and release checks with consistent uploaded-image and brand-boundary wording.
- [ ] **Phase 20: Validation Hardening** - Maintainers can run local validation and tests that cover Sealos Seal route behavior, uploaded-image identity markers, brand boundaries, docs markers, paths, sample gates, and route leakage gates.

## Phase Details

### Phase 16: Sealos Seal Brand and Image Contract

**Goal**: Maintainers can audit Sealos Seal brand context, uploaded-image authority, fixed mascot markers, route metadata, and public-sample policy before Sealos Seal is treated as a selectable brand mascot route.
**Depends on**: Phase 15
**Requirements**: SBRD-01, SBRD-02, SBRD-03, SBRD-04, SBRD-05
**Success Criteria** (what must be TRUE):

  1. Maintainer can read a Sealos Seal brand/source record that names the uploaded image as the canonical mascot reference for v1.3.
  2. Maintainer can verify the required visual markers: white rounded seal, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
  3. Maintainer can distinguish the selected uploaded mascot from prior Sealos mascot exploration variants and generic seal concepts.
  4. Maintainer can block public samples that drift away from the uploaded mascot identity.
  5. Maintainer can inspect Sealos Seal route metadata, aliases, default flag, output suffix, required references, brand context, canonical image status, and drift boundary in `references/routing.md`.

**Plans:** 3/3 plans complete
Plans:
**Wave 1**

- [x] 16-01-PLAN.md — Create Sealos Seal brand/source record, route row, and NOTICE brand boundary.
- [x] 16-02-PLAN.md — Add public route-status wording, Sealos output path tokens, and release checklist identity gate.

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 16-03-PLAN.md — Repair validator baseline and add minimal Phase 16 Sealos Seal contract checks.

### Phase 17: Sealos Seal Canonical Pack

**Goal**: Users and maintainers can rely on a route-isolated Sealos Seal pack that defines the uploaded mascot identity, Sealos cloud developer companion action language, prompts, QA, edits, brand notes, and drift-safe behavior.
**Depends on**: Phase 16
**Requirements**: SIP-01, SIP-02, SIP-03, SIP-04, SIP-05, SIP-06
**Success Criteria** (what must be TRUE):

  1. Maintainer can find Sealos Seal canonical references under `ian-xiaohei-illustrations/references/ips/sealos/`.
  2. User receives Sealos Seal planning fields for placement, core idea, structure type, mascot state, mascot action, supporting objects, visible labels, output path, and brand/canonical-image note.
  3. Sealos Seal prompt template produces one 16:9 article illustration where the uploaded white seal mascot performs the cognitive action.
  4. Sealos Seal composition guidance supports cloud OS, AI deployment, DevBox, database, Kubernetes, app launch, troubleshooting, and workflow metaphor families while preserving the fixed mascot identity.
  5. Sealos Seal QA rejects generic seals, abstract logo creatures, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage.
  6. Sealos Seal edit prompts support stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preservation of unaffected content.

**Plans:** 2/3 plans executed
Plans:
**Wave 1**

- [x] 17-01-PLAN.md — Create Sealos Seal pack index, brand/canonical notes, style DNA, and identity foundations.

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 17-02-PLAN.md — Create Sealos Seal composition patterns plus planning, generation, and edit prompt templates.

**Wave 3** *(blocked on Wave 2 completion)*

- [ ] 17-03-PLAN.md — Create Sealos Seal QA checklist and refine cross-file Sealos pack coherence.

### Phase 18: Skill Controller Integration

**Goal**: Users can select Sealos Seal through the skill controller and receive route-isolated planning, generation, QA, mixed-IP grouping, and Sealos output paths.
**Depends on**: Phase 17
**Requirements**: SEAL-01, SEAL-02, SEAL-03, SEAL-04, SEAL-05
**Success Criteria** (what must be TRUE):

  1. User can explicitly request Sealos Seal through aliases such as `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
  2. User who omits a visual IP still gets Xiaohei as the only default route.
  3. User can request Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal for the same core idea and receive separate variant groups.
  4. Sealos Seal outputs use `assets/<article-slug>-sealos/`, and docs include the escaped token `assets/&lt;article-slug&gt;-sealos/`.
  5. Sealos Seal planning and delivery output includes a brand/canonical-image note that preserves the uploaded mascot identity.

**Plans:** 0/1 plans complete

Plans:

- [ ] 18-01-PLAN.md — Integrate Sealos Seal into the skill controller route, planning, generation, QA, output, and delivery paths.

### Phase 19: Docs, Examples, and Release Surface

**Goal**: Users and maintainers can request, inspect, and release Sealos Seal behavior through public docs and release materials that match the uploaded-image identity and brand-boundary contract.
**Depends on**: Phase 18
**Requirements**: SDOC-01, SDOC-02, SDOC-03, SDOC-04, SDOC-05, SDOC-06
**Success Criteria** (what must be TRUE):

  1. README explains Sealos Seal as an explicit brand mascot route with aliases, output path, uploaded-image authority, and brand/logo boundary.
  2. `examples/prompts.md` includes copyable Sealos Seal planning, Sealos Seal generation, Sealos Seal smoke, and five-IP mixed variant prompts.
  3. `agents/openai.yaml` names Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal while preserving Xiaohei as the implicit default.
  4. `NOTICE.md` and release materials record Sealos Seal as a Sealos brand mascot route based on the uploaded image and avoid treating prior exploration variants as canonical.
  5. `RELEASE_CHECKLIST.md` includes uploaded-image identity review, Sealos logo/brand wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
  6. Public docs use Sealos Seal brand/canonical-image wording consistently across README, examples, NOTICE, routing docs, and release checklist.

**Plans:** 0/4 plans complete

Plans:

- [ ] 19-01-PLAN.md — Update README public Sealos Seal route docs, output path, uploaded-image authority, and brand boundary.
- [ ] 19-02-PLAN.md — Add copyable Sealos Seal planning, generation, smoke, and five-IP mixed prompts.
- [ ] 19-03-PLAN.md — Update agent metadata for Xiaohei, Littlebox, Tom, Ferris, and explicit Sealos Seal.
- [ ] 19-04-PLAN.md — Expand release checklist Sealos Seal identity, brand, leakage, sample, validator, and final review gates.

### Phase 20: Validation Hardening

**Goal**: Maintainers can verify the five-route brand-mascot-aware package locally with deterministic validator checks and Node tests.
**Depends on**: Phase 19
**Requirements**: SVAL-01, SVAL-02, SVAL-03, SVAL-04, SVAL-05, SVAL-06, SVAL-07
**Success Criteria** (what must be TRUE):

  1. Maintainer can run the local validator successfully after v1.3 roadmap initialization.
  2. Validator checks Sealos Seal route row, aliases, default false, output suffix, required references, route status, brand context, canonical image markers, and drift boundary markers.
  3. Validator checks Sealos Seal canonical pack files, prompt placeholders, QA markers, uploaded-image markers, brand-boundary markers, docs markers, metadata, NOTICE, release checklist, raw and escaped output path tokens, and Sealos Seal smoke prompts.
  4. Validator checks Sealos Seal leakage boundaries so Xiaohei, Littlebox, Tom, and Ferris packs stay free of Sealos Seal identity rules and brand mascot text.
  5. Validator checks public example asset directories for Sealos Seal rendered assets against the release checklist public-sample approval policy, and Node tests cover five-route parser behavior, stable check ordering, Sealos Seal failure messages, brand/canonical-image fixtures, and full pass output.

**Plans:** 0/3 plans complete

Plans:

- [ ] 20-01-PLAN.md — Harden validator implementation for Sealos Seal route, pack, docs, leakage, uploaded-image, brand, public asset, and generated sample gates.
- [ ] 20-02-PLAN.md — Harden Node test coverage for Phase 20 check ordering, parser behavior, fixtures, failure messages, public/generated sample gates, and full pass output.
- [ ] 20-03-PLAN.md — Record final validation evidence and close Phase 20 planning state.

## Progress

**Execution Order:**
Phases execute in numeric order: 16 -> 17 -> 18 -> 19 -> 20

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 16. Sealos Seal Brand and Image Contract | 3/3 | Complete    | 2026-06-13 |
| 17. Sealos Seal Canonical Pack | 2/3 | In Progress|  |
| 18. Skill Controller Integration | 0/1 | Pending | — |
| 19. Docs, Examples, and Release Surface | 0/4 | Pending | — |
| 20. Validation Hardening | 0/3 | Pending | — |
