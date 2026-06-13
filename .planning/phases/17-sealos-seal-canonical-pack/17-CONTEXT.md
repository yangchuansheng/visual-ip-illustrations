# Phase 17: Sealos Seal Canonical Pack - Context

**Gathered:** 2026-06-13T15:30:00Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 17 delivers the route-isolated Sealos Seal canonical pack under `ian-xiaohei-illustrations/references/ips/sealos/`. The phase turns the Phase 16 brand and uploaded-image contract into operational reference files for identity, style, composition, planning fields, prompt templates, edit prompts, QA gates, delivery notes, and drift-safe behavior.

Phase 17 covers SIP-01 through SIP-06 only. Phase 18 owns controller loading and runtime routing. Phase 19 owns public docs, examples, metadata, NOTICE consistency, and release-surface expansion. Phase 20 owns full-route validator and Node regression hardening.

</domain>

<decisions>
## Implementation Decisions

### Pack Shape and Route Isolation

- **D-01:** Create the Phase 17 Sealos Seal canonical pack under `ian-xiaohei-illustrations/references/ips/sealos/`.
- **D-02:** The pack must include these full route-local references: `index.md`, `source.md`, `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-03:** Preserve `source.md` as the Phase 16 brand and uploaded-image authority record. Phase 17 files should reference it as the authority rather than duplicating every source-policy detail.
- **D-04:** Use `index.md` as the pack navigation and coherence contract. It should list route id `sealos`, route status `brand-owned`, output path `assets/<article-slug>-sealos/`, authority file `source.md`, shared failure categories, public-sample gate, and operational file responsibilities.
- **D-05:** Keep Sealos Seal rules route-local. Do not put Sealos mascot identity, brand language, or QA gates into Xiaohei, Littlebox, Tom, Ferris, or legacy root Xiaohei reference files during Phase 17.
- **D-06:** Repeat a compact shared Sealos route header across operational Sealos files so later controller, docs, and validator phases can check stable markers.
- **D-07:** Use `sealos` as the only Phase 17 output suffix for this route and preserve `assets/<article-slug>-sealos/` as the delivery path note.

### Canonical Mascot Identity and Style

- **D-08:** The uploaded image remains the canonical Sealos Seal shape authority for v1.3.
- **D-09:** Every operational Sealos file should preserve the fixed uploaded-image markers: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-10:** `sealos-ip.md` should define the mascot as a reliable cloud developer companion that performs the cognitive action inside the article illustration.
- **D-11:** `style-dna.md` should adapt the existing sparse 16:9 article-illustration system to the uploaded Sealos Seal: clean white or near-white background, loose black linework, restrained Sealos blue/deep-blue accents, minimal red/orange emphasis, and generous whitespace.
- **D-12:** Treat cap, hoodie, Sealos logo marks, body color, glossy eyes, nose, whisker dots, smile, flippers, compact legs, and side-rear tail as identity gates. A result that loses these markers should be repaired through identity or logo/outfit edit prompts.
- **D-13:** Keep the mascot in sparse article-illustration form. Over-detailed 3D toy rendering, character-sheet rendering, plush-toy rendering, polished vector mascot rendering, or generic mascot rendering should fail QA.
- **D-14:** Preserve the prior Sealos brand idea as supporting personality: reliable, premium, friendly, technically credible, cloud developer companion.

### Planning Fields and Prompt Contract

- **D-15:** `prompt-template.md` must define Sealos Seal planning fields exactly enough for downstream runtime wiring: placement, core idea, structure type, mascot state, mascot action, supporting objects, visible labels, output path, and brand/canonical-image note.
- **D-16:** Use the field name `Mascot state` rather than a generic character field so the route stays Sealos-specific while still readable by users.
- **D-17:** Use the field name `Mascot action` and require a physical cognitive action that makes the mascot the active operator of the concept.
- **D-18:** The Sealos planning output should include `Output path: assets/<article-slug>-sealos/`.
- **D-19:** The Sealos planning output should include `Brand/canonical-image note: Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with navy cap, deep-blue hoodie, Sealos logo marks, and fixed identity markers from source.md.`
- **D-20:** Image-generation prompts should stay English for model consistency. Planning and delivery notes can follow the user's language.
- **D-21:** Visible labels should be copied exactly in the user's language, kept sparse, and placed near supporting objects or route nodes while leaving the mascot's face, cap, chest logo, hoodie, flippers, and tail readable.
- **D-22:** The one-image prompt template must produce one standalone 16:9 horizontal article illustration where the uploaded white Sealos Seal mascot performs the central cognitive action.

### Cloud Developer Action Language

- **D-23:** `composition-patterns.md` should support the eight existing structure families: Workflow, System Local View, Before/After, Character State, Concept Metaphor, Method Layers, Map Route, and Mini Comic.
- **D-24:** The Sealos composition families should cover cloud OS, AI deployment, DevBox, database, Kubernetes, app launch, troubleshooting, and workflow metaphors.
- **D-25:** Use low-tech cloud-developer supporting objects rather than literal UI screenshots: cloud OS tiles, deployment rails, DevBox workbenches, database cylinders, Kubernetes pods, app launch pads, traffic routes, incident cones, log slips, config keys, health checks, rollback handles, workflow gates, and service bridges.
- **D-26:** The mascot action pool should include deploy, launch, connect, debug, route, lift, inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, and guide.
- **D-27:** The action must preserve mascot identity first. Change supporting objects and scene metaphors before changing the uploaded-image identity markers.
- **D-28:** Sealos cloud/OS puns may inform metaphors, but the article concept should remain the visual priority. Use the mascot as the operator of cloud infrastructure work, not as a decorative brand icon.

### QA Failure Taxonomy

- **D-29:** `qa-checklist.md` should be the route-local QA authority for Sealos Seal outputs.
- **D-30:** The shared Phase 17 Sealos failure categories are: generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage.
- **D-31:** QA should reject missing side-rear tail, missing glossy dark eyes, missing black nose, missing whisker dots, missing small smile, missing short rounded flippers, missing compact legs, prior exploration variant drift, and bald/plain-head seal drift as identity failures or drift failures.
- **D-32:** QA should reject formal diagrams, dense PPT-like infographics, UI screenshots, IDE or terminal scenes, code screenshots, poster layouts, top-left title artifacts, dense text blocks, clean digital labels, and copied prior route compositions.
- **D-33:** QA should require the visual metaphor to depend on the Sealos Seal mascot action. If removing the mascot leaves the metaphor intact, the image fails the route.
- **D-34:** QA should require the brand/canonical-image note and delivery path note in planning, generation, edit, and delivery context.

### Edit Prompt Coverage

- **D-35:** `prompt-template.md` should include edit prompts for stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preservation of unaffected content.
- **D-36:** The stronger-participation edit should preserve core idea, style, labels, aspect ratio, and unaffected supporting objects while making the Sealos Seal perform the central cognitive action.
- **D-37:** The uploaded-image identity repair edit should restore white rounded body, navy cap, deep-blue hoodie, Sealos logo marks, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-38:** The logo/hoodie/cap repair edit should preserve successful composition and mascot action while repairing Sealos logo marks on cap and chest, navy cap shape, deep-blue hoodie, and brand-color consistency.
- **D-39:** Title removal and text reduction edits should preserve successful mascot identity, action, supporting objects, visible labels that remain correct, line style, color accents, aspect ratio, and image quality.
- **D-40:** The unaffected-content preservation edit should name the exact failure being repaired and preserve all successful content outside that failure.

### Validation Readiness

- **D-41:** Phase 17 should create deterministic text markers that Phase 20 can validate locally without image analysis.
- **D-42:** Stable markers should include route id `sealos`, route status `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, authority file `source.md`, output path `assets/<article-slug>-sealos/`, fixed visual marker list, planning field names, structure family names, action/object pools, shared failure categories, edit prompt headings, and public-sample gate wording.
- **D-43:** Keep marker wording consistent across `index.md`, `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` so later validators can check coherence.

