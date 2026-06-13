# Prompt Examples

下面这些 prompt 可以直接复制到 Codex 里使用。它们同时作为路由烟测夹具，保留路径、别名、字段名和 canonical reference markers。

## 路由烟测：省略视觉 IP

省略视觉 IP 时走默认视觉 IP：Xiaohei。适合旧提示、快速规划和小黑正文配图。

### 默认 Xiaohei：只做规划

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用默认视觉 IP 为下面这篇文章做 4 张 shot list。
每张图写清楚：放在哪段后、主题、核心意思、结构类型、所选视觉 IP 在图里做什么、建议中文标注词。
默认视觉 IP 应选择 Xiaohei / 小黑，并使用 `assets/<article-slug>-illustrations/`。
文档校验 token：`assets/&lt;article-slug&gt;-illustrations/`。

<粘贴文章>
```

### 默认 Xiaohei：直接生成

```text
Use $ian-xiaohei-illustrations 为下面这篇文章生成 4 张正文配图。
使用默认视觉 IP Xiaohei。每张图单独生成，16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写标注。
小黑必须承担核心动作，每张图只表达一个 core idea。
保存路径使用 `assets/<article-slug>-illustrations/`；文档校验 token 是 `assets/&lt;article-slug&gt;-illustrations/`。

<粘贴文章>
```

## 路由烟测：显式选择 Xiaohei

显式选择 Xiaohei 时，可用别名包括：小黑、Xiaohei、Ian、ian-xiaohei。

### 显式 Xiaohei：只做规划

```text
Use $ian-xiaohei-illustrations 使用小黑路由，先不要生图。
请为下面这篇文章做 5 张 shot list。
Xiaohei 的可用别名包括：小黑、Xiaohei、Ian、ian-xiaohei。
每张图写清楚：Placement、主题、core idea、结构类型、小黑承担的核心动作、建议元素、短中文 labels。
保存路径使用 `assets/<article-slug>-illustrations/`；文档校验 token 是 `assets/&lt;article-slug&gt;-illustrations/`。

<粘贴文章>
```

### 显式 Xiaohei：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Xiaohei 路由为下面这篇文章生成 3 张正文配图。
Xiaohei 的可用别名包括：小黑、Xiaohei、Ian、ian-xiaohei。
要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注、大量留白。
小黑要推动、搬运、连接、切开、筛选或修复画面里的核心结构。
保存路径使用 `assets/<article-slug>-illustrations/`；文档校验 token 是 `assets/&lt;article-slug&gt;-illustrations/`。

<粘贴文章>
```

## 路由烟测：显式选择 Littlebox

显式选择 Littlebox 时，可用别名包括：小盒、Littlebox、纸盒、paper-box、carton。

### 显式 Littlebox：只做规划

```text
Use $ian-xiaohei-illustrations 使用 Littlebox 路由为下面这篇文章做 3 张 shot list，先不要生图。
Littlebox 的可用别名包括：小盒、Littlebox、纸盒、paper-box、carton。
每张图写清楚：放在哪段后、core idea、Littlebox state: closed、visual metaphor、assigned background、suggested objects、short visible labels。
保存路径使用 `assets/<article-slug>-littlebox/`；文档校验 token 是 `assets/&lt;article-slug&gt;-littlebox/`。

<粘贴文章>
```

### 显式 Littlebox：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Littlebox / 小盒 / 纸盒 / paper-box / carton 路由为下面这篇文章生成 3 张正文配图。
每张图必须是 16:9 horizontal article illustration。
Littlebox state: closed；closed paper-box character；front-left three-quarter view；dot eyes on front panel；tiny legs；at most two side-seam twig arms；exactly one amber seam tape with jagged torn front tab。
使用 visual metaphor 表达一个 core idea，assigned background 从 pale sky-blue #E3F2FD 或 pale lavender #E6E6FA 中分配，visible text 使用 short visible labels。
保存路径使用 `assets/<article-slug>-littlebox/`；文档校验 token 是 `assets/&lt;article-slug&gt;-littlebox/`。

