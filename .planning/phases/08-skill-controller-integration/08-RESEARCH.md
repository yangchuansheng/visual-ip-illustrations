# Phase 8: Skill Controller Integration - Research

**Researched:** 2026-06-13 [VERIFIED: system date]
**Domain:** Markdown-driven Codex Skill controller routing [VERIFIED: AGENTS.md]
**Confidence:** HIGH [VERIFIED: codebase grep]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

## Implementation Decisions

### Controller File Scope
- **D-01:** Implement Phase 8 through `ian-xiaohei-illustrations/SKILL.md` unless planning discovers a strict controller blocker in another file.
- **D-02:** Treat `ian-xiaohei-illustrations/references/routing.md` as the route metadata source. Phase 8 should consume its Tom row instead of duplicating route truth elsewhere.
- **D-03:** Preserve root Xiaohei legacy references as compatibility entry points while the active controller reads route-specific canonical packs.
- **D-04:** Keep all public release surfaces out of this phase: `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `RELEASE_CHECKLIST.md`, `scripts/validate-skill-package.mjs`, and validator tests.

### Route Selection and Defaults
- **D-05:** Omitted visual IP selects only the `xiaohei` route.
- **D-06:** Tom aliases are exact route triggers: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`.
- **D-07:** Explicit Tom selection uses route id `tom`, display name `Tom`, `default=false`, output suffix `tom`, and route status `gated-authorized`.
- **D-08:** Tom selection must carry a rights-status note in planning, generation, edit, QA, and delivery context. The note points rights-sensitive decisions to `references/ips/tom/rights.md`.

### Tom Reference Loading
- **D-09:** After selecting `tom`, the controller loads only Tom required references: `references/ips/tom/index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-10:** Tom planning and generation route to `references/ips/tom/prompt-template.md` and `references/ips/tom/composition-patterns.md`.
- **D-11:** Tom QA and edit repair route to `references/ips/tom/qa-checklist.md` and the edit gates in `references/ips/tom/prompt-template.md`.
- **D-12:** Tom rights handling routes to `references/ips/tom/rights.md`; controller copy should keep `gated-authorized` visible and avoid broad availability wording.

### Mixed-IP Route Groups
- **D-13:** Mixed requests involving any combination of Xiaohei, Littlebox, and Tom create separate route groups from one shared core idea.
- **D-14:** Each route group loads only its own required references, uses its own planning fields, prompt template, composition rules, QA checklist, edit repairs, and output directory.
- **D-15:** Mixed route groups should include a Tom group when the request names any Tom alias, with Tom-specific fields from `references/ips/tom/prompt-template.md`: placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- **D-16:** Route leakage is a controller failure. Tom rules must not bleed into Xiaohei or Littlebox groups, and Xiaohei/Littlebox rules must not dilute Tom's protected-route status or Tom QA gates.

### Output and Delivery
- **D-17:** Tom outputs use `assets/<article-slug>-tom/`.
- **D-18:** `SKILL.md` must include the escaped token `assets/&lt;article-slug&gt;-tom/` for docs and validator marker continuity.
- **D-19:** Mixed-IP outputs write to separate directories: Xiaohei under `assets/<article-slug>-illustrations/`, Littlebox under `assets/<article-slug>-littlebox/`, and Tom under `assets/<article-slug>-tom/`.
- **D-20:** Delivery reporting remains one block per IP. The Tom block should include selected IP, shared core idea, image purposes, save path, route status `gated-authorized`, rights note pointing to `rights.md`, and stability notes.

### the agent's Discretion
- Automatic decisions and subagents were explicitly authorized. Multi-agent tooling was not available in this runtime, so the phase analysis was completed inline using the required project, roadmap, prior context, verification, routing, controller, and Tom pack files.
- The planner may decide exact Chinese controller prose and section placement inside `SKILL.md`, provided the locked route triggers, reference paths, output paths, escaped token, mixed grouping behavior, QA routing, and scope fence remain explicit.

### Deferred Ideas (OUT OF SCOPE)

- Phase 9 owns README expansion, copyable Tom prompts in `examples/prompts.md`, `agents/openai.yaml` metadata wording, release checklist expansion, and public route guidance.
- Phase 10 owns validator hardening, Node tests, route leakage checks, Tom docs markers, raw and escaped output path checks, and public-sample gate hardening.
- Public rendered Tom examples remain gated by the Phase 6 release checklist public-sample approval record.
- Broader Tom and Jerry cast support, Jerry usage, logos, title cards, source-frame recreation, and franchise scenes require separate authorization scope and future requirements.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| TOMR-01 | User can explicitly request Tom through clear aliases such as `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, and `汤姆猫`. [VERIFIED: .planning/REQUIREMENTS.md] | `routing.md` already defines these aliases, while `SKILL.md` lacks the Tom alias bullet in route selection. [VERIFIED: codebase grep] |
| TOMR-02 | User who omits visual IP still gets Xiaohei as the only default route. [VERIFIED: .planning/REQUIREMENTS.md] | `routing.md` marks only `xiaohei` as `default=true`, and `SKILL.md` already says omitted visual IP selects Xiaohei. [VERIFIED: codebase grep] |
| TOMR-03 | User can request Xiaohei, Littlebox, and Tom for the same core idea and receive separate variant groups. [VERIFIED: .planning/REQUIREMENTS.md] | `routing.md` already defines mixed requests across Xiaohei, Littlebox, and Tom as `separate route groups`, while `SKILL.md` mixed-group wording names only Xiaohei and Littlebox. [VERIFIED: codebase grep] |
| TOMR-04 | Tom outputs use `assets/<article-slug>-tom/` and docs include the escaped token `assets/&lt;article-slug&gt;-tom/`. [VERIFIED: .planning/REQUIREMENTS.md] | `routing.md` and Tom prompt/QA files include the raw path, `routing.md` includes the escaped token, and `SKILL.md` currently lacks both Tom path markers. [VERIFIED: codebase grep] |
</phase_requirements>

