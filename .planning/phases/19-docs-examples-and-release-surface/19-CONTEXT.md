# Phase 19: Docs, Examples, and Release Surface - Context

**Gathered:** 2026-06-13T16:29:11Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 19 delivers the public and maintainer-facing Sealos Seal documentation surface after the route contract, route-local pack, and skill controller integration are already in place. The phase updates public README guidance, copyable prompt examples, OpenAI agent metadata, NOTICE/release wording, and release checklist gates so users and maintainers can request, inspect, and release Sealos Seal behavior with consistent uploaded-image and Sealos brand-boundary wording.

Phase 19 covers SDOC-01 through SDOC-06 only. Phase 19 should document and expose the already-built Sealos Seal route; it should not change the Sealos canonical pack, SKILL.md controller behavior, route metadata contract, validator implementation, Node regression suite, or generated sample assets except for narrow wording consistency that belongs to the listed public surfaces. Phase 20 owns validator and test hardening for the completed documentation surface.

</domain>

<decisions>
## Implementation Decisions

### Public README Route Guidance

- **D-01:** Update `README.md` so Sealos Seal is described as an explicit `brand-owned` brand mascot route, not as a Phase 16-only or "under preparation" placeholder.
- **D-02:** README must preserve Xiaohei as the only implicit default route and present Littlebox, Tom, Ferris, and Sealos Seal as explicit selectable routes.
- **D-03:** README Sealos guidance must list the aliases `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal`.
- **D-04:** README must include the raw output path `assets/<article-slug>-sealos/`, escaped token `assets/&lt;article-slug&gt;-sealos/`, output suffix `sealos`, route-local reference directory `ian-xiaohei-illustrations/references/ips/sealos/`, and source authority `ian-xiaohei-illustrations/references/ips/sealos/source.md`.
- **D-05:** README Sealos copy must state that the uploaded mascot image is the v1.3 canonical image authority and that prior Sealos mascot exploration supplies supporting brand context only.
- **D-06:** README Sealos copy must name the brand/logo boundary: Sealos logo marks on cap and chest are route identity markers, public rendered samples require release review, and brand/logo wording is governed by `RELEASE_CHECKLIST.md`.
- **D-07:** README workflow, quick examples, directory tree, maintainer validation, and route reference sections should all be moved from four-route Ferris-era wording to five-route wording that includes Sealos Seal.
- **D-08:** README should not claim public rendered Sealos samples are available. The public sample policy remains review-gated.

### Copyable Prompt Examples

- **D-09:** Add copyable Sealos Seal prompt examples to `examples/prompts.md` for planning, generation, text-only smoke, and mixed-IP five-route variants.
- **D-10:** Replace the existing Sealos "Phase 16 route-status review" prompt with current Phase 19 wording that reflects the completed route-local pack and SKILL.md controller integration.
- **D-11:** The Sealos planning prompt must require these fields: `Placement`, `Core idea`, `Structure type`, `Mascot state`, `Mascot action`, `Supporting objects`, `Visible labels`, `Output path`, and `Brand/canonical-image note`.
- **D-12:** The Sealos generation prompt must require `brand-owned`, `ian-xiaohei-illustrations/references/ips/sealos/source.md`, `uploaded-image-canonical`, `uploaded-image-locked`, `assets/<article-slug>-sealos/`, and the escaped token `assets/&lt;article-slug&gt;-sealos/`.
- **D-13:** The Sealos smoke prompt must be text-only and check aliases, selected IP, route status, source authority, route-local directory, required references, planning fields, raw/escaped paths, brand/canonical-image note, uploaded-image identity markers, and public sample gate.
- **D-14:** Mixed-IP planning and generation prompts must include five separate variant groups: Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal. The Sealos group must keep `Mascot state`, `Mascot action`, `brand-owned`, source pointer, brand/canonical-image note, and `assets/<article-slug>-sealos/`.
- **D-15:** Mixed-IP examples should continue using one shared core idea and separate route groups. Each route group must load only its own references and retain route-specific status, source/rights/brand note, QA, and output path.

### Agent Metadata

