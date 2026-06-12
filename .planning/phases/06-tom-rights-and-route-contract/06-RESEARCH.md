# Phase 6: Tom Rights and Route Contract - Research

**Researched:** 2026-06-13 [VERIFIED: date]
**Domain:** Documentation-first protected-character route contract, rights boundary documentation, route metadata, and deterministic Node validation [VERIFIED: grep]
**Confidence:** HIGH [VERIFIED: grep]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Tom Rights Record
- **D-01:** Tom rights documentation will live at `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- **D-02:** The rights document must expose these explicit fields: source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, review owner.
- **D-03:** The rights record is a maintainer audit artifact. Downstream implementation should keep wording concrete enough for a release reviewer to decide whether Tom can remain gated, become active, or stay withheld from public release materials.

### NOTICE Attribution and Permission Boundary
- **D-04:** `NOTICE.md` must distinguish attribution from permission.
- **D-05:** Canonical wording direction: attribution is descriptive source context; permission is authorization-scope specific.
- **D-06:** Tom NOTICE copy should preserve Tom and Jerry/Tom source context while making clear that source attribution does not itself grant distribution, generated-sample, or broad character-use authorization.

### Route Status Contract
- **D-07:** Tom route status token is `gated-authorized` until release approval is complete.
- **D-08:** Route status wording must be consistent across `routing.md`, `README.md`, `examples/prompts.md`, and `RELEASE_CHECKLIST.md`.
- **D-09:** Tom route default must remain `false`. Xiaohei remains the only implicit default route.
- **D-10:** Phase 6 should define status wording and maintainer checks. Later phases can wire Tom runtime behavior, public examples, docs expansion, and validation hardening against this contract.

### Public Rendered Tom Sample Gate
- **D-11:** Public rendered Tom example assets are blocked until `RELEASE_CHECKLIST.md` records explicit public-sample approval.
- **D-12:** Phase 6 should define the public-sample gate and release checklist marker. It should not add rendered Tom assets.
- **D-13:** The gate applies to public example asset directories such as `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`.

### Tom Route Metadata
- **D-14:** `ian-xiaohei-illustrations/references/routing.md` must gain a Tom route row with `id` `tom`, `display_name` `Tom`, aliases `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`, `default` `false`, `output_suffix` `tom`, and `status` `gated-authorized`.
- **D-15:** Tom `required_references` should point to the future Tom canonical pack under `references/ips/tom/`. Phase 6 can reference future pack paths even when Phase 7 will fill the operational files.
- **D-16:** Tom `attribution_context` must include Tom and Jerry/Tom source context plus a rights-boundary note that separates attribution from authorization scope.
- **D-17:** Tom output path contract is `assets/<article-slug>-tom/`, with docs preserving escaped marker `assets/&lt;article-slug&gt;-tom/` when public docs are updated.

### the agent's Discretion
- Auto mode was explicitly authorized. The agent selected the conservative gate-first path for all gray areas.
- Planner may decide whether Phase 6 changes should include a lightweight validator update for the new status and public-sample gate if that is needed to make the contract auditably enforceable before Phase 10.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Phase 7 owns the full Tom canonical pack content beyond `rights.md`.
- Phase 8 owns skill controller integration, explicit Tom selection behavior, and mixed Xiaohei/Littlebox/Tom variant grouping.
- Phase 9 owns broad public docs, prompt examples, agent metadata, and release surface expansion.
- Phase 10 owns full validation hardening and Node tests for three-route parser behavior, Tom leakage boundaries, and public-sample gates.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| RGT-01 | Maintainer can read Tom source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner in Tom-specific documentation. [VERIFIED: .planning/REQUIREMENTS.md] | Add `references/ips/tom/rights.md` with the locked field set and reviewer-action wording. [VERIFIED: grep] |
| RGT-02 | Maintainer can distinguish Tom attribution from Tom permission in `NOTICE.md`. [VERIFIED: .planning/REQUIREMENTS.md] | Add a Tom NOTICE section with source context and authorization-scope boundary language. [VERIFIED: grep] |
| RGT-03 | Maintainer can keep Tom route gated or active through explicit route-status wording shared by routing docs, README, examples, and release checklist. [VERIFIED: .planning/REQUIREMENTS.md] | Use one exact token, `gated-authorized`, across route metadata and release surfaces. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| RGT-04 | Maintainer can block public rendered Tom example assets until release checklist records explicit public-sample approval. [VERIFIED: .planning/REQUIREMENTS.md] | Add checklist approval marker and, if implementation includes validation, gate Tom-named rendered assets in public example directories behind that marker. [VERIFIED: grep] |
| TOMR-05 | Maintainer can inspect Tom route metadata, aliases, default flag, output suffix, required references, attribution context, and route status in `references/routing.md`. [VERIFIED: .planning/REQUIREMENTS.md] | Extend the existing Markdown route table with the locked Tom row. [VERIFIED: grep] |
</phase_requirements>

## Summary

Phase 6 is a contract phase: it should add Tom rights documentation, route metadata, route-status wording, NOTICE permission boundaries, and a release checklist gate before downstream phases make Tom operational. [VERIFIED: .planning/ROADMAP.md] The safest implementation path is to treat `gated-authorized` as a maintained status token, keep Tom `default=false`, and make every public surface describe Tom as a protected-character route that is release-gated for public samples. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

The codebase already has the right shape for this work: `references/routing.md` is the route contract table, `NOTICE.md` is the attribution surface, README/examples/release checklist are the public route-status surfaces, and `scripts/validate-skill-package.mjs` is a dependency-free Node validator with table parsing, marker checks, route defaults, reference path safety, docs markers, and public example asset scans. [VERIFIED: grep]

Official Warner Bros. pages identify Tom and Jerry as a Warner Bros. brand page and Warner Bros. Entertainment Inc. as the organization behind the site; Warner's clip/still licensing page states that requests to use clips, stills, posters, TV, animation, and related library material must be submitted in writing, so Phase 6 should avoid turning attribution into a broad permission claim. [CITED: https://www.warnerbros.com/brands/tom-and-jerry] [CITED: https://www.warnerbros.com/studio/services/clip-and-still-licensing]

**Primary recommendation:** Implement the smallest auditable contract: `rights.md`, Tom route row, NOTICE boundary wording, shared `gated-authorized` status wording in README/examples/checklist, and a release checklist public-sample approval marker; add validator markers only for these Phase 6 contract surfaces. [VERIFIED: grep]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Tom rights record | Documentation / Reference pack | Release review | `references/ips/tom/rights.md` is the locked audit artifact consumed by maintainers. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| Tom route metadata | Skill reference contract | Skill controller in Phase 8 | `references/routing.md` owns route ids, aliases, defaults, suffixes, required references, attribution context, and status. [VERIFIED: grep] |
| NOTICE attribution-permission boundary | Public repository docs | Release review | `NOTICE.md` already carries Ian and Littlebox attribution and is the right surface for Tom source context plus authorization-scope wording. [VERIFIED: grep] |
| Route-status wording | Public docs and release docs | Validator markers | README, examples, routing docs, and release checklist must share `gated-authorized` wording. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| Public rendered sample gate | Release checklist | Validator marker scan | Public example asset directories are release surfaces; approval should be explicit in `RELEASE_CHECKLIST.md`. [VERIFIED: grep] |
| Deterministic verification | Local Node script | Node test runner in later phase | Existing validator uses built-in Node modules and marker checks, matching the lightweight package constraint. [VERIFIED: grep] |

## Project Constraints (from AGENTS.md)

- Every user-facing reply from agents must begin with `爸爸`. [VERIFIED: AGENTS.md]
- User-facing replies must be Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request titles/descriptions must be English. [VERIFIED: AGENTS.md]
- Work should start from original need, constraints, and desired outcome. [VERIFIED: AGENTS.md]
- Direct positive claims are preferred; negation-based contrast phrasing is prohibited in user-facing replies. [VERIFIED: AGENTS.md]
- Before file-changing tools, work should start through a GSD command unless the user explicitly asks to bypass it; this request is a GSD research-agent invocation, so writing the research artifact is the agent's canonical output. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml`. [VERIFIED: AGENTS.md]
- Existing Xiaohei behavior and documented prompts must keep working. [VERIFIED: AGENTS.md]
- Xiaohei, Littlebox, and Tom rules must remain separately readable, testable, and routable. [VERIFIED: AGENTS.md]
- Preserve MIT license notices and derived documentation attribution for Ian and okooo5km. [VERIFIED: AGENTS.md]
- Keep the project as a lightweight skill package; validation can be script-based and should avoid a full app framework. [VERIFIED: AGENTS.md]
- Final image generation depends on host agent `image_gen`. [VERIFIED: AGENTS.md]

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Markdown | N/A | Rights docs, routing docs, README, examples, NOTICE, release checklist | The package is documentation-first and already uses Markdown for skill and reference contracts. [VERIFIED: grep] |
| Node.js built-ins | v24.13.0 available | Deterministic validator and `node:test` tests | Existing validator imports `node:fs`, `node:path`, `node:process`, and tests use built-in `node:test` and `node:assert/strict`. [VERIFIED: command] |
| Git | 2.50.1 available | Commit research and later implementation | Project workflow uses git state and commit docs is enabled. [VERIFIED: command] |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| ripgrep | 15.1.0 available | Fast marker and contract scans | Use for verifying route-status token consistency and Tom surface coverage. [VERIFIED: command] |
| curl | available via shell fetch | Official source checks | Use for source provenance checks where official pages are needed. [VERIFIED: command] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Dependency-free Node validator | `markdownlint`, Jest, Vitest, or a schema package | External dependencies increase package footprint and add install steps; Phase 6 needs marker-level contract checks that the existing script already supports. [VERIFIED: grep] |
| Markdown table route contract | JSON/YAML route manifest | A machine-readable manifest is a v2 idea in requirements; Phase 6 should extend the existing table contract. [VERIFIED: .planning/REQUIREMENTS.md] |

