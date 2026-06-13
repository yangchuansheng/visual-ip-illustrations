# Phase 13: Skill Controller Integration - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 2 new/modified implementation targets
**Analogs found:** 2 / 2

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/SKILL.md` | controller | request-response | Tom controller blocks in `ian-xiaohei-illustrations/SKILL.md` plus `references/ips/tom/prompt-template.md` | exact |
| `ian-xiaohei-illustrations/references/routing.md` | config | request-response | Existing Tom and Ferris route rows in `ian-xiaohei-illustrations/references/routing.md` | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/SKILL.md` (controller, request-response)

**Primary analog:** Tom route controller wording in `ian-xiaohei-illustrations/SKILL.md`

**Secondary analog:** Ferris route pack in `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` and `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`

#### Optional IP Intro Pattern

**Copy the shape from Tom intro** (`ian-xiaohei-illustrations/SKILL.md` lines 14-16):

```markdown
可选视觉 IP 包括 Littlebox：封闭纸盒角色，用粗黑 marker 线条、浅天蓝或浅薰衣草背景、琥珀胶带和少量珊瑚强调，把同一个认知动作翻译成封闭盒子的收集、封装、排序、交付、阻挡或修复。

可选视觉 IP 还包括 Tom：显式选择的 protected-character route，route id `tom`，display name `Tom`，default=false，output_suffix: tom，route status `gated-authorized`。Tom 的 rights authority 是 `references/ips/tom/rights.md`，所有 planning、generation、QA、edit 和 delivery 表面都保留 rights-status note。
```

**Ferris insertion point:** add one paragraph immediately after the Tom paragraph and before `## 先读这些参考`.

**Ferris wording to reuse:**

```markdown
可选视觉 IP 还包括 Ferris：显式选择的 Rust-community mascot route，route id `ferris`，display name `Ferris`，default=false，output_suffix: ferris，route status `source-reviewed`。Ferris 的 source/trademark authority 是 `references/ips/ferris/source.md`，所有 planning、generation、QA、edit 和 delivery 表面都保留 source/trademark note。
```

#### Reference List Pattern

**Copy the route-local list style from Tom references** (`ian-xiaohei-illustrations/SKILL.md` lines 36-42):

```markdown
- `references/ips/tom/index.md`：Tom canonical pack 导航、route status、rights authority、输出路径和引用清单。
- `references/ips/tom/rights.md`：Tom authorization scope、distribution boundary、public-sample policy、reviewer fields 和 route status authority。
- `references/ips/tom/style-dna.md`：Tom sparse article-illustration style、recognition cues、protected-route visual vetoes 和 route leakage signals。
- `references/ips/tom/tom-ip.md`：Tom identity、solo route boundary、cognitive-action responsibility、recognition gates 和 failure modes。
- `references/ips/tom/composition-patterns.md`：Tom composition families、supporting objects、original metaphor gates 和 protected-route gates。
- `references/ips/tom/prompt-template.md`：Tom planning fields、single-image prompt、edit gates、rights-status note 和 output reminder。
- `references/ips/tom/qa-checklist.md`：Tom protected-route QA、failure categories、repair moves 和 delivery judgment。
```

**Ferris insertion point:** add the Ferris seven-file pack after Tom references and before the legacy root-path compatibility line.

**Ferris wording to reuse:**

```markdown
- `references/ips/ferris/index.md`：Ferris canonical pack 导航、route status、source/trademark authority、输出路径和引用清单。
- `references/ips/ferris/source.md`：Ferris source context、CC0/public-domain context、Rust trademark boundary、public-sample policy、reviewer fields 和 route status authority。
- `references/ips/ferris/style-dna.md`：Ferris sparse article-illustration style、recognition cues、source/trademark visual vetoes 和 route leakage signals。
- `references/ips/ferris/ferris-ip.md`：Ferris identity、route boundary、cognitive-action responsibility、recognition gates 和 failure modes。
- `references/ips/ferris/composition-patterns.md`：Ferris composition families、Rust-themed supporting objects、original metaphor gates 和 source/trademark gates。
- `references/ips/ferris/prompt-template.md`：Ferris planning fields、single-image prompt、edit gates、source/trademark note 和 output reminder。
- `references/ips/ferris/qa-checklist.md`：Ferris source-reviewed QA、failure categories、repair moves 和 delivery judgment。
```

