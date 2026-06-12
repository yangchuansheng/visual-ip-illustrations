---
phase: 10-validation-hardening
type: validation-strategy
created: 2026-06-13
status: planned
current_validator_summary: "Summary: total=40 passed=40 failed=0 skipped=0"
target_validator_summary: "Summary: total=47 passed=47 failed=0 skipped=0"
current_node_tests: 8
target_node_tests: 15
requirements:
  - TVAL-01
  - TVAL-02
  - TVAL-03
  - TVAL-04
  - TVAL-05
  - TVAL-06
  - TVAL-07
---

# Phase 10 Validation Strategy

## Goal

Maintainers can verify the three-route protected-IP package locally with deterministic validator checks and Node tests.

Phase 10 hardens `scripts/validate-skill-package.mjs` and `scripts/validate-skill-package.test.mjs` around the already shipped Tom route, Tom canonical pack, public docs, metadata, NOTICE, release checklist, leakage boundaries, and public rendered sample gates.

## Baseline

Observed during planning:

```bash
node scripts/validate-skill-package.mjs
# Summary: total=40 passed=40 failed=0 skipped=0

node --test scripts/validate-skill-package.test.mjs
# tests 8
# pass 8
# fail 0
```

Execution target after Phase 10:

```bash
node scripts/validate-skill-package.mjs
# Summary: total=47 passed=47 failed=0 skipped=0

node --test scripts/validate-skill-package.test.mjs
# tests 15
# pass 15
# fail 0

git diff --check
```

## Plan Set

| Plan | Wave | Scope | Requirements |
|------|------|-------|--------------|
| `10-01-PLAN.md` | 1 | Validator implementation hardening in `scripts/validate-skill-package.mjs` | TVAL-01, TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06 |
| `10-02-PLAN.md` | 2 | Node regression coverage hardening in `scripts/validate-skill-package.test.mjs` | TVAL-02, TVAL-03, TVAL-04, TVAL-05, TVAL-06, TVAL-07 |
| `10-03-PLAN.md` | 3 | Final verification evidence and planning-state closeout | TVAL-01, TVAL-07 |

Dependency graph:

```text
10-01 validator check IDs and helper behavior
  -> 10-02 tests assert check IDs, output, fixtures, and parser behavior
    -> 10-03 records final validation evidence and state
```

## Check ID Contract

Keep the existing 40 check IDs stable and add these seven Phase 10 checks:

| Check ID | Placement | Purpose |
|----------|-----------|---------|
| `AGENT-TOM-001` | after `AGENT-SHAPE-001` | `openai.yaml` names Xiaohei, Littlebox, Tom, Xiaohei default behavior, and explicit gated Tom. |
| `REFS-TOM-001` | after `REFS-LB-001` | Tom canonical pack files exist, are readable, and stay route-local. |
| `PROMPT-TOM-001` | after `PROMPT-LB-002` | Tom planning fields, one-image generation markers, output path, edit gates, and rights-status note. |
| `IP-TOM-001` | after `IP-LB-001` | Tom identity, action responsibility, style cues, composition gates, route status, and rights authority. |
| `QA-TOM-001` | after `IP-TOM-001` | Tom QA pass/fail markers, protected-route failure categories, edit repair gates, and delivery judgment. |
| `SMOKE-TOM-001` | after `SMOKE-LB-001` | Tom planning, generation, route smoke, path tokens, and rights markers in `examples/prompts.md`. |
| `BOUNDARY-TOM-LEAK-001` | before `BOUNDARY-TOM-IMG-001` | Xiaohei, Littlebox, and legacy Xiaohei references stay free of Tom protected-route text. |

The resulting full-pass matrix contains 47 ordered `[PASS]` lines and the summary line `Summary: total=47 passed=47 failed=0 skipped=0`.

## Helper Strategy

Use the existing local helper style:

- `parseMarkdownTable()` for route metadata.
- `splitRouteCell()` for semicolon-delimited route cells.
- `outputPathTokens()` for raw and escaped output paths.
- `safeReferencePath()` and `fileExists()` for route references.
- `assertIncludes()` and `assertArrayIncludes()` for exact marker/item failures.
- A small `tomOperationalRefs()` helper for the seven Tom pack files.
- A small `assertNoMarkers()` helper for leakage scans.
- A small `parsePublicTomSampleApproval()` helper for explicit public rendered Tom sample approval fields.

Regex usage remains limited to filename matching for public asset scans, where route names and aliases are the target data.

## Requirement Coverage

