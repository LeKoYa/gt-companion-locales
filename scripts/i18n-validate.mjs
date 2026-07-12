#!/usr/bin/env node
/**
 * Validates translation files against the English source.
 *
 * This script is mirrored verbatim into the public `gt-companion-locales` repo
 * and runs in the CI of both, so it must stay dependency-free and must not
 * import anything from the app. It auto-detects the locales root:
 *
 *   app repo     frontend/src/locales/{en,de,...}
 *   locales repo ./{en,de,...}
 *
 * Usage:  node scripts/i18n-validate.mjs [--root <dir>] [--strict] [--write-readme <file>]
 *
 * English is the source of truth. A translation may be incomplete (missing keys
 * fall back to English at runtime, which is always safe), so missing keys are
 * reported as coverage, not as failures. What DOES fail:
 *
 *   - invalid JSON
 *   - a key that does not exist in English (a typo, or a renamed key left behind)
 *   - a file that is not an English namespace
 *   - a changed or dropped {{placeholder}} (renders literally, or throws)
 *   - a changed or dropped <tag> used by <Trans> (breaks the sentence's markup)
 *   - a value that is not a string (structure drifted from English)
 */

import {
  readdirSync,
  readFileSync,
  writeFileSync,
  statSync,
  existsSync,
} from "node:fs";
import { join, resolve } from "node:path";

const PLURAL_SUFFIXES = ["zero", "one", "two", "few", "many", "other"];
const SOURCE_LANGUAGE = "en";

const COVERAGE_START = "<!-- coverage:start -->";
const COVERAGE_END = "<!-- coverage:end -->";

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const rootArg = args.indexOf("--root");
const readmeArg = args.indexOf("--write-readme");
const readmePath =
  readmeArg !== -1 ? (args[readmeArg + 1] ?? "README.md") : null;

const detectRoot = () => {
  if (rootArg !== -1 && args[rootArg + 1]) return resolve(args[rootArg + 1]);
  for (const candidate of ["frontend/src/locales", "src/locales", "."]) {
    if (existsSync(join(candidate, SOURCE_LANGUAGE))) return resolve(candidate);
  }
  console.error(
    `No '${SOURCE_LANGUAGE}/' folder found. Pass --root <dir> pointing at the locales folder.`,
  );
  process.exit(1);
};

const root = detectRoot();

/** Flatten nested JSON into dotted paths: { a: { b: "x" } } -> { "a.b": "x" } */
const flatten = (value, prefix, out, errors, file) => {
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof child === "string") {
      out[path] = child;
    } else if (child && typeof child === "object" && !Array.isArray(child)) {
      flatten(child, path, out, errors, file);
    } else {
      errors.push(
        `${file}: '${path}' must be a string (found ${Array.isArray(child) ? "array" : typeof child})`,
      );
    }
  }
  return out;
};

const readNamespaces = (language, errors) => {
  const dir = join(root, language);
  const namespaces = {};
  for (const entry of readdirSync(dir)) {
    if (!entry.endsWith(".json")) continue;
    const file = `${language}/${entry}`;
    let parsed;
    try {
      parsed = JSON.parse(readFileSync(join(dir, entry), "utf8"));
    } catch (error) {
      errors.push(`${file}: invalid JSON (${error.message})`);
      continue;
    }
    namespaces[entry.replace(/\.json$/, "")] = flatten(
      parsed,
      "",
      {},
      errors,
      file,
    );
  }
  return namespaces;
};

/** `{{count}}` and `{{name, uppercase}}` both yield "count"/"name". */
const placeholdersOf = (value) =>
  new Set(
    [...value.matchAll(/{{\s*([^},\s]+)[^}]*}}/g)].map((match) => match[1]),
  );

/** `<strong>`, `<plan>` and `<0>` as used by <Trans>. Self-closing included. */
const tagsOf = (value) =>
  new Set(
    [...value.matchAll(/<\/?\s*([a-zA-Z0-9_-]+)\s*\/?>/g)].map((m) => m[1]),
  );

const stripPlural = (key) => {
  const match = key.match(/^(.*)_([a-z]+)$/);
  if (match && PLURAL_SUFFIXES.includes(match[2])) return match[1];
  return null;
};

const setsEqual = (a, b) =>
  a.size === b.size && [...a].every((item) => b.has(item));

// ── Load English source ────────────────────────────────────────────────────
const errors = [];
const warnings = [];

const source = readNamespaces(SOURCE_LANGUAGE, errors);
const sourceKeyCount = Object.values(source).reduce(
  (total, keys) => total + Object.keys(keys).length,
  0,
);

// Plural bases present in English, so `foo_many` in Russian resolves even
// though English only declares `foo_one` / `foo_other`.
const sourcePluralBases = {};
for (const [namespace, keys] of Object.entries(source)) {
  sourcePluralBases[namespace] = new Map();
  for (const key of Object.keys(keys)) {
    const base = stripPlural(key);
    if (base) sourcePluralBases[namespace].set(base, key);
  }
}

const languages = readdirSync(root)
  .filter(
    (entry) =>
      entry !== SOURCE_LANGUAGE &&
      !entry.startsWith(".") &&
      statSync(join(root, entry)).isDirectory() &&
      readdirSync(join(root, entry)).some((file) => file.endsWith(".json")),
  )
  .sort();

// ── Check each translation against it ──────────────────────────────────────
const coverage = [];

