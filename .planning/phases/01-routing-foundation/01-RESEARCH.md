# Phase 1: Routing Foundation - Research

**Researched:** 2026-06-12 [VERIFIED: repo grep]  
**Domain:** Documentation-first Codex Skill routing, Markdown workflow contracts, route metadata [CITED: .planning/ROADMAP.md]  
**Confidence:** HIGH [VERIFIED: repo grep]

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
## Implementation Decisions

### Route Selection
- **D-01:** Omitted visual IP selects the Xiaohei route by default.
- **D-02:** The Xiaohei route keeps the current `$ian-xiaohei-illustrations` behavior, required references, and `assets/<article-slug>-illustrations/` output path.
- **D-03:** Explicit Xiaohei aliases are `小黑`, `Xiaohei`, `Ian`, and `ian-xiaohei`; each alias selects the same Xiaohei route.

### Shared Workflow Boundary
- **D-04:** Shared workflow guidance covers article understanding, cognitive-anchor selection, shot-list planning, single-image generation loop, QA handoff, asset preservation, and delivery reporting.
- **D-05:** IP-specific style, character identity, prompt wording, and QA rules stay in IP references or later canonical IP packs.

### Route Metadata
- **D-06:** Route metadata uses a readable manifest or `SKILL.md` routing section with `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`.
- **D-07:** Phase 1 fully records Xiaohei metadata and reserves a planned Littlebox entry for later phases.

### User-Facing Routing
- **D-08:** Routing docs explain default Xiaohei behavior, explicit Xiaohei aliases, mixed-IP request handling, and output paths.
- **D-09:** Mixed-IP docs describe separate IP variant groups as the intended behavior; Littlebox execution lands in Phase 3.
- **D-10:** Delivery reporting includes selected IP, generated count, purpose per image, save path, and stability notes.

### Package Boundary
- **D-11:** The installable package remains the `ian-xiaohei-illustrations/` directory.
- **D-12:** Root `README.md` and `examples/prompts.md` carry user-visible routing examples; package behavior remains inside `ian-xiaohei-illustrations/`.

### the agent's Discretion
- The agent may choose whether route metadata lives in a new reference file or an explicit section in `SKILL.md`, provided the fields above are readable and Phase 4 can validate them.
- The agent may choose compact wording for public docs as long as Xiaohei defaulting and alias behavior stay clear.

### Deferred Ideas (OUT OF SCOPE)
## Deferred Ideas

- Phase 2: canonical Xiaohei IP pack and legacy reference compatibility.
- Phase 3: Littlebox aliases, references, output suffix, mixed-IP variant generation, and attribution.
- Phase 4: validation command for route metadata, aliases, references, prompt placeholders, output suffixes, docs links, and NOTICE markers.
- Phase 5: public docs, examples, metadata refresh, and release checklist.
</user_constraints>

## RESEARCH COMPLETE

Research is complete for Phase 1 Routing Foundation. Planner can create scoped implementation tasks for ROUT-01, ROUT-02, ROUT-05, IPCK-03, and IPCK-05. [CITED: .planning/REQUIREMENTS.md]

## Summary

Phase 1 should add deterministic route selection language and route metadata while keeping the current Xiaohei workflow as the default execution path. The existing `ian-xiaohei-illustrations/SKILL.md` already defines the Xiaohei default, progressive reference loading, workflow stages, QA loop, save path, and delivery reporting, so the safest change is to make routing explicit around the existing behavior. [CITED: ian-xiaohei-illustrations/SKILL.md]

The strongest implementation shape is a small routing reference file such as `ian-xiaohei-illustrations/references/routing.md`, registered from `SKILL.md`, plus compact public routing docs in `README.md` and `examples/prompts.md`. This keeps `SKILL.md` as the entrypoint and workflow controller while making route metadata readable for Phase 4 validation. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] [CITED: .planning/codebase/ARCHITECTURE.md]

