---
phase: 47-cai-xukun-validation-and-release-evidence
phase_number: 47
phase_name: Cai Xukun Validation and Release Evidence
status: ready_for_planning
created: 2026-06-18
stage: discuss
---

# Phase 47: Cai Xukun Validation and Release Evidence - Context

**Gathered:** 2026-06-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 47 turns the Cai Xukun route delivered by Phases 43-46 into deterministic local release readiness.

The phase owns `VAL-01` through `VAL-05` from `.planning/REQUIREMENTS.md`: validator parity, route-leakage checks, public generated sample gates, Node regression coverage, and final release evidence. It should update `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, and the Phase 47 release evidence artifact while preserving the shipped route/source, pack, controller, and public documentation behavior from Phases 43-46.

Discuss-stage scope is limited to context capture and audit trail creation. Implementation files stay unchanged during this stage.

</domain>

<decisions>
## Implementation Decisions

### Root Need and Desired Outcome

- **D-01:** Phase 47 is the final local proof that the Cai Xukun route is releasable after source, pack, controller, and public documentation work have landed.
- **D-02:** The desired outcome is a green deterministic command set: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `git diff --check`, targeted route smoke, source-boundary smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and a Phase 47 release evidence artifact.
- **D-03:** Phase 47 should follow the Phase 42 Go Gopher validation-and-release-evidence precedent: extend the existing dependency-free Node validator, extend the Node built-in test suite, keep stable check IDs and output order, and record exact release evidence.

### Current Validator and Test Gaps

- **D-04:** The current validator is still partially anchored to the pre-Cai-Xukun Go Gopher baseline. A baseline run now exits 1 with `Summary: total=129 passed=122 failed=7 skipped=0`.
- **D-05:** Current validator failures identify the Phase 47 work surface: `ROUTE-REFS-001` has no Cai Xukun required-reference expectation, `SMOKE-MIXED-GOPHER-001` still expects seven-route mixed wording, `REBRAND-CANON-004`, `REBRAND-ROUTE-001`, and `VAL-COMPAT-001` still expect exactly seven routes, and `LANG-SCAN-001` plus `VAL-LANGUAGE-001` classify `蔡徐坤` alias occurrences as stale Chinese prose.
- **D-06:** The current Node suite is still coupled to the old green validator baseline. A baseline run exits 1 with `tests 96`, `pass 75`, and `fail 21`.
- **D-07:** Current Node failures point to stale assumptions in deterministic harness smoke logs, stable-order assertions, full-pass summary assertions, language alias fixtures, parser primitives expecting seven routes, Go Gopher mixed-IP fixture text, public sample gate fixtures, generated sample gate fixtures, and full-pass output expectations.

### Validation Matrix Strategy

- **D-08:** Extend `scripts/validate-skill-package.mjs` rather than introducing a package manager, test runner, manifest generator, or build runtime.
- **D-09:** Treat Cai Xukun as the eighth route in route-table, route-order, route-count, output-path, mixed-IP, rebrand-route, compatibility, and public-doc path checks.
- **D-10:** Add Cai Xukun-specific validator checks for route metadata, seven required references, source record, route-local pack, prompt template, QA checklist, identity markers, public docs, localized README parity, examples, NOTICE, release checklist, agent metadata, route smoke, mixed-IP smoke, public sample gates, generated sample gates, and release evidence.
- **D-11:** Prefer stable, route-specific check IDs such as `AGENT-CAIXUKUN-001`, `ROUTE-CAIXUKUN-001`, `REFS-CAIXUKUN-001`, `PROMPT-CAIXUKUN-001`, `IP-CAIXUKUN-001`, `QA-CAIXUKUN-001`, `SOURCE-CAIXUKUN-001`, `DOC-CAIXUKUN-001`, `NOTICE-CAIXUKUN-001`, `SMOKE-CAIXUKUN-001`, `SMOKE-MIXED-CAIXUKUN-001`, `RELEASE-CAIXUKUN-001`, `VAL-CAIXUKUN-EVIDENCE-001`, `BOUNDARY-CAIXUKUN-LEAK-001`, `BOUNDARY-CAIXUKUN-IMG-001`, and `BOUNDARY-CAIXUKUN-GEN-001` if they fit the current ordered matrix.

### Node Regression Coverage

- **D-12:** Extend `scripts/validate-skill-package.test.mjs` with Cai Xukun parser assertions for eight-route order: `xiaohei`, `littlebox`, `tom`, `ferris`, `seal`, `openclaw`, `gopher`, `caixukun`.
- **D-13:** Add fixture tests that prove failures for Cai Xukun route metadata drift, required-reference drift, source marker drift, identity/prompt/QA marker drift, docs drift, localized README drift, NOTICE drift, smoke drift, mixed-IP drift, release gate drift, release evidence drift, leakage into other route packs, public asset gate drift, generated sample gate drift, placeholder approval dates, and full-pass output.
- **D-14:** Reuse the existing fixture-copy helpers, approval parser patterns, placeholder-date tests, public sample gate tests, generated sample gate tests, leakage fixture tests, and stable-order assertions already present for Tom, Ferris, Seal, OpenClaw, and Go Gopher.

### Source-of-Truth Artifacts to Protect

- **D-15:** Route metadata authority comes from `skills/visual-ip-illustrations/references/routing.md`: aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk`; route id `caixukun`; display name `Cai Xukun`; `default=false`; output suffix `caixukun`; output path `assets/<article-slug>-caixukun/`; escaped marker `assets/&lt;article-slug&gt;-caixukun/`; required references for the seven-file pack; and status `gated-public-figure`.
- **D-16:** Source authority comes from `skills/visual-ip-illustrations/references/ips/caixukun/source.md`: uploaded-image authority, uploaded reference image A and B wording, public-figure likeness boundary, source-image context boundary, public sample policy, review owner, route status, and release review fields.
- **D-17:** Pack authority comes from `skills/visual-ip-illustrations/references/ips/caixukun/`: `index.md`, `source.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-18:** Public release surface authority comes from `README.md`, `readmes/README.*.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/agents/openai.yaml`.
- **D-19:** Runtime controller authority comes from `skills/visual-ip-illustrations/SKILL.md`, which Phase 45 wired for route selection, progressive reference loading, mixed-IP grouping, generation/edit/QA routing, save paths, and delivery reports.

### Leakage and Public Sample Gates

- **D-20:** Add a Cai Xukun leakage check that scans Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and legacy Xiaohei route references for Cai Xukun-only markers.
- **D-21:** Cai Xukun leakage markers should include `Cai Xukun`, `蔡徐坤`, `caixukun`, `cxk`, `gated-public-figure`, `references/ips/caixukun`, `assets/<article-slug>-caixukun/`, `assets/&lt;article-slug&gt;-caixukun/`, uploaded-image authority, public-figure likeness boundary, source-image context boundary, stylized mascot-only output, realistic-person portrait output, celebrity endorsement claims, campaign, advertising, and fandom-promotion terms.
- **D-22:** Public generated Cai Xukun sample assets remain blocked until `RELEASE_CHECKLIST.md` contains complete approval data for reviewer, date, approval status, allowed directories, release channels, uploaded-image identity outcome, public-figure likeness boundary outcome, source-image context boundary outcome, route-isolation outcome, stylized mascot-only output outcome, article-metaphor quality outcome, and public-sample decision.
- **D-23:** Generated sample checks should keep internal review outputs under `assets/<article-slug>-caixukun/` distinct from public rendered sample directories.

### Release Evidence

- **D-24:** Produce `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-RELEASE-EVIDENCE.md` during execution after the validator and Node suite are green.
- **D-25:** Release evidence must record exact outcomes for `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `git diff --check`, Cai Xukun route smoke, uploaded-image smoke, public-figure likeness-boundary smoke, source-image context smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and dirty-worktree scope.
- **D-26:** The validator should include a `VAL-CAIXUKUN-EVIDENCE-001` check after the evidence file exists, mirroring `VAL-GOPHER-EVIDENCE-001` from Phase 42.

