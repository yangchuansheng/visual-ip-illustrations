# Roadmap: Visual IP Illustrations

## v1.9 Language-Neutral Skill Cleanup

v1.9 removes stale Chinese-only scope wording from the runtime skill and Xiaohei pack while preserving approved multilingual compatibility behavior. The milestone keeps Chinese aliases, prompt placeholders, localized examples, and user-language labels intact, then hardens validation so skill discovery stays article-language neutral.

**Current Milestone:** v1.9 Language-Neutral Skill Cleanup
**Phase Range:** 43-44
**Granularity:** focused

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 43: Language-Neutral Runtime and Xiaohei Pack** - Users see article-illustration scope in runtime and Xiaohei references without Chinese-only language constraints. (completed 2026-06-17)
- [x] **Phase 44: Language Policy and Validation Hardening** - Maintainers can validate language-neutral scope, approved multilingual exceptions, and release checklist wording locally. (completed 2026-06-17)

## Phase Details

### Phase 43: Language-Neutral Runtime and Xiaohei Pack

**Goal**: Users see language-neutral article-illustration behavior in the runtime skill and Xiaohei pack.
**Depends on**: Phase 42
**Requirements**: LANG-01, LANG-02, LANG-03, XH-01, XH-02, XH-03
**Success Criteria**:

1. `SKILL.md` frontmatter and Xiaohei generation markers describe article illustrations broadly.
2. Xiaohei canonical style, prompt, IP, and QA references use user-language labels.
3. Legacy root compatibility references match the updated canonical Xiaohei pack.
4. Approved Chinese placeholders, route aliases, and legacy compatibility markers remain present.

**Plans**: 1 plan

- [x] 43-01-PLAN.md - Language-neutral runtime and Xiaohei pack cleanup

### Phase 44: Language Policy and Validation Hardening

**Goal**: Maintainers can verify the cleanup through language policy, release checklist, NOTICE, validator, and Node tests.
**Depends on**: Phase 43
**Requirements**: POL-01, POL-02, POL-03, VAL-01, VAL-02, VAL-03
**Success Criteria**:

1. LANGUAGE_POLICY uses localized-example terminology for approved multilingual examples.
2. RELEASE_CHECKLIST and NOTICE avoid Chinese-only scope wording while preserving compatibility gates.
3. Validator includes frontmatter and agent metadata guards for language-neutral skill scope.
4. Validator, Node tests, `git diff --check`, and targeted scans pass.

**Plans**: 1 plan

- [x] 44-01-PLAN.md - Language policy and validation hardening

## Progress

**Execution Order:**
Phases execute in numeric order: 43 -> 44

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 43. Language-Neutral Runtime and Xiaohei Pack | 1/1 | Complete | 2026-06-17 |
| 44. Language Policy and Validation Hardening | 1/1 | Complete | 2026-06-17 |
