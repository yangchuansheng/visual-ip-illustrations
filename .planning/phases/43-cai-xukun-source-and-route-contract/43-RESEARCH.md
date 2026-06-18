# Phase 43: Cai Xukun Source and Route Contract - Research

**Researched:** 2026-06-18
**Domain:** Codex Skill route/source contract for a gated public-figure visual IP
**Confidence:** HIGH

## RESEARCH COMPLETE

Phase 43 should add only the Cai Xukun route/source contract: `skills/visual-ip-illustrations/references/routing.md` plus `skills/visual-ip-illustrations/references/ips/caixukun/source.md`. Full route-local pack files, controller behavior, public docs, NOTICE/release checklist integration, validator hardening, Node fixture expansion, leakage scans, public sample gates, and final evidence belong to Phases 44-47. [VERIFIED: .planning/ROADMAP.md] [VERIFIED: .planning/REQUIREMENTS.md]

**Primary recommendation:** implement Phase 43 as a Go Gopher-style route/source slice, with Cai Xukun-specific `gated-public-figure`, uploaded-image authority, and public-figure likeness boundary markers. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-01-PLAN.md] [VERIFIED: skills/visual-ip-illustrations/references/ips/gopher/source.md]

## User Constraints

- Preserve Xiaohei as the omitted-IP default. Cai Xukun must be explicit with `default=false`. [VERIFIED: .planning/ROADMAP.md] [VERIFIED: .planning/REQUIREMENTS.md]
- Use English for code, code comments, docs, commit messages, and PR copy. Chinese aliases are allowed as route compatibility tokens. [VERIFIED: AGENTS.md] [VERIFIED: .planning/PROJECT.md]
- Keep IP rules isolated under route-local references. [VERIFIED: AGENTS.md] [VERIFIED: skills/visual-ip-illustrations/references/routing.md]
- Treat the two user-uploaded files as the visual authority for v1.9: `/Users/longnv/Downloads/Generated image 1 (9).png` and `/Users/longnv/Downloads/20260618-013721.jpeg`. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: .planning/PROJECT.md]
- Public generated Cai Xukun samples require release review before publication. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: .planning/PROJECT.md]
- Generated outputs stay stylized mascot article illustrations; realistic-person portrait output, official endorsement, affiliation, campaign, impersonation, or fandom-promotion claims are out of scope. [VERIFIED: .planning/REQUIREMENTS.md] [VERIFIED: .planning/PROJECT.md]

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ROUTE-01 | Explicit Cai Xukun aliases while Xiaohei remains omitted-IP default | Route metadata section and default-route risk controls below. [VERIFIED: .planning/REQUIREMENTS.md] |
| ROUTE-02 | Stable id, display name, suffix, and output directory | Exact route metadata table below. [VERIFIED: .planning/ROADMAP.md] |
| ROUTE-03 | Routing metadata includes required references, uploaded-image authority, likeness boundary, route status, and `default=false` | Routing implementation guidance below. [VERIFIED: .planning/ROADMAP.md] |
| SRC-01 | `references/ips/caixukun/source.md` records images, likeness boundary, sample policy, review owner, route status, and source-image context | Source record contract below. [VERIFIED: .planning/REQUIREMENTS.md] |
| SRC-02 | Two uploaded images and stable mascot markers are visible to user and maintainer | Grep-friendly marker list below. [VERIFIED: .planning/REQUIREMENTS.md] |

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Route selection metadata | Skill reference docs | Skill controller later | Phase 43 owns `routing.md` metadata; Phase 45 consumes it in `SKILL.md`. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| Source and likeness authority | Route-local source record | Release checklist later | Phase 43 should create `references/ips/caixukun/source.md`; Phase 46 exposes it publicly. [VERIFIED: .planning/ROADMAP.md] |
| Public sample gating | Source record now | Validator and release checklist later | Phase 43 records the policy; Phase 47 automates enforcement. [VERIFIED: .planning/REQUIREMENTS.md] |
| Default-route preservation | Routing metadata | Validator later | Xiaohei remains the only `default=true`; Phase 43 should verify by manual route inspection. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| Likeness boundary | Source record | Pack QA and prompts later | Phase 43 records the boundary; Phase 44 turns it into prompt/edit/QA behavior. [VERIFIED: .planning/ROADMAP.md] |

