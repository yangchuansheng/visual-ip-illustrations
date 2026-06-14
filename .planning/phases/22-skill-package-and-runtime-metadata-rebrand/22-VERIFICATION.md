---
phase: 22-skill-package-and-runtime-metadata-rebrand
verified: 2026-06-14T08:42:50Z
status: passed
score: 7/7 must-haves verified
overrides_applied: 0
---

# Phase 22: Skill Package and Runtime Metadata Rebrand Verification Report

**Phase Goal:** Users can discover the canonical skill identity and keep using existing IP routes with stable routing, outputs, and compatibility behavior.
**Verified:** 2026-06-14T08:42:50Z
**Status:** passed
**Re-verification:** No - initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Installed skill metadata exposes Visual IP Illustrations as the canonical runtime identity. | VERIFIED | `ian-xiaohei-illustrations/SKILL.md:2` has `name: visual-ip-illustrations`; lines 3, 6, 10, and 16 expose `Visual IP Illustrations`. |
| 2 | Canonical runtime invocation is `$visual-ip-illustrations`, with `$ian-xiaohei-illustrations` documented as the 1.4 compatibility alias. | VERIFIED | `SKILL.md:12`, `SKILL.md:17-21`, `SKILL.md:90`, and `openai.yaml:4` contain both invocations and local migration wording. |
| 3 | Agent metadata presents Visual IP Illustrations as a selectable multi-IP article illustration package. | VERIFIED | `openai.yaml:2-4` starts with `Visual IP Illustrations`, names selectable Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal routes, and uses `$visual-ip-illustrations`. |
| 4 | Omitted visual IP still selects Xiaohei; Littlebox, Tom, Ferris, and Sealos Seal remain explicit routes. | VERIFIED | `SKILL.md:84-89` preserves omitted-IP Xiaohei and explicit route markers; `openai.yaml:4` preserves `default Xiaohei` and explicit route wording. |
| 5 | Route ids, aliases, statuses, required references, output suffixes, and output directories remain stable. | VERIFIED | `routing.md:26-30` preserves the five route rows; `routing.md:53-63` preserves output directories; validator route checks pass. |
| 6 | Maintainer can read local migration guidance for `visual-ip-illustrations` and `ian-xiaohei-illustrations`. | VERIFIED | `SKILL.md:14-21` includes `## 1.4 Runtime Identity and Local Migration` with canonical and legacy package slug/path markers. |
| 7 | Validator and Node test baselines remain green after metadata edits. | VERIFIED | `node scripts/validate-skill-package.mjs` reports `Summary: total=78 passed=78 failed=0 skipped=0`; `node --test scripts/validate-skill-package.test.mjs` reports `tests 40`, `pass 40`, `fail 0`. |

