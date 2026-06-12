# Tom Prompt Template

Use this file after selecting the `tom` route. Planning and delivery notes follow the user's language. Image-generation prompts stay English for model consistency. Visible labels are quoted exactly in the user's language.

Output path: `assets/<article-slug>-tom/`.

Tom route status: `gated-authorized`.

Rights-status note: Tom is a protected-character route. Use `rights.md` as the authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and any status change.

## Planning Output Format

Tom planning fields gate.

Use this format for Tom shot lists:

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]
   Tom action: [the physical cognitive action Tom performs]
   Supporting objects: [1-2 objects such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, or warning marks]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-tom/
   Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.
```

Planning rule: Tom must perform the cognitive action. Choose supporting objects from the article metaphor, then make Tom pull, chase, operate, guard, catch, hold back, bridge, sort, repair, stamp, trap, redirect, or carry the decisive idea.

## Single Image Generation

Tom one-image generation gate.

Replace bracketed fields. Keep the prompt specific and compact.

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes. Keep the scene original and article-explanatory.

Scene: [core idea in one sentence].

Visual language: sparse hand-drawn article illustration on a clean white or near-white background. Rough black linework with visible human looseness, generous whitespace, one enlarged action subject, and a few low-tech supporting objects. Use black for main strokes, objects, Tom details, and labels. Use red or orange only for warnings, motion, flow, stamps, or decisive emphasis. No gradients, no shadows, no paper texture, no polished vector style, no dense infographic, no PPT slide, no UI screenshot, no poster composition.

Recurring IP: Tom from Tom and Jerry as a simplified article-illustration character. Preserve recognizable Tom cues: grey or blue-grey cat body, white muzzle, white belly areas, expressive ears, long tail, visible paws, Tom-like head shape, and Tom-like body silhouette. Keep Tom sparse and explanatory while remaining recognizable as Tom.

Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic].

Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive].

Tom action: Tom must perform the central cognitive action: [specific action]. The metaphor should lose its meaning if Tom is removed.

Supporting objects: [1-2 low-tech objects: evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, or warning marks].

Composition: one core idea only. [Describe exact positions, Tom's body direction, Tom's action, the supporting objects, and the information flow]. Main Tom action takes about 35%-55% of the canvas. Leave generous whitespace around the action. Keep labels away from Tom's face, paws, and silhouette.

Original article metaphor: invent a fresh physical metaphor for this article concept. Do not recreate cartoon source material, episode staging, promotional art, title cards, or show branding.

Visible handwritten labels, copied exactly in the user's language: [quoted labels]. Keep labels concise, sparse, legible, and drawn as rough handwritten text. For non-Latin scripts, copy the label text exactly, preserve the script, and do not translate it.

Save reminder for downstream delivery: save accepted output under `assets/<article-slug>-tom/` with an ordered English slug filename such as `01-topic-name.png`.

Constraints: one image explains one core idea. Keep Tom as the central cognitive action subject. Use no logos, no title cards, no source-frame recreation, no default Jerry, no broad cast expansion, no dense explanatory text, no generic-cat drift, no broad public availability wording, no formal diagram, no top-left title, no clean digital font labels, no crowded nodes, and no copied prior composition.
```

## Editing Prompts

Each edit prompt keeps the Tom route status and rights boundary explicit. Preserve the existing composition, labels, style, aspect ratio, and unaffected objects except where the named failure requires regeneration.

### Stronger Tom Participation

Tom edit participation repair gate.

```text
Regenerate the image with the same core idea, same article-illustration style, same visible labels, same 16:9 aspect ratio, and the same unaffected supporting objects, but make Tom perform the central cognitive action.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.

Tom should physically pull, chase, operate, guard, catch, hold back, bridge, sort, repair, stamp, trap, redirect, or carry the concept through the scene. The metaphor should depend on Tom's action. Preserve recognizable Tom cues: grey or blue-grey body, white muzzle, white belly areas, expressive ears, tail, paws, and Tom-like silhouette.
```

### Off-Model Identity Repair

Tom off-model identity repair gate.

```text
Edit the image to keep the same composition, labels, style, 16:9 aspect ratio, and unaffected objects, but repair the character so it reads as Tom from the selected Tom route.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.

Preserve a simplified article-illustration style while adding recognizable Tom cues: grey or blue-grey cat body, white muzzle, white belly areas, expressive ears, long tail, visible paws, Tom-like head shape, and Tom-like body silhouette. Remove generic-cat drift, mascot-cat drift, or route-neutral animal features.
```

### Title Removal

Tom title removal edit gate.

```text
Edit the provided image. Remove only the title text, title card, top-left heading, or underline: [text to remove].

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.

Fill the removed area with the same clean background and preserve everything else: Tom, Tom identity cues, existing composition, visible labels, supporting objects, paths, line style, aspect ratio, and image quality. Do not add new text, logos, title cards, or objects.
```

### Text Reduction

Tom text reduction edit gate.

```text
Edit or regenerate the image with the same core idea, same Tom action, same style, same 16:9 aspect ratio, and the same unaffected supporting objects, but reduce visible text.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.

Keep only these short visible labels, copied exactly in the user's language: [quoted labels]. Remove full sentences, dense annotations, bilingual text, clean digital typography, and labels that crowd Tom's face, paws, or silhouette. Preserve composition and route identity.
```

### Preserve Unaffected Content

Tom unaffected-content preservation gate.

```text
Edit only the named failure: [participation / identity / title / text density / label typo]. Preserve all unaffected content exactly: Tom's successful action, Tom identity cues, existing composition, visible labels that are already correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

Route status note: Tom is a `gated-authorized` protected-character route. Use `rights.md` as the rights authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.

Keep the scene an original article metaphor. Add no logos, title cards, source-frame recreation, default Jerry, broad cast expansion, generic-cat drift, or broad availability wording.
```
