/* DRIXOR live minted count — read-only.
   Reads totalSupply() from the official NFT contract through public
   BSC JSON-RPC endpoints. No wallet connection, no writes, no keys.
   The value shown starts at "0 / 7,000" (the verified on-chain
   totalSupply at launch prep). If every RPC fails, the last shown
   value stays — this page never invents a number. */
(function () {
  "use strict";

  var NFT = "0x09e9B9Bff5df2931818aB731B10610DE293a0dCF";
  var TOTAL_SUPPLY = 7000;
  var RPCS = [
    "https://bsc-dataseed.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://rpc.ankr.com/bsc",
    "https://bsc-rpc.publicnode.com",
  ];
  var TIMEOUT_MS = 8000;

  function format(value) {
    return value.toLocaleString("en-US") + " / " + TOTAL_SUPPLY.toLocaleString("en-US");
  }

  function callRpc(url, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (!done) { done = true; reject(new Error("timeout")); }
      }, timeoutMs);
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "eth_call",
          params: [{ to: NFT, data: "0x18160ddd" }, "latest"],
        }),
      })
        .then(function (resp) {
          if (!resp.ok) throw new Error("http " + resp.status);
          return resp.json();
        })
        .then(function (json) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          if (!json || typeof json.result !== "string") throw new Error("bad rpc result");
          resolve(BigInt(json.result));
        })
        .catch(function (err) {
          if (!done) { done = true; clearTimeout(timer); reject(err); }
        });
    });
  }

  function readMinted() {
    var el = document.getElementById("minted-value");
    if (!el) return;
    var chain = Promise.reject(new Error("start"));
    RPCS.forEach(function (url) {
      chain = chain.catch(function () { return callRpc(url, TIMEOUT_MS); });
    });
    chain
      .then(function (total) {
        el.textContent = format(Number(total));
      })
      .catch(function () {
        /* All RPCs failed — keep the last shown value, never a fake one. */
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", readMinted);
  } else {
    readMinted();
  }
  /* Refresh every 60 seconds so the count stays live while the page is open. */
  setInterval(readMinted, 60000);
})();
