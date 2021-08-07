import { createContext } from 'react';

import { getTranslate } from './config';

const storeLangCode = 'ja';

export const initialState = {
  langCode: storeLangCode,
  translate: getTranslate(storeLangCode),
};

export default createContext(initialState);
