import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const PACKAGE_DIR = "skills/visual-ip-illustrations";
const REFERENCES_DIR = path.join(PACKAGE_DIR, "references");
const PUBLIC_DOCS = ["README.md", "examples/prompts.md", "NOTICE.md", "LICENSE"];
const SKILL_FILE = path.join(PACKAGE_DIR, "SKILL.md");
const OPENAI_AGENT_FILE = path.join(PACKAGE_DIR, "agents", "openai.yaml");
const ROUTING_FILE = path.join(REFERENCES_DIR, "routing.md");
const README_FILE = "README.md";
const README_ZH_FILE = "README.zh.md";
const LANGUAGE_POLICY_FILE = "LANGUAGE_POLICY.md";
const HAN_CHARACTER_PATTERN = /\p{Script=Han}/u;
const CHINESE_GALLERY_SLUGS = [
  "01-two-breakpoints.png",
  "02-sort-by-purpose.png",
  "03-one-fish-many-uses.png",
  "04-handoff-path.png",
  "05-information-well.png",
  "06-idea-press.png",
  "07-content-fermentation.png",
  "08-trust-bridge.png",
];
const CHINESE_GALLERY_ROUTES = [
  { id: "xiaohei", pathPrefix: "examples/images" },
  { id: "littlebox", pathPrefix: "examples/images/littlebox" },
  { id: "tom", pathPrefix: "examples/images/tom" },
  { id: "ferris", pathPrefix: "examples/images/ferris" },
  { id: "seal", pathPrefix: "examples/images/seal" },
];
const LANGUAGE_DEFAULT_SURFACES = [
  "repository docs",
  "skill instructions",
  "reference docs",
  "examples",
  "release materials",
  "validation output",
  "code",
  "scripts",
  "comments",
  "commit messages",
  "PR copy",
];
const LANGUAGE_EXCEPTION_CATEGORIES = [
  "route aliases",
  "user-language visible labels",
  "prompt placeholders",
  "attribution/source names",
  "compatibility smoke fixtures",
  "Chinese article illustration examples",
  "README language selector labels",
];
const LANGUAGE_ALLOWLIST = [
  ...["简体中文", "繁體中文", "日本語"].map((token) => ({
    category: "README language selector labels",
    paths: ["README.md"],
    token,
    rationale: "README language selector links localized README siblings with human-readable language labels.",
    remediation: "Keep only inside the README-I18N selector while localized README variants exist.",
  })),
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "小黑",
    rationale: "Xiaohei Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "attribution/source names",
    paths: ["NOTICE.md"],
    token: "小黑",
    rationale: "Ian attribution names the recurring Xiaohei character in its original form.",
    remediation: "Keep the source attribution token while public prose remains English-default.",
  },
  {
    category: "route aliases",
    paths: [
      LANGUAGE_POLICY_FILE,
      ROUTING_FILE,
      SKILL_FILE,
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
    ],
    token: "小盒",
    rationale: "Littlebox Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [
      LANGUAGE_POLICY_FILE,
      ROUTING_FILE,
      SKILL_FILE,
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
    ],
    token: "纸盒",
    rationale: "Littlebox Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "汤姆",
    rationale: "Tom Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "汤姆猫",
    rationale: "Tom Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "Rust 吉祥物",
    rationale: "Ferris Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "Rust 螃蟹",
    rationale: "Ferris Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "Sealos 吉祥物",
    rationale: "Sealos Seal Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token: "Sealos 海豹",
    rationale: "Sealos Seal Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in Phase 26 or Phase 27.",
  },
  ...["海豹", "连帽衫海豹", "白色海豹", "蓝色连帽衫海豹"].map((token) => ({
    category: "route aliases",
    paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token,
    rationale: "Seal Chinese route alias compatibility.",
    remediation: "Keep the exact route alias and translate surrounding prose in the planned public-docs migration phase.",
  })),
  ...["OpenClaw 助手", "OpenClaw 吉祥物"].map((token) => ({
    category: "route aliases",
    paths: [ROUTING_FILE],
    token,
    rationale: "OpenClaw Chinese route alias compatibility.",
    remediation: "Keep the exact route alias in the Phase 33 route contract.",
  })),
  ...["Go 吉祥物", "Gopher 吉祥物"].map((token) => ({
    category: "route aliases",
    paths: [ROUTING_FILE, "README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"],
    token,
    rationale: "Go Gopher Chinese route alias compatibility.",
    remediation: "Keep the exact Go Gopher route alias in route-compatible public surfaces.",
  })),
  {
    category: "prompt placeholders",
    paths: [
      LANGUAGE_POLICY_FILE,
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{正文配图主题}",
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      LANGUAGE_POLICY_FILE,
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}",
    rationale: "Chinese article illustration structure placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{这张图要表达的核心意思}",
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{要删除的文字}",
    rationale: "Chinese title-removal edit prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{具体画面：小黑在哪里、正在做什么、主要物件是什么、信息如何流动}",
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{元素1}",
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  {
    category: "prompt placeholders",
    paths: [
      LANGUAGE_POLICY_FILE,
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "{标注词1}",
    rationale: "Chinese label placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  },
  ...[
    "{元素2}",
    "{元素3}",
    "{元素4}",
    "{标注词2}",
    "{标注词3}",
    "{标注词4}",
    "{可选标注词5}",
  ].map((token) => ({
    category: "prompt placeholders",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token,
    rationale: "Chinese article illustration prompt placeholder compatibility.",
    remediation: "Keep the placeholder token and translate surrounding prose in Phase 26.",
  })),
  {
    category: "route aliases",
    paths: [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ],
    token: "小黑",
    rationale: "Xiaohei Chinese route alias compatibility inside prompt templates.",
    remediation: "Keep the exact route alias in prompt templates.",
  },
  {
    category: "user-language visible labels",
    paths: [path.join(REFERENCES_DIR, "ips", "littlebox", "language-and-labels.md"), "examples/prompts.md"],
    token: "原始材料",
    rationale: "Visible label example copied exactly in the user's language.",
    remediation: "Keep intentional label examples and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "user-language visible labels",
    paths: [path.join(REFERENCES_DIR, "ips", "littlebox", "language-and-labels.md"), "examples/prompts.md"],
    token: "判断",
    rationale: "Visible label example copied exactly in the user's language.",
    remediation: "Keep intentional label examples and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "user-language visible labels",
    paths: [path.join(REFERENCES_DIR, "ips", "littlebox", "language-and-labels.md"), "examples/prompts.md"],
    token: "输出",
    rationale: "Visible label example copied exactly in the user's language.",
    remediation: "Keep intentional label examples and translate surrounding prose in Phase 26 or Phase 27.",
  },
  {
    category: "Chinese article illustration examples",
    paths: ["examples/prompts.md"],
    pattern: /^Use \$ian-xiaohei-illustrations .*[\p{Script=Han}]/u,
    rationale: "Legacy smoke examples intentionally model Chinese article illustration requests.",
    remediation: "Keep compatibility smoke intent and translate surrounding guidance in Phase 27.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "$ian-xiaohei-illustrations 是 v1.4 compatibility alias",
    rationale: "Runtime compatibility marker preserved from the Phase 26 skill migration.",
    remediation: "Keep until a future compatibility milestone removes the v1.4 legacy alias marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "用户省略视觉 IP 时，默认选择小黑路由",
    rationale: "Runtime compatibility marker proving omitted-IP Chinese prompt behavior.",
    remediation: "Keep until a future compatibility milestone removes the Chinese omitted-IP smoke marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "每张单独生成; 不要把多张图拼在一张里",
    rationale: "Runtime compatibility marker for Chinese generation requests that require one image per call.",
    remediation: "Keep until a future compatibility milestone removes the Chinese generation smoke marker.",
  },
  {
    category: "user-language visible labels",
    paths: [SKILL_FILE],
    token: "常见坑",
    rationale: "Example visible title artifact in user language for Xiaohei QA rejection.",
    remediation: "Keep as a bounded visible-text artifact example.",
  },
  {
    category: "user-language visible labels",
    paths: [SKILL_FILE],
    token: "流程图",
    rationale: "Example visible title artifact in user language for Xiaohei QA rejection.",
    remediation: "Keep as a bounded visible-text artifact example.",
  },
  {
    category: "user-language visible labels",
    paths: [SKILL_FILE],
    token: "系统架构图",
    rationale: "Example visible title artifact in user language for Xiaohei QA rejection.",
    remediation: "Keep as a bounded visible-text artifact example.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "保留原始生成文件",
    rationale: "Runtime compatibility marker for preserving original generated files.",
    remediation: "Keep until a future compatibility milestone removes the Chinese preservation smoke marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "选中的视觉 IP",
    rationale: "Runtime output-contract field label preserved for Chinese article illustration delivery compatibility.",
    remediation: "Keep until a future compatibility milestone removes bilingual delivery fields.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "生成了几张",
    rationale: "Runtime output-contract field label preserved for Chinese article illustration delivery compatibility.",
    remediation: "Keep until a future compatibility milestone removes bilingual delivery fields.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "每张图的用途",
    rationale: "Runtime output-contract field label preserved for Chinese article illustration delivery compatibility.",
    remediation: "Keep until a future compatibility milestone removes bilingual delivery fields.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "保存路径",
    rationale: "Runtime output-contract field label preserved for Chinese article illustration delivery compatibility.",
    remediation: "Keep until a future compatibility milestone removes bilingual delivery fields.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [SKILL_FILE],
    token: "哪些图最稳，哪些图是可选",
    rationale: "Runtime output-contract field label preserved for Chinese article illustration delivery compatibility.",
    remediation: "Keep until a future compatibility milestone removes bilingual delivery fields.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [ROUTING_FILE],
    token: "每个 route group 只加载自己的 `required_references`",
    rationale: "Route isolation compatibility marker preserved from the Phase 26 routing migration.",
    remediation: "Keep until a future compatibility milestone removes Chinese route-isolation smoke markers.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [ROUTING_FILE],
    token: "写入 `assets/<article-slug>-",
    rationale: "Route output compatibility marker preserved from the Phase 26 routing migration.",
    remediation: "Keep until a future compatibility milestone removes Chinese route-output smoke markers.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [
      path.join(REFERENCES_DIR, "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "style-dna.md"),
    ],
    token: "纯白背景",
    rationale: "Legacy Xiaohei visual style marker preserved for compatibility.",
    remediation: "Keep as a route-local compatibility marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [
      path.join(REFERENCES_DIR, "xiaohei-ip.md"),
      path.join(REFERENCES_DIR, "qa-checklist.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "xiaohei-ip.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "qa-checklist.md"),
    ],
    token: "小黑承担核心动作",
    rationale: "Legacy Xiaohei participation marker preserved for compatibility.",
    remediation: "Keep as a route-local compatibility marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [
      path.join(REFERENCES_DIR, "xiaohei-ip.md"),
      path.join(REFERENCES_DIR, "qa-checklist.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "xiaohei-ip.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "qa-checklist.md"),
    ],
    token: "小黑像吉祥物、表情包或可爱卡通",
    rationale: "Legacy Xiaohei QA failure marker preserved for compatibility.",
    remediation: "Keep as a route-local compatibility marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [
      path.join(REFERENCES_DIR, "composition-patterns.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "composition-patterns.md"),
    ],
    token: "反复刻规则",
    rationale: "Legacy Xiaohei anti-copy marker preserved for compatibility.",
    remediation: "Keep as a route-local compatibility marker.",
  },
  {
    category: "compatibility smoke fixtures",
    paths: [
      path.join(REFERENCES_DIR, "composition-patterns.md"),
      path.join(REFERENCES_DIR, "ips", "xiaohei", "composition-patterns.md"),
    ],
    token: "只用于风格校准",
    rationale: "Legacy Xiaohei calibration marker preserved for compatibility.",
    remediation: "Keep as a route-local compatibility marker.",
  },
];

function repoPath(...segments) {
  return path.join(REPO_ROOT, ...segments);
}

function packagePath(...segments) {
  return repoPath(PACKAGE_DIR, ...segments);
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function displayPath(absPath) {
  return toPosixPath(path.relative(REPO_ROOT, absPath));
}

function readUtf8(relativePath) {
  return fs.readFileSync(repoPath(relativePath), "utf8");
}

function fileExists(relativePath) {
  return fs.existsSync(repoPath(relativePath)) && fs.statSync(repoPath(relativePath)).isFile();
}

function pngDimensions(relativePath) {
  const data = fs.readFileSync(repoPath(relativePath));
  if (data.length < 24 || data.toString("ascii", 1, 4) !== "PNG") {
    throw new Error(`${relativePath} expected PNG file signature`);
  }
  return {
    width: data.readUInt32BE(16),
    height: data.readUInt32BE(20),
  };
}

function requireFile(relativePath) {
  if (!fileExists(relativePath)) {
    throw new Error(`${relativePath} is missing`);
  }
  return readUtf8(relativePath);
}

function safePackagePath(relativePath) {
  const packageRoot = packagePath();
  const resolved = path.resolve(packageRoot, relativePath);
  const relative = path.relative(packageRoot, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`${relativePath} escapes ${PACKAGE_DIR}`);
  }
  return resolved;
}

function safeReferencePath(routeReferencePath) {
  if (!routeReferencePath.startsWith("references/")) {
    throw new Error(`${routeReferencePath} must start with references/`);
  }
  return safePackagePath(routeReferencePath);
}

function sortedDirectoryEntries(relativePath) {
  return fs
    .readdirSync(repoPath(relativePath), { withFileTypes: true })
    .map((entry) => ({
      name: entry.name,
      path: toPosixPath(path.join(relativePath, entry.name)),
      type: entry.isDirectory() ? "directory" : "file",
    }))
    .sort((a, b) => a.path.localeCompare(b.path, "en"));
}

function sortedFileEntriesRecursive(relativePath) {
  const root = repoPath(relativePath);
  if (!fs.existsSync(root)) {
    return [];
  }

  const entries = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const childPath = path.join(relativePath, entry.name);
    if (entry.isDirectory()) {
      entries.push(...sortedFileEntriesRecursive(childPath));
    } else if (entry.isFile()) {
      entries.push(toPosixPath(childPath));
    }
  }
  return entries.sort((a, b) => a.localeCompare(b, "en"));
}

function stripWrappingTicks(value) {
  return value.trim().replace(/^`+|`+$/g, "").trim();
}

function splitRouteCell(value) {
  return value
    .split(";")
    .map((item) => stripWrappingTicks(item))
    .filter(Boolean);
}

function splitRouteAliases(value) {
  return value
    .split(",")
    .map((item) => stripWrappingTicks(item))
    .filter(Boolean);
}

function isValidReviewDate(value) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;

  const [, yearText, monthText, dayText] = match;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return false;

  return (
    date.getUTCFullYear() === Number(yearText) &&
    date.getUTCMonth() + 1 === Number(monthText) &&
    date.getUTCDate() === Number(dayText)
  );
}

export function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) {
    return { data: {}, body: text };
  }
  const end = text.indexOf("\n---", 4);
  if (end === -1) {
    return { data: {}, body: text };
  }
  const raw = text.slice(4, end).trim();
  const body = text.slice(end + "\n---".length).replace(/^\n/, "");
  const data = {};

  for (const line of raw.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    data[key] = rawValue.replace(/^["']|["']$/g, "");
  }

  return { data, body, raw };
}

export function parseSimpleYamlShape(text) {
  const root = {};
  const stack = [{ indent: -1, value: root }];

  for (const rawLine of text.split("\n")) {
    if (!rawLine.trim() || rawLine.trim().startsWith("#")) continue;
    const indent = rawLine.match(/^ */)[0].length;
    const trimmed = rawLine.trim();
    const match = trimmed.match(/^([^:]+):(?:\s*(.*))?$/);
    if (!match) continue;
    const key = match[1].trim();
    const rawValue = match[2] ?? "";
    const value = parseSimpleYamlScalar(rawValue);

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1].value;
    if (rawValue === "") {
      parent[key] = {};
      stack.push({ indent, value: parent[key] });
    } else {
      parent[key] = value;
    }
  }

  return root;
}

function parseSimpleYamlScalar(rawValue) {
  const value = rawValue.trim();
  if (value === "true") return true;
  if (value === "false") return false;
  return value.replace(/^["']|["']$/g, "");
}

function headingLineIndex(lines, headingText) {
  const normalized = headingText.trim().toLowerCase();
  return lines.findIndex((line) => {
    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    return match && match[2].trim().toLowerCase() === normalized;
  });
}

export function bodyAfterHeading(text, headingText) {
  const lines = text.split("\n");
  const start = headingLineIndex(lines, headingText);
  if (start === -1) return "";
  return lines.slice(start + 1).join("\n").trim();
}

export function parseMarkdownTable(text, headingText) {
  const body = bodyAfterHeading(text, headingText);
  const lines = body.split("\n").map((line) => line.trim());
  const tableStart = lines.findIndex((line) => line.startsWith("|") && line.endsWith("|"));
  if (tableStart === -1 || tableStart + 2 >= lines.length) return [];

  const header = splitMarkdownTableLine(lines[tableStart]).map(stripWrappingTicks);
  const separator = splitMarkdownTableLine(lines[tableStart + 1]);
  if (!separator.every((cell) => /^:?-{3,}:?$/.test(cell.trim()))) return [];

  const rows = [];
  for (const line of lines.slice(tableStart + 2)) {
    if (!line.startsWith("|") || !line.endsWith("|")) break;
    const cells = splitMarkdownTableLine(line);
    const row = {};
    header.forEach((key, index) => {
      row[key] = stripWrappingTicks(cells[index] ?? "");
    });
    rows.push(row);
  }
  return rows;
}

function splitMarkdownTableLine(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function parseMarkdownLinks(text) {
  const links = [];
  const pattern = /!?\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    const rawTarget = match[2].trim();
    const target = rawTarget.replace(/^<|>$/g, "").split(/\s+/)[0];
    links.push({
      label: match[1],
      target,
      external: /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#"),
    });
  }
  return links;
}

export function outputPathTokens() {
  return {
    raw: [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
      "assets/<article-slug>-ferris/",
      "assets/<article-slug>-seal/",
      "assets/<article-slug>-openclaw/",
      "assets/<article-slug>-gopher/",
    ],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
      "assets/&lt;article-slug&gt;-tom/",
      "assets/&lt;article-slug&gt;-ferris/",
      "assets/&lt;article-slug&gt;-seal/",
      "assets/&lt;article-slug&gt;-openclaw/",
      "assets/&lt;article-slug&gt;-gopher/",
    ],
  };
}

// Public docs currently expose only published public route output examples.
function publicDocsOutputPathTokens() {
  return {
    raw: [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
      "assets/<article-slug>-ferris/",
      "assets/<article-slug>-seal/",
      "assets/<article-slug>-openclaw/",
      "assets/<article-slug>-gopher/",
    ],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
      "assets/&lt;article-slug&gt;-tom/",
      "assets/&lt;article-slug&gt;-ferris/",
      "assets/&lt;article-slug&gt;-seal/",
      "assets/&lt;article-slug&gt;-openclaw/",
      "assets/&lt;article-slug&gt;-gopher/",
    ],
  };
}

export function parsePublicTomSampleApproval(releaseChecklistText) {
  return parsePublicRouteSampleApproval(releaseChecklistText, "Tom");
}

export function parsePublicFerrisSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Ferris public asset policy for"));

  return parseFerrisApprovalLine(approvalLine, "public");
}

export function parsePublicSealSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Seal public asset policy for"));

  return parseSealApprovalLine(approvalLine, "public");
}

export function parsePublicOpenClawSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("OpenClaw public asset policy for"));

  return parseOpenClawApprovalLine(approvalLine, "public");
}

export function parsePublicGopherSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Go Gopher public asset policy for"));

  return parseGopherApprovalLine(approvalLine, "public");
}

export function parseGeneratedFerrisSampleApproval(releaseChecklistText) {
  const ferrisSection = releaseChecklistText
    .split("## Ferris Source, Trademark, and Public Sample Gate")[1]
    ?.split("## Seal Source-History, Hoodie Identity, and Public Sample Gate")[0] ?? "";
  const approvalLine = ferrisSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseFerrisApprovalLine(approvalLine, "generated");
}

export function parseGeneratedSealSampleApproval(releaseChecklistText) {
  const sealSection = releaseChecklistText
    .split("## Seal Source-History, Hoodie Identity, and Public Sample Gate")[1] ?? "";
  const approvalLine = sealSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseSealApprovalLine(approvalLine, "generated");
}

export function parseGeneratedOpenClawSampleApproval(releaseChecklistText) {
  const openClawSection = releaseChecklistText
    .split("## OpenClaw Source, License, and Public Sample Gate")[1]
    ?.split("## Installable Package Boundary")[0] ?? "";
  const approvalLine = openClawSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseOpenClawApprovalLine(approvalLine, "generated");
}

export function parseGeneratedGopherSampleApproval(releaseChecklistText) {
  const gopherSection = releaseChecklistText
    .split("## Go Gopher Source, License, and Public Sample Gate")[1]
    ?.split("## Installable Package Boundary")[0] ?? "";
  const approvalLine = gopherSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseGopherApprovalLine(approvalLine, "generated");
}

function parsePublicRouteSampleApproval(releaseChecklistText, routeName) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) =>
      line.includes(`Public rendered ${routeName} samples approved for`) &&
      line.includes("examples/images") &&
      line.includes("skills/visual-ip-illustrations/assets/examples"),
    );

  if (!approvalLine) {
    return {
      found: false,
      checked: false,
      status: "",
      reviewer: "",
      reviewDate: "",
      approvalStatus: "",
      allowedDirectories: [],
      releaseChannels: "",
      reviewerPresent: false,
      datePresent: false,
      approvalStatusPresent: false,
      allowedDirectoriesPresent: false,
      releaseChannelsPresent: false,
      complete: false,
    };
  }

  const checked = /^\-\s+\[[xX]\]/.test(approvalLine);
  const [, approvalRecord = ""] = approvalLine.split(/:\s*/, 2);
  const fields = approvalRecord.split(/\s+\/(?=\s)/).map((field) => field.trim());
  const [
    status = "",
    reviewer = "",
    reviewDate = "",
    approvalStatus = "",
    allowedDirectoriesText = "",
    releaseChannels = "",
  ] = fields;
  const allowedDirectories = allowedDirectoriesText
    .split(/,|;|\band\b/)
    .map((directory) => directory.trim())
    .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
    .filter(Boolean);
  const requiredDirectories = ["examples/images", "examples/images-en", "skills/visual-ip-illustrations/assets/examples"];
  const reviewerPresent = Boolean(reviewer) && !/^reviewer$/i.test(reviewer);
  const datePresent = isValidReviewDate(reviewDate);
  const approvalStatusPresent =
    Boolean(approvalStatus) &&
    !/^approval status$/i.test(approvalStatus) &&
    /(approved|complete|granted)/i.test(approvalStatus);
  const allowedDirectoriesPresent = requiredDirectories.every((directory) => allowedDirectories.includes(directory));
  const releaseChannelsPresent = Boolean(releaseChannels) && !/^release channels\.?$/i.test(releaseChannels);
  const complete =
    checked &&
    /(approved|complete|granted)/i.test(status) &&
    !/pending/i.test(status) &&
    reviewerPresent &&
    datePresent &&
    approvalStatusPresent &&
    !/pending/i.test(approvalStatus) &&
    allowedDirectoriesPresent &&
    releaseChannelsPresent;

  return {
    found: true,
    checked,
    status,
    reviewer,
    reviewDate,
    approvalStatus,
    allowedDirectories,
    releaseChannels,
    reviewerPresent,
    datePresent,
    approvalStatusPresent,
    allowedDirectoriesPresent,
    releaseChannelsPresent,
    complete,
  };
}

