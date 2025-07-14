import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Anchor from './components/Anchor';
import SectionExplanation from './components/SectionExplanation';
import Searchbar from './components/Searchbar';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Faq from './components/Faq/Faq';
import PosterEditor from './components/PosterEditor/PosterEditor'
import SEOComponent from './components/SEOComponent';
import AnalyticsInitializer from './components/AnalyticsInitializer';
import { usePageTracking } from './hooks/usePageTracking';
import { initScrollTracking } from './services/enhancedAnalytics';


function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [albumId, setAlbumId] = useState(null);

  usePageTracking();

  useEffect(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  function onClickAlbum(id){
    setAlbumId(id);
  }

  function handleClickBack(){
    setAlbumId(null);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const onSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SEOComponent />
      <AnalyticsInitializer />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Anchor text={t('anchorArt')} type={1} />
          <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />
          
          {albumId ? (
            <PosterEditor albumID={albumId} handleClickBack={handleClickBack}/>
          ) : (
            <>
              <Searchbar onSearch={onSearch} value={query} />
              {query && <Grid query={query} onclick={onClickAlbum} />}

              <div style={{ display: query ? 'none' : 'block' }}>
                <Anchor text={t('TryTrend')} type={2}/>
                <Grid onclick={onClickAlbum} />
              </div>
            </>
          )}

          <Faq/>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
