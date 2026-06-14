# Phase 24: Validation and Release Evidence - Research

**Researched:** 2026-06-14  
**Domain:** Dependency-free Node validation, rebrand marker checks, release evidence artifacts  
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

Source for this section: `.planning/phases/24-validation-and-release-evidence/24-CONTEXT.md` [VERIFIED: repo grep]

### Locked Decisions

### Validator Coverage

- **D-01:** The validator should check canonical naming across `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md`.
- **D-02:** Canonical naming checks should verify `Visual IP Illustrations`, `visual-ip-illustrations`, and `$visual-ip-illustrations` where each surface owns product identity, slug/install guidance, or invocation guidance.
- **D-03:** The validator should check legacy alias compatibility markers for `$ian-xiaohei-illustrations` across runtime, agent metadata, README, examples, release checklist, and validation surfaces.
- **D-04:** The validator should check install migration guidance that preserves the current live repository clone target, canonical local checkout slug `visual-ip-illustrations`, installable package directory `ian-xiaohei-illustrations/`, canonical invocation `$visual-ip-illustrations`, and legacy alias `$ian-xiaohei-illustrations`.
- **D-05:** Validator naming checks should preserve current route behavior checks for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- **D-06:** Validator output count starts from the existing `78/78` baseline. Phase 24 may increase the count when new checks are deliberate, named, and covered by matching Node tests.

### Node Test Coverage

- **D-07:** Node tests should cover canonical invocation through `$visual-ip-illustrations`.
- **D-08:** Node tests should cover legacy invocation through `$ian-xiaohei-illustrations`.
- **D-09:** Node tests should cover route stability for `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`, including default flags, aliases, statuses, required references, and output suffixes.
- **D-10:** Node tests should cover output path stability for raw and escaped path tokens for all five routes.
- **D-11:** Node tests should include stale old-name-only fixtures that fail when a primary public or runtime surface loses canonical naming and contains only old Xiaohei-centered framing.
- **D-12:** Node test count starts from the existing `40/40` baseline. Phase 24 may increase the count when the new tests directly map to VAL-01 through VAL-04.

### Release Evidence

- **D-13:** Final release evidence should record `node scripts/validate-skill-package.mjs` output.
- **D-14:** Final release evidence should record `node --test scripts/validate-skill-package.test.mjs` output.
- **D-15:** Final release evidence should record `git diff --check` output.
- **D-16:** Final release evidence should record docs consistency across README, examples, NOTICE, release checklist, agent metadata, runtime metadata, and route docs.
- **D-17:** Final release evidence should record compatibility smoke coverage for canonical invocation, legacy invocation, omitted-IP Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and mixed-IP route grouping.
- **D-18:** Final evidence artifacts should make baseline and final counts explicit so maintainers can see whether validator and Node totals stayed at `78/78` and `40/40` or increased through deliberate Phase 24 additions.

### UAT and Migration Behavior

- **D-19:** UAT should confirm users can migrate naming from `$ian-xiaohei-illustrations` to `$visual-ip-illustrations` while preserving route behavior.
- **D-20:** UAT should confirm omitted-IP prompts still select Xiaohei after the naming migration.
- **D-21:** UAT should confirm explicit route prompts still select Littlebox, Tom, Ferris, and Sealos Seal with existing route status notes and output paths.
- **D-22:** UAT should confirm install guidance supports the canonical local checkout slug `visual-ip-illustrations` while preserving the installable skill package directory `ian-xiaohei-illustrations/` during v1.4.

### Docs Change Boundary

- **D-23:** Phase 24 should avoid broad public docs rewrites.
- **D-24:** Small marker additions to README, examples, NOTICE, release checklist, runtime metadata, or route docs are allowed only when a new validator check needs a deterministic release-evidence marker tied to VAL-01 through VAL-04.
- **D-25:** Existing route/source/brand language remains the authority for route behavior. Phase 24 validation should harden that language rather than reshape public docs.

### Requirement Mapping

- **VAL-01:** Validator checks canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs.
- **VAL-02:** Validator checks legacy alias compatibility markers and install migration guidance.
- **VAL-03:** Node tests cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures.
- **VAL-04:** Final release evidence records validator output, Node output, `git diff --check`, docs consistency, and compatibility smoke coverage.

### the agent's Discretion

Planner discretion is limited to exact check IDs, fixture names, and evidence file structure. The coverage targets, starting baselines, docs-change boundary, and UAT scope are locked by this discussion.

### Deferred Ideas (OUT OF SCOPE)

- Actual GitHub repository rename from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.
- Redirect behavior and remote URL migration for a future repository rename.
- v2 installer or selector that installs selected IP variants.
- Machine-readable asset manifest for title, path, hash, composition family, IP route, source status, rights status, brand status, and anti-repeat notes.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| VAL-01 | Validator checks canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs. [CITED: .planning/REQUIREMENTS.md] | Use the new `REBRAND-CANON-*` group and surface matrix below. [VERIFIED: repo grep] |
| VAL-02 | Validator checks legacy alias compatibility markers and install migration guidance. [CITED: .planning/REQUIREMENTS.md] | Use the new `REBRAND-COMPAT-*` and `REBRAND-MIGRATE-*` groups below. [VERIFIED: repo grep] |
| VAL-03 | Node tests cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures. [CITED: .planning/REQUIREMENTS.md] | Extend the current Node fixture pattern with canonical, legacy, route, path, and stale old-name-only mutation tests. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| VAL-04 | Final release evidence records validator output, Node test output, `git diff --check`, docs consistency, and compatibility smoke coverage. [CITED: .planning/REQUIREMENTS.md] | Create `24-01-SUMMARY.md`, `24-UAT.md`, and `24-VERIFICATION.md` with the command evidence plan below. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |
</phase_requirements>