function emptyFerrisApproval() {
  return {
    found: false,
    checked: false,
    status: "",
    reviewer: "",
    reviewDate: "",
    approvalStatus: "",
    allowedDirectories: [],
    internalReviewDirectories: [],
    publicDirectories: [],
    releaseChannels: "",
    trademarkOutcome: "",
    reviewerPresent: false,
    datePresent: false,
    approvalStatusPresent: false,
    allowedDirectoriesPresent: false,
    internalReviewDirectoriesPresent: false,
    publicDirectoriesPresent: false,
    releaseChannelsPresent: false,
    trademarkOutcomePresent: false,
    complete: false,
  };
}

function emptySealApproval() {
  return {
    found: false,
    checked: false,
    status: "",
    reviewer: "",
    reviewDate: "",
    approvalStatus: "",
    allowedDirectories: [],
    internalReviewDirectories: [],
    publicDirectories: [],
    releaseChannels: "",
    identityOutcome: "",
    noLogoOutcome: "",
    reviewerPresent: false,
    datePresent: false,
    approvalStatusPresent: false,
    allowedDirectoriesPresent: false,
    internalReviewDirectoriesPresent: false,
    publicDirectoriesPresent: false,
    releaseChannelsPresent: false,
    identityOutcomePresent: false,
    noLogoOutcomePresent: false,
    complete: false,
  };
}

function emptyOpenClawApproval() {
  return {
    found: false,
    checked: false,
    status: "",
    reviewer: "",
    reviewDate: "",
    approvalStatus: "",
    allowedDirectories: [],
    internalReviewDirectories: [],
    publicDirectories: [],
    releaseChannels: "",
    uploadedLogoIdentityOutcome: "",
    sourceLicenseOutcome: "",
    routeIsolationOutcome: "",
    articleMetaphorOutcome: "",
    reviewerPresent: false,
    datePresent: false,
    approvalStatusPresent: false,
    allowedDirectoriesPresent: false,
    internalReviewDirectoriesPresent: false,
    publicDirectoriesPresent: false,
    releaseChannelsPresent: false,
    uploadedLogoIdentityOutcomePresent: false,
    sourceLicenseOutcomePresent: false,
    routeIsolationOutcomePresent: false,
    articleMetaphorOutcomePresent: false,
    complete: false,
  };
}

function emptyGopherApproval() {
  return {
    found: false,
    checked: false,
    status: "",
    reviewer: "",
    reviewDate: "",
    approvalStatus: "",
    allowedDirectories: [],
    internalReviewDirectories: [],
    publicDirectories: [],
    releaseChannels: "",
    sourceOutcome: "",
    attributionOutcome: "",
    licenseOutcome: "",
    visualOutcome: "",
    routeIsolationOutcome: "",
    logoBoundaryOutcome: "",
    endorsementBoundaryOutcome: "",
    articleMetaphorOutcome: "",
    publicSampleOutcome: "",
    reviewerPresent: false,
    datePresent: false,
    approvalStatusPresent: false,
    allowedDirectoriesPresent: false,
    internalReviewDirectoriesPresent: false,
    publicDirectoriesPresent: false,
    releaseChannelsPresent: false,
    sourceOutcomePresent: false,
    attributionOutcomePresent: false,
    licenseOutcomePresent: false,
    visualOutcomePresent: false,
    routeIsolationOutcomePresent: false,
    logoBoundaryOutcomePresent: false,
    endorsementBoundaryOutcomePresent: false,
    articleMetaphorOutcomePresent: false,
    publicSampleOutcomePresent: false,
    complete: false,
  };
}

function parseSealApprovalLine(approvalLine, kind) {
  if (!approvalLine) {
    return emptySealApproval();
  }

  const checked = /^\-\s+\[[xX]\]/.test(approvalLine);
  const recordMatch = approvalLine.match(/:\s*(.+?)(?:\.)?$/);
  const approvalRecord = recordMatch?.[1] ?? "";
  const fields = approvalRecord.split(/\s+\/(?=\s)/).map((field) => field.trim().replace(/\.$/, ""));
  const [
    status = "",
    reviewer = "",
    reviewDate = "",
    approvalStatus = "",
    firstDirectoryText = "",
    secondDirectoryOrChannels = "",
    releaseChannelsOrIdentity = "",
    identityOrNoLogo = "",
    noLogoOutcomeText = "",
  ] = fields;
  const parseDirectories = (value) =>
    value
      .split(/,|;|\band\b/)
      .map((directory) => directory.trim())
      .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
      .filter(Boolean);
  const allowedDirectories = kind === "public" ? parseDirectories(firstDirectoryText) : [];
  const internalReviewDirectories = kind === "generated" ? parseDirectories(firstDirectoryText) : [];
  const publicDirectories = kind === "generated" ? parseDirectories(secondDirectoryOrChannels) : [];
  const releaseChannels = kind === "public" ? secondDirectoryOrChannels : releaseChannelsOrIdentity;
  const identityOutcome = kind === "public" ? releaseChannelsOrIdentity : identityOrNoLogo;
  const noLogoOutcome = kind === "public" ? identityOrNoLogo : noLogoOutcomeText;
  const publicRequiredDirectories = ["examples/images", "examples/images-en", "skills/visual-ip-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-seal"];
  const generatedRequiredPublicDirectories = ["examples/images", "skills/visual-ip-illustrations/assets/examples"];
  const legacyAllowedDirectories = firstDirectoryText
    .split(/,|;|\band\b/)
    .map((directory) => directory.trim())
    .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
    .filter(Boolean);
  const reviewerPresent = Boolean(reviewer) && !/^reviewer$/i.test(reviewer);
  const datePresent = isValidReviewDate(reviewDate);
  const approvalStatusPresent =
    Boolean(approvalStatus) &&
    !/^approval status$/i.test(approvalStatus) &&
    /(approved|complete|granted)/i.test(approvalStatus);
  const allowedDirectoriesPresent =
    kind === "public" && publicRequiredDirectories.every((directory) => legacyAllowedDirectories.includes(directory));
  const internalReviewDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredInternalDirectories.every((directory) => internalReviewDirectories.includes(directory));
  const publicDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredPublicDirectories.every((directory) => publicDirectories.includes(directory));
  const releaseChannelsPresent = Boolean(releaseChannels) && !/^release channels\.?$/i.test(releaseChannels);
  const identityOutcomePresent =
    Boolean(identityOutcome) && !/^(uploaded-image identity outcome|hoodie seal identity outcome)\.?$/i.test(identityOutcome);
  const noLogoOutcomePresent = Boolean(noLogoOutcome) && !/^no-logo outcome\.?$/i.test(noLogoOutcome);
  const directoryFieldsPresent =
    kind === "public" ? allowedDirectoriesPresent : internalReviewDirectoriesPresent && publicDirectoriesPresent;
  const complete =
    checked &&
    /(approved|complete|granted)/i.test(status) &&
    !/pending/i.test(status) &&
    reviewerPresent &&
    datePresent &&
    approvalStatusPresent &&
    !/pending/i.test(approvalStatus) &&
    directoryFieldsPresent &&
    releaseChannelsPresent &&
    identityOutcomePresent &&
    noLogoOutcomePresent;

  return {
    found: true,
    checked,
    status,
    reviewer,
    reviewDate,
    approvalStatus,
    allowedDirectories,
    internalReviewDirectories,
    publicDirectories,
    releaseChannels,
    identityOutcome,
    noLogoOutcome,
    reviewerPresent,
    datePresent,
    approvalStatusPresent,
    allowedDirectoriesPresent,
    internalReviewDirectoriesPresent,
    publicDirectoriesPresent,
    releaseChannelsPresent,
    identityOutcomePresent,
    noLogoOutcomePresent,
    complete,
  };
}

function parseOpenClawApprovalLine(approvalLine, kind) {
  if (!approvalLine) {
    return emptyOpenClawApproval();
  }

  const checked = /^\-\s+\[[xX]\]/.test(approvalLine);
  const recordMatch = approvalLine.match(/:\s*(.+?)(?:\.)?$/);
  const approvalRecord = recordMatch?.[1] ?? "";
  const fields = approvalRecord.split(/\s+\/(?=\s)/).map((field) => field.trim().replace(/\.$/, ""));
  const [
    status = "",
    reviewer = "",
    reviewDate = "",
    approvalStatus = "",
    firstDirectoryText = "",
    secondDirectoryOrChannels = "",
    releaseChannelsOrUploadedLogo = "",
    uploadedLogoOrSource = "",
    sourceOrRoute = "",
    routeOrArticle = "",
    articleMetaphorOutcomeText = "",
  ] = fields;

  const parseDirectories = (value) =>
    value
      .split(/,|;|\band\b/)
      .map((directory) => directory.trim())
      .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
      .filter(Boolean);

  const publicRequiredDirectories = ["examples/images", "examples/images-en", "skills/visual-ip-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-openclaw"];
  const generatedRequiredPublicDirectories = ["examples/images", "skills/visual-ip-illustrations/assets/examples"];
  const allowedDirectories = kind === "public" ? parseDirectories(firstDirectoryText) : [];
  const internalReviewDirectories = kind === "generated" ? parseDirectories(firstDirectoryText) : [];
  const publicDirectories = kind === "generated" ? parseDirectories(secondDirectoryOrChannels) : [];
  const releaseChannels = kind === "public" ? secondDirectoryOrChannels : releaseChannelsOrUploadedLogo;
  const uploadedLogoIdentityOutcome = kind === "public" ? releaseChannelsOrUploadedLogo : uploadedLogoOrSource;
  const sourceLicenseOutcome = kind === "public" ? uploadedLogoOrSource : sourceOrRoute;
  const routeIsolationOutcome = kind === "public" ? sourceOrRoute : routeOrArticle;
  const articleMetaphorOutcome = kind === "public" ? routeOrArticle : articleMetaphorOutcomeText;
  const reviewerPresent = Boolean(reviewer) && !/^reviewer$/i.test(reviewer);
  const datePresent = isValidReviewDate(reviewDate);
  const approvalStatusPresent =
    Boolean(approvalStatus) &&
    !/^approval status$/i.test(approvalStatus) &&
    /(approved|complete|granted)/i.test(approvalStatus);
  const allowedDirectoriesPresent =
    kind === "public" && publicRequiredDirectories.every((directory) => allowedDirectories.includes(directory));
  const internalReviewDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredInternalDirectories.every((directory) => internalReviewDirectories.includes(directory));
  const publicDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredPublicDirectories.every((directory) => publicDirectories.includes(directory));
  const releaseChannelsPresent = Boolean(releaseChannels) && !/^release channels\.?$/i.test(releaseChannels);
  const uploadedLogoIdentityOutcomePresent =
    Boolean(uploadedLogoIdentityOutcome) && !/^uploaded-logo identity outcome\.?$/i.test(uploadedLogoIdentityOutcome);
  const sourceLicenseOutcomePresent =
    Boolean(sourceLicenseOutcome) && !/^source\/license outcome\.?$/i.test(sourceLicenseOutcome);
  const routeIsolationOutcomePresent =
    Boolean(routeIsolationOutcome) && !/^route-isolation outcome\.?$/i.test(routeIsolationOutcome);
  const articleMetaphorOutcomePresent =
    Boolean(articleMetaphorOutcome) && !/^article-metaphor quality outcome\.?$/i.test(articleMetaphorOutcome);
  const directoryFieldsPresent =
    kind === "public" ? allowedDirectoriesPresent : internalReviewDirectoriesPresent && publicDirectoriesPresent;
  const complete =
    checked &&
    /(approved|complete|granted)/i.test(status) &&
    !/pending/i.test(status) &&
    reviewerPresent &&
    datePresent &&
    approvalStatusPresent &&
    !/pending/i.test(approvalStatus) &&
    directoryFieldsPresent &&
    releaseChannelsPresent &&
    uploadedLogoIdentityOutcomePresent &&
    sourceLicenseOutcomePresent &&
    routeIsolationOutcomePresent &&
    articleMetaphorOutcomePresent;

  return {
    found: true,
    checked,
    status,
    reviewer,
    reviewDate,
    approvalStatus,
    allowedDirectories,
    internalReviewDirectories,
    publicDirectories,
    releaseChannels,
    uploadedLogoIdentityOutcome,
    sourceLicenseOutcome,
    routeIsolationOutcome,
    articleMetaphorOutcome,
    reviewerPresent,
    datePresent,
    approvalStatusPresent,
    allowedDirectoriesPresent,
    internalReviewDirectoriesPresent,
    publicDirectoriesPresent,
    releaseChannelsPresent,
    uploadedLogoIdentityOutcomePresent,
    sourceLicenseOutcomePresent,
    routeIsolationOutcomePresent,
    articleMetaphorOutcomePresent,
    complete,
  };
}

function parseGopherApprovalLine(approvalLine, kind) {
  if (!approvalLine) {
    return emptyGopherApproval();
  }

  const checked = /^\-\s+\[[xX]\]/.test(approvalLine);
  const recordMatch = approvalLine.match(/:\s*(.+?)(?:\.)?$/);
  const approvalRecord = recordMatch?.[1] ?? "";
  const fields = approvalRecord.split(/\s+\/(?=\s)/).map((field) => field.trim().replace(/\.$/, ""));
  const [
    status = "",
    reviewer = "",
    reviewDate = "",
    approvalStatus = "",
    firstDirectoryText = "",
    secondDirectoryOrChannels = "",
    releaseChannelsOrSource = "",
    sourceOrAttribution = "",
    attributionOrLicense = "",
    licenseOrVisual = "",
    visualOrRoute = "",
    routeOrLogo = "",
    logoOrEndorsement = "",
    endorsementOrArticle = "",
    articleOrPublic = "",
    publicSampleOutcomeText = "",
  ] = fields;

  const parseDirectories = (value) =>
    value
      .split(/,|;|\band\b/)
      .map((directory) => directory.trim())
      .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
      .filter(Boolean);

  const publicRequiredDirectories = ["examples/images", "examples/images-en", "skills/visual-ip-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-gopher"];
  const generatedRequiredPublicDirectories = ["examples/images", "skills/visual-ip-illustrations/assets/examples"];
  const allowedDirectories = kind === "public" ? parseDirectories(firstDirectoryText) : [];
  const internalReviewDirectories = kind === "generated" ? parseDirectories(firstDirectoryText) : [];
  const publicDirectories = kind === "generated" ? parseDirectories(secondDirectoryOrChannels) : [];
  const releaseChannels = kind === "public" ? secondDirectoryOrChannels : releaseChannelsOrSource;
  const sourceOutcome = kind === "public" ? releaseChannelsOrSource : "generated sample uses source record";
  const attributionOutcome = kind === "public" ? sourceOrAttribution : sourceOrAttribution;
  const licenseOutcome = kind === "public" ? attributionOrLicense : attributionOrLicense;
  const visualOutcome = kind === "public" ? licenseOrVisual : licenseOrVisual;
  const routeIsolationOutcome = kind === "public" ? visualOrRoute : visualOrRoute;
  const logoBoundaryOutcome = kind === "public" ? routeOrLogo : routeOrLogo;
  const endorsementBoundaryOutcome = kind === "public" ? logoOrEndorsement : logoOrEndorsement;
  const articleMetaphorOutcome = kind === "public" ? endorsementOrArticle : endorsementOrArticle;
  const publicSampleOutcome = kind === "public" ? articleOrPublic || publicSampleOutcomeText : "generated sample gated";
  const reviewerPresent = Boolean(reviewer) && !/^reviewer$/i.test(reviewer);
  const datePresent = isValidReviewDate(reviewDate);
  const approvalStatusPresent =
    Boolean(approvalStatus) &&
    !/^approval status$/i.test(approvalStatus) &&
    /(approved|complete|granted)/i.test(approvalStatus);
  const allowedDirectoriesPresent =
    kind === "public" && publicRequiredDirectories.every((directory) => allowedDirectories.includes(directory));
  const internalReviewDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredInternalDirectories.every((directory) => internalReviewDirectories.includes(directory));
  const publicDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredPublicDirectories.every((directory) => publicDirectories.includes(directory));
  const releaseChannelsPresent = Boolean(releaseChannels) && !/^release channels\.?$/i.test(releaseChannels);
  const sourceOutcomePresent = Boolean(sourceOutcome) && !/^Go blog source outcome\.?$/i.test(sourceOutcome);
  const attributionOutcomePresent =
    Boolean(attributionOutcome) && !/^Renee French attribution outcome\.?$/i.test(attributionOutcome);
  const licenseOutcomePresent =
    Boolean(licenseOutcome) && !/^Creative Commons Attribution 4\.0 outcome\.?$/i.test(licenseOutcome);
  const visualOutcomePresent = Boolean(visualOutcome) && !/^local visual marker outcome\.?$/i.test(visualOutcome);
  const routeIsolationOutcomePresent =
    Boolean(routeIsolationOutcome) && !/^route-isolation outcome\.?$/i.test(routeIsolationOutcome);
  const logoBoundaryOutcomePresent =
    Boolean(logoBoundaryOutcome) && !/^Go logo boundary outcome\.?$/i.test(logoBoundaryOutcome);
  const endorsementBoundaryOutcomePresent =
    Boolean(endorsementBoundaryOutcome) && !/^official endorsement boundary outcome\.?$/i.test(endorsementBoundaryOutcome);
  const articleMetaphorOutcomePresent =
    Boolean(articleMetaphorOutcome) && !/^article-metaphor quality outcome\.?$/i.test(articleMetaphorOutcome);
  const publicSampleOutcomePresent =
    Boolean(publicSampleOutcome) && !/^public-sample decision\.?$/i.test(publicSampleOutcome);
  const directoryFieldsPresent =
    kind === "public" ? allowedDirectoriesPresent : internalReviewDirectoriesPresent && publicDirectoriesPresent;
  const sharedOutcomesPresent =
    attributionOutcomePresent &&
    licenseOutcomePresent &&
    visualOutcomePresent &&
    routeIsolationOutcomePresent &&
    logoBoundaryOutcomePresent &&
    endorsementBoundaryOutcomePresent &&
    articleMetaphorOutcomePresent;
  const complete =
    checked &&
    /(approved|complete|granted)/i.test(status) &&
    !/pending/i.test(status) &&
    reviewerPresent &&
    datePresent &&
    approvalStatusPresent &&
    !/pending/i.test(approvalStatus) &&
    directoryFieldsPresent &&
    releaseChannelsPresent &&
    sharedOutcomesPresent &&
    (kind === "public" ? sourceOutcomePresent && publicSampleOutcomePresent : true);

  return {
    found: true,
    checked,
    status,
    reviewer,
    reviewDate,
    approvalStatus,
    allowedDirectories,
    internalReviewDirectories,
    publicDirectories,
    releaseChannels,
    sourceOutcome,
    attributionOutcome,
    licenseOutcome,
    visualOutcome,
    routeIsolationOutcome,
    logoBoundaryOutcome,
    endorsementBoundaryOutcome,
    articleMetaphorOutcome,
    publicSampleOutcome,
    reviewerPresent,
    datePresent,
    approvalStatusPresent,
    allowedDirectoriesPresent,
    internalReviewDirectoriesPresent,
    publicDirectoriesPresent,
    releaseChannelsPresent,
    sourceOutcomePresent,
    attributionOutcomePresent,
    licenseOutcomePresent,
    visualOutcomePresent,
    routeIsolationOutcomePresent,
    logoBoundaryOutcomePresent,
    endorsementBoundaryOutcomePresent,
    articleMetaphorOutcomePresent,
    publicSampleOutcomePresent,
    complete,
  };
}

function readmeVariantFiles() {
  return fs
    .readdirSync(REPO_ROOT)
    .filter((fileName) => /^README(?:\.[^.]+)?\.md$/u.test(fileName))
    .sort();
}

function parseFerrisApprovalLine(approvalLine, kind) {
  if (!approvalLine) {
    return emptyFerrisApproval();
  }

  const checked = /^\-\s+\[[xX]\]/.test(approvalLine);
  const recordMatch = approvalLine.match(/:\s*(.+?)(?:\.)?$/);
  const approvalRecord = recordMatch?.[1] ?? "";
  const fields = approvalRecord.split(/\s+\/(?=\s)/).map((field) => field.trim().replace(/\.$/, ""));
  const [
    status = "",
    reviewer = "",
    reviewDate = "",
    approvalStatus = "",
    firstDirectoryText = "",
    secondDirectoryOrChannels = "",
    releaseChannelsOrTrademark = "",
    trademarkOutcomeText = "",
  ] = fields;

  const parseDirectories = (value) =>
    value
      .split(/,|;|\band\b/)
      .map((directory) => directory.trim())
      .map((directory) => directory.replace(/^`+|`+$/g, "").replace(/[./]+$/g, ""))
      .filter(Boolean);

  const publicRequiredDirectories = ["examples/images", "examples/images-en", "skills/visual-ip-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-ferris"];
  const generatedRequiredPublicDirectories = ["examples/images", "skills/visual-ip-illustrations/assets/examples"];
  const allowedDirectories = kind === "public" ? parseDirectories(firstDirectoryText) : [];
  const internalReviewDirectories = kind === "generated" ? parseDirectories(firstDirectoryText) : [];
  const publicDirectories = kind === "generated" ? parseDirectories(secondDirectoryOrChannels) : [];
  const releaseChannels = kind === "public" ? secondDirectoryOrChannels : releaseChannelsOrTrademark;
  const trademarkOutcome = kind === "public" ? releaseChannelsOrTrademark : trademarkOutcomeText;
  const reviewerPresent = Boolean(reviewer) && !/^reviewer$/i.test(reviewer);
  const datePresent = isValidReviewDate(reviewDate);
  const approvalStatusPresent =
    Boolean(approvalStatus) &&
    !/^approval status$/i.test(approvalStatus) &&
    /(approved|complete|granted)/i.test(approvalStatus);
  const allowedDirectoriesPresent =
    kind === "public" && publicRequiredDirectories.every((directory) => allowedDirectories.includes(directory));
  const internalReviewDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredInternalDirectories.every((directory) => internalReviewDirectories.includes(directory));
  const publicDirectoriesPresent =
    kind === "generated" &&
    generatedRequiredPublicDirectories.every((directory) => publicDirectories.includes(directory));
  const releaseChannelsPresent = Boolean(releaseChannels) && !/^release channels\.?$/i.test(releaseChannels);
  const trademarkOutcomePresent =
    Boolean(trademarkOutcome) && !/^trademark and endorsement-safe wording outcome\.?$/i.test(trademarkOutcome);
  const directoryFieldsPresent =
    kind === "public" ? allowedDirectoriesPresent : internalReviewDirectoriesPresent && publicDirectoriesPresent;
  const complete =
    checked &&
    /(approved|complete|granted)/i.test(status) &&
    !/pending/i.test(status) &&
    reviewerPresent &&
    datePresent &&
    approvalStatusPresent &&
    !/pending/i.test(approvalStatus) &&
    directoryFieldsPresent &&
    releaseChannelsPresent &&
    trademarkOutcomePresent;

  return {
    found: true,
    checked,
    status,
    reviewer,
    reviewDate,
    approvalStatus,
    allowedDirectories,
    internalReviewDirectories,
    publicDirectories,
    releaseChannels,
    trademarkOutcome,
    reviewerPresent,
    datePresent,
    approvalStatusPresent,
    allowedDirectoriesPresent,
    internalReviewDirectoriesPresent,
    publicDirectoriesPresent,
    releaseChannelsPresent,
    trademarkOutcomePresent,
    complete,
  };
}

