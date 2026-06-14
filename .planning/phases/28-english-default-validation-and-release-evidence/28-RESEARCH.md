# Phase 28: English-Default Validation and Release Evidence - Research

**Researched:** 2026-06-15 02:49 CST [VERIFIED: `date` command]
**Domain:** Dependency-free Node validation, English-default language gates, release evidence, and UAT artifacts [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:7-12`]
**Confidence:** HIGH [VERIFIED: current validator, Node test suite, enforce-mode validator, and `git diff --check` were run locally during research]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
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

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| VAL-01 | Validator enforces English-default content coverage for README, examples, `SKILL.md`, agent metadata, NOTICE, release checklist, routing, and route-local references. [VERIFIED: `.planning/REQUIREMENTS.md:30`] | Add `VAL-*` marker checks over the current language targets and release surfaces. [VERIFIED: `scripts/validate-skill-package.mjs:1045-1061`, `scripts/validate-skill-package.mjs:3053-3086`] |
| VAL-02 | Validator enforces the allowed multilingual exception policy and fails on stale Chinese prose outside approved surfaces. [VERIFIED: `.planning/REQUIREMENTS.md:31`] | Change normal `LANG-SCAN-001`/scan behavior to hard-fail stale findings, while preserving explicit `LANGUAGE_SCAN_ENFORCE=1` evidence. [VERIFIED: `scripts/validate-skill-package.mjs:1165-1180`, `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`] |
| VAL-03 | Node tests cover English-default checks, allowed exception fixtures, route stability, invocation stability, and output path stability. [VERIFIED: `.planning/REQUIREMENTS.md:32`] | Extend `requiredCheckIds`, ordering tests, fixture mutation tests, and parser-helper stability tests. [VERIFIED: `scripts/validate-skill-package.test.mjs:10-104`, `scripts/validate-skill-package.test.mjs:395-408`, `scripts/validate-skill-package.test.mjs:699-773`] |
| VAL-04 | Final release evidence records validator output, Node test output, `git diff --check`, residual Chinese scan, docs consistency, and compatibility smoke coverage. [VERIFIED: `.planning/REQUIREMENTS.md:33`] | Create `28-VERIFICATION.md` and `28-UAT.md` using the Phase 27 evidence pattern plus Phase 28 command set. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:71-91`, `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`] |
</phase_requirements>

## Summary

Phase 28 should be one validation-hardening and evidence plan, because the prose migration surfaces are already complete and Phase 28 owns the final gate. [VERIFIED: `.planning/ROADMAP.md:80-93`, `.planning/STATE.md:26-31`] The current baseline is dependency-free Node validation, Node built-in tests, and Markdown diff hygiene; current local research runs passed `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs`, and `git diff --check`. [VERIFIED: local command execution]

The main implementation move is to turn the normal validator into the stale-Chinese release gate and add stable `VAL-*` checks after `LANG-*` and before `BOUNDARY-*`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-31`, `scripts/validate-skill-package.mjs:3053-3087`] Keep `LANGUAGE_SCAN_ENFORCE=1` in release evidence as a redundant proof command, because Phase 28 explicitly requires both default-path and enforce-mode evidence. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]

The planner should avoid broad rewrites and new dependencies. [VERIFIED: `.planning/PROJECT.md:99-102`, `AGENTS.md:19-21`] Plan tasks should touch only validator checks, Node tests, an optional narrow v1.5 release checklist anchor, and final `28-VERIFICATION.md`/`28-UAT.md` evidence artifacts. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-39`, `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:51-80`]

## Project Constraints (from AGENTS.md)

- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata. [VERIFIED: `AGENTS.md:13-21`]
- Preserve existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts. [VERIFIED: `AGENTS.md:15-17`]
- Keep IP rules separately readable, testable, and routable. [VERIFIED: `AGENTS.md:17-18`]
- Preserve MIT license notices and derived documentation attribution for Ian and okooo5km. [VERIFIED: `AGENTS.md:18-19`]
- Keep the project as a lightweight skill package; validation can be script-based and should avoid a full app framework. [VERIFIED: `AGENTS.md:19-20`]
- Final generation depends on host `image_gen`; Phase 28 does not need generated images. [VERIFIED: `AGENTS.md:20-21`, `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:7-12`]
- Use Markdown ATX headings, short bullets, fenced command blocks with language hints, compact reference sections, and repository-relative paths. [VERIFIED: `AGENTS.md:96-108`]
- Before file-changing implementation work, use a GSD workflow entry point; Phase 28 planning should route execution through `/gsd-execute-phase`. [VERIFIED: user-provided AGENTS.md GSD Workflow Enforcement block]

## Current System Facts with file/line references

| Area | Fact | Source |
|------|------|--------|
| Phase scope | Phase 28 is the final validation and release-evidence phase for the v1.5 English-default migration. | [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:7-12`] |
| Requirements | VAL-01 through VAL-04 are pending and mapped to Phase 28. | [VERIFIED: `.planning/REQUIREMENTS.md:28-33`, `.planning/REQUIREMENTS.md:87-90`] |
| Current baseline | Prior Phase 27 verification recorded validator 93/93, Node tests 56/56, `git diff --check`, and enforce-mode validation success. | [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:71-80`] |
| Validator shape | The validator is a single dependency-free Node module with constants, parsers, helper assertions, `defineCheck`, a `checks` array, `runChecks`, and exports for tests. | [VERIFIED: `scripts/validate-skill-package.mjs:1-14`, `scripts/validate-skill-package.mjs:1470-1506`, `scripts/validate-skill-package.mjs:3275-3306`] |
| Language targets | `languageScanTargets()` includes `LANGUAGE_POLICY.md`, README, examples, NOTICE, release checklist, `SKILL.md`, `openai.yaml`, routing, route references from the route table, and legacy Xiaohei refs. | [VERIFIED: `scripts/validate-skill-package.mjs:1045-1061`] |
| Allowlist shape | `LANGUAGE_ALLOWLIST` entries use category, paths, token or pattern, rationale, and remediation. | [VERIFIED: `scripts/validate-skill-package.mjs:36-384`, `scripts/validate-skill-package.mjs:1063-1105`] |
| Current scan mode | `languageScanReport()` only throws when `enforce` is true and stale findings exist; default enforce value is `process.env.LANGUAGE_SCAN_ENFORCE === "1"`. | [VERIFIED: `scripts/validate-skill-package.mjs:1165-1180`] |
| Current language checks | `LANG-POLICY-001`, `LANG-POLICY-002`, `LANG-SCAN-001`, and `LANG-SCAN-002` already exist before boundary checks. | [VERIFIED: `scripts/validate-skill-package.mjs:3053-3087`] |
| Check ordering | Test `requiredCheckIds` currently lists 93 ids, with `LANG-*` immediately before `BOUNDARY-*`. | [VERIFIED: `scripts/validate-skill-package.test.mjs:10-104`] |
| Test fixture pattern | Tests copy the repo to a temp fixture, mutate specific markers with `replaceInFixture` or `replaceAllInFixture`, run the fixture validator, and assert check ids plus paths. | [VERIFIED: `scripts/validate-skill-package.test.mjs:121-153`, `scripts/validate-skill-package.test.mjs:437-530`] |
| Route stability | Route ids, aliases, default flags, statuses, output suffixes, and required reference counts are locked in `rebrandRouteExpectations()` and `assertRebrandRouteTable()`. | [VERIFIED: `scripts/validate-skill-package.mjs:1365-1444`] |
| Route source | `routing.md` has five route rows: `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`, with Chinese aliases and output suffixes. | [VERIFIED: `ian-xiaohei-illustrations/references/routing.md:22-30`] |
| Runtime invocation | `SKILL.md` declares `name: visual-ip-illustrations`, canonical `$visual-ip-illustrations`, and legacy `$ian-xiaohei-illustrations` compatibility marker. | [VERIFIED: `ian-xiaohei-illustrations/SKILL.md:1-23`] |
| Agent metadata | `openai.yaml` exposes `display_name`, `short_description`, `default_prompt`, and `allow_implicit_invocation: true`. | [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml:1-6`] |
| Public docs | README leads with Visual IP Illustrations, current route inventory, output path contracts, install commands, and canonical/legacy invocations. | [VERIFIED: `README.md:1-25`, `README.md:36-47`, `README.md:163-181`] |
| Prompt examples | `examples/prompts.md` keeps canonical prompts, legacy compatibility smoke prompts, route smoke sections, and visible-label examples. | [VERIFIED: `examples/prompts.md:1-68`, `examples/prompts.md:69-153`] |
| Notice | `NOTICE.md` records Ian/Xiaohei, Littlebox, Tom, Ferris, and Sealos boundaries. | [VERIFIED: `NOTICE.md:1-62`] |
| Release checklist | `RELEASE_CHECKLIST.md` currently has automated gates, rebrand review, route smoke prompts, attribution review, route-specific sample gates, and public docs/path markers. | [VERIFIED: `RELEASE_CHECKLIST.md:5-31`, `RELEASE_CHECKLIST.md:41-51`, `RELEASE_CHECKLIST.md:203-212`] |

## Recommended Plan Shape

1. Add final `VAL-*` validation checks after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`, `scripts/validate-skill-package.mjs:3053-3087`]
   - `VAL-ENGLISH-001`: assert English-default coverage markers across README, examples, `LANGUAGE_POLICY.md`, `SKILL.md`, `openai.yaml`, routing, NOTICE, and release checklist. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-22`]
   - `VAL-ENGLISH-002`: assert every route-local reference path derived from `routing.md` participates in language scan targets and has route-local English-default markers plus approved multilingual exception markers. [VERIFIED: `scripts/validate-skill-package.mjs:1045-1061`, `ian-xiaohei-illustrations/references/routing.md:24-30`]
   - `VAL-LANGUAGE-001`: assert the default `node scripts/validate-skill-package.mjs` path fails on stale Chinese prose by calling the scan in hard-fail mode. [VERIFIED: `scripts/validate-skill-package.mjs:1165-1180`, `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]
   - `VAL-COMPAT-001`: assert canonical invocation, legacy invocation, Chinese route aliases, route ids, route statuses, output suffixes, raw paths, escaped paths, and visible-label behavior markers remain present. [VERIFIED: `LANGUAGE_POLICY.md:58-81`, `scripts/validate-skill-package.mjs:1365-1444`]
   - `VAL-RELEASE-001`: assert release checklist and Phase 28 evidence markers name default validator, enforce-mode validator, Node tests, `git diff --check`, residual Han classification, docs consistency, and compatibility smoke coverage. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`]

2. Flip stale prose enforcement for normal validation while preserving explicit enforce-mode evidence. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]
   - Preferred implementation: change `languageScanReport()` default to enforce mode, then keep `LANGUAGE_SCAN_ENFORCE=1` behavior equivalent for release evidence. [VERIFIED: `scripts/validate-skill-package.mjs:1165-1180`]
   - Alternative implementation inside `LANG-SCAN-001`: call `languageScanReport({ enforce: true })` unconditionally and preserve env-driven enforce mode for command evidence. [ASSUMED]
   - Update the stale fixture test so stale Chinese fails in normal mode and enforce mode. [VERIFIED: `scripts/validate-skill-package.test.mjs:487-508`]

3. Extend Node tests in the same change set. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-31`]
   - Update `requiredCheckIds` with the new `VAL-*` ids after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. [VERIFIED: `scripts/validate-skill-package.test.mjs:10-104`]
   - Update deterministic smoke summary from 93 to the new count. [VERIFIED: `scripts/validate-skill-package.test.mjs:203-217`, `scripts/validate-skill-package.test.mjs:395-408`]
   - Add fixture tests for each new `VAL-*` check. [VERIFIED: `scripts/validate-skill-package.test.mjs:437-530`, `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-31`]

