# Prompt Examples

These prompts are ready to copy into Codex. Since release 1.4, normal flows should prefer the canonical invocation `$visual-ip-illustrations`; `$ian-xiaohei-illustrations` remains the legacy compatibility alias and route smoke fixture. Paths, aliases, field names, and canonical reference markers must remain stable.

## Canonical normal-flow prompts

### Default Xiaohei: canonical planning

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use the default visual IP to create a 5-image shot list for the article below.
For each image, include placement, theme, core idea, structure type, Xiaohei's central action, suggested elements, and short visible labels copied in the user's language.
The default visual IP should be Xiaohei / 小黑.
Save outputs under `assets/<article-slug>-illustrations/`; docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

### Default Xiaohei: canonical generation

```text
Use $visual-ip-illustrations to generate 4 article body illustrations for the article below.
Use the default visual IP Xiaohei. Generate each image separately: 16:9 horizontal, pure white background, black hand-drawn linework, sparse red/orange/blue handwritten labels copied in the user's language.
小黑 must carry the core action, and each image should express one core idea.
Save outputs under `assets/<article-slug>-illustrations/`; docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

### Littlebox: canonical planning

```text
Use $visual-ip-illustrations with the Littlebox route to create a 4-image shot list for the article below. Do not generate images yet.
For each image, include Placement, Core idea, Littlebox state: closed, visual metaphor, assigned background, suggested objects, and short visible labels.
Save outputs under `assets/<article-slug>-littlebox/`; docs validation token: `assets/&lt;article-slug&gt;-littlebox/`.

<paste article>
```

### Littlebox: canonical generation

```text
Use $visual-ip-illustrations with the Littlebox route to generate 3 article body illustrations for the article below.
Requirements: closed paper-box character, rough black marker linework, pale sky-blue #E3F2FD or pale lavender #E6E6FA background, and short visible labels copied exactly in the user's language.
Save outputs under `assets/<article-slug>-littlebox/`; docs validation token: `assets/&lt;article-slug&gt;-littlebox/`.

<paste article>
```

### Seal: canonical planning

```text
Use $visual-ip-illustrations with the Seal route. Do not generate images yet.
Create a 4-image Seal route shot list for the article below.
Use route-local references from `ian-xiaohei-illustrations/references/ips/seal/` and source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`.
Keep route status `active`, hoodie seal identity note, and logo-free note.
For each image, include Placement, Core idea, Structure type, Seal state, Seal action, Supporting objects, Visible labels, Output path, and Source-history note.
Use product-neutral article metaphors such as maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, or small hand-built machines.
Seal should inspect, repair, shield, bridge, sort, and mark the article idea.
Save outputs under `assets/<article-slug>-seal/`; docs validation token: `assets/&lt;article-slug&gt;-seal/`.

<paste article>
```

### Seal: canonical generation

```text
Use $visual-ip-illustrations with the Seal route to generate 2 article body illustrations for the article below.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/seal/` route-local references.
Keep route status `active` and source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`.
Seal is a product-neutral hoodie seal article character. Preserve white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
Keep cap, hoodie chest, mascot body, props, and scene logo-free.
Use product-neutral article metaphors and make Seal inspect, repair, shield, bridge, sort, or mark the core idea.
Save outputs under `assets/<article-slug>-seal/`; docs validation token: `assets/&lt;article-slug&gt;-seal/`.

<paste article>
```

### OpenClaw: canonical planning

```text
Use $visual-ip-illustrations with the OpenClaw route. Do not generate images yet.
Create a 4-image OpenClaw route shot list for the article below.
Use route-local references from `ian-xiaohei-illustrations/references/ips/openclaw/` and source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
Keep route status `source-reviewed` and uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
For each image, include Placement, Core idea, Structure type, OpenClaw state, OpenClaw action, Supporting objects, Visible labels, Output path, and Source/license note.
Use project-neutral article metaphors such as gates, adapters, bridges, checklists, routing signs, tool benches, test lamps, handoff rails, compasses, shelves, stamps, connectors, or review shields.
Save outputs under `assets/<article-slug>-openclaw/`; docs validation token: `assets/&lt;article-slug&gt;-openclaw/`.

<paste article>
```

### OpenClaw: canonical generation

```text
Use $visual-ip-illustrations with the OpenClaw route to generate 2 article body illustrations for the article below.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/openclaw/` route-local references.
Keep route status `source-reviewed` and source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
OpenClaw is a friendly logo-mascot article character. Preserve the uploaded-logo identity: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Use project-neutral article metaphors and make OpenClaw inspect, hold, bridge, sort, lift, connect, or signal the core idea.
Save outputs under `assets/<article-slug>-openclaw/`; docs validation token: `assets/&lt;article-slug&gt;-openclaw/`.
Delivery report keeps Source/license note and states that public rendered OpenClaw samples are governed by RELEASE_CHECKLIST.md public-sample and final evidence gates.

<paste article>
```


### Go Gopher: canonical planning

```text
Use $visual-ip-illustrations with the Go Gopher route. Do not generate images yet.
Create a 4-image Go Gopher route shot list for the article below.
Use route-local references from `ian-xiaohei-illustrations/references/ips/gopher/` and source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
Keep route status `source-reviewed`, root `gopher.png` local visual authority, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, Go logo boundary, and official endorsement boundary.
For each image, include Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, and Source/license note.
Use article metaphors such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, stepping stones, signposts, levers, or small hand-built machines.
Gopher actions should inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, and route the core idea.
Visible labels are copied exactly in the user's requested language.
Save outputs under `assets/<article-slug>-gopher/`; docs validation token: `assets/&lt;article-slug&gt;-gopher/`.

