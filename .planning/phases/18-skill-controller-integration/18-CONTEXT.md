# Phase 18: Skill Controller Integration - Context

**Gathered:** 2026-06-13T16:05:00Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 18 integrates the existing Sealos Seal route metadata and Phase 17 Sealos canonical pack into the skill controller in `ian-xiaohei-illustrations/SKILL.md`. The phase makes Sealos Seal selectable through explicit aliases, preserves Xiaohei as the only omitted-IP default, adds Sealos route-local planning, generation, QA, edit, save, mixed-IP grouping, and delivery-report behavior, and carries the Sealos brand/canonical-image note through runtime-facing skill instructions.

Phase 18 covers SEAL-01 through SEAL-05 only. Phase 19 owns public README, prompt examples, agent metadata, NOTICE consistency, and release-surface expansion. Phase 20 owns full validator and Node regression hardening for the five-route Sealos controller contract.

</domain>

<decisions>
## Implementation Decisions

### Route Selection and Default Behavior

- **D-01:** Update `ian-xiaohei-illustrations/SKILL.md` so Sealos Seal is listed with Xiaohei, Littlebox, Tom, and Ferris as a selectable visual IP route.
- **D-02:** Use `ian-xiaohei-illustrations/references/routing.md` as the route selection authority for Sealos Seal aliases, route id, display name, default flag, output suffix, required references, attribution context, and route status.
- **D-03:** Recognize these explicit aliases for the Sealos route: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
- **D-04:** Preserve omitted visual IP behavior as a Xiaohei-only route selection. Sealos Seal remains an explicit route with `default=false`, route id `sealos`, display name `Sealos Seal`, output suffix `sealos`, and route status `brand-owned`.
- **D-05:** Add Sealos route-local reference loading to the controller. The required Sealos references are `references/ips/sealos/index.md`, `references/ips/sealos/source.md`, `references/ips/sealos/style-dna.md`, `references/ips/sealos/sealos-ip.md`, `references/ips/sealos/composition-patterns.md`, `references/ips/sealos/prompt-template.md`, and `references/ips/sealos/qa-checklist.md`.
- **D-06:** Keep Sealos identity, style, prompt, QA, edit, and brand rules route-local. Xiaohei, Littlebox, Tom, Ferris, and legacy root Xiaohei references keep their existing behavior.

### Sealos Planning Output

- **D-07:** Add a Sealos Seal shot-list branch in `SKILL.md` based on `references/ips/sealos/prompt-template.md`.
- **D-08:** Sealos Seal planning fields should include: `Placement`, `Core idea`, `Structure type`, `Mascot state`, `Mascot action`, `Supporting objects`, `Visible labels`, `Output path: assets/<article-slug>-sealos/`, and `Brand/canonical-image note`.
- **D-09:** The planning output should use the route-specific field names `Mascot state` and `Mascot action`, and require Sealos Seal to perform the central cognitive action.
- **D-10:** The Sealos brand/canonical-image note should state: `Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with navy cap, deep-blue hoodie, Sealos logo marks, and fixed identity markers from source.md.`
- **D-11:** Planning prose may follow the user's language, while Sealos image-generation prompts stay English. Visible labels are copied exactly in the user's language.

### Sealos Generation, QA, and Edit Behavior

- **D-12:** Add a Sealos single-image generation branch that loads only the Sealos `required_references`, then uses `references/ips/sealos/prompt-template.md`, `references/ips/sealos/composition-patterns.md`, and `references/ips/sealos/qa-checklist.md`.
- **D-13:** Sealos generation context must preserve route status `brand-owned`, brand/canonical-image authority `references/ips/sealos/source.md`, canonical image status `uploaded-image-canonical`, drift boundary `uploaded-image-locked`, and output path `assets/<article-slug>-sealos/`.
- **D-14:** The Sealos prompt branch should require one standalone 16:9 horizontal article illustration, sparse hand-drawn article style, clean white or near-white background, loose black linework, restrained Sealos blue/deep-blue accents, sparse visible labels, and Sealos Seal as the central cognitive action subject.
- **D-15:** Sealos prompt and QA instructions should preserve the uploaded-image markers: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-16:** Sealos QA in the controller should point to `references/ips/sealos/qa-checklist.md` and name the route failure set: generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, missing brand/canonical-image note, and missing output path.
- **D-17:** Sealos repair instructions should use the edit prompts in `references/ips/sealos/prompt-template.md`: stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preservation of unaffected content.

### Mixed-IP Variant Grouping

- **D-18:** Mixed-IP requests should support Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal for the same core idea.
- **D-19:** Mixed-IP planning should first identify one shared core idea, then create separate route groups for each selected visual IP.
- **D-20:** Each selected route group must load only its own required references and use its own character/action vocabulary, prompt template, composition guidance, QA checklist, edit gates, route note, output suffix, and save path.
- **D-21:** Add a Sealos variant group to mixed-IP output with Sealos-specific `Mascot state`, `Mascot action`, supporting objects, visible labels, `references/ips/sealos/` QA, `assets/<article-slug>-sealos/`, route status `brand-owned`, brand/canonical-image note, and source pointer `references/ips/sealos/source.md`.
- **D-22:** Mixed-IP delivery should remain one block per IP. The Sealos block should carry `selected IP: Sealos Seal`, shared core idea, image purposes, save path, route status, brand/canonical-image note, source pointer, and stability notes.

