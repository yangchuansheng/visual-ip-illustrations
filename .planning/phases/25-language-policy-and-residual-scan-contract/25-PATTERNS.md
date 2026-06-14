# Phase 25: Language Policy and Residual Scan Contract - Pattern Map

**Mapped:** 2026-06-14
**Files analyzed:** 3
**Analogs found:** 3 / 3

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `LANGUAGE_POLICY.md` | config | request-response | `RELEASE_CHECKLIST.md` | role-match |
| `scripts/validate-skill-package.mjs` | utility | batch | `scripts/validate-skill-package.mjs` existing checks | exact |
| `scripts/validate-skill-package.test.mjs` | test | batch | `scripts/validate-skill-package.test.mjs` existing fixture tests | exact |

## Pattern Assignments

### `LANGUAGE_POLICY.md` (config, request-response)

**Analog:** `RELEASE_CHECKLIST.md`

**Document structure pattern** (lines 1-25):

```markdown
# Release Checklist

用于发布前确认 multi-IP skill 包、公开文档、归因和边界保持一致。

## Automated Gates

- [ ] Run the package validator:

```bash
node scripts/validate-skill-package.mjs
```

- [ ] Run validator tests:

```bash
node --test scripts/validate-skill-package.test.mjs
```
```

Copy the root-level policy-document shape: ATX title, short authority sentence, compact sections, and fenced command examples where commands are part of the contract.

**Compatibility checklist pattern** (lines 31-40):

```markdown
## Release 1.4 Rebrand Review

- [ ] Confirm public docs lead with `Visual IP Illustrations` as the current release 1.4 public identity.
- [ ] Confirm normal-flow examples use canonical invocation `$visual-ip-illustrations`.
- [ ] Confirm `$ian-xiaohei-illustrations` remains documented as the release 1.4 legacy compatibility alias.
- [ ] Confirm install guidance uses `git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations` and `cd visual-ip-illustrations`.
- [ ] Confirm the installable package directory remains `ian-xiaohei-illustrations/`.
- [ ] Scan README, examples, NOTICE, and release materials for stale old-name-only first-view public surfaces.
- [ ] Confirm route behavior, route statuses, authority paths, raw output path tokens, and escaped output path tokens remain stable for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
```

Adapt this to policy prose by naming every English-default surface from LANG-01 and every compatibility surface from D-11 through D-13.

**Attribution/source authority pattern** (from `NOTICE.md`, lines 34-43):

```markdown
## Ferris Source Attribution and Rust Trademark Boundary

Ferris source context records Ferris the Rustacean from `rustacean.net` and Karen Rustad Tolva for the `ferris` route.

- Source context: `rustacean.net` / Ferris the Rustacean / Karen Rustad Tolva
- Route status: `source-reviewed`
- Source record and operational authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Attribution context: Ferris source, author, and copyright-waiver context for route metadata, documentation, and release review
```

Use the same compact authority-record style for approved multilingual exceptions: category, path scope, exact token or anchored pattern, rationale, and remediation target.

---

### `scripts/validate-skill-package.mjs` (utility, batch)

**Analog:** `scripts/validate-skill-package.mjs`

**Imports and path constants pattern** (lines 1-12):

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
```

Add `LANGUAGE_POLICY_FILE = "LANGUAGE_POLICY.md"` near these constants. Keep built-in Node modules only.

**File and path helper pattern** (lines 14-43):

```javascript
function repoPath(...segments) {
  return path.join(REPO_ROOT, ...segments);
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function readUtf8(relativePath) {
  return fs.readFileSync(repoPath(relativePath), "utf8");
}

function fileExists(relativePath) {
  return fs.existsSync(repoPath(relativePath)) && fs.statSync(repoPath(relativePath)).isFile();
}

function requireFile(relativePath) {
  if (!fileExists(relativePath)) {
    throw new Error(`${relativePath} is missing`);
  }
  return readUtf8(relativePath);
}
```

Reuse these helpers for policy reads and scan targets. Return repository-relative POSIX paths in language findings.

**Assertion and error-message pattern** (lines 622-637):

```javascript
function assertIncludes(text, relativePath, markers, relation) {
  const missing = markers.filter((marker) => !text.includes(marker));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing marker(s): ${missing.join(", ")}`,
    );
  }
}

function assertNoMarkers(text, relativePath, markers, relation) {
  const present = markers.filter((marker) => text.includes(marker));
  if (present.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed forbidden marker(s): ${present.join(", ")}`,
    );
  }
}
```

Format `LANG-*` failures with the same `expected ...; observed ...` shape. For scan findings, include `status`, `category`, `path:line`, `excerpt` or `token`, and `remediation`.

**Route-derived scan target pattern** (lines 653-667):

```javascript
function routeRows() {
  return parseMarkdownTable(requireFile(ROUTING_FILE), "IP Routes");
}

