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

export default function Home({ loadingComplete }) {
  const { t } = useTranslation();
  const [recreatingPosterJSON, setRecreatingPosterJSON] = useState(null);
  const posterEditorRef = useRef(null);

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
      <Anchor text={t('anchorArt')} type={1} />
      <SectionExplanation title={t('ArtTitle')} paragraph={t('ArtParagraph')} />

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

      <Publish />
      <Share />
      <Faq />
      <Thanks />
    </>
  );
}