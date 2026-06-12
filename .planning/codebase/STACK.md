# Technology Stack

**Analysis Date:** 2026-06-12

## Languages

**Primary:**
- Markdown - Skill instructions, repository documentation, prompt templates, QA rules, and examples live in `ian-xiaohei-illustrations/SKILL.md`, `README.md`, `examples/prompts.md`, and `ian-xiaohei-illustrations/references/*.md`.
- YAML - Codex agent interface metadata lives in `ian-xiaohei-illustrations/agents/openai.yaml`.

**Secondary:**
- Image assets - PNG and JPG examples support visual calibration in `examples/images/*.png` and `assets/ian-wechat-qr.jpg`.

## Runtime

**Environment:**
- Codex Skills runtime - The install target is `${CODEX_HOME:-$HOME/.codex}/skills`, documented in `README.md`.
- Host-provided image generation runtime - The skill instructs the agent to call the built-in `image_gen` capability from `ian-xiaohei-illustrations/SKILL.md`.
- No standalone application runtime detected - No `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, or `go.mod` is present.

**Package Manager:**
- Not applicable - This repository does not define installable code dependencies.
- Lockfile: missing by design for this documentation/skill package.

## Frameworks

**Core:**
- Codex Skill format - `ian-xiaohei-illustrations/SKILL.md` defines the skill name, description, routing triggers, workflow, reference files, output contract, and save-path convention.
- Codex agent metadata - `ian-xiaohei-illustrations/agents/openai.yaml` defines display metadata and `policy.allow_implicit_invocation`.

**Testing:**
- Manual QA checklist - `ian-xiaohei-illustrations/references/qa-checklist.md` defines acceptance criteria for generated images.
- No automated test framework detected - The repo contains no test runner config or test files.

**Build/Dev:**
- No build tool detected - The repository ships Markdown/YAML instructions and static image assets.
- GitHub README distribution - `README.md` documents clone, copy-to-skills installation, usage prompts, examples, and related links.

## Key Dependencies

**Critical:**
- Codex Skills loader - Required to discover and execute `ian-xiaohei-illustrations/SKILL.md` after copying the `ian-xiaohei-illustrations/` directory into `${CODEX_HOME:-$HOME/.codex}/skills`.
- Built-in `image_gen` capability - Required for direct image generation and editing workflows described in `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/prompt-template.md`.
- Workspace filesystem access - Required to save final images under `assets/<article-slug>-illustrations/`, as specified in `ian-xiaohei-illustrations/SKILL.md`.

**Infrastructure:**
- Git - Used for cloning and distributing the repository, documented in `README.md`.
- Static image assets - `examples/images/*.png` are style calibration examples; `assets/ian-wechat-qr.jpg` is an author contact asset referenced by `README.md`.

## Configuration

**Environment:**
- Install path is configured by `CODEX_HOME`; fallback is `$HOME/.codex`, documented in `README.md`.
- Runtime behavior is configured by frontmatter in `ian-xiaohei-illustrations/SKILL.md` and metadata in `ian-xiaohei-illustrations/agents/openai.yaml`.
- Style, prompt, and QA behavior is configured by reference files in `ian-xiaohei-illustrations/references/`.
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
