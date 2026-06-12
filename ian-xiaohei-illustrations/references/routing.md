# 视觉 IP 路由

本文件定义技能入口的视觉 IP 选择规则和可验证路由元数据。`SKILL.md` 先选择视觉 IP，再加载所选路由的参考文件。

## 路由选择规则

- 用户省略视觉 IP 时，选择 `xiaohei`。
- 用户使用 `小黑`、`Xiaohei`、`Ian`、`ian-xiaohei` 时，选择同一个 `xiaohei` 路由。
- 路由只保存选择、引用、输出后缀和归因上下文。风格、角色身份、提示词措辞和 QA 规则保存在所选 IP 的参考文件中。
- `littlebox` 是 Phase 3 入口占位，Phase 3 负责别名、执行规则、提示词、QA、示例和完整输出规则。

## IP Routes

| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | Phase 3-owned | `false` | `littlebox` | Phase 3-owned | okooo5km/5km-littlebox-illustrations | `phase-3-owned` |

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
- 输出前检查目标目录已有资产，生成新文件名以保留历史结果。

## 交付报告字段

每次生成交付都写清楚：

- 选中的视觉 IP
- 生成了几张
- 每张图的用途
- 保存路径
- 稳定性备注：哪些图最稳，哪些图是可选
