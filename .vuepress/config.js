const getSidebar = require('./get_sidebar.js');

module.exports = {
  title: 'VuePress Template',
  base: '/vuepress-template/',
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'VuePress Template',
      description: 'VuePress template.'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Plantilla VuePress',
      description: 'Plantilla para VuePress'
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    },
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-table-of-contents'
  ],
  themeConfig: {
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        sidebar: {
          '/en/': getSidebar.sidebar('en')
        }
      },
      '/es/': {
        selectText: 'Idiomas',
        label: 'Español',
        editLinkText: 'Editar esta página en GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Nuevo contenido disponible.",
            buttonText: "Actualizar"
          }
        },
        algolia: {},
        sidebar: {
          '/es/': getSidebar.sidebar('es')
        }
      }
    }
  },
  
}