# Phase 43: Cai Xukun Source and Route Contract - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md; this log preserves the alternatives considered.

**Date:** 2026-06-18
**Phase:** 43-Cai Xukun Source and Route Contract
**Areas discussed:** Route Contract, Uploaded Image Authority, Public-Figure Likeness Boundary, Existing Route Compatibility

---

## Route Contract

| Option | Description | Selected |
|--------|-------------|----------|
| Append one explicit `caixukun` route after Go Gopher | Preserve current route order and add the v1.9 route as a narrow route/source slice. | yes |
| Reorder route table around public-figure route priority | Adds churn across existing route-order assumptions. | |
| Create a generic custom-IP route | Future manifest/import scope. | |

**User's choice:** Auto-selected the narrow explicit `caixukun` route contract.
**Notes:** The route uses id `caixukun`, display name `Cai Xukun`, aliases `蔡徐坤`, `Cai Xukun`, `caixukun`, and `cxk`, `default=false`, output suffix `caixukun`, output path `assets/<article-slug>-caixukun/`, escaped marker `assets/&lt;article-slug&gt;-caixukun/`, source record `references/ips/caixukun/source.md`, and status `gated-public-figure`.

---

## Uploaded Image Authority

| Option | Description | Selected |
|--------|-------------|----------|
| Record the two uploaded file paths as source authority | Matches v1.9 requirements and keeps Phase 43 documentation-first. | yes |
| Copy the uploaded files into the repository now | Adds asset movement and hash policy beyond Phase 43. | |
| Use generic public Cai Xukun image references | Conflicts with the uploaded-reference authority contract. | |

**User's choice:** Auto-selected route-local source record authority.
**Notes:** Source authority paths are `/Users/longnv/Downloads/Generated image 1 (9).png` and `/Users/longnv/Downloads/20260618-013721.jpeg`. The fixed marker list is yellow duck-like rounded mascot body, silver layered idol hair, oversized white eyes, red cheek circles, orange beak, black high-collar top, white straps, white lower outfit, and compact black or gray boots.

---

## Public-Figure Likeness Boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Gate the route as stylized mascot-only public-figure output | Matches v1.9 requirements and creates a clear release-review boundary. | yes |
| Treat it like a normal mascot source-reviewed route | Omits the public-figure likeness risk vocabulary. | |
| Treat it like a realistic portrait route | Outside the product's article-illustration route purpose. | |

**User's choice:** Auto-selected `gated-public-figure` with stylized mascot-only wording.
**Notes:** The source record and routing metadata must preserve these boundary phrases: realistic-person portrait output, official endorsement, affiliation, impersonation, campaign, celebrity advertising, fandom promotion, public sample release review, and source-image context.

---

## Existing Route Compatibility

| Option | Description | Selected |
|--------|-------------|----------|
| Keep Phase 43 limited to `routing.md` and `caixukun/source.md` | Preserves existing route behavior and leaves full pack/docs/validation to later phases. | yes |
| Update every public/runtime surface immediately | Collapses Phases 44-47 into Phase 43. | |
| Expand validator/test expectations immediately | Makes Phase 47 redundant and increases blast radius. | |

**User's choice:** Auto-selected narrow Phase 43 compatibility scope.
**Notes:** Xiaohei remains the omitted-IP default. Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher behavior remains stable. Validator and Node test expansion belongs to Phase 47.

## the agent's Discretion

- Exact section order inside `source.md`.
- Exact placement of the Cai Xukun metadata block inside `routing.md`.
- Markdown wording that preserves all required marker strings and current documentation style.

## Deferred Ideas

- Full Cai Xukun pack files and expanded `required_references`.
- Runtime controller integration and mixed-IP delivery reporting.
- Public docs, examples, metadata, NOTICE, release checklist, and localized README parity.
- Validator, Node fixtures, leakage scans, public sample gates, generated sample gates, and final release evidence.
