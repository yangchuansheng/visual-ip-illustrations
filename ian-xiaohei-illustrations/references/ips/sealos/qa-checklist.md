# Sealos Seal QA Checklist

Use this gate before delivering, regenerating, or editing a Sealos-route output.

Route id: `sealos`.
Route status: `brand-owned`.
Output path: `assets/<article-slug>-sealos/`.
Brand/canonical-image authority: `source.md`.
Canonical image status: `uploaded-image-canonical`.
Drift boundary: `uploaded-image-locked`.
Public rendered Sealos samples remain gated by `RELEASE_CHECKLIST.md`.
Sealos route block: generic seal drift, abstract logo creature drift, missing cap, missing hoodie, missing Sealos marks, changed body color, passive mascot placement, over-detailed 3D toy drift, excessive text, and route leakage all fail the route.
Save accepted Sealos output under `assets/<article-slug>-sealos/` with an ordered English slug filename such as `01-topic-name.png`.
Logo overlay authority: `logo-overlay.md`.
Logo overlay markers: uploaded Sealos logo source image overlay, overlay-only logo finalization, no prompt-rendered logo accepted, blank cap and chest logo patches before overlay, uploaded Sealos logo source shape mask, uploaded Sealos logo source alpha mask, exact source shape with color remap allowed, uniform scale, placement, and color remap only, and source asset path or attachment id.

Sealos QA brand/canonical-image gate.
Sealos QA uploaded-image identity gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses clean sparse hand-drawn style on a clean white or near-white background with generous whitespace.
- Sealos Seal recognizability is clear through white rounded seal body, navy cap, deep-blue hoodie, official uploaded Sealos logo shape on cap and chest after overlay, uploaded Sealos logo source image overlay on cap and chest, uploaded Sealos logo source shape mask, blue curled wave / seal-tail mark above a rounded cloud-tray base, source-mask reproduction of the uploaded Sealos logo image, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Cap and chest logo marks use the uploaded Sealos logo source shape mask and uploaded Sealos logo source alpha mask with uniform scale, placement, and color remap only.
- Delivery records source asset path or attachment id for the uploaded Sealos logo source image overlay.
- Sealos Seal performs the active Mascot action. The visual metaphor depends on Sealos Seal deploying, launching, connecting, debugging, routing, lifting, inspecting, repairing, shielding, bridging, tuning, rolling back, stamping, sorting, assembling, or guiding the concept.
- The scene is an original article metaphor created for the current article.
- Brand/canonical-image note is present in planning, generation, edit, and delivery context.
- Visible labels are sparse labels, readable, short, and copied exactly in the user's language.
- The composition preserves route isolation for Sealos and keeps Xiaohei, Littlebox, Tom, and Ferris identities outside the Sealos route.
- Delivery path uses `assets/<article-slug>-sealos/`.

## Uploaded-Image Identity Checks

Reject or repair any output with:

- generic seal drift
- abstract logo creature drift
- missing cap
- missing hoodie
- missing Sealos marks
- missing official uploaded Sealos logo shape on cap or chest
- missing uploaded Sealos logo source image overlay
- missing uploaded Sealos logo source shape mask
- missing uploaded Sealos logo source alpha mask
- prompt-rendered logo accepted
- generated logo approximation
- generated logo tracing
- redrawn logo
- alternate wave mark
- simplified logo mark
- changed logo silhouette
- changed logo proportions
- changed logo curl
- changed top fin/notch
- changed rounded cloud-tray base
- changed body color
- passive mascot placement
- over-detailed 3D toy drift
- excessive text
- route leakage
- missing side-rear tail
- missing glossy dark eyes
- missing black nose
- missing whisker dots
- missing small smile
- missing short rounded flippers
- missing compact legs
- prior exploration variant drift
- bald/plain-head seal drift
- missing Brand/canonical-image note
- missing output path
- missing source asset path or attachment id

Sealos QA generic seal drift failure: Sealos Seal becomes a route-neutral seal, animal mascot, plush toy, generic white mascot, or vague seal silhouette.

Sealos QA abstract logo creature drift failure: the image turns the mascot into an abstract Sealos-logo creature, blue-gradient cloud/seal exploration, or non-uploaded prior exploration variant.

Sealos QA passive mascot placement failure: Sealos Seal stands beside the idea while props, arrows, labels, cloud objects, or infrastructure objects carry the meaning.

Sealos QA missing Sealos marks failure: the cap mark, chest mark, or both route identity marks disappear, become unreadable, become unrelated decoration, or miss uploaded Sealos logo source image overlay.

