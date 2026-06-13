# Phase 12: Ferris Canonical Pack - Research

**Researched:** 2026-06-13  
**Domain:** Documentation-first Codex Skill canonical IP pack  
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Ferris Pack File Layout

- **D-01:** Create the canonical Ferris pack under `ian-xiaohei-illustrations/references/ips/ferris/`.
- **D-02:** Keep `source.md` as the existing Phase 11 authority and add six operational pack files beside it: `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-03:** Use the Tom pack as the primary structural precedent because Tom combines route-local identity, style, composition, prompt, QA, route status, and rights/source boundary notes in one pack.
- **D-04:** The final Phase 12 Ferris layout is:
  - `ian-xiaohei-illustrations/references/ips/ferris/index.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/source.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`
  - `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`
- **D-05:** Do not add a separate Ferris `language-and-labels.md` in Phase 12. Put Ferris label rules in `prompt-template.md` and `qa-checklist.md`, following the Tom pack shape.

#### Source Record Referencing

- **D-06:** New Ferris pack files reference `source.md` as the source/trademark authority instead of repeating the full Phase 11 source record.
- **D-07:** `index.md` should list `source.md` as the authority for source attribution, CC0/public-domain context, Rust trademark boundary, public sample policy, and route status changes.
- **D-08:** Operational files should include a compact source/trademark note: Ferris route status is `source-reviewed`; source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
- **D-09:** `prompt-template.md` and `qa-checklist.md` must carry a source/trademark note field so planning, generation, edit, and delivery surfaces preserve the boundary without duplicating all source-record text.
- **D-10:** Public sample approval policy stays referenced to `source.md` and `RELEASE_CHECKLIST.md`; Phase 12 pack files should avoid publishing generated Ferris samples or adding public asset claims.

#### Ferris Identity Constraints

- **D-11:** Define Ferris as the selected route's crab mascot character, adapted for sparse article illustrations.
- **D-12:** Preserve Ferris recognition through a compact orange/rust-red crab body, broad crab shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and an active pose tied to the article idea.
- **D-13:** Ferris identity should be simplified enough for article explanation while preserving route-specific crab-mascot recognition.
- **D-14:** Reject generic crab drift. A route-neutral crab, seafood icon, beach crab, random red animal, or decorative mascot fails the Ferris route.
- **D-15:** Reject source-asset tracing. Ferris images must be fresh article metaphors and should not trace, recreate, pose-match, or imitate the exact rustacean.net source assets, official logo arrangements, or public mascot asset sheets.
- **D-16:** Preserve route isolation. Ferris pack files must not blend Xiaohei's black creature identity, Littlebox's closed paper-box identity, or Tom's protected-character identity into Ferris rules.

#### Rust-Themed Article Action Language

- **D-17:** Ferris should perform the central cognitive action in every Ferris-route illustration. Removing Ferris should break the metaphor.
- **D-18:** Use Rust-themed systems metaphors as article action language: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, and review gates.
- **D-19:** Treat Rust-themed objects as explanatory metaphors, not official project branding. The pack should avoid Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, and endorsement language.
- **D-20:** Ferris action verbs should stay physical and readable: clamp, sort, guard, borrow, return, compile, type-check, stamp, carry, bridge, untangle, lock, inspect, reroute, balance, and release.
- **D-21:** The Rust-themed vocabulary should support generic article concepts such as trust, proof, safety, review, dependency, handoff, hidden cost, failure mode, decision gate, and system resilience.
- **D-22:** Composition examples should use low-tech props plus Rust-flavored labels sparingly. The pack should avoid dense language tutorials, code screenshots, official Rust diagrams, and IDE/UI scenes.

#### Prompt Fields and Output Contract

- **D-23:** Ferris shot-list planning must include these fields: Placement, Core idea, Structure type, Ferris state, Ferris action, Supporting objects, Visible labels, Output path, and Source/trademark note.
- **D-24:** Ferris planning states should include focused, guarding, sorting, type-checking, borrowing, compiling, inspecting, untangling, bracing, stamping, and releasing.
- **D-25:** Ferris planning actions should use the physical action language from D-20 and map each action to the article's cognitive anchor.
- **D-26:** Ferris output path in planning and delivery is `assets/<article-slug>-ferris/`, with ordered English slug filenames such as `01-topic-name.png`.
- **D-27:** Ferris generation prompts stay English for model consistency, while visible labels are quoted exactly in the user's language.
- **D-28:** The single-image prompt template should include fields for route status note, source/trademark note, scene, visual language, recurring IP, structure type, Ferris state, Ferris action, supporting objects, composition, Rust-themed article metaphor, visible labels, save reminder, and constraints.
- **D-29:** The prompt must explicitly forbid Rust logos, official-affiliation cues, endorsement wording, source-asset tracing, generic-crab drift, source asset pose copying, formal diagrams, dense text, UI screenshots, top-left titles, and route leakage.

#### QA and Edit Prompt Taxonomy

- **D-30:** Ferris QA pass criteria must cover 16:9 article format, one core idea, clean sparse hand-drawn style, Ferris recognizability, active Ferris cognitive action, original article metaphor, source/trademark note, sparse labels, route isolation, and `assets/<article-slug>-ferris/` delivery.
- **D-31:** Ferris QA failure categories must include generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-32:** Add failure-specific repair guidance for stronger Ferris participation, off-model identity repair, trademark-boundary repair, title removal, text reduction, and unaffected-content preservation.
- **D-33:** Include a source-asset tracing repair move that keeps the core idea while inventing a new low-tech article metaphor, changing Ferris pose/action, and removing asset-sheet or source-pose resemblance.
- **D-34:** The trademark-boundary repair edit prompt must remove or rewrite Rust-logo-forward visuals, official/endorsed/affiliated cues, and broad release language while preserving successful Ferris identity, composition, labels, aspect ratio, and article metaphor.
- **D-35:** The unaffected-content preservation edit prompt should mirror Tom's pattern: edit only the named failure and preserve successful Ferris action, identity cues, composition, labels, supporting objects, paths, line style, color accents, aspect ratio, and image quality.

#### Cross-File Coherence

- **D-36:** Every Ferris operational file should repeat the same route status, output path, source/trademark authority, and core failure category names.
- **D-37:** Shared Ferris failure category names should be stable across `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage.
- **D-38:** `index.md` should describe the purpose of each Ferris file and list the shared failure categories for later validator hardening.
- **D-39:** Phase 12 should update only Ferris pack files under `ian-xiaohei-illustrations/references/ips/ferris/`. Updates to `references/routing.md`, `SKILL.md`, public docs, metadata, release checklist, and validator files belong to downstream phases unless a planner identifies a broken link created by Phase 12 itself.

