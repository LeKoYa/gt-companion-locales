# Chinese glossary (zh)

Binding vocabulary for the Chinese translation. If a term is in this table, use
that word and no other, everywhere. Consistency beats elegance: a player who
sees 基地 on one page and 据点 on the next assumes they are two different things.

If you think an entry here is wrong, say so in your PR rather than quietly using
a different word in one file. **Corrections are especially welcome here**: the
first draft of this translation was machine-written and has not been read by a
native speaker. See "Status" at the bottom.

`zh` means **Simplified Chinese**. If Traditional is ever wanted it gets its own
folder (`zh-Hant`) rather than replacing this one.

## Register

No direct address. Do not use 你 or 您. Chinese UI reads better as a bare verb
or a noun phrase, which is also how the English source is written.

| | |
|---|---|
| yes | 保存, 取消, 暂无数据, 选择基地 |
| no | 请您保存, 你的基地 |

Buttons are verbs: **保存**, **删除**, **重置**.
Labels are nouns: **利润**, **成本**, **产出**.

## Stays English

Two different reasons, both about the player being able to move between this app
and the game.

**1. Names, because the game only has English ones.** A player must be able to
read a name here and search for it in the game.

- **Material, recipe, planet, system, building and ship names** ("Iron Ore",
  "Exchange Station", "Hephaestus")
- **Company and guild names**
- **Tiers**: T1 to T5, and the word "Tier"
- **Workforce tiers**: Workers, Technicians, Engineers, Scientists. These are
  in-game names. Follow the English casing: capitalised means the tier and stays
  English, lower case means plain headcount and translates normally.

  | English | Chinese |
  |---|---|
  | `"Workers"` (a column heading) | `"Workers"` |
  | `"Profit / 100 workers"` | `"利润 / 100 人"` |

**2. Named mechanics, because they are opaque either way.** 基地 is an obvious
translation of "Base" and nobody will be confused. But "Overhead" and "Burden"
are specific game systems with no everyday meaning, and a player who only ever
sees 开销 will not recognise the mechanic when it is discussed anywhere else.
These stay English:

**Overhead**, **Burden**, **Perk**, **Spec**, **Prestige**, **Blueprint**

Ordinary vocabulary is translated normally, even when it names a game concept
(Base, Guild, Ship, Recipe, Building). The line is "would a Chinese player
struggle to map this back to the game", not "does the game have this word".

## Terms

The back-translation column is there so a maintainer who does not read Chinese
can still check this table. It should read roughly like the English column.

