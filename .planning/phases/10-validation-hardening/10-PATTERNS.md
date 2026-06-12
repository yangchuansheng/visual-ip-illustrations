# Phase 10: Validation Hardening - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 2 implementation files plus current route, Tom pack, public docs, metadata, NOTICE, release checklist, and Phase 4/6-9 artifacts
**Analogs found:** 12 / 12

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `scripts/validate-skill-package.mjs` route checks | utility | file-I/O + transform | `ROUTE-TOM-001`, `ROUTE-REFS-001`, `ROUTE-PATHS-001` in `scripts/validate-skill-package.mjs` | exact |
| `scripts/validate-skill-package.mjs` Tom pack checks | utility | file-I/O + transform | `IP-XH-001`, `IP-LB-001`, `RIGHTS-TOM-001` in `scripts/validate-skill-package.mjs` | exact |
| `scripts/validate-skill-package.mjs` docs/metadata checks | utility | file-I/O + transform | `DOC-PATHS-001`, `DOC-TOM-001`, `NOTICE-TOM-001`, `RELEASE-TOM-001` | exact |
| `scripts/validate-skill-package.mjs` leakage checks | utility | file-I/O + transform | `BOUNDARY-IMG-001`, `BOUNDARY-TOM-IMG-001`, `combinedText()` | role-match |
| `scripts/validate-skill-package.mjs` public asset gate | utility | file-I/O + transform | `imageAssetPaths()`, `BOUNDARY-TOM-IMG-001` | exact |
| `scripts/validate-skill-package.mjs` parser/helper extraction | utility | transform | `parseMarkdownTable()`, `splitRouteCell()`, `outputPathTokens()`, safe path helpers | exact |
| `scripts/validate-skill-package.test.mjs` check-order tests | test | request-response process execution | `requiredCheckIds`, stable order tests, full matrix test | exact |
| `scripts/validate-skill-package.test.mjs` fixture mutation tests | test | file-I/O + process execution | Task 2 fixture test and Tom fixture test | exact |
| `scripts/validate-skill-package.test.mjs` parser helper tests | test | transform | `parser helpers expose current package contract primitives` | exact |
| `README.md` marker text, if needed | documentation | file-I/O marker source | `DOC-TOM-001`, Phase 09 README verification | role-match |
| `examples/prompts.md` marker text, if needed | documentation | file-I/O marker source | `SMOKE-*`, Phase 09 prompt verification | role-match |
| `RELEASE_CHECKLIST.md` marker text, if needed | documentation | file-I/O marker source | `RELEASE-TOM-001`, `BOUNDARY-TOM-IMG-001` | role-match |

## Pattern Assignments

### `scripts/validate-skill-package.mjs` Route Check Hardening

**Analog:** `scripts/validate-skill-package.mjs`

**Imports and constants pattern** (lines 1-12):
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
```

**Route parser helpers** (lines 77-82, 249-263):
```javascript
function splitRouteCell(value) {
  return value
    .split(";")
    .map((item) => stripWrappingTicks(item))
    .filter(Boolean);
}

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