- **D-16:** Update `ian-xiaohei-illustrations/agents/openai.yaml` so `display_name`, `short_description`, and `default_prompt` name Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- **D-17:** Preserve `policy.allow_implicit_invocation: true`.
- **D-18:** Metadata must preserve Xiaohei as the omitted-IP default and describe Sealos Seal as an explicit `brand-owned` route with uploaded-image authority.
- **D-19:** Metadata should remain concise and discovery-oriented. The detailed Sealos identity marker list belongs in README, examples, NOTICE, routing, release checklist, and Sealos route references.

### NOTICE And Release Materials

- **D-20:** Keep `NOTICE.md` as the public notice authority for Sealos Seal brand/canonical-image boundary wording.
- **D-21:** NOTICE must record Sealos Seal as a Sealos brand mascot route based on the user's uploaded mascot image, with route status `brand-owned` and authority path `ian-xiaohei-illustrations/references/ips/sealos/source.md`.
- **D-22:** NOTICE must preserve the distinction that prior Sealos mascot exploration supplies supporting brand context while the uploaded image remains the canonical mascot reference for v1.3.
- **D-23:** NOTICE and release materials must avoid treating earlier Sealos exploration variants, generic seals, abstract logo creatures, blue-gradient cloud/seal explorations, or bald/plain-head variants as canonical route options.
- **D-24:** Release materials must keep public rendered Sealos samples gated until reviewer, date, approval status, allowed directories, release channels, uploaded-image identity outcome, and brand-logo outcome are recorded.
- **D-25:** If release notes or release-review prose are added during Phase 19, they should point to `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/references/routing.md`, and `ian-xiaohei-illustrations/references/ips/sealos/source.md` rather than duplicating every rule.

### Release Checklist Expansion

- **D-26:** Expand `RELEASE_CHECKLIST.md` so Sealos Seal appears in global automated gates, route smoke prompts, installable package boundary, public docs/path marker review, metadata parity, NOTICE consistency, and final release review.
- **D-27:** The Sealos release gate must include uploaded-image identity review, Sealos logo/brand wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
- **D-28:** Release checklist Sealos identity review must preserve the full uploaded-image marker list: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- **D-29:** Release checklist public asset and generated sample policies must cover both public sample directories: `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`.
- **D-30:** Release checklist validator commands remain `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`. Phase 19 may update command references, while Phase 20 owns new validator assertions and final Node hardening.
- **D-31:** Remove stale Ferris-era phase ownership wording where it blocks current v1.3 release review clarity. Replace it with Sealos-aware Phase 20 validation evidence wording where Phase 19 needs to point forward.

### Cross-Document Wording Consistency

