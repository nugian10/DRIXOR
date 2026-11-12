/* DRIXOR nav — hamburger menu (mobile).
   The menu is a checkbox toggle, so it opens without JavaScript too:
   the label toggles the checkbox and CSS shows the panel.
   This file only adds niceties: close on link click, close on Escape,
   and keep aria-expanded in sync. If this file fails to load, the
   checkbox toggle still works. */
(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var btn = document.querySelector(".nav-toggle-btn");
  var nav = document.getElementById("main-nav");
  if (!toggle || !btn || !nav) return;

  function sync() {
    btn.setAttribute("aria-expanded", toggle.checked ? "true" : "false");
  }
  toggle.addEventListener("change", sync);
  sync();

  nav.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (a) {
      toggle.checked = false;
      sync();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      sync();
      btn.focus();
    }
  });
})();
