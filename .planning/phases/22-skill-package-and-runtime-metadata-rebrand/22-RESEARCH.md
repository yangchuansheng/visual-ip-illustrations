# Phase 22: Skill Package and Runtime Metadata Rebrand - Research

**Researched:** 2026-06-14
**Domain:** Documentation-first Codex Skill package runtime metadata rebrand
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Skill ID and Frontmatter Strategy

- **D-01:** The canonical skill frontmatter `name` should become `visual-ip-illustrations` so the runtime exposes `$visual-ip-illustrations`.
- **D-02:** The legacy `$ian-xiaohei-illustrations` invocation must remain documented in runtime and metadata surfaces as a compatibility alias during v1.4.
- **D-03:** Runtime wording should lead with `Visual IP Illustrations` and describe the package as a selectable multi-IP article illustration skill.
- **D-04:** Xiaohei remains the omitted-IP default route after the rebrand.
- **D-05:** Phase 22 should preserve the current route behavior while changing canonical discovery surfaces.

### Agent Metadata Copy

- **D-06:** `ian-xiaohei-illustrations/agents/openai.yaml` should lead with display name `Visual IP Illustrations`.
- **D-07:** The agent short description should describe a multi-IP article illustration package with selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routes.
- **D-08:** The agent default prompt should use `$visual-ip-illustrations` as the canonical invocation and mention `$ian-xiaohei-illustrations` as the v1.4 legacy compatibility alias.
- **D-09:** Agent metadata must preserve omitted-IP default behavior for Xiaohei and explicit route behavior for Littlebox, Tom, Ferris, and Sealos Seal.

### Legacy Alias and Runtime Compatibility

- **D-10:** `$ian-xiaohei-illustrations` remains a v1.4 compatibility surface for existing prompts and local installs.
- **D-11:** Compatibility alias documentation should be local to runtime/package metadata during Phase 22, with broader public examples deferred to Phase 23.
- **D-12:** Runtime copy should name the canonical skill id, legacy alias, and migration boundary in one place so downstream validator work can check deterministic markers.

### Package Path Migration Boundary

- **D-13:** The canonical install slug and package path is `visual-ip-illustrations`.
- **D-14:** The legacy path `ian-xiaohei-illustrations` remains a compatibility source during v1.4.
- **D-15:** Package-path migration guidance should be local and conservative: users can copy or install the canonical package path while keeping the legacy path available during transition.
- **D-16:** If Phase 22 introduces a canonical package directory, it must keep legacy package behavior accessible or document a safe copy/migration path.
- **D-17:** Phase 22 should avoid removing the legacy directory unless a validator/test plan protects legacy invocation and package behavior.
- **D-18:** Broad README install command rewrites are Phase 23 work.

### Route Stability Fence

