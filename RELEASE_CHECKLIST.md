# Release Checklist

用于发布前确认 multi-IP skill 包、公开文档、归因和边界保持一致。

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

Phase 20 owns Sealos validator/test expectation updates for the public docs, prompt examples, agent metadata, NOTICE, release checklist, route leakage checks, public asset gates, generated sample gates, and green Node evidence before v1.3 release evidence.

## Release 1.4 Rebrand Review

- [ ] Confirm public docs lead with `Visual IP Illustrations` as the current release 1.4 public identity.
- [ ] Confirm normal-flow examples use canonical invocation `$visual-ip-illustrations`.
- [ ] Confirm `$ian-xiaohei-illustrations` remains documented as the release 1.4 legacy compatibility alias.
- [ ] Confirm install guidance uses `git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations` and `cd visual-ip-illustrations`.
- [ ] Confirm the installable package directory remains `ian-xiaohei-illustrations/`.
- [ ] Scan README, examples, NOTICE, and release materials for stale old-name-only first-view public surfaces.
- [ ] Confirm route behavior, route statuses, authority paths, raw output path tokens, and escaped output path tokens remain stable for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.

## Route Smoke Prompts

- [ ] Omitted-IP Xiaohei smoke: use canonical `$visual-ip-illustrations` with no visual IP name and confirm the selected route is Xiaohei; repeat with legacy `$ian-xiaohei-illustrations` for compatibility.
- [ ] Explicit Xiaohei smoke: request `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei` and confirm output path `assets/<article-slug>-illustrations/`.
- [ ] Explicit Littlebox smoke: request `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton` and confirm `Littlebox state: closed`, assigned background, and output path `assets/<article-slug>-littlebox/`.
- [ ] Explicit Tom smoke: request `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, or `汤姆猫` and confirm route status `gated-authorized`, rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and output path `assets/<article-slug>-tom/`.
- [ ] Explicit Ferris smoke: request `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, or `Rust 螃蟹` and confirm route status `source-reviewed`, source record `ian-xiaohei-illustrations/references/ips/ferris/source.md`, and output path `assets/<article-slug>-ferris/`.
- [ ] Explicit Sealos Seal smoke: request `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, or `blue hoodie seal` and confirm route status `brand-owned`, source authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`, route-local directory `ian-xiaohei-illustrations/references/ips/sealos/`, output path `assets/<article-slug>-sealos/`, and Brand/canonical-image note.
- [ ] Mixed-IP smoke: request the same core idea as Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal variant groups and confirm each group loads its own references and output path.

Use the smoke prompt inventory in `examples/prompts.md` as the copy source.

## Attribution Review

- [ ] Review `NOTICE.md` for Ian Xiaohei attribution.
- [ ] Review `NOTICE.md` for Littlebox attribution: author `okooo5km`, source repository, MIT context, inspected commit `37cd93e`, and derived documentation notes.
- [ ] Review `NOTICE.md` for Sealos Seal brand/canonical-image boundary: Sealos brand mascot route based on the user's uploaded mascot image, route id `sealos`, route status `brand-owned`, source authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`, prior exploration boundary, and public sample review fields.
- [ ] Confirm public docs and release notes keep attribution language aligned with `NOTICE.md`.

## Tom Rights and Public Sample Gate

This section is the Tom maintainer release gate for authorization, route status, prompt leakage, public assets, generated samples, validator commands, and final rights review.

### Tom Authorization Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer, review date, approval status, allowed directories, and allowed distribution channels.
- [ ] Record authorization review: PENDING / reviewer / date / approval status / authorization scope / release channels.
- [ ] Complete this authorization review before any Tom route status, public asset policy, or generated sample policy change.

### Tom Route Status Review

- [ ] Confirm Tom route status is `gated-authorized` across `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and this checklist.
- [ ] Confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- [ ] Confirm Tom aliases stay explicit: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- [ ] Confirm public docs include Tom output path markers `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- [ ] Route status changes require prior review of `ian-xiaohei-illustrations/references/ips/tom/rights.md` and a recorded maintainer decision.

