# Commande GitHub

Commandes PowerShell a lancer depuis la racine du repo.

## BOOKMARK - principal

Les plus utiles en premier.

### Voir si ton local est different de GitHub

```powershell
git fetch origin
git status
git diff origin/main -- index.html hero-cube.js
```

### Voir ce qui manque entre local et GitHub

```powershell
git log --oneline HEAD..origin/main
git log --oneline origin/main..HEAD
```

Lecture rapide :
- `HEAD..origin/main` = sur GitHub mais pas en local
- `origin/main..HEAD` = en local mais pas sur GitHub

### Verifier le bon repo

```powershell
git remote -v
git branch --show-current
```

## BOOKMARK - push / pull

### Recuperer les changements de GitHub

```powershell
git pull origin main
```

### Envoyer tes changements sur GitHub

```powershell
git add .
git commit -m "ton message"
git push origin main
```

## BOOKMARK - cube hero

### Comparer seulement les fichiers du cube

```powershell
git diff origin/main -- index.html hero-cube.js
```

### Voir la version GitHub du fichier

```powershell
git show origin/main:hero-cube.js
git show origin/main:index.html
```

## BOOKMARK - autre branche

Remplace `main` par le vrai nom de ta branche si besoin.

```powershell
git log --oneline HEAD..origin/nom-de-branche
git log --oneline origin/nom-de-branche..HEAD
git diff origin/nom-de-branche -- index.html hero-cube.js
git pull origin nom-de-branche
git push origin nom-de-branche
```

## BOOKMARK - ouvrir le site publie

### Ouvrir GitHub Pages dans le navigateur

```powershell
Start-Process "https://ph3ynyxstudio.github.io/"
```
