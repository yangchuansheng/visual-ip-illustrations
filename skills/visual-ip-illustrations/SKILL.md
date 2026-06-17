---
name: visual-ip-illustrations
description: Visual IP Illustrations generates selectable visual-IP article-body illustrations for articles, posts, blogs, Notion docs, workflow docs, methods, processes, structures, states, metaphors, opinions, shot lists, title-removal edits, and image repair. The omitted visual IP default is Xiaohei, with localized route aliases preserved in references/routing.md; Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher are explicit selectable routes.
---

# Visual IP Illustrations

## Core Positioning

Visual IP Illustrations designs and generates 16:9 horizontal article-body illustrations. The goal is to turn a key judgment, process, structure, state, or metaphor from the article into a clean, strange, creative, readable hand-drawn explanatory image.

Canonical invocation: `$visual-ip-illustrations`.

Compatibility marker: `$ian-xiaohei-illustrations` remains the v1.4 compatibility alias; existing prompts can continue using `$ian-xiaohei-illustrations` during the v1.4 local migration window.

## 1.4 Runtime Identity and Local Migration

- Canonical runtime identity: Visual IP Illustrations.
- Canonical skill invocation: `$visual-ip-illustrations`.
- v1.4 compatibility alias: `$ian-xiaohei-illustrations`.
- Canonical package slug/path: `visual-ip-illustrations`.
- Legacy package slug/path: `ian-xiaohei-illustrations`.
- Local migration: install or copy the package as `visual-ip-illustrations` for canonical discovery while keeping `ian-xiaohei-illustrations` available for existing prompts during v1.4.

## Visual IP Routes

The omitted visual IP default is Xiaohei. Compatibility marker: omitted visual IP selects the Xiaohei route. Omitted visual IP selects only the Xiaohei route.

Xiaohei is a black solid-bodied character with white dot eyes, thin legs, and a blank expression. Xiaohei performs one serious, absurd, conceptually valid action and carries the central cognitive action in the image.

Littlebox is an explicit route for a closed paper-box character. It uses thick rough black marker linework, a pale sky-blue or pale lavender background, amber seam tape, and sparse coral accents. It translates the same cognitive action into collecting, packaging, sorting, delivering, blocking, or repairing.

Tom is an explicit protected-character route: route id `tom`, display name `Tom`, default=false, output_suffix: tom, route status `gated-authorized`. Tom rights authority is `references/ips/tom/rights.md`, and planning, generation, QA, edit, and delivery surfaces keep the rights-status note.

Ferris is an explicit Rust-community mascot route: route id `ferris`, display name `Ferris`, default=false, output_suffix: ferris, route status `source-reviewed`. Ferris source/trademark authority is `references/ips/ferris/source.md`, and planning, generation, QA, edit, and delivery surfaces keep the source/trademark note.

Seal is an explicit route: route id `seal`, display name `Seal`, default=false, output_suffix: seal, route status `active`. Seal is a product-neutral hoodie seal article character. Seal source-history authority is `references/ips/seal/source.md`, and planning, generation, QA, edit, and delivery surfaces keep the hoodie seal identity note, Logo-free note, and `assets/<article-slug>-seal/`.

Seal imagery is logo-free: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

OpenClaw is an explicit source-reviewed logo-mascot route: route id `openclaw`, display name `OpenClaw`, default=false, output_suffix: openclaw, route status `source-reviewed`. OpenClaw source/license authority is `references/ips/openclaw/source.md`, and planning, generation, QA, edit, and delivery surfaces keep the uploaded-logo identity note, source/license note, and `assets/<article-slug>-openclaw/`.

OpenClaw imagery preserves the red logo-derived mascot identity: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.

