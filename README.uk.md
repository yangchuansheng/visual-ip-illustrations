# Visual IP Illustrations

> Visual IP Illustrations — це multi-visual-IP Codex Skill для ілюстрацій у тілі статей. Xiaohei є неявним маршрутом за замовчуванням; Littlebox явний і active; Tom явний protected-character маршрут зі статусом `gated-authorized`; Ferris явний Rust-community mascot маршрут зі статусом `source-reviewed`; Seal явний product-neutral hoodie seal маршрут зі статусом `active`; OpenClaw є явним logo-mascot маршрутом зі статусом `source-reviewed`. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 горизонтально | кілька візуальних IP | ілюстрації для статей | Канонічний виклик: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | **Українська** | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## Що це за репозиторій

Visual IP Illustrations допомагає AI agent створювати ілюстрації для статей, постів, блогів, документів Notion і методологічних текстів.

Skill читає когнітивний якір вихідного тексту і перетворює судження, workflow, структуру, стан або метафору на запам’ятовуване рукописне пояснювальне зображення 16:9.

Поточний список маршрутів:

- **Xiaohei**: implicit default route. Коли користувач пропускає visual IP, skill використовує Xiaohei і зберігає hand-drawn article illustration experience на білому фоні.
- **Littlebox**: explicit active route. Запити з `小盒`, `Littlebox`, `纸盒`, `paper-box` або `carton` використовують route Littlebox.
- **Tom**: explicit protected-character route. Запити з `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` або `汤姆猫` використовують route Tom.
- **Ferris**: explicit Rust-community mascot route. Запити з `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` або `Rust 螃蟹` використовують route Ferris.
- **Seal**: explicit product-neutral hoodie seal route. Запити з `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` або `蓝色连帽衫海豹` використовують route Seal.
- **OpenClaw**: explicit logo-mascot route with status `source-reviewed`. Requests that name `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, or the OpenClaw aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the OpenClaw route.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the Go Gopher route.

Ключова цінність: користувачі можуть вибрати візуальний IP і отримати assets для ілюстрацій статей, де персонаж, правила стилю, prompts, QA gates, збережені outputs, attribution, source context і brand boundary узгоджені з цим IP.

Публічна ідентичність Release 1.4 використовує `Visual IP Illustrations`, канонічний slug локального checkout `visual-ip-illustrations` і канонічний виклик `$visual-ip-illustrations`. Поверхні сумісності залишаються стабільними: встановлюваний каталог `skills/visual-ip-illustrations/`, legacy alias `$ian-xiaohei-illustrations`, наявні source paths `skills/visual-ip-illustrations/`, route behavior, output directories і validator markers.

---

## Для кого він

- Автори, яким потрібні ілюстрації в тілі статті для концептів.
- Продуктові мислителі й автори методик, яким потрібні зрозумілі візуальні метафори.
- Автори AI workflows, яким потрібні reusable visual language prompts.
- Користувачі Codex, яким потрібен стабільний multi-IP skill package.

## Результати

- Shot list із 4-8 зображень для статті.
- Для кожного зображення: placement, theme, core idea, structure type, character action і suggested visible labels.
- Фінальні PNG-зображення.
- Xiaohei outputs зберігаються у workspace path `assets/<article-slug>-illustrations/`.
- Littlebox outputs зберігаються у workspace path `assets/<article-slug>-littlebox/`.
- Tom outputs зберігаються у workspace path `assets/<article-slug>-tom/`.
- Ferris outputs зберігаються у workspace path `assets/<article-slug>-ferris/`.
- Seal outputs зберігаються у workspace path `assets/<article-slug>-seal/`.
- OpenClaw записує output у workspace path `assets/<article-slug>-openclaw/`.
- Go Gopher outputs to workspace path `assets/<article-slug>-gopher/`.

Docs validation також зберігає HTML-escaped route markers: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/` і `assets/&lt;article-slug&gt;-openclaw/`.
Docs validation also keeps Go Gopher escaped marker: `assets/&lt;article-slug&gt;-gopher/`.

