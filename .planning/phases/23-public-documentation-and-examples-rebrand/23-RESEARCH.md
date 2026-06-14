# Phase 23: Public Documentation and Examples Rebrand - Research

**Researched:** 2026-06-14
**Domain:** Documentation-first Codex Skill public rebrand and validator-safe marker synchronization
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

## Implementation Decisions

### Public Identity and README

- **D-01:** README public identity should lead with `Visual IP Illustrations`.
- **D-02:** README should preserve Chinese-first documentation while explaining the multi-IP value proposition: selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal article illustration routes with consistent character rules, prompts, QA, output paths, and attribution/source/brand boundaries.
- **D-03:** README should stop presenting `Ian Xiaohei Illustrations` as the primary product name on first-view surfaces. It may keep the old name where attribution, migration, compatibility, package-path, or legacy alias context requires it.
- **D-04:** DOC-01 is satisfied when README opens with Visual IP Illustrations and makes the multi-IP product identity clear before route details.

### Install, Clone, and Compatibility Guidance

- **D-05:** Canonical public clone/install guidance should use `visual-ip-illustrations`.
- **D-06:** README install guidance should name `$visual-ip-illustrations` as the canonical invocation.
- **D-07:** README should document `ian-xiaohei-illustrations` and `$ian-xiaohei-illustrations` as v1.4 legacy compatibility surfaces for existing prompts and local installs.
- **D-08:** README should reflect the Phase 22 package-path reality: the live repository still contains `ian-xiaohei-illustrations/`, while runtime metadata documents `visual-ip-illustrations` as the canonical package slug/path and keeps the legacy path available during v1.4.
- **D-09:** DOC-02 is satisfied when README shows canonical clone/install guidance plus legacy compatibility guidance without implying route or output path changes.

### Prompt Examples and Smoke Coverage

- **D-10:** `examples/prompts.md` should add canonical `$visual-ip-illustrations` prompts for normal user flows.
- **D-11:** `examples/prompts.md` should preserve legacy `$ian-xiaohei-illustrations` smoke prompts as v1.4 compatibility coverage.
- **D-12:** Explicit route smoke coverage must remain visible for omitted-IP Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and mixed-IP requests.
- **D-13:** Mixed-IP examples should keep separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal, with route-local references, route-specific planning fields, status/source/rights/brand notes, and stable output paths.
- **D-14:** DOC-03 is satisfied when `examples/prompts.md` contains canonical invocation prompts plus legacy compatibility smoke prompts and preserves the route smoke inventory.

### Attribution, Source, Brand, and Release Materials

- **D-15:** NOTICE and release materials must preserve Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries.
- **D-16:** NOTICE should record the rebrand scope while keeping Ian attribution for Xiaohei, Littlebox MIT/source attribution for `okooo5km`, Tom `gated-authorized` permission boundary, Ferris `source-reviewed` source/trademark boundary, and Sealos Seal `brand-owned` uploaded-image/no-logo brand boundary.
- **D-17:** `RELEASE_CHECKLIST.md` should add v1.4 rebrand release review items for canonical naming, canonical invocation, legacy alias compatibility, canonical install/clone guidance, and stale old-name-only public surfaces.
- **D-18:** Existing Tom, Ferris, and Sealos public sample gates remain intact. Rebrand wording must not loosen protected-character, trademark, endorsement, uploaded-image, no-logo, or brand review gates.
- **D-19:** DOC-04 is satisfied when NOTICE and release materials preserve the five-route attribution/source/brand boundaries while recording the rebrand scope.

### Public Docs Stale-Name Cleanup

- **D-20:** Public docs should avoid old-name-only framing on primary surfaces: README title/opening, "what this repo is", install section, quick examples, examples intro, and release checklist route smoke prompts should lead with canonical naming.
- **D-21:** Legacy alias, legacy package path, repository-local file paths, current package directory references, attribution markers, source paths, public sample directories, validator constants, and route-local reference paths may continue to use `ian-xiaohei-illustrations` where they describe actual compatibility or current repository structure.
- **D-22:** Public docs should keep raw and escaped output path tokens stable for all five routes:
  - Xiaohei: `assets/<article-slug>-illustrations/` and `assets/&lt;article-slug&gt;-illustrations/`
  - Littlebox: `assets/<article-slug>-littlebox/` and `assets/&lt;article-slug&gt;-littlebox/`
  - Tom: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`
  - Ferris: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`
  - Sealos Seal: `assets/<article-slug>-sealos/` and `assets/&lt;article-slug&gt;-sealos/`

### Phase 23 Validation Boundary

- **D-23:** Phase 23 may update directly affected docs check expectations if README, examples, NOTICE, or release checklist edits would otherwise break the current validator baseline.
- **D-24:** Phase 23 should avoid broad validator/test expansion. Phase 24 owns comprehensive canonical naming checks, legacy alias marker checks, stale old-name-only scans, route stability tests, output path stability tests, and final release evidence.
- **D-25:** The Phase 23 implementation should run at least `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` if public docs edits touch validator-covered markers.
- **D-26:** Phase 22 runtime metadata remains stable during Phase 23. Planning should treat `SKILL.md`, `agents/openai.yaml`, route behavior, and package-path migration semantics as already locked unless public docs expose a direct mismatch with those files.
- **D-27:** Broad validator hardening belongs to Phase 24 unless a Phase 23 public docs edit breaks the current `78/78` validator or `40/40` Node baseline. In that case, Phase 23 may synchronize only the directly affected expectation.

### Requirement Mapping

- **DOC-01:** README opens with Visual IP Illustrations and explains the multi-IP product identity.
- **DOC-02:** README install commands show the canonical clone/install path and the legacy compatibility path.
- **DOC-03:** `examples/prompts.md` includes canonical `$visual-ip-illustrations` prompts plus legacy compatibility smoke prompts.
- **DOC-04:** NOTICE and release materials preserve Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries while recording the rebrand scope.