## Exact Route Metadata Contract

| Field | Value | Notes |
|-------|-------|-------|
| id | `caixukun` | Required route id. [VERIFIED: .planning/ROADMAP.md] |
| display_name | `Cai Xukun` | Required display name. [VERIFIED: .planning/ROADMAP.md] |
| aliases | `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk` | Required explicit aliases. [VERIFIED: .planning/ROADMAP.md] |
| default | `false` | Xiaohei remains the only omitted-IP default. [VERIFIED: .planning/ROADMAP.md] |
| output_suffix | `caixukun` | Required output suffix. [VERIFIED: .planning/ROADMAP.md] |
| output path | `assets/<article-slug>-caixukun/` | Required raw output path. [VERIFIED: .planning/ROADMAP.md] |
| escaped output marker | `assets/&lt;article-slug&gt;-caixukun/` | Needed wherever escaped docs tokens are checked later, following Go Gopher precedent. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md] |
| status | `gated-public-figure` | Required route status. [VERIFIED: .planning/ROADMAP.md] |
| source record path | `references/ips/caixukun/source.md` | Required source record path from Phase 43 scope. [VERIFIED: .planning/REQUIREMENTS.md] |
| required_references now | `references/ips/caixukun/source.md` | Keep Phase 43 limited to files that exist. Phase 44 can expand to the full pack. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md] |
| attribution_context | Uploaded visual authority plus likeness boundary | Should mention both uploaded image paths, `gated-public-figure`, stylized mascot-only boundary, and public sample release review. [VERIFIED: .planning/REQUIREMENTS.md] |

Recommended route-table row shape:

```markdown
| `caixukun` | Cai Xukun | `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk` | `false` | `caixukun` | `references/ips/caixukun/source.md` | Uploaded visual authority from `/Users/longnv/Downloads/Generated image 1 (9).png` and `/Users/longnv/Downloads/20260618-013721.jpeg`; gated public-figure stylized mascot route; public generated Cai Xukun samples require release review; realistic-person likeness, official endorsement, affiliation, impersonation, and campaign claims stay outside route identity | `gated-public-figure` |
```

## Closest Implementation Precedent

Go Gopher Phase 38 is the closest implementation precedent. It added a single explicit route row, created a route-local `source.md`, kept `required_references` limited to source/route files that existed in that phase, preserved Xiaohei as the only omitted-IP default, and recorded that validator/Node expansion belonged to the final validation phase. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md] [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md]

OpenClaw is the closest source-record precedent for uploaded visual authority wording. Its `source.md` has Source, Character Authority, Uploaded Logo Visual Markers, Sample Policy, Route Status, Allowed Use, Restricted Use, Distribution Boundary, and Review Owner sections. [VERIFIED: skills/visual-ip-illustrations/references/ips/openclaw/source.md]

Use Go Gopher for phase slicing and route/source mechanics. Use OpenClaw for uploaded-image authority section structure. Add Cai Xukun-specific public-figure likeness boundaries from v1.9 requirements. [VERIFIED: .planning/REQUIREMENTS.md]

## Source Record Contract

Create `skills/visual-ip-illustrations/references/ips/caixukun/source.md`. Keep it English-default with exact path and marker tokens. [VERIFIED: AGENTS.md] [VERIFIED: .planning/REQUIREMENTS.md]

Required sections and grep-friendly marker strings:

| Section | Required markers |
|---------|------------------|
| `## Source` | `Character route: Cai Xukun.`, `Route status: \`gated-public-figure\`.`, `Route id: \`caixukun\`.`, `Default marker: \`default=false\`.`, `Output path: \`assets/<article-slug>-caixukun/\`.`, `Source authority for this package: this record at \`references/ips/caixukun/source.md\`.` |
| `## Uploaded Image Authority` | `/Users/longnv/Downloads/Generated image 1 (9).png`, `/Users/longnv/Downloads/20260618-013721.jpeg`, `uploaded visual authority`, `two uploaded stylized mascot references` |
| `## Public-Figure Likeness Boundary` | `gated-public-figure`, `stylized mascot route`, `realistic-person portrait output`, `official endorsement`, `affiliation`, `impersonation`, `campaign`, `celebrity advertising`, `fandom promotion` |
| `## Uploaded Cai Xukun Visual Markers` | `yellow duck-like rounded mascot body`, `silver layered idol hair`, `oversized white eyes`, `red cheek circles`, `orange beak`, `black high-collar top`, `white straps`, `white lower outfit`, `compact black or gray boots` |
| `## Source-Image Context` | `green reference background is source-image context`, `generated article illustrations keep the skill's sparse 16:9 white-background style` |
| `## Sample Policy` | `Public generated Cai Xukun samples require release review before publication.`, `examples/images/`, `skills/visual-ip-illustrations/assets/examples/`, `Internal review samples are allowed under \`assets/<article-slug>-caixukun/\`` |
| `## Route Status` | `Current status: \`gated-public-figure\`.`, `public-figure likeness boundary`, `uploaded-image authority`, `public-sample review boundary` |
| `## Allowed Use` | `Document Cai Xukun route metadata`, `uploaded-image authority`, `public-figure likeness boundary`, `internal review`, `article-illustration mascot route` |
| `## Restricted Use` | `Public generated Cai Xukun samples require release approval before publication.`, `realistic-person portrait output`, `official endorsement`, `affiliation`, `impersonation`, `campaign`, `celebrity advertising`, `fandom promotion`, `generic yellow duck drift`, `route leakage` |
| `## Distribution Boundary` | `Public package distribution must preserve this source record`, `uploaded-image authority`, `sample policy`, `gated-public-figure route status` |
| `## Review Owner` | `Owner: maintainer / release reviewer for the Cai Xukun route.`, `public-figure likeness boundary outcome`, `uploaded-image identity outcome`, `public-sample decision` |

## Routing.md Implementation Guidance

Add Cai Xukun after Go Gopher to preserve existing route order and append the new v1.9 route. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md]

Required routing updates:

- Route Selection Rules: add a bullet for `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk` selecting `caixukun` with status `gated-public-figure`. [VERIFIED: .planning/ROADMAP.md]
- Mixed requests: expand the list from seven route groups to eight route groups by adding Cai Xukun. [VERIFIED: skills/visual-ip-illustrations/references/routing.md]
- Route authority note: add Cai Xukun as an explicit gated public-figure stylized mascot route, referencing both uploaded image paths, `references/ips/caixukun/source.md`, public sample release review, realistic-person likeness boundary, and endorsement/affiliation/impersonation boundaries. [VERIFIED: .planning/REQUIREMENTS.md]
- IP Routes table: append the exact row described above. [VERIFIED: skills/visual-ip-illustrations/references/routing.md]
- Metadata section: add `## Cai Xukun Metadata` with route id, display name, `default=false`, uploaded image authority, route status, raw and escaped output markers, source record, route framing, source-image context, and likeness boundary. [VERIFIED: skills/visual-ip-illustrations/references/routing.md]
- Output Paths: add `caixukun` raw and escaped path entries; update mixed-IP output grouping. [VERIFIED: skills/visual-ip-illustrations/references/routing.md]

## Minimal Compatibility Expectations Now

Phase 43 should verify the route/source contract manually with grep and route-table inspection. The existing validator and tests currently lock the seven-route Go Gopher baseline and will likely fail after adding an eighth route until Phase 47 updates them. [VERIFIED: scripts/validate-skill-package.mjs] [VERIFIED: scripts/validate-skill-package.test.mjs]

Run these local checks after implementation:

```bash
rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|assets/<article-slug>-caixukun|assets/&lt;article-slug&gt;-caixukun" skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/source.md
rg -n "Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|yellow duck-like rounded mascot body|silver layered idol hair|oversized white eyes|red cheek circles|orange beak|black high-collar top|white straps|white lower outfit|compact black or gray boots|realistic-person portrait output|official endorsement|impersonation|green reference background is source-image context" skills/visual-ip-illustrations/references/ips/caixukun/source.md
git diff --check -- skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/source.md
```

Manual route inspection should confirm:

```text
xiaohei:Xiaohei:true:illustrations:active
littlebox:Littlebox:false:littlebox:active
tom:Tom:false:tom:gated-authorized
ferris:Ferris:false:ferris:source-reviewed
seal:Seal:false:seal:active
openclaw:OpenClaw:false:openclaw:source-reviewed
gopher:Go Gopher:false:gopher:source-reviewed
caixukun:Cai Xukun:false:caixukun:gated-public-figure
```

