/**
 * TANTRAMOUR 2026 — Référentiel : Types d'ateliers
 * Chaque entrée : { id, value, label, minRes, minHelpers, minTrad, tradCounts }
 *   minRes     : nb total minimum de ressources
 *   minHelpers : nb minimum de helpers
 *   minTrad    : 1 = traducteur requis si anglophone
 *   tradCounts : 1 = le traducteur compte dans minRes
 */
var REF_TYPES = [
  { id: "T_TANTRA_AM", value: "ATELIERS TANTRA (Matin)", label: "ATELIERS TANTRA (Matin)", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_TANTRA_PM", value: "ATELIERS TANTRA (Apres-Midi)", label: "ATELIERS TANTRA (Apres-Midi)", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_ART_AM", value: "ATELIER ARTISTIQUE (Matin)", label: "ATELIER ARTISTIQUE (Matin)", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_ART_PM", value: "ATELIER ARTISTIQUE (Apres-Midi)", label: "ATELIER ARTISTIQUE (Apres-Midi)", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_CEREMONIE", value: "CEREMONIE & CONCERT", label: "CEREMONIE & CONCERT", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_LOVE_TEMPLE", value: "LOVE TEMPLE", label: "LOVE TEMPLE", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_YOGA", value: "MEDITATION / YOGA", label: "MEDITATION / YOGA", minRes: 1, minHelpers: 1, minTrad: 0, tradCounts: 1 },
  { id: "T_DJ", value: "DJ Set", label: "DJ Set", minRes: 1, minHelpers: 1, minTrad: 0, tradCounts: 1 },
  { id: "T_PREPA", value: "PREPA & LOGISTICS", label: "PREPA & LOGISTICS", minRes: 2, minHelpers: 2, minTrad: 0, tradCounts: 0 },
  { id: "T_RASSEMBLEMENT", value: "RASSEMBLEMENT", label: "RASSEMBLEMENT", minRes: 2, minHelpers: 1, minTrad: 0, tradCounts: 1 },
  { id: "T_REPAS", value: "REPAS & PAUSE", label: "REPAS & PAUSE", minRes: 0, minHelpers: 0, minTrad: 0, tradCounts: 0 },
  { id: "T_TANTRA_CAFE", value: "TANTRA CAFE", label: "TANTRA CAFE", minRes: 2, minHelpers: 1, minTrad: 1, tradCounts: 1 },
  { id: "T_TEST", value: "TEST", label: "TEST", minRes: 0, minHelpers: 0, minTrad: 0, tradCounts: 0 },
  { id: "T_ANGEL", value: "SHIFT ANGEL", label: "SHIFT ANGEL", minRes: 0, minHelpers: 0, minTrad: 0, tradCounts: 0 },
  { id: "T_POOL", value: "POOL PARTY", label: "POOL PARTY", minRes: 1, minHelpers: 1, minTrad: 0, tradCounts: 1 },
  { id: "T_CONF", value: "CONFERENCE", label: "CONFERENCE", minRes: 2, minHelpers: 1, minTrad: 0, tradCounts: 1 },
  { id: "T_MEETING", value: "REUNION", label: "REUNION", minRes: 0, minHelpers: 0, minTrad: 0, tradCounts: 0 },
];
