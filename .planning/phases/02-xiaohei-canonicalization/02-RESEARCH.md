# Phase 2: Xiaohei Canonicalization - Research

**Researched:** 2026-06-12 [VERIFIED: repo grep]  
**Domain:** Documentation-first Codex Skill IP-pack canonicalization, Markdown compatibility paths, route metadata [CITED: .planning/ROADMAP.md]  
**Confidence:** HIGH [VERIFIED: repo grep]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Canonical Pack Shape
- **D-01:** The canonical Xiaohei IP pack lives under `ian-xiaohei-illustrations/references/ips/xiaohei/`.
- **D-02:** The canonical Xiaohei pack keeps the existing five-reference split: style DNA, IP contract, composition rules, prompt template, and quality gate.

### Compatibility
- **D-03:** Legacy root reference paths remain valid compatibility entry points during migration: `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md`.
- **D-04:** Xiaohei route metadata points `required_references` at the canonical Xiaohei pack and documents legacy path availability.
- **D-05:** Xiaohei output path remains `assets/<article-slug>-illustrations/`.

### Xiaohei Contract
- **D-06:** Canonicalized Xiaohei prompt and QA preserve 16:9 format, pure white background, black hand-drawn line art, sparse red/orange/blue Chinese labels, whitespace, and one idea per image.
- **D-07:** Xiaohei character rules preserve solid-black body, white dot eyes, tiny thin legs, deadpan expression, and active conceptual participation.
- **D-08:** Anti-repeat behavior keeps examples as calibration material and keeps generation focused on fresh metaphors for the current article.

### Public Compatibility
- **D-09:** README and `examples/prompts.md` Xiaohei prompts stay copyable and valid; Phase 2 may add canonical-pack pointers while preserving current Xiaohei wording and paths.

### the agent's Discretion
- The agent may choose whether legacy root reference files are thin compatibility shims or full duplicated references, provided the old paths remain readable and the canonical pack is the source for new route metadata.
- The agent may add a compact pack index if it improves maintainability and Phase 4 validation readiness.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Phase 3: Littlebox canonical pack, aliases, route execution, prompt, QA, output path, and attribution.
- Phase 4: validation command for canonical paths, legacy paths, route metadata, prompt placeholders, docs links, and attribution markers.
- Phase 5: broad public documentation refresh, two-IP examples, agent metadata wording, and release checklist.
- v2: machine-readable asset manifest, visual regression, third-IP extension schema.
</user_constraints>

## RESEARCH COMPLETE

Research is complete for Phase 2 Xiaohei Canonicalization. Planner can create scoped implementation tasks for IPCK-01, IPCK-04, XIAO-01, XIAO-02, XIAO-03, XIAO-04, and XIAO-05. [CITED: .planning/REQUIREMENTS.md]

## Summary

Phase 2 should turn the current root-level Xiaohei references into a canonical Xiaohei IP pack under `ian-xiaohei-illustrations/references/ips/xiaohei/` while keeping the five current root paths readable. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] The safest implementation is copy-first canonicalization: create canonical files with the current content, update route metadata to point at those canonical files, then make the old root files compatibility entry points that direct agents to the canonical pack. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] [CITED: ian-xiaohei-illustrations/references/routing.md]

The behavior contract to preserve is explicit in the current references: 16:9 horizontal images, pure white background, black hand-drawn line art, sparse red/orange/blue Chinese handwritten labels, large whitespace, one core idea per image, solid-black Xiaohei with white dot eyes and tiny thin legs, and anti-repeat rules that treat examples as calibration material. [CITED: ian-xiaohei-illustrations/references/style-dna.md] [CITED: ian-xiaohei-illustrations/references/xiaohei-ip.md] [CITED: ian-xiaohei-illustrations/references/composition-patterns.md] [CITED: ian-xiaohei-illustrations/references/prompt-template.md] [CITED: ian-xiaohei-illustrations/references/qa-checklist.md]

