# Phase 38: Go Gopher Source and Route Contract - Context

**Gathered:** 2026-06-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 38 delivers the Go Gopher source and route contract for v1.8. The phase locks only the route selection metadata, source-record authority, output path contract, local `gopher.png` visual authority, Go project source context, public-sample policy, review ownership, route status, and existing-route compatibility boundary.

In scope:

- Add Go Gopher to `ian-xiaohei-illustrations/references/routing.md` as an explicit selectable visual IP route.
- Create the Go Gopher source record at `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
- Lock the Go Gopher route id, display name, aliases, `default=false`, output suffix, output path, source/license authority, local `gopher.png` authority, and route status.
- Keep Xiaohei as the omitted-IP default while Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher remain explicit isolated routes.

Later phases own the full Go Gopher pack, skill controller dispatch, public docs, metadata, validation, tests, and release evidence.

</domain>

<decisions>
## Implementation Decisions

### Route Contract

- **D-01:** Go Gopher route id is `gopher`.
- **D-02:** Go Gopher display name is `Go Gopher`.
- **D-03:** Go Gopher route metadata uses `default=false`.
- **D-04:** Go Gopher route status is `source-reviewed`.
- **D-05:** Go Gopher output suffix is `gopher`.
- **D-06:** Go Gopher output path is `assets/<article-slug>-gopher/`.
- **D-07:** Documentation and validation surfaces should preserve the escaped marker `assets/&lt;article-slug&gt;-gopher/` when escaped path markers are relevant.
- **D-08:** The route table should follow the existing `routing.md` shape: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-09:** Phase 38 should keep Go Gopher `required_references` limited to source/route contract references that exist in this phase. Phase 39 can expand the row after the full Go Gopher pack exists.

### Alias Boundary

- **D-10:** Go Gopher aliases include `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, and `Gopher 吉祥物`.
- **D-11:** Generic aliases are excluded. Examples include `go`, `blue mascot`, `animal`, and `logo`.
- **D-12:** Alias matching should select Go Gopher only when the user names Go Gopher, Gopher, golang gopher, or a Go Gopher-qualified route phrase.

### Source Record Contract

- **D-13:** The source record path is `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
- **D-14:** The source record must record Go project page context, Renee French attribution, Creative Commons Attribution 4.0 license boundary, local `gopher.png` authority, public sample policy, review owner, and route status.
- **D-15:** The official Go blog source is `https://go.dev/blog/gopher`.
- **D-16:** Go Gopher was designed by Renee French.
- **D-17:** Go Gopher images are Creative Commons Attribution 4.0 licensed according to the Go blog source context.
- **D-18:** Source wording should treat Go Gopher as a source-reviewed mascot route for article illustrations.
- **D-19:** Public generated Go Gopher samples require release review before publication.

### Local Gopher Visual Authority

- **D-20:** Local `gopher.png` is the visual authority for the route.
- **D-21:** The fixed local visual markers are blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- **D-22:** Phase 38 records those markers as source and route authority. Phase 39 turns them into detailed identity, style, prompt, edit, and QA behavior.

### Identity and Endorsement Boundary

- **D-23:** Go logo identity stays out of the route contract.
- **D-24:** Official Go project affiliation, approval, sponsorship, or endorsement claims stay out of the route contract.
- **D-25:** Go Gopher route wording should frame the mascot as an article-illustration subject and preserve attribution/license context.

### Existing Route Compatibility

- **D-26:** Xiaohei remains the omitted-IP default.
- **D-27:** Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher remain explicit routes with isolated references.
- **D-28:** Go Gopher source/route work must stay under `ian-xiaohei-illustrations/references/ips/gopher/` and must preserve the route-local isolation pattern used by Tom, Ferris, Seal, OpenClaw, Littlebox, and Xiaohei.
- **D-29:** Phase 38 should preserve route behavior for Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw.

### Agent Discretion

- The implementation planner may choose exact Markdown section ordering inside `source.md`, provided D-13 through D-21 remain explicit and grep-friendly.
- The implementation planner may choose the exact Go Gopher route row position, with preference for appending after OpenClaw to preserve existing route order.
- The implementation planner may add a minimal `references/ips/gopher/index.md` only if it helps route navigation without pulling Phase 39 pack content into Phase 38.

</decisions>

<canonical_refs>
## Canonical References

Downstream agents MUST read these before planning or implementing.

### Planning Scope

- `.planning/PROJECT.md` - v1.8 milestone goal, Go Gopher constraints, local `gopher.png` authority, and source-reviewed route intent.
- `.planning/REQUIREMENTS.md` - Phase 38 requirement IDs `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`.
- `.planning/ROADMAP.md` - Phase 38 goal, success criteria, dependencies, and phase boundaries for Phases 39-42.
- `.planning/STATE.md` - current v1.8 state, accumulated default-route decisions, route-isolation history, and Go Gopher milestone notes.

### Codebase Maps

- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture, progressive reference loading, and route-local reference policy.
- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, repository-relative paths, English-default content, and route reference style.
- `.planning/codebase/STRUCTURE.md` - package layout, route-local reference placement, public docs placement, and generated asset path rules.

