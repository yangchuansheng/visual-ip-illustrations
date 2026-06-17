---
status: complete
quick_id: 260617-mwq
date: 2026-06-17
---

# Quick Task 260617-mwq: Create a HyperFrames animation from the README hero lineup

## Goal

Create a README-ready animation from the existing Visual IP Illustrations hero lineup where every character moves independently, then wire the animated version into every README variant.

## Tasks

### 1. Build the HyperFrames source

- Files: `assets/readme-hero/lineup-animation/`
- Action: Create a HyperFrames composition that uses transparent per-character PNG layers and a registered GSAP timeline.
- Verify: Run HyperFrames lint, validate, and inspect on the composition.
- Done: Composition source, design note, character layers, and source asset are present under `assets/readme-hero/lineup-animation/`.

### 2. Render README media

- Files: `assets/readme-hero/01-visual-ip-lineup-animated.mp4`, `assets/readme-hero/01-visual-ip-lineup-animated-small.gif`
- Action: Render the 10-second 1920x1080 MP4 and compress an 800x450 GIF for GitHub README display.
- Verify: Check duration, frame size, and visual frames from the rendered MP4.
- Done: MP4 and README GIF were rendered from the final HyperFrames source.

### 3. Update README variants

- Files: `README.md`, `readmes/README.*.md`
- Action: Point every README hero image to the animated GIF using the correct relative path.
- Verify: Confirm all 13 README files reference the GIF and no README still points to the static PNG.
- Done: All README variants now use `01-visual-ip-lineup-animated-small.gif`.

### 4. Verify package and record state

- Files: `.planning/STATE.md`, `.planning/quick/260617-mwq-create-a-hyperframes-animation-from-the-/260617-mwq-SUMMARY.md`
- Action: Run repository validation, Node tests, whitespace checks, and record the quick-task outcome.
- Verify: Validation commands pass and git status contains only expected files.
- Done: Verification completed and quick-task artifacts are written.
