# Phase 42 Research: Go Gopher Validation and Release Evidence

**Phase:** 42 - Go Gopher Validation and Release Evidence  
**Date:** 2026-06-17  
**Discovery level:** Level 0 - existing local patterns only  
**Research status:** Complete

## Research Question

How should Phase 42 close the known Go Gopher seventh-route validation baseline and produce deterministic release evidence while preserving the lightweight Codex Skill package shape?

## Sources Read

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-CONTEXT.md`
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-DISCUSSION-LOG.md`
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md`
- `.planning/phases/38-go-gopher-source-and-route-contract/38-VERIFICATION.md`
- `.planning/phases/38-go-gopher-source-and-route-contract/38-UAT.md`
- `.planning/phases/39-go-gopher-canonical-pack/39-01-SUMMARY.md`
- `.planning/phases/39-go-gopher-canonical-pack/39-VERIFICATION.md`
- `.planning/phases/39-go-gopher-canonical-pack/39-UAT.md`
- `.planning/phases/40-go-gopher-skill-controller-integration/40-01-SUMMARY.md`
- `.planning/phases/40-go-gopher-skill-controller-integration/40-VERIFICATION.md`
- `.planning/phases/40-go-gopher-skill-controller-integration/40-UAT.md`
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-01-SUMMARY.md`
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-VERIFICATION.md`
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-UAT.md`
- `.planning/phases/37-openclaw-validation-and-release-evidence/37-RELEASE-EVIDENCE.md`
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

## Findings

### Existing Validator Pattern

- `scripts/validate-skill-package.mjs` is the canonical dependency-free validator.
- Checks are stable ordered `defineCheck(id, message, run)` entries in one `checks` array.
- Existing route behavior is asserted through route rows, route-local reference files, prompt markers, IP markers, QA markers, source records, docs markers, release checklist gates, leakage gates, public sample gates, generated sample gates, and release evidence checks.
- The validator already has route-specific patterns for Tom, Ferris, Seal, and OpenClaw.
- The current baseline still omits Go Gopher from `outputPathTokens()`, `publicDocsOutputPathTokens()`, route-count assumptions, compatibility checks, language allowlist entries, public sample approval parsing, generated sample parsing, leakage checks, and release evidence checks.

### Existing Node Test Pattern

- `scripts/validate-skill-package.test.mjs` uses built-in `node:test`, `assert/strict`, fixture copies, helper replacements, and `spawnSync`.
- `requiredCheckIds` locks the full check matrix and stable order.
- Fixture tests already prove route metadata drift, route-local pack drift, source/license marker drift, docs drift, sample-gate behavior, generated sample gate behavior, and full-pass output for prior routes.
- Phase 42 should extend these patterns directly for Go Gopher, including parser helpers, route ordering, full-pass output, failure fixtures, public sample approval parser fixtures, generated sample parser fixtures, leakage fixtures, and release evidence checks.

### Release Evidence Pattern

- `.planning/phases/37-openclaw-validation-and-release-evidence/37-RELEASE-EVIDENCE.md` is the closest precedent.
- It records exact command outcomes for validator, Node tests, and `git diff --check`.
- It includes route smoke, source/license smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and VAL-01 through VAL-05 traceability.
- Phase 42 should produce the same shape with Go Gopher-specific evidence and command output.

## Recommended Approach

Use the existing validator and Node test suite. Add Go Gopher as the seventh stable route across the current check matrix and add route-specific Go Gopher checks rather than introducing a new manifest generator, package manager, or build runtime.

## Required Implementation Surface

- `scripts/validate-skill-package.mjs`
  - Add Go Gopher language allowlist entries for Chinese route aliases in the bounded route metadata surfaces.
  - Add `assets/<article-slug>-gopher/` and `assets/&lt;article-slug&gt;-gopher/` to output path token helpers.
  - Update route-count and route-order expectations to seven routes.
  - Add Go Gopher route, reference, prompt, IP, QA, source, docs, NOTICE, smoke, mixed-IP, release, leakage, public sample, generated sample, and release evidence checks.
  - Preserve existing Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw checks.
- `scripts/validate-skill-package.test.mjs`
  - Update `requiredCheckIds` and stable order assertions after the Go Gopher checks land.
  - Add fixture tests for missing Go Gopher route metadata, missing required references, missing source/license markers, stale six-route assumptions, leakage into non-Gopher route packs, public sample assets without approval, incomplete generated-sample review fields, and release evidence drift.
  - Update parser helper tests to expect seven routes and Go Gopher output tokens.
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-RELEASE-EVIDENCE.md`
  - Record exact outcomes for validator, Node tests, `git diff --check`, Go Gopher route smoke, source/license smoke, docs consistency, leakage scan, public sample gate, generated sample gate, `git status --short -- gopher.png`, and VAL-01 through VAL-05 traceability.

## Verification Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
for f in README*.md; do rg -q 'Go Gopher' "$f" && rg -q 'assets/<article-slug>-gopher/' "$f" && rg -q 'assets/&lt;article-slug&gt;-gopher/' "$f" && rg -q 'references/ips/gopher/source\.md' "$f" && rg -q 'source-reviewed' "$f"; done
find examples/images examples/images-en ian-xiaohei-illustrations/assets/examples \( -iname '*gopher*' -o -iname '*go-gopher*' \) -print
git status --short -- gopher.png
```

## Package Legitimacy Audit

No package-manager installs are planned. Phase 42 uses built-in Node, existing repository scripts, Markdown files, and shell commands only.

## Out of Scope

- Adding package dependencies or a new test framework.
- Creating a machine-readable route manifest.
- Publishing public Go Gopher rendered sample assets without explicit release checklist approval.
- Replacing root `gopher.png` or committing it.
- Changing Xiaohei default behavior or existing non-Gopher route behavior.
