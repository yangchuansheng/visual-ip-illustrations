# Phase 40: Go Gopher Skill Controller Integration - Context

**Gathered:** 2026-06-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 40 delivers runtime controller integration for the explicit Go Gopher route. Users can invoke Go Gopher through `SKILL.md` route selection, progressive reference loading, shot planning, generation dispatch, edit repair routing, QA routing, mixed-IP grouping, save-path behavior, and delivery reporting while existing Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw routes remain stable.

Phase 40 implementation scope centers on:

- `ian-xiaohei-illustrations/SKILL.md`
- `ian-xiaohei-illustrations/references/routing.md` when route-reference truth needs to point at the Phase 39 Go Gopher pack

Later phase ownership:

- Phase 41 owns public README variants, prompt examples, NOTICE, release checklist, and broad discovery copy such as `agents/openai.yaml`.
- Phase 42 owns validator matrix expansion, Node regression expansion, public sample gates, route leakage fixtures, and final release evidence.

</domain>

<decisions>
## Implementation Decisions

### Controller Route Activation

- **D-01:** Go Gopher must be added to the `SKILL.md` route overview as an explicit `source-reviewed` route with route id `gopher`, display name `Go Gopher`, `default=false`, output suffix `gopher`, source pointer `references/ips/gopher/source.md`, local visual authority root `gopher.png`, and output path `assets/<article-slug>-gopher/`.
- **D-02:** Go Gopher selection must follow the Phase 38 routing contract: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, and Go Gopher-qualified route phrases select `gopher`; generic route phrases remain outside Go Gopher selection.
- **D-03:** Xiaohei stays the omitted visual-IP default. Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher stay explicit route choices with `default=false`.
- **D-04:** `SKILL.md` frontmatter can mention Go Gopher in the explicit route list because the frontmatter is the skill entrypoint trigger surface. Broad agent discovery copy in `agents/openai.yaml` stays Phase 41 owned.

### Progressive Loading Truth

