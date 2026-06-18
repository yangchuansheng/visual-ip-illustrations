# Phase 44: Cai Xukun Canonical Pack - Research

**Researched:** 2026-06-18
**Domain:** Codex Skill route-local canonical pack for a gated public-figure stylized mascot route
**Confidence:** HIGH

## User Constraints

### Locked Decisions

- Phase 44 is locked to route-local canonical pack files for Cai Xukun: `index.md`, `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`, and the existing Phase 43 `source.md`. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]
- Phase 44 should expand the Cai Xukun `routing.md` `required_references` row after the full pack files exist. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]
- Phase 44 must preserve Phase 43 route/source contract and public-figure boundaries. [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md] [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md]
- Phase 45 owns runtime integration; Phase 46 owns public docs and release surfaces; Phase 47 owns validator/test hardening and release evidence. [VERIFIED: .planning/ROADMAP.md]

### the agent's Discretion

- The planner may choose exact Markdown section ordering inside new Cai Xukun pack files, provided route id, status, output path, uploaded-image authority, marker list, public sample boundary, route block, and save-path reminders stay explicit. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]
- The planner may use Go Gopher as the canonical operational-pack structure and OpenClaw as the uploaded-image authority wording precedent. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/source.md]
- The planner may update `source.md` only for pack navigation and current-route-pack wording while preserving Phase 43 source authority and public-figure boundaries. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]

### Deferred Ideas (OUT OF SCOPE)

- Phase 45: `SKILL.md` runtime controller integration, selected-IP reference loading, mixed-IP dispatch, generation/edit routing, QA dispatch, and Cai Xukun delivery reporting. [VERIFIED: .planning/ROADMAP.md]
- Phase 46: README variants, examples, NOTICE, release checklist, public docs, release surfaces, and agent metadata. [VERIFIED: .planning/ROADMAP.md]
- Phase 47: validator hardening, Node regression tests, route leakage scans, public sample gates, route smoke prompts, uploaded-image identity checks, public-figure boundary checks, and final release evidence. [VERIFIED: .planning/ROADMAP.md]

## RESEARCH COMPLETE

Phase 44 should implement Cai Xukun as a full route-local canonical pack, using the current `caixukun/source.md` as authority and adding the six operational files that match existing route patterns. [VERIFIED: .planning/ROADMAP.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md]

The implementation should expand the Cai Xukun `routing.md` row from source-only `required_references` to the complete pack list after the files exist. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md]

**Primary recommendation:** use Go Gopher's operational-pack structure, OpenClaw's uploaded-authority wording, and Cai Xukun's Phase 43 public-figure source contract to create a complete route-local pack without touching runtime, public docs, or validator surfaces. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/source.md] [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md]

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PACK-01 | User can read a Cai Xukun route-local pack that isolates style, identity, composition, prompt, QA, source, likeness guardrails, sample policy, and output behavior from other IP routes. | Create seven route-local references under `references/ips/caixukun/`; use Gopher pack layout as precedent. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] |
| PACK-02 | User can plan Cai Xukun shots with route-specific fields for mascot state, mascot action, core article idea, structure type, objects, labels, likeness boundary notes, and output path. | Mirror Gopher planning format and add Cai Xukun-specific likeness/source-image notes. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/prompt-template.md] [VERIFIED: .planning/REQUIREMENTS.md] |
| PACK-03 | User can generate Cai Xukun prompts where the stylized mascot performs the central cognitive article action in a sparse 16:9 illustration. | Use Gopher's action-subject gate and Phase 43 uploaded marker list. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/gopher-ip.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |
| PACK-04 | User can apply Cai Xukun edit prompts for stronger participation, uploaded-image identity repair, title removal, text reduction, likeness-boundary repair, and unaffected-content preservation. | Combine Gopher edit prompt breadth with OpenClaw uploaded-identity repair wording and Cai Xukun public-figure boundary. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/prompt-template.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/prompt-template.md] |
| PACK-05 | User can use Cai Xukun QA gates that reject realistic-person output, generic yellow duck drift, missing idol-hair and outfit markers, celebrity endorsement claims, passive placement, route leakage, excessive text, green-background carryover, and copied composition. | Build route-specific QA gates from Phase 43 source restrictions and Gopher/OpenClaw QA structure. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/qa-checklist.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/qa-checklist.md] |

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Cai Xukun operational pack | Route-local skill references | `routing.md` metadata | Phase 44 creates operational reference files consumed later by `SKILL.md`. [VERIFIED: .planning/ROADMAP.md] |
| Uploaded-image authority | `source.md` | All operational pack files | Phase 43 source is authoritative; Phase 44 repeats the authority in style, identity, prompt, edit, and QA. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |
| Route required references | `routing.md` | Route-local pack | Phase 44 can expand `required_references` after the referenced files exist. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| Public-figure likeness boundary | `source.md`, prompt, edit, QA | Release checklist later | Phase 44 turns the boundary into generation/edit/QA controls; Phase 46/47 expose and validate release gates. [VERIFIED: .planning/ROADMAP.md] |
| Runtime route dispatch | `SKILL.md` | Route-local references | Runtime dispatch is Phase 45; Phase 44 supplies the files it will load. [VERIFIED: .planning/ROADMAP.md] |

