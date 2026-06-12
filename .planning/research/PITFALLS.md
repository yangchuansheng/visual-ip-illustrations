# Domain Pitfalls: Authorized Tom IP Integration

**Project:** Multi-IP Article Illustration Skills
**Milestone:** v1.1 Authorized Tom IP Integration
**Researched:** 2026-06-13
**Confidence:** HIGH for repository-local routing and validation risks; MEDIUM for rights-boundary implementation details because final permission terms must come from the actual authorization record.

## Scope

This file covers mistakes likely when adding Tom from *Tom and Jerry* as the third selectable visual IP. It assumes Xiaohei and Littlebox already work and that `scripts/validate-skill-package.mjs` is the local integrity gate. The main risk is treating Tom like the previous IP additions when Tom is a recognizable commercial character with public distribution and authorization constraints.

## Critical Pitfalls

### 1. Treating "Authorized Tom" as a Normal Bundled IP

**What goes wrong:** The repository presents Tom as a regular built-in IP without recording the authorization source, rights holder, allowed use, excluded use, territory, duration, sublicensing scope, model-generation scope, and public redistribution scope.
**Warning signs:** README says "supports Tom"; `NOTICE.md` only names Warner Bros.; route status is `active` before authorization fields exist; release checklist has attribution review but no rights-boundary review.
**Consequences:** Public docs can imply broad commercial permission. Downstream users may copy the skill package and generate/distribute Tom-derived images outside the allowed scope.
**Prevention:** Add a Tom rights boundary section before public Tom examples land. Store a short maintainer-readable record with source URL or contract reference, rights holder, allowed-use assumption, restricted uses, distribution boundary, and review owner. Use `status: gated` or `status: authorized-internal` until that record is complete.
**Likely phase placement:** Phase 1 rights and route foundation.
**Automate:** Validator checks `NOTICE.md`, `RELEASE_CHECKLIST.md`, `routing.md`, and Tom pack index for markers: `Warner Bros. Entertainment Inc.`, `Tom and Jerry`, `authorization scope`, `allowed use`, `restricted use`, `distribution boundary`, `rights review required`.

### 2. Confusing Attribution With Permission

**What goes wrong:** The docs add trademark/copyright attribution and assume that attribution makes Tom usable. Attribution is documentation hygiene; permission scope is the operational boundary.
**Warning signs:** `NOTICE.md` has only a credit line; README includes generation examples with Tom but no release boundary; smoke prompts ask for public Tom output before authorization assumptions are written.
**Consequences:** The package appears legally safer than it is. Maintainers cannot distinguish "credit given" from "use permitted."
**Prevention:** Split docs into `Attribution` and `Authorization Boundary`. Attribution names the source and rights holder. Authorization Boundary states what this package is allowed to do and what public release still requires.
**Likely phase placement:** Phase 1 rights foundation and Phase 5 release docs.
**Automate:** Validator fails when `NOTICE.md` contains Tom attribution markers without matching authorization-boundary markers.

### 3. Shipping Public Tom Example Images Too Early

**What goes wrong:** The repository commits generated Tom PNGs, README screenshots, or example-gallery assets before rights review confirms public redistribution of generated derivatives.
**Warning signs:** Files under `examples/images/`, `ian-xiaohei-illustrations/assets/examples/`, or root `assets/` contain `tom`, `jerry`, `cat`, `tom-and-jerry`, or visible Tom renderings; README displays Tom images; no checklist item distinguishes prompt/docs release from image-asset release.
**Consequences:** A documentation-only milestone turns into a public derivative-image distribution. This is the highest-blast-radius release mistake.
**Prevention:** Keep v1.1 Tom implementation text-first until approval covers generated image distribution. Use prompt examples and QA rules without committing rendered Tom assets. Add a release gate for public generated examples.
**Likely phase placement:** Phase 4 docs/examples and Phase 5 release.
**Automate:** Validator scans public asset directories for Tom-related filenames and blocks them until an explicit `allow_public_tom_examples` marker exists in the release checklist.

### 4. Prompt Leakage Into Xiaohei or Littlebox

