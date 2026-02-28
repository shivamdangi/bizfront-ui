import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { LogoScene } from '../components/LogoScene';
import { useParallax } from '../hooks/useParallax';

export const Hero = () => {
  const offsetSlow = useParallax(0.14);
  const offsetFast = useParallax(0.24);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    const trackPointer = (event: MouseEvent) => {
      pointerX.set((event.clientX - window.innerWidth / 2) / 20);
      pointerY.set((event.clientY - window.innerHeight / 2) / 26);
    };

    window.addEventListener('mousemove', trackPointer);
    return () => window.removeEventListener('mousemove', trackPointer);
  }, [pointerX, pointerY]);

  return (
    <section className="hero section" id="home">
      <div className="hero-glow hero-glow--purple" style={{ transform: `translateY(${offsetSlow}px)` }} />
      <div className="hero-glow hero-glow--teal" style={{ transform: `translateY(${offsetFast}px)` }} />
      <div className="background-wording" style={{ transform: `translateY(${offsetSlow * 0.7}px)` }}>
        LEANFRONT
      </div>

      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="eyebrow">Premium Frontend Studio</p>
          <h1>Frontend experiences engineered for growth-focused small businesses.</h1>
          <p className="hero-subtext">
            We combine award-level visual craft with scalable React engineering so your platform looks world-class and performs
            without compromise.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#pricing">Book a Strategy Call</a>
            <a className="btn btn-ghost" href="#portfolio">View Case Studies</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ x: pointerX, y: pointerY }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <LogoScene pointer={{ x: pointerX, y: pointerY }} />
        </motion.div>
      </div>

      <div className="scroll-indicator" aria-hidden>
        <span />
      </div>
    </section>
  );
};
