# Phase 3: Littlebox Vertical Slice - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-12
**Phase:** 3-Littlebox Vertical Slice
**Areas discussed:** Route metadata, canonical pack shape, Littlebox rules, mixed-IP behavior, attribution, prior-phase compatibility, scope boundaries

---

## Route Metadata

| Option | Description | Selected |
|--------|-------------|----------|
| Activate the existing `littlebox` row | Keep Phase 1's placeholder route id and complete aliases, references, output suffix, attribution, and status. | ✓ |
| Create a separate `5km-littlebox` route id | Mirrors the source skill name more literally but creates a longer route id and diverges from Phase 1 placeholder metadata. | |
| Keep Littlebox route as placeholder in Phase 3 | Defers executable routing and fails the Phase 3 vertical-slice goal. | |

**User's choice:** The task explicitly required deciding Littlebox route id, display name, aliases, output suffix/path, and status.
**Notes:** Locked as `id: littlebox`, `display_name: Littlebox`, aliases `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`, `output_suffix: littlebox`, path `assets/<article-slug>-littlebox/`, and `status: active` after implementation.

---

## Canonical Pack Shape

| Option | Description | Selected |
|--------|-------------|----------|
| Mirror Xiaohei pack and add Littlebox-only language rules | Use `references/ips/littlebox/` with `index.md`, style, IP, composition, language, prompt, and QA files. | ✓ |
| Copy the source file names exactly | Keeps source terms like `visual-language.md` and `quality-gate.md` but diverges from Phase 2 canonical naming. | |
| Collapse Littlebox into one large reference file | Faster to create but weakens IP isolation and future validation. | |

**User's choice:** The task explicitly required deciding canonical pack path and file split under `references/ips/littlebox/`.
**Notes:** Locked as `ian-xiaohei-illustrations/references/ips/littlebox/` with six operational references plus `index.md`. Source `examples.md` remains evidence/smoke material rather than a required Phase 3 operational reference.

---

## Littlebox Rules

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve source Littlebox hard rules | Adapt closed-only identity, pale backgrounds, marker style, planning fields, prompt language, label handling, QA, and output naming. | ✓ |
| Loosen Littlebox to match Xiaohei's visual system | Simplifies shared behavior but loses Littlebox's distinct IP contract. | |
| Import only a minimal alias and prompt | Makes route selectable but leaves QA and planning behavior incomplete. | |

**User's choice:** The task explicitly required deciding character identity rules, prompt rules, composition planning fields, QA gates, and output naming.
**Notes:** Source inspection at `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` confirmed closed-only box anatomy, exactly one amber jagged tape strip, at most two side-seam twig arms, pale sky-blue/lavender backgrounds, English image prompts, user-language visible labels, and output path `assets/<article-slug>-littlebox/`.

---

## Mixed-IP Behavior

| Option | Description | Selected |
|--------|-------------|----------|
| Separate variant groups per IP | Share the same core idea while loading each IP's own references, action model, QA, and output path. | ✓ |
| Blend Xiaohei and Littlebox into one image | Creates hybrid character/rule leakage and breaks both IP contracts. | |
| Let mixed-IP requests pick one IP automatically | Avoids complexity but fails the Phase 3 mixed-IP requirement. | |

**User's choice:** The task explicitly required deciding mixed-IP behavior with Xiaohei variant groups.
**Notes:** Locked as separate `xiaohei` and `littlebox` variant groups. Xiaohei retains `assets/<article-slug>-illustrations/`; Littlebox uses `assets/<article-slug>-littlebox/`.

---

## Attribution

| Option | Description | Selected |
|--------|-------------|----------|
| Add explicit Littlebox attribution to `NOTICE.md` | Record author, source repo, MIT context, and inspected commit. | ✓ |
| Rely only on `LICENSE` | Preserves repository license but loses source-specific derived-material attribution. | |
| Vendor full source history | Strong provenance but outside v1 scope and unnecessary for attribution. | |

**User's choice:** The task explicitly required deciding attribution and NOTICE requirements, including source repo and inspected commit.
**Notes:** Remote read-only inspection found HEAD `37cd93ee516da0324577b7bbc8ca3146e5c8d8d7` (`37cd93e`), MIT `Copyright (c) 2026 okooo5km`, source repository `https://github.com/okooo5km/5km-littlebox-illustrations`, and source NOTICE credit guidance.

---

## Prior-Phase Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Preserve Phase 1 and Phase 2 contracts | Keep route-first workflow, Xiaohei default, canonical Xiaohei pack, legacy root paths, and route metadata shape. | ✓ |
| Rewrite around a new multi-IP schema | Could improve elegance but would risk Xiaohei compatibility during the vertical slice. | |
| Add Littlebox as separate standalone skill | Preserves source separation but misses this project's multi-IP skill objective. | |

**User's choice:** The task explicitly required deciding how Phase 3 stays compatible with Phase 1 routing and Phase 2 Xiaohei canonicalization.
**Notes:** Locked as additive activation of the existing Littlebox route and sibling canonical pack under `references/ips/littlebox/`.

---

## Scope Boundaries

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 3 to Littlebox vertical slice | Implement route activation, pack, prompt, QA, output behavior, mixed-IP guidance, and NOTICE attribution. | ✓ |
| Pull validation into Phase 3 | Adds automated checks early but overlaps with Phase 4's explicit validation-hardening phase. | |
| Pull broad docs/release work into Phase 3 | Improves public docs sooner but overlaps with Phase 5's explicit docs and release phase. | |

**User's choice:** The task explicitly required deciding scope boundaries left to Phase 4 validation and Phase 5 docs/release.
**Notes:** Locked Phase 4 for validation command and smoke checks. Locked Phase 5 for public README/examples refresh, agent metadata, release checklist, and broad copyable examples.

---

## the agent's Discretion

- Adapt exact Littlebox wording from the source repository into concise project-local Markdown while preserving hard rules and attribution.
- Choose exact Chinese phrasing for user-facing skill docs during implementation.
- Add minimal docs wording in Phase 3 only where needed to avoid stale placeholder behavior after route activation.

## Deferred Ideas

- Phase 4 validation command and smoke prompt coverage.
- Phase 5 public documentation, examples, metadata, and release checklist.
- v2 asset manifest, visual regression, third-IP schema, and custom IP imports.
