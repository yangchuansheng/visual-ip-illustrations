---
phase: 28-english-default-validation-and-release-evidence
verified: 2026-06-14T19:19:41Z
status: passed
score: 5/5 must-haves verified
overrides_applied: 0
requirements:
  - id: VAL-01
    status: verified
  - id: VAL-02
    status: verified
  - id: VAL-03
    status: verified
  - id: VAL-04
    status: verified
human_verification: []
---

# Phase 28: English-Default Validation and Release Evidence Verification Report

**Phase Goal:** Maintainers can verify the English-default migration locally and release it with deterministic evidence.
**Verified:** 2026-06-14T19:19:41Z
**Status:** passed
**Re-verification:** No - initial verification

## Verdict

Phase 28 is verified. The validator now enforces English-default coverage, default stale-prose hard failure, narrow multilingual exceptions, route and invocation compatibility, output path stability, docs consistency, and Release 1.5 evidence markers. The Node suite exercises the new `VAL-*` checks and failure fixtures, and the final command set passes on the clean repository.

`gsd-tools` was unavailable in this shell, so roadmap, requirements, plan frontmatter, artifacts, key links, and release evidence were verified directly from local files and commands.

## Requirement Coverage

| Requirement | Status | Evidence |
| --- | --- | --- |
| VAL-01 | VERIFIED | `VAL-ENGLISH-001` checks README, examples, `LANGUAGE_POLICY.md`, `SKILL.md`, `openai.yaml`, routing, NOTICE, and release checklist markers. `VAL-ENGLISH-002` derives route-local reference scan targets from `routing.md` and requires headings plus English content markers. Evidence: `scripts/validate-skill-package.mjs:1358`, `scripts/validate-skill-package.mjs:1404`, validator 98/98. |
| VAL-02 | VERIFIED | `languageScanReport({ enforce = true })` makes normal validator execution fail on stale Han prose; `classifyLanguageLine()` removes approved exact tokens and still emits stale findings for same-line extra prose. `VAL-LANGUAGE-001` requires all approved categories and stale=0. Evidence: `scripts/validate-skill-package.mjs:1141`, `scripts/validate-skill-package.mjs:1204`, `scripts/validate-skill-package.mjs:1428`. |
| VAL-03 | VERIFIED | Node tests include ordered `VAL-*` ids, normal stale hard-fail, same-line stale fixture, broad allowlist rejection, English marker drift, route-local marker drift, canonical and legacy invocation drift, Chinese alias drift, raw/escaped output path drift, and Release 1.5 marker drift. Evidence: `scripts/validate-skill-package.test.mjs:94`, `scripts/validate-skill-package.test.mjs:539`, `scripts/validate-skill-package.test.mjs:562`, `scripts/validate-skill-package.test.mjs:764`, `scripts/validate-skill-package.test.mjs:788`, `scripts/validate-skill-package.test.mjs:856`. |
| VAL-04 | VERIFIED | `RELEASE_CHECKLIST.md` contains `## Release 1.5 English-Default Review` with default validator, enforce-mode validator, Node test, `git diff --check`, residual Han classification, docs consistency, and compatibility smoke coverage markers. `28-01-SUMMARY.md` records the same command evidence and UAT handoff. Evidence: `RELEASE_CHECKLIST.md:31`, `.planning/phases/28-english-default-validation-and-release-evidence/28-01-SUMMARY.md:43`. |

## Must-Have Checks

| # | Must-have | Status | Evidence |
| --- | --- | --- | --- |
| 1 | Normal `node scripts/validate-skill-package.mjs` hard-fails stale Chinese prose outside approved multilingual exceptions. | VERIFIED | Normal validator passed clean repo at `Summary: total=98 passed=98 failed=0 skipped=0`; fixture tests prove stale prose fails in normal mode and same-line stale prose fails even beside approved aliases. |
| 2 | Explicit `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` passes on the clean repo and remains release evidence. | VERIFIED | Enforce-mode command passed at `Summary: total=98 passed=98 failed=0 skipped=0`; Release 1.5 checklist records the explicit command. |
| 3 | `VAL-*` checks cover English-default surfaces, exceptions, route/invocation stability, output path stability, docs consistency, and release evidence. | VERIFIED | `VAL-ENGLISH-001`, `VAL-ENGLISH-002`, `VAL-LANGUAGE-001`, `VAL-COMPAT-001`, and `VAL-RELEASE-001` appear after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. |
| 4 | Node tests cover `VAL-*`, stale fixtures, enforce-mode clean fixture, broad allowlist rejection, route stability, invocation stability, output path stability, and release marker drift. | VERIFIED | `node --test scripts/validate-skill-package.test.mjs` passed with `tests 66`, `pass 66`, `fail 0`; source fixtures cover each required behavior. |
| 5 | Final execution evidence includes default validator, enforce-mode validator, Node tests, `git diff --check`, and residual Han scan command output. | VERIFIED | All required commands were rerun during verification; `28-01-SUMMARY.md` records execution evidence and leaves `28-UAT.md` for verify-work. |

