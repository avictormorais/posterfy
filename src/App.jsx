import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Anchor from './components/Anchor';
import SectionExplanation from './components/SectionExplanation';
import Searchbar from './components/Searchbar';

const Container = styled.div`
  height: 150vh;
`;

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Hero />
      <Anchor text={t('anchorArt')} />
      <SectionExplanation 
        title={t('ArtTitle')} 
        paragraph={t('ArtParagraph')} 
      />
      <Searchbar />
      <Container></Container>
    </>
  );
}

export default App;