**Tom route contract check analog** (lines 526-567):
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
  if (row.default !== "false") {
    throw new Error(`${ROUTING_FILE} expected tom default=false; observed ${row.default || "missing"}`);
  }
  if (row.output_suffix !== "tom") {
    throw new Error(`${ROUTING_FILE} expected tom output_suffix=tom; observed ${row.output_suffix || "missing"}`);
  }
  assertArrayIncludes(references, [
    "references/ips/tom/index.md",
    "references/ips/tom/rights.md",
    "references/ips/tom/style-dna.md",
    "references/ips/tom/tom-ip.md",
    "references/ips/tom/composition-patterns.md",
    "references/ips/tom/prompt-template.md",
    "references/ips/tom/qa-checklist.md",
  ], ROUTING_FILE, "Tom locked required reference markers");
});
```

**Exact target source:** `ian-xiaohei-illustrations/references/routing.md` lines 16-20 and 32-40. Keep Tom row checks tied to table columns, aliases, `default=false`, `output_suffix=tom`, seven required references, attribution boundary, and `gated-authorized`.

### `scripts/validate-skill-package.mjs` Tom Canonical Pack Checks

**Analog:** `scripts/validate-skill-package.mjs`

**Pack file list analog** (lines 275-310):
```javascript
function requiredPackageFiles() {
  return [
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    ROUTING_FILE,
    path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
    ...xiaoheiOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
    ...littleboxOperationalRefs(),
    ...legacyXiaoheiRefs().map((item) => item.root),
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "LICENSE",
  ];
}
```

Add a `tomOperationalRefs()` helper using the Littlebox/Xiaohei helper shape and include:

```text
references/ips/tom/index.md
references/ips/tom/rights.md
references/ips/tom/style-dna.md
references/ips/tom/tom-ip.md
references/ips/tom/composition-patterns.md
references/ips/tom/prompt-template.md
references/ips/tom/qa-checklist.md
```

**Pack marker analog** (lines 710-744):
```javascript
defineCheck("IP-LB-001", "Littlebox canonical pack preserves objective IP markers", () => {
  const text = combinedText([
    path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
    ...littleboxOperationalRefs(),
  ]);
  assertIncludes(text, path.join(REFERENCES_DIR, "ips", "littlebox"), [
    "Littlebox state: closed",
    "#E3F2FD",
    "#E6E6FA",
    "prompts stay English",
    "user's language",
    "closed-only",
    "front-left three-quarter",
    "amber seam tape",
    "jagged",
    "side-seam twig arms",
    "assets/<article-slug>-littlebox/",
    "wrong tape placement",
  ], "Littlebox closed identity, backgrounds, language, view, tape, arms, output, and QA failure markers");
});
```

**Tom rights check analog** (lines 745-758):
```javascript
defineCheck("RIGHTS-TOM-001", "Tom rights record preserves required Phase 6 rights markers", () => {
  const relativePath = path.join(REFERENCES_DIR, "ips", "tom", "rights.md");
  assertIncludes(requireFile(relativePath), relativePath, [
    "## Source",
    "## Rights Holder",
    "## Authorization Scope",
    "## Allowed Use",
    "## Restricted Use",
    "## Distribution Boundary",
    "## Sample Policy",
    "## Review Owner",
    "gated-authorized",
  ], "Tom rights headings and gated status");
});
```

**Exact target marker sources:**

| Source | Lines | Markers to validate |
|--------|-------|---------------------|
| `ian-xiaohei-illustrations/references/ips/tom/index.md` | 5-16, 28-40 | `gated-authorized`, `assets/<article-slug>-tom/`, `rights.md`, protected failure categories |
| `ian-xiaohei-illustrations/references/ips/tom/rights.md` | 15-22, 36-46, 48-52 | authorization scope, distribution boundary, sample policy, reviewer fields |
| `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` | 22-35, 45-71 | recognition cues, protected-route visual vetoes, stable gates |
| `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` | 28-55, 57-82 | active cognitive action, solo route boundary, failure modes |
| `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` | 61-69, 132-147 | original metaphor, protected route gates, route leakage gate |
| `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` | 17-27, 37-67, 73-132 | planning fields, one-image gate, edit gates, rights-status note, output path |
| `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` | 12-23, 25-50, 64-80 | pass criteria, protected-route checks, iteration moves, delivery judgment |

### `scripts/validate-skill-package.mjs` Docs, Metadata, NOTICE, Release Checks

**Analog:** `scripts/validate-skill-package.mjs`

**Docs token helper** (lines 205-218):
```javascript
export function outputPathTokens() {
  return {
    raw: [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
    ],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
      "assets/&lt;article-slug&gt;-tom/",
    ],
  };
}
```

**Docs check analog** (lines 793-806):
```javascript
defineCheck("DOC-TOM-001", "public docs expose Tom gated route markers", () => {
  const text = combinedText(["README.md", "examples/prompts.md"]);
  assertIncludes(text, "README.md + examples/prompts.md", [
    "gated-authorized",
    "Tom",
    "Tom Cat",
    "Tom and Jerry",
    "汤姆",
    "汤姆猫",
    "ian-xiaohei-illustrations/references/ips/tom/rights.md",
    "assets/<article-slug>-tom/",
    "assets/&lt;article-slug&gt;-tom/",
  ], "Tom status, aliases, rights path, and raw plus escaped output path tokens");
});
```

**NOTICE analog** (lines 829-840):
```javascript
defineCheck("NOTICE-TOM-001", "NOTICE keeps Tom source attribution and permission boundary markers", () => {
  assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
    "Tom Source Attribution and Permission Boundary",
    "Tom from Tom and Jerry",
    "Tom and Jerry / Tom",
    "gated-authorized",
    "ian-xiaohei-illustrations/references/ips/tom/rights.md",
    "Attribution records Tom source identity",
    "Permission is authorization-scope specific",
    "release checklist approval",
    "public-sample gate",
  ], "Tom source attribution, route status, rights record, and permission boundary");
});
```

**Release gate analog** (lines 884-895):
```javascript
defineCheck("RELEASE-TOM-001", "release checklist keeps Tom rights and public sample gate markers", () => {
  assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
    "## Tom Rights and Public Sample Gate",
    "ian-xiaohei-illustrations/references/ips/tom/rights.md",
    "gated-authorized",
    "default=false",
    "assets/<article-slug>-tom/",
    "assets/&lt;article-slug&gt;-tom/",
    "Public rendered Tom samples approved",
    "PENDING / reviewer / date",
  ], "Tom release gate section and pending public sample approval marker");
});
```

**Exact target marker sources:**

| Source | Lines | Markers to validate |
|--------|-------|---------------------|
| `README.md` | 15-20, 59-67, 175-197, 207-214 | Tom route hierarchy, aliases, rights path, raw/escaped output paths, public-sample gate |
| `examples/prompts.md` | 87-143, 145-213, 246-267 | Tom planning/generation/smoke, mixed three-IP groups, route-local refs, path tokens |
| `ian-xiaohei-illustrations/agents/openai.yaml` | 1-6 | all three routes named, Xiaohei default preserved, Tom explicit gated wording, implicit invocation true |
| `NOTICE.md` | 21-30 | source attribution and permission boundary |
| `RELEASE_CHECKLIST.md` | 5-25, 27-35, 43-83 | validator commands, Tom smoke, authorization/status/leakage/public asset/generated sample/final rights gates |

### `scripts/validate-skill-package.mjs` Leakage Checks

**Analog:** `scripts/validate-skill-package.mjs`

**Combined text helper** (lines 345-347):
```javascript
function combinedText(relativePaths) {
  return relativePaths.map((relativePath) => requireFile(relativePath)).join("\n");
}
```

**Boundary check style analog** (lines 896-913):
```javascript
defineCheck("BOUNDARY-TOM-IMG-001", "example asset directories keep Tom rendered assets behind release approval", () => {
  const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
  const pendingPublicSamples = releaseChecklist.includes("PENDING / reviewer / date");
  const matches = imageAssetPaths().filter((relativePath) => /tom|tom-cat|tom-and-jerry|汤姆|汤姆猫/i.test(relativePath));
  if (pendingPublicSamples && matches.length > 0) {
    throw new Error(
      `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Tom assets while approval is PENDING; observed ${matches.join(", ")}`,
    );
  }
});
```

**Recommended leakage helper pattern:**
```javascript
function assertNoMarkers(text, relativePath, markers, relation) {
  const matches = markers.filter((marker) => text.includes(marker));
  if (matches.length > 0) {
    throw new Error(`${relativePath} expected ${relation}; observed leaked marker(s): ${matches.join(", ")}`);
  }
}
```

Apply leakage scans to:

```text
ian-xiaohei-illustrations/references/ips/xiaohei/index.md
ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md
ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md
ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md
ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md
ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md
ian-xiaohei-illustrations/references/ips/littlebox/index.md
ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md
ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md
ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md
ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md
ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md
ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md
ian-xiaohei-illustrations/references/style-dna.md
ian-xiaohei-illustrations/references/xiaohei-ip.md
ian-xiaohei-illustrations/references/composition-patterns.md
ian-xiaohei-illustrations/references/prompt-template.md
ian-xiaohei-illustrations/references/qa-checklist.md
```

Leakage marker set should cover objective terms from Phase 10 context: `Tom Cat`, `Tom and Jerry`, `汤姆猫`, `Warner`, `Warner Bros`, `gated-authorized protected-character route`, `source-frame recreation`, and `default Jerry usage`. Keep exact marker selection narrow and route-local, with `routing.md` handled by the route metadata checks.

### `scripts/validate-skill-package.mjs` Public Asset Boundary

**Analog:** `scripts/validate-skill-package.mjs`

**Directory scan helper** (lines 62-70, 349-356):
```javascript
function sortedDirectoryEntries(relativePath) {
  return fs
    .readdirSync(repoPath(relativePath), { withFileTypes: true })
    .map((entry) => ({
      name: entry.name,
      path: toPosixPath(path.join(relativePath, entry.name)),
      type: entry.isDirectory() ? "directory" : "file",
    }))
    .sort((a, b) => a.path.localeCompare(b.path, "en"));
}

