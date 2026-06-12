# Phase 7: Tom Canonical Pack - Context

**Gathered:** 2026-06-13T02:08:40+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 7 fills the isolated Tom operational reference pack under `ian-xiaohei-illustrations/references/ips/tom/`. The phase creates the Tom pack index, style DNA, Tom identity rules, composition patterns, prompt template, QA checklist, and edit guidance so downstream agents can plan, generate, inspect, and repair Tom article illustrations using the existing protected-route contract.

`ian-xiaohei-illustrations/references/ips/tom/rights.md` remains the Phase 6 rights source. Phase 7 reference content must carry the `gated-authorized` status into planning, generation, editing, and QA surfaces.

Scope fence: Phase 7 owns Tom reference-pack content. Skill controller wiring, mixed three-IP grouping, public docs expansion, agent metadata updates, broad release wording, and full validator hardening are owned by Phases 8, 9, and 10.

</domain>

<decisions>
## Implementation Decisions

### Canonical Pack Location and File Set
- **D-01:** Tom canonical pack files live under `ian-xiaohei-illustrations/references/ips/tom/`.
- **D-02:** Phase 7 fills these operational references: `index.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-03:** `rights.md` stays the rights source from Phase 6 and should be referenced from the Tom pack index and every rights-sensitive workflow surface.
- **D-04:** `index.md` should mirror the Xiaohei and Littlebox pack pattern: list each Tom reference, state the route status, name the output path, and point to `rights.md`.

### Rights Status and Route Wording
- **D-05:** Tom route status remains `gated-authorized`.
- **D-06:** Every Tom planning, generation, edit, and QA surface must include a rights-status note.
- **D-07:** Tom wording should describe a protected-character route with gated release behavior. Broad availability claims are route leakage and belong in QA failure language.
- **D-08:** Tom output reminders use `assets/<article-slug>-tom/`, with public-doc escaping handled in later documentation phases.

### Tom Identity and Protected-Character Boundary
- **D-09:** Tom identity is Tom from Tom and Jerry as a protected-character route.
- **D-10:** Phase 7 defines a solo Tom article-illustration variant focused on cognitive action in article-body illustrations.
- **D-11:** The identity rules should preserve recognizable Tom cues through a simplified article-illustration style: grey/blue-grey cat body, white muzzle and belly areas, expressive ears, tail, paws, and Tom-like silhouette while keeping the image sparse and explanatory.
- **D-12:** Default Jerry usage, broader cast expansion, show logos, title cards, and source-frame recreation are rejected.
- **D-13:** The Tom pack should describe original article-illustration scenes and fresh metaphors, with Tom acting inside the concept instead of recreating cartoon source material.

### Planning Contract
- **D-14:** Tom shot lists include these fields: placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- **D-15:** Tom must perform the cognitive action in every planned image. Passive placement is a planning failure.
- **D-16:** Supporting objects should come from article-metaphor needs, such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, or broken machines.
- **D-17:** Visible labels should be concise, sparse, and tied to the user's language unless a later prompt surface specifies a stricter rule.

### Prompt Template Contract
- **D-18:** The Tom prompt template produces one standalone 16:9 article illustration per generation call.
- **D-19:** The prompt should keep Tom in the central cognitive action, with concise visible labels, sparse composition, and one core idea.
- **D-20:** The prompt constraints must block logos, title cards, source-frame recreation, broad cast expansion, default Jerry usage, dense explanatory text, and generic-cat drift.
- **D-21:** The prompt template must remind downstream agents to save Tom outputs under `assets/<article-slug>-tom/`.

### QA and Edit Contract
- **D-22:** Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
- **D-23:** Tom QA should also check 16:9 format, one core idea, readable short labels, Tom identity recognizability, original metaphor, and rights-status note presence.
- **D-24:** Edit prompts support stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.
- **D-25:** Editing guidance should preserve existing composition, labels, style, aspect ratio, and unaffected objects unless the targeted failure requires regeneration.

### Scope Fence
- **D-26:** Phase 7 reference files should include stable markers that Phase 10 can validate later; validator script hardening belongs to Phase 10.
- **D-27:** SKILL.md controller behavior, explicit Tom route selection, omitted-IP default behavior, and mixed three-IP grouping belong to Phase 8.
- **D-28:** README expansion, prompt-example expansion, release checklist expansion, and `agents/openai.yaml` wording belong to Phase 9.
- **D-29:** Public rendered Tom examples stay governed by the Phase 6 public-sample gate.

### the agent's Discretion
- Auto mode was explicitly authorized. The agent selected all Phase 7 gray areas and chose the conservative protected-IP defaults already implied by Phase 6.
- The planner may choose exact section headings inside each Tom reference file, provided the locked fields, route status, output path, and QA gates remain explicit.
- The planner may reuse Xiaohei's compact Chinese reference style or Littlebox's English prompt-template pattern where each fits the Tom route. Generation prompt text should favor English for model consistency, while planning and delivery notes follow the user's language.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Definition and Requirements
- `.planning/ROADMAP.md` — Phase 7 goal, dependency on Phase 6, and success criteria for Tom canonical references, planning fields, prompt behavior, QA, and edits.
- `.planning/REQUIREMENTS.md` — TOMP-01 through TOMP-05 plus v1.1 out-of-scope boundaries for Tom default behavior, broader cast, public rendered examples, and hosted/runtime expansion.
- `.planning/PROJECT.md` — v1.1 Authorized Tom IP Integration milestone, protected-character constraint, project core value, package/runtime constraints, and IP isolation rule.
- `.planning/STATE.md` — current position, Phase 6 decisions carried forward, and recorded Phase 7 direction.

### Phase 6 Source Contract
- `.planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md` — locked decisions for Tom `rights.md`, route status, route metadata, public-sample gate, output suffix, and downstream scope boundaries.
- `.planning/phases/06-tom-rights-and-route-contract/06-RESEARCH.md` — implementation research for rights, route metadata, validator baseline, and official source/licensing context.
- `.planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md` — verified Phase 6 truths and evidence for `rights.md`, `routing.md`, NOTICE boundary, status wording, sample gate, and validator checks.
- `.planning/phases/06-tom-rights-and-route-contract/06-01-SUMMARY.md` — rights record, Tom route row, NOTICE boundary, and route-status decisions.
- `.planning/phases/06-tom-rights-and-route-contract/06-02-SUMMARY.md` — README/examples/release checklist route-status wording and public-sample gate.
- `.planning/phases/06-tom-rights-and-route-contract/06-03-SUMMARY.md` — validator baseline repair and Phase 6 Tom contract checks.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Markdown style, kebab-case reference naming, prompt-template placeholders, output path naming, and reference responsibilities.
- `.planning/codebase/STRUCTURE.md` — installable package layout, reference-pack placement, public docs placement, and generated asset directory conventions.
- `.planning/codebase/TESTING.md` — manual QA model, prompt smoke pattern, generated-image acceptance style, and current validator/test context.

### Routing and Rights
- `ian-xiaohei-illustrations/references/routing.md` — route table with Tom row, aliases, `default=false`, `output_suffix=tom`, seven required references, attribution context, status, mixed route-group wording, and output path contract.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Phase 6 rights source; source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- `scripts/validate-skill-package.mjs` — current validator constraints: route parser, Tom required-reference markers, `rights.md` existence requirement, output path tokens, public-sample gate, and future Phase 10 hardening surface.

### Existing Canonical Pack Patterns
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — compact route index pattern for a canonical pack.
- `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` — sparse article-illustration style rules and visual veto pattern.
- `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` — character identity, action responsibility, and passive-character failure model.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` — structure types, metaphor invention, object/action pools, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — one-image prompt contract and edit prompt examples.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — pass/fail checks, iteration moves, and delivery judgment.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — canonical pack index with source attribution and route output path.
- `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` — route-specific palette, texture, labels, and visual vetoes.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` — fixed character model, action vocabulary, identity recognition rule, and failure modes.
- `ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md` — composition families, metaphor invention, spatial rules, flow marks, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` — user-language label policy and English image-prompt policy.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` — planning output fields, one-image prompt template, edit prompts, and output path reminder.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` — pass/fail gate, identity checks, iteration moves, and delivery judgment.

