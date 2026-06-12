# Phase 4: Validation Hardening - Context

**Gathered:** 2026-06-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 4 delivers one lightweight local validation command for the installable `ian-xiaohei-illustrations/` skill package. The command validates package shape, skill metadata, route contracts, prompt variables, output paths, documentation links, attribution markers, legacy Xiaohei compatibility, and manual smoke prompt coverage before release or broad documentation edits.

The validator is a repository-file contract check. It runs without image generation, network access, package installation, a full application framework, or rendered image quality judgment.

</domain>

<decisions>
## Implementation Decisions

### Validation Command
- **D-01:** Add the validator at `scripts/validate-skill-package.mjs`.
- **D-02:** The invocation name is `node scripts/validate-skill-package.mjs`.
- **D-03:** Use plain Node.js with built-in modules only. The repository has no `package.json`, lockfile, test runner, or build framework, while GSD tooling already runs through Node in this workspace.
- **D-04:** Keep the command self-contained. It should read repository files, run deterministic checks, and exit with a machine-usable status code.

### Required Checks
- **D-05:** Validate package shape: `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md`, both canonical IP packs, five root Xiaohei compatibility references, `README.md`, `examples/prompts.md`, `NOTICE.md`, and `LICENSE` must exist.
- **D-06:** Validate `SKILL.md` frontmatter and runtime contract: `name: ian-xiaohei-illustrations`, non-empty `description`, route-first loading of `references/routing.md`, default Xiaohei behavior, selectable Littlebox behavior, mixed-IP variant groups, selected `required_references`, `image_gen` dependency wording, both output paths, and validation marker tokens.
- **D-07:** Validate `agents/openai.yaml` shape: `interface.display_name`, `interface.short_description`, `interface.default_prompt`, and `policy.allow_implicit_invocation: true` must be present. Phase 5 owns broad selectable-IP metadata wording.
- **D-08:** Validate route metadata in `ian-xiaohei-illustrations/references/routing.md`: the table must expose `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`; `xiaohei` must be the single default active route; `littlebox` must be active with `default: false`; aliases, output suffixes, attribution context, and required references must match the Phase 1-3 contracts.
- **D-09:** Validate required references: each path listed in `routing.md` must exist under `ian-xiaohei-illustrations/references/`; Xiaohei must have five operational references and Littlebox must have six operational references. The two `index.md` files must also exist as maintainer navigation files.
- **D-10:** Validate output suffixes and paths: `xiaohei` uses `illustrations` and `assets/<article-slug>-illustrations/`; `littlebox` uses `littlebox` and `assets/<article-slug>-littlebox/`; mixed-IP wording must preserve separate variant groups and separate output directories.
- **D-11:** Validate legacy Xiaohei root paths: `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md` must contain `## Current Xiaohei Contract`; the body after that heading must match the corresponding canonical `references/ips/xiaohei/*.md` file.
- **D-12:** Validate prompt placeholders and variables: Xiaohei prompt templates must keep the existing brace-wrapped variables and edit placeholder; Littlebox prompt templates must keep planning fields and bracketed prompt variables for core idea, background, physical box action, composition family, labels, and label repair.
- **D-13:** Validate objective IP markers: Xiaohei references must preserve 16:9, pure white background, Xiaohei active participation, output path, anti-repeat, and QA markers; Littlebox references must preserve `Littlebox state: closed`, `#E3F2FD`, `#E6E6FA`, English prompt language, user's-language labels, closed-only identity, front-left three-quarter view, amber jagged tape, side-seam twig-arm limits, output path, and QA failure markers.
- **D-14:** Validate docs links and public markers: README image links and root links must point to existing files; `README.md` and `examples/prompts.md` must contain both raw and HTML-escaped output path tokens for Xiaohei and Littlebox; public route docs must mention both canonical pack paths and `references/routing.md`.
- **D-15:** Validate `NOTICE.md` attribution: Ian attribution remains present, and Littlebox attribution must include `5km Littlebox Illustrations`, `okooo5km`, the source repository URL, MIT context, full inspected commit `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`, short commit `37cd93e`, source copyright, and derived-documentation credit guidance.
- **D-16:** Validate rendered image import boundary: Phase 4 should continue the Phase 3 boundary by checking that rendered Littlebox image files have not been imported into `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`. This check is filename/path-based and does not inspect pixels.

