# Phase 1: Routing Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-12
**Phase:** 1-Routing Foundation
**Areas discussed:** default route, explicit Xiaohei aliases, shared workflow boundary, route metadata, user-facing routing docs, package boundary

---

## Default Route

| Option | Description | Selected |
|--------|-------------|----------|
| Xiaohei default | Omitted IP keeps the existing Xiaohei behavior and output path. | ✓ |
| Require explicit IP | User must name the visual IP before generation. | |

**User's choice:** Auto-selected Xiaohei default based on Phase 1 goal and compatibility constraint.
**Notes:** This preserves current installed-skill behavior while allowing later IP selection.

---

## Explicit Xiaohei Aliases

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical aliases | Record `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei`. | ✓ |
| Minimal aliases | Record only `Xiaohei` and `小黑`. | |

**User's choice:** Auto-selected canonical aliases from Phase 1 requirements.
**Notes:** All aliases route to the same Xiaohei route.

---

## Shared Workflow Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Shared orchestration only | Keep article digestion, shot-list, generation loop, QA handoff, asset preservation, and delivery reporting shared. | ✓ |
| Shared style rules | Put visual style and character rules into the shared workflow. | |

**User's choice:** Auto-selected shared orchestration only.
**Notes:** This creates a clean boundary for later Xiaohei and Littlebox IP packs.

---

## Route Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Readable route manifest | Add a route manifest or `SKILL.md` routing section with explicit metadata fields. | ✓ |
| Prose-only route docs | Describe routing only in narrative workflow text. | |

**User's choice:** Auto-selected readable route manifest.
**Notes:** Fields are `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.

---

## User-Facing Routing Docs

| Option | Description | Selected |
|--------|-------------|----------|
| Default, aliases, mixed-IP intent, paths | Explain the full routing surface users need in Phase 1. | ✓ |
| Default-only docs | Mention only that Xiaohei remains default. | |

**User's choice:** Auto-selected complete routing docs.
**Notes:** Mixed-IP docs describe intended separate variant groups, with implementation completed in Phase 3.

---

## Package Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Installable package owns behavior | Keep routing behavior inside `ian-xiaohei-illustrations/`; root docs explain usage. | ✓ |
| Root docs own behavior | Put routing behavior mainly in root docs. | |

**User's choice:** Auto-selected installable package ownership.
**Notes:** This matches the existing Codex Skill package shape.

## the agent's Discretion

- Choose route metadata placement as a new reference file or a `SKILL.md` section.
- Choose compact public-doc wording that preserves the locked route decisions.

## Deferred Ideas

- Phase 2: canonical Xiaohei IP pack and legacy reference compatibility.
- Phase 3: Littlebox route execution, Littlebox references, mixed-IP variant generation, and attribution.
- Phase 4: validation command for route metadata and docs drift.
- Phase 5: release docs, prompt examples, and metadata refresh.
