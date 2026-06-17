# Release Checklist

Use this checklist before release to confirm the multi-IP skill package, public docs, attribution, and boundaries stay aligned.

## Automated Gates

- [ ] Run the package validator:

```bash
node scripts/validate-skill-package.mjs
```

- [ ] Run validator tests:

```bash
node --test scripts/validate-skill-package.test.mjs
```

- [ ] Check Markdown whitespace before committing release docs:

```bash
git diff --check
```

Validator marker changes require `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` to pass in the same change set.

Phase 15 owns Ferris validator/test expectation updates for the full seven-file Ferris route pack, route leakage checks, public asset gates, generated sample gates, and parser tests before v1.2 release evidence. Release evidence for Ferris requires the commands above plus Phase 15 validator/test evidence in the same release review record.

Phase 32 owns Seal migration validator check-id cleanup, stale Sealos leakage fixtures, Node test restoration, final release evidence, and UAT before v1.6 release evidence.

Phase 37 owns OpenClaw validator parity, final release evidence, public docs/path marker confirmation, and public rendered sample review before OpenClaw public sample release evidence.

Phase 42 owns Go Gopher validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation before Go Gopher public release evidence.

## Release 1.5 English-Default Review

- [ ] Confirm English-default coverage across README, examples, `LANGUAGE_POLICY.md`, `SKILL.md`, `openai.yaml`, routing, route-local references, NOTICE, and this release checklist.
- [ ] Confirm default stale-language hard fail by running `node scripts/validate-skill-package.mjs`.
- [ ] Record explicit enforce-mode evidence by running `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs`.
- [ ] Record Node regression evidence by running `node --test scripts/validate-skill-package.test.mjs`.
- [ ] Record whitespace evidence by running `git diff --check`.
- [ ] Record residual Han classification and confirm every finding maps to route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, or localized article illustration examples.
- [ ] Confirm docs consistency across public docs, runtime docs, route metadata, NOTICE, and release materials.
- [ ] Confirm compatibility smoke coverage for canonical invocation `$visual-ip-illustrations`, legacy invocation `$ian-xiaohei-illustrations`, Chinese route aliases, localized article workflow compatibility, visible-label behavior, route/output path stability, route ids, route statuses, and output suffixes.

## Release 1.4 Rebrand Review

- [ ] Confirm public docs lead with `Visual IP Illustrations` as the current release 1.4 public identity.
- [ ] Confirm normal-flow examples use canonical invocation `$visual-ip-illustrations`.
- [ ] Confirm `$ian-xiaohei-illustrations` remains documented as the release 1.4 legacy compatibility alias.
- [ ] Confirm install guidance uses `git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations` and `cd visual-ip-illustrations`.
- [ ] Confirm the installable package directory is `skills/visual-ip-illustrations/`.
- [ ] Scan README, examples, NOTICE, and release materials for stale old-name-only first-view public surfaces.
- [ ] Confirm route behavior, route statuses, authority paths, raw output path tokens, and escaped output path tokens remain stable for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.

## Route Smoke Prompts

