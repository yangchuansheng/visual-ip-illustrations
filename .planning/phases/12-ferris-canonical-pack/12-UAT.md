---
phase: 12-ferris-canonical-pack
uat_date: 2026-06-13T09:00:00Z
status: complete
human_verification_required: true
human_verification_result: passed
tests_total: 4
tests_passed: 4
issues_found: 0
---

# Phase 12: Ferris Canonical Pack UAT

## Scope

Phase 12 UAT closes the human visual review item from `12-VERIFICATION.md`.
The review used a session-generated Ferris-route smoke image from
`ian-xiaohei-illustrations/references/ips/ferris/prompt-template.md`.

The generated smoke image was reviewed in-session and was not saved into the
repository or published as a Ferris public sample. Public rendered Ferris
samples remain gated by `RELEASE_CHECKLIST.md`.

## Test Results

| Test | Expected | Result | Status |
|------|----------|--------|--------|
| Ferris pack file presence | Seven files exist under `ian-xiaohei-illustrations/references/ips/ferris/`. | `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md` exist. | PASS |
| Cross-file marker consistency | Six operational files contain the seven exact recurring markers and eight stable failure category names. | Local grep checks passed across `index.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`. | PASS |
| Existing deterministic checks | Existing validator and Node tests pass. | Validator passed `total=53 passed=53 failed=0 skipped=0`; Node tests passed `tests=23 pass=23 fail=0`. | PASS |
| Ferris visual smoke review | One generated Ferris-route article illustration is 16:9, sparse, route-local, recognizable as Ferris, driven by Ferris action, free of Rust-logo-forward or official-affiliation cues, and suitable for `assets/<article-slug>-ferris/`. | The generated smoke image showed Ferris as a compact orange crab with broad shell, two claws, legs, eyestalk eyes, and active stamping action on an ownership handoff bridge. It used sparse hand-drawn black linework, white background, short labels, no Rust logos, no official-affiliation cues, no source-asset tracing resemblance, and no route leakage. | PASS |

## Commands

```bash
for file in index.md source.md style-dna.md ferris-ip.md composition-patterns.md prompt-template.md qa-checklist.md; do
  test -f "ian-xiaohei-illustrations/references/ips/ferris/$file" || exit 1
done
```

Result: `ferris-pack-files=7`

```bash
for marker in \
  'Ferris route status: `source-reviewed`.' \
  'Ferris output path: `assets/<article-slug>-ferris/`.' \
  'Ferris source/trademark authority: `source.md`.' \
  'Source/trademark note: Ferris is a `source-reviewed` Rust-community mascot route. Source context lives in `source.md`; Rust/Cargo marks, logos, official-affiliation claims, and endorsement wording follow the Rust Foundation trademark policy context recorded in `source.md`.' \
  'Public rendered Ferris samples remain gated by `RELEASE_CHECKLIST.md`.' \
  'Ferris route block: generic-crab drift, passive Ferris placement, Rust-logo misuse, official-affiliation cues, over-detailed mascot rendering, excessive text, source-asset tracing, and route leakage all fail the route.' \
  'Save accepted Ferris output under `assets/<article-slug>-ferris/` with an ordered English slug filename such as `01-topic-name.png`.'
do
  for file in index.md style-dna.md ferris-ip.md composition-patterns.md prompt-template.md qa-checklist.md; do
    grep -F "$marker" "ian-xiaohei-illustrations/references/ips/ferris/$file" >/dev/null || exit 1
  done
done
```

Result: `ferris-operational-markers=ok`

```bash
for failure in 'generic-crab drift' 'passive Ferris placement' 'Rust-logo misuse' 'official-affiliation cues' 'over-detailed mascot rendering' 'excessive text' 'source-asset tracing' 'route leakage'; do
  for file in index.md style-dna.md ferris-ip.md composition-patterns.md prompt-template.md qa-checklist.md; do
    grep -F "$failure" "ian-xiaohei-illustrations/references/ips/ferris/$file" >/dev/null || exit 1
  done
done
```

Result: `ferris-failure-categories=ok`

## Acceptance

Phase 12 human visual verification is satisfied. The Ferris canonical pack is
ready for Phase 13 controller integration.
