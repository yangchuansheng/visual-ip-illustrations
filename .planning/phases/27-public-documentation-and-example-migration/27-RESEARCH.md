# Phase 27: Public Documentation and Example Migration - Research

**Researched:** 2026-06-15
**Domain:** English-default public documentation migration for a Codex Skill package
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
### Scope Ownership
- **D-01:** Phase 27 owns public documentation prose migration for `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.
- **D-02:** Phase 27 may update `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` only where existing public-doc marker expectations must follow renamed English headings or rewritten public prose.
- **D-03:** Final language-enforcement policy, final release evidence, and release-readiness UAT remain Phase 28 scope.

### Multilingual Exceptions
- **D-04:** Preserve the approved multilingual exception categories from `LANGUAGE_POLICY.md`: Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- **D-05:** Translate surrounding prose in public docs to English while preserving exact intentional tokens such as `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, `Sealos 海豹`, and intentional visible-label examples.

### Compatibility Surfaces
- **D-06:** Preserve canonical invocation `$visual-ip-illustrations`, legacy compatibility alias `$ian-xiaohei-illustrations`, installable package directory `ian-xiaohei-illustrations/`, canonical checkout slug `visual-ip-illustrations`, and the current remote clone guidance.
- **D-07:** Preserve route ids, route statuses, default flags, route aliases, source/rights/brand authority paths, route-local reference directories, raw output paths, and escaped output path markers for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- **D-08:** Keep Chinese article workflows valid in examples. English-default docs may include Chinese sample article requests when those lines are compatibility smoke fixtures or user-language examples.

### Public Documentation Shape
- **D-09:** Use one Phase 27 implementation plan with task groups for README, examples, NOTICE plus release checklist, targeted validator/test marker updates, and verification.
- **D-10:** README example image captions and alt text should use English-default captions. Original Chinese sample titles may remain only when treated as intentional sample labels.
- **D-11:** `examples/prompts.md` should provide English-default copyable prompts while retaining legacy smoke coverage and intentional Chinese request lines that prove Chinese article illustration behavior.

### Release Checklist Stability
- **D-12:** Preserve parser-compatible approval record formats and slash-delimited field order for Tom public samples, Ferris public/generated samples, and Sealos public/generated samples.
- **D-13:** Translate release checklist headings and instructions to English-default prose while preserving status markers such as `PENDING / reviewer / date`, route statuses, approval fields, and command snippets.

### the agent's Discretion
The implementation may choose exact English prose, heading names, and section ordering when the route contract and validator-visible compatibility markers remain stable. Prefer concise public docs over broad rewrites.

### Deferred Ideas (OUT OF SCOPE)
Phase 28 owns final hard-fail stale-language enforcement, final evidence recording, and release-readiness UAT.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DOC-01 | User can read README installation, route selection, workflow, validation, related project, and author sections in English-default prose. | Rewrite `README.md` around English headings, English captions/alt text, route table prose, install commands, validation commands, related projects, and author section while preserving canonical/legacy invocations and output paths. [VERIFIED: .planning/REQUIREMENTS.md; README.md] |
| DOC-02 | User can copy English-default examples from `examples/prompts.md` for planning, generation, mixed-IP comparisons, legacy smoke tests, and route-specific prompts. | Convert surrounding prompt guidance, headings, and copyable prompts to English-default prose while keeping intentional Chinese request fixtures, aliases, labels, and output path tokens. [VERIFIED: .planning/REQUIREMENTS.md; examples/prompts.md; LANGUAGE_POLICY.md] |
| DOC-03 | Maintainer can read NOTICE and RELEASE_CHECKLIST in English-default prose while Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries stay intact. | `NOTICE.md` is mostly English but keeps the allowed `小黑` attribution token; `RELEASE_CHECKLIST.md` needs its intro and parser-insensitive instructions translated while slash-delimited approval records stay byte-shape compatible. [VERIFIED: NOTICE.md; RELEASE_CHECKLIST.md; scripts/validate-skill-package.mjs] |
| DOC-04 | Public docs continue to preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, install path guidance, route status markers, and output path contracts. | Validator checks already protect canonical/legacy identity, install migration commands, raw/escaped output paths, route statuses, authority paths, and public sample gates; Phase 27 should update only public-doc markers that become English. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |
</phase_requirements>

