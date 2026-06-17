# Visual IP Illustrations

> Visual IP Illustrations 是一个用于文章正文配图的多视觉 IP Codex Skill。Xiaohei 是隐式默认路线；Littlebox 是显式且 active 的路线；Tom 是显式 protected-character 路线，状态为 `gated-authorized`；Ferris 是显式 Rust-community mascot 路线，状态为 `source-reviewed`；Seal 是显式 product-neutral hoodie seal 路线，状态为 `active`；OpenClaw 是显式 logo-mascot 路线，状态为 `source-reviewed`。 Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 横图 | 多视觉 IP | 文章正文配图 | 标准调用方式：`$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | **简体中文** | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## 这个仓库是什么

Visual IP Illustrations 引导 AI agent 为文章、帖子、博客、Notion 文档和方法论写作创建正文配图。

这个 skill 会读取源文本里的认知锚点，再把一个判断、工作流、结构、状态或隐喻转化为一张易记的 16:9 手绘解释图。

当前路线清单：

- **Xiaohei**：隐式默认路线。用户省略视觉 IP 时，skill 使用 Xiaohei，并保留白底手绘文章配图体验。
- **Littlebox**：显式 active 路线。请求里出现 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路线。
- **Tom**：显式 protected-character 路线。请求里出现 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时使用 Tom 路线。
- **Ferris**：显式 Rust-community mascot 路线。请求里出现 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物` 或 `Rust 螃蟹` 时使用 Ferris 路线。
- **Seal**：显式 product-neutral hoodie seal 路线。请求里出现 `Seal`、`hoodie seal`、`white seal`、`blue hoodie seal`、`海豹`、`连帽衫海豹`、`白色海豹` 或 `蓝色连帽衫海豹` 时使用 Seal 路线。
- **OpenClaw**：显式 logo-mascot 路线，状态为 `source-reviewed`。请求里出现 `OpenClaw`、`openclaw`、`OpenClaw logo`、`OpenClaw mascot` 或 `ian-xiaohei-illustrations/references/routing.md` 中列出的 OpenClaw 别名时使用 OpenClaw 路线。
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `ian-xiaohei-illustrations/references/routing.md` use the Go Gopher route.

核心价值：用户可以选择一个视觉 IP，并得到在角色、风格规则、提示词、QA 门槛、保存输出、署名、来源上下文和品牌边界上都与该 IP 保持一致的文章配图资产。

Release 1.4 的公开身份使用 `Visual IP Illustrations`，标准本地检出 slug 为 `visual-ip-illustrations`，标准调用方式为 `$visual-ip-illustrations`。兼容入口保持稳定：可安装包目录 `ian-xiaohei-illustrations/`、Legacy compatibility alias `$ian-xiaohei-illustrations`、现有 `ian-xiaohei-illustrations/` 源路径、路线行为、输出目录和验证器标记。

---

## 适合谁

- 需要为文章概念制作正文配图的作者。
- 想要清晰视觉隐喻的产品思考者和方法论写作者。
- 需要可复用视觉语言提示词的 AI 工作流作者。
- 想要稳定多 IP skill 包的 Codex 用户。

## 输出

- 一份文章的 4-8 张图片 shot list。
- 每张图包含：位置、主题、核心观点、结构类型、角色动作和建议可见标签。
- 最终 PNG 图片。
- Xiaohei 输出到工作区路径 `assets/<article-slug>-illustrations/`。
- Littlebox 输出到工作区路径 `assets/<article-slug>-littlebox/`。
- Tom 输出到工作区路径 `assets/<article-slug>-tom/`。
- Ferris 输出到工作区路径 `assets/<article-slug>-ferris/`。
- Seal 输出到工作区路径 `assets/<article-slug>-seal/`。
- OpenClaw 输出到工作区路径 `assets/<article-slug>-openclaw/`。
- Go Gopher 输出到工作区路径 `assets/<article-slug>-gopher/`。

