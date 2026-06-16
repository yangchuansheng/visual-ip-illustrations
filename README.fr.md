# Visual IP Illustrations

> Visual IP Illustrations est une Codex Skill multi-IP visuelle pour les illustrations de corps d’article. Xiaohei est la route implicite par défaut ; Littlebox est explicite et active ; Tom est une route explicite de personnage protégé avec le statut `gated-authorized` ; Ferris est une route explicite de mascotte de la communauté Rust avec le statut `source-reviewed` ; Seal est une route explicite de phoque à hoodie, neutre vis-à-vis du produit, avec le statut `active` ; OpenClaw est une route explicite de logo-mascotte avec le statut `source-reviewed`. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 horizontal | IP visuelles multiples | illustrations de corps d’article | Invocation canonique : `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | **Français** | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## Ce que contient ce dépôt

Visual IP Illustrations guide un agent IA pour créer des illustrations de corps pour articles, posts, blogs, documents Notion et textes méthodologiques.

La skill lit l’ancre cognitive du texte source, puis transforme un jugement, un workflow, une structure, un état ou une métaphore en image explicative 16:9 mémorable et dessinée à la main.

Inventaire actuel des routes :

- **Xiaohei** : route implicite par défaut. Quand l’utilisateur omet une IP visuelle, la skill utilise Xiaohei et préserve l’expérience d’illustration dessinée à la main sur fond blanc.
- **Littlebox** : route explicite active. Les demandes qui nomment `小盒`, `Littlebox`, `纸盒`, `paper-box` ou `carton` utilisent la route Littlebox.
- **Tom** : route explicite de personnage protégé. Les demandes qui nomment `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` ou `汤姆猫` utilisent la route Tom.
- **Ferris** : route explicite de mascotte de la communauté Rust. Les demandes qui nomment `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` ou `Rust 螃蟹` utilisent la route Ferris.
- **Seal** : route explicite de phoque à hoodie, neutre vis-à-vis du produit. Les demandes qui nomment `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` ou `蓝色连帽衫海豹` utilisent la route Seal.
- **OpenClaw** : route explicite de logo-mascotte avec le statut `source-reviewed`. Les demandes qui nomment `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot` ou les alias OpenClaw listés dans `ian-xiaohei-illustrations/references/routing.md` utilisent la route OpenClaw.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `ian-xiaohei-illustrations/references/routing.md` use the Go Gopher route.

Valeur centrale : les utilisateurs peuvent choisir une IP visuelle et recevoir des assets d’illustration d’article dont le personnage, les règles de style, les prompts, les portes de QA, les sorties enregistrées, l’attribution, le contexte source et la frontière de marque restent cohérents avec cette IP.

L’identité publique de la Release 1.4 utilise `Visual IP Illustrations`, le slug canonique de checkout local `visual-ip-illustrations` et l’invocation canonique `$visual-ip-illustrations`. Les surfaces de compatibilité restent stables : répertoire installable `ian-xiaohei-illustrations/`, alias legacy `$ian-xiaohei-illustrations`, routes sources existantes `ian-xiaohei-illustrations/`, comportement des routes, répertoires de sortie et marqueurs du validateur.

---

## Public visé

- Rédacteurs qui ont besoin d’illustrations de corps pour des concepts d’article.
- Penseurs produit et auteurs de méthodes qui veulent des métaphores visuelles claires.
- Auteurs de workflows IA qui ont besoin de prompts de langage visuel réutilisables.
- Utilisateurs Codex qui veulent un package skill multi-IP stable.

## Sorties

- Une shot list de 4 à 8 images pour un article.
- Pour chaque image : emplacement, thème, idée centrale, type de structure, action du personnage et libellés visibles suggérés.
- Images PNG finales.
- Xiaohei écrit les sorties dans le chemin workspace `assets/<article-slug>-illustrations/`.
- Littlebox écrit les sorties dans le chemin workspace `assets/<article-slug>-littlebox/`.
- Tom écrit les sorties dans le chemin workspace `assets/<article-slug>-tom/`.
- Ferris écrit les sorties dans le chemin workspace `assets/<article-slug>-ferris/`.
- Seal écrit les sorties dans le chemin workspace `assets/<article-slug>-seal/`.
- OpenClaw écrit les sorties dans le workspace path `assets/<article-slug>-openclaw/`.

La validation des docs conserve aussi les marqueurs de route échappés en HTML : `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/` et `assets/&lt;article-slug&gt;-openclaw/`.

---

## Routes d’IP visuelle

### Xiaohei

Xiaohei est la route par défaut : une silhouette noire pleine avec des yeux en points, des jambes fines et une expression neutre, qui effectue activement une action cognitive étrange mais lisible sur fond blanc pur. Elle fonctionne bien pour les jugements, workflows, points de rupture, pièges, routes de passage et vues locales de système.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox est une route explicite : un personnage de boîte en papier fermée avec des traits noirs rugueux au marqueur, un fond bleu ciel pâle ou lavande pâle, du ruban ambre et de rares accents corail. Elle traduit une action cognitive en collecte, emballage, tri, livraison, blocage ou réparation.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom est une route explicite de personnage protégé : le célèbre chat bleu-gris porte un concept d’article par une action comique active dans la limite de droits de la route. Elle fonctionne bien pour la logique de poursuite, les pièges, les raccourcis ratés, les plans fragiles, les inversions, les problèmes de timing et les séquences cause-effet de style cartoon.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris est une route explicite de mascotte de la communauté Rust : une mascotte compacte de crabe orange réalise l’action cognitive centrale en construisant, triant, protégeant, soulevant, reliant ou réparant avec soin. Elle fonctionne bien pour la pensée systémique, la fiabilité, l’ownership, les flux de type compilation, les revues de tradeoffs, les vérifications de limites et les métaphores d’objets Rust low-tech.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal est une route explicite de phoque à hoodie, neutre vis-à-vis du produit : un phoque blanc arrondi avec une casquette bleu marine unie et un hoodie bleu profond uni effectue le jugement, la séquence, le passage, la comparaison ou la réparation centrale de l’article. Elle fonctionne bien pour la revue, la priorisation, la conscience d’historique source, les scènes sans logo et les métaphores d’article low-tech.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw est une route explicite de logo-mascotte : le personnage officiel rouge et rond du logo OpenClaw porte un concept d’article par des actions amicales d’inspection, de maintien, de pont, de tri, de levage ou de signalement. Elle convient à la clarté des workflows, aux contrôles de compatibilité, à la coordination modèle/outil, aux portes de revue et aux métaphores de projet source-reviewed.

Alias : `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, ainsi que les alias OpenClaw listés dans `ian-xiaohei-illustrations/references/routing.md`.

