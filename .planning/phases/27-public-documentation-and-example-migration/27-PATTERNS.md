# Phase 27: Public Documentation and Example Migration - Pattern Map

**Mapped:** 2026-06-15
**Files analyzed:** 7 target files plus Phase 26 verification handoff
**Analogs found:** 7 / 7

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `README.md` | public documentation | request-response docs | `README.md` current route/public identity structure | exact |
| `examples/prompts.md` | public prompt examples | request-response prompt fixtures | `examples/prompts.md` current canonical, smoke, route, and mixed-IP blocks | exact |
| `NOTICE.md` | attribution/legal documentation | reference/approval record | `NOTICE.md` current source and boundary sections | exact |
| `RELEASE_CHECKLIST.md` | maintainer release checklist | batch approval workflow | `RELEASE_CHECKLIST.md` current gates and approval records | exact |
| `scripts/validate-skill-package.mjs` | validator utility | batch transform/assertion | `scripts/validate-skill-package.mjs` public docs, marker, release, and language scan checks | exact |
| `scripts/validate-skill-package.test.mjs` | regression tests | batch fixture validation | `scripts/validate-skill-package.test.mjs` marker drift and approval parser fixtures | exact |
| `.planning/phases/26-skill-and-reference-content-migration/26-VERIFICATION.md` | verification handoff | batch evidence/report | Phase 26 deferred public-doc language findings | exact |

## Current Structure Inventory

### `README.md` (public documentation, request-response docs)

**Analog:** `README.md`

**First-view identity pattern** (lines 1-5):
```markdown
# Visual IP Illustrations

> Visual IP Illustrations ... Canonical invocation: `$visual-ip-illustrations`
```

Preserve first-view markers: `# Visual IP Illustrations`, `$visual-ip-illustrations`, `visual-ip-illustrations`, `$ian-xiaohei-illustrations`, and `ian-xiaohei-illustrations/`.

**Route inventory pattern** (lines 15-25):
```markdown
- **Xiaohei**: implicit default route...
- **Littlebox**: explicit active route...
- **Tom**: explicit protected-character route... `gated-authorized` ... `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- **Ferris**: Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- **Sealos Seal**: explicit Sealos brand mascot route... `brand-owned` ... `ian-xiaohei-illustrations/references/ips/sealos/source.md`
```

**Output path and escaped marker pattern** (lines 36-47):
```markdown
- Xiaohei outputs to `assets/<article-slug>-illustrations/`
- Littlebox outputs to `assets/<article-slug>-littlebox/`
- Tom route output path contract: `assets/<article-slug>-tom/`
- Ferris route output path contract: `assets/<article-slug>-ferris/`
- Sealos Seal route output path contract: `assets/<article-slug>-sealos/`

HTML-escaped docs markers: `assets/&lt;article-slug&gt;-illustrations/` ...
```

**Route detail section pattern** (lines 51-121):
- Each IP gets an `###` subsection.
- Alias lines preserve Chinese aliases exactly.
- Protected/source/brand routes include status, authority path, output suffix, raw path, escaped path, and public sample gate.
- Route reference section points to `ian-xiaohei-illustrations/references/routing.md` and all five canonical pack directories.

**Sample caption pattern** (lines 125-159):
```markdown
### Two Breakpoints

![Two Breakpoints](examples/images/01-two-breakpoints.png)
```

Phase 27 should translate headings and alt text to English while keeping image file paths stable.

**Install guidance pattern** (lines 163-181):
```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

**Maintainer validation pattern** (lines 327-343):
```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

**Related links and author block pattern** (lines 347-373):
- Keep related-project URLs stable.
- Translate labels and descriptions to English.
- Preserve Ian name, GitHub, X/Twitter, website, WeChat, email, QR path, and license link.

### `examples/prompts.md` (prompt examples, request-response prompt fixtures)

**Analog:** `examples/prompts.md`

**Top-level framing pattern** (lines 1-5):
```markdown
# Prompt Examples

... canonical invocation `$visual-ip-illustrations`; `$ian-xiaohei-illustrations` remains ...

## Canonical normal-flow prompts
```

**Canonical prompt block pattern** (lines 7-63):
```markdown
### Default Xiaohei: canonical planning

```text
Use $visual-ip-illustrations ...
...
`assets/<article-slug>-illustrations/`
`assets/&lt;article-slug&gt;-illustrations/`
```
```

Canonical blocks should be English-default copyable prompts. Keep Chinese article sample lines where they prove Chinese article-body behavior.

