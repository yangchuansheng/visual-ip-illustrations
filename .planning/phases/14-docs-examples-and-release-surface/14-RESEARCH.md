# Phase 14: Docs, Examples, and Release Surface - Research

**Researched:** 2026-06-13 [VERIFIED: current_date]
**Domain:** Documentation, prompt examples, agent metadata, NOTICE attribution, release gates for a Markdown/YAML Codex Skill package [VERIFIED: AGENTS.md; .planning/ROADMAP.md]
**Confidence:** HIGH [VERIFIED: grep over phase context, public docs, Ferris pack, and Phase 11-13 evidence]

## User Constraints (from CONTEXT.md)

All constraints in this section are copied from `.planning/phases/14-docs-examples-and-release-surface/14-CONTEXT.md`. [VERIFIED: .planning/phases/14-docs-examples-and-release-surface/14-CONTEXT.md]

### Locked Decisions

#### Public Ferris README Guidance

- **D-01:** README should explain Ferris as an explicit Rust-community mascot route with status `source-reviewed`, not as an implicit default. Xiaohei remains the only omitted-IP default route.
- **D-02:** README should keep the locked Ferris aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- **D-03:** README should name the Ferris output contract in both raw and escaped forms: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`.
- **D-04:** README should promote the full Ferris canonical pack path `ian-xiaohei-illustrations/references/ips/ferris/`, with `source.md` called out as the source/trademark authority.
- **D-05:** README Ferris wording should preserve the Phase 11 source/trademark phrase: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- **D-06:** README should mention Ferris planning fields at user level: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-07:** README workflow and maintainer-validation sections should name Ferris beside Xiaohei, Littlebox, and Tom, while noting that validator/test hardening is completed in Phase 15.

#### Copyable Prompt Decisions

- **D-08:** `examples/prompts.md` should replace the Phase 11 placeholder `route contract marker` language with full copyable Ferris prompts.
- **D-09:** Add a Ferris planning prompt that asks for a shot list with the Phase 12 Ferris fields, route status `source-reviewed`, full Ferris route-local reference directory, source record, raw path, and escaped path token.
- **D-10:** Add a Ferris generation prompt that asks for one or more Ferris-route article illustrations where Ferris performs the cognitive action, uses Rust-themed low-tech article metaphors, reports `assets/<article-slug>-ferris/`, and preserves the source/trademark note.
- **D-11:** Add a Ferris smoke prompt for text-only route auditing. It should assert selected IP, aliases, `source-reviewed`, `ian-xiaohei-illustrations/references/ips/ferris/source.md`, full Ferris pack loading, raw path, escaped token, planning fields, and public-sample release review.
- **D-12:** Update mixed-IP prompts to include all four route groups: Xiaohei, Littlebox, Tom, and Ferris. The Ferris group should use the full `ian-xiaohei-illustrations/references/ips/ferris/` pack, `source.md`, Ferris state/action/supporting objects/visible labels/output path/source-trademark note, and public-sample release gate.
- **D-13:** Keep prompt examples copyable and Chinese-first, while retaining exact route tokens, file paths, aliases, statuses, and output markers in English/code format.

#### Metadata Wording Decisions

- **D-14:** `ian-xiaohei-illustrations/agents/openai.yaml` should name all four routes in `display_name`, `short_description`, and `default_prompt`: Xiaohei, Littlebox, Tom, and Ferris.
- **D-15:** Metadata should preserve `allow_implicit_invocation: true` at skill level and explain that omitted visual IP defaults to Xiaohei.
- **D-16:** Metadata should describe Littlebox, Tom, and Ferris as explicit selectable routes. Tom keeps `gated-authorized`; Ferris keeps `source-reviewed`.
- **D-17:** Metadata should avoid official Rust affiliation or endorsement language. It can call Ferris an explicit Rust-community mascot route and point behavior to the skill's routing/docs contract.

#### NOTICE Consistency Decisions

- **D-18:** `NOTICE.md` should keep the existing Ferris section title `Ferris Source Attribution and Rust Trademark Boundary`.
- **D-19:** NOTICE must separate Ferris source attribution from Rust trademark or endorsement status. Source attribution records `rustacean.net`, Ferris the Rustacean, Karen Rustad Tolva, and copyright-waiver context; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow Rust Foundation trademark policy context and release review.
- **D-20:** NOTICE should point to `ian-xiaohei-illustrations/references/ips/ferris/source.md` as the operational source/trademark authority.
- **D-21:** NOTICE should stay concise and not become the full Ferris source record. Detailed allowed use, restricted use, distribution boundary, sample policy, and review owner remain in `references/ips/ferris/source.md`.
- **D-22:** Public docs should reuse NOTICE's source/trademark separation rather than invent alternate phrases.

#### Release Checklist Expansion Decisions

- **D-23:** `RELEASE_CHECKLIST.md` should keep the automated gates section and validator commands, while noting that Phase 15 is responsible for updating validator/test expectations to the full Ferris route pack.
- **D-24:** Ferris source review should require checking `references/ips/ferris/source.md` for source, author/source sites, copyright waiver, trademark boundary, route status, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- **D-25:** Rust trademark wording review should scan README, examples, `SKILL.md`, routing docs, NOTICE, release notes, and generated samples for Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and broad release language.
- **D-26:** Add a Ferris prompt leakage scan covering generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage, missing `source-reviewed`, missing `source.md`, and cross-route identity leakage.
- **D-27:** Add a Ferris public asset policy gate for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`, with reviewer, date, approval status, allowed directories, release channels, and trademark/endorsement outcome.
- **D-28:** Add a Ferris generated sample policy gate for workspace outputs under `assets/<article-slug>-ferris/`, with explicit distinction between internal review samples and public rendered samples.
- **D-29:** Final Ferris release review should confirm source record authority, NOTICE consistency, README/examples metadata parity, route status, public asset approvals, generated sample approvals, and Phase 15 validator/test evidence before v1.2 release.

#### Phase 15 Deferral

- **D-30:** Do not edit `scripts/validate-skill-package.mjs` or `scripts/validate-skill-package.test.mjs` in Phase 14.
- **D-31:** Do not attempt to make validator or Node tests green in Phase 14. The known red baseline from Phase 13 is expected until Phase 15 updates `ROUTE-FERRIS-001`, `ROUTE-REFS-001`, docs markers, source/trademark markers, leakage gates, public sample gates, and parser tests.
- **D-32:** Phase 14 may include validator command references in docs and release checklist, but implementation and test expectation changes belong to Phase 15.

