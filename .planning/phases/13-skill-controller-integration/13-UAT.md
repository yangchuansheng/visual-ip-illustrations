---
phase: 13-skill-controller-integration
uat_date: 2026-06-13T10:05:00Z
status: complete
human_verification_required: true
human_verification_result: passed_text_runtime_simulation
tests_total: 4
tests_passed: 4
issues_found: 0
deferred_validation: phase-15
---

# Phase 13: Skill Controller Integration UAT

## Scope

Phase 13 UAT closes the human runtime-routing verification item from
`13-VERIFICATION.md` with a text-level controller simulation against
`ian-xiaohei-illustrations/SKILL.md` and
`ian-xiaohei-illustrations/references/routing.md`.

The repository is a Markdown-driven Codex Skill package. Runtime behavior is
verified by confirming the installed-skill controller text now contains the
route selection, reference loading, prompt, QA, edit, save, and delivery
contracts needed for host execution.

## Test Results

| Test | Expected | Result | Status |
|------|----------|--------|--------|
| Explicit Ferris aliases | Each Ferris alias selects route id `ferris`, status `source-reviewed`, source pointer `references/ips/ferris/source.md`, and output path `assets/<article-slug>-ferris/`. | `SKILL.md` and `routing.md` contain all six aliases: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, and `Rust 螃蟹`. Both controller surfaces contain `source-reviewed`, `references/ips/ferris/source.md`, raw Ferris output path, and escaped Ferris path token. | PASS |
| Omitted-IP default | A request without an explicit visual IP selects only Xiaohei. | `SKILL.md` preserves the omitted-IP Xiaohei default sentence. `routing.md` has exactly one `default=true` route and it is `xiaohei`. | PASS |
| Mixed four-IP request | One shared core idea creates separate Xiaohei, Littlebox, Tom, and Ferris route groups. | `SKILL.md` and `routing.md` contain the four-IP separate route group contract, route-local reference loading, and per-route output directories. | PASS |
| Ferris full-pack loading and delivery | Ferris groups load the full Phase 12 pack, use Ferris prompt/QA/edit gates, and report the Ferris output path. | `SKILL.md` and `routing.md` contain all seven Ferris pack references, `references/ips/ferris/prompt-template.md`, `references/ips/ferris/qa-checklist.md`, failure categories, edit gates, raw path, and escaped path token. | PASS |

## Commands

```bash
for file in ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md; do
  for alias in "Ferris" "Rust mascot" "Rust crab" "Rustacean" "Rust 吉祥物" "Rust 螃蟹"; do
    grep -F "$alias" "$file" >/dev/null || exit 1
  done
done
```

Result: `aliases-ok`

```bash
grep -F '用户省略视觉 IP 时，默认选择小黑路由；omitted visual IP selects only the Xiaohei route。' ian-xiaohei-illustrations/SKILL.md >/dev/null
default_count=$(grep '^| ' ian-xiaohei-illustrations/references/routing.md | grep -F '| `true` |' | wc -l | tr -d ' ')
test "$default_count" = "1"
grep '^| `xiaohei` ' ian-xiaohei-illustrations/references/routing.md | grep -F '| `true` |' >/dev/null
```

Result: `default-ok`

```bash
for file in ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md; do
  for token in 'assets/<article-slug>-ferris/' 'assets/&lt;article-slug&gt;-ferris/' 'source-reviewed' 'references/ips/ferris/source.md' 'references/ips/ferris/prompt-template.md' 'references/ips/ferris/qa-checklist.md'; do
    grep -F "$token" "$file" >/dev/null || exit 1
  done
done
```

Result: `ferris-controller-tokens-ok`

```bash
for file in ian-xiaohei-illustrations/SKILL.md ian-xiaohei-illustrations/references/routing.md; do
  for ref in "references/ips/ferris/index.md" "references/ips/ferris/source.md" "references/ips/ferris/style-dna.md" "references/ips/ferris/ferris-ip.md" "references/ips/ferris/composition-patterns.md" "references/ips/ferris/prompt-template.md" "references/ips/ferris/qa-checklist.md"; do
    grep -F "$ref" "$file" >/dev/null || exit 1
  done
done
```

Result: `full-pack-refs-ok`

## Deferred Validation

The deterministic validator and Node tests remain red until Phase 15 updates
the Ferris `required_references` expectation from the old source-only contract
to the full seven-file Phase 12 pack.

## Acceptance

Phase 13 runtime-routing UAT is satisfied at the Markdown controller level.
The skill controller is ready for Phase 14 public docs and release-surface work.