### the agent's Discretion

The user supplied the Phase 23 decisions directly. Planner discretion remains only in the exact wording and ordering of public docs sections, as long as the primary surfaces lead with Visual IP Illustrations, Chinese-first docs remain intact, compatibility is explicit, and route/source/brand contracts stay stable.

### Deferred Ideas (OUT OF SCOPE)

- Full validator hardening for canonical naming across all public docs and stale old-name-only scans belongs to Phase 24.
- Node test expansion for canonical invocation, legacy invocation, route stability, output path stability, and stale fixtures belongs to Phase 24.
- Final release evidence, UAT, and release-readiness report belong to Phase 24.
- Full GitHub repository rename, remote URL migration, redirect behavior, and release-distribution choreography remain future distribution work after v1.4 docs and compatibility evidence are stable.
- v2 selected-IP installer, visual-IP manifest, asset manifest, visual regression checks, and English localization remain v2 requirements.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DOC-01 | README opens with Visual IP Illustrations and explains the multi-IP product identity. | README currently opens with `# Ian Xiaohei Illustrations` and line 11 frames the product as `Ian Xiaohei Illustrations`; recommended README edits replace primary framing with `Visual IP Illustrations` while preserving route inventory. [VERIFIED: rg README.md] |
| DOC-02 | README install commands show the canonical clone/install path and the legacy compatibility path. | README lines 164-170 currently use the old clone slug and `$ian-xiaohei-illustrations`; recommended install edits add canonical `visual-ip-illustrations` guidance plus explicit v1.4 legacy compatibility notes. [VERIFIED: rg README.md] |
| DOC-03 | `examples/prompts.md` includes canonical `$visual-ip-illustrations` prompts plus legacy compatibility smoke prompts. | `examples/prompts.md` currently uses `$ian-xiaohei-illustrations` throughout normal examples and route smoke prompts; validator smoke checks depend on route headings and markers, so add canonical examples near the top and preserve legacy smoke inventory. [VERIFIED: rg examples/prompts.md; VERIFIED: scripts/validate-skill-package.mjs] |
| DOC-04 | NOTICE and release materials preserve Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries while recording the rebrand scope. | NOTICE and RELEASE_CHECKLIST have exact validator-covered attribution, status, source, public sample, and no-logo markers; recommended edits add rebrand scope without removing those markers. [VERIFIED: rg NOTICE.md RELEASE_CHECKLIST.md; VERIFIED: scripts/validate-skill-package.mjs] |
</phase_requirements>

## Summary

Phase 23 is a documentation rebrand over a stable runtime baseline: `SKILL.md` already exposes `name: visual-ip-illustrations`, `agents/openai.yaml` already leads with Visual IP Illustrations, and baseline verification passes `78/78` validator checks plus `40/40` Node tests. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: node --test scripts/validate-skill-package.test.mjs; CITED: .planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-01-SUMMARY.md]

The safe implementation shape is narrow: update README first-view identity, install guidance, canonical invocation examples, and package-path compatibility wording; add canonical prompts to `examples/prompts.md` while preserving all legacy route smoke fixtures; add rebrand scope to NOTICE and `RELEASE_CHECKLIST.md` while retaining every route/source/brand gate marker. [VERIFIED: rg README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md; CITED: .planning/phases/23-public-documentation-and-examples-rebrand/23-CONTEXT.md]

**Primary recommendation:** Use a marker-preserving docs edit plan, then run `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check`; update validator/test expectations only if a deliberate Phase 23 doc wording change breaks a currently validator-covered deterministic string. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs; CITED: .planning/phases/23-public-documentation-and-examples-rebrand/23-CONTEXT.md]

## Project Constraints (from AGENTS.md)

- User-facing replies must begin with `爸爸`; user-facing replies use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and PR titles/descriptions use English. [VERIFIED: AGENTS.md]
- Before file-changing repo work, use a GSD workflow entry point unless the user explicitly asks to bypass it; this research task is already part of `$gsd-plan-phase 23` and may create only the Phase 23 research artifact. [VERIFIED: AGENTS.md; VERIFIED: user task]
- Public docs changes are out of this research step; create only `.planning/phases/23-public-documentation-and-examples-rebrand/23-RESEARCH.md`. [VERIFIED: user task]
- Keep edits surgical, preserve existing style, and verify changes with concrete commands. [VERIFIED: AGENTS.md]
- The project is a documentation-driven Codex Skill package with no standalone app runtime or installable dependency manifest. [VERIFIED: AGENTS.md project-doc; VERIFIED: rg --files]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Public product identity | Documentation / Static | Codex Skill metadata | README, examples, NOTICE, and release checklist are the Phase 23 surfaces; runtime metadata was completed in Phase 22. [CITED: 23-CONTEXT.md; CITED: 22-01-SUMMARY.md] |
| Canonical invocation examples | Documentation / Static | Codex Skill runtime | Examples teach users to call `$visual-ip-illustrations`; runtime alias behavior remains controlled by `SKILL.md` and agent metadata. [VERIFIED: README.md; VERIFIED: examples/prompts.md; VERIFIED: ian-xiaohei-illustrations/SKILL.md] |
| Route/source/brand boundaries | Documentation / Static | Route reference packs | Public docs expose boundary summaries; route-local authorities remain under `ian-xiaohei-illustrations/references/ips/<route>/`. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: README.md] |
| Validator synchronization | Scripts / Local CLI | Documentation fixtures | The validator reads public docs as deterministic marker inputs; Phase 23 may synchronize directly affected expectations only when doc edits break baseline. [VERIFIED: scripts/validate-skill-package.mjs; CITED: 23-CONTEXT.md] |

