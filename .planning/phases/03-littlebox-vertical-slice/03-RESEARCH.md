# Phase 3: Littlebox Vertical Slice - Research

**Researched:** 2026-06-12
**Domain:** Codex Skill multi-IP routing, Markdown reference-pack integration, Littlebox article-illustration IP adaptation
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

## Implementation Decisions

### Route Metadata
- **D-01:** The Littlebox route id is `littlebox`.
- **D-02:** The route display name is `Littlebox`.
- **D-03:** Explicit Littlebox aliases are `小盒`, `Littlebox`, `纸盒`, `paper-box`, and `carton`.
- **D-04:** Littlebox keeps `default: false`; omitted-IP requests continue to select `xiaohei`.
- **D-05:** Littlebox output suffix is `littlebox`, producing `assets/<article-slug>-littlebox/`.
- **D-06:** Phase 3 changes Littlebox route status from `phase-3-owned` to `active` once the route has complete aliases, references, prompt rules, QA, and attribution.
- **D-07:** Littlebox route metadata keeps the Phase 1 fields: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.

### Canonical Pack Shape
- **D-08:** The Littlebox canonical IP pack lives under `ian-xiaohei-illustrations/references/ips/littlebox/`.
- **D-09:** The pack includes `index.md`, `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-10:** The route `required_references` points to all six operational Littlebox files: `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-11:** `index.md` is the maintainer navigation file and records file responsibilities, source attribution, inspected commit, and output path.
- **D-12:** The source repository's `examples.md` provides evidence and smoke-test material, but Phase 3 should only extract necessary forward-test concepts into planning context or future docs; broad public example expansion belongs to Phase 5.

### Littlebox Identity, Prompt, Planning, And QA
- **D-13:** Littlebox is a closed-only paper-box character in front-left three-quarter view with dot eyes on the front panel, tiny legs, at most two side-seam twig arms, a white or near-white body, and exactly one amber seam tape with a jagged torn front tab.
- **D-14:** Littlebox prompts use flat pale sky-blue `#E3F2FD` or pale lavender `#E6E6FA` backgrounds, thick rough black marker linework, dry-brush texture, sparse amber/coral accents, generous whitespace, and one core idea per image.
- **D-15:** Littlebox planning output includes placement, core idea, `Littlebox state: closed`, visual metaphor, assigned background, suggested objects, and short visible labels.
- **D-16:** Multi-image Littlebox planning balances the background pool: even sets use equal sky-blue and lavender counts; odd sets differ by at most one unless article order strongly justifies otherwise.
- **D-17:** Littlebox prompt language is English for image-model consistency, while visible labels, planning notes, and delivery notes follow the user's language.
- **D-18:** Visible labels use the user's language, stay short, usually 3-6 labels, and should look like rough handwritten marker text rather than clean digital typography.
- **D-19:** Littlebox QA rejects passive character placement, open or half-open lids, raised flaps, cutaways, visible interiors, extra arms, wrong arm origin, missing jagged tape tab, tape on the wrong surface, tan/beige cardboard fills, thin/vector linework, clean digital labels, over-dense diagrams, black-dominant arrows, and background imbalance in a set.
- **D-20:** Littlebox output files use ordered English slugs under `assets/<article-slug>-littlebox/`, such as `01-topic-name.png`, while preserving existing assets unless the user asks for replacement.

### Mixed-IP Behavior
- **D-21:** A request for both Xiaohei and Littlebox produces separate variant groups for the same article idea or shot, one group per IP.
- **D-22:** Each variant group loads only that IP's canonical references and uses that IP's output path: Xiaohei uses `assets/<article-slug>-illustrations/`; Littlebox uses `assets/<article-slug>-littlebox/`.
- **D-23:** Mixed-IP planning should identify the shared core idea once, then present IP-specific action, metaphor, background, label, QA, and path differences inside each group.
- **D-24:** Xiaohei and Littlebox rules must not be blended: Littlebox does not inherit Xiaohei's pure-white background or thin line style, and Xiaohei does not inherit Littlebox's pale backgrounds, closed-box anatomy, amber tape, or twig-arm constraints.

### Attribution And NOTICE
- **D-25:** Phase 3 must update `NOTICE.md` with Littlebox attribution: source project `5km Littlebox Illustrations`, author `okooo5km`, source repository `https://github.com/okooo5km/5km-littlebox-illustrations`, MIT license context, and inspected commit `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`).
- **D-26:** Any adapted Littlebox rule files must preserve the MIT license obligation from the source repository, whose `LICENSE` says `Copyright (c) 2026 okooo5km`.
- **D-27:** The Littlebox NOTICE wording should state that Littlebox source material was adapted from the inspected source repository and that derived documentation should credit okooo5km.
- **D-28:** Phase 3 does not import rendered Littlebox example images into this repository by default; source examples are calibration evidence and broad example/doc expansion belongs to Phase 5.

### Compatibility With Prior Phases
- **D-29:** Phase 3 preserves Phase 1 route-first workflow and the route metadata shape in `ian-xiaohei-illustrations/references/routing.md`.
- **D-30:** Phase 3 preserves Xiaohei as the default route, including aliases `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei`.
- **D-31:** Phase 3 preserves Phase 2 canonical Xiaohei pack files under `ian-xiaohei-illustrations/references/ips/xiaohei/` and the legacy root Xiaohei compatibility entry points.
- **D-32:** Phase 3 keeps shared workflow guidance route-neutral; Littlebox-specific style, character, prompt, language, composition, and QA rules live in `references/ips/littlebox/`.

