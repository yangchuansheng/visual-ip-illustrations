# Phase 5: Documentation, Examples, and Release Packaging - Context

**Gathered:** 2026-06-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 5 delivers the public documentation, copyable examples, agent metadata wording, and lightweight release checklist for the completed two-IP skill package. Users and maintainers should be able to understand that Xiaohei is the default IP, explicitly select Littlebox, compare both IPs on the same idea, run local validation, smoke-test both IP routes, review attribution, and verify the installable package boundary.

</domain>

<decisions>
## Implementation Decisions

### Public README Entry Point
- **D-01:** `README.md` is the primary public entrypoint for two-IP usage. It must clearly state that Xiaohei remains the default route for omitted-IP requests and that Littlebox is an explicit selectable IP.
- **D-02:** `README.md` remains concise and Chinese-first. It should reuse the existing example images as Xiaohei style calibration assets and should not import rendered Littlebox images in Phase 5.
- **D-03:** `README.md` examples must cover Xiaohei planning, Xiaohei generation, Littlebox planning, Littlebox generation, and same-idea IP contrast.

### Copyable Prompt Examples
- **D-04:** `examples/prompts.md` must be expanded into copyable, sectioned prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, mixed-IP variants, validation/smoke use, and editing flows.
- **D-05:** `examples/prompts.md` must preserve route/path markers required by `scripts/validate-skill-package.mjs`, including raw and escaped output-path tokens for Xiaohei and Littlebox, route smoke headings, canonical pack paths, and mixed-IP variant group wording.

### Agent Metadata
- **D-06:** `ian-xiaohei-illustrations/agents/openai.yaml` must update `interface.display_name`, `interface.short_description`, and `interface.default_prompt` to describe selectable IP support while preserving Xiaohei as the default behavior and keeping `policy.allow_implicit_invocation: true`.

### Release Checklist
- **D-07:** Add a lightweight release checklist document, preferably `RELEASE_CHECKLIST.md`, for maintainers. It must include the validation command, Node test command, both-IP smoke prompts, attribution/NOTICE review, installable package boundary review, and the Phase 5 boundary that rendered Littlebox assets are not imported unless future scope explicitly changes.

### Validation Ownership
- **D-08:** Phase 5 must run `node scripts/validate-skill-package.mjs` after docs and metadata changes. Update the validator only when public docs intentionally change required markers, and preserve Phase 4's lightweight dependency-free validator boundary.

### Scope Boundary
- **D-09:** Keep Phase 5 lightweight: no CI workflow, no package archive, no rendered image generation, no asset manifest, and no third-IP schema.

### the agent's Discretion
- The agent may choose the exact README section order and heading names as long as D-01 through D-03 are satisfied and the document stays concise.
- The agent may decide whether `RELEASE_CHECKLIST.md` is linked from README or referenced from maintainer sections, provided maintainers can discover it from public docs.
- The agent may make small validator marker updates when docs wording changes intentionally, provided `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` both pass afterward.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope
- `.planning/PROJECT.md` — Project purpose, constraints, core value, and documentation-language boundary.
- `.planning/REQUIREMENTS.md` — Phase 5 requirement IDs: DOCS-01, DOCS-02, DOCS-03, DOCS-05, DOCS-06.
- `.planning/ROADMAP.md` — Phase 5 goal, dependency on Phase 4, and success criteria.
- `.planning/STATE.md` — Current state, Phase 4 completion, and Phase 5 focus.
- `.planning/phases/04-validation-hardening/04-VERIFICATION.md` — Verified Phase 4 validator contract and deferred Phase 5 docs/metadata/release items.
- `.planning/phases/04-validation-hardening/04-UAT.md` — UAT confirmation for validator command, smoke prompt coverage, and maintainer discoverability.

### Prior Phase Decisions
- `.planning/phases/01-routing-foundation/01-CONTEXT.md` — Xiaohei default, route metadata shape, mixed-IP routing intent, and public routing docs.
- `.planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md` — Xiaohei canonical pack, legacy path compatibility, existing prompt validity, and output path preservation.
- `.planning/phases/03-littlebox-vertical-slice/03-CONTEXT.md` — Littlebox route, canonical pack, identity rules, mixed-IP behavior, attribution, and Phase 5 documentation boundary.
- `.planning/phases/04-validation-hardening/04-CONTEXT.md` — Validator scope, Phase 5 ownership of broad docs, metadata wording, and release checklist.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Markdown style, naming, docs language, and repository-relative path conventions.
- `.planning/codebase/STRUCTURE.md` — Public docs, examples, installable package boundary, and where maintainer docs belong.
- `.planning/codebase/ARCHITECTURE.md` — Documentation layer, skill package layer, agent metadata layer, and release-relevant integration points.
- `.planning/codebase/STACK.md` — No-build-runtime package constraints and host-provided image-generation boundary.
- `.planning/codebase/TESTING.md` — Validation/smoke testing conventions and manual QA context.

