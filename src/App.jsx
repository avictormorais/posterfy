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
import { ThemeProvider } from './contexts/ThemeContext';
import Share from './components/sections/SharePosters/Share';
import Publish from './components/sections/SharePosters/Community';
import Thanks from './components/sections/Faq/Thanks/Thanks';
import PosterBySearch from './components/PosterEditor/Models/PosterBySearch';
import { useEffect, useState } from 'react';

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

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

  return (
    <ThemeProvider>
      <SEOComponent />
      <IndexingMonitor />
      <AnalyticsInitializer />
      <Navbar />
      <Hero showAnimation={loadingComplete} />
      <Anchor text={t('anchorArt')} type={1} />
      <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />
      <PosterBySearch />
      <Publish />
      <Share />
      <Faq/>
      <Thanks />
      <Footer />
      <Loading isVisible={loading} />
    </ThemeProvider>
  );
}

export default App;