### Scope Boundaries
- **D-33:** Phase 3 owns Littlebox route activation, canonical pack creation, selected-route SKILL references, mixed-IP runtime guidance, Littlebox output path behavior, and NOTICE attribution.
- **D-34:** Phase 4 owns the lightweight validation command and automated checks for route metadata, required references, prompt placeholders, output suffixes, docs links, smoke prompts, and attribution markers.
- **D-35:** Phase 5 owns broad public README/examples refresh, richer copyable prompts for both IPs, agent metadata wording, release checklist, and any public example expansion.
- **D-36:** v1 does not add arbitrary user-defined IP imports, a hosted UI, generated visual regression, or a machine-readable asset manifest.

### the agent's Discretion
- The agent may adapt Littlebox source wording into concise project-local references, provided the hard identity, prompt, QA, label, background, output, and attribution requirements remain explicit.
- The agent may choose exact Chinese phrasing in `SKILL.md`, `routing.md`, and reference files as long as code-like route ids, paths, and field names stay English and match the decisions above.
- The agent may decide whether to add compact Littlebox route smoke wording to existing docs in Phase 3 when needed for executable behavior, while broad documentation coverage remains Phase 5 scope.

### Deferred Ideas (OUT OF SCOPE)

- Phase 4: implement one local validation command and checks for Littlebox route aliases, required references, prompt placeholders, output suffix, docs links, smoke prompts, and NOTICE markers.
- Phase 4: add manual smoke prompts for default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant behavior.
- Phase 5: refresh README, `examples/prompts.md`, `agents/openai.yaml`, and release checklist around the complete two-IP package.
- Phase 5: decide whether to include adapted Littlebox prompt examples or source-inspired public example sections.
- v2: machine-readable asset manifest, visual regression, third-IP extension schema, and custom user-defined IP imports.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ROUT-03 | User can explicitly request Littlebox using aliases such as `小盒`, `Littlebox`, `纸盒`, `paper-box`, or `carton`. | Route activation table and expected `routing.md` row define aliases and active status. |
| ROUT-04 | User gets separate variant groups when a request asks for both Xiaohei and Littlebox outputs. | `SKILL.md` update guidance defines shared core idea plus IP-specific variant groups. |
| IPCK-02 | Maintainer can find Littlebox's visual language, IP contract, composition rules, language/label rules, prompt template, and quality gate under a canonical Littlebox IP pack. | Canonical file map lists every target file under `references/ips/littlebox/` with source mapping. |
| LBOX-01 | Littlebox source material from `okooo5km/5km-littlebox-illustrations` is adapted into this installable package with clear attribution. | Source repo commit, NOTICE wording, and file mapping are documented. |
| LBOX-02 | Littlebox output uses `assets/<article-slug>-littlebox/`. | Route metadata, pack index, `SKILL.md`, and verification grep commands require this path. |
| LBOX-03 | Littlebox planning output includes closed state, visual metaphor, assigned pale sky-blue or pale lavender background, supporting objects, and short visible labels. | Planning output format from source `prompt-template.md` is mapped into `SKILL.md` and target prompt-template. |
| LBOX-04 | Littlebox prompt and QA enforce closed-only paper-box identity, front-left three-quarter view, front-panel dot eyes, tiny legs, side-seam arm limits, amber jagged seam tape, near-white body, rough marker linework, and sparse amber/coral accents. | Identity, prompt, and QA sections extract source `visual-language.md`, `littlebox-ip.md`, `prompt-template.md`, and `quality-gate.md`. |
| LBOX-05 | Littlebox image sets balance pale sky-blue `#E3F2FD` and pale lavender `#E6E6FA` backgrounds when multiple images are planned. | Background balancing rules are preserved in `style-dna.md`, `prompt-template.md`, and `SKILL.md`. |
| LBOX-06 | Littlebox visible labels follow the user's language while generation prompts stay English for model consistency. | Source `language-and-labels.md` is mapped to a dedicated target file and route behavior. |
| LBOX-07 | Littlebox QA rejects open lids, raised flaps, cutaways, visible interiors, extra arms, wrong tape placement, beige cardboard fills, clean vector linework, and passive character placement. | Target `qa-checklist.md` must include these fail signals; verification commands grep them. |
| DOCS-04 | `NOTICE.md` credits Littlebox source material, author `okooo5km`, source repository URL, MIT license context, and inspected commit `37cd93e`. | NOTICE section gives exact required wording tokens and source license evidence. |
</phase_requirements>

## Summary

Phase 3 should land Littlebox as a complete vertical route inside the existing documentation-driven Codex Skill package. The implementation is a Markdown/YAML skill integration with no application runtime and no external package installs; the primary files are `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/references/ips/littlebox/*.md`, `NOTICE.md`, plus minimal stale-wording updates in `README.md` and `examples/prompts.md`. [VERIFIED: codebase grep]

The Littlebox source repository was cloned read-only and checked out at `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`; its latest inspected commit metadata is `37cd93e`, author `okooo5km <okooo5km@gmail.com>`, commit date `2026-06-06T00:02:51+08:00`, subject `docs: refresh littlebox examples`. [VERIFIED: git checkout] Its source files define a closed-only paper-box IP, balanced pale sky-blue/lavender backgrounds, English generation prompts with user-language labels, `assets/<article-slug>-littlebox/` output, MIT license, and derived-documentation attribution guidance. [VERIFIED: upstream source files]

