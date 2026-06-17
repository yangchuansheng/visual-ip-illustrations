# Visual IP Illustrations

> Visual IP Illustrations는 기사 본문 일러스트를 위한 다중 비주얼 IP Codex Skill입니다. Xiaohei는 암묵적 기본 경로이고, Littlebox는 명시적 active 경로이며, Tom은 `gated-authorized` 상태의 명시적 protected-character 경로이고, Ferris는 `source-reviewed` 상태의 명시적 Rust-community mascot 경로이며, Seal은 `active` 상태의 명시적 product-neutral hoodie seal 경로입니다. OpenClaw는 `source-reviewed` 상태의 명시적 logo-mascot 경로입니다. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 가로형 | 다중 비주얼 IP | 기사 본문 일러스트 | 표준 호출: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | **한국어** | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## 이 저장소란

Visual IP Illustrations는 AI agent가 기사, 포스트, 블로그, Notion 문서, 방법론 글쓰기를 위한 본문 일러스트를 만들도록 안내합니다.

이 skill은 원문 속 인지 앵커를 읽고 하나의 판단, workflow, 구조, 상태, 은유를 기억하기 쉬운 16:9 손그림 설명 이미지로 바꿉니다.

현재 경로 목록:

- **Xiaohei**: implicit default route. 사용자가 visual IP를 생략하면 skill은 Xiaohei를 사용하고 흰 배경의 손그림 article illustration 경험을 유지합니다.
- **Littlebox**: explicit active route. `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`을 언급한 요청은 Littlebox route를 사용합니다.
- **Tom**: explicit protected-character route. `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`을 언급한 요청은 Tom route를 사용합니다.
- **Ferris**: explicit Rust-community mascot route. `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`를 언급한 요청은 Ferris route를 사용합니다.
- **Seal**: explicit product-neutral hoodie seal route. `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`를 언급한 요청은 Seal route를 사용합니다.
- **OpenClaw**: explicit logo-mascot route with status `source-reviewed`. Requests that name `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, or the OpenClaw aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the OpenClaw route.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the Go Gopher route.

핵심 가치: 사용자는 비주얼 IP를 선택하고, 캐릭터, 스타일 규칙, prompts, QA gates, 저장 출력, attribution, source context, brand boundary가 그 IP와 일관된 기사 일러스트 자산을 받을 수 있습니다.

Release 1.4의 공개 정체성은 `Visual IP Illustrations`, 로컬 checkout의 canonical slug `visual-ip-illustrations`, canonical invocation `$visual-ip-illustrations`를 사용합니다. 호환성 표면은 안정적으로 유지됩니다: 설치 가능한 디렉터리 `skills/visual-ip-illustrations/`, legacy alias `$ian-xiaohei-illustrations`, 기존 source path `skills/visual-ip-illustrations/`, route behavior, output directories, validator markers.

---

## 대상 사용자

- 글의 개념을 설명할 본문 일러스트가 필요한 작성자.
- 명확한 시각 은유가 필요한 제품 사상가와 방법론 작성자.
- 재사용 가능한 visual language prompts가 필요한 AI workflow 작성자.
- 안정적인 multi-IP skill package를 원하는 Codex 사용자.

## 출력

- 글 하나를 위한 4-8장 이미지 shot list.
- 각 이미지: placement, theme, core idea, structure type, character action, suggested visible labels.
- 최종 PNG 이미지.
- Xiaohei outputs는 workspace path `assets/<article-slug>-illustrations/`에 저장됩니다.
- Littlebox outputs는 workspace path `assets/<article-slug>-littlebox/`에 저장됩니다.
- Tom outputs는 workspace path `assets/<article-slug>-tom/`에 저장됩니다.
- Ferris outputs는 workspace path `assets/<article-slug>-ferris/`에 저장됩니다.
- Seal outputs는 workspace path `assets/<article-slug>-seal/`에 저장됩니다.
- OpenClaw는 workspace path `assets/<article-slug>-openclaw/`에 출력합니다.
- Go Gopher outputs to workspace path `assets/<article-slug>-gopher/`.

Docs validation은 HTML escaped route markers도 보존합니다: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/`, `assets/&lt;article-slug&gt;-openclaw/`를 보존합니다.
Docs validation also keeps Go Gopher escaped marker: `assets/&lt;article-slug&gt;-gopher/`.

