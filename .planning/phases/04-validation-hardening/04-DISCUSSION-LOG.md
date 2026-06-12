# Phase 4: Validation Hardening - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-12
**Phase:** 4-Validation Hardening
**Areas discussed:** Validation command shape, required checks, failure semantics, manual smoke prompt coverage, lightweight boundary, Phase 5 boundary

---

## Discussion Source

The user supplied the Phase 4 goal and six explicit decision areas. The discussion used first-principles analysis plus codebase assumptions from the roadmap, Phase 1-3 context/verification/UAT files, current skill package files, public docs, attribution files, and repository root tooling scan.

No interactive question was needed because the requested decision areas fully described the gray areas to settle for downstream planning.

---

## Validation Command Shape

| Option | Description | Selected |
|--------|-------------|----------|
| `scripts/validate-skill-package.mjs` | Plain Node.js command using built-in modules; no package install; easy structured file checks. | ✓ |
| Shell script under `scripts/` | Lightweight for grep-style checks, weaker for structured Markdown/YAML parsing and cross-shell consistency. | |
| Package-manager test command | Familiar in application repos, but this repo has no package manifest or test framework. | |

**User's choice:** Locked through the explicit requirement to decide command location, language/runtime, and invocation name.
**Notes:** The selected command is `node scripts/validate-skill-package.mjs`. Evidence: `.planning/codebase/TESTING.md` records no runner; `.planning/codebase/STRUCTURE.md` recommends `scripts/` for recurring validation utilities; the repository root has no `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, `go.mod`, Makefile, or lockfile.

---

## Required Checks

| Option | Description | Selected |
|--------|-------------|----------|
| Contract validator | Check package shape, `SKILL.md`, agent metadata shape, route metadata, aliases, default route, required references, output suffixes, legacy root parity, prompt variables, docs links, NOTICE attribution, smoke prompt markers, and rendered image import boundary. | ✓ |
| Minimal existence check | Verify only top-level files and required reference paths. | |
| Full runtime smoke | Invoke Codex/image generation and inspect results. | |

**User's choice:** Contract validator.
**Notes:** Phase 1-3 verification repeatedly used local grep/find/diff checks for these contracts. Phase 4 turns those one-off checks into a reusable local command. The validator should treat `agents/openai.yaml` as a shape/invocation-policy check because broad selectable-IP copy belongs to Phase 5.

---

## Failure Semantics

| Option | Description | Selected |
|--------|-------------|----------|
| Deterministic fail/exit contract | Stable English `[PASS]`/`[FAIL]` logs, path-specific messages, summary counts, exit `0` only when all required checks pass, nonzero on any required failure. | ✓ |
| Human prose report only | Easier to read, weaker for release gates and automation. | |
| Fail-fast first error | Shorter output, weaker maintainer workflow when several docs drift together. | |

**User's choice:** Deterministic fail/exit contract.
**Notes:** Logs should be English because code, scripts, comments, commit messages, and PR copy use English in this repository. Deterministic ordering should use stable check IDs so repeated runs are comparable.

---

## Manual Smoke Prompt Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Validate smoke fixtures in `examples/prompts.md` | Confirm default Xiaohei, explicit Xiaohei, explicit Littlebox, and mixed-IP variant prompt coverage without running image generation. | ✓ |
| Add a separate smoke fixture file | Clear separation, but creates another docs surface before Phase 5. | |
| Run actual prompt smoke tests | Closer to real behavior, but requires Codex/image-generation runtime. | |

**User's choice:** Validate `examples/prompts.md`.
**Notes:** Current `examples/prompts.md` already has sections for omitted-IP default route, explicit Xiaohei, explicit Littlebox, and mixed-IP variant groups. Phase 4 should make their presence executable. Phase 5 can later expand public examples.

---

## Lightweight Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Local file validator only | Reads Markdown/YAML/assets paths and uses no network, package install, browser, app framework, image model, or generated assets. | ✓ |
| Add lightweight npm project | Gives familiar `npm test`, but introduces package metadata to a no-build skill package. | |
| Add visual/image validation | Future-friendly, but v1 keeps rendered image quality manual and host-runtime dependent. | |

**User's choice:** Local file validator only.
**Notes:** This matches VALD-04, the project no-build-runtime constraint, and the current repository shape. Image generation remains a host `image_gen` dependency and should stay outside the validator.

---

## Phase 5 Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 4 to validation hardening | Phase 4 implements the command and checks; Phase 5 handles broad docs, examples, metadata copy, and release checklist. | ✓ |
| Combine docs and validation in Phase 4 | Could reduce handoffs, but expands the phase beyond the roadmap boundary. | |
| Move release packaging into validation | Useful later, but Phase 5 owns release packaging and checklist. | |

**User's choice:** Keep Phase 4 to validation hardening.
**Notes:** `.planning/ROADMAP.md` and `.planning/REQUIREMENTS.md` map DOCS-01, DOCS-02, DOCS-03, DOCS-05, and DOCS-06 to Phase 5. Phase 4 should not create release archives, CI workflows, broad docs rewrites, rendered Littlebox examples, or an asset manifest.

---

## Assumptions Reviewed

| Assumption | Evidence | Confidence |
|------------|----------|------------|
| Node is the right validator runtime. | No app/test framework exists; GSD runs through Node; structured file parsing is easier than shell-only checks. | Likely |
| `examples/prompts.md` should remain the smoke prompt fixture source. | It already contains the four smoke categories required by VALD-05. | Confident |
| Agent metadata validation should check shape and invocation policy in Phase 4. | Phase 3 verifier recorded `agents/openai.yaml` as a Phase 5 copy boundary; DOCS-05 is Phase 5. | Confident |
| Rendered Littlebox image import boundary should remain executable in Phase 4. | Phase 3 verification and UAT both accepted this boundary; v1 excludes full rendered Littlebox image import. | Likely |

---

## the agent's Discretion

- Exact internal check ID names and helper function names.
- Whether advisory future-proof checks print as `[INFO]` or are omitted.
- Whether the validator reports all failures in one run or groups failures by check area, provided the exit code and stable order remain deterministic.

## Deferred Ideas

- Phase 5 broad README and examples refresh.
- Phase 5 `agents/openai.yaml` selectable-IP wording update.
- Phase 5 release checklist and release packaging docs.
- v2 CI, visual regression, asset manifest, third-IP schema, and rendered Littlebox public examples.