## Summary

Phase 24 should harden the existing dependency-free validator and Node regression suite rather than introduce a build framework. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: .planning/config.json] The current verified baseline is `node scripts/validate-skill-package.mjs` reporting `Summary: total=78 passed=78 failed=0 skipped=0`, `node --test scripts/validate-skill-package.test.mjs` reporting `tests 40`, `pass 40`, `fail 0`, and `git diff --check` exiting 0 with no output. [VERIFIED: command output 2026-06-14]

The implementation should add a small dedicated rebrand validation group after the current public docs and route checks, then mirror every new check ID in `requiredCheckIds` and fixture tests. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs] The public docs baseline already contains most required markers, so Phase 24 should keep public docs edits marker-only and prefer validator/test changes plus evidence artifacts. [VERIFIED: README.md; VERIFIED: examples/prompts.md; VERIFIED: NOTICE.md; VERIFIED: RELEASE_CHECKLIST.md]

**Primary recommendation:** Add `REBRAND-CANON-*`, `REBRAND-COMPAT-*`, `REBRAND-MIGRATE-*`, `REBRAND-ROUTE-*`, `REBRAND-PATH-*`, and `REBRAND-DOCS-*` validator checks, increase the expected counts deliberately, and record final release evidence in `24-VERIFICATION.md`, `24-UAT.md`, and `24-01-SUMMARY.md`. [VERIFIED: repo grep]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Canonical naming validation | Local Node validator | Static Markdown/YAML docs | `scripts/validate-skill-package.mjs` reads repository files and emits deterministic check results. [VERIFIED: scripts/validate-skill-package.mjs] |
| Legacy alias compatibility validation | Local Node validator | Runtime skill metadata and examples | The compatibility markers live in `SKILL.md`, `openai.yaml`, README, examples, and release checklist. [VERIFIED: repo grep] |
| Route stability validation | Local Node validator | `routing.md` route metadata table | Existing checks parse the `IP Routes` Markdown table and validate ids, aliases, defaults, statuses, references, and suffixes. [VERIFIED: scripts/validate-skill-package.mjs] |
| Output path stability validation | Local Node validator | Public docs and runtime docs | Existing helpers expose raw and escaped route path tokens; Phase 24 should assert the full five-route set across required surfaces. [VERIFIED: scripts/validate-skill-package.mjs] |
| Release evidence | Planning artifacts | Command outputs | Phase 24 evidence belongs in `.planning/phases/24-validation-and-release-evidence/` and records command output plus UAT observations. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |

## Project Constraints (from AGENTS.md)

- User-facing replies must begin with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing communication must use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request text must be English. [VERIFIED: AGENTS.md]
- Direct repo edits normally require a GSD workflow entry point; this task is itself a GSD research subtask and writes the requested research artifact only. [VERIFIED: AGENTS.md]
- Keep edits surgical and touch only request-linked files. [VERIFIED: AGENTS.md]
- Public docs changes in Phase 24 should remain marker-only per phase context. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Do not commit this research artifact because the user explicitly requested no commit. [CITED: user request]

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Node.js runtime | `v24.13.0` | Run the validator and Node test runner. | Current local baseline uses Node successfully for both validation commands. [VERIFIED: command output 2026-06-14] |
| `node:test` | Built into current Node runtime | Execute `scripts/validate-skill-package.test.mjs`. | Existing suite imports `node:test` and passes 40 tests. [VERIFIED: scripts/validate-skill-package.test.mjs; VERIFIED: command output 2026-06-14] |
| Node core modules: `fs`, `path`, `process`, `child_process`, `os`, `assert/strict` | Built into Node | File reads, path safety, subprocess validation, temp fixtures, assertions. | Existing scripts use only Node built-ins, preserving the no-build-runtime project constraint. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs] |
| Git | `2.50.1 (Apple Git-155)` | Run whitespace/diff hygiene check. | Phase 24 must record `git diff --check`. [VERIFIED: command output 2026-06-14; CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| `rg` | available in shell | Fast marker discovery during planning and implementation. | Use for source-grounded marker checks before editing validator expectations. [VERIFIED: command use 2026-06-14] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Node built-ins | External Markdown/YAML parser packages | External packages add package legitimacy and install gates to a documentation-first skill package. [ASSUMED] |
| Text-marker validator | Full AST/doc schema engine | The current documents are Markdown/YAML instruction artifacts and the existing validator already passes 78 marker and parser checks. [VERIFIED: scripts/validate-skill-package.mjs] |

**Installation:** No external package installation is recommended for Phase 24. [VERIFIED: .planning/config.json; VERIFIED: scripts/validate-skill-package.mjs]

**Version verification:** `node --version` returned `v24.13.0`; `git --version` returned `git version 2.50.1 (Apple Git-155)`. [VERIFIED: command output 2026-06-14]

## Package Legitimacy Audit

No external packages should be installed in this phase. [VERIFIED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] The package legitimacy gate is not applicable because the recommended stack uses Node built-ins and the existing repository scripts. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | N/A | N/A | N/A | N/A | N/A | No install |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no install recommended]  
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no install recommended]

## Current Validator/Test Architecture

### Baseline Command Results

| Command | Exit | Key Output |
|---------|------|------------|
| `node scripts/validate-skill-package.mjs` | 0 | `Summary: total=78 passed=78 failed=0 skipped=0` [VERIFIED: command output 2026-06-14] |
| `node --test scripts/validate-skill-package.test.mjs` | 0 | `tests 40`, `pass 40`, `fail 0`, `cancelled 0`, `skipped 0`, `todo 0` [VERIFIED: command output 2026-06-14] |
| `git diff --check` | 0 | no stdout/stderr [VERIFIED: command output 2026-06-14] |

