---
phase: 37
status: discussed
created: 2026-06-16T12:15:18Z
subagent: attempted
subagent_id: 019ed05a-cdbb-77b0-a081-394f4a881fc1
---

# Phase 37 Discussion Log

> Audit trail only. Decisions are captured in `37-CONTEXT.md`.

## Areas Discussed

### Validator Coverage Shape

| Option | Description | Selected |
|--------|-------------|----------|
| Add shared generic route checks only | Lowest change volume, weaker drift reporting. | |
| Add explicit OpenClaw parity checks | Clear failure IDs for docs, metadata, smoke, NOTICE, release, and evidence drift. | yes |
| Rework the validator around a route manifest | Larger future architecture move. | |

Decision: add explicit OpenClaw parity checks now and keep route-manifest generation as future work.

### Mixed-IP Validation

| Option | Description | Selected |
|--------|-------------|----------|
| Keep the historical five-route Seal anchor | Preserves current tests while leaving OpenClaw mixed-IP parity indirect. | |
| Upgrade mixed-IP checks to six-route OpenClaw parity | Matches the current runtime and prompt contract. | yes |
| Split every route into separate mixed-IP checks | Stronger diagnostics with more check IDs. | |

Decision: upgrade mixed-IP validation to six-route parity and update fixtures in the same change set.

### Public Sample Gates

| Option | Description | Selected |
|--------|-------------|----------|
| Treat Phase 36 release checklist wording as enough | Leaves asset gate behavior indirect. | |
| Keep parser gates and add final evidence checks | Preserves strict public asset blocking and adds release evidence. | yes |
| Approve public OpenClaw assets during Phase 37 | Requires rendered assets and reviewer approval. | |

Decision: keep OpenClaw public rendered samples gated and record pending gate status in evidence.

### Release Evidence

| Option | Description | Selected |
|--------|-------------|----------|
| Use verification file only | Keeps artifacts fewer. | |
| Add a dedicated Phase 37 evidence artifact | Gives maintainers a stable release-readiness record. | yes |
| Store raw command logs only | Harder to scan. | |

Decision: create a dedicated evidence artifact with exact pass counts and smoke/gate outcomes.

## the agent's Discretion

The user directed autonomous decisions for interactive choices. The implementation should choose the smallest validation surface that makes VAL-01 through VAL-05 concretely true while preserving existing route behavior.

## Deferred Ideas

- Route manifest generation for all route metadata and validator expectations.
- Public OpenClaw rendered sample generation and approval after release review.
