# Phase 30: Seal Pack Debranding - Context

**Gathered:** 2026-06-15T03:57:16Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 30 debrands the active Seal route-local reference pack under `ian-xiaohei-illustrations/references/ips/seal/`. The phase covers source authority, identity/style guidance, composition families, prompt/edit templates, QA gates, and delivery notes used after the active `seal` route has been selected.

This phase addresses `PACK-01`, `PACK-02`, `PACK-03`, and `PACK-04`. Phase 29 already migrated active route metadata and controller-facing route identity to `seal` / `Seal` / `assets/<article-slug>-seal/`. Phase 31 owns public documentation, NOTICE, release checklist, skill instructions, and agent metadata. Phase 32 owns validator/test renaming, stale leakage fixtures, final evidence, and UAT.

</domain>

<decisions>
## Implementation Decisions

### Seal Character Authority

- **D-01:** Active route-local files must use `Seal` as the character name and route identity across headings, route notes, identity gates, prompt fields, edit gates, QA failures, and delivery judgment. Existing `Sealos Seal` wording becomes provenance wording inside the source record's historical notes only.
- **D-02:** Active route status in the Seal pack must be `active`. Replace active `brand-owned`, `brand/canonical-image authority`, and promotional route wording with product-neutral character/source wording such as `source-history authority`, `character authority`, and `hoodie seal identity note`.
- **D-03:** Preserve the hoodie Seal visual markers exactly as the character authority: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-04:** Keep the route logo-free through positive gate language: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free, with cap and hoodie chest kept clean as recognition surfaces.

### Product-Neutral Article Metaphors

- **D-05:** Composition and prompt guidance must replace cloud/platform/developer product props with product-neutral article metaphor props. Use objects such as maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, and small hand-built machines.
- **D-06:** Seal action verbs should describe cognitive article work instead of platform work. Prefer inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, guide, lift, connect, untangle, weigh, map, carry, compare, and mark.
- **D-07:** Route-local composition and prompt files must avoid active cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, Sealos platform, advertising, and promotional props. Historical provenance can mention earlier Sealos context only inside `source.md` source-history notes.
- **D-08:** The Seal route should feel like a product-neutral article illustration character route: one core idea, one original metaphor from the current article, sparse hand-drawn linework, generous whitespace, and the hoodie Seal performing the action that makes the metaphor work.

### QA and Repair Gates

- **D-09:** Seal QA gates must cover hoodie Seal identity, logo-free output, product-neutral route isolation, active cognitive participation, sparse visible labels, original article-metaphor quality, and delivery path `assets/<article-slug>-seal/`.
- **D-10:** Route leakage for Phase 30 means active route-local operational files, prompt text, edit prompts, QA judgment, and delivery notes carry product or brand context into the Seal route. The repair path is to restore product-neutral Seal naming, source-history authority, route-local isolation, and product-neutral article metaphors.
- **D-11:** Repair prompts should keep successful content while fixing the named failure: stronger Seal participation, hoodie Seal identity, logo-free cap/hoodie/scene, title removal, text reduction, route leakage, and unaffected-content preservation.
- **D-12:** Visible labels remain sparse, short, and copied exactly in the user's requested language. Image-generation prompts stay English for model consistency.

### Source Record and Sample Policy

- **D-13:** `source.md` must become a product-neutral Seal source record. It should state character route `Seal`, route status `active`, source-history authority, hoodie Seal visual markers, sample policy, drift boundary, and historical source notes.
- **D-14:** `source.md` may record that the active Seal route comes from the previous Sealos Seal uploaded hoodie seal image, with that mention scoped to provenance/history. Active use language should describe a product-neutral hoodie seal character.
- **D-15:** Sample policy should focus on hoodie Seal identity, logo-free quality, source-history attachment, route isolation, and release review for public rendered Seal samples. It should avoid active brand ownership claims and platform promotion.
- **D-16:** The shared failure vocabulary should be renamed from `Sealos ...` gates to product-neutral Seal gates while preserving the substantive checks: generic seal drift, missing cap, missing hoodie, logo/mark artifacts, changed body color, passive placement, over-detailed toy drift, excessive text, route leakage, and copied composition.

### the agent's Discretion

