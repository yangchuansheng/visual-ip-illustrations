# Phase 09: Tom Docs, Examples, and Release Surface - Research

**Researched:** 2026-06-13 [VERIFIED: `date`/environment context]
**Domain:** Markdown/YAML Codex Skill public documentation, prompt examples, agent metadata, and release gates [VERIFIED: `AGENTS.md`, `.planning/PROJECT.md`, `.planning/ROADMAP.md`]
**Confidence:** HIGH for local documentation surface and validation commands; MEDIUM for final rights-release approval wording because approval remains a maintainer process gate [VERIFIED: `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md`, `ian-xiaohei-illustrations/references/ips/tom/rights.md`]

<user_constraints>
## User Constraints (from CONTEXT.md)

Source: `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md` [VERIFIED: codebase grep]

### Locked Decisions

## Implementation Decisions

### Public Tom Route Positioning
- **D-01:** Public docs should describe Tom as an explicit-only protected-character route with current route status `gated-authorized`.
- **D-02:** Public docs should preserve Xiaohei as the omitted-IP default. A user who omits visual IP gets Xiaohei; Tom and Littlebox require explicit route selection.
- **D-03:** Tom docs may include copyable request prompts, route-status text, aliases, output suffix/path, rights record links, and release-review gates.
- **D-04:** Public docs must avoid broad Tom availability claims while Tom remains `gated-authorized`.
- **D-05:** Public docs must avoid claims that rendered Tom samples are publicly approved while the public-sample gate remains pending.

### README Surface
- **D-06:** `README.md` should explain Tom as a protected-character route with status `gated-authorized`, aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`, output path `assets/<article-slug>-tom/`, escaped marker `assets/&lt;article-slug&gt;-tom/`, and rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- **D-07:** README wording should keep the active/default route hierarchy clear: Xiaohei is the implicit default, Littlebox is an explicit active route, and Tom is an explicit gated protected-character route.
- **D-08:** README route and workflow sections should align with `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/routing.md`, including separate route groups for mixed-IP requests.

### Prompt Examples
- **D-09:** `examples/prompts.md` should include copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts.
- **D-10:** Tom-only prompts should be separated from mixed-IP route prompts so users can inspect a solo Tom request without route-group noise.
- **D-11:** Mixed-IP prompts should require separate outputs for Xiaohei, Littlebox, and Tom, with route-local references and output paths for each group.
- **D-12:** Tom prompts should include route status `gated-authorized`, rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and output path `assets/<article-slug>-tom/`.
- **D-13:** Prompt examples should remain copyable usage examples and smoke fixtures. They should not imply public rendered Tom samples are approved.

### Agent Metadata
- **D-14:** `ian-xiaohei-illustrations/agents/openai.yaml` should name Xiaohei, Littlebox, and Tom in display copy.
- **D-15:** Agent metadata should preserve Xiaohei as the implicit default in `short_description` and `default_prompt`.
- **D-16:** Tom metadata wording should mark Tom as explicit and gated/protected while keeping `policy.allow_implicit_invocation: true` for the overall skill.

### Release Checklist
- **D-17:** `RELEASE_CHECKLIST.md` should become the final maintainer gate for Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review.
- **D-18:** Checklist wording should require review of `ian-xiaohei-illustrations/references/ips/tom/rights.md` before changing route status or public sample policy.
- **D-19:** Checklist wording should require the maintainer to confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- **D-20:** Checklist wording should require public docs and prompts to avoid leakage into broad availability, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, and public sample claims without approval.
- **D-21:** Validator commands belong in the release checklist as maintainer commands for this phase. Expanding validator behavior and tests remains Phase 10 scope.

### the agent's Discretion
- The user explicitly requested `$gsd-discuss-phase 9 --auto`, so all gray areas were auto-selected and resolved with the conservative protected-route defaults already established by Phases 6-8.
- Multi-agent tooling was unavailable in this runtime, so the subagent implementation completed the required discussion artifacts inline after reading the project files, Phase 8 verification/UAT artifacts, public docs in scope, controller, route table, and Tom rights files.
- The planner may choose exact Chinese public-doc prose and section placement, provided the locked route status, aliases, output paths, rights boundary, default behavior, mixed-route separation, and release-gate requirements stay explicit.

### Deferred Ideas (OUT OF SCOPE)

- Phase 10 owns validator hardening, Node tests, docs marker checks, Tom leakage checks, public-sample gate enforcement, and raw/escaped output path checks.
- Public rendered Tom examples remain gated by explicit release checklist approval.
- Changing Tom from `gated-authorized` to another route status requires maintainer rights review and release checklist approval.
- Broader Tom and Jerry cast support, Jerry usage, show logos, title cards, source-frame recreation, and franchise scenes require separate authorization scope and future requirements.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| TDOC-01 | README explains Tom as an explicit protected-character route with its status, aliases, output path, and rights boundary. [VERIFIED: `.planning/REQUIREMENTS.md`] | Use the README wording contract, route hierarchy, and marker checks below. [VERIFIED: `README.md`, `SKILL.md`, `references/routing.md`, `references/ips/tom/rights.md`] |
| TDOC-02 | `examples/prompts.md` includes copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts. [VERIFIED: `.planning/REQUIREMENTS.md`] | Add four prompt blocks with route-local Tom references, `gated-authorized`, rights pointer, output path, and public-sample boundary. [VERIFIED: `examples/prompts.md`, `SKILL.md`, `references/ips/tom/prompt-template.md`] |
| TDOC-03 | `agents/openai.yaml` names Xiaohei, Littlebox, and Tom while preserving Xiaohei as the implicit default. [VERIFIED: `.planning/REQUIREMENTS.md`] | Update display strings only; preserve `policy.allow_implicit_invocation: true`. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`] |
| TDOC-04 | `RELEASE_CHECKLIST.md` includes Tom authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review. [VERIFIED: `.planning/REQUIREMENTS.md`] | Expand checklist gates and retain current validator commands. [VERIFIED: `RELEASE_CHECKLIST.md`, `scripts/validate-skill-package.mjs`] |
| TDOC-05 | Public docs avoid broad Tom availability claims when Tom route status is gated. [VERIFIED: `.planning/REQUIREMENTS.md`] | Add negative text-pattern checks for stale runtime wording, broad availability, rendered sample approval, source-frame/logos/title-card/Jerry/cast leakage. [VERIFIED: `README.md`, `examples/prompts.md`, `rights.md`] |
</phase_requirements>