function routeById(id) {
  const row = routeRows().find((route) => route.id === id);
  if (!row) {
    throw new Error(`${ROUTING_FILE} expected route row id=${id}; observed row is missing`);
  }
  return row;
}

function routeReferencePaths(row) {
  return splitRouteCell(row.required_references ?? "");
}
```

Use this pattern to build residual-language scan targets from `routing.md` required references, plus public docs, `SKILL.md`, `openai.yaml`, and legacy Xiaohei refs.

**Results and check registration pattern** (lines 956-992):

```javascript
class Results {
  constructor() {
    this.items = [];
  }

  pass(id, message) {
    this.items.push({ status: "PASS", id, message });
  }

  fail(id, message) {
    this.items.push({ status: "FAIL", id, message });
  }

  render() {
    for (const item of this.items) {
      console.log(`[${item.status}] ${item.id} ${item.message}`);
    }
    const total = this.items.length;
    const passed = this.items.filter((item) => item.status === "PASS").length;
    const failed = this.items.filter((item) => item.status === "FAIL").length;
    const skipped = this.items.filter((item) => item.status === "SKIP").length;
    console.log(`Summary: total=${total} passed=${passed} failed=${failed} skipped=${skipped}`);
    if (failed > 0) {
      process.exitCode = 1;
    }
  }
}

function defineCheck(id, message, run) {
  return { id, message, run };
}

const checks = [
```

Add stable `LANG-POLICY-*` and `LANG-SCAN-*` checks inside `checks`. Existing output contract is one line per check plus deterministic summary.

**Marker check pattern** (lines 2482-2489):

```javascript
defineCheck("REBRAND-PATH-001", "runtime and docs preserve rebrand output path tokens", () => {
  const tokens = outputPathTokens();
  const allTokens = [...tokens.raw, ...tokens.escaped];
  assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, allTokens, "SKILL raw and escaped route output path tokens");
  assertIncludes(requireFile("README.md"), "README.md", allTokens, "README raw and escaped route output path tokens");
  assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", allTokens, "examples raw and escaped route output path tokens");
  assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, allTokens, "routing raw and escaped route output path tokens");
}),
```

Use this for `LANG-POLICY-001` and `LANG-POLICY-002`: required default-language surfaces and approved exception categories must be literal markers in `LANGUAGE_POLICY.md`.

**Boundary scan pattern** (lines 2547-2570):

```javascript
defineCheck("BOUNDARY-TOM-LEAK-001", "Xiaohei and Littlebox references keep Tom protected-route markers isolated", () => {
  const leakMarkers = [
    "Tom Cat",
    "Tom and Jerry",
    "汤姆猫",
    "Warner Bros",
    "protected-character route",
    "default Jerry usage",
    "broad cast expansion",
    "source-frame recreation",
    "gated-authorized",
    "references/ips/tom",
    "assets/<article-slug>-tom/",
  ];
  const scannedPaths = [
    path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
    ...xiaoheiOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
    ...littleboxOperationalRefs(),
    ...legacyXiaoheiRefs().map((item) => item.root),
  ];
  for (const relativePath of scannedPaths) {
    assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Tom protected-route text leakage");
  }
}),
```

Adapt this to a line-based Han-character scan: enumerate scan targets, inspect line by line, classify approved allowlist findings and stale findings, then fail on stale findings according to the Phase 25 transitional contract selected by the planner.

---

### `scripts/validate-skill-package.test.mjs` (test, batch)

**Analog:** `scripts/validate-skill-package.test.mjs`

**Imports and stable check-id list pattern** (lines 1-10):

```javascript
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

