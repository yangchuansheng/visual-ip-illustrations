# Phase 15: Validation Hardening - Context

**Gathered:** 2026-06-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 15 delivers local validation hardening for the four-route mascot-aware package. Maintainers should be able to run the dependency-free validator and Node test suite locally and get deterministic coverage for Ferris route behavior, full-pack references, source/trademark boundaries, public documentation markers, release gates, route leakage, public asset gates, generated sample gates, and final green evidence.

The phase is bounded to FVAL-01 through FVAL-07:

- FVAL-01: local validator success after v1.2 roadmap initialization.
- FVAL-02: Ferris route row, aliases, `default=false`, output suffix, required references, route status, source attribution context, and trademark boundary markers.
- FVAL-03: Ferris canonical pack files, prompt placeholders, QA markers, source markers, and trademark-boundary markers.
- FVAL-04: README, examples, agent metadata, NOTICE, release checklist, raw/escaped Ferris output path tokens, and Ferris smoke prompts.
- FVAL-05: route leakage boundaries across Xiaohei, Littlebox, and Tom packs.
- FVAL-06: Ferris public example asset gates tied to release checklist approval policy.
- FVAL-07: Node tests for four-route parser behavior, stable ordering, Ferris failure messages, source/trademark fixtures, and full-pass output.

</domain>

<decisions>
## Implementation Decisions

### Validator Runtime and Scope
- **D-01:** Phase 15 updates the existing dependency-free Node validator only: `scripts/validate-skill-package.mjs`.
- **D-02:** The validator must stay local-only, deterministic, and dependency-free. It should preserve the current CLI line shape: `[PASS] ID message`, `[FAIL] ID message`, `[SKIP] ID message`, then `Summary: total=N passed=N failed=N skipped=N`.
- **D-03:** Check order remains stable and intentional. New or changed checks should live where they naturally extend the existing route, pack, docs, release, and boundary sections.
- **D-04:** Failure messages must name actionable check IDs and repo-relative paths so maintainers can repair the exact source file.