## Leave for Phase 47

These surfaces should remain Phase 47 work unless the executor intentionally expands scope:

- `scripts/validate-skill-package.mjs`: route arrays, output path token arrays, public docs token arrays, language allowlist entries for `蔡徐坤`, route parser expectations, `ROUTE-CAIXUKUN-*`, `SOURCE-CAIXUKUN-*`, `DOC-CAIXUKUN-*`, `NOTICE-CAIXUKUN-*`, `SMOKE-CAIXUKUN-*`, `RELEASE-CAIXUKUN-*`, `BOUNDARY-CAIXUKUN-LEAK-*`, `BOUNDARY-CAIXUKUN-IMG-*`, and `BOUNDARY-CAIXUKUN-GEN-*`. [VERIFIED: scripts/validate-skill-package.mjs]
- `scripts/validate-skill-package.test.mjs`: `requiredCheckIds`, summary total `129`, `routes.length === 7`, route id order, output path assertions, approval parser fixtures, leakage fixtures, public sample fixture names, and full-pass evidence. [VERIFIED: scripts/validate-skill-package.test.mjs]
- Public sample approval parsing for Cai Xukun. Phase 43 should record source policy; Phase 47 should enforce it. [VERIFIED: .planning/ROADMAP.md] [VERIFIED: scripts/validate-skill-package.mjs]
- Leakage scans for Cai Xukun markers in non-Cai-Xukun route packs. Phase 43 should avoid creating leakage; Phase 47 should automate detection. [VERIFIED: .planning/REQUIREMENTS.md]
- NOTICE, README, examples, release checklist, agent metadata, and skill controller integration belong to Phases 45-46 before Phase 47 validates them. [VERIFIED: .planning/ROADMAP.md]

Expected validator behavior if run immediately after Phase 43: likely nonzero because the validator is calibrated for the current seven-route baseline, known path token set, public docs set, language allowlist, and Go Gopher-era fixture expectations. Capture failures as Phase 47 ownership notes, following Phase 38's Go Gopher summary pattern. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md] [VERIFIED: scripts/validate-skill-package.test.mjs]

## Risks And Controls

| Risk | Why It Matters | Phase 43 Control |
|------|----------------|------------------|
| Default-route drift | Omitted visual-IP requests must still select Xiaohei. [VERIFIED: .planning/ROADMAP.md] | Keep only Xiaohei `default=true`; add Cai Xukun row with `default=false`; manually inspect all route defaults. |
| Route leakage | Cai Xukun markers can contaminate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, or Go Gopher packs. [VERIFIED: .planning/REQUIREMENTS.md] | Touch only `routing.md` and `ips/caixukun/source.md` in Phase 43; leave pack-wide docs to later phases. |
| Public-figure realistic-likeness drift | The route uses a public figure name and must stay stylized mascot-only. [VERIFIED: .planning/REQUIREMENTS.md] | Put `realistic-person portrait output` and endorsement/affiliation/impersonation/campaign boundaries in source and routing metadata. |
| Public sample release gate bypass | Rendered public samples require review before appearing in public asset directories. [VERIFIED: .planning/REQUIREMENTS.md] | Record sample policy in `source.md`; avoid adding public rendered assets in Phase 43. |
| Source-image context drift | The green uploaded background could leak into generated article output. [VERIFIED: .planning/PROJECT.md] | Record `green reference background is source-image context` and the 16:9 white-background output rule in `source.md`. |
| Alias overmatching | `cxk` and Chinese name are explicit; broad celebrity/fandom words can over-select the route. [VERIFIED: .planning/REQUIREMENTS.md] | Keep alias set limited to the four required aliases in Phase 43. |

## Don't Hand-Roll

| Problem | Use Instead | Why |
|---------|-------------|-----|
| New route table parser | Existing Markdown table shape in `routing.md` | Validator and tests already parse that shape. [VERIFIED: scripts/validate-skill-package.mjs] |
| New manifest or registry file | Route-local `source.md` plus `routing.md` row | Future manifest requirements are explicitly out of current scope. [VERIFIED: .planning/REQUIREMENTS.md] |
| Full Cai Xukun canonical pack | Phase 44 route-local pack | Phase 43 owns only route/source contract. [VERIFIED: .planning/ROADMAP.md] |
| Validator/test overhaul | Phase 47 validation hardening | Current phase should keep source and route implementation narrow. [VERIFIED: .planning/ROADMAP.md] |