## Artifact Verification

| Artifact | Expected | Status | Details |
| --- | --- | --- | --- |
| `scripts/validate-skill-package.mjs` | Dependency-free validator with ordered `VAL-*` checks and default stale-prose hard failure | VERIFIED | `languageScanTargets()` includes fixed docs plus route-derived references; `validateLanguageAllowlistShape()` rejects broad Markdown scopes; `languageScanReport()` defaults to enforce mode; `VAL-*` checks are ordered after `LANG-SCAN-002`. |
| `scripts/validate-skill-package.test.mjs` | Node regression coverage for Phase 28 behavior and deterministic matrix | VERIFIED | `requiredCheckIds` includes all five `VAL-*` ids in production order; fixture tests prove stale, allowlist, route, invocation, path, and release marker failures. |
| `RELEASE_CHECKLIST.md` | Release 1.5 English-default evidence anchor with parser-sensitive prior records intact | VERIFIED | New anchor is at `RELEASE_CHECKLIST.md:31`; Tom, Ferris, and Sealos public/generated sample records remain present later in the file. |
| `.planning/phases/28-english-default-validation-and-release-evidence/28-01-SUMMARY.md` | Execution evidence and verify-work/UAT handoff | VERIFIED | Summary records validator 98/98, enforce validator 98/98, Node tests 66/66, `git diff --check`, residual Han classification, docs consistency, and compatibility smoke coverage. |

## Key Link Verification

| From | To | Via | Status | Details |
| --- | --- | --- | --- | --- |
| `scripts/validate-skill-package.mjs` | `LANGUAGE_POLICY.md` | `LANGUAGE_POLICY_FILE`, allowlist categories, language scan targets | WIRED | `LANG-POLICY-*`, `LANG-SCAN-*`, and `VAL-LANGUAGE-001` read policy surfaces and enforce the exception contract. |
| `scripts/validate-skill-package.mjs` | `ian-xiaohei-illustrations/references/routing.md` | `routeRows()` and route-derived references | WIRED | Route rows drive reference target coverage and `VAL-COMPAT-001` route id/status/suffix/alias checks. |
| `scripts/validate-skill-package.test.mjs` | `scripts/validate-skill-package.mjs` | fixture validator subprocess and exported parser helpers | WIRED | Fixture tests mutate copied repos and assert exact failed check ids and paths. |
| `scripts/validate-skill-package.mjs` | `RELEASE_CHECKLIST.md` | `assertPhase28ReleaseEvidenceMarkers()` | WIRED | `VAL-RELEASE-001` fails when the Release 1.5 heading or command marker is removed. |

## Data-Flow Trace

| Artifact | Data Variable | Source | Produces Real Data | Status |
| --- | --- | --- | --- | --- |
| `scripts/validate-skill-package.mjs` | `targets` from `languageScanTargets()` | Fixed docs plus `routeRows().flatMap(routeReferencePaths)` | Yes | VERIFIED |
| `scripts/validate-skill-package.mjs` | `findings` from `collectLanguageFindings()` | Reads every target file and classifies Han lines through allowlist entries | Yes | VERIFIED |
| `scripts/validate-skill-package.mjs` | `checks` array | `defineCheck(...)` calls rendered by `runChecks()` | Yes | VERIFIED |
| `scripts/validate-skill-package.test.mjs` | fixture results | `runFixtureValidator()` subprocesses mutated repo copies | Yes | VERIFIED |

## Validation Evidence