## Current Docs Surface Audit

| File | Current Primary Surface | Safe Phase 23 Interpretation |
|------|-------------------------|------------------------------|
| `README.md` | Title is `# Ian Xiaohei Illustrations`; line 11 says `Ian Xiaohei Illustrations 是一个 Codex Skill`; install block clones `helloianneo/ian-xiaohei-illustrations.git`, `cd ian-xiaohei-illustrations`, copies `./ian-xiaohei-illustrations`, and tells users to use `$ian-xiaohei-illustrations`. [VERIFIED: rg README.md] | Replace first-view public identity and primary install/invocation copy with Visual IP Illustrations / `visual-ip-illustrations` / `$visual-ip-illustrations`; keep `ian-xiaohei-illustrations/` where it describes the current live package directory and v1.4 compatibility. [CITED: 23-CONTEXT.md] |
| `README.md` | Route inventory, output paths, route-local authority paths, Sealos no-logo boundary, release checklist link, and maintainer commands are already present. [VERIFIED: rg README.md] | Preserve route markers and output tokens exactly unless deliberately synchronized with validator checks. [VERIFIED: scripts/validate-skill-package.mjs] |
| `examples/prompts.md` | Intro says prompts are copyable and also route smoke fixtures; normal flows and smoke prompts use `$ian-xiaohei-illustrations`. [VERIFIED: rg examples/prompts.md] | Add a canonical invocation block near the top for normal user flows, then keep existing smoke sections or relabel them as v1.4 legacy compatibility smoke. [CITED: 23-CONTEXT.md] |
| `examples/prompts.md` | Smoke sections cover omitted-IP Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and mixed-IP groups with route-local paths, status markers, output paths, and sample gates. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve headings and validator-covered strings listed in SMOKE checks; add canonical prompts without weakening legacy fixture coverage. [VERIFIED: scripts/validate-skill-package.mjs] |
| `NOTICE.md` | Top identity still says `Ian Xiaohei Illustrations is an AI-agent skill created by Ian`; route attribution sections preserve Littlebox MIT/source, Tom permission boundary, Ferris source/trademark, Sealos brand/canonical image. [VERIFIED: rg NOTICE.md] | Add Visual IP Illustrations rebrand scope at top while keeping `Ian Xiaohei Illustrations`, `created by Ian`, `小黑`, `Ian's visual language`, `provide attribution to Ian`, and author links intact for validator and attribution. [VERIFIED: scripts/validate-skill-package.mjs] |
| `RELEASE_CHECKLIST.md` | Automated gates show validator/test/diff commands; smoke prompts start with legacy invocation; attribution/release gates cover Tom, Ferris, and Sealos; package boundary confirms `ian-xiaohei-illustrations/`. [VERIFIED: rg RELEASE_CHECKLIST.md] | Add v1.4 rebrand review items for canonical naming, canonical invocation, legacy alias, canonical clone/install guidance, and stale old-name-only public surfaces; keep route-specific release gates intact. [CITED: 23-CONTEXT.md; VERIFIED: scripts/validate-skill-package.mjs] |

## Exact Strings To Preserve

| Surface | Preserve These Strings | Reason |
|---------|------------------------|--------|
| All public docs | `assets/<article-slug>-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/<article-slug>-tom/`, `assets/<article-slug>-ferris/`, `assets/<article-slug>-sealos/` plus escaped `assets/&lt;article-slug&gt;-.../` variants. | `DOC-PATHS-001`, route docs, and Phase 21 naming contract require stable raw and escaped output path tokens. [VERIFIED: scripts/validate-skill-package.mjs; CITED: NAMING-CONTRACT.md] |
| README + examples | `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/xiaohei/`, `ian-xiaohei-illustrations/references/ips/littlebox/`, Tom/Ferris/Sealos route-local paths. | Validator `DOC-ROUTES-001`, `DOC-TOM-001`, `DOC-FERRIS-001`, and `DOC-SEALOS-*` depend on route authority paths. [VERIFIED: scripts/validate-skill-package.mjs] |
| README, examples, routing, release checklist | `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.` | `DOC-FERRIS-001` requires the exact phrase in README, examples, routing, and release checklist. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs] |
| NOTICE | `Ian Xiaohei Illustrations`, `created by Ian`, `小黑`, `Ian's visual language`, `provide attribution to Ian`, `https://github.com/helloianneo`. | `NOTICE-IAN-001` checks these attribution markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| NOTICE | `5km Littlebox Illustrations`, `okooo5km`, source URL, `MIT`, full and short inspected commits, `Copyright (c) 2026 okooo5km`, `derived documentation`. | `NOTICE-LB-001` checks these source and license markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| NOTICE | `Tom Source Attribution and Permission Boundary`, `Tom from Tom and Jerry`, `gated-authorized`, `ian-xiaohei-illustrations/references/ips/tom/rights.md`, `public-sample gate`. | `NOTICE-TOM-001` checks these permission boundary markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| NOTICE | `Ferris Source Attribution and Rust Trademark Boundary`, `Ferris the Rustacean`, `rustacean.net`, `Karen Rustad Tolva`, `source-reviewed`, source path, trademark and endorsement wording. | `NOTICE-FERRIS-001` checks these source/trademark markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| NOTICE + release | `Sealos Seal Brand and Canonical Image Boundary`, `uploaded white seal mascot`, `brand-owned`, `Uploaded-image authority`, `no-logo mascot identity`, Sealos source path, `reliable cloud developer companion`, `Prior Sealos mascot exploration`, `v1.3 canonical mascot reference`, `Public rendered samples`, `brand wording`. | `NOTICE-SEALOS-001` and `DOC-SEALOS-P19-001` check these brand and image-boundary markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| `examples/prompts.md` | Smoke headings `## 路由烟测：省略视觉 IP`, `## 路由烟测：显式选择 Xiaohei`, `## 路由烟测：显式选择 Littlebox`, `## 路由烟测：显式选择 Tom`, `## 路由烟测：显式选择 Ferris`, `## 路由烟测：显式选择 Sealos Seal`, `## 路由说明：多 IP 请求`. | Validator SMOKE checks rely on these headings and nearby route markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| `RELEASE_CHECKLIST.md` | `Public rendered Tom samples approved`, Ferris public asset policy line, Sealos public asset policy line, Ferris/Sealos generated sample review lines. | Public asset approval parsers and boundary image checks depend on these exact release records. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs] |

