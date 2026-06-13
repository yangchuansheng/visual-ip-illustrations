# Phase 16: Sealos Seal Brand and Image Contract - Context

**Gathered:** 2026-06-13T14:17:08Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 16 delivers the Sealos Seal brand and uploaded-image contract before the route expands into a full canonical pack or runtime selection behavior. The phase creates the route authority record, records fixed visual markers from the uploaded mascot image, exposes maintainer-readable route metadata, adds NOTICE and release-review boundaries, and adds minimal validator coverage for the contract surfaces.

Phase 16 covers SBRD-01 through SBRD-05 only. Phase 17 creates the full Sealos Seal pack, Phase 18 wires runtime controller behavior, Phase 19 expands public docs and examples, and Phase 20 hardens full-route validation.

</domain>

<decisions>
## Implementation Decisions

### Canonical Image Authority

- **D-01:** Create `ian-xiaohei-illustrations/references/ips/sealos/source.md` as the Phase 16 Sealos Seal brand and canonical-image authority record.
- **D-02:** The authority record must name the user's uploaded mascot image as the canonical Sealos Seal reference for v1.3.
- **D-03:** The record should use a title such as `Sealos Seal Brand and Canonical Image Record` and include sections for source, brand context, canonical image authority, fixed visual markers, prior exploration boundary, route status, allowed use, restricted use, distribution boundary, sample policy, drift boundary, and review owner.
- **D-04:** The uploaded image is the shape authority. Earlier Sealos mascot exploration supplies brand personality and domain context only.

### Fixed Mascot Markers

- **D-05:** Treat the following uploaded-image markers as required objective contract markers: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-06:** Repeat the full marker list in the Sealos source record and in at least one maintainer-facing review surface so downstream agents can preserve exact wording.
- **D-07:** The route contract should distinguish the selected uploaded mascot from generic seals, abstract logo creatures, blue-gradient cloud/seal explorations, bald or plain-head seal variants, and any different mascot selection.

### Brand and Prior Exploration Boundary

- **D-08:** Preserve Sealos brand context as a reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes context.
- **D-09:** Preserve Sealos logo usage as route identity markers on the cap and chest, with release review covering brand/logo accuracy before public rendered samples are published.
- **D-10:** Prior Sealos mascot exploration can inform wording such as reliable cloud developer companion, cloud OS identity, and developer-tool friendliness. Generated shapes and earlier alternate mascot concepts stay supporting context.

### Routing Metadata Contract

- **D-11:** Add a Sealos Seal row to `ian-xiaohei-illustrations/references/routing.md` using route id `sealos`, display name `Sealos Seal`, `default=false`, and `output_suffix=sealos`.
- **D-12:** Use explicit aliases for Phase 16 metadata: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
- **D-13:** Set route status to `brand-owned` and add Sealos-specific routing metadata for `brand_context`, `canonical_image_status: uploaded-image-canonical`, and `drift_boundary: uploaded-image-locked`.
- **D-14:** Keep Xiaohei as the only implicit default route. Sealos Seal is an explicit route with `default=false`.
- **D-15:** The Phase 16 route row should list the planned Sealos pack references so routing intent is visible before Phase 17 fills every file: `references/ips/sealos/index.md`; `references/ips/sealos/source.md`; `references/ips/sealos/style-dna.md`; `references/ips/sealos/sealos-ip.md`; `references/ips/sealos/composition-patterns.md`; `references/ips/sealos/prompt-template.md`; `references/ips/sealos/qa-checklist.md`.
- **D-16:** Add a Sealos-specific metadata block near the route table instead of expanding every route row with new global columns. The block should cover brand context, canonical image status, and drift boundary for SBRD-05.
- **D-17:** Add output path tokens for the later route contract: raw `assets/<article-slug>-sealos/` and escaped `assets/&lt;article-slug&gt;-sealos/`.

### Public Sample Policy