### Failure Semantics
- **D-17:** Exit `0` only when every required check passes.
- **D-18:** Exit nonzero when any required file, route row, alias group, default marker, output suffix, required reference, prompt variable, docs link, attribution marker, legacy parity check, smoke prompt marker, or rendered-image boundary check fails.
- **D-19:** Print deterministic English logs in stable check order. Use check IDs and path-specific messages, such as `[PASS] ROUT-ALIASES xiaohei aliases present` and `[FAIL] NOTICE-LBOX missing short commit 37cd93e in NOTICE.md`.
- **D-20:** End with a compact English summary containing total checks, passed checks, failed checks, and skipped checks if any optional advisory checks are added later.
- **D-21:** Keep failure messages actionable: include the file path, expected marker or relation, and observed missing condition.

### Manual Smoke Prompt Coverage
- **D-22:** Treat `examples/prompts.md` as the manual smoke prompt fixture source for Phase 4. The validator should confirm coverage for four smoke paths: omitted-IP default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variants.
- **D-23:** Manual smoke prompts must stay text-only. The validator checks that prompt fixtures contain the expected aliases, route wording, output paths, and Littlebox planning fields; it does not invoke Codex, call `image_gen`, or create PNG files.
- **D-24:** The required smoke prompt concepts are: default route shot list, explicit Xiaohei route with aliases and `assets/<article-slug>-illustrations/`, explicit Littlebox route with aliases, `Littlebox state: closed`, `visual metaphor`, `assigned background`, and `assets/<article-slug>-littlebox/`, plus mixed-IP variant groups with separate output directories.

### Lightweight Boundary
- **D-25:** Keep validation dependency-free and local. The command must not require a package manager, virtual environment, external service, browser, image model, or release packaging step.
- **D-26:** Keep validation focused on deterministic Markdown/YAML and filesystem contracts. Visual taste, rendered image quality, and real image generation remain manual smoke or release validation activities.
- **D-27:** The validator may use simple parsers implemented in the script for frontmatter, Markdown tables, links, and path markers. It should avoid fragile broad grep-only checks when a small structured parse is practical.

### Phase 5 Boundary
- **D-28:** Phase 5 owns broad README refresh, richer public examples, release checklist wording, and `agents/openai.yaml` copy updates for selectable-IP support.
- **D-29:** Phase 4 may add a minimal README command mention only if needed to make the local command discoverable during validation planning, but broad documentation polish remains Phase 5.
- **D-30:** Phase 4 does not create release archives, release automation, CI workflows, rendered example images, visual regression, or a machine-readable asset manifest.

### the agent's Discretion
- The implementation agent may choose exact internal check IDs and helper function names, provided the externally visible command, exit behavior, deterministic ordering, and required contract coverage above hold.
- The implementation agent may decide whether advisory checks print as `[INFO]` or are omitted. Required Phase 4 checks should be fail-fast in exit semantics while still printing all discovered failures in one run when practical.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope
- `.planning/PROJECT.md` — Core value, constraints, no-build-runtime rule, image generation dependency, attribution, and Phase 4 validation intent.
- `.planning/REQUIREMENTS.md` — VALD-01 through VALD-05, Phase 4 traceability, Phase 5 documentation requirements, and out-of-scope boundaries.
- `.planning/ROADMAP.md` — Phase 4 goal, success criteria, dependency on Phase 3, and Phase 5 boundary.
- `.planning/STATE.md` — Current focus, Phase 3 completion, and Phase 4 validation concerns.
- `AGENTS.md` — Repository response language, file-language, GSD workflow, and directness constraints.

