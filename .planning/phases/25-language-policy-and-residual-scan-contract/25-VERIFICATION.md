---
phase: 25-language-policy-and-residual-scan-contract
verified: 2026-06-14T16:16:59Z
status: passed
score: 7/7 must-haves verified
overrides_applied: 0
human_verification:
  - test: "Open LANGUAGE_POLICY.md and confirm the policy is clear enough for a maintainer to apply during Phase 26 and Phase 27 prose migration."
    expected: "The maintainer can identify English-default surfaces, approved multilingual exceptions, allowlist entry shape, scan output fields, compatibility surfaces, and migration handoff without reading validator code."
    why_human: "Clarity and usability of policy prose require maintainer judgment."
  - test: "Review the residual risk that production validation stays in report mode until Phase 28 and decide whether this transitional behavior remains acceptable."
    expected: "The maintainer accepts that stale Chinese prose is reported today and hard-fail enforcement is deferred to Phase 28 after migration surfaces are translated."
    why_human: "Release-risk acceptance is a product/maintainer decision even though enforce-mode behavior is programmatically verified."
---

# Phase 25: Language Policy and Residual Scan Contract Verification Report

**Phase Goal:** Maintainers can identify the default language, allowed multilingual exceptions, and scan rules before broad docs migration begins.
**Verified:** 2026-06-14T16:16:59Z
**Status:** passed
**Re-verification:** No, initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Maintainer can read that English is the default for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy. | VERIFIED | `LANGUAGE_POLICY.md` has `Default Language` and lists all LANG-01 surfaces. `LANG-POLICY-001` passed in `node scripts/validate-skill-package.mjs`. |
| 2 | Maintainer can read approved exception categories for Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples. | VERIFIED | `LANGUAGE_POLICY.md` has `Approved Multilingual Exceptions`; `LANG-POLICY-002` passed and checks all exception categories plus allowlist fields. |
| 3 | Maintainer can run a residual Chinese scan or validator command that reports stale prose separately from approved multilingual tokens. | VERIFIED | `LANG-SCAN-001` passed in report mode. `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` failed as expected with `approved=244 stale=874` and formatted approved/stale samples. |
| 4 | The policy identifies the core compatibility surfaces future phases must preserve. | VERIFIED | `LANGUAGE_POLICY.md` has `Compatibility Surfaces` covering canonical and legacy invocations, route ids, aliases, default flags, suffixes, output paths, required references, source/rights/brand records, QA gates, visible-label behavior, and route-local authorities. |
| 5 | The validator includes stable LANG-POLICY and LANG-SCAN checks wired into the production command. | VERIFIED | `scripts/validate-skill-package.mjs` defines `LANG-POLICY-001`, `LANG-POLICY-002`, `LANG-SCAN-001`, and `LANG-SCAN-002` after `REBRAND-DOCS-001`; production validator output reports all four as PASS. |
| 6 | Node fixture tests prove policy marker failures, approved/stale scan separation, enforce-mode stale prose failure, and broad allowlist rejection. | VERIFIED | `scripts/validate-skill-package.test.mjs` contains five Phase 25 tests and `node --test scripts/validate-skill-package.test.mjs` reports `tests 56`, `pass 56`, `fail 0`. |
| 7 | Existing route, output path, invocation, source/rights/brand, QA, and boundary contracts remain stable. | VERIFIED | Production validator reports 93 total checks passing, including route, prompt, source, rights, brand, QA, rebrand, and boundary checks. |

**Score:** 7/7 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `LANGUAGE_POLICY.md` | English-default policy authority and multilingual exception contract | VERIFIED | 91 lines; includes required sections `Default Language`, `Approved Multilingual Exceptions`, `Allowlist Entry Shape`, `Residual Chinese Scan Contract`, `Compatibility Surfaces`, and `Migration Handoff`. |
| `scripts/validate-skill-package.mjs` | LANG-POLICY/LANG-SCAN validator checks and scanner helpers | VERIFIED | Defines `LANGUAGE_POLICY_FILE`, `HAN_CHARACTER_PATTERN`, language surfaces/categories/allowlist, scan target derivation, allowlist shape validation, line classification, finding formatting, report/enforce mode, and four LANG checks. |
| `scripts/validate-skill-package.test.mjs` | Node fixture coverage for policy markers, approved exceptions, stale prose, and allowlist shape | VERIFIED | Adds four LANG ids to `requiredCheckIds`, supports `runFixtureValidator(fixtureRoot, extraEnv = {})`, asserts 93-check summary, and adds five Phase 25 fixture tests. |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `scripts/validate-skill-package.mjs` | `LANGUAGE_POLICY.md` | `LANGUAGE_POLICY_FILE` and `requireFile()` in `LANG-POLICY-*` checks | WIRED | Missing policy markers cause fixture failures in `LANG-POLICY-001` and `LANG-POLICY-002`. |
| `scripts/validate-skill-package.mjs` | `ian-xiaohei-illustrations/references/routing.md` | `routeRows()` and `routeReferencePaths()` inside `languageScanTargets()` | WIRED | Scanner targets include routing metadata and route-derived required references through safe path helpers. |
| `scripts/validate-skill-package.test.mjs` | `scripts/validate-skill-package.mjs` | `runValidator()` and `runFixtureValidator()` subprocesses | WIRED | Tests execute the actual validator against live repo and copied fixtures. |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|---------------|--------|--------------------|--------|
| `scripts/validate-skill-package.mjs` | `policyText` | `requireFile(LANGUAGE_POLICY_FILE)` | Yes | Policy checks inspect the real root policy file. |
| `scripts/validate-skill-package.mjs` | `targets` | `languageScanTargets()` from docs, skill files, route table, route references, legacy refs | Yes | Scan reads real repository files and filters to existing paths. |
| `scripts/validate-skill-package.mjs` | `findings` | `collectLanguageFindings()` from file lines containing Han characters | Yes | Findings classify real line content as approved or stale and format path:line evidence. |
| `scripts/validate-skill-package.test.mjs` | fixture validator output | `spawnSync(process.execPath, [fixtureRoot/scripts/validate-skill-package.mjs])` | Yes | Tests mutate copied repository fixtures and assert actual validator stdout/status. |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Production validator remains green in report mode | `node scripts/validate-skill-package.mjs` | Exit 0; `Summary: total=93 passed=93 failed=0 skipped=0`; four LANG checks PASS | PASS |
| Node fixtures pass | `node --test scripts/validate-skill-package.test.mjs` | Exit 0; `tests 56`, `pass 56`, `fail 0` | PASS |
| Whitespace diff is clean | `git diff --check` | Exit 0; no output | PASS |
| Enforce mode hard-fails current stale prose | `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` | Exit 1 as expected; `LANG-SCAN-001` fails with approved/stale counts and sample findings | PASS |

