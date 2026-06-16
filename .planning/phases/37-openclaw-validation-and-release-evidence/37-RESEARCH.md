---
phase: 37
status: complete
created: 2026-06-16T12:15:18Z
research_subagent: attempted
research_subagent_result: timed_out_without_artifact
---

# Phase 37 Research

## Current Validator Coverage

OpenClaw already has validator coverage for route metadata, source record, canonical route-local pack, prompt template, identity file, QA checklist, non-OpenClaw route leakage, public rendered asset gate, generated sample/public asset separation, release checklist section, language allowlist aliases, and output path tokens through shared route path checks.

Key existing checks:

- `REFS-OPENCLAW-001`
- `PROMPT-OPENCLAW-001`
- `IP-OPENCLAW-001`
- `QA-OPENCLAW-001`
- `SOURCE-OPENCLAW-001`
- `RELEASE-OPENCLAW-001`
- `BOUNDARY-OPENCLAW-LEAK-001`
- `BOUNDARY-OPENCLAW-IMG-001`
- `BOUNDARY-OPENCLAW-GEN-001`

## Remaining Gaps

| Gap | Current State | Phase 37 Direction |
|-----|---------------|--------------------|
| Agent metadata parity | `openai.yaml` includes OpenClaw, but only Tom and Seal have explicit agent checks. | Add `AGENT-OPENCLAW-001`. |
| Public docs parity | Shared docs checks cover route paths; Seal/Ferris have route-specific docs checks; OpenClaw lacks one. | Add `DOC-OPENCLAW-001` for README/examples/openai/NOTICE/release/routing alignment. |
| NOTICE parity | NOTICE includes OpenClaw, but no dedicated NOTICE check exists. | Add `NOTICE-OPENCLAW-001`. |
| Route smoke parity | `examples/prompts.md` includes OpenClaw smoke, but no dedicated smoke check exists. | Add `SMOKE-OPENCLAW-001`. |
| Mixed-IP parity | Current Seal check still uses `five separate variant groups` as historical compatibility marker. | Replace with a six-route mixed-IP check requiring OpenClaw group markers. |
| Final release evidence | No Phase 37 evidence artifact exists yet. | Add `VAL-OPENCLAW-EVIDENCE-001` and write evidence artifact after implementation. |
| Node regression matrix | `requiredCheckIds` lacks OpenClaw docs/metadata/NOTICE/smoke/evidence IDs. | Extend `requiredCheckIds` and add fixture tests for each new check. |

## Implementation Notes

- Keep check ordering stable by adding OpenClaw checks next to analogous Seal/Ferris checks.
- Update tests in the same commit as validator changes to avoid stale required-check-id failures.
- Remove the Phase 36 compatibility marker from `examples/prompts.md` only after the new six-route mixed-IP validator check exists.
- Evidence artifact should be documentation-only and should record exact command summaries from the final run.
- Public rendered OpenClaw assets should remain absent from `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`.

## Verification Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Expected end state:

- Validator passes with a higher total check count.
- Node tests pass with a higher test count.
- `git diff --check` passes.
- Phase 37 evidence artifact exists and is validated by `VAL-OPENCLAW-EVIDENCE-001`.
