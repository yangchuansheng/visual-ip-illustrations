---
phase: 34
status: issues
findings_open: 4
reviewed: 2026-06-16T10:55:00Z
commits:
  - e7440ad
  - ad77eec
  - 33edb88
files_reviewed:
  - ian-xiaohei-illustrations/references/ips/openclaw/index.md
  - ian-xiaohei-illustrations/references/ips/openclaw/source.md
  - ian-xiaohei-illustrations/references/ips/openclaw/style-dna.md
  - ian-xiaohei-illustrations/references/ips/openclaw/openclaw-ip.md
  - ian-xiaohei-illustrations/references/ips/openclaw/composition-patterns.md
  - ian-xiaohei-illustrations/references/ips/openclaw/prompt-template.md
  - ian-xiaohei-illustrations/references/ips/openclaw/qa-checklist.md
  - ian-xiaohei-illustrations/references/routing.md
  - scripts/validate-skill-package.mjs
  - scripts/validate-skill-package.test.mjs
  - .planning/phases/34-openclaw-canonical-pack/34-01-SUMMARY.md
---

# Phase 34 Code Review

## Summary

Reviewed the Phase 34 OpenClaw canonical pack commits, route table expansion, validator hardening, regression tests, and summary artifact. Validation commands pass, but the submitted change leaves route behavior and verification gaps open.

Verification observed during review:

```bash
node scripts/validate-skill-package.mjs
# Summary: total=106 passed=106 failed=0 skipped=0

node --test scripts/validate-skill-package.test.mjs
# tests 73, pass 73, fail 0
```

## Findings

### CR-01: OpenClaw is route-table selectable before the skill controller surfaces are wired

**Classification:** BLOCKER
**File:** `ian-xiaohei-illustrations/references/routing.md:13`
**Issue:** The Phase 34 routing row now says explicit OpenClaw aliases select the `openclaw` route and line 35 lists the full seven-file `required_references`. The runtime entrypoint still omits OpenClaw from the actual skill route surface: `ian-xiaohei-illustrations/SKILL.md:37` is the last visual-IP route introduction, `SKILL.md:95` mixed route handling lists only Xiaohei/Littlebox/Tom/Ferris/Seal, `SKILL.md:105` omits OpenClaw `required_references`, `SKILL.md:364-370` omits the OpenClaw output directory, and `SKILL.md:404-410` omits the OpenClaw delivery block. Shipping this state makes routing metadata claim OpenClaw is selectable while the controller instructions still guide agents through the five-route runtime contract.
**Fix:** Wire OpenClaw through the skill controller in the same route surface as the routing row: visual route intro, alias selection, mixed-IP grouping, required reference list, generation/repair notes, save paths, validation marker paths, output contract, and delivery leakage guard. Keep the routing row and controller route list in lockstep.

### WR-01: Validator passes OpenClaw route drift because it checks combined surfaces instead of per-surface route parity

**Classification:** WARNING
**File:** `scripts/validate-skill-package.mjs:1667`
**Issue:** `assertPhase28CompatibilitySurface()` combines `SKILL.md`, `openai.yaml`, `README.md`, `examples/prompts.md`, the language policy, and `routing.md`, then looks for route markers in the combined text. Because `routing.md` now contains OpenClaw, the check can pass even when `SKILL.md`, agent metadata, README, or examples omit OpenClaw. The current repository demonstrates that gap: OpenClaw is absent from `ian-xiaohei-illustrations/agents/openai.yaml:3-4`, README route summaries, examples route smoke prompts, and the SKILL runtime lists cited in CR-01, while the validator still reports all 106 checks passing.
**Fix:** Add per-surface route parity checks. At minimum, assert that each selectable route id, alias family, route status, output suffix/path, and source/rights pointer appears in `SKILL.md` and `agents/openai.yaml` independently. Add fixture tests that remove only OpenClaw from each runtime surface and expect a specific failure.

### WR-02: OpenClaw source authority still says the Phase 34 pack belongs to a later phase

**Classification:** WARNING
**File:** `ian-xiaohei-illustrations/references/ips/openclaw/source.md:47`
**Issue:** `source.md` is the authority named by every OpenClaw operational file, but it still says “Pending later phases: OpenClaw style, identity, composition, prompt, edit, QA...” and line 59 says those rules belong to a later canonical pack phase. Phase 34 adds `style-dna.md`, `openclaw-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`, so the source authority now contradicts the actual pack state. That creates source/status wording drift and gives maintainers conflicting instructions about which files are authoritative.
**Fix:** Update the source record so Phase 34 operational files are current route-local authorities. Leave only genuinely future work in the pending list, such as controller behavior, public documentation expansion, release surfaces, and final release evidence.

### WR-03: Parser tests bake in malformed alias values from markdown table parsing

**Classification:** WARNING
**File:** `scripts/validate-skill-package.test.mjs:999`
**Issue:** The helper test expects `parseMarkdownTable()` to return alias strings like `OpenClaw\`, \`openclaw...`, with internal backticks left in the value. That enshrines a parser artifact from `stripWrappingTicks()` rather than the route contract itself. Future tests or consumers that rely on `parseMarkdownTable()` directly can compare against malformed alias strings and miss real alias regressions.
**Fix:** Test normalized aliases through `splitRouteAliases()` for every route, including OpenClaw. If `parseMarkdownTable()` is exported as a general helper, normalize backtick-wrapped list cells there or document that callers must pass list cells through the route-cell parser.