<paste article>
```

### Go Gopher: canonical generation

```text
Use $visual-ip-illustrations with the Go Gopher route to generate 2 article body illustrations for the article below.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/gopher/` route-local references.
Keep route status `source-reviewed` and source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
Go Gopher is a source-reviewed article-illustration mascot route. Preserve root `gopher.png` local visual authority: blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
Keep Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, Go logo boundary, and official endorsement boundary attached to the delivery report.
Make Go Gopher inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, or route the core idea through sparse physical article metaphors.
Visible labels are copied exactly in the user's requested language.
Use no Go logo identity, no official Go project affiliation, no approval claims, no sponsorship claims, no endorsement wording, no generic blue mascot drift, and no realistic animal drift.
Save outputs under `assets/<article-slug>-gopher/`; docs validation token: `assets/&lt;article-slug&gt;-gopher/`.

<paste article>
```

### Multi-IP: canonical planning

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use one shared core idea to produce seven separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
Each group must use route-local references, route-local prompt template, route-local QA, and an independent output path.
Xiaohei group uses `ian-xiaohei-illustrations/references/ips/xiaohei/` and `assets/<article-slug>-illustrations/`.
Littlebox group uses `ian-xiaohei-illustrations/references/ips/littlebox/` and `assets/<article-slug>-littlebox/`.
Tom group uses `ian-xiaohei-illustrations/references/ips/tom/`, route status `gated-authorized`, rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and `assets/<article-slug>-tom/`.
Ferris group uses `ian-xiaohei-illustrations/references/ips/ferris/`, route status `source-reviewed`, source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`, and `assets/<article-slug>-ferris/`.
Seal group uses `ian-xiaohei-illustrations/references/ips/seal/`, route status `active`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`, hoodie seal identity note, logo-free note, product-neutral article metaphors, and `assets/<article-slug>-seal/`.
OpenClaw group uses `ian-xiaohei-illustrations/references/ips/openclaw/`, route status `source-reviewed`, source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`, uploaded-logo identity markers, public-sample gate, and `assets/<article-slug>-openclaw/`.
Go Gopher group uses `ian-xiaohei-illustrations/references/ips/gopher/`, route status `source-reviewed`, source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`, root `gopher.png` local visual authority, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, and `assets/<article-slug>-gopher/`.

Core idea: trust is built by placing one piece of evidence after another.
```

## Legacy compatibility route smoke prompts

These prompts keep `$ian-xiaohei-illustrations` legacy alias coverage for release 1.4 compatibility testing.

## Route Smoke: Omitted Visual IP

Omitted visual IP selects the default route: Xiaohei. Use this for old prompts, quick planning, and Xiaohei article illustrations.

### Default Xiaohei: planning only

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Use the default visual IP to create a 4-image shot list for the article below.
For each image, include placement, theme, core idea, structure type, what the selected visual IP does in the image, and suggested visible labels in the user's language.
The default visual IP should be Xiaohei / 小黑 and should use `assets/<article-slug>-illustrations/`.
Docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

### Default Xiaohei: direct generation

```text
Use $ian-xiaohei-illustrations to generate 4 article body illustrations for the article below.
Use default visual IP Xiaohei. Generate each image separately, 16:9 horizontal, pure white background, black hand-drawn linework, sparse red/orange/blue handwritten labels in the user's language.
小黑 must carry the core action, and each image should express one core idea.
Save outputs under `assets/<article-slug>-illustrations/`; docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

## Route Smoke: Explicit Xiaohei

Explicit Xiaohei aliases include 小黑, Xiaohei, Ian, and ian-xiaohei.

### Explicit Xiaohei: planning only

```text
Use $ian-xiaohei-illustrations with the 小黑 route. Do not generate images yet.
Create a 5-image shot list for the article below.
Xiaohei aliases include 小黑, Xiaohei, Ian, and ian-xiaohei.
For each image, include Placement, theme, core idea, structure type, 小黑's central action, suggested elements, and short visible labels.
Save outputs under `assets/<article-slug>-illustrations/`; docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

### Explicit Xiaohei: direct generation

```text
Use $ian-xiaohei-illustrations with the Xiaohei route to generate 3 article body illustrations for the article below.
Xiaohei aliases include 小黑, Xiaohei, Ian, and ian-xiaohei.
Requirements: 16:9 horizontal, pure white background, black hand-drawn linework, sparse red/orange/blue handwritten labels, and spacious composition.
小黑 should push, carry, connect, cut, filter, or repair the core structure in the image.
Save outputs under `assets/<article-slug>-illustrations/`; docs validation token: `assets/&lt;article-slug&gt;-illustrations/`.

<paste article>
```

## Route Smoke: Explicit Littlebox

Explicit Littlebox aliases include 小盒, Littlebox, 纸盒, paper-box, and carton.

### Explicit Littlebox: planning only

```text
Use $ian-xiaohei-illustrations with the Littlebox route to create a 3-image shot list for the article below. Do not generate images yet.
Littlebox aliases include 小盒, Littlebox, 纸盒, paper-box, and carton.
For each image, include placement, core idea, Littlebox state: closed, visual metaphor, assigned background, suggested objects, and short visible labels.
Save outputs under `assets/<article-slug>-littlebox/`; docs validation token: `assets/&lt;article-slug&gt;-littlebox/`.