function assertMarkers(text, relativePath, markers) {
  const missing = markers.filter((marker) => !text.includes(marker));
  if (missing.length > 0) {
    throw new Error(`${relativePath} missing marker(s): ${missing.join(", ")}`);
  }
}

function assertIncludes(text, relativePath, markers, relation) {
  const missing = markers.filter((marker) => !text.includes(marker));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing marker(s): ${missing.join(", ")}`,
    );
  }
}

function assertNoMarkers(text, relativePath, markers, relation) {
  const present = markers.filter((marker) => text.includes(marker));
  if (present.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed forbidden marker(s): ${present.join(", ")}`,
    );
  }
}

function assertArrayIncludes(actual, expected, relativePath, relation) {
  const missing = expected.filter((item) => !actual.includes(item));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing item(s): ${missing.join(", ")}`,
    );
  }
}

function uniqueItems(items) {
  return [...new Set(items)];
}

function normalizeBody(text) {
  return text.trim().replace(/\r\n/g, "\n");
}

function routeRows() {
  return parseMarkdownTable(requireFile(ROUTING_FILE), "IP Routes");
}

function routeById(id) {
  const row = routeRows().find((route) => route.id === id);
  if (!row) {
    throw new Error(`${ROUTING_FILE} expected route row id=${id}; observed row is missing`);
  }
  return row;
}

function routeReferencePaths(row) {
  return splitRouteCell(row.required_references ?? "");
}

function languageScanTargets() {
  const routeReferences = routeRows().flatMap((row) =>
    routeReferencePaths(row).map((referencePath) => displayPath(safeReferencePath(referencePath))),
  );
  return uniqueItems([
    LANGUAGE_POLICY_FILE,
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "RELEASE_CHECKLIST.md",
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    ROUTING_FILE,
    ...routeReferences,
    ...legacyXiaoheiRefs().map((item) => item.root),
  ]).filter(fileExists);
}

function validateLanguageAllowlistShape(entries = LANGUAGE_ALLOWLIST) {
  const allowedCategories = new Set(LANGUAGE_EXCEPTION_CATEGORIES);
  const errors = [];
  entries.forEach((entry, index) => {
    const label = `LANGUAGE_ALLOWLIST[${index}]`;
    if (!entry.category || !allowedCategories.has(entry.category)) {
      errors.push(`${label} has invalid category=${entry.category ?? "missing"}`);
    }
    if (!Array.isArray(entry.paths) || entry.paths.length === 0) {
      errors.push(`${label} missing paths`);
    } else {
      for (const scopedPath of entry.paths) {
        if (!scopedPath || typeof scopedPath !== "string") {
          errors.push(`${label} has invalid path scope`);
        }
        if (
          scopedPath === "." ||
          scopedPath.endsWith("/") ||
          (scopedPath.includes("*") && (/\.md$/i.test(scopedPath) || scopedPath.includes(".md")))
        ) {
          errors.push(`${label} rejects broad Markdown path scope=${scopedPath}`);
        }
      }
    }
    const hasToken = typeof entry.token === "string" && entry.token.length > 0;
    const hasPattern = entry.pattern instanceof RegExp;
    if (hasToken === hasPattern) {
      errors.push(`${label} must define exact token or anchored pattern`);
    }
    if (hasPattern && !entry.pattern.source.startsWith("^")) {
      errors.push(`${label} pattern must be anchored`);
    }
    if (!entry.rationale) {
      errors.push(`${label} missing rationale`);
    }
    if (!entry.remediation) {
      errors.push(`${label} missing remediation target`);
    }
  });
  if (errors.length > 0) {
    throw new Error(`LANGUAGE_ALLOWLIST expected narrow entries; observed ${errors.join("; ")}`);
  }
}

function findHanExcerpt(line) {
  const index = line.search(HAN_CHARACTER_PATTERN);
  if (index === -1) return "";
  const start = Math.max(0, index - 24);
  const end = Math.min(line.length, index + 48);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < line.length ? "..." : "";
  return `${prefix}${line.slice(start, end).trim()}${suffix}`;
}

function languageEntryMatches(entry, relativePath, line) {
  if (!entry.paths.includes(relativePath)) return false;
  if (entry.token) return line.includes(entry.token);
  return entry.pattern.test(line);
}

function classifyLanguageLine(relativePath, lineNumber, line) {
  if (!HAN_CHARACTER_PATTERN.test(line)) return [];
  const approved = LANGUAGE_ALLOWLIST.filter((entry) => languageEntryMatches(entry, relativePath, line));
  if (approved.length > 0) {
    const findings = approved.map((entry) => ({
      status: "approved",
      category: entry.category,
      path: relativePath,
      line: lineNumber,
      token: entry.token ?? entry.pattern.source,
      remediation: entry.remediation,
    }));
    const tokenApprovals = approved
      .filter((entry) => entry.token)
      .sort((a, b) => b.token.length - a.token.length);
    if (tokenApprovals.length === 0) {
      return findings;
    }
    const remainingLine = tokenApprovals.reduce(
      (remaining, entry) => remaining.split(entry.token).join(""),
      line,
    );
    if (HAN_CHARACTER_PATTERN.test(remainingLine)) {
      findings.push({
        status: "stale",
        category: "stale Chinese prose",
        path: relativePath,
        line: lineNumber,
        excerpt: findHanExcerpt(remainingLine),
        remediation: "Translate surrounding prose in Phase 26 or Phase 27, or add a narrow approved exception.",
      });
    }
    return findings;
  }
  return [
    {
      status: "stale",
      category: "stale Chinese prose",
      path: relativePath,
      line: lineNumber,
      excerpt: findHanExcerpt(line),
      remediation: "Translate surrounding prose in Phase 26 or Phase 27, or add a narrow approved exception.",
    },
  ];
}

function collectLanguageFindings(targets = languageScanTargets()) {
  validateLanguageAllowlistShape();
  const findings = [];
  for (const relativePath of targets) {
    const lines = requireFile(relativePath).split("\n");
    lines.forEach((line, index) => {
      findings.push(...classifyLanguageLine(relativePath, index + 1, line));
    });
  }
  return findings;
}

function formatLanguageFinding(finding) {
  const payload = finding.token ? `token=${finding.token}` : `excerpt=${finding.excerpt}`;
  return `status=${finding.status}; category=${finding.category}; path=${finding.path}:${finding.line}; ${payload}; remediation=${finding.remediation}`;
}

function languageScanReport({ enforce = true } = {}) {
  const findings = collectLanguageFindings();
  const approved = findings.filter((finding) => finding.status === "approved");
  const stale = findings.filter((finding) => finding.status === "stale");
  const sampleFindings = [...approved.slice(0, 3), ...stale.slice(0, 3)].map(formatLanguageFinding);
  if (enforce && stale.length > 0) {
    throw new Error(
      `residual Chinese scan expected no stale prose; observed approved=${approved.length} stale=${stale.length}; ${sampleFindings.join(" | ")}`,
    );
  }
  return {
    approved,
    stale,
    formatted: sampleFindings,
    summary: `approved=${approved.length} stale=${stale.length} mode=${enforce ? "enforce" : "report"}`,
  };
}

function markdownTableHeader(text, headingText) {
  const body = bodyAfterHeading(text, headingText);
  const line = body
    .split("\n")
    .map((item) => item.trim())
    .find((item) => item.startsWith("|") && item.endsWith("|"));
  if (!line) return [];
  return splitMarkdownTableLine(line).map(stripWrappingTicks);
}

function requiredPackageFiles() {
  return [
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    ROUTING_FILE,
    path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
    ...xiaoheiOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
    ...littleboxOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
    ...tomOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
    path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
    ...ferrisOperationalRefs(),
    ...sealOperationalRefs(),
    ...openclawOperationalRefs(),
    ...gopherOperationalRefs(),
    ...legacyXiaoheiRefs().map((item) => item.root),
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "LICENSE",
  ];
}

function xiaoheiOperationalRefs() {
  return [
    "references/ips/xiaohei/style-dna.md",
    "references/ips/xiaohei/xiaohei-ip.md",
    "references/ips/xiaohei/composition-patterns.md",
    "references/ips/xiaohei/prompt-template.md",
    "references/ips/xiaohei/qa-checklist.md",
  ].map((item) => path.join(PACKAGE_DIR, item));
}

function littleboxOperationalRefs() {
  return [
    "references/ips/littlebox/style-dna.md",
    "references/ips/littlebox/littlebox-ip.md",
    "references/ips/littlebox/composition-patterns.md",
    "references/ips/littlebox/language-and-labels.md",
    "references/ips/littlebox/prompt-template.md",
    "references/ips/littlebox/qa-checklist.md",
  ].map((item) => path.join(PACKAGE_DIR, item));
}

function tomOperationalRefs() {
  return [
    "references/ips/tom/rights.md",
    "references/ips/tom/style-dna.md",
    "references/ips/tom/tom-ip.md",
    "references/ips/tom/composition-patterns.md",
    "references/ips/tom/prompt-template.md",
    "references/ips/tom/qa-checklist.md",
  ].map((item) => path.join(PACKAGE_DIR, item));
}

function ferrisOperationalRefs() {
  return [
    "references/ips/ferris/style-dna.md",
    "references/ips/ferris/ferris-ip.md",
    "references/ips/ferris/composition-patterns.md",
    "references/ips/ferris/prompt-template.md",
    "references/ips/ferris/qa-checklist.md",
  ].map((item) => path.join(PACKAGE_DIR, item));
}

function sealOperationalRefs() {
  return sealPlannedReferences().map((item) => path.join(PACKAGE_DIR, item));
}

function legacyXiaoheiRefs() {
  return [
    ["style-dna.md", "style-dna.md"],
    ["xiaohei-ip.md", "xiaohei-ip.md"],
    ["composition-patterns.md", "composition-patterns.md"],
    ["prompt-template.md", "prompt-template.md"],
    ["qa-checklist.md", "qa-checklist.md"],
  ].map(([root, canonical]) => ({
    root: path.join(REFERENCES_DIR, root),
    canonical: path.join(REFERENCES_DIR, "ips", "xiaohei", canonical),
  }));
}

function localMarkdownLinks(relativePaths) {
  const links = [];
  for (const relativePath of relativePaths) {
    for (const link of parseMarkdownLinks(requireFile(relativePath))) {
      if (!link.external) {
        links.push({ source: relativePath, ...link });
      }
    }
  }
  return links;
}

function docsTexts() {
  return {
    readme: requireFile("README.md"),
    examples: requireFile("examples/prompts.md"),
  };
}

function combinedText(relativePaths) {
  return relativePaths.map((relativePath) => requireFile(relativePath)).join("\n");
}

function routeReferenceScanTargets() {
  return routeRows().flatMap((row) =>
    routeReferencePaths(row).map((referencePath) => displayPath(safeReferencePath(referencePath))),
  );
}

function assertLanguageScanTargetCoverage() {
  const targets = languageScanTargets();
  const expectedTargets = [
    LANGUAGE_POLICY_FILE,
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "RELEASE_CHECKLIST.md",
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    ROUTING_FILE,
    ...routeReferenceScanTargets(),
  ];
  assertArrayIncludes(targets, uniqueItems(expectedTargets), "language scan targets", "Phase 28 English-default surfaces");
}

function assertEnglishDefaultSurfaceCoverage() {
  assertLanguageScanTargetCoverage();
  const surfaceExpectations = [
    {
      path: "README.md",
      markers: ["# Visual IP Illustrations", "Current route inventory", "Release 1.4 public identity"],
    },
    {
      path: "examples/prompts.md",
      markers: ["# Prompt Examples", "## Canonical normal-flow prompts", "## Legacy compatibility route smoke prompts"],
    },
    {
      path: LANGUAGE_POLICY_FILE,
      markers: ["English is the default", "Approved Multilingual Exceptions", "Phase 28 hardens"],
    },
    {
      path: SKILL_FILE,
      markers: ["# Visual IP Illustrations", "Canonical invocation: `$visual-ip-illustrations`", "Read `references/routing.md` first"],
    },
    {
      path: OPENAI_AGENT_FILE,
      markers: ["Visual IP Illustrations", "default_prompt", "allow_implicit_invocation: true"],
    },
    {
      path: ROUTING_FILE,
      markers: ["# Visual IP Routing", "## IP Routes", "## Output Paths"],
    },
    {
      path: "NOTICE.md",
      markers: ["# Notice", "Littlebox Source Attribution", "Seal Source-History Boundary"],
    },
    {
      path: "RELEASE_CHECKLIST.md",
      markers: ["# Release Checklist", "## Automated Gates", "## Release 1.5 English-Default Review"],
    },
  ];
  for (const expectation of surfaceExpectations) {
    assertIncludes(
      requireFile(expectation.path),
      expectation.path,
      expectation.markers,
      "Phase 28 English-default coverage markers",
    );
  }
}

function assertRouteLocalEnglishCoverage() {
  const targets = languageScanTargets();
  const missingTargets = [];
  const missingMarkers = [];
  for (const relativePath of routeReferenceScanTargets()) {
    if (!targets.includes(relativePath)) {
      missingTargets.push(relativePath);
      continue;
    }
    const text = requireFile(relativePath);
    if (!text.includes("# ") && !text.includes("## ")) {
      missingMarkers.push(`${relativePath}: heading`);
    }
    if (!/[A-Za-z]{4,}/.test(text)) {
      missingMarkers.push(`${relativePath}: English marker`);
    }
  }
  if (missingTargets.length > 0 || missingMarkers.length > 0) {
    throw new Error(
      `route-local language coverage expected scan targets and English content markers; missing targets=${missingTargets.join(", ") || "none"}; missing markers=${missingMarkers.join(", ") || "none"}`,
    );
  }
}

function assertPhase28LanguagePolicy() {
  const report = languageScanReport({ enforce: true });
  const approvedCategories = new Set(report.approved.map((finding) => finding.category));
  const missingCategories = LANGUAGE_EXCEPTION_CATEGORIES.filter((category) => !approvedCategories.has(category));
  if (missingCategories.length > 0) {
    throw new Error(`residual Chinese scan expected approved categories; observed missing ${missingCategories.join(", ")}`);
  }
  if (report.stale.length > 0) {
    throw new Error(`residual Chinese scan expected stale=0; observed ${report.stale.map(formatLanguageFinding).join(" | ")}`);
  }
}

function assertPhase28CompatibilitySurface() {
  assertRebrandRouteTable();
  const combinedRuntimeDocs = combinedText([
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    "README.md",
    "examples/prompts.md",
    LANGUAGE_POLICY_FILE,
    ROUTING_FILE,
  ]);
  assertIncludes(combinedRuntimeDocs, "runtime + docs + policy + routing surfaces", [
    "$visual-ip-illustrations",
    "$ian-xiaohei-illustrations",
    "user's language",
    "visible labels",
    "小黑",
    "小盒",
    "纸盒",
    "汤姆",
    "汤姆猫",
    "Rust 吉祥物",
    "Rust 螃蟹",
    "Seal",
    "hoodie seal",
    "white seal",
    "blue hoodie seal",
    "海豹",
    "连帽衫海豹",
    "白色海豹",
    "蓝色连帽衫海豹",
    "OpenClaw",
    "openclaw",
    "OpenClaw logo",
    "OpenClaw mascot",
    "OpenClaw 助手",
    "OpenClaw 吉祥物",
    "Go Gopher",
    "Gopher",
    "golang gopher",
    "Go mascot",
    "Go 吉祥物",
    "Gopher 吉祥物",
  ], "canonical and legacy invocations, Chinese aliases, and visible-label behavior");

  const routingText = requireFile(ROUTING_FILE);
  for (const route of rebrandRouteExpectations()) {
    assertIncludes(routingText, ROUTING_FILE, [
      `\`${route.id}\``,
      `\`${route.outputSuffix}\``,
      `\`${route.status}\``,
      ...route.aliases,
    ], `${route.id} route id, status, output suffix, and aliases`);
  }

  const outputTokens = outputPathTokens();
  const routePathText = combinedText([SKILL_FILE, ROUTING_FILE]);
  assertIncludes(
    routePathText,
    "SKILL.md + routing.md",
    [...outputTokens.raw, ...outputTokens.escaped],
    "raw and escaped output path compatibility",
  );
}

function assertPhase28ReleaseEvidenceMarkers() {
  const releaseText = requireFile("RELEASE_CHECKLIST.md");
  assertIncludes(releaseText, "RELEASE_CHECKLIST.md", [
    "## Release 1.5 English-Default Review",
    "English-default coverage",
    "node scripts/validate-skill-package.mjs",
    "LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs",
    "node --test scripts/validate-skill-package.test.mjs",
    "git diff --check",
    "residual Han classification",
    "docs consistency",
    "compatibility smoke coverage",
    "$visual-ip-illustrations",
    "$ian-xiaohei-illustrations",
    "Chinese route aliases",
    "Chinese article workflow compatibility",
    "visible-label behavior",
    "route/output path stability",
  ], "Release 1.5 English-default evidence markers");
}

function sealFixedMarkers() {
  return [
    "white rounded seal body",
    "plain navy cap",
    "plain deep-blue hoodie",
    "glossy dark eyes",
    "black nose",
    "whisker dots",
    "small smile",
    "short rounded flippers",
    "compact legs",
    "side-rear white tail",
  ];
}

function sealAliases() {
  return [
    "Seal",
    "hoodie seal",
    "white seal",
    "blue hoodie seal",
    "海豹",
    "连帽衫海豹",
    "白色海豹",
    "蓝色连帽衫海豹",
  ];
}

function sealPlannedReferences() {
  return [
    "references/ips/seal/index.md",
    "references/ips/seal/source.md",
    "references/ips/seal/style-dna.md",
    "references/ips/seal/seal-ip.md",
    "references/ips/seal/composition-patterns.md",
    "references/ips/seal/prompt-template.md",
    "references/ips/seal/qa-checklist.md",
  ];
}

function openclawPlannedReferences() {
  return [
    "references/ips/openclaw/index.md",
    "references/ips/openclaw/source.md",
    "references/ips/openclaw/style-dna.md",
    "references/ips/openclaw/openclaw-ip.md",
    "references/ips/openclaw/composition-patterns.md",
    "references/ips/openclaw/prompt-template.md",
    "references/ips/openclaw/qa-checklist.md",
  ];
}

function openclawOperationalRefs() {
  return openclawPlannedReferences().map((item) => path.join(PACKAGE_DIR, item));
}

function gopherPlannedReferences() {
  return [
    "references/ips/gopher/index.md",
    "references/ips/gopher/source.md",
    "references/ips/gopher/style-dna.md",
    "references/ips/gopher/gopher-ip.md",
    "references/ips/gopher/composition-patterns.md",
    "references/ips/gopher/prompt-template.md",
    "references/ips/gopher/qa-checklist.md",
  ];
}

function gopherOperationalRefs() {
  return gopherPlannedReferences().map((item) => path.join(PACKAGE_DIR, item));
}

function sealDriftMarkers() {
  return [
    "generic seals",
    "abstract logo creatures",
    "missing cap",
    "missing hoodie",
    "logo or mark artifacts",
    "logo-bearing mascot variants",
    "cap logo",
    "chest logo",
    "mascot logo",
    "logo patch",
    "logo-like wave/cloud mark",
    "text badge",
    "generated logo approximation",
    "generated logo tracing",
    "redrawn logo",
    "alternate wave mark",
    "simplified logo mark",
    "changed body color",
    "missing side-rear tail",
    "plain bald-head variants",
    "prior exploration variants",
    "different selected mascot",
  ];
}

function rebrandRouteExpectations() {
  return [
    {
      id: "xiaohei",
      aliases: ["小黑", "Xiaohei", "Ian", "ian-xiaohei"],
      default: "true",
      status: "active",
      outputSuffix: "illustrations",
      referenceCount: 5,
    },
    {
      id: "littlebox",
      aliases: ["小盒", "Littlebox", "纸盒", "paper-box", "carton"],
      default: "false",
      status: "active",
      outputSuffix: "littlebox",
      referenceCount: 6,
    },
    {
      id: "tom",
      aliases: ["Tom", "Tom Cat", "Tom and Jerry", "汤姆", "汤姆猫"],
      default: "false",
      status: "gated-authorized",
      outputSuffix: "tom",
      referenceCount: 7,
    },
    {
      id: "ferris",
      aliases: ["Ferris", "Rust mascot", "Rust crab", "Rustacean", "Rust 吉祥物", "Rust 螃蟹"],
      default: "false",
      status: "source-reviewed",
      outputSuffix: "ferris",
      referenceCount: 7,
    },
    {
      id: "seal",
      aliases: sealAliases(),
      default: "false",
      status: "active",
      outputSuffix: "seal",
      referenceCount: 7,
    },
    {
      id: "openclaw",
      aliases: ["OpenClaw", "openclaw", "OpenClaw logo", "OpenClaw mascot", "OpenClaw 助手", "OpenClaw 吉祥物"],
      default: "false",
      status: "source-reviewed",
      outputSuffix: "openclaw",
      referenceCount: 7,
    },
    {
      id: "gopher",
      aliases: ["Go Gopher", "Gopher", "golang gopher", "Go mascot", "Go 吉祥物", "Gopher 吉祥物"],
      default: "false",
      status: "source-reviewed",
      outputSuffix: "gopher",
      referenceCount: 7,
    },
  ];
}

function assertRebrandRouteTable() {
  const rows = routeRows();
  const expectations = rebrandRouteExpectations();
  const expectedIds = expectations.map((route) => route.id);
  const actualIds = rows.map((route) => route.id);
  if (rows.length !== expectations.length) {
    throw new Error(`${ROUTING_FILE} expected exactly ${expectations.length} rebrand route rows; observed ${rows.length}`);
  }
  if (actualIds.join(", ") !== expectedIds.join(", ")) {
    throw new Error(`${ROUTING_FILE} expected rebrand route ids ${expectedIds.join(", ")}; observed ${actualIds.join(", ")}`);
  }

  for (const expected of expectations) {
    const row = routeById(expected.id);
    const aliases = splitRouteAliases(row.aliases ?? "");
    const references = routeReferencePaths(row);
    assertArrayIncludes(aliases, expected.aliases, ROUTING_FILE, `${expected.id} aliases`);
    if (row.default !== expected.default) {
      throw new Error(`${ROUTING_FILE} expected ${expected.id} default=${expected.default}; observed ${row.default}`);
    }
    if (row.status !== expected.status) {
      throw new Error(`${ROUTING_FILE} expected ${expected.id} status=${expected.status}; observed ${row.status}`);
    }
    if (row.output_suffix !== expected.outputSuffix) {
      throw new Error(
        `${ROUTING_FILE} expected ${expected.id} output_suffix=${expected.outputSuffix}; observed ${row.output_suffix}`,
      );
    }
    if (references.length !== expected.referenceCount) {
      throw new Error(
        `${ROUTING_FILE} expected ${expected.id} required reference count=${expected.referenceCount}; observed ${references.length}`,
      );
    }
  }
}

