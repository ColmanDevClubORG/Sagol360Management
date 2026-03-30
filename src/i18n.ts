import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationHE from './locales/he/translation.json'
import translationRU from './locales/ru/translation.json'
import translationAR from './locales/ar/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  he: {
    translation: translationHE,
  },
  ru: {
    translation: translationRU,
  },
  ar: {
    translation: translationAR,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'he',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