- [ ] Omitted-IP Xiaohei smoke: use canonical `$visual-ip-illustrations` with no visual IP name and confirm the selected route is Xiaohei; repeat with legacy `$ian-xiaohei-illustrations` for compatibility.
- [ ] Explicit Xiaohei smoke: request `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei` and confirm output path `assets/<article-slug>-illustrations/`.
- [ ] Explicit Littlebox smoke: request `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton` and confirm `Littlebox state: closed`, assigned background, and output path `assets/<article-slug>-littlebox/`.
- [ ] Explicit Tom smoke: request `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, or `汤姆猫` and confirm route status `gated-authorized`, rights record `skills/visual-ip-illustrations/references/ips/tom/rights.md`, and output path `assets/<article-slug>-tom/`.
- [ ] Explicit Ferris smoke: request `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, or `Rust 螃蟹` and confirm route status `source-reviewed`, source record `skills/visual-ip-illustrations/references/ips/ferris/source.md`, and output path `assets/<article-slug>-ferris/`.
- [ ] Explicit Seal smoke: request `Seal`, `hoodie seal`, `连帽衫海豹`, `海豹`, `white seal`, or `blue hoodie seal` and confirm route status `active`, source authority `skills/visual-ip-illustrations/references/ips/seal/source.md`, route-local directory `skills/visual-ip-illustrations/references/ips/seal/`, output path `assets/<article-slug>-seal/`, and Source-history note.
- [ ] Explicit OpenClaw smoke: request `OpenClaw` or `openclaw` and confirm route status `source-reviewed`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`, route-local directory `skills/visual-ip-illustrations/references/ips/openclaw/`, output path `assets/<article-slug>-openclaw/`, uploaded-logo authority, and public sample gate.
- [ ] Explicit Go Gopher smoke: request `Go Gopher`, `Gopher`, `Go mascot`, or a Go Gopher alias listed in `skills/visual-ip-illustrations/references/routing.md` and confirm route status `source-reviewed`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`, route-local directory `skills/visual-ip-illustrations/references/ips/gopher/`, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, output path `assets/<article-slug>-gopher/`, docs validation token `assets/&lt;article-slug&gt;-gopher/`, Source/license note, public sample gate, Go logo boundary, and official endorsement boundary.
- [ ] Mixed-IP smoke: request the same core idea as Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher variant groups and confirm each group loads its own references and output path.

Use the smoke prompt inventory in `examples/prompts.md` as the copy source.

## Attribution Review

- [ ] Review `NOTICE.md` for Ian Xiaohei attribution.
- [ ] Review `NOTICE.md` for Littlebox attribution: author `okooo5km`, source repository, MIT context, inspected commit `37cd93e`, and derived documentation notes.
- [ ] Review `NOTICE.md` for Seal source-history boundary: product-neutral hoodie seal route, route id `seal`, route status `active`, source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`, hoodie identity note, logo-free route behavior, historical provenance note, and public sample review fields.
- [ ] Review `NOTICE.md` for OpenClaw source/license attribution: official repository `https://github.com/openclaw/openclaw`, `MIT License`, `Copyright (c) 2026 OpenClaw Foundation`, route id `openclaw`, route status `source-reviewed`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`, uploaded-logo authority, and public sample review fields.
- [ ] Review `NOTICE.md` for Go Gopher source/license attribution: official Go blog source `https://go.dev/blog/gopher`, Renee French, Creative Commons Attribution 4.0, route id `gopher`, route status `source-reviewed`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, public rendered Go Gopher samples gate, Go logo boundary, and official endorsement boundary.
- [ ] Confirm public docs and release notes keep attribution language aligned with `NOTICE.md`.

## Tom Rights and Public Sample Gate

This section is the Tom maintainer release gate for authorization, route status, prompt leakage, public assets, generated samples, validator commands, and final rights review.

### Tom Authorization Review