### Prior Phase Decisions And Evidence
- `.planning/phases/01-routing-foundation/01-CONTEXT.md` — Default Xiaohei route, alias contracts, route metadata fields, shared workflow boundary, package boundary, and output reporting.
- `.planning/phases/01-routing-foundation/01-VERIFICATION.md` — Verified Phase 1 route metadata, docs markers, output path, and smoke prompt evidence.
- `.planning/phases/01-routing-foundation/01-UAT.md` — Accepted default route, alias route, route-based workflow, and mixed-IP intent.
- `.planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md` — Canonical Xiaohei pack shape, legacy root compatibility, output path, and prompt/QA preservation.
- `.planning/phases/02-xiaohei-canonicalization/02-VERIFICATION.md` — Verified canonical pack, root parity loop, output path, prompt markers, and residual validation handoff.
- `.planning/phases/02-xiaohei-canonicalization/02-UAT.md` — Accepted Xiaohei compatibility baseline and root body parity evidence.
- `.planning/phases/03-littlebox-vertical-slice/03-CONTEXT.md` — Littlebox route decisions, canonical pack shape, identity/prompt/QA/output contracts, mixed-IP behavior, attribution, and Phase 4/5 boundaries.
- `.planning/phases/03-littlebox-vertical-slice/03-VERIFICATION.md` — Verified active Littlebox route, required references, runtime behavior, attribution, rendered image boundary, and Phase 5 metadata boundary.
- `.planning/phases/03-littlebox-vertical-slice/03-UAT.md` — Accepted Littlebox alias routing, mixed-IP variant groups, NOTICE attribution, rendered-image boundary, and Phase 4 readiness.
- `.planning/phases/03-littlebox-vertical-slice/03-05-SUMMARY.md` — Local grep/find/git verification patterns that Phase 4 should turn into a reusable command.

### Codebase Maps
- `.planning/codebase/TESTING.md` — Current manual validation state, lack of test runner, manual smoke prompt role, and no automated framework.
- `.planning/codebase/STRUCTURE.md` — Installable package boundary, directory purposes, script placement guidance, and generated asset path conventions.
- `.planning/codebase/CONVENTIONS.md` — Markdown naming, prompt variable style, output path conventions, and lack of lint/test config.
- `.planning/codebase/ARCHITECTURE.md` — Route-first skill entrypoint, reference layer responsibilities, asset boundary, and anti-patterns.
- `.planning/codebase/STACK.md` — Markdown/YAML/static asset stack, no dependency/runtime framework, and host-provided `image_gen`.

### Skill Package And Public Docs
- `ian-xiaohei-illustrations/SKILL.md` — Skill frontmatter, route-first workflow, reference loading, `image_gen` boundary, selected route behavior, output path rules, validation markers, and delivery contract.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent metadata shape and implicit invocation policy.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata table, alias groups, defaults, output suffixes, required references, legacy path map, and output paths.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Xiaohei pack navigation and output path.
- `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` — Xiaohei style markers for validation.
- `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` — Xiaohei identity and participation markers for validation.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` — Xiaohei anti-repeat and calibration markers for validation.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — Xiaohei prompt placeholders and edit placeholder for validation.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — Xiaohei QA markers for validation.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Littlebox pack navigation, attribution, and output path.
- `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` — Littlebox background, linework, label, palette, and visual-veto markers.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` — Littlebox closed identity, tape, arm, lid, proportion, recognition, and failure markers.
- `ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md` — Littlebox composition families, metaphor, flow, and anti-repeat markers.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` — Littlebox English prompt and user's-language label contract.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` — Littlebox planning fields, prompt placeholders, label repair, and output path.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` — Littlebox QA pass/fail and iteration markers.
- `ian-xiaohei-illustrations/references/style-dna.md` — Legacy Xiaohei root compatibility file.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md` — Legacy Xiaohei root compatibility file.
- `ian-xiaohei-illustrations/references/composition-patterns.md` — Legacy Xiaohei root compatibility file.
- `ian-xiaohei-illustrations/references/prompt-template.md` — Legacy Xiaohei root compatibility file.
- `ian-xiaohei-illustrations/references/qa-checklist.md` — Legacy Xiaohei root compatibility file.
- `README.md` — Public installation docs, route docs, image links, examples link, and output path markers.
- `examples/prompts.md` — Manual smoke prompt fixtures for default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variants.
- `NOTICE.md` — Ian and Littlebox attribution markers.
- `LICENSE` — MIT license text.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Prior Phase 3 grep/find/diff commands in `.planning/phases/03-littlebox-vertical-slice/03-05-SUMMARY.md` provide a proven checklist that can be converted into a reusable validator.
- `ian-xiaohei-illustrations/references/routing.md` is a compact human-readable source for route ids, aliases, defaults, output suffixes, required references, attribution, and status.
- `examples/prompts.md` already contains the four manual smoke prompt categories required by VALD-05.
- The five root Xiaohei compatibility files already expose a stable `## Current Xiaohei Contract` delimiter that makes parity validation straightforward.

