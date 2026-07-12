# Contributing a translation

Thank you for helping. This guide is everything you need. You do not have to be
a programmer, and you do not have to run any code.

---

## Translating an existing language

1. **Fork** this repository and open the folder for your language, for example
   `de/` for German.
2. Open any `.json` file. It looks like this:

   ```json
   {
     "actions": {
       "save": "Save",
       "cancel": "Cancel"
     }
   }
   ```

3. **Translate only the text on the right of the colon.**

   ```json
   {
     "actions": {
       "save": "Speichern",
       "cancel": "Abbrechen"
     }
   }
   ```

4. Open a **pull request**. A bot checks your file automatically and will tell
   you if something is off.

That is the whole job. You can translate one word or one thousand.

---

## The four rules

### 1. Never change a key

The key is the name on the **left**. It is how the app finds the string. If you
change it, the app cannot find the text and shows the raw key instead.

```json
"save": "Speichern"      ✅  key untouched, value translated
"speichern": "Speichern" ❌  key changed, string is now lost
```

### 2. Keep every `{{placeholder}}` exactly as it is

Anything in double braces gets replaced with a real value when the app runs.
`{{count}}` might become `12`. Keep the spelling identical. You may move it
anywhere in the sentence, which is often necessary.

```json
"en": "Delete {{count}} bases?"
"de": "{{count}} Basen löschen?"   ✅  moved, spelling identical
"de": "{{anzahl}} Basen löschen?"  ❌  renamed, will print nothing
"de": "Basen löschen?"             ❌  dropped, the number disappears
```

### 3. Keep every `<tag>` exactly as it is

A few strings contain tags. They mark a part of the sentence that gets styled
(bold, a link, a coloured number). Keep them, with the same names, wrapped
around the matching words in your language.

```json
"en": "You are about to delete <strong>{{name}}</strong>. This cannot be undone."
"de": "Du löschst gleich <strong>{{name}}</strong>. Das lässt sich nicht rückgängig machen."
```

### 4. Do not translate game terms

Material, planet, building, recipe and ship names come from the game, which is
English only. A player needs to be able to read a name here and find the same
name in the game. Leave them in English, even in the middle of a translated
sentence.

Also leave alone: unit and currency symbols (`$`, `/h`, `t`, `%`, `LY`), tier
abbreviations (`T1`, `T2`), and `Exchange Station`.

---

## When in doubt, leave it in English

The app falls back to English for anything missing. Deleting a key, or leaving
it in English, is always safe and never breaks anything. A confident partial
translation is much more useful than a complete but uncertain one.

---

## Plurals

Some keys come in pairs ending in `_one` and `_other`:

```json
"bases_one": "{{count}} base",
"bases_other": "{{count}} bases"
```

Use whatever plural forms **your** language actually has, not English's.

- Chinese has no plural: keep only `bases_other`, delete `bases_one`.
- German works like English: keep both.
- Languages with more forms (Russian, Polish, Arabic) may add `_few`, `_many`,
  `_zero` and so on.

The checker understands this and will not complain.

---

## Adding a new language

1. Copy the whole `en/` folder to a new folder named with the language's
   [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)
   (`de` German, `fr` French, `es` Spanish, `pt` Portuguese, `ru` Russian...).
2. Translate as much as you like. You do not need to finish before opening the
   pull request.
3. Open the pull request. A maintainer adds the language to the app's language
   picker, which is a one-line change on their side.

If you would rather ask before starting, open an issue with the
[new language](../../issues/new?template=new-language.yml) template.

---

## Checking your work (optional)

If you have [Node.js](https://nodejs.org) installed:

```bash
node scripts/i18n-validate.mjs
```

It prints a coverage table and flags any problem. This is exactly what runs on
your pull request, so a clean run locally means a clean run in CI.

It fails on: broken JSON, a key that does not exist in English, a changed or
missing `{{placeholder}}`, a changed or missing `<tag>`. It does **not** fail on
missing keys, since an incomplete translation is perfectly fine.

The most common mistake by far is a stray comma. JSON does not allow a comma
after the last entry in a block.

---

## Reporting a bad English string

`en/` is generated from the app and any edit to it here gets overwritten. If an
English string is wrong, unclear or impossible to translate well (for example it
glues sentence fragments together), please open an issue. Those are worth
fixing at the source.

---

## Licence

By contributing you agree that your translations are released under the
[MIT licence](LICENSE), so they can be shipped as part of GT Companion.
