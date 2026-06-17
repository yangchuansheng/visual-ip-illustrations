# Codebase Concerns

**Analysis Date:** 2026-06-12

## Tech Debt

**Manual-only skill validation:**
- Issue: The skill relies on prose instructions and human visual judgment with no automated checks for required files, prompt placeholders, installable skill shape, or README drift.
- Files: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`, `README.md`
- Impact: A small edit can break invocation quality, omit required visual constraints, or desynchronize public documentation from the installable skill package.
- Fix approach: Add a lightweight validation script that checks frontmatter keys in `skills/visual-ip-illustrations/SKILL.md`, verifies referenced files exist, confirms prompt template placeholders are present, and compares key README claims against installable package paths.

**Duplicated example assets:**
- Issue: Eight images exist in both public examples and installable skill assets with matching hashes, while the installable skill also contains six additional examples.
- Files: `examples/images/01-two-breakpoints.png`, `examples/images/02-sort-by-purpose.png`, `examples/images/03-one-fish-many-uses.png`, `examples/images/04-handoff-path.png`, `examples/images/05-information-well.png`, `examples/images/06-idea-press.png`, `examples/images/07-content-fermentation.png`, `examples/images/08-trust-bridge.png`, `skills/visual-ip-illustrations/assets/examples/01-two-breakpoints.png`, `skills/visual-ip-illustrations/assets/examples/03-sort-by-purpose.png`, `skills/visual-ip-illustrations/assets/examples/04-one-fish-many-uses.png`, `skills/visual-ip-illustrations/assets/examples/05-handoff-path.png`, `skills/visual-ip-illustrations/assets/examples/10-information-well.png`, `skills/visual-ip-illustrations/assets/examples/11-idea-press.png`, `skills/visual-ip-illustrations/assets/examples/12-content-fermentation.png`, `skills/visual-ip-illustrations/assets/examples/14-trust-bridge.png`
- Impact: Documentation and packaged skill examples can drift by filename, ordering, or content; repository size is also inflated by duplicated PNGs.
- Fix approach: Maintain one canonical image directory and generate or sync the secondary directory with a manifest that records source filename, destination filename, hash, and display title.

**Instruction duplication across files:**
- Issue: Core constraints such as 16:9, white background, small Chinese labels, non-PPT style, and non-reuse of old cases are repeated across the skill, README, style DNA, prompt template, and QA checklist.
- Files: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`, `README.md`
- Impact: Future changes to style rules require multi-file updates and can create conflicting agent behavior.
- Fix approach: Treat `skills/visual-ip-illustrations/references/style-dna.md` and `skills/visual-ip-illustrations/references/qa-checklist.md` as canonical rule sources; keep `README.md` and `skills/visual-ip-illustrations/SKILL.md` as short routing documents that point to those canonical files.

**No machine-readable asset inventory:**
- Issue: Example images are referenced by path and filename only; no manifest records purpose, canonical title, composition pattern, or anti-reuse warning.
- Files: `examples/images/`, `skills/visual-ip-illustrations/assets/examples/`, `README.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`
- Impact: Adding, renaming, or removing examples can silently break README display and weaken the anti-replication guidance.
- Fix approach: Add `examples/manifest.json` or `skills/visual-ip-illustrations/assets/examples/manifest.json` with slug, title, file path, hash, pattern category, and "do not reuse" motif notes.

## Known Bugs

**Installable skill path and README examples can drift:**
- Symptoms: Public usage examples and install instructions can remain valid while the copied subdirectory lacks expected references or assets.
- Files: `README.md`, `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/`, `skills/visual-ip-illustrations/assets/examples/`
- Trigger: Editing `README.md` examples, renaming reference files, or moving assets without a package-shape check.
- Workaround: Manually inspect `README.md` and run `find ian-xiaohei-illustrations -maxdepth 3 -type f` before publishing.

**Image-edit prompt preserves too much when text removal leaves artifacts:**
- Symptoms: The edit instruction asks the model to remove only a title and preserve everything else exactly, which can leave underlines, ghost strokes, or nearby layout problems when the original generated title overlaps useful content.
- Files: `skills/visual-ip-illustrations/references/prompt-template.md`, `examples/prompts.md`, `README.md`
- Trigger: Using the "remove top-left title" workflow on images with title text merged into paths, labels, or line art.
- Workaround: Use a more specific edit prompt that names the affected region and permits clean local reconstruction of nearby blank background or line art.

## Security Considerations

