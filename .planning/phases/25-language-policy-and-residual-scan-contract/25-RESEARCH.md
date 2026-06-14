# Phase 25: Language Policy and Residual Scan Contract - Research

**Researched:** 2026-06-14 [VERIFIED: system current date]  
**Domain:** documentation-first Codex Skill language policy plus dependency-free Node validator extension [VERIFIED: .planning/PROJECT.md; scripts/validate-skill-package.mjs]  
**Confidence:** HIGH [VERIFIED: codebase inspection and local validation commands]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Policy Authority
- **D-01:** Add root `LANGUAGE_POLICY.md` as the canonical English-default language policy for the repository.
- **D-02:** Treat English as the default for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy.
- **D-03:** Later docs and release surfaces should reference `LANGUAGE_POLICY.md` instead of duplicating the policy.

### Multilingual Exception Model
- **D-04:** Approved exceptions are exact Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- **D-05:** Allowlist entries must be narrow: category, path scope, exact token or anchored pattern, and rationale.
- **D-06:** Whole-file and whole-directory exemptions are reserved for generated binary assets and image files, not Markdown prose.

### Residual Scan Contract
- **D-07:** Add residual Chinese detection to the existing dependency-free Node validator path.
- **D-08:** The scan must report approved multilingual tokens separately from stale Chinese prose.
- **D-09:** Each finding should include status, category, `path:line`, token or short excerpt, and remediation target.
- **D-10:** Stale Chinese prose outside the allowlist should fail the validator.