- [ ] Review `skills/visual-ip-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer, review date, approval status, allowed directories, and allowed distribution channels.
- [ ] Record authorization review: PENDING / reviewer / date / approval status / authorization scope / release channels.
- [ ] Complete this authorization review before any Tom route status, public asset policy, or generated sample policy change.

### Tom Route Status Review

- [ ] Confirm Tom route status is `gated-authorized` across `skills/visual-ip-illustrations/references/routing.md`, `skills/visual-ip-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, and this checklist.
- [ ] Confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- [ ] Confirm Tom aliases stay explicit: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- [ ] Confirm public docs include Tom output path markers `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- [ ] Route status changes require prior review of `skills/visual-ip-illustrations/references/ips/tom/rights.md` and a recorded maintainer decision.

### Prompt Leakage Scan

- [ ] Scan `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/SKILL.md`, and Tom route references for broad availability wording, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, route leakage, and public sample claims without approval.
- [ ] Confirm Tom prompt examples stay tied to `gated-authorized`, `skills/visual-ip-illustrations/references/ips/tom/rights.md`, and `assets/<article-slug>-tom/`.
- [ ] Confirm text examples and smoke prompts preserve the public-sample gate when they mention rendered Tom samples.

### Public Asset Policy

- [x] Public rendered Tom samples approved for examples/images/, examples/images-en/, and skills/visual-ip-illustrations/assets/examples/: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README.
- [ ] Public rendered Tom samples require explicit approval before publication in `examples/images/` or `skills/visual-ip-illustrations/assets/examples/`.
- [ ] Public asset policy changes require prior review of `skills/visual-ip-illustrations/references/ips/tom/rights.md` and a recorded maintainer decision.

### Generated Sample Policy

- [ ] Generated Tom review samples stay inside the authorization scope recorded in `skills/visual-ip-illustrations/references/ips/tom/rights.md`.
- [ ] Record generated sample review before release: PENDING / reviewer / date / approval status / directories / release channels.
- [ ] Confirm generated sample paths use `assets/<article-slug>-tom/` for workspace outputs and keep public publication tied to the public asset policy above.

### Final Tom Rights Review

- [ ] Final rights review confirms `skills/visual-ip-illustrations/references/ips/tom/rights.md` is the authority for route status, authorization scope, distribution boundary, sample policy, and review fields.
- [ ] Final rights review confirms Tom remains `gated-authorized` until the release reviewer records a different approved status.
- [ ] Final rights review confirms broad availability, public rendered sample publication, source-frame recreation, show logos, title cards, default Jerry usage, and broad cast expansion stay outside the current release gate unless separately approved.

## Ferris Source, Trademark, and Public Sample Gate

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

This section is the Ferris maintainer release gate for source record review, Rust trademark wording, prompt leakage, public assets, generated samples, validator evidence, release channels, and final endorsement-safe wording review.

### Ferris Source Record Review

- [ ] Review `skills/visual-ip-illustrations/references/ips/ferris/source.md` for source, author and source sites, copyright waiver, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm `rustacean.net`, Ferris the Rustacean, Karen Rustad Tolva, source-reviewed status, allowed use, restricted use, distribution boundary, sample policy, and review owner remain traceable to `skills/visual-ip-illustrations/references/ips/ferris/source.md`.
- [ ] Confirm the full pack path `skills/visual-ip-illustrations/references/ips/ferris/`, raw output path `assets/<article-slug>-ferris/`, escaped output path `assets/&lt;article-slug&gt;-ferris/`, and source/trademark boundary appear in public docs and path-marker reviews.
- [ ] Record source/trademark review: PENDING / reviewer / date / approval status / source record / release channels / trademark and endorsement-safe wording outcome.
- [ ] Confirm Ferris route status remains `source-reviewed` across `skills/visual-ip-illustrations/references/routing.md`, `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, and this checklist.

### Rust Trademark Wording Review

- [ ] Review `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/SKILL.md`, routing docs, `NOTICE.md`, release notes, generated samples, and this checklist for Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and broad release language.
- [ ] Confirm public Ferris route wording points to `skills/visual-ip-illustrations/references/ips/ferris/source.md` for the source/trademark boundary.
- [ ] Confirm generated public Ferris samples require release review for Rust trademark and endorsement-safe wording before release channels list them.

### Ferris Prompt Leakage Scan

- [ ] Scan Ferris planning, generation, edit, smoke, README, examples, routing, release notes, and delivery text for generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage, missing `source-reviewed`, missing `source.md`, and cross-route identity leakage.
- [ ] Confirm Ferris prompts keep Ferris as the active cognitive-action subject and keep source/trademark context attached to the route.
- [ ] Confirm Ferris wording stays route-local and does not leak Ferris identity, Rust trademark boundary text, or Rust-community mascot language into Xiaohei, Littlebox, or Tom route contracts.

### Ferris Public Asset Policy

- [x] Ferris public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / trademark and endorsement-safe wording approved.
- [ ] Public rendered Ferris samples require explicit approval before publication in `examples/images/` or `skills/visual-ip-illustrations/assets/examples/`.
- [ ] Public rendered Ferris sample approval must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, allowed directories, release channels, and source/trademark authority.

### Ferris Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-ferris/` may be used for route-contract and pack-design review when the source record and source/trademark note stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-ferris/` require Ferris Public Asset Policy approval before release channels list or copy them into public sample directories.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.

### Final Ferris Release Review

