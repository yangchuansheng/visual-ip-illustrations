# Quick Task 260618-emo Plan

Task: Add Cai Xukun to the README example images.
Date: 2026-06-18

## Goal

Add an approved Cai Xukun public sample image to the README example gallery while keeping public-figure, route-isolation, and release-review gates intact.

## Tasks

1. Generate and place a Cai Xukun README sample image.
   - Add the accepted Trust Bridge sample to `examples/images-en/caixukun/08-trust-bridge.png`.
   - Add the matching Chinese-gallery sample to `examples/images/caixukun/08-trust-bridge.png`.
   - Add the skill-local calibration sample to `skills/visual-ip-illustrations/assets/examples/15-cai-xukun-trust-bridge.png`.
   - Verify PNG dimensions match the existing gallery standard, 1672x941.

2. Update public docs and release gates.
   - Add Cai Xukun to the Trust Bridge row in every README variant.
   - Update release checklist and NOTICE copy from pending public samples to an approved Trust Bridge public README gallery sample.
   - Keep Cai Xukun public-figure likeness, uploaded-image authority, source-image context, route isolation, and stylized mascot-only wording attached.

3. Harden validation.
   - Update `scripts/validate-skill-package.mjs` for the Cai Xukun Trust Bridge gallery path and approval markers.
   - Update `scripts/validate-skill-package.test.mjs` so the current checklist parses as approved while negative fixtures still fail on pending or placeholder approvals.

## Verification

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
