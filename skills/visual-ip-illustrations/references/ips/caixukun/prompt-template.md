# Cai Xukun Prompt Template

Route id: `caixukun`.
Display name: Cai Xukun.
Route status: `gated-public-figure`.
Output path: `assets/<article-slug>-caixukun/`.
Source authority: `source.md`.
Uploaded visual authority: route-local uploaded visual authority recorded in `references/ips/caixukun/source.md` as uploaded reference image A and uploaded reference image B.
Uploaded-image identity note: preserve the yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
Public sample review boundary: Public generated Cai Xukun samples require release review before appearing in public examples or release surfaces.
Cai Xukun route block: realistic-person output, realistic-person portrait output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, copied composition, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion all fail the route.
Save accepted Cai Xukun output under `assets/<article-slug>-caixukun/` with an ordered English slug filename such as `01-topic-name.png`.

Runtime planning prose may follow the user's language. Image-generation prompts stay English. Visible labels use the user's requested language after removing or rewriting official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom-promotion claims into neutral article-concept labels.

## Planning Output Format

Cai Xukun planning fields gate.

Return one planned image per selected article anchor:

- Placement:
- Core idea:
- Structure type:
- Cai Xukun mascot state:
- Cai Xukun mascot action:
- Supporting objects:
- Visible labels:
- Likeness boundary note:
- Source-image context note:
- Output path: assets/<article-slug>-caixukun/

Cai Xukun mascot state examples: focused, inspecting, pointing, carrying, sorting, bridging, repairing, guiding, stamping, marking, shielding, weighing, connecting, untangling, mapping, comparing, lifting, assembling, and routing.

Likeness boundary note example: stylized mascot article illustration with uploaded-image authority; realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion fail the route.

Source-image context note example: green reference background is source-image context; final output uses sparse 16:9 white-background style.

## One-Image Generation Prompt

Cai Xukun one-image generation gate.

```text
Create one standalone sparse 16:9 horizontal article illustration for this article idea:

Core idea: [one sentence]
Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
Cai Xukun mascot state: [focused / inspecting / pointing / carrying / sorting / bridging / repairing / guiding / stamping / marking / shielding / weighing / connecting / untangling / mapping / comparing / lifting / assembling / routing]
Cai Xukun mascot action: [physical action that performs the central cognitive article action]
Supporting objects: [3-6 sparse article metaphor objects]
Visible labels: [2-6 short labels in the user's requested language after removing or rewriting official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom-promotion claims into neutral article-concept labels]
Likeness boundary note: stylized mascot article illustration with uploaded-image authority; realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion fail the route.
Source-image context note: green reference background is source-image context; final output uses sparse 16:9 white-background style.
Output path: assets/<article-slug>-caixukun/

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Preserve the uploaded Cai Xukun visual markers together: yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.

Cai Xukun must perform the central cognitive article action. The metaphor should lose its meaning if Cai Xukun is removed.

Style: sparse 16:9 horizontal article illustration, white or very light background, rough black hand-drawn linework, generous whitespace, low-density composition, restrained route colors tied to the uploaded marker set, sparse handwritten labels, no full-sentence annotations.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes. Public generated Cai Xukun samples require release review before appearing in public examples or release surfaces.

Save accepted output under `assets/<article-slug>-caixukun/` with an ordered English slug filename such as `01-topic-name.png`.

Reject these failures: realistic-person output, realistic-person portrait output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, copied composition, official endorsement, affiliation, impersonation, campaign, celebrity advertising, fandom promotion, formal diagrams, dense PPT-like infographics, UI screenshots, IDE or terminal scenes, code screenshots, poster layouts, top-left title artifacts, clean digital labels.
```

## Editing Prompts

Each edit prompt keeps the Cai Xukun route status, uploaded-image authority, public-figure likeness boundary, source-image context, and public sample review boundary explicit. Preserve the existing composition, labels, style, aspect ratio, and unaffected objects unless the named failure requires focused repair.

### Stronger Cai Xukun Participation

Stronger Cai Xukun Participation repair gate.

```text
Regenerate the image with the same core idea, same article-illustration style, same visible labels, same 16:9 aspect ratio, and the same unaffected supporting objects, but make Cai Xukun perform the central cognitive article action.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes. Public generated Cai Xukun samples require release review before appearing in public examples or release surfaces.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Cai Xukun should physically inspect, point, carry, sort, bridge, repair, guide, stamp, mark, tune, shield, weigh, connect, untangle, map, compare, lift, assemble, or route the concept through the scene. The metaphor should depend on Cai Xukun's action. Preserve the uploaded-image identity note: yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
```

### Uploaded-Image Identity Repair

Uploaded-Image Identity Repair gate.