<粘贴文章>
```

## 路由烟测：显式选择 Tom

显式选择 Tom 时，可用别名包括：Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫。Tom 是 explicit protected-character route，当前 route status 是 `gated-authorized`，rights record 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。

### 显式 Tom：只做规划

```text
Use $ian-xiaohei-illustrations 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，先不要生图。
请为下面这篇文章做 3 张 Tom route shot list。
每张图写清楚：
- Placement
- Core idea
- Structure type
- Tom state
- Tom action
- Supporting objects
- Visible labels
- Output path
- Rights-status note
使用 route-local reference directory：`ian-xiaohei-illustrations/references/ips/tom/`。
route status 必须保留 `gated-authorized`。
rights record 必须保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
Rights-status note 写清楚：Tom is a `gated-authorized` protected-character route; check `ian-xiaohei-illustrations/references/ips/tom/rights.md` for authorization scope and distribution boundary.

<粘贴文章>
```

### 显式 Tom：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Tom 路由为下面这篇文章生成 2 张正文配图。
Tom aliases 包括：Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫。
每张图单独生成，使用 `ian-xiaohei-illustrations/references/ips/tom/` route-local references。
Tom 必须承担 core idea 的 cognitive action，使用原创新的 article metaphor。
保留 route status `gated-authorized` 和 rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
公共 rendered Tom samples 发布状态以 RELEASE_CHECKLIST.md 的 public-sample gate 为准。

<粘贴文章>
```

### 显式 Tom：route smoke check

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，为这个观点输出 1 张 route-status smoke shot list：
观点：把追赶中的判断拆成可执行下一步。
预期：selected IP 是 Tom。
预期：route status 是 `gated-authorized`。
预期：rights record 是 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/tom/`。
预期：输出路径是 `assets/<article-slug>-tom/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
预期：planning fields 包含 Placement、Core idea、Structure type、Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note。
预期：Public rendered Tom samples 由 RELEASE_CHECKLIST.md 的 public-sample gate 控制。
```

## 路由烟测：显式选择 Ferris

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

显式选择 Ferris 时，可用别名包括：Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹。Ferris route status 是 `source-reviewed`，source record 位于 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。

### 显式 Ferris：只做规划

```text
Use $ian-xiaohei-illustrations 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，先不要生图。
请为下面这篇文章做 3 张 Ferris route shot list。
每张图写清楚：
- Placement
- Core idea
- Structure type
- Ferris state
- Ferris action
- Supporting objects
- Visible labels
- Output path
- Source/trademark note
使用 route-local reference directory：`ian-xiaohei-illustrations/references/ips/ferris/`。
route status 必须保留 `source-reviewed`。
source/trademark authority 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
输出路径使用 `assets/<article-slug>-ferris/`；文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
Source/trademark note 写清楚：Ferris is a `source-reviewed` Rust-community mascot route; check `source.md` for source context and trademark boundary.
generated public Ferris samples require release review for Rust trademark and endorsement-safe wording。

<粘贴文章>
```

### 显式 Ferris：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Ferris 路由为下面这篇文章生成 2 张正文配图。
Ferris aliases 包括：Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹。
每张图单独生成，使用 `ian-xiaohei-illustrations/references/ips/ferris/` route-local references。
Ferris 必须承担 core idea 的 cognitive action，使用 Rust-themed low-tech article metaphors，例如 ownership tags、borrow ropes、lifetime clocks、compiler gates、type-check stamps、safety nets、unsafe warning flags、trait stamps、dependency knots、crate stacks、release locks 或 review gates。
保留 route status `source-reviewed` 和 source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
每张图都报告 Source/trademark note，并输出到 `assets/<article-slug>-ferris/`；文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
generated public Ferris samples require release review for Rust trademark and endorsement-safe wording。

<粘贴文章>
```

