# Phase 5: Documentation, Examples, and Release Packaging - Research

**Researched:** 2026-06-12
**Domain:** Documentation-first Codex Skill release readiness
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Public README Entry Point
- **D-01:** `README.md` is the primary public entrypoint for two-IP usage. It must clearly state that Xiaohei remains the default route for omitted-IP requests and that Littlebox is an explicit selectable IP.
- **D-02:** `README.md` remains concise and Chinese-first. It should reuse the existing example images as Xiaohei style calibration assets and should not import rendered Littlebox images in Phase 5.
- **D-03:** `README.md` examples must cover Xiaohei planning, Xiaohei generation, Littlebox planning, Littlebox generation, and same-idea IP contrast.

### Copyable Prompt Examples
- **D-04:** `examples/prompts.md` must be expanded into copyable, sectioned prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, mixed-IP variants, validation/smoke use, and editing flows.
- **D-05:** `examples/prompts.md` must preserve route/path markers required by `scripts/validate-skill-package.mjs`, including raw and escaped output-path tokens for Xiaohei and Littlebox, route smoke headings, canonical pack paths, and mixed-IP variant group wording.

### Agent Metadata
- **D-06:** `ian-xiaohei-illustrations/agents/openai.yaml` must update `interface.display_name`, `interface.short_description`, and `interface.default_prompt` to describe selectable IP support while preserving Xiaohei as the default behavior and keeping `policy.allow_implicit_invocation: true`.

### Release Checklist
- **D-07:** Add a lightweight release checklist document, preferably `RELEASE_CHECKLIST.md`, for maintainers. It must include the validation command, Node test command, both-IP smoke prompts, attribution/NOTICE review, installable package boundary review, and the Phase 5 boundary that rendered Littlebox assets are not imported unless future scope explicitly changes.

### Validation Ownership
- **D-08:** Phase 5 must run `node scripts/validate-skill-package.mjs` after docs and metadata changes. Update the validator only when public docs intentionally change required markers, and preserve Phase 4's lightweight dependency-free validator boundary.

### Scope Boundary
- **D-09:** Keep Phase 5 lightweight: no CI workflow, no package archive, no rendered image generation, no asset manifest, and no third-IP schema.

### the agent's Discretion
- The agent may choose the exact README section order and heading names as long as D-01 through D-03 are satisfied and the document stays concise.
- The agent may decide whether `RELEASE_CHECKLIST.md` is linked from README or referenced from maintainer sections, provided maintainers can discover it from public docs.
- The agent may make small validator marker updates when docs wording changes intentionally, provided `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` both pass afterward.

### Deferred Ideas (OUT OF SCOPE)
- CI workflow for validator and tests.
- Release archive or packaging script.
- Rendered Littlebox public image import.
- Machine-readable asset manifest.
- Third-IP schema or arbitrary custom IP import.
- Full English localization pass for public docs.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DOCS-01 | README explains that the skill supports multiple visual IPs and that Xiaohei remains the default. [VERIFIED: .planning/REQUIREMENTS.md] | Update README introduction, output, visual IP routing, usage, and maintainer sections while preserving Xiaohei default wording and route markers. [VERIFIED: README.md] [VERIFIED: scripts/validate-skill-package.mjs] |
| DOCS-02 | README includes concise examples for Xiaohei planning, Xiaohei generation, Littlebox planning, Littlebox generation, and same-idea IP contrast. [VERIFIED: .planning/REQUIREMENTS.md] | Add a compact README example block and point full prompt coverage to `examples/prompts.md`. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| DOCS-03 | `examples/prompts.md` includes copyable prompts for both IPs and mixed-IP variants. [VERIFIED: .planning/REQUIREMENTS.md] | Expand prompt sections while preserving validator smoke headings, alias markers, raw/escaped output paths, canonical pack paths, and variant group wording. [VERIFIED: examples/prompts.md] [VERIFIED: scripts/validate-skill-package.mjs] |
| DOCS-05 | `agents/openai.yaml` metadata reflects selectable IP support while preserving the Xiaohei default. [VERIFIED: .planning/REQUIREMENTS.md] | Update only `interface.display_name`, `interface.short_description`, and `interface.default_prompt`; keep `policy.allow_implicit_invocation: true`. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml] [VERIFIED: scripts/validate-skill-package.mjs] |
| DOCS-06 | Release checklist tells maintainers to run validation, smoke-test both IPs, review attribution, and check installable package boundaries. [VERIFIED: .planning/REQUIREMENTS.md] | Add root `RELEASE_CHECKLIST.md` and link it from README maintainer material. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
</phase_requirements>

## Summary

Phase 5 is a documentation and release-material phase around an already working two-IP skill package. [VERIFIED: .planning/ROADMAP.md] The planner should preserve Phase 4's validator contract as the guardrail while editing `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and a new root `RELEASE_CHECKLIST.md`. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

