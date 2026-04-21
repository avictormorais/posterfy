import React, { useState, useEffect } from 'react';
import { getSignatureBySpotifyId } from '../../services/signatureService';

const ArtistSignature = ({ spotifyId, artistName, width = 100, color = '#000000' }) => {
  const [content, setContent] = useState(null);
  const [isSvg, setIsSvg] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSignature = async () => {
      setLoading(true);
      try {
        const url = await getSignatureBySpotifyId(spotifyId, artistName);
        
        if (!url) {
          setLoading(false);
          return;
        }

        if (url.toLowerCase().endsWith('.svg')) {
          setIsSvg(true);
          const response = await fetch(url, { mode: 'cors' });
          let svgText = await response.text();
          
          svgText = svgText.replace(/#000000/gi, color);
          svgText = svgText.replace(/<svg([^>]*)/, `<svg fill="${color}"$1`);
          setContent(svgText);
        } else if (url.toLowerCase().endsWith('.png')) {
          setIsSvg(false);
          setContent(url);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchSignature();
  }, [spotifyId, artistName, color]);

  if (loading) return null;
  if (!content) return null;

  const containerStyle = {
    width: `${width}px`,
    height: 'auto',
    display: 'inline-block'
  };

  if (isSvg) {
    return (
      <div 
        style={containerStyle}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <img 
      src={content}
      alt="Artist signature"
      style={{
        width: '100%',
        height: 'auto',
        filter: `drop-shadow(0 0 1px ${color})`
      }}
    />
  );
};

export default ArtistSignature;
