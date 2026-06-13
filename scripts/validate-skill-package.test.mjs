import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

const repoRoot = path.resolve(import.meta.dirname, "..");
const scriptPath = path.join(repoRoot, "scripts", "validate-skill-package.mjs");
const requiredCheckIds = [
  "PKG-SHAPE-001",
  "SKILL-FM-001",
  "SKILL-ROUTE-001",
  "SKILL-REFS-001",
  "SKILL-OUTPUT-001",
  "SKILL-GEN-001",
  "AGENT-SHAPE-001",
  "AGENT-TOM-001",
  "ROUTE-TABLE-001",
  "ROUTE-XH-001",
  "ROUTE-LB-001",
  "ROUTE-TOM-001",
  "ROUTE-FERRIS-001",
  "ROUTE-DEFAULT-001",
  "ROUTE-REFS-001",
  "ROUTE-PATHS-001",
  "ROUTE-MIXED-001",
  "REFS-XH-001",
  "REFS-LB-001",
  "REFS-TOM-001",
  "LEGACY-XH-001",
  "LEGACY-XH-002",
  "PROMPT-XH-001",
  "PROMPT-LB-001",
  "PROMPT-LB-002",
  "PROMPT-TOM-001",
  "IP-XH-001",
  "IP-LB-001",
  "IP-TOM-001",
  "QA-TOM-001",
  "RIGHTS-TOM-001",
  "SOURCE-FERRIS-001",
  "DOC-LINKS-001",
  "DOC-PATHS-001",
  "DOC-ROUTES-001",
  "DOC-TOM-001",
  "DOC-FERRIS-001",
  "NOTICE-IAN-001",
  "NOTICE-LB-001",
  "NOTICE-TOM-001",
  "NOTICE-FERRIS-001",
  "SMOKE-DEFAULT-001",
  "SMOKE-XH-001",
  "SMOKE-LB-001",
  "SMOKE-TOM-001",
  "SMOKE-MIXED-001",
  "RELEASE-TOM-001",
  "RELEASE-FERRIS-001",
  "BOUNDARY-IMG-001",
  "BOUNDARY-TOM-LEAK-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-FERRIS-IMG-001",
  "BOUNDARY-P5-001",
];

function runValidator(extraEnv = {}) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}

function fixturePath(name) {
  return path.join(
    tmpdir(),
    `xiaohei-validator-${name}-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  );
}

function copyFixture(name) {
  const fixtureRoot = fixturePath(name);
  cpSync(repoRoot, fixtureRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
    },
  });
  return fixtureRoot;
}

function runFixtureValidator(fixtureRoot) {
  return spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });
}

function replaceInFixture(fixtureRoot, relativePath, searchValue, replaceValue) {
  const absolutePath = path.join(fixtureRoot, relativePath);
  const original = readFileSync(absolutePath, "utf8");
  assert.ok(original.includes(searchValue), `${relativePath} should contain fixture marker ${searchValue}`);
  writeFileSync(absolutePath, original.replace(searchValue, replaceValue), "utf8");
}

function pendingPublicApprovalLine(routeName) {
  return `- [ ] Public rendered ${routeName} samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.`;
}

function completePublicApprovalLine(routeName, reviewDate = "2026-06-13") {
  return `- [x] Public rendered ${routeName} samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes.`;
}

test("validator command prints deterministic harness smoke logs", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  assert.match(result.stdout, /^\[PASS\] PKG-SHAPE-001 /m);
  assert.match(result.stdout, /\[PASS\] SKILL-FM-001 /);
  assert.match(result.stdout, /\[PASS\] SKILL-ROUTE-001 /);
  assert.match(result.stdout, /\[PASS\] AGENT-SHAPE-001 /);
  assert.match(result.stdout, /\[PASS\] AGENT-TOM-001 /);
  assert.match(result.stdout, /\[PASS\] ROUTE-TABLE-001 /);
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});

test("validator reports Task 1 contract checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = [
    "PKG-SHAPE-001",
    "SKILL-FM-001",
    "SKILL-ROUTE-001",
    "SKILL-REFS-001",
    "SKILL-OUTPUT-001",
    "SKILL-GEN-001",
    "AGENT-SHAPE-001",
    "AGENT-TOM-001",
    "ROUTE-TABLE-001",
    "ROUTE-XH-001",
    "ROUTE-LB-001",
    "ROUTE-TOM-001",
    "ROUTE-DEFAULT-001",
    "ROUTE-REFS-001",
    "ROUTE-PATHS-001",
    "ROUTE-MIXED-001",
    "REFS-XH-001",
    "REFS-LB-001",
    "REFS-TOM-001",
    "LEGACY-XH-001",
    "LEGACY-XH-002",
  ];

  let lastIndex = -1;
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous Task 1 check`);
    lastIndex = index;
  }
});