- [ ] Final Ferris release review confirms `skills/visual-ip-illustrations/references/ips/ferris/source.md` is the authority for source context, Rust trademark boundary, distribution boundary, sample policy, and review owner.
- [ ] Final Ferris release review confirms NOTICE consistency, README/examples/metadata parity, routing parity, route status `source-reviewed`, public asset approvals, generated sample approvals, and Phase 15 validator/test evidence before v1.2 release.
- [ ] Final Ferris release review confirms public rendered assets in `examples/images/` and `skills/visual-ip-illustrations/assets/examples/` have recorded approval status, reviewer, date, allowed directories, release channels, and trademark/endorsement outcome.

## Seal Source-History, Hoodie Identity, and Public Sample Gate

This section is the Seal maintainer release gate for source-history review, hoodie seal identity, logo-free output, product-neutral Seal wording, prompt leakage, public assets, generated samples, validator evidence, release channels, and final Seal release review.

### Seal Source-History Review

- [ ] Review `skills/visual-ip-illustrations/references/ips/seal/source.md` for source-history authority, product-neutral character authority, fixed hoodie visual markers, historical provenance boundary, route status, allowed use, restricted use, distribution boundary, sample policy, drift boundary, and review owner.
- [ ] Confirm route status remains `active`, canonical image status remains `uploaded-image-canonical`, and drift boundary remains `uploaded-image-locked` as source-history provenance markers.
- [ ] Confirm `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/references/routing.md` keep Seal, route id `seal`, `active`, `source-history authority`, `hoodie seal identity note`, `logo-free note`, `assets/<article-slug>-seal/`, `assets/&lt;article-slug&gt;-seal/`, and `skills/visual-ip-illustrations/references/ips/seal/source.md` aligned.
- [ ] Record source-history review: PENDING / reviewer / date / approval status / source record / release channels / hoodie seal identity outcome / logo-free outcome.

### Hoodie Identity Review

- [ ] Confirm the uploaded Seal image preserves these markers exactly: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- [ ] Confirm no-logo review covers no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, no text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, and simplified logo mark across cap, hoodie chest, mascot body, props, and scene.
- [ ] Confirm public review blocks generic seals, abstract logo creatures, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, simplified logo mark, changed body color, missing side-rear tail, plain bald-head variants, prior exploration variants, and different selected mascot.
- [ ] Confirm historical Sealos provenance stays bounded to source-history wording while active Seal behavior remains product-neutral.

### Seal Hoodie Identity and Logo-Free Wording Review

- [ ] Review README, examples, routing docs, NOTICE, generated samples, and release notes for hoodie seal identity, logo-free route behavior, product-neutral article metaphors, and stale product/platform wording.
- [ ] Confirm cap, hoodie chest, mascot body, props, and scene stay free of cap logo, chest logo, mascot logos, logo patches, logo-like wave/cloud marks, emblems, and text badges.
- [ ] Confirm public rendered samples receive hoodie identity, logo-free output, route isolation, and article-metaphor quality review before publication.

### Seal Prompt Leakage Scan

- [ ] Scan Seal planning, generation, edit, smoke, README, examples, routing, release notes, and delivery text for generic seal drift, abstract logo creature drift, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, simplified logo mark, changed body color, missing side-rear tail, plain bald-head variants, prior exploration variants, different selected mascot drift, excessive text, route leakage, and public sample claims without approval.
- [ ] Confirm prompt leakage scan covers `README.md`, `examples/prompts.md`, `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/routing.md`, `skills/visual-ip-illustrations/references/ips/seal/`, `NOTICE.md`, and release notes.
- [ ] Confirm Seal wording stays route-local and product-neutral so Seal rules do not leak into Xiaohei, Littlebox, Tom, or Ferris route contracts.

### Seal Public Asset Policy

- [x] Seal public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / hoodie seal identity preserved / no-logo output approved.
- [ ] Public rendered Seal samples require explicit approval before publication in `examples/images/` or `skills/visual-ip-illustrations/assets/examples/`.
- [ ] Public rendered Seal sample approval must cover hoodie seal identity, logo-free output, cap/hoodie preservation, product-neutral Seal wording, route isolation, article-metaphor quality, allowed directories, release channels, and drift markers.

### Seal Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-seal/` may be used when the source record and source-history note stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-seal/` require Seal Public Asset Policy approval before release channels list or copy them into public sample directories.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / hoodie seal identity outcome / no-logo outcome.

### Final Seal Release Review