function imageAssetPaths() {
  return [
    ...sortedDirectoryEntries("examples/images").filter((entry) => entry.type === "file").map((entry) => entry.path),
    ...sortedDirectoryEntries(path.join(PACKAGE_DIR, "assets", "examples"))
      .filter((entry) => entry.type === "file")
      .map((entry) => entry.path),
  ].sort((a, b) => a.localeCompare(b, "en"));
}
```

**Boundary analogs:** keep `BOUNDARY-IMG-001` for Littlebox public rendered asset imports and harden `BOUNDARY-TOM-IMG-001` for Tom. Current public directories are `examples/images` and `ian-xiaohei-illustrations/assets/examples`.

The release approval marker lives in `RELEASE_CHECKLIST.md` lines 67-71:
```markdown
- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
- [ ] Public rendered Tom samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
```

### `scripts/validate-skill-package.test.mjs` Check Ordering and Matrix Tests

**Analog:** `scripts/validate-skill-package.test.mjs`

**Required check ID registry** (lines 10-51):
```javascript
const requiredCheckIds = [
  "PKG-SHAPE-001",
  "SKILL-FM-001",
  "SKILL-ROUTE-001",
  // ...
  "RELEASE-TOM-001",
  "BOUNDARY-IMG-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-P5-001",
];
```

**Stable order pattern** (lines 74-121):
```javascript
let lastIndex = -1;
for (const id of expectedIds) {
  const index = result.stdout.indexOf(`[PASS] ${id} `);
  assert.ok(index > lastIndex, `${id} should appear after the previous Task 1 check`);
  lastIndex = index;
}
```

**Full-pass matrix pattern** (lines 246-258):
```javascript
const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
assert.equal(resultLines.length, requiredCheckIds.length);
assert.equal(resultLines.every((line) => line.startsWith("[PASS]")), true);
assert.deepEqual(
  resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
  requiredCheckIds,
);
assert.match(result.stdout, /Summary: total=40 passed=40 failed=0 skipped=0/);
```

Phase 10 must update `requiredCheckIds` and the summary total whenever new checks are added. This file is the contract for stable check ordering.

### `scripts/validate-skill-package.test.mjs` Fixture Mutation Tests

**Analog:** `scripts/validate-skill-package.test.mjs`

**Fixture copy pattern** (lines 167-175):
```javascript
const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-task2-${process.pid}-${Date.now()}`);
cpSync(repoRoot, fixtureRoot, {
  recursive: true,
  filter(source) {
    const relative = path.relative(repoRoot, source);
    return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
  },
});
```

