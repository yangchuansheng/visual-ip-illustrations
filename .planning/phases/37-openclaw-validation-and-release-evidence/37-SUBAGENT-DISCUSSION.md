---
phase: 37
name: OpenClaw Validation and Release Evidence
status: sidecar-analysis
created: 2026-06-16
scope: read-only analysis plus this artifact
---

# Phase 37 Sidecar Discussion: OpenClaw Validation and Release Evidence

## Assumptions

### Phase Boundary

- Phase 37 should harden deterministic validation and release evidence for the already-integrated OpenClaw route.
- Phase 37 should preserve existing Xiaohei, Littlebox, Tom, Ferris, and Seal semantics: route ids, aliases, statuses, output suffixes, output paths, default behavior, route-local packs, and public sample gates stay stable.
- Phase 37 should not add public rendered OpenClaw samples. Public OpenClaw samples remain gated by `RELEASE_CHECKLIST.md`.
- Phase 37 evidence should be a planning/release artifact under `.planning/phases/37-openclaw-validation-and-release-evidence/`, not a generated public sample asset.

Evidence:

- `.planning/ROADMAP.md` defines Phase 37 as local verification and release evidence for route metadata, source/license markers, output paths, docs, smoke prompts, leakage checks, public sample gates, and release readiness.
- `.planning/REQUIREMENTS.md` keeps VAL-01 through VAL-05 pending and excludes public generated OpenClaw gallery work.
- `.planning/phases/37-openclaw-validation-and-release-evidence/37-CONTEXT.md` already locks explicit OpenClaw validation parity, six-route mixed-IP behavior, strict sample gates, and a final evidence artifact.
- `.planning/phases/36-public-documentation-and-release-surface/36-VERIFICATION.md` notes the historical Seal mixed-IP validator marker remains as a compatibility anchor and Phase 37 owns first-class six-route OpenClaw parity.

## Decisions Recommended

### Update Existing Checks

1. Update `DOC-PATHS-001` so public docs require the OpenClaw raw and escaped output markers in `README.md` and `examples/prompts.md`.
   - Current gap: `outputPathTokens()` includes OpenClaw, but `publicDocsOutputPathTokens()` omits OpenClaw while Phase 36 docs already expose OpenClaw paths.
   - Target files: `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`.

2. Update `DOC-ROUTES-001` so route metadata docs require all six canonical pack paths, including `ian-xiaohei-illustrations/references/ips/openclaw/`, plus OpenClaw route name coverage.
   - Current gap: `DOC-ROUTES-001` only asserts Xiaohei and Littlebox route names and pack paths.

3. Update `SMOKE-MIXED-SEAL-001` into a six-route mixed-IP parity check, or replace it with a renamed six-route check while preserving the Seal-specific expectations inside the mixed smoke.
   - Current gap: `SMOKE-MIXED-SEAL-001` still requires the literal historical marker `five separate variant groups`, while current prompt docs contain a six-route mixed-IP contract with OpenClaw.
   - Recommended check id: `SMOKE-MIXED-OPENCLAW-001`, with all six route groups and OpenClaw source/license, uploaded-logo identity, output path, and public sample gate markers.

4. Update matrix count assertions and stable-order tests after adding new check ids.
   - Current baseline: validator `Summary: total=106 passed=106 failed=0 skipped=0`; Node tests `tests 73`, `pass 73`.
   - Target files: `requiredCheckIds` and full-pass summary expectations in `scripts/validate-skill-package.test.mjs`.

### Add New Checks

1. Add `AGENT-OPENCLAW-001`.
   - Validate `ian-xiaohei-illustrations/agents/openai.yaml` contains `OpenClaw`, `source-reviewed`, `logo-mascot route`, canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, and `default Xiaohei`.
   - Why add: current agent checks cover shape, Tom, and Seal; OpenClaw only passes indirectly through broad strings.

