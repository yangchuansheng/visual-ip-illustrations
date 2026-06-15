# Quick Plan: Add README Multilingual Variant

Quick id: 260615-maz
Date: 2026-06-15
Status: planned

## Problem

The repository currently has only the English source README. The requested outcome is a multilingual README setup using the `readme-i18n` skill: keep `README.md` as the source of truth, add a localized sibling, and wire both files with a deterministic language selector.

## Context Read

- `AGENTS.md`
- `.planning/STATE.md`
- `README.md`
- `LANGUAGE_POLICY.md`
- `/Users/longnv/.agents/skills/readme-i18n/SKILL.md`
- `/Users/longnv/.agents/skills/readme-i18n/references/preservation-checklist.md`
- `/Users/longnv/.agents/skills/readme-i18n/references/language-selector-reference.md`

## Scope

- Add `README.zh.md` as the Chinese sibling because the repository has no existing multilingual pattern and the project already keeps Chinese compatibility surfaces.
- Keep root `README.md` as the English source-of-truth and English-default public surface.
- Add exactly one `README-I18N` selector block to `README.md` and `README.zh.md`.
- Preserve commands, file paths, code fences, image URLs, route ids, statuses, package names, invocation names, and validation tokens.
- Do not change skill runtime behavior, route references, examples, validation scripts, or legal attribution files unless validation exposes a direct README-i18n breakage.

## Tasks

### Task 1: Add Language Selector and Chinese README

Files: `README.md`, `README.zh.md`

Action:

- Insert the language selector after the title and opening quote block in `README.md`.
- Create `README.zh.md` with the same section order and Markdown structure.
- Translate prose into Simplified Chinese while preserving literal repo tokens and fenced code blocks.
- Keep selector labels as `English` and `Chinese` so the English source README remains inside the English-default scan boundary.

Verify:

```bash
node -e "const fs=require('fs');const files=['README.md','README.zh.md'];const texts=Object.fromEntries(files.map(f=>[f,fs.readFileSync(f,'utf8')]));for(const f of files){const start=(texts[f].match(/README-I18N:START/g)||[]).length;const end=(texts[f].match(/README-I18N:END/g)||[]).length;if(start!==1||end!==1) throw new Error(f+' selector count mismatch');}const fenceCounts=files.map(f=>(texts[f].match(/```/g)||[]).length);if(new Set(fenceCounts).size!==1) throw new Error('code fence counts differ: '+fenceCounts.join(','));for(const f of files){for(const match of texts[f].matchAll(/\]\(([^)]+)\)/g)){const target=match[1];if(/^(https?:|mailto:|#)/.test(target)) continue;const clean=target.split('#')[0];if(!clean) continue;const resolved=require('path').normalize(require('path').join(require('path').dirname(f),clean));if(resolved.startsWith('..')||require('path').isAbsolute(resolved)) throw new Error(f+' link escapes repo: '+target);if(!fs.existsSync(resolved)) throw new Error(f+' missing local link: '+target);}}console.log('README i18n structure verified');"
```

Done: both README variants have one selector, matching code fence counts, valid local links, and no unresolved same-file anchors.

### Task 2: Run Existing Package Validation

Files: `README.md`, `README.zh.md`

Action: Run the existing package validator, Node tests, and whitespace check.

Verify:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Done: existing validator and test suite pass with the multilingual README additions.

### Task 3: Commit Implementation and GSD Records

Files: `README.md`, `README.zh.md`, `.planning/quick/260615-maz-readme-i18n-readme/260615-maz-SUMMARY.md`, `.planning/STATE.md`

Action: Commit the README implementation first, then create the quick-task summary and update `.planning/STATE.md` in a second docs commit.

Verify:

```bash
git status --short
git log -2 --pretty='%h %s'
```

Done: implementation and GSD bookkeeping are committed separately with English Angular-style messages.

## Acceptance Criteria

- `README.md` remains the canonical English source.
- `README.zh.md` exists and mirrors `README.md` structure.
- Each README variant contains exactly one `README-I18N` selector block.
- Code fence counts match between README variants.
- Local links and same-file anchors resolve.
- Existing validation commands pass:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```