### Référence des routes

Les mainteneurs peuvent consulter les champs de metadata de route dans `ian-xiaohei-illustrations/references/routing.md` : `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` et `status`.

Packs canoniques :

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`, source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Seal: `ian-xiaohei-illustrations/references/ips/seal/`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`
- OpenClaw: `ian-xiaohei-illustrations/references/ips/openclaw/`, source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`

Quand une demande appelle plusieurs IP visuelles, livre des groupes de variantes séparés et écris chaque groupe dans son propre répertoire de sortie.

Données opérationnelles de route :

- Tom: status `gated-authorized`; rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.

---

## Galerie d’exemples

Ces images sont des exemples de calibration du style Xiaohei. Utilisez-les pour comprendre line density, whitespace, color restraint et character participation, puis inventez une nouvelle métaphore pour l’article actuel.

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

## Installation

```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Après installation, privilégiez `$visual-ip-illustrations` dans Codex.

Compatibilité Release 1.4 :

- Invocation publique canonique : `$visual-ip-illustrations`
- Alias de compatibilité legacy : `$ian-xiaohei-illustrations`
- Répertoire installable du package skill : `ian-xiaohei-illustrations/`
- Remote live actuel du dépôt : `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`
- Répertoire cible de checkout local : `visual-ip-illustrations`
- Le comportement des routes et les répertoires de sortie restent stables sur les deux surfaces d’invocation.

---

## Exemples rapides

`{visual IP}` peut être `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw` ou un alias pris en charge. Une IP visuelle omise sélectionne Xiaohei.

### Planifier une shot list

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Générer des illustrations de corps

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Idée unique

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### Comparaison d’IP

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Les routes protected-character, source-reviewed et active source-history portent automatiquement le statut de route, la note source/rights, le release gate et le répertoire de sortie spécifique; OpenClaw porte source/license authority, uploaded-logo identity, public-sample gate et `assets/<article-slug>-openclaw/`.

D’autres exemples copiables sont disponibles dans [examples/prompts.md](examples/prompts.md).

---

## Workflow

