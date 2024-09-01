import 'server-only';
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fa'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const dictionaries = {
  fa: () =>
    import('@/i18n/dictionary/fa/index').then((module) => module.default),
  en: () =>
    import('@/i18n/dictionary/en/index').then((module) => module.default),
};

export const getDictionaryServer = async (locale: Locale) =>
  dictionaries[locale]?.() ?? (await dictionaries.fa());