| Command | Result | Evidence |
| --- | --- | --- |
| `node scripts/validate-skill-package.mjs` | PASS | `Summary: total=98 passed=98 failed=0 skipped=0` |
| `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` | PASS | `Summary: total=98 passed=98 failed=0 skipped=0` |
| `node --test scripts/validate-skill-package.test.mjs` | PASS | `tests 66`, `pass 66`, `fail 0`, `duration_ms 7247.425041` |
| `git diff --check` | PASS | Exit code 0 with no output. |
| `rg -n "[\\p{Han}]" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md LANGUAGE_POLICY.md ian-xiaohei-illustrations scripts` | PASS WITH CLASSIFICATION | Residual findings are approved aliases, prompt placeholders, attribution/source names, user-language labels, compatibility fixtures, or negative test fixtures. Enforce-mode validator reports stale=0. |

## Residual Han Classification

| Category | Files | Classification |
| --- | --- | --- |
| Route aliases | README, examples, release checklist, language policy, `SKILL.md`, routing, validator/tests | Approved exact aliases for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route compatibility. |
| Prompt placeholders | `LANGUAGE_POLICY.md`, Xiaohei prompt templates, validator allowlist | Approved prompt fields such as `{正文配图主题}`, `{结构类型：...}`, `{元素1}`, `{标注词1}`, and related fields. |
| Attribution/source names | `NOTICE.md` | Approved Ian/Xiaohei attribution token `小黑`. |
| User-language visible labels | `examples/prompts.md`, Littlebox label reference, validator allowlist | Approved visible-label fixtures such as `原始材料`, `判断`, and `输出`. |
| Compatibility smoke fixtures | `SKILL.md`, routing, Xiaohei compatibility references, validator tests | Approved markers preserving legacy Chinese workflow behavior. |
| Chinese article illustration examples | `examples/prompts.md` | Approved copyable examples that intentionally model Chinese article-label behavior. |
| Negative stale fixtures | `scripts/validate-skill-package.test.mjs` | Expected test strings such as `这是一段未迁移的中文说明。`; fixture tests prove these fail validation. |

No stale Chinese prose remains in production documentation or route references under default validator mode or explicit enforce mode.

## Compatibility Smoke Coverage

`VAL-COMPAT-001` and Node fixtures cover canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, Chinese route aliases, route ids `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`, route statuses `active`, `gated-authorized`, `source-reviewed`, and `brand-owned`, output suffixes, raw and escaped output paths, visible-label behavior in the user's language, and route-local reference isolation.

## Release Evidence

The Release 1.5 checklist anchor records the full evidence set: default validator, explicit enforce-mode validator, Node tests, `git diff --check`, residual Han classification, docs consistency, and compatibility smoke coverage. Existing parser-sensitive Tom, Ferris, and Sealos records remain intact as independent release gates.

`28-01-SUMMARY.md` also records command summaries and explicitly leaves `28-UAT.md` for verify-work. For this verifier pass, automated compatibility smoke coverage is sufficient because the phase objective is deterministic local release evidence and all required command gates are reproducible.

## Behavioral Spot-Checks

| Behavior | Command | Result | Status |
| --- | --- | --- | --- |
| Default release validator passes clean repo | `node scripts/validate-skill-package.mjs` | 98/98 checks passed | PASS |
| Enforce-mode release validator passes clean repo | `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` | 98/98 checks passed | PASS |
| Regression fixtures pass | `node --test scripts/validate-skill-package.test.mjs` | 66/66 tests passed | PASS |
| Whitespace hygiene passes | `git diff --check` | Exit 0, no output | PASS |

## Probe Execution

No `scripts/*/tests/probe-*.sh` probes were declared or discovered for Phase 28. This is a validator and release-evidence phase; the executable proof is the required command set above.

## Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
| --- | --- | --- | --- | --- |
| None | - | - | - | No blocker debt markers or stubs were found in Phase 28-owned files. `placeholder` matches are parser negative fixtures; `return []` matches are parser fallback behavior; `console.log` renders validator output. |

## Risks

- The raw residual Han scan is intentionally broad and includes source code tokens and negative test fixtures. The validator's classified scan is the release authority and reports zero stale findings.
- `28-UAT.md` remains a verify-work artifact as recorded by the executor summary. Automated compatibility smoke coverage covers the deterministic surfaces requested for this verification.

## Human Verification Items

None.

## Gaps Summary

No gaps found. All VAL requirements, roadmap success criteria within Phase 28's deterministic evidence scope, plan must-haves, artifacts, key links, and required commands are verified.

---

_Verified: 2026-06-14T19:19:41Z_
_Verifier: the agent (gsd-verifier)_
