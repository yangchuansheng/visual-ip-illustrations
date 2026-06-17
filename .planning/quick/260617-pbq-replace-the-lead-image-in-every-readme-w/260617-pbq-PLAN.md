---
quick_id: 260617-pbq
description: Replace the lead image in every README with Downloads/20260617-181124.gif
status: executing
created: 2026-06-17
---

# Quick Task 260617-pbq: Replace README lead GIF

Replace the lead image in every README variant with the provided GIF from `~/Downloads/20260617-181124.gif`.

## Task 1: Add the new README hero asset

- Files: `assets/readme-hero/20260617-181124.gif`
- Action: Copy the provided GIF into the repository's README hero asset directory.
- Verify: Confirm the asset exists and matches the source byte size.
- Done: The repository contains the new GIF under `assets/readme-hero/`.

## Task 2: Update README lead image links

- Files: `README.md`, `readmes/README*.md`
- Action: Replace only the first Markdown image in each README with the new GIF path, using `assets/...` from the root README and `../assets/...` from localized READMEs.
- Verify: Confirm all 13 README variants use the new lead GIF exactly once.
- Done: Root and localized README lead images point to the new GIF.

## Task 3: Validate docs

- Files: README variants, validation scripts
- Action: Run existing docs validation and a focused README hero-link check.
- Verify: `node scripts/validate-skill-package.mjs`, README hero count check, and `git diff --check` pass.
- Done: Validation passes with no README hero drift.
