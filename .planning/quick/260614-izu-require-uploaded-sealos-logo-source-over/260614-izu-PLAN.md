---
status: planned
created: 2026-06-14
quick_id: 260614-izu
slug: require-uploaded-sealos-logo-source-over
---

# Quick Task 260614-izu: Require Uploaded Sealos Logo Source Overlay

## Goal

Repair the Sealos Seal route contract so cap and chest logos are finalized from the uploaded Sealos logo source image itself, with no prompt-rendered logo accepted and with source path or attachment id recorded in delivery.

## Tasks

### 1. Add route-local overlay authority

Files:
- `ian-xiaohei-illustrations/references/ips/sealos/logo-overlay.md`
- `ian-xiaohei-illustrations/references/ips/sealos/index.md`
- `ian-xiaohei-illustrations/references/routing.md`

Action:
- Add a dedicated overlay contract for cap and chest logo placement.
- Route Sealos requests through the overlay contract whenever cap or chest logos are present.
- Require blank cap and chest patches before overlay, uploaded source pixels for the final marks, uniform scale and placement only, and delivery source tracking.

Verify:
- Sealos required references include `logo-overlay.md`.
- Shared Sealos route markers include uploaded source overlay and delivery source tracking.

### 2. Propagate overlay-only behavior

Files:
- `ian-xiaohei-illustrations/SKILL.md`
- `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md`
- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`

Action:
- Require the base image to reserve blank cap and chest logo patches.
- Require final cap and chest marks to be composited from the uploaded Sealos logo source image.
- Treat generated approximation, redrawn logo, alternate wave, simplified mark, missing overlay, and missing source path or attachment id as failures.

Verify:
- Public docs, prompt templates, QA, and release gates all name the same overlay-only contract.

### 3. Harden validator and regression tests

Files:
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Action:
- Expand the Sealos reference count to include `logo-overlay.md`.
- Extend `LOGO-SEALOS-001` to require uploaded source overlay markers across route-local and public docs.
- Add fixture coverage for overlay drift.

Verify:
- `node scripts/validate-skill-package.mjs`
- `node scripts/validate-skill-package.test.mjs`
- `git diff --check`
