---
phase: 04-validation-hardening
plan: 04-01
subsystem: validation
tags: [node, validator, markdown, yaml, parser, tdd]
requires:
  - phase: 03-littlebox-vertical-slice
    provides: two-IP package shape, routing metadata, public docs markers, and Littlebox attribution markers
provides:
  - Dependency-free local validator command at `node scripts/validate-skill-package.mjs`
  - Ordered PASS/FAIL/SKIP result harness with summary counts and nonzero exit semantics
  - Parser foundation for skill frontmatter, simple YAML shape, Markdown tables, Markdown links, heading bodies, route cells, output tokens, and marker assertions
  - Smoke checks for `SKILL.md`, `openai.yaml`, `routing.md`, README local links, package boundaries, public docs, and output path tokens
affects: [phase-4-validation, phase-4-plan-02-contract-matrix, phase-5-release-docs]
tech-stack:
  added: []
  patterns:
    - Plain Node.js ESM validator using only built-in modules
    - Ordered registry of deterministic repository contract checks
    - Node test runner smoke tests without package installation
key-files:
  created:
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs
    - .planning/phases/04-validation-hardening/04-01-SUMMARY.md
  modified: []
key-decisions:
  - "Kept validation dependency-free with Node built-ins and synchronous local file reads."
  - "Exported parser helpers from the validator script so parser behavior can be smoke-tested without creating a separate runtime package."
  - "Limited Plan 04-01 checks to harness and parser smoke coverage; the full package contract matrix remains assigned to Plan 04-02."
patterns-established:
  - "Validator checks are registered in stable order and collect all failures before setting `process.exitCode = 1`."
  - "Markdown/YAML parsing stays scoped to the current skill package contract and preserves UTF-8 text."
requirements-completed: [VALD-01, VALD-03, VALD-04]
duration: 5min
completed: 2026-06-12
---

# Phase 04 Plan 01: Validator Harness and Parser Foundation Summary

**Dependency-free Node validator with deterministic PASS/FAIL logs, nonzero failure plumbing, and structured parsers for the two-IP skill package.**

## Performance

- **Duration:** 5min
- **Started:** 2026-06-12T08:18:47Z
- **Completed:** 2026-06-12T08:24:03Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Created `scripts/validate-skill-package.mjs`, runnable from the repo root with `node scripts/validate-skill-package.mjs`.
- Added ordered check registration, PASS/FAIL/SKIP collectors, deterministic English logs, summary counts, and `process.exitCode = 1` after all checks when failures exist.
- Added repository/package path helpers, UTF-8 reads, file existence checks, package-boundary-safe reference resolution, sorted directory listing, and parser helpers for current Markdown/YAML contracts.
- Added smoke checks for `SKILL.md`, `openai.yaml`, `routing.md`, README link parsing, output tokens, public docs, and legacy Xiaohei body extraction.
- Added Node built-in tests proving positive command output, negative failure collection, and exported parser helper behavior.

## Task Commits

1. **Task 1/2 RED: validator harness and parser behavior tests** - `b46af67` (test)
2. **Task 1/2 GREEN: validator harness and parser implementation** - `0ce82fc` (feat)

## Files Created/Modified

- `scripts/validate-skill-package.mjs` - Self-contained validator command, check harness, path helpers, parser helpers, smoke checks, and exit semantics.
- `scripts/validate-skill-package.test.mjs` - Node test-runner coverage for command success, collected failure behavior, and parser helper outputs.
- `.planning/phases/04-validation-hardening/04-01-SUMMARY.md` - Execution summary and verification record.

## Verification

```bash
node scripts/validate-skill-package.mjs
```

Result: passed. Output included 10 deterministic `[PASS]` lines and `Summary: total=10 passed=10 failed=0 skipped=0`.

```bash
node --test scripts/validate-skill-package.test.mjs
```

Result: passed. Output reported 3 tests, 3 pass, 0 fail.

```bash
test -f scripts/validate-skill-package.mjs && rg -n "node:fs|node:path|process\\.exitCode|\\[PASS\\]|\\[FAIL\\]|Summary:|PKG-SMOKE|SKILL\\.md|openai\\.yaml|routing\\.md|parseFrontmatter|parseSimpleYaml|parseMarkdownTable|parseMarkdownLinks|bodyAfterHeading|Current Xiaohei Contract|assets/&lt;article-slug&gt;-illustrations|assets/&lt;article-slug&gt;-littlebox" scripts/validate-skill-package.mjs
```

Result: passed. Required harness, parser, smoke-check, and output-token markers were present.

```bash
git diff --check
```

Result: passed.

## Decisions Made

- Used Node's built-in test runner for local proof because the repository has no package manager, lockfile, or test framework.
- Kept validator checks smoke-level for this plan and did not implement the full Phase 4 contract matrix assigned to Plan 04-02.
- Used exported parser helpers from the `.mjs` script so parser behavior stays testable while the validator remains the single local command.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- `gsd-tools` was unavailable on PATH in this shell. The local SDK path `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs` worked for state updates.
- `bodyAfterHeading` originally stopped at nested headings, which did not match root Xiaohei compatibility files that embed a full canonical Markdown document after `## Current Xiaohei Contract`. The parser was adjusted to return the full trailing body for the current contract shape.
- The negative test fixture initially did not trigger `PKG-SMOKE` because all entry files existed and were nonempty. The fixture now makes `routing.md` empty to prove entry-file smoke failures while later checks continue to run.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None found in files created or modified by this plan.

## Threat Flags

None. This plan introduced a local repository-file validator only. It added no network endpoint, authentication path, schema boundary, browser runtime, package-manager dependency, or external service call.

## Next Phase Readiness

Plan 04-02 can build the full package contract matrix on top of the helper surface added here: package shape, route aliases/defaults, required references, output suffixes, prompt placeholders, docs links, smoke prompts, attribution markers, legacy parity, and rendered-image import boundary.

## Self-Check: PASSED

- Found `scripts/validate-skill-package.mjs`.
- Found `scripts/validate-skill-package.test.mjs`.
- Found `.planning/phases/04-validation-hardening/04-01-SUMMARY.md`.
- Found task commits `b46af67` and `0ce82fc` in git history.
- Confirmed `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` passed.

---
*Phase: 04-validation-hardening*
*Completed: 2026-06-12*
