# Phase 14: Docs, Examples, and Release Surface - Context

**Gathered:** 2026-06-13T18:06:45+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 14 delivers Ferris-aware public and release documentation after the Ferris route is wired into the skill controller. Users and maintainers should be able to request Ferris, inspect the route, copy working prompts, read agent metadata, audit NOTICE wording, and run release-review gates with consistent source/trademark language.

The phase is bounded to public and release surfaces:

- `README.md` public Ferris route guidance.
- `examples/prompts.md` copyable Ferris planning, generation, smoke, and four-IP mixed prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml` discovery metadata naming Xiaohei, Littlebox, Tom, and Ferris while preserving Xiaohei as the implicit default.
- `NOTICE.md` Ferris source attribution and Rust trademark/endorsement boundary consistency.
- `RELEASE_CHECKLIST.md` Ferris source review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
- `ian-xiaohei-illustrations/references/routing.md` only if a small wording sync is needed to keep shared public Ferris route wording consistent.

Phase 14 must not update validator implementation or Node tests. `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` remain Phase 15 work because Phase 13 intentionally changed Ferris route references from the Phase 11 source-only baseline to the seven-file Phase 12 pack.

</domain>

<decisions>
## Implementation Decisions

### Public Ferris README Guidance

- **D-01:** README should explain Ferris as an explicit Rust-community mascot route with status `source-reviewed`, not as an implicit default. Xiaohei remains the only omitted-IP default route.
- **D-02:** README should keep the locked Ferris aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- **D-03:** README should name the Ferris output contract in both raw and escaped forms: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`.
- **D-04:** README should promote the full Ferris canonical pack path `ian-xiaohei-illustrations/references/ips/ferris/`, with `source.md` called out as the source/trademark authority.
- **D-05:** README Ferris wording should preserve the Phase 11 source/trademark phrase: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- **D-06:** README should mention Ferris planning fields at user level: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-07:** README workflow and maintainer-validation sections should name Ferris beside Xiaohei, Littlebox, and Tom, while noting that validator/test hardening is completed in Phase 15.

### Copyable Prompt Decisions

- **D-08:** `examples/prompts.md` should replace the Phase 11 placeholder `route contract marker` language with full copyable Ferris prompts.
- **D-09:** Add a Ferris planning prompt that asks for a shot list with the Phase 12 Ferris fields, route status `source-reviewed`, full Ferris route-local reference directory, source record, raw path, and escaped path token.
- **D-10:** Add a Ferris generation prompt that asks for one or more Ferris-route article illustrations where Ferris performs the cognitive action, uses Rust-themed low-tech article metaphors, reports `assets/<article-slug>-ferris/`, and preserves the source/trademark note.
- **D-11:** Add a Ferris smoke prompt for text-only route auditing. It should assert selected IP, aliases, `source-reviewed`, `ian-xiaohei-illustrations/references/ips/ferris/source.md`, full Ferris pack loading, raw path, escaped token, planning fields, and public-sample release review.
- **D-12:** Update mixed-IP prompts to include all four route groups: Xiaohei, Littlebox, Tom, and Ferris. The Ferris group should use the full `ian-xiaohei-illustrations/references/ips/ferris/` pack, `source.md`, Ferris state/action/supporting objects/visible labels/output path/source-trademark note, and public-sample release gate.
- **D-13:** Keep prompt examples copyable and Chinese-first, while retaining exact route tokens, file paths, aliases, statuses, and output markers in English/code format.

### Metadata Wording Decisions

- **D-14:** `ian-xiaohei-illustrations/agents/openai.yaml` should name all four routes in `display_name`, `short_description`, and `default_prompt`: Xiaohei, Littlebox, Tom, and Ferris.
- **D-15:** Metadata should preserve `allow_implicit_invocation: true` at skill level and explain that omitted visual IP defaults to Xiaohei.
- **D-16:** Metadata should describe Littlebox, Tom, and Ferris as explicit selectable routes. Tom keeps `gated-authorized`; Ferris keeps `source-reviewed`.
- **D-17:** Metadata should avoid official Rust affiliation or endorsement language. It can call Ferris an explicit Rust-community mascot route and point behavior to the skill's routing/docs contract.

### NOTICE Consistency Decisions

- **D-18:** `NOTICE.md` should keep the existing Ferris section title `Ferris Source Attribution and Rust Trademark Boundary`.
- **D-19:** NOTICE must separate Ferris source attribution from Rust trademark or endorsement status. Source attribution records `rustacean.net`, Ferris the Rustacean, Karen Rustad Tolva, and copyright-waiver context; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow Rust Foundation trademark policy context and release review.
- **D-20:** NOTICE should point to `ian-xiaohei-illustrations/references/ips/ferris/source.md` as the operational source/trademark authority.
- **D-21:** NOTICE should stay concise and not become the full Ferris source record. Detailed allowed use, restricted use, distribution boundary, sample policy, and review owner remain in `references/ips/ferris/source.md`.
- **D-22:** Public docs should reuse NOTICE's source/trademark separation rather than invent alternate phrases.

### Release Checklist Expansion Decisions

