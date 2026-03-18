import { useEffect } from 'react';

/**
 * useScrollAnimation — Custom hook that uses IntersectionObserver
 * to add a `.visible` class to elements with `.animate-on-scroll`
 * when they enter the viewport, triggering CSS animations.
 */
export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with the animation class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
