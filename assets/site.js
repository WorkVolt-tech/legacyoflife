/* Héritage de Vie — language switch + mobile nav */
(function () {
  var KEY = "hdv-lang";

  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === lang);
    });
    // <select> options can't be hidden via CSS reliably — toggle in JS
    document.querySelectorAll("select option[data-lang]").forEach(function (o) {
      var match = o.getAttribute("data-lang") === lang;
      o.hidden = !match;
      o.disabled = !match;
      if (match && o.parentElement.selectedIndex < 0) o.selected = true;
    });
    document.querySelectorAll("select").forEach(function (sel) {
      var cur = sel.options[sel.selectedIndex];
      if (!cur || cur.hidden) {
        for (var i = 0; i < sel.options.length; i++) {
          if (!sel.options[i].hidden) { sel.selectedIndex = i; break; }
        }
      }
    });
  }

  function initLang() {
    var saved = "fr";
    try { saved = localStorage.getItem(KEY) || "fr"; } catch (e) {}
    setLang(saved);
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () {
        setLang(b.getAttribute("data-set-lang"));
      });
    });
  }

  function initNav() {
    var t = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (!t || !nav) return;
    t.addEventListener("click", function () { nav.classList.toggle("open"); });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  function initForm() {
    var f = document.querySelector("form[data-contact]");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = f.querySelector(".form-msg");
      if (msg) msg.style.display = "block";
      f.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang(); initNav(); initForm();
  });
})();
