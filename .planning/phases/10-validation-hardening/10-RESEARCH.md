# Phase 10: Validation Hardening - Research

**Researched:** 2026-06-13 [VERIFIED: system date]
**Domain:** Dependency-free Node validator hardening for a Markdown/YAML Codex Skill package [VERIFIED: `.planning/ROADMAP.md`; `scripts/validate-skill-package.mjs`]
**Confidence:** HIGH [VERIFIED: local validator/test commands; codebase grep]

## User Constraints (from CONTEXT.md)

### Locked Decisions

## Implementation Decisions

### Validator Harness Strategy
- **D-01:** Harden the existing dependency-free validator in `scripts/validate-skill-package.mjs`.
- **D-02:** Keep the Node built-in `node:test` harness in `scripts/validate-skill-package.test.mjs`.
- **D-03:** Preserve deterministic local execution through `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`.
- **D-04:** Keep the validator local-only: it reads repository files and asset directories, with no network calls and no image-generation dependency.
- **D-05:** Preserve the current full-pass behavior while adding missing TVAL coverage. Current baseline is `Summary: total=40 passed=40 failed=0 skipped=0`.

### Validation Coverage Surfaces
- **D-06:** Treat route-table metadata as a first-class validation surface. Tom checks must cover the Tom route row, aliases, `default=false`, `output_suffix=tom`, required references, route status `gated-authorized`, and attribution context.
- **D-07:** Treat Tom canonical pack markers as a first-class validation surface. Checks must cover pack files, prompt placeholders, QA markers, rights-boundary markers, protected-route markers, and stable output path reminders.
- **D-08:** Treat public docs, metadata, NOTICE, and release gates as first-class validation surfaces. Checks must cover `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, Tom smoke prompts, and raw plus escaped output path tokens.
- **D-09:** Treat route leakage as a first-class validation surface. Xiaohei and Littlebox packs must stay free of Tom identity rules and Warner rights text.
- **D-10:** Treat public rendered Tom asset gating as a first-class validation surface. Public example directories must be scanned for Tom-rendered asset names while the release checklist keeps public-sample approval pending.

### Test Coverage Strategy
- **D-11:** Keep tests focused on validator behavior and failure diagnostics, using temporary repository fixtures where mutation is needed.
- **D-12:** Node tests must cover three-route parser behavior, stable check ordering, actionable Tom failure messages, and full pass output.
- **D-13:** Add targeted fixture mutations for Tom route, Tom pack, docs, release checklist, leakage, and public asset gates so failures prove check IDs and repo-relative paths.
- **D-14:** Keep output stable and actionable for maintainers: deterministic check ordering, stable check IDs, repo-relative paths, missing marker/item wording, and a final summary line.

### Helper Extraction Boundary
- **D-15:** Favor small helper extraction inside `scripts/validate-skill-package.mjs` when it improves parser reuse, marker grouping, route-pack scanning, leakage checks, or fixture testability.
- **D-16:** Keep helper extraction subordinate to validation clarity. The validator remains a lightweight script, not a new framework or package.
- **D-17:** Preserve existing exported parser/helper primitives used by tests, including frontmatter parsing, simple YAML parsing, Markdown table parsing, Markdown link parsing, output path tokens, safe path handling, and filesystem helpers.

### Scope Fence
- **D-18:** Phase 10 may edit only validation implementation, validator tests, and any release/docs marker text needed strictly to satisfy TVAL checks during the execution phase.
- **D-19:** This discussion task edits only `.planning/phases/10-validation-hardening/10-CONTEXT.md`, `.planning/phases/10-validation-hardening/10-DISCUSSION-LOG.md`, and `.planning/STATE.md`.
- **D-20:** Legal authorization approval, Tom route-status changes, public rendered Tom sample publication, broader cast support, and visual likeness judgment remain maintainer or future-phase concerns.

### the agent's Discretion

- Auto mode was explicitly requested, so all gray areas were auto-selected and resolved with the conservative validator-hardening path already implied by Phases 6-9.
- Subagent tooling was requested but was unavailable in this Codex runtime after tool discovery. The analysis was completed inline using the required project, roadmap, prior context, verification/UAT artifacts, old Phase 4 validation artifacts, current validator files, route files, Tom pack, public docs, metadata, NOTICE, and release checklist.
- The planner may choose exact check ID names and grouping, provided the resulting validator output remains deterministic, local-only, and actionable.

### Deferred Ideas (OUT OF SCOPE)

- Public rendered Tom sample approval remains a maintainer release decision recorded in `RELEASE_CHECKLIST.md`.
- Changing Tom route status away from `gated-authorized` remains gated by `ian-xiaohei-illustrations/references/ips/tom/rights.md` and release checklist approval.
- Automated visual likeness judgment remains outside v1.1; Phase 10 validates objective repository markers and deterministic local outputs.
- Broader protected-IP manifest support, additional protected IPs, and generated visual regression checks remain v2 requirements.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| TVAL-01 | Maintainer can run the local validator successfully after v1.1 roadmap initialization clears prior phase working directories. [VERIFIED: `.planning/REQUIREMENTS.md`] | Current baseline passes with `Summary: total=40 passed=40 failed=0 skipped=0`; planner should keep this command green after adding checks. [VERIFIED: `node scripts/validate-skill-package.mjs`] |
| TVAL-02 | Validator checks Tom route row, aliases, default false, output suffix, required references, route status, and attribution context. [VERIFIED: `.planning/REQUIREMENTS.md`] | `ROUTE-TOM-001`, `ROUTE-DEFAULT-001`, `ROUTE-REFS-001`, and `ROUTE-PATHS-001` already cover the core row; planner should add parser fixture tests that fail on Tom row corruption. [VERIFIED: `scripts/validate-skill-package.mjs`; `scripts/validate-skill-package.test.mjs`] |
| TVAL-03 | Validator checks Tom canonical pack files, prompt placeholders, QA markers, and rights-boundary markers. [VERIFIED: `.planning/REQUIREMENTS.md`] | `RIGHTS-TOM-001` covers rights headings, while Tom pack prompt/QA/composition markers need dedicated checks. [VERIFIED: `scripts/validate-skill-package.mjs`; `ian-xiaohei-illustrations/references/ips/tom/*.md`] |
| TVAL-04 | Validator checks README, examples, agent metadata, NOTICE, release checklist, raw/escaped Tom output path tokens, and Tom smoke prompts. [VERIFIED: `.planning/REQUIREMENTS.md`] | `DOC-TOM-001`, `NOTICE-TOM-001`, `RELEASE-TOM-001`, `DOC-PATHS-001`, and `AGENT-SHAPE-001` cover broad markers; planner should add narrower Tom docs, metadata, and smoke checks after Phase 9 updates. [VERIFIED: `scripts/validate-skill-package.mjs`; Phase 9 verification] |
| TVAL-05 | Validator checks Tom leakage boundaries so Xiaohei and Littlebox packs stay free of Tom identity rules and Warner rights text. [VERIFIED: `.planning/REQUIREMENTS.md`] | Current validator scans public asset names but lacks a dedicated text-leakage check across Xiaohei/Littlebox packs and legacy Xiaohei roots. [VERIFIED: `scripts/validate-skill-package.mjs`; `rg` leakage scan] |
| TVAL-06 | Validator checks public example asset directories for Tom-rendered assets unless release checklist has explicit public-sample approval. [VERIFIED: `.planning/REQUIREMENTS.md`] | `BOUNDARY-TOM-IMG-001` scans `examples/images` and skill-local examples while `PENDING / reviewer / date` is present; planner should harden approval-marker parsing and add fixture coverage. [VERIFIED: `scripts/validate-skill-package.mjs`; `RELEASE_CHECKLIST.md`; asset directory listing] |
| TVAL-07 | Node validator tests cover three-route parser behavior, stable check ordering, Tom failure messages, and full pass output. [VERIFIED: `.planning/REQUIREMENTS.md`] | Current 8 tests cover stable order, parser basics, Tom rights failure, and full 40-check output; planner should add targeted fixture mutations for Tom route, Tom pack, docs, leakage, public assets, and approval parsing. [VERIFIED: `scripts/validate-skill-package.test.mjs`; `node --test scripts/validate-skill-package.test.mjs`] |
</phase_requirements>

## Summary

Phase 10 should preserve the dependency-free Node validator and built-in `node:test` suite while adding narrow Tom-specific checks and fixture mutations. [VERIFIED: `10-CONTEXT.md`; `scripts/validate-skill-package.mjs`; `scripts/validate-skill-package.test.mjs`] The current baseline is healthy: the validator emits 40 PASS lines and `Summary: total=40 passed=40 failed=0 skipped=0`, and the test suite reports 8 passing tests. [VERIFIED: local command output]

The strongest planning insight is that most Phase 10 target markers already exist after Phases 6-9, so execution should harden detection rather than rewrite docs. [VERIFIED: Phase 6-9 verification artifacts; `rg` marker scans] The minimal plan is to add dedicated check groups for Tom pack markers, public docs/metadata smoke markers, route leakage text scans, approval-marker parsing, and public asset fixture failures. [VERIFIED: `10-CONTEXT.md`; `scripts/validate-skill-package.mjs`]

**Primary recommendation:** add small helper-backed validator checks and targeted fixture tests, preserve existing check IDs and ordering anchors, and update expected counts only after the new ordered check IDs are finalized. [VERIFIED: current check array and test requiredCheckIds]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Validator execution | Local CLI / Script | Filesystem | `scripts/validate-skill-package.mjs` reads repository files and directories and prints deterministic PASS/FAIL/SKIP lines. [VERIFIED: script source] |
| Route metadata validation | Markdown parser | Filesystem | `parseMarkdownTable()` reads the `IP Routes` table in `references/routing.md`. [VERIFIED: script source; `routing.md`] |
| Tom pack validation | Filesystem marker checks | Markdown references | Tom pack files already contain route status, prompt fields, QA markers, protected-route gates, and output path reminders. [VERIFIED: Tom pack files] |
| Public docs validation | Filesystem marker checks | Markdown/YAML parser | README, examples, NOTICE, release checklist, and `openai.yaml` hold route, metadata, path, smoke, and release-gate markers. [VERIFIED: public docs; script source] |
| Regression testing | Node built-in test runner | Temporary fixtures | `scripts/validate-skill-package.test.mjs` uses `node:test`, `spawnSync`, and temporary copied fixtures to test output and failures. [VERIFIED: test source] |
| Image generation and visual likeness | Host runtime / Manual review | Release checklist | Phase 10 validates objective text/package markers and leaves visual likeness and public-sample approval to human release gates. [VERIFIED: `10-CONTEXT.md`; `RELEASE_CHECKLIST.md`] |

## Current Coverage Matrix

| Requirement | Current Coverage | Gap After Phase 9 | Planner Action |
|-------------|------------------|-------------------|----------------|
| TVAL-01 | Covered by current validator command passing with 40 checks. [VERIFIED: local command output] | New Phase 10 checks will change the total count and require tests to track the new count. [VERIFIED: test expected count currently 40] | Keep command `node scripts/validate-skill-package.mjs` green and update full-pass expected summary after new checks land. [VERIFIED: `scripts/validate-skill-package.test.mjs`] |
| TVAL-02 | Mostly covered by route checks: `ROUTE-TOM-001`, `ROUTE-DEFAULT-001`, `ROUTE-REFS-001`, `ROUTE-PATHS-001`, and parser helper assertions. [VERIFIED: script/test source] | Current Tom failure fixture mutates only `rights.md`, so route parser failure diagnostics need fixture coverage. [VERIFIED: test source] | Add route fixture tests for missing alias/status/default/suffix/reference and assert check ID plus repo-relative path. [VERIFIED: current fixture pattern] |
| TVAL-03 | Partially covered by `RIGHTS-TOM-001` and route reference list. [VERIFIED: script source] | Tom `index.md`, `prompt-template.md`, `qa-checklist.md`, `style-dna.md`, `tom-ip.md`, and `composition-patterns.md` markers lack dedicated checks. [VERIFIED: script source; Tom pack files] | Add `REFS-TOM-*`, `PROMPT-TOM-*`, `IP-TOM-*`, and `QA-TOM-*` checks with exact marker arrays. [VERIFIED: Tom pack files] |
| TVAL-04 | Broad docs covered by `DOC-PATHS-001`, `DOC-ROUTES-001`, `DOC-TOM-001`, `NOTICE-TOM-001`, `RELEASE-TOM-001`, and `AGENT-SHAPE-001`. [VERIFIED: script source] | Agent metadata only checks generic YAML shape; Tom smoke prompts are covered by broad string presence rather than named smoke blocks. [VERIFIED: script source; examples file] | Add `AGENT-TOM-001`, `SMOKE-TOM-001`, and a Tom release/docs marker check split by file. [VERIFIED: public docs] |
| TVAL-05 | Leakage intent exists in docs and release checklist. [VERIFIED: `10-CONTEXT.md`; `RELEASE_CHECKLIST.md`] | Validator lacks route-local text leakage checks for Xiaohei/Littlebox packs and legacy roots. [VERIFIED: script source] | Add `BOUNDARY-TOM-LEAK-001` scanning Xiaohei/Littlebox/legacy roots for Tom identity and Warner-rights markers; allow `routing.md` as the route metadata exception. [VERIFIED: `rg` leakage scan] |
| TVAL-06 | `BOUNDARY-TOM-IMG-001` scans `examples/images` and `ian-xiaohei-illustrations/assets/examples` for Tom-named files while checklist approval is pending. [VERIFIED: script source; asset listing] | Approval is detected by broad `includes("PENDING / reviewer / date")`, and tests lack fixture coverage for Tom asset failure and approved-state behavior. [VERIFIED: script/test source] | Add explicit public-sample approval parser and tests for pending-with-asset failure plus approved-with-record behavior. [VERIFIED: `RELEASE_CHECKLIST.md`] |
| TVAL-07 | Current tests cover stable order, failure aggregation, Task 2 failures, Tom rights failure, full pass output, and parser helpers. [VERIFIED: test source; test command output] | Tests do not yet cover Tom route parser mutation, Tom pack marker mutation, docs/smoke mutation, leakage mutation, public asset mutation, or approval parsing. [VERIFIED: test source] | Add focused `node:test` cases using temporary copied fixtures and update `requiredCheckIds` in final validator order. [VERIFIED: current fixture pattern] |

## Standard Stack

### Core

| Library / Runtime | Version | Purpose | Why Standard |
|-------------------|---------|---------|--------------|
| Node.js | v24.13.0 in current environment [VERIFIED: `node --version`] | Execute the validator and built-in test runner. [VERIFIED: local commands] | Already used by repository scripts and requires no package install. [VERIFIED: script/test source] |
| `node:test` | bundled with Node v24.13.0 [VERIFIED: `node --test scripts/validate-skill-package.test.mjs`] | Run validator regression tests. [VERIFIED: test source] | Current suite already uses it with 8 passing tests. [VERIFIED: test command output] |
| Node built-ins: `fs`, `path`, `process`, `child_process`, `os`, `assert/strict` | bundled with Node v24.13.0 [VERIFIED: script/test imports] | Filesystem reads, path safety, subprocess execution, temp fixtures, and assertions. [VERIFIED: script/test source] | Fits the no-build-runtime constraint and avoids external dependencies. [VERIFIED: `.planning/PROJECT.md`; script/test source] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Git | 2.50.1 (Apple Git-155) [VERIFIED: `git --version`] | Diff, whitespace check, and commit. [VERIFIED: local command] | Use for final documentation commit and execution-phase verification. [VERIFIED: task request] |
| ripgrep (`rg`) | available in environment [VERIFIED: successful `rg` commands] | Source marker and leakage audits. [VERIFIED: local command output] | Use for research and spot-checks; keep validator itself dependency-free. [VERIFIED: `10-CONTEXT.md`] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Dependency-free marker validator [VERIFIED: current script] | YAML/Markdown parser packages [ASSUMED] | Would improve parsing edge cases but add package legitimacy, install, and runtime overhead that conflicts with the lightweight skill-package constraint. [VERIFIED: `.planning/PROJECT.md`; ASSUMED parser-package tradeoff] |
| `node:test` [VERIFIED: current tests] | Jest/Vitest [ASSUMED] | Would provide richer assertions but introduce package/config maintenance for a repo that currently has no package manifest. [VERIFIED: `.planning/PROJECT.md`; ASSUMED test-runner tradeoff] |

**Installation:** No package installation is required for Phase 10. [VERIFIED: no `package.json`; current commands use Node built-ins]

## Package Legitimacy Audit

Phase 10 should install no external packages. [VERIFIED: `10-CONTEXT.md`; `.planning/PROJECT.md`] Package Legitimacy Gate is skipped because the recommended stack uses Node built-ins already available in the local environment. [VERIFIED: script/test imports; local command output]

## Architecture Patterns

### System Architecture Diagram

```text
Maintainer CLI
  |
  v
node scripts/validate-skill-package.mjs
  |
  +--> ordered checks array
  |      |
  |      +--> package shape / SKILL.md / openai.yaml
  |      +--> routing.md table parser
  |      +--> Xiaohei + Littlebox + Tom reference marker checks
  |      +--> README / examples / NOTICE / RELEASE_CHECKLIST checks
  |      +--> leakage and public asset boundary checks
  |
  v
Results renderer
  |
  +--> [PASS|FAIL|SKIP] CHECK-ID message lines
  +--> Summary: total=N passed=N failed=0 skipped=0
  |
  v
node --test scripts/validate-skill-package.test.mjs
  |
  +--> spawn real validator
  +--> mutate temporary fixture repos
  +--> assert check ordering, failure messages, parser behavior, and full pass counts
```

### Recommended Project Structure

```text
scripts/
+-- validate-skill-package.mjs       # validator implementation and exported helpers [VERIFIED: repo]
`-- validate-skill-package.test.mjs  # node:test regression suite [VERIFIED: repo]

ian-xiaohei-illustrations/
+-- SKILL.md                         # route controller and output contract [VERIFIED: repo]
+-- agents/openai.yaml               # agent metadata [VERIFIED: repo]
`-- references/
    +-- routing.md                   # route table source [VERIFIED: repo]
    `-- ips/tom/*.md                 # Tom route-local pack [VERIFIED: repo]
```

### Pattern 1: Ordered Check Registry

**What:** Keep checks in one ordered `checks` array using stable uppercase check IDs. [VERIFIED: `scripts/validate-skill-package.mjs`]

**When to use:** Use for every new validator assertion so output order remains deterministic and tests can assert exact ID order. [VERIFIED: current tests assert ordered output]

**Example:**

```javascript
defineCheck("ROUTE-TOM-001", "routing.md preserves the Tom gated route contract", () => {
  const row = routeById("tom");
  // marker assertions...
});
```

Source: `scripts/validate-skill-package.mjs` [VERIFIED: codebase]

### Pattern 2: Exact Marker Arrays With Repo-Relative Failure Paths

**What:** Validate concrete marker arrays with `assertIncludes()` and `assertArrayIncludes()` so failures name missing items. [VERIFIED: script source]

**When to use:** Use for Tom planning fields, QA categories, release checklist gates, smoke prompt blocks, and metadata wording. [VERIFIED: current helper use]

**Example:**

```javascript
assertIncludes(requireFile(relativePath), relativePath, [
  "Placement: [where this image appears in the article]",
  "Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]",
  "Rights-status note: Tom is a `gated-authorized` protected-character route",
], "Tom planning output fields");
```

Source: existing helper style plus Tom prompt markers [VERIFIED: script source; Tom prompt template]

### Pattern 3: Temporary Fixture Mutation Tests

**What:** Copy the repository to a temp directory, mutate one target marker, run the validator from the fixture, assert nonzero exit and check-specific diagnostics. [VERIFIED: test source]

**When to use:** Use for every risky new validator surface where broad regex checks could hide false positives. [VERIFIED: current fixture tests]

**Example:**

```javascript
const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-tom-pack-${process.pid}-${Date.now()}`);
cpSync(repoRoot, fixtureRoot, { recursive: true, filter: withoutGit });
// mutate one Tom pack marker
const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
  cwd: fixtureRoot,
  encoding: "utf8",
});
assert.equal(result.status, 1);
assert.match(result.stdout, /\[FAIL\] PROMPT-TOM-001 /);
```

Source: `scripts/validate-skill-package.test.mjs` [VERIFIED: codebase]

### Anti-Patterns to Avoid

- **Broad combined regex as proof:** A single `rg`-style OR check can pass when only one marker exists; use exact marker arrays per file. [VERIFIED: current `assertIncludes()` pattern; `rg` command behavior]
- **Generic Tom marker count:** Counting occurrences of `Tom` can miss missing aliases, rights pointer, or path tokens; validate each expected marker. [VERIFIED: route/docs marker scans]
- **Hidden total-count drift:** Adding checks without updating `requiredCheckIds` will fail the full matrix test or weaken it if assertions are loosened. [VERIFIED: current full-pass test]
- **Approval substring ambiguity:** Treating `PENDING / reviewer / date` as the full public-sample policy can miss approved records or stale partial text; parse the public asset policy line explicitly. [VERIFIED: current `BOUNDARY-TOM-IMG-001`; `RELEASE_CHECKLIST.md`]

## Recommended Plan Split

| Plan | Write Scope | Purpose | Verification |
|------|-------------|---------|--------------|
| 10-01 Validator Tom Pack and Docs Checks | `scripts/validate-skill-package.mjs` only | Add narrow checks for Tom canonical pack markers, Tom docs/metadata/smoke markers, leakage scans, and explicit public-sample approval parsing. [VERIFIED: `10-CONTEXT.md`] | `node scripts/validate-skill-package.mjs`; `git diff --check` [VERIFIED: current commands] |
| 10-02 Validator Regression Tests | `scripts/validate-skill-package.test.mjs` only | Add fixture mutation tests for route parser behavior, Tom pack failures, docs/smoke failures, leakage failures, asset gate failures, approval parsing, stable order, and full-pass output. [VERIFIED: `10-CONTEXT.md`; current test pattern] | `node --test scripts/validate-skill-package.test.mjs`; `node scripts/validate-skill-package.mjs` [VERIFIED: current commands] |
| 10-03 Marker Repair Only If Needed | Specific docs marker file discovered by Plan 10-01, if any | Repair missing stable marker text only when a new precise check exposes an actual marker gap. [VERIFIED: `D-18` scope fence] | Re-run both commands and include the exact failed check ID in the summary. [VERIFIED: validator output pattern] |

The write scopes should remain disjoint: Plan 10-01 changes the validator implementation, Plan 10-02 changes tests, and Plan 10-03 touches docs only for a proven marker gap. [VERIFIED: `10-CONTEXT.md`]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Markdown route table extraction | A route-specific string splitter for Tom only [ASSUMED] | Existing `parseMarkdownTable()` and `routeById()` helpers [VERIFIED: script source] | Current helpers already parse all three routes and are tested. [VERIFIED: test source] |
| YAML metadata checks | A full YAML parser [ASSUMED] | Existing `parseSimpleYamlShape()` for shallow metadata [VERIFIED: script source] | `openai.yaml` uses a simple nested shape that the existing parser handles. [VERIFIED: `openai.yaml`; test source] |
| Fixture repo creation | Custom shell scripts [ASSUMED] | Existing `cpSync`, `tmpdir`, `spawnSync`, and cleanup pattern [VERIFIED: test source] | Current tests already use this pattern for mutation-based diagnostics. [VERIFIED: test source] |
| Public asset inventory | New manifest format [ASSUMED] | Existing sorted directory scan over `examples/images` and skill-local examples [VERIFIED: script source] | v2 requirements defer asset manifests and visual regression. [VERIFIED: `.planning/REQUIREMENTS.md`] |

**Key insight:** Phase 10 needs stronger deterministic text/package validation, not a new validation framework. [VERIFIED: `10-CONTEXT.md`; `.planning/PROJECT.md`]

## Common Pitfalls

### Pitfall 1: False Positives From Broad Marker Checks

**What goes wrong:** A combined docs check passes because one file contains a marker while the required file-specific surface is missing it. [VERIFIED: current broad `DOC-TOM-001`; Phase 9 docs split]

**Why it happens:** `combinedText(["README.md", "examples/prompts.md"])` loses file-level provenance. [VERIFIED: script source]

**How to avoid:** Add file-specific checks for README, examples Tom smoke, agent metadata, NOTICE, and release checklist. [VERIFIED: public docs]

**Warning signs:** Failure messages name `README.md + examples/prompts.md` rather than the missing file. [VERIFIED: script source]

### Pitfall 2: Stale Docs Assumptions After Phase 9

**What goes wrong:** The validator assumes Phase 6 docs wording while Phase 9 has expanded public route, smoke, metadata, and release surfaces. [VERIFIED: Phase 6 and Phase 9 verification artifacts]

**Why it happens:** The current full-pass test still describes the "Phase 6 matrix" and expects exactly 40 checks. [VERIFIED: test source]

**How to avoid:** Rename the full-pass test intent to Phase 10/v1.1 matrix and update expected IDs/counts in the same change as new checks. [VERIFIED: test source]

**Warning signs:** The summary remains `total=40` after new TVAL checks are supposedly implemented. [VERIFIED: current command output]

### Pitfall 3: Public Sample Approval Marker Ambiguity

**What goes wrong:** A Tom asset file could be accepted or rejected based on a stale pending substring rather than an explicit approval record. [VERIFIED: current `BOUNDARY-TOM-IMG-001`; release checklist]

**Why it happens:** Current logic uses `releaseChecklist.includes("PENDING / reviewer / date")`. [VERIFIED: script source]

**How to avoid:** Parse the public rendered Tom samples approval line and require explicit approved status, reviewer, date, allowed directories, and release channels before allowing matching assets. [VERIFIED: `RELEASE_CHECKLIST.md` fields]

**Warning signs:** A fixture with a fake Tom asset lacks a failing check ID, or an approved-state fixture passes without complete approval fields. [VERIFIED: missing current tests]

### Pitfall 4: Leakage Checks That Scan the Wrong Surfaces

**What goes wrong:** A leakage check flags `routing.md` or Tom pack files where Tom wording belongs, or it misses legacy Xiaohei roots. [VERIFIED: `rg` leakage scan; routing.md]

**Why it happens:** The route metadata file intentionally contains all route names, while leakage requirements target Xiaohei/Littlebox route-local packs and legacy roots. [VERIFIED: TVAL-05; `10-CONTEXT.md`]

**How to avoid:** Scope leakage scans to `references/ips/xiaohei/`, `references/ips/littlebox/`, and legacy Xiaohei root references; keep `routing.md`, `SKILL.md`, docs, and Tom pack out of that negative scan. [VERIFIED: project structure; script source]

**Warning signs:** A leakage test fails because `references/routing.md` mentions Tom. [VERIFIED: routing.md]

## Code Examples

### Tom Route Parser Fixture

```javascript
// Source: scripts/validate-skill-package.test.mjs pattern [VERIFIED: codebase]
const routingPath = path.join(fixtureRoot, "ian-xiaohei-illustrations", "references", "routing.md");
writeFileSync(
  routingPath,
  readFileSync(routingPath, "utf8").replace("`Tom Cat`, ", ""),
  "utf8",
);

const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
  cwd: fixtureRoot,
  encoding: "utf8",
});

assert.equal(result.status, 1);
assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
```

### Tom Pack Marker Check

```javascript
// Source: existing assertIncludes helper style + Tom prompt markers [VERIFIED: codebase]
defineCheck("PROMPT-TOM-001", "Tom prompt template preserves planning fields and rights-status note", () => {
  const relativePath = path.join(REFERENCES_DIR, "ips", "tom", "prompt-template.md");
  assertIncludes(requireFile(relativePath), relativePath, [
    "Placement: [where this image appears in the article]",
    "Core idea: [one sentence]",
    "Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]",
    "Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]",
    "Tom action: [the physical cognitive action Tom performs]",
    "Supporting objects: [1-2 objects",
    "Visible labels: [\"short label 1\"",
    "Output path: assets/<article-slug>-tom/",
    "Rights-status note: Tom is a `gated-authorized` protected-character route",
  ], "Tom planning fields, output path, and rights-status note");
});
```

### Leakage Scan Helper

```javascript
// Source: Phase 10 leakage scope and existing combinedText helper [VERIFIED: 10-CONTEXT.md; codebase]
const tomLeakageMarkers = [
  "Tom from Tom and Jerry",
  "Warner Bros",
  "gated-authorized",
  "default Jerry usage",
  "broad cast expansion",
  "show logos",
  "title cards",
  "references/ips/tom/rights.md",
];

const scopedFiles = [
  ...xiaoheiOperationalRefs(),
  ...littleboxOperationalRefs(),
  ...legacyXiaoheiRefs().map((item) => item.root),
];

for (const relativePath of scopedFiles) {
  const found = tomLeakageMarkers.filter((marker) => requireFile(relativePath).includes(marker));
  if (found.length > 0) {
    throw new Error(`${relativePath} expected no Tom protected-route leakage; observed marker(s): ${found.join(", ")}`);
  }
}
```

## Validator Output Ordering and Check ID Conventions

Existing check IDs are uppercase domain prefixes plus three-digit numbers, for example `ROUTE-TOM-001`, `NOTICE-TOM-001`, and `BOUNDARY-TOM-IMG-001`. [VERIFIED: script source] Keep existing IDs stable and append new IDs near their domain group in the ordered `checks` array. [VERIFIED: current tests assert order]

Recommended new IDs: [VERIFIED: derived from existing naming conventions]

| New ID | Placement | Purpose |
|--------|-----------|---------|
| `REFS-TOM-001` | after `REFS-LB-001` | Tom canonical pack files exist and are readable. [VERIFIED: Tom pack files] |
| `PROMPT-TOM-001` | after `PROMPT-LB-002` | Tom planning fields, single-image generation markers, output path, and rights-status note. [VERIFIED: Tom prompt template] |
| `IP-TOM-001` | after `IP-LB-001` | Tom identity, action, style, composition, and protected-route markers across Tom pack. [VERIFIED: Tom pack files] |
| `QA-TOM-001` | after `IP-TOM-001` | Tom QA failure categories and edit repair gates. [VERIFIED: Tom QA checklist] |
| `AGENT-TOM-001` | after `AGENT-SHAPE-001` or docs group | openai.yaml names three routes, Xiaohei default, and explicit gated Tom. [VERIFIED: openai.yaml] |
| `SMOKE-TOM-001` | after `SMOKE-LB-001` | Tom planning, generation, and route-status smoke prompt blocks. [VERIFIED: examples/prompts.md] |
| `BOUNDARY-TOM-LEAK-001` | before `BOUNDARY-TOM-IMG-001` | Xiaohei/Littlebox/legacy references are free of Tom protected-route text. [VERIFIED: TVAL-05; `rg` scan] |

The full-pass output should remain one line per check followed by one summary line. [VERIFIED: `Results.render()`] After adding seven recommended checks, the expected full-pass count would become 47 if no existing checks are removed. [VERIFIED: current 40 checks + recommended 7]

## Regression Tests to Add

| Test | Fixture Mutation | Expected Assertion |
|------|------------------|--------------------|
| Tom route parser rejects alias/default/status drift | Remove `Tom Cat`, change `default=false`, or change `gated-authorized` in `routing.md`. [VERIFIED: route table] | Nonzero exit, `ROUTE-TOM-001`, repo-relative `routing.md`, missing marker/item wording. [VERIFIED: current failure style] |
| Tom pack prompt marker failure | Remove `Rights-status note` or `Output path: assets/<article-slug>-tom/` from Tom prompt template. [VERIFIED: Tom prompt template] | Nonzero exit and `PROMPT-TOM-001`. [VERIFIED: recommended ID] |
| Tom QA marker failure | Remove `default Jerry usage` or `route leakage` from `qa-checklist.md`. [VERIFIED: Tom QA checklist] | Nonzero exit and `QA-TOM-001`. [VERIFIED: recommended ID] |
| Tom docs smoke failure | Remove the `route smoke check` block or `Public rendered Tom samples` gate sentence from `examples/prompts.md`. [VERIFIED: examples/prompts.md] | Nonzero exit and `SMOKE-TOM-001`. [VERIFIED: recommended ID] |
| Agent metadata failure | Remove Tom or `gated-authorized` from `openai.yaml`. [VERIFIED: openai.yaml] | Nonzero exit and `AGENT-TOM-001`. [VERIFIED: recommended ID] |
| Leakage failure | Add `Tom from Tom and Jerry` or `Warner Bros` to a Xiaohei or Littlebox pack file. [VERIFIED: leakage scope] | Nonzero exit and `BOUNDARY-TOM-LEAK-001`. [VERIFIED: recommended ID] |
| Pending public asset failure | Add `examples/images/99-tom-test.png` while checklist line remains pending. [VERIFIED: current asset gate] | Nonzero exit and `BOUNDARY-TOM-IMG-001`. [VERIFIED: current ID] |
| Approval parser behavior | Replace pending public-sample line with a complete approved record and add a Tom-named fixture asset. [VERIFIED: release checklist fields] | Exit behavior matches explicit parser policy; assertion documents the approved record fields. [VERIFIED: TVAL-06] |
| Full pass output | Run validator in real repo after all checks. [VERIFIED: current full-pass test] | `resultLines.length === requiredCheckIds.length`, all lines `[PASS]`, exact ID order, summary total equals ID count. [VERIFIED: current test source] |

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Phase 4 boundary repair around Phase 5 docs ownership [VERIFIED: Phase 4 research/context] | Phase 10 validator hardening for three-route protected-IP package [VERIFIED: roadmap] | v1.1 Phase 10 [VERIFIED: `.planning/ROADMAP.md`] | Planning should focus on Tom-specific route, pack, docs, leakage, public asset, and test coverage. [VERIFIED: `10-CONTEXT.md`] |
| Phase 6-era Tom contract checks with 40 total checks [VERIFIED: Phase 6 verification; current output] | Phase 10 should add narrow v1.1 checks after Phase 9 docs are complete [VERIFIED: Phase 9 verification; `10-CONTEXT.md`] | After Phase 9 completion on 2026-06-12 [VERIFIED: Phase 9 verification] | Expected check count should increase, and tests must lock the new order. [VERIFIED: test source] |
| Broad combined docs checks [VERIFIED: script source] | File-specific docs, metadata, smoke, release, and approval checks [VERIFIED: research recommendation] | Phase 10 planned [VERIFIED: task request] | Reduces false positives and improves failure messages. [VERIFIED: current failure-message pattern] |

**Deprecated/outdated:**
- The test name `validator emits the full Phase 6 matrix with zero failures` is stale for Phase 10 planning because Phase 10 owns the v1.1 validation matrix. [VERIFIED: test source; roadmap]
- The current `BOUNDARY-TOM-IMG-001` approval detection via `includes("PENDING / reviewer / date")` is too broad for TVAL-06 hardening. [VERIFIED: script source; requirements]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and tests | yes [VERIFIED: `node --version`] | v24.13.0 [VERIFIED: local command] | None needed; project already uses Node scripts. [VERIFIED: current commands] |
| Git | Commit and diff checks | yes [VERIFIED: `git --version`] | 2.50.1 (Apple Git-155) [VERIFIED: local command] | None needed. [VERIFIED: local command] |
| ripgrep | Research scans | yes [VERIFIED: successful `rg` scans] | not captured [VERIFIED: command availability] | Use Node or shell grep for execution-phase audits if unavailable. [ASSUMED fallback] |

**Missing dependencies with no fallback:** None found. [VERIFIED: local command output]

**Missing dependencies with fallback:** None required for planned implementation. [VERIFIED: no external dependency plan]

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Node built-in `node:test` under Node v24.13.0 [VERIFIED: test imports; `node --version`] |
| Config file | none; tests are run directly by script path. [VERIFIED: repository has no package/test config; command output] |
| Quick run command | `node scripts/validate-skill-package.mjs` [VERIFIED: current command] |
| Full suite command | `node --test scripts/validate-skill-package.test.mjs` [VERIFIED: current command] |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|--------------|
| TVAL-01 | Validator passes after roadmap reset and Phase 9 docs. [VERIFIED: requirements; command output] | smoke | `node scripts/validate-skill-package.mjs` | yes [VERIFIED: repo] |
| TVAL-02 | Tom route parser checks row, aliases, default, suffix, references, status, attribution. [VERIFIED: requirements; script source] | unit/fixture | `node --test scripts/validate-skill-package.test.mjs` | partial; add fixture mutation. [VERIFIED: test source] |
| TVAL-03 | Tom canonical pack checks files, prompt, QA, rights markers. [VERIFIED: requirements; Tom pack] | unit/fixture | `node --test scripts/validate-skill-package.test.mjs` | partial; add Tom pack tests. [VERIFIED: test source] |
| TVAL-04 | Public docs, metadata, NOTICE, checklist, paths, smoke prompts. [VERIFIED: requirements; Phase 9 verification] | unit/fixture | `node --test scripts/validate-skill-package.test.mjs` | partial; add docs/smoke/metadata tests. [VERIFIED: test source] |
| TVAL-05 | Tom leakage boundaries in Xiaohei/Littlebox packs. [VERIFIED: requirements] | unit/fixture | `node --test scripts/validate-skill-package.test.mjs` | missing; add leakage fixture test. [VERIFIED: test source] |
| TVAL-06 | Public Tom asset gate with explicit approval policy. [VERIFIED: requirements; script source] | unit/fixture | `node --test scripts/validate-skill-package.test.mjs` | partial; add asset and approval parser tests. [VERIFIED: test source] |
| TVAL-07 | Three-route parser behavior, stable ordering, Tom failure messages, full pass output. [VERIFIED: requirements; test source] | unit/integration | `node --test scripts/validate-skill-package.test.mjs` | partial; extend current 8 tests. [VERIFIED: test source] |

### Current Expected Counts

- Current validator: `Summary: total=40 passed=40 failed=0 skipped=0`. [VERIFIED: local command output]
- Current tests: `tests 8`, `pass 8`, `fail 0`. [VERIFIED: local command output]
- Recommended post-hardening validator count: 47 if the seven recommended new checks are added and none are removed. [VERIFIED: arithmetic from current count and recommended IDs]
- Post-hardening test count should increase by at least 7 fixture tests, then the exact count should be locked in `node --test` output in Phase 10 summaries. [VERIFIED: recommended regression table; ASSUMED minimum count]

### Sampling Rate

- **Per task commit:** `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: current commands]
- **Per wave merge:** same two commands plus `git diff --check`. [VERIFIED: release checklist]
- **Phase gate:** validator summary has failed=0, Node tests fail=0, and full-pass test expected IDs match the validator output order. [VERIFIED: current output/test source]

### Wave 0 Gaps

- [ ] Add Tom pack validator checks in `scripts/validate-skill-package.mjs`. [VERIFIED: current script gap]
- [ ] Add Tom docs/metadata/smoke validator checks in `scripts/validate-skill-package.mjs`. [VERIFIED: current script gap]
- [ ] Add route leakage and public approval parser checks in `scripts/validate-skill-package.mjs`. [VERIFIED: current script gap]
- [ ] Add fixture mutation tests in `scripts/validate-skill-package.test.mjs`. [VERIFIED: current test gap]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no [VERIFIED: no app/auth runtime in project docs] | None; repo is a local skill package. [VERIFIED: `.planning/PROJECT.md`] |
| V3 Session Management | no [VERIFIED: no service/session runtime in project docs] | None; local validator reads files. [VERIFIED: script source] |
| V4 Access Control | no [VERIFIED: no service/API runtime in project docs] | Scope fences and local path safety helpers. [VERIFIED: `safePackagePath()`; `safeReferencePath()`] |
| V5 Input Validation | yes [VERIFIED: parser and path helpers] | Parse Markdown/YAML with constrained helpers and validate safe repo-relative paths. [VERIFIED: script source] |
| V6 Cryptography | no [VERIFIED: no crypto use in scripts] | None. [VERIFIED: script imports] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Path traversal through route references [VERIFIED: validator path helpers] | Tampering | Keep `safeReferencePath()` requiring `references/` and package-contained paths. [VERIFIED: script source] |
| False validation pass from broad text matching [VERIFIED: current broad checks] | Tampering | Use exact per-file marker arrays and fixture mutation tests. [VERIFIED: current helper/test pattern] |
| Unauthorized public Tom sample assets [VERIFIED: rights/checklist requirements] | Information Disclosure / Repudiation | Scan public example directories and require explicit approval record before allowing Tom-named assets. [VERIFIED: `BOUNDARY-TOM-IMG-001`; `RELEASE_CHECKLIST.md`] |
| Protected-IP route leakage into other IP packs [VERIFIED: TVAL-05] | Tampering / Repudiation | Scope negative scans to Xiaohei/Littlebox/legacy reference packs and assert missing Tom protected-route markers. [VERIFIED: `10-CONTEXT.md`; leakage scan] |

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | YAML/Markdown parser packages would add maintenance overhead. [ASSUMED] | Standard Stack / Alternatives | Planner might overvalue dependency-free parsing for future complex YAML structures. |
| A2 | Jest/Vitest would add package/config maintenance for this repo. [ASSUMED] | Standard Stack / Alternatives | Planner might keep `node:test` even if future test ergonomics require a richer framework. |
| A3 | Recommended post-hardening test count should increase by at least 7. [ASSUMED] | Validation Architecture | Planner may combine multiple fixtures into fewer tests while still covering all behaviors. |
| A4 | Shell grep is a viable fallback for research scans if `rg` is unavailable. [ASSUMED] | Environment Availability | Execution ergonomics could be worse on systems without `rg`; validator itself remains unaffected. |

## Open Questions

1. **Exact post-hardening check count**
   - What we know: current count is 40 and seven new check IDs are recommended. [VERIFIED: command output; research recommendation]
   - What's unclear: planner may split Tom pack/docs/leakage into more granular checks. [ASSUMED]
   - Recommendation: decide exact IDs in Plan 10-01, then update `requiredCheckIds` and full-pass summary in the same implementation wave. [VERIFIED: current test pattern]

2. **Approved public sample parser policy**
   - What we know: release checklist has pending records with reviewer/date/status/channel fields. [VERIFIED: `RELEASE_CHECKLIST.md`]
   - What's unclear: exact approved text format for future public samples is not yet locked. [VERIFIED: deferred maintainer approval]
   - Recommendation: define a strict line parser for the existing public rendered Tom samples approval line and require explicit non-pending approval fields before allowing Tom-named public assets. [VERIFIED: TVAL-06]

3. **Docs repair scope**
   - What we know: Phase 9 docs markers are present now. [VERIFIED: Phase 9 verification; marker scans]
   - What's unclear: new narrow checks may expose a missing stable marker phrase. [ASSUMED]
   - Recommendation: keep docs edits as conditional Plan 10-03 work tied to a concrete failed check. [VERIFIED: D-18 scope fence]

## Sources

### Primary (HIGH confidence)

- `.planning/PROJECT.md` - project constraints, no-build runtime, protected-character boundary, and v1.1 context. [VERIFIED: file read]
- `.planning/REQUIREMENTS.md` - TVAL-01 through TVAL-07 and out-of-scope boundaries. [VERIFIED: file read]
- `.planning/ROADMAP.md` - Phase 10 goal and success criteria. [VERIFIED: file read]
- `.planning/STATE.md` - current Phase 10 state and carried decisions. [VERIFIED: file read]
- `.planning/phases/10-validation-hardening/10-CONTEXT.md` - locked Phase 10 decisions and scope fences. [VERIFIED: file read]
- Phase 6-9 verification/UAT artifacts - prior phase evidence and residual validator handoffs. [VERIFIED: file reads]
- `scripts/validate-skill-package.mjs` - current validator implementation and check matrix. [VERIFIED: file read]
- `scripts/validate-skill-package.test.mjs` - current Node regression suite. [VERIFIED: file read]
- `ian-xiaohei-illustrations/SKILL.md`, `references/routing.md`, Tom pack files, README, examples, NOTICE, release checklist, and `openai.yaml` - live validation targets. [VERIFIED: file reads and marker scans]
- Local commands: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `node --version`, `git --version`. [VERIFIED: command output]

### Secondary (MEDIUM confidence)

- None used. [VERIFIED: no web search or secondary source used]

### Tertiary (LOW confidence)

- Assumptions listed in the Assumptions Log. [ASSUMED]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - current scripts use Node built-ins and local commands pass. [VERIFIED: script/test source; command output]
- Architecture: HIGH - validator flow and tests are directly visible in source. [VERIFIED: script/test source]
- Pitfalls: HIGH for current-code pitfalls and MEDIUM for future approval parser policy. [VERIFIED: current source; ASSUMED future policy]

**Research date:** 2026-06-13 [VERIFIED: system date]
**Valid until:** 2026-07-13 for current codebase research, or earlier if Phase 10 implementation changes validator IDs/counts. [ASSUMED validity window; VERIFIED: current count]
