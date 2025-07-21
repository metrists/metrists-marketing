import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Metrists Docs</span>,
  project: {
    link: 'https://github.com/your-org/metrists',
  },
  docsRepositoryBase: 'https://github.com/your-org/metrists/tree/main',
  footer: {
    text: 'Metrists Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Metrists'
    }
  }
}

export default config