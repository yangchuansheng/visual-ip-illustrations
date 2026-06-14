# Sealos Logo Shape Mask Contract

Use this file after selecting the `sealos` route whenever cap or chest logos are present.

Route id: `sealos`.
Route status: `brand-owned`.
Output path: `assets/<article-slug>-sealos/`.
Brand/canonical-image authority: `source.md`.
Canonical image status: `uploaded-image-canonical`.
Drift boundary: `uploaded-image-locked`.
Public rendered Sealos samples remain gated by `RELEASE_CHECKLIST.md`.

## Exact Logo Authority

The uploaded Sealos logo source image is the only authority for cap and chest logo shape.
The official uploaded Sealos logo shape is the blue curled wave / seal-tail mark above a rounded cloud-tray base.
The final cap and chest logo geometry must come from the uploaded Sealos logo source shape mask and uploaded Sealos logo source alpha mask.
Color remap allowed after the source shape mask is locked.

Required overlay markers:

- uploaded Sealos logo source image overlay
- overlay-only logo finalization
- no prompt-rendered logo accepted
- blank cap and chest logo patches before overlay
- uploaded Sealos logo source shape mask
- uploaded Sealos logo source alpha mask
- exact source shape with color remap allowed
- uniform scale, placement, and color remap only
- source asset path or attachment id

## Required Workflow

1. Generate the Sealos Seal illustration as a base image with blank cap and chest logo patches before overlay.
2. Keep the cap, hoodie, mascot body, scene, labels, and action readable in the base image.
3. Extract the uploaded Sealos logo source shape mask and uploaded Sealos logo source alpha mask from the source image.
4. Composite that source mask onto the cap patch and chest patch.
5. Use uniform scale, placement, and color remap only; preserve aspect ratio, orientation, exact silhouette, negative space, proportions, curl, top fin/notch, and rounded cloud-tray base.
6. Record the source asset path or attachment id in the delivery note.

## Hard Failure Signals

- prompt-rendered logo accepted
- generated logo approximation
- generated logo tracing
- redrawn logo
- alternate wave mark
- simplified logo mark
- changed logo silhouette
- changed negative space
- changed logo proportions
- changed logo curl
- changed top fin/notch
- changed rounded cloud-tray base
- missing source asset path or attachment id
- missing uploaded Sealos logo source image overlay
- missing uploaded Sealos logo source shape mask
- missing uploaded Sealos logo source alpha mask

## Delivery Gate

Accepted Sealos images use overlay-only logo finalization: the cap logo and chest logo are composited from the uploaded Sealos logo source shape mask and uploaded Sealos logo source alpha mask, with uniform scale, placement, and color remap only. The final delivery report names the source asset path or attachment id and confirms no prompt-rendered logo accepted.
