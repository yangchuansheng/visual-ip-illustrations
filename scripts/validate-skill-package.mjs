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
  defineCheck("PKG-SMOKE", "required package entry files are readable", () => {
    const requiredFiles = [SKILL_FILE, OPENAI_AGENT_FILE, ROUTING_FILE];
    const missing = requiredFiles.filter((relativePath) => !fileExists(relativePath));
    if (missing.length > 0) {
      throw new Error(`missing required file(s): ${missing.join(", ")}`);
    }
    for (const relativePath of requiredFiles) {
      const text = readUtf8(relativePath);
      if (text.length === 0) {
        throw new Error(`${relativePath} is empty`);
      }
    }
  }),
  defineCheck("PKG-BOUNDARY", "route reference path helper stays inside package boundary", () => {
    const resolved = safeReferencePath("references/routing.md");
    if (!displayPath(resolved).endsWith(ROUTING_FILE)) {
      throw new Error(`resolved unexpected path ${displayPath(resolved)}`);
    }
  }),
  defineCheck("PKG-LISTING", "reference directory listing is stable and sorted", () => {
    const entries = sortedDirectoryEntries(REFERENCES_DIR);
    const paths = entries.map((entry) => entry.path);
    const sorted = [...paths].sort((a, b) => a.localeCompare(b, "en"));
    if (JSON.stringify(paths) !== JSON.stringify(sorted)) {
      throw new Error(`${REFERENCES_DIR} listing is not sorted`);
    }
  }),
  defineCheck("PARSE-SKILL", "SKILL.md frontmatter exposes name and description", () => {
    const frontmatter = parseFrontmatter(requireFile(SKILL_FILE));
    if (frontmatter.data.name !== "ian-xiaohei-illustrations") {
      throw new Error(`${SKILL_FILE} frontmatter name must be ian-xiaohei-illustrations`);
    }
    if (!frontmatter.data.description) {
      throw new Error(`${SKILL_FILE} frontmatter description is missing`);
    }
  }),
  defineCheck("PARSE-YAML", "openai.yaml exposes expected nested metadata keys", () => {
    const yaml = parseSimpleYamlShape(requireFile(OPENAI_AGENT_FILE));
    if (!yaml.interface?.display_name) {
      throw new Error(`${OPENAI_AGENT_FILE} missing interface.display_name`);
    }
    if (!yaml.interface?.short_description) {
      throw new Error(`${OPENAI_AGENT_FILE} missing interface.short_description`);
    }
    if (!yaml.interface?.default_prompt) {
      throw new Error(`${OPENAI_AGENT_FILE} missing interface.default_prompt`);
    }
    if (yaml.policy?.allow_implicit_invocation !== true) {
      throw new Error(`${OPENAI_AGENT_FILE} missing policy.allow_implicit_invocation: true`);
    }
  }),
  defineCheck("PARSE-ROUTING", "routing.md IP Routes table exposes current route rows", () => {
    const rows = parseMarkdownTable(requireFile(ROUTING_FILE), "IP Routes");
    const ids = rows.map((row) => row.id);
    if (!ids.includes("xiaohei") || !ids.includes("littlebox")) {
      throw new Error(`${ROUTING_FILE} must include xiaohei and littlebox route rows`);
    }
    for (const row of rows) {
      for (const reference of splitRouteCell(row.required_references ?? "")) {
        safeReferencePath(reference);
      }
    }
  }),
  defineCheck("PARSE-README-LINKS", "README local Markdown links can be parsed", () => {
    const links = parseMarkdownLinks(requireFile(README_FILE)).filter((link) => !link.external);
    if (!links.some((link) => link.target === "examples/prompts.md")) {
      throw new Error(`${README_FILE} missing local link to examples/prompts.md`);
    }
    if (!links.some((link) => link.target === "examples/images/01-two-breakpoints.png")) {
      throw new Error(`${README_FILE} missing local image link for first example`);
    }
  }),
  defineCheck("PARSE-XIAOHEI-BODY", "legacy Xiaohei body marker is extractable", () => {
    const body = bodyAfterHeading(
      requireFile(path.join(REFERENCES_DIR, "style-dna.md")),
      "Current Xiaohei Contract",
    );
    if (!body.includes("纯白")) {
      throw new Error(`${REFERENCES_DIR}/style-dna.md body after Current Xiaohei Contract is missing pure-white marker`);
    }
  }),
  defineCheck("PARSE-OUTPUT-TOKENS", "raw and escaped output path tokens are defined", () => {
    const tokens = outputPathTokens();
    assertMarkers(requireFile(SKILL_FILE), SKILL_FILE, tokens.raw);
    assertMarkers(requireFile(SKILL_FILE), SKILL_FILE, tokens.escaped);
  }),
  defineCheck("PKG-PUBLIC-DOCS", "public documentation files are readable", () => {
    for (const relativePath of PUBLIC_DOCS) {
      requireFile(relativePath);
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
