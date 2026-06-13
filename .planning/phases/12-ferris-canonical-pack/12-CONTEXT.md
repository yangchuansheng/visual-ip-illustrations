# Phase 12: Ferris Canonical Pack - Context

**Gathered:** 2026-06-13T15:38:47+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 12 delivers the route-isolated Ferris canonical reference pack under `ian-xiaohei-illustrations/references/ips/ferris/`. The pack defines Ferris identity, style DNA, Rust-themed article action language, composition families, planning fields, one-image prompt template, edit prompts, QA gates, output-path reminders, and source/trademark notes.

The phase is bounded to route-local Ferris reference files:

- Ferris pack navigation and source/trademark note wiring.
- Ferris visual identity and off-model failure rules.
- Ferris article-illustration style rules.
- Ferris composition families and cognitive-action vocabulary.
- Ferris planning, generation, and edit prompt templates.
- Ferris QA and repair taxonomy.
- Cross-file coherence inside the Ferris pack.

Skill controller route selection, public README/examples/metadata updates, release checklist expansion, and validator hardening stay with Phases 13, 14, and 15.

</domain>

<decisions>
## Implementation Decisions

### Ferris Pack File Layout

- **D-01:** Create the canonical Ferris pack under `ian-xiaohei-illustrations/references/ips/ferris/`.
- **D-02:** Keep `source.md` as the existing Phase 11 authority and add six operational pack files beside it: `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-03:** Use the Tom pack as the primary structural precedent because Tom combines route-local identity, style, composition, prompt, QA, route status, and rights/source boundary notes in one pack.
- **D-04:** The final Phase 12 Ferris layout is:
  - `ian-xiaohei-illustrations/references/ips/ferris/index.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/source.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`
- **D-05:** Do not add a separate Ferris `language-and-labels.md` in Phase 12. Put Ferris label rules in `prompt-template.md` and `qa-checklist.md`, following the Tom pack shape.

### Source Record Referencing

- **D-06:** New Ferris pack files reference `source.md` as the source/trademark authority instead of repeating the full Phase 11 source record.
- **D-07:** `index.md` should list `source.md` as the authority for source attribution, CC0/public-domain context, Rust trademark boundary, public sample policy, and route status changes.
- **D-08:** Operational files should include a compact source/trademark note: Ferris route status is `source-reviewed`; source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
- **D-09:** `prompt-template.md` and `qa-checklist.md` must carry a source/trademark note field so planning, generation, edit, and delivery surfaces preserve the boundary without duplicating all source-record text.
- **D-10:** Public sample approval policy stays referenced to `source.md` and `RELEASE_CHECKLIST.md`; Phase 12 pack files should avoid publishing generated Ferris samples or adding public asset claims.

### Ferris Identity Constraints

- **D-11:** Define Ferris as the selected route's crab mascot character, adapted for sparse article illustrations.
- **D-12:** Preserve Ferris recognition through a compact orange/rust-red crab body, broad crab shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and an active pose tied to the article idea.
- **D-13:** Ferris identity should be simplified enough for article explanation while preserving route-specific crab-mascot recognition.
- **D-14:** Reject generic crab drift. A route-neutral crab, seafood icon, beach crab, random red animal, or decorative mascot fails the Ferris route.
- **D-15:** Reject source-asset tracing. Ferris images must be fresh article metaphors and should not trace, recreate, pose-match, or imitate the exact rustacean.net source assets, official logo arrangements, or public mascot asset sheets.
- **D-16:** Preserve route isolation. Ferris pack files must not blend Xiaohei's black creature identity, Littlebox's closed paper-box identity, or Tom's protected-character identity into Ferris rules.

### Rust-Themed Article Action Language

- **D-17:** Ferris should perform the central cognitive action in every Ferris-route illustration. Removing Ferris should break the metaphor.
- **D-18:** Use Rust-themed systems metaphors as article action language: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, and review gates.
- **D-19:** Treat Rust-themed objects as explanatory metaphors, not official project branding. The pack should avoid Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, and endorsement language.
- **D-20:** Ferris action verbs should stay physical and readable: clamp, sort, guard, borrow, return, compile, type-check, stamp, carry, bridge, untangle, lock, inspect, reroute, balance, and release.
- **D-21:** The Rust-themed vocabulary should support generic article concepts such as trust, proof, safety, review, dependency, handoff, hidden cost, failure mode, decision gate, and system resilience.
- **D-22:** Composition examples should use low-tech props plus Rust-flavored labels sparingly. The pack should avoid dense language tutorials, code screenshots, official Rust diagrams, and IDE/UI scenes.

### Prompt Fields and Output Contract

- **D-23:** Ferris shot-list planning must include these fields: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-24:** Ferris planning states should include focused, guarding, sorting, type-checking, borrowing, compiling, inspecting, untangling, bracing, stamping, and releasing.
- **D-25:** Ferris planning actions should use the physical action language from D-20 and map each action to the article's cognitive anchor.
- **D-26:** Ferris output path in planning and delivery is `assets/<article-slug>-ferris/`, with ordered English slug filenames such as `01-topic-name.png`.
- **D-27:** Ferris generation prompts stay English for model consistency, while visible labels are quoted exactly in the user's language.
- **D-28:** The single-image prompt template should include fields for route status note, source/trademark note, scene, visual language, recurring IP, structure type, Ferris state, Ferris action, supporting objects, composition, Rust-themed article metaphor, visible labels, save reminder, and constraints.
- **D-29:** The prompt must explicitly forbid Rust logos, official-affiliation cues, endorsement wording, source-asset tracing, generic-crab drift, source asset pose copying, formal diagrams, dense text, UI screenshots, top-left titles, and route leakage.

### QA and Edit Prompt Taxonomy

- **D-30:** Ferris QA pass criteria must cover 16:9 article format, one core idea, clean sparse hand-drawn style, Ferris recognizability, active Ferris cognitive action, original article metaphor, source/trademark note, sparse labels, route isolation, and `assets/<article-slug>-ferris/` delivery.
- **D-31:** Ferris QA failure categories must include generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-32:** Add failure-specific repair guidance for stronger Ferris participation, off-model identity repair, trademark-boundary repair, title removal, text reduction, and unaffected-content preservation.
- **D-33:** Include a source-asset tracing repair move that keeps the core idea while inventing a new low-tech article metaphor, changing Ferris pose/action, and removing asset-sheet or source-pose resemblance.
- **D-34:** The trademark-boundary repair edit prompt must remove or rewrite Rust-logo-forward visuals, official/endorsed/affiliated cues, and broad release language while preserving successful Ferris identity, composition, labels, aspect ratio, and article metaphor.
- **D-35:** The unaffected-content preservation edit prompt should mirror Tom's pattern: edit only the named failure and preserve successful Ferris action, identity cues, composition, labels, supporting objects, paths, line style, color accents, aspect ratio, and image quality.

### Cross-File Coherence

- **D-36:** Every Ferris operational file should repeat the same route status, output path, source/trademark authority, and core failure category names.
- **D-37:** Shared Ferris failure category names should be stable across `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-38:** `index.md` should describe the purpose of each Ferris file and list the shared failure categories for later validator hardening.
- **D-39:** Phase 12 should update only Ferris pack files under `ian-xiaohei-illustrations/references/ips/ferris/`. Updates to `references/routing.md`, `SKILL.md`, public docs, metadata, release checklist, and validator files belong to downstream phases unless a planner identifies a broken link created by Phase 12 itself.

