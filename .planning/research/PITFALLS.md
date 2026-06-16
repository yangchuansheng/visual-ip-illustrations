# Domain Pitfalls: OpenClaw Logo IP Integration

**Project:** Visual IP Illustrations
**Milestone:** v1.7 OpenClaw Logo IP Integration
**Researched:** 2026-06-16

## Scope

This file covers risks when adding OpenClaw as a source-reviewed logo-mascot route. The main challenge is preserving the exact uploaded-logo identity while turning it into article-illustration behavior that stays route-local, source-auditable, and compatible with existing route contracts.

## Critical Pitfalls

### 1. Treating the Logo as a Vague Mascot Hint

**What goes wrong:** Prompts say "red mascot" or "crab-like creature" and the generated route drifts into a generic red creature.
**Warning signs:** Missing exact marker list; QA accepts generic claws; source record lacks uploaded-logo authority.
**Prevention:** Record the uploaded logo as visual authority and repeat stable markers: red round body, side claw-like arms, two antennae, black eyes, cyan pupils, short legs, simple logo-mascot proportions.
**Automate:** Validator checks source, identity, prompt, and QA files for uploaded-logo authority and marker strings.

### 2. Making OpenClaw a Brand Poster Route

**What goes wrong:** OpenClaw images become product ads, logotype reproductions, or promotional hero graphics.
**Warning signs:** Prompt asks for large OpenClaw wordmark; README examples center brand copy; QA lacks article-metaphor requirements.
**Prevention:** Require one article idea, one cognitive action, sparse labels, white background, and mascot-as-actor composition.
**Automate:** Validator checks prompt and QA for article-illustration, cognitive-action, and sparse-label markers.

### 3. Omitting Source and License Context

**What goes wrong:** The route ships without official repository, MIT license, or source attribution in NOTICE and source record.
**Warning signs:** Route row says only "uploaded image"; NOTICE lacks OpenClaw; release checklist has no source/license review.
**Prevention:** Add `source.md`, NOTICE, and release checklist markers for official repo, MIT license, OpenClaw Foundation copyright, and uploaded-logo authority.
**Automate:** Validator adds `SOURCE-OPENCLAW-001`, `NOTICE-OPENCLAW-001`, and `RELEASE-OPENCLAW-001`.

### 4. Accidental Default Route Expansion

**What goes wrong:** OpenClaw becomes default for generic "AI assistant" or "red mascot" prompts.
**Warning signs:** `default=true`; aliases include generic `assistant`, `red mascot`, `crab`, or `logo`; omitted-IP smoke output changes.
**Prevention:** Keep OpenClaw explicit-only, with direct OpenClaw aliases.
**Automate:** Validator enforces exactly one default route and rejects generic OpenClaw aliases.

### 5. Route Leakage Into Seal or Ferris

**What goes wrong:** Red-claw, antenna, or OpenClaw source terms appear in other route packs.
**Warning signs:** Seal prompt mentions claws; Ferris QA references OpenClaw; shared prompts include route-specific mascot anatomy.
**Prevention:** Keep OpenClaw identity under `references/ips/openclaw/` plus bounded route/docs/release sections.
**Automate:** Add non-OpenClaw leakage scan for `OpenClaw`, `cyan pupils`, `red round body`, and `uploaded OpenClaw logo`.

### 6. Public Sample Assets Ship Before Review

**What goes wrong:** Generated OpenClaw assets enter README galleries or skill example assets before identity and source review.
**Warning signs:** Public example directories contain OpenClaw filenames; release checklist lacks approval line.
**Prevention:** Keep generated OpenClaw public samples gated until release review records approval.
**Automate:** Public asset scan blocks OpenClaw rendered assets without explicit approval marker.

### 7. Weak Edit Prompts

**What goes wrong:** Editing a generated image fixes one issue while losing antennae, claws, cyan pupils, or article readability.
**Warning signs:** Edit prompts lack unaffected-content preservation; QA has no repair prompts.
**Prevention:** Add edit prompt families for stronger participation, identity repair, title removal, text reduction, and unaffected-content preservation.
**Automate:** Validator checks `prompt-template.md` and `qa-checklist.md` for edit gate names.

### 8. Output Path Ambiguity

**What goes wrong:** OpenClaw outputs save into `assets/<article-slug>-illustrations/` or a generic logo folder.
**Warning signs:** Missing `output_suffix`; README lacks raw/escaped path tokens; examples copy Seal path.
**Prevention:** Use `assets/<article-slug>-openclaw/` consistently.
**Automate:** Validator checks raw and escaped OpenClaw output tokens.

## Recommended Automated Checks

1. `ROUTE-OPENCLAW-001`: route row contains aliases, `default=false`, `output_suffix=openclaw`, required references, source context, and status.
2. `REFS-OPENCLAW-001`: seven route-local files exist.
3. `SOURCE-OPENCLAW-001`: `source.md` records official repo, MIT license, uploaded-logo authority, sample policy, and review owner.
4. `PROMPT-OPENCLAW-001`: prompt template includes planning fields, one-image gate, identity markers, edit gates, and output path.
5. `QA-OPENCLAW-001`: QA checklist includes identity, action, article-metaphor, source-isolation, text, and delivery gates.
6. `DOC-OPENCLAW-001`: README, examples, skill metadata, and agent metadata describe the OpenClaw route consistently.
7. `NOTICE-OPENCLAW-001`: NOTICE includes source and MIT attribution.
8. `SMOKE-OPENCLAW-001`: smoke prompts cover explicit OpenClaw and mixed-IP route groups.
9. `BOUNDARY-OPENCLAW-LEAK-001`: non-OpenClaw packs avoid OpenClaw identity markers.
10. `BOUNDARY-OPENCLAW-IMG-001`: public sample assets require release approval.

## Sources

- OpenClaw official repository README: https://github.com/openclaw/openclaw
- OpenClaw MIT license: https://github.com/openclaw/openclaw/blob/main/LICENSE
- OpenClaw official logo asset reference: https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.svg
- User-provided uploaded logo: `openclaw-color.png` attached in the request.
