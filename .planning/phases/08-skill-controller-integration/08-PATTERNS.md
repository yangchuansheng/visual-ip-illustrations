# Phase 8: Skill Controller Integration - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 1
**Analogs found:** 1 / 1

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/SKILL.md` | controller | request-response, file-I/O | `ian-xiaohei-illustrations/SKILL.md` existing Xiaohei/Littlebox controller paragraphs | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/SKILL.md` (controller, request-response + file-I/O)

**Analog:** `ian-xiaohei-illustrations/SKILL.md`

This phase should extend the existing controller paragraphs in place. The current file already implements route selection, progressive reference loading, shot-list extras, generation routing, QA routing, output-path routing, asset preservation, and grouped delivery for Xiaohei and Littlebox. Add Tom as the third explicit route while preserving Xiaohei as the omitted-IP default.

**Recommended edit targets:**

- Core positioning: lines 12-14.
- Reference list: lines 20-34.
- Route selection: lines 41-53.
- Shot-list extras and mixed-IP planning: lines 68-94.
- Generation routing: lines 101-129.
- QA routing and high-risk issue lists: lines 133-157.
- Save paths and validation markers: lines 161-188.
- Delivery blocks: lines 194-205.

**Core positioning pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 12-14):

```markdown
默认视觉 IP 是“小黑”：黑色实心、白点眼、细腿、空表情，认真做一件荒诞但成立的事。小黑必须参与画面的核心动作，不能只是站在旁边当装饰。

可选视觉 IP 包括 Littlebox：封闭纸盒角色，用粗黑 marker 线条、浅天蓝或浅薰衣草背景、琥珀胶带和少量珊瑚强调，把同一个认知动作翻译成封闭盒子的收集、封装、排序、交付、阻挡或修复。
```

**How to extend for Tom:** Add Tom as an explicit optional protected-character IP with route status `gated-authorized`. Keep Xiaohei as the default in the same paragraph family. Mention `references/ips/tom/rights.md` as the rights authority when naming Tom.

**Progressive reference loading pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 18-35):

```markdown
先读取路由，再按所选视觉 IP 读取参考。按任务需要读取，不要一次塞满上下文：

- `references/routing.md`：视觉 IP 路由、别名、默认值、输出后缀、所需参考和归因上下文。
...
- `references/ips/littlebox/qa-checklist.md`：Littlebox 生成后身份、线条、标注、背景、动作和交付检查。
- `references/style-dna.md`、`references/xiaohei-ip.md`、`references/composition-patterns.md`、`references/prompt-template.md`、`references/qa-checklist.md`：旧根路径兼容入口，保留给现有提示和文档；当前小黑行为读取 `references/ips/xiaohei/` canonical 文件。
```

**How to extend for Tom:** Add Tom reference bullets after Littlebox using the route-local canonical pack:

```markdown
`references/ips/tom/index.md`
`references/ips/tom/rights.md`
`references/ips/tom/style-dna.md`
`references/ips/tom/tom-ip.md`
`references/ips/tom/composition-patterns.md`
`references/ips/tom/prompt-template.md`
`references/ips/tom/qa-checklist.md`
```

**Route selection pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 41-53):

```markdown
- 用户省略视觉 IP 时，默认选择小黑路由。
- 用户写 `小黑`、`Xiaohei`、`Ian` 或 `ian-xiaohei` 时，选择同一个小黑路由。
- 用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时，选择同一个 Littlebox 路由。
- 同时请求 Xiaohei 和 Littlebox 时，先识别一个 shared core idea，再建立独立 variant group：一个 Xiaohei variant group 和一个 Littlebox variant group。
...
- 每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
```

**Route metadata source:** `ian-xiaohei-illustrations/references/routing.md` lines 7-12 and 16-20:

```markdown
- 用户使用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 时，选择同一个 `tom` 路由，路线状态保持 `gated-authorized`。
- 同时请求 Xiaohei、Littlebox 和 Tom 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
...
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
```

**How to extend for Tom:** Copy the routing metadata exactly into controller prose:

- Alias set: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.
- Route id: `tom`.
- Display name: `Tom`.
- Default: `false`.
- Output suffix: `tom`.
- Status: `gated-authorized`.
- Rights pointer: `references/ips/tom/rights.md`.
- Mixed requests: "Xiaohei, Littlebox, and Tom 中的多个 IP" create separate route groups.

**Shot-list pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 68-94):

