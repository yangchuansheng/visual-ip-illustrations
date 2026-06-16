<div dir="rtl">

# Visual IP Illustrations

> Visual IP Illustrations هي Codex Skill متعددة IP مرئية لرسوم متن المقالات. Xiaohei هو المسار الافتراضي الضمني؛ Littlebox مسار صريح و active؛ Tom مسار protected-character صريح بحالة `gated-authorized`؛ Ferris مسار Rust-community mascot صريح بحالة `source-reviewed`؛ Seal مسار product-neutral hoodie seal صريح بحالة `active`؛ OpenClaw مسار logo-mascot صريح بحالة `source-reviewed`.
>
> أفقي 16:9 | عدة IP مرئية | رسوم متن المقالات | الاستدعاء القياسي: `$visual-ip-illustrations`

<!-- README-I18N:START -->

[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md) | [Deutsch](./README.de.md) | [Français](./README.fr.md) | [简体中文](./README.zh.md) | [繁體中文](./README.zh-Hant.md) | [한국어](./README.ko.md) | [日本語](./README.ja.md) | **العربية** | [Русский](./README.ru.md) | [Українська](./README.uk.md) | [Türkçe](./README.tr.md)

<!-- README-I18N:END -->

---

## ما هذا المستودع

يوجه Visual IP Illustrations وكيل ذكاء اصطناعي لإنشاء رسوم داخلية للمقالات والمنشورات والمدونات ومستندات Notion وكتابات المنهجيات.

تقرأ هذه skill المرساة الإدراكية في النص المصدر ثم تحول حكما أو workflow أو بنية أو حالة أو استعارة إلى صورة تفسيرية مرسومة باليد بنسبة 16:9.

قائمة المسارات الحالية:

- **Xiaohei**: implicit default route. عندما يحذف المستخدم visual IP، تستخدم skill مسار Xiaohei وتحافظ على تجربة article illustration مرسومة باليد على خلفية بيضاء.
- **Littlebox**: explicit active route. الطلبات التي تذكر `小盒` أو `Littlebox` أو `纸盒` أو `paper-box` أو `carton` تستخدم route Littlebox.
- **Tom**: explicit protected-character route. الطلبات التي تذكر `Tom` أو `Tom Cat` أو `Tom and Jerry` أو `汤姆` أو `汤姆猫` تستخدم route Tom.
- **Ferris**: explicit Rust-community mascot route. الطلبات التي تذكر `Ferris` أو `Rust mascot` أو `Rust crab` أو `Rustacean` أو `Rust 吉祥物` أو `Rust 螃蟹` تستخدم route Ferris.
- **Seal**: explicit product-neutral hoodie seal route. الطلبات التي تذكر `Seal` أو `hoodie seal` أو `white seal` أو `blue hoodie seal` أو `海豹` أو `连帽衫海豹` أو `白色海豹` أو `蓝色连帽衫海豹` تستخدم route Seal.
- **OpenClaw**: مسار logo-mascot صريح بحالة `source-reviewed`. الطلبات التي تذكر `OpenClaw` أو `openclaw` أو `OpenClaw logo` أو `OpenClaw mascot` أو aliases الخاصة بOpenClaw المدرجة في `ian-xiaohei-illustrations/references/routing.md` تستخدم route OpenClaw.

القيمة الأساسية: يمكن للمستخدم اختيار IP مرئية والحصول على أصول رسوم للمقالات تبقى فيها الشخصية وقواعد الأسلوب وprompts وبوابات QA والمخرجات المحفوظة والإسناد وسياق المصدر وحدود العلامة متسقة مع تلك IP.

تستخدم الهوية العامة لإصدار Release 1.4 الاسم `Visual IP Illustrations`، وslug المحلي canonical `visual-ip-illustrations`، والاستدعاء canonical `$visual-ip-illustrations`. تبقى أسطح التوافق ثابتة: الدليل القابل للتثبيت `ian-xiaohei-illustrations/`، والalias legacy `$ian-xiaohei-illustrations`، ومسارات المصدر الحالية `ian-xiaohei-illustrations/`، وسلوك المسارات، وأدلة الإخراج، وعلامات validator.

---

## لمن هو

- كتّاب يحتاجون إلى رسوم داخل متن المقال لشرح مفاهيم المقالات.
- مفكرو منتج ومؤلفو منهجيات يريدون استعارات بصرية واضحة.
- مؤلفو workflows للذكاء الاصطناعي يحتاجون إلى prompts قابلة لإعادة الاستخدام للغة البصرية.
- مستخدمو Codex الذين يريدون skill package متعددة IP ومستقرة.

