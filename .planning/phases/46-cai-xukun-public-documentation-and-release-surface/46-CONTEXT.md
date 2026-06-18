# Phase 46: Cai Xukun Public Documentation and Release Surface - Context

**Gathered:** 2026-06-18
**Status:** Ready for planning

<domain>
## Phase Goal

Phase 46 delivers the public documentation and release surface for Cai Xukun.

This phase covers DOC-01 through DOC-05 from `.planning/REQUIREMENTS.md`:

- **DOC-01:** User can read README route selection, workflow, output path, and route descriptions with Cai Xukun as an explicit gated public-figure route.
- **DOC-02:** User can copy examples for Cai Xukun planning, generation, editing, and mixed-IP variants with `assets/<article-slug>-caixukun/` paths.
- **DOC-03:** Maintainer can read NOTICE and release checklist entries that include uploaded-image authority, public-figure likeness boundary, public sample policy, and release review gates.
- **DOC-04:** User and maintainer can see Cai Xukun docs preserve default-route behavior, route isolation, gated route status, no endorsement claims, and stylized mascot-only output.
- **DOC-05:** Public release surfaces stay consistent across README variants, prompt examples, agent metadata, NOTICE, and release checklist when Cai Xukun is introduced.

</domain>

<decisions>
## Implementation Decisions

### Scope

- **D-01:** In scope: `README.md`, `readmes/README.*.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, and `skills/visual-ip-illustrations/agents/openai.yaml`.
- **D-02:** Out of scope: `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, validator hardening, Node tests, and final release evidence.
- **D-03:** Phase 47 owns validator hardening, Node tests, and final release evidence.

### Public Route Contract

- **D-04:** Add Cai Xukun as an explicit `gated-public-figure` stylized mascot route.
- **D-05:** Preserve Xiaohei as the omitted-IP default.
- **D-06:** Preserve all existing route behavior and public route wording unless a Cai Xukun documentation addition requires a local edit.
- **D-07:** Public docs must include aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`.
- **D-08:** Public docs must include source pointer `skills/visual-ip-illustrations/references/ips/caixukun/source.md`.
- **D-09:** Public docs must include output path `assets/<article-slug>-caixukun/`.
- **D-10:** Public docs that render angle brackets must include escaped marker `assets/&lt;article-slug&gt;-caixukun/`.

### Safety and Release Boundaries

- **D-11:** Public docs must carry uploaded-image authority.
- **D-12:** Public docs must carry the public-figure likeness boundary.
- **D-13:** Public docs must carry the source-image context boundary.
- **D-14:** Public docs must carry the public sample review gate.
- **D-15:** Public docs must carry route isolation.
- **D-16:** Public docs must state no endorsement, affiliation, impersonation, campaign, advertising, or fandom-promotion claims.
- **D-17:** Public docs must state stylized mascot-only output.

</decisions>

<canonical_refs>
## Canonical References

- `.planning/REQUIREMENTS.md` - DOC-01 through DOC-05 and Phase 47 validation ownership.
- `.planning/phases/45-cai-xukun-skill-controller-integration/45-CONTEXT.md` - Phase 45 handoff for runtime controller boundaries and agent metadata ownership.
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md` - uploaded-image authority, public-figure likeness boundary, source-image context, public sample policy, and review owner.
- `skills/visual-ip-illustrations/references/routing.md` - route aliases, status, output suffix, output path, and route isolation contract.

</canonical_refs>

<specifics>
## Required Public Markers

Phase 46 documentation edits must preserve these markers across the relevant public surfaces:

- `gated-public-figure`
- `蔡徐坤`
- `Cai Xukun`
- `caixukun`
- `cxk`
- `skills/visual-ip-illustrations/references/ips/caixukun/source.md`
- `assets/<article-slug>-caixukun/`
- `assets/&lt;article-slug&gt;-caixukun/`
- uploaded-image authority
- public-figure likeness boundary
- source-image context boundary
- public sample review gate
- route isolation
- no endorsement, affiliation, impersonation, campaign, advertising, or fandom-promotion claims
- stylized mascot-only output

</specifics>

<risks>
## Risks

- README variant parity can drift across localized files.
- Public docs can leak local filesystem paths.
- Public wording can overclaim a relationship with the public figure.
- Generated public samples require explicit approval before release.
- Validator drift is deferred to Phase 47.

</risks>

<validation>
## Validation Strategy

- Grep all README variants and public surfaces for required Cai Xukun markers.
- Check absence of local source paths in public docs.
- Run `git diff --check`.

</validation>

<deferred>
## Deferred to Phase 47

- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`
- Validator hardening
- Node tests
- Final release evidence

</deferred>

---

*Phase: 46-Cai Xukun Public Documentation and Release Surface*
*Context gathered: 2026-06-18*
