---
name: visual-ip-illustrations
description: Visual IP Illustrations generates selectable visual-IP article-body illustrations for Chinese articles, posts, blogs, Notion docs, workflow docs, methods, processes, structures, states, metaphors, opinions, shot lists, title-removal edits, and image repair. The omitted visual IP default is Xiaohei, with route alias 小黑 preserved; Littlebox, Tom, Ferris, and Sealos Seal are explicit selectable routes.
---

# Visual IP Illustrations

## Core Positioning

Visual IP Illustrations designs and generates 16:9 horizontal article-body illustrations. The goal is to turn a key judgment, process, structure, state, or metaphor from the article into a clean, strange, creative, readable hand-drawn explanatory image.

Canonical invocation: `$visual-ip-illustrations`.

Compatibility marker: `$ian-xiaohei-illustrations 是 v1.4 compatibility alias`; existing prompts can continue using `$ian-xiaohei-illustrations` during the v1.4 local migration window.

## 1.4 Runtime Identity and Local Migration

- Canonical runtime identity: Visual IP Illustrations.
- Canonical skill invocation: `$visual-ip-illustrations`.
- v1.4 compatibility alias: `$ian-xiaohei-illustrations`.
- Canonical package slug/path: `visual-ip-illustrations`.
- Legacy package slug/path: `ian-xiaohei-illustrations`.
- Local migration: install or copy the package as `visual-ip-illustrations` for canonical discovery while keeping `ian-xiaohei-illustrations` available for existing prompts during v1.4.

## Visual IP Routes

The omitted visual IP default is Xiaohei. Compatibility marker: 用户省略视觉 IP 时，默认选择小黑路由. Omitted visual IP selects only the Xiaohei route.

Xiaohei is a black solid-bodied character with white dot eyes, thin legs, and a blank expression. Xiaohei performs one serious, absurd, conceptually valid action and carries the central cognitive action in the image.

Littlebox is an explicit route for a closed paper-box character. It uses thick rough black marker linework, a pale sky-blue or pale lavender background, amber seam tape, and sparse coral accents. It translates the same cognitive action into collecting, packaging, sorting, delivering, blocking, or repairing.

Tom is an explicit protected-character route: route id `tom`, display name `Tom`, default=false, output_suffix: tom, route status `gated-authorized`. Tom rights authority is `references/ips/tom/rights.md`, and planning, generation, QA, edit, and delivery surfaces keep the rights-status note.

Ferris is an explicit Rust-community mascot route: route id `ferris`, display name `Ferris`, default=false, output_suffix: ferris, route status `source-reviewed`. Ferris source/trademark authority is `references/ips/ferris/source.md`, and planning, generation, QA, edit, and delivery surfaces keep the source/trademark note.

Sealos Seal is an explicit brand-owned route: route id `sealos`, display name `Sealos Seal`, default=false, output_suffix: sealos, route status `brand-owned`. Sealos Seal brand/canonical-image authority is `references/ips/sealos/source.md`, and planning, generation, QA, edit, and delivery surfaces keep the brand/canonical-image note.

Sealos Seal imagery is logo-free: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

## Reference Loading

Read `references/routing.md` first, then load only the selected route's required references. Keep context route-local and task-scoped.

