# Phase 45: Cai Xukun Skill Controller Integration - Research

**Researched:** 2026-06-18
**Domain:** Documentation-first Codex Skill runtime controller integration
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Phase 45 owns runtime controller behavior in `skills/visual-ip-illustrations/SKILL.md`.
- Phase 45 should preserve all existing route behavior for omitted-IP Xiaohei and explicit Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- README variants, `examples/prompts.md`, `NOTICE.md`, release checklist, public docs, and broad release surfaces stay deferred to Phase 46.
- Validator hardening, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final release evidence stay deferred to Phase 47.
- Add Cai Xukun to `SKILL.md` frontmatter description, Visual IP Routes, Reference Loading, Select the Visual IP Route, shot-list fields, generation context, edit routing, QA dispatch, save paths, and delivery reporting.
- Cai Xukun route selection must use aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`; route id `caixukun`; display name `Cai Xukun`; route status `gated-public-figure`; output path `assets/<article-slug>-caixukun/`.
- Cai Xukun progressive loading must point to the Phase 44 seven-file pack: `index.md`, `source.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
- Cai Xukun runtime wording must carry uploaded-image identity, source-image context, public-figure label sanitization, likeness-boundary wording, public sample review boundary, route isolation, and source pointer `references/ips/caixukun/source.md`.
- Mixed-IP workflows must add Cai Xukun as a separate route group alongside Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- Each mixed-IP group must load only its own required references, use its own prompt template, QA checklist, edit gates, route note, output suffix, and output directory.
- Cai Xukun mixed-IP groups must write to `assets/<article-slug>-caixukun/` and include route status `gated-public-figure`, source authority, uploaded-image identity status, public-figure likeness boundary status, source-image context status, and public sample review boundary when relevant.
- Cai Xukun delivery reports must include selected visual IP, image count, purpose per image, saved path under `assets/<article-slug>-caixukun/`, likeness-boundary note, uploaded-image identity status, source-image context status, route isolation status, public sample review boundary when relevant, and route stability notes.
- The route-leakage delivery guard must include Cai Xukun and require the Cai Xukun block to preserve `gated-public-figure`, `references/ips/caixukun/source.md`, uploaded-image identity note, route-local QA, public-figure likeness boundary, source-image context boundary, public sample review boundary, and `assets/<article-slug>-caixukun/`.
- Phase 45 satisfies the skill-instruction part of RUN-04 by presenting Cai Xukun as a selectable gated route in `SKILL.md` while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias.
- Phase 46 owns the agent-metadata part of RUN-04 by updating `skills/visual-ip-illustrations/agents/openai.yaml` with Cai Xukun in the public/release metadata pass.

### the agent's Discretion
- The planner may choose the smallest surgical edit sequence for `SKILL.md`, as long as the exact controller surfaces listed above are covered and existing route wording stays stable.
- The planner may organize verification as grep groups rather than one large command, as long as every RUN-01 through RUN-04 behavior has explicit local evidence.

### Deferred Ideas (OUT OF SCOPE)
- Phase 46 owns README variants, `examples/prompts.md`, `NOTICE.md`, release checklist, public docs, public release surfaces, and `skills/visual-ip-illustrations/agents/openai.yaml`.
- Phase 47 owns validator hardening, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final release evidence.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| RUN-01 | User can invoke Cai Xukun through the skill controller, route selection rules, progressive reference loading, planning fields, generation dispatch, edit routing, QA dispatch, and delivery reports. | `SKILL.md` controller surfaces identified at frontmatter, Visual IP Routes, Reference Loading, Select Route, Shot List, Generate, QA, Save, and Output Contract. [VERIFIED: codebase grep] |
| RUN-02 | User can request mixed-IP output where Cai Xukun and all existing routes create separate route groups with their own references, prompts, QA rules, and output paths. | Existing mixed-IP sections list every route except Cai Xukun and should gain a Cai Xukun group using `routing.md` and the Phase 44 pack. [VERIFIED: codebase grep] |
| RUN-03 | User receives Cai Xukun delivery reports with selected visual IP, image count, purpose per image, saved path under `assets/<article-slug>-caixukun/`, likeness-boundary note, and route stability notes. | `routing.md` and Cai Xukun `prompt-template.md` already define delivery fields; `SKILL.md` Output Contract should mirror them. [VERIFIED: codebase grep] |
| RUN-04 | Agent metadata and skill instructions present Cai Xukun as a selectable gated route while preserving Visual IP Illustrations identity and the legacy `$ian-xiaohei-illustrations` alias. | Phase 45 should update `SKILL.md` instruction text; Phase 46 owns `agents/openai.yaml` metadata per roadmap boundary. [VERIFIED: ROADMAP.md + codebase grep] |
</phase_requirements>