### Output Path and Delivery Contract

- **D-23:** Add Sealos to the save-path rules in `SKILL.md`: `output_suffix: sealos` maps to `assets/<article-slug>-sealos/`.
- **D-24:** Add the escaped Sealos token to controller-facing docs in `SKILL.md`: `assets/&lt;article-slug&gt;-sealos/`.
- **D-25:** Sealos accepted outputs should use ordered English slug filenames such as `01-topic-name.png`.
- **D-26:** The save step should continue checking target directories for existing assets and use new filenames that preserve prior outputs.
- **D-27:** Generation delivery reports should include selected visual IP, image count, purpose per image, saved path, and stability notes. Sealos reports also include route status `brand-owned`, brand/canonical-image note, and source pointer `references/ips/sealos/source.md`.

### Phase Boundary and Follow-Up Ownership

- **D-28:** Phase 18 should primarily modify `ian-xiaohei-illustrations/SKILL.md`. `ian-xiaohei-illustrations/references/routing.md` may receive small consistency repairs if the controller wording reveals a mismatch, but the existing Phase 16 routing contract is already authoritative.
- **D-29:** Phase 19 owns README updates, copyable prompt examples, `agents/openai.yaml`, NOTICE consistency, and release checklist expansion after controller behavior is integrated.
- **D-30:** Phase 20 owns validator and Node test hardening for Sealos controller behavior, route leakage, docs markers, public sample gates, uploaded-image markers, and full five-route pass output.
- **D-31:** Phase 18 implementation should run the current regression commands as safety checks: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`. New validator assertions stay in Phase 20.

### the agent's Discretion

The user authorized autonomous choices for workflow prompts. The selected defaults are: consume the existing Phase 16 route row and Phase 17 pack, keep `SKILL.md` as the controller integration surface, preserve Xiaohei as the only omitted-IP default, add Sealos as an explicit five-route mixed-IP participant, keep brand/canonical-image wording compact in the controller, and leave public docs plus validator hardening to Phases 19 and 20.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 18 goal, dependency on Phase 17, SEAL-01 through SEAL-05, success criteria, and the single Phase 18 plan.
- `.planning/REQUIREMENTS.md` — Defines Sealos routing requirements, active v1.3 boundaries, output path expectations, docs and validation follow-up phases, and out-of-scope rules.
- `.planning/PROJECT.md` — Defines the v1.3 Sealos Seal milestone, uploaded-image authority, fixed marker list, brand boundary, and project-level constraints.
- `.planning/STATE.md` — Carries Phase 16 and Phase 17 completion state, Sealos route decisions, validator counts, and current Phase 18 position.

### Prior Sealos Decisions and Evidence

- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-CONTEXT.md` — Locked Phase 16 decisions for uploaded-image authority, fixed markers, route metadata, aliases, output suffix, public sample policy, NOTICE/release surfaces, and validator boundaries.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-VERIFICATION.md` — Verification evidence for Phase 16 source record, marker list, route metadata, public sample gate, and 66-check / 34-test pass state.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-UAT.md` — UAT evidence confirming Phase 16 maintainer-facing brand/source, route metadata, marker, sample gate, and validator behavior.
- `.planning/phases/17-sealos-seal-canonical-pack/17-CONTEXT.md` — Locked Phase 17 decisions for Sealos route-local pack shape, planning fields, generation prompt, composition, QA, edits, and deterministic validation markers.
- `.planning/phases/17-sealos-seal-canonical-pack/17-VERIFICATION.md` — Verification evidence for all seven Sealos pack files, planning fields, generation contract, edit prompts, composition families, QA failures, marker loops, and command results.
- `.planning/phases/17-sealos-seal-canonical-pack/17-UAT.md` — UAT evidence confirming Sealos pack availability, planning fields, prompt contract, edit suite, composition coverage, QA categories, marker coherence, and passing commands.

### Controller and Routing Surfaces

- `ian-xiaohei-illustrations/SKILL.md` — Phase 18 integration target for route selection, reference loading, planning fields, generation notes, QA routing, save paths, mixed-IP grouping, and delivery reports.
- `ian-xiaohei-illustrations/references/routing.md` — Current five-route metadata authority with Sealos aliases, `default=false`, `output_suffix=sealos`, required references, brand context, canonical image status, drift boundary, output path tokens, and mixed-IP grouping behavior.

### Sealos Route-Local Pack

