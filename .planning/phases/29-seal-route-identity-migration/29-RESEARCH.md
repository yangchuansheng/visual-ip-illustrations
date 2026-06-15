# Phase 29: Seal Route Identity Migration - Research

**Researched:** 2026-06-15
**Status:** Ready for planning
**Research mode:** Inline role-specific GSD research because this Codex runtime exposed no `spawn_agent` tool.

## User Constraints

Copied from `.planning/phases/29-seal-route-identity-migration/29-CONTEXT.md`.

### Route Identity Tokens

- **D-01:** Active route metadata for the former Sealos Seal route must use display name `Seal`, route id `seal`, output suffix `seal`, and output directory `assets/<article-slug>-seal/`.
- **D-02:** Existing active `sealos` route identity is migration source history. Downstream implementation should migrate active behavior to `seal` while preserving prior planning, quick-task summaries, milestone evidence, and commit history as historical records.
- **D-03:** Required reference paths for the active route should move from `references/ips/sealos/...` to a product-neutral Seal route-local path such as `references/ips/seal/...` when the route table is migrated. Phase 29 should lock the route metadata and controller-facing paths; Phase 30 owns debranding the route-local file contents.

### Seal Alias Boundary

- **D-04:** Seal aliases must describe a seal character and avoid Sealos product, brand, mascot, cloud platform, cloud OS, AI-native deployment, DevBox, database hosting, app deployment, Kubernetes, advertising, and promotional wording.
- **D-05:** Use clear product-neutral aliases such as `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, and concise Chinese seal-character aliases. Avoid carrying forward `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, and `Sealos 海豹` as active route aliases.
- **D-06:** Alias matching should remain explicit. Generic ambiguous mascot wording should be handled with existing route-selection caution instead of expanding the Seal route beyond a seal-character route.

### Default Route Compatibility

- **D-07:** Xiaohei remains the only omitted-IP default route with `default=true` and output directory `assets/<article-slug>-illustrations/`.
- **D-08:** Littlebox, Tom, Ferris, and Seal remain explicit selectable routes with `default=false`.
- **D-09:** The Visual IP Illustrations package identity and `$ian-xiaohei-illustrations` legacy invocation stay stable during Phase 29.

### Mixed-IP Route Grouping

- **D-10:** Mixed-IP routing must create separate route groups for Xiaohei, Littlebox, Tom, Ferris, and Seal.
- **D-11:** Each mixed-IP route group must load only its route-local `required_references` and write to its route-specific output directory: `assets/<article-slug>-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/<article-slug>-tom/`, `assets/<article-slug>-ferris/`, and `assets/<article-slug>-seal/`.
- **D-12:** Mixed-IP wording should use the route name `Seal` for the migrated route and keep Tom and Ferris rights/source notes unchanged.

### the agent's Discretion

- Choose the exact product-neutral Chinese seal aliases during implementation as long as they are concise, seal-character focused, and covered by route validation in Phase 32.
- Choose whether Phase 29 renames route-local files immediately or leaves file-content debranding to Phase 30, provided active route metadata, required reference pointers, and controller-facing route identity become `seal` in Phase 29.
- Preserve historical Sealos mentions in prior GSD artifacts and source-history notes without treating them as active route behavior.

### Deferred Ideas

- Route-local Seal pack content debranding, prompt metaphors, edit gates, QA gates, and source record cleanup belong to Phase 30.
- README, examples, NOTICE, RELEASE_CHECKLIST, agent metadata, and public release wording migration belong to Phase 31.
- Validator check renaming, stale Sealos leakage fixtures, Node regression coverage, final evidence, and UAT belong to Phase 32.

## Project Constraints (from AGENTS.md)

- User-facing replies begin with `爸爸` and use Simplified Chinese. [VERIFIED: AGENTS.md]
- Code, code comments, commit messages, and pull request text use English. [VERIFIED: AGENTS.md]
- The repository is a lightweight Codex Skill package with Markdown, YAML, scripts, and static assets; there is no app runtime or package dependency install. [VERIFIED: `.planning/codebase/STACK.md`]
- Before file edits, work must go through GSD. This file is part of `$gsd-plan-phase 29`. [VERIFIED: AGENTS.md]
- Keep edits surgical and verifiable. [VERIFIED: AGENTS.md]

## Standard Stack

