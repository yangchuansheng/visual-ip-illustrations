---
phase: 11-ferris-source-and-route-contract
fixed_at: 2026-06-13T07:56:00Z
review_path: .planning/phases/11-ferris-source-and-route-contract/11-REVIEW.md
iteration: 1
findings_in_scope: 2
fixed: 2
skipped: 0
status: all_fixed
---

# Phase 11: Code Review Fix Report

**Fixed at:** 2026-06-13T07:56:00Z
**Source review:** `.planning/phases/11-ferris-source-and-route-contract/11-REVIEW.md`
**Iteration:** 1

**Summary:**
- Findings in scope: 2
- Fixed: 2
- Skipped: 0

## Fixed Issues

### CR-01: Ferris public wording check can pass with README coverage removed

**Files modified:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`
**Commit:** `55ed1a8`
**Applied fix:** `DOC-FERRIS-001` now requires the exact Ferris D-15 route-status phrase independently in `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/references/routing.md`, and `RELEASE_CHECKLIST.md`. The combined marker check still covers Ferris aliases, source record path, and output path tokens. Added a fixture test that removes the phrase from `README.md` only and expects `[FAIL] DOC-FERRIS-001`.

### CR-02: Public sample approval accepts placeholder dates

**Files modified:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`
**Commit:** `55ed1a8`
**Applied fix:** Public Tom and Ferris sample approval parsing now requires a valid `YYYY-MM-DD` review date that round-trips as a real UTC calendar date. Parser and fixture tests cover `TBD`, `pending`, blank, and space-only review dates so `BOUNDARY-TOM-IMG-001` and `BOUNDARY-FERRIS-IMG-001` fail until a real review date is recorded.

## Skipped Issues

None.

## Verification

- `node scripts/validate-skill-package.mjs`: passed, `Summary: total=53 passed=53 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs`: passed, `tests 23`, `pass 23`, `fail 0`
- `git diff --check -- scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs`: passed with no output

---

_Fixed: 2026-06-13T07:56:00Z_
_Fixer: the agent (gsd-code-fixer)_
_Iteration: 1_
