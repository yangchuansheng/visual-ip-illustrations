# Project Research Summary

**Project:** Multi-IP Article Illustration Skills
**Domain:** Codex Skill package for article illustration visual-IP routing
**Researched:** 2026-06-12
**Confidence:** HIGH

## Executive Summary

This project is a documentation-first Codex Skill package that turns article ideas into visual-IP-specific body illustrations. Expert implementation should keep the repository lightweight: Markdown references, `SKILL.md` routing, `agents/openai.yaml` metadata, static calibration assets, and one small validation script. The product goal is a reliable two-IP system where Xiaohei remains the default and Littlebox becomes a first-class selectable IP with its own prompt, QA, output path, examples, and attribution.

The recommended approach is a shared workflow plus isolated IP packs. `SKILL.md` should select an IP from explicit aliases or default to Xiaohei, load shared article-understanding workflow rules, then load only the selected IP's visual language, character contract, composition guidance, prompt template, and quality gate. Keep current Xiaohei paths available through compatibility files while introducing `references/ips/xiaohei/` and `references/ips/littlebox/`.

The largest risks are cross-IP rule leakage, Xiaohei regression, Littlebox identity drift, attribution gaps, and package-boundary drift. Mitigate them by front-loading an IP registry or manifest, copy-only install validation, smoke prompts for both IPs, deterministic checks for reference links/placeholders/output suffixes, and a release gate that includes `NOTICE.md` updates for Littlebox-derived material.

## Key Findings

### Recommended Stack

Keep the package as a Codex Skill with no app runtime, bundler, database, or package manager. The implementation should extend the current Markdown/YAML/static-asset shape and add a standard-library validation script for package integrity.

**Core technologies:**
- Codex Skills: runtime and installable package format — preserves the current `ian-xiaohei-illustrations/` invocation model.
- Markdown references: style, IP, composition, prompt, QA, routing, and workflow modules — matches both Xiaohei and Littlebox source patterns.
- YAML or structured manifest: IP aliases, default IP, output suffixes, required references, and hard-rule smoke checks — gives routing and validation one shared source.
- Python 3 standard library: `scripts/validate_skill_package.py` — provides repeatable checks without introducing project setup overhead.
- Static assets: scoped calibration examples under `assets/examples/<ip>/` — supports visual consistency while keeping generated article outputs separate.

Critical version requirements are minimal. Use host Codex Skills and `image_gen`; use `python3` for validation. Add PyYAML only if the manifest format requires it, with a practical preference for standard-library parsing.

### Expected Features

V1 should deliver a reliable two-IP skill, not a generalized visual-IP platform. Users should be able to ask for Xiaohei, ask for Littlebox, or omit the IP and receive deterministic Xiaohei behavior.

**Must have (table stakes):**
- Explicit IP selection by aliases such as `小黑`, `Xiaohei`, `Littlebox`, `小盒`, and `纸盒`.
- Backward-compatible default where existing Xiaohei prompts route to Xiaohei.
- Isolated IP references for visual language, character identity, composition, prompt template, and QA.
- IP-specific shot-list fields and prompt templates.
- Littlebox hard identity gate: closed paper box, front-left three-quarter view, front-panel dot eyes, tiny legs, at most two side-seam twig arms, one amber jagged seam tape, pale sky-blue or lavender background, rough marker linework.
- Xiaohei preservation gate: 16:9, pure white background, solid black Xiaohei, white dot eyes, thin legs, sparse red/orange/blue Chinese labels, large whitespace, active conceptual action.
- Output path routing: Xiaohei to `assets/<article-slug>-illustrations/`, Littlebox to `assets/<article-slug>-littlebox/`.
- Documentation examples, attribution updates, and lightweight repository validation.

**Should have (differentiators):**
- Side-by-side IP contrast examples for the same article idea.
- Littlebox background balancing across multi-image sets.
- Multilingual visible-label handling for Littlebox while preserving Chinese-first Xiaohei behavior.
- Shared cognitive-anchor workflow with per-IP execution rules.
- Curated Littlebox example bank across several domains.

**Defer (v2+):**
- Arbitrary user-defined IP import.
- Hybrid Xiaohei-Littlebox characters.
- Hosted web UI or visual picker.
- Batch contact-sheet generation, PPT/SVG/HTML/PDF export, visual regression automation, asset metadata index, CLI installer, and cross-IP recommendation engine.

