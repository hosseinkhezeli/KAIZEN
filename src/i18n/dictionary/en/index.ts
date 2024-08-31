import { en_auth } from '@i18n/dictionary/en/sections/en.auth';
import { en_global } from '@i18n/dictionary/en/sections/en_global';
import { en_languages } from '@i18n/dictionary/en/sections/en_languages';

export default {
  ...en_languages,
  ...en_global,
  auth: {
    ...en_auth,
  },
};