### Validator Shape

The validator defines `REPO_ROOT`, `PACKAGE_DIR`, public doc constants, safe path helpers, frontmatter parsing, simple YAML parsing, Markdown link/table parsing, output path token helpers, route table helpers, approval parsers, and a `defineCheck` list that renders `[PASS]`, `[FAIL]`, `[SKIP]`, and final summary counts. [VERIFIED: scripts/validate-skill-package.mjs]

Existing check groups and counts are: package/skill/agent shape, route table and route contracts, route references, legacy Xiaohei parity, prompt templates, IP packs, QA/source/rights checks, Sealos no-logo checks, public docs checks, NOTICE checks, smoke prompt checks, release checklist checks, boundary/leakage checks, public/generated sample gate checks, and package/workspace output boundary checks. [VERIFIED: scripts/validate-skill-package.mjs]

The current validator check ID list is mirrored manually in `requiredCheckIds` inside the Node suite; the live validator test asserts exactly 78 result lines and the exact ordered ID list. [VERIFIED: scripts/validate-skill-package.test.mjs]

### Node Test Shape

The Node suite uses `spawnSync` to run the live validator, copies the repository into temporary fixture directories, mutates files with `replaceInFixture` and `replaceAllInFixture`, then asserts nonzero validator exits and actionable failure output. [VERIFIED: scripts/validate-skill-package.test.mjs]

The suite already includes fixture tests for route metadata drift, pack file emptiness, prompt marker drift, source/rights drift, docs/metadata/NOTICE/release/smoke drift, leakage into other packs, public sample approval parsing, generated sample parsing, and full pass output. [VERIFIED: scripts/validate-skill-package.test.mjs]

## Recommended Validator Check Groups for VAL-01..VAL-04

Add a dedicated rebrand group near the existing docs/release checks so Phase 24 evidence can point to named, release-specific checks. [ASSUMED] Keep existing `SKILL-FM-001`, `AGENT-TOM-001`, `DOC-*`, `NOTICE-*`, `SMOKE-*`, `RELEASE-*`, and `ROUTE-*` checks in place because they already protect older milestone contracts. [VERIFIED: scripts/validate-skill-package.mjs]

| Req | New Check ID | Primary Surfaces | Expected Markers |
|-----|--------------|------------------|------------------|
| VAL-01 | `REBRAND-CANON-001` | `SKILL.md`, `openai.yaml` | `Visual IP Illustrations`, `name: visual-ip-illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, `visual-ip-illustrations`, `ian-xiaohei-illustrations`. [VERIFIED: SKILL.md; VERIFIED: openai.yaml] |
| VAL-01 | `REBRAND-CANON-002` | `README.md`, `examples/prompts.md` | README H1 `# Visual IP Illustrations`, canonical invocation `$visual-ip-illustrations`, canonical local checkout slug `visual-ip-illustrations`, legacy alias `$ian-xiaohei-illustrations`. [VERIFIED: README.md; VERIFIED: examples/prompts.md] |
| VAL-01 | `REBRAND-CANON-003` | `NOTICE.md`, `RELEASE_CHECKLIST.md` | `Visual IP Illustrations`, rebrand scope, Release 1.4 rebrand review, canonical invocation, legacy compatibility alias. [VERIFIED: NOTICE.md; VERIFIED: RELEASE_CHECKLIST.md] |
| VAL-01 | `REBRAND-CANON-004` | `references/routing.md` plus route docs | Stable route ids `xiaohei`, `littlebox`, `tom`, `ferris`, `sealos`, route statuses, and output suffixes. [VERIFIED: routing.md] |
| VAL-02 | `REBRAND-COMPAT-001` | Runtime and agent metadata | `$ian-xiaohei-illustrations` remains visible as v1.4 compatibility alias while `$visual-ip-illustrations` is canonical. [VERIFIED: SKILL.md; VERIFIED: openai.yaml] |
| VAL-02 | `REBRAND-COMPAT-002` | README, examples, release checklist | Legacy smoke prompts, compatibility guidance, and release checklist alias review remain present. [VERIFIED: README.md; VERIFIED: examples/prompts.md; VERIFIED: RELEASE_CHECKLIST.md] |
| VAL-02 | `REBRAND-MIGRATE-001` | README and `SKILL.md` | Live remote `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`, local checkout `visual-ip-illustrations`, installable package directory `ian-xiaohei-illustrations/`, canonical invocation, legacy alias. [VERIFIED: README.md; VERIFIED: SKILL.md] |
| VAL-03 | `REBRAND-ROUTE-001` | `routing.md` parser result | Five rows, exact ids, defaults, aliases, statuses, required reference counts, and output suffixes. [VERIFIED: routing.md; VERIFIED: scripts/validate-skill-package.mjs] |
| VAL-03 | `REBRAND-PATH-001` | `SKILL.md`, README, examples, routing | Raw and escaped tokens for all five output paths. [VERIFIED: SKILL.md; VERIFIED: README.md; VERIFIED: examples/prompts.md; VERIFIED: routing.md] |
| VAL-04 | `REBRAND-EVIDENCE-001` | `RELEASE_CHECKLIST.md` | Automated gate commands for validator, Node tests, and `git diff --check`; Release 1.4 review block; route smoke prompt block. [VERIFIED: RELEASE_CHECKLIST.md] |
| VAL-04 | `REBRAND-DOCS-001` | README, examples, NOTICE, release checklist, metadata, routing | Aggregated docs consistency markers for canonical name, canonical invocation, compatibility alias, route status, authority paths, and output path tokens. [VERIFIED: repo grep] |

