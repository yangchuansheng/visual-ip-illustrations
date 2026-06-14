# Phase 28: English-Default Validation and Release Evidence - Pattern Map

**Mapped:** 2026-06-15
**Files analyzed:** 5 likely modified/created files
**Analogs found:** 5 / 5

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
| --- | --- | --- | --- | --- |
| `scripts/validate-skill-package.mjs` | utility | batch validation | `scripts/validate-skill-package.mjs` existing `LANG-*`, `REBRAND-*`, `BOUNDARY-*` checks | exact |
| `scripts/validate-skill-package.test.mjs` | test | batch fixture mutation | `scripts/validate-skill-package.test.mjs` existing language, rebrand, release parser, boundary fixtures | exact |
| `RELEASE_CHECKLIST.md` | release config/doc | parser-sensitive checklist | `RELEASE_CHECKLIST.md` existing automated gates, rebrand review, approval records | exact |
| `.planning/phases/28-english-default-validation-and-release-evidence/28-VERIFICATION.md` | evidence doc | batch verification report | `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md` | exact |
| `.planning/phases/28-english-default-validation-and-release-evidence/28-UAT.md` | UAT evidence doc | request-response acceptance matrix | `.planning/phases/27-public-documentation-and-example-migration/27-UAT.md` | exact |

## Pattern Assignments

### `scripts/validate-skill-package.mjs` (utility, batch validation)

**Analog:** `scripts/validate-skill-package.mjs`

**Imports and constants pattern** (lines 1-35):

```javascript
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const PACKAGE_DIR = "ian-xiaohei-illustrations";
const REFERENCES_DIR = path.join(PACKAGE_DIR, "references");
const PUBLIC_DOCS = ["README.md", "examples/prompts.md", "NOTICE.md", "LICENSE"];
const SKILL_FILE = path.join(PACKAGE_DIR, "SKILL.md");
const OPENAI_AGENT_FILE = path.join(PACKAGE_DIR, "agents", "openai.yaml");
const ROUTING_FILE = path.join(REFERENCES_DIR, "routing.md");
const README_FILE = "README.md";
const LANGUAGE_POLICY_FILE = "LANGUAGE_POLICY.md";
const HAN_CHARACTER_PATTERN = /\p{Script=Han}/u;
```

Use dependency-free Node built-ins and repository-relative path constants. Add Phase 28 surfaces beside these constants rather than introducing config files.

**Language allowlist pattern** (lines 28-43, 1063-1105):

```javascript
const LANGUAGE_EXCEPTION_CATEGORIES = [
  "route aliases",
  "user-language visible labels",
  "prompt placeholders",
  "attribution/source names",
  "compatibility smoke fixtures",
  "Chinese article illustration examples",
];

function validateLanguageAllowlistShape(entries = LANGUAGE_ALLOWLIST) {
  const allowedCategories = new Set(LANGUAGE_EXCEPTION_CATEGORIES);
  const errors = [];
  entries.forEach((entry, index) => {
    const label = `LANGUAGE_ALLOWLIST[${index}]`;
    if (!entry.category || !allowedCategories.has(entry.category)) {
      errors.push(`${label} has invalid category=${entry.category ?? "missing"}`);
    }
```

Phase 28 should keep allowlist entries narrow: exact `token` or anchored `pattern`, explicit `paths`, `rationale`, and `remediation`. Broad Markdown scopes are already rejected at lines 1078-1084.

**Language scan hard-fail pattern** (lines 1123-1180):

```javascript
function classifyLanguageLine(relativePath, lineNumber, line) {
  if (!HAN_CHARACTER_PATTERN.test(line)) return [];
  const approved = LANGUAGE_ALLOWLIST.filter((entry) => languageEntryMatches(entry, relativePath, line));
  if (approved.length > 0) {
    return approved.map((entry) => ({
      status: "approved",
      category: entry.category,
      path: relativePath,
      line: lineNumber,
      token: entry.token ?? entry.pattern.source,
      remediation: entry.remediation,
    }));
  }
  return [
    {
      status: "stale",
      category: "stale Chinese prose",
      path: relativePath,
      line: lineNumber,
      excerpt: findHanExcerpt(line),
      remediation: "Translate surrounding prose in Phase 26 or Phase 27, or add a narrow approved exception.",
    },
  ];
}
```

