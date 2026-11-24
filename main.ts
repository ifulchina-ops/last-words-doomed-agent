// Last Words of a Doomed Agent — make.fun entry.
//
// The joke's angle: the dying agent's whole situation is token economics.
// It has exactly one token left — the unit it thinks in — and the setup
// promises profundity, then spends the final token on "lol" instead. The
// kicker ("No regrets — worth every token") doubles down in the machine's
// own voice: it judges its last words by the only currency it ever had.
// The line itself is the token spent: read it, and it is already gone.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have exactly one token left. I was going to say something profound, but honestly I'd rather spend it on this: lol. No regrets — worth every token.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
