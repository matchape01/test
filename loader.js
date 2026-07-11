/**
 * TANTRAMOUR 2026 — Loader de données dynamique
 * ================================================
 * Charge data.js (et optionnellement logistics.js) via fetch avec cache:no-store,
 * garantissant que la dernière version est toujours utilisée — même sur GitHub Pages.
 *
 * Usage dans un rapport :
 *   <script src="loader.js"></script>
 *   <script>
 *     loadData(['data.js'], function() {
 *       // AGENDA est disponible ici
 *       init();
 *     });
 *   </script>
 *
 * Pour data + logistics :
 *   loadData(['data.js', 'logistics.js'], function() { init(); });
 */

function loadData(files, callback) {
  // Charge les fichiers en séquence (l'ordre est important)
  function loadNext(index) {
    if (index >= files.length) {
      callback();
      return;
    }
    const url = files[index] + '?_=' + Date.now();
    fetch(url, { cache: 'no-store' })
      .then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status + ' pour ' + files[index]);
        return r.text();
      })
      .then(function(code) {
        // Évaluer le code JS dans le contexte global
        // eslint-disable-next-line no-eval
        (0, eval)(code);
        loadNext(index + 1);
      })
      .catch(function(err) {
        console.error('[loader] Erreur chargement ' + files[index] + ' :', err);
        // En cas d'erreur réseau, on essaie quand même de continuer
        loadNext(index + 1);
      });
  }
  loadNext(0);
}
