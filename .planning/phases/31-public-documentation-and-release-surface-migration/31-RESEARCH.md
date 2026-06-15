# Phase 31 Research: Public Documentation and Release Surface Migration

## User Constraints

Source: `.planning/phases/31-public-documentation-and-release-surface-migration/31-CONTEXT.md`.

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

### Deferred Ideas

- Phase 32 owns validator check-id cleanup, stale Sealos leakage fixtures, docs leakage fixtures, prompt leakage fixtures, Node regression updates, full-pass validator evidence, full-pass Node evidence, `git diff --check`, stale Sealos scan, docs consistency, route migration smoke coverage, and UAT.
- Machine-readable visual-IP manifest, asset manifest, comparison sheets, visual regression, release packaging, and selected-IP install variants remain later requirements.

## Project Constraints from AGENTS.md

- User-facing conversation should be Simplified Chinese and start with `爸爸`. Repository documentation, task files, commit messages, and PR text should be English. [VERIFIED: AGENTS.md]
- The repository is documentation-driven. Use Markdown/YAML edits, keep the skill package lightweight, and avoid new build/runtime dependencies. [VERIFIED: `.planning/codebase/STACK.md`]
- GSD workflow artifacts should stay synchronized through planning and commits. [VERIFIED: AGENTS.md]
- Phase 31 is documentation planning only; execution belongs to `$gsd-execute-phase 31`. [VERIFIED: user request]

## Standard Stack

- Markdown documentation and YAML metadata are the only implementation surfaces for this phase. [VERIFIED: `.planning/codebase/STACK.md`, local file scan]
- No package-manager install is needed. [VERIFIED: no `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, or `go.mod` in the repository root]
- Deterministic verification should use existing shell, `rg`, `node -e`, and `git diff --check` commands. [VERIFIED: prior phase summaries and local scripts]

## Architecture Patterns

- Public docs live in `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`; runtime-facing skill instructions live in `ian-xiaohei-illustrations/SKILL.md`; agent-facing metadata lives in `ian-xiaohei-illustrations/agents/openai.yaml`. [VERIFIED: `.planning/codebase/ARCHITECTURE.md`]
- Route facts come from `ian-xiaohei-illustrations/references/routing.md` and the route-local Seal pack under `ian-xiaohei-illustrations/references/ips/seal/`. [VERIFIED: `routing.md`, Phase 29/30 summaries]
- The active Seal contract is `Seal`, route id `seal`, status `active`, output suffix `seal`, source-history authority `references/ips/seal/source.md`, and output path `assets/<article-slug>-seal/`. [VERIFIED: `routing.md`, `source.md`, Phase 29/30 verification]
- Historical Sealos provenance is allowed only as bounded source history. Active route behavior uses product-neutral Seal wording. [VERIFIED: Phase 31 context D-10 and D-18]

## Don't Hand-Roll

- Do not introduce a new validator script, new fixtures, or a Node test rewrite in Phase 31; Phase 32 owns full validator restoration and stale leakage fixtures. [VERIFIED: Phase 31 context D-17 and Phase 30 verification]
- Do not create a new route manifest format or rename the skill package directory; preserve `Visual IP Illustrations`, `$visual-ip-illustrations`, `ian-xiaohei-illustrations/`, and `$ian-xiaohei-illustrations`. [VERIFIED: Phase 31 context D-04, D-16]
- Do not modify route-local Seal pack behavior in this phase except as context read material; Phase 30 already debranded it. [VERIFIED: Phase 30 summaries]

## Common Pitfalls

- README and examples can look migrated while route path tokens still point to `assets/<article-slug>-sealos/` or `references/ips/sealos/`. Verification needs a route path marker scan. [VERIFIED: current `README.md` and `examples/prompts.md` grep]
- Metadata is short and easy to miss; `openai.yaml` currently still mentions Sealos Seal and uploaded-image authority. Verification needs an agent metadata scan. [VERIFIED: current `openai.yaml`]
- NOTICE may keep historical Sealos source context, but the active section must read as Seal product-neutral source-history. Verification should distinguish historical source notes from active route behavior. [VERIFIED: Phase 31 context D-10]
- Global validator and Node tests are expected to remain in the Phase 32 boundary after Phase 30. Phase 31 should record this boundary in release checklist wording and plan verification. [VERIFIED: Phase 30 verification]

## Code Examples

Use these exact target markers in plans and implementation instructions:

- Route display: `Seal`
- Route id: `seal`
- Route status: `active`
- Output suffix: `seal`
- Output path: `assets/<article-slug>-seal/`
- Escaped output path: `assets/&lt;article-slug&gt;-seal/`
- Route-local pack: `ian-xiaohei-illustrations/references/ips/seal/`
- Source-history authority: `ian-xiaohei-illustrations/references/ips/seal/source.md`
- Package identity: `Visual IP Illustrations`
- Canonical invocation: `$visual-ip-illustrations`
- Installable package directory: `ian-xiaohei-illustrations/`
- Legacy alias: `$ian-xiaohei-illustrations`

## Validation Architecture

- `git diff --check` verifies whitespace safety for planning and eventual implementation. [VERIFIED: prior phase summaries]
- Focused public docs active Seal scan should cover `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, and `ian-xiaohei-illustrations/agents/openai.yaml` for stale active route markers. [VERIFIED: Phase 31 context]
- NOTICE needs a targeted assertion that active Seal source-history markers exist and bounded historical provenance remains isolated. [VERIFIED: Phase 31 context D-09 and D-10]
- Route path marker scan should assert all five output paths remain present and Seal uses `assets/<article-slug>-seal/` plus `assets/&lt;article-slug&gt;-seal/`. [VERIFIED: `routing.md` output paths]
- Agent metadata scan should assert `openai.yaml` contains `Seal`, `active`, `product-neutral hoodie seal`, `Visual IP Illustrations`, `$ian-xiaohei-illustrations`, `gated-authorized`, and `source-reviewed`, while stale Sealos active metadata is absent. [VERIFIED: Phase 31 context D-15]

## Package Legitimacy Audit

No package installs are planned for Phase 31. Package legitimacy gate has no packages to audit. [VERIFIED: phase scope and repository stack]

## Security Domain

This phase changes public documentation and runtime instruction text. Trust boundaries are maintainer-to-repository docs and skill user-to-agent instruction interpretation. Security-relevant mitigations are route identity integrity, source-history boundary clarity, and release-gate traceability. [VERIFIED: phase scope]

## Research Complete

Phase 31 can be planned as one execute plan with three documentation tasks: README/examples, NOTICE/release checklist, and SKILL/agent metadata plus deterministic scans. No external research, new dependency, schema migration, UI spec, or human setup is required.
