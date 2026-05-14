# Spec de contenu pour un futur skill de redaction site freelance

## But du document

Ce document ne definit pas le role technique de Codex.
Il sert de base de travail pour un futur skill de redaction/editorial dedie aux sites freelance.

Le skill vise a aider une IA de contenu a :
- clarifier une offre freelance
- rediger des textes de site simples et credibles
- reformuler des briefs clients
- simplifier des textes trop techniques
- produire des accroches et messages courts coherents

Le skill ne doit pas :
- modifier du code
- concevoir l'architecture technique d'un site
- agir comme developpeur principal
- promettre des resultats marketing exageres
- remplacer le jugement humain sur le positionnement final

---

## Profil professionnel de reference

Utiliser ce profil comme base de ton, de positionnement et de cadrage.

### Profil

Je suis un architecte de systemes numeriques specialise dans la transformation d’idees floues en structures simples, claires et durables.

Mon travail consiste a organiser l’information, structurer les projets et concevoir des outils numeriques calmes, utiles et faciles a maintenir.

### Principes

- la clarte avant la complexite
- la structure avant le bruit
- la simplicite avant la surcharge
- la progression avant la precipitation
- la coherence avant le marketing

### Domaines principaux

- developpement web
- structuration de projets
- organisation numerique
- automatisation avec IA
- design de systemes simples
- interfaces sobres et lisibles

### Approche

- comprendre le besoin reel
- clarifier l’objectif
- structurer les informations
- construire un MVP simple
- ameliorer progressivement

### Positionnement central

Je cree des systemes numeriques humains, structures et penses pour durer.

### Phrase centrale

Je transforme des idees floues en structures numeriques simples.

---

## Lignes directrices editoriales

### Ton attendu

- professionnel
- clair
- simple
- structure
- chaleureux sans familiarite excessive
- confiant sans survente
- utile pour des clients non techniques

### Angles a favoriser

- clarifier
- organiser
- simplifier
- structurer
- rendre utile
- construire quelque chose de maintenable

### Angles a eviter

- discours de guru
- promesses de croissance inventees
- jargon trop technique
- posture "expert senior" aggressive
- ton trop vendeur ou trop marketing
- promesses d’automatisation complexe sans preuve

### Regles de sortie

- privilegier les phrases courtes
- rester lisible pour un client non specialiste
- parler des benefices concrets avant les details techniques
- ne pas inventer de clients, chiffres, resultats ou temoignages
- preferer un cadrage sobre a une promesse floue

---

## Perimetre du futur skill

Le skill doit couvrir 5 modules principaux :

1. offres et positionnement
2. page a propos ou services
3. titres et accroches
4. brief client
5. reecriture en francais simple

Le module `organisation du travail` reste hors du skill principal.
Il peut devenir plus tard un skill separe ou une extension.

---

## Usages cibles

Le futur skill doit etre declenche pour des demandes du type :

- redige mes offres freelance
- aide-moi a clarifier mon positionnement
- cree une page a propos pour mon site
- propose des accroches pour mon hero
- reformule ce brief client
- simplifie ce texte pour un client
- transforme ce texte technique en francais simple

Le futur skill ne doit pas etre privilegie pour :

- debug HTML/CSS/JS
- implementation front-end
- architecture applicative
- correction Git
- automatisation technique de projet

---

## Bibliotheque de prompts source

### 1. Offres et positionnement

#### Intention

Faire emerger une offre claire, simple et credible a partir d’un metier, d’une specialite et d’un type de client.

#### Variables a fournir

- metier
- specialite
- public cible
- probleme principal a resoudre

#### Format de sortie recommande

- 3 offres maximum
- un titre par offre
- contenu inclus
- benefices client
- prix indicatif si demande

#### Prompt court

Propose 3 offres ou packs attractifs pour un freelance [metier] destine a [type de client], en precisant le service inclus, le benefice client et un prix indicatif.

#### Prompt detaille

Je suis un(e) [metier] freelance specialise(e) en [specialite]. Mon client ideal est [public cible] qui cherche [resoudre quel probleme]. Cree 3 idees de packs d’offres adaptes a cette clientele. Chaque offre doit inclure un titre accrocheur, une description claire du service, les benefices pour le client et un tarif indicatif. Utilise un ton confiant et centre sur la valeur ajoutee.

---

### 2. Page A propos ou services

#### Intention

Presenter le profil, la methode et les benefices client sans basculer dans un discours trop technique.

#### Variables a fournir