## Summary

Phase 9 is a public surface alignment phase, not a controller or validator implementation phase. [VERIFIED: `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md`] Phase 8 already verified Tom alias routing, Xiaohei-only omitted-IP default behavior, separate mixed-IP route groups, Tom route-local references, raw Tom output path, and escaped Tom output token. [VERIFIED: `.planning/phases/08-skill-controller-integration/08-VERIFICATION.md`, `.planning/phases/08-skill-controller-integration/08-UAT.md`]

The planner should update four files only: `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and `RELEASE_CHECKLIST.md`. [VERIFIED: `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md`] The highest-risk current drift is stale README and prompt wording from before Phase 8; `README.md` still says Tom runtime selection is owned by later phases, and `examples/prompts.md` still frames the Tom smoke prompt as "route audit guidance only" with Phase 8 owning runtime selection. [VERIFIED: `rg -n "运行时选择行为由后续阶段接入|Phase 8 owns runtime selection behavior" README.md examples/prompts.md`]

**Primary recommendation:** plan one documentation task per public surface, then run independent `rg` marker checks plus existing Node validator/test commands before commit. [VERIFIED: `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, Phase 9 context]

## Project Constraints (from AGENTS.md)

- Every user-facing reply must begin with `爸爸`; user-facing replies must use Simplified Chinese. [VERIFIED: `AGENTS.md`]
- Code, code comments, commit messages, and pull request titles/descriptions must be English. [VERIFIED: `AGENTS.md`]
- Public repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English. [VERIFIED: `AGENTS.md`, `.planning/PROJECT.md`]
- Start from original need, core problem, constraints, and desired outcome; diagnose to root cause and prefer durable fixes. [VERIFIED: `AGENTS.md`]
- Before file-changing tools, start through a GSD command unless explicitly bypassed; this research is part of `$gsd-plan-phase 9 --auto`. [VERIFIED: `AGENTS.md`, user request]
- The repo is documentation-driven Markdown/YAML; no build runtime or package manager is part of the product surface. [VERIFIED: `AGENTS.md`, `.planning/PROJECT.md`, `.planning/config.json`]
- Preserve Codex Skill compatibility through `SKILL.md`, local reference files, and `agents/openai.yaml`. [VERIFIED: `.planning/PROJECT.md`]
- Preserve existing Xiaohei behavior and keep Xiaohei as the compatibility baseline. [VERIFIED: `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `SKILL.md`]
- Keep IP-specific rules separately readable, testable, and routable. [VERIFIED: `.planning/PROJECT.md`, `references/routing.md`]
- Preserve MIT notices and derived documentation attribution for Ian and okooo5km; Tom permission boundary stays in Tom rights/release-review records. [VERIFIED: `.planning/PROJECT.md`, `NOTICE.md`, `references/ips/tom/rights.md`]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Public Tom route explanation | Repository docs | Skill controller docs | `README.md` is the public distribution entry point; it must describe already-implemented controller behavior. [VERIFIED: `README.md`, `SKILL.md`, Phase 8 verification] |
| Copyable Tom prompts | Repository examples | Skill reference pack | `examples/prompts.md` doubles as user guidance and smoke prompt inventory while Tom operational details come from the route-local pack. [VERIFIED: `examples/prompts.md`, `references/ips/tom/prompt-template.md`] |
| Agent display metadata | Codex agent metadata | Skill controller | `agents/openai.yaml` exposes concise display strings; `SKILL.md` owns detailed behavior. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`, `SKILL.md`] |
| Release gates | Maintainer docs | Local validator | `RELEASE_CHECKLIST.md` records human/process gates and command gates; Phase 10 owns validator hardening. [VERIFIED: `RELEASE_CHECKLIST.md`, `.planning/phases/09.../09-CONTEXT.md`] |
| Protected-character rights boundary | Tom rights record | Release checklist | `references/ips/tom/rights.md` is the rights authority; checklist records release decisions. [VERIFIED: `references/ips/tom/rights.md`, `RELEASE_CHECKLIST.md`] |
| Public rendered Tom sample policy | Release checklist | Public asset directories | Public rendered Tom samples stay behind explicit approval recorded in checklist. [VERIFIED: `rights.md`, `RELEASE_CHECKLIST.md`] |

## Standard Stack

### Core