- `references/routing.md`: visual IP routes, aliases, defaults, output suffixes, required references, attribution contexts, and route statuses.
- `references/ips/xiaohei/index.md`: Xiaohei canonical pack navigation, file responsibilities, and output path.
- `references/ips/xiaohei/style-dna.md`: Xiaohei style DNA, color, text, and vetoes.
- `references/ips/xiaohei/xiaohei-ip.md`: Xiaohei character identity, personality, action library, and vetoes.
- `references/ips/xiaohei/composition-patterns.md`: Xiaohei structure types, original metaphor method, and anti-copy rules.
- `references/ips/xiaohei/prompt-template.md`: Xiaohei single-image prompt template.
- `references/ips/xiaohei/qa-checklist.md`: Xiaohei post-generation checks and iteration rules.
- `references/ips/littlebox/index.md`: Littlebox canonical pack navigation, file responsibilities, source attribution, and output path.
- `references/ips/littlebox/style-dna.md`: Littlebox visual language, background pool, marker linework, color, labels, and vetoes.
- `references/ips/littlebox/littlebox-ip.md`: Littlebox closed paper-box identity, tape, arms, lid, actions, and failure modes.
- `references/ips/littlebox/composition-patterns.md`: Littlebox composition families, physical metaphors, spatial rules, flow rules, and anti-copy rules.
- `references/ips/littlebox/language-and-labels.md`: Littlebox English prompt rules, user's-language visible labels, planning notes, and delivery-note rules.
- `references/ips/littlebox/prompt-template.md`: Littlebox shot-list format, single-image English prompt template, and edit prompts.
- `references/ips/littlebox/qa-checklist.md`: Littlebox post-generation identity, linework, label, background, action, and delivery checks.
- `references/ips/tom/index.md`: Tom canonical pack navigation, route status, rights authority, output path, and reference list.
- `references/ips/tom/rights.md`: Tom authorization scope, distribution boundary, public-sample policy, reviewer fields, and route-status authority.
- `references/ips/tom/style-dna.md`: Tom sparse article-illustration style, recognition cues, protected-route visual vetoes, and route leakage signals.
- `references/ips/tom/tom-ip.md`: Tom identity, solo route boundary, cognitive-action responsibility, recognition gates, and failure modes.
- `references/ips/tom/composition-patterns.md`: Tom composition families, supporting objects, original metaphor gates, and protected-route gates.
- `references/ips/tom/prompt-template.md`: Tom planning fields, single-image prompt, edit gates, rights-status note, and output reminder.
- `references/ips/tom/qa-checklist.md`: Tom protected-route QA, failure categories, repair moves, and delivery judgment.
- `references/ips/ferris/index.md`: Ferris canonical pack navigation, route status, source/trademark authority, output path, and reference list.
- `references/ips/ferris/source.md`: Ferris source context, CC0/public-domain context, Rust trademark boundary, public-sample policy, reviewer fields, and route-status authority.
- `references/ips/ferris/style-dna.md`: Ferris sparse article-illustration style, recognition cues, source/trademark visual vetoes, and route leakage signals.
- `references/ips/ferris/ferris-ip.md`: Ferris identity, route boundary, cognitive-action responsibility, recognition gates, and failure modes.
- `references/ips/ferris/composition-patterns.md`: Ferris composition families, Rust-themed supporting objects, original metaphor gates, and source/trademark gates.
- `references/ips/ferris/prompt-template.md`: Ferris planning fields, single-image prompt, edit gates, source/trademark note, and output reminder.
- `references/ips/ferris/qa-checklist.md`: Ferris source-reviewed QA, failure categories, repair moves, and delivery judgment.
- `references/ips/sealos/index.md`: Sealos Seal canonical pack navigation, route status, brand/canonical-image authority, output path, and reference list.
- `references/ips/sealos/source.md`: Sealos Seal brand context, uploaded-image authority, fixed visual markers, public-sample policy, reviewer fields, and route-status authority.
- `references/ips/sealos/style-dna.md`: Sealos Seal sparse article-illustration style, uploaded-image identity markers, visual vetoes, and route gates.
- `references/ips/sealos/sealos-ip.md`: Sealos Seal mascot identity, reliable cloud developer companion role, cognitive-action responsibility, recognition gates, and failure modes.
- `references/ips/sealos/composition-patterns.md`: Sealos Seal composition families, cloud-developer supporting objects, original metaphor gates, and brand/canonical-image gates.
- `references/ips/sealos/prompt-template.md`: Sealos Seal planning fields, single-image prompt, edit gates, brand/canonical-image note, and output reminder.
- `references/ips/sealos/qa-checklist.md`: Sealos Seal brand-owned QA, failure categories, repair moves, and delivery judgment.
- `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, `references/qa-checklist.md`: legacy root compatibility entry points for existing prompts and docs; current Xiaohei behavior reads the canonical `references/ips/xiaohei/` files.
- `assets/examples/`: low-frequency visual calibration only. Use them for density and participation calibration, then create a fresh metaphor for the current article.

## Workflow

### 1. Select the Visual IP Route

Read `references/routing.md` first and choose the route for the current task.

- Omitted visual IP selects `xiaohei`.
- `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei` select the same Xiaohei route.
- `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton` select the same Littlebox route.
- `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫` select the same Tom route: route id `tom`, display name `Tom`, default=false, output_suffix: tom, route status `gated-authorized`, rights pointer `references/ips/tom/rights.md`.
- `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` select the same Ferris route: route id `ferris`, display name `Ferris`, default=false, output_suffix: ferris, route status `source-reviewed`, source/trademark pointer `references/ips/ferris/source.md`.
- `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal` select the same Sealos Seal route: route id `sealos`, display name `Sealos Seal`, default=false, output_suffix: sealos, route status `brand-owned`, source pointer `references/ips/sealos/source.md`.
- Mixed requests across Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal first identify one shared core idea, then create separate route groups. Each selected variant group uses its own route id, required_references, prompt template, composition rules, QA, edit repairs, output_suffix, route note, and output directory.
- Xiaohei keeps the `$ian-xiaohei-illustrations` compatibility behavior and `assets/<article-slug>-illustrations/` output path; canonical invocation is `$visual-ip-illustrations`.
- Littlebox uses `assets/<article-slug>-littlebox/`.
- Tom uses `assets/<article-slug>-tom/` and keeps `gated-authorized` plus `references/ips/tom/rights.md` in planning, generation, QA, edit, and delivery.
- Ferris uses `assets/<article-slug>-ferris/` and keeps `source-reviewed` plus `references/ips/ferris/source.md` in planning, generation, QA, edit, and delivery.
- Sealos Seal uses `assets/<article-slug>-sealos/` and keeps `brand-owned` plus `references/ips/sealos/source.md` in planning, generation, QA, edit, and delivery.
- Xiaohei `required_references` point to the canonical `references/ips/xiaohei/` pack; root paths remain compatibility entry points.
- Littlebox `required_references` point to `references/ips/littlebox/`: `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- Tom `required_references` point to `references/ips/tom/`: `index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Ferris `required_references` point to `references/ips/ferris/`: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Sealos Seal `required_references` point to `references/ips/sealos/`: `index.md`, `source.md`, `style-dna.md`, `sealos-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Each variant group loads only its own `required_references` and uses its own action library, metaphor rules, background rules, labels, QA, and output path.
- The shared workflow handles article comprehension, cognitive-anchor selection, shot planning, one-image generation, QA handoff, asset preservation, and delivery reporting.
- Visual style, character identity, prompt wording, and QA details come from the selected IP's reference files.