4. Add a narrow v1.5 final release gate to `RELEASE_CHECKLIST.md` if the plan needs a public release checklist anchor. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-37`]
   - The section should name English-default coverage, stale-language hard fail, explicit enforce-mode evidence, docs consistency, route smoke, compatibility alias, Chinese aliases, and visible-label behavior. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`, `RELEASE_CHECKLIST.md:41-51`]
   - Keep existing parser-sensitive approval lines unchanged. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-CONTEXT.md:37-40`, `scripts/validate-skill-package.mjs:663-744`, `scripts/validate-skill-package.mjs:897-980`]

5. Record deterministic evidence in `28-VERIFICATION.md` and `28-UAT.md`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:98-103`]
   - Verification should mirror Phase 27's table format for requirement coverage, artifact verification, validation evidence, residual Han classification, risks, and human verification items. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:32-91`, `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:111-118`]
   - UAT should prove canonical invocation, legacy invocation, Chinese route aliases, Chinese article workflows, visible-label behavior, route stability, and output path stability. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`]

## Validator Extension Points

| Extension Point | Current Behavior | Phase 28 Change |
|-----------------|------------------|-----------------|
| `LANGUAGE_ALLOWLIST` | Inline entries scoped by category, paths, token or anchored pattern, rationale, and remediation. [VERIFIED: `scripts/validate-skill-package.mjs:36-384`] | Keep the shape and add coverage only for intentional exceptions that already exist in policy-approved categories. [VERIFIED: `LANGUAGE_POLICY.md:21-42`] |
| `validateLanguageAllowlistShape()` | Rejects invalid category, missing paths, broad Markdown path scopes, missing token/pattern, unanchored patterns, missing rationale, and missing remediation. [VERIFIED: `scripts/validate-skill-package.mjs:1063-1105`] | Keep this as the broad-allowlist drift gate; add `VAL-*` tests that prove broad scopes remain blocked. [VERIFIED: `scripts/validate-skill-package.test.mjs:510-530`] |
| `languageScanTargets()` | Builds targets from fixed docs plus route-derived references and legacy Xiaohei refs. [VERIFIED: `scripts/validate-skill-package.mjs:1045-1061`] | Add a `VAL-*` check that compares target coverage to the Phase 28 required surface list. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-22`] |
| `languageScanReport()` | Defaults to report mode unless `LANGUAGE_SCAN_ENFORCE=1`. [VERIFIED: `scripts/validate-skill-package.mjs:1165-1180`] | Make the normal validator stale-prose hard-fail; keep enforce-mode command as release evidence. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`] |
| `checks` array | Existing language checks appear after `REBRAND-*` and before `BOUNDARY-*`. [VERIFIED: `scripts/validate-skill-package.mjs:3053-3087`] | Insert stable `VAL-*` checks after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`] |
| `requiredCheckIds` | Current deterministic id list has 93 ids and mirrors validator order. [VERIFIED: `scripts/validate-skill-package.test.mjs:10-104`, current validator output] | Add the same `VAL-*` ids in the same order and update summary count assertions. [VERIFIED: `scripts/validate-skill-package.test.mjs:395-408`] |
| Parser helper exports | Tests import route parsing, output path tokens, and approval parsers directly. [VERIFIED: `scripts/validate-skill-package.test.mjs:699-914`] | Reuse helper-level tests for route/invocation/path stability instead of adding brittle full-prose assertions. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`] |

## Test Fixture Strategy

Use the existing temp-copy fixture pattern for all Phase 28 tests. [VERIFIED: `scripts/validate-skill-package.test.mjs:121-153`] Each failing fixture should mutate one stable marker, run the fixture validator, and assert the exact `VAL-*` id plus the affected path. [VERIFIED: existing examples in `scripts/validate-skill-package.test.mjs:437-530`]

| Test Need | Fixture Mutation | Expected Assertion |
|-----------|------------------|--------------------|
| Default validator hard-fails stale Chinese | Add `这是一段未迁移的中文说明。` to `LANGUAGE_POLICY.md` and run normal fixture validator. [VERIFIED: existing enforce-mode fixture uses this marker in `scripts/validate-skill-package.test.mjs:487-508`] | Nonzero exit, `LANG-SCAN-001` or `VAL-LANGUAGE-001`, `status=stale`, path and excerpt present. [VERIFIED: `scripts/validate-skill-package.mjs:1160-1180`] |
| Explicit enforce-mode evidence remains valid | Run clean fixture with `LANGUAGE_SCAN_ENFORCE=1`. [VERIFIED: `scripts/validate-skill-package.test.mjs:474-485`] | Exit 0 and updated total summary. [VERIFIED: current local enforce-mode validator output] |
| English-default surface coverage | Remove a stable marker from README, examples, `SKILL.md`, `openai.yaml`, NOTICE, release checklist, routing, or one route-local reference. [VERIFIED: target list in `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-22`] | The relevant `VAL-ENGLISH-*` check fails and names the exact file. [ASSUMED] |
| Broad allowlist drift | Replace a narrow path list with `["**/*.md"]`. [VERIFIED: `scripts/validate-skill-package.test.mjs:510-530`] | `LANG-SCAN-002` and a Phase 28 allowlist `VAL-*` check fail. [VERIFIED: `scripts/validate-skill-package.mjs:1078-1084`] |
| Route stability | Mutate an output suffix or remove a Chinese alias in `routing.md`. [VERIFIED: `scripts/validate-skill-package.test.mjs:628-647`, `scripts/validate-skill-package.test.mjs:916-956`, `scripts/validate-skill-package.test.mjs:1044-1063`] | Existing route check plus `VAL-COMPAT-001` fail. [ASSUMED] |
| Invocation stability | Replace `$visual-ip-illustrations` or `$ian-xiaohei-illustrations` in runtime/public docs. [VERIFIED: `scripts/validate-skill-package.test.mjs:532-610`] | Existing `REBRAND-*` check plus `VAL-COMPAT-001` fail. [ASSUMED] |
| Output path stability | Replace `assets/&lt;article-slug&gt;-sealos/` or another route path token. [VERIFIED: `scripts/validate-skill-package.test.mjs:649-663`] | Existing `REBRAND-PATH-001` plus `VAL-COMPAT-001` fail. [ASSUMED] |
| Release evidence markers | Remove the v1.5 evidence heading or one command marker from `RELEASE_CHECKLIST.md`. [VERIFIED: `RELEASE_CHECKLIST.md:5-31`] | `VAL-RELEASE-001` fails with `RELEASE_CHECKLIST.md`. [ASSUMED] |

Ordering tests should check only ids and stable ordering. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`, `scripts/validate-skill-package.test.mjs:219-270`] Marker assertions should use headings, exact paths, route ids, status tokens, output path tokens, and command strings rather than full paragraphs. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`]

## Required Commands

Run these during Phase 28 implementation and record final output in `28-VERIFICATION.md`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`]

