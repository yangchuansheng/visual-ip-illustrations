# Phase 8: Skill Controller Integration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13T03:23:51+08:00
**Phase:** 8-Skill Controller Integration
**Areas discussed:** Controller file scope, Route selection and defaults, Tom reference loading, Mixed-IP route groups, Output and delivery

---

## Controller File Scope

| Option | Description | Selected |
|--------|-------------|----------|
| `SKILL.md` only | Update the skill controller Markdown and consume existing `routing.md` plus Tom pack contracts. | ✓ |
| Controller plus routing docs | Update `SKILL.md` and revise `routing.md` again. | |
| Controller plus public/release surfaces | Update `SKILL.md`, README, examples, agent metadata, release checklist, and validation in one phase. | |

**User's choice:** Automatic decisions authorized; selected the shortest safe controller-only path.
**Notes:** `routing.md` already contains Tom route metadata and mixed route group rules. Phase 9 owns public docs and release surfaces. Phase 10 owns validator hardening.

---

## Route Selection and Defaults

| Option | Description | Selected |
|--------|-------------|----------|
| Xiaohei-only omitted-IP default | Keep omitted visual IP requests on `xiaohei`; Tom and Littlebox require explicit aliases. | ✓ |
| Tom as additional implicit default | Let Tom participate when the user asks generally for article illustrations. | |
| Ask on omitted IP | Prompt users to choose an IP when no route is named. | |

**User's choice:** The prompt explicitly locked Xiaohei as the only default.
**Notes:** Tom aliases are exact: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`. Tom route status remains `gated-authorized`.

---

## Tom Reference Loading

| Option | Description | Selected |
|--------|-------------|----------|
| Route-isolated Tom references | Load only `references/ips/tom/` required references after selecting `tom`. | ✓ |
| Shared generic prompt layer | Add shared prompt/QA text that applies across all routes. | |
| Root-path Tom compatibility layer | Add root-level Tom compatibility entry points. | |

**User's choice:** Automatic decisions authorized; selected route-isolated Tom references.
**Notes:** Tom planning/generation/QA/edit surfaces route to `prompt-template.md`, `composition-patterns.md`, and `qa-checklist.md`; rights-sensitive handling points to `rights.md`.

---

## Mixed-IP Route Groups

| Option | Description | Selected |
|--------|-------------|----------|
| Separate route groups | Build one shared core idea and then separate Xiaohei, Littlebox, and Tom groups. | ✓ |
| Combined prompt per idea | Put multiple IPs in one planning/generation prompt for the same image. | |
| Sequential single-route runs | Treat each requested IP as unrelated work without a shared core idea. | |

**User's choice:** The prompt explicitly locked separate route groups for mixed requests.
**Notes:** Each group loads only its route references, uses its own output directory, and prevents route leakage.

---

## Output and Delivery

| Option | Description | Selected |
|--------|-------------|----------|
| Tom output suffix `tom` | Save Tom outputs under `assets/<article-slug>-tom/` and include escaped token marker. | ✓ |
| Shared mixed output directory | Put all route variants under one directory with IP prefixes. | |
| Defer output path wording | Leave Tom output paths only in `routing.md` and Tom pack files. | |

**User's choice:** The prompt explicitly locked Tom output path and escaped token requirements.
**Notes:** `SKILL.md` must include `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`. Mixed delivery remains one block per IP.

---

## the agent's Discretion

- User explicitly authorized automatic decisions and subagents.
- Multi-agent tooling was not available in this runtime, so the analysis was completed inline.
- The planner may choose exact Chinese wording and local section placement inside `SKILL.md` while preserving the locked route behavior and scope fence.

## Deferred Ideas

- README, `examples/prompts.md`, `agents/openai.yaml`, and `RELEASE_CHECKLIST.md` updates belong to Phase 9.
- Validator and Node test hardening belong to Phase 10.
- Public rendered Tom samples remain gated by release-review approval.