**Legacy smoke pattern** (lines 65-207):
```markdown
## Legacy compatibility route smoke prompts
## Route smoke: omitted visual IP
## Route smoke: explicit Xiaohei
## Route smoke: explicit Littlebox
## Route smoke: explicit Tom
```

The validator currently keys on several Chinese headings. Phase 27 can rename headings only with matching validator/test updates in the same change set.

**Route-specific prompt pattern** (lines 151-339):
- Each route has planning, generation, and route smoke check blocks.
- Protected/source/brand routes repeat status, authority path, route-local directory, raw path, escaped path, and release gate.
- Sealos blocks include `uploaded-image-canonical`, `uploaded-image-locked`, fixed identity markers, and no-logo markers.

**Mixed-IP pattern** (lines 342-459):
```markdown
## Multi-IP request routing

### Mixed IP: variant planning
### Mixed IP: generate five groups from the same core idea
```

Each variant group must keep route-local references, planning fields, status/source/rights/brand note, and separate output directory.

**Maintainer smoke pattern** (lines 461-517):
```markdown
## Maintainer validation smoke prompts
```

These are text-only route audits. Keep legacy alias coverage with `$ian-xiaohei-illustrations`.

### `NOTICE.md` (attribution/legal documentation, reference/approval record)

**Analog:** `NOTICE.md`

**Public identity and rebrand scope pattern** (lines 1-7):
```markdown
# Notice

Visual IP Illustrations is the current release 1.4 public identity...
... `$visual-ip-illustrations` ... `visual-ip-illustrations` ... `ian-xiaohei-illustrations/` ... `$ian-xiaohei-illustrations`
```

**Attribution section pattern**:
- Ian/Xiaohei: `Ian Xiaohei Illustrations`, `created by Ian`, `小黑`, `Ian's visual language`, `provide attribution to Ian`.
- Littlebox: source project, author `okooo5km`, source URL, MIT, full commit, short commit, copyright, derived documentation.
- Tom: heading `Tom Source Attribution and Permission Boundary`, route status `gated-authorized`, rights path, authorization-scope-specific permission boundary, release checklist approval, public-sample gate.
- Ferris: heading `Ferris Source Attribution and Rust Trademark Boundary`, `rustacean.net`, Karen Rustad Tolva, `source-reviewed`, source path, Rust/Cargo marks, official-affiliation claims, endorsement wording, Rust Foundation trademark policy context.
- Sealos: heading `Sealos Seal Brand and Canonical Image Boundary`, uploaded white seal mascot, `brand-owned`, uploaded-image authority, no-logo mascot identity, Sealos source path, prior exploration boundary, public rendered sample gate, brand wording.

### `RELEASE_CHECKLIST.md` (maintainer release checklist, batch approval workflow)

**Analog:** `RELEASE_CHECKLIST.md`

**Automated gates pattern** (lines 5-25):
```markdown
## Automated Gates

- [ ] Run the package validator:
...
Validator marker changes require `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` to pass in the same change set.
```

**Rebrand review pattern** (lines 31-39):
- Confirm `Visual IP Illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, clone command, package directory, and route markers.

**Route smoke pattern** (lines 41-51):
- One checkbox per route plus mixed-IP smoke.
- Preserve Chinese aliases inside backticks.

**Approval record pattern** (lines 60-193):
```markdown
- [ ] Record authorization review: PENDING / reviewer / date / approval status / authorization scope / release channels.
- [ ] Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.
- [ ] Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.
- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.
```

Keep slash-delimited field order stable. The parser reads these lines.

**Public docs and path markers pattern** (lines 203-212):
- README and examples keep every raw and escaped route output path.
- Public docs keep canonical pack paths and source/rights/brand authority paths.

## Parser-Sensitive Markers

### Identity and Invocation

Source: `scripts/validate-skill-package.mjs` lines 2688-2768.

Required markers:
- `# Visual IP Illustrations`
- `Visual IP Illustrations`
- `$visual-ip-illustrations`
- `$ian-xiaohei-illustrations`
- `visual-ip-illustrations`
- `ian-xiaohei-illustrations/`
- `git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations`
- `cd visual-ip-illustrations`
- `cp -R ./ian-xiaohei-illustrations`
- `Legacy compatibility alias`
- `Legacy compatibility route smoke prompts`
- `route smoke fixture`
- `Release 1.4 Rebrand Review`

### Raw and Escaped Output Paths

Source: `scripts/validate-skill-package.mjs` lines 2341-2346 and 2773-2779.

