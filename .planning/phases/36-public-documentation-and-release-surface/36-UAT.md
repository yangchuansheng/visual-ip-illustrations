---
status: complete
phase: 36-public-documentation-and-release-surface
source:
  - .planning/phases/36-public-documentation-and-release-surface/36-01-SUMMARY.md
started: 2026-06-16T12:09:11Z
updated: 2026-06-16T12:09:11Z
---

# Phase 36 UAT

## Current Test

number: complete
name: Phase 36 public surface smoke
expected: |
  README, examples, NOTICE, release checklist, and OpenAI metadata expose OpenClaw as an explicit source-reviewed route with source/license and public sample gate clarity.
result: passed

## Tests

### 1. README OpenClaw Discovery

expected: README exposes OpenClaw route description, aliases, output path, escaped docs marker, canonical pack path, source/license authority, and public sample gate.
result: passed

### 2. Prompt Example Coverage

expected: Prompt examples include OpenClaw planning, generation, edit, route smoke, maintainer smoke, and mixed-IP groups with `assets/<article-slug>-openclaw/`.
result: passed

### 3. Attribution and Release Gates

expected: NOTICE and release checklist include official repository, `MIT License`, OpenClaw Foundation copyright, uploaded-logo authority, public sample policy, and Phase 37 evidence ownership.
result: passed

### 4. Metadata Discovery

expected: `openai.yaml` names OpenClaw while preserving Visual IP Illustrations and legacy compatibility wording.
result: passed

### 5. Automated Gate Smoke

expected: Package validator, Node tests, and diff check pass.
result: passed

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0

## Gaps

None for Phase 36. Phase 37 owns validator parity hardening and final release evidence.