## Exact Strings To Change Or Add

| File | Current Old-Name Primary Framing | Recommended Phase 23 Change |
|------|----------------------------------|-----------------------------|
| `README.md` | `# Ian Xiaohei Illustrations` [VERIFIED: README.md:1] | Change to `# Visual IP Illustrations`. [CITED: 23-CONTEXT.md] |
| `README.md` | `Ian Xiaohei Illustrations 是一个 Codex Skill` [VERIFIED: README.md:11] | Reframe as `Visual IP Illustrations 是一个 Codex Skill` and mention former Xiaohei-centered naming only in compatibility/migration or attribution context. [CITED: 23-CONTEXT.md] |
| `README.md` | `git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git` and `cd ian-xiaohei-illustrations` [VERIFIED: README.md:164-165] | Show canonical public clone/install with `https://github.com/helloianneo/visual-ip-illustrations.git` and `cd visual-ip-illustrations`; add a v1.4 compatibility note that current repo/package paths may still include `ian-xiaohei-illustrations/`. [CITED: 23-CONTEXT.md; CITED: NAMING-CONTRACT.md] |
| `README.md` | `安装后在 Codex 里使用 $ian-xiaohei-illustrations` [VERIFIED: README.md:170] | Change primary invocation to `$visual-ip-illustrations`; document `$ian-xiaohei-illustrations` as a v1.4 legacy compatibility alias. [CITED: 23-CONTEXT.md] |
| `README.md` | Quick examples use `Use $ian-xiaohei-illustrations`. [VERIFIED: rg README.md] | Change quick examples to `Use $visual-ip-illustrations`; keep a labeled legacy compatibility example or note. [CITED: 23-CONTEXT.md] |
| `examples/prompts.md` | Top examples and normal flows use `Use $ian-xiaohei-illustrations`. [VERIFIED: rg examples/prompts.md] | Add top canonical flow examples using `Use $visual-ip-illustrations`; keep existing route smoke prompts with `$ian-xiaohei-illustrations` as compatibility smoke. [CITED: 23-CONTEXT.md] |
| `NOTICE.md` | Top sentence uses `Ian Xiaohei Illustrations is an AI-agent skill created by Ian.` [VERIFIED: NOTICE.md:3] | Add `Visual IP Illustrations` as current project identity and v1.4 rebrand scope; keep `Ian Xiaohei Illustrations is an AI-agent skill created by Ian` as an attribution marker. [VERIFIED: scripts/validate-skill-package.mjs; CITED: 23-CONTEXT.md] |
| `RELEASE_CHECKLIST.md` | Route smoke line uses `$ian-xiaohei-illustrations` as the only invocation. [VERIFIED: RELEASE_CHECKLIST.md:33] | Add canonical `$visual-ip-illustrations` release smoke/review item and preserve `$ian-xiaohei-illustrations` legacy compatibility smoke item. [CITED: 23-CONTEXT.md] |
| `RELEASE_CHECKLIST.md` | Phase ownership notes stop at Phase 20 for Sealos and Phase 15 for Ferris. [VERIFIED: RELEASE_CHECKLIST.md:27,29,191,201,202] | Add v1.4 Phase 23 rebrand review and Phase 24 validation ownership notes without changing existing Ferris/Sealos release gates. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md] |

## Validator/Test Dependency Map

