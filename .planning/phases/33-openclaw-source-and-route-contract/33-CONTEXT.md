# Phase 33: OpenClaw Source and Route Contract - Context

**Gathered:** 2026-06-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 33 delivers the OpenClaw source and route contract for v1.7. The phase locks only the route selection metadata, source-record authority, output path contract, uploaded-logo markers, public-sample policy, review ownership, route status, and existing-route compatibility boundary.

In scope:

- Add OpenClaw to `ian-xiaohei-illustrations/references/routing.md` as an explicit selectable visual IP route.
- Create the OpenClaw source record at `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- Lock the OpenClaw route id, display name, aliases, `default=false`, output suffix, output path, source/license authority, uploaded-logo authority, and route status.
- Keep Xiaohei as the omitted-IP default while Littlebox, Tom, Ferris, Seal, and OpenClaw remain explicit isolated routes.

Later phases own the full OpenClaw pack, skill controller dispatch, public docs, metadata, validation, tests, and release evidence.

</domain>

<decisions>
## Implementation Decisions

### Route Contract

- **D-01:** OpenClaw route id is `openclaw`.
- **D-02:** OpenClaw display name is `OpenClaw`.
- **D-03:** OpenClaw route metadata uses `default=false`.
- **D-04:** OpenClaw route status is `source-reviewed`.
- **D-05:** OpenClaw output suffix is `openclaw`.
- **D-06:** OpenClaw output path is `assets/<article-slug>-openclaw/`.
- **D-07:** Documentation and validation surfaces should preserve the escaped marker `assets/&lt;article-slug&gt;-openclaw/` when escaped path markers are relevant.
- **D-08:** The route table should follow the existing `routing.md` shape: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-09:** Phase 33 should keep OpenClaw `required_references` limited to source/route contract references that exist in this phase. Phase 34 can expand the row after the full OpenClaw pack exists.

### Alias Boundary

- **D-10:** OpenClaw aliases are exactly: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, `OpenClaw 助手`, and `OpenClaw 吉祥物`.
- **D-11:** Generic aliases are excluded. Examples include `assistant`, `red mascot`, `crab`, and `logo`.
- **D-12:** Alias matching should select OpenClaw only when the user names OpenClaw or an OpenClaw-qualified route phrase.

### Source Record Contract

- **D-13:** The source record path is `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- **D-14:** The source record must record the official OpenClaw repository, MIT license, OpenClaw Foundation copyright, uploaded-logo authority, public sample policy, review owner, and route status.
- **D-15:** The official repository context is `https://github.com/openclaw/openclaw`.
- **D-16:** Source wording should treat OpenClaw as a source-reviewed logo-mascot route for article illustrations.
- **D-17:** Public generated OpenClaw samples stay gated by release review until an approval record exists.

### Uploaded Logo Authority

- **D-18:** The uploaded OpenClaw logo is the visual authority for the route.
- **D-19:** The fixed uploaded visual markers are red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- **D-20:** Phase 33 records those markers as source and route authority. Phase 34 turns them into detailed identity, style, prompt, edit, and QA behavior.

### Existing Route Compatibility

- **D-21:** Xiaohei remains the omitted-IP default.
- **D-22:** Littlebox, Tom, Ferris, Seal, and OpenClaw remain explicit routes with isolated references.
- **D-23:** OpenClaw source/route work must stay under `ian-xiaohei-illustrations/references/ips/openclaw/` and must preserve the route-local isolation pattern used by Tom, Ferris, Seal, Littlebox, and Xiaohei.
- **D-24:** Phase 33 should avoid changing route behavior for Xiaohei, Littlebox, Tom, Ferris, and Seal.

### Agent Discretion

- The implementation planner may choose exact Markdown section ordering inside `source.md`, provided D-13 through D-19 remain explicit and grep-friendly.
- The implementation planner may choose the exact OpenClaw route row position, with preference for appending after Seal to preserve existing route order.
- The implementation planner may add a minimal `references/ips/openclaw/index.md` only if it helps route navigation without pulling Phase 34 pack content into Phase 33.

</decisions>

<canonical_refs>
## Canonical References

Downstream agents MUST read these before planning or implementing.

### Planning Scope

- `.planning/PROJECT.md` - v1.7 milestone goal, OpenClaw constraints, uploaded-logo authority, and source-reviewed route intent.
- `.planning/REQUIREMENTS.md` - Phase 33 requirement IDs `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`.
- `.planning/ROADMAP.md` - Phase 33 goal, success criteria, dependencies, and phase boundaries for Phases 34-37.
- `.planning/STATE.md` - current v1.7 state, accumulated default-route decisions, route-isolation history, and OpenClaw milestone notes.