## Summary

Phase 27 should be implemented as a public documentation rewrite plus targeted validator/test synchronization, not as a runtime migration. The phase-owned files are `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and public-doc marker assertions in `scripts/validate-skill-package.mjs` / `scripts/validate-skill-package.test.mjs`. [VERIFIED: 27-CONTEXT.md; .planning/ROADMAP.md]

Current validation evidence shows normal validation passes, while enforce-mode language scan fails only on stale public-document prose: `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` reports `total=93 passed=92 failed=1`, with `LANG-SCAN-001` showing `approved=225 stale=403` and sample stale hits at `README.md:3`, `README.md:5`, and `README.md:9`. [VERIFIED: command output]

**Primary recommendation:** Rewrite public docs in English-default prose, preserve route and approval-record tokens exactly, update validator/test marker strings for renamed English headings/prompts in the same change set, then prove the phase with validator, Node tests, `git diff --check`, enforce-mode residual scan, and targeted Han scan over Phase 27-owned public docs. [VERIFIED: scripts/validate-skill-package.mjs; 27-CONTEXT.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Public learning and install docs | Documentation / Repository | Codex Skill runtime docs | `README.md` teaches install, route selection, workflow, examples, validation, related projects, and author surfaces; it must preserve runtime contract tokens without changing runtime files. [VERIFIED: README.md; 27-CONTEXT.md] |
| Copyable prompt examples | Documentation / Repository | Codex Skill runtime behavior | `examples/prompts.md` is a human-facing prompt inventory and compatibility smoke surface; it influences user invocation while leaving runtime route logic in `SKILL.md` and `routing.md`. [VERIFIED: examples/prompts.md; scripts/validate-skill-package.mjs] |
| Attribution and source boundaries | Documentation / Legal notice | Route-local authority files | `NOTICE.md` records Ian, Littlebox, Tom, Ferris, and Sealos source/brand boundaries while route-local authority remains in `rights.md` and `source.md`. [VERIFIED: NOTICE.md; LANGUAGE_POLICY.md] |
| Release gates and approval parsing | Maintainer documentation | Validator parser | `RELEASE_CHECKLIST.md` carries human release steps plus parser-sensitive approval lines consumed by validator functions. [VERIFIED: RELEASE_CHECKLIST.md; scripts/validate-skill-package.mjs] |
| Public-doc validation markers | Validator script/tests | Documentation / Repository | The validator owns exact marker assertions and public asset gate parsers; tests assert failure when those markers drift. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |

## Requirement-to-File Matrix

| Requirement | README.md | examples/prompts.md | NOTICE.md | RELEASE_CHECKLIST.md | Validator/Test Sync |
|-------------|-----------|---------------------|-----------|----------------------|---------------------|
| DOC-01 | Primary: convert all install, route, workflow, validation, related project, caption/alt, and author prose to English-default. Preserve command snippets and route tokens. [VERIFIED: README.md] | Link from README remains valid. [VERIFIED: scripts/validate-skill-package.mjs] | No primary work. | Validation command references remain aligned. | `DOC-LINKS-001`, `DOC-PATHS-001`, `DOC-ROUTES-001`, `REBRAND-*` must still pass. [VERIFIED: scripts/validate-skill-package.mjs] |
| DOC-02 | Quick examples section can point to prompt inventory. [VERIFIED: README.md] | Primary: convert headings and copyable prompt prose to English-default; preserve Chinese sample requests only as compatibility fixtures/user-language examples. [VERIFIED: examples/prompts.md; LANGUAGE_POLICY.md] | No primary work. | Route smoke prompt inventory references remain aligned. | `SMOKE-*` checks currently assert Chinese headings and must be updated to English headings/phrases when prompts are migrated. [VERIFIED: scripts/validate-skill-package.mjs] |
| DOC-03 | Public source/brand summary should stay consistent with NOTICE. [VERIFIED: README.md; NOTICE.md] | Public sample gate wording should point to release checklist. [VERIFIED: examples/prompts.md] | Primary: keep English attribution boundaries and approved `小黑` token; tighten any residual wording if needed. [VERIFIED: NOTICE.md] | Primary: translate intro/instructions, preserve approval lines and gate headings consumed by parser. [VERIFIED: RELEASE_CHECKLIST.md; scripts/validate-skill-package.mjs] | `NOTICE-*`, `RELEASE-*`, `BOUNDARY-*-IMG`, `BOUNDARY-*-GEN` must still pass. [VERIFIED: scripts/validate-skill-package.mjs] |
| DOC-04 | Preserve `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, clone command, `visual-ip-illustrations`, `ian-xiaohei-illustrations/`, statuses, authority paths, raw/escaped output paths. [VERIFIED: README.md; scripts/validate-skill-package.mjs] | Same public compatibility tokens plus legacy smoke fixture coverage. [VERIFIED: examples/prompts.md] | Preserve rebrand scope and aliases. [VERIFIED: NOTICE.md] | Preserve rebrand review and route smoke markers. [VERIFIED: RELEASE_CHECKLIST.md] | `REBRAND-CANON-*`, `REBRAND-COMPAT-*`, `REBRAND-MIGRATE-001`, `REBRAND-PATH-001`, and route-specific `DOC-*` checks protect this. [VERIFIED: scripts/validate-skill-package.mjs] |

