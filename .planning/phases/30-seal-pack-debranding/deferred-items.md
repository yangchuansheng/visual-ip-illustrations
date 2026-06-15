# Phase 30 Deferred Items

## Phase 32 Validator Boundary

- **Found during:** 30-01 plan verification.
- **Issue:** `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` still expect the pre-debranding Sealos/brand-owned Seal markers in route-local Seal files.
- **Reason deferred:** Phase 32 owns validator check-id cleanup and stale leakage fixture hardening.
- **Current impact:** 30-01 focused route-local scans pass, while the global validator reports 94/98 and Node reports 51/66 because stale validator expectations remain.
- **30-02 update:** After prompt and QA debranding, focused 30-02 route-local scans pass, while the global validator reports 92/98 and Node reports 51/66 because stale Sealos prompt and QA expectations remain.
- **Next owner:** Phase 32.
