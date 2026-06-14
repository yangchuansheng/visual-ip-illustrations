---
status: complete
quick_id: 260614-fow
completed: 2026-06-14
commit: b537fdc
---

# Quick Task 260614-fow Summary

## Result

Completed. Sealos Seal cap and chest logo rules now require exact uploaded Sealos logo match from the user's uploaded logo image.

## Changes

- Strengthened Sealos route-local references so cap and chest marks require a vector-traced reproduction of the uploaded Sealos logo image.
- Added exact logo geometry gates for outline, negative space, proportions, curl, top fin/notch, rounded cloud-tray base, and blue gradient relationship.
- Updated `SKILL.md`, README, examples, NOTICE, routing, and release checklist wording.
- Tightened validator check `LOGO-SEALOS-001` across route-local and public docs.
- Updated the failing fixture test to reject exact uploaded logo match drift.

## Verification

- `node scripts/validate-skill-package.mjs`: 78 passed, 0 failed, 0 skipped.
- `node --test scripts/validate-skill-package.test.mjs`: 40 passed, 0 failed, 0 skipped.
- `git diff --check`: passed.

## Commit

- `b537fdc fix(sealos): require exact uploaded logo match`
