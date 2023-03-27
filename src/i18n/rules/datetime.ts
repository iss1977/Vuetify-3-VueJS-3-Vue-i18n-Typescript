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


const enShortDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const roShortDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

const enLongDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric" ,
  month: "numeric",
  day: "numeric" ,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}
const roLongDateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric" ,
  month: "long",
  day: "numeric" ,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}


const enDateTimeFormat: DateTimeFormat = {
  short : enShortDateTimeFormatOptions,
  long: enLongDateTimeFormatOptions
}

const roDateTimeFormat: DateTimeFormat = {
  short : roShortDateTimeFormatOptions,
  long: roLongDateTimeFormatOptions
}

export const datetimeFormats: DateTimeFormats<DateTimeFormat, 'en' | 'ro'> = {
  en: enDateTimeFormat,
  ro: roDateTimeFormat,
}
