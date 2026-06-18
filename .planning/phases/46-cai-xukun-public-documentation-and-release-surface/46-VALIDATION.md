# Phase 46 Validation: Cai Xukun Public Documentation and Release Surface

Run these checks from the repository root.

## Public Marker Checks

```bash
rg -n "Cai Xukun|蔡徐坤|caixukun|cxk|gated-public-figure" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

```bash
rg -n "skills/visual-ip-illustrations/references/ips/caixukun/source.md" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

```bash
rg -n "assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

```bash
rg -n "uploaded-image authority|public-figure likeness boundary|source-image context boundary|public sample review gate|route isolation|stylized mascot-only output" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

```bash
rg -n "endorsement|affiliation|impersonation|campaign|advertising|fandom-promotion" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

## Prompt Example Checks

```bash
rg -n "planning|generation|edit|route smoke|mixed-IP" examples/prompts.md
```

## Local Path Leakage Absence Check

```bash
! rg -n "/Users/|/home/|file://|/private/|/tmp/" README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml
```

## Scope Delta Check

```bash
phase_dir=.planning/phases/46-cai-xukun-public-documentation-and-release-surface
baseline="$phase_dir/46-SCOPE-BASELINE.txt"
after=$(mktemp)
{ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u > "$after"
unexpected=$(comm -13 "$baseline" "$after" | rg -v '^(README\.md|readmes/README\.[^.]+\.md|examples/prompts\.md|NOTICE\.md|RELEASE_CHECKLIST\.md|skills/visual-ip-illustrations/agents/openai\.yaml|\.planning/phases/46-cai-xukun-public-documentation-and-release-surface/(46-SCOPE-BASELINE\.txt|46-01-PLAN\.md|46-VALIDATION\.md|46-01-SUMMARY\.md|46-REVIEW\.md|46-VERIFICATION\.md|46-UAT\.md))$' || true)
test -z "$unexpected"
```

The scope delta check passes when no unexpected path remains.

## Diff Hygiene

```bash
git diff --check -- README.md readmes/README.*.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md skills/visual-ip-illustrations/agents/openai.yaml .planning/phases/46-cai-xukun-public-documentation-and-release-surface/46-*.md
```

## Phase Plan Index

```bash
node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs phase-plan-index 46
```

## Phase 47 Handoff

Phase 47 owns these checks and artifacts:

- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`
- validator hardening
- Node tests
- final release evidence
