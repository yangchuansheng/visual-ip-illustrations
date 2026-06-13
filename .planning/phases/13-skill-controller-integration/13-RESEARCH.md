# Phase 13: Skill Controller Integration - Research

**Researched:** 2026-06-13
**Domain:** Markdown-driven Codex Skill controller routing for multi-visual-IP article illustration
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Route Selection and Defaults

- **D-01:** Preserve Xiaohei as the only omitted-IP default route.
- **D-02:** Ferris remains an explicit route with `default=false`, route id `ferris`, display name `Ferris`, `output_suffix=ferris`, and route status `source-reviewed`.
- **D-03:** Ferris aliases are locked to `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹` for Phase 13.
- **D-04:** `SKILL.md` should add Ferris to the route-selection bullets beside Xiaohei, Littlebox, and Tom, using the same route-table vocabulary as `references/routing.md`.
- **D-05:** Omitted visual-IP text, generic "article illustration", "hand-drawn", "正文配图", and existing Xiaohei prompts continue to select Xiaohei through the legacy-compatible path.

### Ferris Required References

- **D-06:** Expand the Ferris `required_references` cell in `ian-xiaohei-illustrations/references/routing.md` from only `references/ips/ferris/source.md` to the full Phase 12 pack:
  - `references/ips/ferris/index.md`
  - `references/ips/ferris/source.md`
  - `references/ips/ferris/style-dna.md`
  - `references/ips/ferris/ferris-ip.md`
  - `references/ips/ferris/composition-patterns.md`
  - `references/ips/ferris/prompt-template.md`
  - `references/ips/ferris/qa-checklist.md`
- **D-07:** `SKILL.md` should list the Ferris pack files under "先读这些参考" with compact one-line purposes, matching the existing Tom route pattern.
- **D-08:** Each Ferris route group loads only Ferris `required_references`; source/trademark authority remains `references/ips/ferris/source.md`.

### Planning, Generation, QA, and Edits

- **D-09:** Ferris shot lists use the Phase 12 Ferris planning fields: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-10:** Ferris generation uses `references/ips/ferris/prompt-template.md`, `references/ips/ferris/composition-patterns.md`, and the route-local Ferris identity/style references.
- **D-11:** Ferris QA uses `references/ips/ferris/qa-checklist.md` and carries these failure categories into the controller high-risk list: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-12:** Ferris edit/repair routing uses the six Phase 12 edit gates from `prompt-template.md`: participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation.
- **D-13:** Ferris planning, generation, QA, edit, and delivery contexts keep `source-reviewed`, `references/ips/ferris/source.md`, and the compact source/trademark note visible.

### Mixed-IP Behavior

- **D-14:** Mixed-IP requests use one shared core idea and separate variant groups for each selected IP.
- **D-15:** Four-IP mixed requests create four independent groups: Xiaohei, Littlebox, Tom, and Ferris.
- **D-16:** Each group keeps its own route id, required references, prompt template, composition rules, QA checklist, edit gates, output suffix, delivery path, and route-specific notes.
- **D-17:** Ferris mixed-IP groups include Ferris state, Ferris action, supporting objects, visible labels, `assets/<article-slug>-ferris/`, `source-reviewed`, and the `references/ips/ferris/source.md` source/trademark pointer.
- **D-18:** Mixed-IP delivery uses one block per selected IP. Add a Ferris block beside existing Xiaohei, Littlebox, and Tom blocks.

### Output Paths and Escaped Tokens

- **D-19:** Ferris output path is `assets/<article-slug>-ferris/`.
- **D-20:** Ferris documentation/validation token is `assets/&lt;article-slug&gt;-ferris/`.
- **D-21:** `SKILL.md` save/delivery sections should add Ferris to the active path code block list, output suffix mapping, validation marker list, mixed-IP save path list, and delivery block list.
- **D-22:** Ferris file names follow the existing ordered English slug pattern, such as `01-topic-name.png`.
- **D-23:** Generated assets are written into the user's workspace route output directory, preserving existing assets unless the user explicitly asks for replacement.

### Phase Boundary and File Scope

- **D-24:** Phase 13 likely modifies only:
  - `ian-xiaohei-illustrations/SKILL.md`
  - `ian-xiaohei-illustrations/references/routing.md`
- **D-25:** Phase 13 may update adjacent wording only when required to keep those two controller surfaces coherent.
- **D-26:** Phase 14 owns public docs/examples/metadata/release-surface work:
  - `README.md`
  - `examples/prompts.md`
  - `ian-xiaohei-illustrations/agents/openai.yaml`
  - `NOTICE.md`
  - `RELEASE_CHECKLIST.md`