**Primary recommendation:** Implement Phase 3 as five ordered waves: create the Littlebox canonical pack, activate the route, update `SKILL.md` route behavior, apply minimal README/examples and NOTICE updates, then run Markdown/YAML package verification commands. [VERIFIED: codebase + upstream source]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Visual IP selection | Skill entrypoint / Markdown control plane | Reference manifest | `SKILL.md` loads `references/routing.md` first and selects the route before loading IP references. [VERIFIED: codebase grep] |
| Littlebox visual identity | IP reference pack | Image generation runtime | Identity rules belong under `references/ips/littlebox/`; host `image_gen` consumes the prompt text later. [VERIFIED: codebase grep] |
| Littlebox planning fields | Skill entrypoint | IP prompt template | Shared workflow asks for shot lists; Littlebox adds closed state, background, visual metaphor, elements, and labels. [VERIFIED: upstream SKILL.md] |
| Mixed-IP variants | Skill entrypoint | Route manifest | The request is split into separate route groups, each with its own references and output suffix. [VERIFIED: Phase 3 CONTEXT.md] |
| Output path | Route manifest | Skill delivery section | `output_suffix` drives `assets/<article-slug>-littlebox/`; `SKILL.md` tells agents how to save and report. [VERIFIED: routing.md + upstream SKILL.md] |
| Attribution | Repository docs | IP pack index | `NOTICE.md` is the legal/distribution surface; `index.md` gives maintainers source provenance near the adapted rules. [VERIFIED: upstream NOTICE.md + LICENSE] |
| Validation | Shell commands / future Phase 4 script | Manual review | Phase 3 can verify with grep, file existence, YAML parse, and `git diff --check`; Phase 4 owns the one-command validator. [VERIFIED: .planning/config.json + roadmap] |

## Project Constraints (from AGENTS.md)

- Every user-facing reply must begin with `爸爸`; final and progress responses must be Simplified Chinese. [CITED: AGENTS.md]
- Code, code comments, commit messages, and PR titles/descriptions stay English. [CITED: AGENTS.md]
- Start from original need and desired outcome; conventions and templates are secondary. [CITED: AGENTS.md]
- Prefer direct positive claims and avoid negation-based contrastive phrasing in user-facing prose. [CITED: AGENTS.md]
- Repository docs can be Chinese-first; code/scripts/comments/commit/PR copy stay English. [CITED: AGENTS.md]
- Preserve Codex Skill compatibility through `SKILL.md`, local reference files, and `agents/openai.yaml`. [CITED: AGENTS.md]
- Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working. [CITED: AGENTS.md]
- Xiaohei and Littlebox rules must remain separately readable, testable, and routable. [CITED: AGENTS.md]
- Preserve MIT notices and derived documentation attribution for Ian and okooo5km. [CITED: AGENTS.md]
- Keep the project lightweight; validation can be script-based and should avoid a full app framework. [CITED: AGENTS.md]
- Final image generation depends on the host agent's `image_gen` capability. [CITED: AGENTS.md]
- Before implementation edits, use a GSD workflow entrypoint. This research file is the current `$gsd-plan-phase 3` research artifact. [CITED: AGENTS.md]

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Markdown files | Repository-local | Skill instructions, route metadata, IP packs, QA rules, examples, NOTICE | The current package is a documentation-first Codex Skill with Markdown entrypoints and references. [VERIFIED: codebase grep] |
| YAML metadata | Repository-local | `ian-xiaohei-illustrations/agents/openai.yaml` skill metadata | Existing Codex Skill package already uses YAML agent metadata. [VERIFIED: codebase grep] |
| Git | 2.50.1 (Apple Git-155) | Read upstream source at pinned commit and verify local diffs | Available locally and used to check out the upstream Littlebox commit. [VERIFIED: local command] |
| ripgrep | 15.1.0 | Fast verification of required markers and references | Available locally and matches repo verification style from Phases 1 and 2. [VERIFIED: local command] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Node.js | v24.13.0 | Optional YAML/Markdown shape checks with small inline scripts | Use for Phase 3 ad-hoc verification or Phase 4 validator planning. [VERIFIED: local command] |
| Python | 3.12.12 | Optional simple text/file validation | Use only if a shell/Node check becomes awkward. [VERIFIED: local command] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown route table | JSON/YAML manifest | JSON/YAML would simplify machine validation, but Phase 1 locked human-readable `routing.md` metadata and Phase 4 owns validator hardening. [VERIFIED: Phase 1 verification] |
| Adapted local Littlebox references | Git submodule or vendored whole source skill | Local adapted files preserve package boundary and prevent source package shape from leaking into this skill. [VERIFIED: Phase 3 CONTEXT.md] |
| Manual grep verification | Full test framework | The repo has no package manifest or test runner; Phase 4 owns the one-command validator. [VERIFIED: codebase scan] |

**Installation:**

No external package installation is required for Phase 3. [VERIFIED: codebase scan]

**Version verification:** The phase does not install external packages. Local tool availability was verified with:

```bash
git --version
node --version
rg --version | head -1
python3 --version
```

## Package Legitimacy Audit

No external packages are installed in Phase 3, so the Package Legitimacy Gate is not applicable. [VERIFIED: codebase scan]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| N/A | N/A | N/A | N/A | N/A | N/A | No packages installed |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none

## Recommended Implementation Waves

