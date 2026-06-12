---
phase: 04-validation-hardening
plan: 04-02
subsystem: validation
tags: [node, validator, markdown, yaml, routing, attribution, smoke-tests]
requires:
  - phase: 04-validation-hardening
    provides: validator harness, parser helpers, deterministic PASS/FAIL output, and nonzero failure semantics
provides:
  - Full 34-check Phase 4 validation contract matrix
  - Package, SKILL.md, openai.yaml, routing, reference, output path, and legacy Xiaohei parity checks
  - Prompt placeholder, objective IP marker, docs link/path, NOTICE attribution, smoke prompt, rendered-image boundary, and Phase 5 boundary checks
  - Test coverage for stable check ordering, actionable failures, and zero-failure positive matrix output
affects: [phase-4-validation, phase-4-plan-03-negative-proof, phase-5-docs-release]
tech-stack:
  added: []
  patterns:
    - Dependency-free Node.js validation matrix with stable check IDs
    - Full-matrix positive tests using Node's built-in test runner
    - Local-only docs and route parsing without package installation, browser, network, or image generation
key-files:
  created:
    - .planning/phases/04-validation-hardening/04-02-SUMMARY.md
  modified:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs
key-decisions:
  - "Kept the full contract matrix in the existing dependency-free validator script."
  - "Validated `agents/openai.yaml` shape only, preserving Phase 5 ownership of selectable-IP metadata wording."
  - "Treated Phase 4 boundary checks as local repository contract checks, including docs links and filename-based Littlebox image boundary."
patterns-established:
  - "Every required drift condition has a stable check ID and path/relation-specific failure message."
  - "The validator emits all results in one deterministic run and reports `Summary: total=34 passed=34 failed=0 skipped=0` on the current repository."
requirements-completed: [VALD-02, VALD-03, VALD-05]
duration: 9min
completed: 2026-06-12
---

# Phase 04 Plan 02: Full Skill Package Contract Matrix Summary

**Complete 34-check validator matrix for package shape, routing, prompts, docs, attribution, smoke prompts, legacy parity, and Phase 5 boundaries.**

## Performance

- **Duration:** 9min
- **Started:** 2026-06-12T08:28:14Z
- **Completed:** 2026-06-12T08:37:29Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments

- Expanded `scripts/validate-skill-package.mjs` from parser smoke checks to the full Phase 4 matrix with the required 34 stable check IDs.
- Added route table validation for columns, defaults, aliases, output suffixes, required references, package-boundary-safe path resolution, mixed-IP wording, and Littlebox attribution context.
- Added prompt, objective IP marker, docs link/path, public route docs, NOTICE, smoke prompt, rendered Littlebox import boundary, and Phase 5 boundary checks.
- Hardened tests to assert stable ordering, actionable negative failures, and the complete zero-failure matrix output.

## Task Commits

1. **Task 1: Core package, skill, agent, route, reference, output, and legacy checks** - `79fc512` (feat)
2. **Task 2: Prompt, IP marker, docs, attribution, smoke, and boundary checks** - `1f2204d` (feat)
3. **Task 3: Diagnostics and full-matrix positive run** - `d5dcca6` (test)

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Full local validation matrix, path helpers, route/reference checks, docs checks, attribution checks, and boundary checks.
- `scripts/validate-skill-package.test.mjs` - Node test-runner coverage for check ordering, collected failures, actionable Task 2 diagnostics, and full matrix success.
- `.planning/phases/04-validation-hardening/04-02-SUMMARY.md` - Plan completion summary and verification record.

## Verification

```bash
node scripts/validate-skill-package.mjs
```

Result: passed. Output reported 34 PASS lines and `Summary: total=34 passed=34 failed=0 skipped=0`.

```bash
node --test scripts/validate-skill-package.test.mjs
```

Result: passed. Output reported 7 tests, 7 pass, 0 fail.

```bash
node scripts/validate-skill-package.mjs && rg -n "PKG-SHAPE-001|ROUTE-LB-001|PROMPT-XH-001|NOTICE-LB-001|SMOKE-MIXED-001|BOUNDARY-IMG-001" scripts/validate-skill-package.mjs && git diff --check
```

Result: passed. Required matrix markers were present and whitespace checks passed.

## Decisions Made

- Kept all new validation behavior in `scripts/validate-skill-package.mjs` so Phase 4 still has one command.
- Used the existing Markdown/YAML parser helpers for all contract checks and avoided external packages.
- Preserved Phase 5 scope by validating `openai.yaml` shape and planning-boundary markers while leaving public copy refresh to the next phase.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Included canonical index files and equivalent Littlebox English prompt wording in objective IP marker checks**
- **Found during:** Task 2 (prompt, IP marker, docs, attribution, smoke, and boundary checks)
- **Issue:** The first implementation of `IP-XH-001` and `IP-LB-001` only scanned operational reference files. Xiaohei's output path marker lives in `references/ips/xiaohei/index.md`, and the Littlebox pack records the English prompt contract as `prompts stay English`.
- **Fix:** Expanded canonical IP marker checks to include each pack's `index.md` and aligned the Littlebox marker with the existing source wording.
- **Files modified:** `scripts/validate-skill-package.mjs`
- **Verification:** `node scripts/validate-skill-package.mjs` passed with 34/34 checks.
- **Committed in:** `1f2204d`

---

**Total deviations:** 1 auto-fixed (Rule 1).
**Impact on plan:** The fix kept the validator aligned to the existing package contract and did not broaden scope.

## Issues Encountered

- The Task 2 negative test initially used a small partial fixture. README image links and Phase 4 boundary files were absent from that fixture, producing unrelated failures. The test now copies a full repository fixture and mutates only the intended Littlebox prompt and NOTICE markers.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None found in files created or modified by this plan. Parser helper early returns are intentional parse-failure outputs, not UI/data stubs.

## Threat Flags

None. This plan introduced local repository-file validation only. It added no network endpoint, authentication path, schema boundary, package-manager dependency, browser runtime, or image-generation call.

## Next Phase Readiness

Plan 04-03 can focus on positive/negative proof and closeout using the complete matrix now available in `node scripts/validate-skill-package.mjs`.

## Self-Check: PASSED

- Found `scripts/validate-skill-package.mjs`.
- Found `scripts/validate-skill-package.test.mjs`.
- Found `.planning/phases/04-validation-hardening/04-02-SUMMARY.md`.
- Found task commits `79fc512`, `1f2204d`, and `d5dcca6` in git history.
- Confirmed `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` passed.

---
*Phase: 04-validation-hardening*
*Completed: 2026-06-12*
