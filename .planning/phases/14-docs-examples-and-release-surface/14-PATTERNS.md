# Phase 14: Docs, Examples, and Release Surface - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 6
**Analogs found:** 6 / 6

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `README.md` | documentation | request-response | `README.md` Tom route section and quick examples | exact |
| `examples/prompts.md` | documentation / test fixture | request-response | `examples/prompts.md` Tom prompts and mixed-IP prompts | exact |
| `ian-xiaohei-illustrations/agents/openai.yaml` | config | request-response | current `openai.yaml` three-route metadata | exact |
| `NOTICE.md` | documentation / legal | request-response | `NOTICE.md` Tom and Ferris attribution sections | exact |
| `RELEASE_CHECKLIST.md` | documentation / release gate | batch | Tom rights gate and current Ferris source gate | exact |
| `ian-xiaohei-illustrations/references/routing.md` | route config docs | request-response | current Ferris route row and route rules | exact |

## Pattern Assignments

### `README.md` (documentation, request-response)

**Analog:** `README.md`

**Insertion points:**

- Update `### Ferris` at lines 71-81.
- Update `Canonical packs` at lines 87-94.
- Add Ferris quick examples after Tom route audit prompt at lines 202-214.
- Update `### 同一观点的 IP 对照` at lines 190-200 from three groups to four groups.
- Update workflow lines 222-229 to include Ferris route selection, full pack loading, QA, source/trademark note, and Phase 15 validator boundary.
- Update directory map lines 261-284 to include `ferris/` pack.
- Update maintainer validation lines 297-304 to name all four packs and Phase 15 validator/test hardening.

**Route overview pattern** (lines 15-21):

```markdown
当前路线层级：

- **Xiaohei**：implicit default route。用户省略视觉 IP 时使用 Xiaohei 路由，沿用小黑白底手绘正文配图体验。
- **Littlebox**：explicit active route。用户写 `小盒`、`Littlebox`、`纸盒`、`paper-box` 或 `carton` 时使用 Littlebox 路由。
- **Tom**：explicit protected-character route。用户写 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆` 或 `汤姆猫` 时使用 Tom 路由；当前 status 为 `gated-authorized`，rights boundary 位于 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
- **Ferris**：Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

**Ferris route docs pattern** (lines 71-81):

```markdown
### Ferris

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

可用别名：`Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹`。

Source record：`ian-xiaohei-illustrations/references/ips/ferris/source.md`。

输出路径合同：`assets/<article-slug>-ferris/`。文档校验 token：`assets/&lt;article-slug&gt;-ferris/`。输出后缀：`ferris`。

Public rendered Ferris samples 由 `RELEASE_CHECKLIST.md` 的 Rust trademark 和 endorsement-safe wording gate 审核通过后进入公开样例目录。
```

**Required README upgrade wording:**

```markdown
Route-local reference directory：`ian-xiaohei-illustrations/references/ips/ferris/`。
Source/trademark authority：`ian-xiaohei-illustrations/references/ips/ferris/source.md`。
规划字段：Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。
```

**Canonical packs pattern** (lines 87-92):

```markdown
Canonical packs：

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`，核心入口 `index.md`，rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris source record: `ian-xiaohei-illustrations/references/ips/ferris/source.md`
```

Planner should change Ferris to:

```markdown
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`，source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
```

**Quick prompt pattern** (lines 202-214):

```text
Use $ian-xiaohei-illustrations 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，先不要生图。
请为下面这篇文章做 3 张 Tom route shot list。
每张图写清楚：Placement、Core idea、Structure type、Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note。
route status 必须保留 `gated-authorized`。
rights boundary 必须保留 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
输出路径使用 `assets/<article-slug>-tom/`；文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
公共 rendered Tom samples 以 RELEASE_CHECKLIST.md 的 public-sample gate 为准。
```

Use the same structure for Ferris:

```text
Use $ian-xiaohei-illustrations 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，先不要生图。
请为下面这篇文章做 3 张 Ferris route shot list。
每张图写清楚：Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。
route status 必须保留 `source-reviewed`。
route-local reference directory 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/`。
source/trademark authority 必须保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
输出路径使用 `assets/<article-slug>-ferris/`；文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
公共 rendered Ferris samples 以 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 为准。
```

### `examples/prompts.md` (documentation / test fixture, request-response)

**Analog:** `examples/prompts.md`

**Insertion points:**

- Replace `### 显式 Ferris：route contract marker` at lines 151-164 with three copyable prompts: planning, generation, route smoke.
- Update multi-IP reference paragraph at lines 166-170 to name Ferris canonical pack directory and `source.md`.
- Update Ferris variant group at lines 197-203 to require the full pack and planning fields.
- Replace `### 混合 IP：同一观点生成三组` at lines 208-242 with a four-IP generation prompt.
- Update maintainer mixed smoke at lines 287-296 to include Ferris.

**Tom smoke prompt analog** (lines 130-143):

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Tom / Tom Cat / Tom and Jerry / 汤姆 / 汤姆猫 路由，为这个观点输出 1 张 route-status smoke shot list：
观点：把追赶中的判断拆成可执行下一步。
预期：selected IP 是 Tom。
预期：route status 是 `gated-authorized`。
预期：rights record 是 `ian-xiaohei-illustrations/references/ips/tom/rights.md`。
预期：route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/tom/`。
预期：输出路径是 `assets/<article-slug>-tom/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-tom/`。
预期：planning fields 包含 Placement、Core idea、Structure type、Tom state、Tom action、Supporting objects、Visible labels、Output path、Rights-status note。
预期：Public rendered Tom samples 由 RELEASE_CHECKLIST.md 的 public-sample gate 控制。
```

**Ferris smoke prompt replacement wording:**

```text
Use $ian-xiaohei-illustrations 先不要生图。
Text-only maintainer route audit. 使用 Ferris / Rust mascot / Rust crab / Rustacean / Rust 吉祥物 / Rust 螃蟹 路由，为这个观点输出 1 张 route-status smoke shot list：
观点：把 Rust 社区语境里的抽象约束变成可检查步骤。
预期：selected IP 是 Ferris。
预期：route status 是 `source-reviewed`。
预期：source record 是 `ian-xiaohei-illustrations/references/ips/ferris/source.md`。
预期：route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/ferris/`。
预期：required references 包含 `index.md`、`source.md`、`style-dna.md`、`ferris-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`。
预期：输出路径是 `assets/<article-slug>-ferris/`。
预期：文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`。
预期：planning fields 包含 Placement、Core idea、Structure type、Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note。
预期：generated public Ferris samples require release review for Rust trademark and endorsement-safe wording。
```

**Ferris planning fields source** (`ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` lines 19-29):

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Ferris state: [focused / guarding / sorting / type-checking / borrowing / compiling / inspecting / untangling / bracing / stamping / releasing]
   Ferris action: [the physical cognitive action Ferris performs]
   Supporting objects: [1-2 Rust-themed low-tech objects: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, or review gates]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-ferris/
   Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `source.md` for source context and trademark boundary.
```

**Generation prompt source** (`ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` lines 40-70):

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Ferris is a `source-reviewed` Rust-community mascot route. Use `source.md` as the source/trademark authority for source context, CC0/public-domain context, Rust trademark boundary, public-sample policy, reviewer fields, and status changes. Keep the scene original, article-explanatory, and route-local.

Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route. Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
```

**Four-IP mixed planning analog** (lines 172-206):

```text
### 混合 IP：只做 variant planning

Use $ian-xiaohei-illustrations 先不要生图。
请用同一个 core idea 分别输出 Xiaohei、Littlebox、Tom、Ferris 四个 separate variant group。
每个 group 使用自己的 route-local references、planning fields、QA gates 和输出目录。
```

Ferris group should use:

```text
Ferris variant group：
- 使用 `ian-xiaohei-illustrations/references/ips/ferris/`
- source/trademark authority 保留 `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- route status 保留 `source-reviewed`
- aliases 包括 Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹
- 写清楚 Ferris state、Ferris action、Supporting objects、Visible labels、Output path、Source/trademark note
- 输出到 `assets/<article-slug>-ferris/`
- 文档校验 token 是 `assets/&lt;article-slug&gt;-ferris/`
- Public rendered Ferris samples 由 RELEASE_CHECKLIST.md 的 Rust trademark 和 endorsement-safe wording gate 控制
```

### `ian-xiaohei-illustrations/agents/openai.yaml` (config, request-response)

**Analog:** `ian-xiaohei-illustrations/agents/openai.yaml`

**Current compact metadata pattern** (lines 1-6):

```yaml
interface:
  display_name: "Xiaohei / Littlebox / Tom Article Illustrations"
  short_description: "为中文文章生成 Xiaohei、Littlebox 或 Tom 视觉 IP 正文配图资产；未指定视觉 IP 时默认使用 Xiaohei，Tom 是 explicit gated-authorized protected-character route。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时 default Xiaohei，也可以显式选择 Littlebox，或 explicit Tom protected-character route（gated-authorized）。"
policy:
  allow_implicit_invocation: true
```

**Replacement pattern:**

```yaml
interface:
  display_name: "Xiaohei / Littlebox / Tom / Ferris Article Illustrations"
  short_description: "为中文文章生成 Xiaohei、Littlebox、Tom 或 Ferris 视觉 IP 正文配图资产；未指定视觉 IP 时默认使用 Xiaohei，Littlebox 是 explicit active route，Tom 是 explicit gated-authorized protected-character route，Ferris 是 explicit source-reviewed Rust-community mascot route。"
  default_prompt: "Use $ian-xiaohei-illustrations to 为这篇中文文章设计并生成几张正文配图；未指定视觉 IP 时 default Xiaohei，也可以显式选择 Littlebox、explicit Tom protected-character route（gated-authorized）或 explicit Ferris Rust-community mascot route（source-reviewed）。"
policy:
  allow_implicit_invocation: true
```

Keep `allow_implicit_invocation: true`. Preserve omitted-IP default as Xiaohei only.

### `NOTICE.md` (documentation / legal, request-response)

**Analog:** `NOTICE.md`

**Tom attribution boundary pattern** (lines 21-30):

```markdown
## Tom Source Attribution and Permission Boundary

Tom source context records Tom from Tom and Jerry for the `tom` route.

- Source context: Tom and Jerry / Tom
- Route status: `gated-authorized`
- Rights record: `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Attribution context: source identity for route metadata, documentation, and release review

Attribution records Tom source identity. Permission is authorization-scope specific and is governed by the Tom rights record, release checklist approval, and public-sample gate.
```

**Ferris existing pattern** (lines 32-41):

```markdown
## Ferris Source Attribution and Rust Trademark Boundary

Ferris source context records Ferris the Rustacean from `rustacean.net` and Karen Rustad Tolva for the `ferris` route.

- Source context: `rustacean.net` / Ferris the Rustacean / Karen Rustad Tolva
- Route status: `source-reviewed`
- Source record: `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Attribution context: Ferris source, author, and copyright-waiver context for route metadata, documentation, and release review

Ferris attribution records source context. Rust and Cargo marks, logos, official-affiliation claims, and endorsement wording are governed by Rust Foundation trademark policy context and release review.
```

**Required consistency pattern:**

- Keep section title exactly: `## Ferris Source Attribution and Rust Trademark Boundary`.
- Keep NOTICE concise.
- Reuse source/trademark separation from line 41.
- Add only a short operational authority sentence if needed:

```markdown
Operational source/trademark authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
```

### `RELEASE_CHECKLIST.md` (documentation / release gate, batch)

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

- [ ] Check Markdown whitespace before committing release docs:

```bash
git diff --check
```

Validator marker changes require `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` to pass in the same change set.
```

Add Phase 15 boundary below line 25:

```markdown
Phase 15 owns Ferris validator/test expectation updates for the full seven-file Ferris route pack, route leakage checks, public asset gates, generated sample gates, and parser tests. Phase 14 release docs may cite these commands, while v1.2 release evidence requires the Phase 15 validator and test updates to pass.
```

**Tom release gate structure analog** (lines 44-84):

```markdown
## Tom Rights and Public Sample Gate