```markdown
如果用户只是说“分析怎么配图 / 思考哪些地方需要配图”，先给 shot list。每张图写清楚：

- 放在哪个段落后
- 图的主题
- 核心意思
- 结构类型
- 所选视觉 IP 在图里承担的核心动作
- 建议元素
- 建议中文标注词
...
混合 IP shot list 先写 shared core idea，再按 IP 拆成独立 variant group：

- Xiaohei variant group：小黑动作、白底手绘隐喻、建议标注、`references/ips/xiaohei/` QA、`assets/<article-slug>-illustrations/`
- Littlebox variant group：Littlebox 封闭状态、visual metaphor、assigned background、suggested objects、short visible labels、`references/ips/littlebox/` QA、`assets/<article-slug>-littlebox/`
```

**Tom shot-list source:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 15-27:

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]
   Tom action: [the physical cognitive action Tom performs]
   Supporting objects: [1-2 objects such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, or warning marks]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-tom/
   Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.
```

**How to extend for Tom:** Add "Tom shot list 额外写清楚" with the exact fields above. Extend mixed-IP shot list bullets with a Tom variant group containing Tom state, Tom action, supporting objects, visible labels, `references/ips/tom/` QA, `assets/<article-slug>-tom/`, and rights-status note.

**Generation routing pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 99-129):

```markdown
每张图只讲一个核心结构。先按所选路由读取 `required_references`，再用所选 IP 的模板、角色、构图和 QA 参考组装提示词。
...
Littlebox 路由使用 `references/ips/littlebox/prompt-template.md` 组装每张图的 English prompt，并使用 `references/ips/littlebox/language-and-labels.md` 处理 user's language 标注。Littlebox prompt 必须保持：
...
混合 IP 生成时，从同一个 shared core idea 生成分离的 variant group。Xiaohei 组只加载 `references/ips/xiaohei/`，Littlebox 组只加载 `references/ips/littlebox/`；两组各自调用自己的 prompt template、composition rules、language rules、qa-checklist 和 output_suffix。
```

**Tom generation source:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 37-67:

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes. Keep the scene original and article-explanatory.
...
Tom action: Tom must perform the central cognitive action: [specific action]. The metaphor should lose its meaning if Tom is removed.
...
Save reminder for downstream delivery: save accepted output under `assets/<article-slug>-tom/` with an ordered English slug filename such as `01-topic-name.png`.
...
Protected-route block: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage all fail the route.
```

**How to extend for Tom:** Add a Tom generation paragraph that routes through `references/ips/tom/prompt-template.md`, `composition-patterns.md`, `qa-checklist.md`, and `rights.md`. Include protected-route terms in controller prose so the planner has a direct edit target. Extend mixed generation from "two groups" to "selected route groups" across Xiaohei, Littlebox, and Tom.

**QA routing pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 133-157):

```markdown
生成后检查所选 IP 的 QA 参考。小黑路由使用 `references/ips/xiaohei/qa-checklist.md`；Littlebox 路由使用 `references/ips/littlebox/qa-checklist.md`；`references/qa-checklist.md` 保持旧根路径兼容入口。
...
发现 QA 问题时，按所选 IP 的 qa-checklist 重生成或局部编辑。Littlebox 修复优先强化 closed lid、side-seam arms、single amber jagged seam tape、near-white body、rough linework、user's language labels、balanced background 和 active placement。
```

**Tom QA source:** `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` lines 25-50 and 64-80:

```markdown
Reject or repair any output with:

- generic cats
- passive Tom placement
- source-frame recreation
- show logos
- title cards
- default Jerry usage
- broad cast expansion
- excessive text
- route leakage
- off-model Tom identity
...
Tom QA route-leakage failure: the planning, prompt, image text, or delivery note drops `gated-authorized`, omits `rights.md`, implies broad release availability, or leaks Tom-specific rules into another IP route.
...
Accepted Tom images keep Tom as the action subject, preserve recognizable Tom cues, explain one article idea through an original metaphor, carry the `gated-authorized` rights-status note, point rights-sensitive use to `rights.md`, and report the saved output path under `assets/<article-slug>-tom/`.
```

**How to extend for Tom:** Add Tom route to the first QA sentence. Add a Tom high-risk list using the protected-route failure names. Add a Tom repair sentence that routes edits to `references/ips/tom/prompt-template.md` gates and keeps the rights-status note visible.

**Save-path pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 161-188):

```markdown
保存路径来自 `references/routing.md` 的 `output_suffix`：

- Xiaohei `output_suffix: illustrations` -> `assets/<article-slug>-illustrations/`
- Littlebox `output_suffix: littlebox` -> `assets/<article-slug>-littlebox/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`
...
文件名使用 ordered English slug。混合 IP 请求分别写入 Xiaohei 和 Littlebox 输出目录，每个 variant group 保留自己的文件序号和用途说明。
```

**Tom output source:** `ian-xiaohei-illustrations/references/routing.md` lines 34-40:

```markdown
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
- `tom` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
- 混合 IP 请求按 IP 分成 separate route groups：`xiaohei` 写入 `assets/<article-slug>-illustrations/`，`littlebox` 写入 `assets/<article-slug>-littlebox/`，`tom` 写入 `assets/<article-slug>-tom/`。
```

**How to extend for Tom:** Add raw and escaped Tom paths in `SKILL.md`:

```markdown
assets/<article-slug>-tom/
assets/&lt;article-slug&gt;-tom/
```

Update mixed-IP save wording to include separate Xiaohei, Littlebox, and Tom directories.

**Delivery pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 194-205):

```markdown
生成后的交付要包含：

- 选中的视觉 IP / selected IP
- 生成了几张
- 每张图的用途
- 保存路径
- 哪些图最稳，哪些图是可选

混合 IP 交付时，按 IP 输出 one block per IP：

- Xiaohei block：shared core idea、图片用途、保存路径 `assets/<article-slug>-illustrations/`、稳定性备注
- Littlebox block：shared core idea、图片用途、保存路径 `assets/<article-slug>-littlebox/`、assigned background、稳定性备注
```

**How to extend for Tom:** Add Tom delivery fields:

- selected IP: Tom.
- shared core idea.
- image purposes.
- save path `assets/<article-slug>-tom/`.
- route status `gated-authorized`.
- rights note pointing to `references/ips/tom/rights.md`.
- stability notes.

## Shared Patterns

### Route Metadata Authority

**Source:** `ian-xiaohei-illustrations/references/routing.md`
**Apply to:** `ian-xiaohei-illustrations/SKILL.md` route selection, required references, output suffixes, mixed group wording, and delivery paths.

```markdown
`SKILL.md` 先选择视觉 IP，再加载所选路由的参考文件。
```

Use `routing.md` as the source of truth. Controller prose can repeat operational facts, but route truth should stay aligned with the row for each route.

### Xiaohei Default Compatibility

**Source:** `ian-xiaohei-illustrations/references/routing.md` lines 7, 18 and `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` lines 1-11.

```markdown
- 用户省略视觉 IP 时，选择 `xiaohei`。
...
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | ... | `active` |
```

Xiaohei remains the only omitted-IP default. Legacy root reference bullets in `SKILL.md` lines 34 and 103 preserve compatibility.

### Route Isolation

**Source:** `ian-xiaohei-illustrations/SKILL.md` lines 51-53 and `ian-xiaohei-illustrations/references/routing.md` lines 11-12.

```markdown
- 每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
- 风格、角色身份、提示词措辞和 QA 细节来自所选 IP 的参考文件。
```

Apply this pattern to Tom by loading only `references/ips/tom/*` after selecting `tom`. Mixed requests share the article core idea, then split into independent route groups.

### Rights-Status Handling

**Source:** `ian-xiaohei-illustrations/references/ips/tom/index.md` lines 5-16 and `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 7-10.

```markdown
Tom route status: `gated-authorized`.
Tom rights authority: `rights.md`.
...
Rights-status note: Tom is a protected-character route. Use `rights.md` as the authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and any status change.
```

Apply to Tom planning, generation, edit, QA, and delivery context.

## Anti-Patterns

| Anti-Pattern | Source / Reason | Planner Guardrail |
|--------------|-----------------|-------------------|
| Route leakage | `tom/qa-checklist.md` lines 41-50 reject Tom rules blended into other routes and broad availability wording. | Keep Tom references, rights notes, QA, and protected-route terms inside Tom route groups. |
| Broad availability wording | `tom/prompt-template.md` lines 40, 64 and `tom/qa-checklist.md` lines 5, 41, 50 require gated status. | Always pair Tom with `gated-authorized` and `rights.md`. |
| Touching public docs or validator | Phase 8 context D-04 excludes `README.md`, `examples/prompts.md`, `agents/openai.yaml`, `RELEASE_CHECKLIST.md`, `scripts/validate-skill-package.mjs`, and tests. | Plan only `ian-xiaohei-illustrations/SKILL.md`. |
| Mixing IPs in one prompt | `SKILL.md` lines 90-94 and 129 establish separate variant groups. | Mixed requests produce one route group per IP with its own references and output path. |
| Making Tom a default route | `routing.md` line 20 sets `default=false`; requirements keep Xiaohei as omitted-IP default. | Route Tom only through explicit aliases. |

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | - | - | Existing `SKILL.md` controller paragraphs provide an exact analog for this phase. |

## Metadata

**Analog search scope:** `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/xiaohei/index.md`, `ian-xiaohei-illustrations/references/ips/littlebox/index.md`, `ian-xiaohei-illustrations/references/ips/tom/index.md`, `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`, `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`
**Files scanned:** 11 required/context files plus project instruction files
**Pattern extraction date:** 2026-06-13
