# Phase 6: Tom Rights and Route Contract - Context

**Gathered:** 2026-06-13T01:04:28+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 6 defines the audit and route contract for Tom before Tom becomes a selectable protected-character route. It covers Tom rights documentation shape, NOTICE attribution-versus-permission wording, gated route status wording across release surfaces, public rendered sample gates, and Tom route metadata in `routing.md`.

This phase is context capture for implementation planning. It defines the gate and route contract; it does not add rendered Tom assets, build the Tom canonical pack, integrate skill controller behavior, or harden validator tests beyond the surfaces needed for the Phase 6 contract.

</domain>

<decisions>
## Implementation Decisions

### Tom Rights Record
- **D-01:** Tom rights documentation will live at `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- **D-02:** The rights document must expose these explicit fields: source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner.
- **D-03:** The rights record is a maintainer audit artifact. Downstream implementation should keep wording concrete enough for a release reviewer to decide whether Tom can remain gated, become active, or stay withheld from public release materials.

### NOTICE Attribution and Permission Boundary
- **D-04:** `NOTICE.md` must distinguish attribution from permission.
- **D-05:** Canonical wording direction: attribution is descriptive source context; permission is authorization-scope specific.
- **D-06:** Tom NOTICE copy should preserve Tom and Jerry/Tom source context while making clear that source attribution does not itself grant distribution, generated-sample, or broad character-use authorization.

### Route Status Contract
- **D-07:** Tom route status token is `gated-authorized` until release approval is complete.
- **D-08:** Route status wording must be consistent across `routing.md`, `README.md`, `examples/prompts.md`, and `RELEASE_CHECKLIST.md`.
- **D-09:** Tom route default must remain `false`. Xiaohei remains the only implicit default route.
- **D-10:** Phase 6 should define status wording and maintainer checks. Later phases can wire Tom runtime behavior, public examples, docs expansion, and validation hardening against this contract.

### Public Rendered Tom Sample Gate
- **D-11:** Public rendered Tom example assets are blocked until `RELEASE_CHECKLIST.md` records explicit public-sample approval.
- **D-12:** Phase 6 should define the public-sample gate and release checklist marker. It should not add rendered Tom assets.
- **D-13:** The gate applies to public example asset directories such as `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`.

### Tom Route Metadata
- **D-14:** `ian-xiaohei-illustrations/references/routing.md` must gain a Tom route row with `id` `tom`, `display_name` `Tom`, aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`, `default` `false`, `output_suffix` `tom`, and `status` `gated-authorized`.
- **D-15:** Tom `required_references` should point to the future Tom canonical pack under `references/ips/tom/`. Phase 6 can reference future pack paths even when Phase 7 will fill the operational files.
- **D-16:** Tom `attribution_context` must include Tom and Jerry/Tom source context plus a rights-boundary note that separates attribution from authorization scope.
- **D-17:** Tom output path contract is `assets/<article-slug>-tom/`, with docs preserving escaped marker `assets/&lt;article-slug&gt;-tom/` when public docs are updated.

### the agent's Discretion
- Auto mode was explicitly authorized. The agent selected the conservative gate-first path for all gray areas.
- Planner may decide whether Phase 6 changes should include a lightweight validator update for the new status and public-sample gate if that is needed to make the contract auditably enforceable before Phase 10.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Roadmap and Requirements
- `.planning/ROADMAP.md` — Phase 6 goal, requirements, and success criteria for Tom rights and route contract.
- `.planning/REQUIREMENTS.md` — RGT-01 through RGT-04 and TOMR-05 requirements, plus v1.1 out-of-scope boundaries.
- `.planning/PROJECT.md` — project constraints, current v1.1 milestone framing, rights boundary, and core value.
- `.planning/STATE.md` — current phase position and recorded concerns for Tom authorization scope, public generated-sample policy, and release wording.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Markdown file naming, documentation style, reference placement, and validation conventions.
- `.planning/codebase/STRUCTURE.md` — installable package shape, reference-pack placement, public docs placement, and generated asset directories.
- `.planning/codebase/TESTING.md` — current manual validation model and future validator context.

### Current Route and Release Surfaces
- `ian-xiaohei-illustrations/references/routing.md` — current route table and fields to extend with Tom metadata.
- `NOTICE.md` — attribution surface that must add attribution-versus-permission wording.
- `README.md` — public docs surface that currently describes two IP routes and must later carry Tom status wording consistently.
- `RELEASE_CHECKLIST.md` — release gate surface that must record Tom authorization review and explicit public-sample approval.
- `examples/prompts.md` — route smoke prompt surface that must later carry Tom gated status and prompt examples without broad availability claims.
- `scripts/validate-skill-package.mjs` — current deterministic validator surface for route tables, docs markers, output path tokens, attribution markers, smoke prompts, and public example asset gates.

### Future Tom Pack Paths
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Phase 6 Tom rights record location.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — future Tom canonical pack index referenced by route metadata.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` — future Tom visual style reference.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` — future Tom identity and action reference.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` — future Tom composition reference.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` — future Tom prompt reference.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` — future Tom QA reference.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ian-xiaohei-illustrations/references/routing.md`: already exposes route metadata columns `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- `NOTICE.md`: already separates Ian and Littlebox attribution sections and can host a Tom section with explicit permission boundary wording.
- `RELEASE_CHECKLIST.md`: already has automated gates, smoke prompts, attribution review, package boundary checks, public docs checks, and phase scope fences.
- `scripts/validate-skill-package.mjs`: already parses `routing.md`, checks route rows, checks default route uniqueness, resolves required references inside the package, checks raw and escaped output path tokens, checks NOTICE markers, checks smoke prompts, and checks example asset directories for prohibited rendered IP imports.

### Established Patterns
- Route docs use a Markdown table as the contract source for selectable IPs.
- Xiaohei remains the only default route; explicit IP routes use `default` `false`.
- Canonical IP packs live under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Public docs preserve both raw output paths and escaped HTML output path tokens.
- Public rendered examples are treated as release-surface assets and are already checked by the validator for IP-specific boundary markers.
- Validation is dependency-free Node, deterministic, and marker-based.

### Integration Points
- Add Tom route metadata to `ian-xiaohei-illustrations/references/routing.md`.
- Add Tom rights boundary wording to `NOTICE.md`.
- Add gated Tom route-status wording to `README.md`, `examples/prompts.md`, and `RELEASE_CHECKLIST.md`.
- Add or extend validator checks in `scripts/validate-skill-package.mjs` only as needed to enforce the Phase 6 contract.
- Keep rendered Tom public samples out of `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` until release checklist approval exists.

</code_context>

<specifics>
## Specific Ideas

- Use `gated-authorized` as the exact status token for Tom before final release approval.
- Treat `gated-authorized` as a maintained route metadata state, with public docs explaining that the route is protected and release-gated.
- Route aliases are exact: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.
- Tom route output suffix is exact: `tom`.
- The public-sample gate is release-checklist driven. The checklist needs explicit approval language before rendered Tom samples appear in public asset directories.

</specifics>

<deferred>
## Deferred Ideas

- Phase 7 owns the full Tom canonical pack content beyond `rights.md`.
- Phase 8 owns skill controller integration, explicit Tom selection behavior, and mixed Xiaohei/Littlebox/Tom variant grouping.
- Phase 9 owns broad public docs, prompt examples, agent metadata, and release surface expansion.
- Phase 10 owns full validation hardening and Node tests for three-route parser behavior, Tom leakage boundaries, and public-sample gates.

</deferred>

---

*Phase: 6-Tom Rights and Route Contract*
*Context gathered: 2026-06-13T01:04:28+08:00*