2. Add `DOC-OPENCLAW-001`.
   - Validate `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, `NOTICE.md`, `ian-xiaohei-illustrations/references/routing.md`, and `ian-xiaohei-illustrations/agents/openai.yaml` keep OpenClaw route status, source/license authority, official repository, MIT License, copyright, uploaded-logo identity, public sample gate, raw path, and escaped path aligned.
   - Why add: `DOC-SEAL-001` has explicit parity coverage; OpenClaw should have the same drift failure surface.

3. Add `NOTICE-OPENCLAW-001`.
   - Validate `NOTICE.md` has the OpenClaw source attribution heading, official repository, MIT License, OpenClaw Foundation copyright, route id, route status, source/license authority, uploaded-logo authority, attribution context, and public sample review fields.
   - Why add: OpenClaw source/license attribution is currently present in `NOTICE.md`, while the validator has no dedicated NOTICE check for it.

4. Add `SMOKE-OPENCLAW-001`.
   - Validate `examples/prompts.md` includes OpenClaw planning, generation, edit, route smoke, route-local references, seven required references, source/license note, uploaded-logo identity markers, action vocabulary, raw path, escaped path, and public sample gate.
   - Why add: current OpenClaw smoke exists in the docs but is not a dedicated validator id.

5. Add `VAL-OPENCLAW-EVIDENCE-001`.
   - Validate a Phase 37 final evidence artifact exists and records exact command outputs, route smoke, source/license smoke, docs consistency, leakage scan, public sample gate status, and generated sample gate status.
   - Recommended artifact path: `.planning/phases/37-openclaw-validation-and-release-evidence/37-VERIFICATION.md`.
   - Optional companion if UAT-style manual evidence is desired: `.planning/phases/37-openclaw-validation-and-release-evidence/37-UAT.md`.

6. Add fixture tests for every new or updated check.
   - OpenClaw metadata drift fixture: remove `explicit OpenClaw logo-mascot route (source-reviewed)` from `openai.yaml` and expect `AGENT-OPENCLAW-001`.
   - OpenClaw docs drift fixture: remove `ian-xiaohei-illustrations/references/ips/openclaw/source.md` or `assets/&lt;article-slug&gt;-openclaw/` from public docs and expect `DOC-OPENCLAW-001` or updated `DOC-PATHS-001`.
   - OpenClaw NOTICE drift fixture: remove `MIT License` or `Copyright (c) 2026 OpenClaw Foundation` from `NOTICE.md` and expect `NOTICE-OPENCLAW-001`.
   - OpenClaw smoke drift fixture: remove `## Route Smoke: Explicit OpenClaw` or OpenClaw uploaded-logo markers from `examples/prompts.md` and expect `SMOKE-OPENCLAW-001`.
   - Six-route mixed fixture: remove OpenClaw variant group text from `examples/prompts.md` and expect the six-route mixed-IP check.
   - Evidence fixture: remove the Phase 37 final evidence artifact or one required evidence marker and expect `VAL-OPENCLAW-EVIDENCE-001`.

## Validator Gaps Remaining

### OpenClaw Public Docs

- `DOC-PATHS-001` currently uses `publicDocsOutputPathTokens()`, which omits OpenClaw even though `README.md` and `examples/prompts.md` now include OpenClaw path markers.
- `DOC-ROUTES-001` currently checks only route metadata basics plus Xiaohei and Littlebox pack paths. It does not require OpenClaw's canonical pack path or source/license authority.
- `DOC-SEAL-001` has multi-surface route parity. OpenClaw needs a parallel `DOC-OPENCLAW-001` instead of relying on generic docs checks.

### NOTICE

- `NOTICE.md` contains OpenClaw attribution and public sample gate text.
- The validator has `NOTICE-IAN-001`, `NOTICE-LB-001`, `NOTICE-TOM-001`, `NOTICE-FERRIS-001`, and `NOTICE-SEAL-001`.
- A dedicated `NOTICE-OPENCLAW-001` remains missing.

### OpenAI Metadata