**Primary recommendation:** Use `references/routing.md` for route metadata and selection rules, update `SKILL.md` to load it, and add minimal README/examples routing guidance for the Xiaohei default and aliases. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ROUT-01 | User can omit the visual IP and receive the existing Xiaohei behavior by default. | Existing `SKILL.md` already says Xiaohei is the default visual IP; Phase 1 should preserve that path and make it explicit in routing metadata. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| ROUT-02 | User can explicitly request Xiaohei using aliases such as `小黑`, `Xiaohei`, `Ian`, or `ian-xiaohei`. | CONTEXT locks the four aliases to the same Xiaohei route; route metadata should list them exactly. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
| ROUT-05 | User-facing routing docs explain the default IP, explicit aliases, mixed-IP behavior, and output paths. | README and `examples/prompts.md` are the current public docs and copyable prompt surfaces. [CITED: README.md] [CITED: examples/prompts.md] |
| IPCK-03 | The shared workflow contains article understanding, cognitive-anchor selection, generation loop, QA handoff, asset preservation, and delivery reporting without IP-specific style rules. | Existing `SKILL.md` has these workflow stages, but the prose is Xiaohei-specific; Phase 1 should separate shared orchestration language from IP style references. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| IPCK-05 | Each IP declares aliases, output suffix, required references, and attribution context in a readable manifest or routing section. | CONTEXT requires fields `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
</phase_requirements>

## Project Constraints (from AGENTS.md)

- Every user-facing reply begins with `爸爸`; repository user-facing docs may remain Chinese-first. [CITED: AGENTS.md]
- User-facing replies use Simplified Chinese; code, code comments, commit messages, and pull request text use English. [CITED: AGENTS.md]
- Work should start from original need, constraints, and desired outcome before applying templates. [CITED: AGENTS.md]
- File-changing work should use a GSD workflow; this task is already a `$gsd-plan-phase 1` research artifact task. [CITED: AGENTS.md]
- This turn is constrained to editing `.planning/phases/01-routing-foundation/01-RESEARCH.md`; source behavior files stay unchanged during research. [CITED: user request]

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|--------------|----------------|-----------|
| Route selection | Skill Entrypoint | Reference Policy Layer | The skill is instruction-driven and `SKILL.md` is the task router; a routing reference can hold structured metadata. [CITED: .planning/codebase/ARCHITECTURE.md] |
| Xiaohei default behavior | Skill Entrypoint | Xiaohei References | `SKILL.md` currently defines the default visual IP and loads `style-dna.md`, `xiaohei-ip.md`, composition, prompt, and QA references. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| Shared workflow boundary | Skill Entrypoint | Reference Policy Layer | Article understanding, shot-list planning, generation loop, QA handoff, saving, and reporting are orchestration concerns. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| User-facing routing docs | Public Documentation Layer | Prompt Examples | README explains usage and `examples/prompts.md` supplies copyable invocation prompts. [CITED: README.md] [CITED: examples/prompts.md] |
| Future validation readiness | Reference Policy Layer | Phase 4 Script Layer | Phase 4 will validate aliases, references, output suffixes, docs links, and attribution markers; structured routing metadata reduces parser fragility. [CITED: .planning/ROADMAP.md] |

## Standard Stack

### Core

| Library / File Type | Version | Purpose | Why Standard |
|---------------------|---------|---------|--------------|
| Markdown | N/A | Skill instructions, route metadata, workflow guidance, docs, examples | The repository is a Markdown-first Codex Skill package. [CITED: .planning/codebase/STACK.md] |
| YAML | N/A | Agent metadata in `ian-xiaohei-illustrations/agents/openai.yaml` | Existing Codex/OpenAI metadata uses YAML. [CITED: ian-xiaohei-illustrations/agents/openai.yaml] |
| Codex Skill directory | N/A | Installable package under `ian-xiaohei-illustrations/` | README documents copying this subdirectory into `${CODEX_HOME:-$HOME/.codex}/skills`. [CITED: README.md] |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `rg` / shell grep | local CLI | Verify required strings, aliases, paths, and reference registrations | Use during implementation review until Phase 4 validation exists. [VERIFIED: repo grep] |
| Manual smoke prompts | N/A | Verify default Xiaohei and explicit Xiaohei route language | Use after Phase 1 docs and metadata edits. [CITED: examples/prompts.md] |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `references/routing.md` | Inline routing section in `SKILL.md` | Inline routing is fewer files; a reference file keeps route metadata compact, testable, and ready for Phase 4 validation. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
| Markdown table route manifest | YAML/JSON manifest | YAML/JSON would be easier for scripts later; Markdown matches the current package format and keeps Phase 1 dependency-free. [CITED: .planning/codebase/STACK.md] |

**Installation:** No package installation is required for Phase 1. [CITED: .planning/codebase/STACK.md]

## Package Legitimacy Audit

Phase 1 installs no external packages, so the Package Legitimacy Gate is not applicable. [CITED: .planning/codebase/STACK.md]

## Recommended File Changes for Phase 1

| File | Action | Requirement Coverage | Notes |
|------|--------|----------------------|-------|
| `ian-xiaohei-illustrations/references/routing.md` | Add | ROUT-01, ROUT-02, ROUT-05, IPCK-05 | Recommended route metadata home with Xiaohei active and Littlebox planned. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
| `ian-xiaohei-illustrations/SKILL.md` | Update | ROUT-01, ROUT-02, IPCK-03, IPCK-05 | Register routing reference, add route-selection step, keep existing Xiaohei references and output path. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| `README.md` | Update | ROUT-05 | Add compact routing section for default Xiaohei, aliases, mixed-IP planned behavior, and output path. [CITED: README.md] |
| `examples/prompts.md` | Update | ROUT-02, ROUT-05 | Add copyable default and explicit Xiaohei examples; mention mixed-IP request as planned behavior. [CITED: examples/prompts.md] |
| `ian-xiaohei-illustrations/agents/openai.yaml` | Leave unchanged in Phase 1 unless planner chooses metadata polish | ROUT-01 | Current metadata already names Xiaohei; broader selectable-IP metadata is Phase 5 per roadmap. [CITED: ian-xiaohei-illustrations/agents/openai.yaml] [CITED: .planning/ROADMAP.md] |

## Architecture Patterns

### System Architecture Diagram

```text
User request
  |
  v
