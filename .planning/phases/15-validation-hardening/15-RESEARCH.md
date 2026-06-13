# Phase 15: Validation Hardening - Research

**Researched:** 2026-06-13 [VERIFIED: local init.phase-op]
**Domain:** Dependency-free Node validator and Node test hardening for the four-route Codex Skill package [VERIFIED: .planning/ROADMAP.md]
**Confidence:** HIGH [VERIFIED: local command]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- Phase 15 updates the existing dependency-free Node validator only: `scripts/validate-skill-package.mjs`. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- The validator must stay local-only, deterministic, dependency-free, and preserve the current CLI line shape: `[PASS] ID message`, `[FAIL] ID message`, `[SKIP] ID message`, then `Summary: total=N passed=N failed=N skipped=N`. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Check order remains stable and intentional. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Failure messages must name actionable check IDs and repo-relative paths. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Ferris `required_references` are the full seven-file canonical pack: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- `source.md` remains the Ferris source/trademark authority. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Phase 15 completion evidence should include successful runs of `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]

### the agent's Discretion

- Planners may add new check IDs for Ferris pack files, Ferris prompt markers, Ferris QA markers, Ferris leakage, or generated sample gates when that makes failures more actionable. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Planners may refine exact marker strings when they align with Phase 14 wording and the Ferris route-local source authority. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]

### Deferred Ideas (OUT OF SCOPE)

- Machine-readable mascot/source/trademark manifests remain v2 work. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Automated visual likeness judgment remains outside v1.2 validation. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Release packaging scripts, visual regression, asset manifests, and route selector tooling remain v2 work. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Broad product docs rewrites stay outside Phase 15 unless validator expectations reveal a real source inconsistency. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
</user_constraints>

## Project Constraints (from AGENTS.md)

- User-facing replies begin with `爸爸` and use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and PR copy use English. [VERIFIED: AGENTS.md]
- Repository edits should start through GSD workflow unless explicitly bypassed. This task is a GSD research phase and only creates the research artifact. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local references, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Existing Xiaohei behavior remains compatible, and IP rules remain route-isolated. [VERIFIED: AGENTS.md]
- The package stays lightweight; validation can be script-based and should avoid a full app framework. [VERIFIED: AGENTS.md]

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FVAL-01 | Maintainer can run the local validator successfully after v1.2 roadmap initialization clears prior phase working directories. [VERIFIED: .planning/REQUIREMENTS.md] | Update failing validator expectations and require green validator evidence. |
| FVAL-02 | Validator checks Ferris route row, aliases, default false, output suffix, required references, route status, source attribution context, and trademark boundary markers. [VERIFIED: .planning/REQUIREMENTS.md] | Update `ROUTE-FERRIS-001` and `ROUTE-REFS-001` around the seven-file pack. |
| FVAL-03 | Validator checks Ferris canonical pack files, prompt placeholders, QA markers, source markers, and trademark-boundary markers. [VERIFIED: .planning/REQUIREMENTS.md] | Add Ferris pack, prompt, and QA check IDs after existing Tom/Ferris source checks. |
| FVAL-04 | Validator checks README, examples, agent metadata, NOTICE, release checklist, raw/escaped Ferris output path tokens, and Ferris smoke prompts. [VERIFIED: .planning/REQUIREMENTS.md] | Refresh metadata/docs/release markers to Phase 14 wording. |
| FVAL-05 | Validator checks Ferris leakage boundaries so Xiaohei, Littlebox, and Tom packs stay free of Ferris identity rules and Rust trademark boundary text. [VERIFIED: .planning/REQUIREMENTS.md] | Add route leakage scan mirroring `BOUNDARY-TOM-LEAK-001`. |
| FVAL-06 | Validator checks public example asset directories for Ferris-rendered assets against the release checklist public-sample approval policy. [VERIFIED: .planning/REQUIREMENTS.md] | Adapt Ferris public asset parser to Phase 14 checklist wording and add generated sample gate. |
| FVAL-07 | Node validator tests cover four-route parser behavior, stable check ordering, Ferris failure messages, source/trademark fixtures, and full pass output. [VERIFIED: .planning/REQUIREMENTS.md] | Update `requiredCheckIds`, parser assertions, fixtures, approval tests, and summary assertions. |
</phase_requirements>

## Current Baseline

The live validator exits nonzero with `Summary: total=53 passed=48 failed=5 skipped=0`. [VERIFIED: local command `node scripts/validate-skill-package.mjs`]

Current failing checks are `AGENT-TOM-001`, `ROUTE-FERRIS-001`, `ROUTE-REFS-001`, `RELEASE-FERRIS-001`, and `BOUNDARY-FERRIS-IMG-001`. [VERIFIED: local command `node scripts/validate-skill-package.mjs`]

The live Node test suite exits nonzero with `tests 23`, `pass 13`, and `fail 10`. [VERIFIED: local command `node --test scripts/validate-skill-package.test.mjs`]

The current Ferris route row already contains four-route metadata, aliases, `default=false`, `output_suffix=ferris`, and seven Ferris required references. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]

The current Phase 14 public docs already contain Ferris source-reviewed wording, raw/escaped Ferris output paths, the Ferris source/trademark authority path, and Ferris smoke prompt markers. [VERIFIED: README.md; examples/prompts.md; RELEASE_CHECKLIST.md]

The current validator still treats Ferris as a source-only Phase 11 route in `ROUTE-FERRIS-001` and `ROUTE-REFS-001`. [VERIFIED: scripts/validate-skill-package.mjs]

## Root Cause Map

| Symptom | Root Cause | Exact Area | Scope |
|---------|------------|------------|-------|
| `AGENT-TOM-001` fails on missing `Xiaohei / Littlebox / Tom Article Illustrations`. [VERIFIED: local command] | The metadata check still expects v1.1 three-route display text while `openai.yaml` now names Xiaohei, Littlebox, Tom, and Ferris. [VERIFIED: scripts/validate-skill-package.mjs; ian-xiaohei-illustrations/agents/openai.yaml] | `scripts/validate-skill-package.mjs` `AGENT-TOM-001`; likely rename to a four-route metadata check or add `AGENT-FERRIS-001`. | 15-01 |
| `ROUTE-FERRIS-001` fails because expected Ferris references equal only `references/ips/ferris/source.md`. [VERIFIED: local command] | Phase 13 expanded Ferris to the seven-file canonical pack, while validator logic stayed at Phase 11 source-only contract. [VERIFIED: .planning/STATE.md; scripts/validate-skill-package.mjs; ian-xiaohei-illustrations/references/routing.md] | `ROUTE-FERRIS-001` and test parser assertion for `routes[3].required_references`. | 15-01 and 15-02 |
| `ROUTE-REFS-001` fails because expected Ferris count is `1` and observed count is `7`. [VERIFIED: local command] | The `expectedCounts` map has `ferris: 1`. [VERIFIED: scripts/validate-skill-package.mjs] | `ROUTE-REFS-001` expected count and existence handling for Ferris. | 15-01 |
| `RELEASE-FERRIS-001` fails on `Public rendered Ferris samples approved`. [VERIFIED: local command] | Phase 14 checklist uses the new `Ferris public asset policy for ...` line, while validator/test fixtures search for the old Tom-shaped `Public rendered Ferris samples approved ...` line. [VERIFIED: RELEASE_CHECKLIST.md; scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] | `RELEASE-FERRIS-001`, `parsePublicFerrisSampleApproval`, `pendingPublicApprovalLine("Ferris")`, release fixture tests. | 15-01 and 15-02 |
| `BOUNDARY-FERRIS-IMG-001` fails because approval parser reports missing line. [VERIFIED: local command] | `parsePublicRouteSampleApproval` searches for the old exact public rendered sample phrase, while Ferris policy wording is route-specific and includes trademark outcome fields. [VERIFIED: scripts/validate-skill-package.mjs; RELEASE_CHECKLIST.md] | `parsePublicRouteSampleApproval`, `parsePublicFerrisSampleApproval`, `BOUNDARY-FERRIS-IMG-001`. | 15-01 |
| Four top-level tests fail immediately on `result.status === 0`. [VERIFIED: local command] | The real validator is red, so smoke, ordering, and full-pass assertions cascade. [VERIFIED: scripts/validate-skill-package.test.mjs] | Tests at validator smoke/order/full-pass sections. | 15-02 |
| Parser test expects Ferris `required_references` to equal one source file. [VERIFIED: local command] | Test fixture contract stayed on Phase 11. [VERIFIED: scripts/validate-skill-package.test.mjs] | Parser helper test around `validators.splitRouteCell(routes[3].required_references)`. | 15-02 |
| Tom public asset approval fixture can stay red after approving Tom. [VERIFIED: local command] | Fixture approval changes only Tom, while global validator remains blocked by unrelated Ferris failures. [VERIFIED: local command; scripts/validate-skill-package.test.mjs] | Public Tom asset test should either repair Ferris baseline in fixture or assert only the intended boundary while Phase 15 makes base validator green. | 15-02 |

## Existing Patterns to Reuse

- Use the existing `defineCheck(id, message, run)` ordered matrix and append or revise checks in the natural route/refs/docs/release/boundary sections. [VERIFIED: scripts/validate-skill-package.mjs]
- Use `Results.render()` to keep deterministic `[PASS]`, `[FAIL]`, `[SKIP]`, and `Summary: total=N passed=N failed=N skipped=N` output. [VERIFIED: scripts/validate-skill-package.mjs]
- Use `parseMarkdownTable`, `splitRouteCell`, `routeRows`, `routeById`, and `routeReferencePaths` for Ferris route parser work. [VERIFIED: scripts/validate-skill-package.mjs]
- Use `safeReferencePath`, `displayPath`, `fileExists`, and `assertReadableFiles` for required reference existence and package-boundary checks. [VERIFIED: scripts/validate-skill-package.mjs]
- Use `assertIncludes`, `assertNoMarkers`, `assertArrayIncludes`, and `combinedText` for marker gates. [VERIFIED: scripts/validate-skill-package.mjs]
- Reuse the Tom pack pattern: `REFS-TOM-001`, `PROMPT-TOM-001`, `IP-TOM-001`, and `QA-TOM-001` are the closest templates for Ferris pack checks. [VERIFIED: scripts/validate-skill-package.mjs]
- Reuse the Tom leakage pattern in `BOUNDARY-TOM-LEAK-001` for Ferris leakage scanning across Xiaohei, Littlebox, Tom, and legacy Xiaohei references. [VERIFIED: scripts/validate-skill-package.mjs]
- Reuse `copyFixture`, `replaceInFixture`, `runFixtureValidator`, and fixture mutation tests for negative coverage. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Keep approval parser tests, but split Tom and Ferris policy-line expectations because Phase 14 Ferris wording has a different record shape from Tom. [VERIFIED: RELEASE_CHECKLIST.md; scripts/validate-skill-package.test.mjs]

## Recommended Plan Slices

### 15-01 - Harden Validator Implementation

Goal: make `node scripts/validate-skill-package.mjs` pass with Phase 15 scope and actionable Ferris coverage. [VERIFIED: .planning/ROADMAP.md]

Implementation guidance:

- Update `AGENT-TOM-001` to validate the current four-route metadata surface or add `AGENT-FERRIS-001` next to it. Required markers should include `Xiaohei / Littlebox / Tom / Ferris Article Illustrations`, `default Xiaohei`, explicit Tom gated wording, explicit Ferris source-reviewed wording, and `allow_implicit_invocation: true`. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml]
- Update `ROUTE-TABLE-001` route IDs to explicitly include `ferris`. [VERIFIED: scripts/validate-skill-package.mjs]
- Update `ROUTE-FERRIS-001` to require the seven ordered Ferris references and keep `source.md` as the source/trademark authority marker. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
- Update `ROUTE-REFS-001` expected counts to `{ xiaohei: 5, littlebox: 6, tom: 7, ferris: 7 }` and require every Ferris path to start with `references/ips/ferris/` and exist under the package. [VERIFIED: scripts/validate-skill-package.mjs; ian-xiaohei-illustrations/references/routing.md]
- Add `REFS-FERRIS-001` after `REFS-TOM-001` to require all seven Ferris files to exist and be non-empty. [VERIFIED: ian-xiaohei-illustrations/references/ips/ferris/*.md]
- Add Ferris pack marker checks: `PROMPT-FERRIS-001`, `IP-FERRIS-001`, and `QA-FERRIS-001` or similarly named IDs. Use markers already stable in the Ferris pack: planning fields gate, one-image generation gate, `Source/trademark note`, `Ferris QA source-reviewed gate`, `Ferris QA route leakage failure`, output path, and the eight route block failure names. [VERIFIED: ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md; ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md]
- Update `RELEASE-FERRIS-001` to validate the Phase 14 lines under `Ferris Public Asset Policy` and `Ferris Generated Sample Policy`, including `Ferris public asset policy for`, `Record generated sample review`, `trademark and endorsement-safe wording outcome`, and Phase 15 evidence. [VERIFIED: RELEASE_CHECKLIST.md]
- Replace or overload `parsePublicFerrisSampleApproval` so it parses the current line `Ferris public asset policy for ...: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.` [VERIFIED: RELEASE_CHECKLIST.md]
- Add a generated sample approval parser/check for the current line `Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.` [VERIFIED: RELEASE_CHECKLIST.md]
- Update `BOUNDARY-FERRIS-IMG-001` to use the new Ferris public asset parser and preserve the existing behavior: pending approval passes when public Ferris assets are absent, and public Ferris asset filenames fail until approval is complete. [VERIFIED: scripts/validate-skill-package.mjs]
- Add `BOUNDARY-FERRIS-LEAK-001` to scan non-Ferris packs for Ferris markers: `Ferris`, `Rustacean`, `Rust mascot`, `Rust crab`, `Rust 螃蟹`, `source-reviewed`, `Rust trademark boundary`, `references/ips/ferris`, and `assets/<article-slug>-ferris/`. [VERIFIED: .planning/REQUIREMENTS.md; ian-xiaohei-illustrations/references/ips/ferris/*.md]

### 15-02 - Harden Node Test Coverage

Goal: make `node --test scripts/validate-skill-package.test.mjs` pass and lock the Phase 15 validator contract. [VERIFIED: .planning/ROADMAP.md]

Implementation guidance:

- Update `requiredCheckIds` in the same order as the final validator matrix. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Update stable-order tests so `ROUTE-FERRIS-001` remains after `ROUTE-TOM-001`, and new Ferris pack checks appear after the existing Tom/Ferris source area. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Rename or rewrite the full matrix test label from Phase 10 to Phase 15, and update summary assertion to the final total chosen by 15-01. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Update parser helper assertions to expect seven Ferris references in this order: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
- Update `pendingPublicApprovalLine("Ferris")` and `completePublicApprovalLine("Ferris")` helpers or add Ferris-specific helper functions that include the Phase 14 public asset policy wording and the trademark outcome field. [VERIFIED: RELEASE_CHECKLIST.md]
- Add a generated sample approval parser test with pending, complete, and placeholder-date fixtures. [VERIFIED: .planning/REQUIREMENTS.md]
- Add fixture tests for Ferris pack drift: empty Ferris file, prompt marker drift, QA marker drift, source/trademark marker drift, and route leakage into Xiaohei/Littlebox/Tom. [VERIFIED: .planning/REQUIREMENTS.md]
- Keep fixture tests focused on one intended failure where practical; after base validator is green, approved public asset fixtures should return status `0` only when all unrelated Ferris gates are also repaired in the same fixture. [VERIFIED: local Node test output]

### 15-03 - Record Final Evidence and Close Phase

Goal: create Phase 15 verification evidence after implementation and tests are green. [VERIFIED: .planning/ROADMAP.md]

Implementation guidance:

- Record command output for `node scripts/validate-skill-package.mjs` with all checks passing and `skipped=0`. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Record command output for `node --test scripts/validate-skill-package.test.mjs` with all tests passing. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Record `git diff --check` exit 0. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]
- Evidence artifact should include command, exit status, summary line, and affected check/test totals. [VERIFIED: .planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md]

## Validation Architecture

| Property | Value |
|----------|-------|
| Validator | `node scripts/validate-skill-package.mjs` [VERIFIED: RELEASE_CHECKLIST.md] |
| Test framework | Node built-in test runner via `node --test scripts/validate-skill-package.test.mjs` [VERIFIED: scripts/validate-skill-package.test.mjs] |
| External dependencies | None beyond Node and Git for this phase. [VERIFIED: .planning/PROJECT.md; local command context] |
| Current validator baseline | `Summary: total=53 passed=48 failed=5 skipped=0` [VERIFIED: local command] |
| Current Node baseline | `tests 23`, `pass 13`, `fail 10` [VERIFIED: local command] |
| Required phase-gate commands | `node scripts/validate-skill-package.mjs`; `node --test scripts/validate-skill-package.test.mjs`; `git diff --check` [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md] |

Expected success output shape:

```text
[PASS] PKG-SHAPE-001 required skill package files exist and are readable
...
Summary: total=<final Phase 15 total> passed=<same total> failed=0 skipped=0
```

```text
tests <final Phase 15 test count>
pass <same count>
fail 0
cancelled 0
skipped 0
todo 0
```

Planner should treat the final totals as implementation-derived, then lock them in `requiredCheckIds` and full-pass summary assertions. [VERIFIED: scripts/validate-skill-package.test.mjs]

## Risks and Mitigations

| Risk | Why It Matters | Mitigation |
|------|----------------|------------|
| Stale check ordering. [VERIFIED: scripts/validate-skill-package.test.mjs] | Order tests assert stable output positions. [VERIFIED: scripts/validate-skill-package.test.mjs] | Insert new Ferris checks in the existing semantic sections and update `requiredCheckIds` once. |
| Approval parser fragility. [VERIFIED: scripts/validate-skill-package.mjs] | The old parser searches an exact phrase that Phase 14 replaced for Ferris. [VERIFIED: local command; RELEASE_CHECKLIST.md] | Add Ferris-specific parser logic for the current checklist line instead of forcing docs back to old wording. |
| Broad docs churn. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md] | Phase 14 docs passed and Phase 15 scope is validator/test hardening. [VERIFIED: .planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md] | Prefer validator and test expectation updates; edit product docs only for true source inconsistencies. |
| Fixture tests masking real failures. [VERIFIED: local command] | Some fixture tests fail because unrelated baseline failures remain present. [VERIFIED: local Node test output] | Make base validator green first, then keep fixture mutation tests narrow and assert the intended check IDs. |
| Route leakage false positives. [VERIFIED: scripts/validate-skill-package.mjs] | Public docs and routing docs should mention all routes, while route-local packs should stay isolated. [VERIFIED: README.md; examples/prompts.md; routing.md] | Scan only non-Ferris route-local packs and legacy Xiaohei refs for Ferris markers; skip README, examples, NOTICE, release checklist, and routing docs. |
| Generated sample gate ambiguity. [VERIFIED: RELEASE_CHECKLIST.md] | Workspace `assets/<article-slug>-ferris/` review outputs differ from public sample directories. [VERIFIED: RELEASE_CHECKLIST.md] | Public asset gate scans `examples/images/` and skill-local examples; generated sample gate parses checklist policy and records review fields. |

## Planner Guidance

Use this implementation order:

1. Patch validator route and metadata expectations first: `AGENT-TOM-001`, `ROUTE-TABLE-001`, `ROUTE-FERRIS-001`, and `ROUTE-REFS-001`. [VERIFIED: scripts/validate-skill-package.mjs]
2. Add Ferris pack checks next: `REFS-FERRIS-001`, `PROMPT-FERRIS-001`, `IP-FERRIS-001`, and `QA-FERRIS-001`. [VERIFIED: ian-xiaohei-illustrations/references/ips/ferris/*.md]
3. Patch release and asset gates: `RELEASE-FERRIS-001`, `parsePublicFerrisSampleApproval`, `BOUNDARY-FERRIS-IMG-001`, and generated sample parser/check. [VERIFIED: scripts/validate-skill-package.mjs; RELEASE_CHECKLIST.md]
4. Add Ferris leakage check after `BOUNDARY-TOM-LEAK-001`. [VERIFIED: scripts/validate-skill-package.mjs]
5. Update Node tests after validator IDs settle: `requiredCheckIds`, parser helper assertions, stable order tests, full-pass summary, Ferris fixture tests, public asset parser fixtures, and generated sample parser fixtures. [VERIFIED: scripts/validate-skill-package.test.mjs]
6. Run `node scripts/validate-skill-package.mjs` and capture the final total. [VERIFIED: local command]
7. Run `node --test scripts/validate-skill-package.test.mjs` and update final summary assertions only once. [VERIFIED: local command]
8. Run `git diff --check` and write Phase 15 verification evidence. [VERIFIED: .planning/phases/15-validation-hardening/15-CONTEXT.md]

Do not add package dependencies, manifests, network fetches, image generation, visual likeness validation, release packaging scripts, or machine-readable IP manifests in Phase 15. [VERIFIED: .planning/REQUIREMENTS.md]

## Open Questions

None. The Phase 15 scope, current failure baseline, target files, commands, and plan slices are resolved by `15-CONTEXT.md`, `ROADMAP.md`, `REQUIREMENTS.md`, and live local command output. [VERIFIED: local command; .planning/phases/15-validation-hardening/15-CONTEXT.md]

## Sources

- `AGENTS.md` - project reply, language, GSD, and package constraints. [VERIFIED: codebase grep]
- `.planning/PROJECT.md` - v1.2 milestone scope and constraints. [VERIFIED: codebase grep]
- `.planning/ROADMAP.md` - Phase 15 goal, success criteria, and 15-01/15-02/15-03 slices. [VERIFIED: codebase grep]
- `.planning/REQUIREMENTS.md` - FVAL-01 through FVAL-07. [VERIFIED: codebase grep]
- `.planning/STATE.md` - carried-forward Phase 13/14 validator deferral and failure ownership. [VERIFIED: codebase grep]
- `.planning/phases/15-validation-hardening/15-CONTEXT.md` - locked Phase 15 decisions. [VERIFIED: codebase grep]
- `.planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md` - Phase 14 pass and deferred validator/Node baselines. [VERIFIED: codebase grep]
- `scripts/validate-skill-package.mjs` - validator parser helpers, check matrix, release parser, asset gates, and CLI output shape. [VERIFIED: codebase grep]
- `scripts/validate-skill-package.test.mjs` - Node tests, fixture helpers, expected IDs, parser assertions, and approval tests. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/routing.md` - current four-route metadata and Ferris seven-file pack. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/ips/ferris/*.md` - Ferris pack markers, prompts, QA, source/trademark notes, and route leakage markers. [VERIFIED: codebase grep]
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/agents/openai.yaml` - public docs, metadata, notice, and release surfaces. [VERIFIED: codebase grep]

## Metadata

**Confidence breakdown:**

- Current baseline: HIGH - verified by local validator and Node test commands. [VERIFIED: local command]
- Root cause map: HIGH - every failure maps to current script/test/document lines. [VERIFIED: local command; codebase grep]
- Plan slices: HIGH - directly match ROADMAP 15-01, 15-02, and 15-03. [VERIFIED: .planning/ROADMAP.md]
- Risks: HIGH - derived from live failures and existing parser/test structure. [VERIFIED: local command; codebase grep]

**Research date:** 2026-06-13 [VERIFIED: local init.phase-op]
**Valid until:** 2026-06-20, because Phase 15 validator expectations are actively changing. [ASSUMED]