## المخرجات

- Shot list من 4 إلى 8 صور للمقال الواحد.
- لكل صورة: الموضع، الموضوع، الفكرة المركزية، نوع البنية، فعل الشخصية، والتسميات المرئية المقترحة.
- صور PNG النهائية.
- تُحفظ مخرجات Xiaohei في workspace path `assets/<article-slug>-illustrations/`.
- تُحفظ مخرجات Littlebox في workspace path `assets/<article-slug>-littlebox/`.
- تُحفظ مخرجات Tom في workspace path `assets/<article-slug>-tom/`.
- تُحفظ مخرجات Ferris في workspace path `assets/<article-slug>-ferris/`.
- تُحفظ مخرجات Seal في workspace path `assets/<article-slug>-seal/`.
- تكتب OpenClaw المخرجات في workspace path `assets/<article-slug>-openclaw/`.

تحافظ docs validation أيضاً على علامات route escaped بصيغة HTML: `assets/&lt;article-slug&gt;-illustrations/`، `assets/&lt;article-slug&gt;-littlebox/`، `assets/&lt;article-slug&gt;-tom/`، `assets/&lt;article-slug&gt;-ferris/`، و`assets/&lt;article-slug&gt;-seal/` و`assets/&lt;article-slug&gt;-openclaw/`.

---

## مسارات IP المرئية

### Xiaohei

Xiaohei هو المسار الافتراضي: شخصية سوداء صلبة بعيون نقطية وأرجل رفيعة وتعبير محايد، تنفذ فعلاً معرفياً غريباً ومقروءاً على خلفية بيضاء صافية. يناسب الأحكام وworkflows ونقاط الانكسار والفخاخ ومسارات التسليم والرؤى المحلية للأنظمة.

Alias: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.

### Littlebox

Littlebox هو مسار صريح: شخصية صندوق ورقي مغلق بخطوط marker سوداء خشنة، وخلفية أزرق سماوي باهت أو لافندر باهت، وشريط كهرماني ولمسات coral قليلة. يترجم الفعل المعرفي إلى جمع أو تغليف أو ترتيب أو تسليم أو حجب أو إصلاح.

Alias: `小盒`, `Littlebox`, `纸盒`, `paper-box`, `carton`.

### Tom

Tom هو مسار protected-character صريح: القط الأزرق الرمادي المعروف يحمل مفهوم المقال عبر فعل كوميدي نشط داخل rights boundary الخاص بالمسار. يناسب منطق المطاردة والفخاخ والاختصارات الفاشلة والخطط الهشة والانقلابات ومشكلات التوقيت وتسلسلات cause-effect بأسلوب cartoon.

Alias: `Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`.

### Ferris

Ferris هو مسار صريح لmascot مجتمع Rust: mascot سرطان برتقالي مدمج ينفذ الفعل المعرفي المركزي عبر البناء أو الترتيب أو الحماية أو الرفع أو الربط أو الإصلاح بعناية. يناسب systems thinking والموثوقية وownership وتدفقات compile-like ومراجعة tradeoffs وفحوص الحدود واستعارات Rust objects منخفضة التقنية.

Alias: `Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`.

### Seal

Seal هو مسار product-neutral hoodie seal صريح: فقمة بيضاء مستديرة مع قبعة navy بسيطة وhoodie أزرق عميق بسيط تنفذ الحكم أو التسلسل أو التسليم أو المقارنة أو الإصلاح المركزي في المقال. يناسب review وprioritization وsource-history awareness والمشاهد logo-free واستعارات المقال منخفضة التقنية.

Alias: `Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹`.

### OpenClaw

OpenClaw مسار logo-mascot صريح: تنفذ شخصية شعار OpenClaw الرسمية الحمراء المستديرة مفهوماً واحداً من المقال عبر أفعال ودية مثل الفحص أو الحمل أو بناء الجسور أو الفرز أو الرفع أو الإشارة. يناسب وضوح workflow وفحوص التوافق وتنسيق model/tool وبوابات review واستعارات مشاريع source-reviewed.

Alias: `OpenClaw`, `openclaw`, `OpenClaw logo`, `OpenClaw mascot`، إضافة إلى aliases الخاصة بOpenClaw المدرجة في `ian-xiaohei-illustrations/references/routing.md`.

### مرجع المسارات

