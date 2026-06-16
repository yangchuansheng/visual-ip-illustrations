# Phase 40 Research: Go Gopher Skill Controller Integration

## Scope

Phase 40 wires the existing Go Gopher route and route-local pack into runtime controller behavior.

The phase covers `RUN-01`, `RUN-02`, `RUN-03`, and `RUN-04`.

Phase 40 implementation scope is centered on:

- `ian-xiaohei-illustrations/SKILL.md`
- `ian-xiaohei-illustrations/references/routing.md`

Phase 41 owns README variants, prompt examples, NOTICE, release checklist, and broad `agents/openai.yaml` discovery copy. Phase 42 owns validator expansion, Node regression expansion, leakage fixtures, public sample gates, and final release evidence.

## Source Facts

Use Phase 38 and Phase 39 as authoritative local evidence:

- Route id: `gopher`.
- Display name: `Go Gopher`.
- Route status: `source-reviewed`.
- Default marker: `default=false`.
- Output suffix: `gopher`.
- Output path: `assets/<article-slug>-gopher/`.
- Source authority: `references/ips/gopher/source.md`.
- Local visual authority: root `gopher.png`.
- Creator attribution: Renee French.
- License boundary: Creative Commons Attribution 4.0.
- Public generated Go Gopher samples require release review.
- Go logo identity and official Go project affiliation, approval, sponsorship, and endorsement claims stay outside the positive route identity.

The locked local visual markers are:

- blue rounded upright body
- rounded head/body silhouette
- small rounded ears
- large simple eyes
- black nose
- buck teeth
- beige muzzle and paws
- compact limbs
- friendly standing posture
- black outline
- white sticker-like border

## Existing Patterns

OpenClaw Phase 35 is the closest controller-integration precedent. It added a source-reviewed visual-authority route to `SKILL.md` across:

- frontmatter description
- route overview
- reference loading
- route selection
- shot-list planning fields
- mixed-IP groups
- one-image generation dispatch
- QA and repair routing
- save paths
- output contract
- route-leakage delivery guard

Go Gopher should follow the same placement and parity pattern while using Go Gopher route facts from Phase 38 and the seven-file pack from Phase 39.

`references/routing.md` already contains Go Gopher selection rules, metadata, output paths, escaped output markers, and mixed-IP output grouping. Its `gopher` route row still lists only `references/ips/gopher/source.md`; Phase 40 should expand that row to the seven-file Phase 39 pack so progressive reference loading matches runtime behavior.

## Implementation Surfaces

### `ian-xiaohei-illustrations/references/routing.md`

Update the `gopher` row `required_references` to:

- `references/ips/gopher/index.md`
- `references/ips/gopher/source.md`
- `references/ips/gopher/style-dna.md`
- `references/ips/gopher/gopher-ip.md`
- `references/ips/gopher/composition-patterns.md`
- `references/ips/gopher/prompt-template.md`
- `references/ips/gopher/qa-checklist.md`

Keep the existing alias boundary, source/license note, raw output path, escaped output marker, mixed-IP output grouping, and `default=false` route row.

### `ian-xiaohei-illustrations/SKILL.md`

Add Go Gopher to every runtime controller surface where OpenClaw, Seal, Ferris, and Tom already appear:

- frontmatter description
- Visual IP Routes
- Reference Loading
- Select the Visual IP Route
- Plan the Shot List First
- Mixed-IP shot lists
- Generate One Image at a Time
- QA and Iteration
- Save and Deliver
- Output Contract
- route-leakage delivery guard

Go Gopher controller text should keep these markers visible:

- route id `gopher`
- display name `Go Gopher`
- `default=false`
- output suffix `gopher`
- route status `source-reviewed`
- source pointer `references/ips/gopher/source.md`
- root `gopher.png` visual authority
- output path `assets/<article-slug>-gopher/`
- escaped marker `assets/&lt;article-slug&gt;-gopher/`
- Renee French attribution
- Creative Commons Attribution 4.0 boundary
- public sample review boundary
- route isolation status

## Verification Strategy

Phase 40 acceptance should use targeted text checks because current validator and Node suites still encode the known seventh-route baseline from Phases 38 and 39.

Hard acceptance checks:

```bash
rg -n "Go Gopher|gopher|references/ips/gopher|assets/<article-slug>-gopher|assets/&lt;article-slug&gt;-gopher|source-reviewed" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
```

```bash
rg -n "Gopher shot-list entries|Go Gopher loads only|Go Gopher high-risk failures|Go Gopher repair behavior|Go Gopher block|route-leakage delivery guard" ian-xiaohei-illustrations/SKILL.md
```

```bash
rg -n "references/ips/gopher/index.md.*references/ips/gopher/source.md.*references/ips/gopher/style-dna.md.*references/ips/gopher/gopher-ip.md.*references/ips/gopher/composition-patterns.md.*references/ips/gopher/prompt-template.md.*references/ips/gopher/qa-checklist.md" ian-xiaohei-illustrations/references/routing.md
```

```bash
git diff --check -- ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
```

Diagnostic baseline checks:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
```

If these commands fail only with the known seventh-route baseline from Phases 38 and 39, record the result as Phase 42-deferred. Any new failure tied to Phase 40 controller wording, route-reference expansion, output path markers, or route isolation should be fixed in Phase 40.

## Risks and Mitigations

- Route parity drift: use OpenClaw controller placement as the checklist and verify every runtime surface with targeted `rg`.
- Progressive loading drift: expand `routing.md` `gopher` required references to the full Phase 39 pack and mirror the same seven files in `SKILL.md`.
- Default-route regression: verify route-table defaults keep Xiaohei as the only omitted-IP default and Go Gopher as `default=false`.
- Mixed-IP leakage: require Go Gopher as a separate mixed-IP route group with its own references, prompt template, composition rules, QA, edit gates, output suffix, route note, and output directory.
- Source/license drift: keep `source-reviewed`, Renee French, Creative Commons Attribution 4.0, `source.md`, root `gopher.png`, public sample review boundary, Go logo boundary, and official endorsement boundary attached to Go Gopher runtime text.
- Phase bleed: keep README, examples, NOTICE, release checklist, broad agent metadata, validator expansion, Node tests, and release evidence in mapped downstream phases.

## Recommended Plan Shape

One autonomous sequential plan is sufficient because both implementation targets are shared controller files.

1. Expand route reference truth and top-level runtime route activation.
2. Add Go Gopher planning, mixed-IP, generation, edit, and QA dispatch.
3. Add save/delivery reporting and verification evidence, with validator and Node failures recorded as Phase 42-deferred only when they match the known seventh-route baseline.
