---
status: complete
phase: 17-sealos-seal-canonical-pack
source:
  - 17-01-SUMMARY.md
  - 17-02-SUMMARY.md
  - 17-03-SUMMARY.md
started: 2026-06-13T15:45:04Z
updated: 2026-06-13T15:45:04Z
---

## Current Test

[testing complete]

## Tests

### 1. Sealos Route-Local Reference Pack Exists
expected: Maintainer can find all seven Sealos route-local references under `ian-xiaohei-illustrations/references/ips/sealos/`: `index.md`, `source.md`, `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
result: pass
evidence: `find ian-xiaohei-illustrations/references/ips/sealos -maxdepth 2 -type f | sort` listed all seven files; `wc -l` reported 775 total lines across the pack.

### 2. Planning Fields Are Present
expected: `prompt-template.md` provides stable planning fields for placement, core idea, structure type, Mascot state, Mascot action, supporting objects, visible labels, output path, and brand/canonical-image note.
result: pass
evidence: `rg -n "Placement:|Core idea:|Structure type:|Mascot state:|Mascot action:|Supporting objects:|Visible labels:|Output path: assets/<article-slug>-sealos/|Brand/canonical-image note:" ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` found every required field on lines 22-30.

### 3. One-Image Generation Contract Exists
expected: `prompt-template.md` contains an English one-image 16:9 generation contract where the uploaded white Sealos Seal mascot performs the central cognitive action.
result: pass
evidence: Lines 40-72 define `Generate one standalone 16:9 horizontal article illustration`, preserve `uploaded-image-canonical` and `uploaded-image-locked`, require the mascot action, and state the metaphor loses meaning if Sealos Seal is removed.

### 4. Edit Prompt Suite Covers Required Repairs
expected: `prompt-template.md` supports stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preservation of unaffected content.
result: pass
evidence: `prompt-template.md` contains headings `### Stronger Mascot Participation`, `### Uploaded-Image Identity Repair`, `### Logo Hoodie Cap Repair`, `### Title Removal`, `### Text Reduction`, and `### Preserve Unaffected Content`.

### 5. Composition Guidance Covers Eight Families
expected: `composition-patterns.md` covers Workflow, System Local View, Before/After, Character State, Concept Metaphor, Method Layers, Map Route, and Mini Comic.
result: pass
evidence: `rg -n "### Workflow|### System Local View|### Before/After|### Character State|### Concept Metaphor|### Method Layers|### Map Route|### Mini Comic" ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` found all eight structure family headings.

### 6. Cloud Developer Object And Action Pools Exist
expected: Composition guidance covers cloud OS, AI deployment, DevBox, database, Kubernetes, app launch, troubleshooting, workflow metaphors, supporting objects, and mascot action language while preserving fixed mascot identity.
result: pass
evidence: `composition-patterns.md` contains the required domain terms, supporting objects from `cloud OS tiles` through `service bridges`, and mascot actions from `deploy` through `guide`.

### 7. QA Rejection Categories Are Covered
expected: `qa-checklist.md` rejects D-30, D-31, and D-32 failure categories, including generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, identity marker drift, formal diagram drift, UI/code screenshot drift, and copied route composition drift.
result: pass
evidence: `qa-checklist.md` lines 37-82 enumerate D-30, D-31, D-32, removable mascot, missing brand/canonical-image note, and missing output path failures.

### 8. Route Markers And Key Links Are Coherent
expected: Operational Sealos files repeat `brand-owned`, `source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, `route leakage`, and `assets/<article-slug>-sealos/`; index, prompt, composition, and QA files link to the expected authority and repair surfaces.
result: pass
evidence: The six-file marker loop passed. Manual key-link grep found `source.md`, `uploaded-image-canonical`, `Mascot action`, the eight structure type list, `Stronger Mascot Participation`, and `qa-checklist.md` in the expected Sealos files.

### 9. Package Validation Commands Pass
expected: Local validator, Node tests, and whitespace check pass.
result: pass
evidence: `node scripts/validate-skill-package.mjs` reported `Summary: total=66 passed=66 failed=0 skipped=0`; `node --test scripts/validate-skill-package.test.mjs` reported `tests 34`, `pass 34`, `fail 0`; `git diff --check` exited 0.

## Summary

total: 9
passed: 9
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

[]
