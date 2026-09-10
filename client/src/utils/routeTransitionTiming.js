export function scheduleRouteReveal({ elapsedMs, reducedMotion, onExit, onComplete }) {
    let exit;
    const hold = setTimeout(() => {
        onExit();
        exit = setTimeout(onComplete, reducedMotion ? 0 : 180);
    }, Math.max(0, 300 - elapsedMs));
    return () => { clearTimeout(hold); clearTimeout(exit); };
}
