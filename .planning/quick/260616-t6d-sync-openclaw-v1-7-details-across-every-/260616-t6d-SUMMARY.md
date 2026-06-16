# Quick Summary: Sync OpenClaw Across Every README

Quick id: 260616-t6d
Date: 2026-06-16
Status: complete
Implementation commit: 8476c48

## Outcome

PASS.

All localized README variants now expose the v1.7 OpenClaw route alongside the English source README. `DOC-OPENCLAW-001` now discovers every root `README*.md` variant and requires OpenClaw route status, source/license authority, raw output path, and escaped output path markers in each file.

## Changed Surfaces

- Updated `README.ar.md`, `README.de.md`, `README.es.md`, `README.fr.md`, `README.ja.md`, `README.ko.md`, `README.pt.md`, `README.ru.md`, `README.tr.md`, `README.uk.md`, `README.zh-Hant.md`, and `README.zh.md`.
- Added OpenClaw to localized summaries, route inventories, output path sections, route cards, canonical pack lists, operational facts, quick examples, workflow steps, directory trees, and maintainer validation text.
- Added `readmeVariantFiles()` and expanded `DOC-OPENCLAW-001` in `scripts/validate-skill-package.mjs`.
- Added a localized README drift fixture in `scripts/validate-skill-package.test.mjs`.
- Updated Phase 37 release evidence from 79 Node tests to 80 Node tests.

## Verification

```bash
node scripts/validate-skill-package.mjs
# Summary: total=112 passed=112 failed=0 skipped=0
```

```bash
node --test scripts/validate-skill-package.test.mjs
# tests 80
# pass 80
# fail 0
```

```bash
git diff --check
# passed
```

```bash
node README variant marker check
# all 13 README variants passed
```

## Acceptance

- Every `README*.md` contains `OpenClaw`, `source-reviewed`, `ian-xiaohei-illustrations/references/ips/openclaw/source.md`, `assets/<article-slug>-openclaw/`, and `assets/&lt;article-slug&gt;-openclaw/`.
- Validator coverage remains 112/112.
- Node regression coverage is now 80/80.
