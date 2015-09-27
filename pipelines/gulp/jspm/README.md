# jspm + cssnext

Gulpfile & `package.json` included for inspiration

## Philosophy

- Keep it simple
- Avoid CSS preprocessors
- Avoid bundling upon every build

## Features

- **BrowserSync** for live reloading of CSS & JS
- **jspm** & **Babel** for ES6 syntax
- **cssnext** to be able to write the CSS of tomorrow
  - comes with **Autoprefixer** built in

## Cons

- **jspm** might be slow during dev when importing hundreds of modules
  - splitting a big project into many modules might help

## Programming conventions

- BEM for CSS
