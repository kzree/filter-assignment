import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './resources/en.json';

const resources = {
  en: {
    translation: translationEN,
  },
  et: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
});
