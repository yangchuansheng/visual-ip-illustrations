# Requirements: OpenClaw Logo IP Integration

**Defined:** 2026-06-16
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.7 Requirements

### Route and Source

- [x] **ROUTE-01**: User can select OpenClaw as an explicit visual IP route through clear OpenClaw aliases while Xiaohei remains the omitted-IP default.
- [x] **ROUTE-02**: User can rely on route id `openclaw`, display name `OpenClaw`, output suffix `openclaw`, and output directory `assets/<article-slug>-openclaw/`.
- [x] **ROUTE-03**: Maintainer can inspect OpenClaw routing metadata and see all required references, attribution context, route status, source authority, and `default=false`.
- [x] **SRC-01**: Maintainer can inspect `references/ips/openclaw/source.md` and see the official OpenClaw repository, MIT license, OpenClaw Foundation copyright notice, uploaded-logo authority, sample policy, review owner, and route status.
- [x] **SRC-02**: User and maintainer can see that the uploaded red OpenClaw logo is the visual authority for the route, with stable markers for red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.

### OpenClaw IP Pack

- [x] **PACK-01**: User can read an OpenClaw route-local pack that isolates style, identity, composition, prompt, QA, source, sample policy, and output behavior from other IP routes.
- [x] **PACK-02**: User can plan OpenClaw shots with route-specific fields for OpenClaw state, OpenClaw action, core article idea, structure type, objects, labels, and output path.
- [x] **PACK-03**: User can generate OpenClaw prompts where the red logo-mascot performs the central cognitive article action in a sparse 16:9 illustration.
- [x] **PACK-04**: User can apply OpenClaw edit prompts for stronger participation, uploaded-logo identity repair, title removal, text reduction, and unaffected-content preservation.
- [x] **PACK-05**: User can use OpenClaw QA gates that reject generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, route leakage, excessive text, and copied composition.

### Runtime and Public Surface

- [ ] **DOC-01**: User can read README route selection, workflow, output path, and route descriptions with OpenClaw as an explicit source-reviewed route.
- [ ] **DOC-02**: User can copy examples for OpenClaw planning, generation, editing, and mixed-IP variants with `assets/<article-slug>-openclaw/` paths.
- [ ] **DOC-03**: Maintainer can read NOTICE and release checklist entries that include OpenClaw source, MIT attribution, uploaded-logo visual authority, public sample policy, and release review gates.
- [x] **DOC-04**: Agent metadata and skill instructions present OpenClaw as a selectable route while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias.
- [x] **DOC-05**: Mixed-IP workflow creates separate route groups for OpenClaw and all existing routes without blended references, prompts, QA rules, or output paths.

### Validation and Release Evidence

- [ ] **VAL-01**: Validator fails when OpenClaw route metadata, source record, required references, output paths, docs, examples, NOTICE, release checklist, or agent metadata drift from the v1.7 contract.
- [ ] **VAL-02**: Validator fails when OpenClaw identity markers leak into Xiaohei, Littlebox, Tom, Ferris, or Seal route-local packs.
- [ ] **VAL-03**: Validator fails when public generated OpenClaw samples appear without explicit release checklist approval.
- [ ] **VAL-04**: Node tests cover OpenClaw route parsing, route ordering, default preservation, output path markers, source/license markers, smoke prompts, leakage fixtures, public asset gates, and full-pass output.
- [ ] **VAL-05**: Final release evidence records validator output, Node test output, `git diff --check`, OpenClaw route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.

## Future Requirements

### Route Manifests

- **MNF-01**: Maintainer can track all route source, license, trademark, uploaded-image, public-sample, output-path, and validation metadata through a machine-readable visual-IP manifest.
- **MNF-02**: Maintainer can generate route tables and validator expectations from the manifest.

### Assets

- **AST-01**: Maintainer can store and hash canonical uploaded source images for every uploaded-image route.
- **AST-02**: User can generate a public-approved comparison sheet across active routes after sample review.
- **AST-03**: Maintainer can run automated visual regression checks against approved calibration images.

### Distribution

- **DIST-01**: Maintainer can package selected IP variants through a release script.
- **DIST-02**: User can install selected IP routes through a CLI-level selector.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Making OpenClaw the default IP | Xiaohei remains the compatibility baseline and omitted-IP default. |
| Generic custom-IP import | v1.7 adds one concrete OpenClaw route. |
| Redesigning the uploaded OpenClaw logo | The uploaded logo is the visual authority for this milestone. |
| Public generated OpenClaw gallery before approval | Public samples require release review. |
| Changing Xiaohei, Littlebox, Tom, Ferris, or Seal behavior | The milestone is scoped to OpenClaw. |
| Renaming the whole package | Visual IP Illustrations remains the product identity. |
| Removing legacy skill invocation | `$ian-xiaohei-illustrations` remains a validated compatibility alias. |
| Forcing visible labels into English | Visible labels continue to follow the user's requested language. |
| Hosted app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ROUTE-01 | Phase 33 | Complete |
| ROUTE-02 | Phase 33 | Complete |
| ROUTE-03 | Phase 33 | Complete |
| SRC-01 | Phase 33 | Complete |
| SRC-02 | Phase 33 | Complete |
| PACK-01 | Phase 34 | Complete |
| PACK-02 | Phase 34 | Complete |
| PACK-03 | Phase 34 | Complete |
| PACK-04 | Phase 34 | Complete |
| PACK-05 | Phase 34 | Complete |
| DOC-01 | Phase 36 | Pending |
| DOC-02 | Phase 36 | Pending |
| DOC-03 | Phase 36 | Pending |
| DOC-04 | Phase 35, Phase 36 | Complete |
| DOC-05 | Phase 35 | Complete |
| VAL-01 | Phase 37 | Pending |
| VAL-02 | Phase 37 | Pending |
| VAL-03 | Phase 37 | Pending |
| VAL-04 | Phase 37 | Pending |
| VAL-05 | Phase 37 | Pending |
| MNF-01 | Future | Future |
| MNF-02 | Future | Future |
| AST-01 | Future | Future |
| AST-02 | Future | Future |
| AST-03 | Future | Future |
| DIST-01 | Future | Future |
| DIST-02 | Future | Future |

**Coverage:**

- v1.7 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0

---
*Requirements defined: 2026-06-16*
*Last updated: 2026-06-16 after starting v1.7 OpenClaw Logo IP Integration*
