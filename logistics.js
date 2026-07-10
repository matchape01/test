/**
 * TANTRAMOUR 2026 — Informations Logistiques
 * ===========================================
 * Fichier dédié aux informations logistiques détaillées par atelier.
 * Séparé de data.js pour permettre des contenus longs, multi-lignes,
 * richement formatés, sans risquer de casser la syntaxe de AGENDA.
 *
 * Structure :
 *   LOGISTICS = {
 *     "<logisticId>": {
 *       html: "<p>...</p>",   // contenu HTML libre (affiché dans les rapports)
 *       text: "...",          // version texte brut (pour export / recherche)
 *       updatedAt: "YYYY-MM-DD"
 *     },
 *     ...
 *   }
 *
 * La clé logisticId est stockée dans AGENDA[].logisticId.
 * Une entrée AGENDA sans logisticId (ou logisticId vide) n'a pas d'info logistique.
 */

const LOGISTICS = {

  "J1_TEST_MATT": {
    html: "<p><strong>Besoins logistiques</strong></p><ul><li>Besoin logistique TEST avec</li><li>khdzlkhzesd</li><li>khzdlokfghzsd</li><li>khdlkhsdlkfg</li><li>khsdlkghsdlkhg</li><li>khdslokghsdlkhg</li><li>khsdkjoghlskdh</li><li>khsdolkghsdlkh</li><li>kjhsdlkghsdlkgh</li></ul>",
    text: "Besoin logistique TEST avec\nkhdzlkhzesd\nkhzdlokfghzsd\nkhdlkhsdlkfg\nkhsdlkghsdlkhg\nkhdslokghsdlkhg\nkhsdkjoghlskdh\nkhsdolkghsdlkh\nkjhsdlkghsdlkgh",
    updatedAt: "2025-01-01"
  }

};
