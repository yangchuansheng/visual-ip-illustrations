# Multi-IP Adaptation Pitfalls

**Project:** Multi-IP Article Illustration Skills  
**Dimension:** Pitfalls  
**Researched:** 2026-06-12  
**Confidence:** HIGH for repository-local risks and Littlebox identity rules; MEDIUM for future Codex packaging behavior.

## Summary

Adapting Littlebox into this repository can fail in three connected ways: IP identity drift, documentation/package drift, and weak validation. The repository is currently a Markdown-first Codex Skill package with manual QA, duplicated style guidance, implicit package boundaries, and no validation command. Adding a second IP multiplies those existing risks because Xiaohei and Littlebox have incompatible defaults for background, linework, character anatomy, output paths, examples, and QA gates.

The highest-risk roadmap mistake is treating Littlebox as a style variant inside the Xiaohei flow. Littlebox has hard identity markers: closed-only paper box body, front-left three-quarter view, dot eyes on the front panel, tiny legs, at most two side-seam twig arms, exactly one narrow amber central-lid seam tape with jagged front tab, pale sky-blue or pale lavender background, thick rough marker linework, sparse coral/amber accents, and Littlebox acting as the conceptual operator. These constraints need their own routing, prompt template, QA checklist, examples, and failure handling.

The second major risk is attribution and license dilution. Both repositories use MIT, but each carries author attribution and NOTICE language. This project must preserve Ian attribution for Xiaohei material and okooo5km attribution for Littlebox-derived material. Any roadmap phase that copies or adapts Littlebox files needs an explicit license/NOTICE checkpoint, source commit reference, and derived-material boundary.

The roadmap should front-load structural safety: add an IP registry, package-shape validation, reference-link validation, prompt-placeholder validation, and cross-IP smoke prompts before broad documentation rewrites. Then add Littlebox as a vertical slice that proves route selection, reference loading, output paths, QA gates, and attribution. Polish and deduplication should follow after the two-IP path works.

## Pitfalls

### 1. Routing Treats Littlebox as a Xiaohei Variant

**What goes wrong:** A single shared workflow injects Xiaohei defaults into Littlebox requests or Littlebox defaults into Xiaohei requests. The most likely leaks are white background, thin linework, Xiaohei-centered action language, output path `assets/<article-slug>-illustrations/`, and Xiaohei QA wording.

**Why it happens:** The current skill has one installable package, one `SKILL.md`, one prompt template, one QA checklist, and repeated global instructions. Multi-IP routing adds a branch where the original files were written as universal instructions.

**Impact:** Users request Littlebox and receive a black-character Xiaohei composition, or request Xiaohei and receive pale-background box language. Both outputs weaken the skill's core value: selectable visual IPs with stable identity.

**Prevention strategy:** Create a small IP registry before importing Littlebox content. Each IP entry should declare canonical reference files, prompt template, QA gate, output directory suffix, default background, identity checklist, examples, and attribution source. `SKILL.md` should route to the selected IP and then load only that IP's canonical references.

**Phase mapping:** Phase 1 foundation.

### 2. Littlebox Identity Breaks During Prompt Adaptation

**What goes wrong:** Generated images show an open box, raised flaps, visible interior, side-wall eyes, front-face arms, three arms, mascot hands, tan cardboard body, smooth vector strokes, multiple tape patches, or tape placed on a side wall or prop.

**Why it happens:** Littlebox's constraints are more anatomical than Xiaohei's. A general "paper box character" prompt invites common image-model defaults: open cardboard boxes, delivery logos, cute mascots, beige cartons, and clean vector icon style.

**Impact:** The result stops being Littlebox even when the article metaphor works. The IP becomes unstable across a multi-image set.

**Prevention strategy:** Preserve Littlebox's exact identity rules as a canonical `littlebox-ip.md` reference and mirror the hard gates in a Littlebox QA file. Prompt templates should state the closed-only box state, centered amber seam tape with jagged front tab, side-seam twig arms, front-panel eyes, near-white body, and pale background in short imperative lines. Acceptance criteria should require at least five recognition markers for final article images.

