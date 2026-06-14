---
name: visual-ip-illustrations
description: Visual IP Illustrations 为中文文章生成可选视觉 IP 正文配图。用于用户要求为中文文章、帖子、博客、Notion 文档、工作流文档、方法论、流程、结构、状态、隐喻或观点生成“怪诞”“小黑”“手绘”“正文配图”“文章插图”“配图建议”“shot list”“去标题/改图”等任务；默认使用小黑 IP，也可以显式选择 Littlebox、Tom、Ferris 或 Sealos Seal。
---

# Visual IP Illustrations

## 核心定位

Visual IP Illustrations 为中文文章设计和生成 16:9 横版正文配图。目标是把文章里的关键判断、流程、结构、状态或隐喻，变成一张清爽、怪诞、有创意、可读但不说明书的手绘解释图。

规范调用是 `$visual-ip-illustrations`。`$ian-xiaohei-illustrations` 是 v1.4 compatibility alias，用于现有提示和本地安装迁移期。

## 1.4 Runtime Identity and Local Migration

- Canonical runtime identity: Visual IP Illustrations.
- Canonical skill invocation: `$visual-ip-illustrations`.
- v1.4 compatibility alias: `$ian-xiaohei-illustrations`.
- Canonical package slug/path: `visual-ip-illustrations`.
- Legacy package slug/path: `ian-xiaohei-illustrations`.
- Local migration: install or copy the package as `visual-ip-illustrations` for canonical discovery while keeping `ian-xiaohei-illustrations` available for existing prompts during v1.4.

默认视觉 IP 是“小黑”：黑色实心、白点眼、细腿、空表情，认真做一件荒诞但成立的事。小黑必须参与画面的核心动作，不能只是站在旁边当装饰。

可选视觉 IP 包括 Littlebox：封闭纸盒角色，用粗黑 marker 线条、浅天蓝或浅薰衣草背景、琥珀胶带和少量珊瑚强调，把同一个认知动作翻译成封闭盒子的收集、封装、排序、交付、阻挡或修复。

可选视觉 IP 还包括 Tom：显式选择的 protected-character route，route id `tom`，display name `Tom`，default=false，output_suffix: tom，route status `gated-authorized`。Tom 的 rights authority 是 `references/ips/tom/rights.md`，所有 planning、generation、QA、edit 和 delivery 表面都保留 rights-status note。

可选视觉 IP 还包括 Ferris：显式选择的 Rust-community mascot route，route id `ferris`，display name `Ferris`，default=false，output_suffix: ferris，route status `source-reviewed`。Ferris 的 source/trademark authority 是 `references/ips/ferris/source.md`，所有 planning、generation、QA、edit 和 delivery 表面都保留 source/trademark note。

可选视觉 IP 还包括 Sealos Seal：显式选择的 brand-owned route，route id `sealos`，display name `Sealos Seal`，default=false，output_suffix: sealos，route status `brand-owned`。Sealos Seal 的 brand/canonical-image authority 是 `references/ips/sealos/source.md`，所有 planning、generation、QA、edit 和 delivery 表面都保留 brand/canonical-image note。

Sealos Seal imagery is logo-free: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

## 先读这些参考

先读取路由，再按所选视觉 IP 读取参考。按任务需要读取，不要一次塞满上下文：