This section is the Tom maintainer release gate for authorization, route status, prompt leakage, public assets, generated samples, validator commands, and final rights review.

### Tom Authorization Review

- [ ] Review `ian-xiaohei-illustrations/references/ips/tom/rights.md` for source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner, reviewer, review date, approval status, allowed directories, and allowed distribution channels.
- [ ] Record authorization review: PENDING / reviewer / date / approval status / authorization scope / release channels.
- [ ] Complete this authorization review before any Tom route status, public asset policy, or generated sample policy change.
```

Use the same structure for Ferris with these section names:

- `### Ferris Source Record Review`
- `### Rust Trademark Wording Review`
- `### Ferris Prompt Leakage Scan`
- `### Ferris Public Asset Policy`
- `### Ferris Generated Sample Policy`
- `### Final Ferris Release Review`

**Ferris current gate pattern** (lines 86-113):

```markdown
## Ferris Source, Trademark, and Public Sample Gate

Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.

This section is the Ferris maintainer release gate for source record review, Rust trademark wording, public rendered samples, release channels, and final endorsement-safe wording review.
```

Expand line 90 to include:

```markdown
This section is the Ferris maintainer release gate for source record review, Rust trademark wording, prompt leakage, public assets, generated samples, validator commands, and final endorsement-safe wording review.
```

**Source record fields source** (`ian-xiaohei-illustrations/references/ips/ferris/source.md` lines 55-65):

```markdown
## Sample Policy

- Public rendered Ferris samples: pending explicit release approval.
- Internal review samples: allowed for route-contract and later pack-design review with this source record attached as context.
- Sample approval record: reviewer, date, approval status, allowed directories, release channels, and trademark/endorsement review outcome must be recorded before public sample publication.

## Review Owner

- Owner: maintainer / release reviewer for the Ferris route.
- Review purpose: decide whether Ferris remains `source-reviewed`, expands to a selectable runtime route, or receives a different release status after downstream phases.
- Required review fields: reviewer, review date, approval status, source status, trademark boundary, allowed use, restricted use, distribution channels, and public-sample decision.
```

**Prompt leakage scan source** (`ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` lines 29-61):

```markdown
Reject or repair any output with:

- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage
- Rust-logo-forward composition
- bundled Rust marks
- endorsement wording
- broad release language
- source asset pose copying
- public mascot asset-sheet resemblance
- official logo arrangements
- missing source/trademark note
- missing output path
```

**Generated sample policy pattern:**

```markdown
### Ferris Generated Sample Policy

- [ ] Internal Ferris review samples may use `assets/<article-slug>-ferris/` while carrying `source-reviewed`, `source.md`, and release-review context.
- [ ] Public rendered Ferris samples require explicit release approval before publication in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- [ ] Record generated sample review before release: PENDING / reviewer / date / approval status / directories / release channels / trademark and endorsement-safe wording outcome.
```

**Installable boundary fix** (lines 115-120):

Change `both canonical IP packs` to all four packs:

```markdown
- [ ] Confirm `ian-xiaohei-illustrations/` contains `SKILL.md`, `agents/openai.yaml`, `references/routing.md`, Xiaohei, Littlebox, Tom, and Ferris canonical IP packs, legacy Xiaohei reference entry points, and skill-local assets.
```

**Public docs/path marker fix** (lines 122-129):

Replace the Xiaohei/Littlebox-only checklist with:

```markdown
- [ ] README documents Xiaohei as the implicit default visual IP.
- [ ] README documents Littlebox as an explicit active route.
- [ ] README documents Tom as an explicit `gated-authorized` protected-character route.
- [ ] README documents Ferris as an explicit `source-reviewed` Rust-community mascot route.
- [ ] README and `examples/prompts.md` keep raw and escaped output markers for Xiaohei, Littlebox, Tom, and Ferris.
- [ ] README keeps route metadata link `ian-xiaohei-illustrations/references/routing.md`.
- [ ] README or prompt docs keep canonical pack paths for `ian-xiaohei-illustrations/references/ips/xiaohei/`, `ian-xiaohei-illustrations/references/ips/littlebox/`, `ian-xiaohei-illustrations/references/ips/tom/`, and `ian-xiaohei-illustrations/references/ips/ferris/`.
```

