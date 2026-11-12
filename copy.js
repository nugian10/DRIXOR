/* DRIXOR copy-prompt — copies the short agent prompt to the clipboard.
   Works with the Clipboard API, with a textarea fallback for older
   browsers. The "Copied" label follows the page language. */
(function () {
  "use strict";
  var btn = document.getElementById("copy-prompt-btn");
  var pre = document.getElementById("agent-prompt-text");
  if (!btn || !pre) return;

  var COPIED = { en: "Copied", ja: "コピーしました", zh: "已复制" };

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
  }

  btn.addEventListener("click", function () {
    var text = pre.textContent;
    var original = btn.textContent;
    function show(ok) {
      if (ok) {
        var lang = (document.documentElement.lang || "en").slice(0, 2);
        btn.textContent = COPIED[lang] || COPIED.en;
        setTimeout(function () { btn.textContent = original; }, 2000);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { show(true); },
        function () { fallbackCopy(text, show); }
      );
    } else {
      fallbackCopy(text, show);
    }
  });
})();
