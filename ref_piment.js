/**
 * TANTRAMOUR 2026 — Référentiel : Piment
 * Indique le niveau d'intensité / sensualité d'un atelier.
 * Chaque entrée : { id, value, label }
 *   id    : clé unique (stable, ne jamais changer)
 *   value : valeur stockée dans AGENDA (champ "piment") — 0, 1, 2 ou 3
 *   label : texte affiché dans les listes déroulantes
 */
var REF_PIMENT = [
  { id: "P_0", value: 0, label: "0 — Sans piment" },
  { id: "P_1", value: 1, label: "1 — 🌶️ Doux" },
  { id: "P_2", value: 2, label: "2 — 🌶️🌶️ Moyen" },
  { id: "P_3", value: 3, label: "3 — 🌶️🌶️🌶️ Fort" },
];
