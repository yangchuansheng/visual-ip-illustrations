# Phase 1: Routing Foundation - Context

**Gathered:** 2026-06-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 delivers the routing foundation for a multi-IP article illustration skill. Users can omit the visual IP and get the current Xiaohei behavior, explicitly request Xiaohei through aliases, and read shared workflow guidance plus route metadata that separates IP selection from IP-specific style rules.

</domain>

<decisions>
## Implementation Decisions

### Route Selection
- **D-01:** Omitted visual IP selects the Xiaohei route by default.
- **D-02:** The Xiaohei route keeps the current `$ian-xiaohei-illustrations` behavior, required references, and `assets/<article-slug>-illustrations/` output path.
- **D-03:** Explicit Xiaohei aliases are `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei`; each alias selects the same Xiaohei route.

### Shared Workflow Boundary
- **D-04:** Shared workflow guidance covers article understanding, cognitive-anchor selection, shot-list planning, single-image generation loop, QA handoff, asset preservation, and delivery reporting.
- **D-05:** IP-specific style, character identity, prompt wording, and QA rules stay in IP references or later canonical IP packs.

### Route Metadata
- **D-06:** Route metadata uses a readable manifest or `SKILL.md` routing section with `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-07:** Phase 1 fully records Xiaohei metadata and reserves a planned Littlebox entry for later phases.

### User-Facing Routing
- **D-08:** Routing docs explain default Xiaohei behavior, explicit Xiaohei aliases, mixed-IP request handling, and output paths.
- **D-09:** Mixed-IP docs describe separate IP variant groups as the intended behavior; Littlebox execution lands in Phase 3.
- **D-10:** Delivery reporting includes selected IP, generated count, purpose per image, save path, and stability notes.

### Package Boundary
- **D-11:** The installable package remains the `ian-xiaohei-illustrations/` directory.
- **D-12:** Root `README.md` and `examples/prompts.md` carry user-visible routing examples; package behavior remains inside `ian-xiaohei-illustrations/`.

### the agent's Discretion
- The agent may choose whether route metadata lives in a new reference file or an explicit section in `SKILL.md`, provided the fields above are readable and Phase 4 can validate them.
- The agent may choose compact wording for public docs as long as Xiaohei defaulting and alias behavior stay clear.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope
- `.planning/PROJECT.md` — Core value, constraints, and project-level decisions.
- `.planning/REQUIREMENTS.md` — Phase 1 requirement IDs and traceability.
- `.planning/ROADMAP.md` — Phase goal, dependencies, and success criteria.
- `.planning/STATE.md` — Current phase status and accumulated context.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Markdown style, naming, output-path conventions, and reference registration rules.
- `.planning/codebase/STRUCTURE.md` — Installable package boundary and file placement guidance.
- `.planning/codebase/ARCHITECTURE.md` — Skill entrypoint, metadata, reference layer, and public docs responsibilities.

### Skill Package
- `ian-xiaohei-illustrations/SKILL.md` — Current Xiaohei workflow, reference routing, generation loop, QA, and delivery contract.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Current agent metadata and implicit invocation policy.
- `ian-xiaohei-illustrations/references/style-dna.md` — Xiaohei style contract used by the current default route.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md` — Xiaohei character contract used by the current default route.

### Public Docs
- `README.md` — Public install, usage, output, and workflow documentation.
- `examples/prompts.md` — Copyable user prompt examples.
- `NOTICE.md` — Current attribution context.
- `LICENSE` — Repository license context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ian-xiaohei-illustrations/SKILL.md`: Current Xiaohei route, workflow stages, QA loop, and delivery contract.
- `ian-xiaohei-illustrations/references/style-dna.md`: Current Xiaohei visual style reference.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md`: Current Xiaohei identity reference.
- `ian-xiaohei-illustrations/assets/examples/`: Skill-local visual calibration assets.

### Established Patterns
- The skill uses progressive reference loading from `SKILL.md`.
- Reference files use compact Markdown sections and short action-oriented bullets.
- Public docs keep copyable prompts in `README.md` and `examples/prompts.md`.
- Delivery reporting already includes count, purpose, save path, and stability notes.

### Integration Points
- Update `SKILL.md` frontmatter, route section, and shared workflow text.
- Keep `agents/openai.yaml` compatible with implicit invocation.
- Add user-visible route docs to `README.md` and `examples/prompts.md`.
- Preserve generated user assets under root `assets/`.

</code_context>

<specifics>
## Specific Ideas

- Xiaohei remains the compatibility baseline for omitted IP requests.
- Phase 1 route metadata should make Phase 2 and Phase 3 additions predictable.
- The shared workflow should read as reusable orchestration guidance, with IP references carrying the visual rules.

</specifics>

<deferred>
## Deferred Ideas

- Phase 2: canonical Xiaohei IP pack and legacy reference compatibility.
- Phase 3: Littlebox aliases, references, output suffix, mixed-IP variant generation, and attribution.
- Phase 4: validation command for route metadata, aliases, references, prompt placeholders, output suffixes, docs links, and NOTICE markers.
- Phase 5: public docs, examples, metadata refresh, and release checklist.

</deferred>

---

*Phase: 1-Routing Foundation*
*Context gathered: 2026-06-12*
