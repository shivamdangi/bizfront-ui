import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const items = ['Analytics Command Center', 'Revenue Forecast Suite', 'Workflow Automation Hub'];

const Portfolio = () => {
  const offset = useParallax(0.12);

  return (
    <section className="section container" id="portfolio" aria-label="Portfolio">
      <div className="section__heading">
        <p className="eyebrow">PORTFOLIO</p>
        <h2>Product interfaces engineered to command trust.</h2>
      </div>
      <div className="portfolio-grid">
        {items.map((item, idx) => (
          <motion.article
            key={item}
            className="portfolio-card"
            style={{ transform: `translateY(${offset * (idx % 2 === 0 ? -0.09 : 0.07)}px)` }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="portfolio-card__mockup" aria-hidden>
              <div className="bar" />
              <div className="line" />
              <div className="line line--short" />
              <div className="tiles">
                <span />
                <span />
                <span />
              </div>
            </div>
            <h3>{item}</h3>
            <p>Premium SaaS dashboard prototype with nuanced data hierarchy and crystal-clear interaction paths.</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
