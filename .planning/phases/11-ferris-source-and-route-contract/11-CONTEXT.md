# Phase 11: Ferris Source and Route Contract - Context

**Gathered:** 2026-06-13T14:03:11+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 11 delivers the auditable Ferris source and route contract before Ferris becomes a selectable runtime route. It locks the Ferris source record location and shape, route metadata fields, NOTICE attribution boundary, shared public route-status wording, public generated-sample gate, and the minimal local validator checks for this contract.

The phase is bounded to contract surfaces:

- Ferris source/trademark record.
- Ferris row and status metadata in `ian-xiaohei-illustrations/references/routing.md`.
- Ferris NOTICE source attribution plus Rust trademark/endorsement boundary wording.
- Public route-status wording that later docs reuse.
- Release checklist public generated-sample gate for Rust-logo-forward and official-affiliation risk.
- Minimal validator/test checks that prove the Phase 11 contract exists.

Ferris canonical identity, prompt, composition, QA, runtime controller behavior, and broad public examples stay with Phases 12-15.

</domain>

<decisions>
## Implementation Decisions

### Ferris Source Record

- **D-01:** Create the Ferris source record at `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- **D-02:** Use the Tom rights record as the structural precedent, adapted for an open-source mascot source record rather than an authorization record.
- **D-03:** The source record must include these sections: Source, Author and Source Sites, Copyright Waiver, Trademark Boundary, Route Status, Allowed Use, Restricted Use, Distribution Boundary, Sample Policy, and Review Owner.
- **D-04:** The source record must name `rustacean.net`, Karen Rustad Tolva, the CC0/public-domain dedication context, and the Rust Foundation trademark policy context from project requirements. Downstream research must verify the current upstream wording before implementation edits.
- **D-05:** The source record is the Phase 11 authority for source/trademark context. Phase 12 Ferris pack files can reference it once the pack exists.

### Route Metadata

- **D-06:** Add Ferris metadata to `ian-xiaohei-illustrations/references/routing.md` in the existing route table shape: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-07:** Ferris route metadata uses `id=ferris`, `display_name=Ferris`, `default=false`, `output_suffix=ferris`, and explicit aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- **D-08:** Ferris route status should be `source-reviewed` for Phase 11. This records that source/trademark boundaries are documented while runtime behavior and canonical pack integration are still pending later phases.
- **D-09:** Ferris `required_references` should include only Phase 11 contract references in this phase: `references/ips/ferris/source.md`. Later phases can expand the row with `index.md`, identity, style, composition, prompt, and QA references after those files exist.
- **D-10:** Mixed-IP route wording should extend the existing separate route-group language to name Xiaohei, Littlebox, Tom, and Ferris, while preserving Xiaohei as the only omitted-IP default.

### NOTICE and Trademark Boundary

- **D-11:** Add a Ferris section to `NOTICE.md` titled `Ferris Source Attribution and Rust Trademark Boundary`.
- **D-12:** NOTICE must separate Ferris source attribution from Rust trademark or endorsement status. The wording should say that Ferris source context records author/source/copyright-waiver information, while Rust and Cargo marks, logos, and official-affiliation claims are governed by the Rust Foundation trademark policy.
- **D-13:** NOTICE should link the operational boundary to `ian-xiaohei-illustrations/references/ips/ferris/source.md` and keep the public statement short enough for downstream docs to reuse.
- **D-14:** The NOTICE entry should avoid broad availability or endorsement claims. It should state the Ferris route status, the source record path, and the source/trademark review boundary.

### Public Route-Status Wording and Sample Gate

- **D-15:** Use one reusable public route-status phrase across `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md`: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- **D-16:** Phase 11 public docs should introduce only route status, aliases, output path tokens, source record path, and sample gate. Copyable Ferris prompt examples and full user-facing guidance belong to Phase 14.
- **D-17:** Public generated Ferris samples should stay gated by release checklist approval before appearing in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- **D-18:** The gate must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and public rendered assets. It should record PENDING / reviewer / date / approval status / allowed directories / release channels.

### Minimal Validator Contract

- **D-19:** Phase 11 validator work should extend the existing dependency-free Node validator and tests in `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- **D-20:** Minimal Phase 11 checks should prove the Ferris route row, aliases, `default=false`, `output_suffix=ferris`, `required_references` contract, route status, source attribution context, source record file, NOTICE markers, release checklist gate, raw output token `assets/<article-slug>-ferris/`, and escaped token `assets/&lt;article-slug&gt;-ferris/`.
- **D-21:** Minimal Phase 11 tests should follow the existing fixture style: stable check ordering, a full-pass count update, route metadata drift failure, source marker drift failure, NOTICE boundary drift failure, and public sample gate failure/approval parsing.
- **D-22:** Phase 11 validator checks should stay bounded to contract surfaces. Full Ferris pack, prompt placeholders, QA markers, leakage gates, metadata docs, and four-route parser behavior expand in Phase 15.

### Agent Discretion