---

## Маршрути візуальних IP

### Xiaohei

Xiaohei — маршрут за замовчуванням: суцільна чорна фігура з очима-крапками, тонкими ногами й нейтральним виразом активно виконує дивну, але читабельну когнітивну дію на чистому білому фоні. Підходить для суджень, workflows, точок розриву, пасток, шляхів передачі й локальних видів систем.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox — явний маршрут: персонаж закритої паперової коробки з грубими чорними marker lines, блідо-блакитним або блідо-лавандовим фоном, бурштиновою стрічкою і рідкими coral accents. Перекладає когнітивну дію в збирання, пакування, сортування, доставку, блокування або ремонт.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom — явний protected-character route: відомий синьо-сірий кіт несе концепт статті через активну комічну дію в межах rights boundary маршруту. Підходить для логіки переслідування, пасток, невдалих shortcuts, крихких планів, розворотів, timing problems і cartoon-style cause-effect sequences.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris — явний Rust-community mascot route: компактний помаранчевий crab mascot виконує центральну когнітивну дію, обережно будуючи, сортуючи, захищаючи, піднімаючи, з’єднуючи або ремонтуючи. Підходить для systems thinking, reliability, ownership, compile-like flows, tradeoff review, boundary checks і low-tech Rust object metaphors.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal — явний product-neutral hoodie seal route: округлий білий тюлень у plain navy cap і plain deep-blue hoodie виконує центральне судження, sequence, handoff, comparison або repair статті. Підходить для review, prioritization, source-history awareness, logo-free scenes і low-tech article metaphors.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw є явним logo-mascot маршрутом: офіційний червоний круглий персонаж логотипа OpenClaw передає одну ідею статті через дружні дії перевірки, утримання, мосту, сортування, підняття або сигналу. Він добре підходить для ясності workflow, перевірок сумісності, координації моделі/інструмента, review gates і метафор source-reviewed проєктів.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, а також aliases OpenClaw з `skills/visual-ip-illustrations/references/routing.md`.

### Go Gopher

Go Gopher is an explicit source-reviewed article-illustration mascot route: the Go language mascot from root `gopher.png` carries one article concept through sparse, hand-drawn cognitive actions while preserving the Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, Go logo boundary, official endorsement boundary, and public sample gate.

Aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, plus Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md`.

### Довідник маршрутів

Maintainers можуть переглянути route metadata fields у `skills/visual-ip-illustrations/references/routing.md`: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` і `status`.

Канонічні packs:

- Xiaohei: `skills/visual-ip-illustrations/references/ips/xiaohei/`
- Littlebox: `skills/visual-ip-illustrations/references/ips/littlebox/`
- Tom: `skills/visual-ip-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`
- Ferris: `skills/visual-ip-illustrations/references/ips/ferris/`, source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`
- Seal: `skills/visual-ip-illustrations/references/ips/seal/`, source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`
- OpenClaw: `skills/visual-ip-illustrations/references/ips/openclaw/`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`
- Go Gopher: `skills/visual-ip-illustrations/references/ips/gopher/`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`

Коли запит просить кілька visual IPs, доставляйте окремі variant groups і записуйте кожну групу у власний output directory.

Операційні дані маршруту:

- Tom: status `gated-authorized`; rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.
- Go Gopher: route id `gopher`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`; output path `assets/<article-slug>-gopher/`; docs validation token `assets/&lt;article-slug&gt;-gopher/`; output suffix `gopher`; local visual authority root `gopher.png`; attribution Renee French; license boundary Creative Commons Attribution 4.0; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Phase 42 Go Gopher release evidence; Go logo boundary and official endorsement boundary stay attached.

---

## Галерея прикладів

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

## Встановлення

```bash
git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./skills/visual-ip-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Після встановлення надавайте перевагу `$visual-ip-illustrations` у Codex.