- `references/routing.md`：视觉 IP 路由、别名、默认值、输出后缀、所需参考和归因上下文。
- `references/ips/xiaohei/index.md`：小黑 canonical pack 导航、文件职责和输出路径。
- `references/ips/xiaohei/style-dna.md`：小黑风格 DNA、颜色、文字、禁忌。
- `references/ips/xiaohei/xiaohei-ip.md`：小黑 IP 的形象、性格、动作库和禁忌。
- `references/ips/xiaohei/composition-patterns.md`：小黑结构类型、原创隐喻方法和反复刻规则。
- `references/ips/xiaohei/prompt-template.md`：小黑单张生图提示词模板。
- `references/ips/xiaohei/qa-checklist.md`：小黑生成后检查和迭代规则。
- `references/ips/littlebox/index.md`：Littlebox canonical pack 导航、文件职责、来源归因和输出路径。
- `references/ips/littlebox/style-dna.md`：Littlebox 视觉语言、背景池、粗 marker 线条、颜色、标注和禁忌。
- `references/ips/littlebox/littlebox-ip.md`：Littlebox 封闭纸盒身份、胶带、手臂、盒盖、动作和失败模式。
- `references/ips/littlebox/composition-patterns.md`：Littlebox 构图家族、物理隐喻、空间规则、流向规则和反复刻规则。
- `references/ips/littlebox/language-and-labels.md`：Littlebox English prompt、user's language 可见标注、规划说明和交付说明规则。
- `references/ips/littlebox/prompt-template.md`：Littlebox shot list 格式、单张 English prompt 模板和编辑提示。
- `references/ips/littlebox/qa-checklist.md`：Littlebox 生成后身份、线条、标注、背景、动作和交付检查。
- `references/ips/tom/index.md`：Tom canonical pack 导航、route status、rights authority、输出路径和引用清单。
- `references/ips/tom/rights.md`：Tom authorization scope、distribution boundary、public-sample policy、reviewer fields 和 route status authority。
- `references/ips/tom/style-dna.md`：Tom sparse article-illustration style、recognition cues、protected-route visual vetoes 和 route leakage signals。
- `references/ips/tom/tom-ip.md`：Tom identity、solo route boundary、cognitive-action responsibility、recognition gates 和 failure modes。
- `references/ips/tom/composition-patterns.md`：Tom composition families、supporting objects、original metaphor gates 和 protected-route gates。
- `references/ips/tom/prompt-template.md`：Tom planning fields、single-image prompt、edit gates、rights-status note 和 output reminder。
- `references/ips/tom/qa-checklist.md`：Tom protected-route QA、failure categories、repair moves 和 delivery judgment。
- `references/ips/ferris/index.md`：Ferris canonical pack 导航、route status、source/trademark authority、输出路径和引用清单。
- `references/ips/ferris/source.md`：Ferris source context、CC0/public-domain context、Rust trademark boundary、public-sample policy、reviewer fields 和 route status authority。
- `references/ips/ferris/style-dna.md`：Ferris sparse article-illustration style、recognition cues、source/trademark visual vetoes 和 route leakage signals。
- `references/ips/ferris/ferris-ip.md`：Ferris identity、route boundary、cognitive-action responsibility、recognition gates 和 failure modes。
- `references/ips/ferris/composition-patterns.md`：Ferris composition families、Rust-themed supporting objects、original metaphor gates 和 source/trademark gates。
- `references/ips/ferris/prompt-template.md`：Ferris planning fields、single-image prompt、edit gates、source/trademark note 和 output reminder。
- `references/ips/ferris/qa-checklist.md`：Ferris source-reviewed QA、failure categories、repair moves 和 delivery judgment。
- `references/ips/sealos/index.md`：Sealos Seal canonical pack 导航、route status、brand/canonical-image authority、输出路径和引用清单。
- `references/ips/sealos/source.md`：Sealos Seal brand context、uploaded-image authority、fixed visual markers、public-sample policy、reviewer fields 和 route status authority。
- `references/ips/sealos/style-dna.md`：Sealos Seal sparse article-illustration style、uploaded-image identity markers、visual vetoes 和 route gates。
- `references/ips/sealos/sealos-ip.md`：Sealos Seal mascot identity、reliable cloud developer companion role、cognitive-action responsibility、recognition gates 和 failure modes。
- `references/ips/sealos/composition-patterns.md`：Sealos Seal composition families、cloud-developer supporting objects、original metaphor gates 和 brand/canonical-image gates。
- `references/ips/sealos/prompt-template.md`：Sealos Seal planning fields、single-image prompt、edit gates、brand/canonical-image note 和 output reminder。
- `references/ips/sealos/qa-checklist.md`：Sealos Seal brand-owned QA、failure categories、repair moves 和 delivery judgment。
- `references/style-dna.md`、`references/xiaohei-ip.md`、`references/composition-patterns.md`、`references/prompt-template.md`、`references/qa-checklist.md`：旧根路径兼容入口，保留给现有提示和文档；当前小黑行为读取 `references/ips/xiaohei/` canonical 文件。
- `assets/examples/`：只作低频视觉校准，不进入默认生成路径。不要照抄这些案例的构图、物件或标注。

