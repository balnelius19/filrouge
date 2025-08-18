document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookieConsent")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="position:fixed;bottom:0;width:100%;background:#eee;padding:15px;text-align:center;box-shadow:0 -2px 5px rgba(0,0,0,0.1);z-index:9999;">
        <p>Ce site utilise des cookies pour améliorer votre expérience. <a href="/politique-confidentialite.html" target="_blank">En savoir plus</a></p>
        <button id="acceptCookies">Accepter</button>
        <button id="refuseCookies">Refuser</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("acceptCookies").onclick = function () {
      localStorage.setItem("cookieConsent", "accepted");
      banner.remove();
      // ici tu peux activer les cookies non essentiels
    };

    document.getElementById("refuseCookies").onclick = function () {
      localStorage.setItem("cookieConsent", "refused");
      banner.remove();
      // ici tu peux bloquer les cookies non essentiels
    };
  }
});