## Code Examples

### Source Record Skeleton

```markdown
# Cai Xukun Source Record

## Source

- Character route: Cai Xukun.
- Source context: Cai Xukun gated public-figure stylized mascot route for article illustrations.
- Route status: `gated-public-figure`.
- Route id: `caixukun`.
- Default marker: `default=false`.
- Output path: `assets/<article-slug>-caixukun/`.
- Source authority for this package: this record at `references/ips/caixukun/source.md`.
- Uploaded visual authority: `/Users/longnv/Downloads/Generated image 1 (9).png` and `/Users/longnv/Downloads/20260618-013721.jpeg`.

## Uploaded Image Authority

- The two uploaded stylized mascot references are the visual authority for this route.

## Public-Figure Likeness Boundary

- Cai Xukun is a `gated-public-figure` stylized mascot route.
- Generated images stay stylized mascot article illustrations.
- Realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, and fandom promotion stay outside this route.
```

### Routing Metadata Snippet

```markdown
- `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk` select the same `caixukun` route and keep route status `gated-public-figure`.
```

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The escaped docs token `assets/&lt;article-slug&gt;-caixukun/` should be added in Phase 43 when routing docs mention escaped output markers. | Exact Route Metadata Contract | Later validator/doc checks may need a different placement, but Go Gopher precedent supports adding it now. |

## Open Questions (RESOLVED)

1. Should Phase 43 create an empty/minimal `references/ips/caixukun/index.md`?
   - What we know: Go Gopher Phase 38 allowed an optional minimal index only if useful, while the required reference remained `source.md`. [VERIFIED: .planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md]
   - Recommendation: create only `source.md` in Phase 43; let Phase 44 create the pack index and full pack files.
   - Resolution: RESOLVED - Phase 43 creates only `source.md`; Phase 44 creates the pack index and full pack files.

2. Should source paths under `/Users/longnv/Downloads/` be copied into the repository?
   - What we know: v1.9 requirements name those two absolute uploaded paths as route visual authority. [VERIFIED: .planning/REQUIREMENTS.md]
   - Recommendation: record the exact paths in `source.md`; defer asset hashing/copying to a future asset requirement or explicit user request.
   - Resolution: RESOLVED - Phase 43 records exact uploaded paths in `source.md`; asset hashing and copying remain future scope or explicit user request.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | Existing validator/test optional run | ✓ | Existing scripts use Node ESM | Manual grep and `git diff --check` |
| `rg` | Marker verification | ✓ | Available in this session | `grep -R` |
| `git` | Diff hygiene | ✓ | Repository is a git worktree | Manual file inspection |

No external packages or services are required. Package legitimacy audit is skipped because Phase 43 installs no dependencies. [VERIFIED: .planning/PROJECT.md]

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Node built-in test runner for existing validator tests. [VERIFIED: scripts/validate-skill-package.test.mjs] |
| Config file | none |
| Quick run command | `rg -n "caixukun|Cai Xukun|蔡徐坤|cxk|gated-public-figure|assets/<article-slug>-caixukun" skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/source.md` |
| Full suite command | `node scripts/validate-skill-package.mjs && node --test scripts/validate-skill-package.test.mjs` after Phase 47 updates expectations |

### Phase Requirements To Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|--------------|
| ROUTE-01 | Explicit aliases and Xiaohei default preservation | grep + manual table inspection | `rg -n "蔡徐坤|Cai Xukun|caixukun|cxk|default=false" skills/visual-ip-illustrations/references/routing.md` | Phase 43 creates/edits |
| ROUTE-02 | id/display/suffix/path | grep | `rg -n "caixukun|Cai Xukun|assets/<article-slug>-caixukun|assets/&lt;article-slug&gt;-caixukun" skills/visual-ip-illustrations/references/routing.md` | Phase 43 edits |
| ROUTE-03 | source reference/status/boundary | grep | `rg -n "references/ips/caixukun/source.md|gated-public-figure|uploaded visual authority|realistic-person portrait output" skills/visual-ip-illustrations/references/routing.md` | Phase 43 edits |
| SRC-01 | source record policy fields | grep | `rg -n "Review Owner|Sample Policy|Public-Figure Likeness Boundary|Source-Image Context" skills/visual-ip-illustrations/references/ips/caixukun/source.md` | Phase 43 creates |
| SRC-02 | uploaded image paths and visual markers | grep | `rg -n "Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg|yellow duck-like rounded mascot body|silver layered idol hair|compact black or gray boots" skills/visual-ip-illustrations/references/ips/caixukun/source.md` | Phase 43 creates |