function imageAssetPaths() {
  return [
    ...sortedFileEntriesRecursive("examples/images"),
    ...sortedFileEntriesRecursive("examples/images-en"),
    ...sortedDirectoryEntries(path.join(PACKAGE_DIR, "assets", "examples"))
      .filter((entry) => entry.type === "file")
      .map((entry) => entry.path),
  ].sort((a, b) => a.localeCompare(b, "en"));
}

function legacyImageAssetPaths() {
  return [
    ...sortedDirectoryEntries("examples/images").filter((entry) => entry.type === "file").map((entry) => entry.path),
    ...sortedDirectoryEntries(path.join(PACKAGE_DIR, "assets", "examples"))
      .filter((entry) => entry.type === "file")
      .map((entry) => entry.path),
  ].sort((a, b) => a.localeCompare(b, "en"));
}

function chineseGalleryImagePaths() {
  return CHINESE_GALLERY_SLUGS.flatMap((slug) =>
    CHINESE_GALLERY_ROUTES.map((route) => `${route.pathPrefix}/${slug}`),
  );
}

function assertChineseReadmeGallery() {
  const text = requireFile(README_ZH_FILE);
  const links = parseMarkdownLinks(text).filter((link) => !link.external && link.target.startsWith("examples/images/"));
  const imageTargets = links.map((link) => link.target.split("#")[0]);
  const expected = chineseGalleryImagePaths();
  const missing = expected.filter((target) => !imageTargets.includes(target));
  const unexpected = imageTargets.filter(
    (target) =>
      target.startsWith("examples/images/") &&
      !target.startsWith("examples/images-en/openclaw/") &&
      !target.startsWith("examples/images-en/gopher/") &&
      !expected.includes(target),
  );
  if (missing.length > 0 || unexpected.length > 0) {
    throw new Error(
      `${README_ZH_FILE} expected exact Chinese multi-IP gallery image set; missing=${missing.join(", ") || "none"} unexpected=${unexpected.join(", ") || "none"}`,
    );
  }

  for (const relativePath of expected) {
    if (!fileExists(relativePath)) {
      throw new Error(`${README_ZH_FILE} expected linked gallery image to exist; observed missing ${relativePath}`);
    }
    const dimensions = pngDimensions(relativePath);
    if (dimensions.width !== 1672 || dimensions.height !== 941) {
      throw new Error(
        `${relativePath} expected 1672x941 PNG for Chinese gallery; observed ${dimensions.width}x${dimensions.height}`,
      );
    }
  }

  for (const route of CHINESE_GALLERY_ROUTES) {
    assertIncludes(text, README_ZH_FILE, [
      `| ${route.id === "xiaohei" ? "Xiaohei" : route.id === "littlebox" ? "Littlebox" : route.id === "tom" ? "Tom" : route.id === "ferris" ? "Ferris" : "Seal"}`,
    ], `${route.id} Chinese gallery column`);
  }
}

function assertExistingFiles(relativePaths, checkPath, relation) {
  const missing = relativePaths.filter((relativePath) => !fileExists(relativePath));
  if (missing.length > 0) {
    throw new Error(`${checkPath} expected ${relation}; observed missing file(s): ${missing.join(", ")}`);
  }
}

function assertReadableFiles(relativePaths, checkPath, relation) {
  assertExistingFiles(relativePaths, checkPath, relation);
  const empty = relativePaths.filter((relativePath) => readUtf8(relativePath).trim().length === 0);
  if (empty.length > 0) {
    throw new Error(`${checkPath} expected ${relation}; observed empty file(s): ${empty.join(", ")}`);
  }
}

class Results {
  constructor() {
    this.items = [];
  }

  pass(id, message) {
    this.items.push({ status: "PASS", id, message });
  }

  fail(id, message) {
    this.items.push({ status: "FAIL", id, message });
  }

  skip(id, message) {
    this.items.push({ status: "SKIP", id, message });
  }

  render() {
    for (const item of this.items) {
      console.log(`[${item.status}] ${item.id} ${item.message}`);
    }
    const total = this.items.length;
    const passed = this.items.filter((item) => item.status === "PASS").length;
    const failed = this.items.filter((item) => item.status === "FAIL").length;
    const skipped = this.items.filter((item) => item.status === "SKIP").length;
    console.log(`Summary: total=${total} passed=${passed} failed=${failed} skipped=${skipped}`);
    if (failed > 0) {
      process.exitCode = 1;
    }
  }
}

function defineCheck(id, message, run) {
  return { id, message, run };
}

function lineNumberFromOffset(text, offset) {
  return text.slice(0, offset).split("\n").length;
}

function activeRouteScanTargets() {
  return [
    "README.md",
    "examples/prompts.md",
    "NOTICE.md",
    "RELEASE_CHECKLIST.md",
    SKILL_FILE,
    OPENAI_AGENT_FILE,
    ROUTING_FILE,
    path.join(REFERENCES_DIR, "ips", "seal", "index.md"),
    path.join(REFERENCES_DIR, "ips", "seal", "style-dna.md"),
    path.join(REFERENCES_DIR, "ips", "seal", "seal-ip.md"),
    path.join(REFERENCES_DIR, "ips", "seal", "composition-patterns.md"),
    path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md"),
    path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md"),
  ];
}

function isAllowedHistoricalSealosFinding(relativePath, line) {
  return (
    (relativePath === "NOTICE.md" && line.includes("Historical provenance")) ||
    (relativePath === ROUTING_FILE && (
      line.includes("former Sealos Seal route identity migrated to product-neutral Seal") ||
      line.includes("prior Sealos context remains historical source evidence") ||
      line.includes("Historical Sealos uploaded mascot image source context")
    )) ||
    (relativePath === "RELEASE_CHECKLIST.md" && line.includes("stale Sealos")) ||
    (relativePath.endsWith(path.join("references", "ips", "seal", "source.md")) &&
      line.includes("Historical Sealos context remains provenance"))
  );
}

function assertStaleSealosActiveRouteScan() {
  const stalePatterns = [
    /\bSealos Seal\b/g,
    /\bSealos mascot\b/g,
    /Sealos 吉祥物/g,
    /Sealos 海豹/g,
    /\bwhite Sealos seal\b/g,
    /brand-owned/g,
    /Brand\/canonical-image note/g,
    /references\/ips\/sealos\//g,
    /assets\/<article-slug>-sealos\//g,
    /assets\/&lt;article-slug&gt;-sealos\//g,
    /Sealos public asset policy/g,
    /Uploaded-Image Identity/g,
    /uploaded-image identity outcome/g,
    /Cloud-developer article metaphor/g,
    /Sealos cloud OS/g,
    /AI-native deployment/g,
    /DevBox/g,
    /Kubernetes/g,
  ];
  const findings = [];
  for (const relativePath of activeRouteScanTargets()) {
    const text = requireFile(relativePath);
    for (const pattern of stalePatterns) {
      for (const match of text.matchAll(pattern)) {
        const lineNumber = lineNumberFromOffset(text, match.index ?? 0);
        const line = text.split("\n")[lineNumber - 1] ?? "";
        if (!isAllowedHistoricalSealosFinding(relativePath, line)) {
          findings.push(`${relativePath}:${lineNumber}:${match[0]}`);
        }
      }
    }
  }
  if (findings.length > 0) {
    throw new Error(`stale Sealos active-route scan expected no active stale markers; observed ${findings.join(" | ")}`);
  }
}

function assertSealDocsConsistencyScan() {
  const sharedMarkers = [
    "Seal",
    "active",
    "source-history authority",
    "skills/visual-ip-illustrations/references/ips/seal/source.md",
    "assets/<article-slug>-seal/",
    "assets/&lt;article-slug&gt;-seal/",
  ];
  for (const relativePath of ["README.md", "examples/prompts.md", "RELEASE_CHECKLIST.md"]) {
    assertIncludes(requireFile(relativePath), relativePath, [
      ...sharedMarkers,
      "hoodie seal identity note",
      "logo-free note",
    ], "Seal docs consistency scan markers");
  }
  assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
    ...sharedMarkers,
    "hoodie seal identity",
    "No-logo markers",
  ], "Seal routing consistency scan markers");
  assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
    "Seal Source-History Boundary",
    "Route status: `active`",
    "Source-history authority: `skills/visual-ip-illustrations/references/ips/seal/source.md`",
    "Logo-free route behavior",
  ], "Seal NOTICE consistency markers");
  assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
    "Seal",
    "explicit Seal active product-neutral hoodie seal route",
    "default Xiaohei",
  ], "Seal agent metadata consistency markers");
}

function assertSealRouteMigrationSmoke() {
  const row = routeById("seal");
  if (row.display_name !== "Seal") {
    throw new Error(`${ROUTING_FILE} expected seal display_name=Seal; observed ${row.display_name || "missing"}`);
  }
  if (row.default !== "false" || row.status !== "active" || row.output_suffix !== "seal") {
    throw new Error(
      `${ROUTING_FILE} expected seal default=false status=active output_suffix=seal; observed default=${row.default || "missing"} status=${row.status || "missing"} output_suffix=${row.output_suffix || "missing"}`,
    );
  }
  assertArrayIncludes(splitRouteAliases(row.aliases ?? ""), sealAliases(), ROUTING_FILE, "Seal route migration aliases");
  const references = routeReferencePaths(row);
  if (references.join("\n") !== sealPlannedReferences().join("\n")) {
    throw new Error(
      `${ROUTING_FILE} expected seal references=${sealPlannedReferences().join(", ")}; observed ${references.join(", ") || "none"}`,
    );
  }
  assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
    "assets/<article-slug>-seal/",
    "assets/&lt;article-slug&gt;-seal/",
    "source-history",
    "hoodie seal identity",
  ], "Seal route migration smoke markers");
}