| English | Chinese | Back-translation | Note |
|---|---|---|---|
| Base | 基地 | base | |
| Company | 公司 | company | |
| Guild | 公会 | guild | |
| Member | 成员 | member | |
| Exchange | 交易所 | exchange / trading house | the marketplace feature |
| Exchange Station | Exchange Station | | the in-game building, unchanged |
| Market | 市场 | market | |
| R&D | 研发 | R&D | the nav label and the page |
| Research (verb) | 研究 | to research | |
| Level (research) | 等级 | level / grade | never 水平 |
| Milestone | 里程碑 | milestone | |
| Production | 生产 | production | |
| Production chain | 生产链 | production chain | short form: 链 |
| Recipe | 配方 | recipe | the concept; recipe *names* stay English |
| Building | 建筑 | building | the concept; building *names* stay English |
| Slot | 槽位 | slot | |
| Workforce | 劳动力 | workforce | |
| Warehouse | 仓库 | warehouse | base warehouse: 基地仓库 |
| Inventory | 库存 | stock on hand | |
| Consumables | 消耗品 | consumables | |
| Material | 材料 | material | |
| Input / Output | 输入 / 产出 | input / output | |
| Throughput | 吞吐量 | throughput | |
| Yield | 产量 | output quantity | |
| Days of supply | 供应天数 | days of supply | |
| Profit | 利润 | profit | |
| Profitability | 盈利分析 | profitability analysis | the page name, as in the nav |
| Revenue | 收入 | revenue | |
| Cost | 成本 | cost | |
| Net / Gross | 净 / 总 | net / gross | |
| Margin | 利润率 | profit rate | |
| Price | 价格 | price | |
| Plan | 计划 | plan | |
| Scenario | 方案 | scheme / scenario | |
| Step | 步骤 | step | |
| Snapshot | 快照 | snapshot | |
| Leaderboard | 排行榜 | leaderboard | |
| Rank (a position) | 排名 | ranking position | on the leaderboard |
| Rank (a guild role) | 职级 | role grade | see "One English word, two Chinese words" below |
| Donation | 捐赠 | donation | |
| Contract | 合同 | contract | |
| Wishlist | 心愿单 | wishlist | |
| Ship | 飞船 | ship | |
| Route | 航线 | route | |
| Leg (of a flight route) | 航段 | flight leg | |
| Leg (of a production chain) | 环节 | link in a chain | not a flight, so not 航段 |
| Travel time | 航行时间 | travel time | |
| Cargo | 货物 | cargo | |
| Fuel | 燃料 | fuel | |
| Weight | 重量 | weight | |
| Shielding | 屏蔽 | shielding | 隔热屏蔽 / 辐射屏蔽 |
| Distance | 距离 | distance | |
| Settings | 设置 | settings | |
| History | 历史 | history | |
| Activity | 活跃度 | activity level | as on the leaderboard |
| Event | 事件 | event | |
| Time window | 时间范围 | time range | |
| Intel | 情报 | intel | the shared planet-intel feature |
| Shipping | 运输 | shipping | 运输成本 |
| Preset | 预设 | preset | |
| Override | 覆盖 | override | |
| Scrap | 拆除 | demolish | |
| Intermediates | 中间产品 | intermediate products | |
| Company Value | 公司价值 | company value | the abbreviation CV stays CV |
| Supply / Demand | 供应 / 需求 | supply / demand | |
| Shared / Not shared | 已共享 / 未共享 | shared / not shared | |
| N/A | 不适用 | not applicable | one spelling, everywhere |
| Planet | 行星 | planet | never 星球 |
| Partner | 交易对象 | trading partner | |
| Counterparty | 交易对手 | counterparty | a *different* column from Partner, keep them distinct |
| Vacation | 休假 | on leave | never 假期, which is a holiday period |
| Status | 状态 | status | |
| Condition (wear) | 状况 | condition | never 状态, that is Status |
| Age | 成立时长 | time since founding | |
| Net | 净 | net | never 净值 |
| Sales | 销量 | sales volume | |
| Credits (guild currency) | 积分 | points | the unit symbol `cr` stays `cr` |
| Leader / Officer / Member | 会长 / 管理员 / 成员 | leader / admin / member | the three guild roles |
| Permit | 许可证 | permit | |
| Emitter / Reactor | 发射器 / 反应堆 | emitter / reactor | |
| Fertility | 肥沃度 | fertility | |
| Favorites | 收藏 | favourites | |
| Insights | 洞察 | insights | |
| Buffer | 缓冲 | buffer | |
| Repair / Maintenance | 维修 / 维护 | repair / maintenance | two different things, keep them distinct |
| Housing / Jobs | 住房 / 岗位 | housing / jobs | |
| Industry / Tech | 行业 / 科技 | industry / technology | |
| Tracker | Tracker | | the name of our own service, stays English |
| Respec | Respec | | follows Spec, which stays English |
| Qty | 数量 | quantity | a word abbreviation, so it translates |
| Lvl / LVL | 等级 | level | Chinese has no shorter form |
| Global | 全局 | game-wide | never 全球, which means "planet Earth" |
| Galaxy | 星系 | galaxy | there is only one |
| Star system | 恒星系 | star system | never 星系, that is the galaxy |
| Stars (the currency) | 星星 | stars | never 星级, which is a quality rating |
| Unit price | 单价 | unit price | never 单位, which is a unit of measure |
| Exchange (map label) | Exchange | | on the map it names the location, so it stays English |
| Exclusive (perk group) | 互斥 | mutually exclusive | see below: one perk per group |
| Supervision (perk group) | 监管 | supervision | |
| Mission Pref. (perk group) | 任务偏好 | mission preference | |
| Included (bases) | 已纳入 | included / taken in | the footer's base-inclusion filter; one word everywhere |
| Optional consumables | 可选消耗品 | optional consumables | the Insights section |
| Wanted by (workforce tiers) | 需要的Tier | the Tiers that need it | never 需求Tier: that reads as a *level of demand*, which inverts it |
| Mixed (a badge) | 部分提供 | partially provided | never 混合, which is physical blending. It means "on some bases but not others" |
| Have / Need | 库存 / 需求 | stock / need | |
| Limit (a spending cap) | 上限 | upper limit | |
| Total (a line total) | 总价 | total price | one row's amount × price |
| Total (a grand-total row) | 总计 | grand total | see "One English word, two Chinese words" |
| Refresh | 刷新 | refresh | |
| Construction (a project category) | 建造 | construction | |