### Architecture Approach

Use a thin shared entrypoint and isolated IP packs. The entrypoint handles trigger scope, IP selection, task routing, save-path contracts, and delivery reporting. Shared files should contain article digestion, cognitive-anchor selection, shot-list shape, generation loop, common QA, and no-overwrite behavior. IP packs should own all visual identity, prompt, language, composition, QA, examples, and attribution details.

**Major components:**
1. `SKILL.md` entrypoint — selects IP, loads shared workflow, loads selected IP references, enforces delivery contract.
2. `references/routing.md` or registry — declares aliases, defaulting, mixed-IP behavior, output suffixes, and reference paths.
3. `references/workflow.md` and shared prompt/QA files — define article-understanding and generation lifecycle common to all IPs.
4. `references/ips/xiaohei/` — canonical Xiaohei visual language, IP contract, composition, prompt template, quality gate, examples, and manifest.
5. `references/ips/littlebox/` — Littlebox visual language, IP contract, composition, language/labels, prompt template, quality gate, examples, and manifest.
6. Compatibility reference files — keep existing `references/style-dna.md`, `xiaohei-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` resolving during migration.
7. `scripts/validate_skill_package.py` — validates package shape, manifests, references, prompt placeholders, output suffixes, docs links, attribution, and copy-only install shape.

### Critical Pitfalls

1. **Routing treats Littlebox as a Xiaohei variant** — introduce an IP registry and load only selected IP references.
2. **Littlebox identity breaks during prompt adaptation** — preserve closed-box anatomy, seam tape, arm limits, front-panel eyes, pale backgrounds, and marker linework in both prompt template and QA gate.
3. **Xiaohei behavior regresses** — capture Xiaohei baseline smoke prompts before routing changes and rerun them at each release checkpoint.
4. **Attribution becomes ambiguous** — update `NOTICE.md` in the same phase that Littlebox-derived files enter the package, including source URL, author `okooo5km`, MIT origin, and inspected commit `37cd93e`.
5. **Package boundary depends on root-only files** — validate the copied installable `ian-xiaohei-illustrations/` directory by itself.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Routing Foundation

**Rationale:** Routing, compatibility, and validation shape determine every later change. Build the foundation before importing a second IP.
**Delivers:** Shared workflow files, IP registry or manifests, selected-IP route rules, Xiaohei default route, package-boundary validation skeleton, Xiaohei baseline smoke prompts.
**Addresses:** Explicit IP selection, backward-compatible default, router reads relevant references, output path routing.
**Avoids:** Routing leaks, Xiaohei regression, package-boundary drift, output collisions, implicit wrong-IP selection.

### Phase 2: Xiaohei Canonicalization

**Rationale:** Xiaohei is the current production behavior and should become the first canonical IP pack.
**Delivers:** `references/ips/xiaohei/` with canonical visual language, IP contract, composition, prompt template, quality gate, examples or manifest; legacy compatibility paths remain available.
**Uses:** Markdown reference organization, manifest metadata, copy-friendly package structure.
**Implements:** IP pack boundary and compatibility strategy.
**Avoids:** Legacy path drift and broad-entrypoint bloat.

### Phase 3: Littlebox Vertical Slice

**Rationale:** Littlebox should land as a complete vertical IP pack that proves route selection, prompt generation, QA, output path, and attribution together.
**Delivers:** `references/ips/littlebox/` modules, Littlebox aliases, prompt template, quality gate, examples, output suffix, and `NOTICE.md` attribution.
**Addresses:** Littlebox hard identity gate, IP-specific prompt templates, multilingual visible-label policy, Littlebox output path.
**Avoids:** Littlebox identity drift, license ambiguity, prompt drift, and output collisions.

### Phase 4: Validation Hardening

**Rationale:** Deterministic contracts should become executable before broad docs and examples expand the surface area.
**Delivers:** `scripts/validate_skill_package.py`, strict checks for manifests, reference existence, legacy paths, prompt placeholders, output suffixes, README/example references, attribution text, and installable-copy validation.
**Uses:** Python 3 standard library and structured manifest data.
**Implements:** Maintainer quality gate and release confidence path.
**Avoids:** Manual QA overload, docs drift, broken installed package, stale prompt placeholders.

### Phase 5: Documentation, Examples, and Release Packaging

