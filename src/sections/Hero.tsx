import { motion } from 'framer-motion';
import Logo3D from '../components/Logo3D';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const slow = useParallax(0.08);
  const fast = useParallax(0.18);

  return (
    <section className="hero section" id="home">
      <div className="hero-bg" style={{ transform: `translateY(${slow}px)` }} />
      <div className="hero-noise" style={{ transform: `translateY(${-fast}px)` }} />
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="kicker">LeanFront Studio</p>
          <h1>Frontend systems crafted for high-trust growth.</h1>
          <p className="subtext">
            We design and engineer premium React experiences for small businesses that want enterprise-level polish,
            speed, and scalability.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary">Start Your Build</button>
            <button className="btn btn-ghost">View Case Studies</button>
          </div>
        </motion.div>
        <Logo3D />
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