## Summary

Phase 45 is an internal skill-controller wiring phase. The route/source contract and seven-file Cai Xukun pack already exist from Phases 43 and 44, and the remaining work is to make `skills/visual-ip-illustrations/SKILL.md` invoke those references consistently at runtime. [VERIFIED: Phase 43/44 verification files + codebase grep]

The standard pattern is already present for Tom, Ferris, Seal, OpenClaw, and Go Gopher: each route is added to frontmatter, route overview, reference loading, route selection, shot-list fields, generation context, mixed-IP groups, QA dispatch, save paths, Output Contract, and route-leakage delivery guard. Cai Xukun should be added through that same pattern with route-local public-figure and uploaded-image guardrails. [VERIFIED: codebase grep]

**Primary recommendation:** Implement one surgical `SKILL.md` update that mirrors the existing explicit-route controller pattern and keeps `agents/openai.yaml` for Phase 46 unless a planner-level RUN-04 gate requires a minimal note. [VERIFIED: ROADMAP.md + codebase grep]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Route selection | Codex Skill controller | Route reference pack | `SKILL.md` reads `references/routing.md` first and chooses the route before loading route-local references. [VERIFIED: codebase grep] |
| Progressive reference loading | Codex Skill controller | Markdown reference files | `SKILL.md` owns when to load references; `references/ips/caixukun/` owns the detailed route-local rules. [VERIFIED: codebase grep] |
| Cai Xukun planning fields | Codex Skill controller | Cai Xukun prompt template | `SKILL.md` outputs shot-list fields; `prompt-template.md` defines the canonical Cai Xukun field set. [VERIFIED: codebase grep] |
| Generation and edit dispatch | Codex Skill controller | Host image generation runtime | `SKILL.md` instructs one `image_gen` call per image and routes edits through route-local prompt templates. [VERIFIED: codebase grep] |
| QA and delivery guard | Codex Skill controller | Cai Xukun QA checklist | `SKILL.md` selects the QA checklist and delivery fields; `qa-checklist.md` defines pass/fail and repair gates. [VERIFIED: codebase grep] |
| Public metadata | Agent metadata/release docs | Skill controller | `agents/openai.yaml` presents public metadata and is assigned to Phase 46 by roadmap boundary. [VERIFIED: ROADMAP.md + codebase grep] |

## Project Constraints (from AGENTS.md)