| Wave | Goal | File Ownership | Dependencies | Verification Focus |
|------|------|----------------|--------------|--------------------|
| 1 | Create canonical Littlebox pack | Add `ian-xiaohei-illustrations/references/ips/littlebox/index.md`, `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, `qa-checklist.md` | Phase 2 canonical Xiaohei pack pattern; upstream Littlebox source files | Required files exist; source markers, output path, identity, language split, and QA fail signals are present. |
| 2 | Activate Littlebox route | Edit `ian-xiaohei-illustrations/references/routing.md` | Wave 1 files must exist so `required_references` point to real paths | Row has aliases, `default: false`, suffix `littlebox`, six references, attribution context, `active`. |
| 3 | Wire selected-route runtime behavior | Edit `ian-xiaohei-illustrations/SKILL.md` | Wave 1 and Wave 2 | Route selection names Littlebox aliases; planning fields are IP-aware; mixed-IP grouping loads references per group; output path uses route suffix. |
| 4 | Add attribution and minimal stale-wording docs | Edit `NOTICE.md`, minimal `README.md`, minimal `examples/prompts.md` | Waves 1-3 | NOTICE includes required source tokens; README/examples stop describing Littlebox as pending Phase 3 behavior while leaving broad docs to Phase 5. |
| 5 | Verify package shape and drift | No implementation edits; run commands | Waves 1-4 | `git diff --check`; grep markers; file existence; YAML parse; default Xiaohei row unchanged; no imported Littlebox rendered images. |

Dependency order matters because route activation before pack creation creates broken `required_references`, and `SKILL.md` runtime wording before route activation can advertise behavior that the manifest still marks as `phase-3-owned`. [VERIFIED: codebase grep]

## Exact Littlebox Reference Files And Source Mapping

| Target File | Source Material | Required Content | Confidence |
|-------------|-----------------|------------------|------------|
| `references/ips/littlebox/index.md` | Phase 3 context, upstream `NOTICE.md`, upstream `LICENSE`, upstream `SKILL.md` | Navigation list, output path `assets/<article-slug>-littlebox/`, source repo URL, inspected commit `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`, file responsibilities, attribution note. | HIGH [VERIFIED: upstream source files] |
| `references/ips/littlebox/style-dna.md` | `5km-littlebox-illustrations/references/visual-language.md` | 16:9, flat `#E3F2FD` / `#E6E6FA` background pool, thick black marker, dry-brush roughness, near-white Littlebox body, amber/coral palette, background balancing, label style, visual bans. | HIGH [VERIFIED: upstream visual-language.md] |
| `references/ips/littlebox/littlebox-ip.md` | `5km-littlebox-illustrations/references/littlebox-ip.md` | Closed-only body, front-left three-quarter view, front-panel dot eyes, tiny legs, at most two side-seam twig arms, exactly one amber seam tape with jagged tab, closed lid, proportions, actions, recognition rule, failure modes. | HIGH [VERIFIED: upstream littlebox-ip.md] |
| `references/ips/littlebox/composition-patterns.md` | `5km-littlebox-illustrations/references/composition-methods.md` | Intake/packaging, before/after, handoff path, hidden interior without cutaway, pressure/overflow, evidence bundle, mini comic, metaphor invention, anti-repeat, spatial rule, flow mark rule. | HIGH [VERIFIED: upstream composition-methods.md] |
| `references/ips/littlebox/language-and-labels.md` | `5km-littlebox-illustrations/references/language-and-labels.md` | User-language planning/delivery, English image prompts, exact quoted visible labels, 3-6 short labels, rough marker label style, text-failure repair sequence. | HIGH [VERIFIED: upstream language-and-labels.md] |
| `references/ips/littlebox/prompt-template.md` | `5km-littlebox-illustrations/references/prompt-template.md` | Single-image prompt template, planning output format, edit prompts for active Littlebox, label fixes, diagram reduction; preserve English prompt and user-language labels. | HIGH [VERIFIED: upstream prompt-template.md] |
| `references/ips/littlebox/qa-checklist.md` | `5km-littlebox-illustrations/references/quality-gate.md` | Pass criteria, fail signals, iteration moves, delivery judgment, background imbalance check, closed-only/tape/arm/body/linework/label rejection rules. | HIGH [VERIFIED: upstream quality-gate.md] |

Use concise adapted wording rather than verbatim wholesale copying. The target pack should preserve operational constraints and attribution while matching the existing Xiaohei canonical pack's compact Markdown style. [VERIFIED: codebase grep]

## Route Activation Requirements

Littlebox becomes active only when the route row has complete aliases, six operational references, the output suffix, attribution context, and `active` status. [VERIFIED: Phase 3 CONTEXT.md]

Expected `routing.md` row:

```markdown
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | `references/ips/littlebox/style-dna.md`; `references/ips/littlebox/littlebox-ip.md`; `references/ips/littlebox/composition-patterns.md`; `references/ips/littlebox/language-and-labels.md`; `references/ips/littlebox/prompt-template.md`; `references/ips/littlebox/qa-checklist.md` | 5km Littlebox Illustrations by okooo5km; source https://github.com/okooo5km/5km-littlebox-illustrations; MIT; inspected commit 37cd93e | `active` |
```

`routing.md` should also add output path bullets for Littlebox:

- `littlebox` output directory: `assets/<article-slug>-littlebox/`.
- Littlebox file names use ordered English slugs such as `01-topic-name.png`.
- Mixed-IP requests create separate route groups and separate output directories. [VERIFIED: Phase 3 CONTEXT.md]

Keep the Xiaohei row unchanged for aliases, default, suffix, required references, and status. [VERIFIED: Phase 2 verification]

## SKILL.md Updates Needed

`SKILL.md` already has the right control-plane shape: read routing first, select visual IP, load selected `required_references`, keep shared workflow route-neutral, and save according to route output suffix. [VERIFIED: codebase grep] Phase 3 should make these concrete updates:

| Area | Required Update | Reason |
|------|-----------------|--------|
| Reference list | Add `references/ips/littlebox/index.md`, `style-dna.md`, `littlebox-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, and `qa-checklist.md` to the "read as needed" list. | Maintainers and agents can discover the active Littlebox pack. [VERIFIED: Phase 3 CONTEXT.md] |
| Route selection | Add aliases `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`; state omitted IP still selects Xiaohei. | Satisfies ROUT-03 while preserving ROUT-01. [VERIFIED: REQUIREMENTS.md] |
| Planning output | Make the generic shot-list field "selected visual IP action" route-specific; for Littlebox require `Littlebox state: closed`, visual metaphor, assigned background, objects, labels. | Satisfies LBOX-03. [VERIFIED: upstream prompt-template.md] |
| Background planning | For Littlebox sets, pre-assign `#E3F2FD` and `#E6E6FA` with balanced counts. | Background balance is behavior, not decoration. [VERIFIED: upstream visual-language.md] |
| Prompt assembly | State that generation prompts follow the selected IP template; Littlebox prompts are English while visible labels use the user's language. | Prevents label/prompt language drift. [VERIFIED: upstream language-and-labels.md] |
| QA handoff | Route Xiaohei QA to Xiaohei pack and Littlebox QA to Littlebox pack; list Littlebox high-risk checks in the shared workflow only as route examples. | Prevents Xiaohei/Littlebox rule blending. [VERIFIED: Phase 3 CONTEXT.md] |
| Mixed-IP behavior | When both IPs are requested, identify the shared core idea once, then produce one variant group per IP with its own action/metaphor/background/labels/QA/path. | Satisfies ROUT-04 and D-21 through D-24. [VERIFIED: Phase 3 CONTEXT.md] |
| Save behavior | Replace "phase-owned routes" placeholder with active Littlebox output path from route metadata. | Prevents output path drift. [VERIFIED: upstream SKILL.md] |
| Delivery report | Include selected IP and, for mixed requests, one block per IP group with saved path. | Makes route behavior observable to users. [VERIFIED: Phase 1 verification] |

