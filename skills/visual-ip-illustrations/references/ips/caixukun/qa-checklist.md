# Cai Xukun QA Checklist

Use this gate before delivering, regenerating, or editing a Cai Xukun-route output.

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

Cai Xukun QA gated-public-figure gate.
Cai Xukun QA uploaded-image identity gate.
Cai Xukun QA source authority note gate.
Cai Xukun QA public-figure likeness boundary gate.
Cai Xukun QA article-metaphor gate.
Cai Xukun QA route isolation gate.
Cai Xukun QA public sample review boundary gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses sparse hand-drawn style on a white or very light background with generous whitespace.
- Cai Xukun identity is clear through yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
- Cai Xukun performs active cognitive participation. The visual metaphor depends on Cai Xukun inspecting, pointing, carrying, sorting, bridging, repairing, guiding, stamping, marking, tuning, shielding, weighing, connecting, untangling, mapping, comparing, lifting, assembling, or routing the concept.
- The scene is an original article metaphor created for the current article.
- Supporting objects are article metaphors such as maps, bridges, knots, compasses, stepping stones, hooks, levers, shelves, signposts, lamps, shields, stamps, keys, trails, gates, scales, buckets, envelopes, threads, lenses, or small hand-built machines.
- Visible labels are sparse, readable, short, and written in the user's requested language after official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom-promotion claims are removed or rewritten into neutral article-concept labels.
- Source authority is preserved through `references/ips/caixukun/source.md`, `gated-public-figure`, route-local uploaded visual authority, uploaded reference image A, uploaded reference image B, source-image context, and public sample review boundary.
- Public-figure likeness boundary is preserved: realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion fail the route.
- Route isolation is preserved for Cai Xukun, and Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and root legacy route identities stay outside the Cai Xukun route.
- Green reference background is source-image context; generated article illustrations keep the skill's sparse 16:9 white-background style.
- Public generated Cai Xukun samples require release review before appearing in public examples or release surfaces.
- Delivery path uses `assets/<article-slug>-caixukun/`.

## Identity Checks

Reject or repair any output with:

- realistic-person output
- realistic-person portrait output
- generic yellow duck drift
- missing idol-hair
- missing outfit markers
- celebrity endorsement claims
- passive placement
- route leakage
- excessive text
- green-background carryover
- copied composition
- official endorsement
- affiliation
- impersonation
- campaign
- celebrity advertising
- fandom promotion
- missing yellow duck-like rounded mascot body
- missing silver layered idol hair
- missing oversized white eyes
- missing red cheek circles
- missing orange beak
- missing black high-collar top
- missing white straps
- missing white lower outfit
- missing compact black or gray boots
- missing uploaded-image identity note
- missing output path
- missing source authority note

Cai Xukun QA realistic-person output failure: Cai Xukun becomes a realistic person, portrait subject, human celebrity likeness, photo-real person, public-figure portrait, or realistic idol illustration instead of the uploaded-image stylized mascot article route.

Cai Xukun QA generic yellow duck drift failure: Cai Xukun becomes a generic yellow duck, simple duck mascot, plush duck, vague yellow mascot, or unrelated yellow character while losing silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, or compact black or gray boots.

Cai Xukun QA passive placement failure: Cai Xukun stands beside the idea while props, arrows, labels, or supporting objects carry the meaning.

Cai Xukun QA route leakage failure: active prompt, edit, QA, or delivery wording mixes Cai Xukun with Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, Ferris crab identity, Seal hoodie identity, OpenClaw red logo identity, Go Gopher blue mascot identity, public approval claims, or cross-route vocabulary.

Cai Xukun QA green-background carryover failure: the output copies the uploaded reference background, green backdrop, source-image setting, or source-image pose environment instead of using sparse 16:9 white-background article style.

Cai Xukun QA public-figure likeness failure: the output implies realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, or fandom promotion.

## Failure Signals

Regenerate or edit when:

- Cai Xukun is passive, removable, tiny, decorative, or only reacting.
- Cai Xukun identity reads as generic yellow duck drift, different mascot, plush toy, generic mascot, or over-rendered toy.
- The image misses yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, or compact black or gray boots.
- The image drifts into realistic-person output, realistic-person portrait output, celebrity endorsement claims, official endorsement, affiliation, impersonation, campaign, celebrity advertising, fandom promotion, fan-poster rendering, or public-figure portrait rendering.
- The image has green-background carryover, source-background tracing, source-pose tracing, or public-figure reference-poster framing.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding Cai Xukun's silver hair, oversized white eyes, red cheek circles, orange beak, outfit straps, or compact boots.
- The image becomes a formal diagram, dense PPT-like infographic, UI screenshot, IDE or terminal scene, code screenshot, poster layout, top-left title artifact, dense text block, or clean digital label layout.
- The scene uses copied composition, copied prior route compositions, previous pack examples, source image pose copying, or a reused route metaphor instead of a fresh article metaphor.
- The output lacks source authority note, public sample review boundary, or path reminder for `assets/<article-slug>-caixukun/`.
- The output lacks active cognitive participation, sparse labels, original article metaphor quality, public-figure likeness boundary, source-image context boundary, or Cai Xukun route isolation.
- The visual metaphor still works after removing Cai Xukun from the scene.

## Iteration Moves

- Stronger Cai Xukun Participation: use `### Stronger Cai Xukun Participation` from `prompt-template.md`; keep the same core idea and make Cai Xukun perform the central cognitive action.
- Uploaded-Image Identity Repair: use `### Uploaded-Image Identity Repair`; preserve composition and labels while restoring yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
- Title Removal: use `### Title Removal`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use `### Text Reduction`; keep only 2-6 short visible labels in the user's requested language after public-figure claim sanitization.
- Public-Figure Likeness Boundary Repair: use `### Public-Figure Likeness Boundary Repair`; restore stylized mascot article-illustration framing and remove realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion.
- Route Leakage Repair: use `### Route Leakage Repair`; restore `gated-public-figure`, restore the `source.md` pointer, keep Cai Xukun rules route-local, use article metaphors, and remove Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, public approval claims, and cross-route vocabulary.
- Green-Background Carryover Repair: use `### Green-Background Carryover Repair`; restore sparse 16:9 white-background article style because green reference background is source-image context.
- Unaffected-Content Preservation: use `### Unaffected-Content Preservation`; name the exact failure being repaired and preserve all successful content outside that failure.
- Article-metaphor repair: keep the same core idea, invent a new physical metaphor, change supporting objects, preserve the working labels, aspect ratio, sparse line style, and successful article meaning.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from Cai Xukun's hair, eyes, cheeks, beak, outfit, and boots.

Cai Xukun QA unaffected-content preservation gate: edit only the named failure and preserve successful Cai Xukun action, uploaded-image identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Delivery Judgment

Accepted Cai Xukun images keep Cai Xukun as the action subject, preserve uploaded-image identity markers, preserve source authority, preserve public-figure likeness boundary, preserve source-image context boundary, preserve route isolation, explain one article idea through an original article metaphor, use sparse labels in the user's requested language after public-figure claim sanitization, point source-sensitive use to `source.md`, report uploaded-image identity status, report public sample review boundary when relevant, and report the saved output path under `assets/<article-slug>-caixukun/`.

Cai Xukun route block: realistic-person output, realistic-person portrait output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, copied composition, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion all fail the route.