### Dirty Worktree Scope

- **D-27:** The current worktree already contains Phase 43-46 Cai Xukun changes and untracked Phase 43-46 planning directories. Phase 47 implementation must avoid reverting or restaging unrelated user or prior-phase work.
- **D-28:** Stage and commit only Phase 47-owned files when the later execution stage commits: validator script, validator test, Phase 47 release evidence, and Phase 47 planning artifacts.

### the agent's Discretion

- The planner may choose exact helper names, grouping, and check insertion points as long as check order remains deterministic and readable.
- The planner may add small route-expectation helper arrays for Cai Xukun if that reduces duplication while preserving the existing script-only validation model.
- The planner may keep legacy Go Gopher fixture markers when compatibility checks still need them, provided the final validator no longer depends on a seven-route baseline.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Scope

- `.planning/ROADMAP.md` - Phase 47 goal, dependencies, success criteria, and planned `47-01-PLAN.md` title.
- `.planning/REQUIREMENTS.md` - `VAL-01` through `VAL-05`, Cai Xukun source/pack/runtime/docs requirements, and out-of-scope constraints.
- `.planning/STATE.md` - current milestone state, recent Phase 42 validation precedent, and dirty-worktree context.

### Prior Cai Xukun Evidence

- `.planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md` - locked Cai Xukun route/source contract.
- `.planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md` - locked seven-file route-local pack, marker set, prompt/edit/QA gates, and Phase 47 handoff.
- `.planning/phases/45-cai-xukun-skill-controller-integration/45-CONTEXT.md` - locked runtime controller integration, mixed-IP routing, delivery reporting, and Phase 47 handoff.
- `.planning/phases/46-cai-xukun-public-documentation-and-release-surface/46-CONTEXT.md` - locked public docs, examples, NOTICE, release checklist, agent metadata, and Phase 47 ownership boundary.
- `.planning/phases/46-cai-xukun-public-documentation-and-release-surface/46-VERIFICATION.md` - Phase 46 green evidence and exact Phase 47 remaining handoff.
- `.planning/phases/46-cai-xukun-public-documentation-and-release-surface/46-UAT.md` - UAT evidence and command inventory for public docs, prompts, release gates, and sample-gate status.

