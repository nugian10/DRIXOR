/* DRIXOR i18n — English / Japanese / Simplified Chinese.
   Default language is English (en). The visitor's choice is saved
   in localStorage ("drixor-lang") and respected on every visit.
   Static HTML is English, so the site stays English even if this
   file fails to load. Missing keys fall back to English, never blank.
   Names (DRIXOR, $DRX, BNB Chain, SPACE ID, Agent ID), the deck
   hash, tier names (Free/Common/Rare/Epic/Legendary) and numbers
   stay English in every language. The agent prompt in <pre> is
   English only — agents work in English.
   No BNB prices are added here: price labels are translated only.
   No question-mark card, no extra images. */
(function () {
  "use strict";
  var DICT = {"en": {"meta.title": "DRIXOR — Miner Robots on BNB Chain", "meta.desc": "DRIXOR miner robots on BNB Chain. Mint a robot, hold it, mine $DRX every day.", "nav.how": "How it works", "nav.tiers": "Tiers", "nav.mint": "Mint", "nav.token": "$DRX", "nav.faq": "FAQ", "nav.agents": "Agents", "hero.eyebrow": "Miner robots on BNB Chain", "hero.tagline": "Mine $DRX every day.", "hero.lede": "Mint a miner robot, hold it in your wallet, and it mines $DRX passively, every day. No active work, no liquidity pool to chase. The robot does the digging.", "hero.btn_mint": "Start mining", "hero.btn_guide": "Read the agent guide", "alt.hero": "A gold DRIXOR Legendary miner robot", "status.total": "Total robots", "status.chain": "Chain", "status.contract": "Contract", "status.contract_value": "Not deployed yet", "status.deckhash": "Deck hash", "how.h2": "How it works", "how.mint_h": "Mint", "how.mint_p": "Mint a robot through your agent. Free robots are one per wallet, forever. Paid robots can be minted in bulk, up to 30 in one transaction.", "how.hold_h": "Hold", "how.hold_p": "Keep the robot in your wallet. Every robot mines $DRX passively, at the daily rate of its tier.", "how.mine_h": "Mine", "how.mine_p": "$DRX accrues every day while you hold the robot. Unclaimed $DRX accrues for up to 48 hours per robot.", "how.claim_h": "Claim", "how.claim_p": "Claim your $DRX manually through your agent. The claim right stays with the robot if it is sold.", "tiers.h2": "Tiers", "tiers.intro": "Free and paid robots live in separate decks. Free robots have no tier and always mine 3 $DRX per day. Paid robots are drawn from the paid deck at mint, and the tier decides the daily rate.", "tiers.th_tier": "Tier", "tiers.th_supply": "Supply", "tiers.th_share": "Share of paid deck", "tiers.th_rate": "Daily rate", "tiers.free_deck": "Free deck", "tiers.note": "Total supply is 7,000 robots: 2,000 free and 5,000 paid.", "mint.h2": "Mint", "mint.free_h": "Free mint", "mint.free_1": "One per wallet, forever", "mint.free_2": "Gas only", "mint.free_3": "An Agent ID is required", "mint.free_4": "Mines 3 $DRX per day", "mint.free_5": "Free robots are drawn from the free deck", "mint.paid_h": "Paid mint", "mint.paid_1": "Bulk mint, 1 to 30 robots in one transaction", "mint.paid_2": "No total cap per wallet", "mint.paid_3": "The price per mint rises with each paid mint from the same wallet", "mint.paid_4": "Your agent shows the exact total before you confirm", "mint.paid_5": "Paid robots are drawn from the paid deck, tier is revealed at mint", "mint.note": "Minting is agent only. Ask your agent to mint, and it will check the live contract and the exact total before you confirm anything.", "token.intro": "$DRX is the mining token of DRIXOR. It is earned only by holding miner robots and claiming. There is no liquidity pool yet, and $DRX is not listed anywhere yet.", "token.vault_h": "Miner Vault", "token.vault_p": "Released only through mining claims.", "token.ops_h": "Operations", "token.ops_p": "Reserved for running the project.", "token.note": "Total supply of $DRX is 1,000,000,000.", "faq.h2": "FAQ", "faq.q1": "Mining with a DRIXOR robot", "faq.a1": "Every robot mines $DRX every day at the daily rate of its tier. You only need to hold it. Claim manually when you want your $DRX.", "faq.q2": "The free mint", "faq.a2": "One free robot per wallet, forever, gas only. An Agent ID is required. The free robot mines 3 $DRX per day.", "faq.q3": "The paid mint", "faq.a3": "Paid robots are minted in bulk, up to 30 in one transaction, with no total cap per wallet. The tier is drawn at mint, and the price per mint rises with each paid mint from the same wallet.", "faq.q4": "Claiming $DRX", "faq.a4": "Claims are manual, through your agent. Unclaimed $DRX accrues for up to 48 hours per robot, then stops until you claim.", "faq.q5": "Wallet and Agent ID", "faq.a5": "Minting is for wallets with an Agent ID. Your agent checks your Agent ID and shows you the exact mint total before you confirm.", "faq.q6": "Selling a robot", "faq.a6": "Robots can be sold on any marketplace that lists them. Unclaimed $DRX stays with the robot and moves to the new owner.", "agents.h2": "Agents", "agents.intro": "DRIXOR is minted by agents. If you run an agent, here is the prompt to mint for a user. Copy it into your agent and let the agent check the live contract before confirming any mint.", "agents.note": "Machine-readable guides: <a href=\"llms.txt\">llms.txt</a> and <a href=\"agent-skill.md\">agent-skill.md</a>.", "footer.p1": "DRIXOR — miner robots on BNB Chain. Mint, hold, mine $DRX.", "footer.note": "Contract not deployed yet. Minting opens only after the official contract is published."}, "ja": {"meta.title": "DRIXOR — BNB Chainのマイナーロボット", "meta.desc": "BNB ChainのDRIXORマイナーロボット。ロボットをミントして保有し、毎日$DRXを掘ろう。", "nav.how": "仕組み", "nav.tiers": "ティア", "nav.mint": "ミント", "nav.token": "$DRX", "nav.faq": "FAQ", "nav.agents": "エージェント", "hero.eyebrow": "BNB Chainのマイナーロボット", "hero.tagline": "$DRXを毎日マイニング。", "hero.lede": "マイナーロボットをミントしてウォレットに保管するだけ。あとはロボットが毎日受動的に$DRXを掘ります。能動的な作業も、追いかける流動性プールもありません。掘るのはロボットの仕事です。", "hero.btn_mint": "マイニングを始める", "hero.btn_guide": "エージェントガイドを読む", "alt.hero": "金のDRIXOR Legendaryマイナーロボット", "status.total": "総ロボット数", "status.chain": "チェーン", "status.contract": "コントラクト", "status.contract_value": "未デプロイ", "status.deckhash": "Deck hash", "how.h2": "仕組み", "how.mint_h": "ミント", "how.mint_p": "エージェント経由でロボットをミントします。無料ロボットは1ウォレットにつき1体、永久に。有料ロボットはまとめてミントでき、1トランザクションで最大30体までです。", "how.hold_h": "保有する", "how.hold_p": "ロボットをウォレットに保管してください。すべてのロボットがティアごとの日次レートで受動的に$DRXを掘ります。", "how.mine_h": "マイニング", "how.mine_p": "ロボットを保有している間、$DRXは毎日貯まっていきます。未請求の$DRXはロボット1体につき最大48時間まで貯まります。", "how.claim_h": "請求する", "how.claim_p": "エージェント経由で$DRXを手動で請求します。ロボットを売却した場合、請求権はロボットと一緒に新しい所有者へ移ります。", "tiers.h2": "ティア", "tiers.intro": "無料ロボットと有料ロボットは別々のデッキに存在します。無料ロボットにはティアがなく、常に1日3 $DRXを掘ります。有料ロボットはミント時に有料デッキから引かれ、ティアが日次レートを決めます。", "tiers.th_tier": "ティア", "tiers.th_supply": "供給量", "tiers.th_share": "有料デッキの割合", "tiers.th_rate": "日次レート", "tiers.free_deck": "無料デッキ", "tiers.note": "総供給量は7,000体：無料2,000体、有料5,000体です。", "mint.h2": "ミント", "mint.free_h": "無料ミント", "mint.free_1": "1ウォレットにつき1体、永久に", "mint.free_2": "ガス代のみ", "mint.free_3": "Agent IDが必要です", "mint.free_4": "1日3 $DRXを掘る", "mint.free_5": "無料ロボットは無料デッキから引かれます", "mint.paid_h": "有料ミント", "mint.paid_1": "まとめてミント、1トランザクションで1〜30体", "mint.paid_2": "ウォレットごとの総数制限なし", "mint.paid_3": "同じウォレットからの有料ミントごとに、1回あたりの価格が上がります", "mint.paid_4": "確認前にエージェントが正確な合計を表示します", "mint.paid_5": "有料ロボットは有料デッキから引かれ、ティアはミント時に判明します", "mint.note": "ミントはエージェント限定です。エージェントにミントを依頼すると、確認前にライブコントラクトと正確な合計をチェックします。", "token.intro": "$DRXはDRIXORのマイニングトークンです。マイナーロボットを保有して請求することでのみ得られます。流動性プールはまだなく、$DRXはまだどこにも上場していません。", "token.vault_h": "マイナーボルト", "token.vault_p": "マイニングの請求を通じてのみ放出されます。", "token.ops_h": "運営", "token.ops_p": "プロジェクトの運営のために確保されています。", "token.note": "$DRXの総供給量は1,000,000,000です。", "faq.h2": "FAQ", "faq.q1": "DRIXORロボットでマイニング", "faq.a1": "すべてのロボットがティアごとの日次レートで毎日$DRXを掘ります。保有するだけで十分です。$DRXが欲しいときに手動で請求してください。", "faq.q2": "無料ミント", "faq.a2": "1ウォレットにつき無料ロボット1体、永久に、ガス代のみ。Agent IDが必要です。無料ロボットは1日3 $DRXを掘ります。", "faq.q3": "有料ミント", "faq.a3": "有料ロボットはまとめてミントでき、1トランザクションで最大30体まで、ウォレットごとの総数制限はありません。ティアはミント時に引かれ、同じウォレットからの有料ミントごとに1回あたりの価格が上がります。", "faq.q4": "$DRXの請求", "faq.a4": "請求はエージェント経由で手動です。未請求の$DRXはロボット1体につき最大48時間まで貯まり、その後は請求するまで止まります。", "faq.q5": "ウォレットとAgent ID", "faq.a5": "ミントはAgent IDを持つウォレットが対象です。エージェントがあなたのAgent IDを確認し、確認前に正確な合計を表示します。", "faq.q6": "ロボットの売却", "faq.a6": "ロボットは取り扱いのあるマーケットプレイスで売却できます。未請求の$DRXはロボットと一緒に新しい所有者へ移ります。", "agents.h2": "エージェント", "agents.intro": "DRIXORはエージェントによってミントされます。エージェントを運用している方は、ユーザー向けのミント用プロンプトをこちらに用意しました。エージェントにコピーし、ミントを確認する前にライブコントラクトをチェックさせてください。", "agents.note": "機械可読ガイド：<a href=\"llms.txt\">llms.txt</a>と<a href=\"agent-skill.md\">agent-skill.md</a>。", "footer.p1": "DRIXOR — BNB Chainのマイナーロボット。ミントして、保有して、$DRXを掘ろう。", "footer.note": "コントラクトはまだデプロイされていません。ミントは公式コントラクトの公開後に開始されます。"}, "zh": {"meta.title": "DRIXOR — BNB Chain 矿工机器人", "meta.desc": "BNB Chain 上的 DRIXOR 矿工机器人。铸造机器人，持有它，每天挖矿 $DRX。", "nav.how": "工作原理", "nav.tiers": "等级", "nav.mint": "铸造", "nav.token": "$DRX", "nav.faq": "FAQ", "nav.agents": "代理", "hero.eyebrow": "BNB Chain 上的矿工机器人", "hero.tagline": "每天挖矿 $DRX。", "hero.lede": "铸造一个矿工机器人，保存在你的钱包里，它每天被动挖矿 $DRX。无需主动操作，也无需追逐流动性池，挖矿交给机器人。", "hero.btn_mint": "开始挖矿", "hero.btn_guide": "阅读代理指南", "alt.hero": "金色 DRIXOR Legendary 矿工机器人", "status.total": "机器人总数", "status.chain": "链", "status.contract": "合约", "status.contract_value": "尚未部署", "status.deckhash": "Deck hash", "how.h2": "工作原理", "how.mint_h": "铸造", "how.mint_p": "通过你的代理铸造机器人。免费机器人每个钱包限领 1 个，永久有效。付费机器人可批量铸造，单笔交易最多 30 个。", "how.hold_h": "持有", "how.hold_p": "把机器人保存在钱包里。每个机器人都按其等级的日产量被动挖矿 $DRX。", "how.mine_h": "挖矿", "how.mine_p": "持有机器人期间，$DRX 每天累积。未领取的 $DRX 每个机器人最多累积 48 小时。", "how.claim_h": "领取", "how.claim_p": "通过你的代理手动领取 $DRX。如果机器人被出售，领取权随机器人转移给新主人。", "tiers.h2": "等级", "tiers.intro": "免费机器人和付费机器人分属不同的卡池。免费机器人没有等级，每天固定挖矿 3 $DRX。付费机器人在铸造时从付费卡池中抽取，等级决定日产量。", "tiers.th_tier": "等级", "tiers.th_supply": "供应量", "tiers.th_share": "付费卡池占比", "tiers.th_rate": "日产量", "tiers.free_deck": "免费卡池", "tiers.note": "总供应量为 7,000 个机器人：免费 2,000 个，付费 5,000 个。", "mint.h2": "铸造", "mint.free_h": "免费铸造", "mint.free_1": "每个钱包限 1 个，永久有效", "mint.free_2": "仅需 Gas 费", "mint.free_3": "需要 Agent ID", "mint.free_4": "每天挖矿 3 $DRX", "mint.free_5": "免费机器人从免费卡池中抽取", "mint.paid_h": "付费铸造", "mint.paid_1": "批量铸造，单笔交易 1 至 30 个机器人", "mint.paid_2": "每个钱包没有总数上限", "mint.paid_3": "同一钱包每次付费铸造后，单次铸造价格都会上涨", "mint.paid_4": "确认前，你的代理会显示确切总额", "mint.paid_5": "付费机器人从付费卡池中抽取，等级在铸造时揭晓", "mint.note": "铸造仅限通过代理进行。让你的代理代为铸造，它会在你确认之前核查实时合约和确切总额。", "token.intro": "$DRX 是 DRIXOR 的挖矿代币，只能通过持有矿工机器人并领取获得。目前还没有流动性池，$DRX 也尚未在任何地方上架。", "token.vault_h": "矿工金库", "token.vault_p": "仅通过挖矿领取释放。", "token.ops_h": "运营", "token.ops_p": "预留用于项目运营。", "token.note": "$DRX 的总供应量为 1,000,000,000。", "faq.h2": "FAQ", "faq.q1": "用 DRIXOR 机器人挖矿", "faq.a1": "每个机器人每天按其等级的日产量挖矿 $DRX。你只需持有它。想要 $DRX 时手动领取即可。", "faq.q2": "免费铸造", "faq.a2": "每个钱包限领 1 个免费机器人，永久有效，仅需 Gas 费。需要 Agent ID。免费机器人每天挖矿 3 $DRX。", "faq.q3": "付费铸造", "faq.a3": "付费机器人可批量铸造，单笔交易最多 30 个，每个钱包没有总数上限。等级在铸造时抽取，同一钱包每次付费铸造后单次价格都会上涨。", "faq.q4": "领取 $DRX", "faq.a4": "领取是手动的，通过你的代理进行。未领取的 $DRX 每个机器人最多累积 48 小时，之后停止累积，直到你领取为止。", "faq.q5": "钱包与 Agent ID", "faq.a5": "铸造面向持有 Agent ID 的钱包。你的代理会核查你的 Agent ID，并在你确认之前显示确切总额。", "faq.q6": "出售机器人", "faq.a6": "机器人可以在任何上架它的交易市场上出售。未领取的 $DRX 随机器人转移给新主人。", "agents.h2": "代理", "agents.intro": "DRIXOR 由代理铸造。如果你运行代理，这里是为用户铸造的提示词。将其复制到你的代理中，并在确认铸造之前让代理核查实时合约。", "agents.note": "机器可读指南：<a href=\"llms.txt\">llms.txt</a> 和 <a href=\"agent-skill.md\">agent-skill.md</a>。", "footer.p1": "DRIXOR — BNB Chain 上的矿工机器人。铸造、持有、挖矿 $DRX。", "footer.note": "合约尚未部署。铸造仅在官方合约发布后开放。"}};
  var KEY = "drixor-lang";
  var LANGS = ["en", "ja", "zh"];

  function currentLang() {
    try {
      var s = window.localStorage.getItem(KEY);
      if (s && DICT[s]) return s;
    } catch (e) { /* storage unavailable — fall through to default */ }
    return "en";
  }

  function t(key, vars) {
    var l = currentLang();
    var s = (DICT[l] && DICT[l][key] !== undefined) ? DICT[l][key]
      : (DICT.en[key] !== undefined ? DICT.en[key] : key);
    if (vars) {
      for (var n in vars) {
        if (Object.prototype.hasOwnProperty.call(vars, n)) {
          s = s.split("{" + n + "}").join(String(vars[n]));
        }
      }
    }
    return s;
  }

  function apply(l) {
    document.documentElement.lang = l;
    var i, els;
    els = document.querySelectorAll("[data-i18n]");
    for (i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    els = document.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < els.length; i++) {
      els[i].innerHTML = t(els[i].getAttribute("data-i18n-html"));
    }
    els = document.querySelectorAll("[data-i18n-alt]");
    for (i = 0; i < els.length; i++) {
      els[i].setAttribute("alt", t(els[i].getAttribute("data-i18n-alt")));
    }
    var title = document.querySelector("title[data-i18n-title]");
    if (title) document.title = t(title.getAttribute("data-i18n-title"));
    var meta = document.querySelector('meta[name="description"][data-i18n-desc]');
    if (meta) meta.setAttribute("content", t(meta.getAttribute("data-i18n-desc")));
    els = document.querySelectorAll("[data-lang]");
    for (i = 0; i < els.length; i++) {
      els[i].classList.toggle("active", els[i].getAttribute("data-lang") === l);
    }
  }

  function setLang(l) {
    if (!DICT[l]) l = "en";
    try { window.localStorage.setItem(KEY, l); } catch (e) { /* ignore */ }
    apply(l);
  }

  window.DRIXOR_T = t;
  window.DRIXOR_SET_LANG = setLang;
  window.DRIXOR_I18N = DICT;

  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest("[data-lang]") : null;
    if (b) setLang(b.getAttribute("data-lang"));
  });

  apply(currentLang());
})();
