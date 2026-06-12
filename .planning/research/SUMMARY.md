# Project Research Summary

**Project:** Multi-IP Article Illustration Skills
**Milestone:** v1.1 Authorized Tom IP Integration
**Domain:** Codex Skill package for route-isolated article illustration IPs
**Researched:** 2026-06-13
**Confidence:** MEDIUM-HIGH

## 1. Executive Summary

This milestone adds Tom from *Tom and Jerry* as a third selectable visual IP to an existing documentation-first Codex Skill package. The established product shape should remain intact: Markdown reference packs, `SKILL.md` routing, `agents/openai.yaml` metadata, static examples, host-provided `image_gen`, and a dependency-free Node validator. Xiaohei remains the only default route, Littlebox remains an explicit route, and Tom becomes an explicit protected-character route.

The recommended implementation is a vertical Tom route slice. Add `references/ips/tom/` as an isolated canonical pack, register `tom` in `references/routing.md`, update runtime routing and public docs, then extend the validator and release checklist. Tom-specific character identity, physical-comedy action language, prompt templates, QA checks, visible-label policy, and rights boundaries belong inside the Tom pack; shared workflow files should only select routes, load required references, and report outputs.

The core risk is rights ambiguity. Tom is a protected commercial character, so attribution alone is insufficient as a release control. The roadmap should front-load rights-boundary documentation, route status markers, public asset policy, and release gates before presenting Tom as a normal bundled route. The current validator may fail during early v1.1 work because previous phase working directories were cleared; treat that as a validation adaptation requirement for this milestone.

## 2. Stack Additions

Keep the stack unchanged. This remains a lightweight Codex Skill package with no application runtime, bundler, database, server, or package manager requirement.

Required additions:

- `ian-xiaohei-illustrations/references/ips/tom/` canonical pack for Tom-specific identity, style, prompt, composition, QA, and rights boundary.
- `references/routing.md` row for `tom` with explicit aliases, `default: false`, `output_suffix: tom`, required references, attribution context, rights status, and route status.
- `SKILL.md` updates for Tom route selection, progressive reference loading, planning fields, generation dispatch, QA dispatch, mixed-IP grouping, output paths, and delivery reports.
- `agents/openai.yaml` copy that names selectable Xiaohei, Littlebox, and authorized Tom support while preserving Xiaohei as the implicit default.
- `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md` updates for Tom usage, route status, output path, source notes, authorization boundary, and release gates.
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` extensions for Tom route, file presence, docs markers, path tokens, smoke prompts, protected-IP markers, leakage checks, and public asset policy.

Critical version requirements are minimal: use the existing Node runtime with built-in modules, existing Codex Skill loading behavior, host `image_gen`, and repository-local Markdown/YAML/static assets.

## 3. Feature Table Stakes

The Tom route must feel first-class to users and auditable to maintainers.

- Explicit Tom route selection through `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`, with `selected IP: Tom` behavior.
- Xiaohei default preservation when the user omits a visual IP.
- Route-isolated Tom references under `references/ips/tom/`.
- Tom shot-list fields for article placement, core idea, structure type, Tom state, Tom action, objects, sparse labels, output path, and rights-status note.
- Tom generation prompt template for one 16:9 article body illustration where Tom performs the cognitive action.
- Tom QA checklist for identity, active participation, article readability, visible text, output path, rights markers, and source-scene avoidance.
- Route-specific output path `assets/<article-slug>-tom/`, plus escaped documentation token `assets/&lt;article-slug&gt;-tom/`.
- Mixed-IP grouping across Xiaohei, Littlebox, and Tom with separate references, prompts, QA, and output directories.
- Edit prompts for stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.
- NOTICE attribution and authorization-boundary section that records source work, rights holder, allowed-use assumption, redistribution boundary, and review requirement.
- Release checklist gates for Tom route smoke tests, rights review, prompt leakage scan, public generated-asset review, and final release signoff.

Defer broader cast support, generic third-party IP import, hybrid Xiaohei/Littlebox/Tom characters, public generated Tom galleries, and any hosted UI or build runtime.

## 4. Architecture Integration Points

Tom should integrate as a full vertical route:

```text
SKILL.md
  -> references/routing.md
    -> references/ips/xiaohei/*
    -> references/ips/littlebox/*
    -> references/ips/tom/*
  -> image_gen runtime
  -> assets/<article-slug>-<route-suffix>/
```

Primary changes:

1. `references/ips/tom/index.md` - Tom pack navigation, file responsibilities, output path, and rights-boundary pointer.
2. `references/ips/tom/style-dna.md` - Tom article-illustration visual language, linework, color, motion, background, density, and vetoes.
3. `references/ips/tom/tom-ip.md` - character identity, recognizable traits, allowed actions, article-role behavior, and failure modes.
4. `references/ips/tom/composition-patterns.md` - Tom-appropriate cognitive-action metaphors and anti-repeat rules.
5. `references/ips/tom/language-and-labels.md` - prompt language and visible-label policy if Tom needs rules beyond the shared route contract.
6. `references/ips/tom/prompt-template.md` - shot-list fields, single-image generation template, and edit/regeneration prompts.
7. `references/ips/tom/qa-checklist.md` - pass/fail checks for identity, action, text, background, density, route isolation, and rights safety.
8. `references/ips/tom/rights-boundary.md` - protected-character authorization record, allowed use, restricted use, distribution boundary, sample policy, and reviewer.

`SKILL.md` should stay a controller. It should select the route, load Tom required references only for Tom tasks, keep Xiaohei and Littlebox references isolated, and report Tom outputs under `assets/<article-slug>-tom/`.

## 5. Critical Pitfalls

1. **Treating Tom as a normal bundled IP** - add rights-boundary docs and route status before public Tom examples or generated assets land.
2. **Confusing attribution with permission** - split `NOTICE.md` into source/attribution and authorization-boundary sections for Tom.
3. **Shipping public Tom rendered examples too early** - keep v1.1 text-first until public generated derivative distribution is explicitly reviewed.
4. **Prompt leakage into Xiaohei or Littlebox** - keep Tom identity, anatomy, Warner rights text, and physical-comedy constraints inside Tom-approved files and docs sections.
5. **Two-IP validator assumptions** - update route IDs, output path tokens, required reference counts, smoke prompts, docs checks, and parser tests for three routes.
6. **Accidental Tom defaulting** - enforce exactly one default route, `xiaohei`, and keep Tom aliases explicit.
7. **Weak Tom identity QA** - require Tom as the active article-illustration operator and block generic cats, direct source-frame recreation, show logos, title cards, and unauthorized extra characters.
8. **Jerry or broader franchise scope creep** - keep the route named `tom`; treat Jerry and other characters as a future explicitly authorized milestone.

## 6. Requirements Implications

Requirements should be route-first and rights-aware:

- A normal generation has one selected IP. Mixed-IP requests create separate route groups.
- Omitted IP resolves to Xiaohei and uses `assets/<article-slug>-illustrations/`.
- Explicit Littlebox keeps the current `assets/<article-slug>-littlebox/` behavior.
- Explicit Tom resolves only through clear Tom aliases and uses `assets/<article-slug>-tom/`.
- Tom route acceptance requires both product behavior and protected-IP controls.
- Tom public docs must carry the same route status as `routing.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.
- Validator acceptance criteria should include route presence, default preservation, required Tom pack files, output path tokens, docs markers, NOTICE markers, smoke prompts, leakage checks, and public asset policy.
- Existing validator failures caused by cleared previous phase working directories should be captured as v1.1 validator adaptation work, with fixture/path assumptions refreshed during validation hardening.

## 7. Roadmap Recommendation

Suggested phase structure:

### Phase 1: Tom Rights and Route Contract

**Rationale:** Tom needs an auditable authorization boundary before it appears as a selectable protected-character route.
**Delivers:** `NOTICE.md` Tom section, `rights-boundary.md` skeleton, `routing.md` Tom row, aliases, `default: false`, `output_suffix: tom`, route status, and raw/escaped path tokens.
**Avoids:** attribution-as-permission, accidental defaulting, output ambiguity, and public docs overpromising.

### Phase 2: Tom Canonical Pack

**Rationale:** Tom behavior should live in isolated references so protected-character rules cannot leak into Xiaohei or Littlebox.
**Delivers:** Tom index, style DNA, character identity, composition patterns, language/labels if needed, prompt template, QA checklist, and rights-boundary details.
**Avoids:** weak identity QA, generic cat drift, source-frame recreation, and broader franchise scope creep.

### Phase 3: Skill Controller Integration

**Rationale:** Runtime behavior should generalize from two IPs to selected route groups while preserving existing route behavior.
**Delivers:** `SKILL.md` route selection, Tom reference loading, planning fields, generation/editing dispatch, QA dispatch, mixed-IP grouping, delivery reports, and Tom output path handling.
**Avoids:** prompt leakage, blended mixed-IP prompts, Xiaohei regression, and Littlebox route regression.

### Phase 4: Docs, Examples, and Release Surface

**Rationale:** Public-facing docs should describe only behavior that has route and rights controls.
**Delivers:** README Tom section, prompt examples, smoke prompts, mixed-IP examples, agent metadata, release checklist gates, and public generated-sample policy.
**Avoids:** public docs overpromising, premature rendered Tom assets, and mismatched route status language.

### Phase 5: Validation Hardening

**Rationale:** The package needs deterministic local gates for three-route behavior and protected-IP boundaries.
**Delivers:** extended Node validator, updated Node tests, Tom check IDs, route parser expectations, docs/path/NOTICE/smoke checks, non-Tom leakage scan, public asset scan, and adapted fixtures for the cleared v1.1 working-directory state.
**Avoids:** partial integration passing validation, stale two-IP assumptions, and release checklist drift.

Research flags:

- **Needs deeper planning:** Phase 1, because final authorization scope and release wording depend on maintainer-provided records.
- **Needs deeper planning:** Phase 5, because current validator assumptions and cleared previous phase directories require adaptation.
- **Standard patterns:** Phases 2 and 3 use established isolated IP-pack and controller-dispatch patterns.
- **Standard patterns with review gate:** Phase 4 is straightforward documentation work once route status and rights boundary are fixed.

## 8. Validation and Release Gates

Required validation commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Tom-specific automated gates should include:

- `TOM-ROUTE-001`: `routing.md` includes Tom aliases, `default: false`, `output_suffix: tom`, required references, attribution context, and non-ambiguous route status.
- `TOM-REFS-001`: Tom canonical pack contains the required operational references plus `rights-boundary.md`.
- `TOM-RIGHTS-001`: `NOTICE.md` and Tom rights boundary include source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner markers.
- `TOM-DOCS-001`: README, prompt examples, `SKILL.md`, and agent metadata use consistent Tom status wording.
- `TOM-PATHS-001`: raw and escaped Tom output tokens are present.
- `TOM-LEAK-001`: non-Tom packs do not contain Tom identity markers or Warner rights text.
- `TOM-SCOPE-001`: Tom prompts and QA exclude default Jerry, Spike, franchise logos, title cards, and episode-scene recreation.
- `TOM-ASSETS-001`: public example directories contain no Tom-rendered assets until the release checklist has explicit approval.
- `TOM-SMOKE-001`: smoke prompts cover omitted-IP Xiaohei default, explicit Xiaohei, explicit Littlebox, explicit Tom, and three-IP same-idea variants.
- `TOM-RELEASE-001`: release checklist includes Tom authorization review, route status review, public docs wording, generated asset policy, prompt leakage scan, and final rights review.

Release should require zero validator failures, passing Node tests, completed Tom rights review, public generated-asset decision, unchanged Xiaohei default behavior, unchanged Littlebox explicit behavior, and separate output directories for all selected routes.

## 9. Source Notes

Primary repository sources:

- `.planning/research/STACK.md` - static stack recommendation, Tom pack shape, files to modify, validator changes, and roadmap implication.
- `.planning/research/FEATURES.md` - Tom table stakes, differentiators, anti-features, user flows, maintainer duties, and rights-boundary fields.
- `.planning/research/ARCHITECTURE.md` - vertical route architecture, data flow, integration points, build order, validation dependencies, and phase order.
- `.planning/research/PITFALLS.md` - protected-IP risks, warning signs, prevention strategies, automated checks, and phase-specific warnings.

Official Warner Bros. / Warner Bros. Discovery sources referenced by researchers:

- Warner Bros. official Tom and Jerry brand page - used for public brand/source context.
- Warner Bros. clip and still licensing information - used for written-request licensing process context.
- Warner Bros. Discovery licensing submission form, updated 2024-01-19 - used for licensing request and consumer-product licensing context.
- Warner Bros. Terms of Use and Warner Bros. Discovery company pages - used for general IP, trademark, and rights-holder context.

Confidence:

| Area | Confidence | Notes |
|---|---|---|
| Stack | HIGH | Existing package already uses Markdown/YAML/static assets and dependency-free Node validation. |
| Features | MEDIUM-HIGH | User behavior is clear; final authorization scope depends on maintainer records. |
| Architecture | HIGH | Existing Xiaohei/Littlebox route architecture supports a third isolated IP route. |
| Pitfalls | MEDIUM-HIGH | Repository-local risks are high confidence; legal/release wording needs rights review. |

Overall confidence is MEDIUM-HIGH. The unresolved gap is the exact authorization scope for Tom, including public docs, generated samples, redistribution, commercial use, and broader cast boundaries.

---
*Research completed: 2026-06-13*
*Ready for roadmap: yes*
