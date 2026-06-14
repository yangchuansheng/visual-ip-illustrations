# Phase 23: Public Documentation and Examples Rebrand - Context

**Gathered:** 2026-06-14T16:57:29+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 23 delivers the public documentation and examples rebrand for Visual IP Illustrations. Users and maintainers should be able to install, invoke, inspect, and release the skill through README, prompt examples, NOTICE, and release guidance that lead with `Visual IP Illustrations`, canonical slug `visual-ip-illustrations`, and canonical invocation `$visual-ip-illustrations`.

This phase covers DOC-01 through DOC-04. It may update README, `examples/prompts.md`, NOTICE, release checklist copy, and directly affected docs-check expectations when the public docs changes require synchronization. Phase 23 preserves existing route behavior, output paths, route-local reference packs, skill runtime behavior, and attribution/source/brand boundaries. Broad validator and Node test expansion for naming, stale old-name-only scans, and final release evidence belongs to Phase 24.

Runtime metadata from Phase 22 stays stable: `ian-xiaohei-illustrations/SKILL.md` keeps `name: visual-ip-illustrations`, `ian-xiaohei-illustrations/agents/openai.yaml` keeps Visual IP Illustrations discovery copy, and the live package directory remains `ian-xiaohei-illustrations/` with v1.4 migration wording. Phase 23 updates public docs and examples around that stable baseline.

</domain>

<decisions>
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

</decisions>

<research_questions>
## Research Questions for Plan Phase

- Check which README sections are validator-covered today before planning copy movement, especially install commands, route docs, output path tokens, and maintained command examples.
- Check whether `examples/prompts.md` can add canonical prompts as a top section while preserving existing smoke fixture strings used by `scripts/validate-skill-package.mjs`.
- Check which NOTICE and `RELEASE_CHECKLIST.md` strings are deterministic validator markers so attribution and release wording changes keep route boundaries intact.
- Check whether current public docs contain old-name-only primary framing outside the four Phase 23 target files; if found, record as Phase 24 validation scope unless it is directly inside README, `examples/prompts.md`, NOTICE, or `RELEASE_CHECKLIST.md`.

</research_questions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 23 goal, dependency on Phase 22, DOC-01 through DOC-04, success criteria, and Phase 24 ownership.
- `.planning/REQUIREMENTS.md` — Defines DOC-01 through DOC-04, VAL-01 through VAL-04, v1.4 out-of-scope items, and traceability.
- `.planning/STATE.md` — Records current focus as Phase 23 and carries accumulated route/rebrand decisions.
- `.planning/PROJECT.md` — Defines Visual IP Illustrations, the v1.4 rebrand scope, Chinese-first documentation constraint, route compatibility requirement, and legacy alias policy.
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` — Single source of truth for `Visual IP Illustrations`, `visual-ip-illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, route stability, output path stability, package path boundary, and Phase 23 ownership.
- `.planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md` — Locks Phase 21 canonical naming, legacy alias, route/output stability, and public docs ownership boundaries.
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-CONTEXT.md` — Locks Phase 22 runtime metadata decisions and defers public docs breadth to Phase 23.
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-01-SUMMARY.md` — Confirms `SKILL.md` frontmatter now uses `visual-ip-illustrations`, agent metadata leads with Visual IP Illustrations, validator/test totals stayed 78/40, and public docs remained untouched in Phase 22.
- `.planning/phases/22-skill-package-and-runtime-metadata-rebrand/22-VERIFICATION.md` — Verifies runtime identity, canonical and legacy invocation markers, route stability, migration guidance, and validator/Node baseline after Phase 22.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` — Defines Markdown style, fenced command/prompt conventions, repository-relative path conventions, and documentation-first conventions.
- `.planning/codebase/STRUCTURE.md` — Defines README, examples, NOTICE, release checklist, installable package directory, route reference placement, and where public usage examples belong.

### Public Documentation Edit Targets

- `README.md` — Primary public entrypoint. Current evidence: line 1 still says `# Ian Xiaohei Illustrations`; line 11 introduces old-name product framing; lines 164-170 use old clone/invocation guidance; lines 390-400 describe the legacy installable directory and maintainer checks.
- `examples/prompts.md` — Prompt inventory and route smoke fixture surface. Current evidence: canonical route smoke sections exist, but prompts currently use `$ian-xiaohei-illustrations` across normal flows and smoke prompts.
- `NOTICE.md` — Attribution and source/brand boundary surface. Current evidence: lines 3-7 use Ian Xiaohei naming and attribution; lines 9-58 preserve Littlebox, Tom, Ferris, and Sealos Seal boundary sections.
- `RELEASE_CHECKLIST.md` — Release review surface. Current evidence: route smoke prompts still use `$ian-xiaohei-illustrations`; installable package boundary still names `ian-xiaohei-illustrations/`; public docs/path markers preserve all five route contracts.

### Runtime and Route Stability References

