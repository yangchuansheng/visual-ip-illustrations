# Phase 10: Validation Hardening - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md. This log preserves the alternatives considered.

**Date:** 2026-06-13T00:00:00+08:00
**Phase:** 10-Validation Hardening
**Areas discussed:** Validator harness strategy, validation coverage surfaces, test coverage strategy, helper extraction boundary, scope fence

---

## Validator Harness Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Harden existing validator | Extend `scripts/validate-skill-package.mjs` and keep the existing deterministic local check model. | ✓ |
| Replace with a new test framework | Introduce a package/runtime-level test framework for validation. | |
| Manual-only validation | Rely on maintainer checklist inspection and skip deeper executable checks. | |

**User's choice:** Auto-selected from explicit task instruction: harden the existing validator and test harness.
**Notes:** The repository already has a dependency-free validator with 40 passing checks and Node tests. The phase goal asks maintainers to run deterministic local validation and Node tests.

---

## Validation Coverage Surfaces

| Option | Description | Selected |
|--------|-------------|----------|
| Treat route, pack, docs, leakage, and public assets as first-class checks | Expand coverage across Tom route metadata, Tom pack markers, public docs, metadata, NOTICE, release checklist, leakage boundaries, and public asset gates. | ✓ |
| Route and docs only | Focus on `routing.md`, README, examples, and output paths. | |
| Tom pack only | Focus on canonical pack files and prompt/QA markers. | |

**User's choice:** Auto-selected from explicit task instruction and TVAL-02 through TVAL-06.
**Notes:** Phase 6-9 verification reports each identify validator hardening as the downstream owner for deeper Tom route, canonical pack, docs, leakage, and public-sample coverage.

---

## Test Coverage Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Extend current Node tests with fixture mutations | Keep `node:test`, expand `requiredCheckIds`, stable ordering assertions, parser behavior assertions, full pass output, and actionable failure fixture tests. | ✓ |
| Snapshot stdout wholesale | Compare the entire validator stdout output as one large snapshot. | |
| Validate only command exit codes | Assert only zero/nonzero command status. | |

**User's choice:** Auto-selected from explicit task instruction and current test style.
**Notes:** Existing tests already use deterministic check IDs, stdout ordering, and temporary fixtures. Phase 10 should add Tom route/parser, Tom failure-message, leakage, public asset, and full-pass assertions.

---

## Helper Extraction Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Small helper extraction inside the existing script | Extract helper functions only where marker groups, route pack files, leakage scanning, approval parsing, or tests become clearer. | ✓ |
| Larger framework layer | Split validator into a new package or generalized validation framework. | |
| Pure inline growth | Add every check inline regardless of duplication. | |

**User's choice:** Auto-selected from explicit task instruction.
**Notes:** The project is a lightweight Markdown/YAML Codex Skill package. Helper extraction should support readability and testability while preserving the single local validator command.

---

## Scope Fence

| Option | Description | Selected |
|--------|-------------|----------|
| Discussion artifacts and state only for this task | Create Phase 10 context/log artifacts and record session state; leave validator and tests unchanged until execution planning. | ✓ |
| Implement validator changes immediately | Edit `scripts/validate-skill-package.mjs` and tests during discussion. | |
| Advance into full plan execution | Create plans and implement Phase 10 after context capture. | |

**User's choice:** Auto-selected from explicit task instruction: "Do not edit validator/tests in this discussion task. Only discussion artifacts and STATE.md."
**Notes:** This discussion captured the implementation decisions needed by downstream planning and execution while preserving the requested file boundary.

---

## the agent's Discretion

- Auto mode selected all gray areas and chose the conservative path aligned with Phases 6-9.
- Subagent tooling was requested, then unavailable in this Codex runtime after tool discovery. The required analysis was completed inline.
- Exact future check IDs and helper names remain planner/executor discretion, with deterministic local output and actionable failure messages locked.

## Deferred Ideas

- Public rendered Tom sample approval remains a maintainer release gate.
- Tom route-status changes remain tied to `ian-xiaohei-illustrations/references/ips/tom/rights.md` and `RELEASE_CHECKLIST.md`.
- Automated visual likeness judgment and broader protected-IP manifests remain future work.