---

## 비주얼 IP 경로

### Xiaohei

Xiaohei는 기본 route입니다. 점 눈, 가는 다리, 중립적 표정을 가진 검은 실루엣이 순백 배경에서 이상하지만 읽기 쉬운 인지 행동을 수행합니다. 판단, workflow, breakpoint, trap, handoff path, system local view에 잘 맞습니다.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox는 명시 route입니다. 닫힌 종이상자 캐릭터가 거친 검은 marker line, 옅은 하늘색 또는 옅은 라벤더 배경, amber tape, sparse coral accent를 사용합니다. 인지 행동을 모으기, 포장하기, 정렬하기, 전달하기, 막기, 수리하기로 번역합니다.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom은 명시 protected-character route입니다. 익숙한 blue-gray cat이 route의 rights boundary 안에서 적극적인 코믹 행동으로 글의 개념을 전달합니다. chase logic, trap, failed shortcut, fragile plan, reversal, timing problem, cartoon-style cause-effect sequence에 잘 맞습니다.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris는 명시 Rust-community mascot route입니다. 작은 orange crab mascot이 조심스럽게 만들고, 정렬하고, 보호하고, 들어 올리고, 연결하고, 수리하며 중심 인지 행동을 수행합니다. systems thinking, reliability, ownership, compile-like flow, tradeoff review, boundary check, low-tech Rust object metaphor에 잘 맞습니다.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal은 명시 product-neutral hoodie seal route입니다. 둥근 흰색 물범이 plain navy cap과 plain deep-blue hoodie를 입고 글의 중심 판단, sequence, handoff, comparison, repair를 수행합니다. review, prioritization, source-history awareness, logo-free scene, low-tech article metaphor에 잘 맞습니다.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw는 명시적 logo-mascot 경로입니다. 공식 빨간 원형 OpenClaw 로고 캐릭터가 친근한 점검, 들기, 다리 놓기, 정리, 들어 올리기, 신호 보내기 동작으로 하나의 기사 개념을 수행합니다. workflow clarity, compatibility checks, model/tool coordination, review gates, source-reviewed project metaphors에 잘 맞습니다.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, 그리고 `skills/visual-ip-illustrations/references/routing.md`에 listed 된 OpenClaw aliases.

### Go Gopher

Go Gopher is an explicit source-reviewed article-illustration mascot route: the Go language mascot from root `gopher.png` carries one article concept through sparse, hand-drawn cognitive actions while preserving the Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, Go logo boundary, official endorsement boundary, and public sample gate.

Aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, plus Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md`.

### 경로 참고

Maintainers는 `skills/visual-ip-illustrations/references/routing.md`에서 route metadata fields를 확인할 수 있습니다: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context`, `status`.

Canonical packs:

- Xiaohei: `skills/visual-ip-illustrations/references/ips/xiaohei/`
- Littlebox: `skills/visual-ip-illustrations/references/ips/littlebox/`
- Tom: `skills/visual-ip-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`
- Ferris: `skills/visual-ip-illustrations/references/ips/ferris/`, source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`
- Seal: `skills/visual-ip-illustrations/references/ips/seal/`, source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`
- OpenClaw: `skills/visual-ip-illustrations/references/ips/openclaw/`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`
- Go Gopher: `skills/visual-ip-illustrations/references/ips/gopher/`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`

요청이 여러 visual IP를 요구하면 variant group을 분리해 전달하고 각 그룹을 자체 output directory에 기록합니다.

Route operational data:

- Tom: status `gated-authorized`; rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.
- Go Gopher: route id `gopher`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`; output path `assets/<article-slug>-gopher/`; docs validation token `assets/&lt;article-slug&gt;-gopher/`; output suffix `gopher`; local visual authority root `gopher.png`; attribution Renee French; license boundary Creative Commons Attribution 4.0; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Phase 42 Go Gopher release evidence; Go logo boundary and official endorsement boundary stay attached.

---

## 예시 갤러리

These images are approved public English calibration examples for the current visual IP routes: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher. Each row keeps the same concept and shows how each IP translates the action through its route-local style, character rules, source boundaries, and QA gates.

### Two Breakpoints

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Two Breakpoints - Xiaohei](examples/images-en/01-two-breakpoints.png) | ![Two Breakpoints - Littlebox](examples/images-en/littlebox/01-two-breakpoints.png) | ![Two Breakpoints - Tom](examples/images-en/tom/01-two-breakpoints.png) | ![Two Breakpoints - Ferris](examples/images-en/ferris/01-two-breakpoints.png) | ![Two Breakpoints - Seal](examples/images-en/seal/01-two-breakpoints.png) | ![Two Breakpoints - OpenClaw](examples/images-en/openclaw/01-two-breakpoints.png) | ![Two Breakpoints - Go Gopher](examples/images-en/gopher/01-two-breakpoints.png) |

### Sort by Purpose

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Sort by Purpose - Xiaohei](examples/images-en/02-sort-by-purpose.png) | ![Sort by Purpose - Littlebox](examples/images-en/littlebox/02-sort-by-purpose.png) | ![Sort by Purpose - Tom](examples/images-en/tom/02-sort-by-purpose.png) | ![Sort by Purpose - Ferris](examples/images-en/ferris/02-sort-by-purpose.png) | ![Sort by Purpose - Seal](examples/images-en/seal/02-sort-by-purpose.png) | ![Sort by Purpose - OpenClaw](examples/images-en/openclaw/02-sort-by-purpose.png) | ![Sort by Purpose - Go Gopher](examples/images-en/gopher/02-sort-by-purpose.png) |

### One Fish, Many Uses

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![One Fish, Many Uses - Xiaohei](examples/images-en/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Littlebox](examples/images-en/littlebox/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Tom](examples/images-en/tom/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Ferris](examples/images-en/ferris/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Seal](examples/images-en/seal/03-one-fish-many-uses.png) | ![One Fish, Many Uses - OpenClaw](examples/images-en/openclaw/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Go Gopher](examples/images-en/gopher/03-one-fish-many-uses.png) |

### Handoff Path

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Handoff Path - Xiaohei](examples/images-en/04-handoff-path.png) | ![Handoff Path - Littlebox](examples/images-en/littlebox/04-handoff-path.png) | ![Handoff Path - Tom](examples/images-en/tom/04-handoff-path.png) | ![Handoff Path - Ferris](examples/images-en/ferris/04-handoff-path.png) | ![Handoff Path - Seal](examples/images-en/seal/04-handoff-path.png) | ![Handoff Path - OpenClaw](examples/images-en/openclaw/04-handoff-path.png) | ![Handoff Path - Go Gopher](examples/images-en/gopher/04-handoff-path.png) |

### Information Well

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Information Well - Xiaohei](examples/images-en/05-information-well.png) | ![Information Well - Littlebox](examples/images-en/littlebox/05-information-well.png) | ![Information Well - Tom](examples/images-en/tom/05-information-well.png) | ![Information Well - Ferris](examples/images-en/ferris/05-information-well.png) | ![Information Well - Seal](examples/images-en/seal/05-information-well.png) | ![Information Well - OpenClaw](examples/images-en/openclaw/05-information-well.png) | ![Information Well - Go Gopher](examples/images-en/gopher/05-information-well.png) |

### Idea Press

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Idea Press - Xiaohei](examples/images-en/06-idea-press.png) | ![Idea Press - Littlebox](examples/images-en/littlebox/06-idea-press.png) | ![Idea Press - Tom](examples/images-en/tom/06-idea-press.png) | ![Idea Press - Ferris](examples/images-en/ferris/06-idea-press.png) | ![Idea Press - Seal](examples/images-en/seal/06-idea-press.png) | ![Idea Press - OpenClaw](examples/images-en/openclaw/06-idea-press.png) | ![Idea Press - Go Gopher](examples/images-en/gopher/06-idea-press.png) |

### Content Fermentation

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Content Fermentation - Xiaohei](examples/images-en/07-content-fermentation.png) | ![Content Fermentation - Littlebox](examples/images-en/littlebox/07-content-fermentation.png) | ![Content Fermentation - Tom](examples/images-en/tom/07-content-fermentation.png) | ![Content Fermentation - Ferris](examples/images-en/ferris/07-content-fermentation.png) | ![Content Fermentation - Seal](examples/images-en/seal/07-content-fermentation.png) | ![Content Fermentation - OpenClaw](examples/images-en/openclaw/07-content-fermentation.png) | ![Content Fermentation - Go Gopher](examples/images-en/gopher/07-content-fermentation.png) |

### Trust Bridge

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Trust Bridge - Xiaohei](examples/images-en/08-trust-bridge.png) | ![Trust Bridge - Littlebox](examples/images-en/littlebox/08-trust-bridge.png) | ![Trust Bridge - Tom](examples/images-en/tom/08-trust-bridge.png) | ![Trust Bridge - Ferris](examples/images-en/ferris/08-trust-bridge.png) | ![Trust Bridge - Seal](examples/images-en/seal/08-trust-bridge.png) | ![Trust Bridge - OpenClaw](examples/images-en/openclaw/08-trust-bridge.png) | ![Trust Bridge - Go Gopher](examples/images-en/gopher/08-trust-bridge.png) |

---

## 설치

```bash
git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./skills/visual-ip-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

