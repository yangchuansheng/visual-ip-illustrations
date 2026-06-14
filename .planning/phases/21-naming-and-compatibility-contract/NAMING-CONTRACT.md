# Naming and Compatibility Contract

This contract is the v1.4 maintainer source of truth for the Visual IP Illustrations rebrand. It records canonical naming values, legacy alias compatibility, route stability, output path stability, package-path boundaries, and downstream ownership before runtime metadata, public documentation, and validators change in later phases.

## Canonical Naming Values

| Field | Exact Value | Requirement | Downstream Guidance |
|-------|-------------|-------------|---------------------|
| Canonical product name | `Visual IP Illustrations` | RBRD-01, D-01, D-04 | Later public and metadata surfaces lead with the multi-IP product identity. |
| Canonical repository slug | `visual-ip-illustrations` | RBRD-02, D-02, D-05 | Later repository and public install copy use this slug as the canonical slug. |
| Canonical install slug | `visual-ip-illustrations` | RBRD-02, D-02, D-05 | Later local install guidance uses this slug as the canonical install slug. |
| Canonical skill id | `$visual-ip-illustrations` | RBRD-03, D-03, D-06 | Phase 22 owns runtime metadata and invocation wording for this skill id. |

## Legacy Alias Compatibility

| Field | Exact Value | Compatibility Policy |
|-------|-------------|----------------------|
| Documented v1.4 legacy alias | `$ian-xiaohei-illustrations` | Preserved during the v1.4 transition for existing prompts and local installs. |
| Legacy examples surface | `$ian-xiaohei-illustrations` | Remains visible in examples during v1.4. |
| Legacy smoke surface | `$ian-xiaohei-illustrations` | Remains visible in smoke prompts during v1.4. |
| Legacy release-review surface | `$ian-xiaohei-illustrations` | Remains visible in release review during v1.4. |
| Legacy validation surface | `$ian-xiaohei-illustrations` | Remains visible in validator expectations during v1.4. |

## Compatibility Policy

- `Visual IP Illustrations` is the canonical v1.4 product identity.
- `visual-ip-illustrations` is both the canonical repository slug and canonical install slug.
- `$visual-ip-illustrations` is the canonical skill id for later runtime metadata work.
- `$ian-xiaohei-illustrations` remains the v1.4 documented legacy alias and compatibility smoke surface.
- Existing prompt, install, and smoke coverage retain legacy alias visibility while later phases add canonical surfaces.

## Phase Boundary

Phase 21 must not modify runtime metadata/public docs/validators.

Phase 21 records naming and compatibility semantics only. It keeps `ian-xiaohei-illustrations/SKILL.md`, `ian-xiaohei-illustrations/agents/openai.yaml`, `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `ian-xiaohei-illustrations/references/routing.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, route-local IP packs, package directories, and assets unchanged.

## Route Stability Boundary

Xiaohei remains the omitted-IP default route. Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.

| Route ID | Display Name | Selection Boundary | Status | Output Suffix |
|----------|--------------|--------------------|--------|---------------|
| `xiaohei` | Xiaohei | Omitted-IP default route | `active` | `illustrations` |
| `littlebox` | Littlebox | Explicit selectable route | `active` | `littlebox` |
| `tom` | Tom | Explicit selectable protected-character route | `gated-authorized` | `tom` |
| `ferris` | Ferris | Explicit selectable Rust-community mascot route | `source-reviewed` | `ferris` |
| `sealos` | Sealos Seal | Explicit selectable brand-owned route | `brand-owned` | `sealos` |

Route-local reference packs remain authoritative, separately readable, testable, and routable:

- `xiaohei`: `references/ips/xiaohei/`
- `littlebox`: `references/ips/littlebox/`
- `tom`: `references/ips/tom/`
- `ferris`: `references/ips/ferris/`
- `sealos`: `references/ips/sealos/`

## Output Path Stability Boundary

Raw output paths stay stable during the v1.4 rebrand.

| Route ID | Raw Output Path |
|----------|-----------------|
| `xiaohei` | `assets/<article-slug>-illustrations/` |
| `littlebox` | `assets/<article-slug>-littlebox/` |
| `tom` | `assets/<article-slug>-tom/` |
| `ferris` | `assets/<article-slug>-ferris/` |
| `sealos` | `assets/<article-slug>-sealos/` |

Escaped documentation tokens stay stable during the v1.4 rebrand.

| Route ID | Escaped Output Path Token |
|----------|---------------------------|
| `xiaohei` | `assets/&lt;article-slug&gt;-illustrations/` |
| `littlebox` | `assets/&lt;article-slug&gt;-littlebox/` |
| `tom` | `assets/&lt;article-slug&gt;-tom/` |
| `ferris` | `assets/&lt;article-slug&gt;-ferris/` |
| `sealos` | `assets/&lt;article-slug&gt;-sealos/` |

## Package Path Boundary

The legacy installable directory `ian-xiaohei-illustrations/` may continue as the compatibility source until Phase 22 defines package-path handling.

Phase 22 decides canonical package path behavior, including whether the canonical installable package path becomes `visual-ip-illustrations/`, whether `ian-xiaohei-illustrations/` remains a copied compatibility package, and how local users migrate safely.

## Downstream Ownership

| Phase | Ownership |
|-------|-----------|
| Phase 22 | Owns `SKILL.md`, `agents/openai.yaml`, and package path behavior. |
| Phase 23 | Owns README, examples, NOTICE, install guidance, migration guidance, and release checklist copy. |
| Phase 24 | Owns validator checks, Node tests, compatibility smoke coverage, stale old-name-only scans, and final evidence. |

Future package distribution work uses this contract as the v1.4 compatibility baseline.

## Baseline Verification

Phase 21 records the baseline commands that prove the contract artifact preserves current runtime, docs, route, validator, and test surfaces:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```
