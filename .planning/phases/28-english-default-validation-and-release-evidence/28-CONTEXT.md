# Phase 28: English-Default Validation and Release Evidence - Context

**Gathered:** 2026-06-14T18:45:00Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 28 is the final validation and release-evidence phase for the v1.5 English-default migration. It turns the completed Phase 25-27 language policy, runtime migration, reference migration, public-doc migration, compatibility preservation, and residual-language scan work into deterministic local gates that maintainers can rerun before release.

This phase owns validation coverage, stale-language hard failure behavior, Node regression tests, final release evidence, and UAT evidence. It does not own broad prose rewriting, visual IP behavior changes, new routes, new image assets, or new runtime features.

</domain>

<decisions>
## Implementation Decisions

### Final Validation Gate
- **D-01:** The normal production validator command `node scripts/validate-skill-package.mjs` must fail on stale Chinese prose outside approved multilingual exceptions.
- **D-02:** Keep `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` as an explicit evidence command even after normal validator hard-fail behavior is enabled, so release evidence can show both the default path and enforced scan path.
- **D-03:** Final validator coverage must include README, `examples/prompts.md`, `LANGUAGE_POLICY.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md`, route-local references, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.

### Check IDs and Test Matrix
- **D-04:** Add stable Phase 28 check ids using the `VAL-*` prefix. Place them after `LANG-*` checks and before `BOUNDARY-*` checks to keep matrix order deterministic.
- **D-05:** Node tests must cover the final English-default coverage checks, allowed multilingual exception fixtures, stale-prose failures, broad-allowlist rejection, route stability, invocation stability, output path stability, docs consistency, and release evidence markers.
- **D-06:** Use stable headings, paths, route ids, policy references, approval-record markers, and behavior tokens for assertions. Avoid fragile full-paragraph assertions.

### Multilingual Exception Contract
- **D-07:** Preserve the approved multilingual exception categories from `LANGUAGE_POLICY.md`: route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- **D-08:** Keep allowlist entries narrow and auditable by path scope plus exact token or anchored pattern. Broad path-only exemptions are release blockers.
- **D-09:** Residual Han scan evidence must classify every remaining finding into an approved category or fail as stale prose.

### Release Evidence and UAT
- **D-10:** Phase 28 verification must record validator output, Node test output, `git diff --check`, explicit enforce-mode output, residual Han scan classification, docs consistency coverage, and compatibility smoke coverage.
- **D-11:** Phase 28 UAT must prove maintainers can migrate to English-default docs while preserving canonical invocation, legacy invocation, Chinese route aliases, Chinese article illustration workflows, and visible-label behavior.
- **D-12:** `RELEASE_CHECKLIST.md` may receive a narrow v1.5 English-default final release gate only when the execution plan needs a public release checklist anchor for Phase 28 evidence.

### the agent's Discretion
Downstream agents may choose the exact helper/function names and fixture layout as long as the validator remains dependency-free, deterministic, and aligned with existing script style.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Scope and Requirements
- `.planning/ROADMAP.md` — Phase 28 goal, dependencies, success criteria, and final phase position.
- `.planning/REQUIREMENTS.md` — VAL-01 through VAL-04 requirement definitions and status table.
- `.planning/PROJECT.md` — v1.5 project purpose, compatibility constraints, and no-build-runtime boundary.
- `.planning/STATE.md` — current phase position and prior phase completion state.

### Language Policy and Prior Decisions
- `LANGUAGE_POLICY.md` — canonical English-default language policy authority, approved multilingual exception categories, residual scan contract, and migration handoff.
- `.planning/phases/25-language-policy-and-residual-scan-contract/25-CONTEXT.md` — Phase 25 decisions for policy location, allowlist categories, scan contract, and hard-fail intent.
- `.planning/phases/26-skill-and-reference-content-migration/26-CONTEXT.md` — Phase 26 decisions for runtime skill, routing, route packs, agent metadata, and compatibility-preserving English-default migration.
- `.planning/phases/27-public-documentation-and-example-migration/27-CONTEXT.md` — Phase 27 decisions for README, examples, NOTICE, release checklist, validator marker sync, and approved residual Han in public docs.
- `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md` — latest verified public-doc migration evidence and residual Han classification model.

