import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import Anchor from '../../components/Commom/Anchor';
import SectionExplanation from '../../components/SectionExplanation';
import Faq from '../../components/sections/Faq/Faq';
import Share from '../../components/sections/SharePosters/Share';
import Publish from '../../components/sections/SharePosters/Community';
import Thanks from '../../components/sections/Thanks/Thanks';
import PosterBySearch from '../../components/PosterEditor/Models/PosterBySearch';
import PosterEditor from '../../components/PosterEditor/PosterEditor';
import { useEffect, useState, useRef } from 'react';
import { trackPosterRecreation } from '../../services/analytics';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styled from 'styled-components';

const FadeInSection = styled.div`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;

export default function Home({ loadingComplete }) {
  const { t } = useTranslation();
  const [recreatingPosterJSON, setRecreatingPosterJSON] = useState(null);
  const posterEditorRef = useRef(null);

  const [anchorRef, anchorVisible] = useScrollAnimation();
  const [explanationRef, explanationVisible] = useScrollAnimation();
  const [posterSectionRef, posterSectionVisible] = useScrollAnimation();
  const [publishRef, publishVisible] = useScrollAnimation();
  const [shareRef, shareVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();
  const [thanksRef, thanksVisible] = useScrollAnimation();

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
    <>
      <Hero showAnimation={loadingComplete} onRecreate={recreatePoster} />
      
      <FadeInSection ref={anchorRef} $isVisible={anchorVisible}>
        <Anchor text={t('anchorArt')} type={1} />
      </FadeInSection>

      <FadeInSection ref={explanationRef} $isVisible={explanationVisible}>
        <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />
      </FadeInSection>

      <FadeInSection ref={posterSectionRef} $isVisible={posterSectionVisible}>
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
      </FadeInSection>

      <FadeInSection ref={publishRef} $isVisible={publishVisible}>
        <Publish />
      </FadeInSection>

      <FadeInSection ref={shareRef} $isVisible={shareVisible}>
        <Share />
      </FadeInSection>

      <FadeInSection ref={faqRef} $isVisible={faqVisible}>
        <Faq />
      </FadeInSection>

      <FadeInSection ref={thanksRef} $isVisible={thanksVisible}>
        <Thanks />
      </FadeInSection>
    </>
  );
}