| Check/Test | Depends On | Phase 23 Risk | Recommended Handling |
|------------|------------|---------------|----------------------|
| `DOC-LINKS-001` | Local Markdown links in README and examples resolve inside repo. [VERIFIED: scripts/validate-skill-package.mjs:1945] | Link rewrites in README/examples can break validation. | Keep links repository-relative and run validator. |
| `DOC-PATHS-001` | README and examples each include all raw and escaped route output tokens. [VERIFIED: scripts/validate-skill-package.mjs:1962] | Removing duplicated token lists can fail validation. | Preserve token list in both README and examples. |
| `DOC-ROUTES-001` | Combined README/examples include routing path, Xiaohei/Littlebox pack paths, and route names. [VERIFIED: scripts/validate-skill-package.mjs:1969] | Replacing all package paths with canonical slug can fail. | Keep `ian-xiaohei-illustrations/references/...` authority paths. |
| `DOC-TOM-001` | Combined README/examples include Tom aliases, `gated-authorized`, rights path, and Tom output tokens. [VERIFIED: scripts/validate-skill-package.mjs:1979] | Simplifying Tom public wording can fail and loosen rights boundary. | Preserve Tom route/status/rights/output marker block. |
| `DOC-FERRIS-001` | README, examples, routing, and release checklist each include the exact Ferris D-15 phrase. [VERIFIED: scripts/validate-skill-package.mjs:1993; VERIFIED: scripts/validate-skill-package.test.mjs:980] | Rewording the Ferris sentence in one public doc fails. | Keep the exact phrase. |
| `DOC-SEALOS-P16-001` | README/examples include Sealos alias, brand, source, routing, output, reliable companion, uploaded identity, and drift markers. [VERIFIED: scripts/validate-skill-package.mjs:2013] | Condensing Sealos copy can drop validator markers. | Preserve Sealos route paragraph or marker list. |
| `DOC-SEALOS-P19-001` | README, examples, routing, and release checklist each include Sealos source pack, `uploaded-image-canonical`, output tokens, plus combined public docs include sample/review/Phase 20 markers. [VERIFIED: scripts/validate-skill-package.mjs:2034] | Removing Phase 20 text before Phase 24 sync can fail. | Add Phase 23/24 wording alongside current Phase 20 markers. |
| `NOTICE-IAN-001` through `NOTICE-SEALOS-001` | NOTICE exact attribution/source/brand markers. [VERIFIED: scripts/validate-skill-package.mjs:2057-2121] | Top NOTICE rebrand can accidentally remove Ian marker. | Add Visual IP scope while retaining all current attribution phrases. |
| `SMOKE-*` checks | `examples/prompts.md` route smoke headings, aliases, paths, fields, status/source/brand notes, and mixed-IP wording. [VERIFIED: scripts/validate-skill-package.mjs:2123-2229] | Replacing smoke prompts wholesale with canonical invocation can fail and remove legacy coverage. | Add canonical prompts above; keep legacy smoke inventory intact. |
| `RELEASE-TOM/FERRIS/SEALOS-001` | Release checklist route gates, exact pending approval lines, validator commands, no-logo markers. [VERIFIED: scripts/validate-skill-package.mjs:2230-2292] | Shortening release checklist can break gates. | Add v1.4 section without editing required route-gate lines. |
| `BOUNDARY-*-IMG-001` | Release checklist pending approval parsers and example asset directory names. [VERIFIED: scripts/validate-skill-package.mjs:2381-2419; VERIFIED: scripts/validate-skill-package.test.mjs:1210-1356] | Changing approval line syntax can break parser tests. | Keep existing public asset approval lines byte-compatible unless synchronizing parser/tests. |
| Node test `validator command prints deterministic harness smoke logs` | Expects `Summary: total=78 passed=78 failed=0 skipped=0`. [VERIFIED: scripts/validate-skill-package.test.mjs:199] | Adding/removing validator checks changes totals. | Avoid validator expansion in Phase 23. |
| Node fixture tests for docs drift | Depend on Sealos README/examples/NOTICE/release markers and Ferris exact phrase. [VERIFIED: scripts/validate-skill-package.test.mjs:806-820,980-992,1049-1086] | Rewording checked markers breaks tests. | Preserve checked marker phrases or update fixtures narrowly. |

## Recommended Edit Set For README

1. Change the H1 to `# Visual IP Illustrations`; keep the current Chinese-first tagline but make the first-view product identity Visual IP Illustrations. [VERIFIED: README.md:1-5; CITED: 23-CONTEXT.md]
2. Rework `## 这个仓库是什么` so Visual IP Illustrations is the product and Xiaohei is the default route inside a five-route system. [VERIFIED: README.md:9-23; CITED: 23-CONTEXT.md]
3. Keep the route inventory with the exact Tom/Ferris/Sealos status/source/brand phrases and all route-local reference paths. [VERIFIED: scripts/validate-skill-package.mjs]
4. Update `## 安装` to show canonical public clone/install guidance for `visual-ip-illustrations` and `$visual-ip-illustrations`; add a v1.4 compatibility note for `ian-xiaohei-illustrations/` and `$ian-xiaohei-illustrations`. [VERIFIED: README.md:161-170; CITED: NAMING-CONTRACT.md]
5. Update quick examples to use `$visual-ip-illustrations` for normal user flows; include or link legacy compatibility wording rather than making old invocation the first command users see. [VERIFIED: rg README.md; CITED: 23-CONTEXT.md]
6. Update the installable package boundary section to explain current live directory reality: root docs are public distribution docs; the package directory remains `ian-xiaohei-illustrations/` during v1.4 compatibility while canonical slug/path wording is `visual-ip-illustrations`. [VERIFIED: README.md:390-396; CITED: 22-01-SUMMARY.md]
7. Keep maintainer verification commands unchanged: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `git diff --check`. [VERIFIED: README.md:400-414; VERIFIED: baseline commands]

## Recommended Edit Set For `examples/prompts.md`

1. Add a new top section after the intro named for canonical invocation, with normal examples using `Use $visual-ip-illustrations` for default Xiaohei, explicit Littlebox, and mixed-IP planning/generation. [VERIFIED: examples/prompts.md:1-4; CITED: 23-CONTEXT.md]
2. Keep existing route smoke sections and headings because `SMOKE-DEFAULT-001` through `SMOKE-MIXED-SEALOS-001` depend on them. [VERIFIED: scripts/validate-skill-package.mjs:2123-2229]
3. Label the existing `$ian-xiaohei-illustrations` smoke inventory as v1.4 legacy compatibility smoke coverage instead of deleting it. [CITED: NAMING-CONTRACT.md; CITED: 23-CONTEXT.md]
4. Preserve route-specific marker blocks for Tom (`gated-authorized`, rights path), Ferris (`source-reviewed`, source path, exact public sample phrase), and Sealos (`brand-owned`, source path, `uploaded-image-canonical`, `uploaded-image-locked`, no-logo markers). [VERIFIED: scripts/validate-skill-package.mjs]
5. Preserve mixed-IP examples that require five separate variant groups and route-local references; validator expects `五个 separate variant group`, `分别使用自己的 route-local references`, and Sealos canonical pack/source/output/Brand note markers. [VERIFIED: scripts/validate-skill-package.mjs:2215-2229]
6. Keep all raw and escaped output tokens in examples, including both `assets/<article-slug>-.../` and `assets/&lt;article-slug&gt;-.../` variants. [VERIFIED: scripts/validate-skill-package.mjs:1962]

