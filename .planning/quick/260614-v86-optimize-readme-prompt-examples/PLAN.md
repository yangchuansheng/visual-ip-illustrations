# Quick Plan: Optimize README Prompt Examples

Quick id: 260614-v86
Date: 2026-06-14
Status: complete

## Problem

The README quick examples are too long for first-time usage. They enumerate every visual IP route and include detailed protected/source/brand route review fields in the entry examples, which makes the canonical `$visual-ip-illustrations` prompt path harder to scan.

## Scope

- Rewrite the README quick examples around a single `{visual IP}` placeholder.
- Keep the planning, generation, single-concept, and IP-comparison prompts short.
- Preserve the canonical invocation marker, legacy compatibility marker, route-local references, output path contracts, release gates, and complete examples link.
- Keep detailed route review examples in `examples/prompts.md`.

## Acceptance Criteria

- README quick examples use one placeholder-driven prompt pattern for selectable IPs.
- README quick examples avoid per-IP prompt enumeration in the quick-start section.
- Prompt examples stay concise and close to the original Xiaohei prompt style.
- `node scripts/validate-skill-package.mjs` passes.
- `node --test scripts/validate-skill-package.test.mjs` passes.
- `git diff --check` passes.