### Compatibility Surfaces
- **D-11:** Preserve `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, route ids, route aliases, default flags, output suffixes, output paths, required references, source/rights/brand records, QA gates, and user-language visible-label behavior.
- **D-12:** Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.
- **D-13:** Route-local authority remains isolated: Tom rights stay in `references/ips/tom/rights.md`, Ferris source/trademark authority stays in `references/ips/ferris/source.md`, and Sealos Seal brand/canonical-image authority stays in `references/ips/sealos/source.md`.

### Validation Shape
- **D-14:** Phase 25 should establish the policy and scan contract first; Phase 28 should expand the full hard-fail validator matrix after migration surfaces are translated.
- **D-15:** Validator extensions should use stable `LANG-*` check ids and Node tests should cover allowed exception fixtures plus stale Chinese prose fixtures.

### the agent's Discretion
- The implementation can choose the exact helper names and validator internal structure as long as it stays dependency-free, deterministic, and aligned with the existing `defineCheck`/fixture-test style.
- The first residual scan in Phase 25 can be contract-oriented and report current stale prose, because Phase 26 and Phase 27 own broad migration.

### Deferred Ideas (OUT OF SCOPE)
- Machine-readable visual IP manifest.
- Asset manifest and automated visual regression.
- Additional IP routes.
- Hosted app, UI, API, database, or build runtime.
- External legal or trademark research beyond existing route records.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| LANG-01 | Maintainer can read a single English-default language policy for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy. [VERIFIED: .planning/REQUIREMENTS.md] | Add root `LANGUAGE_POLICY.md` and a `LANG-POLICY-*` validator check that confirms the policy names every required surface. [VERIFIED: .planning/phases/25-language-policy-and-residual-scan-contract/25-CONTEXT.md; scripts/validate-skill-package.mjs] |
| LANG-02 | Maintainer can read an explicit exception allowlist for Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples. [VERIFIED: .planning/REQUIREMENTS.md] | Put the exception categories in `LANGUAGE_POLICY.md` and mirror them in a narrow validator allowlist helper with category, path scope, exact token or anchored pattern, and rationale. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs] |
| LANG-03 | Maintainer can run a residual Chinese scan that distinguishes policy-approved multilingual tokens from stale Chinese prose. [VERIFIED: .planning/REQUIREMENTS.md] | Extend the dependency-free validator with a line-based Han-character scan that emits approved findings and stale prose findings separately. [VERIFIED: scripts/validate-skill-package.mjs; local rg scan] |
</phase_requirements>

## Summary

Phase 25 should create the language authority and scanner contract with surgical edits: add `LANGUAGE_POLICY.md`, add helper functions and `LANG-*` checks in `scripts/validate-skill-package.mjs`, and add focused fixture tests in `scripts/validate-skill-package.test.mjs`. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs]

The current repository contains extensive Chinese prose across README, examples, skill references, route packs, validator markers, and tests; a local Han-character scan reported 1147 matching text lines excluding common binary image extensions. [VERIFIED: local command `rg -n "[\\p{Han}]" --glob '!*.png' --glob '!*.jpg' --glob '!*.jpeg' --glob '!*.gif' --glob '!*.webp' --glob '!*.ico' .`] Phase 25 should make the scanner capable and deterministic while using the context-approved transitional contract for current stale prose that Phase 26 and Phase 27 will migrate. [VERIFIED: 25-CONTEXT.md]

**Primary recommendation:** Implement a reusable residual-language scanner now, gate `LANGUAGE_POLICY.md` and allowlist shape immediately, and keep broad content migration scoped to Phase 26 and Phase 27. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md]

## Project Constraints (from AGENTS.md)

- Every user-facing assistant reply in this repository begins with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing assistant replies use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, pull request titles, and pull request descriptions use English. [VERIFIED: AGENTS.md]
- Start from original need, core problem, constraints, and desired outcome before applying templates. [VERIFIED: AGENTS.md]
- Pause for short discussion when motivation or target is unclear; Phase 25 target is clear from CONTEXT and ROADMAP. [VERIFIED: AGENTS.md; 25-CONTEXT.md; .planning/ROADMAP.md]
- Prefer durable root-cause fixes and minimum code that satisfies the request. [VERIFIED: AGENTS.md]
- Keep edits surgical and match existing style. [VERIFIED: AGENTS.md]
- Remove unused imports, variables, functions, and files created by the change. [VERIFIED: AGENTS.md]
- Turn work into verifiable goals and validate behavior with targeted commands. [VERIFIED: AGENTS.md]
- Before repo edits, use a GSD workflow entry point unless the user explicitly bypasses it; this research was invoked by the GSD phase-planning workflow. [VERIFIED: AGENTS.md; init.phase-op output]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Language policy authority | Repository documentation | Validator | `LANGUAGE_POLICY.md` is the human-readable source; validator checks keep required policy surfaces present. [VERIFIED: 25-CONTEXT.md] |
| Multilingual exception model | Validator | Repository documentation | Machine allowlist makes exact allowed tokens testable; policy explains categories and rationale for maintainers. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs] |
| Residual Chinese scan | Validator | Node tests | Existing local validation is dependency-free Node with stable check ids and fixture tests. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |
| Route compatibility preservation | Skill reference docs | Validator | `references/routing.md` holds route ids, aliases, default flags, suffixes, required references, and statuses; validator already locks route stability. [VERIFIED: ian-xiaohei-illustrations/references/routing.md; scripts/validate-skill-package.mjs] |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Node.js runtime | v24.13.0 | Run the ESM validator and Node test suite. [VERIFIED: local `node --version`] | Current validator and tests already run through `node` and `node --test`. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs] |
| `node:fs`, `node:path`, `node:process` | built-in | File discovery, path normalization, process exit status. [VERIFIED: scripts/validate-skill-package.mjs] | Existing validator uses built-in modules and stays dependency-free. [VERIFIED: scripts/validate-skill-package.mjs] |
| `node:test`, `node:assert/strict`, `node:child_process`, `node:os` | built-in | Fixture tests and command execution. [VERIFIED: scripts/validate-skill-package.test.mjs] | Existing tests copy fixtures, mutate files, run the validator, and assert stable failure output. [VERIFIED: scripts/validate-skill-package.test.mjs] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Git | 2.50.1 (Apple Git-155) | Diff checks and optional GSD commit. [VERIFIED: local `git --version`] | Use after research and implementation changes to verify whitespace and commit docs when requested by GSD config. [VERIFIED: .planning/config.json] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Built-in Node scanner | External language-detection package | Adds install and legitimacy surface to a dependency-free skill package. [VERIFIED: .planning/PROJECT.md; scripts/validate-skill-package.mjs] |
| Line-based Han scan | Full natural-language classification | Line-based scan matches deterministic validator style and keeps findings actionable as `path:line` excerpts. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs] |

**Installation:** No package installation is recommended for Phase 25. [VERIFIED: .planning/PROJECT.md; repository file scan]

**Version verification:** Node and Git are available locally; no npm package version lookup is required because the phase recommends built-in Node modules only. [VERIFIED: local `node --version`; local `git --version`; repository file scan]

## Package Legitimacy Audit

No external packages are recommended or installed for Phase 25. [VERIFIED: .planning/PROJECT.md; scripts/validate-skill-package.mjs]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | — | — | — | — | — | No install surface. [VERIFIED: repository file scan] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no packages recommended]  
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no packages recommended]

## Implementation Approach

### Files Likely Changed

| File | Change | Reason |
|------|--------|--------|
| `LANGUAGE_POLICY.md` | Add canonical English-default policy, exact exception categories, residual scan output contract, compatibility surfaces, and Phase 26/27/28 handoff notes. [VERIFIED: 25-CONTEXT.md] | Satisfies LANG-01 and LANG-02 with one root policy authority. [VERIFIED: .planning/REQUIREMENTS.md] |
| `scripts/validate-skill-package.mjs` | Add language scan constants, allowlist entries, scanner helpers, report formatting helpers, and `LANG-*` checks. [VERIFIED: scripts/validate-skill-package.mjs] | Satisfies LANG-03 through current dependency-free validator path. [VERIFIED: 25-CONTEXT.md] |
| `scripts/validate-skill-package.test.mjs` | Add required `LANG-*` ids, stable ordering assertions, missing-policy fixture, approved-token fixture, and stale-prose fixture. [VERIFIED: scripts/validate-skill-package.test.mjs] | Locks validator behavior through existing fixture-test style. [VERIFIED: scripts/validate-skill-package.test.mjs] |

### Recommended Check IDs

| Check ID | Purpose | Expected Phase 25 Behavior |
|----------|---------|----------------------------|
| `LANG-POLICY-001` | Root policy exists and names all required default-language surfaces. [VERIFIED: 25-CONTEXT.md] | Fails when `LANGUAGE_POLICY.md` is missing or omits repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, or PR copy. [VERIFIED: .planning/REQUIREMENTS.md] |
| `LANG-POLICY-002` | Policy contains the explicit multilingual exception categories. [VERIFIED: 25-CONTEXT.md] | Fails when any approved category is missing: route aliases, visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, Chinese article illustration examples. [VERIFIED: 25-CONTEXT.md] |
| `LANG-SCAN-001` | Validator exposes residual Chinese scan contract and reports allowed findings separately from stale prose. [VERIFIED: 25-CONTEXT.md] | Produces deterministic failure text with status, category, `path:line`, excerpt/token, and remediation target. [VERIFIED: 25-CONTEXT.md] |
| `LANG-SCAN-002` | Allowlist entries have narrow shape. [VERIFIED: 25-CONTEXT.md] | Fails if an allowlist entry lacks category, path scope, exact token or anchored pattern, or rationale. [VERIFIED: 25-CONTEXT.md] |

### Validator Helper Design

Use small helpers near existing shared helpers, before the `Results` class and `checks` array. [VERIFIED: scripts/validate-skill-package.mjs]

```javascript
// Source: scripts/validate-skill-package.mjs existing helper style [VERIFIED: scripts/validate-skill-package.mjs]
const HAN_CHARACTER_PATTERN = /\p{Script=Han}/u;

