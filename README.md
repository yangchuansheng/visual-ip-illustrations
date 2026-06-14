# Ian Xiaohei Illustrations

> 为中文文章生成可选视觉 IP 的正文配图：Xiaohei 是 implicit default，可显式选择 Littlebox；Tom 是显式 protected-character route，当前状态 `gated-authorized`；Ferris 是 explicit Rust-community mascot route，当前状态 `source-reviewed`；Sealos Seal 是 explicit Sealos brand mascot route，当前状态 `brand-owned`。
>
> 16:9 横版 | 多视觉 IP | 中文文章配图 | Codex Skill

---

## 这个仓库是什么

Ian Xiaohei Illustrations 是一个 Codex Skill，用来指导 AI Agent 为中文文章、帖子、博客、Notion 文档和方法论内容生成正文配图。

它先理解文章里的认知锚点，再把一个判断、流程、结构、状态或隐喻，变成一张有记忆点的 16:9 手绘解释图。

当前路线层级：

- **Xiaohei**：implicit default route。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：explicit active route。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。
- **Tom**：explicit protected-character route。用户写 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时使用 Tom 路由；当前 status 为 `gated-authorized`，rights boundary 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
- **Ferris**：Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- **Sealos Seal**：explicit Sealos brand mascot route。route id `sealos`，default=false，output suffix `sealos`，当前 status 为 `brand-owned`。route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/sealos/`，brand/canonical-image authority 是 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。

核心价值：用户可以选择视觉 IP，并得到角色、风格规则、提示词、QA、保存路径和归因都一致的文章配图资产。

---

## 适合谁用

- 写中文文章，需要正文配图和文章插图的人
- 做知识型内容、方法论内容、AI 工作流内容的人
- 想把抽象判断画成具体隐喻的人
- 用 Codex 做内容生产，希望稳定复用视觉语言的人

## 它会产出什么

- 一篇文章的 4-8 张 shot list
- 每张图的主题、核心意思、结构类型、角色动作和中文标注建议
- 最终 PNG 图片
- Xiaohei 输出到 workspace 的 `assets/<article-slug>-illustrations/`
- Littlebox 输出到 workspace 的 `assets/<article-slug>-littlebox/`
- Tom route 输出路径合同为 `assets/<article-slug>-tom/`
- Ferris route 输出路径合同为 `assets/<article-slug>-ferris/`
- Sealos Seal route 输出路径合同为 `assets/<article-slug>-sealos/`

文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-illustrations/`、`assets/&lt;article-slug&gt;-littlebox/`、`assets/&lt;article-slug&gt;-tom/`、`assets/&lt;article-slug&gt;-ferris/` 和 `assets/&lt;article-slug&gt;-sealos/`。

---

## 视觉 IP

### Xiaohei

Xiaohei 是默认路线：黑色实心、白点眼、细腿、空表情，在纯白背景里认真参与一个荒诞但成立的认知动作。它适合把文章里的判断、流程、断点、坑、承接路径和系统局部画成清爽的手绘解释图。

可用别名：`小黑`、`Xiaohei`、`Ian`、`ian-xiaohei`。

### Littlebox

Littlebox 是显式选择路线：封闭纸盒角色，粗黑 marker 线条，浅天蓝或浅薰衣草背景，琥珀胶带和少量珊瑚强调。它适合把同一个认知动作翻译成收集、封装、排序、交付、阻挡或修复。

可用别名：`小盒`、`Littlebox`、`纸盒`、`paper-box`、`carton`。

### Tom

Tom 是 explicit protected-character route，当前 route status 是 `gated-authorized`。用户通过 Tom aliases 显式选择 Tom 路由；该路线使用 route-local Tom references、`output_suffix: tom`、Tom QA/edit gates 和独立输出目录。Rights boundary 以 `ian-xiaohei-illustrations/references/ips/tom/rights.md` 为准。

可用别名：`Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫`。

输出路径合同：`assets/<article-slug>-tom/`。文档校验 token：`assets/&lt;article-slug&gt;-tom/`。输出后缀：`tom`。

Public rendered Tom samples 由 `RELEASE_CHECKLIST.md` 的 public-sample gate 和 Tom rights record 审核通过后进入公开样例目录。

### Ferris

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

可用别名：`Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹`。

Route-local reference directory：`ian-xiaohei-illustrations/references/ips/ferris/`。

Source/trademark authority：`ian-xiaohei-illustrations/references/ips/ferris/source.md`。

输出路径合同：`assets/<article-slug>-ferris/`。文档校验 token：`assets/&lt;article-slug&gt;-ferris/`。输出后缀：`ferris`。