- **D-27:** Phase 15 owns validation hardening:
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`

### the agent's Discretion

- The user requested a non-interactive Phase 13 discussion artifact with autonomous resolution of open questions. Codebase evidence locked the recommended decisions above.
- The planner may tune exact Chinese heading text in `SKILL.md` while preserving the route behavior, alias list, output path, escaped token, mixed-IP grouping, and source/trademark note requirements.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Phase 14: README public Ferris route docs, copyable Ferris planning/generation/smoke prompts, four-IP mixed prompts, agent metadata, NOTICE consistency pass, and release checklist Ferris expansion.
- Phase 15: validator and Node test hardening for Ferris route behavior, full pack refs, prompt placeholders, QA markers, docs markers, source/trademark markers, raw and escaped path tokens, route leakage, public sample gates, and four-route parser behavior.
- v2: reusable mascot manifest, asset manifest, visual regression, package/release script, route selector, and English localization.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FERR-01 | User can explicitly request Ferris through clear aliases such as `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`. | Add Ferris alias selection to `SKILL.md`; `routing.md` already contains the locked alias list. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: codebase grep] |
| FERR-02 | User who omits visual IP still gets Xiaohei as the only default route. | Preserve existing omitted-IP controller bullet and single `default=true` route row for `xiaohei`. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: codebase grep] |
| FERR-03 | User can request Xiaohei, Littlebox, Tom, and Ferris for the same core idea and receive separate variant groups. | Extend existing three-IP group wording in `SKILL.md` to four route groups; `routing.md` already names Ferris in mixed-IP grouping. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: codebase grep] |
| FERR-04 | Ferris outputs use `assets/<article-slug>-ferris/` and docs include the escaped token `assets/&lt;article-slug&gt;-ferris/`. | Add raw and escaped Ferris path tokens to `SKILL.md` save/delivery sections; `routing.md` already contains both tokens. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: codebase grep] |
</phase_requirements>

## Summary

Phase 13 is a controller-integration phase for a documentation-first Codex Skill package. The Ferris canonical pack exists, Phase 12 verification records all seven Ferris files and all FIP requirements as satisfied, and Phase 12 UAT records a passed Ferris visual smoke review. [VERIFIED: .planning/phases/12-ferris-canonical-pack/12-VERIFICATION.md] [VERIFIED: .planning/phases/12-ferris-canonical-pack/12-UAT.md]

The main current gap is asymmetry between `references/routing.md` and `SKILL.md`: `routing.md` already knows the Ferris route, aliases, default flag, route status, output suffix, raw output path, escaped path token, and mixed-IP route grouping, while `SKILL.md` still describes only Xiaohei, Littlebox, and Tom in its controller flow. [VERIFIED: codebase grep]

**Primary recommendation:** Update only `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/routing.md`; wire Ferris exactly like the Tom route pattern, with `source-reviewed` and `references/ips/ferris/source.md` carried through planning, generation, QA, edits, save paths, and delivery blocks. [VERIFIED: phase context] [VERIFIED: codebase grep]

## Project Constraints (from AGENTS.md)

- Every user-facing reply in this repository begins with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing replies use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request titles/descriptions use English. [VERIFIED: AGENTS.md]
- The project remains a lightweight Markdown/YAML Codex Skill package compatible with `SKILL.md`, local references, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts stay working. [VERIFIED: AGENTS.md]
- Xiaohei, Littlebox, Tom, and Ferris IP rules stay separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- MIT/license notices and derived documentation attribution stay preserved. [VERIFIED: AGENTS.md]
- The repository avoids a full app framework; validation remains script-based. [VERIFIED: AGENTS.md]
- Final generation depends on the host agent's `image_gen` capability. [VERIFIED: AGENTS.md]
- Public docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English. [VERIFIED: AGENTS.md]
- GSD workflow enforcement says file-changing work should start through a GSD command; this task is already a `$gsd-plan-phase 13` research invocation. [VERIFIED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Route selection and defaulting | Skill Controller (`SKILL.md`) | Route metadata (`references/routing.md`) | The controller reads routing metadata and decides selected route groups before loading route references. [VERIFIED: codebase grep] |
| Ferris required references | Route metadata (`references/routing.md`) | Skill Controller (`SKILL.md`) | The route table is the verifiable source of required references; `SKILL.md` mirrors it for runtime instruction clarity. [VERIFIED: codebase grep] |
| Ferris planning fields | Skill Controller (`SKILL.md`) | Ferris prompt template | `SKILL.md` decides when to produce shot lists; `references/ips/ferris/prompt-template.md` defines exact Ferris planning fields. [VERIFIED: codebase grep] |
| Ferris generation prompt assembly | Skill Controller (`SKILL.md`) | Ferris pack files | The controller selects the route and calls `image_gen`; Ferris prompt/style/composition rules live in the Ferris pack. [VERIFIED: codebase grep] |
| Ferris QA and repair routing | Skill Controller (`SKILL.md`) | Ferris QA checklist and prompt template | The controller chooses route-local QA; Ferris checklist and edit gates define the repair taxonomy. [VERIFIED: codebase grep] |
| Output path and delivery report | Skill Controller (`SKILL.md`) | Route metadata (`references/routing.md`) | Save and delivery wording belongs in controller flow; output suffix and path tokens are route metadata. [VERIFIED: codebase grep] |
| Public docs and metadata | Phase 14 public surfaces | — | README, examples, agent metadata, NOTICE, and release checklist are explicitly deferred to Phase 14. [VERIFIED: phase context] |
| Validator hardening | Phase 15 scripts/tests | — | `scripts/validate-skill-package.mjs` and its Node tests are explicitly deferred to Phase 15. [VERIFIED: phase context] |

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Markdown `SKILL.md` | Repository-local format | Runtime instruction controller for route selection, planning, generation, QA, save, and delivery. | The installed skill behavior is instruction-driven from `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: codebase grep] |
| Markdown reference packs | Repository-local format | Route-local IP identity, style, composition, prompt, QA, and source/rights policy. | Current Xiaohei, Littlebox, Tom, and Ferris route packs use Markdown files under `references/ips/<route>/`. [VERIFIED: codebase grep] |
| Node.js | v24.13.0 | Runs existing validator and Node test suite. | Existing scripts are ESM Node scripts and local command probe found Node v24.13.0. [VERIFIED: local command] |
| Node built-in test runner | Node v24.13.0 | Runs `node --test scripts/validate-skill-package.test.mjs`. | The test file imports `node:test` and Phase 12 verification used this command successfully. [VERIFIED: codebase grep] [VERIFIED: Phase 12 verification] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `rg` | 15.1.0 | Fast marker and route-surface assertions. | Use for Phase 13 grep checks against `SKILL.md`, `routing.md`, and Ferris pack markers. [VERIFIED: local command] |
| `git` | 2.50.1 (Apple Git-155) | Diff hygiene and research artifact commit. | Run `git diff --check` before commit and commit only `13-RESEARCH.md`. [VERIFIED: local command] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown controller edits | Machine-readable route manifest | Manifest work is deferred to v2 and would exceed Phase 13 controller-only scope. [VERIFIED: phase context] |
| Existing Node validator as-is | Phase 13-specific validator changes | Validator hardening belongs to Phase 15; Phase 13 should use grep assertions plus existing validator/tests as regression coverage. [VERIFIED: phase context] |

