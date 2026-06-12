# Phase 07: Tom Canonical Pack - Research

**Researched:** 2026-06-13 [VERIFIED: current_date]
**Domain:** Documentation-first Codex Skill reference-pack design for a gated protected-character route [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Confidence:** HIGH [VERIFIED: repo inspection]

<user_constraints>
## User Constraints (from CONTEXT.md)

Source: `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md`, copied verbatim for planner compliance. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Locked Decisions
## Implementation Decisions

### Canonical Pack Location and File Set
- **D-01:** Tom canonical pack files live under `ian-xiaohei-illustrations/references/ips/tom/`.
- **D-02:** Phase 7 fills these operational references: `index.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- **D-03:** `rights.md` stays the rights source from Phase 6 and should be referenced from the Tom pack index and every rights-sensitive workflow surface.
- **D-04:** `index.md` should mirror the Xiaohei and Littlebox pack pattern: list each Tom reference, state the route status, name the output path, and point to `rights.md`.

### Rights Status and Route Wording
- **D-05:** Tom route status remains `gated-authorized`.
- **D-06:** Every Tom planning, generation, edit, and QA surface must include a rights-status note.
- **D-07:** Tom wording should describe a protected-character route with gated release behavior. Broad availability claims are route leakage and belong in QA failure language.
- **D-08:** Tom output reminders use `assets/<article-slug>-tom/`, with public-doc escaping handled in later documentation phases.

### Tom Identity and Protected-Character Boundary
- **D-09:** Tom identity is Tom from Tom and Jerry as a protected-character route.
- **D-10:** Phase 7 defines a solo Tom article-illustration variant focused on cognitive action in article-body illustrations.
- **D-11:** The identity rules should preserve recognizable Tom cues through a simplified article-illustration style: grey/blue-grey cat body, white muzzle and belly areas, expressive ears, tail, paws, and Tom-like silhouette while keeping the image sparse and explanatory.
- **D-12:** Default Jerry usage, broader cast expansion, show logos, title cards, and source-frame recreation are rejected.
- **D-13:** The Tom pack should describe original article-illustration scenes and fresh metaphors, with Tom acting inside the concept instead of recreating cartoon source material.

### Planning Contract
- **D-14:** Tom shot lists include these fields: placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note.
- **D-15:** Tom must perform the cognitive action in every planned image. Passive placement is a planning failure.
- **D-16:** Supporting objects should come from article-metaphor needs, such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, or broken machines.
- **D-17:** Visible labels should be concise, sparse, and tied to the user's language unless a later prompt surface specifies a stricter rule.

### Prompt Template Contract
- **D-18:** The Tom prompt template produces one standalone 16:9 article illustration per generation call.
- **D-19:** The prompt should keep Tom in the central cognitive action, with concise visible labels, sparse composition, and one core idea.
- **D-20:** The prompt constraints must block logos, title cards, source-frame recreation, broad cast expansion, default Jerry usage, dense explanatory text, and generic-cat drift.
- **D-21:** The prompt template must remind downstream agents to save Tom outputs under `assets/<article-slug>-tom/`.

### QA and Edit Contract
- **D-22:** Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
- **D-23:** Tom QA should also check 16:9 format, one core idea, readable short labels, Tom identity recognizability, original metaphor, and rights-status note presence.
- **D-24:** Edit prompts support stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content.
- **D-25:** Editing guidance should preserve existing composition, labels, style, aspect ratio, and unaffected objects unless the targeted failure requires regeneration.

### Scope Fence
- **D-26:** Phase 7 reference files should include stable markers that Phase 10 can validate later; validator script hardening belongs to Phase 10.
- **D-27:** SKILL.md controller behavior, explicit Tom route selection, omitted-IP default behavior, and mixed three-IP grouping belong to Phase 8.
- **D-28:** README expansion, prompt-example expansion, release checklist expansion, and `agents/openai.yaml` wording belong to Phase 9.
- **D-29:** Public rendered Tom examples stay governed by the Phase 6 public-sample gate.

### the agent's Discretion
- Auto mode was explicitly authorized. The agent selected all Phase 7 gray areas and chose the conservative protected-IP defaults already implied by Phase 6.
- The planner may choose exact section headings inside each Tom reference file, provided the locked fields, route status, output path, and QA gates remain explicit.
- The planner may reuse Xiaohei's compact Chinese reference style or Littlebox's English prompt-template pattern where each fits the Tom route. Generation prompt text should favor English for model consistency, while planning and delivery notes follow the user's language.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Phase 8 owns SKILL.md controller behavior, explicit Tom alias routing, omitted-IP default behavior, and mixed Xiaohei/Littlebox/Tom route groups.
- Phase 9 owns README expansion, `examples/prompts.md` expansion, release checklist expansion, `agents/openai.yaml` wording, and public route guidance.
- Phase 10 owns full validator hardening, Node tests, route leakage checks, canonical-pack marker checks, docs markers, and public-sample gate hardening.
- v2 owns broader authorized franchise/cast support beyond solo Tom.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| TOMP-01 | Maintainer can find Tom canonical references under `ian-xiaohei-illustrations/references/ips/tom/`. [VERIFIED: .planning/REQUIREMENTS.md] | Create six operational Markdown files beside existing `rights.md`; `routing.md` already lists all seven Tom required references. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] |
| TOMP-02 | User receives Tom planning fields for placement, core idea, structure type, Tom state, Tom action, supporting objects, visible labels, output path, and rights-status note. [VERIFIED: .planning/REQUIREMENTS.md] | Mirror Littlebox's planning-output block, adding Tom-specific state/action and rights-status note fields. [VERIFIED: ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md] |
| TOMP-03 | Tom prompt template produces one 16:9 article illustration where Tom performs the cognitive action. [VERIFIED: .planning/REQUIREMENTS.md] | Reuse the one-image prompt contract from Xiaohei and Littlebox with Tom identity, protected-route constraints, and `assets/<article-slug>-tom/`. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md; ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md] |
| TOMP-04 | Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage. [VERIFIED: .planning/REQUIREMENTS.md] | Build a Tom QA checklist from existing active-character gates plus Phase 6 protected-route gates. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md; .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md] |
| TOMP-05 | Tom edit prompts support stronger Tom participation, off-model identity repair, title removal, text reduction, and preservation of unaffected content. [VERIFIED: .planning/REQUIREMENTS.md] | Extend existing edit-prompt patterns with Tom identity repair and route-status preservation. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md; ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md] |
</phase_requirements>

## Summary

Phase 7 is a content-pack phase: it should create the isolated Tom operational references already declared by the route table and keep `rights.md` as the Phase 6 authority. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md; ian-xiaohei-illustrations/references/routing.md] The implementation should follow the established canonical-pack split: index, style DNA, IP identity, composition patterns, prompt template, and QA checklist. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/index.md; ian-xiaohei-illustrations/references/ips/littlebox/index.md]

The highest-risk design choice is route leakage: Tom references must carry `gated-authorized` through planning, generation, edits, QA, and output reminders while keeping public sample policy and broad release wording gated by Phase 6. [VERIFIED: ian-xiaohei-illustrations/references/ips/tom/rights.md; .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md] The second risk is identity drift: Tom must remain recognizable as the authorized protected-character route while prompts avoid source-frame recreation, logos, title cards, default Jerry usage, and broader cast expansion. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

**Primary recommendation:** create the six Tom operational files as compact Markdown references, copy the Littlebox planning/prompt structure where useful, copy the Xiaohei active-character participation test where useful, and add stable Phase 10 marker phrases now. [VERIFIED: repo inspection]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Tom reference-pack content | Skill reference layer | Skill controller later | Phase 7 owns Markdown references under `references/ips/tom/`; Phase 8 owns `SKILL.md` controller loading. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Rights-status behavior | Tom reference pack | Release checklist later | `rights.md` is the authority, and Phase 7 must repeat route status on planning, prompt, edit, and QA surfaces. [VERIFIED: ian-xiaohei-illustrations/references/ips/tom/rights.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Tom identity and style | Tom reference pack | Host image generator | The repo supplies prompt and QA instructions; generation runs through host `image_gen`. [VERIFIED: AGENTS.md; ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md] |
| Output-path reminders | Tom prompt template and index | Phase 8 controller integration | Route metadata already sets `output_suffix=tom`; Phase 7 should repeat `assets/<article-slug>-tom/` in Tom pack content. [VERIFIED: ian-xiaohei-illustrations/references/routing.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Validator hardening | Phase 10 validation tier | Phase 7 marker authoring | Phase 7 should write stable markers; Phase 10 owns automated checks. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md; scripts/validate-skill-package.mjs] |

## Project Constraints (from AGENTS.md)

- User-facing replies must start with `爸爸` and use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and PR titles/descriptions use English. [VERIFIED: AGENTS.md]
- The project preserves Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Existing Xiaohei behavior and documented prompts stay working. [VERIFIED: AGENTS.md]
- Xiaohei, Littlebox, and Tom rules stay separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- MIT notices and derived documentation attribution for Ian and okooo5km stay preserved. [VERIFIED: AGENTS.md]
- The repo stays a lightweight skill package with script-based validation and host-provided `image_gen`. [VERIFIED: AGENTS.md]
- Markdown reference files use compact ATX-heading documents and kebab-case names. [VERIFIED: AGENTS.md]
- GSD workflow expects planning artifacts before direct implementation; this research is the planning artifact for Phase 7. [VERIFIED: AGENTS.md]

## Standard Stack

### Core

| Library / Format | Version | Purpose | Why Standard |
|------------------|---------|---------|--------------|
| Markdown reference files | N/A | Store Tom style, IP, composition, prompt, and QA contracts. [VERIFIED: repo inspection] | Existing Xiaohei and Littlebox packs use Markdown reference modules. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/index.md; ian-xiaohei-illustrations/references/ips/littlebox/index.md] |
| Codex Skill package shape | N/A | Keep `ian-xiaohei-illustrations/` installable as a skill directory. [VERIFIED: AGENTS.md] | The project architecture centers behavior in `SKILL.md` plus reference files. [VERIFIED: AGENTS.md] |
| Node.js built-ins | v24.13.0 available | Run current validator and tests during verification. [VERIFIED: command `node --version`; scripts/validate-skill-package.mjs] | Existing validation uses dependency-free Node built-ins. [VERIFIED: scripts/validate-skill-package.mjs] |
| Git | 2.50.1 available | Commit research and later implementation docs. [VERIFIED: command `git --version`] | The user requested a docs commit when appropriate. [VERIFIED: user request] |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| npm CLI | 11.6.2 available | Registry/package audit utility if future phases add dependencies. [VERIFIED: command `npm --version`] | Phase 7 installs external packages, so npm install planning is out of scope. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Node test runner | Node v24.13.0 built-in | Run `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: scripts/validate-skill-package.test.mjs] | Useful as a regression check after content edits even though Phase 10 owns new Tom validator hardening. [VERIFIED: .planning/ROADMAP.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown Tom references | JSON/YAML manifest | Existing skill behavior and reference packs are Markdown-first; a manifest belongs to future protected-IP support. [VERIFIED: .planning/PROJECT.md; .planning/REQUIREMENTS.md] |
| Compact file-per-concern pack | One large Tom file | Existing packs isolate style, identity, composition, prompt, and QA for progressive loading. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/index.md; ian-xiaohei-illustrations/references/ips/littlebox/index.md] |
| Manual Tom QA checklist | Automated visual likeness scoring | v1.1 keeps visual taste and likeness review manual. [VERIFIED: .planning/REQUIREMENTS.md] |

