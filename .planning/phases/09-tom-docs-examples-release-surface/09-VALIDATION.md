---
phase: 09-tom-docs-examples-release-surface
type: validation-strategy
created: 2026-06-13
---

# Phase 9 Validation Strategy

## Goal

Users and maintainers can request, inspect, and release Tom behavior through public docs and release materials that match the route-status contract.

Phase 9 validates public wording and maintainer release gates. Runtime controller behavior is already verified by Phase 8; validator behavior expansion is owned by Phase 10.

## Write Scope

| Plan | File | Scope |
|------|------|-------|
| 09-01 | `README.md` | Public Tom route documentation, stale Phase 6 wording repair, route hierarchy, output path, rights boundary |
| 09-02 | `examples/prompts.md` | Copyable Tom planning, Tom generation, Tom smoke, and three-IP mixed prompts |
| 09-03 | `ian-xiaohei-illustrations/agents/openai.yaml` | Agent display metadata naming Xiaohei, Littlebox, and Tom while preserving Xiaohei implicit default |
| 09-04 | `RELEASE_CHECKLIST.md` | Final Tom authorization, route status, leakage, public asset, generated sample, validator, and rights review gates |

All plans are Wave 1 because the write scopes are disjoint.

## Source Audit

| Source | ID | Required Item | Plan | Status |
|--------|----|---------------|------|--------|
| GOAL | Phase 9 | Public docs and release materials match Tom route-status contract | 09-01, 09-02, 09-03, 09-04 | COVERED |
| REQ | TDOC-01 | README explains Tom protected-character status, aliases, output path, and rights boundary | 09-01 | COVERED |
| REQ | TDOC-02 | `examples/prompts.md` includes Tom planning, Tom generation, Tom smoke, and three-IP mixed prompts | 09-02 | COVERED |
| REQ | TDOC-03 | `agents/openai.yaml` names Xiaohei, Littlebox, and Tom while preserving Xiaohei default | 09-03 | COVERED |
| REQ | TDOC-04 | `RELEASE_CHECKLIST.md` includes Tom release gates and validator commands | 09-04 | COVERED |
| REQ | TDOC-05 | Public docs avoid broad Tom availability claims while status is gated | 09-01, 09-02, 09-03, 09-04 | COVERED |
| RESEARCH | Public docs mirror runtime truth | README and examples describe Phase 8 behavior: explicit Tom, Xiaohei-only omitted-IP default, separate route groups | 09-01, 09-02 | COVERED |
| RESEARCH | Prompt examples as smoke fixtures | Tom prompt blocks carry status, aliases, rights record, output path, and public sample gate | 09-02 | COVERED |
| RESEARCH | Metadata names three routes | Display copy names Xiaohei, Littlebox, Tom and preserves `policy.allow_implicit_invocation: true` | 09-03 | COVERED |
| RESEARCH | Release gates | Checklist records authorization review, route status review, leakage scan, sample policy, validators, final rights review | 09-04 | COVERED |
| RESEARCH | Stale wording repair | README and prompts remove pre-Phase-8 future-runtime wording | 09-01, 09-02 | COVERED |
| CONTEXT | D-01 | Tom is explicit-only protected-character route with status `gated-authorized` | 09-01, 09-02, 09-03, 09-04 | COVERED |
| CONTEXT | D-02 | Xiaohei remains omitted-IP default; Littlebox and Tom require explicit selection | 09-01, 09-03, 09-04 | COVERED |
| CONTEXT | D-03 | Tom docs include prompts, status, aliases, output path, rights record, release gates | 09-01, 09-02, 09-04 | COVERED |
| CONTEXT | D-04 | Public docs avoid broad Tom availability claims | 09-01, 09-02, 09-04 | COVERED |
| CONTEXT | D-05 | Public docs avoid rendered Tom sample approval claims while gate is pending | 09-01, 09-02, 09-04 | COVERED |
| CONTEXT | D-06 | README includes route status, aliases, raw/escaped path, and rights boundary | 09-01 | COVERED |
| CONTEXT | D-07 | README preserves route hierarchy | 09-01 | COVERED |
| CONTEXT | D-08 | README aligns with `SKILL.md` and `routing.md`, including separate route groups | 09-01 | COVERED |
| CONTEXT | D-09 | Prompt examples include Tom planning, generation, smoke, and three-IP mixed prompts | 09-02 | COVERED |
| CONTEXT | D-10 | Tom-only prompts stay separate from mixed-IP prompts | 09-02 | COVERED |
| CONTEXT | D-11 | Mixed prompts require separate output groups and route-local references | 09-02 | COVERED |
| CONTEXT | D-12 | Tom prompts include status, rights record, and output path | 09-02 | COVERED |
| CONTEXT | D-13 | Prompt examples remain copyable prompts and smoke fixtures with no rendered sample approval claim | 09-02 | COVERED |
| CONTEXT | D-14 | Agent metadata names Xiaohei, Littlebox, and Tom | 09-03 | COVERED |
| CONTEXT | D-15 | Agent metadata preserves Xiaohei implicit default | 09-03 | COVERED |
| CONTEXT | D-16 | Metadata marks Tom explicit and gated/protected while preserving implicit skill invocation | 09-03 | COVERED |
| CONTEXT | D-17 | Release checklist becomes final Tom maintainer gate | 09-04 | COVERED |
| CONTEXT | D-18 | Checklist requires rights review before status or public sample policy changes | 09-04 | COVERED |
| CONTEXT | D-19 | Checklist confirms Tom `default=false` and Xiaohei only implicit default | 09-04 | COVERED |
| CONTEXT | D-20 | Checklist requires leakage scan for broad availability, source-frame recreation, logos, title cards, default Jerry, broad cast, sample claims | 09-04 | COVERED |
| CONTEXT | D-21 | Validator commands belong in checklist; validator behavior expansion stays Phase 10 scope | 09-04 | COVERED |

