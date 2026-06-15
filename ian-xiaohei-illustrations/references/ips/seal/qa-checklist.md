# Seal QA Checklist

Use this gate before delivering, regenerating, or editing a Seal-route output.

Route id: `seal`.
Route status: `active`.
Output path: `assets/<article-slug>-seal/`.
Source-history authority: `source.md`.
Hoodie seal identity note: preserve the product-neutral Seal character with white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.
Canonical image status: `uploaded-image-canonical`.
Drift boundary: `uploaded-image-locked`.
Save accepted Seal output under `assets/<article-slug>-seal/` with an ordered English slug filename such as `01-topic-name.png`.

Seal QA hoodie identity gate.
Seal QA logo-free gate.
Seal QA product-neutral route isolation gate.
Seal QA article-metaphor gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses clean sparse hand-drawn style on a clean white or near-white background with generous whitespace.
- Hoodie identity is clear through white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Logo-free output is clear: cap, hoodie chest, mascot body, props, and scene contain no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.
- Seal performs the active cognitive participation. The visual metaphor depends on Seal inspecting, repairing, shielding, bridging, tuning, rolling back, stamping, sorting, assembling, guiding, lifting, connecting, untangling, weighing, mapping, carrying, comparing, or marking the concept.
- The scene is an original article metaphor created for the current article.
- Supporting objects are product-neutral article metaphors such as maps, bridges, knots, compasses, stepping stones, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines.
- Visible labels are sparse labels, readable, short, and copied exactly in the user's requested language.
- Product-neutral route isolation is preserved for Seal, and Xiaohei, Littlebox, Tom, and Ferris identities stay outside the Seal route.
- Delivery path uses `assets/<article-slug>-seal/`.

## Hoodie Identity Checks

Reject or repair any output with:

- generic seal drift
- missing cap
- missing hoodie
- logo or mark artifacts
- changed body color
- passive placement
- over-detailed toy drift
- excessive text
- route leakage
- copied composition
- missing side-rear tail
- missing glossy dark eyes
- missing black nose
- missing whisker dots
- missing small smile
- missing short rounded flippers
- missing compact legs
- bald/plain-head seal drift
- missing hoodie seal identity note
- missing output path
- missing logo-free delivery note

Seal QA generic seal drift failure: Seal becomes a route-neutral seal, animal mascot, plush toy, generic white mascot, or vague seal silhouette.

Seal QA passive placement failure: Seal stands beside the idea while props, arrows, labels, or supporting objects carry the meaning.

Seal QA logo-free failure: the image includes any cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, emblem, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate mark, or simplified mark.

Seal QA route leakage failure: active prompt, edit, QA, or delivery wording carries product or brand context into the Seal route, drops `active`, omits `source.md`, mixes Seal rules into Xiaohei/Littlebox/Tom/Ferris routes, or imports another route identity into Seal.

## Failure Signals

Regenerate or edit when:

- Seal is passive, removable, tiny, decorative, or only reacting.
- Seal identity reads as a generic seal, plain-head seal, route-neutral mascot, different mascot, or over-rendered toy.
- The image misses the cap, hoodie, white body color, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, or side-rear white tail.
- The image includes cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, emblem, text badge, generated logo approximation, generated logo tracing, redrawn logo, alternate mark, or simplified mark.
- The image has over-detailed toy drift, character-sheet rendering, plush-toy rendering, polished vector mascot rendering, or generic mascot rendering.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding Seal's face, cap, plain hoodie chest, flippers, or tail.
- The image becomes a formal diagram, dense PPT-like infographic, UI screenshot, IDE or terminal scene, code screenshot, poster layout, top-left title artifact, dense text block, or clean digital label layout.
- The scene uses copied prior route compositions, previous pack examples, source image pose copying, or a reused route metaphor instead of a fresh article metaphor.
- The output lacks hoodie seal identity note or path reminder for `assets/<article-slug>-seal/`.
- The output lacks active cognitive participation, sparse labels, original article metaphor quality, or product-neutral route isolation.
- The visual metaphor still works after removing Seal from the scene.

## Iteration Moves

- Stronger Seal Participation: use `### Stronger Seal Participation` from `prompt-template.md`; keep the same core idea and make Seal perform the central cognitive action.
- Hoodie Seal Identity Repair: use `### Hoodie Seal Identity Repair`; preserve composition and labels while restoring white rounded body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Logo-Free Repair: use `### Logo-Free Output Repair`; remove cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, emblem, and text badge while preserving successful Seal action, composition, labels, aspect ratio, and article metaphor.
- Title Removal: use `### Title Removal`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use `### Text Reduction`; keep only 2-6 short visible labels copied exactly in the user's requested language.
- Route leakage repair: use `### Route Leakage Repair`; restore `active`, restore the `source.md` pointer, keep Seal rules route-local, use product-neutral article metaphors, and remove Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, public approval claims, and cross-route vocabulary.
- Unaffected-content preservation: use `### Unaffected-Content Preservation`; name the exact failure being repaired and preserve all successful content outside that failure.
- Article-metaphor repair: keep the same core idea, invent a new product-neutral physical metaphor, change supporting objects, preserve the working labels, aspect ratio, sparse line style, and successful article meaning.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from Seal's face, cap, plain hoodie chest, flippers, and tail.

Seal QA unaffected-content preservation gate: edit only the named failure and preserve successful Seal action, hoodie Seal identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Delivery Judgment

Accepted Seal images keep Seal as the action subject, preserve hoodie identity markers, keep cap, hoodie chest, mascot body, props, and scene logo-free, preserve product-neutral route isolation, explain one article idea through an original article metaphor, use sparse labels copied exactly in the user's requested language, point source-history-sensitive use to `source.md`, report no-logo delivery status, and report the saved output path under `assets/<article-slug>-seal/`.
