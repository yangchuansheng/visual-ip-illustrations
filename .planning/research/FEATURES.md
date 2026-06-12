# Feature Landscape: Authorized Tom IP Integration

**Domain:** Multi-IP article illustration Codex Skill
**Milestone:** v1.1 Authorized Tom IP Integration
**Researched:** 2026-06-13
**Scope:** Tom route only; Xiaohei and Littlebox behavior are baseline dependencies.
**Overall confidence:** MEDIUM. Existing project contracts are HIGH confidence. Public-rights assumptions are MEDIUM because final authorization details must come from the maintainer's actual license or written permission.

## Recommendation

Add Tom as an explicit, rights-gated third route with its own canonical pack, route metadata, examples, validator coverage, release checklist entries, and NOTICE section. Users should be able to request Tom directly and receive article illustrations that use Tom's expressive cat identity to perform the cognitive action. Maintainers should treat Tom as a bundled protected-character route whose public release depends on documented authorization boundaries.

Tom should behave like Littlebox structurally: explicit aliases, isolated references, route-specific output suffix, route-specific QA, and mixed-IP variant grouping. Tom should differ operationally by adding a rights-status gate in docs and validator markers so public examples, prompts, and generated samples do not imply unrestricted reuse beyond the documented authorization.

## Table Stakes

Features users expect. Missing = Tom feels bolted on or unsafe to use.

| Feature | Expected User Behavior | Expected Maintainer Behavior | Complexity | Rights Boundary |
|---------|------------------------|------------------------------|------------|-----------------|
| Explicit Tom route selection | User can write `Tom`, `汤姆`, `Tom Cat`, or `Tom and Jerry` and get `selected IP: Tom`. | Add `tom` to `references/routing.md` with aliases, `default: false`, `output_suffix: tom`, required references, attribution context, and rights status. | Medium | Route text must identify Tom as an authorized protected-character route, not an original bundled IP. |
| Xiaohei default preservation | User omits IP and still gets Xiaohei. | Keep exactly one default route: `xiaohei`. Add validator assertion that Tom cannot become default. | Low | Prevent accidental protected-character use from old prompts. |
| Canonical Tom IP pack | User receives Tom-consistent planning, prompts, generation, edits, and QA. | Create `references/ips/tom/` with `index.md`, `style-dna.md`, `tom-ip.md`, `composition-patterns.md`, `language-and-labels.md`, `prompt-template.md`, `qa-checklist.md`, and `rights-boundary.md`. | High | `rights-boundary.md` is a release-blocking reference. |
| Tom character identity | User sees Tom as the active cognitive actor: sneaking, chasing, bracing, catching, balancing, testing, failing, recovering. | Define stable visual anatomy, silhouette, face/expression rules, allowed actions, and failure modes. | High | Use only authorized character guidance and avoid adding unrelated franchise characters by default. |
| Article-illustration fit | User gets a 16:9 article body illustration that explains one cognitive action, not fan art. | Prompt template must retain the shared product contract: one core idea, article context, sparse labels, route-specific style, single-image generation. | Medium | Position output as article illustration under the authorized route. |
| Tom shot-list fields | Planning output includes Tom-specific action, expression, object interaction, suggested labels, and output path. | Extend examples and skill instructions with Tom planning fields. | Medium | Fields should avoid implying character ownership by this repository. |
| Tom generation prompt | User can request direct generation without a clarification pause when Tom route is explicit. | Add Tom prompt template with required character, composition, label, background, and rights-safe wording. | High | Prompt should avoid trademarks in visible image text unless user explicitly provides approved copy. |
| Tom QA checklist | User receives regeneration/editing when Tom looks generic, passive, off-model, over-complex, or rights-unsafe. | Add QA gates for identity, active participation, article readability, visible-text control, output path, and rights markers. | High | QA must flag unauthorized extra copyrighted characters, logos, title cards, studio marks, and show-scene replication. |
| Route-specific output path | Tom outputs save under `assets/<article-slug>-tom/`. | Add raw and escaped markers: `assets/<article-slug>-tom/` and `assets/&lt;article-slug&gt;-tom/`. | Low | Separate Tom assets from original-IP assets for review and distribution control. |
| Mixed-IP grouping | User can request the same core idea as Xiaohei, Littlebox, and Tom variant groups. | Extend variant grouping logic and docs to create one group per IP with separate references, QA, and output paths. | Medium | Tom group should carry rights-status note in delivery when public redistribution status is limited. |
| Edit prompts | User can ask to strengthen Tom participation, fix off-model identity, reduce text, remove titles, or preserve unaffected content. | Add Tom edit prompt patterns to Tom prompt template and examples. | Medium | Edits must preserve authorized route boundaries and avoid adding unauthorized third-party characters. |
| Public docs examples | User can learn Tom invocation from README and `examples/prompts.md`. | Add Tom planning, generation, mixed-IP, and smoke prompts with route aliases and paths. | Medium | Public docs must include a clear rights boundary near Tom examples. |
| Local validator coverage | Maintainer gets a failing local check when Tom route docs drift. | Extend `scripts/validate-skill-package.mjs` and tests for route, pack files, prompt placeholders, path markers, docs markers, NOTICE, release checklist, and rights-boundary markers. | Medium | Validator should fail if Tom lacks explicit authorization/rights-boundary markers. |
| NOTICE attribution | User and redistributor can see Tom rights context. | Add Tom source, rights holder, authorization assumption/status, and redistribution wording to `NOTICE.md`. | Medium | Warner Bros. / Warner Bros. Discovery ownership must be recorded from the authorization source available to maintainers. |
| Release checklist gate | Maintainer has a concrete pre-release review path for Tom. | Add Tom smoke prompts, validator commands, rights review, docs review, and public-sample review to `RELEASE_CHECKLIST.md`. | Low | Release checklist must distinguish private/internal authorized use from public distribution. |

