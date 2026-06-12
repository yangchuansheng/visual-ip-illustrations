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

## Both-IP Smoke Prompts

- [ ] Omitted-IP Xiaohei smoke: use `$ian-xiaohei-illustrations` with no visual IP name and confirm the selected route is Xiaohei.
- [ ] Explicit Xiaohei smoke: request `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei` and confirm output path `assets/<article-slug>-illustrations/`.
- [ ] Explicit Littlebox smoke: request `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton` and confirm `Littlebox state: closed`, assigned background, and output path `assets/<article-slug>-littlebox/`.
- [ ] Mixed-IP smoke: request the same core idea as Xiaohei and Littlebox variant groups and confirm each group loads its own references and output path.

Use the smoke prompt inventory in `examples/prompts.md` as the copy source.

## Attribution Review

- [ ] Review `NOTICE.md` for Ian Xiaohei attribution.
- [ ] Review `NOTICE.md` for Littlebox attribution: author `okooo5km`, source repository, MIT context, inspected commit `37cd93e`, and derived documentation notes.
- [ ] Confirm public docs and release notes keep attribution language aligned with `NOTICE.md`.

## Tom Rights and Public Sample Gate

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm Tom route status is `gated-authorized` across `ian-xiaohei-illustrations/references/routing.md`, `README.md`, `examples/prompts.md`, and this checklist.
- [ ] Confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- [ ] Confirm public docs include Tom output path markers `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date

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
