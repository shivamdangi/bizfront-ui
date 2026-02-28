import { useEffect, useState } from 'react';

export const useParallax = (speed: number): number => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      setOffset(window.scrollY * speed);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return offset;
};
