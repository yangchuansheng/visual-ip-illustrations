---
status: planned
created: 2026-06-14
quick_id: 260614-f7o
slug: tighten-sealos-seal-cap-and-chest-logo-t
---

# Quick Task 260614-f7o: Tighten Sealos Seal cap and chest logo to official uploaded logo shape

## Goal

Repair the Sealos Seal route contract so generated cap and chest logo marks use the official uploaded Sealos logo shape from the user-provided image.

## Tasks

### 1. Strengthen Sealos logo identity rules

Files:
- `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- `ian-xiaohei-illustrations/references/ips/sealos/index.md`
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md`
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md`

Action:
- Add explicit official uploaded Sealos logo shape wording.
- Require the same uploaded logo silhouette on both navy cap and deep-blue hoodie chest.
- Name the blue curled wave / seal-tail mark and rounded cloud-tray base as the required logo geometry.

Verify:
- Sealos reference files include the official uploaded logo shape markers.

### 2. Propagate public docs and release gates

Files:
- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`
- `ian-xiaohei-illustrations/references/routing.md`

Action:
- Update public route wording so smoke prompts and release review catch wrong cap/chest logo shapes.

Verify:
- Public docs mention official uploaded Sealos logo shape on cap and chest.

### 3. Harden validator and regression tests

Files:
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Action:
- Add a dedicated Sealos official-logo-shape validator check.
- Add fixture coverage proving drift is caught.

Verify:
- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