Go Gopher is an explicit source-reviewed article-illustration mascot route: route id `gopher`, display name `Go Gopher`, default=false, output_suffix: gopher, route status `source-reviewed`. Go Gopher source/license authority is `references/ips/gopher/source.md`, local visual authority is route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`, and planning, generation, QA, edit, and delivery surfaces keep the route-local `gopher.png` identity note, source/license note, public sample review boundary, Go logo boundary, official endorsement boundary, and `assets/<article-slug>-gopher/`.

Go Gopher imagery preserves the source-reviewed mascot identity: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border. Go Gopher attribution stays attached through Renee French and the Creative Commons Attribution 4.0 boundary.

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
- `references/ips/seal/index.md`: Seal canonical pack navigation, route status, source-history authority, output path, and reference list.
- `references/ips/seal/source.md`: Seal source-history authority, hoodie seal identity note, logo-free behavior, public-sample policy, reviewer fields, and route-status authority.
- `references/ips/seal/style-dna.md`: Seal sparse article-illustration style, hoodie seal identity markers, product-neutral article metaphors, visual vetoes, and route gates.
- `references/ips/seal/seal-ip.md`: Seal identity, hoodie seal visual markers, cognitive-action responsibility, recognition gates, and failure modes.
- `references/ips/seal/composition-patterns.md`: Seal composition families, hoodie seal action patterns, supporting object pool, and original metaphor gates.
- `references/ips/seal/prompt-template.md`: Seal planning fields, single-image prompt, edit gates, hoodie seal identity note, and output reminder.
- `references/ips/seal/qa-checklist.md`: Seal QA, failure categories, repair moves, and delivery judgment.
- `references/ips/openclaw/index.md`: OpenClaw canonical pack navigation, route status, source/license authority, uploaded-logo identity note, output path, and reference list.
- `references/ips/openclaw/source.md`: OpenClaw source/license authority, official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and route-status authority.
- `references/ips/openclaw/style-dna.md`: OpenClaw sparse article-illustration style, uploaded-logo identity markers, visual vetoes, and route gates.
- `references/ips/openclaw/openclaw-ip.md`: OpenClaw identity, recognition rules, cognitive-action responsibility, route boundary, and failure modes.
- `references/ips/openclaw/composition-patterns.md`: OpenClaw composition families, article-metaphor invention rules, OpenClaw action patterns, supporting object pool, and anti-repeat rules.
- `references/ips/openclaw/prompt-template.md`: OpenClaw planning fields, one-image generation prompt, edit gates, uploaded-logo identity note, source/license note, and output reminder.
- `references/ips/openclaw/qa-checklist.md`: OpenClaw QA gates, uploaded-logo identity checks, failure signals, iteration moves, and delivery judgment.
- `references/ips/gopher/index.md`: Go Gopher pack navigation, route status, source/license authority, output path, shared failure categories, operational coherence, and scope boundary.
- `references/ips/gopher/source.md`: Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, sample policy, review owner, and route status changes.
- `references/ips/gopher/style-dna.md`: sparse Go Gopher article-illustration style, visual marker preservation, visual vetoes, sample boundary, and route isolation.
- `references/ips/gopher/gopher-ip.md`: Go Gopher identity, recognition rules, cognitive-action responsibility, route boundary, and failure modes.
- `references/ips/gopher/composition-patterns.md`: composition families, article-metaphor invention, Go Gopher action patterns, supporting object pool, and anti-repeat rules.
- `references/ips/gopher/prompt-template.md`: planning fields, one-image prompt template, edit prompts, local visual authority note, source/license note, and output reminder.
- `references/ips/gopher/qa-checklist.md`: pass/fail gates, Go Gopher identity checks, iteration moves, route leakage repair, public sample boundary, and delivery judgment.
- `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, `references/qa-checklist.md`: legacy root compatibility entry points for existing prompts and docs; current Xiaohei behavior reads the canonical `references/ips/xiaohei/` files.
- `assets/examples/`: low-frequency visual calibration only. Use them for density and participation calibration, then create a fresh metaphor for the current article.

## Workflow

### 1. Select the Visual IP Route

Read `references/routing.md` first and choose the route for the current task.

