### Partie 2 - 2 : 
- L'Eslint ne fait rien, car on a pas configuré le linter, pour se faire, on modifie eslint.config.mjs
- On a ainsi défini ce qu'on considère comme erreur ou non.

### Partie 2 - 2 (index.js):
- Ici, on applique le linter, beaucoup plus d'erreurs que sur app.js, la plupart des erreurs comme les indentations sont gérés par --fix, mais d'autres erreurs ne sont pas gérables par Eslint, je les ai donc supprimés à la main.

```js
// Que j'ai retiré par exemple
if (false) {
  console.log('Ce code ne s\'exécutera jamais');
}

// Que j'ai également retiré
debugger;

// Des == qui devraient être ===
```

### Partie 3 - 1 : 
- npx husky est deprecated, et il est donc pas possible de passer à la suite
- UP : j'ai trouvé une solution, bizarrement si dans package.json, je passe par les scripts, j'ai la possibilité d'initier un .husky/, je peux donc continuer à partir de là.

```json
  "scripts": {
    "prepare": "husky"
  },
```

- Dans ce .husky/ j'ai un script pre-commit, j'ajoute donc ici la commande du cours ...

```json
npx eslint .
```

- Il semblerait que ça ne marche toujours pas, en tapant la commande 

```bash
git config core.hooksPath 
```

- Je remarque que .husky/_ est référencé mais pas correctement, il devrait pointer vers .husky, en y mettant le pre-commit, c'est donc ce que je fais. 
- De plus, il en regardant le droits de la commande, elle n'a pas la possibilité de s'exécuter, je change donc ces droits...

```bash
chmod +x .husky/pre-commit
```

- Cette fois ci pre-commit est bien configuré, mais il ne trouve pas le dossier `/h`, probablement une erreur de configuration dans le bash, je corrige ... 

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/"

npx eslint .
```

- Le commit est finalement bloqué, je corrige les erreurs que je me suis faite et je push ... (Note que le linter passe actuellement sur tout et genère un warning lorsqu'il passe sur un dossier)

### Partie 4 - 0 :

- il semblerait que la fonction extends ne marche pas, elle serait deprecated. 
- La solution serait donc d'utiliser les rules en important la config de eslint-config-airbnb-base
- Une erreur arrive quand j'essaie d'installer la config : 

```batch
frederichuang@Frederics-MacBook-Pro GitTP % npm i eslint-config-airbnb             
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: gittp@1.0.0
npm error Found: eslint@9.28.0
npm error node_modules/eslint
npm error   dev eslint@"^9.28.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer eslint@"^7.32.0 || ^8.2.0" from eslint-config-airbnb@19.0.4
npm error node_modules/eslint-config-airbnb
npm error   eslint-config-airbnb@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error /Users/frederichuang/.npm/_logs/2025-06-11T14_55_46_514Z-eresolve-report.txt
npm error A complete log of this run can be found in: /Users/frederichuang/.npm/_logs/2025-06-11T14_55_46_514Z-debug-0.log
```

- J'en déduit que la version 9.x que je possède n'est plus compatible avec la config airbnb, je vais donc passer à la suite pour l'instant.

### Partie 5 - 0 : 

