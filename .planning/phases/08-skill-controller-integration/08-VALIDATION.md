---
phase: 08-skill-controller-integration
status: planned
created: 2026-06-13
validator: nyquist
requirements:
  - TOMR-01
  - TOMR-02
  - TOMR-03
  - TOMR-04
---

# Phase 8 Validation Plan

## Purpose

Validate that the skill controller can select Tom explicitly, preserve Xiaohei as the omitted-IP default, isolate mixed Xiaohei/Littlebox/Tom route groups, and expose Tom raw and escaped output path markers.

## Requirement Coverage

| Requirement | Validation Truth | Planned Check |
|-------------|------------------|---------------|
| TOMR-01 | `SKILL.md` contains exact Tom aliases and routes them to `tom` with status `gated-authorized`. | Alias and status `rg` checks against `ian-xiaohei-illustrations/SKILL.md`. |
| TOMR-02 | Omitted visual IP remains a Xiaohei-only default, and Tom remains explicit with `default=false`. | Separate omitted-IP, Xiaohei, and Tom explicit/default marker checks. |
| TOMR-03 | Mixed requests create separate route groups for selected Xiaohei, Littlebox, and Tom routes. | Route-group wording, route-local reference, prompt, QA, and output-directory checks. |
| TOMR-04 | Tom output uses `assets/<article-slug>-tom/` and includes `assets/&lt;article-slug&gt;-tom/`. | Independent raw-path, escaped-path, suffix, and delivery block checks. |

## Automated Checks

Run after implementation:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
rg -n "Tom|Tom Cat|Tom and Jerry|汤姆|汤姆猫" ian-xiaohei-illustrations/SKILL.md
rg -n "references/ips/tom/index.md|references/ips/tom/rights.md|references/ips/tom/style-dna.md|references/ips/tom/tom-ip.md|references/ips/tom/composition-patterns.md|references/ips/tom/prompt-template.md|references/ips/tom/qa-checklist.md" ian-xiaohei-illustrations/SKILL.md
rg -n "gated-authorized" ian-xiaohei-illustrations/SKILL.md
rg -n "references/ips/tom/rights.md" ian-xiaohei-illustrations/SKILL.md
rg -n "assets/<article-slug>-tom/" ian-xiaohei-illustrations/SKILL.md
rg -n "assets/&lt;article-slug&gt;-tom/" ian-xiaohei-illustrations/SKILL.md
rg -n "separate route groups|variant group|route group" ian-xiaohei-illustrations/SKILL.md
rg -n "用户省略视觉 IP|omitted visual IP" ian-xiaohei-illustrations/SKILL.md
rg -n "xiaohei|小黑|Xiaohei" ian-xiaohei-illustrations/SKILL.md
rg -n "default=false|Tom.*default=false|Tom.*显式|explicit.*Tom" ian-xiaohei-illustrations/SKILL.md
```

## Scope Guard

Phase 8 validation expects implementation changes in `ian-xiaohei-illustrations/SKILL.md` plus GSD summary artifacts. README, examples, release checklist, agent metadata, validator scripts, tests, Tom pack files, and public rendered assets remain Phase 9 or Phase 10 work.

## Manual Review Focus

- Confirm Tom wording stays explicit and `gated-authorized`.
- Confirm mixed-IP prose says route groups stay separate.
- Confirm Tom rights decisions point to `references/ips/tom/rights.md`.
- Confirm controller wording does not imply broad Tom availability.
