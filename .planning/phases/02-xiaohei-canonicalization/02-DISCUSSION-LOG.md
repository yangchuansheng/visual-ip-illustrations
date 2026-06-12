# Phase 2: Xiaohei Canonicalization - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-12
**Phase:** 2-Xiaohei Canonicalization
**Areas discussed:** canonical pack location, reference split, legacy compatibility, route metadata, output path, prompt and QA stability, public prompt compatibility

---

## Canonical Pack Location

| Option | Description | Selected |
|--------|-------------|----------|
| `references/ips/xiaohei/` | Creates a nested IP-pack path that can later mirror Littlebox. | ✓ |
| Root references only | Keep all Xiaohei files at `references/*.md`. | |

**User's choice:** Auto-selected `references/ips/xiaohei/`.
**Notes:** This gives Phase 3 a clear sibling structure for Littlebox.

---

## Reference Split

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve five files | Keep style DNA, IP contract, composition rules, prompt template, and quality gate separate. | ✓ |
| Merge references | Combine Xiaohei rules into one larger pack file. | |

**User's choice:** Auto-selected five-file split.
**Notes:** The current split already maps cleanly to route `required_references` and QA behavior.

---

## Legacy Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve root paths | Keep the five current root reference paths valid during migration. | ✓ |
| Move only | Move files into canonical pack and require callers to update. | |

**User's choice:** Auto-selected legacy path preservation.
**Notes:** Current README, examples, and skill behavior rely on these paths.

---

## Route Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical first, legacy noted | Point Xiaohei `required_references` at canonical pack and document legacy paths. | ✓ |
| Legacy first | Keep route metadata pointed only at root references. | |

**User's choice:** Auto-selected canonical first with legacy note.
**Notes:** Phase 4 validation can then check canonical paths and legacy compatibility.

---

## Xiaohei Behavior Preservation

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve prompt and QA contract | Keep current 16:9, white background, line art, labels, whitespace, character, and anti-repeat rules. | ✓ |
| Rewrite style broadly | Use Phase 2 as a chance to redesign Xiaohei style language. | |

**User's choice:** Auto-selected preservation.
**Notes:** Phase 2 is canonicalization, not style redesign.

---

## Public Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Keep prompts valid | README and examples remain copyable while adding canonical-pack pointers where useful. | ✓ |
| Update docs later | Leave public docs untouched until Phase 5. | |

**User's choice:** Auto-selected prompt compatibility.
**Notes:** XIAO-01 requires existing Xiaohei prompts to remain valid.

## the agent's Discretion

- Choose shim-vs-duplicate strategy for legacy references.
- Add a compact pack index if it improves maintainability and future validation.

## Deferred Ideas

- Phase 3: Littlebox canonical pack, route execution, prompt, QA, output path, and attribution.
- Phase 4: validation command for canonical and legacy path checks.
- Phase 5: broad public docs and release packaging refresh.