test("validator reports Task 2 contract checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = requiredCheckIds.slice(requiredCheckIds.indexOf("PROMPT-XH-001"));

  let lastIndex = result.stdout.indexOf("[PASS] LEGACY-XH-002 ");
  assert.ok(lastIndex >= 0, "Task 2 checks should follow Task 1 checks");
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous Task 2 check`);
    lastIndex = index;
  }
});

test("validator collects failures and exits nonzero after Task 1 checks run", () => {
  const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-${process.pid}-${Date.now()}`);
  mkdirSync(path.join(fixtureRoot, "ian-xiaohei-illustrations", "agents"), { recursive: true });
  mkdirSync(path.join(fixtureRoot, "ian-xiaohei-illustrations", "references"), { recursive: true });
  mkdirSync(path.join(fixtureRoot, "scripts"), { recursive: true });

  writeFileSync(
    path.join(fixtureRoot, "scripts", "validate-skill-package.mjs"),
    readFileSync(scriptPath, "utf8"),
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "ian-xiaohei-illustrations", "SKILL.md"),
    "---\nname: wrong\n---\n\n# Broken\n",
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "ian-xiaohei-illustrations", "agents", "openai.yaml"),
    "interface:\n  display_name: Test\npolicy:\n  allow_implicit_invocation: false\n",
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "ian-xiaohei-illustrations", "references", "routing.md"),
    "",
    "utf8",
  );
  writeFileSync(path.join(fixtureRoot, "README.md"), "# Broken\n", "utf8");

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });

  rmSync(fixtureRoot, { recursive: true, force: true });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /\[FAIL\] PKG-SHAPE-001 /);
  assert.match(result.stdout, /\[FAIL\] SKILL-FM-001 /);
  assert.match(result.stdout, /\[FAIL\] AGENT-SHAPE-001 /);
  assert.match(result.stdout, /\[FAIL\] ROUTE-TABLE-001 /);
  assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=\d+ skipped=0/);
});

