import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor — Animated dot + trailing ring cursor.
 * Hidden on touch devices. Scales up on interactive elements.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrame = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setVisible(true);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseOver = (e) => {
      const tag = e.target.closest('a, button, [role="button"], .btn, .navbar-logo, .theme-toggle, .navbar-hamburger');
      setHovering(!!tag);
    };

    const onMouseLeave = () => {
      mouse.current = { x: -100, y: -100 };
      if (dotRef.current) { dotRef.current.style.left = '-100px'; dotRef.current.style.top = '-100px'; }
      if (ringRef.current) { ringRef.current.style.left = '-100px'; ringRef.current.style.top = '-100px'; }
    };

    // Trailing ring animation
    const animateRing = () => {
      const dx = mouse.current.x - ringPos.current.x;
      const dy = mouse.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      animationFrame.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrame.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className={`custom-cursor-ring ${hovering ? 'cursor-hover' : ''}`} />
    </>
  );
}
