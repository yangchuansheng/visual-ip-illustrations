# Phase 28: English-Default Validation and Release Evidence - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T18:45:00Z
**Phase:** 28-English-Default Validation and Release Evidence
**Areas discussed:** Final validation gate, Check IDs and test matrix, Multilingual exception contract, Release evidence and UAT

---

## Final Validation Gate

| Option | Description | Selected |
|--------|-------------|----------|
| Default hard-fail | Normal `node scripts/validate-skill-package.mjs` fails stale Chinese prose outside approved exceptions. | yes |
| Enforce-only hard-fail | Keep stale-prose hard failure only behind `LANGUAGE_SCAN_ENFORCE=1`. | |
| Report-only scan | Report stale findings while keeping the validator green. | |

**User's choice:** the agent selected default hard-fail based on the user's instruction to make decisions and proceed.
**Notes:** Phase 25 introduced the hard-fail intent, and Phase 26/27 finished content migration, so Phase 28 can make stale prose a release blocker.

---

## Check IDs and Test Matrix

| Option | Description | Selected |
|--------|-------------|----------|
| `VAL-*` checks | Add final Phase 28 check ids after `LANG-*` and before `BOUNDARY-*`. | yes |
| Extend `LANG-*` checks | Fold final coverage into existing language checks. | |
| Rename to `ENGLISH-*` | Add a new prefix specific to English-default coverage. | |

**User's choice:** the agent selected `VAL-*` checks.
**Notes:** `VAL-*` maps directly to VAL-01 through VAL-04 and keeps Phase 28 requirement traceability readable.

---

## Multilingual Exception Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve narrow exceptions | Keep exact token or anchored-pattern allowlist entries by path scope and category. | yes |
| Tighten to English-only | Remove route aliases, prompt placeholders, visible labels, and Chinese article fixtures. | |
| Broad path allowlist | Permit Han text by file or folder path. | |

**User's choice:** the agent selected narrow exceptions.
**Notes:** Compatibility requires Chinese route aliases, user-language visible labels, prompt placeholders, source names, smoke fixtures, and Chinese article illustration examples.

---

## Release Evidence and UAT

| Option | Description | Selected |
|--------|-------------|----------|
| Verification + UAT artifacts | Record command evidence in `28-VERIFICATION.md` and migration smoke outcomes in `28-UAT.md`. | yes |
| Checklist-only evidence | Keep final evidence only in `RELEASE_CHECKLIST.md`. | |
| Command output only | Rely on terminal output without durable planning artifacts. | |

**User's choice:** the agent selected verification plus UAT artifacts.
**Notes:** Prior phases use `*-VERIFICATION.md` and `*-UAT.md`, and Phase 28 is the final milestone release evidence gate.

---

## the agent's Discretion

- Choose exact helper names and fixture layout in the validator and Node tests.
- Add a narrow `RELEASE_CHECKLIST.md` v1.5 gate only when the plan needs a public release checklist anchor.
- Keep assertions based on stable headings, paths, route ids, policy references, approval records, and behavior tokens.

## Deferred Ideas

None.
