import type { PluginWithOptions } from 'markdown-it'
import * as mermaidFunctions from './mermaid-parser'
import * as platumlFunctions from './plantuml-parser'
import type { PlantumlOptions } from './types'

const MarkdownDiagrams: PluginWithOptions<PlantumlOptions> = (md, options = {}) => {
  platumlFunctions.default.functions.initialize(options)
  mermaidFunctions.default.functions.initialize(options)

  const defaultRenderer = md.renderer.rules.fence!.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
    let langName = ''
    if (info)
      langName = info.split(/\s+/g)[0]

    switch (langName) {
      case 'mermaid':
        return mermaidFunctions.default.functions.getMarkup(code)
      case 'plantuml':
      case 'dot':
        return platumlFunctions.default.functions.getMarkup(code, 'uml', langName)
      case 'ditaa':
        return platumlFunctions.default.functions.getMarkup(code, 'ditaa', langName)
    }
    return defaultRenderer(tokens, idx, options, env, slf)
  }
}

export default MarkdownDiagrams