### Agent Discretion

- Auto mode selected all meaningful gray areas and chose the recommended pack-shape, source-reference, route-isolation, trademark-safe, Tom-analog decisions. The planner may tune exact heading names and examples inside the locked file layout, provided the decisions above remain true.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.2 Ferris milestone context, source/trademark constraints, current route status, and active requirements.
- `.planning/REQUIREMENTS.md` - Phase 12 requirement IDs FIP-01, FIP-02, FIP-03, FIP-04, and FIP-05.
- `.planning/ROADMAP.md` - Phase 12 goal, success criteria, dependency on Phase 11, and planned work slices.
- `.planning/STATE.md` - Current milestone state and carried-forward decisions from Tom Phases 6-10 and Ferris Phase 11.

### Prior Phase 11 Evidence

- `.planning/phases/11-ferris-source-and-route-contract/11-CONTEXT.md` - Locked Phase 11 Ferris source, route metadata, NOTICE, public wording, sample gate, and validator decisions.
- `.planning/phases/11-ferris-source-and-route-contract/11-RESEARCH.md` - Official source/trademark research summary and implementation patterns for Phase 11 surfaces.
- `.planning/phases/11-ferris-source-and-route-contract/11-VERIFICATION.md` - Verified Phase 11 truths, validator count, check IDs, and source/trademark gate evidence.
- `.planning/phases/11-ferris-source-and-route-contract/11-UAT.md` - Phase 11 user acceptance evidence and validation commands.

### Ferris Source and Route Contract

- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Ferris source authority, source-reviewed status, CC0/public-domain context, Rust trademark boundary, sample policy, and review owner.
- `ian-xiaohei-illustrations/references/routing.md` - Current Ferris route row, aliases, source-reviewed status, output suffix, output path, required reference baseline, and mixed-IP route grouping.
- `NOTICE.md` - Ferris attribution and Rust trademark boundary public wording.
- `RELEASE_CHECKLIST.md` - Ferris public sample gate and release-review record shape.

