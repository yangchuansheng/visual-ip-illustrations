# Visual IP Illustrations

> Visual IP Illustrations — это multi-visual-IP Codex Skill для иллюстраций внутри статей. Xiaohei — неявный маршрут по умолчанию; Littlebox — явный и active; Tom — явный protected-character маршрут со статусом `gated-authorized`; Ferris — явный Rust-community mascot маршрут со статусом `source-reviewed`; Seal — явный product-neutral hoodie seal маршрут со статусом `active`.
>
> 16:9 горизонтально | несколько визуальных IP | иллюстрации для статей | Канонический вызов: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | **Русский** | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## Что это за репозиторий

Visual IP Illustrations помогает AI agent создавать иллюстрации для статей, постов, блогов, документов Notion и методологических текстов.

Skill читает когнитивный якорь исходного текста и превращает суждение, workflow, структуру, состояние или метафору в запоминающуюся рукописную объясняющую картинку 16:9.

Текущий список маршрутов:

- **Xiaohei**: implicit default route. Когда пользователь опускает visual IP, skill использует Xiaohei и сохраняет hand-drawn article illustration experience на белом фоне.
- **Littlebox**: explicit active route. Запросы с `小盒`, `Littlebox`, `纸盒`, `paper-box` или `carton` используют route Littlebox.
- **Tom**: explicit protected-character route. Запросы с `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` или `汤姆猫` используют route Tom.
- **Ferris**: explicit Rust-community mascot route. Запросы с `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` или `Rust 螃蟹` используют route Ferris.
- **Seal**: explicit product-neutral hoodie seal route. Запросы с `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` или `蓝色连帽衫海豹` используют route Seal.

Ключевая ценность: пользователи могут выбрать визуальный IP и получить иллюстрационные assets, где персонаж, правила стиля, prompts, QA gates, сохраненные outputs, attribution, source context и brand boundary остаются согласованными с этим IP.

Публичная идентичность Release 1.4 использует `Visual IP Illustrations`, канонический slug локального checkout `visual-ip-illustrations` и канонический вызов `$visual-ip-illustrations`. Поверхности совместимости остаются стабильными: устанавливаемый каталог `ian-xiaohei-illustrations/`, legacy alias `$ian-xiaohei-illustrations`, существующие исходные пути `ian-xiaohei-illustrations/`, поведение маршрутов, каталоги вывода и маркеры валидатора.

---

## Для кого он

- Авторы, которым нужны иллюстрации в теле статьи для концептов.
- Продуктовые мыслители и авторы методик, которым нужны ясные визуальные метафоры.
- Авторы AI workflows, которым нужны переиспользуемые prompts визуального языка.
- Пользователи Codex, которым нужен стабильный multi-IP skill package.

## Результаты

- Shot list из 4-8 изображений для статьи.
- Для каждого изображения: placement, theme, core idea, structure type, character action и suggested visible labels.
- Финальные PNG-изображения.
- Xiaohei outputs сохраняются в workspace path `assets/<article-slug>-illustrations/`.
- Littlebox outputs сохраняются в workspace path `assets/<article-slug>-littlebox/`.
- Tom outputs сохраняются в workspace path `assets/<article-slug>-tom/`.
- Ferris outputs сохраняются в workspace path `assets/<article-slug>-ferris/`.
- Seal outputs сохраняются в workspace path `assets/<article-slug>-seal/`.

Docs validation также сохраняет HTML-escaped route markers: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/` и `assets/&lt;article-slug&gt;-seal/`.

---

## Маршруты визуальных IP

### Xiaohei

Xiaohei — маршрут по умолчанию: цельная черная фигура с точечными глазами, тонкими ногами и нейтральным выражением активно выполняет странное, но читаемое когнитивное действие на чистом белом фоне. Подходит для суждений, workflows, точек разрыва, ловушек, маршрутов передачи и локальных видов систем.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox — явный маршрут: персонаж закрытой бумажной коробки с грубыми черными marker lines, бледно-голубым или бледно-лавандовым фоном, янтарной лентой и редкими coral accents. Переводит когнитивное действие в сбор, упаковку, сортировку, доставку, блокирование или ремонт.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom — явный protected-character route: известный сине-серый кот несет концепт статьи через активное комическое действие внутри rights boundary маршрута. Подходит для логики преследования, ловушек, неудачных shortcuts, хрупких планов, разворотов, timing problems и cartoon-style cause-effect sequences.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris — явный Rust-community mascot route: компактный оранжевый crab mascot выполняет центральное когнитивное действие, аккуратно строя, сортируя, защищая, поднимая, соединяя или ремонтируя. Подходит для systems thinking, reliability, ownership, compile-like flows, tradeoff review, boundary checks и low-tech Rust object metaphors.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal — явный product-neutral hoodie seal route: округлый белый тюлень в plain navy cap и plain deep-blue hoodie выполняет центральное суждение, sequence, handoff, comparison или repair статьи. Подходит для review, prioritization, source-history awareness, logo-free scenes и low-tech article metaphors.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### Справочник маршрутов

Maintainers могут проверить route metadata fields в `ian-xiaohei-illustrations/references/routing.md`: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` и `status`.