## 工作流

### 1. 选择视觉 IP 路由

先读取 `references/routing.md`，确定本次任务的视觉 IP。

- 用户省略视觉 IP 时，默认选择小黑路由；omitted visual IP selects only the Xiaohei route。
- 用户写 `小黑`、`Xiaohei`、`Ian` 或 `ian-xiaohei` 时，选择同一个小黑路由。
- 用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时，选择同一个 Littlebox 路由。
- 用户写 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时，选择同一个 Tom 路由：route id `tom`，display name `Tom`，default=false，output_suffix: tom，route status `gated-authorized`，rights pointer `references/ips/tom/rights.md`。
- 用户写 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物` 或 `Rust 螃蟹` 时，选择同一个 Ferris 路由：route id `ferris`，display name `Ferris`，default=false，output_suffix: ferris，route status `source-reviewed`，source/trademark pointer `references/ips/ferris/source.md`。
- 用户写 `Sealos Seal`、`Sealos mascot`、`Sealos 吉祥物`、`Sealos 海豹`、`white Sealos seal` 或 `blue hoodie seal` 时，选择同一个 Sealos Seal 路由：route id `sealos`，display name `Sealos Seal`，default=false，output_suffix: sealos，route status `brand-owned`，source pointer `references/ips/sealos/source.md`。
- 同时请求 Xiaohei、Littlebox、Tom、Ferris 和 Sealos Seal 中的多个 IP 时，先识别一个 shared core idea，再建立 separate route groups：每个 selected route group 使用自己的 route id、required_references、prompt template、composition rules、QA、edit repairs、output_suffix、route note 和输出目录。
- 小黑路由沿用现有 `$ian-xiaohei-illustrations` compatibility alias 行为和 `assets/<article-slug>-illustrations/` 输出路径；canonical invocation is `$visual-ip-illustrations`。
- Littlebox 路由使用 `assets/<article-slug>-littlebox/` 输出路径。
- Tom 路由使用 `assets/<article-slug>-tom/` 输出路径，并在 planning、generation、QA、edit 和 delivery 中保留 `gated-authorized` 与 `references/ips/tom/rights.md`。
- Ferris 路由使用 `assets/<article-slug>-ferris/` 输出路径，并在 planning、generation、QA、edit 和 delivery 中保留 `source-reviewed` 与 `references/ips/ferris/source.md`。
- Sealos Seal 路由使用 `assets/<article-slug>-sealos/` 输出路径，并在 planning、generation、QA、edit 和 delivery 中保留 `brand-owned` 与 `references/ips/sealos/source.md`。
- 小黑路由的 `required_references` 指向 `references/ips/xiaohei/` canonical pack；旧根路径保持兼容入口。
- Littlebox 路由的 `required_references` 指向 `references/ips/littlebox/` canonical pack：`style-dna.md`、`littlebox-ip.md`、`composition-patterns.md`、`language-and-labels.md`、`prompt-template.md` 和 `qa-checklist.md`。
- Tom 路由的 `required_references` 指向 `references/ips/tom/` canonical pack：`index.md`、`rights.md`、`style-dna.md`、`tom-ip.md`、`composition-patterns.md`、`prompt-template.md` 和 `qa-checklist.md`。
- Ferris 路由的 `required_references` 指向 `references/ips/ferris/` canonical pack：`index.md`、`source.md`、`style-dna.md`、`ferris-ip.md`、`composition-patterns.md`、`prompt-template.md` 和 `qa-checklist.md`。
- Sealos Seal 路由的 `required_references` 指向 `references/ips/sealos/` canonical pack：`index.md`、`source.md`、`style-dna.md`、`sealos-ip.md`、`composition-patterns.md`、`prompt-template.md` 和 `qa-checklist.md`。
- 每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
- 共享流程只负责理解正文、选择认知锚点、规划图组、单张生成、QA 交接、资产保留和交付报告。
- 风格、角色身份、提示词措辞和 QA 细节来自所选 IP 的参考文件。

### 2. 消化正文

先读用户给的正文、链接、Notion 页面、Markdown 文件或截图内容。提炼：

- 核心观点是什么
- 哪些段落承担认知转折
- 哪些内容适合用图解释
- 哪些地方只适合文字，不需要图

不要平均配图。优先选择“认知锚点”，例如：核心判断、两个断点、输入输出闭环、分流、前后对比、一鱼多吃、承接路径、常见坑、角色状态变化。

### 3. 先出配图策略

如果用户只是说“分析怎么配图 / 思考哪些地方需要配图”，先给 shot list。每张图写清楚：

- 放在哪个段落后
- 图的主题
- 核心意思
- 结构类型
- 所选视觉 IP 在图里承担的核心动作
- 建议元素
- 建议中文标注词

Littlebox shot list 额外写清楚：

- Placement
- Core idea
- `Littlebox state: closed`
- Visual metaphor
- Assigned background：`#E3F2FD` 或 `#E6E6FA`
- Suggested objects
- Short visible labels，使用用户语言

