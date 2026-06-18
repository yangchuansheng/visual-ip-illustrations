# Phase 43 Plan 43-01: Cai Xukun Source and Route Contract Summary

## Implemented Changes

- Added Cai Xukun as an explicit route in `skills/visual-ip-illustrations/references/routing.md`.
- Added route id `caixukun`, display name `Cai Xukun`, aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`.
- Preserved Xiaohei as the omitted visual-IP default and kept the existing explicit route table entries stable.
- Set Cai Xukun route metadata to `default=false`, output suffix `caixukun`, route status `gated-public-figure`, and required reference `references/ips/caixukun/source.md`.
- Added raw output path `assets/<article-slug>-caixukun/` and escaped marker `assets/&lt;article-slug&gt;-caixukun/` to routing docs.
- Created `skills/visual-ip-illustrations/references/ips/caixukun/source.md` as the Phase 43 route-local source record.
- Recorded uploaded visual authority paths:
  - `/Users/longnv/Downloads/Generated image 1 (9).png`
  - `/Users/longnv/Downloads/20260618-013721.jpeg`
- Recorded fixed uploaded Cai Xukun visual markers:
  - yellow duck-like rounded mascot body
  - silver layered idol hair
  - oversized white eyes
  - red cheek circles
  - orange beak
  - black high-collar top
  - white straps
  - white lower outfit
  - compact black or gray boots
- Added source-image context and output-style boundary:
  - `green reference background is source-image context`
  - `generated article illustrations keep the skill's sparse 16:9 white-background style`
- Added public generated Cai Xukun sample release review policy, review owner, route status, and public-figure likeness boundary covering realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion claims.
- Tightened restricted-use wording after code review so realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion stay outside this route, while release review covers sample publication and route-status changes for stylized mascot article illustrations.

## Verification

| Command | Status | Notes |
|---------|--------|-------|
| `rg -n "caixukun\|Cai Xukun\|蔡徐坤\|cxk\|gated-public-figure\|assets/<article-slug>-caixukun\|assets/&lt;article-slug&gt;-caixukun\|references/ips/caixukun/source\\.md" skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/source.md` | PASS | Found route aliases, status, source reference, raw output path, and escaped output marker in route/source files. |
| `rg -n "Generated image 1 \\(9\\)\\.png\|20260618-013721\\.jpeg\|yellow duck-like rounded mascot body\|silver layered idol hair\|oversized white eyes\|red cheek circles\|orange beak\|black high-collar top\|white straps\|white lower outfit\|compact black or gray boots\|realistic-person portrait output\|official endorsement\|impersonation\|green reference background is source-image context" skills/visual-ip-illustrations/references/ips/caixukun/source.md` | PASS | Found uploaded paths, fixed visual markers, public-figure boundary markers, and green-background source context. |
| `git diff --check -- skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/source.md` | PASS | No whitespace errors reported. |

## Code Review Disposition

- `CR-01` points to `SKILL.md` runtime integration. Phase 45 owns skill controller integration per `.planning/ROADMAP.md` and Phase 43 context.
- `WR-01` points to package-visible source asset copies. Phase 43 research resolved the current phase to record exact uploaded paths in `source.md`; asset hashing or copying remains future scope or explicit user request.
- `WR-02` was fixed in this phase by tightening the restricted-use wording in `skills/visual-ip-illustrations/references/ips/caixukun/source.md`.

## Manual Route Inspection

Route table inspection confirms:

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

## Scope Boundary Notes

- Phase 43 is limited to the route/source contract.
- Full Cai Xukun route-local pack files remain Phase 44 ownership.
- Skill controller integration remains Phase 45 ownership.
- Package-visible source asset copying remains future scope or explicit user request per Phase 43 research resolution.
- Public docs, NOTICE, release checklist, broad skill docs, and agent metadata remain Phase 46 ownership.
- Validator, Node tests, leakage scans, public sample gates, and release evidence remain Phase 47 ownership.
- No package-manager installs were run.
- No public generated sample assets were added.
- No commit was created per executor instruction.

## Files Changed

- `skills/visual-ip-illustrations/references/routing.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md`
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-01-SUMMARY.md`
