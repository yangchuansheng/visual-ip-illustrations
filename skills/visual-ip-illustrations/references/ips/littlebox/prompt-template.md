# Littlebox Prompt Template

Use this file after selecting the `littlebox` route. Planning and delivery notes follow the user's language. Image-generation prompts stay English, with visible labels quoted exactly in the user's language.

Output path: `assets/<article-slug>-littlebox/`.

## Planning Output Format

Use this format for Littlebox shot lists:

```text
1. Placement: [where it appears]
   Core idea: [one sentence]
   Littlebox state: closed
   Visual metaphor: [physical box action]
   Background: [pale sky blue #E3F2FD / pale lavender #E6E6FA]
   Elements: [3-5 objects]
   Labels: [short visible labels in the user's language]
```

For multi-image sets, assign `#E3F2FD` and `#E6E6FA` during planning and keep counts balanced.

## Single Image Generation

Replace bracketed fields. Keep the prompt specific and compact.

```text
Generate one standalone 16:9 horizontal article illustration.

Scene: [core idea in one sentence].

Visual language: minimalist hand-drawn illustration on a flat [pale sky-blue background #E3F2FD / pale lavender background #E6E6FA]. Bold marker illustration, chunky brush-pen style, fat-tipped black marker lines, very thick black outlines, dry brush texture with tiny gaps in ink coverage, organic rough edges, natural line weight variation, imperfect boxes and wobbly folds, warm handmade feel. Keep the set style consistent: same stroke thickness, ink roughness, handwritten label feel, and Littlebox proportions. No gradients, no shadows, no paper texture, no polished vector style, no thin pen lines, no ruler-straight geometry, no auto-traced edges, no thresholded or posterized bitmap look.

Recurring IP: Littlebox, a compact squat paper-box character in front-left three-quarter view. The body is white or near-white negative space, not tan cardboard, kraft brown, beige, or shaded material. The front panel is the largest visible face; one narrower side panel is visible; the closed top lid is visible. Two calm black dot eyes sit centered on the upper-middle front panel. Tiny thin legs attach under the front panel. No mouth, smile, eyebrows, blush, costume, or accessories.

Littlebox state: closed. The top flaps meet cleanly along one central front-to-back seam. Littlebox has exactly one narrow amber seam tape #F59E0B aligned with that central closed-lid seam. The tape has a small front tab hanging over the top front lip with an irregular sawtooth / jagged torn cut, usually 2-3 little teeth. Preserve the jagged front tab as the main tape cue.

Action: Littlebox must perform the core conceptual action while staying closed. Use at most two side-seam twig arms total: one left side-seam twig arm and one right side-seam twig arm. Arms are thin black curved branch-like strokes with no hands, gloves, fingers, or sleeves. Arms never emerge from the front face, lower body, lid, eyes, or props. Route extra targets through external trays, slots, tags, falling slips, paths, stacks, or parcels instead of extra limbs.

Visual metaphor: [physical box action].

Composition: [composition family]. Elements are distributed across the full 16:9 canvas with horizontal and vertical variation. Main Littlebox subject takes about 35%-55% of the canvas while staying compact and squat. Use separate props for compression, routing, bridging, or output packages. Flow paths and arrows are amber, curved, and lighter than Littlebox's black outline. [Describe exact positions and actions for Littlebox and 2-4 supporting elements].

Color: black #000000 for main strokes, Littlebox outline, objects, and labels; amber #F59E0B for the single seam tape and separate flow/motion only when away from the tape; coral #E85D75 only for warning, stamp, error, result, or final emphasis. Use accents sparingly.

Visible handwritten labels, copied exactly in the user's language: [quoted labels]. Keep labels short, legible, separated, and drawn as rough handwritten black marker strokes. Copy non-Latin scripts exactly and do not translate them. Labels must match the illustration's hand-drawn linework.

Constraints: one image explains one core idea. Generous whitespace, clean sparse composition, strange but clear. Do not create a formal PPT diagram, logistics logo, cute mascot poster, realistic cardboard render, clean vector box icon, dense explainer, UI screenshot, top-left title, open box, raised flap, half-open lid, cutaway, visible interior, back-hinged lid, laptop/toolbox/chest/pizza-box lid, tray opening, bucket opening, mailbox lid, third arm, lower arm, tail-like helper line, clean digital font label, or stretched Littlebox body.
```

## Editing Prompts

### Make Littlebox Active

```text
Regenerate the image with the same core idea, selected background, palette, and sparse marker style, but make Littlebox perform the central conceptual action. Littlebox should physically collect, seal, sort, carry, spill, bridge, route, or transform the idea through side-seam twig arms and external props. Preserve the canonical closed Littlebox model: front-left three-quarter view, dot eyes on the front panel, tiny legs under the front panel, at most two side-seam twig arms, and exactly one amber seam tape with a jagged torn front tab.
```

### Fix Label Errors

```text
Edit the image to keep the illustration unchanged, but replace the visible handwritten labels with these exact short labels: [labels]. Preserve the same rough handwritten marker style, spacing, and language.
```

### Reduce Diagram Feeling

```text
Regenerate as a loose hand-drawn article illustration instead of a formal diagram. Remove grid-like alignment, excessive arrows, boxes-within-boxes, and title text. Keep one enlarged closed Littlebox action and only 2-4 supporting elements.
```