**Installation:** No packages are installed in Phase 13. [VERIFIED: phase context]

## Exact Current Gaps Between `routing.md` and `SKILL.md`

| Surface | `routing.md` Current State | `SKILL.md` Current State | Required Phase 13 Change |
|---------|----------------------------|--------------------------|--------------------------|
| Core positioning | Ferris is recorded as explicit `source-reviewed` route in routing prose. [VERIFIED: codebase grep] | Core positioning names Littlebox and Tom; it lacks a Ferris route paragraph. [VERIFIED: codebase grep] | Add compact Ferris optional-IP paragraph with route id, display name, default flag, output suffix, status, and source/trademark authority. [VERIFIED: phase context] |
| Reference loading list | Route row points to Ferris `source.md` only; route prose says selected route loads `required_references`. [VERIFIED: codebase grep] | Reference list has Xiaohei, Littlebox, and Tom pack files; it lacks all Ferris pack files. [VERIFIED: codebase grep] | Expand `routing.md` Ferris `required_references` to the seven-file pack and mirror those files in `SKILL.md` "先读这些参考". [VERIFIED: phase context] |
| Alias selection | Ferris aliases are present: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`. [VERIFIED: codebase grep] | Route selection bullets cover Xiaohei, Littlebox, and Tom; Ferris alias bullet is absent. [VERIFIED: codebase grep] | Add Ferris alias bullet with route id `ferris`, default=false, output_suffix `ferris`, status `source-reviewed`, and source pointer. [VERIFIED: phase context] |
| Mixed-IP group selection | Mixed-IP rule already says Xiaohei, Littlebox, Tom, and Ferris create separate route groups. [VERIFIED: codebase grep] | Mixed-IP route selection, shot-list grouping, generation grouping, save paths, and delivery blocks mention Xiaohei, Littlebox, and Tom only. [VERIFIED: codebase grep] | Add Ferris to every mixed-IP group list and require one block per selected IP. [VERIFIED: phase context] |
| Planning fields | Routing defers planning details to route files. [VERIFIED: codebase grep] | Planning section has Littlebox-specific and Tom-specific field blocks; Ferris field block is absent. [VERIFIED: codebase grep] | Add Ferris shot-list block using Phase 12 fields from `references/ips/ferris/prompt-template.md`. [VERIFIED: Phase 12 verification] |
| Generation context | Routing records `status=source-reviewed` and Ferris attribution/source pointer. [VERIFIED: codebase grep] | Generation section has Xiaohei, Littlebox, and Tom route-specific prompt requirements; Ferris generation requirements are absent. [VERIFIED: codebase grep] | Add Ferris generation block using Ferris prompt-template, composition patterns, style/identity references, source/trademark note, route block, and save reminder. [VERIFIED: phase context] |
| QA and repair | Routing defers QA rules to selected IP references. [VERIFIED: codebase grep] | QA section lists Xiaohei, Littlebox, and Tom high-risk issues and repair routing; Ferris QA and edit gates are absent. [VERIFIED: codebase grep] | Add Ferris high-risk list and repair sentence naming the six Ferris edit gates and source/trademark preservation. [VERIFIED: Phase 12 verification] |
| Raw output path | Ferris raw path exists in routing: `assets/<article-slug>-ferris/`. [VERIFIED: codebase grep] | Save section lacks a Ferris active path code block, suffix mapping, and mixed save target. [VERIFIED: codebase grep] | Add Ferris path in active path block, suffix mapping, and mixed-IP save list. [VERIFIED: phase context] |
| Escaped output token | Ferris escaped token exists in routing: `assets/&lt;article-slug&gt;-ferris/`. [VERIFIED: codebase grep] | Validation marker line lacks Ferris escaped token. [VERIFIED: codebase grep] | Add Ferris escaped validation marker in `SKILL.md`. [VERIFIED: phase context] |
| Delivery block | Routing says reports include selected IP, count, purpose, save path, stability notes. [VERIFIED: codebase grep] | Output wording has Xiaohei, Littlebox, and Tom delivery blocks; Ferris block is absent. [VERIFIED: codebase grep] | Add Ferris delivery block with selected IP, shared core idea, image purposes, save path, `source-reviewed`, source/trademark note, and stability notes. [VERIFIED: phase context] |

## Required `SKILL.md` Edits By Section

| Section | Current Evidence | Required Edit | Acceptance Criteria |
|---------|------------------|---------------|---------------------|
| Frontmatter description | Description still positions the skill as Ian/Xiaohei default only. [VERIFIED: codebase grep] | Keep Xiaohei as default and optionally mention explicit selectable routes only if needed for discoverability. [VERIFIED: phase context] | Description continues to state default Xiaohei; it contains no wording that makes Ferris implicit. [VERIFIED: phase context] |
| `## 核心定位` | Littlebox and Tom optional paragraphs exist; Ferris paragraph is absent. [VERIFIED: codebase grep] | Add Ferris optional route paragraph after Tom with route id `ferris`, display name `Ferris`, `default=false`, `output_suffix: ferris`, route status `source-reviewed`, and source/trademark authority `references/ips/ferris/source.md`. [VERIFIED: phase context] | Grep finds `route id \`ferris\``, `default=false`, `output_suffix: ferris`, `source-reviewed`, and `references/ips/ferris/source.md` in this section. [VERIFIED: phase context] |
| `## 先读这些参考` | Xiaohei, Littlebox, and Tom files are listed; Ferris files are absent. [VERIFIED: codebase grep] | Add seven Ferris bullets: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`, each with one-line purpose. [VERIFIED: phase context] | All seven Ferris paths appear exactly once in the reference list. [VERIFIED: phase context] |
| `### 1. 选择视觉 IP 路由` | Ferris alias bullet is absent and mixed-IP sentence lists three routes. [VERIFIED: codebase grep] | Add Ferris alias bullet and update mixed-IP sentence to Xiaohei, Littlebox, Tom, and Ferris. [VERIFIED: phase context] | All six aliases appear in `SKILL.md`; omitted-IP Xiaohei line remains present; mixed-IP line names all four route groups. [VERIFIED: phase context] |
| `### 1. 选择视觉 IP 路由` required refs | Ferris required refs bullet is absent. [VERIFIED: codebase grep] | Add Ferris `required_references` bullet naming the seven Ferris pack files. [VERIFIED: phase context] | Ferris line matches the expanded routing row and preserves route-local loading. [VERIFIED: phase context] |
| `### 3. 先出配图策略` | Littlebox and Tom shot-list field blocks exist; Ferris block is absent. [VERIFIED: codebase grep] | Add Ferris shot-list block using Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note. [VERIFIED: Phase 12 verification] | All nine Ferris planning fields appear; output path is `assets/<article-slug>-ferris/`; note references `source-reviewed` and `references/ips/ferris/source.md`. [VERIFIED: Phase 12 verification] |
| Mixed shot-list groups | Xiaohei, Littlebox, and Tom groups exist. [VERIFIED: codebase grep] | Add Ferris variant group with Ferris state/action, supporting objects, visible labels, `references/ips/ferris/` QA, `assets/<article-slug>-ferris/`, `source-reviewed`, and source pointer. [VERIFIED: phase context] | Mixed shot list has four group bullets and no blended multi-character prompt instruction. [VERIFIED: phase context] |
| `### 4. 单张生成` | Ferris generation route block is absent. [VERIFIED: codebase grep] | Add Ferris block that loads only Ferris refs, uses `prompt-template.md`, `composition-patterns.md`, `style-dna.md`, `ferris-ip.md`, and checks `qa-checklist.md`. [VERIFIED: Phase 12 verification] | Ferris prompt requirements include one 16:9 image, original article metaphor, Ferris active cognitive action, recognition cues, labels in user's language, source/trademark note, `source-reviewed`, `source.md`, save reminder, and route-block failure names. [VERIFIED: Phase 12 verification] |
| Mixed generation | Current text names Xiaohei, Littlebox, and Tom groups only. [VERIFIED: codebase grep] | Add Ferris group and require each group to call its own prompt template, composition rules, QA checklist, edit gates, output suffix, and route note. [VERIFIED: phase context] | Mixed generation text names all four route-local reference directories and prevents cross-route reference loading. [VERIFIED: phase context] |
| `### 5. 检查与迭代` QA reference line | QA reference line names Xiaohei, Littlebox, Tom, and legacy root only. [VERIFIED: codebase grep] | Add Ferris QA route to `references/ips/ferris/qa-checklist.md`. [VERIFIED: Phase 12 verification] | Grep finds Ferris QA checklist path in controller QA section. [VERIFIED: Phase 12 verification] |
| Ferris high-risk issues | Ferris list is absent. [VERIFIED: codebase grep] | Add eight Ferris failure categories: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage. [VERIFIED: Phase 12 verification] | All eight names appear in `SKILL.md` high-risk section. [VERIFIED: Phase 12 verification] |
| Repair routing | Current repair sentence covers Littlebox and Tom only. [VERIFIED: codebase grep] | Add Ferris repair sentence naming participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation gates. [VERIFIED: Phase 12 verification] | Repair text preserves `source-reviewed`, `references/ips/ferris/source.md`, and route-local QA context. [VERIFIED: phase context] |
| `### 6. 保存交付` active paths | Code blocks exist for Xiaohei, Littlebox, and Tom only. [VERIFIED: codebase grep] | Add Ferris active path code block `assets/<article-slug>-ferris/`. [VERIFIED: phase context] | Save section contains raw Ferris path in a code block. [VERIFIED: phase context] |
| Output suffix mapping and validation markers | Suffix mapping and escaped marker line cover three routes. [VERIFIED: codebase grep] | Add Ferris mapping and escaped marker `assets/&lt;article-slug&gt;-ferris/`. [VERIFIED: phase context] | Raw and escaped Ferris path tokens both appear in `SKILL.md`. [VERIFIED: phase context] |
| Mixed save paths | Mixed save sentence lists three output directories. [VERIFIED: codebase grep] | Add Ferris mixed save target `assets/<article-slug>-ferris/`. [VERIFIED: phase context] | Mixed save sentence lists four route directories. [VERIFIED: phase context] |
| `## 输出口径` mixed delivery | Delivery blocks exist for Xiaohei, Littlebox, and Tom only. [VERIFIED: codebase grep] | Add Ferris block with selected IP `Ferris`, shared core idea, image purposes, save path, route status `source-reviewed`, source/trademark note, source pointer, and stability notes. [VERIFIED: phase context] | Delivery section has one block per selected IP across all four routes. [VERIFIED: phase context] |
| Route-leakage delivery guard | Guard mentions Tom plus Xiaohei/Littlebox only. [VERIFIED: codebase grep] | Add Ferris guard that preserves `source-reviewed`, `references/ips/ferris/source.md`, route-local QA, source/trademark note, and output path. [VERIFIED: phase context] | Delivery guard names Tom and Ferris route-sensitive notes and keeps Xiaohei/Littlebox route-local wording. [VERIFIED: phase context] |

