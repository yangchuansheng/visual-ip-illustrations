# Phase 32 Release Evidence

Phase 32 validates the active Seal migration through deterministic local commands.

## Command Evidence

| Command | Exit | Evidence |
|---------|------|----------|
| `node scripts/validate-skill-package.mjs` | 0 | `Summary: total=97 passed=97 failed=0 skipped=0` |
| `node --test scripts/validate-skill-package.test.mjs` | 0 | `tests 66`, `pass 66`, `fail 0`, `cancelled 0`, `skipped 0`, `todo 0` |
| `git diff --check` | 0 | No whitespace errors reported. |
| `node scripts/validate-skill-package.mjs --stale-sealos-scan` | 0 | `PASS stale Sealos active-route scan` |
| `node scripts/validate-skill-package.mjs --docs-consistency-scan` | 0 | `PASS Seal docs consistency scan` |
| `node scripts/validate-skill-package.mjs --route-migration-smoke` | 0 | `PASS Seal route migration smoke` |

## Validator Summary

Final validator matrix:

```text
Summary: total=97 passed=97 failed=0 skipped=0
```

Seal migration coverage includes Seal-focused check IDs, parser helpers, route metadata, route-local references, prompt templates, QA checklist, source record, public docs, NOTICE, examples smoke prompts, release checklist gates, public sample gates, generated sample gates, and cross-route leakage boundaries.

## Node Test Summary

Final Node test run:

```text
tests 66
suites 0
pass 66
fail 0
cancelled 0
skipped 0
todo 0
```

The test suite covers Seal route parsing, route order stability, output path migration, stale leakage fixtures, prompt leakage fixtures, docs leakage fixtures, public sample approval parsing, generated sample approval parsing, and full-pass validator output.

## Scan Results

Stale Sealos active-route scan:

```text
PASS stale Sealos active-route scan
```

The scan checks active Seal route surfaces for stale Sealos route identity, old `references/ips/sealos/` paths, old `assets/<article-slug>-sealos/` paths, old product/platform vocabulary, and old Sealos public asset policy wording. Historical Sealos provenance remains bounded to source-history and migration contexts.

Seal docs consistency scan:

```text
PASS Seal docs consistency scan
```

The scan confirms Seal naming, `active` status, source-history authority, hoodie seal identity, logo-free notes, `references/ips/seal/source.md`, raw output path `assets/<article-slug>-seal/`, and escaped output path `assets/&lt;article-slug&gt;-seal/` stay aligned across public docs and routing metadata.

Seal route migration smoke:

```text
PASS Seal route migration smoke
```

The smoke check confirms route id `seal`, display name `Seal`, status `active`, `default=false`, output suffix `seal`, all Seal aliases, seven route-local references under `references/ips/seal/`, and Seal output path markers.

## Release Readiness

Phase 32 release evidence satisfies VAL-04. The validator, Node regression suite, whitespace check, stale scan, docs consistency scan, and route migration smoke all pass with exit status 0.
