---
status: complete
quick_id: 260617-jxr
date: 2026-06-17
---

# Quick Task 260617-jxr Plan

Move the installable skill package to `skills/visual-ip-illustrations/`, add the skills.sh README installation surface, validate the package, and run a real skills CLI install.

## Task 1: Package Layout

- files: `skills/visual-ip-illustrations/`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`
- action: Move the package from the legacy root directory to `skills/visual-ip-illustrations/` and update validator path constants and tests.
- verify: `npx skills add . --list --full-depth`, `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`

## Task 2: Public Install Surface

- files: `README.md`, translated README files, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `examples/prompts.md`, `AGENTS.md`, `LANGUAGE_POLICY.md`
- action: Update package path references, add the README skills.sh badge, add the skills CLI install command, and keep the legacy invocation alias documented.
- verify: README contains the badge and `npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations`.

## Task 3: Install Trigger And Hygiene

- files: `.gitignore`, `.planning/STATE.md`, `.planning/quick/260617-jxr-add-skills-sh-install-command-and-badge-/`
- action: Run the real GitHub install command, ignore local `.agents/` install output, and record GSD quick evidence.
- verify: `git diff --check` and git status has ignored local install output.