| Library / Surface | Version | Purpose | Why Standard |
|-------------------|---------|---------|--------------|
| Markdown docs | N/A | README, prompt examples, release checklist, and research artifacts. [VERIFIED: repo files] | The repository is a lightweight Codex Skill package whose behavior is instruction-driven. [VERIFIED: `.planning/PROJECT.md`, `SKILL.md`] |
| YAML metadata | N/A | `agents/openai.yaml` display metadata and implicit invocation policy. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`] | The Codex agent metadata file is already the package display surface. [VERIFIED: `AGENTS.md`, `openai.yaml`] |
| Node.js | v24.13.0 | Run existing dependency-free validator and Node tests. [VERIFIED: `node --version`, `scripts/validate-skill-package.mjs`] | The repo already ships Node-based local validation with no package install. [VERIFIED: validator command output] |
| ripgrep | 15.1.0 | Independent text-pattern checks for public docs and metadata. [VERIFIED: `rg --version`] | Phase 9 success is marker-sensitive documentation alignment. [VERIFIED: Phase 9 context] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Git | 2.50.1 | Diff, whitespace check, commit. [VERIFIED: `git --version`] | Before committing research and later implementation docs. [VERIFIED: command output] |
| slopcheck | 0.6.1 | Package legitimacy audit tool availability. [VERIFIED: `slopcheck --version`] | Skipped for this phase because no external package install is planned. [VERIFIED: `.planning/PROJECT.md`] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Existing Markdown/YAML docs | Generated docs site | Adds runtime/build surface outside the milestone's no-build constraint. [VERIFIED: `.planning/PROJECT.md`] |
| Existing validator plus `rg` checks | New validator behavior in Phase 9 | Validator hardening is scoped to Phase 10; Phase 9 should keep verification at docs/marker level. [VERIFIED: `.planning/ROADMAP.md`, Phase 9 context] |

**Installation:** No package installation is required for Phase 9. [VERIFIED: `.planning/PROJECT.md`, absence of `package.json`/lockfile in stack context]

## Package Legitimacy Audit

No external packages are recommended or installed in this phase. [VERIFIED: `.planning/PROJECT.md`, `.planning/codebase/STACK.md`] The Package Legitimacy Gate is not applicable; existing tools are local Node, git, ripgrep, and shell commands. [VERIFIED: environment audit]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| N/A | N/A | N/A | N/A | N/A | N/A | No package install planned. [VERIFIED: phase scope] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no packages recommended]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no packages recommended]

## Architecture Patterns

### System Architecture Diagram

```text
User / Maintainer reads public docs
        |
        v
README route hierarchy and output paths
        |
        +--> examples/prompts.md copyable prompts and smoke fixtures
        |         |
        |         v
        |  Skill invocation through $ian-xiaohei-illustrations
        |         |
        |         v
        |  SKILL.md controller selects Xiaohei default, Littlebox explicit, or Tom explicit
        |         |
        |         v
        |  Route-local references and output directories
        |
        +--> agents/openai.yaml display metadata
        |
        +--> RELEASE_CHECKLIST.md maintainer gates
                  |
                  v
          Existing validator + rg text checks + rights review
```

Data enters through public docs, prompt examples, or metadata display text, then points to the already-verified skill controller and route-local Tom rights/reference records. [VERIFIED: `README.md`, `examples/prompts.md`, `openai.yaml`, `SKILL.md`, Phase 8 verification]

### Recommended Project Structure

```text
.
├── README.md                                      # Public route hierarchy, Tom status, aliases, output paths, rights boundary
├── examples/
│   └── prompts.md                                # Copyable prompts and route smoke fixtures
├── RELEASE_CHECKLIST.md                          # Maintainer release and protected-IP gates
└── ian-xiaohei-illustrations/
    ├── agents/
    │   └── openai.yaml                           # Agent display metadata
    ├── SKILL.md                                  # Verified controller behavior; Phase 9 should describe it
    └── references/
        ├── routing.md                            # Route metadata source
        └── ips/tom/rights.md                     # Rights authority and public sample policy
```

### Pattern 1: Public Docs Mirror Runtime Truth

**What:** Public docs should describe Phase 8 truth: Xiaohei is the omitted-IP default; Littlebox and Tom are explicit routes; Tom is `gated-authorized`; mixed-IP requests create separate route groups. [VERIFIED: Phase 8 verification, `SKILL.md`, `routing.md`]

**When to use:** Update `README.md` workflow, visual IP, quick examples, and directory map sections. [VERIFIED: README current contents]

**Concrete README wording fragments:**

```markdown
Tom 是显式选择的 protected-character route，当前 route status 是 `gated-authorized`。用户可通过 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 选择 Tom route；省略视觉 IP 时仍然选择 Xiaohei。Tom 输出路径为 `assets/<article-slug>-tom/`，文档校验 token 为 `assets/&lt;article-slug&gt;-tom/`，rights boundary 以 `ian-xiaohei-illustrations/references/ips/tom/rights.md` 为准。
```

Source: `SKILL.md`, `routing.md`, `rights.md`, Phase 9 context. [VERIFIED: codebase grep]

### Pattern 2: Prompt Examples as Smoke Fixtures

**What:** `examples/prompts.md` should contain four Tom-aware prompt blocks: Tom planning, Tom generation, Tom smoke, and three-IP mixed variant planning/generation. [VERIFIED: Phase 9 context, TDOC-02]

**When to use:** Add user-copyable text blocks and keep Tom-only prompts separate from mixed-IP prompts. [VERIFIED: Phase 9 context]

**Recommended prompt set:**

```text
Use $ian-xiaohei-illustrations 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，先不要生图。
请为下面这篇文章做 3 张 Tom route shot list。
每张图写清楚：Placement、Core idea、Structure type、Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note。
route status 必须保留 `gated-authorized`。
rights record 必须保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。