The current repository already passes the Phase 4 validator with `Summary: total=34 passed=34 failed=0 skipped=0` and the validator test suite with 7 passing tests. [VERIFIED: shell: node scripts/validate-skill-package.mjs] [VERIFIED: shell: node --test scripts/validate-skill-package.test.mjs] Phase 5 should keep the validator stable unless intentional docs wording changes require a marker update, and any marker update must be paired with validator and test updates in the same plan. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**Primary recommendation:** Split Phase 5 into three waves: README + release checklist, prompt examples, and metadata + validation closeout. [VERIFIED: codebase] This keeps user-facing docs, copyable fixtures, and metadata validation in separate write sets while allowing every wave to run the same lightweight verification commands. [VERIFIED: scripts/validate-skill-package.mjs]

## Project Constraints (from AGENTS.md)

- User-facing replies must begin with `爸爸`; project artifacts remain English where requested by the workflow context. [VERIFIED: AGENTS.md]
- User-facing replies should be Simplified Chinese; code, code comments, commit messages, and pull request titles/descriptions stay English. [VERIFIED: AGENTS.md]
- Start from the original need, core problem, constraints, and desired outcome before applying templates. [VERIFIED: AGENTS.md]
- Prefer durable root-cause fixes and direct positive claims. [VERIFIED: AGENTS.md]
- Repository docs may stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English. [VERIFIED: AGENTS.md]
- Before file-changing work, use a GSD workflow entry point unless explicitly bypassed. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local references, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Preserve existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts. [VERIFIED: AGENTS.md]
- Keep Xiaohei and Littlebox rules separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- Preserve MIT license notices and derived documentation attribution for Ian and okooo5km. [VERIFIED: AGENTS.md]
- Keep the package lightweight with script-based validation and no full app framework. [VERIFIED: AGENTS.md]
- Final generation depends on host `image_gen`; Phase 5 release docs should describe smoke prompts, not generate final images. [VERIFIED: AGENTS.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Public two-IP explanation | Public Documentation | Skill Package | README is the public entry point; behavior must match `SKILL.md` and `routing.md`. [VERIFIED: README.md] [VERIFIED: ian-xiaohei-illustrations/SKILL.md] |
| Copyable prompts and smoke fixtures | Public Documentation | Validator | `examples/prompts.md` is both user-facing prompt inventory and validator smoke fixture input. [VERIFIED: examples/prompts.md] [VERIFIED: scripts/validate-skill-package.mjs] |
| Agent metadata copy | Agent Metadata | Skill Package | `openai.yaml` controls display copy and implicit invocation, while behavior remains in `SKILL.md`. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml] [VERIFIED: .planning/codebase/ARCHITECTURE.md] |
| Release checklist | Public Documentation | Validator | A root checklist gives maintainers executable release steps and points to the local validator/test commands. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| Phase 4 validator preservation | Validator Script | Public Documentation | The validator reads docs, metadata, routing, references, assets, and NOTICE markers to catch drift. [VERIFIED: scripts/validate-skill-package.mjs] |
| Scope guard | Planning Docs | Public Documentation | Phase 5 excludes CI, archives, rendered Littlebox assets, asset manifests, and third-IP schema. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Markdown | N/A | README, prompt examples, release checklist, skill references, and planning docs. [VERIFIED: .planning/codebase/STACK.md] | The repository is a documentation-first Codex Skill package. [VERIFIED: .planning/codebase/STACK.md] |
| YAML | N/A | `ian-xiaohei-illustrations/agents/openai.yaml` metadata. [VERIFIED: .planning/codebase/STACK.md] | Agent metadata already uses this format. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml] |
| Node.js | v24.13.0 | Run the dependency-free validator and Node built-in tests. [VERIFIED: shell: node --version] | Phase 4 validator is a plain Node script using Node built-ins. [VERIFIED: scripts/validate-skill-package.mjs] |
| Git | 2.50.1 (Apple Git-155) | Commit research and later docs changes; run whitespace checks. [VERIFIED: shell: git --version] | The workflow requires committing research and Phase 5 will need commit-backed planning artifacts. [VERIFIED: .planning/config.json] |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| `scripts/validate-skill-package.mjs` | repository script | Validate package shape, docs markers, route markers, metadata shape, attribution, and boundaries. [VERIFIED: scripts/validate-skill-package.mjs] | Run after every Phase 5 write set. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| Node built-in test runner | bundled with Node v24.13.0 | Run `scripts/validate-skill-package.test.mjs`. [VERIFIED: shell: node --test scripts/validate-skill-package.test.mjs] | Run after validator changes and at phase closeout. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| `rg` | available in shell use | Confirm documentation markers and release checklist links during planning/execution. [VERIFIED: shell usage] | Use for targeted marker proof and phase verification evidence. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Root `RELEASE_CHECKLIST.md` | README-only checklist | Root checklist is locked as preferred in Phase 5 context and keeps README concise. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| Node built-in validation | CI workflow | CI is deferred and out of scope for Phase 5. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| Existing Xiaohei example images | Import rendered Littlebox examples | Rendered Littlebox image import is out of scope and validator has `BOUNDARY-IMG-001` against Littlebox image filenames. [VERIFIED: scripts/validate-skill-package.mjs] |

