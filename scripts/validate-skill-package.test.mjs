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
  "AGENT-SEAL-001",
  "ROUTE-TABLE-001",
  "ROUTE-XH-001",
  "ROUTE-LB-001",
  "ROUTE-TOM-001",
  "ROUTE-FERRIS-001",
  "ROUTE-SEAL-001",
  "ROUTE-SEAL-002",
  "ROUTE-DEFAULT-001",
  "ROUTE-REFS-001",
  "ROUTE-PATHS-001",
  "ROUTE-MIXED-001",
  "REFS-XH-001",
  "REFS-LB-001",
  "REFS-TOM-001",
  "REFS-FERRIS-001",
  "REFS-SEAL-001",
  "REFS-OPENCLAW-001",
  "LEGACY-XH-001",
  "LEGACY-XH-002",
  "PROMPT-XH-001",
  "PROMPT-LB-001",
  "PROMPT-LB-002",
  "PROMPT-TOM-001",
  "PROMPT-FERRIS-001",
  "PROMPT-SEAL-001",
  "PROMPT-OPENCLAW-001",
  "IP-XH-001",
  "IP-LB-001",
  "IP-TOM-001",
  "IP-FERRIS-001",
  "IP-SEAL-001",
  "IP-OPENCLAW-001",
  "QA-TOM-001",
  "QA-FERRIS-001",
  "QA-SEAL-001",
  "QA-OPENCLAW-001",
  "RIGHTS-TOM-001",
  "SOURCE-FERRIS-001",
  "SOURCE-SEAL-001",
  "SOURCE-OPENCLAW-001",
  "LOGO-SEAL-001",
  "DOC-LINKS-001",
  "DOC-PATHS-001",
  "DOC-ROUTES-001",
  "DOC-TOM-001",
  "DOC-FERRIS-001",
  "DOC-SEAL-001",
  "NOTICE-IAN-001",
  "NOTICE-LB-001",
  "NOTICE-TOM-001",
  "NOTICE-FERRIS-001",
  "NOTICE-SEAL-001",
  "SMOKE-DEFAULT-001",
  "SMOKE-XH-001",
  "SMOKE-LB-001",
  "SMOKE-TOM-001",
  "SMOKE-FERRIS-001",
  "SMOKE-SEAL-001",
  "SMOKE-MIXED-001",
  "SMOKE-MIXED-SEAL-001",
  "RELEASE-TOM-001",
  "RELEASE-FERRIS-001",
  "RELEASE-SEAL-001",
  "RELEASE-OPENCLAW-001",
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
  "BOUNDARY-SEAL-LEAK-001",
  "BOUNDARY-OPENCLAW-LEAK-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-FERRIS-IMG-001",
  "BOUNDARY-SEAL-IMG-001",
  "BOUNDARY-OPENCLAW-IMG-001",
  "BOUNDARY-FERRIS-GEN-001",
  "BOUNDARY-SEAL-GEN-001",
  "BOUNDARY-OPENCLAW-GEN-001",
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
  return `- [ ] Public rendered ${routeName} samples approved for examples/images/, examples/images-en/, and ian-xiaohei-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.`;
}

function completePublicApprovalLine(routeName, reviewDate = "2026-06-13") {
  return `- [x] Public rendered ${routeName} samples approved for examples/images/, examples/images-en/, and ian-xiaohei-illustrations/assets/examples/: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / release notes.`;
}

function currentTomPublicApprovalLine() {
  return "- [x] Public rendered Tom samples approved for examples/images/, examples/images-en/, and ian-xiaohei-illustrations/assets/examples/: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / GitHub README.";
}

function pendingFerrisPublicAssetApprovalLine() {
  return "- [ ] Ferris public asset policy for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeFerrisPublicAssetApprovalLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Ferris public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`ian-xiaohei-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function currentFerrisPublicAssetApprovalLine() {
  return "- [x] Ferris public asset policy for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / GitHub README / trademark and endorsement-safe wording approved.";
}

function pendingGeneratedFerrisSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeGeneratedFerrisSampleLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-ferris / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function pendingSealPublicAssetApprovalLine() {
  return "- [ ] Seal public asset policy for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / hoodie seal identity outcome / no-logo outcome.";
}

function completeSealPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  identityOutcome = "hoodie seal identity preserved",
  noLogoOutcome = "no-logo output approved",
) {
  return `- [x] Seal public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`ian-xiaohei-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
}

function currentSealPublicAssetApprovalLine() {
  return "- [x] Seal public asset policy for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / GitHub README / hoodie seal identity preserved / no-logo output approved.";
}

function pendingGeneratedSealSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / hoodie seal identity outcome / no-logo outcome.";
}

function completeGeneratedSealSampleLine(
  reviewDate = "2026-06-13",
  identityOutcome = "hoodie seal identity preserved",
  noLogoOutcome = "no-logo output approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-seal / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
}

function pendingOpenClawPublicAssetApprovalLine() {
  return "- [ ] OpenClaw public asset policy for `examples/images/`, `examples/images-en/`, and `ian-xiaohei-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.";
}

function completeOpenClawPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  uploadedLogoIdentityOutcome = "uploaded-logo identity preserved",
  sourceLicenseOutcome = "source/license approved",
  routeIsolationOutcome = "route isolation approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] OpenClaw public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`ian-xiaohei-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, ian-xiaohei-illustrations/assets/examples / release notes / ${uploadedLogoIdentityOutcome} / ${sourceLicenseOutcome} / ${routeIsolationOutcome} / ${articleMetaphorOutcome}.`;
}

function pendingGeneratedOpenClawSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.";
}

