# Visual IP Illustrations

![Visual IP Illustrations character lineup](../assets/readme-hero/20260617-181124.gif)

[![skills.sh](https://skills.sh/b/yangchuansheng/visual-ip-illustrations)](https://skills.sh/yangchuansheng/visual-ip-illustrations)

> Visual IP Illustrations ist eine Multi-Visual-IP Codex Skill für Artikelillustrationen im Fließtext. Xiaohei ist die implizite Standardroute; Littlebox ist explizit und active; Tom ist eine explizite Protected-Character-Route mit Status `gated-authorized`; Ferris ist eine explizite Rust-Community-Mascot-Route mit Status `source-reviewed`; Seal ist eine explizite produktneutrale Hoodie-Seal-Route mit Status `active`; OpenClaw ist eine explizite Logo-Mascot-Route mit Status `source-reviewed`. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 horizontal | mehrere visuelle IPs | Artikelillustrationen | Kanonische Invocation: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](../README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | **Deutsch** | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## Was dieses Repository ist

Visual IP Illustrations leitet einen KI-Agenten an, Body-Illustrationen für Artikel, Posts, Blogs, Notion-Dokumente und Methodiktexte zu erstellen.

Die Skill liest den kognitiven Anker im Quelltext und verwandelt ein Urteil, einen Workflow, eine Struktur, einen Zustand oder eine Metapher in eine einprägsame handgezeichnete 16:9-Erklärgrafik.

Aktuelles Routeninventar:

- **Xiaohei**: implizite Standardroute. Wenn der Nutzer eine visuelle IP auslässt, verwendet die Skill Xiaohei und bewahrt die handgezeichnete Artikelillustration auf weißem Hintergrund.
- **Littlebox**: explizite aktive Route. Anfragen mit `小盒`, `Littlebox`, `纸盒`, `paper-box` oder `carton` verwenden die Littlebox-Route.
- **Tom**: explizite Protected-Character-Route. Anfragen mit `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` oder `汤姆猫` verwenden die Tom-Route.
- **Ferris**: explizite Rust-Community-Mascot-Route. Anfragen mit `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` oder `Rust 螃蟹` verwenden die Ferris-Route.
- **Seal**: explizite produktneutrale Hoodie-Seal-Route. Anfragen mit `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` oder `蓝色连帽衫海豹` verwenden die Seal-Route.
- **OpenClaw**: explizite Logo-Mascot-Route mit Status `source-reviewed`. Anfragen mit `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot` oder den OpenClaw-Aliasen in `skills/visual-ip-illustrations/references/routing.md` verwenden die OpenClaw-Route.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md` use the Go Gopher route.

Kernwert: Nutzer können eine visuelle IP wählen und Artikelillustrations-Assets erhalten, deren Charakter, Stilregeln, Prompts, QA-Gates, gespeicherte Ausgaben, Attribution, Quellkontext und Markengrenze zu dieser IP konsistent bleiben.

Die öffentliche Identität von Release 1.4 verwendet `Visual IP Illustrations`, den kanonischen lokalen Checkout-Slug `visual-ip-illustrations` und die kanonische Invocation `$visual-ip-illustrations`. Die Kompatibilitätsflächen bleiben stabil: installierbares Verzeichnis `skills/visual-ip-illustrations/`, Legacy-Alias `$ian-xiaohei-illustrations`, bestehende Quellpfade `skills/visual-ip-illustrations/`, Routenverhalten, Ausgabeverzeichnisse und Validator-Marker.

---

## Für wen es ist

- Autorinnen und Autoren, die Body-Illustrationen für Artikelkonzepte brauchen.
- Produktdenker und Methodikautorinnen, die klare visuelle Metaphern wollen.
- KI-Workflow-Autoren, die wiederverwendbare Prompts für visuelle Sprache brauchen.
- Codex-Nutzer, die ein stabiles Multi-IP-Skill-Paket wollen.

## Ausgaben

- Eine Shot List mit 4 bis 8 Bildern für einen Artikel.
- Für jedes Bild: Platzierung, Thema, Kernidee, Strukturtyp, Figurenaktion und vorgeschlagene sichtbare Labels.
- Finale PNG-Bilder.
- Xiaohei schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-illustrations/`.
- Littlebox schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-littlebox/`.
- Tom schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-tom/`.
- Ferris schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-ferris/`.
- Seal schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-seal/`.
- OpenClaw schreibt Ausgaben in den Workspace-Pfad `assets/<article-slug>-openclaw/`.
- Go Gopher outputs to workspace path `assets/<article-slug>-gopher/`.

Die Dokumentvalidierung bewahrt auch HTML-escaped Routenmarker: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/` und `assets/&lt;article-slug&gt;-openclaw/`.
Docs validation also keeps Go Gopher escaped marker: `assets/&lt;article-slug&gt;-gopher/`.

---

## Visuelle IP-Routen

### Xiaohei

Xiaohei ist die Standardroute: eine kompakte schwarze Figur mit Punktaugen, dünnen Beinen und neutralem Ausdruck, die auf rein weißem Hintergrund aktiv eine seltsame, aber lesbare kognitive Handlung ausführt. Sie eignet sich für Urteile, Workflows, Bruchpunkte, Fallen, Übergaberouten und lokale Systemansichten.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox ist eine explizite Route: eine geschlossene Papierbox-Figur mit rauen schwarzen Markerlinien, blass himmelblauem oder blass lavendelfarbenem Hintergrund, bernsteinfarbenem Klebeband und sparsamen Korallakzenten. Sie übersetzt eine kognitive Handlung in Sammeln, Verpacken, Ordnen, Ausliefern, Blockieren oder Reparieren.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom ist eine explizite Protected-Character-Route: die bekannte blaugraue Katze trägt ein Artikelkonzept durch eine aktive komische Handlung innerhalb der Rechte-Grenze der Route. Sie eignet sich für Verfolgungslogik, Fallen, gescheiterte Abkürzungen, fragile Pläne, Umkehrungen, Timing-Probleme und cartoonartige Ursache-Wirkung-Sequenzen.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris ist eine explizite Rust-Community-Mascot-Route: ein kompaktes orangefarbenes Krabben-Maskottchen führt die zentrale kognitive Handlung aus, indem es sorgfältig baut, ordnet, schützt, hebt, verbindet oder repariert. Es eignet sich für Systemdenken, Zuverlässigkeit, Ownership, compile-artige Abläufe, Tradeoff-Reviews, Grenzprüfungen und niedrigtechnische Rust-Objektmetaphern.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal ist eine explizite produktneutrale Hoodie-Seal-Route: eine runde weiße Robbe mit schlichter marineblauer Kappe und schlichtem tiefblauem Hoodie führt das zentrale Urteil, die Sequenz, Übergabe, den Vergleich oder die Reparatur des Artikels aus. Sie eignet sich für Review, Priorisierung, Source-History-Bewusstsein, logo-freie Szenen und niedrigtechnische Artikelmetaphern.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw ist eine explizite Logo-Mascot-Route: Die offizielle rote runde OpenClaw-Logofigur trägt ein Artikelkonzept durch freundliches Prüfen, Halten, Brückenbauen, Sortieren, Anheben oder Signalisieren. Sie eignet sich für Workflow-Klarheit, Kompatibilitätsprüfungen, Modell-/Tool-Koordination, Review-Gates und source-reviewed Projektmetaphern.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot` sowie die OpenClaw-Aliase in `skills/visual-ip-illustrations/references/routing.md`.

### Go Gopher

Go Gopher is an explicit source-reviewed article-illustration mascot route: the Go language mascot from root `gopher.png` carries one article concept through sparse, hand-drawn cognitive actions while preserving the Go blog source context, Renee French attribution, Creative Commons Attribution 4.0 boundary, Go logo boundary, official endorsement boundary, and public sample gate.

Aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, plus Go Gopher aliases listed in `skills/visual-ip-illustrations/references/routing.md`.

### Routenreferenz

Maintainer können Routenmetadaten in `skills/visual-ip-illustrations/references/routing.md` prüfen: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` und `status`.

Kanonische Packs:

- Xiaohei: `skills/visual-ip-illustrations/references/ips/xiaohei/`
- Littlebox: `skills/visual-ip-illustrations/references/ips/littlebox/`
- Tom: `skills/visual-ip-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`
- Ferris: `skills/visual-ip-illustrations/references/ips/ferris/`, source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`
- Seal: `skills/visual-ip-illustrations/references/ips/seal/`, source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`
- OpenClaw: `skills/visual-ip-illustrations/references/ips/openclaw/`, source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`
- Go Gopher: `skills/visual-ip-illustrations/references/ips/gopher/`, source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`

Wenn eine Anfrage mehrere visuelle IPs verlangt, liefere getrennte Variantengruppen und schreibe jede Gruppe in ihr eigenes Ausgabeverzeichnis. OpenClaw behält eine eigene Routengruppe, route-lokale Referenzen und ein eigenes Ausgabeverzeichnis.

Operative Routendaten:

- Tom: status `gated-authorized`; rights boundary `skills/visual-ip-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `skills/visual-ip-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `skills/visual-ip-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.
- Go Gopher: route id `gopher`; default=false; status `source-reviewed`; source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`; output path `assets/<article-slug>-gopher/`; docs validation token `assets/&lt;article-slug&gt;-gopher/`; output suffix `gopher`; local visual authority root `gopher.png`; attribution Renee French; license boundary Creative Commons Attribution 4.0; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Phase 42 Go Gopher release evidence; Go logo boundary and official endorsement boundary stay attached.

---

## Beispielgalerie

These images are approved public English calibration examples for the current visual IP routes: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher. Each row keeps the same concept and shows how each IP translates the action through its route-local style, character rules, source boundaries, and QA gates.

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

| Xiaohei | Littlebox | Tom | Ferris | Seal | OpenClaw | Go Gopher |
|---------|-----------|-----|--------|------|----------|-----------|
| ![Trust Bridge - Xiaohei](../examples/images-en/08-trust-bridge.png) | ![Trust Bridge - Littlebox](../examples/images-en/littlebox/08-trust-bridge.png) | ![Trust Bridge - Tom](../examples/images-en/tom/08-trust-bridge.png) | ![Trust Bridge - Ferris](../examples/images-en/ferris/08-trust-bridge.png) | ![Trust Bridge - Seal](../examples/images-en/seal/08-trust-bridge.png) | ![Trust Bridge - OpenClaw](../examples/images-en/openclaw/08-trust-bridge.png) | ![Trust Bridge - Go Gopher](../examples/images-en/gopher/08-trust-bridge.png) |

---

## Installation

Mit der skills CLI installieren:

```bash
npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations
```

Manuelle Codex-Installation:

```bash
git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./skills/visual-ip-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Nach der Installation bevorzugst du in Codex `$visual-ip-illustrations`.

Release-1.4-Kompatibilität:

- Kanonische öffentliche Invocation: `$visual-ip-illustrations`
- Legacy-Kompatibilitätsalias: `$ian-xiaohei-illustrations`
- Installierbares Skill-Paketverzeichnis: `skills/visual-ip-illustrations/`
- Aktuelles Live-Repository-Remote: `https://github.com/yangchuansheng/visual-ip-illustrations.git`
- Lokales Checkout-Zielverzeichnis: `visual-ip-illustrations`
- Routenverhalten und Ausgabeverzeichnisse bleiben über beide Invocation-Flächen stabil.

---

## Schnellbeispiele

`{visual IP}` kann `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw`, `Go Gopher` oder ein unterstützter Alias sein. Eine ausgelassene visuelle IP wählt Xiaohei.

### Shot List planen

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Body-Illustrationen erzeugen

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Einzelidee

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### IP-Vergleich

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Die Routen protected-character, source-reviewed und active source-history tragen automatisch Routenstatus, source/rights-Notiz, Release-Gate und spezifisches Ausgabeverzeichnis; OpenClaw trägt source/license authority, uploaded-logo identity, public-sample gate und `assets/<article-slug>-openclaw/`.

Weitere kopierbare Beispiele stehen in [examples/prompts.md](../examples/prompts.md).

---

## Workflow

1. Lies den Artikel, Markdown, Notion-Inhalt, Screenshot oder das vom Nutzer bereitgestellte Thema.
2. Wähle die visuelle IP: ausgelassene IP wählt Xiaohei; explizite Littlebox wählt Littlebox; Tom-Aliase wählen die Tom-Protected-Character-Route; Ferris-Aliase wählen das source-reviewed Ferris-Pack; Seal-Aliase wählen das aktive Seal-Pack; OpenClaw-Aliase wählen das source-reviewed OpenClaw-Pack. Explicit Go Gopher aliases select the Go Gopher source-reviewed pack.
3. Extrahiere Kernbehauptungen, kognitive Wendungen, Workflow-Strukturen und visualisierbare Absätze.
4. Erstelle zuerst eine Shot List; jedes Bild erhält einen kognitiven Anker.
5. Wähle pro Bild einen Strukturtyp: Workflow, lokale Systemansicht, Vorher/Nachher, Charakterzustand, Konzeptmetapher, Methodenschichten, Kartenroute oder Comic-Panels.
6. Lade das kanonische Pack der ausgewählten IP, baue Prompts und generiere Bilder einzeln. Multi-IP-Anfragen erzeugen getrennte Routengruppen und getrennte Ausgabeverzeichnisse, wobei Xiaohei, Littlebox, Tom, Ferris und Seal jeweils route-lokale Referenzen behalten; OpenClaw behält ebenfalls route-lokale Referenzen. Go Gopher plans keep the Go language mascot action-centered and route-local.
7. Prüfe Charakteridentität, Komposition, Hintergrund, Labels und Ausgabepfad gegen die QA-Checkliste der ausgewählten IP. Tom behält `gated-authorized` und `skills/visual-ip-illustrations/references/ips/tom/rights.md`; Ferris behält `source-reviewed`, Source/Trademark-Notiz und `skills/visual-ip-illustrations/references/ips/ferris/source.md`; Seal behält `active`, source-history authority, hoodie seal identity note, logo-free note und `skills/visual-ip-illustrations/references/ips/seal/source.md`; OpenClaw behält `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate und `skills/visual-ip-illustrations/references/ips/openclaw/source.md`. Go Gopher keeps `source-reviewed`, source/license authority, root `gopher.png`, public-sample gate, and `references/ips/gopher/source.md` in the delivery notes.
8. Speichere finale PNGs und melde Zweck plus Pfad.

---

## Verzeichnisstruktur

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
            └── gopher/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── gopher-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

Das Codex-Installationsziel ist dieses Unterverzeichnis:

```text
skills/visual-ip-illustrations/
```

Das Root-README, LICENSE, NOTICE und examples sind GitHub-Distributionsdokumente.

---

## Maintainer-Validierung

```bash
node scripts/validate-skill-package.mjs
```

Die Validierung deckt skill package shape, route table, kanonische Packs von Xiaohei, Littlebox, Tom, Ferris und Seal, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note und Phase 32 full validator restoration evidence ab.

Die Validierung deckt außerdem OpenClaw canonical pack markers, OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note und Phase 37 final release evidence ab.
Validation also covers Go Gopher canonical pack markers, Go Gopher `source-reviewed` route markers, source/license authority, root `gopher.png`, public sample gate, Phase 42 final release evidence, and Go Gopher validator checks.

Aktuelle Validierungsbefehle für Maintainer:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Die Pre-Release-Checks stehen in [RELEASE_CHECKLIST.md](../RELEASE_CHECKLIST.md).

---

---

## Lizenz

MIT License. Siehe [LICENSE](../LICENSE).