### Prompt Leakage Scan

- [ ] Scan `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/SKILL.md`, and Tom route references for broad availability wording, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, route leakage, and public sample claims without approval.
- [ ] Confirm Tom prompt examples stay tied to `gated-authorized`, `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and `assets/<article-slug>-tom/`.
- [ ] Confirm text examples and smoke prompts preserve the public-sample gate when they mention rendered Tom samples.

### Public Asset Policy

- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
- [ ] Public rendered Tom samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- [ ] Public asset policy changes require prior review of `ian-xiaohei-illustrations/references/ips/tom/rights.md` and a recorded maintainer decision.

### Generated Sample Policy

- [ ] Generated Tom review samples stay inside the authorization scope recorded in `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- [ ] Record generated sample review before release: PENDING / reviewer / date / approval status / directories / release channels.
- [ ] Confirm generated sample paths use `assets/<article-slug>-tom/` for workspace outputs and keep public publication tied to the public asset policy above.

### Final Tom Rights Review

- [ ] Final rights review confirms `ian-xiaohei-illustrations/references/ips/tom/rights.md` is the authority for route status, authorization scope, distribution boundary, sample policy, and review fields.
- [ ] Final rights review confirms Tom remains `gated-authorized` until the release reviewer records a different approved status.
- [ ] Final rights review confirms broad availability, public rendered sample publication, source-frame recreation, show logos, title cards, default Jerry usage, and broad cast expansion stay outside the current release gate unless separately approved.

## Ferris Source, Trademark, and Public Sample Gate

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

This section is the Ferris maintainer release gate for source record review, Rust trademark wording, prompt leakage, public assets, generated samples, validator evidence, release channels, and final endorsement-safe wording review.

