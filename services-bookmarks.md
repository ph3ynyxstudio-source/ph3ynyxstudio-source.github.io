# Services Bookmarks

Carte rapide pour retrouver les zones importantes de [services.html](c:/Users/Ph3yN/PH3YNYX_Projects/03_MARKET/01_Site_Personnel/ph3ynyxstudio-source.github.io/services.html).

Les plages sont approximatives et servent a sauter vite au bon bloc demain matin.

Des marqueurs reels `BOOKMARK:` ont aussi ete ajoutes directement dans `services.html`.
Tu peux donc chercher simplement `BOOKMARK:` dans le fichier pour naviguer tres vite.

## Global visual tokens / variables

- Section : tokens visuels globaux
- Classes / IDs :
  - `:root`
  - `body`
  - variables `--bg-black`, `--bg-deep`, `--cyan`, `--violet`, `--text-main`, `--text-soft`, `--text-faint`
- Lignes approx : `15-50`
- Controle visuel :
  - palette principale
  - fond global
  - contraste texte
  - base du theme sombre premium

## Hero container

- Section : conteneur principal du hero
- Classes / IDs :
  - `.hero`
  - `.container`
  - `.hero-stage`
  - `.hero-media`
- Lignes approx : `61-214` et `732-790`
- Controle visuel :
  - scene d’entree
  - profondeur visuelle
  - image de fond
  - overlays sombres
  - volume general du hero

## Hero title / subtitle / CTA

- Section : texte principal du hero
- Classes / IDs :
  - `.hero-copy`
  - `.section-label`
  - `.hero-title`
  - `.hero-subtitle`
  - `.hero-actions`
  - `.cta-primary`
  - `.cta-secondary`
- Lignes approx : `137-293` et `746-767`
- Controle visuel :
  - hierarchie du hero
  - taille du titre
  - largeur du texte
  - presence des boutons
  - lisibilite du message principal

## Email contact box

- Section : bloc contact direct dans le hero
- Classes / IDs :
  - `.hero-contact-box`
  - `.hero-contact-label`
  - `.hero-contact-links`
  - `.hero-contact-item`
- Lignes approx : `295-352` et `769-788`
- Controle visuel :
  - visibilite du contact des le haut de page
  - presentation email / telephone
  - poids visuel du bloc contact hero

## Capability summary section

- Section : resume des capacites
- Classes / IDs :
  - `.content-flow`
  - `.section`
  - `.section-inner`
  - `.section-card`
  - `.capability-lead`
  - `.section-intro`
- Lignes approx : `354-409` et `794-809`
- Controle visuel :
  - transition entre hero et contenu
  - premier bloc de lecture
  - ton et resume metier

## Services section

- Section : liste des services
- Classes / IDs :
  - `.services-grid`
  - `.service-card`
  - `.service-index`
- Lignes approx : `411-458` et `812-871`
- Controle visuel :
  - grille services
  - densite du contenu
  - rythme des cartes
  - lisibilite sur desktop et mobile

### Reperage rapide des cartes services

- Conteneur de grille : lignes approx `411-416`
  - controle le nombre de colonnes et l'espacement entre cartes
- Style global d'une carte service : lignes approx `418-458`
  - controle la hauteur minimale, le fond, la bordure, la transparence et le texte
- Cartes HTML individuelles : lignes approx `823-867`
  - carte 1 : `823-831`
  - carte 2 : `833-840`
  - carte 3 : `842-849`
  - carte 4 : `851-858`
  - carte 5 : `860-867`

### Exemple concret — modifier une carte service

Exemple de reference : la premiere carte `Mini site vitrine` dans [services.html](c:/Users/Ph3yN/PH3YNYX_Projects/03_MARKET/01_Site_Personnel/ph3ynyxstudio-source.github.io/services.html).

- Largeur de la carte :
  - ne se regle pas dans le HTML de la carte
  - se regle via la grille `.services-grid` lignes approx `411-416`
  - `grid-template-columns` = nombre et largeur des colonnes
- Espace entre cartes :
  - `.services-grid` ligne approx `414`
  - propriete `gap`
- Hauteur minimale :
  - `.service-card` ligne approx `419`
  - propriete `min-height`
- Padding interieur :
  - `.service-card` ligne approx `420`
  - propriete `padding`
- Coins arrondis :
  - `.service-card` ligne approx `421`
  - propriete `border-radius`
- Bordure :
  - `.service-card` ligne approx `422`
  - propriete `border`
- Effet translucide :
  - `.service-card` lignes approx `423-428`
  - propriete `background` avec `rgba(...)`
- Effet de relief / surface :
  - `.service-card` ligne approx `429`
  - propriete `box-shadow`
- Titre de carte :
  - `.service-card h3` lignes approx `447-452`
- Texte de carte :
  - `.service-card p` lignes approx `454-457`
- Contenu HTML de la carte :
  - `Mini site vitrine` lignes approx `823-831`

### Exemple concret — lecture rapide

Si demain tu veux :

- rendre les cartes plus larges :
  - va d'abord a `.services-grid`
- rendre une carte plus haute :
  - va a `.service-card`
- rendre la surface plus transparente :
  - va au `background` de `.service-card`
- rendre l'ombre plus forte :
  - va au `box-shadow` de `.service-card`
- changer seulement le texte d'une carte :
  - va directement au bloc HTML de la carte dans `823-867`

## Projects / screenshots section

- Section : quelques realisations
- Classes / IDs :
  - `.projects-grid`
  - `.project-card`
  - `.project-screenshot`
  - `.project-placeholder`
  - `.project-copy`
- Lignes approx : `495-580` et `906-966`
- Controle visuel :
  - grille projets
  - hauteur et format des screenshots
  - rendu des cartes projets
  - placeholder de la 3e carte

### Reperage rapide des cartes projets

- Conteneur de grille : lignes approx `495-500`
- Style global d'une carte projet : lignes approx `502-580`
- Cartes HTML individuelles : lignes approx `917-963`
  - carte 1 `LUN4RMOOD` : `918-933`
  - carte 2 `Astr4lDesign` : `935-949`
  - carte 3 placeholder : `951-962`

### Exemple concret — modifier une carte projet

Exemple de reference : `LUN4RMOOD`.

- Largeur de colonne :
  - `.projects-grid` lignes approx `495-500`
- Screenshot portrait :
  - `.project-screenshot` lignes approx `516-530`
  - `aspect-ratio` = format visuel
- Image interne :
  - `.project-screenshot img` lignes approx `532-537`
  - `object-fit` = cadrage
- Placeholder :
  - `.project-placeholder` lignes approx `539-553`
- Bloc texte sous image :
  - `.project-copy` lignes approx `555-580`
- Contenu HTML carte `LUN4RMOOD` :
  - lignes approx `918-933`

## Final contact section

- Section : contact de fin de page
- Classes / IDs :
  - `.contact-grid`
  - `.contact-block`
  - `.contact-list`
  - `.contact-item`
  - `.cta-primary`
- Lignes approx : `582-622` et `968-1010`
- Controle visuel :
  - bloc contact final
  - repartition texte / infos
  - CTA de fermeture
  - visibilite email / telephone

## Mobile responsive adjustments

- Section : ajustements responsives
- Classes / IDs :
  - `@media (max-width: 1024px)`
  - `@media (max-width: 640px)`
  - `.hero-layout`
  - `.hero-contact-box`
  - `.services-grid`
  - `.method-list`
  - `.projects-grid`
- Lignes approx : `631-727`
- Controle visuel :
  - passage desktop vers tablette/mobile
  - empilement du hero
  - comportement du bloc contact hero
  - passage des grilles en colonnes plus simples
