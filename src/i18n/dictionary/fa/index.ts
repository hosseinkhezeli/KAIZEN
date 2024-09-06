import { fa_auth } from '@i18n/dictionary/fa/sections/fa_auth';
import { fa_dashboard } from '@i18n/dictionary/fa/sections/fa_dashboard';
import { fa_languages } from '@i18n/dictionary/fa/sections/fa_languages';
import { fa_global } from '@i18n/dictionary/fa/sections/fa_global';

export default {
  ...fa_languages,
  ...fa_global,
  auth: {
    ...fa_auth,
  },
  dashboard: {
    ...fa_dashboard,
  },
};