const LANGUAGE_SCAN_TARGETS = [
  "README.md",
  "examples/prompts.md",
  "NOTICE.md",
  "RELEASE_CHECKLIST.md",
  SKILL_FILE,
  OPENAI_AGENT_FILE,
  ROUTING_FILE,
  ...routeReferenceFiles(),
];

const LANGUAGE_ALLOWLIST = [
  {
    category: "route-alias",
    paths: [ROUTING_FILE, SKILL_FILE, "examples/prompts.md"],
    token: "小黑",
    rationale: "Xiaohei route alias compatibility.",
    remediation: "Keep exact alias; translate surrounding prose.",
  },
  {
    category: "prompt-placeholder",
    paths: [path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md")],
    token: "{正文配图主题}",
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep exact placeholder; translate surrounding prose.",
  },
];
```

Recommended helper responsibilities:

- `routeReferenceFiles()` derives scan targets from `routing.md` `required_references` and adds legacy Xiaohei reference paths already tracked by `legacyXiaoheiRefs()`. [VERIFIED: scripts/validate-skill-package.mjs; ian-xiaohei-illustrations/references/routing.md]
- `validateLanguageAllowlistShape(entries)` enforces category, path scope, exact token or anchored pattern, rationale, and remediation. [VERIFIED: 25-CONTEXT.md]
- `findHanSegments(line)` extracts compact excerpts around Han characters and keeps report lines short. [VERIFIED: 25-CONTEXT.md]
- `classifyLanguageFinding(relativePath, lineNumber, line)` returns approved findings for exact allowlist matches and stale findings for remaining Han-containing excerpts. [VERIFIED: 25-CONTEXT.md]
- `formatLanguageFinding(finding)` emits `status category path:line excerpt remediation` in stable text for tests. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.test.mjs]

### Scan Allowlist Shape

Use an in-code allowlist during Phase 25, with policy prose as the human authority and validator constants as the executable mirror. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs]

| Field | Required | Example |
|-------|----------|---------|
| `category` | yes | `route-alias`, `visible-label`, `prompt-placeholder`, `attribution-source-name`, `compatibility-smoke-fixture`, `chinese-article-example` [VERIFIED: 25-CONTEXT.md] |
| `paths` | yes | `["ian-xiaohei-illustrations/references/routing.md"]` [VERIFIED: ian-xiaohei-illustrations/references/routing.md] |
| `token` | token or pattern | `"汤姆猫"` [VERIFIED: ian-xiaohei-illustrations/references/routing.md] |
| `pattern` | token or pattern | `/^Visible labels:/u` for anchored fixture cases. [ASSUMED] |
| `rationale` | yes | `Tom Chinese route alias compatibility.` [VERIFIED: 25-CONTEXT.md] |
| `remediation` | yes | `Keep exact alias; translate surrounding prose.` [VERIFIED: 25-CONTEXT.md] |

Allowlisted exact tokens should include current Chinese route aliases from `routing.md`: `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, and `Sealos 海豹`. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]

