---
phase: 36
status: complete
created: 2026-06-16T12:50:00Z
research_subagent: attempted
research_subagent_result: timed_out_without_artifact
---

# Phase 36 Research

## Current Gap Summary

OpenClaw is wired through route metadata, the route-local pack, release checklist sections, and `SKILL.md` runtime behavior. Public user-facing docs and discovery metadata still present the previous five-route public surface.

## Surface Gaps

| Surface | Current Gap | Required Phase 36 Update |
|---------|-------------|--------------------------|
| `README.md` | Route inventory, outputs, route descriptions, canonical packs, quick examples, workflow, route reference, example gallery text, and public docs checklist mention Xiaohei, Littlebox, Tom, Ferris, and Seal. | Add OpenClaw route, output path, escaped marker, canonical pack, source/license authority, public sample gate, and mixed-IP workflow wording. |
| `examples/prompts.md` | Canonical prompts, OpenClaw route smoke, mixed-IP prompts, maintainer smoke prompts, and route notes omit OpenClaw. | Add OpenClaw planning, generation, edit, route smoke, and mixed-IP prompt groups with `assets/<article-slug>-openclaw/`. |
| `NOTICE.md` | Attribution sections stop at Seal. | Add OpenClaw source/license attribution and public sample gate. |
| `RELEASE_CHECKLIST.md` | OpenClaw core release gate exists, while route smoke, attribution review, installable package boundary, and public docs/path marker sections still list five routes. | Add OpenClaw to route smoke, attribution review, package boundary, public docs/path markers, and update final OpenClaw release review to Phase 37 evidence. |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Display metadata names Xiaohei, Littlebox, Tom, Ferris, and Seal. | Add OpenClaw to display name, short description, and default prompt. |

## Source/License Wording

Use:

- `source-reviewed`
- `ian-xiaohei-illustrations/references/ips/openclaw/source.md`
- official OpenClaw repository `https://github.com/openclaw/openclaw`
- `MIT License`
- `Copyright (c) 2026 OpenClaw Foundation`
- uploaded-logo authority
- public rendered samples require `RELEASE_CHECKLIST.md` approval

## Output Path Wording

Use both:

- `assets/<article-slug>-openclaw/`
- `assets/&lt;article-slug&gt;-openclaw/`

## Language-Scan Risk

OpenClaw Chinese aliases are approved in routing contexts. Broad prose should use English route names and point to `references/routing.md` for full aliases. Prompt smoke fixtures can include the route aliases when needed for compatibility coverage.

## Verification Commands

```bash
rg -n 'OpenClaw|openclaw|references/ips/openclaw|assets/<article-slug>-openclaw|assets/&lt;article-slug&gt;-openclaw' README.md examples/prompts.md NOTICE.md RELEASE_CHECKLIST.md ian-xiaohei-illustrations/agents/openai.yaml
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```
