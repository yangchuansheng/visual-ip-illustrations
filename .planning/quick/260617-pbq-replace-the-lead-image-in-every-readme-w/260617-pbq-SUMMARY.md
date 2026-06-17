---
quick_id: 260617-pbq
description: Replace the lead image in every README with Downloads/20260617-181124.gif
status: complete
completed: 2026-06-17
---

# Quick Task 260617-pbq: Summary

Replaced the lead image in every README variant with the provided GIF.

## Changes

- Added `assets/readme-hero/20260617-181124.gif` from `/Users/longnv/Downloads/20260617-181124.gif`.
- Updated `README.md` to use `assets/readme-hero/20260617-181124.gif` as the first image.
- Updated all 12 localized README variants under `readmes/` to use `../assets/readme-hero/20260617-181124.gif` as the first image.
- Preserved existing badges and example gallery images.

## Verification

- Source GIF and repository GIF byte comparison passed.
- Focused README check confirmed 13 README variants use the new GIF as the first image and reference it exactly once.
- `node scripts/validate-skill-package.mjs` passed with `Summary: total=129 passed=129 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` passed with `tests 96`, `pass 96`, `fail 0`.
- `git diff --check` passed.
