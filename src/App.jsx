import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Anchor from './components/Anchor';
import SectionExplanation from './components/SectionExplanation';
import Searchbar from './components/Searchbar';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';

const Container = styled.div`
  height: 150vh;
`;

function App() {
  const { t } = useTranslation();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Anchor text={t('anchorArt')} type={1}/>
          <SectionExplanation 
            title={t('ArtTitle')} 
            paragraph={t('ArtParagraph')} 
          />
          <Searchbar />
          <Anchor text={t('TryTrend')} type={2}/>
          <Container></Container>
        </>
      )}
    </>
  );
}

export default App;
