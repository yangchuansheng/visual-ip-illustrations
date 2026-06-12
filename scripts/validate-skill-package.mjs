import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const PACKAGE_DIR = "ian-xiaohei-illustrations";
const REFERENCES_DIR = path.join(PACKAGE_DIR, "references");
const PUBLIC_DOCS = ["README.md", "examples/prompts.md", "NOTICE.md", "LICENSE"];
const SKILL_FILE = path.join(PACKAGE_DIR, "SKILL.md");
const OPENAI_AGENT_FILE = path.join(PACKAGE_DIR, "agents", "openai.yaml");
const ROUTING_FILE = path.join(REFERENCES_DIR, "routing.md");
const README_FILE = "README.md";

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

function stripWrappingTicks(value) {
  return value.trim().replace(/^`+|`+$/g, "").trim();
}

function splitRouteCell(value) {
  return value
    .split(";")
    .map((item) => stripWrappingTicks(item))
    .filter(Boolean);
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
    raw: ["assets/<article-slug>-illustrations/", "assets/<article-slug>-littlebox/"],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
    ],
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

function assertArrayIncludes(actual, expected, relativePath, relation) {
  const missing = expected.filter((item) => !actual.includes(item));
  if (missing.length > 0) {
    throw new Error(
      `${relativePath} expected ${relation}; observed missing item(s): ${missing.join(", ")}`,
    );
  }
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

const checks = [
  defineCheck("PKG-SHAPE-001", "required skill package files exist and are readable", () => {
    assertReadableFiles(requiredPackageFiles(), PACKAGE_DIR, "complete installable package shape");
  }),
  defineCheck("SKILL-FM-001", "SKILL.md frontmatter exposes required skill metadata", () => {
    const frontmatter = parseFrontmatter(requireFile(SKILL_FILE));
    if (frontmatter.data.name !== "ian-xiaohei-illustrations") {
      throw new Error(
        `${SKILL_FILE} expected frontmatter name=ian-xiaohei-illustrations; observed ${frontmatter.data.name ?? "missing"}`,
      );
    }
    if (!frontmatter.data.description) {
      throw new Error(`${SKILL_FILE} expected non-empty frontmatter description; observed missing value`);
    }
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
    assertArrayIncludes(routeRows().map((row) => row.id), ["xiaohei", "littlebox"], ROUTING_FILE, "route ids");
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
  }),
  defineCheck("ROUTE-REFS-001", "routing.md required_references resolve inside the package", () => {
    for (const row of routeRows()) {
      const references = routeReferencePaths(row);
      const expectedCount = row.id === "littlebox" ? 6 : 5;
      if (references.length !== expectedCount) {
        throw new Error(
          `${ROUTING_FILE} expected ${row.id} required_references count=${expectedCount}; observed ${references.length}`,
        );
      }
      for (const reference of references) {
        const resolved = safeReferencePath(reference);
        const relative = displayPath(resolved);
        if (!fileExists(relative)) {
          throw new Error(`${ROUTING_FILE} expected ${row.id} reference ${reference} to exist; observed missing ${relative}`);
        }
      }
    }
  }),
  defineCheck("ROUTE-PATHS-001", "routing.md output suffixes match public output directories", () => {
    const xiaohei = routeById("xiaohei");
    const littlebox = routeById("littlebox");
    if (xiaohei.output_suffix !== "illustrations") {
      throw new Error(`${ROUTING_FILE} expected xiaohei output_suffix=illustrations; observed ${xiaohei.output_suffix}`);
    }
    if (littlebox.output_suffix !== "littlebox") {
      throw new Error(`${ROUTING_FILE} expected littlebox output_suffix=littlebox; observed ${littlebox.output_suffix}`);
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
    ], "output suffix to output directory mapping");
  }),
  defineCheck("ROUTE-MIXED-001", "routing.md preserves mixed-IP separate route group wording", () => {
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "separate route groups",
      "每个 route group 只加载自己的 `required_references`",
      "`xiaohei` 写入 `assets/<article-slug>-illustrations/`",
      "`littlebox` 写入 `assets/<article-slug>-littlebox/`",
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

if (process.argv[1] && path.basename(process.argv[1]) === "validate-skill-package.mjs") {
  runChecks();
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
};
