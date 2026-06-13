# Phase 11: Ferris Source and Route Contract - Research

**Researched:** 2026-06-13 [VERIFIED: init.phase-op]
**Domain:** Documentation-first Codex Skill route/source/trademark contract with dependency-free Node validation [VERIFIED: codebase grep]
**Confidence:** HIGH for local contract surfaces and official source facts; MEDIUM for exact legal interpretation because implementation should paraphrase policy boundaries and preserve maintainer review gates [VERIFIED: codebase grep] [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

<user_constraints>
## User Constraints (from CONTEXT.md)

All constraints in this section are copied verbatim from `.planning/phases/11-ferris-source-and-route-contract/11-CONTEXT.md`. [VERIFIED: codebase grep]

### Locked Decisions

### Ferris Source Record

- **D-01:** Create the Ferris source record at `ian-xiaohei-illustrations/references/ips/ferris/source.md`.
- **D-02:** Use the Tom rights record as the structural precedent, adapted for an open-source mascot source record rather than an authorization record.
- **D-03:** The source record must include these sections: Source, Author and Source Sites, Copyright Waiver, Trademark Boundary, Route Status, Allowed Use, Restricted Use, Distribution Boundary, Sample Policy, and Review Owner.
- **D-04:** The source record must name `rustacean.net`, Karen Rustad Tolva, the CC0/public-domain dedication context, and the Rust Foundation trademark policy context from project requirements. Downstream research must verify the current upstream wording before implementation edits.
- **D-05:** The source record is the Phase 11 authority for source/trademark context. Phase 12 Ferris pack files can reference it once the pack exists.

### Route Metadata

- **D-06:** Add Ferris metadata to `ian-xiaohei-illustrations/references/routing.md` in the existing route table shape: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-07:** Ferris route metadata uses `id=ferris`, `display_name=Ferris`, `default=false`, `output_suffix=ferris`, and explicit aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`.
- **D-08:** Ferris route status should be `source-reviewed` for Phase 11. This records that source/trademark boundaries are documented while runtime behavior and canonical pack integration are still pending later phases.
- **D-09:** Ferris `required_references` should include only Phase 11 contract references in this phase: `references/ips/ferris/source.md`. Later phases can expand the row with `index.md`, identity, style, composition, prompt, and QA references after those files exist.
- **D-10:** Mixed-IP route wording should extend the existing separate route-group language to name Xiaohei, Littlebox, Tom, and Ferris, while preserving Xiaohei as the only omitted-IP default.

### NOTICE and Trademark Boundary

- **D-11:** Add a Ferris section to `NOTICE.md` titled `Ferris Source Attribution and Rust Trademark Boundary`.
- **D-12:** NOTICE must separate Ferris source attribution from Rust trademark or endorsement status. The wording should say that Ferris source context records author/source/copyright-waiver information, while Rust and Cargo marks, logos, and official-affiliation claims are governed by the Rust Foundation trademark policy.
- **D-13:** NOTICE should link the operational boundary to `ian-xiaohei-illustrations/references/ips/ferris/source.md` and keep the public statement short enough for downstream docs to reuse.
- **D-14:** The NOTICE entry should avoid broad availability or endorsement claims. It should state the Ferris route status, the source record path, and the source/trademark review boundary.

### Public Route-Status Wording and Sample Gate

- **D-15:** Use one reusable public route-status phrase across `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, and `ian-xiaohei-illustrations/references/routing.md`: `Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.`
- **D-16:** Phase 11 public docs should introduce only route status, aliases, output path tokens, source record path, and sample gate. Copyable Ferris prompt examples and full user-facing guidance belong to Phase 14.
- **D-17:** Public generated Ferris samples should stay gated by release checklist approval before appearing in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`.
- **D-18:** The gate must cover Rust-logo-forward composition, bundled Rust marks, official-affiliation cues, endorsement wording, and public rendered assets. It should record PENDING / reviewer / date / approval status / allowed directories / release channels.

### Minimal Validator Contract

- **D-19:** Phase 11 validator work should extend the existing dependency-free Node validator and tests in `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs`.
- **D-20:** Minimal Phase 11 checks should prove the Ferris route row, aliases, `default=false`, `output_suffix=ferris`, `required_references` contract, route status, source attribution context, source record file, NOTICE markers, release checklist gate, raw output token `assets/<article-slug>-ferris/`, and escaped token `assets/&lt;article-slug&gt;-ferris/`.
- **D-21:** Minimal Phase 11 tests should follow the existing fixture style: stable check ordering, a full-pass count update, route metadata drift failure, source marker drift failure, NOTICE boundary drift failure, and public sample gate failure/approval parsing.
- **D-22:** Phase 11 validator checks should stay bounded to contract surfaces. Full Ferris pack, prompt placeholders, QA markers, leakage gates, metadata docs, and four-route parser behavior expand in Phase 15.

### the agent's Discretion

- Auto mode selected all meaningful gray areas and chose the recommended contract-first options. The planner may choose exact check IDs and wording details, provided the decisions above remain true and existing Xiaohei, Littlebox, and Tom contracts stay stable.

### Deferred Ideas (OUT OF SCOPE)

- Full Ferris canonical pack files under `ian-xiaohei-illustrations/references/ips/ferris/` belong to Phase 12.
- Skill controller integration, selection behavior, four-IP variant grouping, and runtime output handling belong to Phase 13.
- Copyable Ferris prompt examples, agent metadata updates, and broad public docs expansion belong to Phase 14.
- Full Ferris validation hardening, leakage checks, prompt/QA marker checks, and four-route parser coverage belong to Phase 15.
</user_constraints>

## Summary

Phase 11 should create the auditable Ferris contract layer only: one Ferris source record, one route metadata row, one NOTICE boundary section, route-status/path/sample-gate wording in public docs, and bounded validator/test checks for those surfaces. [VERIFIED: codebase grep]

The official source facts support a `source-reviewed` status: `rustacean.net` presents Ferris as the unofficial mascot for Rust, provides Ferris asset variants, names Karen Rustad Tolva in the CC0 waiver block, and publishes the work from the United States. [CITED: https://rustacean.net/] The Rust Foundation policy makes Rust/Cargo names and logos trademark-governed and requires use to avoid appearing official, affiliated, or endorsed without written permission. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

**Primary recommendation:** Use Tom's rights-record and release-gate shapes as structural precedent, with Ferris-specific wording centered on source attribution, CC0/public-domain context, Rust trademark boundary, route status `source-reviewed`, and release-reviewed public samples. [VERIFIED: codebase grep] [CITED: https://rustacean.net/] [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FRGT-01 | Maintainer can read Ferris source, author, copyright waiver, reference URLs, Rust trademark policy context, endorsement boundary, allowed use, restricted use, distribution boundary, sample policy, and review owner in Ferris-specific documentation. [VERIFIED: .planning/REQUIREMENTS.md] | Create `ian-xiaohei-illustrations/references/ips/ferris/source.md` with the D-03 section list and official source notes. [VERIFIED: codebase grep] |
| FRGT-02 | Maintainer can distinguish Ferris source attribution from Rust trademark or official-affiliation permission in `NOTICE.md`. [VERIFIED: .planning/REQUIREMENTS.md] | Add a concise NOTICE section that links Ferris source attribution to `source.md` and routes Rust/Cargo marks/logos/official-affiliation claims to the Rust Foundation trademark policy. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] |
| FRGT-03 | Maintainer can keep Ferris route status explicit through wording shared by routing docs, README, examples, and release checklist. [VERIFIED: .planning/REQUIREMENTS.md] | Reuse the exact Phase 11 phrase from D-15 across `routing.md`, `README.md`, `examples/prompts.md`, and `RELEASE_CHECKLIST.md`. [VERIFIED: codebase grep] |
| FRGT-04 | Maintainer can verify that public Ferris examples avoid Rust-logo-forward claims, official endorsement language, and bundled Rust marks unless release review explicitly approves them. [VERIFIED: .planning/REQUIREMENTS.md] | Extend the Tom public-sample approval pattern with Ferris approval fields and validator parsing/checks. [VERIFIED: codebase grep] |
| FERR-05 | Maintainer can inspect Ferris route metadata, aliases, default flag, output suffix, required references, attribution context, source status, and trademark boundary in `references/routing.md`. [VERIFIED: .planning/REQUIREMENTS.md] | Add a Ferris route row with the locked metadata fields and source-reviewed status; keep `required_references` to `references/ips/ferris/source.md` in this phase. [VERIFIED: codebase grep] |
</phase_requirements>

## Project Constraints (from AGENTS.md)

- Every final user-facing reply must begin with `爸爸`, and user-facing replies must be Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request text must be English. [VERIFIED: AGENTS.md]
- Use direct, informative wording and avoid filler. [VERIFIED: AGENTS.md]
- Preserve Codex Skill compatibility through Markdown `SKILL.md`, local reference files, and `agents/openai.yaml` metadata. [VERIFIED: AGENTS.md]
- Existing `$ian-xiaohei-illustrations` behavior and documented Xiaohei prompts must keep working. [VERIFIED: AGENTS.md]
- Xiaohei, Littlebox, Tom, and Ferris rules must stay separately readable, testable, and routable. [VERIFIED: .planning/PROJECT.md]
- Preserve MIT notices and add Ferris source attribution for Karen Rustad Tolva and rustacean.net. [VERIFIED: .planning/PROJECT.md] [CITED: https://rustacean.net/]
- The repository remains a lightweight skill package with script-based validation and no full app framework. [VERIFIED: AGENTS.md]
- Before file-changing work in normal implementation, start through a GSD workflow entry point; this research run is itself a `$gsd-plan-phase 11` research artifact task. [VERIFIED: AGENTS.md]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Ferris source/trademark record | Documentation / Skill References | Release Governance | `source.md` is the route-local authority for source and trademark context, and release checklist gates public samples. [VERIFIED: codebase grep] |
| Ferris route metadata | Documentation / Skill References | Validator | `references/routing.md` is the existing route metadata table consumed by skill routing and validation. [VERIFIED: codebase grep] |
| NOTICE attribution boundary | Public Repository Docs | Release Governance | `NOTICE.md` carries public attribution and permission-boundary statements for Ian, Littlebox, and Tom. [VERIFIED: codebase grep] |
| Public route-status phrase | Public Repository Docs | Skill References | README, examples, release checklist, and routing docs need a shared reusable status phrase. [VERIFIED: 11-CONTEXT.md] |
| Public Ferris sample gate | Release Governance | Validator | `RELEASE_CHECKLIST.md` holds reviewer/date/status/allowed-directory records, and validator tests can parse pending versus approved records. [VERIFIED: codebase grep] |
| Minimal contract validation | Local Node Script | Node Test Runner | `scripts/validate-skill-package.mjs` and `node --test` are the existing dependency-free validation layer. [VERIFIED: command output] |

## External Source Notes

| URL | Facts to Use | Implementation Guidance |
|-----|--------------|-------------------------|
| `https://rustacean.net/` | The page presents Ferris as the unofficial mascot for Rust, offers original/flat/extra-cute/happy/gesturing variants, and includes a CC0 waiver statement naming Karen Rustad Tolva and Ferris the Rustacean with publication from the United States. [CITED: https://rustacean.net/] | Cite `rustacean.net`, Karen Rustad Tolva, Ferris the Rustacean, CC0/public-domain dedication context, and United States publication context in `source.md`. [CITED: https://rustacean.net/] |
| `https://rustfoundation.org/policy/rust-trademark-policy/` | The Rust Foundation policy says the Rust Foundation owns and protects Rust/Cargo trademarks and logos, governs Rust/Cargo names/logos through trademark, and requires trademark uses to avoid appearing official, affiliated, or endorsed without written permission. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] | Keep Ferris source attribution separate from Rust/Cargo trademark claims; gate Rust-logo-forward public samples and official-affiliation wording through release review. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] |
| `https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/` | The Rust Foundation article describes Karen Rustad Tolva as the original graphic designer of Ferris the crab and gives source-context background for Ferris creation. [CITED: https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/] | Use as optional background in `source.md`; keep `rustacean.net` as the source/copyright-waiver authority for Phase 11. [CITED: https://rustacean.net/] |

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| Node.js built-in runtime | `v24.13.0` on this machine | Runs `scripts/validate-skill-package.mjs` and `node --test`. [VERIFIED: command output] | Existing validator and tests use only Node built-ins: `fs`, `path`, `process`, `node:test`, `node:assert/strict`, and `node:child_process`. [VERIFIED: codebase grep] |
| Markdown | repo-local | Stores skill references, public docs, source records, release checklist, and planning artifacts. [VERIFIED: codebase grep] | The repository is documentation-first and has no package manifest or app runtime. [VERIFIED: AGENTS.md] |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| `curl` | system CLI | Fetch current official pages for source verification. [VERIFIED: command output] | Use when validating official external source facts during planning and implementation. [VERIFIED: command output] |
| `git diff --check` | Git CLI | Check whitespace before commit. [VERIFIED: RELEASE_CHECKLIST.md] | Run after Markdown/script edits. [VERIFIED: RELEASE_CHECKLIST.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Dependency-free Node validator | Add package-based Markdown/YAML parser | Current repo has no package manifest, and Phase 11 can reuse existing parser helpers. [VERIFIED: codebase grep] |

**Installation:**

No package installation is required for Phase 11. [VERIFIED: codebase grep]

## Package Legitimacy Audit

Phase 11 installs no external packages. [VERIFIED: codebase grep]

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| none | none | none | none | none | not run | Approved by absence of package installation. [VERIFIED: codebase grep] |

**Packages removed due to slopcheck [SLOP] verdict:** none. [VERIFIED: codebase grep]
**Packages flagged as suspicious [SUS]:** none. [VERIFIED: codebase grep]

## Architecture Patterns

### System Architecture Diagram

```text
Official sources
  ├─ rustacean.net Ferris/CC0 facts
  └─ Rust Foundation trademark policy
        |
        v
references/ips/ferris/source.md
        |
        v
references/routing.md Ferris row
        |
        +--> NOTICE.md source/trademark boundary
        +--> README.md + examples/prompts.md route-status/path markers
        +--> RELEASE_CHECKLIST.md public Ferris sample gate
        |
        v
scripts/validate-skill-package.mjs
        |
        v
scripts/validate-skill-package.test.mjs
```

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
└── references/
    ├── routing.md
    └── ips/
        └── ferris/
            └── source.md
NOTICE.md
README.md
examples/prompts.md
RELEASE_CHECKLIST.md
scripts/
├── validate-skill-package.mjs
└── validate-skill-package.test.mjs
```

### Pattern 1: Source Record Mirroring Tom Rights Shape

**What:** Create `references/ips/ferris/source.md` with the locked Phase 11 sections and Tom-like review fields. [VERIFIED: 11-CONTEXT.md]

**When to use:** Use for source/copyright/trademark/release-gate contract documentation before adding full Ferris identity, prompt, composition, or QA pack files. [VERIFIED: .planning/ROADMAP.md]

**Implementation-ready section list:** Source, Author and Source Sites, Copyright Waiver, Trademark Boundary, Route Status, Allowed Use, Restricted Use, Distribution Boundary, Sample Policy, Review Owner. [VERIFIED: 11-CONTEXT.md]

### Pattern 2: Bounded Route Metadata Row

**What:** Add a single Ferris row to the existing `IP Routes` table with `required_references` limited to `references/ips/ferris/source.md`. [VERIFIED: 11-CONTEXT.md]

**When to use:** Use in Phase 11 because later Ferris pack files are deferred to Phase 12. [VERIFIED: .planning/ROADMAP.md]

**Exact row values:** `id=ferris`, `display_name=Ferris`, `aliases=Ferris; Rust mascot; Rust crab; Rustacean; Rust 吉祥物; Rust 螃蟹`, `default=false`, `output_suffix=ferris`, `status=source-reviewed`. [VERIFIED: 11-CONTEXT.md]

### Pattern 3: Public Sample Gate Parser

**What:** Clone the `parsePublicTomSampleApproval` record shape for Ferris with reviewer/date/status/allowed-directories/release-channels fields. [VERIFIED: codebase grep]

**When to use:** Use when validator checks Ferris-rendered assets in `examples/images/` or `ian-xiaohei-illustrations/assets/examples/`. [VERIFIED: codebase grep]

**Important parser behavior:** Existing parser preserves path slashes by splitting the approval record on spaced slash separators and then normalizing allowed directory entries. [VERIFIED: codebase grep]

### Anti-Patterns to Avoid

- **Expanding into Phase 12 pack content:** Ferris identity, style, composition, prompt, edit, and QA files belong to Phase 12. [VERIFIED: .planning/ROADMAP.md]
- **Treating Ferris CC0 context as Rust trademark permission:** Rust/Cargo names and logos remain trademark-governed according to the Rust Foundation policy. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]
- **Publishing generated Ferris public samples without release-gate record:** Phase 11 gates public rendered assets through `RELEASE_CHECKLIST.md`. [VERIFIED: 11-CONTEXT.md]
- **Adding external validator dependencies:** The current project has no package manifest and validator is dependency-free Node. [VERIFIED: codebase grep]

## Exact Files to Modify Later

| File | Phase 11 Change | Requirement |
|------|-----------------|-------------|
| `ian-xiaohei-illustrations/references/ips/ferris/source.md` | Create new source/trademark record with locked sections and official source notes. [VERIFIED: 11-CONTEXT.md] | FRGT-01 |
| `ian-xiaohei-illustrations/references/routing.md` | Add Ferris route rule, table row, output path token, mixed-IP wording, and shared public route-status phrase. [VERIFIED: 11-CONTEXT.md] | FRGT-03, FERR-05 |
| `NOTICE.md` | Add `Ferris Source Attribution and Rust Trademark Boundary` section. [VERIFIED: 11-CONTEXT.md] | FRGT-02 |
| `README.md` | Add limited Phase 11 route-status/path/source-record/sample-gate wording. [VERIFIED: 11-CONTEXT.md] | FRGT-03 |
| `examples/prompts.md` | Add limited Phase 11 route-status/path/source-record/sample-gate wording while leaving copyable Ferris prompts to Phase 14. [VERIFIED: 11-CONTEXT.md] | FRGT-03 |
| `RELEASE_CHECKLIST.md` | Add Ferris source review and public generated-sample gate with PENDING/reviewer/date/status/allowed directories/release channels. [VERIFIED: 11-CONTEXT.md] | FRGT-04 |
| `scripts/validate-skill-package.mjs` | Add minimal Phase 11 checks and likely repair current baseline failure tied to missing Phase 4 planning context. [VERIFIED: command output] | FRGT-01 through FRGT-04, FERR-05 |
| `scripts/validate-skill-package.test.mjs` | Add Ferris fixture tests and update full-pass matrix count/order after validator changes. [VERIFIED: codebase grep] | FRGT-04, FERR-05 |

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Markdown route parsing | A new parser stack | Existing `parseMarkdownTable`, `splitRouteCell`, and `routeById` helpers. [VERIFIED: codebase grep] | They already parse the `IP Routes` table and route reference cells. [VERIFIED: codebase grep] |
| Output path token inventory | Scattered string checks | Extend `outputPathTokens()` with Ferris raw and escaped tokens. [VERIFIED: codebase grep] | Existing docs checks read this helper. [VERIFIED: codebase grep] |
| Public sample approval parsing | A separate approval model | Adapt `parsePublicTomSampleApproval` into a generic or Ferris-specific parser. [VERIFIED: codebase grep] | Existing tests cover pending and approved parsing behavior. [VERIFIED: codebase grep] |
| Legal/trademark interpretation | Broad project-specific legal claims | Short source/trademark boundary wording plus maintainer release review. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] | Official policy language centers on avoiding official/affiliated/endorsed appearance. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] |

**Key insight:** Phase 11 is a contract-hardening phase, so the highest-value work is stable wording, route metadata, and validator coverage for the contract surface. [VERIFIED: .planning/ROADMAP.md]

## Common Pitfalls

### Pitfall 1: Source Attribution Expands into Trademark Permission

**What goes wrong:** Documentation states or implies that Ferris source context grants permission around Rust/Cargo marks or official affiliation. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

**Why it happens:** Ferris has permissive copyright source context, while Rust/Cargo names and logos remain trademark-governed. [CITED: https://rustacean.net/] [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

**How to avoid:** Use separate headings and wording for Ferris source attribution and Rust trademark/endorsement boundary. [VERIFIED: 11-CONTEXT.md]

**Warning signs:** Wording such as official, original, only, endorsed, affiliated, Rust logo bundle, or release-ready public sample appears without a recorded release review. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] [VERIFIED: 11-CONTEXT.md]

### Pitfall 2: Validator Baseline Failure Masks Ferris Work

**What goes wrong:** `node scripts/validate-skill-package.mjs` exits nonzero before Ferris checks because `BOUNDARY-P5-001` expects `.planning/phases/04-validation-hardening/04-CONTEXT.md`, which is absent in the current checkout. [VERIFIED: command output]

**Why it happens:** The current validator includes a historical Phase 5 boundary check tied to a planning file that is absent after v1.2 initialization. [VERIFIED: command output]

**How to avoid:** Plan an initial validator baseline repair inside 11-03 before adding Ferris checks, then rerun validator and tests. [VERIFIED: command output]

**Warning signs:** Validator summary shows `total=47 passed=46 failed=1 skipped=0`, and Node tests fail on assertions expecting validator status 0. [VERIFIED: command output]

### Pitfall 3: Premature Required References

**What goes wrong:** The Ferris route row points to Phase 12 pack files before those files exist. [VERIFIED: 11-CONTEXT.md]

**Why it happens:** Tom currently has a full seven-file pack, while Ferris Phase 11 has only the source record. [VERIFIED: codebase grep]

**How to avoid:** Keep Phase 11 `required_references` to `references/ips/ferris/source.md`; expand in Phase 12. [VERIFIED: 11-CONTEXT.md]

**Warning signs:** `ROUTE-REFS-001` fails for missing Ferris files or a planner asks Phase 11 to create identity/style/prompt/QA files. [VERIFIED: codebase grep]

### Pitfall 4: Public Docs Drift Across Four Surfaces

**What goes wrong:** README, examples, routing, and release checklist describe different Ferris statuses or sample rules. [VERIFIED: 11-CONTEXT.md]

**Why it happens:** Existing docs repeat route status and output path markers across multiple files. [VERIFIED: codebase grep]

**How to avoid:** Use the exact D-15 phrase in all required surfaces and validate it with marker checks. [VERIFIED: 11-CONTEXT.md]

**Warning signs:** One file uses `active`, another uses `source-reviewed`, or sample wording omits release review. [VERIFIED: 11-CONTEXT.md]

## Code Examples

Verified local patterns from current codebase:

### Route Row Parsing

```javascript
// Source: scripts/validate-skill-package.mjs [VERIFIED: codebase grep]
function routeRows() {
  return parseMarkdownTable(requireFile(ROUTING_FILE), "IP Routes");
}

function routeById(id) {
  const row = routeRows().find((route) => route.id === id);
  if (!row) {
    throw new Error(`${ROUTING_FILE} expected route row id=${id}; observed row is missing`);
  }
  return row;
}
```

### Output Path Tokens

```javascript
// Source: scripts/validate-skill-package.mjs [VERIFIED: codebase grep]
export function outputPathTokens() {
  return {
    raw: [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
    ],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
      "assets/&lt;article-slug&gt;-tom/",
    ],
  };
}
```

### Approval Fixture Shape

```javascript
// Source: scripts/validate-skill-package.test.mjs [VERIFIED: codebase grep]
const approvedText = releaseChecklistText.replace(
  "- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.",
  "- [x] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: APPROVED / Jane Reviewer / 2026-06-13 / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes.",
);
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual-only package QA | Dependency-free Node validator plus `node --test` fixtures | Established by prior phases and current Phase 10 baseline. [VERIFIED: .planning/STATE.md] | Phase 11 should add checks in the existing matrix. [VERIFIED: codebase grep] |
| Two-IP route table | Three shipped routes: Xiaohei, Littlebox, Tom | Phase 10 baseline. [VERIFIED: codebase grep] | Ferris becomes the fourth row but Phase 11 keeps runtime selection pending. [VERIFIED: .planning/ROADMAP.md] |
| Protected character rights gate for Tom | Source/trademark-aware mascot gate for Ferris | Phase 11 planning. [VERIFIED: 11-CONTEXT.md] | Ferris record uses source attribution and trademark boundary rather than Tom-style authorization scope. [VERIFIED: 11-CONTEXT.md] |

**Deprecated/outdated:** `.planning/codebase/TESTING.md` describes an older manual-only baseline; live validation behavior is in `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `.planning/STATE.md`, and recent validator command output. [VERIFIED: 11-CONTEXT.md] [VERIFIED: command output]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Exact legal interpretation should stay behind maintainer review, while implementation uses concise attribution/trademark boundary wording. [ASSUMED] | Summary / External Source Notes | Overconfident legal wording could create release risk. |

## Open Questions

1. **Exact reviewer identity for Ferris public sample approval**
   - What we know: Release gate must record reviewer, date, approval status, allowed directories, and release channels. [VERIFIED: 11-CONTEXT.md]
   - What's unclear: The named reviewer is not selected in current planning context. [VERIFIED: codebase grep]
   - Recommendation: Keep Phase 11 checklist record as PENDING until maintainer review fills it. [VERIFIED: 11-CONTEXT.md]

2. **Whether to genericize public sample approval parser**
   - What we know: Existing Tom parser is route-specific and covered by tests. [VERIFIED: codebase grep]
   - What's unclear: Phase 11 can either add `parsePublicFerrisSampleApproval` or refactor toward a route-param parser. [VERIFIED: codebase grep]
   - Recommendation: Prefer the smallest clear implementation: add Ferris parsing with shared helper extraction only if it reduces duplication in the same file. [ASSUMED]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Validator and Node tests | yes [VERIFIED: command output] | `v24.13.0` [VERIFIED: command output] | none needed |
| Git | Commit research artifact and future implementation | yes [VERIFIED: command output] | system Git available via `git status` [VERIFIED: command output] | none needed |
| Network / curl | Official source verification | yes [VERIFIED: command output] | system curl available via successful fetches [VERIFIED: command output] | browser/manual source review |

**Missing dependencies with no fallback:** none. [VERIFIED: command output]

**Missing dependencies with fallback:** none. [VERIFIED: command output]

## Validation Architecture

Local validator and test commands are necessary and sufficient for Phase 11 research and implementation because the phase changes Markdown contracts plus a dependency-free Node validator, and `.planning/config.json` explicitly sets `workflow.nyquist_validation=false`. [VERIFIED: .planning/config.json] [VERIFIED: codebase grep]

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Node built-in `node:test` under Node `v24.13.0`. [VERIFIED: command output] |
| Config file | none. [VERIFIED: codebase grep] |
| Quick run command | `node scripts/validate-skill-package.mjs` [VERIFIED: RELEASE_CHECKLIST.md] |
| Full suite command | `node --test scripts/validate-skill-package.test.mjs` [VERIFIED: RELEASE_CHECKLIST.md] |

### Current Baseline

| Command | Current Result | Planning Impact |
|---------|----------------|-----------------|
| `node scripts/validate-skill-package.mjs` | Fails with `Summary: total=47 passed=46 failed=1 skipped=0`; failing check is `BOUNDARY-P5-001` for missing `.planning/phases/04-validation-hardening/04-CONTEXT.md`. [VERIFIED: command output] | Plan 11-03 should repair this baseline before asserting Ferris checks pass. |
| `node --test scripts/validate-skill-package.test.mjs` | Fails 5 of 15 tests because several tests expect validator exit status 0, and the fixture approval test also inherits the same validator baseline failure. [VERIFIED: command output] | Test plan should update fixtures and full-pass expectations after baseline repair and Ferris checks. |

### Phase Requirements to Validation Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FRGT-01 | Ferris source record has required sections and source/trademark markers. [VERIFIED: .planning/REQUIREMENTS.md] | validator + fixture mutation | `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` | source file pending Phase 11 |
| FRGT-02 | NOTICE separates Ferris source attribution from Rust trademark/endorsement boundary. [VERIFIED: .planning/REQUIREMENTS.md] | validator + fixture mutation | same as above | NOTICE exists |
| FRGT-03 | Shared route-status phrase appears in routing docs, README, examples, and release checklist. [VERIFIED: 11-CONTEXT.md] | validator marker check | same as above | files exist |
| FRGT-04 | Public Ferris sample gate blocks public rendered assets until approval record is complete. [VERIFIED: 11-CONTEXT.md] | fixture mutation with pending/approved records | same as above | release checklist exists |
| FERR-05 | Ferris route metadata row exposes aliases, default flag, output suffix, source status, attribution context, and required reference. [VERIFIED: .planning/REQUIREMENTS.md] | validator + parser helper test | same as above | routing file exists |

### Sampling Rate

- **Per task commit:** `node scripts/validate-skill-package.mjs` after any contract-surface edit. [VERIFIED: RELEASE_CHECKLIST.md]
- **Per plan completion:** `node --test scripts/validate-skill-package.test.mjs` after validator/test edits. [VERIFIED: RELEASE_CHECKLIST.md]
- **Phase gate:** `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` should pass before verification. [VERIFIED: RELEASE_CHECKLIST.md]

### Wave 0 Gaps

- [ ] Repair or retire the stale `BOUNDARY-P5-001` dependency on missing `.planning/phases/04-validation-hardening/04-CONTEXT.md`. [VERIFIED: command output]
- [ ] Add Ferris source/NOTICE/route/release checklist fixture tests and update full matrix count. [VERIFIED: 11-CONTEXT.md]

## Security Domain

Security enforcement is enabled in `.planning/config.json`, but Phase 11 changes documentation contracts and local validation only. [VERIFIED: .planning/config.json]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication surface in Phase 11. [VERIFIED: codebase grep] |
| V3 Session Management | no | No session surface in Phase 11. [VERIFIED: codebase grep] |
| V4 Access Control | no | No runtime access-control surface in Phase 11. [VERIFIED: codebase grep] |
| V5 Input Validation | yes | Validate route-table cells, required references, path markers, and release checklist records with existing Node checks. [VERIFIED: codebase grep] |
| V6 Cryptography | no | No cryptographic surface in Phase 11. [VERIFIED: codebase grep] |

### Known Threat Patterns for Documentation-Driven Skill Packages

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Trademark/endorsement confusion in public docs | Spoofing / Repudiation | Use source/trademark boundary wording and public-sample release gate. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/] |
| Route metadata drift | Tampering | Validator checks for exact Ferris aliases, status, output suffix, and required references. [VERIFIED: codebase grep] |
| Path traversal in required references | Tampering | Existing `safeReferencePath` requires `references/` prefix and blocks paths escaping the package root. [VERIFIED: codebase grep] |

## Sources

### Primary (HIGH confidence)

- `https://rustacean.net/` - Ferris unofficial mascot wording, asset variants, CC0 waiver context, Karen Rustad Tolva, and United States publication context. [CITED: https://rustacean.net/]
- `https://rustfoundation.org/policy/rust-trademark-policy/` - Rust/Cargo trademark ownership, logo/name trademark governance, official-affiliation/endorsement boundary, and permission-sensitive uses. [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]
- Local codebase files listed in the user request - route table, Tom rights precedent, NOTICE, release checklist, validator, tests, planning context, requirements, roadmap, state, and AGENTS. [VERIFIED: codebase grep]

### Secondary (MEDIUM confidence)

- `https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/` - Rust Foundation background article naming Karen Rustad Tolva as original graphic designer of Ferris and describing creation history. [CITED: https://rustfoundation.org/media/celebrating-rusts-birthday-with-karen-tolva-creator-of-ferris-the-rustacean/]

### Tertiary (LOW confidence)

- none. [VERIFIED: codebase grep]

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH - no package installation and current commands are local Node built-ins. [VERIFIED: command output]
- Architecture: HIGH - Phase 11 surfaces and file boundaries are locked by CONTEXT, ROADMAP, and existing code patterns. [VERIFIED: codebase grep]
- Pitfalls: HIGH for local validator baseline and route-reference risks; MEDIUM for legal/trademark wording because final release wording should remain review-gated. [VERIFIED: command output] [CITED: https://rustfoundation.org/policy/rust-trademark-policy/]

**Research date:** 2026-06-13 [VERIFIED: init.phase-op]
**Valid until:** 2026-07-13 for local codebase patterns; re-check external Rust Foundation trademark page before release wording changes. [ASSUMED]
