# Phase 43 Validation Strategy

## Scope

Phase 43 validates only the Cai Xukun route/source contract:

- `skills/visual-ip-illustrations/references/routing.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md`

The validation target is a narrow planning and implementation contract for route metadata, uploaded-image authority, source-image context, public-figure likeness boundaries, sample policy, review ownership, route status, output path markers, and existing default-route stability.

Validator and Node regression expansion belongs to Phase 47. Phase 47 owns route parser updates, eight-route fixture expansion, route-count expectations, output-path assertions, public sample gates, leakage checks, docs/NOTICE/release checks, smoke evidence, and full-pass validator evidence.

## Requirement Verification Map

| Requirement | Phase 43 Verification Method | Pass Criteria | Fail Criteria |
|-------------|------------------------------|---------------|---------------|
| ROUTE-01 | Grep `routing.md` for explicit aliases and manually inspect the route inventory. | `routing.md` includes `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`; manual inspection shows Xiaohei as the only `default=true` route. | Any required Cai Xukun alias is absent, Cai Xukun has `default=true`, or another explicit route becomes the omitted-IP default. |
| ROUTE-02 | Grep `routing.md` for route identity and output markers. | `routing.md` includes route id `caixukun`, display name `Cai Xukun`, output suffix `caixukun`, raw output path `assets/<article-slug>-caixukun/`, and escaped output marker `assets/&lt;article-slug&gt;-caixukun/`. | Any route identity field or output path marker is absent or inconsistent with the Phase 43 contract. |
| ROUTE-03 | Grep `routing.md` for source reference, route status, uploaded-image authority, and likeness-boundary markers. | `routing.md` references `references/ips/caixukun/source.md`, includes `gated-public-figure`, includes uploaded-image authority for both source files, and includes public-figure likeness boundary markers. | Routing metadata lacks the source record, route status, uploaded-image authority, `default=false`, or likeness-boundary wording. |
| SRC-01 | Grep `source.md` for required sections and policy markers. | `source.md` includes Source, Uploaded Image Authority, Public-Figure Likeness Boundary, Source-Image Context, Sample Policy, Route Status, Distribution Boundary, and Review Owner coverage. | The source record omits uploaded image paths, likeness boundary, public sample policy, review owner, route status, or source-image context. |
| SRC-02 | Grep `source.md` for uploaded paths and stable mascot markers. | `source.md` includes both uploaded image paths plus yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots. | Any uploaded image path or required mascot marker is absent. |

## Automated Grep Checks

Run this route/source marker check after Phase 43 implementation:

```bash
rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|assets/<article-slug>-caixukun|assets/&lt;article-slug&gt;-caixukun|references/ips/caixukun/source\\.md" \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun/source.md
```

Pass criteria:

- The command finds Cai Xukun route id, display name, aliases, route status, raw output marker, escaped output marker, and source-record marker.
- Matches appear in the intended Phase 43 route/source files.

Fail criteria:

- The command returns no matches for any required route marker.
- Required markers appear only outside the intended route/source contract files.

Run this source-record authority check:

```bash
rg -n "Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|yellow duck-like rounded mascot body|silver layered idol hair|oversized white eyes|red cheek circles|orange beak|black high-collar top|white straps|white lower outfit|compact black or gray boots|realistic-person portrait output|official endorsement|impersonation|green reference background is source-image context" \
  skills/visual-ip-illustrations/references/ips/caixukun/source.md
```

Pass criteria:

- The command finds both uploaded image paths.
- The command finds every stable visual marker required by SRC-02.
- The command finds public-figure likeness boundary markers and the source-image context marker.

Fail criteria:

- Any uploaded image path, stable visual marker, likeness-boundary marker, or source-image context marker is absent from `source.md`.

## Manual Route Inspection Target

Manually inspect `skills/visual-ip-illustrations/references/routing.md` and confirm the route inventory resolves to exactly this default/status profile:

```text
xiaohei:Xiaohei:true:illustrations:active
littlebox:Littlebox:false:littlebox:active
tom:Tom:false:tom:gated-authorized
ferris:Ferris:false:ferris:source-reviewed
seal:Seal:false:seal:active
openclaw:OpenClaw:false:openclaw:source-reviewed
gopher:Go Gopher:false:gopher:source-reviewed
caixukun:Cai Xukun:false:caixukun:gated-public-figure
```

Pass criteria:

- There are eight routes in the manual inventory.
- Xiaohei is the only `default=true` route.
- Cai Xukun appears as `caixukun:Cai Xukun:false:caixukun:gated-public-figure`.
- Existing Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher route ids, defaults, output suffixes, and statuses remain stable.

Fail criteria:

- The inventory has fewer or more than eight routes after Phase 43 implementation.
- Any route other than Xiaohei has `default=true`.
- Cai Xukun route id, display name, output suffix, default marker, or status differs from the target.
- Existing route identity, default, output suffix, or status drifts during Phase 43.

## Diff Hygiene Check

Run this whitespace and conflict-marker check for the Phase 43 implementation files:

```bash
git diff --check -- \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun/source.md
```

Pass criteria:

- `git diff --check` exits successfully.
- The diff has no whitespace errors or conflict markers in `routing.md` or `source.md`.

Fail criteria:

- `git diff --check` reports trailing whitespace, space-before-tab errors, conflict markers, or malformed patch hygiene in either file.

## Phase 47 Ownership

Phase 43 completion uses grep checks, manual route inspection, and diff hygiene. Phase 47 owns validator and Node expansion for Cai Xukun:

- `scripts/validate-skill-package.mjs` route arrays, output path token arrays, public docs token arrays, language allowlist entries, route parser expectations, route-specific check IDs, leakage checks, public sample gates, generated sample gates, and release-evidence checks.
- `scripts/validate-skill-package.test.mjs` `requiredCheckIds`, expected summary totals, `routes.length === 8`, route id order, output path assertions, approval parser fixtures, leakage fixtures, public sample fixture names, and full-pass evidence.
- Release evidence for validator output, Node test output, `git diff --check`, Cai Xukun route smoke, uploaded-image and likeness-boundary smoke, docs consistency, leakage scan, and public sample gate status.

Phase 43 passes when the route/source contract is grep-verifiable, manually inspectable as an eight-route inventory with Xiaohei as the only default, and diff-clean. Validator and Node suites are Phase 47 acceptance gates.
