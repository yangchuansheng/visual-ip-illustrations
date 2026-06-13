# Requirements: Sealos Seal Mascot IP Integration

**Defined:** 2026-06-13
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.3 Requirements

### Brand and Canonical Image Boundary

- [x] **SBRD-01**: Maintainer can read a Sealos Seal brand/source record that names the uploaded image as the canonical mascot reference for v1.3.
- [x] **SBRD-02**: Maintainer can verify the required Sealos Seal visual markers: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- [x] **SBRD-03**: Maintainer can distinguish Sealos brand/logo usage guidance from generic seal mascot exploration and prior alternative mascot concepts.
- [x] **SBRD-04**: Maintainer can block public Sealos Seal examples that drift away from the uploaded image, remove the cap/hoodie/logo identity, or imply a different selected mascot.
- [x] **SBRD-05**: Maintainer can inspect Sealos Seal route metadata, aliases, default flag, output suffix, required references, brand context, canonical image status, and drift boundary in `references/routing.md`.

### Routing

- [ ] **SEAL-01**: User can explicitly request Sealos Seal through clear aliases such as `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
- [ ] **SEAL-02**: User who omits visual IP still gets Xiaohei as the only default route.
- [ ] **SEAL-03**: User can request Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal for the same core idea and receive separate variant groups.
- [ ] **SEAL-04**: Sealos Seal outputs use `assets/<article-slug>-sealos/`, and docs include the escaped token `assets/&lt;article-slug&gt;-sealos/`.
- [ ] **SEAL-05**: Sealos Seal planning and delivery output includes a brand/canonical-image note that reminds maintainers to preserve the uploaded mascot identity.

### Sealos Seal IP Pack

- [x] **SIP-01**: Maintainer can find Sealos Seal canonical references under `ian-xiaohei-illustrations/references/ips/sealos/`.
- [ ] **SIP-02**: User receives Sealos Seal planning fields for placement, core idea, structure type, mascot state, mascot action, supporting objects, visible labels, output path, and brand/canonical-image note.
- [ ] **SIP-03**: Sealos Seal prompt template produces one 16:9 article illustration where the uploaded white seal mascot performs the cognitive action.
- [ ] **SIP-04**: Sealos Seal composition guidance supports cloud OS, AI deployment, DevBox, database, Kubernetes, app launch, troubleshooting, and workflow metaphor families without losing the fixed mascot identity.
- [ ] **SIP-05**: Sealos Seal QA rejects generic seals, abstract logo creatures, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage.
- [ ] **SIP-06**: Sealos Seal edit prompts support stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preservation of unaffected content.

### Documentation

- [ ] **SDOC-01**: README explains Sealos Seal as an explicit brand mascot route with aliases, output path, uploaded-image authority, and brand/logo boundary.
- [ ] **SDOC-02**: `examples/prompts.md` includes copyable Sealos Seal planning, Sealos Seal generation, Sealos Seal smoke, and five-IP mixed variant prompts.
- [ ] **SDOC-03**: `agents/openai.yaml` names Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal while preserving Xiaohei as the implicit default.
- [ ] **SDOC-04**: `NOTICE.md` and release materials record Sealos Seal as a Sealos brand mascot route based on the uploaded image and avoid treating prior exploration variants as canonical.
- [ ] **SDOC-05**: `RELEASE_CHECKLIST.md` includes uploaded-image identity review, Sealos logo/brand wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
- [ ] **SDOC-06**: Public docs use Sealos Seal brand/canonical-image wording consistently across README, examples, NOTICE, routing docs, and release checklist.

### Validation

- [ ] **SVAL-01**: Maintainer can run the local validator successfully after v1.3 roadmap initialization.
- [ ] **SVAL-02**: Validator checks Sealos Seal route row, aliases, default false, output suffix, required references, route status, brand context, canonical image markers, and drift boundary markers.
- [ ] **SVAL-03**: Validator checks Sealos Seal canonical pack files, prompt placeholders, QA markers, uploaded-image markers, and brand-boundary markers.
- [ ] **SVAL-04**: Validator checks README, examples, agent metadata, NOTICE, release checklist, raw and escaped Sealos output path tokens, and Sealos Seal smoke prompts.
- [ ] **SVAL-05**: Validator checks Sealos Seal leakage boundaries so Xiaohei, Littlebox, Tom, and Ferris packs stay free of Sealos Seal identity rules and brand mascot text.
- [ ] **SVAL-06**: Validator checks public example asset directories for Sealos Seal rendered assets against the release checklist public-sample approval policy.
- [ ] **SVAL-07**: Node validator tests cover five-route parser behavior, stable check ordering, Sealos Seal failure messages, brand/canonical-image fixtures, public/generated sample gates, and full pass output.

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
| Making Sealos Seal the default route | Xiaohei remains the compatibility baseline and Sealos Seal should require explicit selection. |
| Redesigning the mascot away from the uploaded image | v1.3 locks the uploaded white seal in cap and hoodie as the canonical Sealos Seal identity. |
| Using prior Sealos mascot exploration variants as the canonical route | The user selected the uploaded image as the mascot authority for this milestone. |
| Creating a generic seal mascot generator | v1.3 targets one Sealos brand route with fixed identity markers. |
| Shipping public Sealos Seal rendered examples without release review | Public generated assets should pass the release checklist identity and brand review. |
| Hybrid Xiaohei-Littlebox-Tom-Ferris-Sealos characters | Blended identities break route isolation, QA, and brand/source boundaries. |
| Hosted web app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |
| Automated visual likeness judgment | v1.3 validates objective text/package markers; visual identity review remains manual. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SBRD-01 | Phase 16 | Complete |
| SBRD-02 | Phase 16 | Complete |
| SBRD-03 | Phase 16 | Complete |
| SBRD-04 | Phase 16 | Complete |
| SBRD-05 | Phase 16 | Complete |
| SEAL-01 | Phase 18 | Pending |
| SEAL-02 | Phase 18 | Pending |
| SEAL-03 | Phase 18 | Pending |
| SEAL-04 | Phase 18 | Pending |
| SEAL-05 | Phase 18 | Pending |
| SIP-01 | Phase 17 | Complete |
| SIP-02 | Phase 17 | Pending |
| SIP-03 | Phase 17 | Pending |
| SIP-04 | Phase 17 | Pending |
| SIP-05 | Phase 17 | Pending |
| SIP-06 | Phase 17 | Pending |
| SDOC-01 | Phase 19 | Pending |
| SDOC-02 | Phase 19 | Pending |
| SDOC-03 | Phase 19 | Pending |
| SDOC-04 | Phase 19 | Pending |
| SDOC-05 | Phase 19 | Pending |
| SDOC-06 | Phase 19 | Pending |
| SVAL-01 | Phase 20 | Pending |
| SVAL-02 | Phase 20 | Pending |
| SVAL-03 | Phase 20 | Pending |
| SVAL-04 | Phase 20 | Pending |
| SVAL-05 | Phase 20 | Pending |
| SVAL-06 | Phase 20 | Pending |
| SVAL-07 | Phase 20 | Pending |
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

- v1.3 requirements: 29 total
- Mapped to phases: 29
- Unmapped: 0

---
*Requirements defined: 2026-06-13*
*Last updated: 2026-06-13 after starting v1.3 Sealos Seal Mascot IP Integration*
