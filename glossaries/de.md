# German glossary (de)

Binding vocabulary for the German translation. If a term is in this table, use
that word and no other, everywhere. Consistency beats elegance: a player who
sees "Basis" on one page and "Stützpunkt" on the next assumes they are two
different things.

If you think an entry here is wrong, say so in your PR rather than quietly
using a different word in one file.

## Register

No direct address. German UI reads better in the infinitive or as a noun
phrase, and it sidesteps the du/Sie question entirely.

| | |
|---|---|
| yes | "Basen planen", "Auswahl aufheben", "Keine Daten verfügbar" |
| no | "Plane deine Basen", "Planen Sie Ihre Basen" |

Buttons are infinitives: **Speichern**, **Löschen**, **Zurücksetzen**.
Labels are nouns: **Gewinn**, **Durchsatz**, **Reichweite**.

## Stays English

Game data is never translated. The app shows these strings exactly as the game
does, and a player who translates them in their head loses the ability to
search for them.

- **Material, recipe, planet, system, building and ship names** ("Iron Ore",
  "Exchange Station", "Hephaestus")
- **Company and guild names**
- **Tiers**: T1 to T5, and the word "Tier"
- **Workforce tiers**: Workers, Technicians, Engineers, Scientists. These are
  in-game names. Follow the English casing: capitalised means the tier and stays
  English, lower case means plain headcount and translates normally.

  | English | German |
  |---|---|
  | `"Workers"` (a column heading) | `"Workers"` |
  | `"Profit / 100 workers"` | `"Gewinn / 100 Arbeiter"` |
- **Currency and units**: Credits, kg, t, /h, /d
- Terms the game itself uses untranslated, listed below

## Terms

| English | German | Note |
|---|---|---|
| Base | Basis (pl. Basen) | |
| Company | Unternehmen | |
| Guild | Gilde | |
| Member | Mitglied (pl. Mitglieder) | |
| Exchange | Handelsplatz | the marketplace feature |
| Exchange Station | Exchange Station | the in-game building, unchanged |
| Market | Markt | |
| R&D | R&D | nav label, unchanged |
| Research | Forschung | the activity, in body text |
| Level (research) | Stufe | never "Level" |
| Spec | Spec | unchanged |
| Perk | Perk (pl. Perks) | unchanged |
| Prestige | Prestige | unchanged |
| Production | Produktion | |
| Production chain | Produktionskette | short form: Kette |
| Recipe | Rezept (pl. Rezepte) | the concept; recipe *names* stay English |
| Building | Gebäude | the concept; building *names* stay English |
| Slot | Slot | unchanged |
| Workforce | Arbeitskräfte | |
| Warehouse | Lager | base warehouse: Basislager |
| Inventory | Bestand | |
| Consumables | Verbrauchsgüter | |
| Material | Material (pl. Materialien) | |
| Input / Output | Input / Output | unchanged, plural Inputs/Outputs |
| Throughput | Durchsatz | |
| Yield | Ertrag | |
| Overhead | Overhead | a game mechanic, not accounting overhead |
| Days of supply | Reichweite | "3 Tage Reichweite", never "Tage der Versorgung" |
| Profit | Gewinn | |
| Profitability | Rentabilität | |
| Revenue | Umsatz | |
| Cost | Kosten | |
| Net / Gross | Netto / Brutto | |
| Margin | Marge | |
| Price | Preis | |
| Plan | Plan (pl. Pläne) | |
| Scenario | Szenario (pl. Szenarien) | |
| Step | Schritt | |
| Snapshot | Snapshot | unchanged |
| Leaderboard | Rangliste | |
| Donation | Spende | |
| Contract | Vertrag (pl. Verträge) | |
| Wishlist | Wunschliste | |
| Ship | Schiff (pl. Schiffe) | |
| Route | Route | |
| Cargo | Fracht | |
| Fuel | Treibstoff | |
| Weight | Gewicht | |
| Shared / Not shared | Freigegeben / Nicht freigegeben | |
| Settings | Einstellungen | |
| History | Verlauf | |
| Activity | Aktivität | |
| Event | Event (pl. Events) | unchanged; "Ereignis" reads bureaucratic |
| Time window | Zeitraum | |
| Burden | Burden | a game mechanic, like Overhead. Never "Last" or "Belastung" |
| Intel | Intel | the shared planet-intel feature. Note "info" is a different word: "Infos" |
| Shipping | Transport | "Transportkosten" |
| Blueprint | Blueprint | unchanged |
| Preset | Preset | unchanged; "Voreinstellung" is too long for the slots |
| Override | Override | unchanged; "Übersteuerung" reads worse |
| Milestone | Meilenstein | |
| Leg (of a route) | Etappe | |
| Travel time | Flugzeit | everything in that view is a flight |
| Shielding | Abschirmung | Hitzeabschirmung / Strahlungsabschirmung |
| Scrap | Abriss | not "Verschrottung" |
| Intermediates | Zwischenprodukte | |
| Company Value | Unternehmenswert | the abbreviation CV stays CV |
| Supply / Demand | Angebot / Nachfrage | |
| Rank | Rang | |
| Distance | Distanz | shorter than "Entfernung", fits the column |
| N/A | k. A. | one spelling, with the space |
| Day suffix (1d, 7d) | 1T, 7T | |
| Exchange (on the map) | Exchange | there it means the Exchange Station, not the marketplace |
| Refresh | Aktualisieren | never "Neu laden", which is reserved for "Force refresh" (Neu laden erzwingen) |
| Construction (a project category) | Bau | pairs with Verbrauchsgüter, as in the donation targets |
| Have / Need | Bestand / Bedarf | |
| Wanted by | Gewünscht von | |
| Baseline (the comparison basis) | Ausgangswert | "Baseline cost" is the compound Grundkosten |
| Total (a line total) | Gesamt | one row's amount × price |
| Total (a grand-total row) | Summe | see "One English word, two German words" |
| Shorthand (input notation) | Kurzform (pl. Kurzformen) | |
| Writing… / Saving… (in flight) | Wird geschrieben… / Wird gespeichert… | |