- User-facing replies must begin with `爸爸` and use Simplified Chinese. [VERIFIED: AGENTS.md provided in prompt]
- Repository artifacts should be written in English. [VERIFIED: AGENTS.md provided in prompt]
- Code, code comments, commit messages, and PR titles/descriptions should be English. [VERIFIED: AGENTS.md provided in prompt]
- Keep edits surgical and traceable to the request. [VERIFIED: AGENTS.md provided in prompt]
- Before repo edits, use a GSD workflow unless the user explicitly asks to bypass it. [VERIFIED: AGENTS.md provided in prompt]
- The project is documentation-driven and should preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml`. [VERIFIED: AGENTS.md provided in prompt]
- Existing `$ian-xiaohei-illustrations` behavior and Xiaohei prompts must keep working. [VERIFIED: AGENTS.md provided in prompt]
- IP rules remain separately readable, testable, and routable. [VERIFIED: AGENTS.md provided in prompt]

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Markdown Codex Skill entrypoint | repository-local | Runtime controller instructions in `skills/visual-ip-illustrations/SKILL.md` | The project is a documentation-first Codex Skill package, and `SKILL.md` is the central runtime controller. [VERIFIED: codebase grep] |
| Markdown route-local references | repository-local | Route-specific source, prompt, composition, and QA contracts | Existing explicit routes keep detailed rules in `references/ips/<route>/` and keep `SKILL.md` as the controller. [VERIFIED: codebase grep] |
| YAML agent metadata | repository-local | Public skill display metadata | `agents/openai.yaml` exposes display name, short description, default prompt, and implicit invocation policy; Phase 46 owns this surface. [VERIFIED: codebase grep + ROADMAP.md] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `rg` | 15.1.0 | Fast verification grep | Use for Phase 45 deterministic route-surface checks. [VERIFIED: local command] |
| Git | 2.50.1 | Diff hygiene | Use `git diff --check` on created artifacts and later on `SKILL.md`. [VERIFIED: local command] |
| Node.js | v24.13.0 | Existing validator/test runtime for later phases | Phase 47 owns validator and Node test hardening. [VERIFIED: local command + ROADMAP.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Editing only `SKILL.md` | Edit `agents/openai.yaml` in Phase 45 | Agent metadata is a Phase 46 release surface in ROADMAP, so Phase 45 should keep metadata changes deferred unless planning finds a direct RUN-04 blocker. [VERIFIED: ROADMAP.md] |
| Manual grep verification | Full validator/test implementation | Phase 47 owns validator and Node tests; Phase 45 should still provide deterministic grep and diff checks. [VERIFIED: ROADMAP.md] |

**Installation:** No external package installation is required for Phase 45. [VERIFIED: codebase grep]

## Architecture Patterns

### System Architecture Diagram

```text
User prompt/article
  -> SKILL.md route selection
     -> references/routing.md aliases + output suffix
        -> selected route required_references
           -> Cai Xukun pack: source + style + identity + composition + prompt + QA
              -> shot list or image prompt/edit prompt
                 -> host image_gen one image at a time
                    -> route-local QA checklist
                       -> output path assets/<article-slug>-caixukun/
                          -> delivery report + route-leakage delivery guard
```

All arrows represent runtime instruction flow inside the Codex Skill package. [VERIFIED: codebase grep]

### Recommended Project Structure

```text
skills/visual-ip-illustrations/
├── SKILL.md                         # Phase 45 runtime controller integration
├── agents/openai.yaml               # Phase 46 public metadata surface
└── references/
    ├── routing.md                   # verified route metadata
    └── ips/caixukun/
        ├── index.md                 # pack navigation
        ├── source.md                # uploaded authority and boundary
        ├── style-dna.md             # route style
        ├── caixukun-ip.md           # route identity
        ├── composition-patterns.md  # route composition rules
        ├── prompt-template.md       # planning, generation, edit prompts
        └── qa-checklist.md          # QA and delivery judgment
```

### Pattern 1: Explicit Route Controller Wording

**What:** Each explicit route receives a short operational summary in `SKILL.md` while detailed rules remain in route-local references. [VERIFIED: codebase grep]

**When to use:** Use this for Cai Xukun in every existing explicit-route controller surface. [VERIFIED: codebase grep]

**Example:**

```markdown
Cai Xukun loads only Cai Xukun `required_references`, uses
`references/ips/caixukun/prompt-template.md` plus
`references/ips/caixukun/composition-patterns.md`, then checks output with
`references/ips/caixukun/qa-checklist.md`.
```

### Pattern 2: Mixed-IP Route Isolation

**What:** Mixed-IP requests share one core idea, then split into independent route groups with their own references, prompt templates, QA, output suffixes, and delivery notes. [VERIFIED: codebase grep]

**When to use:** Add Cai Xukun to both mixed-IP shot lists and mixed-IP generation/output sections. [VERIFIED: codebase grep]

**Example:**

```markdown
- Cai Xukun variant group: Cai Xukun mascot state, Cai Xukun mascot action,
  supporting objects, visible labels, `references/ips/caixukun/` QA,
  `assets/<article-slug>-caixukun/`, route status `gated-public-figure`,
  source pointer `references/ips/caixukun/source.md`, uploaded-image identity note,
  public-figure likeness boundary, source-image context, public sample review boundary,
  route isolation status
