# Phase 44 Validation Strategy

## Scope

Phase 44 validates only the Cai Xukun route-local canonical pack and the Cai Xukun `routing.md` required-reference expansion:

- `skills/visual-ip-illustrations/references/routing.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/index.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md`

The validation target is deterministic source inspection for route-local pack completeness, uploaded-image identity markers, public-figure likeness guardrails, planning fields, prompt/edit gates, QA failure categories, routing required references, route leakage, and diff hygiene.

Full validator and Node regression updates belong to Phase 47 because `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` must cover route parser updates, eight-route fixture expansion, expected check totals, route ordering, public docs and NOTICE surfaces, release checklist gates, public sample approval parsing, leakage fixtures, smoke prompt fixtures, and final release evidence after Phases 45 and 46 create the runtime and public surfaces those tests need.

## Requirement Verification Map

| Requirement | Phase 44 Verification Method | Pass Criteria | Fail Criteria |
|-------------|------------------------------|---------------|---------------|
| PACK-01 | File existence, marker grep across `caixukun/*.md`, and route-local navigation inspection. | `index.md`, `source.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` exist under `references/ips/caixukun/`; operational files repeat route id `caixukun`, `Cai Xukun`, `gated-public-figure`, `assets/<article-slug>-caixukun/`, uploaded authority, public sample review boundary, and the fixed marker list. | Any required pack file is absent, the pack is split outside `references/ips/caixukun/`, or operational files omit source, likeness, sample, output, identity, or route-isolation markers. |
| PACK-02 | Grep `prompt-template.md` for planning fields. | `prompt-template.md` includes Placement, Core idea, Structure type, Cai Xukun mascot state, Cai Xukun mascot action, Supporting objects, Visible labels, Likeness boundary note, Source-image context note, and Output path. | Any route-specific planning field is absent or output path does not use `assets/<article-slug>-caixukun/`. |
| PACK-03 | Grep `prompt-template.md`, `style-dna.md`, `caixukun-ip.md`, and `composition-patterns.md` for cognitive-action and sparse style markers. | The pack includes `central cognitive article action`, `The metaphor should lose its meaning if Cai Xukun is removed`, `sparse 16:9`, white-background style, and the uploaded marker list. | Prompt or identity guidance lets the mascot become decorative, removable, realistic-person output, generic yellow duck drift, or green-background carryover. |
| PACK-04 | Grep `prompt-template.md` for edit prompt headings. | `prompt-template.md` includes Stronger Cai Xukun Participation, Uploaded-Image Identity Repair, Title Removal, Text Reduction, Public-Figure Likeness Boundary Repair, Route Leakage Repair, Green-Background Carryover Repair, and Unaffected-Content Preservation. | Any required edit prompt is absent, or repair wording lacks unaffected-content preservation and route boundary controls. |
| PACK-05 | Grep `qa-checklist.md` for failure categories and delivery gates. | `qa-checklist.md` rejects realistic-person output, generic yellow duck drift, missing idol-hair, missing outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, and copied composition; it also preserves public sample review boundary and `assets/<article-slug>-caixukun/` delivery path. | Any required QA rejection category or delivery/public-sample boundary marker is absent. |

## Automated Checks

Run the Phase 44 file existence check:

```bash
test -f skills/visual-ip-illustrations/references/ips/caixukun/index.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md
```

Pass criteria:

- All six Phase 44 operational files exist.
- `source.md` remains present as the Phase 43 authority file.

Fail criteria:

- Any operational file is absent.

Run the route pack marker check:

```bash
rg -n 'Route id: `caixukun`|gated-public-figure|assets/<article-slug>-caixukun|yellow duck-like rounded mascot body|silver layered idol hair|realistic-person portrait output|green reference background|Public generated Cai Xukun samples require release review' \
  skills/visual-ip-illustrations/references/ips/caixukun/*.md
```

Pass criteria:

- The command finds route id, route status, output path, uploaded marker, public-figure boundary, green-background source context, and public sample review markers across the pack.

Fail criteria:

- Any required marker class is absent from the route-local pack.

Run the PACK-02 planning fields check:

```bash
rg -n "Cai Xukun mascot state|Cai Xukun mascot action|Likeness boundary note|Output path: assets/<article-slug>-caixukun/" \
  skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md
```

Pass criteria:

- `prompt-template.md` contains the Cai Xukun route-specific planning fields and output path.

Fail criteria:

- Planning fields are generic or omit route-specific mascot state, action, likeness boundary, or output path.

Run the PACK-03 and PACK-04 prompt/edit check:

```bash
rg -n "central cognitive article action|The metaphor should lose its meaning if Cai Xukun is removed|sparse 16:9|Stronger Cai Xukun Participation|Uploaded-Image Identity Repair|Title Removal|Text Reduction|Public-Figure Likeness Boundary Repair|Route Leakage Repair|Green-Background Carryover Repair|Unaffected-Content Preservation" \
  skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md
```

Pass criteria:

- `prompt-template.md` contains cognitive-action prompt wording and every required edit prompt heading.

Fail criteria:

- The prompt lets Cai Xukun act as decoration or any required edit path is absent.

Run the PACK-05 QA failure-category check:

```bash
rg -n "realistic-person output|generic yellow duck drift|missing idol-hair|celebrity endorsement claims|passive placement|route leakage|excessive text|green-background carryover|copied composition" \
  skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md
```

Pass criteria:

- `qa-checklist.md` contains every required failure category from PACK-05.

Fail criteria:

- Any failure category is absent from the QA checklist.

Run the `routing.md` required references expansion check:

```bash
rg -n "references/ips/caixukun/index.md.*references/ips/caixukun/source.md.*references/ips/caixukun/style-dna.md.*references/ips/caixukun/caixukun-ip.md.*references/ips/caixukun/composition-patterns.md.*references/ips/caixukun/prompt-template.md.*references/ips/caixukun/qa-checklist.md" \
  skills/visual-ip-illustrations/references/routing.md
```

Pass criteria:

- The Cai Xukun `required_references` cell includes all seven route-local references in the expected order.
- Cai Xukun route metadata remains `default=false`, output suffix `caixukun`, and status `gated-public-figure`.

Fail criteria:

- The required references remain source-only or omit any Phase 44 file.
- Route metadata drifts while expanding references.

Run the non-Cai route leakage check:

```bash
sh -c 'if rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|yellow duck-like rounded mascot body|silver layered idol hair|Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|realistic-person portrait output|green reference background" skills/visual-ip-illustrations/references/ips/xiaohei skills/visual-ip-illustrations/references/ips/littlebox skills/visual-ip-illustrations/references/ips/tom skills/visual-ip-illustrations/references/ips/ferris skills/visual-ip-illustrations/references/ips/seal skills/visual-ip-illustrations/references/ips/openclaw skills/visual-ip-illustrations/references/ips/gopher; then exit 1; fi'
```

Pass criteria:

- The command exits 0 and prints no matches from non-Cai route packs.

Fail criteria:

- Any Cai Xukun token, uploaded path, route status, identity marker, public-figure boundary marker, or source-image context marker appears in Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, or Go Gopher pack files.

Run the diff hygiene check:

```bash
git diff --check -- \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun
```

Pass criteria:

- `git diff --check` exits successfully.
- The diff has no whitespace errors or conflict markers in Phase 44 implementation files.

Fail criteria:

- `git diff --check` reports trailing whitespace, space-before-tab errors, conflict markers, or malformed patch hygiene.

## Phase 47 Ownership

Phase 44 completion uses source checks that can run before runtime integration and public documentation exist. Phase 47 owns full validator and Node updates because those checks need Phase 45 and Phase 46 surfaces:

- `scripts/validate-skill-package.mjs` route arrays, route parser expectations, output path token arrays, docs token arrays, language allowlist entries for `蔡徐坤`, route-specific check IDs, leakage checks, public asset gates, generated sample gates, smoke prompts, and release evidence.
- `scripts/validate-skill-package.test.mjs` `requiredCheckIds`, expected summary totals, `routes.length === 8`, route id order, output path assertions, public/generated approval parser fixtures, leakage fixtures, public sample fixture names, and full-pass evidence.
- Final release evidence for validator output, Node test output, `git diff --check`, Cai Xukun route smoke, uploaded-image identity smoke, likeness-boundary smoke, docs consistency, leakage scan, and public sample gate status.

Phase 44 passes when the route-local pack is grep-verifiable, routing required references point to the complete pack, non-Cai route leakage scan returns no matches, and diff hygiene is clean. Validator and Node suites are Phase 47 acceptance gates.
