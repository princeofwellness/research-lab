// https://nuxt.com/docs/api/configuration/nuxt-config
const markdownRawPlugin = require('vite-raw-plugin')

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/mdc',
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
    ],
    i18n: {
        defaultLocale: "en",
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     redirectOn: 'root' // recommended
        // },
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'sk', name: 'Slovak', file: 'sk.json' },
        ]
    },
    // hooks: {
    //     listen: async (server) => {
    //         server.keepAliveTimeout = 35000;
    //         server.headersTimeout = 36000;
    //         server.requestTimeout = 36000;
    //         server.timeout = 36000;
    //     }
    // },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'preload', href: '/fonts/ProximaNova/ProximaNova-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" },
                { rel: 'preload', href: '/fonts/ProximaNova/ProximaNova-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" },
                { rel: 'preload', href: '/fonts/ProximaNova/ProximaNova-Medium.woff2', as: 'font', type: 'font/woff2', crossorigin: "anonymous" },
            ]
        }
    },
    ssr: true,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    mdc: {
        components: {
            prose: true, // Disable predefined prose components
            map: {
                h1: 'MdHeading1',
                h2: 'MdHeading2',
                h3: 'MdHeading3',
                h4: 'MdHeading4',
                h5: 'MdHeading5',
                a: "MdAnchor"
            }
        }
    },
    nitro: {
        experimental: {
            websocket: true,
            tasks: true
        },
        scheduledTasks: {
            '* * * * *': ['wprefresh']
        }
    },
    experimental: {
        inlineRouteRules: true
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    vite: {
        plugins: [
            markdownRawPlugin({fileRegex: /\.md$/})
        ]
    },
    sitemap: {
        sources: [
            '/api/__sitemap__/wordpress',
        ]
    },
    runtimeConfig: {
        public: {
            recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
        },
        WORDPRESS_URL: process.env.WORDPRESS_URL,
        CONTACT_MAIL: process.env.CONTACT_MAIL,
        BREVO_API_KEY: process.env.BREVO_API_KEY,
        BREVO_SUBSCRIPTION_LIST_ID: process.env.BREVO_SUBSCRIPTION_LIST_ID,
        BREVO_EXHIBIZZ_API_KEY: process.env.BREVO_EXHIBIZZ_API_KEY,
        BREVO_EXHIBIZZ_SUBSCRIPTION_LIST_ID: process.env.BREVO_EXHIBIZZ_SUBSCRIPTION_LIST_ID,
        //
        SENDER_API_KEY: process.env.SENDER_API_KEY,
        SENDER_NEWSLETTER_GROUP: process.env.SENDER_NEWSLETTER_GROUP,
        //
        RECAPTCHA_API_KEY: process.env.RECAPTCHA_API_KEY,
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        ///
        BUCKET_ENDPOINT_URL: process.env.BUCKET_ENDPOINT_URL,
        BUCKET_ACCESS_KEY_ID: process.env.BUCKET_ACCESS_KEY_ID,
        BUCKET_SECRET_ACCESS_KEY: process.env.BUCKET_SECRET_ACCESS_KEY,
        //
        MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
        MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
        MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
        //
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USERNAME: process.env.SMTP_USERNAME,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD
    }
})