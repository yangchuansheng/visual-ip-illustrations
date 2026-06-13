# Phase 20: Validation Hardening - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T00:00:00+08:00
**Phase:** 20-validation-hardening
**Areas discussed:** Validator scope and matrix, Sealos route and pack coverage, Public docs and smoke coverage, Leakage and sample policy gates, Test hardening and evidence

---

## Validator Scope and Matrix

| Option | Description | Selected |
|--------|-------------|----------|
| Minimal Phase 16 extension | Keep the validator near the current 66-check baseline and add only a few Sealos docs markers. | |
| Full v1.3 validation matrix | Expand the validator across route metadata, Sealos pack, controller, public docs, metadata, NOTICE, release checklist, leakage, sample gates, and final pass output. | ✓ |
| Broad validator refactor | Redesign the validator architecture before adding Phase 20 checks. | |

**User's choice:** Full v1.3 validation matrix.
**Notes:** User explicitly prioritized performance and stability while naming documentation drift, route alias misses, brand boundary misses, generated sample policy misses, and Sealos canonical identity regressions as core risks. The discussion locks a small-helper, route-specific hardening approach rather than a broad refactor.

---

## Sealos Route and Pack Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Route-row-only checks | Validate only the `sealos` route row and source record. | |
| Route plus canonical pack checks | Validate route metadata plus all seven Sealos route-local references, prompt fields, QA markers, uploaded-image markers, and brand-boundary markers. | ✓ |
| Runtime image validation | Add visual likeness or generated-image analysis to judge the mascot. | |

**User's choice:** Route plus canonical pack checks.
**Notes:** Phase 17 deliberately created deterministic text markers for Phase 20. Automated visual likeness judgment remains outside v1.3 scope; objective text/package markers carry local validation.

---

## Public Docs and Smoke Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 16 public-doc checks | Preserve `DOC-SEALOS-P16-001` style checks as the main docs gate. | |
| Upgrade to Phase 19 public-surface checks | Validate README, examples, metadata, NOTICE, release checklist, raw and escaped path tokens, Sealos smoke prompts, and five-IP mixed prompts. | ✓ |
| Manual release checklist only | Rely on maintainers to inspect public docs by hand. | |

**User's choice:** Upgrade to Phase 19 public-surface checks.
**Notes:** Phase 19 verification confirmed the completed public surface, so Phase 20 should validate current docs instead of placeholder route-status wording.

---

## Leakage and Sample Policy Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Public asset gate only | Keep the existing Sealos public asset approval parser and directory gate. | |
| Public asset plus generated sample gates | Add generated Sealos sample policy parsing and fixtures while preserving public asset approval behavior. | ✓ |
| Allow public samples during validation | Permit rendered Sealos samples in public directories during Phase 20. | |

**User's choice:** Public asset plus generated sample gates.
**Notes:** The release checklist distinguishes internal review samples under `assets/<article-slug>-sealos/` from public rendered samples in public example directories. Phase 20 should encode that distinction and require complete approval fields for publication.

---

## Test Hardening and Evidence

| Option | Description | Selected |
|--------|-------------|----------|
| Positive tests only | Assert the expanded validator passes on the current repo. | |
| Positive plus negative fixtures | Add passing matrix tests plus fixture mutations for route, pack, prompt, QA, docs, metadata, leakage, sample policy, generated sample policy, and failure messages. | ✓ |
| External test runner | Introduce a new test framework or package manifest. | |

**User's choice:** Positive plus negative fixtures.
**Notes:** Current tests already copy the repo into temporary fixtures and mutate files. Phase 20 should extend that pattern, lock final check ordering, and record final validator/test evidence in Phase 20 artifacts.

---

## the agent's Discretion

- Use dependency-free Node validation and `node --test`.
- Preserve current public docs and Sealos route pack unless a narrow consistency correction is needed to satisfy locked Phase 16-19 contracts.
- Keep generated-image and visual-likeness automation out of Phase 20.
- Split planning into validator implementation, Node test hardening, and final evidence capture, matching the roadmap's three planned Phase 20 plan slots.

## Deferred Ideas

None.
