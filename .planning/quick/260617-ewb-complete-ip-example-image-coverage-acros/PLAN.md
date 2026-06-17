---
quick_id: 260617-ewb
slug: complete-ip-example-image-coverage-acros
status: complete
created: 2026-06-17T02:43:34.789Z
completed: 2026-06-17T03:21:00.000Z
---

# Quick Task: Complete IP Example Image Coverage Across README Variants

## Description

Update every root `README*.md` file so the Example Gallery shows approved public example images for every IP route.

## Scope

- Update all 13 root README variants.
- Use the existing `examples/images-en/` gallery assets for Xiaohei, Littlebox, Tom, Ferris, and Seal.
- Add public example assets for OpenClaw and Go Gopher under `examples/images-en/openclaw/` and `examples/images-en/gopher/`.
- Record OpenClaw and Go Gopher public sample approvals in `RELEASE_CHECKLIST.md`.
- Keep `gopher.png` untracked.

## Acceptance

- Every README Example Gallery displays seven-column IP example rows for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher across all eight example concepts.
- Every README links eight OpenClaw sample images and eight Go Gopher sample images.
- Markdown links resolve to existing assets.
- `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` pass.
- `git status --short -- gopher.png` remains `?? gopher.png`.
