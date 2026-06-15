---
phase: 29-seal-route-identity-migration
plan: 01
subsystem: skill-routing
tags: [codex-skill, visual-ip, seal-route, validator, markdown]

requires:
  - phase: phase-28
    provides: Visual IP routing, validator coverage, and public-doc transition checks
provides:
  - Active product-neutral Seal route id `seal`
  - Seal output suffix `seal` and output directory `assets/<article-slug>-seal/`
  - Route-local Seal references under `ian-xiaohei-illustrations/references/ips/seal/`
  - Bounded validator and Node regression coverage for active Seal route metadata
affects: [phase-30-seal-content-debranding, phase-31-public-docs-migration, phase-32-final-hardening]

tech-stack:
  added: []
  patterns:
    - Route table drives selected IP reference loading and output suffixes.
    - Active runtime route checks can differ from later-phase public documentation checks.

key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/seal/index.md
    - ian-xiaohei-illustrations/references/ips/seal/source.md
    - ian-xiaohei-illustrations/references/ips/seal/style-dna.md
    - ian-xiaohei-illustrations/references/ips/seal/seal-ip.md
    - ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md
    - ian-xiaohei-illustrations/references/ips/seal/prompt-template.md
    - ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md
  modified:
    - ian-xiaohei-illustrations/references/routing.md
    - ian-xiaohei-illustrations/SKILL.md
    - scripts/validate-skill-package.mjs
    - scripts/validate-skill-package.test.mjs

key-decisions:
  - "Use active route id `seal`, display name `Seal`, status `active`, and output suffix `seal` for the migrated route."
  - "Keep public Sealos documentation, NOTICE, release checklist, and public sample policy checks scoped to later phases."
  - "Preserve Xiaohei as the omitted-IP default while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes."

patterns-established:
  - "Route-local files are moved before controller and validator expectations are updated."
  - "Validator output tokens distinguish active runtime surfaces from current public documentation transition surfaces."

requirements-completed: [ROUTE-01, ROUTE-02, ROUTE-03, ROUTE-04]

duration: 18min
completed: 2026-06-15
---

# Phase 29 Plan 01: Seal Route Identity Migration Summary

**Product-neutral Seal routing with active `seal` metadata, route-local references, and green deterministic validation**

## Performance

- **Duration:** 18 min
- **Started:** 2026-06-15T03:22:00Z
- **Completed:** 2026-06-15T03:39:59Z
- **Tasks:** 3
- **Files modified:** 11

## Accomplishments

- Migrated the active route registry from `sealos` to `seal` with display name `Seal`, status `active`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
- Moved route-local active references to `ian-xiaohei-illustrations/references/ips/seal/` and renamed `sealos-ip.md` to `seal-ip.md`.
- Updated `SKILL.md` controller wording so omitted IP still selects Xiaohei, and Littlebox, Tom, Ferris, and Seal remain explicit route choices.
- Updated validator and Node tests so active runtime checks expect Seal metadata while later-phase public Sealos documentation checks stay scoped.

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate active route registry and route-local path contract** - `af3da3e` (feat)
2. **Task 2: Migrate SKILL route-selection and mixed-IP controller wording** - `ac859d4` (feat)
3. **Task 3: Align bounded validation expectations and run deterministic checks** - `9905788` (test)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/routing.md` - Active route registry now uses `seal`, product-neutral Seal aliases, `active` status, `references/ips/seal/...`, and `assets/<article-slug>-seal/`.
- `ian-xiaohei-illustrations/SKILL.md` - Runtime route selection, reference loading, mixed-IP grouping, QA, and delivery wording now use the Seal route.
- `ian-xiaohei-illustrations/references/ips/seal/*.md` - Route-local Seal pack files moved from the former active Sealos route path.
- `scripts/validate-skill-package.mjs` - Active route checks now assert Seal metadata, route-local paths, output tokens, and stale active route drift.
- `scripts/validate-skill-package.test.mjs` - Regression tests now parse `seal`, assert Seal output tokens, and mutate stale active `sealos` route metadata as a failure case.

## Decisions Made

- Active route identity is `seal` / `Seal` / output suffix `seal` / `assets/<article-slug>-seal/`.
- Public docs, NOTICE, release checklist, and public sample policy remain on their current Sealos wording until their planned migration phases.
- Validator token handling separates active runtime surfaces from current public documentation transition surfaces.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking Issue] Shell command quoting for Task 1 acceptance check**
- **Found during:** Task 1
- **Issue:** The plan-provided inline `node -e` command used backticks inside a zsh double-quoted string, causing command substitution before Node received the assertion.
- **Fix:** Re-ran the same acceptance logic through a quoted Node script invocation.
- **Files modified:** None.
- **Verification:** Route row, escaped output path, moved `seal-ip.md`, removed old `sealos-ip.md`, and default route invariant all passed.
- **Committed in:** `af3da3e`

**Total deviations:** 1 auto-fixed Rule 3 item.
**Impact on plan:** The fix affected command execution only; repository scope stayed unchanged.

## Issues Encountered

- The first validator run after Tasks 1 and 2 reported stale active-route expectations for `sealos`. Task 3 updated the bounded validator and test coverage to the planned `seal` active route while keeping later public docs checks scoped.

## Verification

- `node scripts/validate-skill-package.mjs` - PASS, 98/98 checks.
- `node --test scripts/validate-skill-package.test.mjs` - PASS, 66/66 tests.
- `git diff --check` - PASS.
- `node ~/.codex/gsd-core/bin/gsd-tools.cjs query frontmatter.validate .planning/phases/29-seal-route-identity-migration/29-01-PLAN.md --schema plan` - PASS.
- `node ~/.codex/gsd-core/bin/gsd-tools.cjs query verify.plan-structure .planning/phases/29-seal-route-identity-migration/29-01-PLAN.md` - PASS.

## Known Stubs

None. Stub scan hits were existing validator fixture words for placeholder approval-date tests and prompt-placeholder allowlist categories; they do not flow into runtime UI or generated output.

## Threat Flags

None. This plan changed Markdown route metadata, route-local reference paths, and static validator expectations only.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 30 can debrand the route-local Seal content because the active route id, controller surface, and validator expectations now point to `references/ips/seal/`.

## Self-Check: PASSED

- Summary file exists at `.planning/phases/29-seal-route-identity-migration/29-01-SUMMARY.md`.
- Task commits exist: `af3da3e`, `ac859d4`, `9905788`.
- Key files exist: `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/SKILL.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`.

---
*Phase: 29-seal-route-identity-migration*
*Completed: 2026-06-15*