## Recommended Edit Set For NOTICE And Release Checklist

### NOTICE

1. Add a first paragraph that names `Visual IP Illustrations` as the current v1.4 multi-IP project identity and records the rebrand scope. [CITED: 23-CONTEXT.md]
2. Keep the current Ian attribution markers, including `Ian Xiaohei Illustrations`, `created by Ian`, `小黑`, `Ian's visual language`, and `provide attribution to Ian`. [VERIFIED: scripts/validate-skill-package.mjs:2057-2065]
3. Keep Littlebox MIT/source attribution, inspected commit values, and derived-documentation credit wording unchanged. [VERIFIED: scripts/validate-skill-package.mjs:2067-2077]
4. Keep Tom, Ferris, and Sealos headings and boundary markers unchanged while adding rebrand context around them. [VERIFIED: scripts/validate-skill-package.mjs:2079-2121]

### `RELEASE_CHECKLIST.md`

1. Add a `v1.4 Rebrand Review` block near the top after automated gates; include canonical product name, canonical repository/install slug, canonical invocation, legacy alias compatibility, canonical install/clone guidance, and stale old-name-only public surface scan. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md]
2. Add canonical `$visual-ip-illustrations` smoke guidance to the route smoke section while preserving existing route alias/status/output checks. [VERIFIED: RELEASE_CHECKLIST.md:31-41; CITED: 23-CONTEXT.md]
3. Keep Tom, Ferris, and Sealos public asset policy lines exactly shaped for parsers. [VERIFIED: scripts/validate-skill-package.mjs:2381-2444; VERIFIED: scripts/validate-skill-package.test.mjs]
4. Update public docs/path marker checklist to include Visual IP Illustrations, `visual-ip-illustrations`, `$visual-ip-illustrations`, and `$ian-xiaohei-illustrations` compatibility. [CITED: 23-CONTEXT.md; CITED: NAMING-CONTRACT.md]
5. Add Phase 24 as owner for broad validator naming/stale-surface coverage while retaining Phase 15 and Phase 20 historical route-hardening notes. [CITED: REQUIREMENTS.md; VERIFIED: RELEASE_CHECKLIST.md]

## Validator/Test Synchronization Decision

Phase 23 does not need broad validator or Node test expansion if the implementation adds canonical docs while preserving all current marker strings. [VERIFIED: scripts/validate-skill-package.mjs; CITED: 23-CONTEXT.md]

Direct validator/test synchronization is needed only if implementation intentionally changes a validator-covered deterministic string such as the Ferris D-15 phrase, smoke headings, NOTICE boundary headings, public asset policy parser lines, Sealos public docs markers, or output path token lists. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs]

If synchronization becomes necessary, keep it narrow: update the directly affected `assertIncludes` marker in `scripts/validate-skill-package.mjs`, update the matching fixture/test expectation in `scripts/validate-skill-package.test.mjs`, and preserve total baseline unless adding a new Phase 23-only check is unavoidable. [VERIFIED: scripts/validate-skill-package.mjs; VERIFIED: scripts/validate-skill-package.test.mjs; CITED: 23-CONTEXT.md]

## Standard Stack

### Core

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Markdown | N/A | Public docs, examples, NOTICE, release checklist, GSD research artifact | Repository is documentation-first and uses Markdown as the primary source format. [VERIFIED: AGENTS.md project-doc; VERIFIED: rg --files] |
| Node.js | v24.13.0 | Run dependency-free validator and Node test suite | Existing validator and tests are `.mjs` scripts run with `node`. [VERIFIED: command -v node; VERIFIED: scripts/validate-skill-package.mjs] |
| Node built-in test runner | Node v24.13.0 | Execute `scripts/validate-skill-package.test.mjs` | Current tests run through `node --test`. [VERIFIED: node --test scripts/validate-skill-package.test.mjs] |
| Git | 2.50.1 Apple Git-155 | Diff and whitespace validation | Required verification includes `git diff --check`. [VERIFIED: git --version; CITED: 23-CONTEXT.md] |
| ripgrep | 15.1.0 | Focused string and marker inspection | User requested `rg`; codebase research used focused `rg` reads. [VERIFIED: rg --version; VERIFIED: user task] |

### Supporting

No external package installation is required for Phase 23. [VERIFIED: package manifests absent from AGENTS project-doc; VERIFIED: rg --files]

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Marker-preserving docs edits | Broad validator rewrite in Phase 23 | Phase 24 owns comprehensive naming/stale-surface validation, so broad expansion would cross the phase boundary. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md] |

**Installation:** No package installation. [VERIFIED: AGENTS.md project-doc]

## Package Legitimacy Audit

No external packages are recommended or installed for Phase 23. [VERIFIED: rg --files; VERIFIED: AGENTS.md project-doc]

## Architecture Patterns

### System Architecture Diagram

```text
User reads public docs
  -> README identity/install/examples
  -> examples/prompts.md canonical and legacy smoke prompts
  -> NOTICE attribution/source/brand boundaries
  -> RELEASE_CHECKLIST.md release gates
  -> local validator reads deterministic markers
  -> Node tests verify validator totals, fixtures, parsers, and approval gates
```

### Recommended Project Structure

```text
.
├── README.md
├── examples/prompts.md
├── NOTICE.md
├── RELEASE_CHECKLIST.md
├── scripts/validate-skill-package.mjs
├── scripts/validate-skill-package.test.mjs
└── .planning/phases/23-public-documentation-and-examples-rebrand/23-RESEARCH.md
```

### Pattern 1: Additive Public Rebrand

**What:** Add canonical Visual IP Illustrations identity and invocation at primary user surfaces while retaining legacy alias and current package path references where they describe v1.4 compatibility or repository reality. [CITED: 23-CONTEXT.md]

