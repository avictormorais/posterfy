/* eslint-disable react/prop-types */
import heartUrl from '../svgs/loading-heart.svg';
import { useLayoutEffect, useRef } from 'react';
import { prepareLoadingTitle } from '../../loadingTitle';

// One complete image: the heart and lettering are never sliced or clipped.
export default function Loading({ isVisible }) {
    const container = useRef(null);
    useLayoutEffect(() => prepareLoadingTitle(container.current), []);
    return (
        <div ref={container} className={`posterfy-loading${isVisible ? '' : ' is-leaving'}`} aria-hidden={!isVisible}>
            <div className="posterfy-loading-art" role="status" aria-label="Posterfy">
                <div className="posterfy-loading-heart" aria-hidden="true">
                    <div className="posterfy-loading-heart-core">
                        <img src={heartUrl} width="511" height="464" alt="" />
                    </div>
                </div>
                <div className="posterfy-loading-name">
                    <span className="posterfy-loading-title">
                        <span className="posterfy-loading-brand">Posterfy</span>
                        <span className="posterfy-loading-domain">{import.meta.env.VITE_DOMAIN}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
