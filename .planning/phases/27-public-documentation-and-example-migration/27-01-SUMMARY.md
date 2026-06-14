---
status: completed
plan_id: 27-01
phase: 27
phase_name: public-documentation-and-example-migration
commit_hash: e8b82e8
updated: 2026-06-14T18:26:10Z
requirements:
  - DOC-01
  - DOC-02
  - DOC-03
  - DOC-04
---

# Phase 27 Plan 27-01 Summary

Public documentation and prompt examples now use English-default prose while preserving Visual IP Illustrations route compatibility.

## Objective

Migrate Phase 27 public documentation surfaces to English-default content and synchronize validator/test markers for the changed public-doc headings and prompt prose.

## Files Changed

- `README.md`
- `examples/prompts.md`
- `RELEASE_CHECKLIST.md`
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`
- `.planning/phases/27-public-documentation-and-example-migration/27-01-SUMMARY.md`

`NOTICE.md` was reviewed and left unchanged because it already uses English-default prose while preserving required attribution/source tokens.

## Tasks Completed

1. Migrated `README.md` to English-default public documentation, including identity, route descriptions, gallery captions and alt text, installation, examples, workflow, validation, related projects, and author sections.
2. Migrated `examples/prompts.md` to English-default copyable prompts while preserving canonical and legacy invocations, Chinese route aliases, user-language visible-label examples, route statuses, authority paths, raw output paths, escaped output paths, and mixed-IP group coverage.
3. Migrated the remaining stale prose in `RELEASE_CHECKLIST.md` while preserving parser-sensitive approval records and slash-delimited field order.
4. Updated validator `SMOKE-*` marker expectations and related fixture tests to match the English public-doc headings and prompt prose.
5. Extended the language allowlist with narrow entries for existing Phase 26 compatibility markers in runtime/reference files so enforce mode classifies approved multilingual tokens separately from stale prose.

## Verification Evidence

- `node scripts/validate-skill-package.mjs` -> passed, `Summary: total=93 passed=93 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` -> passed, `tests 56`, `pass 56`, `fail 0`
- `git diff --check` -> passed
- `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` -> passed, `Summary: total=93 passed=93 failed=0 skipped=0`
- `rg -n "[\\p{Han}]" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md` -> 55 findings, all classified as approved multilingual exceptions

## Residual Han Classification

Residual Han in Phase 27-owned public docs is intentional and policy-approved:

- Route aliases: `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, `Sealos 海豹`
- Attribution/source name: `小黑` in `NOTICE.md`
- User-language visible labels: `原始材料`, `判断`, `输出`
- Compatibility smoke fixtures and Chinese article illustration examples in `examples/prompts.md`

No stale Chinese prose remains under enforce mode.

## Deviations

- `gsd-tools` was unavailable in the execution shell, so execution proceeded from the provided Phase 27 plan and repository planning files.
- `NOTICE.md` was in the declared scope and was reviewed, but no edit was needed.
- The summary frontmatter cannot self-reference the final commit hash because the hash is computed from the committed file content. The final commit hash is reported by the executor response.
- The validator allowlist was extended for exact pre-existing Phase 26 runtime/reference compatibility markers discovered by enforce-mode validation. This was a Rule 3 blocking fix for the required Phase 27 enforce-mode command and did not modify runtime/reference files outside the allowed plan scope.

## Self-Check

PASSED

- All changed files are within the allowed plan scope plus this summary file.
- All required validation commands passed.
- Public docs preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, route aliases, statuses, authority paths, and raw/escaped output path contracts.
- Parser-sensitive release approval records were preserved.
