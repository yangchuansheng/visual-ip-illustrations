# Architecture Research: Multi-IP Article Illustration Skills

**Project:** Multi-IP Article Illustration Skills  
**Dimension:** Architecture  
**Researched:** 2026-06-12  
**Confidence:** HIGH for repository structure and migration path; MEDIUM for future Codex runtime metadata behavior.

## Summary

The current repository is a documentation-first Codex Skill package. `ian-xiaohei-illustrations/SKILL.md` is the controller, while `references/*.md` files hold style, IP, composition, prompt, and QA policy. Littlebox uses the same skill pattern, so the migration should preserve the current installed package shape and introduce a routing layer inside the existing skill package.

The recommended structure is a thin shared entrypoint plus isolated IP packs. The entrypoint decides the selected IP, loads a shared workflow contract, then loads only that IP's manifest and references. Xiaohei remains the default IP and keeps existing behavior through compatibility aliases from current paths to the new Xiaohei pack.

Avoid a large rewrite of every reference at once. First add the routing contract and validation, then move Xiaohei into the new pack shape with compatibility stubs, then add Littlebox as a second pack. This keeps the existing `$ian-xiaohei-illustrations` invocation stable while allowing future visual IPs to be added by creating a new `references/ips/<ip-id>/` directory and one manifest.

The main architecture risk is rule leakage. Xiaohei and Littlebox have incompatible visual contracts: Xiaohei uses pure-white background, thin black hand-drawn linework, red/orange/blue labels, and a black figure as action carrier; Littlebox uses pale sky-blue or lavender backgrounds, chunky marker linework, a closed-only paper box, side-seam twig arms, exactly one amber jagged seam tape, and its own language-label rules. These rules should live in separate IP packs, with shared files restricted to workflow concepts that genuinely apply to every IP.

## Proposed Architecture

### Recommended Directory Shape

```text
ian-xiaohei-illustrations/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── examples/
│       ├── xiaohei/
│       └── littlebox/
└── references/
    ├── routing.md
    ├── workflow.md
    ├── prompts.md
    ├── qa-common.md
    ├── ips/
    │   ├── xiaohei/
    │   │   ├── manifest.md
    │   │   ├── visual-language.md
    │   │   ├── ip.md
    │   │   ├── composition.md
    │   │   ├── prompt-template.md
    │   │   ├── quality-gate.md
    │   │   └── examples.md
    │   └── littlebox/
    │       ├── manifest.md
    │       ├── visual-language.md
    │       ├── ip.md
    │       ├── composition.md
    │       ├── language-and-labels.md
    │       ├── prompt-template.md
    │       ├── quality-gate.md
    │       └── examples.md
    ├── style-dna.md
    ├── xiaohei-ip.md
    ├── composition-patterns.md
    ├── prompt-template.md
    └── qa-checklist.md
```

Keep the legacy reference files during the first migration. They can become short compatibility stubs that point to the canonical Xiaohei files after the new architecture is working.

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|----------------|-------------------|
| `SKILL.md` entrypoint | Trigger detection, IP selection, task type routing, response contract, save-path handoff | `references/routing.md`, `references/workflow.md`, selected IP manifest |
| `references/routing.md` | Selection rules, default IP, aliases, disambiguation behavior, fallback behavior | Entrypoint, IP manifests |
| `references/workflow.md` | Shared article digestion, shot-list planning shape, per-image generation loop, delivery checklist | Entrypoint, selected IP files |
| `references/prompts.md` | Shared prompt assembly guidance: English generation prompt, visible labels, one-image-per-prompt rule | Selected IP prompt templates |
| `references/qa-common.md` | Shared QA criteria: one core idea, readable labels, saved paths, no asset overwrite, image set completeness | Selected IP quality gate |
| `references/ips/<ip>/manifest.md` | Machine-readable-by-prose IP contract: id, display name, aliases, output suffix, default references, required assets, attribution note | Routing, validation script |
| `references/ips/<ip>/visual-language.md` | IP-specific style rules: background, palette, line quality, density, label style, vetoes | IP prompt and QA |
| `references/ips/<ip>/ip.md` | Character identity, anatomy, action vocabulary, failure modes | IP composition, prompt, QA |
| `references/ips/<ip>/composition.md` | IP-specific composition families and anti-repeat rules | Planning workflow, prompt template |
| `references/ips/<ip>/language-and-labels.md` | Optional IP-specific label/language rules; required for Littlebox | Prompt template, QA |
| `references/ips/<ip>/prompt-template.md` | Final single-image prompt and edit/regeneration prompts for that IP | Generation step |
| `references/ips/<ip>/quality-gate.md` | IP-specific pass/fail checklist | Review and iteration step |
| `assets/examples/<ip>/` | Calibration assets for that IP only | IP examples and optional calibration |
| Validation script, later phase | Package-shape checks, manifest checks, reference existence, legacy compatibility checks | All reference files |

