# Phase 21: Naming and Compatibility Contract - Research

**Researched:** 2026-06-14 [VERIFIED: command output]
**Domain:** Documentation-first Codex Skill naming and compatibility contract [CITED: .planning/ROADMAP.md]
**Confidence:** HIGH [VERIFIED: codebase grep]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

## Implementation Decisions

### Canonical Naming Surface

- **D-01:** The canonical product name is `Visual IP Illustrations`.
- **D-02:** The canonical repository and install slug is `visual-ip-illustrations`.
- **D-03:** The canonical skill id is `$visual-ip-illustrations`.
- **D-04:** RBRD-01 is satisfied by a single maintainer-readable naming contract that names `Visual IP Illustrations` as the canonical product name.
- **D-05:** RBRD-02 is satisfied by the same contract naming `visual-ip-illustrations` as both the repository slug and install slug.
- **D-06:** RBRD-03 is satisfied by the same contract naming `$visual-ip-illustrations` as the canonical skill id.
- **D-07:** Public and metadata surfaces should lead with the multi-IP product identity rather than a Xiaohei-only identity after later phases apply the rebrand.

### Legacy Alias Compatibility

- **D-08:** `$ian-xiaohei-illustrations` remains a documented legacy alias during the v1.4 transition.
- **D-09:** RBRD-04 is satisfied by preserving a user-visible compatibility policy for `$ian-xiaohei-illustrations` in the naming contract.
- **D-10:** The legacy alias should remain visible in examples, smoke prompts, release review, and validator expectations during v1.4.
- **D-11:** The legacy alias is a compatibility surface for existing prompts and local installs. Later phases may add canonical prompts while retaining legacy smoke coverage.

### Route and Output Path Stability

- **D-12:** Route behavior stays stable during the rebrand. Xiaohei remains the omitted-IP default route.
- **D-13:** Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.
- **D-14:** Existing route ids stay stable: `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`.
- **D-15:** Existing route statuses stay stable: Xiaohei `active`, Littlebox `active`, Tom `gated-authorized`, Ferris `source-reviewed`, and Sealos Seal `brand-owned`.
- **D-16:** Existing route-local reference packs stay authoritative and remain separately readable, testable, and routable.
- **D-17:** Existing output paths stay stable during the rebrand:
  - Xiaohei: `assets/<article-slug>-illustrations/`
  - Littlebox: `assets/<article-slug>-littlebox/`
  - Tom: `assets/<article-slug>-tom/`
  - Ferris: `assets/<article-slug>-ferris/`
  - Sealos Seal: `assets/<article-slug>-sealos/`
- **D-18:** Existing escaped documentation tokens stay stable during the rebrand:
  - Xiaohei: `assets/&lt;article-slug&gt;-illustrations/`
  - Littlebox: `assets/&lt;article-slug&gt;-littlebox/`
  - Tom: `assets/&lt;article-slug&gt;-tom/`
  - Ferris: `assets/&lt;article-slug&gt;-ferris/`
  - Sealos Seal: `assets/&lt;article-slug&gt;-sealos/`

### Package-Path Compatibility Boundary

- **D-19:** The installable legacy directory `ian-xiaohei-illustrations/` may continue to exist as the compatibility source until Phase 22 migration guidance defines package-path handling.
- **D-20:** Phase 21 locks naming and compatibility semantics only. It does not rename directories, edit skill metadata, edit agent metadata, edit public docs, change route docs, move assets, or alter validator code.
- **D-21:** Phase 22 should decide whether the canonical installable package path becomes `visual-ip-illustrations/`, whether `ian-xiaohei-illustrations/` remains a copied compatibility package, and how local users migrate safely.

### Phase Sequencing Boundaries

- **D-22:** Phase 22 consumes this contract for `SKILL.md`, `agents/openai.yaml`, and package path behavior.
- **D-23:** Phase 23 consumes this contract for README, prompt examples, NOTICE, install guidance, migration guidance, and release checklist copy.
- **D-24:** Phase 24 consumes this contract for validator checks, Node tests, compatibility smoke coverage, stale old-name-only scans, and final evidence.
- **D-25:** Future package distribution work should use this contract as the v1.4 compatibility baseline.

