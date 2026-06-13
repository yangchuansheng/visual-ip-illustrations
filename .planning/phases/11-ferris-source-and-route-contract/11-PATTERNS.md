# Phase 11: Ferris Source and Route Contract - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 8 target files
**Analogs found:** 8 / 8

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/references/ips/ferris/source.md` | documentation reference | source-contract / release-governance | `ian-xiaohei-illustrations/references/ips/tom/rights.md` | role-match |
| `ian-xiaohei-illustrations/references/routing.md` | route metadata reference | request-routing / transform | existing Tom route row in `ian-xiaohei-illustrations/references/routing.md` | exact |
| `NOTICE.md` | public legal notice | attribution / governance | Tom NOTICE section in `NOTICE.md` | exact |
| `README.md` | public documentation | request-response docs / routing contract | Tom README route sections in `README.md` | exact |
| `examples/prompts.md` | public examples / smoke fixtures | request-response docs / route smoke | Tom prompt examples in `examples/prompts.md` | exact |
| `RELEASE_CHECKLIST.md` | release governance checklist | release-gate / approval record | Tom rights and public sample gate in `RELEASE_CHECKLIST.md` | exact |
| `scripts/validate-skill-package.mjs` | utility / validator | batch validation / file I/O | existing Tom route, NOTICE, docs, and public asset checks | exact |
| `scripts/validate-skill-package.test.mjs` | test | batch fixture mutation / validation subprocess | existing Tom drift and approval parser tests | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/references/ips/ferris/source.md` (documentation reference, source-contract / release-governance)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/rights.md`

**Section shape pattern** (lines 1-21):

```markdown
# Tom Rights Record

## Source

- Character route: Tom.
- Source context: Tom from Tom and Jerry.
- Route status: `gated-authorized`.
- Reference source: Warner Bros. official Tom and Jerry brand and clip/still licensing pages.

## Rights Holder

- Rights-holder context: Warner Bros. Entertainment Inc. and applicable Warner Bros. Discovery rights entities.

## Authorization Scope

- Current scope: protected-character route contract for maintainer review, route metadata, attribution boundary wording, and future Tom reference-pack planning.
- Reviewer: Pending maintainer review.
- Review date: Pending.
- Approval status: `gated-authorized`.
```

Copy/adapt for Ferris: keep the short record style and reviewer fields. Replace Tom authorization headings with the Phase 11 required headings: Source, Author and Source Sites, Copyright Waiver, Trademark Boundary, Route Status, Allowed Use, Restricted Use, Distribution Boundary, Sample Policy, and Review Owner. Include `rustacean.net`, Karen Rustad Tolva, CC0/public-domain dedication context, Rust Foundation trademark policy context, `source-reviewed`, and source/trademark review ownership.

**Allowed/restricted use pattern** (lines 23-35):

```markdown
## Allowed Use

- Document Tom route metadata, rights boundaries, source attribution context, and release-review fields.
- Reference future Tom canonical pack paths under `references/ips/tom/` so maintainers can audit route completeness across later phases.
- Use Tom route status wording in maintainer-facing docs while route status remains `gated-authorized`.

## Restricted Use

- Generated public Tom sample assets require explicit public-sample approval before appearing in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- Broad Tom availability claims require release checklist approval and authorization-scope confirmation.
- Tom identity, style, prompt, composition, and QA rules belong to the later Tom canonical pack phase.
```

Copy/adapt for Ferris: allowed use covers source record, route metadata, NOTICE boundary, and later Ferris pack references. Restricted use covers Rust-logo-forward public samples, official-affiliation cues, endorsement wording, bundled Rust marks, and public rendered samples pending release review.

**Distribution/sample/review pattern** (lines 36-52):

```markdown
## Distribution Boundary

- This record supports repository documentation, maintainer review, and route contract planning.
- Public package distribution must preserve this rights record, NOTICE permission boundary wording, and `gated-authorized` route status until the release checklist records a different approved status.
- Public generated Tom examples must stay behind the public-sample gate recorded by release review.

## Sample Policy

