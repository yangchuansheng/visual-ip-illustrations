# Phase 4: Validation Hardening - Research

**Researched:** 2026-06-12
**Domain:** Lightweight Node.js validation for a Markdown/YAML Codex Skill package
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

All constraints in this block are copied from `.planning/phases/04-validation-hardening/04-CONTEXT.md`. [VERIFIED: codebase]

### Locked Decisions

#### Validation Command
- **D-01:** Add the validator at `scripts/validate-skill-package.mjs`.
- **D-02:** The invocation name is `node scripts/validate-skill-package.mjs`.
- **D-03:** Use plain Node.js with built-in modules only. The repository has no `package.json`, lockfile, test runner, or build framework, while GSD tooling already runs through Node in this workspace.
- **D-04:** Keep the command self-contained. It should read repository files, run deterministic checks, and exit with a machine-usable status code.

#### Required Checks
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

#### Failure Semantics
- **D-17:** Exit `0` only when every required check passes.
- **D-18:** Exit nonzero when any required file, route row, alias group, default marker, output suffix, required reference, prompt variable, docs link, attribution marker, legacy parity check, smoke prompt marker, or rendered-image boundary check fails.
- **D-19:** Print deterministic English logs in stable check order. Use check IDs and path-specific messages, such as `[PASS] ROUT-ALIASES xiaohei aliases present` and `[FAIL] NOTICE-LBOX missing short commit 37cd93e in NOTICE.md`.
- **D-20:** End with a compact English summary containing total checks, passed checks, failed checks, and skipped checks if any optional advisory checks are added later.
- **D-21:** Keep failure messages actionable: include the file path, expected marker or relation, and observed missing condition.

#### Manual Smoke Prompt Coverage
- **D-22:** Treat `examples/prompts.md` as the manual smoke prompt fixture source for Phase 4. The validator should confirm coverage for four smoke paths: omitted-IP default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variants.
- **D-23:** Manual smoke prompts must stay text-only. The validator checks that prompt fixtures contain the expected aliases, route wording, output paths, and Littlebox planning fields; it does not invoke Codex, call `image_gen`, or create PNG files.
- **D-24:** The required smoke prompt concepts are: default route shot list, explicit Xiaohei route with aliases and `assets/<article-slug>-illustrations/`, explicit Littlebox route with aliases, `Littlebox state: closed`, `visual metaphor`, `assigned background`, and `assets/<article-slug>-littlebox/`, plus mixed-IP variant groups with separate output directories.

#### Lightweight Boundary
- **D-25:** Keep validation dependency-free and local. The command must not require a package manager, virtual environment, external service, browser, image model, or release packaging step.
- **D-26:** Keep validation focused on deterministic Markdown/YAML and filesystem contracts. Visual taste, rendered image quality, and real image generation remain manual smoke or release validation activities.
- **D-27:** The validator may use simple parsers implemented in the script for frontmatter, Markdown tables, links, and path markers. It should avoid fragile broad grep-only checks when a small structured parse is practical.

#### Phase 5 Boundary
- **D-28:** Phase 5 owns broad README refresh, richer public examples, release checklist wording, and `agents/openai.yaml` copy updates for selectable-IP support.
- **D-29:** Phase 4 may add a minimal README command mention only if needed to make the local command discoverable during validation planning, but broad documentation polish remains Phase 5.
- **D-30:** Phase 4 does not create release archives, release automation, CI workflows, rendered example images, visual regression, or a machine-readable asset manifest.

### the agent's Discretion
- The implementation agent may choose exact internal check IDs and helper function names, provided the externally visible command, exit behavior, deterministic ordering, and required contract coverage above hold.
- The implementation agent may decide whether advisory checks print as `[INFO]` or are omitted. Required Phase 4 checks should be fail-fast in exit semantics while still printing all discovered failures in one run when practical.

### Deferred Ideas (OUT OF SCOPE)
- Phase 5: broad README rewrite for the complete two-IP package.
- Phase 5: richer `examples/prompts.md` public examples beyond smoke fixtures.
- Phase 5: `agents/openai.yaml` copy update to describe selectable IP support while preserving Xiaohei as default.
- Phase 5: release checklist requiring validation, both-IP smoke tests, attribution review, and installable package boundary checks.
- v2: CI workflow, release archives, visual regression, machine-readable asset manifest, third-IP schema, and rendered Littlebox public example imports.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| VALD-01 | Maintainer can run one local validation command for the installable skill package. [VERIFIED: .planning/REQUIREMENTS.md] | Use `node scripts/validate-skill-package.mjs` as the single command, backed by Node built-in `node:fs`, `node:path`, and `node:process`. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] [CITED: nodejs.org/api/fs.html] |
| VALD-02 | Validation checks `SKILL.md` frontmatter, agent metadata presence, routing aliases, required references, legacy Xiaohei paths, prompt-template placeholders, output suffixes, README/example links, and NOTICE attribution. [VERIFIED: .planning/REQUIREMENTS.md] | Implement the check matrix in this research, with check IDs grouped by package, skill, agent metadata, routing, references, prompt templates, docs, smoke prompts, attribution, and boundary. [VERIFIED: codebase] |
| VALD-03 | Validation exits nonzero when a required reference path, output path rule, IP alias group, prompt placeholder, or attribution marker is missing. [VERIFIED: .planning/REQUIREMENTS.md] | Collect all failures, print deterministic `[FAIL]` lines, then set `process.exitCode = 1` on any failure. [CITED: nodejs.org/api/process.html#processexitcode] |
| VALD-04 | Validation can run without a full application framework or external service. [VERIFIED: .planning/REQUIREMENTS.md] | Use one `.mjs` script and built-in Node APIs; skip package installation, CI, browser, image generation, and test framework setup. [VERIFIED: .planning/codebase/STACK.md] [CITED: nodejs.org/api/fs.html] |
| VALD-05 | Manual smoke prompts cover default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant behavior. [VERIFIED: .planning/REQUIREMENTS.md] | Validate `examples/prompts.md` section headings and markers for the four smoke paths; keep prompts text-only. [VERIFIED: examples/prompts.md] |
</phase_requirements>

## Summary

Phase 4 should create a single self-contained validator at `scripts/validate-skill-package.mjs` and keep the repository lightweight. The project currently has no `package.json`, lockfile, automated test runner, build framework, or scripts directory, while local Node is available as `v24.13.0`; Node's built-in `node:fs` and `node:path` APIs are stable and fit the repository-file validation problem. [VERIFIED: codebase] [VERIFIED: shell: node --version] [CITED: nodejs.org/api/fs.html] [CITED: nodejs.org/api/path.html]

The validator should be a deterministic contract checker for Markdown/YAML/filesystem state. It should parse enough structure to avoid broad grep brittleness: frontmatter, route table, Markdown links, simple YAML nesting, reference path lists, and root compatibility bodies after `## Current Xiaohei Contract`. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] [ASSUMED]

