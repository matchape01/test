/**
 * TANTRAMOUR 2026 — Moteur de traduction (i18n)
 * ==============================================
 * Dépendance : ref_translations.js doit être chargé AVANT ce fichier.
 *
 * API publique :
 *   I18n.t(key)           → traduction dans la langue courante (fr par défaut)
 *   I18n.setLang(lang)    → change la langue ('fr' | 'en'), persiste en localStorage
 *   I18n.getLang()        → langue courante
 *   I18n.apply()          → ré-applique toutes les traductions au DOM
 *   I18n.renderToggleBtn(containerId) → injecte le bouton dans l'élément cible
 *
 * Utilisation dans le HTML :
 *   <span data-i18n="col_jour">Jour</span>
 *   <option data-i18n="filter_tous_jours">Tous les jours</option>
 *   <button data-i18n="nav_mode_nuit">Mode Nuit</button>
 *   <input placeholder="..." data-i18n-placeholder="msg_rechercher">
 *   <th title="..." data-i18n-title="col_piment">🌶️</th>
 */

var I18n = (function() {
  var _lang = 'fr';
  var _dict = {};   // key → { fr, en }

  // ── Initialisation ────────────────────────────────────────────────────────
  function init() {
    // Construire le dictionnaire à partir de REF_TRANSLATIONS
    if (typeof REF_TRANSLATIONS !== 'undefined') {
      REF_TRANSLATIONS.forEach(function(entry) {
        _dict[entry.key] = { fr: entry.fr, en: entry.en };
      });
    }
    // Lire la langue sauvegardée
    try {
      var saved = localStorage.getItem('tm_lang');
      if (saved === 'en' || saved === 'fr') _lang = saved;
    } catch(e) {}
    // Appliquer après chargement du DOM
    applyOnReady();
  }

  // ── Traduction ────────────────────────────────────────────────────────────
  function t(key) {
    var entry = _dict[key];
    if (!entry) return key;
    return entry[_lang] || entry['fr'] || key;
  }

  // ── Changement de langue ──────────────────────────────────────────────────
  function setLang(lang) {
    if (lang !== 'fr' && lang !== 'en') return;
    _lang = lang;
    try { localStorage.setItem('tm_lang', lang); } catch(e) {}
    // Mettre à jour l'attribut html lang
    document.documentElement.lang = lang;
    apply();
    // Mettre à jour le(s) bouton(s) de langue
    updateToggleBtns();
    // Émettre un événement personnalisé pour les composants qui en ont besoin
    try {
      document.dispatchEvent(new CustomEvent('tm_lang_changed', { detail: { lang: lang } }));
    } catch(e) {}
  }

  function getLang() { return _lang; }

  // ── Application au DOM ────────────────────────────────────────────────────
  // ── Application initiale après init ──────────────────────────────────────
  function applyOnReady() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { apply(); updateToggleBtns(); });
    } else {
      apply();
      updateToggleBtns();
    }
  }

  function apply() {
    // Mettre à jour l'attribut html lang
    document.documentElement.lang = _lang;

    // Texte visible : data-i18n="key"
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      // Ne pas écraser les enfants HTML complexes — utiliser textContent seulement
      // si l'élément ne contient que du texte ou des éléments inline simples
      if (el.children.length === 0) {
        el.textContent = val;
      } else {
        // Pour les éléments avec enfants (ex: bouton avec icône), on cherche
        // un span.i18n-text enfant, sinon on skip
        var span = el.querySelector('.i18n-text');
        if (span) span.textContent = val;
      }
    });

    // Placeholder : data-i18n-placeholder="key"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    // Title (tooltip) : data-i18n-title="key"
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });

    // aria-label : data-i18n-aria="key"
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // Options de <select> avec data-i18n
    // (même logique que les éléments texte)
  }

  // ── Bouton de changement de langue ───────────────────────────────────────
  function updateToggleBtns() {
    document.querySelectorAll('.tm-lang-btn').forEach(function(btn) {
      // En français → affiche "EN" pour basculer vers anglais
      // En anglais  → affiche "FR" pour basculer vers français
      btn.textContent = _lang === 'fr' ? '🌐 EN' : '🌐 FR';
      btn.setAttribute('title', _lang === 'fr' ? 'Switch to English' : 'Passer en Français');
    });
  }

  /**
   * Crée et injecte un bouton de langue dans l'élément dont l'id est fourni.
   * @param {string} containerId  id de l'élément conteneur (ex: 'headerActions')
   * @param {string} [cssClass]   classe(s) CSS additionnelle(s) à ajouter au bouton
   */
  function renderToggleBtn(containerId, cssClass) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var btn = document.createElement('button');
    btn.className = 'tm-lang-btn' + (cssClass ? ' ' + cssClass : '');
    btn.style.cssText = 'cursor:pointer;background:var(--surface,#f7f8fa);border:1px solid var(--border,#e5e7eb);border-radius:6px;padding:6px 14px;font-size:13px;color:var(--text,#1f2328);font-family:inherit;font-weight:600;';
    btn.addEventListener('mouseover', function() { btn.style.background = 'var(--border,#e5e7eb)'; });
    btn.addEventListener('mouseout',  function() { btn.style.background = 'var(--surface,#f7f8fa)'; });
    btn.addEventListener('click', function() {
      setLang(_lang === 'fr' ? 'en' : 'fr');
    });
    updateToggleBtns(); // texte initial
    // Forcer le bon texte sur ce nouveau bouton
    btn.textContent = _lang === 'fr' ? '🌐 EN' : '🌐 FR';
    btn.title = _lang === 'fr' ? 'Switch to English' : 'Passer en Français';
    container.appendChild(btn);
  }

  // ── Démarrage automatique ────────────────────────────────────────────────
  init();

  return { t: t, setLang: setLang, getLang: getLang, apply: apply, renderToggleBtn: renderToggleBtn, updateToggleBtns: updateToggleBtns };

})();
