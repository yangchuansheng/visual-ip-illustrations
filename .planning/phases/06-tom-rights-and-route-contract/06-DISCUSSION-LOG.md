# Phase 6: Tom Rights and Route Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13T01:04:28+08:00
**Phase:** 6-Tom Rights and Route Contract
**Areas discussed:** Tom rights record, NOTICE boundary, route status contract, public rendered Tom sample gate, Tom route metadata

---

## Tom Rights Record

| Option | Description | Selected |
|--------|-------------|----------|
| Dedicated rights document | Put Tom rights fields in `ian-xiaohei-illustrations/references/ips/tom/rights.md` as a maintainer audit record. | ✓ |
| Inline route note only | Put a short rights note in `routing.md` and rely on public docs for the rest. | |
| Release checklist only | Track rights fields only during release review. | |

**User's choice:** Auto-selected dedicated rights document.
**Notes:** User provided the exact path and required fields: source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner.

---

## NOTICE Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Attribution and permission split | Make `NOTICE.md` state that attribution is descriptive/source context and permission is authorization-scope specific. | ✓ |
| Attribution-only section | Add Tom source attribution without explicit authorization-scope language. | |
| Route-only permission note | Keep NOTICE short and place permission language only in routing docs. | |

**User's choice:** Auto-selected attribution and permission split.
**Notes:** This creates a stable wording rule that downstream docs can reuse.

---

## Route Status Contract

| Option | Description | Selected |
|--------|-------------|----------|
| `gated-authorized` status | Use one explicit status token across routing docs, README, examples, and release checklist; keep Tom default false. | ✓ |
| `gated` status | Use a shorter token and explain authorization elsewhere. | |
| `authorized` status | Treat authorization as enough for route availability. | |

**User's choice:** Auto-selected `gated-authorized` status.
**Notes:** User required the exact token. The status stays until release approval is complete.

---

## Public Rendered Tom Sample Gate

| Option | Description | Selected |
|--------|-------------|----------|
| Checklist approval gate | Block public rendered Tom assets until `RELEASE_CHECKLIST.md` records explicit public-sample approval. | ✓ |
| Private samples allowed in docs | Allow generated Tom samples in docs if marked as gated. | |
| Validator-only gate | Rely only on script checks for asset directory names. | |

**User's choice:** Auto-selected checklist approval gate.
**Notes:** Phase 6 defines the gate and avoids adding rendered Tom assets.

---

## Tom Route Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Full Tom route row | Add Tom aliases, default false, output suffix `tom`, future required references, attribution context, and `gated-authorized` status. | ✓ |
| Minimal placeholder row | Add only `id`, aliases, and status for later phases to complete. | |
| Defer route row to controller phase | Keep Phase 6 focused on rights docs and let Phase 8 add routing. | |

**User's choice:** Auto-selected full Tom route row contract.
**Notes:** User supplied aliases and required metadata. Phase 6 captures the contract; later phases can implement the referenced pack and controller behavior.

## the agent's Discretion

- Auto mode was explicitly authorized, so no interactive questions were asked.
- All gray areas were selected automatically.
- The agent selected the most conservative release-gated option for every decision.
- The workflow auto-mode overlay normally advances to planning, but the user explicitly required stopping after discussion artifacts are created and committed.

## Deferred Ideas

- Tom canonical pack content belongs to Phase 7.
- Skill controller integration and three-IP variant grouping belong to Phase 8.
- Broad public docs, examples, and agent metadata updates belong to Phase 9.
- Full validator tests and leakage hardening belong to Phase 10.