#### Likely Modified Files

- **D-33:** Phase 14 likely modifies:
  - `README.md`
  - `examples/prompts.md`
  - `ian-xiaohei-illustrations/agents/openai.yaml`
  - `NOTICE.md`
  - `RELEASE_CHECKLIST.md`
  - `ian-xiaohei-illustrations/references/routing.md` only for small shared wording consistency, if needed.
- **D-34:** Phase 14 should preserve:
  - `ian-xiaohei-illustrations/SKILL.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/*.md`
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`

### the agent's Discretion

- The user supplied the Phase 14 requirements and constraints directly, so no interactive gray-area selection was needed. The planner may tune exact Chinese wording, section placement, and prompt ordering while preserving the decisions above and the Phase 11-13 contracts.

### Deferred Ideas (OUT OF SCOPE)

- Phase 15 owns all edits to `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- Phase 15 owns updating the current red validator baseline from Ferris source-only route expectations to the full seven-file Ferris route pack.
- Phase 15 owns docs marker validation, metadata validation, NOTICE validation, release checklist validation, raw/escaped path validation, Ferris smoke prompt validation, route leakage checks, public asset gates, and Node parser tests.
- v2 owns a reusable mascot manifest, source/trademark manifest, asset manifest, visual regression, release packaging script, route selector, and full English localization.

## Summary

Phase 14 is a documentation and release-surface phase for the existing Ferris controller integration. [VERIFIED: .planning/ROADMAP.md; .planning/phases/13-skill-controller-integration/13-VERIFICATION.md] The public surfaces already contain the Phase 11 Ferris route-status phrase, aliases, source record, raw output path, escaped output token, and baseline release gate. [VERIFIED: grep README.md examples/prompts.md RELEASE_CHECKLIST.md NOTICE.md routing.md] The major gaps are full README user guidance, copyable Ferris prompt inventory, four-route metadata, expanded release checklist gates, and consistent source/trademark wording across all public docs. [VERIFIED: grep README.md examples/prompts.md openai.yaml RELEASE_CHECKLIST.md]

The Phase 13 controller intentionally changed Ferris route loading from a source-only record to a seven-file Ferris pack. [VERIFIED: .planning/phases/13-skill-controller-integration/13-VERIFICATION.md; ian-xiaohei-illustrations/references/routing.md] The validator and Node tests still fail against the old source-only baseline and are assigned to Phase 15. [VERIFIED: .planning/phases/13-skill-controller-integration/13-VERIFICATION.md; .planning/ROADMAP.md] Phase 14 should document validator commands and release evidence requirements while preserving `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`. [VERIFIED: 14-CONTEXT.md]

