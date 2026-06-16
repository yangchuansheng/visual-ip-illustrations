# Visual IP Illustrations

> Visual IP Illustrations es una Codex Skill de múltiples IP visuales para ilustraciones dentro del cuerpo de artículos. Xiaohei es la ruta predeterminada implícita; Littlebox es explícita y activa; Tom es una ruta explícita de personaje protegido con estado `gated-authorized`; Ferris es una ruta explícita de mascota de la comunidad Rust con estado `source-reviewed`; Seal es una ruta explícita de foca con sudadera, neutral al producto, con estado `active`; OpenClaw es una ruta explícita de logo-mascota con estado `source-reviewed`. Go Gopher is an explicit source-reviewed article-illustration mascot route with output path `assets/<article-slug>-gopher/`.
>
> 16:9 horizontal | múltiples IP visuales | ilustraciones para cuerpo de artículos | Invocación canónica: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | **Español** | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | [العربية](./README.ar.md) | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## Qué es este repositorio

Visual IP Illustrations guía a un agente de IA para crear ilustraciones de cuerpo para artículos, posts, blogs, documentos de Notion y escritura metodológica.

La skill lee el ancla cognitiva del texto fuente y convierte un juicio, workflow, estructura, estado o metáfora en una imagen explicativa memorable, dibujada a mano en 16:9.

Inventario actual de rutas:

- **Xiaohei**: ruta predeterminada implícita. Cuando el usuario omite una IP visual, la skill usa Xiaohei y conserva la experiencia de ilustración dibujada a mano sobre fondo blanco.
- **Littlebox**: ruta explícita activa. Las solicitudes que nombran `小盒`, `Littlebox`, `纸盒`, `paper-box` o `carton` usan la ruta Littlebox.
- **Tom**: ruta explícita de personaje protegido. Las solicitudes que nombran `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆` o `汤姆猫` usan la ruta Tom.
- **Ferris**: ruta explícita de mascota de la comunidad Rust. Las solicitudes que nombran `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物` o `Rust 螃蟹` usan la ruta Ferris.
- **Seal**: ruta explícita de foca con sudadera neutral al producto. Las solicitudes que nombran `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹` o `蓝色连帽衫海豹` usan la ruta Seal.
- **OpenClaw**: ruta explícita de logo-mascota con estado `source-reviewed`. Las solicitudes que nombran `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot` o los alias OpenClaw listados en `ian-xiaohei-illustrations/references/routing.md` usan la ruta OpenClaw.
- **Go Gopher**: explicit source-reviewed article-illustration mascot route. Requests that name `Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`, or Go Gopher aliases listed in `ian-xiaohei-illustrations/references/routing.md` use the Go Gopher route.

Valor central: los usuarios pueden elegir una IP visual y recibir recursos de ilustración de artículos cuyos personajes, reglas de estilo, prompts, puertas de QA, salidas guardadas, atribución, contexto de origen y límites de marca se mantienen coherentes con esa IP.

La identidad pública de Release 1.4 usa `Visual IP Illustrations`, el slug canónico de checkout local `visual-ip-illustrations` y la invocación canónica `$visual-ip-illustrations`. Las superficies de compatibilidad siguen estables: directorio instalable `ian-xiaohei-illustrations/`, alias de compatibilidad legacy `$ian-xiaohei-illustrations`, rutas fuente existentes `ian-xiaohei-illustrations/`, comportamiento de rutas, directorios de salida y marcadores del validador.

---

## Para quién es

- Escritores que necesitan ilustraciones de cuerpo para conceptos de artículos.
- Pensadores de producto y autores de metodología que quieren metáforas visuales claras.
- Autores de flujos de trabajo de IA que necesitan prompts reutilizables de lenguaje visual.
- Usuarios de Codex que quieren un paquete skill multi-IP estable.

## Salidas

