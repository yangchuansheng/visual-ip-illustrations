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
      "assets/<article-slug>-sealos/",
    ],
    escaped: [
      "assets/&lt;article-slug&gt;-illustrations/",
      "assets/&lt;article-slug&gt;-littlebox/",
      "assets/&lt;article-slug&gt;-tom/",
      "assets/&lt;article-slug&gt;-ferris/",
      "assets/&lt;article-slug&gt;-sealos/",
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

export function parsePublicSealosSampleApproval(releaseChecklistText) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Sealos public asset policy for"));

  return parseSealosApprovalLine(approvalLine, "public");
}

export function parseGeneratedFerrisSampleApproval(releaseChecklistText) {
  const ferrisSection = releaseChecklistText
    .split("## Ferris Source, Trademark, and Public Sample Gate")[1]
    ?.split("## Sealos Seal Brand, Uploaded Image, and Public Sample Gate")[0] ?? "";
  const approvalLine = ferrisSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseFerrisApprovalLine(approvalLine, "generated");
}

export function parseGeneratedSealosSampleApproval(releaseChecklistText) {
  const sealosSection = releaseChecklistText
    .split("## Sealos Seal Brand, Uploaded Image, and Public Sample Gate")[1] ?? "";
  const approvalLine = sealosSection
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("Record generated sample review:"));

  return parseSealosApprovalLine(approvalLine, "generated");
}

