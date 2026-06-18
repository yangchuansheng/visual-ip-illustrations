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
  "SKILL-LANG-001",
  "SKILL-LANG-002",
  "SKILL-ROUTE-001",
  "SKILL-REFS-001",
  "SKILL-OUTPUT-001",
  "SKILL-GEN-001",
  "AGENT-SHAPE-001",
  "AGENT-LANG-001",
  "AGENT-TOM-001",
  "AGENT-SEAL-001",
  "AGENT-OPENCLAW-001",
  "AGENT-GOPHER-001",
  "AGENT-CAIXUKUN-001",
  "ROUTE-TABLE-001",
  "ROUTE-XH-001",
  "ROUTE-LB-001",
  "ROUTE-TOM-001",
  "ROUTE-FERRIS-001",
  "ROUTE-SEAL-001",
  "ROUTE-SEAL-002",
  "ROUTE-GOPHER-001",
  "ROUTE-CAIXUKUN-001",
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
  "REFS-GOPHER-001",
  "REFS-CAIXUKUN-001",
  "LEGACY-XH-001",
  "LEGACY-XH-002",
  "PROMPT-XH-001",
  "PROMPT-LB-001",
  "PROMPT-LB-002",
  "PROMPT-TOM-001",
  "PROMPT-FERRIS-001",
  "PROMPT-SEAL-001",
  "PROMPT-OPENCLAW-001",
  "PROMPT-GOPHER-001",
  "PROMPT-CAIXUKUN-001",
  "IP-XH-001",
  "IP-LB-001",
  "IP-TOM-001",
  "IP-FERRIS-001",
  "IP-SEAL-001",
  "IP-OPENCLAW-001",
  "IP-GOPHER-001",
  "IP-CAIXUKUN-001",
  "QA-TOM-001",
  "QA-FERRIS-001",
  "QA-SEAL-001",
  "QA-OPENCLAW-001",
  "QA-GOPHER-001",
  "QA-CAIXUKUN-001",
  "RIGHTS-TOM-001",
  "SOURCE-FERRIS-001",
  "SOURCE-SEAL-001",
  "SOURCE-OPENCLAW-001",
  "SOURCE-GOPHER-001",
  "SOURCE-CAIXUKUN-001",
  "LOGO-SEAL-001",
  "DOC-LINKS-001",
  "DOC-ZH-GALLERY-001",
  "DOC-PATHS-001",
  "DOC-ROUTES-001",
  "DOC-TOM-001",
  "DOC-FERRIS-001",
  "DOC-SEAL-001",
  "DOC-OPENCLAW-001",
  "DOC-GOPHER-001",
  "DOC-CAIXUKUN-001",
  "NOTICE-IAN-001",
  "NOTICE-LB-001",
  "NOTICE-TOM-001",
  "NOTICE-FERRIS-001",
  "NOTICE-SEAL-001",
  "NOTICE-OPENCLAW-001",
  "NOTICE-GOPHER-001",
  "NOTICE-CAIXUKUN-001",
  "SMOKE-DEFAULT-001",
  "SMOKE-XH-001",
  "SMOKE-LB-001",
  "SMOKE-TOM-001",
  "SMOKE-FERRIS-001",
  "SMOKE-SEAL-001",
  "SMOKE-OPENCLAW-001",
  "SMOKE-GOPHER-001",
  "SMOKE-CAIXUKUN-001",
  "SMOKE-MIXED-001",
  "SMOKE-MIXED-SEAL-001",
  "SMOKE-MIXED-OPENCLAW-001",
  "SMOKE-MIXED-GOPHER-001",
  "SMOKE-MIXED-CAIXUKUN-001",
  "RELEASE-TOM-001",
  "RELEASE-FERRIS-001",
  "RELEASE-SEAL-001",
  "RELEASE-OPENCLAW-001",
  "RELEASE-GOPHER-001",
  "RELEASE-CAIXUKUN-001",
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
  "VAL-OPENCLAW-EVIDENCE-001",
  "VAL-GOPHER-EVIDENCE-001",
  "VAL-CAIXUKUN-EVIDENCE-001",
  "BOUNDARY-IMG-001",
  "BOUNDARY-TOM-LEAK-001",
  "BOUNDARY-FERRIS-LEAK-001",
  "BOUNDARY-SEAL-LEAK-001",
  "BOUNDARY-OPENCLAW-LEAK-001",
  "BOUNDARY-GOPHER-LEAK-001",
  "BOUNDARY-CAIXUKUN-LEAK-001",
  "BOUNDARY-TOM-IMG-001",
  "BOUNDARY-FERRIS-IMG-001",
  "BOUNDARY-SEAL-IMG-001",
  "BOUNDARY-OPENCLAW-IMG-001",
  "BOUNDARY-GOPHER-IMG-001",
  "BOUNDARY-CAIXUKUN-IMG-001",
  "BOUNDARY-FERRIS-GEN-001",
  "BOUNDARY-SEAL-GEN-001",
  "BOUNDARY-OPENCLAW-GEN-001",
  "BOUNDARY-GOPHER-GEN-001",
  "BOUNDARY-CAIXUKUN-GEN-001",
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
  return `- [ ] Public rendered ${routeName} samples approved for examples/images/, examples/images-en/, and skills/visual-ip-illustrations/assets/examples/: PENDING / reviewer / date / approval status / allowed directories / release channels.`;
}

function completePublicApprovalLine(routeName, reviewDate = "2026-06-13") {
  return `- [x] Public rendered ${routeName} samples approved for examples/images/, examples/images-en/, and skills/visual-ip-illustrations/assets/examples/: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes.`;
}

function currentTomPublicApprovalLine() {
  return "- [x] Public rendered Tom samples approved for examples/images/, examples/images-en/, and skills/visual-ip-illustrations/assets/examples/: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README.";
}

function pendingFerrisPublicAssetApprovalLine() {
  return "- [ ] Ferris public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeFerrisPublicAssetApprovalLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Ferris public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`skills/visual-ip-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function currentFerrisPublicAssetApprovalLine() {
  return "- [x] Ferris public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / trademark and endorsement-safe wording approved.";
}

function pendingGeneratedFerrisSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / trademark and endorsement-safe wording outcome.";
}

function completeGeneratedFerrisSampleLine(reviewDate = "2026-06-13", trademarkOutcome = "trademark safe") {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-ferris / examples/images, skills/visual-ip-illustrations/assets/examples / release notes / ${trademarkOutcome}.`;
}

function pendingSealPublicAssetApprovalLine() {
  return "- [ ] Seal public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / hoodie seal identity outcome / no-logo outcome.";
}

function completeSealPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  identityOutcome = "hoodie seal identity preserved",
  noLogoOutcome = "no-logo output approved",
) {
  return `- [x] Seal public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`skills/visual-ip-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
}

function currentSealPublicAssetApprovalLine() {
  return "- [x] Seal public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-15 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / hoodie seal identity preserved / no-logo output approved.";
}

function pendingGeneratedSealSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / hoodie seal identity outcome / no-logo outcome.";
}

function completeGeneratedSealSampleLine(
  reviewDate = "2026-06-13",
  identityOutcome = "hoodie seal identity preserved",
  noLogoOutcome = "no-logo output approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-seal / examples/images, skills/visual-ip-illustrations/assets/examples / release notes / ${identityOutcome} / ${noLogoOutcome}.`;
}

function pendingOpenClawPublicAssetApprovalLine() {
  return "- [ ] OpenClaw public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.";
}

function completeOpenClawPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  uploadedLogoIdentityOutcome = "uploaded-logo identity preserved",
  sourceLicenseOutcome = "source/license approved",
  routeIsolationOutcome = "route-isolation approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] OpenClaw public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`skills/visual-ip-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes / ${uploadedLogoIdentityOutcome} / ${sourceLicenseOutcome} / ${routeIsolationOutcome} / ${articleMetaphorOutcome}.`;
}

function currentOpenClawPublicAssetApprovalLine() {
  return "- [x] OpenClaw public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-17 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / uploaded-logo identity preserved / source/license approved / route-isolation approved / article-metaphor quality approved.";
}

function pendingGeneratedOpenClawSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-logo identity outcome / source/license outcome / route-isolation outcome / article-metaphor quality outcome.";
}

function completeGeneratedOpenClawSampleLine(
  reviewDate = "2026-06-13",
  uploadedLogoIdentityOutcome = "uploaded-logo identity preserved",
  sourceLicenseOutcome = "source/license approved",
  routeIsolationOutcome = "route-isolation approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-openclaw / examples/images, skills/visual-ip-illustrations/assets/examples / release notes / ${uploadedLogoIdentityOutcome} / ${sourceLicenseOutcome} / ${routeIsolationOutcome} / ${articleMetaphorOutcome}.`;
}

function currentGeneratedOpenClawSampleLine() {
  return "- [x] Record generated sample review: APPROVED / maintainer request / 2026-06-17 / approved / assets/<article-slug>-openclaw / examples/images, skills/visual-ip-illustrations/assets/examples / GitHub README / uploaded-logo identity preserved / source/license approved / route-isolation approved / article-metaphor quality approved.";
}

function pendingGopherPublicAssetApprovalLine() {
  return "- [ ] Go Gopher public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / Go blog source outcome / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / local visual marker outcome / route-isolation outcome / Go logo boundary outcome / official endorsement boundary outcome / article-metaphor quality outcome / public-sample decision.";
}

function completeGopherPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  sourceOutcome = "Go blog source approved",
  attributionOutcome = "Renee French attribution approved",
  licenseOutcome = "Creative Commons Attribution 4.0 approved",
  visualOutcome = "local visual marker approved",
  routeIsolationOutcome = "route-isolation approved",
  logoBoundaryOutcome = "Go logo boundary approved",
  endorsementBoundaryOutcome = "official endorsement boundary approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
  publicSampleOutcome = "public-sample decision approved",
) {
  return `- [x] Go Gopher public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`skills/visual-ip-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes / ${sourceOutcome} / ${attributionOutcome} / ${licenseOutcome} / ${visualOutcome} / ${routeIsolationOutcome} / ${logoBoundaryOutcome} / ${endorsementBoundaryOutcome} / ${articleMetaphorOutcome} / ${publicSampleOutcome}.`;
}

function currentGopherPublicAssetApprovalLine() {
  return "- [x] Go Gopher public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-17 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README / Go blog source approved / Renee French attribution approved / Creative Commons Attribution 4.0 approved / local visual marker approved / route-isolation approved / Go logo boundary approved / official endorsement boundary approved / article-metaphor quality approved / public-sample decision approved.";
}

function pendingGeneratedGopherSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / Renee French attribution outcome / Creative Commons Attribution 4.0 outcome / local visual marker outcome / route-isolation outcome / Go logo boundary outcome / official endorsement boundary outcome / article-metaphor quality outcome.";
}

function completeGeneratedGopherSampleLine(
  reviewDate = "2026-06-13",
  attributionOutcome = "Renee French attribution approved",
  licenseOutcome = "Creative Commons Attribution 4.0 approved",
  visualOutcome = "local visual marker approved",
  routeIsolationOutcome = "route-isolation approved",
  logoBoundaryOutcome = "Go logo boundary approved",
  endorsementBoundaryOutcome = "official endorsement boundary approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-gopher / examples/images, skills/visual-ip-illustrations/assets/examples / release notes / ${attributionOutcome} / ${licenseOutcome} / ${visualOutcome} / ${routeIsolationOutcome} / ${logoBoundaryOutcome} / ${endorsementBoundaryOutcome} / ${articleMetaphorOutcome}.`;
}

function currentGeneratedGopherSampleLine() {
  return "- [x] Record generated sample review: APPROVED / maintainer request / 2026-06-17 / approved / assets/<article-slug>-gopher / examples/images, skills/visual-ip-illustrations/assets/examples / GitHub README / Renee French attribution approved / Creative Commons Attribution 4.0 approved / local visual marker approved / route-isolation approved / Go logo boundary approved / official endorsement boundary approved / article-metaphor quality approved.";
}

function pendingCaiXukunPublicAssetApprovalLine() {
  return "- [ ] Cai Xukun public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: PENDING / reviewer / date / approval status / allowed directories / release channels / uploaded-image identity outcome / public-figure likeness boundary outcome / source-image context boundary outcome / route-isolation outcome / stylized mascot-only output outcome / article-metaphor quality outcome / public-sample decision.";
}

function completeCaiXukunPublicAssetApprovalLine(
  reviewDate = "2026-06-13",
  uploadedImageIdentityOutcome = "uploaded-image identity approved",
  publicFigureLikenessBoundaryOutcome = "public-figure likeness boundary approved",
  sourceImageContextBoundaryOutcome = "source-image context boundary approved",
  routeIsolationOutcome = "route-isolation approved",
  stylizedMascotOnlyOutputOutcome = "stylized mascot-only output approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
  publicSampleOutcome = "public-sample decision approved",
) {
  return `- [x] Cai Xukun public asset policy for \`examples/images/\`, \`examples/images-en/\`, and \`skills/visual-ip-illustrations/assets/examples/\`: APPROVED / Jane Reviewer / ${reviewDate} / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / release notes / ${uploadedImageIdentityOutcome} / ${publicFigureLikenessBoundaryOutcome} / ${sourceImageContextBoundaryOutcome} / ${routeIsolationOutcome} / ${stylizedMascotOnlyOutputOutcome} / ${articleMetaphorOutcome} / ${publicSampleOutcome}.`;
}

function currentCaiXukunPublicAssetApprovalLine() {
  return "- [x] Cai Xukun public asset policy for `examples/images/`, `examples/images-en/`, and `skills/visual-ip-illustrations/assets/examples/`: APPROVED / maintainer request / 2026-06-18 / approved / examples/images, examples/images-en, skills/visual-ip-illustrations/assets/examples / GitHub README Trust Bridge gallery / uploaded-image identity approved / public-figure likeness boundary approved / source-image context boundary approved / route-isolation approved / stylized mascot-only output approved / article-metaphor quality approved / public-sample decision approved.";
}

function pendingGeneratedCaiXukunSampleLine() {
  return "- [ ] Record generated sample review: PENDING / reviewer / date / approval status / internal review directories / public directories / release channels / uploaded-image identity outcome / public-figure likeness boundary outcome / source-image context boundary outcome / route-isolation outcome / stylized mascot-only output outcome / endorsement, affiliation, impersonation, campaign, advertising, fandom-promotion review outcome / article-metaphor quality outcome.";
}

function completeGeneratedCaiXukunSampleLine(
  reviewDate = "2026-06-13",
  uploadedImageIdentityOutcome = "uploaded-image identity approved",
  publicFigureLikenessBoundaryOutcome = "public-figure likeness boundary approved",
  sourceImageContextBoundaryOutcome = "source-image context boundary approved",
  routeIsolationOutcome = "route-isolation approved",
  stylizedMascotOnlyOutputOutcome = "stylized mascot-only output approved",
  claimReviewOutcome = "endorsement affiliation impersonation campaign advertising fandom-promotion review approved",
  articleMetaphorOutcome = "article-metaphor quality approved",
) {
  return `- [x] Record generated sample review: APPROVED / Jane Reviewer / ${reviewDate} / approved / assets/<article-slug>-caixukun / examples/images, skills/visual-ip-illustrations/assets/examples / release notes / ${uploadedImageIdentityOutcome} / ${publicFigureLikenessBoundaryOutcome} / ${sourceImageContextBoundaryOutcome} / ${routeIsolationOutcome} / ${stylizedMascotOnlyOutputOutcome} / ${claimReviewOutcome} / ${articleMetaphorOutcome}.`;
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
  assert.match(result.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});

test("validator reports Task 1 contract checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = [
    "PKG-SHAPE-001",
    "SKILL-FM-001",
    "SKILL-LANG-001",
    "SKILL-LANG-002",
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
  mkdirSync(path.join(fixtureRoot, "skills", "visual-ip-illustrations", "agents"), { recursive: true });
  mkdirSync(path.join(fixtureRoot, "skills", "visual-ip-illustrations", "references"), { recursive: true });
  mkdirSync(path.join(fixtureRoot, "scripts"), { recursive: true });

  writeFileSync(
    path.join(fixtureRoot, "scripts", "validate-skill-package.mjs"),
    readFileSync(scriptPath, "utf8"),
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "skills", "visual-ip-illustrations", "SKILL.md"),
    "---\nname: wrong\n---\n\n# Broken\n",
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "skills", "visual-ip-illustrations", "agents", "openai.yaml"),
    "interface:\n  display_name: Test\npolicy:\n  allow_implicit_invocation: false\n",
    "utf8",
  );
  writeFileSync(
    path.join(fixtureRoot, "skills", "visual-ip-illustrations", "references", "routing.md"),
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
  assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=\d+ skipped=0/);
});

test("validator fixture rejects Chinese-only SKILL frontmatter scope", () => {
  const fixtureRoot = copyFixture("skill-frontmatter-language-scope");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      "Visual IP Illustrations generates selectable visual-IP article-body illustrations for articles, posts, blogs",
      "Visual IP Illustrations generates selectable visual-IP article-body illustrations for Chinese articles, posts, blogs",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SKILL-LANG-001 /);
    assert.match(result.stdout, /language-neutral article scope/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Han title examples in SKILL runtime text", () => {
  const fixtureRoot = copyFixture("skill-runtime-han-title-examples");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      "top-left titles such as `Common Pitfalls`, `Flowchart`, or `System Architecture`",
      "top-left titles such as `常见坑`, `流程图`, or `系统架构图`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SKILL-LANG-002 /);
    assert.match(result.stdout, /expected no Han characters in runtime entrypoint/);
    assert.match(result.stdout, /常见坑/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Chinese-only agent metadata scope", () => {
  const fixtureRoot = copyFixture("agent-metadata-language-scope");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
      "Visual IP Illustrations generates selectable visual-IP article-body illustration assets for articles.",
      "Visual IP Illustrations generates selectable visual-IP article-body illustration assets for Chinese articles.",
    );
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
      "article-body illustrations for this article.",
      "article-body illustrations for this Chinese article.",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] AGENT-LANG-001 /);
    assert.match(result.stdout, /language-neutral article scope/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
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
    "skills",
    "visual-ip-illustrations",
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
  assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/littlebox\/prompt-template\.md/);
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
    "skills",
    "visual-ip-illustrations",
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
  assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/tom\/rights\.md/);
  assert.match(result.stdout, /observed missing marker/);
});

