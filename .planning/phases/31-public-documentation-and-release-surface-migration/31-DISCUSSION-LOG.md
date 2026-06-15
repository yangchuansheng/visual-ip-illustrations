# Phase 31: Public Documentation and Release Surface Migration - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-06-15T04:47:33Z
**Phase:** 31-Public Documentation and Release Surface Migration
**Areas discussed:** README route surface, prompt examples, NOTICE and release checklist, skill instructions and agent metadata, Phase 32 boundary

---

## README Route Surface

| Option | Description | Selected |
|--------|-------------|----------|
| Migrate active route wording to Seal | Present `Seal`, `seal`, `active`, `assets/<article-slug>-seal/`, route-local `references/ips/seal/`, product-neutral hoodie seal identity, and logo-free behavior across README route inventory, output paths, route details, and mixed-IP wording. | yes |
| Keep Sealos Seal public wording until final validation | Leave README aligned with the v1.3 Sealos route until Phase 32. | |
| Split migration between README and release checklist only | Update public overview and release materials while leaving workflow/path examples stale. | |

**User's choice:** Auto-selected recommended option.
**Notes:** Phase 29 and Phase 30 already made the active route `Seal`; README is now the highest-impact public stale surface for `DOC-01`.

---

## Prompt Examples

| Option | Description | Selected |
|--------|-------------|----------|
| Add product-neutral Seal prompt examples | Update `examples/prompts.md` normal-flow, multi-IP, route smoke, generation, and path examples to use Seal route wording, `references/ips/seal/`, hoodie seal identity note, logo-free note, and `assets/<article-slug>-seal/`. | yes |
| Update only the multi-IP example | Fix the most obvious stale multi-route prompt and leave route-smoke examples for Phase 32. | |
| Keep examples unchanged as compatibility fixtures | Treat old examples as stale fixture material for later validation. | |

**User's choice:** Auto-selected recommended option.
**Notes:** `DOC-02` requires copyable examples, so Phase 31 should update public example prompts directly. Phase 32 can then turn the final wording into leakage fixtures and tests.

---

## NOTICE and Release Checklist

| Option | Description | Selected |
|--------|-------------|----------|
| Replace active Sealos gates with Seal source-history gates | Update NOTICE and RELEASE_CHECKLIST to describe Seal as product-neutral, logo-free, active, source-history based, and free of active Sealos brand wording while keeping historical provenance bounded. | yes |
| Keep Sealos release gates as v1.3 history | Preserve the old route section as-is and add a small Seal note. | |
| Move all Sealos cleanup to Phase 32 | Leave NOTICE and checklist stale until validator work. | |

**User's choice:** Auto-selected recommended option.
**Notes:** `DOC-03` explicitly covers NOTICE and release checklist. The decision preserves historical source notes while migrating active release behavior.

---

## Skill Instructions and Agent Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Polish runtime-facing Seal docs and metadata | Keep `SKILL.md` route behavior stable, align broad Seal wording with Phase 30 source-history/product-neutral language, and update `agents/openai.yaml` to present Seal as an explicit active product-neutral route. | yes |
| Update only `openai.yaml` | Fix agent discovery text while leaving `SKILL.md` as-is. | |
| Treat metadata migration as validation work | Leave metadata stale for Phase 32. | |

**User's choice:** Auto-selected recommended option.
**Notes:** `SKILL.md` is already mostly migrated from Phase 29/30. `openai.yaml` still names Sealos Seal and is a direct `DOC-04` target.

---

## Phase 32 Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve validation hardening for Phase 32 | Phase 31 updates public/runtime docs only. Validator check IDs, stale leakage fixtures, Node tests, full-pass evidence, and UAT stay in Phase 32. | yes |
| Attempt full validator restoration in Phase 31 | Update docs and validation in one phase. | |
| Defer public docs until validator expectations are ready | Wait for validation work before changing public text. | |

**User's choice:** Auto-selected recommended option.
**Notes:** Phase 30 verification records the expected boundary: validator 92/98 and Node 51/66 until Phase 32.

## the agent's Discretion

- Exact English copy and section ordering in README, NOTICE, and RELEASE_CHECKLIST.
- Exact Seal route prompt phrasing in `examples/prompts.md`, as long as it follows Phase 30 product-neutral article metaphor rules.
- Whether to rename the old Sealos release section in place or rewrite it into a new Seal release section.

## Deferred Ideas

- Phase 32 validator check-id cleanup, stale Sealos leakage fixtures, docs leakage fixtures, prompt leakage fixtures, Node regression updates, final release evidence, and UAT.
- Future machine-readable route manifest, asset manifest, comparison sheets, visual regression, release packaging, and selected-IP install variants.
