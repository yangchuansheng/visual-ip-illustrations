# Phase 8: Skill Controller Integration - Context

**Gathered:** 2026-06-13T03:23:51+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 8 wires Tom into the skill controller so users can explicitly select Tom, keep Xiaohei as the only omitted-IP default, request separate Xiaohei/Littlebox/Tom variants for the same core idea, and receive Tom-specific planning, generation, QA, edit, rights-note, and output-path behavior.

The shortest safe implementation path is a controller Markdown update in `ian-xiaohei-illustrations/SKILL.md` only. `routing.md` already contains the Tom route row, aliases, required references, `default=false`, output suffix, `gated-authorized` status, mixed route-group rule, and escaped output token. The Tom canonical pack already contains the planning, prompt, composition, QA, edit, rights, and output-path surfaces.

Scope fence: Phase 8 should not expand public README guidance, `examples/prompts.md`, `agents/openai.yaml`, `RELEASE_CHECKLIST.md`, validator checks, Node tests, public rendered Tom assets, or release-status language beyond controller references. Those surfaces belong to Phases 9 and 10.

</domain>

<decisions>
## Implementation Decisions

### Controller File Scope
- **D-01:** Implement Phase 8 through `ian-xiaohei-illustrations/SKILL.md` unless planning discovers a strict controller blocker in another file.
- **D-02:** Treat `ian-xiaohei-illustrations/references/routing.md` as the route metadata source. Phase 8 should consume its Tom row instead of duplicating route truth elsewhere.
- **D-03:** Preserve root Xiaohei legacy references as compatibility entry points while the active controller reads route-specific canonical packs.
- **D-04:** Keep all public release surfaces out of this phase: `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `RELEASE_CHECKLIST.md`, `scripts/validate-skill-package.mjs`, and validator tests.

### Route Selection and Defaults
- **D-05:** Omitted visual IP selects only the `xiaohei` route.
- **D-06:** Tom aliases are exact route triggers: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- **D-07:** Explicit Tom selection uses route id `tom`, display name `Tom`, `default=false`, output suffix `tom`, and route status `gated-authorized`.
- **D-08:** Tom selection must carry a rights-status note in planning, generation, edit, QA, and delivery context. The note points rights-sensitive decisions to `references/ips/tom/rights.md`.

### Tom Reference Loading
- **D-09:** After selecting `tom`, the controller loads only Tom required references: `references/ips/tom/index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-10:** Tom planning and generation route to `references/ips/tom/prompt-template.md` and `references/ips/tom/composition-patterns.md`.
- **D-11:** Tom QA and edit repair route to `references/ips/tom/qa-checklist.md` and the edit gates in `references/ips/tom/prompt-template.md`.
- **D-12:** Tom rights handling routes to `references/ips/tom/rights.md`; controller copy should keep `gated-authorized` visible and avoid broad availability wording.

### Mixed-IP Route Groups
- **D-13:** Mixed requests involving any combination of Xiaohei, Littlebox, and Tom create separate route groups from one shared core idea.
- **D-14:** Each route group loads only its own required references, uses its own planning fields, prompt template, composition rules, QA checklist, edit repairs, and output directory.
- **D-15:** Mixed route groups should include a Tom group when the request names any Tom alias, with Tom-specific fields from `references/ips/tom/prompt-template.md`: placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- **D-16:** Route leakage is a controller failure. Tom rules must not bleed into Xiaohei or Littlebox groups, and Xiaohei/Littlebox rules must not dilute Tom's protected-route status or Tom QA gates.

### Output and Delivery
- **D-17:** Tom outputs use `assets/<article-slug>-tom/`.
- **D-18:** `SKILL.md` must include the escaped token `assets/&lt;article-slug&gt;-tom/` for docs and validator marker continuity.
- **D-19:** Mixed-IP outputs write to separate directories: Xiaohei under `assets/<article-slug>-illustrations/`, Littlebox under `assets/<article-slug>-littlebox/`, and Tom under `assets/<article-slug>-tom/`.
- **D-20:** Delivery reporting remains one block per IP. The Tom block should include selected IP, shared core idea, image purposes, save path, route status `gated-authorized`, rights note pointing to `rights.md`, and stability notes.

### the agent's Discretion
- Automatic decisions and subagents were explicitly authorized. Multi-agent tooling was not available in this runtime, so the phase analysis was completed inline using the required project, roadmap, prior context, verification, routing, controller, and Tom pack files.
- The planner may decide exact Chinese controller prose and section placement inside `SKILL.md`, provided the locked route triggers, reference paths, output paths, escaped token, mixed grouping behavior, QA routing, and scope fence remain explicit.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Definition and Requirements
- `.planning/ROADMAP.md` — Phase 8 goal and success criteria for explicit Tom aliases, Xiaohei-only omitted-IP default, mixed route groups, and Tom output path markers.
- `.planning/REQUIREMENTS.md` — TOMR-01 through TOMR-04 plus out-of-scope boundaries for Tom default behavior, broader cast support, public rendered examples, hosted runtime, and validator scope.
- `.planning/PROJECT.md` — v1.1 milestone framing, protected-character constraint, IP isolation, compatibility, no-build-runtime boundary, and documentation language policy.
- `.planning/STATE.md` — current Phase 8 position and carried-forward decisions from Phases 6 and 7.

