<!-- refreshed: 2026-06-12 -->
# Architecture

**Analysis Date:** 2026-06-12

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    Codex Skill Package                       │
├──────────────────┬──────────────────┬───────────────────────┤
│   Skill Entrypoint│  Agent Metadata  │    Public README      │
│  `ian-xiaohei-   │  `ian-xiaohei-   │   `README.md`         │
│  illustrations/  │  illustrations/  │                       │
│  SKILL.md`       │  agents/openai.  │                       │
│                  │  yaml`           │                       │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  Progressive Reference Layer                 │
│         `skills/visual-ip-illustrations/references/`              │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Calibration Assets and Usage Examples                       │
│  `skills/visual-ip-illustrations/assets/examples/`,               │
│  `examples/`, `assets/`                                      │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Skill manifest and workflow | Defines skill name, trigger description, user task routing, image generation workflow, delivery rules, and progressive reference loading | `skills/visual-ip-illustrations/SKILL.md` |
| OpenAI agent metadata | Defines display name, short description, default prompt, and implicit invocation policy for the skill package | `skills/visual-ip-illustrations/agents/openai.yaml` |
| Style DNA reference | Defines required visual language: 16:9 horizontal, pure white background, hand-drawn black line art, sparse red/orange/blue handwritten labels, whitespace, and veto patterns | `skills/visual-ip-illustrations/references/style-dna.md` |
| Xiaohei IP reference | Defines the recurring character's shape, role, personality, action responsibilities, and usage constraints | `skills/visual-ip-illustrations/references/xiaohei-ip.md` |
| Composition pattern reference | Defines allowed structure types, metaphor generation method, object/action pools, and anti-copy rules for prior examples | `skills/visual-ip-illustrations/references/composition-patterns.md` |
| Prompt template reference | Provides the single-image generation prompt template and edit prompts for title removal and stronger character participation | `skills/visual-ip-illustrations/references/prompt-template.md` |
| QA checklist reference | Defines pass/fail checks and iteration methods for generated illustrations | `skills/visual-ip-illustrations/references/qa-checklist.md` |
| Install and usage documentation | Explains repository purpose, installation, examples, workflow, output location, and project directory map | `README.md` |
| User prompt examples | Provides copyable invocation prompts for planning, article illustration, long-form strategy, single concept generation, image editing, and style samples | `examples/prompts.md` |
| Skill-local visual examples | Provides calibration examples that installed skill users can inspect at low frequency | `skills/visual-ip-illustrations/assets/examples/` |
| Repository-level preview examples | Provides README-linked public example images | `examples/images/` |

## Pattern Overview

**Overall:** Documentation-first Codex Skill package with progressive reference loading.

**Key Characteristics:**
- The executable behavior is instruction-driven. `skills/visual-ip-illustrations/SKILL.md` is the central controller and uses `references/*.md` as modular policy documents.
- Reference files are loaded on demand. `skills/visual-ip-illustrations/SKILL.md` explicitly instructs agents to read only the needed files from `skills/visual-ip-illustrations/references/`.
- Image generation is externalized to the agent runtime. The repository contains prompts, style rules, QA rules, and calibration images; generated PNG outputs are written by the consuming agent to `assets/<article-slug>-illustrations/`.
- Examples are calibration assets. `skills/visual-ip-illustrations/references/composition-patterns.md` treats `skills/visual-ip-illustrations/assets/examples/` as style-density references and prohibits direct reuse of old compositions during normal generation.

## Layers

**Skill Entrypoint Layer:**
- Purpose: Define how the skill is triggered, what tasks it accepts, which references to load, and how to deliver generated assets.
- Location: `skills/visual-ip-illustrations/SKILL.md`
- Contains: YAML front matter, core positioning, reference routing, workflow stages, generation rules, QA instruction, save-path contract, output contract.
- Depends on: `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`, `skills/visual-ip-illustrations/assets/examples/`.
- Used by: Codex skill loader after installation to `${CODEX_HOME:-$HOME/.codex}/skills/ian-xiaohei-illustrations`.

