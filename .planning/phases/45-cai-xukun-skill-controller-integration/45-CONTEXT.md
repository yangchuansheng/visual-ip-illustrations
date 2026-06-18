# Phase 45: Cai Xukun Skill Controller Integration - Context

**Gathered:** 2026-06-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 45 delivers runtime skill-controller integration for the already-defined `caixukun` route. The implementation should wire Cai Xukun into `skills/visual-ip-illustrations/SKILL.md` route selection, progressive reference loading, shot-list planning, generation/edit dispatch, QA dispatch, save paths, mixed-IP route groups, and delivery reports.

The expected implementation surface is `skills/visual-ip-illustrations/SKILL.md`. `skills/visual-ip-illustrations/agents/openai.yaml` belongs to Phase 46 release/public metadata unless planning finds direct evidence that RUN-04 cannot pass without a Phase 45 metadata edit.

</domain>

<decisions>
## Implementation Decisions

### Scope Ownership
- **D-01:** Phase 45 owns runtime controller behavior in `skills/visual-ip-illustrations/SKILL.md`.
- **D-02:** Phase 45 should preserve all existing route behavior for omitted-IP Xiaohei and explicit Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- **D-03:** README variants, `examples/prompts.md`, `NOTICE.md`, release checklist, public docs, and broad release surfaces stay deferred to Phase 46.
- **D-04:** Validator hardening, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final release evidence stay deferred to Phase 47.

### RUN-01 Decisions
- **D-05:** Add Cai Xukun to `SKILL.md` frontmatter description, Visual IP Routes, Reference Loading, Select the Visual IP Route, shot-list fields, generation context, edit routing, QA dispatch, save paths, and delivery reporting.
- **D-06:** Cai Xukun route selection must use aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`; route id `caixukun`; display name `Cai Xukun`; route status `gated-public-figure`; output path `assets/<article-slug>-caixukun/`.
- **D-07:** Cai Xukun progressive loading must point to the Phase 44 seven-file pack: `index.md`, `source.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-08:** Cai Xukun runtime wording must carry uploaded-image identity, source-image context, public-figure label sanitization, likeness-boundary wording, public sample review boundary, route isolation, and source pointer `references/ips/caixukun/source.md`.

### RUN-02 Decisions
- **D-09:** Mixed-IP workflows must add Cai Xukun as a separate route group alongside Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- **D-10:** Each mixed-IP group must load only its own required references, use its own prompt template, QA checklist, edit gates, route note, output suffix, and output directory.
- **D-11:** Cai Xukun mixed-IP groups must write to `assets/<article-slug>-caixukun/` and include route status `gated-public-figure`, source authority, uploaded-image identity status, public-figure likeness boundary status, source-image context status, and public sample review boundary when relevant.

### RUN-03 Decisions
- **D-12:** Cai Xukun delivery reports must include selected visual IP, image count, purpose per image, saved path under `assets/<article-slug>-caixukun/`, likeness-boundary note, uploaded-image identity status, source-image context status, route isolation status, public sample review boundary when relevant, and route stability notes.
- **D-13:** The route-leakage delivery guard must include Cai Xukun and require the Cai Xukun block to preserve `gated-public-figure`, `references/ips/caixukun/source.md`, uploaded-image identity note, route-local QA, public-figure likeness boundary, source-image context boundary, public sample review boundary, and `assets/<article-slug>-caixukun/`.

### RUN-04 Decisions
- **D-14:** Phase 45 satisfies the skill-instruction part of RUN-04 by presenting Cai Xukun as a selectable gated route in `SKILL.md` while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias.
- **D-15:** Phase 46 owns the agent-metadata part of RUN-04 by updating `skills/visual-ip-illustrations/agents/openai.yaml` with Cai Xukun in the public/release metadata pass.

### the agent's Discretion
- The planner may choose the smallest surgical edit sequence for `SKILL.md`, as long as the exact controller surfaces listed above are covered and existing route wording stays stable.
- The planner may organize verification as grep groups rather than one large command, as long as every RUN-01 through RUN-04 behavior has explicit local evidence.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Scope and Requirements
- `.planning/ROADMAP.md` — Phase 45 goal, dependencies, success criteria, and Phase 46/47 boundaries.
- `.planning/REQUIREMENTS.md` — RUN-01 through RUN-04 runtime requirements and out-of-scope constraints.