- Una shot list de 4-8 imágenes para un artículo.
- Para cada imagen: ubicación, tema, idea central, tipo de estructura, acción del personaje y etiquetas visibles sugeridas.
- Imágenes PNG finales.
- Xiaohei guarda salidas en `assets/<article-slug>-illustrations/` dentro del workspace.
- Littlebox guarda salidas en `assets/<article-slug>-littlebox/` dentro del workspace.
- Tom guarda salidas en `assets/<article-slug>-tom/` dentro del workspace.
- Ferris guarda salidas en `assets/<article-slug>-ferris/` dentro del workspace.
- Seal guarda salidas en `assets/<article-slug>-seal/` dentro del workspace.
- OpenClaw escribe salidas en el workspace path `assets/<article-slug>-openclaw/`.

La validación de docs también conserva marcadores de ruta escapados en HTML: `assets/&lt;article-slug&gt;-illustrations/`, `assets/&lt;article-slug&gt;-littlebox/`, `assets/&lt;article-slug&gt;-tom/`, `assets/&lt;article-slug&gt;-ferris/`, `assets/&lt;article-slug&gt;-seal/` y `assets/&lt;article-slug&gt;-openclaw/`.

---

## Rutas de IP visual

### Xiaohei

Xiaohei es la ruta predeterminada: una figura negra sólida con ojos de punto, piernas delgadas y expresión neutra, que realiza activamente una acción cognitiva extraña pero legible sobre fondo blanco puro. Funciona bien para juicios, workflows, puntos de ruptura, trampas, rutas de traspaso y vistas locales de sistemas.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox es una ruta explícita: un personaje de caja de papel cerrada con líneas negras rugosas de marcador, fondo azul cielo pálido o lavanda pálido, cinta ámbar y acentos coral escasos. Traduce una acción cognitiva en recolectar, empacar, ordenar, entregar, bloquear o reparar.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom es una ruta explícita de personaje protegido: el conocido gato azul grisáceo lleva un concepto de artículo mediante una acción cómica activa dentro del límite de derechos de la ruta. Funciona bien para lógica de persecución, trampas, atajos fallidos, planes frágiles, reversiones, problemas de timing y secuencias de causa-efecto estilo caricatura.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris es una ruta explícita de mascota de la comunidad Rust: una mascota compacta de cangrejo naranja realiza la acción cognitiva central construyendo, ordenando, protegiendo, levantando, conectando o reparando con cuidado. Funciona bien para pensamiento sistémico, fiabilidad, ownership, flujos tipo compilación, revisión de tradeoffs, comprobaciones de límites y metáforas de objetos Rust de baja tecnología.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal es una ruta explícita de foca con sudadera neutral al producto: una foca blanca y redondeada con gorra azul marino lisa y sudadera azul profunda lisa realiza el juicio, secuencia, traspaso, comparación o reparación central del artículo. Funciona bien para revisión, priorización, conciencia de historial de origen, escenarios sin logos y metáforas de artículo de baja tecnología.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw es una ruta explícita de logo-mascota: el personaje oficial rojo y redondo del logo OpenClaw representa un concepto de artículo mediante acciones amistosas de inspeccionar, sostener, tender puentes, ordenar, levantar o señalar. Funciona bien para claridad de workflow, comprobaciones de compatibilidad, coordinación modelo/herramienta, puertas de revisión y metáforas de proyecto source-reviewed.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`, además de los alias OpenClaw listados en `ian-xiaohei-illustrations/references/routing.md`.

### Referencia de rutas

Los mantenedores pueden revisar los campos de metadata de rutas en `ian-xiaohei-illustrations/references/routing.md`: `id`, `display_name`, `aliases`, `default`, `output_suffix`, `required_references`, `attribution_context` y `status`.

Packs canónicos:

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`, source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Seal: `ian-xiaohei-illustrations/references/ips/seal/`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`
- OpenClaw: `ian-xiaohei-illustrations/references/ips/openclaw/`, source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`

Cuando una solicitud pide múltiples IP visuales, entrega grupos de variantes separados y escribe cada grupo en su propio directorio de salida. OpenClaw conserva su propio grupo de ruta, referencias locales de ruta y directorio de salida.

Datos operativos de ruta:

- Tom: status `gated-authorized`; rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.

---

## Galería de ejemplos

Estas imágenes son ejemplos de calibración de estilo Xiaohei. Úsalas para entender line density, whitespace, color restraint y character participation, luego inventa una metáfora nueva para el artículo actual.

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

## Instalación