**Installation:**

```bash
# No external packages are installed for Phase 7.
```

**Version verification:** Node, npm, and git were checked in this environment; no package registry lookup is required because Phase 7 adds no external package. [VERIFIED: command results; .planning/config.json]

## Package Legitimacy Audit

Phase 7 installs no external packages. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] Slopcheck and registry provenance are skipped for this phase because the Standard Stack uses repository Markdown and Node built-ins. [VERIFIED: scripts/validate-skill-package.mjs]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| N/A | N/A | N/A | N/A | N/A | N/A | No install |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: no external packages]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: no external packages]

## Architecture Patterns

### System Architecture Diagram

```text
User asks for Tom route
  -> Phase 8 controller selects `tom` route later
  -> routing.md row points to references/ips/tom/*
  -> Tom index names route status, rights source, output path
  -> style-dna + tom-ip + composition-patterns shape planning
  -> prompt-template emits one 16:9 image prompt and edit prompts
  -> host image_gen produces image later
  -> qa-checklist checks Tom identity, active action, protected-route boundaries
  -> accepted outputs save under assets/<article-slug>-tom/
```

Diagram ownership matches the existing route-first reference architecture. [VERIFIED: ian-xiaohei-illustrations/references/routing.md; AGENTS.md]

### Recommended Project Structure