### IP Manifest Contract

Each IP pack should have a compact `manifest.md` at the top of its directory. It should be prose-friendly but structured enough for validation by simple regexes.

```markdown
# IP Manifest: Xiaohei

id: xiaohei
display_name: 小黑
aliases: 小黑, ian, ian-xiaohei, 默认
output_suffix: illustrations
default: true
references:
  - visual-language.md
  - ip.md
  - composition.md
  - prompt-template.md
  - quality-gate.md
assets: assets/examples/xiaohei/
attribution: Ian Xiaohei original repository material.
```

Littlebox should use `id: littlebox`, aliases such as `littlebox`, `小盒`, `纸盒`, `box`, and `output_suffix: littlebox`. Its manifest should name `language-and-labels.md` as a required reference.

### Routing Rules

Use explicit selection first, then safe defaulting:

1. Explicit user IP mention wins: `小黑`, `Ian`, `Xiaohei` route to Xiaohei; `Littlebox`, `小盒`, `纸盒`, `paper-box`, `carton` route to Littlebox.
2. `$ian-xiaohei-illustrations` with no IP mention routes to Xiaohei to preserve current behavior.
3. If the user asks for "selectable IP", "multi-IP", or compares IPs, return a short choice-oriented planning response and wait only when the desired target image generation would be ambiguous.
4. If a prompt contains multiple IP names for one image, treat it as a request for selection or separate variants. The generated image path should stay per IP.
5. The entrypoint loads one IP pack per generated image set. Mixed-IP sets are allowed only as separate image groups with separate output directories.

### Compatibility Strategy

Keep public compatibility through these contracts:

- Existing skill name remains `ian-xiaohei-illustrations`.
- Existing default behavior remains Xiaohei.
- Existing output path `assets/<article-slug>-illustrations/` remains Xiaohei's default.
- Existing reference paths remain available during migration:
  - `references/style-dna.md` points to `references/ips/xiaohei/visual-language.md`.
  - `references/xiaohei-ip.md` points to `references/ips/xiaohei/ip.md`.
  - `references/composition-patterns.md` points to `references/ips/xiaohei/composition.md`.
  - `references/prompt-template.md` points to `references/ips/xiaohei/prompt-template.md`.
  - `references/qa-checklist.md` points to `references/ips/xiaohei/quality-gate.md`.
- Current Xiaohei calibration assets can remain at `assets/examples/` initially, then move to `assets/examples/xiaohei/` with docs updated in the same phase.

Use compatibility stubs for one milestone, then decide whether to remove them after validation and docs have stabilized. The stubs reduce migration risk and keep existing instructions, README examples, and external references from breaking.

## Data Flow

### Planning Flow

```text
User request
  -> SKILL.md
  -> routing.md selects ip_id
  -> workflow.md extracts article anchors
  -> references/ips/<ip_id>/manifest.md
  -> references/ips/<ip_id>/composition.md
  -> references/ips/<ip_id>/ip.md
  -> optional language-and-labels.md
  -> shot list with IP-specific fields
```

For Xiaohei, shot-list fields include placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese label words.

For Littlebox, shot-list fields include placement, core idea, Littlebox state `closed`, visual metaphor, assigned background, suggested objects, and short visible labels.

### Generation Flow