- Public rendered Tom samples: pending explicit approval.
- Internal review samples: allowed only inside the project-specific authorization scope recorded here and in the release checklist.
- Sample approval record: reviewer, date, approval status, allowed directories, and distribution channels must be recorded before public sample publication.
```

Copy/adapt for Ferris: preserve maintainer-review tone and approval fields. Use `source-reviewed` as the current route status and identify `source.md` as the Phase 11 authority for source/trademark context.

---

### `ian-xiaohei-illustrations/references/routing.md` (route metadata reference, request-routing / transform)

**Analog:** existing Tom route and output contract in `ian-xiaohei-illustrations/references/routing.md`

**Route rule pattern** (lines 7-12):

```markdown
- 用户省略视觉 IP 时，选择 `xiaohei`。
- 用户使用 `小黑`、`Xiaohei`、`Ian`、`ian-xiaohei` 时，选择同一个 `xiaohei` 路由。
- 用户使用 `小盒`、`Littlebox`、`纸盒`、`paper-box`、`carton` 时，选择同一个 `littlebox` 路由。
- 用户使用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 时，选择同一个 `tom` 路由，路线状态保持 `gated-authorized`。
- 同时请求 Xiaohei、Littlebox 和 Tom 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
```

Copy/adapt for Ferris: add one Ferris alias rule using `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`. Extend mixed-IP wording to Xiaohei, Littlebox, Tom, and Ferris. Preserve Xiaohei as the only omitted-IP default.

**Table pattern** (lines 16-20):

```markdown
| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
```

Copy/adapt for Ferris: add one row with `id=ferris`, `display_name=Ferris`, `default=false`, `output_suffix=ferris`, `required_references=references/ips/ferris/source.md`, attribution context naming Ferris/rustacean.net/Karen Rustad Tolva/source context and Rust trademark boundary through `source.md`, and `status=source-reviewed`.

**Output path pattern** (lines 34-41):

```markdown
- `xiaohei` 输出目录保持为 `assets/<article-slug>-illustrations/`。
- `littlebox` 输出目录为 `assets/<article-slug>-littlebox/`。
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
- 混合 IP 请求按 IP 分成 separate route groups：`xiaohei` 写入 `assets/<article-slug>-illustrations/`，`littlebox` 写入 `assets/<article-slug>-littlebox/`，`tom` 写入 `assets/<article-slug>-tom/`。
```

Copy/adapt for Ferris: add raw and escaped Ferris tokens: `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`. Extend mixed-IP output line with Ferris.

---

### `NOTICE.md` (public legal notice, attribution / governance)

**Analog:** Tom NOTICE section in `NOTICE.md`

**Boundary section pattern** (lines 21-30):

```markdown
## Tom Source Attribution and Permission Boundary

Tom source context records Tom from Tom and Jerry for the `tom` route.

- Source context: Tom and Jerry / Tom
- Route status: `gated-authorized`
- Rights record: `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Attribution context: source identity for route metadata, documentation, and release review

Attribution records Tom source identity. Permission is authorization-scope specific and is governed by the Tom rights record, release checklist approval, and public-sample gate.
```

Copy/adapt for Ferris: add `## Ferris Source Attribution and Rust Trademark Boundary`. Keep it short and reusable. Include route status `source-reviewed`, source record `ian-xiaohei-illustrations/references/ips/ferris/source.md`, source context `rustacean.net` and Karen Rustad Tolva, and a clear separation between Ferris source attribution and Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording governed by Rust Foundation trademark policy context.

---

### `README.md` (public documentation, request-response docs / routing contract)

**Analog:** Tom route docs in `README.md`

**Current route summary pattern** (lines 15-21):

```markdown
当前路线层级：

- **Xiaohei**：implicit default route。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：explicit active route。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。
- **Tom**：explicit protected-character route。用户写 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时使用 Tom 路由；当前 status 为 `gated-authorized`，rights boundary 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
```

