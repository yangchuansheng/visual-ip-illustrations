# Phase 22: Skill Package and Runtime Metadata Rebrand - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-14T16:45:00+08:00
**Phase:** 22-skill-package-and-runtime-metadata-rebrand
**Areas discussed:** Skill id/frontmatter strategy, Agent metadata copy, Legacy alias/runtime compatibility, Package path migration boundary, Route stability fence

---

## Skill Id/Frontmatter Strategy

| Option | Description | Selected |
|--------|-------------|----------|
| Canonical `visual-ip-illustrations` | Change skill frontmatter name to `visual-ip-illustrations` so `$visual-ip-illustrations` becomes the canonical runtime identity. | ✓ |
| Keep `ian-xiaohei-illustrations` primary | Preserve the existing skill id as primary during v1.4 and mention Visual IP Illustrations only in prose. | |
| Metadata-only rebrand | Change display text while leaving runtime skill id untouched. | |

**User's choice:** Autonomous selection from supplied Phase 22 objective: canonical skill frontmatter name should become `visual-ip-illustrations`.
**Notes:** Selected option exposes `$visual-ip-illustrations` while preserving `$ian-xiaohei-illustrations` as a v1.4 compatibility alias.

---

## Agent Metadata Copy

| Option | Description | Selected |
|--------|-------------|----------|
| Lead with Visual IP Illustrations | Display name starts with `Visual IP Illustrations`, description presents a multi-IP article illustration package, and default prompt uses `$visual-ip-illustrations`. | ✓ |
| Keep route list as title | Keep a route-enumeration display name such as Xiaohei / Littlebox / Tom / Ferris / Sealos Seal. | |
| Minimal alias note only | Add canonical id mention to existing metadata while leaving old display hierarchy intact. | |

**User's choice:** Autonomous selection from supplied Phase 22 objective: agent metadata display should lead with `Visual IP Illustrations`.
**Notes:** Metadata must preserve Xiaohei as omitted-IP default and present Littlebox, Tom, Ferris, and Sealos Seal as explicit routes.

---

## Legacy Alias/Runtime Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Document legacy alias during v1.4 | Runtime and metadata surfaces mention `$ian-xiaohei-illustrations` as the v1.4 compatibility alias. | ✓ |
| Drop legacy alias from runtime copy | Runtime surfaces only mention the canonical id. | |
| Keep legacy alias as primary | Preserve legacy invocation as the first instruction and introduce canonical invocation later. | |

**User's choice:** Autonomous selection from supplied Phase 22 objective: legacy `$ian-xiaohei-illustrations` must be documented in runtime/metadata surfaces as compatibility alias during v1.4.
**Notes:** This protects existing prompts and local installs while canonical discovery moves to `$visual-ip-illustrations`.

---

## Package Path Migration Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Local conservative migration guidance | Canonical install slug/path is `visual-ip-illustrations`; legacy `ian-xiaohei-illustrations` remains a compatibility source during v1.4. | ✓ |
| Immediate directory replacement | Rename or remove the legacy package directory in Phase 22. | |
| Defer all package-path wording | Leave path migration guidance fully to Phase 23 public docs. | |

**User's choice:** Autonomous selection from supplied Phase 22 objective: package-path migration guidance should be local and conservative.
**Notes:** Phase 22 can add runtime/package metadata references. Broad README install docs remain Phase 23. If a canonical package directory is introduced, legacy package behavior stays accessible or a safe copy/migration path is documented.

---

## Route Stability Fence

| Option | Description | Selected |
|--------|-------------|----------|
| Freeze shipped route contracts | Keep existing route ids, aliases, statuses, required references, output suffixes, output directories, generated asset paths, visual IP packs, and rights/source/brand boundaries stable. | ✓ |
| Rename route ids with product rebrand | Update route ids or output suffixes to match the new package identity. | |
| Touch only default route | Rebrand Xiaohei default behavior while leaving explicit routes unchanged. | |

**User's choice:** Autonomous selection from supplied Phase 22 objective: existing route ids, aliases, statuses, required references, and output suffixes remain stable.
**Notes:** This fence covers Xiaohei, Littlebox, Tom, Ferris, and Sealos Seal. Public docs owned by Phase 23 remain outside this phase except for narrow runtime/package metadata references.

---

## the agent's Discretion

- Auto mode selected the recommended conservative option for every gray area.
- The discussion log records autonomous selection because the user requested the equivalent of `$gsd-discuss-phase 22 --auto`.
- No interactive follow-up was needed because the prompt supplied all Phase 22 decisions and boundaries.

## Deferred Ideas

- Full GitHub repository rename to `visual-ip-illustrations`.
- v2 installer or selector for selected IP variant installation.
- Machine-readable visual-IP manifest for future mascot/source/brand management.
- Phase 23 public docs rebrand and Phase 24 validator/test expansion.
