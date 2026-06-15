# Phase 30 Patterns: Seal Pack Debranding

## PATTERN MAPPING COMPLETE

## File Classification

| File | Role | Closest Existing Analog | Phase 30 Treatment |
|------|------|-------------------------|--------------------|
| `ian-xiaohei-illustrations/references/ips/seal/index.md` | Route-local pack navigation and shared operational markers | `references/ips/ferris/index.md` and current Seal index | Rename active identity and shared gates to product-neutral Seal vocabulary. |
| `ian-xiaohei-illustrations/references/ips/seal/source.md` | Source-history and sample policy record | `references/ips/ferris/source.md` and current Seal source record | Convert active authority to product-neutral source-history authority and bound Sealos wording to historical notes. |
| `ian-xiaohei-illustrations/references/ips/seal/style-dna.md` | Visual style and identity gates | `references/ips/xiaohei/style-dna.md`, `references/ips/ferris/style-dna.md` | Preserve hoodie seal markers and replace platform framing with article-metaphor style rules. |
| `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md` | Character identity and action responsibility | `references/ips/ferris/ferris-ip.md` and current Seal identity file | Define Seal as a product-neutral hoodie seal character performing article cognition. |
| `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` | Composition families, object pools, action pools | `references/ips/xiaohei/composition-patterns.md`, current Seal composition file | Keep eight composition families and swap product props for article metaphor props. |
| `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` | Shot-list fields, generation prompt, edit prompts, delivery reminder | `references/ips/ferris/prompt-template.md`, current Seal prompt file | Rewrite active prompt/edit language around Seal, product-neutral objects, sparse labels, and logo-free identity. |
| `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` | Pass/fail gates, repair moves, delivery judgment | `references/ips/ferris/qa-checklist.md`, current Seal QA file | Rename failure gates to Seal, preserve hoodie/no-logo checks, and add product-neutral route isolation. |

## Existing Route Interfaces

`ian-xiaohei-illustrations/references/routing.md` already defines the live route contract:

- id: `seal`
- display_name: `Seal`
- aliases: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`
- default: `false`
- output_suffix: `seal`
- required references: all seven files under `references/ips/seal/`
- status: `active`

`ian-xiaohei-illustrations/SKILL.md` already loads:

- `references/ips/seal/prompt-template.md`
- `references/ips/seal/composition-patterns.md`
- `references/ips/seal/qa-checklist.md`
- `assets/<article-slug>-seal/`

## Local Style Pattern

Use compact ATX Markdown:

- One clear H1 per file.
- Short route contract markers near the top.
- Short imperative bullets.
- English default prose.
- Exact paths in backticks.
- Route-local source terms repeated in files that drive prompts, edits, QA, and delivery.

## Shared Target Markers

Operational Seal files should converge on these markers:

- `Route id: `seal`.`
- `Route status: `active`.`
- `Output path: `assets/<article-slug>-seal/`.`
- `Source-history authority: `source.md`.`
- `Hoodie seal identity note: preserve the product-neutral Seal character with white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail.`
- `Logo-free note: cap, hoodie chest, mascot body, props, and scene stay plain and mark-free.`

## Scope Boundaries

Phase 30 modifies route-local Seal pack files only.

Phase 31 handles public docs, examples, NOTICE, release checklist, skill broad docs, and agent metadata.

Phase 32 handles validator check-id cleanup, stale leakage fixtures, final evidence, and UAT.