يمكن للمشرفين مراجعة route metadata fields في `ian-xiaohei-illustrations/references/routing.md`: `id` و`display_name` و`aliases` و`default` و`output_suffix` و`required_references` و`attribution_context` و`status`.

Canonical packs:

- Xiaohei: `ian-xiaohei-illustrations/references/ips/xiaohei/`
- Littlebox: `ian-xiaohei-illustrations/references/ips/littlebox/`
- Tom: `ian-xiaohei-illustrations/references/ips/tom/`, core entry `index.md`, rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`
- Ferris: `ian-xiaohei-illustrations/references/ips/ferris/`, source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`
- Seal: `ian-xiaohei-illustrations/references/ips/seal/`, source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`
- OpenClaw: `ian-xiaohei-illustrations/references/ips/openclaw/`, source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`

عندما يطلب الطلب عدة visual IPs، قدّم مجموعات variants منفصلة واكتب كل مجموعة في دليل إخراج خاص بها. تحتفظ OpenClaw بمجموعة route خاصة بها وroute-local references ودليل output خاص.

Route operational data:

- Tom: status `gated-authorized`; rights boundary `ian-xiaohei-illustrations/references/ips/tom/rights.md`; output path `assets/<article-slug>-tom/`; docs validation token `assets/&lt;article-slug&gt;-tom/`; output suffix `tom`; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and Tom rights record approval.
- Ferris: status `source-reviewed`; source/trademark authority `ian-xiaohei-illustrations/references/ips/ferris/source.md`; output path `assets/<article-slug>-ferris/`; docs validation token `assets/&lt;article-slug&gt;-ferris/`; output suffix `ferris`; public rendered samples require the `RELEASE_CHECKLIST.md` Rust trademark and endorsement-safe wording gate. Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.
- Seal: route id `seal`; default=false; status `active`; source-history authority `ian-xiaohei-illustrations/references/ips/seal/source.md`; output path `assets/<article-slug>-seal/`; docs validation token `assets/&lt;article-slug&gt;-seal/`; output suffix `seal`; hoodie seal identity uses a white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, and side-rear white tail; logo-free boundary keeps cap, hoodie chest, mascot body, props, and scene plain and mark-free; product-neutral route isolation keeps Seal separate from product-brand routes; source-history attachment stays required; public rendered samples require release gates for hoodie seal identity, logo-free output, product-neutral route isolation, source-history attachment, and article-metaphor quality.
- OpenClaw: route id `openclaw`; default=false; status `source-reviewed`; source/license authority `ian-xiaohei-illustrations/references/ips/openclaw/source.md`; output path `assets/<article-slug>-openclaw/`; docs validation token `assets/&lt;article-slug&gt;-openclaw/`; output suffix `openclaw`; uploaded-logo identity uses a red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs; public rendered samples require the `RELEASE_CHECKLIST.md` public-sample gate and final OpenClaw release evidence.

---

## معرض الأمثلة

هذه الصور أمثلة calibration لأسلوب Xiaohei. استخدمها لفهم line density وwhitespace وcolor restraint وcharacter participation، ثم ابتكر استعارة جديدة للمقال الحالي.

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

## التثبيت

```bash
git clone https://github.com/yangchuansheng/ian-xiaohei-illustrations.git visual-ip-illustrations
cd visual-ip-illustrations
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

بعد التثبيت، فضّل `$visual-ip-illustrations` في Codex.

توافق Release 1.4:

- Canonical public invocation: `$visual-ip-illustrations`
- Legacy compatibility alias: `$ian-xiaohei-illustrations`
- Installable skill package directory: `ian-xiaohei-illustrations/`
- Current live repository remote: `https://github.com/yangchuansheng/ian-xiaohei-illustrations.git`
- Local checkout target directory: `visual-ip-illustrations`
- يبقى route behavior وoutput directories ثابتين عبر سطحي invocation.

---

## أمثلة سريعة

يمكن أن تكون `{visual IP}` هي `Xiaohei` أو `Littlebox` أو `Tom` أو `Ferris` أو `Seal` أو اسما مستعارا مدعوما. حذف IP المرئية يختار Xiaohei.

### تخطيط shot list

```text
Use $visual-ip-illustrations. Do not generate images yet.
Use {visual IP} to create a 5-image article body illustration shot list for the article below.
For each image, include placement, theme, core idea, structure type, character action, and suggested visible labels in the user's language.

<paste article>
```

### توليد رسوم متن المقال

