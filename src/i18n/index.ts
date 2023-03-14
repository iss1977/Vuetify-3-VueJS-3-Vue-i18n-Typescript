import { createI18n } from 'vue-i18n';
import  { roPluralizationRules }  from './rules/pluralization';
//import en from './locales/en.json';

type MessageSchema = typeof messages.en

const translations = {
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
      change_language_hint: "You cand also change the language while the {app_name} app is running.",
      button_description:"The button",
      button_clicks: " has not been clicked | has been clicked once | has been clicked {count} times"
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
      change_language_hint: "Puteti schimba limba si in timp ce aplicatia {app_name} ruleaza.",
      button_description:"Butonul",
      button_clicks: " nu a fost actionat| a fost actionat o singura data | a fost actionat de {count} ori.",
    },
    about: {
      header: "Aceasta este pagina despre",
    }
  }
}

export enum Locales {
  EN = 'en',
  RO = 'ro',
}

export const LOCALES = [
  { value: Locales.EN, caption: 'English' },
  { value: Locales.RO, caption: 'Romanian' }
]

const messages = {
  [Locales.EN]: translations.en,
  [Locales.RO]: translations.ro
}
console.log('Messages', messages);

export const defaultLocale = Locales.EN;

// Create VueI18n instance with options
export const i18n = createI18n<[MessageSchema], 'en' | 'ro' >({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // set locale
  fallbackLocale: import.meta.env.FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true, // to make $t() available in templates
  pluralRules: {
    ro: roPluralizationRules
  },
  messages: messages,
})

