# Quick Task 260616-evz: Add Chinese Multi-IP Example Gallery To README.zh.md

## Goal

Add a Simplified Chinese README gallery that compares Xiaohei, Littlebox, Tom, Ferris, and Seal outputs for the same eight example concepts, using Chinese visible labels in the generated images.

## Tasks

1. Generate and save the new Chinese gallery assets.
   - Create 32 new 16:9 PNG images under `examples/images/{littlebox,tom,ferris,seal}/`.
   - Reuse existing Xiaohei Chinese images under `examples/images/`.
   - Use the same eight concept slugs and concise Simplified Chinese visible labels.

2. Update Chinese documentation.
   - Convert `README.zh.md` Example Gallery into one five-column table per concept.
   - Use Chinese section titles, Chinese alt text, and Chinese gallery intro copy.

3. Update validation coverage and verify.
   - Extend public rendered sample scanning to recursively include `examples/images/`.
   - Update validator tests for README.zh.md image link coverage and public sample gate recursion.
   - Run `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

## Acceptance

- `README.zh.md` displays all five visual IPs for each of the eight examples.
- All 40 Chinese README-linked image paths exist and are 16:9 PNG files.
- New Littlebox, Tom, Ferris, and Seal images use Chinese visible labels.
- Validator and tests pass.
