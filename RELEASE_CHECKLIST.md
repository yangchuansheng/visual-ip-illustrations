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

Validator marker changes require `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` to pass in the same change set.

## Route Smoke Prompts

- [ ] Omitted-IP Xiaohei smoke: use `$ian-xiaohei-illustrations` with no visual IP name and confirm the selected route is Xiaohei.
- [ ] Explicit Xiaohei smoke: request `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei` and confirm output path `assets/<article-slug>-illustrations/`.
- [ ] Explicit Littlebox smoke: request `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton` and confirm `Littlebox state: closed`, assigned background, and output path `assets/<article-slug>-littlebox/`.
- [ ] Explicit Tom smoke: request `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, or `汤姆猫` and confirm route status `gated-authorized`, rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and output path `assets/<article-slug>-tom/`.
- [ ] Explicit Ferris smoke: request `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, or `Rust 螃蟹` and confirm route status `source-reviewed`, source record `ian-xiaohei-illustrations/references/ips/ferris/source.md`, and output path `assets/<article-slug>-ferris/`.
- [ ] Mixed-IP smoke: request the same core idea as Xiaohei, Littlebox, Tom, and Ferris variant groups and confirm each group loads its own references and output path.

Use the smoke prompt inventory in `examples/prompts.md` as the copy source.

## Attribution Review

- [ ] Review `NOTICE.md` for Ian Xiaohei attribution.
- [ ] Review `NOTICE.md` for Littlebox attribution: author `okooo5km`, source repository, MIT context, inspected commit `37cd93e`, and derived documentation notes.
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

This section is the Ferris maintainer release gate for source record review, Rust trademark wording, public rendered samples, release channels, and final endorsement-safe wording review.

### Ferris Source Record Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/ferris/source.md` for source, author and source sites, copyright waiver, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Record source/trademark review: PENDING / reviewer / date / approval status / source record / release channels.
- [ ] Confirm Ferris route status remains `source-reviewed` across `ian-xiaohei-illustrations/references/routing.md`, `README.md`, `examples/prompts.md`, and this checklist.

### Rust Trademark Wording Review

- [ ] Review public wording for Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, and endorsement wording.
- [ ] Confirm public Ferris route wording points to `ian-xiaohei-illustrations/references/ips/ferris/source.md` for the source/trademark boundary.
- [ ] Confirm generated public Ferris samples require release review for Rust trademark and endorsement-safe wording before release channels list them.

### Public Rendered Ferris Sample Gate

- [ ] Public rendered Ferris samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
- [ ] Public rendered Ferris samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- [ ] Public rendered Ferris sample approval must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, allowed directories, and release channels.

### Final Ferris Release Review

- [ ] Final Ferris release review confirms `ian-xiaohei-illustrations/references/ips/ferris/source.md` is the authority for source context, Rust trademark boundary, distribution boundary, sample policy, and review owner.
- [ ] Final Ferris release review confirms public rendered assets in `examples/images/` and `ian-xiaohei-illustrations/assets/examples/` have recorded approval status, reviewer, date, allowed directories, and release channels.

## Installable Package Boundary

- [ ] Confirm the installable Codex Skill package is `ian-xiaohei-illustrations/`.
- [ ] Confirm `ian-xiaohei-illustrations/` contains `SKILL.md`, `agents/openai.yaml`, `references/routing.md`, both canonical IP packs, legacy Xiaohei reference entry points, and skill-local assets.
- [ ] Confirm root `README.md`, `examples/`, `NOTICE.md`, `LICENSE`, and `RELEASE_CHECKLIST.md` remain public distribution and maintainer docs.
- [ ] Confirm generated article assets continue to save under route-specific workspace paths instead of inside the skill package.

## Public Docs and Path Markers

- [ ] README documents Xiaohei as the default visual IP.
- [ ] README documents Littlebox as an explicit selectable IP.
- [ ] README and `examples/prompts.md` keep raw and escaped output markers for Xiaohei and Littlebox.
- [ ] README keeps route metadata link `ian-xiaohei-illustrations/references/routing.md`.
- [ ] README or prompt docs keep canonical pack paths for `ian-xiaohei-illustrations/references/ips/xiaohei/` and `ian-xiaohei-illustrations/references/ips/littlebox/`.

## Phase 5 Scope Fences

- [ ] No CI workflow is added in this phase.
- [ ] No release archive or archive script is added in this phase.
- [ ] No rendered Littlebox public image import is added in this phase.
- [ ] No asset manifest is added in this phase.
- [ ] No third-IP or third-IP schema is added in this phase.