**Primary recommendation:** Implement three waves: core harness and parsers, contract checks with exact check IDs, then positive/negative command proof using a temporary mutated copy. [VERIFIED: codebase] [ASSUMED]

## Project Constraints (from AGENTS.md)

- Every user-facing assistant reply must begin with `爸爸`, and replies must be in Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request titles/descriptions must be written in English. [VERIFIED: AGENTS.md]
- Use GSD workflow before file-changing implementation work; Phase 4 planning should produce GSD artifacts and implementation should use `$gsd-execute-phase`. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Preserve existing `$ian-xiaohei-illustrations` Xiaohei behavior and documented prompts. [VERIFIED: AGENTS.md]
- Keep Xiaohei and Littlebox rules separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- Preserve MIT license notices and derived documentation attribution for Ian and okooo5km. [VERIFIED: AGENTS.md]
- Keep the project as a lightweight skill package; validation can be script-based and should avoid a full app framework. [VERIFIED: AGENTS.md]
- Final generation depends on host `image_gen`; Phase 4 validation should treat image generation as out of runtime scope. [VERIFIED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Local validation command | Repository utility script | Shell | The command reads repository files and reports deterministic contract status. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Package shape checks | Filesystem | Validator harness | Shape is existence and directory-boundary state under the repo. [VERIFIED: codebase] |
| Frontmatter and YAML shape checks | Validator parser | Skill package files | The validator owns parsing; `SKILL.md` and `openai.yaml` remain source data. [VERIFIED: codebase] |
| Route metadata checks | Validator parser | `references/routing.md` | The route table is the authoritative route contract from Phases 1-3. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] |
| Required reference checks | Filesystem | Route parser | The route table names `required_references`; the filesystem proves presence. [VERIFIED: codebase] |
| Docs link checks | Validator parser | Public docs | README links and root links are Markdown contracts that can be checked without rendering. [VERIFIED: README.md] |
| Manual smoke coverage | Public prompt fixture | Validator marker checks | `examples/prompts.md` is the approved smoke prompt source. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Image quality judgment | Human release/smoke workflow | Host `image_gen` | Visual taste and pixels depend on generated images and remain outside deterministic Phase 4 validation. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Node.js runtime | `v24.13.0` local | Execute `scripts/validate-skill-package.mjs`. | Already available locally and sufficient for file-based validation. [VERIFIED: shell: node --version] |
| `node:fs` | Built into Node | Read files, list directories, check file existence. | Node official docs describe `node:fs` as a stable filesystem API with synchronous forms usable from ESM. [CITED: nodejs.org/api/fs.html] |
| `node:path` | Built into Node | Resolve and normalize repository-relative paths. | Node official docs describe `node:path` as utilities for file and directory paths. [CITED: nodejs.org/api/path.html] |
| `node:process` | Built into Node | Set nonzero exit status through `process.exitCode`. | Node official docs describe `process.exitCode` as the exit code used when the process exits gracefully. [CITED: nodejs.org/api/process.html#processexitcode] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Git CLI | local system command | Run `git diff --check` after research and after implementation. | Use for whitespace hygiene already used in prior phases. [VERIFIED: Phase 1/2/3 verification files] |
| Shell utilities | POSIX shell on macOS | Temporary copy and negative validation proof. | Use for mutation smoke scripts around the Node validator, without adding a test framework. [ASSUMED] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Node built-ins | npm YAML/Markdown/link-check packages | External packages add install, lockfile, legitimacy, and release surface for a simple deterministic file contract. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Node validator | Shell script with `rg`, `awk`, and `diff` | Shell is compact for one-off checks, while Node gives one portable check registry, stable logs, structured parsers, and negative-copy testing. [ASSUMED] |
| Full test framework | Node test runner or Jest/Vitest | Existing project has no automated test framework and Phase 4 requires a lightweight local command. [VERIFIED: .planning/codebase/TESTING.md] |

**Installation:**

```bash
# No package installation. Use the local Node runtime.
node scripts/validate-skill-package.mjs
```

**Version verification:**

```bash
node --version
```

Verified local output: `v24.13.0`. [VERIFIED: shell: node --version]

## Package Legitimacy Audit

No external packages are recommended for Phase 4, so the package legitimacy gate is skipped. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| none | none | n/a | n/a | n/a | n/a | Approved: no dependency install |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no external packages recommended]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no external packages recommended]