`SKILL.md` route-selection step
  |-- omitted IP or Xiaohei alias --> Xiaohei route metadata
  |                                  |
  |                                  v
  |                          existing Xiaohei references
  |                          style-dna.md, xiaohei-ip.md,
  |                          composition-patterns.md,
  |                          prompt-template.md, qa-checklist.md
  |
  |-- mixed-IP request --> document separate variant groups as intended behavior
                              |
                              v
                       Littlebox execution remains Phase 3

Shared workflow:
article understanding -> cognitive anchors -> shot list -> per-image generation
-> QA handoff -> preserve assets -> delivery report with selected IP and path
```

### Recommended Project Structure

```text
ian-xiaohei-illustrations/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── routing.md
    ├── style-dna.md
    ├── xiaohei-ip.md
    ├── composition-patterns.md
    ├── prompt-template.md
    └── qa-checklist.md
```

### Pattern 1: Route Metadata as Compact Markdown

**What:** Add a route metadata section with one active Xiaohei entry and one planned Littlebox entry. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**When to use:** Use it whenever the agent must choose an IP before loading style, prompt, or QA references. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]

```markdown
## IP Routes

| id | display_name | default | aliases | output_suffix | required_references | attribution_context | status |
|----|--------------|---------|---------|---------------|---------------------|---------------------|--------|
| xiaohei | Xiaohei | true | 小黑, Xiaohei, Ian, ian-xiaohei | illustrations | references/style-dna.md; references/xiaohei-ip.md; references/composition-patterns.md; references/prompt-template.md; references/qa-checklist.md | Ian Xiaohei existing package | active |
| littlebox | Littlebox | false | planned | littlebox | planned | okooo5km Littlebox source, Phase 3 | planned |
```

### Pattern 2: Shared Workflow Before IP References

**What:** Route first, run shared workflow second, load selected IP references third. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**When to use:** Use for planning, generation, and edit tasks so shared orchestration remains reusable across IPs. [CITED: ian-xiaohei-illustrations/SKILL.md]

```markdown
## Workflow Boundary