Littlebox 多图规划时先分配背景。偶数张让 `#E3F2FD` 和 `#E6E6FA` 数量相同；奇数张让两种背景数量最多相差一张，除非文章顺序需要更强节奏。Littlebox 的 planning notes、visible labels 和 delivery notes 使用 user's language；发送给图像模型的 generation prompt 保持 English prompt，并把可见标注按用户语言原文加引号。

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

Sealos Seal shot list 使用 `references/ips/sealos/prompt-template.md`，额外写清楚：

- Placement
- Core idea
- Structure type
- Mascot state
- Mascot action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-sealos/`
- Brand/canonical-image note: Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with plain navy cap with no logo, plain deep-blue hoodie chest with no logo, and fixed identity markers from source.md.
- No-logo note: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

Sealos planning prose 可以跟随用户语言；Sealos image-generation prompts stay English；visible labels are copied exactly in the user's language。Sealos Seal 必须执行中心认知动作，优先从 cloud-developer supporting objects 中选择 1-2 个物件，再让 Mascot action 承担 deploy、launch、connect、debug、route、lift、inspect、repair、shield、bridge、tune、roll back、stamp、sort、assemble 或 guide。

混合 IP shot list 先写 shared core idea，再按 selected route groups 拆成独立 variant group：

- Xiaohei variant group：小黑动作、白底手绘隐喻、建议标注、`references/ips/xiaohei/` QA、`assets/<article-slug>-illustrations/`
- Littlebox variant group：Littlebox 封闭状态、visual metaphor、assigned background、suggested objects、short visible labels、`references/ips/littlebox/` QA、`assets/<article-slug>-littlebox/`
- Tom variant group：Tom state、Tom action、supporting objects、visible labels、`references/ips/tom/` QA、`assets/<article-slug>-tom/`、rights-status note、`gated-authorized`、`references/ips/tom/rights.md`
- Ferris variant group：Ferris state、Ferris action、supporting objects、visible labels、`references/ips/ferris/` QA、`assets/<article-slug>-ferris/`、source/trademark note、`source-reviewed`、`references/ips/ferris/source.md`
- Sealos Seal variant group：Mascot state、Mascot action、supporting objects、visible labels、`references/ips/sealos/` QA、`assets/<article-slug>-sealos/`、brand/canonical-image note、`brand-owned`、`references/ips/sealos/source.md`

默认 4-8 张。文章很短时 1-3 张；长文也不要轻易超过 9 张。够用就好，避免把正文做成画册。

### 4. 单张生成

如果用户明确要求“生成 / 输出 / 做图 / 帮我生成”，不要停下来等确认；用内置 `image_gen` 每张单独生成。不要把多张图拼在一张里。

每张图只讲一个核心结构。先按所选路由读取 `required_references`，再用所选 IP 的模板、角色、构图和 QA 参考组装提示词。

小黑路由继续使用当前小黑 canonical 参考：`references/ips/xiaohei/style-dna.md`、`references/ips/xiaohei/xiaohei-ip.md`、`references/ips/xiaohei/composition-patterns.md`、`references/ips/xiaohei/prompt-template.md` 和 `references/ips/xiaohei/qa-checklist.md`。旧根路径 `references/style-dna.md`、`references/xiaohei-ip.md`、`references/composition-patterns.md`、`references/prompt-template.md` 和 `references/qa-checklist.md` 是 legacy compatibility entry points。小黑提示词继续包含：

- 16:9 横版中文正文配图
- 纯白背景
- 黑色手绘线稿
- 少量红色/橙色/蓝色中文手写批注
- 大量留白
- 小黑作为核心动作主体
- 禁止 PPT、商业插画、幼稚可爱、复杂架构、左上角类型标题

Littlebox 路由使用 `references/ips/littlebox/prompt-template.md` 组装每张图的 English prompt，并使用 `references/ips/littlebox/language-and-labels.md` 处理 user's language 标注。Littlebox prompt 必须保持：

- 16:9 horizontal article illustration
- flat `#E3F2FD` 或 `#E6E6FA` background
- thick rough black marker linework
- dry-brush texture
- near-white closed paper-box body
- `Littlebox state: closed`
- front-left three-quarter view
- dot eyes on front panel
- tiny legs
- at most two side-seam twig arms
- exactly one amber seam tape with jagged torn front tab
- sparse amber/coral accents
- short visible labels copied exactly in the user's language

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