### the agent's Discretion

- Auto mode selected all meaningful gray areas and chose the recommended pack-shape, source-reference, route-isolation, trademark-safe, Tom-analog decisions. The planner may tune exact heading names and examples inside the locked file layout, provided the decisions above remain true.

### Deferred Ideas (OUT OF SCOPE)

- Phase 13 owns skill controller integration, route selection behavior, `required_references` expansion in `references/routing.md`, four-IP mixed route grouping, runtime output handling, and `SKILL.md` reference loading.
- Phase 14 owns public README guidance, copyable Ferris prompts, Ferris smoke prompts, four-IP mixed prompts, agent metadata, NOTICE consistency pass, and release checklist expansion.
- Phase 15 owns validator and Node test hardening for Ferris pack files, prompt placeholders, QA markers, source/trademark markers, docs markers, route leakage, public asset gates, and four-route parser behavior.
- v2 owns reusable machine-readable mascot manifests, broader open-source mascot import patterns, asset manifests, visual regression, release packaging scripts, route selectors, and English localization.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FIP-01 | Maintainer can find Ferris canonical references under `ian-xiaohei-illustrations/references/ips/ferris/`. | Create the six operational pack files beside `source.md`; `index.md` lists all seven files and their purposes. [VERIFIED: 12-CONTEXT.md, codebase grep] |
| FIP-02 | User receives Ferris planning fields for placement, core idea, structure type, Ferris state, Ferris action, supporting objects, visible labels, output path, and source/trademark note. | Put the planning block in `prompt-template.md`; mirror Tom's Planning Output Format and add the Ferris-specific `Source/trademark note`. [VERIFIED: Tom prompt-template.md, 12-CONTEXT.md] |
| FIP-03 | Ferris prompt template produces one 16:9 article illustration where Ferris performs the cognitive action. | Use the Tom one-image prompt shape, Ferris identity cues, Rust-themed metaphor objects, and a removable-character failure test. [VERIFIED: Tom prompt-template.md, Ferris source.md, 12-CONTEXT.md] |
| FIP-04 | Ferris QA rejects generic crabs, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage. | Repeat the exact eight stable failure category names across all six files, with full definitions and repair moves in `qa-checklist.md`. [VERIFIED: 12-CONTEXT.md, Tom QA pattern] |
| FIP-05 | Ferris edit prompts support stronger Ferris participation, off-model identity repair, trademark-boundary repair, title removal, text reduction, and preservation of unaffected content. | Add six named edit gates in `prompt-template.md` and cross-reference them from `qa-checklist.md`. [VERIFIED: Tom prompt-template.md, 12-CONTEXT.md] |
</phase_requirements>

## Summary