**Phase mapping:** Phase 2 Littlebox vertical slice and Phase 3 QA hardening.

### 3. Xiaohei Behavior Regresses While Adding Multi-IP Support

**What goes wrong:** Existing `$ian-xiaohei-illustrations` behavior changes: planning structure shifts, Xiaohei becomes optional, prompts start using pale backgrounds, examples move, or README usage examples point to new multi-IP language that the existing skill path cannot satisfy.

**Why it happens:** The current Xiaohei flow is encoded in prose across `SKILL.md`, style DNA, IP rules, prompt template, QA checklist, README, and examples. A broad rewrite can blur stable behavior.

**Impact:** The milestone succeeds for Littlebox while damaging the validated Xiaohei experience.

**Prevention strategy:** Add a Xiaohei baseline smoke set before changing routing. Capture expected planning fields, default image count, output path, key visual constraints, and QA checklist coverage. Run the baseline after each routing or documentation phase.

**Phase mapping:** Phase 1 foundation and every release checkpoint.

### 4. Attribution and NOTICE Obligations Become Ambiguous

**What goes wrong:** Littlebox-derived references enter this repository without preserving the MIT copyright line, NOTICE attribution, author link, source repository URL, or inspected commit reference. Public docs may imply Littlebox is authored by Ian.

**Why it happens:** Both repositories are MIT and structurally similar, so file copying can feel mechanically safe while derived documentation boundaries remain unclear.

**Impact:** Redistribution becomes legally and ethically weak. Future maintainers cannot tell which materials came from Ian, which came from okooo5km, and which were adapted.

**Prevention strategy:** Add a license/NOTICE phase gate for any copied or adapted Littlebox file. Update root `NOTICE.md` with a Littlebox attribution section naming `5km Littlebox Illustrations`, okooo5km, source URL, and inspected commit `37cd93e` from 2026-06-12. Keep MIT license text intact where substantial Littlebox material is included. Mark adapted references with source attribution in file headers or a central attribution manifest.

**Phase mapping:** Phase 2 Littlebox import and Phase 5 release packaging.

### 5. Package Boundary Pulls in Root-Only Files

**What goes wrong:** The installed Codex skill directory depends on root README, root examples, root assets, or personal/contact assets. A copied `ian-xiaohei-illustrations/` folder then lacks Littlebox references, examples, attribution, or validation metadata.

**Why it happens:** The current repository has an implicit package boundary. Root docs, examples, and installable skill assets overlap. Multi-IP support adds more files and more cross-links.

**Impact:** Local development works, installed skill behavior breaks, and users receive incomplete routing instructions.

**Prevention strategy:** Define the installable package boundary as data. Add a package manifest listing required files under `ian-xiaohei-illustrations/`, per-IP reference groups, assets used at runtime, and forbidden root-only dependencies. Add a validation command that can run against a copy of only the installable directory.

**Phase mapping:** Phase 1 foundation and Phase 5 release packaging.

### 6. Prompt Templates Drift Across IPs

**What goes wrong:** Prompt placeholders, label rules, edit instructions, and image-generation constraints diverge inconsistently. One IP gains a fix for title removal, label count, or active-character correction while the other keeps stale wording.

**Why it happens:** The existing prompt template is prose-heavy and mixed-language. Adding Littlebox will likely create a second template with similar sections and different constraints.

**Impact:** Some user flows pass for one IP and fail for the other. Regression review becomes manual and slow.

**Prevention strategy:** Split prompt templates into shared task structure and IP-specific visual constraints. Validate required placeholders such as article concept, cognitive anchor, image count, label list, output path, and IP identity block. Keep edit prompts IP-aware: "make Xiaohei central" and "repair Littlebox identity" are separate corrections.

