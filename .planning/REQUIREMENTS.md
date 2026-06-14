# Requirements: Project Rebrand to Visual IP Illustrations

**Defined:** 2026-06-14
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.4 Requirements

### Naming Contract

- [x] **RBRD-01**: Maintainer can read a single naming contract that defines `Visual IP Illustrations` as the canonical product name.
- [x] **RBRD-02**: Maintainer can identify `visual-ip-illustrations` as the canonical repository and install slug.
- [x] **RBRD-03**: User can invoke the canonical skill id `$visual-ip-illustrations`.
- [x] **RBRD-04**: User can keep using the legacy `$ian-xiaohei-illustrations` invocation during the v1.4 transition.

### Package and Runtime Compatibility

- [ ] **PKG-01**: Installed skill metadata exposes `Visual IP Illustrations` as the canonical skill identity.
- [ ] **PKG-02**: Agent metadata presents Visual IP Illustrations as the multi-IP article illustration skill while preserving Xiaohei as the omitted-IP default.
- [ ] **PKG-03**: Existing route ids, aliases, required references, route statuses, and output suffixes for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal remain stable.
- [ ] **PKG-04**: Maintainer can follow documented local migration guidance from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.

### Public Documentation

- [ ] **DOC-01**: README opens with Visual IP Illustrations and explains the multi-IP product identity.
- [ ] **DOC-02**: README install commands show the canonical clone/install path and the legacy compatibility path.
- [ ] **DOC-03**: `examples/prompts.md` includes canonical `$visual-ip-illustrations` prompts plus legacy compatibility smoke prompts.
- [ ] **DOC-04**: NOTICE and release materials preserve Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries while recording the rebrand scope.

### Validation

- [ ] **VAL-01**: Validator checks canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs.
- [ ] **VAL-02**: Validator checks the legacy alias compatibility markers and install migration guidance.
- [ ] **VAL-03**: Node tests cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures.
- [ ] **VAL-04**: Final release evidence records validator output, Node test output, `git diff --check`, docs consistency, and compatibility smoke coverage.

## v2 Requirements

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
- **DIST-03**: Documentation supports a full English localization pass.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Changing visual IP behavior | v1.4 is a naming and compatibility milestone. |
| Adding another IP route | Route expansion resumes after the rebrand lands. |
| Changing Xiaohei default behavior | Xiaohei remains the compatibility baseline and omitted-IP default. |
| Changing shipped output directories | Existing user assets keep stable path contracts. |
| Removing legacy invocation during v1.4 | Users get migration guidance before legacy cleanup. |
| Hosted app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| RBRD-01 | Phase 21 | Complete |
| RBRD-02 | Phase 21 | Complete |
| RBRD-03 | Phase 21 | Complete |
| RBRD-04 | Phase 21 | Complete |
| PKG-01 | Phase 22 | Pending |
| PKG-02 | Phase 22 | Pending |
| PKG-03 | Phase 22 | Pending |
| PKG-04 | Phase 22 | Pending |
| DOC-01 | Phase 23 | Pending |
| DOC-02 | Phase 23 | Pending |
| DOC-03 | Phase 23 | Pending |
| DOC-04 | Phase 23 | Pending |
| VAL-01 | Phase 24 | Pending |
| VAL-02 | Phase 24 | Pending |
| VAL-03 | Phase 24 | Pending |
| VAL-04 | Phase 24 | Pending |
| MASC-01 | v2 | Future |
| MASC-02 | v2 | Future |
| MASC-03 | v2 | Future |
| MASC-04 | v2 | Future |
| AST-01 | v2 | Future |
| AST-02 | v2 | Future |
| AST-03 | v2 | Future |
| DIST-01 | v2 | Future |
| DIST-02 | v2 | Future |
| DIST-03 | v2 | Future |

**Coverage:**

- v1.4 requirements: 16 total
- Mapped to phases: 16
- Unmapped: 0

---
*Requirements defined: 2026-06-14*
*Last updated: 2026-06-14 after starting v1.4 Project Rebrand to Visual IP Illustrations*
