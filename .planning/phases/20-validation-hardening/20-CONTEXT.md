# Phase 20: Validation Hardening - Context

**Gathered:** 2026-06-14T00:00:00+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 20 turns the completed Sealos Seal route, canonical pack, controller integration, public docs, examples, metadata, NOTICE, and release gates into deterministic local validation. Maintainers should be able to run the dependency-free validator and Node tests to confirm the five-route package is release-ready, with Sealos Seal checks covering route metadata, uploaded-image identity markers, brand boundaries, docs markers, route leakage, public asset policy, generated sample policy, stable ordering, actionable failure output, and final evidence.

Phase 20 covers SVAL-01 through SVAL-07 only. It should harden `scripts/validate-skill-package.mjs`, harden `scripts/validate-skill-package.test.mjs`, and record final validation evidence. It should not change Sealos identity rules, route semantics, public docs, prompt copy, agent metadata, NOTICE, or release checklist wording except for narrow corrections required to make already-locked Phase 16-19 contracts consistently verifiable.

</domain>

<decisions>
## Implementation Decisions

### Validator Scope and Check Matrix

- **D-01:** Treat the current validator baseline as the starting point: `node scripts/validate-skill-package.mjs` currently passes with `Summary: total=66 passed=66 failed=0 skipped=0`, and `node --test scripts/validate-skill-package.test.mjs` currently passes with 34 tests.
- **D-02:** Phase 20 should expand the validator from the Phase 16 bounded Sealos checks into full v1.3 checks across the Sealos route row, Sealos canonical pack, SKILL controller behavior, README, examples, metadata, NOTICE, release checklist, route leakage, public asset policy, generated sample policy, and final pass output.
- **D-03:** Keep validation dependency-free and local. Do not introduce a package manager, external test framework, CI service, image model, browser automation, or visual-likeness runtime.
- **D-04:** Preserve stable ordered check IDs and deterministic output. Existing check order is asserted by Node tests; new Sealos Phase 20 checks should be appended or inserted intentionally with tests that lock the new order.
- **D-05:** New check IDs should be route-specific and actionable, following the existing matrix style such as `ROUTE-SEALOS-*`, `REFS-SEALOS-*`, `PROMPT-SEALOS-*`, `QA-SEALOS-*`, `DOC-SEALOS-*`, `BOUNDARY-SEALOS-*`, and `SMOKE-SEALOS-*`.
- **D-06:** Failure messages must include the check ID, relevant file path, missing or forbidden marker, and enough route context for a maintainer to repair the correct surface.

### Sealos Route and Canonical Pack Coverage

- **D-07:** The route metadata check must verify the `sealos` row in `ian-xiaohei-illustrations/references/routing.md`: display name `Sealos Seal`, aliases `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal`, `default=false`, `output_suffix=sealos`, status `brand-owned`, source authority, brand context, canonical image status `uploaded-image-canonical`, drift boundary `uploaded-image-locked`, raw path, and escaped path.
- **D-08:** The validator must require every Sealos canonical pack file to exist and be non-empty: `index.md`, `source.md`, `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-09:** Sealos pack checks must verify shared route-local markers across the operational files: route id `sealos`, route status `brand-owned`, `source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, `assets/<article-slug>-sealos/`, public-sample gate wording, and the Sealos route block.
- **D-10:** Sealos identity checks must verify the full uploaded-image marker list wherever the contract requires it: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-11:** Sealos prompt checks must verify planning fields, English generation prompt markers, `Brand/canonical-image note`, `Mascot state`, `Mascot action`, supporting object pool, visible label rule, save reminder, and the six edit prompt families.
- **D-12:** Sealos QA checks must verify failure categories and repair gates for generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, missing brand/canonical-image note, and missing output path.

### Public Docs, Metadata, and Smoke Coverage

