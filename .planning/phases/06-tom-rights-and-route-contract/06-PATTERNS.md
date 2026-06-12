# Phase 6: Tom Rights and Route Contract - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 9
**Analogs found:** 9 / 9

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/references/ips/tom/rights.md` | reference | request-response | `ian-xiaohei-illustrations/references/ips/littlebox/index.md` plus `NOTICE.md` | role-match |
| `ian-xiaohei-illustrations/references/routing.md` | config | request-response | `ian-xiaohei-illustrations/references/routing.md` existing route rows | exact |
| `NOTICE.md` | config | request-response | `NOTICE.md` Littlebox attribution section | exact |
| `README.md` | component | request-response | `README.md` visual IP and route reference sections | exact |
| `examples/prompts.md` | test | request-response | `examples/prompts.md` route smoke prompts | exact |
| `RELEASE_CHECKLIST.md` | test | batch | `RELEASE_CHECKLIST.md` release gates | exact |
| `scripts/validate-skill-package.mjs` | utility | batch | existing marker checks in `scripts/validate-skill-package.mjs` | exact |
| `scripts/validate-skill-package.test.mjs` | test | batch | existing `node:test` validator tests | exact |
| `.planning/phases/06-tom-rights-and-route-contract/06-PATTERNS.md` | config | transform | prior GSD phase artifact shape from requested output format | role-match |

## Pattern Assignments

### `ian-xiaohei-illustrations/references/ips/tom/rights.md` (reference, request-response)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/index.md` for IP-pack placement and `NOTICE.md` for rights-source metadata.

**Placement pattern** (from structure guidance):
```text
ian-xiaohei-illustrations/references/ips/<route>/
```

**Required Phase 6 shape:**
```markdown
# Tom Rights Record

## Source

## Rights Holder

## Authorization Scope

## Allowed Use

## Restricted Use

## Distribution Boundary

## Sample Policy

## Review Owner
```

Use compact ATX headings and short bullets, matching repository reference-doc style. Keep the document as a maintainer audit artifact. Include concrete review facts and source context; keep final operational style, identity, composition, prompt, and QA files for Phase 7.

---

### `ian-xiaohei-illustrations/references/routing.md` (config, request-response)

**Analog:** `ian-xiaohei-illustrations/references/routing.md`

**Table contract pattern** (lines 13-18):
```markdown
## IP Routes

| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `xiaohei` | Xiaohei | `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei` | `true` | `illustrations` | `references/ips/xiaohei/style-dna.md`; `references/ips/xiaohei/xiaohei-ip.md`; `references/ips/xiaohei/composition-patterns.md`; `references/ips/xiaohei/prompt-template.md`; `references/ips/xiaohei/qa-checklist.md` | Ian Xiaohei existing package | `active` |
| `littlebox` | Littlebox | `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton` | `false` | `littlebox` | `references/ips/littlebox/style-dna.md`; `references/ips/littlebox/littlebox-ip.md`; `references/ips/littlebox/composition-patterns.md`; `references/ips/littlebox/language-and-labels.md`; `references/ips/littlebox/prompt-template.md`; `references/ips/littlebox/qa-checklist.md` | 5km Littlebox Illustrations by okooo5km; source https://github.com/okooo5km/5km-littlebox-illustrations; MIT; inspected commit 37cd93e | `active` |
```

**Tom row pattern to add:**
```markdown
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific | `gated-authorized` |
```

**Output path pattern** (lines 30-37):
```markdown
- `xiaohei` 输出目录保持为 `assets/<article-slug>-illustrations/`。
- `littlebox` 输出目录为 `assets/<article-slug>-littlebox/`。
- 混合 IP 请求按 IP 分成 separate route groups：`xiaohei` 写入 `assets/<article-slug>-illustrations/`，`littlebox` 写入 `assets/<article-slug>-littlebox/`。
```

Add Tom as a protected route with `assets/<article-slug>-tom/` and keep Xiaohei as the only `default=true` route.

---

### `NOTICE.md` (config, request-response)

**Analog:** `NOTICE.md`

**Attribution section pattern** (lines 9-19):
```markdown
## Littlebox Source Attribution

Littlebox source material was adapted from `5km Littlebox Illustrations` by `okooo5km`.

- Source repository: <https://github.com/okooo5km/5km-littlebox-illustrations>
- License context: MIT
- Inspected commit: `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`
- Short commit: `37cd93e`
- Source copyright: `Copyright (c) 2026 okooo5km`

When redistributing or adapting Littlebox-derived documentation, credit `okooo5km` or the `5km Littlebox Illustrations` source project in derived documentation.
```