## Required `routing.md` Edits

| Area | Current State | Required Edit | Acceptance Criteria |
|------|---------------|---------------|---------------------|
| Ferris `required_references` | Ferris row currently lists only `references/ips/ferris/source.md`. [VERIFIED: codebase grep] | Replace source-only cell with `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md`. [VERIFIED: phase context] | Ferris row contains all seven paths and remains `default=false`, `output_suffix=ferris`, `status=source-reviewed`. [VERIFIED: phase context] |
| Mixed-IP route prose | Already names Xiaohei, Littlebox, Tom, and Ferris separate route groups. [VERIFIED: codebase grep] | Preserve the four-route wording; tune only if needed for exact parity with `SKILL.md`. [VERIFIED: phase context] | Mixed-IP routing line continues to require each route group to load only its own `required_references`. [VERIFIED: phase context] |
| Output paths | Already contains raw and escaped Ferris path tokens. [VERIFIED: codebase grep] | Preserve raw token `assets/<article-slug>-ferris/` and escaped token `assets/&lt;article-slug&gt;-ferris/`. [VERIFIED: codebase grep] | Both tokens remain present after edits. [VERIFIED: phase context] |
| Source/trademark wording | Ferris attribution context points to `references/ips/ferris/source.md`. [VERIFIED: codebase grep] | Preserve the attribution/source pointer and `source-reviewed` status. [VERIFIED: phase context] | Ferris row keeps `source-reviewed` and `references/ips/ferris/source.md`. [VERIFIED: phase context] |