<paste article>
```

### Explicit Littlebox: direct generation

```text
Use $ian-xiaohei-illustrations with the Littlebox / 小盒 / 纸盒 / paper-box / carton route to generate 3 article body illustrations for the article below.
Each image must be a 16:9 horizontal article illustration.
Littlebox state: closed; closed paper-box character; front-left three-quarter view; dot eyes on front panel; tiny legs; at most two side-seam twig arms; exactly one amber seam tape with jagged torn front tab.
Use a visual metaphor for one core idea, assign background from pale sky-blue #E3F2FD or pale lavender #E6E6FA, and use short visible labels.
Save outputs under `assets/<article-slug>-littlebox/`; docs validation token: `assets/&lt;article-slug&gt;-littlebox/`.

<paste article>
```

## Route Smoke: Explicit Tom

Explicit Tom aliases include Tom, Tom Cat, Tom and Jerry, 汤姆, and 汤姆猫. Tom is an explicit protected-character route with current route status `gated-authorized`; rights record: `ian-xiaohei-illustrations/references/ips/tom/rights.md`.

### Explicit Tom: planning only

```text
Use $ian-xiaohei-illustrations with the Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 route. Do not generate images yet.
Create a 3-image Tom route shot list for the article below.
For each image, include:
- Placement
- Core idea
- Structure type
- Tom state
- Tom action
- Supporting objects
- Visible labels
- Output path
- Rights-status note
Use route-local reference directory: `ian-xiaohei-illustrations/references/ips/tom/`.
Keep route status `gated-authorized`.
Keep rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
Save outputs under `assets/<article-slug>-tom/`; docs validation token: `assets/&lt;article-slug&gt;-tom/`.
Rights-status note: Tom is a `gated-authorized` protected-character route; check `ian-xiaohei-illustrations/references/ips/tom/rights.md` for authorization scope and distribution boundary.

<paste article>
```

### Explicit Tom: direct generation

```text
Use $ian-xiaohei-illustrations with the Tom route to generate 2 article body illustrations for the article below.
Tom aliases include Tom, Tom Cat, Tom and Jerry, 汤姆, and 汤姆猫.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/tom/` route-local references.
Tom must carry the core idea's cognitive action with a fresh article metaphor.
Keep route status `gated-authorized` and rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
Save outputs under `assets/<article-slug>-tom/`; docs validation token: `assets/&lt;article-slug&gt;-tom/`.
Public rendered Tom samples are governed by the `RELEASE_CHECKLIST.md` public-sample gate.

<paste article>
```

### Explicit Tom: route smoke check

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 route to create 1 route-status smoke shot list for this idea:
Idea: turn a pursuit-stage judgment into the next executable step.
Expected: selected IP is Tom.
Expected: route status is `gated-authorized`.
Expected: rights record is `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
Expected: route-local reference directory is `ian-xiaohei-illustrations/references/ips/tom/`.
Expected: output path is `assets/<article-slug>-tom/`.
Expected: docs validation token is `assets/&lt;article-slug&gt;-tom/`.
Expected: planning fields include Placement, Core idea, Structure type, Tom state, Tom action, Supporting objects, Visible labels, Output path, Rights-status note.
Expected: Public rendered Tom samples are controlled by the RELEASE_CHECKLIST.md public-sample gate.
```

## Route Smoke: Explicit Ferris

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

Explicit Ferris aliases include Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, and Rust 螃蟹. Ferris route status is `source-reviewed`, and the source record is `ian-xiaohei-illustrations/references/ips/ferris/source.md`.

### Explicit Ferris: planning only

```text
Use $ian-xiaohei-illustrations with the Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 route. Do not generate images yet.
Create a 3-image Ferris route shot list for the article below.
For each image, include:
- Placement
- Core idea
- Structure type
- Ferris state
- Ferris action
- Supporting objects
- Visible labels
- Output path
- Source/trademark note
Use route-local reference directory: `ian-xiaohei-illustrations/references/ips/ferris/`.
Keep route status `source-reviewed`.
Keep source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
Save outputs under `assets/<article-slug>-ferris/`; docs validation token: `assets/&lt;article-slug&gt;-ferris/`.
Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `source.md` for source context and trademark boundary.
Generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

<paste article>
```

### Explicit Ferris: direct generation

```text
Use $ian-xiaohei-illustrations with the Ferris route to generate 2 article body illustrations for the article below.
Ferris aliases include Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, and Rust 螃蟹.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/ferris/` route-local references.
Ferris must carry the core idea's cognitive action with Rust-themed low-tech article metaphors, such as ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, or review gates.
Keep route status `source-reviewed` and source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
Report Source/trademark note for every image and save outputs under `assets/<article-slug>-ferris/`; docs validation token: `assets/&lt;article-slug&gt;-ferris/`.
Generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

<paste article>
```

### Explicit Ferris: route smoke check

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 route to create 1 route-status smoke shot list for this idea:
Idea: convert abstract constraints in Rust-community context into checkable steps.
Expected: selected IP is Ferris.
Expected: aliases include Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, Rust 螃蟹.
Expected: route status is `source-reviewed`.
Expected: source record is `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
Expected: route-local reference directory is `ian-xiaohei-illustrations/references/ips/ferris/`.
Expected: required references include `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`.
Expected: output path is `assets/<article-slug>-ferris/`.
Expected: docs validation token is `assets/&lt;article-slug&gt;-ferris/`.
Expected: planning fields include Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note.
Expected: generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