**Installation:** No external packages should be installed for Phase 5. [VERIFIED: .planning/codebase/STACK.md]

```bash
# No npm install step for this phase.
```

## Architecture Patterns

### System Architecture Diagram

```text
User / Maintainer
  |
  v
README.md ---------------> examples/prompts.md
  |                              |
  |                              v
  |                       smoke prompt markers
  |                              |
  v                              v
RELEASE_CHECKLIST.md ---> scripts/validate-skill-package.mjs ---> PASS/FAIL summary
  |                              ^
  |                              |
  v                              |
agents/openai.yaml --------------+
  |
  v
Codex Skill loader surfaces selectable-IP metadata
```

This flow reflects Phase 5's documentation tier: docs teach usage, examples provide copyable prompts and smoke fixtures, metadata exposes the skill, and the validator proves the package contract. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] [VERIFIED: scripts/validate-skill-package.mjs]

### Recommended Project Structure

```text
.
├── README.md
├── RELEASE_CHECKLIST.md
├── examples/
│   └── prompts.md
├── ian-xiaohei-illustrations/
│   └── agents/
│       └── openai.yaml
└── scripts/
    ├── validate-skill-package.mjs
    └── validate-skill-package.test.mjs
```

The expected Phase 5 write set is `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and `RELEASE_CHECKLIST.md`; validator edits are allowed only when public marker changes are intentional. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

### Pattern 1: README as Concise Public Entry Point

**What:** Keep README Chinese-first, front-load multi-IP support and Xiaohei default behavior, then show concise examples and link to deeper prompts/checklist. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**When to use:** Use for DOCS-01 and DOCS-02. [VERIFIED: .planning/REQUIREMENTS.md]

**Implementation guidance:** Add or update these README zones. [VERIFIED: README.md]

| README Zone | Required Change |
|-------------|-----------------|
| Top description / "这个仓库是什么" | State that the skill supports selectable visual IPs and Xiaohei is the default when the user omits an IP. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| "它会产出什么" | Mention Xiaohei path `assets/<article-slug>-illustrations/` and Littlebox path `assets/<article-slug>-littlebox/`; keep both raw and escaped tokens somewhere in README. [VERIFIED: scripts/validate-skill-package.mjs] |
| "视觉风格" | Explain Xiaohei default and Littlebox selectable style at high level; reuse existing images as Xiaohei calibration only. [VERIFIED: README.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| "视觉 IP 路由" | Preserve aliases, output paths, canonical pack paths, and routing metadata link. [VERIFIED: README.md] [VERIFIED: scripts/validate-skill-package.mjs] |
| "怎么用" | Add concise examples for Xiaohei planning, Xiaohei generation, Littlebox planning, Littlebox generation, and same-idea contrast. [VERIFIED: .planning/REQUIREMENTS.md] |
| Maintainer / validation section | Link `RELEASE_CHECKLIST.md` and keep `node scripts/validate-skill-package.mjs`. [VERIFIED: README.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |

### Pattern 2: Prompt Examples as Copyable Fixtures

**What:** Use `examples/prompts.md` as a structured prompt catalog and as the manual smoke source consumed by validator marker checks. [VERIFIED: examples/prompts.md] [VERIFIED: scripts/validate-skill-package.mjs]

**When to use:** Use for DOCS-03 and release smoke coverage. [VERIFIED: .planning/REQUIREMENTS.md]

**Implementation guidance:** Preserve the current smoke headings exactly unless validator checks are updated intentionally. [VERIFIED: scripts/validate-skill-package.mjs]

| Section Family | Required Content |
|----------------|------------------|
| Route smoke | Keep `## 路由烟测：省略视觉 IP`, `## 路由烟测：显式选择 Xiaohei`, `## 路由烟测：显式选择 Littlebox`, and `## 路由说明：多 IP 请求`. [VERIFIED: scripts/validate-skill-package.mjs] |
| Default Xiaohei | Include omitted-IP prompt, `默认视觉 IP`, `shot list`, and selected-IP wording. [VERIFIED: scripts/validate-skill-package.mjs] |
| Explicit Xiaohei | Include aliases `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`; include raw and escaped Xiaohei paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| Explicit Littlebox | Include aliases `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`; include `Littlebox state: closed`, `visual metaphor`, `assigned background`, and raw/escaped Littlebox paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| Mixed IP | Include `core idea`, `Xiaohei variant group`, `Littlebox variant group`, and both raw output paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| Canonical references | Include `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/xiaohei/`, and `ian-xiaohei-illustrations/references/ips/littlebox/`. [VERIFIED: scripts/validate-skill-package.mjs] |
| Editing flows | Keep useful edit prompts, and add route-specific edit wording only when it matches `SKILL.md` behavior. [VERIFIED: ian-xiaohei-illustrations/SKILL.md] |

