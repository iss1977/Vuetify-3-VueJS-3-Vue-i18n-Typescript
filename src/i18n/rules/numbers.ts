import type { NumberSchema } from './../schema';

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
    currency: 'RON'
  },
  decimal: {
    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
  },
  percent: {
    style: 'percent', useGrouping: false
  }
}

export const numberFormats = {
  en: enNumberSchema,
  ro: roNumberSchema
}