### Ferris Route and Pack Expectations
- **D-05:** `ROUTE-FERRIS-001` should validate Ferris as the explicit `source-reviewed` Rust-community mascot route with aliases `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- **D-06:** Ferris `required_references` in `ian-xiaohei-illustrations/references/routing.md` are the full seven-file canonical pack: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-07:** `source.md` remains the Ferris source/trademark authority. The full pack consumes that authority; downstream validator logic should avoid collapsing Ferris back to a source-only route.
- **D-08:** `ROUTE-REFS-001` should expect Ferris reference count `7`, ensure every Ferris reference resolves inside `ian-xiaohei-illustrations/references/ips/ferris/`, and keep Xiaohei, Littlebox, and Tom counts aligned with their existing contracts.
- **D-09:** Ferris pack validation should cover file existence, non-empty contents, source-reviewed markers, output path, prompt planning fields, prompt generation fields, QA categories, source/trademark markers, and route leakage markers.

### Metadata and Public Documentation Gates
- **D-10:** `ian-xiaohei-illustrations/agents/openai.yaml` should be validated as a four-route metadata surface: Xiaohei, Littlebox, Tom, and Ferris all appear in display copy; omitted visual IP still means default Xiaohei; Tom and Ferris remain explicit selectable routes.
- **D-11:** Metadata validation should preserve Tom as `gated-authorized` and Ferris as `source-reviewed`, with no official Rust affiliation or endorsement claim implied by the Ferris wording.
- **D-12:** Public docs validation should keep Phase 14 surfaces aligned: `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md`.
- **D-13:** Phase 15 may update validation docs, evidence, planning artifacts, validator code, and test expectations. Product docs churn stays limited to genuine source inconsistencies exposed by validator expectations.

### Release Asset and Generated Sample Gates
- **D-14:** Validator logic should accept the Phase 14 release checklist wording for Ferris public asset policy and generated sample policy.
- **D-15:** Pending Ferris release checklist records are valid records when public rendered Ferris assets are absent from `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`.
- **D-16:** Completed public rendered Ferris asset approval requires reviewer, valid ISO date, approval status, allowed directories, release channels, and trademark/endorsement-safe outcome data.
- **D-17:** Generated sample gates should distinguish workspace review outputs under `assets/<article-slug>-ferris/` from public rendered samples copied into public sample directories.
- **D-18:** Public asset gates should stay local filesystem checks. They should not create generated assets, read external network resources, or require image-generation runtime.

### Parser and Node Test Coverage
- **D-19:** `scripts/validate-skill-package.test.mjs` should cover the full four-route parser behavior with Ferris seven-file `required_references`.
- **D-20:** Node tests should cover Ferris full-pack route expectations, route drift failure messages, source/trademark fixture drift, public asset approval parsing, generated sample approval parsing, route leakage failures, stable check ordering, and full green output.
- **D-21:** Existing tests that still expect Ferris `required_references=references/ips/ferris/source.md` should be updated to the seven-file canonical pack expectation.
- **D-22:** Full pass tests should assert the validator's final summary using the new total check count after Phase 15 changes, with all checks passing and `skipped=0`.

### Current Failure Baseline and Exit Evidence
- **D-23:** Current validator baseline from main is `Summary: total=53 passed=48 failed=5 skipped=0`.
- **D-24:** The current failing validator checks are `AGENT-TOM-001`, `ROUTE-FERRIS-001`, `ROUTE-REFS-001`, `RELEASE-FERRIS-001`, and `BOUNDARY-FERRIS-IMG-001`.
- **D-25:** Current Node baseline from Phase 14 verifier is `tests=23`, `pass=13`, `fail=10`.
- **D-26:** Phase 15 completion evidence should include successful runs of `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` in the same change set.

### the agent's Discretion
- Planners may add new check IDs for Ferris pack files, Ferris prompt markers, Ferris QA markers, Ferris leakage, or generated sample gates when that makes failures more actionable. The stable CLI shape, deterministic ordering, and FVAL coverage are locked.
- Planners may refine exact marker strings when they align with Phase 14 wording and the Ferris route-local source authority.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Scope and Prior Decisions
- `.planning/PROJECT.md` — v1.2 Ferris milestone goals, constraints, source/trademark boundary, and validation target.
- `.planning/REQUIREMENTS.md` — FVAL-01 through FVAL-07 and v1.2 out-of-scope boundaries.
- `.planning/ROADMAP.md` — Phase 15 goal, success criteria, dependency on Phase 14, and three planned Phase 15 plan slices.
- `.planning/STATE.md` — carried-forward Phase 13/14 decisions, current failure baseline ownership, and current Phase 15 readiness.
- `.planning/phases/12-ferris-canonical-pack/12-CONTEXT.md` — locked Ferris seven-file pack, prompt fields, QA categories, output path, and Phase 15 validation deferral.
- `.planning/phases/13-skill-controller-integration/13-CONTEXT.md` — locked Ferris controller route, full required references, mixed-IP grouping, and output path behavior.
- `.planning/phases/14-docs-examples-and-release-surface/14-CONTEXT.md` — locked public docs, metadata, NOTICE, release checklist, and Phase 15 validator/test split.
- `.planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md` — Phase 14 pass evidence and deferred validator/Node baselines.
- `.planning/phases/14-docs-examples-and-release-surface/14-UAT.md` — Phase 14 UAT pass evidence and deferred validator/Node baselines.

### Validation Implementation
- `scripts/validate-skill-package.mjs` — dependency-free validator, parser helpers, current ordered check matrix, release approval parser, route reference resolver, public asset gate, and CLI output shape.
- `scripts/validate-skill-package.test.mjs` — Node test suite, route parser expectations, fixture mutation helpers, failure-message assertions, approval parsing tests, and full-pass output assertions.
- `.planning/codebase/TESTING.md` — historical testing map; live Phase 15 work should use current validator and Node test files as source of truth.
- `.planning/codebase/CONVENTIONS.md` — Markdown/YAML style, repo-relative path conventions, and validation-doc conventions.
- `.planning/codebase/STRUCTURE.md` — installable package boundary, public docs locations, examples directories, and generated asset path conventions.

### Route and IP Sources
- `ian-xiaohei-illustrations/references/routing.md` — four-route metadata table, Ferris seven-file `required_references`, aliases, output suffix, route status, and route grouping behavior.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` — Ferris pack navigation and route-local contract.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` — Ferris source/trademark authority, route status, public sample policy, and review owner.
- `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` — Ferris style and trademark-sensitive visual constraints.
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` — Ferris identity and route-isolation rules.
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` — Ferris cognitive-action metaphor families and route leakage constraints.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` — Ferris planning/generation/edit prompt markers and source/trademark note.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` — Ferris QA categories, repair gates, and delivery judgment markers.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — protected-route release gate precedent for public asset approval parsing.

### Public and Release Surfaces
- `README.md` — public Ferris route guidance, output paths, canonical pack path, source/trademark authority, maintainer validation commands, and Phase 15 boundary.
- `examples/prompts.md` — route smoke fixtures, Ferris planning/generation/smoke prompts, four-route mixed prompts, and maintainer route audit prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml` — compact four-route metadata surface and implicit invocation policy.
- `NOTICE.md` — Ferris source attribution and Rust trademark boundary wording.
- `RELEASE_CHECKLIST.md` — automated validation commands, Ferris public asset policy, generated sample policy, release review records, and Phase 15 evidence boundary.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-skill-package.mjs`: `parseMarkdownTable`, `splitRouteCell`, `routeRows`, `routeById`, `routeReferencePaths`, `safeReferencePath`, and `assertArrayIncludes` already support route-table validation.
- `scripts/validate-skill-package.mjs`: `parsePublicRouteSampleApproval`, `parsePublicTomSampleApproval`, and `parsePublicFerrisSampleApproval` already parse release checklist approval records and can be extended for generated sample gates.
- `scripts/validate-skill-package.mjs`: `Results.render()` already centralizes deterministic `[PASS]/[FAIL]/[SKIP]` output and summary formatting.
- `scripts/validate-skill-package.test.mjs`: `copyFixture`, `replaceInFixture`, and fixture validator helpers already support local mutation tests without network or package dependencies.

### Established Patterns
- Validator checks are an ordered array of `defineCheck(id, message, run)` entries.
- The validator collects all failures before exiting nonzero, which preserves multi-failure visibility for maintainers.
- Tests assert both positive full-pass output and negative fixture drift for route metadata, docs markers, source markers, public asset gates, and failure message paths.
- Public approval parsing treats pending records as incomplete approval records; public asset directory contents decide whether incompleteness fails the gate.
- Route isolation is tested through forbidden marker scans across non-target route packs.

### Integration Points
- `ROUTE-FERRIS-001` and `ROUTE-REFS-001` are the primary current implementation gaps for Ferris full-pack route expectations.
- `AGENT-TOM-001` currently needs metadata wording updated to the Phase 14 four-route metadata surface while preserving Tom explicit route semantics.
- `RELEASE-FERRIS-001` and `BOUNDARY-FERRIS-IMG-001` need to match Phase 14 release checklist wording for public asset policy and generated sample policy.
- Existing full-pass Node tests must update expected route references, total check count, and full-pass summary after Phase 15 validator changes.

</code_context>

<specifics>
## Specific Ideas

- Auto-selected decision set came from the request's `<gray_areas_auto_decisions>` block and is locked for planning.
- The validator should treat Ferris as a full route-local pack plus source authority, matching Phase 12 and Phase 13 decisions.
- Phase 14's release checklist wording is the expected source for public Ferris asset and generated sample policy validation.
- The Phase 15 plan should produce green local evidence for both validator and Node tests before closing the phase.

</specifics>

<deferred>
## Deferred Ideas

- Machine-readable mascot/source/trademark manifests remain v2 work.
- Automated visual likeness judgment remains outside v1.2 validation.
- Release packaging scripts, visual regression, asset manifests, and route selector tooling remain v2 work.
- Broad product docs rewrites should stay outside Phase 15 unless validator expectations reveal a real source inconsistency.

</deferred>

---

*Phase: 15-Validation Hardening*
*Context gathered: 2026-06-13*
