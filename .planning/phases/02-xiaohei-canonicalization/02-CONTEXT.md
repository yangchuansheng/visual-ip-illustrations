# Phase 2: Xiaohei Canonicalization - Context

**Gathered:** 2026-06-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 2 delivers Xiaohei canonicalization only: a canonical Xiaohei IP pack, legacy Xiaohei reference compatibility, unchanged Xiaohei output path, preserved prompt/QA/style behavior, preserved anti-repeat calibration behavior, and current README/examples prompt validity.

</domain>

<decisions>
## Implementation Decisions

### Canonical Pack Shape
- **D-01:** The canonical Xiaohei IP pack lives under `ian-xiaohei-illustrations/references/ips/xiaohei/`.
- **D-02:** The canonical Xiaohei pack keeps the existing five-reference split: style DNA, IP contract, composition rules, prompt template, and quality gate.

### Compatibility
- **D-03:** Legacy root reference paths remain valid compatibility entry points during migration: `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md`.
- **D-04:** Xiaohei route metadata points `required_references` at the canonical Xiaohei pack and documents legacy path availability.
- **D-05:** Xiaohei output path remains `assets/<article-slug>-illustrations/`.

### Xiaohei Contract
- **D-06:** Canonicalized Xiaohei prompt and QA preserve 16:9 format, pure white background, black hand-drawn line art, sparse red/orange/blue Chinese labels, whitespace, and one idea per image.
- **D-07:** Xiaohei character rules preserve solid-black body, white dot eyes, tiny thin legs, deadpan expression, and active conceptual participation.
- **D-08:** Anti-repeat behavior keeps examples as calibration material and keeps generation focused on fresh metaphors for the current article.

### Public Compatibility
- **D-09:** README and `examples/prompts.md` Xiaohei prompts stay copyable and valid; Phase 2 may add canonical-pack pointers while preserving current Xiaohei wording and paths.

### the agent's Discretion
- The agent may choose whether legacy root reference files are thin compatibility shims or full duplicated references, provided the old paths remain readable and the canonical pack is the source for new route metadata.
- The agent may add a compact pack index if it improves maintainability and Phase 4 validation readiness.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope
- `.planning/PROJECT.md` — Core value, constraints, and active requirements.
- `.planning/REQUIREMENTS.md` — Phase 2 requirement IDs and traceability.
- `.planning/ROADMAP.md` — Phase 2 goal, dependency, and success criteria.
- `.planning/STATE.md` — Current project status.
- `.planning/phases/01-routing-foundation/01-CONTEXT.md` — Phase 1 routing decisions that Phase 2 must preserve.
- `.planning/phases/01-routing-foundation/01-VERIFICATION.md` — Verified Phase 1 route metadata and public routing contract.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Markdown naming, reference registration, output-path conventions.
- `.planning/codebase/STRUCTURE.md` — Installable package boundary and reference file placement.
- `.planning/codebase/ARCHITECTURE.md` — Skill entrypoint, route manifest, reference layer, and public docs responsibilities.

### Current Xiaohei References
- `ian-xiaohei-illustrations/SKILL.md` — Current selected-route workflow and reference loading language.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata requiring canonical Xiaohei references.
- `ian-xiaohei-illustrations/references/style-dna.md` — Current Xiaohei visual style contract.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md` — Current Xiaohei character contract.
- `ian-xiaohei-illustrations/references/composition-patterns.md` — Current composition and anti-repeat rules.
- `ian-xiaohei-illustrations/references/prompt-template.md` — Current Xiaohei generation and edit prompt templates.
- `ian-xiaohei-illustrations/references/qa-checklist.md` — Current Xiaohei quality gate and iteration rules.

### Public Docs
- `README.md` — Public usage and output path docs.
- `examples/prompts.md` — Copyable Xiaohei prompts that must remain valid.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Existing Xiaohei source references: `style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`.
- Route manifest: `ian-xiaohei-illustrations/references/routing.md`.
- Skill-local calibration images: `ian-xiaohei-illustrations/assets/examples/`.
- Public examples: `examples/images/`, `examples/prompts.md`, `README.md`.

### Established Patterns
- Documentation-first Codex Skill package.
- Progressive reference loading through `SKILL.md`.
- Route metadata fields from Phase 1: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, `status`.
- Markdown reference files use compact ATX headings and action-oriented bullets.
- Generated assets use ordered English slugs under `assets/<article-slug>-illustrations/`.

### Integration Points
- `SKILL.md`: reference list, route selection text, required-reference loading language.
- `routing.md`: Xiaohei required references, output suffix, legacy compatibility note.
- Legacy root reference files: compatibility entry points for current prompts and docs.
- Canonical pack path: `ian-xiaohei-illustrations/references/ips/xiaohei/`.
- `README.md` and `examples/prompts.md`: compatibility-preserving Xiaohei usage pointers.

</code_context>

<specifics>
## Specific Ideas

- Canonicalization should make Xiaohei look like a first-class IP pack before Littlebox lands.
- Legacy paths are part of the user-visible contract because current `SKILL.md`, README, and prompt examples already point to them.
- The canonical pack should preserve current style text closely enough that prompt behavior stays stable.

</specifics>

<deferred>
## Deferred Ideas

- Phase 3: Littlebox canonical pack, aliases, route execution, prompt, QA, output path, and attribution.
- Phase 4: validation command for canonical paths, legacy paths, route metadata, prompt placeholders, docs links, and attribution markers.
- Phase 5: broad public documentation refresh, two-IP examples, agent metadata wording, and release checklist.
- v2: machine-readable asset manifest, visual regression, third-IP extension schema.

</deferred>

---

*Phase: 2-Xiaohei Canonicalization*
*Context gathered: 2026-06-12*
