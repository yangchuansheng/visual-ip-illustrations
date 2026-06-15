# Quick Plan: Add Expanded README Translations

Quick id: 260615-mpv
Date: 2026-06-15
Status: complete

## Problem

The repository currently has English and Simplified Chinese README variants. The requested outcome is to expand the README language set to Spanish, Portuguese, German, French, Simplified Chinese, Traditional Chinese, Korean, Japanese, Arabic, Russian, Ukrainian, and Turkish, while preserving the source README mechanics and existing validation gates.

## Context Read

- `README.md`
- `README.zh.md`
- `LANGUAGE_POLICY.md`
- `scripts/validate-skill-package.mjs`
- `scripts/validate-skill-package.test.mjs`
- `.planning/STATE.md`
- `/Users/longnv/.agents/skills/readme-i18n/SKILL.md`
- `/Users/longnv/.agents/skills/readme-i18n/references/preservation-checklist.md`
- `/Users/longnv/.agents/skills/readme-i18n/references/language-selector-reference.md`

## Scope

- Keep `README.md` as the English source-of-truth.
- Keep `README.zh.md` as Simplified Chinese.
- Add siblings:
  - `README.es.md`
  - `README.pt.md`
  - `README.de.md`
  - `README.fr.md`
  - `README.zh-Hant.md`
  - `README.ko.md`
  - `README.ja.md`
  - `README.ar.md`
  - `README.ru.md`
  - `README.uk.md`
  - `README.tr.md`
- Update exactly one `README-I18N` selector block in every README variant.
- Preserve commands, file paths, image links, code fences, route ids, route statuses, output path markers, package names, invocation names, and validation commands.
- Add a narrow language-policy and validator exception for README selector labels that contain Han characters in `README.md`.
- Do not change runtime skill routing, prompt behavior, examples, NOTICE, release checklist, or route-local reference files.

## Tasks

### Task 1: Generate README Variants and Selectors

Files: `README*.md`

Action:

- Update `README.md` and every localized sibling with a shared selector in this order:
  `English`, `Español`, `Português`, `Deutsch`, `Français`, `简体中文`, `繁體中文`, `한국어`, `日本語`, `العربية`, `Русский`, `Українська`, `Türkçe`.
- Generate localized README files with matching section order and fenced code blocks.
- Update directory trees in every README variant to list all README siblings.

Verify:

```bash
node -e 'const fs=require("fs");const path=require("path");const files=["README.md","README.es.md","README.pt.md","README.de.md","README.fr.md","README.zh.md","README.zh-Hant.md","README.ko.md","README.ja.md","README.ar.md","README.ru.md","README.uk.md","README.tr.md"];const counts=[];for(const f of files){const s=fs.readFileSync(f,"utf8");const starts=(s.match(/README-I18N:START/g)||[]).length;const ends=(s.match(/README-I18N:END/g)||[]).length;if(starts!==1||ends!==1) throw new Error(`${f} selector count ${starts}/${ends}`);counts.push((s.match(/```/g)||[]).length);for(const m of s.matchAll(/\]\(([^)]+)\)/g)){const target=m[1];if(/^(https?:|mailto:|#)/.test(target)) continue;const clean=target.split("#")[0];if(!clean) continue;const resolved=path.normalize(path.join(path.dirname(f),clean));if(resolved.startsWith("..")||path.isAbsolute(resolved)||!fs.existsSync(resolved)) throw new Error(`${f} bad local link ${target}`);}}if(new Set(counts).size!==1) throw new Error(`code fence counts differ: ${counts.join(",")}`);console.log("README i18n variants verified");'
```

Done: every variant has one selector, identical code fence counts, and resolvable local links.

### Task 2: Preserve English-Default Validation

Files: `LANGUAGE_POLICY.md`, `scripts/validate-skill-package.mjs`

Action:

- Add `README language selector labels` as a narrow approved multilingual exception category.
- Allow only the Han selector labels in root `README.md` that are required by the language switcher.

Verify:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Done: existing validator and test suite pass after expanded README selectors.

### Task 3: Commit Implementation and GSD Records

Files: `README*.md`, `LANGUAGE_POLICY.md`, `scripts/validate-skill-package.mjs`, `.planning/STATE.md`, `.planning/quick/260615-mpv-add-readme-translations-for-spanish-port/260615-mpv-SUMMARY.md`

Action: Commit implementation first, then record the quick task summary and update `.planning/STATE.md` in a separate docs commit.

Verify:

```bash
git status --short
git log -2 --pretty='%h %s'
```

Done: implementation and GSD bookkeeping are committed separately with English Angular-style messages.

## Acceptance Criteria

- All requested language variants exist.
- `README.md` remains the canonical English source.
- Each README variant has one shared selector block.
- Code fence counts match across all README variants.
- Local links resolve across all README variants.
- Package validator, Node tests, and whitespace checks pass.