## Minimal README And Examples Updates For Phase 3

Phase 3 owns minimal stale-wording fixes because `README.md` and `examples/prompts.md` currently say Littlebox execution rules are delivered by Phase 3. Once Phase 3 activates the route, that wording becomes false. [VERIFIED: codebase grep]

Minimum README edits:

- In "视觉 IP 路由", change "当前可用执行路径是 Xiaohei" to "当前可用执行路径包括 Xiaohei 和 Littlebox，Xiaohei 是默认视觉 IP". [VERIFIED: README.md]
- Add Littlebox aliases and output path: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`; `assets/<article-slug>-littlebox/`. [VERIFIED: Phase 3 CONTEXT.md]
- Replace "Littlebox 的执行规则、提示词、QA 和完整输出行为由 Phase 3 交付" with active route wording. [VERIFIED: README.md]
- Add `references/ips/littlebox/` to the directory tree if the tree is maintained in this phase. [VERIFIED: README.md]
- Avoid broad new public examples, marketing copy, agent metadata wording, release checklist, or rendered Littlebox image import; those remain Phase 5. [VERIFIED: ROADMAP.md]

Minimum `examples/prompts.md` edits:

- Replace the Phase 1 multi-IP pending note with active mixed-IP wording. [VERIFIED: examples/prompts.md]
- Add one compact explicit Littlebox route smoke prompt and one compact mixed-IP variant prompt only if needed to make active behavior copyable. [VERIFIED: Phase 3 CONTEXT.md]
- Preserve existing Xiaohei prompts and output path examples unchanged. [VERIFIED: Phase 2 verification]

## NOTICE Attribution Wording Requirements

`NOTICE.md` must add a Littlebox section that includes these tokens exactly or very close variants suitable for grep-based validation:

- `5km Littlebox Illustrations`
- `okooo5km`
- `https://github.com/okooo5km/5km-littlebox-illustrations`
- `MIT`
- `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`
- `37cd93e`
- `Copyright (c) 2026 okooo5km`
- adapted source material / derived documentation credit language

Recommended wording:

```markdown
Littlebox source material was adapted from `5km Littlebox Illustrations` by okooo5km:
<https://github.com/okooo5km/5km-littlebox-illustrations>

The source repository is MIT licensed and its LICENSE includes:
`Copyright (c) 2026 okooo5km`.

The Littlebox rules in this repository were inspected from commit
`37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`).

When redistributing or adapting Littlebox-derived documentation, credit okooo5km
or the `5km Littlebox Illustrations` source project in derived documentation.
```

This wording satisfies the source `NOTICE.md`, which asks redistributors/adapters to keep the `5km Littlebox Illustrations` name or credit okooo5km in derived documentation. [VERIFIED: upstream NOTICE.md]

## Architecture Patterns

### System Architecture Diagram

```text
User request
  |
  v
SKILL.md route selection
  |
  v
references/routing.md
  |-- omitted IP / Xiaohei alias --> xiaohei route --> references/ips/xiaohei/* --> Xiaohei planning/prompt/QA --> assets/<article-slug>-illustrations/
  |
  |-- Littlebox alias -----------> littlebox route --> references/ips/littlebox/* --> Littlebox planning/prompt/QA --> assets/<article-slug>-littlebox/
  |
  `-- both IPs ------------------> shared core idea
                                      |
                                      |-- Xiaohei variant group
                                      `-- Littlebox variant group
```

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── routing.md
    └── ips/
        ├── xiaohei/
        │   ├── index.md
        │   ├── style-dna.md
        │   ├── xiaohei-ip.md
        │   ├── composition-patterns.md
        │   ├── prompt-template.md
        │   └── qa-checklist.md
        └── littlebox/
            ├── index.md
            ├── style-dna.md
            ├── littlebox-ip.md
            ├── composition-patterns.md
            ├── language-and-labels.md
            ├── prompt-template.md
            └── qa-checklist.md
```

### Pattern 1: Route-First Reference Loading

**What:** `SKILL.md` selects a visual IP from `routing.md`, then loads only that route's `required_references`. [VERIFIED: codebase grep]

**When to use:** Every planning, generation, QA, edit, and mixed-IP request.

**Example:**

```markdown
1. Read `references/routing.md`.
2. Match aliases to a route id.
3. Load only that route's `required_references`.
4. Use the route's `output_suffix` for save paths.
```

### Pattern 2: IP Pack Isolation

**What:** Littlebox-specific style, anatomy, composition, prompt, language, and QA rules live under `references/ips/littlebox/`; shared workflow stays route-neutral. [VERIFIED: Phase 3 CONTEXT.md]

**When to use:** Any rule that mentions pale backgrounds, closed box anatomy, amber seam tape, twig arms, language split, or Littlebox output suffix.

**Example:**

```markdown
Littlebox-specific:
- `references/ips/littlebox/littlebox-ip.md`
- `references/ips/littlebox/language-and-labels.md`