- **D-32:** Use `Sealos Seal` as the display name and `sealos` as the route id consistently across README, examples, NOTICE, release checklist, metadata, and routing docs.
- **D-33:** Use `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, and `brand/canonical-image note` consistently on Sealos-specific public surfaces.
- **D-34:** Use `uploaded mascot image` and `uploaded image is the v1.3 canonical mascot reference` wording when describing the route authority.
- **D-35:** Use `brand mascot route` or `Sealos brand mascot route` for public docs. Keep generic "seal mascot" wording inside drift warnings or aliases, not as the canonical route description.
- **D-36:** Preserve route isolation wording: Sealos brand mascot rules stay route-local and must not leak into Xiaohei, Littlebox, Tom, or Ferris route contracts.
- **D-37:** Keep public documentation language Chinese-first where existing docs are Chinese-first, while prompt blocks and code-like route metadata can stay English for copyability and image-generation reliability.

### Phase Boundary For Planning

- **D-38:** Phase 19 plans should target `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and narrow consistency checks against `ian-xiaohei-illustrations/references/routing.md`.
- **D-39:** Phase 19 should not edit `ian-xiaohei-illustrations/SKILL.md` unless planning discovers a tiny documentation inconsistency required for public wording parity. The controller behavior was completed in Phase 18.
- **D-40:** Phase 19 should not edit `scripts/validate-skill-package.mjs` or `scripts/validate-skill-package.test.mjs`. Phase 20 owns Sealos docs marker checks, route leakage checks, public sample gate parsing, and five-route Node hardening.
- **D-41:** Phase 19 should not add public rendered Sealos sample images. Public sample publication requires release checklist approval and belongs to a reviewed release action.
- **D-42:** Phase 19 should run existing regression commands after documentation edits as safety checks: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`.

### the agent's Discretion

The user authorized autonomous choices. The selected defaults are to update all Phase 19 public surfaces in one coherent docs pass, use existing Ferris/Tom public-doc patterns where they fit, promote Sealos wording from Phase 16 placeholder language to completed explicit route documentation, preserve public sample gates, and leave validator implementation to Phase 20.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 19 goal, SDOC-01 through SDOC-06, success criteria, dependency on Phase 18, and the four planned Phase 19 plan slots.
- `.planning/REQUIREMENTS.md` — Defines Sealos documentation requirements, validation follow-up requirements, v2 deferred requirements, and out-of-scope boundaries.
- `.planning/PROJECT.md` — Defines the v1.3 Sealos Seal milestone, uploaded-image authority, brand boundary, fixed marker list, and documentation-language constraint.
- `.planning/STATE.md` — Carries completion state for Phases 16-18 and the current Phase 19 position.

### Prior Sealos Decisions And Evidence

- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-CONTEXT.md` — Locked brand/source, uploaded-image authority, fixed markers, route metadata, public sample policy, NOTICE/release surface, and validator-boundary decisions.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-VERIFICATION.md` — Verification evidence for the Sealos source record, route metadata, public sample gate, marker wording, and 66-check / 34-test baseline.
- `.planning/phases/16-sealos-seal-brand-and-image-contract/16-UAT.md` — UAT evidence confirming maintainer-readable Sealos brand/source, route metadata, marker, sample gate, and command behavior.
- `.planning/phases/17-sealos-seal-canonical-pack/17-CONTEXT.md` — Locked Sealos pack shape, planning fields, prompt contract, composition language, QA categories, edit prompts, and deterministic marker decisions.
- `.planning/phases/17-sealos-seal-canonical-pack/17-VERIFICATION.md` — Verification evidence for all seven route-local Sealos references, planning fields, prompt/edit suite, QA gates, and command results.
- `.planning/phases/17-sealos-seal-canonical-pack/17-UAT.md` — UAT evidence confirming Sealos pack availability, prompt contract, smoke-relevant planning fields, and passing commands.
- `.planning/phases/18-skill-controller-integration/18-CONTEXT.md` — Locked SKILL.md controller decisions for Sealos alias selection, default preservation, mixed-IP grouping, output path, and delivery note.
- `.planning/phases/18-skill-controller-integration/18-VERIFICATION.md` — Verification evidence for Sealos controller integration, alias coverage, five-IP mixed grouping, output paths, delivery note, and regression commands.
- `.planning/phases/18-skill-controller-integration/18-UAT.md` — UAT evidence confirming explicit Sealos route behavior, default-route preservation, five-IP grouping, raw/escaped paths, and brand/canonical-image delivery.

### Phase 19 Public Surfaces

- `README.md` — Public route overview, quick examples, workflow, route list, output paths, installable package map, and maintainer validation wording that must include Sealos Seal.
- `examples/prompts.md` — Copyable route prompts and smoke prompts; Phase 19 must add Sealos planning, generation, smoke, and five-IP mixed variants.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent discovery metadata that must name Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal while preserving Xiaohei implicit default.
- `NOTICE.md` — Public notice and boundary record; Sealos wording must record uploaded-image authority and avoid canonicalizing prior exploration variants.
- `RELEASE_CHECKLIST.md` — Maintainer release gate for route smokes, public docs/path markers, uploaded-image identity review, brand/logo wording, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.
- `ian-xiaohei-illustrations/references/routing.md` — Current five-route metadata authority; Phase 19 public docs must stay consistent with aliases, route status, output suffix, required references, source authority, raw path, and escaped path.

### Sealos Route Authority And Runtime Surfaces

- `ian-xiaohei-illustrations/references/ips/sealos/index.md` — Pack navigation, route contract, failure categories, public sample gate, and Phase 19 ownership note.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Brand/canonical-image authority for uploaded mascot image, fixed markers, prior exploration boundary, public sample policy, and review fields.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` — Sealos planning fields, one-image generation prompt, brand/canonical-image note, raw output path, edit prompts, and smoke-test wording source.
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` — Sealos QA authority for identity drift, prompt leakage, route leakage, missing brand/path context, and delivery judgment.
- `ian-xiaohei-illustrations/SKILL.md` — Completed Phase 18 controller behavior; Phase 19 docs should reflect its Sealos alias selection, planning, generation, QA, save, mixed-IP, and delivery semantics.

### Existing Public-Docs Patterns

- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Protected-character rights/source gate pattern referenced by README, examples, NOTICE, and release checklist.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` — Source/trademark authority pattern for a mascot route and closest public-doc precedent for Sealos source authority wording.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` — Existing route prompt pattern for planning, generation, and note fields that Sealos examples can mirror.

### Validation Follow-Up

- `scripts/validate-skill-package.mjs` — Phase 20 validator hardening target; Phase 19 should run the current command as a safety check only.
- `scripts/validate-skill-package.test.mjs` — Phase 20 Node regression target; Phase 19 should run the current command as a safety check only.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `README.md`: Already contains a Sealos section, output path token, and source authority link, but several sections still use Phase 16 placeholder or four-route wording.
- `examples/prompts.md`: Already contains one Sealos Phase 16 route-status review prompt, but it does not yet include current Sealos planning, generation, smoke, or five-IP mixed variant prompts.
- `ian-xiaohei-illustrations/agents/openai.yaml`: Still names only Xiaohei, Littlebox, Tom, and Ferris; Sealos needs to be added while preserving `allow_implicit_invocation`.
- `NOTICE.md`: Already contains a Sealos Seal brand and canonical image boundary section; Phase 19 should preserve and align it with public docs and release materials.
- `RELEASE_CHECKLIST.md`: Already contains a Sealos gate from Phase 16, but global route smoke prompts, installable package boundary, public docs/path marker checks, and metadata parity still need five-route Sealos updates.
- `ian-xiaohei-illustrations/references/routing.md`: Already provides the exact five-route authority, aliases, required references, source pointer, output suffix, raw path, escaped path, and brand metadata to mirror in docs.

### Established Patterns

- The repository is documentation-first: behavior lives in Markdown/YAML, with dependency-free Node validation.
- Public docs are Chinese-first with English route terms, path tokens, prompt blocks, and status markers.
- Each explicit IP route has public route docs, copyable examples, metadata wording, notice/source boundary, release checklist gates, and validator follow-up.
- Xiaohei remains the only omitted-IP default. Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.
- Sensitive route samples stay behind public asset and generated sample approval gates before entering `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- Mixed-IP prompts use one shared core idea and separate route groups with route-local references, statuses, notes, QA, and output directories.

