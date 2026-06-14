---
status: complete
quick_id: 260614-f7o
completed: 2026-06-14
commit: 94fe2e8
---

# Quick Task 260614-f7o Summary

## Result

Completed. Sealos Seal cap and chest logo rules now require the official uploaded Sealos logo shape from the user's uploaded logo image.

## Changes

- Strengthened Sealos route-local references so cap and chest marks use the same official uploaded Sealos logo silhouette.
- Added required logo geometry: blue curled wave / seal-tail mark above a rounded cloud-tray base.
- Updated `SKILL.md`, README, examples, NOTICE, routing, and release checklist wording.
- Added validator check `LOGO-SEALOS-001`.
- Added a failing fixture test for official uploaded logo shape drift.

## Verification

- `node scripts/validate-skill-package.mjs`: 78 passed, 0 failed, 0 skipped.
- `node --test scripts/validate-skill-package.test.mjs`: 40 passed, 0 failed, 0 skipped.
- `git diff --check`: passed.

## Commit

- `94fe2e8 fix(sealos): require uploaded logo shape`
