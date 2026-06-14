# Phase 26: Skill and Reference Content Migration - Context

**Gathered:** 2026-06-14T16:32:00Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 26 migrates runtime-facing skill content to English-default prose: `SKILL.md`, `references/routing.md`, shared references, route-local IP packs, and `agents/openai.yaml`.

Phase 26 does not migrate README, public examples, NOTICE, release checklist, final hard-fail language enforcement, or release evidence. Phase 27 owns public documentation and examples. Phase 28 owns final validator hardening, stale-language enforcement, and release evidence.

</domain>

<decisions>
## Implementation Decisions

### Language Authority
- **D-01:** `LANGUAGE_POLICY.md` is the language authority for Phase 26.
- **D-02:** Translate surrounding runtime prose to English-default while preserving approved multilingual tokens from the policy.
- **D-03:** Keep the residual Chinese scan in production report mode during Phase 26. Enforce mode remains available for controlled fixtures and final Phase 28 gates.

### Invocation and Route Stability
- **D-04:** Preserve canonical `$visual-ip-illustrations` and legacy `$ian-xiaohei-illustrations` everywhere they define runtime compatibility.
- **D-05:** Preserve exact route ids: `xiaohei`, `littlebox`, `tom`, `ferris`, `sealos`.
- **D-06:** Preserve Chinese aliases exactly: `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, `Sealos 海豹`.
- **D-07:** Preserve output suffixes and paths: `illustrations`, `littlebox`, `tom`, `ferris`, `sealos`; `assets/<article-slug>-.../` path contracts stay stable.
- **D-08:** Preserve Xiaohei as the omitted-IP default while Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.

### Prompt and Visible-Label Behavior
- **D-09:** Preserve Chinese Xiaohei prompt placeholders exactly, including `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, and `{标注词1}`.
- **D-10:** Preserve user-language visible-label behavior. Planning and delivery can follow the user's language; image prompts stay English where route-local templates require that behavior.

### Route-Local Authority
- **D-11:** Migrate each route-local pack in place. Keep source, rights, brand, prompt, QA, output path, and route-status rules inside that route's directory.
- **D-12:** Xiaohei canonical files under `references/ips/xiaohei/` become the English-default route authority; root Xiaohei files remain legacy compatibility entry points.
- **D-13:** Preserve Tom authority in `references/ips/tom/rights.md`, Ferris authority in `references/ips/ferris/source.md`, and Sealos Seal authority in `references/ips/sealos/source.md`.
- **D-14:** Keep Sealos Seal's logo-free route contract: plain navy cap, plain deep-blue hoodie chest, no logo marks, no emblem, and no text badge.

### Isolation and Validation
- **D-15:** Route-leakage prevention is a Phase 26 content requirement. Each route's prompts, QA, edit repairs, authority notes, and delivery notes must keep other route identities outside that route.
- **D-16:** Validator and Node tests stay dependency-free and green in normal production mode during Phase 26.
- **D-17:** `openai.yaml` must use English-default discovery copy while preserving Xiaohei as omitted-IP default and Littlebox, Tom, Ferris, and Sealos Seal as explicit routes.

### the agent's Discretion
- The implementation can choose whether to translate route packs in one plan or in tightly staged task groups inside one plan, as long as each route remains independently reviewable.
- The implementation can add small validator or test adjustments for stability evidence, but broad final language enforcement belongs to Phase 28.
- The implementation should favor minimal prose rewrites that preserve existing route semantics over editorial redesign.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Authority
- `.planning/ROADMAP.md` - Phase 26 goal, dependencies, requirements, and success criteria.
- `.planning/REQUIREMENTS.md` - SKILL-01 through SKILL-04.
- `.planning/PROJECT.md` - v1.5 English-default milestone scope and compatibility constraints.
- `.planning/STATE.md` - prior route, rebrand, Sealos logo-free, and Phase 25 language-policy decisions.

### Language Authority
- `LANGUAGE_POLICY.md` - English-default policy, approved multilingual exceptions, residual scan contract, and migration handoff.
- `.planning/phases/25-language-policy-and-residual-scan-contract/25-CONTEXT.md` - upstream policy decisions.
- `.planning/phases/25-language-policy-and-residual-scan-contract/25-RESEARCH.md` - Phase 25 validator and scan research.
- `.planning/phases/25-language-policy-and-residual-scan-contract/25-VERIFICATION.md` - Phase 25 verification baseline.
- `.planning/phases/25-language-policy-and-residual-scan-contract/25-UAT.md` - Phase 25 UAT baseline.

