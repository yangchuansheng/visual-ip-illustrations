# Phase 41: Go Gopher Public Documentation and Release Surface - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-17
**Phase:** 41-Go Gopher Public Documentation and Release Surface
**Areas discussed:** public README surface, prompt examples, attribution and release gates, agent discovery metadata, acceptance and validation boundary

---

## Public README Surface

| Option | Description | Selected |
|--------|-------------|----------|
| English README only | Update `README.md` as the primary public entrypoint and leave localized README variant parity for Phase 42. | |
| All README variants | Update every root `README*.md` variant so Go Gopher parity matches the existing OpenClaw documentation precedent. | ✓ |
| Minimal route mention | Add only a short route inventory line and defer deeper README route facts. | |

**User's choice:** Autonomous selection based on the task instruction and repo precedent.
**Notes:** `.planning/REQUIREMENTS.md` includes DOC-05 for README variant consistency. `.planning/STATE.md` records that OpenClaw documentation now covers every root README variant and validator `DOC-OPENCLAW-001` discovers all `README*.md` files. Phase 41 should treat README variants as part of the public release surface.

---

## Prompt Examples

| Option | Description | Selected |
|--------|-------------|----------|
| Full prompt coverage | Add planning, generation, edit, route smoke, mixed-IP planning, mixed-IP generation, and maintainer smoke examples for Go Gopher. | ✓ |
| Basic planning and generation only | Add only two normal-flow prompts and leave edit/smoke/mixed-IP examples to Phase 42. | |
| Mixed-IP only | Add Go Gopher only to existing mixed-IP examples and skip solo examples. | |

**User's choice:** Autonomous selection based on Phase 41 expected focus.
**Notes:** The user explicitly named public README and prompt examples. Existing `examples/prompts.md` already has the full surface for OpenClaw, Seal, Ferris, Tom, Littlebox, and Xiaohei. Go Gopher examples should include route-local references, source/license authority, root `gopher.png`, output path, escaped marker, public sample gate, and Phase 39 planning fields.

---

## Attribution and Release Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Source/license and sample policy gate | Add NOTICE attribution plus a dedicated release gate covering Go blog source context, Renee French, Creative Commons Attribution 4.0, root `gopher.png`, public sample policy, Go logo boundary, and endorsement boundary. | ✓ |
| NOTICE only | Add Go Gopher attribution to NOTICE and defer release checklist details. | |
| Release checklist only | Add checklist entries and let NOTICE stay unchanged until release evidence. | |

**User's choice:** Autonomous selection based on the task instruction.
**Notes:** Phase 41 expected focus explicitly names NOTICE and release checklist. Public sample policy should remain pending; docs should state release review requirements without approving public rendered Go Gopher samples.

---

## Agent Discovery Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Add Go Gopher discovery copy | Update `display_name`, `short_description`, and `default_prompt` to include Go Gopher as an explicit `source-reviewed` route. | ✓ |
| Leave metadata until validation | Keep `openai.yaml` unchanged and let Phase 42 enforce it. | |
| Mention Go Gopher only in default prompt | Add only a prompt hint while keeping display copy stable. | |

**User's choice:** Autonomous selection based on Phase 40 deferral and Phase 41 focus.
**Notes:** Phase 40 intentionally left broad `agents/openai.yaml` discovery copy for Phase 41. Metadata should preserve Visual IP Illustrations identity, canonical invocation, legacy alias, and Xiaohei omitted-IP default.

---

## Acceptance and Validation Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Documentation-observable acceptance | Verify Phase 41 with targeted `rg` checks, route/path/source/sample markers, README variant inspection, metadata checks, and `git diff --check`; record validator/Node failures as Phase 42-deferred when they match the known seventh-route baseline. | ✓ |
| Full validator green | Require `node scripts/validate-skill-package.mjs` and Node tests to pass in Phase 41. | |
| Manual document review only | Skip command checks and rely on reading changed docs. | |

**User's choice:** Autonomous selection based on roadmap split.
**Notes:** Phase 42 owns validator hardening and release evidence. Phase 38-40 evidence already records current validator and Node failures as the known seventh-route baseline.

---

## Agent Discretion

- The user instructed the agent to make autonomous choices for interactions. The selections above are agent-selected and grounded in the roadmap, prior phase evidence, and existing OpenClaw documentation precedent.
- The artifact directory uses `.planning/phases/41-go-gopher-public-documentation-and-release-surface/` because the user requested that exact path. GSD `init.phase-op 41` resolves the roadmap title to `.planning/phases/41-public-documentation-and-release-surface/`, so the path decision is recorded for downstream planning.
- Exact placement inside public docs is left to the Phase 41 planner, with preference for mirroring OpenClaw's Phase 36 public documentation pattern.

## Deferred Ideas

- Validator and Node hardening remain Phase 42.
- Public rendered Go Gopher samples remain behind release review.
- Moving, tracking, hashing, or relocating root `gopher.png` remains outside Phase 41.
- Route manifest generation, source-image hashing, visual regression, public comparison sheets, and selected-route install packaging remain future work.
