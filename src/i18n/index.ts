import 'server-only';
import fa from '@/i18n/dictionary/fa/index';
import en from '@/i18n/dictionary/en/index';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fa'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

const dictionaries = {
  fa,
  en,
};

export const getDictionaryServer = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.fa;
};