## File-by-File Recommendations

### `README.md`

Use English headings for: project identity, what this repository is, who it is for, outputs, visual IP routes, example gallery, installation, quick examples, workflow, repository structure, maintainer validation, related projects, and author. [VERIFIED: README.md]

Keep the first viewport explicit: `# Visual IP Illustrations`, canonical invocation `$visual-ip-illustrations`, compatibility alias `$ian-xiaohei-illustrations`, checkout slug `visual-ip-illustrations`, installable directory `ian-xiaohei-illustrations/`, and the current clone command. These are validator-visible markers. [VERIFIED: scripts/validate-skill-package.mjs]

Translate image captions and alt text to English-default names such as "Two Breakpoints", "Sort by Purpose", "One Fish, Many Uses", "Handoff Path", "Information Well", "Idea Press", "Content Fermentation", and "Trust Bridge". Keep original Chinese sample titles only when intentionally labeled as sample labels. [VERIFIED: README.md; 27-CONTEXT.md]

Route sections should remain concise and contract-heavy: Xiaohei default, Littlebox explicit active route, Tom `gated-authorized`, Ferris `source-reviewed`, Sealos Seal `brand-owned`, authority paths, route aliases, raw and escaped output paths, and public sample release gate language. [VERIFIED: README.md; scripts/validate-skill-package.mjs]

### `examples/prompts.md`

Keep `## Canonical normal-flow prompts` unless the validator and tests are updated in the same patch; this heading is asserted by `REBRAND-CANON-002` and `REBRAND-DOCS-001`. [VERIFIED: scripts/validate-skill-package.mjs]

Rewrite canonical planning/generation prompts in English-default copy while preserving user-language visible labels as an explicit behavior: prompts may ask for "short Chinese visible labels" when modeling Chinese article illustration output. The current language policy permits Chinese article examples, route aliases, and user-language visible labels. [VERIFIED: LANGUAGE_POLICY.md; examples/prompts.md]

