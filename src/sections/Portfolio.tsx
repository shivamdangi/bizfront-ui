import { motion } from 'framer-motion';
import { portfolio } from '../data/siteContent';
import { useParallax } from '../hooks/useParallax';

const Portfolio = () => {
  const drift = useParallax(0.04);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {portfolio.map((item, idx) => (
            <motion.article
              key={item}
              className="portfolio-card"
              style={{ transform: `translateY(${drift * (idx + 1) * 0.2}px)` }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mockup" aria-hidden="true" />
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
