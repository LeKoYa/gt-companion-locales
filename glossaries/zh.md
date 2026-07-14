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
| Rank | 排名 | rank | |
| Donation | 捐赠 | donation | |
| Contract | 合同 | contract | |
| Wishlist | 心愿单 | wishlist | |
| Ship | 飞船 | ship | |
| Route | 航线 | route | |
| Leg (of a route) | 航段 | leg | |
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