```text
ian-xiaohei-illustrations/references/ips/tom/
├── rights.md                 # Existing Phase 6 rights authority
├── index.md                  # Pack index, route status, output path, reference list
├── style-dna.md              # Tom visual style and visual vetoes
├── tom-ip.md                 # Tom identity, cognitive action language, protected boundary
├── composition-patterns.md   # Structure families and fresh metaphor rules
├── prompt-template.md        # Planning fields, generation prompt, edit prompts
└── qa-checklist.md           # Pass/fail gate, iteration moves, delivery judgment
```

This structure is already declared in the Tom route required references. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]

### Pattern 1: Canonical Pack Index

**What:** `index.md` lists every route-local reference, route status, output path, and rights source. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/index.md; ian-xiaohei-illustrations/references/ips/littlebox/index.md]
**When to use:** Use as the first file a downstream route loader reads after `routing.md`. [VERIFIED: AGENTS.md]
**Example:**

```markdown
# Tom IP Pack

Canonical Tom references for the selectable `tom` route.

Route status: `gated-authorized`.
Rights source: `rights.md`.
Output path: `assets/<article-slug>-tom/`.

- `style-dna.md`: Tom visual language and protected-route visual vetoes.
- `tom-ip.md`: Tom identity, action responsibility, and failure modes.
- `composition-patterns.md`: Tom composition families and original-metaphor rules.
- `prompt-template.md`: planning fields, one-image prompt, edit prompts, and output reminder.
- `qa-checklist.md`: pass/fail checks, rights-status checks, and iteration moves.
```

