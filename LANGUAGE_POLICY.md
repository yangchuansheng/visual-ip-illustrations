# Language Policy

This file is the canonical English-default language authority for Visual IP Illustrations. Repository docs and release surfaces should reference this file instead of duplicating the policy.

## Default Language

English is the default for every maintainer-facing and public repository surface:

- repository docs
- skill instructions
- reference docs
- examples
- release materials
- validation output
- code
- scripts
- comments
- commit messages
- PR copy

## Approved Multilingual Exceptions

Approved multilingual content is limited to compatibility and user-output surfaces that carry product behavior:

- route aliases, including exact Chinese aliases such as `小黑`, `小盒`, `纸盒`, `汤姆`, `汤姆猫`, `Rust 吉祥物`, `Rust 螃蟹`, `Sealos 吉祥物`, and `Sealos 海豹`
- user-language visible labels copied into generated-image prompts or delivery text
- prompt placeholders such as `{正文配图主题}`, `{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}`, and `{标注词1}`
- attribution/source names that must remain exact for source, rights, brand, copyright, trademark, or author records
- compatibility smoke fixtures that prove legacy Chinese aliases and route behavior still work
- Chinese article illustration examples that intentionally model Chinese article-body labels or user requests
- README language selector labels that link localized README siblings

## Allowlist Entry Shape

Each residual-language allowlist entry must stay narrow and auditable:

- category: one approved category from this policy
- path scope: one exact file path or a bounded set of route-local files
- exact token or anchored pattern: one literal token or a pattern anchored to the specific compatibility text
- rationale: why the token remains product behavior or source authority
- remediation target: the future file, phase, or action that removes stale prose or preserves the intentional token

Whole-file and whole-directory exemptions are reserved for generated binary assets and image files. Markdown prose, YAML metadata, scripts, tests, and release docs use token-level or anchored-pattern allowlist entries.

## Residual Chinese Scan Contract

The residual scan reports Han-character findings as either approved multilingual tokens or stale Chinese prose.

Each formatted finding includes:

- status
- category
- `path:line`
- token or excerpt
- remediation target

Production validation may run in report mode during the Phase 26 and Phase 27 prose migration window. Controlled fixtures and final migration gates use enforce mode to fail stale Chinese prose outside the allowlist.

## Compatibility Surfaces

The language migration preserves these compatibility surfaces:

- canonical invocation `$visual-ip-illustrations`
- legacy invocation `$ian-xiaohei-illustrations`
- route ids: `xiaohei`, `littlebox`, `tom`, `ferris`, and `sealos`
- route aliases, including Chinese aliases listed in `skills/visual-ip-illustrations/references/routing.md`
- default flags, with Xiaohei as the omitted-IP default
- output suffixes: `illustrations`, `littlebox`, `tom`, `ferris`, and `sealos`
- output paths: `assets/<article-slug>-illustrations/`, `assets/<article-slug>-littlebox/`, `assets/<article-slug>-tom/`, `assets/<article-slug>-ferris/`, and `assets/<article-slug>-sealos/`
- escaped output path markers used by docs validation
- required references listed in the route table
- source, rights, and brand records
- QA gates and route-local failure categories
- user-language visible-label behavior

Xiaohei remains the omitted-IP default. Littlebox, Tom, Ferris, and Sealos Seal remain explicit selectable routes.

Route-local authority remains isolated:

- Tom rights stay in `skills/visual-ip-illustrations/references/ips/tom/rights.md`
- Ferris source/trademark authority stays in `skills/visual-ip-illustrations/references/ips/ferris/source.md`
- Sealos Seal brand/canonical-image authority stays in `skills/visual-ip-illustrations/references/ips/sealos/source.md`

## Migration Handoff

Phase 25 establishes this root policy, validator checks, and the residual scan contract.

Phase 26 migrates `SKILL.md`, routing, shared references, and route-local IP packs to English-default prose while preserving route behavior.

Phase 27 migrates README, examples, NOTICE, release checklist, and public documentation surfaces to English-default prose while preserving compatibility examples.

Phase 28 hardens the final validator matrix and release evidence so stale Chinese prose fails outside approved multilingual exceptions.