## Route Smoke: Explicit Seal

Seal is an explicit `active` product-neutral hoodie seal route. The route-local pack and SKILL.md controller integration are complete; public rendered Seal samples remain release-gated.

Explicit Seal aliases include Seal, hoodie seal, white seal, blue hoodie seal, 海豹, 连帽衫海豹, 白色海豹, and 蓝色连帽衫海豹. Source-history authority is `ian-xiaohei-illustrations/references/ips/seal/source.md`.

### Explicit Seal: planning only

```text
Use $ian-xiaohei-illustrations with the Seal / hoodie seal / white seal / blue hoodie seal / 海豹 / 连帽衫海豹 / 白色海豹 / 蓝色连帽衫海豹 route. Do not generate images yet.
Create a 3-image Seal route shot list for the article below.
For each image, include:
- Placement
- Core idea
- Structure type
- Seal state
- Seal action
- Supporting objects
- Visible labels
- Output path
- Source-history note
Keep route status `active`.
Keep route-local reference directory `ian-xiaohei-illustrations/references/ips/seal/`.
Keep source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`.
Save outputs under `assets/<article-slug>-seal/`; docs validation token: `assets/&lt;article-slug&gt;-seal/`.
Source-history note: Seal is an `active` product-neutral hoodie seal route with a hoodie seal identity note and a logo-free note.

<paste article>
```

### Explicit Seal: direct generation

```text
Use $ian-xiaohei-illustrations with the Seal route to generate 2 article body illustrations for the article below.
Seal aliases include Seal, hoodie seal, white seal, blue hoodie seal, 海豹, 连帽衫海豹, 白色海豹, and 蓝色连帽衫海豹.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/seal/` route-local references.
Seal must carry the core idea's Seal action.
Use product-neutral article metaphors, such as maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, or small hand-built machines.
Keep route status `active`.
Keep source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`.
Keep hoodie seal identity note and logo-free note in every image.
Seal should inspect, repair, shield, bridge, sort, and mark the article idea through sparse physical actions.
Keep cap, hoodie chest, mascot body, props, and scene logo-free: plain navy cap, plain deep-blue hoodie chest, no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, no text badge.
Save outputs under `assets/<article-slug>-seal/`; docs validation token: `assets/&lt;article-slug&gt;-seal/`.
Delivery report keeps Source-history note and states that public rendered Seal samples are governed by RELEASE_CHECKLIST.md hoodie identity, logo-free output, route isolation, and article-metaphor quality gates.

<paste article>
```

### Explicit Seal: route smoke check

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the Seal / hoodie seal / white seal / blue hoodie seal / 海豹 / 连帽衫海豹 / 白色海豹 / 蓝色连帽衫海豹 route to create 1 route smoke shot list for this idea:
Idea: sort a tangled argument into a clear review path.
Expected: selected IP is Seal.
Expected: aliases include Seal, hoodie seal, white seal, blue hoodie seal, 海豹, 连帽衫海豹, 白色海豹, 蓝色连帽衫海豹.
Expected: route status is `active`.
Expected: source-history authority is `ian-xiaohei-illustrations/references/ips/seal/source.md`.
Expected: route-local reference directory is `ian-xiaohei-illustrations/references/ips/seal/`.
Expected: required references include `index.md`, `source.md`, `style-dna.md`, `seal-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`.
Expected: planning fields include Placement, Core idea, Structure type, Seal state, Seal action, Supporting objects, Visible labels, Output path, Source-history note.
Expected: output path is `assets/<article-slug>-seal/`.
Expected: docs validation token is `assets/&lt;article-slug&gt;-seal/`.
Expected: hoodie seal identity markers include white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, side-rear white tail.
Expected: no-logo markers include no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, no text badge.
Expected: Seal action vocabulary includes inspect, repair, shield, bridge, sort, and mark.
Expected: public sample gate is controlled by RELEASE_CHECKLIST.md; public rendered Seal samples require release review.
```

## Route Smoke: Explicit OpenClaw

OpenClaw is an explicit `source-reviewed` logo-mascot route. The route-local pack and SKILL.md controller integration are complete; public rendered OpenClaw samples remain release-gated.

Explicit OpenClaw aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, and the OpenClaw aliases listed in `ian-xiaohei-illustrations/references/routing.md`. Source/license authority is `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.

### Explicit OpenClaw: planning only

```text
Use $ian-xiaohei-illustrations with the OpenClaw route. Do not generate images yet.
Create a 3-image OpenClaw route shot list for the article below.
For each image, include:
- Placement
- Core idea
- Structure type
- OpenClaw state
- OpenClaw action
- Supporting objects
- Visible labels
- Output path
- Source/license note
Keep route status `source-reviewed`.
Keep route-local reference directory `ian-xiaohei-illustrations/references/ips/openclaw/`.
Keep source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
Save outputs under `assets/<article-slug>-openclaw/`; docs validation token: `assets/&lt;article-slug&gt;-openclaw/`.
Source/license note: OpenClaw is a `source-reviewed` logo-mascot route with uploaded-logo authority and MIT License attribution.

