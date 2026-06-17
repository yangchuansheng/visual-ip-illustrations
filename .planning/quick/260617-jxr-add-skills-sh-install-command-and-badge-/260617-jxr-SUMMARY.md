---
status: complete
quick_id: 260617-jxr
date: 2026-06-17
---

# Quick Task 260617-jxr Summary

Moved the installable skill package to `skills/visual-ip-illustrations/` and updated docs, route references, release gates, validators, and tests to use the new package path. README now includes a skills.sh badge and a `npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations` install command.

Validation:

- `npx skills add . --list --full-depth` found `visual-ip-illustrations`.
- `npx skills add https://github.com/yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations -y --copy` installed `visual-ip-illustrations`.
- `node scripts/validate-skill-package.mjs` passed 129/129.
- `node --test scripts/validate-skill-package.test.mjs` passed 96/96.
- `git diff --check` passed.

Note: the GitHub install command reads the current remote default branch; the new `skills/visual-ip-illustrations/` layout becomes remote-installable after these changes are pushed.