1. Select the visual IP route.
2. Digest the article or concept.
3. Pick cognitive anchors.
4. Plan one image per anchor.
5. Load only the selected IP's required references.
6. Generate each image separately.
7. Hand off to the selected IP's QA rules.
8. Save without overwriting existing assets.
9. Report selected IP, count, purpose, path, and stability notes.
```

### Anti-Patterns to Avoid

- **Moving Xiaohei style rules into routing metadata:** Routing metadata should identify required references; style and character contracts belong in existing Xiaohei reference files. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]
- **Implementing Littlebox execution in Phase 1:** Phase 1 should reserve planned Littlebox route metadata while Phase 3 owns Littlebox aliases, references, output path behavior, and attribution. [CITED: .planning/ROADMAP.md]
- **Editing prompt templates for multi-IP behavior in Phase 1:** Prompt wording is IP-specific and belongs to canonical IP packs or later Littlebox work. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]
- **Making `agents/openai.yaml` the source of routing truth:** Agent metadata is display/invocation metadata; behavior rules belong in `SKILL.md` and references. [CITED: .planning/codebase/ARCHITECTURE.md]

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Route metadata | Custom parser format or embedded pseudo-code | Markdown table or compact bullets in `references/routing.md` | Current repo is Markdown-first and Phase 4 can grep predictable headings/fields. [CITED: .planning/codebase/STACK.md] |
| Shared workflow | New runtime, CLI, or app framework | Existing `SKILL.md` workflow prose | The project explicitly has no build runtime and preserves Codex Skill compatibility. [CITED: .planning/PROJECT.md] |
| Validation in Phase 1 | Full validation script | Manual `rg` checks and smoke prompts | Phase 4 owns the local validation command. [CITED: .planning/ROADMAP.md] |
| Littlebox behavior | Placeholder style rules in Xiaohei files | Planned Littlebox route entry only | Phase 3 owns Littlebox vertical slice. [CITED: .planning/ROADMAP.md] |

**Key insight:** Phase 1 is a routing contract phase; it should make later IP packs predictable while preserving the existing Xiaohei route exactly. [CITED: .planning/ROADMAP.md]

## Common Pitfalls

### Pitfall 1: Default Route Drift

**What goes wrong:** Omitted-IP requests stop reading as Xiaohei default behavior. [CITED: .planning/REQUIREMENTS.md]  
**Why it happens:** Multi-IP wording can make selection sound mandatory. [ASSUMED]  
**How to avoid:** State that omitted IP selects Xiaohei in `routing.md`, `SKILL.md`, README, and examples. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**Warning signs:** README examples begin requiring an IP name for existing Xiaohei prompts. [CITED: README.md]

### Pitfall 2: Shared Workflow Contains Xiaohei Style

**What goes wrong:** The shared workflow becomes unusable for Littlebox because it embeds pure-white background, Xiaohei action, and Xiaohei QA language. [CITED: .planning/REQUIREMENTS.md]  
**Why it happens:** Current `SKILL.md` combines orchestration and Xiaohei defaults in one file. [CITED: ian-xiaohei-illustrations/SKILL.md]  
**How to avoid:** Keep route selection and workflow steps in `SKILL.md`; keep style/character/prompt/QA in selected IP references. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**Warning signs:** A shared section mentions only Xiaohei visual traits beyond the default-route compatibility note. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]

### Pitfall 3: Docs Promise Littlebox Execution Early

**What goes wrong:** Users expect Littlebox generation before Phase 3 has added its references and QA. [CITED: .planning/ROADMAP.md]  
**Why it happens:** ROUT-05 asks docs to mention mixed-IP behavior during Phase 1. [CITED: .planning/REQUIREMENTS.md]  
**How to avoid:** Phrase mixed-IP docs as intended separate variant groups and mark Littlebox execution as planned for a later phase. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**Warning signs:** README or examples include runnable Littlebox generation prompts in Phase 1. [CITED: .planning/ROADMAP.md]

### Pitfall 4: Validation-Hostile Wording

**What goes wrong:** Phase 4 cannot reliably check aliases, output suffixes, required references, and status. [CITED: .planning/ROADMAP.md]  
**Why it happens:** Metadata is only written in prose paragraphs. [ASSUMED]  
**How to avoid:** Use stable field names from CONTEXT: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, and `status`. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]  
**Warning signs:** Aliases are scattered across multiple docs with different capitalization or missing fields. [ASSUMED]

## Code Examples

### Register Routing Reference in SKILL.md

```markdown
## 先读这些参考

按任务需要读取，不要一次塞满上下文：

- `references/routing.md`：视觉 IP 路由、默认 IP、别名、输出路径和必读参考。
- `references/style-dna.md`：风格 DNA、颜色、文字、禁忌。
```

Source: existing reference-loading pattern in `SKILL.md`. [CITED: ian-xiaohei-illustrations/SKILL.md]

### Route Selection Step

```markdown
### 0. 选择视觉 IP

