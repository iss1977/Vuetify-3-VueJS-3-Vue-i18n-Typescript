import { createI18n, DatetimeFormat, DateTimeOptions } from 'vue-i18n';
import  { roPluralizationRules }  from './rules/pluralization';
import { numberFormats as ns } from './rules/numbers';
//import datetimeFormats from './rules/datetime';


import en from './locales/en.json';
import ro from './locales/ro.json';


//type MessageSchema = typeof messages.en

// nmow imported from fjson files
// const translations = {
//   en: {
//     nav: {
//       home: "Home",
//       about: "About",
//     },
//     sheet_title: {
//       translations:"Messages - local language",
//     },
//     hello_world: {
//       title: "Hello from Vuetify 3 internationalization!",
//     },
//     home: {
//       header: "Tada! This paragraph is translated to your preffered language using VueI18n",
//       translation_via_script:"The following text: \"{translated}\" was translated in the script section.",
//       change_language_hint: "You cand also change the language while the {app_name} app is running.",
//       multiple_local_messages:"Multiple local messages cand be used like here: {msg1} or {msg2}",
//       button_description:"The button",
//       button_clicks: " has not been clicked | has been clicked once | has been clicked {count} times"
//     },
//     about: {
//       header: "This is the about page",
//     },
//     donations: {
//       raised_amount: "The current charity program raised {donations} from the participants"
//     }
//   },

//   ro: {
//     nav: {
//       home: "Acasa",
//       about: "Despre",
//     },
//     hello_world: {
//       title: "Salutari de la Vuetify 3 internationalizare",
//     },
//     sheet_title: {
//       translations:"Mesaje - traducere in limba locala",
//     },
//     home: {
//       header: "Acest paragraf a fost tradus in limba dvs preferata folosind Vue-i18n",
//       translation_via_script:"Urmatorul text: \"{translated}\" a fost trafus in sectiunea script",
//       change_language_hint: "Puteti schimba limba si in timp ce aplicatia {app_name} ruleaza.",
//       multiple_local_messages:"Se pot utiliza mesaje locale, doua exemple va putem oferi aici:  {msg1} si aici: {msg2}",
//       button_description:"Butonul",
//       button_clicks: " nu a fost actionat| a fost actionat o singura data | a fost actionat de {count} ori.",
//     },
//     about: {
//       header: "Aceasta este pagina despre",
//     },
//     donations: {
//       raised_amount: "Programul curent de intreajutorare a strans {donations} de la paricipanti"
//     }
//   }
// }

export enum Locales {
  EN = 'en',
  RO = 'ro',
}

export const LOCALES = [
  { value: 'en', caption: 'English' },
  { value: 'ro', caption: 'Romanian' }
]

const messages = {
  [Locales.EN]: en,
  [Locales.RO]: ro
}

// interface DateTimeFormatOptions {
//   localeMatcher?: "best fit" | "lookup" | undefined;
//   weekday?: "long" | "short" | "narrow" | undefined;
//   era?: "long" | "short" | "narrow" | undefined;
//   year?: "numeric" | "2-digit" | undefined;
//   month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
//   day?: "numeric" | "2-digit" | undefined;
//   hour?: "numeric" | "2-digit" | undefined;
//   minute?: "numeric" | "2-digit" | undefined;
//   second?: "numeric" | "2-digit" | undefined;
//   timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
//   formatMatcher?: "best fit" | "basic" | undefined;
//   hour12?: boolean | undefined;
//   timeZone?: string | undefined;
// }

// : DateTimeFormats<DateTimeFormat, string> =
const datetimeFormats = {
  
    'en': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }
    },
    'ro': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
      }
    }
  
}


// interface DateTimeFormatOptions {
//   localeMatcher?: "best fit" | "lookup" | undefined;
//   weekday?: "long" | "short" | "narrow" | undefined;
//   era?: "long" | "short" | "narrow" | undefined;
//   year?: "numeric" | "2-digit" | undefined;
//   month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
//   day?: "numeric" | "2-digit" | undefined;
//   hour?: "numeric" | "2-digit" | undefined;
//   minute?: "numeric" | "2-digit" | undefined;
//   second?: "numeric" | "2-digit" | undefined;
//   timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
//   formatMatcher?: "best fit" | "basic" | undefined;
//   hour12?: boolean | undefined;
//   timeZone?: string | undefined;
// }


const enDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric" , //| "2-digit" 
        month: "numeric", // | "2-digit" | "long" | "short" | "narrow" | 
        day: "numeric" , //| "2-digit" 
        hour: "numeric",// | "2-digit"
        minute: "numeric", // | "2-digit" | undefined;
        second: "numeric", // | "2-digit" | undefined;
        //timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
        //formatMatcher?: "best fit" | "basic" | undefined;
        //hour12?: boolean | undefined;
        //timeZone?: string | undefined;
}

const enDateTimeFormat: DateTimeFormat = {
  short : enDateTimeFormatOptions
}

const roDateTimeFormat: DateTimeFormat = {
  short : enDateTimeFormatOptions
}

const enroDateTimeFormats: DateTimeFormats<DateTimeFormat, 'en' | 'ro'> = {
  en: enDateTimeFormat,
  ro: roDateTimeFormat,
}

export const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE;


import type { MessageSchema, NumberSchema, DefineDateTimeFormat } from './schema';
import { DateTimeFormats, DateTimeFormat } from '@intlify/core-base';


const enNumberSchema : NumberSchema = {
  currency: {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'EUR'
  },
  decimal: {
    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
  },
  percent: {
    style: 'percent', useGrouping: false
  }
}

const roNumberSchema : NumberSchema = {
  currency: {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'EUR'
  },
  decimal: {
    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
  },
  percent: {
    style: 'percent', useGrouping: false
  }
}


const numberFormats = {
  en: enNumberSchema,
  ro: roNumberSchema
}
  

export const i18n = createI18n<{message: MessageSchema, number: NumberSchema}, 'en' | 'ro', false >({
  globalInjection: true,
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: messages,
  datetimeFormats: enroDateTimeFormats,
  numberFormats:numberFormats,
})

console.log(i18n)