**What goes wrong:** Tom-specific words, slapstick chase language, grey-blue cat anatomy, white gloves, expressive cartoon face rules, or Warner attribution text leak into the shared workflow or other IP prompt templates.
**Warning signs:** `SKILL.md` hard-constraint blocks mention Tom alongside Xiaohei/Littlebox; Xiaohei prompts include "classic cartoon cat"; Littlebox prompts mention chase, mouse, paws, gloves, or squash-and-stretch; shared workflow contains Tom visual anatomy.
**Consequences:** Existing IPs regress. Tom also becomes harder to contain because its protected identity appears outside the Tom route.
**Prevention:** Keep Tom identity, prompt wording, QA failures, and rights text under `references/ips/tom/`. Shared workflow should only name route selection and isolated reference loading.
**Likely phase placement:** Phase 2 Tom IP pack and Phase 3 validation.
**Automate:** Validator checks that Tom identity markers appear only in `references/ips/tom/`, `routing.md`, `SKILL.md` routing sections, `NOTICE.md`, README Tom sections, examples prompts, and release checklist. It should fail when Tom markers appear in Xiaohei or Littlebox pack files.

### 5. Route Drift From Two-IP Assumptions

**What goes wrong:** The validator and route docs keep two-IP assumptions while README and `SKILL.md` advertise three IPs. Current validator checks route IDs, output tokens, required reference counts, smoke prompts, and docs markers with Xiaohei/Littlebox-specific expectations.
**Warning signs:** `ROUTE-TABLE-001` still expects only `xiaohei` and `littlebox`; `ROUTE-REFS-001` infers expected reference counts with a Littlebox special case; `outputPathTokens()` returns two paths; mixed-IP smoke only names Xiaohei and Littlebox.
**Consequences:** Tom can be added as prose while local validation still passes for a partial integration.
**Prevention:** Refactor validator route assertions around data rows, then add Tom expectations. The route table should be the source for `id`, aliases, output suffix, required references, status, and attribution context.
**Likely phase placement:** Phase 1 route foundation before Tom docs are broadened.
**Automate:** Validator requires `tom` route row, aliases, output suffix, status, all required references, output path tokens, docs mentions, examples prompts, release checklist markers, and route-specific smoke prompts.

### 6. Making Tom the Default by Accident

**What goes wrong:** Broad "Tom" or "cat" aliases trigger Tom for generic cat illustrations, or default route logic changes when a third row is added.
**Warning signs:** Route table has multiple `default: true` rows; aliases include generic terms such as `cat`, `cartoon cat`, `grey cat`, or `Jerry`; omitted-IP smoke no longer reports Xiaohei; `agents/openai.yaml` frontloads Tom in the short description.
**Consequences:** A protected IP is invoked when the user did not clearly request it. This increases rights risk and breaks Xiaohei compatibility.
**Prevention:** Keep Xiaohei as the only default. Tom aliases should be explicit: `Tom`, `Tom Cat`, `Tom and Jerry`, and the Chinese equivalent only when it clearly means the character. Ambiguous cat requests should route to Xiaohei or ask for clarification in planning mode.
**Likely phase placement:** Phase 1 routing and Phase 5 metadata.
**Automate:** Validator enforces exactly one default route (`xiaohei`) and rejects generic Tom aliases such as `cat`, `grey cat`, or `cartoon cat`.

### 7. Weak Tom Identity QA

**What goes wrong:** The Tom route produces a generic grey cat, a realistic cat, a superhero cat, a mouse-chasing scene without article meaning, or a direct frame-like recreation from the show.
**Warning signs:** QA checks only say "looks like Tom"; prompt lacks article-illustration constraints; generated concepts default to Tom chasing Jerry; QA has no rule for avoiding scene recreation or source-frame imitation.
**Consequences:** The route becomes both visually unstable and rights-sensitive. It can drift into unauthorized show-scene reproduction instead of article explanation.
**Prevention:** Define Tom as an article-illustration operator, not a scene-replay asset. QA should require article anchor clarity, Tom as the cognitive actor, minimal visible text, stable Tom recognition markers, and avoidance of source-frame recreation.
**Likely phase placement:** Phase 2 Tom IP pack and Phase 3 QA hardening.
**Automate:** Validator checks Tom QA for markers: `article illustration`, `core idea`, `active conceptual role`, `avoid source-frame recreation`, `no Jerry unless explicitly authorized`, `no show logo`, `no title card`.

### 8. Letting Jerry or Other Franchise Elements Sneak In