Prompt placeholders should be allowlisted as exact tokens where current Xiaohei prompt templates require Chinese article fields, including `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, `{这张图要表达的核心意思}`, `{具体画面：小黑在哪里、正在做什么、主要物件是什么、信息如何流动}`, `{标注词1}`, and `{要删除的文字}`. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md; scripts/validate-skill-package.mjs]

Visible-label examples should be allowlisted only where examples intentionally demonstrate Chinese article labels, such as Littlebox label examples `"原始材料"`, `"判断"`, and `"输出"`. [VERIFIED: ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md]

### Phase 25 Transitional Behavior

Phase 25 can introduce a scan that detects and reports current stale Chinese prose while deferring full cleanup to Phase 26 and Phase 27. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md] The planner should decide whether `LANG-SCAN-001` hard-fails the current baseline or whether Phase 25 adds a transitional mode that fails only fixture-injected stale prose and prints current repo stale findings as contract evidence. [VERIFIED: 25-CONTEXT.md]

Recommended implementation for planner: keep production validator green in Phase 25 by making the hard-fail target a small controlled fixture path or a policy-owned scan sample, then expand the full hard-fail matrix in Phase 28 after migration. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md]

## Architecture Patterns

### System Architecture Diagram

```text
Maintainer runs validator
  |
  v
scripts/validate-skill-package.mjs
  |
  +--> LANG-POLICY-* checks
  |      |
  |      v
  |   LANGUAGE_POLICY.md required surfaces and exceptions
  |
  +--> LANG-SCAN-* checks
         |
         v
      collect text files from docs, SKILL.md, metadata, routing, route references
         |
         v
      scan each line for Han characters
         |
         +--> exact allowlist match -> approved multilingual finding
         |
         +--> remaining Han excerpt -> stale prose finding
                    |
                    v
             deterministic validator failure or transitional report
```

### Recommended Project Structure

```text
.
├── LANGUAGE_POLICY.md                         # English-default policy authority [VERIFIED: 25-CONTEXT.md]
├── scripts/
│   ├── validate-skill-package.mjs             # dependency-free validator and LANG checks [VERIFIED: scripts/validate-skill-package.mjs]
│   └── validate-skill-package.test.mjs        # fixture regression tests [VERIFIED: scripts/validate-skill-package.test.mjs]
└── ian-xiaohei-illustrations/
    ├── SKILL.md                               # later Phase 26 content migration target [VERIFIED: .planning/ROADMAP.md]
    └── references/                            # later Phase 26 route/reference migration target [VERIFIED: .planning/ROADMAP.md]