- **D-05:** Phase 40 should expand the Go Gopher `required_references` in `references/routing.md` from source-only to the full Phase 39 route-local pack: `index.md`, `source.md`, `style-dna.md`, `gopher-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-06:** `SKILL.md` must list the same seven Go Gopher references in the Reference Loading section and state their responsibilities using the Phase 39 pack language.
- **D-07:** Runtime behavior must load only `references/ips/gopher/` for the Go Gopher route and only each selected route's own references for mixed-IP groups.
- **D-08:** Legacy Xiaohei root reference paths remain compatibility entry points while current Xiaohei behavior keeps reading the canonical `references/ips/xiaohei/` pack.

### Planning Contract

- **D-09:** Go Gopher shot-list entries must use `references/ips/gopher/prompt-template.md` and include Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, and Source/license note.
- **D-10:** Go Gopher planning prose may follow the user's language, while image-generation prompts stay English and visible labels are copied exactly in the user's requested language.
- **D-11:** Go Gopher planning must preserve the action-subject rule from Phase 39: Go Gopher performs the central cognitive article action, and the metaphor loses meaning when Go Gopher is removed.

### Generation, Edit, and QA Dispatch

- **D-12:** Go Gopher generation dispatch must use `references/ips/gopher/prompt-template.md` plus `references/ips/gopher/composition-patterns.md`, then check outputs with `references/ips/gopher/qa-checklist.md`.
- **D-13:** Go Gopher generation context must carry `source-reviewed`, `references/ips/gopher/source.md`, root `gopher.png`, Renee French attribution, Creative Commons Attribution 4.0 boundary, local visual identity markers, public sample review boundary, Go logo boundary, endorsement boundary, and output path `assets/<article-slug>-gopher/`.
- **D-14:** Go Gopher prompt markers must include sparse 16:9 article illustration, white or very light background, rough black hand-drawn outlines, generous whitespace, Go Gopher blue body, beige muzzle and paws, restrained action accents, sparse visible labels copied exactly in the user's language, and original article metaphor objects.
- **D-15:** Go Gopher high-risk failures must mirror the Phase 39 QA categories: generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, copied composition, formal diagrams, UI screenshots, IDE scenes, terminal scenes, code screenshots, poster layouts, top-left title artifacts, and clean digital labels.
- **D-16:** Go Gopher repair behavior must use the edit prompts in `references/ips/gopher/prompt-template.md`: Stronger Go Gopher Participation, `gopher.png` Identity Repair, Title Removal, Text Reduction, Route Leakage Repair, and Unaffected-Content Preservation.
- **D-17:** Every Go Gopher repair must preserve successful composition, labels, style, aspect ratio, unaffected objects, route-local QA context, source/license note, root `gopher.png` identity note, and `assets/<article-slug>-gopher/`.

### Mixed-IP Isolation

- **D-18:** Mixed-IP shot lists and generation must include Go Gopher as a separate selected route group alongside Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw.
- **D-19:** Each mixed-IP group must keep its own route id, `required_references`, prompt template, composition rules, QA checklist, edit gates, output suffix, route note, and output directory.
- **D-20:** Go Gopher mixed-IP groups must use `references/ips/gopher/` QA and `assets/<article-slug>-gopher/`, with source-reviewed status, source/license note, root `gopher.png` identity note, public sample review boundary, and route isolation status.

### Save and Delivery Contract

- **D-21:** Active route paths in `SKILL.md` must include `assets/<article-slug>-gopher/`.
- **D-22:** The save-path mapping must include Go Gopher `output_suffix: gopher` -> `assets/<article-slug>-gopher/`.
- **D-23:** Validation marker text in runtime docs must include the escaped Go Gopher marker `assets/&lt;article-slug&gt;-gopher/` where other route escaped markers appear.
- **D-24:** Go Gopher accepted outputs use ordered English slug filenames such as `01-topic-name.png`.
- **D-25:** Mixed-IP delivery must write Go Gopher variants to `assets/<article-slug>-gopher/` with a separate file sequence and purpose notes.
- **D-26:** Go Gopher delivery reports must include selected IP, shared core idea for mixed-IP work, image purposes, saved path, route status `source-reviewed`, source/license note, source pointer, root `gopher.png` identity status, public sample review boundary when relevant, route isolation status, and stability notes.
- **D-27:** The route-leakage delivery guard must include Go Gopher and require `source-reviewed`, `references/ips/gopher/source.md`, route-local QA, original article-metaphor status, `gopher.png` identity status, public sample review boundary, route isolation status, and `assets/<article-slug>-gopher/`.

### Verification Scope

- **D-28:** Phase 40 local proof should use targeted `rg` checks over `SKILL.md` and `references/routing.md`, route-table inspection for default stability, and `git diff --check`.
- **D-29:** Current validator and Node suites are expected to keep failing the seventh-route baseline until Phase 42. Phase 40 should record those failures only as deferred validation ownership when commands are run.
- **D-30:** Public generated Go Gopher samples stay behind release review; Phase 40 creates controller text only and adds no generated sample assets.

### Agent Discretion

- The planner may choose exact `SKILL.md` paragraph placement by following the existing OpenClaw/Seal/Ferris/Tom route-specific pattern.
- The planner may add compact Go Gopher route wording in multiple controller sections when needed for parity, provided the wording stays route-local and English-default.
- The planner may decide whether to run the current failing validator and Node suite as a documented deferred-baseline check, while `rg` and `git diff --check` remain the Phase 40 acceptance proof.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.8 goal, Go Gopher source-reviewed route constraints, local `gopher.png` authority, and phase ownership boundaries.
- `.planning/REQUIREMENTS.md` - Phase 40 requirements `RUN-01`, `RUN-02`, `RUN-03`, and `RUN-04`.
- `.planning/ROADMAP.md` - Phase 40 goal, success criteria, dependency on Phase 39, and Phase 41/42 ownership boundaries.
- `.planning/STATE.md` - accumulated route-isolation decisions, recent v1.8 progress, and default-route continuity.

### Phase 38 Route Contract

- `.planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md` - locked route id, aliases, source-reviewed status, output path, local visual authority, and default-route decisions.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md` - implementation evidence for `routing.md` and `references/ips/gopher/source.md`.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-VERIFICATION.md` - route/source observable truths and known Phase 42 validation ownership.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-UAT.md` - acceptance evidence for route selection, source record, visual authority, and default stability.

### Phase 39 Go Gopher Pack

- `.planning/phases/39-go-gopher-canonical-pack/39-CONTEXT.md` - locked pack shape, identity, style, composition, prompt, edit, QA, source/license, and output decisions.
- `.planning/phases/39-go-gopher-canonical-pack/39-01-SUMMARY.md` - final pack evidence and files created.
- `.planning/phases/39-go-gopher-canonical-pack/39-VERIFICATION.md` - 12/12 verification truths for route-local pack behavior.
- `.planning/phases/39-go-gopher-canonical-pack/39-UAT.md` - acceptance evidence for planning fields, prompt, edit prompts, QA gates, and output behavior.

### Runtime Integration Targets

- `ian-xiaohei-illustrations/SKILL.md` - central runtime controller for route selection, progressive reference loading, planning, generation, QA, repair, save, and delivery behavior.
- `ian-xiaohei-illustrations/references/routing.md` - route selection rules, aliases, default flags, required references, attribution context, route statuses, output paths, mixed-IP grouping, and delivery fields.
- `ian-xiaohei-illustrations/agents/openai.yaml` - broad agent discovery metadata; read for awareness, leave broad copy updates to Phase 41 unless the Phase 40 plan deliberately narrows a one-line runtime discovery change.

### Go Gopher Route References