## Acceptance Criteria

### Alias and Default Behavior

| Case | Expected Behavior |
|------|-------------------|
| Prompt omits visual IP and asks for article illustration / hand-drawn / 正文配图. | Select only Xiaohei route and use `assets/<article-slug>-illustrations/`. [VERIFIED: phase context] |
| Prompt uses `Ferris`. | Select `ferris`, `default=false`, `output_suffix=ferris`, `status=source-reviewed`, and Ferris `required_references`. [VERIFIED: phase context] |
| Prompt uses `Rust mascot`. | Select the same Ferris route. [VERIFIED: phase context] |
| Prompt uses `Rust crab`. | Select the same Ferris route. [VERIFIED: phase context] |
| Prompt uses `Rustacean`. | Select the same Ferris route. [VERIFIED: phase context] |
| Prompt uses `Rust 吉祥物`. | Select the same Ferris route. [VERIFIED: phase context] |
| Prompt uses `Rust 螃蟹`. | Select the same Ferris route. [VERIFIED: phase context] |
| Prompt uses existing Xiaohei aliases. | Select Xiaohei route and preserve legacy-compatible output path. [VERIFIED: phase context] |
| Prompt uses Littlebox aliases. | Select Littlebox route and preserve `assets/<article-slug>-littlebox/`. [VERIFIED: phase context] |
| Prompt uses Tom aliases. | Select Tom route and preserve `gated-authorized`, `references/ips/tom/rights.md`, and `assets/<article-slug>-tom/`. [VERIFIED: phase context] |

### Mixed-IP Variant Group Behavior

- A mixed request for Xiaohei, Littlebox, Tom, and Ferris starts from one shared core idea. [VERIFIED: phase context]
- The controller creates four independent variant groups: Xiaohei, Littlebox, Tom, and Ferris. [VERIFIED: phase context]
- Each group uses its own route id, required references, prompt template, composition rules, QA checklist, edit gates, output suffix, delivery path, and route notes. [VERIFIED: phase context]
- Ferris mixed groups include Ferris state, Ferris action, supporting objects, visible labels, `references/ips/ferris/` QA, `assets/<article-slug>-ferris/`, `source-reviewed`, and `references/ips/ferris/source.md`. [VERIFIED: phase context]
- Mixed delivery uses one block per selected IP and never asks for a blended Xiaohei/Littlebox/Tom/Ferris character. [VERIFIED: phase context]

### Ferris Planning, Generation, QA, Save Behavior

- Ferris shot-list fields are Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note. [VERIFIED: Phase 12 verification]
- Ferris planning and delivery notes follow the user's language, while image-generation prompts stay English with visible labels quoted exactly in the user's language. [VERIFIED: codebase grep]
- Ferris generation uses `references/ips/ferris/prompt-template.md`, `references/ips/ferris/composition-patterns.md`, `references/ips/ferris/style-dna.md`, `references/ips/ferris/ferris-ip.md`, and `references/ips/ferris/qa-checklist.md`. [VERIFIED: Phase 12 verification]
- Ferris prompts preserve one standalone 16:9 article illustration, original article metaphor, Ferris as the central cognitive-action subject, source/trademark note, `source-reviewed`, `references/ips/ferris/source.md`, and save reminder `assets/<article-slug>-ferris/`. [VERIFIED: Phase 12 verification]
- Ferris QA rejects generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage. [VERIFIED: Phase 12 verification]
- Ferris repair uses participation, identity, trademark-boundary, title removal, text reduction, and unaffected-content preservation gates from `references/ips/ferris/prompt-template.md`. [VERIFIED: Phase 12 verification]
- Accepted Ferris outputs save to `assets/<article-slug>-ferris/` with ordered English slug filenames such as `01-topic-name.png`. [VERIFIED: Phase 12 verification]
- Existing assets are preserved unless the user explicitly requests replacement. [VERIFIED: codebase grep]

### Output Path Raw and Escaped Token Handling

| Token Type | Required Token | Where Required |
|------------|----------------|----------------|
| Raw Ferris save path | `assets/<article-slug>-ferris/` | `SKILL.md` core route text, planning fields, generation save reminder, save path code block, suffix mapping, mixed save list, delivery block; `routing.md` output paths. [VERIFIED: phase context] |
| Escaped Ferris docs/validation token | `assets/&lt;article-slug&gt;-ferris/` | `SKILL.md` validation marker list; `routing.md` output paths; later Phase 15 validator docs markers. [VERIFIED: phase context] |
| Filename pattern | `01-topic-name.png` | `SKILL.md`, Ferris pack, and delivery wording. [VERIFIED: Phase 12 verification] |

## Architecture Patterns

### System Architecture Diagram

```text
User prompt / article / explicit IP request
        |
        v
SKILL.md controller reads references/routing.md
        |
        +--> Omitted IP / generic article illustration -> Xiaohei route only
        |
        +--> Explicit Ferris alias -> Ferris route group
        |
        +--> Multiple route names -> shared core idea -> separate route groups
                                                     |
                                                     v
                       Route-local required_references only
               +-------------+-------------+-------------+-------------+
               | Xiaohei     | Littlebox   | Tom         | Ferris      |
               | pack        | pack        | pack        | pack        |
               +-------------+-------------+-------------+-------------+
                                                     |
                                                     v
                      Route-local planning -> prompt assembly -> image_gen
                                                     |
                                                     v
                      Route-local QA/edit gates -> accepted image
                                                     |
                                                     v
               Save to assets/<article-slug>-<route suffix>/ and report
```

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md                         # Skill controller and runtime workflow
└── references/
    ├── routing.md                   # Verifiable route metadata
    └── ips/
        ├── xiaohei/                 # Default route pack
        ├── littlebox/               # Explicit route pack
        ├── tom/                     # Explicit protected-character route pack
        └── ferris/                  # Explicit source-reviewed route pack
