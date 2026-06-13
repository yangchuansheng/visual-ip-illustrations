---
status: complete
phase: 14-docs-examples-and-release-surface
source:
  - .planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md
  - .planning/phases/14-docs-examples-and-release-surface/14-02-SUMMARY.md
  - .planning/phases/14-docs-examples-and-release-surface/14-03-SUMMARY.md
  - .planning/phases/14-docs-examples-and-release-surface/14-04-SUMMARY.md
started: 2026-06-13T11:39:01Z
updated: 2026-06-13T11:39:01Z
mode: text-autonomous
---

## Current Test

[testing complete]

## Tests

### 1. README Ferris Route Guidance
expected: README presents Ferris as an explicit source-reviewed Rust-community mascot route, keeps Xiaohei as default, lists aliases, full pack path, source/trademark authority, output paths, planning fields, and public sample release gate.
result: pass
evidence: `README.md` lines 17-20, 71-85, 91-98, and 340-352.

### 2. Copyable Ferris Prompt Inventory
expected: `examples/prompts.md` includes copyable Ferris planning, generation, route smoke, and four-IP mixed prompt examples with exact Ferris route tokens and output paths.
result: pass
evidence: `examples/prompts.md` lines 151-205 and 214-248.

### 3. Agent Metadata Route Discovery
expected: Agent metadata names Xiaohei, Littlebox, Tom, and Ferris, preserves default Xiaohei for omitted visual IP, and keeps Ferris explicit source-reviewed wording.
result: pass
evidence: `ian-xiaohei-illustrations/agents/openai.yaml` lines 1-6.

### 4. Release Checklist and NOTICE Gate
expected: Release materials include Ferris source record review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, final release review, and concise NOTICE source/trademark separation.
result: pass
evidence: `RELEASE_CHECKLIST.md` lines 5-27 and 88-130; `NOTICE.md` lines 32-41.

### 5. Cross-Document Consistency
expected: README, examples, metadata, NOTICE, routing docs, and release checklist use consistent Ferris source attribution, `source-reviewed` status, source/trademark authority, output path, public-sample release review wording, and Phase 15 validator/test boundary.
result: pass
evidence: FDOC-05 cross-document fixed-string gate passed; `routing.md` lines 11-16, 25, and 45.

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

none

## Deferred Baseline

- Phase 15 owns validator/test expectation updates and green Node evidence.
- `node scripts/validate-skill-package.mjs` currently exits 1 with `Summary: total=53 passed=48 failed=5 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` currently exits 1 with `tests 23`, `pass 13`, `fail 10`.