- **D-19:** Existing route ids remain stable: `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`.
- **D-20:** Existing aliases remain stable:
  - Xiaohei: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`
  - Littlebox: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`
  - Tom: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`
  - Ferris: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`
  - Sealos Seal: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal`
- **D-21:** Existing route statuses remain stable: Xiaohei `active`, Littlebox `active`, Tom `gated-authorized`, Ferris `source-reviewed`, and Sealos Seal `brand-owned`.
- **D-22:** Existing required references remain stable for all five routes.
- **D-23:** Existing output suffixes remain stable: Xiaohei `illustrations`, Littlebox `littlebox`, Tom `tom`, Ferris `ferris`, and Sealos Seal `sealos`.
- **D-24:** Existing output directories and generated asset paths remain stable:
  - Xiaohei: `assets/<article-slug>-illustrations/`
  - Littlebox: `assets/<article-slug>-littlebox/`
  - Tom: `assets/<article-slug>-tom/`
  - Ferris: `assets/<article-slug>-ferris/`
  - Sealos Seal: `assets/<article-slug>-sealos/`
- **D-25:** Route-local IP packs, rights/source/brand boundaries, prompt templates, QA gates, edit behavior, and delivery reports stay stable during Phase 22.

### Requirement Mapping

- **PKG-01:** Installed skill metadata exposes `Visual IP Illustrations` as the canonical skill identity.
- **PKG-02:** Agent metadata presents Visual IP Illustrations as the multi-IP article illustration skill while preserving Xiaohei as the omitted-IP default.
- **PKG-03:** Existing route ids, aliases, required references, route statuses, and output suffixes for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal remain stable.
- **PKG-04:** Maintainer can follow documented local migration guidance from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.

### the agent's Discretion

The user requested auto execution and supplied locked selections. The selected implementation stance is conservative: rebrand runtime/package discovery surfaces, preserve all route behavior and output paths, document legacy compatibility locally, and defer public documentation breadth to Phase 23.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Full GitHub repository rename from `ian-xiaohei-illustrations` to `visual-ip-illustrations`, including remote URL migration, redirect behavior, release choreography, and user migration comms.
- v2 installer or selector for installing selected IP variants through a CLI-level package/distribution flow.
- Machine-readable visual-IP manifest for source, license, trademark, brand, endorsement, and canonical image records.
- Public README install command rebrand, canonical examples, NOTICE rebrand wording, release checklist copy, and docs-wide stale old-name-only cleanup are Phase 23 work.
- Validator and Node test expansion for canonical naming, legacy alias compatibility, install guidance, and stale old-name-only surfaces is Phase 24 work unless Phase 22 implementation changes require immediate safety checks.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PKG-01 | Installed skill metadata exposes `Visual IP Illustrations` as the canonical skill identity. | Update `SKILL.md` frontmatter `name` and top-level identity wording; update `SKILL-FM-001` expected canonical name. [VERIFIED: codebase grep] |
| PKG-02 | Agent metadata presents Visual IP Illustrations as the multi-IP article illustration skill while preserving Xiaohei as the omitted-IP default. | Update `agents/openai.yaml` display, short description, and default prompt while keeping `allow_implicit_invocation: true` and default Xiaohei wording. [VERIFIED: codebase grep] |
| PKG-03 | Existing route ids, aliases, required references, route statuses, and output suffixes for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal remain stable. | Keep `references/routing.md` route table values unchanged and rerun route-focused validator/tests. [VERIFIED: codebase grep] |
| PKG-04 | Maintainer can follow documented local migration guidance from `ian-xiaohei-illustrations` to `visual-ip-illustrations`. | Add narrow runtime/package migration wording in `SKILL.md`; broad README install rewrite remains Phase 23. [VERIFIED: 22-CONTEXT.md] |
</phase_requirements>

## Summary

Phase 22 should rebrand only the runtime discovery surfaces: `ian-xiaohei-illustrations/SKILL.md` frontmatter/top copy, `ian-xiaohei-illustrations/agents/openai.yaml`, and the validator/test assertions that currently hard-code the old frontmatter and agent markers. The current route authority is `ian-xiaohei-illustrations/references/routing.md`; its five route rows already match the Phase 21 naming contract route fence and should stay value-stable. [VERIFIED: codebase grep]

The highest-risk implementation detail is that changing `SKILL.md` frontmatter from `ian-xiaohei-illustrations` to `visual-ip-illustrations` immediately invalidates `scripts/validate-skill-package.mjs` check `SKILL-FM-001` and `scripts/validate-skill-package.test.mjs` parser helper assertions. The planner should include a minimal validation sync in Phase 22, because Phase 24 owns broad new coverage, while Phase 22 must keep the local baseline green after changing runtime metadata. [VERIFIED: codebase grep]

**Primary recommendation:** Update canonical runtime metadata now, keep route behavior/path values unchanged, add a compact local migration note in `SKILL.md`, and update only the validator/test checks directly broken by Phase 22 metadata edits. [VERIFIED: codebase grep]

## Project Constraints (from AGENTS.md)

- Every user-facing reply must begin with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing replies must be in Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, PR titles, and PR descriptions must be English. [VERIFIED: AGENTS.md]
- Use GSD workflow before file-changing repo work unless explicitly bypassed. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata. [VERIFIED: AGENTS.md]
- Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working during the transition. [VERIFIED: AGENTS.md]
- Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal rules must remain separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- Preserve attribution/source/brand boundaries for Ian, Littlebox, Tom, Ferris, and Sealos Seal. [VERIFIED: AGENTS.md]
- Keep the repository lightweight: no app framework or build runtime should be introduced. [VERIFIED: AGENTS.md]
- Final image generation remains host-agent `image_gen` dependent. [VERIFIED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Canonical skill invocation | Codex Skill metadata | Agent metadata | `SKILL.md` frontmatter `name` controls the skill id exposed by the runtime, while `agents/openai.yaml` controls display/default prompt copy. [VERIFIED: codebase grep] |
| Legacy alias documentation | Codex Skill metadata | Agent metadata | Phase 22 scope allows local runtime/package alias wording and defers public examples to Phase 23. [VERIFIED: 22-CONTEXT.md] |
| Route stability | Markdown route metadata | Validator/test harness | `references/routing.md` owns route ids, aliases, defaults, output suffixes, required references, and statuses; validator/tests check drift. [VERIFIED: codebase grep] |
| Local migration guidance | Codex Skill package docs | Public docs later | Phase 22 needs local package-path guidance, while broad README install commands are Phase 23. [VERIFIED: 22-CONTEXT.md] |
| Validation baseline | Node script/test harness | Git diff checks | `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` are the current verification path. [VERIFIED: command output] |

## Current Runtime/Package Metadata Surfaces

| Surface | Current Exact String / Behavior | Phase 22 Action |
|---------|---------------------------------|-----------------|
| `SKILL.md` frontmatter `name` | `ian-xiaohei-illustrations` | Change to `visual-ip-illustrations`; update validator/test assertions in the same plan. [VERIFIED: codebase grep] |
| `SKILL.md` frontmatter `description` | Starts with Chinese Xiaohei-centered description: `生成 Ian 风格的中文正文配图...默认使用小黑 IP...` | Rewrite to lead with `Visual IP Illustrations`, selectable visual IP routes, `$visual-ip-illustrations`, and legacy `$ian-xiaohei-illustrations`. Keep Chinese user-facing prose. [VERIFIED: codebase grep] |
| `SKILL.md` H1 | `# Ian 小黑怪诞正文配图` | Change to `# Visual IP Illustrations` or a Chinese subtitle under that heading. [VERIFIED: codebase grep] |
| `SKILL.md` route compatibility line | `小黑路由沿用现有 `$ian-xiaohei-illustrations` 行为...` | Replace with canonical-first wording and keep legacy alias compatibility wording. [VERIFIED: codebase grep] |
| `agents/openai.yaml` `interface.display_name` | `Xiaohei / Littlebox / Tom / Ferris Article Illustrations + Sealos Seal` | Change to start with `Visual IP Illustrations`. [VERIFIED: codebase grep] |
| `agents/openai.yaml` `short_description` | Chinese multi-IP copy naming Xiaohei default and explicit routes | Keep route/default facts, lead with canonical product identity. [VERIFIED: codebase grep] |
| `agents/openai.yaml` `default_prompt` | Starts with `Use $ian-xiaohei-illustrations...` | Change to `Use $visual-ip-illustrations...`; mention `$ian-xiaohei-illustrations` as v1.4 legacy alias. [VERIFIED: codebase grep] |
| `agents/openai.yaml` policy | `allow_implicit_invocation: true` | Preserve unchanged. [VERIFIED: codebase grep] |
| `references/routing.md` route table | Five rows: `xiaohei`, `littlebox`, `tom`, `ferris`, `sealos` | Keep values unchanged; route stability verification should compare before/after table values. [VERIFIED: codebase grep] |
| `scripts/validate-skill-package.mjs` package constant | `const PACKAGE_DIR = "ian-xiaohei-illustrations";` | Keep in Phase 22 unless a duplicate canonical package directory is introduced; package-path distribution is broader than metadata. [VERIFIED: codebase grep] |
| `scripts/validate-skill-package.mjs` `SKILL-FM-001` | Expects frontmatter name `ian-xiaohei-illustrations` | Update expected value to `visual-ip-illustrations`. [VERIFIED: codebase grep] |
| `scripts/validate-skill-package.mjs` `AGENT-TOM-001` | Expects old display marker `Xiaohei / Littlebox / Tom / Ferris Article Illustrations` and route markers | Update display marker only as needed; preserve Tom/Ferris/default route markers or add canonical marker in a new minimal check. [VERIFIED: codebase grep] |
| `scripts/validate-skill-package.test.mjs` parser helper test | Expects `frontmatter.data.name === "ian-xiaohei-illustrations"` | Update to `visual-ip-illustrations`; keep route table assertions unchanged. [VERIFIED: codebase grep] |

