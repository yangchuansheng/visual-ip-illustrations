---
status: complete
quick_id: 260614-izu
completed: 2026-06-14
commit: 870fe0b
---

# Quick Task 260614-izu Summary

## Result

Completed. Sealos Seal cap and chest logos now require uploaded Sealos logo source image overlay for finalization.

## Changes

- Added route-local overlay authority in `references/ips/sealos/logo-overlay.md`.
- Updated Sealos route loading so `logo-overlay.md` is a required reference.
- Updated source, prompt, QA, SKILL, README, examples, NOTICE, routing, and release gates to require blank cap and chest logo patches before overlay.
- Required the uploaded logo file as the only logo pixels, with uniform scale and placement only.
- Required delivery reports to record the source asset path or attachment id.
- Hardened `LOGO-SEALOS-001` and fixture coverage for overlay drift.

## Verification

- `node scripts/validate-skill-package.mjs`: 78 passed, 0 failed, 0 skipped.
- `node scripts/validate-skill-package.test.mjs`: 40 passed, 0 failed, 0 skipped.
- `git diff --check`: passed.

## Commit

- `870fe0b fix(sealos): require uploaded logo overlay`
