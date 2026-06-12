<!-- GSD:project-start source:PROJECT.md -->

## Project

**Multi-IP Article Illustration Skills**

This project evolves the current Ian Xiaohei article-illustration Codex Skill into a multi-visual-IP skill system. It keeps the existing Xiaohei experience working while adding selectable visual IPs, starting with the Littlebox paper-box character from `okooo5km/5km-littlebox-illustrations`.

The product is for writers, product thinkers, AI workflow authors, and Codex users who want article body illustrations that explain one cognitive action through a consistent visual language. The near-term outcome is a reliable skill package where users can choose Xiaohei or Littlebox and get the right planning, prompt, QA, asset path, documentation, and attribution behavior.

**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

### Constraints

- **Runtime**: Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata.
- **Compatibility**: Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working.
- **IP Isolation**: Xiaohei and Littlebox rules must remain separately readable, testable, and routable.
- **Attribution**: Preserve MIT license notices and derived documentation attribution for Ian and okooo5km.
- **No Build Runtime**: The project should stay usable as a lightweight skill package; validation can be script-based but should not require a full app framework.
- **Image Generation Dependency**: Final generation still depends on the host agent's `image_gen` capability.
- **Documentation Language**: User-facing repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->

## Technology Stack

## Languages

- Markdown - Skill instructions, repository documentation, prompt templates, QA rules, and examples live in `ian-xiaohei-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, and `ian-xiaohei-illustrations/references/*.md`.
- YAML - Codex agent interface metadata lives in `ian-xiaohei-illustrations/agents/openai.yaml`.
- Image assets - PNG and JPG examples support visual calibration in `examples/images/*.png` and `assets/ian-wechat-qr.jpg`.

## Runtime

- Codex Skills runtime - The install target is `${CODEX_HOME:-$HOME/.codex}/skills`, documented in `README.md`.
- Host-provided image generation runtime - The skill instructs the agent to call the built-in `image_gen` capability from `ian-xiaohei-illustrations/SKILL.md`.
- No standalone application runtime detected - No `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, or `go.mod` is present.
- Not applicable - This repository does not define installable code dependencies.
- Lockfile: missing by design for this documentation/skill package.

## Frameworks

- Codex Skill format - `ian-xiaohei-illustrations/SKILL.md` defines the skill name, description, routing triggers, workflow, reference files, output contract, and save-path convention.
- Codex agent metadata - `ian-xiaohei-illustrations/agents/openai.yaml` defines display metadata and `policy.allow_implicit_invocation`.
- Manual QA checklist - `ian-xiaohei-illustrations/references/qa-checklist.md` defines acceptance criteria for generated images.
- No automated test framework detected - The repo contains no test runner config or test files.
- No build tool detected - The repository ships Markdown/YAML instructions and static image assets.
- GitHub README distribution - `README.md` documents clone, copy-to-skills installation, usage prompts, examples, and related links.

## Key Dependencies

- Codex Skills loader - Required to discover and execute `ian-xiaohei-illustrations/SKILL.md` after copying the `ian-xiaohei-illustrations/` directory into `${CODEX_HOME:-$HOME/.codex}/skills`.
- Built-in `image_gen` capability - Required for direct image generation and editing workflows described in `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/prompt-template.md`.
- Workspace filesystem access - Required to save final images under `assets/<article-slug>-illustrations/`, as specified in `ian-xiaohei-illustrations/SKILL.md`.
- Git - Used for cloning and distributing the repository, documented in `README.md`.
- Static image assets - `examples/images/*.png` are style calibration examples; `assets/ian-wechat-qr.jpg` is an author contact asset referenced by `README.md`.

## Configuration

- Install path is configured by `CODEX_HOME`; fallback is `$HOME/.codex`, documented in `README.md`.
- Runtime behavior is configured by frontmatter in `ian-xiaohei-illustrations/SKILL.md` and metadata in `ian-xiaohei-illustrations/agents/openai.yaml`.
- Style, prompt, and QA behavior is configured by reference files in `ian-xiaohei-illustrations/references/`.
- No `.env` files detected in the repository root or first-level subdirectories.
- Build config files: Not detected.
- TypeScript config: Not detected.
- Bundler config: Not detected.
- Lint/format config: Not detected.

## Platform Requirements

- A Codex environment that supports local skills installed under `${CODEX_HOME:-$HOME/.codex}/skills`.
- An image generation/editing capability exposed to the agent as `image_gen`.
- Filesystem write access to the active workspace for generated assets under `assets/<article-slug>-illustrations/`.
- Not applicable as a hosted service.
- Distribution target is a Git repository plus local Codex skill installation.

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

## Naming Patterns

- Use lowercase kebab-case for Markdown reference files: `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, `ian-xiaohei-illustrations/references/composition-patterns.md`, `ian-xiaohei-illustrations/references/prompt-template.md`, `ian-xiaohei-illustrations/references/qa-checklist.md`.
- Use uppercase conventional names for repository metadata: `README.md`, `LICENSE`, `NOTICE.md`.
- Use numbered kebab-case names for example image assets: `examples/images/01-two-breakpoints.png`, `examples/images/02-sort-by-purpose.png`, `examples/images/08-trust-bridge.png`.
- Use descriptive English slugs for generated illustration output paths when adding assets: `assets/<article-slug>-illustrations/01-topic-name.png`, as specified in `ian-xiaohei-illustrations/SKILL.md`.
- Not applicable. This repository contains a Codex Skill package and Markdown/YAML documentation, with no application source functions detected.
- Template placeholders use brace-wrapped Chinese names inside plain text prompts: `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, `{标注词1}` in `ian-xiaohei-illustrations/references/prompt-template.md`.
- Directory variables in shell examples use uppercase environment variable style: `${CODEX_HOME:-$HOME/.codex}` in `README.md`.
- Not applicable. No TypeScript, Python, Go, Rust, or other typed source files are present.

## Code Style

- No automated formatter configuration is detected. There is no `.prettierrc`, `biome.json`, `.editorconfig`, or package manifest at the repository root.
- Markdown uses ATX headings (`#`, `##`, `###`) and short bullet lists. Continue this format in `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/SKILL.md`, and files under `ian-xiaohei-illustrations/references/`.
- Use fenced code blocks with explicit language hints for command examples and prompt templates. Existing examples use `bash` in `README.md` and `text` in `README.md`, `examples/prompts.md`, and `ian-xiaohei-illustrations/references/prompt-template.md`.
- Keep reference sections compact and scannable. Files such as `ian-xiaohei-illustrations/references/style-dna.md` and `ian-xiaohei-illustrations/references/qa-checklist.md` rely on short imperatives and checklists.
- No linting configuration is detected. There is no `eslint.config.*`, `.eslintrc*`, `package.json`, `markdownlint` config, or CI lint command.
- Treat the reference documents themselves as the source of style constraints for generated prompts and image QA. Primary rule files are `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, and `ian-xiaohei-illustrations/references/qa-checklist.md`.

## Import Organization

- Not applicable. No path alias configuration is detected.
- Use repository-relative paths in documentation: `ian-xiaohei-illustrations/references/qa-checklist.md`, `examples/prompts.md`, `assets/<article-slug>-illustrations/`.

## Error Handling

- User-facing workflow errors are handled as image-generation QA outcomes, not thrown exceptions. `ian-xiaohei-illustrations/SKILL.md` instructs regeneration or local edits when generated images fail quality checks.
- Use `ian-xiaohei-illustrations/references/qa-checklist.md` as the failure taxonomy for generated illustrations: decorative Xiaohei, crowded composition, PPT-like diagrams, excessive Chinese text, top-left titles, cute style drift, non-white backgrounds, severe Chinese typos, and repeated old compositions.
- Prefer corrective prompt changes for quality failures. `ian-xiaohei-illustrations/references/qa-checklist.md` prescribes reducing nodes, making Xiaohei the action subject, removing titles/borders/grids, changing the main object/action, and reducing labels.
- Editing prompts should preserve unaffected content explicitly. `ian-xiaohei-illustrations/references/prompt-template.md` includes an edit pattern that removes a title while preserving characters, labels, paths, line style, composition, aspect ratio, and image quality.

## Logging

- There is no runtime logging framework or application logger.
- Generated-image delivery reports should include count, purpose, saved path, and stability notes according to `ian-xiaohei-illustrations/SKILL.md`.

## Comments

- Use Markdown prose and bullets instead of code comments. This project is documentation-driven.
- Add comments only as user-facing guidance in reference docs, with action-oriented rules that directly affect skill behavior.
- Not applicable. No JavaScript or TypeScript source files are present.

## Function Design

- Shot-list mode returns placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese labels as described in `ian-xiaohei-illustrations/SKILL.md` and `examples/prompts.md`.
- Generation mode returns generated image count, purpose per image, save path, and stability notes as described in `ian-xiaohei-illustrations/SKILL.md`.

## Module Design

- The installable skill is the directory `ian-xiaohei-illustrations/`, with metadata and instructions in `ian-xiaohei-illustrations/SKILL.md`.
- Keep shared guidance in `ian-xiaohei-illustrations/references/` and examples in `examples/`.
- Keep agent configuration in `ian-xiaohei-illustrations/agents/openai.yaml`.
- `ian-xiaohei-illustrations/SKILL.md`: skill metadata, trigger scope, workflow, delivery contract, and reference routing.
- `ian-xiaohei-illustrations/references/style-dna.md`: visual style, composition density, color rules, and visual vetoes.
- `ian-xiaohei-illustrations/references/xiaohei-ip.md`: Xiaohei character identity, appearance, behavior, action library, and vetoes.
- `ian-xiaohei-illustrations/references/composition-patterns.md`: composition types, metaphor generation rules, object/action pools, and anti-repeat rules.
- `ian-xiaohei-illustrations/references/prompt-template.md`: single-image generation prompt and edit prompt templates.
- `ian-xiaohei-illustrations/references/qa-checklist.md`: acceptance checklist, failure signals, iteration methods, and delivery judgment.
- `examples/prompts.md`: copyable usage prompts for planning, generation, long-form strategy, single concept generation, workflow themes, edits, and sample set generation.

<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

## System Overview

```text

```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Skill manifest and workflow | Defines skill name, trigger description, user task routing, image generation workflow, delivery rules, and progressive reference loading | `ian-xiaohei-illustrations/SKILL.md` |
| OpenAI agent metadata | Defines display name, short description, default prompt, and implicit invocation policy for the skill package | `ian-xiaohei-illustrations/agents/openai.yaml` |
| Style DNA reference | Defines required visual language: 16:9 horizontal, pure white background, hand-drawn black line art, sparse red/orange/blue handwritten labels, whitespace, and veto patterns | `ian-xiaohei-illustrations/references/style-dna.md` |
| Xiaohei IP reference | Defines the recurring character's shape, role, personality, action responsibilities, and usage constraints | `ian-xiaohei-illustrations/references/xiaohei-ip.md` |
| Composition pattern reference | Defines allowed structure types, metaphor generation method, object/action pools, and anti-copy rules for prior examples | `ian-xiaohei-illustrations/references/composition-patterns.md` |
| Prompt template reference | Provides the single-image generation prompt template and edit prompts for title removal and stronger character participation | `ian-xiaohei-illustrations/references/prompt-template.md` |
| QA checklist reference | Defines pass/fail checks and iteration methods for generated illustrations | `ian-xiaohei-illustrations/references/qa-checklist.md` |
| Install and usage documentation | Explains repository purpose, installation, examples, workflow, output location, and project directory map | `README.md` |
| User prompt examples | Provides copyable invocation prompts for planning, article illustration, long-form strategy, single concept generation, image editing, and style samples | `examples/prompts.md` |
| Skill-local visual examples | Provides calibration examples that installed skill users can inspect at low frequency | `ian-xiaohei-illustrations/assets/examples/` |
| Repository-level preview examples | Provides README-linked public example images | `examples/images/` |

## Pattern Overview

- The executable behavior is instruction-driven. `ian-xiaohei-illustrations/SKILL.md` is the central controller and uses `references/*.md` as modular policy documents.
- Reference files are loaded on demand. `ian-xiaohei-illustrations/SKILL.md` explicitly instructs agents to read only the needed files from `ian-xiaohei-illustrations/references/`.
- Image generation is externalized to the agent runtime. The repository contains prompts, style rules, QA rules, and calibration images; generated PNG outputs are written by the consuming agent to `assets/<article-slug>-illustrations/`.
- Examples are calibration assets. `ian-xiaohei-illustrations/references/composition-patterns.md` treats `ian-xiaohei-illustrations/assets/examples/` as style-density references and prohibits direct reuse of old compositions during normal generation.

## Layers

- Purpose: Define how the skill is triggered, what tasks it accepts, which references to load, and how to deliver generated assets.
- Location: `ian-xiaohei-illustrations/SKILL.md`
- Contains: YAML front matter, core positioning, reference routing, workflow stages, generation rules, QA instruction, save-path contract, output contract.
- Depends on: `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, `ian-xiaohei-illustrations/references/composition-patterns.md`, `ian-xiaohei-illustrations/references/prompt-template.md`, `ian-xiaohei-illustrations/references/qa-checklist.md`, `ian-xiaohei-illustrations/assets/examples/`.
- Used by: Codex skill loader after installation to `${CODEX_HOME:-$HOME/.codex}/skills/ian-xiaohei-illustrations`.
- Purpose: Expose installed-skill metadata to agent environments.
- Location: `ian-xiaohei-illustrations/agents/openai.yaml`
- Contains: `interface.display_name`, `interface.short_description`, `interface.default_prompt`, `policy.allow_implicit_invocation`.
- Depends on: Skill package name and user-facing purpose defined in `ian-xiaohei-illustrations/SKILL.md`.
- Used by: OpenAI/Codex agent integration that surfaces and invokes the skill.
- Purpose: Keep style, character, composition, prompt, and QA rules modular so the skill can load only the context needed for a task.
- Location: `ian-xiaohei-illustrations/references/`
- Contains: Markdown policy/reference files for visual style, IP character, composition systems, prompt templates, and generated-image QA.
- Depends on: The core positioning in `ian-xiaohei-illustrations/SKILL.md`.
- Used by: `ian-xiaohei-illustrations/SKILL.md` during task execution.
- Purpose: Provide visual examples for style calibration while preserving original-metaphor generation.
- Location: `ian-xiaohei-illustrations/assets/examples/`, `examples/images/`
- Contains: PNG examples such as `ian-xiaohei-illustrations/assets/examples/01-two-breakpoints.png`, `ian-xiaohei-illustrations/assets/examples/14-trust-bridge.png`, and README-facing copies in `examples/images/`.
- Depends on: Style constraints in `ian-xiaohei-illustrations/references/style-dna.md` and anti-copy rules in `ian-xiaohei-illustrations/references/composition-patterns.md`.
- Used by: Skill users and maintainers for low-frequency visual calibration.
- Purpose: Explain installation, usage, expected outputs, examples, and repository layout.
- Location: `README.md`, `examples/prompts.md`, `NOTICE.md`, `LICENSE`
- Contains: Public docs, legal metadata, prompt examples, and README-linked images.
- Depends on: The installed package shape under `ian-xiaohei-illustrations/`.
- Used by: Users installing or learning the skill.

## Data Flow

### Primary Skill Invocation Path

### Documentation and Installation Flow

- Repository state is file-based Markdown and image assets. There is no application runtime state, database, service process, or build artifact.
- Generated deliverables are written as PNG files under `assets/<article-slug>-illustrations/` in the active workspace per `ian-xiaohei-illustrations/SKILL.md`.
- Existing assets are preserved unless the user explicitly requests replacement, as required by `ian-xiaohei-illustrations/SKILL.md`.

## Key Abstractions

- Purpose: The installable unit copied into Codex's skill directory.
- Examples: `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/`, `ian-xiaohei-illustrations/assets/examples/`.
- Pattern: Directory-scoped Codex Skill with a Markdown entrypoint and supporting reference files.
- Purpose: Keep task-specific style, prompt, composition, and QA rules separate from the main skill entrypoint.
- Examples: `ian-xiaohei-illustrations/references/style-dna.md`, `ian-xiaohei-illustrations/references/xiaohei-ip.md`, `ian-xiaohei-illustrations/references/composition-patterns.md`, `ian-xiaohei-illustrations/references/prompt-template.md`, `ian-xiaohei-illustrations/references/qa-checklist.md`.
- Pattern: On-demand instruction modules referenced by `ian-xiaohei-illustrations/SKILL.md`.
- Purpose: Planning artifact for deciding which article anchors become illustrations.
- Examples: Defined in `ian-xiaohei-illustrations/SKILL.md` and demonstrated by `examples/prompts.md`.
- Pattern: Structured list with paragraph placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese label words.
- Purpose: Durable style contract for all generated illustrations.
- Examples: `ian-xiaohei-illustrations/references/style-dna.md`, `README.md`.
- Pattern: Positive visual constraints plus veto patterns for background, line quality, labels, color usage, whitespace, and diagram density.
- Purpose: Recurring character system that must carry the conceptual action in each image.
- Examples: `ian-xiaohei-illustrations/references/xiaohei-ip.md`, `ian-xiaohei-illustrations/SKILL.md`.
- Pattern: Fixed character definition with action library and participation test.
- Purpose: Reusable structure categories that guide concept-to-image mapping.
- Examples: `ian-xiaohei-illustrations/references/composition-patterns.md`.
- Pattern: Eight structure types: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route, and comic panels.
- Purpose: Canonical prompt format for generating one standalone 16:9 article illustration.
- Examples: `ian-xiaohei-illustrations/references/prompt-template.md`.
- Pattern: Template with variables for theme, structure type, core idea, composition, elements, labels, color use, and constraints.
- Purpose: Determine whether a generated image is acceptable or needs regeneration/editing.
- Examples: `ian-xiaohei-illustrations/references/qa-checklist.md`.
- Pattern: Pass checklist, failure signals, iteration methods, and delivery judgment.

## Entry Points

- Location: `ian-xiaohei-illustrations/SKILL.md`
- Triggers: Explicit `$ian-xiaohei-illustrations` use, or implicit matching for Chinese article illustrations, Xiaohei, hand-drawn article images, shot lists, and image edits.
- Responsibilities: Route task type, load references, plan shots, generate one image per prompt, apply QA, save assets, and report delivery paths.
- Location: `ian-xiaohei-illustrations/agents/openai.yaml`
- Triggers: Agent environment reads package metadata.
- Responsibilities: Provide display name, short description, default prompt, and implicit invocation setting.
- Location: `README.md`
- Triggers: Human user installation and onboarding.
- Responsibilities: Explain purpose, style, examples, install command, usage prompts, workflow, and directory shape.
- Location: `examples/prompts.md`
- Triggers: Human user copies an invocation pattern.
- Responsibilities: Provide ready-to-use prompts for planning, generation, long-form strategy, single concept generation, title removal, Xiaohei-participation edits, and style sampling.

## Architectural Constraints

- **Threading:** Not applicable. The repository has no service runtime, process model, worker threads, or concurrent execution code.
- **Global state:** File-system assets are the only shared state. Existing generated assets under `assets/<article-slug>-illustrations/` must be preserved unless the user requests replacement, per `ian-xiaohei-illustrations/SKILL.md`.
- **Circular imports:** Not applicable. There are no source-code imports; references are linked by path from `ian-xiaohei-illustrations/SKILL.md`.
- **External runtime dependency:** Image generation depends on the host agent's image-generation capability. The repository supplies prompt and QA instructions in `ian-xiaohei-illustrations/references/prompt-template.md` and `ian-xiaohei-illustrations/references/qa-checklist.md`.
- **Context loading:** Use progressive reference loading from `ian-xiaohei-illustrations/SKILL.md`. Load only task-relevant reference files from `ian-xiaohei-illustrations/references/`.
- **Example use:** Treat `ian-xiaohei-illustrations/assets/examples/` and `examples/images/` as calibration assets. Use them to understand density and style, then create fresh metaphors guided by `ian-xiaohei-illustrations/references/composition-patterns.md`.
- **Output format:** Generated illustrations are PNG files saved to `assets/<article-slug>-illustrations/` using ordered file names such as `01-topic-name.png`, per `ian-xiaohei-illustrations/SKILL.md`.

## Anti-Patterns

### Overloading `SKILL.md`

### Copying Example Compositions

### Mixing Multiple Structures in One Image

### Treating Xiaohei as Decoration

### Writing Generated Assets Into the Skill Package

## Error Handling

- Use `ian-xiaohei-illustrations/references/qa-checklist.md` to identify pass/fail conditions after generation.
- For title artifacts, use the edit prompt in `ian-xiaohei-illustrations/references/prompt-template.md`.
- For weak Xiaohei participation, use the regeneration prompt in `ian-xiaohei-illustrations/references/prompt-template.md`.
- For over-complex images, apply the iteration guidance in `ian-xiaohei-illustrations/references/qa-checklist.md` by reducing nodes and labels.
- For copied compositions, replace the main object and Xiaohei action using `ian-xiaohei-illustrations/references/composition-patterns.md`.

## Cross-Cutting Concerns

<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