**Targeted mutation pattern** (lines 177-193 and 219-230):
```javascript
const promptTemplatePath = path.join(
  fixtureRoot,
  "ian-xiaohei-illustrations",
  "references",
  "ips",
  "littlebox",
  "prompt-template.md",
);
writeFileSync(
  promptTemplatePath,
  readFileSync(promptTemplatePath, "utf8").replaceAll("Littlebox state: closed", "Littlebox state: sealed"),
  "utf8",
);

const rightsPath = path.join(
  fixtureRoot,
  "ian-xiaohei-illustrations",
  "references",
  "ips",
  "tom",
  "rights.md",
);
writeFileSync(
  rightsPath,
  readFileSync(rightsPath, "utf8").replaceAll("gated-authorized", "pending-review"),
  "utf8",
);
```

Phase 10 fixture tests should mutate one marker per category and assert both check ID and repo-relative path:

| Category | Fixture mutation | Expected failing area |
|----------|------------------|-----------------------|
| Tom route | Replace `Tom Cat` or `output_suffix` in `routing.md` | `ROUTE-TOM-*`, `ROUTE-PATHS-001` |
| Tom pack | Replace `Tom state` or protected-route block in `prompt-template.md` | new Tom prompt/pack check |
| Tom QA | Replace `generic cats` or `default Jerry usage` in `qa-checklist.md` | new Tom QA check |
| Docs | Remove Tom smoke heading in `examples/prompts.md` | new/existing `SMOKE-TOM-*` |
| Metadata | Remove `Tom` from `openai.yaml` description | new agent metadata check |
| Release gate | Replace `Public rendered Tom samples approved` | `RELEASE-TOM-001` or new release check |
| Leakage | Inject `Tom Cat` into Littlebox prompt template | new leakage check |
| Public asset | Create `examples/images/tom-sample.png` while checklist remains pending | `BOUNDARY-TOM-IMG-001` |