Copy/adapt for Ferris: add Ferris as explicit Rust-community mascot route with this Phase 11 public phrase: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`

**Output token pattern** (lines 37-42):

```markdown
- Xiaohei 输出到 workspace 的 `assets/<article-slug>-illustrations/`
- Littlebox 输出到 workspace 的 `assets/<article-slug>-littlebox/`
- Tom route 输出路径合同为 `assets/<article-slug>-tom/`

文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-illustrations/`、`assets/&lt;article-slug&gt;-littlebox/` 和 `assets/&lt;article-slug&gt;-tom/`。
```

Copy/adapt for Ferris: add `assets/<article-slug>-ferris/` and `assets/&lt;article-slug&gt;-ferris/`.

**Route reference pattern** (lines 69-79):

```markdown
### 路由参考

维护者可以在 `ian-xiaohei-illustrations/references/routing.md` 查看路由元数据字段：`id`、`display_name`、`aliases`、`default`、`output_suffix`、`required_references`、`attribution_context`、`status`。

Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`，核心入口 `index.md`，rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
```

Copy/adapt for Ferris: Phase 11 docs should reference only `ian-xiaohei-illustrations/references/ips/ferris/source.md` as Ferris authority. Save Ferris canonical pack docs and copyable prompts for later phases.

---

### `examples/prompts.md` (public examples / smoke fixtures, request-response docs / route smoke)

**Analog:** Tom prompt smoke fixtures in `examples/prompts.md`

**Route smoke section pattern** (lines 87-110):

````markdown
## 路由烟测：显式选择 Tom

显式选择 Tom 时，可用别名包括：Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫。Tom 是 explicit protected-character route，当前 route status 是 `gated-authorized`，rights record 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。

### 显式 Tom：只做规划

```text
Use $ian-xiaohei-illustrations 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，先不要生图。
请为下面这篇文章做 3 张 Tom route shot list。
route status 必须保留 `gated-authorized`。
rights record 必须保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
```
````

Copy/adapt for Ferris: Phase 11 should add limited route-status/docs marker text, route smoke marker, aliases, source record path, output path tokens, and public sample gate. Leave full copyable Ferris generation prompts to Phase 14.

**Mixed-IP pattern** (lines 145-149 and 258-267):

```markdown
同一个观点可以按 IP 分组形成 variant group。Xiaohei 组使用 `assets/<article-slug>-illustrations/`，Littlebox 组使用 `assets/<article-slug>-littlebox/`，Tom 组使用 `assets/<article-slug>-tom/`，三组分别加载自己的参考、提示词、QA 和输出路径。

维护者参考：Xiaohei canonical pack 位于 `ian-xiaohei-illustrations/references/ips/xiaohei/`，Littlebox canonical pack 位于 `ian-xiaohei-illustrations/references/ips/littlebox/`，Tom canonical pack 位于 `ian-xiaohei-illustrations/references/ips/tom/`，Tom rights record 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`，路由元数据位于 `ian-xiaohei-illustrations/references/routing.md`。
```

Copy/adapt for Ferris: include Ferris as a separate group and cite `source.md` for Phase 11. Keep generator details out of Phase 11.

---

### `RELEASE_CHECKLIST.md` (release governance checklist, release-gate / approval record)

**Analog:** Tom rights and public sample gate in `RELEASE_CHECKLIST.md`

**Automated gates pattern** (lines 5-25):

````markdown
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
````

Copy/adapt for Ferris: leave commands as-is; Plan 3 updates validator count/order and runs both commands.

**Tom route/public gate pattern** (lines 43-83):

```markdown
## Tom Rights and Public Sample Gate

This section is the Tom maintainer release gate for authorization, route status, prompt leakage, public assets, generated samples, validator commands, and final rights review.

### Tom Authorization Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer, review date, approval status, allowed directories, and allowed distribution channels.
- [ ] Record authorization review: PENDING / reviewer / date / approval status / authorization scope / release channels.

### Public Asset Policy

- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
- [ ] Public rendered Tom samples require explicit approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
```

Copy/adapt for Ferris: add a Ferris source/trademark and public sample gate section. Required approval record must include PENDING / reviewer / date / approval status / allowed directories / release channels. Gate wording must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and public rendered assets.

