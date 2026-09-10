import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { dismissBootLoading } from './bootLoading';
import { RouteTransitionProvider } from './contexts/RouteTransitionContext';
import { usePageTracking } from './hooks/usePageTracking';
import { initScrollTracking } from './services/enhancedAnalytics';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { PrintReadyProvider } from './contexts/PrintReadyContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import Admin from './pages/Admin/Admin';
import AdminRoute from './components/AdminRoute';
import { useEffect, useState } from 'react';
import AnalyticsInitializer from './components/SEO/AnalyticsInitializer';
import IndexingMonitor from './components/SEO/IndexingMonitor';
import { SEOProvider } from './components/SEO/SEOComponent';
import Lenis from 'lenis';
import LegalPage from './pages/Legal/LegalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  usePageTracking();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let animationFrame;
    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    const handleScrollLock = (event) => {
      if (event.detail?.locked) lenis.stop();
      else lenis.start();
    };

    window.addEventListener('posterfy:scroll-lock', handleScrollLock);
    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('posterfy:scroll-lock', handleScrollLock);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  useEffect(() => {
    let active = true;
    dismissBootLoading().then(() => {
      if (active) setLoadingComplete(true);
    });
    return () => { active = false; };
  }, []);

  return (
    <ThemeProvider>
      <PrintReadyProvider>
        <AuthProvider>
          <IndexingMonitor />
          <AnalyticsInitializer />
          
          <Router>
            <SEOProvider>
              <ScrollToTop />
              <RouteTransitionProvider>
              <Routes>
              <Route path="/" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<Home loadingComplete={loadingComplete} />} />
              </Route>

              <Route path="/p/:posterId" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<Home loadingComplete={loadingComplete} />} />
              </Route>
              
              <Route path="/login" element={<Layout showNavbar={false} showFooter={false} />}>
                <Route index element={<Login />} />
              </Route>

              <Route path="/u/:username" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<Profile />} />
              </Route>

              <Route path="/admin" element={
                <AdminRoute>
                  <Layout showNavbar={true} showFooter={false} />
                </AdminRoute>
              }>
                <Route index element={<Admin />} />
              </Route>

              <Route path="/terms" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<LegalPage type="terms" />} />
              </Route>
              <Route path="/privacy" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<LegalPage type="privacy" />} />
              </Route>
              <Route path="/refund" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<LegalPage type="refund" />} />
              </Route>
              <Route path="/support" element={<Layout showNavbar={true} showFooter={true} />}>
                <Route index element={<LegalPage type="support" />} />
              </Route>

              <Route path="/error" element={<Error />} />
              <Route path="*" element={<Error />} />

              </Routes>
              </RouteTransitionProvider>
            </SEOProvider>
          </Router>
        </AuthProvider>
      </PrintReadyProvider>
    </ThemeProvider>
  );
}

export default App;