**Primary recommendation:** Update only `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and optionally one small wording sync in `ian-xiaohei-illustrations/references/routing.md`; validate with targeted grep, scope fence, and `git diff --check`; record validator/test red baseline as Phase 15 deferred. [VERIFIED: 14-CONTEXT.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Public Ferris README guidance | Public documentation | Skill reference docs | README is the human entry surface; route details remain anchored in routing and Ferris pack files. [VERIFIED: README.md; routing.md; Ferris index.md] |
| Copyable Ferris prompt inventory | Public examples | Skill controller | `examples/prompts.md` acts as human prompt inventory and route smoke fixture source. [VERIFIED: examples/prompts.md lines 1-3; 14-CONTEXT.md] |
| Agent discovery metadata | Codex agent metadata | Skill controller | `agents/openai.yaml` controls skill display wording while `SKILL.md` remains the controller. [VERIFIED: openai.yaml; SKILL.md; AGENTS.md] |
| NOTICE source/trademark wording | Legal/attribution docs | Ferris source record | NOTICE is the public attribution surface; `references/ips/ferris/source.md` is the operational authority. [VERIFIED: NOTICE.md lines 32-41; source.md lines 24-29] |
| Release gates | Maintainer release docs | Validator in Phase 15 | `RELEASE_CHECKLIST.md` records manual release checks; validator implementation updates are deferred to Phase 15. [VERIFIED: RELEASE_CHECKLIST.md; 14-CONTEXT.md] |

## Project Constraints (from AGENTS.md)

| Constraint | Research Impact |
|------------|-----------------|
| User-facing replies must begin with `爸爸` and be in Simplified Chinese. [VERIFIED: AGENTS.md] | Final response must be Chinese and start with `爸爸`. [VERIFIED: AGENTS.md] |
| Code, code comments, commit messages, and PR copy stay English. [VERIFIED: AGENTS.md] | Research commit message must be English Angular-style. [VERIFIED: AGENTS.md] |
| Public repository docs can stay Chinese-first. [VERIFIED: AGENTS.md] | Phase 14 should keep README and prompts Chinese-first while preserving exact English/code route tokens. [VERIFIED: 14-CONTEXT.md; AGENTS.md] |
| The repository is a lightweight Codex Skill package with Markdown/YAML docs and no app runtime. [VERIFIED: AGENTS.md; .planning/codebase/STACK.md] | Plans should avoid app framework tasks, build runtime tasks, and package installs. [VERIFIED: AGENTS.md; .planning/config.json] |
| Existing Xiaohei behavior must keep working. [VERIFIED: AGENTS.md] | README, prompts, and metadata must preserve Xiaohei as omitted-IP default. [VERIFIED: 14-CONTEXT.md] |
| IP rules must stay separately readable, testable, and routable. [VERIFIED: AGENTS.md] | Ferris docs should point to `ian-xiaohei-illustrations/references/ips/ferris/` and `source.md` while preserving route isolation. [VERIFIED: routing.md; Ferris pack] |
| Before file-changing tools, start through a GSD command unless explicitly bypassed. [VERIFIED: AGENTS.md] | User invoked `$gsd-plan-phase 14` research, so writing this research artifact is within GSD workflow. [VERIFIED: user prompt; init.phase-op output] |

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FDOC-01 | README explains Ferris as an explicit Rust-community mascot route with aliases, output path, source context, and trademark/endorsement boundary. [VERIFIED: .planning/REQUIREMENTS.md] | README already has baseline Ferris phrase and path tokens at lines 71-81, but needs full pack path, planning fields, Ferris quick examples, workflow parity, and maintainer-validation Phase 15 note. [VERIFIED: README.md lines 71-81, 87-94, 190-216, 220-229, 297-304] |
| FDOC-02 | `examples/prompts.md` includes copyable Ferris planning, Ferris generation, Ferris smoke, and four-IP mixed variant prompts. [VERIFIED: .planning/REQUIREMENTS.md] | `examples/prompts.md` has a placeholder Ferris route marker and one four-IP planning prompt, while a later generation prompt still covers only Xiaohei/Littlebox/Tom. [VERIFIED: examples/prompts.md lines 145-164, 172-206, 208-242] |
| FDOC-03 | `agents/openai.yaml` names Xiaohei, Littlebox, Tom, and Ferris while preserving Xiaohei as the implicit default. [VERIFIED: .planning/REQUIREMENTS.md] | `openai.yaml` currently names Xiaohei/Littlebox/Tom and preserves `allow_implicit_invocation: true`, so Ferris wording is the needed change. [VERIFIED: ian-xiaohei-illustrations/agents/openai.yaml lines 1-6] |
| FDOC-04 | `RELEASE_CHECKLIST.md` includes Ferris source review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review. [VERIFIED: .planning/REQUIREMENTS.md] | Checklist has automated gates and baseline Ferris source/trademark/public-sample/final sections, but needs expanded leakage, generated sample, public docs parity, and Phase 15 evidence wording. [VERIFIED: RELEASE_CHECKLIST.md lines 5-25, 86-113, 122-136] |
| FDOC-05 | Public docs use Ferris source attribution and Rust trademark boundary wording consistently across README, examples, NOTICE, routing docs, and release checklist. [VERIFIED: .planning/REQUIREMENTS.md] | The shared Phase 11 phrase exists across README, examples, routing, and checklist; NOTICE uses concise source/trademark separation; Phase 14 should align all docs to the same `source.md` authority and endorsement-safe release-review boundary. [VERIFIED: grep; NOTICE.md lines 32-41; routing.md lines 14, 23] |

</phase_requirements>

## Current Public Docs Coverage and Gaps

| Requirement | Current Coverage | Gap | Planner Action |
|-------------|------------------|-----|----------------|
| FDOC-01 | README has Ferris route phrase, aliases, source record, raw path, escaped token, and public-sample gate. [VERIFIED: README.md lines 71-81] | README canonical packs list points only to Ferris source record and omits full `ian-xiaohei-illustrations/references/ips/ferris/` pack path, planning fields, Ferris quick prompts, workflow parity, and Phase 15 validator note. [VERIFIED: README.md lines 87-94, 190-216, 220-229, 297-304] | Add Ferris user guidance in `### Ferris`, update canonical pack list, add Ferris quick examples, change three-IP comparison to four-IP, update workflow steps and maintainer validation text. [VERIFIED: 14-CONTEXT.md] |
| FDOC-02 | `examples/prompts.md` has a Ferris section and one route contract marker; it has four-IP planning text. [VERIFIED: examples/prompts.md lines 145-206] | The Ferris section explicitly says Phase 14 owns copyable prompt examples, and the later mixed generation prompt names only three route groups. [VERIFIED: examples/prompts.md lines 151-164, 208-242] | Replace placeholder with Ferris planning, generation, and smoke prompts; update mixed planning and mixed generation to all four IPs. [VERIFIED: 14-CONTEXT.md] |
| FDOC-03 | `openai.yaml` has compact display metadata and `allow_implicit_invocation: true`. [VERIFIED: openai.yaml lines 1-6] | Metadata lacks Ferris in display name, short description, and default prompt. [VERIFIED: openai.yaml lines 2-4] | Update the three interface strings to name Xiaohei/Littlebox/Tom/Ferris, preserve Xiaohei default, and mark Ferris explicit `source-reviewed`. [VERIFIED: 14-CONTEXT.md] |
| FDOC-04 | Checklist has automated gates, route smokes, and baseline Ferris source/trademark/public-sample/final sections. [VERIFIED: RELEASE_CHECKLIST.md lines 5-36, 86-113] | It lacks Phase 14-required Ferris prompt leakage scan, generated sample policy, public docs parity gate, Phase 15 validator/test evidence wording, and updated package-boundary wording for all four packs. [VERIFIED: RELEASE_CHECKLIST.md lines 86-136] | Expand Ferris gate using Tom checklist structure and Ferris QA failure categories; update public docs/path markers and installable package boundary. [VERIFIED: RELEASE_CHECKLIST.md lines 44-84; Ferris qa-checklist.md lines 29-61] |
| FDOC-05 | Shared phrase appears in README, examples, routing, and release checklist; NOTICE separates Ferris source attribution from Rust trademark boundary. [VERIFIED: grep; NOTICE.md lines 32-41] | Public docs still vary between `source record`, `source/trademark authority`, and full pack directory; README/examples need the full route-local directory and `source.md` authority. [VERIFIED: README.md lines 77, 92; examples/prompts.md lines 149-170] | Use one phrase family across README, examples, NOTICE, checklist, and optional routing wording. [VERIFIED: 14-CONTEXT.md] |

## Exact File Sections Likely Edited

| File | Sections | Exact Edits |
|------|----------|-------------|
| `README.md` | Top route overview, `### Ferris`, `Canonical packs`, quick examples, workflow, tree, maintainer validation. [VERIFIED: README.md lines 3-20, 71-94, 149-216, 220-229, 260-304] | Add full Ferris pack path; add planning fields; add Ferris planning/generation quick examples; change same-core comparison prompt to four groups; add Ferris in workflow steps 2/7; add Ferris directory tree entry; update maintainer validation text with Phase 15 deferral. [VERIFIED: 14-CONTEXT.md] |
| `examples/prompts.md` | `## 路由烟测：显式选择 Ferris`, `## 路由说明：多 IP 请求`, `### 混合 IP：同一观点生成三组`, maintainer smokes. [VERIFIED: examples/prompts.md lines 145-296] | Replace `route contract marker` with copyable Ferris planning/generation/smoke prompts; make mixed generation four-IP; add full Ferris pack loading, planning fields, raw/escaped paths, `source.md`, and public-sample gate. [VERIFIED: 14-CONTEXT.md] |
| `ian-xiaohei-illustrations/agents/openai.yaml` | `interface.display_name`, `interface.short_description`, `interface.default_prompt`. [VERIFIED: openai.yaml lines 1-4] | Recommended wording: `Xiaohei / Littlebox / Tom / Ferris Article Illustrations`; description names Xiaohei default, Littlebox explicit active, Tom explicit `gated-authorized`, Ferris explicit `source-reviewed`; default prompt preserves omitted-IP Xiaohei. [VERIFIED: 14-CONTEXT.md] |
| `NOTICE.md` | `## Ferris Source Attribution and Rust Trademark Boundary`. [VERIFIED: NOTICE.md lines 32-41] | Keep section title; optionally add one concise sentence pointing to `source.md` as operational authority and clarifying that attribution records source context while Rust/Cargo marks and endorsement wording follow trademark-policy context and release review. [VERIFIED: 14-CONTEXT.md; source.md lines 24-29] |
| `RELEASE_CHECKLIST.md` | Automated gates, route smokes, Ferris section, installable boundary, public docs/path markers, stale Phase 5 fences. [VERIFIED: RELEASE_CHECKLIST.md lines 5-36, 86-136] | Add Phase 15 validator note; expand Ferris source/trademark review; add prompt leakage scan; add public asset policy; add generated sample policy; add final release review including Phase 15 evidence; update public docs/path markers for all four IPs; update package boundary wording from both packs to four packs. [VERIFIED: 14-CONTEXT.md] |
| `ian-xiaohei-illustrations/references/routing.md` | Top route selection rules and Ferris route row. [VERIFIED: routing.md lines 5-23] | Optional wording sync only if public phrase needs one exact shared `source.md` authority phrase; leave route metadata intact. [VERIFIED: 14-CONTEXT.md] |