Shared:
- `SKILL.md` route selection
- `references/routing.md` route metadata
```

### Pattern 3: Variant Groups For Mixed-IP Requests

**What:** One shared core idea feeds separate IP groups; each group has route-specific action, metaphor, labels, background, QA, and path. [VERIFIED: Phase 3 CONTEXT.md]

**When to use:** User asks for both Xiaohei and Littlebox, side-by-side IP variants, or same idea in two visual IPs.

**Example:**

```markdown
Shared core idea: trust is built from evidence handoffs.

Variant group: Xiaohei
- Action: Xiaohei places evidence stones across a bridge.
- Path: `assets/<article-slug>-illustrations/`

Variant group: Littlebox
- Action: closed Littlebox seals evidence slips into a package.
- Background: pale lavender `#E6E6FA`
- Path: `assets/<article-slug>-littlebox/`
```

### Anti-Patterns to Avoid

- **Blending route rules:** Littlebox should use pale backgrounds and chunky marker strokes; Xiaohei should keep pure white and thinner hand-drawn line art. [VERIFIED: Phase 3 CONTEXT.md]
- **Turning Littlebox into a container/cutaway:** The source IP requires closed-only final illustrations and external props for intake, sorting, and transformation. [VERIFIED: upstream littlebox-ip.md]
- **Adding arms to solve complexity:** Use trays, slots, tags, paths, or props for extra targets; Littlebox has at most two side-seam twig arms. [VERIFIED: upstream littlebox-ip.md]
- **Activating route before references exist:** Broken `required_references` undermine route-first loading. [VERIFIED: codebase grep]
- **Expanding public docs in Phase 3:** Keep public docs minimal; broad examples, metadata polish, and release checklist are Phase 5. [VERIFIED: ROADMAP.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Littlebox source model | A new box IP from memory | Adapt upstream Littlebox source files at pinned commit | The source repo contains precise identity, tape, arm, background, label, and QA rules. [VERIFIED: upstream source files] |
| Route metadata shape | A new manifest format | Existing `references/routing.md` table fields | Phase 1 verified this shape and Phase 3 context locks it. [VERIFIED: Phase 1 verification] |
| Mixed-IP grouping | A merged hybrid prompt | Separate variant groups by route | Hybrid identity is out of scope and breaks IP isolation. [VERIFIED: REQUIREMENTS.md] |
| Output directories | Hardcoded per-flow prose | Route `output_suffix` plus path rules | The route manifest already owns suffixes and keeps paths testable. [VERIFIED: routing.md] |
| Legal attribution | Informal README mention only | `NOTICE.md` plus IP pack source note | MIT and source NOTICE require durable redistribution/adaptation credit. [VERIFIED: upstream LICENSE + NOTICE.md] |

**Key insight:** The hard part is route isolation, not image prompt creativity. Most implementation defects will come from mixing Xiaohei and Littlebox rules, leaving pending placeholder wording, or activating a route whose references and NOTICE are incomplete. [VERIFIED: Phase 3 CONTEXT.md]

## Common Pitfalls

### Pitfall 1: Xiaohei Regression

**What goes wrong:** Default route, aliases, output suffix, or canonical Xiaohei references change while adding Littlebox.

**Why it happens:** `routing.md` row edits and `SKILL.md` wording updates are adjacent to Xiaohei behavior.

**How to avoid:** Treat Xiaohei row and output path as protected; verify exact aliases, `default: true`, `illustrations`, and canonical reference paths after edits.

**Warning signs:** README/examples still work for Littlebox but default `$ian-xiaohei-illustrations` wording changes path or style.

### Pitfall 2: Rule Blending

**What goes wrong:** Littlebox inherits white background/thin line style or Xiaohei inherits pale backgrounds/tape/twig arms.

**Why it happens:** Shared `SKILL.md` examples can accidentally describe IP-specific style as universal.

**How to avoid:** Keep style claims inside IP packs and use generic "selected IP" wording in shared workflow.

**Warning signs:** `SKILL.md` has global bullets containing Littlebox-only colors or Xiaohei-only white background.

### Pitfall 3: Background Balance Becomes Decorative

**What goes wrong:** Littlebox planning omits the background assignment or uses one background for a whole set.

**Why it happens:** Background may look like a style detail, but upstream makes it a planning rule.

**How to avoid:** Add background as a required Littlebox shot-list field and mention even/odd balancing in `SKILL.md` and `style-dna.md`.

**Warning signs:** Shot-list examples have no `Background:` field.

### Pitfall 4: Label Language Drift

**What goes wrong:** Visible labels are translated to English because prompts are English, or prompts are written in Chinese and lose source template specificity.

**Why it happens:** The source skill splits prompt language from visible label language.

**How to avoid:** Write generation prompts in English and quote exact visible labels in the user's language.

**Warning signs:** Prompt examples say "Chinese labels" globally for Littlebox instead of "user's language".

### Pitfall 5: Output Path Drift

**What goes wrong:** Littlebox images are saved under Xiaohei's `assets/<article-slug>-illustrations/` path.

**Why it happens:** Existing save section only names the Xiaohei path and calls other routes phase-owned.

**How to avoid:** Activate `output_suffix: littlebox` and update save behavior to use selected route suffix.

**Warning signs:** `rg "assets/<article-slug>-littlebox"` finds only requirements/planning files.

### Pitfall 6: Attribution Looks Complete But Misses License Marker

**What goes wrong:** `NOTICE.md` credits okooo5km but omits MIT, copyright, source URL, or commit.

**Why it happens:** Attribution gets treated as prose rather than a verification surface.

**How to avoid:** Include the exact source project, author, URL, MIT, copyright, full commit, and short commit tokens.

**Warning signs:** `rg "37cd93|Copyright \\(c\\) 2026 okooo5km|MIT|okooo5km" NOTICE.md` misses one or more tokens.

## Code Examples

Verified patterns from source and codebase:

### Littlebox Planning Output Shape

```text
1. Placement: [where it appears]
   Core idea: [one sentence]
   Littlebox state: closed
   Visual metaphor: [physical box action]
   Background: [pale sky blue #E3F2FD / pale lavender #E6E6FA]
   Elements: [3-5 objects]
   Labels: [short visible labels]
```

Source: upstream `5km-littlebox-illustrations/references/prompt-template.md` at commit `37cd93e`. [VERIFIED: upstream prompt-template.md]

### Littlebox Output Path

```text
assets/<article-slug>-littlebox/
```

Source: upstream `5km-littlebox-illustrations/SKILL.md` and Phase 3 D-05. [VERIFIED: upstream SKILL.md]

### Mixed-IP Variant Group Shape

```markdown
Shared core idea: [one sentence]

Variant group: Xiaohei
- Selected IP: Xiaohei
- Core action:
- Prompt/QA references:
- Save path: `assets/<article-slug>-illustrations/`

Variant group: Littlebox
- Selected IP: Littlebox
- Littlebox state: closed
- Visual metaphor:
- Background:
- Prompt/QA references:
- Save path: `assets/<article-slug>-littlebox/`
```

Source: Phase 3 D-21 through D-24. [VERIFIED: Phase 3 CONTEXT.md]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single-IP Xiaohei skill | Route-first multi-IP skill with Xiaohei default and Littlebox active route | Phase 3 target, after Phase 1/2 foundation | Planner should add Littlebox without refactoring Xiaohei pack. [VERIFIED: ROADMAP.md] |
| Root Xiaohei reference files | Canonical Xiaohei pack under `references/ips/xiaohei/` plus root compatibility files | Phase 2 completed 2026-06-12 | Littlebox should mirror canonical pack shape under `references/ips/littlebox/`. [VERIFIED: Phase 2 verification] |
| Littlebox placeholder row | Active `littlebox` row with aliases and six required references | Phase 3 target | Users can explicitly request Littlebox and mixed-IP variants. [VERIFIED: Phase 3 CONTEXT.md] |
| Pending Littlebox docs wording | Minimal active-route wording in README/examples | Phase 3 target | Avoids stale placeholder text while leaving broad docs to Phase 5. [VERIFIED: README.md + ROADMAP.md] |

**Deprecated/outdated:**

- `routing.md` Littlebox `phase-3-owned` status: replace with `active` after all references and attribution land. [VERIFIED: Phase 3 CONTEXT.md]
- README/examples statements that Littlebox execution is delivered by Phase 3: replace with active behavior in Phase 3. [VERIFIED: codebase grep]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Future Phase 4 validator will likely be a lightweight script using grep/file checks rather than a full framework. [ASSUMED] | Standard Stack / Verification Strategy | Planner might overfit Phase 3 checks to a future script shape; keep Phase 3 command-based and dependency-light. |

## Open Questions

1. **Should Phase 3 include a copyable Littlebox prompt in `examples/prompts.md`?**
   - What we know: The context permits compact route smoke wording if needed for executable behavior; Phase 5 owns broad examples.
   - What's unclear: Whether the planner wants a minimal smoke prompt now or a docs-only wording correction.
   - Recommendation: Include one compact Littlebox smoke prompt and one mixed-IP prompt because ROUT-03/ROUT-04 are user-facing and grep-verifiable.

2. **Should `agents/openai.yaml` mention Littlebox in Phase 3?**
   - What we know: Phase 5 owns agent metadata wording.
   - What's unclear: Whether runtime discovery depends on metadata in this environment.
   - Recommendation: Keep `agents/openai.yaml` for Phase 5 unless implementation discovers that implicit invocation cannot see Littlebox aliases through `SKILL.md` description.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Git | Upstream source checkout and diff verification | yes | 2.50.1 (Apple Git-155) | Use already cloned `/tmp/gsd-littlebox-src` source snapshot during this session |
| ripgrep | Marker and path verification | yes | 15.1.0 | POSIX `grep`, with slower commands |
| Node.js | Optional YAML/text validation | yes | v24.13.0 | Ruby/Python one-liners or manual grep |
| Python | Optional text validation | yes | 3.12.12 | Node or shell |
| Host `image_gen` | Runtime image generation after implementation | yes in agent environment | Tool-provided | Manual planning/QA only if unavailable |

**Missing dependencies with no fallback:** none found.

**Missing dependencies with fallback:** none found for Phase 3 research and documentation verification.

## Verification Strategy And Concrete Commands

Phase 3 has `workflow.nyquist_validation` set to `false`, so no Nyquist Validation Architecture section is required. [VERIFIED: .planning/config.json] Verification should still be concrete and command-based:

```bash
# 1. Whitespace and patch hygiene
git diff --check -- \
  ian-xiaohei-illustrations/SKILL.md \
  ian-xiaohei-illustrations/references/routing.md \
  ian-xiaohei-illustrations/references/ips/littlebox \
  README.md examples/prompts.md NOTICE.md
```

```bash
# 2. Required Littlebox pack files exist
for f in index style-dna littlebox-ip composition-patterns language-and-labels prompt-template qa-checklist; do
  test -f "ian-xiaohei-illustrations/references/ips/littlebox/$f.md" || exit 1
done
```

```bash
# 3. Littlebox route is active and complete
rg -n '`littlebox` \\| Littlebox \\| `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` \\| `false` \\| `littlebox`' \
  ian-xiaohei-illustrations/references/routing.md
rg -n 'references/ips/littlebox/(style-dna|littlebox-ip|composition-patterns|language-and-labels|prompt-template|qa-checklist)\\.md' \
  ian-xiaohei-illustrations/references/routing.md
rg -n '`active`|37cd93e|okooo5km|5km Littlebox Illustrations' \
  ian-xiaohei-illustrations/references/routing.md
```

```bash
# 4. Xiaohei route invariants remain intact
rg -n '`xiaohei` \\| Xiaohei \\| `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` \\| `true` \\| `illustrations`' \
  ian-xiaohei-illustrations/references/routing.md
rg -n 'references/ips/xiaohei/(style-dna|xiaohei-ip|composition-patterns|prompt-template|qa-checklist)\\.md' \
  ian-xiaohei-illustrations/references/routing.md
```

```bash
# 5. Littlebox identity and QA markers are present
rg -n 'closed|front-left three-quarter|dot eyes|tiny legs|side-seam twig arms|at most two arms|amber|jagged|near-white|#E3F2FD|#E6E6FA|#F59E0B|#E85D75' \
  ian-xiaohei-illustrations/references/ips/littlebox/*.md
rg -n 'open|half-open|raised flaps|cutaway|visible interior|third arm|tan|beige|vector|passive|background.*balance|clean digital' \
  ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md
```

```bash
# 6. SKILL.md selected-route behavior and paths
rg -n 'Littlebox|小盒|纸盒|paper-box|carton|mixed|variant group|required_references|assets/<article-slug>-littlebox|language|labels|#E3F2FD|#E6E6FA' \
  ian-xiaohei-illustrations/SKILL.md
```

```bash
# 7. Minimal public docs and NOTICE markers
rg -n 'Littlebox|小盒|paper-box|carton|assets/<article-slug>-littlebox|references/ips/littlebox' README.md examples/prompts.md
rg -n '5km Littlebox Illustrations|okooo5km|https://github.com/okooo5km/5km-littlebox-illustrations|MIT|37cd93ee516da0324577b7bbc8ca3146e5c8d8d7|37cd93e|Copyright \\(c\\) 2026 okooo5km' NOTICE.md
```

```bash
# 8. No rendered Littlebox example images imported in Phase 3 by default
find examples/images ian-xiaohei-illustrations/assets/examples -type f | rg -i 'littlebox|小盒|box|carton' && exit 1 || true
```

```bash
# 9. YAML metadata remains parseable if touched later
node -e "const fs=require('fs'); const p='ian-xiaohei-illustrations/agents/openai.yaml'; if (fs.existsSync(p)) console.log(fs.readFileSync(p,'utf8').split('\\n')[0])"
```

## Security Domain

Security enforcement is enabled in `.planning/config.json`; Phase 3 is a Markdown/YAML skill-package change with no new runtime service, authentication, database, network calls, or package installation. [VERIFIED: .planning/config.json + codebase scan]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface in this phase. [VERIFIED: codebase scan] |
| V3 Session Management | no | No session surface in this phase. [VERIFIED: codebase scan] |
| V4 Access Control | no | No service/API access-control surface in this phase. [VERIFIED: codebase scan] |
| V5 Input Validation | yes | Treat route aliases and output path rules as fixed Markdown contract; verify via grep and manual review. [VERIFIED: routing.md] |
| V6 Cryptography | no | No cryptographic behavior in this phase. [VERIFIED: codebase scan] |

### Known Threat Patterns for Markdown Skill Package

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Source attribution loss | Repudiation | Preserve `NOTICE.md` source, license, copyright, and commit markers. [VERIFIED: upstream NOTICE.md + LICENSE] |
| Prompt rule injection through blended shared prose | Tampering | Keep IP-specific prompt rules inside selected IP packs and load by route. [VERIFIED: Phase 3 CONTEXT.md] |
| Output path confusion overwriting assets | Tampering | Use route `output_suffix`; preserve existing assets unless replacement is requested. [VERIFIED: SKILL.md] |
| Dependency confusion | Tampering | Install no external packages in Phase 3. [VERIFIED: codebase scan] |

## Sources

### Primary (HIGH confidence)

- Local `AGENTS.md` instructions - project constraints, language policy, GSD workflow, and documentation/code language split. [CITED: AGENTS.md]
- `.planning/PROJECT.md` - project value, constraints, Littlebox source summary. [VERIFIED: codebase grep]
- `.planning/REQUIREMENTS.md` - Phase 3 requirement IDs and traceability. [VERIFIED: codebase grep]
- `.planning/ROADMAP.md` - Phase 3 boundary and Phase 4/5 ownership. [VERIFIED: codebase grep]
- `.planning/STATE.md` - current project position and Phase 3 readiness. [VERIFIED: codebase grep]
- `.planning/phases/03-littlebox-vertical-slice/03-CONTEXT.md` - locked Phase 3 decisions. [VERIFIED: codebase grep]
- `.planning/phases/01-routing-foundation/01-VERIFICATION.md` - verified route-first baseline. [VERIFIED: codebase grep]
- `.planning/phases/02-xiaohei-canonicalization/02-VERIFICATION.md` and `02-UAT.md` - verified Xiaohei canonical baseline. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/SKILL.md`, `references/routing.md`, `references/ips/xiaohei/index.md`, `README.md`, `examples/prompts.md`, `NOTICE.md`, `LICENSE` - current package implementation and docs. [VERIFIED: codebase grep]
- Upstream `https://github.com/okooo5km/5km-littlebox-illustrations` checked out at `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` - Littlebox source files, NOTICE, and LICENSE. [VERIFIED: git checkout]

### Secondary (MEDIUM confidence)

- None. This phase relies on local project artifacts and pinned upstream source files.

### Tertiary (LOW confidence)

- None used for implementation guidance.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - repo has no package manager or application runtime; local tools were verified.
- Architecture: HIGH - Phase 1/2 verification and current files define route-first Markdown architecture.
- Littlebox rules: HIGH - source repo was checked out at the required commit and all named source files were read.
- Pitfalls: HIGH - risks are derived from locked Phase 3 decisions, upstream Littlebox constraints, and current placeholder wording.

**Research date:** 2026-06-12
**Valid until:** 2026-07-12 for local implementation guidance; re-check upstream if adapting from a newer Littlebox commit.
