# Phase 16: Sealos Seal Brand and Image Contract - Discussion Log

> **Audit trail only.** Planning, research, and execution agents should use `16-CONTEXT.md` as their source of decisions.

**Date:** 2026-06-13T14:17:08Z
**Phase:** 16-Sealos Seal Brand and Image Contract
**Areas discussed:** Canonical image authority, Fixed mascot markers, Prior Sealos exploration boundary, Routing metadata contract, Public sample policy, Phase 16 validator baseline

---

## Canonical Image Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Route-local `source.md` brand and canonical-image record | Create `ian-xiaohei-illustrations/references/ips/sealos/source.md` as the authority record, following the Ferris source-record pattern while replacing source/trademark fields with brand/canonical-image fields. | ✓ |
| Root public-doc summary only | Put authority wording only in README, NOTICE, and release checklist. | |
| Defer authority until Phase 17 pack creation | Wait for the full pack phase before creating the Sealos authority file. | |

**User's choice:** Authorized autonomous selection; selected route-local `source.md`.
**Notes:** This gives Phase 16 a concrete SBRD-01 artifact while keeping later pack files for Phase 17.

---

## Fixed Mascot Markers

| Option | Description | Selected |
|--------|-------------|----------|
| Full uploaded-image marker list across contract surfaces | Preserve every required visual marker as objective text in source, release, and validator surfaces. | ✓ |
| Short mascot description | Use a compact description such as white Sealos seal in cap and hoodie. | |
| Broad Sealos seal family | Allow a flexible family of Sealos seal variants. | |

**User's choice:** Authorized autonomous selection; selected full uploaded-image marker list.
**Notes:** The locked marker list is: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.

---

## Prior Sealos Exploration Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Supporting brand context only | Use earlier Sealos mascot exploration for cloud OS, developer companion, and product-domain language; keep the uploaded image as visual authority. | ✓ |
| Alternative mascot candidate pool | Treat earlier generated variants as possible selected mascot identities. | |
| Omit earlier exploration context | Use only the uploaded image and skip prior Sealos brand research. | |

**User's choice:** Authorized autonomous selection; selected supporting brand context only.
**Notes:** The selected contract keeps Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, Kubernetes, and reliable cloud developer companion as semantic context.

---

## Routing Metadata Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Existing route table plus Sealos-specific metadata block | Add Sealos row to the existing table and add a dedicated block for brand context, canonical image status, and drift boundary. | ✓ |
| Expand the global route table with new columns for every route | Add brand and canonical-image columns to the main table for all routes. | |
| Wait until Phase 18 controller integration | Keep routing metadata unchanged until runtime controller work. | |

**User's choice:** Authorized autonomous selection; selected existing route table plus Sealos-specific metadata block.
**Notes:** The selected row should use id `sealos`, display name `Sealos Seal`, `default=false`, `output_suffix=sealos`, status `brand-owned`, aliases `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.

---

## Public Sample Policy

| Option | Description | Selected |
|--------|-------------|----------|
| Pending public sample approval gate | Keep public rendered Sealos Seal samples behind release review covering uploaded-image identity, logo marks, brand wording, and drift. | ✓ |
| Publish a reviewed sample immediately | Add a public sample during Phase 16. | |
| Internal generated samples only | Allow internal review samples and skip public release policy. | |

**User's choice:** Authorized autonomous selection; selected pending public sample approval gate.
**Notes:** Internal review samples may live under `assets/<article-slug>-sealos/`; public samples require review before appearing in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.

---

## Phase 16 Validator Baseline

| Option | Description | Selected |
|--------|-------------|----------|
| Minimal Phase 16 contract checks | Repair current validator baseline and check source record, route metadata, NOTICE wording, release gate, path tokens, and public sample drift markers. | ✓ |
| Full Sealos pack validator now | Add checks for all future Sealos pack files, prompts, QA gates, docs, metadata, and leakage in Phase 16. | |
| Docs-only contract | Write the contract and leave validator changes for Phase 20. | |

**User's choice:** Authorized autonomous selection; selected minimal Phase 16 contract checks.
**Notes:** Full pack, controller, public docs, examples, metadata, and route leakage hardening remain assigned to Phases 17 through 20.

## the agent's Discretion

- The user explicitly authorized autonomous choices through interactive GSD prompts.
- The selected decisions favor route-local authority, exact uploaded-image markers, a dedicated Sealos routing metadata block, public sample release review, and minimal Phase 16 validator coverage.

## Deferred Ideas

None.