- `openai.yaml` contains OpenClaw discovery metadata.
- Existing validator checks are `AGENT-SHAPE-001`, `AGENT-TOM-001`, and `AGENT-SEAL-001`.
- A dedicated `AGENT-OPENCLAW-001` remains missing, so OpenClaw metadata drift can pass unless broad strings happen to fail elsewhere.

### Route Smoke

- `examples/prompts.md` contains OpenClaw planning, generation, edit, explicit route smoke, maintainer smoke, and mixed-IP examples.
- Existing smoke checks cover default, Xiaohei, Littlebox, Tom, Ferris, Seal, generic mixed, and historical Seal mixed behavior.
- A dedicated OpenClaw route smoke check remains missing.

### Mixed-IP Six-Route Behavior

- `examples/prompts.md` now documents six separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw.
- `SMOKE-MIXED-SEAL-001` still validates the historical text `five separate variant groups`.
- Phase 37 should convert the mixed-IP validator contract to six-route parity while retaining all stable older route markers inside the six-route check.

### Leakage

- `BOUNDARY-OPENCLAW-LEAK-001` already scans non-OpenClaw route references for OpenClaw, OpenClaw aliases, uploaded-logo authority, source/license authority, `references/ips/openclaw`, and `assets/<article-slug>-openclaw/`.
- Node fixtures already inject OpenClaw leakage into Xiaohei, Littlebox, Tom, Ferris, and Seal route-local files.
- Remaining gap: evidence should record the leakage scan as part of VAL-05, with exact PASS status and check id.

### Public Sample Gates

- `BOUNDARY-OPENCLAW-IMG-001` already blocks public OpenClaw rendered assets under `examples/images`, `examples/images-en`, and `ian-xiaohei-illustrations/assets/examples` until complete release checklist approval exists.
- Parser tests already reject placeholder OpenClaw public approvals for date, uploaded-logo outcome, source/license outcome, route-isolation outcome, and article-metaphor outcome.
- Remaining gap: final evidence should explicitly record that no public OpenClaw rendered assets were present, or that a complete approval record existed if future samples are intentionally added.

### Generated Sample Gates

- `BOUNDARY-OPENCLAW-GEN-001` already distinguishes workspace generated samples under `assets/<article-slug>-openclaw/` from public rendered sample release gates.
- Node fixtures already prove generated workspace samples do not trigger the public rendered sample gate.
- Remaining gap: final evidence should record generated sample gate status separately from public sample gate status.

### Final Evidence

- `README.md` already says validation covers Phase 37 final release evidence.
- `RELEASE_CHECKLIST.md` already says Phase 37 owns OpenClaw validator parity, final release evidence, public docs/path marker confirmation, and public rendered sample review.
- The validator currently has no check that a Phase 37 evidence artifact exists or contains the required evidence markers.

## Risks

- Broad OpenClaw marker checks can accidentally pass because the marker appears in another public doc. Use file-specific checks for `openai.yaml`, `NOTICE.md`, `README.md`, `examples/prompts.md`, `RELEASE_CHECKLIST.md`, and `routing.md`.
- Replacing the historical mixed-IP check can erase Seal regression coverage if the six-route check only focuses on OpenClaw. Preserve Seal identity, source-history, output path, and public sample markers inside the new mixed-IP check.
- Public asset gate regex only detects OpenClaw-like file names. This is adequate for the current file-based gate, but evidence should name the scanned directories and current match result.
- Evidence drift can occur when summary counts change. Validator should require exact current marker lines in the evidence artifact, and tests should update the expected total after Phase 37 changes land.

## Concrete Validator and Test Targets

### Validator Targets

- `AGENT-OPENCLAW-001`: OpenAI metadata route parity.
- `DOC-OPENCLAW-001`: cross-document OpenClaw route/source/path/sample parity.
- `NOTICE-OPENCLAW-001`: NOTICE attribution and public sample gate parity.
- `SMOKE-OPENCLAW-001`: explicit OpenClaw route smoke prompt parity.
- `SMOKE-MIXED-OPENCLAW-001`: six-route mixed-IP prompt parity.
- `VAL-OPENCLAW-EVIDENCE-001`: final Phase 37 evidence artifact existence and required markers.
- Updated `DOC-PATHS-001`: public docs include OpenClaw raw and escaped output markers.
- Updated `DOC-ROUTES-001`: public docs include OpenClaw canonical pack path and source/license authority.
- Updated stable-order tests and full-pass summary expectations.