Pattern source: existing pack indexes plus Phase 7 locked decisions. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/index.md; ian-xiaohei-illustrations/references/ips/littlebox/index.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Pattern 2: Active Character Carries the Concept

**What:** The route character performs the core cognitive action, so removal of the character breaks the metaphor. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md; ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md]
**When to use:** Use in `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Example:**

```markdown
## Participation Test

Tom must perform the central cognitive action: pulling evidence into order, operating a lever, guarding a gate, catching a runaway signal, repairing a broken flow, bridging a gap, or stamping a result.

If the core metaphor still works after removing Tom, regenerate or rewrite the prompt.
```

Pattern source: Xiaohei participation test and Phase 7 Tom planning contract. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Pattern 3: English Generation Prompt With User-Language Labels

**What:** Keep model-facing image prompt text English while visible labels are quoted in the user's language. [VERIFIED: ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md; ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md]
**When to use:** Use in `prompt-template.md` for Tom generation and edits. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Example:**

```text
Generate one standalone 16:9 horizontal article illustration.

Route status note: Tom is a `gated-authorized` protected-character route. Keep the scene original and article-explanatory.

Visible handwritten labels, copied exactly in the user's language: "[label 1]", "[label 2]", "[label 3]".
```

Pattern source: Littlebox language policy plus Tom status requirement. [VERIFIED: ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Anti-Patterns to Avoid

- **Route leakage:** Claims that Tom is broadly available conflict with `gated-authorized` release behavior. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md; ian-xiaohei-illustrations/references/ips/tom/rights.md]
- **Generic-cat drift:** Tom prompts must preserve Tom-specific cues instead of allowing an anonymous grey cat. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
- **Source-frame recreation:** Tom scenes must be original article metaphors rather than cartoon stills or title-card recreations. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
- **Default Jerry usage and cast expansion:** The Phase 7 route is solo Tom. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
- **Controller edits in this phase:** `SKILL.md` integration belongs to Phase 8. [VERIFIED: .planning/ROADMAP.md]
- **Public docs expansion in this phase:** README, examples, release checklist, and agent metadata belong to Phase 9. [VERIFIED: .planning/ROADMAP.md]
- **Validator hardening in this phase:** Phase 10 owns full Tom marker checks and Node tests. [VERIFIED: .planning/ROADMAP.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route metadata | A second Tom route manifest inside the pack | Existing `routing.md` row | `routing.md` already stores aliases, default flag, output suffix, required references, attribution context, and status. [VERIFIED: ian-xiaohei-illustrations/references/routing.md] |
| Rights authority | Duplicated rights fields in every Tom file | Link to `references/ips/tom/rights.md` and repeat only the `gated-authorized` status note | Phase 6 verified `rights.md` as the source of rights and public-sample gate details. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md] |
| Visual QA taxonomy | A new QA framework | Existing pass/fail/iteration/delivery pattern | Xiaohei and Littlebox already use the accepted checklist structure. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md; ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md] |
| Image generation runtime | Local generator code | Host-provided `image_gen` through skill instructions | The project architecture delegates image creation to the host runtime. [VERIFIED: AGENTS.md] |
| Automated likeness scoring | New vision classifier or image model | Manual Tom QA criteria plus Phase 10 text-marker validation | v1.1 keeps automated visual likeness judgment out of scope. [VERIFIED: .planning/REQUIREMENTS.md] |

**Key insight:** the phase succeeds by writing durable route-local policy documents; execution code and external tooling belong to later phases. [VERIFIED: .planning/ROADMAP.md]

## Common Pitfalls

### Pitfall 1: Rights Status Appears Only In `rights.md`

**What goes wrong:** Planning, prompt, edit, or QA files omit `gated-authorized`, so downstream users treat Tom as a normal active route. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Why it happens:** Existing Xiaohei and Littlebox packs have active routes and carry fewer protected-IP warnings. [VERIFIED: ian-xiaohei-illustrations/references/routing.md]
**How to avoid:** Add a rights-status note to `index.md`, `prompt-template.md`, and `qa-checklist.md`, and mention `rights.md` as the authority. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Warning signs:** The Tom prompt template contains `assets/<article-slug>-tom/` while missing `gated-authorized`. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Pitfall 2: Tom Becomes a Passive Mascot

**What goes wrong:** Tom stands beside a diagram while the support objects carry the concept. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Why it happens:** Article-illustration prompts can over-focus on diagram structure and under-specify character action. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md]
**How to avoid:** Require `Tom state` and `Tom action` in shot lists, then repeat a participation test in prompt and QA files. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Warning signs:** The prompt says "Tom appears" rather than "Tom pulls / catches / repairs / guards / stamps". [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Pitfall 3: Protected IP Turns Into Source Recreation

**What goes wrong:** The output resembles a show still, title card, logo-bearing frame, or broader cast scene. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Why it happens:** Prompting a recognizable character without article-metaphor constraints can pull the model toward familiar franchise imagery. [ASSUMED]
**How to avoid:** State original article-illustration scene, solo Tom, one core idea, no logos, no title cards, no source-frame recreation, no default Jerry usage, and no broad cast expansion in the prompt and QA files. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Warning signs:** Prompt text includes "Tom and Jerry scene" without a concrete article metaphor and Tom action. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Pitfall 4: Phase Scope Bleeds Into Later Work

**What goes wrong:** The plan edits `SKILL.md`, public README/examples, release checklist, or validator checks while building the Tom pack. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Why it happens:** Tom route behavior spans multiple phases. [VERIFIED: .planning/ROADMAP.md]
**How to avoid:** Phase 7 writes only Tom reference-pack content and stable validation markers. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
**Warning signs:** A Phase 7 task mentions alias routing, omitted-IP default behavior, three-IP groups, public docs, or new Node checks. [VERIFIED: .planning/ROADMAP.md]

## Code Examples

Verified patterns from repo sources:

### Tom Planning Output Format

```text
1. Placement: [where it appears]
   Core idea: [one sentence]
   Structure type: [Workflow / system local view / before-after / character state / concept metaphor / method layers / map route / mini comic]
   Tom state: [focused / startled / guarding / chasing / repairing / carrying / sorting]
   Tom action: [physical cognitive action]
   Supporting objects: [3-5 props]
   Visible labels: [short labels in the user's language]
   Output path: assets/<article-slug>-tom/
   Rights-status note: gated-authorized protected-character route; see rights.md.
```

Source pattern: Littlebox planning fields plus Phase 7 Tom field contract. [VERIFIED: ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Tom Edit Prompt: Stronger Participation

```text
Regenerate the image with the same core idea, aspect ratio, sparse article-illustration style, visible labels, and supporting objects, but make Tom perform the central cognitive action. Tom should pull, catch, guard, repair, bridge, sort, operate, or stamp the idea through visible physical action. Preserve the route-status boundary: Tom is a gated-authorized protected-character route, and the scene must stay original article illustration rather than source-frame recreation.
```

Source pattern: Xiaohei and Littlebox active-character edit prompts plus Phase 7 rights-status requirement. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md; ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

### Tom QA Marker Block

```markdown
## Pass Criteria

- Image is 16:9 horizontal.
- Tom is recognizable through simplified grey/blue-grey cat body, white muzzle and belly areas, expressive ears, tail, paws, and Tom-like silhouette.
- Tom performs the core cognitive action.
- Scene is an original article metaphor.
- Rights-status note is present: `gated-authorized`.

## Fail Signals

- Generic cat.
- Passive Tom placement.
- Source-frame recreation.
- Show logos or title cards.
- Default Jerry usage.
- Broad cast expansion.
- Excessive visible text.
- Route leakage or broad availability claim.
```

Source pattern: existing QA structure plus Phase 7 Tom QA contract. [VERIFIED: ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md; ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md; .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-only root references | Route-isolated canonical packs under `references/ips/<route>/` | v1.0 foundation before v1.1 [VERIFIED: .planning/PROJECT.md] | Tom should follow the canonical pack layout already used by Xiaohei and Littlebox. [VERIFIED: repo inspection] |
| Active-route IP docs | Protected-character route with `gated-authorized` status | Phase 6 completed 2026-06-12 [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md] | Tom references must include rights-status behavior and leakage failure language. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Validator requiring only Tom `rights.md` existence | Future validator requiring full Tom canonical pack markers | Phase 10 planned [VERIFIED: .planning/ROADMAP.md] | Phase 7 should include stable text markers for later checks. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |

**Deprecated/outdated:**
- Root-only reference placement is superseded by route-local canonical packs for multi-IP behavior. [VERIFIED: ian-xiaohei-illustrations/references/routing.md; scripts/validate-skill-package.mjs]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Prompting a recognizable character without article-metaphor constraints can pull the model toward familiar franchise imagery. | Common Pitfalls | Planner may underweight source-recreation risk in prompt wording. |

## Open Questions

1. **Exact Tom visual-marker wording**
   - What we know: Phase 7 locked simplified cues: grey/blue-grey cat body, white muzzle and belly areas, expressive ears, tail, paws, and Tom-like silhouette. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md]
   - What's unclear: The repo has no generated Tom calibration assets for visual comparison. [VERIFIED: find/asset scan; .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md]
   - Recommendation: Use textual markers only and leave rendered sample approval to the public-sample gate. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md]

2. **Future validator marker names**
   - What we know: Phase 10 owns full Tom canonical-pack marker checks. [VERIFIED: .planning/ROADMAP.md]
   - What's unclear: Exact Phase 10 check IDs are undecided. [VERIFIED: scripts/validate-skill-package.mjs]
   - Recommendation: Use literal markers from locked requirements: `gated-authorized`, `assets/<article-slug>-tom/`, `generic cats`, `passive Tom placement`, `source-frame recreation`, `show logos`, `title cards`, `default Jerry usage`, `broad cast expansion`, `route leakage`. [VERIFIED: .planning/REQUIREMENTS.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Existing validator/test commands | Yes [VERIFIED: command `node --version`] | v24.13.0 [VERIFIED: command `node --version`] | None needed |
| Git | Commit research and later docs | Yes [VERIFIED: command `git --version`] | 2.50.1 [VERIFIED: command `git --version`] | None needed |
| npm | Future package/registry checks | Yes [VERIFIED: command `npm --version`] | 11.6.2 [VERIFIED: command `npm --version`] | Phase 7 avoids package installs |
| Graph context | Optional GSD semantic query | Absent [VERIFIED: `ls .planning/graphs/graph.json`] | N/A | File-level research used |

**Missing dependencies with no fallback:** none for Phase 7 research and docs work. [VERIFIED: environment probes]

**Missing dependencies with fallback:**
- Graph context is absent; direct file inspection supplies the needed architecture evidence. [VERIFIED: command result]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | The phase edits static Markdown reference files. [VERIFIED: .planning/PROJECT.md] |
| V3 Session Management | no | The repo has no app runtime or sessions. [VERIFIED: AGENTS.md] |
| V4 Access Control | yes | Preserve Tom `gated-authorized` route status and public-sample gate language. [VERIFIED: ian-xiaohei-illustrations/references/ips/tom/rights.md] |
| V5 Input Validation | yes | Keep prompt and QA constraints explicit for route leakage, source-frame recreation, and excessive text. [VERIFIED: .planning/REQUIREMENTS.md] |
| V6 Cryptography | no | The phase has no secrets, credentials, or cryptographic operations. [VERIFIED: repo inspection] |

### Known Threat Patterns for Documentation-Driven Protected-IP Routes

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route leakage through broad availability wording | Information Disclosure | Repeat `gated-authorized` and rights-source references in Tom planning, prompt, edit, and QA surfaces. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md] |
| Public sample policy drift | Information Disclosure | Keep public rendered Tom samples governed by `rights.md` and release checklist approval. [VERIFIED: ian-xiaohei-illustrations/references/ips/tom/rights.md; .planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md] |
| Cross-IP contamination | Tampering | Keep Tom identity and Warner rights text inside `references/ips/tom/`. [VERIFIED: ian-xiaohei-illustrations/references/routing.md; .planning/REQUIREMENTS.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/07-tom-canonical-pack/07-CONTEXT.md` - locked Phase 7 decisions, scope fence, canonical references, and Tom specifics. [VERIFIED: file read]
- `.planning/REQUIREMENTS.md` - TOMP-01 through TOMP-05 and out-of-scope boundaries. [VERIFIED: file read]
- `.planning/ROADMAP.md` - Phase 7 goal and Phase 8/9/10 boundaries. [VERIFIED: file read]
- `.planning/PROJECT.md` - project constraints, current milestone, rights boundary, and package shape. [VERIFIED: file read]
- `.planning/phases/06-tom-rights-and-route-contract/06-VERIFICATION.md` - verified Phase 6 Tom rights and route contract. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/routing.md` - Tom route row and required-reference set. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` - Tom rights record and `gated-authorized` authority. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/xiaohei/*` - canonical pack and active-character patterns. [VERIFIED: file read]
- `ian-xiaohei-illustrations/references/ips/littlebox/*` - route-isolated pack, planning, language, prompt, and QA patterns. [VERIFIED: file read]
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` - current validator shape and Phase 10 hardening surface. [VERIFIED: file read]

### Secondary (MEDIUM confidence)

- `.planning/codebase/TESTING.md` and `.planning/codebase/STRUCTURE.md` - generated codebase maps; useful for existing conventions while direct file reads remain the authority. [VERIFIED: file read]

### Tertiary (LOW confidence)

- No web search sources were used because the user scoped research to implementation patterns inside this repo and Phase 6 source context. [VERIFIED: user request]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - the phase uses existing Markdown references and Node built-ins, verified locally. [VERIFIED: repo inspection; command results]
- Architecture: HIGH - `routing.md`, existing IP packs, and Phase 7 context agree on the route-local pack structure. [VERIFIED: file reads]
- Pitfalls: MEDIUM - route leakage and scope bleed are directly verified; image-model drift behavior includes one assumption. [VERIFIED: .planning/phases/07-tom-canonical-pack/07-CONTEXT.md; ASSUMED]

**Research date:** 2026-06-13 [VERIFIED: current_date]
**Valid until:** 2026-07-13 for repo-internal planning unless Phase 8/9/10 alter the Tom route contract. [ASSUMED]