**Primary recommendation:** Add `references/ips/xiaohei/` with the same five file names, add a compact `index.md` for pack navigation, update `routing.md` `required_references` to the canonical paths, update `SKILL.md` to describe canonical-first loading with legacy compatibility, and keep README/examples prompts valid with only narrow maintainer-facing path notes. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: README.md] [CITED: examples/prompts.md]

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| IPCK-01 | Maintainer can find Xiaohei's visual language, IP contract, composition rules, prompt template, and quality gate under a canonical Xiaohei IP pack. | Create `references/ips/xiaohei/` with `style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`; add `index.md` for human navigation. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| IPCK-04 | Legacy Xiaohei reference paths remain available during the migration. | Preserve root `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md` as readable compatibility entry points. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| XIAO-01 | Existing Xiaohei prompts from README and `examples/prompts.md` remain valid. | Keep invocation wording and Xiaohei output path in README and examples; add only canonical-pack maintainer pointers. [CITED: README.md] [CITED: examples/prompts.md] |
| XIAO-02 | Xiaohei output keeps the existing path convention `assets/<article-slug>-illustrations/`. | Keep `routing.md` `output_suffix` as `illustrations` and keep `SKILL.md` save contract unchanged for Xiaohei. [CITED: ian-xiaohei-illustrations/references/routing.md] [CITED: ian-xiaohei-illustrations/SKILL.md] |
| XIAO-03 | Xiaohei prompt and QA preserve 16:9, pure white background, black hand-drawn line art, sparse red/orange/blue Chinese labels, whitespace, and one core idea per image. | Copy canonical content from the current style, prompt, and QA references, then verify those required tokens exist in both canonical and compatibility paths. [CITED: ian-xiaohei-illustrations/references/style-dna.md] [CITED: ian-xiaohei-illustrations/references/prompt-template.md] [CITED: ian-xiaohei-illustrations/references/qa-checklist.md] |
| XIAO-04 | Xiaohei IP rules preserve a solid-black character with white dot eyes, tiny thin legs, deadpan expression, and active conceptual participation. | Copy canonical content from `xiaohei-ip.md` and verify prompt-template character text still requires core conceptual action. [CITED: ian-xiaohei-illustrations/references/xiaohei-ip.md] [CITED: ian-xiaohei-illustrations/references/prompt-template.md] |
| XIAO-05 | Xiaohei anti-repeat rules keep examples as calibration material and prohibit default reuse of old motifs. | Preserve `composition-patterns.md` anti-repeat text and `SKILL.md` examples guidance; verify `assets/examples/` stays calibration-only. [CITED: ian-xiaohei-illustrations/references/composition-patterns.md] [CITED: ian-xiaohei-illustrations/SKILL.md] |
</phase_requirements>

## Project Constraints (from AGENTS.md)

- Every user-facing reply begins with `爸爸`. [CITED: AGENTS.md]
- User-facing replies use Simplified Chinese; code, code comments, commit messages, and pull request text use English. [CITED: AGENTS.md]
- Work starts from original need, core problem, constraints, and desired outcome before templates. [CITED: AGENTS.md]
- File-changing work starts through a GSD command; this task is a `$gsd-plan-phase 2` research artifact task. [CITED: AGENTS.md]
- Phase 2 research output edits only `.planning/phases/02-xiaohei-canonicalization/02-RESEARCH.md`; source behavior files stay unchanged during research. [CITED: user request]
- The repository is documentation-driven and uses Markdown/YAML/static assets with no application runtime. [CITED: .planning/codebase/STACK.md]
- No project skills were found under `.codex/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/`. [VERIFIED: repo grep]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Canonical Xiaohei IP pack | Reference Policy Layer | Skill Entrypoint | Xiaohei style, character, composition, prompt, and QA rules live in reference files, while `SKILL.md` loads selected references. [CITED: .planning/codebase/ARCHITECTURE.md] |
| Legacy root reference compatibility | Reference Policy Layer | Public Documentation Layer | Current `SKILL.md`, README, examples, and route metadata reference root files, so old paths are part of the migration contract. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: README.md] [CITED: examples/prompts.md] [CITED: ian-xiaohei-illustrations/references/routing.md] |
| Xiaohei route metadata | Reference Policy Layer | Skill Entrypoint | `references/routing.md` owns route fields and `SKILL.md` reads route metadata before selected references. [CITED: ian-xiaohei-illustrations/references/routing.md] [CITED: ian-xiaohei-illustrations/SKILL.md] |
| Prompt/QA/style parity | Reference Policy Layer | Manual Verification | The parity source is the current five Xiaohei root references and verification can use targeted grep before Phase 4 validation exists. [CITED: ian-xiaohei-illustrations/references/style-dna.md] [CITED: ian-xiaohei-illustrations/references/xiaohei-ip.md] [CITED: ian-xiaohei-illustrations/references/composition-patterns.md] [CITED: ian-xiaohei-illustrations/references/prompt-template.md] [CITED: ian-xiaohei-illustrations/references/qa-checklist.md] |
| Public prompt validity | Public Documentation Layer | Prompt Examples | README and `examples/prompts.md` are the user-copyable Xiaohei prompt surfaces. [CITED: README.md] [CITED: examples/prompts.md] |

