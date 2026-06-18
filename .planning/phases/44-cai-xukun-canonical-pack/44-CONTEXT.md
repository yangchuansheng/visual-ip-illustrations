# Phase 44: Cai Xukun Canonical Pack - Context

**Gathered:** 2026-06-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 44 delivers the Cai Xukun route-local canonical pack. The phase creates the operational reference files that let users plan, prompt, edit, and QA Cai Xukun article illustrations while preserving the Phase 43 uploaded-image authority, route/source contract, output path, and gated public-figure boundary.

In scope:

- Create the Cai Xukun route-local pack files under `skills/visual-ip-illustrations/references/ips/caixukun/`.
- Keep Phase 43 `source.md` as the authority record and reference it from every operational pack file.
- Add `index.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Expand the Cai Xukun `routing.md` `required_references` cell after the full pack exists.
- Preserve Cai Xukun as an explicit `default=false` route with `gated-public-figure` status and output path `assets/<article-slug>-caixukun/`.
- Preserve Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher route behavior.

Out of scope:

- Phase 45 owns `SKILL.md` runtime controller integration, selected-IP reference loading, mixed-IP dispatch, generation/edit routing, QA dispatch, and delivery reporting.
- Phase 46 owns README variants, examples, NOTICE, release checklist, broad public docs, release surfaces, and agent metadata.
- Phase 47 owns validator/test hardening, automated leakage scans, public sample gates, route smoke fixtures, and final release evidence.

</domain>

<decisions>
## Implementation Decisions

### Pack File Set

- **D-01:** Create `skills/visual-ip-illustrations/references/ips/caixukun/index.md` as the pack navigation and operational coherence file.
- **D-02:** Create `skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md` for sparse 16:9 visual style, uploaded-image marker preservation, green-background carryover prevention, and public-figure route gates.
- **D-03:** Create `skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md` for the stylized mascot identity, recognition rules, cognitive-action responsibility, likeness boundary, and failure modes.
- **D-04:** Create `skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md` for one-composition-per-image article metaphors, mascot action patterns, support-object pools, anti-repeat rules, and route leakage boundaries.
- **D-05:** Create `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` for planning fields, one-image generation prompt, edit prompts, likeness-boundary repair, uploaded-image identity repair, route leakage repair, and output reminders.
- **D-06:** Create `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` for pass/fail gates, identity checks, public-figure likeness checks, iteration moves, route leakage repair, and delivery judgment.
- **D-07:** Preserve `skills/visual-ip-illustrations/references/ips/caixukun/source.md` as the Phase 43 authority record; update wording only when needed to point at the new pack files.

### Route Reference Expansion

- **D-08:** Expand the Cai Xukun `routing.md` `required_references` cell in Phase 44 after the pack files exist.
- **D-09:** The expanded Cai Xukun `required_references` list should include `references/ips/caixukun/index.md`; `references/ips/caixukun/source.md`; `references/ips/caixukun/style-dna.md`; `references/ips/caixukun/caixukun-ip.md`; `references/ips/caixukun/composition-patterns.md`; `references/ips/caixukun/prompt-template.md`; `references/ips/caixukun/qa-checklist.md`.
- **D-10:** Keep route metadata fields unchanged: id `caixukun`, display name `Cai Xukun`, aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk`, `default=false`, output suffix `caixukun`, output path `assets/<article-slug>-caixukun/`, and status `gated-public-figure`.

### PACK-01 Through PACK-05 Decisions

- **D-11:** PACK-01 is satisfied by a route-local pack that keeps source, style, identity, composition, prompt, QA, likeness guardrails, sample policy, and output behavior under `references/ips/caixukun/`.
- **D-12:** PACK-02 is satisfied by Cai Xukun planning fields: Placement, Core idea, Structure type, Cai Xukun mascot state, Cai Xukun mascot action, Supporting objects, Visible labels, Likeness boundary note, Source-image context note, and Output path.
- **D-13:** PACK-03 is satisfied by a one-image prompt template where the stylized Cai Xukun mascot performs the central cognitive article action in a sparse 16:9 white-background illustration.
- **D-14:** PACK-04 is satisfied by edit prompts for stronger mascot participation, uploaded-image identity repair, title removal, text reduction, public-figure likeness-boundary repair, route leakage repair, green-background carryover repair, and unaffected-content preservation.
- **D-15:** PACK-05 is satisfied by QA gates that reject realistic-person output, generic yellow duck drift, missing idol-hair and outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, and copied composition.

### Identity and Boundary Rules

- **D-16:** Every operational Cai Xukun file repeats the same route id `caixukun`, display name `Cai Xukun`, route status `gated-public-figure`, output path `assets/<article-slug>-caixukun/`, uploaded visual authority, public sample review boundary, route block, and delivery path note.
- **D-17:** Every operational Cai Xukun file preserves the uploaded markers together: yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
- **D-18:** Positive identity wording frames Cai Xukun as a stylized mascot article-illustration route with uploaded-image authority.
- **D-19:** Public-figure guardrails must appear in prompt, edit, and QA wording: realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion fail the route.
- **D-20:** The green reference background remains source-image context; generated article illustrations use sparse 16:9 white-background style.
- **D-21:** Cai Xukun must perform the central cognitive article action; the image should lose its article-metaphor meaning when the mascot is removed.

### Existing Route Compatibility

- **D-22:** Phase 44 touches only Cai Xukun route-local pack files, the Cai Xukun `routing.md` row required references, and optional Cai Xukun source wording needed for pack navigation.
- **D-23:** Cai Xukun marker terms stay out of Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher pack files.
- **D-24:** Public rendered Cai Xukun samples remain behind release review.

### the agent's Discretion

