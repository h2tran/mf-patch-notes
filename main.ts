import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "v2.4.1: fixed a bug where the human body shipped with a snooze button but no 'actually wake up' button; users report the bug persists.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly as-is, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