### Ferris Source Record Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/ferris/source.md` for source, author and source sites, copyright waiver, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm `rustacean.net`, Ferris the Rustacean, Karen Rustad Tolva, source-reviewed status, allowed use, restricted use, distribution boundary, sample policy, and review owner remain traceable to `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- [ ] Confirm the full pack path `ian-xiaohei-illustrations/references/ips/ferris/`, raw output path `assets/<article-slug>-ferris/`, escaped output path `assets/&lt;article-slug&gt;-ferris/`, and source/trademark boundary appear in public docs and path-marker reviews.
- [ ] Record source/trademark review: PENDING / reviewer / date / approval status / source record / release channels / trademark and endorsement-safe wording outcome.
- [ ] Confirm Ferris route status remains `source-reviewed` across `ian-xiaohei-illustrations/references/routing.md`, `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and this checklist.

### Rust Trademark Wording Review

- [ ] Review `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/SKILL.md`, routing docs, `NOTICE.md`, release notes, generated samples, and this checklist for Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and broad release language.
- [ ] Confirm public Ferris route wording points to `ian-xiaohei-illustrations/references/ips/ferris/source.md` for the source/trademark boundary.
- [ ] Confirm generated public Ferris samples require release review for Rust trademark and endorsement-safe wording before release channels list them.

### Ferris Prompt Leakage Scan

- [ ] Scan Ferris planning, generation, edit, smoke, README, examples, routing, release notes, and delivery text for generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage, missing `source-reviewed`, missing `source.md`, and cross-route identity leakage.
- [ ] Confirm Ferris prompts keep Ferris as the active cognitive-action subject and keep source/trademark context attached to the route.
- [ ] Confirm Ferris wording stays route-local and does not leak Ferris identity, Rust trademark boundary text, or Rust-community mascot language into Xiaohei, Littlebox, or Tom route contracts.

### Ferris Public Asset Policy

- [ ] Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.
- [ ] Public rendered Ferris samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- [ ] Public rendered Ferris sample approval must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, allowed directories, release channels, and source/trademark authority.

### Ferris Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-ferris/` may be used for route-contract and pack-design review when the source record and source/trademark note stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-ferris/` require Ferris Public Asset Policy approval before release channels list or copy them into public sample directories.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.

### Final Ferris Release Review

- [ ] Final Ferris release review confirms `ian-xiaohei-illustrations/references/ips/ferris/source.md` is the authority for source context, Rust trademark boundary, distribution boundary, sample policy, and review owner.
- [ ] Final Ferris release review confirms NOTICE consistency, README/examples/metadata parity, routing parity, route status `source-reviewed`, public asset approvals, generated sample approvals, and Phase 15 validator/test evidence before v1.2 release.
- [ ] Final Ferris release review confirms public rendered assets in `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` have recorded approval status, reviewer, date, allowed directories, release channels, and trademark/endorsement outcome.

## Sealos Seal Brand, Uploaded Image, and Public Sample Gate

This section is the Sealos Seal maintainer release gate for source record review, uploaded-image identity, no-logo mascot identity, Sealos brand wording, prompt leakage, public assets, generated samples, validator evidence, release channels, and final brand review.

### Sealos Source Record Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/sealos/source.md` for source, brand context, canonical image authority, fixed visual markers, prior exploration boundary, route status, allowed use, restricted use, distribution boundary, sample policy, drift boundary, and review owner.
- [ ] Confirm route status remains `brand-owned`, canonical image status remains `uploaded-image-canonical`, and drift boundary remains `uploaded-image-locked`.
- [ ] Confirm `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md` keep Sealos Seal, route id `sealos`, `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, `assets/<article-slug>-sealos/`, `assets/&lt;article-slug&gt;-sealos/`, and `ian-xiaohei-illustrations/references/ips/sealos/source.md` aligned.
- [ ] Record source review: PENDING / reviewer / date / approval status / source record / release channels / uploaded-image identity outcome / no-logo outcome.

### Uploaded-Image Identity Review

- [ ] Confirm the uploaded Sealos Seal image preserves these markers exactly: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- [ ] Confirm no-logo review covers no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, no text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, and simplified logo mark across cap, hoodie chest, mascot body, props, and scene.
- [ ] Confirm public review blocks generic seals, abstract logo creatures, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, simplified logo mark, changed body color, missing side-rear tail, plain bald-head variants, prior exploration variants, and different selected mascot.
- [ ] Confirm prior Sealos mascot exploration supplies supporting brand context while the uploaded image stays the v1.3 canonical mascot reference.

### Sealos Brand and No-Logo Wording Review

- [ ] Review README, examples, routing docs, NOTICE, generated samples, and release notes for Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, Kubernetes, reliable cloud developer companion, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, and Sealos brand wording.
- [ ] Confirm cap, hoodie chest, mascot body, props, and scene stay free of cap logo, chest logo, mascot logos, logo patches, logo-like wave/cloud marks, emblems, and text badges.
- [ ] Confirm public rendered samples receive brand and no-logo review before publication.

### Sealos Prompt Leakage Scan

- [ ] Scan Sealos planning, generation, edit, smoke, README, examples, routing, release notes, and delivery text for generic seal drift, abstract logo creature drift, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, simplified logo mark, changed body color, missing side-rear tail, plain bald-head variants, prior exploration variants, different selected mascot drift, excessive text, route leakage, and public sample claims without approval.
- [ ] Confirm prompt leakage scan covers `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/sealos/`, `NOTICE.md`, and release notes.
- [ ] Confirm Sealos wording stays route-local and does not leak Sealos brand mascot rules into Xiaohei, Littlebox, Tom, or Ferris route contracts.

### Sealos Public Asset Policy

- [ ] Sealos public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-image identity outcome / no-logo outcome.
- [ ] Public rendered Sealos Seal samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- [ ] Public rendered Sealos sample approval must cover uploaded-image identity, no-logo mascot identity, cap/hoodie preservation, Sealos brand wording, allowed directories, release channels, and drift markers.

### Sealos Generated Sample Policy

- [ ] Internal review samples under `assets/<article-slug>-sealos/` may be used when the source record and brand/canonical-image note stay attached.
- [ ] Public rendered samples from `assets/<article-slug>-sealos/` require Sealos Public Asset Policy approval before release channels list or copy them into public sample directories.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.

### Final Sealos Release Review

- [ ] Final Sealos release review confirms `ian-xiaohei-illustrations/references/ips/sealos/source.md` is the authority for brand context, uploaded-image identity, distribution boundary, sample policy, and review owner.
- [ ] Final Sealos release review confirms NOTICE consistency, README/examples/metadata parity, routing parity, route status `brand-owned`, public asset approvals, generated sample approvals, and Phase 20 validator/test evidence before v1.3 release.
- [ ] Final Sealos release review confirms public rendered assets in `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` have recorded approval status, reviewer, date, allowed directories, release channels, uploaded-image identity outcome, and no-logo outcome.
- [ ] Final Sealos release review requires green evidence from `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

