# Phase 07: Tom Canonical Pack - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 6
**Analogs found:** 6 / 6

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/references/ips/tom/index.md` | config | request-response | `ian-xiaohei-illustrations/references/ips/littlebox/index.md` | exact |
| `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` | config | transform | `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` | role-match |
| `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` | model | transform | `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` | role-match |
| `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` | utility | transform | `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` | exact |
| `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` | utility | request-response | `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` | exact |
| `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` | utility | transform | `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/references/ips/tom/index.md` (config, request-response)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/index.md`

**Index responsibility pattern** (lines 1-12):

```markdown
# Littlebox IP Pack

Canonical Littlebox references for the selectable `littlebox` route.

- `style-dna.md`: visual language, palette, background balance, marker texture, label style, and visual vetoes.
- `littlebox-ip.md`: closed-only paper-box identity, anatomy, action vocabulary, recognition rule, and failure modes.
- `composition-patterns.md`: Littlebox composition families, metaphor invention, spatial rules, flow marks, and anti-repeat rules.
- `language-and-labels.md`: response language, English prompt language, user-language visible labels, and label repair rules.
- `prompt-template.md`: planning output format, single-image English prompt template, edit prompts, and output path reminder.
- `qa-checklist.md`: Littlebox pass/fail gate, iteration moves, background balance checks, and delivery judgment.

Output path: `assets/<article-slug>-littlebox/`.
```

**Route metadata source** (routing lines 16-20):

```markdown
| id | display_name | aliases | default | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific through `references/ips/tom/rights.md` | `gated-authorized` |
```

**Apply to Tom:** mirror the Littlebox list, add `rights.md`, state `Route status: gated-authorized`, state `Rights source: rights.md`, and set `Output path: assets/<article-slug>-tom/`.

---

### `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` (config, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md`

**Must-have style pattern** (lines 5-19):

```markdown
## Must Have

- 16:9 horizontal article illustration by default.
- Black `#000000` as the dominant line, object, character, and label color.
- Thick rough black marker linework with chunky brush-pen weight.
- Generous whitespace. The main Littlebox subject usually occupies 35%-55% of the canvas.
- One core idea per image.
- Littlebox performs the conceptual action.
- Sparse visible labels, usually 3-6 total.
```

**Visual veto pattern** (lines 56-79):

```markdown
## Visual Vetoes

Regenerate or edit when the result becomes:

- glossy mascot art
- cute sticker pack
- polished vector infographic
- thin-line icon art
- clean digital font labels
- formal PPT diagram or dense course slide
- children's book scene
- shadows, gradients, paper texture, grainy background, or vignette
- too many arrows, nodes, labels, or panels
- top-left diagram title such as `Workflow`, `System`, `Roadmap`, or `Framework`
```

**Secondary analog:** `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md`

**White sparse article-illustration pattern** (lines 9-17):

```markdown
- 16:9 横版正文配图。
- 纯白背景：不要米色、暖灰、纸张纹理、渐变、阴影、噪点、复古纸感。
- 黑色手绘线稿为主：细线、轻微抖动、不机械、不矢量、不厚重描边。
- 大量留白：主体占画面约 40%-60%，至少 35% 空白，最好有一整块安静区域。
- 少量中文手写批注：最多 5-8 处，每处尽量 2-8 个字。
- 一张图只讲一个核心动作、结构、状态或隐喻。
```

**Apply to Tom:** use sparse 16:9 article illustration rules, preserve Tom-recognition cues through simplified grey/blue-grey cat body, white muzzle and belly areas, expressive ears, tail, paws, and Tom-like silhouette. Include protected-route vetoes: logo, title card, source-frame recreation, default Jerry usage, broad cast expansion, generic-cat drift, dense explainer, and route leakage.

---

### `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` (model, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md`

**Identity marker pattern** (lines 5-16):

```markdown
## Core Identity

- Littlebox is closed-only in final article illustrations.
- Default view is front-left three-quarter: the front panel is the largest visible face, one side panel is visible, and the closed top lid is visible.
- Two small dot eyes sit on the front panel, horizontally centered.
- Tiny legs attach under the front panel.
- Body is white or near-white, never tan, kraft brown, beige, or realistic cardboard.
- The outline uses fat, rough, wobbly black marker strokes.
- Expression is calm and deadpan: no mouth, smile, eyebrows, blush, costume, or accessories.
```

**Action vocabulary pattern** (lines 47-59):

```markdown
## Action Vocabulary

Use Littlebox to:

- collect, catch, hold, and carry
- close, seal, and stamp
- sort, fold, compress, and bundle
- bridge, block, route, and redirect
- hide, reveal, store, and deliver
- spill, overflow, recover, and repair
```

**Recognition and active-character gate** (lines 68-83):

```markdown
## Failure Modes

Regenerate or rewrite if:

- Littlebox stands beside the idea as decoration.
- Littlebox becomes a smiling cute mascot, wears accessories, or looks like a delivery-company icon.
- Removing Littlebox would leave the core metaphor unchanged.
```

