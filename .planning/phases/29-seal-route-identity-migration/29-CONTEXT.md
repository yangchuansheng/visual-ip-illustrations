# Phase 29: Seal Route Identity Migration - Context

**Gathered:** 2026-06-15T03:02:25Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 29 migrates the active route identity for the former Sealos Seal route into a product-neutral Seal route. The phase covers routing metadata, route selection aliases, output suffix/path tokens, default-route compatibility, and mixed-IP routing language inside the active route controller surfaces.

This phase addresses `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, and `ROUTE-04`. Route-local Seal pack debranding belongs to Phase 30, public documentation and release-surface migration belongs to Phase 31, and validator/test/release evidence hardening belongs to Phase 32.

</domain>

<decisions>
## Implementation Decisions

### Route Identity Tokens

- **D-01:** Active route metadata for the former Sealos Seal route must use display name `Seal`, route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
- **D-02:** Existing active `sealos` route identity is migration source history. Downstream implementation should migrate active behavior to `seal` while preserving prior planning, quick-task summaries, milestone evidence, and commit history as historical records.
- **D-03:** Required reference paths for the active route should move from `references/ips/sealos/...` to a product-neutral Seal route-local path such as `references/ips/seal/...` when the route table is migrated. Phase 29 should lock the route metadata and controller-facing paths; Phase 30 owns debranding the route-local file contents.

### Seal Alias Boundary

- **D-04:** Seal aliases must describe a seal character and avoid Sealos product, brand, mascot, cloud platform, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, advertising, and promotional wording.
- **D-05:** Use clear product-neutral aliases such as `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, and concise Chinese seal-character aliases. Avoid carrying forward `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, and `Sealos 海豹` as active route aliases.
- **D-06:** Alias matching should remain explicit. Generic ambiguous mascot wording should be handled with existing route-selection caution instead of expanding the Seal route beyond a seal-character route.

### Default Route Compatibility

- **D-07:** Xiaohei remains the only omitted-IP default route with `default=true` and output directory `assets/<article-slug>-illustrations/`.
- **D-08:** Littlebox, Tom, Ferris, and Seal remain explicit selectable routes with `default=false`.
- **D-09:** The Visual IP Illustrations package identity and `$ian-xiaohei-illustrations` legacy invocation stay stable during Phase 29.

### Mixed-IP Route Grouping

- **D-10:** Mixed-IP routing must create separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Seal.
- **D-11:** Each mixed-IP route group must load only its route-local `required_references` and write to its route-specific output directory: `assets/<article-slug>-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/<article-slug>-tom/`, `assets/<article-slug>-ferris/`, and `assets/<article-slug>-seal/`.
- **D-12:** Mixed-IP wording should use the route name `Seal` for the migrated route and keep Tom and Ferris rights/source notes unchanged.

### the agent's Discretion

- Choose the exact product-neutral Chinese seal aliases during implementation as long as they are concise, seal-character focused, and covered by route validation in Phase 32.
- Choose whether Phase 29 renames route-local files immediately or leaves file-content debranding to Phase 30, provided active route metadata, required reference pointers, and controller-facing route identity become `seal` in Phase 29.
- Preserve historical Sealos mentions in prior GSD artifacts and source-history notes without treating them as active route behavior.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` — v1.6 Seal Route Debranding milestone, active constraints, and key decision to debrand Sealos Seal into Seal.
- `.planning/REQUIREMENTS.md` — `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, and `ROUTE-04` are the Phase 29 requirements.
- `.planning/ROADMAP.md` — Phase 29 goal, success criteria, dependencies, and single planned route-identity migration plan.
- `.planning/STATE.md` — prior route decisions, current milestone state, and historical constraints from Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and Visual IP Illustrations migrations.

### Active Route and Controller Surfaces

- `ian-xiaohei-illustrations/references/routing.md` — current route registry, default route rule, aliases, `output_suffix`, `required_references`, mixed-IP grouping, and output path declarations. This is the primary Phase 29 implementation surface.
- `ian-xiaohei-illustrations/SKILL.md` — skill entrypoint route-selection workflow, reference loading, output path handling, mixed-IP shot-list behavior, and delivery rules that currently name Sealos Seal.
- `ian-xiaohei-illustrations/agents/openai.yaml` — agent-facing metadata may mention active selectable routes. Phase 31 owns public/runtime doc migration, but planners should inspect whether Phase 29 route identity needs metadata adjacency notes.

### Validation Context

- `scripts/validate-skill-package.mjs` — existing dependency-free validator defines route table checks, language allowlist entries, output path markers, mixed-IP checks, and current Sealos route expectations.
- `scripts/validate-skill-package.test.mjs` — Node regression suite currently names Sealos route checks and fixtures; Phase 32 owns hardening, but Phase 29 planners should avoid route changes that make later validation impossible.

### Historical Route Context

- `.planning/quick/260614-k62-remove-all-sealos-ip-mascot-logos/260614-k62-SUMMARY.md` — latest durable Sealos Seal route decision before v1.6: logo-free hoodie seal identity.
- `NOTICE.md` — active Sealos Seal brand/canonical-image wording exists here today; Phase 31 owns migration, but Phase 29 planners should understand the historical boundary.
- `README.md` and `examples/prompts.md` — public examples currently name Sealos Seal and `assets/<article-slug>-sealos/`; Phase 31 owns user-facing docs migration.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/routing.md`: acts as the single route registry with Markdown table fields for `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- `ian-xiaohei-illustrations/SKILL.md`: repeats route selection, output path, route-local reference loading, shot-list fields, generation rules, and mixed-IP behavior. Phase 29 work should keep this as the active controller surface.
- `scripts/validate-skill-package.mjs`: already parses route tables, checks route ids, checks single default route, checks output path tokens, and scans route leakage. It provides the later validation mechanism for the migration.

### Established Patterns

- Xiaohei is the only omitted-IP default. Every added route has explicit aliases, `default=false`, route-local references, route-specific output suffix, and route-specific output directory.
- Route-local IP packs live under `ian-xiaohei-illustrations/references/ips/<route>/` with `index.md`, authority/source or rights file when needed, style, IP identity, composition, prompt, and QA references.
- Mixed-IP requests split the same core idea into independent route groups and prevent cross-loading route references.
- Public docs and release checklists repeat route metadata for human discoverability, while the route registry and skill entrypoint drive active behavior.

### Integration Points

- Route identity migration connects `routing.md` route table changes to `SKILL.md` route selection, shot-list fields, output path handling, and mixed-IP group wording.
- Current validation and test files still contain Sealos-specific check IDs and fixtures. Phase 29 can update implementation surfaces, while Phase 32 should convert the validation vocabulary to Seal migration checks.
- Existing docs contain widespread Sealos Seal wording. Phase 29 should touch only controller-route identity surfaces needed for requirements; Phase 31 owns README, examples, NOTICE, release checklist, and metadata polish.

</code_context>

<specifics>
## Specific Ideas

- The new route identity is product-neutral `Seal`; it keeps the existing hoodie seal visual identity but removes product/brand/platform framing from active route behavior.
- The selected route should feel like a seal character route, not a cloud platform mascot route.
- Output path compatibility target for new Seal outputs is `assets/<article-slug>-seal/`.
- The route migration should preserve the package-level Visual IP Illustrations identity and existing default Xiaohei behavior.

</specifics>

<deferred>
## Deferred Ideas

- Route-local Seal pack content debranding, prompt metaphors, edit gates, QA gates, and source record cleanup belong to Phase 30.
- README, examples, NOTICE, RELEASE_CHECKLIST, agent metadata, and public release wording migration belong to Phase 31.
- Validator check renaming, stale Sealos leakage fixtures, Node regression coverage, final evidence, and UAT belong to Phase 32.

</deferred>

---

*Phase: 29-Seal Route Identity Migration*
*Context gathered: 2026-06-15T03:02:25Z*
