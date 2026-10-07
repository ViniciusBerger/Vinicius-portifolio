import assert from "node:assert/strict";
import test from "node:test";
import { readFile, stat } from "node:fs/promises";

const projectData = await readFile(new URL("../src/app/data/portfolio.js", import.meta.url), "utf8");
const hero = await readFile(new URL("../src/app/components/main.jsx", import.meta.url), "utf8");
const projects = await readFile(new URL("../src/app/components/projects/projects.jsx", import.meta.url), "utf8");
const reel = await readFile(new URL("../src/app/components/projects/project-reel.jsx", import.meta.url), "utf8");
const profile = await readFile(new URL("../src/app/components/engineer-profile.jsx", import.meta.url), "utf8");
const page = await readFile(new URL("../src/app/page.js", import.meta.url), "utf8");
const interactiveCss = await readFile(new URL("../src/app/interactive.css", import.meta.url), "utf8");
const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("portfolio keeps the three flagship projects", () => {
  for (const project of ["FIXD", "RentalFlow", "Next Stop"]) {
    assert.match(projectData, new RegExp(`title: \\"${project}\\"`));
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

test("hero stays product-neutral", () => {
  assert.match(hero, /system-overview/);
  assert.doesNotMatch(hero, /FIXD|fixdbike\.com|backend coverage|~95%/i);
});

test("FIXD public presentation avoids internal implementation metrics", () => {
  const fixdStart = projectData.indexOf('title: "FIXD"');
  const rentalFlowStart = projectData.indexOf('title: "RentalFlow"');
  const fixdPublicData = projectData.slice(fixdStart, rentalFlowStart);
  assert.doesNotMatch(fixdPublicData, /60\+|~95%|fixdbike\.com|Mercado Pago|Redis/);
  assert.match(fixdPublicData, /Automated quality checks/);
  assert.match(fixdPublicData, /End-to-end ownership/);
});

test("featured project reels support video, poster fallback and accessible captions", () => {
  assert.match(projects, /<ProjectReel project=/);
  assert.match(reel, /project\.video/);
  assert.match(reel, /<video/);
  assert.match(reel, /video\/mp4/);
  assert.match(reel, /project-reel-image/);
  assert.match(reel, /onTimeUpdate/);
  assert.match(reel, /project-reel-mobile-caption/);
  assert.match(reel, /visibilitychange/);
  assert.match(reel, /prefers-reduced-motion/);
});

test("all three prepared videos and posters exist, with Next Stop labeled as a concept", async () => {
  const assets = [
    ["fixd-preview.mp4", "fixd-poster.webp"],
    ["rentalflow-preview.mp4", "rentalflow-poster.webp"],
    ["nextstop-concept-preview.mp4", "nextstop-concept-poster.webp"],
  ];
  for (const [video, poster] of assets) {
    const videoStats = await stat(new URL("../public/videos/" + video, import.meta.url));
    const posterStats = await stat(new URL("../public/images/" + poster, import.meta.url));
    assert.ok(videoStats.size > 50000, video + " should contain real footage");
    assert.ok(posterStats.size > 1000, poster + " should contain an image");
    assert.ok(projectData.includes(video), video + " should be referenced in portfolio.js");
    assert.ok(projectData.includes(poster), poster + " should be referenced in portfolio.js");
  }
  assert.match(projectData, /isRecreation: true/);
  assert.match(reel, /UI concept recreation/);
});

test("gamified engineer profile is part of the page", () => {
  assert.match(profile, /Achievements explored/);
  assert.match(profile, /Tap to inspect/);
  assert.match(page, /<EngineerProfile \/>/);
});

test("portfolio includes build log without pretending it is a contribution graph", () => {
  assert.match(page, /<BuildLog \/>/);
  assert.match(projectData, /export const buildLog/);
});

test("motion respects reduced-motion preferences", () => {
  assert.match(interactiveCss, /prefers-reduced-motion/);
  assert.match(interactiveCss, /project-reel-image/);
});

test("CI script runs lint, tests, and production build", () => {
  assert.equal(packageJson.scripts.ci, "npm run lint && npm test && npm run build");
});

test("Vercel deployments run the CI command", async () => {
  const vercel = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  assert.equal(vercel.buildCommand, "npm run ci");
});
