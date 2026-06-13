# Phase 17: Sealos Seal Canonical Pack - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13T15:30:00Z
**Phase:** 17-sealos-seal-canonical-pack
**Areas discussed:** Pack shape and route isolation, mascot identity and style, planning and prompt contract, cloud developer composition language, QA and edit gates

---

## Pack Shape and Route Isolation

| Option | Description | Selected |
|--------|-------------|----------|
| Ferris-style seven-file pack | Create `index.md`, keep existing `source.md`, and add `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` under `references/ips/sealos/`. This matches the current mascot route pattern and the Phase 16 routing row. | yes |
| Minimal pack | Add only the missing prompt and QA files, then rely on `source.md` for identity and brand details. This would leave later controller and validator work with weaker operational boundaries. | |
| Expanded manifest pack | Add a machine-readable manifest in Phase 17. This creates a broader asset/source system that belongs to v2 requirements. | |

**User's choice:** Autonomous default approved by the user; selected Ferris-style seven-file pack.
**Notes:** Phase 16 already lists the seven planned Sealos references in `references/routing.md`. Phase 17 should fill the route-local operational files and preserve `source.md` as authority.

---

## Mascot Identity and Style

| Option | Description | Selected |
|--------|-------------|----------|
| Uploaded-image hard authority | Treat the uploaded white seal with navy cap, deep-blue hoodie, Sealos logo marks, face details, flippers, compact legs, and side-rear tail as fixed route identity. | yes |
| Brand-language authority | Let Sealos brand personality guide new mascot variants while keeping the seal concept loose. This increases drift risk. | |
| Generic seal mascot system | Define a broad seal mascot style for Sealos-themed scenes. This conflicts with the Phase 16 uploaded-image contract. | |

**User's choice:** Autonomous default approved by the user; selected uploaded-image hard authority.
**Notes:** Phase 16 verification confirms the fixed marker list appears in `source.md`, `routing.md`, and `RELEASE_CHECKLIST.md`.

---

## Planning and Prompt Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Stable Sealos planning fields | Require placement, core idea, structure type, mascot state, mascot action, supporting objects, visible labels, output path, and brand/canonical-image note. This directly satisfies SIP-02. | yes |
| Generic route planning fields | Reuse generic character fields from earlier packs and adapt wording later in the controller. This weakens route-specific validator readiness. | |
| Prompt-only contract | Focus on generation prompt text and leave planning fields to Phase 18. This delays a Phase 17 success criterion. | |

**User's choice:** Autonomous default approved by the user; selected stable Sealos planning fields.
**Notes:** Generation prompts should remain English for model consistency. Planning and delivery notes can follow the user's language.

---

## Cloud Developer Composition Language

| Option | Description | Selected |
|--------|-------------|----------|
| Cloud developer metaphor system | Support cloud OS, AI deployment, DevBox, database, Kubernetes, app launch, troubleshooting, and workflow families through low-tech supporting objects and active mascot actions. | yes |
| Product-screenshot vocabulary | Use UI, terminal, Kubernetes dashboard, and IDE scenes as visual anchors. This would drift from the sparse article-illustration system. | |
| Pure brand mascot scenes | Focus on Sealos logo and mascot poses with light cloud props. This weakens article-level cognitive action. | |

**User's choice:** Autonomous default approved by the user; selected cloud developer metaphor system.
**Notes:** Supporting object pool should include cloud OS tiles, deployment rails, DevBox workbenches, database cylinders, Kubernetes pods, app launch pads, traffic routes, incident cones, log slips, config keys, health checks, rollback handles, workflow gates, and service bridges.

---

## QA and Edit Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local failure taxonomy plus edit suite | Define shared failure categories, QA pass/fail rules, and edit prompts for participation, identity, cap/hoodie/logo repair, title removal, text reduction, and unaffected-content preservation. | yes |
| Basic QA checklist | Cover only obvious visual failures and let later phases refine edit prompts. This under-serves SIP-05 and SIP-06. | |
| Validator-first taxonomy | Define only marker names for Phase 20 and postpone human-readable QA behavior. This weakens actual skill usability. | |

**User's choice:** Autonomous default approved by the user; selected route-local failure taxonomy plus edit suite.
**Notes:** Shared failure categories should be generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage.

---

## the agent's Discretion

- User authorized autonomous choices and requested Phase 17 discussion/context only.
- The agent selected all phase-critical gray areas because SIP-01 through SIP-06 require pack shape, identity, composition, prompt, QA, and edit decisions.
- The agent used Phase 16 context, verification, UAT, `source.md`, `routing.md`, roadmap, requirements, project state, codebase maps, and existing Ferris route pack patterns as the decision basis.

## Deferred Ideas

None.
