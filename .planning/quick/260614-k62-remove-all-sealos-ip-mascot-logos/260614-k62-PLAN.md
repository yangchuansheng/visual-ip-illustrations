# Quick Plan: Remove All Sealos IP Mascot Logos

Quick id: 260614-k62
Date: 2026-06-14
Status: complete

## Problem

The Sealos Seal route previously required cap and chest logo preservation through an uploaded-logo overlay workflow. The current product decision is simpler and safer for generation stability: Sealos Seal illustrations should contain no logos anywhere on the mascot, clothing, props, or scene.

## Scope

- Remove the Sealos logo overlay reference from the route-local pack.
- Rewrite Sealos source, style, IP, composition, prompt, and QA references around a no-logo identity contract.
- Update public docs, example prompts, NOTICE, and release checklist language.
- Update validator and regression tests so no-logo markers are enforced.
- Preserve route status, source authority, output path, active Mascot action, and public-sample gates.

## Acceptance Criteria

- Sealos required references exclude `references/ips/sealos/logo-overlay.md`.
- Sealos identity markers require `plain navy cap with no logo` and `plain deep-blue hoodie chest with no logo`.
- Sealos no-logo markers cover cap, hoodie chest, mascot body, props, and scene.
- Validator blocks cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, emblem, and text badge.
- `node scripts/validate-skill-package.mjs` passes.
- `node scripts/validate-skill-package.test.mjs` passes.
- `git diff --check` passes.