<paste article>
```

### Explicit OpenClaw: direct generation

```text
Use $ian-xiaohei-illustrations with the OpenClaw route to generate 2 article body illustrations for the article below.
OpenClaw aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, and the OpenClaw aliases listed in `ian-xiaohei-illustrations/references/routing.md`.
Generate each image separately and use `ian-xiaohei-illustrations/references/ips/openclaw/` route-local references.
OpenClaw must carry the core idea's cognitive action through uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Use project-neutral article metaphors for checks, routing, compatibility, handoffs, review, or conceptual repair.
Keep route status `source-reviewed`.
Keep source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
Report Source/license note for every image and save outputs under `assets/<article-slug>-openclaw/`; docs validation token: `assets/&lt;article-slug&gt;-openclaw/`.
Public rendered OpenClaw samples are governed by RELEASE_CHECKLIST.md public-sample and final evidence gates.

<paste article>
```

### Explicit OpenClaw: edit existing image

```text
Use $ian-xiaohei-illustrations with the OpenClaw route to edit this image.
Preserve the selected OpenClaw route, source/license note, output path, aspect ratio, and article meaning.
Strengthen OpenClaw participation so the red logo-mascot character actively inspects, holds, bridges, sorts, lifts, connects, or signals the central idea.
Keep uploaded-logo identity markers stable: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Keep short visible labels in the user's language and save under `assets/<article-slug>-openclaw/`.
```

### Explicit Go Gopher: edit existing image

```text
Use $visual-ip-illustrations with the Go Gopher route to edit this image.
Preserve the selected Go Gopher route, route status `source-reviewed`, Source/license note, output path, aspect ratio, article meaning, and preservation of unaffected content.
Use route-local references from `ian-xiaohei-illustrations/references/ips/gopher/` and source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
Keep root `gopher.png` local visual authority, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, Go logo boundary, and official endorsement boundary attached to the delivery report.
Edit only the named issue: [participation / gopher.png identity / title / text density / label typo / route leakage / Go logo boundary / official endorsement boundary].
Preserve successful Go Gopher action, root `gopher.png` identity cues, existing composition, visible labels that remain correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.
Save outputs under `assets/<article-slug>-gopher/`; docs validation token: `assets/&lt;article-slug&gt;-gopher/`.
```

### Explicit OpenClaw: route smoke check

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the OpenClaw route to create 1 route smoke shot list for this idea:
Idea: route a tool workflow through a reliable compatibility gate.
Expected: selected IP is OpenClaw.
Expected: aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, and the OpenClaw aliases listed in routing.md.
Expected: route status is `source-reviewed`.
Expected: source/license authority is `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
Expected: route-local reference directory is `ian-xiaohei-illustrations/references/ips/openclaw/`.
Expected: required references include `index.md`, `source.md`, `style-dna.md`, `openclaw-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`.
Expected: planning fields include Placement, Core idea, Structure type, OpenClaw state, OpenClaw action, Supporting objects, Visible labels, Output path, Source/license note.
Expected: output path is `assets/<article-slug>-openclaw/`.
Expected: docs validation token is `assets/&lt;article-slug&gt;-openclaw/`.
Expected: uploaded-logo identity markers include red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Expected: OpenClaw action vocabulary includes inspect, hold, bridge, sort, lift, connect, and signal.
Expected: public sample gate is controlled by RELEASE_CHECKLIST.md; public rendered OpenClaw samples require release review.
```

## Route Notes: Mixed-IP Requests

The same core idea can create separate variant groups by IP. Xiaohei group uses `assets/<article-slug>-illustrations/`, Littlebox group uses `assets/<article-slug>-littlebox/`, Tom group uses `assets/<article-slug>-tom/`, Ferris group uses `assets/<article-slug>-ferris/`, Seal group uses `assets/<article-slug>-seal/`, OpenClaw group uses `assets/<article-slug>-openclaw/`, and Go Gopher group uses `assets/<article-slug>-gopher/`; each group loads its own references, prompt template, QA, and output path.

Maintainer reference: Xiaohei canonical pack is at `ian-xiaohei-illustrations/references/ips/xiaohei/`, Littlebox canonical pack is at `ian-xiaohei-illustrations/references/ips/littlebox/`, Tom canonical pack is at `ian-xiaohei-illustrations/references/ips/tom/`, Tom rights record is at `ian-xiaohei-illustrations/references/ips/tom/rights.md`, Ferris canonical pack is at `ian-xiaohei-illustrations/references/ips/ferris/`, Ferris source/trademark authority is at `ian-xiaohei-illustrations/references/ips/ferris/source.md`, Seal canonical pack is at `ian-xiaohei-illustrations/references/ips/seal/`, Seal source-history authority is at `ian-xiaohei-illustrations/references/ips/seal/source.md`, OpenClaw canonical pack is at `ian-xiaohei-illustrations/references/ips/openclaw/`, OpenClaw source/license authority is at `ian-xiaohei-illustrations/references/ips/openclaw/source.md`, Go Gopher canonical pack is at `ian-xiaohei-illustrations/references/ips/gopher/`, Go Gopher source/license authority is at `ian-xiaohei-illustrations/references/ips/gopher/source.md`, root `gopher.png` is local visual authority, and route metadata is at `ian-xiaohei-illustrations/references/routing.md`.

### Mixed IP: variant planning only

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Use one core idea to produce seven separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
Each group must use its own route-local references, planning fields, QA gates, route-specific status, source/rights/source-history note, and output directory.

Xiaohei variant group:
- Use `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Include Xiaohei action, suggested elements, and short visible labels
- Output to `assets/<article-slug>-illustrations/`