## Recommended Edit Set for Phase 22

1. Edit `ian-xiaohei-illustrations/SKILL.md` frontmatter:
   - `name: visual-ip-illustrations`
   - description leads with `Visual IP Illustrations` and names `$visual-ip-illustrations` as canonical.
   - include deterministic markers: `Visual IP Illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, `visual-ip-illustrations`, `ian-xiaohei-illustrations`. [VERIFIED: 22-CONTEXT.md]
2. Edit the top of `SKILL.md`:
   - H1 should lead with `Visual IP Illustrations`.
   - Preserve Xiaohei as omitted-IP default.
   - Preserve all explicit route paragraphs and no-logo Sealos wording.
   - Add local package migration guidance near the identity/reference section. [VERIFIED: codebase grep]
3. Edit `ian-xiaohei-illustrations/agents/openai.yaml`:
   - `display_name` begins with `Visual IP Illustrations`.
   - `short_description` says selectable multi-IP article illustration package and preserves default Xiaohei plus explicit Littlebox/Tom/Ferris/Sealos facts.
   - `default_prompt` starts with `Use $visual-ip-illustrations` and includes `$ian-xiaohei-illustrations` as v1.4 legacy compatibility alias.
   - `allow_implicit_invocation: true` remains unchanged. [VERIFIED: codebase grep]
4. Edit `scripts/validate-skill-package.mjs` minimally:
   - Update `SKILL-FM-001` expected frontmatter name and failure text.
   - Update `AGENT-TOM-001` display marker after the agent display copy changes.
   - Add or extend a minimal runtime metadata check for `Visual IP Illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, `visual-ip-illustrations`, and `ian-xiaohei-illustrations` in `SKILL.md` and/or `openai.yaml`.
   - Keep broad README/examples/NOTICE/release stale-name checks for Phase 24. [VERIFIED: codebase grep]
