Partie 2 - 2 : 
- L'Eslint ne fait rien, car on a pas configuré le linter, pour se faire, on modifie eslint.config.mjs
- On a ainsi défini ce qu'on considère comme erreur ou non.

Partie 2 - 2 (index.js):
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

Partie 3 - 1 : 
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