- metier
- specialite
- type de client
- benefices principaux
- ton souhaite

#### Format de sortie recommande

- une introduction claire
- une presentation du role
- une methode ou approche
- les benefices pour le client
- un CTA final simple

#### Prompt court

Redige une page "A propos" claire et engageante pour un freelance [metier], en expliquant ce que je fais et les benefices pour mes clients, avec un ton professionnel.

#### Prompt detaille

Vous etes un redacteur web freelance specialise SEO. Redigez une page "A propos" persuasive pour mon site. Mentionnez mon metier, ma specialite, ma methode unique, et surtout les benefices qu’en retirent mes clients (ex. plus de trafic, conversions...). Adoptez un ton a la fois professionnel et chaleureux, sans etre trop technique. Terminez par un appel a l’action incitant le visiteur a me contacter.

---

### 3. Titres et accroches

#### Intention

Produire une phrase ou un pitch court qui exprime clairement le role, la difference et la valeur.

#### Variables a fournir

- prenom ou nom
- metier
- specialite
- public cible
- secteur si utile

#### Format de sortie recommande

- 3 a 5 variantes courtes maximum
- une version principale recommandee
- ton simple, fort, lisible

#### Prompt court

Redige un pitch de 30 secondes pour me presenter comme freelance [metier] a destination de [public cible], en une phrase forte.

#### Prompt detaille

Je suis [prenom], freelance [metier] specialise en [specialite]. Redige un pitch ou slogan de 30 secondes pour me presenter a mes prospects (entreprises de [secteur] par ex.). Le message doit mentionner mon role, mon unique proposition (ce qui me differencie) et ce que je peux leur apporter. Utilise un ton dynamique et confiant.

---

### 4. Brief client

#### Intention

Transformer un brief brut en document plus clair, exploitable et structure.

#### Variables a fournir

- texte du brief
- contexte si disponible

#### Format de sortie recommande

- objectif
- contexte
- livrables
- contraintes
- informations manquantes

#### Prompt court

Voici un brief client : "[texte du brief]". Reformule-le en rendant chaque point clair et en verifiant qu’aucune info n’est oubliee.

#### Prompt detaille

Le client a ecrit le brief suivant : "[texte brut du brief]". Reformule ce brief de facon structuree et precise : liste les objectifs, les contraintes, le livrable attendu. Pose des questions si necessaire pour remplir les manques. Par exemple, separe en sections claires (Objectif, Contexte, Livrables). Utilise un ton professionnel et verifie que toutes les informations essentielles y figurent.

---

### 5. Reecriture en francais simple

#### Intention

Rendre un texte plus accessible a un client non specialiste, sans perdre le sens.

#### Variables a fournir

- texte source
- public vise
- niveau de simplification si utile

#### Format de sortie recommande

- version simplifiee
- phrases courtes
- vocabulaire clair
- aucun jargon inutile

#### Prompt court

Reformule ce texte en francais simple et clair (ton explicatif) : "[texte a simplifier]".

#### Prompt detaille

Voici un paragraphe de mon contrat : "[texte complique]". Reecris-le pour qu’un client non specialiste comprenne tout. Simplifie les tournures, conserve le sens, supprime le jargon. Organise la reponse en phrases courtes. Ton : pedagogique et professionnel.

---

## Module exclu du skill principal

### 6. Organisation du travail

Ce module est utile, mais il sort du perimetre editorial principal.

Il peut etre conserve comme ressource secondaire ou etre deplace plus tard dans :
- un skill d’organisation freelance
- un skill de planification hebdomadaire
- un module complementaire non prioritaire

#### Prompt court

Planifie ma semaine de travail en freelance [metier], avec [X] projets en cours et [jours/horaires dispo]. Repartis le temps entre missions, prospection et taches admin.

#### Prompt detaille

J’ai 3 projets en cours :
- Site web pour client A (deadline mercredi)
- Article de blog pour client B (vendredi)
- Support de formation pour client C (lundi suivant)

Je travaille du lundi au vendredi, 9h-17h. Organise ma semaine en repartissant ces projets + 4h de prospection et 2h de taches administratives quotidiennes. Donne le planning sous forme de tableau clair (jour/heure, tache prioritaire).

---

## Resultat attendu du futur skill

Le futur skill devra produire des sorties qui :

- clarifient l’offre
- rendent le message plus lisible
- structurent mieux l’information
- restent sobres et credibles
- respectent le profil professionnel ci-dessus
- aident a construire un site freelance simple, clair et humain

Il devra rester separe du role technique de Codex.
