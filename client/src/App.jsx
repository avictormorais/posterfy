import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loading from './components/Commom/Loading';
import SEOComponent from './components/SEOComponent';
import IndexingMonitor from './components/IndexingMonitor';
import AnalyticsInitializer from './components/AnalyticsInitializer';
import { usePageTracking } from './hooks/usePageTracking';
import { initScrollTracking } from './services/enhancedAnalytics';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalProvider } from './contexts/AlertsContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setRouteLoading(true);
    setShowLoading(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setRouteLoading(false);
      setTimeout(() => {
        setShowLoading(false);
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!showLoading) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        opacity: routeLoading ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
        pointerEvents: routeLoading ? 'auto' : 'none'
      }}
    >
      <Loading isVisible={true} />
    </div>
  );
}

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
        <AuthProvider>
          <SEOComponent />
          <IndexingMonitor />
          <AnalyticsInitializer />
          
        <Router>
          <ScrollToTop />
          <Routes>              <Route path="/" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<Home loadingComplete={loadingComplete} />} />
              </Route>
              
              <Route path="/login" element={<Layout showNavbar={false} showFooter={false} />}>
                <Route index element={<Login />} />
              </Route>

              <Route path="/dashboard" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
              </Route>

              <Route path="*" element={<Error />} />

            </Routes>
          </Router>
          
          <Loading isVisible={loading} />
        </AuthProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
