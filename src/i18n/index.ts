import { createI18n } from 'vue-i18n';
import  { roPluralizationRules }  from './rules/pluralization';
import { numberFormats as ns } from './rules/numbers';

//import en from './locales/en.json';

//type MessageSchema = typeof messages.en

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
    },
    sheet_title: {
      translations:"Messages - local language",
    },
    hello_world: {
      title: "Hello from Vuetify 3 internationalization!",
    },
    home: {
      header: "Tada! This paragraph is translated to your preffered language using VueI18n",
      translation_via_script:"The following text: \"{translated}\" was translated in the script section.",
      change_language_hint: "You cand also change the language while the {app_name} app is running.",
      multiple_local_messages:"Multiple local messages cand be used like here: {msg1} or {msg2}",
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
    sheet_title: {
      translations:"Mesaje - traducere in limba locala",
    },
    home: {
      header: "Acest paragraf a fost tradus in limba dvs preferata folosind Vue-i18n",
      translation_via_script:"Urmatorul text: \"{translated}\" a fost trafus in sectiunea script",
      change_language_hint: "Puteti schimba limba si in timp ce aplicatia {app_name} ruleaza.",
      multiple_local_messages:"Se pot utiliza mesaje locale, doua exemple va putem oferi aici:  {msg1} si aici: {msg2}",
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
  { value: 'en', caption: 'English' },
  { value: 'ro', caption: 'Romanian' }
]

const messages = {
  [Locales.EN]: translations.en,
  [Locales.RO]: translations.ro
}

// const numberFormats = {
//   [Locales.EN]: ns[Locales.EN],
//   [Locales.RO]: ns[Locales.RO]
// }

// console.log(numberFormats)
// const numberFormats = {
//   ro: {
//     currency: {
//       style: 'currency',
//       currencyDisplay: 'symbol',
//       currency: 'JPY'
//     }
//   },
//   en: {
//     currency: {
//       style: 'currency',
//       currencyDisplay: 'symbol',
//       currency: 'JPY'
//     }
//   }
// }


export const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE;

// Create VueI18n instance with options
// export const i18n = createI18n<[MessageSchema], 'en' | 'ro' >({

//   locale: import.meta.env.VITE_DEFAULT_LOCALE, // set locale
//   fallbackLocale: import.meta.env.FALLBACK_LOCALE,
//   legacy: false,
//   globalInjection: true, // to make $t() available in templates
//   pluralRules: {
//     ro: roPluralizationRules
//   },
//   numberFormats: numberFormats,
//   messages: messages,
// })

export const i18n = createI18n<false>({
  // globalInjection: true,
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    [Locales.EN]: messages[Locales.EN],
    'ro':  messages.ro,
  },
  datetimeFormats: {
    'ro': {
      short: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      }
    },
    'en': {
      short: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      }
    }
  },
  numberFormats: {
    'ro': {
      currency: {
        style: 'currency', currencyDisplay: 'symbol', currency: 'RON'
      },
      decimal: {
        style: 'decimal', minimumFractionDigits: 3, maximumFractionDigits: 5
      },
      percent: {
        style: 'percent', useGrouping: false
      },
    },
    'en': {
      currency: {
        style: 'currency', currencyDisplay: 'symbol', currency: 'USD'
      },
      decimal: {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
      },
      percent: {
        style: 'percent', useGrouping: true
      }
    }
  }
})

console.log(i18n)
