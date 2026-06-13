# Phase 12: Ferris Canonical Pack - Pattern Map

**Mapped:** 2026-06-13
**Files analyzed:** 6
**Analogs found:** 6 / 6

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `ian-xiaohei-illustrations/references/ips/ferris/index.md` | config | transform | `ian-xiaohei-illustrations/references/ips/tom/index.md` | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` | config | transform | `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` | model | transform | `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` | utility | transform | `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` | utility | transform | `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` | exact |
| `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` | test | transform | `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` | exact |

## Pattern Assignments

### `ian-xiaohei-illustrations/references/ips/ferris/index.md` (config, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/index.md`

**Navigation and route contract pattern** (lines 1-17):

```markdown
# Tom IP Pack

Canonical Tom references for the selectable `tom` route.

Tom route status: `gated-authorized`.
Tom output path: `assets/<article-slug>-tom/`.
Tom rights authority: `rights.md`.
Tom protected-character route leakage gate.

## Route Contract

- Route id: `tom`.
- Route status: `gated-authorized`.
- Rights-status note: Tom is a protected-character route. `rights.md` is the source for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes.
- Output path: `assets/<article-slug>-tom/`.
- Route boundary: Tom references stay route-local and preserve protected-character wording through planning, prompt, edit, QA, and delivery surfaces.
```

**Reuse for Ferris:** keep the title, intro, first-screen marker block, `## Route Contract`, `## References`, failure category list, and `## Scope Boundary`. Replace Tom route markers with:

```markdown
Ferris route status: `source-reviewed`.
Ferris output path: `assets/<article-slug>-ferris/`.
Ferris source/trademark authority: `source.md`.
```

**References list pattern** (lines 18-26): list every route-local file with one operational purpose. Ferris must list all seven files: `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.

**Shared failure category pattern** (lines 28-39): keep one stable validator-friendly list. Ferris list must use these exact names:

```markdown
- generic-crab drift
- passive Ferris placement
- Rust-logo misuse
- official-affiliation cues
- over-detailed mascot rendering
- excessive text
- source-asset tracing
- route leakage
```

**Scope boundary pattern** (lines 41-43): keep Phase 12 route-local. State that controller loading, public docs, metadata, validator hardening, release checklist expansion, and public rendered Ferris examples are owned by later phases.

---

### `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` (config, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/style-dna.md`

**Route note and core style pattern** (lines 1-10):

```markdown
# Tom Style DNA

Tom route status: `gated-authorized`.

Rights-status note: Tom is a protected-character route. Use `rights.md` as the authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and any status change.

## Core Style

Tom images are sparse 16:9 article illustrations where Tom performs one cognitive action inside an original explanatory metaphor.
```

**Reuse for Ferris:** use the same first-screen route note, but point to `source.md` and use `source-reviewed`. Core style should say Ferris performs one cognitive action inside an original Rust-themed article metaphor.

**Must-have pattern** (lines 11-20): preserve 16:9, clean white/near-white background, one core idea, active character, rough hand-drawn linework, sparse labels, sparse supporting objects, and route recognizability.

**Recognition cues pattern** (lines 22-35): replace Tom cues with Ferris cues from Phase 12:

```markdown
- compact orange or rust-red crab body
- broad crab shell silhouette
- two visible claws
- small legs
- two eyes or eyestalk eyes
- focused, guarding, sorting, type-checking, borrowing, compiling, inspecting, untangling, bracing, stamping, or releasing state
```

Use Littlebox's strict marker precedent for identity thresholds: `littlebox-ip.md` lines 84-96 require multiple markers and final-image required markers. Ferris should require several cues together and fail generic route-neutral crab drawings.

**Composition and veto pattern** (lines 37-64): keep the single-structure rule and sparse label placement. Replace protected-route vetoes with the exact Ferris failure block, plus dense diagrams, UI screenshots, official Rust diagrams, logo-forward compositions, and source-pose copying.

**Stable gates pattern** (lines 65-71): keep named gates. Ferris gates should be:

- Ferris identity recognizability gate.
- Ferris cognitive-action participation gate.
- Ferris source-asset tracing gate.
- Ferris generic-crab drift gate.
- Ferris trademark-boundary gate.
- Ferris route block.

---

### `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` (model, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md`

**Identity structure pattern** (lines 7-27):

```markdown
## Core Identity

Tom is Tom from Tom and Jerry under a protected-character route.

Phase 7 defines a solo Tom article-illustration variant: Tom appears alone as the active operator of an article concept. The image uses original explanatory scenes and fresh metaphors for article-body illustration.

## Recognition Rules

Preserve recognizable Tom cues in a simplified article-illustration style:
```

