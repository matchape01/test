/**
 * TANTRAMOUR 2026 — Référentiel : Consignes Type
 * Chaque entrée : { id, valueFr, valueEn, descriptif, placements, actif, types }
 *   id          : identifiant unique (préfixe CONS_)
 *   valueFr     : libellé / texte en français
 *   valueEn     : libellé / texte en anglais
 *   descriptif  : description interne (usage, contexte)
 *   placements  : tableau de valeurs parmi :
 *                 "Avant"       → Consignes helpers : avant l'atelier
 *                 "Pendant"     → Consignes helpers : pendant l'atelier
 *                 "Après"       → Consignes helpers : après l'atelier
 *                 "Logistique"  → Informations logistiques
 *                 "Spécifique"  → Besoins logistiques spécifiques
 *                 "Participant" → Instructions participants
 *   actif       : true = consigne active, false = désactivée globalement
 *   types       : tableau de valeurs REF_TYPES (vide = tous les types)
 */
var REF_CONSIGNES_TYPE = [
  {
    id: "CONS_EXEMPLE",
    valueFr: "💧 Pensez à boire un verre d’eau avant l’atelier et évitez le café.",
    valueEn: "💧 Please drink a glass of water before the workshop and avoid coffee.",
    descriptif: "Consigne d'exemple — à supprimer ou modifier",
    placements: ["Participant"],
    actif: true,
    types: ["MEDITATION / YOGA"]
  },
  {
    id: "CONS_001",
    valueFr: "Veillez à bien répartir les tapis de yoga entre CHENREZIG et SHAKTI. (Pour le cours du matin)",
    valueEn: "Please make sure the yoga mats are properly distributed between CHENREZIG and SHAKTI (for the morning class).",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: ["LOVE TEMPLE"]
  },
  {
    id: "CONS_002",
    valueFr: "Consigne TEST Logistique",
    valueEn: "test PENDANT TEST UK",
    descriptif: "",
    placements: ["Avant","Pendant","Après","Logistique","Spécifique"],
    actif: true,
    types: ["ATELIERS TANTRA (Matin)","ATELIERS TANTRA (Apres-Midi)","ATELIER ARTISTIQUE (Matin)","ATELIER ARTISTIQUE (Apres-Midi)"]
  },
  {
    id: "CONS_003",
    valueFr: "Consignes test AVANT",
    valueEn: "Consignes test AVANT",
    descriptif: "",
    placements: ["Avant"],
    actif: true,
    types: []
  },
  {
    id: "CONS_004",
    valueFr: "Consignes test PENDANT",
    valueEn: "test PENDANT ENG",
    descriptif: "",
    placements: ["Pendant"],
    actif: true,
    types: []
  },
  {
    id: "CONS_005",
    valueFr: "Consignes test APRES",
    valueEn: "test APRES ENG",
    descriptif: "",
    placements: ["Après"],
    actif: true,
    types: []
  },
  {
    id: "CONS_006",
    valueFr: "Consignes TEST Spécifique",
    valueEn: "TEST Spécifique ENG",
    descriptif: "",
    placements: ["Spécifique"],
    actif: true,
    types: []
  },
];
