// Measure once (and once after fonts load), never on animation frames.
export function prepareLoadingTitle(container) {
    let active = true;
    const update = () => {
        if (!active || !container?.isConnected) return;
        const suffix = container.querySelector('.posterfy-loading-domain');
        if (!suffix) return;
        container.style.setProperty('--domain-offset', `${suffix.getBoundingClientRect().width / 2}px`);
    };
    update();
    document.fonts?.ready.then(update);
    return () => { active = false; };
}