Each of `README.md` and `examples/prompts.md` must contain:
- `assets/<article-slug>-illustrations/`
- `assets/&lt;article-slug&gt;-illustrations/`
- `assets/<article-slug>-littlebox/`
- `assets/&lt;article-slug&gt;-littlebox/`
- `assets/<article-slug>-tom/`
- `assets/&lt;article-slug&gt;-tom/`
- `assets/<article-slug>-ferris/`
- `assets/&lt;article-slug&gt;-ferris/`
- `assets/<article-slug>-sealos/`
- `assets/&lt;article-slug&gt;-sealos/`

### Route and Authority Paths

Source: `scripts/validate-skill-package.mjs` lines 2348-2434.

Preserve:
- `ian-xiaohei-illustrations/references/routing.md`
- `ian-xiaohei-illustrations/references/ips/xiaohei/`
- `ian-xiaohei-illustrations/references/ips/littlebox/`
- `ian-xiaohei-illustrations/references/ips/tom/`
- `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- `ian-xiaohei-illustrations/references/ips/ferris/`
- `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- `ian-xiaohei-illustrations/references/ips/sealos/`
- `ian-xiaohei-illustrations/references/ips/sealos/source.md`

### Route Status and Alias Markers

Source: `scripts/validate-skill-package.mjs` lines 2358-2411 and 2502-2583.

Preserve:
- Xiaohei aliases: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`
- Littlebox aliases: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`
- Tom aliases: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`
- Ferris aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`
- Sealos aliases: `Sealos Seal`, `Sealos mascot`, `Sealos 吉祥物`, `Sealos 海豹`, `white Sealos seal`, `blue hoodie seal`
- Status markers: `active`, `gated-authorized`, `source-reviewed`, `brand-owned`
- Sealos markers: `uploaded-image-canonical`, `uploaded-image-locked`, `uploaded-image identity`, `no-logo mascot identity`, `generic seal`, `abstract logo creature`, `prior exploration variant`

### Exact Ferris Phrase

Source: `scripts/validate-skill-package.mjs` lines 2372-2377 and `scripts/validate-skill-package.test.mjs` lines 1292-1303.

This exact sentence is required in `README.md`, `examples/prompts.md`, `ian-xiaohei-illustrations/references/routing.md`, and `RELEASE_CHECKLIST.md`:

```text
Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
```

### NOTICE Markers

Source: `scripts/validate-skill-package.mjs` lines 2436-2500.

Preserve section headings:
- `Tom Source Attribution and Permission Boundary`
- `Ferris Source Attribution and Rust Trademark Boundary`
- `Sealos Seal Brand and Canonical Image Boundary`

Preserve core attribution tokens:
- `Ian Xiaohei Illustrations`, `created by Ian`, `小黑`, `Ian's visual language`, `provide attribution to Ian`
- `5km Littlebox Illustrations`, `okooo5km`, source URL, `MIT`, `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7`, `37cd93e`, `Copyright (c) 2026 okooo5km`, `derived documentation`
- Tom/Ferris/Sealos route status, source path, and release gate terms listed above

### Release Approval Parsers

Source: `scripts/validate-skill-package.mjs` lines 2609-2671 and 2952-3013; `scripts/validate-skill-package.test.mjs` lines 156-200.

Keep these line shapes and slash field order:
- `Public rendered Tom samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.`
- `Ferris public asset policy for \`examples/images/\` and \`ian-xiaohei-illustrations/assets/examples/\`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.`
- `Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.`
- `Sealos public asset policy for \`examples/images/\` and \`ian-xiaohei-illustrations/assets/examples/\`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-image identity outcome / no-logo outcome.`
- `Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.`

### Heading Markers Currently Used By Tests

Source: `scripts/validate-skill-package.test.mjs` lines 692-699, 1118-1141, and 1336-1355.

Renaming these headings requires validator and fixture updates:
- `## Canonical normal-flow prompts`
- `## 路由烟测：显式选择 Tom`
- `## 路由烟测：显式选择 Sealos Seal`
- `## 路由说明：多 IP 请求`
- `Sealos Seal Brand and Canonical Image Boundary`
- `Sealos Generated Sample Policy`

## Allowed Han Categories

Source: `LANGUAGE_POLICY.md` and `scripts/validate-skill-package.mjs` lines 28-157.