文档验证也保留 HTML 转义后的路径标记：`assets/&lt;article-slug&gt;-illustrations/`、`assets/&lt;article-slug&gt;-littlebox/`、`assets/&lt;article-slug&gt;-tom/`、`assets/&lt;article-slug&gt;-ferris/`、`assets/&lt;article-slug&gt;-seal/` 和 `assets/&lt;article-slug&gt;-openclaw/`。
文档验证也保留 Go Gopher HTML 转义路径标记：`assets/&lt;article-slug&gt;-gopher/`。

---

## 视觉 IP 路线

### Xiaohei

Xiaohei 是默认路线：一个实心黑色小人，有圆点眼睛、细腿和空白表情，在纯白背景上主动执行奇怪但清晰的认知动作。它适合判断、工作流、断点、陷阱、交接路径和系统局部视图。

别名：`小黑`、`Xiaohei`、`Ian`、`ian-xiaohei`。

### Littlebox

Littlebox 是显式路线：一个闭合纸盒角色，有粗糙黑色马克笔线条、淡天蓝或淡薰衣草背景、琥珀色封箱胶带和少量珊瑚色点缀。它会把认知动作转化为收集、打包、分类、交接、阻挡或修复。

别名：`小盒`、`Littlebox`、`纸盒`、`paper-box`、`carton`。

### Tom

Tom 是显式 protected-character 路线：熟悉的蓝灰色猫角色会在路线权利边界内，通过主动漫画动作承载一个文章概念。它适合追逐逻辑、陷阱设置、失败捷径、脆弱计划、反转、时机问题和卡通式因果序列。

别名：`Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫`。

### Ferris

Ferris 是显式 Rust-community mascot 路线：紧凑的橙色螃蟹吉祥物通过仔细搭建、分类、守护、抬起、连接或修复来执行核心认知动作。它适合系统思考、可靠性、所有权、类编译流程、取舍评审、边界检查和低技术感 Rust 主题物件隐喻。

别名：`Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹`。

### Seal

Seal 是显式 product-neutral hoodie seal 路线：一个戴普通海军蓝帽子、穿普通深蓝连帽衫的白色圆润海豹，会执行文章的核心判断、顺序、交接、比较或修复动作。它适合评审、优先级排序、来源历史意识、无 logo 的产品中立场景和低技术感文章隐喻。

别名：`Seal`、`hoodie seal`、`white seal`、`blue hoodie seal`、`海豹`、`连帽衫海豹`、`白色海豹`、`蓝色连帽衫海豹`。

### OpenClaw

OpenClaw 是显式 logo-mascot 路线：官方红色圆形 OpenClaw logo 角色会通过友好的检查、托举、搭桥、分类、抬起或发信号动作承载一个文章概念。它适合工作流清晰化、兼容性检查、模型/工具协作、评审门槛和 source-reviewed 项目隐喻。

别名：`OpenClaw`、`openclaw`、`OpenClaw logo`、`OpenClaw mascot`，以及 `ian-xiaohei-illustrations/references/routing.md` 中列出的 OpenClaw 别名。

### Go Gopher

Go Gopher 是显式 source-reviewed 文章插图吉祥物路线：根目录 `gopher.png` 中的 Go 语言吉祥物，通过稀疏手绘的认知动作承载一个文章概念，同时保留 Go blog 来源语境、Renee French 署名、Creative Commons Attribution 4.0 许可边界、Go logo 边界、official endorsement 边界和 public sample gate。

别名：`Go Gopher`、`Gopher`、`golang gopher`、`Go mascot`，以及 `ian-xiaohei-illustrations/references/routing.md` 中列出的 Go Gopher 别名。

### 路线参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 中检查路线元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context` 和 `status`。

标准包：