Phase 28 default hard-fail should reuse `languageScanReport` and remove the default/report-only gap by making the normal `LANG-SCAN-001` check fail on stale findings. Keep `LANGUAGE_SCAN_ENFORCE=1` as an evidence command for release records.

**Release parser pattern** (lines 618-720, 798-855, 897-948):

```javascript
export function parsePublicFerrisSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Ferris public asset policy for"));

  return parseFerrisApprovalLine(approvalLine, "public");
}
```

Parser-sensitive additions to `RELEASE_CHECKLIST.md` should follow this model: find a stable line prefix, split the record on slash-delimited fields, parse booleans for reviewer/date/status/directories/outcomes, and expose the parser for tests.

**Check definition and summary output pattern** (lines 1502-1528, 3275-3289):

```javascript
function defineCheck(id, message, run) {
  return { id, message, run };
}

const checks = [
  defineCheck("PKG-SHAPE-001", "required skill package files exist and are readable", () => {
    assertReadableFiles(requiredPackageFiles(), PACKAGE_DIR, "complete installable package shape");
  }),
```

```javascript
function runChecks() {
  const results = new Results();
  for (const check of checks) {
    try {
      check.run();
      results.pass(check.id, check.message);
    } catch (error) {
      results.fail(check.id, `${check.message}: ${error.message}`);
    }
  }
  results.render();
}
```

Add `VAL-*` checks after `LANG-*` and before `BOUNDARY-*`. Update the expected summary count in tests from the current `Summary: total=93 passed=93 failed=0 skipped=0`.

### `scripts/validate-skill-package.test.mjs` (test, batch fixture mutation)

**Analog:** `scripts/validate-skill-package.test.mjs`

**Imports and required matrix pattern** (lines 1-104):

```javascript
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

const requiredCheckIds = [
  "PKG-SHAPE-001",
  ...
  "LANG-SCAN-001",
  "LANG-SCAN-002",
  "BOUNDARY-IMG-001",
];
```

Insert Phase 28 `VAL-*` IDs after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. Mirror the production check order exactly.

**Fixture copy and mutation pattern** (lines 121-153):

```javascript
function copyFixture(name) {
  const fixtureRoot = fixturePath(name);
  cpSync(repoRoot, fixtureRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
    },
  });
  return fixtureRoot;
}

function replaceInFixture(fixtureRoot, relativePath, searchValue, replaceValue) {
  const absolutePath = path.join(fixtureRoot, relativePath);
  const original = readFileSync(absolutePath, "utf8");
  assert.ok(original.includes(searchValue), `${relativePath} should contain fixture marker ${searchValue}`);
  writeFileSync(absolutePath, original.replace(searchValue, replaceValue), "utf8");
}
```

Use copied repository fixtures for stale prose, route stability, invocation stability, output-path drift, docs consistency, release marker, and UAT marker failures.

**Pass/fail assertion pattern** (lines 203-216, 395-407):

```javascript
test("validator command prints deterministic harness smoke logs", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  assert.match(result.stdout, /^\[PASS\] PKG-SHAPE-001 /m);
  assert.match(result.stdout, /Summary: total=93 passed=93 failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});
```

```javascript
const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
assert.equal(resultLines.length, requiredCheckIds.length);
assert.deepEqual(
  resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
  requiredCheckIds,
);
```

When adding `VAL-*`, update the total count and keep exact matrix equality.

**Language scan fixture pattern** (lines 474-525):

```javascript
const result = runFixtureValidator(fixtureRoot, { LANGUAGE_SCAN_ENFORCE: "1" });

assert.equal(result.status, 1);
assert.match(result.stdout, /\[FAIL\] LANG-SCAN-001 /);
assert.match(result.stdout, /status=stale/);
assert.match(result.stdout, /path=LANGUAGE_POLICY\.md:\d+/);
assert.match(result.stdout, /excerpt=这是一段未迁移的中文说明。/);
assert.match(result.stdout, /remediation=Translate surrounding prose/);
```

Phase 28 normal-mode stale-prose tests should call `runFixtureValidator(fixtureRoot)` without extra env and assert the same stale failure behavior.

**Release parser fixture pattern** (lines 155-200, 775-840, 1510-1622, 1789-1858):

