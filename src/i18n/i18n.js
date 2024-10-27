import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
    en: {
        translation: {
            paragraphHero1: "Posterfy transforms music passion into visual art.",
            paragraphHero2: "Create custom posters for your favorite albums using Spotify API."
        },
    },
    pt: {
        translation: {
            paragraphHero1: "Posterfy transforma a paixão por música em arte.",
            paragraphHero2: "Crie pôsters personalizados para seus álbuns favoritos."
        },
    },
    es: {
        translation: {
            paragraphHero1: "Posterfy transforma la pasión por la música en arte visual.",
            paragraphHero2: "Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify"
        },
    },
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