**Phase mapping:** Phase 2 Littlebox vertical slice and Phase 3 validation.

### 7. QA Gates Stay Manual and Subjective

**What goes wrong:** Reviewers rely on vibe checks and miss objective failures: wrong Littlebox tape placement, wrong background, three arms, side-panel eyes, Xiaohei acting as decoration, broken output paths, or stale README links.

**Why it happens:** The current repository has manual checklists and no automated test runner. Visual quality remains manual, but package integrity and rule coverage can be checked mechanically.

**Impact:** Small prose edits silently break installed behavior or make the two IPs inconsistent.

**Prevention strategy:** Add lightweight validation scripts for package shape, required references, docs links, prompt placeholders, per-IP output path suffixes, attribution text, and QA coverage. Keep visual judgment manual, but make every deterministic contract executable.

**Phase mapping:** Phase 1 foundation, Phase 3 validation, and Phase 5 release.

### 8. Multi-Image Sets Lose IP Consistency

**What goes wrong:** A Littlebox image set mixes background colors without intent, changes line roughness, varies box proportions, moves tape location, changes arm style, or alternates between closed and open boxes. A Xiaohei set may mix thin-line sketch rules with Littlebox marker rules.

**Why it happens:** Each image is generated separately. The current workflow already depends on manual per-image inspection; multi-IP adds more per-set consistency criteria.

**Impact:** A series of article illustrations feels assembled from different skills, weakening the recognizable visual language.

**Prevention strategy:** Add per-IP set-level QA. Littlebox set checks should include stable background palette use, consistent marker roughness, compact box proportions, closed lid, centered tape, and consistent label style. Xiaohei set checks should preserve pure white background, Xiaohei line language, and black-character central action.

**Phase mapping:** Phase 3 validation and Phase 4 documentation/examples.

### 9. Output Naming Collisions Increase

**What goes wrong:** Xiaohei and Littlebox runs for the same article overwrite each other or create confusing mixed directories. The current Xiaohei path is `assets/<article-slug>-illustrations/`; Littlebox source uses `assets/<article-slug>-littlebox/`.

**Why it happens:** The repository already has no collision protection. Multi-IP support encourages repeated runs for the same article across different visual identities.

**Impact:** Accepted images can be overwritten, mixed, or attributed to the wrong IP.

**Prevention strategy:** Put output path rules in the IP registry. Use deterministic IP suffixes such as `assets/<article-slug>-xiaohei/` and `assets/<article-slug>-littlebox/`, or preserve legacy Xiaohei path with explicit collision handling and a per-run timestamp subdirectory. Validate that generated file paths include the selected IP.

**Phase mapping:** Phase 1 routing foundation and Phase 2 Littlebox slice.

### 10. Examples Become Reuse Templates

**What goes wrong:** Agents copy composition motifs from Xiaohei examples or Littlebox calibration images. The two IPs converge on familiar layouts, repeated props, and stale metaphors.

**Why it happens:** The current repo already has duplicated image examples and natural-language anti-repeat rules. Littlebox will add more examples and more calibration material.

**Impact:** Outputs look derivative and lose the "one cognitive action through a fresh visual metaphor" promise.

**Prevention strategy:** Add an example manifest with IP, title, path, hash, composition category, calibration purpose, and anti-reuse note. Skill instructions should load examples for calibration tasks and use manifest anti-repeat notes during normal generation.

**Phase mapping:** Phase 4 documentation/examples.

### 11. Implicit Invocation Selects the Wrong IP

**What goes wrong:** Broad implicit invocation triggers the skill for adjacent illustration requests, or the skill chooses a default IP when the user expected a specific one.

**Why it happens:** Current metadata allows implicit invocation and describes a broad Chinese article-illustration use case. Multi-IP support adds selection logic that can be underspecified.

**Impact:** Users receive the wrong visual identity, then need a corrective round.

