# Requirements: Multi-IP Article Illustration Skills

**Defined:** 2026-06-12
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1 Requirements

### Routing

- [x] **ROUT-01**: User can omit the visual IP and receive the existing Xiaohei behavior by default.
- [x] **ROUT-02**: User can explicitly request Xiaohei using aliases such as `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei`.
- [ ] **ROUT-03**: User can explicitly request Littlebox using aliases such as `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton`.
- [ ] **ROUT-04**: User gets separate variant groups when a request asks for both Xiaohei and Littlebox outputs.
- [x] **ROUT-05**: User-facing routing docs explain the default IP, explicit aliases, mixed-IP behavior, and output paths.

### IP Packs

- [ ] **IPCK-01**: Maintainer can find Xiaohei's visual language, IP contract, composition rules, prompt template, and quality gate under a canonical Xiaohei IP pack.
- [ ] **IPCK-02**: Maintainer can find Littlebox's visual language, IP contract, composition rules, language/label rules, prompt template, and quality gate under a canonical Littlebox IP pack.
- [x] **IPCK-03**: The shared workflow contains article understanding, cognitive-anchor selection, generation loop, QA handoff, asset preservation, and delivery reporting without IP-specific style rules.
- [ ] **IPCK-04**: Legacy Xiaohei reference paths remain available during the migration.
- [x] **IPCK-05**: Each IP declares aliases, output suffix, required references, and attribution context in a readable manifest or routing section.

### Xiaohei

- [ ] **XIAO-01**: Existing Xiaohei prompts from README and `examples/prompts.md` remain valid.
- [ ] **XIAO-02**: Xiaohei output keeps the existing path convention `assets/<article-slug>-illustrations/`.
- [ ] **XIAO-03**: Xiaohei prompt and QA preserve 16:9 horizontal format, pure white background, black hand-drawn line art, sparse red/orange/blue Chinese labels, large whitespace, and one core idea per image.
- [ ] **XIAO-04**: Xiaohei IP rules preserve a solid-black character with white dot eyes, tiny thin legs, deadpan expression, and active conceptual participation.
- [ ] **XIAO-05**: Xiaohei anti-repeat rules keep examples as calibration material and prohibit default reuse of old motifs.

### Littlebox

- [ ] **LBOX-01**: Littlebox source material from `okooo5km/5km-littlebox-illustrations` is adapted into this installable package with clear attribution.
- [ ] **LBOX-02**: Littlebox output uses `assets/<article-slug>-littlebox/`.
- [ ] **LBOX-03**: Littlebox planning output includes closed state, visual metaphor, assigned pale sky-blue or pale lavender background, supporting objects, and short visible labels.
- [ ] **LBOX-04**: Littlebox prompt and QA enforce closed-only paper-box identity, front-left three-quarter view, front-panel dot eyes, tiny legs, at most two side-seam twig arms, one amber jagged seam tape, white or near-white body, chunky rough black marker linework, and sparse amber/coral accents.
- [ ] **LBOX-05**: Littlebox image sets balance pale sky-blue `#E3F2FD` and pale lavender `#E6E6FA` backgrounds when multiple images are planned.
- [ ] **LBOX-06**: Littlebox visible labels follow the user's language while generation prompts stay English for model consistency.
- [ ] **LBOX-07**: Littlebox QA rejects open lids, raised flaps, cutaways, visible interiors, extra arms, wrong tape placement, beige cardboard fills, clean vector linework, and passive character placement.

### Validation

- [ ] **VALD-01**: Maintainer can run one local validation command for the installable skill package.
- [ ] **VALD-02**: Validation checks `SKILL.md` frontmatter, agent metadata presence, routing aliases, required references, legacy Xiaohei paths, prompt-template placeholders, output suffixes, README/example links, and NOTICE attribution.
- [ ] **VALD-03**: Validation exits nonzero when a required reference path, output path rule, IP alias group, prompt placeholder, or attribution marker is missing.
- [ ] **VALD-04**: Validation can run without a full application framework or external service.
- [ ] **VALD-05**: Manual smoke prompts cover default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant behavior.

### Documentation