```text
Edit the image to keep the same composition, labels, style, 16:9 aspect ratio, and unaffected objects, but repair the character so it follows the Cai Xukun uploaded-image identity from references/ips/caixukun/source.md.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Restore the Cai Xukun markers: yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots. Remove generic yellow duck drift, missing idol-hair, missing outfit markers, missing oversized white eyes, missing red cheek circles, missing orange beak, missing black high-collar top, missing white straps, missing white lower outfit, missing compact black or gray boots, and realistic-person portrait output.
```

### Title Removal

Title Removal edit gate.

```text
Edit the provided image. Remove only the title text, title card, top-left heading, or underline: [text to remove].

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Fill the removed area with the same white or very light background and preserve everything else: Cai Xukun identity, Cai Xukun action, existing composition, visible labels that remain correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality. Add no new text, title cards, UI screenshots, poster layout, clean digital labels, realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, or fandom promotion.
```

### Text Reduction

Text Reduction edit gate.

```text
Edit or regenerate the image with the same core idea, same Cai Xukun action, same style, same 16:9 aspect ratio, and the same unaffected supporting objects, but reduce visible text.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Keep only these short visible labels in the user's requested language after removing or rewriting official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom-promotion claims into neutral article-concept labels: [quoted labels]. Remove full sentences, dense annotations, bilingual text, clean digital typography, top-left titles, labels that crowd Cai Xukun's silver hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, or compact boots, and text that creates excessive text. Preserve Cai Xukun identity, Cai Xukun action, supporting objects, labels that remain correct, line style, color accents, aspect ratio, image quality, and public-figure likeness boundary.
```

### Public-Figure Likeness Boundary Repair

Public-Figure Likeness Boundary Repair gate.

```text
Edit or regenerate the image with the same core idea, same successful Cai Xukun mascot action, same sparse 16:9 article-illustration style, same visible labels, and the same unaffected supporting objects, but restore the public-figure likeness boundary.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route with uploaded-image authority from references/ips/caixukun/source.md. The route creates stylized mascot article illustrations.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Remove realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion. Keep Cai Xukun as the stylized mascot with yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots. Preserve the existing article metaphor, labels, white or very light background, line style, aspect ratio, and unaffected objects.
```

### Route Leakage Repair

Route Leakage Repair gate.

```text
Edit or regenerate the image prompt with the same core idea, same successful Cai Xukun action, same style, same 16:9 aspect ratio, same visible labels, and the same unaffected supporting objects, but remove route leakage.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Remove Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, root legacy route identity, public approval claims, and cross-route vocabulary. Keep Cai Xukun as the uploaded-image stylized mascot route character. Use article metaphor objects such as maps, bridges, knots, compasses, shelves, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, hooks, stepping stones, signposts, levers, or small hand-built machines. Preserve successful Cai Xukun content that already works.
```

### Green-Background Carryover Repair

Green-Background Carryover Repair gate.

```text
Edit or regenerate the image with the same core idea, same successful Cai Xukun mascot action, same visible labels, same 16:9 aspect ratio, and the same unaffected supporting objects, but remove green-background carryover.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority. The green reference background is source-image context.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Restore sparse 16:9 white-background article style: white or very light background, rough black hand-drawn linework, generous whitespace, low-density article metaphor, restrained route colors, and sparse labels in the user's requested language after public-figure claim sanitization. Preserve Cai Xukun's uploaded-image identity markers and public-figure likeness boundary.
```

### Unaffected-Content Preservation

Unaffected-Content Preservation gate.

```text
Edit only the named failure: [participation / uploaded-image identity / title / text density / likeness boundary / route leakage / green-background carryover / copied composition]. First name the exact failure being repaired. Preserve all successful content outside that failure: successful Cai Xukun action, uploaded-image identity cues, existing composition, visible labels that are already correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

Route status note: Cai Xukun is a `gated-public-figure` stylized mascot route. Use `references/ips/caixukun/source.md` as source authority for route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, public-figure likeness boundary, source-image context, public-sample policy, reviewer fields, and status changes.

Draw Cai Xukun as the uploaded-image stylized mascot described in references/ips/caixukun/source.md.

Keep the scene an original article metaphor. Add no realistic-person output, realistic-person portrait output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, copied composition, official endorsement, affiliation, impersonation, campaign, celebrity advertising, fandom promotion, formal diagrams, UI screenshots, title cards, dense PPT-like infographics, or copied prior route compositions.

Cai Xukun route block: realistic-person output, realistic-person portrait output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, copied composition, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion all fail the route.
```

## Output Reminder

Accepted Cai Xukun images are saved under `assets/<article-slug>-caixukun/`. The delivery report states selected visual IP, image count, purpose per image, saved path, source authority note, uploaded-image identity status, public-figure likeness boundary status, source-image context status, route isolation status, public sample review boundary when relevant, and stability notes.