```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Después de instalar, prefiere `$visual-ip-illustrations` en Codex.

Compatibilidad de Release 1.4:

- Invocación pública canónica: `$visual-ip-illustrations`
- Alias de compatibilidad legacy: `$ian-xiaohei-illustrations`
- Directorio instalable de la skill: `ian-xiaohei-illustrations/`
- Remoto vivo actual del repositorio: `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`
- Directorio local de checkout: `visual-ip-illustrations`
- El comportamiento de rutas y los directorios de salida permanecen estables en ambas superficies de invocación.

---

## Ejemplos rápidos

`{visual IP}` puede ser `Xiaohei`, `Littlebox`, `Tom`, `Ferris`, `Seal`, `OpenClaw` o un alias admitido. Si se omite, se selecciona Xiaohei.

### Planificar una shot list

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### Generar ilustraciones de cuerpo

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### Idea única

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### Comparación de IP

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

Las rutas protected-character, source-reviewed y active source-history llevan automáticamente estado de ruta, nota de source/rights, release gate y directorio de salida específico; OpenClaw lleva source/license authority, uploaded-logo identity, public-sample gate y `assets/<article-slug>-openclaw/`.

Hay más ejemplos copiables en [examples/prompts.md](examples/prompts.md).

---

## Flujo de trabajo

1. Lee el artículo, Markdown, contenido de Notion, captura o tema provisto por el usuario.
2. Selecciona la IP visual: una IP omitida selecciona Xiaohei; Littlebox explícito selecciona Littlebox; los alias Tom seleccionan la ruta protected-character de Tom; los alias Ferris seleccionan el pack source-reviewed de Ferris; los alias Seal seleccionan el pack activo de Seal; los alias explícitos de OpenClaw seleccionan el pack source-reviewed de OpenClaw.
3. Extrae afirmaciones centrales, giros cognitivos, estructuras de workflow y párrafos visualizables.
4. Produce primero una shot list; cada imagen recibe un ancla cognitiva.
5. Elige un tipo de estructura por imagen: Workflow, vista local de sistema, antes/después, estado de personaje, metáfora conceptual, capas de método, ruta de mapa o viñetas.
6. Carga el pack canónico de la IP seleccionada, arma prompts y genera imágenes una por una. Las solicitudes multi-IP crean grupos de ruta y directorios de salida separados, con Xiaohei, Littlebox, Tom, Ferris y Seal conservando referencias locales de ruta; OpenClaw también conserva referencias locales de ruta.
7. Revisa identidad del personaje, composición, fondo, etiquetas y ruta de salida con la checklist de QA de la IP seleccionada. Tom conserva `gated-authorized` y `ian-xiaohei-illustrations/references/ips/tom/rights.md`; Ferris conserva `source-reviewed`, nota de fuente/marca y `ian-xiaohei-illustrations/references/ips/ferris/source.md`; Seal conserva `active`, autoridad de source-history, nota de identidad hoodie seal, nota logo-free y `ian-xiaohei-illustrations/references/ips/seal/source.md`; OpenClaw conserva `source-reviewed`, source/license authority, uploaded-logo identity, public-sample gate y `ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
8. Guarda los PNG finales y reporta propósito más ruta.

---

## Estructura de directorios

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

El destino de instalación de Codex es este subdirectorio:

```text
ian-xiaohei-illustrations/
```

El README raíz, LICENSE, NOTICE y examples son docs de distribución en GitHub.

---

## Validación para mantenedores

```bash
node scripts/validate-skill-package.mjs
```

La validación cubre skill package shape, route table, packs canónicos de Xiaohei, Littlebox, Tom, Ferris y Seal, legacy Xiaohei paths, public docs links, output path markers, NOTICE attribution, Tom `gated-authorized` route markers, Ferris `source-reviewed` route markers, Seal `active` route markers, source-history authority, hoodie seal identity note, logo-free note y Phase 32 full validator restoration evidence.

La validación también cubre OpenClaw canonical pack markers, OpenClaw `source-reviewed` route markers, source/license authority, uploaded-logo identity note y Phase 37 final release evidence.

Comandos actuales de validación para mantenedores:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

Las comprobaciones previas al release están en [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).

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

## Licencia

MIT License. Consulta [LICENSE](LICENSE).