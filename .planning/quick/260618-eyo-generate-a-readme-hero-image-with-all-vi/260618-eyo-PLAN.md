---
status: complete
quick_id: 260618-eyo
slug: generate-a-readme-hero-image-with-all-vi
date: 2026-06-18
---

# Quick Task 260618-eyo: Generate a README Hero Image With All Visual IP Characters

## Goal

Create a new README hero image that shows all current Visual IP Illustrations characters, with Cai Xukun centered on a lower row holding a basketball, then update every README entry point to use the new asset.

## Tasks

### 1. Generate the Hero Asset

Files:

- `assets/readme-hero/20260618-visual-ip-lineup-basketball.png`

Action:

- Generate one sparse white-background lineup image through the `visual-ip-illustrations` mixed-IP route rules.
- Preserve the identity markers for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun.
- Keep Cai Xukun as a stylized mascot, centered on the lower row, holding a basketball.

Verify:

- Visual inspection confirms eight IP characters, no text, no logos, clean background, and Cai Xukun lower-center basketball pose.

Done:

- New PNG copied from the generated image cache into `assets/readme-hero/`.

### 2. Update README Hero References

Files:

- `README.md`
- `readmes/README.ar.md`
- `readmes/README.de.md`
- `readmes/README.es.md`
- `readmes/README.fr.md`
- `readmes/README.ja.md`
- `readmes/README.ko.md`
- `readmes/README.pt.md`
- `readmes/README.ru.md`
- `readmes/README.tr.md`
- `readmes/README.uk.md`
- `readmes/README.zh-Hant.md`
- `readmes/README.zh.md`

Action:

- Replace the previous README hero GIF path with the new PNG path.
- Update alt text to describe the Cai Xukun basketball lineup.

Verify:

- Every README variant points to the new hero asset with the correct relative path.

Done:

- All 13 README entry points now use `20260618-visual-ip-lineup-basketball.png`.

### 3. Validate

Files:

- Repository validation surfaces.

Action:

- Run the package validator, Node test suite, and whitespace diff check.

Verify:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`

Done:

- Validator passed 148/148.
- Node tests passed 108/108.
- `git diff --check` passed.