설치 후 Codex에서는 `$visual-ip-illustrations`를 우선 사용하세요.

Release 1.4 compatibility:

- Canonical public invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Installable skill package directory: `skills/visual-ip-illustrations/`
- Current live repository remote: `https://github.com/yangchuansheng/visual-ip-illustrations.git`
- Local checkout target directory: `visual-ip-illustrations`
- Route behavior와 output directories는 두 invocation surface에서 안정적으로 유지됩니다.

---

## 빠른 예시

`{visual IP}`는 `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw`, `Go Gopher` 또는 지원되는 별칭일 수 있습니다. 비주얼 IP를 생략하면 Xiaohei가 선택됩니다.

### Shot list 계획

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### 본문 일러스트 생성

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### 단일 아이디어

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### IP 비교

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

protected-character, source-reviewed, active source-history route는 route status, source/rights note, release gate, specific output directory를 자동으로 포함합니다; OpenClaw는 source/license authority, uploaded-logo identity, public-sample gate, `assets/<article-slug>-openclaw/`를 포함합니다.

복사 가능한 예시는 [examples/prompts.md](examples/prompts.md)에 더 있습니다.

---

## 워크플로

1. article, Markdown, Notion content, screenshot, 사용자가 제공한 topic을 읽습니다.
2. visual IP를 선택합니다: 생략된 IP는 Xiaohei를 선택합니다; explicit Littlebox는 Littlebox를 선택합니다; Tom aliases는 Tom protected-character route를 선택합니다; Ferris aliases는 Ferris source-reviewed pack을 선택합니다; Seal aliases는 active Seal pack을 선택합니다; explicit OpenClaw aliases는 OpenClaw source-reviewed pack을 선택합니다. Explicit Go Gopher aliases select the Go Gopher source-reviewed pack.
3. core claims, cognitive turns, workflow structures, visualizable paragraphs를 추출합니다.
4. 먼저 shot list를 만듭니다; 각 이미지는 하나의 cognitive anchor를 받습니다.
5. 각 이미지에 하나의 structure type을 선택합니다: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route, comic panels.
6. 선택한 IP의 canonical pack을 로드하고 prompts를 조립한 뒤 이미지를 하나씩 생성합니다. Mixed-IP requests는 separate route groups와 output directories를 만들며 Xiaohei, Littlebox, Tom, Ferris, Seal은 각각 route-local references를 유지합니다; OpenClaw도 route-local references를 유지합니다. Go Gopher plans keep the Go language mascot action-centered and route-local.
7. 선택한 IP의 QA checklist로 character identity, composition, background, labels, output path를 확인합니다. Tom은 `gated-authorized`와 `skills/visual-ip-illustrations/references/ips/tom/rights.md`를 유지합니다; Ferris는 `source-reviewed`, source/trademark note, `skills/visual-ip-illustrations/references/ips/ferris/source.md`를 유지합니다; Seal은 `active`, source-history authority, hoodie seal identity note, logo-free note, `skills/visual-ip-illustrations/references/ips/seal/source.md`를 유지합니다; OpenClaw는 `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate, `skills/visual-ip-illustrations/references/ips/openclaw/source.md`를 유지합니다. Go Gopher keeps `source-reviewed`, source/license authority, root `gopher.png`, public-sample gate, and `references/ips/gopher/source.md` in the delivery notes.
8. 최종 PNG를 저장하고 purpose와 path를 보고합니다.

---

## 디렉터리 구조

```text
.
├── README.md
├── README.es.md
├── README.pt.md
├── README.de.md
├── README.fr.md
├── README.zh.md
├── README.zh-Hant.md
├── README.ko.md
├── README.ja.md
├── README.ar.md
├── README.ru.md
├── README.uk.md
├── README.tr.md
├── LICENSE
├── NOTICE.md
├── examples/
│   ├── images/
│   │   ├── 01-two-breakpoints.png
│   │   ├── 02-sort-by-purpose.png
│   │   └── ...
│   └── prompts.md
└── skills/
    └── visual-ip-illustrations/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    ├── assets/
    │   └── examples/
    └── references/
        ├── routing.md
        ├── style-dna.md
        ├── xiaohei-ip.md
        ├── composition-patterns.md
        ├── prompt-template.md
        ├── qa-checklist.md
        └── ips/
            ├── xiaohei/
            │   ├── index.md
            │   ├── style-dna.md
            │   ├── xiaohei-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── littlebox/
            │   ├── index.md
            │   ├── style-dna.md
            │   ├── littlebox-ip.md
            │   ├── composition-patterns.md
            │   ├── language-and-labels.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── tom/
            │   ├── index.md
            │   ├── rights.md
            │   ├── style-dna.md
            │   ├── tom-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── ferris/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── ferris-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── seal/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── seal-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            ├── openclaw/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── openclaw-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            └── gopher/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── gopher-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

Codex 설치 대상은 이 하위 디렉터리입니다:

```text
skills/visual-ip-illustrations/
```

Root README, LICENSE, NOTICE, examples는 GitHub distribution docs입니다.

---

## 유지관리자 검증

```bash
node scripts/validate-skill-package.mjs
```

Validation은 skill package shape, route table, Xiaohei, Littlebox, Tom, Ferris, Seal canonical packs, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note, Phase 32 full validator restoration evidence를 다룹니다.

Validation은 OpenClaw canonical pack markers, OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note, Phase 37 final release evidence도 다룹니다.
Validation also covers Go Gopher canonical pack markers, Go Gopher `source-reviewed` route markers, source/license authority, root `gopher.png`, public sample gate, Phase 42 final release evidence, and Go Gopher validator checks.

Maintainer를 위한 현재 validation commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Pre-release checks는 [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)에 있습니다.

---

---

## 라이선스

MIT License. [LICENSE](LICENSE)를 참조하세요.