### Integration Points

- Phase 19 plans should edit `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.
- Phase 19 planning may include a read-only or narrow consistency review of `ian-xiaohei-illustrations/references/routing.md`.
- Phase 19 should use `ian-xiaohei-illustrations/references/ips/sealos/source.md`, `prompt-template.md`, and `qa-checklist.md` as the Sealos wording authority for public examples and release gates.
- Phase 19 should run current safety commands after edits, while Phase 20 will add new validator/test checks for Sealos docs markers and route leakage.

</code_context>

<specifics>
## Specific Ideas

- Current README wording says Sealos Seal is `under preparation`; Phase 19 should change public wording to reflect the completed explicit controller route while keeping public sample release review gated.
- Current `examples/prompts.md` has only a Phase 16 route-status Sealos prompt; Phase 19 should add current copyable planning, generation, smoke, and five-IP mixed prompts.
- Current metadata omits Sealos Seal from `display_name`, `short_description`, and `default_prompt`.
- Current mixed-IP prompts and workflow docs often list four IP groups; Phase 19 should update them to five groups with a Sealos group.
- Current release checklist has a Sealos section but global checklist sections still mention Xiaohei/Littlebox/Tom/Ferris without Sealos.
- Keep the Sealos fixed marker list intact wherever identity review is required: white rounded seal body, navy cap, deep-blue hoodie, Sealos logo marks on cap and chest, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.
- Public docs should keep Sealos brand context concise: reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes.
- Public sample wording should always point to release review rather than implying already-approved rendered Sealos examples.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 19 scope.

</deferred>

---

*Phase: 19-Docs, Examples, and Release Surface*
*Context gathered: 2026-06-13T16:29:11Z*