## Standard Stack

### Core

| Library / File Type | Version | Purpose | Why Standard |
|---------------------|---------|---------|--------------|
| Markdown | N/A | Skill entrypoint, canonical IP pack files, compatibility files, research docs, README, examples | The repository is a Markdown-first Codex Skill package. [CITED: .planning/codebase/STACK.md] |
| YAML | N/A | Agent metadata in `ian-xiaohei-illustrations/agents/openai.yaml` | Existing agent metadata uses YAML. [CITED: ian-xiaohei-illustrations/agents/openai.yaml] |
| Codex Skill directory | N/A | Installable package under `ian-xiaohei-illustrations/` | README documents copying this directory into `${CODEX_HOME:-$HOME/.codex}/skills`. [CITED: README.md] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `rg` | local CLI | Verify required paths, visual-contract tokens, aliases, output suffix, and compatibility files | Use for Phase 2 verification because Phase 4 owns the future validation command. [CITED: .planning/ROADMAP.md] [VERIFIED: repo grep] |
| `diff -u` | local CLI | Compare canonical files to root compatibility files or to copied source content | Use to confirm canonical content starts from the current Xiaohei text. [VERIFIED: repo grep] |
| Git diff checks | local CLI | Confirm Phase 2 source edits stay scoped and whitespace-clean during implementation | Use before verification and review. [VERIFIED: repo grep] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Canonical files plus thin legacy shims | Full duplicate content in both canonical and root files | Thin shims reduce future drift; full duplicates make old paths self-contained at the cost of two editable sources. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| Same five canonical file names | Renamed canonical files such as `visual-language.md`, `ip.md`, or `quality-gate.md` | Existing five names match current docs and reduce routing update risk in Phase 2; broader naming alignment can happen when Littlebox lands. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `index.md` pack index | No pack index | A compact index makes the pack readable and gives Phase 4 a stable human-facing pack marker. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |

**Installation:** No package installation is required for Phase 2. [CITED: .planning/codebase/STACK.md]

## Package Legitimacy Audit

Phase 2 installs no external packages, so the Package Legitimacy Gate is not applicable. [CITED: .planning/codebase/STACK.md]

## Recommended File Changes for Phase 2

