# Seal Prompt Template

Use this file after selecting the `seal` route. Planning and delivery notes follow the user's language. Image-generation prompts stay English for model consistency. Visible labels are copied exactly in the user's requested language.

Route id: `seal`.
Route status: `active`.
Output path: `assets/<article-slug>-seal/`.
Source-history authority: `source.md`.
Hoodie seal identity note: preserve the product-neutral Seal character with white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.
Canonical image status: `uploaded-image-canonical`.
Drift boundary: `uploaded-image-locked`.
Save accepted Seal output under `assets/<article-slug>-seal/` with an ordered English slug filename such as `01-topic-name.png`.

## Planning Output Format

Seal planning fields gate.

Use this format for Seal shot lists:

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Seal state: [focused / inspecting / repairing / shielding / bridging / tuning / rolling back / stamping / sorting / assembling / guiding / lifting / connecting / untangling / weighing / mapping / carrying / comparing / marking]
   Seal action: [the physical cognitive action Seal performs]
   Supporting objects: [1-2 product-neutral objects: maps, bridges, knots, compasses, stepping stones, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's requested language]
   Output path: assets/<article-slug>-seal/
   Hoodie seal identity note: preserve the product-neutral Seal character with white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
   Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.
```

Planning rule: Seal must perform the cognitive action. Choose supporting objects from product-neutral article metaphors, then make Seal inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, guide, lift, connect, untangle, weigh, map, carry, compare, or mark the decisive idea.

## Single Image Generation

Seal one-image generation gate.

Replace bracketed fields. Keep the prompt specific and compact.

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep the scene original, article-explanatory, and route-local.

Hoodie seal identity note: Seal is `uploaded-image-canonical` and `uploaded-image-locked`. Preserve white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.

Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free. Use no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.

Scene: [core idea in one sentence].

Visual language: sparse hand-drawn article illustration on a clean white or near-white background. Loose black linework with visible human looseness, generous whitespace, one enlarged action subject, and a few low-tech supporting objects. Use black for main strokes, objects, Seal details, and labels. Use restrained navy and deep-blue accents for the cap, hoodie, and selected action emphasis. Use minimal red/orange emphasis for warnings, decisions, motion, stamps, or decisive transitions. No gradients, no shadows, no paper texture, no polished vector style, no dense infographic, no PPT slide, no UI screenshot, no poster composition.

Recurring IP: Seal as the selected route's product-neutral hoodie seal article character. Preserve recognizable Seal cues: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail. Keep Seal sparse and explanatory while remaining recognizable as the Seal route.

Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic].

Seal state: [focused / inspecting / repairing / shielding / bridging / tuning / rolling back / stamping / sorting / assembling / guiding / lifting / connecting / untangling / weighing / mapping / carrying / comparing / marking].

Seal action: Seal must perform the central cognitive action: [specific action]. The metaphor should lose its meaning if Seal is removed.

Supporting objects: [1-2 product-neutral low-tech objects: maps, bridges, knots, compasses, stepping stones, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines].

Composition: one core idea only. [Describe exact positions, Seal's body direction, flipper action, the supporting objects, and the information flow]. Main Seal action takes about 35%-55% of the canvas. Leave generous whitespace around the action. Keep labels away from Seal's face, cap, plain hoodie chest, flippers, and tail.

Product-neutral article metaphor: use maps, stepping stones, bridges, levers, knots, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, compasses, or small hand-built machines as explanatory metaphors for judgment, review, sequencing, prioritization, handoff, hidden coupling, failure mode, decision gate, framing, trust, comparison, or conceptual repair.

Visible handwritten labels, copied exactly in the user's requested language: [quoted labels]. Keep labels concise, sparse, legible, and drawn as rough handwritten text. For non-Latin scripts, copy the label text exactly, preserve the script, and do not translate it.

Save reminder: save accepted output under `assets/<article-slug>-seal/` with an ordered English slug filename such as `01-topic-name.png`. Delivery must report that cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.

Constraints: one image explains one core idea. Keep Seal as the central cognitive action subject. Use no generic seal drift, no missing cap, no missing hoodie, no logo or mark artifacts, no changed body color, no passive placement, no over-detailed toy drift, no excessive text, no route leakage, no copied composition, no missing side-rear tail, no missing glossy dark eyes, no missing black nose, no missing whisker dots, no missing small smile, no missing short rounded flippers, no missing compact legs, no bald/plain-head seal drift, no formal diagrams, no dense PPT-like infographics, no UI screenshots, no IDE scenes, no terminal scenes, no code screenshots, no poster layouts, no top-left titles, no clean digital font labels, no crowded nodes.

Seal route block: generic seal drift, missing cap, missing hoodie, logo or mark artifacts, changed body color, passive placement, over-detailed toy drift, excessive text, route leakage, and copied composition all fail the route.
```

## Editing Prompts

Each edit prompt keeps the Seal route status and source-history boundary explicit. Preserve the existing composition, labels, style, aspect ratio, and unaffected objects except where the named failure requires regeneration.

### Stronger Seal Participation

Stronger Seal Participation repair gate.

```text
Regenerate the image with the same core idea, same article-illustration style, same visible labels, same 16:9 aspect ratio, and the same unaffected supporting objects, but make Seal perform the central cognitive action.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Seal should physically inspect, repair, shield, bridge, tune, roll back, stamp, sort, assemble, guide, lift, connect, untangle, weigh, map, carry, compare, or mark the concept through the scene. The metaphor should depend on Seal's action. Preserve the hoodie seal identity note: white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
```

### Hoodie Seal Identity Repair

Hoodie Seal Identity Repair gate.

```text
Edit the image to keep the same composition, labels, style, 16:9 aspect ratio, and unaffected objects, but repair the character so it follows the Seal hoodie identity.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Restore the hoodie Seal markers: white rounded body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail. Keep cap and hoodie chest plain and mark-free. Remove generic seal drift, missing cap, missing hoodie, logo or mark artifacts, changed body color, over-detailed toy drift, bald/plain-head seal drift, and route-neutral mascot features.
```

### Logo-Free Output Repair

Logo-Free Repair gate.

```text
Edit the image to keep the same core idea, successful Seal action, successful composition, visible labels, 16:9 aspect ratio, and article metaphor, but remove every logo or mark from the cap, hoodie chest, mascot body, props, and scene.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Preserve white rounded seal body, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, side-rear white tail, sparse article-illustration style, and unaffected supporting objects. Keep the cap and hoodie chest plain: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.
```

### Title Removal

Title removal edit gate.

```text
Edit the provided image. Remove only the title text, title card, top-left heading, or underline: [text to remove].

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Fill the removed area with the same clean background and preserve everything else: Seal identity, Seal action, existing composition, visible labels that remain correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality. Add no new text, title cards, UI screenshots, poster layout, clean digital labels, or objects.
```

### Text Reduction

Text reduction edit gate.

```text
Edit or regenerate the image with the same core idea, same Seal action, same style, same 16:9 aspect ratio, and the same unaffected supporting objects, but reduce visible text.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Keep only these short visible labels, copied exactly in the user's requested language: [quoted labels]. Remove full sentences, dense annotations, bilingual text, clean digital typography, top-left titles, labels that crowd Seal's face, cap, plain hoodie chest, flippers, or tail, and text that creates excessive text. Preserve Seal identity, Seal action, supporting objects, labels that remain correct, line style, color accents, aspect ratio, image quality, and source-history boundary.
```

### Route Leakage Repair

Route leakage repair gate.

```text
Edit or regenerate the image prompt with the same core idea, same successful Seal action, same style, same 16:9 aspect ratio, same visible labels, and the same unaffected supporting objects, but remove route leakage.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Keep Seal as a product-neutral hoodie seal article character. Use product-neutral article metaphor objects such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines. Preserve the hoodie seal identity note and logo-free note. Keep successful content that already works.
```

### Unaffected-Content Preservation

Unaffected-content preservation gate.

```text
Edit only the named failure: [participation / hoodie identity / logo-free output / title / text density / label typo / route leakage]. First name the exact failure being repaired. Preserve all successful content outside that failure: successful Seal action, hoodie Seal identity cues, existing composition, visible labels that are already correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

Route status note: Seal is an `active` product-neutral hoodie seal route. Use `source.md` as the source-history authority for provenance, hoodie identity markers, sample policy, reviewer fields, and status changes. Keep `uploaded-image-canonical` and `uploaded-image-locked`.

Keep the scene an original product-neutral article metaphor. Add no generic seal drift, missing cap, missing hoodie, logo or mark artifacts, changed body color, passive placement, over-detailed toy drift, excessive text, route leakage, formal diagrams, UI screenshots, title cards, dense PPT-like infographics, or copied prior route compositions.

Seal route block: generic seal drift, missing cap, missing hoodie, logo or mark artifacts, changed body color, passive placement, over-detailed toy drift, excessive text, route leakage, and copied composition all fail the route.
```
