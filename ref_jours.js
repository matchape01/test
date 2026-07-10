/**
 * TANTRAMOUR 2026 — Référentiel : Jours
 * Modifier cette liste pour ajouter / renommer / supprimer des jours.
 * Chaque entrée : { id, value, label, date }
 *   id    : clé unique (stable, ne jamais changer)
 *   value : clé utilisée dans AGENDA (champ "jour")
 *   label : texte affiché dans les listes déroulantes
 *   date  : valeur correspondante du champ "date" dans AGENDA
 */
const REF_JOURS = [
  { id: "J1", value: "Jour 1", label: "Jour 1 — Samedi 29 août",       date: "Samedi 29 aout" },
  { id: "J2", value: "Jour 2", label: "Jour 2 — Dimanche 30 août",     date: "Dimanche 30 aout" },
  { id: "J3", value: "Jour 3", label: "Jour 3 — Lundi 31 août",        date: "Lundi 31 aout" },
  { id: "J4", value: "Jour 4", label: "Jour 4 — Mardi 1 septembre",    date: "Mardi 1 septembre" },
  { id: "J5", value: "Jour 5", label: "Jour 5 — Mercredi 2 septembre", date: "Mercredi 2 septembre" },
  { id: "J6", value: "Jour 6", label: "Jour 6 — Jeudi 3 septembre",    date: "Jeudi 3 septembre" },
  { id: "J7", value: "Jour 7", label: "Jour 7 — Vendredi 4 septembre", date: "Vendredi 4 septembre" },
];