Expected count impact: adding 11 checks raises the validator from 78 to 89 if all recommended checks land. [ASSUMED] Planner may merge adjacent checks to keep the final count lower, but every added check ID must appear in `requiredCheckIds` and at least one negative fixture test. [VERIFIED: scripts/validate-skill-package.test.mjs]

## Recommended Node Tests and Fixture Strategy

Use the existing temp-copy fixture strategy because it already proves validators fail on real repository-shaped mutations. [VERIFIED: scripts/validate-skill-package.test.mjs]

| Test Name | Fixture Mutation | Expected Failure |
|-----------|------------------|------------------|
| `validator fixture rejects missing canonical runtime invocation` | Replace `$visual-ip-illustrations` in `SKILL.md` with `$ian-xiaohei-illustrations`. | `REBRAND-CANON-001` fails with path `ian-xiaohei-illustrations/SKILL.md`. [ASSUMED] |
| `validator fixture rejects missing legacy runtime alias` | Replace `$ian-xiaohei-illustrations` in `SKILL.md` or `openai.yaml` with a removed marker. | `REBRAND-COMPAT-001` fails. [ASSUMED] |
| `validator fixture rejects stale README old-name-only framing` | Change README H1 from `# Visual IP Illustrations` to `# Ian Xiaohei Illustrations` and remove first-view canonical markers. | `REBRAND-CANON-002` fails. [VERIFIED: README.md] |
| `validator fixture rejects stale examples old-name-only framing` | Replace the opening canonical `$visual-ip-illustrations` section in `examples/prompts.md` with legacy-only wording. | `REBRAND-CANON-002` or `REBRAND-COMPAT-002` fails. [VERIFIED: examples/prompts.md] |
| `validator fixture rejects missing migration guidance` | Remove `cd visual-ip-illustrations` or `installable package directory: ian-xiaohei-illustrations/`. | `REBRAND-MIGRATE-001` fails. [VERIFIED: README.md] |
| `validator fixture locks route stability after rebrand` | Mutate a route default/status/alias/output suffix in `routing.md`. | `REBRAND-ROUTE-001` fails. [VERIFIED: routing.md] |
| `validator fixture locks output path stability after rebrand` | Remove one raw or escaped output token from README or examples. | `REBRAND-PATH-001` fails. [VERIFIED: README.md; VERIFIED: examples/prompts.md] |
| `validator fixture requires release evidence gates` | Remove the Release 1.4 review block or one command from `RELEASE_CHECKLIST.md`. | `REBRAND-EVIDENCE-001` fails. [VERIFIED: RELEASE_CHECKLIST.md] |

Stale old-name-only strategy: mutate primary surfaces so they retain `$ian-xiaohei-illustrations` or `Ian Xiaohei` framing while losing `Visual IP Illustrations`, `visual-ip-illustrations`, and `$visual-ip-illustrations`. [ASSUMED] The validator should permit legacy compatibility mentions only when the same surface also carries the canonical marker set required for that surface. [ASSUMED]

Recommended final test count: add 8-10 targeted tests, so the suite likely rises from 40 to 48-50 tests. [ASSUMED] The exact final count should be recorded in `24-VERIFICATION.md` and `24-01-SUMMARY.md`. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

## Exact Surfaces and Marker Expectations

| Surface | Canonical Naming | Legacy Alias | Migration Guidance | Route Stability | Output Path Stability |
|---------|------------------|--------------|--------------------|-----------------|-----------------------|
| `ian-xiaohei-illustrations/SKILL.md` | `name: visual-ip-illustrations`, `Visual IP Illustrations`, `$visual-ip-illustrations`, `visual-ip-illustrations`. [VERIFIED: SKILL.md] | `$ian-xiaohei-illustrations`, `compatibility alias`. [VERIFIED: SKILL.md] | `Canonical package slug/path: visual-ip-illustrations`, `Legacy package slug/path: ian-xiaohei-illustrations`, local migration wording. [VERIFIED: SKILL.md] | Omitted-IP Xiaohei default; explicit Littlebox, Tom, Ferris, Sealos; statuses and authority paths. [VERIFIED: SKILL.md] | Raw and escaped route output tokens for all five routes. [VERIFIED: SKILL.md] |
| `ian-xiaohei-illustrations/agents/openai.yaml` | `Visual IP Illustrations`, `$visual-ip-illustrations`. [VERIFIED: openai.yaml] | `$ian-xiaohei-illustrations`. [VERIFIED: openai.yaml] | Compatibility alias wording in default prompt. [VERIFIED: openai.yaml] | `default Xiaohei`; explicit Tom, Ferris, Sealos route wording and statuses. [VERIFIED: openai.yaml] | Not the primary path surface. [VERIFIED: openai.yaml] |
| `README.md` | H1 `# Visual IP Illustrations`, canonical local checkout slug `visual-ip-illustrations`, canonical invocation `$visual-ip-illustrations`. [VERIFIED: README.md] | `$ian-xiaohei-illustrations`. [VERIFIED: README.md] | Clone command with live remote and `visual-ip-illustrations`, installable directory `ian-xiaohei-illustrations/`. [VERIFIED: README.md] | Route inventory for five routes, statuses, authority paths. [VERIFIED: README.md] | Raw and escaped tokens for all five routes. [VERIFIED: README.md] |
| `examples/prompts.md` | Opening canonical invocation `$visual-ip-illustrations` normal-flow prompts. [VERIFIED: examples/prompts.md] | Legacy compatibility route smoke prompts using `$ian-xiaohei-illustrations`. [VERIFIED: examples/prompts.md] | Not primary install surface. [VERIFIED: examples/prompts.md] | Omitted-IP, explicit route, and mixed-IP smoke sections. [VERIFIED: examples/prompts.md] | Raw and escaped route tokens in prompt fixtures. [VERIFIED: examples/prompts.md] |
| `NOTICE.md` | Rebrand scope and `Visual IP Illustrations`. [VERIFIED: NOTICE.md] | Historical Ian Xiaohei attribution context. [VERIFIED: NOTICE.md] | Not primary install surface. [VERIFIED: NOTICE.md] | Attribution/source/brand boundaries for Ian, Littlebox, Tom, Ferris, Sealos. [VERIFIED: NOTICE.md] | Not primary path surface. [VERIFIED: NOTICE.md] |
| `RELEASE_CHECKLIST.md` | Release 1.4 public identity, `$visual-ip-illustrations`, `visual-ip-illustrations`. [VERIFIED: RELEASE_CHECKLIST.md] | `$ian-xiaohei-illustrations`. [VERIFIED: RELEASE_CHECKLIST.md] | Clone command, checkout slug, installable package directory. [VERIFIED: RELEASE_CHECKLIST.md] | Route smoke prompts for omitted-IP, explicit routes, mixed-IP. [VERIFIED: RELEASE_CHECKLIST.md] | Raw and escaped route tokens in public docs/path marker review. [VERIFIED: RELEASE_CHECKLIST.md] |
| `ian-xiaohei-illustrations/references/routing.md` | Route metadata remains the behavior authority under the existing package path. [VERIFIED: routing.md] | Legacy root Xiaohei reference path availability. [VERIFIED: routing.md] | Legacy path availability for root Xiaohei references. [VERIFIED: routing.md] | Exact route ids, aliases, defaults, suffixes, required references, statuses. [VERIFIED: routing.md] | Raw route paths and escaped route path tokens for Tom, Ferris, Sealos; mixed-IP paths for all five. [VERIFIED: routing.md] |

