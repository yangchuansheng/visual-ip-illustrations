---
name: ian-xiaohei-illustrations
description: 生成 Ian 风格的中文正文配图。用于用户要求为中文文章、帖子、博客、Notion 文档、工作流文档、方法论、流程、结构、状态、隐喻或观点生成“怪诞”“小黑”“手绘”“正文配图”“文章插图”“配图建议”“shot list”“去标题/改图”等任务；默认使用小黑 IP、纯白手绘、少量红橙蓝批注、简洁清爽但天马行空的视觉风格。
---

# Ian 小黑怪诞正文配图

## 核心定位

为中文文章设计和生成 16:9 横版正文配图。目标不是做商业插画、PPT 信息图或可爱卡通，而是把文章里的关键判断、流程、结构、状态或隐喻，变成一张清爽、怪诞、有创意、可读但不说明书的手绘解释图。

默认视觉 IP 是“小黑”：黑色实心、白点眼、细腿、空表情，认真做一件荒诞但成立的事。小黑必须参与画面的核心动作，不能只是站在旁边当装饰。

## 先读这些参考

先读取路由，再按所选视觉 IP 读取参考。按任务需要读取，不要一次塞满上下文：

- `references/routing.md`：视觉 IP 路由、别名、默认值、输出后缀、所需参考和归因上下文。
- `references/ips/xiaohei/index.md`：小黑 canonical pack 导航、文件职责和输出路径。
- `references/ips/xiaohei/style-dna.md`：小黑风格 DNA、颜色、文字、禁忌。
- `references/ips/xiaohei/xiaohei-ip.md`：小黑 IP 的形象、性格、动作库和禁忌。
- `references/ips/xiaohei/composition-patterns.md`：小黑结构类型、原创隐喻方法和反复刻规则。
- `references/ips/xiaohei/prompt-template.md`：小黑单张生图提示词模板。
- `references/ips/xiaohei/qa-checklist.md`：小黑生成后检查和迭代规则。
- `references/style-dna.md`、`references/xiaohei-ip.md`、`references/composition-patterns.md`、`references/prompt-template.md`、`references/qa-checklist.md`：旧根路径兼容入口，保留给现有提示和文档；当前小黑行为读取 `references/ips/xiaohei/` canonical 文件。
- `assets/examples/`：只作低频视觉校准，不进入默认生成路径。不要照抄这些案例的构图、物件或标注。

## 工作流

### 1. 选择视觉 IP 路由

先读取 `references/routing.md`，确定本次任务的视觉 IP。

- 用户省略视觉 IP 时，默认选择小黑路由。
- 用户写 `小黑`、`Xiaohei`、`Ian` 或 `ian-xiaohei` 时，选择同一个小黑路由。
- 小黑路由沿用现有 `$ian-xiaohei-illustrations` 行为和 `assets/<article-slug>-illustrations/` 输出路径。
- 小黑路由的 `required_references` 指向 `references/ips/xiaohei/` canonical pack；旧根路径保持兼容入口。
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

Phase-owned routes use their own `required_references` and route-owned prompt rules. `assets/examples/` 案例只提供风格密度和角色参与方式，生成时从当前文章重新发明一个奇怪但成立的隐喻。

### 5. 检查与迭代

生成后检查所选 IP 的 QA 参考。小黑路由使用 `references/ips/xiaohei/qa-checklist.md`；`references/qa-checklist.md` 保持旧根路径兼容入口。如果出现以下问题，优先重生成或局部编辑：

- 小黑只是装饰
- 画面太满
- 太像流程图/PPT
- 中文太多或错字严重
- 左上角出现“常见坑/流程图/系统架构图”等标题
- 画风太可爱、幼稚、死板
- 背景不是干净白底

### 6. 保存交付

如果用户在 workspace 内工作，把最终图复制到所选路由的输出目录。目录规则来自 `references/routing.md` 的 `output_suffix` 和该路由的阶段交付规则。

小黑路由的当前活动路径保持为：

```text
assets/<article-slug>-illustrations/
```

其他 phase-owned 路由使用路由元数据和对应阶段交付的输出规则。

按顺序命名：

```text
01-topic-name.png
02-topic-name.png
```

保留原始生成文件，不要覆盖已有资产，除非用户明确要求替换。

## 输出口径

生成前的策略输出要短而准。生成后的交付要包含：

- 选中的视觉 IP / selected IP
- 生成了几张
- 每张图的用途
- 保存路径
- 哪些图最稳，哪些图是可选

不要长篇解释风格理论；让图自己说话。
