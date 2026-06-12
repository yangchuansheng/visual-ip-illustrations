# Phase 5: Documentation, Examples, and Release Packaging - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-12
**Phase:** 5-Documentation, Examples, and Release Packaging
**Mode:** `$gsd-discuss-phase 5 --auto` equivalent
**Areas discussed:** Public README entry point, copyable prompt examples, agent metadata, release checklist, validation ownership, scope boundary

---

## Runtime Notes

- The user explicitly requested autonomous choices and subagent-backed phase stages.
- Codex tool discovery did not expose `spawn_agent`, `wait`, or `close_agent` tools in this session.
- The discuss-phase auto-mode work was completed inline with the same artifact contract: select all relevant gray areas, choose recommended defaults, write context once, write discussion log, and commit.
- No implementation plans were created.

---

## Public README Entry Point

| Option | Description | Selected |
|--------|-------------|----------|
| README as primary public two-IP entrypoint | Explain multi-IP support in README, state Xiaohei default, show Littlebox as explicit selectable IP, and keep details concise. | yes |
| Keep two-IP docs mostly in references | Put most user-facing explanation inside skill references and keep README mostly Xiaohei-oriented. | |
| Add rendered Littlebox examples now | Import Littlebox images into public examples as part of docs refresh. | |

**Auto-selected choice:** README as primary public two-IP entrypoint.
**Notes:** Recommended because Phase 5 goal is public docs and release materials. The selected option preserves Xiaohei default behavior and avoids broad asset imports.

---

## Copyable Prompt Examples

| Option | Description | Selected |
|--------|-------------|----------|
| Expand `examples/prompts.md` into sectioned prompt groups | Add copyable prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, mixed-IP variants, validation/smoke use, and editing flows. | yes |
| Keep only smoke prompts | Preserve the current minimal smoke prompts and route docs. | |
| Split prompt examples across multiple files | Create separate prompt docs per IP and route type. | |

**Auto-selected choice:** Expand `examples/prompts.md` into sectioned prompt groups.
**Notes:** Recommended because DOCS-03 requires copyable prompts for both IPs and mixed-IP variants. Existing validator route/path markers must be preserved.

---

## Agent Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Update metadata for selectable IP support with Xiaohei default | Revise display metadata and default prompt to mention selectable IPs while preserving Xiaohei as default and implicit invocation. | yes |
| Keep metadata Xiaohei-only | Leave `openai.yaml` unchanged because runtime routing already supports Littlebox. | |
| Make Littlebox equally prominent in default prompt | Use a default prompt that asks for both IPs by default. | |

**Auto-selected choice:** Update metadata for selectable IP support with Xiaohei default.
**Notes:** Recommended because DOCS-05 belongs to Phase 5. `policy.allow_implicit_invocation: true` remains locked.

---

## Release Checklist

| Option | Description | Selected |
|--------|-------------|----------|
| Add lightweight root `RELEASE_CHECKLIST.md` | Provide a maintainer checklist for validation, Node tests, both-IP smoke prompts, attribution, package boundary, and Littlebox asset-import boundary. | yes |
| Put checklist only in README | Add a short release section inside README. | |
| Add release automation | Create scripts or CI to package releases. | |

**Auto-selected choice:** Add lightweight root `RELEASE_CHECKLIST.md`.
**Notes:** Recommended because it satisfies DOCS-06 while keeping the repository documentation-first and lightweight.

---

## Validation Ownership

| Option | Description | Selected |
|--------|-------------|----------|
| Run Phase 4 validator and update only intentional public-doc markers | Use `node scripts/validate-skill-package.mjs` after docs and metadata edits; update checks only when required markers intentionally change. | yes |
| Leave validator untouched and rely on manual review | Avoid validator changes during documentation work. | |
| Expand validator into a release framework | Add broader release/package validation beyond Phase 4's lightweight contract. | |

**Auto-selected choice:** Run Phase 4 validator and update only intentional public-doc markers.
**Notes:** Recommended because Phase 4 validator is the verified drift gate, and Phase 5 edits will touch files it validates.

---

## Scope Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 5 lightweight | Limit Phase 5 to docs, examples, metadata, release checklist, and validator-compatible marker updates. | yes |
| Add CI workflow | Add GitHub Actions for release checks. | |
| Add packaging archive or release script | Create packaged release output. | |
| Add rendered Littlebox assets, asset manifest, or third-IP schema | Expand release materials into asset/import/extensibility work. | |

**Auto-selected choice:** Keep Phase 5 lightweight.
**Notes:** Recommended because requirements map Phase 5 to DOCS-01, DOCS-02, DOCS-03, DOCS-05, and DOCS-06. v2 requirements cover asset manifests, release scripts, localization, and extension schemas.

---

## the agent's Discretion

- The agent may choose exact README section order and heading names while satisfying the locked Phase 5 decisions.
- The agent may decide how prominently README links to `RELEASE_CHECKLIST.md`, provided maintainer discoverability is clear.
- The agent may update validator doc-marker checks only when the public docs intentionally change required markers.

## Deferred Ideas

- CI workflow for validator and tests.
- Release archive or packaging script.
- Rendered Littlebox public image import.
- Machine-readable asset manifest.
- Third-IP schema or arbitrary custom IP import.
- Full English localization pass for public docs.