```text
Approved or direct generation request
  -> SKILL.md confirms selected ip_id
  -> workflow.md runs one-image-per-core-idea loop
  -> selected IP visual-language.md + ip.md + composition.md
  -> selected IP prompt-template.md
  -> image_gen runtime
  -> qa-common.md + selected IP quality-gate.md
  -> save to assets/<article-slug>-<output_suffix>/
  -> delivery note with paths and status
```

The output suffix comes from the IP manifest:

- Xiaohei: `assets/<article-slug>-illustrations/`
- Littlebox: `assets/<article-slug>-littlebox/`

### Reference Loading Direction

The entrypoint should reference shared files first, then the selected IP pack. Shared files should never import IP-specific files. IP files may rely on shared workflow language, but they should carry their own visual rules, prompt constraints, and QA gates.

```text
SKILL.md
  -> routing.md
  -> workflow.md
  -> ips/<selected-ip>/manifest.md
      -> visual-language.md
      -> ip.md
      -> composition.md
      -> prompt-template.md
      -> quality-gate.md
```

This direction keeps IP references isolated and makes future packs additive.

## Migration Strategy

### Phase-Safe File Moves And Additions

1. Add `references/routing.md`, `references/workflow.md`, `references/prompts.md`, and `references/qa-common.md`.
2. Add `references/ips/xiaohei/` and copy current Xiaohei references into canonical names:
   - `style-dna.md` -> `ips/xiaohei/visual-language.md`
   - `xiaohei-ip.md` -> `ips/xiaohei/ip.md`
   - `composition-patterns.md` -> `ips/xiaohei/composition.md`
   - `prompt-template.md` -> `ips/xiaohei/prompt-template.md`
   - `qa-checklist.md` -> `ips/xiaohei/quality-gate.md`
3. Add `references/ips/xiaohei/manifest.md`.
4. Update `SKILL.md` to load routing/workflow first and selected IP references second. Keep the copy compact.
5. Replace legacy Xiaohei reference files with compatibility stubs or keep them as duplicates for one phase. Stubs are cleaner once validation confirms every new canonical file exists.
6. Add `references/ips/littlebox/` using the Littlebox source material:
   - `visual-language.md` adapted from Littlebox `visual-language.md`.
   - `ip.md` adapted from `littlebox-ip.md`.
   - `composition.md` adapted from `composition-methods.md`.
   - `language-and-labels.md` copied/adapted from Littlebox.
   - `prompt-template.md`, `quality-gate.md`, and `examples.md` copied/adapted from Littlebox.
   - `manifest.md` with output suffix, aliases, references, and attribution.
7. Add `assets/examples/littlebox/` only after deciding which Littlebox examples belong in the installed package. Keep public preview assets separate from runtime calibration assets.
8. Update `README.md`, `examples/prompts.md`, `NOTICE.md`, and `agents/openai.yaml` after routing works inside the skill package.
9. Add `scripts/validate_skill_package.py` in a later implementation phase to check manifests, required references, legacy path compatibility, output suffixes, and docs links.

### Migration Principles

- Move Xiaohei first because it is the current default and provides the compatibility test.
- Add Littlebox after the router can select an IP from aliases.
- Keep IP-specific files self-contained. Do not place Littlebox tape/lid rules in shared QA or shared prompt files.
- Keep shared workflow small. Article digestion, shot planning, one-image generation, save reporting, and no-overwrite behavior are shared. Background color, character anatomy, labels, prompt wording, and quality gates are IP-specific.
- Keep paths prose-readable. Codex Skills are Markdown-driven, so the architecture should favor explicit path lists over hidden indirection.

### Validation Targets

Add validation after the directory shape exists:

- `SKILL.md` frontmatter has `name` and `description`.
- `references/routing.md` lists every IP manifest alias group.
- Every `references/ips/*/manifest.md` has `id`, `display_name`, `aliases`, `output_suffix`, and `references`.
- Every manifest-listed reference file exists.
- Xiaohei has `default: true` and `output_suffix: illustrations`.
- Littlebox has `output_suffix: littlebox` and includes `language-and-labels.md`.
- Legacy reference paths exist during the compatibility window.
- README and prompt examples mention selectable IP usage.
- NOTICE includes Littlebox attribution after Littlebox content is incorporated.