### the agent's Discretion

The user instructed autonomous decisions for this discuss pass. The selected defaults are a conservative rebrand contract, stable route behavior, stable output paths, documented legacy alias compatibility through v1.4, and a deferred package-path migration decision for Phase 22.

### Deferred Ideas (OUT OF SCOPE)

- v2 package selector: `.planning/REQUIREMENTS.md` lists `DIST-02`, where users can install selected IP variants through a CLI-level selector. This stays outside v1.4.
- Full repository rename: the canonical slug is `visual-ip-illustrations`, but GitHub repository renaming, remote URL migration, redirect handling, and release-distribution choreography belong after v1.4 compatibility guidance is in place.
- Machine-readable visual-IP manifest: `.planning/REQUIREMENTS.md` lists `MASC-03`, which can later track source, license, trademark, brand, endorsement, and canonical image records across routes.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| RBRD-01 | Maintainer can read a single naming contract that defines `Visual IP Illustrations` as the canonical product name. [CITED: .planning/REQUIREMENTS.md] | Add one maintainer-facing contract artifact and make `Visual IP Illustrations` the first canonical-name row. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| RBRD-02 | Maintainer can identify `visual-ip-illustrations` as the canonical repository and install slug. [CITED: .planning/REQUIREMENTS.md] | Include repository slug and install slug as separate fields in the contract even though they currently share the same value. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| RBRD-03 | User can invoke the canonical skill id `$visual-ip-illustrations`. [CITED: .planning/REQUIREMENTS.md] | Phase 21 should define the canonical skill id as a contract value; Phase 22 owns runtime metadata updates. [CITED: .planning/ROADMAP.md] |
| RBRD-04 | User can keep using the legacy `$ian-xiaohei-illustrations` invocation during the v1.4 transition. [CITED: .planning/REQUIREMENTS.md] | Define `$ian-xiaohei-illustrations` as a legacy alias with v1.4 smoke and validator expectations. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
</phase_requirements>

## Summary

Phase 21 should create a single maintainer-readable naming contract under the Phase 21 planning directory. [CITED: .planning/ROADMAP.md] The contract should state the canonical product name, repository slug, install slug, canonical skill id, legacy alias, route stability boundary, output path stability boundary, and downstream phase ownership. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

The implementation scope is intentionally small: create the contract artifact and optionally add a short pointer from the Phase 21 plan to that artifact. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] Phase 21 should leave `SKILL.md`, `agents/openai.yaml`, README, examples, NOTICE, release checklist, route docs, validators, tests, assets, and directories unchanged. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Primary recommendation:** Create `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` as the Phase 21 deliverable and keep all runtime, public-doc, and validator edits for Phases 22-24. [VERIFIED: codebase grep]

## Project Constraints (from AGENTS.md)