### Prior Phase Contracts
- `.planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md` — locked Tom route metadata, alias set, `gated-authorized` status, `default=false`, output suffix, rights path, public-sample gate, and output token decisions.
- `.planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md` — verified Phase 6 evidence for `routing.md`, `rights.md`, NOTICE boundary, route status wording, and public-sample gate.
- `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md` — locked Tom pack file set, planning fields, prompt behavior, QA failures, edit repairs, output path, rights-status note, and Phase 8 scope handoff.
- `.planning/phases/07-tom-canonical-pack/07-VERIFICATION.md` — verified Phase 7 evidence for Tom pack files, planning fields, prompt, QA, edits, and scope fences.

### Controller and Routing Surfaces
- `ian-xiaohei-illustrations/SKILL.md` — Phase 8 target file. Current controller lists Xiaohei and Littlebox only in core positioning, route selection, shot-list extras, mixed groups, generation prompt routing, QA routing, output paths, validation markers, and delivery blocks.
- `ian-xiaohei-illustrations/references/routing.md` — existing three-route metadata source. It already defines Tom aliases, `default=false`, `output_suffix=tom`, required references, attribution context, `gated-authorized` status, mixed route groups, raw Tom output path, and escaped Tom output path token.

### Tom Canonical Pack
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — Tom pack navigation, route status, rights authority, output path, protected-route failure names, and scope boundary.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Tom source, rights-holder context, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` — Tom visual style, recognizability cues, protected-route vetoes, and route leakage signals.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` — Tom identity, solo route boundary, cognitive-action responsibility, recognition gates, and failure modes.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` — Tom composition families, original metaphor invention, support objects, Tom action pool, visible labels, protected-route gates, and anti-repeat rule.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` — Tom planning fields, one-image generation prompt, edit prompts, rights-status note, and output-path reminder.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` — Tom pass criteria, protected-route checks, failure signals, iteration moves, delivery judgment, and path reminder.

### Existing Route Patterns
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Xiaohei canonical pack navigation and compatibility pattern.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — Xiaohei prompt/edit surface that must continue to work as the omitted-IP default.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — Xiaohei QA surface that remains isolated from Tom.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Littlebox route-local pack navigation and output path pattern.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` — Littlebox user-language and English prompt split that remains route-local.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` — Littlebox planning, generation, edit, and output path surface.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` — Littlebox QA surface that remains isolated from Tom.

### Codebase Maps
- `.planning/codebase/STRUCTURE.md` — installable package layout, location for skill behavior changes, public docs placement, and generated asset directory conventions.
- `.planning/codebase/INTEGRATIONS.md` — host-provided `image_gen` dependency, Codex skill runtime, and no standalone runtime boundary.
- `.planning/codebase/TESTING.md` — manual QA model, image-generation inspection pattern, and current validator context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ian-xiaohei-illustrations/references/routing.md`: already supplies the complete Tom route contract, including aliases, `default=false`, output suffix, required references, status, mixed route groups, and output tokens.
- `ian-xiaohei-illustrations/references/ips/tom/*`: already supplies the route-local Tom operational pack needed by the controller.
- `ian-xiaohei-illustrations/SKILL.md`: already has controller sections for route selection, shared article digestion, shot lists, generation, QA, saving, and delivery; these sections can be extended to Tom without new runtime code.

### Established Patterns
- Skill behavior is Markdown-driven and progressively loads route-specific reference files.
- Xiaohei remains the only implicit default route and keeps legacy root reference compatibility.
- Explicit IP routes use route-local canonical packs and route-specific output directories.
- Mixed-IP requests are organized as separate route groups from one shared core idea.
- Generated images are produced one per `image_gen` call, then checked against the selected route's QA file before delivery.
- Delivery reports group outputs by selected IP and include purpose, save path, and stability notes.

### Integration Points
- Add Tom to `SKILL.md` core positioning and reference list.
- Add Tom alias selection to the route-selection workflow.
- Extend mixed route group instructions from two routes to any combination of Xiaohei, Littlebox, and Tom.
- Add Tom shot-list extras using `references/ips/tom/prompt-template.md`.
- Add Tom generation routing through Tom prompt, composition, QA, and rights references.
- Add Tom QA failure summary and edit routing through `references/ips/tom/qa-checklist.md` and `prompt-template.md`.
- Add Tom save path and escaped validation marker in the save/delivery section.

</code_context>

<specifics>
## Specific Ideas

- The controller should name Tom as an optional protected-character IP in the opening positioning, with status `gated-authorized`.
- The controller should preserve this alias set exactly: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.
- The controller should name the Tom output path in both raw and escaped forms: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- The controller should mention `references/ips/tom/rights.md` whenever Tom planning, generation, QA, edit, or delivery surfaces need rights-sensitive handling.
- The controller should use "separate route groups" for mixed requests and should keep every route group's references, prompt template, composition rules, QA checklist, edit repairs, and output path isolated.
- Tom prompt, composition, and QA surfaces already contain the protected-route failure terms: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage.

</specifics>

<deferred>
## Deferred Ideas

- Phase 9 owns README expansion, copyable Tom prompts in `examples/prompts.md`, `agents/openai.yaml` metadata wording, release checklist expansion, and public route guidance.
- Phase 10 owns validator hardening, Node tests, route leakage checks, Tom docs markers, raw and escaped output path checks, and public-sample gate hardening.
- Public rendered Tom examples remain gated by the Phase 6 release checklist public-sample approval record.
- Broader Tom and Jerry cast support, Jerry usage, logos, title cards, source-frame recreation, and franchise scenes require separate authorization scope and future requirements.

</deferred>

---

*Phase: 8-Skill Controller Integration*
*Context gathered: 2026-06-13T03:23:51+08:00*
