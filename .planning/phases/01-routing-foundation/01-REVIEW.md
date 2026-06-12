---
phase: "01-routing-foundation"
reviewed: "2026-06-12T04:08:31Z"
depth: standard
files_reviewed: 4
files_reviewed_list:
  - ian-xiaohei-illustrations/SKILL.md
  - ian-xiaohei-illustrations/references/routing.md
  - README.md
  - examples/prompts.md
findings:
  critical: 2
  warning: 1
  info: 0
  total: 3
status: issues
---

# Phase 1: Code Review Report

**Reviewed:** 2026-06-12T04:08:31Z
**Depth:** standard
**Files Reviewed:** 4
**Status:** issues

## Summary

Reviewed the Phase 1 routing foundation against the phase context, plans, summaries, and requirements. The route manifest records the required fields and Xiaohei default aliases, but the skill entrypoint still embeds Xiaohei-only generation and output behavior inside the claimed shared workflow. The public mixed-IP smoke prompt also asks users to request a Littlebox group in Phase 1, which creates an execution expectation before the Littlebox route is implemented.

## Critical Issues

### CR-01: Shared Generation Step Still Hard-Codes Xiaohei Prompt Requirements

**File:** `ian-xiaohei-illustrations/SKILL.md:63`

**Issue:** Lines 35-36 define generation as shared orchestration with style, character identity, prompt wording, and QA details loaded from the selected IP references. The actual generation step then requires `纯白背景`, `黑色手绘线稿`, `少量红色/橙色/蓝色中文手写批注`, and `小黑作为核心动作主体` at lines 69-75. That violates IPCK-03 and D-05 because the shared step contains Xiaohei-specific prompt rules. Once another route is selected, the entrypoint will still force Xiaohei visual constraints.

**Fix:**

```markdown
### 4. 单张生成

如果用户明确要求“生成 / 输出 / 做图 / 帮我生成”，不要停下来等确认；用内置 `image_gen` 每张单独生成。不要把多张图拼在一张里。

每张图只讲一个核心结构。生成前读取所选视觉 IP 的 `required_references`，并从该 IP 的提示词模板、角色规则和 QA 文件组装单张提示词。

小黑路由继续使用 `references/style-dna.md`、`references/xiaohei-ip.md`、`references/prompt-template.md` 和 `references/qa-checklist.md`。
```

### CR-02: Save Step Ignores Route Output Metadata

**File:** `ian-xiaohei-illustrations/SKILL.md:91`

**Issue:** The save step always writes to `assets/<article-slug>-illustrations/` at lines 93-97, even though `routing.md` declares `output_suffix` as route metadata and reserves `littlebox` with a different suffix. This makes the shared workflow incompatible with route-specific output suffixes and will route future IP outputs into the Xiaohei directory. Phase 1 requires the shared workflow to preserve Xiaohei behavior while routing through metadata that Phase 4 can validate.

**Fix:**

```markdown
### 6. 保存交付

如果用户在 workspace 内工作，按所选视觉 IP 的 `output_suffix` 保存最终图：

- `xiaohei`: `assets/<article-slug>-illustrations/`
- 其他 Phase-owned 路由: 使用 `references/routing.md` 中声明的输出后缀和该 IP 阶段交付的完整输出规则。

按顺序命名：
```

## Warnings

### WR-01: Mixed-IP Example Prompts Users To Request Littlebox Planning Before Route Support Exists

**File:** `examples/prompts.md:25`

**Issue:** The prompt at lines 27-29 asks Codex to plan two variant groups, including a Littlebox group, then says the current phase only executes Xiaohei-compatible planning. This is an ambiguous copyable prompt: users can paste it and reasonably expect a Littlebox group, while `routing.md` line 10 says Phase 3 owns Littlebox aliases, execution rules, prompt wording, QA, examples, and complete output rules. That is docs drift and an accidental Littlebox execution promise.

**Fix:** Replace the code block with a documentation-only note, or keep the prompt entirely Xiaohei-scoped:

```markdown
## 路由说明：多 IP 请求

Phase 1 只记录多 IP 请求的交付口径：按 IP 分组形成独立 variant group。当前可复制执行的示例保持 Xiaohei 路由；Littlebox 的规划、生成、提示词和 QA 由 Phase 3 交付。
```

---

_Reviewed: 2026-06-12T04:08:31Z_
_Reviewer: the agent (gsd-code-reviewer)_
_Depth: standard_
