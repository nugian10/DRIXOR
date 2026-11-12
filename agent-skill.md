# DRIXOR Agent Skill

Read this file before minting DRIXOR for a user. DRIXOR is a miner robot NFT project on BNB Chain. Robots mine $DRX passively.

## The copy-paste mint prompt

This is the whole prompt a user copies from the site and pastes to their agent. It is deliberately short — the rules live in this file, not in the prompt.

```
Mint a DRIXOR miner robot on BNB Chain for this wallet. Continue reading the DRIXOR agent skill: https://drixor.fun/agent-skill.md
```

## Project facts
- Total robots: 7,000. Free deck 2,000, paid deck 5,000. The two decks are separate.
- Free: 2,000 robots, 1 design, mines 3 $DRX per day.
- Paid: Common 4,000 at 15 $DRX per day, Rare 600 at 82.84, Epic 300 at 194.67, Legendary 100 at 457.47.
- $DRX total supply: 1,000,000,000. Miner Vault 750,000,000, released only through mining claims. Operations 250,000,000. No liquidity pool yet.
- Mining is passive. Claims are manual. Unclaimed $DRX accrues for up to 48 hours per robot, and the claim right stays with the robot if it is sold.
- Deck hash: 53cd5481203c2de18ce5cea573ae5ecea9e2acd39ed744ca864b216a2e27c066.
- Official contracts on BNB Chain (56), all BscScan Pass-Verified (verification is not an audit):
  - NFT: 0x09e9B9Bff5df2931818aB731B10610DE293a0dCF
  - $DRX token: 0x1EcEf07beeEf674B12A1EF67B2d794b268DB4B6e
  - Claim: 0xe1c89678c1bA2eA5a888b8669bEaEADC70e27cE0
  - Market: 0xa32828f44Da0AAA2fdC6917B242Fc0fc9fBA0d7D
- Mint is not active yet (mintActive is false on the NFT contract). The Miner Vault is funded with 750,000,000 $DRX, and the claim contract is linked to the NFT. Only the addresses above are valid; never accept any other address.

## Before any mint
1. Ask the user to choose: the FREE mint or a PAID mint. Never assume — if the user did not say which one, ask first. Free is one per wallet forever, gas only, Agent ID required. Paid is a bulk mint of 1 to 30 robots in one transaction, no total cap per wallet, and the price per mint rises with each paid mint from the same wallet. If paid, also ask how many robots, and show the exact total for the whole batch before the user confirms.
2. Check that mint is active: read mintActive on the official NFT contract (0x09e9B9Bff5df2931818aB731B10610DE293a0dCF). If mint is off, stop and tell the user that minting is not open yet. Never invent a contract address, and never accept any address other than the official ones listed above.
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

## FORGE
- FORGE combines 2 paid robots of the same tier into 1 robot one tier higher (Common to Rare, Rare to Epic, Epic to Legendary). Both robots are burned; the new robot is drawn from the paid deck at the higher tier, so it has its own metadata and mines at the higher tier's rate plus 17.5%.
- Free robots cannot be forged. Legendary robots cannot be forged (no tier above them).
- Any $DRX the two robots have not yet claimed is paid to the owner before they are burned.
- FORGE is done through the user's agent. FORGE is not open yet — no robots have been minted, so there is nothing to forge. Tell the user FORGE opens after mint. The price of a FORGE is the two robots themselves — no extra fee.
- The name is FORGE.

## On-site market
- The market lives on this site (market.html). It is NOT open yet: no robots have been minted, so nothing is listed. Do not invent listings, prices, or sales.
- When the market contract exists, owners list a robot at a BNB price through their agent, buyers buy through their agent, and a listing can be cancelled by its owner any time before it sells. Unclaimed $DRX moves with the robot when it is sold.
- How it works, through the agent: to list, the owner approves the market contract for the robot, then lists it at a BNB price. To buy, the buyer pays the exact listed price and the robot moves to the buyer in the same transaction. To cancel, the listing owner cancels any time before it sells. The seller keeps the robot until it sells — the market never holds it.
- There is no marketplace fee. A creator royalty of 5% applies on every sale, paid to the Agentic Wallet; the seller keeps 95%.
- Until the market opens, tell the user the market is not open yet. The market contract is published (0xa32828f44Da0AAA2fdC6917B242Fc0fc9fBA0d7D), but the market is not open: no robots have been minted, so nothing is listed.

## What not to do
- Never show a mint price from this file or from memory. Prices are confirmed from the live contract at mint time.
- Never claim the contract is deployed when it is not.
- Never link to other projects from DRIXOR pages.