**Installation:**

```bash
# No package install is required for Phase 6. [VERIFIED: grep]
```

**Version verification:** Node.js v24.13.0, git 2.50.1, and ripgrep 15.1.0 are available in this environment. [VERIFIED: command]

## Package Legitimacy Audit

Phase 6 should install no external packages. [VERIFIED: grep]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| None | N/A | N/A | N/A | N/A | N/A | Approved: no external package install. [VERIFIED: grep] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: grep]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: grep]

## Architecture Patterns

### System Architecture Diagram

```text
Maintainer / release reviewer
  |
  v
Tom rights record: references/ips/tom/rights.md
  | fields: source, rights holder, authorization scope, allowed use,
  | restricted use, distribution boundary, sample policy, review owner
  v
Route contract: references/routing.md
  | id=tom, aliases, default=false, suffix=tom, status=gated-authorized
  v
Public release surfaces
  | README.md + examples/prompts.md + NOTICE.md + RELEASE_CHECKLIST.md
  v
Local validation
  | marker checks + route row checks + public sample gate checks
  v
Planner / release gate decision
  | remain gated / activate later / withhold public samples
```

This data flow matches the existing documentation-first architecture, where `SKILL.md` and reference Markdown files define behavior while image generation stays host-provided. [VERIFIED: grep]

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── references/
│   ├── routing.md                  # Route contract table with Tom row. [VERIFIED: grep]
│   └── ips/
│       └── tom/
│           └── rights.md           # Phase 6 rights audit record. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
README.md                           # Public route-status wording. [VERIFIED: grep]
examples/prompts.md                 # Smoke/status wording surface. [VERIFIED: grep]
NOTICE.md                           # Attribution and permission boundary. [VERIFIED: grep]
RELEASE_CHECKLIST.md                # Public-sample approval gate. [VERIFIED: grep]
scripts/validate-skill-package.mjs  # Optional Phase 6 marker checks. [VERIFIED: grep]
```

### Pattern 1: Rights Record as Explicit Audit Fields

**What:** Create a compact Tom rights document with one heading per locked field: source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

**When to use:** Use this in Phase 6 because maintainers need a release-review artifact before Tom becomes operational. [VERIFIED: .planning/ROADMAP.md]

**Example:**

```markdown
# Tom Rights Record

