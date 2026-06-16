---
status: complete
phase: 38-go-gopher-source-and-route-contract
source:
  - .planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md
started: 2026-06-16T18:27:47Z
updated: 2026-06-16T18:27:47Z
mode: automated
---

# Phase 38 UAT

## Current Test

number: complete
name: Phase 38 automated route and source contract checks
expected: |
  Users can select Go Gopher through explicit aliases while omitted visual-IP requests still select Xiaohei. Maintainers can inspect routing metadata and the Go Gopher source record for route id, display name, default marker, output suffix/path, source-reviewed status, Go blog source, Renee French attribution, Creative Commons Attribution 4.0 boundary, root gopher.png authority, sample policy, review owner, route status, and stable existing-route defaults.
result: passed

## Tests

### 1. Go Gopher Route Selection Contract

expected: `routing.md` contains explicit Go Gopher route aliases and keeps generic aliases outside the Go Gopher alias set.
result: passed
evidence: `routing.md` lines 14-15 contain the Go Gopher alias set and generic alias boundary.

### 2. Go Gopher Route Metadata

expected: `routing.md` exposes route id `gopher`, display name `Go Gopher`, `default=false`, output suffix `gopher`, source-reviewed status, raw output path, escaped output marker, and required source record.
result: passed
evidence: `routing.md` lines 41 and 52-60 contain the route row and Go Gopher metadata.

### 3. Source Record Authority

expected: `references/ips/gopher/source.md` records the Go blog source, Renee French, Creative Commons Attribution 4.0, root `gopher.png`, sample policy, review owner, and route status.
result: passed
evidence: `source.md` lines 5-15, 42-55, and 78-82 contain the required source, sample, route-status, and owner fields.

### 4. Local Visual Reference Contract

expected: The source record treats root `gopher.png` as the local visual authority and records the fixed visual marker set.
result: passed
evidence: `source.md` lines 26-40 list root `gopher.png` and every required visual marker; `file gopher.png` reports a 500 x 500 PNG.

### 5. Default and Explicit Route Stability

expected: Xiaohei remains the only `default=true` route, and Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher remain explicit `default=false` routes.
result: passed
evidence: The route-table Node inspection printed `xiaohei:Xiaohei:true:illustrations:active` and `gopher:Go Gopher:false:gopher:source-reviewed`, with all other explicit routes set to `false`.

## Automated Checks

| Check | Result | Evidence |
|-------|--------|----------|
| Route marker grep | pass | `rg -n '\| \`gopher\` \| Go Gopher|Go Gopher|Gopher 吉祥物|assets/<article-slug>-gopher|assets/&lt;article-slug&gt;-gopher|source-reviewed' ian-xiaohei-illustrations/references/routing.md` found route aliases, route row, metadata, raw path, escaped marker, and status. |
| Source marker grep | pass | `rg -n "https://go.dev/blog/gopher|Renee French|Creative Commons Attribution 4\.0|gopher\.png|blue rounded upright body|rounded head/body silhouette|small rounded ears|large simple eyes|black nose|buck teeth|beige muzzle and paws|compact limbs|friendly standing posture|black outline|white sticker-like border|review owner|public generated Go Gopher samples" ian-xiaohei-illustrations/references/ips/gopher/source.md` found every required source and marker token. |
| Default route inspection | pass | Node table parser confirmed only `xiaohei` has `default=true`; `gopher` has `default=false`. |
| Local image presence | pass | `file gopher.png` reported `PNG image data, 500 x 500, 8-bit colormap, non-interlaced`. |
| Diff hygiene | pass | `git diff --check -- .planning/phases/38-go-gopher-source-and-route-contract ian-xiaohei-illustrations/references/routing.md ian-xiaohei-illustrations/references/ips/gopher/source.md` exited 0. |
| Artifact verification | pass | `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs query verify.artifacts .../38-01-PLAN.md` returned `all_passed: true`, `passed: 2`, `total: 2`. |

## Known Deferred Validation Ownership

The current validator and Node suite still encode the six-route OpenClaw baseline. This matches the Phase 38 summary and Phase 42 roadmap scope.

| Command | Result | Phase 38 UAT handling |
|---------|--------|-----------------------|
| `node scripts/validate-skill-package.mjs` | expected fail, `Summary: total=112 passed=106 failed=6 skipped=0` | deferred to Phase 42 validator expansion |
| `node --test scripts/validate-skill-package.test.mjs` | expected fail, `tests 80`, `pass 63`, `fail 17` | deferred to Phase 42 Node regression expansion |

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

None for Phase 38.