#### Route-Selection Bullet Pattern

**Copy the alias bullet and metadata style from Tom** (`ian-xiaohei-illustrations/SKILL.md` lines 52-59):

```markdown
- 用户省略视觉 IP 时，默认选择小黑路由；omitted visual IP selects only the Xiaohei route。
- 用户写 `小黑`、`Xiaohei`、`Ian` 或 `ian-xiaohei` 时，选择同一个小黑路由。
- 用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时，选择同一个 Littlebox 路由。
- 用户写 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时，选择同一个 Tom 路由：route id `tom`，display name `Tom`，default=false，output_suffix: tom，route status `gated-authorized`，rights pointer `references/ips/tom/rights.md`。
- 同时请求 Xiaohei、Littlebox 和 Tom 中的多个 IP 时，先识别一个 shared core idea，再建立 separate route groups：每个 selected route group 使用自己的 route id、required_references、prompt template、composition rules、QA、edit repairs、output_suffix 和输出目录。
- 小黑路由沿用现有 `$ian-xiaohei-illustrations` 行为和 `assets/<article-slug>-illustrations/` 输出路径。
- Littlebox 路由使用 `assets/<article-slug>-littlebox/` 输出路径。
- Tom 路由使用 `assets/<article-slug>-tom/` 输出路径，并在 planning、generation、QA、edit 和 delivery 中保留 `gated-authorized` 与 `references/ips/tom/rights.md`。
```

**Ferris insertion points:**

- Add Ferris alias bullet after Tom alias bullet.
- Update mixed-IP sentence to "Xiaohei、Littlebox、Tom 和 Ferris".
- Add Ferris output-path/status bullet after Tom output-path/status bullet.

**Ferris wording to reuse:**

```markdown
- 用户写 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物` 或 `Rust 螃蟹` 时，选择同一个 Ferris 路由：route id `ferris`，display name `Ferris`，default=false，output_suffix: ferris，route status `source-reviewed`，source/trademark pointer `references/ips/ferris/source.md`。
- 同时请求 Xiaohei、Littlebox、Tom 和 Ferris 中的多个 IP 时，先识别一个 shared core idea，再建立 separate route groups：每个 selected route group 使用自己的 route id、required_references、prompt template、composition rules、QA、edit repairs、output_suffix 和输出目录。
- Ferris 路由使用 `assets/<article-slug>-ferris/` 输出路径，并在 planning、generation、QA、edit 和 delivery 中保留 `source-reviewed` 与 `references/ips/ferris/source.md`。
```

#### Route `required_references` Bullet Pattern

**Copy the canonical-pack bullet style from Littlebox and Tom** (`ian-xiaohei-illustrations/SKILL.md` lines 60-63):

```markdown
- 小黑路由的 `required_references` 指向 `references/ips/xiaohei/` canonical pack；旧根路径保持兼容入口。
- Littlebox 路由的 `required_references` 指向 `references/ips/littlebox/` canonical pack：`style-dna.md`、`littlebox-ip.md`、`composition-patterns.md`、`language-and-labels.md`、`prompt-template.md` 和 `qa-checklist.md`。
- Tom 路由的 `required_references` 指向 `references/ips/tom/` canonical pack：`index.md`、`rights.md`、`style-dna.md`、`tom-ip.md`、`composition-patterns.md`、`prompt-template.md` 和 `qa-checklist.md`。
- 每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
```

**Ferris insertion point:** add after the Tom `required_references` bullet and before the variant-group isolation bullet.

**Ferris wording to reuse:**

```markdown
- Ferris 路由的 `required_references` 指向 `references/ips/ferris/` canonical pack：`index.md`、`source.md`、`style-dna.md`、`ferris-ip.md`、`composition-patterns.md`、`prompt-template.md` 和 `qa-checklist.md`。
```

#### Shot-List Route-Specific Fields Pattern

**Copy the controller-level field list shape from Tom** (`ian-xiaohei-illustrations/SKILL.md` lines 102-112):

```markdown
Tom shot list 使用 `references/ips/tom/prompt-template.md`，额外写清楚：