**Agent Metadata Layer:**
- Purpose: Expose installed-skill metadata to agent environments.
- Location: `skills/visual-ip-illustrations/agents/openai.yaml`
- Contains: `interface.display_name`, `interface.short_description`, `interface.default_prompt`, `policy.allow_implicit_invocation`.
- Depends on: Skill package name and user-facing purpose defined in `skills/visual-ip-illustrations/SKILL.md`.
- Used by: OpenAI/Codex agent integration that surfaces and invokes the skill.

**Reference Policy Layer:**
- Purpose: Keep style, character, composition, prompt, and QA rules modular so the skill can load only the context needed for a task.
- Location: `skills/visual-ip-illustrations/references/`
- Contains: Markdown policy/reference files for visual style, IP character, composition systems, prompt templates, and generated-image QA.
- Depends on: The core positioning in `skills/visual-ip-illustrations/SKILL.md`.
- Used by: `skills/visual-ip-illustrations/SKILL.md` during task execution.

**Calibration Asset Layer:**
- Purpose: Provide visual examples for style calibration while preserving original-metaphor generation.
- Location: `skills/visual-ip-illustrations/assets/examples/`, `examples/images/`
- Contains: PNG examples such as `skills/visual-ip-illustrations/assets/examples/01-two-breakpoints.png`, `skills/visual-ip-illustrations/assets/examples/14-trust-bridge.png`, and README-facing copies in `examples/images/`.
- Depends on: Style constraints in `skills/visual-ip-illustrations/references/style-dna.md` and anti-copy rules in `skills/visual-ip-illustrations/references/composition-patterns.md`.
- Used by: Skill users and maintainers for low-frequency visual calibration.

**Public Documentation Layer:**
- Purpose: Explain installation, usage, expected outputs, examples, and repository layout.
- Location: `README.md`, `examples/prompts.md`, `NOTICE.md`, `LICENSE`
- Contains: Public docs, legal metadata, prompt examples, and README-linked images.
- Depends on: The installed package shape under `skills/visual-ip-illustrations/`.
- Used by: Users installing or learning the skill.

## Data Flow

### Primary Skill Invocation Path

1. User invokes `$ian-xiaohei-illustrations` or matches the skill trigger description in `skills/visual-ip-illustrations/SKILL.md`.
2. Agent reads user input content: article text, Markdown, Notion content, screenshot content, link text, or single concept as described in `skills/visual-ip-illustrations/SKILL.md`.
3. Agent extracts article anchors: core claims, cognitive turns, process structures, state changes, and visualizable paragraphs according to `skills/visual-ip-illustrations/SKILL.md`.
4. Agent loads only task-relevant reference files listed in `skills/visual-ip-illustrations/SKILL.md`, usually from `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, and `skills/visual-ip-illustrations/references/qa-checklist.md`.
5. For planning tasks, agent produces a shot list with placement, theme, core idea, structure type, Xiaohei action, suggested elements, and label words using the shape defined in `skills/visual-ip-illustrations/SKILL.md`.
6. For generation tasks, agent creates one prompt per image using `skills/visual-ip-illustrations/references/prompt-template.md`, then calls the runtime image-generation capability outside this repository.
7. Agent checks generated outputs against `skills/visual-ip-illustrations/references/qa-checklist.md`.
8. Agent saves final PNG files to `assets/<article-slug>-illustrations/` using ordered names such as `01-topic-name.png`, as specified by `skills/visual-ip-illustrations/SKILL.md`.

### Documentation and Installation Flow

1. User reads `README.md` to understand purpose, examples, installation, and usage.
2. User copies `skills/visual-ip-illustrations/` into `${CODEX_HOME:-$HOME/.codex}/skills/` using the command documented in `README.md`.
3. Codex loads `skills/visual-ip-illustrations/SKILL.md` as the installed skill entrypoint.
4. Optional agent metadata from `skills/visual-ip-illustrations/agents/openai.yaml` provides display copy and a default prompt.
5. Usage examples in `examples/prompts.md` provide invocation patterns for planning, generation, editing, and style sampling.

**State Management:**
- Repository state is file-based Markdown and image assets. There is no application runtime state, database, service process, or build artifact.
- Generated deliverables are written as PNG files under `assets/<article-slug>-illustrations/` in the active workspace per `skills/visual-ip-illustrations/SKILL.md`.
- Existing assets are preserved unless the user explicitly requests replacement, as required by `skills/visual-ip-illustrations/SKILL.md`.

## Key Abstractions

**Skill Package:**
- Purpose: The installable unit copied into Codex's skill directory.
- Examples: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `skills/visual-ip-illustrations/references/`, `skills/visual-ip-illustrations/assets/examples/`.
- Pattern: Directory-scoped Codex Skill with a Markdown entrypoint and supporting reference files.

**Progressive References:**
- Purpose: Keep task-specific style, prompt, composition, and QA rules separate from the main skill entrypoint.
- Examples: `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Pattern: On-demand instruction modules referenced by `skills/visual-ip-illustrations/SKILL.md`.

