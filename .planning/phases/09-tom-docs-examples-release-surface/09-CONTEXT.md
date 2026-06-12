# Phase 9: Tom Docs, Examples, and Release Surface - Context

**Gathered:** 2026-06-13T00:00:00+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 9 updates public documentation and maintainer release surfaces so users and maintainers can request, inspect, and release Tom behavior through docs that match the route-status contract.

The implementation scope is `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and `RELEASE_CHECKLIST.md`. These surfaces should reflect the already-verified Phase 8 controller behavior in `ian-xiaohei-illustrations/SKILL.md`: Tom is explicitly selectable, Xiaohei remains the only omitted-IP default, mixed requests create separate route groups, and Tom outputs use `assets/<article-slug>-tom/` with `gated-authorized` rights context.

Scope fence: Phase 9 should not change Tom controller behavior, Tom canonical pack content, route metadata, validator scripts, validator tests, NOTICE wording, or public rendered Tom assets. Phase 10 owns validation hardening. Public rendered Tom sample approval remains a release-review gate.

The GSD init helper returned `.planning/phases/09-docs-examples-and-release-surface`, while this discussion was explicitly requested at `.planning/phases/09-tom-docs-examples-release-surface/`. This context uses the requested directory and preserves the roadmap phase name.

</domain>

<decisions>
## Implementation Decisions

### Public Tom Route Positioning
- **D-01:** Public docs should describe Tom as an explicit-only protected-character route with current route status `gated-authorized`.
- **D-02:** Public docs should preserve Xiaohei as the omitted-IP default. A user who omits visual IP gets Xiaohei; Tom and Littlebox require explicit route selection.
- **D-03:** Tom docs may include copyable request prompts, route-status text, aliases, output suffix/path, rights record links, and release-review gates.
- **D-04:** Public docs must avoid broad Tom availability claims while Tom remains `gated-authorized`.
- **D-05:** Public docs must avoid claims that rendered Tom samples are publicly approved while the public-sample gate remains pending.

### README Surface
- **D-06:** `README.md` should explain Tom as a protected-character route with status `gated-authorized`, aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`, output path `assets/<article-slug>-tom/`, escaped marker `assets/&lt;article-slug&gt;-tom/`, and rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- **D-07:** README wording should keep the active/default route hierarchy clear: Xiaohei is the implicit default, Littlebox is an explicit active route, and Tom is an explicit gated protected-character route.
- **D-08:** README route and workflow sections should align with `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/routing.md`, including separate route groups for mixed-IP requests.

### Prompt Examples
- **D-09:** `examples/prompts.md` should include copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
- **D-10:** Tom-only prompts should be separated from mixed-IP route prompts so users can inspect a solo Tom request without route-group noise.
- **D-11:** Mixed-IP prompts should require separate outputs for Xiaohei, Littlebox, and Tom, with route-local references and output paths for each group.
- **D-12:** Tom prompts should include route status `gated-authorized`, rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and output path `assets/<article-slug>-tom/`.
- **D-13:** Prompt examples should remain copyable usage examples and smoke fixtures. They should not imply public rendered Tom samples are approved.

### Agent Metadata
- **D-14:** `ian-xiaohei-illustrations/agents/openai.yaml` should name Xiaohei, Littlebox, and Tom in display copy.
- **D-15:** Agent metadata should preserve Xiaohei as the implicit default in `short_description` and `default_prompt`.
- **D-16:** Tom metadata wording should mark Tom as explicit and gated/protected while keeping `policy.allow_implicit_invocation: true` for the overall skill.

### Release Checklist
- **D-17:** `RELEASE_CHECKLIST.md` should become the final maintainer gate for Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review.
- **D-18:** Checklist wording should require review of `ian-xiaohei-illustrations/references/ips/tom/rights.md` before changing route status or public sample policy.
- **D-19:** Checklist wording should require the maintainer to confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- **D-20:** Checklist wording should require public docs and prompts to avoid leakage into broad availability, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, and public sample claims without approval.
- **D-21:** Validator commands belong in the release checklist as maintainer commands for this phase. Expanding validator behavior and tests remains Phase 10 scope.

### the agent's Discretion
- The user explicitly requested `$gsd-discuss-phase 9 --auto`, so all gray areas were auto-selected and resolved with the conservative protected-route defaults already established by Phases 6-8.
- Multi-agent tooling was unavailable in this runtime, so the subagent implementation completed the required discussion artifacts inline after reading the project files, Phase 8 verification/UAT artifacts, public docs in scope, controller, route table, and Tom rights files.
- The planner may choose exact Chinese public-doc prose and section placement, provided the locked route status, aliases, output paths, rights boundary, default behavior, mixed-route separation, and release-gate requirements stay explicit.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Definition and Requirements
- `.planning/ROADMAP.md` - Phase 9 goal and success criteria for Tom-aware README guidance, copyable prompts, metadata, release checks, and gated public wording.
- `.planning/REQUIREMENTS.md` - TDOC-01 through TDOC-05 plus v1.1 out-of-scope boundaries for Tom default behavior, public rendered examples, broader cast support, and validation scope.
- `.planning/PROJECT.md` - v1.1 Authorized Tom IP Integration milestone, protected-character constraint, compatibility, IP isolation, no-build-runtime boundary, and documentation language policy.
- `.planning/STATE.md` - current Phase 8 completion state and carried-forward Tom route/default/rights decisions.

