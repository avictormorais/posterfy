/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heartUrl from '../components/svgs/loading-heart.svg';
import { scheduleRouteReveal } from '../utils/routeTransitionTiming';
import './route-transition.css';

const Context = createContext({ ready: () => {}, fail: () => {}, revealed: true });
export const useRouteTransition = () => useContext(Context);

function Transition({ pathname, children }) {
    const { t } = useTranslation();
    const started = useRef(performance.now());
    const [ready, setReady] = useState(!/^\/(p|u)\//.test(pathname));
    const [leaving, setLeaving] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [error, setError] = useState(false);
    const markReady = useCallback(() => setReady(true), []);
    const fail = useCallback(() => setError(true), []);
    const value = useMemo(() => ({ ready: markReady, fail, revealed }), [markReady, fail, revealed]);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    useEffect(() => {
        if (revealed) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('posterfy:scroll-lock', { detail: { locked: true } }));
        return () => {
            document.body.style.overflow = previous;
            window.dispatchEvent(new CustomEvent('posterfy:scroll-lock', { detail: { locked: false } }));
        };
    }, [revealed]);

    useEffect(() => {
        if (ready || error) return;
        const timeout = setTimeout(fail, 25000);
        return () => clearTimeout(timeout);
    }, [ready, error, fail]);

    useEffect(() => {
        if (!ready || error) return;
        return scheduleRouteReveal({
            elapsedMs: performance.now() - started.current,
            reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
            onExit: () => setLeaving(true),
            onComplete: () => setRevealed(true),
        });
    }, [ready, error]);

    return (
        <Context.Provider value={value}>
            <div inert={!revealed ? '' : undefined} aria-busy={!revealed} aria-hidden={!revealed}>
                {children}
            </div>
            {!revealed && (
                <div className={`route-transition${leaving && !error ? ' is-leaving' : ''}`} role={error ? 'alert' : 'status'} aria-label={t('Loading')}>
                    <img src={heartUrl} width="80" height="73" alt="" aria-hidden="true" />
                    {error && <div className="route-transition-error">
                        <p>{t('ROUTE_LoadFailed')}</p>
                        <button onClick={() => window.location.reload()}>{t('ROUTE_Retry')}</button>
                        <Link to="/">{t('GoBack')}</Link>
                    </div>}
                </div>
            )}
        </Context.Provider>
    );
}

export function RouteTransitionProvider({ children }) {
    const { pathname } = useLocation();
    // A new scope also unmounts the previous screen: late requests cannot
    // release the next navigation or display a previously selected poster.
    return <Transition key={pathname} pathname={pathname}>{children}</Transition>;
}
