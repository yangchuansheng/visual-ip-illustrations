# Phase 26: Skill and Reference Content Migration - Research

**Researched:** 2026-06-14
**Status:** Ready for planning

## Summary

Phase 26 should migrate runtime-facing skill instructions to English-default prose across `SKILL.md`, `references/routing.md`, shared Xiaohei compatibility references, route-local IP packs, and `agents/openai.yaml`, preserving route behavior exactly. [VERIFIED: `.planning/phases/26-skill-and-reference-content-migration/26-CONTEXT.md`] The stable compatibility contract is: canonical `$visual-ip-illustrations`, legacy `$ian-xiaohei-illustrations`, route ids `xiaohei`, `littlebox`, `tom`, `ferris`, `sealos`, Xiaohei omitted-IP default, existing aliases, output suffixes, output paths, required references, source/rights/brand records, QA gates, and user-language visible-label behavior. [VERIFIED: `LANGUAGE_POLICY.md`, `ian-xiaohei-illustrations/references/routing.md`]

Recommended implementation: translate prose in place, preserve route tables and marker strings mechanically, and validate after each surface group. [VERIFIED: `scripts/validate-skill-package.mjs`] Start with controller surfaces, then routing/shared references, then route-local packs, with Xiaohei handled as the highest-risk route because its canonical and legacy compatibility files still contain the largest Chinese prose surface and required Chinese placeholders. [VERIFIED: local Han-character scan, `ian-xiaohei-illustrations/references/ips/xiaohei/prompt-template.md`]

## Requirements Coverage