### `scripts/validate-skill-package.test.mjs` Parser Helper Tests

**Analog:** `scripts/validate-skill-package.test.mjs`

**Helper import and assertions** (lines 260-283):
```javascript
const validators = await import(`${scriptPath}?test=${Date.now()}`);
const skillText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "SKILL.md"), "utf8");
const routingText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "references", "routing.md"), "utf8");
const readmeText = readFileSync(path.join(repoRoot, "README.md"), "utf8");

const routes = validators.parseMarkdownTable(routingText, "IP Routes");
assert.equal(routes.length, 3);
assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox", "tom"]);
assert.equal(routes[0].output_suffix, "illustrations");
assert.equal(routes[2].output_suffix, "tom");

assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-tom/"));
assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));
```

Add parser tests for semicolon reference splitting through the exported `splitRouteCell()` and, if helper extraction adds public helpers, import them here with assertions against current route rows and Tom output tokens.

## Shared Patterns

### Check Definition and Error Reporting

**Source:** `scripts/validate-skill-package.mjs` lines 220-243, 405-407, 929-939

```javascript
function assertIncludes(text, relativePath, markers, relation) {
  const missing = markers.filter((marker) => !text.includes(marker));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing marker(s): ${missing.join(", ")}`,
    );
  }
}

