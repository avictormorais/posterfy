import { useEffect } from 'react';
import { initGA } from '../../services/analytics';

const AnalyticsInitializer = () => {
  useEffect(() => {
    initGA();
  }, []);

  return null;
};

export default AnalyticsInitializer;