## Installable Package Boundary

- [ ] Confirm the installable Codex Skill package is `ian-xiaohei-illustrations/`.
- [ ] Confirm `ian-xiaohei-illustrations/` contains `SKILL.md`, `agents/openai.yaml`, `references/routing.md`, Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal canonical IP packs, legacy Xiaohei reference entry points, and skill-local assets.
- [ ] Confirm root `README.md`, `examples/`, `NOTICE.md`, `LICENSE`, and `RELEASE_CHECKLIST.md` remain public distribution and maintainer docs.
- [ ] Confirm generated article assets continue to save under route-specific workspace paths instead of inside the skill package.
- [ ] Confirm Phase 20 owns Sealos validator/test expectation updates for public docs, metadata parity, release gates, route leakage checks, public asset gates, generated sample gates, parser tests, and green Node evidence.

## Public Docs and Path Markers

- [ ] README documents Xiaohei as the default visual IP, Littlebox as an explicit active route, Tom as an explicit `gated-authorized` protected-character route, Ferris as an explicit `source-reviewed` Rust-community mascot route, and Sealos Seal as an explicit `brand-owned` Sealos brand mascot route.
- [ ] README, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md` keep public Ferris source/trademark wording aligned.
- [ ] README, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md` keep public Sealos Seal brand/canonical-image wording aligned.
- [ ] README and `examples/prompts.md` keep raw and escaped output markers for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal: `assets/<article-slug>-illustrations/`, `assets/&lt;article-slug&gt;-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/<article-slug>-tom/`, `assets/&lt;article-slug&gt;-tom/`, `assets/<article-slug>-ferris/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/<article-slug>-sealos/`, and `assets/&lt;article-slug&gt;-sealos/`.
- [ ] README keeps route metadata link `ian-xiaohei-illustrations/references/routing.md`.
- [ ] README, prompt docs, and release docs keep canonical pack paths for `ian-xiaohei-illustrations/references/ips/xiaohei/`, `ian-xiaohei-illustrations/references/ips/littlebox/`, `ian-xiaohei-illustrations/references/ips/tom/`, `ian-xiaohei-illustrations/references/ips/ferris/`, and `ian-xiaohei-illustrations/references/ips/sealos/`.
- [ ] Ferris public docs keep `ian-xiaohei-illustrations/references/ips/ferris/source.md`, `source-reviewed`, `assets/<article-slug>-ferris/`, `assets/&lt;article-slug&gt;-ferris/`, public Ferris sample release-review wording, and the Phase 15 validator/test boundary visible before v1.2 release.
- [ ] Sealos public docs keep `ian-xiaohei-illustrations/references/ips/sealos/source.md`, `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, `assets/<article-slug>-sealos/`, `assets/&lt;article-slug&gt;-sealos/`, public rendered Sealos sample release-review wording, and the Phase 20 validator/test boundary visible before v1.3 release.
