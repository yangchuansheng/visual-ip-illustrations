# Quick Plan: Align README Visual IP Route Cards

Quick id: 260615-kuz
Date: 2026-06-15
Status: planned

## Problem

In `README.md`, `## Visual IP Routes` gives Xiaohei a compact visible shape: one short paragraph followed by `Aliases:`. Tom, Ferris, and Seal carry extra operational metadata directly inside their route cards, making the visible route list uneven. The README should keep the same route facts while moving operational metadata into `### Route Reference` or nearby shared reference text.

## Context Read

- `.planning/STATE.md`
- `AGENTS.md`
- `README.md`

## Scope

- Edit `README.md`.
- In `## Visual IP Routes`, make `### Tom`, `### Ferris`, and `### Seal` match Xiaohei's visible format exactly: one compact paragraph, blank line, then `Aliases:`.
- Move operational route metadata into `### Route Reference` or adjacent shared reference text: route status, aliases, rights/source paths, output path tokens, docs validation tokens, output suffixes, release gates, source-history facts, and Seal logo-free facts.
- Audit related README sections for route-information style drift: current route inventory, outputs, route reference, quick examples, workflow, and maintainer validation.
- Preserve exact route behavior: Xiaohei is the implicit default route; Littlebox is explicit active; Tom is explicit `gated-authorized`; Ferris is explicit `source-reviewed`; Seal is explicit `active`.

## Tasks

### Task 1: Normalize Visual IP Route Sections

File: `README.md`

Action: Rewrite the `### Tom`, `### Ferris`, and `### Seal` sections under `## Visual IP Routes` so each route has exactly one compact introduction paragraph followed by its existing `Aliases:` line. Keep the paragraph focused on route identity, visible character, central action, and best-fit use cases. Remove per-route operational blocks from these visible cards by relocating their facts into `### Route Reference` or nearby shared reference prose. Preserve the exact alias lists for Tom, Ferris, and Seal.

Verify:

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('README.md','utf8');for(const name of ['Xiaohei','Tom','Ferris','Seal']){const m=s.match(new RegExp('### '+name+'\\n\\n([\\s\\S]*?)(?=\\n### |\\n---)'));if(!m) throw new Error('missing '+name);const lines=m[1].trim().split('\\n').filter(Boolean);console.log(name, lines.length, lines);if(lines.length!==2) throw new Error(name+' must be one paragraph plus Aliases');if(!lines[1].startsWith('Aliases:')) throw new Error(name+' missing Aliases line');}"
```

Done: Xiaohei, Tom, Ferris, and Seal have the same visible section shape in `## Visual IP Routes`: one paragraph plus `Aliases:`.

### Task 2: Consolidate Route Metadata and Audit README Consistency

File: `README.md`

Action: Expand `### Route Reference` or directly adjacent shared reference text so the facts moved out of the route cards remain explicit and easy for maintainers to find. Preserve these exact facts and tokens: Tom status `gated-authorized`, Tom rights path `ian-xiaohei-illustrations/references/ips/tom/rights.md`, Tom output path `assets/<article-slug>-tom/`, Tom docs validation token `assets/&lt;article-slug&gt;-tom/`, Tom output suffix `tom`, Tom public-sample gate; Ferris status `source-reviewed`, Ferris source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`, Ferris output path `assets/<article-slug>-ferris/`, Ferris docs validation token `assets/&lt;article-slug&gt;-ferris/`, Ferris output suffix `ferris`, Ferris Rust trademark and endorsement-safe wording gate; Seal route id `seal`, `default=false`, status `active`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`, output path `assets/<article-slug>-seal/`, docs validation token `assets/&lt;article-slug&gt;-seal/`, output suffix `seal`, hoodie seal identity, logo-free facts, product-neutral route isolation, source-history attachment, and release gates. Audit current route inventory, outputs, quick examples, workflow, and maintainer validation so route information is phrased consistently with the consolidated reference structure.

Verify:

```bash
grep -nE 'gated-authorized|source-reviewed|status `active`|rights.md|source.md|assets/<article-slug>-(tom|ferris|seal)/|assets/&lt;article-slug&gt;-(tom|ferris|seal)/|output suffix `(tom|ferris|seal)`|public-sample gate|Rust trademark|endorsement-safe|logo-free|source-history' README.md
```

Done: README still exposes all route facts and validation markers, with operational metadata concentrated in shared reference areas instead of the Tom, Ferris, and Seal visible cards.

### Task 3: Run README Validation

Files: `README.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

Action: Run the existing validation commands. If a failure points to README markers or wording, update `README.md` while keeping the Visual IP route-card shape from Task 1 and the route facts from Task 2.

Verify:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Done: Package validator, Node tests, and whitespace checks pass after the README edit.

## Acceptance Criteria

- In `## Visual IP Routes`, Tom, Ferris, and Seal match Xiaohei's visible format exactly: one compact paragraph plus `Aliases:`.
- Operational metadata for Tom, Ferris, and Seal remains present in `README.md` and is placed in `### Route Reference` or nearby shared reference text.
- Current route inventory, outputs, route reference, quick examples, workflow, and maintainer validation present consistent route facts.
- README preserves exact route facts and validation markers for statuses, aliases, rights/source paths, output path tokens, docs validation tokens, output suffixes, release gates, source-history facts, and Seal logo-free facts.
- `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` pass.