- **D-13:** Public-doc validation should reflect the completed Phase 19 surface rather than Phase 16 placeholder wording. The old `DOC-SEALOS-P16-001` intent should be upgraded or supplemented with Phase 19 docs checks.
- **D-14:** README checks should verify Sealos as an explicit `brand-owned` route, all aliases, `sealos` route id, `default=false`, output suffix, raw and escaped output paths, route-local directory, source authority, uploaded-image authority, prior exploration boundary, brand/logo boundary, and public sample release gate.
- **D-15:** `examples/prompts.md` checks should cover Sealos planning prompt, generation prompt, route smoke prompt, five-IP mixed planning prompt, five-IP mixed generation prompt, and final mixed route smoke prompt.
- **D-16:** Metadata checks should verify `ian-xiaohei-illustrations/agents/openai.yaml` names Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal while preserving default Xiaohei wording and `allow_implicit_invocation: true`.
- **D-17:** NOTICE and release checklist checks should verify Sealos brand/canonical-image boundary, uploaded mascot image authority, prior exploration boundary, public asset policy, generated sample policy, validator evidence gate, final release review, and required review fields.
- **D-18:** Smoke fixture checks should preserve five-route parser behavior: omitted visual IP selects Xiaohei, explicit Sealos aliases select Sealos Seal, and mixed-IP requests produce separate Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route groups with route-local paths and notes.

### Leakage and Boundary Gates

- **D-19:** Add Sealos leakage checks so Xiaohei, Littlebox, Tom, and Ferris canonical packs stay free of Sealos Seal identity rules, Sealos brand mascot wording, uploaded-image markers, `brand-owned` Sealos route status, and `references/ips/sealos/source.md`.
- **D-20:** Sealos leakage checks should avoid flagging allowed routing or mixed-IP controller surfaces where all route names appear by design. The forbidden scan should focus on non-Sealos route-local packs and route-specific docs where Sealos identity text would be drift.
- **D-21:** Preserve existing Tom and Ferris leakage checks while adding Sealos leakage tests. A Phase 20 regression should prove each sensitive route keeps its own boundary.
- **D-22:** Public asset gates must keep rendered Sealos files out of `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` until `RELEASE_CHECKLIST.md` records a complete Sealos public asset approval with reviewer, date, approval status, allowed directories, release channels, uploaded-image identity outcome, and brand-logo outcome.
- **D-23:** Generated Sealos sample policy must be distinct from public asset approval. Internal review samples may live under `assets/<article-slug>-sealos/` with brand/canonical-image context, while public publication still depends on the public asset approval gate.
- **D-24:** Add parser and fixture coverage for generated Sealos sample approval fields: reviewer, date, approval status, internal review directories, public directories, release channels, uploaded-image identity outcome, and brand-logo outcome.

### Test Hardening and Evidence

- **D-25:** Node tests should lock the expanded full-pass matrix, stable ordering, five-route parser behavior, Sealos failure messages, brand/canonical-image fixtures, leakage fixtures, public sample parser behavior, generated sample parser behavior, placeholder-date rejection, and final success summary.
- **D-26:** Fixture tests should mutate real files in temporary copies, matching the existing validator test style. Required negative fixtures include route alias drift, source marker drift, prompt marker drift, QA marker drift, docs marker drift, metadata drift, release checklist drift, Sealos leakage into another pack, public asset approval placeholders, generated sample approval placeholders, and public asset presence without complete approval.
- **D-27:** The final validation evidence must record `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` results in Phase 20 verification artifacts.
- **D-28:** Phase 20 final evidence should explicitly state the final validator total, Node test count, failures, skipped count, and `git diff --check` exit state.
- **D-29:** Keep performance and stability ahead of broad refactors. Prefer small helper functions and route-specific marker arrays over reshaping the validator architecture.
- **D-30:** Keep the implementation focused on objective text/package markers. Automated visual likeness judgment remains out of scope for v1.3.

### Plan Shape

- **D-31:** Plan 20-01 should harden validator implementation for Sealos route, pack, docs, leakage, uploaded-image, brand, public asset, and generated sample gates.
- **D-32:** Plan 20-02 should harden Node test coverage for new check ordering, parser behavior, fixtures, failure messages, public/generated sample gates, and full pass output.
- **D-33:** Plan 20-03 should record final validation evidence and close Phase 20 planning state.
- **D-34:** Each plan should run the validator, Node test suite, and `git diff --check` before completion.

### the agent's Discretion