### Phase 42 Precedent

- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-CONTEXT.md` - analogous validation matrix, Node coverage, public sample gates, release evidence, and compatibility decisions.
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-DISCUSSION-LOG.md` - options and selected strategy for the analogous final validation phase.
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-RELEASE-EVIDENCE.md` - final release evidence artifact shape to mirror for Phase 47.
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-VERIFICATION.md` - verified outcomes, final validator total, Node total, and release evidence acceptance surface.
- `.planning/phases/42-go-gopher-validation-and-release-evidence/42-UAT.md` - UAT summary for validator, Node suite, docs consistency, sample gates, and release evidence.

### Validator and Test Surfaces

- `scripts/validate-skill-package.mjs` - dependency-free validator to extend for Cai Xukun route, docs, source boundary, leakage, sample gates, generated sample gates, language allowlist, route count, and release evidence.
- `scripts/validate-skill-package.test.mjs` - Node built-in regression suite to extend for Cai Xukun parser coverage, fixtures, gate parsers, release evidence drift, and full-pass output.
- `.planning/codebase/TESTING.md` - validation model and current testing conventions.
- `.planning/codebase/STRUCTURE.md` - repository layout and placement guide.
- `.planning/codebase/CONVENTIONS.md` - Markdown, path, language, and validation conventions.

### Cai Xukun Runtime and Release Surfaces

- `skills/visual-ip-illustrations/references/routing.md` - route metadata, aliases, required references, output paths, mixed-IP groups, and delivery fields.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` - uploaded-image authority, public-figure likeness boundary, source-image context, public sample policy, review owner, and route status.
- `skills/visual-ip-illustrations/references/ips/caixukun/index.md` - route-local pack contract and shared failure categories.
- `skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md` - sparse article style, uploaded marker preservation, green-background carryover prevention, and route isolation.
- `skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md` - stylized mascot identity, action-subject rule, likeness boundary, and failure modes.
- `skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md` - article-metaphor patterns, action/object pools, anti-repeat rules, and leakage boundary.
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` - planning fields, generation prompt, edit prompts, public-figure repair, green-background repair, route leakage repair, and delivery report requirements.
- `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` - pass/fail gates, identity checks, repair moves, public sample boundary, and delivery judgment.
- `skills/visual-ip-illustrations/SKILL.md` - runtime skill controller behavior and delivery reporting.
- `skills/visual-ip-illustrations/agents/openai.yaml` - agent metadata route discovery surface.
- `README.md` and `readmes/README.*.md` - public and localized route-selection docs.
- `examples/prompts.md` - planning, generation, edit, route smoke, and mixed-IP smoke examples.
- `NOTICE.md` - Cai Xukun source boundary and public sample gate notice.
- `RELEASE_CHECKLIST.md` - Cai Xukun public asset policy, generated sample policy, final release review, and automated gate commands.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `scripts/validate-skill-package.mjs` already exposes the needed primitives: Markdown table parsing, route row lookup, reference path resolution, README variant discovery, image asset path discovery, approval-line parsers, language scan helpers, `assertIncludes`, `assertNoMarkers`, and ordered `defineCheck` entries.
- `scripts/validate-skill-package.test.mjs` already has fixture-copy helpers, validator runner helpers, route parser assertions, stable-order checks, approval parser tests, leakage fixtures, public sample gate fixtures, generated sample gate fixtures, placeholder approval tests, and full-pass output assertions.
- `RELEASE_CHECKLIST.md` already contains a Cai Xukun source review, public-figure boundary review, prompt leakage scan, public asset policy, generated sample policy, and final release review section.

