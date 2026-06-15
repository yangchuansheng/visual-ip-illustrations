# Quick Plan: Align README Tom, Ferris, and Seal Introductions with Xiaohei

Quick id: 260615-kgz
Date: 2026-06-15
Status: planned

## Problem

The README Visual IP route sections present Xiaohei in a compact, scannable style, while Tom, Ferris, and Seal carry route facts in a more fragmented form. The README should describe Tom, Ferris, and Seal with the same rhythm as Xiaohei: identity sentence, visual/action behavior, use cases, aliases, then essential operational facts.

## Context Read

- `.planning/STATE.md`
- `AGENTS.md`
- `README.md`

## Scope

- Edit `README.md`.
- Align the `### Tom`, `### Ferris`, and `### Seal` sections with Xiaohei's compact introduction style.
- Preserve route facts, paths, aliases, output suffixes, rights/source notes, docs validation tokens, and release gates.
- Keep existing route behavior intact: Xiaohei as the implicit default, Tom as `gated-authorized`, Ferris as `source-reviewed`, and Seal as `active`.

## Tasks

### Task 1: Rewrite the Three Route Introductions

File: `README.md`

Action: Rewrite the opening prose for Tom, Ferris, and Seal so each section starts with a compact identity sentence and then states visual/action behavior plus use cases in the same style as Xiaohei. Keep each route's aliases immediately visible after the introduction. Preserve exact alias lists, route status wording, route-local reference paths, rights/source authority paths, output path contracts, docs validation tokens, output suffixes, planning fields, and public sample release-gate facts.

Verify:

```bash
grep -nE '^### (Xiaohei|Tom|Ferris|Seal)$|^Aliases:|Output path contract:|Docs validation token:|Output suffix:' README.md
```

Done: The Tom, Ferris, and Seal sections read as parallel route introductions and retain all existing operational facts.

### Task 2: Run Documentation Validation

Files: `README.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

Action: Run the existing validation commands after the README edit. If a validator failure points to README wording or required markers, update README wording while preserving the route facts listed in Task 1.

Verify:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Done: Validator, Node tests, and whitespace checks pass.

## Acceptance Criteria

- README presents Tom, Ferris, and Seal in the same compact route-introduction style as Xiaohei.
- Tom keeps `gated-authorized`, `ian-xiaohei-illustrations/references/ips/tom/rights.md`, `assets/<article-slug>-tom/`, `assets/&lt;article-slug&gt;-tom/`, and output suffix `tom`.
- Ferris keeps `source-reviewed`, `ian-xiaohei-illustrations/references/ips/ferris/source.md`, Rust trademark and endorsement-safe wording gate, `assets/<article-slug>-ferris/`, `assets/&lt;article-slug&gt;-ferris/`, and output suffix `ferris`.
- Seal keeps `active`, route id `seal`, default `false`, product-neutral hoodie seal behavior, logo-free boundary, `ian-xiaohei-illustrations/references/ips/seal/source.md`, `assets/<article-slug>-seal/`, `assets/&lt;article-slug&gt;-seal/`, and output suffix `seal`.
- The edit is scoped to README route-description clarity unless validation identifies a README-specific marker issue.