Remove stale `## Phase 5 Scope Fences` from lines 130-136 or replace with current Phase 14/15 fences:

```markdown
## Phase 14 / Phase 15 Boundary

- [ ] Phase 14 release docs changed no validator implementation files.
- [ ] Phase 14 release docs changed no Node validator test files.
- [ ] Phase 15 validator/test evidence is present before v1.2 release.
```

### `ian-xiaohei-illustrations/references/routing.md` (route config docs, request-response)

**Analog:** `ian-xiaohei-illustrations/references/routing.md`

**Route rules pattern** (lines 5-14):

```markdown
- 用户使用 `Ferris`、`Rust mascot`、`Rust crab`、`Rustacean`、`Rust 吉祥物`、`Rust 螃蟹` 时，选择同一个 `ferris` 路由，路线状态保持 `source-reviewed`。
- 同时请求 Xiaohei、Littlebox、Tom 和 Ferris 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
- Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

**Ferris route row pattern** (line 23):

```markdown
| `ferris` | Ferris | `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹` | `false` | `ferris` | `references/ips/ferris/index.md`; `references/ips/ferris/source.md`; `references/ips/ferris/style-dna.md`; `references/ips/ferris/ferris-ip.md`; `references/ips/ferris/composition-patterns.md`; `references/ips/ferris/prompt-template.md`; `references/ips/ferris/qa-checklist.md` | Ferris source context from `rustacean.net` and Karen Rustad Tolva; attribution records source context while Rust trademark boundary is governed through `references/ips/ferris/source.md` | `source-reviewed` |
```

Routing wording sync is optional. If changed, keep metadata unchanged and only add the full directory / `source.md` public wording used by README and examples.

## Shared Patterns

### Public Ferris Phrase

**Source:** `README.md` lines 71-81, `examples/prompts.md` lines 145-149, `routing.md` line 14, `RELEASE_CHECKLIST.md` lines 86-90
**Apply to:** README, examples, routing docs, release checklist

```markdown
Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

### Ferris Source/Trademark Authority

**Source:** `NOTICE.md` lines 32-41 and `ian-xiaohei-illustrations/references/ips/ferris/source.md` lines 24-29
**Apply to:** NOTICE, README, examples, release checklist

```markdown
Ferris attribution records source context. Rust and Cargo marks, logos, official-affiliation claims, and endorsement wording are governed by Rust Foundation trademark policy context and release review.
```

```markdown
Ferris source/trademark authority: `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
```

### Full Ferris Pack Loading

**Source:** `routing.md` line 23 and `ian-xiaohei-illustrations/references/ips/ferris/index.md` lines 22-30
**Apply to:** README, examples, release checklist, optional routing sync

```markdown
`ian-xiaohei-illustrations/references/ips/ferris/`
`index.md`
`source.md`
`style-dna.md`
`ferris-ip.md`
`composition-patterns.md`
`prompt-template.md`
`qa-checklist.md`
```

### Phase 15 Validator/Test Boundary

**Source:** `14-CONTEXT.md` D-30 through D-32 and Ferris index line 53
**Apply to:** README maintainer validation and RELEASE_CHECKLIST automated gates

```markdown
Phase 15 owns Ferris validator/test expectation updates for the full seven-file Ferris route pack, docs markers, metadata validation, NOTICE validation, release checklist validation, raw/escaped path validation, Ferris smoke prompt validation, route leakage checks, public asset gates, generated sample gates, and Node parser tests.
```

## No Analog Found

No files lack analogs. Phase 14 is entirely pattern-based across existing public documentation, route metadata, NOTICE, and release checklist structures.

## Metadata

**Analog search scope:** `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/tom/`, `ian-xiaohei-illustrations/references/ips/ferris/`
**Files scanned:** 12
**Pattern extraction date:** 2026-06-13
