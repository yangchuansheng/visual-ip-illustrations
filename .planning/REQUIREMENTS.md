# Requirements: Language-Neutral Skill Cleanup

**Defined:** 2026-06-17
**Core Value:** Users can choose a visual IP and receive article illustrations whose character, style rules, prompts, QA gates, and saved outputs stay consistent with that IP.

## v1.9 Requirements

### Runtime Language Scope

- [x] **LANG-01**: User can inspect `skills/visual-ip-illustrations/SKILL.md` and see language-neutral article-illustration scope in frontmatter, workflow, generation markers, and QA wording.
- [x] **LANG-02**: User can still request Chinese aliases, Chinese placeholders, and Chinese visible labels through approved compatibility surfaces after the language-neutral cleanup.
- [x] **LANG-03**: User can read Xiaohei runtime guidance that treats visible labels as user-language labels rather than Chinese-only labels.

### Xiaohei Pack Cleanup

- [x] **XH-01**: User can read Xiaohei style, prompt, IP, and QA references without seeing Xiaohei defined as a Chinese-only article-illustration route.
- [x] **XH-02**: Maintainer can confirm legacy root compatibility references match the updated Xiaohei canonical pack bodies.
- [x] **XH-03**: User can keep approved Chinese placeholders and legacy Xiaohei markers for compatibility while surrounding prose stays English-default and language-neutral.

### Policy and Attribution Cleanup

- [x] **POL-01**: Maintainer can read LANGUAGE_POLICY and see approved multilingual exceptions named as localized examples and compatibility behavior rather than Chinese-only skill scope.
- [x] **POL-02**: Maintainer can read RELEASE_CHECKLIST and see language validation gates that preserve Chinese aliases and localized article workflow compatibility.
- [x] **POL-03**: User can read NOTICE attribution for Xiaohei without the route being described as limited to Chinese article illustrations.

### Validation Hardening

- [x] **VAL-01**: Validator fails when `SKILL.md` frontmatter or `agents/openai.yaml` metadata reintroduces Chinese-only article scope.
- [x] **VAL-02**: Node tests cover the language-neutral frontmatter and agent metadata guards plus the updated validator count.
- [x] **VAL-03**: Full validation, Node tests, diff whitespace check, and targeted residual-language scans pass after the cleanup.

## Future Requirements

### Localization

- **LOC-01**: Maintainer can generate route prompt examples in multiple user languages from a shared source of truth.
- **LOC-02**: Maintainer can audit localized README variants against source README changes through a dedicated localized-docs validator.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Removing Chinese aliases | Aliases are compatibility behavior. |
| Removing approved Chinese placeholders | Existing Xiaohei prompt templates and smoke paths depend on these placeholders. |
| Removing localized README variants | Localized docs are public distribution surfaces. |
| Forcing visible labels into English | Labels follow the user's requested language. |
| Changing visual IP behavior | This milestone only cleans language scope and validation wording. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| LANG-01 | Phase 43 | Complete |
| LANG-02 | Phase 43 | Complete |
| LANG-03 | Phase 43 | Complete |
| XH-01 | Phase 43 | Complete |
| XH-02 | Phase 43 | Complete |
| XH-03 | Phase 43 | Complete |
| POL-01 | Phase 44 | Complete |
| POL-02 | Phase 44 | Complete |
| POL-03 | Phase 44 | Complete |
| VAL-01 | Phase 44 | Complete |
| VAL-02 | Phase 44 | Complete |
| VAL-03 | Phase 44 | Complete |

**Coverage:**

- v1.9 requirements: 12 total
- Mapped to phases: 12
- Unmapped: 0

---
*Requirements defined: 2026-06-17*
*Last updated: 2026-06-17 after completing v1.9 Language-Neutral Skill Cleanup*
