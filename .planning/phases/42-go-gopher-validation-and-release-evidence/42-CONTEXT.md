# Phase 42: Go Gopher Validation and Release Evidence - Context

**Gathered:** 2026-06-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 42 converts the known Go Gopher seventh-route validation baseline from expected failure into deterministic local release readiness. The phase updates `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`, runs the full release verification surface, and records final Go Gopher release evidence. It preserves the shipped route behavior from Phases 38-41, keeps Xiaohei as the omitted-IP default, keeps all existing explicit routes stable, and leaves root `gopher.png` untracked.

</domain>

<decisions>
## Implementation Decisions

### Validation Matrix
- **D-01:** Extend the existing dependency-free Node validator instead of introducing a package manager, test framework, manifest generator, or build runtime.
- **D-02:** Treat Go Gopher as the seventh stable route in route-table, route-order, route-count, output-path, and mixed-IP checks.
- **D-03:** Add Go Gopher-specific checks for route metadata, seven required references, route-local pack markers, `assets/<article-slug>-gopher/`, escaped docs marker `assets/&lt;article-slug&gt;-gopher/`, source-reviewed status, and `default=false`.
- **D-04:** Update existing rebrand/compatibility checks so they validate all seven routes while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias.
- **D-05:** Keep validator output deterministic with stable check IDs and stable order. Planning should prefer route-specific check IDs such as `ROUTE-GOPHER-*`, `REFS-GOPHER-*`, `PROMPT-GOPHER-*`, `IP-GOPHER-*`, `QA-GOPHER-*`, `SOURCE-GOPHER-*`, `DOC-GOPHER-*`, `SMOKE-GOPHER-*`, `RELEASE-GOPHER-*`, `BOUNDARY-GOPHER-*`, and `VAL-GOPHER-EVIDENCE-*` if they fit the existing naming pattern.

### Node Regression Coverage
- **D-06:** Expand `scripts/validate-skill-package.test.mjs` to match the new validator matrix total and check order after Go Gopher checks land.
- **D-07:** Add fixture tests that prove failures for missing Go Gopher route metadata, missing route-local references, missing source/license markers, stale route-count assumptions, route leakage into non-Gopher packs, public Go Gopher sample assets without approval, and incomplete generated-sample review fields.
- **D-08:** Reuse the existing fixture-copy pattern, approval-line parser pattern, placeholder-date tests, and generated-sample distinction pattern already used for Tom, Ferris, Seal, and OpenClaw.
- **D-09:** Node tests should assert a full green validator run and green Node test suite after Phase 42. Prior diagnostic baselines `Summary: total=112 passed=106 failed=6 skipped=0` and `tests 80, pass 63, fail 17` become historical evidence only.

