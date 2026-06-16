# Phase 38: Go Gopher Source and Route Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-06-17
**Phase:** 38-Go Gopher Source and Route Contract
**Areas discussed:** Route metadata contract, alias boundary, source record authority, local visual authority, identity and endorsement boundary, default and route isolation

---

## Route Metadata Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Contract-first Go Gopher route | Add `gopher`, `Go Gopher`, `default=false`, `source-reviewed`, `output_suffix=gopher`, and `assets/<article-slug>-gopher/` as the Phase 38 route contract. | Yes |
| Full pack row in Phase 38 | Add all eventual Go Gopher required references before the full pack files exist. | |
| Public-docs-first route | Start with README/examples wording before source and route authority exist. | |

**User's choice:** Auto-selected contract-first Go Gopher route.
**Notes:** Phase 38 maps to `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`. Full pack, controller, docs, validation, and release evidence are later phases.

---

## Alias Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Explicit narrow aliases | Include `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, and `Gopher 吉祥物`. | Yes |
| Generic aliases | Include broad aliases such as `go`, `blue mascot`, `animal`, or `logo`. | |
| Exact-name only | Support only `Go Gopher`. | |

**User's choice:** Auto-selected explicit narrow aliases.
**Notes:** The selected alias list keeps Go Gopher selectable while preventing generic Go, blue mascot, animal, and logo prompts from routing to Go Gopher.

---

## Source Record Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local source record | Create `ian-xiaohei-illustrations/references/ips/gopher/source.md` with Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, local `gopher.png` authority, public sample policy, review owner, and route status. | Yes |
| Routing attribution only | Put source/license details only inside `routing.md`. | |
| Defer source record | Wait for the full pack phase to create source authority. | |

**User's choice:** Auto-selected route-local source record.
**Notes:** Existing Ferris and OpenClaw analogs show that source, license, visual authority, sample-policy, and review-owner facts belong in route-local authority files.

---

## Local Visual Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Local `gopher.png` visual authority | Preserve the local Go Gopher markers: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border. | Yes |
| Generic blue mascot | Allow Go Gopher to drift into a generic blue mascot, animal, logo, or abstract character. | |
| Full QA now | Define complete style, prompt, edit, and QA gates in Phase 38. | |

**User's choice:** Auto-selected local `gopher.png` visual authority.
**Notes:** Phase 38 records the authority and marker set. Phase 39 turns those markers into the full identity, style, composition, prompt, edit, and QA contract.

---

## Identity and Endorsement Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Mascot-only route boundary | Keep Go Gopher identity centered on the mascot, source attribution, CC BY 4.0 boundary, and article-illustration usage. | Yes |
| Go logo identity | Treat the Go logo as part of the route identity. | |
| Official endorsement language | Add Go project approval, sponsorship, affiliation, or endorsement claims. | |

**User's choice:** Auto-selected mascot-only route boundary.
**Notes:** Go logo identity and official endorsement claims stay out of the route contract. Source wording preserves attribution and license context.

---

## Default and Route Isolation

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve Xiaohei default and isolate Go Gopher | Keep Xiaohei as omitted-IP default and add Go Gopher as an explicit route isolated from Littlebox, Tom, Ferris, Seal, and OpenClaw. | Yes |
| Make Go Gopher default | Route omitted-IP requests to Go Gopher. | |
| Rework all routes | Use Phase 38 to revisit existing route identities, output paths, and default behavior. | |

**User's choice:** Auto-selected preserve Xiaohei default and isolate Go Gopher.
**Notes:** This follows the established multi-IP route pattern: one omitted-IP default and explicit route-local packs for all other IPs.

---

## Agent Discretion

- Auto-selected all meaningful Phase 38 discussion areas because the user provided locked decisions and requested autonomous discussion artifacts.
- Chose source/route contract language that mirrors Ferris source-reviewed and OpenClaw visual-authority precedents.
- Left exact Markdown section order in `source.md` to the planner, with required markers locked in CONTEXT.md.
- Left any optional minimal `gopher/index.md` decision to planning, bounded by the Phase 38 source/route contract.

## Deferred Ideas

- Phase 39 owns the full Go Gopher canonical pack.
- Phase 40 owns Go Gopher skill controller integration and mixed-IP dispatch.
- Phase 41 owns public documentation, examples, NOTICE, release checklist, skill docs, and agent metadata.
- Phase 42 owns validator checks, Node tests, leakage scans, public sample gates, and release evidence.
