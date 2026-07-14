/**
 * TANTRAMOUR 2026 — Référentiel : Types de ressources
 * Chaque entrée : { id, value, label, icon }
 *   id    : clé unique (stable, ne jamais changer)
 *   value : valeur interne utilisée dans la logique (ex: roles[])
 *   label : texte affiché dans l'interface
 *   icon  : emoji associé
 */
var REF_RESOURCE_TYPES = [
  { id: "RT_FACILITATEUR", value: "facilitateur", label: "Facilitateur", icon: "🎓" },
  { id: "RT_HELPER",       value: "helper",       label: "Helper",       icon: "🤝" },
  { id: "RT_TRADUCTEUR",   value: "traducteur",   label: "Traducteur",   icon: "🌐" },
  { id: "RT_ANGEL",        value: "angel",        label: "Angel",        icon: "👼" },
  { id: "RT_ADMIN",        value: "admin",        label: "Admin",        icon: "👼" },
];