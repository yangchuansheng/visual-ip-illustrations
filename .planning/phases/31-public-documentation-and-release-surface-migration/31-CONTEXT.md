# Phase 31: Public Documentation and Release Surface Migration - Context

**Gathered:** 2026-06-15T04:47:33Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 31 migrates public and runtime-facing documentation surfaces to the active product-neutral Seal route. The phase covers README route descriptions, workflow language, output path examples, prompt examples, NOTICE wording, release checklist gates, skill entrypoint wording, and OpenAI agent metadata.

This phase addresses `DOC-01`, `DOC-02`, `DOC-03`, and `DOC-04`. Phase 29 already migrated active route metadata and controller-facing route identity to `seal` / `Seal` / `assets/<article-slug>-seal/`. Phase 30 already debranded the route-local Seal pack. Phase 32 owns validator check-id cleanup, stale Sealos leakage fixtures, full Node test restoration, final release evidence, and UAT.

</domain>

<decisions>
## Implementation Decisions

### README Route Surface

- **D-01:** `README.md` must present the active route as `Seal`, route id `seal`, display name `Seal`, status `active`, output suffix `seal`, and output path `assets/<article-slug>-seal/`.
- **D-02:** `README.md` route inventory, route details, output paths, route reference list, mixed-IP wording, and docs validation tokens must use the Seal route path and pack: `ian-xiaohei-illustrations/references/ips/seal/`, `ian-xiaohei-illustrations/references/ips/seal/source.md`, `assets/<article-slug>-seal/`, and `assets/&lt;article-slug&gt;-seal/`.
- **D-03:** README active route copy must describe Seal as a product-neutral hoodie seal article character with logo-free cap, hoodie, body, props, and scene. It must avoid active Sealos product, brand, cloud platform, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, advertising, and promotional wording.
- **D-04:** README must preserve package identity and compatibility surfaces: `Visual IP Illustrations`, canonical invocation `$visual-ip-illustrations`, installable package directory `ian-xiaohei-illustrations/`, and legacy alias `$ian-xiaohei-illustrations`.

### Prompt Examples

- **D-05:** `examples/prompts.md` normal-flow and route-smoke examples must include product-neutral Seal prompts that select `Seal`, use route-local references under `ian-xiaohei-illustrations/references/ips/seal/`, keep route status `active`, and save outputs under `assets/<article-slug>-seal/`.
- **D-06:** Multi-IP examples must split Xiaohei, Littlebox, Tom, Ferris, and Seal into separate route groups. The Seal group must use `references/ips/seal/`, `references/ips/seal/source.md`, hoodie seal identity note, logo-free note, and `assets/<article-slug>-seal/`.
- **D-07:** Seal prompt examples should use product-neutral article metaphors and Seal actions from Phase 30, such as inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, guide, untangle, weigh, map, compare, and mark. Supporting objects should come from product-neutral article objects such as maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, and small hand-built machines.
- **D-08:** Legacy smoke examples may continue using `$ian-xiaohei-illustrations` to preserve alias coverage, while the route they request must be `Seal` with active product-neutral route wording.

### NOTICE and Release Checklist

