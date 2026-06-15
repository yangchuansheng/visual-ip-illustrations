# Phase 32: Seal Migration Validation and Release Evidence - Context

**Gathered:** 2026-06-15T05:34:09Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 32 hardens the Seal migration validator, Node regression suite, stale Sealos scans, release evidence, and UAT evidence after Phases 29-31 migrated the active route, route-local pack, public docs, release surfaces, skill instructions, and agent metadata to product-neutral Seal.

This phase addresses `VAL-01`, `VAL-02`, `VAL-03`, and `VAL-04`. It should make the full package validator and Node suite green again, prove stale Sealos route identity fails in active surfaces, prove bounded historical Sealos provenance is allowed, and record release-ready evidence. It should not change route behavior beyond validation/evidence corrections unless a validator-required string exposes a real Phase 29-31 migration miss.

</domain>

<decisions>
## Implementation Decisions

### Validator Vocabulary and Stale Route Detection

- **D-01:** Rename the active Seal validation vocabulary from Sealos-era check IDs and messages to product-neutral Seal migration terminology. The validator should expose Seal-focused check IDs for route metadata, route-local refs, prompts, IP pack, QA, source-history, logo-free gates, docs, NOTICE, release checklist, smoke prompts, mixed-IP behavior, sample policies, and boundary checks. This implements `VAL-01` and prevents current failing checks such as `AGENT-SEALOS-001`, `REFS-SEALOS-001`, `PROMPT-SEALOS-001`, `IP-SEALOS-001`, `QA-SEALOS-001`, `SOURCE-SEALOS-001`, `LOGO-SEALOS-001`, `DOC-SEALOS-*`, `NOTICE-SEALOS-001`, `SMOKE-SEALOS-001`, `SMOKE-MIXED-SEALOS-001`, `RELEASE-SEALOS-001`, `BOUNDARY-SEALOS-IMG-001`, and `BOUNDARY-SEALOS-GEN-001` from re-encoding the old route as the expected truth.
- **D-02:** Validator failures should target stale active Sealos route identity, not every Sealos word. Active metadata, docs, prompts, QA, examples, release surfaces, and tests must fail when they use old route id `sealos`, output suffix `sealos`, path `assets/<article-slug>-sealos/`, path `references/ips/sealos/`, display `Sealos Seal`, `brand-owned`, cloud platform wording, cloud OS wording, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, advertising, or promotional route language. This implements `VAL-01`.
- **D-03:** Keep existing checks for stable non-Seal routes and package identity intact. Xiaohei remains the omitted-IP default, Littlebox remains explicit active, Tom remains `gated-authorized`, Ferris remains `source-reviewed`, Visual IP Illustrations remains canonical, and `$ian-xiaohei-illustrations` remains a legacy alias.
- **D-04:** The final validator summary should be deterministic and green after implementation. The target is the current matrix count adjusted by renamed/updated checks, with `failed=0` and no skipped Phase 32 checks. Do not preserve a literal `98/98` requirement if check splitting or consolidation changes the count; record the exact final total in verification evidence.

### Historical Sealos Allow Rules

- **D-05:** Allow Sealos mentions only in explicit historical/migration contexts: prior milestone planning and evidence files under `.planning/`, source-history notes in `ian-xiaohei-illustrations/references/ips/seal/source.md`, source-history/migration notes in `ian-xiaohei-illustrations/references/routing.md`, Phase 32 release checklist boundary text, commit references, and explicit migration context in validator/test fixtures. This implements `VAL-02`.
- **D-06:** The allowlist should be path- and context-bounded instead of a broad token allowlist. Current active allowed examples include `NOTICE.md` historical provenance text, `RELEASE_CHECKLIST.md` Phase 32 migration/evidence boundary text, `references/routing.md` source-history lines, and `references/ips/seal/source.md` `Historical Source Notes`.
- **D-07:** Active Seal prompt, QA, docs, metadata, examples, and release behavior should be scanned for stale product/platform language using explicit deny tokens and contextual exemptions. Planner/executor should prefer a helper that reports file and matched token so release evidence is deterministic.