## Verbs

| English | Chinese | Back-translation |
|---|---|---|
| Save | 保存 | save |
| Load | 加载 | load |
| Reset | 重置 | reset |
| Select | 选择 | select |
| Search | 搜索 | search |
| Copy | 复制 | copy |
| Create | 创建 | create |
| Add | 添加 | add |
| Remove | 移除 | remove |
| Delete | 删除 | delete |
| Show / Hide | 显示 / 隐藏 | show / hide |
| Share | 共享 | share |
| Export / Import | 导出 / 导入 | export / import |

## One English word, two Chinese words

English reuses a word where Chinese has to choose. These are the cases found so
far. Do not "fix" them into a single term: they are deliberate.

| English | Splits into | Because |
|---|---|---|
| Rank | 排名 (leaderboard) / 职级 (guild) | A leaderboard rank is a position. A guild rank is a role (Leader, Officer, Member). 排名 cannot mean a role. |
| Leg | 航段 (flight) / 环节 (chain) | A route leg is a flight segment. A chain leg is a step in a production chain. |
| Condition | 状况 (wear) / 状态 (status) | Building "condition" is wear and tear. Elsewhere "status" is a state. |
| Base | 基地 (a base) / 基础 (a baseline) | See below, this one is a flaw in the English. |
| Total | 总价 (a line total) / 总计 (a grand total) | A table can have both at once: a "Total" column whose cells are amount × price, and a "Total" row at the bottom summing everything. See below, also a flaw in the English. |
| Supply | 供应天数 (days of supply) / 供应 (supply vs demand) | Two unrelated concepts, one English word. The guild wishlist's "Supply" labels a days slider; `market:`'s "Supply" is the opposite of 需求. |

## Known problems in the English source

`en/` is generated from the app and cannot be edited here, but these strings are
genuinely unclear and a translator should not assume they are wrong:

- **`market:materialDetail.orderbook.column.volume`** says "Volume", but the
  column renders a percentage-of-depth bar, not a volume. Translated as 占比
  ("share"), which is what it actually shows.
- **`base:insights.overheadImpact.columns.base`** and **`.baseCost`** are *both*
  the string "Base", in adjacent columns, meaning two different things: the
  base's name, and a baseline cost. Translated 基地 and 基础 respectively so the
  two columns can be told apart.
- **"Starter base" and "Starting base"** are the same thing. Both are defined in
  the source as 12 free terraform slots and 3 star slots. The two spellings are
  an inconsistency in the English, so Chinese uses 初始基地 for both. Do not
  invent a distinction to mirror the English one.
- **`guild:page.wishlist.columns.total`** and **`.totalRow`** are *both* the
  string "Total", in one table, meaning a line total and the grand-total row.
  Translated 总价 and 总计 so the two can be told apart. This is the same defect
  as the `overheadImpact` pair above, so it is a pattern, not a one-off: two
  sibling keys under one `columns` object with an identical value is usually a
  bug in the English.
- **`guild:page.wishlist.columns.unitPrice`** is the string "Price" but renders a
  **per-unit** price, with the next column rendering amount × price. The key name
  knows this; the English does not say it. Chinese can be exact at no cost in
  width, so it is 单价 against 总价.
- **`guild:page.wishlist.supply`** and **`.columns.supply`** are the string
  "Supply" but mean **days of supply**. Check what a string labels before
  translating it.

If you find more of these, open an issue rather than working around them.

## A warning about the "stays English" rule

The rule exists for **one reason**: so a player can read a term here and find
the same term in the game. Before keeping something English, check that the game
actually shows that word.

The perk **group** names are the cautionary tale. "Supervision", "Mission Pref."
and "Exclusive" look like in-game names, and a reviewer duly reverted them to
English. But the game stores those groups as bare numbers (`group: 1`, `group: 2`)
and never displays a name at all: the English labels were invented by this app.
There is nothing to match against, so they translate like any other UI text.

