# Phase 10: Validation Hardening - Context

**Gathered:** 2026-06-13T00:00:00+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 10 hardens the existing local validator and Node test harness so maintainers can verify the three-route protected-IP package deterministically after the v1.1 roadmap reset. The phase covers Tom route metadata, Tom canonical pack markers, public docs and metadata markers, NOTICE and release checklist markers, raw and escaped Tom output path tokens, Tom smoke prompts, protected-IP leakage boundaries, public example asset gates, stable check ordering, actionable failure messages, and full-pass output.

The target implementation surface is `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`. Discussion output for this task is limited to context and audit artifacts plus state recording.

</domain>

<decisions>
## Implementation Decisions

### Validator Harness Strategy
- **D-01:** Harden the existing dependency-free validator in `scripts/validate-skill-package.mjs`.
- **D-02:** Keep the Node built-in `node:test` harness in `scripts/validate-skill-package.test.mjs`.
- **D-03:** Preserve deterministic local execution through `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`.
- **D-04:** Keep the validator local-only: it reads repository files and asset directories, with no network calls and no image-generation dependency.
- **D-05:** Preserve the current full-pass behavior while adding missing TVAL coverage. Current baseline is `Summary: total=40 passed=40 failed=0 skipped=0`.

### Validation Coverage Surfaces
- **D-06:** Treat route-table metadata as a first-class validation surface. Tom checks must cover the Tom route row, aliases, `default=false`, `output_suffix=tom`, required references, route status `gated-authorized`, and attribution context.
- **D-07:** Treat Tom canonical pack markers as a first-class validation surface. Checks must cover pack files, prompt placeholders, QA markers, rights-boundary markers, protected-route markers, and stable output path reminders.
- **D-08:** Treat public docs, metadata, NOTICE, and release gates as first-class validation surfaces. Checks must cover `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, Tom smoke prompts, and raw plus escaped output path tokens.
- **D-09:** Treat route leakage as a first-class validation surface. Xiaohei and Littlebox packs must stay free of Tom identity rules and Warner rights text.
- **D-10:** Treat public rendered Tom asset gating as a first-class validation surface. Public example directories must be scanned for Tom-rendered asset names while the release checklist keeps public-sample approval pending.

### Test Coverage Strategy
- **D-11:** Keep tests focused on validator behavior and failure diagnostics, using temporary repository fixtures where mutation is needed.
- **D-12:** Node tests must cover three-route parser behavior, stable check ordering, actionable Tom failure messages, and full pass output.
- **D-13:** Add targeted fixture mutations for Tom route, Tom pack, docs, release checklist, leakage, and public asset gates so failures prove check IDs and repo-relative paths.
- **D-14:** Keep output stable and actionable for maintainers: deterministic check ordering, stable check IDs, repo-relative paths, missing marker/item wording, and a final summary line.

### Helper Extraction Boundary
- **D-15:** Favor small helper extraction inside `scripts/validate-skill-package.mjs` when it improves parser reuse, marker grouping, route-pack scanning, leakage checks, or fixture testability.
- **D-16:** Keep helper extraction subordinate to validation clarity. The validator remains a lightweight script, not a new framework or package.
- **D-17:** Preserve existing exported parser/helper primitives used by tests, including frontmatter parsing, simple YAML parsing, Markdown table parsing, Markdown link parsing, output path tokens, safe path handling, and filesystem helpers.

### Scope Fence
- **D-18:** Phase 10 may edit only validation implementation, validator tests, and any release/docs marker text needed strictly to satisfy TVAL checks during the execution phase.
- **D-19:** This discussion task edits only `.planning/phases/10-validation-hardening/10-CONTEXT.md`, `.planning/phases/10-validation-hardening/10-DISCUSSION-LOG.md`, and `.planning/STATE.md`.
- **D-20:** Legal authorization approval, Tom route-status changes, public rendered Tom sample publication, broader cast support, and visual likeness judgment remain maintainer or future-phase concerns.

### the agent's Discretion
- Auto mode was explicitly requested, so all gray areas were auto-selected and resolved with the conservative validator-hardening path already implied by Phases 6-9.
- Subagent tooling was requested but was unavailable in this Codex runtime after tool discovery. The analysis was completed inline using the required project, roadmap, prior context, verification/UAT artifacts, old Phase 4 validation artifacts, current validator files, route files, Tom pack, public docs, metadata, NOTICE, and release checklist.
- The planner may choose exact check ID names and grouping, provided the resulting validator output remains deterministic, local-only, and actionable.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Definition and Requirements
- `.planning/ROADMAP.md` - Phase 10 goal, requirements TVAL-01 through TVAL-07, and success criteria for route, pack, docs, leakage, public asset, and Node test coverage.
- `.planning/REQUIREMENTS.md` - TVAL-01 through TVAL-07 and v1.1 out-of-scope boundaries for public rendered Tom samples, Tom default behavior, broader cast support, hosted runtime, and visual likeness automation.
- `.planning/PROJECT.md` - v1.1 milestone, protected-character constraint, IP isolation, no-build-runtime boundary, and local validation expectation.
- `.planning/STATE.md` - current Phase 10 position and carried-forward decisions from Phases 6-9.

### Prior Phase Contracts
- `.planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md` - verified Tom rights record, route row, NOTICE boundary, shared `gated-authorized` status, public-sample gate, and current validator baseline.
- `.planning/phases/06-tom-rights-and-route-contract/06-UAT.md` - maintainer-facing UAT confirmation for Tom rights, status, public sample gate, and local validator/test commands.
- `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md` - locked Tom pack file set, prompt fields, QA categories, edit gates, rights note, and Phase 10 validator handoff.
- `.planning/phases/07-tom-canonical-pack/07-VERIFICATION.md` - verified Tom pack files, prompt fields, QA markers, edit repair gates, and residual note that Phase 10 owns deeper validator coverage.
- `.planning/phases/07-tom-canonical-pack/07-UAT.md` - Tom pack UAT checks for discoverability, planning fields, generation contract, QA failures, and edit repair gates.
- `.planning/phases/08-skill-controller-integration/08-CONTEXT.md` - locked controller decisions for Tom aliases, Xiaohei omitted-IP default, mixed separate route groups, Tom output path, and route leakage.
- `.planning/phases/08-skill-controller-integration/08-VERIFICATION.md` - verified controller behavior, route table parser spot-check, raw/escaped Tom paths, and residual validator hardening risk.
- `.planning/phases/08-skill-controller-integration/08-UAT.md` - UAT checks for explicit Tom alias selection, Xiaohei default, three-IP route groups, Tom references, output path, and rights note.
- `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md` - locked public docs, prompt examples, metadata, release checklist, and Phase 10 validation handoff.
- `.planning/phases/09-tom-docs-examples-release-surface/09-VERIFICATION.md` - verified README, examples, metadata, release checklist, gated wording, validation commands, and Phase 10 ownership for deeper checks.
- `.planning/phases/09-tom-docs-examples-release-surface/09-UAT.md` - UAT checks for README, prompts, metadata, release gates, and verification source.

### Historical Validation Boundary
- `.planning/phases/04-validation-hardening/04-CONTEXT.md` - Phase 4 historical validator boundary preserving Phase 5 ownership markers for `BOUNDARY-P5-001`.
- `.planning/phases/04-validation-hardening/04-RESEARCH.md` - Phase 4 historical validation research boundary preserving deterministic Phase 5 documentation/release fences.

### Validator and Tests
- `scripts/validate-skill-package.mjs` - existing validator implementation, helper functions, route parser, check matrix, output renderer, public asset scan, and exported test primitives.
- `scripts/validate-skill-package.test.mjs` - current Node built-in tests for deterministic output, stable check ordering, failure aggregation, actionable failure messages, Tom failure messages, full 40-check pass output, and parser helper behavior.

### Route and Skill Controller
- `ian-xiaohei-illustrations/SKILL.md` - three-route controller behavior, Tom explicit aliases, Xiaohei omitted-IP default, Tom route-local references, mixed route groups, Tom QA/edit routing, raw and escaped Tom output path markers, delivery rights note.
- `ian-xiaohei-illustrations/references/routing.md` - route metadata source with `xiaohei`, `littlebox`, and `tom` rows; Tom aliases, `default=false`, `output_suffix=tom`, required references, attribution context, status, mixed groups, and output paths.

### Tom Canonical Pack
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Tom pack navigation, route status, rights authority, output path, protected-route failure names, and validator-stable markers.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Tom source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, and public-sample gate.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` - Tom sparse article-illustration style, recognition cues, protected-route vetoes, and route leakage signals.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` - Tom identity, solo route boundary, cognitive-action responsibility, recognition gates, and failure modes.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` - Tom composition families, supporting objects, original metaphor rules, protected-route gates, and anti-recreation rules.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Tom planning fields, one-image prompt, edit gates, prompt placeholders, rights-status note, and output path reminder.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - Tom pass criteria, protected-route checks, QA markers, failure signals, iteration moves, rights-status note, and delivery judgment.

