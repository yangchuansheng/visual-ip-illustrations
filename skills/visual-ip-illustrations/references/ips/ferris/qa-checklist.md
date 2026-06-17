# Ferris QA Checklist

Use this gate before delivering, regenerating, or editing a Ferris-route output.

Ferris route status: `source-reviewed`.
Ferris output path: `assets/<article-slug>-ferris/`.
Ferris source/trademark authority: `source.md`.
Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route. Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
Public rendered Ferris samples remain gated by `RELEASE_CHECKLIST.md`.
Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route.
Save accepted Ferris output under `assets/<article-slug>-ferris/` with an ordered English slug filename such as `01-topic-name.png`.

Ferris QA source-reviewed gate.
Ferris QA source/trademark note gate.

## Pass Criteria

- Image is a 16:9 horizontal article illustration.
- Image explains one core idea.
- Image uses clean sparse hand-drawn style on a white or near-white background with generous whitespace.
- Ferris recognizability is clear through compact orange/rust-red crab body, broad crab shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and active body language.
- Ferris performs the active Ferris cognitive action. The visual metaphor depends on Ferris clamping, sorting, guarding, borrowing, returning, compiling, type-checking, stamping, carrying, bridging, untangling, locking, inspecting, rerouting, balancing, or releasing the concept.
- The scene is an original article metaphor created for the current article.
- Source/trademark note is present in planning, generation, edit, and delivery context.
- Visible labels are sparse labels, readable, short, and copied exactly in the user's language.
- The composition preserves route isolation for Ferris and keeps Xiaohei, Littlebox, and Tom identities outside the Ferris route.
- Delivery path uses `assets/<article-slug>-ferris/`.

## Source/Trademark Checks

Reject or repair any output with:

- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage
- Rust-logo-forward composition
- bundled Rust marks
- endorsement wording
- broad release language
- source asset pose copying
- public mascot asset-sheet resemblance
- official logo arrangements
- missing source/trademark note
- missing output path

Ferris QA generic-crab drift failure: Ferris becomes a route-neutral crab, seafood icon, beach crab, random red animal, decorative mascot, or vague crab silhouette.

Ferris QA passive Ferris placement failure: Ferris stands beside the idea while props, arrows, labels, or Rust-themed objects carry the meaning.

Ferris QA Rust-logo misuse failure: the image uses Rust logos, logo-forward layouts, bundled Rust marks, or official project marks as the primary visual carrier.

Ferris QA official-affiliation cues failure: the image implies official Rust project endorsement, approval, affiliation, or release status through badges, language, marks, or composition.

Ferris QA source-asset tracing failure: the image traces, recreates, pose-matches, or imitates rustacean.net source assets, public mascot asset sheets, official logo arrangements, or source-pose layouts.

Ferris QA route leakage failure: planning, prompt, image text, or delivery notes drop `source-reviewed`, omit `source.md`, imply broad release availability, mix Ferris rules into Xiaohei/Littlebox/Tom routes, or import another route identity into Ferris.

## Failure Signals

Regenerate or edit when:

- Ferris is passive, removable, tiny, decorative, or only reacting.
- Ferris identity reads as a generic crab, beach crab, seafood icon, route-neutral crab mascot, or random red animal.
- The image includes Rust-logo misuse, official-affiliation cues, endorsement wording, bundled Rust marks, Rust-logo-forward visuals, broad release language, official logo arrangements, or public mascot asset-sheet resemblance.
- The image has over-detailed mascot rendering that turns Ferris into a character-sheet study instead of a sparse article illustration.
- The image has excessive text, full-sentence annotations, bilingual clutter, clean digital typography, or labels crowding Ferris's eyes, claws, legs, or shell silhouette.
- The image becomes a formal diagram, formal PPT diagram, course slide, code screenshots, IDE/UI scenes, terminal scene, poster, or dense infographic.
- The scene uses source-asset tracing, source asset pose copying, copied prior composition, official Rust diagram layout, or a reused pack example instead of a fresh article metaphor.
- The output lacks Source/trademark note or path reminder for `assets/<article-slug>-ferris/`.
- The output lacks active Ferris cognitive action or route isolation.

## Iteration Moves

- Stronger Ferris Participation: use the `Ferris edit participation repair gate` from `prompt-template.md`; keep the same core idea and make Ferris perform the central cognitive action.
- Off-Model Identity Repair: use the `Ferris off-model identity repair gate`; preserve composition and labels while restoring compact orange/rust-red crab body, broad shell silhouette, two claws, small legs, eyes or eyestalk eyes, and active body language.
- Trademark-Boundary Repair: use the `Ferris trademark-boundary repair gate`; remove or rewrite Rust-logo-forward visuals, official/endorsed/affiliated cues, broad release language, bundled Rust marks, official logo arrangements, and endorsement wording while preserving successful Ferris identity, composition, labels, aspect ratio, and article metaphor.
- Title Removal: use the `Ferris title removal edit gate`; remove only title text, title cards, top-left headings, or underlines and preserve the rest.
- Text Reduction: use the `Ferris text reduction edit gate`; keep only 2-6 short visible labels copied exactly in the user's language.
- Preserve Unaffected Content: use the `Ferris unaffected-content preservation gate`; edit only the named failure and preserve successful Ferris action, identity cues, composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.
- Source-asset tracing repair: keep the same core idea, invent a new low-tech article metaphor, change Ferris pose/action, remove asset-sheet resemblance, remove source-pose resemblance, and preserve the working labels, aspect ratio, sparse line style, and successful article meaning.
- Route leakage repair: restore `source-reviewed`, restore the `source.md` pointer, keep Ferris rules route-local, and remove Xiaohei black creature identity, Littlebox closed paper-box identity, Tom protected-character identity, broad release wording, and cross-route vocabulary.
- Excessive text repair: reduce labels to sparse labels, move explanation into the article text, and keep labels away from Ferris's face, eyes, claws, legs, and shell silhouette.

Ferris QA unaffected-content preservation gate: edit only the named failure and preserve successful Ferris action, Ferris identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Delivery Judgment

Accepted Ferris images keep Ferris as the action subject, preserve recognizable Ferris cues, explain one article idea through an original article metaphor, carry the source/trademark note, point source/trademark-sensitive use to `source.md`, preserve route isolation, and report the saved output path under `assets/<article-slug>-ferris/`.
