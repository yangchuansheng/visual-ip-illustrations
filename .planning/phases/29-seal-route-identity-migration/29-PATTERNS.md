# Phase 29: Seal Route Identity Migration - Pattern Map

**Mapped:** 2026-06-15
**Files analyzed:** 12 planned new/modified/deleted files
**Analogs found:** 12 / 12
**Mapping mode:** Inline role-specific GSD pattern mapping because this Codex runtime exposed no `spawn_agent` tool.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/references/routing.md` | route registry | route selection | same file | exact |
| `ian-xiaohei-illustrations/SKILL.md` | skill controller | route selection and file loading | same file | exact |
| `ian-xiaohei-illustrations/references/ips/seal/index.md` | route-local pack index | reference navigation | `ian-xiaohei-illustrations/references/ips/sealos/index.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/source.md` | source/history record | reference navigation | `ian-xiaohei-illustrations/references/ips/sealos/source.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/style-dna.md` | route-local style rules | reference loading | `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md` | route-local IP identity | reference loading | `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` | route-local composition rules | reference loading | `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` | route-local prompt template | reference loading | `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` | exact |
| `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` | route-local QA rules | reference loading | `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` | exact |
| `scripts/validate-skill-package.mjs` | validator | static source assertions | same file, Tom/Ferris/Sealos route checks | exact |
| `scripts/validate-skill-package.test.mjs` | test suite | Node test assertions | same file, route parser tests | exact |
| `.planning/phases/29-seal-route-identity-migration/29-01-PLAN.md` | GSD plan prompt | execution contract | current GSD plan schema | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/references/routing.md` (route registry, route selection)

**Analog:** same file, existing `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos` rows.

**Route table pattern:**

- Keep one Markdown table under `## IP Routes`.
- Keep route ids lowercase and backtick-wrapped.
- Keep aliases as comma-separated backtick-wrapped tokens inside one table cell.
- Keep `default` and `output_suffix` as backtick-wrapped values.
- Keep route-local references as semicolon-separated paths.

**Output path pattern:**

- Raw path marker: `assets/<article-slug>-<suffix>/`.
- Escaped path marker: `assets/&lt;article-slug&gt;-<suffix>/`.
- Mixed-IP line lists every route id and every output path.

### `ian-xiaohei-illustrations/SKILL.md` (skill controller, route selection and file loading)

**Analog:** same file, current Tom/Ferris/Sealos route sections.

**Controller pattern:**

- Route identity is stated in `## Visual IP Routes`.
- Route loading is stated in `## Reference Loading`.
- Alias selection is stated in `### 1. Select the Visual IP Route`.
- Shot-list fields are route-specific under `### 3. Plan the Shot List First`.
- Generation rules are route-specific under `### 4. Generate One Image at a Time`.
- Mixed-IP groups repeat route id, references, output path, and route note.

**Compatibility pattern:**

- The omitted visual IP default remains Xiaohei.
- Canonical invocation remains `$visual-ip-illustrations`.
- Compatibility alias remains `$ian-xiaohei-illustrations`.

### `ian-xiaohei-illustrations/references/ips/seal/*.md` (route-local pack, reference loading)

**Analog:** `ian-xiaohei-illustrations/references/ips/sealos/*.md`.

**Pack shape pattern:**

- Preserve seven route-local files: `index.md`, `source.md`, `style-dna.md`, IP identity file, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`.
- The IP identity filename follows the route id: `seal-ip.md`.
- The index file lists every route-local reference path.
- Phase 29 path migration should keep reference files loadable under `references/ips/seal/`.

### `scripts/validate-skill-package.mjs` (validator, static source assertions)

**Analog:** existing route, output-token, route-stability, and boundary checks in the same file.

**Validator pattern:**

- Route parsing uses `parseMarkdownTable` and route row assertions.
- Output path tokens are collected as raw and HTML-escaped path strings.
- Check IDs are stable strings passed to `defineCheck`.
- Phase 29 should update only route metadata and active controller expectations needed for `seal`.

### `scripts/validate-skill-package.test.mjs` (test suite, Node assertions)

**Analog:** existing tests for route parser behavior, Tom route metadata drift, Ferris route metadata drift, and Sealos route metadata drift.

**Test pattern:**

- Tests use `node:test` and `assert`.
- Fixture mutations use `replaceInFixture`, `replaceAllInFixture`, and direct file writes.
- Route parser tests assert route id order, aliases, output suffixes, defaults, statuses, and required references.

## Shared Patterns

### Route Isolation

Apply to `routing.md` and `SKILL.md`.

- Each selected route loads only its own `required_references`.
- Mixed-IP requests create separate route groups.
- Tom keeps `gated-authorized` and `references/ips/tom/rights.md`.
- Ferris keeps `source-reviewed` and `references/ips/ferris/source.md`.
- Xiaohei keeps the omitted-IP default.

### Output Directory Contract

Apply to `routing.md`, `SKILL.md`, and validation scripts.

- Route id `xiaohei` writes to `assets/<article-slug>-illustrations/`.
- Route id `littlebox` writes to `assets/<article-slug>-littlebox/`.
- Route id `tom` writes to `assets/<article-slug>-tom/`.
- Route id `ferris` writes to `assets/<article-slug>-ferris/`.
- Route id `seal` writes to `assets/<article-slug>-seal/`.

### Bounded Phase 29 Validation

Apply to `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.

- Active route metadata should assert `Seal`, `seal`, `output_suffix=seal`, and `assets/<article-slug>-seal/`.
- Public documentation and release-surface migration remain outside Phase 29.
- Final stale-Sealos leakage hardening remains outside Phase 29.

## No Analog Found

None.

## PATTERN MAPPING COMPLETE

Pattern mapping is complete for Phase 29 planning.
