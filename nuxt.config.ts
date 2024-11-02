// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', 
    '~/assets/css/custom.css',
    '~/assets/css/themeswitcher.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || theme === null) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript',
          charset: 'utf-8',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
})