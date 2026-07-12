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