function assertArrayIncludes(actual, expected, relativePath, relation) {
  const missing = expected.filter((item) => !actual.includes(item));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing item(s): ${missing.join(", ")}`,
    );
  }
}

function defineCheck(id, message, run) {
  return { id, message, run };
}

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

Use repo-relative paths and marker/item wording. Tests already assert `observed missing marker` and specific paths.

### Stable Output Rendering

**Source:** `scripts/validate-skill-package.mjs` lines 373-402

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
```

Keep this section stable. Phase 10 should add checks while preserving rendering semantics.

### Safe Path and Local-Only File Access

**Source:** `scripts/validate-skill-package.mjs` lines 14-60, 326-335, 759-775

Use `repoPath()`, `safePackagePath()`, `safeReferencePath()`, `fileExists()`, and `localMarkdownLinks()` for all file access. Preserve local-only behavior: repository reads, deterministic marker checks, and dependency-free Node execution.

### Historical Phase 4 Boundary

**Source:** `.planning/phases/04-validation-hardening/04-CONTEXT.md` lines 1-6 and `.planning/phases/04-validation-hardening/04-RESEARCH.md` lines 1-6

```markdown
This bounded repair preserves the Phase 4 validator boundary after the v1.1 roadmap reset.
It exists only to keep `BOUNDARY-P5-001` deterministic for Phase 6 verification.

Phase 5 owns broad README refresh, `agents/openai.yaml`, release checklist, D-28, D-29, and D-30.
```

Keep `BOUNDARY-P5-001` and the Phase 4 files stable. Phase 10 may add new checks around it while preserving this historical boundary.

## Stable Sections

These code sections should remain stable unless a test explicitly forces a narrow change:

| File | Lines | Stability Reason |
|------|-------|------------------|
| `scripts/validate-skill-package.mjs` | 1-12 | dependency-free local script imports and core constants |
| `scripts/validate-skill-package.mjs` | 14-60 | repo/package path safety and route reference containment |
| `scripts/validate-skill-package.mjs` | 84-203 | exported parser primitives already covered by tests |
| `scripts/validate-skill-package.mjs` | 205-218 | raw/escaped output path token helper includes all three route paths |
| `scripts/validate-skill-package.mjs` | 373-407 | result collection, render format, check definition |
| `scripts/validate-skill-package.mjs` | 929-960 | deterministic run loop and exported test primitives |
| `scripts/validate-skill-package.test.mjs` | 53-59 | process execution harness |
| `scripts/validate-skill-package.test.mjs` | 74-121 | stable check-order assertion pattern |
| `scripts/validate-skill-package.test.mjs` | 246-258 | full matrix assertion pattern |
| `.planning/phases/04-validation-hardening/04-CONTEXT.md` | 1-6 | `BOUNDARY-P5-001` historical fixture |
| `.planning/phases/04-validation-hardening/04-RESEARCH.md` | 1-6 | `BOUNDARY-P5-001` historical fixture |

## Recommended Plan Split

### Plan 10-01: Tom Route and Parser Hardening

**Write scope:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

**Tasks:**
- Add or refine `tomOperationalRefs()` and route parser assertions.
- Harden Tom route metadata checks for aliases, default, suffix, references, status, attribution context, and path tokens.
- Extend parser helper tests for three-route behavior, semicolon reference splitting, and Tom path tokens.

**Depends on:** Current `routing.md` and existing parser helpers.

### Plan 10-02: Tom Pack Marker and Docs Surface Checks

**Write scope:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`; docs marker text only when a check exposes a real missing marker.

**Tasks:**
- Add Tom pack existence/readability checks.
- Add Tom prompt field, QA failure category, rights-boundary, edit gate, and output reminder checks.
- Harden README, examples, `openai.yaml`, NOTICE, and release checklist marker checks.
- Add fixture mutations for Tom pack, docs, metadata, NOTICE, and release failures.

**Depends on:** Plan 10-01 helper list and stable check ID order.

### Plan 10-03: Leakage and Public Asset Gates

**Write scope:** `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`

**Tasks:**
- Add `assertNoMarkers()` style helper for leakage marker scans.
- Scan Xiaohei canonical pack, Littlebox canonical pack, and legacy Xiaohei root refs for Tom identity and Warner rights leakage.
- Harden public Tom asset gate using `imageAssetPaths()` and release checklist approval marker.
- Add fixture tests that inject Tom leakage into Littlebox and add a Tom-named public asset while approval stays pending.

**Depends on:** Plan 10-02 marker vocabulary and public asset gate source lines.

### Plan 10-04: Check Ordering, Full Pass, and Documentation Touchups

**Write scope:** `scripts/validate-skill-package.test.mjs`; `scripts/validate-skill-package.mjs` only for final check placement; docs only for strictly missing markers.

**Tasks:**
- Update `requiredCheckIds` to the final Phase 10 check order.
- Update the full-pass summary count from `40` to the new total.
- Run `node scripts/validate-skill-package.mjs`.
- Run `node --test scripts/validate-skill-package.test.mjs`.
- Run `git diff --check`.

**Depends on:** Plans 10-01 through 10-03.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | n/a | n/a | Existing validator and Node test harness provide direct analogs for every Phase 10 surface. |

## Metadata

**Analog search scope:** `scripts/`, `ian-xiaohei-illustrations/references/`, `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `.planning/phases/04-validation-hardening/`, `.planning/phases/06-*` through `.planning/phases/09-*`, `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`
**Files scanned:** 24 primary files plus Phase 6-9 grep sweep
**Pattern extraction date:** 2026-06-13
