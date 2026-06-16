# Phase 39: Go Gopher Canonical Pack - Context

**Gathered:** 2026-06-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 39 delivers the Go Gopher route-local canonical pack. The phase creates operational references under `ian-xiaohei-illustrations/references/ips/gopher/` so users can plan, prompt, edit, and QA Go Gopher article illustrations while preserving root `gopher.png` identity.

In scope:

- Create `ian-xiaohei-illustrations/references/ips/gopher/index.md`.
- Create `style-dna.md`, `gopher-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` in the Go Gopher route directory.
- Preserve the existing `source.md` as the source/license and local visual authority record.
- Update existing `source.md` only if pack navigation links are needed.
- Keep Phase 39 route-local and operational. Controller wiring, broad `SKILL.md` integration, public docs, metadata, NOTICE, release checklist, validator expansion, Node tests, public generated samples, and release evidence belong to later phases.

Out of scope:

- Changing Xiaohei default behavior or other route behavior.
- Moving, replacing, or tracking root `gopher.png`.
- Using the Go logo as route identity.
- Adding official Go project endorsement, approval, sponsorship, or affiliation claims.
- Publishing rendered Go Gopher samples before release review.

</domain>

<decisions>
## Implementation Decisions

### Pack Shape

- **D-01:** The Go Gopher pack uses the existing route-local operational pattern from Ferris, Seal, and OpenClaw: `index.md`, `style-dna.md`, `gopher-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`, plus existing `source.md`.
- **D-02:** `index.md` is the pack navigation and coherence file. It lists route id, route status, output path, source authority, local visual authority, reference responsibilities, shared failure categories, operational coherence rules, and phase boundary.
- **D-03:** The six operational files repeat the same route id, route status, output path, source authority, local `gopher.png` visual authority, public sample review boundary, shared route block, delivery path note, and route isolation gate.
- **D-04:** `source.md` remains the source/license authority. Phase 39 may add navigation links to `source.md` if needed, while preserving Phase 38 source facts and visual markers.
- **D-05:** Accepted Go Gopher outputs save under `assets/<article-slug>-gopher/` with ordered English slug filenames such as `01-topic-name.png`.

### Identity Contract

- **D-06:** Go Gopher is a friendly source-reviewed article-illustration mascot route based on root `gopher.png`.
- **D-07:** The identity marker set is locked: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- **D-08:** `gopher-ip.md` owns Go Gopher character identity, recognition rules, cognitive-action responsibility, route boundary, and failure modes.
- **D-09:** Go Gopher must perform the central cognitive action in every Go Gopher-route illustration. The image should lose its article meaning when Go Gopher is removed.
- **D-10:** Go Gopher stays friendly, compact, simple, and standing-oriented while adapting to sparse article metaphors.
- **D-11:** Realistic animal rendering, generic blue mascot rendering, Go logo substitution, and official endorsement cues are identity failures.

### Style DNA

- **D-12:** Go Gopher style preserves the existing sparse 16:9 article illustration language: white or very light background, hand-drawn black outlines, generous whitespace, one core idea, and limited accent colors.
- **D-13:** Accent colors center on Go Gopher's blue body and beige muzzle/paws, with restrained red/orange/blue emphasis only when it clarifies the article action.
- **D-14:** Visible labels are sparse, short, readable, and copied exactly in the user's requested language.
- **D-15:** The route rejects dense PPT-like diagrams, formal UI screenshots, code screenshots, poster layouts, top-left title artifacts, clean digital labels, and copied compositions.

### Composition Patterns

- **D-16:** Go Gopher composition families follow the existing route taxonomy: Workflow, System Local View, Before/After, Character State, Concept Metaphor, Method Layers, Map Route, and Mini Comic.
- **D-17:** Each image uses one composition family, one core idea, one physical article metaphor, and one active Go Gopher action.
- **D-18:** Supporting objects stay product-neutral and article-explanatory: maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, stepping stones, signposts, levers, and small hand-built machines.
- **D-19:** Go Gopher action verbs should be physical and readable, such as inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, and route.
- **D-20:** Go-themed props may appear only as article metaphors when they preserve the Go Gopher character route and avoid Go logo identity or official endorsement cues.

### Prompt and Planning Contract

- **D-21:** `prompt-template.md` owns Go Gopher planning fields, one-image English generation prompt, edit prompts, source/license note, local visual authority note, output reminder, and failure block.
- **D-22:** Planning fields are: Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, and Source/license note.
- **D-23:** Image-generation prompts are English. Visible labels are copied exactly in the user's requested language and remain untranslated inside the prompt.
- **D-24:** Go Gopher planning prose may follow the user's language in runtime use, while pack file content remains English by repository policy.
- **D-25:** The one-image prompt must explicitly name root `gopher.png` as local visual authority and repeat the locked visual marker set.