Retain legacy smoke prompts using `$ian-xiaohei-illustrations`; these are both compatibility fixtures and validator-visible route smoke coverage. Surrounding prose and headings should become English, for example `## Route Smoke: Omitted Visual IP`, `## Route Smoke: Explicit Xiaohei`, `## Route Smoke: Explicit Littlebox`, `## Route Smoke: Explicit Tom`, `## Route Smoke: Explicit Ferris`, `## Route Smoke: Explicit Sealos Seal`, and `## Route Notes: Mixed-IP Requests`. Update `SMOKE-*` marker assertions to those exact English headings. [VERIFIED: examples/prompts.md; scripts/validate-skill-package.mjs]

Keep exact route aliases in prompt examples: `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, and `Sealos 海豹`. These are approved multilingual exceptions and route compatibility surfaces. [VERIFIED: LANGUAGE_POLICY.md; scripts/validate-skill-package.mjs]

### `NOTICE.md`

`NOTICE.md` is already mostly English-default. Preserve `小黑` in the Ian attribution because the language policy allows exact attribution/source names and route aliases; the validator explicitly checks for `小黑`, `Ian's visual language`, and `provide attribution to Ian`. [VERIFIED: NOTICE.md; scripts/validate-skill-package.mjs]

Keep the current attribution blocks for Littlebox, Tom, Ferris, and Sealos Seal. The validator asserts the section headings and authority markers: `Littlebox Source Attribution`, `Tom Source Attribution and Permission Boundary`, `Ferris Source Attribution and Rust Trademark Boundary`, and `Sealos Seal Brand and Canonical Image Boundary`. [VERIFIED: NOTICE.md; scripts/validate-skill-package.mjs]

Keep Sealos public sample gating language English and aligned with release checklist terms: `Public rendered samples`, `brand wording`, `uploaded-image authority`, `no-logo mascot identity`, and `Prior Sealos mascot exploration`. [VERIFIED: NOTICE.md; scripts/validate-skill-package.mjs]

### `RELEASE_CHECKLIST.md`

Translate the opening description and any remaining Chinese instruction prose to English-default. Preserve command snippets, route aliases, route statuses, authority paths, raw/escaped output path markers, and all approval record field labels. [VERIFIED: RELEASE_CHECKLIST.md; LANGUAGE_POLICY.md]

Keep these parser-sensitive section headings unless parser/test updates are made carefully: `## Ferris Source, Trademark, and Public Sample Gate` and `## Sealos Seal Brand, Uploaded Image, and Public Sample Gate`. `parseGeneratedFerrisSampleApproval` splits the Ferris section between those headings, and `parseGeneratedSealosSampleApproval` splits on the Sealos heading. [VERIFIED: scripts/validate-skill-package.mjs]

Keep public approval lines in the existing shapes:

```text
Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.
Sealos public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-image identity outcome / no-logo outcome.
Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.
Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.
```

The parser splits approval records by slash-delimited fields and validates reviewer/date/status/directory/outcome positions. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs]

## Validator/Test Sync Map

