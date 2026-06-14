# Phase 22: Skill Package and Runtime Metadata Rebrand - Context

**Gathered:** 2026-06-14T16:45:00+08:00
**Status:** Ready for planning

<domain>
## Phase Boundary

Users can discover the canonical skill identity and keep using existing IP routes with stable routing, outputs, and compatibility behavior.

Phase 22 covers package and runtime metadata only. It may update installed skill metadata, agent metadata, runtime alias wording, and local package-path migration guidance. Phase 23 owns broad README install docs, examples, NOTICE, release checklist copy, and public documentation rebrand work. Phase 24 owns validator and Node test expansion for canonical naming, legacy alias compatibility, route stability, install guidance, and stale old-name-only surfaces.

This phase covers PKG-01 through PKG-04.

</domain>

<decisions>
## Implementation Decisions

### Skill ID and Frontmatter Strategy

- **D-01:** The canonical skill frontmatter `name` should become `visual-ip-illustrations` so the runtime exposes `$visual-ip-illustrations`.
- **D-02:** The legacy `$ian-xiaohei-illustrations` invocation must remain documented in runtime and metadata surfaces as a compatibility alias during v1.4.
- **D-03:** Runtime wording should lead with `Visual IP Illustrations` and describe the package as a selectable multi-IP article illustration skill.
- **D-04:** Xiaohei remains the omitted-IP default route after the rebrand.
- **D-05:** Phase 22 should preserve the current route behavior while changing canonical discovery surfaces.

### Agent Metadata Copy

- **D-06:** `ian-xiaohei-illustrations/agents/openai.yaml` should lead with display name `Visual IP Illustrations`.
- **D-07:** The agent short description should describe a multi-IP article illustration package with selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routes.
- **D-08:** The agent default prompt should use `$visual-ip-illustrations` as the canonical invocation and mention `$ian-xiaohei-illustrations` as the v1.4 legacy compatibility alias.
- **D-09:** Agent metadata must preserve omitted-IP default behavior for Xiaohei and explicit route behavior for Littlebox, Tom, Ferris, and Sealos Seal.

### Legacy Alias and Runtime Compatibility

- **D-10:** `$ian-xiaohei-illustrations` remains a v1.4 compatibility surface for existing prompts and local installs.
- **D-11:** Compatibility alias documentation should be local to runtime/package metadata during Phase 22, with broader public examples deferred to Phase 23.
- **D-12:** Runtime copy should name the canonical skill id, legacy alias, and migration boundary in one place so downstream validator work can check deterministic markers.

### Package Path Migration Boundary

- **D-13:** The canonical install slug and package path is `visual-ip-illustrations`.
- **D-14:** The legacy path `ian-xiaohei-illustrations` remains a compatibility source during v1.4.
- **D-15:** Package-path migration guidance should be local and conservative: users can copy or install the canonical package path while keeping the legacy path available during transition.
- **D-16:** If Phase 22 introduces a canonical package directory, it must keep legacy package behavior accessible or document a safe copy/migration path.
- **D-17:** Phase 22 should avoid removing the legacy directory unless a validator/test plan protects legacy invocation and package behavior.
- **D-18:** Broad README install command rewrites are Phase 23 work.

### Route Stability Fence

