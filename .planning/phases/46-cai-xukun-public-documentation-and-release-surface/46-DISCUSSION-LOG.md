# Phase 46: Cai Xukun Public Documentation and Release Surface - Discussion Log

> **Audit trail only.** Planning, research, and execution agents should use `46-CONTEXT.md`.

**Date:** 2026-06-18
**Phase:** 46-Cai Xukun Public Documentation and Release Surface
**Areas discussed:** Goal, requirements, scope, route contract, public boundaries, risks, validation

---

## Goal and Requirements

| Decision | Outcome |
|----------|---------|
| Phase goal | Public documentation and release surface for Cai Xukun. |
| Requirement set | DOC-01 through DOC-05 from `.planning/REQUIREMENTS.md`. |

## Scope

| Decision | Outcome |
|----------|---------|
| In scope | `README.md`; `readmes/README.*.md`; `examples/prompts.md`; `NOTICE.md`; `RELEASE_CHECKLIST.md`; `skills/visual-ip-illustrations/agents/openai.yaml`. |
| Phase 47 ownership | `scripts/validate-skill-package.mjs`; `scripts/validate-skill-package.test.mjs`; validator hardening; Node tests; final release evidence. |

## Route Contract

| Decision | Outcome |
|----------|---------|
| Route status | Add Cai Xukun as explicit `gated-public-figure` stylized mascot route. |
| Default behavior | Preserve Xiaohei as the omitted-IP default. |
| Existing routes | Preserve all existing routes. |
| Required aliases | `蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk`. |
| Source pointer | `skills/visual-ip-illustrations/references/ips/caixukun/source.md`. |
| Output path | `assets/<article-slug>-caixukun/`. |
| Escaped output marker | `assets/&lt;article-slug&gt;-caixukun/`. |

## Public Boundaries

| Decision | Outcome |
|----------|---------|
| Authority | Uploaded-image authority must be documented. |
| Likeness | Public-figure likeness boundary must be documented. |
| Source images | Source-image context boundary must be documented. |
| Public samples | Public sample review gate must be documented. |
| Route behavior | Route isolation must be documented. |
| Claims | Public docs must state no endorsement, affiliation, impersonation, campaign, advertising, or fandom-promotion claims. |
| Output type | Public docs must state stylized mascot-only output. |

## Risks

- README variant parity across localized files.
- Local path leakage in public docs.
- Overclaiming a public-figure relationship.
- Generated public sample approval.
- Validator drift deferred to Phase 47.

## Validation Strategy

- Grep all README variants and public surfaces for required Cai Xukun markers.
- Check absence of local source paths.
- Run `git diff --check`.

---

*Decisions are locked in `46-CONTEXT.md`.*