**Reuse for Ferris:** keep `## Core Identity` and `## Recognition Rules`. Define Ferris as the selected route's crab mascot character adapted for sparse article illustrations. The exact source status remains in `source.md`.

**Action responsibility pattern** (lines 28-49): keep the rule that the character performs the central cognitive action and the removable-character failure test. Replace Tom actions with Ferris actions:

```markdown
- clamp a decision gate
- sort ownership tags
- guard a compiler gate
- borrow and return a rope
- stamp a type-check result
- carry a crate stack
- bridge a dependency gap
- untangle dependency knots
- lock a release
- inspect a safety net
- reroute a risky path
- balance competing constraints
```

**Route boundary pattern** (lines 50-55): keep route-local isolation. Ferris supporting objects should be low-tech Rust-themed article metaphors: ownership tags, borrow ropes, lifetime clocks, compiler gates, type-check stamps, safety nets, unsafe warning flags, trait stamps, dependency knots, crate stacks, release locks, and review gates.

**Failure modes pattern** (lines 57-75): include the exact eight shared failure names plus removable Ferris, seafood icon drift, beach-crab drift, source asset pose copying, official logo arrangements, code screenshots, IDE/UI scenes, and Rust-logo-forward scenes.

**Stable gates pattern** (lines 76-82): preserve named bullet gate style. Ferris stable gates must mention recognizability, active cognitive action, source-asset tracing, generic-crab drift, trademark boundary, and route isolation.

---

### `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` (utility, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md`

**Opening gate pattern** (lines 1-9):

```markdown
# Tom Composition Patterns

Tom route status: `gated-authorized`.

Rights-status note: Tom is a protected-character route. Use `rights.md` as the authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and any status change.

Use one composition family per image. Keep one core idea, one physical metaphor, and one active Tom action.

Tom active-composition gate: Tom performs the cognitive action that explains the article concept. Removing Tom breaks the visual metaphor.
```

**Reuse for Ferris:** keep one family, one core idea, one physical metaphor, one active Ferris action. Replace rights note with source/trademark note.

**Composition families pattern** (lines 11-59): reuse all eight families and their heading names:

- `### Workflow`
- `### System Local View`
- `### Before/After`
- `### Character State`
- `### Concept Metaphor`
- `### Method Layers`
- `### Map Route`
- `### Mini Comic`

Xiaohei's baseline at `xiaohei/composition-patterns.md` lines 3-53 confirms the same eight-family article-illustration taxonomy. Keep these English names for route consistency.

**Metaphor invention pattern** (lines 61-80): keep three steps: abstract idea to physical action, one or two low-tech objects, Ferris performs the action. Replace examples with Rust-themed article examples:

- weak proof -> Ferris clamps a compiler gate while sorting evidence slips.
- unsafe shortcut -> Ferris plants a warning flag beside a rope bridge.
- tangled dependency -> Ferris untangles a dependency knot around crate stacks.
- trust handoff -> Ferris stamps a type-check slip before release lock opens.
- hidden cost -> Ferris inspects a lifetime clock behind a review gate.

**Object pool pattern** (lines 81-103): use Ferris object pool:

```markdown
- ownership tags
- borrow ropes
- lifetime clocks
- compiler gates
- type-check stamps
- safety nets
- unsafe warning flags
- trait stamps
- dependency knots
- crate stacks
- release locks
- review gates
```

**Action pool pattern** (lines 104-122): keep action serves core idea and pose points toward the action. Ferris action verbs are: clamp, sort, guard, borrow, return, compile, type-check, stamp, carry, bridge, untangle, lock, inspect, reroute, balance, and release.

**Visible labels and route gates pattern** (lines 124-147): keep sparse labels, 2-6 labels, nouns or short verb phrases, labels away from the character face/claws/silhouette. Replace protected-route gates with Ferris source/trademark gates and the exact Ferris route block.

**Anti-repeat pattern** (lines 149-153): vary Ferris action and low-tech object before changing identity cues. Keep Ferris recognizable and active.

---

### `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` (utility, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md`

**Language and output path pattern** (lines 1-10):

```markdown
# Tom Prompt Template

Use this file after selecting the `tom` route. Planning and delivery notes follow the user's language. Image-generation prompts stay English for model consistency. Visible labels are quoted exactly in the user's language.

Output path: `assets/<article-slug>-tom/`.

Tom route status: `gated-authorized`.

Rights-status note: Tom is a protected-character route. Use `rights.md` as the authority for authorization scope, distribution boundary, public-sample policy, reviewer fields, and any status change.
```

