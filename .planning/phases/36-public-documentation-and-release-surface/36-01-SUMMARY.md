---
phase: 36
plan: 36-01
status: complete
completed: 2026-06-16T12:09:11Z
executor_subagent: attempted
executor_subagent_result: partial_file_changes_then_shutdown
requirements:
  - DOC-01
  - DOC-02
  - DOC-03
  - DOC-04
---

# Plan 36-01 Summary: OpenClaw Public Documentation and Release Surface

## Outcome

OpenClaw is now documented across the public and runtime-facing release surface as an explicit `source-reviewed` logo-mascot route.

## Changed Files

- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`
- `ian-xiaohei-illustrations/agents/openai.yaml`

## Delivered

- Added OpenClaw to the README route inventory, output path list, escaped docs marker list, route description, canonical pack list, operational route facts, quick examples, workflow, directory tree, maintainer validation wording, and public sample gate language.
- Added OpenClaw canonical planning, canonical generation, legacy route smoke, edit, mixed-IP planning, mixed-IP generation, and maintainer smoke examples to `examples/prompts.md`.
- Added a compatibility marker for the historical five-route Seal mixed-IP validator anchor while keeping current six-route OpenClaw prompts visible.
- Added OpenClaw source/license attribution and public sample review fields to `NOTICE.md`.
- Added OpenClaw to release smoke, attribution, package boundary, public docs/path marker, and final release review checklist sections.
- Updated OpenAI agent metadata to include OpenClaw in display name, short description, and default prompt.

## Verification

```bash
rg -n 'OpenClaw|openclaw|references/ips/openclaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw' README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/agents/openai.yaml
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Results:

- `node scripts/validate-skill-package.mjs`: 106/106 passed.
- `node --test scripts/validate-skill-package.test.mjs`: 73/73 passed.
- `git diff --check`: passed.

## Notes

- Public rendered OpenClaw sample images remain governed by `RELEASE_CHECKLIST.md`.
- Phase 37 owns validator parity hardening and final release evidence.