- `ian-xiaohei-illustrations/references/ips/sealos/index.md` — Sealos pack navigation, route contract, file responsibilities, shared failure categories, public-sample gate, and operational coherence markers.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Sealos brand and uploaded-image authority record; Phase 18 controller should point brand/canonical-image notes here.
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md` — Sealos sparse article illustration style, fixed uploaded-image markers, visual vetoes, and route gates.
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md` — Sealos mascot identity, active cognitive-action responsibility, action verbs, identity gates, and failure modes.
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` — Sealos structure families, cloud-developer metaphor domains, object/action pools, label rules, and route-leakage gates.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` — Sealos planning fields, English one-image generation prompt, brand/canonical-image note, output path, and edit prompt suite.
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` — Sealos route-local QA authority, identity checks, failure taxonomy, repair moves, and delivery judgment.

### Existing Route Patterns

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Default route-local pack shape and Xiaohei compatibility baseline.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Explicit non-default route pack pattern for Littlebox.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — Explicit protected-character route pack pattern with `gated-authorized` status propagation.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` — Controller-facing pattern for route-specific planning fields, generation prompt, edit gates, note, and output reminder.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` — Explicit mascot route pack pattern with source/trademark authority propagation.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` — Closest existing source-aware mascot controller pattern for planning fields, generation prompt, edit gates, note, and output reminder.

### Later-Phase Surfaces

- `README.md` — Phase 19 public route docs target.
- `examples/prompts.md` — Phase 19 copyable prompt examples target.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Phase 19 agent discovery metadata target.
- `NOTICE.md` — Phase 19 consistency target after the controller integrates Sealos behavior.
- `RELEASE_CHECKLIST.md` — Phase 19 release-surface expansion target and Phase 16 Sealos public-sample gate authority.
- `scripts/validate-skill-package.mjs` — Phase 20 validator hardening target; Phase 18 should run it as a regression check.
- `scripts/validate-skill-package.test.mjs` — Phase 20 Node regression target; Phase 18 should run it as a regression check.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/SKILL.md`: Existing controller already has route branches for Xiaohei, Littlebox, Tom, and Ferris across selection, planning, generation, QA, save paths, mixed-IP grouping, and delivery reports. Add Sealos by following the Ferris/Tom branch pattern while using Sealos route-local notes.
- `ian-xiaohei-illustrations/references/routing.md`: The Sealos row, aliases, `default=false`, output suffix, required references, metadata block, raw path token, escaped path token, and mixed-IP route grouping are already present and should be consumed by the controller.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md`: Provides the exact planning fields, generation prompt constraints, brand/canonical-image note, and edit prompt headings that Phase 18 should surface.
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md`: Provides the route-local pass/fail and repair authority for Sealos generation and delivery.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` and `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`: Provide the closest existing mascot route controller pattern for source-aware notes, active mascot participation, output path, and QA routing.

### Established Patterns

- The repo is a documentation-first Codex Skill package. Runtime behavior is encoded in Markdown instructions and consumed by the host Codex skill runtime.
- `SKILL.md` stays as the central controller and loads detailed behavior progressively from route-local references.
- Route-specific rules stay isolated under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Xiaohei remains the only omitted-IP default. Every added route stays explicit with `default=false`.
- Protected, source-reviewed, and brand-owned routes carry route notes through planning, generation, QA, edit, and delivery surfaces.
- Mixed-IP requests use one shared core idea and separate variant groups with route-local references, QA, notes, and output directories.
- Current validation is dependency-free Node plus whitespace checks. Full Sealos-specific validator hardening follows in Phase 20.

### Integration Points

- Phase 18 connects Sealos route metadata and the Sealos pack into `ian-xiaohei-illustrations/SKILL.md`.
- Phase 18 may make narrow consistency edits to `ian-xiaohei-illustrations/references/routing.md` only if needed by the controller integration.
- Phase 18 should preserve current behavior for `references/ips/xiaohei/`, `references/ips/littlebox/`, `references/ips/tom/`, `references/ips/ferris/`, and the root legacy Xiaohei reference paths.
- Phase 18 should leave README, examples, metadata, NOTICE, release checklist, and validator/test expansions to the phases that own them.

</code_context>

<specifics>
## Specific Ideas

- Sealos explicit aliases are fixed: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
- Sealos path tokens are fixed: raw `assets/<article-slug>-sealos/` and escaped `assets/&lt;article-slug&gt;-sealos/`.
- Sealos planning and delivery must carry this note: `Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with navy cap, deep-blue hoodie, Sealos logo marks, and fixed identity markers from source.md.`
- The uploaded mascot identity markers remain fixed: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Mixed-IP requests for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal should produce five separate variant groups from the same shared core idea.
- Route leakage is a delivery concern for Sealos as well as for Tom and Ferris. Sealos delivery should preserve `brand-owned`, `references/ips/sealos/source.md`, brand/canonical-image note, route-local QA, and `assets/<article-slug>-sealos/`.

</specifics>

<deferred>
## Deferred Ideas

None. Discussion stayed within Phase 18 controller integration scope.

</deferred>

---

*Phase: 18-Skill Controller Integration*
*Context gathered: 2026-06-13T16:05:00Z*