- Xiaohei：`ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox：`ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom：`ian-xiaohei-illustrations/references/ips/tom/`，核心入口 `index.md`，权利边界 `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris：`ian-xiaohei-illustrations/references/ips/ferris/`，来源/商标权威文件 `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Seal：`ian-xiaohei-illustrations/references/ips/seal/`，来源历史权威文件 `ian-xiaohei-illustrations/references/ips/seal/source.md`
- OpenClaw：`ian-xiaohei-illustrations/references/ips/openclaw/`，来源/许可证权威文件 `ian-xiaohei-illustrations/references/ips/openclaw/source.md`
- Go Gopher：`ian-xiaohei-illustrations/references/ips/gopher/`，来源/许可证权威文件 `ian-xiaohei-illustrations/references/ips/gopher/source.md`

当一个请求要求多个视觉 IP 时，按独立变体组交付，并把每一组写入自己的输出目录。Xiaohei 是隐式默认路线；Littlebox 是显式 active 路线；Tom 是显式 protected-character 路线，状态为 `gated-authorized`；Ferris 是显式 Rust-community mascot 路线，状态为 `source-reviewed`；Seal 是显式 product-neutral hoodie seal 路线，状态为 `active`；OpenClaw 是显式 logo-mascot 路线，状态为 `source-reviewed`；Go Gopher 是显式 Go language mascot 路线，状态为 `source-reviewed`。

操作路线事实：