### the agent's Discretion

The user authorized autonomous choices for workflow prompts. The selected defaults are route-local pack files, Ferris-style operational coherence, uploaded-image identity as the hard authority, English prompt templates for image generation, sparse 16:9 article illustration style, and deterministic validation markers for Phase 20.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 17 goal, dependency on Phase 16, SIP-01 through SIP-06, success criteria, and the three planned Phase 17 plans.
- `.planning/REQUIREMENTS.md` — Defines Sealos Seal SIP requirements, active v1.3 boundaries, output path expectations, docs/validation follow-up phases, and out-of-scope rules.
- `.planning/PROJECT.md` — Defines the v1.3 Sealos Seal milestone, uploaded-image authority, fixed marker list, brand boundary, and project-level constraints.
- `.planning/STATE.md` — Carries Phase 16 completion state, Sealos route decisions, validator counts, and current Phase 17 position.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-CONTEXT.md` — Locked Phase 16 decisions for uploaded-image authority, fixed markers, route metadata, public sample policy, NOTICE/release surfaces, and Phase 16 validator boundaries.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-VERIFICATION.md` — Verification evidence for Phase 16 source record, marker list, route metadata, public sample gate, and validator/test pass state.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-UAT.md` — UAT evidence confirming Phase 16 user-facing maintainer checks and command results.

### Sealos Route Authority

- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Current Sealos Seal brand and uploaded-image authority record; Phase 17 pack files must point to this source record.
- `ian-xiaohei-illustrations/references/routing.md` — Existing Sealos route row, aliases, `default=false`, `output_suffix=sealos`, required references, metadata block, output path token, and mixed-IP grouping behavior.

### Existing IP Pack Patterns

- `ian-xiaohei-illustrations/references/ips/ferris/index.md` — Route-local mascot pack navigation and operational coherence pattern.
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` — Mascot identity, active cognitive-action responsibility, route boundary, failure modes, and stable gate pattern.
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` — Eight structure families, mascot action pool, supporting object pool, anti-repeat rule, and route-local metaphor pattern.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` — Planning field shape, one-image generation prompt, edit prompt suite, output reminder, and route-status marker pattern.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` — Route-local pass/fail, failure taxonomy, iteration moves, and delivery judgment pattern.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Default route-local pack shape that preserves Xiaohei compatibility.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Explicit non-default IP pack shape for an isolated character route.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — Explicit protected-character route-local pack shape and status propagation pattern.

### Runtime and Later-Phase Surfaces

- `ian-xiaohei-illustrations/SKILL.md` — Later Phase 18 controller integration target; Phase 17 should create references that this entrypoint can load.
- `README.md` — Later Phase 19 public docs target; Phase 17 should avoid relying on public docs to explain operational pack rules.
- `examples/prompts.md` — Later Phase 19 prompt example target; Phase 17 should define copyable prompt behavior in the route pack first.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Later Phase 19 agent metadata target.
- `NOTICE.md` — Phase 16 already records Sealos brand boundary; later Phase 19 may align wording after the full pack exists.
- `RELEASE_CHECKLIST.md` — Phase 16 already records Sealos release gates; Phase 17 should keep public-sample wording compatible with those gates.

### Validation Surfaces

- `scripts/validate-skill-package.mjs` — Later Phase 20 validator hardening target; Phase 17 should add stable text markers and coherent route-local files.
- `scripts/validate-skill-package.test.mjs` — Later Phase 20 Node regression target; Phase 17 should make marker expectations deterministic.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/ips/sealos/source.md`: Existing brand/canonical-image authority record and fixed uploaded-image marker list.
- `ian-xiaohei-illustrations/references/routing.md`: Existing Sealos route row, metadata block, required reference list, alias list, output suffix, raw output path, escaped output path, and route-group behavior.
- `ian-xiaohei-illustrations/references/ips/ferris/*.md`: Closest route-local mascot pack pattern for source-aware mascot identity, prompt, composition, QA, and validation-ready marker repetition.
- `RELEASE_CHECKLIST.md`: Existing Sealos public-sample and brand/logo review gate created in Phase 16.
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`: Current validator baseline at 66 checks and 34 tests after Phase 16.

### Established Patterns

- The repository is a documentation-first Codex Skill package using Markdown/YAML references and dependency-free Node validation.
- Explicit IP routes live under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Route-local packs isolate identity, style, composition, prompt, QA, source/rights/brand notes, output path, and failure categories.
- Xiaohei remains the only omitted-IP default; Sealos Seal remains explicit with `default=false`.
- Prompt templates use English for image-model reliability while planning/delivery prose can follow the user's language.
- Public rendered samples for sensitive mascot routes stay behind `RELEASE_CHECKLIST.md` approval.
- Validation favors stable textual markers and local filesystem checks.

### Integration Points

- Phase 17 creates or refines files under `ian-xiaohei-illustrations/references/ips/sealos/`.
- Phase 17 must preserve `ian-xiaohei-illustrations/references/ips/sealos/source.md` as the authority file from Phase 16.
- Phase 18 will load the Phase 17 pack from `ian-xiaohei-illustrations/SKILL.md` and route selection behavior.
- Phase 19 will expose the Phase 17 pack through README, examples, metadata, NOTICE consistency, and release materials.
- Phase 20 will validate the Phase 17 pack through `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.

</code_context>

<specifics>
## Specific Ideas

- The route authority is the uploaded white seal wearing a navy cap and deep-blue hoodie.
- The exact fixed marker list is: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Sealos Seal should feel like a reliable cloud developer companion for Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, Kubernetes, troubleshooting, and workflows.
- The pack should use a cloud-developer metaphor vocabulary: cloud OS tiles, deployment rails, DevBox workbenches, database cylinders, Kubernetes pods, app launch pads, traffic routes, incident cones, log slips, config keys, health checks, rollback handles, workflow gates, and service bridges.
- The route should block generic seals, abstract logo creatures, bald/plain-head seal variants, prior exploration variants, changed body color, missing cap, missing hoodie, missing Sealos logo marks, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage.
- The planning field set should be concrete and stable: placement, core idea, structure type, mascot state, mascot action, supporting objects, visible labels, output path, and brand/canonical-image note.
- Accepted outputs should be saved under `assets/<article-slug>-sealos/`.

</specifics>

<deferred>
## Deferred Ideas

None. Discussion stayed within Phase 17 context scope.

</deferred>

---

*Phase: 17-Sealos Seal Canonical Pack*
*Context gathered: 2026-06-13T15:30:00Z*