**Secondary analog:** `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md`

**Participation test** (lines 51-53):

```markdown
## 判断标准

如果去掉小黑，图的核心隐喻还能完全成立，说明小黑太装饰了；要重写提示词，让小黑成为动作主体。
```

**Apply to Tom:** define Tom as Tom from Tom and Jerry with route status `gated-authorized`. Preserve recognizable Tom cues while simplifying for article explanation. Make Tom pull, chase an idea, operate a lever, guard a gate, catch evidence, hold back chaos, bridge a gap, sort signals, repair a broken flow, or stamp a result. State that Tom must carry the cognitive action.

---

### `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` (utility, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md`

**Structure-family pattern** (lines 3-53):

```markdown
## 基础结构类型

选择一种结构即可，不要混太多。

### Workflow 流程

适合：输入 -> 处理 -> 输出，内容生产，AI 工作流，自动化链路。

画法：左侧输入，中间小黑或怪机器处理，右侧输出，橙色箭头表达主流向。

### 前后对比

适合：混乱/有序，手动/自动，分散/收拢，焦虑/稳定。

画法：左混乱，右稳定，中间橙色箭头。角色可以更夸张。
```

**Metaphor invention pattern** (lines 55-64):

```markdown
## 原创隐喻生成法

每次都从当前文章重新发明隐喻，不能照搬旧图。

### 三步

1. 把抽象概念换成一个物理动作：卡住、漏掉、变重、分拣、沉淀、发酵、开门、折叠、拆包、回流。
2. 把系统结构换成一个低科技物件：坏掉的机器、纸箱、抽屉、水管、邮筒、怪表盘、秤、井、梯子、奇怪工位。
3. 让小黑承担动作：不是站旁边，而是卡在机器里、拉错线、守门、搬运、修补、称重、扶梯子、记录、把东西塞进某个怪装置。
```

**Object/action pool pattern** (lines 65-73):

```markdown
### 可用物件池

- 纸箱、抽屉、旧机器、漏斗、秤、邮筒、门、井、梯子、水管、线团、闸门、转盘、黑盒、打孔器、压面机、晾衣绳、怪工位。
- 用时只选 1-2 个，不要堆满。

### 小黑动作池

- 拉、扛、塞、捞、压、称、缝、剪、拧、守、推、接、拆、标记、回收。
```

**Apply to Tom:** keep one composition family per image and give Tom the action. Use Tom-friendly object pools: evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, and warning marks. Include anti-repeat and source-frame-recreation gates.

---

### `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` (utility, request-response)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md`

**Language and output path pattern** (lines 1-5):

```markdown
# Littlebox Prompt Template

Use this file after selecting the `littlebox` route. Planning and delivery notes follow the user's language. Image-generation prompts stay English, with visible labels quoted exactly in the user's language.

Output path: `assets/<article-slug>-littlebox/`.
```

**Planning output fields pattern** (lines 7-21):

```text
## Planning Output Format

Use this format for Littlebox shot lists:

1. Placement: [where it appears]
   Core idea: [one sentence]
   Littlebox state: closed
   Visual metaphor: [physical box action]
   Background: [pale sky blue #E3F2FD / pale lavender #E6E6FA]
   Elements: [3-5 objects]
   Labels: [short visible labels in the user's language]
```

**Single-image prompt pattern** (lines 27-49):

```text
Generate one standalone 16:9 horizontal article illustration.

Scene: [core idea in one sentence].

Action: Littlebox must perform the core conceptual action while staying closed.

Visual metaphor: [physical box action].

Composition: [composition family]. Elements are distributed across the full 16:9 canvas with horizontal and vertical variation.

Visible handwritten labels, copied exactly in the user's language: [quoted labels]. Keep labels short, legible, separated, and drawn as rough handwritten black marker strokes. Copy non-Latin scripts exactly and do not translate them.

Constraints: one image explains one core idea. Generous whitespace, clean sparse composition, strange but clear.
```

**Editing prompt pattern** (lines 51-69):

```text
Regenerate the image with the same core idea, selected background, palette, and sparse marker style, but make Littlebox perform the central conceptual action.
```

```text
Edit the image to keep the illustration unchanged, but replace the visible handwritten labels with these exact short labels: [labels]. Preserve the same rough handwritten marker style, spacing, and language.
```

```text
Regenerate as a loose hand-drawn article illustration instead of a formal diagram. Remove grid-like alignment, excessive arrows, boxes-within-boxes, and title text. Keep one enlarged closed Littlebox action and only 2-4 supporting elements.
```

**Required Tom planning fields:** placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.

**Apply to Tom:** keep generation prompt text English. Keep visible labels in the user's language. Include route-status note in planning, generation, and edit sections. Include `rights.md` linkage and output reminder `assets/<article-slug>-tom/`. Add edit prompts for stronger Tom participation, off-model Tom identity repair, title removal, text reduction, and preserving unaffected content.

---

### `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` (utility, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md`

