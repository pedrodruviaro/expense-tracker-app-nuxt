export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/supabase"],

    supabase: {
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            exclude: [],
        },
    },
});