**Tom section pattern to add:**
```markdown
## Tom Source Attribution and Permission Boundary

Tom source context: Tom from Tom and Jerry.

- Source context: Tom and Jerry / Tom
- Route status: `gated-authorized`
- Rights record: `ian-xiaohei-illustrations/references/ips/tom/rights.md`

Attribution records source identity. Permission is authorization-scope specific and is governed by the Tom rights record, release checklist approval, and public-sample gate.
```

Keep attribution and permission as separate paragraphs or bullets so reviewers can audit source context and authorization scope independently.

---

### `README.md` (component, request-response)

**Analog:** `README.md`

**Supported route wording pattern** (lines 15-20):
```markdown
当前支持两个视觉 IP：

- **Xiaohei**：默认视觉 IP。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：显式可选视觉 IP。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。

核心价值：用户可以选择视觉 IP，并得到角色、风格规则、提示词、QA、保存路径和归因都一致的文章配图资产。
```

**Route metadata pattern** (lines 57-66):
```markdown
### 路由参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 查看路由元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context`、`status`。

Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
```

**Output marker pattern** (lines 31-39):
```markdown
- Xiaohei 输出到 workspace 的 `assets/<article-slug>-illustrations/`
- Littlebox 输出到 workspace 的 `assets/<article-slug>-littlebox/`

文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-illustrations/` 和 `assets/&lt;article-slug&gt;-littlebox/`。
```

For Tom, add route-status wording near the route reference section. Include exact token `gated-authorized`, raw path `assets/<article-slug>-tom/`, escaped marker `assets/&lt;article-slug&gt;-tom/`, and rights record path. Avoid broad public sample availability wording while the route remains gated.

---

### `examples/prompts.md` (test, request-response)

**Analog:** `examples/prompts.md`

**Smoke fixture intro pattern** (lines 1-7):
```markdown
# Prompt Examples

下面这些 prompt 可以直接复制到 Codex 里使用。它们同时作为路由烟测夹具，保留路径、别名、字段名和 canonical reference markers。

## 路由烟测：省略视觉 IP

省略视觉 IP 时走默认视觉 IP：Xiaohei。适合旧提示、快速规划和小黑正文配图。
```

**Route smoke pattern** (lines 127-155):
```markdown
## 维护者验证烟测

这些 prompt 用来人工检查路由行为；完整包校验使用 `node scripts/validate-skill-package.mjs`。路由源文件是 `ian-xiaohei-illustrations/references/routing.md`。

### 烟测：显式 Littlebox 路由

```text
Use $ian-xiaohei-illustrations 先不要生图。
使用 Littlebox / 小盒 / 纸盒 / paper-box / carton 路由，为这个观点输出 1 张 shot list：
观点：把松散想法封装成可递交版本。
预期：加载 `ian-xiaohei-illustrations/references/ips/littlebox/`，包含 Littlebox state: closed、visual metaphor、assigned background、short visible labels，输出路径是 `assets/<article-slug>-littlebox/`。
```
```

Add a Tom maintainer smoke prompt that is text-only, uses aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`, expects route status `gated-authorized`, references `ian-xiaohei-illustrations/references/ips/tom/rights.md`, and states `assets/<article-slug>-tom/` plus `assets/&lt;article-slug&gt;-tom/`.

---

### `RELEASE_CHECKLIST.md` (test, batch)

**Analog:** `RELEASE_CHECKLIST.md`

**Automated gate pattern** (lines 5-25):
```markdown
## Automated Gates

- [ ] Run the package validator:

```bash
node scripts/validate-skill-package.mjs
```

- [ ] Run validator tests:

```bash
node --test scripts/validate-skill-package.test.mjs
```

Validator marker changes require `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` to pass in the same change set.
```

**Attribution review pattern** (lines 36-40):
```markdown
## Attribution Review

- [ ] Review `NOTICE.md` for Ian Xiaohei attribution.
- [ ] Review `NOTICE.md` for Littlebox attribution: author `okooo5km`, source repository, MIT context, inspected commit `37cd93e`, and derived documentation notes.
- [ ] Confirm public docs and release notes keep attribution language aligned with `NOTICE.md`.
```

Add a Tom gate section with these exact release gates:

```markdown
## Tom Rights and Public Sample Gate

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner.
- [ ] Confirm Tom route status is `gated-authorized` across `routing.md`, `README.md`, `examples/prompts.md`, and this checklist.
- [ ] Confirm Tom remains `default=false` and Xiaohei remains the only implicit default route.
- [ ] Public rendered Tom samples approved for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date.
```

---

### `scripts/validate-skill-package.mjs` (utility, batch)

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
const README_FILE = "README.md";
```