- **D-18:** Public rendered Sealos Seal samples require a pending release-review record before any sample is copied into `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- **D-19:** The release review must cover uploaded-image identity, cap/hoodie/logo marker preservation, Sealos brand/logo wording, prompt leakage, public asset directories, generated sample policy, release channels, and reviewer/date/status fields.
- **D-20:** Internal review samples may use `assets/<article-slug>-sealos/` when the Sealos source record and brand/canonical-image note remain attached.
- **D-21:** Public sample drift includes generic seals, abstract logo creatures, missing cap, missing hoodie, missing Sealos logo marks, changed body color, missing side-rear tail, plain bald-head variants, prior exploration variants, and any different selected mascot.

### Notice and Release Surfaces

- **D-22:** Add a `Sealos Seal Brand and Canonical Image Boundary` section to `NOTICE.md`.
- **D-23:** NOTICE should name the Sealos Seal route, route status `brand-owned`, uploaded-image authority, source record path `ian-xiaohei-illustrations/references/ips/sealos/source.md`, and release review boundary for public samples and brand/logo wording.
- **D-24:** Add a Sealos section to `RELEASE_CHECKLIST.md` modeled after the Ferris release gate, with Sealos-specific identity, brand/logo, public asset, generated sample, and final review fields.

### Phase 16 Validator Baseline

- **D-25:** Phase 16 should repair the current validator baseline after adding Sealos metadata and add minimal checks for the Phase 16 contract surfaces.
- **D-26:** Minimal Phase 16 checks should cover the Sealos source record, route row, aliases, `default=false`, `output_suffix=sealos`, planned required references, route status, brand context, canonical-image status, fixed marker list, NOTICE boundary, release checklist gate, raw and escaped output tokens, and public sample drift markers.
- **D-27:** Phase 16 checks may verify marker text and route contract presence. Full Sealos pack file checks, prompt placeholders, QA gates, controller behavior, metadata, docs examples, and route leakage hardening belong to Phases 17-20.
- **D-28:** Keep validation dependency-free through `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`.

### the agent's Discretion

The user authorized autonomous choices through workflow prompts. The selected decisions above should guide downstream agents directly. Agents may choose exact prose layout inside the approved files as long as SBRD-01 through SBRD-05 remain satisfied and the locked markers are preserved.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 16 goal, dependencies, SBRD requirements, success criteria, and three planned Phase 16 plans.
- `.planning/REQUIREMENTS.md` — Defines SBRD-01 through SBRD-05 plus v1.3 route, pack, docs, validation, and out-of-scope boundaries.
- `.planning/PROJECT.md` — Defines the v1.3 Sealos Seal milestone, uploaded-image authority, fixed markers, brand boundary, and project-level constraints.
- `.planning/STATE.md` — Carries forward v1.2 completion evidence and v1.3 milestone decisions about the uploaded white seal mascot.

### Current Route and Brand Surfaces

- `ian-xiaohei-illustrations/references/routing.md` — Existing four-route metadata table, route selection rules, output path tokens, and mixed-IP grouping pattern.
- `NOTICE.md` — Existing Ian, Littlebox, Tom, and Ferris attribution and boundary sections; Sealos should follow the same maintainer-readable pattern.
- `RELEASE_CHECKLIST.md` — Existing Tom and Ferris release gates, public sample policy, generated sample policy, and route smoke prompts.

### Prior Route Authority Patterns

- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Protected-character authority pattern for route status, allowed use, restricted use, sample policy, and review owner.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` — Source/trademark authority pattern for route status, source context, public sample gate, and release review fields.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` — Current route-local pack navigation pattern for a mascot route.

### Runtime and Public Surfaces

- `ian-xiaohei-illustrations/SKILL.md` — Existing controller-level route selection, route-local reference loading, planning fields, generation notes, and mixed-IP behavior.
- `README.md` — Public route overview, output paths, route descriptions, and route reference section.
- `examples/prompts.md` — Existing route smoke prompts and copyable prompt fixtures for explicit route selection and mixed-IP planning.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent discovery metadata currently naming Xiaohei, Littlebox, Tom, and Ferris.

### Validation Surfaces

- `scripts/validate-skill-package.mjs` — Dependency-free validator with ordered route, docs, NOTICE, release, leakage, and public-sample checks.
- `scripts/validate-skill-package.test.mjs` — Node tests for validator ordering, parser behavior, route drift fixtures, and approval parsing.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/routing.md`: Reuse the existing route table and route-specific prose pattern, then add Sealos row plus a Sealos metadata block.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md`: Reuse the authority-record section structure for Sealos, replacing source/trademark fields with brand/canonical-image fields.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md`: Reuse the sample-policy and review-owner field pattern for Sealos public sample approval.
- `RELEASE_CHECKLIST.md`: Reuse the Ferris public asset and generated sample gate shape, with Sealos identity and brand/logo review fields.
- `scripts/validate-skill-package.mjs`: Reuse existing helpers for route table parsing, output path token checks, NOTICE markers, release checklist markers, public image asset detection, and approval parsing.
- `scripts/validate-skill-package.test.mjs`: Reuse route metadata drift fixtures and approval parser fixture style for Sealos Phase 16 checks.

### Established Patterns

- The repository is a documentation-first Codex Skill package with Markdown/YAML surfaces and dependency-free Node validation.
- Each explicit IP has route-local references under `ian-xiaohei-illustrations/references/ips/<route>/` and route metadata in `references/routing.md`.
- Xiaohei remains the only omitted-IP default; every later IP route uses `default=false`.
- Route-specific authority records stay close to their IP pack: Tom uses `rights.md`, Ferris uses `source.md`, and Sealos should use `source.md` as its brand/canonical-image authority record.
- Public rendered samples for rights-sensitive or brand-sensitive routes stay behind release checklist approval before they appear in public sample directories.

### Integration Points

- Phase 16 implementation connects to `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/sealos/source.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `scripts/validate-skill-package.mjs`, and `scripts/validate-skill-package.test.mjs`.
- Later phases connect Sealos Seal into `ian-xiaohei-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and the full Sealos pack under `ian-xiaohei-illustrations/references/ips/sealos/`.

</code_context>

<specifics>
## Specific Ideas

- The route authority is the uploaded white seal wearing a navy cap and deep-blue hoodie.
- The fixed marker list is exact: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Sealos brand personality should read as a reliable cloud developer companion tied to cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes.
- Earlier Sealos mascot work remains useful for brand/domain language and mascot personality. The uploaded image governs visual identity.
- The Sealos output suffix should be `sealos`; the raw route output path should be `assets/<article-slug>-sealos/`; the escaped docs token should be `assets/&lt;article-slug&gt;-sealos/`.
- Public sample review should explicitly block drift into generic seals, abstract logo creatures, prior mascot variants, missing cap/hoodie/logo marks, and plain bald-head seal variants.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 16 scope.

</deferred>

---

*Phase: 16-Sealos Seal Brand and Image Contract*
*Context gathered: 2026-06-13T14:17:08Z*