Allowed residual Han in Phase 27 public docs:
- Chinese route aliases: `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, `Sealos 海豹`
- User-language visible labels in copyable prompts and delivery examples
- Prompt placeholders such as `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, `{标注词1}`
- Attribution/source names required for source, rights, brand, copyright, trademark, or author records
- Compatibility smoke fixtures that prove legacy Chinese aliases and route behavior
- Chinese article illustration examples that intentionally model Chinese article-body labels or user requests

All other Chinese prose in `README.md`, `examples/prompts.md`, `NOTICE.md`, and `RELEASE_CHECKLIST.md` should be translated or narrowed into an approved fixture.

## Recommended Editing Pattern

1. Translate structure first: headings, public prose, captions, related-link descriptions, author labels, checklist descriptions, and prompt explanations.
2. Preserve exact compatibility tokens before rewriting sentences around them: invocations, aliases, statuses, paths, authority files, output suffixes, approval records, and exact Ferris phrase.
3. Convert copyable prompt prose to English-default while keeping intentional Chinese user requests, visible labels, and alias smoke lines.
4. Rename validator-sensitive headings only with matching `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` updates in the same plan.
5. Keep protected/source/brand gates attached to route text: Tom rights gate, Ferris source/trademark gate, Sealos uploaded-image/no-logo/brand gate.
6. Run language scan in report mode after each document group; use enforce mode as the final Phase 27 proof target for public docs.

## Verification Pattern

Required commands:
```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs
```

Expected Phase 27 outcome:
- Normal validator passes.
- Validator tests pass.
- `git diff --check` passes.
- Enforce-mode residual scan has no stale Chinese prose in Phase 27-owned public docs outside approved multilingual tokens.
- Any remaining enforce-mode findings are either approved by `LANGUAGE_POLICY.md` categories or explicitly deferred to Phase 28 hardening.

Phase 26 handoff source: `.planning/phases/26-skill-and-reference-content-migration/26-VERIFICATION.md` records Phase 27 ownership for public docs stale prose and Phase 28 ownership for final hard-fail enforcement.

## Anti-Patterns To Avoid

- Translating route aliases, route ids, statuses, authority paths, output suffixes, raw output paths, escaped output paths, invocation strings, package directory, or clone target slug.
- Removing legacy `$ian-xiaohei-illustrations` smoke coverage while making `$visual-ip-illustrations` the public default.
- Rephrasing the exact Ferris public-sample sentence without updating validator expectations.
- Collapsing Tom, Ferris, and Sealos into a generic protected route paragraph that drops route-local rights/source/brand authority.
- Publishing or implying public rendered Tom, Ferris, or Sealos samples before approval records are filled.
- Changing slash-delimited approval field order.
- Translating Chinese aliases into English-only equivalents.
- Moving generated assets into the installable package boundary.
- Removing local Markdown links or changing image paths during caption translation.
- Adding broad whole-file language allowlist exemptions for Markdown prose.

## Planner Checklist

- [ ] Update `README.md` to English-default public identity, route descriptions, sample captions/alt text, install guidance, maintainer validation, related links, author block, and license section.
- [ ] Preserve README markers listed under Identity, Invocation, Route, Authority, Path, and Release sections.
- [ ] Update `examples/prompts.md` to English-default canonical prompts, legacy smoke descriptions, route-specific prompts, mixed-IP prompts, maintainer smoke prompts, edit prompts, and sample-set prompts.
- [ ] Preserve examples prompt blocks that prove Chinese aliases, Chinese article requests, visible labels, and legacy route behavior.
- [ ] Update `NOTICE.md` prose to English-default while keeping all source, attribution, copyright, trademark, rights, brand, and public-sample boundary tokens.
- [ ] Update `RELEASE_CHECKLIST.md` headings and instructions to English-default while preserving checkbox style, command snippets, slash-delimited approval records, route statuses, and source paths.
- [ ] Update validator markers only where rewritten headings or public phrases intentionally changed.
- [ ] Update tests/fixtures for every intentional marker rename.
- [ ] Run normal validator, test suite, whitespace check, and enforce-mode language scan.
- [ ] Record any remaining Han findings by allowed category from `LANGUAGE_POLICY.md`.

## No Analog Found

| File | Role | Data Flow | Reason |
|---|---|---|---|
| None | N/A | N/A | Every Phase 27 file has an exact existing analog in the current repository. |

## Metadata

**Analog search scope:** `README.md`, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, `LANGUAGE_POLICY.md`, `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, `.planning/phases/26-skill-and-reference-content-migration/26-VERIFICATION.md`
**Files scanned:** 8
**Pattern extraction date:** 2026-06-15
