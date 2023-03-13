import { createI18n } from 'vue-i18n';
//import en from './locales/en.json';

type MessageSchema = typeof messages.en

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
    },
    hello_world: {
      title: "Hello from Vuetify 3 internationalization!",
    },
    home: {
      header: "Tada! This paragraph is translated to your preffered language using VueI18n",
      change_language_hint: "You cand also change the language while app is running.",
    },
    about: {
      header: "This is the about page",
    }
  },

  ro: {
    nav: {
      home: "Acasa",
      about: "Despre",
    },
    hello_world: {
      title: "Salutari de la Vuetify 3 internationalizare",
    },
    home: {
      header: "Acest paragraf a fost tradus in limba dvs preferata folosind Vue-i18n",
      change_language_hint: "Puteti schimba limba si in timp ce aplicatia dvs ruleaza.",
    },
    about: {
      header: "Aceasta este pagina despre",
    }
  }
}



// Create VueI18n instance with options
export const i18n = createI18n<[MessageSchema], 'en' | 'ro' >({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // set locale
  fallbackLocale: import.meta.env.FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    en: messages.en,
    ro: messages.ro
  }
})