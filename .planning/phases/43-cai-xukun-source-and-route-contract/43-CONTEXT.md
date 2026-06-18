# Phase 43: Cai Xukun Source and Route Contract - Context

**Gathered:** 2026-06-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 43 delivers the Cai Xukun route and source authority contract for v1.9. The phase locks only the route selection metadata, source-record authority, output path contract, uploaded-image authority, public-figure likeness boundary, public sample policy, review ownership, route status, and existing-route compatibility boundary.

In scope:

- Add Cai Xukun to `skills/visual-ip-illustrations/references/routing.md` as an explicit selectable visual IP route.
- Create the Cai Xukun source record at `skills/visual-ip-illustrations/references/ips/caixukun/source.md`.
- Lock the Cai Xukun route id, display name, aliases, `default=false`, output suffix, output path, source authority, uploaded-image authority, public-figure likeness boundary, public sample policy, and route status.
- Preserve Xiaohei as the omitted-IP default while Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun remain explicit isolated routes.

Later phases own the full Cai Xukun route-local pack, skill controller dispatch, public docs, metadata, validation, tests, and release evidence.

</domain>

<decisions>
## Implementation Decisions

### Route Contract

- **D-01:** Cai Xukun route id is `caixukun`.
- **D-02:** Cai Xukun display name is `Cai Xukun`.
- **D-03:** Cai Xukun route metadata uses `default=false`.
- **D-04:** Cai Xukun route status is `gated-public-figure`.
- **D-05:** Cai Xukun output suffix is `caixukun`.
- **D-06:** Cai Xukun output path is `assets/<article-slug>-caixukun/`.
- **D-07:** Documentation and validation surfaces should preserve the escaped marker `assets/&lt;article-slug&gt;-caixukun/` when escaped path markers are relevant.
- **D-08:** The route table should follow the existing `routing.md` shape: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-09:** Phase 43 should keep Cai Xukun `required_references` limited to `references/ips/caixukun/source.md`. Phase 44 can expand the row after the full Cai Xukun pack exists.

### Alias Boundary

- **D-10:** Cai Xukun aliases include `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`.
- **D-11:** Alias matching should stay limited to the explicit aliases in D-10 for Phase 43.
- **D-12:** Broad celebrity, idol, duck, yellow mascot, or fandom words stay outside the Phase 43 alias set.

### Source Record Contract

- **D-13:** The source record path is `skills/visual-ip-illustrations/references/ips/caixukun/source.md`.
- **D-14:** The source record must record the two uploaded reference image paths, uploaded visual authority, public-figure likeness boundary, source-image context, public sample policy, review owner, and route status.
- **D-15:** Uploaded reference path 1 is `/Users/longnv/Downloads/Generated image 1 (9).png`.
- **D-16:** Uploaded reference path 2 is `/Users/longnv/Downloads/20260618-013721.jpeg`.
- **D-17:** Source wording should treat Cai Xukun as a gated public-figure stylized mascot route for article illustrations.
- **D-18:** Public generated Cai Xukun samples require release review before publication.

### Uploaded Visual Authority

- **D-19:** The two uploaded images are the visual authority for the route.
- **D-20:** Fixed uploaded-image markers are yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
- **D-21:** Phase 43 records the marker list as source and route authority. Phase 44 turns the same markers into detailed identity, style, prompt, edit, and QA behavior.

### Public-Figure Likeness Boundary

- **D-22:** Generated Cai Xukun route outputs stay stylized mascot article illustrations.
- **D-23:** Realistic-person portrait output stays outside the route contract.
- **D-24:** Official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion claims stay outside the route contract.
- **D-25:** Cai Xukun route wording should frame the subject as an article-illustration mascot route with uploaded-image authority and public-figure likeness guardrails.

### Source-Image Context

- **D-26:** The green reference background is source-image context.
- **D-27:** Generated article illustrations keep the skill's sparse 16:9 white-background style.

### Existing Route Compatibility

- **D-28:** Xiaohei remains the omitted-IP default.
- **D-29:** Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun remain explicit routes with isolated references.
- **D-30:** Cai Xukun source/route work stays under `skills/visual-ip-illustrations/references/ips/caixukun/` and preserves the route-local isolation pattern used by the existing routes.
- **D-31:** Phase 43 preserves route behavior for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.

### the agent's Discretion

- The implementation planner may choose exact Markdown section ordering inside `source.md`, provided D-13 through D-27 remain explicit and grep-friendly.
- The implementation planner should append Cai Xukun after Go Gopher in `routing.md` to preserve existing route order while adding the v1.9 route.
- The implementation planner should create only `source.md` in Phase 43; Phase 44 owns the pack index and the full route-local reference set.

</decisions>

<canonical_refs>
## Canonical References

Downstream agents MUST read these before planning or implementing.

### Planning Scope

- `.planning/PROJECT.md` - v1.9 milestone goal, Cai Xukun constraints, uploaded-image authority, and gated public-figure route intent.
- `.planning/REQUIREMENTS.md` - Phase 43 requirement IDs `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`.
- `.planning/ROADMAP.md` - Phase 43 goal, success criteria, dependencies, and phase boundaries for Phases 44-47.
- `.planning/STATE.md` - current v1.9 state, accumulated default-route decisions, route-isolation history, and Cai Xukun milestone notes.

### Codebase Maps

- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture, progressive reference loading, and route-local reference policy.
- `.planning/codebase/CONVENTIONS.md` - Markdown conventions, repository-relative paths, English-default content, and route reference style.
- `.planning/codebase/STRUCTURE.md` - package layout, route-local reference placement, public docs placement, and generated asset path rules.

### Phase 43 Research

- `.planning/phases/43-cai-xukun-source-and-route-contract/43-RESEARCH.md` - route metadata contract, source record markers, implementation precedent, validation split, and risk controls.

### Existing Public and Runtime Surfaces

- `skills/visual-ip-illustrations/references/routing.md` - live route table, selection rules, output path markers, mixed-IP route grouping, attribution context, and delivery fields.
- `skills/visual-ip-illustrations/SKILL.md` - runtime skill entrypoint, route selection, progressive reference loading, delivery report, and save-path contract.
- `README.md` - public install, route selection, workflow, examples, and route description surface.
- `examples/prompts.md` - copyable planning, generation, editing, and mixed-IP prompt surface.
- `NOTICE.md` - attribution and legal notice surface for source-reviewed and gated routes.
- `RELEASE_CHECKLIST.md` - release review, public sample, generated sample, docs, and evidence gates.

### Existing Route Contracts

- `skills/visual-ip-illustrations/references/ips/gopher/source.md` - recent source-reviewed route/source precedent with route-local visual authority and final validation split.
- `skills/visual-ip-illustrations/references/ips/openclaw/source.md` - uploaded visual authority precedent with source record, marker list, sample policy, review owner, and distribution boundary.

### Planned Phase 43 Artifacts

- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` - planned uploaded-image authority, public-figure likeness boundary, source-image context, sample policy, review owner, and route status record.
- `/Users/longnv/Downloads/Generated image 1 (9).png` - uploaded reference authority path.
- `/Users/longnv/Downloads/20260618-013721.jpeg` - uploaded reference authority path.

### Validation Surfaces

- `scripts/validate-skill-package.mjs` - dependency-free validator surface that Phase 47 should extend for Cai Xukun route/source/docs/sample markers.
- `scripts/validate-skill-package.test.mjs` - Node regression test surface that Phase 47 should extend for Cai Xukun route parsing, marker drift, public sample gates, leakage fixtures, and full-pass output.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `skills/visual-ip-illustrations/references/routing.md` already centralizes route metadata, aliases, default flags, output suffixes, required references, attribution context, route statuses, mixed-IP grouping, output paths, and delivery fields.
- `skills/visual-ip-illustrations/references/ips/gopher/source.md` is the strongest recent precedent for a route/source-only phase that records authority and leaves validator expansion to the final phase.
- `skills/visual-ip-illustrations/references/ips/openclaw/source.md` is the strongest uploaded-image authority precedent.

### Established Patterns

- Xiaohei is the only omitted-IP default.
- Additional IPs are explicit routes with `default=false`, route-specific aliases, route-local references, route-specific output suffixes, route-specific output directories, and route status.
- Source, rights, local visual authority, or uploaded-image authority is recorded route-locally before broad docs, controller integration, validation, and public generated samples expand the route.
- Public generated samples for protected, source-reviewed, uploaded-image, local-reference, or public-figure routes require release review.
- Route-specific style, identity, composition, prompt, edit, and QA rules stay isolated under `skills/visual-ip-illustrations/references/ips/<route>/`.

### Integration Points

- Phase 43 connects to `skills/visual-ip-illustrations/references/routing.md` and `skills/visual-ip-illustrations/references/ips/caixukun/source.md`.
- Phase 44 expands Cai Xukun into the full route-local pack.
- Phase 45 wires Cai Xukun into `skills/visual-ip-illustrations/SKILL.md` runtime route selection and mixed-IP dispatch.
- Phase 46 updates README, localized README variants, examples, NOTICE, release checklist, broad skill docs, and `agents/openai.yaml`.
- Phase 47 extends the validator, Node regression tests, leakage checks, public sample gates, and release evidence.

</code_context>

<specifics>
## Specific Ideas

- Cai Xukun route metadata should use `gated-public-figure` to keep public-figure likeness guardrails visible from the first source/route phase.
- The source record should name both uploaded image paths exactly.
- The marker list should appear together in `source.md`: yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
- Realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion should stay outside Cai Xukun route identity and sample copy.
- The green reference background should be named as source-image context while generated article images keep sparse 16:9 white-background style.
- Mixed-IP requests should treat Cai Xukun as its own route group with its own source record and output directory.

</specifics>

<deferred>
## Deferred Ideas

- Phase 44: Cai Xukun style DNA, identity rules, composition patterns, prompt template, edit prompts, QA checklist, sample-policy wording, full route-local pack navigation, and expanded `required_references`.
- Phase 45: Cai Xukun skill controller integration, selected-IP reference loading, mixed-IP grouping, generation/edit routing, QA dispatch, and delivery reporting.
- Phase 46: README, localized README variants, examples, NOTICE, RELEASE_CHECKLIST, broad `SKILL.md` docs, and `agents/openai.yaml` Cai Xukun discovery wording.
- Phase 47: validator coverage, Node tests, leakage scans, public sample gates, route smoke, uploaded-image and likeness-boundary smoke, docs consistency, and release evidence.
- Future requirements: machine-readable route manifests, uploaded source-image hashing, visual regression, public comparison sheets, release packaging, and selected-IP installation variants.

</deferred>

---

*Phase: 43-Cai Xukun Source and Route Contract*
*Context gathered: 2026-06-18*