```javascript
function pendingGeneratedSealosSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.";
}
```

```javascript
const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
  pendingFerrisPublicAssetApprovalLine(),
  completeFerrisPublicAssetApprovalLine(),
);
writeFileSync(releaseChecklistPath, approvedText, "utf8");

const approval = validators.parsePublicFerrisSampleApproval(approvedText);
assert.equal(approval.complete, true);
assert.equal(approval.reviewerPresent, true);
assert.equal(approval.datePresent, true);
```

For a v1.5 final release evidence gate, create pending and complete helper lines with fixed slash-delimited fields, then test pending failure, complete pass, placeholder date failure, and missing marker failure.

### `RELEASE_CHECKLIST.md` (release config/doc, parser-sensitive checklist)

**Analog:** `RELEASE_CHECKLIST.md`

**Automated gate pattern** (lines 5-28):

```markdown
## Automated Gates

- [ ] Run the package validator:
```

Add the Phase 28 explicit enforce-mode command here or in a new v1.5 gate section:

`LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs`

**Stable release review pattern** (lines 31-39):

```markdown
## Release 1.4 Rebrand Review

- [ ] Confirm public docs lead with `Visual IP Illustrations` as the current release 1.4 public identity.
- [ ] Confirm normal-flow examples use canonical invocation `$visual-ip-illustrations`.
- [ ] Confirm `$ian-xiaohei-illustrations` remains documented as the release 1.4 legacy compatibility alias.
```

Create a `## Release 1.5 English-Default Review` section if Phase 28 needs public release checklist anchoring. Keep checklist lines concrete and marker-friendly.

**Parser-sensitive approval line pattern** (lines 86, 130, 138, 178, 186):

```markdown
- [ ] Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.
```

Field order is part of the parser contract. New final evidence lines should use the same `PENDING / reviewer / date / approval status / ...` shape and a unique stable prefix.

**Route smoke and path marker pattern** (lines 41-48, 203-212):

Use route smoke lines and public docs path markers as validator targets for route stability, invocation stability, output path stability, and docs consistency. Preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, route aliases, route statuses, authority paths, raw paths, and escaped paths.

### `.planning/phases/28-english-default-validation-and-release-evidence/28-VERIFICATION.md` (evidence doc, batch verification report)

**Analog:** `.planning/phases/27-public-documentation-and-example-migration/27-VERIFICATION.md`

**Frontmatter pattern** (lines 1-16):

```markdown
---
phase: 27-public-documentation-and-example-migration
verified: 2026-06-14T18:34:19Z
status: passed
score: 5/5 must-haves verified
overrides_applied: 0
requirements:
  - id: DOC-01
    status: verified
---
```

For Phase 28, use `phase: 28-english-default-validation-and-release-evidence`, include `VAL-01` through `VAL-04`, and record exact verification time.

**Evidence tables pattern** (27-VERIFICATION lines 22-117):

Use the same sections:

- `## Verdict`
- `## Requirement Coverage`
- `## Must-Have Checks`
- `## Artifact Verification`
- `## Key Link Verification`
- `## Validation Evidence`
- `## Residual Han Classification`
- `## Behavioral Spot-Checks`
- `## Risks`

**Validation command evidence pattern** (27-VERIFICATION lines 77-84):

```markdown
| Command | Result | Evidence |
| --- | --- | --- |
| `node scripts/validate-skill-package.mjs` | PASS | `Summary: total=93 passed=93 failed=0 skipped=0` |
| `node --test scripts/validate-skill-package.test.mjs` | PASS | `tests 56`, `pass 56`, `fail 0` |
| `git diff --check` | PASS | Exit code 0 with no output. |
| `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` | PASS | `Summary: total=93 passed=93 failed=0 skipped=0`; `LANG-SCAN-001` passed. |
```

Phase 28 must update counts after adding `VAL-*`. Include validator output, Node test output, diff check, enforce-mode output, residual Han classification, docs consistency, compatibility smoke, and release evidence markers.

### `.planning/phases/28-english-default-validation-and-release-evidence/28-UAT.md` (UAT evidence doc, request-response acceptance matrix)

**Analog:** `.planning/phases/27-public-documentation-and-example-migration/27-UAT.md`

