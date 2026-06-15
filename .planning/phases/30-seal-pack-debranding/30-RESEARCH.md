# Phase 30 Research: Seal Pack Debranding

## RESEARCH COMPLETE

## Scope

Phase 30 is a route-local Markdown reference migration. It updates the active Seal pack under `ian-xiaohei-illustrations/references/ips/seal/` so selected `seal` behavior reads as a product-neutral hoodie seal article-illustration route.

No package install, framework change, app runtime, database, API, UI, or external service is involved.

## Findings

### Existing State

- Phase 29 already migrated active controller routing to route id `seal`, display name `Seal`, output suffix `seal`, output directory `assets/<article-slug>-seal/`, and required references under `references/ips/seal/`.
- The seven Seal pack files exist and are live through `references/routing.md` and `SKILL.md`.
- The current route-local pack contents still carry active Sealos product and brand language, including `Sealos Seal`, `brand-owned`, `Brand/canonical-image authority`, `cloud OS`, `AI-native deployment`, `DevBox`, `database`, `app deployment`, `Kubernetes`, and cloud-developer prop pools.
- Phase 31 owns public README, examples, NOTICE, release checklist, skill broad docs, and agent metadata.
- Phase 32 owns validator check-id cleanup, stale leakage fixtures, final evidence, and UAT.

### Planning Implications

- The implementation should rewrite existing route-local files in place. A parallel pack would create stale route ambiguity because `routing.md` already points to `references/ips/seal/`.
- Split the phase by route-local responsibility:
  - Plan 30-01: source, navigation, style, character identity, and composition vocabulary.
  - Plan 30-02: prompt generation, edit repair, QA judgment, and delivery wording.
- Both plans can run in wave 1 because their `files_modified` sets do not overlap. Each plan must include concrete target vocabulary so executors do not depend on another parallel plan's edits.

## Target Vocabulary

Use these active route terms across route-local operational behavior:

- Character route: `Seal`
- Route id: `seal`
- Route status: `active`
- Output path: `assets/<article-slug>-seal/`
- Authority: `source-history authority`
- Identity note: `hoodie seal identity note`
- Character description: `active product-neutral hoodie seal article character`
- Historical boundary: earlier Sealos context appears only inside `source.md` historical notes.

## Hoodie Seal Markers

Preserve the full identity marker set:

- white rounded seal body
- plain navy cap
- plain deep-blue hoodie
- glossy dark eyes
- black nose
- whisker dots
- small smile
- short rounded flippers
- compact legs
- side-rear white tail

Keep the logo-free markers:

- plain cap
- plain hoodie chest
- mark-free mascot body
- mark-free props
- mark-free scene
- no logo-like wave or cloud mark
- no emblem
- no text badge

## Product-Neutral Article Metaphors

Use object pools that explain article ideas without product/platform context:

- maps
- stepping stones
- bridges
- levers
- knots
- shelves
- signposts
- lamps
- shields
- stamps
- keys
- trails
- gates
- scales
- buckets
- envelopes
- threads
- lenses
- compasses
- small hand-built machines

Use cognitive action verbs:

- inspect
- repair
- shield
- bridge
- tune
- roll back
- stamp
- sort
- assemble
- guide
- lift
- connect
- untangle
- weigh
- map
- carry
- compare
- mark

## Route-Local Leakage Terms

Active route-local operational files should remove active behavior references to:

- `Sealos Seal`
- `brand-owned`
- `Brand/canonical-image`
- `brand/canonical-image`
- `cloud OS`
- `AI-native deployment`
- `DevBox`
- `database hosting`
- `app deployment`
- `Kubernetes`
- `Sealos platform`
- `cloud platform`
- `cloud-developer`
- `advertising`
- `promotional`

`source.md` can keep bounded provenance wording in a historical source notes section.

## Verification Strategy

Use the existing deterministic repo loop:

- `node scripts/validate-skill-package.mjs`
- `node --test scripts/validate-skill-package.test.mjs`
- `git diff --check`

Add focused route-local scans because Phase 32 owns validator fixture cleanup:

- Scan Plan 30-01 files for active Sealos/product/platform leakage outside `source.md` historical notes.
- Scan Plan 30-02 files for prompt/edit/QA/delivery leakage terms.
- Scan the full route-local Seal pack for required target phrases: `Route status: active`, `source-history authority`, `hoodie seal identity note`, `assets/<article-slug>-seal/`, and selected product-neutral action/object vocabulary.

## Security Notes

The phase changes static Markdown instructions consumed by a local Codex skill. The relevant trust boundary is user article content flowing into prompt templates and generated-image delivery wording. Mitigations are route-local wording isolation, sparse copied labels, no secrets, no external calls, and no package installs.

## Out of Scope

- Public docs and examples.
- NOTICE and release checklist wording.
- Agent metadata.
- Validator check IDs and stale fixture hardening.
- Final release evidence and UAT.
