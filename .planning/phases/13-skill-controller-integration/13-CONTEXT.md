# Phase 13: Skill Controller Integration - Context

**Gathered:** 2026-06-13T16:57:31+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 13 delivers runtime controller integration for the Ferris route inside the installable skill. Users can explicitly select Ferris, omitted visual-IP requests keep the Xiaohei default route, mixed-IP requests produce separate Xiaohei, Littlebox, Tom, and Ferris variant groups, and Ferris delivery uses the `assets/<article-slug>-ferris/` output path plus the escaped documentation token `assets/&lt;article-slug&gt;-ferris/`.

The phase is bounded to controller and route surfaces:

- Ferris route alias selection in `SKILL.md`.
- Ferris `required_references` expansion in `references/routing.md` now that the Phase 12 pack exists.
- Ferris planning fields and source/trademark note propagation in the controller flow.
- Ferris generation, QA, edit, delivery, and mixed-IP grouping instructions in `SKILL.md`.
- Ferris output path and escaped token requirements in controller-facing wording.

Phase 14 owns public README, prompt examples, agent metadata, NOTICE wording pass, and release checklist expansion. Phase 15 owns validator and Node test hardening.

</domain>

<decisions>
## Implementation Decisions

### Route Selection and Defaults

- **D-01:** Preserve Xiaohei as the only omitted-IP default route.
- **D-02:** Ferris remains an explicit route with `default=false`, route id `ferris`, display name `Ferris`, `output_suffix=ferris`, and route status `source-reviewed`.
- **D-03:** Ferris aliases are locked to `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` for Phase 13.
- **D-04:** `SKILL.md` should add Ferris to the route-selection bullets beside Xiaohei, Littlebox, and Tom, using the same route-table vocabulary as `references/routing.md`.
- **D-05:** Omitted visual-IP text, generic "article illustration", "hand-drawn", "正文配图", and existing Xiaohei prompts continue to select Xiaohei through the legacy-compatible path.

### Ferris Required References

- **D-06:** Expand the Ferris `required_references` cell in `ian-xiaohei-illustrations/references/routing.md` from only `references/ips/ferris/source.md` to the full Phase 12 pack:
  - `references/ips/ferris/index.md`
  - `references/ips/ferris/source.md`
  - `references/ips/ferris/style-dna.md`
  - `references/ips/ferris/ferris-ip.md`
  - `references/ips/ferris/composition-patterns.md`
  - `references/ips/ferris/prompt-template.md`
  - `references/ips/ferris/qa-checklist.md`
- **D-07:** `SKILL.md` should list the Ferris pack files under "先读这些参考" with compact one-line purposes, matching the existing Tom route pattern.
- **D-08:** Each Ferris route group loads only Ferris `required_references`; source/trademark authority remains `references/ips/ferris/source.md`.

### Planning, Generation, QA, and Edits

- **D-09:** Ferris shot lists use the Phase 12 Ferris planning fields: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-10:** Ferris generation uses `references/ips/ferris/prompt-template.md`, `references/ips/ferris/composition-patterns.md`, and the route-local Ferris identity/style references.
- **D-11:** Ferris QA uses `references/ips/ferris/qa-checklist.md` and carries these failure categories into the controller high-risk list: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-12:** Ferris edit/repair routing uses the six Phase 12 edit gates from `prompt-template.md`: participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation.
- **D-13:** Ferris planning, generation, QA, edit, and delivery contexts keep `source-reviewed`, `references/ips/ferris/source.md`, and the compact source/trademark note visible.

### Mixed-IP Behavior

- **D-14:** Mixed-IP requests use one shared core idea and separate variant groups for each selected IP.
- **D-15:** Four-IP mixed requests create four independent groups: Xiaohei, Littlebox, Tom, and Ferris.
- **D-16:** Each group keeps its own route id, required references, prompt template, composition rules, QA checklist, edit gates, output suffix, delivery path, and route-specific notes.
- **D-17:** Ferris mixed-IP groups include Ferris state, Ferris action, supporting objects, visible labels, `assets/<article-slug>-ferris/`, `source-reviewed`, and the `references/ips/ferris/source.md` source/trademark pointer.
- **D-18:** Mixed-IP delivery uses one block per selected IP. Add a Ferris block beside existing Xiaohei, Littlebox, and Tom blocks.

