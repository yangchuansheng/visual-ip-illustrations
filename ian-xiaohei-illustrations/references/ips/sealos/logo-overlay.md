# Sealos Logo Overlay Contract

Use this file after selecting the `sealos` route whenever cap or chest logos are present.

Route id: `sealos`.
Route status: `brand-owned`.
Output path: `assets/<article-slug>-sealos/`.
Brand/canonical-image authority: `source.md`.
Canonical image status: `uploaded-image-canonical`.
Drift boundary: `uploaded-image-locked`.
Public rendered Sealos samples remain gated by `RELEASE_CHECKLIST.md`.

## Exact Logo Authority

The uploaded Sealos logo source image is the only authority for cap and chest logo pixels.
The official uploaded Sealos logo shape is the blue curled wave / seal-tail mark above a rounded cloud-tray base.

Required overlay markers:

- uploaded Sealos logo source image overlay
- overlay-only logo finalization
- no prompt-rendered logo accepted
- blank cap and chest logo patches before overlay
- use the uploaded logo file as the only logo pixels
- uniform scale and placement only
- source asset path or attachment id

## Required Workflow

1. Generate the Sealos Seal illustration as a base image with blank cap and chest logo patches before overlay.
2. Keep the cap, hoodie, mascot body, scene, labels, and action readable in the base image.
3. Composite the uploaded Sealos logo source image onto the cap patch and chest patch.
4. Use the uploaded logo file as the only logo pixels.
5. Use uniform scale and placement only; preserve aspect ratio, orientation, silhouette, negative space, curl, top fin/notch, rounded cloud-tray base, and blue gradient relationship.
6. Record the source asset path or attachment id in the delivery note.

## Hard Failure Signals

- prompt-rendered logo accepted
- generated logo approximation
- redrawn logo
- alternate wave mark
- simplified logo mark
- changed logo silhouette
- changed negative space
- changed top fin/notch
- changed rounded cloud-tray base
- changed blue gradient relationship
- missing source asset path or attachment id
- missing uploaded Sealos logo source image overlay

## Delivery Gate

Accepted Sealos images use overlay-only logo finalization: the cap logo and chest logo are composited from the uploaded Sealos logo source image, with uniform scale and placement only. The final delivery report names the source asset path or attachment id and confirms no prompt-rendered logo accepted.
