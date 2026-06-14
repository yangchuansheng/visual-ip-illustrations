# Phase 26: Skill and Reference Content Migration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-14T16:32:00Z
**Phase:** 26-skill-and-reference-content-migration
**Areas discussed:** Phase boundary, language authority, runtime route stability, route-local migration, validation posture

---

## Phase Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Runtime skill and references only | Migrate `SKILL.md`, `routing.md`, shared references, route-local packs, and `openai.yaml`. | yes |
| Include public docs | Also migrate README, examples, NOTICE, and release checklist. | |
| Validator-first release hardening | Skip prose migration and build final stale-language gates first. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path follows the roadmap boundary for Phase 26.
**Notes:** README, examples, NOTICE, release checklist, and release evidence stay assigned to Phase 27 and Phase 28.

---

## Language Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Use `LANGUAGE_POLICY.md` | Treat the Phase 25 policy as the authority and preserve listed exceptions. | yes |
| Translate every Han token | Remove all Chinese characters from runtime files. | |
| Keep mixed prose | Leave runtime prose as currently mixed language. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path uses `LANGUAGE_POLICY.md`.
**Notes:** Chinese aliases, Xiaohei prompt placeholders, and user-language visible-label behavior are compatibility surfaces.

---

## Runtime Route Stability

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve route contracts | Keep invocations, route ids, aliases, defaults, statuses, required references, output suffixes, and output paths stable. | yes |
| Simplify route metadata | Reduce route table details during translation. | |
| Rename routes for English | Change route ids or aliases to English-only forms. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path preserves route contracts.
**Notes:** v1.5 is a language-default migration; shipped route behavior remains stable.

---

## Route-Local Migration

| Option | Description | Selected |
|--------|-------------|----------|
| Migrate packs in place | Translate each route's local files while preserving its authority records and QA gates. | yes |
| Merge shared route prose | Centralize route behavior into shared docs during migration. | |
| Rewrite route behavior | Treat the migration as a chance to redesign each route. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path migrates packs in place.
**Notes:** Route isolation stays important for Tom rights, Ferris source/trademark authority, and Sealos Seal brand/no-logo identity.

---

## Validation Posture

| Option | Description | Selected |
|--------|-------------|----------|
| Keep report-mode scan | Keep production validation green and use report-mode language findings during Phase 26. | yes |
| Hard-fail all stale prose now | Make every residual Chinese finding a blocking failure in Phase 26. | |
| Defer all validation | Migrate prose without running validator or tests. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path keeps Phase 25's report-mode posture.
**Notes:** Phase 28 owns final hard-fail coverage after Phase 26 and Phase 27 migration surfaces land.

---

## the agent's Discretion

- Choose exact plan granularity for the runtime/reference migration.
- Add small validator or test adjustments when they protect route stability during migration.
- Preserve user-facing route behavior over editorial polish.

## Deferred Ideas

- README, examples, NOTICE, and release checklist migration.
- Full hard-fail stale Chinese prose gate.
- Machine-readable visual IP manifest.
- Asset manifest and visual regression checks.
- Additional visual IP routes.
- Hosted app, UI, API, database, or build runtime.
- External legal or trademark research beyond current route records.
