# OpenClaw QA Checklist

Use this gate before delivering, regenerating, or editing an OpenClaw-route output.

Route id: `openclaw`.
Route status: `source-reviewed`.
Output path: `assets/<article-slug>-openclaw/`.
Source/license authority: `source.md`.
Uploaded-logo identity note: preserve the red logo-derived OpenClaw mascot with red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
Public rendered sample review boundary through `RELEASE_CHECKLIST.md`.
Save accepted OpenClaw output under `assets/<article-slug>-openclaw/` with an ordered English slug filename such as `01-topic-name.png`.

OpenClaw QA source-reviewed gate.
OpenClaw QA uploaded-logo identity gate.
OpenClaw QA source/license note gate.
OpenClaw QA article-metaphor gate.
OpenClaw QA route isolation gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses clean sparse hand-drawn style on a clean white or near-white background with generous whitespace.
- Uploaded-logo identity is clear through red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- OpenClaw performs the active cognitive participation. The visual metaphor depends on OpenClaw inspecting, gripping, sorting, bridging, tuning, stamping, carrying, mapping, connecting, shielding, comparing, marking, untangling, weighing, guiding, assembling, or repairing the concept.
- The scene is an original article metaphor created for the current article.
- Supporting objects are article metaphors such as maps, bridges, knots, compasses, stepping stones, hooks, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines.
- Visible labels are sparse, readable, short, and copied exactly in the user's requested language.
- Source/license boundary is preserved through `source.md`, `source-reviewed`, `MIT License`, `Copyright (c) 2026 OpenClaw Foundation`, and uploaded-logo authority.
- Route isolation is preserved for OpenClaw, and Xiaohei, Littlebox, Tom, Ferris, and Seal identities stay outside the OpenClaw route.
- Delivery path uses `assets/<article-slug>-openclaw/`.

## Uploaded-Logo Identity Checks

Reject or repair any output with:

- generic red mascot drift
- missing claws
- missing antennae
- missing cyan pupils
- product-poster drift
- passive placement
- excessive text
- route leakage
- copied composition
- missing red round body
- missing black eyes
- missing short legs
- generic robot drift
- missing uploaded-logo identity note
- missing output path
- missing source/license note

OpenClaw QA generic red mascot drift failure: OpenClaw becomes a generic red character, robot, plush toy, generic mascot, logo blob, or vague red silhouette.

OpenClaw QA passive placement failure: OpenClaw stands beside the idea while props, arrows, labels, or supporting objects carry the meaning.

OpenClaw QA route leakage failure: active prompt, edit, QA, or delivery wording mixes OpenClaw with Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, Seal hoodie identity, public approval claims, or cross-route vocabulary.

OpenClaw QA product-poster failure: the image becomes brand advertising, a product poster, a launch graphic, a logo showcase, a UI promotion, or a repository banner instead of an article metaphor.

## Failure Signals

Regenerate or edit when:

- OpenClaw is passive, removable, tiny, decorative, or only reacting.
- OpenClaw identity reads as a generic red mascot, robot, blob, logo icon, different mascot, or over-rendered toy.
- The image misses the red round body, side claw-like arms, two antennae, black eyes, cyan pupils, or short legs.
- The image has product-poster drift, launch-poster rendering, brand-ad rendering, source-logo showcase rendering, or generic mascot rendering.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding OpenClaw's face, antennae, side claw-like arms, cyan pupils, or short legs.
- The image becomes a formal diagram, dense PPT-like infographic, UI screenshot, IDE or terminal scene, code screenshot, poster layout, top-left title artifact, dense text block, or clean digital label layout.
- The scene uses copied prior route compositions, previous pack examples, source image pose copying, or a reused route metaphor instead of a fresh article metaphor.
- The output lacks uploaded-logo identity note or path reminder for `assets/<article-slug>-openclaw/`.
- The output lacks active cognitive participation, sparse labels, original article metaphor quality, source/license boundary, or OpenClaw route isolation.
- The visual metaphor still works after removing OpenClaw from the scene.

## Iteration Moves

- Stronger OpenClaw Participation: use `### Stronger OpenClaw Participation` from `prompt-template.md`; keep the same core idea and make OpenClaw perform the central cognitive action.
- Uploaded-Logo Identity Repair: use `### Uploaded-Logo Identity Repair`; preserve composition and labels while restoring red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Title Removal: use `### Title Removal`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use `### Text Reduction`; keep only 2-6 short visible labels copied exactly in the user's requested language.
- Route leakage repair: use `### Route Leakage Repair`; restore `source-reviewed`, restore the `source.md` pointer, keep OpenClaw rules route-local, use article metaphors, and remove Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, Seal hoodie identity, public approval claims, and cross-route vocabulary.
- Unaffected-content preservation: use `### Unaffected-Content Preservation`; name the exact failure being repaired and preserve all successful content outside that failure.
- Article-metaphor repair: keep the same core idea, invent a new physical metaphor, change supporting objects, preserve the working labels, aspect ratio, sparse line style, and successful article meaning.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from OpenClaw's face, antennae, side claw-like arms, cyan pupils, and short legs.

OpenClaw QA unaffected-content preservation gate: edit only the named failure and preserve successful OpenClaw action, uploaded-logo identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Delivery Judgment

Accepted OpenClaw images keep OpenClaw as the action subject, preserve uploaded-logo identity markers, preserve source/license boundary, preserve route isolation, explain one article idea through an original article metaphor, use sparse labels copied exactly in the user's requested language, point source/license-sensitive use to `source.md`, report uploaded-logo identity status, and report the saved output path under `assets/<article-slug>-openclaw/`.

OpenClaw route block: generic red mascot drift, missing claws, missing antennae, missing cyan pupils, product-poster drift, passive placement, excessive text, route leakage, and copied composition all fail the route.