- [ ] **DOCS-01**: README explains that the skill supports multiple visual IPs and that Xiaohei remains the default.
- [ ] **DOCS-02**: README includes concise examples for Xiaohei planning, Xiaohei generation, Littlebox planning, Littlebox generation, and same-idea IP contrast.
- [ ] **DOCS-03**: `examples/prompts.md` includes copyable prompts for both IPs and mixed-IP variants.
- [ ] **DOCS-04**: `NOTICE.md` credits Littlebox source material, author `okooo5km`, source repository URL, MIT license context, and inspected commit `37cd93e`.
- [ ] **DOCS-05**: `agents/openai.yaml` metadata reflects selectable IP support while preserving the Xiaohei default.
- [ ] **DOCS-06**: Release checklist tells maintainers to run validation, smoke-test both IPs, review attribution, and check installable package boundaries.

## v2 Requirements

### Extensibility

- **EXT-01**: Maintainer can add a third visual IP by creating a new IP pack and manifest.
- **EXT-02**: User can import a custom visual IP with a documented schema.
- **EXT-03**: User can ask the skill to recommend the best IP for an article tone.
- **EXT-04**: User can generate mixed-IP article sets with planned alternation rules.

### Assets

- **AST-01**: Maintainer can manage a machine-readable asset manifest with title, path, hash, composition family, and anti-repeat notes.
- **AST-02**: User can generate a contact sheet or visual comparison board.
- **AST-03**: Maintainer can run automated visual regression checks against calibration outputs.

### Distribution

- **DIST-01**: Maintainer can package the installable skill directory through a release script.
- **DIST-02**: User can install multiple IP variants through a CLI-level selector.
- **DIST-03**: Documentation supports a full English localization pass.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Hybrid Xiaohei-Littlebox character | It breaks both IP contracts and makes QA ambiguous. |
| Hosted web app or visual picker | The product is a Codex Skill package. |
| PPT, SVG, HTML, Canvas, Keynote, or PDF export | Both source skills define PNG article illustrations as the deliverable. |
| Arbitrary user-defined IP import in v1 | The first milestone needs a reliable two-IP foundation. |
| Full Littlebox rendered image import in v1 | The priority is integrating the skill rules, prompt contract, QA, docs, and attribution. |
| Automated image-quality judgment in v1 | Visual taste remains manual; v1 makes objective identity markers executable where possible. |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ROUT-01 | Phase 1 | Complete |
| ROUT-02 | Phase 1 | Complete |
| ROUT-03 | Phase 3 | Pending |
| ROUT-04 | Phase 3 | Pending |
| ROUT-05 | Phase 1 | Complete |
| IPCK-01 | Phase 2 | Pending |
| IPCK-02 | Phase 3 | Pending |
| IPCK-03 | Phase 1 | Complete |
| IPCK-04 | Phase 2 | Pending |
| IPCK-05 | Phase 1 | Complete |
| XIAO-01 | Phase 2 | Pending |
| XIAO-02 | Phase 2 | Pending |
| XIAO-03 | Phase 2 | Pending |
| XIAO-04 | Phase 2 | Pending |
| XIAO-05 | Phase 2 | Pending |
| LBOX-01 | Phase 3 | Pending |
| LBOX-02 | Phase 3 | Pending |
| LBOX-03 | Phase 3 | Pending |
| LBOX-04 | Phase 3 | Pending |
| LBOX-05 | Phase 3 | Pending |
| LBOX-06 | Phase 3 | Pending |
| LBOX-07 | Phase 3 | Pending |
| VALD-01 | Phase 4 | Pending |
| VALD-02 | Phase 4 | Pending |
| VALD-03 | Phase 4 | Pending |
| VALD-04 | Phase 4 | Pending |
| VALD-05 | Phase 4 | Pending |
| DOCS-01 | Phase 5 | Pending |
| DOCS-02 | Phase 5 | Pending |
| DOCS-03 | Phase 5 | Pending |
| DOCS-04 | Phase 3 | Pending |
| DOCS-05 | Phase 5 | Pending |
| DOCS-06 | Phase 5 | Pending |

**Coverage:**

- v1 requirements: 33 total
- Mapped to phases: 33
- Unmapped: 0

---
*Requirements defined: 2026-06-12*
*Last updated: 2026-06-12 after initial definition*
