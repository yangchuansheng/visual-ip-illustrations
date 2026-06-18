# Phase 45 Validation Strategy

## Scope

Phase 45 validates only Cai Xukun runtime controller integration in:

- `skills/visual-ip-illustrations/SKILL.md`
- `skills/visual-ip-illustrations/references/routing.md`
- `skills/visual-ip-illustrations/references/ips/caixukun/*.md`

The validation target is deterministic source inspection for route selection, progressive reference loading, shot-list fields, generation/edit dispatch, QA dispatch, mixed-IP isolation, save/delivery behavior, route-leakage guard coverage, existing-route stability, local source-path leakage prevention across runtime-loaded Cai Xukun files, dirty-worktree-aware scope control, and diff hygiene.

Phase 46 owns README variants, `examples/prompts.md`, `NOTICE.md`, `RELEASE_CHECKLIST.md`, public docs, public release surfaces, and `skills/visual-ip-illustrations/agents/openai.yaml`.

Phase 47 owns `scripts/validate-skill-package.mjs`, `scripts/validate-skill-package.test.mjs`, validator hardening, Node tests, leakage fixtures, public sample gates, route smoke fixtures, and final release evidence.

## Requirement Verification Map

| Requirement | Phase 45 Verification Method | Pass Criteria | Fail Criteria |
|-------------|------------------------------|---------------|---------------|
| RUN-01 | Grep route selection, seven-file loading, shot-list fields, generation/edit dispatch, QA dispatch, delivery markers in `SKILL.md`, and path-free route authority in runtime-loaded Cai Xukun files. | Cai Xukun appears in every runtime controller surface with aliases, route id, status, source pointer, uploaded-image identity, source-image context, likeness boundary, prompt/edit/QA references, output path, and path-free uploaded reference authority. | Cai Xukun appears in only route overview or route selection while planning, generation, edit, QA, save, delivery, or runtime-loaded route authority surfaces are missing. |
| RUN-02 | Grep mixed-IP shot-list, generation, and delivery sections. | Cai Xukun is a separate route group alongside Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher with its own references, prompt template, QA checklist, edit gates, suffix, note, and output directory. | Mixed-IP wording omits Cai Xukun, shares another route's references, or lacks `assets/<article-slug>-caixukun/`. |
| RUN-03 | Grep Output Contract and route-leakage delivery guard fields. | Single-route and mixed-IP Cai Xukun delivery reports include selected visual IP, image count, purpose per image, saved path, route status, source pointer, likeness-boundary note, uploaded-image identity status, source-image context status, route isolation status, public sample review boundary when relevant, route stability notes, and local source-path leakage protection. | Delivery output lacks route status, source pointer, path, likeness boundary, identity status, source-image context, route isolation, public sample boundary, stability notes, or local source-path leakage protection. |
| RUN-04 | Grep identity and compatibility markers plus Phase 46 metadata scope guard. | `SKILL.md` presents Cai Xukun as selectable while preserving Visual IP Illustrations identity, `$visual-ip-illustrations`, `$ian-xiaohei-illustrations`, and Xiaohei omitted default; `agents/openai.yaml` remains untouched for Phase 46. | Cai Xukun route wording replaces canonical identity, removes the legacy alias, changes omitted default behavior, or edits `agents/openai.yaml` in Phase 45. |

## Automated Checks

Run the RUN-01 route selection and loading check:

```bash
rg -n "Cai Xukun|caixukun|蔡徐坤|cxk|gated-public-figure|output_suffix: caixukun|assets/<article-slug>-caixukun|references/ips/caixukun/(index|source|style-dna|caixukun-ip|composition-patterns|prompt-template|qa-checklist)\\.md" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds Cai Xukun display name, route id, all aliases, route status, output suffix, output path, and all seven Cai Xukun references.

Fail criteria:

- Any alias, route status, output path, or required reference is absent.

Run the RUN-01 planning field check:

```bash
rg -n "Cai Xukun shot-list entries|Selected IP `Cai Xukun`|Route status `gated-public-figure`|Cai Xukun mascot state|Cai Xukun mascot action|Likeness boundary note|Source-image context note|neutral article-concept labels|Output path `assets/<article-slug>-caixukun/`" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds selected IP, route status, mascot state/action, likeness boundary, source-image context, neutral article labels, and output path in shot-list planning.

Fail criteria:

- Planning fields are generic, omit source-sensitive notes, or omit `assets/<article-slug>-caixukun/`.

Run the RUN-01 generation and edit routing check:

```bash
rg -n "Cai Xukun loads only|references/ips/caixukun/prompt-template.md|references/ips/caixukun/composition-patterns.md|references/ips/caixukun/qa-checklist.md|uploaded-image identity|green reference background is source-image context|sparse 16:9 white-background|public-figure likeness boundary|celebrity endorsement|affiliation|impersonation|campaign|celebrity advertising|fandom promotion|Stronger Cai Xukun Participation|Uploaded-Image Identity Repair|Public-Figure Likeness Boundary Repair|Route Leakage Repair|Green-Background Carryover Repair|Unaffected-Content Preservation" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds Cai Xukun route-local prompt, composition, QA, edit gates, uploaded-image identity, source-image context, likeness boundary, and forbidden-claim sanitization markers.
- Runtime prompt wording points to `references/ips/caixukun/source.md` instead of copying maintainer-local source-image paths.

Fail criteria:

- Generation/edit routing points to another route, omits uploaded-image identity, omits source-image context, omits public-figure claim guardrails, or copies maintainer-local source-image paths into `SKILL.md`.

Run the local source-path leakage check:

```bash
! rg -n "/Users/longnv/Downloads|Generated image 1 \\(9\\)\\.png|20260618-013721\\.jpeg" \
  skills/visual-ip-illustrations/SKILL.md \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun/*.md
```

Pass criteria:

- No maintainer-local source-image path or filename appears in the runtime controller, route metadata, or Cai Xukun route-local runtime references.

Fail criteria:

- Any runtime-loaded Cai Xukun file contains maintainer-local source-image paths or local uploaded-source filenames.

Run the path-free source authority check:

```bash
rg -n "uploaded reference image A|uploaded reference image B|references/ips/caixukun/source.md|uploaded-image stylized mascot described" \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun/*.md
```

Pass criteria:

- Runtime-loaded Cai Xukun metadata and prompt files contain stable path-free uploaded reference labels and source-pointer wording.

Fail criteria:

- Runtime-loaded Cai Xukun files lose uploaded visual authority wording or prompt templates lack source-pointer replacement text.

Run the RUN-02 mixed-IP grouping check:

```bash
rg -n "Mixed-IP|mixed-IP|Cai Xukun variant group|separate route groups|references/ips/caixukun/|assets/<article-slug>-caixukun/|uploaded-image identity status|public-figure likeness boundary status|source-image context status|public sample review boundary|route isolation status" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds Cai Xukun as a separate mixed-IP group with its own route-local reference directory, output path, status fields, and route isolation marker.

Fail criteria:

- Mixed-IP sections omit Cai Xukun or merge Cai Xukun into another route group.

Run the RUN-01 and RUN-03 QA/save/delivery check:

```bash
rg -n "Cai Xukun high-risk failures|realistic-person output|generic yellow duck drift|missing uploaded-image outfit|missing outfit markers|missing idol-hair|copied sample pose|forbidden claim labels|route leakage|source-image path leakage|green-background carryover|references/ips/caixukun/qa-checklist.md|assets/<article-slug>-caixukun/|assets/&lt;article-slug&gt;-caixukun/|output_suffix: caixukun|When the selected visual IP is `Cai Xukun`|Cai Xukun block|selected IP `Cai Xukun`|image count|purpose per image|source pointer `references/ips/caixukun/source.md`|uploaded-image identity status|public-figure likeness boundary status|source-image context status|route isolation status|route stability notes|source pointer rather than maintainer-local source-image paths" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds Cai Xukun QA failure categories, QA checklist route, raw and escaped output path, delivery block, selected IP, image count, purposes, source pointer, boundary/status fields, and stability notes.
- Finds the single-route Cai Xukun delivery rule and local source-path leakage protection.

Fail criteria:

- QA lacks any required failure category or delivery lacks route-specific fields.
- Delivery fields appear only inside mixed-IP blocks.

Run the RUN-03 route-leakage delivery guard check:

```bash
rg -n "Before delivery, run the route-leakage delivery guard|Cai Xukun blocks keep `gated-public-figure`|references/ips/caixukun/source.md|uploaded-image identity note|route-local QA|public-figure likeness boundary|source-image context boundary|public sample review boundary|assets/<article-slug>-caixukun/" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds the route-leakage guard and every required Cai Xukun delivery preservation field.

Fail criteria:

- Route-leakage guard omits Cai Xukun or lacks source/status/boundary/path fields.

Run the RUN-04 identity and legacy compatibility check:

```bash
rg -n "Visual IP Illustrations|\\$visual-ip-illustrations|\\$ian-xiaohei-illustrations|Omitted visual IP selects only the Xiaohei route|Littlebox|Tom|Ferris|Seal|OpenClaw|Go Gopher" \
  skills/visual-ip-illustrations/SKILL.md
```

Pass criteria:

- Finds canonical product identity, canonical invocation, legacy alias, Xiaohei default marker, and all existing explicit route names.

Fail criteria:

- Cai Xukun integration removes canonical identity, legacy alias, Xiaohei default wording, or existing route coverage.

Run the Phase 45 scope guard:

```bash
baseline=.planning/phases/45-cai-xukun-skill-controller-integration/45-SCOPE-BASELINE.txt
after=$(mktemp)
{ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u > "$after"
unexpected=$(comm -13 "$baseline" "$after" | grep -Ev '^(skills/visual-ip-illustrations/SKILL\.md|skills/visual-ip-illustrations/references/routing\.md|skills/visual-ip-illustrations/references/ips/caixukun/(index\.md|source\.md|style-dna\.md|caixukun-ip\.md|composition-patterns\.md|prompt-template\.md|qa-checklist\.md)|\.planning/phases/45-cai-xukun-skill-controller-integration/(45-SCOPE-BASELINE\.txt|45-SCOPE-BASELINE-SHA256\.txt|45-01-SUMMARY\.md|45-REVIEW\.md|45-VERIFICATION\.md|45-UAT\.md))$' || true)
test -z "$unexpected"
```

Pass criteria:

- Command exits 0 after comparing current changed paths against `.planning/phases/45-cai-xukun-skill-controller-integration/45-SCOPE-BASELINE.txt`; the only Phase 45 implementation paths are `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/routing.md`, `skills/visual-ip-illustrations/references/ips/caixukun/*.md`, and allowed Phase 45 planning/review/verification artifacts.

Fail criteria:

- Any path outside `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/routing.md`, `skills/visual-ip-illustrations/references/ips/caixukun/*.md`, and the allowed Phase 45 planning/review/verification artifacts appears after the Phase 45 baseline capture.

Run the diff hygiene check:

```bash
git diff --check -- \
  skills/visual-ip-illustrations/SKILL.md \
  skills/visual-ip-illustrations/references/routing.md \
  skills/visual-ip-illustrations/references/ips/caixukun/*.md
```

Pass criteria:

- Command exits 0 with no whitespace errors or conflict markers.

Fail criteria:

- Git reports trailing whitespace, space-before-tab errors, or conflict markers.

## Evidence Expectations

Phase 45 execution summary should include:

- RUN-01 evidence from route selection/loading, planning, generation/edit, and QA grep groups.
- RUN-02 evidence from mixed-IP grouping grep.
- RUN-03 evidence from single-route delivery, mixed-IP delivery, save/delivery, local source-path leakage guard across runtime-loaded Cai Xukun files, path-free source authority grep, and route-leakage delivery guard grep groups.
- RUN-04 evidence from identity/legacy compatibility grep and Phase 46 metadata scope guard.
- `git diff --check -- skills/visual-ip-illustrations/SKILL.md skills/visual-ip-illustrations/references/routing.md skills/visual-ip-illustrations/references/ips/caixukun/*.md` output.
- Confirmation that implementation delta is limited to `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/routing.md`, `skills/visual-ip-illustrations/references/ips/caixukun/*.md`, plus allowed Phase 45 planning/review/verification artifacts, measured against `45-SCOPE-BASELINE.txt`.

## Rollback Check

Rollback target:

- Revert only the Phase 45 edits in `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/routing.md`, and `skills/visual-ip-illustrations/references/ips/caixukun/*.md`.

Rollback verification:

```bash
rg -n "Cai Xukun|caixukun|蔡徐坤|cxk|gated-public-figure|assets/<article-slug>-caixukun" skills/visual-ip-illustrations/SKILL.md
```

Expected rollback result:

- After rollback, the command returns no Cai Xukun controller matches in `SKILL.md` while route metadata and route-local pack files remain intact in `references/routing.md` and `references/ips/caixukun/`.

## Phase 46 and Phase 47 Ownership

Phase 45 completion uses source checks that can run before public documentation and validator parity exist. Phase 46 owns public docs, release surfaces, and agent metadata. Phase 47 owns validator and Node updates after Phase 45 and Phase 46 create the runtime and public surfaces those tests need.

Phase 45 passes when `SKILL.md`, `routing.md`, and Cai Xukun route-local references are grep-verifiable for RUN-01 through RUN-04, the local source-path leakage guard is clean, the dirty-worktree-aware scope guard is clean, and diff hygiene passes.