Сумісність Release 1.4:

- Canonical public invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Installable skill package directory: `skills/visual-ip-illustrations/`
- Current live repository remote: `https://github.com/yangchuansheng/visual-ip-illustrations.git`
- Local checkout target directory: `visual-ip-illustrations`
- Route behavior і output directories залишаються стабільними на обох invocation surfaces.

---

## Швидкі приклади

`{visual IP}` може бути `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw`, `Go Gopher` або підтримуваним alias. Якщо visual IP пропущено, вибирається Xiaohei.

### Спланувати shot list

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Згенерувати ілюстрації для тіла статті

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Одна ідея

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### Порівняння IP

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Маршрути protected-character, source-reviewed і active source-history автоматично несуть route status, source/rights note, release gate і specific output directory; OpenClaw несе source/license authority, uploaded-logo identity, public-sample gate і `assets/<article-slug>-openclaw/`.

Більше копійованих прикладів є в [examples/prompts.md](examples/prompts.md).

---

## Робочий процес

1. Прочитайте article, Markdown, Notion content, screenshot або тему, надану користувачем.
2. Виберіть visual IP: пропущена IP вибирає Xiaohei; явний Littlebox вибирає Littlebox; aliases Tom вибирають Tom protected-character route; aliases Ferris вибирають Ferris source-reviewed pack; aliases Seal вибирають active Seal pack; aliases OpenClaw вибирають OpenClaw source-reviewed pack. Explicit Go Gopher aliases select the Go Gopher source-reviewed pack.
3. Витягніть core claims, cognitive turns, workflow structures і visualizable paragraphs.
4. Спершу створіть shot list; кожне зображення отримує один cognitive anchor.
5. Виберіть один structure type для кожного зображення: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route або comic panels.
6. Завантажте canonical pack вибраної IP, зберіть prompts і генеруйте зображення по одному. Mixed-IP requests створюють окремі route groups і output directories, а Xiaohei, Littlebox, Tom, Ferris і Seal зберігають свої route-local references; OpenClaw також зберігає route-local references. Go Gopher plans keep the Go language mascot action-centered and route-local.
7. Перевірте character identity, composition, background, labels і output path за QA checklist вибраної IP. Tom зберігає `gated-authorized` і `skills/visual-ip-illustrations/references/ips/tom/rights.md`; Ferris зберігає `source-reviewed`, source/trademark note і `skills/visual-ip-illustrations/references/ips/ferris/source.md`; Seal зберігає `active`, source-history authority, hoodie seal identity note, logo-free note і `skills/visual-ip-illustrations/references/ips/seal/source.md`; OpenClaw зберігає `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate і `skills/visual-ip-illustrations/references/ips/openclaw/source.md`. Go Gopher keeps `source-reviewed`, source/license authority, root `gopher.png`, public-sample gate, and `references/ips/gopher/source.md` in the delivery notes.
8. Збережіть фінальні PNG і повідомте purpose plus path.

---

## Структура каталогів

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

Ціль встановлення Codex — цей підкаталог:

```text
skills/visual-ip-illustrations/
```

Root README, LICENSE, NOTICE і examples — це GitHub distribution docs.

---

## Перевірка для мейнтейнерів

```bash
node scripts/validate-skill-package.mjs
```

Validation покриває skill package shape, route table, canonical packs Xiaohei, Littlebox, Tom, Ferris і Seal, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note і Phase 32 full validator restoration evidence.

Validation також покриває OpenClaw canonical pack markers, OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note і Phase 37 final release evidence.
Validation also covers Go Gopher canonical pack markers, Go Gopher `source-reviewed` route markers, source/license authority, root `gopher.png`, public sample gate, Phase 42 final release evidence, and Go Gopher validator checks.

Поточні validation commands для maintainers:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Pre-release checks містяться в [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).

---

---

## Ліцензія

MIT License. Див. [LICENSE](LICENSE).