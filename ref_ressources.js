/**
 * TANTRAMOUR 2026 — Référentiel Unifié : Ressources
 *
 * ⚠️  Ce fichier doit être chargé APRÈS ref_resource_types.js
 *
 * Chaque entrée : { id, value, roles }
 *   id    : clé unique (stable, ne jamais changer) — préfixe "R_"
 *   value : nom exact tel qu'il apparaît dans AGENDA
 *   roles : tableau des rôles possibles pour cette personne
 *           Valeurs acceptées : "animateur" | "helper" | "traducteur" | "angel"
 *
 * ⚠️  Pour les rapports existants, les alias de compatibilité en bas de fichier
 *     reconstituent automatiquement REF_ANIMATEURS, REF_HELPERS,
 *     REF_TRADUCTEURS et REF_ANGELS depuis cette liste.
 */
var REF_RESSOURCES = [
  { id: "R_ALEXANDRE_F",     value: "Alexandre Fourcault",                       roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_ALEXANDRE_S",     value: "Alexandre Sattler",                         roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_AMANA",           value: "Amana",                                     roles: ["animateur", "helper", "traducteur", "colibri"],         langues: ["FR", "EN"], tel: "00 41 79 195 91 74", email: "amana.noname@gmail.com", lien: "https://tantramourfestival.com/equipe/amana/" },
  { id: "R_MATTHIEU",        value: "Atman Clochette (Matthieu)",                roles: ["animateur", "helper", "admin", "manager", "Mi-Colibri"], langues: ["FR"], tel: "06 95 48 53 00", email: "matthieu.chapeleau@gmail.com", lien: "https://tantramourfestival.com/equipe/matthieu-chapeleau/" },
  { id: "R_AUDREY",          value: "Audrey Barthelemy",                         roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "06 60 61 57 13", email: "contact@audreybarthelemy.fr", lien: "https://tantramourfestival.com/equipe/audrey-barthelemy/" },
  { id: "R_AURELIE",         value: "Aurelie Lechardeur",                        roles: ["helper", "angel"],                                      langues: ["FR"], tel: "(+33) 06 08 95 64 17", email: "", lien: "" },
  { id: "R_ALEXANDRE_R",     value: "Bhaskar (Alexandre Roque)",                 roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_BORIS",           value: "Boris Desvignes",                           roles: ["animateur", "helper", "angel", "Mi-Colibri"],           langues: ["FR"], tel: "(+33) 06 79 68 65 39", email: "boris.desvignes@gmail.com", lien: "https://tantramourfestival.com/equipe/boris-desvignes/" },
  { id: "R_BRUNO",           value: "Bruno Deck",                                roles: ["animateur", "healer"],                                  langues: ["FR"], tel: "06 03 26 15 17", email: "brunodeck.matanoma@gmail.com", lien: "https://tantramourfestival.com/equipe/bruno-deck/" },
  { id: "R_CARINE",          value: "Carine Janez",                              roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_CEDRIC",          value: "Cedric Vesper",                             roles: ["animateur", "helper", "artist", "Mi-Colibri"],          langues: ["FR"], tel: "06 26 36 34 90", email: "cedric.vesper@drageau.com", lien: "https://tantramourfestival.com/equipe/cedric-vesper/" },
  { id: "R_CHARLOTTE",       value: "Charlotte Chakshu",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_CLAUDE",          value: "Claude Brame",                              roles: ["animateur", "helper", "colibri", "guest", "artist"],    langues: ["FR"], tel: "06 60 16 25 44", email: "terrenchantee.ok@gmail.com", lien: "https://tantramourfestival.com/equipe/bramelyo/" },
  { id: "R_DAMIEN",          value: "Damien Eissen",                             roles: ["animateur", "helper", "Mi-Colibri"],                    langues: ["FR"], tel: "06 85 47 56 55", email: "damien.eissen@gmail.com", lien: "https://tantramourfestival.com/equipe/damien-eissen/" },
  { id: "R_DANIEL",          value: "Daniel Latapie",                            roles: ["animateur", "helper", "traducteur", "angel", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 26 81 51 07", email: "daniel@daniel-latapie.com", lien: "https://tantramourfestival.com/equipe/daniel-latapie/" },
  { id: "R_DAVID",           value: "David Llorca",                              roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR", "EN"], tel: "07 66 62 00 37", email: "llorca.david@gmail.com", lien: "https://tantramourfestival.com/equipe/david-llorca/" },
  { id: "R_DELPHINE",        value: "Delphine Dupré",                            roles: ["helper", "traducteur"],                                 langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_DIPTI",           value: "Dipti - Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_SURPRISE",        value: "DJ Surprise",                               roles: ["animateur", "artist"],                                  langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_DORIAN",          value: "Dorian Vallet",                             roles: ["animateur", "helper", "traducteur", "manager", "Mi-Colibri"], langues: ["FR", "EN"], tel: "06 27 91 88 51", email: "onemovevallet@gmail.com", lien: "https://tantramourfestival.com/equipe/dorian-vallet/" },
  { id: "R_ECHOCLEM",        value: "Echo Clem (Clement)",                       roles: ["helper", "manager"],                                    langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_EMMA",            value: "Emma Roussel",                              roles: ["animateur", "helper", "Mi-Colibri"],                    langues: ["FR"], tel: "06 88 12 98 66", email: "rousselemma@hotmail.com", lien: "https://tantramourfestival.com/equipe/emma-roussel/" },
  { id: "R_FELIX",           value: "Felix Ardevol",                             roles: ["animateur", "artist"],                                  langues: ["FR"], tel: "06 38 11 03 49", email: "felix@caudiovisuel.com", lien: "https://tantramourfestival.com/equipe/juan-felix/" },
  { id: "R_FRANZ",           value: "Franz Bols thibétains",                     roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_FREDERIC",        value: "Frederic Chalard",                          roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_GUY",             value: "Guy El Hadad",                              roles: ["animateur", "anglophone", "guest", "artist"],           langues: ["EN"], tel: "00 972 527 884 466", email: "guyelhadad@gmail.com", lien: "https://tantramourfestival.com/equipe/3513/" },
  { id: "R_HELENE",          value: "Helene Planquelle",                         roles: ["animateur", "helper", "traducteur", "colibri", "artist"], langues: ["FR", "EN"], tel: "06 23 66 61 95", email: "contact@heleneplanquelle.com", lien: "" },
  { id: "R_ISHVARI",         value: "Ishvari",                                   roles: ["animateur", "helper", "colibri"],                       langues: ["FR", "EN"], tel: "00 91 73052 15791", email: "info@ishvaritantra.com", lien: "https://tantramourfestival.com/equipe/ishvari-melanie/" },
  { id: "R_CLEMENT",         value: "Jivan Muti (Clement Victor)",               roles: ["animateur", "colibri"],                                 langues: ["FR"], tel: "06 70 04 52 68", email: "contact@lalchimiquecie.com; clement.victor@yahoo.fr", lien: "https://tantramourfestival.com/equipe/clement-victor/" },
  { id: "R_JOE",             value: "Joe Jam",                                   roles: ["animateur", "healer"],                                  langues: ["FR", "EN"], tel: "07 68 60 38 76", email: "massagemeditatif@gmail.com", lien: "https://tantramourfestival.com/equipe/joe-jam/" },
  { id: "R_KALISTA",         value: "Kalista",                                   roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_KAREN",           value: "Karen Cayuela",                             roles: ["animateur", "helper", "colibri", "stand"],              langues: ["FR"], tel: "", email: "", lien: "https://tantramourfestival.com/equipe/karen-cayuela/" },
  { id: "R_KELLY",           value: "Kelly Aura",                                roles: ["animateur", "guest", "artist"],                         langues: ["FR"], tel: "06 64 90 86 38", email: "Kellyauramusic@gmail.com", lien: "https://tantramourfestival.com/equipe/kelly-aura/" },
  { id: "R_LAURENCE",        value: "Laurence Heitzmann",                        roles: ["animateur", "guest"],                                   langues: ["FR", "EN"], tel: "06 68 48 98 45", email: "heitzmann.laurence@gmail.com", lien: "https://tantramourfestival.com/equipe/laurence-heitzman-et-laurent-lacoste/" },
  { id: "R_LAURENT",         value: "Laurent Lacoste",                           roles: ["animateur", "guest"],                                   langues: ["FR", "EN"], tel: "06 48 38 21 89", email: "lacoste.laurent@gmail.com", lien: "https://tantramourfestival.com/equipe/laurence-heitzman-et-laurent-lacoste/" },
  { id: "R_LINDA",           value: "Linda Stachetti",                           roles: ["animateur", "helper", "traducteur", "angel", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 60 21 15 63", email: "lindas.facilitatrice@gmail.com", lien: "https://tantramourfestival.com/equipe/linda-stachetti/" },
  { id: "R_MAEVA",           value: "Maeva Mantione",                            roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_MAHADEVI",        value: "Mahadevi (Tina Defoy)",                     roles: ["animateur", "guest"],                                   langues: ["FR", "EN"], tel: "00 1 450 263 4795", email: "lalitatina@yahoo.ca", lien: "https://tantramourfestival.com/equipe/mahadevi-tina-defoy-canada/" },
  { id: "R_MITSCH",          value: "Mitsch Kohn",                               roles: ["animateur", "helper", "colibri", "guest", "artist"],    langues: ["EN"], tel: "00 49 1627371402", email: "info@mitschkohn.de", lien: "https://tantramourfestival.com/equipe/mitsch-kohn/" },
  { id: "R_MUKTI",           value: "Mukti (Cecile Yvorel)",                     roles: ["helper", "traducteur", "angel"],                        langues: ["FR", "EN"], tel: "(+33) 06 83 16 63 46", email: "", lien: "" },
  { id: "R_OHANNA",          value: "Ohanna Le Guennec",                         roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_OUR_ECHO",        value: "Our Echo",                                  roles: ["animateur", "anglophone", "guest", "artist"],           langues: ["EN"], tel: "00 49 174 5242819", email: "echo@ourecho.life", lien: "https://tantramourfestival.com/equipe/our-echo/" },
  { id: "R_PASCAL",          value: "Pascal de Lacaze",                          roles: ["animateur", "guest", "artist"],                         langues: ["FR"], tel: "00 49 170 5536719", email: "p.delacdut@gmail.com", lien: "https://tantramourfestival.com/equipe/pascal-de-lacaze-berlin-allemagne/" },
  { id: "R_PAUL",            value: "Paul Raj Amar",                             roles: ["animateur", "helper", "colibri"],                       langues: ["FR", "EN"], tel: "06 25 80 30 04", email: "paul.amar8@gmail.com", lien: "https://tantramourfestival.com/equipe/paul-raj-amar/" },
  { id: "R_PHILIPPE",        value: "Philippe Hanrion",                          roles: ["animateur", "helper", "Mi-Colibri"],                    langues: ["FR"], tel: "06 62 18 36 86", email: "philippe.hanrion@gmx.com", lien: "https://tantramourfestival.com/equipe/philippe-hanrion/" },
  { id: "R_ROCARDO",         value: "Rocardo_Mirabai India Sagrada",             roles: ["stand"],                                                langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_SABRYNA",         value: "Sabryna",                                   roles: ["animateur", "helper", "admin", "colibri", "manager"],   langues: ["FR"], tel: "06 63 17 71 80", email: "sabrina_berthoud@yahoo.fr", lien: "https://www.tantramour.fr/on-se-presente/" },
  { id: "R_SAMANTHA",        value: "Samantha Marvels",                          roles: ["animateur", "anglophone", "guest"],                     langues: ["EN"], tel: "00 1 808 9711458", email: "samanthamarvels@gmail.com", lien: "https://tantramourfestival.com/equipe/samantha-marvels-ccht/" },
  { id: "R_SANDRINE",        value: "Sandrine Bettinelli",                       roles: ["animateur", "helper", "traducteur", "colibri", "guest"], langues: ["FR", "EN"], tel: "06 87 96 44 62", email: "sandrine@mytantrapath.com", lien: "https://tantramourfestival.com/equipe/sandrine-bettinelli/" },
  { id: "R_SCOTT",           value: "Scott McClure",                             roles: ["animateur", "anglophone", "guest"],                     langues: ["EN"], tel: "00 1 512 750 7404", email: "tantra@ecstatichearts.com", lien: "https://tantramourfestival.com/equipe/scottieo-mcclure/" },
  { id: "R_SELMA",           value: "Selma (Celine Laroche)",                    roles: ["animateur", "helper", "traducteur", "colibri"],         langues: ["FR", "EN"], tel: "06 08 28 00 81", email: "c.line.lune@gmail.com", lien: "https://tantramourfestival.com/equipe/selma-ananda/" },
  { id: "R_SEVDA",           value: "Sevda Duroy",                               roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "07 67 95 11 73", email: "sevda.duroy@gmail.com", lien: "https://tantramourfestival.com/equipe/sevda-duroy/" },
  { id: "R_SHIVACHRIS",      value: "ShivaChris",                                roles: ["animateur", "helper", "admin", "colibri", "manager"],   langues: ["FR"], tel: "06 76 05 01 87", email: "christophe.stutzmann@gmail.com", lien: "https://www.tantramour.fr/on-se-presente/" },
  { id: "R_SIMONE",          value: "Simone Bikene",                             roles: ["animateur", "healer"],                                  langues: ["FR"], tel: "07 49 71 49 76", email: "pindi.beautiful@gmail.com", lien: "https://tantramourfestival.com/equipe/simone-bikene/" },
  { id: "R_SOPHIE",          value: "Sophie O'Heix",                             roles: ["animateur", "helper", "colibri"],                       langues: ["FR"], tel: "06 38 24 51 68", email: "sophie@holygraale.com", lien: "https://tantramourfestival.com/equipe/sophie-oheix/" },
  { id: "R_STEPHANE",        value: "Stephane Ahmed",                            roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR"], tel: "06 61 18 46 33", email: "stephaneahmed@gmail.com", lien: "https://tantramourfestival.com/equipe/stephane-ahmed/" },
  { id: "R_EMMANUELLE",      value: "Suman (Emmanuelle Cueff)",                  roles: ["animateur", "helper", "colibri", "artist"],             langues: ["FR", "EN"], tel: "06 61 00 22 86", email: "emmanuellecueff@yahoo.com", lien: "https://tantramourfestival.com/equipe/emmanuelle-cueff/" },
  { id: "R_TEST",            value: "TEST",                                      roles: ["animateur", "helper", "traducteur", "angel", "admin", "manager"], langues: ["FR", "EN"], tel: "", email: "", lien: "" },
  { id: "R_VERA",            value: "Vera De Sousa",                             roles: ["animateur", "helper", "admin", "manager"],              langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_VERONIQUE",       value: "Veronique Santini Bottemer",                roles: ["helper"],                                               langues: ["FR"], tel: "", email: "", lien: "" },
  { id: "R_VIRGINIE",        value: "Virginie Bertrand",                         roles: ["animateur", "helper", "traducteur", "angel", "artist", "Mi-Colibri"], langues: ["FR", "EN"], tel: "(+33) 06 63 52 97 14", email: "v.bertrand.coaching@gmail.com", lien: "https://tantramourfestival.com/equipe/virginie-bertrand/" },
  { id: "R_YANNICK",         value: "Yannick Bohrer",                            roles: ["animateur", "helper", "traducteur", "Mi-Colibri"],      langues: ["FR", "EN"], tel: "06 78 88 85 34", email: "yannickbohrer@hotmail.com", lien: "https://tantramourfestival.com/equipe/yannick-bohrer-dj-yaan/" },
];


// ─── Alias de compatibilité ───────────────────────────────────────────────────
// Ces 4 variables reconstituent les anciens référentiels depuis REF_RESSOURCES.
// Les rapports existants continuent de fonctionner sans modification.
var REF_ANIMATEURS = REF_RESSOURCES
  .filter(function(r){ return r.roles.indexOf("animateur") !== -1; })
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
