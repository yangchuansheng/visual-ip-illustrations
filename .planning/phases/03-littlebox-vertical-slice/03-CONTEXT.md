# Phase 3: Littlebox Vertical Slice - Context

**Gathered:** 2026-06-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 3 turns the existing Littlebox route placeholder into a working vertical IP slice inside the current `ian-xiaohei-illustrations` skill package. Users can explicitly request Littlebox, receive Littlebox-specific planning fields, generation prompts, QA gates, output paths, mixed-IP variant grouping, and attribution, while Xiaohei remains the default route and canonical compatibility baseline.

</domain>

<decisions>
## Implementation Decisions

### Route Metadata
- **D-01:** The Littlebox route id is `littlebox`.
- **D-02:** The route display name is `Littlebox`.
- **D-03:** Explicit Littlebox aliases are `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton`.
- **D-04:** Littlebox keeps `default: false`; omitted-IP requests continue to select `xiaohei`.
- **D-05:** Littlebox output suffix is `littlebox`, producing `assets/<article-slug>-littlebox/`.
- **D-06:** Phase 3 changes Littlebox route status from `phase-3-owned` to `active` once the route has complete aliases, references, prompt rules, QA, and attribution.
- **D-07:** Littlebox route metadata keeps the Phase 1 fields: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.

### Canonical Pack Shape
- **D-08:** The Littlebox canonical IP pack lives under `ian-xiaohei-illustrations/references/ips/littlebox/`.
- **D-09:** The pack includes `index.md`, `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-10:** The route `required_references` points to all six operational Littlebox files: `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-11:** `index.md` is the maintainer navigation file and records file responsibilities, source attribution, inspected commit, and output path.
- **D-12:** The source repository's `examples.md` provides evidence and smoke-test material, but Phase 3 should only extract necessary forward-test concepts into planning context or future docs; broad public example expansion belongs to Phase 5.

### Littlebox Identity, Prompt, Planning, And QA
- **D-13:** Littlebox is a closed-only paper-box character in front-left three-quarter view with dot eyes on the front panel, tiny legs, at most two side-seam twig arms, a white or near-white body, and exactly one amber seam tape with a jagged torn front tab.
- **D-14:** Littlebox prompts use flat pale sky-blue `#E3F2FD` or pale lavender `#E6E6FA` backgrounds, thick rough black marker linework, dry-brush texture, sparse amber/coral accents, generous whitespace, and one core idea per image.
- **D-15:** Littlebox planning output includes placement, core idea, `Littlebox state: closed`, visual metaphor, assigned background, suggested objects, and short visible labels.
- **D-16:** Multi-image Littlebox planning balances the background pool: even sets use equal sky-blue and lavender counts; odd sets differ by at most one unless article order strongly justifies otherwise.
- **D-17:** Littlebox prompt language is English for image-model consistency, while visible labels, planning notes, and delivery notes follow the user's language.
- **D-18:** Visible labels use the user's language, stay short, usually 3-6 labels, and should look like rough handwritten marker text rather than clean digital typography.
- **D-19:** Littlebox QA rejects passive character placement, open or half-open lids, raised flaps, cutaways, visible interiors, extra arms, wrong arm origin, missing jagged tape tab, tape on the wrong surface, tan/beige cardboard fills, thin/vector linework, clean digital labels, over-dense diagrams, black-dominant arrows, and background imbalance in a set.
- **D-20:** Littlebox output files use ordered English slugs under `assets/<article-slug>-littlebox/`, such as `01-topic-name.png`, while preserving existing assets unless the user asks for replacement.

### Mixed-IP Behavior
- **D-21:** A request for both Xiaohei and Littlebox produces separate variant groups for the same article idea or shot, one group per IP.
- **D-22:** Each variant group loads only that IP's canonical references and uses that IP's output path: Xiaohei uses `assets/<article-slug>-illustrations/`; Littlebox uses `assets/<article-slug>-littlebox/`.
- **D-23:** Mixed-IP planning should identify the shared core idea once, then present IP-specific action, metaphor, background, label, QA, and path differences inside each group.
- **D-24:** Xiaohei and Littlebox rules must not be blended: Littlebox does not inherit Xiaohei's pure-white background or thin line style, and Xiaohei does not inherit Littlebox's pale backgrounds, closed-box anatomy, amber tape, or twig-arm constraints.

