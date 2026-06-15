# Phase 32 Pattern Map: Seal Migration Validation and Release Evidence

**Phase:** 32 - Seal Migration Validation and Release Evidence  
**Status:** Complete  
**Generated:** 2026-06-15  

## Files to Modify

| File | Role | Existing Pattern to Follow |
|------|------|----------------------------|
| `scripts/validate-skill-package.mjs` | Validator implementation, parser helpers, CLI output, ordered check matrix | Define helper functions near related parser/route helpers, register checks with `defineCheck`, use `assertIncludes`, `assertNoMarkers`, and deterministic summary output. |
| `scripts/validate-skill-package.test.mjs` | Node regression suite and fixture mutations | Use `copyFixture`, `runFixtureValidator`, `replaceInFixture`, `replaceAllInFixture`, and `assert.match` against exact check IDs and file paths. |
| `RELEASE_CHECKLIST.md` | Maintainer release gates and parser-readable approval lines | Keep ATX headings, short checklists, pending approval records, command evidence markers, and phase evidence boundaries. |
| `.planning/phases/32-seal-migration-validation-and-release-evidence/32-RELEASE-EVIDENCE.md` | Phase-local release evidence | Record exact command, exit status, and summary line for every final gate. |
| `.planning/phases/32-seal-migration-validation-and-release-evidence/32-UAT.md` | Text-route UAT evidence | Record route smoke prompt, expected selected route, output path, hoodie identity markers, and product/platform cue absence evidence. |

## Closest Existing Analogs

### Validator checks

- Tom boundary checks: `AGENT-TOM-001`, `ROUTE-TOM-001`, `REFS-TOM-001`, `PROMPT-TOM-001`, `QA-TOM-001`, `RELEASE-TOM-001`, `BOUNDARY-TOM-IMG-001`.
- Ferris source-reviewed checks: `ROUTE-FERRIS-001`, `SOURCE-FERRIS-001`, `RELEASE-FERRIS-001`, `BOUNDARY-FERRIS-IMG-001`, `BOUNDARY-FERRIS-GEN-001`.
- Current Seal route checks: `ROUTE-SEALOS-001` and `ROUTE-SEALOS-002` already assert route id `seal`, status `active`, and output suffix `seal`; rename and polish them rather than replacing their route table parsing logic.

### Parser helpers

- `parsePublicFerrisSampleApproval` and `parseGeneratedFerrisSampleApproval` are the stable model for route-specific public/generated sample records.
- Seal parser helpers should keep the public/generated distinction while changing helper names, line labels, outcome field names, and required internal directory from `assets/<article-slug>-sealos` to `assets/<article-slug>-seal`.

### Fixture mutation tests

- Existing tests such as `validator fixture rejects Tom route metadata drift`, `validator fixture reports Ferris source marker drift`, and `validator fixture reports Sealos docs, metadata, NOTICE, release, and smoke drift` show the fixture style.
- Phase 32 should mutate current Seal markers into stale Sealos markers and assert a Seal-focused check ID plus the affected file path.

## Data Flow

1. `validate-skill-package.mjs` reads live Markdown/YAML files.
2. Route helpers parse `references/routing.md` and resolve route-local reference paths.
3. Seal helper constants provide expected route facts: `Seal`, `seal`, `active`, `references/ips/seal/`, `assets/<article-slug>-seal/`, hoodie identity, source-history authority, and logo-free note.
4. Stale scan helpers inspect active route surfaces and reject stale Sealos route identity while allowing bounded historical/migration contexts.
5. Node tests copy the repo to temp fixtures, mutate one active surface, run the validator subprocess, and assert the expected Seal-focused failure.
6. Evidence commands run the full validator, Node suite, whitespace check, stale scan, docs scan, and route smoke command.

## Implementation Notes for Executors

- Preserve existing Xiaohei default behavior, Littlebox active behavior, Tom `gated-authorized`, Ferris `source-reviewed`, and Visual IP Illustrations rebrand checks.
- Rename check IDs and test IDs in one pass so ordered matrix tests remain meaningful.
- Keep final validator count flexible until implementation settles; record the observed final `Summary:` line in evidence.
- Keep `Sealos` historical wording only in bounded contexts documented by Phase 32 context decisions D-05 through D-07.
- Keep evidence artifacts as plain Markdown with command blocks and copied summary lines.

## Pattern Mapping Complete