规划字段：Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。

Public rendered Ferris samples 由 `RELEASE_CHECKLIST.md` 的 Rust trademark 和 endorsement-safe wording gate 审核通过后进入公开样例目录。

### Sealos Seal

Sealos Seal is an explicit Sealos brand mascot route with status `brand-owned`.

可用别名：`Sealos Seal`、`Sealos mascot`、`Sealos 吉祥物`、`Sealos 海豹`、`white Sealos seal`、`blue hoodie seal`。

Route id：`sealos`。Default：`false`。Output suffix：`sealos`。

Route-local reference directory：`ian-xiaohei-illustrations/references/ips/sealos/`。

Brand/canonical-image authority：`ian-xiaohei-illustrations/references/ips/sealos/source.md`。Route metadata：`ian-xiaohei-illustrations/references/routing.md`。

Brand context：reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes. Prior Sealos mascot exploration supplies supporting brand context; the uploaded mascot image is the v1.3 canonical mascot reference.

Brand/logo boundary：cap and chest marks must preserve the official uploaded Sealos logo shape through uploaded Sealos logo source image overlay. Sealos outputs use overlay-only logo finalization: blank cap and chest logo patches before overlay, then the uploaded logo file as the only logo pixels with uniform scale and placement only; no prompt-rendered logo accepted. Delivery records source asset path or attachment id. Public rendered Sealos samples require release review for uploaded-image identity, exact cap/hoodie/logo preservation, brand/logo wording, generic seal drift, abstract logo creature drift, generated logo approximation, redrawn logo, alternate wave mark, simplified logo mark, and prior-variant drift. Release review and brand/logo wording are governed by `RELEASE_CHECKLIST.md`。

输出路径合同：`assets/<article-slug>-sealos/`。文档校验 token：`assets/&lt;article-slug&gt;-sealos/`。输出后缀：`sealos`。

### 路由参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 查看路由元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context`、`status`。

Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`，核心入口 `index.md`，rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`，source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Sealos Seal: `ian-xiaohei-illustrations/references/ips/sealos/`，brand/canonical-image authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`

同时请求多个视觉 IP 时，交付口径按 IP 分组，每个 IP 形成独立 variant group，并写入各自输出目录。Xiaohei 是 implicit default route；Littlebox 是 explicit active route；Tom 是 explicit protected-character route，当前 status 为 `gated-authorized`；Ferris 是 explicit Rust-community mascot route，当前 status 为 `source-reviewed`；Sealos Seal 是 explicit Sealos brand mascot route，当前 status 为 `brand-owned`。

---

## 示例效果

以下图片是 Xiaohei 风格校准样例，用来观察线条密度、留白、颜色克制和角色参与方式。使用时从当前文章重新发明隐喻。

### 两个断点

![两个断点](examples/images/01-two-breakpoints.png)

### 按目的分拣

![按目的分拣](examples/images/02-sort-by-purpose.png)

### 一鱼多吃

![一鱼多吃](examples/images/03-one-fish-many-uses.png)

### 承接路径

![承接路径](examples/images/04-handoff-path.png)

### 信息井

![信息井](examples/images/05-information-well.png)

### 想法压机

![想法压机](examples/images/06-idea-press.png)

### 内容发酵

![内容发酵](examples/images/07-content-fermentation.png)

### 信任桥

![信任桥](examples/images/08-trust-bridge.png)

---

## 安装

```bash
git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git
cd ian-xiaohei-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

安装后在 Codex 里使用 `$ian-xiaohei-illustrations`。

---

## 快速示例

### Xiaohei 规划

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用默认视觉 IP 为下面这篇文章做 5 张 shot list。
每张图写清楚：放在哪段后、主题、核心意思、结构类型、Xiaohei 在图里做什么、建议中文标注词。

<粘贴文章>
```

### Xiaohei 生成

```text
Use $ian-xiaohei-illustrations 使用 Xiaohei 路由为下面这篇文章生成 4 张正文配图。
要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注。
保存路径使用 assets/<article-slug>-illustrations/。

<粘贴文章>
```

### Littlebox 规划

```text
Use $ian-xiaohei-illustrations 使用 Littlebox 路由为下面这篇文章做 4 张 shot list，先不要生图。
每张图写清楚：Placement、Core idea、Littlebox state: closed、visual metaphor、assigned background、suggested objects、short visible labels。

