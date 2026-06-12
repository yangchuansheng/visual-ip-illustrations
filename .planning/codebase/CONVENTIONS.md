# Coding Conventions

**Analysis Date:** 2026-06-12

## Naming Patterns

**Files:**
- Use lowercase kebab-case for Markdown reference files: `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, `ian-xiaohei-illustrations/references/composition-patterns.md`, `ian-xiaohei-illustrations/references/prompt-template.md`, `ian-xiaohei-illustrations/references/qa-checklist.md`.
- Use uppercase conventional names for repository metadata: `README.md`, `LICENSE`, `NOTICE.md`.
- Use numbered kebab-case names for example image assets: `examples/images/01-two-breakpoints.png`, `examples/images/02-sort-by-purpose.png`, `examples/images/08-trust-bridge.png`.
- Use descriptive English slugs for generated illustration output paths when adding assets: `assets/<article-slug>-illustrations/01-topic-name.png`, as specified in `ian-xiaohei-illustrations/SKILL.md`.

**Functions:**
- Not applicable. This repository contains a Codex Skill package and Markdown/YAML documentation, with no application source functions detected.

**Variables:**
- Template placeholders use brace-wrapped Chinese names inside plain text prompts: `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, `{标注词1}` in `ian-xiaohei-illustrations/references/prompt-template.md`.
- Directory variables in shell examples use uppercase environment variable style: `${CODEX_HOME:-$HOME/.codex}` in `README.md`.

**Types:**
- Not applicable. No TypeScript, Python, Go, Rust, or other typed source files are present.

## Code Style

**Formatting:**
- No automated formatter configuration is detected. There is no `.prettierrc`, `biome.json`, `.editorconfig`, or package manifest at the repository root.
- Markdown uses ATX headings (`#`, `##`, `###`) and short bullet lists. Continue this format in `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/SKILL.md`, and files under `ian-xiaohei-illustrations/references/`.
- Use fenced code blocks with explicit language hints for command examples and prompt templates. Existing examples use `bash` in `README.md` and `text` in `README.md`, `examples/prompts.md`, and `ian-xiaohei-illustrations/references/prompt-template.md`.
- Keep reference sections compact and scannable. Files such as `ian-xiaohei-illustrations/references/style-dna.md` and `ian-xiaohei-illustrations/references/qa-checklist.md` rely on short imperatives and checklists.

**Linting:**
- No linting configuration is detected. There is no `eslint.config.*`, `.eslintrc*`, `package.json`, `markdownlint` config, or CI lint command.
- Treat the reference documents themselves as the source of style constraints for generated prompts and image QA. Primary rule files are `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, and `ian-xiaohei-illustrations/references/qa-checklist.md`.

## Import Organization

**Order:**
1. Not applicable. No source imports are present.
2. Skill routing uses explicit Markdown references in `ian-xiaohei-illustrations/SKILL.md`.
3. When adding new reference files, list them in `ian-xiaohei-illustrations/SKILL.md` under "先读这些参考" with the path and one-line purpose.

**Path Aliases:**
- Not applicable. No path alias configuration is detected.
- Use repository-relative paths in documentation: `ian-xiaohei-illustrations/references/qa-checklist.md`, `examples/prompts.md`, `assets/<article-slug>-illustrations/`.

## Error Handling

**Patterns:**
- User-facing workflow errors are handled as image-generation QA outcomes, not thrown exceptions. `ian-xiaohei-illustrations/SKILL.md` instructs regeneration or local edits when generated images fail quality checks.
- Use `ian-xiaohei-illustrations/references/qa-checklist.md` as the failure taxonomy for generated illustrations: decorative Xiaohei, crowded composition, PPT-like diagrams, excessive Chinese text, top-left titles, cute style drift, non-white backgrounds, severe Chinese typos, and repeated old compositions.
- Prefer corrective prompt changes for quality failures. `ian-xiaohei-illustrations/references/qa-checklist.md` prescribes reducing nodes, making Xiaohei the action subject, removing titles/borders/grids, changing the main object/action, and reducing labels.
- Editing prompts should preserve unaffected content explicitly. `ian-xiaohei-illustrations/references/prompt-template.md` includes an edit pattern that removes a title while preserving characters, labels, paths, line style, composition, aspect ratio, and image quality.

## Logging

**Framework:** Not detected

**Patterns:**
- There is no runtime logging framework or application logger.
- Generated-image delivery reports should include count, purpose, saved path, and stability notes according to `ian-xiaohei-illustrations/SKILL.md`.

## Comments

**When to Comment:**
- Use Markdown prose and bullets instead of code comments. This project is documentation-driven.
- Add comments only as user-facing guidance in reference docs, with action-oriented rules that directly affect skill behavior.

**JSDoc/TSDoc:**
- Not applicable. No JavaScript or TypeScript source files are present.

## Function Design

**Size:** Not applicable for code functions. For workflow sections, keep each section narrowly scoped: digest content, produce shot list, generate a single image, check/iterate, save delivery in `ian-xiaohei-illustrations/SKILL.md`.

**Parameters:** Use explicit prompt fields for image generation tasks. `ian-xiaohei-illustrations/references/prompt-template.md` expects theme, structure type, core idea, composition, suggested elements, Chinese labels, color use, and constraints.

**Return Values:** User-facing outputs follow task mode:
- Shot-list mode returns placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese labels as described in `ian-xiaohei-illustrations/SKILL.md` and `examples/prompts.md`.
- Generation mode returns generated image count, purpose per image, save path, and stability notes as described in `ian-xiaohei-illustrations/SKILL.md`.

## Module Design

**Exports:** 
- The installable skill is the directory `ian-xiaohei-illustrations/`, with metadata and instructions in `ian-xiaohei-illustrations/SKILL.md`.
- Keep shared guidance in `ian-xiaohei-illustrations/references/` and examples in `examples/`.
- Keep agent configuration in `ian-xiaohei-illustrations/agents/openai.yaml`.

**Barrel Files:** Not applicable.

**Reference File Responsibilities:**
- `ian-xiaohei-illustrations/SKILL.md`: skill metadata, trigger scope, workflow, delivery contract, and reference routing.
- `ian-xiaohei-illustrations/references/style-dna.md`: visual style, composition density, color rules, and visual vetoes.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md`: Xiaohei character identity, appearance, behavior, action library, and vetoes.
- `ian-xiaohei-illustrations/references/composition-patterns.md`: composition types, metaphor generation rules, object/action pools, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/prompt-template.md`: single-image generation prompt and edit prompt templates.
- `ian-xiaohei-illustrations/references/qa-checklist.md`: acceptance checklist, failure signals, iteration methods, and delivery judgment.
- `examples/prompts.md`: copyable usage prompts for planning, generation, long-form strategy, single concept generation, workflow themes, edits, and sample set generation.

---

*Convention analysis: 2026-06-12*
