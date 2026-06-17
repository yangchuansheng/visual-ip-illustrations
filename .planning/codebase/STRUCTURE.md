# Codebase Structure

**Analysis Date:** 2026-06-12

## Directory Layout

```text
skills/visual-ip-illustrations/
├── README.md                         # Public overview, installation, workflow, examples, and repo map
├── LICENSE                           # License text
├── NOTICE.md                         # Notice and attribution/legal metadata
├── assets/                           # Repository-level public/static assets
│   └── readme-hero/
│       └── 20260617-181124.gif       # README hero GIF
├── examples/                         # Human-facing usage examples and README-linked preview images
│   ├── prompts.md                    # Copyable invocation prompts
│   └── images/                       # Public preview images referenced by README.md
├── skills/visual-ip-illustrations/         # Installable Codex Skill package
│   ├── SKILL.md                      # Skill entrypoint and workflow contract
│   ├── agents/                       # Agent integration metadata
│   │   └── openai.yaml               # OpenAI/Codex display and invocation metadata
│   ├── assets/                       # Skill-local calibration assets
│   │   └── examples/                 # Installed-skill visual examples for low-frequency calibration
│   └── references/                   # Modular style, composition, prompt, and QA references
│       ├── composition-patterns.md   # Structure types and metaphor-generation rules
│       ├── prompt-template.md        # Generation and editing prompt templates
│       ├── qa-checklist.md           # Post-generation pass/fail and iteration rules
│       ├── style-dna.md              # Visual style contract and veto rules
│       └── xiaohei-ip.md             # Recurring character definition and action rules
└── .planning/
    └── codebase/                     # Generated codebase maps for GSD planning/execution
        ├── ARCHITECTURE.md           # Architecture map
        └── STRUCTURE.md              # Directory and placement guide
```

## Directory Purposes

**Repository root:**
- Purpose: Package the installable skill, public docs, examples, and planning metadata.
- Contains: `README.md`, `LICENSE`, `NOTICE.md`, `.gitignore`, `assets/`, `examples/`, `skills/visual-ip-illustrations/`, `.planning/`.
- Key files: `README.md`, `LICENSE`, `NOTICE.md`, `.gitignore`.

**`skills/visual-ip-illustrations/`:**
- Purpose: Installable Codex Skill directory copied into `${CODEX_HOME:-$HOME/.codex}/skills/`.
- Contains: Skill entrypoint, agent metadata, modular references, and skill-local calibration examples.
- Key files: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/agents/openai.yaml`.

**`skills/visual-ip-illustrations/references/`:**
- Purpose: Hold detailed task instructions that the skill loads progressively.
- Contains: Markdown references for style, Xiaohei IP, composition patterns, prompt templates, and QA.
- Key files: `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`.

**`skills/visual-ip-illustrations/assets/examples/`:**
- Purpose: Provide installed-skill visual calibration images.
- Contains: Numbered PNG examples such as `skills/visual-ip-illustrations/assets/examples/01-two-breakpoints.png`, `skills/visual-ip-illustrations/assets/examples/02-minimum-loop.png`, `skills/visual-ip-illustrations/assets/examples/14-trust-bridge.png`.
- Key files: `skills/visual-ip-illustrations/assets/examples/01-two-breakpoints.png`, `skills/visual-ip-illustrations/assets/examples/14-trust-bridge.png`.

**`skills/visual-ip-illustrations/agents/`:**
- Purpose: Store agent-specific metadata for the skill package.
- Contains: YAML metadata files.
- Key files: `skills/visual-ip-illustrations/agents/openai.yaml`.

**`examples/`:**
- Purpose: Provide public usage examples outside the installable skill directory.
- Contains: Prompt examples and README-linked images.
- Key files: `examples/prompts.md`, `examples/images/01-two-breakpoints.png`, `examples/images/08-trust-bridge.png`.

**`examples/images/`:**
- Purpose: Store public preview images used by `README.md`.
- Contains: Numbered PNG examples from `01-two-breakpoints.png` through `08-trust-bridge.png`.
- Key files: `examples/images/01-two-breakpoints.png`, `examples/images/08-trust-bridge.png`.

**`assets/`:**
- Purpose: Store repository-level static assets and default generated-output parent directory.
- Contains: `assets/readme-hero/20260617-181124.gif`; generated illustration folders may be created as `assets/<article-slug>-illustrations/`.
- Key files: `assets/readme-hero/20260617-181124.gif`.

**`.planning/codebase/`:**
- Purpose: Store generated codebase maps consumed by GSD planning and execution workflows.
- Contains: Architecture and structure analysis documents.
- Key files: `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`.

## Key File Locations

**Entry Points:**
- `skills/visual-ip-illustrations/SKILL.md`: Main Codex Skill entrypoint, trigger description, workflow, reference routing, generation rules, QA flow, and save contract.
- `skills/visual-ip-illustrations/agents/openai.yaml`: Agent integration metadata with display name, short description, default prompt, and implicit invocation setting.
- `README.md`: Public install and usage entrypoint.
- `examples/prompts.md`: Human-facing prompt examples for invoking the skill.

**Configuration:**
- `skills/visual-ip-illustrations/SKILL.md`: YAML front matter defines `name` and `description`.
- `skills/visual-ip-illustrations/agents/openai.yaml`: OpenAI/Codex metadata configuration.
- `.gitignore`: Repository ignore rules.

**Core Logic:**
- `skills/visual-ip-illustrations/SKILL.md`: Orchestrates content digestion, shot-list planning, per-image generation, QA, and delivery.
- `skills/visual-ip-illustrations/references/style-dna.md`: Defines visual DNA and image-level style constraints.
- `skills/visual-ip-illustrations/references/xiaohei-ip.md`: Defines the Xiaohei character abstraction.
- `skills/visual-ip-illustrations/references/composition-patterns.md`: Defines structure types and original-metaphor rules.
- `skills/visual-ip-illustrations/references/prompt-template.md`: Defines generation and edit prompt templates.
- `skills/visual-ip-illustrations/references/qa-checklist.md`: Defines validation and iteration rules.

**Testing:**
- Not detected. The repository contains no automated test suite, test runner config, or test files.
- Manual QA lives in `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Visual calibration examples live in `skills/visual-ip-illustrations/assets/examples/` and `examples/images/`.