- `ian-xiaohei-illustrations/references/ips/gopher/index.md` - Go Gopher pack navigation, route status, source/license authority, output path, shared failure categories, operational coherence, and scope boundary.
- `ian-xiaohei-illustrations/references/ips/gopher/source.md` - Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, public sample policy, review owner, and route status.
- `ian-xiaohei-illustrations/references/ips/gopher/style-dna.md` - sparse Go Gopher article-illustration style, visual marker preservation, visual vetoes, public sample boundary, and route isolation.
- `ian-xiaohei-illustrations/references/ips/gopher/gopher-ip.md` - Go Gopher identity, recognition rules, cognitive-action responsibility, route boundary, and failure modes.
- `ian-xiaohei-illustrations/references/ips/gopher/composition-patterns.md` - composition families, article-metaphor invention, Go Gopher action patterns, supporting object pool, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/gopher/prompt-template.md` - planning fields, one-image prompt template, edit prompts, local visual authority note, source/license note, and output reminder.
- `ian-xiaohei-illustrations/references/ips/gopher/qa-checklist.md` - pass/fail gates, Go Gopher identity checks, iteration moves, route leakage repair, public sample boundary, and delivery judgment.
- `gopher.png` - local visual authority for Go Gopher identity markers; leave untracked.

### Existing Controller Analogs

- `.planning/phases/35-openclaw-skill-controller-integration/35-CONTEXT.md` - closest prior controller-integration decision pattern and scope split.
- `.planning/phases/35-openclaw-skill-controller-integration/35-01-SUMMARY.md` - OpenClaw controller integration implementation and verification pattern.
- `ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md` - recent source-reviewed route prompt/edit precedent.
- `ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md` - recent source-reviewed route QA and delivery judgment precedent.

### Codebase Maps

- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture, progressive reference loading, and route-local reference policy.
- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, repository-relative paths, English-default content, and route reference style.
- `.planning/codebase/STACK.md` - Codex skill runtime, host image generation dependency, and absence of application runtime.
- `.planning/codebase/STRUCTURE.md` - installable package layout, controller target locations, route-local reference placement, and generated asset path conventions.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/SKILL.md`: already has route-specific controller blocks for Tom, Ferris, Seal, and OpenClaw across overview, reference loading, selection, planning, generation, QA, repair, save, and delivery.
- `ian-xiaohei-illustrations/references/routing.md`: already contains the Go Gopher selection rules, route row, source metadata, output path, escaped marker, and mixed-IP path entry; the `required_references` row still needs Phase 39 full-pack parity.
- `ian-xiaohei-illustrations/references/ips/gopher/`: Phase 39 created the full Go Gopher pack used by Phase 40 runtime loading.
- `ian-xiaohei-illustrations/references/ips/openclaw/`: closest recent source-reviewed route-controller analog.
- `gopher.png`: root 500 x 500 PNG local visual authority; remains untracked.

### Established Patterns

- `SKILL.md` selects the route first, then loads only the selected route's `required_references`.
- Explicit visual-IP routes use route-local packs under `references/ips/<route>/`.
- Runtime planning fields mirror each route's `prompt-template.md`.
- Generation and repair routing keep source/status/authority notes attached to protected or source-reviewed routes.
- Mixed-IP workflows create separate route groups with separate references, QA, output suffixes, directories, and delivery blocks.
- Public sample review gates stay attached to source-reviewed and visual-authority routes.
- Validator and Node hardening trails implementation by design in the final validation phase.

### Integration Points

- Add Go Gopher to `SKILL.md` frontmatter description, Visual IP Routes, Reference Loading, Select the Visual IP Route, Shot List, Mixed-IP shot lists, Generate One Image at a Time, QA and Iteration, Save and Deliver, Output Contract, and route-leakage delivery guard.
- Expand `references/routing.md` `gopher` row `required_references` from `references/ips/gopher/source.md` to the full seven-file pack so runtime route loading matches Phase 39.
- Keep `agents/openai.yaml`, README variants, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md` for Phase 41 unless planning explicitly records a minimal metadata exception.

</code_context>

<specifics>
## Specific Ideas

- Use OpenClaw's Phase 35 integration as the patch template, substituting Go Gopher source/license and `gopher.png` identity fields.
- Keep Go Gopher controller wording compact but present wherever OpenClaw has explicit route text.
- Preserve the exact route marker set in controller text: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Preserve source/license wording in controller text: Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, public sample review boundary, Go logo boundary, and official endorsement boundary.
- Record validator and Node failures as Phase 42 baseline drift when they are run during Phase 40.

</specifics>

<deferred>
## Deferred Ideas

- Phase 41: update README variants, prompt examples, NOTICE, RELEASE_CHECKLIST, and `agents/openai.yaml` discovery copy for Go Gopher.
- Phase 42: extend `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` for seventh-route parsing, Go Gopher full-pack references, output path markers, source/license markers, public sample gates, leakage fixtures, language allowlist, and release evidence.
- Future: route manifest generation, source-image hashing, source image relocation policy, visual regression checks, and selected-route install packaging.

</deferred>

---

*Phase: 40-Go Gopher Skill Controller Integration*
*Context gathered: 2026-06-16*
