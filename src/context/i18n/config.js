import _get from 'lodash/get';
import JA from 'ja.json';

const translations = {
  ja: JA,
};

export const getTranslate = (langCode) => (key) => {
  const result = _get(translations[langCode], key);
  return result;
};
