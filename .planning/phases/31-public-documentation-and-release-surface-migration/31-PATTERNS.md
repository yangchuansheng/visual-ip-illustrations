# Phase 31 Pattern Map: Public Documentation and Release Surface Migration

## Scope

Phase 31 modifies existing public and runtime-facing documentation. It creates no new runtime subsystem, dependency, validator fixture, or test file.

## Target Files and Roles

| File | Role | Closest Existing Pattern |
|------|------|--------------------------|
| `README.md` | Public route inventory, workflow, output paths, route reference list, installation and validation guidance | Existing route sections for Tom and Ferris plus the current Seal route facts from `references/routing.md` |
| `examples/prompts.md` | Copyable route prompts, legacy smoke prompts, mixed-IP examples, output path markers | Existing Tom/Ferris route smoke blocks and Phase 30 Seal prompt fields |
| `NOTICE.md` | Public attribution and route boundary document | Existing Tom permission boundary and Ferris source/trademark boundary sections |
| `RELEASE_CHECKLIST.md` | Maintainer release gates, smoke prompts, public sample policy, evidence boundaries | Existing Tom/Ferris route gates and prior Sealos section shape |
| `ian-xiaohei-illustrations/SKILL.md` | Runtime-facing route selection, route-specific planning/generation/QA/delivery instructions | Existing active Seal blocks in the same file, refreshed with Phase 30 wording |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Agent discovery metadata | Existing compact `display_name`, `short_description`, `default_prompt` fields |

## Source of Truth Files

- `ian-xiaohei-illustrations/references/routing.md` provides active route metadata for `seal`.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` provides source-history authority, hoodie identity note, logo-free note, and public sample policy.
- `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` provides product-neutral action and supporting object vocabulary.
- `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` provides planning fields, generation prompt gates, edit gates, and output path wording.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` provides Seal QA gates and delivery judgment.

## Current State Observations

- `README.md` still presents `Sealos Seal`, route id `sealos`, status `brand-owned`, `references/ips/sealos/`, and `assets/<article-slug>-sealos/`.
- `examples/prompts.md` still has Sealos Seal canonical, route-smoke, mixed-IP, and maintainer-smoke examples with product/platform language.
- `NOTICE.md` still has `Sealos Seal Brand and Canonical Image Boundary` as the active section.
- `RELEASE_CHECKLIST.md` still has Sealos source, brand, prompt leakage, public asset, generated sample, and final release gates.
- `ian-xiaohei-illustrations/SKILL.md` already uses `Seal` in most active route instructions. It still has wording such as `uploaded-image markers` and `canonical image status` that should be tightened to source-history/hoodie identity wording where public/runtime-facing.
- `ian-xiaohei-illustrations/agents/openai.yaml` still presents `Sealos Seal` and `uploaded-image authority`.

## Implementation Patterns

### README

- Keep the first-viewport identity as `Visual IP Illustrations`.
- Replace the route inventory entry with `Seal` as an explicit active product-neutral hoodie seal route.
- Preserve the exact compatibility markers: `$visual-ip-illustrations`, `ian-xiaohei-illustrations/`, and `$ian-xiaohei-illustrations`.
- Update all route output path lists so Seal uses raw and escaped `seal` paths.
- Update the directory tree so the active Seal pack is under `references/ips/seal/` and `seal-ip.md`.
- Update maintainer validation prose to mention Phase 32 as the owner of full validator restoration if the global validator still reports the known boundary.

### Prompt Examples

- Keep canonical normal-flow examples on `$visual-ip-illustrations`.
- Keep legacy smoke examples on `$ian-xiaohei-illustrations`.
- Rewrite Sealos Seal route examples as Seal route examples with `active`, `references/ips/seal/`, `references/ips/seal/source.md`, and `assets/<article-slug>-seal/`.
- Replace cloud/developer support objects with product-neutral article metaphor objects and actions from Phase 30.
- Keep mixed-IP examples as separate Xiaohei, Littlebox, Tom, Ferris, and Seal route groups.

### NOTICE

- Replace the active Sealos brand boundary section with a Seal source-history boundary section.
- Include route `Seal`, route id `seal`, route status `active`, source-history authority, hoodie identity note, logo-free behavior, and public sample review fields.
- Keep historical Sealos provenance as a bounded historical source paragraph only.

### RELEASE_CHECKLIST

- Replace Sealos release gates with Seal source-history, hoodie identity, logo-free, prompt leakage, public asset, generated sample, final review, and path marker gates.
- Preserve Tom and Ferris gates.
- Preserve Phase 32 evidence boundary for validator check IDs, stale fixtures, Node tests, and final evidence.

### SKILL.md and openai.yaml

- Keep `SKILL.md` route id `seal`, `active`, `references/ips/seal/source.md`, hoodie identity note, logo-free note, and `assets/<article-slug>-seal/`.
- Replace public/runtime-facing uploaded-image phrasing with source-history/hoodie identity phrasing.
- Update `openai.yaml` to list Seal as an explicit active product-neutral hoodie seal route while preserving Xiaohei default behavior, Tom `gated-authorized`, Ferris `source-reviewed`, and the legacy alias.

## Verification Pattern

Use deterministic scans after execution:

- `git diff --check`
- focused public docs active Seal scan over `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, and `ian-xiaohei-illustrations/agents/openai.yaml`
- route path marker scan for raw and escaped output path tokens
- NOTICE source-history scan
- agent metadata scan
- explicit Phase 32 boundary note when the full global validator remains in the known failure state