function completeGeneratedOpenClawSampleLine(
  reviewDate = "2026-06-13",
  uploadedLogoIdentityOutcome = "uploaded-logo identity preserved",
  sourceLicenseOutcome = "source/license approved",
  routeIsolationOutcome = "route isolation approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-openclaw / examples/images, ian-xiaohei-illustrations/assets/examples / release notes / ${uploadedLogoIdentityOutcome} / ${sourceLicenseOutcome} / ${routeIsolationOutcome} / ${articleMetaphorOutcome}.`;
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
  assert.match(result.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
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
  assert.match(result.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
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

  let lastIndex = result.stdout.indexOf("[PASS] RELEASE-OPENCLAW-001 ");
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
    assert.match(result.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
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
    assert.match(result.stdout, /\[FAIL\] ROUTE-PATHS-001 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-PATH-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
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
  assert.equal(routes.length, 6);
  assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox", "tom", "ferris", "seal", "openclaw"]);
  assert.equal(routes[0].output_suffix, "illustrations");
  assert.equal(routes[0].default, "true");
  assert.equal(routes[1].output_suffix, "littlebox");
  assert.equal(routes[1].default, "false");
  assert.deepEqual(validators.splitRouteAliases(routes[2].aliases), ["Tom", "Tom Cat", "Tom and Jerry", "汤姆", "汤姆猫"]);
  assert.equal(routes[2].output_suffix, "tom");
  assert.equal(routes[2].default, "false");
  assert.deepEqual(validators.splitRouteAliases(routes[3].aliases), [
    "Ferris",
    "Rust mascot",
    "Rust crab",
    "Rustacean",
    "Rust 吉祥物",
    "Rust 螃蟹",
  ]);
  assert.equal(routes[3].output_suffix, "ferris");
  assert.equal(routes[3].default, "false");
  assert.deepEqual(validators.splitRouteAliases(routes[4].aliases), [
    "Seal",
    "hoodie seal",
    "white seal",
    "blue hoodie seal",
    "海豹",
    "连帽衫海豹",
    "白色海豹",
    "蓝色连帽衫海豹",
  ]);
  assert.deepEqual(validators.splitRouteAliases(routes[5].aliases), [
    "OpenClaw",
    "openclaw",
    "OpenClaw logo",
    "OpenClaw mascot",
    "OpenClaw 助手",
    "OpenClaw 吉祥物",
  ]);
  assert.equal(routes[5].output_suffix, "openclaw");
  assert.equal(routes[5].default, "false");
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
  assert.deepEqual(validators.splitRouteCell(routes[5].required_references), [
    "references/ips/openclaw/index.md",
    "references/ips/openclaw/source.md",
    "references/ips/openclaw/style-dna.md",
    "references/ips/openclaw/openclaw-ip.md",
    "references/ips/openclaw/composition-patterns.md",
    "references/ips/openclaw/prompt-template.md",
    "references/ips/openclaw/qa-checklist.md",
  ]);
  assert.deepEqual(validators.splitRouteCell("`one`; `two`; three"), ["one", "two", "three"]);

  const links = validators.parseMarkdownLinks(readmeText);
  assert.ok(links.some((link) => link.target === "examples/prompts.md"));
  assert.ok(links.some((link) => link.target === "examples/images-en/01-two-breakpoints.png"));
  assert.ok(links.some((link) => link.target === "examples/images-en/seal/08-trust-bridge.png"));

  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-illustrations/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-tom/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-ferris/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-seal/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-openclaw/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-littlebox/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-ferris/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-seal/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-openclaw/"));
});

test("approval parser helpers expose current release primitives", async () => {
  const validators = await import(`${scriptPath}?approvalParsers=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const currentTomApproval = validators.parsePublicTomSampleApproval(releaseChecklistText);
  assert.equal(currentTomApproval.found, true);
  assert.equal(currentTomApproval.checked, true);
  assert.equal(currentTomApproval.complete, true);
  assert.equal(currentTomApproval.reviewerPresent, true);
  assert.equal(currentTomApproval.allowedDirectoriesPresent, true);
  assert.deepEqual(currentTomApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  const pendingText = releaseChecklistText.replace(currentTomPublicApprovalLine(), pendingPublicApprovalLine("Tom"));
  const pendingApproval = validators.parsePublicTomSampleApproval(pendingText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.reviewerPresent, false);
  assert.equal(pendingApproval.allowedDirectoriesPresent, false);

  const approvedText = releaseChecklistText.replace(
    currentTomPublicApprovalLine(),
    completePublicApprovalLine("Tom"),
  );
  const approved = validators.parsePublicTomSampleApproval(approvedText);
  assert.equal(approved.complete, true);
  assert.deepEqual(approved.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      currentTomPublicApprovalLine(),
      completePublicApprovalLine("Tom", placeholderDate),
    );
    const placeholderApproval = validators.parsePublicTomSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const currentFerrisApproval = validators.parsePublicFerrisSampleApproval(releaseChecklistText);
  assert.equal(currentFerrisApproval.found, true);
  assert.equal(currentFerrisApproval.checked, true);
  assert.equal(currentFerrisApproval.complete, true);
  assert.equal(currentFerrisApproval.allowedDirectoriesPresent, true);
  assert.equal(currentFerrisApproval.trademarkOutcomePresent, true);
  assert.deepEqual(currentFerrisApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  const pendingFerrisText = releaseChecklistText.replace(
    currentFerrisPublicAssetApprovalLine(),
    pendingFerrisPublicAssetApprovalLine(),
  );
  const pendingFerrisApproval = validators.parsePublicFerrisSampleApproval(pendingFerrisText);
  assert.equal(pendingFerrisApproval.found, true);
  assert.equal(pendingFerrisApproval.checked, false);
  assert.equal(pendingFerrisApproval.complete, false);
  assert.equal(pendingFerrisApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingFerrisApproval.trademarkOutcomePresent, false);

  const approvedFerrisText = releaseChecklistText.replace(
    currentFerrisPublicAssetApprovalLine(),
    completeFerrisPublicAssetApprovalLine(),
  );
  const approvedFerris = validators.parsePublicFerrisSampleApproval(approvedFerrisText);
  assert.equal(approvedFerris.complete, true);
  assert.deepEqual(approvedFerris.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(approvedFerris.trademarkOutcomePresent, true);

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const placeholderText = releaseChecklistText.replace(
      currentFerrisPublicAssetApprovalLine(),
      completeFerrisPublicAssetApprovalLine(placeholderDate),
    );
    const placeholderApproval = validators.parsePublicFerrisSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval.datePresent, false);
  }

  const missingTrademarkText = releaseChecklistText.replace(
    currentFerrisPublicAssetApprovalLine(),
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

  const currentSealosApproval = validators.parsePublicSealSampleApproval(releaseChecklistText);
  assert.equal(currentSealosApproval.found, true);
  assert.equal(currentSealosApproval.checked, true);
  assert.equal(currentSealosApproval.complete, true);
  assert.equal(currentSealosApproval.allowedDirectoriesPresent, true);
  assert.equal(currentSealosApproval.identityOutcomePresent, true);
  assert.equal(currentSealosApproval.noLogoOutcomePresent, true);
  assert.deepEqual(currentSealosApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  const pendingSealosText = releaseChecklistText.replace(
    currentSealPublicAssetApprovalLine(),
    pendingSealPublicAssetApprovalLine(),
  );
  const pendingSealosApproval = validators.parsePublicSealSampleApproval(pendingSealosText);
  assert.equal(pendingSealosApproval.found, true);
  assert.equal(pendingSealosApproval.checked, false);
  assert.equal(pendingSealosApproval.complete, false);
  assert.equal(pendingSealosApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingSealosApproval.identityOutcomePresent, false);
  assert.equal(pendingSealosApproval.noLogoOutcomePresent, false);

  const approvedSealosText = releaseChecklistText.replace(
    currentSealPublicAssetApprovalLine(),
    completeSealPublicAssetApprovalLine(),
  );
  const approvedSealos = validators.parsePublicSealSampleApproval(approvedSealosText);
  assert.equal(approvedSealos.complete, true);
  assert.deepEqual(approvedSealos.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(approvedSealos.identityOutcomePresent, true);
  assert.equal(approvedSealos.noLogoOutcomePresent, true);

  const pendingGeneratedSealosApproval = validators.parseGeneratedSealSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedSealosApproval.found, true);
  assert.equal(pendingGeneratedSealosApproval.checked, false);
  assert.equal(pendingGeneratedSealosApproval.complete, false);
  assert.equal(pendingGeneratedSealosApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedSealosApproval.publicDirectoriesPresent, false);

  const pendingOpenClawApproval = validators.parsePublicOpenClawSampleApproval(releaseChecklistText);
  assert.equal(pendingOpenClawApproval.found, true);
  assert.equal(pendingOpenClawApproval.checked, false);
  assert.equal(pendingOpenClawApproval.complete, false);
  assert.equal(pendingOpenClawApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingOpenClawApproval.uploadedLogoIdentityOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.sourceLicenseOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.routeIsolationOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.articleMetaphorOutcomePresent, false);

  const approvedOpenClawText = releaseChecklistText.replace(
    pendingOpenClawPublicAssetApprovalLine(),
    completeOpenClawPublicAssetApprovalLine(),
  );
  const approvedOpenClaw = validators.parsePublicOpenClawSampleApproval(approvedOpenClawText);
  assert.equal(approvedOpenClaw.complete, true);
  assert.deepEqual(approvedOpenClaw.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(approvedOpenClaw.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(approvedOpenClaw.sourceLicenseOutcomePresent, true);
  assert.equal(approvedOpenClaw.routeIsolationOutcomePresent, true);
  assert.equal(approvedOpenClaw.articleMetaphorOutcomePresent, true);

  const pendingGeneratedOpenClawApproval = validators.parseGeneratedOpenClawSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedOpenClawApproval.found, true);
  assert.equal(pendingGeneratedOpenClawApproval.checked, false);
  assert.equal(pendingGeneratedOpenClawApproval.complete, false);
  assert.equal(pendingGeneratedOpenClawApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedOpenClawApproval.publicDirectoriesPresent, false);

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
    pendingGeneratedSealSampleLine(),
    completeGeneratedSealSampleLine(),
  );
  const completeGeneratedSealosApproval =
    validators.parseGeneratedSealSampleApproval(completeGeneratedSealosText);
  assert.equal(completeGeneratedSealosApproval.complete, true);
  assert.deepEqual(completeGeneratedSealosApproval.internalReviewDirectories, ["assets/<article-slug>-seal"]);
  assert.deepEqual(completeGeneratedSealosApproval.publicDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);

  const completeGeneratedOpenClawText = releaseChecklistText.replace(
    pendingGeneratedOpenClawSampleLine(),
    completeGeneratedOpenClawSampleLine(),
  );
  const completeGeneratedOpenClawApproval =
    validators.parseGeneratedOpenClawSampleApproval(completeGeneratedOpenClawText);
  assert.equal(completeGeneratedOpenClawApproval.complete, true);
  assert.deepEqual(completeGeneratedOpenClawApproval.internalReviewDirectories, ["assets/<article-slug>-openclaw"]);
  assert.deepEqual(completeGeneratedOpenClawApproval.publicDirectories, [
    "examples/images",
    "ian-xiaohei-illustrations/assets/examples",
  ]);
  assert.equal(completeGeneratedOpenClawApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.sourceLicenseOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.articleMetaphorOutcomePresent, true);
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

test("validator fixture reports Seal source marker drift", () => {
  const fixtureRoot = copyFixture("seal-source");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "# Seal Source Record",
      "# Seal Source Review",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-SEAL-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/seal\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): # Seal Source Record/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports OpenClaw source marker drift", () => {
  const fixtureRoot = copyFixture("openclaw-source");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "source.md"),
      "MIT License",
      "permissive license",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "source.md"),
      "red round body",
      "round body",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-OPENCLAW-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/openclaw\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): MIT License/);
    assert.match(result.stdout, /red round body/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Seal route metadata drift", () => {
  const fixtureRoot = copyFixture("seal-route");
  try {
    const routingPath = path.join("ian-xiaohei-illustrations", "references", "routing.md");
    replaceAllInFixture(fixtureRoot, routingPath, "| `seal` | Seal |", "| `sealos` | Seal |");
    replaceAllInFixture(fixtureRoot, routingPath, "| `false` | `seal` |", "| `false` | `sealos` |");
    replaceAllInFixture(fixtureRoot, routingPath, "assets/&lt;article-slug&gt;-seal/", "assets/&lt;article-slug&gt;-sealos/");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TABLE-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-SEAL-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-PATHS-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /expected rebrand route ids xiaohei, littlebox, tom, ferris, seal, openclaw; observed xiaohei, littlebox, tom, ferris, sealos, openclaw/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Seal pack, prompt, and QA marker drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "index.md"),
      "Public-sample boundary",
      "REFS-SEAL-001",
    ],
    [
      "prompt",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "Seal planning fields gate",
      "PROMPT-SEAL-001",
    ],
    [
      "qa",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "qa-checklist.md"),
      "Seal QA route leakage failure",
      "QA-SEAL-001",
    ],
    [
      "identity",
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "seal-ip.md"),
      "Seal must perform the central cognitive action",
      "IP-SEAL-001",
    ],
  ]) {
    const fixtureRoot = copyFixture(`seal-${name}-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      const expectedPath = expectedId === "IP-SEAL-001" || expectedId === "REFS-SEAL-001"
        ? path.join("ian-xiaohei-illustrations", "references", "ips", "seal")
        : relativePath;
      assert.match(result.stdout, new RegExp(expectedPath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports OpenClaw pack, prompt, and QA marker drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "index.md"),
      "Public-sample boundary",
      "REFS-OPENCLAW-001",
    ],
    [
      "prompt",
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "prompt-template.md"),
      "OpenClaw planning fields gate",
      "PROMPT-OPENCLAW-001",
    ],
    [
      "qa",
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "qa-checklist.md"),
      "OpenClaw QA route leakage failure",
      "QA-OPENCLAW-001",
    ],
    [
      "identity",
      path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw", "openclaw-ip.md"),
      "OpenClaw must perform the central cognitive action",
      "IP-OPENCLAW-001",
    ],
  ]) {
    const fixtureRoot = copyFixture(`openclaw-${name}-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      const expectedPath = expectedId === "IP-OPENCLAW-001" || expectedId === "REFS-OPENCLAW-001"
        ? path.join("ian-xiaohei-illustrations", "references", "ips", "openclaw")
        : relativePath;
      assert.match(result.stdout, new RegExp(expectedPath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Seal docs, metadata, NOTICE, release, and smoke drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "agent",
      path.join("ian-xiaohei-illustrations", "agents", "openai.yaml"),
      "explicit Seal active product-neutral hoodie seal route",
      "AGENT-SEAL-001",
    ],
    ["routing", path.join("ian-xiaohei-illustrations", "references", "routing.md"), "source-history", "DOC-SEAL-001"],
    ["examples", "examples/prompts.md", "## Route Smoke: Explicit Seal", "SMOKE-SEAL-001"],
    ["mixed", "examples/prompts.md", "five separate variant groups", "SMOKE-MIXED-SEAL-001"],
    ["notice", "NOTICE.md", "Seal Source-History Boundary", "NOTICE-SEAL-001"],
    ["release", "RELEASE_CHECKLIST.md", "Seal Generated Sample Policy", "RELEASE-SEAL-001"],
  ]) {
    const fixtureRoot = copyFixture(`seal-${name}-docs-drift`);
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

test("validator fixture reports OpenClaw release gate drift", () => {
  const fixtureRoot = copyFixture("openclaw-release");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      "OpenClaw Source and License Review",
      "OpenClaw Source Review",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] RELEASE-OPENCLAW-001 /);
    assert.match(result.stdout, /RELEASE_CHECKLIST\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): OpenClaw Source and License Review/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Seal no-logo drift", () => {
  const fixtureRoot = copyFixture("seal-no-logo");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "plain navy cap",
      "navy cap with a small Sealos logo",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "source.md"),
      "Logo-Free Identity Markers",
      "Logo-Bearing Identity Markers",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "logo-free note",
      "logo-bearing note",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "qa-checklist.md"),
      "Seal QA logo-free failure",
      "Seal QA logo allowed failure",
    );
    replaceAllInFixture(
      fixtureRoot,
      "README.md",
      "plain and mark-free",
      "logo-bearing",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] LOGO-SEAL-001 /);
    assert.match(result.stdout, /ian-xiaohei-illustrations\/references\/ips\/seal/);
    assert.match(result.stdout, /observed missing marker\(s\): plain navy cap/);
    assert.match(result.stdout, /Logo-Free Identity Markers/);
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
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-SEAL-LEAK-001 /);
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, new RegExp(`observed forbidden marker\\(s\\): ${marker}`));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports OpenClaw leakage in non-OpenClaw packs", () => {
  for (const [name, relativePath, marker] of [
    [
      "xiaohei",
      path.join("ian-xiaohei-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "OpenClaw logo",
    ],
    [
      "littlebox",
      path.join("ian-xiaohei-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "uploaded-logo authority",
    ],
    ["tom", path.join("ian-xiaohei-illustrations", "references", "ips", "tom", "tom-ip.md"), "OpenClaw mascot"],
    [
      "ferris",
      path.join("ian-xiaohei-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "references/ips/openclaw",
    ],
    ["seal", path.join("ian-xiaohei-illustrations", "references", "ips", "seal", "seal-ip.md"), "OpenClaw 吉祥物"],
  ]) {
    const fixtureRoot = copyFixture(`openclaw-leak-${name}`);
    try {
      writeFileSync(
        path.join(fixtureRoot, relativePath),
        `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: ${marker}\n`,
        "utf8",
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-OPENCLAW-LEAK-001 /);
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, new RegExp(`observed forbidden marker\\(s\\): .*${marker}`));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture enforces public Tom asset approval parsing", async () => {
  const validators = await import(`${scriptPath}?approval=${Date.now()}`);
  const fixtureRoot = copyFixture("tom-public-asset");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentTomPublicApprovalLine(),
      pendingPublicApprovalLine("Tom"),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-tom-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-TOM-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and ian-xiaohei-illustrations\/assets\/examples/);
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
    assert.match(approvedResult.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Tom public sample placeholder approval dates", async () => {
  const validators = await import(`${scriptPath}?tomPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const approvalText = releaseChecklistText.replace(
      currentTomPublicApprovalLine(),
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
        currentTomPublicApprovalLine(),
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
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentFerrisPublicAssetApprovalLine(),
      pendingFerrisPublicAssetApprovalLine(),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-ferris-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and ian-xiaohei-illustrations\/assets\/examples/);
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
      "examples/images-en",
      "ian-xiaohei-illustrations/assets/examples",
    ]);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-FERRIS-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public Seal sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?sealApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("seal-public-asset");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentSealPublicAssetApprovalLine(),
      pendingSealPublicAssetApprovalLine(),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-seal-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-SEAL-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and ian-xiaohei-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-seal-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);
    assert.match(pendingResult.stdout, /hoodie seal identity outcome=missing/);
    assert.match(pendingResult.stdout, /no-logo outcome=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingSealPublicAssetApprovalLine(),
      completeSealPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicSealSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.identityOutcomePresent, true);
    assert.equal(approval.noLogoOutcomePresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-SEAL-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public OpenClaw sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?openClawApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("openclaw-public-asset");
  try {
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-openclaw-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-OPENCLAW-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and ian-xiaohei-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-openclaw-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);
    assert.match(pendingResult.stdout, /uploaded-logo identity outcome=missing/);
    assert.match(pendingResult.stdout, /source\/license outcome=missing/);
    assert.match(pendingResult.stdout, /route-isolation outcome=missing/);
    assert.match(pendingResult.stdout, /article-metaphor quality outcome=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingOpenClawPublicAssetApprovalLine(),
      completeOpenClawPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicOpenClawSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.uploadedLogoIdentityOutcomePresent, true);
    assert.equal(approval.sourceLicenseOutcomePresent, true);
    assert.equal(approval.routeIsolationOutcomePresent, true);
    assert.equal(approval.articleMetaphorOutcomePresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-OPENCLAW-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=106 passed=106 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Ferris public sample placeholder approval dates", async () => {
  const validators = await import(`${scriptPath}?ferrisPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const placeholderDate of ["TBD", "pending", "", "   "]) {
    const approvalText = releaseChecklistText.replace(
      currentFerrisPublicAssetApprovalLine(),
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
        currentFerrisPublicAssetApprovalLine(),
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

test("validator fixture rejects Seal public sample placeholder approvals", async () => {
  const validators = await import(`${scriptPath}?sealPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const [name, approvalLine, expectedField] of [
    ["date", completeSealPublicAssetApprovalLine("TBD"), "date=missing"],
    [
      "identity",
      completeSealPublicAssetApprovalLine(
        "2026-06-13",
        "hoodie seal identity outcome",
        "no-logo output approved",
      ),
      "hoodie seal identity outcome=missing",
    ],
    [
      "no-logo",
      completeSealPublicAssetApprovalLine(
        "2026-06-13",
        "hoodie seal identity preserved",
        "no-logo outcome",
      ),
      "no-logo outcome=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(currentSealPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicSealSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`seal-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-seal-test.png"), "fixture", "utf8");
      replaceInFixture(fixtureRoot, "RELEASE_CHECKLIST.md", currentSealPublicAssetApprovalLine(), approvalLine);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-SEAL-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-seal-test\.png/);
      assert.match(result.stdout, new RegExp(expectedField));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture rejects OpenClaw public sample placeholder approvals", async () => {
  const validators = await import(`${scriptPath}?openClawPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const [name, approvalLine, expectedField] of [
    ["date", completeOpenClawPublicAssetApprovalLine("TBD"), "date=missing"],
    [
      "uploaded-logo",
      completeOpenClawPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-logo identity outcome",
        "source/license approved",
        "route isolation approved",
        "article-metaphor quality approved",
      ),
      "uploaded-logo identity outcome=missing",
    ],
    [
      "source-license",
      completeOpenClawPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license outcome",
        "route isolation approved",
        "article-metaphor quality approved",
      ),
      "source\\/license outcome=missing",
    ],
    [
      "route-isolation",
      completeOpenClawPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license approved",
        "route-isolation outcome",
        "article-metaphor quality approved",
      ),
      "route-isolation outcome=missing",
    ],
    [
      "article-metaphor",
      completeOpenClawPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license approved",
        "route isolation approved",
        "article-metaphor quality outcome",
      ),
      "article-metaphor quality outcome=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(pendingOpenClawPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicOpenClawSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`openclaw-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-openclaw-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        pendingOpenClawPublicAssetApprovalLine(),
        approvalLine,
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-OPENCLAW-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-openclaw-test\.png/);
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

test("validator fixture distinguishes Generated Sample Seal review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedSealApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const pendingApproval = validators.parseGeneratedSealSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    pendingGeneratedSealSampleLine(),
    completeGeneratedSealSampleLine(),
  );
  const completeApproval = validators.parseGeneratedSealSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.identityOutcomePresent, true);
  assert.equal(completeApproval.noLogoOutcomePresent, true);

  for (const [name, approvalLine, expectedFlag] of [
    ["date", completeGeneratedSealSampleLine("TBD"), "datePresent"],
    [
      "identity",
      completeGeneratedSealSampleLine("2026-06-13", "hoodie seal identity outcome", "no-logo output approved"),
      "identityOutcomePresent",
    ],
    [
      "no-logo",
      completeGeneratedSealSampleLine("2026-06-13", "hoodie seal identity preserved", "no-logo outcome"),
      "noLogoOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(pendingGeneratedSealSampleLine(), approvalLine);
    const placeholderApproval = validators.parseGeneratedSealSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval[expectedFlag], false);
  }

  const fixtureRoot = copyFixture("seal-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-seal");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-seal-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-SEAL-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-SEAL-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture distinguishes Generated Sample OpenClaw review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedOpenClawApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const pendingApproval = validators.parseGeneratedOpenClawSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    pendingGeneratedOpenClawSampleLine(),
    completeGeneratedOpenClawSampleLine(),
  );
  const completeApproval = validators.parseGeneratedOpenClawSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(completeApproval.sourceLicenseOutcomePresent, true);
  assert.equal(completeApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeApproval.articleMetaphorOutcomePresent, true);

  for (const [name, approvalLine, expectedFlag] of [
    ["date", completeGeneratedOpenClawSampleLine("TBD"), "datePresent"],
    [
      "uploaded-logo",
      completeGeneratedOpenClawSampleLine(
        "2026-06-13",
        "uploaded-logo identity outcome",
        "source/license approved",
        "route isolation approved",
        "article-metaphor quality approved",
      ),
      "uploadedLogoIdentityOutcomePresent",
    ],
    [
      "source-license",
      completeGeneratedOpenClawSampleLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license outcome",
        "route isolation approved",
        "article-metaphor quality approved",
      ),
      "sourceLicenseOutcomePresent",
    ],
    [
      "route-isolation",
      completeGeneratedOpenClawSampleLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license approved",
        "route-isolation outcome",
        "article-metaphor quality approved",
      ),
      "routeIsolationOutcomePresent",
    ],
    [
      "article-metaphor",
      completeGeneratedOpenClawSampleLine(
        "2026-06-13",
        "uploaded-logo identity preserved",
        "source/license approved",
        "route isolation approved",
        "article-metaphor quality outcome",
      ),
      "articleMetaphorOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(pendingGeneratedOpenClawSampleLine(), approvalLine);
    const placeholderApproval = validators.parseGeneratedOpenClawSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval[expectedFlag], false);
  }

  const fixtureRoot = copyFixture("openclaw-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-openclaw");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-openclaw-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-OPENCLAW-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-OPENCLAW-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
