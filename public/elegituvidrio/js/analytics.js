// Medición de "Elegí tu vidrio". Esta app es estática (no pasa por Next), así
// que el ID de GA4 no puede venir de una variable de entorno: se completa acá.
// Tiene que ser el MISMO G-XXXX que NEXT_PUBLIC_GA_ID en Vercel, para que la
// herramienta mida en la misma propiedad que el resto del sitio.
// Ver docs/medicion.md.
(function () {
  var GA_ID = ""; // ← completar con el ID de GA4 (G-XXXXXXXXXX)
  var CLARITY_ID = ""; // ← completar con el ID de Clarity (opcional)

  if (GA_ID) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }

  // Evento propio: en las páginas de resultado, qué vidrio recomendó y con
  // qué necesidades llegó el usuario (?n=accidentes+robo+). Se dispara una
  // vez por página; el nombre del archivo identifica el resultado.
  var path = window.location.pathname;
  var m = path.match(/\/elegituvidrio\/([a-z0-9\-]+)\.html$/);
  var n = (window.location.search.match(/[?&]n=([^&]*)/) || [])[1];
  if (m && m[1] !== "index" && m[1] !== "ficha-tecnica" && window.gtag) {
    gtag("event", "elegi_vidrio_resultado", {
      resultado: m[1],
      necesidades: n ? decodeURIComponent(n).replace(/\+$/, "") : undefined,
    });
  }
})();