### Codebase Maps

- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture, progressive reference loading, and route-local reference policy.
- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, repository-relative paths, English-default content, and route reference style.
- `.planning/codebase/STRUCTURE.md` - package layout, route-local reference placement, public docs placement, and generated asset path rules.

### Existing Route Contracts

- `ian-xiaohei-illustrations/references/routing.md` - live route table, selection rules, output path markers, mixed-IP route grouping, attribution context, and delivery fields.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` - source-reviewed mascot route index precedent.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - source-reviewed route source record precedent with source/license and public-sample boundaries.
- `ian-xiaohei-illustrations/references/ips/seal/index.md` - uploaded-image route index precedent with fixed visual markers and output path wording.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` - uploaded visual authority, drift boundary, sample policy, review owner, and route status precedent.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - route contract and rights-authority index precedent.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - sample policy, distribution boundary, review owner, and route status precedent for gated routes.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - explicit active route pack navigation and source attribution precedent.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` - omitted-IP default route pack navigation and legacy output path precedent.

### Planned Phase 33 Artifacts

- `ian-xiaohei-illustrations/references/ips/openclaw/source.md` - planned source/license/uploaded-logo authority record.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/routing.md` already centralizes route metadata, aliases, default flags, output suffixes, required references, attribution context, route statuses, mixed-IP grouping, output paths, and delivery fields.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` is the strongest precedent for an open-source, source-reviewed mascot route.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` is the strongest precedent for uploaded visual authority, fixed marker lists, drift boundaries, sample policy, and review owner fields.
- Existing `index.md` files under `ferris`, `seal`, `tom`, `littlebox`, and `xiaohei` show how route-local packs expose route status, output paths, reference navigation, and phase boundaries.

### Established Patterns

- Xiaohei is the only omitted-IP default.
- Additional IPs are explicit routes with `default=false`, route-specific aliases, route-local references, route-specific output suffixes, route-specific output directories, and route status.
- Source, rights, or uploaded-image authority is recorded route-locally before broad docs, controller integration, validation, and public generated samples expand the route.
- Public generated samples for protected, source-reviewed, or uploaded-image routes require release review.
- Route-specific style, identity, composition, prompt, edit, and QA rules stay isolated under `ian-xiaohei-illustrations/references/ips/<route>/`.

### Integration Points

- Phase 33 connects to `ian-xiaohei-illustrations/references/routing.md` and `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- Phase 34 expands OpenClaw into the full route-local pack.
- Phase 35 wires OpenClaw into `ian-xiaohei-illustrations/SKILL.md` runtime route selection and mixed-IP dispatch.
- Phase 36 updates README, examples, NOTICE, release checklist, broad skill docs, and `agents/openai.yaml`.
- Phase 37 extends the validator, Node regression tests, leakage checks, public sample gates, and release evidence.

</code_context>

<specifics>
## Specific Ideas

- OpenClaw route metadata should use `source-reviewed` to match the official repository and MIT license context.
- The source record should include the OpenClaw Foundation copyright line as a required marker.
- The uploaded-logo marker list should appear together anywhere the route/source authority is summarized: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- OpenClaw route wording should frame the mascot as an article-illustration subject, with product promotion handled as out of scope.
- Mixed-IP requests should treat OpenClaw as its own route group with its own references and output directory.

</specifics>

<deferred>
## Deferred Ideas

- Phase 34: OpenClaw style DNA, identity rules, composition patterns, prompt template, edit prompts, QA checklist, sample-policy wording, and full route-local pack navigation.
- Phase 35: OpenClaw skill controller integration, selected-IP reference loading, mixed-IP grouping, generation/edit routing, QA dispatch, and delivery reporting.
- Phase 36: README, examples, NOTICE, RELEASE_CHECKLIST, broad `SKILL.md` docs, and `agents/openai.yaml` OpenClaw discovery wording.
- Phase 37: validator coverage, Node tests, leakage scans, public sample gates, route smoke, source/license smoke, docs consistency, and release evidence.
- Future requirements: machine-readable route manifests, uploaded source-image hashing, visual regression, public comparison sheets, release packaging, and selected-IP installation variants.

</deferred>

---

*Phase: 33-OpenClaw Source and Route Contract*
*Context gathered: 2026-06-16*