## Consistent Ferris Source/Trademark Phrase

Use this exact public route phrase in README, examples, routing docs, and release checklist: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.` [VERIFIED: 14-CONTEXT.md; README.md line 73; examples/prompts.md line 147; routing.md line 14; RELEASE_CHECKLIST.md line 88]

Use this concise source/trademark separation sentence in NOTICE and maintainer release surfaces: `Ferris attribution records source context. Rust and Cargo marks, logos, official-affiliation claims, and endorsement wording are governed by Rust Foundation trademark policy context and release review.` [VERIFIED: NOTICE.md line 41; source.md lines 24-29]

Use this operational authority sentence where a route-local pointer is needed: `Ferris source/trademark authority: ian-xiaohei-illustrations/references/ips/ferris/source.md.` [VERIFIED: source.md lines 3-10; Ferris index.md lines 15-20]

External source check: `rustacean.net` identifies Ferris as an unofficial Rust mascot and records Karen Rustad Tolva's waiver context for Ferris the Rustacean. [CITED: https://rustacean.net/] The Rust Foundation policy states that Rust trademarks should not appear official, affiliated, or endorsed by the Rust Project or Foundation without permission. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] The Rust Foundation also identifies Karen Rustad Tolva as the original graphic designer of Ferris the crab. [CITED: https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/]

## Copyable Prompt Inventory Needed

| Prompt | Location | Required Contents |
|--------|----------|-------------------|
| Ferris planning | `examples/prompts.md` Ferris section; optionally README quick examples. [VERIFIED: 14-CONTEXT.md] | Alias list, `source-reviewed`, `ian-xiaohei-illustrations/references/ips/ferris/`, `source.md`, planning fields: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, Source/trademark note, raw and escaped path tokens. [VERIFIED: prompt-template.md lines 13-31] |
| Ferris generation | `examples/prompts.md` Ferris section; optionally README quick examples. [VERIFIED: 14-CONTEXT.md] | One or more 16:9 Ferris-route article illustrations, Ferris performs the cognitive action, Rust-themed low-tech metaphors, `assets/<article-slug>-ferris/`, source/trademark note, and public-sample release gate. [VERIFIED: prompt-template.md lines 33-71] |
| Ferris smoke | `examples/prompts.md` Ferris section and maintainer smoke section. [VERIFIED: 14-CONTEXT.md] | Text-only audit asserting selected IP, aliases, `source-reviewed`, source record, full pack loading, raw path, escaped token, planning fields, and public rendered sample gate. [VERIFIED: 14-CONTEXT.md; examples/prompts.md lines 151-164] |
| Four-IP mixed planning | `examples/prompts.md` multi-IP section; README same-core example. [VERIFIED: 14-CONTEXT.md] | Separate Xiaohei, Littlebox, Tom, and Ferris groups; each group loads route-local references and output path; Ferris group uses full pack and `source.md`. [VERIFIED: routing.md lines 12, 45] |
| Four-IP mixed generation | Replace `### 混合 IP：同一观点生成三组`. [VERIFIED: examples/prompts.md lines 208-242] | Four generated route groups from one core idea, Ferris generation count, full pack, Ferris action/supporting objects/visible labels, output path, source/trademark note, and public-sample gate. [VERIFIED: 14-CONTEXT.md; prompt-template.md lines 39-71] |

## Metadata Wording Recommendation

Recommended `openai.yaml` metadata pattern: [VERIFIED: 14-CONTEXT.md; openai.yaml lines 1-6]

```yaml
interface:
  display_name: "Xiaohei / Littlebox / Tom / Ferris Article Illustrations"
  short_description: "为中文文章生成 Xiaohei、Littlebox、Tom 或 Ferris 视觉 IP 正文配图资产；未指定视觉 IP 时默认使用 Xiaohei，Littlebox 是 explicit active route，Tom 是 explicit gated-authorized protected-character route，Ferris 是 explicit source-reviewed Rust-community mascot route。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时 default Xiaohei，也可以显式选择 Littlebox、explicit Tom protected-character route（gated-authorized）或 explicit Ferris Rust-community mascot route（source-reviewed）。"
policy:
  allow_implicit_invocation: true
```

This wording names all four routes, preserves Xiaohei as omitted-IP default, keeps Littlebox/Tom/Ferris explicit, and avoids official Rust affiliation or endorsement wording. [VERIFIED: 14-CONTEXT.md; Rust Foundation trademark policy]

## Release Checklist Missing Gates or Refinements