test("validator emits the full Phase 47 matrix with zero failures", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const resultLines = result.stdout.split("\n").filter((line) => /^\[(PASS|FAIL|SKIP)\]/.test(line));
  assert.equal(resultLines.length, requiredCheckIds.length);
  assert.equal(resultLines.every((line) => line.startsWith("[PASS]")), true);
  assert.deepEqual(
    resultLines.map((line) => line.match(/^\[PASS\] ([A-Z0-9-]+) /)?.[1]),
    requiredCheckIds,
  );
  assert.match(result.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
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

test("validator reports Phase 47 validation checks in stable order", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  const expectedIds = [
    "VAL-ENGLISH-001",
    "VAL-ENGLISH-002",
    "VAL-LANGUAGE-001",
    "VAL-COMPAT-001",
    "VAL-RELEASE-001",
    "VAL-OPENCLAW-EVIDENCE-001",
    "VAL-GOPHER-EVIDENCE-001",
    "VAL-CAIXUKUN-EVIDENCE-001",
  ];

  let lastIndex = result.stdout.indexOf("[PASS] LANG-SCAN-002 ");
  assert.ok(lastIndex >= 0, "Phase 47 validation checks should follow language scan checks");
  for (const id of expectedIds) {
    const index = result.stdout.indexOf(`[PASS] ${id} `);
    assert.ok(index > lastIndex, `${id} should appear after the previous validation check`);
    lastIndex = index;
  }
  const boundaryIndex = result.stdout.indexOf("[PASS] BOUNDARY-IMG-001 ");
  assert.ok(boundaryIndex > lastIndex, "boundary checks should follow validation evidence checks");
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
  assert.match(result.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
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
    replaceAllInFixture(fixtureRoot, path.join("skills", "visual-ip-illustrations", "SKILL.md"), "$visual-ip-illustrations", "$legacy-only");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/SKILL\.md/);
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
    replaceAllInFixture(fixtureRoot, path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"), "$ian-xiaohei-illustrations", "$visual-ip-legacy");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-001 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-COMPAT-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/agents\/openai\.yaml/);
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
  const relativePath = path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "style-dna.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "# \n\n", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-ENGLISH-002 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/xiaohei\/style-dna\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "| `false` | `seal` |",
      "| `false` | `cloud` |",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-CANON-004 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /expected seal output_suffix=seal; observed cloud/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks rebrand output path stability", () => {
  const fixtureRoot = copyFixture("rebrand-path-stability");
  try {
    for (const relativePath of [
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
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
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
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
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
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
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
    ]) {
      replaceAllInFixture(fixtureRoot, relativePath, "$ian-xiaohei-illustrations", "$visual-ip-legacy");
    }

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REBRAND-COMPAT-002 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/SKILL\.md|README\.md|examples\/prompts\.md/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks Chinese route aliases through Phase 28", () => {
  const fixtureRoot = copyFixture("val-route-alias");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "`Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
      "`Tom`, `Tom Cat`, `Tom and Jerry`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
    assert.match(result.stdout, /\[FAIL\] VAL-COMPAT-001 /);
    assert.match(result.stdout, /observed missing marker\(s\): 汤姆, 汤姆猫/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture locks raw output path stability through Phase 28", () => {
  const fixtureRoot = copyFixture("val-raw-output-path");
  try {
    for (const relativePath of [
      path.join("skills", "visual-ip-illustrations", "SKILL.md"),
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
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
  const skillText = readFileSync(path.join(repoRoot, "skills", "visual-ip-illustrations", "SKILL.md"), "utf8");
  const routingText = readFileSync(path.join(repoRoot, "skills", "visual-ip-illustrations", "references", "routing.md"), "utf8");
  const readmeText = readFileSync(path.join(repoRoot, "README.md"), "utf8");

  const frontmatter = validators.parseFrontmatter(skillText);
  assert.equal(frontmatter.data.name, "visual-ip-illustrations");
  assert.ok(frontmatter.data.description.includes("localized route aliases preserved in references/routing.md"));
  assert.ok(!frontmatter.data.description.includes("Chinese articles"));

  const routes = validators.parseMarkdownTable(routingText, "IP Routes");
  assert.equal(routes.length, 8);
  assert.deepEqual(routes.map((route) => route.id), [
    "xiaohei",
    "littlebox",
    "tom",
    "ferris",
    "seal",
    "openclaw",
    "gopher",
    "caixukun",
  ]);
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
  assert.deepEqual(validators.splitRouteAliases(routes[6].aliases), [
    "Go Gopher",
    "Gopher",
    "golang gopher",
    "Go mascot",
    "Go 吉祥物",
    "Gopher 吉祥物",
  ]);
  assert.equal(routes[6].output_suffix, "gopher");
  assert.equal(routes[6].default, "false");
  assert.equal(routes[6].status, "source-reviewed");
  assert.deepEqual(validators.splitRouteAliases(routes[7].aliases), [
    "蔡徐坤",
    "Cai Xukun",
    "caixukun",
    "cxk",
  ]);
  assert.equal(routes[7].output_suffix, "caixukun");
  assert.equal(routes[7].default, "false");
  assert.equal(routes[7].status, "gated-public-figure");
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
  assert.deepEqual(validators.splitRouteCell(routes[6].required_references), [
    "references/ips/gopher/index.md",
    "references/ips/gopher/source.md",
    "references/ips/gopher/style-dna.md",
    "references/ips/gopher/gopher-ip.md",
    "references/ips/gopher/composition-patterns.md",
    "references/ips/gopher/prompt-template.md",
    "references/ips/gopher/qa-checklist.md",
  ]);
  assert.deepEqual(validators.splitRouteCell(routes[7].required_references), [
    "references/ips/caixukun/index.md",
    "references/ips/caixukun/source.md",
    "references/ips/caixukun/style-dna.md",
    "references/ips/caixukun/caixukun-ip.md",
    "references/ips/caixukun/composition-patterns.md",
    "references/ips/caixukun/prompt-template.md",
    "references/ips/caixukun/qa-checklist.md",
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
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-gopher/"));
  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-caixukun/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-littlebox/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-tom/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-ferris/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-seal/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-openclaw/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-gopher/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-caixukun/"));
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
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(approvedSealos.identityOutcomePresent, true);
  assert.equal(approvedSealos.noLogoOutcomePresent, true);

  const pendingGeneratedSealosApproval = validators.parseGeneratedSealSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedSealosApproval.found, true);
  assert.equal(pendingGeneratedSealosApproval.checked, false);
  assert.equal(pendingGeneratedSealosApproval.complete, false);
  assert.equal(pendingGeneratedSealosApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedSealosApproval.publicDirectoriesPresent, false);

  const currentOpenClawApproval = validators.parsePublicOpenClawSampleApproval(releaseChecklistText);
  assert.equal(currentOpenClawApproval.found, true);
  assert.equal(currentOpenClawApproval.checked, true);
  assert.equal(currentOpenClawApproval.complete, true);
  assert.equal(currentOpenClawApproval.allowedDirectoriesPresent, true);
  assert.equal(currentOpenClawApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(currentOpenClawApproval.sourceLicenseOutcomePresent, true);
  assert.equal(currentOpenClawApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentOpenClawApproval.articleMetaphorOutcomePresent, true);
  assert.deepEqual(currentOpenClawApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);

  const pendingOpenClawText = releaseChecklistText.replace(
    currentOpenClawPublicAssetApprovalLine(),
    pendingOpenClawPublicAssetApprovalLine(),
  );
  const pendingOpenClawApproval = validators.parsePublicOpenClawSampleApproval(pendingOpenClawText);
  assert.equal(pendingOpenClawApproval.found, true);
  assert.equal(pendingOpenClawApproval.checked, false);
  assert.equal(pendingOpenClawApproval.complete, false);
  assert.equal(pendingOpenClawApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingOpenClawApproval.uploadedLogoIdentityOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.sourceLicenseOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.routeIsolationOutcomePresent, false);
  assert.equal(pendingOpenClawApproval.articleMetaphorOutcomePresent, false);

  const approvedOpenClawText = releaseChecklistText.replace(
    currentOpenClawPublicAssetApprovalLine(),
    completeOpenClawPublicAssetApprovalLine(),
  );
  const approvedOpenClaw = validators.parsePublicOpenClawSampleApproval(approvedOpenClawText);
  assert.equal(approvedOpenClaw.complete, true);
  assert.deepEqual(approvedOpenClaw.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(approvedOpenClaw.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(approvedOpenClaw.sourceLicenseOutcomePresent, true);
  assert.equal(approvedOpenClaw.routeIsolationOutcomePresent, true);
  assert.equal(approvedOpenClaw.articleMetaphorOutcomePresent, true);

  const currentGeneratedOpenClawApproval = validators.parseGeneratedOpenClawSampleApproval(releaseChecklistText);
  assert.equal(currentGeneratedOpenClawApproval.found, true);
  assert.equal(currentGeneratedOpenClawApproval.checked, true);
  assert.equal(currentGeneratedOpenClawApproval.complete, true);
  assert.equal(currentGeneratedOpenClawApproval.internalReviewDirectoriesPresent, true);
  assert.equal(currentGeneratedOpenClawApproval.publicDirectoriesPresent, true);
  assert.equal(currentGeneratedOpenClawApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(currentGeneratedOpenClawApproval.sourceLicenseOutcomePresent, true);
  assert.equal(currentGeneratedOpenClawApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentGeneratedOpenClawApproval.articleMetaphorOutcomePresent, true);

  const pendingGeneratedOpenClawText = releaseChecklistText.replace(
    currentGeneratedOpenClawSampleLine(),
    pendingGeneratedOpenClawSampleLine(),
  );
  const pendingGeneratedOpenClawApproval =
    validators.parseGeneratedOpenClawSampleApproval(pendingGeneratedOpenClawText);
  assert.equal(pendingGeneratedOpenClawApproval.found, true);
  assert.equal(pendingGeneratedOpenClawApproval.checked, false);
  assert.equal(pendingGeneratedOpenClawApproval.complete, false);
  assert.equal(pendingGeneratedOpenClawApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedOpenClawApproval.publicDirectoriesPresent, false);

  const currentGopherApproval = validators.parsePublicGopherSampleApproval(releaseChecklistText);
  assert.equal(currentGopherApproval.found, true);
  assert.equal(currentGopherApproval.checked, true);
  assert.equal(currentGopherApproval.complete, true);
  assert.equal(currentGopherApproval.allowedDirectoriesPresent, true);
  assert.equal(currentGopherApproval.sourceOutcomePresent, true);
  assert.equal(currentGopherApproval.attributionOutcomePresent, true);
  assert.equal(currentGopherApproval.licenseOutcomePresent, true);
  assert.equal(currentGopherApproval.visualOutcomePresent, true);
  assert.equal(currentGopherApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentGopherApproval.logoBoundaryOutcomePresent, true);
  assert.equal(currentGopherApproval.endorsementBoundaryOutcomePresent, true);
  assert.equal(currentGopherApproval.articleMetaphorOutcomePresent, true);
  assert.equal(currentGopherApproval.publicSampleOutcomePresent, true);
  assert.deepEqual(currentGopherApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);

  const pendingGopherText = releaseChecklistText.replace(
    currentGopherPublicAssetApprovalLine(),
    pendingGopherPublicAssetApprovalLine(),
  );
  const pendingGopherApproval = validators.parsePublicGopherSampleApproval(pendingGopherText);
  assert.equal(pendingGopherApproval.found, true);
  assert.equal(pendingGopherApproval.checked, false);
  assert.equal(pendingGopherApproval.complete, false);
  assert.equal(pendingGopherApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingGopherApproval.sourceOutcomePresent, false);
  assert.equal(pendingGopherApproval.attributionOutcomePresent, false);
  assert.equal(pendingGopherApproval.licenseOutcomePresent, false);
  assert.equal(pendingGopherApproval.visualOutcomePresent, false);
  assert.equal(pendingGopherApproval.routeIsolationOutcomePresent, false);
  assert.equal(pendingGopherApproval.logoBoundaryOutcomePresent, false);
  assert.equal(pendingGopherApproval.endorsementBoundaryOutcomePresent, false);
  assert.equal(pendingGopherApproval.articleMetaphorOutcomePresent, false);
  assert.equal(pendingGopherApproval.publicSampleOutcomePresent, false);

  const approvedGopherText = releaseChecklistText.replace(
    currentGopherPublicAssetApprovalLine(),
    completeGopherPublicAssetApprovalLine(),
  );
  const approvedGopher = validators.parsePublicGopherSampleApproval(approvedGopherText);
  assert.equal(approvedGopher.complete, true);
  assert.deepEqual(approvedGopher.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(approvedGopher.sourceOutcomePresent, true);
  assert.equal(approvedGopher.attributionOutcomePresent, true);
  assert.equal(approvedGopher.licenseOutcomePresent, true);
  assert.equal(approvedGopher.visualOutcomePresent, true);
  assert.equal(approvedGopher.routeIsolationOutcomePresent, true);
  assert.equal(approvedGopher.logoBoundaryOutcomePresent, true);
  assert.equal(approvedGopher.endorsementBoundaryOutcomePresent, true);
  assert.equal(approvedGopher.articleMetaphorOutcomePresent, true);
  assert.equal(approvedGopher.publicSampleOutcomePresent, true);

  const currentGeneratedGopherApproval = validators.parseGeneratedGopherSampleApproval(releaseChecklistText);
  assert.equal(currentGeneratedGopherApproval.found, true);
  assert.equal(currentGeneratedGopherApproval.checked, true);
  assert.equal(currentGeneratedGopherApproval.complete, true);
  assert.equal(currentGeneratedGopherApproval.internalReviewDirectoriesPresent, true);
  assert.equal(currentGeneratedGopherApproval.publicDirectoriesPresent, true);
  assert.equal(currentGeneratedGopherApproval.attributionOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.licenseOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.visualOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.logoBoundaryOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.endorsementBoundaryOutcomePresent, true);
  assert.equal(currentGeneratedGopherApproval.articleMetaphorOutcomePresent, true);

  const pendingGeneratedGopherText = releaseChecklistText.replace(
    currentGeneratedGopherSampleLine(),
    pendingGeneratedGopherSampleLine(),
  );
  const pendingGeneratedGopherApproval =
    validators.parseGeneratedGopherSampleApproval(pendingGeneratedGopherText);
  assert.equal(pendingGeneratedGopherApproval.found, true);
  assert.equal(pendingGeneratedGopherApproval.checked, false);
  assert.equal(pendingGeneratedGopherApproval.complete, false);
  assert.equal(pendingGeneratedGopherApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedGopherApproval.publicDirectoriesPresent, false);

  const currentCaiXukunApproval = validators.parsePublicCaiXukunSampleApproval(releaseChecklistText);
  assert.equal(currentCaiXukunApproval.found, true);
  assert.equal(currentCaiXukunApproval.checked, true);
  assert.equal(currentCaiXukunApproval.complete, true);
  assert.equal(currentCaiXukunApproval.allowedDirectoriesPresent, true);
  assert.equal(currentCaiXukunApproval.uploadedImageIdentityOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.publicFigureLikenessBoundaryOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.sourceImageContextBoundaryOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.stylizedMascotOnlyOutputOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.articleMetaphorOutcomePresent, true);
  assert.equal(currentCaiXukunApproval.publicSampleOutcomePresent, true);
  assert.deepEqual(currentCaiXukunApproval.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);

  const pendingCaiXukunText = releaseChecklistText.replace(
    currentCaiXukunPublicAssetApprovalLine(),
    pendingCaiXukunPublicAssetApprovalLine(),
  );
  const pendingCaiXukunApproval = validators.parsePublicCaiXukunSampleApproval(pendingCaiXukunText);
  assert.equal(pendingCaiXukunApproval.found, true);
  assert.equal(pendingCaiXukunApproval.checked, false);
  assert.equal(pendingCaiXukunApproval.complete, false);
  assert.equal(pendingCaiXukunApproval.allowedDirectoriesPresent, false);
  assert.equal(pendingCaiXukunApproval.uploadedImageIdentityOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.publicFigureLikenessBoundaryOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.sourceImageContextBoundaryOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.routeIsolationOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.stylizedMascotOnlyOutputOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.articleMetaphorOutcomePresent, false);
  assert.equal(pendingCaiXukunApproval.publicSampleOutcomePresent, false);

  const approvedCaiXukunText = releaseChecklistText.replace(
    currentCaiXukunPublicAssetApprovalLine(),
    completeCaiXukunPublicAssetApprovalLine(),
  );
  const approvedCaiXukun = validators.parsePublicCaiXukunSampleApproval(approvedCaiXukunText);
  assert.equal(approvedCaiXukun.complete, true);
  assert.deepEqual(approvedCaiXukun.allowedDirectories, [
    "examples/images",
    "examples/images-en",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(approvedCaiXukun.uploadedImageIdentityOutcomePresent, true);
  assert.equal(approvedCaiXukun.publicFigureLikenessBoundaryOutcomePresent, true);
  assert.equal(approvedCaiXukun.sourceImageContextBoundaryOutcomePresent, true);
  assert.equal(approvedCaiXukun.routeIsolationOutcomePresent, true);
  assert.equal(approvedCaiXukun.stylizedMascotOnlyOutputOutcomePresent, true);
  assert.equal(approvedCaiXukun.articleMetaphorOutcomePresent, true);
  assert.equal(approvedCaiXukun.publicSampleOutcomePresent, true);

  const pendingGeneratedCaiXukunApproval = validators.parseGeneratedCaiXukunSampleApproval(releaseChecklistText);
  assert.equal(pendingGeneratedCaiXukunApproval.found, true);
  assert.equal(pendingGeneratedCaiXukunApproval.checked, false);
  assert.equal(pendingGeneratedCaiXukunApproval.complete, false);
  assert.equal(pendingGeneratedCaiXukunApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingGeneratedCaiXukunApproval.publicDirectoriesPresent, false);

  const completeGeneratedText = releaseChecklistText.replace(
    pendingGeneratedFerrisSampleLine(),
    completeGeneratedFerrisSampleLine(),
  );
  const completeGeneratedApproval = validators.parseGeneratedFerrisSampleApproval(completeGeneratedText);
  assert.equal(completeGeneratedApproval.complete, true);
  assert.deepEqual(completeGeneratedApproval.internalReviewDirectories, ["assets/<article-slug>-ferris"]);
  assert.deepEqual(completeGeneratedApproval.publicDirectories, [
    "examples/images",
    "skills/visual-ip-illustrations/assets/examples",
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
    "skills/visual-ip-illustrations/assets/examples",
  ]);

  const completeGeneratedOpenClawText = releaseChecklistText.replace(
    currentGeneratedOpenClawSampleLine(),
    completeGeneratedOpenClawSampleLine(),
  );
  const completeGeneratedOpenClawApproval =
    validators.parseGeneratedOpenClawSampleApproval(completeGeneratedOpenClawText);
  assert.equal(completeGeneratedOpenClawApproval.complete, true);
  assert.deepEqual(completeGeneratedOpenClawApproval.internalReviewDirectories, ["assets/<article-slug>-openclaw"]);
  assert.deepEqual(completeGeneratedOpenClawApproval.publicDirectories, [
    "examples/images",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(completeGeneratedOpenClawApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.sourceLicenseOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeGeneratedOpenClawApproval.articleMetaphorOutcomePresent, true);

  const completeGeneratedGopherText = releaseChecklistText.replace(
    currentGeneratedGopherSampleLine(),
    completeGeneratedGopherSampleLine(),
  );
  const completeGeneratedGopherApproval =
    validators.parseGeneratedGopherSampleApproval(completeGeneratedGopherText);
  assert.equal(completeGeneratedGopherApproval.complete, true);
  assert.deepEqual(completeGeneratedGopherApproval.internalReviewDirectories, ["assets/<article-slug>-gopher"]);
  assert.deepEqual(completeGeneratedGopherApproval.publicDirectories, [
    "examples/images",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(completeGeneratedGopherApproval.attributionOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.licenseOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.visualOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.logoBoundaryOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.endorsementBoundaryOutcomePresent, true);
  assert.equal(completeGeneratedGopherApproval.articleMetaphorOutcomePresent, true);

  const completeGeneratedCaiXukunText = releaseChecklistText.replace(
    pendingGeneratedCaiXukunSampleLine(),
    completeGeneratedCaiXukunSampleLine(),
  );
  const completeGeneratedCaiXukunApproval =
    validators.parseGeneratedCaiXukunSampleApproval(completeGeneratedCaiXukunText);
  assert.equal(completeGeneratedCaiXukunApproval.complete, true);
  assert.deepEqual(completeGeneratedCaiXukunApproval.internalReviewDirectories, ["assets/<article-slug>-caixukun"]);
  assert.deepEqual(completeGeneratedCaiXukunApproval.publicDirectories, [
    "examples/images",
    "skills/visual-ip-illustrations/assets/examples",
  ]);
  assert.equal(completeGeneratedCaiXukunApproval.uploadedImageIdentityOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.publicFigureLikenessBoundaryOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.sourceImageContextBoundaryOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.stylizedMascotOnlyOutputOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.claimReviewOutcomePresent, true);
  assert.equal(completeGeneratedCaiXukunApproval.articleMetaphorOutcomePresent, true);
});

test("validator fixture rejects Tom route metadata drift", () => {
  const fixtureRoot = copyFixture("tom-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "`Tom`, `Tom Cat`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
      "`Tom`, `Tom and Jerry`, `汤姆`, `汤姆猫`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TOM-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "`Ferris`, `Rust mascot`, `Rust crab`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`",
      "`Ferris`, `Rust mascot`, `Rustacean`, `Rust 吉祥物`, `Rust 螃蟹`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Rust crab/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture requires Tom canonical pack files", () => {
  const fixtureRoot = copyFixture("tom-pack");
  const relativePath = path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "qa-checklist.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REFS-TOM-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/tom/);
    assert.match(
      result.stdout,
      /observed empty file\(s\): skills\/visual-ip-illustrations\/references\/ips\/tom\/qa-checklist\.md/,
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "prompt-template.md"),
      "Rights-status note: Tom is a `gated-authorized` protected-character route; check `rights.md` for authorization scope and distribution boundary.",
      "Rights boundary note: Tom is a gated authorized protected-character route.",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] PROMPT-TOM-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/tom\/prompt-template\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "source.md"),
      "Rust Foundation trademark policy context",
      "Rust trademark review context",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/ferris\/source\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "source.md"),
      "# Seal Source Record",
      "# Seal Source Review",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-SEAL-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/seal\/source\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "source.md"),
      "MIT License",
      "permissive license",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "source.md"),
      "red round body",
      "round body",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-OPENCLAW-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/openclaw\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): MIT License/);
    assert.match(result.stdout, /red round body/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Seal route metadata drift", () => {
  const fixtureRoot = copyFixture("seal-route");
  try {
    const routingPath = path.join("skills", "visual-ip-illustrations", "references", "routing.md");
    replaceAllInFixture(fixtureRoot, routingPath, "| `seal` | Seal |", "| `sealos` | Seal |");
    replaceAllInFixture(fixtureRoot, routingPath, "| `false` | `seal` |", "| `false` | `sealos` |");
    replaceAllInFixture(fixtureRoot, routingPath, "assets/&lt;article-slug&gt;-seal/", "assets/&lt;article-slug&gt;-sealos/");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TABLE-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-SEAL-001 /);
    assert.match(result.stdout, /\[FAIL\] ROUTE-PATHS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /expected rebrand route ids xiaohei, littlebox, tom, ferris, seal, openclaw, gopher, caixukun; observed xiaohei, littlebox, tom, ferris, sealos, openclaw, gopher, caixukun/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Seal pack, prompt, and QA marker drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "index.md"),
      "Public-sample boundary",
      "REFS-SEAL-001",
    ],
    [
      "prompt",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "Seal planning fields gate",
      "PROMPT-SEAL-001",
    ],
    [
      "qa",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "qa-checklist.md"),
      "Seal QA route leakage failure",
      "QA-SEAL-001",
    ],
    [
      "identity",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "seal-ip.md"),
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
        ? path.join("skills", "visual-ip-illustrations", "references", "ips", "seal")
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "index.md"),
      "Public-sample boundary",
      "REFS-OPENCLAW-001",
    ],
    [
      "prompt",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "prompt-template.md"),
      "OpenClaw planning fields gate",
      "PROMPT-OPENCLAW-001",
    ],
    [
      "qa",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "qa-checklist.md"),
      "OpenClaw QA route leakage failure",
      "QA-OPENCLAW-001",
    ],
    [
      "identity",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "openclaw-ip.md"),
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
        ? path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw")
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
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
      "explicit Seal active product-neutral hoodie seal route",
      "AGENT-SEAL-001",
    ],
    ["routing", path.join("skills", "visual-ip-illustrations", "references", "routing.md"), "source-history", "DOC-SEAL-001"],
    ["examples", "examples/prompts.md", "## Route Smoke: Explicit Seal", "SMOKE-SEAL-001"],
    [
      "mixed",
      "examples/prompts.md",
      "Seal canonical pack is at `skills/visual-ip-illustrations/references/ips/seal/`",
      "SMOKE-MIXED-SEAL-001",
    ],
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

function assertOpenClawSurfaceDrift(name, relativePath, searchValue, expectedId) {
  const fixtureRoot = copyFixture(`openclaw-${name}-parity-drift`);
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

test("validator fixture reports OpenClaw metadata drift", () => {
  assertOpenClawSurfaceDrift(
    "agent",
    path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
    "explicit OpenClaw logo-mascot route (source-reviewed)",
    "AGENT-OPENCLAW-001",
  );
});

test("validator fixture reports OpenClaw docs drift", () => {
  assertOpenClawSurfaceDrift(
    "docs",
    "README.md",
    "skills/visual-ip-illustrations/references/ips/openclaw/source.md",
    "DOC-OPENCLAW-001",
  );
});

test("validator fixture reports localized OpenClaw README drift", () => {
  assertOpenClawSurfaceDrift(
    "localized-readme",
    path.join("readmes", "README.zh.md"),
    "assets/&lt;article-slug&gt;-openclaw/",
    "DOC-OPENCLAW-001",
  );
});

test("validator fixture reports OpenClaw NOTICE drift", () => {
  assertOpenClawSurfaceDrift(
    "notice",
    "NOTICE.md",
    "OpenClaw Source Attribution and Public Sample Gate",
    "NOTICE-OPENCLAW-001",
  );
});

test("validator fixture reports OpenClaw smoke drift", () => {
  assertOpenClawSurfaceDrift(
    "smoke",
    "examples/prompts.md",
    "## Route Smoke: Explicit OpenClaw",
    "SMOKE-OPENCLAW-001",
  );
});

test("validator fixture reports OpenClaw mixed-IP drift", () => {
  assertOpenClawSurfaceDrift(
    "mixed",
    "examples/prompts.md",
    "six separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, and OpenClaw",
    "SMOKE-MIXED-OPENCLAW-001",
  );
});

function assertGopherSurfaceDrift(name, relativePath, searchValue, expectedId) {
  const fixtureRoot = copyFixture(`gopher-${name}-parity-drift`);
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

test("validator fixture rejects Go Gopher route metadata drift", () => {
  const fixtureRoot = copyFixture("gopher-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "`Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`, `Go 吉祥物`, `Gopher 吉祥物`",
      "`Go Gopher`, `Gopher`, `golang gopher`, `Go mascot`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-GOPHER-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Go 吉祥物, Gopher 吉祥物/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects stale seven-route assumptions", () => {
  const fixtureRoot = copyFixture("gopher-route-count");
  try {
    const routingPath = path.join("skills", "visual-ip-illustrations", "references", "routing.md");
    replaceAllInFixture(fixtureRoot, routingPath, "| `gopher` | Go Gopher |", "| `go-gopher` | Go Gopher |");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-TABLE-001 /);
    assert.match(result.stdout, /\[FAIL\] REBRAND-ROUTE-001 /);
    assert.match(result.stdout, /expected rebrand route ids xiaohei, littlebox, tom, ferris, seal, openclaw, gopher, caixukun/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Go Gopher source marker drift", () => {
  const fixtureRoot = copyFixture("gopher-source");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "source.md"),
      "Renee French",
      "source artist",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "source.md"),
      "Creative Commons Attribution 4.0",
      "CC BY",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-GOPHER-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/gopher\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): Renee French/);
    assert.match(result.stdout, /Creative Commons Attribution 4\.0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Go Gopher pack, prompt, and QA marker drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "index.md"),
      "Public-sample boundary",
      "REFS-GOPHER-001",
    ],
    [
      "prompt",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "prompt-template.md"),
      "Go Gopher planning fields gate",
      "PROMPT-GOPHER-001",
    ],
    [
      "qa",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "qa-checklist.md"),
      "Go Gopher QA route leakage failure",
      "QA-GOPHER-001",
    ],
    [
      "identity",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "gopher-ip.md"),
      "Go Gopher must perform the central cognitive article action",
      "IP-GOPHER-001",
    ],
  ]) {
    const fixtureRoot = copyFixture(`gopher-${name}-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      const expectedPath = expectedId === "IP-GOPHER-001" || expectedId === "REFS-GOPHER-001"
        ? path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher")
        : relativePath;
      assert.match(result.stdout, new RegExp(expectedPath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Go Gopher metadata drift", () => {
  assertGopherSurfaceDrift(
    "agent",
    path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
    "explicit Go Gopher article-mascot route (source-reviewed)",
    "AGENT-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher docs drift", () => {
  assertGopherSurfaceDrift(
    "docs",
    "README.md",
    "skills/visual-ip-illustrations/references/ips/gopher/source.md",
    "DOC-GOPHER-001",
  );
});

test("validator fixture reports localized Go Gopher README drift", () => {
  assertGopherSurfaceDrift(
    "localized-readme",
    path.join("readmes", "README.zh.md"),
    "assets/&lt;article-slug&gt;-gopher/",
    "DOC-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher NOTICE drift", () => {
  assertGopherSurfaceDrift(
    "notice",
    "NOTICE.md",
    "Go Gopher Source Attribution and Public Sample Gate",
    "NOTICE-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher smoke drift", () => {
  assertGopherSurfaceDrift(
    "smoke",
    "examples/prompts.md",
    "### Smoke: Go Gopher source-reviewed route status",
    "SMOKE-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher mixed-IP drift", () => {
  assertGopherSurfaceDrift(
    "mixed",
    "examples/prompts.md",
    "Expected: Go Gopher variant group uses `skills/visual-ip-illustrations/references/ips/gopher/`",
    "SMOKE-MIXED-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher release gate drift", () => {
  assertGopherSurfaceDrift(
    "release",
    "RELEASE_CHECKLIST.md",
    "Go Gopher Source and License Review",
    "RELEASE-GOPHER-001",
  );
});

test("validator fixture reports Go Gopher release evidence drift", () => {
  const fixtureRoot = copyFixture("gopher-release-evidence");
  const evidencePath = path.join(
    fixtureRoot,
    ".planning",
    "phases",
    "42-go-gopher-validation-and-release-evidence",
    "42-RELEASE-EVIDENCE.md",
  );
  try {
    rmSync(evidencePath, { force: true });

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-GOPHER-EVIDENCE-001 /);
    assert.match(
      result.stdout,
      /\.planning\/phases\/42-go-gopher-validation-and-release-evidence\/42-RELEASE-EVIDENCE\.md/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

function assertCaiXukunSurfaceDrift(name, relativePath, searchValue, expectedId) {
  const fixtureRoot = copyFixture(`caixukun-${name}-parity-drift`);
  try {
    replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
    assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
    assert.match(result.stdout, /observed missing marker\(s\)|expected no rendered Cai Xukun assets|forbidden marker/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
}

test("validator fixture rejects Cai Xukun route metadata drift", () => {
  const fixtureRoot = copyFixture("caixukun-route");
  try {
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "routing.md"),
      "`蔡徐坤`, `Cai Xukun`, `caixukun`, `cxk`",
      "`Cai Xukun`, `caixukun`",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] ROUTE-CAIXUKUN-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/routing\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): 蔡徐坤, cxk/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Cai Xukun source marker drift", () => {
  const fixtureRoot = copyFixture("caixukun-source");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "source.md"),
      "uploaded reference image A",
      "uploaded reference image",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "source.md"),
      "green reference background is source-image context",
      "green reference background is calibration context",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] SOURCE-CAIXUKUN-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/caixukun\/source\.md/);
    assert.match(result.stdout, /observed missing marker\(s\): uploaded reference image A/);
    assert.match(result.stdout, /green reference background is source-image context/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Cai Xukun pack, prompt, QA, and identity drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "pack",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "index.md"),
      "Public generated Cai Xukun samples require release review",
      "REFS-CAIXUKUN-001",
    ],
    [
      "prompt",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "prompt-template.md"),
      "Cai Xukun planning fields gate",
      "PROMPT-CAIXUKUN-001",
    ],
    [
      "qa",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "qa-checklist.md"),
      "Cai Xukun QA route leakage failure",
      "QA-CAIXUKUN-001",
    ],
    [
      "identity",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "caixukun", "caixukun-ip.md"),
      "Cai Xukun must perform the central cognitive article action",
      "IP-CAIXUKUN-001",
    ],
  ]) {
    const fixtureRoot = copyFixture(`caixukun-${name}-drift`);
    try {
      replaceAllInFixture(fixtureRoot, relativePath, searchValue, `removed ${name} marker`);

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, new RegExp(`\\[FAIL\\] ${expectedId} `));
      assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/caixukun/);
      assert.match(result.stdout, /observed missing marker\(s\)/);
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Cai Xukun release surface drift", () => {
  for (const [name, relativePath, searchValue, expectedId] of [
    [
      "agent",
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
      "explicit Cai Xukun / 蔡徐坤 / caixukun / cxk stylized mascot-only route",
      "AGENT-CAIXUKUN-001",
    ],
    ["docs", "README.md", "skills/visual-ip-illustrations/references/ips/caixukun/source.md", "DOC-CAIXUKUN-001"],
    [
      "localized-readme",
      path.join("readmes", "README.zh.md"),
      "assets/&lt;article-slug&gt;-caixukun/",
      "DOC-CAIXUKUN-001",
    ],
    ["notice", "NOTICE.md", "Cai Xukun Source Boundary and Public Sample Gate", "NOTICE-CAIXUKUN-001"],
    ["smoke", "examples/prompts.md", "### Smoke: Cai Xukun gated-public-figure route status", "SMOKE-CAIXUKUN-001"],
    [
      "mixed",
      "examples/prompts.md",
      "eight separate variant groups: Xiaohei, Littlebox, Tom, Ferris, Seal, OpenClaw, Go Gopher, and Cai Xukun",
      "SMOKE-MIXED-CAIXUKUN-001",
    ],
    ["release", "RELEASE_CHECKLIST.md", "Cai Xukun Source Review", "RELEASE-CAIXUKUN-001"],
  ]) {
    assertCaiXukunSurfaceDrift(name, relativePath, searchValue, expectedId);
  }
});

test("validator fixture reports Cai Xukun release evidence drift", () => {
  const fixtureRoot = copyFixture("caixukun-release-evidence");
  const evidencePath = path.join(
    fixtureRoot,
    ".planning",
    "phases",
    "47-cai-xukun-validation-and-release-evidence",
    "47-RELEASE-EVIDENCE.md",
  );
  try {
    rmSync(evidencePath, { force: true });

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-CAIXUKUN-EVIDENCE-001 /);
    assert.match(
      result.stdout,
      /\.planning\/phases\/47-cai-xukun-validation-and-release-evidence\/47-RELEASE-EVIDENCE\.md/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports OpenClaw release evidence drift", () => {
  const fixtureRoot = copyFixture("openclaw-release-evidence");
  const evidencePath = path.join(
    fixtureRoot,
    ".planning",
    "phases",
    "37-openclaw-validation-and-release-evidence",
    "37-RELEASE-EVIDENCE.md",
  );
  try {
    rmSync(evidencePath, { force: true });

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] VAL-OPENCLAW-EVIDENCE-001 /);
    assert.match(
      result.stdout,
      /\.planning\/phases\/37-openclaw-validation-and-release-evidence\/37-RELEASE-EVIDENCE\.md/,
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Seal no-logo drift", () => {
  const fixtureRoot = copyFixture("seal-no-logo");
  try {
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "source.md"),
      "plain navy cap",
      "navy cap with a small Sealos logo",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "source.md"),
      "Logo-Free Identity Markers",
      "Logo-Bearing Identity Markers",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "prompt-template.md"),
      "logo-free note",
      "logo-bearing note",
    );
    replaceAllInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "qa-checklist.md"),
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
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/seal/);
    assert.match(result.stdout, /observed missing marker\(s\): plain navy cap/);
    assert.match(result.stdout, /Logo-Free Identity Markers/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture requires Ferris canonical pack files", () => {
  const fixtureRoot = copyFixture("ferris-pack");
  const relativePath = path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "qa-checklist.md");
  try {
    writeFileSync(path.join(fixtureRoot, relativePath), "", "utf8");

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] REFS-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/ferris/);
    assert.match(
      result.stdout,
      /observed empty file\(s\): skills\/visual-ip-illustrations\/references\/ips\/ferris\/qa-checklist\.md/,
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "prompt-template.md"),
      "Ferris planning fields gate",
      "Ferris planning format",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] PROMPT-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/ferris\/prompt-template\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "Ferris must perform the central cognitive action",
      "Ferris performs the route action",
    );
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "composition-patterns.md"),
      "Rust trademark-boundary gate",
      "Rust trademark review gate",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] IP-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/ferris/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "qa-checklist.md"),
      "Ferris QA source-reviewed gate",
      "Ferris QA route gate",
    );
    replaceInFixture(
      fixtureRoot,
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "qa-checklist.md"),
      "Ferris QA route leakage failure",
      "Ferris QA cross-route failure",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] QA-FERRIS-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/ferris\/qa-checklist\.md/);
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "qa-checklist.md"),
      "off-model Tom identity",
      "off-model identity",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] QA-TOM-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/tom\/qa-checklist\.md/);
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
      path.join("skills", "visual-ip-illustrations", "agents", "openai.yaml"),
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
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/agents\/openai\.yaml/);
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
  const relativePath = path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md");
  try {
    writeFileSync(
      path.join(fixtureRoot, relativePath),
      `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: Tom Cat\n`,
      "utf8",
    );

    const result = runFixtureValidator(fixtureRoot);

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[FAIL\] BOUNDARY-TOM-LEAK-001 /);
    assert.match(result.stdout, /skills\/visual-ip-illustrations\/references\/ips\/xiaohei\/xiaohei-ip\.md/);
    assert.match(result.stdout, /observed forbidden marker\(s\): Tom Cat/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture reports Ferris leakage in non-Ferris packs", () => {
  for (const [name, relativePath, marker] of [
    ["xiaohei", path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"), "Ferris"],
    [
      "littlebox",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "Rustacean",
    ],
    ["tom", path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "tom-ip.md"), "Rust trademark boundary"],
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "Sealos Seal",
    ],
    [
      "littlebox",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "uploaded-image-canonical",
    ],
    ["tom", path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "tom-ip.md"), "brand-owned"],
    [
      "ferris",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
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
      path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "OpenClaw logo",
    ],
    [
      "littlebox",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "uploaded-logo authority",
    ],
    ["tom", path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "tom-ip.md"), "OpenClaw mascot"],
    [
      "ferris",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "references/ips/openclaw",
    ],
    ["seal", path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "seal-ip.md"), "OpenClaw 吉祥物"],
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

test("validator fixture reports Go Gopher leakage in non-Go-Gopher packs", () => {
  for (const [name, relativePath, marker] of [
    [
      "xiaohei",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "Go Gopher",
    ],
    [
      "littlebox",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "gopher.png",
    ],
    ["tom", path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "tom-ip.md"), "Renee French"],
    [
      "ferris",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "Creative Commons Attribution 4.0",
    ],
    ["seal", path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "seal-ip.md"), "Go logo boundary"],
    [
      "openclaw",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "openclaw-ip.md"),
      "references/ips/gopher",
    ],
  ]) {
    const fixtureRoot = copyFixture(`gopher-leak-${name}`);
    try {
      writeFileSync(
        path.join(fixtureRoot, relativePath),
        `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: ${marker}\n`,
        "utf8",
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-GOPHER-LEAK-001 /);
      assert.match(result.stdout, new RegExp(relativePath.split(path.sep).join("\\/").replace(/\./g, "\\.")));
      assert.match(result.stdout, new RegExp(`observed forbidden marker\\(s\\): .*${marker}`));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture reports Cai Xukun leakage in non-Cai-Xukun packs", () => {
  for (const [name, relativePath, marker] of [
    [
      "xiaohei",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "xiaohei", "xiaohei-ip.md"),
      "Cai Xukun",
    ],
    [
      "littlebox",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "littlebox", "littlebox-ip.md"),
      "references/ips/caixukun",
    ],
    ["tom", path.join("skills", "visual-ip-illustrations", "references", "ips", "tom", "tom-ip.md"), "蔡徐坤"],
    [
      "ferris",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "ferris", "ferris-ip.md"),
      "public-figure likeness boundary",
    ],
    [
      "seal",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "seal", "seal-ip.md"),
      "uploaded reference image A",
    ],
    [
      "openclaw",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "openclaw", "openclaw-ip.md"),
      "assets/<article-slug>-caixukun/",
    ],
    [
      "gopher",
      path.join("skills", "visual-ip-illustrations", "references", "ips", "gopher", "gopher-ip.md"),
      "stylized mascot-only output",
    ],
  ]) {
    const fixtureRoot = copyFixture(`caixukun-leak-${name}`);
    try {
      writeFileSync(
        path.join(fixtureRoot, relativePath),
        `${readFileSync(path.join(fixtureRoot, relativePath), "utf8")}\n\nLeaked route marker: ${marker}\n`,
        "utf8",
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-CAIXUKUN-LEAK-001 /);
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
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
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
  assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
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
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
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
      "skills/visual-ip-illustrations/assets/examples",
    ]);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-FERRIS-IMG-001 /);
  assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
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
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
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
  assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public OpenClaw sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?openClawApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("openclaw-public-asset");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentOpenClawPublicAssetApprovalLine(),
      pendingOpenClawPublicAssetApprovalLine(),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-openclaw-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-OPENCLAW-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
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
  assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture enforces public Go Gopher sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?gopherApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("gopher-public-asset");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentGopherPublicAssetApprovalLine(),
      pendingGopherPublicAssetApprovalLine(),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-gopher-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-GOPHER-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-gopher-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);
    assert.match(pendingResult.stdout, /Go blog source outcome=missing/);
    assert.match(pendingResult.stdout, /Renee French attribution outcome=missing/);
    assert.match(pendingResult.stdout, /Creative Commons Attribution 4\.0 outcome=missing/);
    assert.match(pendingResult.stdout, /local visual marker outcome=missing/);
    assert.match(pendingResult.stdout, /route-isolation outcome=missing/);
    assert.match(pendingResult.stdout, /Go logo boundary outcome=missing/);
    assert.match(pendingResult.stdout, /official endorsement boundary outcome=missing/);
    assert.match(pendingResult.stdout, /article-metaphor quality outcome=missing/);
    assert.match(pendingResult.stdout, /public-sample decision=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingGopherPublicAssetApprovalLine(),
      completeGopherPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicGopherSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.sourceOutcomePresent, true);
    assert.equal(approval.attributionOutcomePresent, true);
    assert.equal(approval.licenseOutcomePresent, true);
    assert.equal(approval.visualOutcomePresent, true);
    assert.equal(approval.routeIsolationOutcomePresent, true);
    assert.equal(approval.logoBoundaryOutcomePresent, true);
    assert.equal(approval.endorsementBoundaryOutcomePresent, true);
    assert.equal(approval.articleMetaphorOutcomePresent, true);
    assert.equal(approval.publicSampleOutcomePresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-GOPHER-IMG-001 /);
  assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
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
        "route-isolation approved",
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
        "route-isolation approved",
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
        "route-isolation approved",
        "article-metaphor quality outcome",
      ),
      "article-metaphor quality outcome=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(currentOpenClawPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicOpenClawSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`openclaw-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-openclaw-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        currentOpenClawPublicAssetApprovalLine(),
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

test("validator fixture rejects Go Gopher public sample placeholder approvals", async () => {
  const validators = await import(`${scriptPath}?gopherPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const [name, approvalLine, expectedField] of [
    ["date", completeGopherPublicAssetApprovalLine("TBD"), "date=missing"],
    [
      "source",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source outcome",
      ),
      "Go blog source outcome=missing",
    ],
    [
      "attribution",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution outcome",
      ),
      "Renee French attribution outcome=missing",
    ],
    [
      "license",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 outcome",
      ),
      "Creative Commons Attribution 4\\.0 outcome=missing",
    ],
    [
      "visual",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker outcome",
      ),
      "local visual marker outcome=missing",
    ],
    [
      "route-isolation",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation outcome",
      ),
      "route-isolation outcome=missing",
    ],
    [
      "logo-boundary",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary outcome",
      ),
      "Go logo boundary outcome=missing",
    ],
    [
      "endorsement",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary outcome",
      ),
      "official endorsement boundary outcome=missing",
    ],
    [
      "article-metaphor",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality outcome",
      ),
      "article-metaphor quality outcome=missing",
    ],
    [
      "public-sample",
      completeGopherPublicAssetApprovalLine(
        "2026-06-13",
        "Go blog source approved",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
        "public-sample decision",
      ),
      "public-sample decision=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(currentGopherPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicGopherSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`gopher-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-gopher-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        currentGopherPublicAssetApprovalLine(),
        approvalLine,
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-GOPHER-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-gopher-test\.png/);
      assert.match(result.stdout, new RegExp(expectedField));
    } finally {
      rmSync(fixtureRoot, { recursive: true, force: true });
    }
  }
});