### Edit Prompts

- **D-26:** Edit prompts cover Stronger Go Gopher Participation, `gopher.png` Identity Repair, Title Removal, Text Reduction, Route Leakage Repair, and Unaffected-Content Preservation.
- **D-27:** Stronger participation edits preserve successful composition, labels, style, aspect ratio, and unaffected objects while making Go Gopher perform the central cognitive action.
- **D-28:** Identity repair restores the locked `gopher.png` markers and removes generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, and missing white sticker-like border.
- **D-29:** Title removal edits remove only title text, title cards, top-left headings, or underlines while preserving the rest of the image.
- **D-30:** Text reduction edits keep only sparse short labels copied exactly in the user's requested language and preserve successful action, composition, route identity, and aspect ratio.
- **D-31:** Route leakage repair removes Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go logo identity, official Go endorsement cues, and cross-route vocabulary while preserving successful Go Gopher content.
- **D-32:** Unaffected-content preservation edits name the exact failure being repaired and preserve all successful content outside that failure.

### QA Contract

- **D-33:** `qa-checklist.md` is the Go Gopher route-local QA authority for generated outputs, prompt repairs, edit repairs, delivery judgment, and route leakage repair.
- **D-34:** QA pass criteria include 16:9 article illustration, one core idea, sparse hand-drawn style, white or very light background, locked Go Gopher identity markers, active cognitive participation, original article metaphor, sparse labels in the user's requested language, source/license boundary, route isolation, and `assets/<article-slug>-gopher/` delivery path.
- **D-35:** QA rejects generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, and copied composition.
- **D-36:** QA rejects public sample claims that skip release review.

### Source and License Boundary

- **D-37:** Every operational file keeps the source/license note: Go Gopher is `source-reviewed`; source authority is `source.md`; source context includes the Go blog, Renee French attribution, Creative Commons Attribution 4.0, root `gopher.png` local visual authority, public sample policy, and route status.
- **D-38:** Go logo identity stays outside positive route identity and generated scene framing.
- **D-39:** Official Go project affiliation, approval, sponsorship, and endorsement claims stay outside route identity, prompts, QA, and delivery text.

### Agent Discretion

- The planner may choose exact Markdown section ordering inside each pack file if all locked markers, fields, and failure categories remain grep-friendly.
- The planner may choose whether `source.md` navigation links are added now or left untouched if `index.md` provides sufficient navigation.
- The planner may add deterministic marker phrases that help Phase 42 validation, provided they remain route-local and English-default.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.8 Go Gopher milestone goal, constraints, source-reviewed route intent, local `gopher.png` authority, and out-of-scope boundaries.
- `.planning/REQUIREMENTS.md` - Phase 39 requirements `PACK-01`, `PACK-02`, `PACK-03`, `PACK-04`, and `PACK-05`.
- `.planning/ROADMAP.md` - Phase 39 goal, dependency on Phase 38, success criteria, and boundaries for Phases 40-42.
- `.planning/STATE.md` - current v1.8 position, Phase 38 completion notes, default-route continuity, and accumulated route-isolation decisions.

### Phase 38 Evidence

- `.planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md` - locked Go Gopher route/source decisions and deferred Phase 39 pack scope.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-RESEARCH.md` - source facts, route metadata, visual marker set, validator/test adjacency, and recommended plan shape.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md` - final Phase 38 implementation evidence, commit hashes, known validator/test boundary, and next-phase readiness.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-VERIFICATION.md` - Phase 38 verification evidence for route/source contract.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-UAT.md` - Phase 38 UAT evidence.

### Go Gopher Route Sources

- `ian-xiaohei-illustrations/references/ips/gopher/source.md` - Go Gopher source record, route status, output path, Go blog source, Renee French attribution, Creative Commons Attribution 4.0, root `gopher.png` visual authority, sample policy, and review owner.
- `gopher.png` - local visual authority for Go Gopher identity markers.
- `ian-xiaohei-illustrations/references/routing.md` - current route row, aliases, source authority note, output path, route status, mixed-IP output grouping, and current required reference list.

### Existing Pack Analogs