- Markdown instruction surfaces: `ian-xiaohei-illustrations/SKILL.md` and `ian-xiaohei-illustrations/references/routing.md` define active route behavior. [VERIFIED: codebase grep]
- Route-local reference packs live under `ian-xiaohei-illustrations/references/ips/<route>/` with `index.md`, source/rights authority when needed, style, IP identity, composition, prompt, and QA files. [VERIFIED: codebase grep]
- Validation is dependency-free Node via `scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs`. [VERIFIED: codebase grep]
- No package-manager installs are needed for Phase 29. Package legitimacy audit is not applicable. [VERIFIED: `find` and stack docs]

## Architecture Patterns

- `routing.md` is the single route registry with table columns `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`. [VERIFIED: `ian-xiaohei-illustrations/references/routing.md`]
- `SKILL.md` mirrors route-selection, reference loading, shot-list, generation, mixed-IP, and delivery behavior. The executor must update both the route registry and the skill workflow so active route behavior is coherent. [VERIFIED: `ian-xiaohei-illustrations/SKILL.md`]
- Existing explicit routes use lowercase route ids and matching output suffixes: `littlebox`, `tom`, `ferris`, and current migration source `sealos`. [VERIFIED: `routing.md`]
- Xiaohei is the only default route. The route table expresses this with `xiaohei` `default=true` and every other route `default=false`. [VERIFIED: `routing.md`]
- Mixed-IP behavior is expressed in both `routing.md` and `SKILL.md`; both must list the same five groups and the same output directories. [VERIFIED: codebase grep]

## Phase 29 Target State

- Active Seal route row: `id=seal`, `display_name=Seal`, `default=false`, `output_suffix=seal`, `status=active`. [VERIFIED: CONTEXT.md D-01/D-08 plus roadmap]
- Product-neutral active aliases: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`. [VERIFIED: CONTEXT.md D-04/D-05; exact Chinese aliases are planner discretion]
- Active required references point to `references/ips/seal/index.md`, `source.md`, `style-dna.md`, `seal-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. [VERIFIED: CONTEXT.md D-03 plus existing pack shape]
- Active output directory is `assets/<article-slug>-seal/` and escaped docs token is `assets/&lt;article-slug&gt;-seal/`. [VERIFIED: CONTEXT.md D-01/D-11]
- Existing hoodie seal visual markers stay stable: white rounded seal body, plain navy cap with no logo, plain deep-blue hoodie chest with no logo, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail. [VERIFIED: `.planning/STATE.md` and quick summary]

## Don't Hand-Roll

- Do not create a new route parser or new validation framework. Use the existing Markdown route table and existing Node validator/test suite. [VERIFIED: codebase architecture]
- Do not create a build system, package manifest, or dependency install path. Phase 29 is Markdown and Node-script maintenance inside the existing repository shape. [VERIFIED: `.planning/codebase/STACK.md`]
- Do not migrate README, examples, NOTICE, RELEASE_CHECKLIST, or `agents/openai.yaml` public wording in Phase 29. Those surfaces are Phase 31 scope. [VERIFIED: CONTEXT.md deferred section]

## Common Pitfalls

- Updating `routing.md` without updating `SKILL.md` leaves active route selection split between old `sealos` behavior and new `seal` metadata. [VERIFIED: codebase grep]
- Updating aliases to include generic mascot wording would expand route matching beyond the requested seal-character route. [VERIFIED: CONTEXT.md D-06]
- Renaming route-local paths in the route table while leaving files only under `references/ips/sealos/` would break selected-route reference loading. [VERIFIED: route-local reference pattern]
- Requiring public docs to use `Seal` in Phase 29 would pull Phase 31 scope into this phase. [VERIFIED: CONTEXT.md deferred section]
- Running the existing validator without bounded transition updates will flag stale `sealos` route expectations in tests and route checks. [VERIFIED: `rg` in validation scripts]

## Validation Architecture

- Phase 29 execution should run:
  - `node scripts/validate-skill-package.mjs`
  - `node --test scripts/validate-skill-package.test.mjs`
  - `git diff --check`
- The validator/test updates should cover active route metadata, route parsing, output path tokens, and mixed-IP route grouping for `seal`.
- Phase 29 validation should leave broad stale-Sealos leakage policy, public docs migration checks, release evidence, and UAT to Phase 32.

## Package Legitimacy Audit

No npm, pip, or cargo package installs are planned for Phase 29.

## Research Complete

The implementation can be planned from local codebase evidence and locked user decisions. Confidence is HIGH for route registry and skill-controller surfaces, HIGH for validation command shape, and MEDIUM for the exact bounded validation edits because existing validation combines active route and public-doc checks that are intentionally split across Phases 29, 31, and 32.
