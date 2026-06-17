# External Integrations

**Analysis Date:** 2026-06-12

## APIs & External Services

**Image Generation:**
- Host-provided image generation/editing service - Used to generate standalone 16:9 article illustrations and edit images.
  - SDK/Client: Built-in agent capability `image_gen`
  - Auth: Managed by the Codex host environment; no repository env var detected
  - Implementation: `skills/visual-ip-illustrations/SKILL.md` directs direct generation calls; `skills/visual-ip-illustrations/references/prompt-template.md` provides generation and edit prompts.

**Codex Skill Runtime:**
- Codex local skills system - Used to load the skill by name and route image-planning/image-generation requests.
  - SDK/Client: Codex Skills loader
  - Auth: Managed by the local Codex environment
  - Implementation: `skills/visual-ip-illustrations/SKILL.md` and `skills/visual-ip-illustrations/agents/openai.yaml`

**Repository Hosting and Public Links:**
- GitHub - Used for source distribution and related project links.
  - SDK/Client: Git CLI usage documented in `README.md`
  - Auth: Not required for public clone; no repository token config detected
  - Links: `README.md` references `https://github.com/helloianneo/ian-xiaohei-illustrations`, `https://github.com/helloianneo/ian-handdrawn-ppt`, `https://github.com/helloianneo/awesome-claude-code-skills`, and `https://github.com/helloianneo/obsidian-ai-second-brain`.
- X/Twitter - Public author profile link in `README.md`.
  - SDK/Client: Browser link only
  - Auth: Not applicable
- Author website - Public author site link in `README.md`.
  - SDK/Client: Browser link only
  - Auth: Not applicable

## Data Storage

**Databases:**
- Not detected.
  - Connection: Not applicable
  - Client: Not applicable

**File Storage:**
- Local workspace filesystem.
  - Generated image output path: `assets/<article-slug>-illustrations/`, defined in `skills/visual-ip-illustrations/SKILL.md`.
  - Static repository assets: `examples/images/*.png`, `examples/images-en/*.png`, and `assets/readme-hero/20260617-181124.gif`.

**Caching:**
- None detected.

## Authentication & Identity

**Auth Provider:**
- Host-managed Codex authentication.
  - Implementation: The repository contains no auth code, login flow, token storage, or env-based credentials.
  - Skill metadata: `skills/visual-ip-illustrations/agents/openai.yaml` allows implicit invocation through `policy.allow_implicit_invocation`.

## Monitoring & Observability

**Error Tracking:**
- None detected.

**Logs:**
- No logging implementation detected.
- Quality feedback is manual and checklist-driven through `skills/visual-ip-illustrations/references/qa-checklist.md`.

## CI/CD & Deployment

**Hosting:**
- Not applicable as a web service.
- Distribution path is Git clone plus copy into `${CODEX_HOME:-$HOME/.codex}/skills`, documented in `README.md`.

**CI Pipeline:**
- None detected.

## Environment Configuration

**Required env vars:**
- `CODEX_HOME` - Optional install-location override documented in `README.md`; fallback is `$HOME/.codex`.
- No API keys or database URLs detected.

**Secrets location:**
- No secret files detected.
- Image generation credentials, if any, are supplied by the Codex host environment outside this repository.

## Webhooks & Callbacks

**Incoming:**
- None detected.

**Outgoing:**
- None detected.

---

*Integration audit: 2026-06-12*