## Recommended Implementation Waves and File Ownership

| Wave | Goal | Owned Files | Requirements | Verification |
|------|------|-------------|--------------|--------------|
| Wave 1 | Create validator harness, deterministic check registry, path helpers, simple parsers, and summary/exit semantics. | `scripts/validate-skill-package.mjs` | VALD-01, VALD-03, VALD-04 | `node scripts/validate-skill-package.mjs` should run and print stable `[PASS]`/summary output on the current repo. [ASSUMED] |
| Wave 2 | Add required check matrix for package shape, skill frontmatter/runtime markers, agent metadata shape, routing table, required references, output paths, prompt placeholders, objective IP markers, docs links, NOTICE attribution, rendered-image boundary, and smoke prompt coverage. | `scripts/validate-skill-package.mjs` | VALD-02, VALD-05 | Positive validator command passes; targeted temporary-copy mutations fail with expected check IDs. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Wave 3 | Add lightweight discoverability and closeout proof only. | Optional minimal `README.md` command pointer; phase summaries only | VALD-01 | If README is touched, limit to the exact command mention; run validator, negative proof commands, and `git diff --check`. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |

File ownership rules:

- `scripts/validate-skill-package.mjs` owns executable validation behavior and internal parser helpers. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- `examples/prompts.md` owns manual smoke prompt fixture text; Phase 4 should read it, and broad prompt expansion belongs to Phase 5. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- `README.md` may receive one command pointer only when implementation planning needs discoverability. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- `ian-xiaohei-illustrations/agents/openai.yaml` should be shape-checked only; selectable-IP copy update belongs to Phase 5. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- `ian-xiaohei-illustrations/SKILL.md`, `references/**`, `NOTICE.md`, and `LICENSE` are validation inputs for Phase 4. [VERIFIED: codebase]

## Validator Architecture

### System Architecture Diagram

```text
CLI entry: node scripts/validate-skill-package.mjs
  |
  v
Resolve repo root + package root
  |
  v
Read files through path helpers
  |
  +--> parseSkillFrontmatter(SKILL.md)
  +--> parseSimpleYaml(openai.yaml)
  +--> parseMarkdownTable(routing.md, "IP Routes")
  +--> parseMarkdownLinks(README.md, examples/prompts.md)
  +--> extractSectionBody(root refs, "## Current Xiaohei Contract")
  |
  v
Check registry in fixed order
  |
  +--> package/shape checks
  +--> skill/runtime marker checks
  +--> agent metadata shape checks
  +--> routing table and reference checks
  +--> legacy parity checks
  +--> prompt/objective marker checks
  +--> docs link and smoke fixture checks
  +--> NOTICE/license attribution checks
  +--> rendered Littlebox import boundary check
  |
  v
Collect failures and passes
  |
  v
Print deterministic English logs + summary
  |
  v
Set process.exitCode = 1 when failures exist
```

This architecture follows Phase 4's requirement for one local command that validates deterministic repository contracts. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

### Recommended Project Structure

```text
scripts/
└── validate-skill-package.mjs    # Local repository contract validator
```

The repo currently has no `scripts/` directory, and `.planning/codebase/STRUCTURE.md` recommends `scripts/` for recurring validation utilities. [VERIFIED: codebase]

### Pattern 1: Check Registration

**What:** Store checks as ordered objects with `id`, `description`, and `run(ctx)`; run every check and collect all failures. [ASSUMED]

**When to use:** Use for all required Phase 4 checks so output order and summary counts remain deterministic. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

**Example:**

```javascript
const checks = [
  {
    id: "PKG-SHAPE",
    description: "required package files exist",
    run(ctx) {
      requireFiles(ctx, [
        "ian-xiaohei-illustrations/SKILL.md",
        "ian-xiaohei-illustrations/agents/openai.yaml",
        "ian-xiaohei-illustrations/references/routing.md",
      ]);
    },
  },
];
```

### Pattern 2: Deterministic Logs

**What:** Print one line per check outcome with stable IDs, then a final count summary. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

**When to use:** Use for human-readable local runs and shell-friendly failure diagnosis. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

**Example:**

```text
[PASS] ROUT-ALIASES xiaohei aliases present
[FAIL] NOTICE-LBOX NOTICE.md missing short commit 37cd93e
Summary: total=42 passed=41 failed=1 skipped=0
```

### Pattern 3: Failure Collection

**What:** Add failures to an array and continue checking, then set `process.exitCode = 1` at the end. [CITED: nodejs.org/api/process.html#processexitcode]

**When to use:** Use for every required check so one run reports all missing markers. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

**Example:**

```javascript
if (failures.length > 0) {
  process.exitCode = 1;
}
```

### Pattern 4: Path Helpers

**What:** Resolve repository-relative paths from one root and normalize route-table paths under `ian-xiaohei-illustrations/`. [ASSUMED]

**When to use:** Use for required reference checks, docs link checks, and temporary copied repo runs. [ASSUMED]

**Example:**

```javascript
const ROOT = process.cwd();
const SKILL_DIR = path.join(ROOT, "ian-xiaohei-illustrations");
const rel = (p) => path.join(ROOT, p);
const packageRel = (p) => path.join(SKILL_DIR, p);
```

### Pattern 5: Simple Parsers

**What:** Implement small deterministic parsers for frontmatter, Markdown table rows, Markdown links, simple nested YAML keys, and legacy section body extraction. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] [ASSUMED]