```

### Anti-Patterns to Avoid

- **Overloading `SKILL.md`:** Put only controller-level Cai Xukun guidance in `SKILL.md`; detailed route rules stay in the Cai Xukun pack. [VERIFIED: codebase map + codebase grep]
- **Changing default behavior:** Preserve omitted visual IP as Xiaohei and keep all existing explicit routes stable. [VERIFIED: REQUIREMENTS.md + routing.md]
- **Cross-route leakage:** Keep Cai Xukun uploaded-image identity, public-figure boundary, and output path out of other route packs and route groups. [VERIFIED: Phase 44 verification]
- **Publishing samples early:** Public Cai Xukun samples require release review and belong to later release surfaces. [VERIFIED: source.md + qa-checklist.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Cai Xukun route metadata | A second route table inside `SKILL.md` | `references/routing.md` | Phase 43 already verified aliases, route id, status, output suffix, and output path. [VERIFIED: Phase 43 verification] |
| Cai Xukun prompt/edit wording | Fresh prompt language in `SKILL.md` | `references/ips/caixukun/prompt-template.md` | Phase 44 already verified planning fields, one-image prompt, edit gates, output reminder, and claim sanitization. [VERIFIED: Phase 44 verification] |
| Cai Xukun QA categories | Custom QA list in `SKILL.md` | `references/ips/caixukun/qa-checklist.md` | Phase 44 already verified pass/fail categories and repair moves. [VERIFIED: Phase 44 verification] |
| Public release gate | Ad hoc sample approval wording | `source.md` and Phase 46/47 release artifacts | Source record defines sample policy; Phase 46/47 own public/release validation. [VERIFIED: source.md + ROADMAP.md] |

**Key insight:** Phase 45 should connect verified contracts instead of inventing a second Cai Xukun contract inside the controller. [VERIFIED: Phase 43/44 verification + codebase grep]

## Common Pitfalls

### Pitfall 1: Missing a Controller Surface

**What goes wrong:** Cai Xukun appears in route selection but is absent from shot-list planning, generation, QA, save paths, or delivery reports. [VERIFIED: current `SKILL.md` shape]

**Why it happens:** `SKILL.md` has repeated explicit-route sections rather than a generated table. [VERIFIED: codebase grep]

**How to avoid:** Update every route surface listed in CONTEXT.md and verify each with targeted grep. [VERIFIED: CONTEXT.md]

**Warning signs:** `rg "caixukun|Cai Xukun|蔡徐坤|cxk" SKILL.md` only finds a subset of workflow sections. [VERIFIED: local command design]

### Pitfall 2: Agent Metadata Scope Drift

**What goes wrong:** Phase 45 expands into README/examples/NOTICE/release checklist/agent metadata work. [VERIFIED: ROADMAP.md]

**Why it happens:** RUN-04 mentions agent metadata while Phase 46 also owns release surfaces. [VERIFIED: REQUIREMENTS.md + ROADMAP.md]

**How to avoid:** Phase 45 updates `SKILL.md` instruction text; Phase 46 updates `agents/openai.yaml` unless a direct Phase 45 blocker appears. [VERIFIED: CONTEXT.md]

**Warning signs:** Phase 45 diff touches README variants, examples, NOTICE, release checklist, or validator files. [VERIFIED: ROADMAP.md]

### Pitfall 3: Public-Figure Boundary Loss

**What goes wrong:** Cai Xukun output/report wording loses `gated-public-figure`, uploaded-image identity, public-figure label sanitization, source-image context, or sample review boundary. [VERIFIED: source.md + prompt-template.md + qa-checklist.md]

**Why it happens:** Controller summaries can compress route-local pack details too aggressively. [VERIFIED: codebase grep]

**How to avoid:** Mirror only required boundary markers into `SKILL.md` and keep details in route-local files. [VERIFIED: Phase 44 verification]

**Warning signs:** Delivery report omits likeness-boundary note or saved path `assets/<article-slug>-caixukun/`. [VERIFIED: REQUIREMENTS.md]

## Code Examples

### Targeted Verification Grep

```bash
rg -n "Cai Xukun|caixukun|蔡徐坤|cxk|gated-public-figure|assets/<article-slug>-caixukun|references/ips/caixukun/(index|source|style-dna|caixukun-ip|composition-patterns|prompt-template|qa-checklist)\\.md" skills/visual-ip-illustrations/SKILL.md
```

### Surface-Specific Verification

```bash
rg -n "Cai Xukun|caixukun|assets/<article-slug>-caixukun|gated-public-figure|public-figure likeness boundary|uploaded-image identity|source-image context|public sample review boundary|route isolation" skills/visual-ip-illustrations/SKILL.md
rg -n "Mixed-IP|mixed-IP|variant group|route-leakage delivery guard|Delivery|Output Contract" skills/visual-ip-illustrations/SKILL.md
git diff --check -- skills/visual-ip-illustrations/SKILL.md
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-only/root reference compatibility | Multi-route `references/ips/<route>/` packs with `routing.md` metadata | Established before Phase 45 in prior milestones [VERIFIED: codebase grep] | Cai Xukun should be added as another explicit route rather than changing default behavior. |
| Route/source contract only | Complete Cai Xukun seven-file pack | Phase 44 [VERIFIED: 44-VERIFICATION.md] | Phase 45 can wire runtime behavior against verified pack files. |
| Public metadata update together with runtime controller | Split runtime controller in Phase 45 and public/release metadata in Phase 46 | Current roadmap [VERIFIED: ROADMAP.md] | Planner should keep `agents/openai.yaml` deferred unless required by a direct gate. |

