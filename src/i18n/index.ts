import { createI18n } from 'vue-i18n';
import type { MessageSchema, NumberSchema } from './schema';
import { numberFormats } from './rules/numbers';
import { datetimeFormats } from './rules/datetime';

import { enDictionary as en} from './locales/en';
import { roDictionary as ro} from './locales/ro';
import { deDictionary as de} from './locales/de';

import { savedLocale } from '@/tools/storageLocale';

export enum Locales {
  EN = 'en',
  RO = 'ro',
  DE = 'de',
}

export const LOCALES = [
  { value: 'en', caption: 'English' },
  { value: 'de', caption: 'Deutsch' },
  { value: 'ro', caption: 'Romanian' }
]

const messages = {
  [Locales.EN]: en,
  [Locales.DE]: de,
  [Locales.RO]: ro
}


export const defaultLocale = savedLocale.language || import.meta.env.VITE_DEFAULT_LOCALE;

export const i18n = createI18n<{message: MessageSchema, number: NumberSchema}, 'en' | 'ro' | 'de' , false >({
  globalInjection: true,
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: messages,
  datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
})
