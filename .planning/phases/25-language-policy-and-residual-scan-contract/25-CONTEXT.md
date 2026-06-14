# Phase 25: Language Policy and Residual Scan Contract - Context

**Gathered:** 2026-06-14T15:33:54Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 25 creates the English-default language authority and residual Chinese scan contract for the v1.5 migration. It defines where the policy lives, which multilingual surfaces stay valid, how stale Chinese prose is detected, and which compatibility contracts later phases must preserve.

Phase 25 does not migrate the full skill/reference prose, public docs, examples, or final validator matrix. Phase 26 owns skill and reference migration, Phase 27 owns public documentation and examples, and Phase 28 owns final validator hardening plus release evidence.

</domain>

<decisions>
## Implementation Decisions

### Policy Authority
- **D-01:** Add root `LANGUAGE_POLICY.md` as the canonical English-default language policy for the repository.
- **D-02:** Treat English as the default for repository docs, skill instructions, reference docs, examples, release materials, validation output, code, scripts, comments, commit messages, and PR copy.
- **D-03:** Later docs and release surfaces should reference `LANGUAGE_POLICY.md` instead of duplicating the policy.

### Multilingual Exception Model
- **D-04:** Approved exceptions are exact Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- **D-05:** Allowlist entries must be narrow: category, path scope, exact token or anchored pattern, and rationale.
- **D-06:** Whole-file and whole-directory exemptions are reserved for generated binary assets and image files, not Markdown prose.

### Residual Scan Contract
- **D-07:** Add residual Chinese detection to the existing dependency-free Node validator path.
- **D-08:** The scan must report approved multilingual tokens separately from stale Chinese prose.
- **D-09:** Each finding should include status, category, `path:line`, token or short excerpt, and remediation target.
- **D-10:** Stale Chinese prose outside the allowlist should fail the validator.

### Compatibility Surfaces
- **D-11:** Preserve `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, route ids, route aliases, default flags, output suffixes, output paths, required references, source/rights/brand records, QA gates, and user-language visible-label behavior.
- **D-12:** Xiaohei remains the omitted-IP default while Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.
- **D-13:** Route-local authority remains isolated: Tom rights stay in `references/ips/tom/rights.md`, Ferris source/trademark authority stays in `references/ips/ferris/source.md`, and Sealos Seal brand/canonical-image authority stays in `references/ips/sealos/source.md`.

### Validation Shape
- **D-14:** Phase 25 should establish the policy and scan contract first; Phase 28 should expand the full hard-fail validator matrix after migration surfaces are translated.
- **D-15:** Validator extensions should use stable `LANG-*` check ids and Node tests should cover allowed exception fixtures plus stale Chinese prose fixtures.

### the agent's Discretion
- The implementation can choose the exact helper names and validator internal structure as long as it stays dependency-free, deterministic, and aligned with the existing `defineCheck`/fixture-test style.
- The first residual scan in Phase 25 can be contract-oriented and report current stale prose, because Phase 26 and Phase 27 own broad migration.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Authority
- `.planning/ROADMAP.md` — Phase 25 goal, dependencies, requirements, and success criteria.
- `.planning/REQUIREMENTS.md` — LANG-01, LANG-02, and LANG-03 requirement definitions.
- `.planning/PROJECT.md` — v1.5 English-default milestone scope and compatibility constraints.
- `.planning/STATE.md` — prior milestone decisions, route stability evidence, and validator baseline.

### Runtime and Route Authority
- `ian-xiaohei-illustrations/SKILL.md` — current runtime instructions and route behavior surface.
- `ian-xiaohei-illustrations/references/routing.md` — route table, aliases, defaults, required references, statuses, and output suffixes.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Tom rights authority.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` — Ferris source/trademark authority.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Sealos Seal brand/canonical-image authority.

### Validation Authority
- `scripts/validate-skill-package.mjs` — dependency-free validator and check-output contract.
- `scripts/validate-skill-package.test.mjs` — stable check-id ordering and fixture coverage pattern.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-skill-package.mjs`: existing `defineCheck`, `assertIncludes`, route parsing, path helpers, and deterministic summary output can host `LANG-*` checks.
- `scripts/validate-skill-package.test.mjs`: current fixture-copy helpers and stable check-id list can be reused for stale Chinese and approved exception fixtures.
- `ian-xiaohei-illustrations/references/routing.md`: route table is the authoritative source for aliases and output suffix stability.

### Established Patterns
- Validator checks are dependency-free Node code and emit stable `[PASS]`, `[FAIL]`, and `Summary: total=...` lines.
- Node tests copy the repository into temporary fixtures, mutate one marker, then assert actionable failure ids and paths.
- Route-local references keep source, rights, brand, prompt, QA, and leakage rules isolated by IP.

### Integration Points
- `LANGUAGE_POLICY.md` should be referenced by later README, examples, release checklist, and validation evidence.
- Residual Chinese scan logic should sit near shared validator helpers so Phase 28 can expand it without rewriting the validator.
- The current baseline is validator `89/89`, Node tests `51/51`, and clean `git diff --check`.

</code_context>

<specifics>
## Specific Ideas

- Use `LANG-POLICY-*` check ids for the policy artifact and `LANG-SCAN-*` check ids for residual scan contract behavior.
- Keep approved exception categories visible in policy prose and machine-testable through exact terms.
- Treat current Chinese prose as expected migration work for Phase 26 and Phase 27, while Phase 25 defines the gate that later phases must satisfy.

</specifics>

<deferred>
## Deferred Ideas

- Machine-readable visual IP manifest.
- Asset manifest and automated visual regression.
- Additional IP routes.
- Hosted app, UI, API, database, or build runtime.
- External legal or trademark research beyond existing route records.

</deferred>

---

*Phase: 25-Language Policy and Residual Scan Contract*
*Context gathered: 2026-06-14T15:33:54Z*