The user already supplied the Phase 20 discussion priorities and authorized autonomous execution inside this subagent. The selected defaults are dependency-free validation, deterministic marker checks, route-specific fixture tests, stable check ordering, no public sample publication, no visual-likeness automation, and final evidence recorded through GSD verification artifacts.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 20 goal, dependency on Phase 19, SVAL-01 through SVAL-07, success criteria, and the three planned Phase 20 plan slots.
- `.planning/REQUIREMENTS.md` — Defines the pending validation requirements SVAL-01 through SVAL-07 and v1.3 out-of-scope boundaries.
- `.planning/PROJECT.md` — Defines the v1.3 Sealos Seal milestone, uploaded-image authority, brand boundary, fixed marker list, no-build-runtime constraint, and dependency-free validation direction.
- `.planning/STATE.md` — Current state says Phase 19 is verified and Phase 20 is ready to discuss and plan.

### Prior Phase Decisions and Evidence

- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-CONTEXT.md` — Locks uploaded-image authority, fixed markers, route metadata, public sample policy, NOTICE/release surfaces, and Phase 16 validator boundary.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-VERIFICATION.md` — Evidence for the initial Sealos source, route, public sample gate, and 66-check / 34-test baseline.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-UAT.md` — UAT evidence for maintainer-readable Sealos brand/source, route metadata, sample gate, and command behavior.
- `.planning/phases/17-sealos-seal-canonical-pack/17-CONTEXT.md` — Locks Sealos pack shape, deterministic marker strings, planning fields, prompt contract, composition vocabulary, QA taxonomy, edit prompts, and Phase 20 validation readiness markers.
- `.planning/phases/17-sealos-seal-canonical-pack/17-VERIFICATION.md` — Evidence for all seven Sealos pack files, planning fields, prompts, edit suite, composition coverage, QA gates, and command results.
- `.planning/phases/17-sealos-seal-canonical-pack/17-UAT.md` — UAT evidence confirming Sealos pack availability and route-local operational behavior.
- `.planning/phases/18-skill-controller-integration/18-CONTEXT.md` — Locks SKILL controller behavior, alias selection, default preservation, mixed-IP grouping, Sealos output path, and brand/canonical-image delivery note.
- `.planning/phases/18-skill-controller-integration/18-VERIFICATION.md` — Evidence for Sealos controller integration, five-IP grouping, paths, delivery note, and safety commands.
- `.planning/phases/18-skill-controller-integration/18-UAT.md` — UAT evidence confirming explicit Sealos route behavior and default-route preservation.
- `.planning/phases/19-docs-examples-and-release-surface/19-CONTEXT.md` — Locks public README, examples, metadata, NOTICE, release checklist, docs consistency, and Phase 20 ownership decisions.
- `.planning/phases/19-docs-examples-and-release-surface/19-VERIFICATION.md` — Required Phase 19 verification evidence for docs markers, public surfaces, current validator 66/66, Node 34/34, and `git diff --check`.
- `.planning/phases/19-docs-examples-and-release-surface/19-UAT.md` — Required Phase 19 UAT evidence for README, examples, metadata, NOTICE, release gates, cross-doc consistency, and local validation commands.

### Validation Implementation Targets

- `scripts/validate-skill-package.mjs` — Phase 20 implementation target. Current helpers parse frontmatter, simple YAML, Markdown tables, Markdown links, route rows, output path tokens, release approval lines, public asset approvals, and existing Tom/Ferris/Sealos boundary gates.
- `scripts/validate-skill-package.test.mjs` — Phase 20 Node test target. Current tests lock 66 check IDs, five-route parser primitives, approval parser behavior, drift fixtures, leakage fixtures, and public asset gates.

### Runtime and Routing Surfaces

- `ian-xiaohei-illustrations/SKILL.md` — Five-route controller surface that Phase 20 should validate for Sealos aliases, explicit route behavior, required references, planning/generation/QA/edit paths, mixed-IP grouping, Sealos output path, and brand/canonical-image delivery note.
- `ian-xiaohei-illustrations/references/routing.md` — Five-route metadata authority for aliases, default flags, output suffixes, required references, route status, Sealos brand metadata, raw/escaped path tokens, and mixed-IP output directories.

### Sealos Route-Local Pack

- `ian-xiaohei-illustrations/references/ips/sealos/index.md` — Pack navigation, route contract, shared failure categories, operational coherence, public sample gate, and Phase 20 ownership note.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Brand/canonical-image authority for uploaded mascot image, fixed markers, prior exploration boundary, sample policy, distribution boundary, drift boundary, and review owner.
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md` — Sparse article-illustration style, identity markers, visual vetoes, and stable gates.
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md` — Mascot identity, reliable cloud developer companion role, action verbs, recognition gates, route boundary, and failure modes.
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` — Structure families, cloud-developer metaphor domains, supporting object pool, mascot action pool, label rules, and brand/identity gates.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` — Planning output format, single-image prompt, brand/canonical-image note, canonical image note, edit prompts, route block, save reminder, and output path markers.
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` — Route-local QA authority for identity drift, route leakage, missing brand/path context, repair moves, unaffected-content preservation, and delivery judgment.