**When to use:** Use when exact structure is small and known: one `SKILL.md` frontmatter block, one `IP Routes` table, one `openai.yaml` shape, and Markdown links in README/examples. [VERIFIED: codebase]

**Example:**

```javascript
function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) return {};
  const end = text.indexOf("\n---", 4);
  if (end === -1) return {};
  return Object.fromEntries(
    text.slice(4, end).split("\n")
      .map((line) => line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map((m) => [m[1], m[2].replace(/^["']|["']$/g, "")])
  );
}
```

### Anti-Patterns to Avoid

- **Brittle broad grep:** Use parsed route rows, parsed links, and section extraction for exact checks; reserve substring checks for objective marker tokens. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- **Fail-fast exit:** Continue through all checks so the maintainer receives one complete failure list. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- **Framework bootstrapping:** Keep the validator runnable without `npm install`, test framework setup, image generation, browser automation, or network access. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- **Phase 5 leakage:** Validate README/examples/metadata shape and markers; leave broad docs rewrite, richer public examples, release checklist wording, and metadata copy refresh to Phase 5. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

## Exact Check Matrix

| Check ID | Requirement | File Marker / Relation | Files |
|----------|-------------|------------------------|-------|
| PKG-SHAPE-001 | VALD-01, VALD-02 | Required package/public/legal files exist. | `SKILL.md`, `agents/openai.yaml`, `references/routing.md`, both IP packs, root compatibility refs, `README.md`, `examples/prompts.md`, `NOTICE.md`, `LICENSE` |
| SKILL-FM-001 | VALD-02, VALD-03 | Frontmatter `name: ian-xiaohei-illustrations`; non-empty `description`. | `ian-xiaohei-illustrations/SKILL.md` |
| SKILL-ROUTE-001 | VALD-02, VALD-03 | `references/routing.md`; omitted IP selects Xiaohei; Xiaohei aliases; Littlebox aliases; mixed `variant group`. | `SKILL.md` |
| SKILL-REFS-001 | VALD-02, VALD-03 | Mentions selected `required_references`, Xiaohei canonical files, Littlebox canonical files, and legacy compatibility files. | `SKILL.md` |
| SKILL-OUTPUT-001 | VALD-02, VALD-03 | Raw and escaped Xiaohei/Littlebox output path tokens. | `SKILL.md` |
| SKILL-GEN-001 | VALD-02, VALD-04 | `image_gen` dependency wording; one image per prompt; no generated PNG creation during validation. | `SKILL.md` |
| AGENT-SHAPE-001 | VALD-02 | `interface.display_name`, `interface.short_description`, `interface.default_prompt`, `policy.allow_implicit_invocation: true`. | `agents/openai.yaml` |
| ROUTE-TABLE-001 | VALD-02, VALD-03 | Header columns: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, `status`. | `references/routing.md` |
| ROUTE-XH-001 | VALD-02, VALD-03 | `xiaohei`; aliases `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`; `default` true; suffix `illustrations`; status active. | `references/routing.md` |
| ROUTE-LB-001 | VALD-02, VALD-03 | `littlebox`; aliases `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`; `default` false; suffix `littlebox`; status active. | `references/routing.md` |
| ROUTE-DEFAULT-001 | VALD-02, VALD-03 | Exactly one active default route, and it is `xiaohei`. | `references/routing.md` |
| ROUTE-REFS-001 | VALD-02, VALD-03 | Xiaohei has exactly five operational `required_references`; Littlebox has exactly six operational `required_references`. | `references/routing.md` + filesystem |
| ROUTE-PATHS-001 | VALD-02, VALD-03 | Output paths map `illustrations` to `assets/<article-slug>-illustrations/` and `littlebox` to `assets/<article-slug>-littlebox/`. | `references/routing.md`, `SKILL.md`, docs |
| ROUTE-MIXED-001 | VALD-02, VALD-05 | Mixed-IP wording preserves separate route groups/variant groups and separate directories. | `references/routing.md`, `SKILL.md`, `examples/prompts.md` |
| REFS-XH-001 | VALD-02, VALD-03 | Xiaohei `index.md` exists and five canonical files exist. | `references/ips/xiaohei/` |
| REFS-LB-001 | VALD-02, VALD-03 | Littlebox `index.md` exists and six operational files exist. | `references/ips/littlebox/` |
| LEGACY-XH-001 | VALD-02, VALD-03 | Five root compatibility files contain `## Current Xiaohei Contract`. | `references/*.md` root compatibility files |
| LEGACY-XH-002 | VALD-02, VALD-03 | Body after `## Current Xiaohei Contract` equals the corresponding canonical Xiaohei file byte-for-byte after normal newline normalization. | root compatibility refs + `references/ips/xiaohei/*.md` |
| PROMPT-XH-001 | VALD-02, VALD-03 | Brace placeholders `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, `{这张图要表达的核心意思}`, `{具体画面：小黑在哪里、正在做什么、主要物件是什么、信息如何流动}`, `{元素1}`, `{标注词1}`, `{可选标注词5}`, `{要删除的文字}`. | `references/ips/xiaohei/prompt-template.md`, root `prompt-template.md` |
| PROMPT-LB-001 | VALD-02, VALD-03 | Planning markers: `Littlebox state: closed`, `Visual metaphor`, `Assigned background`, `Suggested objects`, `Short visible labels`. | `references/ips/littlebox/prompt-template.md`, `SKILL.md`, `examples/prompts.md` |
| PROMPT-LB-002 | VALD-02, VALD-03 | Prompt markers: English prompt language, `#E3F2FD`, `#E6E6FA`, closed paper-box, front-left three-quarter, side-seam twig arms, exactly one amber seam tape, jagged torn front tab, user's language labels. | `references/ips/littlebox/prompt-template.md`, `language-and-labels.md` |
| IP-XH-001 | VALD-02 | Objective Xiaohei markers: 16:9, pure white background, sparse red/orange/blue labels, active participation, anti-repeat, `assets/examples/`, QA failure markers. | `references/ips/xiaohei/*.md` |
| IP-LB-001 | VALD-02 | Objective Littlebox markers: closed-only, `#E3F2FD`, `#E6E6FA`, English prompt, user's language, front-left three-quarter, amber jagged tape, side-seam twig arms, output path, passive/open/extra-arm/beige/vector failure markers. | `references/ips/littlebox/*.md` |
| DOC-LINKS-001 | VALD-02, VALD-03 | Markdown links to local files exist; skip external URLs and image alt text only checks. | `README.md`, `examples/prompts.md` |
| DOC-PATHS-001 | VALD-02, VALD-03 | Raw and HTML-escaped output path tokens for both routes. | `README.md`, `examples/prompts.md`, `SKILL.md` |
| DOC-ROUTES-001 | VALD-02 | Public route docs mention `references/routing.md`, `references/ips/xiaohei/`, and `references/ips/littlebox/`. | `README.md`, `examples/prompts.md` |
| NOTICE-IAN-001 | VALD-02, VALD-03 | Ian attribution markers: `Ian Xiaohei Illustrations`, Ian, Xiaohei visual language. | `NOTICE.md` |
| NOTICE-LB-001 | VALD-02, VALD-03 | Littlebox markers: `5km Littlebox Illustrations`, `okooo5km`, source URL, MIT, full commit, short commit, copyright, derived documentation credit guidance. | `NOTICE.md`, `references/ips/littlebox/index.md` |
| SMOKE-DEFAULT-001 | VALD-05 | Section for omitted/default visual IP route and shot list prompt. | `examples/prompts.md` |
| SMOKE-XH-001 | VALD-05 | Explicit Xiaohei smoke prompt includes aliases and `assets/<article-slug>-illustrations/`. | `examples/prompts.md` |
| SMOKE-LB-001 | VALD-05 | Explicit Littlebox smoke prompt includes aliases, `Littlebox state: closed`, `visual metaphor`, `assigned background`, and `assets/<article-slug>-littlebox/`. | `examples/prompts.md` |
| SMOKE-MIXED-001 | VALD-05 | Mixed-IP smoke prompt includes `variant group`, both output paths, and Littlebox planning markers. | `examples/prompts.md` |
| BOUNDARY-IMG-001 | VALD-02 | No rendered Littlebox image filenames under `examples/images` or `ian-xiaohei-illustrations/assets/examples` match `littlebox`, `小盒`, or `carton`. | asset directories |
| BOUNDARY-P5-001 | VALD-02 | `agents/openai.yaml` shape only; no selectable-IP copy assertion beyond required keys. | `agents/openai.yaml` |

