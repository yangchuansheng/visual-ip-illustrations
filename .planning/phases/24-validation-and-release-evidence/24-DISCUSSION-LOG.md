# Phase 24: Validation and Release Evidence - Discussion Log

> **Audit trail only.** Planning, research, and execution agents should use `24-CONTEXT.md` as the canonical decision source.

**Date:** 2026-06-14T17:49:44+08:00
**Phase:** 24-Validation and Release Evidence
**Areas discussed:** Validator coverage, Node test coverage, release evidence, UAT migration behavior, docs change boundary, future distribution scope

---

## Validator Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Broad canonical naming validation | Check canonical naming across skill metadata, agent metadata, README, examples, NOTICE, release checklist, and route docs. | yes |
| Runtime-only naming validation | Limit checks to `SKILL.md` and `openai.yaml`. | |
| Docs-only naming validation | Limit checks to README, examples, NOTICE, and release checklist. | |

**User's choice:** Broad canonical naming validation.
**Notes:** The validator should also check legacy alias compatibility markers and install migration guidance. Existing route stability checks remain part of the release confidence set.

---

## Node Test Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Full rebrand regression coverage | Cover canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures. | yes |
| Smoke-only coverage | Cover canonical and legacy invocation markers only. | |
| Route-only coverage | Cover route and output stability while leaving naming drift to validator checks. | |

**User's choice:** Full rebrand regression coverage.
**Notes:** Tests should prove that both `$visual-ip-illustrations` and `$ian-xiaohei-illustrations` remain meaningful during v1.4. Stale old-name-only fixtures should fail when primary surfaces lose canonical naming.

---

## Release Evidence

| Option | Description | Selected |
|--------|-------------|----------|
| Complete release evidence package | Record validator output, Node output, `git diff --check`, docs consistency, and compatibility smoke coverage. | yes |
| Command-only evidence | Record validator, Node, and diff output only. | |
| Narrative evidence | Summarize release readiness without command excerpts. | |

**User's choice:** Complete release evidence package.
**Notes:** Final evidence should make starting baseline and final counts explicit. The starting baseline is validator `78/78` and Node `40/40`; Phase 24 may increase counts with deliberate new checks and tests.

---

## UAT Migration Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Migration behavior UAT | Confirm users can migrate naming while preserving route behavior. | yes |
| Static docs UAT | Confirm only docs and release checklist text. | |
| Validator-only UAT | Treat local automated checks as sufficient for migration behavior. | |

**User's choice:** Migration behavior UAT.
**Notes:** UAT should cover canonical invocation, legacy alias compatibility, omitted-IP Xiaohei, explicit IP routes, mixed-IP route grouping, and stable output paths.

---

## Docs Change Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Marker-only public docs changes | Allow small marker additions when new validation requires them and they tie directly to release evidence. | yes |
| Broad public docs rewrite | Rewrite public docs during validation hardening. | |
| Script-only changes | Keep all public docs unchanged regardless of validator needs. | |

**User's choice:** Marker-only public docs changes.
**Notes:** Phase 23 already completed the public docs rebrand. Phase 24 should use that surface as the baseline and add only deterministic markers when required by validation.

---

## Future Distribution Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Defer distribution work | Keep actual repo rename, redirect behavior, v2 installer, and asset manifest outside Phase 24. | yes |
| Include repo rename prep | Add repository rename and redirect planning to this phase. | |
| Include v2 distribution prep | Add installer and manifest design to this phase. | |

**User's choice:** Defer distribution work.
**Notes:** Phase 24 is a validation and evidence phase. Future distribution work remains documented for later planning.

---

## the agent's Discretion

- Choose exact validator check IDs and grouping during plan/research.
- Choose exact Node fixture names and mutation helpers during plan/research.
- Choose whether final evidence uses `24-VALIDATION.md`, `24-VERIFICATION.md`, `24-UAT.md`, and `24-01-SUMMARY.md` together, with the requirement that final release evidence remains deterministic and readable.

## Deferred Ideas

- Actual repository rename from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.
- Redirect behavior and remote URL migration after a repository rename.
- v2 installer or selector for selected IP variants.
- Machine-readable asset manifest.
