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
  "AGENT-SEALOS-001",
  "ROUTE-TABLE-001",
  "ROUTE-XH-001",
  "ROUTE-LB-001",
  "ROUTE-TOM-001",
  "ROUTE-FERRIS-001",
  "ROUTE-SEALOS-001",
  "ROUTE-SEALOS-002",
  "ROUTE-DEFAULT-001",
  "ROUTE-REFS-001",
  "ROUTE-PATHS-001",
  "ROUTE-MIXED-001",
  "REFS-XH-001",
  "REFS-LB-001",
  "REFS-TOM-001",
  "REFS-FERRIS-001",
  "REFS-SEALOS-001",
  "LEGACY-XH-001",
  "LEGACY-XH-002",
  "PROMPT-XH-001",
  "PROMPT-LB-001",
  "PROMPT-LB-002",
  "PROMPT-TOM-001",
  "PROMPT-FERRIS-001",
  "PROMPT-SEALOS-001",
  "IP-XH-001",
  "IP-LB-001",
  "IP-TOM-001",
  "IP-FERRIS-001",
  "IP-SEALOS-001",
  "QA-TOM-001",
  "QA-FERRIS-001",
  "QA-SEALOS-001",
  "RIGHTS-TOM-001",
  "SOURCE-FERRIS-001",
  "SOURCE-SEALOS-001",
  "LOGO-SEALOS-001",
  "DOC-LINKS-001",
  "DOC-PATHS-001",
  "DOC-ROUTES-001",
  "DOC-TOM-001",
  "DOC-FERRIS-001",
  "DOC-SEALOS-P16-001",
  "DOC-SEALOS-P19-001",
  "NOTICE-IAN-001",
  "NOTICE-LB-001",
  "NOTICE-TOM-001",
  "NOTICE-FERRIS-001",
  "NOTICE-SEALOS-001",
  "SMOKE-DEFAULT-001",
  "SMOKE-XH-001",
  "SMOKE-LB-001",
  "SMOKE-TOM-001",
  "SMOKE-FERRIS-001",
  "SMOKE-SEALOS-001",
  "SMOKE-MIXED-001",
  "SMOKE-MIXED-SEALOS-001",
  "RELEASE-TOM-001",
  "RELEASE-FERRIS-001",
  "RELEASE-SEALOS-001",
  "REBRAND-CANON-001",
  "REBRAND-CANON-002",
  "REBRAND-CANON-003",
  "REBRAND-CANON-004",
  "REBRAND-COMPAT-001",
  "REBRAND-COMPAT-002",
  "REBRAND-MIGRATE-001",
  "REBRAND-ROUTE-001",
  "REBRAND-PATH-001",
  "REBRAND-EVIDENCE-001",
  "REBRAND-DOCS-001",
  "LANG-POLICY-001",
  "LANG-POLICY-002",
  "LANG-SCAN-001",
  "LANG-SCAN-002",
  "VAL-ENGLISH-001",
  "VAL-ENGLISH-002",
  "VAL-LANGUAGE-001",
  "VAL-COMPAT-001",
  "VAL-RELEASE-001",
  "BOUNDARY-IMG-001",
  "BOUNDARY-TOM-LEAK-001",
  "BOUNDARY-FERRIS-LEAK-001",
  "BOUNDARY-SEALOS-LEAK-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-FERRIS-IMG-001",
  "BOUNDARY-SEALOS-IMG-001",
  "BOUNDARY-FERRIS-GEN-001",
  "BOUNDARY-SEALOS-GEN-001",
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

function runFixtureValidator(fixtureRoot, extraEnv = {}) {
  return spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}

function replaceInFixture(fixtureRoot, relativePath, searchValue, replaceValue) {
  const absolutePath = path.join(fixtureRoot, relativePath);
  const original = readFileSync(absolutePath, "utf8");
  assert.ok(original.includes(searchValue), `${relativePath} should contain fixture marker ${searchValue}`);
  writeFileSync(absolutePath, original.replace(searchValue, replaceValue), "utf8");
}

function replaceAllInFixture(fixtureRoot, relativePath, searchValue, replaceValue) {
  const absolutePath = path.join(fixtureRoot, relativePath);
  const original = readFileSync(absolutePath, "utf8");
  assert.ok(original.includes(searchValue), `${relativePath} should contain fixture marker ${searchValue}`);
  writeFileSync(absolutePath, original.replaceAll(searchValue, replaceValue), "utf8");
}

function pendingPublicApprovalLine(routeName) {
  return `- [ ] Public rendered ${routeName} samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.`;
}

function completePublicApprovalLine(routeName, reviewDate = "2026-06-13") {
  return `- [x] Public rendered ${routeName} samples approved for examples/images/ and ian-xiaohei-illustrations/assets/examples/: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes.`;
}