**Reuse for Ferris:** keep language rule and output path reminder. Replace with `assets/<article-slug>-ferris/`, `source-reviewed`, and `source.md`.

**Planning output pattern** (lines 11-30): keep fenced `text` block and field indentation. Ferris planning fields are locked:

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Ferris state: [focused / guarding / sorting / type-checking / borrowing / compiling / inspecting / untangling / bracing / stamping / releasing]
   Ferris action: [the physical cognitive action Ferris performs]
   Supporting objects: [1-2 Rust-themed low-tech objects]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's language]
   Output path: assets/<article-slug>-ferris/
   Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route; check `source.md` for source context and trademark boundary.
```

**Single image generation pattern** (lines 31-67): keep this heading and fenced prompt shape. Required Ferris fields:

- Route status note.
- Source/trademark note.
- Scene.
- Visual language.
- Recurring IP.
- Structure type.
- Ferris state.
- Ferris action.
- Supporting objects.
- Composition.
- Rust-themed article metaphor.
- Visible labels.
- Save reminder.
- Constraints.
- Ferris route block.

**Edit prompt pattern** (lines 69-133): keep named edit sections and marker lines. Ferris needs six named edit gates:

- `### Stronger Ferris Participation`
- `### Off-Model Identity Repair`
- `### Trademark-Boundary Repair`
- `### Title Removal`
- `### Text Reduction`
- `### Preserve Unaffected Content`

Mirror Tom's unaffected-content preservation wording from lines 121-133, replacing Tom identity cues with Ferris action, crab identity cues, source/trademark boundary, Rust-logo misuse, official-affiliation cues, source-asset tracing, and route leakage.

---

### `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` (test, transform)

**Analog:** `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md`

**Opening route note pattern** (lines 1-10):

```markdown
# Tom QA Checklist

Use this gate before delivering, regenerating, or editing a Tom-route output.

Route status note: Tom is a `gated-authorized` protected-character route. Rights-sensitive delivery points to `rights.md` for authorization scope, distribution boundary, public-sample policy, reviewer fields, and status changes. Broad availability wording is route leakage.

Output path reminder: accepted Tom images save under `assets/<article-slug>-tom/` with ordered English slug filenames.

Tom QA protected-route gate.
Tom QA rights-status note gate.
```

**Reuse for Ferris:** keep route gate + output reminder. Use source/trademark wording and `assets/<article-slug>-ferris/`.

**Pass criteria pattern** (lines 12-23): Ferris pass criteria must cover:

- 16:9 horizontal article illustration.
- One core idea.
- Sparse labels copied in the user's language.
- Ferris recognizability through compact orange/rust-red crab body, broad shell, two claws, small legs, and eyes or eyestalk eyes.
- Ferris performs the active cognitive action.
- Original Rust-themed article metaphor.
- Supporting objects are article-metaphor props.
- Composition stays sparse and route-local.
- Source/trademark note is present in planning, generation, edit, and delivery context.
- Delivery path uses `assets/<article-slug>-ferris/`.

**Reject/check pattern** (lines 25-50): keep `Reject or repair any output with:` followed by the exact shared failure categories. Add definition lines for generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, source-asset tracing, and route leakage.

**Failure signals pattern** (lines 52-63): preserve the list shape. Ferris signals include passive/removable/tiny/decorative Ferris, generic crab identity, logo-forward or official-affiliation cues, source-asset tracing, excessive text, formal diagrams, copied prior composition, and missing source/trademark note or output path.

**Iteration moves pattern** (lines 64-76): map directly to the six edit gates in `prompt-template.md`. Include source-asset tracing repair and trademark-boundary repair exactly as Phase 12 requires:

- invent a new low-tech article metaphor,
- change Ferris pose/action,
- remove asset-sheet or source-pose resemblance,
- remove or rewrite Rust-logo-forward visuals, official/endorsed/affiliated cues, and broad release language,
- preserve successful Ferris identity, composition, labels, aspect ratio, and article metaphor.

**Delivery judgment pattern** (lines 78-80): accepted Ferris images keep Ferris as the action subject, preserve Ferris cues, explain one article idea through an original Rust-themed metaphor, carry the source/trademark note, point to `source.md`, and report `assets/<article-slug>-ferris/`.

## Shared Patterns

### Exact Recurring Markers

**Source:** `.planning/phases/12-ferris-canonical-pack/12-RESEARCH.md`
**Apply to:** All six Ferris operational files

Use these exact strings where practical so Phase 15 validator hardening can grep stable markers:

```markdown
Ferris route status: `source-reviewed`.
Ferris output path: `assets/<article-slug>-ferris/`.
Ferris source/trademark authority: `source.md`.
Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route. Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.
Public rendered Ferris samples remain gated by `RELEASE_CHECKLIST.md`.
Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route.
Save accepted Ferris output under `assets/<article-slug>-ferris/` with an ordered English slug filename such as `01-topic-name.png`.
```

### Source and Trademark Authority

**Source:** `ian-xiaohei-illustrations/references/ips/ferris/source.md` lines 5-10, 24-29, 55-65
**Apply to:** All six Ferris operational files

```markdown
- Character route: Ferris.
- Source context: Ferris the Rustacean.
- Route status: `source-reviewed`.
- Source authority for this package: this Phase 11 record at `references/ips/ferris/source.md`.
```

Reuse rule: operational files point to `source.md` instead of repeating the full source record. Public sample wording points to `RELEASE_CHECKLIST.md`.

### Active Character Rule

**Source:** `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` lines 28-49 and `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` lines 7-9
**Apply to:** `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`

```markdown
Tom must perform the central cognitive action in every Tom-route illustration.
Tom cognitive-action participation gate: the visual metaphor depends on Tom's action.
```

Ferris rewrite: Ferris must perform the central cognitive action in every Ferris-route illustration. Removing Ferris breaks the metaphor.

### Label and Language Rule

**Source:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 1-3, 58-64 and `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` lines 124-130
**Apply to:** `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`

```markdown
Image-generation prompts stay English for model consistency. Visible labels are quoted exactly in the user's language.
Visible handwritten labels, copied exactly in the user's language: [quoted labels].
```

### Edit Preservation Rule

**Source:** `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` lines 121-133 and `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` lines 64-76
**Apply to:** `prompt-template.md`, `qa-checklist.md`

```markdown
Edit only the named failure: [participation / identity / title / text density / label typo]. Preserve all unaffected content exactly: Tom's successful action, Tom identity cues, existing composition, visible labels that are already correct, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.
```

Ferris rewrite must preserve successful Ferris action, Ferris identity cues, existing composition, correct labels, supporting objects, paths, line style, color accents, 16:9 aspect ratio, and image quality.

## Required Headings by File

| File | Required Headings |
|------|-------------------|
| `index.md` | `# Ferris IP Pack`, `## Route Contract`, `## References`, `## Ferris Route Failure Categories`, `## Scope Boundary` |
| `style-dna.md` | `# Ferris Style DNA`, `## Core Style`, `## Must Have`, `## Ferris Recognition Cues`, `## Composition`, `## Ferris Visual Vetoes`, `## Stable Gates` |
| `ferris-ip.md` | `# Ferris IP`, `## Core Identity`, `## Recognition Rules`, `## Cognitive Action Responsibility`, `## Route Boundary`, `## Failure Modes`, `## Stable Gates` |
| `composition-patterns.md` | `# Ferris Composition Patterns`, `## Composition Families`, `## Metaphor Invention Rule`, `## Supporting Objects`, `## Ferris Action Pool`, `## Visible Labels`, `## Source/Trademark Gates`, `## Anti-Repeat Rule` |
| `prompt-template.md` | `# Ferris Prompt Template`, `## Planning Output Format`, `## Single Image Generation`, `## Editing Prompts` |
| `qa-checklist.md` | `# Ferris QA Checklist`, `## Pass Criteria`, `## Source/Trademark Checks`, `## Failure Signals`, `## Iteration Moves`, `## Delivery Judgment` |

## Phase 12 Scope Boundary

Phase 12 creates or updates only:

- `ian-xiaohei-illustrations/references/ips/ferris/index.md`
- `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md`
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md`
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md`
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md`

Phase 12 preserves:

- `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- `ian-xiaohei-illustrations/references/routing.md`
- `ian-xiaohei-illustrations/SKILL.md`
- `README.md`
- `examples/prompts.md`
- `ian-xiaohei-illustrations/agents/openai.yaml`
- `RELEASE_CHECKLIST.md`
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`

Downstream ownership:

- Phase 13: route selection, `required_references`, `SKILL.md` loading, mixed-IP grouping, runtime output handling.
- Phase 14: README, examples, metadata, NOTICE consistency, release checklist expansion.
- Phase 15: validator and Node test hardening for Ferris pack markers.

## No Analog Found

All planned Ferris files have exact Tom route-pack analogs.

## Metadata

**Analog search scope:** `ian-xiaohei-illustrations/references/ips/{tom,xiaohei,littlebox,ferris}/`, Phase 12 context and research files
**Files scanned:** 11
**Pattern extraction date:** 2026-06-13