5. Edit `scripts/validate-skill-package.test.mjs` minimally:
   - Update parser helper frontmatter expected name.
   - Update expected summary counts if new checks are added.
   - Update stable check-id arrays if new checks are added.
   - Update fixture expectations that target old agent display text. [VERIFIED: codebase grep]

## Migration Guidance Placement

Place the conservative migration guidance in `ian-xiaohei-illustrations/SKILL.md`, near the top-level identity/reference-loading area. This keeps PKG-04 satisfied in the runtime/package surface while preserving Phase 23 ownership of README install commands and public examples. [VERIFIED: 22-CONTEXT.md]

Recommended exact wording for `SKILL.md`:

```markdown
## v1.4 Runtime Identity and Local Migration

- Canonical product name: Visual IP Illustrations.
- Canonical skill id: `$visual-ip-illustrations`.
- Legacy compatibility alias during v1.4: `$ian-xiaohei-illustrations`.
- Canonical install slug: `visual-ip-illustrations`.
- Legacy package path: `ian-xiaohei-illustrations`.
- During v1.4, keep the legacy package path available while installing or copying the canonical package path. Existing local prompts that use `$ian-xiaohei-illustrations` remain valid compatibility prompts; new runtime prompts should use `$visual-ip-illustrations`.
```

This wording is intentionally local and conservative: it names the canonical path and legacy path, says both can coexist during v1.4, and avoids claiming that a GitHub repository rename or broad public install flow has landed. [VERIFIED: 22-CONTEXT.md]

## Route Stability Verification Strategy

The planner should add a route-stability checkpoint before and after edits:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
```

The current route table must still expose these exact values after implementation:

| Route | Aliases | Default | Status | Output Suffix | Output Path |
|-------|---------|---------|--------|---------------|-------------|
| `xiaohei` | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `active` | `illustrations` | `assets/<article-slug>-illustrations/` |
| `littlebox` | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `active` | `littlebox` | `assets/<article-slug>-littlebox/` |
| `tom` | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `gated-authorized` | `tom` | `assets/<article-slug>-tom/` |
| `ferris` | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `source-reviewed` | `ferris` | `assets/<article-slug>-ferris/` |
| `sealos` | `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal` | `false` | `brand-owned` | `sealos` | `assets/<article-slug>-sealos/` |

Use existing checks `ROUTE-TABLE-001`, `ROUTE-XH-001`, `ROUTE-LB-001`, `ROUTE-TOM-001`, `ROUTE-FERRIS-001`, `ROUTE-SEALOS-001`, `ROUTE-SEALOS-002`, `ROUTE-DEFAULT-001`, `ROUTE-REFS-001`, `ROUTE-PATHS-001`, and `ROUTE-MIXED-001` as the route-stability gate. [VERIFIED: command output]

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Node.js runtime | v24.13.0 installed locally | Runs dependency-free validator and Node test runner | Existing repository validation uses `node` and `node --test`. [VERIFIED: command output] |
| Node built-in `node:test` | v24.13.0 bundled | Test runner for `scripts/validate-skill-package.test.mjs` | Existing tests import `node:test` and `node:assert/strict`. [VERIFIED: codebase grep] |
| Markdown/YAML text files | repo-local | Runtime skill and agent metadata | Repository is a documentation-first Codex Skill package. [VERIFIED: AGENTS.md] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Git | 2.50.1 | Diff, status, and whitespace validation | Run `git diff --check` and inspect changed files. [VERIFIED: command output] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Minimal text edits | Introduce a generated package manifest | v2 distribution/manifest work is deferred; Phase 22 should keep the lightweight skill package. [VERIFIED: REQUIREMENTS.md] |
| Existing Node scripts | Add package manager/test framework | No build runtime is a project constraint, and current scripts are dependency-free. [VERIFIED: AGENTS.md] |

**Installation:** No external packages are required for Phase 22. [VERIFIED: codebase grep]

## Package Legitimacy Audit

Phase 22 should install no external packages. The package legitimacy gate is skipped because the recommended stack uses existing Node built-ins and repo-local scripts. [VERIFIED: codebase grep]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | — | — | — | — | — | No install required |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none

## Architecture Patterns

### System Architecture Diagram

```text
User invokes skill
  |
  v
