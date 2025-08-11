import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Anchor from './components/Anchor';
import SectionExplanation from './components/SectionExplanation';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Faq from './components/sections/Faq/Faq';
import SEOComponent from './components/SEOComponent';
import IndexingMonitor from './components/IndexingMonitor';
import AnalyticsInitializer from './components/AnalyticsInitializer';
import { usePageTracking } from './hooks/usePageTracking';
import { initScrollTracking } from './services/enhancedAnalytics';
import { trackPosterRecreation } from './services/analytics';
import { ThemeProvider } from './contexts/ThemeContext';
import Share from './components/sections/SharePosters/Share';
import Publish from './components/sections/SharePosters/Community';
import Thanks from './components/sections/Faq/Thanks/Thanks';
import PosterBySearch from './components/PosterEditor/Models/PosterBySearch';
import { useEffect, useState, useRef } from 'react';
import PosterEditor from './components/PosterEditor/PosterEditor';

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [recreatingPosterJSON, setRecreatingPosterJSON] = useState(null);
  const posterEditorRef = useRef(null);

  usePageTracking();

  useEffect(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setLoadingComplete(true);
      }, 1000);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  const recreatePoster = (imageJSON) => {
    trackPosterRecreation(
      imageJSON.albumName || 'Unknown Album',
      imageJSON.artistsName || 'Unknown Artist', 
      imageJSON.albumID || '',
      'album_collection'
    );
    
    setRecreatingPosterJSON(imageJSON);
    setTimeout(() => {
      if (posterEditorRef.current) {
        const y = posterEditorRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }

  const handleClickBack = () => {
    setRecreatingPosterJSON(null);
  }

  return (
    <ThemeProvider>
      <SEOComponent />
      <IndexingMonitor />
      <AnalyticsInitializer />
      <Navbar />
      <Hero showAnimation={loadingComplete} onRecreate={recreatePoster} />
      <Anchor text={t('anchorArt')} type={1} />
      <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />

      {recreatingPosterJSON ? (
        <PosterEditor 
          ref={posterEditorRef}
          albumID={recreatingPosterJSON.albumID} 
          initialPosterJson={recreatingPosterJSON} 
          handleClickBack={handleClickBack}
        />
      ) : (
        <PosterBySearch />
      )}

      <Publish />
      <Share />
      <Faq />
      <Thanks />
      <Footer />
      <Loading isVisible={loading} />
    </ThemeProvider>
  );
}

export default App;
