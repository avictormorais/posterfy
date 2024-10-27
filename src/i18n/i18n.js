import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: {
                paragraphHero1: "Posterfy transforms music passion into visual art.",
                paragraphHero2: "Create custom posters for your favorite albums using Spotify API.",
                anchorArt: "Art.",
                ArtTitle: "Watch the music\ntake shape",
                ArtParagraph: "It's simple, search for your favorite album, select it and let the art flow!",
                SearchPlaceholder: "Album name..."
            },
        },
        pt: {
            translation: {
                paragraphHero1: "Posterfy transforma a paixão por música em arte visual.",
                paragraphHero2: "Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",
                anchorArt: "Arte.",
                ArtTitle: "Veja a música\ntomar forma",
                ArtParagraph: "É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",
                SearchPlaceholder: "Nome do álbum..."
            },
        },
        es: {
            translation: {
                paragraphHero1: "Posterfy transforma la pasión por la música en arte visual.",
                paragraphHero2: "Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",
                anchorArt: "Arte.",
                ArtTitle: "Mira la música\ntomar forma",
                ArtParagraph: "Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",
                SearchPlaceholder: "Nombre del álbum..."
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
