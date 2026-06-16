# Requirements: Go Gopher Visual IP Integration

**Defined:** 2026-06-16
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.8 Requirements

### Route and Source

- [ ] **ROUTE-01**: User can select Go Gopher as an explicit visual IP route through clear Go Gopher aliases while Xiaohei remains the omitted-IP default.
- [ ] **ROUTE-02**: User can rely on route id `gopher`, display name `Go Gopher`, output suffix `gopher`, and output directory `assets/<article-slug>-gopher/`.
- [ ] **ROUTE-03**: Maintainer can inspect Go Gopher routing metadata and see all required references, attribution context, route status `source-reviewed`, source authority, and `default=false`.
- [ ] **SRC-01**: Maintainer can inspect `references/ips/gopher/source.md` and see the Go project source pages, Renee French attribution, Creative Commons Attribution 4.0 license boundary, `gopher.png` visual authority, public sample policy, review owner, and route status.
- [ ] **SRC-02**: User and maintainer can see that local `gopher.png` is the route visual authority, with stable markers for the Go Gopher character shape, blue body, rounded head, simple eyes, small ears, buck teeth, compact limbs, and friendly standing posture.

### Go Gopher IP Pack

- [ ] **PACK-01**: User can read a Go Gopher route-local pack that isolates style, identity, composition, prompt, QA, source, sample policy, and output behavior from other IP routes.
- [ ] **PACK-02**: User can plan Go Gopher shots with route-specific fields for Gopher state, Gopher action, core article idea, structure type, objects, labels, and output path.
- [ ] **PACK-03**: User can generate Go Gopher prompts where the mascot performs the central cognitive article action in a sparse 16:9 illustration.
- [ ] **PACK-04**: User can apply Go Gopher edit prompts for stronger participation, `gopher.png` identity repair, title removal, text reduction, and unaffected-content preservation.
- [ ] **PACK-05**: User can use Go Gopher QA gates that reject generic blue mascot drift, realistic animal drift, missing Gopher markers, Go logo confusion, official-endorsement claims, passive placement, route leakage, excessive text, and copied composition.

### Runtime Integration

- [ ] **RUN-01**: User can invoke Go Gopher through the skill controller, route selection rules, progressive reference loading, planning fields, generation dispatch, edit routing, QA dispatch, and delivery reports.
- [ ] **RUN-02**: User can request mixed-IP output where Go Gopher and all existing routes create separate route groups with their own references, prompts, QA rules, and output paths.
- [ ] **RUN-03**: User receives Go Gopher delivery reports with selected visual IP, image count, purpose per image, saved path under `assets/<article-slug>-gopher/`, and route stability notes.
- [ ] **RUN-04**: Agent metadata and skill instructions present Go Gopher as a selectable route while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias.

### Public Documentation

- [ ] **DOC-01**: User can read README route selection, workflow, output path, and route descriptions with Go Gopher as an explicit source-reviewed route.
- [ ] **DOC-02**: User can copy examples for Go Gopher planning, generation, editing, and mixed-IP variants with `assets/<article-slug>-gopher/` paths.
- [ ] **DOC-03**: Maintainer can read NOTICE and release checklist entries that include Renee French attribution, Creative Commons Attribution 4.0 license boundary, `gopher.png` visual authority, public sample policy, and release review gates.
- [ ] **DOC-04**: User and maintainer can see Go Gopher docs preserve default-route behavior, route isolation, source-reviewed status, and no official endorsement claims.
- [ ] **DOC-05**: Public release surfaces stay consistent across README variants, prompt examples, agent metadata, NOTICE, and release checklist when Go Gopher is introduced.

### Validation and Release Evidence

- [ ] **VAL-01**: Validator fails when Go Gopher route metadata, source record, required references, output paths, docs, examples, NOTICE, release checklist, or agent metadata drift from the v1.8 contract.
- [ ] **VAL-02**: Validator fails when Go Gopher identity markers leak into Xiaohei, Littlebox, Tom, Ferris, Seal, or OpenClaw route-local packs.
- [ ] **VAL-03**: Validator fails when public generated Go Gopher samples appear without explicit release checklist approval.
- [ ] **VAL-04**: Node tests cover Go Gopher route parsing, route ordering, default preservation, output path markers, source/license markers, smoke prompts, leakage fixtures, public asset gates, and full-pass output.
- [ ] **VAL-05**: Final release evidence records validator output, Node test output, `git diff --check`, Go Gopher route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.

## Future Requirements

### Route Manifests

- **MNF-01**: Maintainer can track all route source, license, trademark, uploaded-image, local-reference, public-sample, output-path, and validation metadata through a machine-readable visual-IP manifest.
- **MNF-02**: Maintainer can generate route tables and validator expectations from the manifest.

### Assets

- **AST-01**: Maintainer can store and hash canonical local or uploaded source images for every visual-reference route.
- **AST-02**: User can generate a public-approved comparison sheet across active routes after sample review.
- **AST-03**: Maintainer can run automated visual regression checks against approved calibration images.

### Distribution

- **DIST-01**: Maintainer can package selected IP variants through a release script.
- **DIST-02**: User can install selected IP routes through a CLI-level selector.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Making Go Gopher the default IP | Xiaohei remains the compatibility baseline and omitted-IP default. |
| Generic custom-IP import | v1.8 adds one concrete Go Gopher route. |
| Replacing local `gopher.png` as route authority | The local reference image is the visual authority for this milestone. |
| Using the Go logo as the route identity | The route is the Go Gopher character route and keeps Go logo usage out of scope. |
| Public generated Go Gopher gallery before approval | Public samples require release review. |
| Changing Xiaohei, Littlebox, Tom, Ferris, Seal, or OpenClaw behavior | The milestone is scoped to Go Gopher. |
| Renaming the whole package | Visual IP Illustrations remains the product identity. |
| Removing legacy skill invocation | `$ian-xiaohei-illustrations` remains a validated compatibility alias. |
| Forcing visible labels into English | Visible labels continue to follow the user's requested language. |
| Hosted app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ROUTE-01 | Phase 38 | Pending |
| ROUTE-02 | Phase 38 | Pending |
| ROUTE-03 | Phase 38 | Pending |
| SRC-01 | Phase 38 | Pending |
| SRC-02 | Phase 38 | Pending |
| PACK-01 | Phase 39 | Pending |
| PACK-02 | Phase 39 | Pending |
| PACK-03 | Phase 39 | Pending |
| PACK-04 | Phase 39 | Pending |
| PACK-05 | Phase 39 | Pending |
| RUN-01 | Phase 40 | Pending |
| RUN-02 | Phase 40 | Pending |
| RUN-03 | Phase 40 | Pending |
| RUN-04 | Phase 40 | Pending |
| DOC-01 | Phase 41 | Pending |
| DOC-02 | Phase 41 | Pending |
| DOC-03 | Phase 41 | Pending |
| DOC-04 | Phase 41 | Pending |
| DOC-05 | Phase 41 | Pending |
| VAL-01 | Phase 42 | Pending |
| VAL-02 | Phase 42 | Pending |
| VAL-03 | Phase 42 | Pending |
| VAL-04 | Phase 42 | Pending |
| VAL-05 | Phase 42 | Pending |
| MNF-01 | Future | Future |
| MNF-02 | Future | Future |
| AST-01 | Future | Future |
| AST-02 | Future | Future |
| AST-03 | Future | Future |
| DIST-01 | Future | Future |
| DIST-02 | Future | Future |

**Coverage:**

- v1.8 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0

---
*Requirements defined: 2026-06-16*
*Last updated: 2026-06-16 after starting v1.8 Go Gopher Visual IP Integration*
