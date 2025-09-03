import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Commom/Loading';
import SEOComponent from './components/SEOComponent';
import IndexingMonitor from './components/IndexingMonitor';
import AnalyticsInitializer from './components/AnalyticsInitializer';
import { usePageTracking } from './hooks/usePageTracking';
import { initScrollTracking } from './services/enhancedAnalytics';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalProvider } from './contexts/AlertsContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import PasswordRecovery from './pages/login/PasswordRecovery';
import Error from './pages/Error/Error';
import { useEffect, useState } from 'react';

function App() {
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
      <ModalProvider>
        <SEOComponent />
        <IndexingMonitor />
        <AnalyticsInitializer />
        
        <Router>
          <Routes>

            <Route path="/" element={<Layout showNavbar={true} showFooter={true} />}>
              <Route index element={<Home loadingComplete={loadingComplete} />} />
            </Route>
            
            <Route path="/login" element={<Layout showNavbar={false} showFooter={false} />}>
              <Route index element={<Login />} />
            </Route>
            
            <Route path="/recovery" element={<Layout showNavbar={false} showFooter={false} />}>
              <Route index element={<PasswordRecovery />} />
            </Route>

            <Route path="*" element={<Error />} />

          </Routes>
        </Router>
        
        <Loading isVisible={loading} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