Littlebox variant group:
- Use `ian-xiaohei-illustrations/references/ips/littlebox/`
- Include Littlebox state: closed, visual metaphor, assigned background, and short visible labels
- Output to `assets/<article-slug>-littlebox/`

Tom variant group:
- Use `ian-xiaohei-illustrations/references/ips/tom/`
- Keep route status `gated-authorized`
- Keep rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Include Tom state, Tom action, Supporting objects, Visible labels, Output path, Rights-status note
- Output to `assets/<article-slug>-tom/`
- Public rendered Tom samples are controlled by the RELEASE_CHECKLIST.md public-sample gate

Ferris variant group:
- Use `ian-xiaohei-illustrations/references/ips/ferris/`
- Keep source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Keep route status `source-reviewed`
- Aliases include Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, Rust 螃蟹
- Include Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note
- Output to `assets/<article-slug>-ferris/`
- Docs validation token is `assets/&lt;article-slug&gt;-ferris/`
- Public rendered Ferris samples are controlled by the RELEASE_CHECKLIST.md Rust trademark and endorsement-safe wording gate
- Generated public Ferris samples require release review for Rust trademark and endorsement-safe wording

Seal variant group:
- Use `ian-xiaohei-illustrations/references/ips/seal/`
- Keep source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`
- Keep route status `active`
- Aliases include Seal, hoodie seal, white seal, blue hoodie seal, 海豹, 连帽衫海豹, 白色海豹, 蓝色连帽衫海豹
- Include Seal state, Seal action, Supporting objects, Visible labels, Output path, Source-history note
- Output to `assets/<article-slug>-seal/`
- Docs validation token is `assets/&lt;article-slug&gt;-seal/`
- Hoodie seal identity note preserves white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail
- Logo-free note keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free
- Seal actions should inspect, repair, shield, bridge, sort, and mark the core idea
- Public rendered Seal samples are controlled by the RELEASE_CHECKLIST.md hoodie identity, logo-free output, route isolation, and article-metaphor quality gates

OpenClaw variant group:
- Use `ian-xiaohei-illustrations/references/ips/openclaw/`
- Keep source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`
- Keep route status `source-reviewed`
- Aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, and the OpenClaw aliases listed in routing.md
- Include OpenClaw state, OpenClaw action, Supporting objects, Visible labels, Output path, Source/license note
- Output to `assets/<article-slug>-openclaw/`
- Docs validation token is `assets/&lt;article-slug&gt;-openclaw/`
- Uploaded-logo identity markers include red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs
- OpenClaw actions should inspect, hold, bridge, sort, lift, connect, and signal the core idea
- Public rendered OpenClaw samples are controlled by the RELEASE_CHECKLIST.md public-sample and final evidence gates

<paste article or single idea>
```

### Mixed IP: generate seven groups from one idea

```text
Use $ian-xiaohei-illustrations to generate seven separate variant groups: Xiaohei variant group, Littlebox variant group, Tom variant group, Ferris variant group, Seal variant group, OpenClaw variant group, and Go Gopher variant group from the same core idea.

Core idea: trust is built by placing one piece of evidence after another.

Xiaohei variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/xiaohei/`
- White-background hand drawing; 小黑 carries the core actions of laying evidence and testing load
- Output to `assets/<article-slug>-illustrations/`

Littlebox variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/littlebox/`
- Littlebox state: closed
- Use visual metaphor for packing evidence, handing evidence over, or blocking empty claims
- Assign background between #E3F2FD and #E6E6FA
- Use short visible labels
- Output to `assets/<article-slug>-littlebox/`

Tom variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/tom/`
- Tom aliases include Tom, Tom Cat, Tom and Jerry, 汤姆, 汤姆猫
- Keep route status `gated-authorized`
- Keep rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Tom must carry the same core idea's cognitive action
- Use Supporting objects for evidence, roads, bridges, stamps, or warning marks
- Keep Visible labels short, sparse, and in the user's language
- Output to `assets/<article-slug>-tom/`
- Docs validation token is `assets/&lt;article-slug&gt;-tom/`
- Public rendered Tom samples are controlled by the RELEASE_CHECKLIST.md public-sample gate

Ferris variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/ferris/`
- Keep source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Ferris aliases include Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, Rust 螃蟹
- Keep route status `source-reviewed`
- Ferris must carry the same core idea's cognitive action
- Use Rust-themed low-tech article metaphors for evidence, constraints, review, paths, or safety boundaries
- Include Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note
- Output to `assets/<article-slug>-ferris/`
- Docs validation token is `assets/&lt;article-slug&gt;-ferris/`
- Public rendered Ferris samples are controlled by the RELEASE_CHECKLIST.md Rust trademark and endorsement-safe wording gate
- Generated public Ferris samples require release review for Rust trademark and endorsement-safe wording