- **D-23:** `RELEASE_CHECKLIST.md` should keep the automated gates section and validator commands, while noting that Phase 15 is responsible for updating validator/test expectations to the full Ferris route pack.
- **D-24:** Ferris source review should require checking `references/ips/ferris/source.md` for source, author/source sites, copyright waiver, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- **D-25:** Rust trademark wording review should scan README, examples, `SKILL.md`, routing docs, NOTICE, release notes, and generated samples for Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and broad release language.
- **D-26:** Add a Ferris prompt leakage scan covering generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage, missing `source-reviewed`, missing `source.md`, and cross-route identity leakage.
- **D-27:** Add a Ferris public asset policy gate for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`, with reviewer, date, approval status, allowed directories, release channels, and trademark/endorsement outcome.
- **D-28:** Add a Ferris generated sample policy gate for workspace outputs under `assets/<article-slug>-ferris/`, with explicit distinction between internal review samples and public rendered samples.
- **D-29:** Final Ferris release review should confirm source record authority, NOTICE consistency, README/examples metadata parity, route status, public asset approvals, generated sample approvals, and Phase 15 validator/test evidence before v1.2 release.

### Phase 15 Deferral

- **D-30:** Do not edit `scripts/validate-skill-package.mjs` or `scripts/validate-skill-package.test.mjs` in Phase 14.
- **D-31:** Do not attempt to make validator or Node tests green in Phase 14. The known red baseline from Phase 13 is expected until Phase 15 updates `ROUTE-FERRIS-001`, `ROUTE-REFS-001`, docs markers, source/trademark markers, leakage gates, public sample gates, and parser tests.
- **D-32:** Phase 14 may include validator command references in docs and release checklist, but implementation and test expectation changes belong to Phase 15.

### Likely Modified Files

- **D-33:** Phase 14 likely modifies:
  - `README.md`
  - `examples/prompts.md`
  - `ian-xiaohei-illustrations/agents/openai.yaml`
  - `NOTICE.md`
  - `RELEASE_CHECKLIST.md`
  - `ian-xiaohei-illustrations/references/routing.md` only for small shared wording consistency, if needed.
- **D-34:** Phase 14 should preserve:
  - `ian-xiaohei-illustrations/SKILL.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/*.md`
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`

### Agent Discretion

- The user supplied the Phase 14 requirements and constraints directly, so no interactive gray-area selection was needed. The planner may tune exact Chinese wording, section placement, and prompt ordering while preserving the decisions above and the Phase 11-13 contracts.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.2 Ferris milestone context, source/trademark constraints, active Phase 14 docs requirements, and project-level constraints.
- `.planning/REQUIREMENTS.md` - Phase 14 requirement IDs FDOC-01 through FDOC-05 and Phase 15 validation boundary.
- `.planning/ROADMAP.md` - Phase 14 goal, success criteria, four planned work slices, and Phase 15 separation.
- `.planning/STATE.md` - Current milestone state, Phase 13 completion, and known Phase 15 validator/test deferral.

### Prior Phase Evidence

- `.planning/phases/11-ferris-source-and-route-contract/11-CONTEXT.md` - Locked Ferris source record, public route phrase, NOTICE boundary, release sample gate, and minimal validator contract.
- `.planning/phases/11-ferris-source-and-route-contract/11-VERIFICATION.md` - Verified Phase 11 shared wording, NOTICE separation, release public-sample gate, and validator evidence.
- `.planning/phases/11-ferris-source-and-route-contract/11-UAT.md` - Phase 11 source/route/public-sample validation acceptance.
- `.planning/phases/12-ferris-canonical-pack/12-CONTEXT.md` - Ferris pack layout, planning fields, prompt fields, QA failures, edit gates, output path, and Phase 14 deferral.
- `.planning/phases/12-ferris-canonical-pack/12-VERIFICATION.md` - Verified seven-file Ferris pack, planning fields, prompt template, QA categories, and edit gates.
- `.planning/phases/12-ferris-canonical-pack/12-UAT.md` - Ferris visual smoke review and public rendered sample boundary.
- `.planning/phases/13-skill-controller-integration/13-CONTEXT.md` - Locked Ferris route selection, seven-file required references, mixed-IP behavior, output paths, and Phase 14/15 split.
- `.planning/phases/13-skill-controller-integration/13-01-SUMMARY.md` - Phase 13 implementation summary, exact modified files, scope fence, and known validator/test failures.
- `.planning/phases/13-skill-controller-integration/13-VERIFICATION.md` - Verified Phase 13 controller behavior and deferred validator/test failures.
- `.planning/phases/13-skill-controller-integration/13-UAT.md` - Text-level runtime simulation for explicit Ferris aliases, omitted-IP default, mixed four-IP requests, and full-pack loading.

### Public and Release Surfaces

- `README.md` - Current public route descriptions, quick examples, workflow, directory map, and maintainer validation section.
- `examples/prompts.md` - Current copyable prompt inventory, route smoke fixtures, Ferris placeholder route marker, mixed-IP prompts, and maintainer smoke prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml` - Current metadata still names only Xiaohei/Littlebox/Tom and must be updated to include Ferris.
- `NOTICE.md` - Current Ferris source attribution and Rust trademark boundary wording.
- `RELEASE_CHECKLIST.md` - Existing automated gates, route smokes, Tom rights gate, Ferris source/trademark/sample gate, public docs/path markers, and outdated Phase 5 fences.
- `ian-xiaohei-illustrations/references/routing.md` - Route metadata, Ferris aliases, full seven-file required references, output path, escaped token, mixed route grouping, and shared route-status phrase.

### Ferris Canonical Pack

- `ian-xiaohei-illustrations/references/ips/ferris/index.md` - Ferris route contract, full pack map, output path, source/trademark authority, failure categories, and Phase 14 scope boundary.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Ferris source/trademark authority, source-reviewed status, rustacean.net/Karen Rustad Tolva context, Rust trademark boundary, public sample policy, and review owner.
- `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` - Ferris style and visual vetoes for public docs language.
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` - Ferris identity, action responsibility, and route boundary.
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` - Rust-themed low-tech object/action vocabulary for copyable examples.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` - Ferris planning fields, generation prompt fields, source/trademark note, output reminder, and edit gates.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` - Ferris pass criteria, failure categories, repair moves, source/trademark checks, and delivery judgment.

### Existing Route Analogs

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` - Default-route pack and output behavior.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - Explicit active route pack and output behavior.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Route-status-aware explicit route pack analog.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Protected route boundary analog for release checklist structure.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` - Markdown/YAML conventions, fenced prompt examples, repository-relative paths, and reference-file style.
- `.planning/codebase/STRUCTURE.md` - Public docs, examples, metadata, NOTICE, release checklist, installable skill boundary, and where public usage examples belong.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `README.md`: already includes Ferris route status, aliases, source record, raw/escaped output tokens, and public-sample gate, but still lacks full Ferris quick prompts, full canonical pack path, workflow parity, and current maintainer validation wording.
- `examples/prompts.md`: already includes Ferris route marker and four-IP planning prompt, but it explicitly says Phase 14 still owns copyable Ferris prompts and has a later mixed generation prompt that still covers only Xiaohei/Littlebox/Tom.
- `ian-xiaohei-illustrations/agents/openai.yaml`: compact metadata pattern is easy to update, and currently lacks Ferris.
- `NOTICE.md`: already contains the correct Ferris section and can receive a consistency pass without expanding into the full source record.
- `RELEASE_CHECKLIST.md`: already has Ferris source/trademark/public sample sections, but it lacks the Phase 14-required prompt leakage scan, generated sample policy, full public docs consistency gate, and final validator/test evidence wording.
- `ian-xiaohei-illustrations/references/routing.md`: already has the full Phase 13 Ferris row, aliases, seven-file references, output path, escaped token, and shared phrase.

### Established Patterns

- Public docs are Chinese-first with English/code tokens preserved for route IDs, file paths, prompt fields, and statuses.
- README quick examples use copyable fenced `text` prompts.
- `examples/prompts.md` doubles as human prompt inventory and route smoke fixture source.
- Release checklist sections use checkbox lists with reviewer/date/status record fields.
- NOTICE entries stay short and point to route-local authority files for detailed boundaries.
- Xiaohei remains the only omitted-IP default; all new route docs must preserve Ferris as explicit `default=false`.
- Public rendered samples for trademark-sensitive or rights-sensitive routes stay gated by release checklist review.

### Integration Points

- README and examples must align with `SKILL.md` and `references/routing.md` route behavior from Phase 13.
- Public Ferris wording must align with `NOTICE.md` and `references/ips/ferris/source.md` source/trademark boundary.
- Release checklist must align with Phase 12 Ferris QA categories and Phase 13 full-pack loading.
- Agent metadata must be updated for discovery while preserving skill-level implicit invocation semantics.
- Validator commands stay in docs/release checklist, while validator implementation and tests stay untouched until Phase 15.

</code_context>

<specifics>
## Specific Ideas

- Canonical public route phrase remains: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- Ferris source/trademark authority remains: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- Ferris route-local reference directory for user docs: `ian-xiaohei-illustrations/references/ips/ferris/`.
- Ferris output path tokens remain: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`.
- Ferris planning fields for docs/prompts: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note.
- Ferris failure categories for release checklist prompt leakage scan: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- Ferris examples should use Rust-themed low-tech metaphors such as ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, and review gates.

</specifics>

<deferred>
## Deferred Ideas

- Phase 15 owns all edits to `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- Phase 15 owns updating the current red validator baseline from Ferris source-only route expectations to the full seven-file Ferris route pack.
- Phase 15 owns docs marker validation, metadata validation, NOTICE validation, release checklist validation, raw/escaped path validation, Ferris smoke prompt validation, route leakage checks, public asset gates, and Node parser tests.
- v2 owns a reusable mascot manifest, source/trademark manifest, asset manifest, visual regression, release packaging script, route selector, and full English localization.

</deferred>

---

*Phase: 14-Docs, Examples, and Release Surface*
*Context gathered: 2026-06-13T18:06:45+08:00*