**Rationale:** Public docs should describe flows already supported by routing and validation.
**Delivers:** Updated `README.md`, `examples/prompts.md`, `agents/openai.yaml`, release checklist, IP contrast examples, smoke prompt fixtures, and package-ready validation result.
**Addresses:** Documentation examples for both IPs, delivery report consistency, attribution visibility, release checklist.
**Avoids:** Documentation claims outpacing implementation, example reuse drift, implicit selection confusion, stale release artifacts.

### Phase Ordering Rationale

- Routing and manifests come first because every IP-specific reference, prompt, QA gate, and output path depends on selected-IP resolution.
- Xiaohei canonicalization precedes Littlebox import because Xiaohei is the compatibility baseline and proves the new pack shape.
- Littlebox lands as a vertical slice because partial import would create identity and attribution risk.
- Validation hardening follows the first complete two-IP path so checks are grounded in real files and acceptance criteria.
- Documentation and release packaging come last so public examples map to working smoke prompts.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** Littlebox import should re-check source files, license wording, and exact reference adaptation boundaries before copying content.
- **Phase 4:** Validator design may need a short spike if YAML parsing stays dependency-free while preserving readable manifests.
- **Phase 5:** Example and release checklist scope may need review once actual file moves reveal stale links or asset decisions.

Phases with standard patterns where extra research can usually be skipped:
- **Phase 1:** Routing foundation uses repository-local patterns already established by the current skill.
- **Phase 2:** Xiaohei canonicalization is a mechanical package-structure migration with smoke checks.
- **Phase 4:** Basic file/link/placeholder validation is standard scripting once manifest format is fixed.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Existing Xiaohei package and Littlebox source both use static Codex Skill patterns; no runtime framework is justified. |
| Features | HIGH | Requirements are repository-derived and map cleanly to user-visible skill behavior; release workflow scope remains MEDIUM until implementation choices settle. |
| Architecture | HIGH | Shared workflow plus isolated IP packs directly addresses current structure and migration needs; future Codex metadata behavior is MEDIUM. |
| Pitfalls | HIGH | Risks are grounded in local codebase concerns, current manual validation gaps, and Littlebox identity rules; future packaging behavior is MEDIUM. |

**Overall confidence:** HIGH

### Gaps to Address

- Manifest format: choose YAML, Markdown manifest, or a standard-library-friendly structured format during Phase 1.
- Copy/adaptation boundary: decide which Littlebox files are copied, adapted, summarized, or linked during Phase 3.
- Compatibility stubs: decide whether legacy Xiaohei references remain full copies or short pointers after the new pack route is proven.
- Example asset policy: define which calibration assets belong inside `assets/examples/<ip>/` and which examples stay as text-only prompts.
- Visual QA: keep manual image judgment but make objective identity markers explicit in smoke prompts and quality gates.

## Requirement Implications

- The requirements should define one selected IP per normal generated image set, with mixed-IP requests handled as separate variant groups.
- The default IP must be Xiaohei, and current `$ian-xiaohei-illustrations` usage must keep the existing output path and visual contract.
- Littlebox acceptance criteria should include objective identity markers, output path suffix, label policy, and attribution gate.
- Every public README example should correspond to a smoke prompt or validator fixture.
- Release criteria should require validation from the copied installable package directory, Xiaohei smoke pass, Littlebox smoke pass, and completed NOTICE/license review.

## Sources

### Primary (HIGH confidence)

- `.planning/PROJECT.md` — project scope, active requirements, source inspection context, constraints, and out-of-scope boundaries.
- `.planning/research/STACK.md` — recommended static Codex Skill stack, manifest, validation script, and file impact.
- `.planning/research/FEATURES.md` — table stakes, differentiators, anti-features, deferred features, and feature dependencies.
- `.planning/research/ARCHITECTURE.md` — shared-entrypoint architecture, IP pack boundaries, data flow, migration strategy, and build order.
- `.planning/research/PITFALLS.md` — critical risks, warning signs, prevention controls, and phase mapping.

### Secondary (MEDIUM confidence)

- `.planning/codebase/CONCERNS.md` — referenced by pitfalls for local fragility areas.
- `.planning/codebase/TESTING.md` — referenced by pitfalls for current manual-only test posture.
- `/tmp/5km-littlebox-illustrations/` source inspection — source repository details, identity rules, quality gate, MIT attribution, and inspected commit `37cd93e`.

---
*Research completed: 2026-06-12*
*Ready for roadmap: yes*
