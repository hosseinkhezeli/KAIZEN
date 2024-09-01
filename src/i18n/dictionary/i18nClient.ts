import { i18n } from '@/i18n';
import en from '@i18n/dictionary/en';
import fa from '@i18n/dictionary/fa';
import { store } from '@states/store';
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TLanguages = "fa" | "en"

const dictionaries = {
  en,
  fa
};

export const getDictionaryClient = (lang?: TLanguages) => {
  const langStore:TLanguages = store.getState().global.lang;
  const dictionary = lang ? dictionaries[lang] : dictionaries[langStore];

  return (
    path: NestedKeyOf<typeof i18n>,
    params?: { [key: string]: string | number }
  ): any => {

    let translation = get(dictionary, path);

    if (params && typeof translation == "string") {
      Object.entries(params).forEach(([key, value]) => {
        // @ts-ignore
        translation = translation.replace(`{{ ${key} }}`, String(value));
      });

      return translation;
    } else {
      return translation;
    }
  };
};
export const get = (from: {}, path: string) =>
  path
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    // @ts-ignore
    .reduce((prev, cur) => prev && prev[cur], from);