- Tom：状态 `gated-authorized`；权利边界 `ian-xiaohei-illustrations/references/ips/tom/rights.md`；输出路径 `assets/<article-slug>-tom/`；文档验证标记 `assets/&lt;article-slug&gt;-tom/`；输出后缀 `tom`；公开渲染样例需要 `RELEASE_CHECKLIST.md` public-sample gate 和 Tom rights record approval。
- Ferris：状态 `source-reviewed`；来源/商标权威文件 `ian-xiaohei-illustrations/references/ips/ferris/source.md`；输出路径 `assets/<article-slug>-ferris/`；文档验证标记 `assets/&lt;article-slug&gt;-ferris/`；输出后缀 `ferris`；公开渲染样例需要 `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate。Ferris 是显式 Rust-community mascot 路线，状态为 source-reviewed；生成的公开 Ferris 样例需要 Rust trademark and endorsement-safe wording 的发布评审。
- Seal：路线 id `seal`；default=false；状态 `active`；来源历史权威文件 `ian-xiaohei-illustrations/references/ips/seal/source.md`；输出路径 `assets/<article-slug>-seal/`；文档验证标记 `assets/&lt;article-slug&gt;-seal/`；输出后缀 `seal`；hoodie seal 身份使用白色圆润海豹身体、普通海军蓝帽子、普通深蓝连帽衫、有光泽的深色眼睛、黑色鼻子、胡须点、小微笑、短圆鳍状肢、紧凑腿部和侧后方白色尾巴；logo-free 边界要求帽子、连帽衫胸口、吉祥物身体、道具和场景保持 plain and mark-free；product-neutral route isolation 让 Seal 与 product-brand 路线分离；source-history attachment 保持必需；公开渲染样例需要通过 hoodie seal identity、logo-free output、product-neutral route isolation、source-history attachment 和 article-metaphor quality 的发布门槛。
- OpenClaw：路线 id `openclaw`；default=false；状态 `source-reviewed`；来源/许可证权威文件 `ian-xiaohei-illustrations/references/ips/openclaw/source.md`；输出路径 `assets/<article-slug>-openclaw/`；文档验证标记 `assets/&lt;article-slug&gt;-openclaw/`；输出后缀 `openclaw`；uploaded-logo identity 使用红色圆形身体、两侧爪形手臂、两根触角、黑色眼睛、青色瞳孔和短腿；公开渲染样例需要 `RELEASE_CHECKLIST.md` public-sample gate 和最终 OpenClaw release evidence。
- Go Gopher：路线 id `gopher`；default=false；状态 `source-reviewed`；来源/许可证权威文件 `ian-xiaohei-illustrations/references/ips/gopher/source.md`；输出路径 `assets/<article-slug>-gopher/`；文档验证标记 `assets/&lt;article-slug&gt;-gopher/`；输出后缀 `gopher`；本地视觉权威来自根目录 `gopher.png`；署名 Renee French；许可边界 Creative Commons Attribution 4.0；公开渲染样例需要 `RELEASE_CHECKLIST.md` public-sample gate 和 Phase 42 Go Gopher release evidence；Go logo boundary 和 official endorsement boundary 随路线交付记录一起保留。

---

## 示例图库

These images are approved public English calibration examples for the current visual IP routes: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher. Each row keeps the same concept and shows how each IP translates the action through its route-local style, character rules, source boundaries, and QA gates.

### Two Breakpoints

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Two Breakpoints - Xiaohei](examples/images-en/01-two-breakpoints.png) | ![Two Breakpoints - Littlebox](examples/images-en/littlebox/01-two-breakpoints.png) | ![Two Breakpoints - Tom](examples/images-en/tom/01-two-breakpoints.png) | ![Two Breakpoints - Ferris](examples/images-en/ferris/01-two-breakpoints.png) | ![Two Breakpoints - Seal](examples/images-en/seal/01-two-breakpoints.png) | ![Two Breakpoints - OpenClaw](examples/images-en/openclaw/01-two-breakpoints.png) | ![Two Breakpoints - Go Gopher](examples/images-en/gopher/01-two-breakpoints.png) |

### Sort by Purpose

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Sort by Purpose - Xiaohei](examples/images-en/02-sort-by-purpose.png) | ![Sort by Purpose - Littlebox](examples/images-en/littlebox/02-sort-by-purpose.png) | ![Sort by Purpose - Tom](examples/images-en/tom/02-sort-by-purpose.png) | ![Sort by Purpose - Ferris](examples/images-en/ferris/02-sort-by-purpose.png) | ![Sort by Purpose - Seal](examples/images-en/seal/02-sort-by-purpose.png) | ![Sort by Purpose - OpenClaw](examples/images-en/openclaw/02-sort-by-purpose.png) | ![Sort by Purpose - Go Gopher](examples/images-en/gopher/02-sort-by-purpose.png) |

### One Fish, Many Uses

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![One Fish, Many Uses - Xiaohei](examples/images-en/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Littlebox](examples/images-en/littlebox/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Tom](examples/images-en/tom/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Ferris](examples/images-en/ferris/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Seal](examples/images-en/seal/03-one-fish-many-uses.png) | ![One Fish, Many Uses - OpenClaw](examples/images-en/openclaw/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Go Gopher](examples/images-en/gopher/03-one-fish-many-uses.png) |

### Handoff Path

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Handoff Path - Xiaohei](examples/images-en/04-handoff-path.png) | ![Handoff Path - Littlebox](examples/images-en/littlebox/04-handoff-path.png) | ![Handoff Path - Tom](examples/images-en/tom/04-handoff-path.png) | ![Handoff Path - Ferris](examples/images-en/ferris/04-handoff-path.png) | ![Handoff Path - Seal](examples/images-en/seal/04-handoff-path.png) | ![Handoff Path - OpenClaw](examples/images-en/openclaw/04-handoff-path.png) | ![Handoff Path - Go Gopher](examples/images-en/gopher/04-handoff-path.png) |

### Information Well

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Information Well - Xiaohei](examples/images-en/05-information-well.png) | ![Information Well - Littlebox](examples/images-en/littlebox/05-information-well.png) | ![Information Well - Tom](examples/images-en/tom/05-information-well.png) | ![Information Well - Ferris](examples/images-en/ferris/05-information-well.png) | ![Information Well - Seal](examples/images-en/seal/05-information-well.png) | ![Information Well - OpenClaw](examples/images-en/openclaw/05-information-well.png) | ![Information Well - Go Gopher](examples/images-en/gopher/05-information-well.png) |

### Idea Press

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Idea Press - Xiaohei](examples/images-en/06-idea-press.png) | ![Idea Press - Littlebox](examples/images-en/littlebox/06-idea-press.png) | ![Idea Press - Tom](examples/images-en/tom/06-idea-press.png) | ![Idea Press - Ferris](examples/images-en/ferris/06-idea-press.png) | ![Idea Press - Seal](examples/images-en/seal/06-idea-press.png) | ![Idea Press - OpenClaw](examples/images-en/openclaw/06-idea-press.png) | ![Idea Press - Go Gopher](examples/images-en/gopher/06-idea-press.png) |

### Content Fermentation

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Content Fermentation - Xiaohei](examples/images-en/07-content-fermentation.png) | ![Content Fermentation - Littlebox](examples/images-en/littlebox/07-content-fermentation.png) | ![Content Fermentation - Tom](examples/images-en/tom/07-content-fermentation.png) | ![Content Fermentation - Ferris](examples/images-en/ferris/07-content-fermentation.png) | ![Content Fermentation - Seal](examples/images-en/seal/07-content-fermentation.png) | ![Content Fermentation - OpenClaw](examples/images-en/openclaw/07-content-fermentation.png) | ![Content Fermentation - Go Gopher](examples/images-en/gopher/07-content-fermentation.png) |

### Trust Bridge

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Trust Bridge - Xiaohei](examples/images-en/08-trust-bridge.png) | ![Trust Bridge - Littlebox](examples/images-en/littlebox/08-trust-bridge.png) | ![Trust Bridge - Tom](examples/images-en/tom/08-trust-bridge.png) | ![Trust Bridge - Ferris](examples/images-en/ferris/08-trust-bridge.png) | ![Trust Bridge - Seal](examples/images-en/seal/08-trust-bridge.png) | ![Trust Bridge - OpenClaw](examples/images-en/openclaw/08-trust-bridge.png) | ![Trust Bridge - Go Gopher](examples/images-en/gopher/08-trust-bridge.png) |

---

## 安装

```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