Sealos QA official uploaded Sealos logo shape failure: the cap logo or chest logo loses the uploaded logo geometry: blue curled wave / seal-tail mark above a rounded cloud-tray base.

Sealos QA exact uploaded logo match failure: the cap logo or chest logo diverges from the uploaded Sealos logo source shape. Fail any prompt-rendered logo accepted, generated logo approximation, generated logo tracing, redrawn logo, alternate wave mark, simplified logo mark, changed outline, changed negative space, changed proportions, changed curl, changed top fin/notch, changed rounded cloud-tray base, missing uploaded Sealos logo source shape mask, missing uploaded Sealos logo source alpha mask, or missing source asset path or attachment id. Color remap allowed after source shape mask lock.

Sealos QA logo overlay failure: the final image lacks uploaded Sealos logo source image overlay, accepts a prompt-rendered logo, skips blank cap and chest logo patches before overlay, changes the uploaded source shape mask beyond uniform scale, placement, and color remap only, or omits source asset path or attachment id.

Sealos QA route leakage failure: planning, prompt, image text, or delivery notes drop `brand-owned`, omit `source.md`, imply broad public sample approval, mix Sealos rules into Xiaohei/Littlebox/Tom/Ferris routes, or import another route identity into Sealos.

## Failure Signals

Regenerate or edit when:

- Sealos Seal is passive, removable, tiny, decorative, or only reacting.
- Sealos Seal identity reads as a generic seal, abstract logo creature, plain-head seal, prior exploration variant, route-neutral mascot, or different mascot.
- The image misses the cap, hoodie, official uploaded Sealos logo shape after overlay, uploaded Sealos logo source image overlay, uploaded Sealos logo source shape mask, white body color, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, or side-rear white tail.
- The image has over-detailed 3D toy drift, character-sheet rendering, plush-toy rendering, polished vector mascot rendering, or generic mascot rendering.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding the mascot's face, cap, chest logo, hoodie, flippers, or tail.
- The image becomes formal diagrams, dense PPT-like infographics, UI screenshots, IDE or terminal scenes, code screenshots, poster layouts, top-left title artifacts, dense text blocks, or clean digital labels.
- The scene uses copied prior route compositions, previous pack examples, source image pose copying, or a reused route metaphor instead of a fresh article metaphor.
- The output lacks Brand/canonical-image note or path reminder for `assets/<article-slug>-sealos/`.
- The output lacks active Mascot action or route isolation.
- The visual metaphor still works after removing Sealos Seal from the scene.

## Iteration Moves

- Stronger Mascot Participation: use `### Stronger Mascot Participation` from `prompt-template.md`; keep the same core idea and make Sealos Seal perform the central cognitive action.
- Uploaded-Image Identity Repair: use `### Uploaded-Image Identity Repair`; preserve composition and labels while restoring white rounded body, navy cap, deep-blue hoodie, uploaded Sealos logo source image overlay on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Logo Hoodie Cap Repair: use `### Logo Hoodie Cap Repair`; replace cap and chest marks through uploaded Sealos logo source image overlay, use the uploaded Sealos logo source shape mask and uploaded Sealos logo source alpha mask, allow uniform scale, placement, and color remap only, then preserve navy cap shape, deep-blue hoodie, and brand-color consistency while preserving successful mascot action, composition, labels, aspect ratio, and article metaphor.
- Title Removal: use `### Title Removal`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use `### Text Reduction`; keep only 2-6 short visible labels copied exactly in the user's language.
- Preserve Unaffected Content: use `### Preserve Unaffected Content`; name the exact failure being repaired and preserve all successful content outside that failure.
- Route leakage repair: restore `brand-owned`, restore the `source.md` pointer, keep Sealos rules route-local, and remove Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, public approval claims, and cross-route vocabulary.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from the mascot's face, cap, chest logo, hoodie, flippers, and tail.

Sealos QA unaffected-content preservation gate: edit only the named failure and preserve successful Mascot action, uploaded Sealos Seal identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Delivery Judgment

Accepted Sealos images keep Sealos Seal as the action subject, preserve uploaded-image identity markers, use uploaded Sealos logo source image overlay with overlay-only logo finalization, preserve uploaded Sealos logo source shape mask with color remap allowed, explain one article idea through an original article metaphor, carry the Brand/canonical-image note, point uploaded-image-sensitive use to `source.md`, preserve route isolation, record source asset path or attachment id, and report the saved output path under `assets/<article-slug>-sealos/`.
