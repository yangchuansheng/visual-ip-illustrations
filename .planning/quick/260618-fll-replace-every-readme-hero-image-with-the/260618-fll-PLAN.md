---
status: complete
quick_id: 260618-fll
slug: replace-every-readme-hero-image-with-the
date: 2026-06-18
---

# Quick Task 260618-fll: Replace Every README Hero Image With the Provided Animated GIF

## Goal

Replace the README hero image across every README entry point with the provided animated GIF from `/Users/longnv/Downloads/caixuk.gif`.

## Tasks

### 1. Add the Animated Hero Asset

Files:

- `assets/readme-hero/20260618-visual-ip-lineup-basketball-animated.gif`

Action:

- Copy the provided GIF into the repository README hero asset directory.
- Keep the asset readable as a normal repository file.

Verify:

- `file` reports a GIF image at 960x540.
- The copied asset exists under `assets/readme-hero/`.

Done:

- The GIF was copied to the repository and set to normal read permissions.

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

- Replace the previous PNG hero path with the animated GIF path.
- Update the alt text to describe the animated Cai Xukun basketball lineup.

Verify:

- Every README variant points to `20260618-visual-ip-lineup-basketball-animated.gif` with the correct relative path.

Done:

- All 13 README entry points now use the animated GIF hero asset.

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