### Existing Public and Runtime Surfaces

- `README.md` - public install, route selection, workflow, examples, and route description surface.
- `NOTICE.md` - attribution and legal notice surface for source-reviewed routes.
- `RELEASE_CHECKLIST.md` - release review, public sample, generated sample, docs, and evidence gates.
- `examples/prompts.md` - copyable planning, generation, editing, and mixed-IP prompt surface.
- `ian-xiaohei-illustrations/SKILL.md` - runtime skill entrypoint, route selection, progressive reference loading, delivery report, and save-path contract.
- `ian-xiaohei-illustrations/references/routing.md` - live route table, selection rules, output path markers, mixed-IP route grouping, attribution context, and delivery fields.

### Existing Route Contracts

- `ian-xiaohei-illustrations/references/ips/openclaw/source.md` - source-reviewed route source record precedent with source/license, visual authority, sample policy, review owner, and route status.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - source-reviewed mascot route precedent with source attribution, license/trademark boundary, sample policy, review owner, and route status.

### Planned Phase 38 Artifacts

- `ian-xiaohei-illustrations/references/ips/gopher/source.md` - planned Go project source, Renee French attribution, CC BY 4.0 boundary, local `gopher.png` authority, sample policy, review owner, and route status record.
- `gopher.png` - local visual authority for Go Gopher route identity markers.

### Validation Surfaces

- `scripts/validate-skill-package.mjs` - dependency-free validator surface that later phases should extend for Go Gopher route/source markers.
- `scripts/validate-skill-package.test.mjs` - Node regression test surface that later phases should extend for Go Gopher route parsing, source/license markers, public sample gates, and leakage fixtures.

### External Source Context

- `https://go.dev/blog/gopher` - official Go blog source for Go Gopher context, Renee French attribution, and Creative Commons Attribution 4.0 license context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/routing.md` already centralizes route metadata, aliases, default flags, output suffixes, required references, attribution context, route statuses, mixed-IP grouping, output paths, and delivery fields.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` is the strongest precedent for a source-reviewed community mascot route with attribution, source boundary, sample policy, and review ownership.
- `ian-xiaohei-illustrations/references/ips/openclaw/source.md` is the strongest recent precedent for a source-reviewed route with visual authority markers, public sample gate, route-local pack boundary, and downstream-phase handoff.
- `gopher.png` is a 500 x 500 PNG at the repository root and is the local visual authority for the route.

### Established Patterns

- Xiaohei is the only omitted-IP default.
- Additional IPs are explicit routes with `default=false`, route-specific aliases, route-local references, route-specific output suffixes, route-specific output directories, and route status.
- Source, rights, or local visual authority is recorded route-locally before broad docs, controller integration, validation, and public generated samples expand the route.
- Public generated samples for protected, source-reviewed, uploaded-image, or local-reference routes require release review.
- Route-specific style, identity, composition, prompt, edit, and QA rules stay isolated under `ian-xiaohei-illustrations/references/ips/<route>/`.

### Integration Points

- Phase 38 connects to `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/gopher/source.md`, and `gopher.png`.
- Phase 39 expands Go Gopher into the full route-local pack.
- Phase 40 wires Go Gopher into `ian-xiaohei-illustrations/SKILL.md` runtime route selection and mixed-IP dispatch.
- Phase 41 updates README, examples, NOTICE, release checklist, broad skill docs, and `agents/openai.yaml`.
- Phase 42 extends the validator, Node regression tests, leakage checks, public sample gates, and release evidence.

</code_context>

<specifics>
## Specific Ideas

- Go Gopher route metadata should use `source-reviewed` to match the Go project source, Renee French attribution, and Creative Commons Attribution 4.0 context.
- The source record should name `https://go.dev/blog/gopher` as the official Go blog source.
- The local `gopher.png` marker list should appear together anywhere the route/source authority is summarized: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Go logo and official endorsement wording should stay out of Go Gopher route identity and source contract.
- Mixed-IP requests should treat Go Gopher as its own route group with its own references and output directory.

</specifics>

<deferred>
## Deferred Ideas

- Phase 39: Go Gopher style DNA, identity rules, composition patterns, prompt template, edit prompts, QA checklist, sample-policy wording, and full route-local pack navigation.
- Phase 40: Go Gopher skill controller integration, selected-IP reference loading, mixed-IP grouping, generation/edit routing, QA dispatch, and delivery reporting.
- Phase 41: README, examples, NOTICE, RELEASE_CHECKLIST, broad `SKILL.md` docs, and `agents/openai.yaml` Go Gopher discovery wording.
- Phase 42: validator coverage, Node tests, leakage scans, public sample gates, route smoke, source/license smoke, docs consistency, and release evidence.
- Future requirements: machine-readable route manifests, local source-image hashing, visual regression, public comparison sheets, release packaging, and selected-IP installation variants.

</deferred>

---

*Phase: 38-Go Gopher Source and Route Contract*
*Context gathered: 2026-06-17*
