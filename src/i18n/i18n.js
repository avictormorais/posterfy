import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to posterfy!",
        },
      },
      pt: {
        translation: {
          welcome: "Bem-vindo ao posterfy!",
        },
      },
      es: {
        translation: {
          welcome: "¡Bienvenidos a posterfy!",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
