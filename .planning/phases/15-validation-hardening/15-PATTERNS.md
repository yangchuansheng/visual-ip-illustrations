# Phase 15: Validation Hardening - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 10
**Analogs found:** 10 / 10

## Target Files and Roles

| Target File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `scripts/validate-skill-package.mjs` | utility | file-I/O, transform, request-response CLI | `scripts/validate-skill-package.mjs` Tom/Ferris source checks | exact |
| `scripts/validate-skill-package.test.mjs` | test | file-I/O, batch | `scripts/validate-skill-package.test.mjs` existing fixture tests | exact |
| `.planning/phases/15-validation-hardening/15-01-PLAN.md` | plan | batch | `.planning/phases/14-docs-examples-and-release-surface/14-01-PLAN.md` | exact |
| `.planning/phases/15-validation-hardening/15-02-PLAN.md` | plan | batch | `.planning/phases/14-docs-examples-and-release-surface/14-02-PLAN.md` plus 14-01 shape | role-match |
| `.planning/phases/15-validation-hardening/15-03-PLAN.md` | plan | batch | `.planning/phases/14-docs-examples-and-release-surface/14-04-PLAN.md` plus verification/UAT reports | role-match |
| `.planning/phases/15-validation-hardening/15-01-SUMMARY.md` | summary | evidence artifact | `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` | exact |
| `.planning/phases/15-validation-hardening/15-02-SUMMARY.md` | summary | evidence artifact | `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` | exact |
| `.planning/phases/15-validation-hardening/15-03-SUMMARY.md` | summary | evidence artifact | `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` | exact |
| `.planning/phases/15-validation-hardening/15-VERIFICATION.md` | verification | evidence artifact | `.planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md` | exact |
| `.planning/phases/15-validation-hardening/15-UAT.md` | UAT | evidence artifact | `.planning/phases/14-docs-examples-and-release-surface/14-UAT.md` | exact |

## Existing Analogs

### `scripts/validate-skill-package.mjs`

Use the current validator as its own implementation analog. Preserve imports and dependency-free runtime from lines 1-3:

```javascript
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
```

