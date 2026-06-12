# Architecture Research: Authorized Tom IP Integration

**Project:** Multi-IP Article Illustration Skills
**Milestone:** v1.1 Authorized Tom IP Integration
**Researched:** 2026-06-13
**Scope:** Add Tom from Tom and Jerry as a third selectable visual IP while preserving Xiaohei default behavior and Littlebox explicit behavior.
**Confidence:** HIGH for repository integration shape; MEDIUM for rights wording because final authorization terms must be confirmed outside the codebase.

## Recommendation

Integrate Tom as a full vertical IP route, matching the existing Xiaohei and Littlebox architecture:

```text
SKILL.md
  -> references/routing.md
    -> references/ips/xiaohei/*
    -> references/ips/littlebox/*
    -> references/ips/tom/*
  -> image_gen runtime
  -> assets/<article-slug>-<route-suffix>/
```

Tom should land as `references/ips/tom/` with its own index, character identity, style DNA, composition patterns, prompt template, language/label rules if needed, and QA checklist. The central controller should only know how to select the `tom` route, load Tom references, preserve route isolation, and report Tom outputs. Tom-specific anatomy, expression, slapstick motion, visual constraints, rights boundary markers, and QA failures belong inside the Tom pack.

Use `routing.md` as the single route registry. Add one `tom` row with aliases, `default: false`, `output_suffix: tom`, Tom required references, attribution context, and status. Keep Xiaohei as the only default route. Mixed-IP requests should generalize from two groups to N route groups, so a user can request Xiaohei + Littlebox + Tom without cross-loading references.

## Existing Architecture Fit

The current package already has the right extension point:

| Existing Element | Current Role | Tom Integration |
|------------------|--------------|-----------------|
| `ian-xiaohei-illustrations/SKILL.md` | Central controller and progressive reference loader | Add Tom routing text, Tom generation notes, Tom QA dispatch, Tom output reporting |
| `references/routing.md` | Verifiable route metadata table | Add canonical `tom` route row and mixed-route wording |
| `references/ips/xiaohei/` | Default canonical IP pack | Preserve unchanged as compatibility baseline |
| `references/ips/littlebox/` | Explicit selectable IP pack | Preserve unchanged as second-route regression baseline |
| `scripts/validate-skill-package.mjs` | Dependency-free contract validator | Extend route, docs, prompt, NOTICE, smoke, and boundary checks for Tom |
| `scripts/validate-skill-package.test.mjs` | Stable check-order and failure-message tests | Add Tom check IDs and update parser expectations from 2 routes to 3 routes |

## New Components

Create these files:

| File | Responsibility |
|------|----------------|
| `ian-xiaohei-illustrations/references/ips/tom/index.md` | Tom pack navigation, file responsibilities, output path, rights boundary summary |
| `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` | Tom visual language, linework, color, background, motion style, text density, visual vetoes |
| `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` | Tom character identity, recognizable traits, action library, role in article illustrations, failure modes |
| `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` | Tom-specific composition families and article-metaphor patterns |
| `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` | Tom shot-list fields, single-image generation template, edit/regeneration prompts |
| `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` | Tom pass/fail gate, route isolation checks, rights-boundary checks, iteration moves |

Optional only if Tom needs different visible-label policy from Xiaohei:

| File | Responsibility |
|------|----------------|
| `ian-xiaohei-illustrations/references/ips/tom/language-and-labels.md` | Prompt language, visible label language, label repair rules |

Recommended output path:

```text
assets/<article-slug>-tom/
```

Use `output_suffix: tom` because it is compact, matches the route id, and avoids changing Xiaohei's legacy `illustrations` suffix.

## Modified Components

### `ian-xiaohei-illustrations/SKILL.md`

Add Tom in four places:

1. Core positioning: name Tom as an optional third visual IP with authorized-use boundary.
2. Reference list: add Tom pack files under `references/ips/tom/`.
3. Route selection: add Tom aliases and generalize mixed-IP language to route groups.
4. Generation, QA, and delivery: dispatch Tom to Tom prompt, Tom QA, and `assets/<article-slug>-tom/`.

Keep `SKILL.md` as a controller. Do not place Tom's full character bible, detailed style rules, or legal explanation in `SKILL.md`.

