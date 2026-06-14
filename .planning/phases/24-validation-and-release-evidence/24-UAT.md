# Phase 24 UAT Evidence

**Date:** 2026-06-14  
**Scope:** Visual IP Illustrations rebrand migration and route behavior smoke coverage  
**Result:** Passed

## UAT Matrix

| ID | Scenario | Evidence Source | Expected | Result |
|----|----------|-----------------|----------|--------|
| VAL-01-UAT-01 | Canonical invocation uses `$visual-ip-illustrations`. | `README.md`, `examples/prompts.md`, `SKILL.md`, `openai.yaml`, `REBRAND-CANON-001`, `REBRAND-CANON-002` | Canonical public and runtime surfaces retain Visual IP Illustrations identity. | Passed |
| VAL-02-UAT-01 | Legacy invocation uses `$ian-xiaohei-illustrations`. | `README.md`, `examples/prompts.md`, `SKILL.md`, `openai.yaml`, `REBRAND-COMPAT-001`, `REBRAND-COMPAT-002` | Legacy alias remains visible as release 1.4 compatibility surface. | Passed |
| VAL-02-UAT-02 | Install migration keeps live remote and canonical checkout slug. | `README.md`, `SKILL.md`, `RELEASE_CHECKLIST.md`, `REBRAND-MIGRATE-001` | Remote stays `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`; checkout target is `visual-ip-illustrations`; package directory stays `ian-xiaohei-illustrations/`. | Passed |
| VAL-03-UAT-01 | Omitted-IP prompt selects Xiaohei. | `examples/prompts.md`, `routing.md`, `REBRAND-ROUTE-001` | Xiaohei stays the only `default=true` route and uses `assets/<article-slug>-illustrations/`. | Passed |
| VAL-03-UAT-02 | Explicit Littlebox prompt stays routed. | `examples/prompts.md`, `routing.md`, `REBRAND-ROUTE-001`, `REBRAND-PATH-001` | Littlebox aliases, active status, six references, and `assets/<article-slug>-littlebox/` stay stable. | Passed |
| VAL-03-UAT-03 | Explicit Tom prompt stays routed. | `examples/prompts.md`, `routing.md`, `REBRAND-ROUTE-001`, `REBRAND-PATH-001` | Tom aliases, `gated-authorized`, seven references, rights path, and `assets/<article-slug>-tom/` stay stable. | Passed |
| VAL-03-UAT-04 | Explicit Ferris prompt stays routed. | `examples/prompts.md`, `routing.md`, `REBRAND-ROUTE-001`, `REBRAND-PATH-001` | Ferris aliases, `source-reviewed`, seven references, source path, and `assets/<article-slug>-ferris/` stay stable. | Passed |
| VAL-03-UAT-05 | Explicit Sealos Seal prompt stays routed. | `examples/prompts.md`, `routing.md`, `REBRAND-ROUTE-001`, `REBRAND-PATH-001` | Sealos aliases, `brand-owned`, seven references, source path, and `assets/<article-slug>-sealos/` stay stable. | Passed |
| VAL-04-UAT-01 | Release evidence gates are readable. | `RELEASE_CHECKLIST.md`, `REBRAND-EVIDENCE-001`, `24-VERIFICATION.md` | Validator, Node test, `git diff --check`, route smoke, and release 1.4 review gates are recorded. | Passed |

## Compatibility Smoke Coverage

- Canonical invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Omitted-IP default: Xiaohei
- Explicit routes: Xiaohei, Littlebox, Tom, Ferris, Sealos Seal
- Mixed route grouping: five separate variant groups with route-local references
- Output paths: raw and escaped tokens for all five routes

## Baseline and Final Counts

| Command | Baseline | Final |
|---------|----------|-------|
| `node scripts/validate-skill-package.mjs` | `Summary: total=78 passed=78 failed=0 skipped=0` | `Summary: total=89 passed=89 failed=0 skipped=0` |
| `node --test scripts/validate-skill-package.test.mjs` | `tests 40`, `pass 40`, `fail 0` | `tests 51`, `pass 51`, `fail 0` |

## Notes

The only public-facing documentation edit was marker-only: routing now includes escaped path tokens for Xiaohei and Littlebox, matching the existing Tom, Ferris, and Sealos routing path markers.
