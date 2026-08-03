import * as en from '../i18n/en.js';
import * as tr from '../i18n/tr.js';

export const locales = {
  en,
  tr,
};

export const getLocaleData = (language) => locales[language] ?? locales.en;