### Attribution And NOTICE
- **D-25:** Phase 3 must update `NOTICE.md` with Littlebox attribution: source project `5km Littlebox Illustrations`, author `okooo5km`, source repository `https://github.com/okooo5km/5km-littlebox-illustrations`, MIT license context, and inspected commit `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`).
- **D-26:** Any adapted Littlebox rule files must preserve the MIT license obligation from the source repository, whose `LICENSE` says `Copyright (c) 2026 okooo5km`.
- **D-27:** The Littlebox NOTICE wording should state that Littlebox source material was adapted from the inspected source repository and that derived documentation should credit okooo5km.
- **D-28:** Phase 3 does not import rendered Littlebox example images into this repository by default; source examples are calibration evidence and broad example/doc expansion belongs to Phase 5.

### Compatibility With Prior Phases
- **D-29:** Phase 3 preserves Phase 1 route-first workflow and the route metadata shape in `ian-xiaohei-illustrations/references/routing.md`.
- **D-30:** Phase 3 preserves Xiaohei as the default route, including aliases `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei`.
- **D-31:** Phase 3 preserves Phase 2 canonical Xiaohei pack files under `ian-xiaohei-illustrations/references/ips/xiaohei/` and the legacy root Xiaohei compatibility entry points.
- **D-32:** Phase 3 keeps shared workflow guidance route-neutral; Littlebox-specific style, character, prompt, language, composition, and QA rules live in `references/ips/littlebox/`.

### Scope Boundaries
- **D-33:** Phase 3 owns Littlebox route activation, canonical pack creation, selected-route SKILL references, mixed-IP runtime guidance, Littlebox output path behavior, and NOTICE attribution.
- **D-34:** Phase 4 owns the lightweight validation command and automated checks for route metadata, required references, prompt placeholders, output suffixes, docs links, smoke prompts, and attribution markers.
- **D-35:** Phase 5 owns broad public README/examples refresh, richer copyable prompts for both IPs, agent metadata wording, release checklist, and any public example expansion.
- **D-36:** v1 does not add arbitrary user-defined IP imports, a hosted UI, generated visual regression, or a machine-readable asset manifest.

### the agent's Discretion
- The agent may adapt Littlebox source wording into concise project-local references, provided the hard identity, prompt, QA, label, background, output, and attribution requirements remain explicit.
- The agent may choose exact Chinese phrasing in `SKILL.md`, `routing.md`, and reference files as long as code-like route ids, paths, and field names stay English and match the decisions above.
- The agent may decide whether to add compact Littlebox route smoke wording to existing docs in Phase 3 when needed for executable behavior, while broad documentation coverage remains Phase 5 scope.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope
- `.planning/PROJECT.md` — Core value, constraints, active decisions, and Littlebox source summary.
- `.planning/REQUIREMENTS.md` — Phase 3 requirement IDs: ROUT-03, ROUT-04, IPCK-02, LBOX-01 through LBOX-07, and DOCS-04.
- `.planning/ROADMAP.md` — Phase 3 goal, dependency on Phase 2, and success criteria.
- `.planning/STATE.md` — Current project position and Phase 3 concerns.
- `.planning/phases/01-routing-foundation/01-CONTEXT.md` — Route metadata fields, default Xiaohei behavior, mixed-IP grouping intent, and package boundary.
- `.planning/phases/01-routing-foundation/01-VERIFICATION.md` — Verified Phase 1 routing behavior and Littlebox Phase 3 ownership.
- `.planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md` — Canonical pack shape, legacy compatibility decisions, and Xiaohei output path.
- `.planning/phases/02-xiaohei-canonicalization/02-VERIFICATION.md` — Verified canonical Xiaohei pack, route wiring, and legacy compatibility.
- `.planning/phases/02-xiaohei-canonicalization/02-UAT.md` — Accepted Phase 2 baseline and Phase 3 readiness.

### Codebase Maps
- `.planning/codebase/STRUCTURE.md` — Installable package boundary, reference placement, generated asset path conventions, and where to add new reference modules.
- `.planning/codebase/CONVENTIONS.md` — Markdown style, kebab-case references, route registration, prompt examples, and delivery report conventions.
- `.planning/codebase/ARCHITECTURE.md` — Route-first skill entrypoint, progressive references, reference layer responsibilities, asset handling, and anti-patterns.

### Current Skill Package
- `ian-xiaohei-illustrations/SKILL.md` — Route-first workflow, selected-reference loading, shot-list fields, generation loop, QA handoff, and delivery contract.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata table and current Littlebox placeholder.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Canonical pack navigation pattern and output path marker.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — Existing canonical prompt-template shape to mirror for Littlebox.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — Existing canonical QA shape to mirror for Littlebox.
- `README.md` — Existing public routing docs and Phase 1 mixed-IP wording.
- `examples/prompts.md` — Existing route smoke prompts and Phase 1 mixed-IP wording.
- `NOTICE.md` — Current Ian attribution that Phase 3 must extend.
- `LICENSE` — Repository MIT license context.