### Wave 0 Gaps

- [ ] Phase 47 validator entries for Cai Xukun route metadata, source record, language allowlist, output paths, leakage checks, public asset gates, generated sample gate, docs/NOTICE/release surfaces, and final evidence. [VERIFIED: .planning/ROADMAP.md]
- [ ] Phase 47 Node tests for eight-route parsing, `routes.length === 8`, route ordering, approval parsers, fixture failures, public asset sample gates, and full-pass summary. [VERIFIED: scripts/validate-skill-package.test.mjs]

## Security Domain

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No auth surface. [VERIFIED: .planning/PROJECT.md] |
| V3 Session Management | no | No session runtime. [VERIFIED: .planning/PROJECT.md] |
| V4 Access Control | no | File-based skill package only. [VERIFIED: .planning/PROJECT.md] |
| V5 Input Validation | yes | Explicit alias set and route-local source constraints in `routing.md`. [VERIFIED: skills/visual-ip-illustrations/references/routing.md] |
| V6 Cryptography | no | No crypto surface. [VERIFIED: .planning/PROJECT.md] |

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Route spoofing through broad aliases | Spoofing | Keep aliases limited to `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`. |
| Public-figure likeness drift | Tampering / Reputation risk | Record stylized mascot-only boundary and realistic-person/endorsement/impersonation restrictions. |
| Public sample release without review | Repudiation | Record sample policy and review owner now; automate in Phase 47. |
| Cross-route marker leakage | Information disclosure / Integrity | Touch only route row and route-local `caixukun/source.md`; automate leakage scan in Phase 47. |

## Sources

### Primary

- `.planning/ROADMAP.md` - Phase 43 goal, exact route metadata, phase boundaries, and Phase 47 validation ownership.
- `.planning/REQUIREMENTS.md` - ROUTE/SRC requirements, uploaded image paths, visual markers, out-of-scope boundaries.
- `.planning/PROJECT.md` - v1.9 constraints, uploaded visual authority, public-figure likeness boundary, English-default docs policy.
- `.planning/STATE.md` - current milestone state, Go Gopher completion context, default-route decisions.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-CONTEXT.md` - source/route phase slicing precedent.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-PLAN.md` - implementation-ready route/source task pattern.
- `.planning/phases/38-go-gopher-source-and-route-contract/38-01-SUMMARY.md` - expected validator failure ownership pattern.
- `skills/visual-ip-illustrations/references/routing.md` - current route table shape, metadata sections, output paths, mixed-IP grouping.
- `skills/visual-ip-illustrations/references/ips/openclaw/source.md` - uploaded visual authority source-record section precedent.
- `skills/visual-ip-illustrations/references/ips/gopher/source.md` - latest source-reviewed mascot source-record precedent.
- `NOTICE.md` - attribution and public sample gate surface.
- `RELEASE_CHECKLIST.md` - release gate and public asset approval patterns.
- `scripts/validate-skill-package.mjs` - current validator surfaces and seven-route baseline.
- `scripts/validate-skill-package.test.mjs` - current Node fixture surfaces and seven-route baseline.

## Metadata

**Confidence breakdown:**

- Route metadata: HIGH - exact values are present in ROADMAP and REQUIREMENTS.
- Source record sections: HIGH - based on existing OpenClaw and Go Gopher source records plus Cai Xukun-specific requirements.
- Validator boundary: HIGH - current scripts show seven-route and Go Gopher-specific assumptions; Phase 47 owns expansion.
- Security/public-figure risk: HIGH - requirements and project constraints explicitly define stylized mascot and public-sample boundaries.

**Research date:** 2026-06-18
**Valid until:** 2026-07-02