## Architecture Patterns

### System Architecture Diagram

```text
Repository files
  |
  v
scripts/validate-skill-package.mjs
  |-- parse SKILL.md frontmatter and body
  |-- parse openai.yaml simple metadata
  |-- parse routing.md IP Routes table
  |-- scan README/examples/NOTICE/RELEASE_CHECKLIST markers
  |-- parse release approval records
  v
Ordered check result matrix
  |
  +--> CLI summary: total/passed/failed/skipped
  |
  v
scripts/validate-skill-package.test.mjs
  |-- run live validator
  |-- copy repo fixtures
  |-- mutate stale or drift markers
  |-- assert check IDs and failure paths
  v
Phase 24 evidence artifacts
  |-- 24-VERIFICATION.md: command outputs and automated gates
  |-- 24-UAT.md: migration and route smoke observations
  |-- 24-01-SUMMARY.md: final counts, changed files, release readiness
```

### Recommended Project Structure

```text
.planning/phases/24-validation-and-release-evidence/
├── 24-CONTEXT.md
├── 24-DISCUSSION-LOG.md
├── 24-RESEARCH.md
├── 24-01-PLAN.md
├── 24-01-SUMMARY.md
├── 24-UAT.md
└── 24-VERIFICATION.md

scripts/
├── validate-skill-package.mjs
└── validate-skill-package.test.mjs
```

### Pattern 1: Marker-Set Check

**What:** Use `assertIncludes(text, relativePath, markers, relation)` for deterministic marker presence checks. [VERIFIED: scripts/validate-skill-package.mjs]  
**When to use:** Use for canonical naming, compatibility alias, migration guidance, route note, command-gate, and release-evidence markers. [VERIFIED: scripts/validate-skill-package.mjs]

```javascript
defineCheck("REBRAND-CANON-001", "runtime metadata exposes canonical and compatibility rebrand markers", () => {
  assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
    "Visual IP Illustrations",
    "$visual-ip-illustrations",
    "$ian-xiaohei-illustrations",
    "visual-ip-illustrations",
    "ian-xiaohei-illustrations",
  ], "canonical runtime identity and compatibility markers");
});
```

### Pattern 2: Fixture Drift Test

**What:** Copy the repo to a temp directory, mutate one marker, run the fixture validator, assert the targeted check ID and path. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**When to use:** Use for stale old-name-only fixtures and every new Phase 24 validator group. [VERIFIED: scripts/validate-skill-package.test.mjs]

