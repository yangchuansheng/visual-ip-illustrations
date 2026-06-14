---
status: planned
created: 2026-06-14
quick_id: 260614-fow
slug: make-sealos-cap-and-chest-logo-exactly-m
---

# Quick Task 260614-fow: Make Sealos cap and chest logo exactly match uploaded logo

## Goal

Repair the Sealos Seal route contract so generated cap and chest logo marks must match the user's uploaded logo image exactly, with explicit geometry gates and regression coverage.

## Tasks

### 1. Strengthen route-local exact logo rules

Files:
- `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- `ian-xiaohei-illustrations/references/ips/sealos/index.md`
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md`
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md`

Action:
- Require exact uploaded Sealos logo match on cap and chest.
- Require a vector-traced reproduction of the uploaded Sealos logo image.
- Preserve outline, negative space, proportions, curl, top fin/notch, rounded cloud-tray base, and blue gradient relationship.
- Treat approximate logo redraw, alternate wave mark, and simplified logo mark as failures.

Verify:
- Route-local Sealos files contain exact logo markers and drift markers.

### 2. Propagate public docs and release gates

Files:
- `ian-xiaohei-illustrations/SKILL.md`
- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`
- `ian-xiaohei-illustrations/references/routing.md`

Action:
- Update user-visible Sealos route wording, smoke prompt expectations, NOTICE wording, and release checklist gates to require exact uploaded logo match.

Verify:
- Public docs preserve both the existing official uploaded logo shape marker and the new exact logo match marker.

### 3. Harden validator and regression fixture

Files:
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Action:
- Tighten `LOGO-SEALOS-001` to require exact logo markers across route-local and public docs.
- Update the failing fixture to prove exact logo marker drift is detected.

Verify:
- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