### Node Regression Suite Coverage

- **D-08:** Node tests must be updated from Sealos-era expectations to Seal migration expectations. Tests should cover route parsing, stable route ordering, active route id `seal`, output suffix `seal`, output path `assets/<article-slug>-seal/`, required refs under `references/ips/seal/`, and full-pass validator output. This implements `VAL-03`.
- **D-09:** Add or update stale leakage fixtures for each active surface family: route metadata, route-local refs, prompt leakage, QA leakage, docs leakage, agent metadata leakage, NOTICE leakage, release checklist leakage, route smoke leakage, mixed-IP leakage, and sample policy parser drift. Each fixture should mutate a current Seal marker into a stale Sealos marker and assert the Seal migration validator fails with the correct check ID and file path. This implements `VAL-01` and `VAL-03`.
- **D-10:** Update sample approval parser helpers from Sealos naming to Seal naming. Public rendered sample gates and generated sample review gates should parse `Seal public asset policy` and `Record generated Seal sample review` lines and use `assets/<article-slug>-seal/` as the internal Seal output path. This implements `VAL-03`.
- **D-11:** Preserve existing Tom and Ferris sample parser behavior while updating shared helper expectations that currently fail because Sealos parser fixtures still require old release-checklist lines.

### Release Evidence and Docs Consistency