| Requirement | Covered By | Validation Truth |
|-------------|------------|------------------|
| TVAL-01 | 10-01, 10-03 | `node scripts/validate-skill-package.mjs` exits 0 with 47 passes after Phase 10. |
| TVAL-02 | 10-01, 10-02 | Tom route row, aliases, `default=false`, `output_suffix=tom`, seven required references, `gated-authorized`, and attribution context are checked and fixture-tested. |
| TVAL-03 | 10-01, 10-02 | Tom pack files, planning fields, prompt markers, QA markers, rights-boundary markers, protected-route markers, and output path reminders are checked and fixture-tested. |
| TVAL-04 | 10-01, 10-02 | README, examples, agent metadata, NOTICE, release checklist, raw/escaped Tom paths, and Tom smoke prompts are checked and fixture-tested. |
| TVAL-05 | 10-01, 10-02 | Xiaohei, Littlebox, and legacy Xiaohei references are scanned for Tom identity and Warner-rights leakage. |
| TVAL-06 | 10-01, 10-02 | Public example asset directories are scanned for Tom-rendered asset names and tied to explicit release checklist approval parsing. |
| TVAL-07 | 10-02, 10-03 | Node tests cover parser behavior, stable check ordering, Tom failure diagnostics, fixture mutations, approval parsing, and full pass output. |

## Targeted Failure Fixtures

Add or update tests so each fixture mutates one validation surface and asserts check IDs plus repo-relative paths:

| Fixture | Mutation | Expected Failure |
|---------|----------|------------------|
| Tom route metadata | Remove `Tom Cat`, change `default=false`, change `output_suffix=tom`, or change `gated-authorized` in `routing.md`. | `ROUTE-TOM-001` or `ROUTE-PATHS-001` with `ian-xiaohei-illustrations/references/routing.md`. |
| Tom pack files | Remove or empty one Tom pack file in a temp fixture. | `REFS-TOM-001` with `ian-xiaohei-illustrations/references/ips/tom`. |
| Tom prompt markers | Remove `Rights-status note` or `Output path: assets/<article-slug>-tom/`. | `PROMPT-TOM-001` with Tom `prompt-template.md`. |
| Tom identity/QA markers | Remove a protected-route identity or QA marker such as `default Jerry usage` or `route leakage`. | `IP-TOM-001` or `QA-TOM-001` with the Tom pack path. |
| Public docs/metadata | Remove a Tom smoke block or Tom metadata wording. | `SMOKE-TOM-001` or `AGENT-TOM-001` with repo-relative file paths. |
| Leakage | Inject `Tom Cat` or `Warner Bros` into a Xiaohei or Littlebox reference. | `BOUNDARY-TOM-LEAK-001` with the leaking file path. |
| Public asset gate | Add `examples/images/99-tom-test.png` while approval is pending, then test a complete approved record. | `BOUNDARY-TOM-IMG-001` in pending mode and pass behavior for complete approval fields. |

## Marker Audit

Current public docs contain the required Tom route, path, smoke, metadata, NOTICE, and checklist markers:

- `README.md`: Tom explicit protected-character route, aliases, `gated-authorized`, rights path, raw and escaped Tom output paths.
- `examples/prompts.md`: explicit Tom route smoke, Tom planning, Tom generation, mixed three-IP variants, rights path, raw and escaped path tokens.
- `ian-xiaohei-illustrations/agents/openai.yaml`: Xiaohei, Littlebox, Tom, Xiaohei default, explicit gated Tom, `allow_implicit_invocation: true`.
- `NOTICE.md`: Tom source attribution and permission boundary.
- `RELEASE_CHECKLIST.md`: Tom authorization review, route status, prompt leakage, public rendered asset approval, generated sample review, validator commands, final rights review.

Plan `10-03-PLAN.md` is therefore a verification and closeout plan that touches only planning docs and state.

## Source Audit

