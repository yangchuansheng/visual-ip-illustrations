# Phase 41: Go Gopher Public Documentation and Release Surface - Context

**Gathered:** 2026-06-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 41 updates public and runtime-facing documentation so users and maintainers can learn, invoke, review, and release Go Gopher with source/license and public-sample clarity.

In scope:

- Add Go Gopher to public route discovery, route selection, output path, workflow, route reference, maintainer validation, and mixed-IP documentation.
- Add copyable Go Gopher planning, generation, editing, route smoke, and mixed-IP prompt examples.
- Add Go Gopher source/license attribution and public sample policy to `NOTICE.md`.
- Add Go Gopher release gates to `RELEASE_CHECKLIST.md`.
- Add Go Gopher discovery copy to `ian-xiaohei-illustrations/agents/openai.yaml`.
- Preserve existing Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw public docs, route boundaries, output paths, release gates, and compatibility wording.

Out of scope:

- Validator hardening, Node test updates, release evidence, route leakage fixture updates, and public sample gate automation. Phase 42 owns those.
- Changing Go Gopher route-local pack behavior or `SKILL.md` controller behavior.
- Adding public rendered Go Gopher gallery images or generated sample assets.
- Moving, replacing, or tracking root `gopher.png`.
- Changing Xiaohei default behavior or other route behavior.

The canonical GSD roadmap title is `Public Documentation and Release Surface`. This context uses the user-requested artifact directory `.planning/phases/41-go-gopher-public-documentation-and-release-surface/` to keep the Go Gopher milestone dependency explicit for downstream planning.

</domain>

<decisions>
## Implementation Decisions

### Public README Surface

- **D-01:** README route inventory should add Go Gopher as an explicit `source-reviewed` route while preserving Xiaohei as the implicit default and Littlebox, Tom, Ferris, Seal, and OpenClaw as existing explicit routes.
- **D-02:** README output sections should include raw path `assets/<article-slug>-gopher/` and escaped docs marker `assets/&lt;article-slug&gt;-gopher/`.
- **D-03:** README route description should frame Go Gopher as a source-reviewed article-illustration mascot route based on root `gopher.png`, with Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, Go logo boundary, and official endorsement boundary.
- **D-04:** README canonical pack list should include `ian-xiaohei-illustrations/references/ips/gopher/` and source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
- **D-05:** README mixed-IP and workflow language should include Go Gopher as a separate route group with independent references, QA, output suffix, and output path.
- **D-06:** README example gallery should avoid adding public rendered Go Gopher samples in Phase 41. Existing gallery wording can state that Go Gopher public rendered samples remain gated by `RELEASE_CHECKLIST.md`.
- **D-07:** README variant parity matters. The repo currently has 13 root `README*.md` variants, and prior OpenClaw validation expects route documentation to cover localized README variants. Phase 41 should update all root README variants or explicitly preserve a validator-aware parity strategy for Phase 42.

### Prompt Examples

- **D-08:** `examples/prompts.md` should add Go Gopher canonical planning and generation examples under normal-flow prompts.
- **D-09:** Go Gopher prompt examples should include route-local reference directory `ian-xiaohei-illustrations/references/ips/gopher/`, source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`, route status `source-reviewed`, root `gopher.png` identity note, and output path `assets/<article-slug>-gopher/`.
- **D-10:** Go Gopher examples should expose route-specific planning fields from Phase 39: Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, and Source/license note.
- **D-11:** Go Gopher examples should include planning, direct generation, edit existing image, route smoke check, mixed-IP planning, mixed-IP generation, and maintainer smoke coverage.
- **D-12:** Mixed-IP examples should expand from six groups to seven groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- **D-13:** Prompt examples should keep visible labels copied in the user's requested language while file prose remains English-default.

### NOTICE and Attribution

- **D-14:** `NOTICE.md` should add a Go Gopher source attribution section.
- **D-15:** The Go Gopher NOTICE section should include route id `gopher`, display name `Go Gopher`, route status `source-reviewed`, official Go blog source `https://go.dev/blog/gopher`, Renee French attribution, Creative Commons Attribution 4.0 boundary, source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`, and root `gopher.png` local visual authority.
- **D-16:** NOTICE wording should preserve the public sample gate: public rendered Go Gopher samples remain gated until reviewer, date, approval status, allowed directories, release channels, Go blog source outcome, Renee French attribution outcome, Creative Commons Attribution 4.0 outcome, local visual marker outcome, route-isolation outcome, Go logo boundary outcome, official endorsement boundary outcome, article-metaphor quality outcome, and public-sample decision are recorded.
- **D-17:** NOTICE wording should avoid official Go project affiliation, approval, sponsorship, or endorsement claims.

