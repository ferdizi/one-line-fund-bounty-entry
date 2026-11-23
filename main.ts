import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
const text = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