### Output Paths and Escaped Tokens

- **D-19:** Ferris output path is `assets/<article-slug>-ferris/`.
- **D-20:** Ferris documentation/validation token is `assets/&lt;article-slug&gt;-ferris/`.
- **D-21:** `SKILL.md` save/delivery sections should add Ferris to the active path code block list, output suffix mapping, validation marker list, mixed-IP save path list, and delivery block list.
- **D-22:** Ferris file names follow the existing ordered English slug pattern, such as `01-topic-name.png`.
- **D-23:** Generated assets are written into the user's workspace route output directory, preserving existing assets unless the user explicitly asks for replacement.

### Phase Boundary and File Scope

- **D-24:** Phase 13 likely modifies only:
  - `ian-xiaohei-illustrations/SKILL.md`
  - `ian-xiaohei-illustrations/references/routing.md`
- **D-25:** Phase 13 may update adjacent wording only when required to keep those two controller surfaces coherent.
- **D-26:** Phase 14 owns public docs/examples/metadata/release-surface work:
  - `README.md`
  - `examples/prompts.md`
  - `ian-xiaohei-illustrations/agents/openai.yaml`
  - `NOTICE.md`
  - `RELEASE_CHECKLIST.md`
- **D-27:** Phase 15 owns validation hardening:
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`

### the agent's Discretion

- The user requested a non-interactive Phase 13 discussion artifact with autonomous resolution of open questions. Codebase evidence locked the recommended decisions above.
- The planner may tune exact Chinese heading text in `SKILL.md` while preserving the route behavior, alias list, output path, escaped token, mixed-IP grouping, and source/trademark note requirements.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.2 Ferris milestone context, constraints, and active route/source/trademark decisions.
- `.planning/REQUIREMENTS.md` - Phase 13 requirement IDs FERR-01, FERR-02, FERR-03, and FERR-04.
- `.planning/ROADMAP.md` - Phase 13 goal, success criteria, dependency on Phase 12, and downstream Phase 14/15 split.
- `.planning/STATE.md` - Current milestone state and carried-forward decisions from Tom Phases 6-10 and Ferris Phases 11-12.

### Prior Phase Context

- `.planning/phases/11-ferris-source-and-route-contract/11-CONTEXT.md` - Ferris route metadata, alias list, default=false, output suffix, source-reviewed status, source/trademark record, public phrase, sample gate, and Phase 13 deferral.
- `.planning/phases/12-ferris-canonical-pack/12-CONTEXT.md` - Ferris pack file layout, planning fields, prompt/QA/edit taxonomy, output path, and Phase 13 deferral.
- `.planning/phases/12-ferris-canonical-pack/12-01-SUMMARY.md` - Created Ferris index, style DNA, and identity foundations.
- `.planning/phases/12-ferris-canonical-pack/12-02-SUMMARY.md` - Created Ferris composition and prompt templates.
- `.planning/phases/12-ferris-canonical-pack/12-03-SUMMARY.md` - Created Ferris QA checklist and confirmed pack coherence.

### Controller Surfaces

- `ian-xiaohei-illustrations/SKILL.md` - Main runtime controller for route selection, reference loading, planning, generation, QA, saving, and delivery reporting.
- `ian-xiaohei-illustrations/references/routing.md` - Route metadata table, aliases, defaults, required references, output suffixes, output paths, and mixed-IP grouping rules.

### Ferris Pack

- `ian-xiaohei-illustrations/references/ips/ferris/index.md` - Ferris pack navigation, route contract, operational coherence, and Phase 13 boundary note.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Ferris source/trademark authority, source-reviewed status, CC0/public-domain context, Rust trademark boundary, sample policy, and review owner.
- `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` - Ferris style DNA, recognition cues, visual vetoes, and route gates.
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` - Ferris identity, cognitive-action responsibility, recognition rules, route boundary, and failure modes.
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` - Ferris composition families, Rust-themed object pool, action pool, label rules, source/trademark gates, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` - Ferris planning output fields, generation prompt, source/trademark note, output reminder, route block, and edit gates.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` - Ferris pass/fail checks, source/trademark checks, iteration moves, route leakage repair, and delivery judgment.

### Existing Route Analogs

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` - Default-route pack index and `assets/<article-slug>-illustrations/` output path.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - Explicit selectable-route pack index, source attribution, and `assets/<article-slug>-littlebox/` output path.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Closest route-status pack analog for route-local references and output path.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Planning/generation/edit prompt precedent for a status-aware explicit route.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - QA and delivery precedent for preserving route status and rights/source boundary notes.

