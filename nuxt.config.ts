export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Lato: [400, 700],
        }
    },
    css: [
        '@/styles/main.scss',
        '@/styles/normalize.css'
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