**Markdown table parser pattern** (lines 158-179):
```javascript
export function parseMarkdownTable(text, headingText) {
  const body = bodyAfterHeading(text, headingText);
  const lines = body.split("\n").map((line) => line.trim());
  const tableStart = lines.findIndex((line) => line.startsWith("|") && line.endsWith("|"));
  if (tableStart === -1 || tableStart + 2 >= lines.length) return [];

  const header = splitMarkdownTableLine(lines[tableStart]).map(stripWrappingTicks);
  const separator = splitMarkdownTableLine(lines[tableStart + 1]);
  if (!separator.every((cell) => /^:?-{3,}:?$/.test(cell.trim()))) return [];

  const rows = [];
  for (const line of lines.slice(tableStart + 2)) {
    if (!line.startsWith("|") || !line.endsWith("|")) break;
    const cells = splitMarkdownTableLine(line);
    const row = {};
    header.forEach((key, index) => {
      row[key] = stripWrappingTicks(cells[index] ?? "");
    });
    rows.push(row);
  }
  return rows;
}
```

**Marker assertion pattern** (lines 222-238):
```javascript
function assertIncludes(text, relativePath, markers, relation) {
  const missing = markers.filter((marker) => !text.includes(marker));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing marker(s): ${missing.join(", ")}`,
    );
  }
}
```

**Route checks pattern** (lines 479-531):
```javascript
defineCheck("ROUTE-TABLE-001", "routing.md exposes the required route metadata columns and rows", () => {
  const text = requireFile(ROUTING_FILE);
  const columns = markdownTableHeader(text, "IP Routes");
  assertArrayIncludes(columns, [
    "id",
    "display_name",
    "aliases",
    "default",
    "output_suffix",
    "required_references",
    "attribution_context",
    "status",
  ], ROUTING_FILE, "IP Routes table columns");
  assertArrayIncludes(routeRows().map((row) => row.id), ["xiaohei", "littlebox"], ROUTING_FILE, "route ids");
}),
```

Add Tom checks in the same `defineCheck` array style. Prefer marker-level checks for Phase 6:

- `ROUTE-TOM-001`: route row includes Tom aliases, `default=false`, `output_suffix=tom`, `gated-authorized`, rights path, and future pack paths.
- `DOC-TOM-001`: README and examples include `gated-authorized`, raw and escaped Tom output markers, rights path, and route path.
- `NOTICE-TOM-001`: NOTICE includes source context plus permission-boundary markers.
- `BOUNDARY-TOM-IMG-001`: `imageAssetPaths()` finds no Tom-named public rendered sample while checklist marker remains `PENDING`.

**Public asset gate pattern** (lines 344-350 and 778-785):
```javascript
function imageAssetPaths() {
  return [
    ...sortedDirectoryEntries("examples/images").filter((entry) => entry.type === "file").map((entry) => entry.path),
    ...sortedDirectoryEntries(path.join(PACKAGE_DIR, "assets", "examples"))
      .filter((entry) => entry.type === "file")
      .map((entry) => entry.path),
  ].sort((a, b) => a.localeCompare(b, "en"));
}