### Prior Phase Contracts
- `.planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md` - locked Tom rights record, route status, aliases, output suffix/path, public-sample gate, and public route-status wording decisions.
- `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md` - locked Tom pack location, planning fields, prompt behavior, QA failures, edit repairs, and Phase 9 scope handoff.
- `.planning/phases/08-skill-controller-integration/08-CONTEXT.md` - locked controller decisions for explicit Tom aliases, Xiaohei-only omitted-IP default, mixed route groups, Tom reference loading, output path, and delivery.
- `.planning/phases/08-skill-controller-integration/08-VERIFICATION.md` - verified Phase 8 evidence for Tom explicit aliases, Xiaohei omitted-IP default, separate route groups, Tom output paths, controller references, validator pass, and residual release risks.
- `.planning/phases/08-skill-controller-integration/08-UAT.md` - manual UAT evidence for Tom route selection, route-local references, mixed route groups, output paths, status notes, and rights pointer.
- `.planning/phases/08-skill-controller-integration/08-01-SUMMARY.md` - implementation summary and handoff noting Phase 9 readiness for public docs, examples, metadata, and release surfaces.

### Public Docs and Release Surfaces
- `README.md` - Phase 9 target for public Tom route explanation, aliases, output path, rights boundary, route hierarchy, and route-status wording.
- `examples/prompts.md` - Phase 9 target for copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml` - Phase 9 target for agent display metadata naming Xiaohei, Littlebox, and Tom while preserving Xiaohei implicit default.
- `RELEASE_CHECKLIST.md` - Phase 9 target for maintainer release gates covering Tom authorization, route status, prompt leakage, public assets, generated samples, validator commands, and final rights review.

### Controller, Routing, and Tom Rights Sources
- `ian-xiaohei-illustrations/SKILL.md` - verified controller behavior that public docs must describe: explicit Tom selection, Xiaohei default, mixed route groups, Tom references, Tom QA/edit routing, Tom output path, and delivery rights note.
- `ian-xiaohei-illustrations/references/routing.md` - route metadata source for Tom aliases, `default=false`, `output_suffix=tom`, required references, attribution context, route status `gated-authorized`, and mixed route groups.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Tom pack navigation, route status, rights authority, output path, protected-route failure categories, and public-doc scope boundary.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Tom source, rights-holder context, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, and public-sample gate.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Tom planning fields, generation prompt, edit gates, rights-status note, and output-path reminder that prompt examples should mirror.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - protected-route QA failures and leakage markers that release checklist prompt scans should reference.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` - Markdown style, fenced prompt examples, repository-relative path style, and docs/reference conventions.
- `.planning/codebase/STRUCTURE.md` - placement guide for public docs, prompt examples, agent metadata, installable package files, and generated asset directories.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `README.md`: already contains Phase 6-level Tom status, aliases, rights record, and output path text. Phase 9 should refine it into complete TDOC-01 guidance aligned with verified Phase 8 runtime behavior.
- `examples/prompts.md`: already contains Xiaohei/Littlebox prompt examples and a maintainer Tom route-status smoke prompt. Phase 9 should add full Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml`: currently names Xiaohei and Littlebox only. Phase 9 should add Tom while preserving Xiaohei as the default route.
- `RELEASE_CHECKLIST.md`: already contains validator commands, smoke prompts, attribution review, Tom rights/public sample gate, and public docs/path marker checks. Phase 9 should expand it into the final Tom release gate surface.
- `ian-xiaohei-illustrations/SKILL.md`: already implements explicit Tom route selection, route-local Tom planning/generation/QA/edit behavior, mixed route groups, and Tom delivery context.

### Established Patterns
- Public docs are Chinese-first Markdown with short sections and copyable fenced `text` prompt blocks.
- Route-specific output directories are documented in raw and escaped forms.
- `examples/prompts.md` doubles as user guidance and smoke prompt inventory.
- Agent metadata stays concise YAML under `interface` and keeps behavior rules in `SKILL.md`.
- Release checklist entries are checkbox-driven maintainer gates with command blocks for validation.

### Integration Points
- Update README route, quick examples, workflow, and directory map sections to include Tom as an explicit gated protected-character route.
- Add Tom-only and mixed three-IP prompt examples to `examples/prompts.md`, preserving existing Xiaohei and Littlebox smoke coverage.
- Update `openai.yaml` display strings to mention Tom without changing the implicit invocation policy.
- Expand `RELEASE_CHECKLIST.md` Tom sections and smoke prompts using the route status and rights wording from `routing.md` and `rights.md`.

</code_context>

<specifics>
## Specific Ideas

- Use the exact route status token `gated-authorized` in public docs, prompt examples, metadata where appropriate, and release checklist gates.
- Use the exact alias set: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.
- Use the exact raw and escaped Tom path markers: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- Keep Tom-only prompts separate from mixed-IP route prompts.
- Mixed-IP prompts should require separate route groups and separate output directories: Xiaohei `assets/<article-slug>-illustrations/`, Littlebox `assets/<article-slug>-littlebox/`, and Tom `assets/<article-slug>-tom/`.
- Release checklist should be the maintainer's final gate for authorization, route status, leakage scan, public sample policy, generated sample policy, validator commands, and final rights review.

</specifics>

<deferred>
## Deferred Ideas

- Phase 10 owns validator hardening, Node tests, docs marker checks, Tom leakage checks, public-sample gate enforcement, and raw/escaped output path checks.
- Public rendered Tom examples remain gated by explicit release checklist approval.
- Changing Tom from `gated-authorized` to another route status requires maintainer rights review and release checklist approval.
- Broader Tom and Jerry cast support, Jerry usage, show logos, title cards, source-frame recreation, and franchise scenes require separate authorization scope and future requirements.

</deferred>

---

*Phase: 9-Tom Docs, Examples, and Release Surface*
*Context gathered: 2026-06-13T00:00:00+08:00*
