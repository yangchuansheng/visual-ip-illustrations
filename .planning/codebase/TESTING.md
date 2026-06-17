# Testing Patterns

**Analysis Date:** 2026-06-12

## Test Framework

**Runner:**
- Not detected. No `package.json`, `jest.config.*`, `vitest.config.*`, `playwright.config.*`, or test runner configuration exists at the repository root.
- Current validation is manual and checklist-driven through `skills/visual-ip-illustrations/references/qa-checklist.md`.

**Assertion Library:**
- Not detected. No automated assertion library is configured.
- Human assertions are encoded as required visual criteria in `skills/visual-ip-illustrations/references/qa-checklist.md` and usage examples in `examples/prompts.md`.

**Run Commands:**
```bash
# Not configured              # Run all tests
# Not configured              # Watch mode
# Not configured              # Coverage
```

## Test File Organization

**Location:**
- No `*.test.*`, `*.spec.*`, `tests/`, or `__tests__/` files are present.
- Manual QA guidance lives in `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Prompt smoke examples live in `examples/prompts.md`.
- Visual calibration assets live in `examples/images/`.

**Naming:**
- Automated test naming is not applicable.
- Example image names use ordered kebab-case: `examples/images/01-two-breakpoints.png`, `examples/images/02-sort-by-purpose.png`, `examples/images/03-one-fish-many-uses.png`.
- Prompt example headings describe use cases directly: "只做配图规划", "文章正文配图", "长文配图策略", "单个观点生成一张图", "工作流主题", "改图：去掉标题", "改图：增强小黑参与感", "生成一组风格样片" in `examples/prompts.md`.

**Structure:**
```text
skills/visual-ip-illustrations/
├── SKILL.md                         # Workflow and delivery contract
└── references/
    ├── qa-checklist.md              # Manual acceptance and iteration checks
    ├── prompt-template.md           # Generation and edit prompt templates
    ├── style-dna.md                 # Visual constraints used by QA
    ├── xiaohei-ip.md                # Character constraints used by QA
    └── composition-patterns.md      # Composition and anti-repeat checks

examples/
├── prompts.md                       # Manual smoke prompts
└── images/                          # Visual calibration examples
```

## Test Structure

**Suite Organization:**
```markdown
## 必过项

- 是 16:9 横版。
- 背景是干净白底。
- 有小黑。
- 小黑承担核心动作，不只是装饰。

## 失败信号

- 左上角有“常见坑 / Workflow / 系统架构图 / 路线图”等标题。
- 小黑像吉祥物、表情包或可爱卡通。

## 迭代方法

- 太普通：让小黑成为动作主体，加入一个奇怪但成立的隐喻。
- 太复杂：删节点，只保留一个动作和 3-5 个短标注。
```

**Patterns:**
- Treat `skills/visual-ip-illustrations/references/qa-checklist.md` as the acceptance test suite for every generated image.
- Validate generated images against required conditions first: 16:9 horizontal format, clean white background, Xiaohei present, Xiaohei performing the core action, fresh metaphor, sparse labels, controlled color usage, and one core structure per image.
- Validate failure signals second: top-left type titles, PPT/course/flowchart look, overfull nodes/arrows, long explanatory text, non-white backgrounds, UI screenshots, unreadable Chinese, rigid composition, or repeated example compositions.
- Use iteration guidance as corrective actions: centralize Xiaohei, reduce nodes and labels, remove diagram furniture, swap the main metaphor, or perform local text edits.

## Mocking

**Framework:** Not detected

**Patterns:**
```text
Use $ian-xiaohei-illustrations 为这个观点生成一张 16:9 正文配图：

信任不是喊出来的，而是一块证据一块证据铺过去。

