export let listPage = [
  {
    "name": `キャラクター`,
    "markupType": `preposition`,
    "mark": ["{", "}"],
    "url": `character-list`,
    "var": [`list`, ``, `character-list`, [`名前`, `性質・情報`], 0, 0]
  },
  {
    "name": `魔物`,
    "markupType": `preposition`,
    "mark": ["[", "]"],
    "url": `monster-list`,
    "var": [`list`, ``, `monster-list`, [`名前`, `性質・情報`], 0, 0]
  },
  {
    "name": `物事`,
    "markupType": `preposition`,
    "mark": ["(", ")"],
    "url": `thing-list`,
    "var": [`list`, ``, `thing-list`, [`名前`, `性質・情報`], 0, 0]
  },
  {
    "name": `伏線`,
    "markupType": `preposition`,
    "mark": ["<", ">"],
    "url": `foreshadowing-list`,
    "var": [`list`, ``, `foreshadowing-list`, [`識別名`, `内容`], 0, 0]
  },
  {
    "name": `括弧`,
    "markupType": `enclosure`,
    "delete": true,
    "mark": [
      [["#", "#"], "個人・団体の名称"],
      [["%", "%"], "地名"],
      [["&", "&"], "魔物"],
      [["@", "@"], "物事"],
      [["?", "?"], "物価"],
      [["$", "$"], "鍵言のない魔法"],
      [["=", "="], "その他"],
      [["^", "^"], ""],
      [["~", "~"], ""]
    ],
    "url": `mark-list`,
    "var": [`list`, ``, `mark-list`, [`括弧内`, `括弧前後の記述`], 100, 100]
  },
  {
    "name": `魔法`,
    "markupType": `enclosure`,
    "delete": false,
    "mark": [
      [[`〈`, `〉`], ``]
    ],
    "url": `magic-list`,
    "var": [`list`, ``, `magic-list`, [`魔法名`, `説明`], 0, 200]
  }
]