### Public and Release Surfaces

- `README.md` — Public Sealos route guidance, aliases, output path, uploaded-image authority, brand/logo boundary, five-route examples, package map, and validation commands.
- `examples/prompts.md` — Copyable route prompts and smoke fixtures for default Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and five-route mixed variants.
- `NOTICE.md` — Public boundary record for Sealos Seal brand/canonical-image authority and public sample review fields.
- `RELEASE_CHECKLIST.md` — Source of public asset policy, generated sample policy, uploaded-image identity review, brand/logo wording review, prompt leakage scan, validator evidence gate, and final release review.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Discovery metadata for all five routes and implicit invocation policy.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `scripts/validate-skill-package.mjs`: Already has `parseMarkdownTable`, `routeById`, `routeReferencePaths`, `outputPathTokens`, `assertMarkers`, `assertIncludes`, `assertNoMarkers`, public Tom/Ferris/Sealos approval parsers, route checks, docs checks, release checks, leakage checks, public asset gates, and a final summary printer.
- `scripts/validate-skill-package.test.mjs`: Already uses temp repo fixtures, `replaceInFixture`, route drift tests, source marker drift tests, parser primitive tests, approval parser tests, leakage tests, and full matrix order assertions.
- `ian-xiaohei-illustrations/references/ips/sealos/*.md`: The Sealos pack already repeats deterministic route, identity, prompt, QA, output path, and failure markers designed for Phase 20 validation.
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `openai.yaml`: Phase 19 already created Sealos public markers and smoke prompt surfaces that should become validator expectations.

### Established Patterns

- Validation is a single dependency-free Node script plus `node --test`.
- Checks use deterministic marker assertions over Markdown/YAML files instead of generated-image analysis.
- Sensitive routes have route-local authority files and release-checklist approval parsers.
- Public rendered assets remain blocked until release checklist approval fields are complete.
- Leakage checks scan non-target route packs for route-specific markers that would signal boundary drift.
- Tests copy the repo into temporary directories, mutate one marker, run the validator, and assert the failing check ID plus path-specific output.

### Integration Points

- Phase 20 should primarily edit `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- Phase 20 may create or update `.planning/phases/20-validation-hardening/20-VERIFICATION.md` and `20-UAT.md` during final evidence capture.
- Phase 20 should keep current public docs and Sealos pack content stable unless a validator-targeted consistency correction is required by locked Phase 16-19 decisions.
- Phase 20 should run `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` after each plan and for final evidence.

</code_context>

<specifics>
## Specific Ideas

- The highest-risk regressions to prevent are documentation drift, route alias omissions, brand boundary omissions, generated sample policy gaps, route leakage, and Sealos canonical identity marker drift.
- The Sealos fixed marker list is exact and should remain validation-visible: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Sealos canonical identity markers that need repeated checks include `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, `source.md`, `Brand/canonical-image note`, `assets/<article-slug>-sealos/`, and `assets/&lt;article-slug&gt;-sealos/`.
- Phase 19 verification called out current safety commands: validator 66/66, Node 34/34, and clean `git diff --check`. Phase 20 should end with new final numbers recorded in verification and UAT artifacts.
- Current validation already has a Sealos public asset parser for public sample approval. It needs generated Sealos sample policy coverage comparable to the existing Ferris generated sample distinction.
- Existing tests already include Sealos route drift, Sealos source marker drift, and Sealos public sample approval parsing. Phase 20 should add pack, prompt, QA, docs, metadata, leakage, generated sample, and final matrix fixtures.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 20 validation-hardening scope.

</deferred>

---

*Phase: 20-Validation Hardening*
*Context gathered: 2026-06-14T00:00:00+08:00*
