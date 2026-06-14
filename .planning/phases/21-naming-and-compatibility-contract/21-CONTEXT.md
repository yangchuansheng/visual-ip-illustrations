# Phase 21: Naming and Compatibility Contract - Context

**Gathered:** 2026-06-14T16:00:00+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 21 delivers one explicit naming contract before package metadata and public docs change. The phase locks the canonical product name, repository/install slug, canonical skill id, legacy alias policy, route stability boundary, output path stability boundary, and package-path compatibility boundary that Phases 22 through 24 will use.

This phase covers RBRD-01 through RBRD-04. It creates planning context only. Phase 22 owns package metadata, skill metadata, agent metadata, runtime invocation wording, and package-path migration guidance. Phase 23 owns README, examples, NOTICE, install docs, migration docs, and release checklist rebrand copy. Phase 24 owns validator and Node test coverage for canonical naming, alias compatibility, route stability, output paths, stale old-name-only surfaces, and release evidence.

</domain>

<decisions>
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

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### GSD Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 21 goal, dependency on Phase 20, RBRD-01 through RBRD-04, success criteria, and later Phase 22-24 ownership.
- `.planning/REQUIREMENTS.md` — Defines the v1.4 naming contract requirements, package/runtime compatibility requirements, public documentation requirements, validation requirements, v2 ideas, and out-of-scope boundaries.
- `.planning/PROJECT.md` — Defines `Visual IP Illustrations` as the current product identity and records the v1.4 rebrand scope, route compatibility requirement, and legacy alias policy.
- `.planning/STATE.md` — Records current focus as Phase 21 and carries accumulated decisions from v1.0 through v1.4.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` — Defines Markdown style, path conventions, reference-file placement, and documentation-first conventions for this repository.
- `.planning/codebase/STRUCTURE.md` — Defines the installable skill package, public docs, examples, static assets, planning docs, and where future rebrand edits connect.
- `.planning/codebase/TESTING.md` — Defines current validation and smoke-test patterns; older map says manual QA, while current repo also has dependency-free validator and Node tests recorded in README and release checklist.

### Current Public and Runtime Surfaces

- `README.md` — Current public entrypoint that still leads with `Ian Xiaohei Illustrations`, documents install command using `ian-xiaohei-illustrations`, and lists all five route outputs.
- `ian-xiaohei-illustrations/SKILL.md` — Current skill frontmatter and controller surface. It defines the current skill name, route selection rules, required references, generation flow, QA flow, save paths, and delivery fields.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Current agent metadata surface. It defines display name, short description, default prompt, and `allow_implicit_invocation`.
- `ian-xiaohei-illustrations/references/routing.md` — Current route metadata authority for aliases, default flags, output suffixes, required references, route statuses, legacy Xiaohei root reference paths, raw output paths, escaped output paths, and delivery report fields.
- `examples/prompts.md` — Current smoke prompt inventory. It preserves `$ian-xiaohei-illustrations`, explicit route prompts, mixed-IP prompts, route-local reference markers, and output path tokens.
- `NOTICE.md` — Current attribution and rights/source/brand boundary surface for Ian Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal.
- `RELEASE_CHECKLIST.md` — Current release-review surface for route smoke prompts, attribution review, public sample gates, package boundary, public docs, and validation commands.

### Route-Local Authorities

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Xiaohei canonical pack navigation and compatibility baseline.
- `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` — Xiaohei visual style authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` — Xiaohei character identity and action authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` — Xiaohei composition and original-metaphor authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — Xiaohei prompt and edit template authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — Xiaohei QA authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Littlebox canonical pack navigation and route boundary.
- `ian-xiaohei-illustrations/references/ips/littlebox/style-dna.md` — Littlebox visual style authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/littlebox-ip.md` — Littlebox identity and action authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/composition-patterns.md` — Littlebox composition authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md` — Littlebox label-language authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/prompt-template.md` — Littlebox prompt and edit template authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/qa-checklist.md` — Littlebox QA authority.
- `ian-xiaohei-illustrations/references/ips/tom/index.md` — Tom canonical pack navigation and protected-character route boundary.
- `ian-xiaohei-illustrations/references/ips/tom/rights.md` — Tom rights, authorization scope, distribution boundary, public-sample policy, and route status authority.
- `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` — Tom visual style authority.
- `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` — Tom identity and action authority.
- `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` — Tom composition authority.
- `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` — Tom prompt, edit gate, rights note, and output reminder authority.
- `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` — Tom protected-route QA authority.
- `ian-xiaohei-illustrations/references/ips/ferris/index.md` — Ferris canonical pack navigation and source-reviewed route boundary.
- `ian-xiaohei-illustrations/references/ips/ferris/source.md` — Ferris source, CC0/public-domain context, Rust trademark boundary, public-sample policy, and route status authority.
- `ian-xiaohei-illustrations/references/ips/ferris/style-dna.md` — Ferris visual style authority.
- `ian-xiaohei-illustrations/references/ips/ferris/ferris-ip.md` — Ferris identity and action authority.
- `ian-xiaohei-illustrations/references/ips/ferris/composition-patterns.md` — Ferris composition authority.
- `ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md` — Ferris prompt, edit gate, source/trademark note, and output reminder authority.
- `ian-xiaohei-illustrations/references/ips/ferris/qa-checklist.md` — Ferris source-reviewed QA authority.
- `ian-xiaohei-illustrations/references/ips/sealos/index.md` — Sealos Seal canonical pack navigation and brand-owned route boundary.
- `ian-xiaohei-illustrations/references/ips/sealos/source.md` — Sealos Seal brand, canonical image, uploaded-image identity, no-logo mascot identity, public-sample policy, and route status authority.
- `ian-xiaohei-illustrations/references/ips/sealos/style-dna.md` — Sealos Seal visual style authority.
- `ian-xiaohei-illustrations/references/ips/sealos/sealos-ip.md` — Sealos Seal identity and action authority.
- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` — Sealos Seal composition authority.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` — Sealos Seal prompt, edit prompt, brand/canonical-image note, and output reminder authority.
- `ian-xiaohei-illustrations/references/ips/sealos/qa-checklist.md` — Sealos Seal brand-owned QA authority.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ian-xiaohei-illustrations/references/routing.md`: Best source for stable route ids, aliases, default flags, output suffixes, required references, route statuses, legacy root path availability, raw output paths, escaped output paths, and delivery report fields.
- `ian-xiaohei-illustrations/SKILL.md`: Best source for existing invocation behavior, current `$ian-xiaohei-illustrations` skill id surface, route selection rules, save-path behavior, and mixed-IP grouping.
- `ian-xiaohei-illustrations/agents/openai.yaml`: Best source for package discovery metadata that Phase 22 will rebrand.
- `README.md`: Best source for public install commands, current repository slug, current installable directory copy command, canonical pack links, output path contracts, validation commands, and public framing that Phase 23 will update.
- `examples/prompts.md`: Best source for route smoke prompts, canonical prompt examples, legacy compatibility smoke prompts, route-local reference markers, and output path tokens.
- `NOTICE.md`: Best source for attribution wording that must survive the rebrand.
- `RELEASE_CHECKLIST.md`: Best source for release gates, route smoke checks, package boundary review, public docs/path marker review, and validation commands.
- `scripts/validate-skill-package.mjs`: Phase 24 validator target for canonical naming, legacy alias markers, route stability, output path stability, install migration guidance, and stale old-name-only surfaces.
- `scripts/validate-skill-package.test.mjs`: Phase 24 Node test target for canonical invocation, legacy invocation, route stability, output path stability, and stale old-name-only fixtures.

### Established Patterns

- The repository is documentation-first. Runtime behavior lives in Markdown skill instructions, route references, YAML agent metadata, public docs, examples, and dependency-free validation scripts.
- Route-specific identity, style, prompt, QA, rights/source/brand notes, and output paths stay isolated under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Xiaohei is the sole omitted-IP default. Every added IP is explicit with `default=false`.
- Sensitive routes carry route status and authority pointers through planning, generation, QA, edit, delivery, public docs, release checklist, validator, and tests.
- Public rendered samples remain release-gated for Tom, Ferris, and Sealos Seal.
- Validators use deterministic text markers, Markdown/YAML parsing, route table parsing, fixture mutation, and explicit failure IDs.

### Integration Points

- Phase 21 writes only `.planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md` and `.planning/phases/21-naming-and-compatibility-contract/21-DISCUSSION-LOG.md`.
- Phase 22 should edit `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, and package-path guidance after reading this contract.
- Phase 23 should edit `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md` after reading this contract.
- Phase 24 should edit `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` after reading this contract.