Preserve deterministic result rendering from lines 503-532:

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

  skip(id, message) {
    this.items.push({ status: "SKIP", id, message });
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
```

Use the ordered check matrix shape from lines 535-540:

```javascript
function defineCheck(id, message, run) {
  return { id, message, run };
}

const checks = [
  defineCheck("PKG-SHAPE-001", "required skill package files exist and are readable", () => {
```

### `scripts/validate-skill-package.test.mjs`

Preserve Node built-in test imports and local process execution from lines 1-6:

```javascript
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";
```

Preserve fixture-copy and mutation helpers from lines 81-104:

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

### Phase Plan Files

Copy the Phase 14 plan frontmatter and task contract from `.planning/phases/14-docs-examples-and-release-surface/14-01-PLAN.md` lines 1-13 and 39-49:

```markdown
---
phase: 14-docs-examples-and-release-surface
plan: "01"
type: execute
wave: 1
depends_on: ["13-01"]
files_modified:
  - README.md
  - .planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md
autonomous: true
requirements: [FDOC-01, FDOC-05]
user_setup: []
must_haves:
```

```markdown
<objective>
Update README public Ferris route docs, output path, source context, and trademark boundary.

Purpose: Users and maintainers can inspect Ferris from the public README with the same route contract implemented in Phase 13 and the same source/trademark boundary recorded in Phase 11 and Phase 12.
Output: README Ferris route section, canonical pack list, quick prompts, workflow, directory map, and maintainer validation wording aligned to FDOC-01 and FDOC-05.
</objective>

<execution_context>
@/Users/longnv/.codex/gsd-core/workflows/execute-plan.md
@/Users/longnv/.codex/gsd-core/templates/summary.md
</execution_context>
```

Plan 15-01 should target validator implementation. Plan 15-02 should target Node tests. Plan 15-03 should target verification/UAT artifacts and final evidence.

### Phase Summary Files

Copy the summary metadata and evidence sections from `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` lines 1-40, 54-84, and 103-113. Keep `key-files`, `requirements-completed`, command evidence, and self-check sections.

### Phase Verification and UAT Files

Copy verification report structure from `.planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md` lines 1-18, 20-32, 67-81, and 89-97. For Phase 15, replace deferred validator baselines with passing evidence for:

```text
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Copy UAT structure from `.planning/phases/14-docs-examples-and-release-surface/14-UAT.md` lines 1-12, 18-43, and 45-62. Phase 15 UAT should record validator CLI shape, parser behavior, public asset gate behavior, generated sample gate behavior, route leakage behavior, and local evidence.

## Reusable Validator Patterns

### Route Row Validation

Copy Tom route validation structure from `scripts/validate-skill-package.mjs` lines 666-707 when updating Ferris:

```javascript
defineCheck("ROUTE-TOM-001", "routing.md preserves the Tom gated route contract", () => {
  const row = routeById("tom");
  const references = routeReferencePaths(row);
  assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
    "Tom",
    "Tom Cat",
    "Tom and Jerry",
    "汤姆",
    "汤姆猫",
    "tom",
    "gated-authorized",
    "attribution records source identity",
    "permission remains authorization-scope specific",
    "references/ips/tom/rights.md",
  ], "Tom display name, aliases, suffix, attribution boundary, rights record, and status");
```

For Ferris, replace expected references with the seven files from `routing.md` line 25:

```markdown
`references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md`
```

### Required Reference Resolver

Copy `ROUTE-REFS-001` from `scripts/validate-skill-package.mjs` lines 761-787 and update `expectedCounts` to Ferris `7`:

```javascript
const expectedCounts = { xiaohei: 5, littlebox: 6, tom: 7, ferris: 1 };
const expectedCount = expectedCounts[row.id];
if (references.length !== expectedCount) {
  throw new Error(
    `${ROUTING_FILE} expected ${row.id} required_references count=${expectedCount}; observed ${references.length}`,
  );
}
```

### Ferris Pack Checks

Use Tom pack checks as the analog. `REFS-TOM-001` lines 837-850 shows file readability plus per-file marker validation:

```javascript
const tomFiles = [
  path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
  ...tomOperationalRefs(),
];
assertReadableFiles(tomFiles, path.join(REFERENCES_DIR, "ips", "tom"), "Tom canonical pack files");
for (const relativePath of tomFiles) {
  const text = requireFile(relativePath);
  assertIncludes(text, relativePath, ["gated-authorized"], "Tom route status marker");
```

Ferris marker source files:

- `ian-xiaohei-illustrations/references/ips/ferris/index.md` lines 5-11 and 32-49 for status, output path, source/trademark note, public gate, and eight failure names.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` lines 13-31 for planning fields and lines 33-70 for generation gate.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` lines 13-27 for pass gates and lines 29-61 for failure markers.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` lines 24-29 and 55-59 for trademark and public sample policy.

## Reusable Test Patterns

### Stable Check Matrix

Update `requiredCheckIds` in `scripts/validate-skill-package.test.mjs` lines 10-64 after validator IDs settle. Keep IDs in exact CLI order.

### Smoke Output

Copy smoke assertion style from lines 115-126:

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
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});
```

### Full Matrix Assertion

Copy full matrix pattern from `scripts/validate-skill-package.test.mjs` lines 303-316, rename Phase 10 to Phase 15, and update final total:

```javascript
const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
assert.equal(resultLines.length, requiredCheckIds.length);
assert.equal(resultLines.every((line) => line.startsWith("[PASS]")), true);
assert.deepEqual(
  resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
  requiredCheckIds,
);
```

## Release Approval Parser Pattern

Current shared parser lives in `scripts/validate-skill-package.mjs` lines 245-326. Preserve the returned shape so existing gates keep working:

```javascript
return {
  found: true,
  checked,
  status,
  reviewer,
  reviewDate,
  approvalStatus,
  allowedDirectories,
  releaseChannels,
  reviewerPresent,
  datePresent,
  approvalStatusPresent,
  allowedDirectoriesPresent,
  releaseChannelsPresent,
  complete,
};
```

Tom uses the legacy approval line from `RELEASE_CHECKLIST.md` line 72. Ferris uses the Phase 14-specific public asset line at line 116 and generated sample line at line 124:

```markdown
- [ ] Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.
```

For tests, fork the helper style from `scripts/validate-skill-package.test.mjs` lines 107-113 into Ferris-specific helpers that include the trademark outcome field.

## Route Leakage Pattern

Copy `BOUNDARY-TOM-LEAK-001` from `scripts/validate-skill-package.mjs` lines 1301-1324. For Ferris, scan Xiaohei, Littlebox, Tom, and legacy Xiaohei references, using Ferris markers from `routing.md` lines 11, 14-16, and Ferris pack markers from `index.md` lines 5-11:

```javascript
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
```

Ferris leak markers should include `Ferris`, `Rustacean`, `Rust mascot`, `Rust crab`, `Rust 螃蟹`, `source-reviewed`, `Rust trademark boundary`, `references/ips/ferris`, and `assets/<article-slug>-ferris/`.

## Evidence Artifact Pattern

Use summary frontmatter from `.planning/phases/14-docs-examples-and-release-surface/14-01-SUMMARY.md` lines 1-40. Use verification evidence tables from `.planning/phases/14-docs-examples-and-release-surface/14-VERIFICATION.md` lines 67-81 and requirement coverage from lines 89-97.

Phase 15 final evidence should record:

- `node scripts/validate-skill-package.mjs`: exit 0, all `[PASS]`, final `Summary: total=<N> passed=<N> failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs`: exit 0, final test count, `fail 0`.
- `git diff --check`: exit 0.
- Scope: validator/test changes in 15-01 and 15-02; planning evidence in 15-03.

## Risks for Planner

- Check totals are implementation-derived. Update `requiredCheckIds` and summary assertions after validator IDs settle.
- Ferris approval parsing has a different record shape from Tom because it includes `trademark and endorsement-safe wording outcome`.
- Public asset gate scans public sample directories. Generated workspace samples under `assets/<article-slug>-ferris/` require the generated sample policy parser, not the public rendered asset parser.
- Route leakage scan should stay route-local. Public docs, routing docs, NOTICE, and release checklist are allowed to mention all routes.
- Product docs churn should stay limited to real source inconsistencies found by validator expectations.
