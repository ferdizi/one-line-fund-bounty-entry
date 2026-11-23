// One-line fund bounty entry: reads entry.txt (a single 77-char pitch line)
// and writes it byte-identical to $MAKEFUN_OUTPUT_DIR/entry.txt for the judge.
// No content changes, no network — the output is exactly the input text.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text);