### Phase 7 Target Files
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — Tom pack index to create.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` — Tom visual style rules to create.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` — Tom identity and action rules to create.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` — Tom composition and metaphor rules to create.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` — Tom planning, generation, and edit prompt templates to create.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` — Tom pass/fail and iteration gate to create.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ian-xiaohei-illustrations/references/routing.md`: already lists the full Tom required-reference set and output suffix, so Phase 7 should fill the paths already named there.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md`: provides the rights and route-status source that operational Tom references must cite.
- `ian-xiaohei-illustrations/references/ips/xiaohei/*`: provides the compact article-illustration pack pattern: style DNA, IP rules, composition patterns, prompt template, QA checklist, and index.
- `ian-xiaohei-illustrations/references/ips/littlebox/*`: provides the route-isolated pack pattern with explicit planning fields, English generation prompt template, edit prompts, output path reminder, and route-specific QA gates.
- `scripts/validate-skill-package.mjs`: currently expects the Tom route row to list seven required references and only requires `rights.md` to exist during Phase 6; Phase 7-created files will make those route references concrete ahead of Phase 10 validation hardening.

### Established Patterns
- Canonical IP packs live under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Pack index files state file responsibilities and output path.
- Style, identity, composition, prompt, and QA rules are separate Markdown files.
- Character routes require the character to perform the conceptual action; passive decorative placement fails QA.
- Prompt templates generate one standalone 16:9 article illustration per call.
- Output paths are route-specific: Xiaohei uses `assets/<article-slug>-illustrations/`, Littlebox uses `assets/<article-slug>-littlebox/`, and Tom uses `assets/<article-slug>-tom/`.
- Validation is dependency-free Node with marker checks and route-table parsing. Full Tom canonical-pack marker hardening is scheduled for Phase 10.

### Integration Points
- Create Tom operational files under `ian-xiaohei-illustrations/references/ips/tom/`.
- Reference `rights.md` from `index.md`, `prompt-template.md`, and `qa-checklist.md`.
- Keep `routing.md` as the route metadata source already pointing to the Phase 7 files.
- Leave SKILL.md controller loading changes for Phase 8.
- Leave README, examples, release checklist, and agent metadata expansion for Phase 9.
- Leave validator check expansion and Node test hardening for Phase 10, while writing stable phrases that those checks can target.

</code_context>

<specifics>
## Specific Ideas

- Use `gated-authorized` as the exact Tom route status token throughout the Tom pack.
- Treat Tom as Tom from Tom and Jerry, implemented as a protected-character route with a solo Tom article-illustration variant.
- Require Tom to perform the cognitive action in each illustration: pulling, chasing an idea, operating a lever, guarding a gate, catching evidence, holding back chaos, bridging a gap, sorting signals, repairing a broken flow, or stamping a result.
- Use planning fields exactly aligned to TOMP-02: placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- Prompt template constraints include one 16:9 image, concise visible labels, no logo/title card, no source-frame recreation, no broad cast expansion, and output path `assets/<article-slug>-tom/`.
- QA failures include generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
- Edit prompts target stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.

</specifics>

<deferred>
## Deferred Ideas

- Phase 8 owns SKILL.md controller behavior, explicit Tom alias routing, omitted-IP default behavior, and mixed Xiaohei/Littlebox/Tom route groups.
- Phase 9 owns README expansion, `examples/prompts.md` expansion, release checklist expansion, `agents/openai.yaml` wording, and public route guidance.
- Phase 10 owns full validator hardening, Node tests, route leakage checks, canonical-pack marker checks, docs markers, and public-sample gate hardening.
- v2 owns broader authorized franchise/cast support beyond solo Tom.

</deferred>

---

*Phase: 7-Tom Canonical Pack*
*Context gathered: 2026-06-13T02:08:40+08:00*
