# Visual IP Routing

This file defines visual-IP selection rules and verifiable route metadata for the skill entrypoint. `SKILL.md` selects the visual IP first, then loads only the selected route's reference files.

## Route Selection Rules

- Omitted visual IP selects `xiaohei`.
- `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei` select the same `xiaohei` route.
- `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton` select the same `littlebox` route.
- `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫` select the same `tom` route and keep route status `gated-authorized`.
- `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` select the same `ferris` route and keep route status `source-reviewed`.
- `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, and `蓝色连帽衫海豹` select the same `seal` route and keep route status `active`.
- `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, `OpenClaw 助手`, and `OpenClaw 吉祥物` select the same `openclaw` route and keep route status `source-reviewed`.
- `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, and `Gopher 吉祥物` select the same `gopher` route and keep route status `source-reviewed`.
- Go Gopher route matching requires Go Gopher, Gopher, golang gopher, or a Go Gopher-qualified route phrase; generic aliases such as `go`, `blue mascot`, `animal`, and `logo` remain outside the Go Gopher alias set.
- Mixed requests across Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher create separate route groups. Compatibility marker: 每个 route group 只加载自己的 `required_references`; each group writes to its own output directory.
- Routes store only selection, references, output suffixes, and attribution context. Style, character identity, prompt wording, and QA rules live in the selected IP's reference files.
- Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Ferris route-local reference directory: `ian-xiaohei-illustrations/references/ips/ferris/`.
- Ferris source/trademark authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- Seal is an explicit hoodie seal route with status active; generated public Seal samples require release review for hoodie seal identity and no-logo mascot identity.
- Seal route-local reference directory: `ian-xiaohei-illustrations/references/ips/seal/`.
- Seal source-history authority: `ian-xiaohei-illustrations/references/ips/seal/source.md`.
- OpenClaw is an explicit source-reviewed logo-mascot route; generated public OpenClaw samples require release review for uploaded-logo identity and source/license authority.
- OpenClaw route-local reference directory: `ian-xiaohei-illustrations/references/ips/openclaw/`.
- OpenClaw source and uploaded-logo authority: `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
- Go Gopher is an explicit source-reviewed article-illustration mascot route; generated public Go Gopher samples require release review for Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 license boundary, root `gopher.png` local visual authority, Go logo boundary, and official Go project affiliation, approval, sponsorship, and endorsement claim boundaries.
- Go Gopher route-local reference directory: `ian-xiaohei-illustrations/references/ips/gopher/`.
- Go Gopher source and local visual authority: `ian-xiaohei-illustrations/references/ips/gopher/source.md`.

## IP Routes

| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | `references/ips/littlebox/style-dna.md`; `references/ips/littlebox/littlebox-ip.md`; `references/ips/littlebox/composition-patterns.md`; `references/ips/littlebox/language-and-labels.md`; `references/ips/littlebox/prompt-template.md`; `references/ips/littlebox/qa-checklist.md` | 5km Littlebox Illustrations by okooo5km; source https://github.com/okooo5km/5km-littlebox-illustrations; MIT; inspected commit 37cd93e | `active` |
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
| `seal` | Seal | `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹` | `false` | `seal` | `references/ips/seal/index.md`; `references/ips/seal/source.md`; `references/ips/seal/style-dna.md`; `references/ips/seal/seal-ip.md`; `references/ips/seal/composition-patterns.md`; `references/ips/seal/prompt-template.md`; `references/ips/seal/qa-checklist.md` | Historical Sealos uploaded mascot image source context; attribution records hoodie seal identity, no-logo mascot identity, and source-history boundary through `references/ips/seal/source.md` | `active` |
| `openclaw` | OpenClaw | `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, `OpenClaw 助手`, `OpenClaw 吉祥物` | `false` | `openclaw` | `references/ips/openclaw/index.md`; `references/ips/openclaw/source.md`; `references/ips/openclaw/style-dna.md`; `references/ips/openclaw/openclaw-ip.md`; `references/ips/openclaw/composition-patterns.md`; `references/ips/openclaw/prompt-template.md`; `references/ips/openclaw/qa-checklist.md` | Official OpenClaw repository https://github.com/openclaw/openclaw; MIT License; Copyright (c) 2026 OpenClaw Foundation; uploaded red OpenClaw logo visual authority; source-reviewed route status through `references/ips/openclaw/source.md` | `source-reviewed` |
| `gopher` | Go Gopher | `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物` | `false` | `gopher` | `references/ips/gopher/index.md`; `references/ips/gopher/source.md`; `references/ips/gopher/style-dna.md`; `references/ips/gopher/gopher-ip.md`; `references/ips/gopher/composition-patterns.md`; `references/ips/gopher/prompt-template.md`; `references/ips/gopher/qa-checklist.md` | Official Go blog source https://go.dev/blog/gopher; Go Gopher created by Renee French; Creative Commons Attribution 4.0 license context; root `gopher.png` local visual authority; public generated Go Gopher samples require release review; Go logo identity and official Go project affiliation, approval, sponsorship, and endorsement claims stay outside positive route identity | `source-reviewed` |

## OpenClaw Metadata

- Route id: `openclaw`.
- Source authority: official OpenClaw repository, MIT License, and OpenClaw Foundation copyright.
- Uploaded-logo authority: the uploaded red OpenClaw logo is the route visual authority.
- Fixed uploaded-logo markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Route status: `source-reviewed`.
- Output path: `assets/<article-slug>-openclaw/`; escaped marker `assets/&lt;article-slug&gt;-openclaw/`.

## Go Gopher Metadata

- Route id: `gopher`.
- Display name: Go Gopher.
- Default marker: `default=false`.
- Source authority: official Go blog source `https://go.dev/blog/gopher`, Renee French attribution, Creative Commons Attribution 4.0 license context, and root `gopher.png` local visual authority.
- Route status: `source-reviewed`.
- Output path: `assets/<article-slug>-gopher/`; escaped marker `assets/&lt;article-slug&gt;-gopher/`.
- Source record: `references/ips/gopher/source.md`.
- Route framing: Go Gopher is an article-illustration mascot route with attribution/license context and public generated sample release review.
- Identity boundary: Go logo identity and official Go project affiliation, approval, sponsorship, and endorsement claims stay outside positive route identity.

