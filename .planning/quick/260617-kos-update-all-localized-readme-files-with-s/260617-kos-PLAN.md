---
status: complete
quick_id: 260617-kos
date: 2026-06-17
---

# Quick Task 260617-kos Plan

Update every localized README with the same skills.sh badge and skills CLI installation command, then lock that coverage in validation.

## Task 1: README Install Surface

- files: `README*.md`
- action: Add the skills.sh badge and `npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations` install command to every README variant.
- verify: Each `README*.md` contains one badge and one skills CLI install command.

## Task 2: Validation Coverage

- files: `scripts/validate-skill-package.mjs`
- action: Extend the rebrand migration check to assert the badge, CLI install command, clone command, checkout directory, and package copy command across all README variants.
- verify: `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`.

## Task 3: GSD Records

- files: `.planning/STATE.md`, `.planning/quick/260617-kos-update-all-localized-readme-files-with-s/`
- action: Record the quick task plan, summary, validation evidence, and project state update.
- verify: `git diff --check`.
