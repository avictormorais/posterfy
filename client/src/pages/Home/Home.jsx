/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import apiService from '../../services/apiService';
import Hero from '../../components/Hero';
import Anchor from '../../components/Common/Anchor';
import SectionExplanation from '../../components/SectionExplanation';
import Faq from '../../components/sections/Faq/Faq';
import Share from '../../components/sections/SharePosters/Share';
import Publish from '../../components/sections/SharePosters/Community';
import Profiles from '../../components/sections/Profiles/Profiles';
import PosterBySearch from '../../components/PosterEditor/Models/PosterBySearch';
import PosterEditor from '../../components/PosterEditor/PosterEditor';
import AlertModal from '../../components/Common/AlertModal';
import { useEffect, useState, useRef } from 'react';
import { trackPosterRecreation, trackCommunityPosterView } from '../../services/analytics';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { readPendingFlow } from '../../utils/pendingFlow';

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
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { loading: authLoading } = useAuth();
  const [recreatingPosterJSON, setRecreatingPosterJSON] = useState(null);
  const [recreatingPosterData, setRecreatingPosterData] = useState(null);
  const [resumeFlow, setResumeFlow] = useState(null);
  const [publishModal, setPublishModal] = useState(null);
  const posterEditorRef = useRef(null);

  useEffect(() => {
    const flowId = searchParams.get('resume') || searchParams.get('flow');
    if (!flowId) return;

    const flow = readPendingFlow();
    if (flow?.flowId === flowId && flow.returnTo === location.pathname) {
      setResumeFlow(flow);
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    if (authLoading) return;

    if (!posterId) {
      if (resumeFlow) {
        setRecreatingPosterJSON({
          ...resumeFlow.editor.posterJson,
          albumID: resumeFlow.editor.albumId,
          albumNameOriginal: resumeFlow.editor.albumNameOriginal,
          artistsNameOriginal: resumeFlow.editor.artistsNameOriginal,
        });
        setRecreatingPosterData(null);
      }
      return;
    }

    let cancelled = false;
    const load = async () => {
      try {
        const data = await apiService.getPoster(posterId);
        if (cancelled) return;
        apiService.registerView(posterId).catch(() => {});
        trackCommunityPosterView(posterId, data.poster.albumName, data.poster.artistsName);
        const restoredJson = resumeFlow?.editor.posterId === posterId
          ? resumeFlow.editor.posterJson
          : {};
        const json = {
          ...(data.poster.posterJson || {}),
          ...restoredJson,
          albumID: data.poster.spotifyAlbumId,
          albumNameOriginal: resumeFlow?.editor.albumNameOriginal || data.poster.albumNameOriginal,
          artistsNameOriginal: resumeFlow?.editor.artistsNameOriginal || data.poster.artistsNameOriginal,
        };
        setRecreatingPosterJSON(json);
        setRecreatingPosterData(data.poster);
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
  }, [posterId, authLoading, resumeFlow]);

  const [anchorRef, anchorVisible] = useScrollAnimation();
  const [explanationRef, explanationVisible] = useScrollAnimation();
  const [posterSectionRef, posterSectionVisible] = useScrollAnimation();
  const [publishRef, publishVisible] = useScrollAnimation();
  const [profilesRef, profilesVisible] = useScrollAnimation();
  const [shareRef, shareVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();

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
    setRecreatingPosterData(null);
    navigate('/');
  }

  const handlePendingFlowComplete = () => {
    setResumeFlow(null);
    navigate(location.pathname, { replace: true });
  };

  return (
    <>
      {publishModal && (
        <AlertModal
          title={t('COMMUNITY_PublishSuccess')}
          paragraph={t('COMMUNITY_PublishedModalBody')}
          confirmText={t('GotIt')}
          onConfirm={() => {
            setPublishModal(null);
            navigate('/');
          }}
          canClose={true}
          onCancel={() => {
            setPublishModal(null);
            navigate('/');
          }}
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
            posterFullData={recreatingPosterData}
            source={resumeFlow?.editor.source}
            resumeFlow={resumeFlow}
            checkoutResult={searchParams.get('print_ready')}
            checkoutSessionId={searchParams.get('session_id')}
            onPendingFlowComplete={handlePendingFlowComplete}
            onPublishSuccess={(id) => setPublishModal({ posterId: id })}
          />
        ) : (
          <PosterBySearch onPublishSuccess={(id) => setPublishModal({ posterId: id })} />
        )}
      </FadeInSection>

      <FadeInSection ref={publishRef} $isVisible={publishVisible}>
        <Publish />
      </FadeInSection>

      <FadeInSection ref={profilesRef} $isVisible={profilesVisible}>
        <Profiles />
      </FadeInSection>

      <FadeInSection ref={shareRef} $isVisible={shareVisible}>
        <Share />
      </FadeInSection>

      <FadeInSection ref={faqRef} $isVisible={faqVisible}>
        <Faq />
      </FadeInSection>
    </>
  );
}