No deferred idea is planned as implementation work in Phase 9.

## Shared Automated Validation

Run after each plan and before committing the phase:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

## Independent Marker Checks

Use small checks rather than combined regex gates.

### Route Status

```bash
rg -n 'gated-authorized' README.md
rg -n 'gated-authorized' examples/prompts.md
rg -n 'gated-authorized' ian-xiaohei-illustrations/agents/openai.yaml
rg -n 'gated-authorized' RELEASE_CHECKLIST.md
```

### Aliases

```bash
rg -n 'Tom Cat' README.md
rg -n 'Tom and Jerry' README.md
rg -n '汤姆猫' README.md
rg -n 'Tom Cat' examples/prompts.md
rg -n 'Tom and Jerry' examples/prompts.md
rg -n '汤姆猫' examples/prompts.md
```

### Output Suffix And Path

```bash
rg -n 'output_suffix.*tom|output suffix.*tom|输出路径.*tom' README.md
rg -n 'assets/<article-slug>-tom/' README.md
rg -n 'assets/&lt;article-slug&gt;-tom/' README.md
rg -n 'assets/<article-slug>-tom/' examples/prompts.md
rg -n 'assets/&lt;article-slug&gt;-tom/' examples/prompts.md
rg -n 'assets/<article-slug>-tom/' RELEASE_CHECKLIST.md
rg -n 'assets/&lt;article-slug&gt;-tom/' RELEASE_CHECKLIST.md
```

### Rights Boundary

```bash
rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' README.md
rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' examples/prompts.md
rg -n 'ian-xiaohei-illustrations/references/ips/tom/rights.md' RELEASE_CHECKLIST.md
```

### Explicit-Only And Default Behavior

```bash
rg -n 'Xiaohei.*implicit default|implicit default.*Xiaohei|默认.*Xiaohei|Xiaohei.*默认' README.md
rg -n 'Tom.*explicit|explicit.*Tom|Tom.*显式|显式.*Tom' README.md
rg -n 'Littlebox.*explicit|explicit.*Littlebox|Littlebox.*显式|显式.*Littlebox' README.md
rg -n 'Xiaohei.*default|default.*Xiaohei|默认.*Xiaohei|Xiaohei.*默认' ian-xiaohei-illustrations/agents/openai.yaml
rg -n 'Tom.*explicit|explicit.*Tom|Tom.*显式|显式.*Tom' ian-xiaohei-illustrations/agents/openai.yaml
rg -n 'default=false' RELEASE_CHECKLIST.md
rg -n 'only implicit default|唯一.*implicit default|唯一.*默认|only.*default' RELEASE_CHECKLIST.md
```

### Public Sample Policy

```bash
rg -n 'public-sample gate|public sample|Public rendered Tom samples|公开.*Tom.*样例|公共.*Tom.*样例' README.md
rg -n 'public-sample gate|public sample|Public rendered Tom samples|公开.*Tom.*样例|公共.*Tom.*样例' examples/prompts.md
rg -n 'Public rendered Tom samples approved' RELEASE_CHECKLIST.md
rg -n 'PENDING / reviewer / date|reviewer.*date|approval.*reviewer' RELEASE_CHECKLIST.md
```

### Stale Phase 6 Wording

```bash
bash -lc '! rg -n "运行时选择行为由后续阶段接入" README.md'
bash -lc '! rg -n "Phase 8 owns runtime selection behavior" examples/prompts.md'
```

## Success Criteria

- All four target surfaces contain Tom-aware route wording aligned with Phase 8.
- Xiaohei remains the implicit default in public docs and metadata.
- Tom stays explicit, `gated-authorized`, protected, and tied to `rights.md`.
- Public prompt examples are text-only usage examples and smoke fixtures.
- Release checklist contains final maintainer gates and the three required commands.
- `node scripts/validate-skill-package.mjs`, `node --test scripts/validate-skill-package.test.mjs`, and `git diff --check` pass.