### 2. Read and Digest the Source Article

Read the user's article, link, Notion page, Markdown file, screenshot, or pasted text. Extract:

- the core claim
- paragraphs that carry cognitive turns
- ideas that benefit from visual explanation
- text-only passages

Prioritize cognitive anchors such as a core judgment, two breakpoints, an input-output loop, a split path, before/after contrast, one source used multiple ways, a handoff path, a common pitfall, or a role-state shift.

### 3. Plan the Shot List First

When the user asks for planning, analysis, or placement recommendations, return a shot list. For each image, include:

- placement after the paragraph
- topic
- core idea
- structure type
- selected visual IP's central action
- suggested elements
- suggested visible labels in the user's language

Littlebox shot-list entries also include:

- Placement
- Core idea
- `Littlebox state: closed`
- Visual metaphor
- Assigned background: `#E3F2FD` or `#E6E6FA`
- Suggested objects
- Short visible labels copied in the user's language

For Littlebox multi-image planning, assign backgrounds before generation. Even counts use the same number of `#E3F2FD` and `#E6E6FA`; odd counts differ by at most one unless article rhythm requires a stronger sequence. Littlebox planning notes, visible labels, and delivery notes follow the user's language. Generation prompts sent to the image model stay English and quote the visible labels exactly in the user's language.

