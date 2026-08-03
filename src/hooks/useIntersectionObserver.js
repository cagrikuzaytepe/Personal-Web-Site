import { useEffect } from 'react';

export const useIntersectionObserver = (loading) => {
  useEffect(() => {
    if (loading) return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const sections = document.querySelectorAll('.section:not(.visible)');

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('.section:not(.visible)').forEach((section) => {
        observer.observe(section);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);
};
