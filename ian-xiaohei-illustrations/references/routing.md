# 视觉 IP 路由

本文件定义技能入口的视觉 IP 选择规则和可验证路由元数据。`SKILL.md` 先选择视觉 IP，再加载所选路由的参考文件。

## 路由选择规则

- 用户省略视觉 IP 时，选择 `xiaohei`。
- 用户使用 `小黑`、`Xiaohei`、`Ian`、`ian-xiaohei` 时，选择同一个 `xiaohei` 路由。
- 用户使用 `小盒`、`Littlebox`、`纸盒`、`paper-box`、`carton` 时，选择同一个 `littlebox` 路由。
- 用户使用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 时，选择同一个 `tom` 路由，路线状态保持 `gated-authorized`。
- 用户使用 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹` 时，选择同一个 `ferris` 路由，路线状态保持 `source-reviewed`。
- 同时请求 Xiaohei、Littlebox、Tom 和 Ferris 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
- 路由只保存选择、引用、输出后缀和归因上下文。风格、角色身份、提示词措辞和 QA 规则保存在所选 IP 的参考文件中。
- Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

## IP Routes

| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | `references/ips/littlebox/style-dna.md`; `references/ips/littlebox/littlebox-ip.md`; `references/ips/littlebox/composition-patterns.md`; `references/ips/littlebox/language-and-labels.md`; `references/ips/littlebox/prompt-template.md`; `references/ips/littlebox/qa-checklist.md` | 5km Littlebox Illustrations by okooo5km; source https://github.com/okooo5km/5km-littlebox-illustrations; MIT; inspected commit 37cd93e | `active` |
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |

## Legacy Path Availability

The root Xiaohei reference paths remain available during migration and point to canonical pack files:

- `references/style-dna.md` -> `references/ips/xiaohei/style-dna.md`
- `references/xiaohei-ip.md` -> `references/ips/xiaohei/xiaohei-ip.md`
- `references/composition-patterns.md` -> `references/ips/xiaohei/composition-patterns.md`
- `references/prompt-template.md` -> `references/ips/xiaohei/prompt-template.md`
- `references/qa-checklist.md` -> `references/ips/xiaohei/qa-checklist.md`

## 输出路径

- `xiaohei` 输出目录保持为 `assets/<article-slug>-illustrations/`。
- `xiaohei` 文件名继续使用有序英文 slug，例如 `01-topic-name.png`。
- `littlebox` 输出目录为 `assets/<article-slug>-littlebox/`。
- `littlebox` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
- `tom` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
- `ferris` 输出目录为 `assets/<article-slug>-ferris/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-ferris/`。
- `ferris` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
- 混合 IP 请求按 IP 分成 separate route groups：`xiaohei` 写入 `assets/<article-slug>-illustrations/`，`littlebox` 写入 `assets/<article-slug>-littlebox/`，`tom` 写入 `assets/<article-slug>-tom/`，`ferris` 写入 `assets/<article-slug>-ferris/`。
- 输出前检查目标目录已有资产，生成新文件名以保留历史结果。

## 交付报告字段

每次生成交付都写清楚：

- 选中的视觉 IP
- 生成了几张
- 每张图的用途
- 保存路径
- 稳定性备注：哪些图最稳，哪些图是可选
