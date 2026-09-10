let completion;
// Original App timing: 2 seconds on screen + 1 second to reveal the home.
export const BOOT_HOLD_MS = 2000;
export const BOOT_EXIT_MS = 1000;

export function dismissBootLoading() {
    if (completion) return completion;
    completion = new Promise(resolve => {
        const loader = document.getElementById('boot-loading');
        const finish = () => {
            loader?.remove();
            document.documentElement.classList.remove('boot-pending');
            resolve();
        };
        if (!loader) return finish();
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return finish();
        loader.style.setProperty('--boot-exit-duration', `${BOOT_EXIT_MS}ms`);
        // Start from the App commit, as before. The shared promise also keeps
        // StrictMode from scheduling two sequences. Home waits for finish().
        setTimeout(() => {
            loader.classList.add('is-leaving');
            setTimeout(finish, BOOT_EXIT_MS);
        }, BOOT_HOLD_MS);
    });
    return completion;
}