### Prior Phase Evidence
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md` — verified route/source contract, aliases, status, output path, source authority, and default preservation.
- `.planning/phases/44-cai-xukun-canonical-pack/44-VERIFICATION.md` — verified seven-file Cai Xukun pack, planning fields, prompt/edit gates, QA gates, and routing required-reference expansion.
- `.planning/phases/44-cai-xukun-canonical-pack/44-01-SUMMARY.md` — Phase 44 handoff notes and explicit Phase 45/46/47 ownership boundaries.

### Runtime Controller and Route Pack
- `skills/visual-ip-illustrations/SKILL.md` — runtime controller that Phase 45 should update.
- `skills/visual-ip-illustrations/references/routing.md` — source of route metadata, aliases, required references, output suffixes, mixed-IP output paths, and delivery report fields.
- `skills/visual-ip-illustrations/references/ips/caixukun/index.md` — route-local pack contract and scope boundary.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` — uploaded-image authority, public-figure likeness boundary, source-image context, sample policy, review owner, and route status.
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` — planning fields, one-image prompt, edit gates, output reminder, and delivery report requirements.
- `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` — pass/fail gates, repair moves, public sample boundary, and delivery judgment.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `skills/visual-ip-illustrations/SKILL.md` already has repeated controller blocks for Tom, Ferris, Seal, OpenClaw, and Go Gopher. Cai Xukun should follow the same explicit route block pattern.
- `skills/visual-ip-illustrations/references/routing.md` already contains the verified `caixukun` route row and output path. Phase 45 should consume this contract rather than redefine it differently.
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` and `qa-checklist.md` already define the exact Cai Xukun planning, generation, edit, QA, and delivery wording to mirror into runtime-controller guidance.

### Established Patterns
- `SKILL.md` functions as the runtime controller and should stay concise; detailed identity, prompt, and QA rules live in route-local reference files.
- Each explicit route has entries in Visual IP Routes, Reference Loading, Select the Visual IP Route, shot-list planning, generation context, mixed-IP grouping, QA, save paths, Output Contract, and route-leakage delivery guard.
- Existing route output paths follow `assets/<article-slug>-<output_suffix>/`, except Xiaohei compatibility uses `assets/<article-slug>-illustrations/`.

### Integration Points
- Frontmatter description: add Cai Xukun to explicit selectable routes.
- `## Visual IP Routes`: add Cai Xukun status, source pointer, output path, public-figure boundary, uploaded-image authority, and source-image context.
- `## Reference Loading`: add all seven Cai Xukun route-local references.
- `### 1. Select the Visual IP Route`: add aliases, route metadata, output path, required references, and mixed-IP grouping.
- `### 3. Plan the Shot List First`: add Cai Xukun shot-list fields and mixed-IP group entry.
- `### 4. Generate One Image at a Time`: add Cai Xukun generation context and repair behavior.
- `### 5. QA and Iteration`: add Cai Xukun QA checklist and high-risk failure list.
- `### 6. Save and Deliver`: add `assets/<article-slug>-caixukun/` path and validation marker.
- `## Output Contract`: add Cai Xukun delivery block and route-leakage delivery guard.

</code_context>

<specifics>
## Specific Ideas

- Preserve omitted-IP Xiaohei default exactly.
- Preserve existing Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher route behavior exactly.
- Keep Cai Xukun as an explicit selectable gated public-figure route with aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`.
- Keep public generated Cai Xukun samples behind release review.
- Keep public-figure visible-label sanitization in planning, prompt, edit, QA, and delivery wording.
- Keep source-image context explicit: green reference background is source-image context; generated article illustrations use sparse 16:9 white-background style.

</specifics>

<deferred>
## Deferred Ideas

- Phase 46 owns README variants, `examples/prompts.md`, `NOTICE.md`, release checklist, public docs, public release surfaces, and `skills/visual-ip-illustrations/agents/openai.yaml`.
- Phase 47 owns validator hardening, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final release evidence.

</deferred>

---

*Phase: 45-Cai Xukun Skill Controller Integration*
*Context gathered: 2026-06-18*