```javascript
test("validator fixture rejects stale README old-name-only framing", () => {
  const fixtureRoot = copyFixture("rebrand-readme-old-name-only");
  try {
    replaceInFixture(fixtureRoot, "README.md", "# Visual IP Illustrations", "# Ian Xiaohei Illustrations");
    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-002 /);
    assert.match(result.stdout, /README\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

### Anti-Patterns to Avoid

- **Broad docs rewrite:** Phase 23 already completed public docs rebrand, and Phase 24 scope allows only marker additions tied to validation. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- **Unmirrored check IDs:** New validator checks must be added to `requiredCheckIds`, because the current suite asserts the exact ordered matrix. [VERIFIED: scripts/validate-skill-package.test.mjs]
- **Count drift without evidence:** Final artifact counts must make baseline and final totals explicit. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- **Legacy alias treated as stale by itself:** `$ian-xiaohei-illustrations` is intentionally preserved as a v1.4 compatibility alias, so stale detection should target old-name-only primary framing. [CITED: .planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Markdown route table parsing | New parser stack | Existing `parseMarkdownTable`, `splitRouteCell`, `routeRows` helpers | The current parser already supports the `IP Routes` table and passes route tests. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs] |
| YAML metadata parsing | External YAML package | Existing `parseSimpleYamlShape` | Current `openai.yaml` shape is simple and already covered by tests. [VERIFIED: scripts/validate-skill-package.mjs] |
| Fixture harness | Custom test framework | Existing `copyFixture`, mutation helpers, `node:test` | Current suite passes 40 tests and uses real repo-shaped fixtures. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| Release evidence capture | Ad hoc prose only | `24-VERIFICATION.md`, `24-UAT.md`, `24-01-SUMMARY.md` | Phase context requires command output, docs consistency, compatibility smoke coverage, and final counts. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |

**Key insight:** The value of Phase 24 is deterministic release confidence, so the planner should strengthen the existing validator/test/evidence loop instead of introducing new infrastructure. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs]

## Runtime State Inventory

Phase 24 is validation and release evidence work, and it touches naming/migration semantics; runtime state categories were checked from project context and repository scope. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | None in repo; this project is a Markdown/YAML skill package with no database or datastore. [VERIFIED: AGENTS.md; VERIFIED: .planning/config.json] | None. [VERIFIED: repo grep] |
| Live service config | None in repo; no hosted app, UI, API, database, or build runtime is in v1.4 scope. [CITED: .planning/REQUIREMENTS.md] | None. [CITED: .planning/REQUIREMENTS.md] |
| OS-registered state | Codex skill installation may exist under `${CODEX_HOME:-$HOME/.codex}/skills`, and Phase 24 validates docs for migration guidance rather than editing installed copies. [VERIFIED: README.md; ASSUMED] | No data migration; preserve guidance for canonical local checkout slug and legacy package path. [VERIFIED: README.md] |
| Secrets/env vars | No `.env` files detected in project context; `CODEX_HOME` is a documented install-path variable. [VERIFIED: AGENTS.md; VERIFIED: README.md] | None. [VERIFIED: README.md] |
| Build artifacts | No package manifest or build runtime is present; generated article assets remain workspace outputs under `assets/<article-slug>-.../`. [VERIFIED: AGENTS.md; VERIFIED: SKILL.md] | None for research; Phase 24 should keep output path validation stable. [VERIFIED: SKILL.md] |

## Common Pitfalls

### Pitfall 1: Stale Old-Name-Only Detection That Breaks Compatibility

**What goes wrong:** A check flags any `$ian-xiaohei-illustrations` mention as stale. [ASSUMED]  
**Why it happens:** The rebrand has both canonical naming and a locked legacy alias policy. [CITED: .planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md]  
**How to avoid:** Require canonical markers on primary surfaces while allowing legacy markers where compatibility is documented. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]  
**Warning signs:** Fixture removes `$ian-xiaohei-illustrations` and tests still pass, or fixture keeps only legacy text and tests still pass. [ASSUMED]

### Pitfall 2: Validator Count Changes Without Test Matrix Sync

**What goes wrong:** The validator emits a new number of result lines while `requiredCheckIds` still expects the old 78-check matrix. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**Why it happens:** Check IDs are manually mirrored in the Node suite. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**How to avoid:** Add check IDs, update `requiredCheckIds`, update full-matrix summary assertions, and add negative fixtures in one task. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**Warning signs:** The live validator passes but Node tests fail on `resultLines.length` or summary count. [VERIFIED: scripts/validate-skill-package.test.mjs]

### Pitfall 3: Route Stability Rechecked Only Through Public Docs

**What goes wrong:** Public docs stay consistent while `routing.md` route metadata drifts. [ASSUMED]  
**Why it happens:** Public marker scans and route table parser checks protect different surfaces. [VERIFIED: scripts/validate-skill-package.mjs]  
**How to avoid:** Keep parser-based `routeRows()` assertions for ids, aliases, defaults, statuses, references, and output suffixes. [VERIFIED: scripts/validate-skill-package.mjs]  
**Warning signs:** A fixture mutating `routing.md` passes because only README/examples are scanned. [ASSUMED]

### Pitfall 4: Evidence Artifacts Drift From Command Truth

**What goes wrong:** Verification files record old totals after new checks/tests land. [ASSUMED]  
**Why it happens:** Baseline totals are locked at 78/78 and 40/40 but Phase 24 may deliberately increase them. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]  
**How to avoid:** Re-run all three commands after implementation and paste final counts into `24-VERIFICATION.md` and `24-01-SUMMARY.md`. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

## Code Examples

### Aggregated Surface Check

```javascript
defineCheck("REBRAND-DOCS-001", "rebrand docs keep canonical naming, compatibility alias, route stability, and output paths aligned", () => {
  const text = combinedText([
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "RELEASE_CHECKLIST.md",
    OPENAI_AGENT_FILE,
    SKILL_FILE,
    ROUTING_FILE,
  ]);
  assertIncludes(text, "rebrand public/runtime surfaces", [
    "Visual IP Illustrations",
    "$visual-ip-illustrations",
    "$ian-xiaohei-illustrations",
    "visual-ip-illustrations",
    "ian-xiaohei-illustrations",
    "assets/<article-slug>-illustrations/",
    "assets/<article-slug>-littlebox/",
    "assets/<article-slug>-tom/",
    "assets/<article-slug>-ferris/",
    "assets/<article-slug>-sealos/",
  ], "release 1.4 canonical, compatibility, route, and output markers");
});
```

Source pattern: existing `defineCheck`, `combinedText`, and `assertIncludes` functions. [VERIFIED: scripts/validate-skill-package.mjs]

### Route Stability Test

```javascript
test("validator fixture locks rebrand route stability", () => {
  const fixtureRoot = copyFixture("rebrand-route-stability");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "| `sealos` | Sealos Seal",
      "| `sealos` | Sealos Mascot",
    );
    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-ROUTE-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

Source pattern: existing fixture mutation tests. [VERIFIED: scripts/validate-skill-package.test.mjs]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-centered public identity | `Visual IP Illustrations` public identity with `$visual-ip-illustrations` canonical invocation and `$ian-xiaohei-illustrations` compatibility alias | v1.4, Phase 21-23 | Validator must distinguish canonical primary framing from legacy compatibility markers. [CITED: .planning/ROADMAP.md; VERIFIED: README.md] |
| Phase-specific validation hardening per mascot route | Rebrand-level validation across runtime metadata, public docs, route docs, release checklist, and evidence artifacts | Phase 24 | Planner should add release-specific check IDs and evidence files. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |
| 77/39 Sealos closeout baseline | 78/40 current post-quick baseline and Phase 22/23 rebrand baseline | 2026-06-14 | Current implementation starts from 78 validator checks and 40 Node tests. [VERIFIED: .planning/STATE.md; VERIFIED: command output 2026-06-14] |

**Deprecated/outdated:**
- Old-name-only primary framing on public/runtime surfaces should be treated as stale in Phase 24 fixtures. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Repository remote rename and redirect behavior are deferred ideas for later phases. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | External Markdown/YAML packages would add unnecessary package legitimacy and install gates. | Standard Stack | Planner could overvalue avoiding dependencies; current repo constraints still favor built-ins. |
| A2 | Add 11 validator checks, raising total from 78 to 89 if all recommended checks land. | Recommended Validator Check Groups | Final count may differ if planner merges checks; evidence must record actual final total. |
| A3 | Add 8-10 Node tests, raising total from 40 to about 48-50. | Recommended Node Tests | Final count may differ; evidence must record actual final total. |
| A4 | Stale old-name-only fixtures should retain legacy markers while removing canonical markers. | Recommended Node Tests | If implementation chooses stricter or looser stale detection, fixture design changes. |

## Open Questions

1. **Should examples receive a literal `Visual IP Illustrations` marker?**  
   What we know: `examples/prompts.md` leads with `$visual-ip-illustrations` and legacy alias wording, while README/NOTICE/release checklist carry literal product-name markers. [VERIFIED: examples/prompts.md; VERIFIED: README.md; VERIFIED: NOTICE.md; VERIFIED: RELEASE_CHECKLIST.md]  
   What's unclear: Whether VAL-01 requires literal product-name text in examples or canonical invocation is sufficient for that surface. [ASSUMED]  
   Recommendation: Prefer validator logic that checks `$visual-ip-illustrations` in examples and literal `Visual IP Illustrations` in README/NOTICE/runtime surfaces; add a small examples marker only if the plan wants uniform literal product-name coverage. [ASSUMED]

2. **Should `24-VALIDATION.md` exist?**  
   What we know: Phase 24 context requires `24-VERIFICATION.md`, `24-UAT.md`, and `24-01-SUMMARY.md`; it says `24-VALIDATION.md` may be used if research introduces validation architecture decisions. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]  
   What's unclear: Whether planner wants an intermediate strategy artifact before implementation. [ASSUMED]  
   Recommendation: Skip `24-VALIDATION.md` if `24-01-PLAN.md` carries the validator/test strategy; create it only if plan review asks for a standalone validation architecture artifact. [ASSUMED]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node test runner | yes | `v24.13.0` | Use active local Node in PATH. [VERIFIED: command output 2026-06-14] |
