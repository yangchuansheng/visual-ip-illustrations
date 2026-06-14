---
phase: 25-language-policy-and-residual-scan-contract
plan: 01
subsystem: validation
tags: [language-policy, validator, node-test, residual-scan]

requires:
  - phase: 24-rebrand
    provides: Visual IP Illustrations identity, 89-check validator baseline, 51-test Node suite
provides:
  - Root English-default language policy authority
  - LANG-POLICY and LANG-SCAN validator checks
  - Residual Chinese scan report and enforce-mode contract
  - Node fixture coverage for policy markers, approved tokens, stale prose, and allowlist shape
affects: [phase-26-skill-reference-migration, phase-27-public-docs-migration, phase-28-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Dependency-free Node validator checks with stable LANG-* ids
    - Report-mode production scan with enforce-mode fixture hard failure
    - Narrow token or anchored-pattern allowlist entries

key-files:
  created:
    - LANGUAGE_POLICY.md
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs

key-decisions:
  - "LANGUAGE_POLICY.md is the root English-default authority for docs and release surfaces."
  - "Production residual Chinese scanning stays green in report mode during Phase 26/27 migration, while LANGUAGE_SCAN_ENFORCE=1 hard-fails stale prose in fixtures."
  - "The language allowlist is executable, narrow, and limited to exact tokens or anchored patterns."

patterns-established:
  - "LANG checks sit after REBRAND-DOCS-001 and before boundary checks."
  - "Language findings include status, category, path:line, token or excerpt, and remediation."
  - "Route-derived scan targets reuse routing metadata and safe reference path helpers."

requirements-completed: [LANG-01, LANG-02, LANG-03]

duration: 7min51s
completed: 2026-06-14
---

# Phase 25 Plan 01: Language Policy and Residual Scan Contract Summary

**English-default policy authority with executable LANG-* validator checks and fixture-proven residual Chinese scan behavior**

## Performance

- **Duration:** 7min51s
- **Started:** 2026-06-14T16:02:03Z
- **Completed:** 2026-06-14T16:09:54Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- Created `LANGUAGE_POLICY.md` as the canonical English-default language authority for repository docs, skill instructions, references, examples, release materials, validation output, code, scripts, comments, commits, and PR copy.
- Added `LANG-POLICY-001`, `LANG-POLICY-002`, `LANG-SCAN-001`, and `LANG-SCAN-002` to the dependency-free validator, raising the production matrix from 89 to 93 checks.
- Added five Phase 25 Node fixture tests covering missing policy markers, missing exception categories, approved multilingual tokens, stale prose enforce mode, and broad allowlist rejection.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create the root language policy authority** - `51ad46f` (docs)
2. **Task 2: Add LANG-* validator checks and residual scan helpers** - `bf787ac` (feat)
3. **Task 3: Add Node fixture coverage and run Phase 25 validation** - `906c947` (test)

## Files Created/Modified

- `LANGUAGE_POLICY.md` - Root policy authority for default language, approved multilingual exceptions, allowlist shape, residual scan output, compatibility surfaces, and migration handoff.
- `scripts/validate-skill-package.mjs` - LANG policy checks, Han-character scanner, route-derived scan targets, allowlist validation, finding formatting, report mode, and enforce mode.
- `scripts/validate-skill-package.test.mjs` - Stable LANG check ids, 93-check assertions, fixture env support, and five Phase 25 language scan tests.

## Decisions Made

- Root policy is the human authority; validator constants mirror the executable contract.
- Current production validation reports residual Chinese findings without failing, preserving a green baseline during Phase 26/27 migration.
- `LANGUAGE_SCAN_ENFORCE=1` activates hard failure for controlled stale-prose fixtures and final migration gates.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Stabilized language scan target ordering for fixture output**
- **Found during:** Task 3 (Add Node fixture coverage and run Phase 25 validation)
- **Issue:** Alphabetical scan target ordering caused enforce-mode failure samples to report existing README stale prose before an injected `LANGUAGE_POLICY.md` stale-prose fixture, weakening the path:line assertion.
- **Fix:** Preserved scan target insertion order and placed `LANGUAGE_POLICY.md` first so controlled fixture output is deterministic and actionable.
- **Files modified:** `scripts/validate-skill-package.mjs`
- **Verification:** `node --test scripts/validate-skill-package.test.mjs` passes with 56/56.
- **Committed in:** `906c947`

---

**Total deviations:** 1 auto-fixed (Rule 1)
**Impact on plan:** The fix supports the planned fixture contract and does not expand scope.

## Issues Encountered

One fixture assertion initially expected the injected stale prose to appear in the first failure sample. The scanner was functioning, but sample ordering made the output less deterministic for targeted fixture checks. The task commit includes the ordering fix and passing verification.

## Known Stubs

None. Stub-pattern scan only found intentional prompt-placeholder policy text and pre-existing placeholder-date fixture names used by validator tests.

## Threat Flags

None. Phase 25 introduced no new network endpoints, auth paths, schema changes, or unplanned trust boundaries beyond the planned local file scan and allowlist validation surface.

## User Setup Required

None - no external service configuration required.

## Verification

- `node scripts/validate-skill-package.mjs` -> `Summary: total=93 passed=93 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` -> `tests 56`, `pass 56`, `fail 0`
- `git diff --check` -> passed

## Next Phase Readiness

Phase 26 can migrate `SKILL.md`, routing, shared references, and route-local IP packs to English-default prose while using the Phase 25 policy and scanner contract as the guardrail.

## Self-Check: PASSED

- Found `LANGUAGE_POLICY.md`
- Found `scripts/validate-skill-package.mjs`
- Found `scripts/validate-skill-package.test.mjs`
- Found commits `51ad46f`, `bf787ac`, and `906c947`

---
*Phase: 25-language-policy-and-residual-scan-contract*
*Completed: 2026-06-14*