| Source | ID | Required Item | Plan | Status |
|--------|----|---------------|------|--------|
| GOAL | Phase 10 | Maintainers can verify the three-route protected-IP package locally with deterministic validator checks and Node tests. | 10-01, 10-02, 10-03 | COVERED |
| REQ | TVAL-01 | Local validator runs successfully after roadmap initialization. | 10-01, 10-03 | COVERED |
| REQ | TVAL-02 | Validator checks Tom route row, aliases, default, suffix, references, status, and attribution. | 10-01, 10-02 | COVERED |
| REQ | TVAL-03 | Validator checks Tom pack files, prompt markers, QA markers, and rights markers. | 10-01, 10-02 | COVERED |
| REQ | TVAL-04 | Validator checks public docs, metadata, NOTICE, release checklist, paths, and smoke prompts. | 10-01, 10-02 | COVERED |
| REQ | TVAL-05 | Validator checks Tom leakage boundaries in other IP packs. | 10-01, 10-02 | COVERED |
| REQ | TVAL-06 | Validator checks public Tom rendered asset gate. | 10-01, 10-02 | COVERED |
| REQ | TVAL-07 | Node tests cover parser behavior, order, failure messages, and full pass output. | 10-02, 10-03 | COVERED |
| RESEARCH | Current validator baseline is 40 passes and should increase to 47 with seven added checks. | 10-01, 10-02 | COVERED |
| RESEARCH | Current test baseline is 8 passing tests and should increase to 15 with targeted fixtures. | 10-02 | COVERED |
| RESEARCH | Use helper-backed exact marker checks and fixture mutations. | 10-01, 10-02 | COVERED |
| RESEARCH | Harden explicit public-sample approval parsing. | 10-01, 10-02 | COVERED |
| RESEARCH | Keep public docs stable because marker audit found required markers. | 10-03 | COVERED |
| CONTEXT | D-01 | Harden existing dependency-free validator. | 10-01 | COVERED |
| CONTEXT | D-02 | Keep Node built-in `node:test` harness. | 10-02 | COVERED |
| CONTEXT | D-03 | Preserve deterministic local validator and test commands. | 10-01, 10-02, 10-03 | COVERED |
| CONTEXT | D-04 | Keep validator local-only with file and directory reads. | 10-01 | COVERED |
| CONTEXT | D-05 | Preserve full-pass behavior while adding TVAL coverage. | 10-01, 10-02, 10-03 | COVERED |
| CONTEXT | D-06 | Treat route-table metadata as first-class validation surface. | 10-01, 10-02 | COVERED |
| CONTEXT | D-07 | Treat Tom canonical pack markers as first-class validation surface. | 10-01, 10-02 | COVERED |
| CONTEXT | D-08 | Treat public docs, metadata, NOTICE, and release gates as validation surfaces. | 10-01, 10-02 | COVERED |
| CONTEXT | D-09 | Treat route leakage as first-class validation surface. | 10-01, 10-02 | COVERED |
| CONTEXT | D-10 | Treat public rendered Tom asset gating as first-class validation surface. | 10-01, 10-02 | COVERED |
| CONTEXT | D-11 | Use temporary repository fixtures where mutation is needed. | 10-02 | COVERED |
| CONTEXT | D-12 | Tests cover parser behavior, order, Tom diagnostics, and full pass output. | 10-02 | COVERED |
| CONTEXT | D-13 | Add targeted fixture mutations for route, pack, docs, release, leakage, and assets. | 10-02 | COVERED |
| CONTEXT | D-14 | Keep output stable and actionable. | 10-01, 10-02 | COVERED |
| CONTEXT | D-15 | Favor small helper extraction where it improves reuse and testability. | 10-01 | COVERED |
| CONTEXT | D-16 | Keep helper extraction subordinate to validator clarity. | 10-01 | COVERED |
| CONTEXT | D-17 | Preserve existing exported parser/helper primitives used by tests. | 10-01, 10-02 | COVERED |
| CONTEXT | D-18 | Execution edit scope is validator, tests, and strictly needed marker text. | 10-01, 10-02, 10-03 | COVERED |
| CONTEXT | D-19 | Discussion-task write scope remains historical context and state only. | 10-03 | COVERED |
| CONTEXT | D-20 | Legal authorization approval, status changes, public Tom samples, broad cast support, and visual likeness judgment stay maintainer/process concerns. | 10-03 | COVERED |

Deferred ideas from `10-CONTEXT.md` are represented as release/checklist gates and v2 requirements, with no Phase 10 implementation work assigned to those items.

## Final Phase Commands

Run at the end of Phase 10 execution:

```bash
node scripts/validate-skill-package.mjs | tee /tmp/phase10-validator.out
rg -n 'Summary: total=47 passed=47 failed=0 skipped=0' /tmp/phase10-validator.out

node --test scripts/validate-skill-package.test.mjs | tee /tmp/phase10-tests.out
rg -n 'tests 15' /tmp/phase10-tests.out
rg -n 'pass 15' /tmp/phase10-tests.out
rg -n 'fail 0' /tmp/phase10-tests.out

git diff --check
```

## Success Criteria

- Validator exits 0 with 47 passes and zero failures.
- Node tests exit 0 with 15 passing tests.
- Targeted fixture tests prove Tom route, pack, docs, metadata, leakage, public asset, and approval parser failures with actionable check IDs.
- Public docs remain stable under the current marker audit.
- `git diff --check` exits 0.