| Gate | Current State | Required Refinement |
|------|---------------|---------------------|
| Automated gates | Validator and test commands are listed. [VERIFIED: RELEASE_CHECKLIST.md lines 5-25] | Add a Phase 15 note that current Ferris full-pack validator/test expectation updates are required before v1.2 release evidence. [VERIFIED: 14-CONTEXT.md; 13-VERIFICATION.md] |
| Ferris source record review | Source review checks `source.md` for key fields. [VERIFIED: RELEASE_CHECKLIST.md lines 92-97] | Include author/source sites, copyright waiver, trademark boundary, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer/date/status, and release channels. [VERIFIED: source.md lines 3-65; 14-CONTEXT.md] |
| Rust trademark wording review | Baseline review lists logo-forward, bundled marks, affiliation cues, and endorsement wording. [VERIFIED: RELEASE_CHECKLIST.md lines 98-102] | Expand scan targets to README, examples, `SKILL.md`, routing docs, NOTICE, release notes, and generated samples; add broad release language. [VERIFIED: 14-CONTEXT.md; Rust Foundation trademark policy] |
| Ferris prompt leakage scan | Missing as a dedicated subsection. [VERIFIED: RELEASE_CHECKLIST.md lines 86-113] | Add generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, route leakage, missing `source-reviewed`, missing `source.md`, and cross-route identity leakage. [VERIFIED: qa-checklist.md lines 29-61; 14-CONTEXT.md] |
| Public asset policy | Public rendered Ferris sample gate exists. [VERIFIED: RELEASE_CHECKLIST.md lines 104-108] | Add reviewer/date/approval status/allowed directories/release channels/trademark outcome fields for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`. [VERIFIED: source.md lines 55-59; 14-CONTEXT.md] |
| Generated sample policy | Missing for workspace outputs. [VERIFIED: RELEASE_CHECKLIST.md lines 86-113] | Add internal review sample vs public rendered sample distinction for `assets/<article-slug>-ferris/`. [VERIFIED: source.md lines 55-59; 14-CONTEXT.md] |
| Final Ferris release review | Final section confirms source authority and public asset approvals. [VERIFIED: RELEASE_CHECKLIST.md lines 110-113] | Add NOTICE consistency, README/examples/metadata parity, route status, generated sample approvals, and Phase 15 validator/test evidence before v1.2 release. [VERIFIED: 14-CONTEXT.md] |
| Public docs/path markers | Current section covers Xiaohei/Littlebox and stale Phase 5 fences. [VERIFIED: RELEASE_CHECKLIST.md lines 122-136] | Update to all four routes and current v1.2 Ferris boundary. [VERIFIED: .planning/ROADMAP.md; 14-CONTEXT.md] |

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Markdown | Repository files | Public docs, examples, NOTICE, release checklist, and planning artifacts. [VERIFIED: .planning/codebase/STACK.md] | The package is documentation-driven and has no app build runtime. [VERIFIED: .planning/codebase/STACK.md] |
| YAML | Repository files | Agent metadata in `ian-xiaohei-illustrations/agents/openai.yaml`. [VERIFIED: openai.yaml; .planning/codebase/STACK.md] | Codex agent metadata uses YAML in this repo. [VERIFIED: .planning/codebase/STACK.md] |
| Node.js | v24.13.0 [VERIFIED: `node --version`] | Existing validator command references and future Phase 15 validation hardening. [VERIFIED: RELEASE_CHECKLIST.md lines 5-25] | Existing scripts are dependency-free Node checks. [VERIFIED: scripts/validate-skill-package.mjs; 13-VERIFICATION.md] |
| Git | 2.50.1 [VERIFIED: `git --version`] | Scope fence, diff check, and research commit. [VERIFIED: environment probe] | GSD phase artifacts are tracked in git. [VERIFIED: git status] |
| ripgrep | 15.1.0 [VERIFIED: `rg --version`] | Fast marker and scope validation. [VERIFIED: environment probe] | Phase 14 validation is grep/scope-fence oriented. [VERIFIED: user prompt; 14-CONTEXT.md] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `git diff --check` | Git 2.50.1 [VERIFIED: `git --version`] | Whitespace hygiene before commit. [VERIFIED: user prompt] | Run before committing the research artifact and in Phase 14 plan verification. [VERIFIED: user prompt] |
| `node scripts/validate-skill-package.mjs` | Existing script [VERIFIED: file exists] | Release checklist command reference. [VERIFIED: RELEASE_CHECKLIST.md lines 7-11] | Document as Phase 15 release evidence; current red baseline is deferred. [VERIFIED: 13-VERIFICATION.md; 14-CONTEXT.md] |
| `node --test scripts/validate-skill-package.test.mjs` | Existing script [VERIFIED: file exists] | Release checklist command reference. [VERIFIED: RELEASE_CHECKLIST.md lines 13-17] | Document as Phase 15 release evidence; current red baseline is deferred. [VERIFIED: 13-VERIFICATION.md; 14-CONTEXT.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown/YAML edits | Add JSON manifests or release tooling | v2 owns manifests and packaging scripts, so Phase 14 should stay on existing docs surfaces. [VERIFIED: 14-CONTEXT.md deferred ideas] |
| Manual grep/scope validation | Update validator implementation | Phase 15 owns validator/test updates. [VERIFIED: 14-CONTEXT.md D-30 through D-32] |

**Installation:** No external package installation is required for Phase 14. [VERIFIED: .planning/codebase/STACK.md; package manifest scan]

## Package Legitimacy Audit

No external packages are recommended or installed in Phase 14. [VERIFIED: .planning/codebase/STACK.md; find output]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | n/a | n/a | n/a | n/a | n/a | No package install required. [VERIFIED: .planning/codebase/STACK.md] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no package recommendations]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no package recommendations]

## Architecture Patterns

### System Architecture Diagram

```text
User / maintainer reads public docs
        |
        v
README.md + examples/prompts.md
        |
        +--> explicit Ferris aliases and prompt examples
        |        |
        |        v
        |   SKILL.md controller + references/routing.md
        |        |
        |        v
        |   Ferris route-local pack: references/ips/ferris/
        |
        +--> NOTICE.md source/trademark separation
        |        |
        |        v
        |   references/ips/ferris/source.md authority
        |
        +--> RELEASE_CHECKLIST.md release gates
                 |
                 v
        Phase 15 validator/test evidence before v1.2 release
```

Diagram reflects the existing Markdown-driven skill package and Phase 14 documentation surfaces. [VERIFIED: README.md; examples/prompts.md; NOTICE.md; RELEASE_CHECKLIST.md; routing.md; Ferris pack]

### Recommended Project Structure

```text
.
├── README.md
├── examples/
│   └── prompts.md
├── NOTICE.md
├── RELEASE_CHECKLIST.md
└── ian-xiaohei-illustrations/
    ├── agents/
    │   └── openai.yaml
    └── references/
        ├── routing.md
        └── ips/
            ├── xiaohei/
            ├── littlebox/
            ├── tom/
            └── ferris/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── ferris-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

