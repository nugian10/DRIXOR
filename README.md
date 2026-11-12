# DRIXOR Site (local build)

Status: built and verified locally. Live at https://nugian10.github.io/DRIXOR/ (GitHub Pages), custom domain drixor.fun pending DNS.

## Languages

Trilingual since 12 Nov 2026 (Bryan's decision 19:52 WIB): English (primary / default), Japanese, Simplified Chinese. Pattern copied from Zigzoo.

- `i18n.js` — all UI strings per language: 74 keys in each of `en`, `ja`, `zh`. Names (DRIXOR, $DRX, BNB Chain, SPACE ID, Agent ID), the deck hash, tier names (Free/Common/Rare/Epic/Legendary) and all numbers stay English in every language. The agent prompt in `<pre>` stays fully English.
- The visitor's choice is saved in localStorage under key `drixor-lang` and respected on the next visit. First visit shows English. Static HTML is English, so the page stays English even if `i18n.js` fails to load; missing keys fall back to English, never blank.
- The switcher (EN / 日本語 / 中文) is in the top bar, visible on desktop and mobile — not hidden in a menu. Buttons are min-height 44px for touch.
- `llms.txt`, `agent-skill.md`, `agents.json`, `robots.txt`, `sitemap.xml` stay English and were not changed for this update.

## How to open locally

```bash
cd ~/workspace/projects/drixor/site
python3 -m http.server 8931
```

Then open `http://127.0.0.1:8931/` in a browser.

## Files

- `index.html` — the whole site on one page, mobile-first, English by default with `data-i18n` keys for all UI strings and a language switcher in the top bar
- `styles.css` — all styling, including the mobile layout at 760px and below and the `.lang-switch` pill buttons
- `i18n.js` — 74 translation keys per language (en / ja / zh), localStorage key `drixor-lang`, English default with fallback
- `hero.png` — the only image on the site, a copy of the gold Legendary robot (`collection/images/legendary.png`, md5 `34ea6767d00e5ca61e906bb87a792e9a`, verified identical)
- `llms.txt` — project summary for AI crawlers
- `agent-skill.md` — full mint instructions for agents
- `agents.json` and `.well-known/agents.json` — the same agent metadata in both places (verified identical, valid JSON)
- `robots.txt` and `sitemap.xml` — see placeholders below

## Rules applied (locked by Bryan)

- One hero image only. No other artwork image anywhere on the site.
- No question-mark card anywhere on the site. The page contains no literal question-mark character. The only two question-mark characters in the whole site folder are the required `<?xml ... ?>` declaration at the top of `sitemap.xml`, not visible content.
- Mint and tier sections are text only: tier names, supply, daily rates.
- No BNB mint price anywhere on the site. Prices are only confirmed by the agent from the live contract at mint time.
- No listing counts, floor prices, or market numbers (timeless copy).
- No cross-links to other projects.
- No version labels anywhere.

## Verification (12 Nov 2026, local)

Served with `python3 -m http.server` and checked with curl plus text checks. Every file returned HTTP 200: `index.html`, `styles.css`, `hero.png`, `llms.txt`, `agent-skill.md`, `agents.json`, `.well-known/agents.json`, `robots.txt`, `sitemap.xml`.

- Exactly 1 `<img>` tag in `index.html`, `src="hero.png"`.
- 0 literal question-mark characters in `index.html`.
- 0 occurrences of a BNB price (`0.000`) in any text file.
- 0 contract addresses (`0x`) in `index.html`. The page says "Contract: not deployed yet".
- 0 mentions of Uncommon, 0 mentions of grafting, 0 cross-links to other projects.
- 0 version labels (`v1`, `v2`, `v3`) in the site text files.
- `agents.json` is byte-identical to `.well-known/agents.json`, and both parse as valid JSON.
- HTML tag balance check passed: no unclosed or stray tags.
- CSS contains a mobile media query (`@media (max-width: 760px)`) that stacks the hero, steps, and two-column sections to one column.

Limitation, stated honestly: no headless browser (Chromium, Playwright) is available in this VM, so no rendered screenshot and no live visual check at 390px or desktop width was possible. The mobile layout was verified by code inspection only (single-column media query, fluid hero image, `width=device-width` viewport). Check the page visually in a real browser, on a phone, before publishing.

## Verification — trilingual (12 Nov 2026, local)

- `node --check i18n.js`: syntax OK.
- 74 keys in each language (en/ja/zh), exact key-set match across all three: no missing keys, no extra keys. All 74 keys referenced in `index.html` exist in the dictionary; no dictionary key is unused. No empty values.
- Functional smoke test (Node, minimal DOM stub — `/tmp/drixor-i18n-run.js`): switching to ja and zh applies the correct strings (tagline, nav, free mint, contract status, FAQ, agents note with links intact, hero alt), sets `document.documentElement.lang`, saves `drixor-lang` in localStorage, and marks the active switcher button. An unknown language falls back to English. No blank applied values.
- Rules re-checked after the change: exactly 1 `<img>` tag, 0 question marks in `index.html` and 0 in any dictionary value (the 3 `?` in `i18n.js` are ternary operators in code, not text), 0 `0x` contract addresses in `index.html`, 0 Uncommon mentions. The single `0.000` hit in the whole folder is this README's own note about the price check, not a price on the site.
- All 10 site files returned HTTP 200 from `python3 -m http.server` (including the new `i18n.js`).

Limitation, stated honestly: the per-language visual render (Japanese/Chinese line breaks, switcher placement on a real phone) has NOT been checked visually here — no headless browser in this VM. Check each language visually in a real browser, on a phone, after pushing live.

## Placeholders and not-final items

- Domain: drixor.fun (decided 12 Nov 2026; not yet purchased — Bryan buys it himself; attach to GitHub Pages after purchase).
- Contract: not deployed yet. The site says so honestly and tells agents to stop if no official contract is published. No contract address is anywhere in the site.
- Mint price and Agent ID gate: not final. The site and the agent files never state a price or a gate. Agents must confirm both from the live contract at mint time.
- Grafting: not mentioned on the site yet, because it is undecided.
- Hero art: `hero.png` is the gold Legendary robot, the one image Bryan chose for the main display.