**Score:** 7/7 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `ian-xiaohei-illustrations/SKILL.md` | Canonical skill frontmatter, runtime identity wording, compatibility alias, and local package migration guidance | VERIFIED | Exists, 424 lines, substantive runtime controller. `rg` verifies `name: visual-ip-illustrations`, `Visual IP Illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, `visual-ip-illustrations`, and `ian-xiaohei-illustrations`. Wired as the Codex Skill entrypoint. |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Agent display metadata and canonical default prompt | VERIFIED | Exists, 6 lines, substantive YAML metadata. `display_name` starts with `Visual IP Illustrations`; default prompt uses `$visual-ip-illustrations` and mentions `$ian-xiaohei-illustrations`. |
| `ian-xiaohei-illustrations/references/routing.md` | Stable route metadata authority | VERIFIED | Exists, 74 lines. Five route rows preserve route ids, aliases, defaults, output suffixes, required references, and statuses. Scope guard shows no diff for this file. |
| `scripts/validate-skill-package.mjs` | Synchronized runtime metadata validation for Phase 22 | VERIFIED | Exists, 2513 lines. `SKILL-FM-001` expects `visual-ip-illustrations` and canonical/legacy markers; `AGENT-TOM-001` requires `Visual IP Illustrations`, `$visual-ip-illustrations`, and `$ian-xiaohei-illustrations`. |
| `scripts/validate-skill-package.test.mjs` | Synchronized Node expectations for Phase 22 metadata | VERIFIED | Exists, 1554 lines. Parser helper expects `frontmatter.data.name === "visual-ip-illustrations"` and the full 40-test suite passes. |

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| `SKILL.md` | Codex skill runtime | Frontmatter name | WIRED | `SKILL.md:2` has `name: visual-ip-illustrations`; validator `SKILL-FM-001` passes. |
| `openai.yaml` | Codex/OpenAI agent discovery | `interface.display_name` and `interface.default_prompt` | WIRED | `openai.yaml:2-4` exposes `Visual IP Illustrations`, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, default Xiaohei, and explicit route markers. |
| `SKILL.md` | `references/routing.md` | Route-first reference loading | WIRED | `SKILL.md:73` instructs reading `references/routing.md` first; `SKILL.md:84-112` follows stable route values. |
| `validate-skill-package.mjs` | `SKILL.md` and `openai.yaml` | `SKILL-FM-001` and `AGENT-TOM-001` | WIRED | `validate-skill-package.mjs:908-925` validates `SKILL.md`; `validate-skill-package.mjs:987-991` validates agent metadata markers. |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|---|---|---|---|---|
| `SKILL.md` | Runtime identity and route instructions | Markdown frontmatter and body consumed by Codex Skill runtime | Yes | FLOWING |
| `openai.yaml` | Agent display/default prompt metadata | YAML fields consumed by agent discovery | Yes | FLOWING |
| `routing.md` | Route table rows | Markdown route metadata consumed by `SKILL.md` workflow and validator parser | Yes | FLOWING |
| `validate-skill-package.mjs` | Check result matrix | Repository files read through `requireFile`, `parseFrontmatter`, `parseSimpleYamlShape`, and route table parser | Yes | FLOWING |
| `validate-skill-package.test.mjs` | Test assertions and fixtures | Node test runner invokes live validator and fixture validators | Yes | FLOWING |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|---|---|---|---|
| Validator remains green at 78/78 | `node scripts/validate-skill-package.mjs` | `Summary: total=78 passed=78 failed=0 skipped=0` | PASS |
| Node tests remain green at 40/40 | `node --test scripts/validate-skill-package.test.mjs` | `tests 40`, `pass 40`, `fail 0` | PASS |
| Whitespace diff check clean | `git diff --check` | exit 0, no output | PASS |
| Public docs and routing scope guard clean | `test -z "$(git diff --name-only -- README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/references/routing.md)"` | exit 0, no output | PASS |
| Marker checks cover canonical and legacy runtime strings | `rg -n "name: visual-ip-illustrations|Visual IP Illustrations|\\$visual-ip-illustrations|\\$ian-xiaohei-illustrations|visual-ip-illustrations|ian-xiaohei-illustrations" ...` | Matches in `SKILL.md`, `openai.yaml`, `validate-skill-package.mjs`, and `validate-skill-package.test.mjs` | PASS |

### Probe Execution

Step 7c: SKIPPED. No conventional `scripts/*/tests/probe-*.sh` probes exist, and Phase 22 uses the validator and Node test commands as its runnable evidence.

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|---|---|---|---|---|
| PKG-01 | `22-01-PLAN.md` | Installed skill metadata exposes `Visual IP Illustrations` as the canonical skill identity. | SATISFIED | `SKILL.md:2-16`; `SKILL-FM-001` passes. |
| PKG-02 | `22-01-PLAN.md` | Agent metadata presents Visual IP Illustrations as the multi-IP article illustration skill while preserving Xiaohei as omitted-IP default. | SATISFIED | `openai.yaml:2-4`; `AGENT-TOM-001` and `AGENT-SEALOS-001` pass. |
| PKG-03 | `22-01-PLAN.md` | Existing route ids, aliases, required references, route statuses, and output suffixes remain stable. | SATISFIED | `routing.md:26-30`; route validator checks `ROUTE-XH-001` through `ROUTE-SEALOS-002` pass. |
| PKG-04 | `22-01-PLAN.md` | Maintainer can follow documented local migration guidance from `ian-xiaohei-illustrations` to `visual-ip-illustrations`. | SATISFIED | `SKILL.md:14-21` names canonical and legacy package slug/path and migration guidance. |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|---|---:|---|---|---|
| `scripts/validate-skill-package.test.mjs` | 489, 519, 586, 1242, 1362, 1397, 1464, 1522 | `TBD`, `placeholder` | INFO | These are intentional negative fixtures that verify placeholder approval dates are rejected. They do not flow to runtime output. |
| `scripts/validate-skill-package.mjs` | 887, 893 | `console.log` | INFO | CLI validator output path; required for command evidence. |
| `scripts/validate-skill-package.mjs` | 177, 181, 668 | `return []` | INFO | Parser fallback behavior; covered by passing Node tests. |

### Human Verification Required

None.

### Command Evidence

`node scripts/validate-skill-package.mjs`

```text
[PASS] PKG-SHAPE-001 required skill package files exist and are readable
[PASS] SKILL-FM-001 SKILL.md frontmatter exposes required skill metadata
[PASS] SKILL-ROUTE-001 SKILL.md routes requests through routing.md and selected IP behavior
[PASS] SKILL-REFS-001 SKILL.md lists canonical required references for both routes
[PASS] SKILL-OUTPUT-001 SKILL.md maps route output suffixes to output directories
[PASS] SKILL-GEN-001 SKILL.md preserves host image generation runtime boundary
[PASS] AGENT-SHAPE-001 openai.yaml exposes expected nested metadata keys
[PASS] AGENT-TOM-001 openai.yaml exposes Tom gated route metadata markers
[PASS] AGENT-SEALOS-001 openai.yaml exposes Sealos explicit brand-owned route metadata markers
[PASS] ROUTE-TABLE-001 routing.md exposes the required route metadata columns and rows
[PASS] ROUTE-XH-001 routing.md preserves the Xiaohei active route contract
[PASS] ROUTE-LB-001 routing.md preserves the Littlebox active route contract
[PASS] ROUTE-TOM-001 routing.md preserves the Tom gated route contract
[PASS] ROUTE-FERRIS-001 routing.md preserves the Ferris source-reviewed route contract
[PASS] ROUTE-SEALOS-001 routing.md preserves the Phase 16 Sealos brand-owned route contract
[PASS] ROUTE-SEALOS-002 routing.md preserves the full Phase 20 Sealos route metadata contract
[PASS] ROUTE-DEFAULT-001 routing.md keeps Xiaohei as the only default active route
[PASS] ROUTE-REFS-001 routing.md required_references resolve inside the package
[PASS] ROUTE-PATHS-001 routing.md output suffixes match public output directories
[PASS] ROUTE-MIXED-001 routing.md preserves mixed-IP separate route group wording
[PASS] REFS-XH-001 Xiaohei canonical operational references and index exist
[PASS] REFS-LB-001 Littlebox canonical operational references and index exist
[PASS] REFS-TOM-001 Tom canonical operational references and index exist
[PASS] REFS-FERRIS-001 Ferris canonical route references and source markers exist
[PASS] REFS-SEALOS-001 Sealos canonical route references and shared markers exist
[PASS] LEGACY-XH-001 root Xiaohei compatibility files expose the current contract heading
[PASS] LEGACY-XH-002 root Xiaohei compatibility bodies match canonical pack files
[PASS] PROMPT-XH-001 Xiaohei prompt templates preserve required placeholders
[PASS] PROMPT-LB-001 Littlebox prompt template preserves planning fields
[PASS] PROMPT-LB-002 Littlebox generation template preserves identity and label variables
[PASS] PROMPT-TOM-001 Tom prompt template preserves planning, generation, edit, and rights markers
[PASS] PROMPT-FERRIS-001 Ferris prompt template preserves planning, generation, edit, and source markers
[PASS] PROMPT-SEALOS-001 Sealos prompt template preserves planning, generation, edit, and brand markers
[PASS] IP-XH-001 Xiaohei canonical pack preserves objective IP markers
[PASS] IP-LB-001 Littlebox canonical pack preserves objective IP markers
[PASS] IP-TOM-001 Tom canonical pack preserves protected-character identity and action gates
[PASS] IP-FERRIS-001 Ferris canonical pack preserves source-reviewed identity and action gates
[PASS] IP-SEALOS-001 Sealos canonical pack preserves uploaded-image identity and action gates
[PASS] QA-TOM-001 Tom QA checklist preserves protected-route pass, fail, repair, and delivery markers
[PASS] QA-FERRIS-001 Ferris QA checklist preserves source-reviewed pass, fail, repair, and delivery markers
[PASS] QA-SEALOS-001 Sealos QA checklist preserves brand-owned pass, fail, repair, and delivery markers
[PASS] RIGHTS-TOM-001 Tom rights record preserves required Phase 6 rights markers
[PASS] SOURCE-FERRIS-001 Ferris source record preserves required Phase 11 source and trademark markers
[PASS] SOURCE-SEALOS-001 Sealos source record preserves Phase 16 brand and uploaded-image markers
[PASS] LOGO-SEALOS-001 Sealos route keeps mascot logo-free
[PASS] DOC-LINKS-001 README and examples local Markdown links point to existing files
[PASS] DOC-PATHS-001 README and examples expose raw and escaped output path tokens
[PASS] DOC-ROUTES-001 public docs expose route metadata and canonical pack paths
[PASS] DOC-TOM-001 public docs expose Tom gated route markers
[PASS] DOC-FERRIS-001 public docs expose Ferris source-reviewed route markers
[PASS] DOC-SEALOS-P16-001 public docs expose Phase 16 Sealos route-status markers
[PASS] DOC-SEALOS-P19-001 public docs expose Phase 19 Sealos release-surface markers
[PASS] NOTICE-IAN-001 NOTICE keeps Ian Xiaohei attribution markers
[PASS] NOTICE-LB-001 NOTICE keeps Littlebox attribution markers
[PASS] NOTICE-TOM-001 NOTICE keeps Tom source attribution and permission boundary markers
[PASS] NOTICE-FERRIS-001 NOTICE keeps Ferris source attribution and Rust trademark boundary markers
[PASS] NOTICE-SEALOS-001 NOTICE keeps Sealos brand and canonical image boundary markers
[PASS] SMOKE-DEFAULT-001 examples prompts cover omitted-IP default Xiaohei smoke path
[PASS] SMOKE-XH-001 examples prompts cover explicit Xiaohei smoke path
[PASS] SMOKE-LB-001 examples prompts cover explicit Littlebox smoke path
[PASS] SMOKE-TOM-001 examples prompts cover explicit Tom route smoke path
[PASS] SMOKE-FERRIS-001 examples prompts cover explicit Ferris route smoke path
[PASS] SMOKE-SEALOS-001 examples prompts cover explicit Sealos route smoke path
[PASS] SMOKE-MIXED-001 examples prompts cover mixed-IP variant smoke path
[PASS] SMOKE-MIXED-SEALOS-001 examples prompts cover five-route mixed-IP Sealos variant behavior
[PASS] RELEASE-TOM-001 release checklist keeps Tom rights and public sample gate markers
[PASS] RELEASE-FERRIS-001 release checklist keeps Ferris source, trademark, and public sample gate markers
[PASS] RELEASE-SEALOS-001 release checklist keeps Sealos uploaded-image, no-logo, brand, and public sample gates
[PASS] BOUNDARY-IMG-001 example asset directories do not import rendered Littlebox images
[PASS] BOUNDARY-TOM-LEAK-001 Xiaohei and Littlebox references keep Tom protected-route markers isolated
[PASS] BOUNDARY-FERRIS-LEAK-001 non-Ferris route references keep Ferris source-reviewed markers isolated
[PASS] BOUNDARY-SEALOS-LEAK-001 non-Sealos route references keep Sealos brand-owned markers isolated
[PASS] BOUNDARY-TOM-IMG-001 example asset directories keep Tom rendered assets behind release approval
[PASS] BOUNDARY-FERRIS-IMG-001 example asset directories keep Ferris rendered assets behind release approval
[PASS] BOUNDARY-SEALOS-IMG-001 example asset directories keep Sealos rendered assets behind release approval
[PASS] BOUNDARY-FERRIS-GEN-001 Ferris generated samples stay distinct from public rendered sample release gates
[PASS] BOUNDARY-SEALOS-GEN-001 Sealos generated samples stay distinct from public rendered sample release gates
[PASS] BOUNDARY-P5-001 validator enforces live package and workspace output boundaries
Summary: total=78 passed=78 failed=0 skipped=0
```

`node --test scripts/validate-skill-package.test.mjs`

```text
tests 40
pass 40
fail 0
cancelled 0
skipped 0
todo 0
duration_ms 6059.759792
```

`git diff --check`

```text

```

`test -z "$(git diff --name-only -- README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/references/routing.md)"`

```text

```

Marker checks:

```text
ian-xiaohei-illustrations/SKILL.md:2:name: visual-ip-illustrations
ian-xiaohei-illustrations/SKILL.md:3:description: Visual IP Illustrations ...
ian-xiaohei-illustrations/SKILL.md:6:# Visual IP Illustrations
ian-xiaohei-illustrations/SKILL.md:12:规范调用是 `$visual-ip-illustrations`。`$ian-xiaohei-illustrations` 是 v1.4 compatibility alias，用于现有提示和本地安装迁移期。
ian-xiaohei-illustrations/SKILL.md:16:- Canonical runtime identity: Visual IP Illustrations.
ian-xiaohei-illustrations/SKILL.md:17:- Canonical skill invocation: `$visual-ip-illustrations`.
ian-xiaohei-illustrations/SKILL.md:18:- v1.4 compatibility alias: `$ian-xiaohei-illustrations`.
ian-xiaohei-illustrations/SKILL.md:19:- Canonical package slug/path: `visual-ip-illustrations`.
ian-xiaohei-illustrations/SKILL.md:20:- Legacy package slug/path: `ian-xiaohei-illustrations`.
ian-xiaohei-illustrations/agents/openai.yaml:2:  display_name: "Visual IP Illustrations - Xiaohei / Littlebox / Tom / Ferris + Sealos Seal"
ian-xiaohei-illustrations/agents/openai.yaml:4:  default_prompt: "Use $visual-ip-illustrations ... $ian-xiaohei-illustrations ..."
scripts/validate-skill-package.mjs:911:    if (frontmatter.data.name !== "visual-ip-illustrations") {
scripts/validate-skill-package.mjs:920-924: requires Visual IP Illustrations, $visual-ip-illustrations, $ian-xiaohei-illustrations, visual-ip-illustrations, ian-xiaohei-illustrations.
scripts/validate-skill-package.test.mjs:401:  assert.equal(frontmatter.data.name, "visual-ip-illustrations");
```

### Observations

- `gsd-tools` was unavailable in this shell (`zsh:1: command not found: gsd-tools`), so roadmap and requirement truth extraction used `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`, and `22-01-PLAN.md` directly.
- `.planning/STATE.md` still says Phase 22 is ready to plan. This is a planning-state freshness issue outside the Phase 22 runtime/package goal and outside the user's allowed write scope for this verification turn.

### Gaps Summary

No blocking gaps found. Phase 22 achieved PKG-01 through PKG-04, the validator remains `78/78`, the Node suite remains `40/40`, `git diff --check` is clean, and the scope guard for README, examples, NOTICE, RELEASE_CHECKLIST, and `references/routing.md` is clean.

---

_Verified: 2026-06-14T08:42:50Z_
_Verifier: the agent (gsd-verifier)_
