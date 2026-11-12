# DRIXOR — Collection

Robot penambang NFT di BNB Chain, mining $DRX pasif per hari. 1 desain per rarity, 5 desain total. Tier Uncommon dihapus — tidak ada di koleksi ini.

## Artwork

`images/` — 5 desain, PNG 1024x1024, gaya mecha detail stylized/ilustrasi:

| Rarity | File | Token |
|---|---|---|
| Free | `free.png` | 2.000 |
| Common | `common.png` | 4.000 |
| Rare | `rare.png` | 600 |
| Epic | `epic.png` | 300 |
| Legendary | `legendary.png` | 100 |

## Supply & token ID

Total 7.000 token. Free dan Paid deck TERPISAH permanen.

| Rarity | Token ID | Rate |
|---|---|---|
| Free | 1–2000 | 3 $DRX/hari |
| Common | 2001–6000 | 15 $DRX/hari |
| Rare | 6001–6600 | 82,84 $DRX/hari |
| Epic | 6601–6900 | 194,67 $DRX/hari |
| Legendary | 6901–7000 | 457,47 $DRX/hari |

## Metadata

`metadata/` — 7.000 file JSON (`1.json`–`7000.json`), satu per token. Tiap file: `name` "DRIXOR #N", `description`, `image`, `attributes` (Rarity, Design, Daily Rate ($DRX), Mining = "Passive").

### Base URI — PLACEHOLDER, belum diverifikasi live

`image` memakai base URI placeholder:

`https://raw.githubusercontent.com/nugian10/DRIXOR/main/collection/images/<file>.png`

**Repo GitHub `nugian10/DRIXOR` BELUM dibuat, jadi URL ini belum bisa diverifikasi live.** Ganti base URI-nya saat repo dibuat (atau saat baseURI final diputuskan), lalu generate ulang metadata / update field `image`.

## Deck

`deck.json` — deck deterministik 7.000 entri (tokenId, rarity, design, rate) terurut tokenId, plus meta: total 7.000, free 2.000 (ID 1–2000), paid 5.000 (ID 2001–7000), seed `0x445249584f52` (hex dari ASCII "DRIXOR").

**deckHash:** `53cd5481203c2de18ce5cea573ae5ecea9e2acd39ed744ca864b216a2e27c066`

Cara hitung (bisa diverifikasi ulang): SHA-256 hex dari canonical deck string — satu baris per token, terurut tokenId, format `tokenId|rarity|design|rate`, baris digabung `\n` tanpa newline di akhir. Contoh: `1|Free|free.png|3`.

## Build & verifikasi

- Build: `python3 build_metadata.py` (generate metadata + deck.json, idempotent).
- Verifikasi: `python3 verify_collection.py`.

Hasil verifikasi (12 Nov 2026): **0 error**.
- 7.000 file metadata, nama file persis `1.json`–`7000.json`, semua JSON valid.
- Jumlah per rarity: Free 2.000, Common 4.000, Rare 600, Epic 300, Legendary 100 — di metadata maupun di deck, dan deck vs metadata cocok per token.
- Semua `image` yang dirujuk ada di `images/`.
- deckHash dihitung ulang dari `deck.json` dan cocok dengan yang tersimpan.

## Yang belum dibuat

Kontrak, situs, deploy, dan push GitHub — sengaja belum dibuat di tahap ini.