Codex Skill loader reads SKILL.md frontmatter
  |-- canonical id: visual-ip-illustrations
  |-- compatibility wording: $ian-xiaohei-illustrations
  v
Agent metadata reads agents/openai.yaml
  |-- display_name
  |-- short_description
  |-- default_prompt
  |-- allow_implicit_invocation
  v
SKILL.md workflow reads references/routing.md
  |
  v
Route decision
  |-- omitted IP -> xiaohei -> assets/<article-slug>-illustrations/
  |-- explicit Littlebox -> littlebox -> assets/<article-slug>-littlebox/
  |-- explicit Tom -> tom -> assets/<article-slug>-tom/
  |-- explicit Ferris -> ferris -> assets/<article-slug>-ferris/
  |-- explicit Sealos Seal -> sealos -> assets/<article-slug>-sealos/
  v
Route-local references -> prompt/QA/edit/delivery behavior
```

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md                  # Runtime skill id, canonical identity, alias/migration note, workflow
├── agents/
│   └── openai.yaml           # Display/default prompt metadata
└── references/
    ├── routing.md            # Route metadata authority; keep values stable
    └── ips/                  # Route-local packs; no Phase 22 edits expected
scripts/
├── validate-skill-package.mjs       # Minimal metadata assertion sync
└── validate-skill-package.test.mjs  # Minimal expected-name/count sync
```

### Pattern 1: Metadata-First Rebrand

**What:** Change canonical discovery strings in runtime metadata first, then update only the checks tied to those strings. [VERIFIED: codebase grep]

**When to use:** Use for Phase 22 because the public docs rebrand and full validator hardening are explicitly later phases. [VERIFIED: ROADMAP.md]

**Example:**

```yaml
interface:
  display_name: "Visual IP Illustrations"
  default_prompt: "Use $visual-ip-illustrations ..."
policy:
  allow_implicit_invocation: true
```

### Pattern 2: Route Table as Stability Contract

**What:** Treat `references/routing.md` as the route behavior authority and avoid editing route row values. [VERIFIED: codebase grep]

**When to use:** Use for all Phase 22 implementation tasks touching runtime copy, because route drift would violate PKG-03. [VERIFIED: REQUIREMENTS.md]

### Anti-Patterns to Avoid

- **README-wide rebrand in Phase 22:** Broad public documentation belongs to Phase 23. Keep only local runtime/package metadata edits. [VERIFIED: 22-CONTEXT.md]
- **Changing route aliases while changing skill name:** Invocation rebrand and IP route alias behavior are different contracts; route aliases must stay stable. [VERIFIED: NAMING-CONTRACT.md]
- **Renaming the package directory without a protected migration plan:** The validator currently reads `PACKAGE_DIR = "ian-xiaohei-illustrations"`; directory duplication or rename expands the blast radius. [VERIFIED: codebase grep]
- **Weakening validation to pass:** Update expected canonical markers and preserve route checks; do not remove route checks. [VERIFIED: codebase grep]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| YAML parsing for current metadata | New parser dependency | Existing `parseSimpleYamlShape` | Current metadata shape is simple and already parsed by validator. [VERIFIED: codebase grep] |
| Route table validation | Custom ad hoc grep per task | Existing `parseMarkdownTable` and route checks | Existing route checks cover ids, aliases, defaults, output suffixes, refs, and paths. [VERIFIED: codebase grep] |
| Test framework | New npm test framework | Node built-in `node:test` | Existing suite uses Node built-ins and no package manager. [VERIFIED: codebase grep] |
| Migration docs | Broad install guide rewrite | Narrow `SKILL.md` migration note now; Phase 23 README later | Scope matches PKG-04 and Phase ownership. [VERIFIED: 22-CONTEXT.md] |