### Release Checklist

- **D-18:** `RELEASE_CHECKLIST.md` should add Go Gopher to automated gate ownership notes, route smoke prompts, attribution review, installable package boundary, public docs/path markers, and final release review.
- **D-19:** A dedicated Go Gopher release gate should cover source/license review, local `gopher.png` identity review, prompt leakage scan, public asset policy, generated sample policy, and final Go Gopher release review.
- **D-20:** Go Gopher route smoke should confirm selected IP `Go Gopher`, aliases, route status `source-reviewed`, source/license authority, route-local directory, full seven-file required references, planning fields, output path, escaped docs token, identity markers, action vocabulary, Go logo boundary, endorsement boundary, and public sample gate.
- **D-21:** Release checklist should state Phase 42 owns validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation for Go Gopher.
- **D-22:** Public asset policy for Go Gopher should remain `PENDING` in Phase 41. No public generated Go Gopher samples should be approved by documentation wording alone.

### Agent Discovery Metadata

- **D-23:** `ian-xiaohei-illustrations/agents/openai.yaml` should mention Go Gopher in `display_name`, `short_description`, and `default_prompt`.
- **D-24:** Agent metadata should keep Visual IP Illustrations identity, `$visual-ip-illustrations` canonical invocation, `$ian-xiaohei-illustrations` compatibility alias, Xiaohei omitted-IP default, and existing route descriptions.
- **D-25:** Agent metadata should present Go Gopher as an explicit `source-reviewed` route, not as a default, official Go route, public sample gallery, or generic blue mascot.

### Acceptance Truths

- **D-26:** Phase 41 acceptance should be documentation-observable: grepable Go Gopher route, source/license, output path, escaped marker, public sample gate, and metadata markers across README variants, examples, NOTICE, release checklist, and agent metadata.
- **D-27:** Phase 41 should run targeted `rg` checks and `git diff --check`.
- **D-28:** Current validator and Node suites may keep failing until Phase 42 if failures match the known seventh-route baseline. Phase 41 should record those as deferred validation ownership when run.
- **D-29:** `gopher.png` should remain untracked unless a later phase explicitly changes the source-image storage decision.

### Agent Discretion

- The planner may choose exact section placement by following the existing OpenClaw Phase 36 public documentation pattern.
- The planner may choose compact wording for localized README variants, provided Go Gopher route status, source/license authority, output path, escaped marker, and public sample gate remain visible enough for Phase 42 validation.
- The planner may update maintainer validation wording to mention Go Gopher while preserving the known Phase 42 ownership boundary for validator and Node hardening.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - v1.8 milestone goal, Go Gopher constraints, local `gopher.png` authority, public docs ownership, and English-default policy.
- `.planning/REQUIREMENTS.md` - Phase 41 requirements `DOC-01`, `DOC-02`, `DOC-03`, `DOC-04`, and `DOC-05`.
- `.planning/ROADMAP.md` - Phase 41 goal, dependency on Phase 40, success criteria, and Phase 42 validation boundary.
- `.planning/STATE.md` - current v1.8 state, Phase 38-40 completion notes, route isolation decisions, README variant parity precedent, and `gopher.png` untracked decision.

### Phase 38-40 Locked Inputs

