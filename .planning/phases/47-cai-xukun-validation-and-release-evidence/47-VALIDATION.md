---
phase: 47-cai-xukun-validation-and-release-evidence
phase_number: 47
status: planned
stage: validation-contract
requirements:
  - VAL-01
  - VAL-02
  - VAL-03
  - VAL-04
  - VAL-05
allowed_implementation_files:
  - scripts/validate-skill-package.mjs
  - scripts/validate-skill-package.test.mjs
  - .planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md
---

# Phase 47 Validation: Cai Xukun Validation and Release Evidence

Run these checks from the repository root.

## Source Audit

| SOURCE | ID | Validation Contract | Status |
|--------|----|---------------------|--------|
| GOAL | Phase 47 | Maintainers can verify Cai Xukun locally and release it with deterministic evidence. | COVERED |
| REQ | VAL-01 | Validator command covers route metadata, source record, pack, docs, examples, NOTICE, release checklist, agent metadata, and release evidence drift. | COVERED |
| REQ | VAL-02 | Leakage scan and validator gate cover Cai Xukun markers in non-Cai-Xukun route packs. | COVERED |
| REQ | VAL-03 | Public and generated sample gate commands cover release checklist approval requirements. | COVERED |
| REQ | VAL-04 | Node command covers route parsing, order, default, path, marker, smoke, leakage, gate, and full-pass assertions. | COVERED |
| REQ | VAL-05 | Release evidence command set records exact outcomes and handoff closure. | COVERED |
| CONTEXT | D-01 through D-28 | Command set maps Phase 47 decisions to validator, test, evidence, and scope gates. | COVERED |

## Tasks

### Task 1: Node Regression Contract

Expected implementation file:

- `scripts/validate-skill-package.test.mjs`

Validation command:

```bash
node --test scripts/validate-skill-package.test.mjs
```

Pass criteria:

- Exits 0 after validator implementation is complete.
- Covers eight-route order: `xiaohei`, `littlebox`, `tom`, `ferris`, `seal`, `openclaw`, `gopher`, `caixukun`.
- Covers `caixukun default=false` and Xiaohei as the only omitted-IP default.
- Covers raw and escaped output paths: `assets/<article-slug>-caixukun/` and `assets/&lt;article-slug&gt;-caixukun/`.
- Covers uploaded-image authority, uploaded reference image A/B, public-figure likeness boundary, source-image context boundary, stylized mascot-only output, smoke prompts, leakage fixtures, public asset gates, generated sample gates, placeholder approval fields, and full-pass output.

### Task 2: Dependency-Free Validator Contract

Expected implementation file:

- `scripts/validate-skill-package.mjs`

Validation command:

```bash
node scripts/validate-skill-package.mjs
```

Pass criteria:

- Exits 0.
- Prints a final summary with `failed=0`.
- Includes Cai Xukun route-specific checks for route metadata, seven required references, source record, prompt template, IP identity, QA checklist, docs, NOTICE, smoke prompt, mixed-IP smoke, release checklist, release evidence, leakage, public sample gate, and generated sample gate.
- Treats Cai Xukun as the eighth route across route table, route order, route count, output paths, mixed-IP checks, rebrand route checks, compatibility checks, language alias checks, public docs checks, and full-pass output.
- Preserves existing Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher checks.

Expected Cai Xukun check IDs:

```text
AGENT-CAIXUKUN-001
ROUTE-CAIXUKUN-001
REFS-CAIXUKUN-001
PROMPT-CAIXUKUN-001
IP-CAIXUKUN-001
QA-CAIXUKUN-001
SOURCE-CAIXUKUN-001
DOC-CAIXUKUN-001
NOTICE-CAIXUKUN-001
SMOKE-CAIXUKUN-001
SMOKE-MIXED-CAIXUKUN-001
RELEASE-CAIXUKUN-001
VAL-CAIXUKUN-EVIDENCE-001
BOUNDARY-CAIXUKUN-LEAK-001
BOUNDARY-CAIXUKUN-IMG-001
BOUNDARY-CAIXUKUN-GEN-001
```

### Task 3: Release Evidence and Scope Closure

Expected Phase 47 files:

- `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-SCOPE-BASELINE.txt`
- `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-RELEASE-EVIDENCE.md`
- `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-01-SUMMARY.md`

Validation command:

```bash
rg -q 'VAL-01|VAL-02|VAL-03|VAL-04|VAL-05' .planning/phases/47-cai-xukun-validation-and-release-evidence/47-RELEASE-EVIDENCE.md
```

Pass criteria:

- `47-RELEASE-EVIDENCE.md` records exact outcomes for validator, Node tests, `git diff --check`, route smoke, uploaded-image smoke, public-figure likeness-boundary smoke, source-image context smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and dirty-worktree scope.
- `47-RELEASE-EVIDENCE.md` traces VAL-01 through VAL-05.
- `47-RELEASE-EVIDENCE.md` states the public Cai Xukun sample gate status and generated-sample internal review distinction.

## Scope Baseline

Capture the Phase 47 dirty-worktree baseline before implementation edits:

```bash
phase_dir=.planning/phases/47-cai-xukun-validation-and-release-evidence
{ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u > "$phase_dir/47-SCOPE-BASELINE.txt"
```

Validate final changed-path scope:

```bash
phase_dir=.planning/phases/47-cai-xukun-validation-and-release-evidence
after=$(mktemp)
{ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u > "$after"
unexpected=$(comm -13 "$phase_dir/47-SCOPE-BASELINE.txt" "$after" | rg -v '^(scripts/validate-skill-package\.mjs|scripts/validate-skill-package\.test\.mjs|\.planning/phases/47-cai-xukun-validation-and-release-evidence/47-[A-Z0-9-]+\.md)$' || true)
test -z "$unexpected"
```

Pass criteria:

- Final newly changed paths are limited to:
  - `scripts/validate-skill-package.mjs`
  - `scripts/validate-skill-package.test.mjs`
  - `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md`

## Required Command Set

### Full Validator

```bash
node scripts/validate-skill-package.mjs
```

Expected:

- exit 0
- `failed=0`
- Cai Xukun check IDs appear in PASS output

### Node Regression Suite

```bash
node --test scripts/validate-skill-package.test.mjs
```

Expected:

- exit 0
- `fail 0`
- final assertions match the validator summary exactly

### Diff Hygiene

```bash
git diff --check -- \
  scripts/validate-skill-package.mjs \
  scripts/validate-skill-package.test.mjs \
  .planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md
```

Expected:

- exit 0

### Route Smoke

```bash
rg -n 'Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure|references/ips/caixukun/source\.md|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/' \
  examples/prompts.md \
  skills/visual-ip-illustrations/SKILL.md \
  skills/visual-ip-illustrations/references/routing.md
```

Expected:

- Finds explicit route selection, route smoke, mixed-IP smoke, source pointer, route status, raw output path, and escaped output path.

### Uploaded-Image and Likeness Boundary Smoke

```bash
rg -n 'uploaded-image authority|uploaded reference image A|uploaded reference image B|public-figure likeness boundary|source-image context boundary|stylized mascot-only output|realistic-person portrait output|endorsement|affiliation|impersonation|campaign|advertising|fandom-promotion|fandom promotion' \
  skills/visual-ip-illustrations/references/ips/caixukun/*.md \
  README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md \
  skills/visual-ip-illustrations/SKILL.md \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/agents/openai.yaml
```

Expected:

- Finds uploaded-image authority, public-figure likeness boundary, source-image context boundary, stylized mascot-only output, realistic-person boundary, and public-figure claim review terms.

### README Variant Consistency

```bash
for f in README.md readmes/README.*.md; do
  rg -q 'Cai Xukun' "$f" &&
  rg -q 'gated-public-figure' "$f" &&
  rg -q 'skills/visual-ip-illustrations/references/ips/caixukun/source\.md' "$f" &&
  rg -q 'assets/<article-slug>-caixukun/' "$f" &&
  rg -q 'assets/&lt;article-slug&gt;-caixukun/' "$f"
done
```

Expected:

- exit 0 for root README and every localized README variant.

### Leakage Scan

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
if rg -n 'Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure|references/ips/caixukun|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/|uploaded reference image A|uploaded reference image B|public-figure likeness boundary|source-image context boundary|stylized mascot-only output|realistic-person portrait output|celebrity endorsement claims|celebrity advertising|fandom-promotion|fandom promotion' \
  "${targets[@]}"; then
  exit 1
fi
```

Expected:

- exit 0.

### Public Sample Gate

```bash
find examples/images examples/images-en skills/visual-ip-illustrations/assets/examples \( -iname '*caixukun*' -o -iname '*cai*xukun*' -o -iname '*cxk*' -o -iname '*蔡徐坤*' \) -print
```

Expected:

- Current Phase 47 pending-gate state prints nothing.
- If public Cai Xukun sample assets are later present, `node scripts/validate-skill-package.mjs` must require complete release checklist approval fields before passing `BOUNDARY-CAIXUKUN-IMG-001`.

### Generated Sample Gate

```bash
rg -n 'Internal review samples under `assets/<article-slug>-caixukun/` may be used|Public generated samples from `assets/<article-slug>-caixukun/` require Cai Xukun Public Asset Policy approval|Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / public-figure likeness boundary outcome / source-image context boundary outcome / route-isolation outcome / stylized mascot-only output outcome' RELEASE_CHECKLIST.md
```

Expected:

- Finds the internal review distinction, public sample approval boundary, and generated sample approval record.

## Success Criteria

- `node scripts/validate-skill-package.mjs` exits 0 with `failed=0`.
- `node --test scripts/validate-skill-package.test.mjs` exits 0 with `fail 0`.
- `git diff --check -- scripts/validate-skill-package.mjs scripts/validate-skill-package.test.mjs .planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md` exits 0.
- Cai Xukun route smoke, uploaded-image smoke, likeness-boundary smoke, docs consistency, leakage scan, public sample gate, generated sample gate, and dirty-worktree scope checks pass.
- `47-RELEASE-EVIDENCE.md` records exact command outcomes and VAL-01 through VAL-05 traceability.

## Phase 47 Handoff Closure

Phase 47 is complete when:

- `47-RELEASE-EVIDENCE.md` exists and includes validator, Node, diff, smoke, docs, leakage, sample gate, generated sample gate, and scope evidence.
- `47-01-SUMMARY.md` exists and lists changed files plus command outcomes.
- Final scope remains limited to `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, and `.planning/phases/47-cai-xukun-validation-and-release-evidence/47-*.md`.
