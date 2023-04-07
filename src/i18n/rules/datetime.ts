import { DateTimeFormats, DateTimeFormat } from '@intlify/core-base';


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

// ENGLISH
const enLongDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const enShortDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const enShortDateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
}

// ROMANIAN
const roLongDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric" ,
  month: "long",
  day: "numeric" ,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}
const roShortDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const roShortDateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
}

//GERMAN
const deLongDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric" ,
  month: "long",
  day: "numeric" ,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}
const deShortDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const deShortDateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
}


/**
 * Define formats:
 * Usage in templates example: $d(date,'shortOnlyDate')
 */
const enDateTimeFormat: DateTimeFormat = {
  short : enShortDateTimeFormatOptions,
  long: enLongDateTimeFormatOptions,
  shortOnlyDate: enShortDateFormatOptions,
}

const roDateTimeFormat: DateTimeFormat = {
  short : roShortDateTimeFormatOptions,
  long: roLongDateTimeFormatOptions,
  shortOnlyDate: roShortDateFormatOptions,
}
const deDateTimeFormat: DateTimeFormat = {
  short : deShortDateTimeFormatOptions,
  long: deLongDateTimeFormatOptions,
  shortOnlyDate: deShortDateFormatOptions,
}

export const datetimeFormats: DateTimeFormats<DateTimeFormat, 'en' | 'ro' | 'de'> = {
  en: enDateTimeFormat,
  ro: roDateTimeFormat,
  de: deDateTimeFormat,
}