## Build Order

1. **Architecture scaffold**
   - Create shared routing/workflow files and `references/ips/` directories.
   - Add Xiaohei manifest.
   - Keep old reference files intact while the new paths are introduced.

2. **Xiaohei canonicalization**
   - Copy current Xiaohei rules into `references/ips/xiaohei/`.
   - Update `SKILL.md` so default routing loads Xiaohei through the new manifest.
   - Run a manual smoke check: a plain Xiaohei request still maps to `assets/<slug>-illustrations/`.

3. **Compatibility stubs**
   - Convert legacy reference files into short stubs pointing to canonical Xiaohei files, or keep duplicated content for one phase if stubs confuse the skill loader.
   - Verify every old path named in current docs still resolves.

4. **Littlebox IP pack**
   - Add Littlebox manifest and references.
   - Preserve hard identity rules inside the Littlebox pack: closed-only box, front-left three-quarter view, dot eyes on front panel, tiny legs, at most two side-seam twig arms, one amber jagged seam tape, pale sky-blue/lavender background, chunky rough marker linework, sparse coral/amber accents.
   - Add Littlebox output path contract: `assets/<slug>-littlebox/`.

5. **Entrypoint route expansion**
   - Update `SKILL.md` with alias-based selection and mixed-IP handling.
   - Keep the entrypoint as a router and workflow coordinator.
   - Include a concise rule that only one selected IP pack should be loaded for a normal image set.

6. **Docs and attribution**
   - Update `README.md` and `examples/prompts.md` with explicit IP selection examples.
   - Update `NOTICE.md` for Littlebox-derived material.
   - Update `agents/openai.yaml` description so implicit invocation mentions selectable IPs without making Littlebox the default.

7. **Validation**
   - Add a lightweight script to validate package shape, manifest references, legacy path availability, prompt-template presence, and docs links.
   - Add sample prompts or fixture text for Xiaohei default, explicit Xiaohei, explicit Littlebox, and ambiguous multi-IP selection.

## Risks

### Rule Leakage Between IPs

**Risk:** Xiaohei's white background and thin-line rules mix with Littlebox's pale backgrounds and chunky marker rules, or Littlebox's tape/lid constraints appear in Xiaohei prompts.  
**Mitigation:** Keep visual-language, IP identity, prompt template, and quality gate inside each IP pack. Shared QA should check only generic article-illustration behavior.

### Entrypoint Becomes Too Large

**Risk:** `SKILL.md` becomes a merged copy of both skills and crowds out the user's article content.  
**Mitigation:** Keep `SKILL.md` to trigger scope, selection rules, workflow summary, and reference paths. Detailed rules live in selected IP references.

### Legacy Paths Drift

**Risk:** Existing docs or installed-skill habits still reference `references/style-dna.md`, `xiaohei-ip.md`, and related files.  
**Mitigation:** Preserve legacy files during migration and validate them. Use stubs only after the new Xiaohei pack is proven.

### Ambiguous User Selection

**Risk:** A request mentions both Xiaohei and Littlebox but expects one generated set.  
**Mitigation:** Route explicit single-IP requests directly. For multi-IP requests, produce separate variant groups or ask for selection when generating a single set would be ambiguous.

### Asset Bloat

**Risk:** Adding Littlebox examples duplicates the current PNG-bloat problem.  
**Mitigation:** Store IP examples under `assets/examples/<ip>/`, add a manifest later, and include only calibration assets that materially improve generation.

### Attribution Gap

**Risk:** Littlebox source references are adapted without clear notice.  
**Mitigation:** Update `NOTICE.md` in the same phase that Littlebox files enter the installable package. Keep source repository and inspected commit context in planning/docs.

### Validation Arrives Too Late

**Risk:** File moves break routing before a package-shape check exists.  
**Mitigation:** Add validation immediately after the scaffold and before broad docs rewrites. At minimum, use a script that verifies manifest-listed references and legacy compatibility paths.