**Frontmatter and compact test matrix pattern** (lines 1-38):

```markdown
---
status: complete
phase: 27-public-documentation-and-example-migration
source:
  - 27-01-SUMMARY.md
  - 27-VERIFICATION.md
started: 2026-06-14T18:36:47Z
updated: 2026-06-14T18:36:47Z
---

## Current Test

[testing complete]

## Tests

### 1. README Public Documentation
expected: `README.md` presents English-default product identity...
result: pass
```

Phase 28 UAT should list maintainer-facing acceptance tests:

- Normal validator fails stale Chinese by default.
- Explicit enforce-mode command remains green evidence.
- Canonical invocation and legacy invocation stay valid.
- Chinese route aliases and visible-label behavior stay valid.
- Release checklist v1.5 evidence gate is present and parser-sensitive when added.

**Summary pattern** (27-UAT lines 40-49):

```markdown
## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0
```

Keep the UAT file short, deterministic, and linked to verification evidence.

## Shared Patterns

### Check ID Ordering

**Source:** `scripts/validate-skill-package.test.mjs` lines 10-104 and Phase 28 decision D-04.

Insert new `VAL-*` checks after `LANG-SCAN-002` and before `BOUNDARY-IMG-001`. Add matching stable order assertions if grouping needs explicit proof. The planner should include test updates for `requiredCheckIds`, `Summary: total=...`, and any group-order test.

### Fixture Naming

**Source:** `scripts/validate-skill-package.test.mjs` lines 114-130.

Use descriptive fixture names like `validation-final-stale-prose`, `validation-release-evidence-marker`, `validation-route-stability`, and `validation-output-path-stability`. The helper already prefixes temp directories with `xiaohei-validator-`.

### Release Approval Records

**Source:** `RELEASE_CHECKLIST.md` lines 86, 130, 138, 178, 186; parser source lines 663-720, 798-855, 897-948.

Approval records use checkbox status, stable prefix, colon, then slash-delimited fields. Placeholder values are intentionally invalid until a reviewer, ISO date, approval status, directories, release channels, and route-specific outcomes are filled.

### Evidence Counts

**Source:** `scripts/validate-skill-package.test.mjs` lines 203-216, 395-407; Phase 27 verification lines 77-84.

Every added production check requires updating:

- `requiredCheckIds`
- deterministic matrix count
- all `Summary: total=93 passed=93 failed=0 skipped=0` assertions
- Phase 28 `28-VERIFICATION.md` command evidence

## Integration Constraints

- Keep validator dependency-free and use Node built-ins only.
- Keep production validation deterministic: one line per check and one summary footer.
- Add `VAL-*` checks after `LANG-*` and before `BOUNDARY-*`.
- Keep `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` as a release evidence command after default hard-fail behavior exists.
- Preserve approved multilingual categories from `LANGUAGE_POLICY.md`.
- Avoid broad allowlist entries; path scope plus exact token or anchored pattern is required.
- Preserve canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, route ids, route aliases, route statuses, authority paths, raw output paths, and escaped output paths.
- Preserve parser-sensitive release checklist line prefixes and slash-delimited field order.

## Pitfalls

- Adding `VAL-*` checks without updating `requiredCheckIds` will fail the full matrix equality assertion.
- Updating validator counts in only one assertion will leave stale `Summary: total=93...` checks elsewhere.
- Making normal language scan hard-fail while leaving tests only in `LANGUAGE_SCAN_ENFORCE=1` mode will miss D-01 coverage.
- A path-only allowlist entry or `**/*.md` scope is already rejected by `validateLanguageAllowlistShape`.
- Changing release checklist headings can break generated-sample section splitting for Ferris and Sealos.
- Changing slash-delimited release records can silently move fields into the wrong parser slot.
- Phase 28 verification must record final release evidence; Phase 27 evidence is only an analog.

## No Analog Found

None. All likely Phase 28 files have exact analogs in Phase 27 evidence, the validator, the validator tests, or the release checklist.

## Metadata

**Analog search scope:** `scripts/`, `RELEASE_CHECKLIST.md`, `.planning/phases/27-public-documentation-and-example-migration/`, `.planning/codebase/`
**Files scanned:** 10 required files plus UAT analog discovery
**Pattern extraction date:** 2026-06-15