## Differentiators

Features that make Tom worth adding instead of being a generic third route.

| Feature | Value Proposition | Expected User Behavior | Expected Maintainer Behavior | Complexity | Rights Boundary |
|---------|-------------------|------------------------|------------------------------|------------|-----------------|
| Expressive physical comedy as cognition | Tom is useful for showing tension, overreach, traps, chase pressure, near-miss execution, and recovery. | Users can map abstract workflow failures to Tom's body language and object struggle. | Provide Tom-specific action library: chase, pounce, brace, slip, stretch, catch, miss, tiptoe, hold-back, collide, recover. | Medium | Keep scenes original to the article concept; avoid recreating recognizable cartoon episodes or title-card imagery. |
| Emotion-state planning | Tom can encode cognitive state through face and posture: suspicion, panic, confidence, exhaustion, forced calm. | Shot list can include `Tom state` and `core action` fields. | Add state taxonomy to `tom-ip.md` and QA. | Medium | Avoid depicting other protected cast members unless the authorization explicitly covers them. |
| Variant comparison across three IPs | Same idea can become Xiaohei absurd minimalism, Littlebox packaging metaphor, or Tom comedic pressure. | Users can request three route groups for creative choice. | Extend mixed-IP examples and delivery blocks to include Tom. | Medium | Tom variant group should be clearly labeled for review before external publishing. |
| Rights-aware route metadata | The route system becomes capable of handling protected IPs responsibly. | Users receive Tom behavior plus a concise route-status note when relevant. | Add route metadata fields or documented markers for `rights_status`, `rights_holder`, `authorized_use_scope`, and `release_boundary`. | Medium | Treat these markers as validator-required for Tom. |
| Distribution-safe sample policy | The package can ship route capability while controlling public Tom-derived assets. | Users see prompt examples before generated public Tom images are added. | Release docs should require explicit review before adding Tom sample images to README, package assets, or marketing surfaces. | Low | Public sample images require authorization scope confirmation. |

## Anti-Features

Features to explicitly avoid in this milestone.

| Anti-Feature | Why Avoid | Recommended Behavior | Complexity Avoided | Rights Boundary |
|--------------|-----------|----------------------|--------------------|-----------------|
| Making Tom the default IP | Default use should remain stable for existing users. | Tom is explicit-only. | Low | Prevents protected-IP generation from accidental omitted-IP prompts. |
| Generic third-party IP import system | The milestone target is one authorized route. | Implement one canonical Tom route with concrete files and validators. | High | Keeps legal review bounded to one known IP. |
| Hybrid Xiaohei/Littlebox/Tom character | Mixed identity breaks IP isolation and QA. | Use separate variant groups. | Medium | Prevents confusing ownership and attribution. |
| Jerry or broader cast support by default | Tom route scope is Tom. | Keep Tom solo unless written authorization explicitly includes more characters. | High | Avoids expanding protected-IP scope implicitly. |
| Public Tom-generated example gallery before review | Generated samples are distribution artifacts. | Ship prompt examples and route docs first; add generated samples after rights review. | Medium | Keeps public redistribution within authorization. |
| Show logo, studio marks, title cards, episode still recreation | These create higher-risk derivative or branding uses. | Use original article metaphor scenes with Tom as actor. | Medium | Avoid recognizable Warner Bros. marks and copied scenes. |
| Long visible text in Tom images | Text errors and clutter reduce article illustration quality. | Use sparse labels in the user's language, copied exactly. | Low | Avoid unapproved trademark copy in visible image text. |
| Style drift into glossy commercial animation | Article illustrations need a stable package style. | Define a Tom-specific article illustration style compatible with the skill's 16:9 explanatory use. | Medium | Avoid representing outputs as official animation frames or studio artwork. |
| Silent rights assumptions | Maintainers need an auditable release decision. | Add explicit rights-boundary docs and checklist items. | Low | Release depends on documented authorization scope. |