- Every user-facing reply must start with `爸爸`. [CITED: AGENTS.md]
- User-facing replies must be in Simplified Chinese. [CITED: AGENTS.md]
- Code, code comments, commit messages, and pull request titles/descriptions must be in English. [CITED: AGENTS.md]
- Work should start through a GSD command before file edits unless the user explicitly bypasses it; this request is already inside `$gsd-plan-phase 21 --auto`. [CITED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml`. [CITED: AGENTS.md]
- Existing `$ian-xiaohei-illustrations` behavior and Xiaohei prompts remain compatible. [CITED: AGENTS.md]
- IP rules stay separately readable, testable, and routable. [CITED: AGENTS.md]
- Attribution and license notices stay preserved. [CITED: AGENTS.md]
- The package stays lightweight with no app framework runtime. [CITED: AGENTS.md]
- Final image generation depends on the host `image_gen` capability. [CITED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Naming contract | Planning docs | Repository docs | Phase 21 produces planning context before package and public docs change. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Skill invocation naming | Codex Skill metadata | Agent metadata | `SKILL.md` frontmatter and `agents/openai.yaml` are the current runtime discovery surfaces, and Phase 22 owns their rebrand. [VERIFIED: codebase grep] |
| Legacy alias compatibility | Codex Skill metadata | Prompt examples and validator | `$ian-xiaohei-illustrations` appears in skill metadata, agent default prompt, README, examples, and tests. [VERIFIED: codebase grep] |
| Route stability | Route reference docs | Skill controller and validator | `references/routing.md` defines route ids, aliases, defaults, statuses, required references, and output suffixes. [VERIFIED: codebase grep] |
| Public install guidance | README and release checklist | Examples | README currently documents clone, copy, and use commands for the legacy slug. [VERIFIED: codebase grep] |
| Deterministic validation | Node validator | Node test suite | `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` currently pass 78/78 and 40/40. [VERIFIED: command output] |

## Current Naming and Compatibility Surfaces

| Surface | Current State | Phase 21 Action |
|---------|---------------|-----------------|
| Product name | README and NOTICE still lead with `Ian Xiaohei Illustrations`, while planning docs define `Visual IP Illustrations`. [VERIFIED: codebase grep] | Record canonical product name in the contract. [CITED: .planning/ROADMAP.md] |
| Repository slug | README install commands use `helloianneo/ian-xiaohei-illustrations` and `cd ian-xiaohei-illustrations`. [VERIFIED: codebase grep] | Record canonical slug `visual-ip-illustrations`; Phase 23 owns public install docs. [CITED: .planning/ROADMAP.md] |
| Installable package directory | Current installable directory is `ian-xiaohei-illustrations/`. [VERIFIED: codebase grep] | Document compatibility boundary; Phase 22 owns package-path handling. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Skill id | `SKILL.md` frontmatter name is `ian-xiaohei-illustrations`. [VERIFIED: codebase grep] | Record canonical skill id `$visual-ip-illustrations`; Phase 22 owns metadata changes. [CITED: .planning/ROADMAP.md] |
| Legacy alias | `$ian-xiaohei-illustrations` appears in agent default prompt, README, examples, smoke prompts, and validator tests. [VERIFIED: codebase grep] | Define it as the v1.4 legacy alias and compatibility smoke surface. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Route ids | Route table ids are `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`. [VERIFIED: codebase grep] | Lock as stable during rebrand. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Output paths | Current raw paths are `assets/<article-slug>-illustrations/`, `-littlebox/`, `-tom/`, `-ferris/`, and `-sealos/`. [VERIFIED: command output] | Lock as stable during rebrand. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Attribution boundaries | NOTICE records Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries. [VERIFIED: codebase grep] | Preserve boundaries; Phase 23 owns rebrand wording. [CITED: .planning/REQUIREMENTS.md] |
| Validation baseline | Validator reports `Summary: total=78 passed=78 failed=0 skipped=0`; Node test reports `tests 40`, `pass 40`. [VERIFIED: command output] | Keep baseline green after writing the contract. [VERIFIED: command output] |

## Minimal Phase 21 Implementation Scope

| Task | File | Required Content | Reason |
|------|------|------------------|--------|
| Create naming contract | `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` | Canonical values, legacy alias, route stability, output path stability, package-path boundary, downstream phase ownership. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] | Satisfies RBRD-01 through RBRD-04 before runtime surfaces change. [CITED: .planning/ROADMAP.md] |
| Reference contract from plan | Phase 21 PLAN file | A task should point implementer to `NAMING-CONTRACT.md`. [ASSUMED] | Keeps planner task actions concrete. [ASSUMED] |
| Verify no drift | Existing validation commands | Run validator, Node tests, targeted `git diff --check`. [VERIFIED: command output] | Current baseline is green and Phase 21 should preserve it. [VERIFIED: command output] |

**Files likely touched in Phase 21 only:** `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md`, Phase 21 plan artifacts, and Phase 21 summary/verification artifacts generated by GSD. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Files to avoid in Phase 21:** `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `ian-xiaohei-illustrations/references/routing.md`, README, examples, NOTICE, RELEASE_CHECKLIST, validator scripts, tests, assets, and directory names. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

## Standard Stack

### Core

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Markdown | repository format | Naming contract artifact. [CITED: .planning/codebase/CONVENTIONS.md] | Project behavior and docs are Markdown-driven. [CITED: .planning/codebase/STRUCTURE.md] |
| Node.js | v24.13.0 | Run dependency-free validator and Node tests. [VERIFIED: command output] | Current validation scripts are Node ESM files. [VERIFIED: codebase grep] |
| Git | 2.50.1 | Run whitespace and diff checks. [VERIFIED: command output] | Release checklist requires `git diff --check`. [VERIFIED: codebase grep] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `rg` | available in shell session [VERIFIED: command output] | Locate naming and compatibility surfaces quickly. [VERIFIED: command output] | Use during planning and execution source-grounding. [ASSUMED] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Markdown contract | YAML/JSON manifest | Machine-readable manifests are listed as v2 ideas, so a Markdown contract matches Phase 21 scope. [CITED: .planning/REQUIREMENTS.md] |
| Editing runtime metadata now | Defer to Phase 22 | Phase 22 explicitly owns `SKILL.md`, `agents/openai.yaml`, and package-path behavior. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Editing public docs now | Defer to Phase 23 | Phase 23 explicitly owns README, examples, NOTICE, install guidance, migration guidance, and release checklist copy. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |

**Installation:** No external package installation is required. [VERIFIED: codebase grep]

## Package Legitimacy Audit

No external packages are installed by Phase 21. [VERIFIED: codebase grep]

## Architecture Patterns

### System Architecture Diagram

```text
Maintainer planning need
  -> Phase 21 naming contract
    -> Canonical naming values
    -> Legacy alias policy
    -> Route and output stability boundary
    -> Package-path compatibility boundary
      -> Phase 22 runtime metadata rebrand
      -> Phase 23 public docs/examples/release rebrand
      -> Phase 24 validator/test/release evidence
```

### Recommended Project Structure

```text
.planning/phases/21-naming-and-compatibility-contract/
├── 21-CONTEXT.md          # Existing locked decisions. [VERIFIED: codebase grep]
├── 21-RESEARCH.md         # This research output. [VERIFIED: codebase grep]
└── NAMING-CONTRACT.md     # Recommended Phase 21 deliverable. [ASSUMED]
```

### Pattern 1: Contract Table

**What:** Use one short table with fields for product name, repository slug, install slug, canonical skill id, legacy alias, default route, explicit routes, route ids, route statuses, raw output paths, escaped output paths, and downstream owner. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**When to use:** Use it for Phase 21 because the phase goal is one maintainer-readable source of truth. [CITED: .planning/ROADMAP.md]

**Example:**

```markdown
| Contract Field | Value | Stability |
|----------------|-------|-----------|
| Canonical product name | `Visual IP Illustrations` | v1.4 canonical |
| Canonical skill id | `$visual-ip-illustrations` | v1.4 canonical |
| Legacy alias | `$ian-xiaohei-illustrations` | Preserved during v1.4 |
```

### Pattern 2: Downstream Ownership Fence

**What:** Add a section named `Downstream Ownership` that maps Phase 22 to runtime metadata, Phase 23 to public docs, and Phase 24 to validation. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**When to use:** Use it to prevent phase boundary drift. [VERIFIED: codebase grep]

### Anti-Patterns to Avoid

- **Renaming the installable directory in Phase 21:** Package-path handling is deferred to Phase 22. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
- **Updating `$ian-xiaohei-illustrations` prompts in Phase 21:** Prompt examples and legacy smoke prompts are Phase 23 and Phase 24 surfaces. [CITED: .planning/ROADMAP.md]
- **Touching route-local IP packs:** Route behavior and output paths stay stable during the rebrand. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
- **Changing validator expected counts in Phase 21:** Validation hardening is Phase 24 scope. [CITED: .planning/ROADMAP.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route inventory | New parser or ad hoc rewritten route list | Existing `references/routing.md` route table. [VERIFIED: codebase grep] | It already contains ids, aliases, defaults, suffixes, required refs, attribution contexts, and statuses. [VERIFIED: codebase grep] |
| Output path inventory | New generated path convention | Existing raw and escaped path tokens. [VERIFIED: command output] | Current validator checks path tokens across docs. [VERIFIED: codebase grep] |
| Validation harness | New test runner | Existing `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: command output] | They already provide the release baseline. [VERIFIED: command output] |
| Migration mechanism | CLI selector or package installer | Phase 21 Markdown contract. [CITED: .planning/REQUIREMENTS.md] | CLI-level selectors are v2 scope. [CITED: .planning/REQUIREMENTS.md] |

**Key insight:** Phase 21 is a contract-writing phase, and the expensive parts are preserving boundaries and sequencing later edits. [CITED: .planning/ROADMAP.md]

## Runtime State Inventory

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | No repo-local `.sqlite`, `.db`, `.env`, package manager lockfile, or app datastore found within max depth 4. [VERIFIED: command output] | No data migration for Phase 21. [VERIFIED: command output] |
| Live service config | No live service config file or runtime service target found in repo scan. [VERIFIED: command output] | No service config edit for Phase 21. [VERIFIED: command output] |
| OS-registered state | Process scan found only the current `rg` command containing the search string. [VERIFIED: command output] | No OS service re-registration for Phase 21. [VERIFIED: command output] |
| Secrets/env vars | No environment variable names matching `IAN`, `XIAOHEI`, `VISUAL_IP`, `ILLUSTRATION`, or `CODEX_HOME` were present in the command output. [VERIFIED: command output] | No env var rename for Phase 21. [VERIFIED: command output] |
| Build artifacts | No `node_modules`, `dist`, `build`, `package.json`, package lockfile, or Python egg-info found within max depth 4. [VERIFIED: command output] | No build artifact cleanup for Phase 21. [VERIFIED: command output] |
| Installed local skills | `/Users/longnv/.agents/skills/ian-xiaohei-illustrations` exists; `.codex/skills/ian-xiaohei-illustrations`, `.codex/skills/visual-ip-illustrations`, and `.agents/skills/visual-ip-illustrations` were missing. [VERIFIED: command output] | Record as Phase 22 migration guidance input; Phase 21 should not mutate local installs. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |

## Common Pitfalls

### Pitfall 1: Treating The Contract As The Rebrand Implementation

**What goes wrong:** The plan edits runtime metadata, public docs, prompts, validators, or directory names during Phase 21. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Why it happens:** The desired canonical names are already known, so it is tempting to apply them everywhere at once. [ASSUMED]

**How to avoid:** Scope Phase 21 to the contract artifact and verification only. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Warning signs:** Plan tasks mention `SKILL.md`, `openai.yaml`, README, examples, NOTICE, release checklist, validators, or directory renames as edit targets. [VERIFIED: codebase grep]

### Pitfall 2: Losing Legacy Alias Visibility

**What goes wrong:** Canonical `$visual-ip-illustrations` becomes the only named invocation in future docs or validators. [CITED: .planning/REQUIREMENTS.md]

**Why it happens:** Rebrand work can confuse canonical identity with compatibility cleanup. [ASSUMED]

**How to avoid:** Treat `$ian-xiaohei-illustrations` as a v1.4 documented legacy alias and smoke target. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Warning signs:** Examples or test fixtures remove all `$ian-xiaohei-illustrations` occurrences. [VERIFIED: codebase grep]

### Pitfall 3: Changing Route Or Output Contracts

**What goes wrong:** A naming rebrand accidentally changes route ids, statuses, output suffixes, raw paths, or escaped path tokens. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Why it happens:** `ian-xiaohei-illustrations` appears inside both package paths and route-local reference paths, so broad replacement is unsafe. [VERIFIED: codebase grep]

**How to avoid:** Use the contract to classify strings as canonical identity, legacy alias, package path, route path, output path, source path, or attribution text. [ASSUMED]

**Warning signs:** Diffs touch `references/ips/*`, `references/routing.md`, or output path tokens during Phase 21. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

## Code Examples

### Recommended Naming Contract Shape

```markdown
# Naming Contract

| Field | Value | Compatibility Policy | Downstream Owner |
|-------|-------|----------------------|------------------|
| Product name | `Visual IP Illustrations` | Canonical v1.4 product identity | Phase 23 public docs |
| Repository slug | `visual-ip-illustrations` | Canonical repository slug | Phase 23 install docs |
| Install slug | `visual-ip-illustrations` | Canonical install slug | Phase 22 package path guidance |
| Canonical skill id | `$visual-ip-illustrations` | Canonical invocation | Phase 22 runtime metadata |
| Legacy skill alias | `$ian-xiaohei-illustrations` | Preserved during v1.4 | Phase 24 validation |
```

Source: Phase 21 context decisions D-01 through D-24. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

### Verification Commands

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check -- .planning/phases/21-naming-and-compatibility-contract/21-RESEARCH.md
```

Source: release checklist and user request. [VERIFIED: codebase grep]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Xiaohei-centered public identity | `Visual IP Illustrations` as canonical planning identity | v1.4 planning start on 2026-06-14 [CITED: .planning/STATE.md] | Phase 21 must formalize the naming contract. [CITED: .planning/ROADMAP.md] |
| One-route skill framing | Five-route multi-IP skill baseline | By v1.3 completion plus quick task 260614-k62 [CITED: .planning/STATE.md] | Rebrand must preserve Xiaohei, Littlebox, Tom, Ferris, and Sealos route behavior. [CITED: .planning/PROJECT.md] |
| Manual-only validation map | Dependency-free validator plus Node tests | Current repo baseline [VERIFIED: command output] | Planner should trust current command output over older `.planning/codebase/TESTING.md` map. [VERIFIED: command output] |

**Deprecated/outdated:**

- `.planning/codebase/TESTING.md` says no automated test files are present; current repo contains `scripts/validate-skill-package.test.mjs` and the Node test suite passes 40/40. [VERIFIED: command output]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The Phase 21 contract should be named `NAMING-CONTRACT.md`. | Minimal Phase 21 Implementation Scope | Planner may choose another artifact name while still satisfying requirements. |
| A2 | A Phase 21 plan should reference the contract artifact directly. | Minimal Phase 21 Implementation Scope | Planner may create a valid plan with equivalent task wording. |
| A3 | Use `rg` during planning and execution source-grounding. | Standard Stack | Planner may use another search tool with equivalent results. |
| A4 | Rebrand work can confuse canonical identity with compatibility cleanup. | Common Pitfalls | Pitfall wording may overstate human error pattern. |
| A5 | Broad string replacement is unsafe unless strings are classified first. | Common Pitfalls | A carefully reviewed broad replacement could still be safe later. |

## Open Questions

1. **Should the canonical installable package path become `visual-ip-illustrations/` in Phase 22?** [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
   - What we know: Phase 21 locks the slug and defers package-path handling. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
   - What's unclear: Whether Phase 22 creates a new package directory, preserves only the legacy directory, or supports both. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
   - Recommendation: Phase 21 should record the decision point and leave implementation to Phase 22. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

2. **Where should future validator checks assert the naming contract?** [CITED: .planning/ROADMAP.md]
   - What we know: Phase 24 owns validator and Node tests for canonical naming and legacy alias compatibility. [CITED: .planning/ROADMAP.md]
   - What's unclear: Exact check IDs and fixture names. [ASSUMED]
   - Recommendation: Phase 21 should list expected values so Phase 24 can encode them deterministically. [ASSUMED]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node tests | yes [VERIFIED: command output] | v24.13.0 [VERIFIED: command output] | None required. [VERIFIED: command output] |
| Git | `git diff --check` | yes [VERIFIED: command output] | 2.50.1 [VERIFIED: command output] | None required. [VERIFIED: command output] |
| `rg` | Source inventory | yes [VERIFIED: command output] | not captured [VERIFIED: command output] | Use shell file reads if needed. [ASSUMED] |

**Missing dependencies with no fallback:** None found for Phase 21. [VERIFIED: command output]

**Missing dependencies with fallback:** None found for Phase 21. [VERIFIED: command output]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no [VERIFIED: codebase grep] | No auth surface in Phase 21 docs-only contract. [VERIFIED: codebase grep] |
| V3 Session Management | no [VERIFIED: codebase grep] | No session surface in Phase 21 docs-only contract. [VERIFIED: codebase grep] |
| V4 Access Control | no [VERIFIED: codebase grep] | No access-control surface in Phase 21 docs-only contract. [VERIFIED: codebase grep] |
| V5 Input Validation | yes [VERIFIED: codebase grep] | Preserve deterministic validator checks and avoid broad unreviewed string replacement. [VERIFIED: codebase grep] |
| V6 Cryptography | no [VERIFIED: codebase grep] | No crypto surface in Phase 21 docs-only contract. [VERIFIED: codebase grep] |

### Known Threat Patterns for Documentation-First Rebrand

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Compatibility downgrade through alias removal | Denial of service [ASSUMED] | Keep `$ian-xiaohei-illustrations` in the v1.4 compatibility policy. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Route confusion through broad replacement | Tampering [ASSUMED] | Preserve route ids, output paths, reference paths, and route statuses in the contract. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md] |
| Attribution drift during rebrand | Repudiation [ASSUMED] | Preserve NOTICE attribution and source/brand boundaries through later docs changes. [CITED: .planning/REQUIREMENTS.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md` - locked Phase 21 decisions, boundaries, and downstream owners. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]
- `.planning/REQUIREMENTS.md` - RBRD-01 through RBRD-04, PKG/DOC/VAL boundaries, and v2 out-of-scope items. [CITED: .planning/REQUIREMENTS.md]
- `.planning/ROADMAP.md` - Phase 21 goal, success criteria, dependency chain, and Phase 22-24 ownership. [CITED: .planning/ROADMAP.md]
- `.planning/PROJECT.md` - v1.4 canonical identity and compatibility context. [CITED: .planning/PROJECT.md]
- `.planning/STATE.md` - current focus, validation baseline history, and v1.4 milestone decisions. [CITED: .planning/STATE.md]
- `ian-xiaohei-illustrations/references/routing.md` - route ids, aliases, defaults, statuses, required refs, and paths. [VERIFIED: codebase grep]
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` - current validation harness. [VERIFIED: codebase grep]
- Command outputs for `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `node --version`, `git --version`, installed skill path probes, environment probes, process probes, and artifact probes. [VERIFIED: command output]

### Secondary (MEDIUM confidence)

- `/Users/longnv/.codex/memories/MEMORY.md` - prior project history confirming the v1.3 78/78 and 40/40 high-water mark. [VERIFIED: memory]

### Tertiary (LOW confidence)

- None. [VERIFIED: codebase grep]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - Node, Git, Markdown, and no package installs were verified locally. [VERIFIED: command output]
- Architecture: HIGH - Phase boundaries and current surfaces are explicit in `21-CONTEXT.md`, ROADMAP, and codebase grep. [VERIFIED: codebase grep]
- Pitfalls: MEDIUM - Phase-boundary risks are directly grounded, while some human-error mechanisms are assumptions. [CITED: .planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md]

**Research date:** 2026-06-14 [VERIFIED: command output]
**Valid until:** 2026-07-14 for Phase 21 planning unless Phase 22 changes package-path decisions first. [ASSUMED]
