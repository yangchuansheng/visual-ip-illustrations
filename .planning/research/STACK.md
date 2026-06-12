# Stack Research: Authorized Tom IP Integration

**Research type:** Project Research - Stack dimension
**Project:** Multi-IP Article Illustration Skills
**Researched:** 2026-06-13
**Scope:** Add Tom from Tom and Jerry as a third selectable visual IP while preserving the existing lightweight Codex Skill package, Xiaohei default route, Littlebox explicit route, and local Node validator.

## Recommendation

Keep the stack unchanged: Markdown reference packs, YAML agent metadata, static assets, and dependency-free Node validation. Tom should be added as another canonical IP pack under `ian-xiaohei-illustrations/references/ips/tom/`, with routing metadata in `references/routing.md` and validation coverage in `scripts/validate-skill-package.mjs`.

The key stack addition is rights-boundary metadata and validation. Tom is a protected commercial character, so the route needs source, rights holder, allowed-use assumption, attribution wording, and public-release boundary markers in `NOTICE.md`, `README.md`, `RELEASE_CHECKLIST.md`, and the validator.

## Stack Additions

| Layer | Addition | Rationale |
|---|---|---|
| IP references | Add `ian-xiaohei-illustrations/references/ips/tom/` canonical pack | Matches the existing Xiaohei and Littlebox isolation model. |
| Routing | Add `tom` row to `ian-xiaohei-illustrations/references/routing.md` | Keeps IP id, aliases, default flag, output suffix, references, attribution context, and status in the existing route table. |
| Skill runtime docs | Extend `ian-xiaohei-illustrations/SKILL.md` route selection, shot-list, generation, QA, and delivery sections | The runtime remains prose-driven and route-first. |
| Agent metadata | Update `ian-xiaohei-illustrations/agents/openai.yaml` display copy | Installed skill surfaces Xiaohei, Littlebox, and Tom selection. |
| Public docs | Update `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md` | Users and maintainers need Tom prompts, output paths, release checks, and rights context. |
| Validation | Extend `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` | Existing checks are hard-coded for Xiaohei and Littlebox; Tom needs the same package, route, docs, prompt, output, smoke, and boundary coverage. |

## Tom Canonical Pack

Recommended files:

```text
ian-xiaohei-illustrations/references/ips/tom/
├── index.md
├── style-dna.md
├── tom-ip.md
├── composition-patterns.md
├── language-and-labels.md
├── prompt-template.md
└── qa-checklist.md
```

Use the Littlebox pack shape because Tom also needs IP-specific identity, label policy, prompt constraints, QA failures, and attribution boundaries. Keep file names lowercase kebab-case and keep `tom-ip.md` parallel to `xiaohei-ip.md` and `littlebox-ip.md`.

## Routing Contract

Add a third active route with these expected fields:

| Field | Recommended value |
|---|---|
| `id` | `tom` |
| `display_name` | `Tom` |
| `aliases` | `Tom`, `汤姆`, `Tom Cat`, `Tom and Jerry`, `tom-and-jerry` |
| `default` | `false` |
| `output_suffix` | `tom` |
| `required_references` | all Tom canonical pack operational files |
| `attribution_context` | Tom and Jerry / Tom Cat source, rights holder, allowed-use assumption, public distribution boundary |
| `status` | `active` only after rights-boundary docs and validator markers land |

Output path:

```text
assets/<article-slug>-tom/
assets/&lt;article-slug&gt;-tom/
```

Mixed-IP behavior should generalize from two variant groups to route groups for Xiaohei, Littlebox, and Tom. Each group loads only its own `required_references` and writes to its own output suffix.

## Files to Modify