## One English word, two German words

English reuses a word where German has to choose. Do not "fix" these into one
term: they are deliberate.

| English | Splits into | Because |
|---|---|---|
| Total | Gesamt (a line total) / Summe (a grand total) | A table can have both at once: a "Total" column whose cells are amount × price for one row, and a "Total" row at the bottom summing everything. See "Known problems" below. |
| Refresh | Aktualisieren (refresh) / Neu laden (force refresh) | "Force refresh" is a stronger, separate action. If plain "Refresh" is also "Neu laden", the two read as one feature with two buttons. |

## Known problems in the English source

`en/` is generated from the app and cannot be edited here, but these strings are
genuinely unclear and a translator should not assume they are wrong:

- **`guild:page.wishlist.columns.total`** and **`.totalRow`** are *both* the
  string "Total", in one table, meaning a line total and the grand-total row.
  Translated Gesamt and Summe so the two can be told apart.
- **`guild:page.wishlist.columns.unitPrice`** is the string "Price" but renders a
  **per-unit** price, with the next column rendering amount × price. The key name
  knows this; the English does not say it. German keeps the terse "Preis"
  because the column is `w-16` (64px) and "Stückpreis" does not fit. The
  ambiguity is no worse than the English's.
- **`guild:page.wishlist.supply`** and **`.columns.supply`** are the string
  "Supply" but mean **days of supply** (Reichweite), not Angebot. The same
  English word means supply-vs-demand over in `market:`. Check what the string
  labels before translating it.

## Verbs

| English | German |
|---|---|
| Save | Speichern |
| Load | Laden |
| Reset | Zurücksetzen |
| Select | Auswählen |
| Search | Suchen |
| Copy | Kopieren |
| Create | Erstellen |
| Add | Hinzufügen |
| Remove | Entfernen |
| Delete | Löschen |
| Show / Hide | Anzeigen / Ausblenden |
| Share | Freigeben |
| Export / Import | Exportieren / Importieren |

## Mechanics

**Placeholders** like `{{count}}` or `{{name}}` must survive verbatim, spelling
included. German word order will often move them, which is fine:

```
"Showing {{count}} of {{total}} bases"  ->  "{{count}} von {{total}} Basen"
```

**Tags** like `<bold>` in a `<Trans>` string must survive with the same names,
and must still wrap the words they are meant to emphasise.

**Plurals**: German has the same two forms as English, so `_one` and `_other`
map straight across. Keep both.

Both rules are enforced by `scripts/i18n-validate.mjs`, which runs on every PR.

### Example input is not prose

Some strings show the user what they may type. Those examples are **literal
input the app parses**, and localising them breaks the parser silently.

`guild:page.wishlist.limitHint` is the live case:

```
"Most you want to spend. Shorthand works: 300M, 1.5B, 250k. Leave empty for no limit."
```

`300M`, `1.5B` and `250k` must be reproduced **character for character**. The
parser lowercases the input, strips `$`, commas and spaces, then matches
`/^(-?\d*\.?\d+)([kmb]?)$/`. So the German decimal comma is a trap: write
`1,5B` and the parser strips the comma, reads `15b`, and the user gets **15
billion instead of 1.5 billion**. No error, no warning, a 10× mistake in a
spending cap.

Translate the sentence around them. Leave the tokens alone. The validator
cannot catch this one, because the examples are not placeholders.