**Key insight:** The rebrand changes discovery metadata, while the user-visible illustration behavior is route-driven. The planner should isolate those surfaces so a naming change cannot alter route behavior. [VERIFIED: codebase grep]

## Runtime State Inventory

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Stored data | None. Repository has no database/datastore; current package state is Markdown/YAML/scripts/assets. [VERIFIED: AGENTS.md] | No data migration. |
| Live service config | None found in repo. Codex local skill installs may exist outside git under `${CODEX_HOME:-$HOME/.codex}/skills`. [VERIFIED: README.md] | Document local copy guidance; no service API patch. |
| OS-registered state | None. No launchd/systemd/pm2/task registration is part of this project. [VERIFIED: codebase grep] | No OS registration task. |
| Secrets/env vars | `CODEX_HOME` appears in install docs as an optional install root variable; no `.env` runtime dependency is part of the package. [VERIFIED: README.md] | Mention `${CODEX_HOME:-$HOME/.codex}/skills` in migration guidance only if needed; avoid secrets work. |
| Build artifacts | None. No package manager/build output is present. [VERIFIED: AGENTS.md] | No artifact migration. |

## Common Pitfalls

### Pitfall 1: Frontmatter Change Breaks Baseline

**What goes wrong:** `SKILL.md` name changes to `visual-ip-illustrations`, then validator/tests still expect `ian-xiaohei-illustrations`. [VERIFIED: codebase grep]

**Why it happens:** `SKILL-FM-001` and parser helper tests hard-code the old name. [VERIFIED: codebase grep]

**How to avoid:** Update `SKILL-FM-001`, parser helper assertion, expected summary counts, and stable id arrays in the same task. [VERIFIED: codebase grep]

**Warning signs:** Validator fails with `expected frontmatter name=ian-xiaohei-illustrations`. [VERIFIED: codebase grep]

### Pitfall 2: Agent Metadata Marker Drift

**What goes wrong:** Rewriting `display_name` removes markers checked by `AGENT-TOM-001` or `AGENT-SEALOS-001`. [VERIFIED: codebase grep]

**Why it happens:** The current Tom/Ferris check also includes a display-name marker. [VERIFIED: codebase grep]

**How to avoid:** Update only the display marker while preserving `default Xiaohei`, Tom gated, Ferris source-reviewed, Sealos brand-owned, uploaded-image authority, and `allow_implicit_invocation: true`. [VERIFIED: codebase grep]

**Warning signs:** Validator fails `AGENT-TOM-001` or `AGENT-SEALOS-001`. [VERIFIED: command output]

### Pitfall 3: Route Behavior Drift Hidden by Naming Work

**What goes wrong:** While editing copy, route aliases/defaults/output suffixes change. [VERIFIED: NAMING-CONTRACT.md]

**Why it happens:** Runtime text and route behavior live close together in `SKILL.md`. [VERIFIED: codebase grep]

**How to avoid:** Keep `references/routing.md` route rows unchanged and rely on route checks after edits. [VERIFIED: codebase grep]

**Warning signs:** Any failure in `ROUTE-*`, `REFS-*`, `PROMPT-*`, `QA-*`, or `BOUNDARY-*-LEAK-*` checks. [VERIFIED: command output]

### Pitfall 4: Phase 23 Scope Bleed

**What goes wrong:** Phase 22 starts rewriting README, examples, NOTICE, and release checklist public copy. [VERIFIED: ROADMAP.md]

**Why it happens:** The old name appears widely in public docs. [VERIFIED: codebase grep]

**How to avoid:** Use Phase 22 only for runtime/package metadata and local migration note; leave public doc rebrand to Phase 23 and validation expansion to Phase 24. [VERIFIED: 22-CONTEXT.md]

**Warning signs:** Large diffs in `README.md`, `examples/prompts.md`, `NOTICE.md`, or `RELEASE_CHECKLIST.md`. [VERIFIED: 22-CONTEXT.md]

## Code Examples

### Minimal Frontmatter Target

```markdown
---
name: visual-ip-illustrations
description: Visual IP Illustrations 为中文文章生成可选视觉 IP 正文配图；canonical invocation 是 `$visual-ip-illustrations`，v1.4 legacy compatibility alias 是 `$ian-xiaohei-illustrations`；省略视觉 IP 时默认使用 Xiaohei，也可以显式选择 Littlebox、Tom、Ferris 或 Sealos Seal。
---
```

### Minimal Agent Metadata Target