**Shot List:**
- Purpose: Planning artifact for deciding which article anchors become illustrations.
- Examples: Defined in `skills/visual-ip-illustrations/SKILL.md` and demonstrated by `examples/prompts.md`.
- Pattern: Structured list with paragraph placement, theme, core idea, structure type, Xiaohei action, suggested elements, and Chinese label words.

**Visual DNA:**
- Purpose: Durable style contract for all generated illustrations.
- Examples: `skills/visual-ip-illustrations/references/style-dna.md`, `README.md`.
- Pattern: Positive visual constraints plus veto patterns for background, line quality, labels, color usage, whitespace, and diagram density.

**Xiaohei IP:**
- Purpose: Recurring character system that must carry the conceptual action in each image.
- Examples: `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/SKILL.md`.
- Pattern: Fixed character definition with action library and participation test.

**Composition Pattern:**
- Purpose: Reusable structure categories that guide concept-to-image mapping.
- Examples: `skills/visual-ip-illustrations/references/composition-patterns.md`.
- Pattern: Eight structure types: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route, and comic panels.

**Single-Image Prompt:**
- Purpose: Canonical prompt format for generating one standalone 16:9 article illustration.
- Examples: `skills/visual-ip-illustrations/references/prompt-template.md`.
- Pattern: Template with variables for theme, structure type, core idea, composition, elements, labels, color use, and constraints.