### 显式 Ferris：route smoke check

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，为这个观点输出 1 张 route-status smoke shot list：
观点：把 Rust 社区语境里的抽象约束变成可检查步骤。
预期：selected IP 是 Ferris。
预期：aliases 包含 Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹。
预期：route status 是 `source-reviewed`。
预期：source record 是 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
预期：route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/ferris/`。
预期：required references 包含 `index.md`、`source.md`、`style-dna.md`、`ferris-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`。
预期：输出路径是 `assets/<article-slug>-ferris/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
预期：planning fields 包含 Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。
预期：generated public Ferris samples require release review for Rust trademark and endorsement-safe wording。
```

## 路由烟测：显式选择 Sealos Seal

Sealos Seal is an explicit `brand-owned` Sealos brand mascot route based on the uploaded mascot image. The route-local pack and SKILL.md controller integration are complete; public rendered Sealos samples remain release-gated.

显式选择 Sealos Seal 时，可用别名包括：Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal。Brand/canonical-image authority 位于 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。

### 显式 Sealos Seal：只做规划

```text
Use $ian-xiaohei-illustrations 使用 Sealos Seal / Sealos mascot / Sealos 吉祥物 / Sealos 海豹 / white Sealos seal / blue hoodie seal 路由，先不要生图。
请为下面这篇文章做 3 张 Sealos Seal route shot list。
每张图写清楚：
- Placement
- Core idea
- Structure type
- Mascot state
- Mascot action
- Supporting objects
- Visible labels
- Output path
- Brand/canonical-image note
route status 必须保留 `brand-owned`。
route-local reference directory 必须保留 `ian-xiaohei-illustrations/references/ips/sealos/`。
brand/canonical-image authority 必须保留 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。
输出路径使用 `assets/<article-slug>-sealos/`；文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`。
Brand/canonical-image note 写清楚：Sealos Seal is a `brand-owned` route; preserve the uploaded mascot image as the v1.3 canonical mascot reference with `uploaded-image-canonical` and `uploaded-image-locked`.

<粘贴文章>
```

### 显式 Sealos Seal：直接生成

```text
Use $ian-xiaohei-illustrations 使用 Sealos Seal 路由为下面这篇文章生成 2 张正文配图。
Sealos aliases 包括：Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal。
每张图单独生成，使用 `ian-xiaohei-illustrations/references/ips/sealos/` route-local references。
Sealos Seal 必须承担 core idea 的 Mascot action。
使用 cloud-developer article metaphors，例如 cloud OS tiles、deployment rails、DevBox workbenches、database cylinders、Kubernetes pods、app launch pads、traffic routes、incident cones、log slips、config keys、health checks、rollback handles、workflow gates 或 service bridges。
保留 route status `brand-owned`。
brand/canonical-image authority 必须保留 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。
每张图都保留 `uploaded-image-canonical` 和 `uploaded-image-locked`。
保存路径使用 `assets/<article-slug>-sealos/`；文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`。
交付报告保留 Brand/canonical-image note，并说明 public rendered Sealos samples 以 RELEASE_CHECKLIST.md 的 uploaded-image identity 和 Sealos logo/brand wording gate 为准。

<粘贴文章>
```

### 显式 Sealos Seal：route smoke check

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Sealos Seal / Sealos mascot / Sealos 吉祥物 / Sealos 海豹 / white Sealos seal / blue hoodie seal 路由，为这个观点输出 1 张 route smoke shot list：
观点：把云端开发环境从混乱入口整理成一条可执行发布路径。
预期：selected IP 是 Sealos Seal。
预期：aliases 包含 Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal。
预期：route status 是 `brand-owned`。
预期：source authority 是 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。
预期：route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/sealos/`。
预期：required references 包含 `index.md`、`source.md`、`style-dna.md`、`sealos-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`。
预期：planning fields 包含 Placement、Core idea、Structure type、Mascot state、Mascot action、Supporting objects、Visible labels、Output path、Brand/canonical-image note。
预期：输出路径是 `assets/<article-slug>-sealos/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`。
预期：Brand/canonical-image note 保留 uploaded-image-canonical、uploaded-image-locked 和 uploaded-image identity markers。
预期：uploaded-image identity markers 包含 white rounded seal body、navy cap、deep-blue hoodie、Sealos logo marks on cap and chest、glossy dark eyes、black nose、whisker dots、small smile、short rounded flippers、compact legs、side-rear white tail。
预期：public sample review blocks generic seal, abstract logo creature, missing cap, missing hoodie, missing Sealos marks, missing side-rear tail, plain bald-head, prior exploration variant, and different selected mascot drift。
预期：public sample gate 由 RELEASE_CHECKLIST.md 控制，public rendered Sealos samples require release review。
```

## 路由说明：多 IP 请求

同一个观点可以按 IP 分组形成 variant group。Xiaohei 组使用 `assets/<article-slug>-illustrations/`，Littlebox 组使用 `assets/<article-slug>-littlebox/`，Tom 组使用 `assets/<article-slug>-tom/`，Ferris 组使用 `assets/<article-slug>-ferris/`，Sealos Seal 组使用 `assets/<article-slug>-sealos/`，五组分别加载自己的参考、提示词、QA 和输出路径。

维护者参考：Xiaohei canonical pack 位于 `ian-xiaohei-illustrations/references/ips/xiaohei/`，Littlebox canonical pack 位于 `ian-xiaohei-illustrations/references/ips/littlebox/`，Tom canonical pack 位于 `ian-xiaohei-illustrations/references/ips/tom/`，Tom rights record 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`，Ferris canonical pack 位于 `ian-xiaohei-illustrations/references/ips/ferris/`，Ferris source/trademark authority 位于 `ian-xiaohei-illustrations/references/ips/ferris/source.md`，Sealos Seal canonical pack 位于 `ian-xiaohei-illustrations/references/ips/sealos/`，Sealos brand/canonical-image authority 位于 `ian-xiaohei-illustrations/references/ips/sealos/source.md`，路由元数据位于 `ian-xiaohei-illustrations/references/routing.md`。

