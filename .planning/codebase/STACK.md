# Technology Stack

**Analysis Date:** 2026-06-12

## Languages

**Primary:**
- Markdown - Skill instructions, repository documentation, prompt templates, QA rules, and examples live in `skills/visual-ip-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, and `skills/visual-ip-illustrations/references/*.md`.
- YAML - Codex agent interface metadata lives in `skills/visual-ip-illustrations/agents/openai.yaml`.

**Secondary:**
- Image assets - PNG and GIF examples support visual calibration and README rendering in `examples/images/*.png`, `examples/images-en/*.png`, and `assets/readme-hero/20260617-181124.gif`.

## Runtime

**Environment:**
- Codex Skills runtime - The install target is `${CODEX_HOME:-$HOME/.codex}/skills`, documented in `README.md`.
- Host-provided image generation runtime - The skill instructs the agent to call the built-in `image_gen` capability from `skills/visual-ip-illustrations/SKILL.md`.
- No standalone application runtime detected - No `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, or `go.mod` is present.

**Package Manager:**
- Not applicable - This repository does not define installable code dependencies.
- Lockfile: missing by design for this documentation/skill package.

## Frameworks

**Core:**
- Codex Skill format - `skills/visual-ip-illustrations/SKILL.md` defines the skill name, description, routing triggers, workflow, reference files, output contract, and save-path convention.
- Codex agent metadata - `skills/visual-ip-illustrations/agents/openai.yaml` defines display metadata and `policy.allow_implicit_invocation`.

**Testing:**
- Manual QA checklist - `skills/visual-ip-illustrations/references/qa-checklist.md` defines acceptance criteria for generated images.
- No automated test framework detected - The repo contains no test runner config or test files.

**Build/Dev:**
- No build tool detected - The repository ships Markdown/YAML instructions and static image assets.
- GitHub README distribution - `README.md` documents clone, copy-to-skills installation, usage prompts, examples, and related links.

## Key Dependencies

**Critical:**
- Codex Skills loader - Required to discover and execute `skills/visual-ip-illustrations/SKILL.md` after copying the `skills/visual-ip-illustrations/` directory into `${CODEX_HOME:-$HOME/.codex}/skills`.
- Built-in `image_gen` capability - Required for direct image generation and editing workflows described in `skills/visual-ip-illustrations/SKILL.md` and `skills/visual-ip-illustrations/references/prompt-template.md`.
- Workspace filesystem access - Required to save final images under `assets/<article-slug>-illustrations/`, as specified in `skills/visual-ip-illustrations/SKILL.md`.

**Infrastructure:**
- Git - Used for cloning and distributing the repository, documented in `README.md`.
- Static image assets - `examples/images/*.png` are style calibration examples; `assets/readme-hero/20260617-181124.gif` is an README hero GIF referenced by every README variant.

## Configuration

**Environment:**
- Install path is configured by `CODEX_HOME`; fallback is `$HOME/.codex`, documented in `README.md`.
- Runtime behavior is configured by frontmatter in `skills/visual-ip-illustrations/SKILL.md` and metadata in `skills/visual-ip-illustrations/agents/openai.yaml`.
- Style, prompt, and QA behavior is configured by reference files in `skills/visual-ip-illustrations/references/`.
- No `.env` files detected in the repository root or first-level subdirectories.

**Build:**
- Build config files: Not detected.
- TypeScript config: Not detected.
- Bundler config: Not detected.
- Lint/format config: Not detected.

## Platform Requirements

**Development:**
- A Codex environment that supports local skills installed under `${CODEX_HOME:-$HOME/.codex}/skills`.
- An image generation/editing capability exposed to the agent as `image_gen`.
- Filesystem write access to the active workspace for generated assets under `assets/<article-slug>-illustrations/`.

**Production:**
- Not applicable as a hosted service.
- Distribution target is a Git repository plus local Codex skill installation.

---

*Stack analysis: 2026-06-12*
