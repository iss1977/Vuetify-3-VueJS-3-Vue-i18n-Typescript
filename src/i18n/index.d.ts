/**
 * you need to import the some interfaces
 */
import {
  DefineLocaleMessage,
  DefineDateTimeFormat,
  DefineNumberFormat
} from 'vue-i18n'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    hello: string
    // nav: {
    //   home: string,
    //   about: string,
    // },
    // hello_world: {
    //   title: string,
    // },
    // home: {
    //   header: string,
    //   change_language_hint: string,
    //   multiple_local_messages:string,
    //   button_description:string,
    //   button_clicks: string,
    // },
    // about: {
    //   header:string,
    // }
  }

  // define the datetime format schema
  export interface DefineDateTimeFormat {
    short: {
      hour: 'numeric'
      minute: 'numeric'
      second: 'numeric'
      timeZoneName: 'short'
      timezone: string
    }
  }

  // define the number format schema
  export interface DefineNumberFormat {
    currency: {
      style: 'currency'
      currencyDisplay: 'symbol'
      currency: string
    }
  }
}