### Codebase Maps

- `.planning/codebase/ARCHITECTURE.md` - Skill entrypoint as central controller, progressive reference loading, externalized image generation, and workspace output behavior.
- `.planning/codebase/CONVENTIONS.md` - Markdown reference conventions, route reference registration guidance, and delivery report shape.
- `.planning/codebase/STRUCTURE.md` - Installable skill package shape, reference placement patterns, and where controller behavior belongs.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/SKILL.md`: already contains explicit route-selection bullets for Xiaohei, Littlebox, and Tom; Phase 13 can extend that pattern to Ferris.
- `ian-xiaohei-illustrations/references/routing.md`: already contains a Ferris route row, aliases, `default=false`, `output_suffix=ferris`, output path, escaped token, and mixed-IP route grouping; the main missing controller-ready piece is full Ferris `required_references`.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`: provides the exact Ferris shot-list fields, one-image generation prompt, output reminder, and edit gates the controller should call.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`: provides the Ferris QA authority and route-leakage repair language for the controller QA and delivery guard.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` and `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`: closest explicit-route controller analog for status-note propagation.

### Established Patterns

- The skill selects a visual IP first, then loads only that route's `required_references`.
- Xiaohei is the compatibility default route with legacy root-path reference compatibility.
- Explicit routes use `default=false`, alias lists, route-local pack files, route-specific output suffixes, and separate output directories.
- Mixed-IP requests become separate route groups rather than blended character prompts.
- Planning and delivery notes follow the user's language; image-generation prompts stay English where the route prompt template says so.
- Generated images are saved under workspace `assets/<article-slug>-<suffix>/` folders with ordered English slug filenames.

### Integration Points

- `SKILL.md` line-level areas to update:
  - Core positioning near the optional-IP paragraphs.
  - "先读这些参考" reference list.
  - "选择视觉 IP 路由" selection bullets, mixed-IP grouping, output paths, and required references.
  - "先出配图策略" route-specific shot-list fields and mixed-IP shot-list groups.
  - "单张生成" Ferris generation context and mixed-IP generation grouping.
  - "检查与迭代" Ferris QA high-risk list and edit gate routing.
  - "保存交付" Ferris active path, suffix mapping, escaped validation marker, mixed-IP save list.
  - "输出口径" Ferris delivery block and route-leakage guard.
- `references/routing.md` line-level areas to update:
  - Ferris route row `required_references`.
  - Optional wording around mixed route groups if controller wording needs exact parity with `SKILL.md`.

</code_context>

<specifics>
## Specific Ideas

- Ferris source/trademark note should stay compact in `SKILL.md`: Ferris is a `source-reviewed` Rust-community mascot route; check `references/ips/ferris/source.md` for source context and Rust trademark boundary.
- Ferris prompt must keep source/trademark-sensitive wording out of broad public claims while still allowing runtime route selection.
- Ferris controller text should use the same public route-status phrase from Phase 11 where appropriate: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- Ferris route block names should remain stable for Phase 15 validation: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.

</specifics>

<deferred>
## Deferred Ideas

- Phase 14: README public Ferris route docs, copyable Ferris planning/generation/smoke prompts, four-IP mixed prompts, agent metadata, NOTICE consistency pass, and release checklist Ferris expansion.
- Phase 15: validator and Node test hardening for Ferris route behavior, full pack refs, prompt placeholders, QA markers, docs markers, source/trademark markers, raw and escaped path tokens, route leakage, public sample gates, and four-route parser behavior.
- v2: reusable mascot manifest, asset manifest, visual regression, package/release script, route selector, and English localization.

</deferred>

---

*Phase: 13-Skill Controller Integration*
*Context gathered: 2026-06-13T16:57:31+08:00*