| Area | Current Marker Dependency | Phase 27 Action |
|------|---------------------------|-----------------|
| README identity | `# Visual IP Illustrations`, `$visual-ip-illustrations`, `visual-ip-illustrations`, `$ian-xiaohei-illustrations` are asserted. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve these strings. No validator change needed if they remain exact. |
| README install commands | `git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations`, `cd visual-ip-illustrations`, `cp -R ./ian-xiaohei-illustrations` are asserted. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve exact commands. |
| Examples canonical heading | `## Canonical normal-flow prompts` is asserted in validator and tests. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] | Preserve the heading, or update `REBRAND-CANON-002`, `REBRAND-DOCS-001`, and stale examples fixture tests together. Preserving is simpler. |
| Examples route smoke headings | Current `SMOKE-*` checks assert Chinese headings such as `## 路由烟测：显式选择 Tom`, `## 路由烟测：显式选择 Sealos Seal`, and `## 路由说明：多 IP 请求`. [VERIFIED: scripts/validate-skill-package.mjs] | Rename headings to English and update `SMOKE-DEFAULT-001`, `SMOKE-XH-001`, `SMOKE-LB-001`, `SMOKE-TOM-001`, `SMOKE-FERRIS-001`, `SMOKE-SEALOS-001`, `SMOKE-MIXED-001`, `SMOKE-MIXED-SEALOS-001` marker arrays plus tests that replace those old headings. |
| Tom smoke prose | Current markers include Chinese phrases: `Tom 是 explicit protected-character route`, `route status 是`, `使用 route-local reference directory`, and public sample gate Chinese phrases. [VERIFIED: scripts/validate-skill-package.mjs] | Replace with English equivalents while preserving `Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫`, `gated-authorized`, rights path, output paths, `Rights-status note`, and public-sample gate. |
| Ferris smoke prose | Current markers include `route status 是`, `使用 route-local reference directory`, `required references 包含`, plus the required English D-15 phrase. [VERIFIED: scripts/validate-skill-package.mjs] | Keep the required English D-15 phrase exactly; convert surrounding markers to English and update `SMOKE-FERRIS-001` and related test fixtures. |
| Sealos smoke prose | Current markers include `selected IP 是`, `route status 是`, `source authority 是`, `planning fields 包含`, `uploaded-image identity markers 包含`, and `no-logo markers 包含`. [VERIFIED: scripts/validate-skill-package.mjs] | Convert to English marker phrases and update `SMOKE-SEALOS-001`, `SMOKE-MIXED-SEALOS-001`, and test search values at the same time. |
| NOTICE markers | `NOTICE-*` checks assert English headings plus `小黑`. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve current markers; no change expected unless prose is tightened. |
| Release rebrand headings | `Release 1.4 Rebrand Review`, `Route Smoke Prompts`, `Omitted-IP Xiaohei smoke`, `Mixed-IP smoke` are asserted. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve these exact English headings/phrases. |
| Release parser headings | Generated approval parsers split on `## Ferris Source, Trademark, and Public Sample Gate` and `## Sealos Seal Brand, Uploaded Image, and Public Sample Gate`. [VERIFIED: scripts/validate-skill-package.mjs] | Preserve exact headings. |
| Approval record lines | Tests define exact pending/complete approval line shapes for Tom, Ferris, and Sealos. [VERIFIED: scripts/validate-skill-package.test.mjs] | Preserve slash-delimited field order and placeholder strings exactly. |
| Language allowlist | `LANGUAGE_ALLOWLIST` permits route aliases and several visible-label fixtures in public docs; one pattern allows lines in `examples/prompts.md` beginning `Use $ian-xiaohei-illustrations` with Han. [VERIFIED: scripts/validate-skill-package.mjs] | Prefer translating surrounding prose first. Add narrow allowlist entries only for new intentional fixtures that fail enforce mode after translation. |

## Verification Commands

