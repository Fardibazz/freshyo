const translation = require("./content/components/snipcart.json"); // eslint-disable-line

export default {
  target: "static",

  head: {
    title: "Freshyo Minuman Yoghurt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Toko online Freshyo milik Farah Diba 'Izzati"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Open+Sans:wght@400;600&display=swap"
      }
    ]
  },

  css: [
    { src: "@/assets/custom-bootstrap", lang: "scss" },
    "./assets/hover.css"
  ],

  plugins: ["@/plugins/vue-lazyload"],

  components: true,

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/snipcart",
    "@nuxtjs/stylelint-module"
  ],

  modules: ["@nuxt/content", "@nuxtjs/dotenv", "bootstrap-vue/nuxt"],

  snipcart: {
    key: process.env.NUXT_ENV_SNIPCART_DATA_API_KEY,
    locales: { id: translation }
  }
};
