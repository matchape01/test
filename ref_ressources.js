/**
 * TANTRAMOUR 2026 — Référentiel Unifié : Ressources
 *
 * ⚠️  Ce fichier doit être chargé APRÈS ref_resource_types.js
 *
 * Chaque entrée : { id, value, roles }
 *   id    : clé unique (stable, ne jamais changer) — préfixe "R_"
 *   value : nom exact tel qu'il apparaît dans AGENDA
 *   roles : tableau des rôles possibles pour cette personne
 *           Valeurs acceptées : "facilitateur" | "helper" | "traducteur" | "angel"
 *
 * ⚠️  Pour les rapports existants, les alias de compatibilité en bas de fichier
 *     reconstituent automatiquement REF_FACILITATEURS, REF_HELPERS,
 *     REF_TRADUCTEURS et REF_ANGELS depuis cette liste.
 */
var REF_RESSOURCES = [
  { id: "R_ALEXANDRE_F",     value: "Alexandre Fourcault",                       roles: ["helper", "traducteur"] },
  { id: "R_ALEXANDRE_R",     value: "Alexandre Roque - Bhaskar",                 roles: ["helper", "traducteur"] },
  { id: "R_ALEXANDRE_S",     value: "Alexandre Sattler",                         roles: ["helper", "traducteur"] },
  { id: "R_ALICE",           value: "Alice",                                     roles: ["facilitateur"] },
  { id: "R_AMANA",           value: "Amana (William Duplain)",                   roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_ARNAUD",          value: "Arnaud",                                    roles: ["helper", "traducteur"] },
  { id: "R_AUDREY",          value: "Audrey Barthelemy",                         roles: ["facilitateur"] },
  { id: "R_AURELIE",         value: "Aurelie Lechardeur",                        roles: ["helper", "traducteur", "angel"] },
  { id: "R_BORIS",           value: "Boris Desvignes",                           roles: ["facilitateur", "helper", "traducteur", "angel"] },
  { id: "R_BRUNO",           value: "Bruno Deck",                                roles: ["facilitateur"] },
  { id: "R_CARINE",          value: "Carine Janez",                              roles: ["helper", "traducteur"] },
  { id: "R_CEDRIC",          value: "Cedric Vesper",                             roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_CLAUDE",          value: "Claude Brame",                              roles: ["facilitateur"] },
  { id: "R_CLEMENT",         value: "Clement Victor (Jivan Mutti)",              roles: ["facilitateur"] },
  { id: "R_DAMIEN",          value: "Damien Eissen",                             roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_DANIEL",          value: "Daniel Latapie",                            roles: ["facilitateur", "helper", "traducteur", "angel"] },
  { id: "R_DAVID",           value: "David Llorca",                              roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_DELPHINE",        value: "Delphine Del Dupre",                        roles: ["helper", "traducteur"] },
  { id: "R_DORIAN",          value: "Dorian Vallet",                             roles: ["facilitateur"] },
  { id: "R_ECHOCLEM",        value: "Echo Clem (Clement Marchal)",               roles: ["helper"] },
  { id: "R_EMMA",            value: "Emma Roussel",                              roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_EMMANUELLE",      value: "Emmanuelle Cueff (Suman)",                  roles: ["facilitateur"] },
  { id: "R_FELIX",           value: "Felix Ardevol",                             roles: ["facilitateur"] },
  { id: "R_FREDERIC",        value: "Frederic Chalard",                          roles: ["helper", "traducteur"] },
  { id: "R_GUY",             value: "Guy El Hadad - Israel",                     roles: ["facilitateur"] },
  { id: "R_HELENE",          value: "Helene",                                    roles: ["facilitateur"] },
  { id: "R_ISHVARI",         value: "Ishvari",                                   roles: ["facilitateur"] },
  { id: "R_JOE",             value: "Joe Jam",                                   roles: ["facilitateur"] },
  { id: "R_KELLY",           value: "Kelly Aura",                                roles: ["facilitateur"] },
  { id: "R_LAURENCE",        value: "Laurence Heitzmann",                        roles: ["facilitateur"] },
  { id: "R_LAURENT",         value: "Laurent Lacoste",                           roles: ["facilitateur"] },
  { id: "R_LINDA",           value: "Linda Stachetti",                           roles: ["facilitateur", "helper", "traducteur", "angel"] },
  { id: "R_MAEVA",           value: "Maeva Mantione",                            roles: ["helper", "traducteur"] },
  { id: "R_MAHADEVI",        value: "Mahadevi (Tina Defoy)",                     roles: ["facilitateur"] },
  { id: "R_MATTHIEU",        value: "Matthieu Chapeleau (Atman)",                roles: ["facilitateur", "helper"] },
  { id: "R_MITSCH",          value: "Mitsch Kohn",                               roles: ["facilitateur"] },
  { id: "R_MUKTI",           value: "Mukti - Cecile Yvorel",                     roles: ["helper", "traducteur", "angel"] },
  { id: "R_OUR_ECHO",        value: "Our Echo",                                  roles: ["facilitateur"] },
  { id: "R_PASCAL",          value: "Pascal de Lacaze",                          roles: ["facilitateur"] },
  { id: "R_PAUL",            value: "Paul Raj Amar",                             roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_PHILIPPE",        value: "Philippe Hanrion",                          roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_SABRYNA",         value: "Sabryna",                                   roles: ["facilitateur"] },
  { id: "R_SAMANTHA",        value: "Samantha Marvels",                          roles: ["facilitateur"] },
  { id: "R_SANDRINE",        value: "Sandrine Bettinelli",                       roles: ["facilitateur"] },
  { id: "R_SCOTT",           value: "Scott McClure",                             roles: ["facilitateur"] },
  { id: "R_SELMA",           value: "Selma (Celine Laroche)",                    roles: ["facilitateur"] },
  { id: "R_SEVDA",           value: "Sevda Duroy",                               roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_SHIVACHRIS",      value: "ShivaChris",                                roles: ["facilitateur"] },
  { id: "R_SIMONE",          value: "Simone Bikene",                             roles: ["facilitateur"] },
  { id: "R_SOPHIE",          value: "Sophie O'Heix",                             roles: ["facilitateur", "helper", "traducteur"] },
  { id: "R_STEPHANE",        value: "Stephane Ahmed",                            roles: ["facilitateur"] },
  { id: "R_TEST",            value: "TEST",                                      roles: ["facilitateur", "helper", "traducteur", "angel"] },
  { id: "R_VERA",            value: "Vera De Sousa",                             roles: ["helper", "traducteur"] },
  { id: "R_VERONIQUE",       value: "Veronique Santini Bottemer",                roles: ["helper", "traducteur"] },
  { id: "R_VIRGINIE",        value: "Virginie Bertrand",                         roles: ["facilitateur", "helper", "traducteur", "angel"] },
  { id: "R_YANNICK",         value: "Yannick Bohrer",                            roles: ["facilitateur", "helper", "traducteur"] },
];


// ─── Alias de compatibilité ───────────────────────────────────────────────────
// Ces 4 variables reconstituent les anciens référentiels depuis REF_RESSOURCES.
// Les rapports existants continuent de fonctionner sans modification.
var REF_FACILITATEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("facilitateur") !== -1; })
  .map(function(r){ return { id: "F_" + r.id.slice(2), value: r.value }; });

var REF_HELPERS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("helper") !== -1; })
  .map(function(r){ return { id: "H_" + r.id.slice(2), value: r.value }; });

var REF_TRADUCTEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("traducteur") !== -1; })
  .map(function(r){ return { id: "TR_" + r.id.slice(2), value: r.value }; });

var REF_ANGELS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("angel") !== -1; })
  .map(function(r){ return { id: "A_" + r.id.slice(2), value: r.value }; });
