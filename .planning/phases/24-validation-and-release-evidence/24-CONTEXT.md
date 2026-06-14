# Phase 24: Validation and Release Evidence - Context

**Gathered:** 2026-06-14T17:49:44+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 24 delivers local validation and release evidence for the Visual IP Illustrations rebrand. Maintainers should be able to verify canonical naming, legacy alias compatibility, route stability, docs consistency, UAT migration behavior, and final release readiness through deterministic local commands and recorded evidence.

This phase covers VAL-01 through VAL-04. It may update `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, and Phase 24 evidence artifacts. Public documentation edits stay limited to small marker additions directly required by validation or release evidence.

</domain>

<decisions>
## Implementation Decisions

### Validator Coverage

- **D-01:** The validator should check canonical naming across `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md`.
- **D-02:** Canonical naming checks should verify `Visual IP Illustrations`, `visual-ip-illustrations`, and `$visual-ip-illustrations` where each surface owns product identity, slug/install guidance, or invocation guidance.
- **D-03:** The validator should check legacy alias compatibility markers for `$ian-xiaohei-illustrations` across runtime, agent metadata, README, examples, release checklist, and validation surfaces.
- **D-04:** The validator should check install migration guidance that preserves the current live repository clone target, canonical local checkout slug `visual-ip-illustrations`, installable package directory `ian-xiaohei-illustrations/`, canonical invocation `$visual-ip-illustrations`, and legacy alias `$ian-xiaohei-illustrations`.
- **D-05:** Validator naming checks should preserve current route behavior checks for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- **D-06:** Validator output count starts from the existing `78/78` baseline. Phase 24 may increase the count when new checks are deliberate, named, and covered by matching Node tests.

### Node Test Coverage

- **D-07:** Node tests should cover canonical invocation through `$visual-ip-illustrations`.
- **D-08:** Node tests should cover legacy invocation through `$ian-xiaohei-illustrations`.
- **D-09:** Node tests should cover route stability for `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`, including default flags, aliases, statuses, required references, and output suffixes.
- **D-10:** Node tests should cover output path stability for raw and escaped path tokens for all five routes.
- **D-11:** Node tests should include stale old-name-only fixtures that fail when a primary public or runtime surface loses canonical naming and contains only old Xiaohei-centered framing.
- **D-12:** Node test count starts from the existing `40/40` baseline. Phase 24 may increase the count when the new tests directly map to VAL-01 through VAL-04.

### Release Evidence

- **D-13:** Final release evidence should record `node scripts/validate-skill-package.mjs` output.
- **D-14:** Final release evidence should record `node --test scripts/validate-skill-package.test.mjs` output.
- **D-15:** Final release evidence should record `git diff --check` output.
- **D-16:** Final release evidence should record docs consistency across README, examples, NOTICE, release checklist, agent metadata, runtime metadata, and route docs.
- **D-17:** Final release evidence should record compatibility smoke coverage for canonical invocation, legacy invocation, omitted-IP Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and mixed-IP route grouping.
- **D-18:** Final evidence artifacts should make baseline and final counts explicit so maintainers can see whether validator and Node totals stayed at `78/78` and `40/40` or increased through deliberate Phase 24 additions.

### UAT and Migration Behavior

- **D-19:** UAT should confirm users can migrate naming from `$ian-xiaohei-illustrations` to `$visual-ip-illustrations` while preserving route behavior.
- **D-20:** UAT should confirm omitted-IP prompts still select Xiaohei after the naming migration.
- **D-21:** UAT should confirm explicit route prompts still select Littlebox, Tom, Ferris, and Sealos Seal with existing route status notes and output paths.
- **D-22:** UAT should confirm install guidance supports the canonical local checkout slug `visual-ip-illustrations` while preserving the installable skill package directory `ian-xiaohei-illustrations/` during v1.4.

### Docs Change Boundary

- **D-23:** Phase 24 should avoid broad public docs rewrites.
- **D-24:** Small marker additions to README, examples, NOTICE, release checklist, runtime metadata, or route docs are allowed only when a new validator check needs a deterministic release-evidence marker tied to VAL-01 through VAL-04.
- **D-25:** Existing route/source/brand language remains the authority for route behavior. Phase 24 validation should harden that language rather than reshape public docs.

### Requirement Mapping

- **VAL-01:** Validator checks canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs.
- **VAL-02:** Validator checks legacy alias compatibility markers and install migration guidance.
- **VAL-03:** Node tests cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures.
- **VAL-04:** Final release evidence records validator output, Node output, `git diff --check`, docs consistency, and compatibility smoke coverage.

### the agent's Discretion

Planner discretion is limited to exact check IDs, fixture names, and evidence file structure. The coverage targets, starting baselines, docs-change boundary, and UAT scope are locked by this discussion.

</decisions>

<research_questions>
## Research Questions for Plan Phase

- Which current validator check group should own canonical naming parity: existing `SKILL-FM`, `AGENT`, `DOC`, `NOTICE`, `SMOKE`, and `RELEASE` checks, or a new dedicated rebrand group?
- Which exact public surfaces should fail stale old-name-only fixtures: README H1/opening, examples intro, NOTICE opening, release rebrand review block, `SKILL.md` core identity, and `openai.yaml` default prompt are the likely minimum set.
- How should the validator distinguish valid legacy compatibility mentions from stale old-name-only primary framing?
- Should release evidence live in `24-VERIFICATION.md`, `24-UAT.md`, and `24-01-SUMMARY.md`, or should the planner create a dedicated `24-VALIDATION.md` strategy artifact before implementation?
- Which command snippets should be captured verbatim in final evidence, and which should be summarized to keep artifacts readable?
- Should docs consistency be validated through existing marker checks, a new aggregated docs consistency check, or both?
- What is the smallest UAT prompt set that proves canonical migration without losing route behavior?

</research_questions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 24 goal, dependency on Phase 23, VAL-01 through VAL-04, success criteria, and release readiness scope.
- `.planning/REQUIREMENTS.md` — Defines validation requirements, v1.4 out-of-scope boundaries, and future distribution requirements.
- `.planning/STATE.md` — Records current focus as Phase 24 and current validation baseline notes, including validator `78/78` and Node `40/40`.
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` — Locks canonical product name, slug, skill id, legacy alias, route stability, output path stability, and Phase 24 validator ownership.
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-VERIFICATION.md` — Verifies runtime identity, canonical and legacy invocation markers, route stability, migration guidance, and baseline `78/78` validator plus `40/40` Node results.
- `.planning/phases/23-public-documentation-and-examples-rebrand/23-01-SUMMARY.md` — Records Phase 23 public docs rebrand, canonical prompts, legacy compatibility prompts, release checklist updates, and unchanged `78/78` plus `40/40` baseline.
- `.planning/phases/23-public-documentation-and-examples-rebrand/23-VERIFICATION.md` — Verifies README, examples, NOTICE, release checklist, route smoke headings, path tokens, and baseline validation commands.

### Public and Runtime Surfaces

- `README.md` — Primary public identity, install guidance, canonical invocation, compatibility guidance, route inventory, output paths, and route references.
- `examples/prompts.md` — Canonical `$visual-ip-illustrations` prompts plus legacy `$ian-xiaohei-illustrations` route smoke fixtures.
- `NOTICE.md` — Rebrand scope and attribution/source/brand boundary markers for Ian, Littlebox, Tom, Ferris, and Sealos Seal.
- `RELEASE_CHECKLIST.md` — Automated gates, Release 1.4 rebrand review, route smoke prompts, attribution review, public sample gates, installable package boundary, and public docs/path marker review.
- `ian-xiaohei-illustrations/SKILL.md` — Runtime identity, frontmatter `name: visual-ip-illustrations`, canonical invocation, legacy alias, local migration guidance, route selection rules, and output path behavior.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent display metadata, canonical default prompt, compatibility alias marker, route summary, and implicit invocation policy.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata authority for ids, aliases, defaults, output suffixes, required references, statuses, legacy path availability, output paths, and delivery fields.

### Validation Targets

- `scripts/validate-skill-package.mjs` — Dependency-free validator with current `78/78` baseline, marker checks, Markdown/YAML parsing, route table parsing, output path checks, public docs checks, release gate checks, and approval parsing.
- `scripts/validate-skill-package.test.mjs` — Node test suite with current `40/40` baseline, live validator assertion, fixture mutation helpers, route parser assertions, route drift fixtures, public asset approval fixtures, leakage fixtures, generated sample fixtures, and validator failure fixtures.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `scripts/validate-skill-package.mjs`: Existing validator already checks package shape, skill frontmatter, agent metadata, route table, route references, public docs, smoke prompts, NOTICE, release gates, leakage, public assets, generated samples, and output boundaries.
- `scripts/validate-skill-package.test.mjs`: Existing tests already run the live validator, assert `Summary: total=78 passed=78 failed=0 skipped=0`, parse current route table shape, mutate fixtures, and validate failure output for route, docs, metadata, leakage, public sample, and generated sample drift.
- `RELEASE_CHECKLIST.md`: Existing release evidence command set already includes validator, Node tests, and `git diff --check`; Phase 24 can harden rebrand evidence around that command set.
- `examples/prompts.md`: Existing prompt inventory contains canonical normal-flow prompts and legacy compatibility route smoke prompts, making it the likely source for UAT and smoke coverage.
- `README.md`, `NOTICE.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and `ian-xiaohei-illustrations/references/routing.md`: These files already expose deterministic canonical and compatibility markers that the validator can check.