- Choose the exact product-neutral object pool and action list during planning, provided D-05 through D-08 are implemented and cloud/platform terms are removed from active route-local behavior.
- Choose the exact Markdown section order in the seven Seal pack files, provided D-01 through D-16 remain traceable and each file stays compact, scannable, and route-local.
- Choose exact historical-source wording in `source.md`, provided the provenance stays bounded to historical notes and active route behavior remains product-neutral.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` — v1.6 milestone goal, active constraints, Seal identity preservation, and route debranding decision.
- `.planning/REQUIREMENTS.md` — `PACK-01`, `PACK-02`, `PACK-03`, and `PACK-04` define the Phase 30 requirement set.
- `.planning/ROADMAP.md` — Phase 30 goal, success criteria, dependencies, and planned split between route-local pack debranding and later public/validation phases.
- `.planning/STATE.md` — accumulated route decisions, Phase 29 completion state, and the current milestone focus.

### Phase 29 Prerequisite Evidence

- `.planning/phases/29-seal-route-identity-migration/29-CONTEXT.md` — locked route identity decisions `seal`, `Seal`, `assets/<article-slug>-seal/`, and Phase 30 deferral.
- `.planning/phases/29-seal-route-identity-migration/29-01-SUMMARY.md` — created route-local Seal files and confirms active controller paths now point to `references/ips/seal/`.
- `.planning/phases/29-seal-route-identity-migration/29-VERIFICATION.md` — verifies active route metadata, aliases, default-route isolation, mixed-IP grouping, and validation checks.
- `.planning/phases/29-seal-route-identity-migration/29-UAT.md` — user-visible route smoke coverage for selecting Seal and saving to the new Seal path.

### Active Seal Pack Files

- `ian-xiaohei-illustrations/references/ips/seal/index.md` — pack navigation and shared operational markers; currently contains active product/brand language that Phase 30 must debrand.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` — source record; must become product-neutral character authority with historical source notes.
- `ian-xiaohei-illustrations/references/ips/seal/style-dna.md` — style and identity gates; must preserve hoodie Seal markers and remove active platform/brand framing.
- `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md` — character identity and action responsibility; must define Seal as a product-neutral article character.
- `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` — composition families and object pool; must replace platform props with product-neutral article metaphors.
- `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` — planning fields, generation prompt, and edit prompts; must use product-neutral Seal and article metaphor language.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` — QA pass/fail gates and repair moves; must check identity, logo-free output, product-neutral isolation, and metaphor quality.

### Controller and Validation Adjacency

- `ian-xiaohei-illustrations/references/routing.md` — active route registry already points `seal` to the seven Seal pack files and `assets/<article-slug>-seal/`.
- `ian-xiaohei-illustrations/SKILL.md` — active runtime controller loads the Seal pack and already uses route id `seal`; Phase 30 planners should inspect wording only for route-local pack compatibility.
- `scripts/validate-skill-package.mjs` — current validation still has transitional labels; Phase 32 owns final hardening, while Phase 30 should leave route-local wording easy to validate.
- `scripts/validate-skill-package.test.mjs` — current regression suite covers active Seal route parsing; Phase 32 owns stale leakage fixtures and check-id cleanup.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` — Markdown naming, compact ATX section style, reference-file conventions, and English-default docs rules.
- `.planning/codebase/STRUCTURE.md` — location and purpose of installable skill files, route-local references, examples, and generated output paths.
- `.planning/codebase/ARCHITECTURE.md` — instruction-driven skill architecture, progressive reference loading, route-local reference policy, and QA-based error handling.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/ips/seal/`: already contains the seven-file active Seal pack that Phase 29 moved from the former Sealos path. Phase 30 should rewrite contents in place rather than creating a parallel pack.
- `ian-xiaohei-illustrations/references/routing.md`: active `seal` row already points to all seven `references/ips/seal/...` files and `assets/<article-slug>-seal/`.
- `ian-xiaohei-illustrations/SKILL.md`: route selection and generation flow already treats Seal as an explicit active route and loads the route-local pack.

### Established Patterns

- Every explicit IP route has route-local references under `references/ips/<route>/`, with `index.md`, source/rights record when needed, style, identity, composition, prompt, and QA files.
- Route-local files repeat shared route markers so later validators can grep deterministic strings.
- Markdown references use compact ATX sections, short bullets, English-default prose, and explicit route-local file paths.
- Mixed-IP requests isolate Xiaohei, Littlebox, Tom, Ferris, and Seal into separate variant groups with route-local references and output directories.

### Integration Points

- Phase 30 implementation connects directly to `SKILL.md` through `references/ips/seal/prompt-template.md`, `composition-patterns.md`, and `qa-checklist.md`.
- Phase 31 will use Phase 30 wording to update README, examples, NOTICE, release checklist, skill instructions, and agent metadata.
- Phase 32 will use Phase 30 wording to define stale Sealos leakage checks, active Seal prompt leakage fixtures, and final validation evidence.

</code_context>

<specifics>
## Specific Ideas

- The active Seal route should read as a hoodie seal character route for article illustration, with product-neutral cognitive metaphors.
- The hoodie identity remains stable through clothing, face, body, flippers, legs, and tail markers; the conceptual setting changes from platform metaphors to article metaphors.
- The most important phrase shift is from `Sealos Seal brand-owned cloud developer companion` to `Seal active product-neutral hoodie seal article character`.
- Historical Sealos context stays useful as provenance in `source.md`; it should not drive prompts, compositions, QA, or delivery behavior.
- Output path remains `assets/<article-slug>-seal/`.

</specifics>

<deferred>
## Deferred Ideas

- Public README, examples, NOTICE, release checklist, skill entrypoint broad docs, and agent metadata migration belong to Phase 31.
- Validator check-id cleanup, stale Sealos leakage fixtures, docs leakage fixtures, final evidence, and UAT belong to Phase 32.
- Machine-readable visual-IP manifest, asset manifest, comparison sheets, visual regression, and release packaging remain future requirements.

</deferred>

---

*Phase: 30-Seal Pack Debranding*
*Context gathered: 2026-06-15T03:57:16Z*