**Prevention strategy:** Define selection rules: explicit user IP wins; absent IP uses the repository default; ambiguous branded/character requests prompt a short clarification during planning; generated outputs state the selected IP and output directory. Metadata should name the multi-IP behavior and the supported IP names.

**Phase mapping:** Phase 1 routing foundation and Phase 4 README updates.

### 12. Documentation Claims Outpace Implemented Routing

**What goes wrong:** README examples describe `$ian-xiaohei-illustrations --ip littlebox` or natural-language Littlebox selection before `SKILL.md`, references, validation, and output paths support it.

**Why it happens:** Documentation-first repositories make it easy to update public usage copy before the installable package is complete.

**Impact:** Users follow public examples and hit broken behavior.

**Prevention strategy:** Tie every README usage example to a smoke prompt in `examples/prompts.md` and a validation check for referenced files. Publish docs in the same phase that passes installable-package validation.

**Phase mapping:** Phase 4 documentation and Phase 5 release.

## Warning Signs

| Area | Warning Sign | Roadmap Response |
|------|--------------|------------------|
| Routing | `SKILL.md` contains global style rules that mention both Xiaohei and Littlebox in the same hard-constraint block | Split shared workflow from per-IP visual contracts before adding more examples |
| Routing | A Littlebox prompt can be generated without reading `littlebox-ip.md` or its QA gate | Add IP registry checks for required references |
| Xiaohei regression | Existing Xiaohei examples or prompt fixtures change while adding Littlebox | Run Xiaohei baseline smoke prompts before and after the phase |
| Littlebox identity | Generated Littlebox has open flaps, visible interior, tan body, side eyes, three arms, or misplaced tape | Treat as QA failure and revise prompt/identity wording before continuing |
| Attribution | Root `NOTICE.md` only names Ian after Littlebox-derived files land | Block release until Littlebox attribution is added |
| License | Copied Littlebox materials lack source URL, copyright owner, or commit reference | Add source attribution headers or central manifest before merge |
| Package boundary | Installed directory references `../README.md`, root examples, or root assets | Add package manifest and copy-only install smoke test |
| Validation | Review checklist asks humans to inspect file existence, links, and placeholders manually | Move deterministic checks into a script |
| Output artifacts | Xiaohei and Littlebox write to the same article slug directory | Put output suffixes in the IP registry and enforce them in prompts |
| Examples | New examples lack anti-reuse notes | Require manifest metadata for every calibration image |
| Docs | README includes multi-IP usage ahead of passing validation | Gate README update on runnable smoke prompts |
| Set consistency | A Littlebox series changes background, tape geometry, stroke roughness, or box proportions image by image | Add set-level QA before release |

## Prevention

### Foundation Controls

- Add `ip-registry` data that declares `xiaohei` and `littlebox` keys, display names, aliases, reference files, prompt template, QA gate, output path suffix, default background, and attribution source.
- Keep shared workflow instructions compact: article intake, cognitive-anchor extraction, shot-list planning, separate image generation, QA loop, and save behavior.
- Move visual identity constraints into per-IP reference modules.
- Add validation for `SKILL.md` frontmatter, `agents/openai.yaml`, referenced files, prompt placeholders, README links, output path suffixes, and attribution text.
- Run validation against the installable package directory alone.

### Littlebox Import Controls

- Preserve the Littlebox source identity rules in a canonical reference file.
- Preserve Littlebox quality gates as a separate QA module.
- Update `NOTICE.md` with Littlebox attribution before release.
- Record source repository URL, inspected commit `37cd93e`, inspection date `2026-06-12`, author `okooo5km`, and MIT license origin.
- Keep Littlebox examples or calibration assets in Littlebox-scoped directories and manifest entries.

### Validation Controls