### Established Patterns

- Validation is local, dependency-free Node and text-marker based.
- Tests use the built-in Node test runner and fixture directories copied to temporary locations.
- Route stability is verified through route table parsing plus deterministic marker checks.
- Public sample gates use release checklist parsing with pending and approved fixture variants.
- Public docs and route docs preserve raw and escaped output path tokens for deterministic checks.
- The current green baseline is validator `78/78` and Node tests `40/40`.

### Integration Points

- Add or extend validator checks in `scripts/validate-skill-package.mjs` for canonical naming parity, legacy alias compatibility, install migration markers, docs consistency, and stale old-name-only primary surfaces.
- Add or extend Node tests in `scripts/validate-skill-package.test.mjs` for canonical invocation, legacy invocation, route stability, output path stability, stale old-name-only fixtures, and any new validator count.
- Record final command evidence in Phase 24 verification/UAT/summary artifacts after implementation.
- Keep any public doc marker additions small and tied directly to new validator checks.

</code_context>

<specifics>
## Specific Ideas

- Start validation planning from `Summary: total=78 passed=78 failed=0 skipped=0` and Node `tests 40`, `pass 40`, `fail 0`.
- Treat `$visual-ip-illustrations` as the canonical normal invocation and `$ian-xiaohei-illustrations` as the v1.4 compatibility smoke invocation.
- Treat `Visual IP Illustrations` as primary public/runtime identity.
- Treat `visual-ip-illustrations` as the canonical repository/install/local checkout slug.
- Treat `ian-xiaohei-illustrations/` as the current installable skill package directory and valid compatibility/source path during v1.4.
- Treat route ids, aliases, statuses, required references, output suffixes, raw output paths, and escaped output path tokens as stable release contracts.

