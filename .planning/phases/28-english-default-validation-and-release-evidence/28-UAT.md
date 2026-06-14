---
status: complete
phase: 28-english-default-validation-and-release-evidence
source:
  - 28-01-SUMMARY.md
  - 28-VERIFICATION.md
started: 2026-06-14T19:24:43Z
updated: 2026-06-14T19:24:43Z
---

## Current Test

[testing complete]

## Tests

### 1. Default Validator Release Gate
expected: `node scripts/validate-skill-package.mjs` passes on the clean repository and proves default stale Chinese prose detection, English-default coverage, route compatibility, output path stability, docs consistency, and Release 1.5 evidence markers.
result: pass

### 2. Enforce-Mode Evidence Command
expected: `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` passes with the same 98/98 result and remains documented as explicit release evidence.
result: pass

### 3. Node Regression Matrix
expected: `node --test scripts/validate-skill-package.test.mjs` passes all 66 tests, including `VAL-*` ordering, stale prose fixtures, same-line stale detection, broad allowlist rejection, route-local reference drift, invocation drift, output path drift, and Release 1.5 marker drift.
result: pass

### 4. Residual Han Classification
expected: The broad residual Han scan is fully classified into approved route aliases, prompt placeholders, attribution/source names, user-language visible labels, compatibility fixtures, Chinese article examples, or negative test fixtures, while the validator reports stale=0.
result: pass

### 5. Compatibility Smoke and Release Evidence
expected: `VAL-COMPAT-001`, `VAL-RELEASE-001`, `RELEASE_CHECKLIST.md`, and `28-01-SUMMARY.md` preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, Chinese route aliases, route ids/statuses, output suffixes, visible-label behavior, and the final Release 1.5 command evidence set.
result: pass

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

None.
