# Phase 21: Naming and Compatibility Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md. This log preserves the alternatives considered.

**Date:** 2026-06-14T16:00:00+08:00
**Phase:** 21-Naming and Compatibility Contract
**Areas discussed:** Canonical naming surface, Legacy alias compatibility, Route and output path stability, Phase sequencing boundaries

---

## Canonical Naming Surface

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical Visual IP identity | Use `Visual IP Illustrations`, `visual-ip-illustrations`, and `$visual-ip-illustrations` as the canonical product, slug, and skill id. | yes |
| Xiaohei-centered identity | Keep `Ian Xiaohei Illustrations`, `ian-xiaohei-illustrations`, and `$ian-xiaohei-illustrations` as primary public identity. | |
| Hybrid primary identity | Lead public surfaces with both names equally during v1.4. | |

**User's choice:** Auto-selected canonical Visual IP identity.
**Notes:** Selected because the user instructed autonomous decisions and Phase 21 requirements RBRD-01, RBRD-02, and RBRD-03 already name the canonical product, slug, and skill id.

---

## Legacy Alias Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve documented legacy alias through v1.4 | Keep `$ian-xiaohei-illustrations` visible as a compatibility alias while canonical `$visual-ip-illustrations` rolls out. | yes |
| Immediate canonical-only invocation | Move public examples to `$visual-ip-illustrations` and remove legacy invocation from primary compatibility surfaces. | |
| Silent compatibility | Keep old invocation behavior while removing visible legacy docs. | |

**User's choice:** Auto-selected documented legacy alias compatibility through v1.4.
**Notes:** Selected because the user instructed autonomous decisions and RBRD-04 explicitly requires continued legacy invocation during the transition.

---

## Route and Output Path Stability

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve all shipped routes and output paths | Keep Xiaohei default behavior, explicit Littlebox/Tom/Ferris/Sealos routes, route ids, statuses, required references, output suffixes, raw paths, and escaped path tokens stable during the rebrand. | yes |
| Rename route ids with the project | Change route ids or output suffixes to match the new Visual IP naming surface. | |
| Consolidate output paths | Move outputs into a new canonical folder shape during the rebrand. | |

**User's choice:** Auto-selected shipped route and output path preservation.
**Notes:** Selected because the user instructed autonomous decisions and the objective explicitly says route behavior and output paths stay stable during rebrand.

---

## Phase Sequencing Boundaries

| Option | Description | Selected |
|--------|-------------|----------|
| Contract first, migration next | Phase 21 writes the naming contract. Phase 22 defines package-path handling and migration guidance. Phase 23 updates public docs. Phase 24 validates. | yes |
| Rename package path in Phase 21 | Fold package path migration into the naming contract phase. | |
| Public docs first | Update README and examples before package metadata and compatibility rules are locked. | |

**User's choice:** Auto-selected contract first, migration next.
**Notes:** Selected because the user instructed autonomous decisions and the objective says one explicit naming contract comes before package metadata and public docs change. The installable legacy directory may continue to exist as the compatibility source until Phase 22 migration guidance defines package-path handling.

---

## the agent's Discretion

- Auto mode selected all gray areas because the user requested the equivalent of `$gsd-discuss-phase 21 --auto`.
- Auto mode selected the recommended conservative compatibility option in each area.
- Deferred v2 package selector, machine-readable visual-IP manifest, and full repository rename logistics to future distribution work.

## Deferred Ideas

- v2 package selector through CLI-level variant selection.
- Full repository rename and remote URL migration after v1.4 compatibility guidance.
- Machine-readable visual-IP manifest for future route/source/brand records.
