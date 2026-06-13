# Requirements: Ferris Rust Mascot IP Integration

**Defined:** 2026-06-13
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.2 Requirements

### Source and Trademark Boundary

- [x] **FRGT-01**: Maintainer can read Ferris source, author, copyright waiver, reference URLs, Rust trademark policy context, endorsement boundary, allowed use, restricted use, distribution boundary, sample policy, and review owner in Ferris-specific documentation.
- [x] **FRGT-02**: Maintainer can distinguish Ferris source attribution from Rust trademark or official-affiliation permission in `NOTICE.md`.
- [x] **FRGT-03**: Maintainer can keep Ferris route status explicit through wording shared by routing docs, README, examples, and release checklist.
- [x] **FRGT-04**: Maintainer can verify that public Ferris examples avoid Rust-logo-forward claims, official endorsement language, and bundled Rust marks unless release review explicitly approves them.

### Routing

- [x] **FERR-01**: User can explicitly request Ferris through clear aliases such as `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- [x] **FERR-02**: User who omits visual IP still gets Xiaohei as the only default route.
- [x] **FERR-03**: User can request Xiaohei, Littlebox, Tom, and Ferris for the same core idea and receive separate variant groups.
- [x] **FERR-04**: Ferris outputs use `assets/<article-slug>-ferris/` and docs include the escaped token `assets/&lt;article-slug&gt;-ferris/`.
- [x] **FERR-05**: Maintainer can inspect Ferris route metadata, aliases, default flag, output suffix, required references, attribution context, source status, and trademark boundary in `references/routing.md`.

### Ferris IP Pack

- [x] **FIP-01**: Maintainer can find Ferris canonical references under `ian-xiaohei-illustrations/references/ips/ferris/`.
- [x] **FIP-02**: User receives Ferris planning fields for placement, core idea, structure type, Ferris state, Ferris action, supporting objects, visible labels, output path, and source/trademark note.
- [x] **FIP-03**: Ferris prompt template produces one 16:9 article illustration where Ferris performs the cognitive action.
- [x] **FIP-04**: Ferris QA rejects generic crabs, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- [x] **FIP-05**: Ferris edit prompts support stronger Ferris participation, off-model identity repair, trademark-boundary repair, title removal, text reduction, and preservation of unaffected content.

### Documentation

- [x] **FDOC-01**: README explains Ferris as an explicit Rust-community mascot route with aliases, output path, source context, and trademark/endorsement boundary.
- [ ] **FDOC-02**: `examples/prompts.md` includes copyable Ferris planning, Ferris generation, Ferris smoke, and four-IP mixed variant prompts.
- [ ] **FDOC-03**: `agents/openai.yaml` names Xiaohei, Littlebox, Tom, and Ferris while preserving Xiaohei as the implicit default.
- [ ] **FDOC-04**: `RELEASE_CHECKLIST.md` includes Ferris source review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
- [x] **FDOC-05**: Public docs use Ferris source attribution and Rust trademark boundary wording consistently across README, examples, NOTICE, routing docs, and release checklist.

### Validation

- [ ] **FVAL-01**: Maintainer can run the local validator successfully after v1.2 roadmap initialization clears prior phase working directories.
- [ ] **FVAL-02**: Validator checks Ferris route row, aliases, default false, output suffix, required references, route status, source attribution context, and trademark boundary markers.
- [ ] **FVAL-03**: Validator checks Ferris canonical pack files, prompt placeholders, QA markers, source markers, and trademark-boundary markers.
- [ ] **FVAL-04**: Validator checks README, examples, agent metadata, NOTICE, release checklist, raw/escaped Ferris output path tokens, and Ferris smoke prompts.
- [ ] **FVAL-05**: Validator checks Ferris leakage boundaries so Xiaohei, Littlebox, and Tom packs stay free of Ferris identity rules and Rust trademark boundary text.
- [ ] **FVAL-06**: Validator checks public example asset directories for Ferris-rendered assets against the release checklist public-sample approval policy.
- [ ] **FVAL-07**: Node validator tests cover four-route parser behavior, stable check ordering, Ferris failure messages, source/trademark fixtures, and full pass output.

## v2 Requirements

### Broader Mascot and IP Support

- **MASC-01**: Maintainer can add another open-source mascot route by reusing the Ferris source-and-trademark-boundary pattern.
- **MASC-02**: Maintainer can track source, license, trademark, and endorsement records through a machine-readable visual-IP manifest.
- **MASC-03**: User can request approved mascot comparison sheets across active route groups.

### Assets

- **AST-01**: Maintainer can manage a machine-readable asset manifest with title, path, hash, composition family, IP route, source status, rights status, and anti-repeat notes.
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
| Making Ferris the default route | Xiaohei remains the compatibility baseline and Ferris should require explicit selection. |
| Bundling Rust logos or implying official Rust Foundation endorsement | v1.2 targets Ferris article-illustration behavior with clear source and trademark boundaries. |
| Recreating rustacean.net assets as repository calibration images | Source references and route-local prompt rules are enough for this milestone. |
| Shipping public Ferris rendered examples without release review | Public generated assets should pass the release checklist source and trademark review. |
| Hybrid Xiaohei-Littlebox-Tom-Ferris characters | Blended identities break route isolation, QA, and attribution boundaries. |
| Hosted web app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |
| Automated visual likeness judgment | v1.2 validates objective text/package markers; visual taste and identity review remain manual. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FRGT-01 | Phase 11 | Complete |
| FRGT-02 | Phase 11 | Complete |
| FRGT-03 | Phase 11 | Complete |
| FRGT-04 | Phase 11 | Complete |
| FERR-01 | Phase 13 | Complete |
| FERR-02 | Phase 13 | Complete |
| FERR-03 | Phase 13 | Complete |
| FERR-04 | Phase 13 | Complete |
| FERR-05 | Phase 11 | Complete |
| FIP-01 | Phase 12 | Complete |
| FIP-02 | Phase 12 | Complete |
| FIP-03 | Phase 12 | Complete |
| FIP-04 | Phase 12 | Complete |
| FIP-05 | Phase 12 | Complete |
| FDOC-01 | Phase 14 | Complete |
| FDOC-02 | Phase 14 | Pending |
| FDOC-03 | Phase 14 | Pending |
| FDOC-04 | Phase 14 | Pending |
| FDOC-05 | Phase 14 | Complete |
| FVAL-01 | Phase 15 | Pending |
| FVAL-02 | Phase 15 | Pending |
| FVAL-03 | Phase 15 | Pending |
| FVAL-04 | Phase 15 | Pending |
| FVAL-05 | Phase 15 | Pending |
| FVAL-06 | Phase 15 | Pending |
| FVAL-07 | Phase 15 | Pending |
| MASC-01 | v2 | Future |
| MASC-02 | v2 | Future |
| MASC-03 | v2 | Future |
| AST-01 | v2 | Future |
| AST-02 | v2 | Future |
| AST-03 | v2 | Future |
| DIST-01 | v2 | Future |
| DIST-02 | v2 | Future |
| DIST-03 | v2 | Future |

**Coverage:**

- v1.2 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0

---
*Requirements defined: 2026-06-13*
*Last updated: 2026-06-13 after starting v1.2 Ferris Rust Mascot IP Integration*