<粘贴文章>
```

### Littlebox 生成

```text
Use $ian-xiaohei-illustrations 使用 Littlebox 路由为下面这篇文章生成 3 张正文配图。
要求：closed paper-box character、rough black marker linework、pale sky-blue 或 pale lavender background、short Chinese visible labels。
保存路径使用 assets/<article-slug>-littlebox/。

<粘贴文章>
```

### 同一观点的 IP 对照

```text
Use $ian-xiaohei-illustrations 先不要生图。
请用同一个 core idea 分别输出 Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal 五个 separate variant group。
Xiaohei variant group 使用 assets/<article-slug>-illustrations/。
Littlebox variant group 使用 assets/<article-slug>-littlebox/，并写清楚 Littlebox state: closed、visual metaphor、assigned background、short visible labels。
Tom variant group 使用 assets/<article-slug>-tom/，并保留 route status `gated-authorized`、rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`、Tom action、supporting objects、visible labels。
Ferris variant group 使用 assets/<article-slug>-ferris/，并保留 route status `source-reviewed`、route-local reference directory `ian-xiaohei-illustrations/references/ips/ferris/`、source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`、Ferris action、Supporting objects、Visible labels、Source/trademark note。
Sealos Seal variant group 使用 assets/<article-slug>-sealos/，并保留 route status `brand-owned`、route-local reference directory `ian-xiaohei-illustrations/references/ips/sealos/`、brand/canonical-image authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`、Mascot state、Mascot action、Supporting objects、Visible labels、Brand/canonical-image note。

观点：信任是一块证据一块证据铺出来的路。
```

### Tom 路由审核提示

```text
Use $ian-xiaohei-illustrations 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，先不要生图。
请为下面这篇文章做 3 张 Tom route shot list。
每张图写清楚：Placement、Core idea、Structure type、Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note。
route status 必须保留 `gated-authorized`。
rights boundary 必须保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
公共 rendered Tom samples 以 RELEASE_CHECKLIST.md 的 public-sample gate 为准。

<粘贴文章>
```

### Ferris 路由规划

```text
Use $ian-xiaohei-illustrations 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，先不要生图。
请为下面这篇文章做 3 张 Ferris route shot list。
每张图写清楚：Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。
route status 必须保留 `source-reviewed`。
route-local reference directory 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/`。
source/trademark authority 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
输出路径使用 `assets/<article-slug>-ferris/`；文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
公共 rendered Ferris samples 以 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 为准。

<粘贴文章>
```

### Ferris 生成

```text
Use $ian-xiaohei-illustrations 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，为下面这篇文章生成 2 张正文配图。
要求：Ferris 执行核心认知动作，使用 Rust-themed low-tech article metaphors，例如 ownership tags、borrow ropes、lifetime clocks、compiler gates、type-check stamps、safety nets、trait stamps 或 review gates。
route status 必须保留 `source-reviewed`。
route-local reference directory 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/`。
source/trademark authority 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
保存路径使用 `assets/<article-slug>-ferris/`；文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
交付报告保留 Source/trademark note，并说明 public rendered Ferris samples 以 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 为准。

<粘贴文章>
```

### Sealos Seal 规划

```text
Use $ian-xiaohei-illustrations 使用 Sealos Seal / Sealos mascot / Sealos 吉祥物 / Sealos 海豹 / white Sealos seal / blue hoodie seal 路由，先不要生图。
请为下面这篇文章做 3 张 Sealos Seal route shot list。
每张图写清楚：Placement、Core idea、Structure type、Mascot state、Mascot action、Supporting objects、Visible labels、Output path、Brand/canonical-image note。
route status 必须保留 `brand-owned`。
route-local reference directory 必须保留 `ian-xiaohei-illustrations/references/ips/sealos/`。
brand/canonical-image authority 必须保留 `ian-xiaohei-illustrations/references/ips/sealos/source.md`。
输出路径使用 `assets/<article-slug>-sealos/`；文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`。
Brand/canonical-image note 写清楚：Sealos Seal is a `brand-owned` route; preserve the uploaded mascot image as the v1.3 canonical mascot reference with uploaded-image-canonical and uploaded-image-locked markers.
Public rendered Sealos samples require release review in `RELEASE_CHECKLIST.md`。