## Required User Behavior

Tom should support these user flows:

1. **Planning only**
   - User says `Use $ian-xiaohei-illustrations 使用 Tom 路由，先不要生图。`
   - Skill returns `selected IP: Tom`, route path, output path, and shot list.
   - Shot list fields include placement, core idea, structure type, Tom state, Tom core action, suggested objects, short visible labels, and rights-status note when relevant.

2. **Direct generation**
   - User explicitly requests Tom and generation.
   - Skill loads only Tom required references, generates one image per prompt, runs Tom QA, saves under `assets/<article-slug>-tom/`, and reports image count, purpose, path, and stability notes.

3. **Mixed-IP variant planning/generation**
   - User requests Xiaohei, Littlebox, and Tom for the same core idea.
   - Skill creates separate route groups and never blends IP rules.
   - Tom group includes route-specific references, output path, Tom action/state fields, and rights-status note.

4. **Editing**
   - User asks to improve Tom participation, fix off-model Tom identity, remove titles, reduce labels, preserve unaffected content, or keep selected route.
   - Skill applies Tom edit prompts and preserves the route, output path, article meaning, and unaffected content.

5. **Ambiguous references**
   - `Tom` alone should select the Tom route in this skill context.
   - `Tom and Jerry` should select the Tom route and keep Jerry out of scope unless the user request and rights docs both support broader cast usage.

## Required Maintainer Behavior

Maintainers should implement Tom as a route plus canonical pack, then wire docs and validation around it.

| Area | Maintainer Requirement | Validation Signal |
|------|------------------------|-------------------|
| Routing | Add `tom` route with aliases, `default: false`, `output_suffix: tom`, required references, attribution context, active/authorized status. | Validator finds Tom route and confirms Xiaohei remains sole default. |
| Canonical pack | Add Tom reference files under `references/ips/tom/`. | Validator checks required file list and index links. |
| Runtime instructions | Update `SKILL.md` route selection, reference list, planning fields, generation rules, QA routing, save-path list, and mixed-IP delivery. | Validator checks route names, path markers, and required reference paths in `SKILL.md`. |
| Public docs | Update README and prompt examples with Tom usage, aliases, path markers, mixed-IP examples, and rights note. | Validator checks raw and escaped Tom path markers and canonical pack path. |
| Validator tests | Extend validator and tests to cover Tom. | `node scripts/validate-skill-package.mjs` and `node --test scripts/validate-skill-package.test.mjs` pass. |
| NOTICE | Add Tom source, rights holder, authorization basis/status, and redistribution boundary. | Validator checks Tom rights-boundary tokens. |
| Release checklist | Add Tom route smoke, mixed-IP smoke, rights review, generated-sample review, and public distribution review. | Release checklist contains Tom gate items. |
| Generated assets | Keep generated Tom assets in workspace `assets/<article-slug>-tom/`; public sample images require review. | Release checklist confirms sample policy. |
| Backward compatibility | Keep legacy Xiaohei root references and existing paths stable. | Existing Xiaohei/Littlebox validator cases continue passing. |

## Rights-Boundary Requirements

Tom is a protected commercial character from *Tom and Jerry*. The milestone should assume the route is authorized only to the extent documented by the maintainer's license, written permission, or internal authorization record.

Minimum rights-boundary fields for documentation and validation:

| Field | Required Recommendation | Confidence |
|-------|-------------------------|------------|
| `source_work` | `Tom and Jerry` | HIGH |
| `character` | `Tom` / `Tom Cat` | HIGH |
| `rights_holder` | Warner Bros. / Warner Bros. Discovery rights context, verified against the authorization source used by the maintainer. | MEDIUM |
| `authorization_basis` | Link or file reference to the maintainer's written authorization, license, internal approval, or allowed-use memo. | MEDIUM |
| `authorized_use_scope` | Define whether use is internal testing, private generation, public repository docs, public prompt examples, generated sample images, or commercial use. | MEDIUM |
| `redistribution_boundary` | State what repository redistributors may do with Tom references and generated outputs. | MEDIUM |
| `sample_image_policy` | Public Tom-derived generated examples require explicit review before inclusion. | MEDIUM |
| `visible_branding_policy` | Avoid logos, studio marks, title cards, and episode-still recreation unless authorization covers them. | MEDIUM |
| `cast_scope` | Tom-only by default; broader cast requires explicit rights coverage. | MEDIUM |
| `status_marker` | Route should expose a machine-checkable marker such as `rights_status: authorized-boundary-required` or equivalent prose token. | MEDIUM |

Recommended wording pattern for docs:

```text
Tom route is included as an authorized protected-character route. Use and redistribution must follow the authorization scope recorded in `references/ips/tom/rights-boundary.md` and `NOTICE.md`.
```

## MVP Recommendation

Prioritize:

1. Add `tom` route metadata and isolated canonical pack skeleton.
2. Define Tom user behavior: explicit route, planning fields, direct generation, editing, output path, mixed-IP groups.
3. Add rights-boundary docs, NOTICE markers, and release checklist gates.
4. Extend local validator and tests to enforce Tom route integrity.
5. Update README and prompt examples after validator rules are in place.

Defer:

- Public generated Tom sample images until authorization scope is reviewed.
- Broader *Tom and Jerry* cast support until rights scope explicitly includes it.
- Generic external-IP import architecture until multiple protected-IP integrations prove the schema.

## Feature Dependencies

```text
Tom rights-boundary docs -> Tom public docs -> Tom release checklist
Tom route metadata -> Tom canonical pack -> SKILL.md route behavior -> validator coverage
Tom prompt template + QA checklist -> direct generation + edit prompts
Tom route metadata + existing Xiaohei/Littlebox grouping -> three-IP variant groups
NOTICE Tom section -> release checklist rights review -> public distribution confidence
```

## Phase Fit

Suggested phase structure for this milestone:

1. **Tom Route Contract** - routing metadata, output path, aliases, rights-status fields.
2. **Tom Canonical Pack** - style, character, composition, language, prompt, QA, rights-boundary references.
3. **Runtime Behavior** - SKILL.md route selection, planning/generation/editing, mixed-IP groups, delivery report.
4. **Docs and Examples** - README, prompt examples, NOTICE, release checklist.
5. **Validation** - validator and tests for route, files, docs, paths, and rights markers.

## Sources

- `.planning/PROJECT.md` - v1.1 goal, active requirements, constraints, rights-boundary requirement. Confidence: HIGH.
- `README.md` - current two-IP public user behavior and maintainer docs. Confidence: HIGH.
- `examples/prompts.md` - route smoke prompts and prompt-marker conventions. Confidence: HIGH.
- `NOTICE.md` - current attribution structure for Ian and Littlebox. Confidence: HIGH.
- `RELEASE_CHECKLIST.md` - current release gates. Confidence: HIGH.
- `ian-xiaohei-illustrations/SKILL.md` - runtime routing, planning, generation, QA, and delivery behavior. Confidence: HIGH.
- `ian-xiaohei-illustrations/references/routing.md` - route metadata schema and output path conventions. Confidence: HIGH.
- `ian-xiaohei-illustrations/references/ips/xiaohei/index.md` - canonical pack shape. Confidence: HIGH.
- `ian-xiaohei-illustrations/references/ips/littlebox/index.md` - selectable-IP pack shape and attribution pattern. Confidence: HIGH.
- Warner Bros. official Tom and Jerry brand page: <https://www.warnerbros.com/brands/tom-and-jerry>. Confidence: MEDIUM for public ownership context; actual project authorization still requires maintainer-provided source.
- Warner Bros. clip and still licensing information: <https://www.warnerbros.com/studio/services/clip-and-still-licensing>. Confidence: MEDIUM for written-request licensing process.
- Warner Bros. Terms of Use: <https://policies.warnerbros.com/terms/en-us>. Confidence: MEDIUM for general content/IP restrictions.
