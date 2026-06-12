# Stack Research: Multi-IP Article Illustration Skills

**Research type:** Project Research - Stack dimension  
**Project:** Multi-IP Article Illustration Skills  
**Researched:** 2026-06-12  
**Scope:** Add selectable visual IP support and Littlebox integration to the existing Codex Skill repository while preserving the current Xiaohei workflow.

## Summary

The practical stack should stay a Codex Skill package built from Markdown, YAML, static assets, and one lightweight validation script. The repository already works as a documentation-first skill with `SKILL.md`, `agents/openai.yaml`, modular references, and calibration images. Multi-IP support should extend that shape with explicit IP manifests and isolated per-IP reference folders, with `SKILL.md` acting as the router.

No web framework, app runtime, database, bundler, or package manager is needed. The runtime dependency remains Codex Skills plus the host `image_gen` capability. Validation should be a local script invoked by `python3 scripts/validate_skill_package.py`, focused on file presence, manifest schema, prompt placeholders, routing references, output path contracts, and known IP guardrails.

Xiaohei compatibility should be preserved by making Xiaohei the default IP and keeping the existing public trigger behavior valid. The safer migration path is to introduce a structured `references/ips/` layout while leaving thin compatibility files at the current paths, so existing references like `references/style-dna.md` and `references/prompt-template.md` still resolve.

Recommended confidence: HIGH for staying Markdown/YAML/script-only, because both source skills use the same static skill-package pattern. MEDIUM for the exact manifest schema, because Codex Skill format does not enforce an official multi-IP schema, so this repository should own a small practical schema.

## Recommendations

### Stack

| Layer | Recommendation | Why |
|---|---|---|
| Skill runtime | Keep Codex Skills with `ian-xiaohei-illustrations/SKILL.md` as the entrypoint | Existing package already loads this way and Littlebox uses the same pattern. |
| Instructions | Markdown reference modules | Style, prompt, QA, composition, and IP rules are prose-heavy and suit progressive disclosure. |
| Config | Add a small YAML manifest at `ian-xiaohei-illustrations/references/ip-manifest.yaml` | The router needs a machine-readable source of IP ids, aliases, default status, output suffixes, and required files. |
| Validation | Add a Python standard-library script under `scripts/validate_skill_package.py` | Gives a repeatable quality gate without package dependencies or a runtime. |
| Assets | Keep static PNG/JPG assets under existing asset folders and add IP-scoped examples only when needed | Calibration assets support visual consistency; generated deliverables remain workspace assets. |
| Documentation | Update `README.md`, `examples/prompts.md`, `NOTICE.md`, and skill references | User-facing selection, install behavior, and attribution must match the new multi-IP behavior. |

### Recommended Directory Shape

```text
ian-xiaohei-illustrations/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── examples/
├── references/
│   ├── ip-manifest.yaml
│   ├── routing.md
│   ├── style-dna.md
│   ├── prompt-template.md
│   ├── qa-checklist.md
│   ├── xiaohei-ip.md
│   └── ips/
│       ├── xiaohei/
│       │   ├── style-dna.md
│       │   ├── ip.md
│       │   ├── composition-patterns.md
│       │   ├── prompt-template.md
│       │   └── qa-checklist.md
│       └── littlebox/
│           ├── visual-language.md
│           ├── ip.md
│           ├── composition-methods.md
│           ├── language-and-labels.md
│           ├── prompt-template.md
│           ├── quality-gate.md
│           └── examples.md
└── scripts/
    └── validate_skill_package.py
```

Keep the current top-level reference files as compatibility wrappers or canonical Xiaohei files during the first milestone:

- `references/style-dna.md` continues to describe Xiaohei visual DNA or points to `references/ips/xiaohei/style-dna.md`.
- `references/prompt-template.md` continues to provide the default Xiaohei prompt or points to `references/ips/xiaohei/prompt-template.md`.
- `references/qa-checklist.md`, `references/xiaohei-ip.md`, and `references/composition-patterns.md` continue to resolve for existing instructions.

### IP Manifest

Add `ian-xiaohei-illustrations/references/ip-manifest.yaml`:

```yaml
default_ip: xiaohei
ips:
  xiaohei:
    display_name: "Ian Xiaohei"
    aliases: ["xiaohei", "小黑", "ian", "默认"]
    output_suffix: "illustrations"
    references:
      style: "references/ips/xiaohei/style-dna.md"
      ip: "references/ips/xiaohei/ip.md"
      composition: "references/ips/xiaohei/composition-patterns.md"
      prompt: "references/ips/xiaohei/prompt-template.md"
      qa: "references/ips/xiaohei/qa-checklist.md"
    hard_rules:
      - "Pure white background"
      - "Small solid-black Xiaohei performs the core action"
      - "Sparse red/orange/blue handwritten Chinese annotations"
  littlebox:
    display_name: "Littlebox"
    aliases: ["littlebox", "小盒", "纸盒", "box"]
    output_suffix: "littlebox"
    references:
      style: "references/ips/littlebox/visual-language.md"
      ip: "references/ips/littlebox/ip.md"
      composition: "references/ips/littlebox/composition-methods.md"
      labels: "references/ips/littlebox/language-and-labels.md"
      prompt: "references/ips/littlebox/prompt-template.md"
      qa: "references/ips/littlebox/quality-gate.md"
      examples: "references/ips/littlebox/examples.md"
    hard_rules:
      - "Closed-only front-left three-quarter paper box"
      - "Dot eyes on front panel, tiny legs, at most two side-seam twig arms"
      - "One amber jagged seam tape"
      - "Pale sky-blue or pale lavender flat background"
```

Use this YAML as a validation and documentation source. The runtime behavior remains prose-driven in `SKILL.md`; the manifest prevents drift across docs, routes, and required reference files.

### Skill Routing Rules

Edit `ian-xiaohei-illustrations/SKILL.md` to add a short routing section near "先读这些参考":

- Default IP is Xiaohei when the user gives no visual-IP request.
- Explicit Littlebox aliases route to `references/ips/littlebox/*`.
- Explicit Xiaohei aliases route to `references/ips/xiaohei/*` or the existing compatibility references.
- Generated assets use `assets/<article-slug>-illustrations/` for Xiaohei and `assets/<article-slug>-littlebox/` for Littlebox.
- The selected IP's prompt template and QA gate govern generation and iteration.
- Cross-IP rule leakage is a failure: Xiaohei keeps pure white thin-line visual DNA; Littlebox keeps pale background, chunky marker strokes, closed box anatomy, and amber tape identity.

The skill description frontmatter should mention selectable IPs while preserving Xiaohei defaults. Example:

```yaml
description: 生成 Ian 小黑或 Littlebox 风格的中文正文配图；默认使用小黑 IP，也可按用户指定选择 Littlebox/小盒/纸盒视觉 IP。
```

### Validation Tooling

Add `scripts/validate_skill_package.py` using only the Python standard library. The command should be:

```bash
python3 scripts/validate_skill_package.py
```

Minimum checks:

1. Required package files exist: `SKILL.md`, `agents/openai.yaml`, `references/ip-manifest.yaml`.
2. Manifest parses with `yaml` only if PyYAML is available, with a small fallback parser or JSON-compatible subset if dependencies stay zero. A simpler alternative is `ip-manifest.json`, but YAML fits the repository better.
3. Each IP declares `display_name`, `aliases`, `output_suffix`, `references`, and `hard_rules`.
4. Every declared reference file exists under `ian-xiaohei-illustrations/references/`.
5. `default_ip` is `xiaohei`.
6. `SKILL.md` includes both output suffixes: `assets/<article-slug>-illustrations/` and `assets/<article-slug>-littlebox/`.
7. Xiaohei prompt includes pure white background, Xiaohei core action, and sparse red/orange/blue labels.
8. Littlebox prompt includes closed-only box, front-left three-quarter view, two-arm maximum, one amber jagged seam tape, and the two allowed background colors.
9. Compatibility reference files still exist at current paths.
10. `NOTICE.md` mentions the adapted Littlebox source and MIT attribution.

Recommended optional command for review:

```bash
python3 scripts/validate_skill_package.py --strict
```

Strict mode can fail on stale README links, missing example prompts for each IP, and placeholder drift in prompt templates. Keep `--strict` optional until the repository has stable examples for both IPs.

### Commands

Use these commands in roadmap phases:

```bash
# Inspect current package shape
find ian-xiaohei-illustrations -maxdepth 3 -type f | sort

# Validate multi-IP package shape
python3 scripts/validate_skill_package.py

# Validate after docs/examples are updated
python3 scripts/validate_skill_package.py --strict

# Manual install smoke check
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

## File Impact

### Add

| File | Purpose |
|---|---|
| `ian-xiaohei-illustrations/references/ip-manifest.yaml` | Machine-readable IP registry for aliases, default IP, output suffixes, reference files, and hard rules. |
| `ian-xiaohei-illustrations/references/routing.md` | Human-readable routing policy for IP selection, defaulting, and cross-IP isolation. |
| `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` | Xiaohei-specific visual DNA, copied or moved from existing `style-dna.md`. |
| `ian-xiaohei-illustrations/references/ips/xiaohei/ip.md` | Xiaohei-specific character contract, adapted from existing `xiaohei-ip.md`. |
| `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` | Xiaohei-specific composition rules, adapted from existing composition file. |
| `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` | Xiaohei-specific prompt template, adapted from existing prompt template. |
| `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` | Xiaohei-specific QA, adapted from existing QA file. |
| `ian-xiaohei-illustrations/references/ips/littlebox/visual-language.md` | Littlebox visual language adapted from source repository. |
| `ian-xiaohei-illustrations/references/ips/littlebox/ip.md` | Littlebox closed-box anatomy and behavior contract. |
| `ian-xiaohei-illustrations/references/ips/littlebox/composition-methods.md` | Littlebox-specific composition families and metaphor rules. |
| `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` | Littlebox multilingual visible-label policy. |
| `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` | Littlebox generation and editing prompt templates. |
| `ian-xiaohei-illustrations/references/ips/littlebox/quality-gate.md` | Littlebox-specific post-generation QA. |
| `ian-xiaohei-illustrations/references/ips/littlebox/examples.md` | Littlebox invocation and forward-test examples. |
| `scripts/validate_skill_package.py` | Dependency-light validation command for package shape and multi-IP consistency. |

### Edit

| File | Required change |
|---|---|
| `ian-xiaohei-illustrations/SKILL.md` | Add IP selection, default Xiaohei route, Littlebox route, manifest reference, output path rules, and per-IP QA routing. |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Update display/description copy to mention selectable visual IPs while keeping Xiaohei default behavior clear. |
| `README.md` | Document default Xiaohei usage, explicit Littlebox usage, install path, output path differences, and attribution. |
| `examples/prompts.md` | Add copyable prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed shot-list planning. |
| `NOTICE.md` | Add Littlebox source attribution, MIT license note, source repository URL, and adaptation statement. |
| `.planning/codebase/STRUCTURE.md` | Refresh after implementation so roadmap/execution maps know the new `references/ips/` and `scripts/` paths. |
| `.planning/codebase/STACK.md` | Refresh after implementation to record the validation script and manifest. |

### Preserve

| File or behavior | Preservation rule |
|---|---|
| `ian-xiaohei-illustrations/references/style-dna.md` | Keep resolving for current Xiaohei instructions. |
| `ian-xiaohei-illustrations/references/prompt-template.md` | Keep valid for default Xiaohei generation. |
| `ian-xiaohei-illustrations/references/qa-checklist.md` | Keep valid for default Xiaohei QA. |
| `ian-xiaohei-illustrations/references/xiaohei-ip.md` | Keep valid for current Xiaohei character loading. |
| `assets/<article-slug>-illustrations/` | Continue as Xiaohei output path. |
| Existing skill name `ian-xiaohei-illustrations` | Preserve install compatibility and existing user invocation habits. |

## Confidence

| Area | Level | Reason |
|---|---|---|
| No app runtime | HIGH | Existing Xiaohei repo and Littlebox source are static Codex Skill packages using Markdown/YAML plus image generation. |
| Markdown reference organization | HIGH | Current package already uses modular references, and Littlebox uses the same reference-module style. |
| Xiaohei default compatibility | HIGH | Keeping current reference files and output path preserves the existing route while adding new routing on top. |
| Littlebox reference import shape | HIGH | Source files map cleanly to IP-scoped references: visual language, IP contract, composition, labels, prompt, quality gate, examples. |
| YAML manifest | MEDIUM | YAML is already present through `agents/openai.yaml`, but multi-IP manifest schema is repository-owned. |
| Python validation script | MEDIUM | It is the lightest durable quality gate; exact checks may evolve as implementation reveals doc/link drift. |

## Risks

### Cross-IP Rule Leakage

The main failure mode is mixing Xiaohei and Littlebox visual contracts. Xiaohei requires pure white background, thin black linework, and a solid-black creature. Littlebox requires pale sky-blue or pale lavender background, chunky marker strokes, closed paper-box anatomy, and one amber jagged seam tape. Prevention: route through `ip-manifest.yaml`, keep IP references isolated, and validate hard-rule phrases in each prompt template.

### Compatibility Drift

Moving current Xiaohei files directly into `references/ips/xiaohei/` can break the existing `SKILL.md` reference list and user expectations. Prevention: first copy into IP-scoped files, then leave compatibility files in place as wrappers or canonical Xiaohei files until a later cleanup milestone.

### Manifest Overengineering

The manifest can become an application configuration system if it tries to model every prompt and QA rule. Keep it narrow: identity, aliases, output suffix, reference paths, and hard-rule smoke checks. Prose references remain the source for detailed generation behavior.

### Validation Dependency Creep

Adding PyYAML or a larger test framework creates avoidable setup work. Prefer a small standard-library validator. If YAML parsing becomes awkward, use a constrained manifest format or add a tiny parser for the subset used here.

### Attribution Gaps

Littlebox material comes from a separate MIT-licensed skill repository. Copying or adapting files needs `NOTICE.md` updates and source attribution in README or reference headers. Treat attribution as part of the validation checklist.

### Prompt Regression

Changing prompt templates can weaken output quality without obvious file-level failures. Add a small set of prompt-template fixture checks in `scripts/validate_skill_package.py --strict` and keep manual visual QA as the final gate for actual generated images.