<粘贴文章>
```

### Sealos Seal 生成

```text
Use $ian-xiaohei-illustrations 使用 Sealos Seal 路由为下面这篇文章生成 2 张正文配图。
Sealos aliases 包括：Sealos Seal、Sealos mascot、Sealos 吉祥物、Sealos 海豹、white Sealos seal、blue hoodie seal。
每张图单独生成，使用 `ian-xiaohei-illustrations/references/ips/sealos/` route-local references。
Sealos Seal 必须承担 core idea 的 Mascot action，使用 cloud-developer article metaphors，例如 cloud OS tiles、deployment rails、DevBox workbenches、database cylinders、Kubernetes pods、app launch pads、traffic routes、incident cones、log slips、config keys、health checks、rollback handles、workflow gates 或 service bridges。
保留 route status `brand-owned` 和 brand/canonical-image authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`。
每张图都报告 Brand/canonical-image note，并保留 `uploaded-image-canonical` 和 `uploaded-image-locked`。
保存路径使用 `assets/<article-slug>-sealos/`；文档校验 token 是 `assets/&lt;article-slug&gt;-sealos/`。
交付报告说明 public rendered Sealos samples 以 `RELEASE_CHECKLIST.md` 的 uploaded-image identity、official uploaded logo shape 和 Sealos logo/brand wording gate 为准。

<粘贴文章>
```

更多可复制示例见 [examples/prompts.md](examples/prompts.md)。

---

## 工作流程

1. 读取文章、Markdown、Notion 内容、截图或用户给的主题
2. 选择视觉 IP：省略时走 Xiaohei，显式 Littlebox 时走 Littlebox，显式 Tom aliases 时走 Tom protected-character route，显式 Ferris aliases 时走 Ferris source-reviewed pack，显式 Sealos Seal aliases 时走 Sealos brand-owned pack
3. 提炼核心观点、认知转折、流程结构和适合视觉化的段落
4. 先输出 shot list：每张图只选一个认知锚点
5. 为每张图选择结构类型：Workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线或小漫画分镜
6. 按所选 IP 读取 canonical pack，组装提示词并单张生成；混合 IP 请求生成 separate route groups 和独立输出目录，Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal 各自保留 route-local references
7. 按所选 IP 的 QA checklist 检查角色身份、构图、背景、标注和输出路径；Tom 路由保留 `gated-authorized` 与 `ian-xiaohei-illustrations/references/ips/tom/rights.md`，Ferris 路由保留 `source-reviewed`、Source/trademark note 与 `ian-xiaohei-illustrations/references/ips/ferris/source.md`，Sealos Seal 路由保留 `brand-owned`、Brand/canonical-image note、`uploaded-image-canonical`、`uploaded-image-locked` 与 `ian-xiaohei-illustrations/references/ips/sealos/source.md`
8. 保存最终 PNG，并报告用途和路径

---

## 目录结构

```text
.
├── README.md
├── LICENSE
├── NOTICE.md
├── assets/
│   └── ian-wechat-qr.jpg
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
            └── sealos/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── sealos-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

真正需要安装到 Codex 的是子目录：

```text
ian-xiaohei-illustrations/
```

根目录的 README、LICENSE、NOTICE 和 examples 是 GitHub 分享文档。

---

## 维护者校验

```bash
node scripts/validate-skill-package.mjs
```

验证范围包括 skill 包形状、路由表、Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal canonical packs、legacy Xiaohei 路径、公开文档链接、输出路径标记、NOTICE 归因、Tom `gated-authorized` route markers、Ferris `source-reviewed` route markers、Sealos Seal `brand-owned` route markers、Brand/canonical-image note、`uploaded-image-canonical` 和 `uploaded-image-locked`。

当前维护者校验命令：

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

发布前检查见 [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)。

---

## 相关项目

- [Ian Handdrawn PPT](https://github.com/helloianneo/ian-handdrawn-ppt) — 中文手绘技术 PPT-style 页面图生成 Skill
- [Awesome Claude Code Skills](https://github.com/helloianneo/awesome-claude-code-skills) — Claude Code Skills / Agents / Plugins 精选合集
- [Obsidian + Claude AI Second Brain](https://github.com/helloianneo/obsidian-ai-second-brain) — Obsidian + Claude AI 个人知识库搭建指南

---

## 关于作者

**Ian (伊恩)** — 产品设计师 / 一人公司实践者 / AI Builder

用 AI 团队打造一人公司。

- GitHub: [helloianneo](https://github.com/helloianneo)
- X/Twitter: [@ianneo_ai](https://x.com/ianneo_ai)
- 网站: [www.ianneo.xyz](https://www.ianneo.xyz)
- 微信: `ianneoxyz`
- 邮箱: hello.neoc@gmail.com

<p>
  <img src="assets/ian-wechat-qr.jpg" alt="Ian 微信二维码" width="120">
</p>

---

## License

MIT License. See [LICENSE](LICENSE).
