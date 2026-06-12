---
status: complete
phase: 07-tom-canonical-pack
source:
  - 07-01-SUMMARY.md
  - 07-02-SUMMARY.md
  - 07-03-SUMMARY.md
started: 2026-06-12T19:13:28Z
updated: 2026-06-12T19:13:28Z
---

## Current Test

[testing complete]

## Tests

### 1. Tom Canonical Pack Is Discoverable
expected: Maintainer can inspect `ian-xiaohei-illustrations/references/ips/tom/` and find `index.md`, `rights.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `prompt-template.md`, and `qa-checklist.md`.
result: pass
evidence: `find ian-xiaohei-illustrations/references/ips/tom -maxdepth 1 -type f -name '*.md' -print | sort` returned all seven Tom Markdown files.

### 2. Tom Planning Surface Exposes Required Fields
expected: The Tom prompt template exposes Placement, Core idea, Structure type, Tom state, Tom action, Supporting objects, Visible labels, Output path, and Rights-status note.
result: pass
evidence: `rg -n "Placement|Core idea|Structure type|Tom state|Tom action|Supporting objects|Visible labels|Output path|Rights-status note" ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` matched the shot-list block.

### 3. Tom Generation Contract Is One Image With Active Tom
expected: Tom generation instructions produce one standalone 16:9 article illustration where Tom performs the central cognitive action and output is saved under `assets/<article-slug>-tom/`.
result: pass
evidence: `rg -n "Generate one standalone 16:9 horizontal article illustration|Tom must perform the central cognitive action|assets/<article-slug>-tom/" ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` matched the generation contract and save reminder.

### 4. Tom QA Rejects Protected-Route Failures
expected: Tom QA rejects generic cats, passive Tom placement, source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, excessive text, and route leakage.
result: pass
evidence: `rg -n "generic cats|passive Tom placement|source-frame recreation|show logos|title cards|default Jerry usage|broad cast expansion|excessive text|route leakage" ian-xiaohei-illustrations/references/ips/tom/qa-checklist.md` matched every locked failure category.

### 5. Tom Edit Repairs Preserve Targeted Scope
expected: Tom edit prompts cover stronger Tom participation, off-model identity repair, title removal, text reduction, and unaffected-content preservation while keeping the `gated-authorized` rights note.
result: pass
evidence: `rg -n "Tom edit participation repair gate|Tom off-model identity repair gate|Tom title removal edit gate|Tom text reduction edit gate|Tom unaffected-content preservation gate|gated-authorized" ian-xiaohei-illustrations/references/ips/tom/prompt-template.md` matched all edit repair gates and rights-status markers.

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

[]
