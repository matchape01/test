/**
 * TANTRAMOUR 2026 — GitHub API Save Module
 * ==========================================
 * Remplace le serveur local pour la sauvegarde de fichiers.
 * Fonctionne en environnement statique (GitHub Pages).
 *
 * Usage :
 *   await githubSaveFile('data.js', contenu);
 *
 * Configuration :
 *   Le token GitHub est saisi une fois via le bandeau de config
 *   et stocké dans localStorage sous la clé 'tm_gh_token'.
 */

const GITHUB_OWNER  = 'matchape01';
const GITHUB_REPO   = 'test';
const GITHUB_BRANCH = 'main';   // branche cible (main ou master)

// ── Bandeau de configuration ─────────────────────────────────────────────────
// Injecté automatiquement si le token est absent au moment de la 1ère sauvegarde.

function _ensureConfigBanner() {
  if (document.getElementById('gh-config-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'gh-config-banner';
  banner.style.cssText = [
    'position:fixed','top:0','left:0','right:0','z-index:99999',
    'background:#fffbeb','border-bottom:2px solid #fcd34d',
    'padding:10px 20px','display:flex','align-items:center',
    'gap:10px','flex-wrap:wrap','font-family:-apple-system,"Segoe UI",sans-serif',
    'font-size:13px','color:#92400e'
  ].join(';');

  banner.innerHTML = `
    <span style="font-weight:700">🔑 Token GitHub requis pour sauvegarder :</span>
    <input id="gh-token-input" type="password" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
      style="flex:1;min-width:260px;padding:6px 10px;border:1px solid #fcd34d;
             border-radius:6px;font-size:13px;font-family:inherit;background:#fff;color:#1f2328;"
      value="${localStorage.getItem('tm_gh_token') || ''}">
    <button id="gh-token-save" style="cursor:pointer;background:#3b82d4;color:#fff;
      border:none;border-radius:6px;padding:7px 16px;font-size:13px;font-weight:700;
      font-family:inherit;">Enregistrer</button>
    <button id="gh-token-close" style="cursor:pointer;background:transparent;
      border:none;font-size:18px;color:#92400e;line-height:1;padding:0 4px;">✕</button>
    <span style="font-size:11px;color:#b45309;">
      (Settings GitHub → Developer settings → Personal Access Tokens → scope : <strong>repo</strong>)
    </span>
  `;

  document.body.prepend(banner);

  document.getElementById('gh-token-save').addEventListener('click', () => {
    const val = document.getElementById('gh-token-input').value.trim();
    if (!val) return;
    localStorage.setItem('tm_gh_token', val);
    banner.remove();
  });

  document.getElementById('gh-token-close').addEventListener('click', () => {
    banner.remove();
  });
}

// ── Sauvegarde d'un fichier via l'API GitHub ─────────────────────────────────

/**
 * Sauvegarde un fichier dans le repo GitHub.
 * @param {string} filename  — nom du fichier (ex: 'data.js')
 * @param {string} content   — contenu texte complet du fichier
 * @returns {Promise<boolean>} — true si succès, false sinon
 */
async function githubSaveFile(filename, content) {
  const token = localStorage.getItem('tm_gh_token');

  if (!token) {
    _ensureConfigBanner();
    throw new Error('Token GitHub manquant — renseigne-le dans le bandeau en haut de la page.');
  }

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filename}`;
  const headers = {
    'Authorization': `token ${token}`,
    'Accept':        'application/vnd.github+json',
    'Content-Type':  'application/json'
  };

  // 1. Récupérer le SHA actuel du fichier (nécessaire pour le PUT)
  let sha = null;
  try {
    const getRes = await fetch(`${apiBase}?ref=${GITHUB_BRANCH}`, { headers });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status === 401) {
      localStorage.removeItem('tm_gh_token');
      _ensureConfigBanner();
      throw new Error('Token invalide ou expiré — saisis-en un nouveau.');
    }
    // 404 = fichier n'existe pas encore → sha reste null, on crée
  } catch (err) {
    if (err.message.includes('Token')) throw err;
    throw new Error(`Erreur réseau lors de la lecture de ${filename} : ${err.message}`);
  }

  // 2. Encoder le contenu en Base64
  const encoded = btoa(unescape(encodeURIComponent(content)));

  // 3. Committer le fichier
  const body = {
    message: `[Tantramour 2026] Mise à jour ${filename}`,
    content: encoded,
    branch:  GITHUB_BRANCH,
    ...(sha ? { sha } : {})
  };

  const putRes = await fetch(apiBase, {
    method:  'PUT',
    headers,
    body:    JSON.stringify(body)
  });

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({}));
    throw new Error(err.message || `Erreur GitHub ${putRes.status}`);
  }

  return true;
}
