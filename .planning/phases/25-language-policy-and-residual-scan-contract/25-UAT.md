---
status: complete
phase: 25-language-policy-and-residual-scan-contract
source:
  - .planning/phases/25-language-policy-and-residual-scan-contract/25-VERIFICATION.md
started: 2026-06-14T16:20:00Z
updated: 2026-06-14T16:20:00Z
---

# Phase 25 UAT: Language Policy and Residual Scan Contract

## Current Test

[testing complete]

## Tests

### 1. Maintainer Policy Clarity Review

expected: The maintainer can identify English-default surfaces, approved multilingual exceptions, allowlist entry shape, scan output fields, compatibility surfaces, and migration handoff without reading validator code.

result: pass

evidence:
- `LANGUAGE_POLICY.md` contains `Default Language`, `Approved Multilingual Exceptions`, `Allowlist Entry Shape`, `Residual Chinese Scan Contract`, `Compatibility Surfaces`, and `Migration Handoff`.
- `LANG-POLICY-001` and `LANG-POLICY-002` pass in `node scripts/validate-skill-package.mjs`.

### 2. Transitional Enforcement Acceptance

expected: The maintainer accepts that stale Chinese prose is reported today and hard-fail enforcement is deferred to Phase 28 after migration surfaces are translated.

result: pass

evidence:
- `25-CONTEXT.md` D-14 locks Phase 25 as policy and scan-contract work before full migration hardening.
- `25-RESEARCH.md` records `Open Questions (RESOLVED)` and selects report-mode production behavior plus fixture-proven hard failure.
- `25-VERIFICATION.md` confirms `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` fails as expected while production validation remains green.

## Summary

total: 2
passed: 2
issues: 0
pending: 0
skipped: 0

## Gaps

None.
