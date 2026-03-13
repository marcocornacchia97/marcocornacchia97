(function() {
  const PASSWORD = "sonomarco123";
  const COOKIE = "qz_auth";

  function getCookie(name) {
    return document.cookie.split(';').some(function(c) {
      return c.trim().startsWith(name + '=');
    });
  }

  function checkAuth() {
    if (!getCookie(COOKIE)) {
      var pwd = prompt("Inserisci la password:");
      if (pwd !== PASSWORD) {
        if (document.body) {
          document.body.innerHTML = "<div style='text-align:center;margin-top:20vh;font-family:sans-serif'><h2>Accesso negato</h2><p>Password errata.</p></div>";
        }
        return;
      }
      document.cookie = COOKIE + "=1; path=/; max-age=2592000";
    }
  }

  // Esegui quando il DOM è pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkAuth);
  } else {
    checkAuth();
  }

  // Esegui anche dopo ogni navigazione SPA di Quartz
  document.addEventListener("nav", checkAuth);
})();
