# DRIXOR Agent Skill

Read this file before minting DRIXOR for a user. DRIXOR is a miner robot NFT project on BNB Chain. Robots mine $DRX passively.

## Project facts
- Total robots: 7,000. Free deck 2,000, paid deck 5,000. The two decks are separate.
- Free: 2,000 robots, 1 design, mines 3 $DRX per day.
- Paid: Common 4,000 at 15 $DRX per day, Rare 600 at 82.84, Epic 300 at 194.67, Legendary 100 at 457.47.
- $DRX total supply: 1,000,000,000. Miner Vault 750,000,000, released only through mining claims. Operations 250,000,000. No liquidity pool yet.
- Mining is passive. Claims are manual. Unclaimed $DRX accrues for up to 48 hours per robot, and the claim right stays with the robot if it is sold.
- Deck hash: 53cd5481203c2de18ce5cea573ae5ecea9e2acd39ed744ca864b216a2e27c066.
- Contract: not deployed yet.

## Before any mint
1. Check whether an official DRIXOR contract is published. If no contract is published, stop and tell the user that minting is not open yet. Never invent a contract address.
2. Confirm the live contract address, the mint price, and the Agent ID gate with the live contract at mint time. The price and gate are not final in this file, so read them from the contract, not from memory.
3. Check the wallet: Agent ID status, free mints already used, and paid mints already made.
4. Show the user the exact total for the requested mint before confirming anything.

## Free mint
- One per wallet, forever. Gas only.
- An Agent ID is required.
- Free robots are drawn from the free deck and mine 3 $DRX per day.

## Paid mint
- Bulk mint: 1 to 30 robots in one transaction.
- No total cap per wallet.
- The price per mint rises with each paid mint from the same wallet. Always quote the exact total for the whole batch before the user confirms.
- Paid robots are drawn from the paid deck. The tier is revealed at mint: Common 80 percent of the paid deck, Rare 12 percent, Epic 6 percent, Legendary 2 percent.

## Claiming $DRX
- Claims are manual. Tell the user the accrued amount and the claim fee from the live contract before claiming.
- Claim right stays with the robot if it is sold.

## What not to do
- Never show a mint price from this file or from memory. Prices are confirmed from the live contract at mint time.
- Never claim the contract is deployed when it is not.
- Never link to other projects from DRIXOR pages.
