# Visual IP Illustrations

![Visual IP Illustrations character lineup with Cai Xukun holding a basketball](../assets/readme-hero/20260618-visual-ip-lineup-basketball.png)

[![skills.sh](https://skills.sh/b/yangchuansheng/visual-ip-illustrations)](https://skills.sh/yangchuansheng/visual-ip-illustrations)

> Visual IP Illustrations, makale gövdesi illüstrasyonları için çoklu görsel IP Codex Skill paketidir. Xiaohei örtük varsayılan rotadır; Littlebox açık ve active rotadır; Tom `gated-authorized` durumuna sahip açık bir protected-character rotasıdır; Ferris `source-reviewed` durumuna sahip açık bir Rust-community mascot rotasıdır; Seal `active` durumuna sahip açık bir product-neutral hoodie seal rotasıdır. OpenClaw `source-reviewed` durumuna sahip açık bir logo-mascot rotasıdır. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`. Cai Xukun is an explicit `gated-public-figure` stylized mascot-only route with aliases `蔡徐坤`, `caixukun`, and `cxk`, source pointer `skills/visual-ip-illustrations/references/ips/caixukun/source.md`, output path `assets/<article-slug>-caixukun/`, uploaded-image authority, public-figure likeness boundary, source-image context boundary, public sample review gate, route isolation, and safety review for endorsement, affiliation, impersonation, campaign, advertising, and fandom-promotion claims.
>
> 16:9 yatay | çoklu görsel IP | makale gövdesi illüstrasyonları | Kanonik çağrı: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](../README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | **Türkçe**

<!-- README-I18N:END -->

---

## Bu depo nedir

Visual IP Illustrations, bir AI agent’ın makaleler, gönderiler, bloglar, Notion belgeleri ve metodoloji yazıları için gövde illüstrasyonları oluşturmasını yönlendirir.

Skill, kaynak metindeki bilişsel çıpayı okur ve bir yargıyı, workflow’u, yapıyı, durumu veya metaforu 16:9 elle çizilmiş akılda kalıcı bir açıklayıcı görsele dönüştürür.

Mevcut rota envanteri:

- **Xiaohei**: implicit default route. Kullanıcı visual IP belirtmediğinde skill Xiaohei kullanır ve beyaz fonda el çizimi article illustration deneyimini korur.
- **Littlebox**: explicit active route. `小盒`, `Littlebox`, `纸盒`, `paper-box` veya `carton` geçen istekler Littlebox route kullanır.
- **Tom**: explicit protected-character route. `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` veya `汤姆猫` geçen istekler Tom route kullanır.
- **Ferris**: explicit Rust-community mascot route. `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` veya `Rust 螃蟹` geçen istekler Ferris route kullanır.
- **Seal**: explicit product-neutral hoodie seal route. `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` veya `蓝色连帽衫海豹` geçen istekler Seal route kullanır.
- **OpenClaw**: explicit logo-mascot route with status `source-reviewed`. Requests that name `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, or the OpenClaw aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the OpenClaw route.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the Go Gopher route.
- **Cai Xukun**: explicit `gated-public-figure` stylized mascot-only route. Requests that name `Cai Xukun`, `蔡徐坤`, `caixukun`, or `cxk` use the Cai Xukun route with uploaded-image authority, public-figure likeness boundary, source-image context boundary, public sample review gate, route isolation, source pointer `skills/visual-ip-illustrations/references/ips/caixukun/source.md`, output path `assets/<article-slug>-caixukun/`, and safety review for endorsement, affiliation, impersonation, campaign, advertising, and fandom-promotion claims.

Temel değer: kullanıcılar bir görsel IP seçebilir ve karakteri, stil kuralları, prompts, QA gates, kaydedilen outputs, attribution, source context ve brand boundary değerleri o IP ile tutarlı kalan makale illüstrasyon assets alır.

Release 1.4 genel kimliği `Visual IP Illustrations`, yerel checkout için canonical slug `visual-ip-illustrations` ve canonical invocation `$visual-ip-illustrations` kullanır. Uyumluluk yüzeyleri sabit kalır: kurulabilir dizin `skills/visual-ip-illustrations/`, legacy alias `$ian-xiaohei-illustrations`, mevcut source paths `skills/visual-ip-illustrations/`, route behavior, output directories ve validator markers.

---

## Kimler için

- Makale kavramları için gövde içi illüstrasyonlara ihtiyaç duyan yazarlar.
- Net görsel metaforlar isteyen ürün düşünürleri ve metodoloji yazarları.
- Yeniden kullanılabilir visual language prompts isteyen AI workflow yazarları.
- Kararlı bir multi-IP skill package isteyen Codex kullanıcıları.

## Çıktılar

- Bir makale için 4-8 görsellik shot list.
- Her görsel için: placement, theme, core idea, structure type, character action ve suggested visible labels.
- Nihai PNG görselleri.
- Xiaohei outputs workspace path `assets/<article-slug>-illustrations/` içine yazılır.
- Littlebox outputs workspace path `assets/<article-slug>-littlebox/` içine yazılır.
- Tom outputs workspace path `assets/<article-slug>-tom/` içine yazılır.
- Ferris outputs workspace path `assets/<article-slug>-ferris/` içine yazılır.
- Seal outputs workspace path `assets/<article-slug>-seal/` içine yazılır.
- OpenClaw outputs workspace path `assets/<article-slug>-openclaw/` içine yazılır.
- Go Gopher outputs to workspace path `assets/<article-slug>-gopher/`.
- Cai Xukun outputs to workspace path `assets/<article-slug>-caixukun/`.

Docs validation ayrıca HTML-escaped route markers öğelerini korur: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/` ve `assets/&lt;article-slug&gt;-openclaw/`.
Docs validation also keeps Go Gopher escaped marker: `assets/&lt;article-slug&gt;-gopher/`.
Docs validation also keeps Cai Xukun escaped marker: `assets/&lt;article-slug&gt;-caixukun/`.

---

## Görsel IP rotaları

### Xiaohei

Xiaohei varsayılan route’tur: nokta gözlü, ince bacaklı ve nötr ifadeli siyah dolu figür, saf beyaz fonda garip ama okunabilir bir bilişsel eylemi aktif olarak gerçekleştirir. Yargılar, workflows, kırılma noktaları, tuzaklar, handoff paths ve system local views için uygundur.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox açık bir route’tur: kaba siyah marker çizgileri, soluk gök mavisi veya soluk lavanta fonu, amber tape ve seyrek coral accents kullanan kapalı kâğıt kutu karakteridir. Bilişsel eylemi toplama, paketleme, sıralama, teslim etme, engelleme veya onarma davranışına çevirir.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom açık bir protected-character route’tur: tanınan mavi-gri kedi, route rights boundary içinde aktif komik eylemle makale kavramını taşır. Chase logic, traps, failed shortcuts, fragile plans, reversals, timing problems ve cartoon-style cause-effect sequences için uygundur.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris açık bir Rust-community mascot route’tur: kompakt turuncu crab mascot, dikkatle inşa ederek, sıralayarak, koruyarak, kaldırarak, bağlayarak veya onararak merkezi bilişsel eylemi gerçekleştirir. Systems thinking, reliability, ownership, compile-like flows, tradeoff review, boundary checks ve low-tech Rust object metaphors için uygundur.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal açık bir product-neutral hoodie seal route’tur: plain navy cap ve plain deep-blue hoodie kullanan yuvarlak beyaz fok, makalenin merkezi judgment, sequence, handoff, comparison veya repair eylemini gerçekleştirir. Review, prioritization, source-history awareness, logo-free scenes ve low-tech article metaphors için uygundur.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw açık bir logo-mascot route’tur: resmi kırmızı yuvarlak OpenClaw logo karakteri bir makale kavramını dostça inceleme, tutma, köprü kurma, sıralama, kaldırma veya işaret etme eylemleriyle taşır. Workflow clarity, compatibility checks, model/tool coordination, review gates ve source-reviewed project metaphors için uygundur.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot` ve `skills/visual-ip-illustrations/references/routing.md` içinde listelenen OpenClaw aliases.

### Go Gopher

Go Gopher is an explicit source-reviewed article-illustration mascot route: the Go language mascot from route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png` carries one article concept through sparse, hand-drawn cognitive actions while preserving the Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, Go logo boundary, official endorsement boundary, and public sample gate.

Aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, plus Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md`.

### Cai Xukun

Cai Xukun is an explicit `gated-public-figure` stylized mascot-only route. The uploaded reference images are the uploaded-image authority for a sparse article-illustration mascot, with public-figure likeness boundary, source-image context boundary, public sample review gate, route isolation, and stylized mascot-only output. Public docs use source pointer `skills/visual-ip-illustrations/references/ips/caixukun/source.md` and output path `assets/<article-slug>-caixukun/`.

Aliases: `Cai Xukun`, `蔡徐坤`, `caixukun`, `cxk`.

Safety boundary: generated text and release copy must keep endorsement, affiliation, impersonation, campaign, advertising, and fandom-promotion claims inside maintainer review and rewrite them as neutral article-concept labels.

### Rota referansı

Maintainers route metadata fields öğelerini `skills/visual-ip-illustrations/references/routing.md` içinde inceleyebilir: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` ve `status`.

Canonical packs:

- Xiaohei: `skills/visual-ip-illustrations/references/ips/xiaohei/`
- Littlebox: `skills/visual-ip-illustrations/references/ips/littlebox/`
- Tom: `skills/visual-ip-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`
- Ferris: `skills/visual-ip-illustrations/references/ips/ferris/`, source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`
- Seal: `skills/visual-ip-illustrations/references/ips/seal/`, source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`
- OpenClaw: `skills/visual-ip-illustrations/references/ips/openclaw/`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`
- Go Gopher: `skills/visual-ip-illustrations/references/ips/gopher/`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`
- Cai Xukun: `skills/visual-ip-illustrations/references/ips/caixukun/`, source authority `skills/visual-ip-illustrations/references/ips/caixukun/source.md`

Bir istek birden fazla visual IP istediğinde ayrı variant groups teslim edin ve her grubu kendi output directory içine yazın. OpenClaw kendi route group, route-local references ve output directory değerlerini korur.

Route operational data:

- Tom: status `gated-authorized`; rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.
- Go Gopher: route id `gopher`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`; output path `assets/<article-slug>-gopher/`; docs validation token `assets/&lt;article-slug&gt;-gopher/`; output suffix `gopher`; local visual authority route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`; attribution Renee French; license boundary Creative Commons Attribution 4.0; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Phase 42 Go Gopher release evidence; Go logo boundary and official endorsement boundary stay attached.
- Cai Xukun: route id `caixukun`; default=false; status `gated-public-figure`; source authority `skills/visual-ip-illustrations/references/ips/caixukun/source.md`; output path `assets/<article-slug>-caixukun/`; docs validation token `assets/&lt;article-slug&gt;-caixukun/`; output suffix `caixukun`; aliases `Cai Xukun`, `蔡徐坤`, `caixukun`, and `cxk`; uploaded-image authority and source-image context boundary stay attached; public-figure likeness boundary keeps the route in stylized mascot-only output; route isolation keeps Cai Xukun separate from Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher; public generated sample assets are approved for the Trust Bridge public README gallery through the public sample review gate; endorsement, affiliation, impersonation, campaign, advertising, and fandom-promotion claims require maintainer review and neutral article-concept wording.

---

## Örnek galerisi

These images are approved public English calibration examples for the current visual IP routes with approved public sample assets: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun. Cai Xukun currently appears in the Trust Bridge row through the public sample review gate. Each row keeps the same concept and shows how each approved public-sample IP translates the action through its route-local style, character rules, source boundaries, and QA gates.

### Two Breakpoints

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Two Breakpoints - Xiaohei](../examples/images-en/01-two-breakpoints.png) | ![Two Breakpoints - Littlebox](../examples/images-en/littlebox/01-two-breakpoints.png) | ![Two Breakpoints - Tom](../examples/images-en/tom/01-two-breakpoints.png) | ![Two Breakpoints - Ferris](../examples/images-en/ferris/01-two-breakpoints.png) | ![Two Breakpoints - Seal](../examples/images-en/seal/01-two-breakpoints.png) | ![Two Breakpoints - OpenClaw](../examples/images-en/openclaw/01-two-breakpoints.png) | ![Two Breakpoints - Go Gopher](../examples/images-en/gopher/01-two-breakpoints.png) |

### Sort by Purpose

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Sort by Purpose - Xiaohei](../examples/images-en/02-sort-by-purpose.png) | ![Sort by Purpose - Littlebox](../examples/images-en/littlebox/02-sort-by-purpose.png) | ![Sort by Purpose - Tom](../examples/images-en/tom/02-sort-by-purpose.png) | ![Sort by Purpose - Ferris](../examples/images-en/ferris/02-sort-by-purpose.png) | ![Sort by Purpose - Seal](../examples/images-en/seal/02-sort-by-purpose.png) | ![Sort by Purpose - OpenClaw](../examples/images-en/openclaw/02-sort-by-purpose.png) | ![Sort by Purpose - Go Gopher](../examples/images-en/gopher/02-sort-by-purpose.png) |

### One Fish, Many Uses

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![One Fish, Many Uses - Xiaohei](../examples/images-en/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Littlebox](../examples/images-en/littlebox/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Tom](../examples/images-en/tom/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Ferris](../examples/images-en/ferris/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Seal](../examples/images-en/seal/03-one-fish-many-uses.png) | ![One Fish, Many Uses - OpenClaw](../examples/images-en/openclaw/03-one-fish-many-uses.png) | ![One Fish, Many Uses - Go Gopher](../examples/images-en/gopher/03-one-fish-many-uses.png) |

### Handoff Path

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Handoff Path - Xiaohei](../examples/images-en/04-handoff-path.png) | ![Handoff Path - Littlebox](../examples/images-en/littlebox/04-handoff-path.png) | ![Handoff Path - Tom](../examples/images-en/tom/04-handoff-path.png) | ![Handoff Path - Ferris](../examples/images-en/ferris/04-handoff-path.png) | ![Handoff Path - Seal](../examples/images-en/seal/04-handoff-path.png) | ![Handoff Path - OpenClaw](../examples/images-en/openclaw/04-handoff-path.png) | ![Handoff Path - Go Gopher](../examples/images-en/gopher/04-handoff-path.png) |

### Information Well

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Information Well - Xiaohei](../examples/images-en/05-information-well.png) | ![Information Well - Littlebox](../examples/images-en/littlebox/05-information-well.png) | ![Information Well - Tom](../examples/images-en/tom/05-information-well.png) | ![Information Well - Ferris](../examples/images-en/ferris/05-information-well.png) | ![Information Well - Seal](../examples/images-en/seal/05-information-well.png) | ![Information Well - OpenClaw](../examples/images-en/openclaw/05-information-well.png) | ![Information Well - Go Gopher](../examples/images-en/gopher/05-information-well.png) |

### Idea Press

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Idea Press - Xiaohei](../examples/images-en/06-idea-press.png) | ![Idea Press - Littlebox](../examples/images-en/littlebox/06-idea-press.png) | ![Idea Press - Tom](../examples/images-en/tom/06-idea-press.png) | ![Idea Press - Ferris](../examples/images-en/ferris/06-idea-press.png) | ![Idea Press - Seal](../examples/images-en/seal/06-idea-press.png) | ![Idea Press - OpenClaw](../examples/images-en/openclaw/06-idea-press.png) | ![Idea Press - Go Gopher](../examples/images-en/gopher/06-idea-press.png) |

### Content Fermentation

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Content Fermentation - Xiaohei](../examples/images-en/07-content-fermentation.png) | ![Content Fermentation - Littlebox](../examples/images-en/littlebox/07-content-fermentation.png) | ![Content Fermentation - Tom](../examples/images-en/tom/07-content-fermentation.png) | ![Content Fermentation - Ferris](../examples/images-en/ferris/07-content-fermentation.png) | ![Content Fermentation - Seal](../examples/images-en/seal/07-content-fermentation.png) | ![Content Fermentation - OpenClaw](../examples/images-en/openclaw/07-content-fermentation.png) | ![Content Fermentation - Go Gopher](../examples/images-en/gopher/07-content-fermentation.png) |

### Trust Bridge

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher | Cai Xukun |
|---------|-----------|-----|--------|------|----------|-----------|-----------|
| ![Trust Bridge - Xiaohei](../examples/images-en/08-trust-bridge.png) | ![Trust Bridge - Littlebox](../examples/images-en/littlebox/08-trust-bridge.png) | ![Trust Bridge - Tom](../examples/images-en/tom/08-trust-bridge.png) | ![Trust Bridge - Ferris](../examples/images-en/ferris/08-trust-bridge.png) | ![Trust Bridge - Seal](../examples/images-en/seal/08-trust-bridge.png) | ![Trust Bridge - OpenClaw](../examples/images-en/openclaw/08-trust-bridge.png) | ![Trust Bridge - Go Gopher](../examples/images-en/gopher/08-trust-bridge.png) | ![Trust Bridge - Cai Xukun](../examples/images-en/caixukun/08-trust-bridge.png) |

---

## Kurulum

skills CLI ile kurun:

```bash
npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations
```

Manuel Codex kurulumu:

```bash
git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./skills/visual-ip-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Kurulumdan sonra Codex içinde `$visual-ip-illustrations` tercih edin.

Release 1.4 uyumluluğu:

- Canonical public invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Installable skill package directory: `skills/visual-ip-illustrations/`
- Current live repository remote: `https://github.com/yangchuansheng/visual-ip-illustrations.git`
- Local checkout target directory: `visual-ip-illustrations`
- Route behavior ve output directories iki invocation surface üzerinde sabit kalır.

---

## Hızlı örnekler

`{visual IP}` `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw`, `Go Gopher` veya desteklenen bir alias olabilir. Görsel IP atlanırsa Xiaohei seçilir.

### Shot list planla

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Gövde illüstrasyonları üret

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Tek fikir

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### IP karşılaştırması

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

protected-character, source-reviewed ve active source-history routes otomatik olarak route status, source/rights note, release gate ve specific output directory taşır; OpenClaw source/license authority, uploaded-logo identity, public-sample gate ve `assets/<article-slug>-openclaw/` taşır.

Kopyalanabilir daha fazla örnek [examples/prompts.md](../examples/prompts.md) içindedir.

---

## İş akışı

1. Article, Markdown, Notion content, screenshot veya kullanıcı tarafından verilen topic içeriğini okuyun.
2. Visual IP seçin: IP belirtilmezse Xiaohei seçilir; explicit Littlebox Littlebox seçer; Tom aliases Tom protected-character route seçer; Ferris aliases Ferris source-reviewed pack seçer; Seal aliases active Seal pack seçer; OpenClaw aliases OpenClaw source-reviewed pack seçer. Explicit Go Gopher aliases select the Go Gopher source-reviewed pack. Explicit Cai Xukun aliases select the Cai Xukun gated-public-figure pack.
3. Core claims, cognitive turns, workflow structures ve visualizable paragraphs çıkarın.
4. Önce shot list üretin; her görsel bir cognitive anchor alır.
5. Her görsel için bir structure type seçin: Workflow, system local view, before/after, character state, concept metaphor, method layers, map route veya comic panels.
6. Seçilen IP’nin canonical pack dosyasını yükleyin, prompts oluşturun ve görselleri tek tek üretin. Mixed-IP requests ayrı route groups ve output directories oluşturur; Xiaohei, Littlebox, Tom, Ferris ve Seal route-local references öğelerini ayrı tutar; OpenClaw da route-local references öğelerini korur. Go Gopher plans keep the Go language mascot action-centered and route-local.
7. Seçilen IP’nin QA checklist dosyasına göre character identity, composition, background, labels ve output path kontrol edin. Tom `gated-authorized` ve `skills/visual-ip-illustrations/references/ips/tom/rights.md` tutar; Ferris `source-reviewed`, source/trademark note ve `skills/visual-ip-illustrations/references/ips/ferris/source.md` tutar; Seal `active`, source-history authority, hoodie seal identity note, logo-free note ve `skills/visual-ip-illustrations/references/ips/seal/source.md` tutar; OpenClaw `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate ve `skills/visual-ip-illustrations/references/ips/openclaw/source.md` tutar. Go Gopher keeps `source-reviewed`, source/license authority, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`, public-sample gate, and `references/ips/gopher/source.md` in the delivery notes. Cai Xukun keeps `gated-public-figure`, uploaded-image authority, public-figure likeness boundary, source-image context boundary, public sample review gate, route isolation, stylized mascot-only output, `skills/visual-ip-illustrations/references/ips/caixukun/source.md`, and `assets/<article-slug>-caixukun/` in the delivery notes.
8. Nihai PNG dosyalarını kaydedin ve purpose plus path raporlayın.

---

## Dizin yapısı

```text
.
├── README.md
├── readmes/
│   ├── README.es.md
│   ├── README.pt.md
│   ├── README.de.md
│   ├── README.fr.md
│   ├── README.zh.md
│   ├── README.zh-Hant.md
│   ├── README.ko.md
│   ├── README.ja.md
│   ├── README.ar.md
│   ├── README.ru.md
│   ├── README.uk.md
│   └── README.tr.md
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
                ├── gopher/
                │   ├── index.md
                │   ├── source.md
                │   ├── style-dna.md
                │   ├── gopher-ip.md
                │   ├── composition-patterns.md
                │   ├── prompt-template.md
                │   └── qa-checklist.md
                └── caixukun/
                    ├── index.md
                    ├── source.md
                    ├── style-dna.md
                    ├── caixukun-ip.md
                    ├── composition-patterns.md
                    ├── prompt-template.md
                    └── qa-checklist.md
```

Codex kurulum hedefi bu alt dizindir:

```text
skills/visual-ip-illustrations/
```

Root README, LICENSE, NOTICE ve examples GitHub distribution docs olarak kullanılır.

---

## Bakımcı doğrulaması

```bash
node scripts/validate-skill-package.mjs
```

Validation; skill package shape, route table, Xiaohei, Littlebox, Tom, Ferris ve Seal canonical packs, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note ve Phase 32 full validator restoration evidence kapsamlarını denetler.

Validation ayrıca OpenClaw canonical pack markers, OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note ve Phase 37 final release evidence kapsamlarını denetler.
Validation also covers Go Gopher canonical pack markers, Go Gopher `source-reviewed` route markers, source/license authority, route-local `skills/visual-ip-illustrations/references/ips/gopher/gopher.png`, public sample gate, Phase 42 final release evidence, and Go Gopher validator checks. Phase 46 public docs cover Cai Xukun canonical pack markers, Cai Xukun `gated-public-figure` route markers, source authority `skills/visual-ip-illustrations/references/ips/caixukun/source.md`, uploaded-image authority, public-figure likeness boundary, source-image context boundary, public sample review gate, route isolation, stylized mascot-only output, `assets/<article-slug>-caixukun/`, `assets/&lt;article-slug&gt;-caixukun/`, and endorsement, affiliation, impersonation, campaign, advertising, and fandom-promotion review terms; Phase 47 owns validator hardening and final release evidence.

Maintainers için mevcut validation commands:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Pre-release checks [RELEASE_CHECKLIST.md](../RELEASE_CHECKLIST.md) içindedir.

---

---

## Lisans

MIT License. [LICENSE](../LICENSE) dosyasına bakın.