Seal variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/seal/`
- Keep source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`
- Seal aliases include Seal, hoodie seal, white seal, blue hoodie seal, 海豹, 连帽衫海豹, 白色海豹, 蓝色连帽衫海豹
- Keep route status `active`
- Seal must carry the same core idea's Seal action
- Use product-neutral article metaphors for evidence, paths, review, handoff, trust, comparison, or conceptual repair
- Include Seal state, Seal action, Supporting objects, Visible labels, Output path, Source-history note
- Seal should inspect, repair, shield, bridge, sort, and mark the core idea through maps, bridges, knots, lamps, shields, stamps, trails, gates, scales, buckets, threads, lenses, or compasses
- Output to `assets/<article-slug>-seal/`
- Docs validation token is `assets/&lt;article-slug&gt;-seal/`
- Public rendered Seal samples are controlled by the RELEASE_CHECKLIST.md hoodie identity, logo-free output, route isolation, and article-metaphor quality gates

OpenClaw variant group:
- Generate 2 images
- Use `ian-xiaohei-illustrations/references/ips/openclaw/`
- Keep source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`
- OpenClaw aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot, and the OpenClaw aliases listed in routing.md
- Keep route status `source-reviewed`
- OpenClaw must carry the same core idea's cognitive action
- Use project-neutral article metaphors for evidence, routing, compatibility checks, handoffs, review, or conceptual repair
- Include OpenClaw state, OpenClaw action, Supporting objects, Visible labels, Output path, Source/license note
- Preserve uploaded-logo identity markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs
- Output to `assets/<article-slug>-openclaw/`
- Docs validation token is `assets/&lt;article-slug&gt;-openclaw/`
- Public rendered OpenClaw samples are controlled by the RELEASE_CHECKLIST.md public-sample and final evidence gates
```

## Maintainer Validation Smoke Prompts

Phase 42 owns Go Gopher validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation.

These prompts support manual route behavior checks; the full package validator is `node scripts/validate-skill-package.mjs`. Route source file: `ian-xiaohei-illustrations/references/routing.md`.
Phase 32 owns Seal migration validator check-id cleanup, stale leakage fixtures, Node test restoration, final evidence, and UAT.

### Smoke: default Xiaohei route

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Omit the visual IP. State the selected IP and create 1 shot list for this idea:
Idea: compress fuzzy input into an executable action.
Expected: selected IP is Xiaohei, output path is `assets/<article-slug>-illustrations/`.
```

### Smoke: explicit Xiaohei route

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Use the Ian / ian-xiaohei / Xiaohei / 小黑 route to create 1 shot list for this idea:
Idea: connect scattered clues into one deliverable path.
Expected: load `ian-xiaohei-illustrations/references/ips/xiaohei/`, output path is `assets/<article-slug>-illustrations/`.
```

### Smoke: explicit Littlebox route

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Use the Littlebox / 小盒 / 纸盒 / paper-box / carton route to create 1 shot list for this idea:
Idea: pack loose ideas into a deliverable version.
Expected: load `ian-xiaohei-illustrations/references/ips/littlebox/`, include Littlebox state: closed, visual metaphor, assigned background, short visible labels, output path is `assets/<article-slug>-littlebox/`.
```

### Smoke: Tom protected-character route status

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 route to create 1 route-status shot list for this idea:
Idea: turn a pursuit-stage judgment into the next executable step.
Expected: selected IP is Tom, route status is `gated-authorized`, rights record is `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
Expected: load `ian-xiaohei-illustrations/references/ips/tom/` route-local references.
Expected: output path contract is `assets/<article-slug>-tom/`; docs validation token is `assets/&lt;article-slug&gt;-tom/`.
Purpose: text-only route audit; Phase 8 runtime selection behavior is verified, and Phase 9 examples keep the public-sample gate.
```

### Smoke: OpenClaw source-reviewed route status

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the OpenClaw route to create 1 route-status shot list for this idea:
Idea: route a tool workflow through a reliable compatibility gate.
Expected: selected IP is OpenClaw, route status is `source-reviewed`, source/license authority is `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
Expected: load `ian-xiaohei-illustrations/references/ips/openclaw/` route-local references.
Expected: output path contract is `assets/<article-slug>-openclaw/`; docs validation token is `assets/&lt;article-slug&gt;-openclaw/`.
Purpose: text-only route audit; Phase 35 runtime selection behavior is verified, and Phase 36 examples keep the public-sample gate.
```


### Smoke: Go Gopher source-reviewed route status

```text
Use $visual-ip-illustrations. Do not generate images yet.
Text-only maintainer route audit. Use the Go Gopher route to create 1 route-status shot list for this idea:
Idea: separate signal from noise before a release decision.
Expected: selected IP is Go Gopher, route status is `source-reviewed`, source/license authority is `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
Expected: route-local reference directory is `ian-xiaohei-illustrations/references/ips/gopher/`.
Expected: root `gopher.png`, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, Go logo boundary, and official endorsement boundary are attached.
Expected: output path is `assets/<article-slug>-gopher/`; docs validation token is `assets/&lt;article-slug&gt;-gopher/`.
Expected: planning fields include Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, Source/license note.
```

