# Phase 9: Tom Docs, Examples, and Release Surface - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-13T00:00:00+08:00
**Phase:** 9-Tom Docs, Examples, and Release Surface
**Areas discussed:** Public Tom route wording, Prompt examples, Agent metadata, Release gates, Public claims and sample policy

---

## Public Tom Route Wording

| Option | Description | Selected |
|--------|-------------|----------|
| Explicit gated protected-character route | Describe Tom as explicit-only, `gated-authorized`, rights-boundary controlled, and selectable only through aliases. | ✓ |
| Active public route | Describe Tom alongside Xiaohei and Littlebox as generally available. | |
| Maintainer-only hidden route | Keep Tom out of public docs and expose it only in internal route files. | |

**User's choice:** Automatic decisions authorized; selected explicit gated protected-character route.
**Notes:** This matches Phase 6 route-status contract, Phase 8 controller verification, and the user's locked decision that Tom is explicit-only and protected-character/gated-authorized in public docs.

---

## Prompt Examples

| Option | Description | Selected |
|--------|-------------|----------|
| Tom-only plus mixed three-IP prompts | Add copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed variant prompts with separate outputs. | ✓ |
| Mixed prompts only | Mention Tom only in multi-IP examples. | |
| Smoke prompt only | Keep Tom prompt coverage limited to maintainer route audit. | |

**User's choice:** Automatic decisions authorized; selected Tom-only plus mixed three-IP prompts.
**Notes:** Tom-only prompts should stay separate from mixed-IP route prompts. Mixed prompts should require Xiaohei, Littlebox, and Tom to produce separate route groups and output directories.

---

## Agent Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Name all three routes and preserve Xiaohei default | Update display copy to include Xiaohei, Littlebox, and Tom while keeping Xiaohei as the implicit default. | ✓ |
| Name only active routes | Keep metadata focused on Xiaohei and Littlebox until Tom leaves `gated-authorized`. | |
| Make Tom part of default prompt behavior | Mention Tom in a way that could make omitted-IP requests ambiguous. | |

**User's choice:** Automatic decisions authorized; selected name all three routes and preserve Xiaohei default.
**Notes:** `policy.allow_implicit_invocation: true` remains skill-level behavior. The default prompt should continue to state that omitted visual IP selects Xiaohei.

---

## Release Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Full Tom release gate checklist | Add authorization review, route status review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final rights review. | ✓ |
| Minimal status checklist | Keep only status and sample approval checks. | |
| Defer release gates to validation phase | Leave release checklist expansion for Phase 10. | |

**User's choice:** Automatic decisions authorized; selected full Tom release gate checklist.
**Notes:** Phase 9 updates maintainer checklist wording and commands. Phase 10 implements validator and test hardening.

---

## Public Claims and Sample Policy

| Option | Description | Selected |
|--------|-------------|----------|
| Gated wording with no rendered sample claims | Allow request prompts and route status text while avoiding broad availability and public rendered sample approval claims. | ✓ |
| Public availability language | Present Tom as generally available to all users. | |
| Remove Tom request prompts | Avoid public Tom prompts entirely until a later release. | |

**User's choice:** Automatic decisions authorized; selected gated wording with no rendered sample claims.
**Notes:** Public docs may include copyable Tom request prompts, aliases, output suffix/path, route status, and rights review gates. They should avoid wording that suggests rendered Tom samples are approved or that Tom is broadly released beyond the current gated status.

---

## the agent's Discretion

- The user invoked `$gsd-discuss-phase 9 --auto`, so all gray areas were auto-selected and resolved in one pass.
- The user pre-locked the key decisions, so this discussion formalized those decisions instead of asking more questions.
- Multi-agent tooling was unavailable in this runtime, so the subagent implementation completed the codebase read and artifact creation inline.

## Deferred Ideas

- Validator behavior and Node tests belong to Phase 10.
- Public rendered Tom examples remain gated by release checklist approval.
- Tom route-status changes require a future maintainer rights review.