</code_context>

<specifics>
## Specific Ideas

- The primary public name becomes `Visual IP Illustrations`.
- The canonical repository/install slug becomes `visual-ip-illustrations`.
- The canonical skill id becomes `$visual-ip-illustrations`.
- The legacy alias remains `$ian-xiaohei-illustrations` during v1.4.
- The current installable legacy directory may stay available through Phase 22 so existing local installs and prompts have a compatibility source while migration guidance is designed.
- Route and output path stability are part of the naming contract. The rebrand should preserve shipped behavior while changing discovery and public naming surfaces.

</specifics>

<deferred>
## Deferred Ideas

- v2 package selector: `.planning/REQUIREMENTS.md` lists `DIST-02`, where users can install selected IP variants through a CLI-level selector. This stays outside v1.4.
- Full repository rename: the canonical slug is `visual-ip-illustrations`, but GitHub repository renaming, remote URL migration, redirect handling, and release-distribution choreography belong after v1.4 compatibility guidance is in place.
- Machine-readable visual-IP manifest: `.planning/REQUIREMENTS.md` lists `MASC-03`, which can later track source, license, trademark, brand, endorsement, and canonical image records across routes.

</deferred>

---

*Phase: 21-Naming and Compatibility Contract*
*Context gathered: 2026-06-14T16:00:00+08:00*
