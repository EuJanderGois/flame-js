
# FlameJS

> Alpha versions can contain a large number of bugs and constant breaks. 

## What is FlameJS?
FlameJS is a non-opinionated and declarative library that will allow you to build scalable web applications on any platform, respecting recommended documentation, development and testing standards. Our goal is to be lightweight so we don't have any production dependencies. You can count on a library built with TypeScript that can also be used with JavaScript with all the benefits of TypeScript. Be Happy, Be Flame!

[**Visit the Documentation.**](https://eujandergois.github.io/docs/flame-js/)

## Installing

```bash
# yarn
yarn add flame-js

# npm
npm install flame-js
```

## Quick Start

You need create a basic project with `HTML` and `JavaScript` or `TypeScript`. The recomendation is use Vite for create a Vanilla TypeScript project.

```bash
# yarn
yarn create vite my-flame-app --template vanilla-ts

# npm
npm create vite@latest my-flame-app -- --template vanilla-ts
```

```typescript
import { Flame, FlameComponent } from "flame-js";

/**
 * FlameApp instance.
 */
const app = new FlameApp({document});

// defining components
const title = new FlameComponent("h1", "Hello Flame!");
const text = new FlameComponent("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum turpis accumsan dolor ultrices consectetur. Phasellus vel hendrerit ante, sit amet viverra libero. Aliquam nec tortor purus. Nulla ultricies lorem eget hendrerit posuere. Nunc pellentesque ipsum vitae ipsum porttitor volutpat. Proin a justo placerat, lobortis tortor vitae, posuere dolor. Duis felis orci, bibendum a mattis ac, efficitur id augue. Vestibulum libero augue, dapibus vitae maximus id, cursus in leo. Vivamus imperdiet at elit et sagittis. Donec consectetur urna varius faucibus bibendum.");

// defining atributes
title.setAttribute("style", "color:#fafafa;");
text.setAttribute("style", "color:gray;");

// append components to app
app.append([
  title.render(),
  text.render()
]);
```

The result:
``` html
<html lang="en">
    <head>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: sans-serif;
                font-weight: bolder;
                background-color: #222222;
                color: #fafafa;
                width: 100%;
                height: 100vh;
            }
        </style>
        <title>FlameJS</title>
    </head>
    <body>
        <h1 style="color:#fafafa;">
            Hello Flame!
        </h1>
        <p style="color:gray;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum turpis accumsan dolor ultrices consectetur. Phasellus vel hendrerit ante, sit amet viverra libero. Aliquam nec tortor purus. Nulla ultricies lorem eget hendrerit posuere. Nunc pellentesque ipsum vitae ipsum porttitor volutpat. Proin a justo placerat, lobortis tortor vitae, posuere dolor. Duis felis orci, bibendum a mattis ac, efficitur id augue. Vestibulum libero augue, dapibus vitae maximus id, cursus in leo. Vivamus imperdiet at elit et sagittis. Donec consectetur urna varius faucibus bibendum.
        </p>
    </body>
</html>
```

## Changelog

- 0.0.x - 0.0.5 
  - Some core functionalities
  - Project organization
  - Bug fixes
- 0.0.6x
  - Types implementation
  - Implementation tests
  - Work! but not as expected.
  - Bug fixes


```bash
# para publicar
yarn publish --registry http://localhost:4873/
```

```bash
# para instalar
yarn add flame-js --registry http://localhost:4873/
```

O `registry` também pode ser alternado usando o arquivo `.npmrc`.

```bash
# comment or uncomment to change registry

registry=http://localhost:4873/
# registry=https://registry.npmjs.org/
```