Tom shot-list entries use `references/ips/tom/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- Tom state
- Tom action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-tom/`
- Rights-status note: Tom is a `gated-authorized` protected-character route; check `references/ips/tom/rights.md` for authorization scope and distribution boundary.

Ferris shot-list entries use `references/ips/ferris/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- Ferris state
- Ferris action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-ferris/`
- Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `references/ips/ferris/source.md` for source context and trademark boundary.

Sealos Seal shot-list entries use `references/ips/sealos/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- Mascot state
- Mascot action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-sealos/`
- Brand/canonical-image note: Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with plain navy cap with no logo, plain deep-blue hoodie chest with no logo, and fixed identity markers from source.md.
- No-logo note: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

Sealos planning prose can follow the user's language. Sealos image-generation prompts stay English. Visible labels are copied exactly in the user's language. Sealos Seal performs the central cognitive action. Prefer one or two cloud-developer supporting objects, then assign a Mascot action such as deploy, launch, connect, debug, route, lift, inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, or guide.

Mixed-IP shot lists first state the shared core idea, then split into independent selected route groups:

- Xiaohei variant group: Xiaohei action, white-background hand-drawn metaphor, suggested labels, `references/ips/xiaohei/` QA, `assets/<article-slug>-illustrations/`
- Littlebox variant group: `Littlebox state: closed`, visual metaphor, assigned background, suggested objects, short visible labels, `references/ips/littlebox/` QA, `assets/<article-slug>-littlebox/`
- Tom variant group: Tom state, Tom action, supporting objects, visible labels, `references/ips/tom/` QA, `assets/<article-slug>-tom/`, rights-status note, `gated-authorized`, `references/ips/tom/rights.md`
- Ferris variant group: Ferris state, Ferris action, supporting objects, visible labels, `references/ips/ferris/` QA, `assets/<article-slug>-ferris/`, source/trademark note, `source-reviewed`, `references/ips/ferris/source.md`
- Sealos Seal variant group: Mascot state, Mascot action, supporting objects, visible labels, `references/ips/sealos/` QA, `assets/<article-slug>-sealos/`, brand/canonical-image note, `brand-owned`, `references/ips/sealos/source.md`

Default to 4-8 images. Short articles usually need 1-3. Long articles usually stay within 9 images.

### 4. Generate One Image at a Time

When the user explicitly asks to generate, output, make, or create images, call the host-provided `image_gen` capability directly. Compatibility markers: 每张单独生成; 不要把多张图拼在一张里. Use one image-generation call per image.

Each image explains one core structure. Load the selected route's `required_references`, then assemble the prompt with that IP's template, character rules, composition rules, and QA references.

Xiaohei continues to use the canonical references: `references/ips/xiaohei/style-dna.md`, `references/ips/xiaohei/xiaohei-ip.md`, `references/ips/xiaohei/composition-patterns.md`, `references/ips/xiaohei/prompt-template.md`, and `references/ips/xiaohei/qa-checklist.md`. Legacy root paths `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md` remain legacy compatibility entry points. Xiaohei prompts keep these markers:

- 16:9 horizontal Chinese article-body illustration
- clean white background
- black hand-drawn linework
- sparse red/orange/blue Chinese handwritten annotations
- generous whitespace
- Xiaohei as the central action subject
- block PPT style, commercial illustration style, childish cute style, complex architecture, and top-left type titles