**What goes wrong:** Prompts, examples, or QA assume Tom naturally comes with Jerry, Spike, the show logo, title cards, classic props, or episode-like scenes.
**Warning signs:** Prompt template says "Tom chasing Jerry"; README examples request the duo; QA accepts mouse props by default; route alias includes `Jerry`; docs say `Tom and Jerry route` when the milestone scope is Tom.
**Consequences:** Scope expands from one character route to a franchise route. Rights, QA, output naming, and prompt boundaries become broader than planned.
**Prevention:** Name the route `tom`, not `tom-and-jerry`. Allow Jerry only through a separate explicitly authorized mixed-character milestone. Keep Tom's action library article-driven: sorting, holding, pointing, carrying, balancing, repairing, comparing, blocking, revealing.
**Likely phase placement:** Phase 1 scope fence and Phase 2 prompt design.
**Automate:** Validator flags `Jerry`, `Spike`, `Tom and Jerry logo`, and `duo` in Tom operational prompts unless they appear in a rights-boundary warning section.

### 9. Output Path Ambiguity

**What goes wrong:** Tom images save into Xiaohei's legacy `assets/<article-slug>-illustrations/` path or into a generic `assets/<article-slug>-tom-and-jerry/` franchise path.
**Warning signs:** `routing.md` lacks a Tom `output_suffix`; `SKILL.md` delivery examples omit Tom path; README contains raw path but no escaped marker; examples prompts hard-code Xiaohei or Littlebox paths when requesting Tom.
**Consequences:** Variant groups mix files, prior outputs can be overwritten, and generated assets become hard to audit by IP and rights scope.
**Prevention:** Use a Tom-specific suffix such as `tom`; document `assets/<article-slug>-tom/`; include raw and escaped markers in README and examples.
**Likely phase placement:** Phase 1 route foundation.
**Automate:** Validator adds Tom raw and escaped output tokens: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.

### 10. Mixed-IP Variant Groups Share References

**What goes wrong:** A request for Xiaohei, Littlebox, and Tom variants loads all references at once or generates from a blended prompt.
**Warning signs:** Mixed-IP workflow says "load all references"; Tom variant uses Littlebox background rules; Xiaohei variant references Tom's cartoon physics; delivery report lacks one block per IP.
**Consequences:** Route isolation fails and protected Tom details leak into non-Tom outputs.
**Prevention:** Mixed-IP generation must build one shared core idea, then route-specific variant groups. Each group loads only its own `required_references`, prompt template, QA checklist, output suffix, and rights notes.
**Likely phase placement:** Phase 2 Tom route integration and Phase 3 validation.
**Automate:** Smoke prompts cover a three-IP same-idea request and assert separate blocks for Xiaohei, Littlebox, and Tom with distinct output paths.

### 11. Public Docs Overpromise Tom Availability

**What goes wrong:** README, `examples/prompts.md`, or `agents/openai.yaml` presents Tom as freely available while the implementation is gated or authorization is scoped.
**Warning signs:** README headline says "default Xiaohei, selectable Littlebox and Tom" without boundary language; examples ask users to generate final Tom PNGs; agent metadata invites implicit Tom use; release checklist still says "two IP."
**Consequences:** Users rely on public docs and create outputs beyond the project boundary.
**Prevention:** Use explicit status language: `Tom route is available only under the documented authorization boundary` or `Tom route is gated pending rights review`, depending on the actual record. Keep public examples planning-first until generated output rights are cleared.
**Likely phase placement:** Phase 4 public docs and Phase 5 release.
**Automate:** Validator checks README, examples, agent metadata, and release checklist for matching Tom status wording and rejects "three active IPs" claims when route status is gated.

### 12. Missing Release Checklist Items for Protected IP