画面要怪诞但清爽，小黑必须承担核心动作。
中文标注最多 5 个，短一点。
```

**What to Mock:**
- Not applicable for code-level mocking.
- For manual prompt validation, use focused sample inputs from `examples/prompts.md` to exercise planning, article generation, long-form strategy, single concept generation, workflow generation, title removal, Xiaohei participation improvement, and sample set generation.

**What NOT to Mock:**
- Do not treat `examples/images/` as reusable composition templates. `skills/visual-ip-illustrations/references/composition-patterns.md` limits examples to style calibration and lists prior compositions that should be avoided during normal generation.
- Do not validate only prompt text. Validate the generated visual output against `skills/visual-ip-illustrations/references/qa-checklist.md`.

## Fixtures and Factories

**Test Data:**
```text
Use $ian-xiaohei-illustrations 给这篇长文做配图策略。
不要平均配图，只挑认知锚点：核心判断、输入输出闭环、前后对比、常见坑、承接路径。
默认 6-8 张，先输出 shot list，不要生成图片。

<粘贴文章>
```

**Location:**
- Manual prompt fixtures are in `examples/prompts.md`.
- Visual fixtures/calibration examples are in `examples/images/`.
- Skill behavior references are in `skills/visual-ip-illustrations/references/`.

## Coverage

**Requirements:** None enforced by tooling.

**View Coverage:**
```bash
# Not configured
```

**Manual Coverage Targets:**
- Planning flow: validate shot list output using `skills/visual-ip-illustrations/SKILL.md` and `examples/prompts.md`.
- Single-image generation flow: validate the prompt template and output image using `skills/visual-ip-illustrations/references/prompt-template.md` and `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Edit flow: validate title-removal and Xiaohei-participation edits using `examples/prompts.md` and `skills/visual-ip-illustrations/references/prompt-template.md`.
- Anti-repeat flow: compare against restricted old compositions in `skills/visual-ip-illustrations/references/composition-patterns.md` and calibration assets in `examples/images/`.

## Test Types

**Unit Tests:**
- Not used. No executable units are present.

**Integration Tests:**
- Manual skill smoke tests are the effective integration tests. Use `examples/prompts.md` in Codex with the installed `skills/visual-ip-illustrations/` skill directory and inspect the generated response or image.
- For planning tasks, verify that the response selects cognitive anchors, produces 4-8 images for normal articles, and includes placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese labels per `skills/visual-ip-illustrations/SKILL.md`.
- For generation tasks, verify that each image is generated separately, uses the visual DNA in `skills/visual-ip-illustrations/references/style-dna.md`, and passes `skills/visual-ip-illustrations/references/qa-checklist.md`.

**E2E Tests:**
- No automated E2E framework is configured.
- Manual end-to-end validation path:
```text
1. Install `skills/visual-ip-illustrations/` into `${CODEX_HOME:-$HOME/.codex}/skills/` using the commands in `README.md`.
2. Run a planning prompt from `examples/prompts.md`.
3. Run a generation prompt from `examples/prompts.md`.
4. Inspect each generated image against `skills/visual-ip-illustrations/references/qa-checklist.md`.
5. Save accepted images under `assets/<article-slug>-illustrations/` with ordered names, following `skills/visual-ip-illustrations/SKILL.md`.
```

## Common Patterns

**Async Testing:**
```text
For image generation, wait for each image result, inspect it individually, then regenerate or edit only the failing image according to `skills/visual-ip-illustrations/references/qa-checklist.md`.
```

**Error Testing:**
```text
Trigger: generated image has a top-left "Workflow / 流程图" title.
Expected corrective action: use the title-removal edit prompt in `skills/visual-ip-illustrations/references/prompt-template.md` and preserve the rest of the image.

Trigger: Xiaohei is decorative.
Expected corrective action: use the Xiaohei-participation regeneration prompt in `skills/visual-ip-illustrations/references/prompt-template.md`.

Trigger: output repeats an old example composition.
Expected corrective action: use `skills/visual-ip-illustrations/references/composition-patterns.md` to replace the main object and Xiaohei action while preserving the core meaning.
```

---

*Testing analysis: 2026-06-12*