const checks = [
  defineCheck("PKG-SHAPE-001", "required skill package files exist and are readable", () => {
    assertReadableFiles(requiredPackageFiles(), PACKAGE_DIR, "complete installable package shape");
  }),
  defineCheck("SKILL-FM-001", "SKILL.md frontmatter exposes required skill metadata", () => {
    const skillText = requireFile(SKILL_FILE);
    const frontmatter = parseFrontmatter(skillText);
    if (frontmatter.data.name !== "visual-ip-illustrations") {
      throw new Error(
        `${SKILL_FILE} expected frontmatter name=visual-ip-illustrations; observed ${frontmatter.data.name ?? "missing"}`,
      );
    }
    if (!frontmatter.data.description) {
      throw new Error(`${SKILL_FILE} expected non-empty frontmatter description; observed missing value`);
    }
    assertIncludes(skillText, SKILL_FILE, [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "visual-ip-illustrations",
      "ian-xiaohei-illustrations",
    ], "canonical Visual IP Illustrations runtime identity, canonical invocation, compatibility alias, and local migration markers");
  }),
  defineCheck("SKILL-ROUTE-001", "SKILL.md routes requests through routing.md and selected IP behavior", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "references/routing.md",
      "用户省略视觉 IP 时，默认选择小黑路由",
      "Littlebox",
      "variant group",
      "shared core idea",
      "required_references",
    ], "route-first default, Littlebox, mixed-IP, and required reference markers");
  }),
  defineCheck("SKILL-REFS-001", "SKILL.md lists canonical required references for both routes", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "references/ips/xiaohei/style-dna.md",
      "references/ips/xiaohei/xiaohei-ip.md",
      "references/ips/xiaohei/composition-patterns.md",
      "references/ips/xiaohei/prompt-template.md",
      "references/ips/xiaohei/qa-checklist.md",
      "references/ips/littlebox/style-dna.md",
      "references/ips/littlebox/littlebox-ip.md",
      "references/ips/littlebox/composition-patterns.md",
      "references/ips/littlebox/language-and-labels.md",
      "references/ips/littlebox/prompt-template.md",
      "references/ips/littlebox/qa-checklist.md",
    ], "canonical Xiaohei and Littlebox reference loading paths");
  }),
  defineCheck("SKILL-OUTPUT-001", "SKILL.md maps route output suffixes to output directories", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "output_suffix: illustrations",
      "output_suffix: littlebox",
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
    ], "raw and escaped output path tokens plus suffix mapping");
  }),
  defineCheck("SKILL-GEN-001", "SKILL.md preserves host image generation runtime boundary", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "image_gen",
      "每张单独生成",
      "不要把多张图拼在一张里",
      "保留原始生成文件",
    ], "host image_gen, one-image-per-call, and asset preservation markers");
  }),
  defineCheck("AGENT-SHAPE-001", "openai.yaml exposes expected nested metadata keys", () => {
    const yaml = parseSimpleYamlShape(requireFile(OPENAI_AGENT_FILE));
    if (!yaml.interface?.display_name) {
      throw new Error(`${OPENAI_AGENT_FILE} expected interface.display_name; observed missing value`);
    }
    if (!yaml.interface?.short_description) {
      throw new Error(`${OPENAI_AGENT_FILE} expected interface.short_description; observed missing value`);
    }
    if (!yaml.interface?.default_prompt) {
      throw new Error(`${OPENAI_AGENT_FILE} expected interface.default_prompt; observed missing value`);
    }
    if (yaml.policy?.allow_implicit_invocation !== true) {
      throw new Error(
        `${OPENAI_AGENT_FILE} expected policy.allow_implicit_invocation=true; observed ${yaml.policy?.allow_implicit_invocation ?? "missing"}`,
      );
    }
  }),
  defineCheck("AGENT-TOM-001", "openai.yaml exposes Tom gated route metadata markers", () => {
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "default Xiaohei",
      "Tom is an explicit gated-authorized protected-character route",
      "explicit Tom protected-character route (gated-authorized)",
      "Ferris is an explicit source-reviewed Rust-community mascot route",
      "explicit Ferris Rust-community mascot route (source-reviewed)",
      "allow_implicit_invocation: true",
    ], "Xiaohei default behavior, Littlebox selection, explicit gated Tom, explicit source-reviewed Ferris, and implicit invocation markers");
  }),
  defineCheck("AGENT-SEAL-001", "openai.yaml exposes Seal explicit route metadata markers", () => {
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Seal",
      "default Xiaohei",
      "explicit Seal active product-neutral hoodie seal route",
      "product-neutral hoodie seal route",
      "allow_implicit_invocation: true",
    ], "Seal discovery metadata and default Xiaohei preservation");
  }),
  defineCheck("AGENT-OPENCLAW-001", "openai.yaml exposes OpenClaw source-reviewed route metadata markers", () => {
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "default Xiaohei",
      "OpenClaw",
      "explicit OpenClaw logo-mascot route (source-reviewed)",
      "source-reviewed logo-mascot route",
      "allow_implicit_invocation: true",
    ], "OpenClaw discovery metadata, source-reviewed route status, and default Xiaohei preservation");
  }),
  defineCheck("AGENT-GOPHER-001", "openai.yaml exposes Go Gopher source-reviewed route metadata markers", () => {
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "default Xiaohei",
      "Go Gopher",
      "explicit Go Gopher article-mascot route (source-reviewed)",
      "source-reviewed article-mascot route",
      "allow_implicit_invocation: true",
    ], "Go Gopher discovery metadata, source-reviewed route status, and default Xiaohei preservation");
  }),
  defineCheck("ROUTE-TABLE-001", "routing.md exposes the required route metadata columns and rows", () => {
    const text = requireFile(ROUTING_FILE);
    const columns = markdownTableHeader(text, "IP Routes");
    assertArrayIncludes(columns, [
      "id",
      "display_name",
      "aliases",
      "default",
      "output_suffix",
      "required_references",
      "attribution_context",
      "status",
    ], ROUTING_FILE, "IP Routes table columns");
    assertArrayIncludes(routeRows().map((row) => row.id), [
      "xiaohei",
      "littlebox",
      "tom",
      "ferris",
      "seal",
      "openclaw",
      "gopher",
    ], ROUTING_FILE, "route ids");
  }),
  defineCheck("ROUTE-XH-001", "routing.md preserves the Xiaohei active route contract", () => {
    const row = routeById("xiaohei");
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Xiaohei",
      "小黑",
      "Ian",
      "ian-xiaohei",
      "illustrations",
      "Ian Xiaohei existing package",
      "active",
    ], "Xiaohei display name, aliases, suffix, attribution, and status");
  }),
  defineCheck("ROUTE-LB-001", "routing.md preserves the Littlebox active route contract", () => {
    const row = routeById("littlebox");
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Littlebox",
      "小盒",
      "纸盒",
      "paper-box",
      "carton",
      "littlebox",
      "5km Littlebox Illustrations",
      "okooo5km",
      "37cd93e",
      "active",
    ], "Littlebox display name, aliases, suffix, attribution, and status");
  }),
  defineCheck("ROUTE-TOM-001", "routing.md preserves the Tom gated route contract", () => {
    const row = routeById("tom");
    const references = routeReferencePaths(row);
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Tom",
      "Tom Cat",
      "Tom and Jerry",
      "汤姆",
      "汤姆猫",
      "tom",
      "gated-authorized",
      "attribution records source identity",
      "permission remains authorization-scope specific",
      "references/ips/tom/rights.md",
    ], "Tom display name, aliases, suffix, attribution boundary, rights record, and status");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected tom default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "tom") {
      throw new Error(`${ROUTING_FILE} expected tom output_suffix=tom; observed ${row.output_suffix || "missing"}`);
    }
    assertArrayIncludes(references, [
      "references/ips/tom/index.md",
      "references/ips/tom/rights.md",
      "references/ips/tom/style-dna.md",
      "references/ips/tom/tom-ip.md",
      "references/ips/tom/composition-patterns.md",
      "references/ips/tom/prompt-template.md",
      "references/ips/tom/qa-checklist.md",
    ], ROUTING_FILE, "Tom locked required reference markers");
    const outsideTomPack = references.filter((reference) => !reference.startsWith("references/ips/tom/"));
    if (outsideTomPack.length > 0) {
      throw new Error(
        `${ROUTING_FILE} expected Tom references under references/ips/tom/; observed ${outsideTomPack.join(", ")}`,
      );
    }
    assertExistingFiles(
      [path.join(PACKAGE_DIR, "references", "ips", "tom", "rights.md")],
      ROUTING_FILE,
      "Phase 6 Tom rights record existence",
    );
  }),
  defineCheck("ROUTE-FERRIS-001", "routing.md preserves the Ferris source-reviewed route contract", () => {
    const row = routeById("ferris");
    const references = routeReferencePaths(row);
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Ferris",
      "Rust mascot",
      "Rust crab",
      "Rustacean",
      "Rust 吉祥物",
      "Rust 螃蟹",
      "ferris",
      "source-reviewed",
      "rustacean.net",
      "Karen Rustad Tolva",
      "Rust trademark boundary",
      "references/ips/ferris/source.md",
    ], "Ferris display name, aliases, suffix, source attribution, source record, trademark boundary, and status");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected ferris default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "ferris") {
      throw new Error(`${ROUTING_FILE} expected ferris output_suffix=ferris; observed ${row.output_suffix || "missing"}`);
    }
    const expectedReferences = [
      "references/ips/ferris/index.md",
      "references/ips/ferris/source.md",
      "references/ips/ferris/style-dna.md",
      "references/ips/ferris/ferris-ip.md",
      "references/ips/ferris/composition-patterns.md",
      "references/ips/ferris/prompt-template.md",
      "references/ips/ferris/qa-checklist.md",
    ];
    if (references.join("\n") !== expectedReferences.join("\n")) {
      throw new Error(
        `${ROUTING_FILE} expected ferris required_references=${expectedReferences.join(", ")}; observed ${references.join(", ") || "none"}`,
      );
    }
    assertExistingFiles(expectedReferences.map((reference) => path.join(PACKAGE_DIR, reference)), ROUTING_FILE, "Phase 15 Ferris seven-file pack existence");
  }),
  defineCheck("ROUTE-SEAL-001", "routing.md preserves the active Seal route contract", () => {
    const row = routeById("seal");
    const references = routeReferencePaths(row);
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      ...sealAliases(),
      "seal",
      "active",
      "hoodie seal identity",
      "no-logo mascot identity",
      "source-history boundary",
      "references/ips/seal/source.md",
    ], "Seal display name, aliases, suffix, source-history authority, source record, and status");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected seal default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "seal") {
      throw new Error(`${ROUTING_FILE} expected seal output_suffix=seal; observed ${row.output_suffix || "missing"}`);
    }
    if (references.join("\n") !== sealPlannedReferences().join("\n")) {
      throw new Error(
        `${ROUTING_FILE} expected seal required_references=${sealPlannedReferences().join(", ")}; observed ${references.join(", ") || "none"}`,
      );
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "source_history",
      "former Sealos Seal route identity migrated to product-neutral Seal",
      "canonical_image_status",
      "uploaded-image-canonical",
      "drift_boundary",
      "uploaded-image-locked",
      ...sealFixedMarkers(),
    ], "Seal metadata block with source history, canonical image status, drift boundary, and fixed markers");
    assertExistingFiles(
      [path.join(PACKAGE_DIR, "references", "ips", "seal", "source.md")],
      ROUTING_FILE,
      "Phase 29 Seal source record existence",
    );
  }),
  defineCheck("ROUTE-SEAL-002", "routing.md preserves the full active Seal route metadata contract", () => {
    const row = routeById("seal");
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Seal",
      "hoodie seal",
      "white seal",
      "blue hoodie seal",
      "海豹",
      "seal",
      "active",
      "source-history boundary",
      "references/ips/seal/source.md",
    ], "Seal aliases, suffix, status, and source-history authority");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected seal default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "seal") {
      throw new Error(`${ROUTING_FILE} expected seal output_suffix=seal; observed ${row.output_suffix || "missing"}`);
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "assets/<article-slug>-seal/",
      "assets/&lt;article-slug&gt;-seal/",
    ], "Seal image status, drift boundary, and path tokens");
  }),
  defineCheck("ROUTE-GOPHER-001", "routing.md preserves the Go Gopher source-reviewed route contract", () => {
    const row = routeById("gopher");
    const references = routeReferencePaths(row);
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Go Gopher",
      "Gopher",
      "golang gopher",
      "Go mascot",
      "Go 吉祥物",
      "Gopher 吉祥物",
      "gopher",
      "source-reviewed",
      "https://go.dev/blog/gopher",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "root `gopher.png`",
      "Go logo identity",
      "official Go project affiliation",
      "references/ips/gopher/source.md",
    ], "Go Gopher display name, aliases, suffix, source/license authority, local visual authority, source record, and status");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected gopher default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "gopher") {
      throw new Error(`${ROUTING_FILE} expected gopher output_suffix=gopher; observed ${row.output_suffix || "missing"}`);
    }
    if (references.join("\n") !== gopherPlannedReferences().join("\n")) {
      throw new Error(
        `${ROUTING_FILE} expected gopher required_references=${gopherPlannedReferences().join(", ")}; observed ${references.join(", ") || "none"}`,
      );
    }
    assertExistingFiles(gopherPlannedReferences().map((reference) => path.join(PACKAGE_DIR, reference)), ROUTING_FILE, "Phase 42 Go Gopher seven-file pack existence");
  }),
  defineCheck("ROUTE-DEFAULT-001", "routing.md keeps Xiaohei as the only default active route", () => {
    const rows = routeRows();
    const defaults = rows.filter((row) => row.default === "true").map((row) => row.id);
    if (defaults.length !== 1 || defaults[0] !== "xiaohei") {
      throw new Error(`${ROUTING_FILE} expected only xiaohei default=true; observed ${defaults.join(", ") || "none"}`);
    }
    const littlebox = routeById("littlebox");
    if (littlebox.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected littlebox default=false; observed ${littlebox.default || "missing"}`);
    }
    const tom = routeById("tom");
    if (tom.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected tom default=false; observed ${tom.default || "missing"}`);
    }
    const ferris = routeById("ferris");
    if (ferris.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected ferris default=false; observed ${ferris.default || "missing"}`);
    }
    const seal = routeById("seal");
    if (seal.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected seal default=false; observed ${seal.default || "missing"}`);
    }
    const openclaw = routeById("openclaw");
    if (openclaw.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected openclaw default=false; observed ${openclaw.default || "missing"}`);
    }
    const gopher = routeById("gopher");
    if (gopher.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected gopher default=false; observed ${gopher.default || "missing"}`);
    }
  }),
  defineCheck("ROUTE-REFS-001", "routing.md required_references resolve inside the package", () => {
    for (const row of routeRows()) {
      const references = routeReferencePaths(row);
      const expectedCounts = { xiaohei: 5, littlebox: 6, tom: 7, ferris: 7, seal: 7, openclaw: 7, gopher: 7 };
      const expectedCount = expectedCounts[row.id];
      if (references.length !== expectedCount) {
        throw new Error(
          `${ROUTING_FILE} expected ${row.id} required_references count=${expectedCount}; observed ${references.length}`,
        );
      }
      for (const reference of references) {
        const resolved = safeReferencePath(reference);
        const relative = displayPath(resolved);
        if (row.id === "tom") {
          if (!reference.startsWith("references/ips/tom/")) {
            throw new Error(`${ROUTING_FILE} expected tom reference ${reference} under references/ips/tom/`);
          }
          if (reference !== "references/ips/tom/rights.md") continue;
        }
        if (row.id === "ferris" && !reference.startsWith("references/ips/ferris/")) {
          throw new Error(`${ROUTING_FILE} expected ferris reference ${reference} under references/ips/ferris/`);
        }
        if (row.id === "ferris" && !displayPath(resolved).startsWith(`${PACKAGE_DIR}/references/ips/ferris/`)) {
          throw new Error(`${ROUTING_FILE} expected ferris reference ${reference} to resolve under ${PACKAGE_DIR}/references/ips/ferris/`);
        }
        if (row.id === "seal") {
          if (!reference.startsWith("references/ips/seal/")) {
            throw new Error(`${ROUTING_FILE} expected seal reference ${reference} under references/ips/seal/`);
          }
          if (!displayPath(resolved).startsWith(`${PACKAGE_DIR}/references/ips/seal/`)) {
            throw new Error(`${ROUTING_FILE} expected seal reference ${reference} to resolve under ${PACKAGE_DIR}/references/ips/seal/`);
          }
          if (reference !== "references/ips/seal/source.md") continue;
        }
        if (row.id === "openclaw") {
          if (!reference.startsWith("references/ips/openclaw/")) {
            throw new Error(`${ROUTING_FILE} expected openclaw reference ${reference} under references/ips/openclaw/`);
          }
          if (!displayPath(resolved).startsWith(`${PACKAGE_DIR}/references/ips/openclaw/`)) {
            throw new Error(`${ROUTING_FILE} expected openclaw reference ${reference} to resolve under ${PACKAGE_DIR}/references/ips/openclaw/`);
          }
        }
        if (row.id === "gopher") {
          if (!reference.startsWith("references/ips/gopher/")) {
            throw new Error(`${ROUTING_FILE} expected gopher reference ${reference} under references/ips/gopher/`);
          }
          if (!displayPath(resolved).startsWith(`${PACKAGE_DIR}/references/ips/gopher/`)) {
            throw new Error(`${ROUTING_FILE} expected gopher reference ${reference} to resolve under ${PACKAGE_DIR}/references/ips/gopher/`);
          }
        }
        if (!fileExists(relative)) {
          throw new Error(`${ROUTING_FILE} expected ${row.id} reference ${reference} to exist; observed missing ${relative}`);
        }
      }
    }
  }),
  defineCheck("ROUTE-PATHS-001", "routing.md output suffixes match public output directories", () => {
    const xiaohei = routeById("xiaohei");
    const littlebox = routeById("littlebox");
    const tom = routeById("tom");
    const ferris = routeById("ferris");
    const seal = routeById("seal");
    const openclaw = routeById("openclaw");
    const gopher = routeById("gopher");
    if (xiaohei.output_suffix !== "illustrations") {
      throw new Error(`${ROUTING_FILE} expected xiaohei output_suffix=illustrations; observed ${xiaohei.output_suffix}`);
    }
    if (littlebox.output_suffix !== "littlebox") {
      throw new Error(`${ROUTING_FILE} expected littlebox output_suffix=littlebox; observed ${littlebox.output_suffix}`);
    }
    if (tom.output_suffix !== "tom") {
      throw new Error(`${ROUTING_FILE} expected tom output_suffix=tom; observed ${tom.output_suffix}`);
    }
    if (ferris.output_suffix !== "ferris") {
      throw new Error(`${ROUTING_FILE} expected ferris output_suffix=ferris; observed ${ferris.output_suffix}`);
    }
    if (seal.output_suffix !== "seal") {
      throw new Error(`${ROUTING_FILE} expected seal output_suffix=seal; observed ${seal.output_suffix}`);
    }
    if (openclaw.output_suffix !== "openclaw") {
      throw new Error(`${ROUTING_FILE} expected openclaw output_suffix=openclaw; observed ${openclaw.output_suffix}`);
    }
    if (gopher.output_suffix !== "gopher") {
      throw new Error(`${ROUTING_FILE} expected gopher output_suffix=gopher; observed ${gopher.output_suffix}`);
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
      "assets/<article-slug>-seal/",
      "assets/&lt;article-slug&gt;-seal/",
      "assets/<article-slug>-openclaw/",
      "assets/&lt;article-slug&gt;-openclaw/",
      "assets/<article-slug>-gopher/",
      "assets/&lt;article-slug&gt;-gopher/",
    ], "output suffix to output directory mapping");
  }),
  defineCheck("ROUTE-MIXED-001", "routing.md preserves mixed-IP separate route group wording", () => {
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "separate route groups",
      "每个 route group 只加载自己的 `required_references`",
      "`xiaohei` 写入 `assets/<article-slug>-illustrations/`",
      "`littlebox` 写入 `assets/<article-slug>-littlebox/`",
      "`tom` 写入 `assets/<article-slug>-tom/`",
      "`ferris` 写入 `assets/<article-slug>-ferris/`",
      "`seal` writes to `assets/<article-slug>-seal/`",
      "`openclaw` writes to `assets/<article-slug>-openclaw/`",
      "`gopher` writes to `assets/<article-slug>-gopher/`",
    ], "mixed-IP isolated reference and output-directory wording");
  }),
  defineCheck("REFS-XH-001", "Xiaohei canonical operational references and index exist", () => {
    assertReadableFiles([
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
    ], path.join(REFERENCES_DIR, "ips", "xiaohei"), "Xiaohei canonical pack files");
  }),
  defineCheck("REFS-LB-001", "Littlebox canonical operational references and index exist", () => {
    assertReadableFiles([
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
    ], path.join(REFERENCES_DIR, "ips", "littlebox"), "Littlebox canonical pack files");
  }),
  defineCheck("REFS-TOM-001", "Tom canonical operational references and index exist", () => {
    const tomFiles = [
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      ...tomOperationalRefs(),
    ];
    assertReadableFiles(tomFiles, path.join(REFERENCES_DIR, "ips", "tom"), "Tom canonical pack files");
    for (const relativePath of tomFiles) {
      const text = requireFile(relativePath);
      assertIncludes(text, relativePath, ["gated-authorized"], "Tom route status marker");
      if (relativePath.endsWith("rights.md")) {
        assertIncludes(text, relativePath, [
          "Authorization Scope",
          "Distribution Boundary",
          "Sample Policy",
          "Review Owner",
        ], "Tom rights record sections");
      } else {
        assertIncludes(text, relativePath, ["rights.md"], "Tom rights authority marker");
      }
    }
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "tom", "index.md")), path.join(REFERENCES_DIR, "ips", "tom", "index.md"), [
      "assets/<article-slug>-tom/",
      "source-frame recreation",
      "show logos",
      "title cards",
      "default Jerry usage",
      "broad cast expansion",
      "generic-cat drift",
      "excessive text",
      "route leakage",
    ], "Tom pack navigation, output path, and shared protected-route failure categories");
  }),
  defineCheck("REFS-FERRIS-001", "Ferris canonical route references and source markers exist", () => {
    const ferrisFiles = [
      path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
      ...ferrisOperationalRefs(),
    ];
    assertReadableFiles(ferrisFiles, path.join(REFERENCES_DIR, "ips", "ferris"), "Ferris seven-file pack");
    for (const relativePath of ferrisFiles) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "source-reviewed",
        "source.md",
      ], "Ferris source-reviewed route status and source authority markers");
    }
  }),
  defineCheck("REFS-SEAL-001", "Seal canonical route references and shared markers exist", () => {
    const sealFiles = sealOperationalRefs();
    assertReadableFiles(sealFiles, path.join(REFERENCES_DIR, "ips", "seal"), "Seal seven-file pack");
    for (const relativePath of sealFiles) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "seal",
        "source.md",
        "active",
        "Source-history authority",
        "hoodie seal identity note",
        "assets/<article-slug>-seal/",
      ], "Seal route-local shared operational markers");
    }
    assertIncludes(combinedText([
      path.join(REFERENCES_DIR, "ips", "seal", "index.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md"),
    ]), path.join(REFERENCES_DIR, "ips", "seal"), [
      "Public-sample boundary",
      "Seal route block",
      "plain navy cap",
      "plain deep-blue hoodie",
      "no cap logo",
      "no chest logo",
      "no mascot logos",
      "no logo patches",
    ], "Seal route-local shared sample gate, no-logo markers, and route block markers");
  }),
  defineCheck("REFS-OPENCLAW-001", "OpenClaw canonical route references and shared markers exist", () => {
    const openclawFiles = openclawOperationalRefs();
    assertReadableFiles(openclawFiles, path.join(REFERENCES_DIR, "ips", "openclaw"), "OpenClaw seven-file pack");
    for (const relativePath of openclawFiles) {
      const sharedMarkers = [
        "openclaw",
        "source.md",
        "source-reviewed",
        "assets/<article-slug>-openclaw/",
      ];
      const authorityMarkers = relativePath.endsWith("source.md")
        ? ["Source authority", "Uploaded logo authority"]
        : ["Source/license authority", "Uploaded-logo identity note"];
      assertIncludes(requireFile(relativePath), relativePath, [
        ...sharedMarkers,
        ...authorityMarkers,
      ], "OpenClaw route-local shared operational markers");
    }
    assertIncludes(combinedText([
      path.join(REFERENCES_DIR, "ips", "openclaw", "index.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "qa-checklist.md"),
    ]), path.join(REFERENCES_DIR, "ips", "openclaw"), [
      "Public-sample boundary",
      "OpenClaw route block",
      "generic red mascot drift",
      "missing claws",
      "missing antennae",
      "missing cyan pupils",
      "product-poster drift",
      "passive placement",
      "excessive text",
      "route leakage",
      "copied composition",
    ], "OpenClaw route-local shared sample gate and route block markers");
  }),
  defineCheck("REFS-GOPHER-001", "Go Gopher canonical route references and shared markers exist", () => {
    const gopherFiles = gopherOperationalRefs();
    assertReadableFiles(gopherFiles, path.join(REFERENCES_DIR, "ips", "gopher"), "Go Gopher seven-file pack");
    for (const relativePath of gopherFiles) {
      const sharedMarkers = [
        "gopher",
        "source.md",
        "source-reviewed",
        "assets/<article-slug>-gopher/",
        "root `gopher.png`",
        "Renee French",
        "Creative Commons Attribution 4.0",
      ];
      assertIncludes(requireFile(relativePath), relativePath, sharedMarkers, "Go Gopher route-local shared operational markers");
    }
    assertIncludes(combinedText([
      path.join(REFERENCES_DIR, "ips", "gopher", "index.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "qa-checklist.md"),
    ]), path.join(REFERENCES_DIR, "ips", "gopher"), [
      "Go Gopher route block",
      "Public-sample boundary",
      "generic blue mascot drift",
      "realistic animal drift",
      "missing ears",
      "missing large simple eyes",
      "missing buck teeth",
      "missing beige muzzle/paws",
      "missing black outline",
      "missing white sticker-like border",
      "Go logo confusion",
      "official endorsement claims",
      "passive placement",
      "route leakage",
      "copied composition",
    ], "Go Gopher route-local sample gate, route block, and drift markers");
  }),
  defineCheck("LEGACY-XH-001", "root Xiaohei compatibility files expose the current contract heading", () => {
    for (const item of legacyXiaoheiRefs()) {
      const body = bodyAfterHeading(requireFile(item.root), "Current Xiaohei Contract");
      if (!body) {
        throw new Error(`${item.root} expected ## Current Xiaohei Contract body; observed missing body`);
      }
    }
  }),
  defineCheck("LEGACY-XH-002", "root Xiaohei compatibility bodies match canonical pack files", () => {
    for (const item of legacyXiaoheiRefs()) {
      const rootBody = normalizeBody(bodyAfterHeading(requireFile(item.root), "Current Xiaohei Contract"));
      const canonicalBody = normalizeBody(requireFile(item.canonical));
      if (rootBody !== canonicalBody) {
        throw new Error(`${item.root} expected body parity with ${item.canonical}; observed content mismatch`);
      }
    }
  }),
  defineCheck("PROMPT-XH-001", "Xiaohei prompt templates preserve required placeholders", () => {
    for (const relativePath of [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "prompt-template.md"),
      path.join(REFERENCES_DIR, "prompt-template.md"),
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "{正文配图主题}",
        "{结构类型：Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}",
        "{这张图要表达的核心意思}",
        "{具体画面：小黑在哪里、正在做什么、主要物件是什么、信息如何流动}",
        "{标注词1}",
        "{要删除的文字}",
      ], "Xiaohei prompt placeholders and edit placeholder");
    }
  }),
  defineCheck("PROMPT-LB-001", "Littlebox prompt template preserves planning fields", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "littlebox", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Placement: [where it appears]",
      "Core idea: [one sentence]",
      "Littlebox state: closed",
      "Visual metaphor: [physical box action]",
      "Background: [pale sky blue #E3F2FD / pale lavender #E6E6FA]",
      "Elements: [3-5 objects]",
      "Labels: [short visible labels in the user's language]",
    ], "Littlebox planning output fields");
  }),
  defineCheck("PROMPT-LB-002", "Littlebox generation template preserves identity and label variables", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "littlebox", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Image-generation prompts stay English",
      "Scene: [core idea in one sentence]",
      "[pale sky-blue background #E3F2FD / pale lavender background #E6E6FA]",
      "front-left three-quarter view",
      "Littlebox state: closed",
      "side-seam twig arms",
      "amber seam tape #F59E0B",
      "jagged torn cut",
      "Visual metaphor: [physical box action]",
      "Composition: [composition family]",
      "Visible handwritten labels, copied exactly in the user's language: [quoted labels]",
      "replace the visible handwritten labels with these exact short labels: [labels]",
    ], "English prompt variables, closed identity, view, arms, tape, and label repair markers");
  }),
  defineCheck("PROMPT-TOM-001", "Tom prompt template preserves planning, generation, edit, and rights markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "tom", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Tom planning fields gate",
      "Placement: [where this image appears in the article]",
      "Core idea: [one sentence]",
      "Structure type: [Workflow / System Local View / Before/After / Character State / Concept Metaphor / Method Layers / Map Route / Mini Comic]",
      "Tom state: [focused / guarding / chasing / sorting / repairing / catching / bracing / stamping / decisive]",
      "Tom action: [the physical cognitive action Tom performs]",
      "Supporting objects: [1-2 objects such as evidence slips, traps, levers, doors, paths, tools, piles, bridges, stamps, broken machines, gates, tags, ropes, springs, nets, or warning marks]",
      "Visible labels: [\"short label 1\", \"short label 2\", \"short label 3\" copied exactly in the user's language]",
      "Output path: assets/<article-slug>-tom/",
      "Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.",
      "Tom one-image generation gate",
      "Route status note: Tom is a `gated-authorized` protected-character route.",
      "Recurring IP: Tom from Tom and Jerry as a simplified article-illustration character.",
      "Tom must perform the central cognitive action",
      "Save reminder for downstream delivery: save accepted output under `assets/<article-slug>-tom/`",
      "Tom edit participation repair gate",
      "Tom off-model identity repair gate",
      "Tom title removal edit gate",
      "Tom text reduction edit gate",
      "Tom unaffected-content preservation gate",
      "Protected-route block: source-frame recreation, show logos, title cards, default Jerry usage, broad cast expansion, generic-cat drift, excessive text, and route leakage all fail the route.",
    ], "Tom planning fields, prompt placeholders, output path, rights note, edit gates, and protected-route block");
  }),
  defineCheck("PROMPT-FERRIS-001", "Ferris prompt template preserves planning, generation, edit, and source markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "ferris", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Ferris planning fields gate",
      "Placement",
      "Core idea",
      "Structure type",
      "Ferris state",
      "Ferris action",
      "Supporting objects",
      "Visible labels",
      "Output path: assets/<article-slug>-ferris/",
      "Source/trademark note",
      "Ferris one-image generation gate",
      "Ferris edit participation repair gate",
      "Ferris off-model identity repair gate",
      "Ferris trademark-boundary repair gate",
      "Ferris title removal edit gate",
      "Ferris text reduction edit gate",
      "Ferris unaffected-content preservation gate",
    ], "Ferris planning fields, prompt placeholders, output path, source note, edit gates, and source/trademark repair markers");
  }),
  defineCheck("PROMPT-SEAL-001", "Seal prompt template preserves planning, generation, edit, and source-history markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Seal planning fields gate",
      "Placement",
      "Core idea",
      "Structure type",
      "Seal state",
      "Seal action",
      "Supporting objects",
      "Visible labels",
      "Output path: assets/<article-slug>-seal/",
      "Hoodie seal identity note",
      "Image-generation prompts stay English",
      "Visible labels are copied exactly in the user's requested language",
      "Seal one-image generation gate",
      "Route status note: Seal is an `active` product-neutral hoodie seal route.",
      "Hoodie seal identity note: Seal is `uploaded-image-canonical` and `uploaded-image-locked`.",
      "Product-neutral article metaphor",
      "Save reminder",
      "Stronger Seal Participation",
      "Hoodie Seal Identity Repair",
      "Logo-Free Output Repair",
      "Title Removal",
      "Text Reduction",
      "Unaffected-Content Preservation",
    ], "Seal planning fields, generation prompt, source-history note, save reminder, and edit prompt families");
  }),
  defineCheck("PROMPT-OPENCLAW-001", "OpenClaw prompt template preserves planning, generation, edit, and source markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "openclaw", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "OpenClaw planning fields gate",
      "Placement",
      "Core idea",
      "Structure type",
      "OpenClaw state",
      "OpenClaw action",
      "Supporting objects",
      "Visible labels",
      "Output path: `assets/<article-slug>-openclaw/`",
      "Uploaded-logo identity note",
      "Source/license note",
      "OpenClaw one-image generation gate",
      "OpenClaw must perform the central cognitive action",
      "Save accepted output under `assets/<article-slug>-openclaw/`",
      "Stronger OpenClaw Participation",
      "Uploaded-Logo Identity Repair",
      "Title Removal",
      "Text Reduction",
      "Route Leakage Repair",
      "Unaffected-Content Preservation",
      "OpenClaw route block",
    ], "OpenClaw planning fields, generation prompt, source/license note, save reminder, and edit prompt families");
  }),
  defineCheck("PROMPT-GOPHER-001", "Go Gopher prompt template preserves planning, generation, edit, and source markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "gopher", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Go Gopher planning fields gate",
      "Placement",
      "Core idea",
      "Structure type",
      "Gopher state",
      "Gopher action",
      "Supporting objects",
      "Visible labels",
      "Output path: `assets/<article-slug>-gopher/`",
      "root `gopher.png` local visual authority",
      "Source/license note",
      "Go Gopher one-image generation gate",
      "Go Gopher must perform the central cognitive article action",
      "Accepted Go Gopher images are saved under `assets/<article-slug>-gopher/`",
      "Stronger Go Gopher Participation",
      "gopher.png Identity Repair",
      "Title Removal",
      "Text Reduction",
      "Route Leakage Repair",
      "Unaffected-Content Preservation",
      "Go Gopher route block",
    ], "Go Gopher planning fields, generation prompt, source/license note, save reminder, and edit prompt families");
  }),
  defineCheck("IP-XH-001", "Xiaohei canonical pack preserves objective IP markers", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "xiaohei"), [
      "16:9",
      "纯白背景",
      "小黑承担核心动作",
      "assets/<article-slug>-illustrations/",
      "反复刻规则",
      "只用于风格校准",
      "小黑像吉祥物、表情包或可爱卡通",
    ], "16:9, white background, active Xiaohei, output path, anti-repeat, and QA markers");
  }),
  defineCheck("IP-LB-001", "Littlebox canonical pack preserves objective IP markers", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "littlebox"), [
      "Littlebox state: closed",
      "#E3F2FD",
      "#E6E6FA",
      "prompts stay English",
      "user's language",
      "closed-only",
      "front-left three-quarter",
      "amber seam tape",
      "jagged",
      "side-seam twig arms",
      "assets/<article-slug>-littlebox/",
      "wrong tape placement",
    ], "Littlebox closed identity, backgrounds, language, view, tape, arms, output, and QA failure markers");
  }),
  defineCheck("IP-TOM-001", "Tom canonical pack preserves protected-character identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      path.join(REFERENCES_DIR, "ips", "tom", "rights.md"),
      path.join(REFERENCES_DIR, "ips", "tom", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "tom", "tom-ip.md"),
      path.join(REFERENCES_DIR, "ips", "tom", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "tom"), [
      "gated-authorized",
      "Tom from Tom and Jerry",
      "Warner Bros.",
      "authorization scope",
      "distribution boundary",
      "public-sample policy",
      "grey or blue-grey cat body",
      "white muzzle",
      "white belly areas",
      "expressive ears",
      "long tail",
      "visible paws",
      "Tom-like head shape and body silhouette",
      "Tom performs the core conceptual action",
      "Tom cognitive-action participation gate",
      "Tom composition original-metaphor gate",
      "Tom active-composition gate",
      "Tom support-object pool",
      "Tom route leakage composition gate",
      "assets/<article-slug>-tom/",
    ], "Tom rights authority, identity cues, cognitive action gates, composition gates, and output path");
  }),
  defineCheck("IP-FERRIS-001", "Ferris canonical pack preserves source-reviewed identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "ferris-ip.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "ferris"), [
      "source-reviewed",
      "Ferris the Rustacean",
      "Ferris cognitive-action participation gate",
      "Ferris must perform the central cognitive action",
      "assets/<article-slug>-ferris/",
      "source.md",
      "Rust-themed article metaphors",
      "generic-crab drift",
      "passive Ferris placement",
      "Rust-logo misuse",
      "official-affiliation cues",
      "over-detailed mascot rendering",
      "excessive text",
      "source-asset tracing",
      "route leakage",
    ], "Ferris source authority, identity cues, cognitive action gates, Rust-themed metaphors, route failures, and output path");
  }),
  defineCheck("IP-SEAL-001", "Seal canonical pack preserves hoodie identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "seal", "index.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "source.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "seal-ip.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "seal"), [
      "active",
      "source-history authority",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Seal cognitive-action participation gate",
      "Seal must perform the central cognitive action",
      "product-neutral article metaphors",
      "source.md",
      ...sealFixedMarkers(),
      "generic seal drift",
      "logo or mark artifacts",
      "missing cap",
      "missing hoodie",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "changed body color",
      "passive placement",
      "over-detailed toy drift",
      "excessive text",
      "route leakage",
      "bald/plain-head seal drift",
      "different mascot selection",
    ], "Seal route status, source-history markers, cognitive action gates, product-neutral context, drift markers, and source authority");
  }),
  defineCheck("IP-OPENCLAW-001", "OpenClaw canonical pack preserves uploaded-logo identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "openclaw", "index.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "source.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "openclaw-ip.md"),
      path.join(REFERENCES_DIR, "ips", "openclaw", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "openclaw"), [
      "source-reviewed",
      "source/license authority",
      "uploaded-logo authority",
      "OpenClaw cognitive-action participation gate",
      "OpenClaw must perform the central cognitive action",
      "article metaphors",
      "source.md",
      "red round body",
      "side claw-like arms",
      "two antennae",
      "black eyes",
      "cyan pupils",
      "short legs",
      "generic red mascot drift",
      "missing claws",
      "missing antennae",
      "missing cyan pupils",
      "product-poster drift",
      "passive placement",
      "excessive text",
      "route leakage",
      "copied composition",
      "generic robot drift",
    ], "OpenClaw source authority, uploaded-logo identity cues, cognitive action gates, article metaphors, drift markers, and output path");
  }),
  defineCheck("IP-GOPHER-001", "Go Gopher canonical pack preserves local visual identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "gopher", "index.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "source.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "gopher-ip.md"),
      path.join(REFERENCES_DIR, "ips", "gopher", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "gopher"), [
      "source-reviewed",
      "source/license authority",
      "Local visual authority",
      "root `gopher.png`",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "Go Gopher cognitive-action participation gate",
      "Go Gopher must perform the central cognitive article action",
      "article metaphors",
      "source.md",
      "blue rounded upright body",
      "rounded head/body silhouette",
      "small rounded ears",
      "large simple eyes",
      "black nose",
      "buck teeth",
      "beige muzzle and paws",
      "compact limbs",
      "friendly standing posture",
      "black outline",
      "white sticker-like border",
      "generic blue mascot drift",
      "realistic animal drift",
      "Go logo confusion",
      "official endorsement claims",
      "passive placement",
      "route leakage",
      "copied composition",
    ], "Go Gopher source authority, local visual identity cues, cognitive action gates, article metaphors, drift markers, and output path");
  }),
  defineCheck("QA-TOM-001", "Tom QA checklist preserves protected-route pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "tom", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Tom QA protected-route gate.",
      "Tom QA rights-status note gate.",
      "Tom identity recognizability is clear",
      "Tom performs the active cognitive action.",
      "The scene is an original article metaphor created for the current article.",
      "The composition stays sparse, route-local, and solo Tom.",
      "Rights-status note is present in planning, generation, edit, and delivery context.",
      "Delivery path uses `assets/<article-slug>-tom/`.",
      "generic cats",
      "passive Tom placement",
      "source-frame recreation",
      "show logos",
      "title cards",
      "default Jerry usage",
      "broad cast expansion",
      "excessive text",
      "route leakage",
      "off-model Tom identity",
      "Tom QA generic-cat failure",
      "Tom QA passive-placement failure",
      "Tom QA source-frame recreation failure",
      "Tom QA route-leakage failure",
      "Tom QA unaffected-content preservation gate",
      "Accepted Tom images keep Tom as the action subject",
    ], "Tom QA pass criteria, protected-route failures, repair gates, rights marker, and delivery judgment");
  }),
  defineCheck("QA-FERRIS-001", "Ferris QA checklist preserves source-reviewed pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "ferris", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Ferris QA source-reviewed gate.",
      "Ferris QA source/trademark note gate.",
      "Image is a 16:9 horizontal article illustration.",
      "Ferris recognizability is clear",
      "Ferris performs the active Ferris cognitive action.",
      "Source/trademark note is present in planning, generation, edit, and delivery context.",
      "generic-crab drift",
      "passive Ferris placement",
      "Rust-logo misuse",
      "official-affiliation cues",
      "over-detailed mascot rendering",
      "excessive text",
      "source-asset tracing",
      "route leakage",
      "Ferris QA route leakage failure",
      "Ferris edit participation repair gate",
      "Ferris off-model identity repair gate",
      "Ferris trademark-boundary repair gate",
      "Ferris title removal edit gate",
      "Ferris text reduction edit gate",
      "Ferris unaffected-content preservation gate",
      "Delivery path uses `assets/<article-slug>-ferris/`.",
      "Accepted Ferris images keep Ferris as the action subject",
    ], "Ferris QA pass criteria, source/trademark checks, route leakage failure, repair gates, and delivery judgment");
  }),
  defineCheck("QA-SEAL-001", "Seal QA checklist preserves source-history pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Seal QA hoodie identity gate.",
      "Seal QA logo-free gate.",
      "Seal QA product-neutral route isolation gate.",
      "Seal QA article-metaphor gate.",
      "Seal performs the active cognitive participation.",
      "Source-history authority",
      "Delivery path uses `assets/<article-slug>-seal/`.",
      "generic seal drift",
      "logo or mark artifacts",
      "missing cap",
      "missing hoodie",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "logo-like wave/cloud mark",
      "changed body color",
      "passive placement",
      "over-detailed toy drift",
      "excessive text",
      "route leakage",
      "Seal QA generic seal drift failure",
      "Seal QA passive placement failure",
      "Seal QA logo-free failure",
      "Seal QA route leakage failure",
      "Stronger Seal Participation",
      "Hoodie Seal Identity Repair",
      "Logo-Free Repair",
      "Title Removal",
      "Text Reduction",
      "Unaffected-content preservation",
      "Seal QA unaffected-content preservation gate",
      "Accepted Seal images keep Seal as the action subject",
    ], "Seal QA pass criteria, source-history failures, route leakage failure, repair gates, and delivery judgment");
  }),
  defineCheck("QA-OPENCLAW-001", "OpenClaw QA checklist preserves source-reviewed pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "openclaw", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "OpenClaw QA source-reviewed gate.",
      "OpenClaw QA uploaded-logo identity gate.",
      "OpenClaw QA source/license note gate.",
      "OpenClaw QA article-metaphor gate.",
      "OpenClaw QA route isolation gate.",
      "OpenClaw performs the active cognitive participation.",
      "Source/license boundary",
      "Delivery path uses `assets/<article-slug>-openclaw/`.",
      "generic red mascot drift",
      "missing claws",
      "missing antennae",
      "missing cyan pupils",
      "product-poster drift",
      "passive placement",
      "excessive text",
      "route leakage",
      "copied composition",
      "OpenClaw QA generic red mascot drift failure",
      "OpenClaw QA passive placement failure",
      "OpenClaw QA route leakage failure",
      "OpenClaw QA product-poster failure",
      "Stronger OpenClaw Participation",
      "Uploaded-Logo Identity Repair",
      "Title Removal",
      "Text Reduction",
      "Unaffected-content preservation",
      "OpenClaw QA unaffected-content preservation gate",
      "Accepted OpenClaw images keep OpenClaw as the action subject",
    ], "OpenClaw QA pass criteria, source/license failures, route leakage failure, repair gates, and delivery judgment");
  }),
  defineCheck("QA-GOPHER-001", "Go Gopher QA checklist preserves source-reviewed pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "gopher", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Go Gopher QA source-reviewed gate.",
      "Go Gopher QA `gopher.png` identity gate.",
      "Go Gopher QA source/license note gate.",
      "Go Gopher QA article-metaphor gate.",
      "Go Gopher QA route isolation gate.",
      "Go Gopher performs active cognitive participation.",
      "Source/license boundary",
      "Delivery path uses `assets/<article-slug>-gopher/`.",
      "generic blue mascot drift",
      "realistic animal drift",
      "missing ears",
      "missing large simple eyes",
      "missing buck teeth",
      "missing beige muzzle/paws",
      "missing black outline",
      "missing white sticker-like border",
      "Go logo confusion",
      "official endorsement claims",
      "passive placement",
      "excessive text",
      "route leakage",
      "copied composition",
      "Go Gopher QA generic blue mascot drift failure",
      "Go Gopher QA passive placement failure",
      "Go Gopher QA route leakage failure",
      "Stronger Go Gopher Participation",
      "gopher.png Identity Repair",
      "Title Removal",
      "Text Reduction",
      "Unaffected-content preservation",
      "Go Gopher QA unaffected-content preservation gate",
      "Accepted Go Gopher images keep Go Gopher as the action subject",
    ], "Go Gopher QA pass criteria, source/license failures, route leakage failure, repair gates, and delivery judgment");
  }),
  defineCheck("RIGHTS-TOM-001", "Tom rights record preserves required Phase 6 rights markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "tom", "rights.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "## Source",
      "## Rights Holder",
      "## Authorization Scope",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Sample Policy",
      "## Review Owner",
      "gated-authorized",
    ], "Tom rights headings and gated status");
  }),
  defineCheck("SOURCE-FERRIS-001", "Ferris source record preserves required Phase 11 source and trademark markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "ferris", "source.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "## Source",
      "## Author and Source Sites",
      "## Copyright Waiver",
      "## Trademark Boundary",
      "## Route Status",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Sample Policy",
      "## Review Owner",
      "rustacean.net",
      "Karen Rustad Tolva",
      "CC0/public-domain dedication context",
      "Rust Foundation trademark policy context",
      "source-reviewed",
      "Rust-logo-forward compositions",
      "official-affiliation cues",
      "endorsement language",
    ], "Ferris source headings, author/source markers, CC0 context, trademark boundary, status, and sample gate markers");
  }),
  defineCheck("SOURCE-SEAL-001", "Seal source record preserves source-history and hoodie identity markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "seal", "source.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "# Seal Source Record",
      "## Source",
      "## Character Authority",
      "## Hoodie Seal Visual Markers",
      "## Logo-Free Identity Markers",
      "## Historical Source Notes",
      "## Route Status",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Sample Policy",
      "## Drift Boundary",
      "## Review Owner",
      "product-neutral hoodie seal article character",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "The active Seal route comes from the previous Sealos Seal uploaded hoodie seal image.",
      "plain navy cap",
      "plain deep-blue hoodie",
      "Logo-Free Identity Markers",
      "generic seal drift",
      "logo or mark artifacts",
      "bald/plain-head seal drift",
      "different mascot selection",
      ...sealFixedMarkers(),
    ], "Seal source headings, source-history authority, fixed markers, product-neutral context, sample policy, and drift boundary");
  }),
  defineCheck("SOURCE-OPENCLAW-001", "OpenClaw source record preserves source, license, and uploaded-logo markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "openclaw", "source.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "# OpenClaw Source Record",
      "## Source",
      "## Character Authority",
      "## Uploaded Logo Visual Markers",
      "## Sample Policy",
      "## Route Status",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Review Owner",
      "https://github.com/openclaw/openclaw",
      "c14793d35a10936ddea833e7808083fe57930616",
      "MIT License",
      "Copyright (c) 2026 OpenClaw Foundation",
      "source-reviewed",
      "Uploaded logo authority",
      "red round body",
      "side claw-like arms",
      "two antennae",
      "black eyes",
      "cyan pupils",
      "short legs",
      "assets/<article-slug>-openclaw/",
      "references/ips/openclaw/source.md",
      "Public rendered OpenClaw samples require release review",
      "source/license outcome",
      "route-isolation outcome",
      "article-metaphor quality outcome",
    ], "OpenClaw source headings, official repository, snapshot, MIT license, copyright, uploaded-logo markers, route status, output path, and sample gate");
  }),
  defineCheck("SOURCE-GOPHER-001", "Go Gopher source record preserves source, license, local visual, and sample gate markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "gopher", "source.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "# Go Gopher Source Record",
      "## Source",
      "## Character Authority",
      "## Local Gopher Visual Markers",
      "## Sample Policy",
      "## Route Status",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Review Owner",
      "https://go.dev/blog/gopher",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "root `gopher.png`",
      "source-reviewed",
      "blue rounded upright body",
      "rounded head/body silhouette",
      "small rounded ears",
      "large simple eyes",
      "black nose",
      "buck teeth",
      "beige muzzle and paws",
      "compact limbs",
      "friendly standing posture",
      "black outline",
      "white sticker-like border",
      "assets/<article-slug>-gopher/",
      "references/ips/gopher/source.md",
      "Public generated Go Gopher samples require release review",
      "Go blog source outcome",
      "Renee French attribution outcome",
      "Creative Commons Attribution 4.0 outcome",
      "local visual marker outcome",
      "route-isolation outcome",
      "Go logo boundary outcome",
      "official affiliation/approval/sponsorship/endorsement outcome",
      "article-metaphor quality outcome",
    ], "Go Gopher source headings, Go blog source, attribution, license, root visual authority, route status, output path, and sample gate");
  }),
  defineCheck("LOGO-SEAL-001", "Seal route keeps mascot logo-free", () => {
    const routeLocalFiles = [
      path.join(REFERENCES_DIR, "ips", "seal", "index.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "source.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md"),
    ];
    for (const relativePath of routeLocalFiles) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "plain navy cap",
        "plain deep-blue hoodie",
      ], "route-local no-logo mascot markers");
    }
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "seal", "source.md")), path.join(REFERENCES_DIR, "ips", "seal", "source.md"), [
      "Logo-Free Identity Markers",
      "mark-free",
      "logo or mark artifacts",
      "logo-like wave/cloud mark",
      "text badge",
    ], "Seal source no-logo markers");
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md")), path.join(REFERENCES_DIR, "ips", "seal", "prompt-template.md"), [
      "Logo-free note",
      "Logo-Free Output Repair",
      "plain navy cap",
      "plain deep-blue hoodie",
      "cap and hoodie chest plain",
      "cap, hoodie chest, mascot body, props, and scene",
      "logo or mark artifacts",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patches",
      "logo-like wave/cloud mark",
      "no emblem",
      "no text badge",
    ], "Seal prompt no-logo generation and repair markers");
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md")), path.join(REFERENCES_DIR, "ips", "seal", "qa-checklist.md"), [
      "Seal QA logo-free failure",
      "Logo-Free Repair",
      "report no-logo delivery status",
      "plain navy cap",
      "plain deep-blue hoodie",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "logo-like wave/cloud mark",
      "emblem",
      "text badge",
      "generated logo approximation",
      "generated logo tracing",
      "redrawn logo",
      "alternate mark",
      "simplified mark",
    ], "Seal QA no-logo failure markers");

    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
      path.join(PACKAGE_DIR, "SKILL.md"),
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "plain navy cap",
        "plain deep-blue hoodie",
      ], "Seal public no-logo marker");
    }
    const publicText = combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md", ROUTING_FILE, path.join(PACKAGE_DIR, "SKILL.md")]);
    assertIncludes(publicText, "Seal public docs and SKILL.md", [
      "no-logo mascot identity",
      "plain navy cap",
      "plain deep-blue hoodie",
      "no cap logo",
      "no chest logo",
      "no mascot logos",
      "no logo patches",
      "no logo-like wave/cloud mark",
      "no emblem",
      "no text badge",
      "logo-bearing mascot variants",
      "generated logo approximation",
      "generated logo tracing",
      "redrawn logo",
      "alternate wave mark",
      "simplified logo mark",
    ], "Seal public no-logo markers");
  }),
  defineCheck("DOC-LINKS-001", "README and examples local Markdown links point to existing files", () => {
    const links = localMarkdownLinks(["README.md", "examples/prompts.md"]);
    if (links.length === 0) {
      throw new Error("README.md and examples/prompts.md expected local Markdown links; observed none");
    }
    for (const link of links) {
      const target = link.target.split("#")[0];
      if (!target) continue;
      const resolved = path.normalize(path.join(path.dirname(link.source), target));
      if (resolved.startsWith("..") || path.isAbsolute(resolved)) {
        throw new Error(`${link.source} expected local link ${link.target} to stay inside repo; observed escape`);
      }
      if (!fileExists(resolved)) {
        throw new Error(`${link.source} expected local link ${link.target} to exist; observed missing ${resolved}`);
      }
    }
  }),
  defineCheck("DOC-ZH-GALLERY-001", "README.zh.md exposes the complete Chinese multi-IP example gallery", () => {
    assertChineseReadmeGallery();
  }),
  defineCheck("DOC-PATHS-001", "README and examples expose raw and escaped output path tokens", () => {
    const tokens = publicDocsOutputPathTokens();
    for (const [relativePath, text] of Object.entries(docsTexts())) {
      const pathName = relativePath === "readme" ? "README.md" : "examples/prompts.md";
      assertIncludes(
        text,
        pathName,
        [...tokens.raw, ...tokens.escaped],
        "raw and HTML-escaped published public route output path tokens",
      );
    }
  }),
  defineCheck("DOC-ROUTES-001", "public docs expose route metadata and canonical pack paths", () => {
    const text = combinedText(["README.md", "examples/prompts.md"]);
    assertIncludes(text, "README.md + examples/prompts.md", [
      "skills/visual-ip-illustrations/references/routing.md",
      "skills/visual-ip-illustrations/references/ips/xiaohei/",
      "skills/visual-ip-illustrations/references/ips/littlebox/",
      "skills/visual-ip-illustrations/references/ips/tom/",
      "skills/visual-ip-illustrations/references/ips/ferris/",
      "skills/visual-ip-illustrations/references/ips/seal/",
      "skills/visual-ip-illustrations/references/ips/openclaw/",
      "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
      "skills/visual-ip-illustrations/references/ips/gopher/",
      "skills/visual-ip-illustrations/references/ips/gopher/source.md",
      "Xiaohei",
      "Littlebox",
      "OpenClaw",
      "Go Gopher",
    ], "public route docs, canonical pack paths, and route names");
  }),
  defineCheck("DOC-TOM-001", "public docs expose Tom gated route markers", () => {
    const text = combinedText(["README.md", "examples/prompts.md"]);
    assertIncludes(text, "README.md + examples/prompts.md", [
      "gated-authorized",
      "Tom",
      "Tom Cat",
      "Tom and Jerry",
      "汤姆",
      "汤姆猫",
      "skills/visual-ip-illustrations/references/ips/tom/rights.md",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
    ], "Tom status, aliases, rights path, and raw plus escaped output path tokens");
  }),
  defineCheck("DOC-FERRIS-001", "public docs expose Ferris source-reviewed route markers", () => {
    const requiredPhrase =
      "Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.";
    for (const relativePath of ["README.md", "examples/prompts.md", ROUTING_FILE, "RELEASE_CHECKLIST.md"]) {
      assertIncludes(requireFile(relativePath), relativePath, [requiredPhrase], "Ferris D-15 route-status phrase");
    }

    const text = combinedText(["README.md", "examples/prompts.md", ROUTING_FILE, "RELEASE_CHECKLIST.md"]);
    assertIncludes(text, "README.md + examples/prompts.md + routing.md + RELEASE_CHECKLIST.md", [
      "Ferris",
      "Rust mascot",
      "Rust crab",
      "Rustacean",
      "Rust 吉祥物",
      "Rust 螃蟹",
      "skills/visual-ip-illustrations/references/ips/ferris/source.md",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
    ], "Ferris aliases, source record path, and raw plus escaped output path tokens");
  }),
  defineCheck("DOC-SEAL-001", "public docs expose Seal active route and source-history markers", () => {
    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "Seal",
        "active",
        "source-history",
        "hoodie seal",
      ], "Seal route status and source-history wording");
    }
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Seal Source-History Boundary",
      "active",
      "Source-history authority",
      "hoodie seal",
    ], "Seal NOTICE route status and source-history wording");
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Seal",
      "active",
      "product-neutral hoodie seal route",
    ], "Seal agent metadata route status wording");
    assertIncludes(
      combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md", ROUTING_FILE]),
      "README.md + examples/prompts.md + NOTICE.md + RELEASE_CHECKLIST.md + routing.md",
      [
        "skills/visual-ip-illustrations/references/ips/seal/source.md",
        "skills/visual-ip-illustrations/references/ips/seal/",
        "source-history authority",
        "hoodie seal identity note",
        "logo-free note",
        "assets/<article-slug>-seal/",
        "assets/&lt;article-slug&gt;-seal/",
        "Public rendered Seal samples",
        "Seal public asset policy for",
        "Seal Generated Sample Policy",
        "Phase 32",
      ],
      "Seal docs, metadata, source authority, path-token consistency, public sample policy, and validator ownership markers",
    );
  }),
  defineCheck("DOC-OPENCLAW-001", "public docs expose OpenClaw source-reviewed route and source/license markers", () => {
    for (const relativePath of readmeVariantFiles()) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "OpenClaw",
        "source-reviewed",
        "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
        "assets/<article-slug>-openclaw/",
        "assets/&lt;article-slug&gt;-openclaw/",
      ], "OpenClaw README variant route status, source/license authority, and path markers");
    }
    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "OpenClaw",
        "source-reviewed",
        "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
        "assets/<article-slug>-openclaw/",
        "assets/&lt;article-slug&gt;-openclaw/",
      ], "OpenClaw route status, source/license authority, and path markers");
    }
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "OpenClaw Source Attribution and Public Sample Gate",
      "https://github.com/openclaw/openclaw",
      "MIT License",
      "Copyright (c) 2026 OpenClaw Foundation",
      "Source/license authority: `skills/visual-ip-illustrations/references/ips/openclaw/source.md`",
      "Uploaded-logo authority",
    ], "OpenClaw NOTICE source/license and uploaded-logo authority wording");
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "OpenClaw",
      "source-reviewed",
      "logo-mascot route",
    ], "OpenClaw agent metadata route status wording");
    assertIncludes(
      combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md", ROUTING_FILE, OPENAI_AGENT_FILE]),
      "README.md + examples/prompts.md + NOTICE.md + RELEASE_CHECKLIST.md + routing.md + openai.yaml",
      [
        "skills/visual-ip-illustrations/references/ips/openclaw/",
        "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
        "OpenClaw Source and License Review",
        "OpenClaw Public Asset Policy",
        "OpenClaw Generated Sample Policy",
        "uploaded-logo identity",
        "uploaded-logo authority",
        "source/license authority",
        "public rendered OpenClaw samples",
        "Phase 37",
      ],
      "OpenClaw docs, metadata, source/license authority, path-token consistency, public sample policy, and validator ownership markers",
    );
  }),
  defineCheck("DOC-GOPHER-001", "public docs expose Go Gopher source-reviewed route and source/license markers", () => {
    for (const relativePath of readmeVariantFiles()) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "Go Gopher",
        "source-reviewed",
        "skills/visual-ip-illustrations/references/ips/gopher/source.md",
        "assets/<article-slug>-gopher/",
        "assets/&lt;article-slug&gt;-gopher/",
      ], "Go Gopher README variant route status, source/license authority, and path markers");
    }
    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "Go Gopher",
        "source-reviewed",
        "skills/visual-ip-illustrations/references/ips/gopher/source.md",
        "assets/<article-slug>-gopher/",
        "assets/&lt;article-slug&gt;-gopher/",
      ], "Go Gopher route status, source/license authority, and path markers");
    }
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Go Gopher Source Attribution and Public Sample Gate",
      "https://go.dev/blog/gopher",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "Source/license authority: `skills/visual-ip-illustrations/references/ips/gopher/source.md`",
      "Local visual authority: root `gopher.png`",
    ], "Go Gopher NOTICE source/license and local visual authority wording");
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Go Gopher",
      "source-reviewed",
      "article-mascot route",
    ], "Go Gopher agent metadata route status wording");
    assertIncludes(
      combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md", ROUTING_FILE, OPENAI_AGENT_FILE]),
      "README.md + examples/prompts.md + NOTICE.md + RELEASE_CHECKLIST.md + routing.md + openai.yaml",
      [
        "skills/visual-ip-illustrations/references/ips/gopher/",
        "skills/visual-ip-illustrations/references/ips/gopher/source.md",
        "Go Gopher Source and License Review",
        "Go Gopher Public Asset Policy",
        "Go Gopher Generated Sample Policy",
        "root `gopher.png` local visual authority",
        "source/license authority",
        "public rendered Go Gopher samples",
        "Go logo boundary",
        "official endorsement boundary",
        "Phase 42",
      ],
      "Go Gopher docs, metadata, source/license authority, path-token consistency, public sample policy, and validator ownership markers",
    );
  }),
  defineCheck("NOTICE-IAN-001", "NOTICE keeps Ian Xiaohei attribution markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Ian Xiaohei Illustrations",
      "created by Ian",
      "小黑",
      "Ian's visual language",
      "provide attribution to Ian",
      "https://github.com/helloianneo",
    ], "Ian source and redistribution attribution markers");
  }),
  defineCheck("NOTICE-LB-001", "NOTICE keeps Littlebox attribution markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "5km Littlebox Illustrations",
      "okooo5km",
      "https://github.com/okooo5km/5km-littlebox-illustrations",
      "MIT",
      "37cd93ee516da0324577b7bbc8ca3146e5c8d8d7",
      "37cd93e",
      "Copyright (c) 2026 okooo5km",
      "derived documentation",
    ], "Littlebox source project, author, URL, MIT context, commits, copyright, and derived-credit guidance");
  }),
  defineCheck("NOTICE-TOM-001", "NOTICE keeps Tom source attribution and permission boundary markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Tom Source Attribution and Permission Boundary",
      "Tom from Tom and Jerry",
      "Tom and Jerry / Tom",
      "gated-authorized",
      "skills/visual-ip-illustrations/references/ips/tom/rights.md",
      "Attribution records Tom source identity",
      "Permission is authorization-scope specific",
      "release checklist approval",
      "public-sample gate",
    ], "Tom source attribution, route status, rights record, and permission boundary");
  }),
  defineCheck("NOTICE-FERRIS-001", "NOTICE keeps Ferris source attribution and Rust trademark boundary markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Ferris Source Attribution and Rust Trademark Boundary",
      "Ferris the Rustacean",
      "rustacean.net",
      "Karen Rustad Tolva",
      "source-reviewed",
      "skills/visual-ip-illustrations/references/ips/ferris/source.md",
      "Ferris attribution records source context",
      "Rust and Cargo marks",
      "official-affiliation claims",
      "endorsement wording",
      "Rust Foundation trademark policy context",
      "release review",
    ], "Ferris source attribution, route status, source record, Rust trademark boundary, and release review");
  }),
  defineCheck("NOTICE-SEAL-001", "NOTICE keeps Seal source-history boundary markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Seal Source-History Boundary",
      "product-neutral hoodie seal route",
      "Route status: `active`",
      "Source-history authority: `skills/visual-ip-illustrations/references/ips/seal/source.md`",
      "Hoodie seal identity",
      "Logo-free route behavior",
      "active product-neutral hoodie seal article character",
      "Historical provenance",
      "previous Sealos Seal uploaded hoodie seal image",
      "Public rendered Seal samples",
    ], "Seal NOTICE source-history authority, hoodie identity, historical provenance, and public sample review");
  }),
  defineCheck("NOTICE-OPENCLAW-001", "NOTICE keeps OpenClaw source attribution and public sample gate markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "OpenClaw Source Attribution and Public Sample Gate",
      "source-reviewed logo-mascot route",
      "Route: OpenClaw",
      "Route id: `openclaw`",
      "Route status: `source-reviewed`",
      "Official repository: <https://github.com/openclaw/openclaw>",
      "License: `MIT License`",
      "Source copyright: `Copyright (c) 2026 OpenClaw Foundation`",
      "Source/license authority: `skills/visual-ip-illustrations/references/ips/openclaw/source.md`",
      "Uploaded-logo authority",
      "Attribution context: OpenClaw source, license, copyright, uploaded-logo authority, route metadata, documentation, and release review",
      "Public rendered OpenClaw samples remain gated",
      "public-sample decision",
    ], "OpenClaw NOTICE source/license, uploaded-logo authority, attribution context, and public sample gate");
  }),
  defineCheck("NOTICE-GOPHER-001", "NOTICE keeps Go Gopher source attribution and public sample gate markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Go Gopher Source Attribution and Public Sample Gate",
      "source-reviewed article-mascot route",
      "Route: Go Gopher",
      "Route id: `gopher`",
      "Route status: `source-reviewed`",
      "Official Go blog source: <https://go.dev/blog/gopher>",
      "Attribution: Renee French",
      "License boundary: Creative Commons Attribution 4.0",
      "Source/license authority: `skills/visual-ip-illustrations/references/ips/gopher/source.md`",
      "Local visual authority: root `gopher.png`",
      "Attribution context: Go Gopher source, Renee French attribution, Creative Commons Attribution 4.0 boundary, local `gopher.png` visual authority, route metadata, documentation, and release review",
      "Public rendered Go Gopher samples remain gated",
      "public-sample decision",
      "Go logo boundary outcome",
      "official endorsement boundary outcome",
    ], "Go Gopher NOTICE source/license, local visual authority, attribution context, and public sample gate");
  }),
  defineCheck("SMOKE-DEFAULT-001", "examples prompts cover omitted-IP default Xiaohei smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Omitted Visual IP",
      "default visual IP",
      "shot list",
      "selected visual IP",
    ], "text-only omitted-IP default route smoke prompt");
  }),
  defineCheck("SMOKE-XH-001", "examples prompts cover explicit Xiaohei smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit Xiaohei",
      "小黑",
      "Xiaohei",
      "Ian",
      "ian-xiaohei",
      "assets/<article-slug>-illustrations/",
    ], "text-only explicit Xiaohei route smoke prompt");
  }),
  defineCheck("SMOKE-LB-001", "examples prompts cover explicit Littlebox smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit Littlebox",
      "小盒",
      "Littlebox",
      "纸盒",
      "paper-box",
      "carton",
      "Littlebox state: closed",
      "visual metaphor",
      "assigned background",
      "assets/<article-slug>-littlebox/",
    ], "text-only explicit Littlebox route smoke prompt");
  }),
  defineCheck("SMOKE-TOM-001", "examples prompts cover explicit Tom route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit Tom",
      "Tom, Tom Cat, Tom and Jerry, 汤姆, and 汤姆猫",
      "Tom is an explicit protected-character route",
      "route status `gated-authorized`",
      "skills/visual-ip-illustrations/references/ips/tom/rights.md",
      "Use route-local reference directory: `skills/visual-ip-illustrations/references/ips/tom/`",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
      "Rights-status note",
      "Tom aliases include Tom, Tom Cat, Tom and Jerry, 汤姆, and 汤姆猫",
      "Public rendered Tom samples are governed by the `RELEASE_CHECKLIST.md` public-sample gate",
      "Text-only maintainer route audit",
      "Public rendered Tom samples are controlled by the RELEASE_CHECKLIST.md public-sample gate",
    ], "text-only explicit Tom route smoke, planning, generation, path, rights, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-FERRIS-001", "examples prompts cover explicit Ferris route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit Ferris",
      "Ferris, Rust mascot, Rust crab, Rustacean, Rust 吉祥物, and Rust 螃蟹",
      "Ferris is an explicit Rust-community mascot route with status source-reviewed",
      "route status is `source-reviewed`",
      "skills/visual-ip-illustrations/references/ips/ferris/source.md",
      "Use route-local reference directory: `skills/visual-ip-illustrations/references/ips/ferris/`",
      "required references include `index.md`, `source.md`, `style-dna.md`, `ferris-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
      "Source/trademark note",
      "generated public Ferris samples require release review for Rust trademark and endorsement-safe wording",
      "Text-only maintainer route audit",
    ], "text-only explicit Ferris route smoke, planning, generation, path, source/trademark, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-SEAL-001", "examples prompts cover explicit Seal route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit Seal",
      "Seal / hoodie seal / white seal / blue hoodie seal / 海豹 / 连帽衫海豹 / 白色海豹 / 蓝色连帽衫海豹",
      "selected IP is Seal",
      "route status is `active`",
      "source-history authority is `skills/visual-ip-illustrations/references/ips/seal/source.md`",
      "route-local reference directory is `skills/visual-ip-illustrations/references/ips/seal/`",
      "required references include `index.md`, `source.md`, `style-dna.md`, `seal-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`",
      "planning fields include Placement, Core idea, Structure type, Seal state, Seal action, Supporting objects, Visible labels, Output path, Source-history note",
      "assets/<article-slug>-seal/",
      "assets/&lt;article-slug&gt;-seal/",
      "hoodie seal identity markers include white rounded seal body, plain navy cap, plain deep-blue hoodie, glossy dark eyes, black nose, whisker dots, small smile, short rounded flippers, compact legs, side-rear white tail",
      "no-logo markers include no cap logo, no chest logo, no mascot logos, no logo patches, no logo-like wave/cloud mark, no emblem, no text badge",
      "public rendered Seal samples require release review",
    ], "text-only explicit Seal route smoke, planning, generation, path, identity, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-OPENCLAW-001", "examples prompts cover explicit OpenClaw route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Smoke: Explicit OpenClaw",
      "OpenClaw is an explicit `source-reviewed` logo-mascot route",
      "Explicit OpenClaw aliases include OpenClaw, openclaw, OpenClaw logo, OpenClaw mascot",
      "Use $ian-xiaohei-illustrations with the OpenClaw route",
      "route status `source-reviewed`",
      "source/license authority `skills/visual-ip-illustrations/references/ips/openclaw/source.md`",
      "route-local reference directory `skills/visual-ip-illustrations/references/ips/openclaw/`",
      "required references include `index.md`, `source.md`, `style-dna.md`, `openclaw-ip.md`, `composition-patterns.md`, `prompt-template.md`, `qa-checklist.md`",
      "planning fields include Placement, Core idea, Structure type, OpenClaw state, OpenClaw action, Supporting objects, Visible labels, Output path, Source/license note",
      "assets/<article-slug>-openclaw/",
      "assets/&lt;article-slug&gt;-openclaw/",
      "uploaded-logo identity markers include red round body, side claw-like arms, two antennae, black eyes, cyan pupils, and short legs",
      "OpenClaw action vocabulary includes inspect, hold, bridge, sort, lift, connect, and signal",
      "public rendered OpenClaw samples require release review",
      "### Explicit OpenClaw: edit existing image",
      "### Smoke: OpenClaw source-reviewed route status",
    ], "text-only explicit OpenClaw route smoke, planning, generation, edit, path, source/license, identity, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-GOPHER-001", "examples prompts cover explicit Go Gopher route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "### Smoke: Go Gopher source-reviewed route status",
      "Text-only maintainer route audit. Use the Go Gopher route",
      "route status `source-reviewed`",
      "source/license authority `skills/visual-ip-illustrations/references/ips/gopher/source.md`",
      "route-local reference directory is `skills/visual-ip-illustrations/references/ips/gopher/`",
      "planning fields include Placement, Core idea, Structure type, Gopher state, Gopher action, Supporting objects, Visible labels, Output path, Source/license note",
      "assets/<article-slug>-gopher/",
      "assets/&lt;article-slug&gt;-gopher/",
      "root `gopher.png`",
      "Renee French attribution",
      "Creative Commons Attribution 4.0 boundary",
      "Go logo boundary",
      "official endorsement boundary",
      "### Explicit Go Gopher: edit existing image",
      "### Smoke: Go Gopher source-reviewed route status",
    ], "text-only explicit Go Gopher route smoke, planning, generation, edit, path, source/license, identity, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-MIXED-001", "examples prompts cover mixed-IP variant smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Route Notes: Mixed-IP Requests",
      "core idea",
      "Xiaohei variant group",
      "Littlebox variant group",
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
    ], "text-only mixed-IP variant group smoke prompt");
  }),
  defineCheck("SMOKE-MIXED-SEAL-001", "examples prompts preserve Seal mixed-IP route behavior", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "Xiaohei variant group",
      "Littlebox variant group",
      "Tom variant group",
      "Ferris variant group",
      "Seal variant group",
      "each group loads its own references",
      "Seal canonical pack is at `skills/visual-ip-illustrations/references/ips/seal/`",
      "Seal source-history authority is at `skills/visual-ip-illustrations/references/ips/seal/source.md`",
      "Seal group uses `assets/<article-slug>-seal/`",
      "Hoodie seal identity note",
    ], "mixed prompt separation, Seal route-local pack, source authority, output path, and source-history note");
  }),
  defineCheck("SMOKE-MIXED-OPENCLAW-001", "examples prompts cover six-route mixed-IP OpenClaw variant behavior", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "six separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw",
      "Xiaohei variant group",
      "Littlebox variant group",
      "Tom variant group",
      "Ferris variant group",
      "Seal variant group",
      "OpenClaw variant group",
      "OpenClaw canonical pack is at `skills/visual-ip-illustrations/references/ips/openclaw/`",
      "OpenClaw source/license authority is at `skills/visual-ip-illustrations/references/ips/openclaw/source.md`",
      "OpenClaw variant group uses `skills/visual-ip-illustrations/references/ips/openclaw/`",
      "Output to `assets/<article-slug>-openclaw/`",
      "Docs validation token is `assets/&lt;article-slug&gt;-openclaw/`",
      "uploaded-logo identity markers",
      "Public rendered OpenClaw samples are controlled by the RELEASE_CHECKLIST.md public-sample and final evidence gates",
      "Expected: OpenClaw variant group uses `skills/visual-ip-illustrations/references/ips/openclaw/`",
      "OpenClaw variant group each use their own route-local references",
    ], "six-route mixed prompt separation, OpenClaw route-local pack, source/license authority, output path, uploaded-logo identity, and public-sample gate");
  }),
  defineCheck("SMOKE-MIXED-GOPHER-001", "examples prompts cover seven-route mixed-IP Go Gopher variant behavior", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "seven separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, and Go Gopher",
      "Xiaohei variant group",
      "Littlebox variant group",
      "Tom variant group",
      "Ferris variant group",
      "Seal variant group",
      "OpenClaw variant group",
      "Go Gopher variant group",
      "Go Gopher canonical pack is at `skills/visual-ip-illustrations/references/ips/gopher/`",
      "Go Gopher source/license authority is at `skills/visual-ip-illustrations/references/ips/gopher/source.md`",
      "Go Gopher variant group uses `skills/visual-ip-illustrations/references/ips/gopher/`",
      "outputs to `assets/<article-slug>-gopher/`",
      "keeps docs validation token `assets/&lt;article-slug&gt;-gopher/`",
      "root `gopher.png` local visual authority",
      "public sample gate",
      "Expected: Go Gopher variant group uses `skills/visual-ip-illustrations/references/ips/gopher/`",
      "Go Gopher variant group each use their own route-local references",
    ], "seven-route mixed prompt separation, Go Gopher route-local pack, source/license authority, output path, root visual identity, and public-sample gate");
  }),
  defineCheck("RELEASE-TOM-001", "release checklist keeps Tom rights and public sample gate markers", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Tom Rights and Public Sample Gate",
      "skills/visual-ip-illustrations/references/ips/tom/rights.md",
      "gated-authorized",
      "default=false",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
      "Public rendered Tom samples approved",
      "PENDING / reviewer / date",
    ], "Tom release gate section and pending public sample approval marker");
  }),
  defineCheck("RELEASE-FERRIS-001", "release checklist keeps Ferris source, trademark, and public sample gate markers", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Ferris Source, Trademark, and Public Sample Gate",
      "Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.",
      "skills/visual-ip-illustrations/references/ips/ferris/source.md",
      "source-reviewed",
      "Rust-logo-forward",
      "bundled Rust marks",
      "official-affiliation cues",
      "endorsement wording",
      "Ferris Public Asset Policy",
      "Ferris Generated Sample Policy",
      "Ferris public asset policy for",
      "Public rendered Ferris samples require explicit approval",
      "Record generated sample review",
      "internal review directories / public directories / release channels",
      "trademark and endorsement-safe wording outcome",
      "Phase 15 validator/test evidence",
      "PENDING / reviewer / date",
      "examples/images-en",
    ], "Ferris release gate section, source record, trademark review, public asset policy, generated sample policy, and Phase 15 evidence marker");
  }),
  defineCheck("RELEASE-SEAL-001", "release checklist keeps Seal source-history, hoodie identity, and public sample gates", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Seal Source-History, Hoodie Identity, and Public Sample Gate",
      "Seal Source-History Review",
      "Seal Hoodie Identity and Logo-Free Wording Review",
      "Seal Prompt Leakage Scan",
      "Seal Public Asset Policy",
      "Seal Generated Sample Policy",
      "Final Seal Release Review",
      "skills/visual-ip-illustrations/references/ips/seal/source.md",
      "active",
      "source-history authority",
      "hoodie seal identity",
      "logo-free outcome",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Seal public asset policy for",
      "reviewer",
      "approval status",
      "allowed directories",
      "release channels",
      "hoodie seal identity outcome",
      "no-logo outcome",
      "assets/<article-slug>-seal/",
      "node scripts/validate-skill-package.mjs",
      "node --test scripts/validate-skill-package.test.mjs",
      "git diff --check",
      "white rounded seal body",
      "plain navy cap",
      "plain deep-blue hoodie",
      "glossy dark eyes",
      "black nose",
      "whisker dots",
      "small smile",
      "short rounded flippers",
      "compact legs",
      "side-rear white tail",
      "generic seals",
      "abstract logo creatures",
      "missing cap",
      "missing hoodie",
      "logo-bearing mascot variants",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "logo-like wave/cloud mark",
      "text badge",
      "generated logo approximation",
      "generated logo tracing",
      "redrawn logo",
      "alternate wave mark",
      "simplified logo mark",
      "changed body color",
      "missing side-rear tail",
      "plain bald-head variants",
      "prior exploration variants",
      "different selected mascot",
    ], "Seal release checklist source-history, hoodie identity, leakage, public asset, generated sample, validator, and final review markers");
  }),
  defineCheck("RELEASE-OPENCLAW-001", "release checklist keeps OpenClaw source, license, and public sample gates", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## OpenClaw Source, License, and Public Sample Gate",
      "OpenClaw Source and License Review",
      "OpenClaw Prompt Leakage Scan",
      "OpenClaw Public Asset Policy",
      "OpenClaw Generated Sample Policy",
      "Final OpenClaw Release Review",
      "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
      "source-reviewed",
      "https://github.com/openclaw/openclaw",
      "c14793d35a10936ddea833e7808083fe57930616",
      "MIT License",
      "Copyright (c) 2026 OpenClaw Foundation",
      "uploaded-logo identity",
      "source/license outcome",
      "route-isolation outcome",
      "article-metaphor quality outcome",
      "OpenClaw public asset policy for",
      "Record generated sample review",
      "assets/<article-slug>-openclaw/",
      "node scripts/validate-skill-package.mjs",
      "node --test scripts/validate-skill-package.test.mjs",
      "git diff --check",
    ], "OpenClaw release checklist source/license, uploaded-logo identity, leakage, public asset, generated sample, validator, and final review markers");
  }),
  defineCheck("RELEASE-GOPHER-001", "release checklist keeps Go Gopher source, license, and public sample gates", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Go Gopher Source, License, and Public Sample Gate",
      "Go Gopher Source and License Review",
      "Go Gopher Prompt Leakage Scan",
      "Go Gopher Public Asset Policy",
      "Go Gopher Generated Sample Policy",
      "Final Go Gopher Release Review",
      "skills/visual-ip-illustrations/references/ips/gopher/source.md",
      "source-reviewed",
      "https://go.dev/blog/gopher",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "root `gopher.png` local visual authority",
      "public-sample decision",
      "Go Gopher public asset policy for",
      "Record generated sample review",
      "allowed directories / release channels",
      "Renee French attribution outcome",
      "Creative Commons Attribution 4.0 outcome",
      "local visual marker outcome",
      "route-isolation outcome",
      "Go logo boundary outcome",
      "official endorsement boundary outcome",
      "article-metaphor quality outcome",
      "assets/<article-slug>-gopher/",
      "node scripts/validate-skill-package.mjs",
      "node --test scripts/validate-skill-package.test.mjs",
      "git diff --check",
    ], "Go Gopher release checklist source/license, local visual identity, leakage, public asset, generated sample, validator, and final review markers");
  }),
  defineCheck("REBRAND-CANON-001", "runtime metadata preserves Visual IP Illustrations canonical identity", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "Visual IP Illustrations",
      "name: visual-ip-illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "visual-ip-illustrations",
      "ian-xiaohei-illustrations",
    ], "canonical runtime identity, canonical invocation, compatibility alias, slug, and package path");
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
    ], "canonical agent metadata identity and invocation aliases");
  }),
  defineCheck("REBRAND-CANON-002", "public docs preserve canonical rebrand identity", () => {
    assertIncludes(requireFile("README.md"), "README.md", [
      "# Visual IP Illustrations",
      "$visual-ip-illustrations",
      "visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
    ], "README canonical public identity, canonical invocation, checkout slug, and compatibility alias");
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Canonical normal-flow prompts",
      "$visual-ip-illustrations",
    ], "examples canonical invocation surface");
  }),
  defineCheck("REBRAND-CANON-003", "release docs preserve rebrand identity and review markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Visual IP Illustrations",
      "rebrand scope",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
    ], "NOTICE release 1.4 rebrand scope and aliases");
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "Release 1.4 Rebrand Review",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "Visual IP Illustrations",
    ], "release checklist rebrand review and alias markers");
  }),
  defineCheck("REBRAND-CANON-004", "routing docs preserve stable Visual IP routes", () => {
    assertRebrandRouteTable();
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "Xiaohei",
      "Littlebox",
      "Tom",
      "Ferris",
      "Seal",
      "OpenClaw",
      "Go Gopher",
      "illustrations",
      "littlebox",
      "tom",
      "ferris",
      "seal",
      "openclaw",
      "gopher",
    ], "stable route display names and output suffix markers");
  }),
  defineCheck("REBRAND-COMPAT-001", "runtime metadata preserves legacy alias compatibility", () => {
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, [
      "$ian-xiaohei-illustrations",
      "v1.4 compatibility alias",
      "$visual-ip-illustrations",
    ], "runtime canonical invocation and release 1.4 compatibility alias");
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "$ian-xiaohei-illustrations is the v1.4 compatibility alias",
      "$visual-ip-illustrations",
    ], "agent canonical invocation and compatibility alias");
  }),
  defineCheck("REBRAND-COMPAT-002", "public docs preserve legacy alias smoke coverage", () => {
    assertIncludes(requireFile("README.md"), "README.md", [
      "Legacy compatibility alias",
      "$ian-xiaohei-illustrations",
    ], "README legacy compatibility guidance");
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "Legacy compatibility route smoke prompts",
      "$ian-xiaohei-illustrations",
      "route smoke fixture",
    ], "examples legacy compatibility smoke prompts");
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "$ian-xiaohei-illustrations",
      "legacy compatibility alias",
      "Omitted-IP Xiaohei smoke",
    ], "release checklist alias review and compatibility smoke marker");
  }),
  defineCheck("REBRAND-MIGRATE-001", "install guidance preserves rebrand migration contract", () => {
    assertIncludes(combinedText(["README.md", SKILL_FILE, "RELEASE_CHECKLIST.md"]), "README.md + SKILL.md + RELEASE_CHECKLIST.md", [
      "https://github.com/yangchuansheng/visual-ip-illustrations.git",
      "visual-ip-illustrations",
      "skills/visual-ip-illustrations/",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
    ], "live remote, canonical checkout slug, package directory, canonical invocation, and compatibility alias");
    for (const relativePath of readmeVariantFiles()) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "[![skills.sh](https://skills.sh/b/yangchuansheng/visual-ip-illustrations)]",
        "npx skills add yangchuansheng/visual-ip-illustrations --skill visual-ip-illustrations",
        "git clone https://github.com/yangchuansheng/visual-ip-illustrations.git visual-ip-illustrations",
        "cd visual-ip-illustrations",
        "cp -R ./skills/visual-ip-illustrations",
      ], "README variant install migration commands");
    }
  }),
  defineCheck("REBRAND-ROUTE-001", "routing table preserves rebrand route contract", () => {
    assertRebrandRouteTable();
  }),
  defineCheck("REBRAND-PATH-001", "runtime and docs preserve rebrand output path tokens", () => {
    const tokens = outputPathTokens();
    const allTokens = [...tokens.raw, ...tokens.escaped];
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, allTokens, "routing raw and escaped route output path tokens");
    const publicTokens = publicDocsOutputPathTokens();
    const allPublicTokens = [...publicTokens.raw, ...publicTokens.escaped];
    assertIncludes(requireFile(SKILL_FILE), SKILL_FILE, allPublicTokens, "SKILL raw and escaped published public route output path tokens");
    assertIncludes(requireFile("README.md"), "README.md", allPublicTokens, "README raw and escaped published public route output path tokens");
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", allPublicTokens, "examples raw and escaped published public route output path tokens");
  }),
  defineCheck("REBRAND-EVIDENCE-001", "release checklist preserves Phase 24 evidence gates", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "node scripts/validate-skill-package.mjs",
      "node --test scripts/validate-skill-package.test.mjs",
      "git diff --check",
      "Release 1.4 Rebrand Review",
      "Route Smoke Prompts",
      "Omitted-IP Xiaohei smoke",
      "Mixed-IP smoke",
    ], "validator, test, diff hygiene, rebrand review, and route smoke evidence gates");
  }),
  defineCheck("REBRAND-DOCS-001", "combined docs preserve rebrand consistency markers", () => {
    assertIncludes(requireFile("README.md"), "README.md", [
      "# Visual IP Illustrations",
      "$visual-ip-illustrations",
    ], "README first-view canonical rebrand framing");
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## Canonical normal-flow prompts",
      "$visual-ip-illustrations",
    ], "examples first-view canonical rebrand framing");
    const text = combinedText([
      SKILL_FILE,
      OPENAI_AGENT_FILE,
      "README.md",
      "examples/prompts.md",
      "NOTICE.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
    ]);
    assertIncludes(text, "runtime + docs + release + routing surfaces", [
      "Visual IP Illustrations",
      "$visual-ip-illustrations",
      "$ian-xiaohei-illustrations",
      "visual-ip-illustrations",
      "skills/visual-ip-illustrations/",
      "active",
      "gated-authorized",
      "source-reviewed",
      "active",
      "skills/visual-ip-illustrations/references/ips/tom/rights.md",
      "skills/visual-ip-illustrations/references/ips/ferris/source.md",
      "skills/visual-ip-illustrations/references/ips/seal/source.md",
      "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
      "skills/visual-ip-illustrations/references/ips/gopher/source.md",
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
      "assets/<article-slug>-ferris/",
      "assets/<article-slug>-seal/",
      "assets/<article-slug>-openclaw/",
      "assets/<article-slug>-gopher/",
    ], "canonical name, invocation aliases, install markers, route statuses, authority paths, and output paths");
  }),
  defineCheck("LANG-POLICY-001", "language policy names every English-default surface", () => {
    const policyText = requireFile(LANGUAGE_POLICY_FILE);
    assertIncludes(policyText, LANGUAGE_POLICY_FILE, [
      "English is the default",
      ...LANGUAGE_DEFAULT_SURFACES,
    ], "English-default language surfaces from LANG-01 and D-02");
  }),
  defineCheck("LANG-POLICY-002", "language policy names every approved multilingual exception category", () => {
    const policyText = requireFile(LANGUAGE_POLICY_FILE);
    assertIncludes(policyText, LANGUAGE_POLICY_FILE, [
      ...LANGUAGE_EXCEPTION_CATEGORIES,
      "category",
      "path scope",
      "exact token or anchored pattern",
      "rationale",
      "remediation target",
      "Whole-file and whole-directory exemptions are reserved for generated binary assets and image files",
    ], "approved multilingual exceptions and narrow allowlist fields from LANG-02, D-04, D-05, and D-06");
  }),
  defineCheck("LANG-SCAN-001", "residual Chinese scan classifies approved tokens separately from stale prose", () => {
    const report = languageScanReport();
    if (report.approved.length === 0) {
      throw new Error("residual Chinese scan expected approved multilingual tokens; observed approved=0");
    }
    if (report.stale.length === 0 && process.env.LANGUAGE_SCAN_EXPECT_STALE === "1") {
      throw new Error("residual Chinese scan expected controlled stale prose; observed stale=0");
    }
    if (!report.formatted.every((line) => line.includes("status=") && line.includes("category=") && line.includes("path="))) {
      throw new Error(`residual Chinese scan expected formatted findings; observed ${report.formatted.join(" | ")}`);
    }
  }),
  defineCheck("LANG-SCAN-002", "language allowlist entries stay narrow and auditable", () => {
    validateLanguageAllowlistShape();
  }),
  defineCheck("VAL-ENGLISH-001", "Phase 28 validates English-default coverage across public and runtime surfaces", () => {
    assertEnglishDefaultSurfaceCoverage();
  }),
  defineCheck("VAL-ENGLISH-002", "Phase 28 validates route-local reference language scan coverage", () => {
    assertRouteLocalEnglishCoverage();
  }),
  defineCheck("VAL-LANGUAGE-001", "Phase 28 validates default stale-prose hard failure and approved multilingual categories", () => {
    assertPhase28LanguagePolicy();
  }),
  defineCheck("VAL-COMPAT-001", "Phase 28 validates invocation, route alias, status, and output path compatibility", () => {
    assertPhase28CompatibilitySurface();
  }),
  defineCheck("VAL-RELEASE-001", "Phase 28 validates Release 1.5 English-default evidence markers", () => {
    assertPhase28ReleaseEvidenceMarkers();
  }),
  defineCheck("VAL-OPENCLAW-EVIDENCE-001", "Phase 37 records OpenClaw validation and release evidence", () => {
    const evidencePath = path.join(
      ".planning",
      "phases",
      "37-openclaw-validation-and-release-evidence",
      "37-RELEASE-EVIDENCE.md",
    );
    assertIncludes(requireFile(evidencePath), evidencePath, [
      "# Phase 37 Release Evidence: OpenClaw Validation",
      "node scripts/validate-skill-package.mjs",
      "Summary: total=112 passed=112 failed=0 skipped=0",
      "node --test scripts/validate-skill-package.test.mjs",
      "tests 80",
      "pass 80",
      "fail 0",
      "git diff --check",
      "OpenClaw route smoke",
      "source/license smoke",
      "docs consistency",
      "BOUNDARY-OPENCLAW-LEAK-001",
      "BOUNDARY-OPENCLAW-IMG-001",
      "BOUNDARY-OPENCLAW-GEN-001",
      "public rendered OpenClaw samples remain gated",
      "VAL-01",
      "VAL-02",
      "VAL-03",
      "VAL-04",
      "VAL-05",
    ], "Phase 37 exact command summaries, smoke coverage, docs consistency, leakage, sample gates, and requirement traceability");
  }),
  defineCheck("VAL-GOPHER-EVIDENCE-001", "Phase 42 records Go Gopher validation and release evidence", () => {
    const evidencePath = path.join(
      ".planning",
      "phases",
      "42-go-gopher-validation-and-release-evidence",
      "42-RELEASE-EVIDENCE.md",
    );
    assertIncludes(requireFile(evidencePath), evidencePath, [
      "# Phase 42 Release Evidence: Go Gopher Validation",
      "node scripts/validate-skill-package.mjs",
      "Summary: total=128 passed=128 failed=0 skipped=0",
      "node --test scripts/validate-skill-package.test.mjs",
      "tests 96",
      "pass 96",
      "fail 0",
      "git diff --check",
      "Go Gopher route smoke",
      "source/license smoke",
      "docs consistency",
      "BOUNDARY-GOPHER-LEAK-001",
      "BOUNDARY-GOPHER-IMG-001",
      "BOUNDARY-GOPHER-GEN-001",
      "public rendered Go Gopher samples remain gated",
      "VAL-01",
      "VAL-02",
      "VAL-03",
      "VAL-04",
      "VAL-05",
      "gopher.png remains untracked",
    ], "Phase 42 exact command summaries, smoke coverage, docs consistency, leakage, sample gates, and requirement traceability");
  }),
  defineCheck("BOUNDARY-IMG-001", "example asset directories do not import rendered Littlebox images", () => {
    const matches = legacyImageAssetPaths().filter((relativePath) => /littlebox|小盒|carton/i.test(relativePath));
    if (matches.length > 0) {
      throw new Error(
        `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Littlebox import; observed ${matches.join(", ")}`,
      );
    }
  }),
  defineCheck("BOUNDARY-TOM-LEAK-001", "Xiaohei and Littlebox references keep Tom protected-route markers isolated", () => {
    const leakMarkers = [
      "Tom Cat",
      "Tom and Jerry",
      "汤姆猫",
      "Warner Bros",
      "protected-character route",
      "default Jerry usage",
      "broad cast expansion",
      "source-frame recreation",
      "gated-authorized",
      "references/ips/tom",
      "assets/<article-slug>-tom/",
    ];
    const scannedPaths = [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
      ...legacyXiaoheiRefs().map((item) => item.root),
    ];
    for (const relativePath of scannedPaths) {
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Tom protected-route text leakage");
    }
  }),
  defineCheck("BOUNDARY-FERRIS-LEAK-001", "non-Ferris route references keep Ferris source-reviewed markers isolated", () => {
    const leakMarkers = [
      "Ferris",
      "Rustacean",
      "Rust mascot",
      "Rust crab",
      "Rust 螃蟹",
      "source-reviewed",
      "Rust trademark boundary",
      "references/ips/ferris",
      "assets/<article-slug>-ferris/",
    ];
    const scannedPaths = [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      ...tomOperationalRefs(),
      ...legacyXiaoheiRefs().map((item) => item.root),
    ];
    for (const relativePath of scannedPaths) {
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Ferris source-reviewed route text leakage");
    }
  }),
  defineCheck("BOUNDARY-SEAL-LEAK-001", "non-Seal route references keep Seal source-history markers isolated", () => {
    const leakMarkers = [
      "Sealos Seal",
      "Sealos mascot",
      "white Sealos seal",
      "brand-owned",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Brand/canonical-image note",
      "references/ips/sealos/source.md",
      "assets/<article-slug>-sealos/",
      "references/ips/seal/source.md",
      "assets/<article-slug>-seal/",
    ];
    const scannedPaths = [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      ...tomOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
      ...ferrisOperationalRefs(),
      ...legacyXiaoheiRefs().map((item) => item.root),
    ];
    for (const relativePath of scannedPaths) {
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Seal route text leakage");
    }
  }),
  defineCheck("BOUNDARY-OPENCLAW-LEAK-001", "non-OpenClaw route references keep OpenClaw source-reviewed markers isolated", () => {
    const leakMarkers = [
      "OpenClaw",
      "openclaw",
      "OpenClaw logo",
      "OpenClaw mascot",
      "OpenClaw 助手",
      "OpenClaw 吉祥物",
      "uploaded red OpenClaw logo",
      "uploaded-logo authority",
      "source/license authority",
      "references/ips/openclaw",
      "assets/<article-slug>-openclaw/",
    ];
    const scannedPaths = [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      ...tomOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
      ...ferrisOperationalRefs(),
      ...sealOperationalRefs(),
      ...legacyXiaoheiRefs().map((item) => item.root),
    ];
    for (const relativePath of scannedPaths) {
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no OpenClaw route text leakage");
    }
  }),
  defineCheck("BOUNDARY-GOPHER-LEAK-001", "non-Go-Gopher route references keep Go Gopher source-reviewed markers isolated", () => {
    const leakMarkers = [
      "Go Gopher",
      "Gopher mascot",
      "Go mascot",
      "Go 吉祥物",
      "Gopher 吉祥物",
      "gopher.png",
      "Renee French",
      "Creative Commons Attribution 4.0",
      "Go blog source",
      "Go logo boundary",
      "official endorsement boundary",
      "references/ips/gopher",
      "assets/<article-slug>-gopher/",
      "assets/&lt;article-slug&gt;-gopher/",
    ];
    const scannedPaths = [
      path.join(REFERENCES_DIR, "ips", "xiaohei", "index.md"),
      ...xiaoheiOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "littlebox", "index.md"),
      ...littleboxOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
      ...tomOperationalRefs(),
      path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
      path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
      ...ferrisOperationalRefs(),
      ...sealOperationalRefs(),
      ...openclawOperationalRefs(),
      ...legacyXiaoheiRefs().map((item) => item.root),
    ];
    for (const relativePath of scannedPaths) {
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Go Gopher route text leakage");
    }
  }),
  defineCheck("BOUNDARY-TOM-IMG-001", "example asset directories keep Tom rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicTomSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Public rendered Tom samples approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) => /tom|tom-cat|tom-and-jerry|汤姆|汤姆猫/i.test(relativePath));
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images, examples/images-en, and ${PACKAGE_DIR}/assets/examples expected no rendered Tom assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-FERRIS-IMG-001", "example asset directories keep Ferris rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicFerrisSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Ferris public asset policy approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) => /ferris|rustacean|rust-crab|rust-mascot/i.test(relativePath));
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images, examples/images-en, and ${PACKAGE_DIR}/assets/examples expected no rendered Ferris assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, trademark outcome=${approval.trademarkOutcomePresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-SEAL-IMG-001", "example asset directories keep Seal rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicSealSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Seal public asset policy approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) =>
      /(?:^|[/_-])seal(?:$|[/_.-])|hoodie-seal|white-seal|blue-hoodie-seal|海豹/i.test(relativePath),
    );
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images, examples/images-en, and ${PACKAGE_DIR}/assets/examples expected no rendered Seal assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, hoodie seal identity outcome=${approval.identityOutcomePresent ? "present" : "missing"}, no-logo outcome=${approval.noLogoOutcomePresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-OPENCLAW-IMG-001", "example asset directories keep OpenClaw rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicOpenClawSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected OpenClaw public asset policy approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) => /openclaw|open-claw/i.test(relativePath));
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images, examples/images-en, and ${PACKAGE_DIR}/assets/examples expected no rendered OpenClaw assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, uploaded-logo identity outcome=${approval.uploadedLogoIdentityOutcomePresent ? "present" : "missing"}, source/license outcome=${approval.sourceLicenseOutcomePresent ? "present" : "missing"}, route-isolation outcome=${approval.routeIsolationOutcomePresent ? "present" : "missing"}, article-metaphor quality outcome=${approval.articleMetaphorOutcomePresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-GOPHER-IMG-001", "example asset directories keep Go Gopher rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicGopherSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Go Gopher public asset policy approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) => /gopher|go-gopher/i.test(relativePath));
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images, examples/images-en, and ${PACKAGE_DIR}/assets/examples expected no rendered Go Gopher assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, Go blog source outcome=${approval.sourceOutcomePresent ? "present" : "missing"}, Renee French attribution outcome=${approval.attributionOutcomePresent ? "present" : "missing"}, Creative Commons Attribution 4.0 outcome=${approval.licenseOutcomePresent ? "present" : "missing"}, local visual marker outcome=${approval.visualOutcomePresent ? "present" : "missing"}, route-isolation outcome=${approval.routeIsolationOutcomePresent ? "present" : "missing"}, Go logo boundary outcome=${approval.logoBoundaryOutcomePresent ? "present" : "missing"}, official endorsement boundary outcome=${approval.endorsementBoundaryOutcomePresent ? "present" : "missing"}, article-metaphor quality outcome=${approval.articleMetaphorOutcomePresent ? "present" : "missing"}, public-sample decision=${approval.publicSampleOutcomePresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-FERRIS-GEN-001", "Ferris generated samples stay distinct from public rendered sample release gates", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parseGeneratedFerrisSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Ferris generated sample review record; observed missing line");
    }
    assertIncludes(releaseChecklist, "RELEASE_CHECKLIST.md", [
      "Internal review samples under `assets/<article-slug>-ferris/` may be used",
      "Public rendered samples from `assets/<article-slug>-ferris/` require Ferris Public Asset Policy approval",
      "Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome",
    ], "Ferris generated sample workspace and public release distinction");
  }),
  defineCheck("BOUNDARY-SEAL-GEN-001", "Seal generated samples stay distinct from public rendered sample release gates", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parseGeneratedSealSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Seal generated sample review record; observed missing line");
    }
    assertIncludes(releaseChecklist, "RELEASE_CHECKLIST.md", [
      "Internal review samples under `assets/<article-slug>-seal/` may be used",
      "Public rendered samples from `assets/<article-slug>-seal/` require Seal Public Asset Policy approval",
      "Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / hoodie seal identity outcome / no-logo outcome",
    ], "Seal generated sample workspace and public release distinction");
  }),
  defineCheck("BOUNDARY-OPENCLAW-GEN-001", "OpenClaw generated samples stay distinct from public rendered sample release gates", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parseGeneratedOpenClawSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected OpenClaw generated sample review record; observed missing line");
    }
    assertIncludes(releaseChecklist, "RELEASE_CHECKLIST.md", [
      "Internal review samples under `assets/<article-slug>-openclaw/` may be used",
      "Public rendered samples from `assets/<article-slug>-openclaw/` require OpenClaw Public Asset Policy approval",
      "Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome",
    ], "OpenClaw generated sample workspace and public release distinction");
  }),
  defineCheck("BOUNDARY-GOPHER-GEN-001", "Go Gopher generated samples stay distinct from public rendered sample release gates", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parseGeneratedGopherSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Go Gopher generated sample review record; observed missing line");
    }
    assertIncludes(releaseChecklist, "RELEASE_CHECKLIST.md", [
      "Internal review samples under `assets/<article-slug>-gopher/` may be used",
      "Public rendered samples from `assets/<article-slug>-gopher/` require Go Gopher Public Asset Policy approval",
      "Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / local visual marker outcome / route-isolation outcome / Go logo boundary outcome / official endorsement boundary outcome / article-metaphor quality outcome",
    ], "Go Gopher generated sample workspace and public release distinction");
  }),
  defineCheck("BOUNDARY-P5-001", "validator enforces live package and workspace output boundaries", () => {
    for (const row of routeRows()) {
      const references = routeReferencePaths(row);
      if (references.length === 0) {
        throw new Error(`${ROUTING_FILE} expected ${row.id} to define at least one required reference`);
      }
      for (const reference of references) {
        const resolved = safeReferencePath(reference);
        const relative = displayPath(resolved);
        if (!relative.startsWith(`${PACKAGE_DIR}/references/`)) {
          throw new Error(`${ROUTING_FILE} expected ${row.id} reference ${reference} under ${PACKAGE_DIR}/references/`);
        }
        if (row.id === "seal" && reference !== "references/ips/seal/source.md") {
          continue;
        }
        if (!fileExists(relative)) {
          throw new Error(`${ROUTING_FILE} expected ${row.id} reference ${reference} to exist; observed missing ${relative}`);
        }
      }
    }

    const publicDocsText = combinedText(["README.md", "examples/prompts.md", SKILL_FILE, ROUTING_FILE]);
    const outputTokens = [...outputPathTokens().raw, ...outputPathTokens().escaped];
    const invalidTokens = outputTokens.filter((token) => !token.startsWith("assets/"));
    if (invalidTokens.length > 0) {
      throw new Error(`outputPathTokens expected workspace assets/ prefixes; observed ${invalidTokens.join(", ")}`);
    }
    assertIncludes(
      publicDocsText,
      "README.md + examples/prompts.md + routing.md",
      outputTokens,
      "live workspace output path markers",
    );
  }),
];