- Placement
- Core idea
- Structure type
- Tom state
- Tom action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-tom/`
- Rights-status note: Tom is a `gated-authorized` protected-character route; check `references/ips/tom/rights.md` for authorization scope and distribution boundary.
```

**Use Ferris exact fields from Ferris prompt template** (`references/ips/ferris/prompt-template.md` lines 17-31):

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Ferris state: [focused / guarding / sorting / type-checking / borrowing / compiling / inspecting / untangling / bracing / stamping / releasing]
   Ferris action: [the physical cognitive action Ferris performs]
   Supporting objects: [1-2 Rust-themed low-tech objects: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, or review gates]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-ferris/
   Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `source.md` for source context and trademark boundary.
```

**Ferris insertion point:** add the controller-level Ferris shot-list block after Tom shot-list block and before mixed-IP shot-list text.

**Ferris wording to reuse in `SKILL.md`:**

```markdown
Ferris shot list 使用 `references/ips/ferris/prompt-template.md`，额外写清楚：

- Placement
- Core idea
- Structure type
- Ferris state
- Ferris action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-ferris/`
- Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `references/ips/ferris/source.md` for source context and trademark boundary.
```

#### Mixed-IP Variant Group Pattern

**Copy the current three-group pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 114-118):

```markdown
混合 IP shot list 先写 shared core idea，再按 selected route groups 拆成独立 variant group：

- Xiaohei variant group：小黑动作、白底手绘隐喻、建议标注、`references/ips/xiaohei/` QA、`assets/<article-slug>-illustrations/`
- Littlebox variant group：Littlebox 封闭状态、visual metaphor、assigned background、suggested objects、short visible labels、`references/ips/littlebox/` QA、`assets/<article-slug>-littlebox/`
- Tom variant group：Tom state、Tom action、supporting objects、visible labels、`references/ips/tom/` QA、`assets/<article-slug>-tom/`、rights-status note、`gated-authorized`、`references/ips/tom/rights.md`
```

**Ferris insertion point:** add Ferris variant group after Tom.

**Ferris wording to reuse:**

```markdown
- Ferris variant group：Ferris state、Ferris action、supporting objects、visible labels、`references/ips/ferris/` QA、`assets/<article-slug>-ferris/`、source/trademark note、`source-reviewed`、`references/ips/ferris/source.md`
```

#### Single-Image Generation Route Block Pattern

**Copy the route-specific controller block shape from Tom** (`ian-xiaohei-illustrations/SKILL.md` lines 154-166):

```markdown
Tom 路由只加载 Tom `required_references`，使用 `references/ips/tom/prompt-template.md` 和 `references/ips/tom/composition-patterns.md` 组装每张图的 English prompt，再用 `references/ips/tom/qa-checklist.md` 检查输出。Tom generation context 始终保留 route status `gated-authorized` 和 rights pointer `references/ips/tom/rights.md`。Tom prompt 必须保持：

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article illustration on clean white or near-white background
- rough black linework with generous whitespace
- Tom from Tom and Jerry as the central cognitive action subject
- recognizable Tom cues: grey or blue-grey body, white muzzle, white belly areas, expressive ears, long tail, visible paws, Tom-like head shape and body silhouette
- short visible labels copied exactly in the user's language
- route status note: `gated-authorized`
- rights authority: `references/ips/tom/rights.md`
- save reminder: `assets/<article-slug>-tom/`
- protected-route block: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage all fail the route
```

