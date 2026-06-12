# Features Research: Multi-IP Article Illustration Skills

**Project:** Multi-IP Article Illustration Skills  
**Dimension:** Features  
**Researched:** 2026-06-12  
**Confidence:** HIGH for repository-derived requirements; MEDIUM for release workflow scope until implementation shape is chosen.

## Summary

V1 should make the existing Ian Xiaohei skill a reliable two-IP Codex Skill package with explicit IP selection, isolated visual rules, isolated QA gates, correct output paths, and documentation that teaches users how to request Xiaohei or Littlebox. The product value is selectable visual identity with stable article-illustration behavior, so the feature set should center on routing, rule isolation, prompt generation, QA, examples, attribution, and lightweight validation.

The table stakes are practical and testable: a user can ask for Xiaohei, ask for Littlebox, or omit the IP and still get a deterministic default. Each generated shot list and image prompt must carry the selected IP's character anatomy, palette, background, action role, label policy, and save path. A maintainer must be able to inspect the package and confirm that reference links, examples, license notices, and routing rules stayed coherent.

Littlebox adds enough hard identity rules to justify a first-class IP module. It needs closed-only paper-box anatomy, front-left three-quarter view, dot eyes on the front panel, tiny legs, at most two side-seam twig arms, one amber jagged seam tape, rough chunky marker linework, and pale sky-blue or pale lavender backgrounds. Xiaohei needs its existing pure-white, thin-line, black-body, red/orange/blue-label contract preserved.

V1 should avoid generalized IP import, blended characters, UI work, batch asset inventory, and model-specific automation. Those features expand the problem from a two-IP skill integration into a visual IP platform.

## Table Stakes

| Feature | User-Facing Behavior | Maintainer / Release Need | Complexity | Acceptance Criteria |
| --- | --- | --- | --- | --- |
| Explicit IP selection | Users can request `小黑`, `Xiaohei`, `小盒`, `Littlebox`, or paper-box/carton wording and receive the matching workflow. | Skill routing rules live in a readable section or reference file with supported aliases. | Medium | At least 6 documented prompts route to the expected IP; ambiguous prompts use the default policy. |
| Backward-compatible default | Existing `$ian-xiaohei-illustrations` prompts continue to produce Xiaohei-style output when the user omits IP selection. | README and SKILL docs state default IP behavior. | Low | Current Xiaohei README examples remain valid with no prompt rewrite required. |
| IP-specific reference isolation | Each IP has its own visual rules, character contract, composition guidance, prompt template, and QA checklist. | File structure makes ownership obvious and avoids cross-IP prose drift. | Medium | Xiaohei references mention pure-white/thin-line/black-body rules; Littlebox references mention closed box/pale backgrounds/marker/tape/arms rules. |
| Router reads only relevant references | The skill tells the agent which shared and IP-specific references to read for the selected IP. | Reference paths are valid inside the installable skill directory. | Medium | A package-shape validation can confirm every referenced file exists. |
| IP-specific shot list fields | Planning output includes placement, core idea, structure/metaphor, active IP action, suggested objects, short labels, and IP-specific style fields. | Examples cover both planning-only and generate-now flows. | Low | Xiaohei shot lists name Xiaohei's action; Littlebox shot lists include `closed` state and background choice. |
| One image per cognitive anchor | The workflow keeps the current article-illustration contract: one image explains one insight, decision point, failure point, or transformation. | Docs preserve default counts: short 1-3, normal 4-8 for Xiaohei, 4-7 for Littlebox, max 9 unless explicitly requested. | Low | Generated planning text avoids paragraph-by-paragraph illustration by default. |
| IP-specific image prompt templates | Generation prompts include the selected IP's canvas, palette, linework, character anatomy, active role, label policy, and bans. | Prompt templates expose required placeholders and can be linted. | Medium | Prompt validation checks required placeholder names and IP-specific hard-rule phrases. |
| Littlebox hard identity gate | Littlebox outputs are checked for closed-only body, front-left three-quarter model, dot eyes on front panel, tiny legs, side-seam twig arms, max two arms, single amber jagged seam tape, pale flat background, and rough marker linework. | Quality gate is stored separately from Xiaohei QA. | Medium | The Littlebox quality checklist contains each hard identity criterion and failure signal. |
| Xiaohei preservation gate | Xiaohei outputs are checked for 16:9, pure white background, black solid Xiaohei, white dot eyes, thin legs, sparse red/orange/blue Chinese labels, large whitespace, and active conceptual work. | Existing QA language remains available and linked from the Xiaohei route. | Low | Existing `qa-checklist.md` criteria are preserved or moved without semantic loss. |
| Output path routing | Final PNGs save under IP-specific directories. | Path rules are documented in SKILL and README. | Low | Xiaohei uses `assets/<article-slug>-illustrations/`; Littlebox uses `assets/<article-slug>-littlebox/`. |
| Delivery report consistency | After generation, the agent reports count, purpose, saved path, and which images are final, optional, or need iteration. | Output contract appears once in shared workflow or per-IP workflow. | Low | Both IP workflows include the same delivery metadata fields. |
| Documentation examples for both IPs | README and `examples/prompts.md` show planning, direct generation, single concept, revision, and style-sample prompts for each IP. | Examples are versioned with the skill and checked for stale command names. | Medium | Every public user action has at least one Xiaohei and one Littlebox invocation. |
| Attribution and notice preservation | Users and maintainers can see Ian/Xiaohei and Littlebox source attribution. | LICENSE/NOTICE mention imported or adapted Littlebox material and source repository. | Low | NOTICE includes Littlebox attribution and source link; README credits source inspiration and license context. |
| Lightweight repository validation | Maintainers can run a local script to check package shape, reference links, required prompt placeholders, docs examples, and routing aliases. | The repo stays documentation-first and avoids an app framework. | Medium | Validation exits nonzero when a referenced file, required alias, output path rule, or quality gate is missing. |
| Release checklist | Maintainers have a short checklist for installing the skill, running validation, scanning docs, and checking both IP routes. | Release steps fit a Markdown-first repository. | Low | A release checklist exists under docs or references and includes both IP smoke prompts. |

