---
phase: 17-sealos-seal-canonical-pack
plan: 02
subsystem: skill-pack
tags: [codex-skill, markdown, sealos, prompts, composition, edit-prompts]
requires:
  - phase: 17-sealos-seal-canonical-pack
    provides: Sealos Seal foundation files from Plan 17-01
provides:
  - Sealos Seal composition families and metaphor rules
  - Sealos Seal planning output fields and English generation prompt
  - Sealos Seal edit prompt suite
affects: [phase-18-controller-loading, phase-19-public-docs, phase-20-validator-hardening]
tech-stack:
  added: []
  patterns: [route-local prompt template, cloud-developer object pools, identity-preserving edit prompts]
key-files:
  created:
    - ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md
    - ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md
  modified:
    - ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md
key-decisions:
  - Sealos planning fields use Mascot state and Mascot action with the stable assets/<article-slug>-sealos/ output path.
  - Image-generation prompts stay English while visible labels are copied exactly in the user's language.
  - Sealos edit prompts repair participation, uploaded-image identity, logo/hoodie/cap, title artifacts, text density, and unaffected-content preservation.
patterns-established:
  - Sealos composition pattern: one structure family, one cloud-developer metaphor, one active Mascot action.
  - Sealos prompt pattern: planning fields, generation prompt, and edit prompts repeat route status, source.md, uploaded-image-canonical, and uploaded-image-locked.
requirements-completed: [SIP-02, SIP-03, SIP-04, SIP-06]
duration: 20min
completed: 2026-06-13
---

# Phase 17 Plan 02: Sealos Composition and Prompt Summary

**Sealos Seal composition, planning, generation, and edit prompt references for cloud-developer article illustrations**

## Performance

- **Duration:** 20min
- **Started:** 2026-06-13T16:04:00Z
- **Completed:** 2026-06-13T16:24:00Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Created `composition-patterns.md` with eight structure families, Sealos cloud-developer metaphor domains, object pool, action pool, label rules, and identity-first variation gates.
- Created `prompt-template.md` with stable planning fields, `Mascot state`, `Mascot action`, Sealos output path, brand/canonical-image note, and English one-image generation prompt.
- Added six edit prompts for stronger mascot participation, uploaded-image identity repair, logo/hoodie/cap repair, title removal, text reduction, and preserving unaffected content.

## Task Commits

1. **Task 1: Create Sealos composition patterns** - `3457732` (feat)
2. **Task 2: Create Sealos planning and generation prompt template** - `c83f411` (feat)
3. **Task 3: Add Sealos edit prompt suite** - `21fa397` (feat)

## Files Created/Modified

- `ian-xiaohei-illustrations/references/ips/sealos/composition-patterns.md` - Structure families, metaphor invention rule, supporting object pool, mascot action pool, labels, and brand/identity gates.
- `ian-xiaohei-illustrations/references/ips/sealos/prompt-template.md` - Planning output format, single-image English generation prompt, and six repair/edit prompts.

## Decisions Made

- Used Sealos-specific field names `Mascot state` and `Mascot action` so downstream runtime and public docs can route prompts without generic character wording.
- Kept image-generation prompts in English for model consistency and labels in the user's language for article fidelity.
- Preserved `source.md` as authority while repeating deterministic route markers across prompt and edit surfaces.

## Verification

- `test -f ...composition-patterns.md && test -f ...prompt-template.md` - PASS
- `rg -n "Mascot state|Mascot action|Output path: assets/<article-slug>-sealos/|Brand/canonical-image note|Generate one standalone 16:9 horizontal article illustration|### Stronger Mascot Participation|### Uploaded-Image Identity Repair|### Logo Hoodie Cap Repair|### Title Removal|### Text Reduction|### Preserve Unaffected Content" ...prompt-template.md` - PASS
- `node scripts/validate-skill-package.mjs` - PASS, `Summary: total=66 passed=66 failed=0 skipped=0`
- `node --test scripts/validate-skill-package.test.mjs` - PASS, `tests 34`, `pass 34`, `fail 0`
- `git diff --check` - PASS

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Known Stubs

None.

## Next Phase Readiness

Plan 17-03 can add the Sealos route-local QA checklist and refine cross-file coherence across all operational Sealos pack files.

## Self-Check: PASSED

- Created files exist on disk.
- Task commits `3457732`, `c83f411`, and `21fa397` exist in git history.
- Verification commands passed after implementation.

---
*Phase: 17-sealos-seal-canonical-pack*
*Completed: 2026-06-13*
