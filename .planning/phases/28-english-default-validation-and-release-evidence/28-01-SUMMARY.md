---
status: completed
plan_id: 28-01
phase: 28
plan_name: English-Default Validation and Release Evidence
commit_hash: 92b36b1
updated: 2026-06-14T19:13:04Z
requirements:
  - VAL-01
  - VAL-02
  - VAL-03
  - VAL-04
files_changed:
  - scripts/validate-skill-package.mjs
  - scripts/validate-skill-package.test.mjs
  - RELEASE_CHECKLIST.md
  - .planning/phases/28-english-default-validation-and-release-evidence/28-01-SUMMARY.md
---

# Phase 28 Plan 28-01: English-Default Validation and Release Evidence Summary

## Objective

Harden the final v1.5 English-default migration gate so maintainers can verify English-default coverage, approved multilingual exceptions, stale-language failure behavior, route stability, docs consistency, and release readiness locally.

## Files Changed

| File | Purpose |
| --- | --- |
| `scripts/validate-skill-package.mjs` | Added default stale-prose hard failure, exact prompt-placeholder allowlist entries, and five ordered `VAL-*` release checks. |
| `scripts/validate-skill-package.test.mjs` | Updated deterministic matrix coverage to 98 checks and added Phase 28 fixture coverage. |
| `RELEASE_CHECKLIST.md` | Added the narrow `## Release 1.5 English-Default Review` evidence anchor while preserving Tom, Ferris, and Sealos parser-sensitive approval records. |
| `.planning/phases/28-english-default-validation-and-release-evidence/28-01-SUMMARY.md` | Recorded execution evidence and verify-work handoff. |

## Tasks Completed

| Task | Status | Evidence |
| --- | --- | --- |
| Task 1: Harden validator `VAL-*` gates and default stale-prose failure | Completed | Validator now reports 98/98 and includes `VAL-ENGLISH-001`, `VAL-ENGLISH-002`, `VAL-LANGUAGE-001`, `VAL-COMPAT-001`, and `VAL-RELEASE-001` after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. |
| Task 2: Harden Node regression tests for Phase 28 validation behavior | Completed | Node suite now reports `tests 66`, `pass 66`, `fail 0`, covering normal stale failure, enforce-mode clean pass, approved exceptions, broad allowlist rejection, route/invocation/path stability, and release marker drift. |
| Task 3: Add Release 1.5 evidence anchor and record execution summary | Completed | `RELEASE_CHECKLIST.md` contains `## Release 1.5 English-Default Review`; this summary records final command evidence and UAT handoff. |

## Validation Evidence

| Command | Result |
| --- | --- |
| `node scripts/validate-skill-package.mjs` | PASS: `Summary: total=98 passed=98 failed=0 skipped=0` |
| `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` | PASS: `Summary: total=98 passed=98 failed=0 skipped=0` |
| `node --test scripts/validate-skill-package.test.mjs` | PASS: `tests 66`, `pass 66`, `fail 0`, `duration_ms 7398.753417` |
| `git diff --check` | PASS: exit 0 with no output |
| `rg -n "[\\p{Han}]" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md LANGUAGE_POLICY.md ian-xiaohei-illustrations scripts` | PASS WITH CLASSIFICATION: all findings map to approved multilingual exception categories; validator enforce mode reports stale=0. |

## Residual Han Classification

| Category | Files | Classification |
| --- | --- | --- |
| Route aliases | `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, `LANGUAGE_POLICY.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, validator/test fixtures | Approved exact aliases for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route compatibility. |
| Prompt placeholders | `LANGUAGE_POLICY.md`, Xiaohei prompt templates, validator allowlist | Approved exact placeholders such as `{正文配图主题}`, `{结构类型：...}`, `{元素1}`, `{元素2}`, `{标注词1}`, and related prompt fields. |
| Attribution/source names | `NOTICE.md` | Approved Ian Xiaohei attribution token `小黑`. |
| User-language visible labels | `examples/prompts.md`, Littlebox label reference, validator allowlist | Approved visible-label fixtures such as `原始材料`, `判断`, and `输出`. |
| Compatibility smoke fixtures | `SKILL.md`, `routing.md`, Xiaohei compatibility references, validator tests | Approved runtime and route smoke markers preserving legacy Chinese workflow behavior. |
| Chinese article illustration examples | `examples/prompts.md` | Approved copyable prompt examples that intentionally model Chinese article-label behavior. |

No stale Chinese prose findings remain under the validator's default path or explicit enforce mode.

## Docs Consistency Coverage

The validator covers README, examples, `LANGUAGE_POLICY.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md`, route-local references, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.

`VAL-ENGLISH-001` checks public and runtime English-default markers. `VAL-ENGLISH-002` checks route-local reference participation in language scan targets. `VAL-RELEASE-001` checks final Release 1.5 command and compatibility evidence markers.

## Compatibility Smoke Coverage

`VAL-COMPAT-001` and Node fixtures cover:

- canonical invocation `$visual-ip-illustrations`
- legacy invocation `$ian-xiaohei-illustrations`
- Chinese route aliases
- route ids: `xiaohei`, `littlebox`, `tom`, `ferris`, `sealos`
- route statuses: `active`, `gated-authorized`, `source-reviewed`, `brand-owned`
- output suffixes and raw plus escaped output paths
- visible-label behavior in the user's language
- route-local reference isolation

## UAT Handoff

`$gsd-verify-work 28` should use this summary to produce `28-VERIFICATION.md` and `28-UAT.md`. UAT should confirm maintainers can run the default validator, run explicit enforce-mode validation, inspect residual Han classification, verify canonical and legacy invocations, verify Chinese route aliases, verify Chinese article workflows, verify visible-label behavior, and verify route/output path stability.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed same-line approved-token stale prose masking**
- **Found during:** Task 1 validation hardening
- **Issue:** A line containing an approved Chinese token could also contain unrelated stale Chinese prose.
- **Fix:** `classifyLanguageLine()` now removes approved exact tokens in longest-token order and emits a stale finding when residual Han characters remain.
- **Files modified:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

**2. [Rule 2 - Missing critical functionality] Added exact prompt-placeholder allowlist entries**
- **Found during:** Task 1 validation run
- **Issue:** Phase 28 default hard-fail surfaced existing Xiaohei prompt placeholders that were approved by policy but absent from the executable allowlist.
- **Fix:** Added exact token-level allowlist entries for the missing prompt placeholders.
- **Files modified:** `scripts/validate-skill-package.mjs`

## Known Stubs

None.

## Threat Flags

None.

## Self-Check: PASSED

- Summary file exists at `.planning/phases/28-english-default-validation-and-release-evidence/28-01-SUMMARY.md`.
- Changed files are limited to the plan `files_modified` list.
- `28-VERIFICATION.md` and `28-UAT.md` were not created by this executor.
- Final validation commands passed as recorded above.