## Differentiators

| Feature | Value Proposition | Complexity | V1 Recommendation | Acceptance Criteria |
| --- | --- | --- | --- | --- |
| IP contrast examples | Shows why a user might pick Xiaohei or Littlebox for the same idea. | Medium | Include 2-3 side-by-side prompt examples in docs, with textual prompt outputs rather than requiring new images. | Same article idea has separate Xiaohei and Littlebox prompt examples with different style constraints. |
| Littlebox background balancing | Multi-image Littlebox sets alternate or balance pale sky blue and pale lavender for visual rhythm. | Low | Include in Littlebox planning and prompt template. | Even-numbered Littlebox sets use equal counts; odd-numbered sets differ by one unless theme dictates otherwise. |
| Multilingual visible-label handling | Littlebox source supports multilingual users by writing generation prompts in English while keeping visible labels in the user's language. | Medium | Keep the policy for Littlebox and avoid weakening Chinese-first Xiaohei docs. | Littlebox prompt template separates English generation instructions from quoted visible labels. |
| Shared article-understanding workflow | Both IPs inherit the same cognitive-anchor workflow while diverging only at IP action, style, QA, and path. | Medium | Use a shared workflow section plus per-IP modules. | Docs explain one shared analysis step and two IP-specific execution steps. |
| Cross-disciplinary Littlebox prompt bank | Littlebox already has broad theme examples across technology, AI, economy, psychology, education, law, health, urban life, ecology, and culture. | Medium | Import selectively as reference/examples, with source attribution. | Example coverage includes at least 6 non-overlapping domains and avoids duplicating all upstream material into the main README. |

## Anti-Features