Littlebox uses `references/ips/littlebox/prompt-template.md` for each English prompt and `references/ips/littlebox/language-and-labels.md` for user's-language labels. Littlebox prompts keep:

- 16:9 horizontal article illustration
- flat `#E3F2FD` or `#E6E6FA` background
- thick rough black marker linework
- dry-brush texture
- near-white closed paper-box body
- `Littlebox state: closed`
- front-left three-quarter view
- dot eyes on front panel
- tiny legs
- at most two side-seam twig arms
- exactly one amber seam tape with jagged torn front tab
- sparse amber/coral accents
- short visible labels copied exactly in the user's language

Tom loads only Tom `required_references`, uses `references/ips/tom/prompt-template.md` plus `references/ips/tom/composition-patterns.md`, then checks output with `references/ips/tom/qa-checklist.md`. Tom generation context always keeps route status `gated-authorized` and rights pointer `references/ips/tom/rights.md`. Tom prompts keep:

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article illustration on clean white or near-white background
- rough black linework with generous whitespace
- Tom from Tom and Jerry as the central cognitive action subject
- recognizable Tom cues: grey or blue-grey body, white muzzle, white belly areas, expressive ears, long tail, visible paws, Tom-like head shape and body silhouette
- short visible labels copied exactly in the user's language
- route status note: `gated-authorized`
- rights authority: `references/ips/tom/rights.md`
- save reminder: `assets/<article-slug>-tom/`
- protected-route block: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage all fail the route

Ferris loads only Ferris `required_references`, uses `references/ips/ferris/prompt-template.md` plus `references/ips/ferris/composition-patterns.md`, then checks output with `references/ips/ferris/qa-checklist.md`. Ferris generation context always keeps route status `source-reviewed` and source/trademark pointer `references/ips/ferris/source.md`. Ferris prompts keep:

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article illustration on clean white or near-white background
- rough black linework with generous whitespace
- Ferris as the central cognitive action subject
- recognizable Ferris cues: compact orange/rust-red crab body, broad crab shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and active body language
- short visible labels copied exactly in the user's language
- route status note: `source-reviewed`
- source/trademark authority: `references/ips/ferris/source.md`
- source/trademark note covering Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording
- save reminder: `assets/<article-slug>-ferris/`
- Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route

Sealos Seal loads only Sealos `required_references`, uses `references/ips/sealos/prompt-template.md` plus `references/ips/sealos/composition-patterns.md`, then checks output with `references/ips/sealos/qa-checklist.md`. Sealos generation context always keeps route status `brand-owned`, brand/canonical-image authority `references/ips/sealos/source.md`, canonical image status `uploaded-image-canonical`, drift boundary `uploaded-image-locked`, and output path `assets/<article-slug>-sealos/`. Sealos prompts keep:

- one standalone 16:9 horizontal article illustration
- original cloud-developer article metaphor
- sparse hand-drawn article style on clean white or near-white background
- loose black linework with generous whitespace
- restrained Sealos blue and deep-blue accents
- sparse visible labels copied exactly in the user's language
- Sealos Seal as the central cognitive action subject
- route status note: `brand-owned`
- brand/canonical-image authority: `references/ips/sealos/source.md`
- canonical image note: `uploaded-image-canonical` and `uploaded-image-locked`
- uploaded-image markers: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail
- no-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge
- save reminder: `assets/<article-slug>-sealos/`
- Sealos route block: generic seal drift, abstract logo creature drift, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, missing brand/canonical-image note, and missing output path all fail the route