The structure matches current repo paths and the Phase 13 seven-file Ferris pack contract. [VERIFIED: find output; routing.md line 23]

### Pattern 1: Route-Aware Public Docs

**What:** Public docs name each visual IP route, route status, aliases, output suffix, and authority path. [VERIFIED: README.md lines 15-20, 47-94]
**When to use:** Use for README and examples wherever a user selects an IP route or maintainer audits route behavior. [VERIFIED: 14-CONTEXT.md]
**Example:**

```text
Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

Source: `14-CONTEXT.md`, README, examples, routing, release checklist. [VERIFIED: grep]

### Pattern 2: Route-Local Authority Pointer

**What:** Ferris docs point operational source/trademark decisions to `ian-xiaohei-illustrations/references/ips/ferris/source.md`. [VERIFIED: source.md; NOTICE.md lines 32-41]
**When to use:** Use in README, examples, NOTICE, release checklist, and optional routing wording. [VERIFIED: 14-CONTEXT.md]
**Example:**

```text
Source/trademark authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
```

Source: Ferris source record and Phase 14 context. [VERIFIED: source.md lines 3-10; 14-CONTEXT.md]

### Pattern 3: Release-Gated Public Samples

**What:** Public rendered Ferris samples require release-review records before entering public example directories. [VERIFIED: source.md lines 55-59; RELEASE_CHECKLIST.md lines 104-108]
**When to use:** Use in release checklist and prompt examples mentioning generated/public Ferris samples. [VERIFIED: 14-CONTEXT.md]
**Example:**

```text
Public rendered Ferris samples remain gated by `RELEASE_CHECKLIST.md`.
```

Source: Ferris pack operational marker. [VERIFIED: Ferris index.md lines 8-10]

### Anti-Patterns to Avoid

- **Validator edits in Phase 14:** Phase 15 owns `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`. [VERIFIED: 14-CONTEXT.md]
- **Ferris as default route:** Xiaohei remains the only omitted-IP default; Ferris remains explicit `default=false`. [VERIFIED: routing.md lines 7, 20, 23]
- **Source/trademark wording drift:** Public docs should reuse the shared phrase and `source.md` authority. [VERIFIED: 14-CONTEXT.md; grep]
- **Public Ferris rendered samples without release gate fields:** Source record requires reviewer/date/status/channel/outcome fields before public sample publication. [VERIFIED: source.md lines 55-59]
- **Mixed-IP identity blending:** Mixed requests use separate route groups and route-local references. [VERIFIED: routing.md lines 12, 45; SKILL.md via Phase 13 verification]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Ferris legal/source authority | New legal policy prose in each public doc | `references/ips/ferris/source.md` plus shared phrase | The source record is the operational authority and already contains source/trademark boundaries. [VERIFIED: source.md; 14-CONTEXT.md] |
| Prompt fields | Ad hoc Ferris prompt shape | `references/ips/ferris/prompt-template.md` planning and generation fields | Phase 12 verified these fields. [VERIFIED: 12-VERIFICATION.md; prompt-template.md] |
| QA leakage list | New leakage taxonomy | Ferris `qa-checklist.md` failure categories | Phase 12 verified stable failure names. [VERIFIED: qa-checklist.md lines 29-61] |
| Release gate structure | New release process | Existing Tom gate pattern plus Ferris-specific source/trademark fields | Tom gate already models rights, leakage, public assets, generated samples, and final review. [VERIFIED: RELEASE_CHECKLIST.md lines 44-84] |
| Validation implementation | Phase 14 validator patch | Grep/scope fence/git diff check | Phase 15 owns validator/test hardening. [VERIFIED: 14-CONTEXT.md; user prompt] |

**Key insight:** Phase 14 should propagate already-verified Ferris contracts into public and release surfaces, with validation limited to text coverage and scope boundaries. [VERIFIED: Phase 11-13 verification files; 14-CONTEXT.md]

## Common Pitfalls

### Pitfall 1: README Says Ferris Source Record but Omits Full Pack

**What goes wrong:** Users see `source.md` but not the full Ferris route-local pack. [VERIFIED: README.md lines 87-94]
**Why it happens:** Phase 11 added source-only docs before Phase 12 created the pack. [VERIFIED: Phase 11 and Phase 12 verification files]
**How to avoid:** Change README canonical pack entry to `ian-xiaohei-illustrations/references/ips/ferris/` and call out `source.md` as authority. [VERIFIED: 14-CONTEXT.md]
**Warning signs:** README text says only `Ferris source record`. [VERIFIED: README.md line 92]

### Pitfall 2: Copyable Prompt Inventory Keeps Phase 14 Placeholder

**What goes wrong:** Users get a smoke marker instead of real Ferris planning and generation prompts. [VERIFIED: examples/prompts.md lines 151-164]
**Why it happens:** Phase 11 left explicit placeholder wording for Phase 14. [VERIFIED: examples/prompts.md line 163]
**How to avoid:** Replace placeholder with Ferris planning, generation, smoke, and four-IP mixed prompts. [VERIFIED: 14-CONTEXT.md]
**Warning signs:** `route contract marker` or `Phase 14 负责 copyable Ferris prompt examples` remains. [VERIFIED: examples/prompts.md lines 151, 163]

### Pitfall 3: Metadata Names Three Routes

**What goes wrong:** Agent discovery hides Ferris from display metadata. [VERIFIED: openai.yaml lines 2-4]
**Why it happens:** Metadata was updated for the Tom milestone before Ferris. [VERIFIED: memory note; openai.yaml]
**How to avoid:** Update all three interface strings while preserving `allow_implicit_invocation: true`. [VERIFIED: 14-CONTEXT.md; openai.yaml line 6]
**Warning signs:** `display_name` lacks Ferris. [VERIFIED: openai.yaml line 2]

### Pitfall 4: Release Checklist Mirrors Phase 11 Gate Only

**What goes wrong:** Maintainers miss prompt leakage and generated sample review. [VERIFIED: RELEASE_CHECKLIST.md lines 86-113]
**Why it happens:** Existing Ferris checklist predates Phase 12 QA categories and Phase 13 full-pack loading. [VERIFIED: Phase 12 and Phase 13 verification files]
**How to avoid:** Expand Ferris checklist using QA failure names and Tom generated-sample/public-asset pattern. [VERIFIED: qa-checklist.md; RELEASE_CHECKLIST.md lines 44-84]
**Warning signs:** No dedicated `Prompt Leakage Scan` or `Generated Sample Policy` under Ferris. [VERIFIED: RELEASE_CHECKLIST.md lines 86-113]

### Pitfall 5: Validator Red Baseline Treated as Phase 14 Failure

**What goes wrong:** Planner spends Phase 14 on validator/test implementation. [VERIFIED: 13-VERIFICATION.md]
**Why it happens:** Existing commands fail after Phase 13 route reference expansion. [VERIFIED: 13-VERIFICATION.md command output]
**How to avoid:** Use grep/scope fence/git diff for Phase 14; record validator/test red baseline as Phase 15 deferred. [VERIFIED: user prompt; 14-CONTEXT.md]
**Warning signs:** Plan edits `scripts/validate-skill-package.mjs` or `scripts/validate-skill-package.test.mjs`. [VERIFIED: 14-CONTEXT.md D-30]

## Code Examples

Verified patterns from current repository sources. [VERIFIED: grep]

### Ferris Planning Fields

```text
Placement
Core idea
Structure type
Ferris state
Ferris action
Supporting objects
Visible labels
Output path
Source/trademark note
```

Source: `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`. [VERIFIED: prompt-template.md lines 19-29]

### Ferris Generation Constraints

```text
Route status note: Ferris is a `source-reviewed` Rust-community mascot route.
Use `source.md` as the source/trademark authority.
Save accepted output under `assets/<article-slug>-ferris/`.
```

Source: `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`. [VERIFIED: prompt-template.md lines 40-70]

### Ferris Release Leakage Terms

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

Source: `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`. [VERIFIED: qa-checklist.md lines 29-61]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Ferris source-only route reference | Ferris full seven-file route-local pack | Phase 13, 2026-06-13 [VERIFIED: 13-VERIFICATION.md] | README/examples/checklist should reference full pack and `source.md` authority. [VERIFIED: routing.md line 23] |
| Three-route public docs and metadata | Four-route public docs and metadata | Phase 14 target [VERIFIED: .planning/ROADMAP.md] | Metadata, prompt inventory, and release checklist should name Xiaohei/Littlebox/Tom/Ferris. [VERIFIED: 14-CONTEXT.md] |
| Validator green after Phase 11/12 | Validator red after Phase 13 full-pack route expansion | Phase 13, 2026-06-13 [VERIFIED: 13-VERIFICATION.md] | Phase 14 should document commands while Phase 15 updates expectations. [VERIFIED: 14-CONTEXT.md] |

**Deprecated/outdated:**

- `route contract marker` as the only Ferris example prompt is outdated for Phase 14. [VERIFIED: examples/prompts.md lines 151-164; 14-CONTEXT.md]
- `同一观点生成三组` mixed generation is outdated because Phase 14 requires four-IP variants. [VERIFIED: examples/prompts.md lines 208-242; .planning/REQUIREMENTS.md]
- README maintainer validation text listing only Xiaohei/Littlebox/Tom and Phase 5 boundary is outdated for v1.2 Ferris docs. [VERIFIED: README.md lines 297-304; .planning/ROADMAP.md]
- Release checklist public docs/path marker section listing only Xiaohei/Littlebox is outdated for v1.2. [VERIFIED: RELEASE_CHECKLIST.md lines 122-129; .planning/ROADMAP.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Exact final Chinese wording can be tuned by the planner and executor while preserving locked tokens and source/trademark phrase. [ASSUMED] | User Constraints / Summary | Low; locked tokens and file scopes control acceptance. |

## Open Questions

1. **Should `routing.md` receive a Phase 14 wording sync?** [VERIFIED: 14-CONTEXT.md allows optional routing wording]
   - What we know: `routing.md` already contains aliases, full seven-file references, raw/escaped path tokens, and shared phrase. [VERIFIED: routing.md lines 5-45]
   - What's unclear: A tiny public wording sync may be unnecessary if README/examples/NOTICE/checklist align. [ASSUMED]
   - Recommendation: Treat `routing.md` as optional and edit only for exact wording parity. [VERIFIED: 14-CONTEXT.md]

2. **Should README include long Ferris prompt examples or link to `examples/prompts.md`?** [ASSUMED]
   - What we know: README quick examples are compact and `examples/prompts.md` is the full inventory. [VERIFIED: README.md lines 149-216; examples/prompts.md]
   - What's unclear: The ideal README length is editorial. [ASSUMED]
   - Recommendation: Add compact Ferris planning/generation quick examples in README and keep the full smoke/mixed inventory in `examples/prompts.md`. [ASSUMED]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Git | Diff check and commit | yes [VERIFIED: command probe] | 2.50.1 [VERIFIED: `git --version`] | none needed |
| Node.js | Existing validator/test command references | yes [VERIFIED: command probe] | v24.13.0 [VERIFIED: `node --version`] | Phase 14 validation can use grep and diff because validator hardening is Phase 15. [VERIFIED: 14-CONTEXT.md] |
| ripgrep | Marker and scope validation | yes [VERIFIED: command probe] | 15.1.0 [VERIFIED: `rg --version`] | `grep` if unavailable. [ASSUMED] |
| Context7 MCP | External library docs | not available in active tools [VERIFIED: tool list] | n/a | Official docs and local repo files. [VERIFIED: web search and grep] |

**Missing dependencies with no fallback:** none for Phase 14 research and planning. [VERIFIED: environment probe]

**Missing dependencies with fallback:** Context7 unavailable; local repo files and official Rust/Ferris web sources were used for source/trademark cross-check. [VERIFIED: tool list; web sources]

## Validation Strategy

`workflow.nyquist_validation` is explicitly `false`, so the template Validation Architecture section is omitted. [VERIFIED: .planning/config.json] Phase 14 should validate with these checks instead. [VERIFIED: user prompt]

| Check | Command / Method | Expected Result |
|-------|------------------|-----------------|
| Scope fence | `git diff -- README.md examples/prompts.md ian-xiaohei-illustrations/agents/openai.yaml NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/references/routing.md` and `git diff --name-only` [VERIFIED: user prompt] | Only Phase 14 docs/metadata surfaces changed; `SKILL.md`, Ferris pack files, validator script, and Node test remain unchanged. [VERIFIED: 14-CONTEXT.md] |
| README coverage | `rg -n "Ferris|source-reviewed|assets/<article-slug>-ferris|assets/&lt;article-slug&gt;-ferris|references/ips/ferris|Source/trademark note|Phase 15" README.md` [VERIFIED: recommended grep] | README has aliases, full pack path, source authority, planning fields, paths, sample gate, workflow parity, and Phase 15 deferral. [VERIFIED: 14-CONTEXT.md] |
| Prompt inventory | `rg -n "显式 Ferris|Ferris.*规划|Ferris.*生成|route smoke|Xiaohei.*Littlebox.*Tom.*Ferris|references/ips/ferris/source.md|references/ips/ferris/" examples/prompts.md` [VERIFIED: recommended grep] | Ferris planning, generation, smoke, and four-IP mixed prompts are present. [VERIFIED: FDOC-02] |
| Metadata | `rg -n "Xiaohei|Littlebox|Tom|Ferris|allow_implicit_invocation" ian-xiaohei-illustrations/agents/openai.yaml` [VERIFIED: recommended grep] | All four routes named; `allow_implicit_invocation: true` remains. [VERIFIED: FDOC-03] |
| NOTICE consistency | `rg -n "Ferris Source Attribution and Rust Trademark Boundary|rustacean.net|Karen Rustad|source-reviewed|references/ips/ferris/source.md|official-affiliation|endorsement" NOTICE.md` [VERIFIED: recommended grep] | NOTICE remains concise and points to `source.md` authority. [VERIFIED: FDOC-05] |
| Release gates | `rg -n "Ferris Source|Rust Trademark|Prompt Leakage|Public Asset|Generated Sample|Phase 15|validate-skill-package|Final Ferris" RELEASE_CHECKLIST.md` [VERIFIED: recommended grep] | Ferris release gates cover source, trademark wording, leakage, public assets, generated samples, validator commands, and final review. [VERIFIED: FDOC-04] |
| Whitespace | `git diff --check` [VERIFIED: user prompt] | Exit 0 before commit. [VERIFIED: user prompt] |

Record validator/test red baseline as Phase 15 deferred: `node scripts/validate-skill-package.mjs` currently fails `ROUTE-FERRIS-001` and `ROUTE-REFS-001`; `node --test scripts/validate-skill-package.test.mjs` currently has 7 failing tests from the old source-only baseline and public sample parser fixtures. [VERIFIED: 13-VERIFICATION.md]

## Security Domain

`security_enforcement` is enabled in `.planning/config.json`, but Phase 14 changes Markdown/YAML docs and release gates rather than runtime code. [VERIFIED: .planning/config.json; .planning/codebase/STACK.md]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no [VERIFIED: no app runtime] | n/a |
| V3 Session Management | no [VERIFIED: no app runtime] | n/a |
| V4 Access Control | no [VERIFIED: no app runtime] | n/a |
| V5 Input Validation | yes, documentation-level prompt safety [VERIFIED: Ferris QA docs] | Ferris QA leakage terms and release checklist review gates. [VERIFIED: qa-checklist.md; RELEASE_CHECKLIST.md] |
| V6 Cryptography | no [VERIFIED: no app runtime] | n/a |

### Known Threat Patterns for Documentation/Prompt Surface

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route leakage across IPs | Tampering [ASSUMED] | Route-local references and explicit separate route groups. [VERIFIED: routing.md lines 12, 45] |
| Misleading official affiliation or endorsement wording | Spoofing [ASSUMED] | Shared Ferris source/trademark phrase, NOTICE boundary, and release checklist review. [VERIFIED: NOTICE.md; RELEASE_CHECKLIST.md; Rust Foundation trademark policy] |
| Public asset publication without review record | Repudiation [ASSUMED] | Release checklist reviewer/date/status/channel fields. [VERIFIED: source.md lines 55-59; 14-CONTEXT.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/14-docs-examples-and-release-surface/14-CONTEXT.md` - locked Phase 14 decisions, file scope, and Phase 15 deferral. [VERIFIED: local file]
- `.planning/ROADMAP.md` - Phase 14 success criteria and plan slices. [VERIFIED: local file]
- `.planning/REQUIREMENTS.md` - FDOC-01 through FDOC-05. [VERIFIED: local file]
- `.planning/phases/11-ferris-source-and-route-contract/11-VERIFICATION.md` and `11-UAT.md` - Phase 11 source/route/public-sample gate evidence. [VERIFIED: local file]
- `.planning/phases/12-ferris-canonical-pack/12-VERIFICATION.md` and `12-UAT.md` - Phase 12 Ferris pack, prompt fields, QA failures, and visual smoke evidence. [VERIFIED: local file]
- `.planning/phases/13-skill-controller-integration/13-VERIFICATION.md`, `13-UAT.md`, and `13-01-SUMMARY.md` - Phase 13 full-pack controller behavior and deferred red validator/test baseline. [VERIFIED: local file]
- `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/references/routing.md` - current public docs and metadata coverage. [VERIFIED: local file]
- `ian-xiaohei-illustrations/references/ips/ferris/*.md` - Ferris source record, pack map, prompt fields, QA categories, and release-review boundaries. [VERIFIED: local file]

