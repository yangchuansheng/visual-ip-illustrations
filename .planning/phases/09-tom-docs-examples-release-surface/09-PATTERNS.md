# Phase 9: Tom Docs, Examples, and Release Surface - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 4
**Analogs found:** 4 / 4

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `README.md` | component | request-response | `README.md` existing visual IP, quick examples, workflow, directory, maintainer sections | exact |
| `examples/prompts.md` | test | request-response | `examples/prompts.md` route smoke prompts and copyable prompt sections | exact |
| `ian-xiaohei-illustrations/agents/openai.yaml` | config | request-response | `ian-xiaohei-illustrations/agents/openai.yaml` existing interface metadata | exact |
| `RELEASE_CHECKLIST.md` | test | batch | `RELEASE_CHECKLIST.md` automated gates, smoke prompts, rights gates, public docs checks | exact |

## Pattern Assignments

### `README.md` (component, request-response)

**Analog:** `README.md`

**Exact sections to update:**

- Top summary and IP list: lines 3 and 15-21.
- Output paths: lines 32-41.
- `## 视觉 IP`: lines 45-78.
- `## 快速示例`: lines 132-184.
- `## 工作流程`: lines 188-198.
- `## 目录结构`: lines 201-245.
- `## 维护者校验`: lines 257-265.

**Current Tom public-route wording pattern** (lines 15-20):

```markdown
当前支持两个 active 视觉 IP，并公开一个受保护的 Tom 路由状态：

- **Xiaohei**：默认视觉 IP。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：显式可选视觉 IP。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。
- **Tom**：protected-character route。维护者可用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 审核路由状态；当前 status 为 `gated-authorized`，rights record 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
```

**Required Phase 9 refinement:** keep the route hierarchy explicit:

- Xiaohei is the implicit default.
- Littlebox is explicit and active.
- Tom is explicit, protected, and `gated-authorized`.
- Mixed requests create separate route groups.

**Output-path pattern** (lines 37-41):

```markdown
- Xiaohei 输出到 workspace 的 `assets/<article-slug>-illustrations/`
- Littlebox 输出到 workspace 的 `assets/<article-slug>-littlebox/`
- Tom route 输出路径合同为 `assets/<article-slug>-tom/`

文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-illustrations/`、`assets/&lt;article-slug&gt;-littlebox/` 和 `assets/&lt;article-slug&gt;-tom/`。
```

**Route reference pattern** (lines 67-78):

```markdown
### 路由参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 查看路由元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context`、`status`。

Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom rights record: `ian-xiaohei-illustrations/references/ips/tom/rights.md`

同时请求多个视觉 IP 时，交付口径按 IP 分组，每个 IP 形成独立 variant group，并写入各自输出目录。Xiaohei 是 implicit default route；Littlebox 和 Tom 是 explicit routes，Tom 当前 status 为 `gated-authorized`。
```

**Controller facts to mirror:** `ian-xiaohei-illustrations/SKILL.md` lines 52-63 and 263-269 define omitted-IP default, exact Tom aliases, route-local references, Tom output path, and Tom delivery rights note.

**Plan guidance:** update README as one docs task. Keep rendered sample section Xiaohei-only unless release approval records public Tom samples. Add Tom to the directory tree under `ips/tom/` without changing actual files.

---

### `examples/prompts.md` (test, request-response)

**Analog:** `examples/prompts.md`

**Exact sections to update:**

- Intro route-smoke framing: lines 1-3.
- Add Tom-only route section after Littlebox route section: after line 85.
- Expand multi-IP section: lines 87-125.
- Expand maintainer smoke prompts: lines 127-176.
- Optional Tom edit/smoke prompt additions near edit sections: lines 234-278.

**Copyable prompt block pattern** (lines 64-85):

````markdown
### 显式 Littlebox：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Littlebox / 小盒 / 纸盒 / paper-box / carton 路由为下面这篇文章生成 3 张正文配图。
...
保存路径使用 `assets/<article-slug>-littlebox/`；文档校验 token 是 `assets/&lt;article-slug&gt;-littlebox/`。
```
````

**Tom smoke pattern already present** (lines 158-167):

