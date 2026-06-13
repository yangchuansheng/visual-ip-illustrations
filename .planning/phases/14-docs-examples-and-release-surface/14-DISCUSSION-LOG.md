# Phase 14: Docs, Examples, and Release Surface - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-13T18:06:45+08:00
**Phase:** 14-Docs, Examples, and Release Surface
**Areas discussed:** Public Ferris README guidance, Copyable Ferris prompts, Agent metadata wording, NOTICE consistency, Release checklist expansion, Phase 15 validator/test deferral

---

## Public Ferris README Guidance

| Option | Description | Selected |
|--------|-------------|----------|
| Route marker only | Keep Phase 11 route-status phrase, aliases, and path tokens with minimal additional guidance. | |
| Full user-facing Ferris route section | Explain Ferris as an explicit source-reviewed Rust-community mascot route with aliases, output path, source/trademark boundary, full pack pointer, planning fields, and public sample gate. | ✓ |
| Broad public availability copy | Present Ferris as generally available without source/trademark release-review caveats. | |

**User's choice:** Full user-facing Ferris route section.
**Notes:** User required Ferris-aware README guidance with consistent source/trademark wording. Prior Phase 11 locked the source-reviewed public phrase; Phase 13 locked Ferris as explicit and Xiaohei as omitted-IP default.

---

## Copyable Ferris Prompts

| Option | Description | Selected |
|--------|-------------|----------|
| Smoke-only prompt | Keep the existing text-only Ferris route marker and defer full prompts. | |
| Planning, generation, smoke, and four-IP prompts | Add copyable prompts for Ferris planning, Ferris generation, Ferris route smoke, and four-IP mixed variant groups. | ✓ |
| Full prompt library rewrite | Rewrite all existing prompt examples around Ferris. | |

**User's choice:** Planning, generation, smoke, and four-IP prompts.
**Notes:** FDOC-02 explicitly requires Ferris planning, generation, smoke, and four-IP mixed prompts. Existing `examples/prompts.md` contains a placeholder that says Phase 14 owns copyable Ferris prompt examples.

---

## Agent Metadata Wording

| Option | Description | Selected |
|--------|-------------|----------|
| Add Ferris only to description | Leave display name unchanged and mention Ferris in the longer copy. | |
| Name all four routes | Update display name, short description, and default prompt to name Xiaohei, Littlebox, Tom, and Ferris while preserving Xiaohei as implicit default. | ✓ |
| Remove implicit invocation | Disable implicit invocation to force route selection. | |

**User's choice:** Name all four routes.
**Notes:** FDOC-03 requires all four route names in metadata while preserving Xiaohei as implicit default. `allow_implicit_invocation: true` stays because it is a skill-level discovery setting and prior behavior relies on omitted-IP Xiaohei.

---

## NOTICE Consistency

| Option | Description | Selected |
|--------|-------------|----------|
| Leave NOTICE untouched | Existing Phase 11 Ferris section already separates source attribution from Rust trademark boundary. | |
| Consistency pass only | Keep the concise NOTICE section, ensure it names rustacean.net, Karen Rustad Tolva, source record, route status, and Rust trademark/endorsement boundary consistently. | ✓ |
| Expand NOTICE into full source record | Duplicate allowed use, restricted use, sample policy, and review owner in NOTICE. | |

**User's choice:** Consistency pass only.
**Notes:** The source record remains the operational authority at `ian-xiaohei-illustrations/references/ips/ferris/source.md`. NOTICE stays short and public-facing.

---

## Release Checklist Expansion

| Option | Description | Selected |
|--------|-------------|----------|
| Keep current Ferris gate | Existing release checklist has source review, trademark wording review, public sample gate, and final review. | |
| Expand Ferris release gates | Add prompt leakage scan, generated sample policy, docs consistency checks, validator command/evidence wording, public asset policy details, and final source/trademark review gates. | ✓ |
| Move release checks to validator implementation | Encode the Phase 14 release checklist directly in Node validation. | |

**User's choice:** Expand Ferris release gates.
**Notes:** FDOC-04 requires release checklist coverage for Ferris source review, Rust trademark wording review, prompt leakage scan, public asset policy, generated sample policy, validator commands, and final release review.

---

## Phase 15 Validator/Test Deferral

| Option | Description | Selected |
|--------|-------------|----------|
| Fix validator in Phase 14 | Update `scripts/validate-skill-package.mjs` and Node tests while changing docs. | |
| Keep validator/test work in Phase 15 | Document validator commands and expected release evidence, while leaving validator implementation and tests untouched. | ✓ |
| Remove validator references from docs | Avoid mentioning validation until Phase 15. | |

**User's choice:** Keep validator/test work in Phase 15.
**Notes:** User explicitly constrained Phase 14 to avoid validator scripts/tests. Phase 13 verification records the current validator/test failures as deferred to Phase 15.

---

## Agent's Discretion

- The user provided the Phase 14 scope, requirements, exact public/release surfaces, source/trademark constraints, and Phase 15 deferral directly.
- The agent selected the GSD-standard phase directory `.planning/phases/14-docs-examples-and-release-surface/` because `init.phase-op 14` resolved that path and downstream GSD commands depend on it.
- The planner may tune exact Chinese wording and section placement while preserving route status, aliases, path tokens, source/trademark wording, and validation deferral.

## Deferred Ideas

- Validator and Node test hardening remain in Phase 15.
- Machine-readable mascot/source manifests, asset manifests, packaging scripts, route selectors, visual regression, and full English localization remain v2 ideas.