Sealos Seal 路由只加载 Sealos `required_references`，使用 `references/ips/sealos/prompt-template.md` 和 `references/ips/sealos/composition-patterns.md` 组装每张图的 English prompt，再用 `references/ips/sealos/qa-checklist.md` 检查输出。Sealos generation context 始终保留 route status `brand-owned`、brand/canonical-image authority `references/ips/sealos/source.md`、canonical image status `uploaded-image-canonical`、drift boundary `uploaded-image-locked` 和 output path `assets/<article-slug>-sealos/`。Sealos prompt 必须保持：

- one standalone 16:9 horizontal article illustration
- original cloud-developer article metaphor
- sparse hand-drawn article style on clean white or near-white background
- loose black linework with generous whitespace
- restrained Sealos blue and deep-blue accents
- sparse visible labels copied exactly in the user's language
- Sealos Seal as the central cognitive action subject
- route status note: `brand-owned`
- brand/canonical-image authority: `references/ips/sealos/source.md`
- canonical image note: `uploaded-image-canonical` and `uploaded-image-locked`
- uploaded-image markers: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail
- no-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge
- save reminder: `assets/<article-slug>-sealos/`
- Sealos route block: generic seal drift, abstract logo creature drift, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, missing brand/canonical-image note, and missing output path all fail the route

Sealos repair behavior 使用 `references/ips/sealos/prompt-template.md` 的 edit prompts：Stronger Mascot Participation、Uploaded-Image Identity Repair、No-Logo Hoodie Cap Repair、Title Removal、Text Reduction 和 Preserve Unaffected Content；每次修复都保留 `brand-owned`、`references/ips/sealos/source.md`、`uploaded-image-canonical`、`uploaded-image-locked`、brand/canonical-image note、route-local QA context 和 `assets/<article-slug>-sealos/`。