```text
Use $visual-ip-illustrations with {visual IP} to generate 4 article body illustrations for the article below.
Each image should express one core idea, and the selected character must carry the action.
Use the selected IP's route-local references, QA checklist, and output path.

<paste article>
```

### فكرة واحدة

```text
Use $visual-ip-illustrations with {visual IP} to generate one 16:9 article body illustration.
Idea: trust is built by placing one piece of evidence after another.
Requirements: hand-drawn, spacious, sparse visible labels in the user's language, and the character performing the central action.
```

### مقارنة IP

```text
Use $visual-ip-illustrations. Do not generate images yet.
Create separate Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw shot-list groups from the same idea.
Each group must keep its own IP, character action, visible labels, and output path.

Idea: trust is built by placing one piece of evidence after another.
```

تحمل مسارات protected-character وsource-reviewed وactive source-history تلقائياً route status وsource/rights note وrelease gate ودليل إخراج محدد; تحمل OpenClaw source/license authority وuploaded-logo identity وpublic-sample gate و`assets/<article-slug>-openclaw/`.

توجد أمثلة إضافية قابلة للنسخ في [examples/prompts.md](examples/prompts.md).

---

## سير العمل

1. اقرأ المقال أو Markdown أو محتوى Notion أو screenshot أو الموضوع الذي يقدمه المستخدم.
2. اختر visual IP: حذف IP يختار Xiaohei؛ Littlebox الصريح يختار Littlebox؛ Tom aliases تختار Tom protected-character route؛ Ferris aliases تختار Ferris source-reviewed pack؛ Seal aliases تختار active Seal pack; OpenClaw aliases الصريحة تختار OpenClaw source-reviewed pack.
3. استخرج core claims وcognitive turns وworkflow structures وvisualizable paragraphs.
4. أنشئ shot list أولاً؛ تحصل كل صورة على cognitive anchor واحد.
5. اختر structure type واحداً لكل صورة: Workflow أو system local view أو before/after أو character state أو concept metaphor أو method layers أو map route أو comic panels.
6. حمّل canonical pack للIP المختارة، واجمع prompts، وولّد الصور واحدة تلو الأخرى. تنشئ Mixed-IP requests مجموعات route منفصلة وoutput directories منفصلة، مع احتفاظ Xiaohei وLittlebox وTom وFerris وSeal بمراجع route-local الخاصة بكل منها; تحتفظ OpenClaw أيضاً بroute-local references.
7. افحص character identity وcomposition وbackground وlabels وoutput path وفق QA checklist الخاصة بالIP المختارة. يحتفظ Tom ب`gated-authorized` و`ian-xiaohei-illustrations/references/ips/tom/rights.md`؛ يحتفظ Ferris ب`source-reviewed` وsource/trademark note و`ian-xiaohei-illustrations/references/ips/ferris/source.md`؛ يحتفظ Seal ب`active` وsource-history authority وhoodie seal identity note وlogo-free note و`ian-xiaohei-illustrations/references/ips/seal/source.md`; تحتفظ OpenClaw ب`source-reviewed` وsource/license authority وuploaded-logo identity وpublic-sample gate و`ian-xiaohei-illustrations/references/ips/openclaw/source.md`.
8. احفظ ملفات PNG النهائية واذكر الغرض والمسار.

---

## بنية المجلدات

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

هدف تثبيت Codex هو هذا الدليل الفرعي:

```text
ian-xiaohei-illustrations/
```

Root README وLICENSE وNOTICE وexamples هي GitHub distribution docs.

---

## تحقق المشرفين

```bash
node scripts/validate-skill-package.mjs
```

تغطي validation عناصر skill package shape وroute table وcanonical packs الخاصة بXiaohei وLittlebox وTom وFerris وSeal وlegacy Xiaohei paths وpublic docs links وoutput path markers وNOTICE attribution وTom `gated-authorized` route markers وFerris `source-reviewed` route markers وSeal `active` route markers وsource-history authority وhoodie seal identity note وlogo-free note وPhase 32 full validator restoration evidence.

تغطي validation أيضاً OpenClaw canonical pack markers وOpenClaw `source-reviewed` route markers وsource/license authority وuploaded-logo identity note وPhase 37 final release evidence.

أوامر validation الحالية للمشرفين:

```bash
node scripts/validate-skill-package.mjs
node --test scripts/validate-skill-package.test.mjs
git diff --check
```

فحوص pre-release موجودة في [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).

---

## الرخصة

MIT License. راجع [LICENSE](LICENSE).

</div>