**Deprecated/outdated:**
- Root Xiaohei references remain compatibility entry points; current Xiaohei behavior reads canonical `references/ips/xiaohei/` pack files. [VERIFIED: SKILL.md + routing.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Phase 45 can pass RUN-04 without editing `agents/openai.yaml` because Phase 45 updates skill instructions and Phase 46 updates public agent metadata. | User Constraints, Common Pitfalls | Planner may need to add a small `agents/openai.yaml` edit or explicitly justify the Phase 46 split. |

## Open Questions (RESOLVED)

1. **Does RUN-04 require a Phase 45 `agents/openai.yaml` edit?**
   - What we know: ROADMAP Phase 46 owns public docs, release surfaces, and agent metadata; Phase 45 owns skill controller runtime behavior. [VERIFIED: ROADMAP.md]
   - Recommendation: Plan Phase 45 as `SKILL.md` only and add a verification note that Phase 46 owns `agents/openai.yaml`; adjust only if plan review treats RUN-04 as blocking. [VERIFIED: CONTEXT.md]
   - Resolution: RESOLVED - Phase 45 updates `SKILL.md` skill instructions only; Phase 46 updates `skills/visual-ip-illustrations/agents/openai.yaml` as the public agent metadata surface.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Git | Diff hygiene | yes | 2.50.1 | none needed |
| ripgrep | Grep verification | yes | 15.1.0 | BSD grep |
| Node.js | Later validator/tests | yes | v24.13.0 | Phase 47 owns Node usage |

**Missing dependencies with no fallback:** None found for Phase 45. [VERIFIED: local commands]

**Missing dependencies with fallback:** None found for Phase 45. [VERIFIED: local commands]

## Verification Architecture

`workflow.nyquist_validation` is explicitly `false`, so the research does not prescribe Nyquist test mapping. Phase 45 still needs deterministic local checks. [VERIFIED: .planning/config.json]

### Required Commands

| Purpose | Command |
|---------|---------|
| Route selection and aliases | `rg -n "蔡徐坤|Cai Xukun|caixukun|cxk|gated-public-figure" skills/visual-ip-illustrations/SKILL.md` |
| Reference loading | `rg -n "references/ips/caixukun/(index|source|style-dna|caixukun-ip|composition-patterns|prompt-template|qa-checklist)\\.md" skills/visual-ip-illustrations/SKILL.md` |
| Planning fields | `rg -n "Cai Xukun mascot state|Cai Xukun mascot action|Likeness boundary note|Source-image context note|Output path:.*caixukun" skills/visual-ip-illustrations/SKILL.md` |
| Generation context | `rg -n "uploaded-image identity|public-figure likeness|source-image context|public sample review boundary|assets/<article-slug>-caixukun" skills/visual-ip-illustrations/SKILL.md` |
| QA dispatch | `rg -n "references/ips/caixukun/qa-checklist\\.md|realistic-person output|generic yellow duck drift|green-background carryover|route leakage" skills/visual-ip-illustrations/SKILL.md` |
| Save path and output contract | `rg -n "assets/<article-slug>-caixukun|assets/&lt;article-slug&gt;-caixukun|Cai Xukun block|selected IP.*Cai Xukun" skills/visual-ip-illustrations/SKILL.md` |
| Mixed-IP grouping | `rg -n "Mixed-IP|mixed-IP|Cai Xukun variant group|separate route groups|caixukun" skills/visual-ip-illustrations/SKILL.md` |
| Existing route stability | `rg -n "Omitted visual IP selects.*xiaohei|Littlebox|Tom|Ferris|Seal|OpenClaw|Go Gopher|\\$ian-xiaohei-illustrations" skills/visual-ip-illustrations/SKILL.md` |
| Diff hygiene | `git diff --check -- skills/visual-ip-illustrations/SKILL.md` |

### Wave 0 Gaps

- Automated validator and Node tests are assigned to Phase 47. [VERIFIED: ROADMAP.md]
- Phase 45 can use grep and `git diff --check` for deterministic evidence. [VERIFIED: CONTEXT.md]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication surface in a documentation-first skill package. [VERIFIED: codebase grep] |
| V3 Session Management | no | No session surface in a documentation-first skill package. [VERIFIED: codebase grep] |
| V4 Access Control | yes | Route-gated public-figure wording and public sample review boundary in Cai Xukun source/prompt/QA. [VERIFIED: source.md + prompt-template.md + qa-checklist.md] |
| V5 Input Validation | yes | Alias selection, route-local reference loading, visible-label claim sanitization, and route-leakage guard. [VERIFIED: routing.md + prompt-template.md + qa-checklist.md] |
| V6 Cryptography | no | No cryptographic behavior in this phase. [VERIFIED: codebase grep] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route confusion between IPs | Tampering | Route-local reference loading and route-leakage QA/delivery guard. [VERIFIED: routing.md + qa-checklist.md] |
| Public-figure claim drift | Spoofing/Reputation risk | Label sanitization plus `gated-public-figure` route status and public sample review boundary. [VERIFIED: prompt-template.md + qa-checklist.md] |
| Source-image context carryover | Information/Integrity risk | Explicit green-background source-context boundary and white-background output style. [VERIFIED: source.md + prompt-template.md + qa-checklist.md] |
| Unreviewed public sample publication | Compliance/release risk | Public generated Cai Xukun samples require release review. [VERIFIED: source.md + qa-checklist.md] |

## Sources

### Primary (HIGH confidence)
- `.planning/ROADMAP.md` — Phase 45/46/47 ownership and success criteria. [VERIFIED: codebase grep]
- `.planning/REQUIREMENTS.md` — RUN-01 through RUN-04. [VERIFIED: codebase grep]
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md` — passed route/source contract. [VERIFIED: codebase grep]
- `.planning/phases/44-cai-xukun-canonical-pack/44-VERIFICATION.md` — passed seven-file pack contract. [VERIFIED: codebase grep]
- `.planning/phases/44-cai-xukun-canonical-pack/44-01-SUMMARY.md` — handoff boundaries. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/SKILL.md` — current runtime controller surfaces. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/references/routing.md` — route metadata. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/references/ips/caixukun/index.md` — pack contract. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` — source and boundary contract. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` — planning/prompt/edit/delivery contract. [VERIFIED: codebase grep]
- `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` — QA and delivery judgment. [VERIFIED: codebase grep]

### Secondary (MEDIUM confidence)
- `.planning/codebase/STACK.md`, `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/CONVENTIONS.md`, `.planning/codebase/TESTING.md` — repository maps used to confirm documentation-first architecture and testing state. [VERIFIED: codebase grep]

### Tertiary (LOW confidence)
- None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - repository-local docs and local command checks confirm no external package stack. [VERIFIED: codebase grep + local commands]
- Architecture: HIGH - `SKILL.md`, `routing.md`, and route-local packs make the controller/reference split explicit. [VERIFIED: codebase grep]
- Pitfalls: HIGH - pitfalls come directly from current missing Cai Xukun controller surfaces and ROADMAP phase boundaries. [VERIFIED: codebase grep]

**Research date:** 2026-06-18
**Valid until:** 2026-07-02 for Phase 45 planning, assuming the roadmap and Cai Xukun pack remain unchanged. [ASSUMED]

## RESEARCH COMPLETE

Research complete for Phase 45. Planner can create `45-01-PLAN.md` for Cai Xukun skill controller integration.