defineCheck("BOUNDARY-IMG-001", "example asset directories do not import rendered Littlebox images", () => {
  const matches = imageAssetPaths().filter((relativePath) => /littlebox|小盒|carton/i.test(relativePath));
  if (matches.length > 0) {
    throw new Error(
      `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Littlebox import; observed ${matches.join(", ")}`,
    );
  }
}),
```

For Tom, reuse this scanner with `/tom|tom-cat|tom-and-jerry|汤姆|汤姆猫/i` and tie approval to explicit release checklist text.

**Known baseline failure handling** (lines 786-798):
```javascript
defineCheck("BOUNDARY-P5-001", "Phase 4 validator preserves Phase 5 documentation and release boundary", () => {
  assertIncludes(combinedText([
    ".planning/phases/04-validation-hardening/04-CONTEXT.md",
    ".planning/phases/04-validation-hardening/04-RESEARCH.md",
  ]), ".planning/phases/04-validation-hardening", [
    "Phase 5 owns broad README refresh",
    "agents/openai.yaml",
    "release checklist",
    "D-28",
    "D-29",
    "D-30",
  ], "Phase 5 boundary for broad docs, metadata wording, release checklist, and excluded release artifacts");
}),
```

Current baseline command result: `node scripts/validate-skill-package.mjs` reports `33 passed, 1 failed`, with `BOUNDARY-P5-001` failing because `.planning/phases/04-validation-hardening/04-CONTEXT.md` is missing. Phase 6 planning should record that as pre-existing and either repair that artifact dependency or scope validation reporting so new Tom checks are distinguishable from the historical baseline.

---

### `scripts/validate-skill-package.test.mjs` (test, batch)

**Analog:** `scripts/validate-skill-package.test.mjs`

**Imports and required ID pattern** (lines 1-45):
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
  "PKG-SHAPE-001",
  "SKILL-FM-001",
  "SKILL-ROUTE-001",
  "SKILL-REFS-001",
  "SKILL-OUTPUT-001",
  "SKILL-GEN-001",
  "AGENT-SHAPE-001",
  "ROUTE-TABLE-001",
  "ROUTE-XH-001",
  "ROUTE-LB-001",
  "ROUTE-DEFAULT-001",
  "ROUTE-REFS-001",
  "ROUTE-PATHS-001",
  "ROUTE-MIXED-001",
];
```

**Validator runner pattern** (lines 47-53):
```javascript
function runValidator(extraEnv = {}) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}
```

**Stable-order test pattern** (lines 101-114):
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

**Failure fixture pattern** (lines 160-200):
```javascript
test("validator failure messages include actionable Task 2 check IDs and paths", () => {
  const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-task2-${process.pid}-${Date.now()}`);
  cpSync(repoRoot, fixtureRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
    },
  });

  const noticePath = path.join(fixtureRoot, "NOTICE.md");
  writeFileSync(noticePath, readFileSync(noticePath, "utf8").replace("37cd93e", "missing"), "utf8");

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });

  rmSync(fixtureRoot, { recursive: true, force: true });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /\[FAIL\] NOTICE-LB-001 /);
  assert.match(result.stdout, /NOTICE\.md/);
  assert.match(result.stdout, /observed missing marker/);
});
```

Update `requiredCheckIds`, stable-order expectations, parser helper expectations, and fixture failure tests when adding Tom validator checks. Because the current repo baseline has `BOUNDARY-P5-001` failing, tests that assume `result.status === 0` should first address that baseline or introduce an explicit pre-existing-failure expectation during the transition.

## Shared Patterns

### Markdown Reference Placement

**Source:** `.planning/codebase/STRUCTURE.md`
**Apply to:** Tom rights record and future Tom pack paths

Use `ian-xiaohei-illustrations/references/ips/<route>/` for route-specific references. Phase 6 creates only `rights.md`; Phase 7 owns operational Tom files.

### Route Defaults

**Source:** `ian-xiaohei-illustrations/references/routing.md` lines 17-18 and `scripts/validate-skill-package.mjs` lines 521-531
**Apply to:** `routing.md`, README, examples, validator

Xiaohei remains the only `default=true` route. Tom uses `default=false` and status `gated-authorized`.

### Marker-Based Validation

**Source:** `scripts/validate-skill-package.mjs` lines 222-238
**Apply to:** validator additions

Use `assertIncludes` and `assertArrayIncludes` with actionable relation strings and file paths. Keep checks deterministic and dependency-free.

### Public Asset Boundary

**Source:** `scripts/validate-skill-package.mjs` lines 344-350 and 778-785
**Apply to:** Tom public sample gate

Scan both public rendered asset directories:

- `examples/images/`
- `ian-xiaohei-illustrations/assets/examples/`

Block Tom-named rendered samples until `RELEASE_CHECKLIST.md` records explicit approval.

### Baseline Failure Reporting

**Source:** current validator run and `scripts/validate-skill-package.mjs` lines 786-798
**Apply to:** Phase 6 verification plan

Record `BOUNDARY-P5-001` as a known pre-existing validator baseline failure. Do not present a failing full validator run as a new Tom regression. Planner should either repair the missing Phase 4 planning artifact dependency or use targeted Tom checks plus a clearly named baseline note until the historical check is fixed.

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| None | N/A | N/A | Existing docs, route tables, release gates, validator checks, and `node:test` files cover every Phase 6 file type. |

## Metadata

**Analog search scope:** `AGENTS.md`, Phase 6 context and research docs, `ian-xiaohei-illustrations/references/`, root public docs, `scripts/`, `.planning/codebase/`
**Files scanned:** 16
**Pattern extraction date:** 2026-06-13