- **D-12:** Final evidence must record all required commands and their exact pass summaries: `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, `git diff --check`, stale Sealos scan, docs consistency scan, and route migration smoke coverage. This implements `VAL-04`.
- **D-13:** Release evidence should live in Phase 32 verification/UAT artifacts and update `RELEASE_CHECKLIST.md` only where the checklist itself needs current Seal evidence markers or parser-readable approval lines. The final release checklist should remain maintainer-facing and should not duplicate the full verification report.
- **D-14:** Docs consistency should prove README, examples, NOTICE, RELEASE_CHECKLIST, SKILL.md, openai.yaml, routing.md, and all Seal route-local files agree on `Seal`, `seal`, `active`, `source-history authority`, `hoodie seal identity note`, `logo-free note`, `references/ips/seal/`, and `assets/<article-slug>-seal/`.

### UAT Smoke Boundary

- **D-15:** UAT should confirm behavior through text/route smoke and inspection, not image generation. This phase can verify the Seal route prompt path and expected output reporting without calling `image_gen`.
- **D-16:** UAT must confirm Seal outputs keep hoodie seal identity markers and keep product, brand, and cloud-platform cues absent from active route behavior. The evidence should cite the route-local prompt/QA/source files plus a route smoke prompt that selects `Seal` and expects `assets/<article-slug>-seal/`.

### the agent's Discretion

- Choose exact renamed check IDs and helper names, provided they are Seal-focused, stable, and traceable to `VAL-01` through `VAL-04`.
- Choose whether to split stale scan helpers inside `scripts/validate-skill-package.mjs` or keep them inline, provided output remains deterministic and Node tests cover failing fixtures.
- Choose the exact final validator count after check renames/splits. Record the final count in Phase 32 summary, verification, UAT, and release evidence.
- Choose the exact stale Sealos scan command for final evidence. It should be reproducible from the repo root and should distinguish active leakage from allowed historical/migration contexts.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Scope

- `.planning/PROJECT.md` — v1.6 milestone goal, active Seal route constraints, historical evidence boundary, and current key decision to debrand Sealos Seal into Seal.
- `.planning/REQUIREMENTS.md` — `VAL-01`, `VAL-02`, `VAL-03`, and `VAL-04` define the Phase 32 requirement set.
- `.planning/ROADMAP.md` — Phase 32 goal, success criteria, dependency on Phase 31, and planned single validation/evidence hardening plan.
- `.planning/STATE.md` — accumulated decisions, latest boundary results, and prior validation counts.

### Prior Phase Inputs

- `.planning/phases/29-seal-route-identity-migration/29-CONTEXT.md` — locked route identity decisions for `seal`, `Seal`, `assets/<article-slug>-seal/`, explicit route selection, and Phase 32 deferral.
- `.planning/phases/29-seal-route-identity-migration/29-01-SUMMARY.md` — confirms active route registry, controller paths, and bounded validator expectations moved to Seal.
- `.planning/phases/29-seal-route-identity-migration/29-VERIFICATION.md` — verifies active Seal route metadata, aliases, default-route isolation, mixed-IP grouping, and stale route drift detection.
- `.planning/phases/29-seal-route-identity-migration/29-UAT.md` — confirms user-visible route selection and Seal output path smoke coverage.
- `.planning/phases/30-seal-pack-debranding/30-CONTEXT.md` — locked route-local Seal debranding decisions and historical-source boundary.
- `.planning/phases/30-seal-pack-debranding/30-01-SUMMARY.md` — product-neutral Seal source, identity, style, and composition references; records global validator 94/98 and Node 51/66 boundary after 30-01.
- `.planning/phases/30-seal-pack-debranding/30-02-SUMMARY.md` — product-neutral Seal prompt, edit, QA, and delivery gates; records global validator 92/98 and Node 51/66 boundary after 30-02.
- `.planning/phases/30-seal-pack-debranding/30-VERIFICATION.md` — verifies Phase 30 route-local debranding and records Phase 32 ownership of full-suite restoration.
- `.planning/phases/30-seal-pack-debranding/30-UAT.md` — confirms route-local hoodie Seal identity, product-neutral prompt behavior, QA gates, and source record.
- `.planning/phases/30-seal-pack-debranding/deferred-items.md` — exact Phase 32 validator and Node boundary after Phase 30.
- `.planning/phases/31-public-documentation-and-release-surface-migration/31-CONTEXT.md` — locked public/runtime Seal wording decisions and Phase 32 deferral.
- `.planning/phases/31-public-documentation-and-release-surface-migration/31-01-SUMMARY.md` — final public/runtime migration summary; records global validator 80/98 and Node 47/66 boundary after Phase 31.
- `.planning/phases/31-public-documentation-and-release-surface-migration/31-VERIFICATION.md` — verifies public/runtime docs and records Phase 32 full validator and Node restoration gaps.
- `.planning/phases/31-public-documentation-and-release-surface-migration/31-UAT.md` — confirms public docs, examples, NOTICE/release checklist, skill instructions, and metadata smoke coverage.

### Validator and Test Targets

- `scripts/validate-skill-package.mjs` — primary implementation surface for validator check IDs, helper names, route parsing, output path tokens, approval parsers, stale leakage checks, docs consistency checks, and final summary output.
- `scripts/validate-skill-package.test.mjs` — primary Node regression suite for route parsing, stable ordering, fixtures, parser helpers, stale leakage fixtures, and full-pass output.

### Public and Runtime Surfaces

- `README.md` — public route inventory, route details, output path list, route reference list, workflow, directory tree, and validation boundary wording.
- `examples/prompts.md` — canonical and legacy Seal prompts, mixed-IP groups, route smoke checks, action vocabulary, route-local reference markers, and path markers.
- `NOTICE.md` — Seal source-history boundary, historical provenance allowance, hoodie identity, logo-free route behavior, and public sample review fields.
- `RELEASE_CHECKLIST.md` — Seal release gates, public asset policy, generated sample policy, Phase 32 evidence boundary, and final release evidence markers.
- `ian-xiaohei-illustrations/SKILL.md` — runtime-facing route selection, route-local loading, planning, generation, QA, save, and delivery behavior for Seal.
- `ian-xiaohei-illustrations/agents/openai.yaml` — agent-facing metadata for Visual IP Illustrations with explicit active Seal route and compatibility alias.

### Active Seal Route and Pack Contract

- `ian-xiaohei-illustrations/references/routing.md` — active route registry for `seal`, aliases, `default=false`, output suffix, route-local references, output paths, route status, and source-history notes.
- `ian-xiaohei-illustrations/references/ips/seal/index.md` — Seal pack navigation and shared route-local markers.
- `ian-xiaohei-illustrations/references/ips/seal/source.md` — product-neutral source-history authority, hoodie markers, sample policy, drift boundary, and historical source notes.
- `ian-xiaohei-illustrations/references/ips/seal/style-dna.md` — hoodie Seal style and logo-free identity gates.
- `ian-xiaohei-illustrations/references/ips/seal/seal-ip.md` — Seal character identity and cognitive action responsibility.
- `ian-xiaohei-illustrations/references/ips/seal/composition-patterns.md` — product-neutral article metaphor families, object pool, and action pool.
- `ian-xiaohei-illustrations/references/ips/seal/prompt-template.md` — Seal planning fields, generation prompt, edit prompt families, and delivery reminder.
- `ian-xiaohei-illustrations/references/ips/seal/qa-checklist.md` — Seal QA gates, failure vocabulary, repair moves, and delivery judgment.

### Codebase Maps

- `.planning/codebase/TESTING.md` — validation/test context and historic manual QA model.
- `.planning/codebase/STRUCTURE.md` — target file locations and package surface layout.
- `.planning/codebase/CONVENTIONS.md` — Markdown conventions, route reference path conventions, and English-default documentation rules.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `scripts/validate-skill-package.mjs`: exports parser helpers and contains route rows, output path tokens, release approval parsers, docs checks, route-local pack checks, leakage checks, and summary reporting.
- `scripts/validate-skill-package.test.mjs`: already has fixture-copy helpers, mutation helpers, full-pass assertions, parser-helper assertions, route metadata drift fixtures, docs drift fixtures, sample policy fixtures, and leakage fixtures.
- `RELEASE_CHECKLIST.md`: already contains current Seal release gate text and Phase 32 ownership wording; parser lines need current Seal naming and `assets/<article-slug>-seal/`.

### Established Patterns

- Validation is dependency-free Node and runs from repo root with `node scripts/validate-skill-package.mjs`.
- Node tests use the built-in `node --test` runner and copy the repository into temp fixtures before mutating Markdown/YAML files.
- Route validation reads live Markdown tables from `references/routing.md`, so route ordering and route metadata assertions should stay fixture-backed.
- Release sample approval parser tests have strong existing patterns for Tom and Ferris. Seal should follow the same parser contract with Seal naming.

### Integration Points

- Validator check updates connect `scripts/validate-skill-package.mjs` to current Phase 31 surfaces: README, examples, NOTICE, RELEASE_CHECKLIST, SKILL.md, openai.yaml, routing.md, and the seven Seal route-local files.
- Node tests must assert both current full pass and targeted failure fixtures, so each validator rename needs matching test updates.
- Final release evidence connects command output, stale Sealos scan output, docs consistency scan, and UAT smoke results into Phase 32 verification/UAT artifacts.

</code_context>

<specifics>
## Specific Ideas

- Current baseline before Phase 32 implementation is `node scripts/validate-skill-package.mjs` failing with `Summary: total=98 passed=80 failed=18 skipped=0`.
- Current Node baseline before Phase 32 implementation is `node --test scripts/validate-skill-package.test.mjs` failing with `tests 66`, `pass 47`, `fail 19`.
- Most current failures come from stale Sealos-era expected markers rather than current route behavior: old `Sealos Seal`, `brand-owned`, `uploaded-image-canonical`, `references/ips/sealos/`, `assets/<article-slug>-sealos/`, cloud platform terms, and old sample policy line names.
- Current active Sealos mentions observed in implementation surfaces are bounded to Phase 32 evidence text, historical provenance, source-history notes, routing migration notes, and release checklist migration ownership.
- The strongest final acceptance signal is a clean full validator, clean full Node suite, clean whitespace check, and a stale scan that reports only allowed historical/migration contexts.

</specifics>

<deferred>
## Deferred Ideas

- Machine-readable visual-IP manifest, asset manifest, comparison sheets, visual regression, release packaging, and selected-IP install variants remain future requirements.
- Actual rendered Seal image generation remains out of scope for Phase 32; UAT should validate route smoke and prompt/QA behavior through text and file evidence.

</deferred>

---

*Phase: 32-Seal Migration Validation and Release Evidence*
*Context gathered: 2026-06-15T05:34:09Z*
