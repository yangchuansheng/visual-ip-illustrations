---
phase: 11-ferris-source-and-route-contract
reviewed: 2026-06-13T07:13:53Z
depth: standard
files_reviewed: 8
files_reviewed_list:
  - ian-xiaohei-illustrations/references/ips/ferris/source.md
  - ian-xiaohei-illustrations/references/routing.md
  - NOTICE.md
  - README.md
  - examples/prompts.md
  - RELEASE_CHECKLIST.md
  - scripts/validate-skill-package.mjs
  - scripts/validate-skill-package.test.mjs
findings:
  critical: 2
  warning: 0
  info: 0
  total: 2
status: issues_found
---

# Phase 11: Code Review Report

**Reviewed:** 2026-06-13T07:13:53Z
**Depth:** standard
**Files Reviewed:** 8
**Status:** issues_found

## Summary

Reviewed the Phase 11 Ferris source, routing, public documentation, release gate, validator, and validator tests from `a53bd00` through current HEAD. The source and NOTICE wording stay bounded to source attribution plus Rust trademark and endorsement review, and the existing Xiaohei default, Littlebox active route, and Tom gated route contracts are preserved. The actionable defects are both validator-gate issues: the Ferris public wording success criterion is checked too loosely, and the public sample approval parser accepts placeholder dates as completed approval records.

Verification run during review:

- `node scripts/validate-skill-package.mjs` passed with `Summary: total=53 passed=53 failed=0 skipped=0`.
- `node --test scripts/validate-skill-package.test.mjs` passed with `tests 20`, `pass 20`, `fail 0`.

## Critical Issues

### CR-01: Ferris public wording check can pass with README coverage removed

**File:** `scripts/validate-skill-package.mjs:1121`
**Issue:** `DOC-FERRIS-001` validates the required Phase 11 Ferris phrase against one concatenated string from `README.md`, `examples/prompts.md`, `routing.md`, and `RELEASE_CHECKLIST.md`. Phase 11 decision D-15 requires the exact phrase in each of those four files. Removing the phrase from `README.md` leaves the validator green because the phrase remains in the other three files, so the gate can miss a public-doc regression.
**Fix:**
```js
defineCheck("DOC-FERRIS-001", "public docs expose Ferris source-reviewed route markers", () => {
  const requiredPhrase =
    "Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.";
  for (const relativePath of ["README.md", "examples/prompts.md", ROUTING_FILE, "RELEASE_CHECKLIST.md"]) {
    assertIncludes(requireFile(relativePath), relativePath, [requiredPhrase], "Ferris D-15 route-status phrase");
  }
  assertIncludes(combinedText(["README.md", "examples/prompts.md", ROUTING_FILE, "RELEASE_CHECKLIST.md"]), "Ferris docs", [
    "Ferris",
    "Rust mascot",
    "Rust crab",
    "Rustacean",
    "Rust 吉祥物",
    "Rust 螃蟹",
    "ian-xiaohei-illustrations/references/ips/ferris/source.md",
    "assets/<article-slug>-ferris/",
    "assets/&lt;article-slug&gt;-ferris/",
  ], "Ferris aliases, source record path, and output path tokens");
});
```

Add a fixture test that removes the phrase from only `README.md` and expects `[FAIL] DOC-FERRIS-001`.

### CR-02: Public sample approval accepts placeholder dates

**File:** `scripts/validate-skill-package.mjs:277`
**Issue:** `parsePublicRouteSampleApproval` treats any non-empty, non-literal `date` value as a completed review date. A release checklist line with `[x] ... APPROVED / Jane Reviewer / TBD / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes.` is accepted as complete, allowing Ferris or Tom rendered public assets into gated example directories with no recorded review date.
**Fix:**
```js
const datePresent =
  /^\d{4}-\d{2}-\d{2}$/.test(reviewDate) &&
  !Number.isNaN(Date.parse(`${reviewDate}T00:00:00Z`));
```

Add parser and fixture assertions for `TBD`, `pending`, and blank dates so `BOUNDARY-TOM-IMG-001` and `BOUNDARY-FERRIS-IMG-001` require an actual review date before public sample assets pass the gate.

---

_Reviewed: 2026-06-13T07:13:53Z_
_Reviewer: the agent (gsd-code-reviewer)_
_Depth: standard_