**Use Ferris exact generation constraints from prompt template** (`references/ips/ferris/prompt-template.md` lines 39-70):

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Ferris is a `source-reviewed` Rust-community mascot route. Use `source.md` as the source/trademark authority for source context, CC0/public-domain context, Rust trademark boundary, public-sample policy, reviewer fields, and status changes. Keep the scene original, article-explanatory, and route-local.

Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route. Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
```

**Ferris insertion point:** add Ferris route block after Tom generation block and before mixed-IP generation text.

**Ferris wording to reuse in `SKILL.md`:**

```markdown
Ferris 路由只加载 Ferris `required_references`，使用 `references/ips/ferris/prompt-template.md` 和 `references/ips/ferris/composition-patterns.md` 组装每张图的 English prompt，再用 `references/ips/ferris/qa-checklist.md` 检查输出。Ferris generation context 始终保留 route status `source-reviewed` 和 source/trademark pointer `references/ips/ferris/source.md`。Ferris prompt 必须保持：

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article illustration on clean white or near-white background
- rough black linework with generous whitespace
- Ferris as the central cognitive action subject
- recognizable Ferris cues: compact orange/rust-red crab body, broad crab shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and active body language
- short visible labels copied exactly in the user's language
- route status note: `source-reviewed`
- source/trademark authority: `references/ips/ferris/source.md`
- source/trademark note covering Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording
- save reminder: `assets/<article-slug>-ferris/`
- Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route
```

**Mixed generation update:** extend the current mixed line (`SKILL.md` line 168) so Xiaohei, Littlebox, Tom, and Ferris groups each load their own route directory, prompt template, composition rules, QA checklist, edit gates, output suffix, and route note.

#### QA/Edit High-Risk and Repair Pattern

**Copy the controller high-risk list style from Tom** (`ian-xiaohei-illustrations/SKILL.md` lines 196-211):

```markdown
Tom 高风险问题：

- generic cats
- passive Tom placement
- source-frame recreation
- show logos
- title cards
- default Jerry usage
- broad cast expansion
- generic-cat drift
- excessive text
- route leakage
- off-model Tom identity
- rights-status note loss

发现 QA 问题时，按所选 IP 的 qa-checklist 重生成或局部编辑。Littlebox 修复优先强化 closed lid、side-seam arms、single amber jagged seam tape、near-white body、rough linework、user's language labels、balanced background 和 active placement。Tom 修复使用 `references/ips/tom/prompt-template.md` 的 edit gates：Tom edit participation repair gate、Tom off-model identity repair gate、Tom title removal edit gate、Tom text reduction edit gate 和 Tom unaffected-content preservation gate；每次修复都保留 `gated-authorized`、`references/ips/tom/rights.md` 和 route-local QA context。
```

**Use Ferris QA exact failure categories** (`references/ips/ferris/qa-checklist.md` lines 29-61):

```markdown
- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage
```

**Use Ferris repair gates** (`references/ips/ferris/qa-checklist.md` lines 77-89 and `prompt-template.md` lines 77-150):

```markdown
- Stronger Ferris Participation
- Off-Model Identity Repair
- Trademark-Boundary Repair
- Title Removal
- Text Reduction
- Preserve Unaffected Content
- Source-asset tracing repair
- Route leakage repair
- Excessive text repair
```

**Ferris insertion points:**

- Add Ferris QA checklist path to the route QA reference sentence after Tom.
- Add `Ferris 高风险问题` block after Tom high-risk list.
- Extend the repair paragraph with Ferris edit gates.

**Ferris wording to reuse:**

```markdown
Ferris 高风险问题：

- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage
- Rust-logo-forward composition
- bundled Rust marks
- endorsement wording
- broad release language
- missing source/trademark note
- missing output path

