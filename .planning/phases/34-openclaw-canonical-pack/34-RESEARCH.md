---
phase: 34
status: researched
requirements: [PACK-01, PACK-02, PACK-03, PACK-04, PACK-05]
subagent_attempted: gsd-phase-researcher
---

# Phase 34 Research: OpenClaw Canonical Pack

## Implementation Pattern

OpenClaw should follow the route-local canonical pack pattern used by `seal`, `ferris`, and `tom`.

Existing full-pack shape:

- `index.md`: route contract, reference map, shared failure categories, operational coherence, scope boundary.
- `source.md` or `rights.md`: source/rights authority and public sample policy.
- `style-dna.md`: visual language, identity markers, composition rules, visual vetoes, stable gates.
- `<ip>-ip.md`: identity, recognition rules, cognitive action responsibility, route boundary, failure modes.
- `composition-patterns.md`: structure families, metaphor generation rules, action patterns, object pool, anti-repeat rules.
- `prompt-template.md`: planning output format, single-image generation prompt, edit prompts, output reminder.
- `qa-checklist.md`: pass criteria, identity checks, failure signals, iteration moves, delivery judgment.

Phase 34 should create the missing OpenClaw operational files around the existing Phase 33 `source.md`.

## Files to Create

- `ian-xiaohei-illustrations/references/ips/openclaw/index.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/openclaw-ip.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md`

## Files to Modify

- `ian-xiaohei-illustrations/references/routing.md`: expand OpenClaw `required_references` from source-only to the full seven-file pack.
- `scripts/validate-skill-package.mjs`: add OpenClaw operational refs helper, update route reference count, route reference containment, and OpenClaw pack/prompt/IP/QA checks.
- `scripts/validate-skill-package.test.mjs`: update parser-helper expected OpenClaw references and add drift fixtures for OpenClaw pack/prompt/IP/QA checks.

## Reusable Markers

Shared OpenClaw route markers:

- Route id: `openclaw`.
- Route status: `source-reviewed`.
- Source/license authority: `source.md`.
- Output path: `assets/<article-slug>-openclaw/`.
- Uploaded-logo identity note: preserve the red logo-derived OpenClaw mascot with red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs.
- Public-sample boundary: public rendered OpenClaw samples require `RELEASE_CHECKLIST.md` review before appearing in public examples or release surfaces.

Shared failure categories:

- generic red mascot drift
- missing claws
- missing antennae
- missing cyan pupils
- product-poster drift
- passive placement
- excessive text
- route leakage
- copied composition

These marker names should appear in every operational OpenClaw file to make later validator checks deterministic.

## Planning Contract

`prompt-template.md` should expose these planning fields:

- Placement
- Core idea
- Structure type
- OpenClaw state
- OpenClaw action
- Supporting objects
- Visible labels
- Output path
- Uploaded-logo identity note
- Source/license note

OpenClaw states should remain physical and cognitive: focused, inspecting, gripping, sorting, bridging, tuning, stamping, carrying, mapping, connecting, shielding, comparing, marking, untangling, weighing, guiding, assembling, and repairing.

## Generation Contract

The generation prompt should:

- Stay English for model consistency.
- Preserve visible labels exactly in the user's requested language.
- Use a sparse 16:9 horizontal article illustration.
- Use clean white or near-white background, loose black linework, generous whitespace, and restrained red/cyan accents tied to the uploaded logo.
- Make OpenClaw perform the central cognitive action.
- Keep the metaphor meaningful only while OpenClaw is present.
- Save accepted output under `assets/<article-slug>-openclaw/`.

## Edit Contract

Edit prompt families should include:

- Stronger OpenClaw Participation
- Uploaded-Logo Identity Repair
- Title Removal
- Text Reduction
- Route Leakage Repair
- Unaffected-Content Preservation

## QA Contract

QA should reject:

- generic red mascot drift
- missing claws
- missing antennae
- missing cyan pupils
- product-poster drift
- passive placement
- excessive text
- route leakage
- copied composition
- formal diagrams
- dense PPT-like infographics
- UI screenshots
- IDE or terminal scenes
- code screenshots
- poster layouts
- top-left title artifacts
- clean digital labels

## Validator Implications

Current validator already has Phase 33 OpenClaw source, release, leakage, sample, and output path gates. Phase 34 should add pack gates:

- `REFS-OPENCLAW-001`: seven OpenClaw route-local files exist.
- `PROMPT-OPENCLAW-001`: planning, generation, edit, source/license, uploaded-logo, and output markers exist.
- `IP-OPENCLAW-001`: identity, action responsibility, route boundary, and failure categories exist across index/source/style/ip/composition.
- `QA-OPENCLAW-001`: pass/fail gates, repair gates, route leakage failure, delivery judgment, and output path exist.

The route reference count for `openclaw` should change from `1` to `7`.

## Risks and Mitigations

- Risk: route row points to files that do not exist. Mitigation: create files first in the same implementation wave, then update routing and validator.
- Risk: OpenClaw becomes a generic mascot. Mitigation: repeat uploaded-logo identity markers in every operational file and QA gate.
- Risk: product-poster framing. Mitigation: keep article-metaphor wording, sparse composition, and cognitive action gates in style, prompt, composition, and QA files.
- Risk: validation accepts partial pack drift. Mitigation: add source, prompt, IP, QA, reference count, and fixture checks together.

## Verification Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
rg -n "OpenClaw planning fields gate|OpenClaw one-image generation gate|Stronger OpenClaw Participation|Uploaded-Logo Identity Repair|OpenClaw QA|generic red mascot drift|missing claws|missing antennae|missing cyan pupils|product-poster drift" ian-xiaohei-illustrations/references/ips/openclaw
```