function pendingFerrisPublicAssetApprovalLine() {
  return "- [ ] Ferris public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeFerrisPublicAssetApprovalLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Ferris public asset policy for \`examples/images/\` and \`ian-xiaohei-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function pendingGeneratedFerrisSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeGeneratedFerrisSampleLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-ferris / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function pendingSealosPublicAssetApprovalLine() {
  return "- [ ] Sealos public asset policy for `examples/images/` and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-image identity outcome / no-logo outcome.";
}

function completeSealosPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  identityOutcome = "uploaded image identity preserved",
  noLogoOutcome = "no-logo identity approved",
) {
  return `- [x] Sealos public asset policy for \`examples/images/\` and \`ian-xiaohei-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
}

function pendingGeneratedSealosSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / no-logo outcome.";
}

function completeGeneratedSealosSampleLine(
  reviewDate = "2026-06-13",
  identityOutcome = "uploaded image identity preserved",
  noLogoOutcome = "no-logo identity approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-sealos / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
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
  assert.match(result.stdout, /\[PASS\] ROUTE-FERRIS-001 /);
  assert.match(result.stdout, /\[PASS\] SMOKE-FERRIS-001 /);
  assert.match(result.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
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
    "ROUTE-FERRIS-001",
    "ROUTE-DEFAULT-001",
    "ROUTE-REFS-001",
    "ROUTE-PATHS-001",
    "ROUTE-MIXED-001",
    "REFS-XH-001",
    "REFS-LB-001",
    "REFS-TOM-001",
    "REFS-FERRIS-001",
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

test("validator emits the full Phase 28 matrix with zero failures", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
  assert.equal(resultLines.length, requiredCheckIds.length);
  assert.equal(resultLines.every((line) => line.startsWith("[PASS]")), true);
  assert.deepEqual(
    resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
    requiredCheckIds,
  );
  assert.match(result.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});

test("validator reports Phase 24 rebrand checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = [
    "REBRAND-CANON-001",
    "REBRAND-CANON-002",
    "REBRAND-CANON-003",
    "REBRAND-CANON-004",
    "REBRAND-COMPAT-001",
    "REBRAND-COMPAT-002",
    "REBRAND-MIGRATE-001",
    "REBRAND-ROUTE-001",
    "REBRAND-PATH-001",
    "REBRAND-EVIDENCE-001",
    "REBRAND-DOCS-001",
  ];

  let lastIndex = result.stdout.indexOf("[PASS] RELEASE-SEALOS-001 ");
  assert.ok(lastIndex >= 0, "Phase 24 rebrand checks should follow release checks");
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous Phase 24 rebrand check`);
    lastIndex = index;
  }
});

