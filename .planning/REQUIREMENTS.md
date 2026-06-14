# Requirements: English Default Language Migration

**Defined:** 2026-06-14
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.5 Requirements

### Language Policy

- [x] **LANG-01**: Maintainer can read a single English-default language policy for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy.
- [x] **LANG-02**: Maintainer can read an explicit exception allowlist for Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- [x] **LANG-03**: Maintainer can run a residual Chinese scan that distinguishes policy-approved multilingual tokens from stale Chinese prose.

### Skill and Reference Content

- [x] **SKILL-01**: User can read `SKILL.md` in English-default prose while canonical and legacy invocations remain documented.
- [x] **SKILL-02**: User can read routing rules and shared references in English-default prose while route ids, aliases, required references, statuses, and output suffixes remain stable.
- [x] **SKILL-03**: User can read Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route-local reference packs in English-default prose while each route preserves its prompt, QA, source, rights, brand, and visible-label behavior.
- [x] **SKILL-04**: Agent metadata presents the skill in English-default prose and preserves Xiaohei as the omitted-IP default plus explicit Littlebox, Tom, Ferris, and Sealos Seal routes.

### Public Documentation and Examples

- [x] **DOC-01**: User can read README installation, route selection, workflow, validation, related project, and author sections in English-default prose.
- [x] **DOC-02**: User can copy English-default examples from `examples/prompts.md` for planning, generation, mixed-IP comparisons, legacy smoke tests, and route-specific prompts.
- [x] **DOC-03**: Maintainer can read NOTICE and RELEASE_CHECKLIST in English-default prose while Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries stay intact.
- [x] **DOC-04**: Public docs continue to preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, install path guidance, route status markers, and output path contracts.

### Validation and Release Evidence

- [ ] **VAL-01**: Validator enforces English-default content coverage for README, examples, `SKILL.md`, agent metadata, NOTICE, release checklist, routing, and route-local references.
- [ ] **VAL-02**: Validator enforces the allowed multilingual exception policy and fails on stale Chinese prose outside approved surfaces.
- [ ] **VAL-03**: Node tests cover English-default checks, allowed exception fixtures, route stability, invocation stability, and output path stability.
- [ ] **VAL-04**: Final release evidence records validator output, Node test output, `git diff --check`, residual Chinese scan, docs consistency, and compatibility smoke coverage.

## Future Requirements

### Broader Mascot and IP Support

- **MASC-01**: Maintainer can add another open-source mascot route by reusing the Ferris source-and-trademark-boundary pattern.
- **MASC-02**: Maintainer can add another brand-owned mascot route by reusing the Sealos Seal brand/canonical-image pattern.
- **MASC-03**: Maintainer can track source, license, trademark, brand, endorsement, and canonical image records through a machine-readable visual-IP manifest.
- **MASC-04**: User can request approved mascot comparison sheets across active route groups.

### Assets

- **AST-01**: Maintainer can manage a machine-readable asset manifest with title, path, hash, composition family, IP route, source status, rights status, brand status, and anti-repeat notes.
- **AST-02**: User can generate a contact sheet or visual comparison board across approved IP routes.
- **AST-03**: Maintainer can run automated visual regression checks against calibration outputs.

### Distribution

- **DIST-01**: Maintainer can package the installable skill directory through a release script.
- **DIST-02**: User can install selected IP variants through a CLI-level selector.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Changing visual IP behavior | v1.5 is a language-default migration milestone. |
| Adding another IP route | Route expansion resumes after the language migration lands. |
| Changing Xiaohei default behavior | Xiaohei remains the compatibility baseline and omitted-IP default. |
| Changing shipped output directories | Existing user assets keep stable path contracts. |
| Removing Chinese route aliases | Alias compatibility remains part of the routing contract. |
| Forcing visible labels into English | Visible labels continue to follow the user's requested language. |
| Removing legacy invocation | `$ian-xiaohei-illustrations` remains a validated compatibility alias. |
| Hosted app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| LANG-01 | Phase 25 | Complete |
| LANG-02 | Phase 25 | Complete |
| LANG-03 | Phase 25 | Complete |
| SKILL-01 | Phase 26 | Complete |
| SKILL-02 | Phase 26 | Complete |
| SKILL-03 | Phase 26 | Complete |
| SKILL-04 | Phase 26 | Complete |
| DOC-01 | Phase 27 | Complete |
| DOC-02 | Phase 27 | Complete |
| DOC-03 | Phase 27 | Complete |
| DOC-04 | Phase 27 | Complete |
| VAL-01 | Phase 28 | Pending |
| VAL-02 | Phase 28 | Pending |
| VAL-03 | Phase 28 | Pending |
| VAL-04 | Phase 28 | Pending |
| MASC-01 | Future | Future |
| MASC-02 | Future | Future |
| MASC-03 | Future | Future |
| MASC-04 | Future | Future |
| AST-01 | Future | Future |
| AST-02 | Future | Future |
| AST-03 | Future | Future |
| DIST-01 | Future | Future |
| DIST-02 | Future | Future |

**Coverage:**

- v1.5 requirements: 15 total
- Mapped to phases: 15
- Unmapped: 0

---
*Requirements defined: 2026-06-14*
*Last updated: 2026-06-14 after starting v1.5 English Default Language Migration*
