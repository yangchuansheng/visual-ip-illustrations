---
phase: 37
plan: 37-01
status: complete
completed: 2026-06-16T12:40:00Z
requirements:
  - VAL-01
  - VAL-02
  - VAL-03
  - VAL-04
  - VAL-05
---

# Plan 37-01 Summary: OpenClaw Validation and Release Evidence

## Outcome

PASS.

Phase 37 now has deterministic validation coverage for OpenClaw public docs, agent metadata, NOTICE attribution, route smoke prompts, six-route mixed-IP prompts, release evidence, leakage isolation, public sample approval gates, and generated sample separation.

## Implemented Changes

- Added `AGENT-OPENCLAW-001`, `DOC-OPENCLAW-001`, `NOTICE-OPENCLAW-001`, `SMOKE-OPENCLAW-001`, `SMOKE-MIXED-OPENCLAW-001`, and `VAL-OPENCLAW-EVIDENCE-001` to `scripts/validate-skill-package.mjs`.
- Extended public output-path validation to include raw and escaped OpenClaw output markers.
- Replaced the legacy Seal mixed-IP compatibility anchor in `examples/prompts.md` with six-route OpenClaw mixed-IP validator coverage.
- Extended `scripts/validate-skill-package.test.mjs` with required check IDs, stable summary totals, OpenClaw drift fixtures, and release evidence drift coverage.
- Added `.planning/phases/37-openclaw-validation-and-release-evidence/37-RELEASE-EVIDENCE.md`.

## Verification

```bash
node scripts/validate-skill-package.mjs
# Summary: total=112 passed=112 failed=0 skipped=0
```

```bash
node --test scripts/validate-skill-package.test.mjs
# tests 79
# pass 79
# fail 0
```

```bash
git diff --check
# passed
```

## Requirement Traceability

| Requirement | Result |
|-------------|--------|
| VAL-01 | New OpenClaw metadata, docs, NOTICE, smoke, mixed-IP, and evidence checks fail on marker drift. |
| VAL-02 | `BOUNDARY-OPENCLAW-LEAK-001` keeps OpenClaw markers isolated from non-OpenClaw route references. |
| VAL-03 | `BOUNDARY-OPENCLAW-IMG-001` keeps public rendered OpenClaw sample assets gated by release approval. |
| VAL-04 | Node tests cover the new validator checks, OpenClaw gate parsing, public sample placeholders, generated sample separation, and all-pass output. |
| VAL-05 | `37-RELEASE-EVIDENCE.md` records validator, Node test, diff check, route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status. |
