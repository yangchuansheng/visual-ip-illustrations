# Phase 25: Language Policy and Residual Scan Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T15:33:54Z
**Phase:** 25-language-policy-and-residual-scan-contract
**Areas discussed:** Policy authority, multilingual exceptions, residual scan contract, compatibility surfaces, validation shape

---

## Policy Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Root `LANGUAGE_POLICY.md` | Create a single repository-level language policy that later docs and validators reference. | ✓ |
| Inline policy in README | Put the policy in README only. | |
| Validator-only policy | Encode language rules only in validation code. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path is root `LANGUAGE_POLICY.md`.
**Notes:** A root policy is easiest for maintainers, downstream agents, and release reviewers to find.

---

## Multilingual Exceptions

| Option | Description | Selected |
|--------|-------------|----------|
| Narrow allowlist | Category, path scope, exact token or anchored pattern, and rationale. | ✓ |
| Broad file exemptions | Exempt whole files that contain required Chinese tokens. | |
| Manual review only | Leave exception handling to release review. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path is a narrow allowlist.
**Notes:** Narrow exceptions preserve Chinese compatibility surfaces while giving the residual scan a deterministic contract.

---

## Residual Scan Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Existing Node validator | Extend `scripts/validate-skill-package.mjs` with language checks. | ✓ |
| Separate script | Add a standalone scan command outside the validator. | |
| Documentation-only scan | Document grep commands without validator integration. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path is extending the existing dependency-free Node validator.
**Notes:** The validator already owns deterministic local release checks and Node fixture coverage.

---

## Compatibility Surfaces

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve all route contracts | Keep invocations, route ids, aliases, outputs, authority files, QA gates, and visible-label behavior stable. | ✓ |
| Translate aliases | Convert aliases and smoke fixtures to English. | |
| Simplify route docs | Reduce route metadata during migration. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path preserves all route contracts.
**Notes:** v1.5 is a language-default migration, so route behavior remains stable.

---

## Validation Shape

| Option | Description | Selected |
|--------|-------------|----------|
| Contract first, full hardening later | Phase 25 defines policy and scan contract; Phase 28 expands full hard-fail coverage. | ✓ |
| Full hardening now | Build the final language validator before docs migrate. | |
| Defer all validation | Wait until Phase 28 to define the scan behavior. | |

**User's choice:** The user delegated interaction choices to the agent. The selected path is contract first, full hardening later.
**Notes:** Current docs intentionally still contain Chinese prose; Phase 26 and Phase 27 own broad migration.

---

## the agent's Discretion

- Choose exact validator helper names and internal data shapes.
- Decide whether the Phase 25 scan reports current stale prose as contract evidence while the hard-fail gate matures in Phase 28.

## Deferred Ideas

- Machine-readable visual IP manifest.
- Asset manifest and automated visual regression.
- Additional IP routes.
- Hosted app, UI, API, database, or build runtime.
- External legal or trademark research beyond existing route records.