Sealos repair behavior uses the edit prompts in `references/ips/sealos/prompt-template.md`: Stronger Mascot Participation, Uploaded-Image Identity Repair, No-Logo Hoodie Cap Repair, Title Removal, Text Reduction, and Preserve Unaffected Content. Every repair keeps `brand-owned`, `references/ips/sealos/source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, brand/canonical-image note, route-local QA context, and `assets/<article-slug>-sealos/`.

Mixed-IP generation uses the same shared core idea to generate separated selected route groups. Xiaohei loads only `references/ips/xiaohei/`; Littlebox loads only `references/ips/littlebox/`; Tom loads only `references/ips/tom/`; Ferris loads only `references/ips/ferris/`; Sealos Seal loads only `references/ips/sealos/`. Each group calls its own prompt template, composition rules, language rules, qa-checklist, edit gates, output_suffix, and route note. `assets/examples/` only calibrates style density and character participation; current-article metaphors are invented fresh.

### 5. QA and Iteration

After generation, check the selected IP's QA reference. Xiaohei uses `references/ips/xiaohei/qa-checklist.md`; Littlebox uses `references/ips/littlebox/qa-checklist.md`; Tom uses `references/ips/tom/qa-checklist.md`; Ferris uses `references/ips/ferris/qa-checklist.md`; Sealos Seal uses `references/ips/sealos/qa-checklist.md`; `references/qa-checklist.md` remains the legacy root compatibility entry point.

Xiaohei high-risk failures:

- Xiaohei as decoration
- crowded composition
- flowchart/PPT feel
- excessive or severely wrong Chinese text
- top-left titles such as `常见坑`, `流程图`, or `系统架构图`
- overly cute, childish, or stiff style
- background drift away from clean white

Littlebox high-risk failures:

- passive placement where Littlebox can be removed while the concept still works
- open lid, half-open lid, raised flaps, cutaways, or visible interiors
- extra arms, wrong arm origin, or missing side-seam twig arms in an action scene
- missing jagged front tab, wrong tape placement, or tape on the wrong surface
- tan, beige, kraft brown, or realistic cardboard body
- thin/vector linework, smooth geometry, or clean digital labels
- labels too long, mistranslated, too numerous, or outside rough marker style
- over-dense diagrams, black-dominant arrows, or formal process chart
- `#E3F2FD` and `#E6E6FA` background imbalance

Tom high-risk failures:

- generic cats
- passive Tom placement
- source-frame recreation
- show logos
- title cards
- default Jerry usage
- broad cast expansion
- generic-cat drift
- excessive text
- route leakage
- off-model Tom identity
- rights-status note loss

Ferris high-risk failures:

- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage

Sealos Seal high-risk failures:

- generic seal drift
- abstract logo creature drift
- missing cap
- missing hoodie
- logo-bearing mascot variants
- cap logo
- chest logo
- mascot logo
- logo patch
- logo-like wave/cloud mark
- text badge
- generated logo approximation
- generated logo tracing
- redrawn logo
- alternate wave mark
- simplified logo mark
- changed body color
- passive mascot placement
- over-detailed 3D toy drift
- excessive text
- route leakage
- missing brand/canonical-image note
- missing output path

When QA finds a failure, regenerate or edit through the selected IP's qa-checklist. Littlebox repairs prioritize closed lid, side-seam arms, single amber jagged seam tape, near-white body, rough linework, user's-language labels, balanced background, and active placement. Tom repairs use `references/ips/tom/prompt-template.md` edit gates: Tom edit participation repair gate, Tom off-model identity repair gate, Tom title removal edit gate, Tom text reduction edit gate, and Tom unaffected-content preservation gate; every repair keeps `gated-authorized`, `references/ips/tom/rights.md`, and route-local QA context. Ferris repairs use `references/ips/ferris/prompt-template.md` edit gates: participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation; every repair keeps `source-reviewed`, `references/ips/ferris/source.md`, source/trademark note, and route-local QA context. Sealos repairs use `references/ips/sealos/prompt-template.md` edit prompts; every repair keeps `brand-owned`, `references/ips/sealos/source.md`, uploaded-image identity, brand/canonical-image note, plain cap and hoodie chest no-logo markers, route-local QA context, and `assets/<article-slug>-sealos/`.

### 6. Save and Deliver

