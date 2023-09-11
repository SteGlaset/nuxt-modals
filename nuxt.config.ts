export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Roboto: true,
        }
    },
    css: [
        '@/styles/normalize.css',
        '@/styles/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/styles/_variables.scss" as *;'
                }
            }
        }
    }
})