```bash
node scripts/validate-skill-package.mjs
```

Current research baseline: `Summary: total=93 passed=93 failed=0 skipped=0`. [VERIFIED: local command execution]

```bash
LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs
```

Current research baseline: `Summary: total=93 passed=93 failed=0 skipped=0`. [VERIFIED: local command execution]

```bash
node --test scripts/validate-skill-package.test.mjs
```

Current research baseline: `tests 56`, `pass 56`, `fail 0`. [VERIFIED: local command execution]

```bash
git diff --check
```

Current research baseline: exit code 0 with no output. [VERIFIED: local command execution]

```bash
rg -n "[\p{Han}]" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md LANGUAGE_POLICY.md ian-xiaohei-illustrations scripts
```

Use this command as human-readable residual Han evidence; classification authority stays in the validator. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:71-91`, `scripts/validate-skill-package.mjs:1148-1180`]

## Release Evidence and UAT Artifact Shape

`28-VERIFICATION.md` should include frontmatter with phase, verified timestamp, status, score, overrides, VAL-01 through VAL-04 statuses, and human verification items. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:1-17`] Body sections should include Verdict, Requirement Coverage, Must-Have Checks, Artifact Verification, Validation Evidence, Residual Han Classification, Compatibility Smoke Coverage, Anti-Patterns Found, Risks, and Human Verification Items. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:26-118`]

`28-UAT.md` should prove maintainer-facing release readiness and compatibility behavior. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-36`] Required scenarios:

- Maintainer runs the default validator and stale Chinese is a hard failure. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]
- Maintainer runs enforce-mode validator and receives the same clean release evidence. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]
- Maintainer verifies canonical `$visual-ip-illustrations` and legacy `$ian-xiaohei-illustrations`. [VERIFIED: `README.md:172-181`, `examples/prompts.md:1-68`]
- Maintainer verifies Chinese aliases for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal remain accepted in route smoke prompts. [VERIFIED: `RELEASE_CHECKLIST.md:41-49`, `ian-xiaohei-illustrations/references/routing.md:7-13`]
- Maintainer verifies Chinese article illustration workflows and user-language visible labels remain approved multilingual exceptions. [VERIFIED: `LANGUAGE_POLICY.md:21-31`, `examples/prompts.md:69-153`]
- Maintainer verifies route ids, statuses, required references, output suffixes, and output paths remain stable. [VERIFIED: `ian-xiaohei-illustrations/references/routing.md:22-63`]

## Risks and Mitigations

| Risk | Why It Matters | Mitigation |
|------|----------------|------------|
| Stale prose detection blind spot | The scan is line-based and matches Han characters by line; a line with an approved token can mask adjacent stale Chinese on the same line. [VERIFIED: `scripts/validate-skill-package.mjs:1117-1146`] | Planner should add at least one fixture where an allowed token and stale prose appear on the same line, then tighten classification if it passes incorrectly. [ASSUMED] |
| Broad allowlist drift | Broad Markdown scopes would convert release validation into a permissive scan. [VERIFIED: `LANGUAGE_POLICY.md:32-42`, `scripts/validate-skill-package.mjs:1078-1084`] | Keep `LANG-SCAN-002` and add a Phase 28 `VAL-*` test for broad scope rejection. [VERIFIED: `scripts/validate-skill-package.test.mjs:510-530`] |
| Route drift | Language migration touches route docs and examples; route ids, aliases, default flags, statuses, output suffixes, and required references are compatibility surfaces. [VERIFIED: `LANGUAGE_POLICY.md:58-81`, `ian-xiaohei-illustrations/references/routing.md:22-30`] | Reuse `assertRebrandRouteTable()` and add `VAL-COMPAT-001` over the same route contract. [VERIFIED: `scripts/validate-skill-package.mjs:1365-1444`] |
| Evidence drift | Release checklist may mention older Phase 15/20/24 evidence while Phase 28 needs v1.5 evidence. [VERIFIED: `RELEASE_CHECKLIST.md:25-31`, `RELEASE_CHECKLIST.md:188-193`] | Add a narrow v1.5 final release gate and test it with `VAL-RELEASE-001`. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-37`] |
| Brittle marker assertions | Full-paragraph assertions fail under harmless prose edits. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`] | Assert headings, paths, ids, route statuses, command strings, and behavior tokens. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`] |
| Summary count mismatch | Adding checks changes validator total and test expectations. [VERIFIED: `scripts/validate-skill-package.test.mjs:203-217`, `scripts/validate-skill-package.test.mjs:395-408`] | Update `requiredCheckIds`, smoke summary assertions, and final evidence summaries in the same change set. [VERIFIED: `scripts/validate-skill-package.test.mjs:10-104`] |
| Parser-sensitive release lines | Approval parsers depend on exact headings and slash-delimited fields. [VERIFIED: `scripts/validate-skill-package.mjs:663-744`, `scripts/validate-skill-package.mjs:897-980`, `scripts/validate-skill-package.test.mjs:775-914`] | Keep existing Tom, Ferris, and Sealos approval lines unchanged; append v1.5 evidence gate as a separate section. [VERIFIED: `.planning/phases/27-public-documentation-and-example-migration/27-CONTEXT.md:37-40`] |

## Open Questions Resolved

1. **Should normal validator hard-fail stale Chinese?**
   - Resolved: yes. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]

2. **Should `LANGUAGE_SCAN_ENFORCE=1` remain in release evidence after default hard fail?**
   - Resolved: yes, as explicit redundant evidence. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-21`]