This matrix maps directly to VALD-01 through VALD-05 and the Phase 4 context decisions. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] [VERIFIED: .planning/REQUIREMENTS.md]

## Positive Verification Command and Negative Strategy

### Positive Command

```bash
node scripts/validate-skill-package.mjs
git diff --check
```

Expected validator result: exit `0`, deterministic English `[PASS]` lines, and a compact summary with zero failures. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

### Negative Test Strategy

Use temporary copies and mutate files inside the temporary copy, then run the validator from that copy. This avoids changing implementation files and proves VALD-03 without a test framework. [ASSUMED]

```bash
tmp="$(mktemp -d)"
cp -R . "$tmp/repo"
cd "$tmp/repo"
perl -0pi -e 's/`paper-box`, `carton`/`paper-box`/' ian-xiaohei-illustrations/references/routing.md
node scripts/validate-skill-package.mjs
test "$?" -ne 0
```

Recommended negative mutations:

| Mutation | Expected Failing Check |
|----------|------------------------|
| Remove `carton` from Littlebox aliases. | ROUTE-LB-001 |
| Change Littlebox `output_suffix` from `littlebox` to `box`. | ROUTE-LB-001, ROUTE-PATHS-001 |
| Delete one Littlebox required reference path from the route table. | ROUTE-REFS-001 |
| Remove `## Current Xiaohei Contract` from root `style-dna.md`. | LEGACY-XH-001 |
| Change canonical Xiaohei body after the root compatibility marker. | LEGACY-XH-002 |
| Remove `{要删除的文字}` from Xiaohei prompt template. | PROMPT-XH-001 |
| Remove `37cd93e` from `NOTICE.md`. | NOTICE-LB-001 |
| Point README image link to a missing local image path. | DOC-LINKS-001 |
| Add `littlebox-demo.png` under a temporary copy of `examples/images/`. | BOUNDARY-IMG-001 |

The negative runner should assert both nonzero exit and presence of the expected check ID in stdout/stderr. [ASSUMED]

