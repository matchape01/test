/**
 * TANTRAMOUR 2026 — * Référentiel : Types d'ateliers
 * Chaque entrée : { id, value, label }
 *   id    : clé unique (stable, ne jamais changer)
 *   value : valeur stockée dans AGENDA (champ "type")
 *   label : texte affiché dans les listes déroulantes
 */
const REF_TYPES = [
  { id: "T_TANTRA_AM", value: "ATELIERS TANTRA (AM)", label: "ATELIERS TANTRA (AM)" },
  { id: "T_TANTRA_PM", value: "ATELIERS TANTRA (PM)", label: "ATELIERS TANTRA (PM)" },
  { id: "T_ART_AM", value: "ATELIER ARTISTIQUE (AM)", label: "ATELIER ARTISTIQUE (AM)" },
  { id: "T_ART_PM", value: "ATELIER ARTISTIQUE (PM)", label: "ATELIER ARTISTIQUE (PM)" },
  { id: "T_CEREMONIE", value: "CEREMONIE & CONCERT", label: "CEREMONIE & CONCERT" },
  { id: "T_LOVE_TEMPLE", value: "LOVE TEMPLE", label: "LOVE TEMPLE" },
  { id: "T_YOGA", value: "MEDITATION / YOGA", label: "MEDITATION / YOGA" },
  { id: "T_POOL", value: "POOL PARTY", label: "POOL PARTY" },
  { id: "T_PREPA", value: "PREPA & LOGITICS", label: "PREPA & LOGITICS" },
  { id: "T_RASSEMBLEMENT", value: "RASSEMBLEMENT", label: "RASSEMBLEMENT" },
  { id: "T_REPAS", value: "REPAS & PAUSE", label: "REPAS & PAUSE" },
  { id: "T_REUNION", value: "REUNION D'EQUIPE", label: "REUNION D'EQUIPE" },
  { id: "T_SUPPORT", value: "SUPPORT EMOTIONNEL", label: "SUPPORT EMOTIONNEL" },
  { id: "T_TANTRA_CAFE", value: "TANTRA CAFE & CONFERENCE", label: "TANTRA CAFE & CONFERENCE" },
];