function runChecks() {
  const results = new Results();
  for (const check of checks) {
    try {
      check.run();
      results.pass(check.id, check.message);
    } catch (error) {
      results.fail(check.id, `${check.message}: ${error.message}`);
    }
  }
  results.render();
}

function runCli() {
  const flags = new Set(process.argv.slice(2));
  try {
    if (flags.has("--stale-sealos-scan")) {
      assertStaleSealosActiveRouteScan();
      console.log("PASS stale Sealos active-route scan");
      return;
    }
    if (flags.has("--docs-consistency-scan")) {
      assertSealDocsConsistencyScan();
      console.log("PASS Seal docs consistency scan");
      return;
    }
    if (flags.has("--route-migration-smoke")) {
      assertSealRouteMigrationSmoke();
      console.log("PASS Seal route migration smoke");
      return;
    }
    runChecks();
  } catch (error) {
    console.error(`FAIL ${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && path.basename(process.argv[1]) === "validate-skill-package.mjs") {
  runCli();
}

export {
  PACKAGE_DIR,
  PUBLIC_DOCS,
  REFERENCES_DIR,
  REPO_ROOT,
  assertMarkers,
  fileExists,
  packagePath,
  readUtf8,
  repoPath,
  safePackagePath,
  safeReferencePath,
  sortedDirectoryEntries,
  splitRouteCell,
  splitRouteAliases,
};
