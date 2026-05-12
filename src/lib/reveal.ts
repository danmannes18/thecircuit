// IntersectionObserver-driven reveal. Honors prefers-reduced-motion.
// Phase 4 will refine. Phase 1 ships the scaffold.

export function initReveal() {
  if (typeof window === 'undefined') return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (prefersReduced) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