## Source
Tom from Tom and Jerry. [CITED: https://www.warnerbros.com/brands/tom-and-jerry]

## Rights Holder
Warner Bros. Entertainment Inc. / applicable Warner Bros. Discovery rights entities. [CITED: https://www.warnerbros.com/brands/tom-and-jerry]

## Authorization Scope
Record the project-specific authorization scope, review date, reviewer, and approved use boundary. [ASSUMED]
```

### Pattern 2: Route Row as Contract Source

**What:** Add a Tom row to the existing `IP Routes` Markdown table with the locked metadata fields. [VERIFIED: grep]

**When to use:** Use this because the validator already parses the `IP Routes` Markdown table and existing route docs use table rows as the route contract. [VERIFIED: grep]

**Example:**

```markdown
| `tom` | Tom | `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫` | `false` | `tom` | `references/ips/tom/index.md`; `references/ips/tom/rights.md`; `references/ips/tom/style-dna.md`; `references/ips/tom/tom-ip.md`; `references/ips/tom/composition-patterns.md`; `references/ips/tom/prompt-template.md`; `references/ips/tom/qa-checklist.md` | Tom and Jerry / Tom source context; attribution records source identity while permission remains authorization-scope specific | `gated-authorized` |
```

The row can reference future Tom pack files because Phase 6 explicitly permits future pack paths and Phase 7 owns operational file content. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

### Pattern 3: Release Checklist as Public Sample Gate

**What:** Add an explicit checklist item recording public-sample approval before rendered Tom assets appear under `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

**When to use:** Use this because public example images are committed release-surface assets and existing validator scans public example directories. [VERIFIED: grep]

**Example:**

```markdown
## Tom Rights and Public Sample Gate

- [ ] Tom rights record reviewed in `ian-xiaohei-illustrations/references/ips/tom/rights.md`.
- [ ] Tom route status is `gated-authorized` across routing docs, README, examples, and this checklist.
- [ ] Public rendered Tom samples approved for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: APPROVED / reviewer / date.
```

### Anti-Patterns to Avoid

- **Broad availability wording:** Treat Tom as protected and release-gated while status is `gated-authorized`; keep public docs aligned with this token. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
- **Permission hidden inside attribution:** NOTICE should separate source context from authorization scope. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
- **Rendered Tom assets in public examples before approval:** Public rendered examples should wait for the explicit release checklist approval marker. [VERIFIED: .planning/REQUIREMENTS.md]
- **Phase 7 content creep:** Phase 6 owns `rights.md`; identity, style, prompt, composition, and QA files are Phase 7 scope. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
- **Making Tom the default:** Xiaohei remains the only default route and Tom must use `default=false`. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route metadata storage | New parser format or manifest | Existing `routing.md` Markdown table | Current validator already parses Markdown tables and route rows. [VERIFIED: grep] |
| Rights/legal review workflow | Free-form scattered notes | Fixed-field `rights.md` plus release checklist marker | Locked fields make release review auditable. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| Public sample enforcement | Manual memory | Checklist marker plus optional validator scan | Existing validator already scans public example asset directories for IP boundary markers. [VERIFIED: grep] |
| Test framework | Jest/Vitest install | Built-in Node script and `node:test` | The repository already uses dependency-free Node validation. [VERIFIED: grep] |

**Key insight:** Phase 6 needs traceable release contracts, so the planner should prefer explicit text markers and deterministic scans over new infrastructure. [VERIFIED: grep]

## Common Pitfalls

### Pitfall 1: Treating Attribution as Permission

**What goes wrong:** A NOTICE section gives Tom source context and readers infer broad distribution or generated-sample rights. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
**Why it happens:** Existing Ian and Littlebox NOTICE sections are attribution-oriented; Tom adds a protected-character authorization boundary. [VERIFIED: grep]
**How to avoid:** Write separate paragraphs or bullets for `Attribution context` and `Permission boundary`. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
**Warning signs:** Phrases that imply normal bundled availability while route status is `gated-authorized`. [VERIFIED: .planning/REQUIREMENTS.md]

### Pitfall 2: Inconsistent Route Status Tokens

**What goes wrong:** One surface says active, another says gated, and the release reviewer cannot tell which rule controls. [VERIFIED: .planning/REQUIREMENTS.md]
**Why it happens:** Route status appears in `routing.md`, README, examples, and checklist. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
**How to avoid:** Use exact token `gated-authorized` in every Phase 6 status surface. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
**Warning signs:** README or examples invite public generated Tom samples while checklist approval is pending. [VERIFIED: .planning/REQUIREMENTS.md]

### Pitfall 3: Validator Overreach

**What goes wrong:** Phase 6 attempts the full Phase 10 validation matrix and blocks on future Tom pack files. [VERIFIED: .planning/ROADMAP.md]
**Why it happens:** `routing.md` required references can point to Phase 7 files before they exist. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
**How to avoid:** For Phase 6, validate Tom rights file, route row, status markers, NOTICE boundary, and sample gate; defer full Tom canonical pack checks to Phase 10. [VERIFIED: .planning/ROADMAP.md]
**Warning signs:** Validator fails only because Phase 7 operational files are absent. [VERIFIED: grep]

### Pitfall 4: Existing Validator Baseline Failure

**What goes wrong:** Current validator fails at `BOUNDARY-P5-001` because `.planning/phases/04-validation-hardening/04-CONTEXT.md` is absent in this checkout. [VERIFIED: command]
**Why it happens:** The validator contains a historical Phase 4/Phase 5 boundary check that reads planning files currently absent from disk. [VERIFIED: command]
**How to avoid:** Planner should either repair or scope around this baseline failure before using validator pass/fail as the Phase 6 gate. [VERIFIED: command]
**Warning signs:** `node scripts/validate-skill-package.mjs` reports `33 passed, 1 failed`; `node --test scripts/validate-skill-package.test.mjs` fails because the validator exits status 1. [VERIFIED: command]

## Code Examples

Verified patterns from current project sources:

### Markdown Table Parser Contract

```javascript
// Source: scripts/validate-skill-package.mjs [VERIFIED: grep]
export function parseMarkdownTable(text, headingText) {
  const body = bodyAfterHeading(text, headingText);
  const lines = body.split("\n").map((line) => line.trim());
  const tableStart = lines.findIndex((line) => line.startsWith("|") && line.endsWith("|"));
  if (tableStart === -1 || tableStart + 2 >= lines.length) return [];
  // Existing parser maps columns to row values, so route metadata should stay table-shaped.
}
```

### Safe Reference Path Contract

```javascript
// Source: scripts/validate-skill-package.mjs [VERIFIED: grep]
function safeReferencePath(routeReferencePath) {
  if (!routeReferencePath.startsWith("references/")) {
    throw new Error(`${routeReferencePath} must start with references/`);
  }
  return safePackagePath(routeReferencePath);
}
```

### Output Token Contract

```javascript
// Source: scripts/validate-skill-package.mjs [VERIFIED: grep]
export function outputPathTokens() {
  return {
    raw: ["assets/<article-slug>-illustrations/", "assets/<article-slug>-littlebox/"],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
    ],
  };
}
```

For Phase 6, planner can extend this token list with Tom raw and escaped paths if it chooses a validator update. [VERIFIED: grep]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Two route package: Xiaohei default and Littlebox explicit | Three-route milestone with Tom as protected `gated-authorized` route | v1.1 roadmap dated 2026-06-13 | Route status and rights gates become part of the implementation contract. [VERIFIED: .planning/ROADMAP.md] |
| Attribution-only NOTICE for Ian/Littlebox | Tom NOTICE separates source attribution from permission scope | Phase 6 locked decision | Maintainers can audit public distribution language. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| Public example asset gate focused on Littlebox import boundary | Tom public rendered sample gate tied to release checklist approval | Phase 6 locked decision | Rendered Tom public samples stay blocked until approval is recorded. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |

**Deprecated/outdated:**
- Treating all visual IP routes as equally publishable after attribution is recorded is outdated for the Tom route; Tom requires authorization-scope review and public-sample approval. [VERIFIED: .planning/PROJECT.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The exact project-specific Tom authorization scope, reviewer identity, and approval date are available to maintainers outside the repository. [ASSUMED] | Architecture Patterns / Rights Record | Rights document may need placeholders or a maintainer checkpoint before activation. |
| A2 | The route row can include all future Tom pack paths plus `rights.md` in `required_references`. [ASSUMED] | Architecture Patterns / Route Row | Validator planning must decide whether Phase 6 checks allow future missing operational files. |
| A3 | File-name scanning for `tom`, `tom-cat`, `tom-and-jerry`, `汤姆`, or `汤姆猫` is sufficient as a Phase 6 public-sample gate. [ASSUMED] | Don't Hand-Roll / Common Pitfalls | Generated Tom assets with neutral names could bypass marker-only validation until Phase 10 hardening. |

## Open Questions

1. **What exact Tom authorization scope should `rights.md` record?** [ASSUMED]
   - What we know: Phase 6 requires source, rights holder, authorization scope, allowed use, restricted use, distribution boundary, sample policy, and review owner. [VERIFIED: .planning/REQUIREMENTS.md]
   - What's unclear: The project-specific approval text, approver, date, and permitted distribution channels are not in the repo. [VERIFIED: grep]
   - Recommendation: Planner should create `rights.md` with explicit fields and require maintainer-provided values for any authorization fields that cannot be sourced from project docs. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]

2. **Should Phase 6 update the validator or leave all validation hardening to Phase 10?** [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
   - What we know: Context gives planner discretion for a lightweight validator update if needed. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
   - What's unclear: Whether the phase gate requires automated enforcement now. [ASSUMED]
   - Recommendation: Add minimal marker checks for `rights.md`, Tom route row, `gated-authorized`, NOTICE boundary, and sample approval marker; leave full tests and three-route parser hardening to Phase 10. [VERIFIED: grep]

3. **Should the current `BOUNDARY-P5-001` baseline failure be fixed in Phase 6?** [VERIFIED: command]
   - What we know: Current validator and validator tests fail because a Phase 4 planning file is missing. [VERIFIED: command]
   - What's unclear: Whether this missing planning artifact is expected after v1.1 roadmap reset. [ASSUMED]
   - Recommendation: Planner should include an early validation-baseline task: either update the historical boundary check or document it as a pre-existing blocker before adding Tom checks. [VERIFIED: command]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | `scripts/validate-skill-package.mjs` and `node --test` | Yes | v24.13.0 [VERIFIED: command] | Use current shell Node. |
| Git | Commit research and implementation docs | Yes | 2.50.1 Apple Git-155 [VERIFIED: command] | None needed. |
| ripgrep | Marker audits | Yes | 15.1.0 [VERIFIED: command] | `grep` for simple scans. |
| curl / web access | Official Warner source checks | Yes | shell command succeeded [VERIFIED: command] | Browser/web fetch. |

**Missing dependencies with no fallback:** none found. [VERIFIED: command]

**Missing dependencies with fallback:** none found. [VERIFIED: command]

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | No user auth or service runtime exists in this phase. [VERIFIED: grep] |
| V3 Session Management | no | No session-bearing application exists in this phase. [VERIFIED: grep] |
| V4 Access Control | yes | Release checklist gate controls protected-character public samples. [VERIFIED: .planning/REQUIREMENTS.md] |
| V5 Input Validation | yes | Validator should keep route references inside `references/` and package paths inside the skill package. [VERIFIED: grep] |
| V6 Cryptography | no | Phase 6 has no secrets or cryptographic operations. [VERIFIED: grep] |

### Known Threat Patterns for Documentation-First Protected IP Route

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route reference path escape | Tampering | Use existing `safeReferencePath()` / `safePackagePath()` checks for route references. [VERIFIED: grep] |
| Unauthorized public sample distribution | Information Disclosure / Repudiation | Require release checklist approval marker before public rendered Tom assets. [VERIFIED: .planning/REQUIREMENTS.md] |
| Attribution misread as permission | Repudiation | Add explicit NOTICE boundary language and rights record fields. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md] |
| Default-route drift | Elevation of Privilege | Validate only Xiaohei has `default=true`; Tom remains `default=false`. [VERIFIED: grep] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md` - locked Phase 6 decisions, deferred scope, route metadata, and sample gate. [VERIFIED: grep]
- `.planning/REQUIREMENTS.md` - RGT-01 through RGT-04 and TOMR-05. [VERIFIED: grep]
- `.planning/ROADMAP.md` - Phase 6 goal, success criteria, dependencies, and downstream phase boundaries. [VERIFIED: grep]
- `.planning/PROJECT.md` and `.planning/STATE.md` - v1.1 protected Tom milestone and current planning concerns. [VERIFIED: grep]
- `AGENTS.md` - project reply, language, workflow, documentation, and package constraints. [VERIFIED: grep]
- `ian-xiaohei-illustrations/references/routing.md` - current route table, columns, route defaults, output paths, and status pattern. [VERIFIED: grep]
- `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` - existing deterministic validator and test architecture. [VERIFIED: grep]
- Warner Bros. Tom and Jerry brand page - Tom and Jerry official brand context. [CITED: https://www.warnerbros.com/brands/tom-and-jerry]
- Warner Bros. clip and still licensing page - written request pattern for Warner library material use. [CITED: https://www.warnerbros.com/studio/services/clip-and-still-licensing]
- Warner Bros. Terms of Use, updated May 7, 2025 - Warner online service terms source. [CITED: https://www.warnerbros.com/terms-use]

### Secondary (MEDIUM confidence)

- None used. [VERIFIED: grep]

### Tertiary (LOW confidence)

- None used. [VERIFIED: grep]

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - current repository and shell probes confirm Markdown plus dependency-free Node validation. [VERIFIED: grep]
- Architecture: HIGH - Phase 6 surfaces and ownership are explicitly locked in context and existing file structure. [VERIFIED: .planning/phases/06-tom-rights-and-route-contract/06-CONTEXT.md]
- Pitfalls: HIGH - pitfalls are derived from locked decisions, current validator behavior, and official Warner source boundaries. [VERIFIED: grep] [CITED: https://www.warnerbros.com/studio/services/clip-and-still-licensing]

**Research date:** 2026-06-13 [VERIFIED: date]
**Valid until:** 2026-07-13 for internal architecture; re-check official Warner and project-specific authorization wording before public Tom release. [ASSUMED]