**Generated output path can overwrite workspace assets:**
- Risk: The skill instructs agents to save final images into `assets/<article-slug>-illustrations/`; slug collisions or repeated runs can overwrite valuable generated images if the agent ignores the "preserve originals" instruction.
- Files: `skills/visual-ip-illustrations/SKILL.md`, `README.md`
- Current mitigation: `skills/visual-ip-illustrations/SKILL.md` instructs agents to preserve original generated files and avoid overwriting existing assets unless explicitly requested.
- Recommendations: Require unique run directories such as `assets/<article-slug>-illustrations/YYYYMMDD-HHMM/` or add a naming rule that appends an incrementing suffix when files already exist.

**Repository static hero asset:**
- Risk: The README hero GIF is committed and distributed with the repository as a public visual entry point.
- Files: `assets/readme-hero/20260617-181124.gif`
- Current mitigation: The file is isolated under `assets/readme-hero/` and is not part of the installable skill directory.
- Recommendations: Keep this asset out of installable packages and preserve README link validation.

**Implicit invocation is broad:**
- Risk: `allow_implicit_invocation: true` plus a broad Chinese description can trigger the skill for adjacent illustration requests where the user expects a different visual style.
- Files: `skills/visual-ip-illustrations/agents/openai.yaml`, `skills/visual-ip-illustrations/SKILL.md`
- Current mitigation: The skill description names the visual style and target content categories.
- Recommendations: Narrow the implicit trigger language in `skills/visual-ip-illustrations/SKILL.md` or add explicit routing guidance for when to ask before using the Xiaohei style.

## Performance Bottlenecks

**Repository dominated by binary assets:**
- Problem: The repository is 33 MB, with `examples/images/` at 7.3 MB and `skills/visual-ip-illustrations/assets/examples/` at 13 MB.
- Files: `examples/images/`, `skills/visual-ip-illustrations/assets/examples/`
- Cause: PNG examples are committed twice in overlapping public and installable directories.
- Improvement path: Deduplicate examples, compress PNGs where quality allows, and add an asset-size check for newly added images.

