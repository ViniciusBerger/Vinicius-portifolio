import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const projectData = await readFile(new URL("../src/app/data/portfolio.js", import.meta.url), "utf8");
const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("portfolio keeps the three flagship projects", () => {
  for (const project of ["FIXD", "RentalFlow", "Next Stop"]) {
    assert.match(projectData, new RegExp(`title: \\\"${project}\\\"`));
  }
});

test("portfolio uses the current LinkedIn handle", async () => {
  const files = [
    "../src/app/components/main.jsx",
    "../src/app/components/contact.jsx",
  ];
  const content = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), "utf8")))).join("\n");
  assert.match(content, /linkedin\.com\/in\/vini-berger\//);
  assert.doesNotMatch(content, /marcos-vinicius-berger-gilles/);
});

test("CI script runs lint, tests, and production build", () => {
  assert.equal(packageJson.scripts.ci, "npm run lint && npm test && npm run build");
});


test("Vercel deployments run the CI command", async () => {
  const vercel = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  assert.equal(vercel.buildCommand, "npm run ci");
});