- Auto mode selected all meaningful gray areas and chose the recommended contract-first options. The planner may choose exact check IDs and wording details, provided the decisions above remain true and existing Xiaohei, Littlebox, and Tom contracts stay stable.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` - Milestone context, Ferris source/trademark constraints, and active v1.2 requirements.
- `.planning/REQUIREMENTS.md` - Phase 11 requirement IDs FRGT-01, FRGT-02, FRGT-03, FRGT-04, and FERR-05.
- `.planning/ROADMAP.md` - Phase 11 goal, success criteria, and three planned work slices.
- `.planning/STATE.md` - Current milestone state and carried-forward decisions from Tom Phases 6-10.

### Contract Surfaces

- `ian-xiaohei-illustrations/references/routing.md` - Existing route table shape, route status language, aliases, output suffixes, required references, mixed-IP wording, and delivery report fields.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Closest existing precedent for source/rights boundary sections, distribution boundary, sample policy, and review owner.
- `NOTICE.md` - Existing Ian, Littlebox, and Tom attribution/boundary structure.
- `RELEASE_CHECKLIST.md` - Existing automated gates, route smoke prompts, attribution review, Tom public sample gate, and release-review record shape.

### Public Docs and Runtime Surfaces

- `README.md` - Current public route descriptions, output path tokens, route reference link, and maintainer validation section.
- `examples/prompts.md` - Current route smoke fixtures, mixed-IP planning examples, and route marker vocabulary.
- `ian-xiaohei-illustrations/SKILL.md` - Route-first runtime behavior, selected-IP reference loading, output paths, delivery contract, and Tom route precedent.
- `ian-xiaohei-illustrations/agents/openai.yaml` - Current agent metadata pattern for naming selectable routes while preserving Xiaohei as the implicit default.

### Validation

- `scripts/validate-skill-package.mjs` - Dependency-free validator, route parsing helpers, output path token helper, public sample approval parser, and ordered check matrix.
- `scripts/validate-skill-package.test.mjs` - Node test style for stable check ordering, fixture mutation, failure messages, public sample gate parsing, and full-pass count.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` - Markdown/YAML conventions and reference-file naming style.
- `.planning/codebase/STRUCTURE.md` - Package shape, public docs, installable skill boundary, and reference placement patterns.
- `.planning/codebase/TESTING.md` - Older map with manual QA baseline; use current validator files above for live validation behavior.

### Planned Ferris Artifact

- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Planned Phase 11 source/trademark record to create.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/ips/tom/rights.md`: reusable section structure for source, allowed/restricted use, distribution boundary, sample policy, and review ownership.
- `ian-xiaohei-illustrations/references/routing.md`: single route metadata table that downstream runtime and validator work already consume.
- `RELEASE_CHECKLIST.md`: reusable public sample approval record format with reviewer/date/status/directory/channel fields.
- `scripts/validate-skill-package.mjs`: reusable parser/check helpers including `parseMarkdownTable`, `splitRouteCell`, `outputPathTokens`, assertion helpers, route-row helpers, and public sample approval parsing.
- `scripts/validate-skill-package.test.mjs`: reusable fixture mutation helpers for route drift, source/boundary drift, docs drift, and public-sample gate tests.

### Established Patterns

- Xiaohei remains the only omitted-IP default; every added route uses `default=false` and explicit aliases.
- Route isolation is expressed through separate route groups, route-local required references, route-specific output suffixes, and route-local QA/prompt behavior.
- Public rendered protected or trademark-sensitive samples are controlled through release checklist records before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- Validator checks are dependency-free Node checks with stable IDs, deterministic output order, actionable failure messages, and Node test fixture coverage.
- Current `.planning/codebase/TESTING.md` is older than Phase 10 and still describes a manual-only baseline. Treat `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `.planning/STATE.md`, and recent git history as the live validation source.

### Integration Points

- Route row and route selection wording connect through `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/SKILL.md`, public docs, examples, and validator checks.
- NOTICE wording connects source attribution to public documentation and release checklist review.
- Output path markers must appear in raw and escaped forms for documentation and validator coverage.
- Phase 11 should create the Ferris source directory/file foundation without requiring Phase 12 pack files to exist.

</code_context>

<specifics>
## Specific Ideas

- Route status chosen for Phase 11: `source-reviewed`.
- Public route-status phrase chosen for Phase 11: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- Ferris source record location chosen for Phase 11: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- Ferris output path tokens chosen for Phase 11 docs/validation: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`.
- External source verification is required during research/planning before final wording lands: `rustacean.net` Ferris source context and current Rust Foundation trademark policy.

</specifics>

<deferred>
## Deferred Ideas

- Full Ferris canonical pack files under `ian-xiaohei-illustrations/references/ips/ferris/` belong to Phase 12.
- Skill controller integration, selection behavior, four-IP variant grouping, and runtime output handling belong to Phase 13.
- Copyable Ferris prompt examples, agent metadata updates, and broad public docs expansion belong to Phase 14.
- Full Ferris validation hardening, leakage checks, prompt/QA marker checks, and four-route parser coverage belong to Phase 15.

</deferred>

---

*Phase: 11-Ferris Source and Route Contract*
*Context gathered: 2026-06-13T14:03:11+08:00*
