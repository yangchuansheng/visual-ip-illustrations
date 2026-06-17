---
status: complete
quick_id: 260617-mgf
date: 2026-06-17
---

# Quick Task 260617-mgf: Add the README hero image to every localized README variant

## Goal

Add the existing README hero image to every localized README variant under `readmes/`, using the correct relative asset path from that directory.

## Tasks

### 1. Update localized README files

- Files: `readmes/README.*.md`
- Action: Insert the hero image below the top-level `# Visual IP Illustrations` heading in every localized README.
- Verify: Confirm each localized README references `../assets/readme-hero/01-visual-ip-lineup.png` exactly once.
- Done: All 12 localized README files now include the hero image.

### 2. Verify links and package checks

- Files: `README.md`, `readmes/README.*.md`, `scripts/validate-skill-package.mjs`
- Action: Run the existing validator, test suite, and diff whitespace check.
- Verify: Validation passes with the existing expected totals.
- Done: Verification completed after edits.

### 3. Record quick-task state

- Files: `.planning/STATE.md`, `.planning/quick/260617-mgf-add-the-readme-hero-image-to-every-local/260617-mgf-SUMMARY.md`
- Action: Record the task outcome and quick-task table entry.
- Verify: Confirm the quick task artifacts exist and git status shows the expected files.
- Done: Quick task artifacts and state update are written.