- The planner may choose exact Markdown section ordering inside new Cai Xukun pack files, provided D-01 through D-24 remain explicit and grep-friendly.
- The planner may use Go Gopher as the canonical operational-pack structure and OpenClaw as the uploaded-image authority wording precedent.
- The planner may update `source.md` only for pack navigation and current-route-pack wording while preserving Phase 43 source authority and public-figure boundaries.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/ROADMAP.md` - Phase 44 goal, success criteria, dependencies, and Phase 45-47 boundaries.
- `.planning/REQUIREMENTS.md` - PACK-01 through PACK-05 and later RUN/DOC/VAL ownership.
- `.planning/PROJECT.md` - project constraints, route isolation, no build runtime, image-generation dependency, and English-default repository artifact policy.
- `.planning/STATE.md` - current milestone state and phase sequencing.

### Phase 43 Contract

- `.planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md` - locked route/source decisions for Cai Xukun.
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-RESEARCH.md` - source/route research, exact route metadata, source record requirements, and Phase 44 handoff.
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md` - evidence that the Phase 43 route/source contract passed and that full pack work is Phase 44.

### Live Cai Xukun Route Files

- `skills/visual-ip-illustrations/references/routing.md` - live route row, current `required_references`, output path, route status, and mixed-IP route grouping.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` - uploaded-image authority, public-figure likeness boundary, source-image context, sample policy, review owner, route status, and source authority.

### Pack Precedents

- `skills/visual-ip-illustrations/references/ips/gopher/index.md` - latest full canonical pack navigation and operational-coherence precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/style-dna.md` - route-local visual style and stable gate precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/gopher-ip.md` - identity, recognition, action-subject, and failure-mode precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/composition-patterns.md` - composition family and anti-repeat precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/prompt-template.md` - planning format, generation prompt, edit prompt, and output reminder precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/qa-checklist.md` - pass/fail gate, iteration, leakage repair, and delivery judgment precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/index.md` - uploaded-authority pack navigation precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/source.md` - uploaded-image authority and sample-policy wording precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/openclaw-ip.md` - uploaded-image identity recognition precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/prompt-template.md` - uploaded-image identity repair edit-prompt precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/qa-checklist.md` - uploaded-image QA and route leakage precedent.

### Future Phase Boundaries

- `skills/visual-ip-illustrations/SKILL.md` - Phase 45 runtime integration target.
- `README.md` - Phase 46 public documentation target.
- `examples/prompts.md` - Phase 46 public prompt examples target.
- `NOTICE.md` - Phase 46 legal/source notice target.
- `RELEASE_CHECKLIST.md` - Phase 46 release review target.
- `scripts/validate-skill-package.mjs` - Phase 47 validator target.
- `scripts/validate-skill-package.test.mjs` - Phase 47 regression test target.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `skills/visual-ip-illustrations/references/ips/gopher/` provides the most recent seven-file route-local pack shape with repeated route header, identity markers, route block, source note, output reminder, action-subject gate, public sample boundary, and scope boundary.
- `skills/visual-ip-illustrations/references/ips/openclaw/` provides the strongest uploaded-image authority pattern for source record wording, identity marker repetition, identity repair prompts, and QA leakage gates.
- `skills/visual-ip-illustrations/references/routing.md` already has the Cai Xukun route row and should expand its `required_references` cell when the full pack exists.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` already has the exact uploaded image paths, fixed identity markers, sample policy, source-image context, and public-figure boundary.

### Established Patterns

- Operational pack files repeat a route header so individual references remain useful when loaded progressively.
- The selected character performs the central cognitive article action in every route.
- Route-local files keep identity, style, composition, prompt, and QA rules isolated.
- Public rendered samples for source-reviewed, uploaded-image, or gated routes require release review.
- Output paths use `assets/<article-slug>-<suffix>/` with ordered English slug filenames.

### Integration Points

- Phase 44 creates Cai Xukun route-local references and updates the Cai Xukun route table references.
- Phase 45 consumes these files from `SKILL.md`.
- Phase 46 exposes Cai Xukun through public docs and release surfaces.
- Phase 47 automates validation and regression coverage.

</code_context>

<specifics>
## Specific Ideas

- Use `Cai Xukun` in English repository artifacts while preserving `蔡徐坤` as an explicit alias token.
- Name the identity file `caixukun-ip.md` to match the existing `<route>-ip.md` pattern.
- Use `uploaded-image identity repair` as the Cai Xukun equivalent of OpenClaw's uploaded-logo identity repair.
- Include `Public-Figure Likeness Boundary Repair` as a Cai Xukun-specific edit prompt.
- Include `Green-Background Carryover Repair` because Phase 43 records the green reference background as source-image context.
- Route leakage scans should explicitly check all non-Cai-Xukun route packs for Cai Xukun markers, aliases, uploaded paths, and `gated-public-figure`.

</specifics>

<deferred>
## Deferred Ideas

- Phase 45: `SKILL.md` runtime controller integration, selected-IP reference loading, mixed-IP dispatch, generation/edit routing, QA dispatch, and Cai Xukun delivery reporting.
- Phase 46: README variants, examples, NOTICE, release checklist, public docs, release surfaces, and agent metadata.
- Phase 47: validator hardening, Node regression tests, route leakage scans, public sample gates, route smoke prompts, uploaded-image identity checks, public-figure boundary checks, and final release evidence.
- Future requirements: machine-readable route manifests, uploaded source-image hashing, visual regression, public comparison sheets, release packaging, and selected-IP installation variants.

</deferred>

---

*Phase: 44-Cai Xukun Canonical Pack*
*Context gathered: 2026-06-18*