---

### `scripts/validate-skill-package.mjs` (utility / validator, batch validation / file I/O)

**Analog:** existing dependency-free validator helpers and Tom checks in `scripts/validate-skill-package.mjs`

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

Copy/adapt for Ferris: keep Node built-ins only. Add a Ferris source path constant if it improves readability, for example `FERRIS_SOURCE_FILE = path.join(REFERENCES_DIR, "ips", "ferris", "source.md")`.

**Parser/helper pattern** (lines 77-82, 158-179, 205-218, 220-301):

```javascript
function splitRouteCell(value) {
  return value
    .split(";")
    .map((item) => stripWrappingTicks(item))
    .filter(Boolean);
}

export function parseMarkdownTable(text, headingText) {
  const body = bodyAfterHeading(text, headingText);
  const lines = body.split("\n").map((line) => line.trim());
  const tableStart = lines.findIndex((line) => line.startsWith("|") && line.endsWith("|"));
  if (tableStart === -1 || tableStart + 2 >= lines.length) return [];
  // rows parsed into objects keyed by header cells
}

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

Copy/adapt for Ferris: extend `outputPathTokens()` with Ferris raw/escaped tokens. Reuse `parseMarkdownTable`, `splitRouteCell`, `routeById`, `routeReferencePaths`, `assertIncludes`, `assertArrayIncludes`, `assertExistingFiles`, and `assertReadableFiles`. Adapt `parsePublicTomSampleApproval` into a Ferris parser or generic parser while preserving the field parsing behavior at lines 249-283.

**Check definition pattern** (lines 478-514):

```javascript
class Results {
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
    console.log(`Summary: total=${total} passed=${passed} failed=${failed} skipped=${skipped}`);
  }
}

function defineCheck(id, message, run) {
  return { id, message, run };
}
```

Copy/adapt for Ferris: append checks in deterministic order near related existing checks: route/source checks after Tom route checks, docs/NOTICE/checklist checks near public docs and NOTICE checks, public asset gate near Tom image boundary check. Use actionable IDs such as `ROUTE-FERRIS-001`, `REFS-FERRIS-001`, `NOTICE-FERRIS-001`, `DOC-FERRIS-001`, `RELEASE-FERRIS-001`, `BOUNDARY-FERRIS-IMG-001`.

**Tom route check pattern** (lines 641-681):

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
});
```

Copy/adapt for Ferris: validate aliases, default=false, output_suffix=ferris, status=source-reviewed, attribution context, and exactly the Phase 11 required reference `references/ips/ferris/source.md`.

**Route refs count pattern** (lines 698-721):

```javascript
const expectedCounts = { xiaohei: 5, littlebox: 6, tom: 7 };
const expectedCount = expectedCounts[row.id];
if (references.length !== expectedCount) {
  throw new Error(
    `${ROUTING_FILE} expected ${row.id} required_references count=${expectedCount}; observed ${references.length}`,
  );
}
```

Copy/adapt for Ferris: add `ferris: 1` to expectedCounts for Phase 11 and require the sole reference to exist. Later Phase 12 expands this count when canonical pack files exist.

---

### `scripts/validate-skill-package.test.mjs` (test, batch fixture mutation / validation subprocess)

**Analog:** existing Node test fixture and Tom drift tests in `scripts/validate-skill-package.test.mjs`

**Imports and check ID matrix pattern** (lines 1-58):

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
  "ROUTE-TOM-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-P5-001",
];
```

Copy/adapt for Ferris: insert Ferris check IDs exactly where validator emits them. Update full-pass summary count after adding checks.

**Fixture helpers pattern** (lines 60-99):

```javascript
function runValidator(extraEnv = {}) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}

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
```

Copy/adapt for Ferris: use `copyFixture`, `replaceInFixture`, `runFixtureValidator`, and cleanup in `finally` for every Ferris drift test.

**Full-pass matrix pattern** (lines 289-301):

```javascript
test("validator emits the full Phase 10 matrix with zero failures", () => {
  const result = runValidator();
  const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
  assert.equal(resultLines.length, requiredCheckIds.length);
  assert.deepEqual(
    resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
    requiredCheckIds,
  );
  assert.match(result.stdout, /Summary: total=47 passed=47 failed=0 skipped=0/);
});
```

Copy/adapt for Ferris: rename to Phase 11 matrix, update expected total, preserve strict ID order assertion.

**Parser helper and approval parser pattern** (lines 303-361):

```javascript
const routes = validators.parseMarkdownTable(routingText, "IP Routes");
assert.equal(routes.length, 3);
assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox", "tom"]);

assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-tom/"));
assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));

const pendingApproval = validators.parsePublicTomSampleApproval(releaseChecklistText);
assert.equal(pendingApproval.found, true);
assert.equal(pendingApproval.checked, false);
assert.equal(pendingApproval.complete, false);
```

Copy/adapt for Ferris: update route count to 4 and expected route IDs. Assert Ferris required reference is exactly `references/ips/ferris/source.md`. Add Ferris raw/escaped path assertions and Ferris public sample parser pending/approved behavior.

**Drift test pattern** (lines 363-378, 500-532):

```javascript
test("validator fixture rejects Tom route metadata drift", () => {
  const fixtureRoot = copyFixture("tom-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "`Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
      "`Tom`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
    );
    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
```

Copy/adapt for Ferris: add fixture tests for route alias/default/suffix/status drift, source marker drift, NOTICE boundary drift, release checklist gate drift, and public Ferris sample pending/approved parsing.

## Shared Patterns

### Markdown Reference Files
**Source:** `ian-xiaohei-illustrations/references/ips/tom/rights.md`
**Apply to:** `references/ips/ferris/source.md`

Use short ATX headings, bullet lists, route status markers in backticks, and explicit reviewer/date/status fields. The Ferris source file owns source/trademark context in Phase 11 and can be referenced by later Ferris pack files.

### Route Table Metadata
**Source:** `ian-xiaohei-illustrations/references/routing.md`
**Apply to:** `routing.md`, validator route checks, README/examples route docs

Keep columns unchanged: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, `status`. Route reference lists are semicolon-delimited and parsed by `splitRouteCell`.

### Public Route-Status Phrase
**Source:** Phase 11 context decision D-15
**Apply to:** `routing.md`, `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`

Use this exact sentence where public status wording is needed:

```text
Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

### Release Gate Record
**Source:** `RELEASE_CHECKLIST.md` lines 67-77
**Apply to:** Ferris public sample gate and validator parser

Approval record fields must stay parseable as slash-separated values: PENDING / reviewer / date / approval status / allowed directories / release channels. Keep directory names `examples/images` and `ian-xiaohei-illustrations/assets/examples` parseable because validator strips trailing punctuation.

### Validator Style
**Source:** `scripts/validate-skill-package.mjs` lines 1-12, 478-514
**Apply to:** all Phase 11 validator additions

Use Node built-ins only. Checks are deterministic, dependency-free, path-specific, and message-oriented. Existing helpers provide markdown parsing, route lookup, marker assertions, file existence, public docs text, and image asset inventory.

### Test Style
**Source:** `scripts/validate-skill-package.test.mjs` lines 60-99, 289-301, 500-532
**Apply to:** all Phase 11 tests

Use Node `node:test`, `assert/strict`, fixture copy mutation, subprocess validator runs, and `finally` cleanup. Keep full-pass check IDs as an ordered matrix.

## File Ownership Recommendations

### Plan 11-01 - Source record + route + NOTICE

Own these files:

- `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- `ian-xiaohei-illustrations/references/routing.md`
- `NOTICE.md`

Use these analogs:

- Tom rights structure from `ian-xiaohei-illustrations/references/ips/tom/rights.md` lines 1-52.
- Tom route row and mixed route wording from `routing.md` lines 7-20 and 34-41.
- Tom NOTICE attribution section from `NOTICE.md` lines 21-30.

Acceptance focus:

- Ferris source file has all D-03 sections.
- Ferris route row has Phase 11 locked values and exactly one required reference.
- NOTICE has the Ferris source/trademark boundary section and source record path.

### Plan 11-02 - Public route-status docs + release checklist

Own these files:

- `README.md`
- `examples/prompts.md`
- `RELEASE_CHECKLIST.md`
- coordinated wording touch in `ian-xiaohei-illustrations/references/routing.md` when the public route-status phrase needs a shared location

Use these analogs:

- README route summary/output/reference sections from `README.md` lines 15-21, 37-42, 59-79, and 282-289.
- examples Tom smoke and mixed-IP sections from `examples/prompts.md` lines 87-149 and 258-267.
- Release checklist Tom gate from `RELEASE_CHECKLIST.md` lines 43-83.

Acceptance focus:

- Public docs introduce only Phase 11 status, aliases, output path tokens, source record path, and sample gate.
- Shared Ferris status phrase appears across README, examples, release checklist, and routing docs.
- Release checklist gate records public Ferris sample review fields and risk categories.

### Plan 11-03 - Validator baseline repair + minimal Ferris checks/tests

Own these files:

- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Read and assert finalized outputs from Plans 11-01 and 11-02:

- `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- `ian-xiaohei-illustrations/references/routing.md`
- `NOTICE.md`
- `README.md`
- `examples/prompts.md`
- `RELEASE_CHECKLIST.md`

Use these analogs:

- Parser and route helpers from `validate-skill-package.mjs` lines 77-82, 158-179, 205-218, 220-301, 341-355.
- Check structure from `validate-skill-package.mjs` lines 478-514 and Tom route checks lines 641-681.
- Route refs/path/mixed checks from `validate-skill-package.mjs` lines 698-750.
- Test helper/matrix/approval patterns from `validate-skill-package.test.mjs` lines 60-99, 289-361, 363-378, and 500-532.

Acceptance focus:

- Baseline validator passes after Phase 11 docs exist.
- Tests cover stable check ordering, route metadata drift, source marker drift, NOTICE boundary drift, and public sample gate pending/approved parsing.
- Full-pass summary count and `requiredCheckIds` reflect the new check matrix.

## Risk Notes and Plan Dependencies

| Risk | Files | Dependency / Mitigation |
|------|-------|--------------------------|
| Plan 11-02 and 11-03 both depend on the final shared public status phrase | `routing.md`, `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, validator tests | Land Plan 11-01 route/source wording first, then Plan 11-02 propagates the exact phrase, then Plan 11-03 asserts it. |
| `routing.md` is touched by Plan 11-01 and may receive shared wording from Plan 11-02 | `routing.md` | Assign route row and output contract to Plan 11-01. Assign public phrase propagation to Plan 11-02 with a re-read before editing. |
| Validator tests should reflect completed docs | validator and all docs | Plan 11-03 runs after Plans 11-01 and 11-02. It should use actual file markers from those changes. |
| Ferris route starts with only `source.md` as required reference | `routing.md`, validator route refs | Validator expected count for Ferris is 1 in Phase 11. Later Phase 12 expands this count when canonical pack files exist. |
| Public examples must stay gated | `examples/images/`, `ian-xiaohei-illustrations/assets/examples/`, `RELEASE_CHECKLIST.md`, validator | Phase 11 may add gate text and tests. It should avoid adding rendered Ferris sample assets. |
| Rust trademark wording needs current-source verification | `source.md`, `NOTICE.md`, public docs | Implementation should verify `rustacean.net` and Rust Foundation trademark policy wording before final text edits, then paraphrase conservatively. |
| Existing Tom public asset gate parser is Tom-specific | validator/test | Either create a generic parser or a Ferris-specific parser. Preserve exported helper coverage because tests import parser helpers directly. |

## No Analog Found

All Phase 11 target files have strong analogs in the current codebase. No file requires planner fallback to research-only patterns.

## Metadata

**Analog search scope:** repository root docs, `ian-xiaohei-illustrations/references/`, `scripts/`, Phase 11 planning inputs
**Files scanned:** 17 primary files
**Pattern extraction date:** 2026-06-13
