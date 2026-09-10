import './index.css'
import { prepareLoadingTitle } from './loadingTitle'

async function startApp() {
  prepareLoadingTitle(document.getElementById('boot-loading'));
  // Paint and composite the HTML loader before evaluating the application.
  const logo = document.querySelector('#boot-loading img');
  if (logo) await logo.decode().catch(() => {});
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const [{ StrictMode }, { createRoot }, { default: App }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./App.jsx'),
    import('./i18n/i18n'),
  ]);
  createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
}

startApp().catch(error => {
  console.error('Posterfy startup failed:', error);
  const message = document.querySelector('.posterfy-loading-error');
  if (message) message.hidden = false;
});
