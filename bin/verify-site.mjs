import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = path.resolve("_site");
const routes = [
  "index.html",
  "projects/index.html",
  "experience/index.html",
  "cv/index.html",
  "projects/fisheye-detection/index.html",
  "projects/rainfall-nowcasting/index.html",
  "projects/vehicle-detection/index.html",
  "projects/robocup/index.html",
  "404.html",
];
for (const route of routes) {
  const html = fs.readFileSync(path.join(root, route), "utf8");
  assert(!/Albert Einstein|you@example.com|Write your biography|example_pdf|prof_pic.jpg/.test(html), "Demo content in " + route);
  assert(!/\{\{|\{%/.test(html), "Unrendered Liquid in " + route);
  for (const match of html.matchAll(/(?:href|src)=["'](\/[^"']*)["']/g)) {
    const target = match[1].split(/[?#]/)[0];
    if (target.startsWith("//")) continue;
    const file = path.join(root, decodeURIComponent(target));
    assert(fs.existsSync(file), "Broken local link " + target + " in " + route);
    if (fs.statSync(file).isDirectory()) assert(fs.existsSync(path.join(file, "index.html")), "Missing index for " + target);
  }
}
const cv = fs.readFileSync(path.join(root, "cv/index.html"), "utf8");
for (const phrase of ["Columbia University", "Chulalongkorn University", "Arise by INFINITAS", "Protomate", "OxygenAI", "3.73"])
  assert(cv.includes(phrase), "Missing CV content: " + phrase);
const pdf = fs.readFileSync(path.join(root, "assets/pdf/mine-barnsongkit-resume.pdf"));
assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
console.log("Verified 9 pages, local links and assets, CV content, and resume PDF.");
