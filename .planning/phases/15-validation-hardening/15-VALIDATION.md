---
phase: 15
slug: validation-hardening
status: approved
nyquist_compliant: true
wave_0_complete: true
created: 2026-06-13
---

# Phase 15 - Validation Strategy

Per-phase validation contract for local validator and Node test hardening.

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node built-in test runner |
| **Config file** | none - direct script execution |
| **Quick run command** | `node scripts/validate-skill-package.mjs` |
| **Full suite command** | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs && git diff --check` |
| **Estimated runtime** | ~5 seconds |

## Sampling Rate

- **After every task commit:** Run `node scripts/validate-skill-package.mjs` for validator implementation tasks and `node --test scripts/validate-skill-package.test.mjs` for test-suite tasks.
- **After every plan wave:** Run `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs && git diff --check`.
- **Before `$gsd-verify-work`:** Full suite must be green.
- **Max feedback latency:** 10 seconds.

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 15-01-01 | 01 | 1 | FVAL-01, FVAL-02 | T-15-01-01 | Route references stay inside package boundary | validator | `node scripts/validate-skill-package.mjs` | yes | pending |
| 15-01-02 | 01 | 1 | FVAL-03, FVAL-04 | T-15-01-03 | Ferris route-local markers remain isolated and actionable | validator | `node scripts/validate-skill-package.mjs` | yes | pending |
| 15-01-03 | 01 | 1 | FVAL-05, FVAL-06 | T-15-01-02 | Public and generated sample gates require release evidence | validator | `node scripts/validate-skill-package.mjs && git diff --check` | yes | pending |
| 15-02-01 | 02 | 2 | FVAL-01, FVAL-02, FVAL-07 | T-15-02-01 | Stable parser/order/full-pass behavior is locked by tests | regression | `node --test scripts/validate-skill-package.test.mjs` | yes | pending |
| 15-02-02 | 02 | 2 | FVAL-06, FVAL-07 | T-15-02-02 | Ferris public and generated approval parsing rejects incomplete records | regression | `node --test scripts/validate-skill-package.test.mjs` | yes | pending |
| 15-02-03 | 02 | 2 | FVAL-03, FVAL-04, FVAL-05, FVAL-07 | T-15-02-01 | Fixture failures stay local, specific, and path-addressable | regression | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs` | yes | pending |
| 15-03-01 | 03 | 3 | FVAL-01, FVAL-02, FVAL-03, FVAL-04, FVAL-05, FVAL-06, FVAL-07 | T-15-03-01 | Final evidence records command, exit status, and green totals | evidence | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs && git diff --check` | yes | pending |
| 15-03-02 | 03 | 3 | FVAL-01, FVAL-02, FVAL-03, FVAL-04, FVAL-05, FVAL-06, FVAL-07 | T-15-03-02 | State updates are scoped to Phase 15 and FVAL requirements | evidence | `rg "FVAL-01|FVAL-07" .planning/REQUIREMENTS.md .planning/phases/15-validation-hardening/15-UAT.md` | yes | pending |
| 15-03-03 | 03 | 3 | FVAL-01, FVAL-02, FVAL-03, FVAL-04, FVAL-05, FVAL-06, FVAL-07 | T-15-03-SC | Closeout commands stay dependency-free and local | evidence | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs && git diff --check` | yes | pending |

## Wave 0 Requirements

Existing infrastructure covers all phase requirements:

- [x] `scripts/validate-skill-package.mjs` - local dependency-free validator entrypoint.
- [x] `scripts/validate-skill-package.test.mjs` - Node built-in test runner coverage.
- [x] `RELEASE_CHECKLIST.md` - maintainer command surface for validator and test execution.

## Manual-Only Verifications

All Phase 15 behaviors have automated verification. Human review is limited to reading `15-VERIFICATION.md` and `15-UAT.md` after command evidence is recorded.

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies.
- [x] Sampling continuity: no 3 consecutive tasks without automated verify.
- [x] Wave 0 covers all MISSING references.
- [x] No watch-mode flags.
- [x] Feedback latency < 10s.
- [x] `nyquist_compliant: true` set in frontmatter.

**Approval:** approved 2026-06-13