"Exclusive" is worth dwelling on, because it also shows how an English word can
mislead. It does not mean "privileged" (专属). Perks in a group are **mutually
exclusive**, so you may pick only one, which is 互斥.

## Mechanics

### Abbreviations and unit tokens are not words

This is the single most common way to ruin a string. A short English value is
usually a **symbol**, not a word, and translating it produces nonsense that
looks plausible. (In German, `"Ex"` came back as `"HP"`, which in a table column
reads as hit points.)

Leave these exactly as they are:

`cr` `cr/d` `$/u` `#/d` `/d` `/h` `%` `kg` `t` `LY` `CV` `GOI` `ETA` `EX` `Ex`
`A-Z` `T1`–`T5` `Δ`

Two deliberate exceptions, because these are read as words:

| English | Chinese |
|---|---|
| Day-window chips: `1d` `3d` `7d` `30d` `90d` `180d` | `1天` `3天` `7天` `30天` `90天` `180天` |
| Weekdays: `Mon` … `Fri` | `周一` … `周五`, and the one-letter calendar headers `Mo`/`Fr` become `一`/`五` |

**Numbers stay Arabic.** 12, not 十二.

### Example input is not prose

Some strings show the user what they may type. Those examples are **literal
input the app parses**, and localising them breaks the parser silently.

`guild:page.wishlist.limitHint` is the live case:

```
"Most you want to spend. Shorthand works: 300M, 1.5B, 250k. Leave empty for no limit."
```

`300M`, `1.5B` and `250k` must be reproduced **character for character**: not as
万/亿, not as full-width characters, not as Chinese numerals. The parser matches
`/^(-?\d*\.?\d+)([kmb]?)$/` after stripping `$`, commas and spaces, so it accepts
only `k`, `m` and `b`.

Translate the sentence around them. Leave the tokens alone. The validator cannot
catch this one, because the examples are not placeholders.

**This one is a known gap for Chinese players, not a translation problem.** 万
(10⁴) and 亿 (10⁸) are the natural grouping, and a player typing 3亿 gets a
silent parse failure. Fixing that means changing the app's parser, so it belongs
in an issue on the app repo rather than a workaround here.

### No plurals

Chinese has no plural forms. Where English has a `_one` / `_other` pair, **keep
only `_other` and delete `_one`.**

```json
"bases_one": "{{count}} base",      ← delete this line
"bases_other": "{{count}} bases"    ← keep, translate to "{{count}} 个基地"
```

The checker understands this and will not complain.

### Punctuation

Use full-width punctuation inside sentences: `，` `。` `：` `、` `（）` `？` `！`

Do **not** add a trailing `。` to anything the English source does not end with a
period: buttons, column headers, short labels, menu items. Match the English.

```json
"en": "No data available"        →  "暂无数据"      ✅
                                    "暂无数据。"    ❌  English has no period
"en": "This cannot be undone."   →  "此操作无法撤销。"  ✅  English has one
```

### Spacing

**Do not insert spaces** between Chinese characters and adjacent Latin text,
numbers or placeholders. Chinese does not use spaces, and adding them by hand
guarantees inconsistency across 4,000 strings.

```json
"{{count}}个基地"          ✅
"{{count}} 个基地"         ❌
"Iron Ore的价格"           ✅
```

Spaces that are already in the English string, and carry meaning (around a `/`,
or between a number and a unit), stay.

### Placeholders and tags

`{{count}}`, `{{name}}` and the like must survive **verbatim, spelling
included**. Word order will often move them, which is fine:

```
"Showing {{count}} of {{total}} bases"  →  "显示 {{total}} 个基地中的 {{count}} 个"
```

Tags like `<strong>` in a `<Trans>` string must survive with the same names, and
must still wrap the words they are meant to emphasise.

Both rules are enforced by `scripts/i18n-validate.mjs`, which runs on every PR.

## Status

**Machine-drafted, not reviewed by a native speaker.** The maintainer does not
read Chinese and cannot check it. It is published because a rough translation
that a native speaker can correct beats an empty folder that nobody starts.

If you read Chinese: corrections are wanted, no matter how small, and you do not
need to fix everything to open a PR. Wording that is merely awkward is worth
fixing, not just wording that is wrong.