- [ ] Final Seal release review confirms `skills/visual-ip-illustrations/references/ips/seal/source.md` is the authority for source-history context, hoodie seal identity, logo-free behavior, distribution boundary, sample policy, and review owner.
- [ ] Final Seal release review confirms NOTICE consistency, README/examples/metadata parity, routing parity, route status `active`, public asset approvals, generated sample approvals, and Phase 32 validator/test evidence before v1.6 release.
- [ ] Final Seal release review confirms public rendered assets in `examples/images/` and `skills/visual-ip-illustrations/assets/examples/` have recorded approval status, reviewer, date, allowed directories, release channels, hoodie seal identity outcome, and no-logo outcome.
- [ ] Final Seal release review requires green evidence from `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

## OpenClaw Source, License, and Public Sample Gate

This section is the OpenClaw maintainer release gate for source/license review, uploaded-logo identity, route leakage, public assets, generated samples, validator evidence, release channels, and final OpenClaw release review.

### OpenClaw Source and License Review

- [ ] Review `skills/visual-ip-illustrations/references/ips/openclaw/source.md` for official repository, inspected snapshot, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm route status remains `source-reviewed`, official repository remains `https://github.com/openclaw/openclaw`, inspected snapshot remains `c14793d35a10936ddea833e7808083fe57930616`, license remains `MIT License`, and copyright remains `Copyright (c) 2026 OpenClaw Foundation`.
- [ ] Confirm uploaded-logo identity keeps red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.

### OpenClaw Prompt Leakage Scan

- [ ] Scan Xiaohei, Littlebox, Tom, Ferris, and Seal route-local references for OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, OpenClaw Chinese route aliases, uploaded red OpenClaw logo, uploaded-logo authority, source/license authority, `references/ips/openclaw`, and `assets/<article-slug>-openclaw/`.
- [ ] Confirm OpenClaw wording stays route-local and source-reviewed so OpenClaw rules do not leak into Xiaohei, Littlebox, Tom, Ferris, or Seal route contracts.

### OpenClaw Public Asset Policy

- [x] OpenClaw public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-17 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / uploaded-logo identity preserved / source/license approved / route-isolation approved / article-metaphor quality approved.
- [ ] OpenClaw public asset policy template for future reviews: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.
- [x] Public rendered OpenClaw samples approved for publication in `examples/images-en/openclaw/`.
- [ ] Public rendered OpenClaw sample approval must cover uploaded-logo identity, source/license authority, route isolation, article-metaphor quality, allowed directories, release channels, and public-sample decision.

### OpenClaw Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-openclaw/` may be used when the source record and uploaded-logo authority stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-openclaw/` require OpenClaw Public Asset Policy approval before release channels list or copy them into public sample directories.
- [x] Record generated sample review: APPROVED / maintainer request / 2026-06-17 / approved / assets/<article-slug>-openclaw / examples/images, skills/visual-ip-illustrations/assets/examples / GitHub README / uploaded-logo identity preserved / source/license approved / route-isolation approved / article-metaphor quality approved.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.

### Final OpenClaw Release Review

- [ ] Final OpenClaw release review confirms `skills/visual-ip-illustrations/references/ips/openclaw/source.md` is the authority for source/license context, uploaded-logo identity, distribution boundary, sample policy, and review owner.
- [ ] Final OpenClaw release review confirms route status `source-reviewed`, NOTICE consistency, README/examples/metadata parity, routing parity, public asset approvals, generated sample approvals, and Phase 37 validator/test evidence before public rendered sample release.
- [ ] Final OpenClaw release review requires green evidence from `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

## Go Gopher Source, License, and Public Sample Gate

This section is the Go Gopher maintainer release gate for source/license review, route-local `gopher.png` identity, route leakage, public assets, generated samples, validator evidence, release channels, and final Go Gopher release review.

### Go Gopher Source and License Review

- [ ] Review `skills/visual-ip-illustrations/references/ips/gopher/source.md` for official Go blog source `https://go.dev/blog/gopher`, Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm route status remains `source-reviewed`, official Go blog source remains `https://go.dev/blog/gopher`, attribution remains Renee French, license boundary remains Creative Commons Attribution 4.0, source/license authority remains `skills/visual-ip-illustrations/references/ips/gopher/source.md`, and local visual authority remains route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`.
- [ ] Confirm public docs keep raw output path `assets/<article-slug>-gopher/`, docs validation token `assets/&lt;article-slug&gt;-gopher/`, route-local directory `skills/visual-ip-illustrations/references/ips/gopher/`, Source/license note, public sample gate, Go logo boundary, and official endorsement boundary.
- [ ] Record source/license review: PENDING / reviewer / date / approval status / source record / release channels / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / Go logo boundary outcome / official endorsement boundary outcome.