```

### Pattern 1: Route Metadata First

**What:** Select route from `references/routing.md`, then load only selected route references. [VERIFIED: codebase grep]

**When to use:** Every planning, generation, QA, edit, save, and delivery task. [VERIFIED: codebase grep]

**Example:**

```markdown
先读取 `references/routing.md`，确定本次任务的视觉 IP。
- 用户省略视觉 IP 时，默认选择小黑路由；omitted visual IP selects only the Xiaohei route。
- 用户写 `Tom` ... 时，选择同一个 Tom 路由...
```

### Pattern 2: Explicit Route Pack Parity

**What:** Explicit routes mirror the Tom pattern: index/source authority, style DNA, identity file, composition patterns, prompt template, QA checklist, route status, output path, and boundary note. [VERIFIED: codebase grep]

**When to use:** Ferris controller wording should use the Tom route as the closest structural analog while substituting Ferris `source-reviewed` and `source.md`. [VERIFIED: phase context]

### Pattern 3: Separate Mixed-IP Groups

**What:** Mixed requests share one core idea and split into independent route groups, each with route-local references and output directory. [VERIFIED: codebase grep]

**When to use:** Any request naming more than one IP. [VERIFIED: phase context]

### Anti-Patterns to Avoid

- **Broadening Ferris implicit selection:** Rust-topic text alone should not replace Xiaohei as default; Ferris requires explicit alias selection. [VERIFIED: phase context]
- **Source-only Ferris loading:** `source.md` alone cannot drive Ferris planning, generation, QA, and edit behavior now that the Phase 12 pack exists. [VERIFIED: Phase 12 verification]
- **Cross-route reference loading:** Loading Xiaohei, Littlebox, Tom, and Ferris references together creates route leakage and identity blending. [VERIFIED: phase context]
- **Public docs creep:** README, examples, agent metadata, NOTICE pass, and release checklist expansion belong to Phase 14. [VERIFIED: phase context]
- **Validator creep:** Script and Node test hardening belong to Phase 15. [VERIFIED: phase context]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Ferris route identity and style | New inline Ferris style prose invented inside `SKILL.md` | `references/ips/ferris/style-dna.md` and `references/ips/ferris/ferris-ip.md` | Phase 12 already created route-local Ferris identity and style authority. [VERIFIED: Phase 12 verification] |
| Ferris planning format | Custom controller-only fields | `references/ips/ferris/prompt-template.md` planning fields | FIP-02 is verified against those fields. [VERIFIED: Phase 12 verification] |
| Ferris prompt and edit gates | Rewritten prompt text from scratch | `references/ips/ferris/prompt-template.md` | Phase 12 verified generation and six edit gates. [VERIFIED: Phase 12 verification] |
| Ferris QA taxonomy | Ad hoc high-risk categories | `references/ips/ferris/qa-checklist.md` | Stable failure names are already verified across Ferris operational files. [VERIFIED: Phase 12 verification] |
| Mixed-IP behavior | Blended multi-character prompt | Separate route groups | Route isolation is a locked Phase 13 decision and existing pattern. [VERIFIED: phase context] |

**Key insight:** The controller should route, load, and report; the Ferris pack should define Ferris-specific identity, prompts, QA, and repair behavior. [VERIFIED: codebase grep]

## Common Pitfalls

### Pitfall 1: Default Route Regression

**What goes wrong:** Ferris becomes selected for generic Rust or article-illustration prompts. [VERIFIED: phase context]
**Why it happens:** The controller broadens route matching beyond the locked alias list. [VERIFIED: phase context]
**How to avoid:** Keep omitted-IP and generic illustration wording mapped to Xiaohei only; add Ferris as explicit alias route. [VERIFIED: phase context]
**Warning signs:** `SKILL.md` says Rust topic, Rust article, or mascot-ish wording selects Ferris without one of the six aliases. [VERIFIED: phase context]

### Pitfall 2: Ferris Source-Only Runtime

**What goes wrong:** Ferris route selects but lacks style, identity, composition, prompt, and QA behavior. [VERIFIED: codebase grep]
**Why it happens:** `routing.md` still lists only `references/ips/ferris/source.md`. [VERIFIED: codebase grep]
**How to avoid:** Expand Ferris `required_references` to all seven Phase 12 pack files. [VERIFIED: phase context]
**Warning signs:** Ferris row lacks `prompt-template.md` or `qa-checklist.md`. [VERIFIED: Phase 12 verification]

### Pitfall 3: Route Leakage

**What goes wrong:** Ferris output or delivery imports Xiaohei, Littlebox, or Tom identity language, or Ferris trademark/source notes leak into other route blocks. [VERIFIED: Phase 12 verification]
**Why it happens:** Mixed-IP wording shares prompt templates, QA checklists, or delivery notes across routes. [VERIFIED: phase context]
**How to avoid:** Each selected group loads only its own `required_references` and keeps route-specific notes. [VERIFIED: phase context]
**Warning signs:** Mixed generation wording says load all packs, blend characters, or use one shared output folder. [VERIFIED: codebase grep]

### Pitfall 4: Source/Trademark Note Loss

**What goes wrong:** Ferris planning, generation, QA, edit, or delivery omits `source-reviewed` or `references/ips/ferris/source.md`. [VERIFIED: phase context]
**Why it happens:** Tom rights-status wiring is copied without replacing with Ferris source/trademark wiring. [VERIFIED: codebase grep]
**How to avoid:** Add Ferris note in every controller surface that mirrors Tom's rights note. [VERIFIED: phase context]
**Warning signs:** Ferris delivery block has a save path but lacks `source-reviewed` or source pointer. [VERIFIED: phase context]

### Pitfall 5: Docs-Validator Drift

**What goes wrong:** Phase 13 controller text changes create new expectations that public docs or validator scripts do not enforce yet. [VERIFIED: phase context]
**Why it happens:** Phase 14 and Phase 15 boundaries are ignored during controller integration. [VERIFIED: phase context]
**How to avoid:** Record Phase 14/15 boundaries in plan verification and use grep assertions for Phase 13. [VERIFIED: phase context]
**Warning signs:** Phase 13 edits touch README, examples, metadata, NOTICE, release checklist, validator, or test files. [VERIFIED: phase context]

## Code Examples

### Ferris `required_references` Row Pattern

```markdown
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
```

Source: `references/routing.md` current route row plus Phase 13 locked `required_references` expansion. [VERIFIED: codebase grep] [VERIFIED: phase context]

### Ferris Shot-List Fields

```text
Placement
Core idea
Structure type
Ferris state
Ferris action
Supporting objects
Visible labels
Output path: assets/<article-slug>-ferris/
Source/trademark note
```

Source: `references/ips/ferris/prompt-template.md` and Phase 12 verification. [VERIFIED: Phase 12 verification]

### Ferris QA Failure Names

```text
generic-crab drift
passive Ferris placement
Rust-logo misuse
official-affiliation cues
over-detailed mascot rendering
excessive text
source-asset tracing
route leakage
```

Source: `references/ips/ferris/qa-checklist.md` and Phase 12 verification. [VERIFIED: Phase 12 verification]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single Xiaohei root references | Route-local canonical packs under `references/ips/<route>/` with legacy Xiaohei root paths preserved | Earlier multi-IP phases before Phase 13 | Controller must select route first, then load only route-local references. [VERIFIED: codebase grep] |
| Tom as the only status-aware explicit route in `SKILL.md` | Ferris adds a second status-aware route, using `source-reviewed` and `source.md` rather than Tom `gated-authorized` and `rights.md` | Phase 13 target | Controller wording should mirror Tom structure while preserving Ferris-specific source/trademark semantics. [VERIFIED: phase context] |
| Ferris source-only route metadata | Ferris seven-file operational pack exists after Phase 12 | 2026-06-13 | `routing.md` must expand `required_references` beyond `source.md`. [VERIFIED: Phase 12 verification] |
| Controller supports three mixed-IP groups | Controller needs four mixed-IP groups: Xiaohei, Littlebox, Tom, and Ferris | Phase 13 target | Mixed planning, generation, save, and delivery sections need Ferris. [VERIFIED: phase context] |

**Deprecated/outdated:**

- Ferris source-only `required_references`: source-only loading is outdated after Phase 12 completed the Ferris canonical pack. [VERIFIED: Phase 12 verification]
- Three-IP mixed controller wording: mixed route handling must include Ferris in Phase 13. [VERIFIED: phase context]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | None. | All sections | All research claims are sourced to repository files, local commands, phase context, or Phase 12 verification evidence. [VERIFIED: codebase grep] |

## Open Questions (RESOLVED)

1. **RESOLVED: Should the frontmatter description mention Ferris?**
   - What we know: Phase 13 scope includes `SKILL.md` controller integration; Phase 14 owns `agents/openai.yaml` public metadata. [VERIFIED: phase context]
   - Resolution: Preserve Xiaohei as the omitted-IP default in frontmatter. Add Ferris only as an explicit selectable route when controller clarity needs exact route discoverability wording. [VERIFIED: 13-01-PLAN.md]

2. **RESOLVED: Should Phase 13 update validator scripts?**
   - What we know: Phase 15 owns validator and Node test hardening. [VERIFIED: phase context]
   - Resolution: Use Phase 13 grep assertions plus existing validator and Node regression checks. Leave permanent validator and Node test hardening to Phase 15. [VERIFIED: 13-01-PLAN.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Existing validator and Node tests | Yes | v24.13.0 | Manual grep assertions if Node unavailable. [VERIFIED: local command] |
| Git | `git diff --check` and commit | Yes | 2.50.1 (Apple Git-155) | None for commit. [VERIFIED: local command] |
| ripgrep (`rg`) | Marker assertions | Yes | 15.1.0 | `grep -R` for slower manual checks. [VERIFIED: local command] |
| npm | Package manager probe only | Yes | 11.6.2 | Not required because Phase 13 installs no packages. [VERIFIED: local command] |

**Missing dependencies with no fallback:** None. [VERIFIED: local command]

**Missing dependencies with fallback:** None. [VERIFIED: local command]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | No | No authentication surface exists in this Markdown/YAML skill package. [VERIFIED: AGENTS.md] |
| V3 Session Management | No | No session runtime exists in this package. [VERIFIED: AGENTS.md] |
| V4 Access Control | No | No service/API access-control tier exists in this package. [VERIFIED: AGENTS.md] |
| V5 Input Validation | Yes | Route selection is controlled by explicit alias lists and route metadata; verification should grep exact route tokens. [VERIFIED: codebase grep] |
| V6 Cryptography | No | No cryptographic behavior exists in Phase 13 scope. [VERIFIED: phase context] |

### Known Threat Patterns for Markdown Skill Controller

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route confusion through broad implicit matching | Spoofing / Tampering | Keep Ferris explicit and preserve Xiaohei omitted-IP default. [VERIFIED: phase context] |
| Source/trademark note loss in Ferris output | Repudiation / Compliance risk | Carry `source-reviewed` and `references/ips/ferris/source.md` through planning, generation, QA, edit, and delivery. [VERIFIED: phase context] |
| Route leakage across IP packs | Tampering | Load only selected route `required_references` and deliver one block per selected IP. [VERIFIED: phase context] |
| Path-token drift | Tampering | Verify both raw and escaped Ferris output tokens. [VERIFIED: phase context] |

## Verification Strategy

### Pre-Commit Hygiene

```bash
git diff --check
```

Expected result: exit 0 with no output. [VERIFIED: local command]

### Existing Regression Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
```