### Established Patterns

- Validator checks are stable ordered `defineCheck(id, message, run)` entries.
- Public sample gates scan `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`.
- Generated sample gates distinguish internal review directories such as `assets/<article-slug>-gopher/` from public release directories; Cai Xukun should use the same distinction for `assets/<article-slug>-caixukun/`.
- Node tests assert exact stdout summaries, exact failure check IDs, and exact route-order primitives.
- The repository has no `package.json`; deterministic commands are direct `node` commands.

### Integration Points

- Route constants and route-count expectations must include `caixukun`.
- Output path tokens must include raw and escaped Cai Xukun markers.
- Language allowlist scope must treat `蔡徐坤` as an approved route alias on the relevant public/runtime surfaces.
- Public docs checks must include all README variants, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `routing.md`, and `openai.yaml`.
- Mixed-IP smoke checks must move from seven-route Go Gopher wording to eight-route wording while preserving existing Go Gopher route coverage.
- Final acceptance connects to `47-RELEASE-EVIDENCE.md`, `47-VERIFICATION.md`, and `47-UAT.md` later in the phase.

</code_context>

<specifics>
## Specific Ideas

- Original need: maintainers need one local, deterministic proof that Cai Xukun is releasable after Phases 43-46.
- Core problem: validator and Node tests currently encode the pre-Cai-Xukun route baseline, so Phase 47 should convert known diagnostics into green acceptance gates.
- Acceptance truth: Phase 47 succeeds only when validator, Node tests, diff hygiene, route smoke, uploaded-image smoke, public-figure boundary smoke, source-image context smoke, docs consistency, leakage scan, public sample gate, generated sample gate, release evidence, and dirty-worktree scope evidence all pass.
- Public sample policy: public generated Cai Xukun samples stay pending behind explicit release checklist approval.
- Route isolation policy: public docs may list Cai Xukun in route inventory, while non-Cai-Xukun route-local packs must stay free of Cai Xukun identity, source, path, and public-figure markers.
- Evidence freshness policy: `47-RELEASE-EVIDENCE.md` must contain exact command results from the final Phase 47 change set.

## Recommended Deterministic Command Strategy

Run these before implementation to capture baseline diagnostics:

```bash
git status --short
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
```

Run these after implementation and before release evidence:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Run targeted checks for evidence freshness:

```bash
rg -n "Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/|skills/visual-ip-illustrations/references/ips/caixukun/source.md" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml skills/visual-ip-illustrations/SKILL.md skills/visual-ip-illustrations/references/routing.md
rg -n "Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure|references/ips/caixukun|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/|uploaded-image authority|public-figure likeness boundary|source-image context boundary|stylized mascot-only output" skills/visual-ip-illustrations/references/ips/xiaohei skills/visual-ip-illustrations/references/ips/littlebox skills/visual-ip-illustrations/references/ips/tom skills/visual-ip-illustrations/references/ips/ferris skills/visual-ip-illustrations/references/ips/seal skills/visual-ip-illustrations/references/ips/openclaw skills/visual-ip-illustrations/references/ips/gopher skills/visual-ip-illustrations/references/*.md
find examples/images examples/images-en skills/visual-ip-illustrations/assets/examples \( -iname '*caixukun*' -o -iname '*cai*xukun*' -o -iname '*cxk*' -o -iname '*蔡徐坤*' \) -print
```

</specifics>

<risks>
## Risks

- Route metadata drift can leave `routing.md`, `SKILL.md`, public docs, and validator expectations on different route counts or route order.
- Cai Xukun identity markers can leak into other route-local packs through copied public-figure, uploaded-image, or yellow mascot language.
- Public sample gate approval can become too permissive if the validator treats pending checklist records as approval.
- Localized README parity can drift because Phase 46 intentionally updated all README variants.
- Release evidence can go stale if it is written before the final validator and Node suite pass.
- Dirty-worktree scope can blur because Phases 43-46 currently have untracked planning directories and modified source/docs in the same checkout.

</risks>

<deferred>
## Deferred Ideas

- Machine-readable route manifests remain Future Requirements `MNF-01` and `MNF-02`.
- Uploaded source-image hashing remains Future Requirement `AST-01`.
- Public-approved comparison sheets and automated visual regression remain Future Requirements `AST-02` and `AST-03`.
- Selected-IP release packaging remains Future Requirements `DIST-01` and `DIST-02`.

</deferred>

---

*Phase: 47-Cai Xukun Validation and Release Evidence*
*Context gathered: 2026-06-18*