## Legacy Root Body Parity

The five root Xiaohei compatibility files are validation targets: `style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. Each currently contains `## Current Xiaohei Contract` followed by the canonical body. [VERIFIED: codebase]

Robust parity algorithm:

1. Read the root file and canonical file as UTF-8. [CITED: nodejs.org/api/fs.html]
2. Find the exact heading line `## Current Xiaohei Contract`. [VERIFIED: codebase]
3. Extract every byte after the heading line break. [ASSUMED]
4. Normalize line endings from `\r\n` to `\n` for both extracted root body and canonical body. [ASSUMED]
5. Trim one trailing newline at most if required by editor differences, then compare exact strings. [ASSUMED]
6. On mismatch, print the root path and canonical path; keep diff generation out of the main validator unless a concise first-difference message is easy. [ASSUMED]

This approach is stronger than marker-only validation and matches Phase 2 and Phase 3 verification practice. [VERIFIED: .planning/phases/02-xiaohei-canonicalization/02-VERIFICATION.md] [VERIFIED: .planning/phases/03-littlebox-vertical-slice/03-VERIFICATION.md]

## Required Reference Validation

Parse `routing.md`'s `required_references` cell by splitting on semicolons, stripping backticks and whitespace, and resolving paths under `ian-xiaohei-illustrations/`. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] [ASSUMED]

Required route counts:

- `xiaohei`: five operational references. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
- `littlebox`: six operational references. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
- `index.md` exists for both routes as navigation, while it is not part of `required_references`. [VERIFIED: codebase]

The validator should reject a listed path that resolves outside the installable skill package. [ASSUMED]

## Docs Link Validation Without False Positives

Use a Markdown inline/image link parser that extracts `](target)` links and ignores these categories: external `http://` and `https://` URLs, `mailto:`, empty anchors, and generated placeholder output paths such as `assets/<article-slug>-illustrations/`. [ASSUMED]

For local targets:

1. Strip an optional `#anchor` suffix. [ASSUMED]
2. Decode simple URI escapes such as `%20` only if they appear. [ASSUMED]
3. Resolve relative to the Markdown file's directory, using `node:path`. [CITED: nodejs.org/api/path.html]
4. Check existence with `node:fs`. [CITED: nodejs.org/api/fs.html]
5. Treat image links and normal Markdown links the same for local existence. [ASSUMED]

This avoids false positives on external author links in `NOTICE.md`, placeholder output paths in prose, and HTML-escaped path tokens that are validation markers rather than link targets. [VERIFIED: README.md] [VERIFIED: NOTICE.md]

## Phase 5 Boundary

Phase 4 should validate the current docs markers and metadata shape, while Phase 5 owns broad README refresh, richer examples, release checklist wording, and `agents/openai.yaml` selectable-IP copy updates. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

Concrete boundaries:

- Check `agents/openai.yaml` has required keys and `allow_implicit_invocation: true`; leave its Xiaohei-default display copy untouched. [VERIFIED: .planning/phases/03-littlebox-vertical-slice/03-VERIFICATION.md] [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- Check README/examples links and path tokens; leave public narrative polishing to Phase 5. [VERIFIED: .planning/REQUIREMENTS.md]
- Check smoke prompt coverage in `examples/prompts.md`; leave richer public example expansion to Phase 5. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- Check NOTICE attribution markers; leave release packaging and archives to Phase 5 or v2. [VERIFIED: .planning/ROADMAP.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Full Markdown parser | Complete CommonMark implementation | Small link/table parsers scoped to current files | Phase 4 needs a small known table and local link existence checks. [ASSUMED] |
| Full YAML parser | General YAML parser | Indentation-aware key presence parser for `openai.yaml` | The metadata file has a tiny stable shape. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml] |
| Test framework | Jest/Vitest/Node test suite setup | Temporary copy mutation scripts plus direct validator command | The repo intentionally has no app framework or package manager. [VERIFIED: .planning/codebase/TESTING.md] |
| Image QA automation | Pixel-level image judgment | Marker checks plus manual smoke prompts | v1 keeps visual quality manual and host `image_gen` dependent. [VERIFIED: .planning/REQUIREMENTS.md] |
| Release workflow | CI, archive build, package publish | Local validator only | Phase 5/v2 own release packaging and CI. [VERIFIED: .planning/ROADMAP.md] |

**Key insight:** This phase hardens text and filesystem contracts that drift during ordinary Markdown edits; it should leave taste, pixels, packaging, and broad docs to their assigned phases. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]

## Common Pitfalls

### Pitfall 1: Brittle Grep

**What goes wrong:** A broad substring match passes when the route table is malformed or when a marker appears in unrelated prose. [ASSUMED]
**Why it happens:** The project stores executable contracts in Markdown prose and tables. [VERIFIED: codebase]
**How to avoid:** Parse frontmatter, route table rows, local links, and compatibility sections; reserve marker checks for objective content markers. [ASSUMED]
**Warning signs:** Checks pass after deleting a route table cell or moving an alias outside the table. [ASSUMED]

### Pitfall 2: Route Table Parsing Drift

**What goes wrong:** Semicolon-delimited `required_references` cells or backtick-wrapped values are parsed as one raw string. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
**Why it happens:** Markdown table cells contain code formatting and semicolon lists. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
**How to avoid:** Strip backticks after table splitting, split references on `;`, trim whitespace, and validate counts plus existence. [ASSUMED]
**Warning signs:** The validator reports one required reference for Littlebox instead of six. [ASSUMED]

