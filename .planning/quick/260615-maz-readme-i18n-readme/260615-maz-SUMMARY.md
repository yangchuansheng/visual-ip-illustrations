---
quick_id: 260615-maz
title: Add README multilingual variant
date: 2026-06-15
implementation_commit: 48e51f7
status: complete
---

# Quick Task 260615-maz Summary

## Implementation

Added multilingual README coverage while preserving the English source README as the canonical public surface.

- Added a deterministic `README-I18N` selector block to `README.md`.
- Created `README.zh.md` as the Simplified Chinese sibling README.
- Preserved Markdown section order, code fences, commands, paths, image links, route ids, route statuses, output path markers, and validation command blocks.
- Added `README.zh.md` to both README directory trees.
- Kept `README.md` as the source-of-truth and left runtime skill behavior unchanged.

## Commit

- `48e51f7` - `docs(readme): add Chinese README translation`

## Validation

- README i18n structure check - passed with `README i18n structure verified`
- `node scripts/validate-skill-package.mjs` - passed, `Summary: total=97 passed=97 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` - passed, `tests 66`, `pass 66`, `fail 0`
- `git diff --check` - passed with no output

## Residual Risk

Low. The translated sibling is outside the existing English-default validator scan targets, and the canonical English README still passes the full package validator.
