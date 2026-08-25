/**
 * TANTRAMOUR 2026 — Référentiel : Lieux / Salles
 * Chaque entrée : { id, value, label, nomOfficiel, description, capacite }
 *   value       : identifiant technique utilisé dans data.js
 *   label       : libellé court affiché dans les rapports
 *   nomOfficiel : nom complet / officiel du lieu
 *   description : description du lieu (équipements, usage...)
 *   capacite    : capacité d'accueil (nombre de personnes)
 */
var REF_LIEUX = [
  { id: "L_SHIVA", value: "SHIVA", label: "SHIVA — Chapiteau principal", nomOfficiel: "Chapiteau", description: "", capacite: 60 },
  { id: "L_CHENREZIG", value: "CHENREZIG", label: "CHENREZIG", nomOfficiel: "Orion", description: "", capacite: 50 },
  { id: "L_SHAKTI", value: "SHAKTI", label: "SHAKTI", nomOfficiel: "Grange", description: "", capacite: 50 },
  { id: "L_TARA", value: "TARA", label: "TARA", nomOfficiel: "Grande Bergerie", description: "", capacite: 40 },
  { id: "L_GANESH", value: "GANESH", label: "GANESH", nomOfficiel: "Cayla", description: "", capacite: 30 },
  { id: "L_PISCINE", value: "PISCINE", label: "PISCINE", nomOfficiel: "PISCINE", description: "", capacite: 0 },
  { id: "L_EXTERIEUR", value: "EXTERIEUR", label: "EXTERIEUR", nomOfficiel: "EXTERIEUR", description: "", capacite: 0 },
  { id: "L_DREAM", value: "SALLE DREAM TEAM", label: "SALLE DREAM TEAM", nomOfficiel: "SALLE DREAM TEAM", description: "", capacite: 0 },
  { id: "L_TEST", value: "TEST", label: "TEST", nomOfficiel: "TEST", description: "", capacite: 0 },
  { id: "L_BUDDHA", value: "BUDDHA", label: "BUDDHA", nomOfficiel: "Petite Bergerie", description: "Support Émotionnel ", capacite: 0 },
  { id: "L_HANUMAN", value: "HANUMAN", label: "HANUMAN", nomOfficiel: "Patio", description: "Salle Dream Team", capacite: 0 },
  { id: "L_ANANDA", value: "ANANDA MAALISH", label: "ANANDA MAALISH", nomOfficiel: "Magnanerie", description: "Salle Massage", capacite: 0 },
];