### Smoke: mixed-IP variant groups

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Use one core idea to create seven separate variant groups: Xiaohei variant group, Littlebox variant group, Tom variant group, Ferris variant group, Seal variant group, OpenClaw variant group, and Go Gopher variant group:
Idea: a good workflow places the next action directly in someone's hand.
Expected: Xiaohei variant group uses `ian-xiaohei-illustrations/references/ips/xiaohei/` and outputs to `assets/<article-slug>-illustrations/`.
Expected: Littlebox variant group uses `ian-xiaohei-illustrations/references/ips/littlebox/` and outputs to `assets/<article-slug>-littlebox/`.
Expected: Tom variant group uses `ian-xiaohei-illustrations/references/ips/tom/`, outputs to `assets/<article-slug>-tom/`, and keeps route status `gated-authorized` plus rights record `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
Expected: Ferris variant group uses `ian-xiaohei-illustrations/references/ips/ferris/`, outputs to `assets/<article-slug>-ferris/`, and keeps route status `source-reviewed` plus source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
Expected: Seal variant group uses `ian-xiaohei-illustrations/references/ips/seal/`, outputs to `assets/<article-slug>-seal/`, and keeps route status `active`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`, hoodie seal identity note, logo-free note, and product-neutral article metaphors.
Expected: OpenClaw variant group uses `ian-xiaohei-illustrations/references/ips/openclaw/`, outputs to `assets/<article-slug>-openclaw/`, and keeps route status `source-reviewed`, source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`, uploaded-logo identity markers, and public-sample gate.
Expected: Go Gopher variant group uses `ian-xiaohei-illustrations/references/ips/gopher/`, outputs to `assets/<article-slug>-gopher/`, keeps docs validation token `assets/&lt;article-slug&gt;-gopher/`, route status `source-reviewed`, source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`, root `gopher.png` local visual authority, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample gate, and Source/license note.
Expected: Xiaohei variant group, Littlebox variant group, Tom variant group, Ferris variant group, Seal variant group, OpenClaw variant group, and Go Gopher variant group each use their own route-local references, planning fields, QA gates, route-specific status, source/rights/source-history note, and output directory.
```

Legacy six-route OpenClaw smoke fixture marker for validator compatibility:
six separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw.
OpenClaw variant group each use their own route-local references.

## Planning Only

```text
Use $ian-xiaohei-illustrations. Do not generate images yet.
Analyze the article below and identify where illustrations would help. Return about 5 shots.
For each shot, include:
- paragraph placement
- theme
- core idea
- structure type
- what 小黑 does in the image
- suggested elements
- suggested visible labels in the user's language

<paste article>
```

## Article Body Illustrations

```text
Use $ian-xiaohei-illustrations to generate 4 strange but clear Xiaohei article body illustrations for the article below.
Requirements: 16:9 horizontal, pure white background, black hand-drawn linework, sparse red/orange/blue handwritten labels in the user's language.
Each image should express one core structure.

<paste article>
```

## Long-Form Illustration Strategy

```text
Use $ian-xiaohei-illustrations to create an illustration strategy for this long article.
Choose only cognitive anchors: core claim, input-output loop, before/after contrast, common trap, and handoff path.
Default to 6-8 images. Return a shot list first and do not generate images.

<paste article>
```

## Single-Idea Generation

```text
Use $ian-xiaohei-illustrations to generate one 16:9 article body illustration for this idea:

Trust is built by placing one piece of evidence after another.

The image should be strange but clear. 小黑 must carry the central action.
Visible labels should be short and sparse.
```

## Workflow Theme

```text
Use $ian-xiaohei-illustrations to generate one image for "turn one raw source into traffic, trust, and conversion content."
Use a fresh low-tech metaphor. 小黑 should carry the central action.
```

## Edit: Remove Title

```text
Use $ian-xiaohei-illustrations to edit this image.
Remove the top-left "Workflow Diagram" title and underline. Preserve the rest of the image.
Preserve characters, labels, paths, line style, composition, aspect ratio, and image quality.
```

## Edit: Strengthen Xiaohei Participation

```text
Use $ian-xiaohei-illustrations to revise this image.
Keep the core idea unchanged and regenerate a version where 小黑 actively drives the structure.
Make the image stranger while keeping it pure white, spacious, and text-light.
Preserve the selected Xiaohei route, unaffected labels, output path, and article meaning.
```

## Edit: Fix Littlebox Closed State

```text
Use $ian-xiaohei-illustrations to edit this Littlebox image.
Keep the Littlebox route and original core idea.
Fix the lid to closed state: Littlebox state: closed, front-left three-quarter view, front panel dot eyes, exactly one amber seam tape with jagged torn front tab.
Preserve assigned background, rough black marker linework, existing composition, and unaffected objects.
Preserve unaffected content; only fix closed state, tape placement, and active placement.
```

## Edit: Fix Littlebox Labels

```text
Use $ian-xiaohei-illustrations to edit this Littlebox image.
Keep Littlebox state: closed, assigned background, visual metaphor, composition, character action, and output path.
Replace visible text with these short visible labels: ["原始材料", "判断", "输出"].
Labels should use the user's language, stay sparse, and look like handwritten marker. Preserve unaffected image content.
```

## Edit: Preserve Unaffected Content by Route

```text
Use $ian-xiaohei-illustrations to edit this image.
First identify the route from the image and my instruction: Xiaohei or Littlebox.
Only modify the stated issue. Preserve unaffected character identity, background, labels, paths, composition, line style, aspect ratio, and core idea.
Issue: <describe the object, text, or behavior to remove, replace, or repair>
```

## Generate a Style Sample Set

```text
Use $ian-xiaohei-illustrations to create 5 separate Xiaohei article body illustration samples.
Themes: information overload, product validation, content compounding, one-person company, and trust building.
Generate each image separately.
```