安装后，在 Codex 中优先使用 `$visual-ip-illustrations`。

Release 1.4 兼容性：

- 标准公开调用方式：`$visual-ip-illustrations`
- Legacy compatibility alias：`$ian-xiaohei-illustrations`
- 可安装 skill 包目录：`ian-xiaohei-illustrations/`
- 当前线上仓库 remote：`https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`
- 本地检出目标目录：`visual-ip-illustrations`
- 两个调用入口的路线行为和输出目录保持稳定。

---

## 快速示例

`{visual IP}` 可以是 `Xiaohei`、`Littlebox`、`Tom`、`Ferris`、`Seal`, `OpenClaw`, `Go Gopher` 或受支持的别名。省略视觉 IP 时选择 Xiaohei。

### 规划 Shot List

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### 生成正文配图

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### 单个想法

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### IP 对比

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Protected-character、source-reviewed 和 active source-history 路线会自动携带路线状态、source/rights note、release gate 和路线专属输出目录；OpenClaw 会自动携带 source/license authority、uploaded-logo identity、public-sample gate 和 `assets/<article-slug>-openclaw/`。

更多可复制示例见 [examples/prompts.md](examples/prompts.md)。

---

## 工作流

1. 读取文章、Markdown、Notion 内容、截图或用户提供的主题。
2. 选择视觉 IP：省略 IP 时选择 Xiaohei；显式 Littlebox 选择 Littlebox；显式 Tom 别名选择 Tom protected-character 路线；显式 Ferris 别名选择 Ferris source-reviewed pack；显式 Seal 别名选择 active Seal pack；显式 OpenClaw 别名选择 OpenClaw source-reviewed pack。 Explicit Go Gopher aliases select the Go Gopher source-reviewed pack.
3. 提取核心主张、认知转折、工作流结构和可视化段落。
4. 先产出 shot list；每张图对应一个认知锚点。
5. 为每张图选择一种结构类型：Workflow、system local view、before/after、character state、concept metaphor、method layers、map route 或 comic panels。
6. 加载所选 IP 的标准包，组装提示词，并逐张生成图片。混合 IP 请求会创建独立 route groups 和独立输出目录，Xiaohei、Littlebox、Tom、Ferris、Seal、OpenClaw 和 Go Gopher 各自保留 route-local references。
7. 根据所选 IP 的 QA checklist 检查角色身份、构图、背景、标签和输出路径。Tom 保留 `gated-authorized` 和 `ian-xiaohei-illustrations/references/ips/tom/rights.md`；Ferris 保留 `source-reviewed`、source/trademark note 和 `ian-xiaohei-illustrations/references/ips/ferris/source.md`；Seal 保留 `active`、source-history authority、hoodie seal identity note、logo-free note 和 `ian-xiaohei-illustrations/references/ips/seal/source.md`；OpenClaw 保留 `source-reviewed`、source/license authority、uploaded-logo identity、public-sample gate 和 `ian-xiaohei-illustrations/references/ips/openclaw/source.md`。 Go Gopher keeps `source-reviewed`, source/license authority, root `gopher.png`, public-sample gate, and `references/ips/gopher/source.md` in the delivery notes.
8. 保存最终 PNG，并报告用途和路径。