### Pattern 3: Metadata Copy Without Behavior Drift

**What:** Update `openai.yaml` display metadata so the installed skill surfaces selectable IP support. [VERIFIED: .planning/REQUIREMENTS.md]

**When to use:** Use for DOCS-05. [VERIFIED: .planning/REQUIREMENTS.md]

**Recommended field boundaries:** [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml]

```yaml
interface:
  display_name: "Ian Xiaohei / Littlebox Illustrations"
  short_description: "为中文文章生成可选 Xiaohei 或 Littlebox 视觉 IP 的正文配图资产，默认使用 Xiaohei。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时默认使用 Xiaohei，也可以显式选择 Littlebox。"
policy:
  allow_implicit_invocation: true
```

The exact wording can differ, but `interface.display_name`, `interface.short_description`, `interface.default_prompt`, and `policy.allow_implicit_invocation: true` must remain present. [VERIFIED: scripts/validate-skill-package.mjs]

### Pattern 4: Release Checklist as Maintainer Gate

**What:** Add `RELEASE_CHECKLIST.md` at the repository root with practical release steps and a Phase 5 scope fence. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**When to use:** Use for DOCS-06. [VERIFIED: .planning/REQUIREMENTS.md]

**Required checklist contents:** [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

- Run `node scripts/validate-skill-package.mjs`. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
- Run `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Smoke-test default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variants from `examples/prompts.md`. [VERIFIED: .planning/phases/04-validation-hardening/04-UAT.md]
- Review `NOTICE.md` for Ian and Littlebox attribution markers. [VERIFIED: NOTICE.md]
- Confirm installable package boundary: copy `ian-xiaohei-illustrations/` only; root README, examples, NOTICE, LICENSE, and release docs are public distribution docs. [VERIFIED: README.md]
- Confirm rendered Littlebox public assets remain out of scope for Phase 5. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
- Confirm deferred items stay deferred: CI, archive script, asset manifest, third-IP schema, full English localization. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

### Anti-Patterns to Avoid

- **Overwriting validator smoke markers during prose cleanup:** This breaks `SMOKE-*`, `DOC-PATHS-001`, or `DOC-ROUTES-001`. [VERIFIED: scripts/validate-skill-package.mjs]
- **Making Littlebox the default in docs or metadata:** Xiaohei is the only default route. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] [VERIFIED: scripts/validate-skill-package.mjs]
- **Adding rendered Littlebox images under example asset directories:** `BOUNDARY-IMG-001` rejects filenames matching `littlebox`, `小盒`, or `carton`. [VERIFIED: scripts/validate-skill-package.mjs]
- **Adding CI, archives, asset manifests, or third-IP schema:** These are deferred or v2 scope. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
- **Moving behavior rules into README:** Behavior is owned by `SKILL.md`, `routing.md`, and IP pack references; README should teach usage and point to sources. [VERIFIED: .planning/codebase/ARCHITECTURE.md]

## File-by-File Implementation Guidance

| File | Planner Guidance | Key Markers / Constraints |
|------|------------------|---------------------------|
| `README.md` | Make it the concise public two-IP entry point; state Xiaohei default early; add five concise examples; link full prompts and release checklist. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] | Preserve local image links, `examples/prompts.md` link, raw and escaped output path tokens for both IPs, `ian-xiaohei-illustrations/references/routing.md`, and canonical pack paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| `examples/prompts.md` | Expand into copyable prompt groups for default Xiaohei, explicit Xiaohei, explicit Littlebox, mixed-IP variants, validation/smoke use, and editing flows. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] | Preserve current smoke headings, aliases, `Littlebox state: closed`, `visual metaphor`, `assigned background`, `core idea`, `Xiaohei variant group`, `Littlebox variant group`, raw/escaped output path tokens, and canonical pack paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Update display metadata to mention selectable IP support and Xiaohei default. [VERIFIED: .planning/REQUIREMENTS.md] | Keep nested `interface` keys and `policy.allow_implicit_invocation: true`. [VERIFIED: scripts/validate-skill-package.mjs] |
| `RELEASE_CHECKLIST.md` | Add root maintainer release checklist; keep it practical and command-oriented. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] | Include validator command, Node test command, both-IP smoke prompts, attribution review, installable package boundary, rendered Littlebox asset boundary, and deferred-scope fence. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| `scripts/validate-skill-package.mjs` | Prefer no changes; update only if docs intentionally rename required markers. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] | Keep 34-check contract or update tests and verification evidence with any intentional check matrix change. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| `scripts/validate-skill-package.test.mjs` | Prefer no changes; update only alongside validator check matrix changes. [VERIFIED: scripts/validate-skill-package.test.mjs] | Current suite expects stable check IDs and 34 result lines. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| `NOTICE.md` | Read as release-checklist target; Phase 5 likely should not edit it because DOCS-04 is already implemented. [VERIFIED: .planning/REQUIREMENTS.md] | Preserve Ian and Littlebox attribution markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| `ian-xiaohei-illustrations/SKILL.md` and `references/**` | Treat as behavioral sources for docs alignment; Phase 5 does not need behavior edits. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] | Existing route and IP behavior are already validator-proven. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md] |

## Validator Compatibility Notes

The Phase 4 validator currently checks 34 ordered IDs and exits nonzero on failures. [VERIFIED: scripts/validate-skill-package.test.mjs] The checks most likely affected by Phase 5 docs edits are listed below. [VERIFIED: scripts/validate-skill-package.mjs]

| Check ID | Affected By | Preserve / Update Rule |
|----------|-------------|------------------------|
| `AGENT-SHAPE-001` | `openai.yaml` edit | Required keys must remain present; `policy.allow_implicit_invocation` must stay boolean `true`. [VERIFIED: scripts/validate-skill-package.mjs] |
| `DOC-LINKS-001` | README/examples local links | Every local Markdown link target must exist inside the repository. [VERIFIED: scripts/validate-skill-package.mjs] |
| `DOC-PATHS-001` | README/examples path wording | Both docs must include raw and HTML-escaped path tokens for Xiaohei and Littlebox. [VERIFIED: scripts/validate-skill-package.mjs] |
| `DOC-ROUTES-001` | README/examples route wording | Combined docs must include route metadata path, both canonical pack paths, and names `Xiaohei` and `Littlebox`. [VERIFIED: scripts/validate-skill-package.mjs] |
| `SMOKE-DEFAULT-001` | Default route prompt headings/content | Keep omitted-IP route smoke section and markers `默认视觉 IP`, `shot list`, and `所选视觉 IP`. [VERIFIED: scripts/validate-skill-package.mjs] |
| `SMOKE-XH-001` | Explicit Xiaohei prompts | Keep explicit Xiaohei heading, aliases, and raw Xiaohei output path. [VERIFIED: scripts/validate-skill-package.mjs] |
| `SMOKE-LB-001` | Explicit Littlebox prompts | Keep explicit Littlebox heading, aliases, Littlebox planning markers, and raw Littlebox output path. [VERIFIED: scripts/validate-skill-package.mjs] |
| `SMOKE-MIXED-001` | Mixed-IP prompts | Keep mixed-IP heading, `core idea`, both variant group markers, and both raw output paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| `BOUNDARY-IMG-001` | Example asset directories | Do not add Littlebox-rendered filenames under `examples/images` or skill-local `assets/examples`. [VERIFIED: scripts/validate-skill-package.mjs] |
| `NOTICE-IAN-001` / `NOTICE-LB-001` | Attribution edits | Preserve all attribution markers if NOTICE is touched. [VERIFIED: scripts/validate-skill-package.mjs] |

## Proposed Plan Split

| Wave | Plan | Write Set | Requirements | Verification |
|------|------|-----------|--------------|--------------|
| 1 | Public README and release checklist | `README.md`, `RELEASE_CHECKLIST.md` | DOCS-01, DOCS-02, DOCS-06 | `node scripts/validate-skill-package.mjs`; `rg -n "RELEASE_CHECKLIST.md|node scripts/validate-skill-package\\.mjs|node --test scripts/validate-skill-package\\.test\\.mjs|Xiaohei|Littlebox" README.md RELEASE_CHECKLIST.md`; `git diff --check -- README.md RELEASE_CHECKLIST.md`. [VERIFIED: codebase] |
| 2 | Copyable prompt examples | `examples/prompts.md` | DOCS-03 | `node scripts/validate-skill-package.mjs`; `rg -n "路由烟测：省略视觉 IP|路由烟测：显式选择 Xiaohei|路由烟测：显式选择 Littlebox|路由说明：多 IP 请求|assets/<article-slug>-illustrations/|assets/&lt;article-slug&gt;-littlebox/|Xiaohei variant group|Littlebox variant group" examples/prompts.md`; `git diff --check -- examples/prompts.md`. [VERIFIED: scripts/validate-skill-package.mjs] |
| 3 | Agent metadata and closeout proof | `ian-xiaohei-illustrations/agents/openai.yaml`; validator/test files only if required | DOCS-05 plus phase gate | `node scripts/validate-skill-package.mjs`; `node --test scripts/validate-skill-package.test.mjs`; `git diff --check`; targeted `rg` for metadata and release docs. [VERIFIED: scripts/validate-skill-package.test.mjs] |

This split keeps the most brittle fixture file, `examples/prompts.md`, isolated from README prose work. [VERIFIED: scripts/validate-skill-package.mjs]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Release packaging | Archive builder or release script | Root `RELEASE_CHECKLIST.md` plus existing validator/test commands | Packaging scripts are deferred and the package has no build runtime. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| Docs validation | New lint framework | `node scripts/validate-skill-package.mjs` and existing Node test suite | Phase 4 already provides the drift gate and the repo has no package manager. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md] [VERIFIED: .planning/codebase/STACK.md] |
| Visual smoke automation | Image generation in tests | Text smoke prompts in `examples/prompts.md` and manual release checklist steps | Image generation depends on host `image_gen` and v1 keeps visual QA manual. [VERIFIED: .planning/REQUIREMENTS.md] |
| Littlebox public image import | New rendered examples | Existing Xiaohei images as calibration and text-only Littlebox prompts | Rendered Littlebox imports are out of scope and guarded by `BOUNDARY-IMG-001`. [VERIFIED: scripts/validate-skill-package.mjs] |
| Metadata behavior | Runtime logic in `openai.yaml` | Display copy only, with behavior in `SKILL.md` and references | `openai.yaml` exposes display metadata; skill behavior lives in Markdown workflow and route references. [VERIFIED: .planning/codebase/ARCHITECTURE.md] |

**Key insight:** Phase 5 should make the finished two-IP behavior understandable and releasable; it should not expand runtime behavior or distribution machinery. [VERIFIED: .planning/ROADMAP.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

## Common Pitfalls

### Pitfall 1: Breaking Validator Markers During Better Prose

**What goes wrong:** Docs read better but omit raw/escaped path tokens, canonical pack paths, or smoke headings. [VERIFIED: scripts/validate-skill-package.mjs]

**Why it happens:** `README.md` and `examples/prompts.md` are both user docs and validator inputs. [VERIFIED: scripts/validate-skill-package.mjs]

**How to avoid:** Run the validator after each write set and preserve marker tables in this research. [VERIFIED: shell: node scripts/validate-skill-package.mjs]

**Warning signs:** `DOC-PATHS-001`, `DOC-ROUTES-001`, or `SMOKE-*` fails. [VERIFIED: scripts/validate-skill-package.mjs]

### Pitfall 2: Metadata Copy Makes Littlebox Look Default

**What goes wrong:** The metadata mentions both IPs but loses the Xiaohei default. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**Why it happens:** Metadata copy is short and can compress the default behavior away. [ASSUMED]

**How to avoid:** Include "default Xiaohei" in `short_description` or `default_prompt`; keep `allow_implicit_invocation: true`. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] [VERIFIED: scripts/validate-skill-package.mjs]

**Warning signs:** `openai.yaml` says selectable IPs but no default route; planner should add a grep check for `默认|default|Xiaohei`. [ASSUMED]

### Pitfall 3: Release Checklist Expands Into Automation

**What goes wrong:** A checklist task turns into CI, archives, package scripts, or asset manifests. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**Why it happens:** The phase title includes release packaging, while locked D-09 keeps the implementation lightweight. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**How to avoid:** Use a root checklist only and list deferred automation explicitly inside it. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

**Warning signs:** New `.github/workflows`, archive scripts, manifest schemas, or Littlebox image assets appear in the write set. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

### Pitfall 4: README Becomes a Behavior Spec

**What goes wrong:** README duplicates detailed IP rules and drifts from `SKILL.md` or IP pack references. [VERIFIED: .planning/codebase/ARCHITECTURE.md]

**Why it happens:** Phase 5 public docs need enough detail for users, but behavior already lives in the installable package. [VERIFIED: ian-xiaohei-illustrations/SKILL.md]

**How to avoid:** Keep README examples concise and route detailed behavior to `examples/prompts.md`, `routing.md`, and canonical IP packs. [VERIFIED: README.md] [VERIFIED: ian-xiaohei-illustrations/references/routing.md]

**Warning signs:** README contains long prompt-template rules or full Littlebox QA details. [ASSUMED]

## Code Examples

### Release Checklist Command Block

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Use this command block in `RELEASE_CHECKLIST.md` or a compact README maintainer section. [VERIFIED: scripts/validate-skill-package.mjs] [VERIFIED: scripts/validate-skill-package.test.mjs]

### Same-Idea IP Contrast Prompt

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用同一个 core idea 分别输出 Xiaohei 和 Littlebox 两个 variant group。
Xiaohei variant group 使用 `assets/<article-slug>-illustrations/`。
Littlebox variant group 使用 `assets/<article-slug>-littlebox/`，并写清楚 Littlebox state: closed、visual metaphor、assigned background、short visible labels。

<粘贴文章或单个观点>
```

This prompt preserves current mixed-IP validator markers. [VERIFIED: examples/prompts.md] [VERIFIED: scripts/validate-skill-package.mjs]

### Metadata Shape

```yaml
interface:
  display_name: "Ian Xiaohei / Littlebox Illustrations"
  short_description: "为中文文章生成可选 Xiaohei 或 Littlebox 视觉 IP 的正文配图资产，默认使用 Xiaohei。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时默认使用 Xiaohei，也可以显式选择 Littlebox。"
policy:
  allow_implicit_invocation: true
```

This shape satisfies the validator's metadata parser because the required nested keys remain present and `allow_implicit_invocation` remains `true`. [VERIFIED: scripts/validate-skill-package.mjs]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-only README and metadata | Two-IP public docs with Xiaohei default and explicit Littlebox selection | Phase 5 target on 2026-06-12 | Users should learn selectable IP support from README and metadata. [VERIFIED: .planning/ROADMAP.md] |
| Manual grep-only route drift checks | Dependency-free local validator with 34 deterministic checks | Phase 4 completed 2026-06-12 | Phase 5 must run validator after docs changes. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md] |
| Minimal smoke prompts | Expanded copyable prompt catalog with route smoke coverage | Phase 5 target on 2026-06-12 | `examples/prompts.md` becomes both user prompt inventory and smoke fixture. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |
| No release checklist | Root lightweight `RELEASE_CHECKLIST.md` | Phase 5 target on 2026-06-12 | Maintainers get validation, smoke, attribution, and boundary gates without automation. [VERIFIED: .planning/REQUIREMENTS.md] |

**Deprecated/outdated:**
- Xiaohei-only public positioning is outdated for Phase 5 because Littlebox is now active and validator-proven from prior phases. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md]
- Broad release automation remains future scope, not the current lightweight release checklist. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Metadata copy can accidentally compress away the default behavior because the fields are short. | Common Pitfalls | Planner may miss a wording review step for `openai.yaml`. |
| A2 | README should avoid long prompt-template or full QA detail to stay concise. | Common Pitfalls | README could become too thin or too verbose; validator plus human review should catch severe mismatch. |

## Open Questions

1. **Exact README heading names**
   - What we know: Phase 5 context lets the agent choose heading order and names while meeting D-01 through D-03. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
   - What's unclear: Final heading names are a planner/executor writing choice. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
   - Recommendation: Keep current Chinese headings where possible and insert multi-IP wording into existing sections. [VERIFIED: README.md]
2. **Validator check matrix updates**
   - What we know: Current validator passes 34/34 and tests pass 7/7. [VERIFIED: shell: node scripts/validate-skill-package.mjs] [VERIFIED: shell: node --test scripts/validate-skill-package.test.mjs]
   - What's unclear: Executor may choose wording that intentionally renames a required marker. [ASSUMED]
   - Recommendation: Prefer preserving markers; if a marker changes intentionally, update validator and tests in the same wave. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node test runner | yes | v24.13.0 | None needed. [VERIFIED: shell: node --version] |
| Git | Commit and whitespace checks | yes | git version 2.50.1 (Apple Git-155) | Validator can still run, but commit step requires Git. [VERIFIED: shell: git --version] |
| `image_gen` host capability | Manual visual smoke during release use | host-dependent | N/A | Checklist can require text smoke review without generating rendered assets in Phase 5. [VERIFIED: .planning/codebase/STACK.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md] |

**Missing dependencies with no fallback:**
- None for planning and local validation in this environment. [VERIFIED: shell]

**Missing dependencies with fallback:**
- Host image generation is outside repository validation; Phase 5 release checklist can describe manual smoke prompts without generating images. [VERIFIED: .planning/codebase/STACK.md]

## Validation Architecture

Skipped because `.planning/config.json` sets `workflow.nyquist_validation` to `false`. [VERIFIED: .planning/config.json]

## Security Domain

Security enforcement is enabled in `.planning/config.json`, but Phase 5 is documentation, examples, metadata, and checklist work with no service runtime or external package install. [VERIFIED: .planning/config.json] [VERIFIED: .planning/codebase/STACK.md]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication surface exists in this repository phase. [VERIFIED: .planning/codebase/ARCHITECTURE.md] |
| V3 Session Management | no | No session runtime exists in this repository phase. [VERIFIED: .planning/codebase/ARCHITECTURE.md] |
| V4 Access Control | no | No application authorization surface exists in this repository phase. [VERIFIED: .planning/codebase/ARCHITECTURE.md] |
| V5 Input Validation | yes | Use existing validator checks for Markdown links, route markers, metadata shape, and output-path tokens. [VERIFIED: scripts/validate-skill-package.mjs] |
| V6 Cryptography | no | No cryptography or secrets are introduced by Phase 5. [VERIFIED: .planning/codebase/STACK.md] |

### Known Threat Patterns for Documentation/Metadata Changes

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Misleading release instructions | Repudiation | Keep exact commands in `RELEASE_CHECKLIST.md` and verify them locally. [VERIFIED: shell] |
| Broken local documentation links | Tampering | Run `DOC-LINKS-001` through the validator. [VERIFIED: scripts/validate-skill-package.mjs] |
| Accidental scope expansion into package assets | Tampering | Preserve `BOUNDARY-IMG-001` and checklist scope guard. [VERIFIED: scripts/validate-skill-package.mjs] |

## Exact Verification Commands

Run these from repository root after each meaningful Phase 5 write set. [VERIFIED: codebase]

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Use these targeted proof commands during closeout. [VERIFIED: codebase]

```bash
rg -n "Xiaohei|Littlebox|默认视觉 IP|assets/<article-slug>-illustrations/|assets/&lt;article-slug&gt;-littlebox/|RELEASE_CHECKLIST.md|node scripts/validate-skill-package\\.mjs" README.md
rg -n "路由烟测：省略视觉 IP|路由烟测：显式选择 Xiaohei|路由烟测：显式选择 Littlebox|路由说明：多 IP 请求|Xiaohei variant group|Littlebox variant group|Littlebox state: closed|assigned background" examples/prompts.md
rg -n "display_name|short_description|default_prompt|allow_implicit_invocation: true|Xiaohei|Littlebox" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "node scripts/validate-skill-package\\.mjs|node --test scripts/validate-skill-package\\.test\\.mjs|NOTICE.md|ian-xiaohei-illustrations/|rendered Littlebox|CI|archive|asset manifest|third-IP" RELEASE_CHECKLIST.md
```

## Runtime State Inventory

Omitted because Phase 5 is not a rename, refactor, migration, or string-replacement phase. [VERIFIED: .planning/ROADMAP.md]

## Package Legitimacy Audit

Omitted because Phase 5 should install no external packages. [VERIFIED: .planning/codebase/STACK.md] [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]

## Sources

### Primary (HIGH confidence)

- `AGENTS.md` - project instructions, language policy, GSD workflow rule, project constraints. [VERIFIED: AGENTS.md]
- `.planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md` - locked Phase 5 decisions D-01 through D-09, discretion, deferred scope, canonical refs. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
- `.planning/REQUIREMENTS.md` - DOCS-01, DOCS-02, DOCS-03, DOCS-05, DOCS-06. [VERIFIED: .planning/REQUIREMENTS.md]
- `.planning/ROADMAP.md` - Phase 5 goal, dependency on Phase 4, success criteria, v2/deferred boundaries. [VERIFIED: .planning/ROADMAP.md]
- `.planning/phases/04-validation-hardening/04-VERIFICATION.md` and `04-UAT.md` - validator contract, command evidence, smoke coverage, deferred Phase 5 items. [VERIFIED: .planning/phases/04-validation-hardening/04-VERIFICATION.md]
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` - executable check IDs, markers, metadata shape, docs link checks, and current test matrix. [VERIFIED: scripts/validate-skill-package.mjs]
- `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, `NOTICE.md` - current implementation and documentation state. [VERIFIED: codebase]

### Secondary (MEDIUM confidence)

- `.planning/codebase/CONVENTIONS.md`, `STRUCTURE.md`, `ARCHITECTURE.md`, `STACK.md`, and `TESTING.md` - generated codebase maps that align with current repository files. [VERIFIED: .planning/codebase]

### Tertiary (LOW confidence)

- Assumptions A1 and A2 in this document. [ASSUMED]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - direct local files and shell versions verified; no package installs required. [VERIFIED: .planning/codebase/STACK.md] [VERIFIED: shell]
- Architecture: HIGH - Phase 5 is bounded to existing docs, metadata, release checklist, and validator inputs. [VERIFIED: .planning/phases/05-documentation-examples-and-release-packaging/05-CONTEXT.md]
- Pitfalls: HIGH for validator marker risks because checks are source-read; MEDIUM for copy-quality risks because exact prose choices remain planner/executor decisions. [VERIFIED: scripts/validate-skill-package.mjs] [ASSUMED]

**Research date:** 2026-06-12
**Valid until:** 2026-07-12 for repository-local docs/validator research; refresh earlier if Phase 4 validator or Phase 5 context changes. [ASSUMED]