```yaml
interface:
  display_name: "Visual IP Illustrations"
  short_description: "Visual IP Illustrations 为中文文章生成可选视觉 IP 正文配图资产；未指定视觉 IP 时 default Xiaohei，也可以显式选择 Littlebox、Tom、Ferris 或 Sealos Seal；Tom 是 explicit gated-authorized protected-character route，Ferris 是 explicit source-reviewed Rust-community mascot route，Sealos Seal 是 explicit brand-owned route with uploaded-image authority。"
  default_prompt: "Use $visual-ip-illustrations to 为这篇中文文章设计并生成几张正文配图；v1.4 legacy compatibility alias: $ian-xiaohei-illustrations；未指定视觉 IP 时 default Xiaohei，也可以显式选择 Littlebox、explicit Tom protected-character route（gated-authorized）、explicit Ferris Rust-community mascot route（source-reviewed）或 explicit Sealos Seal brand-owned route（uploaded-image authority）。"
policy:
  allow_implicit_invocation: true
```

### Minimal Validator Update

```javascript
defineCheck("SKILL-FM-001", "SKILL.md frontmatter exposes required skill metadata", () => {
  const frontmatter = parseFrontmatter(requireFile(SKILL_FILE));
  if (frontmatter.data.name !== "visual-ip-illustrations") {
    throw new Error(
      `${SKILL_FILE} expected frontmatter name=visual-ip-illustrations; observed ${frontmatter.data.name ?? "missing"}`,
    );
  }
  if (!frontmatter.data.description) {
    throw new Error(`${SKILL_FILE} expected non-empty frontmatter description; observed missing value`);
  }
});
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-centered package identity `ian-xiaohei-illustrations` | Canonical product identity `Visual IP Illustrations`, skill id `$visual-ip-illustrations`, legacy alias `$ian-xiaohei-illustrations` | v1.4 Phase 21 contract, 2026-06-14 | Phase 22 updates runtime metadata; Phase 23/24 update public docs and validation breadth. [VERIFIED: NAMING-CONTRACT.md] |
| Route work as individual IP additions | Route table as stable compatibility contract across rebrand | v1.4 Phase 21 contract, 2026-06-14 | Naming changes must preserve five existing routes and output paths. [VERIFIED: NAMING-CONTRACT.md] |
| Validator/test baseline from v1.3 | Current baseline `78/78` validator and `40/40` Node tests | Quick task 260614-k62 and current command run | Phase 22 baseline may increase if new metadata checks are added. [VERIFIED: command output] |

**Deprecated/outdated:**
- `.planning/codebase/TESTING.md` says no automated tests exist; current repo has `scripts/validate-skill-package.test.mjs` and passes `40/40`. Planner should trust live scripts over this stale codebase map section. [VERIFIED: codebase grep]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Codex runtime exposes skill invocation from `SKILL.md` frontmatter `name`. [ASSUMED] | Current Runtime/Package Metadata Surfaces | If runtime also needs directory-level aliasing, Phase 22 may need a package path copy/symlink strategy beyond metadata edits. |

## Open Questions

1. **Should Phase 22 create a physical `visual-ip-illustrations/` directory?**
   - What we know: Phase 22 context names canonical package path `visual-ip-illustrations`, while current validator constant and package tree use `ian-xiaohei-illustrations`. [VERIFIED: codebase grep]
   - What's unclear: Whether v1.4 runtime requires a duplicated physical directory for local install discovery or whether frontmatter name plus migration guidance is enough. [ASSUMED]
   - Recommendation: Keep the legacy directory as source in Phase 22 and document canonical copy guidance; defer physical distribution restructuring unless implementation verification proves the runtime requires it.

2. **Should Phase 22 add new check IDs or only update existing checks?**
   - What we know: Existing checks will break on frontmatter and display-name edits. [VERIFIED: codebase grep]
   - What's unclear: Whether the planner wants Phase 22 to add explicit canonical/legacy metadata checks now or leave all new validation IDs to Phase 24.
   - Recommendation: Add one small metadata-focused check only if needed to keep PKG-01/PKG-04 deterministic; leave broad docs and stale old-name-only scans to Phase 24.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node tests | yes | v24.13.0 | None needed. [VERIFIED: command output] |
| Git | `git diff --check`, status, diff review | yes | 2.50.1 | None needed. [VERIFIED: command output] |
| `gsd-tools` PATH alias | Optional init helper | no | — | Use repository planning files directly. [VERIFIED: command output] |

**Missing dependencies with no fallback:** none.

**Missing dependencies with fallback:**
- `gsd-tools` command was unavailable from PATH during research; repository planning files provided the needed context.

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface; documentation-only skill metadata change. [VERIFIED: AGENTS.md] |
| V3 Session Management | no | No session/runtime service. [VERIFIED: AGENTS.md] |
| V4 Access Control | no | No API or permission model introduced. [VERIFIED: AGENTS.md] |
| V5 Input Validation | yes | Preserve existing route alias and output path validation through dependency-free Node checks. [VERIFIED: codebase grep] |
| V6 Cryptography | no | No cryptography introduced. [VERIFIED: AGENTS.md] |

### Known Threat Patterns for Documentation-First Skill Metadata

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Prompt route confusion from stale alias wording | Spoofing | Canonical and legacy invocation strings appear together in runtime metadata; route table remains unchanged. [VERIFIED: 22-CONTEXT.md] |
| Accidental protected/brand route leakage | Information Disclosure / Policy Drift | Keep existing `BOUNDARY-TOM-LEAK-001`, `BOUNDARY-FERRIS-LEAK-001`, and `BOUNDARY-SEALOS-LEAK-001` green. [VERIFIED: command output] |
| Path traversal in route references | Tampering | Existing validator requires route references start with `references/` and stay inside package path. [VERIFIED: codebase grep] |

## Validation and Expected Baseline

Current baseline before Phase 22 implementation:

```bash
node scripts/validate-skill-package.mjs
# Expected now: Summary: total=78 passed=78 failed=0 skipped=0