### Public Sample And Source Gates
- **D-10:** Keep public generated Go Gopher samples gated unless the release checklist contains explicit completed review data. Phase 42 should automate this gate for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`.
- **D-11:** Keep internal generated Go Gopher review outputs distinct from public rendered sample assets. Workspace outputs under `assets/<article-slug>-gopher/` may exist only as internal review outputs until public directories are explicitly approved.
- **D-12:** Source/license smoke must validate Renee French attribution, Go blog source context, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, Go logo boundary, official endorsement boundary, route status `source-reviewed`, and source authority `references/ips/gopher/source.md`.
- **D-13:** Root `gopher.png` remains the local visual authority input and stays untracked. Phase 42 validator may check that it exists as local input when needed, but this discussion does not authorize committing it.

### Release Evidence
- **D-14:** Produce `.planning/phases/42-go-gopher-validation-and-release-evidence/42-RELEASE-EVIDENCE.md` during execution if the plan reaches final verification.
- **D-15:** Release evidence must include exact outcomes for `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `git diff --check`, Go Gopher route smoke, source/license smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and `git status --short -- gopher.png`.
- **D-16:** Evidence should trace VAL-01 through VAL-05 and state whether every release truth passed. The release evidence artifact is the final acceptance record for Phase 42.
- **D-17:** Docs consistency should cover README variants, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/SKILL.md`, `references/routing.md`, and `references/ips/gopher/*.md`.

### Compatibility And Route Isolation
- **D-18:** Preserve Xiaohei as the only omitted-IP default. Go Gopher stays explicit with `default=false`.
- **D-19:** Preserve Littlebox, Tom, Ferris, Seal, and OpenClaw route behavior, output paths, source/rights/license boundaries, public sample gates, and validator coverage.
- **D-20:** Add Go Gopher leakage scanning that fails when Go Gopher identity markers, `references/ips/gopher`, `assets/<article-slug>-gopher/`, `gopher.png`, Go logo boundary wording, Renee French attribution, or Creative Commons Attribution 4.0 route text leaks into non-Gopher route-local packs.
- **D-21:** Keep English-default repository, script, validation output, planning artifact, release evidence, and documentation wording, with existing narrow multilingual exceptions for route aliases and user-language visible labels.

### the agent's Discretion
- The planner may choose exact check ID numbering, helper function names, and grouping as long as output remains deterministic and readable.
- The planner may use route manifest-like local helper arrays inside `scripts/validate-skill-package.mjs` if they reduce duplication without adding a new generated manifest system.
- The planner may keep legacy OpenClaw-specific smoke checks while adding seven-route Go Gopher smoke checks, provided final validation no longer depends on the old six-route baseline.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase 42 Scope
- `.planning/PROJECT.md` - v1.8 Go Gopher milestone goal, constraints, and key decisions.
- `.planning/REQUIREMENTS.md` - VAL-01 through VAL-05 and out-of-scope boundaries.
- `.planning/ROADMAP.md` - Phase 42 goal, dependencies, and success criteria.
- `.planning/STATE.md` - accumulated Go Gopher execution state and deferred validator baseline notes.

### Prior Go Gopher Evidence
- `.planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md` - locked route/source decisions, aliases, local visual authority, source/license facts, and Phase 42 handoff.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md` - route/source implementation summary and known validator/Node diagnostic baseline.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-VERIFICATION.md` - verified route/source truths and deferred validation ownership.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-UAT.md` - route/source UAT evidence.
- `.planning/phases/39-go-gopher-canonical-pack/39-CONTEXT.md` - locked Go Gopher pack, identity, prompt, edit, QA, and source-boundary decisions.
- `.planning/phases/39-go-gopher-canonical-pack/39-01-SUMMARY.md` - canonical pack summary and known validator/Node diagnostic baseline.
- `.planning/phases/39-go-gopher-canonical-pack/39-VERIFICATION.md` - verified route-local pack truths and deferred validation ownership.
- `.planning/phases/39-go-gopher-canonical-pack/39-UAT.md` - pack UAT evidence.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-CONTEXT.md` - locked controller integration decisions.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-01-SUMMARY.md` - runtime integration summary and known validator/Node diagnostic baseline.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-VERIFICATION.md` - verified controller truths and deferred validation ownership.
- `.planning/phases/40-go-gopher-skill-controller-integration/40-UAT.md` - controller UAT evidence.
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-CONTEXT.md` - locked public docs, examples, NOTICE, release checklist, and metadata decisions.
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-01-SUMMARY.md` - public release surface summary and known validator/Node diagnostic baseline.
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-VERIFICATION.md` - verified docs/release-surface truths and deferred validation ownership.
- `.planning/phases/41-go-gopher-public-documentation-and-release-surface/41-UAT.md` - public docs UAT evidence.

### Validator And Test Surfaces
- `scripts/validate-skill-package.mjs` - dependency-free validator to extend for Go Gopher route, docs, source/license, leakage, sample gates, and release evidence.
- `scripts/validate-skill-package.test.mjs` - Node regression suite to extend for Go Gopher check ordering, fixtures, parsers, public sample gates, generated sample gates, and full green output.
- `.planning/codebase/TESTING.md` - project validation model and current testing conventions.
- `.planning/codebase/CONVENTIONS.md` - naming, Markdown, validation, and documentation conventions.
- `.planning/codebase/STRUCTURE.md` - repository layout and placement guide.

### Go Gopher Runtime And Release Surfaces
- `README.md` - canonical English public route surface and validation documentation.
- `README.ar.md` through `README.zh.md` - localized README variants that need deterministic Go Gopher marker coverage.
- `examples/prompts.md` - Go Gopher planning, generation, edit, route smoke, mixed-IP, and maintainer smoke examples.
- `NOTICE.md` - Go Gopher source attribution and public sample gate.
- `RELEASE_CHECKLIST.md` - Go Gopher release review, public sample, generated sample, and Phase 42 evidence gates.
- `ian-xiaohei-illustrations/agents/openai.yaml` - agent metadata discovery copy.
- `ian-xiaohei-illustrations/SKILL.md` - runtime skill controller behavior and delivery reporting.
- `ian-xiaohei-illustrations/references/routing.md` - route table, route metadata, aliases, required references, output paths, and mixed-IP grouping.
- `ian-xiaohei-illustrations/references/ips/gopher/index.md` - Go Gopher route-local pack navigation and shared route failures.
- `ian-xiaohei-illustrations/references/ips/gopher/source.md` - Go project source context, Renee French attribution, Creative Commons Attribution 4.0, root `gopher.png`, review owner, and sample policy.
- `ian-xiaohei-illustrations/references/ips/gopher/style-dna.md` - Go Gopher style gates.
- `ian-xiaohei-illustrations/references/ips/gopher/gopher-ip.md` - Go Gopher identity markers and cognitive-action responsibility.
- `ian-xiaohei-illustrations/references/ips/gopher/composition-patterns.md` - Go Gopher composition families and action/object pools.
- `ian-xiaohei-illustrations/references/ips/gopher/prompt-template.md` - Go Gopher planning fields, one-image prompt, and edit prompts.
- `ian-xiaohei-illustrations/references/ips/gopher/qa-checklist.md` - Go Gopher QA and delivery judgment.
- `gopher.png` - local untracked visual authority input for the Go Gopher route.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-skill-package.mjs`: already parses route tables, reference paths, language allowlists, README variants, sample approval records, generated-sample records, and image asset paths.
- `scripts/validate-skill-package.test.mjs`: already has fixture-copy helpers, validator runner helpers, approval-line fixture builders, placeholder-date tests, public sample gate tests, generated sample gate tests, leakage fixture tests, and stable-order assertions.
- `RELEASE_CHECKLIST.md`: already has Go Gopher PENDING release review fields from Phase 41 that Phase 42 can parse.
- `.planning/phases/37-openclaw-validation-and-release-evidence/37-RELEASE-EVIDENCE.md`: existing final evidence precedent for a source-reviewed route.

### Established Patterns
- Validator checks are `defineCheck(id, message, run)` entries in a single ordered `checks` array.
- Route expectations currently flow through helper functions such as `rebrandRouteExpectations()`, route row parsing, planned-reference arrays, operational reference arrays, leakage marker arrays, and public/generated sample approval parsers.
- Public sample gates scan `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`.
- Internal generated sample gates distinguish workspace output directories such as `assets/<article-slug>-openclaw/` from public release directories.
- Node tests expect deterministic stdout with exact summary counts and stable check ordering.

### Integration Points
- Phase 42 connects directly to `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `RELEASE_CHECKLIST.md`, README variants, prompt examples, NOTICE, agent metadata, `SKILL.md`, routing metadata, and Go Gopher route-local references.
- Final acceptance connects to `.planning/phases/42-go-gopher-validation-and-release-evidence/42-RELEASE-EVIDENCE.md` and should be reflected in verification/UAT later in the phase.

</code_context>

<specifics>
## Specific Ideas

- Original need: maintainers need one local, deterministic proof that Go Gopher is releasable after route, pack, controller, and documentation work have landed.
- Core problem: validator and Node tests currently encode the pre-Go-Gopher six-route baseline, so known Phase 38-41 diagnostics must become green Phase 42 acceptance gates.
- Acceptance truth: Phase 42 succeeds only when validator, Node tests, diff hygiene, route smoke, source/license smoke, docs consistency, leakage scan, public sample gate, generated sample gate, release evidence, and `gopher.png` untracked status all pass.
- Risk decision: release evidence should document exact command outputs rather than relying on prose claims.
- Risk decision: public generated Go Gopher samples stay gated because Phase 41 intentionally added no rendered Go Gopher sample assets and no explicit approval data exists yet.
- Risk decision: Go Gopher source/license facts are already locked by Phases 38-41; Phase 42 validates those facts locally instead of broadening into external source research.
- Risk decision: route-leakage checks should scan non-Gopher route-local packs and legacy Xiaohei references, while broad public docs may mention Go Gopher as route inventory.

</specifics>

<deferred>
## Deferred Ideas

- Machine-readable visual-IP manifests remain Future Requirements MNF-01 and MNF-02.
- Canonical source image hashing remains Future Requirement AST-01.
- Public-approved comparison sheets and automated visual regression remain Future Requirements AST-02 and AST-03.
- CLI-level selected-route packaging remains Future Requirements DIST-01 and DIST-02.

</deferred>

---

*Phase: 42-Go Gopher Validation and Release Evidence*
*Context gathered: 2026-06-17*
