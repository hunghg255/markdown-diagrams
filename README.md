# markdown-diagrams

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

markdown-diagrams is a markdown-it plugin for diagram. It supports mermaid, plantuml. It supports contorls like zoom, move.

## Features
- [x] Support PlantUML、Mermaid、Dot、Ditaa syntax;
- [x] Support zoom、move、rough、download、copy origin code and soon contorls;
- [x] Support Shift and mouse wheel to zoom in or out;
- [x] Support modal preview;
- [x] Support long press mouse click to drag the chart

## UML examples
Markdown fence identifier：[plantuml](https://plantuml.com/)、[mermaid](https://github.com/mermaid-js/mermaid)、[dot](https://graphviz.gitlab.io/doc/info/lang.html)、[ditaa](https://ditaa.sourceforge.net/)

### PlantUML

[online](https://www.plantuml.com/plantuml/uml/)

````markdown
```plantuml
Bob -> Alice : hello
```
````
![plantuml](./assets/plantuml.png)

### DOT

````markdown
```dot
digraph example1 {
    1 -> 2 -> { 4, 5 };
    1 -> 3 -> { 6, 7 };
}
```
````
![dot](./assets/dot.png)

### ditaa
> [!WARNING]
> On PlantUML, only PNG,TXT generation is supported.
````
```ditaa
+--------+   +-------+    +-------+
    |        | --+ ditaa +--> |       |
    |  Text  |   +-------+    |diagram|
    |Document|   |!magic!|    |       |
    |     {d}|   |       |    |       |
    +---+----+   +-------+    +-------+
        :                         ^
        |       Lots of work      |
        +-------------------------+
```
````
![ditaa](./assets/ditaa.png)

### mermaid

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````
![mermaid](./assets/mermaid.png)

## Install
```bash
npm install markdown-diagrams --save
```
## Usage
vite.config.ts
```ts
import MarkdownItDiagrams from 'markdown-diagrams'
import Markdown from 'unplugin-vue-markdown/vite'
export default defineConfig({
  plugins: [
    Markdown({
      markdownItSetup(md) {
        md.use(MarkdownItDiagrams, {
          showController: true, // show controller,default:false
          /**
           * PlantUML options
           * ditaa:imageFormat 'png| txt'
           * plantuml: imageFormat'png| svg| txt'
           * dot: imageFormat'png| svg| txt'
           */
          // imageFormat: 'svg', // image format:svg|png|txt,default:svg
          // server: '', // plantuml server,default:http://www.plantuml.com/plantuml
          // ditaa: {
          // imageFormat: 'svg', // image format:png|txt,default:svg
          // server: '', // plantuml server,default:http://www.plantuml.com/plantuml
          // }
        })
      }
    })
  ]
})
```
If you open the controller, you need to import the script in the initialization.
vue3 example:

```ts
<script setup lang="ts">
import { markdownItDiagramDom } from 'markdown-diagrams/dom'
import { onMounted } from 'vue'
onMounted(async () => {
  // if you want to use mermaid, you need to install mermaid.js
  // npm install mermaid
  // import mermaid from 'mermaid'
  mermaid.initialize({ startOnLoad: false })
  await mermaid.run()
  // initialize markdown-diagrams/dom script
  await markdownItDiagramDom()
})
</script>
```
## References

- [markdown-it-textual-uml](https://github.com/manastalukdar/markdown-it-textual-uml)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [panzoom](https://github.com/timmywil/panzoom)
- [svg2roughjs](https://github.com/fskpf/svg2roughjs)

## License

[MIT](./LICENSE) License © 2024-PRESENT [hunghg255](https://github.com/hunghg255)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/markdown-diagrams?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/markdown-diagrams
[npm-downloads-src]: https://img.shields.io/npm/dm/markdown-diagrams?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/markdown-diagrams
[bundle-src]: https://img.shields.io/bundlephobia/minzip/markdown-diagrams?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=markdown-diagrams
[license-src]: https://img.shields.io/github/license/hunghg255/markdown-diagrams.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/hunghg255/markdown-diagrams/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/markdown-diagrams
