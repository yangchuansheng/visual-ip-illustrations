# OpenClaw Prompt Template

Route id: `openclaw`.
Route status: `source-reviewed`.
Output path: `assets/<article-slug>-openclaw/`.
Source/license authority: `source.md`.
Uploaded-logo identity note: preserve the red logo-derived OpenClaw mascot with red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Public rendered sample review boundary through `RELEASE_CHECKLIST.md`.
OpenClaw route block: generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, and copied composition all fail the route.
Save accepted OpenClaw output under `assets/<article-slug>-openclaw/` with an ordered English slug filename such as `01-topic-name.png`.

## Planning Output Format

OpenClaw planning fields gate.

Return one planned image per selected article anchor:

- Placement:
- Core idea:
- Structure type:
- OpenClaw state:
- OpenClaw action:
- Supporting objects:
- Visible labels:
- Output path: `assets/<article-slug>-openclaw/`
- Uploaded-logo identity note: preserve red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Source/license note: OpenClaw is `source-reviewed`; source/license authority is `source.md`, including MIT License and OpenClaw Foundation copyright.

OpenClaw state examples: focused, inspecting, gripping, sorting, bridging, tuning, stamping, carrying, mapping, connecting, shielding, comparing, marking, untangling, weighing, guiding, assembling, and repairing.

## One-Image Generation Prompt

OpenClaw one-image generation gate.

```text
Create one sparse 16:9 horizontal article illustration for this article idea:

Core idea: [one sentence]
Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
OpenClaw state: [focused / inspecting / gripping / sorting / bridging / tuning / stamping / carrying / mapping / connecting / shielding / comparing / marking / untangling / weighing / guiding / assembling / repairing]
OpenClaw action: [physical action that performs the central cognitive article action]
Supporting objects: [3-6 sparse article metaphor objects]
Visible labels: [2-6 short labels copied exactly in the user's requested language]

Draw OpenClaw as the red logo-derived mascot from the uploaded-logo identity note: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs. OpenClaw must perform the central cognitive action. The visual metaphor should lose its meaning if OpenClaw is removed.

Style: clean white or near-white background, loose black hand-drawn linework, generous whitespace, low-density composition, restrained red tied to OpenClaw's body, restrained cyan tied to the pupils or one small action emphasis, sparse handwritten labels, no full-sentence annotations.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Save accepted output under `assets/<article-slug>-openclaw/` with an ordered English slug filename such as `01-topic-name.png`.

Reject these failures: generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, copied composition, formal diagrams, dense PPT-like infographics, UI screenshots, IDE or terminal scenes, code screenshots, poster layouts, top-left title artifacts, clean digital labels.
```

## Editing Prompts

Each edit prompt keeps the OpenClaw route status and source/license boundary explicit. Preserve the existing composition, labels, style, aspect ratio, and unaffected objects except where the named failure requires regeneration.

### Stronger OpenClaw Participation

Stronger OpenClaw Participation repair gate.

```text
Regenerate the image with the same core idea, same article-illustration style, same visible labels, same 16:9 aspect ratio, and the same unaffected supporting objects, but make OpenClaw perform the central cognitive action.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

OpenClaw should physically inspect, grip, sort, bridge, tune, stamp, carry, map, connect, shield, compare, mark, untangle, weigh, guide, assemble, or repair the concept through the scene. The metaphor should depend on OpenClaw's action. Preserve the uploaded-logo identity note: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
```

### Uploaded-Logo Identity Repair

Uploaded-Logo Identity Repair gate.

```text
Edit the image to keep the same composition, labels, style, 16:9 aspect ratio, and unaffected objects, but repair the character so it follows the OpenClaw uploaded-logo identity.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Restore the OpenClaw markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs. Remove generic red mascot drift, missing claws, missing antennae, missing cyan pupils, missing red round body, missing black eyes, missing short legs, generic robot drift, and product-poster drift.
```

### Title Removal

Title removal edit gate.

```text
Edit the provided image. Remove only the title text, title card, top-left heading, or underline: [text to remove].

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Fill the removed area with the same clean background and preserve everything else: OpenClaw identity, OpenClaw action, existing composition, visible labels that remain correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality. Add no new text, title cards, UI screenshots, poster layout, clean digital labels, or objects.
```

### Text Reduction

Text reduction edit gate.

```text
Edit or regenerate the image with the same core idea, same OpenClaw action, same style, same 16:9 aspect ratio, and the same unaffected supporting objects, but reduce visible text.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Keep only these short visible labels, copied exactly in the user's requested language: [quoted labels]. Remove full sentences, dense annotations, bilingual text, clean digital typography, top-left titles, labels that crowd OpenClaw's face, antennae, side claw-like arms, cyan pupils, or short legs, and text that creates excessive text. Preserve OpenClaw identity, OpenClaw action, supporting objects, labels that remain correct, line style, color accents, aspect ratio, image quality, and source/license boundary.
```

### Route Leakage Repair

Route leakage repair gate.

```text
Edit or regenerate the image prompt with the same core idea, same successful OpenClaw action, same style, same 16:9 aspect ratio, same visible labels, and the same unaffected supporting objects, but remove route leakage.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Keep OpenClaw as the red logo-derived article character. Use article metaphor objects such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, claws, or small hand-built machines. Preserve the uploaded-logo identity note. Keep successful content that already works.
```

### Unaffected-Content Preservation

Unaffected-content preservation gate.

```text
Edit only the named failure: [participation / uploaded-logo identity / title / text density / label typo / route leakage]. First name the exact failure being repaired. Preserve all successful content outside that failure: successful OpenClaw action, uploaded-logo identity cues, existing composition, visible labels that are already correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

Route status note: OpenClaw is a `source-reviewed` logo-mascot route. Use `source.md` as source/license authority for the official repository, MIT License, OpenClaw Foundation copyright, uploaded-logo authority, public-sample policy, reviewer fields, and status changes.

Keep the scene an original article metaphor. Add no generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, formal diagrams, UI screenshots, title cards, dense PPT-like infographics, or copied prior route compositions.

OpenClaw route block: generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, and copied composition all fail the route.
```

## Output Reminder

Accepted OpenClaw images are saved under `assets/<article-slug>-openclaw/`. The delivery report states selected visual IP, image count, purpose per image, saved path, source/license note, uploaded-logo identity status, route isolation status, and stability notes.