- 用户没有指定视觉 IP 时，选择 Xiaohei route。
- 用户写 `小黑`、`Xiaohei`、`Ian` 或 `ian-xiaohei` 时，选择 Xiaohei route。
- 用户要求多个 IP 时，按 IP 分组输出 variant；Littlebox 执行规则在 Phase 3 补齐。
```

Source: Phase 1 locked route decisions. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]

### Delivery Report Shape

```markdown
生成后的交付包含：

- 选中的视觉 IP
- 生成了几张
- 每张图的用途
- 保存路径
- 哪些图最稳，哪些图是可选
```

Source: current delivery report plus Phase 1 selected-IP addition. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single-IP Xiaohei workflow in `SKILL.md` | Explicit route metadata with Xiaohei active and Littlebox planned | Phase 1 | Makes default behavior deterministic and creates a validation target. [CITED: .planning/ROADMAP.md] |
| Public docs only show Xiaohei prompts | Public docs explain default route and Xiaohei aliases | Phase 1 | Preserves existing examples while documenting selection language. [CITED: .planning/REQUIREMENTS.md] |
| Workflow prose mixes orchestration and Xiaohei style | Shared workflow names orchestration steps and defers style to selected IP references | Phase 1 | Enables Phase 2/3 IP pack isolation. [CITED: .planning/REQUIREMENTS.md] |

**Deprecated/outdated:**
- Implicit-only route behavior: it works for current Xiaohei, but Phase 1 needs readable route metadata for multi-IP expansion. [CITED: ian-xiaohei-illustrations/SKILL.md] [CITED: .planning/ROADMAP.md]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Multi-IP wording can make users think IP selection is mandatory. | Common Pitfalls | Existing Xiaohei prompts may feel less compatible. |
| A2 | Prose-only metadata makes Phase 4 validation harder than stable field names. | Common Pitfalls | Validation may need brittle natural-language matching. |
| A3 | Aliases scattered across docs are likely to drift. | Common Pitfalls | Explicit Xiaohei route requests may behave inconsistently across docs and skill instructions. |

## Open Questions

1. **Should Phase 1 create `references/routing.md` or keep routing inside `SKILL.md`?**
   - What we know: CONTEXT allows either a readable manifest or a `SKILL.md` routing section. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md]
   - What's unclear: The planner may prefer fewer files for the first phase. [ASSUMED]
   - Recommendation: Create `references/routing.md` and register it in `SKILL.md` because it gives Phase 4 a stable validation target. [CITED: .planning/ROADMAP.md]

2. **Should `agents/openai.yaml` change in Phase 1?**
   - What we know: Phase 5 owns metadata reflecting selectable IP support. [CITED: .planning/ROADMAP.md]
   - What's unclear: A tiny metadata polish could mention default Xiaohei plus selectable IPs early. [ASSUMED]
   - Recommendation: Leave it unchanged in Phase 1 unless the plan includes a narrow display-copy edit with no behavior dependency. [CITED: .planning/ROADMAP.md]

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Local filesystem | Writing research and later Markdown edits | Yes | N/A | N/A [VERIFIED: repo grep] |
| Git | Inspecting changed files and optional docs commit | Yes | N/A | Manual file inspection [VERIFIED: repo grep] |
| External packages | Phase 1 implementation | N/A | N/A | N/A [CITED: .planning/codebase/STACK.md] |

**Missing dependencies with no fallback:** None for Phase 1 research and Markdown implementation. [CITED: .planning/codebase/STACK.md]

**Missing dependencies with fallback:** No external dependency is required. [CITED: .planning/codebase/STACK.md]

## Validation Architecture

`workflow.nyquist_validation` is explicitly `false`, so the full Validation Architecture section is skipped by configuration. [CITED: .planning/config.json]

Phase 1 verification should still use targeted manual checks:

```bash
rg "小黑|Xiaohei|Ian|ian-xiaohei|default|output_suffix|required_references|attribution_context|status" ian-xiaohei-illustrations README.md examples/prompts.md
rg "assets/<article-slug>-illustrations" ian-xiaohei-illustrations README.md examples/prompts.md
rg "references/routing.md|routing.md" ian-xiaohei-illustrations/SKILL.md
```

These commands match the repository's current no-test-runner state and Phase 4's later validation direction. [CITED: .planning/codebase/TESTING.md] [CITED: .planning/ROADMAP.md]

## Security Domain

Security enforcement is enabled in `.planning/config.json`; Phase 1 has documentation and routing-safety concerns rather than authentication or data-security code. [CITED: .planning/config.json]

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|------------------|
| V2 Authentication | no | No authentication flow exists in this skill package. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V3 Session Management | no | No session or service runtime exists. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V4 Access Control | no | No API or permission boundary exists. [CITED: .planning/codebase/ARCHITECTURE.md] |
| V5 Input Validation | yes | Treat route aliases and output paths as explicit allowlisted text in routing metadata. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
| V6 Cryptography | no | No cryptographic operation exists. [CITED: .planning/codebase/ARCHITECTURE.md] |

### Known Threat Patterns for This Stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Output path collision | Tampering | Preserve existing assets and keep `assets/<article-slug>-illustrations/` behavior explicit. [CITED: ian-xiaohei-illustrations/SKILL.md] |
| Broad implicit invocation | Spoofing / Misrouting | Use explicit route metadata and alias allowlist so the selected IP is reported. [CITED: .planning/codebase/CONCERNS.md] |
| Docs drift | Tampering / Integrity | Keep route fields stable and verify README/examples against routing metadata. [CITED: .planning/codebase/CONCERNS.md] |

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| README and examples drift from `SKILL.md` | Users copy stale prompts or misunderstand default behavior. | Add the same default route, aliases, mixed-IP planned behavior, and output path in all public surfaces. [CITED: README.md] [CITED: examples/prompts.md] |
| Route metadata duplicates future Phase 2 pack metadata | Later canonicalization may need a small move. | Keep Phase 1 metadata compact and route-level; leave style and prompt details in references. [CITED: .planning/ROADMAP.md] |
| Littlebox planned entry implies execution availability | Users may try Littlebox before Phase 3. | Mark Littlebox status as `planned` and phrase mixed-IP docs as intended behavior. [CITED: .planning/phases/01-routing-foundation/01-CONTEXT.md] |
| Shared workflow edit weakens Xiaohei output quality | Existing behavior regression. | Preserve existing Xiaohei references and output path; make route selection additive. [CITED: ian-xiaohei-illustrations/SKILL.md] |

## Sources

### Primary (HIGH confidence)

- `.planning/phases/01-routing-foundation/01-CONTEXT.md` - locked route decisions, metadata fields, deferred scope.
- `.planning/REQUIREMENTS.md` - ROUT-01, ROUT-02, ROUT-05, IPCK-03, IPCK-05 definitions.
- `.planning/ROADMAP.md` - Phase 1 boundary and later-phase ownership.
- `ian-xiaohei-illustrations/SKILL.md` - current Xiaohei default, references, workflow, QA, output contract.
- `.planning/codebase/ARCHITECTURE.md` - package layers, entry points, responsibilities.
- `.planning/codebase/STRUCTURE.md` - file placement and installable package boundary.
- `.planning/codebase/CONVENTIONS.md` - Markdown naming and reference registration conventions.

### Secondary (MEDIUM confidence)

- `README.md` - public install and usage docs.
- `examples/prompts.md` - copyable prompt examples.
- `.planning/codebase/TESTING.md` - current manual QA and no-test-runner state.
- `.planning/codebase/CONCERNS.md` - drift, validation, implicit invocation, and package-boundary risks.

### Tertiary (LOW confidence)

- Assumptions in `## Assumptions Log` about user confusion and future validation brittleness.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - repo has no package manifest, no build runtime, and uses Markdown/YAML skill files. [CITED: .planning/codebase/STACK.md]
- Architecture: HIGH - package responsibilities and entry points are documented and confirmed by current files. [CITED: .planning/codebase/ARCHITECTURE.md]
- Pitfalls: MEDIUM - drift risks are documented; user-confusion risks are reasoned from the planned multi-IP change. [CITED: .planning/codebase/CONCERNS.md] [ASSUMED]

**Research date:** 2026-06-12 [VERIFIED: repo grep]  
**Valid until:** 2026-07-12, or until Phase 2 changes the Xiaohei reference layout. [ASSUMED]