### Runtime and Route Authority
- `ian-xiaohei-illustrations/SKILL.md` - current runtime controller and direct SKILL-01 target.
- `ian-xiaohei-illustrations/references/routing.md` - route table, aliases, defaults, required references, statuses, and output suffixes.
- `ian-xiaohei-illustrations/agents/openai.yaml` - agent discovery copy and SKILL-04 target.
- `ian-xiaohei-illustrations/references/ips/xiaohei/` - canonical Xiaohei pack.
- `ian-xiaohei-illustrations/references/ips/littlebox/` - canonical Littlebox pack.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Tom rights authority.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Ferris source and trademark authority.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` - Sealos Seal brand and no-logo identity authority.
- `ian-xiaohei-illustrations/references/style-dna.md`
- `ian-xiaohei-illustrations/references/xiaohei-ip.md`
- `ian-xiaohei-illustrations/references/composition-patterns.md`
- `ian-xiaohei-illustrations/references/prompt-template.md`
- `ian-xiaohei-illustrations/references/qa-checklist.md`

### Validation Authority
- `scripts/validate-skill-package.mjs` - dependency-free validator, route parsing, language allowlist, and residual scan.
- `scripts/validate-skill-package.test.mjs` - stable check ordering and fixture coverage.

</canonical_refs>

<code_context>
## Existing Code Insights

### Current Baseline
- Phase 25 verification recorded validator output `Summary: total=93 passed=93 failed=0 skipped=0`.
- Phase 25 verification recorded Node output `tests 56`, `pass 56`.
- `LANGUAGE_ALLOWLIST` already mirrors exact multilingual compatibility tokens.
- `languageScanTargets()` derives route-local reference targets from routing metadata, so Phase 26 migration should preserve `required_references` entries and path strings.

### Direct Migration Targets
- `SKILL.md`, `routing.md`, and `openai.yaml` currently contain mixed Chinese and English runtime prose.
- `references/ips/` contains 33 route-local Markdown files across Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- `references/` contains 40 Markdown or YAML reference files overall, including root Xiaohei compatibility files.
- Xiaohei carries the highest compatibility-sensitive Chinese surface because prompt placeholders and root compatibility files are validated by existing legacy checks.
- Littlebox, Tom, Ferris, and Sealos Seal packs already contain substantial English content, so their migration risk is concentrated around residual Chinese headings, delivery wording, and route-leakage boundaries.

### Reusable Assets
- The validator's route parser can be used as a route-stability smoke check after prose migration.
- `LANG-SCAN-*` checks can report residual Chinese findings without blocking production validation while migration is in progress.
- Existing Node tests already cover route ids, output suffixes, canonical invocation, legacy invocation, and selected route references.

### Integration Risks
- Editing `references/routing.md` can affect validator-derived route metadata and language scan target selection.
- Editing Xiaohei root compatibility files can affect legacy equality and compatibility expectations; root files should either remain aligned with canonical Xiaohei files or be updated with validator expectations.
- Route-local prompts must avoid importing another IP's identity, source authority, or repair gates.
- Sealos references must preserve the latest logo-free rule from prior quick fixes.

</code_context>

<specifics>
## Specific Ideas

- Plan one surgical migration plan with route-stability checkpoints after each surface group.
- Translate the controller first (`SKILL.md`, `routing.md`, `openai.yaml`), then migrate shared/root references, then route-local packs.
- Keep route tables, aliases, path tokens, status strings, and output path snippets mechanically stable while translating prose around them.
- Use `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs`, and `git diff --check` as the core evidence set, expecting enforce mode to be scoped or interpreted according to Phase 26 report-mode policy if stale public-doc prose remains for Phase 27.

</specifics>

<deferred>
## Deferred Ideas

- README, examples, NOTICE, and release checklist migration.
- Full hard-fail stale Chinese prose gate.
- Machine-readable visual IP manifest.
- Asset manifest and visual regression checks.
- Additional visual IP routes.
- Hosted app, UI, API, database, or build runtime.
- External legal or trademark research beyond current route records.

</deferred>

---

*Phase: 26-Skill and Reference Content Migration*
*Context gathered: 2026-06-14T16:32:00Z*
