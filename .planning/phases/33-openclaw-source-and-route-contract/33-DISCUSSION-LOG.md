# Phase 33: OpenClaw Source and Route Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-06-16
**Phase:** 33-OpenClaw Source and Route Contract
**Areas discussed:** Route metadata contract, alias boundary, source record authority, uploaded-logo authority, default and route isolation

---

## Route Metadata Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Contract-first OpenClaw route | Add `openclaw`, `OpenClaw`, `default=false`, `source-reviewed`, `output_suffix=openclaw`, and `assets/<article-slug>-openclaw/` as the Phase 33 route contract. | Yes |
| Full pack row in Phase 33 | Add all eventual OpenClaw required references before the full pack files exist. | |
| Public-docs-first route | Start with README/examples wording before source and route authority exist. | |

**User's choice:** Auto-selected contract-first OpenClaw route.
**Notes:** Phase 33 maps to `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`. Full pack, controller, docs, validation, and release evidence are later phases.

---

## Alias Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Explicit narrow aliases | Use exactly `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, `OpenClaw 助手`, and `OpenClaw 吉祥物`. | Yes |
| Generic aliases | Include broad aliases such as `assistant`, `red mascot`, `crab`, or `logo`. | |
| Exact-name only | Support only `OpenClaw` and `openclaw`. | |

**User's choice:** Auto-selected explicit narrow aliases.
**Notes:** The selected alias list keeps OpenClaw selectable while preventing generic assistant, red mascot, crab, and logo prompts from routing to OpenClaw.

---

## Source Record Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local source record | Create `ian-xiaohei-illustrations/references/ips/openclaw/source.md` with official repository, MIT license, OpenClaw Foundation copyright, uploaded-logo authority, public sample policy, review owner, and route status. | Yes |
| Routing attribution only | Put source/license details only inside `routing.md`. | |
| Defer source record | Wait for the full pack phase to create source authority. | |

**User's choice:** Auto-selected route-local source record.
**Notes:** Existing Ferris and Seal analogs show that source, license, uploaded-image, sample-policy, and review-owner facts belong in route-local authority files.

---

## Uploaded-Logo Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Uploaded-logo visual authority | Preserve the uploaded OpenClaw logo markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs. | Yes |
| Generic red mascot | Allow OpenClaw to drift into a generic red mascot, crab, logo, robot, or abstract mascot. | |
| Full QA now | Define complete style, prompt, edit, and QA gates in Phase 33. | |

**User's choice:** Auto-selected uploaded-logo visual authority.
**Notes:** Phase 33 records the authority and marker set. Phase 34 turns those markers into the full identity, style, composition, prompt, edit, and QA contract.

---

## Default and Route Isolation

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve Xiaohei default and isolate OpenClaw | Keep Xiaohei as omitted-IP default and add OpenClaw as an explicit route isolated from Littlebox, Tom, Ferris, and Seal. | Yes |
| Make OpenClaw default | Route omitted-IP requests to OpenClaw. | |
| Rework all routes | Use Phase 33 to revisit existing route identities, output paths, and default behavior. | |

**User's choice:** Auto-selected preserve Xiaohei default and isolate OpenClaw.
**Notes:** This follows the established multi-IP route pattern: one omitted-IP default and explicit route-local packs for all other IPs.

---

## Agent Discretion

- Auto-selected all meaningful Phase 33 discussion areas because the user provided locked decisions and requested only the discussion artifacts.
- Chose source/route contract language that mirrors Ferris source-reviewed and Seal uploaded-authority precedents.
- Left exact Markdown section order in `source.md` to the planner, with required markers locked in CONTEXT.md.
- Left any optional minimal `openclaw/index.md` decision to planning, bounded by the Phase 33 source/route contract.

## Deferred Ideas

- Phase 34 owns the full OpenClaw canonical pack.
- Phase 35 owns OpenClaw skill controller integration and mixed-IP dispatch.
- Phase 36 owns public documentation, examples, NOTICE, release checklist, skill docs, and agent metadata.
- Phase 37 owns validator checks, Node tests, leakage scans, public sample gates, and release evidence.