- `.planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md` - locked route id, aliases, source-reviewed status, output path, local visual authority, source/license facts, and default-route decisions.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md` - implementation evidence for `routing.md` and Go Gopher `source.md`.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-VERIFICATION.md` - route/source verification truths and Phase 42 deferred validator ownership.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-UAT.md` - route/source UAT evidence.
- `.planning/phases/39-go-gopher-canonical-pack/39-CONTEXT.md` - locked pack shape, identity, style, composition, prompt, edit, QA, source/license, and output decisions.
- `.planning/phases/39-go-gopher-canonical-pack/39-01-SUMMARY.md` - final Go Gopher pack evidence and created files.
- `.planning/phases/39-go-gopher-canonical-pack/39-VERIFICATION.md` - verification truths for route-local pack behavior.
- `.planning/phases/39-go-gopher-canonical-pack/39-UAT.md` - UAT evidence for planning fields, prompt, edit prompts, QA gates, and output behavior.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-CONTEXT.md` - locked controller, mixed-IP, generation, QA, save, delivery, metadata deferral, and verification decisions.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-01-SUMMARY.md` - final controller integration evidence and Phase 41 readiness.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-VERIFICATION.md` - controller verification truths and Phase 42 deferred validator ownership.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-UAT.md` - controller UAT evidence.

### Public and Runtime Documentation Targets

- `README.md` - English public install, route selection, outputs, workflow, gallery, examples, route reference, maintainer validation, and directory map.
- `README.ar.md` - localized README variant that already carries OpenClaw route markers.
- `README.de.md` - localized README variant that already carries OpenClaw route markers.
- `README.es.md` - localized README variant that already carries OpenClaw route markers.
- `README.fr.md` - localized README variant that already carries OpenClaw route markers.
- `README.ja.md` - localized README variant that already carries OpenClaw route markers.
- `README.ko.md` - localized README variant that already carries OpenClaw route markers.
- `README.pt.md` - localized README variant that already carries OpenClaw route markers.
- `README.ru.md` - localized README variant that already carries OpenClaw route markers.
- `README.tr.md` - localized README variant that already carries OpenClaw route markers.
- `README.uk.md` - localized README variant that already carries OpenClaw route markers.
- `README.zh-Hant.md` - localized README variant that already carries OpenClaw route markers.
- `README.zh.md` - localized README variant that already carries OpenClaw route markers.
- `examples/prompts.md` - copyable planning, generation, editing, route smoke, mixed-IP, and maintainer smoke examples.
- `NOTICE.md` - attribution, source/license, public sample, and release-review notice surface.
- `RELEASE_CHECKLIST.md` - route smoke, attribution review, public sample, generated sample, docs/path marker, final release, and validator evidence gates.
- `ian-xiaohei-illustrations/agents/openai.yaml` - OpenAI/Codex discovery metadata.
- `ian-xiaohei-illustrations/SKILL.md` - already updated runtime controller; read for Go Gopher wording that public docs should mirror.

### Go Gopher Route References

- `ian-xiaohei-illustrations/references/routing.md` - live route selection table, Go Gopher aliases, full seven-file required references, output path markers, mixed-IP groups, source/license metadata, and route status.
- `ian-xiaohei-illustrations/references/ips/gopher/index.md` - Go Gopher pack navigation and operational coherence.
- `ian-xiaohei-illustrations/references/ips/gopher/source.md` - Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, sample policy, review owner, and route status.
- `ian-xiaohei-illustrations/references/ips/gopher/style-dna.md` - sparse Go Gopher article-illustration style and identity preservation.
- `ian-xiaohei-illustrations/references/ips/gopher/gopher-ip.md` - Go Gopher identity, recognition rules, cognitive-action responsibility, and failure modes.
- `ian-xiaohei-illustrations/references/ips/gopher/composition-patterns.md` - composition families, action verbs, supporting objects, Go-themed prop boundary, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/ips/gopher/prompt-template.md` - planning fields, English one-image prompt, edit prompts, source/license note, local visual authority note, and output reminder.
- `ian-xiaohei-illustrations/references/ips/gopher/qa-checklist.md` - route-local QA gates, repair moves, route leakage repair, public sample boundary, and delivery judgment.
- `gopher.png` - root local visual authority; leave untracked.

### Existing Public Documentation Precedent

- `.planning/phases/36-public-documentation-and-release-surface/36-CONTEXT.md` - closest prior public docs and release surface context for OpenClaw.
- `.planning/phases/36-public-documentation-and-release-surface/36-01-SUMMARY.md` - OpenClaw public documentation execution evidence and changed-file pattern.
- `ian-xiaohei-illustrations/references/ips/openclaw/source.md` - source-reviewed route source/license attribution precedent.
- `ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md` - source-reviewed route prompt example precedent.
- `ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md` - public sample gate and delivery judgment precedent.

