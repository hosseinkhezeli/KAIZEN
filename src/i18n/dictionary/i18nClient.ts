import { i18n } from '@/i18n/i18n';
import en from '@i18n/dictionary/en';
import fa from '@i18n/dictionary/fa';

// Type to get nested keys of an object as a string literal type
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Allowed languages
export type TLanguages = 'fa' | 'en';

// Dictionary mapping for languages
const dictionaries = {
  en,
  fa,
};

// Function to get the dictionary client based on the selected language
export const getDictionaryClient = (lang?: TLanguages) => {
  // Get the current language from the global state
  const langStore: TLanguages = 'en';
  const dictionary = lang ? dictionaries[lang] : dictionaries[langStore];

  // Function to retrieve translations
  return (
    path: NestedKeyOf<typeof i18n>,
    params?: Record<string, string | number>,
  ): string | undefined => {
    // Get the translation based on the path
    let translation = get(dictionary, path);

    // Replace placeholders in the translation with provided parameters
    if (params && typeof translation === 'string') {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{{ ${key} }}`, String(value));
      });
    }

    return translation;
  };
};

// Helper function to safely access nested properties in an object
export const get = (from: Record<string, any>, path: string): any =>
  path
    .replace(/\[([^\[\]]*)\]/g, '.$1.') // Convert array notation to dot notation
    .split('.') // Split the path into segments
    .filter(Boolean) // Remove empty segments
    .reduce((prev, cur) => (prev ? prev[cur] : undefined), from); // Traverse the object