### `ian-xiaohei-illustrations/references/routing.md`

Add a route row:

```text
id: tom
display_name: Tom
aliases: Tom; Tom and Jerry; 汤姆; 汤姆猫
default: false
output_suffix: tom
required_references: references/ips/tom/style-dna.md; references/ips/tom/tom-ip.md; references/ips/tom/composition-patterns.md; references/ips/tom/prompt-template.md; references/ips/tom/qa-checklist.md
attribution_context: Tom from Tom and Jerry; rights holder and allowed-use assumption documented in NOTICE.md
status: authorized
```

If `language-and-labels.md` is added, include it in `required_references` and validator expected counts.

### Public Docs

Update:

| File | Required Change |
|------|-----------------|
| `README.md` | Explain Xiaohei default, Littlebox explicit route, Tom authorized route, output paths, validation command |
| `examples/prompts.md` | Add explicit Tom smoke prompt, Tom generation prompt, and mixed-IP prompt that includes Tom |
| `NOTICE.md` | Add Tom source, rights holder, authorization assumption, attribution wording, distribution boundary |
| `RELEASE_CHECKLIST.md` | Add Tom route, Tom references, Tom docs, Tom NOTICE, and validation gates |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Mention selectable Xiaohei, Littlebox, and authorized Tom support while preserving default invocation |

## Data Flow Trace

### Explicit Tom Request

```text
User asks for Tom / 汤姆 / 汤姆猫 article illustration
  -> SKILL.md reads references/routing.md
  -> routing.md selects route id `tom`
  -> agent loads only references/ips/tom/ required_references
  -> article anchors are extracted by shared workflow
  -> Tom shot list is built with Tom action and Tom composition pattern
  -> Tom prompt-template.md produces one prompt per image
  -> host image_gen generates one image per prompt
  -> tom/qa-checklist.md decides pass, edit, or regenerate
  -> final PNGs are saved to assets/<article-slug>-tom/
  -> delivery report names selected IP, count, purpose, save path, and stability notes
```

### Mixed-IP Request

```text
User asks for Xiaohei + Littlebox + Tom variants
  -> SKILL.md extracts one shared core idea
  -> routing.md resolves three route groups
  -> each route group loads only its own required_references
  -> each route group receives an independent shot list and prompt
  -> each route group runs its own QA gate
  -> outputs are written to separate directories:
       assets/<article-slug>-illustrations/
       assets/<article-slug>-littlebox/
       assets/<article-slug>-tom/
```

Route isolation is the key invariant. Tom style terms should never enter Xiaohei or Littlebox prompts, and Littlebox closed-box rules should never enter Tom prompts.

## Build Order

1. **Rights boundary and route contract**
   - Update `NOTICE.md` first with source, rights holder, authorization assumption, attribution wording, and release boundary.
   - Add the `tom` row to `references/routing.md`.
   - This prevents Tom from becoming a normal bundled route without legal context.

2. **Tom canonical pack**
   - Create `references/ips/tom/index.md`.
   - Add Tom identity, style DNA, composition patterns, prompt template, and QA checklist.
   - Keep files parallel to Xiaohei/Littlebox so the validator can reason about the pack mechanically.

3. **Controller dispatch**
   - Update `SKILL.md` to mention Tom in optional IPs, reference loading, route selection, shot-list generation, single-image generation, QA, and delivery.
   - Generalize mixed-IP wording from Xiaohei/Littlebox pairs to route groups.

4. **Public usage surface**
   - Update README, examples, release checklist, and OpenAI agent metadata.
   - Add smoke prompts that exercise omitted default, explicit Xiaohei, explicit Littlebox, explicit Tom, and mixed-IP variants.

5. **Validator and tests**
   - Extend required file lists, route parsing expectations, output path tokens, prompt markers, IP markers, docs markers, NOTICE markers, smoke markers, and boundary markers.
   - Update tests for stable check order and route count.

6. **Run validation**
   - Run the validator script.
   - Run the Node test file.
   - Inspect git diff for accidental edits to Xiaohei and Littlebox contracts.

## Validation Dependencies

Extend `scripts/validate-skill-package.mjs` in these dependency clusters:

| Cluster | Current Pattern | Tom Addition |
|---------|-----------------|--------------|
| Package shape | `requiredPackageFiles()` includes Xiaohei and Littlebox refs | Add Tom index and operational refs |
| Operational refs | `xiaoheiOperationalRefs()`, `littleboxOperationalRefs()` | Add `tomOperationalRefs()` |
| Route table | `ROUTE-XH-001`, `ROUTE-LB-001`, route ids | Add `ROUTE-TOM-001`, expect route ids `xiaohei`, `littlebox`, `tom` |
| Defaults | Xiaohei only default; Littlebox false | Assert Tom `default=false` |
| Ref counts | Xiaohei 5, Littlebox 6 | Tom 5 or 6 depending on language file |
| Output paths | `illustrations`, `littlebox` tokens | Add raw and escaped `assets/<article-slug>-tom/` tokens |
| Mixed routes | separate route groups for two IPs | Generalize to each selected route group |
| IP pack markers | `IP-XH-001`, `IP-LB-001` | Add `IP-TOM-001` with objective identity/style/action/output markers |
| Prompt checks | `PROMPT-XH-001`, `PROMPT-LB-*` | Add `PROMPT-TOM-001` for planning fields and generation markers |
| Docs checks | docs mention two route names and paths | Require Tom route name, canonical path, output path, and smoke prompt |
| Notice checks | Ian and Littlebox markers | Add `NOTICE-TOM-001` with source, rights holder, authorization, attribution, boundary |
| Smoke checks | default, Xiaohei, Littlebox, mixed | Add explicit Tom and mixed-with-Tom smoke checks |
| Boundary checks | image/runtime/package boundary | Add protected-IP rights-boundary marker |

Extend `scripts/validate-skill-package.test.mjs`:

| Test Area | Required Update |
|-----------|-----------------|
| `requiredCheckIds` | Add Tom check IDs in stable order |
| stable order tests | Insert Tom route/ref/prompt/docs/notice/smoke checks after matching existing clusters |
| parser helper test | Expect `routes.length === 3` and route ids `["xiaohei", "littlebox", "tom"]` |
| summary count | Update total/pass count |
| failure fixture | Add at least one Tom failure path once Tom validator checks exist |

## Validation Sequence

Recommended commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff -- ian-xiaohei-illustrations/references/ips/xiaohei ian-xiaohei-illustrations/references/ips/littlebox
git diff --check
```

Acceptance:

- Validator exits zero.
- Node tests exit zero.
- `routing.md` has exactly one default route: `xiaohei`.
- Tom references resolve inside `ian-xiaohei-illustrations/`.
- Tom output path appears in raw and escaped forms where docs/validator require both.
- NOTICE includes Tom rights-boundary markers before public docs present Tom as selectable.
- Xiaohei root legacy reference parity remains unchanged.
- Littlebox prompt and QA markers remain unchanged.

## Architecture Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Tom rules added directly to `SKILL.md` | Controller becomes hard to maintain and route leakage becomes likely | Keep Tom details in `references/ips/tom/` |
| Tom route added before rights boundary docs | Public package may imply broader redistribution rights than intended | Land NOTICE and release-boundary wording first |
| Mixed-IP wording stays pair-specific | Tom variants may bypass route isolation | Replace pair language with selected route groups |
| Validator hard-codes two routes | Tom files can drift silently | Add Tom-specific checks and update parser tests |
| Tom prompt overuses brand/cartoon details | Article illustrations may become character fan art instead of cognitive-action diagrams | QA should require Tom to perform the concept action in an article illustration |
| Output suffix collides with legacy paths | Generated assets become ambiguous | Use `assets/<article-slug>-tom/` |

## Phase Order for Roadmap

1. **Tom Rights and Route Contract**
   - NOTICE boundary, routing row, output suffix, aliases, status.

2. **Tom IP Pack**
   - Index, style DNA, character identity, composition patterns, prompt template, QA checklist.

3. **Skill Controller Integration**
   - SKILL route selection, reference loading, Tom generation/QA/delivery, N-route mixed handling.

4. **Docs and Examples**
   - README, examples, release checklist, agent metadata.

5. **Validation Hardening**
   - Validator and Node tests for Tom route, references, prompts, docs, NOTICE, smoke, output paths, and boundary markers.

This order protects the existing behavior first, then makes Tom selectable, then proves the package contract with local validation.