for (const language of languages) {
  const translated = readNamespaces(language, errors);
  let translatedCount = 0;

  for (const [namespace, keys] of Object.entries(translated)) {
    if (!source[namespace]) {
      errors.push(
        `${language}/${namespace}.json: not a namespace in ${SOURCE_LANGUAGE}/ (delete it, or fix the filename)`,
      );
      continue;
    }

    for (const [key, value] of Object.entries(keys)) {
      const file = `${language}/${namespace}.json`;

      // Resolve the English counterpart, tolerating a different plural set.
      let sourceValue = source[namespace][key];
      if (sourceValue === undefined) {
        const base = stripPlural(key);
        const viaPlural = base && sourcePluralBases[namespace].get(base);
        if (viaPlural) sourceValue = source[namespace][viaPlural];
      }

      if (sourceValue === undefined) {
        errors.push(
          `${file}: key '${key}' does not exist in ${SOURCE_LANGUAGE}/${namespace}.json`,
        );
        continue;
      }

      translatedCount += 1;

      if (value.trim() === "") {
        warnings.push(
          `${file}: key '${key}' is empty (delete it to fall back to English)`,
        );
        continue;
      }

      const expectedPlaceholders = placeholdersOf(sourceValue);
      const actualPlaceholders = placeholdersOf(value);
      if (!setsEqual(expectedPlaceholders, actualPlaceholders)) {
        errors.push(
          `${file}: key '${key}' placeholder mismatch\n` +
            `    ${SOURCE_LANGUAGE}: ${[...expectedPlaceholders].map((p) => `{{${p}}}`).join(" ") || "(none)"}\n` +
            `    ${language}: ${[...actualPlaceholders].map((p) => `{{${p}}}`).join(" ") || "(none)"}`,
        );
      }

      const expectedTags = tagsOf(sourceValue);
      const actualTags = tagsOf(value);
      if (!setsEqual(expectedTags, actualTags)) {
        errors.push(
          `${file}: key '${key}' tag mismatch\n` +
            `    ${SOURCE_LANGUAGE}: ${[...expectedTags].map((tag) => `<${tag}>`).join(" ") || "(none)"}\n` +
            `    ${language}: ${[...actualTags].map((tag) => `<${tag}>`).join(" ") || "(none)"}`,
        );
      }
    }
  }

  coverage.push({ language, translatedCount });
}

// ── Report ─────────────────────────────────────────────────────────────────
console.log(
  `Source: ${SOURCE_LANGUAGE}/ — ${Object.keys(source).length} namespaces, ${sourceKeyCount} keys\n`,
);

if (coverage.length === 0) {
  console.log("No translations found yet.\n");
} else {
  console.log("Coverage");
  for (const { language, translatedCount } of coverage) {
    const percent = ((translatedCount / sourceKeyCount) * 100).toFixed(1);
    const filled = Math.round((translatedCount / sourceKeyCount) * 24);
    const bar = "█".repeat(filled) + "░".repeat(24 - filled);
    console.log(
      `  ${language.padEnd(6)} ${bar} ${String(translatedCount).padStart(5)}/${sourceKeyCount}  ${percent.padStart(5)}%`,
    );
  }
  console.log("");
}

for (const warning of warnings) console.log(`warning  ${warning}`);
if (warnings.length) console.log("");

for (const error of errors) console.error(`error    ${error}`);

if (errors.length) {
  console.error(`\n${errors.length} error(s). Translations were not accepted.`);
  process.exit(1);
}

if (strict && warnings.length) {
  console.error(`\n${warnings.length} warning(s) and --strict is set.`);
  process.exit(1);
}

// ── Optionally write the coverage table into the README ────────────────────
//
// Only reached when validation passed. The table lives between HTML comment
// markers so the rest of the README stays hand-written. Regenerated on every
// push to the locales repo's main branch, which covers both halves of the
// number: a translator adding strings (numerator) and the app mirroring new
// English keys in (denominator).
if (readmePath) {
  const displayName = (code) => {
    try {
      const name = new Intl.DisplayNames(["en"], { type: "language" }).of(code);
      return name && name !== code ? name : code;
    } catch {
      return code;
    }
  };

  const rows = coverage.map(({ language, translatedCount }) => {
    const percent = (translatedCount / sourceKeyCount) * 100;
    const filled = Math.round(percent / 5); // 20 cells
    const bar = "█".repeat(filled) + "░".repeat(20 - filled);
    return `| ${displayName(language)} (\`${language}\`) | \`${bar}\` | ${translatedCount} / ${sourceKeyCount} | ${percent.toFixed(1)}% |`;
  });

  const table = rows.length
    ? [
        "| Language | | Strings | Coverage |",
        "| --- | --- | ---: | ---: |",
        ...rows,
      ].join("\n")
    : "_No translations yet. Yours would be the first._";

  const block = [
    COVERAGE_START,
    "",
    `English source: **${sourceKeyCount} strings** across ${Object.keys(source).length} namespaces.`,
    "",
    table,
    "",
    "<sub>Generated automatically. Anything untranslated falls back to English.</sub>",
    "",
    COVERAGE_END,
  ].join("\n");

  const readme = readFileSync(readmePath, "utf8");
  const start = readme.indexOf(COVERAGE_START);
  const end = readme.indexOf(COVERAGE_END);

  if (start === -1 || end === -1) {
    console.error(
      `\n${readmePath} is missing the ${COVERAGE_START} / ${COVERAGE_END} markers.`,
    );
    process.exit(1);
  }

  const updated =
    readme.slice(0, start) + block + readme.slice(end + COVERAGE_END.length);

  if (updated !== readme) {
    writeFileSync(readmePath, updated);
    console.log(`Updated coverage table in ${readmePath}.`);
  } else {
    console.log(`Coverage table in ${readmePath} is already up to date.`);
  }
}

console.log(
  warnings.length
    ? `Passed with ${warnings.length} warning(s).`
    : "All translation files are valid.",
);
