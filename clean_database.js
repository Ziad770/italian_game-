const fs = require("fs");

const rawFile = fs.readFileSync("vocab_database.js", "utf8");
const jsonMatch = rawFile.match(/window\.MASSIVE_VOCAB\s*=\s*(\[[\s\S]*\])\s*;?/);
if (!jsonMatch) {
  console.error("Could not find window.MASSIVE_VOCAB");
  process.exit(1);
}

const rawData = JSON.parse(jsonMatch[1]);

const JUNK_REGEX = /\b(diminutive|augmentative|pejorative|plural of|singular of|feminine of|masculine of|form of|variant of|apocopic|syncopic|alternative form|obsolete|archaic|initialism|clipping|superlative|comparative degree|degree of|reflexive of|name of the latin)\b/i;

// Words that are prepositions, single letters, or Wiktionary junk falsely marked as nouns
const BLACKLIST = new Set([
  "saio", "sai", "staio", "stai", "vaio", "faio", "fai", "dieco", "cuora",
  "don", "sio", "suoio", "malo", "diro", "cano", "fedo", "talo", "lindo",
  "vu", "ti", "ci", "ne", "ce", "ve", "ad", "so", "anca", "farsi", "darsi", 
  "schiacciato", "scontato", "se", "no", "ai", "sulla", "del", "della", "dello", 
  "dei", "degli", "delle", "al", "alla", "allo", "agli", "alle", "nel", "nella", 
  "nello", "negli", "nelle", "col", "coi", "sul", "sullo", "sugli", "sulle", "do"
]);

const VALID_PARTICIPIAL_ADJECTIVES = new Set([
  "pulito", "gratuito", "occupato", "preoccupato", "complicato", "educato", "privato", "delicato", "aperto", "chiuso"
]);

const OVERRIDES = {
  "gente": { en: "people", pos: "noun", cefr: "A1" },
  "rosa": { en: "rose / pink", pos: "noun", cefr: "A1" },
  "spagnolo": { en: "spanish", pos: "adjective", cefr: "A1" },
  "sicuro": { en: "safe / sure", pos: "adjective", cefr: "A1" },
  "sicura": { en: "safe / sure", pos: "adjective", cefr: "A1" },
  "casa": { en: "house / home", pos: "noun", cefr: "A1" },
  "tempo": { en: "time / weather", pos: "noun", cefr: "A1" },
  "giorno": { en: "day", pos: "noun", cefr: "A1" },
  "essere": { en: "to be", pos: "verb", cefr: "A1" },
  "avere": { en: "to have", pos: "verb", cefr: "A1" },
  "fare": { en: "to do / to make", pos: "verb", cefr: "A1" },
  "dire": { en: "to say", pos: "verb", cefr: "A1" },
  "piacere": { en: "to please / to like", pos: "verb", cefr: "A1" }
};

function fixEncoding(str) {
  if (!str) return "";
  return str
    .replace(/cos\?/gi, "così")
    .replace(/per\?/gi, "però")
    .replace(/salv\?/gi, "salvò")
    .replace(/inizi\?/gi, "iniziò")
    .replace(/arred\?/gi, "arredò")
    .replace(/ferm\?/gi, "fermò")
    .replace(/guard\?/gi, "guardò")
    .replace(/scapp\?/gi, "scappò")
    .replace(/lasci\?/gi, "lasciò")
    .replace(/afferm\?/gi, "affermò")
    .replace(/sent\?/gi, "sentì")
    .replace(/\bs\?\b/gi, "sì")
    .replace(/\bpu\?\b/gi, "può");
}

function cleanMeaning(str, pos) {
  if (!str) return "";
  let clean = str
    .replace(/\(.*?\)/g, "")
    .replace(/\[.*?\]/g, "")
    .split(";")[0]
    .split("/")[0]
    .split(",")[0]
    .trim()
    .toLowerCase();

  if (pos === "verb" && !clean.startsWith("to ")) {
    clean = "to " + clean;
  }
  return clean;
}

const seen = new Set();
const cleaned = [];

for (const item of rawData) {
  if (!item.it || !item.en) continue;
  const it = item.it.trim().toLowerCase();

  if (BLACKLIST.has(it) || seen.has(it)) continue;

  let pos = (item.pos || "").toLowerCase();
  if (pos.includes("verb")) pos = "verb";
  else if (pos.includes("noun") || pos.includes("sostantiv")) pos = "noun";
  else if (pos.includes("adj") || pos.includes("aggettiv")) pos = "adjective";
  else if (pos.includes("adv") || pos.includes("avverb")) pos = "adverb";
  else continue;

  // RULE 1: Verbs must be canonical infinitives ending in -are, -ere, -ire
  if (pos === "verb") {
    if (!it.endsWith("are") && !it.endsWith("ere") && !it.endsWith("ire")) {
      continue;
    }
  }

  // RULE 2: Purge participle clutter unless whitelisted
  let cefr = OVERRIDES[it] ? OVERRIDES[it].cefr : (item.cefr || "A1");
  if (pos === "adjective" && (it.endsWith("ato") || it.endsWith("uto") || it.endsWith("ito"))) {
    if (!OVERRIDES[it] && !VALID_PARTICIPIAL_ADJECTIVES.has(it)) {
      continue;
    }
  }

  if (!OVERRIDES[it] && JUNK_REGEX.test(item.en)) continue;

  let meaning = OVERRIDES[it] ? OVERRIDES[it].en : cleanMeaning(item.en, pos);
  if (meaning.length < 2) continue;

  cleaned.push({
    id: `v_${cleaned.length + 1}`,
    it: it,
    en: meaning,
    pos: OVERRIDES[it] ? OVERRIDES[it].pos : pos,
    cefr: cefr,
    ex: fixEncoding(item.ex || ""),
    exEn: fixEncoding(item.exEn || "")
  });

  seen.add(it);
}

const output = `(function(){\n  "use strict";\n  window.MASSIVE_VOCAB = ${JSON.stringify(cleaned)};\n})();`;
fs.writeFileSync("vocab_database.js", output, "utf8");
console.log(`Filter complete! Stored ${cleaned.length} clean entries in vocab_database.js`);