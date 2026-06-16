---
phase: 33
status: passed
threats_open: 0
---

# Phase 33 Security Audit: OpenClaw Source and Route Contract

## Scope

- Audited files:
  - `.planning/phases/33-openclaw-source-and-route-contract/33-01-PLAN.md`
  - `.planning/phases/33-openclaw-source-and-route-contract/33-01-SUMMARY.md`
  - `ian-xiaohei-illustrations/references/routing.md`
  - `ian-xiaohei-illustrations/references/ips/openclaw/source.md`
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`
- ASVS level: 1
- Security block setting: `high`
- Threat model block: missing from `33-01-PLAN.md`; this audit uses the requested Phase 33 risk focus as the verification register.
- Summary threat flags: no `## Threat Flags` section found.

## Threat Verification

| ID | Risk | Status | Evidence |
|----|------|--------|----------|
| TH-33-01 | IP leakage across route references | CLOSED | `BOUNDARY-OPENCLAW-LEAK-001` rejects OpenClaw route/source/logo markers in Xiaohei, Littlebox, Tom, Ferris, Seal, and legacy Xiaohei route references. Test fixture `validator fixture reports OpenClaw leakage in non-OpenClaw packs` covers leak failures across all non-OpenClaw route packs. |
| TH-33-02 | Source/license misrepresentation | CLOSED | Source record contains official repo, snapshot, MIT License, copyright, and uploaded-logo authority at `source.md:10-15`; routing row mirrors repo/license/copyright/status at `routing.md:35`. |
| TH-33-03 | Public rendered sample gate | CLOSED | `parsePublicOpenClawSampleApproval`, `parseGeneratedOpenClawSampleApproval`, `RELEASE-OPENCLAW-001`, `BOUNDARY-OPENCLAW-IMG-001`, and `BOUNDARY-OPENCLAW-GEN-001` enforce OpenClaw public rendered sample approval, generated sample review records, and allowed public sample directories. `RELEASE_CHECKLIST.md` now includes the OpenClaw source/license, public asset, generated sample, and final review gate records. |
| TH-33-04 | Path boundary and route reference containment | CLOSED | `safePackagePath` and `safeReferencePath` block reference escapes at `scripts/validate-skill-package.mjs:457-471`; `ROUTE-REFS-001` pins OpenClaw to `references/ips/openclaw/source.md` at `scripts/validate-skill-package.mjs:2258-2303`; `ROUTE-PATHS-001` and `ROUTE-MIXED-001` assert OpenClaw output markers at `scripts/validate-skill-package.mjs:2306-2354`. |
| TH-33-05 | Validation drift for OpenClaw-specific contract | CLOSED | `SOURCE-OPENCLAW-001` pins the OpenClaw source/license/uploaded-logo marker contract. The validator matrix includes OpenClaw output tokens, route isolation, release checklist gates, public sample gate, generated sample gate, and parser helper coverage. Negative fixtures cover source drift, route leakage, public sample approval drift, generated sample review parsing, and parser helper outcomes. |

## Closed Mitigations

| ID | Expected Mitigation | Files Searched |
|----|---------------------|----------------|
| TH-33-01 | `BOUNDARY-OPENCLAW-LEAK-001` and leak fixtures close OpenClaw route marker leakage. | `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs` |
| TH-33-03 | OpenClaw public/generated sample parsers, release checklist records, and public asset directory gate close the sample release boundary. | `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `RELEASE_CHECKLIST.md` |
| TH-33-05 | `SOURCE-OPENCLAW-001`, OpenClaw parser helper assertions, and drift fixtures close OpenClaw-specific validation drift. | `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs` |

## Verification Commands

Passed:

```bash
rg -n "openclaw|OpenClaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw|source-reviewed" ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/references/ips/openclaw/source.md
```

```bash
rg -n "https://github.com/openclaw/openclaw|c14793d35a10936ddea833e7808083fe57930616|MIT License|Copyright \\(c\\) 2026 OpenClaw Foundation|red round body|side claw-like arms|two antennae|black eyes|cyan pupils|short legs" ian-xiaohei-illustrations/references/ips/openclaw/source.md
```

```bash
node scripts/validate-skill-package.mjs
```

Result: `Summary: total=102 passed=102 failed=0 skipped=0`

```bash
node --test scripts/validate-skill-package.test.mjs
```

Result: `tests 72`, `pass 72`, `fail 0`

```bash
git diff --check
```

Result: passed with no output.

Gap checks:

```bash
rg -n "SOURCE-OPENCLAW|BOUNDARY-OPENCLAW|OpenClaw public|OpenClaw Generated|openclaw.*sample|sample.*openclaw|openclaw.*leak|leak.*openclaw" scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs RELEASE_CHECKLIST.md
```

Observed before mitigation: OpenClaw-specific source, leakage, public-sample, and generated-sample validation gates were pending.

```bash
rg -n "assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw" scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs
```

Observed before mitigation: OpenClaw output path was asserted in route-specific checks and parser tests.

## Result

CLOSED_THREATS

Closed: 5/5
Open: 0/5

Mitigation landed:

1. Added OpenClaw validator IDs for source/license markers, route leakage, public sample approval, generated sample review, and parser helper coverage.
2. Added negative fixtures proving those checks fail on OpenClaw source drift, route leakage, public sample approval drift, and generated sample review drift.
3. Re-ran validator, Node tests, and diff hygiene after validator hardening landed.