### 混合 IP：只做 variant planning

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用同一个 core idea 分别输出 Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal 五个 separate variant group。
每个 group 使用自己的 route-local references、planning fields、QA gates、route-specific status、source/rights/brand note 和输出目录。

Xiaohei variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/xiaohei/`
- 写清楚 Xiaohei action、建议元素、短中文 labels
- 输出到 `assets/<article-slug>-illustrations/`

Littlebox variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/littlebox/`
- 写清楚 Littlebox state: closed、visual metaphor、assigned background、short visible labels
- 输出到 `assets/<article-slug>-littlebox/`

Tom variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/tom/`
- route status 保留 `gated-authorized`
- rights record 保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- 写清楚 Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note
- 输出到 `assets/<article-slug>-tom/`
- Public rendered Tom samples 由 RELEASE_CHECKLIST.md 的 public-sample gate 控制

Ferris variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/ferris/`
- source/trademark authority 保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- route status 保留 `source-reviewed`
- aliases 包括 Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹
- 写清楚 Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note
- 输出到 `assets/<article-slug>-ferris/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`
- Public rendered Ferris samples 由 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 控制
- generated public Ferris samples require release review for Rust trademark and endorsement-safe wording

Sealos Seal variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/sealos/`
- brand/canonical-image authority 保留 `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- route status 保留 `brand-owned`
- aliases 包括 Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal
- 写清楚 Mascot state、Mascot action、Supporting objects、Visible labels、Output path、Brand/canonical-image note
- 输出到 `assets/<article-slug>-sealos/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`
- Brand/canonical-image note 保留 uploaded-image-canonical、uploaded-image-locked 和 uploaded mascot image authority
- Public rendered Sealos samples 由 RELEASE_CHECKLIST.md 的 uploaded-image identity 和 Sealos logo/brand wording gate 控制

<粘贴文章或单个观点>
```

### 混合 IP：同一观点生成五组

```text
Use $ian-xiaohei-illustrations 为下面这个 core idea 同时生成 Xiaohei variant group、Littlebox variant group、Tom variant group、Ferris variant group 和 Sealos Seal variant group。

core idea：信任是一块证据一块证据铺出来的路。

Xiaohei variant group：
- 生成 2 张
- 使用 `ian-xiaohei-illustrations/references/ips/xiaohei/`
- 白底手绘、小黑承担铺路和测试承重的核心动作
- 输出到 `assets/<article-slug>-illustrations/`

Littlebox variant group：
- 生成 2 张
- 使用 `ian-xiaohei-illustrations/references/ips/littlebox/`
- Littlebox state: closed
- 使用 visual metaphor 表达封装证据、递交证据或阻挡空话
- assigned background 在 #E3F2FD 和 #E6E6FA 之间分配
- 使用 short visible labels
- 输出到 `assets/<article-slug>-littlebox/`

Tom variant group：
- 生成 2 张
- 使用 `ian-xiaohei-illustrations/references/ips/tom/`
- Tom aliases 包括：Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫
- route status 保留 `gated-authorized`
- rights record 保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Tom 必须承担同一个 core idea 的 cognitive action
- 使用 Supporting objects 表达证据、路、桥、印章或 warning marks
- Visible labels 保持短、少、使用用户语言
- 输出到 `assets/<article-slug>-tom/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`
- Public rendered Tom samples 由 RELEASE_CHECKLIST.md 的 public-sample gate 控制