```

### Pattern 1: Stable Check List Extension

**What:** Add `LANG-*` checks after Phase 24 `REBRAND-*` checks and before `BOUNDARY-*` checks, then add the ids to `requiredCheckIds` in the same order. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs]  
**When to use:** Use for Phase 25 validator additions because existing tests assert full check order and total count. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**Example:**

```javascript
// Source: scripts/validate-skill-package.mjs defineCheck pattern [VERIFIED: scripts/validate-skill-package.mjs]
defineCheck("LANG-POLICY-001", "LANGUAGE_POLICY.md defines English-default repository surfaces", () => {
  assertIncludes(requireFile("LANGUAGE_POLICY.md"), "LANGUAGE_POLICY.md", [
    "repository docs",
    "skill instructions",
    "reference docs",
    "examples",
    "release materials",
    "validation output",
    "code",
    "scripts",
    "comments",
    "commit messages",
    "PR copy",
  ], "English-default language policy surfaces");
});
```

### Pattern 2: Fixture-Driven Failure Tests

**What:** Copy repository fixture, mutate one marker or insert one stale line, run fixture validator, and assert failing check id plus actionable path. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**When to use:** Use for missing policy, broad allowlist attempts, approved exception preservation, and stale Chinese prose. [VERIFIED: scripts/validate-skill-package.test.mjs; 25-CONTEXT.md]  
**Example:**

```javascript
// Source: scripts/validate-skill-package.test.mjs fixture pattern [VERIFIED: scripts/validate-skill-package.test.mjs]
test("validator fixture rejects stale Chinese prose outside language allowlist", () => {
  const fixtureRoot = copyFixture("language-stale-prose");
  try {
    replaceInFixture(fixtureRoot, "LANGUAGE_POLICY.md", "Residual scan contract", "Residual scan contract\n\n这是未批准的中文正文。");
    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-001 /);
    assert.match(result.stdout, /LANGUAGE_POLICY\.md:\d+/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

### Anti-Patterns to Avoid

- **Broad Markdown exemptions:** Whole-file Markdown exemptions would hide stale prose and conflict with D-06. [VERIFIED: 25-CONTEXT.md]
- **String-only grep without category reporting:** A raw grep cannot distinguish approved aliases from stale prose and cannot satisfy LANG-03. [VERIFIED: .planning/REQUIREMENTS.md]
- **Dependency install for language detection:** External packages add package legitimacy and runtime setup surface to a dependency-free validator. [VERIFIED: .planning/PROJECT.md; scripts/validate-skill-package.mjs]
- **Translating route semantics during Phase 25:** Phase 25 owns policy and scan contract; route/reference/content migration belongs to Phase 26 and Phase 27. [VERIFIED: .planning/ROADMAP.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Markdown parsing for route metadata | Custom ad hoc table parsing for new language checks | Existing `parseMarkdownTable`, `routeRows`, and `routeReferencePaths` helpers. [VERIFIED: scripts/validate-skill-package.mjs] | Existing helpers already parse `routing.md` and are covered by parser tests. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| Test harness | New test runner or shell script suite | Existing `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: scripts/validate-skill-package.test.mjs] | Current suite has 51 passing tests and fixture helper coverage. [VERIFIED: local Node test run] |
| Language scan output format | Free-form console logs | Existing `[PASS]`, `[FAIL]`, `Summary: total=...` result format plus deterministic failure messages. [VERIFIED: scripts/validate-skill-package.mjs] | Current validator contract is already consumed by tests and release evidence. [VERIFIED: scripts/validate-skill-package.test.mjs; .planning/STATE.md] |
| Full content migration | Broad translation work in Phase 25 | Phase 26 for skill/reference migration and Phase 27 for public docs/examples. [VERIFIED: .planning/ROADMAP.md] | Phase 25 success criteria cover policy, exceptions, scan contract, and compatibility surfaces. [VERIFIED: .planning/ROADMAP.md] |

**Key insight:** The hard part is classification, not detection; Han-character detection is simple, while narrow allowlist categories prevent compatibility tokens from becoming blanket exemptions. [VERIFIED: 25-CONTEXT.md; local rg scan]

## Runtime State Inventory

This phase is a migration-contract phase, so runtime state categories were checked explicitly. [VERIFIED: 25-CONTEXT.md]

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | None; repository is a documentation-first skill package with no database or datastore. [VERIFIED: .planning/PROJECT.md; repository file scan] | None. [VERIFIED: .planning/PROJECT.md] |
| Live service config | None; no hosted app, UI, API, database, or build runtime is in scope. [VERIFIED: .planning/PROJECT.md; 25-CONTEXT.md] | None. [VERIFIED: 25-CONTEXT.md] |
| OS-registered state | None found in phase scope; install target is a local Codex skill directory and Phase 25 edits source files only. [VERIFIED: .planning/PROJECT.md] | None. [VERIFIED: .planning/PROJECT.md] |
| Secrets/env vars | No `.env` files detected in repository context; `CODEX_HOME` install path remains documentation guidance. [VERIFIED: AGENTS.md; repository file scan] | None. [VERIFIED: AGENTS.md] |
| Build artifacts | No build runtime or lockfile is present by design; validator and tests run directly through Node. [VERIFIED: .planning/PROJECT.md; repository file scan] | None. [VERIFIED: .planning/PROJECT.md] |

## Common Pitfalls

### Pitfall 1: Current Chinese Prose Breaks a Strict Scanner Immediately

**What goes wrong:** A full hard-fail scanner fails current baseline before Phase 26 and Phase 27 migrate prose. [VERIFIED: local rg scan; .planning/ROADMAP.md]  
**Why it happens:** Current shipped docs and references still contain many Chinese lines by historical design. [VERIFIED: local rg scan; AGENTS.md project-doc history]  
**How to avoid:** Use Phase 25 to define the scanner and transitional report contract, then expand hard-fail scope in Phase 28. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md]  
**Warning signs:** `node scripts/validate-skill-package.mjs` starts failing many content files that Phase 26/27 own. [VERIFIED: 25-CONTEXT.md]

### Pitfall 2: Allowlist Becomes a Broad Exemption

**What goes wrong:** A path-wide Markdown exemption hides stale Chinese prose in files that should be migrated. [VERIFIED: 25-CONTEXT.md]  
**Why it happens:** Whole-file exemptions are faster to write than exact token entries. [ASSUMED]  
**How to avoid:** Validate allowlist shape and require category, path scope, exact token or anchored pattern, rationale, and remediation. [VERIFIED: 25-CONTEXT.md]  
**Warning signs:** An allowlist entry points to `README.md` or `references/` with no token or anchored pattern. [VERIFIED: 25-CONTEXT.md]

### Pitfall 3: Report Output Is Hard to Test

**What goes wrong:** Scanner output changes between runs and fixture tests become brittle. [VERIFIED: scripts/validate-skill-package.test.mjs]  
**Why it happens:** File order, excerpt length, and finding order are left implicit. [ASSUMED]  
**How to avoid:** Sort target paths, process lines in file order, cap excerpts, and format every finding as `status category path:line excerpt remediation`. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs]  
**Warning signs:** Tests assert broad regexes because exact output order is unstable. [VERIFIED: scripts/validate-skill-package.test.mjs]

### Pitfall 4: Route Compatibility Tokens Get Translated Away

**What goes wrong:** Chinese aliases or prompt placeholders are removed during policy work and existing route smoke behavior drifts. [VERIFIED: .planning/REQUIREMENTS.md; ian-xiaohei-illustrations/references/routing.md]  
**Why it happens:** English-default migration can be mistaken for English-only content. [VERIFIED: .planning/REQUIREMENTS.md; 25-CONTEXT.md]  
**How to avoid:** Keep exact route aliases, prompt placeholders, visible-label examples, source names, and smoke fixtures as policy-approved multilingual surfaces. [VERIFIED: 25-CONTEXT.md]  
**Warning signs:** Fixture tests fail `ROUTE-*`, `SMOKE-*`, or prompt placeholder checks after language edits. [VERIFIED: scripts/validate-skill-package.test.mjs]

## Code Examples

### Finding Shape

```javascript
// Source: Phase 25 scan contract [VERIFIED: 25-CONTEXT.md]
{
  status: "approved",
  category: "route-alias",
  path: "ian-xiaohei-illustrations/references/routing.md",
  line: 26,
  excerpt: "小黑",
  remediation: "Keep exact alias; translate surrounding prose."
}
```

### Stale Prose Failure Message

```text
[FAIL] LANG-SCAN-001 LANGUAGE_POLICY.md:14 stale-prose "这是未批准的中文正文" remediation=Translate prose to English or add a narrow approved exception.
```

Source: Required report fields in Phase 25 context. [VERIFIED: 25-CONTEXT.md]

### Allowlist Shape Test

```javascript
// Source: scripts/validate-skill-package.test.mjs fixture conventions [VERIFIED: scripts/validate-skill-package.test.mjs]
test("validator fixture rejects broad language allowlist entries", () => {
  const fixtureRoot = copyFixture("language-broad-allowlist");
  try {
    replaceInFixture(fixtureRoot, "scripts/validate-skill-package.mjs", 'token: "小黑"', 'pattern: /[\\p{Script=Han}]+/u');
    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-002 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Chinese-first repository docs were historically valid. [VERIFIED: AGENTS.md project-doc] | v1.5 makes English the default across repo docs, skill instructions, references, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy. [VERIFIED: .planning/PROJECT.md; .planning/REQUIREMENTS.md] | v1.5 roadmap on 2026-06-14. [VERIFIED: .planning/STATE.md; .planning/ROADMAP.md] | Phase 25 must create policy and scan contract before translation phases. [VERIFIED: .planning/ROADMAP.md] |
| Validator locked package, route, docs, release, and boundary contracts through 89 checks. [VERIFIED: local validator run] | Phase 25 adds language-policy and residual-scan checks with stable `LANG-*` ids. [VERIFIED: 25-CONTEXT.md] | Phase 25. [VERIFIED: .planning/ROADMAP.md] | Expected total check count increases after implementation and tests must update `requiredCheckIds`. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| Residual Chinese scan existed as manual grep only. [VERIFIED: local rg scan] | Validator-owned scan distinguishes approved multilingual tokens from stale prose. [VERIFIED: .planning/REQUIREMENTS.md] | Phase 25. [VERIFIED: .planning/ROADMAP.md] | Maintainers get actionable findings with category, path, excerpt, and remediation. [VERIFIED: 25-CONTEXT.md] |

**Deprecated/outdated:**
- Chinese-first default for new repository prose is superseded by the v1.5 English-default policy. [VERIFIED: .planning/PROJECT.md; .planning/ROADMAP.md]
- Manual grep as the only residual scan is superseded by validator-owned classification. [VERIFIED: .planning/REQUIREMENTS.md; 25-CONTEXT.md]

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Scanner fails current baseline too early. [VERIFIED: local rg scan; 25-CONTEXT.md] | HIGH | Phase 25 cannot close while Phase 26/27 prose remains Chinese. [VERIFIED: .planning/ROADMAP.md] | Use transitional contract now and full hard-fail scope in Phase 28. [VERIFIED: 25-CONTEXT.md] |
| Allowlist misses route aliases and breaks compatibility. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] | MEDIUM | Route smoke fixtures and user prompts drift. [VERIFIED: scripts/validate-skill-package.test.mjs] | Seed allowlist from `routing.md` and assert route stability checks stay green. [VERIFIED: scripts/validate-skill-package.mjs] |
| Allowlist permits stale prose through broad patterns. [VERIFIED: 25-CONTEXT.md] | MEDIUM | LANG-03 loses enforcement value. [VERIFIED: .planning/REQUIREMENTS.md] | Add `LANG-SCAN-002` shape validation and fixture test broad pattern rejection. [VERIFIED: 25-CONTEXT.md] |
| Test totals become stale after adding checks. [VERIFIED: scripts/validate-skill-package.test.mjs] | MEDIUM | Node suite fails despite valid implementation. [VERIFIED: scripts/validate-skill-package.test.mjs] | Update `requiredCheckIds`, full matrix count assertion, stable order tests, and smoke summary. [VERIFIED: scripts/validate-skill-package.test.mjs] |

## Acceptance Checklist

- [ ] `LANGUAGE_POLICY.md` exists at repo root and states English default surfaces from LANG-01. [VERIFIED: .planning/REQUIREMENTS.md]
- [ ] `LANGUAGE_POLICY.md` lists all approved multilingual exception categories from LANG-02. [VERIFIED: .planning/REQUIREMENTS.md]
- [ ] Policy identifies compatibility surfaces from D-11 through D-13. [VERIFIED: 25-CONTEXT.md]
- [ ] Validator includes stable `LANG-POLICY-*` and `LANG-SCAN-*` ids. [VERIFIED: 25-CONTEXT.md]
- [ ] Scanner allowlist entries include category, path scope, exact token or anchored pattern, rationale, and remediation. [VERIFIED: 25-CONTEXT.md]
- [ ] Validator reports approved multilingual tokens separately from stale Chinese prose. [VERIFIED: 25-CONTEXT.md]
- [ ] Fixture tests cover missing policy, missing exception category, approved exception token, stale Chinese prose, and broad allowlist rejection. [VERIFIED: scripts/validate-skill-package.test.mjs; 25-CONTEXT.md]
- [ ] Existing route, output path, invocation, source/rights/brand, and boundary checks still pass. [VERIFIED: local validator run; local Node test run]

## Validation Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
rg -n "[\\p{Han}]" --glob '!*.png' --glob '!*.jpg' --glob '!*.jpeg' --glob '!*.gif' --glob '!*.webp' --glob '!*.ico' .
```

Current baseline before Phase 25 implementation:

- `node scripts/validate-skill-package.mjs` exits 0 and reports `Summary: total=89 passed=89 failed=0 skipped=0`. [VERIFIED: local validator run]
- `node --test scripts/validate-skill-package.test.mjs` exits 0 and reports `tests 51`, `pass 51`, `fail 0`. [VERIFIED: local Node test run]
- Node version is `v24.13.0`. [VERIFIED: local `node --version`]
- Git version is `git version 2.50.1 (Apple Git-155)`. [VERIFIED: local `git --version`]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Anchored regex allowlist entries may be useful for fixture-style cases. | Scan Allowlist Shape | Planner may choose exact tokens only and skip regex support. |
| A2 | Broad allowlist rejection can be tested by mutating validator constants in a fixture. | Code Examples | Test may be brittle if validator constants are arranged differently after implementation. |
| A3 | Stable scanner output needs sorted files, file-order line scans, and capped excerpts. | Common Pitfalls | Output could remain stable through another deterministic ordering method. |

## Open Questions (RESOLVED)

1. **Should Phase 25 production validator hard-fail on current stale Chinese prose or only on controlled stale-prose fixtures?** [VERIFIED: 25-CONTEXT.md]
   - What we know: Phase 25 can be contract-oriented and Phase 26/27 own broad migration. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md]
   - RESOLVED: Keep current baseline green in Phase 25 while adding fixture-proven hard-fail behavior, then enable full repository hard-fail in Phase 28. [VERIFIED: 25-CONTEXT.md; .planning/ROADMAP.md]

2. **Should the allowlist live only in validator code or also as a machine-readable table in `LANGUAGE_POLICY.md`?** [VERIFIED: 25-CONTEXT.md]
   - What we know: Policy is human authority and validator is executable path. [VERIFIED: 25-CONTEXT.md]
   - RESOLVED: Start with policy prose plus in-code constants, and keep the fields identical so Phase 28 can extract or compare them if needed. [VERIFIED: 25-CONTEXT.md; scripts/validate-skill-package.mjs]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node tests | Yes [VERIFIED: local `node --version`] | v24.13.0 [VERIFIED: local `node --version`] | None needed; current suite passes. [VERIFIED: local Node test run] |
| Git | `git diff --check` and GSD commit | Yes [VERIFIED: local `git --version`] | 2.50.1 (Apple Git-155) [VERIFIED: local `git --version`] | None needed. [VERIFIED: local `git --version`] |
| ripgrep (`rg`) | Residual scan research and optional manual inspection | Yes [VERIFIED: local rg scan succeeded] | Version not captured. [VERIFIED: local rg scan succeeded] | Validator-owned scan after implementation. [VERIFIED: 25-CONTEXT.md] |

**Missing dependencies with no fallback:** none. [VERIFIED: local environment probes]  
**Missing dependencies with fallback:** none. [VERIFIED: local environment probes]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no [VERIFIED: .planning/PROJECT.md] | No auth surface; skill package only. [VERIFIED: .planning/PROJECT.md] |
| V3 Session Management | no [VERIFIED: .planning/PROJECT.md] | No session surface; skill package only. [VERIFIED: .planning/PROJECT.md] |
| V4 Access Control | no [VERIFIED: .planning/PROJECT.md] | No hosted runtime or protected API. [VERIFIED: .planning/PROJECT.md] |
| V5 Input Validation | yes [VERIFIED: scripts/validate-skill-package.mjs] | Validate file paths with safe path helpers and constrain scan paths to repo-relative allowlisted text files. [VERIFIED: scripts/validate-skill-package.mjs] |
| V6 Cryptography | no [VERIFIED: .planning/PROJECT.md] | No cryptographic behavior in phase scope. [VERIFIED: .planning/PROJECT.md] |

### Known Threat Patterns for Node File Scanner

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Path traversal through route reference paths | Tampering | Reuse `safePackagePath` and `safeReferencePath` for route-derived scan targets. [VERIFIED: scripts/validate-skill-package.mjs] |
| Hidden stale prose through broad allowlist | Tampering | Validate allowlist shape and reject whole-file Markdown exemptions. [VERIFIED: 25-CONTEXT.md] |
| Binary or generated file scanning noise | Denial of Service | Limit scan targets to known text docs, metadata, scripts, and reference files; reserve whole-file exemptions for generated binary assets and image files. [VERIFIED: 25-CONTEXT.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/25-language-policy-and-residual-scan-contract/25-CONTEXT.md` - Phase boundary, decisions, canonical references, validator shape, and discretion. [VERIFIED: file read]
- `.planning/REQUIREMENTS.md` - LANG-01, LANG-02, LANG-03 definitions and traceability. [VERIFIED: file read]
- `.planning/ROADMAP.md` - Phase 25 goal, success criteria, and Phase 26/27/28 separation. [VERIFIED: file read]
- `.planning/STATE.md` - prior validator baselines, route stability decisions, and milestone state. [VERIFIED: file read]
- `.planning/PROJECT.md` - v1.5 scope, no-build-runtime constraint, and English-default active requirements. [VERIFIED: file read]
- `AGENTS.md` - project coding, language, and GSD workflow constraints. [VERIFIED: file read]
- `scripts/validate-skill-package.mjs` - dependency-free validator architecture, helpers, stable check array, route parsing, and summary output. [VERIFIED: file read]
- `scripts/validate-skill-package.test.mjs` - fixture-test patterns, stable check id list, and parser/output assertions. [VERIFIED: file read]
- Local command `node scripts/validate-skill-package.mjs` - current validator baseline. [VERIFIED: local command]
- Local command `node --test scripts/validate-skill-package.test.mjs` - current Node test baseline. [VERIFIED: local command]
- Local command `rg -n "[\\p{Han}]" ...` - current residual Chinese scan evidence. [VERIFIED: local command]

### Secondary (MEDIUM confidence)

- Memory entry for this repo's prior milestones, validator baseline progression, and canonical validation loop. [VERIFIED: /Users/longnv/.codex/memories/MEMORY.md lines 1640-1765]

### Tertiary (LOW confidence)

- None. [VERIFIED: no web search or unverified external sources used]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - local runtime commands and existing scripts verify Node/Git usage. [VERIFIED: local commands; scripts/validate-skill-package.mjs]
- Architecture: HIGH - codebase uses a single dependency-free validator plus Node fixture suite. [VERIFIED: scripts/validate-skill-package.mjs; scripts/validate-skill-package.test.mjs]
- Pitfalls: HIGH for baseline scan risk because current grep evidence shows many Han-character lines; MEDIUM for allowlist implementation details because helper names remain discretionary. [VERIFIED: local rg scan; 25-CONTEXT.md]

**Research date:** 2026-06-14 [VERIFIED: system current date]  
**Valid until:** 2026-07-14 for internal repository planning unless Phase 25 implementation changes validator architecture earlier. [ASSUMED]
