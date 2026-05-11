import { parse } from "@slidev/parser/core";
import { readFileSync } from "node:fs";

const src = readFileSync("./slides.md", "utf8");
try {
  const data = await parse(src, "./slides.md");
  console.log("OK — parsed", data.slides.length, "slides");
  data.slides.forEach((s, i) => {
    let t = s.title || (s.frontmatter && (s.frontmatter.title || s.frontmatter.layout)) || "(no title)";
    if (typeof t === 'string') t = t.replace(/\n/g, ' ').slice(0, 60);
    console.log(`  ${String(i + 1).padStart(2)}.`, t);
  });
} catch (e) {
  console.error("PARSE ERROR:", e.message);
  if (e.stack) console.error(e.stack);
  process.exit(1);
}
