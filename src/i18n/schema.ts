/**
 * define the resource schema
 */

import enUS from './locales/en.json'

// define the locale message schema as master
export type MessageSchema = typeof enUS

// define the number format schema
export type NumberSchema = {
  currency: {
    style: 'currency'
    currencyDisplay: 'symbol'
    currency: string
  },
  decimal: {
    style: 'decimal',
    minimumFractionDigits: number, 
    maximumFractionDigits: number,
  },
  percent: {
    style: 'percent',
    useGrouping: boolean,
  },
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
