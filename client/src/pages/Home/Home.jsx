import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import apiService from '../../services/apiService';
import Hero from '../../components/Hero';
import Anchor from '../../components/Commom/Anchor';
import SectionExplanation from '../../components/SectionExplanation';
import Faq from '../../components/sections/Faq/Faq';
import Share from '../../components/sections/SharePosters/Share';
import Publish from '../../components/sections/SharePosters/Community';
import Thanks from '../../components/sections/Thanks/Thanks';
import PosterBySearch from '../../components/PosterEditor/Models/PosterBySearch';
import PosterEditor from '../../components/PosterEditor/PosterEditor';
import AlertModal from '../../components/Commom/AlertModal';
import { useEffect, useState, useRef } from 'react';
import { trackPosterRecreation, trackCommunityPosterView } from '../../services/analytics';
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
  const { posterId } = useParams();
  const [recreatingPosterJSON, setRecreatingPosterJSON] = useState(null);
  const [publishModal, setPublishModal] = useState(null);
  const posterEditorRef = useRef(null);

  // When the route is /p/:posterId, fetch the poster and open the editor
  useEffect(() => {
    if (!posterId) return;
    let cancelled = false;
    const load = async () => {
      try {
        const data = await apiService.getPoster(posterId);
        if (cancelled) return;
        apiService.registerView(posterId).catch(() => {});
        trackCommunityPosterView(posterId, data.poster.albumName, data.poster.artistsName);
        const json = { ...(data.poster.posterJson || {}), albumID: data.poster.spotifyAlbumId };
        setRecreatingPosterJSON(json);
        setTimeout(() => {
          if (posterEditorRef.current) {
            const y = posterEditorRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 200);
      } catch (e) {
        console.error('Failed to load community poster:', e);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [posterId]);

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
      {publishModal && (
        <AlertModal
          title={t('COMMUNITY_PublishSuccess')}
          paragraph={t('COMMUNITY_PublishedModalBody')}
          confirmText={t('GotIt')}
          onConfirm={() => setPublishModal(null)}
          canClose={true}
          onCancel={() => setPublishModal(null)}
          isClosing={false}
        />
      )}
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
            posterId={posterId || null}
            onPublishSuccess={(id) => setPublishModal({ posterId: id })}
          />
        ) : (
          <PosterBySearch onPublishSuccess={(id) => setPublishModal({ posterId: id })} />
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