### Established Patterns
- The repository is documentation-first: behavior is encoded in Markdown and YAML, with static image assets and no application runtime.
- The installable skill package is the `ian-xiaohei-illustrations/` directory.
- IP-specific contracts live under `ian-xiaohei-illustrations/references/ips/<route-id>/`; root `references/*.md` remains Xiaohei legacy compatibility.
- Phase verification so far uses deterministic local shell checks, `rg`, `find`, `diff`, and `git diff --check`.

### Integration Points
- Add `scripts/validate-skill-package.mjs` as the first repository utility entrypoint.
- Optionally add a short command pointer in README only if required by the implementation plan; Phase 5 owns broader docs and release wording.
- Keep generated user assets outside the validator. The validator reads existing files and reports drift.

</code_context>

<specifics>
## Specific Ideas

### Assumptions Analysis
- **Assumption:** The validation command should be a Node script rather than a shell script.
  - **Why this way:** `.planning/codebase/TESTING.md` records no test runner; `.planning/codebase/STRUCTURE.md` says recurring validation scripts should go under `scripts/`; GSD already invokes Node through `/Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs`; the repository has no package manager files.
  - **If wrong:** Maintainers would receive a validator that is harder to run consistently across shells and harder to extend with structured Markdown/YAML parsing.
  - **Confidence:** Likely
- **Assumption:** `examples/prompts.md` is the right manual smoke prompt source for Phase 4.
  - **Why this way:** `examples/prompts.md` already contains smoke sections for omitted IP, explicit Xiaohei, explicit Littlebox, and mixed-IP requests; VALD-05 asks for smoke prompt coverage; Phase 5 owns broad example expansion.
  - **If wrong:** Phase 4 may create an extra fixture file that splits prompt maintenance across two locations.
  - **Confidence:** Confident
- **Assumption:** Phase 4 validates `agents/openai.yaml` shape but leaves selectable-IP wording updates to Phase 5.
  - **Why this way:** `.planning/phases/03-littlebox-vertical-slice/03-VERIFICATION.md` explicitly records `agents/openai.yaml` unchanged across Phase 3 and Phase 5 owns metadata wording; `.planning/REQUIREMENTS.md` maps DOCS-05 to Phase 5.
  - **If wrong:** Phase 4 could block on a documentation-copy requirement assigned to Phase 5.
  - **Confidence:** Confident
- **Assumption:** The rendered Littlebox import boundary is a required validator check.
  - **Why this way:** Phase 3 verification and UAT both accepted no rendered Littlebox image import; `.planning/REQUIREMENTS.md` keeps full Littlebox rendered image import out of v1 scope.
  - **If wrong:** Phase 4 may preserve a boundary that release packaging later decides to loosen.
  - **Confidence:** Likely

### First-Principles Anchor
- The validator should catch drift in contracts that a maintainer can break with ordinary Markdown edits: wrong alias, missing reference path, stale docs link, changed output suffix, missing prompt variable, missing attribution marker, or broken legacy compatibility.
- The validator should not attempt taste judgment. Image quality depends on host `image_gen` and manual QA.

</specifics>

<deferred>
## Deferred Ideas

- Phase 5: broad README rewrite for the complete two-IP package.
- Phase 5: richer `examples/prompts.md` public examples beyond smoke fixtures.
- Phase 5: `agents/openai.yaml` copy update to describe selectable IP support while preserving Xiaohei as default.
- Phase 5: release checklist requiring validation, both-IP smoke tests, attribution review, and installable package boundary checks.
- v2: CI workflow, release archives, visual regression, machine-readable asset manifest, third-IP schema, and rendered Littlebox public example imports.

</deferred>

---

*Phase: 4-Validation Hardening*
*Context gathered: 2026-06-12*
