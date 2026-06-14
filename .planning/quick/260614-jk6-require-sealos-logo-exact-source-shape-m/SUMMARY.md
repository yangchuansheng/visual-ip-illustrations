---
status: complete
quick_id: 260614-jk6
completed: 2026-06-14
commit: a9e0007
---

# Quick Task 260614-jk6 Summary

## Result

Completed. Sealos Seal cap and chest logos now require the uploaded Sealos logo source shape exactly, while allowing color remap.

## Changes

- Replaced pixel-lock wording with source shape mask and source alpha mask authority.
- Allowed color remap after the uploaded source shape mask is locked.
- Preserved exact outline, negative space, proportions, curl, top fin/notch, and rounded cloud-tray base as the required geometry contract.
- Updated Sealos route-local references, prompt template, QA, SKILL, README, examples, NOTICE, routing, and release checklist.
- Hardened `LOGO-SEALOS-001` and the overlay drift fixture to require source shape mask markers.

## Verification

- `node scripts/validate-skill-package.mjs`: 78 passed, 0 failed, 0 skipped.
- `node scripts/validate-skill-package.test.mjs`: 40 passed, 0 failed, 0 skipped.
- `git diff --check`: passed.

## Commit

- `a9e0007 fix(sealos): lock logo source shape mask`