Expected current baseline from Phase 12: validator `total=53 passed=53 failed=0 skipped=0`; Node tests `tests=23 pass=23 fail=0`. [VERIFIED: Phase 12 verification]

### Phase 13 Grep Assertions

Planner should include targeted grep checks because Phase 15 owns permanent validator hardening. [VERIFIED: phase context]

```bash
rg -F "Ferris" ian-xiaohei-illustrations/SKILL.md
rg -F "Rust mascot" ian-xiaohei-illustrations/SKILL.md
rg -F "Rust crab" ian-xiaohei-illustrations/SKILL.md
rg -F "Rustacean" ian-xiaohei-illustrations/SKILL.md
rg -F "Rust 吉祥物" ian-xiaohei-illustrations/SKILL.md
rg -F "Rust 螃蟹" ian-xiaohei-illustrations/SKILL.md
rg -F "references/ips/ferris/index.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/source.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/style-dna.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/ferris-ip.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/composition-patterns.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/prompt-template.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "references/ips/ferris/qa-checklist.md" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "assets/<article-slug>-ferris/" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "assets/&lt;article-slug&gt;-ferris/" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
rg -F "source-reviewed" ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md
```

### Negative Scope Checks

```bash
git diff --name-only
```

Expected Phase 13 implementation files: `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/routing.md`. Research-only commit should include only `.planning/phases/13-skill-controller-integration/13-RESEARCH.md`. [VERIFIED: phase context]

