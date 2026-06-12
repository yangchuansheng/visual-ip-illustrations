# Ian Xiaohei Illustrations

> 为中文文章生成可选视觉 IP 的正文配图：默认 Xiaohei，可显式选择 Littlebox。
>
> 16:9 横版 | 多视觉 IP | 中文文章配图 | Codex Skill

---

## 这个仓库是什么

Ian Xiaohei Illustrations 是一个 Codex Skill，用来指导 AI Agent 为中文文章、帖子、博客、Notion 文档和方法论内容生成正文配图。

它先理解文章里的认知锚点，再把一个判断、流程、结构、状态或隐喻，变成一张有记忆点的 16:9 手绘解释图。

当前支持两个视觉 IP：

- **Xiaohei**：默认视觉 IP。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：显式可选视觉 IP。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。

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

文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-illustrations/` 和 `assets/&lt;article-slug&gt;-littlebox/`。

---

## 视觉 IP

### Xiaohei

Xiaohei 是默认路线：黑色实心、白点眼、细腿、空表情，在纯白背景里认真参与一个荒诞但成立的认知动作。它适合把文章里的判断、流程、断点、坑、承接路径和系统局部画成清爽的手绘解释图。

可用别名：`小黑`、`Xiaohei`、`Ian`、`ian-xiaohei`。

### Littlebox

Littlebox 是显式选择路线：封闭纸盒角色，粗黑 marker 线条，浅天蓝或浅薰衣草背景，琥珀胶带和少量珊瑚强调。它适合把同一个认知动作翻译成收集、封装、排序、交付、阻挡或修复。

可用别名：`小盒`、`Littlebox`、`纸盒`、`paper-box`、`carton`。

### 路由参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 查看路由元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context`、`status`。

Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`

同时请求 Xiaohei 和 Littlebox 时，交付口径按 IP 分组，每个 IP 形成独立 variant group，并写入各自输出目录。

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
请用同一个 core idea 分别输出 Xiaohei 和 Littlebox 两个 variant group。
Xiaohei variant group 使用 assets/<article-slug>-illustrations/。
Littlebox variant group 使用 assets/<article-slug>-littlebox/，并写清楚 Littlebox state: closed、visual metaphor、assigned background、short visible labels。

观点：信任是一块证据一块证据铺出来的路。
```

更多可复制示例见 [examples/prompts.md](examples/prompts.md)。

---

## 工作流程

1. 读取文章、Markdown、Notion 内容、截图或用户给的主题
2. 选择视觉 IP：省略时走 Xiaohei，显式 Littlebox 时走 Littlebox
3. 提炼核心观点、认知转折、流程结构和适合视觉化的段落
4. 先输出 shot list：每张图只选一个认知锚点
5. 为每张图选择结构类型：Workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线或小漫画分镜
6. 按所选 IP 读取 canonical pack，组装提示词并单张生成
7. 按所选 IP 的 QA checklist 检查角色身份、构图、背景、标注和输出路径
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
            └── littlebox/
                ├── index.md
                ├── style-dna.md
                ├── littlebox-ip.md
                ├── composition-patterns.md
                ├── language-and-labels.md
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

验证范围包括 skill 包形状、路由表、Xiaohei 和 Littlebox canonical packs、legacy Xiaohei 路径、公开文档链接、输出路径标记、NOTICE 归因和 Phase 5 边界。

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