## Seal Metadata

- `source_history`: former Sealos Seal route identity migrated to product-neutral Seal
- `canonical_image_status`: uploaded-image-canonical
- `drift_boundary`: uploaded-image-locked
- Fixed visual markers: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- No-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.
- Authority boundary: the uploaded mascot image is the v1.3 shape authority; prior Sealos context remains historical source evidence.

## Legacy Path Availability

Root Xiaohei reference paths remain available during migration and point to canonical pack files:

- `references/style-dna.md` -> `references/ips/xiaohei/style-dna.md`
- `references/xiaohei-ip.md` -> `references/ips/xiaohei/xiaohei-ip.md`
- `references/composition-patterns.md` -> `references/ips/xiaohei/composition-patterns.md`
- `references/prompt-template.md` -> `references/ips/xiaohei/prompt-template.md`
- `references/qa-checklist.md` -> `references/ips/xiaohei/qa-checklist.md`

## Output Paths

- `xiaohei` output directory remains `assets/<article-slug>-illustrations/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-illustrations/`.
- `xiaohei` filenames continue to use ordered English slugs such as `01-topic-name.png`.
- `littlebox` output directory is `assets/<article-slug>-littlebox/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-littlebox/`.
- `littlebox` filenames use ordered English slugs such as `01-topic-name.png`.
- `tom` output directory is `assets/<article-slug>-tom/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-tom/`.
- `tom` filenames use ordered English slugs such as `01-topic-name.png`.
- `ferris` output directory is `assets/<article-slug>-ferris/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-ferris/`.
- `ferris` filenames use ordered English slugs such as `01-topic-name.png`.
- `seal` output directory is `assets/<article-slug>-seal/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-seal/`.
- `seal` filenames use ordered English slugs such as `01-topic-name.png`.
- `openclaw` output directory is `assets/<article-slug>-openclaw/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-openclaw/`.
- `openclaw` filenames use ordered English slugs such as `01-topic-name.png`.
- `gopher` output directory is `assets/<article-slug>-gopher/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-gopher/`.
- `gopher` filenames use ordered English slugs such as `01-topic-name.png`.
- Mixed-IP requests split by IP into separate route groups: `xiaohei` 写入 `assets/<article-slug>-illustrations/`, `littlebox` 写入 `assets/<article-slug>-littlebox/`, `tom` 写入 `assets/<article-slug>-tom/`, `ferris` 写入 `assets/<article-slug>-ferris/`, `seal` writes to `assets/<article-slug>-seal/`, `openclaw` writes to `assets/<article-slug>-openclaw/`, and `gopher` writes to `assets/<article-slug>-gopher/`.
- Before output, inspect the target directory and choose a new filename to preserve historical results.

## Delivery Report Fields

Each generated-image delivery states:

- selected visual IP
- image count
- purpose per image
- saved path
- stability notes: strongest images and optional images
