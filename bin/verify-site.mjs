import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = path.resolve("_site");
const routes = [
  "index.html",
  "projects/index.html",
  "experience/index.html",
  "cv/index.html",
  "repositories/index.html",
  "projects/fisheye-detection/index.html",
  "projects/rainfall-nowcasting/index.html",
  "projects/vehicle-detection/index.html",
  "projects/robocup/index.html",
  "404.html",
];
for (const route of routes) {
  const html = fs.readFileSync(path.join(root, route), "utf8");
  assert(!/Albert Einstein|you@example.com|Write your biography|example_pdf/.test(html), "Demo content in " + route);
  assert(!html.includes("mine-barnsongkit-resume.pdf"), "Generated resume must not be published in " + route);
  assert(!/\{\{|\{%/.test(html), "Unrendered Liquid in " + route);
  for (const match of html.matchAll(/(?:href|src)=["'](\/[^"']*)["']/g)) {
    const target = match[1].split(/[?#]/)[0];
    if (target.startsWith("//")) continue;
    const file = path.join(root, decodeURIComponent(target));
    assert(fs.existsSync(file), "Broken local link " + target + " in " + route);
    if (fs.statSync(file).isDirectory()) assert(fs.existsSync(path.join(file, "index.html")), "Missing index for " + target);
  }
}
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const experience = fs.readFileSync(path.join(root, "experience/index.html"), "utf8");
const cv = fs.readFileSync(path.join(root, "cv/index.html"), "utf8");

for (const phrase of ["Columbia University", "Chulalongkorn University", "3.73"]) {
  assert(home.includes(phrase), "Missing home content: " + phrase);
}
for (const phrase of ["Arise by INFINITAS", "Protomate", "OxygenAI"]) {
  assert(experience.includes(phrase), "Missing experience content: " + phrase);
}

const originalResume = "/assets/pdf/supanart_resume_2026_columbia_draft_rev3.pdf";
assert(cv.includes(originalResume), "CV must link to the original resume");
assert(home.includes(originalResume), "Home page must link to the original resume");
assert(!fs.existsSync(path.join(root, "assets/pdf/mine-barnsongkit-resume.pdf")), "Generated resume must not exist in the published site");
const pdf = fs.readFileSync(path.join(root, "assets/pdf/supanart_resume_2026_columbia_draft_rev3.pdf"));
assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
console.log("Verified 10 pages, local links and assets, site content, and original resume PDF.");
