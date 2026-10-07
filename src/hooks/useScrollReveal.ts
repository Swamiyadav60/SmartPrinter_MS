import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.querySelectorAll('.reveal').forEach((t) => t.classList.add('visible'));
      if (el.classList.contains('reveal')) el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px 0px 50px 0px' }
    );

    const targets = el.querySelectorAll('.reveal');
    targets.forEach((t) => observer.observe(t));

    if (el.classList.contains('reveal')) {
      observer.observe(el);
    }

    // Immediately reveal elements that are already within or near the initial viewport
    const checkImmediate = () => {
      const vh = window.innerHeight;
      targets.forEach((t) => {
        const rect = t.getBoundingClientRect();
        if (rect.top < vh + 100 && rect.bottom > -100) {
          t.classList.add('visible');
        }
      });
      if (el.classList.contains('reveal')) {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh + 100 && rect.bottom > -100) {
          el.classList.add('visible');
        }
      }
    };

    checkImmediate();
    const timer = setTimeout(checkImmediate, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return ref;
}