- Omitted visual IP selects `xiaohei`.
- Xiaohei aliases listed in `references/routing.md` select the same Xiaohei route.
- Littlebox aliases listed in `references/routing.md` select the same Littlebox route.
- Tom aliases listed in `references/routing.md` select the same Tom route: route id `tom`, display name `Tom`, default=false, output_suffix: tom, route status `gated-authorized`, rights pointer `references/ips/tom/rights.md`.
- Ferris aliases listed in `references/routing.md` select the same Ferris route: route id `ferris`, display name `Ferris`, default=false, output_suffix: ferris, route status `source-reviewed`, source/trademark pointer `references/ips/ferris/source.md`.
- Seal aliases listed in `references/routing.md` select the same Seal route: route id `seal`, display name `Seal`, default=false, output_suffix: seal, route status `active`, source pointer `references/ips/seal/source.md`.
- `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, and the OpenClaw aliases listed in `references/routing.md` select the same OpenClaw route: route id `openclaw`, display name `OpenClaw`, default=false, output_suffix: openclaw, route status `source-reviewed`, source/license pointer `references/ips/openclaw/source.md`.
- `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, and Go Gopher-qualified route phrases select the same Go Gopher route: route id `gopher`, display name `Go Gopher`, default=false, output_suffix: gopher, route status `source-reviewed`, source/license pointer `references/ips/gopher/source.md`, and route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority. Generic route phrases stay governed by `references/routing.md` and remain outside Go Gopher selection.
- Mixed requests across Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher first identify one shared core idea, then create separate route groups. Each selected variant group uses its own route id, required_references, prompt template, composition rules, QA, edit repairs, output_suffix, route note, and output directory.
- Xiaohei keeps the `$ian-xiaohei-illustrations` compatibility behavior and `assets/<article-slug>-illustrations/` output path; canonical invocation is `$visual-ip-illustrations`.
- Littlebox uses `assets/<article-slug>-littlebox/`.
- Tom uses `assets/<article-slug>-tom/` and keeps `gated-authorized` plus `references/ips/tom/rights.md` in planning, generation, QA, edit, and delivery.
- Ferris uses `assets/<article-slug>-ferris/` and keeps `source-reviewed` plus `references/ips/ferris/source.md` in planning, generation, QA, edit, and delivery.
- Seal uses `assets/<article-slug>-seal/` and keeps `active` plus `references/ips/seal/source.md` in planning, generation, QA, edit, and delivery.
- OpenClaw uses `assets/<article-slug>-openclaw/` and keeps `source-reviewed` plus `references/ips/openclaw/source.md` in planning, generation, QA, edit, and delivery.
- Go Gopher uses `assets/<article-slug>-gopher/` and keeps `source-reviewed`, `references/ips/gopher/source.md`, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample review boundary, Go logo boundary, and official endorsement boundary in planning, generation, QA, edit, and delivery.
- Xiaohei `required_references` point to the canonical `references/ips/xiaohei/` pack; root paths remain compatibility entry points.
- Littlebox `required_references` point to `references/ips/littlebox/`: `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- Tom `required_references` point to `references/ips/tom/`: `index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Ferris `required_references` point to `references/ips/ferris/`: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Seal `required_references` point to `references/ips/seal/`: `index.md`, `source.md`, `style-dna.md`, `seal-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- OpenClaw `required_references` point to `references/ips/openclaw/`: `index.md`, `source.md`, `style-dna.md`, `openclaw-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Go Gopher `required_references` point to `references/ips/gopher/`: `index.md`, `source.md`, `style-dna.md`, `gopher-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
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

Seal shot-list entries use `references/ips/seal/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- Seal state
- Seal action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-seal/`
- Hoodie seal identity note: Seal is an active product-neutral hoodie seal route; preserve white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.
- No-logo note: cap, hoodie chest, mascot body, props, and scene use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

Seal planning prose can follow the user's language. Seal image-generation prompts stay English. Visible labels are copied exactly in the user's language. Seal performs the central cognitive action. Prefer one or two product-neutral article-metaphor supporting objects, then assign a Seal action such as inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, or guide.

OpenClaw shot-list entries use `references/ips/openclaw/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- OpenClaw state
- OpenClaw action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-openclaw/`
- Uploaded-logo identity note: preserve red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Source/license note: OpenClaw is a `source-reviewed` logo-mascot route; check `references/ips/openclaw/source.md` for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, and public-sample policy.

OpenClaw planning prose can follow the user's language. OpenClaw image-generation prompts stay English. Visible labels are copied exactly in the user's language. OpenClaw performs the central cognitive action. Prefer sparse article-metaphor objects such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, claws, or small hand-built machines, then assign an OpenClaw action such as inspect, grip, sort, bridge, tune, stamp, carry, map, connect, shield, compare, mark, untangle, weigh, guide, assemble, or repair.

Go Gopher shot-list entries use `references/ips/gopher/prompt-template.md` and include:

- Placement
- Core idea
- Structure type
- Gopher state
- Gopher action
- Supporting objects
- Visible labels
- Output path: `assets/<article-slug>-gopher/`
- Source/license note: Go Gopher is a `source-reviewed` article-illustration mascot route; check `references/ips/gopher/source.md` for Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, and public sample review boundary.

Go Gopher planning prose can follow the user's language. Go Gopher image-generation prompts stay English. Visible labels are copied exactly in the user's requested language. Go Gopher performs the central cognitive action. Prefer sparse article-metaphor objects such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, stepping stones, signposts, levers, or small hand-built machines, then assign a Go Gopher action such as inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, or route.

Mixed-IP shot lists first state the shared core idea, then split into independent selected route groups:

- Xiaohei variant group: Xiaohei action, white-background hand-drawn metaphor, suggested labels, `references/ips/xiaohei/` QA, `assets/<article-slug>-illustrations/`
- Littlebox variant group: `Littlebox state: closed`, visual metaphor, assigned background, suggested objects, short visible labels, `references/ips/littlebox/` QA, `assets/<article-slug>-littlebox/`
- Tom variant group: Tom state, Tom action, supporting objects, visible labels, `references/ips/tom/` QA, `assets/<article-slug>-tom/`, rights-status note, `gated-authorized`, `references/ips/tom/rights.md`
- Ferris variant group: Ferris state, Ferris action, supporting objects, visible labels, `references/ips/ferris/` QA, `assets/<article-slug>-ferris/`, source/trademark note, `source-reviewed`, `references/ips/ferris/source.md`
- Seal variant group: Seal state, Seal action, supporting objects, visible labels, `references/ips/seal/` QA, `assets/<article-slug>-seal/`, hoodie seal identity note, Logo-free note, `active`, `references/ips/seal/source.md`
- OpenClaw variant group: OpenClaw state, OpenClaw action, supporting objects, visible labels, `references/ips/openclaw/` QA, `assets/<article-slug>-openclaw/`, uploaded-logo identity note, source/license note, `source-reviewed`, `references/ips/openclaw/source.md`
- Go Gopher variant group: Gopher state, Gopher action, supporting objects, visible labels, `references/ips/gopher/` QA, `assets/<article-slug>-gopher/`, route status `source-reviewed`, source pointer `references/ips/gopher/source.md`, route-local `gopher.png` identity note, source/license note, public sample review boundary, route isolation status

Default to 4-8 images. Short articles usually need 1-3. Long articles usually stay within 9 images.

### 4. Generate One Image at a Time

When the user explicitly asks to generate, output, make, or create images, call the host-provided `image_gen` capability directly. Compatibility markers: generate each image separately; keep each image on its own canvas. Use one image-generation call per image.

Each image explains one core structure. Load the selected route's `required_references`, then assemble the prompt with that IP's template, character rules, composition rules, and QA references.

Xiaohei continues to use the canonical references: `references/ips/xiaohei/style-dna.md`, `references/ips/xiaohei/xiaohei-ip.md`, `references/ips/xiaohei/composition-patterns.md`, `references/ips/xiaohei/prompt-template.md`, and `references/ips/xiaohei/qa-checklist.md`. Legacy root paths `references/style-dna.md`, `references/xiaohei-ip.md`, `references/composition-patterns.md`, `references/prompt-template.md`, and `references/qa-checklist.md` remain legacy compatibility entry points. Xiaohei prompts keep these markers:

- 16:9 horizontal article-body illustration
- clean white background
- black hand-drawn linework
- sparse red/orange/blue handwritten labels in the user's language
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

Seal loads only Seal `required_references`, uses `references/ips/seal/prompt-template.md` plus `references/ips/seal/composition-patterns.md`, then checks output with `references/ips/seal/qa-checklist.md`. Seal generation context always keeps route status `active`, source-history authority `references/ips/seal/source.md`, source-history provenance markers `uploaded-image-canonical` and `uploaded-image-locked`, hoodie seal identity note, Logo-free note, and output path `assets/<article-slug>-seal/`. Seal prompts keep:

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article style on clean white or near-white background
- loose black linework with generous whitespace
- restrained navy and deep-blue accents
- sparse visible labels copied exactly in the user's language
- Seal as the central cognitive action subject
- route status note: `active`
- source-history authority: `references/ips/seal/source.md`
- source-history provenance markers: `uploaded-image-canonical` and `uploaded-image-locked`
- hoodie seal identity note: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail
- no-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge
- product-neutral article metaphor objects: maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, or small hand-built machines
- save reminder: `assets/<article-slug>-seal/`
- Seal route block: generic seal drift, abstract logo creature drift, logo-bearing mascot variants, missing cap, missing hoodie, cap logo, chest logo, mascot logo, logo patch, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, route leakage, missing hoodie seal identity note, and missing output path all fail the route

Seal repair behavior uses the edit prompts in `references/ips/seal/prompt-template.md`: Stronger Seal Participation, Hoodie Seal Identity Repair, Logo-Free Output Repair, Title Removal, Text Reduction, Route Leakage Repair, and Preserve Unaffected Content. Every repair keeps `active`, `references/ips/seal/source.md`, source-history provenance markers, hoodie seal identity note, Logo-free note, route-local QA context, and `assets/<article-slug>-seal/`.

OpenClaw loads only OpenClaw `required_references`, uses `references/ips/openclaw/prompt-template.md` plus `references/ips/openclaw/composition-patterns.md`, then checks output with `references/ips/openclaw/qa-checklist.md`. OpenClaw generation context always keeps route status `source-reviewed`, source/license authority `references/ips/openclaw/source.md`, uploaded-logo identity note, and output path `assets/<article-slug>-openclaw/`. OpenClaw prompts keep:

- one standalone 16:9 horizontal article illustration
- original article metaphor
- sparse hand-drawn article style on clean white or near-white background
- loose black linework with generous whitespace
- restrained red tied to OpenClaw's body
- restrained cyan tied to the pupils or one small action emphasis
- sparse visible labels copied exactly in the user's language
- OpenClaw as the central cognitive action subject
- route status note: `source-reviewed`
- source/license authority: `references/ips/openclaw/source.md`
- uploaded-logo identity note: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs
- article-metaphor objects: maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, claws, or small hand-built machines
- save reminder: `assets/<article-slug>-openclaw/`
- OpenClaw route block: generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, copied composition, formal diagrams, UI screenshots, IDE or terminal scenes, code screenshots, poster layouts, top-left title artifacts, and clean digital labels all fail the route

OpenClaw repair behavior uses the edit prompts in `references/ips/openclaw/prompt-template.md`: Stronger OpenClaw Participation, Uploaded-Logo Identity Repair, Title Removal, Text Reduction, Route Leakage Repair, and Unaffected-Content Preservation. Every repair keeps `source-reviewed`, `references/ips/openclaw/source.md`, uploaded-logo identity note, source/license note, route-local QA context, and `assets/<article-slug>-openclaw/`.

Go Gopher loads only Go Gopher `required_references`, uses `references/ips/gopher/prompt-template.md` plus `references/ips/gopher/composition-patterns.md`, then checks output with `references/ips/gopher/qa-checklist.md`. Go Gopher generation context always keeps route status `source-reviewed`, source/license authority `references/ips/gopher/source.md`, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` visual authority, Renee French attribution, Creative Commons Attribution 4.0 boundary, local visual identity markers, public sample review boundary, Go logo boundary, official endorsement boundary, and output path `assets/<article-slug>-gopher/`. Go Gopher prompts keep:

- one standalone sparse 16:9 article illustration
- white or very light background
- rough black hand-drawn outlines with generous whitespace
- Go Gopher as the central cognitive action subject
- Go Gopher blue body
- beige muzzle and paws
- restrained action accents
- sparse visible labels copied exactly in the user's language
- original article metaphor objects
- locked marker set: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border
- route status note: `source-reviewed`
- source/license authority: `references/ips/gopher/source.md`
- source/license note covering Renee French attribution, Creative Commons Attribution 4.0 boundary, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`, public sample review boundary, Go logo boundary, and official endorsement boundary
- save reminder: `assets/<article-slug>-gopher/`
- Go Gopher route block: generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, copied composition, formal diagrams, UI screenshots, IDE scenes, terminal scenes, code screenshots, poster layouts, top-left title artifacts, and clean digital labels all fail the route

Go Gopher repair behavior uses the edit prompts in `references/ips/gopher/prompt-template.md`: Stronger Go Gopher Participation, `gopher.png` Identity Repair, Title Removal, Text Reduction, Route Leakage Repair, and Unaffected-Content Preservation. Every repair preserves successful composition, labels, style, aspect ratio, unaffected objects, route-local QA context, source/license note, route-local `gopher.png` identity note, and `assets/<article-slug>-gopher/`.

Mixed-IP generation uses the same shared core idea to generate separated selected route groups. Xiaohei loads only `references/ips/xiaohei/`; Littlebox loads only `references/ips/littlebox/`; Tom loads only `references/ips/tom/`; Ferris loads only `references/ips/ferris/`; Seal loads only `references/ips/seal/`; OpenClaw loads only `references/ips/openclaw/`; Go Gopher loads only `references/ips/gopher/`. Each group calls its own prompt template, composition rules, language rules, qa-checklist, edit gates, output_suffix, and route note. Go Gopher uses its own prompt template, composition rules, QA checklist, edit gates, output suffix, route note, and `assets/<article-slug>-gopher/`. `assets/examples/` only calibrates style density and character participation; current-article metaphors are invented fresh.

### 5. QA and Iteration

After generation, check the selected IP's QA reference. Xiaohei uses `references/ips/xiaohei/qa-checklist.md`; Littlebox uses `references/ips/littlebox/qa-checklist.md`; Tom uses `references/ips/tom/qa-checklist.md`; Ferris uses `references/ips/ferris/qa-checklist.md`; Seal uses `references/ips/seal/qa-checklist.md`; OpenClaw uses `references/ips/openclaw/qa-checklist.md`; Go Gopher uses `references/ips/gopher/qa-checklist.md`; `references/qa-checklist.md` remains the legacy root compatibility entry point.

Xiaohei high-risk failures:

- Xiaohei as decoration
- crowded composition
- flowchart/PPT feel
- excessive or severely wrong visible text
- top-left titles such as `Common Pitfalls`, `Flowchart`, or `System Architecture`
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

Seal high-risk failures:

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
- missing hoodie seal identity note
- missing output path

OpenClaw high-risk failures:

- generic red mascot drift
- missing claws
- missing antennae
- missing cyan pupils
- missing red round body
- missing black eyes
- missing short legs
- generic robot drift
- product-poster drift
- passive placement
- excessive text
- route leakage
- copied composition
- missing uploaded-logo identity note
- missing source/license note
- missing output path
- formal diagrams
- dense PPT-like infographics
- UI screenshots
- IDE or terminal scenes
- code screenshots
- poster layouts
- top-left title artifacts
- clean digital labels

Go Gopher high-risk failures:

- generic blue mascot drift
- realistic animal drift
- missing ears
- missing large simple eyes
- missing buck teeth
- missing beige muzzle/paws
- missing black outline
- missing white sticker-like border
- Go logo confusion
- official endorsement claims
- passive placement
- route leakage
- excessive text
- copied composition
- formal diagrams
- UI screenshots
- IDE scenes
- terminal scenes
- code screenshots
- poster layouts
- top-left title artifacts
- clean digital labels

When QA finds a failure, regenerate or edit through the selected IP's qa-checklist. Littlebox repairs prioritize closed lid, side-seam arms, single amber jagged seam tape, near-white body, rough linework, user's-language labels, balanced background, and active placement. Tom repairs use `references/ips/tom/prompt-template.md` edit gates: Tom edit participation repair gate, Tom off-model identity repair gate, Tom title removal edit gate, Tom text reduction edit gate, and Tom unaffected-content preservation gate; every repair keeps `gated-authorized`, `references/ips/tom/rights.md`, and route-local QA context. Ferris repairs use `references/ips/ferris/prompt-template.md` edit gates: participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation; every repair keeps `source-reviewed`, `references/ips/ferris/source.md`, source/trademark note, and route-local QA context. Seal repairs use `references/ips/seal/prompt-template.md` edit prompts; every repair keeps `active`, `references/ips/seal/source.md`, hoodie seal identity note, Logo-free note, product-neutral article metaphor context, route-local QA context, and `assets/<article-slug>-seal/`. OpenClaw repairs use `references/ips/openclaw/prompt-template.md` edit prompts; every repair keeps `source-reviewed`, `references/ips/openclaw/source.md`, uploaded-logo identity note, source/license note, original article-metaphor context, route-local QA context, and `assets/<article-slug>-openclaw/`. Go Gopher repairs use `references/ips/gopher/prompt-template.md` edit prompts; every repair keeps `source-reviewed`, `references/ips/gopher/source.md`, route-local `gopher.png` identity note, source/license note, original article-metaphor context, route-local QA context, public sample review boundary, route isolation status, and `assets/<article-slug>-gopher/`.

### 6. Save and Deliver

When the user is working inside a workspace, copy final accepted images to the selected route's output directory. Directory rules come from `references/routing.md` `output_suffix` and the selected route's delivery rules.

Active route paths:

```text
assets/<article-slug>-illustrations/
assets/<article-slug>-littlebox/
assets/<article-slug>-tom/
assets/<article-slug>-ferris/
assets/<article-slug>-seal/
assets/<article-slug>-openclaw/
assets/<article-slug>-gopher/
```

The save path comes from `references/routing.md` `output_suffix`:

- Xiaohei `output_suffix: illustrations` -> `assets/<article-slug>-illustrations/`
- Littlebox `output_suffix: littlebox` -> `assets/<article-slug>-littlebox/`
- Tom `output_suffix: tom` -> `assets/<article-slug>-tom/`
- Ferris `output_suffix: ferris` -> `assets/<article-slug>-ferris/`
- Seal `output_suffix: seal` -> `assets/<article-slug>-seal/`
- OpenClaw `output_suffix: openclaw` -> `assets/<article-slug>-openclaw/`
- Go Gopher `output_suffix: gopher` -> `assets/<article-slug>-gopher/`
- Validation markers: Xiaohei `assets/&lt;article-slug&gt;-illustrations/`; Littlebox `assets/&lt;article-slug&gt;-littlebox/`; Tom `assets/&lt;article-slug&gt;-tom/`; Ferris `assets/&lt;article-slug&gt;-ferris/`; Seal `assets/&lt;article-slug&gt;-seal/`; OpenClaw `assets/&lt;article-slug&gt;-openclaw/`; Go Gopher `assets/&lt;article-slug&gt;-gopher/`

Use ordered English slug filenames:

```text
01-topic-name.png
02-topic-name.png
```

Seal accepted outputs use ordered English slug filenames such as `01-topic-name.png`. OpenClaw accepted outputs use ordered English slug filenames such as `01-topic-name.png`. Go Gopher accepted outputs use ordered English slug filenames such as `01-topic-name.png`. Mixed-IP requests write each separate route group to its own output directory: Xiaohei to `assets/<article-slug>-illustrations/`, Littlebox to `assets/<article-slug>-littlebox/`, Tom to `assets/<article-slug>-tom/`, Ferris to `assets/<article-slug>-ferris/`, Seal to `assets/<article-slug>-seal/`, OpenClaw to `assets/<article-slug>-openclaw/`, and Go Gopher variants to `assets/<article-slug>-gopher/`. Each variant group keeps its own file sequence and purpose notes.

Compatibility marker: preserve original generated files. Preserve original generated files and choose new filenames for new accepted outputs.

## Output Contract

Pre-generation strategy output should be short and precise. Post-generation delivery includes:

- selected visual IP
- image count
- purpose per image
- saved path
- stability notes

Mixed-IP delivery uses one block per IP:

- Xiaohei block: shared core idea, image purposes, save path `assets/<article-slug>-illustrations/`, stability notes
- Littlebox block: shared core idea, image purposes, save path `assets/<article-slug>-littlebox/`, assigned background, stability notes
- Tom block: selected IP `Tom`, shared core idea, image purposes, save path `assets/<article-slug>-tom/`, route status `gated-authorized`, rights note `references/ips/tom/rights.md`, stability notes
- Ferris block: selected IP `Ferris`, shared core idea, image purposes, save path `assets/<article-slug>-ferris/`, route status `source-reviewed`, source/trademark note, source pointer `references/ips/ferris/source.md`, stability notes
- Seal block: selected IP: Seal, shared core idea, image purposes, save path `assets/<article-slug>-seal/`, route status `active`, hoodie seal identity note: preserve white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail, source pointer `references/ips/seal/source.md`, Logo-free note: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge, stability notes
- OpenClaw block: selected IP: OpenClaw, shared core idea, image purposes, save path `assets/<article-slug>-openclaw/`, route status `source-reviewed`, source/license note, source pointer `references/ips/openclaw/source.md`, uploaded-logo identity note: preserve red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs, route isolation status, stability notes
- Go Gopher block: selected IP `Go Gopher`, shared core idea, image purposes, save path `assets/<article-slug>-gopher/`, route status `source-reviewed`, source/license note, source pointer `references/ips/gopher/source.md`, route-local `gopher.png` identity status, public sample review boundary when relevant, route isolation status, stability notes

Before delivery, run the route-leakage delivery guard. Tom blocks keep `gated-authorized` and `references/ips/tom/rights.md`. Ferris blocks keep `source-reviewed`, `references/ips/ferris/source.md`, source/trademark note, route-local QA, and `assets/<article-slug>-ferris/`. Seal blocks keep `active`, `references/ips/seal/source.md`, hoodie seal identity note, route-local QA, source-history provenance markers, Logo-free note, product-neutral article-metaphor status, and `assets/<article-slug>-seal/`. OpenClaw blocks keep `source-reviewed`, `references/ips/openclaw/source.md`, source/license note, uploaded-logo identity note, route-local QA, original article-metaphor status, route isolation status, and `assets/<article-slug>-openclaw/`. Go Gopher blocks keep `source-reviewed`, `references/ips/gopher/source.md`, source/license note, route-local `gopher.png` identity status, route-local QA, original article-metaphor status, public sample review boundary, route isolation status, and `assets/<article-slug>-gopher/`. Xiaohei and Littlebox blocks keep their route-local wording, QA, and output directories.