test("validator fixture enforces public Cai Xukun sample approval parsing", async () => {
  const validators = await import(`${scriptPath}?caiXukunApproval=${Date.now()}`);
  const fixtureRoot = copyFixture("caixukun-public-asset");
  try {
    replaceInFixture(
      fixtureRoot,
      "RELEASE_CHECKLIST.md",
      currentCaiXukunPublicAssetApprovalLine(),
      pendingCaiXukunPublicAssetApprovalLine(),
    );
    writeFileSync(path.join(fixtureRoot, "examples", "images", "99-caixukun-test.png"), "fixture", "utf8");

    const pendingResult = runFixtureValidator(fixtureRoot);

    assert.equal(pendingResult.status, 1);
    assert.match(pendingResult.stdout, /\[FAIL\] BOUNDARY-CAIXUKUN-IMG-001 /);
    assert.match(pendingResult.stdout, /examples\/images, examples\/images-en, and skills\/visual-ip-illustrations\/assets\/examples/);
    assert.match(pendingResult.stdout, /examples\/images\/99-caixukun-test\.png/);
    assert.match(pendingResult.stdout, /approval status=PENDING/);
    assert.match(pendingResult.stdout, /reviewer=missing/);
    assert.match(pendingResult.stdout, /allowed directories=missing/);
    assert.match(pendingResult.stdout, /uploaded-image identity outcome=missing/);
    assert.match(pendingResult.stdout, /public-figure likeness boundary outcome=missing/);
    assert.match(pendingResult.stdout, /source-image context boundary outcome=missing/);
    assert.match(pendingResult.stdout, /route-isolation outcome=missing/);
    assert.match(pendingResult.stdout, /stylized mascot-only output outcome=missing/);
    assert.match(pendingResult.stdout, /article-metaphor quality outcome=missing/);
    assert.match(pendingResult.stdout, /public-sample decision=missing/);

    const releaseChecklistPath = path.join(fixtureRoot, "RELEASE_CHECKLIST.md");
    const approvedText = readFileSync(releaseChecklistPath, "utf8").replace(
      pendingCaiXukunPublicAssetApprovalLine(),
      completeCaiXukunPublicAssetApprovalLine(),
    );
    writeFileSync(releaseChecklistPath, approvedText, "utf8");

    const approval = validators.parsePublicCaiXukunSampleApproval(approvedText);
    assert.equal(approval.complete, true);
    assert.equal(approval.reviewerPresent, true);
    assert.equal(approval.datePresent, true);
    assert.equal(approval.allowedDirectoriesPresent, true);
    assert.equal(approval.uploadedImageIdentityOutcomePresent, true);
    assert.equal(approval.publicFigureLikenessBoundaryOutcomePresent, true);
    assert.equal(approval.sourceImageContextBoundaryOutcomePresent, true);
    assert.equal(approval.routeIsolationOutcomePresent, true);
    assert.equal(approval.stylizedMascotOnlyOutputOutcomePresent, true);
    assert.equal(approval.articleMetaphorOutcomePresent, true);
    assert.equal(approval.publicSampleOutcomePresent, true);

    const approvedResult = runFixtureValidator(fixtureRoot);
    assert.equal(approvedResult.status, 0);
    assert.match(approvedResult.stdout, /\[PASS\] BOUNDARY-CAIXUKUN-IMG-001 /);
    assert.match(approvedResult.stdout, /Summary: total=148 passed=148 failed=0 skipped=0/);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture rejects Cai Xukun public sample placeholder approvals", async () => {
  const validators = await import(`${scriptPath}?caiXukunPlaceholderApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  for (const [name, approvalLine, expectedField] of [
    ["date", completeCaiXukunPublicAssetApprovalLine("TBD"), "date=missing"],
    [
      "uploaded-image",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity outcome",
      ),
      "uploaded-image identity outcome=missing",
    ],
    [
      "likeness",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary outcome",
      ),
      "public-figure likeness boundary outcome=missing",
    ],
    [
      "source-image",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary outcome",
      ),
      "source-image context boundary outcome=missing",
    ],
    [
      "route-isolation",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation outcome",
      ),
      "route-isolation outcome=missing",
    ],
    [
      "mascot-output",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output outcome",
      ),
      "stylized mascot-only output outcome=missing",
    ],
    [
      "article-metaphor",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output approved",
        "article-metaphor quality outcome",
      ),
      "article-metaphor quality outcome=missing",
    ],
    [
      "public-sample",
      completeCaiXukunPublicAssetApprovalLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output approved",
        "article-metaphor quality approved",
        "public-sample decision",
      ),
      "public-sample decision=missing",
    ],
  ]) {
    const approvalText = releaseChecklistText.replace(currentCaiXukunPublicAssetApprovalLine(), approvalLine);
    const approval = validators.parsePublicCaiXukunSampleApproval(approvalText);
    assert.equal(approval.complete, false);

    const fixtureRoot = copyFixture(`caixukun-placeholder-${name}`);
    try {
      writeFileSync(path.join(fixtureRoot, "examples", "images", "99-caixukun-test.png"), "fixture", "utf8");
      replaceInFixture(
        fixtureRoot,
        "RELEASE_CHECKLIST.md",
        currentCaiXukunPublicAssetApprovalLine(),
        approvalLine,
      );

      const result = runFixtureValidator(fixtureRoot);

      assert.equal(result.status, 1);
      assert.match(result.stdout, /\[FAIL\] BOUNDARY-CAIXUKUN-IMG-001 /);
      assert.match(result.stdout, /examples\/images\/99-caixukun-test\.png/);
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

  const currentApproval = validators.parseGeneratedOpenClawSampleApproval(releaseChecklistText);
  assert.equal(currentApproval.found, true);
  assert.equal(currentApproval.checked, true);
  assert.equal(currentApproval.complete, true);
  assert.equal(currentApproval.internalReviewDirectoriesPresent, true);
  assert.equal(currentApproval.publicDirectoriesPresent, true);
  assert.equal(currentApproval.uploadedLogoIdentityOutcomePresent, true);
  assert.equal(currentApproval.sourceLicenseOutcomePresent, true);
  assert.equal(currentApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentApproval.articleMetaphorOutcomePresent, true);

  const pendingText = releaseChecklistText.replace(
    currentGeneratedOpenClawSampleLine(),
    pendingGeneratedOpenClawSampleLine(),
  );
  const pendingApproval = validators.parseGeneratedOpenClawSampleApproval(pendingText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    currentGeneratedOpenClawSampleLine(),
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
        "route-isolation approved",
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
        "route-isolation approved",
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
        "route-isolation approved",
        "article-metaphor quality outcome",
      ),
      "articleMetaphorOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(currentGeneratedOpenClawSampleLine(), approvalLine);
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

test("validator fixture distinguishes Generated Sample Go Gopher review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedGopherApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const currentApproval = validators.parseGeneratedGopherSampleApproval(releaseChecklistText);
  assert.equal(currentApproval.found, true);
  assert.equal(currentApproval.checked, true);
  assert.equal(currentApproval.complete, true);
  assert.equal(currentApproval.internalReviewDirectoriesPresent, true);
  assert.equal(currentApproval.publicDirectoriesPresent, true);
  assert.equal(currentApproval.attributionOutcomePresent, true);
  assert.equal(currentApproval.licenseOutcomePresent, true);
  assert.equal(currentApproval.visualOutcomePresent, true);
  assert.equal(currentApproval.routeIsolationOutcomePresent, true);
  assert.equal(currentApproval.logoBoundaryOutcomePresent, true);
  assert.equal(currentApproval.endorsementBoundaryOutcomePresent, true);
  assert.equal(currentApproval.articleMetaphorOutcomePresent, true);

  const pendingText = releaseChecklistText.replace(
    currentGeneratedGopherSampleLine(),
    pendingGeneratedGopherSampleLine(),
  );
  const pendingApproval = validators.parseGeneratedGopherSampleApproval(pendingText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    currentGeneratedGopherSampleLine(),
    completeGeneratedGopherSampleLine(),
  );
  const completeApproval = validators.parseGeneratedGopherSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.attributionOutcomePresent, true);
  assert.equal(completeApproval.licenseOutcomePresent, true);
  assert.equal(completeApproval.visualOutcomePresent, true);
  assert.equal(completeApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeApproval.logoBoundaryOutcomePresent, true);
  assert.equal(completeApproval.endorsementBoundaryOutcomePresent, true);
  assert.equal(completeApproval.articleMetaphorOutcomePresent, true);

  for (const [name, approvalLine, expectedFlag] of [
    ["date", completeGeneratedGopherSampleLine("TBD"), "datePresent"],
    [
      "attribution",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution outcome",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
      ),
      "attributionOutcomePresent",
    ],
    [
      "license",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 outcome",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
      ),
      "licenseOutcomePresent",
    ],
    [
      "visual",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker outcome",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
      ),
      "visualOutcomePresent",
    ],
    [
      "route-isolation",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation outcome",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
      ),
      "routeIsolationOutcomePresent",
    ],
    [
      "logo-boundary",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary outcome",
        "official endorsement boundary approved",
        "article-metaphor quality approved",
      ),
      "logoBoundaryOutcomePresent",
    ],
    [
      "endorsement",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary outcome",
        "article-metaphor quality approved",
      ),
      "endorsementBoundaryOutcomePresent",
    ],
    [
      "article-metaphor",
      completeGeneratedGopherSampleLine(
        "2026-06-13",
        "Renee French attribution approved",
        "Creative Commons Attribution 4.0 approved",
        "local visual marker approved",
        "route-isolation approved",
        "Go logo boundary approved",
        "official endorsement boundary approved",
        "article-metaphor quality outcome",
      ),
      "articleMetaphorOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(currentGeneratedGopherSampleLine(), approvalLine);
    const placeholderApproval = validators.parseGeneratedGopherSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval[expectedFlag], false);
  }

  const fixtureRoot = copyFixture("gopher-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-gopher");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-gopher-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-GOPHER-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-GOPHER-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("validator fixture distinguishes Generated Sample Cai Xukun review outputs from public samples", async () => {
  const validators = await import(`${scriptPath}?generatedCaiXukunApproval=${Date.now()}`);
  const releaseChecklistText = readFileSync(path.join(repoRoot, "RELEASE_CHECKLIST.md"), "utf8");

  const pendingApproval = validators.parseGeneratedCaiXukunSampleApproval(releaseChecklistText);
  assert.equal(pendingApproval.found, true);
  assert.equal(pendingApproval.checked, false);
  assert.equal(pendingApproval.complete, false);
  assert.equal(pendingApproval.internalReviewDirectoriesPresent, false);
  assert.equal(pendingApproval.publicDirectoriesPresent, false);

  const completeText = releaseChecklistText.replace(
    pendingGeneratedCaiXukunSampleLine(),
    completeGeneratedCaiXukunSampleLine(),
  );
  const completeApproval = validators.parseGeneratedCaiXukunSampleApproval(completeText);
  assert.equal(completeApproval.complete, true);
  assert.equal(completeApproval.internalReviewDirectoriesPresent, true);
  assert.equal(completeApproval.publicDirectoriesPresent, true);
  assert.equal(completeApproval.uploadedImageIdentityOutcomePresent, true);
  assert.equal(completeApproval.publicFigureLikenessBoundaryOutcomePresent, true);
  assert.equal(completeApproval.sourceImageContextBoundaryOutcomePresent, true);
  assert.equal(completeApproval.routeIsolationOutcomePresent, true);
  assert.equal(completeApproval.stylizedMascotOnlyOutputOutcomePresent, true);
  assert.equal(completeApproval.claimReviewOutcomePresent, true);
  assert.equal(completeApproval.articleMetaphorOutcomePresent, true);

  for (const [name, approvalLine, expectedFlag] of [
    ["date", completeGeneratedCaiXukunSampleLine("TBD"), "datePresent"],
    [
      "uploaded-image",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity outcome",
      ),
      "uploadedImageIdentityOutcomePresent",
    ],
    [
      "likeness",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary outcome",
      ),
      "publicFigureLikenessBoundaryOutcomePresent",
    ],
    [
      "source-image",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary outcome",
      ),
      "sourceImageContextBoundaryOutcomePresent",
    ],
    [
      "route-isolation",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation outcome",
      ),
      "routeIsolationOutcomePresent",
    ],
    [
      "mascot-output",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output outcome",
      ),
      "stylizedMascotOnlyOutputOutcomePresent",
    ],
    [
      "claims",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output approved",
        "endorsement, affiliation, impersonation, campaign, advertising, fandom-promotion review outcome",
      ),
      "claimReviewOutcomePresent",
    ],
    [
      "article-metaphor",
      completeGeneratedCaiXukunSampleLine(
        "2026-06-13",
        "uploaded-image identity approved",
        "public-figure likeness boundary approved",
        "source-image context boundary approved",
        "route-isolation approved",
        "stylized mascot-only output approved",
        "endorsement affiliation impersonation campaign advertising fandom-promotion review approved",
        "article-metaphor quality outcome",
      ),
      "articleMetaphorOutcomePresent",
    ],
  ]) {
    const placeholderText = releaseChecklistText.replace(pendingGeneratedCaiXukunSampleLine(), approvalLine);
    const placeholderApproval = validators.parseGeneratedCaiXukunSampleApproval(placeholderText);
    assert.equal(placeholderApproval.checked, true);
    assert.equal(placeholderApproval.complete, false);
    assert.equal(placeholderApproval[expectedFlag], false, name);
  }

  const fixtureRoot = copyFixture("caixukun-generated-sample");
  try {
    const workspaceOutputDir = path.join(fixtureRoot, "assets", "article-caixukun");
    mkdirSync(workspaceOutputDir, { recursive: true });
    writeFileSync(path.join(workspaceOutputDir, "99-caixukun-test.png"), "fixture", "utf8");

    const result = runFixtureValidator(fixtureRoot);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-CAIXUKUN-GEN-001 /);
    assert.match(result.stdout, /\[PASS\] BOUNDARY-CAIXUKUN-IMG-001 /);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
