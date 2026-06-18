---
phase: 47-cai-xukun-validation-and-release-evidence
phase_number: 47
phase_name: Cai Xukun Validation and Release Evidence
status: captured
created: 2026-06-18
stage: discuss
---

# Phase 47: Cai Xukun Validation and Release Evidence - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in `47-CONTEXT.md`. This log preserves the alternatives considered.

**Date:** 2026-06-18
**Phase:** 47-Cai Xukun Validation and Release Evidence
**Areas discussed:** root need, validation matrix, current gaps, source-of-truth artifacts, leakage and sample gates, release evidence, dirty-worktree scope

---

## Root Need

| Option | Description | Selected |
|--------|-------------|----------|
| Release-readiness validation | Treat Phase 47 as final deterministic proof that Cai Xukun can be released after Phases 43-46. | Yes |
| More Cai Xukun route feature work | Add new source, pack, controller, or public documentation behavior. | |
| External public-figure research expansion | Revisit external facts beyond the locked uploaded-image authority and public-figure boundary records. | |

**User's choice:** Phase scope supplied by user and roadmap selects release-readiness validation.
**Notes:** `.planning/ROADMAP.md` maps Phase 47 to `VAL-01` through `VAL-05`. Phases 43-46 already own route/source, canonical pack, controller integration, and public release surfaces.

---

## Validation Matrix

| Option | Description | Selected |
|--------|-------------|----------|
| Extend current validator | Add Cai Xukun checks to `scripts/validate-skill-package.mjs`, preserving dependency-free local validation and stable check output. | Yes |
| Add a generated route manifest | Introduce a new manifest generator and derive validator expectations from it. | |
| Add package-managed testing | Introduce npm scripts or a third-party test runner. | |

**User's choice:** Selected by Phase 42 precedent and current repository shape.
**Notes:** The repo has no `package.json`. Phase 42 used the current dependency-free validator and built-in Node test suite for the analogous Go Gopher release-evidence phase.

---

## Current Validator and Test Gaps

| Option | Description | Selected |
|--------|-------------|----------|
| Close all known Cai Xukun diagnostics | Treat the current validator `7` failures and Node `21` failures as the Phase 47 baseline to turn green. | Yes |
| Patch only visible validator failures | Update the seven failing validator checks while leaving Node fixture coverage for a later phase. | |
| Document expected failures | Keep the current failures as known diagnostics after release. | |

**User's choice:** Selected by `VAL-01` through `VAL-05`.
**Notes:** Baseline validator result: `Summary: total=129 passed=122 failed=7 skipped=0`. Baseline Node result: `tests 96`, `pass 75`, `fail 21`.

---

## Source-of-Truth Artifacts

| Option | Description | Selected |
|--------|-------------|----------|
| Protect Phases 43-46 artifacts | Use routing, source, pack, controller, public docs, examples, NOTICE, release checklist, agent metadata, and localized README variants as validator truth. | Yes |
| Validate only `routing.md` | Keep Phase 47 centered on route table shape and skip public release surfaces. | |
| Validate only public docs | Keep Phase 47 centered on README/examples/checklist parity and skip route-local pack checks. | |

**User's choice:** Selected by Phase 47 success criteria and Phase 46 handoff.
**Notes:** `46-VERIFICATION.md` and `46-UAT.md` explicitly hand off validator hardening, Node tests, final release evidence, leakage scan automation, and public sample gate automation to Phase 47.

---

## Leakage and Public Sample Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Strict route-local isolation and pending sample gate | Fail when Cai Xukun markers leak into non-Cai-Xukun route packs, and fail when public generated Cai Xukun samples appear without complete release checklist approval. | Yes |
| Public docs only leakage scan | Allow route-local leakage checks to remain manual. | |
| Lenient public sample detection | Allow sample assets while checklist review remains pending. | |

**User's choice:** Selected by `VAL-02`, `VAL-03`, and the release checklist.
**Notes:** Cai Xukun public asset approval is currently `PENDING` in `RELEASE_CHECKLIST.md`, and public generated Cai Xukun samples remain pending behind release review.

---

## Node Regression Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Full fixture coverage and full-pass output | Update parser primitives, stable order, route count, failure fixtures, public sample gates, generated sample gates, release evidence drift, and final green summary assertions. | Yes |
| Summary-only update | Update final check totals and leave negative fixtures for later. | |
| Parser-only update | Update eight-route parsing while leaving public sample and evidence fixtures unchanged. | |

**User's choice:** Selected by `VAL-04`.
**Notes:** Existing fixture helpers and approval parser tests already cover Tom, Ferris, Seal, OpenClaw, and Go Gopher. Cai Xukun should reuse the same patterns with public-figure and uploaded-image outcome fields.

---

## Release Evidence

| Option | Description | Selected |
|--------|-------------|----------|
| Dedicated Phase 47 release evidence artifact | Produce `47-RELEASE-EVIDENCE.md` with exact command outcomes and `VAL-01` through `VAL-05` traceability. | Yes |
| Verification and UAT only | Rely on later `47-VERIFICATION.md` and `47-UAT.md` without a dedicated evidence file. | |
| Commit-message evidence only | Keep command output outside planning artifacts. | |

**User's choice:** Selected by roadmap success criterion 5 and Phase 42 precedent.
**Notes:** Phase 42 created `42-RELEASE-EVIDENCE.md` and validated it through `VAL-GOPHER-EVIDENCE-001`; Phase 47 should mirror that with `VAL-CAIXUKUN-EVIDENCE-001`.

---

## Dirty-Worktree Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Phase 47 surgical scope | Preserve existing Phase 43-46 work and touch only Phase 47-owned validation scripts, tests, and release-evidence artifacts during execution. | Yes |
| Broad cleanup while validating | Clean up or restage unrelated docs and prior planning directories during Phase 47. | |
| Revert diagnostic-causing edits | Revert Cai Xukun source/docs changes to restore old validator state. | |

**User's choice:** Selected by user acceptance and repository state.
**Notes:** `git status --short` shows modified public/runtime docs plus untracked Phase 43-46 planning directories and the Cai Xukun route pack. Phase 47 should work with that state and stage only explicit files.

---

## the agent's Discretion

- Exact Cai Xukun check IDs, helper function names, parser names, and check order are left to planning and implementation.
- Small local helper arrays in `scripts/validate-skill-package.mjs` are acceptable when they keep the matrix deterministic and easier to audit.
- Existing Go Gopher compatibility markers may remain when they protect historical behavior, provided the final green validator treats Cai Xukun as the eighth route.

## Deferred Ideas

- Machine-readable route manifests.
- Uploaded source-image hashing.
- Public-approved multi-IP comparison sheets.
- Automated visual regression.
- Selected-IP release packaging.