| Git | `git diff --check` and repository status | yes | `2.50.1 (Apple Git-155)` | None needed. [VERIFIED: command output 2026-06-14] |
| `gsd-tools` PATH command | Optional init helper | no in shell PATH | unavailable as `gsd-tools`; available through core script path | Use `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs query init.phase-op 24`. [VERIFIED: command output 2026-06-14] |
| `rg` | Marker discovery | yes | not probed | Use shell grep fallback if needed. [VERIFIED: command use 2026-06-14] |

**Missing dependencies with no fallback:** none. [VERIFIED: command output 2026-06-14]  
**Missing dependencies with fallback:** `gsd-tools` shell alias/PATH command is missing; the core script path works. [VERIFIED: command output 2026-06-14]

## Validation Architecture

Skipped because `.planning/config.json` sets `workflow.nyquist_validation` to `false`. [VERIFIED: .planning/config.json]

## Security Domain

Security enforcement is enabled by default in `.planning/config.json`, but Phase 24 is a local validation and evidence phase with no hosted service, user auth, sessions, database, network API, or external package install. [VERIFIED: .planning/config.json; VERIFIED: .planning/REQUIREMENTS.md]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication surface in scope. [VERIFIED: .planning/REQUIREMENTS.md] |
| V3 Session Management | no | No session surface in scope. [VERIFIED: .planning/REQUIREMENTS.md] |
| V4 Access Control | no | No runtime access-control surface in scope. [VERIFIED: .planning/REQUIREMENTS.md] |
| V5 Input Validation | yes | Treat repository files as validator input; use safe path helpers and deterministic marker parsing. [VERIFIED: scripts/validate-skill-package.mjs] |
| V6 Cryptography | no | No cryptographic behavior in scope. [VERIFIED: .planning/REQUIREMENTS.md] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Path traversal through route reference paths | Tampering | Existing `safePackagePath` and `safeReferencePath` helpers keep references inside the package. [VERIFIED: scripts/validate-skill-package.mjs] |
| False release confidence from stale evidence | Repudiation | Record command outputs and final counts in Phase 24 evidence files. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md] |
| Slopsquatted package introduction | Tampering | Install no external packages in Phase 24. [VERIFIED: scripts/validate-skill-package.mjs] |

