import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

const repoRoot = path.resolve(import.meta.dirname, "..");
const scriptPath = path.join(repoRoot, "scripts", "validate-skill-package.mjs");

function runValidator(extraEnv = {}) {
  return spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    env: { ...process.env, ...extraEnv },
    encoding: "utf8",
  });
}

test("validator command prints deterministic harness smoke logs", () => {
  const result = runValidator();

  assert.equal(result.status, 0);
  assert.match(result.stdout, /^\[PASS\] PKG-SMOKE /m);
  assert.match(result.stdout, /\[PASS\] PARSE-SKILL /);
  assert.match(result.stdout, /\[PASS\] PARSE-YAML /);
  assert.match(result.stdout, /\[PASS\] PARSE-ROUTING /);
  assert.match(result.stdout, /\[PASS\] PARSE-README-LINKS /);
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=0 skipped=0/);
  assert.equal(result.stderr, "");
});

test("validator collects failures and exits nonzero after all checks run", () => {
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
    "# Routes\n",
    "utf8",
  );
  writeFileSync(path.join(fixtureRoot, "README.md"), "# Broken\n", "utf8");

  const result = spawnSync(process.execPath, [path.join(fixtureRoot, "scripts", "validate-skill-package.mjs")], {
    cwd: fixtureRoot,
    encoding: "utf8",
  });

  rmSync(fixtureRoot, { recursive: true, force: true });

  assert.equal(result.status, 1);
  assert.match(result.stdout, /\[FAIL\] PKG-SMOKE /);
  assert.match(result.stdout, /\[FAIL\] PARSE-SKILL /);
  assert.match(result.stdout, /\[FAIL\] PARSE-YAML /);
  assert.match(result.stdout, /\[FAIL\] PARSE-ROUTING /);
  assert.match(result.stdout, /Summary: total=\d+ passed=\d+ failed=\d+ skipped=0/);
});

test("parser helpers expose current package contract primitives", async () => {
  const validators = await import(`${scriptPath}?test=${Date.now()}`);
  const skillText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "SKILL.md"), "utf8");
  const routingText = readFileSync(path.join(repoRoot, "ian-xiaohei-illustrations", "references", "routing.md"), "utf8");
  const readmeText = readFileSync(path.join(repoRoot, "README.md"), "utf8");

  const frontmatter = validators.parseFrontmatter(skillText);
  assert.equal(frontmatter.data.name, "ian-xiaohei-illustrations");
  assert.ok(frontmatter.data.description.includes("小黑"));

  const routes = validators.parseMarkdownTable(routingText, "IP Routes");
  assert.equal(routes.length, 2);
  assert.deepEqual(routes.map((route) => route.id), ["xiaohei", "littlebox"]);
  assert.equal(routes[0].output_suffix, "illustrations");

  const links = validators.parseMarkdownLinks(readmeText);
  assert.ok(links.some((link) => link.target === "examples/prompts.md"));
  assert.ok(links.some((link) => link.target === "examples/images/01-two-breakpoints.png"));

  assert.ok(validators.outputPathTokens().raw.includes("assets/<article-slug>-illustrations/"));
  assert.ok(validators.outputPathTokens().escaped.includes("assets/&lt;article-slug&gt;-littlebox/"));
});
