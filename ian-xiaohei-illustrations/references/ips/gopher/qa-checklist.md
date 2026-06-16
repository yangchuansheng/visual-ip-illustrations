# Go Gopher QA Checklist

Use this gate before delivering, regenerating, or editing a Go Gopher-route output.

Route id: `gopher`.
Display name: Go Gopher.
Route status: `source-reviewed`.
Output path: `assets/<article-slug>-gopher/`.
Source/license authority: `source.md`.
Local visual authority: root `gopher.png`.
Go Gopher identity note: preserve the source-reviewed mascot from root `gopher.png` with blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
Source/license note: Go Gopher source context is recorded in `source.md` with Renee French attribution and Creative Commons Attribution 4.0 boundary.
Public sample review boundary: public generated Go Gopher samples require release review before appearing in public examples or release surfaces.
Go Gopher route block: generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, and copied composition all fail the route.
Save accepted Go Gopher output under `assets/<article-slug>-gopher/` with an ordered English slug filename such as `01-topic-name.png`.

Go Gopher QA source-reviewed gate.
Go Gopher QA `gopher.png` identity gate.
Go Gopher QA source/license note gate.
Go Gopher QA article-metaphor gate.
Go Gopher QA route isolation gate.
Go Gopher QA public sample review boundary gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses sparse hand-drawn style on a white or very light background with generous whitespace.
- Go Gopher identity is clear through blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Go Gopher performs active cognitive participation. The visual metaphor depends on Go Gopher inspecting, pointing, carrying, sorting, bridging, repairing, guiding, stamping, marking, tuning, shielding, weighing, connecting, untangling, mapping, comparing, lifting, assembling, or routing the concept.
- The scene is an original article metaphor created for the current article.
- Supporting objects are article metaphors such as maps, bridges, knots, compasses, stepping stones, hooks, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines.
- Visible labels are sparse, readable, short, and copied exactly in the user's requested language.
- Source/license boundary is preserved through `source.md`, `source-reviewed`, Renee French attribution, Creative Commons Attribution 4.0 boundary, root `gopher.png` local visual authority, and public sample review boundary.
- Route isolation is preserved for Go Gopher, and Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw identities stay outside the Go Gopher route.
- Delivery path uses `assets/<article-slug>-gopher/`.

## Identity Checks

Reject or repair any output with:

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
- missing blue rounded upright body
- missing rounded head/body silhouette
- missing black nose
- missing compact limbs
- missing friendly standing posture
- generic animal mascot drift
- polished mascot-poster rendering
- missing `gopher.png` identity note
- missing output path
- missing source/license note

Go Gopher QA generic blue mascot drift failure: Go Gopher becomes a generic blue character, animal mascot, plush toy, generic mascot, logo blob, or vague blue silhouette.

Go Gopher QA realistic animal drift failure: Go Gopher becomes a detailed animal, rodent, groundhog, beaver, realistic gopher, fur-rendered mascot, or naturalistic creature instead of the simplified article-illustration route character.

Go Gopher QA passive placement failure: Go Gopher stands beside the idea while props, arrows, labels, or supporting objects carry the meaning.

Go Gopher QA Go logo confusion failure: the image uses the Go logo as the route identity, turns the scene into a language logo graphic, or makes logo-forward composition replace the Go Gopher character.

Go Gopher QA official endorsement claims failure: active prompt, edit, QA, delivery, or visible text claims official Go project affiliation, approval, sponsorship, endorsement, certified status, or public sample approval.

Go Gopher QA route leakage failure: active prompt, edit, QA, or delivery wording mixes Go Gopher with Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, Seal hoodie identity, OpenClaw red logo-mascot identity, public approval claims, or cross-route vocabulary.

## Failure Signals

Regenerate or edit when:

- Go Gopher is passive, removable, tiny, decorative, or only reacting.
- Go Gopher identity reads as a generic blue mascot, realistic animal, route-neutral mascot, different mascot, or over-rendered toy.
- The image misses the blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, or white sticker-like border.
- The image has Go logo confusion, language-poster rendering, brand-ad rendering, source-logo showcase rendering, official endorsement claims, or generic programming mascot rendering.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding Go Gopher's ears, large eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, outline, or sticker border.
- The image becomes a formal diagram, dense PPT-like infographic, UI screenshot, IDE or terminal scene, code screenshot, poster layout, top-left title artifact, dense text block, or clean digital label layout.
- The scene uses copied prior route compositions, previous pack examples, source image pose copying, or a reused route metaphor instead of a fresh article metaphor.
- The output lacks `gopher.png` identity note or path reminder for `assets/<article-slug>-gopher/`.
- The output lacks active cognitive participation, sparse labels, original article metaphor quality, source/license boundary, or Go Gopher route isolation.
- The visual metaphor still works after removing Go Gopher from the scene.
- Public sample copy claims publication approval, release approval, or public example availability before release review.

## Iteration Moves

- Stronger Go Gopher Participation: use `### Stronger Go Gopher Participation` from `prompt-template.md`; keep the same core idea and make Go Gopher perform the central cognitive action.
- `gopher.png` Identity Repair: use `### gopher.png Identity Repair`; preserve composition and labels while restoring blue rounded upright body, rounded head/body silhouette, small rounded ears, large simple eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, friendly standing posture, black outline, and white sticker-like border.
- Title Removal: use `### Title Removal`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use `### Text Reduction`; keep only 2-6 short visible labels copied exactly in the user's requested language.
- Route leakage repair: use `### Route Leakage Repair`; restore `source-reviewed`, restore the `source.md` pointer, keep Go Gopher rules route-local, use article metaphors, and remove Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, Seal hoodie identity, OpenClaw red logo-mascot identity, Go logo identity, official Go endorsement cues, public approval claims, and cross-route vocabulary.
- Unaffected-content preservation: use `### Unaffected-Content Preservation`; name the exact failure being repaired and preserve all successful content outside that failure.
- Article-metaphor repair: keep the same core idea, invent a new physical metaphor, change supporting objects, preserve the working labels, aspect ratio, sparse line style, and successful article meaning.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from Go Gopher's ears, large eyes, black nose, buck teeth, beige muzzle and paws, compact limbs, outline, and sticker border.
- Go logo confusion repair: remove Go logo identity and logo-forward layout while preserving Go Gopher character identity, article metaphor, visible labels, and source/license note.
- Public sample boundary repair: remove public sample approval or gallery claims and keep the output framed as internal review until release review approves public use.

Go Gopher QA unaffected-content preservation gate: edit only the named failure and preserve successful Go Gopher action, root `gopher.png` identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Route Leakage Repair

Route leakage repair restores Go Gopher as the only selected visual IP for the current image. Keep `source-reviewed`, `source.md`, root `gopher.png`, Renee French attribution, Creative Commons Attribution 4.0 boundary, public sample review boundary, and `assets/<article-slug>-gopher/` attached to the Go Gopher route.

Remove Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go logo identity, official Go endorsement cues, public approval claims, public sample approval claims, and cross-route vocabulary. Preserve successful Go Gopher content, successful article metaphor, correct labels, line style, aspect ratio, and unaffected supporting objects.

## Delivery Judgment

Accepted Go Gopher images keep Go Gopher as the action subject, preserve root `gopher.png` identity markers, preserve source/license boundary, preserve route isolation, explain one article idea through an original article metaphor, use sparse labels copied exactly in the user's requested language, point source/license-sensitive use to `source.md`, report `source-reviewed` status, report public sample review boundary when relevant, and report the saved output path under `assets/<article-slug>-gopher/`.

Public sample review boundary: public generated Go Gopher samples require release review before appearing in `examples/images/`, `ian-xiaohei-illustrations/assets/examples/`, README previews, release galleries, agent metadata previews, or public release surfaces.

Go Gopher route block: generic blue mascot drift, realistic animal drift, missing ears, missing large simple eyes, missing buck teeth, missing beige muzzle/paws, missing black outline, missing white sticker-like border, Go logo confusion, official endorsement claims, passive placement, route leakage, excessive text, and copied composition all fail the route.
