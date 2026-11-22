// Convite no link de download (21/11/2026): monadlabs.org/download.html?c=MNDAXXXXXX
// Mostra o código e copia ao tocar; o app MONAD lê o código copiado na primeira abertura e preenche sozinho.
(function () {
  var m = /[?&]c=([A-Za-z0-9_]{4,16})/.exec(location.search);
  var box = document.getElementById("convite");
  if (!m || !box) return;
  var codigo = m[1].toUpperCase();
  if (!/^MNDA[A-Z0-9_]{4,12}$/.test(codigo)) return;
  document.getElementById("convite-codigo").textContent = codigo;
  box.hidden = false;
  var btn = document.getElementById("convite-copiar");
  btn.addEventListener("click", function () {
    var ok = function () { btn.textContent = btn.getAttribute("data-ok"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codigo).then(ok, ok);
    } else {
      var t = document.createElement("textarea"); t.value = codigo; document.body.appendChild(t);
      t.select(); try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(t); ok();
    }
  });
})();
