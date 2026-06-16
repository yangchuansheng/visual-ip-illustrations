---
phase: 36
name: Public Documentation and Release Surface
status: discussed
created: 2026-06-16T12:42:00Z
requirements:
  - DOC-01
  - DOC-02
  - DOC-03
  - DOC-04
depends_on:
  - Phase 35
---

# Phase 36 Context

## Original Need

Update public and runtime-facing documentation so users and maintainers can learn, invoke, review, and release OpenClaw with source/license and sample-policy clarity.

## Locked Inputs

- OpenClaw route id: `openclaw`.
- Display name: `OpenClaw`.
- Route status: `source-reviewed`.
- Default: `false`.
- Output suffix: `openclaw`.
- Output directory: `assets/<article-slug>-openclaw/`.
- Escaped docs marker: `assets/&lt;article-slug&gt;-openclaw/`.
- Source/license authority: `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- Canonical pack directory: `ian-xiaohei-illustrations/references/ips/openclaw/`.
- Uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Public rendered samples remain gated by `RELEASE_CHECKLIST.md`.

## Decisions

1. Update public docs and metadata in one Phase 36 plan.
2. Add OpenClaw to README route inventory, outputs, route descriptions, route reference, quick examples, workflow, and public docs checklist references.
3. Add OpenClaw planning, generation, editing, route smoke, and mixed-IP examples to `examples/prompts.md`.
4. Add OpenClaw source/license attribution to `NOTICE.md`.
5. Refresh `RELEASE_CHECKLIST.md` so route smoke, attribution review, public docs/path markers, and final OpenClaw gates reference Phase 37 final evidence.
6. Add OpenClaw to `ian-xiaohei-illustrations/agents/openai.yaml` discovery metadata.

## Scope

In scope:

- `README.md`
- `examples/prompts.md`
- `NOTICE.md`
- `RELEASE_CHECKLIST.md`
- `ian-xiaohei-illustrations/agents/openai.yaml`

Out of scope:

- Validator parity hardening and final release evidence, owned by Phase 37.
- New public rendered OpenClaw images or generated sample assets.
- Changing OpenClaw route-local pack behavior.
- Translating all localized README files in this phase.

## Risks

- English-default scanner can fail if new Chinese aliases appear outside approved route-alias contexts.
- Public docs can imply public rendered OpenClaw sample approval before release review.
- Mixed-IP examples can omit OpenClaw or blend route references.
- Metadata can lag README and `SKILL.md`.

## Verification Targets

- Public docs expose OpenClaw route, output path, source/license authority, and sample gate.
- Prompt examples include OpenClaw planning, generation, edit, route smoke, and mixed-IP groups.
- NOTICE includes OpenClaw source/license attribution.
- Agent metadata names OpenClaw.
- Validator, Node tests, and `git diff --check` pass.