### Phase 14 Boundary

Phase 13 plan should not edit `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, or `RELEASE_CHECKLIST.md`; those are Phase 14 deliverables. [VERIFIED: phase context]

### Phase 15 Boundary

Phase 13 plan should not edit `scripts/validate-skill-package.mjs` or `scripts/validate-skill-package.test.mjs`; those are Phase 15 deliverables. [VERIFIED: phase context]

## Risk Table

| Risk | Impact | Likelihood | Mitigation | Verification |
|------|--------|------------|------------|--------------|
| Default route regression | Generic article requests could route to Ferris and break Xiaohei compatibility. [VERIFIED: phase context] | Medium | Preserve omitted-IP Xiaohei line and `xiaohei default=true`; keep Ferris explicit. [VERIFIED: phase context] | Grep for omitted-IP line plus route row default flags. [VERIFIED: codebase grep] |
| Route leakage | Mixed-IP outputs could blend identities, QA rules, or output directories. [VERIFIED: phase context] | Medium | Require separate route groups and route-local `required_references`. [VERIFIED: phase context] | Grep mixed planning/generation/save/delivery sections for all four groups and route-local directories. [VERIFIED: phase context] |
| Source/trademark note loss | Ferris route could lose `source-reviewed` status or `source.md` pointer in runtime surfaces. [VERIFIED: phase context] | Medium | Add `source-reviewed`, `references/ips/ferris/source.md`, and compact source/trademark note in planning, generation, QA, edit, and delivery. [VERIFIED: phase context] | Grep `SKILL.md` for `source-reviewed` and `references/ips/ferris/source.md` in Ferris sections. [VERIFIED: phase context] |
| Docs-validator drift | Controller changes may precede public docs and validator enforcement. [VERIFIED: phase context] | High | Keep Phase 13 scoped to controller surfaces and use explicit grep assertions; defer public docs to Phase 14 and validator hardening to Phase 15. [VERIFIED: phase context] | `git diff --name-only` plus existing validator/test regression commands. [VERIFIED: local command] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/13-skill-controller-integration/13-CONTEXT.md` - locked Phase 13 decisions, scope, boundaries, route defaults, required references, acceptance criteria. [VERIFIED: phase context]
- `.planning/REQUIREMENTS.md` - FERR-01 through FERR-04 requirements. [VERIFIED: .planning/REQUIREMENTS.md]
- `.planning/ROADMAP.md` - Phase 13 goal, success criteria, and Phase 14/15 boundaries. [VERIFIED: .planning/ROADMAP.md]
- `.planning/STATE.md` - current milestone state and Phase 12 completion handoff. [VERIFIED: .planning/STATE.md]
- `.planning/phases/12-ferris-canonical-pack/12-VERIFICATION.md` - Ferris pack verification and command baseline. [VERIFIED: Phase 12 verification]
- `.planning/phases/12-ferris-canonical-pack/12-UAT.md` - human visual smoke pass. [VERIFIED: Phase 12 UAT]
- `ian-xiaohei-illustrations/SKILL.md` - current controller sections and gaps. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/routing.md` - current route metadata, Ferris row, mixed routing, path tokens. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/ips/ferris/*.md` - Ferris source, identity, style, composition, prompt, QA, and output behavior. [VERIFIED: codebase grep]

### Secondary (MEDIUM confidence)

- `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/CONVENTIONS.md`, `.planning/codebase/STACK.md`, `.planning/codebase/STRUCTURE.md` - codebase structure and conventions loaded through AGENTS context. [VERIFIED: AGENTS.md]

### Tertiary (LOW confidence)

- None. [VERIFIED: codebase grep]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - repository is Markdown/YAML plus Node validation, confirmed by local file scans and command probes. [VERIFIED: codebase grep] [VERIFIED: local command]
- Architecture: HIGH - controller and route-pack boundaries are explicit in `SKILL.md`, `routing.md`, AGENTS project docs, and Phase 13 context. [VERIFIED: codebase grep] [VERIFIED: phase context]
- Pitfalls: HIGH - risks come from locked Phase 13 decisions, current code gaps, and Phase 12 verified Ferris pack behavior. [VERIFIED: phase context] [VERIFIED: Phase 12 verification]

**Research date:** 2026-06-13
**Valid until:** 2026-07-13 for this repository-local controller phase; re-check if Phase 14 or Phase 15 lands first. [VERIFIED: phase context]