When the user is working inside a workspace, copy final accepted images to the selected route's output directory. Directory rules come from `references/routing.md` `output_suffix` and the selected route's delivery rules.

Active route paths:

```text
assets/<article-slug>-illustrations/
assets/<article-slug>-littlebox/
assets/<article-slug>-tom/
assets/<article-slug>-ferris/
assets/<article-slug>-sealos/
```

The save path comes from `references/routing.md` `output_suffix`:

- Xiaohei `output_suffix: illustrations` -> `assets/<article-slug>-illustrations/`
- Littlebox `output_suffix: littlebox` -> `assets/<article-slug>-littlebox/`
- Tom `output_suffix: tom` -> `assets/<article-slug>-tom/`
- Ferris `output_suffix: ferris` -> `assets/<article-slug>-ferris/`
- Sealos Seal `output_suffix: sealos` -> `assets/<article-slug>-sealos/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`; Tom `assets/&lt;article-slug&gt;-tom/`; Ferris `assets/&lt;article-slug&gt;-ferris/`; Sealos Seal `assets/&lt;article-slug&gt;-sealos/`

Use ordered English slug filenames:

```text
01-topic-name.png
02-topic-name.png
```

Sealos Seal accepted outputs use ordered English slug filenames such as `01-topic-name.png`. Mixed-IP requests write each separate route group to its own output directory: Xiaohei to `assets/<article-slug>-illustrations/`, Littlebox to `assets/<article-slug>-littlebox/`, Tom to `assets/<article-slug>-tom/`, Ferris to `assets/<article-slug>-ferris/`, and Sealos Seal to `assets/<article-slug>-sealos/`. Each variant group keeps its own file sequence and purpose notes.

Compatibility marker: 保留原始生成文件. Preserve original generated files and choose new filenames for new accepted outputs.

## Output Contract

Pre-generation strategy output should be short and precise. Post-generation delivery includes:

- selected visual IP / 选中的视觉 IP
- image count / 生成了几张
- purpose per image / 每张图的用途
- saved path / 保存路径
- stability notes / 哪些图最稳，哪些图是可选

Mixed-IP delivery uses one block per IP:

- Xiaohei block: shared core idea, image purposes, save path `assets/<article-slug>-illustrations/`, stability notes
- Littlebox block: shared core idea, image purposes, save path `assets/<article-slug>-littlebox/`, assigned background, stability notes
- Tom block: selected IP `Tom`, shared core idea, image purposes, save path `assets/<article-slug>-tom/`, route status `gated-authorized`, rights note `references/ips/tom/rights.md`, stability notes
- Ferris block: selected IP `Ferris`, shared core idea, image purposes, save path `assets/<article-slug>-ferris/`, route status `source-reviewed`, source/trademark note, source pointer `references/ips/ferris/source.md`, stability notes
- Sealos block: selected IP: Sealos Seal, shared core idea, image purposes, save path `assets/<article-slug>-sealos/`, route status `brand-owned`, brand/canonical-image note: Sealos Seal is a brand-owned route; preserve the uploaded white seal mascot with plain navy cap with no logo, plain deep-blue hoodie chest with no logo, and fixed identity markers from source.md., source pointer `references/ips/sealos/source.md`, no-logo note: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge, stability notes

Before delivery, run the route-leakage delivery guard. Tom blocks keep `gated-authorized` and `references/ips/tom/rights.md`. Ferris blocks keep `source-reviewed`, `references/ips/ferris/source.md`, source/trademark note, route-local QA, and `assets/<article-slug>-ferris/`. Sealos blocks keep `brand-owned`, `references/ips/sealos/source.md`, brand/canonical-image note, route-local QA, `uploaded-image-canonical`, `uploaded-image-locked`, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, no-logo delivery note, and `assets/<article-slug>-sealos/`. Xiaohei and Littlebox blocks keep their route-local wording, QA, and output directories.