Ferris variant group：
- 生成 2 张
- 使用 `ian-xiaohei-illustrations/references/ips/ferris/`
- source/trademark authority 保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Ferris aliases 包括：Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹
- route status 保留 `source-reviewed`
- Ferris 必须承担同一个 core idea 的 cognitive action
- 使用 Rust-themed low-tech article metaphors 表达证据、约束、审核、路径或安全边界
- 写清楚 Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note
- 输出到 `assets/<article-slug>-ferris/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`
- Public rendered Ferris samples 由 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 控制
- generated public Ferris samples require release review for Rust trademark and endorsement-safe wording

Sealos Seal variant group：
- 生成 2 张
- 使用 `ian-xiaohei-illustrations/references/ips/sealos/`
- brand/canonical-image authority 保留 `ian-xiaohei-illustrations/references/ips/sealos/source.md`
- Sealos aliases 包括：Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal
- route status 保留 `brand-owned`
- Sealos Seal 必须承担同一个 core idea 的 Mascot action
- 使用 cloud-developer article metaphors 表达证据、路径、发布、回滚、诊断或稳定交付
- 写清楚 Mascot state、Mascot action、Supporting objects、Visible labels、Output path、Brand/canonical-image note
- 输出到 `assets/<article-slug>-sealos/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`
- Public rendered Sealos samples 由 RELEASE_CHECKLIST.md 的 uploaded-image identity 和 Sealos logo/brand wording gate 控制
```

## 维护者验证烟测

这些 prompt 用来人工检查路由行为；完整包校验使用 `node scripts/validate-skill-package.mjs`。路由源文件是 `ian-xiaohei-illustrations/references/routing.md`。
Phase 20 owns Sealos validator/test expectation updates and green Node evidence for public docs, examples, metadata, NOTICE, release checklist, and route leakage checks.

### 烟测：默认 Xiaohei 路由

```text
Use $ian-xiaohei-illustrations 先不要生图。
省略视觉 IP。请说明 selected IP，并为这个观点输出 1 张 shot list：
观点：把模糊输入压成可执行动作。
预期：selected IP 是 Xiaohei，输出路径是 `assets/<article-slug>-illustrations/`。
```

### 烟测：显式 Xiaohei 路由

```text
Use $ian-xiaohei-illustrations 先不要生图。
使用 Ian / ian-xiaohei / Xiaohei / 小黑 路由，为这个观点输出 1 张 shot list：
观点：把分散线索接成一条可交付路径。
预期：加载 `ian-xiaohei-illustrations/references/ips/xiaohei/`，输出路径是 `assets/<article-slug>-illustrations/`。
```

### 烟测：显式 Littlebox 路由

```text
Use $ian-xiaohei-illustrations 先不要生图。
使用 Littlebox / 小盒 / 纸盒 / paper-box / carton 路由，为这个观点输出 1 张 shot list：
观点：把松散想法封装成可递交版本。
预期：加载 `ian-xiaohei-illustrations/references/ips/littlebox/`，包含 Littlebox state: closed、visual metaphor、assigned background、short visible labels，输出路径是 `assets/<article-slug>-littlebox/`。
```

### 烟测：Tom protected-character route status

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，为这个观点输出 1 张 route-status shot list：
观点：把追赶中的判断拆成可执行下一步。
预期：selected IP 是 Tom，route status 是 `gated-authorized`，rights record 是 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：加载 `ian-xiaohei-illustrations/references/ips/tom/` route-local references。
预期：输出路径合同是 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
用途：text-only route audit；Phase 8 runtime selection behavior 已验证，Phase 9 examples 保留 public-sample gate。
```

### 烟测：混合 IP variant groups

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用一个 core idea 同时输出 Xiaohei variant group、Littlebox variant group、Tom variant group、Ferris variant group 和 Sealos Seal variant group：
观点：好流程会把下一步动作直接递到人手里。
预期：Xiaohei variant group 使用 `ian-xiaohei-illustrations/references/ips/xiaohei/`，输出到 `assets/<article-slug>-illustrations/`。
预期：Littlebox variant group 使用 `ian-xiaohei-illustrations/references/ips/littlebox/`，输出到 `assets/<article-slug>-littlebox/`。
预期：Tom variant group 使用 `ian-xiaohei-illustrations/references/ips/tom/`，输出到 `assets/<article-slug>-tom/`，保留 route status `gated-authorized` 和 rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：Ferris variant group 使用 `ian-xiaohei-illustrations/references/ips/ferris/`，输出到 `assets/<article-slug>-ferris/`，保留 route status `source-reviewed` 和 source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
预期：Sealos Seal variant group 使用 `ian-xiaohei-illustrations/references/ips/sealos/`，输出到 `assets/<article-slug>-sealos/`，保留 route status `brand-owned`、brand/canonical-image authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`、Brand/canonical-image note、uploaded-image-canonical 和 uploaded-image-locked。
预期：Xiaohei variant group、Littlebox variant group、Tom variant group、Ferris variant group 和 Sealos Seal variant group 分别使用自己的 route-local references、planning fields、QA gates、route-specific status、source/rights/brand note 和输出目录。
```