- `ian-xiaohei-illustrations/SKILL.md` — Runtime authority after Phase 22. Current evidence: frontmatter `name: visual-ip-illustrations`, canonical invocation `$visual-ip-illustrations`, v1.4 compatibility alias `$ian-xiaohei-illustrations`, canonical slug/path `visual-ip-illustrations`, and legacy slug/path `ian-xiaohei-illustrations`.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Agent metadata now leads with Visual IP Illustrations and canonical invocation while documenting the legacy alias.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata authority for ids, aliases, defaults, output suffixes, required references, attribution context, statuses, output paths, and delivery fields.

### Validator and Test Surfaces

- `scripts/validate-skill-package.mjs` — Current validator has docs checks for README/examples links, output path tokens, route docs, Tom/Ferris/Sealos markers, NOTICE attribution markers, smoke prompt markers, and release checklist markers. Phase 23 may synchronize directly affected docs expectations.
- `scripts/validate-skill-package.test.mjs` — Current Node tests assert validator order, docs failure fixtures, parser behavior, public sample approval parsing, route leakage, and current frontmatter expectation. Broad new naming/stale-surface coverage belongs to Phase 24.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `README.md`: Public overview, route inventory, install commands, quick examples, workflow, directory tree, maintainer validation commands, related projects, and author attribution.
- `examples/prompts.md`: Copyable prompt examples, route smoke fixtures, maintainer validation smoke prompts, route-local reference markers, raw/escaped output path tokens, and mixed-IP route group examples.
- `NOTICE.md`: Existing attribution sections for Ian Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- `RELEASE_CHECKLIST.md`: Release smoke prompts, attribution review, Tom/Ferris/Sealos public sample gates, installable package boundary, and public docs/path marker checklist.
- `ian-xiaohei-illustrations/SKILL.md`: Canonical runtime identity and local migration wording that public docs should align with.
- `ian-xiaohei-illustrations/agents/openai.yaml`: Canonical agent discovery wording that public examples should align with.
- `ian-xiaohei-illustrations/references/routing.md`: Route/source/output path values that public docs must preserve.
- `scripts/validate-skill-package.mjs`: Existing dependency-free docs validator. Useful for identifying directly affected docs-check strings.
- `scripts/validate-skill-package.test.mjs`: Existing Node test suite. Useful when validator check wording must be synchronized.

### Established Patterns

- Public docs are Chinese-first with English technical markers where stable route/status/source strings matter.
- Prompt examples use fenced `text` blocks and preserve deterministic strings as route smoke fixtures.
- Release and NOTICE surfaces use explicit route status and authority paths rather than broad availability claims.
- Validators rely on exact deterministic text markers, so rebrand copy should keep key route/source/brand phrases stable or update expectations narrowly.
- Xiaohei remains the omitted-IP default; Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.
- The live package directory and many source paths currently remain under `ian-xiaohei-illustrations/`; this path can be compatibility/current-structure text even while public identity and install guidance lead with `visual-ip-illustrations`.

### Integration Points

- Update README first-view identity, install section, quick examples, directory/package boundary, and maintainer/release references.
- Update `examples/prompts.md` introduction and normal prompt examples to use `$visual-ip-illustrations`, while retaining `$ian-xiaohei-illustrations` legacy compatibility smoke prompts.
- Update NOTICE top identity/rebrand scope while preserving all existing attribution/source/brand boundary sections.
- Update `RELEASE_CHECKLIST.md` route smoke prompts, installable package boundary, public docs/path marker review, and v1.4 rebrand gates.
- Update `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` only if Phase 23 docs edits break current docs checks.

</code_context>

<specifics>
## Specific Ideas

- README title should become `# Visual IP Illustrations`.
- README can mention the project was formerly Xiaohei-centered and that `Ian Xiaohei Illustrations` remains an attribution/legacy compatibility phrase during v1.4.
- Install docs should show canonical `git clone https://github.com/helloianneo/visual-ip-illustrations.git` guidance, while acknowledging the current repository/local package may still expose `ian-xiaohei-illustrations/` during migration.
- Quick examples should lead with `Use $visual-ip-illustrations`.
- `examples/prompts.md` should include a small canonical invocation section near the top, plus a clearly labeled legacy compatibility smoke section for `$ian-xiaohei-illustrations`.
- Release checklist should include a v1.4 rebrand review block before route-specific gates.
- Retain exact route marker strings for `gated-authorized`, `source-reviewed`, `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, `no-logo mascot identity`, and all route-local authority paths.

</specifics>

<deferred>
## Deferred Ideas

- Full validator hardening for canonical naming across all public docs and stale old-name-only scans belongs to Phase 24.
- Node test expansion for canonical invocation, legacy invocation, route stability, output path stability, and stale fixtures belongs to Phase 24.
- Final release evidence, UAT, and release-readiness report belong to Phase 24.
- Full GitHub repository rename, remote URL migration, redirect behavior, and release-distribution choreography remain future distribution work after v1.4 docs and compatibility evidence are stable.
- v2 selected-IP installer, visual-IP manifest, asset manifest, visual regression checks, and English localization remain v2 requirements.

</deferred>

---

*Phase: 23-Public Documentation and Examples Rebrand*
*Context gathered: 2026-06-14T16:57:29+08:00*