Ferris 修复使用 `references/ips/ferris/prompt-template.md` 的 edit gates：Ferris edit participation repair gate、Ferris off-model identity repair gate、Ferris trademark-boundary repair gate、Ferris title removal edit gate、Ferris text reduction edit gate 和 Ferris unaffected-content preservation gate；每次修复都保留 `source-reviewed`、`references/ips/ferris/source.md`、source/trademark note 和 route-local QA context。
```

#### Save/Delivery Path and Escaped Token Pattern

**Copy the active path, suffix mapping, escaped token, and mixed save pattern** (`ian-xiaohei-illustrations/SKILL.md` lines 217-249):

````markdown
Tom 路由的当前活动路径为：

```text
assets/<article-slug>-tom/
```

保存路径来自 `references/routing.md` 的 `output_suffix`：

- Xiaohei `output_suffix: illustrations` -> `assets/<article-slug>-illustrations/`
- Littlebox `output_suffix: littlebox` -> `assets/<article-slug>-littlebox/`
- Tom `output_suffix: tom` -> `assets/<article-slug>-tom/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`; Tom `assets/&lt;article-slug&gt;-tom/`
````

**Ferris insertion points:**

- Add Ferris active path code block after Tom.
- Add Ferris output suffix mapping after Tom.
- Add escaped Ferris token to `Validation markers`.
- Add Ferris mixed output directory to the mixed save sentence.

**Ferris wording to reuse:**

````markdown
Ferris 路由的当前活动路径为：

```text
assets/<article-slug>-ferris/
```

- Ferris `output_suffix: ferris` -> `assets/<article-slug>-ferris/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`; Tom `assets/&lt;article-slug&gt;-tom/`; Ferris `assets/&lt;article-slug&gt;-ferris/`

混合 IP 请求按 separate route groups 分别写入输出目录：Xiaohei 写入 `assets/<article-slug>-illustrations/`，Littlebox 写入 `assets/<article-slug>-littlebox/`，Tom 写入 `assets/<article-slug>-tom/`，Ferris 写入 `assets/<article-slug>-ferris/`；每个 variant group 保留自己的文件序号和用途说明。
````

#### Delivery Block Pattern

**Copy one-block-per-IP delivery style** (`ian-xiaohei-illustrations/SKILL.md` lines 263-269):

```markdown
混合 IP 交付时，按 IP 输出 one block per IP：

- Xiaohei block：shared core idea、图片用途、保存路径 `assets/<article-slug>-illustrations/`、稳定性备注
- Littlebox block：shared core idea、图片用途、保存路径 `assets/<article-slug>-littlebox/`、assigned background、稳定性备注
- Tom block：selected IP `Tom`、shared core idea、image purposes、save path `assets/<article-slug>-tom/`、route status `gated-authorized`、rights note `references/ips/tom/rights.md`、stability notes

交付前做 route-leakage delivery guard：Tom block 保留 `gated-authorized` 和 `references/ips/tom/rights.md`；Xiaohei 和 Littlebox blocks 保留各自 route-local wording、QA 和输出目录。
```

**Ferris insertion point:** add Ferris delivery block after Tom and extend the route-leakage guard.

**Ferris wording to reuse:**

```markdown
- Ferris block：selected IP `Ferris`、shared core idea、image purposes、save path `assets/<article-slug>-ferris/`、route status `source-reviewed`、source/trademark note `references/ips/ferris/source.md`、stability notes

交付前做 route-leakage delivery guard：Tom block 保留 `gated-authorized` 和 `references/ips/tom/rights.md`；Ferris block 保留 `source-reviewed`、`references/ips/ferris/source.md`、source/trademark note 和 `assets/<article-slug>-ferris/`；Xiaohei 和 Littlebox blocks 保留各自 route-local wording、QA 和输出目录。
```

### `ian-xiaohei-illustrations/references/routing.md` (config, request-response)

**Analog:** existing route rows and Ferris route-selection prose in `ian-xiaohei-illustrations/references/routing.md`

#### Routing Rule Pattern

**Existing Ferris rule already matches Phase 13 alias/default behavior** (`references/routing.md` lines 7-14):

```markdown
- 用户省略视觉 IP 时，选择 `xiaohei`。
- 用户使用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 时，选择同一个 `tom` 路由，路线状态保持 `gated-authorized`。
- 用户使用 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹` 时，选择同一个 `ferris` 路由，路线状态保持 `source-reviewed`。
- 同时请求 Xiaohei、Littlebox、Tom 和 Ferris 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
```

**Implementation guidance:** preserve this wording unless a controller parity edit is needed. It already encodes Xiaohei-only omitted-IP default, Ferris explicit route aliases, and four-IP separate route groups.

#### Route Row Pattern

**Copy the full-pack `required_references` shape from Tom row** (`references/routing.md` lines 18-23):

```markdown
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/source.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
```

