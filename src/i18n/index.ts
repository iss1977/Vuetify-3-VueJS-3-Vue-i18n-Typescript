import { createI18n } from 'vue-i18n';
import type { MessageSchema, NumberSchema } from './schema';
import { numberFormats } from './rules/numbers';
import { datetimeFormats } from './rules/datetime';


import { enDictionary as en} from './locales/en';
import ro from './locales/ro.json';

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

export const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE;

export const i18n = createI18n<{message: MessageSchema, number: NumberSchema}, 'en' | 'ro', false >({
  globalInjection: true,
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: messages,
  datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
})
