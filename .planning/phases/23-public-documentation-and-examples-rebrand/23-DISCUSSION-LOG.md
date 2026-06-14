# Phase 23: Public Documentation and Examples Rebrand - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T16:57:29+08:00
**Phase:** 23-public-documentation-and-examples-rebrand
**Areas discussed:** Public identity and README, install and compatibility guidance, prompt examples and smoke coverage, attribution and release boundaries, validation boundary

---

## Public Identity and README

| Option | Description | Selected |
|--------|-------------|----------|
| Lead with Visual IP Illustrations | README title/opening use Visual IP Illustrations and explain selectable multi-IP value while keeping Chinese-first docs. | ✓ |
| Keep old title primary | README keeps Ian Xiaohei Illustrations as the first-view product identity and adds Visual IP wording later. | |
| Split names equally | README presents both names side by side on primary surfaces. | |

**User's choice:** Lead with Visual IP Illustrations.
**Notes:** The public product has outgrown the Xiaohei-only name. Old-name references stay only where attribution, migration, compatibility, current package path, or source-path context requires them.

---

## Install and Compatibility Guidance

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical slug first, legacy documented | Install/clone guidance leads with `visual-ip-illustrations`; `ian-xiaohei-illustrations` is documented as v1.4 compatibility. | ✓ |
| Legacy install first | Keep the old repository/package slug as the primary install path while mentioning canonical naming separately. | |
| Rename everything in public docs | Replace every visible old-name path with the canonical slug. | |

**User's choice:** Canonical slug first, legacy documented.
**Notes:** Phase 22 kept the live package directory as `ian-xiaohei-illustrations` while documenting `visual-ip-illustrations` as the canonical slug/path. Phase 23 public docs should explain that migration reality without implying route/output path changes.

---

## Prompt Examples and Smoke Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical prompts plus legacy smoke | Add `$visual-ip-illustrations` normal prompts and keep `$ian-xiaohei-illustrations` compatibility smoke prompts. | ✓ |
| Replace all prompts with canonical invocation | Convert every prompt to `$visual-ip-illustrations` and remove old invocation examples. | |
| Keep existing prompt inventory unchanged | Leave examples centered on `$ian-xiaohei-illustrations` for now. | |

**User's choice:** Canonical prompts plus legacy smoke.
**Notes:** Examples must preserve explicit route smoke coverage for omitted-IP Xiaohei, explicit Xiaohei, Littlebox, Tom, Ferris, Sealos Seal, and mixed-IP requests. Mixed-IP prompts continue to require separate variant groups and route-specific fields.

---

## Attribution and Release Boundaries

| Option | Description | Selected |
|--------|-------------|----------|
| Rebrand scope with all boundaries preserved | NOTICE and release materials record the rebrand while preserving Ian, Littlebox, Tom, Ferris, and Sealos Seal attribution/source/brand boundaries. | ✓ |
| Minimal NOTICE edit only | Change only the top product name and leave release materials unchanged. | |
| Public docs simplification | Simplify route boundary language to make docs shorter. | |

**User's choice:** Rebrand scope with all boundaries preserved.
**Notes:** Tom `gated-authorized`, Ferris `source-reviewed`, and Sealos Seal `brand-owned` gates remain intact. Public sample, trademark, endorsement, uploaded-image, no-logo, and brand wording review gates remain release-controlled.

---

## Validation Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Directly affected docs checks only | Update validator/test expectations only when Phase 23 docs edits break the current baseline. | ✓ |
| Full naming hardening now | Add broad canonical/stale-name validator and Node test coverage during Phase 23. | |
| Docs only with no checks | Change public docs and defer every validator/test expectation to Phase 24. | |

**User's choice:** Directly affected docs checks only.
**Notes:** Phase 24 owns comprehensive validator/test expansion and final release evidence. Phase 23 should keep current baselines green if public docs edits touch validator-covered deterministic strings.

---

## Scope Boundary

| Boundary | Decision |
|----------|----------|
| Public docs/examples/release docs | Phase 23 may change README, `examples/prompts.md`, NOTICE, and `RELEASE_CHECKLIST.md`. |
| Runtime metadata | Phase 22 remains stable: `SKILL.md`, `agents/openai.yaml`, route behavior, and package-path migration semantics are locked inputs. |
| Validator hardening | Phase 24 owns broad canonical naming checks, stale-name scans, expanded Node tests, final evidence, and UAT. |
| Baseline break handling | Phase 23 may synchronize directly affected validator/test expectations only when public docs edits break the current baseline. |

## Plan-Phase Research Questions

- Which current validator checks depend on exact README, examples, NOTICE, or release checklist strings?
- Can canonical `$visual-ip-illustrations` prompts be introduced near the top of `examples/prompts.md` while preserving existing smoke fixture markers?
- Which attribution and route-boundary strings must stay exact for Ian, Littlebox, Tom, Ferris, and Sealos Seal release gates?
- Are there old-name-only primary surfaces inside the Phase 23 target files that need public-doc cleanup before Phase 24 validation hardening?

---

## the agent's Discretion

- Exact README section ordering and wording can be decided during planning/implementation.
- Exact prompt inventory placement can be decided as long as canonical prompts and legacy smoke prompts both exist.
- Validator/test synchronization can be scoped to the smallest set needed to keep current Phase 23 docs changes green.

## Deferred Ideas

- Broad validator naming hardening, stale old-name-only scans, Node coverage expansion, final release evidence, and UAT are Phase 24.
- Full repository rename and distribution migration choreography remain future distribution work.
- v2 installer, visual-IP manifest, asset manifest, visual regression checks, and English localization remain outside v1.4 Phase 23.
