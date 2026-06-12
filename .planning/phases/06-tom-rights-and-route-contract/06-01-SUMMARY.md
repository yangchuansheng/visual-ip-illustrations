---
phase: 06-tom-rights-and-route-contract
plan: 01
subsystem: documentation
tags: [tom, rights, routing, notice, gated-authorized]

requires:
  - phase: 05
    provides: Two-IP Xiaohei/Littlebox package baseline and route metadata pattern.
provides:
  - Tom fixed-field rights audit record.
  - Tom route metadata row with gated authorization status.
  - NOTICE attribution and permission boundary wording for Tom.
affects: [phase-07-tom-canonical-pack, phase-08-skill-controller-integration, phase-09-docs-examples-release-surface, phase-10-validation-hardening]

tech-stack:
  added: []
  patterns:
    - Fixed-field protected-character rights record.
    - Markdown route row as auditable contract.
    - NOTICE source attribution separated from authorization scope.

key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/tom/rights.md
  modified:
    - ian-xiaohei-illustrations/references/routing.md
    - NOTICE.md

key-decisions:
  - "Tom route status remains `gated-authorized` until maintainer release review changes it."
  - "Tom attribution records source identity while permission remains authorization-scope specific through `rights.md` and release approval."
  - "Xiaohei remains the only default route; Tom is explicit with `default=false`."

patterns-established:
  - "Protected-character routes start with a fixed-field rights record before runtime behavior."
  - "Future Tom canonical pack paths can appear in route metadata before Phase 7 fills operational references."

requirements-completed: [RGT-01, RGT-02, TOMR-05]

duration: 3min
completed: 2026-06-12
---

# Phase 6 Plan 1: Tom Rights and Route Contract Summary

**Tom now has an auditable rights record, gated route metadata, and NOTICE wording that separates source attribution from authorization-scope permission.**

## Performance

- **Duration:** 3min
- **Started:** 2026-06-12T17:33:44Z
- **Completed:** 2026-06-12T17:36:27Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Created `ian-xiaohei-illustrations/references/ips/tom/rights.md` with the required fixed fields: Source, Rights Holder, Authorization Scope, Allowed Use, Restricted Use, Distribution Boundary, Sample Policy, and Review Owner.
- Added a `tom` route row with aliases, `default=false`, `output_suffix=tom`, future Tom reference paths, `gated-authorized` status, and the `assets/<article-slug>-tom/` output contract.
- Added `Tom Source Attribution and Permission Boundary` to `NOTICE.md`, tying Tom source context to `rights.md`, release checklist approval, and the public-sample gate.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Tom rights audit record** - `25b1390` (docs)
2. **Task 2: Add Tom route row and NOTICE boundary** - `a92011f` (docs)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Tom rights audit record with review fields, route status, distribution boundary, and public-sample policy.
- `ian-xiaohei-illustrations/references/routing.md` - Tom route selection rule, route row, required reference markers, and output path contract.
- `NOTICE.md` - Tom attribution and permission boundary section.

## Decisions Made

- Tom remains `gated-authorized` as the route status for this contract phase.
- Tom public sample publication remains behind release checklist approval.
- Phase 7 content stayed out of scope; no Tom identity, style, prompt, composition, or QA reference files were created.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Two initial shell verification commands used unsafe quoting around Markdown backticks, causing shell parsing errors. The same checks were rerun with safe quoting and passed. No file changes were required.

## User Setup Required

None - no external service configuration required.

## Verification

- `test -f ian-xiaohei-illustrations/references/ips/tom/rights.md` - PASS
- `rg -n "^(## Source|## Rights Holder|## Authorization Scope|## Allowed Use|## Restricted Use|## Distribution Boundary|## Sample Policy|## Review Owner)$|gated-authorized" ian-xiaohei-illustrations/references/ips/tom/rights.md` - PASS
- `rg -n '<tom-route-pattern>' ian-xiaohei-illustrations/references/routing.md` - PASS
- `rg -n 'Tom Source Attribution and Permission Boundary|gated-authorized|rights.md|permission|authorization' NOTICE.md` - PASS
- `node -e 'const fs=require("fs"); const text=fs.readFileSync("ian-xiaohei-illustrations/references/routing.md","utf8"); const rows=text.split(/\n/).filter(l=>l.startsWith("| `")); if(!rows.some(l=>l.includes("`xiaohei`")&&l.includes("`true`"))) process.exit(1); if(rows.some(l=>!l.includes("`xiaohei`")&&l.includes("`true`"))) process.exit(1); if(!rows.some(l=>l.includes("`tom`")&&l.includes("`false`")&&l.includes("`gated-authorized`"))) process.exit(1);'` - PASS
- `git diff --check` - PASS
- `rg -n 'gated-authorized|Tom Source Attribution and Permission Boundary|references/ips/tom/rights.md|assets/<article-slug>-tom/' ian-xiaohei-illustrations/references/routing.md NOTICE.md ian-xiaohei-illustrations/references/ips/tom/rights.md` - PASS
- `find ian-xiaohei-illustrations/references/ips/tom -maxdepth 1 -type f -print | sort` - PASS; only `rights.md` exists in the Tom pack directory.

## Known Stubs

None. Pending reviewer/date fields in `rights.md` are intentional release-review gates for the `gated-authorized` status.

## Next Phase Readiness

Phase 7 can build the Tom canonical pack against the rights and route contract created here. Future operational Tom references should stay under `ian-xiaohei-illustrations/references/ips/tom/` and preserve the `gated-authorized` boundary until release review changes it.

---
*Phase: 06-tom-rights-and-route-contract*
*Completed: 2026-06-12*

## Self-Check: PASSED

- Files found: `ian-xiaohei-illustrations/references/ips/tom/rights.md`, `ian-xiaohei-illustrations/references/routing.md`, `NOTICE.md`, `.planning/phases/06-tom-rights-and-route-contract/06-01-SUMMARY.md`.
- Commits found: `25b1390`, `a92011f`.