## 只做配图规划

```text
Use $ian-xiaohei-illustrations 先不要生图。
请分析下面这篇文章哪里值得配图，输出 5 张左右的 shot list。
每张图写清楚：
- 放在哪个段落后
- 图的主题
- 核心意思
- 结构类型
- 小黑在图里做什么
- 建议元素
- 建议中文标注词

<粘贴文章>
```

## 文章正文配图

```text
Use $ian-xiaohei-illustrations 把下面这篇文章生成 4 张小黑怪诞正文配图。
要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注。
每张图只讲一个核心结构，不要做 PPT 信息图，不要可爱卡通。

<粘贴文章>
```

## 长文配图策略

```text
Use $ian-xiaohei-illustrations 给这篇长文做配图策略。
不要平均配图，只挑认知锚点：核心判断、输入输出闭环、前后对比、常见坑、承接路径。
默认 6-8 张，先输出 shot list，不要生成图片。

<粘贴文章>
```

## 单个观点生成一张图

```text
Use $ian-xiaohei-illustrations 为这个观点生成一张 16:9 正文配图：

信任不是喊出来的，而是一块证据一块证据铺过去。

画面要怪诞但清爽，小黑必须承担核心动作。
中文标注最多 5 个，短一点。
```

## 工作流主题

```text
Use $ian-xiaohei-illustrations 为“把一条原始素材加工成流量、信任、转化三种内容”生成一张图。
不要画正式流程图，不要复刻一鱼多吃旧案例。
请重新发明一个新的低科技隐喻，让小黑参与核心动作。
```

## 改图：去掉标题

```text
Use $ian-xiaohei-illustrations 帮我编辑这张图。
去掉左上角的“Workflow / 流程图”标题和下划线，其他内容保持不变。
不要新增任何文字或物件。
preserve characters, labels, paths, line style, composition, aspect ratio, and image quality。
```

## 改图：增强小黑参与感

```text
Use $ian-xiaohei-illustrations 这张图方向对，但小黑有点像装饰。
请保持核心意思不变，重生成一版：让小黑成为真正推动结构运转的人。
画面更怪一点，但仍然纯白、清爽、少字。
preserve the selected Xiaohei route, unaffected labels, output path, and article meaning。
```

## 改图：Littlebox closed state 修复

```text
Use $ian-xiaohei-illustrations 帮我编辑这张 Littlebox 图。
保持 Littlebox 路由和原始 core idea。
把盒盖修成 closed state：Littlebox state: closed，front-left three-quarter view，front panel dot eyes，exactly one amber seam tape with jagged torn front tab。
保持 assigned background、rough black marker linework、现有构图和未受影响物件。
preserve unaffected content；只修 closed state、tape placement 和 active placement。
```

## 改图：Littlebox labels 修复

```text
Use $ian-xiaohei-illustrations 帮我编辑这张 Littlebox 图。
保持 Littlebox state: closed、assigned background、visual metaphor、构图、角色动作和输出路径。
把可见文字替换为这些 short visible labels：["输入", "筛选", "交付"]。
labels 使用用户语言，短、少、像手写 marker。preserve unaffected image content。
```

## 改图：按路由保持未受影响内容

```text
Use $ian-xiaohei-illustrations 编辑这张图。
先根据画面和我的说明识别 route：Xiaohei 或 Littlebox。
只修改我指出的问题，preserve 未受影响的角色身份、背景、labels、paths、composition、line style、aspect ratio 和核心意思。
问题：<写清楚要去掉、替换或修复的内容>
```

## 生成一组风格样片

```text
Use $ian-xiaohei-illustrations 输出 5 个不同主题的小黑正文配图效果。
主题分别覆盖：信息过载、产品验证、内容复利、一人公司、信任建立。
每张单独生成，不要拼成一张。
```