Phase 12 should implement a route-local Ferris canonical pack only under `ian-xiaohei-illustrations/references/ips/ferris/`, adding `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` beside the existing `source.md`. [VERIFIED: 12-CONTEXT.md, codebase grep] The existing Ferris source record already establishes `source-reviewed`, rustacean.net, Karen Rustad Tolva, CC0/public-domain context, Rust Foundation trademark policy context, sample policy, and review-owner wording. [VERIFIED: source.md; CITED: https://rustacean.net/; CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

The Tom pack is the primary structural precedent because it already combines route status, boundary authority, output path, index navigation, style rules, identity gates, composition families, prompt fields, edit prompts, QA gates, and delivery judgment in route-local files. [VERIFIED: Tom pack files] Ferris should reuse Tom's structural shape while replacing protected-character language with Ferris `source-reviewed` and source/trademark authority language. [VERIFIED: 12-CONTEXT.md, Tom pack files]

**Primary recommendation:** Build the six Ferris operational files as Tom-shaped Markdown references, repeat the exact Ferris route markers and failure category names in every file, and leave controller/docs/validator changes to Phases 13-15. [VERIFIED: 12-CONTEXT.md]

## Project Constraints (from AGENTS.md)

- Every user-facing reply must begin with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing replies must be in Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and PR copy must be English. [VERIFIED: AGENTS.md]
- Research and implementation should start from original need, constraints, and desired outcome. [VERIFIED: AGENTS.md]
- Prefer root-cause durable fixes and decision-changing information. [VERIFIED: AGENTS.md]
- Avoid negation-based contrastive phrasing in user-facing prose. [VERIFIED: AGENTS.md]
- Before file-changing tools, use the GSD workflow entry point; this turn is the research step of `$gsd-plan-phase 12`, so writing `12-RESEARCH.md` is inside the requested GSD workflow. [VERIFIED: AGENTS.md, user prompt]
- The project remains a lightweight Codex Skill package using Markdown `SKILL.md`, local references, and `agents/openai.yaml`. [VERIFIED: AGENTS.md project-doc]
- Existing Xiaohei behavior must stay working, and IP rules must stay separately readable, testable, and routable. [VERIFIED: AGENTS.md project-doc]
- Ferris work must preserve source attribution and Rust trademark boundary behavior. [VERIFIED: AGENTS.md project-doc, source.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Ferris identity rules | Codex Skill reference layer | Host image generation runtime | The repo stores route-local Markdown instructions; image rendering happens in the host `image_gen` capability. [VERIFIED: PROJECT.md, AGENTS.md stack] |
| Ferris planning fields | Codex Skill reference layer | Skill controller in Phase 13 | Phase 12 writes `prompt-template.md`; Phase 13 wires controller loading. [VERIFIED: 12-CONTEXT.md] |
| Ferris one-image generation prompt | Codex Skill reference layer | Host image generation runtime | Prompt text lives in the pack; actual generation stays external. [VERIFIED: PROJECT.md, Tom prompt-template.md] |
| Ferris QA and edit taxonomy | Codex Skill reference layer | Human/agent QA loop | QA is Markdown-driven and manual/agent-applied; no visual test framework exists in this phase. [VERIFIED: qa-checklist analogs, config] |
| Source/trademark boundary | Codex Skill reference layer | Release checklist/public docs in later phases | Phase 12 repeats compact notes and points to `source.md`; public release surfaces remain later scope. [VERIFIED: source.md, 12-CONTEXT.md] |
| Validation for Phase 12 | Local scripts and grep assertions | Git whitespace check | Current validator covers Phase 11 baseline; Phase 15 owns Ferris pack validator hardening. [VERIFIED: 11-VERIFICATION.md, 12-CONTEXT.md] |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Markdown reference files | repository-local | Codex Skill operational instructions | All existing IP packs use Markdown files under `references/ips/<route>/`. [VERIFIED: codebase grep] |
| Codex Skill package shape | repository-local | Skill entrypoint, route references, and host-agent image generation instructions | The installable unit is `ian-xiaohei-illustrations/` with `SKILL.md`, `agents/openai.yaml`, and references. [VERIFIED: PROJECT.md, AGENTS.md stack] |
| Node.js | v24.13.0 | Run dependency-free validation scripts and Node tests | Local environment has Node v24.13.0 and current validator/test suite passes. [VERIFIED: local command] |
| Git | 2.50.1 | Diff, whitespace validation, and commit | Local environment has Apple Git 2.50.1. [VERIFIED: local command] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `scripts/validate-skill-package.mjs` | repository-local | Validate current package contract | Run before and after Phase 12; current Ferris pack file checks arrive in Phase 15. [VERIFIED: local command, 12-CONTEXT.md] |
| `scripts/validate-skill-package.test.mjs` | repository-local | Regression tests for validator behavior | Run as a baseline guard after docs-only changes. [VERIFIED: local command] |
| `rg` / grep assertions | local shell tools | Check exact markers across new Ferris files | Use for Phase 12-specific assertions because validator hardening is deferred. [VERIFIED: local command strategy, 12-CONTEXT.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Route-local Markdown pack | Machine-readable JSON/YAML manifest | Machine-readable manifests are v2 scope; Phase 12 needs human-readable operational references. [VERIFIED: 12-CONTEXT.md] |
| Tom-shaped six-file pack | Separate `language-and-labels.md` | Context locks label rules into `prompt-template.md` and `qa-checklist.md`. [VERIFIED: 12-CONTEXT.md] |
| Local grep/source assertions | Full visual regression | Automated visual likeness judgment is out of scope for v1.2; Phase 12 is docs-only. [VERIFIED: REQUIREMENTS.md] |

**Installation:** No external package installation is required for Phase 12. [VERIFIED: PROJECT.md, config]

## Package Legitimacy Audit

Phase 12 installs no external packages. [VERIFIED: PROJECT.md, package file scan] The Package Legitimacy Gate is not applicable because the standard stack uses repository-local Markdown files plus existing local Node scripts. [VERIFIED: package file scan]

## Target Ferris Files

| File | Required Sections | Concrete Content Guidance |
|------|-------------------|---------------------------|
| `index.md` | Title, route contract, references, shared failure categories, scope boundary | Use Tom `index.md` shape. Include route id `ferris`, route status `source-reviewed`, output path `assets/<article-slug>-ferris/`, source/trademark authority `source.md`, and all eight stable failure names. [VERIFIED: Tom index.md, 12-CONTEXT.md] |
| `style-dna.md` | Core style, must have, recognition cues, composition, visual vetoes, stable gates | Define sparse 16:9 article style, clean white/near-white background, rough hand-drawn black linework, limited orange/rust-red accents, Ferris recognizability, Rust-themed props as low-tech metaphors, and all eight stable failure names. [VERIFIED: Tom style-dna.md, Xiaohei style-dna.md, 12-CONTEXT.md] |
| `ferris-ip.md` | Core identity, recognition rules, cognitive action responsibility, route boundary, failure modes, stable gates | Preserve compact orange/rust-red crab body, broad shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, active cognitive action, and source-asset tracing gate. [VERIFIED: source.md, rustacean.net, 12-CONTEXT.md] |
| `composition-patterns.md` | Composition families, metaphor invention rule, supporting objects, Ferris action pool, visible labels, source/trademark gates, anti-repeat rule | Use the eight Tom/Xiaohei families: Workflow, System Local View, Before/After, Character State, Concept Metaphor, Method Layers, Map Route, Mini Comic. Replace action/object pools with ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe flags, trait stamps, dependency knots, crate stacks, release locks, and review gates. [VERIFIED: Tom composition-patterns.md, Xiaohei composition-patterns.md, 12-CONTEXT.md] |
| `prompt-template.md` | Planning output format, single-image generation prompt, edit prompts, output reminder | Include all FIP-02 planning fields. Add generation fields: route status note, source/trademark note, scene, visual language, recurring IP, structure type, Ferris state, Ferris action, supporting objects, composition, Rust-themed article metaphor, visible labels, save reminder, constraints. Include six edit prompt gates. [VERIFIED: Tom prompt-template.md, 12-CONTEXT.md] |
| `qa-checklist.md` | Pass criteria, source/trademark checks, failure signals, iteration moves, delivery judgment | Include pass criteria from D-30, stable failures from D-31, repair moves from D-32 through D-35, and delivery path `assets/<article-slug>-ferris/`. [VERIFIED: Tom qa-checklist.md, 12-CONTEXT.md] |

## Exact Recurring Markers

Use these exact strings across all six operational Ferris files so Phase 15 validator hardening can grep stable markers. [VERIFIED: 12-CONTEXT.md]

| Marker Type | Exact Marker |
|-------------|--------------|
| Route status | `Ferris route status: \`source-reviewed\`.` |
| Output path | `Ferris output path: \`assets/<article-slug>-ferris/\`.` |
| Source authority | `Ferris source/trademark authority: \`source.md\`.` |
| Compact source/trademark note | `Source/trademark note: Ferris is a \`source-reviewed\` Rust-community mascot route. Source context lives in \`source.md\`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in \`source.md\`.` |
| Public sample note | `Public rendered Ferris samples remain gated by \`RELEASE_CHECKLIST.md\`.` |
| Failure block | `Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route.` |
| Delivery path note | `Save accepted Ferris output under \`assets/<article-slug>-ferris/\` with an ordered English slug filename such as \`01-topic-name.png\`.` |

Stable failure category names:

- `generic-crab drift`
- `passive Ferris placement`
- `Rust-logo misuse`
- `official-affiliation cues`
- `over-detailed mascot rendering`
- `excessive text`
- `source-asset tracing`
- `route leakage`

## Architecture Patterns

### System Architecture Diagram

```text
User request / Phase 13 route selection
        |
        v
Selected route: ferris
        |
        v
Ferris pack index.md
        |
        +--> source.md authority: source-reviewed, rustacean.net, CC0 context, trademark boundary
        +--> style-dna.md: sparse article style + visual vetoes
        +--> ferris-ip.md: identity + active cognitive action
        +--> composition-patterns.md: structure families + Rust-themed metaphor objects
        +--> prompt-template.md: planning fields + generation prompt + edit prompts
        +--> qa-checklist.md: pass/fail gates + repair taxonomy
        |
        v
Host image_gen generation/editing
        |
        v
Manual/agent QA gate
        |
        v
Accepted PNG saved under assets/<article-slug>-ferris/
```

The diagram reflects the planned data flow through route-local references and the host image-generation runtime. [VERIFIED: PROJECT.md, 12-CONTEXT.md]

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
└── references/
    └── ips/
        └── ferris/
            ├── index.md                 # route-local pack navigation
            ├── source.md                # existing Phase 11 source/trademark authority
            ├── style-dna.md             # visual language and style gates
            ├── ferris-ip.md             # Ferris identity and action responsibility
            ├── composition-patterns.md  # structure families and Rust-themed metaphors
            ├── prompt-template.md       # planning, generation, and edit prompts
            └── qa-checklist.md          # pass/fail gates and repair moves
```

This structure matches the locked Phase 12 layout. [VERIFIED: 12-CONTEXT.md]

### Pattern 1: Route-Local Source/Trademark Note

**What:** Every Ferris operational file carries the same compact route status, source authority, trademark boundary, public-sample gate, and output-path markers. [VERIFIED: 12-CONTEXT.md]  
**When to use:** Use in the first screenful of each new Ferris file. [VERIFIED: Tom pack analog]  
**Example:**

```markdown
Ferris route status: `source-reviewed`.
Ferris output path: `assets/<article-slug>-ferris/`.
Ferris source/trademark authority: `source.md`.

Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route.
Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation
claims, and endorsement wording follow the Rust Foundation trademark policy context
recorded in `source.md`.

Public rendered Ferris samples remain gated by `RELEASE_CHECKLIST.md`.
```

### Pattern 2: Character-As-Cognitive-Operator

**What:** Ferris must physically perform the concept rather than sit beside a diagram. [VERIFIED: 12-CONTEXT.md, Tom/Xiaohei/Littlebox pack analogs]  
**When to use:** Use in `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: Tom pack analog]  
**Example:**

```markdown
Ferris cognitive-action participation gate: Ferris performs the central cognitive
action, and removing Ferris breaks the metaphor.
```

### Pattern 3: One-Image Prompt With Explicit Constraints

**What:** Generate one standalone 16:9 image with one core idea, English prompt text, exact quoted visible labels, route status note, source/trademark note, and explicit vetoes. [VERIFIED: Tom prompt-template.md, Littlebox prompt-template.md]  
**When to use:** Use in `prompt-template.md` under `## Single Image Generation`. [VERIFIED: 12-CONTEXT.md]  
**Example:**

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Ferris is a `source-reviewed` Rust-community mascot route.
Source/trademark note: Source context lives in `source.md`; Rust/Cargo marks,
logos, official-affiliation claims, and endorsement wording follow the Rust
Foundation trademark policy context recorded in `source.md`.

Ferris action: Ferris must perform the central cognitive action: [specific action].
The metaphor should lose its meaning if Ferris is removed.
```

### Anti-Patterns to Avoid

- **Creating controller integration in Phase 12:** `SKILL.md`, `routing.md`, public docs, metadata, release checklist, and validator hardening are later phases. [VERIFIED: 12-CONTEXT.md]
- **Repeating the full source record in every file:** Operational files should point to `source.md` and use a compact source/trademark note. [VERIFIED: 12-CONTEXT.md]
- **Turning Ferris into a Rust logo surface:** Rust-themed props are explanatory metaphors; Rust/Cargo marks and endorsement cues follow the source/trademark boundary. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]
- **Tracing rustacean.net assets:** Ferris images should be fresh article metaphors rather than pose-matched source assets. [VERIFIED: 12-CONTEXT.md; CITED: https://rustacean.net/]
- **Blending IP identities:** Ferris files should avoid Xiaohei, Littlebox, and Tom identity rules beyond analog references in planning artifacts. [VERIFIED: 12-CONTEXT.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Ferris route pack structure | A new ad hoc pack shape | Tom pack structure | Tom already solves route status, authority pointer, prompt, edit, QA, and output-path coherence. [VERIFIED: Tom pack files] |
| Label language handling | A separate Phase 12 `language-and-labels.md` | `prompt-template.md` and `qa-checklist.md` | Context locks label guidance into the Tom-shaped Ferris pack. [VERIFIED: 12-CONTEXT.md] |
| Visual likeness validation | Automated visual classifier | Manual QA gates plus local text assertions | v1.2 excludes automated visual likeness judgment. [VERIFIED: REQUIREMENTS.md] |
| Trademark advice | New legal interpretation | `source.md`, NOTICE wording, release checklist, and Rust Foundation policy context | Existing Phase 11 source record and official policy define the project boundary. [VERIFIED: source.md; CITED: https://rustfoundation.org/policy/rust-trademark-policy/] |

**Key insight:** Phase 12 is an instruction-pack phase, so the durable solution is stable prose contracts with repeated exact markers that later validator hardening can assert. [VERIFIED: 12-CONTEXT.md, Phase 11 validator pattern]

## Common Pitfalls

### Pitfall 1: Source Boundary Drift

**What goes wrong:** Ferris files start making broad source, release, or permission claims beyond `source-reviewed`. [VERIFIED: source.md, 12-CONTEXT.md]  
**Why it happens:** The Ferris source context and Rust/Cargo trademark context are related in subject matter but governed by separate policy surfaces. [CITED: https://rustacean.net/; CITED: https://rustfoundation.org/policy/rust-trademark-policy/]  
**How to avoid:** Repeat the compact source/trademark note and point status changes to `source.md`. [VERIFIED: 12-CONTEXT.md]  
**Warning signs:** Missing `source-reviewed`, missing `source.md`, public availability wording, or endorsement-like language. [VERIFIED: source.md, 12-CONTEXT.md]

### Pitfall 2: Generic Crab Drift

**What goes wrong:** The image reads as a route-neutral crab, beach crab, seafood icon, or decorative mascot. [VERIFIED: 12-CONTEXT.md]  
**Why it happens:** Simplifying Ferris for article illustration can remove the recognizable mascot cues. [VERIFIED: 12-CONTEXT.md]  
**How to avoid:** Preserve compact orange/rust-red crab body, broad shell silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and active pose. [VERIFIED: 12-CONTEXT.md; CITED: https://rustacean.net/]  
**Warning signs:** Decorative crab, random red animal, passive corner mascot, or missing claws/shell/eyes. [VERIFIED: 12-CONTEXT.md]

### Pitfall 3: Rust-Logo Misuse

**What goes wrong:** The composition becomes Rust-logo-forward, uses bundled Rust marks, or implies official affiliation. [VERIFIED: source.md]  
**Why it happens:** Rust-themed metaphor objects can drift into official branding. [VERIFIED: source.md; CITED: https://rustfoundation.org/policy/rust-trademark-policy/]  
**How to avoid:** Use low-tech metaphor props such as ownership tags, borrow ropes, compiler gates, and type-check stamps, while avoiding official logo arrangements. [VERIFIED: 12-CONTEXT.md]  
**Warning signs:** Logo-centered layout, official/endorsed/affiliated wording, or release copy inside the image. [VERIFIED: source.md, 12-CONTEXT.md]

### Pitfall 4: Passive Ferris Placement

**What goes wrong:** Props, arrows, or text carry the metaphor while Ferris stands nearby. [VERIFIED: 12-CONTEXT.md, Tom/Xiaohei/Littlebox analogs]  
**Why it happens:** Diagram-first prompts under-specify Ferris action. [VERIFIED: existing prompt/QA analogs]  
**How to avoid:** Make Ferris clamp, sort, guard, borrow, return, compile, type-check, stamp, carry, bridge, untangle, lock, inspect, reroute, balance, or release the decisive idea. [VERIFIED: 12-CONTEXT.md]  
**Warning signs:** The image still explains the same concept after Ferris is removed. [VERIFIED: 12-CONTEXT.md]

### Pitfall 5: Validator Expectation Mismatch

**What goes wrong:** Phase 12 implementation expects `validate-skill-package.mjs` to enforce new Ferris pack files immediately. [VERIFIED: 12-CONTEXT.md]  
**Why it happens:** Phase 11 already added Ferris validator checks for source/route/docs, while Phase 15 owns pack hardening. [VERIFIED: 11-VERIFICATION.md, 12-CONTEXT.md]  
**How to avoid:** Use local grep/source assertions for Phase 12 pack markers and still run the current validator as baseline. [VERIFIED: local command results]  
**Warning signs:** Missing pack files pass current validator because Phase 15 checks do not exist yet. [VERIFIED: local command results, 12-CONTEXT.md]

## Code Examples

### Planning Output Block

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Ferris state: [focused / guarding / sorting / type-checking / borrowing / compiling / inspecting / untangling / bracing / stamping / releasing]
   Ferris action: [the physical cognitive action Ferris performs]
   Supporting objects: [1-2 objects such as ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, or review gates]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-ferris/
   Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
```

Source: Tom `prompt-template.md` planning format adapted to locked Ferris fields. [VERIFIED: Tom prompt-template.md, 12-CONTEXT.md]

### Single Image Prompt Skeleton

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Ferris is a `source-reviewed` Rust-community mascot route.

Source/trademark note: Source context lives in `source.md`; Rust/Cargo marks,
logos, official-affiliation claims, and endorsement wording follow the Rust
Foundation trademark policy context recorded in `source.md`.

Scene: [core idea in one sentence].

Visual language: sparse hand-drawn article illustration on a clean white or
near-white background. Rough black linework with visible human looseness,
generous whitespace, one enlarged action subject, and a few low-tech supporting
objects. Use orange or rust-red only for Ferris and decisive emphasis.

Recurring IP: Ferris the Rustacean as a simplified article-illustration crab
mascot. Preserve a compact orange/rust-red crab body, broad crab shell
silhouette, two visible claws, small legs, two eyes or eyestalk eyes, and an
active pose tied to the article idea.

Ferris action: Ferris must perform the central cognitive action: [specific
action]. The metaphor should lose its meaning if Ferris is removed.

Rust-themed article metaphor: [ownership tags / borrow ropes / lifetime clocks /
compiler gates / type-check stamps / safety nets / unsafe warning flags / trait
stamps / dependency knots / crate stacks / release locks / review gates].

Visible handwritten labels, copied exactly in the user's language: [quoted labels].

Constraints: no Rust logos, no official-affiliation cues, no endorsement wording,
no source-asset tracing, no source asset pose copying, no generic-crab drift, no
formal diagrams, no dense text, no UI screenshots, no top-left titles, and no
route leakage.
```

Source: Tom one-image prompt structure adapted to Ferris decisions. [VERIFIED: Tom prompt-template.md, 12-CONTEXT.md]

### Edit Prompt Gate Names

Use these headings in `prompt-template.md` and reference the same names from `qa-checklist.md`. [VERIFIED: 12-CONTEXT.md]

```markdown
### Stronger Ferris Participation
### Off-Model Identity Repair
### Trademark-Boundary Repair
### Source-Asset Tracing Repair
### Title Removal
### Text Reduction
### Preserve Unaffected Content
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single Xiaohei default route | Route-local canonical packs for Xiaohei, Littlebox, Tom, and planned Ferris | v1.0-v1.2 project roadmap | Phase 12 must preserve route isolation and pack-level references. [VERIFIED: PROJECT.md, ROADMAP.md] |
| Root-level Xiaohei references only | `references/ips/<route>/` canonical packs plus compatibility files | v1.0+ | Ferris belongs under `references/ips/ferris/`. [VERIFIED: codebase grep] |
| Protected-character route pattern for Tom | Source/trademark-aware mascot route pattern for Ferris | Phase 11/12 | Ferris uses `source.md` authority and `source-reviewed`, while Tom uses `rights.md` and `gated-authorized`. [VERIFIED: source.md, Tom rights/index files] |
| Current validator covers Phase 11 Ferris source/route/docs | Phase 15 will cover Ferris pack prompt/QA markers | Phase 15 deferred | Phase 12 needs grep/source assertions for new pack files. [VERIFIED: 12-CONTEXT.md, 11-VERIFICATION.md] |

**Deprecated/outdated:**

- Treating Ferris as only a source record is incomplete for Phase 12 because FIP-01 through FIP-05 require operational pack files, planning fields, prompt, QA, and edit guidance. [VERIFIED: REQUIREMENTS.md]
- Using public Ferris generated samples as calibration assets is gated by release review. [VERIFIED: source.md, RELEASE_CHECKLIST.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `rg` is available as a local assertion tool. | Validation Approach | Low; planner can substitute `grep -R` if `rg` is missing. |

## Open Questions

1. **Should Phase 12 add a temporary local assertion script?**
   - What we know: Phase 15 owns validator hardening, and Phase 12 can use grep/source assertions. [VERIFIED: 12-CONTEXT.md]
   - What's unclear: Whether the planner wants repeated assertions embedded directly in plan tasks or a tiny one-off shell loop.
   - Recommendation: Use inline grep assertions in each plan task and leave committed validator changes to Phase 15. [VERIFIED: 12-CONTEXT.md]

2. **Should Ferris examples use actual Rust keywords as visible labels?**
   - What we know: Rust-themed metaphor props are allowed as explanatory language, and visible labels should stay sparse and user-language exact. [VERIFIED: 12-CONTEXT.md]
   - What's unclear: Whether a future public docs pass wants Rust tutorial examples.
   - Recommendation: Keep labels generic and article-explanatory in Phase 12, with Rust-flavored props such as `borrow`, `type check`, `release gate`, and `unsafe` used sparingly. [VERIFIED: 12-CONTEXT.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | `node scripts/validate-skill-package.mjs`; `node --test scripts/validate-skill-package.test.mjs` | yes | v24.13.0 | none needed |
| Git | `git diff --check`; commit | yes | 2.50.1 (Apple Git-155) | none needed |
| `rg` | Fast local marker assertions | assumed | not probed | use `grep -R` |
| Host `image_gen` | Runtime generation after pack use | external | not applicable | Phase 12 creates prompts only |

**Missing dependencies with no fallback:** None found. [VERIFIED: local command]  
**Missing dependencies with fallback:** `rg` availability was not probed; grep can run equivalent marker assertions. [ASSUMED]

## Validation Architecture Decision

`## Validation Architecture` is not needed for the canonical output section because `.planning/config.json` sets `workflow.nyquist_validation` to `false`. [VERIFIED: .planning/config.json] This docs-only phase should still run local deterministic validation commands and Phase 12 source assertions. [VERIFIED: 11-VERIFICATION.md, 12-CONTEXT.md]

Recommended Phase 12 validation commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
test -f ian-xiaohei-illustrations/references/ips/ferris/index.md
test -f ian-xiaohei-illustrations/references/ips/ferris/style-dna.md
test -f ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md
test -f ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md
test -f ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md
test -f ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md
grep -R "Ferris route status: \`source-reviewed\`." ian-xiaohei-illustrations/references/ips/ferris
grep -R "assets/<article-slug>-ferris/" ian-xiaohei-illustrations/references/ips/ferris
grep -R "generic-crab drift" ian-xiaohei-illustrations/references/ips/ferris
grep -R "passive Ferris placement" ian-xiaohei-illustrations/references/ips/ferris
grep -R "Rust-logo misuse" ian-xiaohei-illustrations/references/ips/ferris
grep -R "official-affiliation cues" ian-xiaohei-illustrations/references/ips/ferris
grep -R "over-detailed mascot rendering" ian-xiaohei-illustrations/references/ips/ferris
grep -R "excessive text" ian-xiaohei-illustrations/references/ips/ferris
grep -R "source-asset tracing" ian-xiaohei-illustrations/references/ips/ferris
grep -R "route leakage" ian-xiaohei-illustrations/references/ips/ferris
```

Baseline run during research:

| Command | Result |
|---------|--------|
| `node scripts/validate-skill-package.mjs` | `Summary: total=53 passed=53 failed=0 skipped=0` [VERIFIED: local command] |
| `node --test scripts/validate-skill-package.test.mjs` | `tests 23`, `pass 23`, `fail 0` [VERIFIED: local command] |
| `git diff --check` | passed with no output [VERIFIED: local command] |

## Security Domain

Security enforcement is enabled because `.planning/config.json` has no explicit `security_enforcement: false`. [VERIFIED: .planning/config.json]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface in a Markdown skill pack. [VERIFIED: PROJECT.md] |
| V3 Session Management | no | No app session surface. [VERIFIED: PROJECT.md] |
| V4 Access Control | no | No runtime authorization surface; route isolation is content-level. [VERIFIED: PROJECT.md, 12-CONTEXT.md] |
| V5 Input Validation | yes | Prompt and QA instructions must constrain visible labels, route markers, source/trademark note, and output path. [VERIFIED: 12-CONTEXT.md] |
| V6 Cryptography | no | No cryptographic operations. [VERIFIED: PROJECT.md] |

### Known Threat Patterns for Documentation-Driven Prompt Packs

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route spoofing through missing status/source markers | Spoofing | Repeat `source-reviewed`, `source.md`, output path, and failure names in every operational file. [VERIFIED: 12-CONTEXT.md] |
| Trademark-boundary drift | Tampering | Use source/trademark note and prohibit Rust-logo misuse, official-affiliation cues, endorsement wording, and route leakage. [VERIFIED: source.md, 12-CONTEXT.md] |
| IP route leakage | Information Disclosure / Tampering | Keep Ferris identity rules only in `references/ips/ferris/` and leave other packs untouched. [VERIFIED: 12-CONTEXT.md] |
| Prompt overreach into public release claims | Repudiation / Tampering | Point public samples and status changes to `RELEASE_CHECKLIST.md` and `source.md`. [VERIFIED: source.md, RELEASE_CHECKLIST.md] |

## Sources

### Primary (HIGH Confidence)

- `.planning/phases/12-ferris-canonical-pack/12-CONTEXT.md` - Locked Phase 12 decisions, target files, stable failure names, prompt fields, and scope boundary. [VERIFIED: codebase grep]
- `.planning/REQUIREMENTS.md` - FIP-01 through FIP-05 requirement text. [VERIFIED: codebase grep]
- `.planning/ROADMAP.md` - Phase 12 goal, success criteria, and plan slices. [VERIFIED: codebase grep]
- `.planning/STATE.md` - Current milestone state and Phase 11 completion context. [VERIFIED: codebase grep]
- `.planning/phases/11-ferris-source-and-route-contract/11-VERIFICATION.md` - Phase 11 verified source/route/docs/validator baseline. [VERIFIED: codebase grep]
- `.planning/phases/11-ferris-source-and-route-contract/11-UAT.md` - Phase 11 UAT and validation command evidence. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` - Ferris source and trademark-boundary authority. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/ips/tom/*` - Primary structural precedent for route-local pack implementation. [VERIFIED: codebase grep]
- `ian-xiaohei-illustrations/references/ips/xiaohei/*` and `ian-xiaohei-illustrations/references/ips/littlebox/*` - Pack analogs for style, identity, composition, prompts, labels, and QA. [VERIFIED: codebase grep]
- `AGENTS.md` - Project-specific instructions, language policy, and GSD workflow constraint. [VERIFIED: codebase grep]
- `https://rustacean.net/` - Ferris mascot source context and CC0/public-domain dedication text. [CITED: rustacean.net]
- `https://rustfoundation.org/policy/rust-trademark-policy/` - Rust/Cargo trademark and official-affiliation policy context. [CITED: rustfoundation.org]

### Secondary (MEDIUM Confidence)

- Existing local validator and Node tests as current baseline: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: local command]

### Tertiary (LOW Confidence)

- `rg` availability for future assertions was not probed during research. [ASSUMED]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - repository-local Markdown pack shape and local Node validation were verified from files and commands.
- Architecture: HIGH - route-local reference architecture is locked by context and visible in existing IP packs.
- Pitfalls: HIGH - failure categories and scope boundaries are locked in context and reinforced by Tom/Ferris source records.
- External source/trademark boundary: HIGH for cited source context and official policy page; Phase 12 should still preserve the source.md directive to re-check upstream wording before status or public-sample changes.

**Research date:** 2026-06-13  
**Valid until:** 2026-07-13 for internal pack architecture; 2026-06-20 for trademark/source wording because upstream policy/source pages can change.