<粘贴文章>
```

```text
Use $ian-xiaohei-illustrations 使用 Tom 路由为下面这篇文章生成 2 张正文配图。
每张图单独生成，使用 `ian-xiaohei-illustrations/references/ips/tom/` route-local references。
Tom 必须承担 core idea 的 cognitive action。
保留 route status `gated-authorized` 和 rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
保存路径使用 `assets/<article-slug>-tom/`。
公共 rendered sample 发布状态以 RELEASE_CHECKLIST.md 的 public-sample gate 为准。

<粘贴文章>
```

```text
Use $ian-xiaohei-illustrations 先不要生图。
使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，为这个观点输出 1 张 route-status smoke shot list：
观点：把追赶中的判断拆成可执行下一步。
预期：selected IP 是 Tom。
预期：route status 是 `gated-authorized`。
预期：rights record 是 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：输出路径是 `assets/<article-slug>-tom/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
```

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用同一个 core idea 分别输出 Xiaohei、Littlebox、Tom 三个 separate variant group。

core idea：好流程会把下一步动作直接递到人手里。

Xiaohei variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/xiaohei/`
- 输出到 `assets/<article-slug>-illustrations/`

Littlebox variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/littlebox/`
- 保留 Littlebox state: closed、assigned background、short visible labels
- 输出到 `assets/<article-slug>-littlebox/`

Tom variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/tom/`
- 保留 route status `gated-authorized`
- 保留 rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- 输出到 `assets/<article-slug>-tom/`
```

Source: `examples/prompts.md`, `SKILL.md`, `references/ips/tom/prompt-template.md`. [VERIFIED: codebase grep]

### Pattern 3: Metadata Names Three Routes and Preserves Default

**What:** `openai.yaml` should name Xiaohei, Littlebox, and Tom in display copy while keeping Xiaohei as the implicit default and `policy.allow_implicit_invocation: true`. [VERIFIED: Phase 9 context, `openai.yaml`]

**Concrete metadata wording:**

```yaml
interface:
  display_name: "Xiaohei / Littlebox / Tom Article Illustrations"
  short_description: "为中文文章生成可选 Xiaohei、Littlebox 或 Tom 视觉 IP 的正文配图资产；未指定视觉 IP 时默认使用 Xiaohei，Tom 为显式 gated protected-character route。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时默认使用 Xiaohei，也可以显式选择 Littlebox，或在 gated-authorized 权限边界内显式选择 Tom。"
policy:
  allow_implicit_invocation: true
```

Source: `openai.yaml`, Phase 9 decisions D-14 through D-16. [VERIFIED: codebase grep]

### Anti-Patterns to Avoid

- **Stale pre-Phase-8 public wording:** Remove claims that Tom runtime selection is future work; Phase 8 verified runtime selection behavior. [VERIFIED: README/examples grep, Phase 8 verification]
- **Broad Tom availability language:** Avoid treating Tom as a normal active bundled IP while status is `gated-authorized`. [VERIFIED: `rights.md`, Phase 9 context]
- **Public rendered sample claims:** Avoid wording that implies public Tom sample images are approved; approval is checklist-gated. [VERIFIED: `rights.md`, `RELEASE_CHECKLIST.md`]
- **Broken Xiaohei default:** Preserve omitted-IP default wording in README, examples, metadata, and checklist. [VERIFIED: `SKILL.md`, `routing.md`, Phase 8 verification]
- **Mixed route leakage:** Keep Tom protected-character terms out of Xiaohei/Littlebox route descriptions except when comparing separate route groups. [VERIFIED: `routing.md`, Phase 9 context]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route status wording | New status labels or synonyms | Exact token `gated-authorized` | Existing route table, rights record, controller, and validator already use this token. [VERIFIED: `routing.md`, `rights.md`, `SKILL.md`, validator output] |
| Tom rights boundary | New README-only rights policy | `ian-xiaohei-illustrations/references/ips/tom/rights.md` | The rights record is the authority for authorization scope, distribution boundary, sample policy, and reviewer fields. [VERIFIED: `rights.md`] |
| Prompt smoke inventory | Separate hidden smoke docs | `examples/prompts.md` | Existing examples file doubles as copyable prompts and route smoke fixtures. [VERIFIED: `examples/prompts.md`] |
| Release gating | Informal release notes | `RELEASE_CHECKLIST.md` checkboxes | Existing maintainer gate already holds validator commands, rights review, public sample policy, and package boundary checks. [VERIFIED: `RELEASE_CHECKLIST.md`] |
| Validator expansion | Phase 9 script edits | Existing validator commands plus independent `rg` checks | Phase 10 owns validator hardening; Phase 9 should validate docs through deterministic marker scans. [VERIFIED: `.planning/ROADMAP.md`] |

**Key insight:** Phase 9 should align public wording with verified route behavior and rights boundaries, then leave executable validator expansion to Phase 10. [VERIFIED: Phase 9 context, Roadmap]

## Common Pitfalls

### Pitfall 1: Stale README Language From Before Phase 8

**What goes wrong:** README or prompt examples say Tom runtime selection is future work. [VERIFIED: current `README.md`, `examples/prompts.md`]
**Why it happens:** Phase 6 public status wording was added before Phase 8 controller integration. [VERIFIED: `.planning/STATE.md`, Phase 8 verification]
**How to avoid:** Replace future-work wording with explicit runtime truth: Tom is selectable through aliases and remains `gated-authorized`. [VERIFIED: `SKILL.md`, `routing.md`]
**Warning signs:** `rg -n "后续阶段接入|Phase 8 owns runtime selection behavior" README.md examples/prompts.md` returns lines. [VERIFIED: current grep]

### Pitfall 2: Broad Tom Availability Claims