### Secondary (MEDIUM-HIGH confidence)

- <https://rustacean.net/> - Ferris source site and waiver context. [CITED: rustacean.net]
- <https://rustfoundation.org/policy/rust-trademark-policy/> - Rust trademark policy, official/affiliated/endorsed boundary, and Rust/Cargo marks context. [CITED: Rust Foundation]
- <https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/> - Rust Foundation article identifying Karen Rustad Tolva as the original Ferris designer. [CITED: Rust Foundation]

### Tertiary (LOW confidence)

- Memory note from prior repo work: Phase 9/10 Tom docs and validator patterns were useful analogs. [ASSUMED unless re-verified by local files]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - derived from `.planning/codebase/STACK.md`, file scan, and command probes. [VERIFIED: local files; command probes]
- Architecture: HIGH - docs-only skill package boundaries are explicit in AGENTS.md, codebase maps, and current files. [VERIFIED: AGENTS.md; .planning/codebase/STACK.md; find output]
- Pitfalls: HIGH - gaps are visible in current public docs and Phase 14 context. [VERIFIED: grep]
- Source/trademark external facts: MEDIUM-HIGH - official/current web sources were checked, but release decisions should continue to rely on `source.md` plus maintainer review. [CITED: rustacean.net; Rust Foundation]

**Research date:** 2026-06-13 [VERIFIED: current_date]
**Valid until:** 2026-07-13 for repo-internal docs planning; source/trademark wording should be rechecked before public release. [ASSUMED]