const repoRoot = path.resolve(import.meta.dirname, "..");
const scriptPath = path.join(repoRoot, "scripts", "validate-skill-package.mjs");
const requiredCheckIds = [
```

Append new `LANG-*` ids to `requiredCheckIds` in the same stable-order contract.

**Fixture helper pattern** (lines 117-147):

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

function runFixtureValidator(fixtureRoot) {
  return spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });
}

function replaceInFixture(fixtureRoot, relativePath, searchValue, replaceValue) {
  const absolutePath = path.join(fixtureRoot, relativePath);
  const original = readFileSync(absolutePath, "utf8");
  assert.ok(original.includes(searchValue), `${relativePath} should contain fixture marker ${searchValue}`);
  writeFileSync(absolutePath, original.replace(searchValue, replaceValue), "utf8");
}
```

Use `copyFixture`, `runFixtureValidator`, and `replaceInFixture` for missing policy markers, stale Chinese prose injection, and approved token preservation.

**Deterministic smoke pattern** (lines 198-211):

```javascript
test("validator command prints deterministic harness smoke logs", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  assert.match(result.stdout, /^\[PASS\] PKG-SHAPE-001 /m);
  assert.match(result.stdout, /\[PASS\] SKILL-FM-001 /);
  assert.match(result.stdout, /\[PASS\] SKILL-ROUTE-001 /);
  assert.match(result.stdout, /\[PASS\] AGENT-SHAPE-001 /);
  assert.match(result.stdout, /\[PASS\] AGENT-TOM-001 /);
  assert.match(result.stdout, /\[PASS\] ROUTE-TABLE-001 /);
  assert.match(result.stdout, /\[PASS\] ROUTE-FERRIS-001 /);
  assert.match(result.stdout, /\[PASS\] SMOKE-FERRIS-001 /);
  assert.match(result.stdout, /Summary: total=89 passed=89 failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});
```

Update the summary count after adding `LANG-*` checks. Add explicit assertions for representative `LANG-POLICY-*` and `LANG-SCAN-*` pass lines.

**Stable-order test pattern** (lines 252-265):

```javascript
test("validator reports Task 2 contract checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = requiredCheckIds.slice(requiredCheckIds.indexOf("PROMPT-XH-001"));

  let lastIndex = result.stdout.indexOf("[PASS] LEGACY-XH-002 ");
  assert.ok(lastIndex >= 0, "Task 2 checks should follow Task 1 checks");
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous Task 2 check`);
    lastIndex = index;
  }
});
```

Add a Phase 25 stable-order test or extend the existing order test so `LANG-*` ids occupy one deterministic block.

**Failure fixture pattern** (lines 432-445):

```javascript
test("validator fixture rejects missing canonical runtime identity", () => {
  const fixtureRoot = copyFixture("rebrand-runtime-canonical");
  try {
    replaceAllInFixture(fixtureRoot, path.join("ian-xiaohei-illustrations", "SKILL.md"), "$visual-ip-illustrations", "$legacy-only");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/SKILL\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): \$visual-ip-illustrations/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

Create equivalent fixtures for `LANG-POLICY-001`, `LANG-POLICY-002`, `LANG-SCAN-001`, and `LANG-SCAN-002`. Assert check id, path, `path:line`, category, token/excerpt, and remediation text.

## Shared Patterns

### Dependency-Free Validator

**Source:** `scripts/validate-skill-package.mjs`

**Apply to:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

Use only built-in Node modules and synchronous filesystem operations, matching lines 1-3 and 30-43.

### Stable Check IDs

**Source:** `scripts/validate-skill-package.mjs`

**Apply to:** all validator additions

Register every new behavior with `defineCheck(id, message, run)` and keep output in `[PASS] ID message` / `[FAIL] ID message: detail` form, matching lines 973-989 and 2727-2737.

### Marker-Based Policy Enforcement

**Source:** `scripts/validate-skill-package.mjs`

**Apply to:** `LANGUAGE_POLICY.md` checks

Use `assertIncludes` with concrete marker arrays, matching lines 622-627 and 2482-2489.

### Route and Boundary Preservation

**Source:** `scripts/validate-skill-package.mjs`

**Apply to:** language scan allowlist, compatibility surfaces

Use route table helpers and explicit marker arrays to preserve aliases, statuses, authority paths, and output suffixes, matching lines 653-667, 1370-1390, and 2547-2570.

### Fixture Mutation Tests

**Source:** `scripts/validate-skill-package.test.mjs`

**Apply to:** all `LANG-*` tests

Copy the repo to a temp fixture, mutate one marker or inject one line, run the validator inside that fixture, assert nonzero status and actionable output, then remove the fixture in `finally`, matching lines 117-147 and 432-445.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | - | - | Every Phase 25 file has an exact or role-match analog in the current repository. |

## Metadata

**Analog search scope:** `scripts/`, root Markdown docs, `AGENTS.md`, project skill directories
**Files scanned:** 8
**Pattern extraction date:** 2026-06-14