### Public Docs and Metadata
- `README.md` — Current public entrypoint, install instructions, route docs, usage examples, validation command pointer, and example image links.
- `examples/prompts.md` — Existing smoke prompts and copyable usage examples that Phase 5 expands.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent display metadata and implicit invocation policy to update.
- `NOTICE.md` — Ian and Littlebox attribution markers to preserve.
- `LICENSE` — MIT license context.

### Skill Package Contracts
- `ian-xiaohei-illustrations/SKILL.md` — Selected-route workflow, output paths, generation boundary, and delivery contract that public docs must match.
- `ian-xiaohei-illustrations/references/routing.md` — Route ids, aliases, defaults, output suffixes, canonical references, attribution context, and active statuses.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Xiaohei canonical pack navigation and output path.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Littlebox canonical pack navigation, attribution, and output path.
- `scripts/validate-skill-package.mjs` — Phase 4 validator markers that Phase 5 docs must preserve or intentionally update.
- `scripts/validate-skill-package.test.mjs` — Node test coverage for validator output, stable check matrix, and parser helpers.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `README.md`: Already contains install commands, example images, route documentation, and the validator command pointer.
- `examples/prompts.md`: Already contains required smoke prompt headings and route/path markers for default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variants.
- `scripts/validate-skill-package.mjs`: Provides a deterministic 34-check contract for docs links, output path tokens, route docs, smoke prompts, attribution, metadata shape, and no rendered Littlebox asset import.
- `scripts/validate-skill-package.test.mjs`: Provides the Node built-in test command that release checklist should require.
- `NOTICE.md`: Already includes Littlebox author, repository URL, MIT context, inspected commit, short commit, and copyright.
- Existing example images under `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: Useful as Xiaohei calibration assets in README without adding rendered Littlebox assets.

### Established Patterns
- Repository docs are Chinese-first for users, while planning artifacts, scripts, code comments, commit messages, and PR copy stay English.
- Markdown uses compact ATX headings, short paragraphs, fenced `bash` and `text` examples, and repository-relative links.
- The installable skill package remains `ian-xiaohei-illustrations/`; root docs and examples support public GitHub distribution.
- Route-sensitive docs must include both raw and HTML-escaped output path tokens because the validator checks both forms.
- Phase 4 intentionally left broad README/examples, metadata wording, and release checklist work to Phase 5.

### Integration Points
- Update `README.md` for public two-IP explanation, examples, and release checklist discoverability.
- Update `examples/prompts.md` for richer copyable prompt sections while preserving smoke markers.
- Update `ian-xiaohei-illustrations/agents/openai.yaml` metadata copy and keep implicit invocation enabled.
- Add `RELEASE_CHECKLIST.md` at the repository root unless planning finds a stronger lightweight-docs location.
- Run `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` after docs and metadata edits.

</code_context>

<specifics>
## Specific Ideas

- The README should introduce multi-IP support near the current product explanation and route section so new users see Xiaohei default and Littlebox selection early.
- README examples should stay concise enough for scanning and should point to `examples/prompts.md` for the full copyable set.
- The same-idea IP contrast prompt should help users see how one cognitive action becomes a Xiaohei white-background variant and a Littlebox closed-box variant.
- Release checklist should be a practical maintainer gate: validation, tests, smoke prompts, attribution, package boundary, and asset-import boundary.
- The discussion was run in auto mode. All relevant gray areas were selected and recommended defaults were captured in D-01 through D-09.
- Runtime subagent discovery found no exposed `spawn_agent`/`wait` tools in this Codex session, so the equivalent context capture was completed inline and this constraint is recorded for auditability.

</specifics>

<deferred>
## Deferred Ideas

- CI workflow for validator and tests.
- Release archive or packaging script.
- Rendered Littlebox public image import.
- Machine-readable asset manifest.
- Third-IP schema or arbitrary custom IP import.
- Full English localization pass for public docs.

</deferred>

---

*Phase: 5-Documentation, Examples, and Release Packaging*
*Context gathered: 2026-06-12*
