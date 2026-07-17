# GT Companion Translations

This repository holds every user-facing string in
[GT Companion](https://gt-companion.com), a companion app for the browser game
Galactic Tycoons. It exists so that anyone can help translate the app without
needing access to its source code. There is no code here, only text.

**English (`en/`) is the source of truth.** Every other folder is a translation
of it.

## Want to help translate?

Read [CONTRIBUTING.md](CONTRIBUTING.md). The short version:

1. Find your language's folder (for example `de/`). If it does not exist yet,
   copy `en/` to a new folder named with your language code.
2. Translate the **values** on the right. Never change the **keys** on the left,
   and keep every `{{placeholder}}` exactly as it is.
3. Open a pull request.

You do not need to install anything, and you do not need to finish. **Any string
you do not translate falls back to English automatically**, so a half-translated
language is safe to ship and immediately useful. Translate what you can, leave
the rest.

## Current coverage

<!-- coverage:start -->

English source: **4265 strings** across 17 namespaces.

| Language | | Strings | Coverage |
| --- | --- | ---: | ---: |
| German (`de`) | `████████████████████` | 4228 / 4265 | 99.1% |
| Chinese (`zh`) | `████████████████████` | 4184 / 4265 | 98.1% |

<sub>Generated automatically. Anything untranslated falls back to English.</sub>

<!-- coverage:end -->

Run `node scripts/i18n-validate.mjs` to print the same table locally, for a
language you are working on.

## Layout

Each language is a folder. Each file inside it is a **namespace**, a group of
related strings, usually one per page of the app.

```
en/               source of truth, mirrored automatically from the app
  common.json     shared vocabulary: actions, states, navigation
  ui.json         shared interface primitives
  base.json       Base Planner page
  market.json     Exchange page
  guild.json      Guild page
  ...
de/               a translation, mirroring the same filenames
zh/
```

> `en/` is generated. It is pushed here automatically whenever the app's English
> strings change, so it is always current. **Do not edit `en/`**, any change
> there will be overwritten. To fix an English typo, open an issue.

## Licence

Translations are contributed under the [MIT licence](LICENSE), so they can be
shipped with the app. By opening a pull request you agree to that.