**Ferris replacement row:**

```markdown
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
```

#### Output Path Pattern

**Existing Ferris output path already matches Phase 13** (`references/routing.md` lines 37-45):

```markdown
- `ferris` 输出目录为 `assets/<article-slug>-ferris/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-ferris/`。
- `ferris` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
- 混合 IP 请求按 IP 分成 separate route groups：`xiaohei` 写入 `assets/<article-slug>-illustrations/`，`littlebox` 写入 `assets/<article-slug>-littlebox/`，`tom` 写入 `assets/<article-slug>-tom/`，`ferris` 写入 `assets/<article-slug>-ferris/`。
```

**Implementation guidance:** preserve raw token `assets/<article-slug>-ferris/` and escaped token `assets/&lt;article-slug&gt;-ferris/`.

## Shared Patterns

### Route Isolation

**Source:** `ian-xiaohei-illustrations/SKILL.md` lines 63-65 and `references/routing.md` lines 12-14

Apply to every Ferris controller insertion:

```markdown
- 每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
- 共享流程只负责理解正文、选择认知锚点、规划图组、单张生成、QA 交接、资产保留和交付报告。
- 风格、角色身份、提示词措辞和 QA 细节来自所选 IP 的参考文件。
```

### Status/Authority Propagation

**Source:** Tom status propagation in `SKILL.md` lines 154-166 and Ferris source/trademark authority in `references/ips/ferris/prompt-template.md` lines 5-11

Apply to Ferris planning, generation, QA, edits, save, and delivery:

```markdown
Ferris route status: `source-reviewed`.
Ferris output path: `assets/<article-slug>-ferris/`.
Ferris source/trademark authority: `source.md`.
Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route.
```

### User Language vs English Prompt

**Source:** `references/ips/tom/prompt-template.md` line 3 and `references/ips/ferris/prompt-template.md` line 3

Apply to Ferris shot-list and generation wording:

```markdown
Planning and delivery notes follow the user's language. Image-generation prompts stay English for model consistency. Visible labels are quoted exactly in the user's language.
```

### Asset Preservation

**Source:** `SKILL.md` lines 242-251 and `routing.md` lines 43-46

Apply to Ferris save/delivery:

```markdown
01-topic-name.png
02-topic-name.png
```

```markdown
输出前检查目标目录已有资产，生成新文件名以保留历史结果。
```

## Reusable Tom/Littlebox Wording Patterns

Use Tom wording when Ferris needs route status, authority, prompt-template, QA, edit-gate, output reminder, or delivery-note propagation. Tom is the closest explicit status-bearing route.

Use Littlebox wording when Ferris needs route-local language handling, visible-label preservation, mixed-IP variant-group phrasing, or multi-output background-free planning cadence. Littlebox is the closest non-default selectable route for `user's language` labels and separate output suffix behavior.

## Phase Boundaries

### Phase 13 Scope

- Modify `ian-xiaohei-illustrations/SKILL.md`.
- Modify `ian-xiaohei-illustrations/references/routing.md`.
- Keep Ferris explicit with `default=false`.
- Preserve Xiaohei omitted-IP default.
- Add Ferris route aliases, required references, shot-list fields, generation block, QA/edit routing, save paths, escaped token, mixed-IP groups, and delivery block.

### Phase 14 Boundary

- Public README Ferris route docs.
- `examples/prompts.md` Ferris and four-IP prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml`.
- `NOTICE.md`.
- `RELEASE_CHECKLIST.md`.

### Phase 15 Boundary

- `scripts/validate-skill-package.mjs`.
- `scripts/validate-skill-package.test.mjs`.
- Validator checks for Ferris route behavior, full pack refs, prompt placeholders, QA markers, docs markers, source/trademark markers, raw and escaped path tokens, route leakage, public sample gates, and four-route parser behavior.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | n/a | n/a | Tom, Littlebox, Ferris pack files, and routing table cover all Phase 13 patterns. |

## Metadata

**Analog search scope:** `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`, `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`, `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`
**Files scanned:** 7
**Pattern extraction date:** 2026-06-13