混合 IP 生成时，从同一个 shared core idea 生成分离的 selected route groups。Xiaohei 组只加载 `references/ips/xiaohei/`，Littlebox 组只加载 `references/ips/littlebox/`，Tom 组只加载 `references/ips/tom/`，Ferris 组只加载 `references/ips/ferris/`，Sealos Seal 组只加载 `references/ips/sealos/`；每组各自调用自己的 prompt template、composition rules、language rules、qa-checklist、edit gates、output_suffix 和 route note。`assets/examples/` 案例只提供风格密度和角色参与方式，生成时从当前文章重新发明一个奇怪但成立的隐喻。

### 5. 检查与迭代

生成后检查所选 IP 的 QA 参考。小黑路由使用 `references/ips/xiaohei/qa-checklist.md`；Littlebox 路由使用 `references/ips/littlebox/qa-checklist.md`；Tom 路由使用 `references/ips/tom/qa-checklist.md`；Ferris 路由使用 `references/ips/ferris/qa-checklist.md`；`references/qa-checklist.md` 保持旧根路径兼容入口。

小黑高风险问题：

- 小黑只是装饰
- 画面太满
- 太像流程图/PPT
- 中文太多或错字严重
- 左上角出现“常见坑/流程图/系统架构图”等标题
- 画风太可爱、幼稚、死板
- 背景不是干净白底

Littlebox 高风险问题：

- passive placement，Littlebox 可被移除且概念仍成立
- open lid、half-open lid、raised flaps、cutaways 或 visible interiors
- extra arms、wrong arm origin、缺少 action scene 中的 side-seam twig arms
- missing jagged front tab、wrong tape placement 或 tape on wrong surface
- tan、beige、kraft brown 或 realistic cardboard body
- thin/vector linework、smooth geometry、clean digital labels
- label 过长、错译、过多或脱离 rough marker style
- over-dense diagrams、black-dominant arrows、formal process chart
- `#E3F2FD` 与 `#E6E6FA` background imbalance

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

Ferris 高风险问题：

- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage

Sealos Seal 高风险问题：

- generic seal drift
- abstract logo creature drift
- missing cap
- missing hoodie
- logo-bearing mascot variants
- cap logo
- chest logo
- mascot logo
- logo patch
- logo-like wave/cloud mark
- text badge
- generated logo approximation
- generated logo tracing
- redrawn logo
- alternate wave mark
- simplified logo mark
- changed body color
- passive mascot placement
- over-detailed 3D toy drift
- excessive text
- route leakage
- missing brand/canonical-image note
- missing output path

发现 QA 问题时，按所选 IP 的 qa-checklist 重生成或局部编辑。Littlebox 修复优先强化 closed lid、side-seam arms、single amber jagged seam tape、near-white body、rough linework、user's language labels、balanced background 和 active placement。Tom 修复使用 `references/ips/tom/prompt-template.md` 的 edit gates：Tom edit participation repair gate、Tom off-model identity repair gate、Tom title removal edit gate、Tom text reduction edit gate 和 Tom unaffected-content preservation gate；每次修复都保留 `gated-authorized`、`references/ips/tom/rights.md` 和 route-local QA context。Ferris 修复使用 `references/ips/ferris/prompt-template.md` 的 edit gates：participation、identity、trademark-boundary、title removal、text reduction 和 unaffected-content preservation；每次修复都保留 `source-reviewed`、`references/ips/ferris/source.md`、source/trademark note 和 route-local QA context。Sealos 修复使用 `references/ips/sealos/prompt-template.md` 的 edit prompts；每次修复都保留 `brand-owned`、`references/ips/sealos/source.md`、uploaded-image identity、brand/canonical-image note、plain cap and hoodie chest no-logo markers、route-local QA context 和 `assets/<article-slug>-sealos/`。

### 6. 保存交付

如果用户在 workspace 内工作，把最终图复制到所选路由的输出目录。目录规则来自 `references/routing.md` 的 `output_suffix` 和该路由的阶段交付规则。

小黑路由的当前活动路径保持为：

```text
assets/<article-slug>-illustrations/
```

Littlebox 路由的当前活动路径为：

