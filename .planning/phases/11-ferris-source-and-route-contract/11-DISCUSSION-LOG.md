# Phase 11: Ferris Source and Route Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-06-13T14:03:11+08:00
**Phase:** 11-Ferris Source and Route Contract
**Areas discussed:** Ferris source record, route metadata, NOTICE and trademark boundary, public route-status wording and sample gate, minimal validator contract

---

## Ferris Source Record

| Option | Description | Selected |
|--------|-------------|----------|
| Source record under `references/ips/ferris/source.md` | Create a Ferris-specific source/trademark record before canonical pack files exist. Reuse the Tom rights record section pattern while adapting the semantics to source attribution and trademark boundary. | yes |
| Fold source details into `routing.md` only | Keep all Phase 11 data in the route table and avoid a route-local record. | |
| Wait for Phase 12 pack index | Put source documentation into the future Ferris pack index. | |

**User's choice:** Auto-selected recommended contract-first option.
**Notes:** The roadmap requires source, author, copyright waiver, trademark policy context, distribution boundary, sample policy, and review owner in Ferris-specific documentation. `ian-xiaohei-illustrations/references/ips/tom/rights.md` provides the closest existing section pattern.

---

## Route Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Add a Phase 11 Ferris row with `source-reviewed` status | Add route metadata now with only Phase 11 contract references, preserving `default=false` and expanding later after pack files exist. | yes |
| Use `active` immediately | Treat Ferris as fully active before pack/controller/docs/validation phases complete. | |
| Use Tom-style `gated-authorized` | Mirror Tom status even though Ferris has different source and trademark characteristics. | |

**User's choice:** Auto-selected recommended route-contract option.
**Notes:** The chosen status distinguishes Ferris source review from runtime readiness. Required references stay bounded to `references/ips/ferris/source.md` in Phase 11.

---

## NOTICE and Trademark Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Add a concise Ferris attribution and trademark boundary section | Record Ferris source attribution separately from Rust trademark/endorsement status, with the source record path as the operational authority. | yes |
| Put all legal/source details in NOTICE | Make NOTICE carry the full source record. | |
| Keep NOTICE for attribution only | Leave trademark and endorsement boundary out of the public notice surface. | |

**User's choice:** Auto-selected recommended split-boundary option.
**Notes:** `NOTICE.md` already separates Littlebox source attribution from Tom permission boundary. Ferris needs a similar split while naming Rust trademark policy context.

---

## Public Route-Status Wording and Sample Gate

| Option | Description | Selected |
|--------|-------------|----------|
| Reuse one phrase across route/public/release docs | Use a shared status phrase and public generated-sample gate, with reviewer/date/status/directory/channel fields. | yes |
| Let each document phrase Ferris independently | Update each doc locally and rely on validator marker checks afterward. | |
| Delay public wording until Phase 14 | Keep Phase 11 private and add public docs later. | |

**User's choice:** Auto-selected recommended shared-phrase option.
**Notes:** Public route-status consistency is part of FRGT-03. The Tom public sample gate in `RELEASE_CHECKLIST.md` is the reusable approval-record precedent.

---

## Minimal Validator Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Add minimal Phase 11 contract checks | Validate route row, aliases, default false, suffix, source record, NOTICE markers, release gate, and Ferris path tokens. | yes |
| Wait until Phase 15 | Leave Phase 11 docs unvalidated until final validator hardening. | |
| Add full Ferris pack and leakage checks now | Validate Phase 12-15 surfaces before those artifacts exist. | |

**User's choice:** Auto-selected recommended bounded-validator option.
**Notes:** Existing validator/test files support stable ordered checks and fixture-based failure coverage. Phase 11 checks should prove the contract without requiring future Ferris pack files.

---

## Agent Discretion

- The user authorized autonomous choices at interaction points.
- All gray areas were auto-selected and resolved in one pass.
- The route status phrase, source record location, and minimal validator boundary were selected from codebase patterns and roadmap constraints.

## Deferred Ideas

- Ferris canonical pack: Phase 12.
- Skill controller/runtime integration: Phase 13.
- Full public docs, prompt examples, and agent metadata updates: Phase 14.
- Full validator hardening, leakage gates, and four-route parser tests: Phase 15.