| File | Change |
|---|---|
| `ian-xiaohei-illustrations/references/ips/tom/index.md` | Pack navigation, responsibilities, output path, rights-boundary pointer. |
| `ian-xiaohei-illustrations/references/ips/tom/style-dna.md` | Tom-specific article-illustration visual rules and style limits. |
| `ian-xiaohei-illustrations/references/ips/tom/tom-ip.md` | Character identity, allowed poses/actions, likeness constraints, failure modes. |
| `ian-xiaohei-illustrations/references/ips/tom/composition-patterns.md` | Tom-appropriate cognitive-action metaphors and anti-repeat rules. |
| `ian-xiaohei-illustrations/references/ips/tom/language-and-labels.md` | Prompt language, visible-label language, and delivery wording. |
| `ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` | Shot-list fields, generation prompt, and edit prompts. |
| `ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` | Tom identity, action, text, background, density, and rights-boundary checks. |
| `ian-xiaohei-illustrations/references/routing.md` | Add Tom route row, aliases, suffix, required references, mixed route wording, output path. |
| `ian-xiaohei-illustrations/SKILL.md` | Add Tom to reference loading, route selection, planning fields, generation rules, QA risks, save paths, and delivery blocks. |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Mention selectable Xiaohei, Littlebox, or Tom while preserving Xiaohei as default. |
| `README.md` | Add Tom route overview, aliases, output path, canonical pack path, sample prompt, and rights boundary note. |
| `examples/prompts.md` | Add explicit Tom route smoke prompts and mixed-IP examples that include Tom. |
| `NOTICE.md` | Add Tom source, rights holder, allowed-use assumption, attribution wording, and distribution boundary. |
| `RELEASE_CHECKLIST.md` | Add Tom automated gate, smoke prompt, attribution review, package boundary, and release-boundary checks. |
| `scripts/validate-skill-package.mjs` | Add Tom file lists, route checks, prompt markers, docs markers, output tokens, smoke checks, and rights-boundary checks. |
| `scripts/validate-skill-package.test.mjs` | Extend parser and marker tests around three-route behavior if existing tests assert fixed two-route fixtures. |

## Validator Changes

Extend existing helpers instead of adding a framework. Recommended changes:

- Add `tomOperationalRefs()` parallel to `xiaoheiOperationalRefs()` and `littleboxOperationalRefs()`.
- Add Tom files to `requiredPackageFiles()`.
- Add `assets/<article-slug>-tom/` and escaped token to `outputPathTokens()`.
- Update `ROUTE-TABLE-001` to require `xiaohei`, `littlebox`, and `tom`.
- Add `ROUTE-TOM-001` for display name, aliases, suffix, attribution markers, and status.
- Update `ROUTE-DEFAULT-001` so Xiaohei remains the only default route and Tom has `default=false`.
- Update `ROUTE-REFS-001` to handle Tom reference count.
- Add `REFS-TOM-001`, `PROMPT-TOM-001`, `IP-TOM-001`, `NOTICE-TOM-001`, and `SMOKE-TOM-001`.
- Update mixed-IP checks so wording covers route groups across all active routes.
- Add a boundary check that public examples do not import rendered Tom images before rights-boundary review clears them.

## Validation Commands

Use the existing commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Useful inspection commands during implementation:

```bash
find ian-xiaohei-illustrations/references/ips -maxdepth 3 -type f | sort
sed -n '1,220p' ian-xiaohei-illustrations/references/routing.md
```

Manual smoke prompts should cover:

1. Omitted visual IP selects Xiaohei.
2. Explicit Xiaohei selects `assets/<article-slug>-illustrations/`.
3. Explicit Littlebox selects `assets/<article-slug>-littlebox/`.
4. Explicit Tom selects `assets/<article-slug>-tom/`.
5. Mixed Xiaohei/Littlebox/Tom request produces isolated route groups.

## What Not To Add

| Avoid | Reason |
|---|---|
| Web app, UI, API service, database, worker, or server runtime | The product is an installable Codex Skill package. |
| `package.json`, npm dependencies, bundler, formatter, or lint stack | The current validator runs with Node built-ins and the repository has no build pipeline. |
| New manifest format | `references/routing.md` is already the canonical machine-checkable route table. |
| Generic custom-IP marketplace or import schema | v1.1 scope is one authorized Tom route. |
| Public rendered Tom example assets before review | Tom needs rights-boundary clearance before public example distribution. |
| Shared prompt template for all IPs | Xiaohei, Littlebox, and Tom need isolated identity, prompt, QA, and output rules. |
| Moving legacy Xiaohei root references | Existing Xiaohei compatibility depends on those paths. |

## Confidence

| Area | Level | Reason |
|---|---|---|
| Stack shape | HIGH | Current repository already uses Markdown/YAML/static assets plus dependency-free Node validation. |
| Integration points | HIGH | `SKILL.md`, `routing.md`, docs, agent metadata, notice, release checklist, and validator are established route integration files. |
| Validator direction | HIGH | Current validator hard-codes package files, routes, prompt markers, docs markers, and output tokens, so Tom can be added by extending the same pattern. |
| Tom visual rule details | MEDIUM | This stack research identifies where Tom rules live; exact style and likeness constraints belong in the Tom IP pack research and implementation. |
| Rights-boundary wording | MEDIUM | The project requires source, rights holder, allowed-use assumption, attribution wording, and distribution boundary; final wording needs maintainer/legal review before broad release. |

## Roadmap Implication

Implement Tom as a vertical route slice: canonical pack first, routing second, runtime/docs third, validator fourth, release-boundary review last. This ordering keeps the package lightweight and gives maintainers a local gate before Tom appears as a normal bundled route.
