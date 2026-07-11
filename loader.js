/**
 * TANTRAMOUR 2026 — Loader de données dynamique
 * ================================================
 * Charge les fichiers JS séquentiellement via injection de <script>.
 * Timestamp sur chaque URL pour contourner le cache GitHub Pages.
 * Compatible CSP strict (pas d'eval, pas de blob).
 */

function loadData(files, callback) {
  var index = 0;

  function loadNext() {
    if (index >= files.length) {
      callback();
      return;
    }
    var file = files[index++];
    var url  = file + '?_=' + Date.now();

    var script = document.createElement('script');
    script.src     = url;
    script.onload  = loadNext;
    script.onerror = function() {
      console.error('[loader] Echec : ' + file);
      loadNext();
    };
    (document.head || document.documentElement).appendChild(script);
  }

  // Lancer au prochain tick pour laisser le DOM finir de se construire
  setTimeout(loadNext, 0);
}
