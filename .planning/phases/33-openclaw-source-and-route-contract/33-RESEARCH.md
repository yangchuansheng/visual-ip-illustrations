# Phase 33 Research: OpenClaw Source and Route Contract

## Scope

Phase 33 should create the smallest durable OpenClaw contract: one explicit route row in `ian-xiaohei-illustrations/references/routing.md` and one source record at `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.

The phase should cover `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`. It should preserve Xiaohei as the omitted-IP default and keep Littlebox, Tom, Ferris, Seal, and OpenClaw as explicit isolated routes.

Later phases own the full OpenClaw pack, controller dispatch, public docs, agent metadata, validator hardening, test fixtures, and release evidence.

## Source Facts

- Official repository: `https://github.com/openclaw/openclaw`.
- Phase 33 latest live HEAD check recorded for 2026-06-16: `c14793d35a10936ddea833e7808083fe57930616`.
- Source record should label this as an inspected Phase 33 snapshot because upstream HEAD may move during implementation.
- License: MIT License.
- Copyright: `Copyright (c) 2026 OpenClaw Foundation`.
- README positioning: OpenClaw is a personal AI assistant.
- README product framing: OpenClaw is a personal, single-user assistant that runs on the user's own devices.
- Route id target: `openclaw`.
- Route display name target: `OpenClaw`.
- Route default target: `false`.
- Route status target: `source-reviewed`.
- Route output suffix target: `openclaw`.
- Route output target: `assets/<article-slug>-openclaw/`.
- Escaped output marker target for docs and validators: `assets/&lt;article-slug&gt;-openclaw/`.
- Uploaded logo marker target: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, short legs.
- OpenClaw aliases target: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, `OpenClaw 助手`, `OpenClaw 吉祥物`.
- Generic alias exclusion target: `assistant`, `red mascot`, `crab`, and `logo` stay outside the OpenClaw alias set.

## Existing Patterns

`routing.md` is the central source for route selection, route metadata, output suffixes, required references, attribution context, route statuses, mixed-IP grouping, output path markers, and delivery fields.

Existing route table rows use these fields: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.

Xiaohei is the only `default=true` route. Littlebox, Tom, Ferris, Seal, and OpenClaw should stay `default=false` and selectable through explicit route aliases.

Ferris is the nearest source-reviewed precedent. `references/ips/ferris/source.md` records source context, author/source sites, copyright waiver context, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.

Seal is the nearest uploaded-image authority precedent. `references/ips/seal/source.md` records canonical image status, drift boundary, fixed visual markers, sample policy, route status, allowed use, restricted use, distribution boundary, and review owner.

Phase 33 should combine the Ferris source-reviewed shape with the Seal fixed-marker shape: OpenClaw source authority comes from the official repository and MIT license, while visual identity authority comes from the uploaded logo marker set.

## Implementation Surfaces

- `ian-xiaohei-illustrations/references/routing.md`: add OpenClaw to route selection rules, mixed-IP grouping, the route table, output paths, and any source authority notes needed for Phase 33.
- `ian-xiaohei-illustrations/references/ips/openclaw/source.md`: create the route-local source record with official repo, phase HEAD snapshot, MIT license, OpenClaw Foundation copyright, uploaded-logo authority, stable marker set, public sample policy, review owner, and route status.
- `ian-xiaohei-illustrations/references/ips/openclaw/`: create this directory as the route-local boundary for current and later OpenClaw references.

Phase 33 can keep `required_references` limited to `references/ips/openclaw/source.md` because the full pack lands in Phase 34.

The route row should be appended after Seal to preserve the current route order and make OpenClaw the sixth explicit visual-IP route.

## Validator and Test Adjacency

The validator already checks the neighboring route contract through `ROUTE-FERRIS-001`, `ROUTE-SEAL-001`, `ROUTE-SEAL-002`, `SOURCE-FERRIS-001`, `SOURCE-SEAL-001`, `ROUTE-PATHS-001`, `ROUTE-MIXED-001`, and route-leakage boundary checks.

The test suite already has fixture drift coverage for Ferris route metadata, Ferris source markers, Seal route metadata, Seal source markers, route output path drift, non-route leakage, public asset gates, and generated sample gates.

Phase 37 should add OpenClaw-focused checks beside the existing Ferris and Seal checks:

- `ROUTE-OPENCLAW-001` for route id, display name, aliases, `default=false`, output suffix, source reference, attribution context, and `source-reviewed` status.
- `SOURCE-OPENCLAW-001` for source record headings, official repository, phase HEAD snapshot, MIT license, OpenClaw Foundation copyright, uploaded-logo authority, marker list, sample policy, route status, and review owner.
- `ROUTE-PATHS-001` expansion for raw and escaped `assets/<article-slug>-openclaw/` markers.
- `ROUTE-MIXED-001` expansion for six-route mixed grouping and the OpenClaw output directory.
- `BOUNDARY-OPENCLAW-LEAK-001` for keeping OpenClaw markers out of Xiaohei, Littlebox, Tom, Ferris, and Seal packs.
- `BOUNDARY-OPENCLAW-IMG-001` for keeping public rendered OpenClaw samples behind release approval.
- `BOUNDARY-OPENCLAW-GEN-001` for separating internal `assets/<article-slug>-openclaw/` samples from public rendered sample release gates.

Phase 33 should avoid modifying validator code. Validator and Node regression work belongs to Phase 37 after the route-local pack and public surfaces exist.

## Risks and Mitigations

- Upstream HEAD drift: record the Phase 33 snapshot and perform a deliberate source-review refresh when changing source claims.
- Alias overmatching: keep OpenClaw selection tied to OpenClaw-qualified aliases so generic assistant, logo, red mascot, and crab requests route through existing behavior or user clarification.
- Logo-to-mascot drift: store the fixed uploaded-logo markers together in source and route authority notes.
- Route leakage: keep OpenClaw references under `references/ips/openclaw/` and add leakage tests in Phase 37.
- Public sample timing: keep rendered OpenClaw samples behind release review until `RELEASE_CHECKLIST.md` records approval.
- Phase bleed: keep style, identity, prompt, edit, QA, docs, metadata, and validator changes in their planned later phases.

## Recommended Plan Shape

1. Update `routing.md` with OpenClaw route selection rules, route table row, source authority note, output path markers, and mixed-IP grouping.
2. Create `references/ips/openclaw/source.md` using the Ferris source-reviewed source-record sections plus the Seal uploaded-logo marker pattern.
3. Verify route compatibility by checking that Xiaohei remains the only default and existing route rows remain stable.
4. Verify Phase 33 markers through text searches for `openclaw`, `source-reviewed`, `assets/<article-slug>-openclaw/`, `assets/&lt;article-slug&gt;-openclaw/`, the MIT license marker, and the uploaded-logo marker set.
5. Leave validator and public docs updates for Phases 36 and 37.

## Verification Commands

```bash
rg -n "openclaw|OpenClaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw|source-reviewed" ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/references/ips/openclaw/source.md
```

```bash
rg -n "https://github.com/openclaw/openclaw|c14793d35a10936ddea833e7808083fe57930616|MIT License|Copyright \\(c\\) 2026 OpenClaw Foundation|red round body|side claw-like arms|two antennae|black eyes|cyan pupils|short legs" ian-xiaohei-illustrations/references/ips/openclaw/source.md
```

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```
