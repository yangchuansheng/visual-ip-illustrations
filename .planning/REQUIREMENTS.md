# Requirements: Authorized Tom IP Integration

**Defined:** 2026-06-13
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.1 Requirements

### Rights

- [x] **RGT-01**: Maintainer can read Tom source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner in Tom-specific documentation.
- [x] **RGT-02**: Maintainer can distinguish Tom attribution from Tom permission in `NOTICE.md`.
- [x] **RGT-03**: Maintainer can keep Tom route gated or active through explicit route-status wording shared by routing docs, README, examples, and release checklist.
- [x] **RGT-04**: Maintainer can block public rendered Tom example assets until release checklist records explicit public-sample approval.

### Routing

- [x] **TOMR-01**: User can explicitly request Tom through clear aliases such as `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- [x] **TOMR-02**: User who omits visual IP still gets Xiaohei as the only default route.
- [x] **TOMR-03**: User can request Xiaohei, Littlebox, and Tom for the same core idea and receive separate variant groups.
- [x] **TOMR-04**: Tom outputs use `assets/<article-slug>-tom/` and docs include the escaped token `assets/&lt;article-slug&gt;-tom/`.
- [x] **TOMR-05**: Maintainer can inspect Tom route metadata, aliases, default flag, output suffix, required references, attribution context, and route status in `references/routing.md`.

### Tom IP Pack

- [x] **TOMP-01**: Maintainer can find Tom canonical references under `ian-xiaohei-illustrations/references/ips/tom/`.
- [x] **TOMP-02**: User receives Tom planning fields for placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- [x] **TOMP-03**: Tom prompt template produces one 16:9 article illustration where Tom performs the cognitive action.
- [x] **TOMP-04**: Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
- [x] **TOMP-05**: Tom edit prompts support stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.

### Documentation

- [x] **TDOC-01**: README explains Tom as an explicit protected-character route with its status, aliases, output path, and rights boundary.
- [ ] **TDOC-02**: `examples/prompts.md` includes copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
- [ ] **TDOC-03**: `agents/openai.yaml` names Xiaohei, Littlebox, and Tom while preserving Xiaohei as the implicit default.
- [ ] **TDOC-04**: `RELEASE_CHECKLIST.md` includes Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review.
- [x] **TDOC-05**: Public docs avoid broad Tom availability claims when Tom route status is gated.

### Validation

- [ ] **TVAL-01**: Maintainer can run the local validator successfully after v1.1 roadmap initialization clears prior phase working directories.
- [ ] **TVAL-02**: Validator checks Tom route row, aliases, default false, output suffix, required references, route status, and attribution context.
- [ ] **TVAL-03**: Validator checks Tom canonical pack files, prompt placeholders, QA markers, and rights-boundary markers.
- [ ] **TVAL-04**: Validator checks README, examples, agent metadata, NOTICE, release checklist, raw/escaped Tom output path tokens, and Tom smoke prompts.
- [ ] **TVAL-05**: Validator checks Tom leakage boundaries so Xiaohei and Littlebox packs stay free of Tom identity rules and Warner rights text.
- [ ] **TVAL-06**: Validator checks public example asset directories for Tom-rendered assets unless release checklist has explicit public-sample approval.
- [ ] **TVAL-07**: Node validator tests cover three-route parser behavior, stable check ordering, Tom failure messages, and full pass output.

## v2 Requirements

### Broader Protected IP Support

- **PIP-01**: Maintainer can add another protected visual IP by reusing the Tom rights-boundary pattern.
- **PIP-02**: Maintainer can track authorization records through a machine-readable protected-IP manifest.
- **PIP-03**: User can request approved multi-character franchise variants when authorization explicitly covers those characters.

### Assets

- **AST-01**: Maintainer can manage a machine-readable asset manifest with title, path, hash, composition family, IP route, rights status, and anti-repeat notes.
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
| Making Tom the default route | Xiaohei remains the compatibility baseline and protected-character generation should require explicit selection. |
| Adding Jerry, Spike, logos, title cards, or broader franchise scenes | v1.1 targets Tom only and keeps broader cast support for a separately authorized milestone. |
| Shipping public rendered Tom example images without approval | Public generated assets require explicit public-sample approval in the release checklist. |
| Building a generic third-party IP marketplace | v1.1 focuses on one authorized Tom route. |
| Hybrid Xiaohei-Littlebox-Tom characters | Blended identities break route isolation, QA, and attribution boundaries. |
| Hosted web app, UI, API, database, or build runtime | The product remains a lightweight Codex Skill package. |
| Automated visual likeness judgment | v1.1 validates objective text/package markers; visual taste and likeness review remain manual. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| RGT-01 | Phase 6 | Complete |
| RGT-02 | Phase 6 | Complete |
| RGT-03 | Phase 6 | Complete |
| RGT-04 | Phase 6 | Complete |
| TOMR-01 | Phase 8 | Complete |
| TOMR-02 | Phase 8 | Complete |
| TOMR-03 | Phase 8 | Complete |
| TOMR-04 | Phase 8 | Complete |
| TOMR-05 | Phase 6 | Complete |
| TOMP-01 | Phase 7 | Complete |
| TOMP-02 | Phase 7 | Complete |
| TOMP-03 | Phase 7 | Complete |
| TOMP-04 | Phase 7 | Complete |
| TOMP-05 | Phase 7 | Complete |
| TDOC-01 | Phase 9 | Complete |
| TDOC-02 | Phase 9 | Pending |
| TDOC-03 | Phase 9 | Pending |
| TDOC-04 | Phase 9 | Pending |
| TDOC-05 | Phase 9 | Complete |
| TVAL-01 | Phase 10 | Pending |
| TVAL-02 | Phase 10 | Pending |
| TVAL-03 | Phase 10 | Pending |
| TVAL-04 | Phase 10 | Pending |
| TVAL-05 | Phase 10 | Pending |
| TVAL-06 | Phase 10 | Pending |
| TVAL-07 | Phase 10 | Pending |

**Coverage:**

- v1.1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0

---
*Requirements defined: 2026-06-13*
*Last updated: 2026-06-13 after v1.1 roadmap creation*
