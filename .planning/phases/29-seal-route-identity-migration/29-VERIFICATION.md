---
phase: 29-seal-route-identity-migration
verified: 2026-06-15T03:48:30Z
status: passed
score: 6/6 must-haves verified
overrides_applied: 0
deferred:
  - truth: "Validator and Node test check IDs should rename remaining `SEALOS` labels to product-neutral Seal migration vocabulary."
    addressed_in: "Phase 32"
    evidence: "Phase 32 success criteria: Validator fails on stale Sealos route identity in active route metadata, docs, prompts, QA, examples, release surfaces, or tests; Node tests cover stale Sealos leakage fixtures and final evidence."
---

# Phase 29: Seal Route Identity Migration Verification Report

**Phase Goal:** Users can select the former Sealos Seal route through a product-neutral Seal route identity.
**Verified:** 2026-06-15T03:48:30Z
**Status:** passed
**Re-verification:** No - initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Route metadata uses display name `Seal`, route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`. | VERIFIED | `routing.md` contains the active `seal` row with `Seal`, `default=false`, `output_suffix=seal`, seven `references/ips/seal/...` references, status `active`, raw path `assets/<article-slug>-seal/`, and escaped path `assets/&lt;article-slug&gt;-seal/`. |
| 2 | Seal aliases describe a seal character and avoid Sealos product, brand, mascot, cloud platform, and advertising wording. | VERIFIED | `routing.md` and `SKILL.md` use explicit aliases `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, and `蓝色连帽衫海豹`; the active row contains no stale `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, or `Sealos 海豹` aliases. |
| 3 | Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes. | VERIFIED | Manual Node check found exactly one `default=true` row and it belongs to `xiaohei`; `SKILL.md` states omitted visual IP selects only Xiaohei and lists Littlebox, Tom, Ferris, and Seal as explicit routes. |
| 4 | Mixed-IP routing creates separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Seal with route-local references and output directories. | VERIFIED | `routing.md` and `SKILL.md` split mixed-IP output into `assets/<article-slug>-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/<article-slug>-tom/`, `assets/<article-slug>-ferris/`, and `assets/<article-slug>-seal/`, with route-local `required_references`. |
| 5 | `SKILL.md` route selection, reference loading, shot-list, generation, QA, save, and delivery surfaces use the active Seal route. | VERIFIED | `SKILL.md` includes ``route id `seal``` plus `references/ips/seal/source.md`, `references/ips/seal/seal-ip.md`, `Seal variant group`, and Seal output path markers across route selection, reference loading, generation, QA, save, and delivery sections. |
| 6 | Deterministic validation catches stale active route drift back to `sealos`. | VERIFIED | Fixture mutation changed active route id/suffix/path to stale `sealos`; `node scripts/validate-skill-package.mjs` exited 1 with route-id drift failures including `ROUTE-SEALOS-001`, `ROUTE-SEALOS-002`, `REBRAND-CANON-004`, `REBRAND-ROUTE-001`, and `VAL-COMPAT-001`. |

**Score:** 6/6 truths verified

### Deferred Items

Items addressed in later milestone phases.

| # | Item | Addressed In | Evidence |
|---|------|-------------|----------|
| 1 | Validator and Node test check IDs still include `SEALOS` labels even while their assertions now target `seal`. | Phase 32 | Phase 32 owns validator/test/release evidence hardening and stale Sealos cleanup across tests and validation surfaces. |

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `ian-xiaohei-illustrations/references/routing.md` | Active `seal` route registry metadata, aliases, reference paths, output paths, and mixed-IP grouping | VERIFIED | Exists, substantive, and is consumed by `SKILL.md`; manual row/reference/default checks passed. |
| `ian-xiaohei-illustrations/SKILL.md` | Route-selection workflow and active controller behavior for the `seal` route | VERIFIED | Exists, substantive, and begins route selection by reading `references/routing.md`; contains Seal routing, reference, QA, generation, and delivery markers. |
| `ian-xiaohei-illustrations/references/ips/seal/index.md` | Route-local Seal pack entry path used by `required_references` | VERIFIED | Exists and is referenced by the active `seal` route required references. |
| `scripts/validate-skill-package.mjs` | Bounded validation alignment for active Seal route metadata | VERIFIED | Exists, substantive, passes 98/98, and fails stale route mutation. |
| `scripts/validate-skill-package.test.mjs` | Node regression assertions for route parser and active Seal route metadata | VERIFIED | Exists, substantive, passes 66/66, and asserts route ids plus `references/ips/seal/...` and `assets/<article-slug>-seal/`. |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `routing.md` | `references/ips/seal/` | `required_references` list for the `seal` route | WIRED | Manual check found all seven Seal references in the active route row and all referenced files exist. `verify.key-links` reported an invalid plan regex for this item, so manual verification was used. |
| `SKILL.md` | `references/routing.md` | Route selection begins by reading `references/routing.md` | WIRED | `SKILL.md` says `Read `references/routing.md` first`, then route-local references are loaded. |
| `SKILL.md` | `assets/<article-slug>-seal/` | Seal shot-list, generation, mixed-IP, save, and delivery rules | WIRED | Seal path appears in planning, generation, QA repair, save, and delivery blocks. |
| `validate-skill-package.mjs` | `routing.md` | Markdown route table parser and active route assertions | WIRED | `routeRows()` parses `routing.md`, `routeById("seal")` validates active Seal metadata, and stale route mutation fails. |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|---------------|--------|--------------------|--------|
| `SKILL.md` | Selected route and `required_references` | `references/routing.md` route table | Yes | FLOWING - instructions require reading `references/routing.md` first and loading only selected route references. |
| `validate-skill-package.mjs` | `routeRows()` and `routeById("seal")` | `parseMarkdownTable(requireFile(ROUTING_FILE), "IP Routes")` | Yes | FLOWING - parser reads live `routing.md`; stale fixture mutation proves values are validated from file content. |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Validator accepts current package | `node scripts/validate-skill-package.mjs` | `Summary: total=98 passed=98 failed=0 skipped=0` | PASS |
| Node regression suite passes | `node --test scripts/validate-skill-package.test.mjs` | `tests 66`, `pass 66`, `fail 0` | PASS |
| Whitespace check passes | `git diff --check` | exit 0 | PASS |
| Stale active route drift fails validation | temporary fixture mutation plus `node scripts/validate-skill-package.mjs` | exit 1 with `seal` route missing and route ids drift failures | PASS |
| Manual route invariant check passes | inline Node read of `routing.md` | `seal route row, references, files, aliases, and default invariant verified` | PASS |

### Probe Execution

| Probe | Command | Result | Status |
|-------|---------|--------|--------|
| Conventional probes | `find scripts -path '*/tests/probe-*.sh' -type f` | No probes found | SKIPPED |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| ROUTE-01 | 29-01-PLAN.md | User can select the former Sealos Seal route through product-neutral Seal identity with display name `Seal`. | SATISFIED | Active `routing.md` row and `SKILL.md` route selection use `seal` / `Seal`. |
| ROUTE-02 | 29-01-PLAN.md | User can rely on route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`. | SATISFIED | Route row, `SKILL.md`, validator output tokens, and manual checks all verify `seal` and `assets/<article-slug>-seal/`. |
| ROUTE-03 | 29-01-PLAN.md | Seal aliases describe a seal character without Sealos product, brand, mascot, cloud platform, or advertising wording. | SATISFIED | Active alias list is product-neutral and stale active aliases are absent from the `seal` row. |
| ROUTE-04 | 29-01-PLAN.md | Xiaohei remains omitted-IP default while Littlebox, Tom, Ferris, and Seal remain explicit selectable routes. | SATISFIED | Exactly one default route exists (`xiaohei`), and all other route rows are `default=false`. |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `scripts/validate-skill-package.test.mjs` | multiple | `TBD` placeholder-date fixture strings | INFO | Test data intentionally proves placeholder approval dates fail; it does not flow into runtime output. |
| `scripts/validate-skill-package.mjs` | multiple | Prompt-placeholder allowlist wording | INFO | Validator allowlist category for literal prompt placeholders; not a stub. |
| `scripts/validate-skill-package.mjs` / `scripts/validate-skill-package.test.mjs` | multiple | `SEALOS` check IDs naming active Seal assertions | INFO / Deferred | Assertions target `seal`; label cleanup is explicitly covered by Phase 32 validation hardening. |

### Human Verification Required

None. Phase 29 changes deterministic routing metadata, Markdown controller text, route-local paths, and validator/test expectations. No visual generation or subjective UI review is required for this phase.

### Gaps Summary

No blocking gaps found. The Phase 29 user-visible outcome is achieved: users can select the hoodie seal character as product-neutral `Seal` through route id `seal`, new outputs use `assets/<article-slug>-seal/`, mixed-IP routing isolates the Seal group, and deterministic checks reject stale active `sealos` route drift.

---

_Verified: 2026-06-15T03:48:30Z_
_Verifier: the agent (gsd-verifier)_
