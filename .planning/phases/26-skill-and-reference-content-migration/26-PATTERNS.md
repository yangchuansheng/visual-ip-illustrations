# Phase 26: Skill and Reference Content Migration - Pattern Map

**Mapped:** 2026-06-14
**Files analyzed:** 42
**Analogs found:** 42 / 42

## File Classification

| File / Surface | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `ian-xiaohei-illustrations/SKILL.md` | controller / skill manifest | request-response, file-I/O | current `SKILL.md` controller sections | exact |
| `ian-xiaohei-illustrations/references/routing.md` | route config | request-response, transform | current routing table and route metadata | exact |
| `ian-xiaohei-illustrations/agents/openai.yaml` | config / metadata | request-response | current `openai.yaml` metadata | exact |
| `ian-xiaohei-illustrations/references/*.md` root refs | compatibility reference | request-response, transform | root Xiaohei compatibility refs | exact |
| `ian-xiaohei-illustrations/references/ips/xiaohei/*.md` | route-local reference pack | request-response, transform | Xiaohei canonical pack | exact |
| `ian-xiaohei-illustrations/references/ips/littlebox/*.md` | route-local reference pack | request-response, transform | Littlebox canonical pack | exact |
| `ian-xiaohei-illustrations/references/ips/tom/*.md` | route-local reference pack | request-response, transform | Tom protected route pack | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/*.md` | route-local reference pack | request-response, transform | Ferris source-reviewed route pack | exact |
| `ian-xiaohei-illustrations/references/ips/sealos/*.md` | route-local reference pack | request-response, transform | Sealos brand-owned route pack | exact |
| `scripts/validate-skill-package.mjs` | validator utility | batch, transform, file-I/O | existing dependency-free validator | exact |
| `scripts/validate-skill-package.test.mjs` | test | batch, transform | existing Node test harness | exact |

## File Ownership Map

| Owner Surface | Files | Phase 26 Responsibility |
|---|---|---|
| Runtime controller | `ian-xiaohei-illustrations/SKILL.md` | Convert runtime instructions to English-default prose while preserving canonical and legacy invocations, routing behavior, output paths, route notes, and visible-label behavior. |
| Route registry | `ian-xiaohei-illustrations/references/routing.md` | Convert prose headings and explanatory bullets to English-default prose while preserving route table fields exactly. |
| Agent discovery | `ian-xiaohei-illustrations/agents/openai.yaml` | Convert discovery copy to English-default prose while preserving `allow_implicit_invocation: true`, Xiaohei omitted-IP default, and explicit route descriptions. |
| Shared/root references | `ian-xiaohei-illustrations/references/style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md` | Keep as legacy compatibility entry points aligned with canonical Xiaohei behavior. Preserve Chinese prompt placeholders. |
| Xiaohei canonical pack | `references/ips/xiaohei/*.md` | Convert surrounding prose to English-default. Preserve Chinese route alias, visible label behavior, and exact prompt placeholders. |
| Littlebox pack | `references/ips/littlebox/*.md` | Preserve English prompt plus user's-language visible-label pattern. Keep source attribution and output path. |
| Tom pack | `references/ips/tom/*.md` | Preserve `gated-authorized`, `rights.md`, protected-character scope, public-sample gates, route-local QA and repair wording. |
| Ferris pack | `references/ips/ferris/*.md` | Preserve `source-reviewed`, `source.md`, CC0/source context, Rust trademark boundary, public-sample gates, route-local QA and repair wording. |
| Sealos pack | `references/ips/sealos/*.md` | Preserve `brand-owned`, `source.md`, uploaded-image authority, `uploaded-image-canonical`, `uploaded-image-locked`, and logo-free identity contract. |

## Pattern Assignments

### `ian-xiaohei-illustrations/SKILL.md` (controller, request-response)

**Analog:** `ian-xiaohei-illustrations/SKILL.md`

**Runtime identity pattern:**

```markdown
---
name: visual-ip-illustrations
description: ...
---

# Visual IP Illustrations

## Runtime Identity and Local Migration

- Canonical runtime identity: Visual IP Illustrations.
- Canonical skill invocation: `$visual-ip-illustrations`.
- v1.4 compatibility alias: `$ian-xiaohei-illustrations`.
- Canonical package slug/path: `visual-ip-illustrations`.
- Legacy package slug/path: `ian-xiaohei-illustrations`.
```

Preserve these identifiers exactly:
- `$visual-ip-illustrations`
- `$ian-xiaohei-illustrations`
- `visual-ip-illustrations`
- `ian-xiaohei-illustrations`

**Route-selection pattern:**

```markdown
- Omitted visual IP selects only the Xiaohei route.
- `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei` select `xiaohei`.
- `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton` select `littlebox`.
- `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫` select `tom`.
- `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` select `ferris`.
- `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, and `blue hoodie seal` select `sealos`.
- Mixed-IP requests create separate route groups.
```

Keep the selection logic and aliases stable. Translate prose around these tokens only.

**Route-local reference loading pattern:**

```markdown
- The Xiaohei route uses the canonical `references/ips/xiaohei/` pack.
- The Littlebox route uses the canonical `references/ips/littlebox/` pack.
- The Tom route uses the canonical `references/ips/tom/` pack.
- The Ferris route uses the canonical `references/ips/ferris/` pack.
- The Sealos Seal route uses the canonical `references/ips/sealos/` pack.
- Each variant group loads only its own `required_references`.
```

**Output path pattern:**

```markdown
- Xiaohei: `assets/<article-slug>-illustrations/`
- Littlebox: `assets/<article-slug>-littlebox/`
- Tom: `assets/<article-slug>-tom/`
- Ferris: `assets/<article-slug>-ferris/`
- Sealos Seal: `assets/<article-slug>-sealos/`
```

Preserve raw and escaped path markers where validation expects both forms.

### `ian-xiaohei-illustrations/references/routing.md` (route config, transform)

**Analog:** `references/routing.md`

**Stable route table pattern:**

```markdown
| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | ... | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | ... | ... | `active` |
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | ... | ... | `gated-authorized` |
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | ... | ... | `source-reviewed` |
| `sealos` | Sealos Seal | `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal` | `false` | `sealos` | ... | ... | `brand-owned` |
```

The table is validator input. Preserve:
- column names
- route ids
- aliases
- `default`
- `output_suffix`
- every `required_references` path
- `status`

**Sealos metadata pattern:**

```markdown
- `canonical_image_status`: uploaded-image-canonical
- `drift_boundary`: uploaded-image-locked
- Fixed visual markers: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo.
- No-logo markers: no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, and no text badge.
```

Preserve the logo-free contract exactly in Sealos-facing surfaces.

### `ian-xiaohei-illustrations/agents/openai.yaml` (config, request-response)

**Analog:** current `openai.yaml`

**Metadata shape pattern:**

```yaml
interface:
  display_name: "Visual IP Illustrations - Xiaohei / Littlebox / Tom / Ferris + Sealos Seal"
  short_description: "..."
  default_prompt: "..."
policy:
  allow_implicit_invocation: true
```

Migration pattern:
- Keep YAML shape unchanged.
- Use English-default prose in `short_description` and `default_prompt`.
- Preserve Xiaohei as omitted-IP default.
- Preserve explicit Littlebox, Tom, Ferris, and Sealos Seal route wording.
- Preserve `$visual-ip-illustrations` and `$ian-xiaohei-illustrations`.

### Xiaohei Prompt References (route-local reference, transform)

**Analog:** `references/ips/xiaohei/prompt-template.md`

**Placeholder preservation pattern:**

```text
Theme:
{正文配图主题}

Structure type:
{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}

Chinese handwritten labels:
{标注词1} / {标注词2} / {标注词3} / {标注词4} / {可选标注词5}
```

These placeholders are approved multilingual exceptions. Translate surrounding instructions, keep tokens exactly.

### Littlebox Language References (route-local reference, transform)

**Analog:** `references/ips/littlebox/language-and-labels.md`

**User-language label pattern:**

```text
Visible handwritten labels, copied exactly in the user's language: "原始材料", "判断", "输出".
```

Preserve:
- English image-generation prompt rule
- user's-language planning and delivery rule
- exact visible label copying rule
- quoted label format
- approved example labels

### Tom Rights References (route-local authority, request-response)

**Analog:** `references/ips/tom/rights.md`

**Rights authority pattern:**

```markdown
- Character route: Tom.
- Route status: `gated-authorized`.
- Current scope: protected-character route contract for maintainer review, route metadata, attribution boundary wording, and future Tom reference-pack planning.
- Public rendered Tom samples: pending explicit approval.
```

Preserve Tom as a protected route with `rights.md` as the authority. Keep Tom source, rights, public-sample, and reviewer fields route-local.

### Ferris Source References (route-local authority, request-response)

**Analog:** `references/ips/ferris/source.md`

**Source/trademark authority pattern:**

```markdown
- Character route: Ferris.
- Route status: `source-reviewed`.
- Reference source: `rustacean.net` Ferris source and asset context.
- Rust, Cargo, Rust project marks, logos, official-affiliation claims, and endorsement wording remain governed by Rust Foundation trademark policy context.
```

Preserve Ferris source attribution and trademark-boundary wording in Ferris-only surfaces.

### Sealos Source References (route-local authority, request-response)

**Analog:** `references/ips/sealos/source.md`

**Brand/canonical-image authority pattern:**

```markdown
- Character route: Sealos Seal.
- Route status: `brand-owned`.
- Canonical route record: `references/ips/sealos/source.md`.
- Canonical Sealos Seal reference for v1.3: the user's uploaded mascot image.
- Logo-free identity: cap, hoodie chest, flippers, props, and scene use no Sealos logo, no logo mark, no emblem, no text badge, and no logo patch.
```

Preserve:
- `brand-owned`
- `uploaded-image-canonical`
- `uploaded-image-locked`
- plain navy cap
- plain deep-blue hoodie chest
- no-logo rule across planning, generation, edit, QA, and delivery

## Shared Patterns

### English-Default Migration

**Source:** `LANGUAGE_POLICY.md`

Apply to:
- `SKILL.md`
- `references/routing.md`
- shared references
- route-local references
- `agents/openai.yaml`

Pattern:
- Translate prose to English-default.
- Preserve approved multilingual exceptions.
- Keep exact compatibility tokens, aliases, prompt placeholders, source names, route ids, and output paths.

### Route Isolation

**Source:** `SKILL.md` route workflow and `references/routing.md`

Pattern:
- Shared workflow handles article reading, cognitive anchor selection, planning, generation, QA handoff, asset preservation, and delivery reporting.
- Route-local packs own visual identity, style, prompt wording, composition, QA, edit repair, rights/source/brand notes, and output path.
- Mixed-IP requests use separate route groups and separate output directories.

### Validation

**Source:** `scripts/validate-skill-package.mjs`

Relevant pattern excerpts:
- Dependency-free Node script with `fs`, `path`, and `process`.
- Route parser reads Markdown tables from `references/routing.md`.
- `LANGUAGE_ALLOWLIST` uses exact tokens or anchored patterns.
- `outputPathTokens()` contains raw and escaped path contracts.
- `safeReferencePath()` requires route references to start with `references/`.

Core commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Phase 26 interpretation:
- Normal validation should remain green.
- Residual language scan can report remaining public-doc prose owned by Phase 27.
- Enforce mode is available for controlled fixtures and final Phase 28 gates.

### Tests

**Source:** `scripts/validate-skill-package.test.mjs`

Pattern:
- Use Node's built-in `node:test`.
- Use fixture copies in `tmpdir()`.
- Mutate copied fixtures with `writeFileSync`, preserving the repository.
- Assert stable check IDs and deterministic validator output.
- Keep `requiredCheckIds` ordered when adding checks.

Core helper pattern:

```javascript
function runValidator(extraEnv = {}) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}
```

## Anti-Patterns

### Route Leakage

Avoid these migrations:
- Tom prompt, QA, edit, or delivery text importing Ferris, Sealos, Littlebox, or Xiaohei identity rules.
- Ferris prompt, QA, edit, or delivery text importing Tom protected-character wording or Sealos brand authority.
- Sealos prompt, QA, edit, or delivery text importing Tom/Ferris source gates or logo-bearing mascot rules.
- Littlebox text importing Xiaohei white-background behavior or Sealos brand rules.
- Root compatibility references becoming the authority for non-Xiaohei routes.
- Mixed-IP instructions collapsing variants into one shared prompt, one QA checklist, or one output directory.

### Language Migration

Avoid these migrations:
- Translating Chinese aliases.
- Translating Xiaohei prompt placeholders.
- Translating visible labels that intentionally model user's-language output.
- Replacing route ids, status strings, output suffixes, or required reference paths with editorial prose.
- Expanding allowlist scope to whole Markdown files.
- Moving Phase 27 public docs migration into Phase 26.
- Turning Phase 26 residual scan into final hard-fail enforcement for all public docs.

### Sealos Logo-Free Contract

Avoid these migrations:
- Reintroducing cap logo, chest logo, mascot logo, logo patch, logo-like wave/cloud mark, emblem, or text badge.
- Weakening plain navy cap and plain deep-blue hoodie chest wording.
- Dropping `uploaded-image-canonical` or `uploaded-image-locked`.
- Treating prior Sealos mascot exploration as shape authority.

## Verification Checklist

Run after migration:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Optional Phase 26 diagnostic:

```bash
LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs
```

Use enforce-mode output to identify Phase 26-owned runtime/reference prose and Phase 27-owned public docs separately.

## No Analog Found

None. Phase 26 is a content migration over existing controller, routing, metadata, route-local reference, validator, and test patterns.

## Metadata

**Analog search scope:** `ian-xiaohei-illustrations/SKILL.md`, `references/routing.md`, `agents/openai.yaml`, `references/ips/*/*.md`, `scripts/*.mjs`
**Files scanned:** 42
**Pattern extraction date:** 2026-06-14