1. Lisez l’article, le Markdown, le contenu Notion, la capture ou le sujet fourni par l’utilisateur.
2. Sélectionnez l’IP visuelle : IP omise sélectionne Xiaohei ; Littlebox explicite sélectionne Littlebox ; les alias Tom sélectionnent la route protected-character Tom ; les alias Ferris sélectionnent le pack source-reviewed Ferris ; les alias Seal sélectionnent le pack actif Seal; les alias OpenClaw explicites sélectionnent le pack source-reviewed OpenClaw.
3. Extrayez les affirmations centrales, tournants cognitifs, structures de workflow et paragraphes visualisables.
4. Produisez d’abord une shot list ; chaque image reçoit une ancre cognitive.
5. Choisissez un type de structure par image : Workflow, vue locale de système, avant/après, état de personnage, métaphore conceptuelle, couches de méthode, route cartographique ou panneaux de BD.
6. Chargez le pack canonique de l’IP sélectionnée, assemblez les prompts et générez les images une par une. Les demandes multi-IP créent des groupes de route et des répertoires de sortie séparés, avec Xiaohei, Littlebox, Tom, Ferris et Seal conservant chacun ses références locales de route; OpenClaw conserve aussi ses références locales de route.
7. Vérifiez l’identité du personnage, la composition, le fond, les libellés et le chemin de sortie avec la checklist QA de l’IP sélectionnée. Tom conserve `gated-authorized` et `ian-xiaohei-illustrations/references/ips/tom/rights.md` ; Ferris conserve `source-reviewed`, la note source/trademark et `ian-xiaohei-illustrations/references/ips/ferris/source.md` ; Seal conserve `active`, source-history authority, hoodie seal identity note, logo-free note et `ian-xiaohei-illustrations/references/ips/seal/source.md`; OpenClaw conserve `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate et `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
8. Enregistrez les PNG finaux et indiquez le but plus le chemin.

---

## Structure des répertoires

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
            ├── seal/
            │   ├── index.md
            │   ├── source.md
            │   ├── style-dna.md
            │   ├── seal-ip.md
            │   ├── composition-patterns.md
            │   ├── prompt-template.md
            │   └── qa-checklist.md
            └── openclaw/
                ├── index.md
                ├── source.md
                ├── style-dna.md
                ├── openclaw-ip.md
                ├── composition-patterns.md
                ├── prompt-template.md
                └── qa-checklist.md
```

La cible d’installation Codex est ce sous-répertoire :

```text
ian-xiaohei-illustrations/
```

Le README racine, LICENSE, NOTICE et examples sont les docs de distribution GitHub.

---

## Validation mainteneur

```bash
node scripts/validate-skill-package.mjs
```

La validation couvre skill package shape, route table, packs canoniques de Xiaohei, Littlebox, Tom, Ferris et Seal, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note et Phase 32 full validator restoration evidence.

La validation couvre aussi les OpenClaw canonical pack markers, les OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note et Phase 37 final release evidence.

Commandes de validation actuelles pour mainteneurs :

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Les vérifications pré-release sont dans [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).

---

---

## Go Gopher Route Surface

Go Gopher is an explicit source-reviewed article-illustration mascot route. It preserves Xiaohei as the omitted-IP default route and keeps Go Gopher selectable through explicit aliases only.

Aliases: `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, plus Go Gopher aliases listed in `ian-xiaohei-illustrations/references/routing.md`.

Output markers:

- Raw output path: `assets/<article-slug>-gopher/`.
- Escaped docs marker: `assets/&lt;article-slug&gt;-gopher/`.
- Output suffix: `gopher`.

Route reference:

- Go Gopher: `ian-xiaohei-illustrations/references/ips/gopher/`, source/license authority `ian-xiaohei-illustrations/references/ips/gopher/source.md`.

Operational route facts:

- Route id: `gopher`.
- Default marker: default=false.
- Status: `source-reviewed`.
- Source/license authority: `ian-xiaohei-illustrations/references/ips/gopher/source.md`.
- Local visual authority: root `gopher.png`.
- Attribution: Renee French.
- License boundary: Creative Commons Attribution 4.0.
- Go logo boundary: Go logo identity stays outside the Go Gopher route contract.
- Official endorsement boundary: Go Gopher docs avoid official Go project affiliation, approval, sponsorship, and endorsement claims.
- Public rendered Go Gopher samples remain gated by `RELEASE_CHECKLIST.md`; no Go Gopher public sample assets are added under `examples/images/` or `ian-xiaohei-illustrations/assets/examples/` in Phase 41.

Mixed-IP and workflow markers:

- Mixed-IP requests use seven separate route groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher.
- Go Gopher keeps independent route-local references, QA, output suffix `gopher`, route status `source-reviewed`, source/license note, root `gopher.png` identity note, and output directory `assets/<article-slug>-gopher/`.
- Quick examples can use `Go Gopher` as `{visual IP}`; omitted visual IP still selects Xiaohei.
- Route-specific delivery reports include Go Gopher selected IP, purpose, saved path, source/license note, public sample gate, and route stability notes.

Directory marker:

```text
ian-xiaohei-illustrations/references/ips/gopher/
├── index.md
├── source.md
├── style-dna.md
├── gopher-ip.md
├── composition-patterns.md
├── prompt-template.md
└── qa-checklist.md
```

Maintainer validation marker:

- Phase 42 owns validator parity, Node tests, final release evidence, docs consistency, leakage scan, and public sample gate automation for Go Gopher.
- Current Phase 41 maintainer checks use targeted `rg` checks and `git diff --check` against README variants, examples, NOTICE, release checklist, and agent metadata.

## Licence

MIT License. Voir [LICENSE](LICENSE).