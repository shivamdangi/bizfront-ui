import { LazyExoticComponent, Suspense, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const featureTags = [
  'Pixel Perfect UI',
  'High Performance',
  'Scalable Architecture',
  'Modern React Stack',
  'Cost Effective Solutions'
];

interface HeroProps {
  Logo3D: LazyExoticComponent<(props: { active: boolean; pointer: { x: number; y: number }; mobile: boolean }) => JSX.Element>;
}

const Hero = ({ Logo3D }: HeroProps) => {
  const [active, setActive] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const parallax = useParallax(0.14);

  const mobile = useMemo(() => window.innerWidth < 768, []);

  return (
    <section className="hero section container" aria-label="Hero">
      <div className="hero__bg-layer hero__bg-layer--one" style={{ transform: `translateY(${parallax * 0.2}px)` }} />
      <div className="hero__bg-layer hero__bg-layer--two" style={{ transform: `translateY(${parallax * -0.16}px)` }} />
      <span className="hero__ghost" style={{ transform: `translateY(${parallax * 0.1}px)` }}>
        LEANFRONT
      </span>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero__content">
        <p className="eyebrow">PREMIUM FRONTEND STUDIO</p>
        <h1>We craft high-conversion digital interfaces with depth, precision, and performance.</h1>
        <p className="hero__subtext">
          LeanFront helps ambitious small businesses launch polished React experiences that look elite and scale confidently.
        </p>
        <div className="hero__actions">
          <a href="#pricing" className="btn btn--primary">Start a Project</a>
          <a href="#portfolio" className="btn btn--secondary">View Work</a>
        </div>
      </motion.div>

      <div
        className="hero__logo-wrap"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          setActive(false);
          setPointer({ x: 0, y: 0 });
        }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          setPointer({ x, y: -y });
        }}
        role="img"
        aria-label="Interactive 3D LeanFront layered logo"
      >
        <Suspense fallback={<div className="hero__logo-fallback">Loading 3D experience…</div>}>
          <Logo3D active={active} pointer={pointer} mobile={mobile} />
        </Suspense>
        <motion.div className="hero__feature-tags" initial={false} animate={active ? 'visible' : 'hidden'}>
          {featureTags.map((tag, idx) => (
            <motion.span
              key={tag}
              className={`feature-tag feature-tag--${idx + 1}`}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.24, delay: idx * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="scroll-indicator" aria-hidden>
        <span />
      </div>
    </section>
  );
};

export default Hero;