**Documentation:**
- `README.md`: Product-level overview, install instructions, usage examples, workflow, and directory map.
- `examples/prompts.md`: Copyable task prompts.
- `NOTICE.md`: Notice metadata.
- `LICENSE`: License text.

## Naming Conventions

**Files:**
- Skill entrypoint uses uppercase fixed name: `skills/visual-ip-illustrations/SKILL.md`.
- Reference documents use lowercase kebab-case Markdown names: `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Agent metadata uses lowercase provider name with YAML extension: `skills/visual-ip-illustrations/agents/openai.yaml`.
- Example images use two-digit numeric prefixes plus kebab-case descriptors: `examples/images/01-two-breakpoints.png`, `skills/visual-ip-illustrations/assets/examples/14-trust-bridge.png`.
- Generated illustration outputs should use two-digit numeric prefixes plus kebab-case topic names: `assets/<article-slug>-illustrations/01-topic-name.png`.
- Planning documents use uppercase Markdown names: `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`.

**Directories:**
- The installable skill directory uses the skill name in kebab-case: `skills/visual-ip-illustrations/`.
- Support directories use lowercase plural nouns: `agents/`, `assets/`, `examples/`, `references/`, `.planning/codebase/`.
- Generated illustration directories should use `<article-slug>-illustrations` under `assets/`.

**Markdown Headings:**
- Skill and reference files use Chinese headings because the skill is Chinese-first: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/style-dna.md`.
- Prompt template content may use English prompt text for image-model reliability: `skills/visual-ip-illustrations/references/prompt-template.md`.

## Where to Add New Code

**New Skill Behavior:**
- Primary code/instructions: `skills/visual-ip-illustrations/SKILL.md`
- Add detailed supporting policy to: `skills/visual-ip-illustrations/references/`
- Update public docs when behavior changes: `README.md`

**New Reference Module:**
- Implementation: `skills/visual-ip-illustrations/references/<topic>.md`
- Registration: Add the file to the reference list in `skills/visual-ip-illustrations/SKILL.md`.
- Documentation: Mention user-visible behavior in `README.md` when the new reference changes normal usage.

**New Prompt Template:**
- Implementation: `skills/visual-ip-illustrations/references/prompt-template.md`
- Example usage: `examples/prompts.md`
- Keep image-generation prompt variables explicit and keep output-path expectations in `skills/visual-ip-illustrations/SKILL.md`.

**New Composition or Style Rule:**
- Composition structures and metaphor rules: `skills/visual-ip-illustrations/references/composition-patterns.md`
- Visual DNA, colors, whitespace, and veto patterns: `skills/visual-ip-illustrations/references/style-dna.md`
- Character role and action constraints: `skills/visual-ip-illustrations/references/xiaohei-ip.md`
- QA pass/fail conditions: `skills/visual-ip-illustrations/references/qa-checklist.md`

**New Agent Integration:**
- Implementation: `skills/visual-ip-illustrations/agents/<provider>.yaml`
- Keep provider-specific metadata under `skills/visual-ip-illustrations/agents/`.
- Keep workflow-independent display copy in the metadata file and behavior rules in `skills/visual-ip-illustrations/SKILL.md`.

**New Public Usage Example:**
- Prompt examples: `examples/prompts.md`
- README references: `README.md`
- Keep examples copyable and aligned with the workflow in `skills/visual-ip-illustrations/SKILL.md`.

**New Calibration Image:**
- Skill-local calibration asset: `skills/visual-ip-illustrations/assets/examples/<NN>-<short-topic>.png`
- Public README preview image: `examples/images/<NN>-<short-topic>.png`
- Add README references only for images meant to appear in public docs.
- Use numbered filenames to preserve visual ordering.

**Generated User Deliverables:**
- Output directory: `assets/<article-slug>-illustrations/`
- File pattern: `assets/<article-slug>-illustrations/01-topic-name.png`
- Preserve existing assets and choose new names when adding variants.

**Utilities:**
- Not applicable. The repository currently has no script or source-code utility layer.
- If recurring validation scripts are introduced, add them under `scripts/` and document commands in `README.md`.

## Special Directories

**`skills/visual-ip-illustrations/`:**
- Purpose: Installable Codex Skill package.
- Generated: No.
- Committed: Yes.

**`skills/visual-ip-illustrations/references/`:**
- Purpose: Modular instruction references loaded by the skill.
- Generated: No.
- Committed: Yes.

**`skills/visual-ip-illustrations/assets/examples/`:**
- Purpose: Skill-local calibration images available after installation.
- Generated: No.
- Committed: Yes.

**`examples/images/`:**
- Purpose: Public preview images used by `README.md`.
- Generated: No.
- Committed: Yes.

**`assets/`:**
- Purpose: Repository-level static assets and default parent for generated deliverable folders.
- Generated: Mixed. `assets/readme-hero/20260617-181124.gif` is committed static content; `assets/<article-slug>-illustrations/` is generated during skill usage.
- Committed: Static assets are committed; generated article-specific folders should be committed only when they are intended deliverables for the repository.

**`.planning/codebase/`:**
- Purpose: Generated codebase maps for GSD workflows.
- Generated: Yes.
- Committed: Project-dependent.

---

*Structure analysis: 2026-06-12*
