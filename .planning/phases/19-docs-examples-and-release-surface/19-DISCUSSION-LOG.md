# Phase 19: Docs, Examples, and Release Surface - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13T16:29:11Z
**Phase:** 19-docs-examples-and-release-surface
**Areas discussed:** README route docs, prompt examples, agent metadata, NOTICE and release materials, release checklist gates, cross-document wording consistency

---

## README Route Docs

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 16 placeholder wording | Leave Sealos as "under preparation" and defer route-ready public docs | |
| Promote to explicit brand mascot route | Reflect completed Phase 17 pack and Phase 18 controller integration, while preserving release-gated public samples | ✓ |
| Rewrite all route docs from scratch | Larger editorial pass across all IP routes | |

**User's choice:** Authorized autonomous choices; selected the route-ready public docs option.
**Notes:** Phase 18 verified Sealos controller behavior, so README should move beyond Phase 16 route-status language.

---

## Prompt Examples

| Option | Description | Selected |
|--------|-------------|----------|
| Add only a Sealos smoke prompt | Minimal SDOC coverage, leaves users without planning/generation examples | |
| Add planning, generation, smoke, and five-IP mixed prompts | Covers user copyability and maintainer smoke behavior for SDOC-02 | ✓ |
| Add full edit prompt examples too | Useful later, broader than Phase 19 success criteria | |

**User's choice:** Authorized autonomous choices; selected complete SDOC-02 prompt coverage.
**Notes:** Prompt examples should use `prompt-template.md` planning fields and current route authority.

---

## Agent Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Keep four-IP metadata | Avoid touching metadata but leaves discovery stale | |
| Add Sealos Seal to display copy | Names all five IP routes and preserves Xiaohei default semantics | ✓ |
| Add detailed Sealos marker list to metadata | Increases metadata length and duplicates route references | |

**User's choice:** Authorized autonomous choices; selected concise five-IP discovery metadata.
**Notes:** Detailed identity rules belong in public docs, release gates, routing docs, and route-local references.

---

## NOTICE And Release Materials

| Option | Description | Selected |
|--------|-------------|----------|
| Leave Phase 16 NOTICE as-is | Existing Sealos section may be enough but Phase 19 consistency remains unverified | |
| Align NOTICE with route-ready docs | Preserve uploaded-image authority and prior exploration boundary while matching README and release wording | ✓ |
| Move all brand rules into NOTICE | Duplicates `source.md` and release checklist | |

**User's choice:** Authorized autonomous choices; selected NOTICE alignment.
**Notes:** NOTICE should remain a public boundary record and point to `source.md` for operational authority.

---

## Release Checklist Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Keep only the Phase 16 Sealos gate | Leaves global route smoke, package boundary, and public-doc checks stale | |
| Expand global and Sealos-specific gates | Covers SDOC-05 and prepares Phase 20 validation evidence | ✓ |
| Implement validator checks now | Belongs to Phase 20 | |

**User's choice:** Authorized autonomous choices; selected release checklist expansion.
**Notes:** Phase 19 should reference validator commands, while Phase 20 owns new assertions and Node hardening.

---

## Cross-Document Wording Consistency

| Option | Description | Selected |
|--------|-------------|----------|
| Allow each doc to phrase Sealos independently | Faster but increases marker drift risk | |
| Standardize canonical wording across public docs | Uses Sealos Seal, brand-owned, uploaded-image-canonical, uploaded-image-locked, and source.md consistently | ✓ |
| Move wording to a new shared glossary | New artifact outside Phase 19 requirements | |

**User's choice:** Authorized autonomous choices; selected canonical wording consistency.
**Notes:** This supports SDOC-06 and gives Phase 20 stable marker targets.

---

## the agent's Discretion

- User authorized autonomous recommended/default choices.
- The agent selected all meaningful Phase 19 gray areas and resolved them in favor of coherent docs-first release-surface alignment.
- The agent kept implementation, validator hardening, and generated sample publication out of Phase 19 discussion scope.

## Deferred Ideas

None.