3. **Where should Phase 28 checks live in the ordered matrix?**
   - Resolved: after `LANG-*` checks and before `BOUNDARY-*` checks. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:23-27`]

4. **Which surfaces are in English-default coverage scope?**
   - Resolved: README, examples, `LANGUAGE_POLICY.md`, `SKILL.md`, `openai.yaml`, routing, route-local references, NOTICE, and release checklist. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-22`]

5. **Can Phase 28 edit `RELEASE_CHECKLIST.md`?**
   - Resolved: yes, narrowly, when execution needs a public v1.5 final release gate anchor. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:33-37`]

6. **Should the plan add dependencies or a build framework?**
   - Resolved: no external dependency is needed; the project boundary is a lightweight skill package with dependency-free Node validation. [VERIFIED: `.planning/PROJECT.md:99-102`, `scripts/validate-skill-package.mjs:1-14`]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node test suite | Yes | v24.13.0 | Use the local active Node runtime. [VERIFIED: `node --version`] |
| Git | `git diff --check` and commit | Yes | Available through shell commands run during research | Use repository git CLI. [VERIFIED: local `git diff --check` and status commands] |
| `gsd-tools` | Optional GSD helper queries | No executable found in current shell | - | Use direct Markdown/file inspection. [VERIFIED: `command -v gsd-tools` produced no path; Phase 27 verifier used manual checks when unavailable at `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md:26-31`] |

## Sources

### Primary
- `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md` - Phase 28 locked decisions, target surfaces, check ordering, evidence shape. [VERIFIED]
- `.planning/REQUIREMENTS.md` - VAL-01 through VAL-04 definitions. [VERIFIED]
- `scripts/validate-skill-package.mjs` - validator architecture, language scan, checks, route and release parsers. [VERIFIED]
- `scripts/validate-skill-package.test.mjs` - Node fixture pattern, ordering tests, route/path/invocation stability tests. [VERIFIED]
- `LANGUAGE_POLICY.md` - English-default policy and multilingual exception contract. [VERIFIED]

### Supporting
- `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md` - latest evidence pattern and current green baseline. [VERIFIED]
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md` - target surfaces. [VERIFIED]
- `AGENTS.md` - project constraints and conventions. [VERIFIED]

## Metadata

**Confidence breakdown:**
- Current validator architecture: HIGH - verified by reading validator/test files and running current commands. [VERIFIED: local command execution]
- Recommended plan shape: HIGH - locked by Phase 28 context and current extension points. [VERIFIED: `.planning/phases/28-english-default-validation-and-release-evidence/28-CONTEXT.md:18-39`]
- Fixture strategy: HIGH - current test suite already uses the needed temp-copy mutation pattern. [VERIFIED: `scripts/validate-skill-package.test.mjs:121-153`]
- Residual scan blind-spot mitigation: MEDIUM - line-level classifier behavior is verified, exact tightening approach should be validated during implementation. [VERIFIED: `scripts/validate-skill-package.mjs:1117-1146`]

**Research date:** 2026-06-15
**Valid until:** 2026-07-15 for this repository state, with re-check required after validator or route-table edits. [ASSUMED]
