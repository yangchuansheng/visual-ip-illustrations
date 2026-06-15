# Phase 32 Research: Seal Migration Validation and Release Evidence

**Phase:** 32 - Seal Migration Validation and Release Evidence  
**Status:** Complete  
**Generated:** 2026-06-15  

## Research Question

What does the executor need to know to plan Phase 32 with deterministic validator, Node test, stale scan, docs consistency, release evidence, and UAT coverage?

## Current Baseline

- `node scripts/validate-skill-package.mjs` exits 1 with `Summary: total=98 passed=80 failed=18 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` exits 1 with `tests 66`, `pass 47`, `fail 19`.
- `git diff --check` is the existing whitespace hygiene gate.
- Phase 29 established the active route id `seal`, display name `Seal`, output suffix `seal`, output path `assets/<article-slug>-seal/`, and route-local references under `references/ips/seal/`.
- Phase 30 debranded the route-local pack to product-neutral hoodie Seal language and left full-suite restoration to Phase 32.
- Phase 31 migrated README, examples, NOTICE, release checklist, `SKILL.md`, and `openai.yaml` to active Seal wording and left validator/checker restoration to Phase 32.

## Existing Implementation Surfaces

### `scripts/validate-skill-package.mjs`

- Defines validation helpers, Markdown/YAML parsers, output path tokens, sample approval parsers, route table readers, check registration, ordered check output, and final summary output.
- Current stale identifiers include `AGENT-SEALOS-001`, `REFS-SEALOS-001`, `PROMPT-SEALOS-001`, `IP-SEALOS-001`, `QA-SEALOS-001`, `SOURCE-SEALOS-001`, `LOGO-SEALOS-001`, `DOC-SEALOS-P16-001`, `DOC-SEALOS-P19-001`, `NOTICE-SEALOS-001`, `SMOKE-SEALOS-001`, `SMOKE-MIXED-SEALOS-001`, `RELEASE-SEALOS-001`, `BOUNDARY-SEALOS-LEAK-001`, `BOUNDARY-SEALOS-IMG-001`, and `BOUNDARY-SEALOS-GEN-001`.
- Current parser helpers still expose Sealos names and old sample policy lines:
  - `parsePublicSealosSampleApproval`
  - `parseGeneratedSealosSampleApproval`
  - `parseSealosApprovalLine`
  - `emptySealosApproval`
  - public/generated internal path expectations using `assets/<article-slug>-sealos`.
- `publicDocsOutputPathTokens()` still expects Sealos output paths for public docs while `outputPathTokens()` already expects Seal output paths.

### `scripts/validate-skill-package.test.mjs`

- Uses Node built-in `node:test`, `assert/strict`, fixture-copy helpers, mutation helpers, and subprocess validation runs.
- `requiredCheckIds` still lists Sealos-era IDs.
- Full-pass tests still expect `Summary: total=98 passed=98 failed=0 skipped=0`; Phase 32 should update the exact total only after final check split/consolidation is known.
- Sealos parser fixtures still generate old release checklist lines and old `assets/<article-slug>-sealos` internal review paths.
- Existing fixture style mutates current repo files in a temp copy and asserts a specific check ID plus file path or failure text.

### Release and Evidence Surfaces

- `RELEASE_CHECKLIST.md` already contains current Seal release gates from Phase 31 and should receive parser-readable Seal public/generated sample lines or evidence markers only where the validator requires them.
- Phase 32 final release evidence should live in phase-local evidence artifacts, with the release checklist remaining maintainer-facing.
- UAT should be text/route smoke and inspection based, with no `image_gen` call.

## Recommended Implementation Approach

1. Rename Seal migration validation vocabulary from Sealos-era check IDs and helper names to Seal-focused names.
2. Add bounded stale active-route scan helpers:
   - active deny tokens: `sealos`, `Sealos Seal`, `Sealos mascot`, `brand-owned`, `references/ips/sealos/`, `assets/<article-slug>-sealos/`, product/platform terms such as cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, advertising, and promotional route language.
   - historical allow contexts: `.planning/`, `references/ips/seal/source.md` historical notes, `references/routing.md` source-history notes, `NOTICE.md` provenance text, `RELEASE_CHECKLIST.md` migration/evidence boundary text, commit references, and explicit validator/test fixtures.
   - output should include file path and matched token for deterministic evidence.
3. Add explicit CLI scan modes to the existing validator script:
   - `node scripts/validate-skill-package.mjs --stale-sealos-scan`
   - `node scripts/validate-skill-package.mjs --docs-consistency-scan`
   - `node scripts/validate-skill-package.mjs --route-migration-smoke`
4. Update sample parser helpers to Seal naming:
   - `parsePublicSealSampleApproval`
   - `parseGeneratedSealSampleApproval`
   - `parseSealApprovalLine`
   - `emptySealApproval`
   - expected internal Seal output path `assets/<article-slug>-seal`.
5. Update Node tests before implementation where practical, then implement validator changes until the full validator and full Node suite pass.
6. Record release evidence and UAT with exact command summaries.

## Validation Architecture

Phase 32 should require these automated checks as final gates:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`
- `node scripts/validate-skill-package.mjs --stale-sealos-scan`
- `node scripts/validate-skill-package.mjs --docs-consistency-scan`
- `node scripts/validate-skill-package.mjs --route-migration-smoke`

The final evidence artifact should record exact stdout summary lines for the validator and Node test suite, plus the pass lines from the three targeted scan/smoke commands.

## Package Legitimacy Audit

No package-manager installs are part of Phase 32. The implementation uses the existing dependency-free Node scripts and built-in `node:test` runner.

## Risk Notes

- Check IDs and test expectations must be renamed together to avoid false gaps in the ordered matrix tests.
- Historical Sealos text needs path- and context-bounded allowance, because a broad token allowlist would hide active route regressions.
- Parser helper renames must preserve Tom and Ferris parser behavior.
- Final evidence should record the observed final validator count rather than hardcoding the current `98/98` count.

## Research Complete

Phase 32 is ready for a single focused implementation plan covering validator vocabulary, stale active-route denial, historical allow rules, Node fixtures, parser helpers, release evidence, docs consistency, route smoke, and UAT.
