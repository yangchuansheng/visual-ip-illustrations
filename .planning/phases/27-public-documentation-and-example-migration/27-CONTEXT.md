# Phase 27: Public Documentation and Example Migration - Context

**Gathered:** 2026-06-14T17:50:00Z (assumptions mode)
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 27 migrates public and maintainer-facing repository documentation to English-default prose. The phase owns `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and the targeted validator/test marker updates required by those public-document rewrites.

Phase 27 preserves every shipped route behavior and compatibility surface. Phase 28 owns final hard-fail language enforcement, final release evidence, and release-readiness UAT.

</domain>

<decisions>
## Implementation Decisions

### Scope Ownership
- **D-01:** Phase 27 owns public documentation prose migration for `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md`.
- **D-02:** Phase 27 may update `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` only where existing public-doc marker expectations must follow renamed English headings or rewritten public prose.
- **D-03:** Final language-enforcement policy, final release evidence, and release-readiness UAT remain Phase 28 scope.

### Multilingual Exceptions
- **D-04:** Preserve the approved multilingual exception categories from `LANGUAGE_POLICY.md`: Chinese route aliases, user-language visible labels, prompt placeholders, attribution/source names, compatibility smoke fixtures, and Chinese article illustration examples.
- **D-05:** Translate surrounding prose in public docs to English while preserving exact intentional tokens such as `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, `Sealos 海豹`, and intentional visible-label examples.

### Compatibility Surfaces
- **D-06:** Preserve canonical invocation `$visual-ip-illustrations`, legacy compatibility alias `$ian-xiaohei-illustrations`, installable package directory `ian-xiaohei-illustrations/`, canonical checkout slug `visual-ip-illustrations`, and the current remote clone guidance.
- **D-07:** Preserve route ids, route statuses, default flags, route aliases, source/rights/brand authority paths, route-local reference directories, raw output paths, and escaped output path markers for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- **D-08:** Keep Chinese article workflows valid in examples. English-default docs may include Chinese sample article requests when those lines are compatibility smoke fixtures or user-language examples.

### Public Documentation Shape
- **D-09:** Use one Phase 27 implementation plan with task groups for README, examples, NOTICE plus release checklist, targeted validator/test marker updates, and verification.
- **D-10:** README example image captions and alt text should use English-default captions. Original Chinese sample titles may remain only when treated as intentional sample labels.
- **D-11:** `examples/prompts.md` should provide English-default copyable prompts while retaining legacy smoke coverage and intentional Chinese request lines that prove Chinese article illustration behavior.

### Release Checklist Stability
- **D-12:** Preserve parser-compatible approval record formats and slash-delimited field order for Tom public samples, Ferris public/generated samples, and Sealos public/generated samples.
- **D-13:** Translate release checklist headings and instructions to English-default prose while preserving status markers such as `PENDING / reviewer / date`, route statuses, approval fields, and command snippets.

### the agent's Discretion
The implementation may choose exact English prose, heading names, and section ordering when the route contract and validator-visible compatibility markers remain stable. Prefer concise public docs over broad rewrites.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase Scope and Policy
- `.planning/ROADMAP.md` — Phase 27 goal, requirements, success criteria, and Phase 28 boundary.
- `.planning/REQUIREMENTS.md` — DOC-01 through DOC-04 acceptance requirements.
- `LANGUAGE_POLICY.md` — English-default authority and approved multilingual exception policy.
- `.planning/phases/26-skill-and-reference-content-migration/26-VERIFICATION.md` — Phase 26 deferred findings, metadata gap closure, and Phase 27 public-doc handoff.

### Public Docs
- `README.md` — Public project identity, install guidance, route selection, workflow, example captions, maintainer validation, related projects, and author section.
- `examples/prompts.md` — Copyable canonical, legacy, route-specific, and mixed-IP prompt examples.
- `NOTICE.md` — Ian, Littlebox, Tom, Ferris, and Sealos attribution/source/brand boundaries.
- `RELEASE_CHECKLIST.md` — Maintainer release gates, route smoke prompts, attribution review, public asset gates, generated sample gates, and installable package boundary.

### Validator and Tests
- `scripts/validate-skill-package.mjs` — Public docs, NOTICE, release checklist, smoke prompt, route path, and language scan checks.
- `scripts/validate-skill-package.test.mjs` — Fixtures that protect public-doc marker behavior, route stability, and language scan expectations.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `scripts/validate-skill-package.mjs`: dependency-free public docs checks already cover links, route markers, output paths, NOTICE markers, smoke prompts, release gates, and language scanning.
- `scripts/validate-skill-package.test.mjs`: fixture tests already verify stale public-doc framing and route marker drift.
- `LANGUAGE_POLICY.md`: current allowlist and residual scan model can classify Phase 27 residual Han findings.

### Established Patterns
- Public docs checks use exact marker assertions. Rewritten headings and phrases require targeted validator/test updates in the same change set.
- Route status, authority path, raw output path, and escaped output path markers are validator-visible compatibility surfaces.
- Approval record parsing depends on slash-delimited review fields and placeholder tokens such as `PENDING / reviewer / date`.

### Integration Points
- `README.md` and `examples/prompts.md` feed `DOC-LINKS-*`, `DOC-PATHS-*`, `DOC-ROUTES-*`, `DOC-*`, and `SMOKE-*` validator checks.
- `NOTICE.md` feeds `NOTICE-*` checks.
- `RELEASE_CHECKLIST.md` feeds `RELEASE-*` checks and public/generated sample approval parsers.
- `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` should become clean for Phase 27-owned public docs except approved multilingual tokens.

</code_context>

<specifics>
## Specific Ideas

- Use English prose for repository sections, prompt headings, release checklist headings, and author/contact labels.
- Keep Chinese aliases in route alias lists.
- Keep Chinese visible-label examples where they intentionally prove user-language label behavior.
- Keep Chinese article prompt bodies only as explicit smoke fixtures or sample user requests.
- Keep public sample approval gate wording tied to Tom rights, Ferris source/trademark review, and Sealos brand/canonical-image review.

</specifics>

<deferred>
## Deferred Ideas

Phase 28 owns final hard-fail stale-language enforcement, final evidence recording, and release-readiness UAT.

</deferred>

---

*Phase: 27-Public Documentation and Example Migration*
*Context gathered: 2026-06-14T17:50:00Z*