| Anti-Feature | Why Avoid in V1 | What to Build Instead |
| --- | --- | --- |
| Hybrid Xiaohei-Littlebox character | It breaks both IP contracts and makes QA ambiguous. | Explicit single-IP selection per output. |
| Arbitrary user-defined IP import | It requires schema design, validation, prompt compatibility, attribution handling, and examples for unknown styles. | Two curated IP modules with a structure that can support later expansion. |
| Hosted web app or visual picker UI | The repository is a Codex Skill package with Markdown references and no runtime. | Documented prompt aliases and routing rules. |
| Batch generation into a contact sheet | Article body illustrations need separate images, separate prompts, and separate QA. | Generate and save each image separately. |
| PPT, SVG, HTML, Canvas, Keynote, or PDF export | Both source skills define PNG article illustrations as the deliverable. | Keep PNG output and path reporting. |
| Full machine-readable asset inventory | Useful later, but V1 risk is routing and rule isolation. | Validate output path rules and example asset links. |
| Model-provider-specific automation | Image generation depends on the host agent and may vary by environment. | Keep prompt and QA contracts model-agnostic. |
| Exhaustive style-theory documentation in user flow | Users need fast invocation examples and reliable outputs. | Keep deep rules in references and short examples in README. |
| Copying every Littlebox upstream example into primary docs | It bloats the repository and increases maintenance drift. | Keep a compact curated set plus source attribution. |
| Accepting near-miss Littlebox identity | Open lids, extra arms, wrong tape, or beige cardboard weaken the IP immediately. | Regenerate or edit based on hard quality gate. |

## Deferred

| Deferred Feature | Reason to Defer | Trigger for Future Phase |
| --- | --- | --- |
| Generic IP registry schema | V1 needs a durable two-IP foundation first. | Add a third IP or external contributor workflow. |
| Machine-readable IP manifests | Helpful for validation and future tooling, but Markdown references are enough for two IPs. | Routing rules become duplicated or validation needs structured parsing. |
| Automated visual regression tests | Requires generated image fixtures and image-inspection tooling. | Repeated releases show style drift that manual QA misses. |
| Asset metadata index | Current delivery can rely on path and filename conventions. | Users need search, reuse, or gallery generation from old assets. |
| CLI installer or packager | The current distribution is a skill subdirectory copied into Codex. | Multiple install targets or release artifacts become necessary. |
| Full Littlebox rendered image import | The milestone focuses on integration and docs; new final images are out of project initialization scope. | README redesign needs new calibration images under this repository. |
| Cross-IP recommendation engine | Choosing an IP from article tone is subjective and can overcomplicate v1. | Users repeatedly ask which IP fits a piece. |
| Mixed-IP article sets | A single article using both IPs raises consistency and path questions. | A user workflow explicitly needs alternating IPs with clear purpose. |
| Aspect ratio expansion beyond existing examples | Littlebox includes some 21:9 satire examples, while core article body illustrations are 16:9. | Static satire becomes a supported product surface. |
| Localization pass for all docs | Current repo is Chinese-first; Littlebox contains English metadata and multilingual prompt policy. | The skill is prepared for broader non-Chinese distribution. |
| Rich contributor guide | Useful once IP modules are stable. | External PRs start adding IP modules or examples. |

## Dependencies

```text
Package boundary clarity -> Reference file layout -> Routing documentation -> Prompt examples -> Validation script
```

```text
Explicit IP selection -> IP-specific reference loading -> IP-specific shot list -> IP-specific generation prompt -> IP-specific QA -> IP-specific output path
```

```text
Backward-compatible Xiaohei default -> Existing prompt examples remain valid -> Existing users avoid migration work
```

```text
Littlebox source adaptation -> Attribution / NOTICE update -> Littlebox reference modules -> Littlebox quality gate -> Littlebox examples
```

```text
Prompt template placeholders -> Validation script -> Release checklist -> Maintainable future IP additions
```

```text
User-facing docs -> Smoke prompts for both IPs -> Maintainer release confidence
```

Recommended v1 ordering:

1. Preserve Xiaohei default route and current output contract.
2. Add Littlebox as a separate IP module with hard visual identity references and QA.
3. Add routing rules and prompt aliases in the installable `SKILL.md`.
4. Update README and examples so users can request each IP cleanly.
5. Add validation for package shape, reference links, aliases, placeholders, output paths, and required quality-gate phrases.
6. Add attribution and release checklist before shipping.
