# Phase 15: Validation Hardening - Discussion Log

> **Audit trail only.** Planning agents read `15-CONTEXT.md`.
> This log preserves the alternatives considered and the auto-selected decisions.

**Date:** 2026-06-13
**Phase:** 15-Validation Hardening
**Areas discussed:** Validator scope and runtime, Ferris route expectations, metadata expectations, release asset gates, parser and tests, stability and documentation scope

---

## Validator Scope and Runtime

| Option | Description | Selected |
|--------|-------------|----------|
| Update existing dependency-free validator | Extend `scripts/validate-skill-package.mjs`, preserve local-only execution and deterministic check order. | yes |
| Add a new validation framework | Introduce external tooling or package dependencies. | |

**User's choice:** Auto-selected from request: update the existing dependency-free Node validator only.
**Notes:** This locks FVAL-01 and keeps the project as a lightweight Codex Skill package.

---

## Ferris Route Expectations

| Option | Description | Selected |
|--------|-------------|----------|
| Full seven-file Ferris pack | Require `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` in `routing.md`. | yes |
| Source-only Ferris route | Keep `references/ips/ferris/source.md` as the only required reference. | |

**User's choice:** Auto-selected from request: Ferris `required_references` are the full seven-file canonical pack; `source.md` remains the source/trademark authority.
**Notes:** This directly targets `ROUTE-FERRIS-001` and `ROUTE-REFS-001`.

---

## Metadata Expectations

| Option | Description | Selected |
|--------|-------------|----------|
| Four-route metadata surface | Validate Xiaohei, Littlebox, Tom, and Ferris in `openai.yaml`; Xiaohei stays implicit default; Tom and Ferris stay explicit routes. | yes |
| Minimal metadata marker check | Validate only generic skill metadata fields. | |

**User's choice:** Auto-selected from request: `openai.yaml` names all four routes while preserving default Xiaohei and explicit Tom/Ferris routing.
**Notes:** This updates the `AGENT-TOM-001` expectation to the Phase 14 metadata surface.

---

## Release Asset Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Accept Phase 14 checklist policy wording | Validate Ferris public asset and generated sample policy records, including pending reviewer/date/status fields and explicit release review boundary. | yes |
| Require approved records before public assets exist | Treat pending records as invalid even when no public Ferris rendered assets are present. | |

**User's choice:** Auto-selected from request: accept Phase 14 release checklist wording and enforce approval completeness only when public assets require it.
**Notes:** This targets `RELEASE-FERRIS-001`, `BOUNDARY-FERRIS-IMG-001`, FVAL-06, and generated sample policy coverage.

---

## Parser and Tests

| Option | Description | Selected |
|--------|-------------|----------|
| Full Node coverage expansion | Cover route parser behavior, Ferris full-pack route, failure messages, public asset gates, generated sample gates, route leakage, and full-pass output. | yes |
| Patch current failing assertions only | Update the red tests with minimal expectation changes. | |

**User's choice:** Auto-selected from request: expand Node tests across parser behavior, route expectations, gates, leakage, and full-pass output.
**Notes:** This locks FVAL-07 and replaces current source-only Ferris test expectations.

---

## Stability and Documentation Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve output shape and keep docs churn scoped | Keep `[PASS]/[FAIL] ID message`, stable ordering, actionable paths, no network, no generated assets, and limited docs/evidence updates. | yes |
| Broaden release docs and product docs during validation | Use Phase 15 to broadly rewrite public docs. | |

**User's choice:** Auto-selected from request: preserve validator stability and limit documentation changes to validation docs/evidence or real source inconsistencies.
**Notes:** This keeps Phase 15 focused on validation hardening and local evidence.

---

## the agent's Discretion

- The planner may add precise Ferris check IDs when they make failures clearer.
- The planner may tune exact marker strings while staying aligned with Phase 14 public docs and `source.md` authority.

## Deferred Ideas

- Machine-readable mascot/source/trademark manifests.
- Automated visual likeness judgment.
- Release packaging scripts, visual regression, asset manifests, and route selector tooling.