**What goes wrong:** The release checklist keeps the v1.0 pattern: run validator, smoke-test routes, review attribution, check package boundary. It lacks protected-IP approval, public-image review, prompt leakage scan, and implicit invocation review.
**Warning signs:** Checklist mentions Littlebox attribution but no Tom authorization; no asset scan; no "gated route" check; no `agents/openai.yaml` risk review.
**Consequences:** A technically valid route can ship with unresolved rights and documentation risk.
**Prevention:** Add a Tom release section with rights record, route status, public docs wording, asset policy, examples policy, image generation scope, mixed-IP behavior, and final reviewer signoff.
**Likely phase placement:** Phase 5 release.
**Automate:** Validator checks release checklist for Tom-specific required items.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Warning Signs | Prevention Strategy | Automated Checks |
|-------------|----------------|---------------|---------------------|------------------|
| Rights foundation | Attribution is treated as permission | `NOTICE.md` has credit only | Separate attribution from authorization boundary | Markers for rights holder, allowed use, restricted use, distribution boundary |
| Route table | Two-IP assumptions survive | Validator only expects `xiaohei`, `littlebox` | Data-driven route checks plus explicit Tom row | Route row, aliases, default=false, status, references, suffix |
| Tom IP pack | Generic cat prompt replaces Tom route | Prompt says "grey cat" without identity contract | Canonical `references/ips/tom/` pack | Required Tom files and prompt/QA identity markers |
| Prompt isolation | Tom markers leak into other packs | Xiaohei/Littlebox files mention Tom anatomy | Keep Tom constraints under Tom pack | Forbidden-marker scan across non-Tom packs |
| Mixed variants | Three IPs blend into one prompt | One loaded context contains all IP references | One variant group per IP | Three-IP smoke prompt with separate paths and reference sets |
| Public docs | Docs advertise broad Tom support | README examples generate Tom PNGs before boundary review | Status wording tied to route status | Docs/status consistency checks |
| Public assets | Rendered Tom examples ship early | Tom filenames or images under public examples | Text-first Tom docs until release clearance | Asset filename scan plus explicit allow marker |
| Release | Protected-IP review is skipped | Checklist unchanged from two-IP release | Add Tom-specific release section | Checklist marker checks |

## Recommended Automated Checks

1. **TOM-ROUTE-001:** `routing.md` contains `tom`, explicit aliases, `default: false`, `output_suffix: tom`, required references under `references/ips/tom/`, attribution context, and a non-ambiguous status.
2. **TOM-REFS-001:** Tom canonical pack contains `index.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`, and `rights-boundary.md`.
3. **TOM-RIGHTS-001:** `NOTICE.md` and `references/ips/tom/rights-boundary.md` include rights holder, source, authorization scope, allowed use, restricted use, distribution boundary, and review owner markers.
4. **TOM-DOCS-001:** README, `examples/prompts.md`, `SKILL.md`, and `agents/openai.yaml` describe Tom with the same route status and avoid broad availability claims when status is gated.
5. **TOM-PATHS-001:** Raw and escaped Tom output tokens exist in README and examples: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`.
6. **TOM-LEAK-001:** Non-Tom IP packs do not contain Tom identity markers or Warner rights text.
7. **TOM-SCOPE-001:** Tom prompt and QA do not include Jerry, Spike, franchise logos, title cards, or episode-scene recreation as default behavior.
8. **TOM-ASSETS-001:** Public example directories contain no Tom-rendered assets unless release checklist contains an explicit public-example approval marker.
9. **TOM-SMOKE-001:** Smoke prompts cover explicit Tom planning, explicit Tom generation path, omitted-IP Xiaohei default, and three-IP same-core-idea variant groups.
10. **TOM-RELEASE-001:** `RELEASE_CHECKLIST.md` includes Tom authorization, public docs wording, generated asset policy, prompt leakage scan, route status review, and final rights review.

## Sources

- Repository files read: `.planning/PROJECT.md`, `.planning/codebase/CONCERNS.md`, `.planning/REQUIREMENTS.md`, `README.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/routing.md`, `scripts/validate-skill-package.mjs`.
- Warner Bros. official Tom and Jerry brand page: <https://www.warnerbros.com/brands/tom-and-jerry> (marks the brand page with `TM & © 2026 Warner Bros. Entertainment Inc. All rights reserved.`).
- Warner Bros. official clip and still licensing page: <https://www.warnerbros.com/studio/services/clip-and-still-licensing> (states requests to use Warner Bros., Turner, and Hanna-Barbera clips/stills/posters must be submitted in writing, with license agreement requirements).
- Warner Bros. Discovery licensing submission form, updated 2024-01-19: <https://static-wbd-cdn.wbd.com/s3_assets/wp-content/uploads/2024/04/LICENSING-SUBMISSION-FORM-2024-WBD.pdf> (lists written request details and consumer-product licensing contact path).
- Warner Bros. Discovery company page: <https://www.wbd.com/> (identifies WBD as a media and entertainment company with Warner Bros., Cartoon Network, and related brands; footer states all trademarks are property of their respective owners).