</specifics>

<deferred>
## Deferred Ideas

- Actual GitHub repository rename from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.
- Redirect behavior and remote URL migration for a future repository rename.
- v2 installer or selector that installs selected IP variants.
- Machine-readable asset manifest for title, path, hash, composition family, IP route, source status, rights status, brand status, and anti-repeat notes.

</deferred>

<verification_baseline>
## Verification Baseline and Expected Evidence Artifacts

### Starting Baseline

- Validator: `node scripts/validate-skill-package.mjs` currently reports `Summary: total=78 passed=78 failed=0 skipped=0`.
- Node tests: `node --test scripts/validate-skill-package.test.mjs` currently reports `tests 40`, `pass 40`, `fail 0`.
- Diff hygiene: prior Phase 22 and Phase 23 verification recorded clean `git diff --check`.

### Expected Phase 24 Evidence

- `24-VERIFICATION.md` should record final validator output, Node output, `git diff --check`, docs consistency checks, and compatibility smoke coverage.
- `24-UAT.md` should record canonical invocation migration, legacy alias compatibility, omitted-IP Xiaohei, explicit route prompts, output path stability, and route behavior stability.
- `24-01-SUMMARY.md` should record final check/test counts, changed files, requirements completed, and release-readiness result.
- If research introduces validation architecture decisions before implementation, `24-VALIDATION.md` should record the validator/test strategy before code changes.

</verification_baseline>

---

*Phase: 24-Validation and Release Evidence*
*Context gathered: 2026-06-14T17:49:44+08:00*