---

## 目录结构

```text
.
├── README.md
├── README.es.md
├── README.pt.md
├── README.de.md
├── README.fr.md
├── README.zh.md
├── README.zh-Hant.md
├── README.ko.md
├── README.ja.md
├── README.ar.md
├── README.ru.md
├── README.uk.md
├── README.tr.md
├── LICENSE
├── NOTICE.md
├── examples/
│   ├── images/
│   │   ├── 01-two-breakpoints.png
│   │   ├── 02-sort-by-purpose.png
│   │   └── ...
│   └── prompts.md
└── ian-xiaohei-illustrations/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    ├── assets/
    │   └── examples/
    └── references/
        ├── routing.md
        ├── style-dna.md
        ├── xiaohei-ip.md
        ├── composition-patterns.md
        ├── prompt-template.md
        ├── qa-checklist.md
        └── ips/
            ├── xiaohei/
            │   ├── index.md
            │   ├── style-dna.md
            │   ├── xiaohei-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── littlebox/
            │   ├── index.md
            │   ├── style-dna.md
            │   ├── littlebox-ip.md
            │   ├── composition-patterns.md
            │   ├── language-and-labels.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── tom/
            │   ├── index.md
            │   ├── rights.md
            │   ├── style-dna.md
            │   ├── tom-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── ferris/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── ferris-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── seal/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── seal-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── openclaw/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── openclaw-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            └── gopher/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── gopher-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

Codex 安装目标是这个子目录：

```text
ian-xiaohei-illustrations/
```

根 README、LICENSE、NOTICE 和 examples 是 GitHub 分发文档。

---

## 维护者验证

```bash
node scripts/validate-skill-package.mjs
```

验证覆盖 skill 包结构、路线表、Xiaohei、Littlebox、Tom、Ferris、Seal、OpenClaw 和 Go Gopher 标准包、legacy Xiaohei 路径、公开文档链接、输出路径标记、NOTICE 署名、Tom `gated-authorized` 路线标记、Ferris `source-reviewed` 路线标记、Seal `active` 路线标记、OpenClaw `source-reviewed` 路线标记、source-history authority、source/license authority、uploaded-logo identity note、hoodie seal identity note、logo-free note、Phase 32 full validator restoration evidence 和 Phase 37 final release evidence。
Validation also covers Go Gopher canonical pack markers, Go Gopher `source-reviewed` route markers, source/license authority, root `gopher.png`, public sample gate, Phase 42 final release evidence, and Go Gopher validator checks.

当前维护者验证命令：

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

预发布检查见 [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)。

---

---

## 许可证

MIT License。见 [LICENSE](LICENSE)。