### Public Docs, Metadata, and Release Gates
- `README.md` - public route hierarchy, Tom aliases, status, output path, escaped path token, rights boundary, and public sample policy wording.
- `examples/prompts.md` - copyable route smoke prompts, Tom planning/generation prompts, Tom smoke prompt, mixed three-IP prompts, route-local references, and output path tokens.
- `NOTICE.md` - Ian/Littlebox attribution and Tom source attribution plus permission boundary wording.
- `RELEASE_CHECKLIST.md` - validator commands, Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, final rights review, and pending public-sample approval marker.
- `ian-xiaohei-illustrations/agents/openai.yaml` - agent metadata naming Xiaohei, Littlebox, and explicit gated Tom while preserving skill-level implicit invocation.

### Codebase Maps
- `.planning/codebase/TESTING.md` - testing and QA map, current no-framework background, manual QA model, and route smoke fixture pattern.
- `.planning/codebase/CONVENTIONS.md` - Markdown, fenced prompt, repository-relative path, and reference-file conventions.
- `.planning/codebase/STRUCTURE.md` - package layout, script placement, public examples, skill-local examples, and generated asset directory conventions.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-skill-package.mjs`: already has dependency-free file reading, Markdown table parsing, simple YAML parsing, local link parsing, output path token helpers, safe package/reference path helpers, sorted directory entry scans, check definition, failure aggregation, and deterministic rendering.
- `scripts/validate-skill-package.test.mjs`: already uses `node:test`, `node:assert/strict`, `spawnSync`, and temporary copied fixtures to prove pass output and failure diagnostics.
- `ian-xiaohei-illustrations/references/routing.md`: already exposes a parseable three-route table with Tom metadata and required references.
- `ian-xiaohei-illustrations/references/ips/tom/`: already contains stable marker phrases for Tom pack validation.
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/agents/openai.yaml`: already contain Tom route, status, path, rights, prompt, metadata, and release-gate markers that validator checks can target.