Run these in this order after Phase 27 implementation:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs
rg -n "[\\p{Han}]" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md
```

Expected Phase 27 result: normal validator and Node tests pass, `git diff --check` is clean, enforce-mode `LANG-SCAN-001` reports no stale prose for Phase 27-owned public docs, and targeted Han scan contains only approved aliases, visible-label examples, attribution/source names, or explicit compatibility smoke fixtures. [VERIFIED: 26-VERIFICATION.md; command output; LANGUAGE_POLICY.md]

Use the targeted Han scan as a human classification list, not as a zero-Han requirement. Approved tokens include Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples. [VERIFIED: LANGUAGE_POLICY.md]

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Translating route smoke headings without updating validator/test markers | Validator fails even when docs are correct. | Update `SMOKE-*` marker arrays and corresponding test fixture replacement strings in the same change set. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |
| Changing approval record wording or slash field order | Public/generated sample gate parsers misread approval completeness, potentially blocking assets or allowing incorrect approvals. | Preserve exact approval line prefixes and field order; run parser-oriented Node tests. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |
| Removing Chinese aliases during English rewrite | Breaks route compatibility and violates approved multilingual exception policy. | Preserve exact aliases in README, examples, and release checklist smoke prompts. [VERIFIED: LANGUAGE_POLICY.md; 27-CONTEXT.md] |
| Over-translating user-language visible labels | Weakens documented Chinese article workflow behavior. | Keep intentional label examples and clearly frame them as user-language visible labels. [VERIFIED: LANGUAGE_POLICY.md] |
| Broad allowlist expansion to quiet enforce mode | Masks stale public prose and weakens Phase 28 final gate. | Translate prose first; add only exact-token or anchored-pattern allowlist entries with rationale. [VERIFIED: LANGUAGE_POLICY.md; scripts/validate-skill-package.mjs] |
| Rewriting README/examples too broadly | Accidental loss of install paths, route statuses, authority paths, or output markers. | Use validator-visible token checklist before and after edits; run `DOC-*`, `REBRAND-*`, and `SMOKE-*` checks through full validator. [VERIFIED: scripts/validate-skill-package.mjs] |

## Planner Handoff Notes

Plan this as one phase plan with four implementation task groups plus verification:

1. README migration: English-default public identity, route sections, gallery captions/alt text, install guidance, workflow, validation, related projects, author section; preserve all route/path/invocation markers.
2. Examples migration: English-default headings and copyable prompts; preserve canonical and legacy invocation coverage, route aliases, intentional Chinese article/user-label fixtures, output paths, route status notes, and mixed-IP variant groups.
3. NOTICE and release checklist migration: keep attribution/source/brand boundaries; translate release prose; preserve parser-sensitive approval records and headings.
4. Validator/test sync: update only public-doc markers whose headings/prose changed, especially `SMOKE-*` markers and tests that reference Chinese headings; keep parser helpers stable unless absolutely required.
5. Verification: run normal validator, Node tests, `git diff --check`, enforce-mode residual scan, and targeted Han scan; record remaining Han findings by policy category.

## Open Questions

1. **Should `## Canonical normal-flow prompts` remain unchanged?**
   - What we know: Validator and tests assert it today. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs]
   - What's unclear: The implementation may prefer title case such as `## Canonical Normal-Flow Prompts`.
   - Recommendation: Keep the current heading to reduce sync churn.

2. **Should Chinese article prompt bodies remain Chinese in legacy smoke fixtures?**
   - What we know: The language policy explicitly allows compatibility smoke fixtures and Chinese article illustration examples. [VERIFIED: LANGUAGE_POLICY.md]
   - What's unclear: The exact number of Chinese fixtures needed after English-default rewrite.
   - Recommendation: Keep one compact fixture per route-smoke category where it proves alias/user-language behavior, and translate surrounding guidance.

## Sources

### Primary (HIGH confidence)

- `.planning/ROADMAP.md` - Phase 27 scope, success criteria, and Phase 28 boundary.
- `.planning/REQUIREMENTS.md` - DOC-01 through DOC-04 requirement text.
- `.planning/phases/27-public-documentation-and-example-migration/27-CONTEXT.md` - locked Phase 27 decisions and deferred scope.
- `LANGUAGE_POLICY.md` - English-default authority and approved multilingual exceptions.
- `.planning/phases/26-skill-and-reference-content-migration/26-VERIFICATION.md` - Phase 26 deferred public-doc residual language findings.
- `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md` - current public docs and release surfaces.
- `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs` - exact marker checks, language scan allowlist, parser helpers, and regression tests.
- Command output from `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` - current enforce-mode failure profile.

### Secondary (MEDIUM confidence)

- None.

### Tertiary (LOW confidence)

- None.

## Metadata

**Confidence breakdown:**

- Documentation rewrite approach: HIGH - locked phase decisions and current docs identify the exact files and migration direction.
- Validator/test sync: HIGH - exact marker assertions and parser helpers were inspected in `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- Residual language risk: HIGH - enforce-mode output currently isolates the Phase 27 public-doc prose failure.
- Parser-sensitive release checklist risks: HIGH - approval line parsers and tests show exact field order requirements.

**Research date:** 2026-06-15
**Valid until:** 2026-07-15