## Release Evidence Artifact Design

### `24-VERIFICATION.md`

Purpose: final automated verification record for VAL-01 through VAL-04. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

Required sections:
- Frontmatter with phase, verified timestamp, status, score, and baseline/final counts. [ASSUMED]
- Goal achievement table mapping VAL-01 through VAL-04 to evidence. [CITED: .planning/REQUIREMENTS.md]
- Command evidence blocks for `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Docs consistency table across `SKILL.md`, `openai.yaml`, README, examples, NOTICE, release checklist, and routing. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Compatibility smoke coverage table for canonical invocation, legacy invocation, omitted-IP Xiaohei, explicit routes, and mixed-IP grouping. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Risks and residual manual verification notes. [ASSUMED]

### `24-UAT.md`

Purpose: migration behavior and route smoke confirmation. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

Required UAT cases:
- Canonical `$visual-ip-illustrations` omitted-IP prompt selects Xiaohei and `assets/<article-slug>-illustrations/`. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Legacy `$ian-xiaohei-illustrations` omitted-IP prompt preserves Xiaohei route behavior. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Explicit Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal route prompts preserve statuses, authority paths, and output paths. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Mixed-IP route grouping keeps separate route groups and route-local references. [VERIFIED: examples/prompts.md; VERIFIED: routing.md]
- Install migration guidance preserves live remote, local checkout slug, installable package directory, canonical invocation, and legacy alias. [VERIFIED: README.md]

### `24-01-SUMMARY.md`

Purpose: concise closeout artifact consumed by roadmap/state updates. [ASSUMED]

Required fields:
- Phase goal and requirements completed. [CITED: .planning/ROADMAP.md; CITED: .planning/REQUIREMENTS.md]
- Changed files list. [ASSUMED]
- Baseline counts and final counts. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Command status table. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]
- Release readiness result and remaining deferred ideas. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

### Command Evidence Plan

Run and record final command output after implementation:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
git status --short
```

The first three commands are locked evidence requirements; `git status --short` supports changed-file reporting and no-commit confirmation. [CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md; VERIFIED: user request]

## Risks and Implementation Notes

- `examples/prompts.md` currently starts with canonical invocation markers, and it may not need a literal product-name marker if the validator treats examples as an invocation surface. [VERIFIED: examples/prompts.md; ASSUMED]
- The exact check/test totals should be updated only after implementation because the planner may merge or split recommended checks. [ASSUMED]
- Public docs edits should be marker-only; most markers already exist, so prefer validator and test changes first. [VERIFIED: README.md; VERIFIED: examples/prompts.md; VERIFIED: NOTICE.md; VERIFIED: RELEASE_CHECKLIST.md]
- `gsd-tools` is missing from shell PATH, but the core script path works for init queries. [VERIFIED: command output 2026-06-14]
- Working tree was clean before writing this research file. [VERIFIED: `git status --short` output before file write]

## Sources

### Primary (HIGH confidence)

- `.planning/phases/24-validation-and-release-evidence/24-CONTEXT.md` - locked Phase 24 decisions, baselines, evidence targets, UAT scope, docs boundary. [VERIFIED: repo grep]
- `.planning/phases/24-validation-and-release-evidence/24-DISCUSSION-LOG.md` - discussion audit trail for selected options. [VERIFIED: repo grep]
- `.planning/ROADMAP.md` - Phase 24 goal and success criteria. [VERIFIED: repo grep]
- `.planning/REQUIREMENTS.md` - VAL-01 through VAL-04 and v1.4 scope boundaries. [VERIFIED: repo grep]
- `.planning/STATE.md` - current milestone context and historical baseline notes. [VERIFIED: repo grep]
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` - canonical naming values, legacy alias, route/path stability boundaries. [VERIFIED: repo grep]
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-VERIFICATION.md` - Phase 22 runtime metadata evidence and 78/40 baseline. [VERIFIED: repo grep]
- `.planning/phases/23-public-documentation-and-examples-rebrand/23-VERIFICATION.md` - Phase 23 public docs evidence and 78/40 baseline. [VERIFIED: repo grep]
- `scripts/validate-skill-package.mjs` - validator architecture and current checks. [VERIFIED: repo grep]
- `scripts/validate-skill-package.test.mjs` - Node test architecture and fixture strategy. [VERIFIED: repo grep]
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md` - current marker surfaces. [VERIFIED: repo grep]

### Secondary (MEDIUM confidence)

- `/Users/longnv/.codex/memories/MEMORY.md` - prior repo pattern note for deterministic validation loops and previous milestone closeout artifacts. [VERIFIED: memory grep]

### Tertiary (LOW confidence)

- Assumptions in this document about exact final check/test counts and whether `24-VALIDATION.md` is needed. [ASSUMED]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - current commands ran successfully with Node and Git, and no external packages are needed. [VERIFIED: command output 2026-06-14]
- Architecture: HIGH - validator and Node test patterns were read directly from the scripts. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs]
- Pitfalls: MEDIUM - count sync and compatibility pitfalls are grounded in current code and phase decisions; exact final fixture split remains planner discretion. [VERIFIED: scripts/validate-skill-package.test.mjs; CITED: .planning/phases/24-validation-and-release-evidence/24-CONTEXT.md]

**Research date:** 2026-06-14  
**Valid until:** 2026-07-14 for current repository structure, or until validator/test files change. [ASSUMED]