- Create smoke prompts for these paths: Xiaohei planning, Xiaohei single-image prompt, Littlebox planning, Littlebox single-image prompt, ambiguous IP selection, and cross-IP same-article output paths.
- Add deterministic assertions for selected IP name, selected reference files, expected output directory suffix, prompt identity block, label-count guidance, and QA checklist presence.
- Keep visual acceptance manual with objective checklists for hard identity markers.
- Add a release checklist that includes copy-only install smoke, license/NOTICE review, README link check, and examples manifest check.

### Documentation Controls

- Document IP selection in public README and installable `SKILL.md` using the same names and aliases from the registry.
- Keep usage examples tied to supported flows: default Xiaohei, explicit Littlebox, planning-only, generation, and repair.
- Add a short "attribution and visual IPs" section so users understand that Xiaohei and Littlebox are distinct authored visual languages.
- Keep anti-feature language explicit: no hybrid Xiaohei-Littlebox character, no arbitrary user-defined IP import in this milestone, and no hosted UI scope.

## Phase Mapping

| Phase | Goal | Pitfalls Addressed | Required Gates |
|-------|------|--------------------|----------------|
| Phase 1: Routing Foundation | Build shared workflow plus IP registry while preserving existing Xiaohei behavior | Routing leak, Xiaohei regression, package boundary, output collisions, implicit wrong-IP selection | Xiaohei baseline smoke prompts pass; registry declares both IP slots; validation checks package shape and references |
| Phase 2: Littlebox Vertical Slice | Add Littlebox references, prompt template, QA gate, output path, and attribution | Littlebox identity drift, license/NOTICE ambiguity, prompt drift, output collisions | Littlebox prompt includes closed-only state, side-seam arms, jagged seam tape, pale background; NOTICE includes okooo5km attribution; Littlebox smoke prompt passes |
| Phase 3: Validation Hardening | Convert deterministic contracts into scripts and smoke fixtures | Manual QA overload, prompt placeholder drift, set inconsistency, package-copy failure | Validation command checks registry, links, references, placeholders, output suffixes, attribution, and copy-only install shape |
| Phase 4: Documentation and Examples | Update README, examples, manifests, and user-facing selection instructions | Documentation outpaces implementation, examples become reuse templates, implicit selection confusion | README examples map to smoke prompts; example manifest includes IP, hash, purpose, and anti-reuse note; ambiguous IP behavior documented |
| Phase 5: Release Packaging | Prepare publishable repository and installable skill package | NOTICE/license omissions, root-only dependency, stale docs, regression | Full validation passes from a copied installable directory; Xiaohei and Littlebox smoke prompts pass; license/NOTICE checklist complete |

Roadmap ordering should keep validation and routing ahead of broad content migration. A stable two-IP foundation gives later phases a clear contract for adding more IPs without reworking every prompt, QA file, and documentation page again.

## Sources

- `/Users/longnv/bin/repo/ian-xiaohei-illustrations/.planning/PROJECT.md` - project scope, active requirements, constraints, and Littlebox source inspection context.
- `/Users/longnv/bin/repo/ian-xiaohei-illustrations/.planning/codebase/CONCERNS.md` - current fragility around manual validation, package boundaries, prompt drift, asset duplication, output collisions, and missing release workflow.
- `/Users/longnv/bin/repo/ian-xiaohei-illustrations/.planning/codebase/TESTING.md` - current manual-only test posture and smoke-test gaps.
- `/Users/longnv/bin/repo/ian-xiaohei-illustrations/LICENSE` and `NOTICE.md` - Ian Xiaohei MIT and attribution baseline.
- `/tmp/5km-littlebox-illustrations/LICENSE` and `NOTICE.md` - Littlebox MIT and okooo5km attribution baseline.
- `/tmp/5km-littlebox-illustrations/5km-littlebox-illustrations/references/littlebox-ip.md` - Littlebox canonical identity rules and failure modes.
- `/tmp/5km-littlebox-illustrations/5km-littlebox-illustrations/references/quality-gate.md` - Littlebox pass criteria, failure signals, iteration moves, and delivery judgment.