````markdown
### 烟测：Tom protected-character route status

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，为这个观点输出 1 张 route-status shot list：
观点：把追赶中的判断拆成可执行下一步。
预期：selected IP 是 Tom，route status 是 `gated-authorized`，rights record 是 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：输出路径合同是 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
用途：route audit guidance only；Phase 8 owns runtime selection behavior，Phase 9 owns broad public examples。
```
````

**Required Phase 9 additions:**

- Tom planning prompt: solo Tom, `先不要生图`, exact aliases, planning fields from Tom prompt template, `gated-authorized`, rights record, output path.
- Tom generation prompt: solo Tom, route-local Tom references, protected-route constraints, output path and escaped token.
- Tom smoke prompt: keep text-only audit fixture, update wording to Phase 8 verified runtime behavior.
- Three-IP mixed variant prompt: one shared core idea split into Xiaohei, Littlebox, and Tom route groups.

**Tom planning fields source:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 15-27.

```text
Placement
Core idea
Structure type
Tom state
Tom action
Supporting objects
Visible labels
Output path: assets/<article-slug>-tom/
Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.
```

**Mixed route source:** `ian-xiaohei-illustrations/SKILL.md` lines 114-118 and 168 define one shared core idea and route-local groups for Xiaohei, Littlebox, and Tom.

**Plan guidance:** make examples a separate plan from README because it is both user guidance and smoke fixture inventory. Keep Tom-only prompts separate from mixed-IP prompts.

---

### `ian-xiaohei-illustrations/agents/openai.yaml` (config, request-response)

**Analog:** `ian-xiaohei-illustrations/agents/openai.yaml`

**Exact lines to update:** lines 1-6.

**Current interface pattern:**

```yaml
interface:
  display_name: "Xiaohei / Littlebox Article Illustrations"
  short_description: "为中文文章生成可选 Xiaohei 或 Littlebox 视觉 IP 的正文配图资产，默认使用 Xiaohei。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时默认使用 Xiaohei，也可以显式选择 Littlebox。"
policy:
  allow_implicit_invocation: true
```

**Required Phase 9 refinement:**

- Add Tom to display copy.
- Preserve Xiaohei as the default in `short_description` and `default_prompt`.
- Mark Tom as explicit, gated, and protected.
- Keep `policy.allow_implicit_invocation: true`.

**Plan guidance:** update this file in its own small metadata plan or pair it only with README wording. It has no Markdown sections, no route behavior, and no validation logic.

---

### `RELEASE_CHECKLIST.md` (test, batch)

**Analog:** `RELEASE_CHECKLIST.md`

**Exact sections to update:**

- `## Automated Gates`: lines 5-25.
- `## Both-IP Smoke Prompts`: lines 27-34.
- `## Tom Rights and Public Sample Gate`: lines 42-49.
- `## Public Docs and Path Markers`: lines 57-63.
- `## Phase 5 Scope Fences`: lines 65-71, rename or extend only if public release scope needs clearer fences.

**Automated gate pattern** (lines 5-25):

````markdown
## Automated Gates

- [ ] Run the package validator:

```bash
node scripts/validate-skill-package.mjs
```

- [ ] Run validator tests:

```bash
node --test scripts/validate-skill-package.test.mjs
```

- [ ] Check Markdown whitespace before committing release docs:

```bash
git diff --check
```
````

**Current Tom gate pattern** (lines 42-49):