### Validator and Tests
- `scripts/validate-skill-package.mjs` — dependency-free validation harness, route parsers, release parsers, language scanner, allowlist, and deterministic check matrix.
- `scripts/validate-skill-package.test.mjs` — Node regression tests, fixture helpers, required check id ordering, stale-language fixtures, route stability fixtures, invocation stability fixtures, and output path stability fixtures.

### Release and Public Surfaces
- `README.md` — canonical public product identity, install/migration guidance, route docs, examples, validation command guidance, related project links, and author content.
- `examples/prompts.md` — canonical and legacy invocation examples, route-specific smoke prompts, mixed-IP examples, visible-label examples, and Chinese article illustration compatibility fixtures.
- `NOTICE.md` — attribution/source/brand/trademark boundary records.
- `RELEASE_CHECKLIST.md` — release gates, approval records, generated sample records, and parser-sensitive public-sample evidence markers.

### Runtime and Route Surfaces
- `ian-xiaohei-illustrations/SKILL.md` — runtime controller, route selection, reference loading, image generation boundary, QA, output path, and delivery contract.
- `ian-xiaohei-illustrations/agents/openai.yaml` — agent discovery metadata and implicit invocation policy.
- `ian-xiaohei-illustrations/references/routing.md` — parser-sensitive route registry and five-route compatibility contract.
- `ian-xiaohei-illustrations/references/ips/xiaohei/` — Xiaohei route-local reference pack and prompt placeholders.
- `ian-xiaohei-illustrations/references/ips/littlebox/` — Littlebox route-local reference pack and visible-label behavior.
- `ian-xiaohei-illustrations/references/ips/tom/` — Tom protected-character route pack and rights authority.
- `ian-xiaohei-illustrations/references/ips/ferris/` — Ferris source-reviewed route pack and trademark boundary.
- `ian-xiaohei-illustrations/references/ips/sealos/` — Sealos Seal brand-owned route pack, source authority, uploaded-image authority, no-logo contract, and QA boundary.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `runChecks` and `defineCheck` in `scripts/validate-skill-package.mjs`: existing deterministic validation harness for adding `VAL-*` checks.
- `collectLanguageFindings`, `classifyLanguageFinding`, and `validateLanguageAllowlistShape` in `scripts/validate-skill-package.mjs`: existing language-scan and allowlist machinery to harden for final release.
- `copyFixture`, fixture mutation helpers, and required check id ordering in `scripts/validate-skill-package.test.mjs`: existing test pattern for validator failure fixtures and matrix stability.
- Release approval parser helpers in `scripts/validate-skill-package.mjs`: existing parser-sensitive checklist behavior to preserve while adding final release evidence gates.

### Established Patterns
- Validator output uses one deterministic line per check and a `Summary: total=N passed=N failed=0 skipped=0` footer.
- Validation remains dependency-free Node and uses repository-local Markdown/YAML parsing helpers rather than adding a build framework.
- Regression tests use Node's built-in `node:test` and temporary copied fixtures to verify both pass and failure behavior.
- Prior phases record evidence in `*-VERIFICATION.md` and `*-UAT.md`; Phase 28 should reuse that format.

### Integration Points
- Add Phase 28 validation checks near the existing `LANG-*` and `BOUNDARY-*` checks.
- Update `requiredCheckIds` and summary-count expectations in `scripts/validate-skill-package.test.mjs` when adding checks.
- Add fixture coverage for final hard-fail stale Chinese behavior, allowed multilingual exceptions, broad allowlist rejection, route stability, invocation stability, output path stability, and release evidence markers.
- Write final release evidence to `.planning/phases/28-english-default-validation-and-release-evidence/28-VERIFICATION.md` and `.planning/phases/28-english-default-validation-and-release-evidence/28-UAT.md`.

</code_context>

<specifics>
## Specific Ideas

- Normal validator hard-fails stale prose; explicit `LANGUAGE_SCAN_ENFORCE=1` remains in the release command set as redundant evidence.
- Prefer `VAL-*` check ids for final Phase 28 coverage.
- Residual Han evidence should cover `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `LANGUAGE_POLICY.md`, `ian-xiaohei-illustrations/`, and `scripts/`.
- Release evidence should include command summaries, residual Han categories, docs consistency, compatibility smoke coverage, and UAT results.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 28-English-Default Validation and Release Evidence*
*Context gathered: 2026-06-14T18:45:00Z*