test("validator reports Phase 28 validation checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = [
    "VAL-ENGLISH-001",
    "VAL-ENGLISH-002",
    "VAL-LANGUAGE-001",
    "VAL-COMPAT-001",
    "VAL-RELEASE-001",
  ];

  let lastIndex = result.stdout.indexOf("[PASS] LANG-SCAN-002 ");
  assert.ok(lastIndex >= 0, "Phase 28 validation checks should follow language scan checks");
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous Phase 28 validation check`);
    lastIndex = index;
  }
  const boundaryIndex = result.stdout.indexOf("[PASS] BOUNDARY-IMG-001 ");
  assert.ok(boundaryIndex > lastIndex, "boundary checks should follow Phase 28 validation checks");
});

test("validator fixture rejects missing language policy default surfaces", () => {
  const fixtureRoot = copyFixture("language-policy-default-surfaces");
  try {
    replaceInFixture(fixtureRoot, "LANGUAGE_POLICY.md", "- validation output", "- validator messages");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-POLICY-001 /);
    assert.match(result.stdout, /LANGUAGE_POLICY\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): validation output/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing language policy exception category", () => {
  const fixtureRoot = copyFixture("language-policy-exception-category");
  try {
    replaceInFixture(
      fixtureRoot,
      "LANGUAGE_POLICY.md",
      "- compatibility smoke fixtures that prove legacy Chinese aliases and route behavior still work",
      "- compatibility fixtures that prove legacy Chinese aliases and route behavior still work",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-POLICY-002 /);
    assert.match(result.stdout, /LANGUAGE_POLICY\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): compatibility smoke fixtures/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports approved multilingual tokens in enforce mode", () => {
  const fixtureRoot = copyFixture("language-scan-approved-only");
  try {
    const result = runFixtureValidator(fixtureRoot, { LANGUAGE_SCAN_ENFORCE: "1" });

    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] LANG-SCAN-001 /);
    assert.match(result.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects stale Chinese prose in controlled language scan fixture", () => {
  const fixtureRoot = copyFixture("language-scan-controlled-stale");
  try {
    replaceInFixture(
      fixtureRoot,
      "LANGUAGE_POLICY.md",
      "This file is the canonical English-default language authority for Visual IP Illustrations.",
      "This file is the canonical English-default language authority for Visual IP Illustrations.\n这是一段未迁移的中文说明。",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-LANGUAGE-001 /);
    assert.match(result.stdout, /status=stale/);
    assert.match(result.stdout, /path=LANGUAGE_POLICY\.md:\d+/);
    assert.match(result.stdout, /这是一段未迁移的中文说明。/);
    assert.match(result.stdout, /remediation=Translate surrounding prose/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects stale prose appended to an approved alias line", () => {
  const fixtureRoot = copyFixture("language-scan-approved-line-stale");
  try {
    replaceInFixture(
      fixtureRoot,
      "README.md",
      "Aliases: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`.",
      "Aliases: `小黑`, `Xiaohei`, `Ian`, `ian-xiaohei`. 这是一段未迁移的中文说明。",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-LANGUAGE-001 /);
    assert.match(result.stdout, /status=stale/);
    assert.match(result.stdout, /path=README\.md:\d+/);
    assert.match(result.stdout, /这是一段未迁移的中文说明。/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects broad language allowlist entries", () => {
  const fixtureRoot = copyFixture("language-broad-allowlist");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("scripts", "validate-skill-package.mjs"),
      "paths: [LANGUAGE_POLICY_FILE, ROUTING_FILE, SKILL_FILE, \"README.md\", \"examples/prompts.md\", \"RELEASE_CHECKLIST.md\"],\n    token: \"小黑\",",
      "paths: [\"**/*.md\"],\n    token: \"小黑\",",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-001 /);
    assert.match(result.stdout, /\[FAIL\] LANG-SCAN-002 /);
    assert.match(result.stdout, /\[FAIL\] VAL-LANGUAGE-001 /);
    assert.match(result.stdout, /LANGUAGE_ALLOWLIST expected narrow entries/);
    assert.match(result.stdout, /rejects broad Markdown path scope=\*\*\/\*\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing canonical runtime identity", () => {
  const fixtureRoot = copyFixture("rebrand-runtime-canonical");
  try {
    replaceAllInFixture(fixtureRoot, path.join("ian-xiaohei-illustrations", "SKILL.md"), "$visual-ip-illustrations", "$legacy-only");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/SKILL\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): \$visual-ip-illustrations/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing canonical public docs identity", () => {
  const fixtureRoot = copyFixture("rebrand-public-canonical");
  try {
    replaceInFixture(fixtureRoot, "README.md", "# Visual IP Illustrations", "# Ian Xiaohei Illustrations");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-002 /);
    assert.match(result.stdout, /README\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): # Visual IP Illustrations/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing release rebrand markers", () => {
  const fixtureRoot = copyFixture("rebrand-release-markers");
  try {
    replaceInFixture(fixtureRoot, "RELEASE_CHECKLIST.md", "## Release 1.4 Rebrand Review", "## Release Review");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-003 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-EVIDENCE-001 /);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing compatibility runtime alias", () => {
  const fixtureRoot = copyFixture("rebrand-runtime-compat");
  try {
    replaceAllInFixture(fixtureRoot, path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"), "$ian-xiaohei-illustrations", "$visual-ip-legacy");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-001 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-COMPAT-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/agents\/openai\.yaml/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing compatibility public alias", () => {
  const fixtureRoot = copyFixture("rebrand-public-compat");
  try {
    replaceAllInFixture(fixtureRoot, "examples/prompts.md", "$ian-xiaohei-illustrations", "$visual-ip-legacy");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-COMPAT-002 /);
    assert.match(result.stdout, /examples\/prompts\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): \$ian-xiaohei-illustrations/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing install migration guidance", () => {
  const fixtureRoot = copyFixture("rebrand-migration");
  try {
    replaceInFixture(fixtureRoot, "README.md", "cd visual-ip-illustrations", "cd ian-xiaohei-illustrations");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-MIGRATE-001 /);
    assert.match(result.stdout, /README\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): cd visual-ip-illustrations/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing Phase 28 public English-default marker", () => {
  const fixtureRoot = copyFixture("val-english-public-marker");
  try {
    replaceInFixture(fixtureRoot, "README.md", "Current route inventory:", "Current routes:");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-ENGLISH-001 /);
    assert.match(result.stdout, /README\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Current route inventory/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing route-local scan target content", () => {
  const fixtureRoot = copyFixture("val-route-local-language");
  const relativePath = path.join("ian-xiaohei-illustrations", "references", "ips", "xiaohei", "style-dna.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "# \n\n", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-ENGLISH-002 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/xiaohei\/style-dna\.md/);
    assert.match(result.stdout, /English content markers/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks rebrand route stability", () => {
  const fixtureRoot = copyFixture("rebrand-route-stability");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "| `false` | `seal` |",
      "| `false` | `cloud` |",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-004 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /expected seal output_suffix=seal; observed cloud/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks rebrand output path stability", () => {
  const fixtureRoot = copyFixture("rebrand-path-stability");
  try {
    for (const relativePath of [
      path.join("ian-xiaohei-illustrations", "SKILL.md"),
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
    ]) {
      replaceAllInFixture(
        fixtureRoot,
        relativePath,
        "assets/&lt;article-slug&gt;-seal/",
        "assets/&lt;article-slug&gt;-cloud/",
      );
    }

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-PATH-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/SKILL\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): assets\/&lt;article-slug&gt;-seal\//);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks canonical invocation compatibility through Phase 28", () => {
  const fixtureRoot = copyFixture("val-canonical-invocation");
  try {
    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "LANGUAGE_POLICY.md",
      path.join("ian-xiaohei-illustrations", "SKILL.md"),
      path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"),
    ]) {
      replaceAllInFixture(fixtureRoot, relativePath, "$visual-ip-illustrations", "$visual-ip-renamed");
    }

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-002 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /README\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks legacy invocation compatibility through Phase 28", () => {
  const fixtureRoot = copyFixture("val-legacy-invocation");
  try {
    for (const relativePath of [
      "README.md",
      "examples/prompts.md",
      "LANGUAGE_POLICY.md",
      path.join("ian-xiaohei-illustrations", "SKILL.md"),
      path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"),
    ]) {
      replaceAllInFixture(fixtureRoot, relativePath, "$ian-xiaohei-illustrations", "$visual-ip-legacy");
    }

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-COMPAT-002 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/SKILL\.md|README\.md|examples\/prompts\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks Chinese route aliases through Phase 28", () => {
  const fixtureRoot = copyFixture("val-route-alias");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
      "`Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
      "`Tom`, `Tom Cat`, `Tom and Jerry`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /observed missing item\(s\): 汤姆, 汤姆猫/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks raw output path stability through Phase 28", () => {
  const fixtureRoot = copyFixture("val-raw-output-path");
  try {
    for (const relativePath of [
      path.join("ian-xiaohei-illustrations", "SKILL.md"),
      path.join("ian-xiaohei-illustrations", "references", "routing.md"),
    ]) {
      replaceAllInFixture(fixtureRoot, relativePath, "assets/<article-slug>-seal/", "assets/<article-slug>-cloud/");
    }

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-PATH-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /assets\/<article-slug>-seal\//);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing Release 1.5 evidence marker", () => {
  const fixtureRoot = copyFixture("val-release-marker");
  try {
    replaceInFixture(fixtureRoot, "RELEASE_CHECKLIST.md", "## Release 1.5 English-Default Review", "## Release Review");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-ENGLISH-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-RELEASE-001 /);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects missing Release 1.5 command evidence marker", () => {
  const fixtureRoot = copyFixture("val-release-command-marker");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      "LANGUAGE_SCAN_ENFORCE=1 node scripts/validate-skill-package.mjs",
      "node scripts/validate-skill-package.mjs",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-RELEASE-001 /);
    assert.match(result.stdout, /LANGUAGE_SCAN_ENFORCE=1 node scripts\/validate-skill-package\.mjs/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects stale README old-name-only framing", () => {
  const fixtureRoot = copyFixture("rebrand-readme-stale-old-name");
  try {
    replaceInFixture(fixtureRoot, "README.md", "# Visual IP Illustrations", "# Ian Xiaohei Illustrations");
    replaceAllInFixture(fixtureRoot, "README.md", "$visual-ip-illustrations", "$ian-xiaohei-illustrations");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-002 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-DOCS-001 /);
    assert.match(result.stdout, /README\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects stale examples old-name-only framing", () => {
  const fixtureRoot = copyFixture("rebrand-examples-stale-old-name");
  try {
    replaceInFixture(fixtureRoot, "examples/prompts.md", "## Canonical normal-flow prompts", "## Legacy normal-flow prompts");
    replaceAllInFixture(fixtureRoot, "examples/prompts.md", "$visual-ip-illustrations", "$ian-xiaohei-illustrations");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-002 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-DOCS-001 /);
    assert.match(result.stdout, /examples\/prompts\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("parser helpers expose current package contract primitives", async () => {
  const validators = await import(`${scriptPath}?test=${Date.now()}`);
  const skillText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "SKILL.md"), "utf8");
  const routingText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "references", "routing.md"), "utf8");
  const readmeText = readFileSync(path.join(repoRoot, "README.md"), "utf8");

  const frontmatter = validators.parseFrontmatter(skillText);
  assert.equal(frontmatter.data.name, "visual-ip-illustrations");
  assert.ok(frontmatter.data.description.includes("小黑"));

  const routes = validators.parseMarkdownTable(routingText, "IP Routes");
  assert.equal(routes.length, 5);
  assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox", "tom", "ferris", "seal"]);
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
  assert.equal(
    routes[4].aliases,
    "Seal`, `hoodie seal`, `white seal`, `blue hoodie seal`, `海豹`, `连帽衫海豹`, `白色海豹`, `蓝色连帽衫海豹",
  );
  assert.equal(routes[4].output_suffix, "seal");
  assert.equal(routes[4].default, "false");
  assert.equal(routes[4].status, "active");
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
    "references/ips/ferris/index.md",
    "references/ips/ferris/source.md",
    "references/ips/ferris/style-dna.md",
    "references/ips/ferris/ferris-ip.md",
    "references/ips/ferris/composition-patterns.md",
    "references/ips/ferris/prompt-template.md",
    "references/ips/ferris/qa-checklist.md",
  ]);
  assert.deepEqual(validators.splitRouteCell(routes[4].required_references), [
    "references/ips/seal/index.md",
    "references/ips/seal/source.md",
    "references/ips/seal/style-dna.md",
    "references/ips/seal/seal-ip.md",
    "references/ips/seal/composition-patterns.md",
    "references/ips/seal/prompt-template.md",
    "references/ips/seal/qa-checklist.md",
  ]);
  assert.deepEqual(validators.splitRouteCell("`one`; `two`; three"), ["one", "two", "three"]);

  const links = validators.parseMarkdownLinks(readmeText);
  assert.ok(links.some((link) => link.target === "examples/prompts.md"));
  assert.ok(links.some((link) => link.target === "examples/images/01-two-breakpoints.png"));

  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-illustrations/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-tom/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-ferris/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-seal/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-littlebox/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-ferris/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-seal/"));
});

test("approval parser helpers expose current release primitives", async () => {
  const validators = await import(`${scriptPath}?approvalParsers=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

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
  assert.equal(pendingFerrisApproval.trademarkOutcomePresent, false);

  const approvedFerrisText = releaseChecklistText.replace(
    pendingFerrisPublicAssetApprovalLine(),
    completeFerrisPublicAssetApprovalLine(),
  );
  const approvedFerris = validators.parsePublicFerrisSampleApproval(approvedFerrisText);
  assert.equal(approvedFerris.complete, true);
  assert.deepEqual(approvedFerris.allowedDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(approvedFerris.trademarkOutcomePresent, true);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      pendingFerrisPublicAssetApprovalLine(),
      completeFerrisPublicAssetApprovalLine(placeholderDate),
    );
    const placeholderApproval = validators.parsePublicFerrisSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const missingTrademarkText = releaseChecklistText.replace(
    pendingFerrisPublicAssetApprovalLine(),
    completeFerrisPublicAssetApprovalLine("2026-06-13", "trademark and endorsement-safe wording outcome"),
  );
  const missingTrademarkApproval = validators.parsePublicFerrisSampleApproval(missingTrademarkText);
  assert.equal(missingTrademarkApproval.checked, true);
  assert.equal(missingTrademarkApproval.complete, false);
  assert.equal(missingTrademarkApproval.trademarkOutcomePresent, false);

  const pendingGeneratedApproval = validators.parseGeneratedFerrisSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedApproval.found, true);
  assert.equal(pendingGeneratedApproval.checked, false);
  assert.equal(pendingGeneratedApproval.complete, false);
  assert.equal(pendingGeneratedApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedApproval.publicDirectoriesPresent, false);

  const pendingSealosApproval = validators.parsePublicSealosSampleApproval(releaseChecklistText);
  assert.equal(pendingSealosApproval.found, true);
  assert.equal(pendingSealosApproval.checked, false);
  assert.equal(pendingSealosApproval.complete, false);
  assert.equal(pendingSealosApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingSealosApproval.identityOutcomePresent, false);
  assert.equal(pendingSealosApproval.noLogoOutcomePresent, false);

  const approvedSealosText = releaseChecklistText.replace(
    pendingSealosPublicAssetApprovalLine(),
    completeSealosPublicAssetApprovalLine(),
  );
  const approvedSealos = validators.parsePublicSealosSampleApproval(approvedSealosText);
  assert.equal(approvedSealos.complete, true);
  assert.deepEqual(approvedSealos.allowedDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(approvedSealos.identityOutcomePresent, true);
  assert.equal(approvedSealos.noLogoOutcomePresent, true);

  const pendingGeneratedSealosApproval = validators.parseGeneratedSealosSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedSealosApproval.found, true);
  assert.equal(pendingGeneratedSealosApproval.checked, false);
  assert.equal(pendingGeneratedSealosApproval.complete, false);
  assert.equal(pendingGeneratedSealosApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedSealosApproval.publicDirectoriesPresent, false);

  const completeGeneratedText = releaseChecklistText.replace(
    pendingGeneratedFerrisSampleLine(),
    completeGeneratedFerrisSampleLine(),
  );
  const completeGeneratedApproval = validators.parseGeneratedFerrisSampleApproval(completeGeneratedText);
  assert.equal(completeGeneratedApproval.complete, true);
  assert.deepEqual(completeGeneratedApproval.internalReviewDirectories, ["assets/<article-slug>-ferris"]);
  assert.deepEqual(completeGeneratedApproval.publicDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      pendingGeneratedFerrisSampleLine(),
      completeGeneratedFerrisSampleLine(placeholderDate),
    );
    const placeholderApproval = validators.parseGeneratedFerrisSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const completeGeneratedSealosText = releaseChecklistText.replace(
    pendingGeneratedSealosSampleLine(),
    completeGeneratedSealosSampleLine(),
  );
  const completeGeneratedSealosApproval =
    validators.parseGeneratedSealosSampleApproval(completeGeneratedSealosText);
  assert.equal(completeGeneratedSealosApproval.complete, true);
  assert.deepEqual(completeGeneratedSealosApproval.internalReviewDirectories, ["assets/<article-slug>-sealos"]);
  assert.deepEqual(completeGeneratedSealosApproval.publicDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
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

test("validator fixture reports Sealos source marker drift", () => {
  const fixtureRoot = copyFixture("sealos-source");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "uploaded-image-canonical",
      "uploaded-image-reviewed",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-SEALOS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/seal\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): uploaded-image-canonical/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Sealos route metadata drift", () => {
  const fixtureRoot = copyFixture("sealos-route");
  try {
    const routingPath = path.join("ian-xiaohei-illustrations", "references", "routing.md");
    replaceAllInFixture(fixtureRoot, routingPath, "| `seal` | Seal |", "| `sealos` | Seal |");
    replaceAllInFixture(fixtureRoot, routingPath, "| `false` | `seal` |", "| `false` | `sealos` |");
    replaceAllInFixture(fixtureRoot, routingPath, "assets/<article-slug>-seal/", "assets/<article-slug>-sealos/");
    replaceAllInFixture(fixtureRoot, routingPath, "assets/&lt;article-slug&gt;-seal/", "assets/&lt;article-slug&gt;-sealos/");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TABLE-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-SEALOS-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-PATHS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /expected rebrand route ids xiaohei, littlebox, tom, ferris, seal; observed xiaohei, littlebox, tom, ferris, sealos/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Sealos pack, prompt, and QA marker drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "index.md"),
      "uploaded-image-canonical",
      "REFS-SEALOS-001",
    ],
    [
      "prompt",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "Brand/canonical-image note",
      "PROMPT-SEALOS-001",
    ],
    [
      "qa",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "qa-checklist.md"),
      "Sealos QA route leakage failure",
      "QA-SEALOS-001",
    ],
    [
      "identity",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "seal-ip.md"),
      "Sealos Seal must perform the central cognitive action",
      "IP-SEALOS-001",
    ],
  ]) {
    const fixtureRoot = copyFixture(`sealos-${name}-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      const expectedPath = expectedId === "IP-SEALOS-001"
        ? path.join("ian-xiaohei-illustrations", "references", "ips", "seal")
        : relativePath;
      assert.match(result.stdout, new RegExp(expectedPath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Sealos docs, metadata, NOTICE, release, and smoke drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "agent",
      path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"),
      "explicit Sealos Seal brand-owned route",
      "AGENT-SEALOS-001",
    ],
    ["readme", "README.md", "uploaded-image-canonical", "DOC-SEALOS-P19-001"],
    ["examples", "examples/prompts.md", "## Route Smoke: Explicit Sealos Seal", "SMOKE-SEALOS-001"],
    ["mixed", "examples/prompts.md", "five separate variant groups", "SMOKE-MIXED-SEALOS-001"],
    ["notice", "NOTICE.md", "Sealos Seal Brand and Canonical Image Boundary", "NOTICE-SEALOS-001"],
    ["release", "RELEASE_CHECKLIST.md", "Sealos Generated Sample Policy", "RELEASE-SEALOS-001"],
  ]) {
    const fixtureRoot = copyFixture(`sealos-${name}-docs-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture rejects Sealos no-logo drift", () => {
  const fixtureRoot = copyFixture("sealos-no-logo");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "plain navy cap with no logo",
      "navy cap with a small Sealos logo",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "no cap logo",
      "cap logo",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "No-logo note",
      "Logo note",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "qa-checklist.md"),
      "Sealos QA no-logo failure",
      "Sealos QA logo allowed failure",
    );
    replaceAllInFixture(
      fixtureRoot,
      "README.md",
      "no-logo mascot identity",
      "logo-bearing mascot identity",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LOGO-SEALOS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/seal/);
    assert.match(result.stdout, /observed missing marker\(s\): plain navy cap with no logo/);
    assert.match(result.stdout, /no cap logo/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture requires Ferris canonical pack files", () => {
  const fixtureRoot = copyFixture("ferris-pack");
  const relativePath = path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "qa-checklist.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REFS-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/ferris/);
    assert.match(
      result.stdout,
      /observed empty file\(s\): ian-xiaohei-illustrations\/references\/ips\/ferris\/qa-checklist\.md/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris prompt marker drift", () => {
  const fixtureRoot = copyFixture("ferris-prompt");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "prompt-template.md"),
      "Ferris planning fields gate",
      "Ferris planning format",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] PROMPT-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/ferris\/prompt-template\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Ferris planning fields gate/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris identity and trademark marker drift", () => {
  const fixtureRoot = copyFixture("ferris-ip");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "Ferris must perform the central cognitive action",
      "Ferris performs the route action",
    );
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "composition-patterns.md"),
      "Rust trademark-boundary gate",
      "Rust trademark review gate",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] IP-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/ferris/);
    assert.match(result.stdout, /observed missing marker\(s\): Ferris must perform the central cognitive action/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris QA marker drift", () => {
  const fixtureRoot = copyFixture("ferris-qa");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "qa-checklist.md"),
      "Ferris QA source-reviewed gate",
      "Ferris QA route gate",
    );
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "qa-checklist.md"),
      "Ferris QA route leakage failure",
      "Ferris QA cross-route failure",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] QA-FERRIS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/ferris\/qa-checklist\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Ferris QA source-reviewed gate/);
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
      "explicit Tom protected-character route (gated-authorized)",
      "explicit protected-character route",
    );
    replaceInFixture(
      fixtureRoot,
      "examples/prompts.md",
      "## Route Smoke: Explicit Tom",
      "## Route smoke: explicit protected character",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] AGENT-TOM-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/agents\/openai\.yaml/);
    assert.match(result.stdout, /observed missing marker\(s\): explicit Tom protected-character route/);
    assert.match(result.stdout, /\[FAIL\] SMOKE-TOM-001 /);
    assert.match(result.stdout, /examples\/prompts\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): ## Route Smoke: Explicit Tom/);
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

test("validator fixture reports Ferris public asset release gate drift", () => {
  const fixtureRoot = copyFixture("ferris-release");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      "Ferris public asset policy for",
      "Ferris rendered asset policy for",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] RELEASE-FERRIS-001 /);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Ferris public asset policy for/);
    assert.match(result.stdout, /\[FAIL\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(result.stdout, /Ferris public asset policy approval record/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris generated sample release gate drift", () => {
  const fixtureRoot = copyFixture("ferris-generated-release");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      pendingGeneratedFerrisSampleLine(),
      "Record generated sample approval",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
    assert.match(result.stdout, /\[FAIL\] BOUNDARY-FERRIS-GEN-001 /);
    assert.match(result.stdout, /Ferris generated sample review record/);
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

test("validator fixture reports Ferris leakage in non-Ferris packs", () => {
  for (const [name, relativePath, marker] of [
    ["xiaohei", path.join("ian-xiaohei-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"), "Ferris"],
    [
      "littlebox",
      path.join("ian-xiaohei-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "Rustacean",
    ],
    ["tom", path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "tom-ip.md"), "Rust trademark boundary"],
  ]) {
    const fixtureRoot = copyFixture(`ferris-leak-${name}`);
    try {
      writeFileSync(
        path.join(fixtureRoot, relativePath),
        `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: ${marker}\n`,
        "utf8",
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-FERRIS-LEAK-001 /);
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, new RegExp(`observed forbidden marker\\(s\\): ${marker}`));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Sealos leakage in non-Sealos packs", () => {
  for (const [name, relativePath, marker] of [
    [
      "xiaohei",
      path.join("ian-xiaohei-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "Sealos Seal",
    ],
    [
      "littlebox",
      path.join("ian-xiaohei-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "uploaded-image-canonical",
    ],
    ["tom", path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "tom-ip.md"), "brand-owned"],
    [
      "ferris",
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "references/ips/sealos/source.md",
    ],
  ]) {
    const fixtureRoot = copyFixture(`sealos-leak-${name}`);
    try {
      writeFileSync(
        path.join(fixtureRoot, relativePath),
        `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: ${marker}\n`,
        "utf8",
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-SEALOS-LEAK-001 /);
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, new RegExp(`observed forbidden marker\\(s\\): ${marker}`));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
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
    assert.match(approvedResult.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
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
      pendingFerrisPublicAssetApprovalLine(),
      completeFerrisPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicFerrisSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.trademarkOutcomePresent, true);
    assert.deepEqual(approval.allowedDirectories, [
      "examples/images",
      "ian-xiaohei-illustrations/assets/examples",
    ]);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public Sealos sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?sealosApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("sealos-public-asset");
  try {
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-sealos-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-SEALOS-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images and ian-xiaohei-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-sealos-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);
    assert.match(pendingResult.stdout, /uploaded-image identity outcome=missing/);
    assert.match(pendingResult.stdout, /no-logo outcome=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingSealosPublicAssetApprovalLine(),
      completeSealosPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicSealosSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.identityOutcomePresent, true);
    assert.equal(approval.noLogoOutcomePresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-SEALOS-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=98 passed=98 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Ferris public sample placeholder approval dates", async () => {
  const validators = await import(`${scriptPath}?ferrisPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const approvalText = releaseChecklistText.replace(
      pendingFerrisPublicAssetApprovalLine(),
      completeFerrisPublicAssetApprovalLine(placeholderDate),
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
        pendingFerrisPublicAssetApprovalLine(),
        completeFerrisPublicAssetApprovalLine(placeholderDate),
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

test("validator fixture rejects Sealos public sample placeholder approvals", async () => {
  const validators = await import(`${scriptPath}?sealosPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const [name, approvalLine, expectedField] of [
    ["date", completeSealosPublicAssetApprovalLine("TBD"), "date=missing"],
    [
      "identity",
      completeSealosPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity outcome",
        "no-logo identity approved",
      ),
      "uploaded-image identity outcome=missing",
    ],
    [
      "no-logo",
      completeSealosPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded image identity preserved",
        "no-logo outcome",
      ),
      "no-logo outcome=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(pendingSealosPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicSealosSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`sealos-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-sealos-test.png"), "fixture", "utf8");
      replaceInFixture(fixtureRoot, "RELEASE_CHECKLIST.md", pendingSealosPublicAssetApprovalLine(), approvalLine);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-SEALOS-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-sealos-test\.png/);
      assert.match(result.stdout, new RegExp(expectedField));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture distinguishes Generated Sample Ferris review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedFerrisApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const pendingApproval = validators.parseGeneratedFerrisSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    pendingGeneratedFerrisSampleLine(),
    completeGeneratedFerrisSampleLine(),
  );
  const completeApproval = validators.parseGeneratedFerrisSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.trademarkOutcomePresent, true);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      pendingGeneratedFerrisSampleLine(),
      completeGeneratedFerrisSampleLine(placeholderDate),
    );
    const placeholderApproval = validators.parseGeneratedFerrisSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const missingTrademarkText = releaseChecklistText.replace(
    pendingGeneratedFerrisSampleLine(),
    completeGeneratedFerrisSampleLine("2026-06-13", "trademark and endorsement-safe wording outcome"),
  );
  const missingTrademarkApproval = validators.parseGeneratedFerrisSampleApproval(missingTrademarkText);
  assert.equal(missingTrademarkApproval.checked, true);
  assert.equal(missingTrademarkApproval.complete, false);
  assert.equal(missingTrademarkApproval.trademarkOutcomePresent, false);

  const fixtureRoot = copyFixture("ferris-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-ferris");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-ferris-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-FERRIS-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-FERRIS-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture distinguishes Generated Sample Sealos review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedSealosApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const pendingApproval = validators.parseGeneratedSealosSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    pendingGeneratedSealosSampleLine(),
    completeGeneratedSealosSampleLine(),
  );
  const completeApproval = validators.parseGeneratedSealosSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.identityOutcomePresent, true);
  assert.equal(completeApproval.noLogoOutcomePresent, true);

  for (const [name, approvalLine, expectedFlag] of [
    ["date", completeGeneratedSealosSampleLine("TBD"), "datePresent"],
    [
      "identity",
      completeGeneratedSealosSampleLine("2026-06-13", "uploaded-image identity outcome", "no-logo approved"),
      "identityOutcomePresent",
    ],
    [
      "no-logo",
      completeGeneratedSealosSampleLine("2026-06-13", "uploaded image preserved", "no-logo outcome"),
      "noLogoOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(pendingGeneratedSealosSampleLine(), approvalLine);
    const placeholderApproval = validators.parseGeneratedSealosSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval[expectedFlag], false);
  }

  const fixtureRoot = copyFixture("sealos-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-sealos");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-sealos-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-SEALOS-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-SEALOS-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