**When to use:** README, examples, NOTICE, and release checklist need canonical public naming while validator-covered route/source/brand markers stay stable. [VERIFIED: scripts/validate-skill-package.mjs]

**Example:**

```markdown
# Visual IP Illustrations

Visual IP Illustrations 是一个 Codex Skill...

v1.4 compatibility: `$ian-xiaohei-illustrations` remains available for existing prompts and local installs.
```

### Anti-Patterns to Avoid

- **Replacing all `ian-xiaohei-illustrations` strings:** Many occurrences are route-local authority paths, live package paths, validator constants, or legacy alias markers. [VERIFIED: scripts/validate-skill-package.mjs; CITED: 23-CONTEXT.md]
- **Rewriting route smoke fixtures wholesale:** The current validator relies on exact smoke headings, aliases, status markers, and output path tokens. [VERIFIED: scripts/validate-skill-package.mjs]
- **Shortening NOTICE/release boundary language:** Tom, Ferris, and Sealos gates protect source, permission, trademark, uploaded-image, no-logo, and public sample boundaries. [VERIFIED: scripts/validate-skill-package.mjs]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Docs marker safety | Custom ad hoc checklist outside repo tools | `node scripts/validate-skill-package.mjs` | Existing validator already checks docs links, paths, routes, NOTICE, smoke prompts, release gates, and sample boundaries. [VERIFIED: scripts/validate-skill-package.mjs] |
| Test confidence | Manual eyeballing of validator behavior | `node --test scripts/validate-skill-package.test.mjs` | Existing Node suite covers validator totals, parser helpers, fixture failures, and approval parsing. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| Output path migration | New route output directory scheme | Existing route output paths | Phase 21 contract locks output path stability through v1.4. [CITED: NAMING-CONTRACT.md] |

**Key insight:** Phase 23 is about primary public framing, not runtime behavior; reuse current validator and route contracts as guardrails. [CITED: 23-CONTEXT.md]

## Common Pitfalls

### Pitfall 1: Treating Old Slug Occurrences As Stale By Default

**What goes wrong:** A broad search-replace changes route-local authority paths, live package paths, public sample directories, validator constants, or legacy alias examples. [VERIFIED: rg README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md; VERIFIED: scripts/validate-skill-package.mjs]

**How to avoid:** Classify each occurrence as primary public framing, compatibility/migration text, current repository path, route authority path, attribution marker, or validator fixture before editing. [CITED: 23-CONTEXT.md]

### Pitfall 2: Breaking Parser-Shaped Release Lines

**What goes wrong:** Public sample approval parser tests fail when checklist lines change shape. [VERIFIED: scripts/validate-skill-package.test.mjs]

**How to avoid:** Add v1.4 rebrand review lines separately; preserve existing `Public rendered ... approved` and generated sample review records. [VERIFIED: scripts/validate-skill-package.mjs]

### Pitfall 3: Moving Canonical Prompts By Deleting Legacy Smoke

**What goes wrong:** `SMOKE-*` checks lose headings or marker strings and DOC-03 loses compatibility coverage. [VERIFIED: scripts/validate-skill-package.mjs; CITED: 23-CONTEXT.md]

**How to avoid:** Place canonical prompts as a new top-level section and keep legacy smoke prompts visible. [CITED: 23-CONTEXT.md]

## Code Examples

### Baseline Verification

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Expected validator result: `Summary: total=78 passed=78 failed=0 skipped=0`. [VERIFIED: command output]

Expected Node test result: `tests 40`, `pass 40`, `fail 0`. [VERIFIED: command output]

### Focused Marker Audit

```bash
rg -n "Ian Xiaohei Illustrations|\$ian-xiaohei-illustrations|visual-ip-illustrations|\$visual-ip-illustrations|git clone|gated-authorized|source-reviewed|brand-owned|uploaded-image|no-logo" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md
```

This command surfaces primary old-name framing, canonical naming gaps, and route-boundary markers in the four Phase 23 target files. [VERIFIED: rg command run]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `Ian Xiaohei Illustrations` as first-view public product name | `Visual IP Illustrations` as canonical v1.4 public identity | Phase 21 contract, Phase 22 runtime metadata, Phase 23 public docs | Public docs should lead with Visual IP Illustrations while preserving Xiaohei as default route and Ian attribution. [CITED: NAMING-CONTRACT.md; CITED: 22-01-SUMMARY.md; CITED: 23-CONTEXT.md] |
| `$ian-xiaohei-illustrations` as only visible invocation | `$visual-ip-illustrations` canonical invocation plus `$ian-xiaohei-illustrations` legacy compatibility alias | Phase 22 runtime metadata; Phase 23 docs/examples | Examples and release docs should show canonical invocation and keep legacy smoke coverage. [CITED: 22-01-SUMMARY.md; CITED: 23-CONTEXT.md] |
| Public docs centered on route additions by phase | Public docs centered on a five-route Visual IP product | Phase 23 | README/examples should explain selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routes together. [CITED: 23-CONTEXT.md] |