- **D-19:** Existing route ids remain stable: `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`.
- **D-20:** Existing aliases remain stable:
  - Xiaohei: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`
  - Littlebox: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`
  - Tom: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`
  - Ferris: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`
  - Sealos Seal: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal`
- **D-21:** Existing route statuses remain stable: Xiaohei `active`, Littlebox `active`, Tom `gated-authorized`, Ferris `source-reviewed`, and Sealos Seal `brand-owned`.
- **D-22:** Existing required references remain stable for all five routes.
- **D-23:** Existing output suffixes remain stable: Xiaohei `illustrations`, Littlebox `littlebox`, Tom `tom`, Ferris `ferris`, and Sealos Seal `sealos`.
- **D-24:** Existing output directories and generated asset paths remain stable:
  - Xiaohei: `assets/<article-slug>-illustrations/`
  - Littlebox: `assets/<article-slug>-littlebox/`
  - Tom: `assets/<article-slug>-tom/`
  - Ferris: `assets/<article-slug>-ferris/`
  - Sealos Seal: `assets/<article-slug>-sealos/`
- **D-25:** Route-local IP packs, rights/source/brand boundaries, prompt templates, QA gates, edit behavior, and delivery reports stay stable during Phase 22.

### Requirement Mapping

- **PKG-01:** Installed skill metadata exposes `Visual IP Illustrations` as the canonical skill identity.
- **PKG-02:** Agent metadata presents Visual IP Illustrations as the multi-IP article illustration skill while preserving Xiaohei as the omitted-IP default.
- **PKG-03:** Existing route ids, aliases, required references, route statuses, and output suffixes for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal remain stable.
- **PKG-04:** Maintainer can follow documented local migration guidance from `ian-xiaohei-illustrations` to `visual-ip-illustrations`.

### the agent's Discretion

The user requested auto execution and supplied locked selections. The selected implementation stance is conservative: rebrand runtime/package discovery surfaces, preserve all route behavior and output paths, document legacy compatibility locally, and defer public documentation breadth to Phase 23.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Planning Authority

- `.planning/ROADMAP.md` — Defines Phase 22 goal, dependency on Phase 21, PKG-01 through PKG-04, success criteria, and Phase 23/24 ownership.
- `.planning/REQUIREMENTS.md` — Defines active package/runtime compatibility requirements and v1.4 out-of-scope boundaries.
- `.planning/PROJECT.md` — Defines the v1.4 rebrand context, core value, canonical identity, route compatibility requirement, and legacy alias policy.
- `.planning/STATE.md` — Records Phase 22 as current position and accumulated decisions from prior route milestones.
- `.planning/phases/21-naming-and-compatibility-contract/21-CONTEXT.md` — Locks canonical name, repository/install slug, canonical skill id, legacy alias policy, route/output stability, and Phase 22 ownership.
- `.planning/phases/21-naming-and-compatibility-contract/NAMING-CONTRACT.md` — Single source of truth for `Visual IP Illustrations`, `visual-ip-illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, route stability, output path stability, and package path boundary.
- `.planning/phases/21-naming-and-compatibility-contract/21-VERIFICATION.md` — Verifies Phase 21 contract truth, baseline validator output, Node tests, and diff scope.

### Codebase Maps

- `.planning/codebase/CONVENTIONS.md` — Defines Markdown style, path conventions, package directory naming, and documentation-first conventions.
- `.planning/codebase/STRUCTURE.md` — Defines the installable skill package, runtime metadata location, public docs, examples, scripts, and route-reference placement.

### Runtime and Package Surfaces

- `ian-xiaohei-illustrations/SKILL.md` — Current skill frontmatter, controller workflow, route selection rules, compatibility references, generation flow, QA flow, output path contract, and delivery fields. Likely Phase 22 edit target.
- `ian-xiaohei-illustrations/agents/openai.yaml` — Current agent display metadata, short description, default prompt, and implicit invocation policy. Likely Phase 22 edit target.
- `ian-xiaohei-illustrations/references/routing.md` — Route metadata authority for ids, display names, aliases, defaults, output suffixes, required references, attribution context, statuses, legacy path availability, output paths, and delivery report fields. Stability fence for Phase 22.
- `README.md` — Current public install and usage surface. Read for context; broad install docs and public rebrand copy belong to Phase 23.
- `examples/prompts.md` — Current smoke prompt inventory and route examples. Read for compatibility context; canonical prompt examples belong to Phase 23.

### Validation Surfaces for Later Phases

- `scripts/validate-skill-package.mjs` — Current dependency-free validator with package constants, frontmatter parsing, YAML parsing, route table parsing, link parsing, output path token checks, and approval helpers. Phase 24 hardens naming and alias checks here.
- `scripts/validate-skill-package.test.mjs` — Current Node test suite and fixtures for route stability, parser helpers, approval gates, route drift, output paths, and validator order. Phase 24 expands this coverage.

### Route-Local Authorities

- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` — Xiaohei canonical pack navigation and compatibility baseline.
- `ian-xiaohei-illustrations/references/ips/xiaohei/style-dna.md` — Xiaohei visual style authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/xiaohei-ip.md` — Xiaohei character identity and action authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/composition-patterns.md` — Xiaohei composition and original-metaphor authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md` — Xiaohei prompt and edit template authority.
- `ian-xiaohei-illustrations/references/ips/xiaohei/qa-checklist.md` — Xiaohei QA authority.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` — Littlebox canonical pack navigation, source attribution, and output path boundary.
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

- `ian-xiaohei-illustrations/SKILL.md`: Contains the current frontmatter `name: ian-xiaohei-illustrations`, Chinese description, title, core positioning, route rules, and output contract. This is the main runtime identity surface.
- `ian-xiaohei-illustrations/agents/openai.yaml`: Contains current display name, short description, default prompt using `$ian-xiaohei-illustrations`, and `allow_implicit_invocation: true`.
- `ian-xiaohei-illustrations/references/routing.md`: Contains five stable route rows and the legacy Xiaohei root-reference availability section.
- `scripts/validate-skill-package.mjs`: Exposes `PACKAGE_DIR = "ian-xiaohei-illustrations"` and parser helpers. Phase 22 can leave broad validator hardening to Phase 24, but implementation should preserve deterministic text markers for later checks.
- `scripts/validate-skill-package.test.mjs`: Current tests assert frontmatter name `ian-xiaohei-illustrations` and current package constants, so downstream planning should decide whether Phase 22 updates tests now or records expected Phase 24 work.

### Established Patterns

- The repository is documentation-first. Runtime behavior is governed by Markdown skill instructions and YAML metadata.
- Route-specific style, prompt, QA, rights/source/brand notes, and output paths stay isolated under `ian-xiaohei-illustrations/references/ips/<route>/`.
- Xiaohei is the only omitted-IP default. Added IPs are explicit with `default=false`.
- Sensitive routes carry route status and authority pointers through planning, generation, QA, edit, delivery, docs, release, validator, and tests.
- Public rendered samples remain release-gated for Tom, Ferris, and Sealos Seal.
- Existing validator checks are deterministic text-marker checks. Phase 22 wording should use exact, repeated strings for canonical skill id, legacy alias, canonical package path, and legacy package path.

### Integration Points

- Update `ian-xiaohei-illustrations/SKILL.md` frontmatter and top-level runtime identity wording for `visual-ip-illustrations`, `Visual IP Illustrations`, `$visual-ip-illustrations`, and `$ian-xiaohei-illustrations` compatibility.
- Update `ian-xiaohei-illustrations/agents/openai.yaml` display and default prompt copy to lead with `Visual IP Illustrations`.
- Add local package-path migration guidance in a runtime/package metadata surface such as `SKILL.md`, `agents/openai.yaml`, or a narrowly scoped package metadata note. Broad README install command changes belong to Phase 23.
- Preserve `ian-xiaohei-illustrations/references/routing.md` route rows unless a minimal metadata note is needed. Route row values should stay unchanged.
- Preserve output directories under `assets/<article-slug>-.../`.
- Preserve existing route-local IP packs and legacy root Xiaohei reference paths.

</code_context>

<specifics>
## Specific Ideas

- Canonical skill frontmatter name: `visual-ip-illustrations`.
- Canonical skill invocation: `$visual-ip-illustrations`.
- Legacy compatibility alias: `$ian-xiaohei-illustrations`.
- Canonical product name: `Visual IP Illustrations`.
- Canonical install slug/path: `visual-ip-illustrations`.
- Legacy package path: `ian-xiaohei-illustrations`.
- Agent metadata display should begin with `Visual IP Illustrations`.
- Agent metadata should describe selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routes.
- Omitted visual IP keeps selecting Xiaohei.
- Phase 22 should keep public docs owned by Phase 23 stable except for narrow runtime/package metadata references required by PKG-01 through PKG-04.

</specifics>

<deferred>
## Deferred Ideas

- Full GitHub repository rename from `ian-xiaohei-illustrations` to `visual-ip-illustrations`, including remote URL migration, redirect behavior, release choreography, and user migration comms.
- v2 installer or selector for installing selected IP variants through a CLI-level package/distribution flow.
- Machine-readable visual-IP manifest for source, license, trademark, brand, endorsement, and canonical image records.
- Public README install command rebrand, canonical examples, NOTICE rebrand wording, release checklist copy, and docs-wide stale old-name-only cleanup are Phase 23 work.
- Validator and Node test expansion for canonical naming, legacy alias compatibility, install guidance, and stale old-name-only surfaces is Phase 24 work unless Phase 22 implementation changes require immediate safety checks.

</deferred>

---

*Phase: 22-Skill Package and Runtime Metadata Rebrand*
*Context gathered: 2026-06-14T16:45:00+08:00*