**Pass criteria pattern** (lines 5-31):

```markdown
## Pass Criteria

- Image is 16:9 horizontal unless the user requested another shape.
- Littlebox appears and is recognizable.
- Littlebox is the active operator of the concept.
- The image has one core idea.
- Main subject occupies about 35%-55% of the canvas.
- Visible labels are short, usually 3-6 total.
- Labels use the user's language and look like rough handwritten marker text.
```

**Fail signal pattern** (lines 32-62):

```markdown
## Fail Signals

Regenerate or edit if:

- Littlebox is passive or removable.
- Labels use clean digital fonts, sans-serif type, bold poster type, vector text, calligraphy, or pasted-on typography.
- Labels are long, mistranslated, or unreadable.
- Too many nodes, arrows, labels, or panels appear.
- The image becomes a formal process chart, dense course slide, UI screen, logistics logo, package mascot, or cute sticker.
```

**Iteration pattern** (lines 63-77):

```markdown
## Iteration Moves

- Too ordinary: choose a more physical Littlebox action.
- Too complex: delete objects until Littlebox plus 2-4 supports remain.
- Too cute: emphasize dot eyes, deadpan expression, no smile, no costume.
- Too diagrammatic: enlarge one action and loosen alignment.
- Text wrong: reduce label count and quote exact labels.
```

**Secondary analog:** `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md`

**Delivery judgment pattern** (lines 42-46):

```markdown
## 交付判断

高质量图应该让读者先觉得“有点怪”，然后 1 秒内看懂结构。

如果第一眼像教程页，而不是白纸上的怪诞产品草图，就不合格。
```

**Apply to Tom:** add protected-route pass criteria: `gated-authorized` note present, `rights.md` linked where delivery/reporting references rights, output path uses `assets/<article-slug>-tom/`. Add Tom fail signals: generic cat, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, route leakage, and missing rights-status note.

## Shared Patterns

### Route Status And Rights

**Source:** `ian-xiaohei-illustrations/references/ips/tom/rights.md`
**Apply to:** `index.md`, `prompt-template.md`, `qa-checklist.md`, and any Tom planning or edit workflow surface.

```markdown
- Character route: Tom.
- Source context: Tom from Tom and Jerry.
- Route status: `gated-authorized`.
```

```markdown
- Current scope: protected-character route contract for maintainer review, route metadata, attribution boundary wording, and future Tom reference-pack planning.
- Approval status: `gated-authorized`.
- Approved distribution channels: Pending maintainer approval before public rendered Tom samples or broad release claims.
```

### Output Path

**Source:** `ian-xiaohei-illustrations/references/routing.md`
**Apply to:** `index.md`, `prompt-template.md`, `qa-checklist.md`

```markdown
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
- `tom` 文件名使用有序英文 slug，例如 `01-topic-name.png`。
```

### English Generation Prompts And User-Language Labels

**Source:** `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md`
**Apply to:** `prompt-template.md`

```markdown
## Prompt Language

Write every image-generation prompt in English for model consistency. Put visible labels in quoted exact text using the user's language.
```

```markdown
- Keep labels in the user's language.
- Quote visible labels exactly in the prompt.
- For non-Latin scripts, say: `copy the label text exactly, preserve the script, do not translate it`.
- Reduce label count before making text tiny.
```

### Phase 8/9/10 Scope Fences

**Source:** `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md`
**Apply to:** all Phase 7 target files as scope comments or stable markers when relevant.

```markdown
- Phase 8 owns SKILL.md controller behavior, explicit Tom alias routing, omitted-IP default behavior, and mixed Xiaohei/Littlebox/Tom route groups.
- Phase 9 owns README expansion, `examples/prompts.md` expansion, release checklist expansion, `agents/openai.yaml` wording, and public route guidance.
- Phase 10 owns full validator hardening, Node tests, route leakage checks, canonical-pack marker checks, docs markers, and public-sample gate hardening.
- v2 owns broader authorized franchise/cast support beyond solo Tom.
```

### Validator Marker Awareness

**Source:** `scripts/validate-skill-package.mjs`
**Apply to:** all Tom files, with exact stable phrases for Phase 10 checks.

```javascript
function assertMarkers(text, relativePath, markers) {
```

```javascript
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
```

Use stable marker phrases in Tom files: `gated-authorized`, `rights.md`, `assets/<article-slug>-tom/`, `generic cat`, `passive Tom`, `source-frame recreation`, `show logo`, `title card`, `default Jerry`, `broad cast expansion`, and `route leakage`.

## No Analog Found

All six target files have close analogs in Xiaohei or Littlebox packs.

## Metadata

**Analog search scope:** `ian-xiaohei-illustrations/references/routing.md`, `ian-xiaohei-illustrations/references/ips/xiaohei/`, `ian-xiaohei-illustrations/references/ips/littlebox/`, `ian-xiaohei-illustrations/references/ips/tom/`, `scripts/validate-skill-package.mjs`
**Files scanned:** 19
**Pattern extraction date:** 2026-06-13
