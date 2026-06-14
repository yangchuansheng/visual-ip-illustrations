# Quick Summary: Optimize README Prompt Examples

Quick id: 260614-v86
Date: 2026-06-14
Status: complete

## Changes

- Reworked the README quick examples around a single `{visual IP}` placeholder.
- Reduced the quick-start prompts to four short paths:
  - shot-list planning
  - article illustration generation
  - single-concept generation
  - IP comparison planning
- Kept detailed Tom, Ferris, and Sealos route review prompts in `examples/prompts.md`.
- Preserved canonical invocation, legacy compatibility, route-local reference, QA checklist, output path, and release-gate wording elsewhere in README.

## Verification

```bash
node scripts/validate-skill-package.mjs
# Summary: total=89 passed=89 failed=0 skipped=0

node --test scripts/validate-skill-package.test.mjs
# tests 51
# pass 51
# fail 0

git diff --check
# exit 0
```
