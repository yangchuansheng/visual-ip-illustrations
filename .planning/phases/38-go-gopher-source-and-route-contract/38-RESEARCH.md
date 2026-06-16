# Phase 38 Research: Go Gopher Source and Route Contract

## Scope

Phase 38 creates the smallest durable Go Gopher contract: one explicit Go Gopher route entry in `ian-xiaohei-illustrations/references/routing.md` and one route-local source record at `ian-xiaohei-illustrations/references/ips/gopher/source.md`.

The phase covers `ROUTE-01`, `ROUTE-02`, `ROUTE-03`, `SRC-01`, and `SRC-02`. It preserves Xiaohei as the omitted-IP default and keeps Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher as explicit isolated routes.

Later phases own the full Go Gopher pack, skill controller dispatch, public docs, metadata, validator hardening, test fixtures, and release evidence.

## Source Facts

- Official source context: `https://go.dev/blog/gopher`.
- The Go blog describes the Go Gopher as an iconic Go project mascot.
- The Go blog names Renee French as the creator of the Go Gopher.
- The Go blog states that Go Gopher images are Creative Commons Attribution 4.0 licensed and credits Renee French.
- Route id target: `gopher`.
- Route display name target: `Go Gopher`.
- Route default target: `false`.
- Route status target: `source-reviewed`.
- Route output suffix target: `gopher`.
- Route output target: `assets/<article-slug>-gopher/`.
- Escaped output marker target for docs and validation surfaces: `assets/&lt;article-slug&gt;-gopher/`.
- Local visual authority target: root `gopher.png`.
- Fixed local visual markers: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Alias target: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`.
- Generic alias exclusions: `go`, `blue mascot`, `animal`, and `logo`.

## Existing Patterns

`routing.md` is the central source for route selection rules, route metadata, output suffixes, required references, attribution context, route statuses, mixed-IP grouping, output path markers, and delivery fields.

Existing route table rows use these fields: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.

Xiaohei is the only `default=true` route. Littlebox, Tom, Ferris, Seal, and OpenClaw are explicit route rows with `default=false`. Go Gopher should follow that explicit-route pattern.

Ferris is the closest source-reviewed community mascot precedent. `references/ips/ferris/source.md` records source context, author/source sites, license/copyright context, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.

OpenClaw is the closest recent route/source contract precedent. Phase 33 added source-reviewed routing plus a route-local source record before the full route-local pack existed. Phase 34 expanded `required_references` after the pack landed.

OpenClaw and Seal are the closest local or uploaded visual authority precedents. Their source records keep the source/license contract and fixed visual marker set together.

## Implementation Surfaces

- `ian-xiaohei-illustrations/references/routing.md`: add Go Gopher route selection rules, the route table row, source authority note, raw and escaped output path markers, and mixed-IP grouping text.
- `ian-xiaohei-illustrations/references/ips/gopher/source.md`: create the route-local source record with Go blog context, Renee French attribution, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, stable marker set, public sample policy, review owner, and route status.
- `ian-xiaohei-illustrations/references/ips/gopher/`: create this directory as the route-local boundary for current and later Go Gopher references.
- Root `gopher.png`: preserve as the Phase 38 local visual authority input and record that exact path in `source.md`.

Phase 38 can keep `required_references` limited to `references/ips/gopher/source.md` because the full Go Gopher pack lands in Phase 39.

The route row should be appended after OpenClaw to preserve current route order and make Go Gopher the seventh visual-IP route.

## Validator and Test Adjacency

The current validator and Node tests already lock the six-route OpenClaw state. Adding Go Gopher route metadata in Phase 38 may require implementation-time awareness that full validator expansion belongs to Phase 42. Phase 38 verification should still run the existing validator and Node suite so implementers see any current compatibility impact.

Phase 42 should add Go Gopher-focused checks beside the existing OpenClaw checks:

- `ROUTE-GOPHER-001` for route id, display name, aliases, `default=false`, output suffix, source reference, attribution context, and `source-reviewed` status.
- `SOURCE-GOPHER-001` for source record headings, Go blog URL, Renee French attribution, Creative Commons Attribution 4.0, root `gopher.png` authority, marker list, sample policy, route status, and review owner.
- `ROUTE-PATHS-001` expansion for raw and escaped `assets/<article-slug>-gopher/` markers.
- `ROUTE-MIXED-001` expansion for seven-route mixed grouping and the Go Gopher output directory.
- `BOUNDARY-GOPHER-LEAK-001` for keeping Go Gopher markers out of Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw packs.
- `BOUNDARY-GOPHER-IMG-001` for keeping public rendered Go Gopher samples behind release approval.
- `BOUNDARY-GOPHER-GEN-001` for separating internal `assets/<article-slug>-gopher/` samples from public rendered sample release gates.

## Risks and Mitigations

- Alias overmatching: keep Go Gopher selection tied to Go Gopher-qualified aliases so generic `go`, `logo`, `animal`, and `blue mascot` wording stays outside this route.
- Endorsement drift: keep Go logo identity and official affiliation, approval, sponsorship, or endorsement claims outside route metadata and source wording.
- Visual drift: store the fixed `gopher.png` marker set together in the source record and route metadata note.
- Route leakage: keep Go Gopher references under `references/ips/gopher/` and add leakage tests in Phase 42.
- Public sample timing: keep rendered Go Gopher samples behind release review until release evidence records approval.
- Phase bleed: keep style, identity, prompt, edit, QA, docs, metadata, and validator changes in their planned later phases.

## Recommended Plan Shape

1. Update `routing.md` with Go Gopher route selection rules, route table row, source authority note, output path markers, and mixed-IP grouping.
2. Create `references/ips/gopher/source.md` using the Ferris source-reviewed source-record pattern plus the OpenClaw/Seal fixed-marker authority pattern.
3. Verify source and route compatibility by checking that Xiaohei remains the only default and existing route rows remain stable.
4. Verify Phase 38 markers through text searches for `gopher`, `Go Gopher`, `source-reviewed`, `assets/<article-slug>-gopher/`, `assets/&lt;article-slug&gt;-gopher/`, `https://go.dev/blog/gopher`, `Renee French`, `Creative Commons Attribution 4.0`, `gopher.png`, and the local visual marker set.
5. Leave full Go Gopher pack, controller, public docs, metadata, validator, Node tests, and release evidence updates to Phases 39-42.

## Verification Commands

```bash
rg -n "gopher|Go Gopher|Gopher 吉祥物|assets/<article-slug>-gopher|assets/&lt;article-slug&gt;-gopher|source-reviewed" ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/references/ips/gopher/source.md
```

```bash
rg -n "https://go.dev/blog/gopher|Renee French|Creative Commons Attribution 4\\.0|gopher\\.png|blue rounded upright body|rounded head/body silhouette|small rounded ears|large simple eyes|black nose|buck teeth|beige muzzle and paws|compact limbs|friendly standing posture|black outline|white sticker-like border" ian-xiaohei-illustrations/references/ips/gopher/source.md
```

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```