**What goes wrong:** Public docs imply Tom is broadly available like Xiaohei or Littlebox. [VERIFIED: `rights.md`, Phase 9 context]
**Why it happens:** Route examples are copyable, which can blur the difference between "explicit route exists" and "public broad release approved". [VERIFIED: Phase 9 context]
**How to avoid:** Pair every Tom public route mention with `explicit`, `protected-character`, `gated-authorized`, and the rights record path. [VERIFIED: Phase 9 decisions D-01, D-04, D-12]
**Warning signs:** Tom appears in a list of "active IPs" without route status and rights boundary nearby. [VERIFIED: README current top section distinguishes active IPs from Tom status]

### Pitfall 3: Public Sample Leakage

**What goes wrong:** Docs or release checklist imply rendered Tom sample assets are approved or present. [VERIFIED: `rights.md`, `RELEASE_CHECKLIST.md`]
**Why it happens:** Example prompts and rendered example images live near each other in repository docs. [VERIFIED: repo structure]
**How to avoid:** Keep Tom examples text-only/copyable and keep rendered sample publication behind the checklist approval line. [VERIFIED: Phase 9 context, `rights.md`]
**Warning signs:** Public docs mention Tom sample images, `examples/images/` approval, or generated Tom examples without the public-sample gate. [VERIFIED: `rights.md`, `RELEASE_CHECKLIST.md`]

### Pitfall 4: Broken Xiaohei Default

**What goes wrong:** Metadata or docs make Tom seem available through implicit invocation or omitted-IP prompts. [VERIFIED: `openai.yaml`, `SKILL.md`]
**Why it happens:** `policy.allow_implicit_invocation: true` applies to the whole skill, while route selection still defaults only to Xiaohei. [VERIFIED: `openai.yaml`, `routing.md`]
**How to avoid:** Metadata should say omitted visual IP uses Xiaohei; Tom requires explicit selection. [VERIFIED: Phase 9 decisions D-15, D-16]
**Warning signs:** `openai.yaml` names Tom without `explicit`/`gated` wording, or removes the Xiaohei default sentence. [VERIFIED: current `openai.yaml` lacks Tom]

## Exact Public Docs Wording Changes Needed

### README.md

Planner should make these changes in README sections. [VERIFIED: current `README.md`]

| Section | Required Change | Required Markers |
|---------|-----------------|------------------|
| Hero quote | Name three routes with hierarchy: default Xiaohei, explicit Littlebox, explicit Tom protected route. [VERIFIED: Phase 9 context] | `默认 Xiaohei`, `显式选择 Littlebox`, `Tom`, `protected-character`, `gated-authorized` |
| "这个仓库是什么" | Replace "two active IPs plus Tom status" wording with verified three-route runtime hierarchy. [VERIFIED: current README, Phase 8 verification] | `Xiaohei 是 implicit default route`, `Littlebox 是 explicit active route`, `Tom 是 explicit gated protected-character route` |
| "它会产出什么" | Keep three output paths and raw/escaped Tom path. [VERIFIED: README, routing.md] | `assets/<article-slug>-tom/`, `assets/&lt;article-slug&gt;-tom/` |
| "Tom" visual IP section | State Tom is selectable through aliases, current status `gated-authorized`, rights boundary path, and public sample policy. [VERIFIED: rights.md] | aliases, route status, rights record, public-sample gate |
| "路由参考" | Keep `references/routing.md`, include Tom canonical pack path and rights path. [VERIFIED: routing.md, tom index] | `ian-xiaohei-illustrations/references/ips/tom/`, `rights.md` |
| "快速示例" | Add Tom planning/generation or point to `examples/prompts.md` Tom prompts with gated wording. [VERIFIED: Phase 9 context] | Tom planning/generation prompt markers |
| "工作流程" | Update route-selection step to include explicit Tom. [VERIFIED: SKILL.md] | `省略时走 Xiaohei`, `显式 Littlebox`, `显式 Tom`, `gated-authorized` |
| "目录结构" | Add Tom pack files under `ips/tom/`. [VERIFIED: filesystem, tom index] | `index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md` |
| "维护者校验" | Mention existing validator and release checklist Tom gates. [VERIFIED: validator output, RELEASE_CHECKLIST.md] | `node scripts/validate-skill-package.mjs`, `RELEASE_CHECKLIST.md` |

### examples/prompts.md

Add a dedicated Tom prompt section and extend mixed-IP section to three routes. [VERIFIED: current `examples/prompts.md`, Phase 9 context]

Required examples:

| Prompt | Purpose | Required Markers |
|--------|---------|------------------|
| Explicit Tom planning | Satisfies TDOC-02 solo Tom planning. [VERIFIED: requirement] | `Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫`, `Placement`, `Tom state`, `Tom action`, `Rights-status note`, `gated-authorized`, `rights.md`, Tom output path |
| Explicit Tom generation | Satisfies TDOC-02 solo Tom generation. [VERIFIED: requirement] | `references/ips/tom/`, `gated-authorized`, `rights.md`, `assets/<article-slug>-tom/`, public-sample gate wording |
| Tom route smoke | Keeps maintainer audit fixture current after Phase 8. [VERIFIED: current smoke prompt, Phase 8 verification] | selected IP Tom, aliases, route status, rights record, raw/escaped output path |
| Three-IP mixed variant | Satisfies TDOC-02 mixed route behavior. [VERIFIED: requirement, SKILL.md] | Xiaohei output path, Littlebox output path, Tom output path, route-local references for all three |

### agents/openai.yaml

Update display copy only; preserve policy shape. [VERIFIED: current `openai.yaml`]

Required metadata facts:

- `display_name` names Xiaohei, Littlebox, and Tom. [VERIFIED: Phase 9 D-14]
- `short_description` says omitted visual IP defaults to Xiaohei. [VERIFIED: Phase 9 D-15]
- `short_description` or `default_prompt` says Tom is explicit and gated/protected. [VERIFIED: Phase 9 D-16]
- `policy.allow_implicit_invocation: true` remains present. [VERIFIED: current `openai.yaml`, Phase 9 D-16]

### RELEASE_CHECKLIST.md

Add or clarify these release gates. [VERIFIED: current `RELEASE_CHECKLIST.md`, Phase 9 context]

| Gate | Required Checklist Wording |
|------|----------------------------|
| Tom authorization review | Review `references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer, review date, approval status, allowed channels. [VERIFIED: `rights.md`] |
| Route status review | Confirm Tom route status is `gated-authorized` across `routing.md`, `SKILL.md`, `README.md`, `examples/prompts.md`, `openai.yaml` where named, and this checklist. [VERIFIED: Phase 9 context] |
| Default route review | Confirm Xiaohei remains the only omitted-IP default and Tom remains `default=false`. [VERIFIED: routing.md, SKILL.md] |
| Prompt leakage scan | Confirm prompts avoid source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, route leakage, and public sample claims without approval. [VERIFIED: tom index, tom QA checklist, Phase 9 D-20] |
| Public asset policy | Confirm public rendered Tom samples in `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` remain gated unless reviewer/date/approval status/allowed directories/channels are recorded. [VERIFIED: `rights.md`, current checklist] |
| Generated sample policy | Confirm generated Tom examples remain internal review samples within recorded authorization scope until public-sample approval. [VERIFIED: `rights.md`] |
| Validator commands | Keep `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`. [VERIFIED: current checklist, commands pass] |
| Final rights review | Require final maintainer review before changing Tom route status or public sample policy. [VERIFIED: `rights.md`] |

## Code Examples

### Independent Validation Checks

These checks are intentionally independent and avoid combined alternation patterns. [VERIFIED: user request]

```bash
# Baseline command gates
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

```bash
# README required markers
rg -n "protected-character route" README.md
rg -n "gated-authorized" README.md
rg -n "Tom Cat" README.md
rg -n "Tom and Jerry" README.md
rg -n "汤姆猫" README.md
rg -n "assets/<article-slug>-tom/" README.md
rg -n "assets/&lt;article-slug&gt;-tom/" README.md
rg -n "ian-xiaohei-illustrations/references/ips/tom/rights.md" README.md
rg -n "implicit default route" README.md
rg -n "explicit routes" README.md
```

```bash
# README stale wording checks: these commands should return no lines
! rg -n "运行时选择行为由后续阶段接入" README.md
! rg -n "后续阶段接入" README.md
! rg -n "公开一个受保护的 Tom 路由状态" README.md
```

```bash
# examples/prompts.md required Tom prompt markers
rg -n "显式 Tom" examples/prompts.md
rg -n "Tom route shot list" examples/prompts.md
rg -n "Tom state" examples/prompts.md
rg -n "Tom action" examples/prompts.md
rg -n "Rights-status note" examples/prompts.md
rg -n "gated-authorized" examples/prompts.md
rg -n "ian-xiaohei-illustrations/references/ips/tom/rights.md" examples/prompts.md
rg -n "assets/<article-slug>-tom/" examples/prompts.md
rg -n "assets/&lt;article-slug&gt;-tom/" examples/prompts.md
rg -n "Xiaohei、Littlebox、Tom" examples/prompts.md
rg -n "separate variant group" examples/prompts.md
```

```bash
# examples/prompts.md stale and leakage checks: these commands should return no lines
! rg -n "Phase 8 owns runtime selection behavior" examples/prompts.md
! rg -n "route audit guidance only" examples/prompts.md
! rg -n "public rendered Tom samples approved" examples/prompts.md
! rg -n "source-frame recreation" examples/prompts.md
! rg -n "show logos" examples/prompts.md
! rg -n "title cards" examples/prompts.md
! rg -n "default Jerry usage" examples/prompts.md
! rg -n "broad cast expansion" examples/prompts.md
```

```bash
# openai.yaml required metadata markers
rg -n "Xiaohei" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "Littlebox" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "Tom" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "默认使用 Xiaohei" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "gated" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "protected-character" ian-xiaohei-illustrations/agents/openai.yaml
rg -n "allow_implicit_invocation: true" ian-xiaohei-illustrations/agents/openai.yaml
```