test("validator failure messages include actionable Task 2 check IDs and paths", () => {
  const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-task2-${process.pid}-${Date.now()}`);
  cpSync(repoRoot, fixtureRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
    },
  });

  const promptTemplatePath = path.join(
    fixtureRoot,
    "ian-xiaohei-illustrations",
    "references",
    "ips",
    "littlebox",
    "prompt-template.md",
  );
  writeFileSync(
    promptTemplatePath,
    readFileSync(promptTemplatePath, "utf8").replaceAll("Littlebox state: closed", "Littlebox state: sealed"),
    "utf8",
  );

  const noticePath = path.join(fixtureRoot, "NOTICE.md");
  writeFileSync(noticePath, readFileSync(noticePath, "utf8").replace("37cd93e", "missing"), "utf8");

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });

  rmSync(fixtureRoot, { recursive: true, force: true });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /\[FAIL\] PROMPT-LB-001 /);
  assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/littlebox\/prompt-template\.md/);
  assert.match(result.stdout, /\[FAIL\] NOTICE-LB-001 /);
  assert.match(result.stdout, /NOTICE\.md/);
  assert.match(result.stdout, /observed missing marker/);
});

test("validator failure messages include actionable Tom check IDs and paths", () => {
  const fixtureRoot = path.join(tmpdir(), `xiaohei-validator-tom-${process.pid}-${Date.now()}`);
  cpSync(repoRoot, fixtureRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repoRoot, source);
      return relative !== ".git" && !relative.startsWith(`.git${path.sep}`);
    },
  });

  const rightsPath = path.join(
    fixtureRoot,
    "ian-xiaohei-illustrations",
    "references",
    "ips",
    "tom",
    "rights.md",
  );
  writeFileSync(
    rightsPath,
    readFileSync(rightsPath, "utf8").replaceAll("gated-authorized", "pending-review"),
    "utf8",
  );

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });

  rmSync(fixtureRoot, { recursive: true, force: true });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /\[FAIL\] RIGHTS-TOM-001 /);
  assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/tom\/rights\.md/);
  assert.match(result.stdout, /observed missing marker/);
});

test("validator emits the full Phase 10 matrix with zero failures", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
  assert.equal(resultLines.length, requiredCheckIds.length);
  assert.equal(resultLines.every((line) => line.startsWith("[PASS]")), true);
  assert.deepEqual(
    resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
    requiredCheckIds,
  );
  assert.match(result.stdout, /Summary: total=53 passed=53 failed=0 skipped=0/);
});

test("parser helpers expose current package contract primitives", async () => {
  const validators = await import(`${scriptPath}?test=${Date.now()}`);
  const skillText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "SKILL.md"), "utf8");
  const routingText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "references", "routing.md"), "utf8");
  const readmeText = readFileSync(path.join(repoRoot, "README.md"), "utf8");
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const frontmatter = validators.parseFrontmatter(skillText);
  assert.equal(frontmatter.data.name, "ian-xiaohei-illustrations");
  assert.ok(frontmatter.data.description.includes("小黑"));

  const routes = validators.parseMarkdownTable(routingText, "IP Routes");
  assert.equal(routes.length, 4);
  assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox", "tom", "ferris"]);
  assert.equal(routes[0].output_suffix, "illustrations");
  assert.equal(routes[0].default, "true");
  assert.equal(routes[1].output_suffix, "littlebox");
  assert.equal(routes[1].default, "false");
  assert.equal(routes[2].aliases, "Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫");
  assert.equal(routes[2].output_suffix, "tom");
  assert.equal(routes[2].default, "false");
  assert.equal(routes[3].aliases, "Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹");
  assert.equal(routes[3].output_suffix, "ferris");
  assert.equal(routes[3].default, "false");
  assert.deepEqual(
    validators.splitRouteCell(routes[2].required_references),
    [
      "references/ips/tom/index.md",
      "references/ips/tom/rights.md",
      "references/ips/tom/style-dna.md",
      "references/ips/tom/tom-ip.md",
      "references/ips/tom/composition-patterns.md",
      "references/ips/tom/prompt-template.md",
      "references/ips/tom/qa-checklist.md",
    ],
  );
  assert.deepEqual(validators.splitRouteCell(routes[3].required_references), [
    "references/ips/ferris/source.md",
  ]);
  assert.deepEqual(validators.splitRouteCell("`one`; `two`; three"), ["one", "two", "three"]);

  const links = validators.parseMarkdownLinks(readmeText);
  assert.ok(links.some((link) => link.target === "examples/prompts.md"));
  assert.ok(links.some((link) => link.target === "examples/images/01-two-breakpoints.png"));

  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-illustrations/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-tom/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-ferris/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-littlebox/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-ferris/"));

  const pendingApproval = validators.parsePublicTomSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.reviewerPresent, false);
  assert.equal(pendingApproval.allowedDirectoriesPresent, false);

  const approvedText = releaseChecklistText.replace(
    pendingPublicApprovalLine("Tom"),
    completePublicApprovalLine("Tom"),
  );
  const approved = validators.parsePublicTomSampleApproval(approvedText);
  assert.equal(approved.complete, true);
  assert.deepEqual(approved.allowedDirectories, ["examples/images", "ian-xiaohei-illustrations/assets/examples"]);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      pendingPublicApprovalLine("Tom"),
      completePublicApprovalLine("Tom", placeholderDate),
    );
    const placeholderApproval = validators.parsePublicTomSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const pendingFerrisApproval = validators.parsePublicFerrisSampleApproval(releaseChecklistText);
  assert.equal(pendingFerrisApproval.found, true);
  assert.equal(pendingFerrisApproval.checked, false);
  assert.equal(pendingFerrisApproval.complete, false);
  assert.equal(pendingFerrisApproval.allowedDirectoriesPresent, false);

  const approvedFerrisText = releaseChecklistText.replace(
    pendingPublicApprovalLine("Ferris"),
    completePublicApprovalLine("Ferris"),
  );
  const approvedFerris = validators.parsePublicFerrisSampleApproval(approvedFerrisText);
  assert.equal(approvedFerris.complete, true);
  assert.deepEqual(approvedFerris.allowedDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      pendingPublicApprovalLine("Ferris"),
      completePublicApprovalLine("Ferris", placeholderDate),
    );
    const placeholderApproval = validators.parsePublicFerrisSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }
});

test("validator fixture rejects Tom route metadata drift", () => {
  const fixtureRoot = copyFixture("tom-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "`Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
      "`Tom`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Tom Cat/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Ferris route metadata drift", () => {
  const fixtureRoot = copyFixture("ferris-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "`Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`",
      "`Ferris`, `Rust mascot`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Rust crab/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture requires Tom canonical pack files", () => {
  const fixtureRoot = copyFixture("tom-pack");
  const relativePath = path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "qa-checklist.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REFS-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/tom/);
    assert.match(
      result.stdout,
      /observed empty file\(s\): ian-xiaohei-illustrations\/references\/ips\/tom\/qa-checklist\.md/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Tom prompt marker drift", () => {
  const fixtureRoot = copyFixture("tom-prompt");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "prompt-template.md"),
      "Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.",
      "Rights boundary note: Tom is a gated authorized protected-character route.",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] PROMPT-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/tom\/prompt-template\.md/);
    assert.match(
      result.stdout,
      /observed missing marker\(s\): Rights-status note: Tom is a `gated-authorized` protected-character route/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris source marker drift", () => {
  const fixtureRoot = copyFixture("ferris-source");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "source.md"),
      "Rust Foundation trademark policy context",
      "Rust trademark review context",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/ferris\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Rust Foundation trademark policy context/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture requires Ferris D-15 wording in every public document", () => {
  const fixtureRoot = copyFixture("ferris-doc-phrase");
  try {
    const readmePath = path.join(fixtureRoot, "README.md");
    const requiredPhrase =
      "Ferris is an explicit Rust-community mascot route with status source-reviewed; generated public Ferris samples require release review for Rust trademark and endorsement-safe wording.";
    const readmeText = readFileSync(readmePath, "utf8");
    assert.ok(readmeText.includes(requiredPhrase), "README.md should contain fixture marker");
    writeFileSync(readmePath, readmeText.replaceAll(requiredPhrase, "Ferris route status is source-reviewed."), "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] DOC-FERRIS-001 /);
    assert.match(result.stdout, /README\.md/);
    assert.match(result.stdout, /Ferris D-15 route-status phrase/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Tom identity and QA marker drift", () => {
  const fixtureRoot = copyFixture("tom-qa");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "qa-checklist.md"),
      "off-model Tom identity",
      "off-model identity",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] QA-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/tom\/qa-checklist\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): off-model Tom identity/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Tom docs and agent metadata drift", () => {
  const fixtureRoot = copyFixture("tom-docs-agent");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"),
      "explicit Tom protected-character route（gated-authorized）",
      "explicit protected-character route",
    );
    replaceInFixture(
      fixtureRoot,
      "examples/prompts.md",
      "## 路由烟测：显式选择 Tom",
      "## Route smoke: explicit protected character",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] AGENT-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/agents\/openai\.yaml/);
    assert.match(result.stdout, /observed missing marker\(s\): explicit Tom protected-character route/);
    assert.match(result.stdout, /\[FAIL\] SMOKE-TOM-001 /);
    assert.match(result.stdout, /examples\/prompts\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): ## 路由烟测：显式选择 Tom/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris NOTICE boundary drift", () => {
  const fixtureRoot = copyFixture("ferris-notice");
  try {
    replaceInFixture(
      fixtureRoot,
      "NOTICE.md",
      "Ferris Source Attribution and Rust Trademark Boundary",
      "Ferris Source Attribution",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] NOTICE-FERRIS-001 /);
    assert.match(result.stdout, /NOTICE\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Ferris Source Attribution and Rust Trademark Boundary/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris release gate drift", () => {
  const fixtureRoot = copyFixture("ferris-release");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      "Public rendered Ferris samples approved",
      "Ferris rendered samples approved",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] RELEASE-FERRIS-001 /);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Public rendered Ferris samples approved/);
    assert.match(result.stdout, /\[FAIL\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(result.stdout, /Public rendered Ferris samples approval record/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Tom leakage in non-Tom packs", () => {
  const fixtureRoot = copyFixture("tom-leak");
  const relativePath = path.join("ian-xiaohei-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md");
  try {
    writeFileSync(
      path.join(fixtureRoot, relativePath),
      `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: Tom Cat\n`,
      "utf8",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] BOUNDARY-TOM-LEAK-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/xiaohei\/xiaohei-ip\.md/);
    assert.match(result.stdout, /observed forbidden marker\(s\): Tom Cat/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public Tom asset approval parsing", async () => {
  const validators = await import(`${scriptPath}?approval=${Date.now()}`);
  const fixtureRoot = copyFixture("tom-public-asset");
  try {
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-tom-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-TOM-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images and ian-xiaohei-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-tom-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingPublicApprovalLine("Tom"),
      completePublicApprovalLine("Tom"),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicTomSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-TOM-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=53 passed=53 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Tom public sample placeholder approval dates", async () => {
  const validators = await import(`${scriptPath}?tomPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const approvalText = releaseChecklistText.replace(
      pendingPublicApprovalLine("Tom"),
      completePublicApprovalLine("Tom", placeholderDate),
    );
    const approval = validators.parsePublicTomSampleApproval(approvalText);
    assert.equal(approval.complete, false);
    assert.equal(approval.datePresent, false);

    const fixtureRoot = copyFixture(`tom-placeholder-date-${placeholderDate.trim() || "blank"}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-tom-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        pendingPublicApprovalLine("Tom"),
        completePublicApprovalLine("Tom", placeholderDate),
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-TOM-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-tom-test\.png/);
      assert.match(result.stdout, /date=missing/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture enforces public Ferris sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?ferrisApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("ferris-public-asset");
  try {
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-ferris-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images and ian-xiaohei-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-ferris-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingPublicApprovalLine("Ferris"),
      completePublicApprovalLine("Ferris"),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicFerrisSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.deepEqual(approval.allowedDirectories, [
      "examples/images",
      "ian-xiaohei-illustrations/assets/examples",
    ]);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=53 passed=53 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Ferris public sample placeholder approval dates", async () => {
  const validators = await import(`${scriptPath}?ferrisPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const approvalText = releaseChecklistText.replace(
      pendingPublicApprovalLine("Ferris"),
      completePublicApprovalLine("Ferris", placeholderDate),
    );
    const approval = validators.parsePublicFerrisSampleApproval(approvalText);
    assert.equal(approval.complete, false);
    assert.equal(approval.datePresent, false);

    const fixtureRoot = copyFixture(`ferris-placeholder-date-${placeholderDate.trim() || "blank"}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-ferris-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        pendingPublicApprovalLine("Ferris"),
        completePublicApprovalLine("Ferris", placeholderDate),
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-FERRIS-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-ferris-test\.png/);
      assert.match(result.stdout, /date=missing/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});