### Littlebox Source Inspection
- External source repository: `https://github.com/okooo5km/5km-littlebox-illustrations`.
- Inspected commit: `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`), commit subject `docs: refresh littlebox examples`, author `okooo5km <okooo5km@gmail.com>`, commit date `2026-06-06T00:02:51+08:00`.
- Source `LICENSE` — MIT license, `Copyright (c) 2026 okooo5km`.
- Source `NOTICE.md` — Littlebox attribution requirements and derived-documentation credit guidance.
- Source `5km-littlebox-illustrations/SKILL.md` — Littlebox workflow, planning fields, generation rules, output path, and response style.
- Source `5km-littlebox-illustrations/references/visual-language.md` — Littlebox style DNA, palette, background balancing, label style, and visual bans.
- Source `5km-littlebox-illustrations/references/littlebox-ip.md` — Closed-only character identity, arm/tape/lid/proportion rules, failure modes, and recognition rule.
- Source `5km-littlebox-illustrations/references/composition-methods.md` — Composition families, metaphor invention, anti-repeat, spatial, and flow-mark rules.
- Source `5km-littlebox-illustrations/references/language-and-labels.md` — User-language labels, English prompts, label count, and text-failure handling.
- Source `5km-littlebox-illustrations/references/prompt-template.md` — Single-image prompt, planning output format, and edit prompts.
- Source `5km-littlebox-illustrations/references/quality-gate.md` — Pass criteria, fail signals, iteration moves, and delivery judgment.
- Source `5km-littlebox-illustrations/references/examples.md` — Forward-test cases and prompt examples for later smoke/docs use.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ian-xiaohei-illustrations/references/routing.md`: already contains a Littlebox placeholder row with `id`, `display_name`, `output_suffix`, attribution context, and `phase-3-owned` status.
- `ian-xiaohei-illustrations/SKILL.md`: already selects route before loading IP references and contains a generic phase-owned route path for selected `required_references`.
- `ian-xiaohei-illustrations/references/ips/xiaohei/`: provides the canonical pack shape that Littlebox should mirror.
- `NOTICE.md` and `LICENSE`: provide existing legal metadata structure for extending attribution.

### Established Patterns
- The installable package is `ian-xiaohei-illustrations/`; implementation references live inside that directory.
- Route metadata remains human-readable Markdown in `references/routing.md`.
- IP-specific behavior belongs in canonical IP pack files under `references/ips/<route-id>/`.
- Public examples and README can carry user-facing route wording, while the installable behavior belongs in `SKILL.md` and `references/`.
- Generated images are saved under root `assets/<article-slug>-<suffix>/` with ordered English slug filenames.

### Integration Points
- `ian-xiaohei-illustrations/references/routing.md`: activate Littlebox aliases, required references, output suffix, attribution context, and status.
- `ian-xiaohei-illustrations/SKILL.md`: add Littlebox reference list and selected-route planning/generation/QA/output guidance without weakening Xiaohei default behavior.
- `ian-xiaohei-illustrations/references/ips/littlebox/`: add the canonical Littlebox pack.
- `NOTICE.md`: add Littlebox source attribution and inspected commit.
- `README.md` and `examples/prompts.md`: keep existing Phase 1 public routing language coherent if route activation creates stale Phase 3 placeholder wording.

</code_context>

<specifics>
## Specific Ideas

- Treat Littlebox as a separate visual IP, not a Xiaohei variant.
- Keep Littlebox's strongest identity markers intact: closed lid, front-left three-quarter box, dot eyes, side-seam twig arms, amber jagged seam tape, and near-white body.
- Preserve the source skill's background balancing rule because it affects planning and output behavior, not just style.
- Preserve the source skill's language split because the prompt-template behavior depends on English model prompts and user-language labels.
- Use the source forward-test ideas as future validation/smoke material: workflow, overload, and trust.

</specifics>

<deferred>
## Deferred Ideas

- Phase 4: implement one local validation command and checks for Littlebox route aliases, required references, prompt placeholders, output suffix, docs links, smoke prompts, and NOTICE markers.
- Phase 4: add manual smoke prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant behavior.
- Phase 5: refresh README, `examples/prompts.md`, `agents/openai.yaml`, and release checklist around the complete two-IP package.
- Phase 5: decide whether to include adapted Littlebox prompt examples or source-inspired public example sections.
- v2: machine-readable asset manifest, visual regression, third-IP extension schema, and custom user-defined IP imports.

</deferred>

---

*Phase: 3-Littlebox Vertical Slice*
*Context gathered: 2026-06-12*
