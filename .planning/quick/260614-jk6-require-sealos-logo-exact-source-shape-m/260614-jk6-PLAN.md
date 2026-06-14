---
status: planned
created: 2026-06-14
quick_id: 260614-jk6
slug: require-sealos-logo-exact-source-shape-m
---

# Quick Task 260614-jk6: Require Sealos Logo Exact Source Shape Mask

## Goal

Repair the Sealos Seal logo contract so cap and chest logos use the uploaded logo source shape exactly, while allowing color remap. The source alpha/shape mask controls geometry, outline, negative space, proportions, curl, top fin/notch, and rounded cloud-tray base.

## Tasks

### 1. Replace pixel-lock wording with shape-mask authority

Files:
- `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- `ian-xiaohei-illustrations/references/ips/sealos/logo-overlay.md`
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md`
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/sealos/index.md`

Action:
- Require uploaded logo source shape mask / alpha mask as the final cap and chest logo geometry authority.
- Allow color remap while preserving exact source silhouette and negative space.
- Treat generated tracing, redrawn logo, alternate wave, simplified mark, changed silhouette, changed proportions, changed curl, changed top fin/notch, and changed rounded cloud-tray base as failures.

Verify:
- Route-local Sealos references contain source shape mask and color remap markers.

### 2. Propagate prompt, QA, docs, and delivery wording

Files:
- `ian-xiaohei-illustrations/SKILL.md`
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md`
- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`
- `ian-xiaohei-illustrations/references/routing.md`

Action:
- Require blank cap and chest patches before overlay.
- Require final logo shape to come from the uploaded source mask.
- Allow recolor/color remap only after locking the mask.
- Require source asset path or attachment id in delivery.

Verify:
- User-facing and maintainer docs describe the same exact-shape / recolor-allowed contract.

### 3. Harden validator and fixture tests

Files:
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Action:
- Update `LOGO-SEALOS-001` to require source shape mask and color remap markers.
- Update overlay drift fixture to prove mask authority is required.

Verify:
- `node scripts/validate-skill-package.mjs`
- `node scripts/validate-skill-package.test.mjs`
- `git diff --check`