### Existing Canonical Pack Analogs

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` - Default-route canonical pack index pattern.
- `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` - Sparse white-background article style and visual vetoes.
- `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` - Character-as-action-subject rule and removable-character failure test.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` - Eight structure families, fresh metaphor rule, action pool, and anti-repeat pattern.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` - One-image prompt shape, explicit constraints, and title/participation edit prompts.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` - Manual pass/fail/repair/delivery checklist pattern.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - Selectable-route pack index plus source attribution pattern.
- `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` - Route-specific style DNA with palette, background, texture, labels, and visual vetoes.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` - Strict identity markers, deformation limits, failure modes, and recognition rule.
- `ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md` - Route-specific composition families and metaphor invention.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` - Language and visible-label guidance if the planner needs a label precedent.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` - Planning output, English prompt, and edit prompt pattern for selectable route packs.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` - Route-specific pass/fail/iteration/delivery pattern.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Closest precedent for route status, source/rights authority, output path, references list, failure category list, and scope boundary.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Boundary-authority analog for source/trademark note wiring.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` - Protected/status-aware style DNA and stable gates.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` - Identity, active cognitive-action responsibility, solo route boundary, and stable gates.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - Eight structure families, action pool, protected-route gates, route leakage gate, and anti-repeat rule.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Planning fields, route-status note, one-image prompt template, edit prompts, and output reminder.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - Pass criteria, protected-route checks, failure signals, iteration moves, and delivery judgment.

### Codebase Maps and Validation Context

- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, lowercase kebab-case reference naming, prompt template conventions, and output path examples.
- `.planning/codebase/STRUCTURE.md` - Installable skill package shape, reference placement patterns, and where new reference modules belong.
- `.planning/codebase/TESTING.md` - Historical manual QA map; use live validator files for current Phase 11+ validation state.
- `scripts/validate-skill-package.mjs` - Current Phase 11 Ferris route/source/docs/release checks and future Phase 15 validator integration point.
- `scripts/validate-skill-package.test.mjs` - Current Ferris fixture tests and future Phase 15 regression test integration point.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/ips/tom/index.md`: strongest pack index analog for route status, source authority pointer, output path, references list, shared failure categories, and scope boundary.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`: strongest prompt analog because it carries route status, source/rights authority, planning fields, generation prompt, edit prompts, and output reminder.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`: strongest QA analog because it combines pass criteria, route-sensitive checks, failure signals, iteration moves, and delivery judgment.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md`: useful identity analog for strict recognition markers and off-model failure modes.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md`: useful baseline for the eight article-illustration structure families and fresh-metaphor generation.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md`: Phase 11 authority for Ferris source, status, trademark boundary, sample policy, and review owner.

### Established Patterns

- Route-specific operational references live under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Xiaohei remains the only omitted-IP default. Ferris remains explicit with `default=false`, `output_suffix=ferris`, and `status=source-reviewed`.
- Route packs use compact index files that list references and output path.
- Prompt templates use English for image-generation prompts and quote visible labels exactly in the user's language.
- Quality gates center the selected IP as the active operator of one cognitive action.
- Route-sensitive packs repeat status and authority pointers across operational files so downstream controller, prompt, edit, QA, and delivery contexts stay coherent.
- Public generated samples for rights-sensitive or trademark-sensitive routes remain gated by release checklist review.

### Integration Points

- Phase 12 creates files that Phase 13 will add to `ian-xiaohei-illustrations/references/routing.md` `required_references` and load from `ian-xiaohei-illustrations/SKILL.md`.
- Phase 14 will cite the Ferris pack from `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.
- Phase 15 will extend `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` to check Ferris pack file existence, prompt placeholders, QA markers, source/trademark markers, docs markers, and route leakage.

### Downstream File Suggestions

- Phase 12 likely modifies only:
  - `ian-xiaohei-illustrations/references/ips/ferris/index.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`
- Phase 12 should preserve:
  - `ian-xiaohei-illustrations/references/ips/ferris/source.md`
  - `ian-xiaohei-illustrations/references/routing.md`
  - `ian-xiaohei-illustrations/SKILL.md`
  - `README.md`
  - `examples/prompts.md`
  - `ian-xiaohei-illustrations/agents/openai.yaml`
  - `RELEASE_CHECKLIST.md`
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`

</code_context>

<specifics>
## Specific Ideas

- Exact Ferris operational pack files: `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`, beside existing `source.md`.
- Ferris route status remains `source-reviewed` throughout Phase 12.
- Ferris source authority remains `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- Ferris output path remains `assets/<article-slug>-ferris/`.
- Ferris shared failure categories: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- Ferris action language should be Rust-themed, physical, and article-explanatory: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, and review gates.
- Ferris prompt output includes `Source/trademark note` in addition to output path.

</specifics>

<deferred>
## Deferred Ideas

- Phase 13 owns skill controller integration, route selection behavior, `required_references` expansion in `references/routing.md`, four-IP mixed route grouping, runtime output handling, and `SKILL.md` reference loading.
- Phase 14 owns public README guidance, copyable Ferris prompts, Ferris smoke prompts, four-IP mixed prompts, agent metadata, NOTICE consistency pass, and release checklist expansion.
- Phase 15 owns validator and Node test hardening for Ferris pack files, prompt placeholders, QA markers, source/trademark markers, docs markers, route leakage, public asset gates, and four-route parser behavior.
- v2 owns reusable machine-readable mascot manifests, broader open-source mascot import patterns, asset manifests, visual regression, release packaging scripts, route selectors, and English localization.

</deferred>

---

*Phase: 12-Ferris Canonical Pack*
*Context gathered: 2026-06-13T15:38:47+08:00*