**Large prompt context can reduce skill reliability:**
- Problem: The skill references five guidance files and multiple examples; loading too many references can crowd out the user's article content.
- Files: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/references/prompt-template.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`
- Cause: Guidance is split by topic but repeated enough that agents may read multiple overlapping files for routine tasks.
- Improvement path: Create a compact default path in `skills/visual-ip-illustrations/SKILL.md` for normal generation and reserve deeper references for correction, editing, or style drift cases.

## Fragile Areas

**Visual quality depends on subjective manual QA:**
- Files: `skills/visual-ip-illustrations/references/qa-checklist.md`, `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`
- Why fragile: The checklist uses qualitative criteria such as "怪诞", "有创意", "太 PPT", and "小黑承担核心动作"; different agents can apply these thresholds inconsistently.
- Safe modification: Add concrete pass/fail examples and a short scoring rubric in `skills/visual-ip-illustrations/references/qa-checklist.md` for layout, text, style, and Xiaohei participation.
- Test coverage: No automated or snapshot-based quality checks are present.

**Anti-replication rules rely on memory of listed motifs:**
- Files: `skills/visual-ip-illustrations/references/composition-patterns.md`, `skills/visual-ip-illustrations/assets/examples/`
- Why fragile: The rule lists old compositions by natural language; new examples can be added without updating the anti-reuse list.
- Safe modification: Store motif metadata with each example and require new example PRs to include an anti-reuse note.
- Test coverage: No check verifies that each example has a matching anti-reuse description.

**Prompt template contains mixed-language constraints:**
- Files: `skills/visual-ip-illustrations/references/prompt-template.md`
- Why fragile: English generation instructions include Chinese terms and labels; image models may inconsistently follow the Chinese label limits, title ban, and style keywords.
- Safe modification: Keep the template bilingual where needed, but group hard constraints into short imperative lines and keep label examples in Chinese only.
- Test coverage: No prompt regression set exists for common cases such as workflow, concept metaphor, title removal, and "make Xiaohei central".

**Install package boundary is implicit:**
- Files: `README.md`, `skills/visual-ip-illustrations/`, `examples/`, `assets/`
- Why fragile: The root repository includes docs, public images, and personal/contact assets, while only `skills/visual-ip-illustrations/` is installed into Codex skills.
- Safe modification: Add a package manifest or release script that copies exactly the installable directory and validates that no root-only assets are required at runtime.
- Test coverage: No install smoke test verifies the skill works after copying only `skills/visual-ip-illustrations/`.

## Scaling Limits

**Shot-list defaults cap long-form coverage:**
- Current capacity: `skills/visual-ip-illustrations/SKILL.md` recommends 4-8 images by default, 1-3 for short articles, and up to 9 for long articles.
- Limit: Very long articles, multi-section guides, and serialized posts may need a hierarchy of primary images and optional supporting images.
- Scaling path: Add a long-form mode that groups candidate images by section and marks priority tiers while preserving the default 4-8 image behavior for normal articles.

**Example set can encourage style convergence:**
- Current capacity: `skills/visual-ip-illustrations/assets/examples/` contains 14 installable examples and `examples/images/` contains 8 public examples.
- Limit: Repeated use of a small set of examples can bias agents toward recurring motifs despite anti-reuse instructions.
- Scaling path: Rotate examples by category, add negative motif metadata, and keep default generation paths away from image examples unless a calibration task requires them.

## Dependencies at Risk

**Platform-specific image generation dependency:**
- Risk: The skill assumes an available built-in `image_gen` capability and does not define a fallback for environments without that tool.
- Impact: Agents can produce shot lists but cannot complete "generate images" requests in runtimes that lack image generation.
- Migration plan: Add a fallback section in `skills/visual-ip-illustrations/SKILL.md` that instructs agents to deliver finalized prompts and file naming plan when direct image generation is unavailable.

**Codex skill metadata compatibility:**
- Risk: The repository depends on Codex skill frontmatter and `agents/openai.yaml` behavior.
- Impact: Changes in skill packaging, implicit invocation rules, or agent config schema can make the skill harder to discover or invoke.
- Migration plan: Add a minimal schema validation check for `skills/visual-ip-illustrations/SKILL.md` and `skills/visual-ip-illustrations/agents/openai.yaml`, and keep README install instructions version-agnostic.

## Missing Critical Features

**No validation command:**
- Problem: There is no single command to verify package integrity, required references, asset links, or prompt-template placeholders.
- Blocks: Reliable publishing, safe refactors, and quick review of incoming changes.

**No release/package workflow:**
- Problem: The installable unit is a subdirectory, but the repo has no script that packages or verifies only `skills/visual-ip-illustrations/`.
- Blocks: Confident distribution through Codex skills directories or plugin packaging.

**No artifact naming collision protection:**
- Problem: Generated images are saved under a predictable article slug and numbered filenames.
- Blocks: Repeatable multi-run generation where prior outputs must remain preserved.

**No structured prompt regression examples:**
- Problem: The repo has prose examples in `examples/prompts.md` but no expected output criteria per prompt type.
- Blocks: Measuring whether edits improve or degrade generation behavior across common use cases.

## Test Coverage Gaps

**Package integrity:**
- What's not tested: Skill frontmatter, `agents/openai.yaml`, required reference file existence, and installable directory completeness.
- Files: `skills/visual-ip-illustrations/SKILL.md`, `skills/visual-ip-illustrations/agents/openai.yaml`, `skills/visual-ip-illustrations/references/`
- Risk: A rename or deletion breaks installed skill behavior.
- Priority: High

**Documentation links and image references:**
- What's not tested: README image links, examples prompt references, and duplicate example mapping.
- Files: `README.md`, `examples/prompts.md`, `examples/images/`, `skills/visual-ip-illustrations/assets/examples/`
- Risk: Public docs show broken images or stale usage examples.
- Priority: Medium

**Prompt template constraints:**
- What's not tested: Required phrases, placeholder names, label-count limits, title-ban rules, and image-edit prompt completeness.
- Files: `skills/visual-ip-illustrations/references/prompt-template.md`
- Risk: Prompt edits degrade output style or omit critical constraints.
- Priority: High

**QA checklist coverage:**
- What's not tested: Whether each style rule in `skills/visual-ip-illustrations/references/style-dna.md` and `skills/visual-ip-illustrations/references/xiaohei-ip.md` is represented in `skills/visual-ip-illustrations/references/qa-checklist.md`.
- Files: `skills/visual-ip-illustrations/references/style-dna.md`, `skills/visual-ip-illustrations/references/xiaohei-ip.md`, `skills/visual-ip-illustrations/references/qa-checklist.md`
- Risk: QA misses style drift after rule changes.
- Priority: Medium

---

*Concerns audit: 2026-06-12*