### Pitfall 3: HTML-Escaped Tokens

**What goes wrong:** The validator checks only raw `assets/<article-slug>-.../` and misses docs that intentionally include `assets/&lt;article-slug&gt;-.../`. [VERIFIED: README.md] [VERIFIED: examples/prompts.md]
**Why it happens:** Markdown prose uses both raw and escaped placeholder tokens for validation. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
**How to avoid:** Check both raw and HTML-escaped output tokens for Xiaohei and Littlebox where required. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
**Warning signs:** DOC-PATHS passes after removing escaped tokens. [ASSUMED]

### Pitfall 4: Non-ASCII Labels

**What goes wrong:** Alias and prompt checks mishandle Chinese aliases or Chinese brace placeholders. [VERIFIED: codebase]
**Why it happens:** The package is Chinese-first and contains non-ASCII aliases, headings, and prompt variables. [VERIFIED: AGENTS.md] [VERIFIED: codebase]
**How to avoid:** Read files as UTF-8 and compare JavaScript strings directly. [CITED: nodejs.org/api/fs.html]
**Warning signs:** Xiaohei alias `小黑`, Littlebox alias `小盒`, or `{正文配图主题}` fails despite being present. [ASSUMED]

### Pitfall 5: No `package.json`

**What goes wrong:** A plan adds `npm test` or package installation tasks that cannot run in the current repository shape. [VERIFIED: codebase]
**Why it happens:** Validation habits from app repos conflict with this lightweight skill package. [ASSUMED]
**How to avoid:** Use direct Node invocation and no package manager. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
**Warning signs:** Plan references `npm install`, `npm test`, Jest, Vitest, markdownlint, or CI setup. [ASSUMED]

### Pitfall 6: Nondeterministic Output

**What goes wrong:** Log order varies by filesystem traversal order or object key order. [ASSUMED]
**Why it happens:** Directory reads and object iteration can reflect insertion or platform order. [ASSUMED]
**How to avoid:** Keep an explicit check array and sort any filesystem lists before checking. [ASSUMED]
**Warning signs:** Re-running the same validator changes log order. [ASSUMED]

## Code Examples

### Check Runner Skeleton

```javascript
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const results = [];

function pass(id, message) {
  results.push({ status: "PASS", id, message });
}

function fail(id, message) {
  results.push({ status: "FAIL", id, message });
}

function hasFile(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

for (const check of checks) {
  const before = results.length;
  check.run({ root, hasFile, pass, fail });
  if (results.length === before) pass(check.id, check.description);
}

for (const result of results) {
  console.log(`[${result.status}] ${result.id} ${result.message}`);
}

if (results.some((result) => result.status === "FAIL")) {
  process.exitCode = 1;
}
```

