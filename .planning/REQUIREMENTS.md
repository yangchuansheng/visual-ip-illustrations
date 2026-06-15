# Requirements: Seal Route Debranding

**Defined:** 2026-06-15
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.6 Requirements

### Route Identity

- [ ] **ROUTE-01**: User can select the former Sealos Seal route through a product-neutral Seal route identity with display name `Seal`.
- [ ] **ROUTE-02**: User can rely on route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/` for new Seal outputs.
- [ ] **ROUTE-03**: User can see Seal aliases that describe a seal character without Sealos product, brand, mascot, cloud platform, or advertising wording.
- [ ] **ROUTE-04**: Maintainer can inspect routing metadata and see that Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes.

### Seal IP Pack

- [ ] **PACK-01**: User can read Seal route-local references that preserve the existing white hoodie seal identity markers without Sealos product or brand context.
- [ ] **PACK-02**: User can generate Seal prompts that use product-neutral article metaphors instead of cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, or Sealos platform props.
- [ ] **PACK-03**: User can use Seal QA gates that test hoodie seal identity, logo-free output, product-neutral route isolation, active cognitive participation, sparse labels, and article-metaphor quality.
- [ ] **PACK-04**: Maintainer can inspect the Seal source record and see product-neutral character authority, visual markers, sample policy, and historical source notes without active brand-owned claims.

### Public Documentation and Release Surface

- [ ] **DOC-01**: User can read README route selection, workflow, output path, and route descriptions with Seal as the active route name.
- [ ] **DOC-02**: User can copy examples that request Seal outputs through product-neutral prompts and new `assets/<article-slug>-seal/` paths.
- [ ] **DOC-03**: Maintainer can read NOTICE and release checklist entries that describe Seal as product-neutral, logo-free, and free of Sealos brand wording for active route behavior.
- [ ] **DOC-04**: Agent metadata and skill instructions present Seal as the selectable route while preserving Visual IP Illustrations as the package identity and `$ian-xiaohei-illustrations` as the legacy skill alias.

### Validation and Migration Evidence

- [ ] **VAL-01**: Validator fails when active route metadata, docs, prompts, QA, examples, release surfaces, or tests still use stale Sealos route identity for the Seal route.
- [ ] **VAL-02**: Validator passes historical Sealos mentions only in prior milestone evidence, source-history notes, commit references, and explicit migration context.
- [ ] **VAL-03**: Node tests cover Seal route parsing, route ordering, output path migration, stale Sealos leakage fixtures, prompt leakage fixtures, docs leakage fixtures, and full-pass output.
- [ ] **VAL-04**: Final release evidence records validator output, Node test output, `git diff --check`, stale Sealos scan, docs consistency, and route migration smoke coverage.

## Future Requirements

### Broader Mascot and IP Support

- **MASC-01**: Maintainer can add another open-source mascot route by reusing the Ferris source-and-trademark-boundary pattern.
- **MASC-02**: Maintainer can add another product-neutral mascot route by reusing the Seal debranding pattern.
- **MASC-03**: Maintainer can track source, license, trademark, brand, endorsement, canonical image, and debranding records through a machine-readable visual-IP manifest.
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
| Redesigning the hoodie seal character | v1.6 preserves the existing visual identity. |
| Adding another IP route | v1.6 migrates an existing route. |
| Changing Xiaohei default behavior | Xiaohei remains the compatibility baseline and omitted-IP default. |
| Changing Littlebox, Tom, or Ferris behavior | The milestone is scoped to the former Sealos Seal route. |
| Renaming the whole package | Visual IP Illustrations remains the product identity. |
| Removing legacy skill invocation | `$ian-xiaohei-illustrations` remains a validated compatibility alias. |
| Forcing visible labels into English | Visible labels continue to follow the user's requested language. |
| Hosted app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ROUTE-01 | Phase 29 | Pending |
| ROUTE-02 | Phase 29 | Pending |
| ROUTE-03 | Phase 29 | Pending |
| ROUTE-04 | Phase 29 | Pending |
| PACK-01 | Phase 30 | Pending |
| PACK-02 | Phase 30 | Pending |
| PACK-03 | Phase 30 | Pending |
| PACK-04 | Phase 30 | Pending |
| DOC-01 | Phase 31 | Pending |
| DOC-02 | Phase 31 | Pending |
| DOC-03 | Phase 31 | Pending |
| DOC-04 | Phase 31 | Pending |
| VAL-01 | Phase 32 | Pending |
| VAL-02 | Phase 32 | Pending |
| VAL-03 | Phase 32 | Pending |
| VAL-04 | Phase 32 | Pending |
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

- v1.6 requirements: 16 total
- Mapped to phases: 16
- Unmapped: 0

---
*Requirements defined: 2026-06-15*
*Last updated: 2026-06-15 after starting v1.6 Seal Route Debranding*