### Go Gopher Identity Review

- [ ] Confirm route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` preserves these local visual markers: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- [ ] Confirm Go Gopher action vocabulary includes inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, and route.
- [ ] Confirm Go Gopher prompts use sparse article metaphors, short visible labels in the user's requested language, one core idea, one structure type, and one active Gopher action.

### Go Gopher Prompt Leakage Scan

- [ ] Scan Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw route-local references for Go Gopher, Gopher, Go mascot, Gopher mascot, Go Gopher aliases listed in routing metadata, Go Gopher source/license authority, `references/ips/gopher`, `gopher.png`, Renee French, Creative Commons Attribution 4.0, `assets/<article-slug>-gopher/`, and `assets/&lt;article-slug&gt;-gopher/`.
- [ ] Confirm Go Gopher wording stays route-local and source-reviewed so Go Gopher rules stay isolated from Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw route contracts.
- [ ] Confirm generated public Go Gopher samples require release review for source/license attribution, Go logo boundary, official endorsement boundary, route isolation, and article-metaphor quality before release channels list them.

### Go Gopher Public Asset Policy

- [x] Go Gopher public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-17 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / Go blog source approved / Renee French attribution approved / Creative Commons Attribution 4.0 approved / local visual marker approved / route-isolation approved / Go logo boundary approved / official endorsement boundary approved / article-metaphor quality approved / public-sample decision approved.
- [ ] Go Gopher public asset policy template for future reviews: PENDING / reviewer / date / approval status / allowed directories / release channels / Go blog source outcome / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / local visual marker outcome / route-isolation outcome / Go logo boundary outcome / official endorsement boundary outcome / article-metaphor quality outcome / public-sample decision.
- [x] Public rendered Go Gopher samples approved for publication in `examples/images-en/gopher/`.
- [ ] Public rendered Go Gopher sample approval must cover source/license authority, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, route isolation, article-metaphor quality, allowed directories, release channels, Go logo boundary, official endorsement boundary, and public-sample decision.

### Go Gopher Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-gopher/` may be used when the source record and route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-gopher/` require Go Gopher Public Asset Policy approval before release channels list or copy them into public sample directories.
- [x] Record generated sample review: APPROVED / maintainer request / 2026-06-17 / approved / assets/<article-slug>-gopher / examples/images, skills/visual-ip-illustrations/assets/examples / GitHub README / Renee French attribution approved / Creative Commons Attribution 4.0 approved / local visual marker approved / route-isolation approved / Go logo boundary approved / official endorsement boundary approved / article-metaphor quality approved.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / local visual marker outcome / route-isolation outcome / Go logo boundary outcome / official endorsement boundary outcome / article-metaphor quality outcome.

### Final Go Gopher Release Review

- [ ] Final Go Gopher release review confirms `skills/visual-ip-illustrations/references/ips/gopher/source.md` is the authority for source/license context, Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, distribution boundary, sample policy, and review owner.
- [ ] Final Go Gopher release review confirms route status `source-reviewed`, NOTICE consistency, README/examples/metadata parity, routing parity, public asset approvals, generated sample approvals, and Phase 42 validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation before public rendered sample release.
- [ ] Final Go Gopher release review requires green evidence from `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

## Installable Package Boundary