- `ian-xiaohei-illustrations/references/ips/openclaw/index.md` - closest recent source-reviewed route-local pack navigation and operational coherence pattern.
- `ian-xiaohei-illustrations/references/ips/openclaw/style-dna.md` - sparse source-reviewed mascot style pattern with identity markers and route gates.
- `ian-xiaohei-illustrations/references/ips/openclaw/openclaw-ip.md` - identity, cognitive-action, and failure-mode pattern for a visual-authority route.
- `ian-xiaohei-illustrations/references/ips/openclaw/composition-patterns.md` - composition family, action pool, supporting object, and anti-repeat pattern.
- `ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md` - planning fields, one-image prompt, edit prompts, route leakage repair, and unaffected-content preservation pattern.
- `ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md` - QA gates and iteration moves for a source-reviewed route with fixed identity markers.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` - source-reviewed mascot pack precedent with source/trademark boundary.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` - English prompt and user-language label precedent for a mascot route.
- `ian-xiaohei-illustrations/references/ips/seal/index.md` - uploaded/local visual authority-style operational coherence pattern.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` - identity repair, route leakage repair, and delivery judgment pattern.

### Runtime and Validation Adjacency

- `ian-xiaohei-illustrations/SKILL.md` - later Phase 40 integration target; read for current reference-loading, planning, generation, edit, QA, and delivery patterns.
- `scripts/validate-skill-package.mjs` - later Phase 42 validator target and language allowlist context.
- `scripts/validate-skill-package.test.mjs` - later Phase 42 regression target for route parsing, output path, leakage, source/license, and public sample gates.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` - Markdown style, repository-relative paths, English-default content, and reference file conventions.
- `.planning/codebase/STRUCTURE.md` - installable package layout, route-local reference placement, public docs placement, and generated asset path conventions.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/ips/gopher/source.md`: already exists and carries source/license authority plus root `gopher.png` visual marker list.
- `ian-xiaohei-illustrations/references/ips/openclaw/`: strongest recent operational pack template for a source-reviewed route with fixed visual markers and public sample gates.
- `ian-xiaohei-illustrations/references/ips/ferris/`: source-reviewed mascot precedent with source/trademark boundary, action participation gates, and English prompt templates.
- `ian-xiaohei-illustrations/references/ips/seal/`: visual-authority mascot precedent with fixed marker preservation, identity repair prompts, route leakage repair, and unaffected-content preservation.
- `ian-xiaohei-illustrations/references/routing.md`: current Go Gopher route points only to `references/ips/gopher/source.md`; Phase 40 or Phase 42 can expand `required_references` after the pack exists.
- `gopher.png`: untracked 500 x 500 PNG at repo root; Phase 39 references it as local visual authority and avoids relocation.

### Established Patterns

- Each explicit visual IP route keeps route-local references under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Each pack repeats stable route markers across operational files so later validators can detect drift.
- Prompt templates use English generation prompts while visible labels are copied exactly in the user's requested language.
- QA and edit prompts preserve successful content while repairing named failures.
- Public generated samples for source-reviewed or visual-authority routes require release review.
- Xiaohei remains the only omitted-IP default.

### Integration Points

- Phase 39 creates files consumed by Phase 40 controller/reference-loading work.
- Phase 39 gives Phase 41 public docs and examples the planning fields, output path, source/license note, edit gates, and QA language to expose.
- Phase 39 gives Phase 42 validator/test hardening deterministic marker strings, pack file names, route-local failure categories, and source/license boundaries.

</code_context>

<specifics>
## Specific Ideas

- Shared Go Gopher failure categories should include: generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, and copied composition.
- Go Gopher state examples can include focused, inspecting, pointing, carrying, sorting, bridging, repairing, guiding, stamping, marking, tuning, shielding, weighing, connecting, untangling, mapping, comparing, lifting, assembling, and routing.
- Go Gopher should feel like a friendly source-reviewed article-illustration mascot rather than a programming-language poster, brand ad, logo diagram, or realistic animal.
- The pack should keep all source/license wording anchored to `source.md` instead of duplicating external-source claims loosely across unrelated docs.

</specifics>

<deferred>
## Deferred Ideas

- Phase 40: expand runtime route selection, reference loading, mixed-IP grouping, generation/edit dispatch, QA routing, and delivery reporting in `SKILL.md`.
- Phase 41: update README variants, examples, NOTICE, RELEASE_CHECKLIST, broad skill docs, and `agents/openai.yaml`.
- Phase 42: extend validator and Node tests for Go Gopher pack references, route metadata, Chinese alias allowlist, source/license markers, raw and escaped output paths, public sample gates, route leakage, and release evidence.
- Future: canonical source image storage, source-image hashing, visual regression, route manifests, comparison sheets, and selected-route install packaging.

</deferred>

---

*Phase: 39-Go Gopher Canonical Pack*
*Context gathered: 2026-06-17*