## Standard Stack

### Core

| Library / File Type | Version | Purpose | Why Standard |
|---------------------|---------|---------|--------------|
| Markdown route references | repository-local | Skill instructions, source authority, prompt templates, QA gates | Existing routes use Markdown files under `skills/visual-ip-illustrations/references/ips/<route>/`. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] |
| `routing.md` route table | repository-local | Selectable route metadata and required references | Existing skill route metadata is centralized in `skills/visual-ip-illustrations/references/routing.md`. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| Git diff whitespace check | installed git CLI | Artifact hygiene | User explicitly requested `git diff --check`; repo workflows use it as a deterministic gate. [VERIFIED: user request] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `rg` | local CLI | Marker and leakage verification | Use for file/marker checks and non-Cai route leakage scans. [VERIFIED: command availability during this session] |
| Existing Node validator | deferred to Phase 47 | Automated validator/test hardening | Keep out of Phase 44 implementation scope. [VERIFIED: .planning/ROADMAP.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Route-local Markdown pack | Machine-readable manifest | Future manifest requirements are outside Phase 44. [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md] |
| Grep verification | Full validator update | Validator/test hardening is Phase 47 scope. [VERIFIED: .planning/ROADMAP.md] |

**Installation:** no package installation is required. [VERIFIED: .planning/PROJECT.md]

## Package Legitimacy Audit

No external packages are installed by Phase 44. Package legitimacy audit is skipped. [VERIFIED: .planning/PROJECT.md]

## Architecture Patterns

### System Architecture Diagram

```text
User selects Cai Xukun route
  -> routing.md matches caixukun aliases and required_references
  -> Phase 44 pack files provide route-local guidance
     -> source.md supplies uploaded authority and public-figure boundary
     -> index.md navigates the pack and repeats operational contract
     -> style-dna.md constrains visual style and source-image context
     -> caixukun-ip.md constrains identity and mascot action role
     -> composition-patterns.md maps article ideas to physical metaphors
     -> prompt-template.md emits planning fields, generation prompt, and edit prompts
     -> qa-checklist.md accepts, rejects, or repairs route outputs
  -> Phase 45 SKILL.md integration loads these references at runtime
  -> Phase 46 public docs expose selected workflow
  -> Phase 47 validator/tests automate marker, leakage, sample, and route checks
```

### Recommended Project Structure

```text
skills/visual-ip-illustrations/references/ips/caixukun/
├── index.md                 # pack navigation and operational coherence
├── source.md                # Phase 43 authority record
├── style-dna.md             # visual style and stable gates
├── caixukun-ip.md           # character identity and action responsibility
├── composition-patterns.md  # composition families and anti-repeat rules
├── prompt-template.md       # planning, generation, and edit prompts
└── qa-checklist.md          # pass/fail checks and repair paths
```

### Pattern 1: Repeated Route Header

**What:** every operational route file repeats route id, display name, route status, output path, source authority, identity note, public sample boundary, route block, and save-path reminder. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md]

**When to use:** use in all six new Cai Xukun operational files so progressive reference loading remains coherent. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/style-dna.md]

**Example:**

```markdown
Route id: `caixukun`.
Display name: Cai Xukun.
Route status: `gated-public-figure`.
Output path: `assets/<article-slug>-caixukun/`.
Source authority: `source.md`.
Uploaded-image identity note: preserve the yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.
Public sample review boundary: public generated Cai Xukun samples require release review before appearing in public examples or release surfaces.
```

