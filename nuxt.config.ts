const map = {
  "ovid-pygmalion": ["intro","creating-galatea", "venus-prayer", "transformation"],
  "shaw-pygmalion": ["act-1","act-2", "act-3", "act-4", "act-5"],
  "lerner-my-fair-lady": ["act-1","act-2", "alfred", "training", "eliza-transforms", "act-3", 
      "freddy","act-4", "act-5"],
} as Record<string,string[]>


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxt/content",
    "@nuxt/icon"
  ],
  nitro: {
    prerender:{
      routes: Object.keys(map).flatMap(story=>map[story].map(scene=>`/scene/${story}/${scene}`))
    }
  },
  content: {
    markdown: {
      anchorLinks: false,
    }
  }
})