```markdown
## Tom Rights and Public Sample Gate

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm Tom route status is `gated-authorized` across `ian-xiaohei-illustrations/references/routing.md`, `README.md`, `examples/prompts.md`, and this checklist.
- [ ] Confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- [ ] Confirm public docs include Tom output path markers `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date
```

**Required Phase 9 additions:**

- Final authorization review gate from `rights.md`.
- Route status review before status changes.
- Prompt leakage scan for broad availability wording, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, and public sample claims.
- Public asset policy: no public rendered Tom samples until approval record names reviewer, date, status, directories, and channels.
- Validator commands remain maintainer commands; Phase 10 owns validator behavior expansion.

**Rights source pattern:** `ian-xiaohei-illustrations/references/ips/tom/rights.md` lines 15-21, 29-40, and 42-52.

**Protected-route failure source:** `ian-xiaohei-illustrations/references/ips/tom/index.md` lines 28-39 and `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` lines 25-50.

**Plan guidance:** checklist should be its own release-surface plan because it is the maintainer gate and may need command/path wording across several sections.

## Shared Patterns

### Route Status Wording

**Source:** `ian-xiaohei-illustrations/references/routing.md` lines 7-20; `ian-xiaohei-illustrations/SKILL.md` lines 52-59.

Stable wording tokens:

- Tom route status: `gated-authorized`.
- Tom route id: `tom`.
- Tom display name: `Tom`.
- Tom default: `default=false`.
- Xiaohei omitted-IP default: Xiaohei is the only implicit default route.

Apply these tokens exactly in README, examples, metadata, and release checklist.

### Aliases

**Source:** `ian-xiaohei-illustrations/references/routing.md` line 20 and `ian-xiaohei-illustrations/SKILL.md` line 55.

```text
Tom
Tom Cat
Tom and Jerry
汤姆
汤姆猫
```

Use the full set in README route docs, Tom prompts, Tom smoke prompts, and release review checks.

### Output Paths

**Source:** `ian-xiaohei-illustrations/references/routing.md` lines 34-40 and `ian-xiaohei-illustrations/SKILL.md` lines 229-240.

```text
Xiaohei: assets/<article-slug>-illustrations/
Littlebox: assets/<article-slug>-littlebox/
Tom: assets/<article-slug>-tom/
Validation markers: assets/&lt;article-slug&gt;-illustrations/; assets/&lt;article-slug&gt;-littlebox/; assets/&lt;article-slug&gt;-tom/
```

Mixed-IP docs should say each route group writes to its own output directory.

### Rights Boundary

**Source:** `ian-xiaohei-illustrations/references/ips/tom/rights.md` lines 15-21 and 36-46.

Stable public wording:

- `ian-xiaohei-illustrations/references/ips/tom/rights.md` is the rights authority.
- Broad Tom availability claims require release checklist approval and authorization-scope confirmation.
- Public rendered Tom samples require explicit public-sample approval before appearing in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.

### Public Sample Policy

**Source:** `RELEASE_CHECKLIST.md` lines 42-49 and `ian-xiaohei-illustrations/references/ips/tom/rights.md` lines 42-46.

Keep README examples image section on existing Xiaohei samples until release review records public Tom sample approval. Prompt examples can mention Tom textually and must avoid claiming rendered Tom examples are public-approved.

## Files and Sections to Leave Untouched

| File / Section | Reason |
|----------------|--------|
| `ian-xiaohei-illustrations/SKILL.md` | Phase 8 verified controller behavior; Phase 9 documents it. |
| `ian-xiaohei-illustrations/references/routing.md` | Route metadata source already contains Tom status, aliases, default, required references, and paths. |
| `ian-xiaohei-illustrations/references/ips/tom/*` | Phase 7 canonical Tom pack is the source, not a Phase 9 target. |
| `NOTICE.md` | Phase 6 attribution and permission boundary already verified; Phase 9 context excludes NOTICE wording. |
| `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` | Phase 10 owns validator hardening. |
| `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` | Public rendered Tom sample approval remains pending. |
| `LICENSE` | No Phase 9 requirement changes license text. |
| Existing Xiaohei and Littlebox prompt examples except adjacent route wording | Compatibility surface; update only where route hierarchy or mixed three-IP wording requires it. |

## Recommended Plan Split

| Plan | Write Scope | Rationale |
|------|-------------|-----------|
| 09-01 README public route surface | `README.md` only | Public explanation, quick examples, workflow, directory tree, maintainer validation text are one coherent user-facing surface. |
| 09-02 Prompt examples and smoke fixtures | `examples/prompts.md` only | Copyable examples double as manual route smoke fixtures; keep Tom-only and three-IP mixed prompts together. |
| 09-03 Agent metadata | `ian-xiaohei-illustrations/agents/openai.yaml` only | Tiny config surface; preserve `allow_implicit_invocation`. |
| 09-04 Release checklist | `RELEASE_CHECKLIST.md` only | Maintainer gates, validator commands, public-sample policy, and leakage scans should remain isolated from public usage docs. |

All plans should run `git diff --check`. Full validator and Node tests are useful after docs/checklist changes, but Phase 10 owns adding new validator behavior.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | N/A | N/A | Existing public docs, prompt examples, metadata, release gates, controller docs, routing docs, and Tom reference files cover every Phase 9 target. |

## Metadata

**Analog search scope:** `AGENTS.md`, Phase 9 context, README, examples, OpenAI agent metadata, release checklist, `SKILL.md`, routing, Tom reference pack, Phase 6/7/8 pattern maps, Phase 8 verification/UAT/summary.
**Files scanned:** 20+
**Pattern extraction date:** 2026-06-13