| File | Action | Requirement Coverage | Notes |
|------|--------|----------------------|-------|
| `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` | Add | IPCK-01 | Compact pack index listing the five canonical files and the Xiaohei output path. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` | Add | IPCK-01, XIAO-03 | Copy current `references/style-dna.md` content as canonical source. [CITED: ian-xiaohei-illustrations/references/style-dna.md] |
| `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` | Add | IPCK-01, XIAO-04 | Copy current `references/xiaohei-ip.md` content as canonical source. [CITED: ian-xiaohei-illustrations/references/xiaohei-ip.md] |
| `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` | Add | IPCK-01, XIAO-05 | Copy current `references/composition-patterns.md` content as canonical source. [CITED: ian-xiaohei-illustrations/references/composition-patterns.md] |
| `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` | Add | IPCK-01, XIAO-03, XIAO-04 | Copy current `references/prompt-template.md` content as canonical source. [CITED: ian-xiaohei-illustrations/references/prompt-template.md] |
| `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` | Add | IPCK-01, XIAO-03, XIAO-05 | Copy current `references/qa-checklist.md` content as canonical source. [CITED: ian-xiaohei-illustrations/references/qa-checklist.md] |
| `ian-xiaohei-illustrations/references/style-dna.md` | Update | IPCK-04, XIAO-03 | Keep readable compatibility entry point that points agents to `references/ips/xiaohei/style-dna.md`. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/xiaohei-ip.md` | Update | IPCK-04, XIAO-04 | Keep readable compatibility entry point that points agents to `references/ips/xiaohei/xiaohei-ip.md`. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/composition-patterns.md` | Update | IPCK-04, XIAO-05 | Keep readable compatibility entry point that points agents to `references/ips/xiaohei/composition-patterns.md`. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/prompt-template.md` | Update | IPCK-04, XIAO-03, XIAO-04 | Keep readable compatibility entry point that points agents to `references/ips/xiaohei/prompt-template.md`. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/qa-checklist.md` | Update | IPCK-04, XIAO-03, XIAO-05 | Keep readable compatibility entry point that points agents to `references/ips/xiaohei/qa-checklist.md`. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/routing.md` | Update | IPCK-01, IPCK-04, XIAO-02 | Change Xiaohei `required_references` to canonical paths, keep `output_suffix` as `illustrations`, and add a legacy-path note. [CITED: ian-xiaohei-illustrations/references/routing.md] [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| `ian-xiaohei-illustrations/SKILL.md` | Update | XIAO-01, XIAO-02, XIAO-03, XIAO-04, XIAO-05 | Register canonical Xiaohei pack and keep legacy root paths documented as compatibility references. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| `README.md` | Narrow update | XIAO-01 | Add maintainer-facing canonical path in route/docs sections while preserving copyable Xiaohei prompts. [CITED: README.md] |
| `examples/prompts.md` | Narrow update or leave unchanged | XIAO-01 | Existing prompts are valid because they invoke default or explicit Xiaohei and use the preserved output path. [CITED: examples/prompts.md] |

## Architecture Patterns

### System Architecture Diagram

```text
User request
  |
  v
`SKILL.md` selects `xiaohei`
  |
  v
`references/routing.md`
  |-- required_references --> `references/ips/xiaohei/*`
  |                            |
  |                            v
  |              style-dna + xiaohei-ip + composition
  |              + prompt-template + qa-checklist
  |
  |-- legacy note ---------> root `references/*.md` compatibility entry points
  |
  v
Shared workflow
article understanding -> anchors -> shot list -> per-image generation
-> Xiaohei QA -> save to `assets/<article-slug>-illustrations/`
```

Source: current route-first workflow and Phase 2 canonical path decision. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md
└── references/
    ├── routing.md
    ├── style-dna.md
    ├── xiaohei-ip.md
    ├── composition-patterns.md
    ├── prompt-template.md
    ├── qa-checklist.md
    └── ips/
        └── xiaohei/
            ├── index.md
            ├── style-dna.md
            ├── xiaohei-ip.md
            ├── composition-patterns.md
            ├── prompt-template.md
            └── qa-checklist.md
```

Source: locked canonical pack path and existing five-reference split. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

### Pattern 1: Copy-First Canonical Pack

**What:** Create canonical Xiaohei files by copying the current five root reference files into `references/ips/xiaohei/` before changing route metadata. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]  
**When to use:** Use at the beginning of Phase 2 implementation so canonical behavior starts from the verified current Xiaohei text. [CITED: .planning/phases/01-routing-foundation/01-VERIFICATION.md]

```text
references/style-dna.md              -> references/ips/xiaohei/style-dna.md
references/xiaohei-ip.md             -> references/ips/xiaohei/xiaohei-ip.md
references/composition-patterns.md   -> references/ips/xiaohei/composition-patterns.md
references/prompt-template.md        -> references/ips/xiaohei/prompt-template.md
references/qa-checklist.md           -> references/ips/xiaohei/qa-checklist.md
```

### Pattern 2: Legacy Files as Readable Compatibility Entry Points

**What:** Keep each old root file readable and short, with a direct pointer to its canonical replacement and enough context for an agent that opens the old path. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]  
**When to use:** Use when updating root files after canonical files exist and route metadata points to canonical files. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

```markdown
# Compatibility Reference: Xiaohei Style DNA

Canonical Xiaohei style rules live at `references/ips/xiaohei/style-dna.md`.
This root path remains available during the migration for existing prompts and docs.

Load the canonical file for current Xiaohei behavior.
```

### Pattern 3: Route Metadata Canonical-First

**What:** Update the `xiaohei` row in `references/routing.md` so `required_references` lists canonical pack files. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]  
**When to use:** Use after canonical files exist and before `SKILL.md` tells agents to load selected IP references. [CITED: ian-xiaohei-illustrations/SKILL.md]

```markdown
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
```

### Anti-Patterns to Avoid

- **Moving files without compatibility paths:** Existing root references are named in `SKILL.md`, route metadata, README tree, examples, and codebase maps. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: ian-xiaohei-illustrations/references/routing.md] [CITED: README.md] [CITED: examples/prompts.md] [VERIFIED: repo grep]
- **Changing Xiaohei visual text while moving it:** Phase 2 is canonicalization and compatibility, so style/prompt/QA wording should begin as copied current text. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]
- **Renaming the output suffix:** Phase 2 requires `assets/<article-slug>-illustrations/`, and the current route metadata uses `output_suffix` `illustrations`. [CITED: .planning/REQUIREMENTS.md] [CITED: ian-xiaohei-illustrations/references/routing.md]
- **Adding Littlebox execution:** Phase 3 owns Littlebox canonical pack, aliases, route execution, prompt, QA, output path, and attribution. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] [CITED: .planning/ROADMAP.md]
- **Making root compatibility files the new editing source:** Route metadata should point at canonical files so maintainers see the pack as the primary source. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| IP pack schema | New parser, package manager, or custom runtime | Markdown directory `references/ips/xiaohei/` plus `routing.md` metadata | The project is a lightweight skill package with no build runtime. [CITED: .planning/PROJECT.md] |
| Legacy compatibility | Symlinks or filesystem tricks | Plain Markdown compatibility entry points | Installed Codex skill copies should remain readable on ordinary filesystems. [CITED: README.md] [ASSUMED] |
| Parity testing | Image generation or visual regression | Token-level and diff-level checks against current references | Phase 2 validates prompt text and QA contracts; automated image-quality judgment is out of scope for v1. [CITED: .planning/REQUIREMENTS.md] |
| Littlebox scaffolding | Placeholder Littlebox files in Phase 2 | Leave Littlebox as Phase 3-owned route placeholder | Phase 3 owns Littlebox vertical slice and attribution. [CITED: .planning/ROADMAP.md] |

**Key insight:** Phase 2 should create a stable Xiaohei baseline before Littlebox lands, so every implementation task should preserve current Xiaohei behavior while moving the source of truth into the IP-pack layout. [CITED: .planning/ROADMAP.md] [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

## Runtime State Inventory

Phase 2 is a documentation refactor/canonicalization phase, so runtime-state categories were checked conceptually against the repository shape. [CITED: .planning/ROADMAP.md] [CITED: .planning/codebase/ARCHITECTURE.md]

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | None; repository state is file-based Markdown and static assets. [CITED: .planning/codebase/ARCHITECTURE.md] | No data migration. [CITED: .planning/codebase/ARCHITECTURE.md] |
| Live service config | None; no service runtime or hosted app is defined. [CITED: .planning/codebase/ARCHITECTURE.md] | No service patch. [CITED: .planning/codebase/ARCHITECTURE.md] |
| OS-registered state | None; install target is a copied Codex skill directory, and no OS service registration is defined. [CITED: README.md] [CITED: .planning/codebase/STACK.md] | No OS re-registration. [CITED: .planning/codebase/STACK.md] |
| Secrets/env vars | `CODEX_HOME` is documented only as install-path configuration; no `.env` files were detected by codebase analysis. [CITED: README.md] [CITED: .planning/codebase/STACK.md] | No secret or env-var rename. [CITED: .planning/codebase/STACK.md] |
| Build artifacts | None; no package manifest, build tool, or lockfile is present by design. [CITED: .planning/codebase/STACK.md] | No rebuild step. [CITED: .planning/codebase/STACK.md] |

## Common Pitfalls

### Pitfall 1: Canonical and Legacy Text Drift

**What goes wrong:** Canonical files and legacy files carry different Xiaohei style, prompt, or QA text. [ASSUMED]  
**Why it happens:** Full duplicates create two editable sources. [ASSUMED]  
**How to avoid:** Make canonical files the route metadata source and keep root files as pointer-style compatibility entries. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]  
**Warning signs:** `rg` finds required style tokens in canonical files but root compatibility files contain outdated full policy text. [ASSUMED]

### Pitfall 2: Route Metadata Still Points to Root References

**What goes wrong:** Maintainers cannot discover the canonical pack from the route table. [CITED: .planning/REQUIREMENTS.md]  
**Why it happens:** `routing.md` currently lists root `references/*.md` paths in `required_references`. [CITED: ian-xiaohei-illustrations/references/routing.md]  
**How to avoid:** Update the Xiaohei `required_references` list to `references/ips/xiaohei/*.md` and add a legacy-path note. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]  
**Warning signs:** `rg "references/style-dna.md; references/xiaohei-ip.md" ian-xiaohei-illustrations/references/routing.md` still matches after implementation. [VERIFIED: repo grep]

### Pitfall 3: README and Examples Prompts Become Multi-IP Instructions

**What goes wrong:** Current Xiaohei prompt examples become harder to copy or imply a new mandatory IP argument. [ASSUMED]  
**Why it happens:** Canonicalization wording can leak into user-facing prompt examples. [ASSUMED]  
**How to avoid:** Keep README and `examples/prompts.md` prompt blocks stable; add canonical-path notes only in maintainer-facing prose. [CITED: README.md] [CITED: examples/prompts.md]  
**Warning signs:** Existing examples stop using the current `$ian-xiaohei-illustrations` natural-language prompts. [CITED: examples/prompts.md]

### Pitfall 4: Output Path Regression

**What goes wrong:** Xiaohei generated assets move away from `assets/<article-slug>-illustrations/`. [CITED: .planning/REQUIREMENTS.md]  
**Why it happens:** IP-pack naming can tempt a new `-xiaohei` suffix. [ASSUMED]  
**How to avoid:** Keep `output_suffix` as `illustrations` and keep `SKILL.md` save contract unchanged for Xiaohei. [CITED: ian-xiaohei-illustrations/references/routing.md] [CITED: ian-xiaohei-illustrations/SKILL.md]  
**Warning signs:** `rg "assets/<article-slug>-xiaohei|output_suffix.*xiaohei"` finds new Xiaohei output rules. [ASSUMED]

### Pitfall 5: Anti-Repeat Rules Weaken During Copy

**What goes wrong:** Examples become treated as reusable templates instead of calibration material. [CITED: .planning/REQUIREMENTS.md]  
**Why it happens:** The anti-repeat contract lives in both `SKILL.md` and `composition-patterns.md`, so partial migration can miss one location. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: ian-xiaohei-illustrations/references/composition-patterns.md]  
**How to avoid:** Verify canonical composition and `SKILL.md` both preserve calibration-only language for `assets/examples/`. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: ian-xiaohei-illustrations/references/composition-patterns.md]  
**Warning signs:** Canonical composition guidance lacks `assets/examples/` and old motif names. [CITED: ian-xiaohei-illustrations/references/composition-patterns.md]

## Code Examples

### Canonical Pack Index

```markdown
# Xiaohei IP Pack

Canonical Xiaohei references for the active default route.

- `style-dna.md`: visual language, color, text, and veto rules.
- `xiaohei-ip.md`: character identity, behavior, action library, and veto rules.
- `composition-patterns.md`: structure types, metaphor generation, and anti-repeat rules.
- `prompt-template.md`: single-image generation and edit prompt templates.
- `qa-checklist.md`: post-generation pass/fail checks and iteration rules.

Output path: `assets/<article-slug>-illustrations/`.
```

Source: Phase 2 locked pack shape and current reference responsibilities. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] [CITED: .planning/codebase/CONVENTIONS.md]

### Compatibility Root Reference

```markdown
# Xiaohei Prompt Template Compatibility Reference

Canonical Xiaohei prompt template lives at `references/ips/xiaohei/prompt-template.md`.
This root path remains available during the migration for existing prompts and docs.

Load the canonical file for current Xiaohei behavior.
```

Source: Phase 2 compatibility decision. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

### SKILL.md Canonical-First Reference List

```markdown
- `references/routing.md`: visual IP routing, aliases, output suffixes, required references, and attribution context.
- `references/ips/xiaohei/index.md`: canonical Xiaohei IP pack index.
- `references/ips/xiaohei/style-dna.md`: Xiaohei visual language, color, text, and veto rules.
- `references/ips/xiaohei/xiaohei-ip.md`: Xiaohei character identity, behavior, action library, and veto rules.
- `references/ips/xiaohei/composition-patterns.md`: Xiaohei structure types, metaphor generation, and anti-repeat rules.
- `references/ips/xiaohei/prompt-template.md`: Xiaohei single-image generation prompt and edit templates.
- `references/ips/xiaohei/qa-checklist.md`: Xiaohei post-generation checks and iteration rules.
```

Source: existing progressive-reference list and Phase 2 canonical path decision. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Root Xiaohei references are the active source | Canonical Xiaohei IP pack under `references/ips/xiaohei/` with root compatibility entry points | Phase 2 | Maintainers get a first-class IP pack before Littlebox lands. [CITED: .planning/ROADMAP.md] |
| Route metadata points to root `references/*.md` | Route metadata points to canonical Xiaohei files and documents legacy paths | Phase 2 | Future validation can check canonical paths and compatibility paths separately. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |
| README tree shows only root reference files | README tree may show canonical pack plus compatibility note | Phase 2 | Public prompts remain valid while maintainers see the new pack location. [CITED: README.md] [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] |

**Deprecated/outdated:**
- Treating root `references/style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` as the long-term source of truth is superseded by Phase 2's canonical pack decision. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Thin compatibility files reduce future drift better than duplicate full-text root files. | Standard Stack / Common Pitfalls | A root-path reader may prefer full text; planner can choose full duplicates if immediate standalone readability is prioritized. |
| A2 | Plain Markdown compatibility entries are safer than symlinks across copied Codex skill installs. | Don't Hand-Roll | A runtime that preserves symlinks could support them, but Markdown files are universally readable. |
| A3 | Canonicalization wording can make current examples feel harder to copy. | Common Pitfalls | README/examples may lose user-facing simplicity. |
| A4 | IP-pack naming can tempt a new Xiaohei `-xiaohei` output suffix. | Common Pitfalls | Output path compatibility would regress. |

## Open Questions

1. **Should root compatibility files be thin shims or full duplicated references?**
   - What we know: CONTEXT allows either approach if old paths remain readable and canonical route metadata points to the pack. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]
   - What's unclear: Some agents may stop after reading a root compatibility file and skip the canonical target. [ASSUMED]
   - Recommendation: Use short compatibility files that explicitly instruct agents to load canonical files; keep enough context in the title and first paragraph to make the purpose clear. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

2. **Should Phase 2 add `references/ips/xiaohei/index.md`?**
   - What we know: CONTEXT allows a compact pack index if it improves maintainability and validation readiness. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]
   - What's unclear: Phase 4's exact validation script shape is pending. [CITED: .planning/ROADMAP.md]
   - Recommendation: Add the index because it is low-risk Markdown and gives maintainers one canonical pack landing page. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Local filesystem | Writing Phase 2 research and later Markdown files | Yes | N/A | N/A [VERIFIED: repo grep] |
| `rg` | Verification suggestions and implementation review | Yes | N/A | POSIX `grep` for slower checks [VERIFIED: repo grep] |
| Git | Diff/whitespace checks during implementation | Yes | N/A | Manual file inspection [VERIFIED: repo grep] |
| External services | Phase 2 implementation | N/A | N/A | N/A [CITED: .planning/codebase/STACK.md] |

**Missing dependencies with no fallback:** None for Phase 2 research and Markdown implementation. [CITED: .planning/codebase/STACK.md]

**Missing dependencies with fallback:** No external dependency is required. [CITED: .planning/codebase/STACK.md]

## Validation Architecture

`workflow.nyquist_validation` is explicitly `false`, so the full Nyquist Validation Architecture section is skipped by configuration. [CITED: .planning/config.json]

Phase 2 should still use targeted manual verification:

```bash
test -f ian-xiaohei-illustrations/references/ips/xiaohei/index.md
test -f ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md
test -f ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md
test -f ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md
test -f ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md
test -f ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md

rg "references/ips/xiaohei/(style-dna|xiaohei-ip|composition-patterns|prompt-template|qa-checklist)\\.md" \
  ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/SKILL.md README.md

rg "assets/<article-slug>-illustrations|output_suffix.*illustrations" \
  ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/SKILL.md README.md examples/prompts.md

rg "16:9|纯白背景|黑色手绘|红色|橙色|蓝色|大量留白|一张图只讲一个" \
  ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md \
  ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md \
  ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md

rg "黑色实心|白色圆点眼睛|细腿|空|认真|核心动作|装饰" \
  ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md \
  ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md

rg "assets/examples|不要默认打开或复刻|旧案例|重新发明隐喻" \
  ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md \
  ian-xiaohei-illustrations/SKILL.md

rg "Compatibility|canonical|references/ips/xiaohei" \
  ian-xiaohei-illustrations/references/style-dna.md \
  ian-xiaohei-illustrations/references/xiaohei-ip.md \
  ian-xiaohei-illustrations/references/composition-patterns.md \
  ian-xiaohei-illustrations/references/prompt-template.md \
  ian-xiaohei-illustrations/references/qa-checklist.md

git diff --check -- \
  ian-xiaohei-illustrations/SKILL.md \
  ian-xiaohei-illustrations/references \
  README.md \
  examples/prompts.md
```

These checks match the current no-test-runner state and Phase 4's planned validation direction. [CITED: .planning/codebase/TESTING.md] [CITED: .planning/ROADMAP.md]

## Security Domain

Security enforcement is enabled in `.planning/config.json`; Phase 2 has documentation integrity and package-boundary concerns rather than authentication or service-security code. [CITED: .planning/config.json] [CITED: .planning/codebase/ARCHITECTURE.md]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication flow exists in this skill package. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V3 Session Management | no | No session layer exists in this skill package. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V4 Access Control | no | No API, service, or user-role model exists in this skill package. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V5 Input Validation | yes | Use exact Markdown path verification and prompt-token checks during implementation review. [CITED: .planning/REQUIREMENTS.md] |
| V6 Cryptography | no | No cryptographic operation exists in this skill package. [CITED: .planning/codebase/ARCHITECTURE.md] |

### Known Threat Patterns for Documentation-Driven Skill Packages

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Reference path drift | Tampering | Verify canonical and compatibility paths with `rg` and file-existence checks. [VERIFIED: repo grep] |
| Prompt contract drift | Tampering | Verify required Xiaohei visual and QA tokens in canonical files. [CITED: ian-xiaohei-illustrations/references/prompt-template.md] [CITED: ian-xiaohei-illustrations/references/qa-checklist.md] |
| Package boundary drift | Information Disclosure | Keep runtime behavior inside `ian-xiaohei-illustrations/` and avoid root-only runtime dependencies. [CITED: .planning/codebase/STRUCTURE.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md` - locked Phase 2 decisions, canonical path, compatibility requirements, and deferred scope. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md]
- `.planning/REQUIREMENTS.md` - Phase 2 requirement IDs IPCK-01, IPCK-04, XIAO-01 through XIAO-05. [CITED: .planning/REQUIREMENTS.md]
- `.planning/ROADMAP.md` - Phase 2 goal, dependencies, success criteria, and Phase 3/4/5 boundaries. [CITED: .planning/ROADMAP.md]
- `ian-xiaohei-illustrations/SKILL.md` - current route-first workflow, Xiaohei output path, prompt summary, QA usage, and delivery report. [CITED: ian-xiaohei-illustrations/SKILL.md]
- `ian-xiaohei-illustrations/references/routing.md` - current route metadata fields, Xiaohei aliases, output suffix, and required root references. [CITED: ian-xiaohei-illustrations/references/routing.md]
- Current Xiaohei root references - source text for style, IP, composition, prompt template, and QA parity. [CITED: ian-xiaohei-illustrations/references/style-dna.md] [CITED: ian-xiaohei-illustrations/references/xiaohei-ip.md] [CITED: ian-xiaohei-illustrations/references/composition-patterns.md] [CITED: ian-xiaohei-illustrations/references/prompt-template.md] [CITED: ian-xiaohei-illustrations/references/qa-checklist.md]
- `README.md` and `examples/prompts.md` - current copyable Xiaohei prompts, output path docs, and public route guidance. [CITED: README.md] [CITED: examples/prompts.md]

### Secondary (MEDIUM confidence)

- `.planning/codebase/ARCHITECTURE.md` - architecture layer responsibilities, progressive reference loading, and file-based state. [CITED: .planning/codebase/ARCHITECTURE.md]
- `.planning/codebase/STRUCTURE.md` - directory placement, installable package boundary, and generated-output conventions. [CITED: .planning/codebase/STRUCTURE.md]
- `.planning/codebase/CONVENTIONS.md` - Markdown naming, compact reference style, and reference registration rules. [CITED: .planning/codebase/CONVENTIONS.md]
- `.planning/codebase/STACK.md` - no app runtime, no package manager, and no external dependency posture. [CITED: .planning/codebase/STACK.md]
- `.planning/config.json` - validation and security workflow configuration. [CITED: .planning/config.json]

### Tertiary (LOW confidence)

- No web-only sources were used; Phase 2 research is codebase-local. [VERIFIED: repo grep]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - repository stack and absence of installable dependencies are documented in codebase maps. [CITED: .planning/codebase/STACK.md]
- Architecture: HIGH - Phase 2 path decisions are locked in CONTEXT and align with current reference-layer architecture. [CITED: .planning/phases/02-xiaohei-canonicalization/02-CONTEXT.md] [CITED: .planning/codebase/ARCHITECTURE.md]
- Pitfalls: MEDIUM - root-path drift and output-path regression are grounded in current references, while duplicate-text drift risk is an implementation judgment. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: ian-xiaohei-illustrations/references/routing.md] [ASSUMED]

**Research date:** 2026-06-12 [VERIFIED: repo grep]  
**Valid until:** 2026-07-12 for Phase 2 planning because this is a local Markdown package with no external dependency churn. [ASSUMED]