| Requirement | Implementation Support | Validation |
|---|---|---|
| SKILL-01 | Translate `ian-xiaohei-illustrations/SKILL.md` frontmatter description, positioning, reference-loading guidance, workflow, planning, generation, QA, and delivery prose to English-default. Preserve `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, Xiaohei default, route selection aliases, output paths, and host `image_gen` boundary. [VERIFIED: `ian-xiaohei-illustrations/SKILL.md`, `LANGUAGE_POLICY.md`] | `SKILL-FM-001`, `SKILL-ROUTE-001`, `SKILL-REFS-001`, `SKILL-OUTPUT-001`, `SKILL-GEN-001`, `REBRAND-CANON-*`, `REBRAND-COMPAT-*`. [VERIFIED: `scripts/validate-skill-package.mjs`] |
| SKILL-02 | Translate `references/routing.md` and shared/root references to English-default. Preserve the `IP Routes` table cell values, aliases, defaults, required references, statuses, output suffixes, attribution contexts, raw paths, escaped paths, and mixed-IP separate route group wording. [VERIFIED: `ian-xiaohei-illustrations/references/routing.md`] | `ROUTE-TABLE-001`, `ROUTE-XH-001`, `ROUTE-LB-001`, `ROUTE-TOM-001`, `ROUTE-FERRIS-001`, `ROUTE-SEALOS-*`, `ROUTE-DEFAULT-001`, `ROUTE-REFS-001`, `ROUTE-PATHS-001`, `ROUTE-MIXED-001`. [VERIFIED: `scripts/validate-skill-package.mjs`] |
| SKILL-03 | Translate route-local prose for Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal. Preserve each route's prompt fields, QA gates, source/rights/brand notes, visible-label rules, output paths, and route-local isolation. [VERIFIED: `ian-xiaohei-illustrations/references/ips/*`] | `REFS-*`, `PROMPT-*`, `IP-*`, `QA-*`, `RIGHTS-TOM-001`, `SOURCE-FERRIS-001`, `SOURCE-SEALOS-001`, `LOGO-SEALOS-001`, `BOUNDARY-*-LEAK-001`. [VERIFIED: `scripts/validate-skill-package.mjs`] |
| SKILL-04 | Translate `agents/openai.yaml` `short_description` and `default_prompt` to English-default. Preserve `display_name`, `allow_implicit_invocation: true`, omitted-IP default Xiaohei, and explicit Littlebox, Tom, Ferris, Sealos Seal route language. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`] | `AGENT-SHAPE-001`, `AGENT-TOM-001`, `AGENT-SEALOS-001`, plus rebrand and route smoke checks. [VERIFIED: `scripts/validate-skill-package.mjs`] |

## File-Level Findings

`ian-xiaohei-illustrations/SKILL.md` is the main runtime controller and contains mixed Chinese/English prose across frontmatter, positioning, reference loading, workflow, route selection, shot-list fields, generation, QA, edit, and delivery sections. [VERIFIED: `ian-xiaohei-illustrations/SKILL.md`] Preserve exact route aliases, route ids, status strings, source pointers, output paths, required reference paths, and Sealos no-logo markers during translation. [VERIFIED: `LANGUAGE_POLICY.md`, `26-CONTEXT.md`]

`ian-xiaohei-illustrations/references/routing.md` is parser-sensitive because the validator reads the `IP Routes` table and derives required references and language scan targets from route metadata. [VERIFIED: `scripts/validate-skill-package.mjs`, `ian-xiaohei-illustrations/references/routing.md`] Treat table values as locked data and translate surrounding headings/prose plus output/delivery prose. [VERIFIED: `26-CONTEXT.md`]

`ian-xiaohei-illustrations/agents/openai.yaml` has Chinese prose in `short_description` and `default_prompt`; the shape is simple and should be migrated in one small edit. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`] Keep `allow_implicit_invocation: true`. [VERIFIED: `ian-xiaohei-illustrations/agents/openai.yaml`]

Xiaohei canonical references under `references/ips/xiaohei/` and root compatibility references contain the largest Chinese prose surface. [VERIFIED: local Han-character scan] Root compatibility files include copied canonical bodies after "Current Xiaohei Contract," and `LEGACY-XH-002` currently expects root compatibility bodies to match canonical pack files. [VERIFIED: `ian-xiaohei-illustrations/references/*.md`, `scripts/validate-skill-package.mjs`] Update canonical Xiaohei files and root compatibility files together.

Littlebox route files are already mostly English-default. [VERIFIED: `ian-xiaohei-illustrations/references/ips/littlebox/*`] Preserve the three intentional visible-label examples `"原始材料"`, `"判断"`, and `"输出"` because the language allowlist classifies them as user-language visible labels. [VERIFIED: `scripts/validate-skill-package.mjs`, `ian-xiaohei-illustrations/references/ips/littlebox/language-and-labels.md`]

Tom, Ferris, and Sealos packs are already largely English-default and marker-heavy. [VERIFIED: `ian-xiaohei-illustrations/references/ips/tom/*`, `ian-xiaohei-illustrations/references/ips/ferris/*`, `ian-xiaohei-illustrations/references/ips/sealos/*`] Preserve Tom `gated-authorized` and `rights.md`, Ferris `source-reviewed` and `source.md`, and Sealos `brand-owned`, `uploaded-image-canonical`, `uploaded-image-locked`, `source.md`, and logo-free marker strings. [VERIFIED: route-local authority files]

## Migration Strategy

1. Migrate controller and metadata first: `SKILL.md`, `references/routing.md`, and `agents/openai.yaml`. Preserve all route metadata tokens, table cells, aliases, paths, source pointers, and status strings exactly. [VERIFIED: `26-CONTEXT.md`, `scripts/validate-skill-package.mjs`]

2. Migrate Xiaohei canonical files and root compatibility files as one unit: `references/ips/xiaohei/{style-dna,xiaohei-ip,composition-patterns,prompt-template,qa-checklist}.md` plus root `references/{style-dna,xiaohei-ip,composition-patterns,prompt-template,qa-checklist}.md`. Preserve required prompt placeholders and Chinese visible-label placeholders exactly. [VERIFIED: `LANGUAGE_POLICY.md`, `PROMPT-XH-001`, `LEGACY-XH-002`]

3. Migrate Littlebox route-local residual prose with a light touch. Preserve English prompt language, user-language planning/delivery behavior, quoted visible-label examples, background balance rule, closed-only identity, amber tape rule, and output path. [VERIFIED: `references/ips/littlebox/*`]

4. Migrate Tom route-local files by preserving protected-character wording, rights-status notes, failure category names, and delivery path markers. [VERIFIED: `references/ips/tom/*`]

5. Migrate Ferris route-local files by preserving source/trademark wording, Rust trademark boundary language, failure category names, and delivery path markers. [VERIFIED: `references/ips/ferris/*`]

6. Migrate Sealos route-local files by preserving brand/canonical-image wording, uploaded-image markers, drift boundary markers, no-logo markers, failure category names, and delivery path markers. [VERIFIED: `references/ips/sealos/*`]

7. Keep README, examples, NOTICE, release checklist, final hard-fail language enforcement, and release evidence for Phases 27 and 28. [VERIFIED: `26-CONTEXT.md`, `.planning/ROADMAP.md`]

## Validation Strategy

Run after each migration group:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Current baseline is `Summary: total=93 passed=93 failed=0 skipped=0` and Node `tests 56`, `pass 56`, `fail 0`. [VERIFIED: command output]

Use the residual Chinese scan as a report-mode guide during Phase 26. [VERIFIED: `LANGUAGE_POLICY.md`, `26-CONTEXT.md`] Use `LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs` only as a scoped diagnostic because Phase 27 public docs may still contain stale Chinese prose. [VERIFIED: `26-CONTEXT.md`, `LANGUAGE_POLICY.md`]

Before closing Phase 26, run a targeted Han-character scan over Phase 26 files and classify remaining findings into approved exceptions: route aliases, prompt placeholders, visible labels, attribution/source names, compatibility smoke fixtures, or intentional Chinese article illustration examples. [VERIFIED: `LANGUAGE_POLICY.md`, `scripts/validate-skill-package.mjs`]

## Risks

- Route table drift can break parser-derived route metadata, required reference resolution, output path checks, and language scan targets. [VERIFIED: `scripts/validate-skill-package.mjs`, `routing.md`]
- Xiaohei root compatibility drift can fail `LEGACY-XH-002` because root compatibility bodies currently mirror canonical Xiaohei pack bodies. [VERIFIED: `scripts/validate-skill-package.mjs`, root compatibility files]
- Over-editing route-local authority notes can weaken Tom rights, Ferris source/trademark, or Sealos brand/canonical-image boundaries. [VERIFIED: `references/ips/tom/rights.md`, `references/ips/ferris/source.md`, `references/ips/sealos/source.md`]
- Sealos logo-free contract has recent quick-task history and many validator markers, so any wording change around cap, hoodie, logo patches, logo-like marks, emblems, or text badges needs exact marker preservation. [VERIFIED: `.planning/STATE.md`, `references/ips/sealos/*`, `LOGO-SEALOS-001`]
- Full enforce-mode residual scan can fail on Phase 27-owned public docs during Phase 26. [VERIFIED: `26-CONTEXT.md`, `LANGUAGE_POLICY.md`]

## Open Questions (RESOLVED)

1. Should Phase 26 change validator enforcement behavior?
   - RESOLVED: Keep production validation in report mode and preserve enforce mode for controlled fixtures and diagnostics. [VERIFIED: `26-CONTEXT.md`, `LANGUAGE_POLICY.md`]

2. Should root Xiaohei compatibility files remain as full mirrored content or become pointer-only compatibility entries?
   - RESOLVED: Keep the existing mirrored-body pattern for Phase 26 because `LEGACY-XH-002` validates parity with canonical pack files. [VERIFIED: `scripts/validate-skill-package.mjs`, root compatibility files]

3. Should public docs be migrated opportunistically if touched by runtime references?
   - RESOLVED: Keep README, examples, NOTICE, and release checklist for Phase 27. Phase 26 updates only runtime-facing skill, routing, shared references, route-local packs, and metadata. [VERIFIED: `.planning/ROADMAP.md`, `26-CONTEXT.md`]

4. Should route-local packs be translated through editorial redesign?
   - RESOLVED: Use minimal prose translation and marker preservation. The validator and prior route decisions depend on exact route-local authority notes, failure names, output paths, and leakage boundaries. [VERIFIED: `26-CONTEXT.md`, `scripts/validate-skill-package.mjs`]