```bash
# RELEASE_CHECKLIST.md required gate markers
rg -n "Tom Authorization Review" RELEASE_CHECKLIST.md
rg -n "Tom Route Status Review" RELEASE_CHECKLIST.md
rg -n "Prompt Leakage Scan" RELEASE_CHECKLIST.md
rg -n "Public Asset Policy" RELEASE_CHECKLIST.md
rg -n "Generated Sample Policy" RELEASE_CHECKLIST.md
rg -n "Final Rights Review" RELEASE_CHECKLIST.md
rg -n "node scripts/validate-skill-package.mjs" RELEASE_CHECKLIST.md
rg -n "node --test scripts/validate-skill-package.test.mjs" RELEASE_CHECKLIST.md
rg -n "git diff --check" RELEASE_CHECKLIST.md
rg -n "gated-authorized" RELEASE_CHECKLIST.md
rg -n "default=false" RELEASE_CHECKLIST.md
rg -n "only implicit default route" RELEASE_CHECKLIST.md
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Public docs described Tom as a route-status audit surface with runtime selection in later phases. [VERIFIED: current README/prompts] | Public docs should describe Tom as an explicit selectable protected-character route with `gated-authorized` status. [VERIFIED: Phase 8 verification, Phase 9 context] | Phase 8 completed on 2026-06-12. [VERIFIED: `08-VERIFICATION.md`] | Phase 9 must remove stale future-tense runtime wording. [VERIFIED: current grep] |
| Mixed examples covered Xiaohei and Littlebox only. [VERIFIED: current `examples/prompts.md`] | Mixed examples should cover Xiaohei, Littlebox, and Tom separate route groups. [VERIFIED: TDOC-02, `SKILL.md`] | Phase 8 added three-route controller grouping. [VERIFIED: Phase 8 verification] | Users can inspect route separation through copyable prompts. [VERIFIED: Phase 9 context] |
| Metadata named Xiaohei and Littlebox only. [VERIFIED: current `openai.yaml`] | Metadata should name Xiaohei, Littlebox, and explicit gated Tom while preserving Xiaohei default. [VERIFIED: TDOC-03] | Phase 9 scope. [VERIFIED: Roadmap] | Agent display copy matches public package capabilities. [VERIFIED: Phase 9 context] |

**Deprecated/outdated:**

- `运行时选择行为由后续阶段接入`: stale after Phase 8 verified Tom route selection. [VERIFIED: README grep, `08-VERIFICATION.md`]
- `Phase 8 owns runtime selection behavior`: stale for public prompt examples after Phase 8 completion. [VERIFIED: examples grep, `08-UAT.md`]
- "two active visual IPs plus Tom status" as the primary package framing: incomplete for Phase 9 because Tom is now an explicit selectable gated route. [VERIFIED: README, Phase 8 verification]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Final Chinese wording may be adjusted by the planner if it preserves route status, aliases, output paths, rights boundary, default behavior, mixed-route separation, and release-gate requirements. [ASSUMED] | Exact Public Docs Wording Changes Needed | Planner could choose wording that passes markers but reads awkwardly; review should inspect user-facing prose quality. |

## Open Questions

1. **Who is the named Tom release reviewer?** [VERIFIED: `rights.md` says reviewer is pending]
   - What we know: `rights.md` requires reviewer, review date, approval status, authorization scope, allowed use, restricted use, distribution channels, and public-sample decision. [VERIFIED: `rights.md`]
   - What's unclear: the human reviewer identity and approval date are still pending. [VERIFIED: `rights.md`]
   - Recommendation: keep checklist fields explicit and pending until maintainer fills them. [VERIFIED: Phase 9 context]

2. **Should Tom public rendered examples be approved in this phase?** [VERIFIED: Phase 9 deferred ideas]
   - What we know: public rendered Tom examples remain gated by explicit release checklist approval. [VERIFIED: `rights.md`, Phase 9 context]
   - What's unclear: actual approval decision. [VERIFIED: current checklist PENDING]
   - Recommendation: keep Phase 9 text examples copyable and avoid rendered sample claims. [VERIFIED: TDOC-05]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Existing validator and Node tests | ✓ | v24.13.0 [VERIFIED: `node --version`] | None needed. |
| npm | Environment audit only | ✓ | 11.6.2 [VERIFIED: `npm --version`] | No npm install planned. |
| ripgrep | Independent text checks | ✓ | 15.1.0 [VERIFIED: `rg --version`] | `grep` if needed, with slower manual checks. |
| Git | Diff/commit/whitespace check | ✓ | 2.50.1 [VERIFIED: `git --version`] | None needed. |
| slopcheck | Package legitimacy audit availability | ✓ | 0.6.1 [VERIFIED: `slopcheck --version`] | Skipped because no packages are installed. |

**Missing dependencies with no fallback:** none. [VERIFIED: environment audit]

**Missing dependencies with fallback:** none. [VERIFIED: environment audit]

## Validation Architecture

This section is included because the user explicitly requested it for Phase 9 orchestration, even though `.planning/config.json` has `workflow.nyquist_validation` set to `false`. [VERIFIED: user request, `.planning/config.json`]

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Node built-in test runner via `node --test`; existing validator script via Node. [VERIFIED: `scripts/validate-skill-package.test.mjs`] |
| Config file | none; tests are direct Node scripts. [VERIFIED: repo file scan] |
| Quick run command | `node scripts/validate-skill-package.mjs` [VERIFIED: command passed] |
| Full suite command | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs && git diff --check` [VERIFIED: commands passed] |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|--------------|
| TDOC-01 | README explains Tom as explicit protected-character route with status, aliases, output path, and rights boundary. [VERIFIED: requirements] | marker/smoke | `rg -n "protected-character route" README.md` plus README marker checks above. [VERIFIED: rg available] | ✅ |
| TDOC-02 | Prompt examples include Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts. [VERIFIED: requirements] | marker/smoke | `rg -n "Tom route shot list" examples/prompts.md` plus prompt marker checks above. [VERIFIED: rg available] | ✅ |
| TDOC-03 | Agent metadata names Xiaohei, Littlebox, Tom and preserves Xiaohei implicit default. [VERIFIED: requirements] | marker/smoke | `rg -n "Tom" ian-xiaohei-illustrations/agents/openai.yaml` and `rg -n "默认使用 Xiaohei" ian-xiaohei-illustrations/agents/openai.yaml`. [VERIFIED: current metadata file exists] | ✅ |
| TDOC-04 | Release checklist includes Tom authorization, route status, leakage scan, public asset/generated sample policy, validator commands, final rights review. [VERIFIED: requirements] | marker/smoke | `rg -n "Tom Authorization Review" RELEASE_CHECKLIST.md` plus release checklist marker checks above. [VERIFIED: checklist exists] | ✅ |
| TDOC-05 | Public docs avoid broad Tom availability claims while gated. [VERIFIED: requirements] | negative marker/smoke | stale/leakage `! rg` checks above for README and examples. [VERIFIED: rg available] | ✅ |