Канонические packs:

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`, source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Seal: `ian-xiaohei-illustrations/references/ips/seal/`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`

Когда запрос просит несколько visual IPs, доставляйте отдельные variant groups и записывайте каждую группу в свой output directory.

Операционные данные маршрута:

- Tom: status `gated-authorized`; rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.

---

## Галерея примеров

Эти изображения являются calibration examples для стиля Xiaohei. Используйте их, чтобы понять line density, whitespace, color restraint и character participation, затем создайте новую метафору для текущей статьи.

### Two Breakpoints

![Two Breakpoints](examples/images/01-two-breakpoints.png)

### Sort by Purpose

![Sort by Purpose](examples/images/02-sort-by-purpose.png)

### One Fish, Many Uses

![One Fish, Many Uses](examples/images/03-one-fish-many-uses.png)

### Handoff Path

![Handoff Path](examples/images/04-handoff-path.png)

### Information Well

![Information Well](examples/images/05-information-well.png)

### Idea Press

![Idea Press](examples/images/06-idea-press.png)

### Content Fermentation

![Content Fermentation](examples/images/07-content-fermentation.png)

### Trust Bridge

![Trust Bridge](examples/images/08-trust-bridge.png)

---

## Установка

```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

После установки предпочитайте `$visual-ip-illustrations` в Codex.

Совместимость Release 1.4:

- Canonical public invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Installable skill package directory: `ian-xiaohei-illustrations/`
- Current live repository remote: `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`
- Local checkout target directory: `visual-ip-illustrations`
- Route behavior и output directories остаются стабильными на обеих invocation surfaces.

---

## Быстрые примеры

`{visual IP}` может быть `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal` или поддерживаемым алиасом. Если visual IP опущен, выбирается Xiaohei.

### Спланировать shot list

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Сгенерировать иллюстрации для тела статьи

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Одна идея

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### Сравнение IP

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, and Seal shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Маршруты protected-character, source-reviewed и active source-history автоматически несут route status, source/rights note, release gate и specific output directory.

Больше копируемых примеров находится в [examples/prompts.md](examples/prompts.md).

---

## Рабочий процесс

1. Прочитайте article, Markdown, Notion content, screenshot или тему, предоставленную пользователем.
2. Выберите visual IP: omitted IP selects Xiaohei; explicit Littlebox selects Littlebox; explicit Tom aliases select the Tom protected-character route; explicit Ferris aliases select the Ferris source-reviewed pack; explicit Seal aliases select the active Seal pack.
3. Извлеките core claims, cognitive turns, workflow structures и visualizable paragraphs.
4. Сначала создайте shot list; каждое изображение получает один cognitive anchor.
5. Выберите один structure type для каждого изображения: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route или comic panels.
6. Загрузите canonical pack выбранной IP, соберите prompts и генерируйте изображения по одному. Mixed-IP requests создают отдельные route groups и output directories, а Xiaohei, Littlebox, Tom, Ferris и Seal сохраняют свои route-local references.
7. Проверьте character identity, composition, background, labels и output path по QA checklist выбранной IP. Tom сохраняет `gated-authorized` и `ian-xiaohei-illustrations/references/ips/tom/rights.md`; Ferris сохраняет `source-reviewed`, source/trademark note и `ian-xiaohei-illustrations/references/ips/ferris/source.md`; Seal сохраняет `active`, source-history authority, hoodie seal identity note, logo-free note и `ian-xiaohei-illustrations/references/ips/seal/source.md`.
8. Сохраните финальные PNG и сообщите purpose plus path.

---

## Структура каталогов

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
└── ian-xiaohei-illustrations/
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
            └── seal/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── seal-ip.md
                ├── composition-patterns.md
                └── qa-checklist.md
```

Цель установки Codex — этот подкаталог:

```text
ian-xiaohei-illustrations/
```

Root README, LICENSE, NOTICE и examples — это GitHub distribution docs.

---

## Проверка для мейнтейнеров

```bash
node scripts/validate-skill-package.mjs
```

Validation покрывает skill package shape, route table, canonical packs Xiaohei, Littlebox, Tom, Ferris и Seal, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note и Phase 32 full validator restoration evidence.

Текущие validation commands для maintainers:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Pre-release checks находятся в [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).

---

## Лицензия

MIT License. См. [LICENSE](LICENSE).