### Node Test Targets

- Update `requiredCheckIds` with the new ids in stable order near related check families.
- Update full-matrix test name from the stale Phase 28 label to current Phase 37 wording.
- Add drift fixture tests for `AGENT-OPENCLAW-001`, `DOC-OPENCLAW-001`, `NOTICE-OPENCLAW-001`, `SMOKE-OPENCLAW-001`, `SMOKE-MIXED-OPENCLAW-001`, and `VAL-OPENCLAW-EVIDENCE-001`.
- Keep existing OpenClaw tests for route parsing, required references, pack/prompt/QA drift, source marker drift, leakage, public asset approval parsing, placeholder approval rejection, and generated sample distinction.
- Update all `Summary: total=106 passed=106 failed=0 skipped=0` assertions to the new expected total after validator ids are added.

### Release Evidence Artifact Targets

Recommended primary artifact:

- `.planning/phases/37-openclaw-validation-and-release-evidence/37-VERIFICATION.md`

Required sections:

- Verdict.
- Validator command evidence with exact summary line.
- Node test command evidence with exact test/pass/fail lines.
- `git diff --check` evidence.
- OpenClaw route smoke evidence from `examples/prompts.md` and validator check ids.
- Source/license smoke evidence for official repository, MIT License, copyright, uploaded-logo authority, and source record path.
- Docs consistency evidence across README, examples, NOTICE, release checklist, routing, and OpenAI metadata.
- Leakage scan evidence naming `BOUNDARY-OPENCLAW-LEAK-001`.
- Public sample gate evidence naming `BOUNDARY-OPENCLAW-IMG-001`, scanned directories, approval status, and current OpenClaw public asset match result.
- Generated sample gate evidence naming `BOUNDARY-OPENCLAW-GEN-001`.
- Requirement traceability for VAL-01 through VAL-05.

Optional secondary artifact:

- `.planning/phases/37-openclaw-validation-and-release-evidence/37-UAT.md`

Use it only if maintainers want a separate manual smoke transcript for text-only route audits. The primary `37-VERIFICATION.md` is sufficient for VAL-05 if it records all required command and smoke evidence.

## Command Evidence Required

Minimum required commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Recommended additional evidence commands:

```bash
LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs
rg -n "OpenClaw|openclaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw|source/license|uploaded-logo" README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/agents/openai.yaml ian-xiaohei-illustrations/references/routing.md
rg -n "OpenClaw|openclaw|OpenClaw logo|OpenClaw mascot|OpenClaw 助手|OpenClaw 吉祥物|uploaded-logo authority|source/license authority|references/ips/openclaw|assets/<article-slug>-openclaw" ian-xiaohei-illustrations/references/ips/xiaohei ian-xiaohei-illustrations/references/ips/littlebox ian-xiaohei-illustrations/references/ips/tom ian-xiaohei-illustrations/references/ips/ferris ian-xiaohei-illustrations/references/ips/seal ian-xiaohei-illustrations/references/style-dna.md ian-xiaohei-illustrations/references/xiaohei-ip.md ian-xiaohei-illustrations/references/composition-patterns.md ian-xiaohei-illustrations/references/prompt-template.md ian-xiaohei-illustrations/references/qa-checklist.md
find examples/images examples/images-en ian-xiaohei-illustrations/assets/examples -type f | sort | rg -n "openclaw|open-claw" || true
```

Current baseline observed during this sidecar analysis:

```bash
node scripts/validate-skill-package.mjs
# Summary: total=106 passed=106 failed=0 skipped=0
```

```bash
node --test scripts/validate-skill-package.test.mjs
# tests 73
# pass 73
# fail 0
```

```bash
git diff --check
# passed
```
