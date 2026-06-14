# Phase 27: Public Documentation and Example Migration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T17:50:00Z
**Phase:** 27-public-documentation-and-example-migration
**Areas discussed:** scope ownership, multilingual exceptions, compatibility surfaces, public documentation shape, release checklist stability, validator scope

---

## Scope Ownership

| Option | Description | Selected |
|--------|-------------|----------|
| Public docs only | Rewrite README, examples, NOTICE, and release checklist without validator updates. | |
| Public docs plus targeted validator markers | Rewrite public docs and update marker expectations that refer to renamed headings or rewritten phrases. | yes |
| Public docs plus final hard-fail enforcement | Rewrite public docs and complete final stale-language enforcement in the same phase. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path follows the roadmap boundary: Phase 27 handles public docs plus required marker synchronization; Phase 28 handles final enforcement and evidence.
**Notes:** The validator currently asserts several Chinese headings and public-doc phrases from `examples/prompts.md`, so targeted marker updates are necessary for a green Phase 27.

---

## Multilingual Exceptions

| Option | Description | Selected |
|--------|-------------|----------|
| Translate every Han-character token | Remove all Chinese from public docs. | |
| Preserve policy-approved tokens | Translate stale prose while keeping aliases, labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article examples. | yes |
| Expand the allowlist broadly | Add broad exceptions for remaining public-doc Chinese prose. | |

**User's choice:** The selected path preserves the approved exception categories from `LANGUAGE_POLICY.md`.
**Notes:** Over-broad exceptions would weaken Phase 28 validation. Chinese aliases and user-language examples remain compatibility assets.

---

## Compatibility Surfaces

| Option | Description | Selected |
|--------|-------------|----------|
| Rewrite freely | Rephrase paths, route statuses, aliases, and smoke prompts as needed. | |
| Preserve validator-visible route contract | Keep canonical and legacy invocations, installable package directory, route ids/statuses/defaults, aliases, authority paths, and output paths stable. | yes |
| Freeze all public docs text | Avoid any public docs rewrite to protect validators. | |

**User's choice:** Preserve validator-visible route contracts exactly while translating prose around them.
**Notes:** This protects shipped route behavior and downstream user compatibility.

---

## Public Documentation Shape

| Option | Description | Selected |
|--------|-------------|----------|
| Split into many phase plans | Separate README, examples, NOTICE, release checklist, and validator sync into separate plans. | |
| Use one cohesive plan | Create one plan with task groups for public docs, release surfaces, validator/test sync, and verification. | yes |
| Delay examples to Phase 28 | Handle README first and leave prompt examples for final validation. | |

**User's choice:** Use one cohesive Phase 27 plan.
**Notes:** The files cross-reference the same route statuses, path markers, and release gates, so one plan minimizes drift.

---

## Release Checklist Stability

| Option | Description | Selected |
|--------|-------------|----------|
| Translate all checklist lines freely | Rewrite checklist copy and approval records in natural English. | |
| Preserve approval record formats | Translate surrounding prose while keeping parser-sensitive approval line format and field order. | yes |
| Leave release checklist unchanged | Defer release checklist English migration. | |

**User's choice:** Preserve parser-sensitive approval record formats.
**Notes:** Tom, Ferris, and Sealos public/generated sample gates are parsed by the validator.

---

## the agent's Discretion

- Choose exact English prose for README, examples, NOTICE, and release checklist.
- Choose exact English headings when validator/test expectations are updated in the same change set.
- Keep the implementation surgical and avoid broad reorganization unless it protects readability and validation.

## Deferred Ideas

- Phase 28 owns final stale-language hard-fail enforcement and release evidence.
