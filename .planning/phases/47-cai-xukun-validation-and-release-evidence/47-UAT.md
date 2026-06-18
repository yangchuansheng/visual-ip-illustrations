---
phase: 47
phase_name: Cai Xukun Validation and Release Evidence
status: passed
source:
  - .planning/phases/47-cai-xukun-validation-and-release-evidence/47-01-SUMMARY.md
  - .planning/phases/47-cai-xukun-validation-and-release-evidence/47-VALIDATION.md
  - .planning/phases/47-cai-xukun-validation-and-release-evidence/47-RELEASE-EVIDENCE.md
started: 2026-06-17T22:42:17Z
updated: 2026-06-17T22:42:17Z
mode: non-interactive maintainer workflow simulation
commands:
  - command: "node scripts/validate-skill-package.mjs"
    result: "PASS: Summary: total=145 passed=145 failed=0 skipped=0"
  - command: "node --test scripts/validate-skill-package.test.mjs"
    result: "PASS: tests 105, pass 105, fail 0"
  - command: "git diff --check -- scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs .planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md"
    result: "PASS: exit 0"
  - command: "README variant marker loop from 47-VALIDATION.md"
    result: "PASS: exit 0"
  - command: "Cai Xukun leakage scan from 47-VALIDATION.md"
    result: "PASS: exit 0"
  - command: "public sample gate from 47-VALIDATION.md"
    result: "PASS: exit 0, no public Cai Xukun sample assets found"
  - command: "generated sample gate from 47-VALIDATION.md"
    result: "PASS: RELEASE_CHECKLIST.md lines 328-330 matched"
  - command: "dirty-worktree scope comparison from 47-VALIDATION.md"
    result: "PASS: exit 0"
---

# Phase 47 UAT: Maintainer Validation Workflow

## Verdict

PASS.

This UAT simulates the maintainer workflow for Phase 47 without interactive prompts. The workflow starts from the release-readiness goal: run validator, inspect evidence, confirm sample gates, and confirm dirty-worktree scope.

## Current Test

[testing complete]

## Tests

### 1. Run Validator

expected: Maintainer runs the dependency-free validator and sees a complete passing matrix for Cai Xukun validation and release readiness.

command:

```bash
node scripts/validate-skill-package.mjs
```

result: pass

observed:

```text
Summary: total=145 passed=145 failed=0 skipped=0
```

### 2. Run Node Regression Suite

expected: Maintainer runs the Node built-in regression suite and sees all Cai Xukun route, fixture, leakage, sample-gate, and full-pass assertions pass.

command:

```bash
node --test scripts/validate-skill-package.test.mjs
```

result: pass

observed:

```text
tests 105
pass 105
fail 0
```

### 3. Inspect Release Evidence

expected: Maintainer opens Phase 47 release evidence and sees VAL-01 through VAL-05 traceability plus exact command outcomes for validator, Node tests, diff hygiene, route smoke, uploaded-image smoke, likeness-boundary smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and dirty-worktree scope.

command:

```bash
rg -q 'VAL-01|VAL-02|VAL-03|VAL-04|VAL-05' .planning/phases/47-cai-xukun-validation-and-release-evidence/47-RELEASE-EVIDENCE.md
node scripts/validate-skill-package.mjs | rg 'BOUNDARY-CAIXUKUN-(LEAK|IMG|GEN)-001|VAL-CAIXUKUN-EVIDENCE-001|Summary:'
```

result: pass

observed:

```text
[PASS] VAL-CAIXUKUN-EVIDENCE-001 Phase 47 records Cai Xukun validation and release evidence
[PASS] BOUNDARY-CAIXUKUN-LEAK-001 non-Cai-Xukun route references keep Cai Xukun public-figure markers isolated
[PASS] BOUNDARY-CAIXUKUN-IMG-001 example asset directories keep Cai Xukun rendered assets behind release approval
[PASS] BOUNDARY-CAIXUKUN-GEN-001 Cai Xukun generated samples stay distinct from public rendered sample release gates
Summary: total=145 passed=145 failed=0 skipped=0
```

### 4. Confirm README Variant Marker Loop

expected: Maintainer confirms every README variant includes Cai Xukun route status, source pointer, raw output path, and escaped docs token.

command:

```bash
for f in README.md readmes/README.*.md; do
  rg -q 'Cai Xukun' "$f" &&
  rg -q 'gated-public-figure' "$f" &&
  rg -q 'skills/visual-ip-illustrations/references/ips/caixukun/source\.md' "$f" &&
  rg -q 'assets/<article-slug>-caixukun/' "$f" &&
  rg -q 'assets/&lt;article-slug&gt;-caixukun/' "$f"
done
```

result: pass

observed: exit 0.

### 5. Confirm Cai Xukun Leakage Gate

expected: Maintainer confirms non-Cai-Xukun route-local packs contain no Cai Xukun identity, source, path, public-figure, sample, or claim-boundary markers.

command:

```bash
targets=(
  skills/visual-ip-illustrations/references/ips/xiaohei/index.md
  skills/visual-ip-illustrations/references/ips/xiaohei/style-dna.md
  skills/visual-ip-illustrations/references/ips/xiaohei/xiaohei-ip.md
  skills/visual-ip-illustrations/references/ips/xiaohei/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/xiaohei/prompt-template.md
  skills/visual-ip-illustrations/references/ips/xiaohei/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/littlebox/index.md
  skills/visual-ip-illustrations/references/ips/littlebox/style-dna.md
  skills/visual-ip-illustrations/references/ips/littlebox/littlebox-ip.md
  skills/visual-ip-illustrations/references/ips/littlebox/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/littlebox/language-and-labels.md
  skills/visual-ip-illustrations/references/ips/littlebox/prompt-template.md
  skills/visual-ip-illustrations/references/ips/littlebox/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/tom/index.md
  skills/visual-ip-illustrations/references/ips/tom/rights.md
  skills/visual-ip-illustrations/references/ips/tom/style-dna.md
  skills/visual-ip-illustrations/references/ips/tom/tom-ip.md
  skills/visual-ip-illustrations/references/ips/tom/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/tom/prompt-template.md
  skills/visual-ip-illustrations/references/ips/tom/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/ferris/index.md
  skills/visual-ip-illustrations/references/ips/ferris/source.md
  skills/visual-ip-illustrations/references/ips/ferris/style-dna.md
  skills/visual-ip-illustrations/references/ips/ferris/ferris-ip.md
  skills/visual-ip-illustrations/references/ips/ferris/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/ferris/prompt-template.md
  skills/visual-ip-illustrations/references/ips/ferris/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/seal/index.md
  skills/visual-ip-illustrations/references/ips/seal/source.md
  skills/visual-ip-illustrations/references/ips/seal/style-dna.md
  skills/visual-ip-illustrations/references/ips/seal/seal-ip.md
  skills/visual-ip-illustrations/references/ips/seal/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/seal/prompt-template.md
  skills/visual-ip-illustrations/references/ips/seal/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/openclaw/index.md
  skills/visual-ip-illustrations/references/ips/openclaw/source.md
  skills/visual-ip-illustrations/references/ips/openclaw/style-dna.md
  skills/visual-ip-illustrations/references/ips/openclaw/openclaw-ip.md
  skills/visual-ip-illustrations/references/ips/openclaw/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/openclaw/prompt-template.md
  skills/visual-ip-illustrations/references/ips/openclaw/qa-checklist.md
  skills/visual-ip-illustrations/references/ips/gopher/index.md
  skills/visual-ip-illustrations/references/ips/gopher/source.md
  skills/visual-ip-illustrations/references/ips/gopher/style-dna.md
  skills/visual-ip-illustrations/references/ips/gopher/gopher-ip.md
  skills/visual-ip-illustrations/references/ips/gopher/composition-patterns.md
  skills/visual-ip-illustrations/references/ips/gopher/prompt-template.md
  skills/visual-ip-illustrations/references/ips/gopher/qa-checklist.md
  skills/visual-ip-illustrations/references/style-dna.md
  skills/visual-ip-illustrations/references/xiaohei-ip.md
  skills/visual-ip-illustrations/references/composition-patterns.md
  skills/visual-ip-illustrations/references/prompt-template.md
  skills/visual-ip-illustrations/references/qa-checklist.md
)
if rg -n 'Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure|references/ips/caixukun|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/|uploaded reference image A|uploaded reference image B|public-figure likeness boundary|source-image context boundary|stylized mascot-only output|realistic-person portrait output|celebrity endorsement claims|celebrity advertising|fandom-promotion|fandom promotion' "${targets[@]}"; then
  exit 1
fi
```

result: pass

observed: exit 0.

### 6. Confirm Public Sample Gate

expected: Maintainer confirms no public Cai Xukun rendered sample assets are present while the public sample approval remains pending.

command:

```bash
find examples/images examples/images-en skills/visual-ip-illustrations/assets/examples \( -iname '*caixukun*' -o -iname '*cai*xukun*' -o -iname '*cxk*' -o -iname '*蔡徐坤*' \) -print
```

result: pass

observed: exit 0 with no output.

### 7. Confirm Generated Sample Gate

expected: Maintainer confirms `RELEASE_CHECKLIST.md` keeps internal Cai Xukun review samples distinct from public generated samples and records the pending generated sample approval fields.

command:

```bash
rg -n 'Internal review samples under `assets/<article-slug>-caixukun/` may be used|Public generated samples from `assets/<article-slug>-caixukun/` require Cai Xukun Public Asset Policy approval|Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / public-figure likeness boundary outcome / source-image context boundary outcome / route-isolation outcome / stylized mascot-only output outcome' RELEASE_CHECKLIST.md
```

result: pass

observed:

```text
RELEASE_CHECKLIST.md:328-330 matched the internal review, public approval boundary, and generated sample review record.
```

### 8. Confirm Dirty-Worktree Scope

expected: Maintainer confirms newly changed paths beyond the Phase 47 baseline are limited to validator scripts and Phase 47 artifacts.

command:

```bash
phase_dir=.planning/phases/47-cai-xukun-validation-and-release-evidence
after=$(mktemp)
{ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u > "$after"
unexpected=$(comm -13 "$phase_dir/47-SCOPE-BASELINE.txt" "$after" | rg -v '^(scripts/validate-skill-package\.mjs|scripts/validate-skill-package\.test\.mjs|\.planning/phases/47-cai-xukun-validation-and-release-evidence/47-[A-Z0-9-]+\.md)$' || true)
test -z "$unexpected"
```

result: pass

observed: exit 0.

## Summary

total: 8
passed: 8
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

[]

## Notes

The requested subagent runtime was checked through tool discovery. No subagent tools were exposed in this session, so the UAT uses deterministic non-interactive command simulation and records exact command evidence.