### Sampling Rate

- **Per task commit:** run targeted `rg` checks for the file edited plus `git diff --check`. [VERIFIED: phase scope]
- **Per wave merge:** run `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and all independent `rg` checks. [VERIFIED: commands passed]
- **Phase gate:** full suite green plus manual inspection that Tom remains explicit-only, `gated-authorized`, rights-boundary-linked, and sample-gated. [VERIFIED: Phase 9 context]

### Wave 0 Gaps

- [ ] No new test file required for Phase 9; use existing validator/tests and manual `rg` marker checks. [VERIFIED: Phase 10 owns validator hardening]
- [ ] Phase 10 should later encode these public-doc markers into validator checks. [VERIFIED: Roadmap TVAL-04/TVAL-06]

## Security Domain

Security enforcement is enabled by default in `.planning/config.json`, so the planner should preserve a lightweight security/release boundary review even for docs-only changes. [VERIFIED: `.planning/config.json`]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface in this docs-only Codex Skill package. [VERIFIED: `.planning/PROJECT.md`] |
| V3 Session Management | no | No session surface in this docs-only Codex Skill package. [VERIFIED: `.planning/PROJECT.md`] |
| V4 Access Control | yes/process | Protected-character Tom access is controlled by explicit route selection and release-review gates. [VERIFIED: `SKILL.md`, `rights.md`, `RELEASE_CHECKLIST.md`] |
| V5 Input Validation | yes/docs | Prompt examples and release checklist must gate leakage markers and public sample claims. [VERIFIED: Phase 9 context] |
| V6 Cryptography | no | No cryptographic behavior in this phase. [VERIFIED: `.planning/PROJECT.md`] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Broad protected-character availability claim | Information Disclosure / Compliance Risk | Keep `gated-authorized`, explicit route, rights record, and release-review gate visible in public docs. [VERIFIED: `rights.md`, Phase 9 context] |
| Public rendered Tom sample leakage | Information Disclosure / Compliance Risk | Keep generated/public sample approval in `RELEASE_CHECKLIST.md` with reviewer/date/status/channels. [VERIFIED: `rights.md`, `RELEASE_CHECKLIST.md`] |
| Route confusion through metadata | Spoofing / Policy Bypass | Preserve Xiaohei as omitted-IP default and mark Tom explicit gated route in metadata. [VERIFIED: `openai.yaml`, `routing.md`] |
| Prompt route leakage | Tampering / Policy Drift | Add prompt leakage scan for source-frame recreation, logos, title cards, Jerry, broad cast, generic-cat drift, excessive text, route leakage. [VERIFIED: tom index, tom QA checklist] |

## Sources

### Primary (HIGH confidence)

- `AGENTS.md` - project-specific reply language, GSD workflow, doc/code language rules, and constraints. [VERIFIED: codebase read]
- `.planning/PROJECT.md` - v1.1 milestone scope, protected-character constraint, no-build runtime, compatibility. [VERIFIED: codebase read]
- `.planning/REQUIREMENTS.md` - TDOC-01 through TDOC-05 and out-of-scope boundaries. [VERIFIED: codebase read]
- `.planning/ROADMAP.md` - Phase 9/10 scope boundary and success criteria. [VERIFIED: codebase read]
- `.planning/STATE.md` - carried-forward decisions from Phases 6-8. [VERIFIED: codebase read]
- `.planning/phases/09-tom-docs-examples-release-surface/09-CONTEXT.md` - locked Phase 9 decisions and target files. [VERIFIED: codebase read]
- `.planning/phases/08-skill-controller-integration/08-VERIFICATION.md` - Phase 8 verified controller behavior. [VERIFIED: codebase read]
- `.planning/phases/08-skill-controller-integration/08-UAT.md` - Phase 8 manual UAT evidence. [VERIFIED: codebase read]
- `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `RELEASE_CHECKLIST.md` - Phase 9 target surfaces. [VERIFIED: codebase read]
- `ian-xiaohei-illustrations/SKILL.md`, `references/routing.md`, `references/ips/tom/index.md`, `references/ips/tom/rights.md` - canonical runtime/route/rights sources. [VERIFIED: codebase read]
- `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs` - existing validator and tests. [VERIFIED: codebase read and command execution]

### Secondary (MEDIUM confidence)

- None. Research did not require external ecosystem sources because Phase 9 is repo-local documentation/metadata planning. [VERIFIED: phase scope]

### Tertiary (LOW confidence)

- None. [VERIFIED: all recommendations grounded in local files or command outputs]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - repo-local Markdown/YAML/Node/ripgrep stack verified through files and commands. [VERIFIED: environment audit]
- Architecture: HIGH - Phase 9 target files and responsibility boundaries are locked in CONTEXT and Roadmap. [VERIFIED: Phase 9 context]
- Pitfalls: HIGH - stale wording and marker gaps are visible in current README/examples/metadata/checklist. [VERIFIED: grep results]
- Rights approval status: MEDIUM - rights record says reviewer/date/approval details are pending, so final public sample/release approval remains a human gate. [VERIFIED: `rights.md`]

**Research date:** 2026-06-13 [VERIFIED: environment context]
**Valid until:** 2026-07-13 for repo-local docs; re-check earlier if Tom route status, rights approval, or public sample policy changes. [ASSUMED]