**Deprecated/outdated primary framing:**
- README H1 and opening product sentence using `Ian Xiaohei Illustrations` as the primary product name. [VERIFIED: README.md:1,11; CITED: 23-CONTEXT.md]
- README canonical install/invocation guidance using only the old slug and old skill id. [VERIFIED: README.md:164-170; CITED: 23-CONTEXT.md]
- Normal user examples using only `$ian-xiaohei-illustrations` without canonical `$visual-ip-illustrations` examples. [VERIFIED: examples/prompts.md; CITED: 23-CONTEXT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The GitHub canonical clone URL should be `https://github.com/helloianneo/visual-ip-illustrations.git` once public docs lead with the canonical slug. [ASSUMED] | Exact Strings To Change Or Add, README edit set | GitHub repo rename/distribution work is deferred; docs may need wording that frames this as canonical public guidance rather than confirmed live remote. |

## Open Questions

1. **Canonical clone URL runtime availability**
   - What we know: Phase 21/23 lock `visual-ip-illustrations` as canonical repository/install slug. [CITED: NAMING-CONTRACT.md; CITED: 23-CONTEXT.md]
   - What's unclear: The current Git remote availability for `helloianneo/visual-ip-illustrations` was not verified because Phase 23 is a local docs research task and future repository rename is deferred. [ASSUMED]
   - Recommendation: Phrase README install guidance as canonical v1.4 guidance while preserving a compatibility note for the current `ian-xiaohei-illustrations/` package path; avoid claiming GitHub redirect behavior. [CITED: 23-CONTEXT.md]

2. **Validator synchronization threshold**
   - What we know: Broad validator naming checks are Phase 24, while Phase 23 may synchronize directly affected docs expectations. [CITED: 23-CONTEXT.md]
   - What's unclear: Implementation may choose wording that touches validator-covered marker strings.
   - Recommendation: Planner should include a post-edit validator run before deciding whether script/test synchronization is needed. [VERIFIED: scripts/validate-skill-package.mjs]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node tests | Yes | v24.13.0 | None required. [VERIFIED: command -v node] |
| Git | Diff and whitespace checks | Yes | 2.50.1 Apple Git-155 | None required. [VERIFIED: git --version] |
| ripgrep | Focused research and implementation audits | Yes | 15.1.0 | `grep` if missing. [VERIFIED: rg --version] |

**Missing dependencies with no fallback:** None. [VERIFIED: environment audit]

**Missing dependencies with fallback:** None. [VERIFIED: environment audit]

## Validation Architecture

Skipped because `.planning/config.json` sets `workflow.nyquist_validation` to `false`. [VERIFIED: .planning/config.json]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | No | Phase 23 changes static docs only. [VERIFIED: AGENTS.md project-doc] |
| V3 Session Management | No | No app/session runtime is present. [VERIFIED: AGENTS.md project-doc] |
| V4 Access Control | No | No access-control code changes are in scope. [VERIFIED: user task; VERIFIED: AGENTS.md project-doc] |
| V5 Input Validation | Yes | Use existing validator and Node tests for deterministic docs markers. [VERIFIED: scripts/validate-skill-package.mjs] |
| V6 Cryptography | No | No cryptography code or secret handling is in scope. [VERIFIED: AGENTS.md project-doc] |

### Known Threat Patterns for Documentation Rebrand

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Misleading install/clone guidance during rename transition | Spoofing / Repudiation | Document canonical slug and legacy compatibility boundary clearly; avoid claims about remote redirects. [CITED: NAMING-CONTRACT.md; ASSUMED] |
| Rights/source boundary erosion for protected/brand routes | Tampering | Preserve NOTICE, source, rights, public sample, and no-logo validator markers. [VERIFIED: scripts/validate-skill-package.mjs] |

## Phase 24 Out-of-Scope Items

- Full validator hardening for canonical naming across public docs and stale old-name-only scans. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md]
- Node test expansion for canonical invocation, legacy invocation, route stability, output path stability, install guidance, and stale fixtures. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md]
- Final release evidence, UAT, release-readiness report, and compatibility smoke evidence. [CITED: 23-CONTEXT.md; CITED: REQUIREMENTS.md]
- Full GitHub repository rename, remote URL migration, redirect behavior, and release distribution choreography. [CITED: 23-CONTEXT.md]
- v2 selected-IP installer, visual-IP manifest, asset manifest, visual regression checks, and English localization. [CITED: 23-CONTEXT.md]

## Sources

### Primary (HIGH confidence)

- `.planning/phases/23-public-documentation-and-examples-rebrand/23-CONTEXT.md` - Locked Phase 23 decisions, boundaries, requirements, and deferred scope. [CITED]
- `.planning/phases/23-public-documentation-and-examples-rebrand/23-DISCUSSION-LOG.md` - Audit trail read per user request; not used as planning authority. [CITED]
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` - Canonical naming values, legacy alias policy, route/output stability, and downstream ownership. [CITED]
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-01-SUMMARY.md` - Phase 22 runtime metadata outcome and unchanged public docs scope. [CITED]
- `scripts/validate-skill-package.mjs` - Exact validator checks for docs links, path tokens, route markers, NOTICE, smoke prompts, release gates, and public asset boundaries. [VERIFIED: rg/nl]
- `scripts/validate-skill-package.test.mjs` - Exact Node test totals, fixture expectations, parser behavior, and approval parsing. [VERIFIED: rg/nl]
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md` - Phase 23 target surface audit. [VERIFIED: rg/nl]
- `.planning/config.json` - `nyquist_validation=false`, `security_enforcement=true`. [VERIFIED: file read]

### Secondary (MEDIUM confidence)

- Memory summary and `MEMORY.md` entries for prior phase baseline and validator/test command pattern. Used only to speed lookup; current repo commands verified live. [VERIFIED: rg MEMORY.md; VERIFIED: command output]

### Tertiary (LOW confidence)

- GitHub remote availability for `helloianneo/visual-ip-illustrations` was not verified; docs should avoid redirect/runtime claims. [ASSUMED]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - the repo has local scripts and no package manifests; Node/Git/rg versions were probed. [VERIFIED]
- Architecture: HIGH - Phase 23 is bounded to four public docs and optional direct validator synchronization. [CITED: 23-CONTEXT.md]
- Pitfalls: HIGH - validator/test dependencies were read directly and baseline commands passed. [VERIFIED]

**Research date:** 2026-06-14
**Valid until:** 2026-07-14 for local repo structure; re-check immediately after Phase 24 validator changes or repository rename work. [ASSUMED]