```text
assets/<article-slug>-littlebox/
```

Tom 路由的当前活动路径为：

```text
assets/<article-slug>-tom/
```

Ferris 路由的当前活动路径为：

```text
assets/<article-slug>-ferris/
```

Sealos Seal 路由的当前活动路径为：

```text
assets/<article-slug>-sealos/
```

保存路径来自 `references/routing.md` 的 `output_suffix`：

- Xiaohei `output_suffix: illustrations` -> `assets/<article-slug>-illustrations/`
- Littlebox `output_suffix: littlebox` -> `assets/<article-slug>-littlebox/`
- Tom `output_suffix: tom` -> `assets/<article-slug>-tom/`
- Ferris `output_suffix: ferris` -> `assets/<article-slug>-ferris/`
- Sealos Seal `output_suffix: sealos` -> `assets/<article-slug>-sealos/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`; Tom `assets/&lt;article-slug&gt;-tom/`; Ferris `assets/&lt;article-slug&gt;-ferris/`; Sealos Seal `assets/&lt;article-slug&gt;-sealos/`

按顺序命名：

```text
01-topic-name.png
02-topic-name.png
```

文件名使用 ordered English slug。Sealos Seal accepted outputs use ordered English slug filenames such as `01-topic-name.png`。混合 IP 请求按 separate route groups 分别写入输出目录：Xiaohei 写入 `assets/<article-slug>-illustrations/`，Littlebox 写入 `assets/<article-slug>-littlebox/`，Tom 写入 `assets/<article-slug>-tom/`，Ferris 写入 `assets/<article-slug>-ferris/`，Sealos Seal 写入 `assets/<article-slug>-sealos/`；每个 variant group 保留自己的文件序号和用途说明。

保留原始生成文件，不要覆盖已有资产，除非用户明确要求替换。

## 输出口径

生成前的策略输出要短而准。生成后的交付要包含：

- 选中的视觉 IP / selected visual IP
- image count / 生成了几张
- purpose per image / 每张图的用途
- saved path / 保存路径
- stability notes / 哪些图最稳，哪些图是可选

混合 IP 交付时，按 IP 输出 one block per IP：

- Xiaohei block：shared core idea、图片用途、保存路径 `assets/<article-slug>-illustrations/`、稳定性备注
- Littlebox block：shared core idea、图片用途、保存路径 `assets/<article-slug>-littlebox/`、assigned background、稳定性备注
- Tom block：selected IP `Tom`、shared core idea、image purposes、save path `assets/<article-slug>-tom/`、route status `gated-authorized`、rights note `references/ips/tom/rights.md`、stability notes
- Ferris block：selected IP `Ferris`、shared core idea、image purposes、save path `assets/<article-slug>-ferris/`、route status `source-reviewed`、source/trademark note、source pointer `references/ips/ferris/source.md`、stability notes
- Sealos block：selected IP: Sealos Seal、shared core idea、image purposes、save path `assets/<article-slug>-sealos/`、route status `brand-owned`、brand/canonical-image note: Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with plain navy cap with no logo, plain deep-blue hoodie chest with no logo, and fixed identity markers from source.md.、source pointer `references/ips/sealos/source.md`、no-logo note: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge、stability notes

交付前做 route-leakage delivery guard：Tom block 保留 `gated-authorized` 和 `references/ips/tom/rights.md`；Ferris block 保留 `source-reviewed`、`references/ips/ferris/source.md`、source/trademark note、route-local QA 和 `assets/<article-slug>-ferris/`；Sealos block 保留 `brand-owned`、`references/ips/sealos/source.md`、brand/canonical-image note、route-local QA、uploaded-image-canonical、uploaded-image-locked、plain navy cap with no logo、plain deep-blue hoodie chest with no logo、no-logo delivery note 和 `assets/<article-slug>-sealos/`；Xiaohei 和 Littlebox blocks 保留各自 route-local wording、QA 和输出目录。

不要长篇解释风格理论；让图自己说话。