### Probe Execution

| Probe | Command | Result | Status |
|-------|---------|--------|--------|
| Step 7c | `find scripts -path '*/tests/probe-*.sh' -type f` | No phase-declared or conventional probes found for this documentation/validator phase | SKIPPED |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| LANG-01 | `25-01-PLAN.md` | Single English-default policy for docs, skill instructions, references, examples, release materials, validation output, code, scripts, comments, commits, and PR copy. | SATISFIED | `LANGUAGE_POLICY.md` lists every surface; `LANG-POLICY-001` passes and has a fixture that fails when `validation output` is removed. |
| LANG-02 | `25-01-PLAN.md` | Explicit exception allowlist for approved multilingual surfaces. | SATISFIED | Policy lists all approved exception categories and allowlist fields; `LANG-POLICY-002` and `LANG-SCAN-002` pass; tests fail on missing exception category and broad allowlist entries. |
| LANG-03 | `25-01-PLAN.md` | Residual Chinese scan distinguishes policy-approved multilingual tokens from stale Chinese prose. | SATISFIED | `LANG-SCAN-001` passes in production report mode; enforce-mode spot-check and fixture tests show approved tokens and stale prose are separately reported with status/category/path/excerpt/remediation. |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `LANGUAGE_POLICY.md` | 27 | Prompt placeholder examples | Info | Intentional approved multilingual placeholder policy text. |
| `scripts/validate-skill-package.mjs` | 31, 101-131, 1786-1876 | Placeholder wording | Info | Intentional validation of prompt placeholder compatibility. |
| `scripts/validate-skill-package.test.mjs` | 801-1850 | `TBD` / placeholder date fixture cases | Info | Existing and intentional negative fixtures that verify placeholder approval dates fail. |

### Human Verification Required

#### 1. Maintainer Policy Clarity Review

**Test:** Open `LANGUAGE_POLICY.md` and confirm the policy is clear enough for a maintainer to apply during Phase 26 and Phase 27 prose migration.
**Expected:** The maintainer can identify English-default surfaces, approved multilingual exceptions, allowlist entry shape, scan output fields, compatibility surfaces, and migration handoff without reading validator code.
**Why human:** Clarity and usability of policy prose require maintainer judgment.

#### 2. Transitional Enforcement Acceptance

**Test:** Review the residual risk that production validation stays in report mode until Phase 28 and decide whether this transitional behavior remains acceptable.
**Expected:** The maintainer accepts that stale Chinese prose is reported today and hard-fail enforcement is deferred to Phase 28 after migration surfaces are translated.
**Why human:** Release-risk acceptance is a product/maintainer decision even though enforce-mode behavior is programmatically verified.

### Residual Risks

- Production validation intentionally runs the residual Chinese scan in report mode during Phase 26/27 migration, so stale Chinese prose remains present today. Enforce mode is implemented and proven, and Phase 28 owns the final hard-fail matrix.
- The allowlist is code-owned in `scripts/validate-skill-package.mjs`; future maintainers must keep policy prose and executable allowlist categories aligned.
- Human readability of the policy is subject to maintainer judgment, even though required markers and validator behavior are covered.

### Gaps Summary

No blocking gaps found. Phase 25 achieved the policy authority, validator contract, residual scan classification, fixture coverage, and compatibility preservation required by the roadmap and LANG-01/LANG-02/LANG-03.

---

_Verified: 2026-06-14T16:16:59Z_
_Verifier: the agent (gsd-verifier)_
