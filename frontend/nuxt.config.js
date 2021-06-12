const strapiBaseUri = process.env.API_URL || "http://localhost:1337";
export default {
    target: "static",
    env: {
        strapiBaseUri,
    },
    head: {
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
        ],
        link: [
        ],
    },
    /*
     ** Global CSS
     */
    css: [
        '@/layouts/scss/main'
    ],
    plugins: [
        '~/plugins/globals.js',
        {src: "~/plugins/aos", ssr: false}
    ],
    components: true,
    modules: [
        '@aceforth/nuxt-optimized-images',
        ['vue-scrollto/nuxt', { offset: -59 }],
        "@nuxtjs/markdownit",
        "@nuxtjs/strapi"
    ],
    optimizedImages: {
        optimizeImages: true,
    },
    strapi: {
        url: strapiBaseUri,
        entities: [
            {
                name: "articles",
                type: "collection",
            },
            {
                name: "categories",
                type: "collection",
            },
            {
                name: "homepage",
                type: "single",
            },
            {
                name: "global",
                type: "single",
            },
        ],
    },
    markdownit: {
        preset: "default",
        linkify: true,
        breaks: true,
        injected: true,
        html: true,
    },
};
