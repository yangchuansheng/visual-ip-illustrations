---
phase: 45-cai-xukun-skill-controller-integration
verified: 2026-06-17T20:43:09Z
status: passed
uat_type: deterministic-source-uat
requirements:
  - RUN-01
  - RUN-02
  - RUN-03
  - RUN-04
---

# Phase 45: UAT Report

**Goal:** Users can invoke Cai Xukun through runtime skill behavior while mixed-IP route isolation stays intact.
**Result:** PASS

## UAT Matrix

| Test ID | User Flow | Expected Result | Evidence | Status |
|---------|-----------|-----------------|----------|--------|
| RUN-01-A | Select Cai Xukun with `蔡徐坤`, `Cai Xukun`, `caixukun`, or `cxk`. | Controller selects route id `caixukun`, display name `Cai Xukun`, status `gated-public-figure`, output suffix `caixukun`, and path `assets/<article-slug>-caixukun/`. | `SKILL.md` line 130; `routing.md` lines 16-17 and route row line 47. | PASS |
| RUN-01-B | Invoke Cai Xukun planning. | Shot list includes selected IP, route status, mascot state/action, neutral article labels, likeness boundary, source-image context, and output path. | `SKILL.md` lines 256-271. | PASS |
| RUN-01-C | Invoke Cai Xukun generation. | Controller loads only Cai Xukun refs, uses prompt/composition templates, checks QA, and saves under `assets/<article-slug>-caixukun/`. | `SKILL.md` lines 406-428 and 599-624. | PASS |
| RUN-01-D | Invoke Cai Xukun edit or repair. | Controller dispatches to Cai Xukun edit gates and preserves status, source pointer, identity, likeness boundary, source context, public sample boundary, QA context, route isolation, and output path. | `SKILL.md` lines 430 and 595. | PASS |
| RUN-01-E | Run Cai Xukun QA. | QA dispatch uses `references/ips/caixukun/qa-checklist.md` and includes route-specific high-risk failures. | `SKILL.md` lines 436 and 564-595. | PASS |
| RUN-02 | Request mixed-IP output across all routes. | Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun are separate route groups with route-local refs/prompts/QA/edit gates/suffixes/output dirs. | `SKILL.md` lines 131, 273-282, 432, and 649-658. | PASS |
| RUN-03-A | Receive single-route Cai Xukun delivery report. | Report includes selected IP, image count, purpose per image, save path, route status, source pointer, identity status, likeness boundary status, source-image context status, route isolation, public sample boundary, stability notes, and path-leakage protection. | `SKILL.md` line 647. | PASS |
| RUN-03-B | Receive mixed-IP Cai Xukun delivery block. | Cai Xukun block includes selected IP, shared idea, image count, purpose per image, save path, route status, source authority/pointer, identity status, boundary statuses, route isolation, public sample boundary, and stability notes. | `SKILL.md` line 658. | PASS |
| RUN-03-C | Prevent maintainer-local path leakage. | Runtime-loaded files contain no `/Users/longnv/Downloads`, `Generated image 1 (9).png`, or `20260618-013721.jpeg`; source authority uses path-free labels and `references/ips/caixukun/source.md`. | Absence check passed; path-free authority `rg` matched `routing.md`, `source.md`, and `prompt-template.md`. | PASS |
| RUN-04-A | Use default and existing routes after Cai Xukun integration. | Omitted visual IP still selects Xiaohei; Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher remain explicit routes with stable paths. | `SKILL.md` lines 27, 122-147, and 616-624. | PASS |
| RUN-04-B | Preserve identity and legacy compatibility. | Visual IP Illustrations, `$visual-ip-illustrations`, and `$ian-xiaohei-illustrations` remain present. | `SKILL.md` lines 3, 6, 12-23. | PASS |
| RUN-04-C | Keep `agents/openai.yaml` in Phase 46 ownership. | Phase 45 leaves agent metadata unchanged. | `git diff --quiet -- skills/visual-ip-illustrations/agents/openai.yaml` returned `PASS: agents/openai.yaml unchanged`. | PASS |

## Deterministic Check Results

| Check | Command Summary | Result | Status |
|-------|-----------------|--------|--------|
| Route/loading grep | RUN-01 route selection and seven-file loading pattern from `45-VALIDATION.md` | Expected Cai Xukun aliases, status, suffix, output path, and refs found. | PASS |
| Planning grep | RUN-01 planning fields pattern from `45-VALIDATION.md` | Expected shot-list fields found. | PASS |
| Generation/edit grep | RUN-01 generation and edit routing pattern from `45-VALIDATION.md` | Route-local prompt, composition, QA, identity, context, boundary, forbidden-claim, and edit-gate markers found. | PASS |
| Mixed-IP grep | RUN-02 grouping pattern from `45-VALIDATION.md` | Separate Cai Xukun route group and status/output/isolation fields found. | PASS |
| QA/save/delivery grep | RUN-01/RUN-03 pattern from `45-VALIDATION.md` | QA failures, raw/escaped paths, delivery fields, source pointer, and status fields found. | PASS |
| Route-leakage guard grep | RUN-03 delivery guard pattern from `45-VALIDATION.md` | Cai Xukun preservation fields found in delivery guard. | PASS |
| Identity compatibility grep | RUN-04 pattern from `45-VALIDATION.md` | Product identity, canonical invocation, legacy alias, Xiaohei default, and existing routes found. | PASS |
| Local path leakage absence | `rg` absence check across `SKILL.md`, `routing.md`, and `references/ips/caixukun/*.md` | No local paths or source filenames found. | PASS |
| Path-free source authority | `rg` for uploaded reference image A/B, source pointer, and uploaded-image stylized mascot wording | Stable authority wording found. | PASS |
| Scope guard | Compare changed/untracked paths against `45-SCOPE-BASELINE.txt` allowlist | `PASS: scope guard clean`. | PASS |
| SHA guard | `shasum -a 256 -c 45-SCOPE-BASELINE-SHA256.txt` | All baseline entries returned `OK`. | PASS |
| Diff hygiene | `git diff --check -- ...` | exit 0. | PASS |
| Phase plan index | `node /Users/longnv/.codex/gsd-core/bin/gsd-tools.cjs phase-plan-index 45` | `incomplete: []`, `has_summary: true`, `task_count: 3`. | PASS |

## Human Verification

No human UAT is required for Phase 45. This phase is accepted by deterministic inspection of the runtime skill-controller instructions and route-local reference wiring. Visual output quality and public sample approval remain governed by the Cai Xukun QA route and later release phases.

## Notes

- The PATH shim `gsd-tools` was unavailable, so the required plan-index check used the explicit Node entrypoint.
- Subagent tooling was not exposed in the current Codex session after tool discovery. The UAT evidence is deterministic and reproducible from local files and commands.

---

_UAT verified: 2026-06-17T20:43:09Z_
_Verifier: the agent (gsd-verifier)_