## Summary

Phase 8 is a controller integration phase, not a new Tom-pack or validator phase. [VERIFIED: 08-CONTEXT.md] The route contract and Tom canonical operational pack already exist: `routing.md` contains Tom aliases, `default=false`, `output_suffix=tom`, required Tom references, `gated-authorized`, mixed-route grouping, and raw plus escaped Tom output path tokens. [VERIFIED: codebase grep] The verified Phase 7 Tom pack contains planning fields, a one-image prompt template, edit gates, QA failure categories, output path reminders, and rights-status notes. [VERIFIED: 07-VERIFICATION.md]

The current gap is concentrated in `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: codebase grep] `SKILL.md` currently lists Xiaohei and Littlebox in core positioning, reference loading, route selection, shot-list extras, mixed route groups, generation prompt routing, QA routing, save paths, validation markers, and mixed delivery blocks. [VERIFIED: codebase grep] Targeted `rg` found no Tom markers in `SKILL.md`, while the same markers exist in `routing.md` and `references/ips/tom/*`. [VERIFIED: rg]

**Primary recommendation:** Update only `ian-xiaohei-illustrations/SKILL.md` to consume the existing Tom route metadata and Tom pack, adding stable Phase 10 markers for aliases, required references, raw and escaped output paths, `gated-authorized`, `rights.md`, and `separate route groups`. [VERIFIED: 08-CONTEXT.md]

## Project Constraints (from AGENTS.md)

- Every user-facing assistant reply in this repository begins with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing replies use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, pull request titles, and pull request descriptions use English. [VERIFIED: AGENTS.md]
- Repository edits must start through a GSD workflow before changing files unless the user explicitly asks to bypass that workflow. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata. [VERIFIED: AGENTS.md]
- Preserve existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts. [VERIFIED: AGENTS.md]
- Keep visual-IP rules separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- Preserve MIT license notices and derived documentation attribution for Ian and okooo5km. [VERIFIED: AGENTS.md]
- Keep the project lightweight; validation can be script-based and should avoid a full app framework. [VERIFIED: AGENTS.md]
- Final image generation depends on the host agent's `image_gen` capability. [VERIFIED: AGENTS.md]
- User-facing repository docs can stay Chinese-first; code, scripts, comments, commit messages, and PR copy stay English. [VERIFIED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Tom alias selection | Skill Controller Markdown | Route metadata reference | `SKILL.md` performs task routing after reading `references/routing.md`. [VERIFIED: SKILL.md] |
| Omitted-IP default | Route metadata reference | Skill Controller Markdown | `routing.md` marks route defaults, and `SKILL.md` applies the default during workflow execution. [VERIFIED: routing.md] |
| Tom reference loading | Skill Controller Markdown | Tom canonical pack | `SKILL.md` decides which route-local references to load, while `references/ips/tom/*` contains Tom-specific behavior. [VERIFIED: SKILL.md] |
| Tom planning fields | Tom prompt template | Skill Controller Markdown | `references/ips/tom/prompt-template.md` defines the Tom shot-list fields, and `SKILL.md` should call those fields after route selection. [VERIFIED: prompt-template.md] |
| Tom generation | Host image generation runtime | Skill Controller Markdown | `SKILL.md` instructs the agent to call host `image_gen`, while Tom prompt files supply route-specific prompt content. [VERIFIED: SKILL.md] |
| Tom QA and edit repair | Tom QA and prompt references | Skill Controller Markdown | `qa-checklist.md` and `prompt-template.md` own Tom failure and repair rules, while `SKILL.md` selects the route-specific QA source. [VERIFIED: qa-checklist.md] |
| Mixed-IP grouping | Skill Controller Markdown | Route metadata reference | `SKILL.md` should create per-IP variant groups; `routing.md` already defines separate route group behavior for multiple routes. [VERIFIED: routing.md] |
| Output path selection | Route metadata reference | Skill Controller Markdown | `routing.md` owns `output_suffix`; `SKILL.md` uses it to write route-specific directories. [VERIFIED: routing.md] |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Markdown `SKILL.md` | Repository file format | Controller workflow, route selection, generation, QA, and delivery instructions. [VERIFIED: SKILL.md] | The project ships as a Codex Skill package with Markdown instructions. [VERIFIED: AGENTS.md] |
| `references/routing.md` | Repository file format | Route metadata source for aliases, default flag, output suffix, required references, attribution context, and status. [VERIFIED: routing.md] | Phase 8 locked this as the single route metadata source. [VERIFIED: 08-CONTEXT.md] |
| Tom canonical pack | Repository Markdown files | Route-local Tom planning, generation, composition, QA, edit, and rights behavior. [VERIFIED: 07-VERIFICATION.md] | Phase 7 verified the Tom pack as route-isolated and operational. [VERIFIED: 07-VERIFICATION.md] |
| Node.js | v24.13.0 | Runs repository validator and Node test suite. [VERIFIED: `node --version`] | Existing validation scripts are Node `.mjs` files. [VERIFIED: scripts directory] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Git | 2.50.1 | Diff checks and commit creation. [VERIFIED: `git --version`] | Use for `git diff --check`, status review, and committing research/planning artifacts. [VERIFIED: local command] |
| npm | 11.6.2 | Node package manager presence check. [VERIFIED: `npm --version`] | Current Phase 8 verification uses direct `node` commands, so npm is available but not required for implementation. [VERIFIED: local command] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `SKILL.md`-only controller update | Edit `routing.md`, Tom pack, README, examples, agent metadata, validator, and release checklist | Phase 8 locks `routing.md` and Tom pack as existing sources and fences public docs plus validator hardening to later phases. [VERIFIED: 08-CONTEXT.md] |
| Markdown route wiring | Add a runtime parser or build step | The project has no build runtime and intentionally stays a lightweight skill package. [VERIFIED: AGENTS.md] |

**Installation:** No external packages are required for Phase 8 implementation. [VERIFIED: package scan]

**Version verification:** No package versions are installed by this phase. [VERIFIED: package scan]

## Package Legitimacy Audit

Phase 8 installs no external packages. [VERIFIED: package scan] The package legitimacy gate is not applicable because the planned implementation is a Markdown-only controller edit. [VERIFIED: 08-CONTEXT.md]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | N/A | N/A | N/A | N/A | N/A | No install planned. [VERIFIED: package scan] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: package scan]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: package scan]

## Current Controller Gaps

| Area | Current State | Gap | Implementation Target |
|------|---------------|-----|-----------------------|
| Core positioning | `SKILL.md` names Xiaohei as default and Littlebox as optional. [VERIFIED: SKILL.md:8-14] | Tom is absent from the optional visual IP positioning. [VERIFIED: rg] | Add Tom as an explicit selectable `gated-authorized` protected-character route with rights pointer. [VERIFIED: 08-CONTEXT.md] |
| Reference loading list | `SKILL.md` lists route, Xiaohei, Littlebox, legacy Xiaohei, and examples references. [VERIFIED: SKILL.md:16-35] | Tom required references are absent from the controller reference list. [VERIFIED: rg] | Add `references/ips/tom/index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: routing.md] |
| Route selection | `SKILL.md` handles omitted IP, Xiaohei aliases, Littlebox aliases, and Xiaohei/Littlebox mixed requests. [VERIFIED: SKILL.md:39-53] | Tom aliases and Tom route status are absent. [VERIFIED: rg] | Add exact aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`; keep route id `tom`, `default=false`, and status `gated-authorized`. [VERIFIED: routing.md] |
| Shot list | `SKILL.md` has generic and Littlebox-specific shot-list fields. [VERIFIED: SKILL.md:66-93] | Tom-specific planning fields are absent. [VERIFIED: rg] | Add Tom fields from `prompt-template.md`: Placement, Core idea, Structure type, Tom state, Tom action, Supporting objects, Visible labels, Output path, Rights-status note. [VERIFIED: prompt-template.md] |
| Mixed IP planning | `SKILL.md` defines only Xiaohei and Littlebox mixed groups. [VERIFIED: SKILL.md:90-93] | Three-route and Tom-including mixed groups are absent. [VERIFIED: rg] | Change wording to any combination of Xiaohei, Littlebox, and Tom with separate route groups and per-route references. [VERIFIED: routing.md] |
| Generation routing | `SKILL.md` routes Xiaohei and Littlebox generation through their packs. [VERIFIED: SKILL.md:97-129] | Tom generation prompt, composition, QA, and rights references are absent. [VERIFIED: rg] | Add Tom generation routing through Tom `prompt-template.md`, `composition-patterns.md`, `qa-checklist.md`, and `rights.md`. [VERIFIED: prompt-template.md] |
| QA and edit | `SKILL.md` lists Xiaohei and Littlebox QA risks and repair guidance. [VERIFIED: SKILL.md:131-157] | Tom protected-route failures and edit gates are absent. [VERIFIED: rg] | Add Tom QA source and high-risk failures: generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, route leakage, and rights-status note loss. [VERIFIED: qa-checklist.md] |
| Save paths | `SKILL.md` maps Xiaohei and Littlebox paths plus escaped markers. [VERIFIED: SKILL.md:159-188] | Tom raw path and escaped marker are absent. [VERIFIED: rg] | Add `assets/<article-slug>-tom/`, `assets/&lt;article-slug&gt;-tom/`, and output suffix `tom`. [VERIFIED: routing.md] |
| Delivery blocks | `SKILL.md` groups mixed delivery by Xiaohei and Littlebox only. [VERIFIED: SKILL.md:192-205] | Tom delivery block is absent. [VERIFIED: rg] | Add Tom block with selected IP, shared core idea, image purposes, save path, route status `gated-authorized`, rights note to `rights.md`, and stability notes. [VERIFIED: 08-CONTEXT.md] |

## Architecture Patterns

### System Architecture Diagram

```text
User request
  |
  v
SKILL.md controller
  |
  v
Read references/routing.md
  |
  +-- omitted IP -----------------------> xiaohei route group
  |
  +-- Xiaohei aliases ------------------> xiaohei route group
  |
  +-- Littlebox aliases ----------------> littlebox route group
  |
  +-- Tom aliases ----------------------> tom route group (gated-authorized)
  |
  +-- multiple requested IPs -----------> separate route groups
                                           |
                                           v
                         Each group loads only its required_references
                                           |
                                           v
                         Route-local shot list, prompt, generation, QA/edit
                                           |
                                           v
                         Route-local output directory and delivery block
```

The diagram reflects the current Markdown controller architecture and Phase 8 target routing flow. [VERIFIED: SKILL.md; VERIFIED: routing.md]

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md                          # Phase 8 target controller.
└── references/
    ├── routing.md                    # Route metadata source.
    └── ips/
        ├── xiaohei/                  # Existing default canonical pack.
        ├── littlebox/                # Existing optional canonical pack.
        └── tom/                      # Existing gated-authorized Tom canonical pack.
```

The target implementation should keep this file layout unchanged. [VERIFIED: 08-CONTEXT.md]

### Pattern 1: Route Metadata First

**What:** `SKILL.md` reads `references/routing.md` before loading route-local behavior. [VERIFIED: SKILL.md:18-20]
**When to use:** Use for every planning, generation, QA, edit, and delivery task in Phase 8. [VERIFIED: 08-CONTEXT.md]
**Example:**

```markdown
先读取 `references/routing.md`，确定本次任务的视觉 IP。
```

Source: `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: SKILL.md:41]

### Pattern 2: Route-Local Reference Loading

**What:** Each route group loads only its own `required_references`. [VERIFIED: SKILL.md:51; VERIFIED: routing.md:11]
**When to use:** Use for Tom planning, prompt generation, QA, edit repairs, and mixed-IP groups. [VERIFIED: 08-CONTEXT.md]
**Example:**

```markdown
每个 variant group 只加载自己的 `required_references`，并使用自己的动作、隐喻、背景、标注、QA 和输出路径。
```

Source: `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: SKILL.md:51]

### Pattern 3: Separate Mixed Route Groups

**What:** A mixed-IP request shares one core idea, then creates one isolated route group per selected IP. [VERIFIED: SKILL.md:90-93; VERIFIED: routing.md:11]
**When to use:** Use for TOMR-03 and any request naming multiple aliases across Xiaohei, Littlebox, and Tom. [VERIFIED: .planning/REQUIREMENTS.md]
**Example:**

```markdown
混合 IP shot list 先写 shared core idea，再按 IP 拆成独立 variant group。
```

Source: `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: SKILL.md:90]

### Pattern 4: Output Suffix Drives Save Path

**What:** Save paths are derived from `routing.md` `output_suffix` values. [VERIFIED: SKILL.md:175-179; VERIFIED: routing.md:34-40]
**When to use:** Use for TOMR-04 and mixed-IP delivery. [VERIFIED: .planning/REQUIREMENTS.md]
**Example:**

```markdown
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
```

Source: `ian-xiaohei-illustrations/references/routing.md`. [VERIFIED: routing.md:38]

### Anti-Patterns to Avoid

- **Duplicating Tom route truth in `SKILL.md`:** `SKILL.md` should consume `routing.md` values and provide controller instructions, while `routing.md` remains the route metadata source. [VERIFIED: 08-CONTEXT.md]
- **Adding public docs in Phase 8:** README, examples, agent metadata, release checklist, validator hardening, and tests are fenced to Phases 9 and 10. [VERIFIED: 08-CONTEXT.md]
- **Blending Tom rules into Xiaohei or Littlebox:** Tom rules stay route-local and leakage is an explicit Tom QA failure. [VERIFIED: qa-checklist.md]
- **Making Tom implicit default:** `routing.md` marks Tom `default=false`, and requirements keep Xiaohei as the omitted-IP default. [VERIFIED: routing.md; VERIFIED: .planning/REQUIREMENTS.md]
- **Treating rights status as a one-time note:** Tom `gated-authorized` and `rights.md` must appear in planning, generation, edit, QA, and delivery contexts. [VERIFIED: prompt-template.md; VERIFIED: qa-checklist.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route metadata | A second route table inside `SKILL.md` | `references/routing.md` | The existing route table already contains aliases, defaults, output suffixes, required references, attribution context, and status. [VERIFIED: routing.md] |
| Tom prompt format | Fresh Tom planning or generation prose | `references/ips/tom/prompt-template.md` | The Tom prompt file already defines planning fields, one-image generation, edit gates, rights note, and output reminder. [VERIFIED: prompt-template.md] |
| Tom QA categories | New controller-level failure taxonomy | `references/ips/tom/qa-checklist.md` | The Tom QA file already defines pass criteria, protected-route checks, failure signals, iteration moves, and delivery judgment. [VERIFIED: qa-checklist.md] |
| Rights handling | Inline legal interpretation in the controller | `references/ips/tom/rights.md` | The rights file already records status, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner. [VERIFIED: rights.md] |
| Mixed-IP implementation | Blended character prompt or combined output directory | Separate route groups | `routing.md` and Phase 8 context require one route-local group and output directory per selected IP. [VERIFIED: routing.md; VERIFIED: 08-CONTEXT.md] |

**Key insight:** The controller should orchestrate already-verified route-local references; it should avoid inventing route-local Tom behavior. [VERIFIED: 08-CONTEXT.md]

## Common Pitfalls

### Pitfall 1: Controller Mentions Tom Aliases but Skips Tom References

**What goes wrong:** Users can name Tom, but generated planning still uses Xiaohei or Littlebox prompt and QA rules. [VERIFIED: codebase pattern]
**Why it happens:** Alias selection and `required_references` loading are separate controller steps. [VERIFIED: SKILL.md]
**How to avoid:** Add Tom aliases and the full Tom required-reference list in `SKILL.md`. [VERIFIED: routing.md]
**Warning signs:** `rg -n "references/ips/tom/(index|rights|style-dna|tom-ip|composition-patterns|prompt-template|qa-checklist)\\.md" ian-xiaohei-illustrations/SKILL.md` misses one or more files. [VERIFIED: command design]

### Pitfall 2: Mixed Groups Stay Two-Route Only

**What goes wrong:** A user asks for Xiaohei, Littlebox, and Tom variants, but the controller returns only Xiaohei and Littlebox sections. [VERIFIED: current SKILL.md]
**Why it happens:** Current mixed route wording names only two variant groups. [VERIFIED: SKILL.md:90-93]
**How to avoid:** Generalize mixed-IP wording to any combination of Xiaohei, Littlebox, and Tom and include a Tom block. [VERIFIED: 08-CONTEXT.md]
**Warning signs:** `rg -n "Xiaohei, Littlebox 和 Tom|separate route groups|Tom variant group" ian-xiaohei-illustrations/SKILL.md` lacks all three markers. [VERIFIED: command design]

### Pitfall 3: Tom Path Marker Missing in Escaped Form

**What goes wrong:** Phase 10 marker validation can find raw `assets/<article-slug>-tom/` but misses `assets/&lt;article-slug&gt;-tom/`. [VERIFIED: 08-CONTEXT.md]
**Why it happens:** Markdown docs often require both raw and HTML-escaped token forms for validation continuity. [VERIFIED: routing.md]
**How to avoid:** Add both raw and escaped Tom output path markers to `SKILL.md`. [VERIFIED: 08-CONTEXT.md]
**Warning signs:** `rg -n "assets/<article-slug>-tom/|assets/&lt;article-slug&gt;-tom/" ian-xiaohei-illustrations/SKILL.md` finds only one form. [VERIFIED: command design]

### Pitfall 4: Rights Boundary Drops During Edits or Delivery

**What goes wrong:** Tom planning includes `gated-authorized`, but edit or delivery notes omit `rights.md`. [VERIFIED: Tom QA route-leakage definition]
**Why it happens:** Current controller delivery block has no protected-route status field because Xiaohei and Littlebox do not use that rights gate. [VERIFIED: SKILL.md:192-205]
**How to avoid:** Add Tom-specific planning, generation, QA/edit, and delivery notes that preserve `gated-authorized` and `rights.md`. [VERIFIED: prompt-template.md; VERIFIED: qa-checklist.md]
**Warning signs:** `rg -n "gated-authorized|rights\\.md" ian-xiaohei-illustrations/SKILL.md` finds route selection only and misses QA or delivery text. [VERIFIED: command design]

### Pitfall 5: Phase 8 Scope Creep

**What goes wrong:** Planning adds README, examples, agent metadata, release checklist, validator, or Node test edits. [VERIFIED: 08-CONTEXT.md]
**Why it happens:** Phase 9 and Phase 10 surfaces already have Tom-related work queued. [VERIFIED: ROADMAP.md]
**How to avoid:** Keep implementation limited to `ian-xiaohei-illustrations/SKILL.md` unless a strict blocker appears. [VERIFIED: 08-CONTEXT.md]
**Warning signs:** `git diff --name-only` includes files outside `ian-xiaohei-illustrations/SKILL.md` for Phase 8 implementation. [VERIFIED: command design]

## Code Examples

Verified patterns from repository sources:

### Route Selection Pattern

```markdown
先读取 `references/routing.md`，确定本次任务的视觉 IP。
```

Source: `ian-xiaohei-illustrations/SKILL.md`. [VERIFIED: SKILL.md:41]

### Tom Alias Contract

```markdown
- 用户使用 `Tom`、`Tom Cat`、`Tom and Jerry`、`汤姆`、`汤姆猫` 时，选择同一个 `tom` 路由，路线状态保持 `gated-authorized`。
```

Source: `ian-xiaohei-illustrations/references/routing.md`. [VERIFIED: routing.md:10]

### Tom Planning Fields

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]
   Tom action: [the physical cognitive action Tom performs]
   Supporting objects: [1-2 objects such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, or warning marks]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-tom/
   Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.
```

Source: `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`. [VERIFIED: prompt-template.md]

### Mixed Route Group Contract

```markdown
- 同时请求 Xiaohei、Littlebox 和 Tom 中的多个 IP 时，建立 separate route groups，每个 route group 只加载自己的 `required_references`，并写入自己的输出目录。
```

Source: `ian-xiaohei-illustrations/references/routing.md`. [VERIFIED: routing.md:11]

### Tom Output Path Markers

```markdown
- `tom` 输出目录为 `assets/<article-slug>-tom/`，文档校验也保留 HTML 转义路径标记：`assets/&lt;article-slug&gt;-tom/`。
```

Source: `ian-xiaohei-illustrations/references/routing.md`. [VERIFIED: routing.md:38]

## Exact SKILL.md Sections Likely Needing Edits

| Section | Existing Lines | Required Phase 8 Change |
|---------|----------------|-------------------------|
| Frontmatter `description` | Lines 1-4 | Add Tom trigger language only if planner wants implicit skill invocation to mention Tom; keep Xiaohei default wording intact. [VERIFIED: SKILL.md] |
| `## 核心定位` | Lines 8-14 | Add Tom as an optional protected-character IP with `gated-authorized` and `rights.md` pointer. [VERIFIED: 08-CONTEXT.md] |
| `## 先读这些参考` | Lines 16-35 | Add all seven Tom required references from `routing.md`. [VERIFIED: routing.md] |
| `### 1. 选择视觉 IP 路由` | Lines 39-53 | Add Tom aliases, `default=false`, Tom output suffix, Tom required references, `gated-authorized`, and rights pointer; generalize mixed route groups to Xiaohei, Littlebox, and Tom. [VERIFIED: 08-CONTEXT.md] |
| `### 3. 先出配图策略` | Lines 66-95 | Add Tom shot-list fields and Tom mixed-group block. [VERIFIED: prompt-template.md] |
| `### 4. 单张生成` | Lines 97-129 | Add Tom prompt/template/composition/QA/rights routing and protected-route generation constraints. [VERIFIED: prompt-template.md] |
| `### 5. 检查与迭代` | Lines 131-157 | Add Tom QA file selection, high-risk failures, and edit repair routing. [VERIFIED: qa-checklist.md] |
| `### 6. 保存交付` | Lines 159-190 | Add Tom raw output path, output suffix mapping, escaped marker, and mixed-IP Tom directory. [VERIFIED: routing.md] |
| `## 输出口径` | Lines 192-207 | Add Tom one-block-per-IP delivery block with `gated-authorized`, `rights.md`, save path, and stability notes. [VERIFIED: 08-CONTEXT.md] |

## Stable Markers for Phase 10

| Marker Type | Required Marker |
|-------------|-----------------|
| Tom aliases | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`. [VERIFIED: routing.md] |
| Route status | `gated-authorized`. [VERIFIED: routing.md] |
| Rights pointer | `references/ips/tom/rights.md` and `rights.md`. [VERIFIED: routing.md; VERIFIED: prompt-template.md] |
| Required references | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md`. [VERIFIED: routing.md] |
| Raw path | `assets/<article-slug>-tom/`. [VERIFIED: routing.md] |
| Escaped path | `assets/&lt;article-slug&gt;-tom/`. [VERIFIED: routing.md] |
| Mixed route wording | `separate route groups`. [VERIFIED: routing.md] |
| Tom planning fields | `Placement`, `Core idea`, `Structure type`, `Tom state`, `Tom action`, `Supporting objects`, `Visible labels`, `Output path`, `Rights-status note`. [VERIFIED: prompt-template.md] |
| Tom QA failures | `generic cats`, `passive Tom placement`, `source-frame recreation`, `show logos`, `title cards`, `default Jerry usage`, `broad cast expansion`, `excessive text`, `route leakage`. [VERIFIED: qa-checklist.md] |

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Root Xiaohei-only controller references | Route-local canonical packs under `references/ips/{route}/` with root Xiaohei compatibility paths | Established before Phase 8. [VERIFIED: SKILL.md; VERIFIED: routing.md] | Phase 8 should extend controller routing to Tom without moving Tom pack files. [VERIFIED: 08-CONTEXT.md] |
| Two-route optional selection | Three-route metadata source with Xiaohei, Littlebox, and Tom | Tom route contract completed in Phase 6 and Tom pack completed in Phase 7. [VERIFIED: ROADMAP.md; VERIFIED: 07-VERIFICATION.md] | Phase 8 only wires Tom into controller behavior. [VERIFIED: 08-CONTEXT.md] |
| Public docs as route guidance source | `routing.md` as controller route metadata source | Locked by Phase 8 context. [VERIFIED: 08-CONTEXT.md] | README/examples updates belong to Phase 9. [VERIFIED: ROADMAP.md] |

**Deprecated/outdated:**
- Controller wording limited to Xiaohei and Littlebox is outdated for Phase 8 because `routing.md` and Tom pack now contain the third route. [VERIFIED: codebase grep]
- Validator coverage is Phase 6-era Tom contract coverage; Phase 10 owns hardened Tom controller/docs/test validation. [VERIFIED: 07-VERIFICATION.md; VERIFIED: ROADMAP.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | None. | N/A | All recommendations are grounded in repository files and local command output. [VERIFIED: codebase grep] |

## Open Questions (RESOLVED)

1. **Should `SKILL.md` frontmatter description include Tom aliases?**
   - What we know: Phase 8 requires controller selection via Tom aliases, and `SKILL.md` frontmatter currently names Xiaohei defaults but not Tom. [VERIFIED: SKILL.md; VERIFIED: .planning/REQUIREMENTS.md]
   - RESOLVED: Phase 8 should add a short Tom phrase to frontmatter only as controller discoverability wording, while route-selection body text remains the binding behavior. [VERIFIED: 08-CONTEXT.md; VERIFIED: codebase analysis]
   - Recommendation: Add a short Tom phrase to frontmatter and always add route-selection bullets in the workflow body. [VERIFIED: codebase analysis]

2. **Should Phase 8 touch validator marker checks?**
   - What we know: Phase 10 owns validator hardening and Node tests. [VERIFIED: ROADMAP.md]
   - RESOLVED: Phase 8 keeps validator files unchanged; validation hardening belongs to Phase 10. Existing validator, Node tests, diff checks, and targeted marker scans are enough for Phase 8. [VERIFIED: local validator baseline; VERIFIED: 08-CONTEXT.md]
   - Recommendation: Keep validator files unchanged and rely on existing validator, Node tests, diff check, and targeted `rg` checks after implementation. [VERIFIED: 08-CONTEXT.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` | yes [VERIFIED: local command] | v24.13.0 [VERIFIED: `node --version`] | None needed. [VERIFIED: local command] |
| Git | diff checks and commit | yes [VERIFIED: local command] | 2.50.1 [VERIFIED: `git --version`] | None needed. [VERIFIED: local command] |
| npm | package-manager availability probe | yes [VERIFIED: local command] | 11.6.2 [VERIFIED: `npm --version`] | Use direct Node commands for current validation. [VERIFIED: local command] |
| `gsd-tools` PATH shim | direct `gsd-tools query init.phase-op 8` | no [VERIFIED: local command] | N/A | `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs query init.phase-op 8` works. [VERIFIED: local command] |

**Missing dependencies with no fallback:** none. [VERIFIED: local command]

**Missing dependencies with fallback:**
- `gsd-tools` command alias is missing from PATH; the core `gsd-tools.cjs` script path works and returned Phase 8 init JSON. [VERIFIED: local command]

## Verification Commands After Implementation

Run these after the Phase 8 `SKILL.md` implementation. [VERIFIED: local baseline]

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
git diff --name-only
rg -n "Tom|Tom Cat|Tom and Jerry|汤姆|汤姆猫" ian-xiaohei-illustrations/SKILL.md
rg -n "references/ips/tom/(index|rights|style-dna|tom-ip|composition-patterns|prompt-template|qa-checklist)\\.md" ian-xiaohei-illustrations/SKILL.md
rg -n "gated-authorized|rights\\.md|assets/<article-slug>-tom/|assets/&lt;article-slug&gt;-tom/|separate route groups" ian-xiaohei-illustrations/SKILL.md
rg -n "generic cats|passive Tom placement|source-frame recreation|show logos|title cards|default Jerry usage|broad cast expansion|excessive text|route leakage" ian-xiaohei-illustrations/SKILL.md
```

Current baseline before implementation: validator passed 40/40 checks, Node tests passed 8/8 tests, and `git diff --check` exited successfully. [VERIFIED: local command]

## Scope Fence

| Surface | Phase 8 Action |
|---------|----------------|
| `ian-xiaohei-illustrations/SKILL.md` | Edit for Tom controller integration. [VERIFIED: 08-CONTEXT.md] |
| `README.md` | Leave for Phase 9. [VERIFIED: ROADMAP.md] |
| `examples/prompts.md` | Leave for Phase 9. [VERIFIED: ROADMAP.md] |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Leave for Phase 9. [VERIFIED: ROADMAP.md] |
| `RELEASE_CHECKLIST.md` | Leave for Phase 9. [VERIFIED: ROADMAP.md] |
| `scripts/validate-skill-package.mjs` | Leave hardening for Phase 10. [VERIFIED: ROADMAP.md] |
| `scripts/validate-skill-package.test.mjs` | Leave tests for Phase 10. [VERIFIED: ROADMAP.md] |
| Tom rendered example assets | Keep gated by public-sample approval process. [VERIFIED: rights.md] |

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no [VERIFIED: codebase scan] | The repository has no auth runtime. [VERIFIED: AGENTS.md] |
| V3 Session Management | no [VERIFIED: codebase scan] | The repository has no session runtime. [VERIFIED: AGENTS.md] |
| V4 Access Control | yes [VERIFIED: rights.md] | Keep Tom protected-route status and rights pointer visible in controller routing and delivery text. [VERIFIED: prompt-template.md] |
| V5 Input Validation | yes [VERIFIED: SKILL.md] | Route user IP aliases through `routing.md`; preserve route-local references and QA gates. [VERIFIED: routing.md] |
| V6 Cryptography | no [VERIFIED: codebase scan] | The repository has no cryptographic runtime. [VERIFIED: AGENTS.md] |

### Known Threat Patterns for Markdown Skill Controller

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route confusion from ambiguous aliases | Spoofing | Use exact alias bullets from `routing.md` and keep Xiaohei as the only omitted-IP default. [VERIFIED: routing.md] |
| Cross-IP route leakage | Information Disclosure | Load only selected route `required_references` per route group. [VERIFIED: routing.md] |
| Protected-character rights boundary loss | Repudiation | Include `gated-authorized` and `rights.md` in Tom planning, generation, edit, QA, and delivery context. [VERIFIED: prompt-template.md; VERIFIED: qa-checklist.md] |
| Public availability overclaim | Tampering | Preserve Tom `gated-authorized` wording and point release/public-sample decisions to `rights.md`. [VERIFIED: rights.md] |

## Sources

### Primary (HIGH confidence)

- `AGENTS.md` - project constraints, runtime, language, and GSD workflow requirements. [VERIFIED: file read]
- `.planning/ROADMAP.md` - Phase 8/9/10 boundaries and success criteria. [VERIFIED: file read]
- `.planning/REQUIREMENTS.md` - TOMR-01 through TOMR-04 and out-of-scope items. [VERIFIED: file read]
- `.planning/phases/08-skill-controller-integration/08-CONTEXT.md` - locked Phase 8 implementation decisions and scope fence. [VERIFIED: file read]
- `.planning/phases/07-tom-canonical-pack/07-VERIFICATION.md` - verified Tom canonical pack readiness. [VERIFIED: file read]
- `ian-xiaohei-illustrations/SKILL.md` - current controller gaps and section line references. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/routing.md` - Tom route metadata, aliases, status, references, mixed grouping, and output paths. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/tom/index.md` - Tom pack route contract and scope boundary. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` - Tom planning, generation, edit, path, and rights-status patterns. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` - Tom QA failures and delivery judgment. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - rights boundary and public-sample gate. [VERIFIED: file read]

### Secondary (MEDIUM confidence)

- Local command output for `node`, `npm`, `git`, validator, Node tests, `git diff --check`, and targeted `rg` scans. [VERIFIED: local command]

### Tertiary (LOW confidence)

- None. [VERIFIED: source inventory]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - repository has no external package manifest and implementation target is Markdown-only. [VERIFIED: package scan]
- Architecture: HIGH - controller and route metadata behavior are visible in `SKILL.md` and `routing.md`. [VERIFIED: codebase grep]
- Pitfalls: HIGH - pitfalls map directly to current `SKILL.md` gaps and existing Tom route-pack markers. [VERIFIED: codebase grep]

**Research date:** 2026-06-13 [VERIFIED: system date]
**Valid until:** 2026-07-13 for Phase 8 planning, unless Phase 9 or Phase 10 changes route metadata earlier. [ASSUMED]