- **D-09:** `NOTICE.md` must replace the active Sealos Seal brand boundary with a Seal product-neutral source-history boundary. The active section should describe `Seal`, route id `seal`, route status `active`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`, hoodie seal identity markers, logo-free route behavior, and public rendered Seal sample review.
- **D-10:** `NOTICE.md` may retain bounded historical source wording that says the active Seal route came from the previous Sealos Seal uploaded hoodie seal image, provided the wording is provenance/history only and active route behavior remains product-neutral.
- **D-11:** `RELEASE_CHECKLIST.md` must replace Sealos Seal release gates with Seal release gates covering product-neutral source-history review, hoodie identity review, logo-free wording review, prompt leakage scan, public asset policy, generated sample policy, final Seal release review, and route/output path markers for `seal`.
- **D-12:** `RELEASE_CHECKLIST.md` must clearly preserve Phase 32 ownership of final validator restoration and migration evidence. Phase 31 should update checklist wording and release surfaces, while Phase 32 updates validator check IDs, stale leakage fixtures, Node tests, and final evidence.

### Skill Instructions and Agent Metadata

- **D-13:** `ian-xiaohei-illustrations/SKILL.md` must present Seal as the selectable active route in public/runtime-facing instruction text. The route should keep `Seal`, `seal`, `active`, `references/ips/seal/source.md`, hoodie seal identity note, logo-free note, route-local references, and `assets/<article-slug>-seal/`.
- **D-14:** `SKILL.md` should align broad route descriptions and reference descriptions with Phase 30 product-neutral language. If it mentions uploaded-image markers, the wording should be source-history / hoodie identity context, with active behavior framed as product-neutral Seal.
- **D-15:** `ian-xiaohei-illustrations/agents/openai.yaml` must replace Sealos Seal metadata with Seal metadata. Display name, short description, and default prompt should list Seal as an explicit active product-neutral hoodie seal route while preserving Visual IP Illustrations, Xiaohei default behavior, Tom `gated-authorized`, Ferris `source-reviewed`, and the `$ian-xiaohei-illustrations` compatibility alias.
- **D-16:** Phase 31 should not rename the installable package directory or remove the legacy alias. `Visual IP Illustrations` remains the package identity, and `$ian-xiaohei-illustrations` remains a documented compatibility surface.

### Phase Boundary

- **D-17:** Phase 31 implementation should not add validator fixtures, rewrite validator check IDs, or attempt to make full validator/Node suites green after Phase 30 expected failures. That work belongs to Phase 32.
- **D-18:** Historical GSD artifacts, prior milestone evidence, quick-task summaries, commit history, and bounded source-history notes may retain Sealos wording as historical evidence. Active public docs and runtime-facing docs should use Seal.

### the agent's Discretion

- Choose exact section titles and ordering in README, NOTICE, and RELEASE_CHECKLIST as long as D-01 through D-18 are traceable.
- Choose exact English copy for Seal public prompts, provided they use Phase 30 product-neutral Seal metaphor rules and preserve route path tokens.
- Decide whether to rewrite a Sealos-specific release-checklist section in place or rename it to a Seal section, provided the resulting checklist describes active Seal release behavior and keeps Phase 32 evidence gates visible.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.6 Seal Route Debranding goal, constraints, and active debranding decision.
- `.planning/REQUIREMENTS.md` - `DOC-01`, `DOC-02`, `DOC-03`, and `DOC-04` define the Phase 31 requirement set.
- `.planning/ROADMAP.md` - Phase 31 goal, success criteria, dependency on Phase 30, and Phase 32 validation boundary.
- `.planning/STATE.md` - accumulated route decisions, Phase 29 and Phase 30 completion state, and current milestone position.

### Prior Phase Inputs

- `.planning/phases/29-seal-route-identity-migration/29-CONTEXT.md` - locked route identity decisions for `seal`, `Seal`, `assets/<article-slug>-seal/`, explicit route selection, and Phase 31 deferral.
- `.planning/phases/29-seal-route-identity-migration/29-01-SUMMARY.md` - confirms active route registry, controller, and bounded validator expectations moved to Seal.
- `.planning/phases/29-seal-route-identity-migration/29-VERIFICATION.md` - verifies active Seal route metadata, aliases, default-route isolation, mixed-IP grouping, and stale route drift detection.
- `.planning/phases/29-seal-route-identity-migration/29-UAT.md` - confirms user-visible route selection and Seal output path smoke coverage.
- `.planning/phases/30-seal-pack-debranding/30-CONTEXT.md` - locked route-local Seal debranding decisions.
- `.planning/phases/30-seal-pack-debranding/30-01-SUMMARY.md` - product-neutral Seal source, identity, style, and composition references.
- `.planning/phases/30-seal-pack-debranding/30-02-SUMMARY.md` - product-neutral Seal prompt, edit, QA, and delivery gates.
- `.planning/phases/30-seal-pack-debranding/30-VERIFICATION.md` - verifies Phase 30 route-local debranding and records the Phase 32 validator boundary.
- `.planning/phases/30-seal-pack-debranding/30-UAT.md` - confirms route-local hoodie Seal identity, product-neutral prompt behavior, QA gates, and source record.
- `.planning/phases/30-seal-pack-debranding/deferred-items.md` - exact Phase 32 validator and Node boundary after Phase 30.

### Phase 31 Target Surfaces

- `README.md` - public route inventory, route details, workflow, output paths, route reference list, mixed-IP wording, installation, and usage examples.
- `examples/prompts.md` - copyable normal-flow prompts, legacy smoke prompts, route smoke prompts, multi-IP examples, output path markers, and route-local reference markers.
- `NOTICE.md` - public attribution and route boundary document that must describe Seal as product-neutral, logo-free, and source-history based.
- `RELEASE_CHECKLIST.md` - maintainer release gates, route smoke prompts, attribution review, route-specific sample policy, docs/path marker review, and evidence checklist.
- `ian-xiaohei-illustrations/SKILL.md` - runtime-facing skill instructions, route selection, route reference loading, shot-list fields, generation, QA, save, and delivery surface.
- `ian-xiaohei-illustrations/agents/openai.yaml` - agent-facing display name, short description, default prompt, and implicit invocation metadata.

### Active Seal Route and Pack Contract

- `ian-xiaohei-illustrations/references/routing.md` - active route registry for `seal`, aliases, `default=false`, output suffix, route-local references, output paths, and route status.
- `ian-xiaohei-illustrations/references/ips/seal/index.md` - Seal pack navigation and shared route-local markers.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` - product-neutral source-history authority, hoodie markers, sample policy, drift boundary, and historical source notes.
- `ian-xiaohei-illustrations/references/ips/seal/style-dna.md` - hoodie Seal style and logo-free identity gates.
- `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md` - Seal character identity and cognitive action responsibility.
- `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` - product-neutral article metaphor families, object pool, and action pool.
- `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` - Seal planning fields, generation prompt, edit prompt families, and delivery reminder.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` - Seal QA gates, failure vocabulary, repair moves, and delivery judgment.

### Validation Boundary Context

- `scripts/validate-skill-package.mjs` - current validator contains stale post-Phase-30 Seal migration expectations that Phase 32 owns.
- `scripts/validate-skill-package.test.mjs` - current Node suite contains stale fixture expectations that Phase 32 owns.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, route reference path conventions, and English-default documentation rules.
- `.planning/codebase/STRUCTURE.md` - target file locations and public documentation layer placement.
- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture, progressive reference loading, and public/runtime documentation surfaces.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `README.md`: currently contains the public route inventory, route detail sections, route output path list, route reference list, and mixed-IP wording. It still exposes the old Sealos Seal public surface.
- `examples/prompts.md`: currently contains copyable normal-flow prompts and route smoke prompts. It still uses Sealos Seal in the multi-IP prompt and route-smoke area.
- `NOTICE.md`: currently contains a Sealos Seal brand/canonical image section. It should become a Seal product-neutral source-history section.
- `RELEASE_CHECKLIST.md`: currently contains Sealos release gates and public docs/path marker checks. It should become the Seal release gate while keeping prior Tom/Ferris sections stable.
- `ian-xiaohei-illustrations/SKILL.md`: already uses the active Seal route in most controller surfaces. Phase 31 should polish public/runtime-facing wording and preserve route behavior.
- `ian-xiaohei-illustrations/agents/openai.yaml`: still names Sealos Seal in display metadata and should be updated in Phase 31.

### Established Patterns

- Route-specific public docs repeat route id, display name, aliases, route status, output suffix, route-local pack path, source/rights authority, output path, escaped validation token, and public sample policy.
- Prompt examples include both canonical `$visual-ip-illustrations` normal-flow examples and legacy `$ian-xiaohei-illustrations` route smoke examples.
- NOTICE records attribution/source/boundary per route. Tom and Ferris sections should remain stable; Seal gets the migrated source-history boundary.
- Release checklist sections are explicit, route-specific, and review-oriented. They include source review, prompt leakage scan, public asset policy, generated sample policy, final review, path markers, and validation evidence.

### Integration Points

- Public README and prompt examples must align with `ian-xiaohei-illustrations/references/routing.md` and Phase 30 Seal pack wording.
- Agent metadata must align with `SKILL.md` route selection and package identity.
- Release checklist must mention Phase 32 evidence requirements without implementing them in Phase 31.
- Phase 32 will use the final Phase 31 public/runtime wording to harden stale Sealos leakage checks and restore full validator/Node evidence.

</code_context>

<specifics>
## Specific Ideas

- The active Seal route should read publicly as an explicit product-neutral hoodie seal article character route.
- The strongest visible migration signal is the path and identity pair: `Seal` plus `assets/<article-slug>-seal/`.
- Seal prompt examples should emphasize article cognition and physical metaphors rather than platform or cloud-native metaphors.
- The public sample policy should review hoodie identity, logo-free output, product-neutral route isolation, public sample approval, and historical source attachment.
- The package identity remains Visual IP Illustrations, and the legacy `$ian-xiaohei-illustrations` alias remains part of compatibility smoke coverage.

</specifics>

<deferred>
## Deferred Ideas

- Phase 32 owns validator check-id cleanup, stale Sealos leakage fixtures, docs leakage fixtures, prompt leakage fixtures, Node regression updates, full-pass validator evidence, full-pass Node evidence, `git diff --check`, stale Sealos scan, docs consistency, route migration smoke coverage, and UAT.
- Machine-readable visual-IP manifest, asset manifest, comparison sheets, visual regression, release packaging, and selected-IP install variants remain future requirements.

</deferred>

---

*Phase: 31-Public Documentation and Release Surface Migration*
*Context gathered: 2026-06-15T04:47:33Z*