### Validation Adjacency

- `scripts/validate-skill-package.mjs` - Phase 42 validator target; Phase 41 should avoid surprising future marker shapes.
- `scripts/validate-skill-package.test.mjs` - Phase 42 Node regression target; current OpenClaw README variant checks indicate Go Gopher docs should consider every root README variant.
- `.planning/codebase/CONVENTIONS.md` - Markdown style, repository-relative paths, English-default content, and reference file conventions.
- `.planning/codebase/STRUCTURE.md` - package layout, public docs placement, route-local reference placement, and generated asset path conventions.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `README.md` already has route inventory, Outputs, Visual IP Routes, Route Reference, Operational route facts, Example Gallery, Quick Examples, Workflow, Directory Structure, and Maintainer Validation sections that can be extended for Go Gopher.
- All 13 `README*.md` variants already include OpenClaw markers; Phase 41 should follow that parity precedent for Go Gopher.
- `examples/prompts.md` already has canonical route examples, legacy smoke examples, edit examples, mixed-IP groups, and maintainer validation smoke prompts for other routes.
- `NOTICE.md` already has source/rights/source-history sections for Littlebox, Tom, Ferris, Seal, and OpenClaw.
- `RELEASE_CHECKLIST.md` already has dedicated route gates for Tom, Ferris, Seal, and OpenClaw, plus shared route smoke, attribution, public docs/path marker, and package boundary sections.
- `ian-xiaohei-illustrations/agents/openai.yaml` currently names Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw and needs Go Gopher appended.

### Established Patterns

- Public docs present Xiaohei as the omitted-IP default and every later route as explicit.
- Source-reviewed routes expose source authority, route status, output path, escaped docs marker, source/license boundary, and public sample gate.
- Prompt examples include both canonical `$visual-ip-illustrations` normal flows and legacy `$ian-xiaohei-illustrations` smoke prompts.
- Mixed-IP examples list every active route as a separate group with its own references, status, notes, and output path.
- Public rendered samples require release-review records for source-reviewed, protected, uploaded-logo, and local visual authority routes.
- Validator hardening deliberately trails docs/controller implementation in the final validation phase.

### Integration Points

- Phase 41 connects Go Gopher public docs to the Phase 40 runtime truth in `SKILL.md` and `routing.md`.
- Phase 41 gives Phase 42 deterministic public docs, examples, metadata, NOTICE, release checklist, and README-variant markers to validate.
- Phase 41 should keep root `gopher.png` untracked while public docs reference it as local visual authority.

</code_context>

<specifics>
## Specific Ideas

- Use OpenClaw Phase 36 as the implementation pattern, substituting Go Gopher source/license and local visual authority fields.
- Mention Go Gopher in first-view README route inventory, Outputs, Visual IP Routes, Route Reference, Operational route facts, Quick Examples, Workflow, Directory Structure, and Maintainer Validation.
- Keep Example Gallery at current public sample set and state Go Gopher samples remain release-gated.
- Add Go Gopher prompt examples after OpenClaw examples or in the same source-reviewed route cluster.
- Go Gopher action vocabulary in public examples should include inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, and route.
- Go Gopher identity markers to preserve in public examples: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Go Gopher boundaries to keep visible: no Go logo identity, no Go-logo-forward composition, no official Go project affiliation, no approval claims, no sponsorship claims, no endorsement wording, no generic blue mascot drift, and no realistic animal drift.

</specifics>

<deferred>
## Deferred Ideas

- Phase 42: extend `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` for Go Gopher README variant parity, prompt examples, NOTICE, release checklist, agent metadata, output path markers, source/license markers, language allowlist, public sample gates, route leakage, and final evidence.
- Phase 42: record validator output, Node test output, `git diff --check`, Go Gopher route smoke, source/license smoke, docs consistency, leakage scan, and public sample gate status.
- Future: route manifests, source-image hashing, local source-image storage policy, public comparison sheets, visual regression, and selected-route install packaging.

</deferred>

---

*Phase: 41-Go Gopher Public Documentation and Release Surface*
*Context gathered: 2026-06-17*