### Pattern 2: Action-Subject Gate

**What:** the selected route mascot performs the central cognitive article action and the metaphor loses meaning when the mascot is removed. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/gopher-ip.md]

**When to use:** use in Cai Xukun `style-dna.md`, `caixukun-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: .planning/REQUIREMENTS.md]

### Pattern 3: Uploaded-Image Identity Repair

**What:** edit prompts preserve the existing successful composition while repairing the uploaded-reference identity markers. [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/prompt-template.md]

**When to use:** add Cai Xukun-specific repair prompt for missing silver hair, oversized eyes, red cheeks, orange beak, black top, white straps, white lower outfit, compact boots, and generic yellow duck drift. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]

### Anti-Patterns to Avoid

- **Runtime wiring in Phase 44:** `SKILL.md` integration belongs to Phase 45. [VERIFIED: .planning/ROADMAP.md]
- **Public docs in Phase 44:** README, examples, NOTICE, release checklist, and agent metadata belong to Phase 46. [VERIFIED: .planning/ROADMAP.md]
- **Validator hardening in Phase 44:** `scripts/validate-skill-package.mjs` and Node tests belong to Phase 47. [VERIFIED: .planning/ROADMAP.md]
- **Route leakage:** Cai Xukun markers should stay inside `references/ips/caixukun/` and the Cai Xukun `routing.md` row. [VERIFIED: .planning/REQUIREMENTS.md]
- **Public sample publication:** generated Cai Xukun public samples require release review. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| New route registry | New manifest or parser | Existing `routing.md` table | The route table already stores id, aliases, references, status, and output suffix. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| New pack structure | A Cai-Xukun-only file layout | Gopher/OpenClaw seven-file pattern | Existing full route packs use predictable file names and repeated route headers. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] |
| New authority source | Copy uploaded images into repo | Existing `source.md` authority record | Phase 43 recorded exact uploaded paths and source authority. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |
| Public sample approval flow | Ad hoc gallery wording | Release review boundary wording | Public generated samples require release review. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |

**Key insight:** Phase 44 should convert a verified route/source contract into operational route-local guidance; it should avoid widening the runtime, public docs, and validator blast radius. [VERIFIED: .planning/ROADMAP.md]

## Common Pitfalls

### Pitfall 1: Leaving `required_references` Source-Only

**What goes wrong:** Phase 45 runtime planning would see only `source.md` for Cai Xukun while the full pack exists. [VERIFIED: skills/visual-ip-illustrations/references/routing.md]

**Why it happens:** Phase 43 intentionally kept the row source-only because operational files had not been created. [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md]

**How to avoid:** expand `routing.md` after creating the six operational files. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]

**Warning signs:** `routing.md` Cai Xukun row still contains only `references/ips/caixukun/source.md`.

### Pitfall 2: Generic Yellow Mascot Drift

**What goes wrong:** the route outputs a generic yellow duck-like character instead of the uploaded Cai Xukun stylized mascot. [VERIFIED: .planning/REQUIREMENTS.md]

**Why it happens:** the body color is salient, but the full identity depends on silver layered idol hair, oversized eyes, red cheeks, orange beak, black top, white straps, white lower outfit, and compact boots. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]

**How to avoid:** repeat all locked markers in every operational file and QA gate. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]

**Warning signs:** generated prompt wording mentions yellow mascot or duck while omitting hair and outfit markers.

### Pitfall 3: Realistic-Person Likeness Drift

**What goes wrong:** generation drifts from stylized mascot article illustration toward public-figure portrait output. [VERIFIED: .planning/REQUIREMENTS.md]

**Why it happens:** the route name is a public figure and needs explicit guardrails in prompt, edit, and QA text. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]

**How to avoid:** include `gated-public-figure`, stylized mascot-only framing, and realistic-person/endorsement/impersonation/campaign/fandom restrictions in prompt and QA. [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md]

**Warning signs:** prompt or QA text omits `realistic-person portrait output` and endorsement/affiliation/impersonation boundaries.

### Pitfall 4: Green Background Carryover

**What goes wrong:** the reference image's green background leaks into generated article illustrations. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]

**Why it happens:** source image context can be mistaken for output style. [VERIFIED: .planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md]

**How to avoid:** keep the generated style as sparse 16:9 white-background article illustration and add green-background carryover repair wording. [VERIFIED: .planning/REQUIREMENTS.md]

**Warning signs:** style DNA or prompt template allows green backgrounds as default output.

### Pitfall 5: Route Leakage

**What goes wrong:** Cai Xukun markers appear in Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, or Go Gopher route files. [VERIFIED: .planning/REQUIREMENTS.md]

**Why it happens:** pack files are similar and copy-editing can carry route-specific markers across directories. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md]

**How to avoid:** run a non-Cai route leakage scan for aliases, uploaded paths, identity markers, and `gated-public-figure`. [VERIFIED: user request]

**Warning signs:** `rg` finds Cai Xukun route tokens under `references/ips/{xiaohei,littlebox,tom,ferris,seal,openclaw,gopher}/`.

## Code Examples

### Cai Xukun Planning Output Format

```text
1. Placement: [where this image appears in the article]
   Core idea: [one sentence]
   Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]
   Cai Xukun mascot state: [focused / inspecting / pointing / carrying / sorting / bridging / repairing / guiding / stamping / marking / shielding / weighing / connecting / untangling / mapping / comparing / lifting / assembling / routing]
   Cai Xukun mascot action: [the physical cognitive action performed by the stylized mascot]
   Supporting objects: [3-6 sparse article metaphor objects]
   Visible labels: ["short label 1", "short label 2", "short label 3" copied exactly in the user's requested language]
   Likeness boundary note: stylized mascot article illustration; no realistic-person portrait, endorsement, affiliation, impersonation, campaign, celebrity advertising, or fandom promotion claim.
   Source-image context note: green reference background is source-image context; final output uses sparse 16:9 white-background style.
   Output path: assets/<article-slug>-caixukun/
```

### Routing Required References

```markdown
`references/ips/caixukun/index.md`; `references/ips/caixukun/source.md`; `references/ips/caixukun/style-dna.md`; `references/ips/caixukun/caixukun-ip.md`; `references/ips/caixukun/composition-patterns.md`; `references/ips/caixukun/prompt-template.md`; `references/ips/caixukun/qa-checklist.md`
```

### Route Leakage Scan

```bash
rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|yellow duck-like rounded mascot body|silver layered idol hair|Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|realistic-person portrait output|green reference background" \
  skills/visual-ip-illustrations/references/ips/xiaohei \
  skills/visual-ip-illustrations/references/ips/littlebox \
  skills/visual-ip-illustrations/references/ips/tom \
  skills/visual-ip-illustrations/references/ips/ferris \
  skills/visual-ip-illustrations/references/ips/seal \
  skills/visual-ip-illustrations/references/ips/openclaw \
  skills/visual-ip-illustrations/references/ips/gopher
```

Expected result: no matches in non-Cai-Xukun route packs. [VERIFIED: .planning/REQUIREMENTS.md]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Source-only Cai Xukun route | Full route-local canonical pack | Phase 44 | Runtime integration can load complete style, identity, composition, prompt, and QA references in Phase 45. [VERIFIED: .planning/ROADMAP.md] |
| OpenClaw-style uploaded authority for source-reviewed route | Cai Xukun uploaded authority plus public-figure boundary | Phase 44 | Prompt/edit/QA must include identity repair plus likeness-boundary repair. [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/source.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |
| Gopher route source reviewed mascot | Cai Xukun gated public-figure stylized mascot | Phase 44 | Route block includes realistic-person and public claim restrictions. [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/index.md] [VERIFIED: .planning/REQUIREMENTS.md] |

**Deprecated/outdated:**

- Source-only `required_references` for Cai Xukun becomes outdated after the full Phase 44 pack files exist. [VERIFIED: .planning/phases/44-cai-xukun-canonical-pack/44-CONTEXT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `caixukun-ip.md` is the correct identity filename for Cai Xukun. | Pack File Set | Existing route convention supports `<route>-ip.md`; planner should verify filename in Phase 44 plan before implementation. [VERIFIED: existing route filenames] |

## Open Questions (RESOLVED)

1. **Should `source.md` receive a small navigation update?**
   - What we know: Phase 43 source says the current route-local pack is source-only and pending later files. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md]
   - Recommendation: update only the current-route-pack sentence and optional reference list after the six pack files exist.
   - Resolution: RESOLVED - Phase 44 may update `source.md` only for current-route-pack wording and pack navigation after the six operational pack files exist.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| `rg` | Marker checks and route leakage scan | yes | local CLI available | `grep -R` |
| `git` | `git diff --check` | yes | local CLI available | manual whitespace inspection |
| Node.js | existing validator/tests in Phase 47 | available in repo workflow history | deferred | manual grep checks for Phase 44 |

**Missing dependencies with no fallback:** none. [VERIFIED: no external package phase]

**Missing dependencies with fallback:** none. [VERIFIED: no external package phase]

## Verification Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual grep plus `git diff --check` for Phase 44; Node validator/test updates deferred to Phase 47. [VERIFIED: .planning/ROADMAP.md] |
| Config file | none for Phase 44 manual checks. [VERIFIED: .planning/config.json] |
| Quick run command | `rg -n "Route id: \`caixukun\`|gated-public-figure|assets/<article-slug>-caixukun|yellow duck-like rounded mascot body|silver layered idol hair|realistic-person portrait output|green reference background|Public generated Cai Xukun samples require release review" skills/visual-ip-illustrations/references/ips/caixukun/*.md` |
| Full suite command | `git diff --check -- skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun` |

### Phase Requirements To Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|--------------|
| PACK-01 | Full route-local pack exists and is isolated | grep + file listing | `test -f skills/visual-ip-illustrations/references/ips/caixukun/index.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md && test -f skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` | Phase 44 creates |
| PACK-02 | Planning fields include mascot state/action, labels, likeness note, and output path | grep | `rg -n "Cai Xukun mascot state|Cai Xukun mascot action|Likeness boundary note|Output path: assets/<article-slug>-caixukun/" skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` | Phase 44 creates |
| PACK-03 | Generation prompt makes Cai Xukun central action subject | grep | `rg -n "central cognitive article action|The metaphor should lose its meaning if Cai Xukun is removed|sparse 16:9" skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` | Phase 44 creates |
| PACK-04 | Edit prompts cover participation, identity repair, title, text, likeness, leakage, background, preservation | grep | `rg -n "Stronger Cai Xukun Participation|Uploaded-Image Identity Repair|Title Removal|Text Reduction|Public-Figure Likeness Boundary Repair|Route Leakage Repair|Green-Background Carryover Repair|Unaffected-Content Preservation" skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` | Phase 44 creates |
| PACK-05 | QA rejects required failure categories | grep | `rg -n "realistic-person output|generic yellow duck drift|missing idol-hair|celebrity endorsement claims|passive placement|route leakage|excessive text|green-background carryover|copied composition" skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` | Phase 44 creates |

### Route Row Required References Expansion

```bash
rg -n "references/ips/caixukun/index.md.*references/ips/caixukun/source.md.*references/ips/caixukun/style-dna.md.*references/ips/caixukun/caixukun-ip.md.*references/ips/caixukun/composition-patterns.md.*references/ips/caixukun/prompt-template.md.*references/ips/caixukun/qa-checklist.md" skills/visual-ip-illustrations/references/routing.md
```

### Route Leakage Scan

```bash
rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|yellow duck-like rounded mascot body|silver layered idol hair|Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|realistic-person portrait output|green reference background" \
  skills/visual-ip-illustrations/references/ips/xiaohei \
  skills/visual-ip-illustrations/references/ips/littlebox \
  skills/visual-ip-illustrations/references/ips/tom \
  skills/visual-ip-illustrations/references/ips/ferris \
  skills/visual-ip-illustrations/references/ips/seal \
  skills/visual-ip-illustrations/references/ips/openclaw \
  skills/visual-ip-illustrations/references/ips/gopher
```

### Sampling Rate

- **Per task commit:** run relevant `rg` command for touched Cai Xukun file plus `git diff --check -- <touched-files>`. [VERIFIED: user request]
- **Per wave merge:** run full marker grep, route row reference grep, leakage scan, and `git diff --check -- skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun`. [VERIFIED: user request]
- **Phase gate:** all Phase 44 grep checks and `git diff --check` pass before `$gsd-verify-work`. [VERIFIED: user request]

### Wave 0 Gaps

- `skills/visual-ip-illustrations/references/ips/caixukun/index.md` - PACK-01. [VERIFIED: current file listing]
- `skills/visual-ip-illustrations/references/ips/caixukun/style-dna.md` - PACK-01 and PACK-03. [VERIFIED: current file listing]
- `skills/visual-ip-illustrations/references/ips/caixukun/caixukun-ip.md` - PACK-01 and PACK-03. [VERIFIED: current file listing]
- `skills/visual-ip-illustrations/references/ips/caixukun/composition-patterns.md` - PACK-01 and PACK-03. [VERIFIED: current file listing]
- `skills/visual-ip-illustrations/references/ips/caixukun/prompt-template.md` - PACK-02 through PACK-04. [VERIFIED: current file listing]
- `skills/visual-ip-illustrations/references/ips/caixukun/qa-checklist.md` - PACK-05. [VERIFIED: current file listing]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication surface in a Markdown skill pack. [VERIFIED: .planning/PROJECT.md] |
| V3 Session Management | no | No session runtime. [VERIFIED: .planning/PROJECT.md] |
| V4 Access Control | no | File-based route references only. [VERIFIED: .planning/PROJECT.md] |
| V5 Input Validation | yes | Explicit alias set, route-local references, public-figure boundary, and route leakage scans. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| V6 Cryptography | no | No cryptography surface. [VERIFIED: .planning/PROJECT.md] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route spoofing through broad aliases | Spoofing | Keep Cai Xukun aliases limited to `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| Public-figure likeness drift | Tampering / reputation risk | Keep stylized mascot-only framing and realistic-person/endorsement/impersonation restrictions in prompt, edit, and QA. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |
| Cross-route marker leakage | Information disclosure / integrity | Keep Cai Xukun markers route-local and run leakage scan across non-Cai route packs. [VERIFIED: .planning/REQUIREMENTS.md] |
| Public sample release without review | Repudiation | Preserve public sample release review boundary in all operational files. [VERIFIED: skills/visual-ip-illustrations/references/ips/caixukun/source.md] |

## Sources

### Primary

- `.planning/ROADMAP.md` - Phase 44 scope, success criteria, dependencies, and Phase 45-47 ownership.
- `.planning/REQUIREMENTS.md` - PACK-01 through PACK-05 and Cai Xukun route/source requirements.
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-CONTEXT.md` - locked route/source decisions and Phase 44 handoff.
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-RESEARCH.md` - source record contract and validation split.
- `.planning/phases/43-cai-xukun-source-and-route-contract/43-VERIFICATION.md` - verified Phase 43 truths and deferred full pack ownership.
- `skills/visual-ip-illustrations/references/routing.md` - current route row and source-only `required_references`.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` - uploaded visual authority, markers, public-figure boundary, source-image context, sample policy, and review owner.
- `skills/visual-ip-illustrations/references/ips/gopher/index.md` - latest full canonical pack pattern.
- `skills/visual-ip-illustrations/references/ips/gopher/style-dna.md` - style and stable gate pattern.
- `skills/visual-ip-illustrations/references/ips/gopher/gopher-ip.md` - identity/action-subject pattern.
- `skills/visual-ip-illustrations/references/ips/gopher/composition-patterns.md` - composition and anti-repeat pattern.
- `skills/visual-ip-illustrations/references/ips/gopher/prompt-template.md` - planning/generation/edit prompt pattern.
- `skills/visual-ip-illustrations/references/ips/gopher/qa-checklist.md` - QA and repair pattern.
- `skills/visual-ip-illustrations/references/ips/openclaw/source.md` - uploaded-image authority wording precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/prompt-template.md` - uploaded-identity edit prompt precedent.
- `skills/visual-ip-illustrations/references/ips/openclaw/qa-checklist.md` - uploaded-identity QA precedent.

### Secondary

- `.planning/codebase/ARCHITECTURE.md` - documentation-first skill architecture and route-local reference policy.
- `.planning/codebase/CONVENTIONS.md` - Markdown conventions and route reference style.
- `.planning/config.json` - `workflow.nyquist_validation` is false and `security_enforcement` is enabled.

### Tertiary

- None.

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - Phase 44 uses existing Markdown route-reference stack and no package installs.
- Architecture: HIGH - route-local pack pattern is repeated across Gopher, OpenClaw, Ferris, Seal, Tom, Littlebox, and Xiaohei.
- Pitfalls: HIGH - Cai Xukun-specific failure modes are explicit in requirements and Phase 43 source/verification.

**Research date:** 2026-06-18
**Valid until:** 2026-07-02
