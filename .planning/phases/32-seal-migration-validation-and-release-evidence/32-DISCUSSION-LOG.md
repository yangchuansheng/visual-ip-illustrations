# Phase 32: Seal Migration Validation and Release Evidence - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-15T05:34:09Z
**Phase:** 32-Seal Migration Validation and Release Evidence
**Areas discussed:** Validator vocabulary and stale route detection, Historical Sealos allow rules, Node regression suite coverage, Release evidence and docs consistency, UAT smoke boundary

---

## Validator Vocabulary and Stale Route Detection

| Option | Description | Selected |
|--------|-------------|----------|
| Rename to Seal migration validation | Update Sealos-era check IDs/messages to Seal-focused names and stale migration assertions. | ✓ |
| Keep Sealos check IDs with Seal assertions | Preserve existing check IDs while changing expected markers. | |
| Add new checks only | Leave old failing checks and append new Seal checks. | |

**User's choice:** Auto-selected recommended option per delegated `--auto` behavior.
**Notes:** The current validator fails 18 checks because old Sealos route markers remain encoded as expected truth. Updating the existing validation vocabulary keeps the matrix deterministic and prevents stale active route behavior.

---

## Historical Sealos Allow Rules

| Option | Description | Selected |
|--------|-------------|----------|
| Context-bounded historical allowlist | Allow Sealos only in prior evidence, source-history, commit references, and explicit migration context. | ✓ |
| Broad token allowlist | Permit Sealos broadly after migration. | |
| Zero Sealos mentions | Remove every Sealos mention from all current files. | |

**User's choice:** Auto-selected recommended option per delegated `--auto` behavior.
**Notes:** Requirements explicitly allow historical Sealos mentions in prior milestone evidence, source-history notes, commit references, and explicit migration context. Current allowed examples include NOTICE provenance, routing source-history notes, Seal source historical notes, and Phase 32 release checklist boundary wording.

---

## Node Regression Suite Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Update fixtures to Seal migration coverage | Cover route parsing, ordering, output path migration, stale leakage fixtures, docs leakage fixtures, parser helpers, and full-pass output. | ✓ |
| Only update expected full-pass count | Make the suite green without targeted migration fixtures. | |
| Rewrite tests from scratch | Replace current fixture system with a new harness. | |

**User's choice:** Auto-selected recommended option per delegated `--auto` behavior.
**Notes:** Existing helper and fixture patterns are strong. Phase 32 should reuse them and mutate current Seal markers into stale Sealos markers for precise failure assertions.

---

## Release Evidence and Docs Consistency

| Option | Description | Selected |
|--------|-------------|----------|
| Record deterministic command evidence | Record validator, Node tests, `git diff --check`, stale scan, docs consistency, and route migration smoke evidence. | ✓ |
| Rely on summary-only evidence | Record only validator and Node summaries. | |
| Move evidence into public docs only | Put final evidence mainly in release checklist. | |

**User's choice:** Auto-selected recommended option per delegated `--auto` behavior.
**Notes:** The requirement names six evidence classes. Phase 32 should record exact outputs in verification/UAT artifacts and only update release checklist where parser-readable current Seal evidence markers are needed.

---

## UAT Smoke Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Text/route smoke without image generation | Verify Seal route selection, hoodie identity, product-neutral prompts, and output path by file inspection and route smoke prompt evidence. | ✓ |
| Generate rendered Seal samples | Use image generation as UAT proof. | |
| Skip UAT because tests pass | Treat automated validation as sufficient. | |

**User's choice:** Auto-selected recommended option per delegated `--auto` behavior.
**Notes:** Phase 32 validates migration and evidence. The user-facing output claim can be verified through route-local prompt/QA/source behavior without consuming image generation.

---

## the agent's Discretion

- Choose exact renamed check IDs and helper names, provided they are Seal-focused, stable, and traceable to `VAL-01` through `VAL-04`.
- Choose exact stale Sealos scan command, provided it distinguishes active leakage from allowed historical/migration contexts.
- Choose final validator count after check renames and fixture updates, then record the exact total in release evidence.

## Deferred Ideas

- Machine-readable visual-IP manifest, asset manifest, comparison sheets, visual regression, release packaging, and selected-IP install variants remain future requirements.
- Rendered Seal image generation remains out of scope for Phase 32 validation discussion.