function parsePublicRouteSampleApproval(releaseChecklistText, routeName) {
  const approvalLine = releaseChecklistText
    .split("\n")
    .map((line) => line.trim())
    .find((line) =>
      line.includes(
        `Public rendered ${routeName} samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/:`,
      ),
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
  const requiredDirectories = ["examples/images", "ian-xiaohei-illustrations/assets/examples"];
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

function emptySealosApproval() {
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

function parseSealosApprovalLine(approvalLine, kind) {
  if (!approvalLine) {
    return emptySealosApproval();
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
  const publicRequiredDirectories = ["examples/images", "ian-xiaohei-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-sealos"];
  const generatedRequiredPublicDirectories = ["examples/images", "ian-xiaohei-illustrations/assets/examples"];
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
    Boolean(identityOutcome) && !/^uploaded-image identity outcome\.?$/i.test(identityOutcome);
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

  const publicRequiredDirectories = ["examples/images", "ian-xiaohei-illustrations/assets/examples"];
  const generatedRequiredInternalDirectories = ["assets/<article-slug>-ferris"];
  const generatedRequiredPublicDirectories = ["examples/images", "ian-xiaohei-illustrations/assets/examples"];
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
    path.join(REFERENCES_DIR, "ips", "tom", "index.md"),
    ...tomOperationalRefs(),
    path.join(REFERENCES_DIR, "ips", "ferris", "index.md"),
    path.join(REFERENCES_DIR, "ips", "ferris", "source.md"),
    ...ferrisOperationalRefs(),
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

function sealosOperationalRefs() {
  return sealosPlannedReferences().map((item) => path.join(PACKAGE_DIR, item));
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

function sealosFixedMarkers() {
  return [
    "white rounded seal body",
    "plain navy cap with no logo",
    "plain deep-blue hoodie chest with no logo",
    "no cap logo",
    "no chest logo",
    "no mascot logos",
    "no logo patches",
    "glossy dark eyes",
    "black nose",
    "whisker dots",
    "small smile",
    "short rounded flippers",
    "compact legs",
    "side-rear white tail",
  ];
}

function sealosAliases() {
  return [
    "Sealos Seal",
    "Sealos mascot",
    "Sealos 吉祥物",
    "Sealos 海豹",
    "white Sealos seal",
    "blue hoodie seal",
  ];
}

function sealosPlannedReferences() {
  return [
    "references/ips/sealos/index.md",
    "references/ips/sealos/source.md",
    "references/ips/sealos/style-dna.md",
    "references/ips/sealos/sealos-ip.md",
    "references/ips/sealos/composition-patterns.md",
    "references/ips/sealos/prompt-template.md",
    "references/ips/sealos/qa-checklist.md",
  ];
}

function sealosDriftMarkers() {
  return [
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
  ];
}

function imageAssetPaths() {
  return [
    ...sortedDirectoryEntries("examples/images").filter((entry) => entry.type === "file").map((entry) => entry.path),
    ...sortedDirectoryEntries(path.join(PACKAGE_DIR, "assets", "examples"))
      .filter((entry) => entry.type === "file")
      .map((entry) => entry.path),
  ].sort((a, b) => a.localeCompare(b, "en"));
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
      "Tom 是 explicit gated-authorized protected-character route",
      "explicit Tom protected-character route（gated-authorized）",
      "Ferris 是 explicit source-reviewed Rust-community mascot route",
      "explicit Ferris Rust-community mascot route（source-reviewed）",
      "allow_implicit_invocation: true",
    ], "Xiaohei default behavior, Littlebox selection, explicit gated Tom, explicit source-reviewed Ferris, and implicit invocation markers");
  }),
  defineCheck("AGENT-SEALOS-001", "openai.yaml exposes Sealos explicit brand-owned route metadata markers", () => {
    assertIncludes(requireFile(OPENAI_AGENT_FILE), OPENAI_AGENT_FILE, [
      "Sealos Seal",
      "default Xiaohei",
      "explicit Sealos Seal brand-owned route",
      "brand-owned",
      "uploaded-image authority",
      "allow_implicit_invocation: true",
    ], "Sealos explicit brand-owned route discovery metadata and default Xiaohei preservation");
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
    assertArrayIncludes(routeRows().map((row) => row.id), ["xiaohei", "littlebox", "tom", "ferris", "sealos"], ROUTING_FILE, "route ids");
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
  defineCheck("ROUTE-SEALOS-001", "routing.md preserves the Phase 16 Sealos brand-owned route contract", () => {
    const row = routeById("sealos");
    const references = routeReferencePaths(row);
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      ...sealosAliases(),
      "sealos",
      "brand-owned",
      "uploaded mascot image",
      "uploaded-image authority",
      "brand/canonical-image boundary",
      "references/ips/sealos/source.md",
    ], "Sealos display name, aliases, suffix, uploaded-image authority, source record, and status");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected sealos default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "sealos") {
      throw new Error(`${ROUTING_FILE} expected sealos output_suffix=sealos; observed ${row.output_suffix || "missing"}`);
    }
    if (references.join("\n") !== sealosPlannedReferences().join("\n")) {
      throw new Error(
        `${ROUTING_FILE} expected sealos required_references=${sealosPlannedReferences().join(", ")}; observed ${references.join(", ") || "none"}`,
      );
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "brand_context",
      "reliable cloud developer companion tied to Sealos cloud OS, AI-native deployment, DevBox, databases, app deployment, and Kubernetes",
      "canonical_image_status",
      "uploaded-image-canonical",
      "drift_boundary",
      "uploaded-image-locked",
      ...sealosFixedMarkers(),
    ], "Sealos metadata block with brand context, canonical image status, drift boundary, and fixed markers");
    assertExistingFiles(
      [path.join(PACKAGE_DIR, "references", "ips", "sealos", "source.md")],
      ROUTING_FILE,
      "Phase 16 Sealos source record existence",
    );
  }),
  defineCheck("ROUTE-SEALOS-002", "routing.md preserves the full Phase 20 Sealos route metadata contract", () => {
    const row = routeById("sealos");
    assertIncludes(Object.values(row).join(" "), ROUTING_FILE, [
      "Sealos Seal",
      "Sealos mascot",
      "Sealos 吉祥物",
      "Sealos 海豹",
      "white Sealos seal",
      "blue hoodie seal",
      "sealos",
      "brand-owned",
      "brand/canonical-image boundary",
      "references/ips/sealos/source.md",
    ], "Sealos Phase 20 aliases, suffix, status, and source authority");
    if (row.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected sealos default=false; observed ${row.default || "missing"}`);
    }
    if (row.output_suffix !== "sealos") {
      throw new Error(`${ROUTING_FILE} expected sealos output_suffix=sealos; observed ${row.output_suffix || "missing"}`);
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "assets/<article-slug>-sealos/",
      "assets/&lt;article-slug&gt;-sealos/",
    ], "Sealos Phase 20 image status, drift boundary, and path tokens");
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
    const sealos = routeById("sealos");
    if (sealos.default !== "false") {
      throw new Error(`${ROUTING_FILE} expected sealos default=false; observed ${sealos.default || "missing"}`);
    }
  }),
  defineCheck("ROUTE-REFS-001", "routing.md required_references resolve inside the package", () => {
    for (const row of routeRows()) {
      const references = routeReferencePaths(row);
      const expectedCounts = { xiaohei: 5, littlebox: 6, tom: 7, ferris: 7, sealos: 7 };
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
        if (row.id === "sealos") {
          if (!reference.startsWith("references/ips/sealos/")) {
            throw new Error(`${ROUTING_FILE} expected sealos reference ${reference} under references/ips/sealos/`);
          }
          if (!displayPath(resolved).startsWith(`${PACKAGE_DIR}/references/ips/sealos/`)) {
            throw new Error(`${ROUTING_FILE} expected sealos reference ${reference} to resolve under ${PACKAGE_DIR}/references/ips/sealos/`);
          }
          if (reference !== "references/ips/sealos/source.md") continue;
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
    const sealos = routeById("sealos");
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
    if (sealos.output_suffix !== "sealos") {
      throw new Error(`${ROUTING_FILE} expected sealos output_suffix=sealos; observed ${sealos.output_suffix}`);
    }
    assertIncludes(requireFile(ROUTING_FILE), ROUTING_FILE, [
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
      "assets/<article-slug>-sealos/",
      "assets/&lt;article-slug&gt;-sealos/",
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
      "Sealos Seal",
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
  defineCheck("REFS-SEALOS-001", "Sealos canonical route references and shared markers exist", () => {
    const sealosFiles = sealosOperationalRefs();
    assertReadableFiles(sealosFiles, path.join(REFERENCES_DIR, "ips", "sealos"), "Sealos seven-file pack");
    for (const relativePath of sealosFiles) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "sealos",
        "brand-owned",
        "source.md",
        "uploaded-image-canonical",
        "uploaded-image-locked",
        "assets/<article-slug>-sealos/",
      ], "Sealos route-local shared operational markers");
    }
    assertIncludes(combinedText([
      path.join(REFERENCES_DIR, "ips", "sealos", "index.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "qa-checklist.md"),
    ]), path.join(REFERENCES_DIR, "ips", "sealos"), [
      "Public rendered Sealos samples",
      "Sealos route block",
      "plain navy cap with no logo",
      "plain deep-blue hoodie chest with no logo",
      "no cap logo",
      "no chest logo",
      "no mascot logos",
      "no logo patches",
    ], "Sealos route-local shared sample gate, no-logo markers, and route block markers");
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
  defineCheck("PROMPT-SEALOS-001", "Sealos prompt template preserves planning, generation, edit, and brand markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "sealos", "prompt-template.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Sealos planning fields gate",
      "Placement",
      "Core idea",
      "Structure type",
      "Mascot state",
      "Mascot action",
      "Supporting objects",
      "Visible labels",
      "Output path: assets/<article-slug>-sealos/",
      "Brand/canonical-image note",
      "Image-generation prompts stay English",
      "Visible labels are copied exactly in the user's language",
      "Sealos one-image generation gate",
      "Route status note: Sealos Seal is a `brand-owned` route.",
      "Canonical image note: Sealos Seal is `uploaded-image-canonical` and `uploaded-image-locked`.",
      "Cloud-developer article metaphor",
      "Save reminder",
      "Stronger Mascot Participation",
      "Uploaded-Image Identity Repair",
      "No-Logo Hoodie Cap Repair",
      "Title Removal",
      "Text Reduction",
      "Preserve Unaffected Content",
    ], "Sealos planning fields, generation prompt, brand/canonical image note, save reminder, and edit prompt families");
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
  defineCheck("IP-SEALOS-001", "Sealos canonical pack preserves uploaded-image identity and action gates", () => {
    const text = combinedText([
      path.join(REFERENCES_DIR, "ips", "sealos", "index.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "source.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "style-dna.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "sealos-ip.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "composition-patterns.md"),
    ]);
    assertIncludes(text, path.join(REFERENCES_DIR, "ips", "sealos"), [
      "brand-owned",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Sealos cognitive-action participation gate",
      "Sealos Seal must perform the central cognitive action",
      "reliable cloud developer companion",
      "Sealos cloud OS",
      "AI-native deployment",
      "DevBox",
      "databases",
      "app deployment",
      "Kubernetes",
      "source.md",
      ...sealosFixedMarkers(),
      "generic seal drift",
      "abstract logo creature drift",
      "logo-bearing mascot variants",
      "missing cap",
      "missing hoodie",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "changed body color",
      "passive mascot placement",
      "over-detailed 3D toy drift",
      "excessive text",
      "route leakage",
      "bald or plain-head seal variants",
      "different mascot selection",
    ], "Sealos route status, uploaded-image markers, cognitive action gates, brand context, drift markers, and source authority");
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
  defineCheck("QA-SEALOS-001", "Sealos QA checklist preserves brand-owned pass, fail, repair, and delivery markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "sealos", "qa-checklist.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Sealos QA brand/canonical-image gate.",
      "Sealos QA uploaded-image identity gate.",
      "Sealos Seal recognizability is clear",
      "Sealos Seal performs the active Mascot action.",
      "Brand/canonical-image note is present in planning, generation, edit, and delivery context.",
      "Delivery path uses `assets/<article-slug>-sealos/`.",
      "generic seal drift",
      "abstract logo creature drift",
      "logo-bearing mascot variants",
      "missing cap",
      "missing hoodie",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patch",
      "logo-like wave/cloud mark",
      "changed body color",
      "passive mascot placement",
      "over-detailed 3D toy drift",
      "excessive text",
      "route leakage",
      "missing Brand/canonical-image note",
      "Sealos QA generic seal drift failure",
      "Sealos QA abstract logo creature drift failure",
      "Sealos QA passive mascot placement failure",
      "Sealos QA no-logo failure",
      "Sealos QA route leakage failure",
      "Stronger Mascot Participation",
      "Uploaded-Image Identity Repair",
      "No-Logo Hoodie Cap Repair",
      "Title Removal",
      "Text Reduction",
      "Preserve Unaffected Content",
      "Sealos QA unaffected-content preservation gate",
      "Accepted Sealos images keep Sealos Seal as the action subject",
    ], "Sealos QA pass criteria, uploaded-image failures, route leakage failure, repair gates, and delivery judgment");
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
  defineCheck("SOURCE-SEALOS-001", "Sealos source record preserves Phase 16 brand and uploaded-image markers", () => {
    const relativePath = path.join(REFERENCES_DIR, "ips", "sealos", "source.md");
    assertIncludes(requireFile(relativePath), relativePath, [
      "Sealos Seal Brand and Canonical Image Record",
      "## Source",
      "## Brand Context",
      "## Canonical Image Authority",
      "## Fixed Visual Markers",
      "## Prior Exploration Boundary",
      "## Route Status",
      "## Allowed Use",
      "## Restricted Use",
      "## Distribution Boundary",
      "## Sample Policy",
      "## Drift Boundary",
      "## Review Owner",
      "uploaded mascot image",
      "canonical Sealos Seal reference for v1.3",
      "brand-owned",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "prior Sealos mascot exploration",
      "reliable cloud developer companion",
      "Sealos cloud OS",
      "AI-native deployment",
      "DevBox",
      "databases",
      "app deployment",
      "Kubernetes",
      "generic seals",
      "abstract logo creatures",
      "blue-gradient cloud/seal explorations",
      "bald or plain-head seal variants",
      "different mascot selection",
      ...sealosFixedMarkers(),
    ], "Sealos source headings, uploaded-image authority, fixed markers, brand context, sample policy, and drift boundary");
  }),
  defineCheck("LOGO-SEALOS-001", "Sealos route keeps mascot logo-free", () => {
    const routeLocalFiles = [
      path.join(REFERENCES_DIR, "ips", "sealos", "index.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "source.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "prompt-template.md"),
      path.join(REFERENCES_DIR, "ips", "sealos", "qa-checklist.md"),
    ];
    for (const relativePath of routeLocalFiles) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "plain navy cap with no logo",
        "plain deep-blue hoodie chest with no logo",
        "no cap logo",
        "no chest logo",
        "no mascot logos",
        "no logo patches",
        "no logo-like wave/cloud mark",
        "no emblem",
        "no text badge",
      ], "route-local no-logo mascot markers");
    }
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "sealos", "source.md")), path.join(REFERENCES_DIR, "ips", "sealos", "source.md"), [
      "Logo-free identity",
      "No-logo rule",
      "No-logo geometry gate",
      "No-logo delivery gate",
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
    ], "Sealos source no-logo markers");
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "sealos", "prompt-template.md")), path.join(REFERENCES_DIR, "ips", "sealos", "prompt-template.md"), [
      "No-logo note",
      "No-logo markers",
      "No-Logo Hoodie Cap Repair",
      "plain navy cap with no logo",
      "plain deep-blue hoodie chest with no logo",
      "cap and hoodie chest must stay plain",
      "cap, hoodie chest, mascot body, props, and scene",
      "logo-bearing mascot variants",
      "cap logo",
      "chest logo",
      "mascot logo",
      "logo patches",
      "logo-like wave/cloud mark",
      "no emblem",
      "no text badge",
      "generated logo approximation",
      "generated logo tracing",
      "redrawn logo",
      "alternate wave mark",
      "simplified logo mark",
    ], "Sealos prompt no-logo generation and repair markers");
    assertIncludes(requireFile(path.join(REFERENCES_DIR, "ips", "sealos", "qa-checklist.md")), path.join(REFERENCES_DIR, "ips", "sealos", "qa-checklist.md"), [
      "Sealos QA no-logo failure",
      "No-Logo Hoodie Cap Repair",
      "no-logo delivery note",
      "plain navy cap with no logo",
      "plain deep-blue hoodie chest with no logo",
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
      "alternate wave mark",
      "simplified logo mark",
    ], "Sealos QA no-logo failure markers");

    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "RELEASE_CHECKLIST.md",
      ROUTING_FILE,
      path.join(PACKAGE_DIR, "SKILL.md"),
    ]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "plain navy cap with no logo",
        "plain deep-blue hoodie chest with no logo",
        "no cap logo",
        "no chest logo",
        "no mascot logos",
      ], "Sealos public no-logo marker");
    }
    const publicText = combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md", ROUTING_FILE, path.join(PACKAGE_DIR, "SKILL.md")]);
    assertIncludes(publicText, "Sealos public docs and SKILL.md", [
      "no-logo mascot identity",
      "plain navy cap with no logo",
      "plain deep-blue hoodie chest with no logo",
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
    ], "Sealos public no-logo markers");
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
  defineCheck("DOC-PATHS-001", "README and examples expose raw and escaped output path tokens", () => {
    const tokens = outputPathTokens();
    for (const [relativePath, text] of Object.entries(docsTexts())) {
      const pathName = relativePath === "readme" ? "README.md" : "examples/prompts.md";
      assertIncludes(text, pathName, [...tokens.raw, ...tokens.escaped], "raw and HTML-escaped route output path tokens");
    }
  }),
  defineCheck("DOC-ROUTES-001", "public docs expose route metadata and canonical pack paths", () => {
    const text = combinedText(["README.md", "examples/prompts.md"]);
    assertIncludes(text, "README.md + examples/prompts.md", [
      "ian-xiaohei-illustrations/references/routing.md",
      "ian-xiaohei-illustrations/references/ips/xiaohei/",
      "ian-xiaohei-illustrations/references/ips/littlebox/",
      "Xiaohei",
      "Littlebox",
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
      "ian-xiaohei-illustrations/references/ips/tom/rights.md",
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
      "ian-xiaohei-illustrations/references/ips/ferris/source.md",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
    ], "Ferris aliases, source record path, and raw plus escaped output path tokens");
  }),
  defineCheck("DOC-SEALOS-P16-001", "public docs expose Phase 16 Sealos route-status markers", () => {
    const text = combinedText(["README.md", "examples/prompts.md"]);
    assertIncludes(text, "README.md + examples/prompts.md", [
      "Sealos Seal",
      "brand-owned",
      "Sealos mascot",
      "Sealos 吉祥物",
      "Sealos 海豹",
      "white Sealos seal",
      "blue hoodie seal",
      "ian-xiaohei-illustrations/references/ips/sealos/source.md",
      "ian-xiaohei-illustrations/references/routing.md",
      "assets/<article-slug>-sealos/",
      "assets/&lt;article-slug&gt;-sealos/",
      "reliable cloud developer companion",
      "uploaded-image identity",
      "generic seal",
      "abstract logo creature",
      "prior exploration variant",
    ], "Phase 16 Sealos route status, aliases, source record, routing link, output tokens, brand context, and drift markers");
  }),
  defineCheck("DOC-SEALOS-P19-001", "public docs expose Phase 19 Sealos release-surface markers", () => {
    for (const relativePath of ["README.md", "examples/prompts.md", ROUTING_FILE, "RELEASE_CHECKLIST.md"]) {
      assertIncludes(requireFile(relativePath), relativePath, [
        "Sealos Seal",
        "brand-owned",
        "ian-xiaohei-illustrations/references/ips/sealos/source.md",
        "ian-xiaohei-illustrations/references/ips/sealos/",
        "uploaded-image-canonical",
        "uploaded-image-locked",
        "assets/<article-slug>-sealos/",
        "assets/&lt;article-slug&gt;-sealos/",
      ], "Sealos Phase 19 route, docs, metadata, source authority, and path-token consistency");
    }
    assertIncludes(combinedText(["README.md", "examples/prompts.md", "NOTICE.md", "RELEASE_CHECKLIST.md"]), "README.md + examples/prompts.md + NOTICE.md + RELEASE_CHECKLIST.md", [
      "prior exploration",
      "Brand/canonical-image note",
      "brand wording",
      "no-logo mascot identity",
      "Public rendered Sealos samples",
      "generated sample",
      "Phase 20",
    ], "Sealos Phase 19 public docs, NOTICE, release policy, generated sample, and validator ownership markers");
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
      "ian-xiaohei-illustrations/references/ips/tom/rights.md",
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
      "ian-xiaohei-illustrations/references/ips/ferris/source.md",
      "Ferris attribution records source context",
      "Rust and Cargo marks",
      "official-affiliation claims",
      "endorsement wording",
      "Rust Foundation trademark policy context",
      "release review",
    ], "Ferris source attribution, route status, source record, Rust trademark boundary, and release review");
  }),
  defineCheck("NOTICE-SEALOS-001", "NOTICE keeps Sealos brand and canonical image boundary markers", () => {
    assertIncludes(requireFile("NOTICE.md"), "NOTICE.md", [
      "Sealos Seal Brand and Canonical Image Boundary",
      "uploaded white seal mascot",
      "brand-owned",
      "Uploaded-image authority",
      "no-logo mascot identity",
      "ian-xiaohei-illustrations/references/ips/sealos/source.md",
      "reliable cloud developer companion",
      "Prior Sealos mascot exploration",
      "v1.3 canonical mascot reference",
      "Public rendered samples",
      "brand wording",
    ], "Sealos NOTICE brand-owned route, uploaded-image authority, source record, prior exploration boundary, and public sample review");
  }),
  defineCheck("SMOKE-DEFAULT-001", "examples prompts cover omitted-IP default Xiaohei smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由烟测：省略视觉 IP",
      "默认视觉 IP",
      "shot list",
      "所选视觉 IP",
    ], "text-only omitted-IP default route smoke prompt");
  }),
  defineCheck("SMOKE-XH-001", "examples prompts cover explicit Xiaohei smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由烟测：显式选择 Xiaohei",
      "小黑",
      "Xiaohei",
      "Ian",
      "ian-xiaohei",
      "assets/<article-slug>-illustrations/",
    ], "text-only explicit Xiaohei route smoke prompt");
  }),
  defineCheck("SMOKE-LB-001", "examples prompts cover explicit Littlebox smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由烟测：显式选择 Littlebox",
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
      "## 路由烟测：显式选择 Tom",
      "Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫",
      "Tom 是 explicit protected-character route",
      "route status 是 `gated-authorized`",
      "ian-xiaohei-illustrations/references/ips/tom/rights.md",
      "使用 route-local reference directory：`ian-xiaohei-illustrations/references/ips/tom/`",
      "assets/<article-slug>-tom/",
      "assets/&lt;article-slug&gt;-tom/",
      "Rights-status note",
      "Tom aliases 包括：Tom、Tom Cat、Tom and Jerry、汤姆、汤姆猫",
      "公共 rendered Tom samples 发布状态以 RELEASE_CHECKLIST.md 的 public-sample gate 为准",
      "Text-only maintainer route audit",
      "Public rendered Tom samples 由 RELEASE_CHECKLIST.md 的 public-sample gate 控制",
    ], "text-only explicit Tom route smoke, planning, generation, path, rights, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-FERRIS-001", "examples prompts cover explicit Ferris route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由烟测：显式选择 Ferris",
      "Ferris、Rust mascot、Rust crab、Rustacean、Rust 吉祥物、Rust 螃蟹",
      "Ferris is an explicit Rust-community mascot route with status source-reviewed",
      "route status 是 `source-reviewed`",
      "ian-xiaohei-illustrations/references/ips/ferris/source.md",
      "使用 route-local reference directory：`ian-xiaohei-illustrations/references/ips/ferris/`",
      "required references 包含 `index.md`、`source.md`、`style-dna.md`、`ferris-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`",
      "assets/<article-slug>-ferris/",
      "assets/&lt;article-slug&gt;-ferris/",
      "Source/trademark note",
      "generated public Ferris samples require release review for Rust trademark and endorsement-safe wording",
      "Text-only maintainer route audit",
    ], "text-only explicit Ferris route smoke, planning, generation, path, source/trademark, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-SEALOS-001", "examples prompts cover explicit Sealos route smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由烟测：显式选择 Sealos Seal",
      "Sealos Seal / Sealos mascot / Sealos 吉祥物 / Sealos 海豹 / white Sealos seal / blue hoodie seal",
      "selected IP 是 Sealos Seal",
      "route status 是 `brand-owned`",
      "source authority 是 `ian-xiaohei-illustrations/references/ips/sealos/source.md`",
      "route-local reference directory 是 `ian-xiaohei-illustrations/references/ips/sealos/`",
      "required references 包含 `index.md`、`source.md`、`style-dna.md`、`sealos-ip.md`、`composition-patterns.md`、`prompt-template.md`、`qa-checklist.md`",
      "planning fields 包含 Placement、Core idea、Structure type、Mascot state、Mascot action、Supporting objects、Visible labels、Output path、Brand/canonical-image note",
      "assets/<article-slug>-sealos/",
      "assets/&lt;article-slug&gt;-sealos/",
      "uploaded-image identity markers 包含 white rounded seal body、plain navy cap with no logo、plain deep-blue hoodie chest with no logo、glossy dark eyes、black nose、whisker dots、small smile、short rounded flippers、compact legs、side-rear white tail",
      "no-logo markers 包含 no cap logo、no chest logo、no mascot logos、no logo patches、no logo-like wave/cloud mark、no emblem、no text badge",
      "public rendered Sealos samples require release review",
    ], "text-only explicit Sealos route smoke, planning, generation, path, identity, and public-sample gate prompts");
  }),
  defineCheck("SMOKE-MIXED-001", "examples prompts cover mixed-IP variant smoke path", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "## 路由说明：多 IP 请求",
      "core idea",
      "Xiaohei variant group",
      "Littlebox variant group",
      "assets/<article-slug>-illustrations/",
      "assets/<article-slug>-littlebox/",
    ], "text-only mixed-IP variant group smoke prompt");
  }),
  defineCheck("SMOKE-MIXED-SEALOS-001", "examples prompts cover five-route mixed-IP Sealos variant behavior", () => {
    assertIncludes(requireFile("examples/prompts.md"), "examples/prompts.md", [
      "Xiaohei variant group",
      "Littlebox variant group",
      "Tom variant group",
      "Ferris variant group",
      "Sealos Seal variant group",
      "五个 separate variant group",
      "分别使用自己的 route-local references",
      "Sealos Seal canonical pack 位于 `ian-xiaohei-illustrations/references/ips/sealos/`",
      "Sealos brand/canonical-image authority 位于 `ian-xiaohei-illustrations/references/ips/sealos/source.md`",
      "Sealos Seal 组使用 `assets/<article-slug>-sealos/`",
      "Brand/canonical-image note 保留 uploaded-image-canonical、uploaded-image-locked",
    ], "five-route mixed prompt separation, Sealos route-local pack, source authority, output path, and brand note");
  }),
  defineCheck("RELEASE-TOM-001", "release checklist keeps Tom rights and public sample gate markers", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Tom Rights and Public Sample Gate",
      "ian-xiaohei-illustrations/references/ips/tom/rights.md",
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
      "ian-xiaohei-illustrations/references/ips/ferris/source.md",
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
      "allowed directories / release channels",
    ], "Ferris release gate section, source record, trademark review, public asset policy, generated sample policy, and Phase 15 evidence marker");
  }),
  defineCheck("RELEASE-SEALOS-001", "release checklist keeps Sealos uploaded-image, no-logo, brand, and public sample gates", () => {
    assertIncludes(requireFile("RELEASE_CHECKLIST.md"), "RELEASE_CHECKLIST.md", [
      "## Sealos Seal Brand, Uploaded Image, and Public Sample Gate",
      "Sealos Source Record Review",
      "Uploaded-Image Identity Review",
      "Sealos Brand and No-Logo Wording Review",
      "no-logo mascot identity",
      "Sealos Prompt Leakage Scan",
      "Sealos Public Asset Policy",
      "Sealos Generated Sample Policy",
      "Final Sealos Release Review",
      "ian-xiaohei-illustrations/references/ips/sealos/source.md",
      "brand-owned",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Sealos public asset policy for",
      "reviewer",
      "approval status",
      "allowed directories",
      "release channels",
      "uploaded-image identity outcome",
      "no-logo outcome",
      "assets/<article-slug>-sealos/",
      "node scripts/validate-skill-package.mjs",
      "node --test scripts/validate-skill-package.test.mjs",
      "git diff --check",
      ...sealosFixedMarkers(),
      ...sealosDriftMarkers(),
    ], "Sealos release checklist identity, brand/logo, leakage, public asset, generated sample, validator, and final review markers");
  }),
  defineCheck("BOUNDARY-IMG-001", "example asset directories do not import rendered Littlebox images", () => {
    const matches = imageAssetPaths().filter((relativePath) => /littlebox|小盒|carton/i.test(relativePath));
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
  defineCheck("BOUNDARY-SEALOS-LEAK-001", "non-Sealos route references keep Sealos brand-owned markers isolated", () => {
    const leakMarkers = [
      "Sealos Seal",
      "Sealos mascot",
      "white Sealos seal",
      "blue hoodie seal",
      "brand-owned",
      "uploaded-image-canonical",
      "uploaded-image-locked",
      "Brand/canonical-image note",
      "references/ips/sealos/source.md",
      "assets/<article-slug>-sealos/",
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
      assertNoMarkers(requireFile(relativePath), relativePath, leakMarkers, "no Sealos brand-owned route text leakage");
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
        `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Tom assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}`,
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
        `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Ferris assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, trademark outcome=${approval.trademarkOutcomePresent ? "present" : "missing"}`,
      );
    }
  }),
  defineCheck("BOUNDARY-SEALOS-IMG-001", "example asset directories keep Sealos rendered assets behind release approval", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parsePublicSealosSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Sealos public asset policy approval record; observed missing line");
    }
    const matches = imageAssetPaths().filter((relativePath) =>
      /sealos|sealos-seal|white-seal|blue-hoodie-seal|海豹/i.test(relativePath),
    );
    if (!approval.complete && matches.length > 0) {
      throw new Error(
        `examples/images and ${PACKAGE_DIR}/assets/examples expected no rendered Sealos assets until public-sample approval is complete; observed ${matches.join(", ")}; approval status=${approval.status || "missing"}, reviewer=${approval.reviewerPresent ? "present" : "missing"}, date=${approval.datePresent ? "present" : "missing"}, allowed directories=${approval.allowedDirectoriesPresent ? "present" : "missing"}, release channels=${approval.releaseChannelsPresent ? "present" : "missing"}, uploaded-image identity outcome=${approval.identityOutcomePresent ? "present" : "missing"}, no-logo outcome=${approval.noLogoOutcomePresent ? "present" : "missing"}`,
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
  defineCheck("BOUNDARY-SEALOS-GEN-001", "Sealos generated samples stay distinct from public rendered sample release gates", () => {
    const releaseChecklist = requireFile("RELEASE_CHECKLIST.md");
    const approval = parseGeneratedSealosSampleApproval(releaseChecklist);
    if (!approval.found) {
      throw new Error("RELEASE_CHECKLIST.md expected Sealos generated sample review record; observed missing line");
    }
    assertIncludes(releaseChecklist, "RELEASE_CHECKLIST.md", [
      "Internal review samples under `assets/<article-slug>-sealos/` may be used",
      "Public rendered samples from `assets/<article-slug>-sealos/` require Sealos Public Asset Policy approval",
      "Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome",
    ], "Sealos generated sample workspace and public release distinction");
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
        if (row.id === "sealos" && reference !== "references/ips/sealos/source.md") {
          continue;
        }
        if (!fileExists(relative)) {
          throw new Error(`${ROUTING_FILE} expected ${row.id} reference ${reference} to exist; observed missing ${relative}`);
        }
      }
    }

    const publicDocsText = combinedText(["README.md", "examples/prompts.md", ROUTING_FILE]);
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