### Established Patterns
- Checks are stored in a single ordered `checks` array and render as `[PASS]`, `[FAIL]`, or `[SKIP]` lines followed by `Summary: total=... passed=... failed=... skipped=...`.
- Failure messages include check ID, repo-relative path, expected relation, and observed missing markers/items.
- Tests validate ordering by matching check IDs in stdout order.
- Tests mutate temporary fixture copies to prove failure messages without changing the real repository.
- Output path coverage currently uses a shared `outputPathTokens()` helper for raw and escaped route tokens.
- Public asset gating currently scans `examples/images` and `ian-xiaohei-illustrations/assets/examples`.

### Integration Points
- Extend `requiredPackageFiles()` or a Tom-specific file list so all Tom canonical pack files are required to exist and be readable.
- Add Tom pack marker checks near existing IP/prompt checks while preserving stable ordering.
- Add docs/metadata/release checks near existing docs, NOTICE, smoke, and release checks.
- Add leakage checks near boundary checks, scanning Xiaohei and Littlebox packs for Tom identity rules and Warner rights text.
- Add public Tom asset approval logic to interpret `RELEASE_CHECKLIST.md` approval markers explicitly while preserving pending-gate behavior.
- Add Node tests by extending `requiredCheckIds`, stable-order expectations, fixture failure tests, parser helper assertions, and full-pass summary expectations.

</code_context>

<specifics>
## Specific Ideas

- Keep `ROUTE-TOM-001`, `ROUTE-DEFAULT-001`, `ROUTE-REFS-001`, `ROUTE-PATHS-001`, `DOC-TOM-001`, `NOTICE-TOM-001`, `RELEASE-TOM-001`, and `BOUNDARY-TOM-IMG-001` as existing anchors, then add narrower Tom pack, docs, leakage, and fixture tests around them.
- Tom pack checks should target the exact planning fields from `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`: `Placement`, `Core idea`, `Structure type`, `Tom state`, `Tom action`, `Supporting objects`, `Visible labels`, `Output path`, and `Rights-status note`.
- Tom QA checks should target failure categories from `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`: generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, route leakage, and off-model Tom identity.
- Rights-boundary checks should target `gated-authorized`, `rights.md`, authorization scope, distribution boundary, public-sample policy, reviewer fields, and permission-boundary language.
- Docs checks should require Tom route smoke prompts and mixed Xiaohei/Littlebox/Tom variant prompts in `examples/prompts.md`.
- Leakage checks should inspect `ian-xiaohei-illustrations/references/ips/xiaohei/`, `ian-xiaohei-illustrations/references/ips/littlebox/`, and legacy Xiaohei root references for Tom identity markers and Warner rights markers.
- Public asset checks should keep the current directories: `examples/images` and `ian-xiaohei-illustrations/assets/examples`.

</specifics>

<deferred>
## Deferred Ideas

- Public rendered Tom sample approval remains a maintainer release decision recorded in `RELEASE_CHECKLIST.md`.
- Changing Tom route status away from `gated-authorized` remains gated by `ian-xiaohei-illustrations/references/ips/tom/rights.md` and release checklist approval.
- Automated visual likeness judgment remains outside v1.1; Phase 10 validates objective repository markers and deterministic local outputs.
- Broader protected-IP manifest support, additional protected IPs, and generated visual regression checks remain v2 requirements.

</deferred>

---

*Phase: 10-Validation Hardening*
*Context gathered: 2026-06-13T00:00:00+08:00*