**QA Gate:**
- Purpose: Determine whether a generated image is acceptable or needs regeneration/editing.
- Examples: `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Pattern: Pass checklist, failure signals, iteration methods, and delivery judgment.

## Entry Points

**Codex Skill Entrypoint:**
- Location: `skills/visual-ip-illustrations/SKILL.md`
- Triggers: Explicit `$ian-xiaohei-illustrations` use, or implicit matching for Chinese article illustrations, Xiaohei, hand-drawn article images, shot lists, and image edits.
- Responsibilities: Route task type, load references, plan shots, generate one image per prompt, apply QA, save assets, and report delivery paths.

**OpenAI Agent Metadata:**
- Location: `skills/visual-ip-illustrations/agents/openai.yaml`
- Triggers: Agent environment reads package metadata.
- Responsibilities: Provide display name, short description, default prompt, and implicit invocation setting.

**Public README:**
- Location: `README.md`
- Triggers: Human user installation and onboarding.
- Responsibilities: Explain purpose, style, examples, install command, usage prompts, workflow, and directory shape.

**Prompt Examples:**
- Location: `examples/prompts.md`
- Triggers: Human user copies an invocation pattern.
- Responsibilities: Provide ready-to-use prompts for planning, generation, long-form strategy, single concept generation, title removal, Xiaohei-participation edits, and style sampling.

## Architectural Constraints

- **Threading:** Not applicable. The repository has no service runtime, process model, worker threads, or concurrent execution code.
- **Global state:** File-system assets are the only shared state. Existing generated assets under `assets/<article-slug>-illustrations/` must be preserved unless the user requests replacement, per `skills/visual-ip-illustrations/SKILL.md`.
- **Circular imports:** Not applicable. There are no source-code imports; references are linked by path from `skills/visual-ip-illustrations/SKILL.md`.
- **External runtime dependency:** Image generation depends on the host agent's image-generation capability. The repository supplies prompt and QA instructions in `skills/visual-ip-illustrations/references/prompt-template.md` and `skills/visual-ip-illustrations/references/qa-checklist.md`.
- **Context loading:** Use progressive reference loading from `skills/visual-ip-illustrations/SKILL.md`. Load only task-relevant reference files from `skills/visual-ip-illustrations/references/`.
- **Example use:** Treat `skills/visual-ip-illustrations/assets/examples/` and `examples/images/` as calibration assets. Use them to understand density and style, then create fresh metaphors guided by `skills/visual-ip-illustrations/references/composition-patterns.md`.
- **Output format:** Generated illustrations are PNG files saved to `assets/<article-slug>-illustrations/` using ordered file names such as `01-topic-name.png`, per `skills/visual-ip-illustrations/SKILL.md`.

## Anti-Patterns

### Overloading `SKILL.md`

**What happens:** Adding all style, composition, prompt, and QA details directly to `skills/visual-ip-illustrations/SKILL.md`.
**Why it's wrong:** The skill entrypoint is designed to route tasks and load specific references incrementally.
**Do this instead:** Add detailed rules to the matching file under `skills/visual-ip-illustrations/references/`, then update the reference list in `skills/visual-ip-illustrations/SKILL.md` only when a new reference module is introduced.

### Copying Example Compositions

**What happens:** Reusing visual structures from `skills/visual-ip-illustrations/assets/examples/` or `examples/images/` as normal generation templates.
**Why it's wrong:** `skills/visual-ip-illustrations/references/composition-patterns.md` defines examples as calibration material and requires new metaphors for the current article.
**Do this instead:** Use the structure types and metaphor-generation method in `skills/visual-ip-illustrations/references/composition-patterns.md` to create a new physical metaphor.

### Mixing Multiple Structures in One Image

**What happens:** One generated image combines workflow, method layers, map route, and dense notes.
**Why it's wrong:** `skills/visual-ip-illustrations/references/style-dna.md` and `skills/visual-ip-illustrations/references/qa-checklist.md` require one core action, structure, state, or metaphor per image.
**Do this instead:** Select one structure type from `skills/visual-ip-illustrations/references/composition-patterns.md` and create additional separate images for additional concepts.

### Treating Xiaohei as Decoration

**What happens:** Xiaohei appears in a corner while the structure works without character participation.
**Why it's wrong:** `skills/visual-ip-illustrations/references/xiaohei-ip.md` defines Xiaohei as the action carrier for the conceptual work.
**Do this instead:** Rewrite the composition so Xiaohei performs the core action, then verify with `skills/visual-ip-illustrations/references/qa-checklist.md`.

### Writing Generated Assets Into the Skill Package

**What happens:** User-specific generated PNGs are added under `skills/visual-ip-illustrations/assets/examples/`.
**Why it's wrong:** Skill-local examples are calibration assets for the package; generated outputs follow the workspace delivery contract.
**Do this instead:** Save generated deliverables to `assets/<article-slug>-illustrations/` as specified in `skills/visual-ip-illustrations/SKILL.md`.

## Error Handling

**Strategy:** The repository encodes visual and workflow errors as QA checklist failures and regeneration/edit instructions.

**Patterns:**
- Use `skills/visual-ip-illustrations/references/qa-checklist.md` to identify pass/fail conditions after generation.
- For title artifacts, use the edit prompt in `skills/visual-ip-illustrations/references/prompt-template.md`.
- For weak Xiaohei participation, use the regeneration prompt in `skills/visual-ip-illustrations/references/prompt-template.md`.
- For over-complex images, apply the iteration guidance in `skills/visual-ip-illustrations/references/qa-checklist.md` by reducing nodes and labels.
- For copied compositions, replace the main object and Xiaohei action using `skills/visual-ip-illustrations/references/composition-patterns.md`.

## Cross-Cutting Concerns

**Logging:** Not applicable. There is no application runtime or logging framework.
**Validation:** Image validation is checklist-driven through `skills/visual-ip-illustrations/references/qa-checklist.md`.
**Authentication:** Not applicable. The repository has no authentication flow, API credentials, or service integration.
**Localization:** User-facing skill content is Chinese-first in `README.md`, `skills/visual-ip-illustrations/SKILL.md`, `examples/prompts.md`, and `skills/visual-ip-illustrations/references/*.md`; code-like prompt templates may use English for image model reliability in `skills/visual-ip-illustrations/references/prompt-template.md`.
**Licensing:** Legal metadata is held in `LICENSE` and `NOTICE.md`.

---

*Architecture analysis: 2026-06-12*