Source: Node built-in module usage verified from official `node:fs`, `node:path`, and `process.exitCode` docs. [CITED: nodejs.org/api/fs.html] [CITED: nodejs.org/api/path.html] [CITED: nodejs.org/api/process.html#processexitcode]

### Route Table Parser Shape

```javascript
function parseMarkdownTable(text, heading) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${heading}`);
  if (start === -1) return [];
  const tableLines = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].startsWith("## ")) break;
    if (lines[i].trim().startsWith("|")) tableLines.push(lines[i]);
  }
  const [header, , ...rows] = tableLines;
  const keys = header.split("|").slice(1, -1).map((cell) => cell.trim());
  return rows.map((row) => Object.fromEntries(
    row.split("|").slice(1, -1).map((cell, index) => [
      keys[index],
      cell.trim().replace(/`/g, ""),
    ])
  ));
}
```

Source: parser shape tailored to the current `## IP Routes` table. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] [ASSUMED]

### Legacy Body Extraction

```javascript
function bodyAfterHeading(text, heading) {
  const normalized = text.replace(/\r\n/g, "\n");
  const marker = `${heading}\n`;
  const index = normalized.indexOf(marker);
  if (index === -1) return null;
  return normalized.slice(index + marker.length);
}
```

Source: root compatibility files use the exact `## Current Xiaohei Contract` marker. [VERIFIED: codebase]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual `rg`, `find`, `diff`, and `git diff --check` commands in phase verification docs | One self-contained validator command plus negative temporary-copy proof | Phase 4 | Maintainers get repeatable pre-release drift checks. [VERIFIED: Phase 3 verification and Phase 4 context] |
| Root-only Xiaohei references | Canonical `references/ips/xiaohei/` pack plus root compatibility parity | Phase 2 | Validator must check canonical paths and legacy body parity. [VERIFIED: Phase 2 verification] |
| Littlebox placeholder route | Active Littlebox route with six operational references and attribution | Phase 3 | Validator must check active aliases, output suffix, required references, and NOTICE markers. [VERIFIED: Phase 3 verification] |

**Deprecated/outdated:**

- Phase 1 Littlebox `phase-3-owned` placeholder status is outdated; current route status is `active`. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
- Manual-only route/package grep checks are now a handoff target for the Phase 4 validator. [VERIFIED: .planning/phases/03-littlebox-vertical-slice/03-05-SUMMARY.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | A small custom route table parser is sufficient for the current `routing.md` shape. | Validator Architecture | A future table format may need a real Markdown parser or stricter schema. |
| A2 | Temporary-copy mutation is the best negative test strategy without a framework. | Positive Verification Command and Negative Strategy | Planner may choose a different proof harness; must still prove nonzero exit for missing markers. |
| A3 | Simple indentation-aware YAML key checks are sufficient for `openai.yaml`. | Validator Architecture | More complex metadata could require a YAML parser in a later phase. |
| A4 | Link parsing can ignore external URLs and placeholder output paths. | Docs Link Validation Without False Positives | A future release checklist may require external URL validation. |
| A5 | README needs at most one command pointer in Phase 4. | Recommended Implementation Waves | Planner may keep README untouched and rely on phase docs only. |

## Open Questions

1. **Minimum Node version to document**
   - What we know: local Node is `v24.13.0`; Phase 4 context chooses plain Node built-ins. [VERIFIED: shell: node --version] [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
   - What's unclear: the lowest supported Node version for future users is unstated. [ASSUMED]
   - Recommendation: avoid APIs newer than Node 18 in implementation unless the planner adds an explicit version floor. [ASSUMED]

2. **README command pointer**
   - What we know: Phase 4 may add a minimal README command mention only if needed. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
   - What's unclear: whether discoverability should wait entirely for Phase 5. [ASSUMED]
   - Recommendation: keep Wave 3 optional and scoped to one command line. [ASSUMED]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator command | ✓ | `v24.13.0` | Blocking if absent; command requires Node. [VERIFIED: shell] |
| npm | External package install | ✓ | `11.6.2` | Unused by Phase 4. [VERIFIED: shell] |
| Git | `git diff --check` | ✓ | available through repository commands | Use direct validator only for core check if Git is unavailable. [VERIFIED: shell usage] |
| `ctx7` CLI | Documentation lookup fallback | ✗ | n/a | Official Node docs were checked through web browsing. [VERIFIED: shell] [CITED: nodejs.org/api/fs.html] |

**Missing dependencies with no fallback:**
- None for the planned repository validator in this environment. [VERIFIED: shell]

**Missing dependencies with fallback:**
- `ctx7` CLI is unavailable; official Node documentation was checked directly. [VERIFIED: shell] [CITED: nodejs.org/api/fs.html]

## Security Domain

Security enforcement is enabled in `.planning/config.json`, and Phase 4 introduces a local file-reading validator script. [VERIFIED: .planning/config.json]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface in this local validator. [VERIFIED: codebase] |
| V3 Session Management | no | No session surface in this local validator. [VERIFIED: codebase] |
| V4 Access Control | yes | Resolve all checked paths under the repository root/package root; reject route reference paths escaping the skill package. [ASSUMED] |
| V5 Input Validation | yes | Parse and validate known file formats and exact markers; handle missing malformed files as failures. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| V6 Cryptography | no | No cryptographic operation is needed. [VERIFIED: codebase] |

### Known Threat Patterns for Local Validators

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Path traversal through route-table reference paths | Tampering | Resolve against skill root and require the resolved path to stay inside `ian-xiaohei-illustrations/`. [ASSUMED] |
| Misleading pass logs from partial checks | Repudiation | Stable check IDs, collected failures, and total/pass/fail counts. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Accidental network or image generation call | Information Disclosure / DoS | Use only Node built-ins and repository files; no network, browser, package install, or `image_gen` calls. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md] |
| Symlink escape in future assets or references | Tampering | Prefer `realpathSync` for path-boundary checks if symlinks enter the repo. [ASSUMED] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/04-validation-hardening/04-CONTEXT.md` - locked validation command, required checks, failure semantics, smoke coverage, lightweight boundary, and Phase 5 boundary.
- `.planning/REQUIREMENTS.md` - VALD-01 through VALD-05 and traceability.
- `.planning/ROADMAP.md` - Phase 4 goal, success criteria, and Phase 5 boundary.
- `.planning/codebase/TESTING.md`, `STRUCTURE.md`, `CONVENTIONS.md`, `ARCHITECTURE.md`, `STACK.md` - no framework, scripts placement, documentation-first structure, and skill package architecture.
- `ian-xiaohei-illustrations/SKILL.md`, `agents/openai.yaml`, `references/routing.md`, `references/ips/**`, root compatibility refs, `README.md`, `examples/prompts.md`, `NOTICE.md`, `LICENSE` - current validation targets and markers.
- Node.js official docs: `https://nodejs.org/api/fs.html`, `https://nodejs.org/api/path.html`, `https://nodejs.org/api/process.html#processexitcode` - built-in API support for filesystem/path/exit-code behavior.

### Secondary (MEDIUM confidence)

- Phase 1/2/3 `*-VERIFICATION.md`, `*-UAT.md`, and `03-05-SUMMARY.md` - prior verification commands and acceptance evidence that Phase 4 should automate.

### Tertiary (LOW confidence)

- Assumptions in this research about exact helper names, parser internals, and negative proof harness shape are marked `[ASSUMED]`.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Node is available locally and official docs confirm stable built-in filesystem/path/process APIs. [VERIFIED: shell] [CITED: nodejs.org/api/fs.html]
- Architecture: HIGH - Phase 4 locked decisions prescribe one self-contained Node validator and deterministic checks. [VERIFIED: .planning/phases/04-validation-hardening/04-CONTEXT.md]
- Pitfalls: MEDIUM - Most risks come from current Markdown shapes and prior verification patterns; parser internals remain implementation assumptions. [VERIFIED: codebase] [ASSUMED]

**Research date:** 2026-06-12
**Valid until:** 2026-07-12 for current repo shape; refresh sooner if route metadata, docs structure, or Node version support changes. [ASSUMED]