- [ ] Confirm the installable Codex Skill package is `skills/visual-ip-illustrations/`.
- [ ] Confirm `skills/visual-ip-illustrations/` contains `SKILL.md`, `agents/openai.yaml`, `references/routing.md`, Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher canonical IP packs, legacy Xiaohei reference entry points, and skill-local assets.
- [ ] Confirm root `README.md`, `examples/`, `NOTICE.md`, `LICENSE`, and `RELEASE_CHECKLIST.md` remain public distribution and maintainer docs.
- [ ] Confirm generated article assets continue to save under route-specific workspace paths instead of inside the skill package.
- [ ] Confirm Phase 32 owns Seal migration validator check-id cleanup, stale Sealos leakage fixtures, Node test restoration, full validator evidence, full Node evidence, and UAT.
- [ ] Confirm Phase 37 owns OpenClaw validator parity, final release evidence, public docs/path marker confirmation, and public rendered sample review.
- [ ] Confirm Phase 42 owns Go Gopher validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation.

## Public Docs and Path Markers

- [ ] README documents Xiaohei as the default visual IP, Littlebox as an explicit active route, Tom as an explicit `gated-authorized` protected-character route, Ferris as an explicit `source-reviewed` Rust-community mascot route, Seal as an explicit `active` product-neutral hoodie seal route, OpenClaw as an explicit `source-reviewed` logo-mascot route, and Go Gopher as an explicit `source-reviewed` article-mascot route.
- [ ] README, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/references/routing.md` keep public Ferris source/trademark wording aligned.
- [ ] README, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/references/routing.md` keep public Seal source-history wording aligned.
- [ ] README, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/references/routing.md` keep public OpenClaw source/license wording aligned.
- [ ] README, `examples/prompts.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/references/routing.md` keep public Go Gopher source/license wording aligned.
- [ ] README and `examples/prompts.md` keep raw and escaped output markers for Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher: `assets/<article-slug>-illustrations/`, `assets/&lt;article-slug&gt;-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/<article-slug>-tom/`, `assets/&lt;article-slug&gt;-tom/`, `assets/<article-slug>-ferris/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/<article-slug>-seal/`, `assets/&lt;article-slug&gt;-seal/`, `assets/<article-slug>-openclaw/`, `assets/&lt;article-slug&gt;-openclaw/`, `assets/<article-slug>-gopher/`, and `assets/&lt;article-slug&gt;-gopher/`.
- [ ] README keeps route metadata link `skills/visual-ip-illustrations/references/routing.md`.
- [ ] README, prompt docs, and release docs keep canonical pack paths for `skills/visual-ip-illustrations/references/ips/xiaohei/`, `skills/visual-ip-illustrations/references/ips/littlebox/`, `skills/visual-ip-illustrations/references/ips/tom/`, `skills/visual-ip-illustrations/references/ips/ferris/`, `skills/visual-ip-illustrations/references/ips/seal/`, `skills/visual-ip-illustrations/references/ips/openclaw/`, and `skills/visual-ip-illustrations/references/ips/gopher/`.
- [ ] Ferris public docs keep `skills/visual-ip-illustrations/references/ips/ferris/source.md`, `source-reviewed`, `assets/<article-slug>-ferris/`, `assets/&lt;article-slug&gt;-ferris/`, public Ferris sample release-review wording, and the Phase 15 validator/test boundary visible before v1.2 release.
- [ ] Seal public docs keep `skills/visual-ip-illustrations/references/ips/seal/source.md`, `active`, source-history authority, hoodie seal identity note, logo-free note, `assets/<article-slug>-seal/`, `assets/&lt;article-slug&gt;-seal/`, public rendered Seal sample release-review wording, and the Phase 32 validator/test boundary visible before v1.6 release.
- [ ] OpenClaw public docs keep `skills/visual-ip-illustrations/references/ips/openclaw/source.md`, `source-reviewed`, official repository `https://github.com/openclaw/openclaw`, `MIT License`, `Copyright (c) 2026 OpenClaw Foundation`, uploaded-logo authority, `assets/<article-slug>-openclaw/`, `assets/&lt;article-slug&gt;-openclaw/`, public rendered OpenClaw sample release-review wording, and the Phase 37 validator/test boundary visible before public sample release.
- [ ] Go Gopher public docs keep `skills/visual-ip-illustrations/references/ips/gopher/source.md`, `source-reviewed`, official Go blog source `https://go.dev/blog/gopher`, Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, `assets/<article-slug>-gopher/`, `assets/&lt;article-slug&gt;-gopher/`, public rendered Go Gopher sample release-review wording, and the Phase 42 validator/test boundary visible before public sample release.
