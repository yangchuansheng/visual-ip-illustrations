# Visual IP Routing

This file defines visual-IP selection rules and verifiable route metadata for the skill entrypoint. `SKILL.md` selects the visual IP first, then loads only the selected route's reference files.

## Route Selection Rules

- Omitted visual IP selects `xiaohei`.
- `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei` select the same `xiaohei` route.
- `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton` select the same `littlebox` route.
- `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫` select the same `tom` route and keep route status `gated-authorized`.
- `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` select the same `ferris` route and keep route status `source-reviewed`.
- `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal` select the same `sealos` route and keep route status `brand-owned`.
- Mixed requests across Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal create separate route groups. Compatibility marker: 每个 route group 只加载自己的 `required_references`; each group writes to its own output directory.
- Routes store only selection, references, output suffixes, and attribution context. Style, character identity, prompt wording, and QA rules live in the selected IP's reference files.
- Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Ferris route-local reference directory: `ian-xiaohei-illustrations/references/ips/ferris/`.
- Ferris source/trademark authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- Sealos Seal is an explicit brand mascot route with status brand-owned; generated public Sealos samples require release review for uploaded-image identity, no-logo mascot identity, and Sealos brand wording.
- Sealos Seal route-local reference directory: `ian-xiaohei-illustrations/references/ips/sealos/`.
- Sealos Seal brand/canonical-image authority: `ian-xiaohei-illustrations/references/ips/sealos/source.md`.

## IP Routes

| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | `references/ips/littlebox/style-dna.md`; `references/ips/littlebox/littlebox-ip.md`; `references/ips/littlebox/composition-patterns.md`; `references/ips/littlebox/language-and-labels.md`; `references/ips/littlebox/prompt-template.md`; `references/ips/littlebox/qa-checklist.md` | 5km Littlebox Illustrations by okooo5km; source https://github.com/okooo5km/5km-littlebox-illustrations; MIT; inspected commit 37cd93e | `active` |
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
| `sealos` | Sealos Seal | `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal` | `false` | `sealos` | `references/ips/sealos/index.md`; `references/ips/sealos/source.md`; `references/ips/sealos/style-dna.md`; `references/ips/sealos/sealos-ip.md`; `references/ips/sealos/composition-patterns.md`; `references/ips/sealos/prompt-template.md`; `references/ips/sealos/qa-checklist.md` | Sealos uploaded mascot image; attribution records uploaded-image authority, no-logo mascot identity, and brand/canonical-image boundary through `references/ips/sealos/source.md` | `brand-owned` |

## Sealos Seal Metadata

- `brand_context`: reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes
- `canonical_image_status`: uploaded-image-canonical
- `drift_boundary`: uploaded-image-locked
- Fixed visual markers: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- No-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.
- Authority boundary: the uploaded mascot image is the v1.3 shape authority; prior Sealos mascot exploration supplies supporting brand context.

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
- `sealos` output directory is `assets/<article-slug>-sealos/`; validation also keeps escaped marker `assets/&lt;article-slug&gt;-sealos/`.
- `sealos` filenames use ordered English slugs such as `01-topic-name.png`.
- Mixed-IP requests split by IP into separate route groups: `xiaohei` 写入 `assets/<article-slug>-illustrations/`, `littlebox` 写入 `assets/<article-slug>-littlebox/`, `tom` 写入 `assets/<article-slug>-tom/`, `ferris` 写入 `assets/<article-slug>-ferris/`, and `sealos` writes to `assets/<article-slug>-sealos/`.
- Before output, inspect the target directory and choose a new filename to preserve historical results.

## Delivery Report Fields

Each generated-image delivery states:

- selected visual IP
- image count
- purpose per image
- saved path
- stability notes: strongest images and optional images