node --test scripts/validate-skill-package.test.mjs
# Expected now: tests 40, pass 40, fail 0
```

After implementation, expected baseline depends on test update style:

| Implementation Choice | Validator Expected | Node Test Expected | Notes |
|-----------------------|--------------------|--------------------|-------|
| Update existing checks only | `Summary: total=78 passed=78 failed=0 skipped=0` | `tests 40`, `pass 40`, `fail 0` | Update `SKILL-FM-001`, agent marker assertions, parser helper assertion, and fixture expectations. |
| Add one metadata check for canonical/legacy markers | `Summary: total=79 passed=79 failed=0 skipped=0` | `tests 40` or `tests 41`, all pass | Update `requiredCheckIds`, summary literals, and any stable-order tests. |
| Add multiple Phase 22 checks | Count increases by the number of new checks/tests | Count increases by new `test(...)` blocks | Keep this bounded; Phase 24 owns full naming validation expansion. |

Always run:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

For this research task, also run:

```bash
git diff --check -- .planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-RESEARCH.md
```

## Sources

### Primary (HIGH confidence)

- `AGENTS.md` - project constraints and GSD workflow enforcement.
- `.planning/PROJECT.md` - v1.4 rebrand context, canonical identity, route compatibility.
- `.planning/REQUIREMENTS.md` - PKG-01 through PKG-04 and Phase 22 boundaries.
- `.planning/ROADMAP.md` - Phase 22/23/24 ownership split.
- `.planning/STATE.md` - current Phase 22 position and latest validator/test history.
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` - canonical naming and route/output stability contract.
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-CONTEXT.md` - locked Phase 22 implementation decisions.
- `ian-xiaohei-illustrations/SKILL.md` - current runtime frontmatter and workflow metadata.
- `ian-xiaohei-illustrations/agents/openai.yaml` - current agent display/default prompt metadata.
- `ian-xiaohei-illustrations/references/routing.md` - current route table authority.
- `scripts/validate-skill-package.mjs` - current validator checks and hard-coded metadata expectations.
- `scripts/validate-skill-package.test.mjs` - current Node tests and hard-coded expected counts/name.
- Command output from `node scripts/validate-skill-package.mjs` - current `78/78` baseline.
- Command output from `node --test scripts/validate-skill-package.test.mjs` - current `40/40` baseline.

### Secondary (MEDIUM confidence)

- `/Users/longnv/.codex/memories/MEMORY.md` - prior milestone validation history and repository workflow reminders; current command outputs supersede older counts.

### Tertiary (LOW confidence)

- None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - dependency-free Node scripts and built-in `node:test` verified in current repo.
- Architecture: HIGH - runtime metadata, route table, and validation surfaces verified by reading codebase files.
- Pitfalls: HIGH - hard-coded old frontmatter and agent markers verified in scripts/tests.

**Research date:** 2026-06-14
**Valid until:** 2026-07-14 for this repository snapshot; re-run grep and baseline commands after any Phase 22 implementation edits.
